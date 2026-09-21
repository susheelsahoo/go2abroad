# Go2Abroad Project Tasks

**Version:** 1.1  
**Date:** 2026-09-21  
**Status:** Working delivery backlog

## 1. How to use this document

This is the implementation backlog for Go2Abroad. Product scope is defined in
`docs/project-details.md`; technical boundaries are defined in
`docs/architecture.md`; visual rules are defined in `docs/design.md`.

Task status:

- `[x]` Complete and verified.
- `[~]` In progress or partially complete.
- `[ ]` Planned.
- `[!]` Blocked or requires a product decision.

Every task should identify its owning application, dependencies, acceptance
criteria, and validation commands before implementation begins.

## 2. Completed foundation

- [x] Monorepo structure for frontend, admin, student, API, shared package, and
  documentation.
- [x] React/Vite public website with core marketing routes.
- [x] Next.js admin application with protected shell and navigation.
- [x] Next.js student login foundation.
- [x] NestJS API with Prisma and MySQL configuration.
- [x] JWT access tokens, refresh sessions, logout, password hashing, and role
  checks.
- [x] Admin, counsellor, and student seed accounts.
- [x] Website settings and database-managed branding.
- [x] Public lead creation and protected lead listing/status updates.
- [x] University, course, FAQ, review, and student management APIs/admin
  screens.
- [x] Blog API and admin management.
- [x] Page builder with sections, drafts, publishing, preview, versions, and
  media support.
- [x] Shared page-builder package and integration tests.
- [x] API validation, Helmet, CORS configuration, throttling, health endpoint,
  and Swagger documentation.
- [x] Updated frontend UI/assets merged into `apps/frontend`.
- [x] Product, architecture, rules, and design documentation.

## 3. Current project status

**Last reviewed:** 2026-09-21

### Working now

- Monorepo development and build commands are available for the frontend,
  admin, student, API, and page-builder package.
- The API uses NestJS, Prisma, and MySQL with migrations and seed data.
- Authentication includes admin/student login foundations, JWT access tokens,
  refresh sessions, logout, password hashing, role checks, and password-reset
  foundations.
- Admin modules are available for users, students, leads, universities,
  courses, FAQs, reviews, blogs, pages, media, and website settings.
- The page builder supports page/section editing, draft/publish workflow,
  previews, versions, ordering, and media selection.
- The public frontend has the current merged marketing design and routes for
  Home, About, Services, Destinations, Courses, Success Stories, FAQ, Contact,
  USA, and Arizona State University.

### Partially complete or not yet production-ready

- Public page content is still primarily component-owned/static; published API
  catalogue and CMS content are not yet consistently rendered by every public
  page.
- The public enquiry form currently submits through FormSubmit; the API lead
  endpoint exists but is not yet the active frontend submission path.
- `WebsiteSettingsContext.jsx` contains settings integration, but the current
  public `App.jsx` does not mount its provider; public header/footer branding
  currently uses static assets.
- The student app currently provides a branded login foundation, not the full
  profile/application/document workflow.
- Dashboard summary values and some reporting are placeholders.
- Production analytics, consent, accessibility review, monitoring, backups,
  structured logging, and deployment hardening remain outstanding.

### Current priority

Stabilise the merged public frontend, connect published API content, harden
enquiry capture and lead operations, then continue the student workflow.

## 4. Current priority: public website integration

### T1 — Stabilise the merged public frontend

**Owner:** `apps/frontend`  
**Priority:** P0  
**Dependencies:** None

- [ ] Verify every public route at desktop, tablet, and mobile widths.
- [ ] Verify direct URL loading and refresh behavior for every route.
- [ ] Verify mobile navigation, dropdowns, footer links, floating actions, and
  scroll behavior.
- [ ] Remove or fix console errors from legacy scripts and route transitions.
- [ ] Verify all local image, CSS, font, and JavaScript asset paths.
- [ ] Confirm enquiry, phone, email, and WhatsApp CTAs use approved contact
  details.
- [ ] Add graceful fallback behavior when the API is unavailable.

**Acceptance criteria:** all current public routes render without blocking
errors, responsive layouts do not overflow, and primary conversion actions work.

### T2 — Complete public API content integration

**Owner:** `apps/frontend` + `apps/api`  
**Priority:** P0  
**Dependencies:** T1, published seed/content data

- [ ] Connect public universities to published university data.
- [ ] Connect public courses to published course data.
- [ ] Connect FAQs and reviews to published API data.
- [ ] Connect public blog listing and article detail pages to `/blog`.
- [ ] Connect destinations and page sections to published CMS configuration where
  appropriate.
- [ ] Preserve static fallback content for temporary API failures.
- [ ] Add loading, empty, and error states for every API-backed public section.

**Acceptance criteria:** unpublished records never appear publicly; published
records appear without a code deployment; fallback content remains usable.

### T3 — Public SEO and analytics

**Owner:** `apps/frontend` + `apps/api`  
**Priority:** P0  
**Dependencies:** T2, analytics decision

