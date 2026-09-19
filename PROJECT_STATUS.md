# Go2Abroad Project Status

Last updated: 2026-09-19

## 1. Current Architecture

- Monorepo structure is in place.
- `apps/frontend` — public website for visitors.
- `apps/admin` — admin dashboard for staff.
- `apps/student` — student portal.
- `apps/api` — NestJS shared backend API with MySQL and Prisma.
- `packages/ui` — planned shared UI components.
- `packages/types` — planned shared TypeScript types.
- `packages/validation` — planned shared validation schemas.
- `packages/utils` — planned shared utilities.
- `html/` — legacy PHP/static project; not used by the new applications.

## 2. Completed

- Created the React/Vite public frontend, Next.js admin, and student applications.
- Moved the public React website into `apps/frontend`.
- Added separate development ports:
  - Frontend: `5173` (Vite)
  - Admin: `3001`
  - Student: `3002`
- Added `npm run dev:all` to run all web applications together.
- Added root build commands for all applications.
- Added monorepo workspace configuration.
- Added NestJS API foundation with MySQL and Prisma migrations.
- Added standard `User`, `StudentProfile`, `AuthSession`, and `WebsiteSetting` models.
- Added development admin and student seed accounts.
- Added admin login, student registration/login, logout, and password-reset APIs.
- Added bcrypt password hashing, JWT access tokens, refresh-token sessions, and role checks.
- Added Swagger UI at `http://localhost:4000/docs`.
- Added website settings CRUD API and seeded default settings.
- Added website image upload API for logos and favicon.
- Added website contact lead capture API and MySQL `leads` table migration.
- Added admin login and forgot-password UI.
- Added reusable admin sidebar, header, and shell components.
- Applied the shared admin shell consistently across all admin modules and fixed sidebar icon/text alignment.
- Added admin dashboard and website settings form.
- Added working admin Leads page with status filtering and updates.
- Added role-based CMS authorization for Admin, Counsellor, and Student users.
- Added admin Users module with account creation, editing, deactivation, role assignment, and password hashing.
- Added counsellor access restrictions to Overview, Leads, and Students.
- Added Blog API, Prisma model/migration, public blog endpoints, and admin blog management.
- Added idempotent seed coverage for admin, counsellor, student, settings, catalogue, FAQs, reviews, leads, and blog content.
- Existing migration history is preserved; new schema changes should use one migration per table.
- Admin entry point is available at `http://localhost:3001/`.
- Website settings are available at `http://localhost:3001/settings` and are
  consumed by the public React website at `http://localhost:5173`.
- Connected the database-managed logo to the public header/footer, admin
  sidebar, and admin login screen.
- Added the configuration-driven page content editor: Prisma models, page/section
  APIs, component registry and schemas, fixed-structure admin content forms,
  media picker, SEO, draft/publish workflow, secure previews, version history,
  and public catch-all rendering. Layout and styling remain developer-owned.
- Added Tailwind CSS styling to the admin application.
- Confirmed React/Vite frontend, admin, and API builds successfully.

## 3. Frontend Modules — `apps/frontend`

### Public website

- [x] Add homepage design and responsive behavior.
- [x] Add About Us page.
- [x] Add Services page.
- [x] Add Study Destinations listing and detail pages.
- [ ] Add Universities listing and detail pages.
- [x] Add Courses listing and detail pages.
- [ ] Add Scholarships section.
- [x] Add Success Stories section.
- [ ] Add Blog listing and article pages.
- [x] Add Contact and consultation enquiry forms.
- [x] Add navigation, footer, and mobile menu.
- [ ] Connect all page content to the API.
- [x] Add global SEO metadata and favicon settings integration.
- [ ] Add accessibility review and performance optimization.

### Frontend integration

- [x] Create website settings API integration.
- [x] Add API fallback content when settings are unavailable.
- [ ] Add form validation.
- [ ] Add analytics and consent handling.
- [ ] Replace page-specific static data with API data.

## 4. Backend Modules — `apps/api`

### Backend foundation

- [x] Initialize NestJS application.
- [x] Configure environment variables.
- [x] Configure MySQL connection.
- [x] Replace the historical PostgreSQL migration history with a MySQL baseline.
- [x] Add Prisma ORM.
- [ ] Add API versioning and global error handling.
- [x] Add request validation and response serialization.
- [ ] Add structured logging.
- [x] Add health check and Swagger documentation.

### Authentication and authorization

- [x] Admin login and logout.
- [x] Student registration and login API.
- [x] Logout and refresh-token revocation.
- [x] Password reset API foundation.
- [ ] Email verification.
- [x] Role validation during admin/student login.
- [x] Secure password hashing and token session handling.
- [ ] Rate limiting and security protections.

### Core business modules

- [x] Page and PageSection models with JSON-driven content.
- [x] Page CRUD, section CRUD, reorder, duplicate, and publish API endpoints.
- [x] Admin page-content editor at `/pages` with predefined fields for the
  developer-owned page sections.

- [x] Student account CRUD for users with the `STUDENT` role.
- [ ] Extended student profile CRUD.
- [ ] Student applications.
- [ ] Application status and workflow history.
- [ ] Documents and document verification.
- [ ] Counsellors and assignments.
- [x] Leads and enquiries.
- [ ] Countries and destinations.
- [x] Universities.
- [x] Courses and intakes.
- [ ] Scholarships.
- [x] Blogs and content management API and admin module.
- [ ] Notifications and communication history.
- [ ] Audit logs.

