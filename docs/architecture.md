# Go2Abroad Architecture

**Version:** 1.0  
**Date:** 2026-09-21  
**Status:** Current-state architecture with target evolution

## 1. Purpose

This document describes the technical architecture of Go2Abroad as currently
implemented, the responsibility of each application, the main data flows, and
the constraints that guide future development.

The repository is a JavaScript/TypeScript monorepo. The public website is a
React/Vite single-page application; the admin and student applications are
Next.js applications; and the shared backend is a NestJS REST API backed by
Prisma and MySQL.

## 2. System context

```text
                         Public internet
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
       Public website      Admin workspace    Student portal
       React + Vite        Next.js :3001      Next.js :3002
       :5173               │                 │
             │             └────────┬────────┘
             │                      │
             └──────────────┬───────┘
                            ▼
                      NestJS REST API
                           :4000
                            │
                   Prisma data-access layer
                            │
                         MySQL
```

Supporting services are represented by API integrations rather than separate
running services in the current repository:

- Local/persistent media storage for CMS uploads.
- Future email provider for password resets and notifications.
- Future analytics, queue, cache, and external university integrations.

## 3. Repository and ownership boundaries

```text
go2abroad/
├── apps/
│   ├── frontend/       React/Vite public website
│   ├── admin/          Next.js admin and CMS workspace
│   ├── student/        Next.js student portal foundation
│   └── api/            NestJS API and Prisma schema
├── packages/
│   └── page-builder/   Shared page-builder contracts and React renderer
├── docs/               Product, architecture, deployment, and status docs
├── tests/              Page-builder integration and schema tests
├── scripts/            Local development and test helpers
└── html/               Legacy static/PHP assets; not part of the new runtime
```

Each application owns its presentation and route handling. The API owns
business rules, authentication, authorization, persistence, and public/admin
data contracts. The page-builder package owns reusable page configuration
schemas and rendering contracts shared by the admin and API.

The applications should not access the database directly. All cross-application
data access goes through the API.

## 4. Application architecture

### 4.1 Public website: `apps/frontend`

Technology:

- React 19
- Vite
- React Router
- Static assets and legacy visual plugins in `public/`

Responsibilities:

- Render public marketing pages.
- Provide destination, course, service, FAQ, success-story, and contact
  experiences.
- Submit counselling enquiries.
- Display configurable branding where API integration is enabled.
- Provide phone, email, and WhatsApp conversion actions.

The current application is client-rendered with Vite and does not provide
server-side rendering or incremental static regeneration. SEO metadata and
published API content must therefore be handled deliberately as the public
content integration matures.

Current routes are defined in `apps/frontend/src/App.jsx` and include:

`/`, `/about-us`, `/services`, `/destinations`, `/courses`,
`/success-stories`, `/faq`, `/contact`, `/usa`, and
`/arizona-state-university`.

### 4.2 Admin workspace: `apps/admin`

Technology:

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS and page-builder styles

Responsibilities:

- Authenticate CMS users.
- Provide protected operational screens.
- Manage leads, students, universities, courses, FAQs, reviews, blogs, users,
  pages, media, navigation, and website settings.
- Manage page drafts, previews, publishing, versions, and revisions.
- Apply role-aware navigation and API access.

The admin browser stores access and refresh tokens in local storage and uses
`apps/admin/lib/cms-api.ts` for authenticated API calls and refresh handling.
This is a current implementation constraint; production hardening should assess
an httpOnly-cookie session model.

### 4.3 Student portal: `apps/student`

Technology:

- Next.js 15
- React 19
- TypeScript

Current responsibility:

- Provide database-managed branding and a student login foundation.
- Authenticate student users through the API.

Target responsibility:

- Student profile and education data.
- Saved universities and courses.
- Applications and status timeline.
- Documents and verification.
- Counsellor communication and notifications.

These target capabilities require additional API models and workflows; they
are not assumed to exist merely because the portal application exists.

### 4.4 API: `apps/api`

Technology:

- NestJS 11
- Prisma 6
- MySQL
- class-validator and class-transformer
- JWT, bcrypt, Helmet, CORS, and throttling
- Swagger/OpenAPI

The API is a modular monolith. Modules are separated by business capability
but run as one deployable process:

- `auth`: login, registration, refresh, logout, password reset, CMS session.
- `settings`: website settings and branding uploads.
- `pages`: pages, sections, draft/publish, preview, versions, and audit paths.
- `media`: CMS media listing, upload, and deletion.
- `leads`: public lead creation and protected lead management.
- `catalog`: students, universities, courses, FAQs, and reviews.
- `blog`: public blog reads and protected admin CRUD.
- `users`: protected user management.
- `health`: runtime health check.