- [ ] Define page title and description rules for every public route.
- [ ] Add canonical URLs, Open Graph metadata, and social preview images.
- [ ] Add sitemap and robots behavior.
- [ ] Decide whether Vite client rendering is sufficient or pre-rendering/SSR is
  required for SEO targets.
- [ ] Add analytics events for page views, enquiry starts, enquiry success,
  phone clicks, email clicks, WhatsApp clicks, and primary CTAs.
- [ ] Add consent handling before non-essential tracking.

**Acceptance criteria:** every indexable page has valid metadata and key
conversion events can be measured without collecting unnecessary personal data.

## 5. Lead and counselling workflow

### T4 — Harden enquiry capture

**Owner:** `apps/frontend` + `apps/api`  
**Priority:** P0  
**Dependencies:** T1

- [ ] Align frontend fields with `CreateLeadDto`.
- [ ] Add client-side validation matching server rules.
- [ ] Add duplicate-submit protection and request timeout handling.
- [ ] Confirm lead source and landing-page attribution behavior.
- [ ] Add rate limiting and abuse protection specific to public lead creation.
- [ ] Define privacy and retention behavior for submitted lead data.

**Acceptance criteria:** valid enquiries create one lead with status `NEW`;
invalid or repeated submissions receive safe, actionable feedback.

### T5 — Build operational lead management

**Owner:** `apps/admin` + `apps/api`  
**Priority:** P0  
**Dependencies:** T4

- [ ] Add lead search, pagination, date filters, destination filters, and
  interest filters.
- [ ] Add lead detail view.
- [ ] Add counsellor assignment.
- [ ] Add internal notes and follow-up date.
- [ ] Add contact history and status transition history.
- [ ] Add lead source reporting and export.
- [ ] Add email or in-app notification for new and overdue leads.
- [ ] Define and display response-time SLA indicators.

**Acceptance criteria:** an authorised counsellor can take a new lead from
`NEW` through a documented workflow, and managers can measure response and
conversion performance.

## 6. Student portal and application workflow

### T6 — Complete student account experience

**Owner:** `apps/student` + `apps/api`  
**Priority:** P1  
**Dependencies:** authentication foundation

- [ ] Add student registration UI.
- [ ] Add logout, refresh, forgot-password, and reset-password UI.
- [ ] Add protected student layout and dashboard.
- [ ] Add profile editing for identity, contact, education, and English-test
  information.
- [ ] Add session-expiry and unauthorized states.
- [ ] Replace hardcoded API URL with environment-based configuration.

**Acceptance criteria:** a student can register, authenticate, update their
profile, sign out, and recover an account without exposing credentials.

### T7 — Add discovery and saved options

**Owner:** `apps/student` + `apps/api`  
**Priority:** P1  
**Dependencies:** T2, T6

- [ ] Add university search and detail views.
- [ ] Add course search and detail views.
- [ ] Add filters for destination, level, field, and university.
- [ ] Add saved universities and courses.
- [ ] Add empty and unavailable-result states.

**Acceptance criteria:** a student can discover and save relevant study options
from published catalogue data.

### T8 — Add applications and documents

**Owner:** `apps/student` + `apps/admin` + `apps/api`  
**Priority:** P1  
**Dependencies:** T6, T7, media/security decisions

- [ ] Add application, application-item, and status-history models.
- [ ] Add application draft and submission workflow.
- [ ] Add counsellor assignment.
- [ ] Add document upload, type/size validation, and secure access.
- [ ] Add document review and verification statuses.
- [ ] Add student application timeline.
- [ ] Add admin application and document review screens.

**Acceptance criteria:** a student can submit an application with required
documents, and authorised staff can review it without public document access.

## 7. Admin and CMS improvements

### T9 — Complete content operations

**Owner:** `apps/admin` + `apps/api`  
**Priority:** P1  
**Dependencies:** Existing CMS foundation

- [ ] Add search, filters, pagination, and sorting to all collection screens.
- [ ] Add consistent create/edit/delete confirmation and error handling.
- [ ] Add publish/archive controls with clear status labels.
- [ ] Add page version comparison where useful.
- [ ] Add navigation editor validation for duplicate or invalid links.
- [ ] Add media type, size, preview, and deletion safeguards.
- [ ] Replace dashboard placeholder metrics with API-backed metrics.

### T10 — Role and audit hardening

**Owner:** `apps/api` + `apps/admin`  
**Priority:** P1  
**Dependencies:** Existing auth/guard system

- [ ] Document permissions for every admin route and API operation.
- [ ] Add permission-focused integration tests.
- [ ] Add audit-log writes for user, permission, publish, restore, media, and
  settings changes.
- [ ] Add audit-log viewer for authorised administrators.
- [ ] Add inactive/suspended account handling tests.

## 8. Platform hardening

### T11 — Security hardening

**Owner:** API/platform  
**Priority:** P0 before production

- [ ] Decide whether to replace browser local-storage tokens with secure
  httpOnly cookies.
