# Go2Abroad Project Memory

**Last updated:** 2026-09-21  
**Purpose:** Durable context for future development sessions

## 1. Project identity

Go2Abroad is a study-abroad consultancy platform focused on helping students
discover study destinations, universities, courses, and support services, then
converting that interest into counselling enquiries and future applications.

The project is a monorepo located at:

```text
/Applications/XAMPP/xamppfiles/htdocs/go2abroad
```

## 2. Current architecture

```text
apps/frontend  → React 19 + Vite public website
apps/admin     → Next.js 15 admin/CMS application
apps/student   → Next.js 15 student portal foundation
apps/api       → NestJS 11 REST API
MySQL          → Prisma persistence layer
packages/page-builder → shared CMS page-builder package
```

Local ports:

- Frontend: `5173`
- Admin: `3001`
- Student: `3002`
- API: `4000`

The active database provider is MySQL. Older planning documents may mention
PostgreSQL, but runtime configuration and migrations currently target MySQL.

## 3. Important repository locations

- Public website: `apps/frontend`
- Admin dashboard: `apps/admin`
- Student portal: `apps/student`
- Backend API: `apps/api`
- Prisma schema: `apps/api/prisma/schema.prisma`
- Shared page builder: `packages/page-builder`
- Project details and product requirements: `docs/project-details.md`
- Architecture: `docs/architecture.md`
- Design system: `docs/design.md`
- Project rules: `docs/rule.md`
- Project status and delivery backlog: `docs/task.md`
- Deployment guide: `docs/GODADDY_DEPLOYMENT.md`
- Legacy/reference assets: `html/` and standalone `go2abroadreact/`

## 4. Implemented capabilities

### Public website

The React/Vite website currently contains routes for:

- Home
- About Us
- Services
- Destinations
- Courses
- Success Stories
- FAQ
- Contact
- USA
- Arizona State University

It includes responsive navigation, public marketing sections, enquiry forms,
footer/partner content, phone/email/WhatsApp actions, floating contact actions,
and legacy visual plugins/assets.

### API

The NestJS API currently includes:

- Admin and student authentication.
- JWT access tokens and refresh sessions.
- Logout and password-reset foundations.
- Role-based CMS authorization.
- Website settings and branding.
- Public lead creation and protected lead management.
- Students, universities, courses, FAQs, and reviews.
- Public/admin blog operations.
- Page builder pages, sections, drafts, publishing, previews, versions, and
  audit paths.
- CMS media upload/list/delete support.
- Health endpoint and Swagger documentation.

### Admin

The admin application includes login, overview, leads, students, universities,
courses, FAQs, reviews, blogs, users, pages/page builder, and website settings
screens. Database-managed branding is used in supported admin surfaces.

### Student

The student app currently provides a branded login foundation. Registration API
support exists, but the full student profile, application, document, and
communication workflows are still planned.

## 5. Current product direction

The next major delivery path is:

1. Stabilise and verify the merged public frontend.
2. Connect public catalogue and blog content to published API data.
3. Complete lead assignment, notes, follow-ups, and reporting.
4. Build student profile and discovery workflows.
5. Build applications and document verification.
6. Add analytics, accessibility, security hardening, testing, monitoring, and
   production deployment readiness.

The detailed backlog is in `docs/task.md`.

## 6. Important implementation decisions

- The public site remains React/Vite for now; it is not SSR/Next.js.
- The API is a modular monolith rather than multiple backend services.
- Clients communicate with the API; clients do not access Prisma/MySQL directly.
- Page-builder schemas and registry logic are shared through
  `@go2abroad/page-builder`.
- Draft content must remain private until published.
- Public content should be API-backed progressively while preserving safe
  fallback content during migration.
- Existing frontend configuration in `apps/frontend` must support root
  deployment; do not reintroduce a `/go2abroadreact` router basename there.
- The standalone `go2abroadreact` project was merged as a source of updated UI
  and assets, but it is not the active monorepo frontend runtime.

## 7. Security memory

Current security mechanisms include bcrypt password hashing, JWT sessions,
refresh-token revocation, CMS role guards, DTO validation, Helmet, CORS, and
global throttling.

Before production, revisit:

- Browser local-storage token storage in admin/student apps.
- Endpoint-specific rate limits for login, reset, and public leads.
- Upload content validation and persistent storage.
- Audit-log coverage for privileged operations.
- Privacy, retention, and deletion rules for leads, students, documents, and
  applications.
- Production secrets, TLS, backups, and monitoring.

## 8. Development commands

```bash
# Run applications
npm run dev:frontend
npm run dev:admin
npm run dev:student
npm run dev:api
npm run dev:all

# Build
npm run build

# Quality
npm run lint
npm run typecheck
npm run test:cms
```

Useful application-specific commands:

```bash
npm --prefix apps/frontend run build
npm --prefix apps/frontend run lint
npm --prefix apps/api run db:generate
npm --prefix apps/api run db:migrate
npm --prefix apps/api run db:seed
npm --prefix packages/page-builder run build
```

## 9. Known caveats

- Some public frontend content is still hardcoded in React components.
- Public blog/catalogue integration is incomplete.
- Admin dashboard summary values include placeholder data and must become
  API-backed before being used for operations.
- Student application and document workflows are not implemented yet.
- Analytics and consent handling are not complete.
- Legacy vendor JavaScript produces lint warnings; do not rewrite it casually.
- `html/` is legacy and should not be treated as the source of truth for the
  current application.
- There may be unrelated local changes in the worktree. Always inspect
  `git status` before editing or reverting files.

## 10. Session handoff checklist

Before starting new work:

1. Read this file, `docs/rule.md`, and the relevant PRD/architecture section.
2. Inspect `git status --short`.
3. Identify the owning application and existing implementation pattern.
4. Check environment examples before adding configuration.
5. Check Prisma schema and API guards before changing data or permissions.
6. Update tests and documentation when behavior changes.
7. Run focused checks, then report broader validation and known warnings.

## 11. Source-of-truth order

When documents disagree, use this order:

1. Current source code and migrations for implemented behavior.
2. `docs/project-details.md` for approved product scope.
3. `docs/architecture.md` for technical boundaries and target structure.
4. `docs/design.md` for visual and interaction decisions.
5. `docs/rule.md` for engineering and contribution rules.
6. `docs/task.md` and this memory file for progress context.
7. Older root-level or legacy documents as historical/reference material only.