The API starts on port `4000` by default and exposes Swagger at `/docs`.

### 4.5 Shared page builder: `packages/page-builder`

The package contains the shared contracts for configuration-driven pages:

- Section registry.
- Zod schemas.
- Page renderer and React components.
- Builder-related types and styles.

The package is built before the admin and API during relevant development and
build commands. It must remain framework-boundary conscious: schema and
configuration contracts are shared, while application-specific authentication
and API clients remain in their owning apps.

## 5. Request and data flows

### 5.1 Public enquiry flow

```text
Visitor fills form
        │
        ▼
React form validation/UI state
        │
        ▼
POST /leads
        │
        ▼
NestJS validation pipe
        │
        ▼
LeadsService creates Lead(status = NEW)
        │
        ▼
Prisma writes to MySQL
        │
        ▼
Success response → visitor confirmation
```

The public endpoint must remain limited to the fields needed for an enquiry.
Administrative lead reads and updates require CMS authentication and role
authorization.

### 5.2 Admin authentication flow

```text
Admin login form
      │
      ▼
POST /auth/admin/login
      │
      ▼
Validate credentials and allowed role
      │
      ▼
Issue access token + refresh token
      │
      ▼
Admin stores tokens and calls protected endpoints
      │
      ├── 401 → POST /auth/refresh → retry once
      └── logout → POST /auth/logout → revoke refresh session
```

The `CmsGuard` validates the access token, resolves the user, and role
decorators restrict protected operations. Admin roles include
`SUPER_ADMIN`, `ADMIN`, `CONTENT_MANAGER`, `SEO_MANAGER`, `EDITOR`, and
`COUNSELLOR`; students authenticate through the student-specific endpoints.

### 5.3 CMS publishing flow

```text
Admin edits draft
       │
       ▼
Page + PageSection draft configuration
       │
       ├── preview → temporary PagePreview configuration
       ├── save    → incremented revision/version data
       └── publish → published configuration and public visibility
                              │
                              ▼
                     public API/page rendering
```

Draft data must not be returned by public endpoints unless a secure preview
session is explicitly provided. Publishing and restoring versions are
privileged actions and should generate audit records.

### 5.4 Media flow

```text
Admin uploads file
       │
       ▼
POST /api/media or settings upload endpoint
       │
       ▼
Validate type/size and write to CMS media storage
       │
       ▼
Create Media record with storage key and creator
       │
       ▼
Return API-relative asset URL
```

The current local implementation serves CMS files from the API process. A
production deployment should use persistent object storage or a mounted
persistent volume and should keep storage configuration outside source code.

## 6. Data architecture

The source of truth for persistent domain data is MySQL through Prisma. Main
entities are:

| Area | Entities | Purpose |
|---|---|---|
| Identity | `User`, `AuthSession`, `StudentProfile` | Accounts, sessions, roles, and student details. |
| Branding | `WebsiteSetting` | Site identity, contact information, social links, and SEO defaults. |
| Conversion | `Lead` | Public enquiries and their operational status. |
| Catalogue | `University`, `Course` | Study catalogue content and relationships. |
| Trust/content | `Faq`, `Review`, `BlogPost` | Public editorial and social-proof content. |
| CMS | `Page`, `PageSection`, `PageVersion`, `PagePreview` | Configuration-driven pages and publishing. |
| Assets | `Media` | Uploaded CMS assets and ownership metadata. |
| Presentation | `Theme`, `Navigation`, `NavigationItem` | Database-managed presentation configuration. |
| Governance | `AuditLog` | Privileged CMS activity records. |

Important status enums include:

- Lead: `NEW`, `CONTACTED`, `QUALIFIED`, `CONVERTED`, `LOST`.
- User: `ACTIVE`, `INACTIVE`, `SUSPENDED`.
- Page/blog: `DRAFT`, `PUBLISHED`, `ARCHIVED`.

Database changes must use Prisma migrations. Existing migration history should
be preserved; each new schema change should be introduced as a reviewable
migration with seed coverage where appropriate.

## 7. API boundary

The current API surface is grouped as follows:

| Boundary | Representative endpoints | Access |
|---|---|---|
| Authentication | `/auth/admin/login`, `/auth/student/login`, `/auth/refresh`, `/auth/logout` | Public with credential validation; protected session endpoint. |
| Leads | `POST /leads`, `GET/PATCH /leads` | Create is public; read/update is CMS-protected. |
| Catalogue | `/universities`, `/courses`, `/faqs`, `/reviews`, `/students` | CMS-protected in current implementation. |
| Blog | `GET /blog`, `GET /blog/:slug`, `/admin/blog` | Public reads; admin CRUD protected. |
| Settings | `/settings/website` | Public read; admin write. |
| Pages | `/api/pages`, `/api/sections`, `/api/public` | CMS writes; public published reads. |
| Site design | `/api/site` | Privileged CMS access. |
| Media | `/api/media`, `/settings/website/upload` | Privileged CMS access. |
| Operations | `/health`, `/docs` | Health/public documentation according to deployment policy. |

All request bodies should be validated with DTOs. New endpoints should define
authorization, response shape, status codes, error behavior, and Swagger
documentation together.

## 8. Security architecture

Current controls:

- Password hashing with bcrypt.
- JWT access tokens and persisted refresh-token sessions.
- Role-based CMS guard and role decorators.
- Request validation with whitelist and transformation.
- Helmet security headers.
- CORS allowlist from environment configuration.
- Global request throttling.
- Upload response headers and content disposition for selected file types.

Required hardening before production:

- Replace or reassess browser local-storage token storage in favor of secure
  httpOnly cookies where operationally possible.
- Add rate limits specific to login, password reset, and lead creation.
- Add CSRF protection if cookie-based authentication is introduced.
- Validate upload MIME type, extension, size, and content consistently.
- Add structured audit events for user, permission, publishing, and media
  operations.
- Define retention and deletion rules for leads, profiles, and documents.
- Keep secrets, database URLs, and seed credentials out of committed files.

## 9. Runtime and deployment

### Local development

| Process | Port | Start command |
|---|---:|---|
| Public frontend | 5173 | `npm run dev:frontend` |
| Admin | 3001 | `npm run dev:admin` |
| Student | 3002 | `npm run dev:student` |
| API | 4000 | `npm run dev:api` |
| All web/API apps | — | `npm run dev:all` |

The page-builder package is built automatically by relevant pre-development and
pre-build scripts.

### Production shape

The applications can be deployed as separate Node processes behind a reverse
proxy or hosting platform:

```text
go2abroad.co          → public frontend
admin.go2abroad.co    → admin Next.js app
student.go2abroad.co  → student Next.js app
api.go2abroad.co      → NestJS API
```

The exact domain and hosting layout remain deployment decisions. The API must
have access to MySQL and persistent media storage, and all clients must use
environment-specific API URLs and allowed origins.

## 10. Observability and reliability

The current application has a health endpoint and build/lint/typecheck
commands. The target operational architecture should add:

- Structured application and access logs.
- Centralised error monitoring.
- Database backup and restore verification.
- Uptime and health checks for each process.
- Metrics for API latency, error rates, lead creation, and authentication
  failures.
- CI checks for build, typecheck, lint, migration validation, and tests.

## 11. Testing strategy

Testing should be layered:

1. Unit tests for API services, validation, authorization, and page-builder
   schemas.
2. API integration tests for auth, leads, catalogue, CMS publishing, and media.
3. Component/form tests for public and admin interactions.
4. End-to-end tests for enquiry submission, admin lead updates, publishing,
   student login, and future application workflows.
5. Smoke tests after deployment for health, public pages, login, and lead
   creation.

Existing page-builder tests should remain part of the CI baseline.

## 12. Architectural gaps and decisions

1. **Public rendering:** the public site is Vite client-rendered. If organic
   SEO becomes a primary acquisition channel, evaluate SSR/SSG or a dedicated
   pre-rendering strategy.
2. **Content integration:** much public page content is still component-owned;
   progressively connect it to published API content without removing fallback
   rendering.
3. **Token storage:** reassess local-storage token handling before handling
   sensitive student/application data.
4. **Database naming:** current runtime configuration is MySQL; documentation
   and deployment must not describe PostgreSQL as the active database.
5. **Background work:** email, reminders, analytics processing, and document
   processing may require a queue/worker once those workflows are introduced.
6. **Shared contracts:** add shared API/domain types and validation schemas as
   student and application workflows expand.
7. **Legacy assets:** `html/` and the standalone `go2abroadreact/` source tree
   should be treated as migration/reference material until formally retired.

## 13. Architecture principles

- Keep business rules in the API, not in individual clients.
- Keep public, admin, and student concerns isolated at the application layer.
- Prefer explicit DTOs, typed contracts, and validated configuration.
- Treat drafts and published content as separate states.
- Make privileged changes auditable.
- Prefer recoverable migrations and additive changes.
- Design public pages for accessibility, performance, and measurable
  conversion.