- [ ] Add endpoint-specific rate limits for login, reset, and leads.
- [ ] Review CORS origins for staging and production.
- [ ] Validate upload contents, not only file extensions and MIME headers.
- [ ] Add secret rotation procedure.
- [ ] Review dependencies and run security audit.
- [ ] Define personal-data retention and deletion procedures.
- [ ] Add privacy policy and terms pages before production lead collection.

### T12 — Testing and quality gates

**Owner:** All application owners  
**Priority:** P0 before production

- [ ] Add API unit tests for auth, leads, catalogue, CMS, and permissions.
- [ ] Add API integration tests for public/private boundary behavior.
- [ ] Add frontend form and conversion-flow tests.
- [ ] Add admin permission and CRUD tests.
- [ ] Add student authentication and profile tests.
- [ ] Add end-to-end smoke tests for enquiry, login, publishing, and lead
  update workflows.
- [ ] Add CI typecheck, lint, build, migration, and test checks.
- [ ] Track and reduce existing vendor-script lint warnings where safe.

### T13 — Observability and operations

**Owner:** Platform/deployment  
**Priority:** P1

- [ ] Add structured API logging.
- [ ] Add error monitoring for frontend, admin, student, and API.
- [ ] Add uptime checks for all deployed processes.
- [ ] Add database backups and restore verification.
- [ ] Add media-storage backup/retention policy.
- [ ] Add deployment smoke checks.
- [ ] Document staging and production rollback procedures.

## 9. Design and accessibility tasks

### T14 — Design consistency

**Owner:** All UI owners  
**Priority:** P1

- [ ] Consolidate shared color, spacing, typography, button, form, status, and
  focus tokens.
- [ ] Remove duplicated one-off visual patterns where practical.
- [ ] Align admin and student branding with configurable website settings.
- [ ] Add consistent empty, loading, error, success, and disabled states.
- [ ] Add reduced-motion handling for public animations and cursor effects.

### T15 — Accessibility review

**Owner:** All UI owners  
**Priority:** P0 before production

- [ ] Verify keyboard navigation for header, dropdowns, forms, modals, and
  admin navigation.
- [ ] Verify heading hierarchy and page landmarks.
- [ ] Verify color contrast and visible focus indicators.
- [ ] Verify labels, validation messages, and screen-reader announcements.
- [ ] Verify touch target size and mobile overflow behavior.
- [ ] Run an automated accessibility scan and manually test key workflows.

## 10. Deployment and infrastructure tasks

### T16 — Environment separation

**Owner:** Platform/deployment  
**Priority:** P0 before production

- [ ] Define development, staging, and production environment variables.
- [ ] Configure separate databases and media storage locations.
- [ ] Configure production CORS origins and public API URLs.
- [ ] Define domain/subdomain routing for frontend, admin, student, and API.
- [ ] Confirm Node.js version and process management strategy.
- [ ] Add deployment secrets through the hosting provider, not repository files.

### T17 — Production readiness

**Owner:** Platform/deployment  
**Priority:** P0 before launch

- [ ] Deploy a staging environment.
- [ ] Run migration and seed strategy against staging.
- [ ] Verify persistent media uploads after process restart.
- [ ] Verify TLS, redirects, headers, and CORS.
- [ ] Run smoke tests and acceptance checklist.
- [ ] Create rollback and backup runbooks.
- [ ] Obtain stakeholder acceptance before production release.

## 11. Recommended execution order

```text
T1 frontend stability
  ↓
T4 enquiry hardening ──→ T5 lead operations
  ↓                         ↓
T2 public API content ──→ T3 SEO/analytics
  ↓
T6 student account ─────→ T7 discovery ─────→ T8 applications/documents
  ↓
T9/T10 admin hardening
  ↓
T11/T12/T13 platform quality
  ↓
T14/T15 design quality + accessibility
  ↓
T16/T17 staging and production
```

## 12. Working task checklist

Before starting:

- [ ] Identify the owning app/module.
- [ ] Read the relevant PRD and architecture section.
- [ ] Check current `git status` and preserve unrelated changes.
- [ ] Define acceptance criteria.
- [ ] Identify database, API, security, and documentation impact.

During implementation:

- [ ] Reuse existing patterns and shared utilities.
- [ ] Validate inputs and permissions.
- [ ] Handle loading, empty, success, and error states.
- [ ] Add or update tests.
- [ ] Update environment examples if configuration changes.

Before handoff:

- [ ] Run focused tests and checks.
- [ ] Run broader checks proportional to risk.
- [ ] Review `git diff --stat` and `git status`.
- [ ] Check for secrets, debug output, accidental generated files, and
  unrelated modifications.
- [ ] Update status and architecture/product documentation if needed.
- [ ] Report completed work, validation, and remaining risks.

## 13. Definition of done

A task is complete when:

- The requested behavior works in the owning application.
- API boundaries, validation, authorization, and privacy requirements are
  satisfied.
- Relevant UI states and responsive behavior are implemented.
- Database migrations and seed changes exist where required.
- Tests, lint, typecheck, and build checks pass, or failures are documented.
- Documentation reflects the new current behavior.
- No unrelated changes or sensitive files are included.