## 5. Admin Modules — `apps/admin`

- [x] Create admin authentication screens.
- [x] Create protected admin layout and navigation.
- [x] Build dashboard UI with key statistics.
- [x] Manage users, roles, and permissions.
- [x] Manage student accounts.
- [x] Manage leads and enquiries.
- [ ] Assign leads to counsellors.
- [ ] Manage applications and status transitions.
- [ ] Review and approve student documents.
- [ ] Manage destinations and countries.
- [x] Manage universities.
- [x] Manage courses and intakes.
- [x] Manage FAQs.
- [x] Manage reviews and testimonials.
- [ ] Manage scholarships.
- [x] Manage blogs and website content in the admin dashboard.
- [ ] Add reports, filters, search, pagination, and exports.
- [ ] Add audit-log views.
- [x] Connect admin authentication and website settings screens to the API.
- [x] Use database-managed branding in the admin login and dashboard shell.

## 6. Student Modules — `apps/student`

- [x] Create student login screen.
- [ ] Create student registration screen.
- [x] Use database-managed branding on the student login screen.
- [ ] Create protected student layout and navigation.
- [ ] Build student dashboard.
- [ ] Build and edit student profile.
- [ ] Add education and test-score information.
- [ ] Add university and course discovery.
- [ ] Add saved universities and courses.
- [ ] Create and submit applications.
- [ ] Show application status and timeline.
- [ ] Add document upload and document status.
- [ ] Add counsellor communication area.
- [ ] Add notifications.
- [ ] Add profile and account settings.
- [ ] Connect all screens to the API.

## 7. Shared Packages — `packages/`

### `packages/ui`

- [ ] Create shared buttons, inputs, tables, cards, modals, alerts, and form components.
- [ ] Create shared layout, typography, colors, and responsive design tokens.
- [ ] Ensure components support frontend, admin, and student requirements.

### `packages/types`

- [ ] Define shared User, Student, Admin, Lead, Application, University, Course, and Document types.
- [ ] Define API request and response types.
- [ ] Keep types synchronized with backend contracts.

### `packages/validation`

- [ ] Add shared authentication validation.
- [ ] Add profile, enquiry, application, and document validation schemas.
- [ ] Reuse schemas on client and server where appropriate.

### `packages/utils`

- [ ] Add date, currency, formatting, and file helpers.
- [ ] Add shared API and error-handling helpers.

## 8. Database and Infrastructure

- [ ] Select and provision the production database.
- [ ] Design the database schema.
- [x] Add MySQL migration and seed data.
- [ ] Configure file storage for student documents.
- [ ] Configure email provider.
- [ ] Configure background jobs and notifications if required.
- [ ] Add local development environment configuration.
- [ ] Add Docker configuration where useful.
- [ ] Configure staging and production environments.
- [ ] Configure backups, monitoring, and alerting.

## 9. Testing and Quality

- [ ] Add unit tests for backend services and shared packages.
- [ ] Add API integration tests.
- [ ] Add frontend component and form tests.
- [ ] Add admin permission tests.
- [ ] Add student workflow tests.
- [ ] Add end-to-end tests for registration, enquiry, application, and document flows.
- [ ] Add linting and formatting checks.
- [ ] Add type checking to CI.
- [ ] Perform security, accessibility, and performance reviews.

## 10. Recommended Delivery Order

1. Connect the public frontend blog listing and article pages to the Blog API.
2. Connect remaining public page content to the API.
3. Build student profiles, applications, and documents.
4. Add lead assignment and counsellor workflow features.
5. Add shared packages and remove duplicated code.
6. Add testing, security, deployment, monitoring, and backups.
7. Launch staging, perform acceptance testing, then deploy production.

## 11. Local Commands

```bash
npm run dev:frontend
npm run dev:admin
npm run dev:student
npm run dev:all
npm run build
```

## 12. Next Modules

Implement in this order:

- [x] **Authorization:** JWT guards, protected routes, role-based permissions, and admin route protection.
- [x] **Users:** Admin user list, create/edit/deactivate users, role assignment, and profile management.
- [ ] **Leads:** Enquiry capture, lead list, status workflow, counsellor assignment, notes, and follow-ups.
- [x] **Content:** Destinations, universities, courses, FAQs, blogs, testimonials, and media management in admin/API.
- [ ] **Student portal:** Registration UI, profile, saved courses, applications, documents, and status timeline.
- [x] **Frontend integration:** Connect global website settings to the React frontend.
- [ ] **Frontend integration:** Replace page-specific static content with content API data.
- [ ] **Email:** Connect password reset, verification, enquiry notifications, and application updates to an email provider.
- [ ] **Quality:** Add tests, API error standards, rate limiting, audit logs, and deployment configuration.

Current status: the monorepo, MySQL database, Prisma schema, authentication,
role-based authorization, shared admin shell, Users module, Leads module, catalog
modules, website settings, page builder, and Blog API/admin module are working.
The next priority is connecting the public frontend Blog pages and continuing
student workflows, lead assignment, testing, and production hardening.
