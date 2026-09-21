# Go2Abroad Project Rules

**Version:** 1.0  
**Date:** 2026-09-21  
**Applies to:** All Go2Abroad applications, packages, scripts, and documentation

## 1. General rules

- Read the relevant product, architecture, and status documentation before
  making a material change.
- Keep changes focused on the requested task.
- Preserve existing user changes and unrelated work.
- Prefer simple, readable, maintainable solutions over clever abstractions.
- Do not silently change product behavior, deployment assumptions, database
  providers, or authentication behavior.
- Update documentation when architecture, commands, APIs, or workflows change.
- Do not commit secrets, credentials, private keys, production data, or local
  environment files.

## 2. Architecture boundaries

- `apps/frontend` is the public React/Vite website.
- `apps/admin` is the protected Next.js admin/CMS application.
- `apps/student` is the student portal.
- `apps/api` is the NestJS backend and the owner of business rules,
  authentication, authorization, validation, and persistence.
- `packages/page-builder` owns shared page-builder schemas, registry entries,
  renderers, and related styles.
- Client applications must not connect directly to MySQL or Prisma.
- Cross-application data access must use the API contract.
- The active database provider is MySQL. Do not introduce PostgreSQL-specific
  code or documentation unless the migration is explicitly approved.
- Treat `html/` and the standalone `go2abroadreact/` tree as legacy/reference
  material unless the task explicitly targets them.

## 3. Frontend rules

### Public frontend

- Use React components and React Router for public website behavior.
- Keep public pages responsive across mobile, tablet, and desktop layouts.
- Use semantic HTML, accessible labels, keyboard navigation, meaningful alt
  text, and visible focus states.
- Keep conversion actions visible and functional: enquiry, phone, email, and
  WhatsApp actions.
- Do not remove fallback content while connecting pages to the API unless the
  replacement is verified.
- Use `VITE_API_URL` for API configuration; do not hardcode production URLs.
- Avoid adding dependencies when the existing React/Vite stack can solve the
  problem clearly.

### Admin and student applications

- Keep protected routes and privileged operations behind API authorization.
- Reuse the existing API client and token-refresh behavior where applicable.
- Do not duplicate business rules in admin or student components.
- Show loading, success, empty, validation, and error states for data actions.
- Use typed props, typed API responses, and clear component boundaries.
- Preserve database-managed branding behavior.

## 4. TypeScript and JavaScript rules

- Use TypeScript for API, admin, student, and shared-package code.
- Use clear types instead of `any`; document an unavoidable exception.
- Follow ESLint/oxlint rules and fix new warnings where practical.
- Use `async`/`await` for asynchronous workflows.
- Handle rejected promises and network failures explicitly.
- Keep functions small and name them after their business purpose.
- Avoid hidden global state and side effects during module initialization.
- Do not use unsafe HTML rendering for untrusted content.
- Keep browser-only APIs inside client components or guarded browser paths.

## 5. PHP and legacy code

- Follow PSR-12 for any PHP code that must be changed.
- Do not expand legacy PHP/static code when the requested functionality belongs
  in the current React, Next.js, or NestJS applications.
- If a legacy compatibility change is required, document why it is needed and
  identify the intended migration path.

## 6. API and backend rules

- Implement business logic in NestJS services, not in controllers.
- Keep controllers thin: parse input, apply guards/decorators, and call a
  service.
- Validate all request bodies, query parameters, and route parameters with
  DTOs and `class-validator`.
- Use Prisma for database access; do not build unparameterized SQL queries.
- Return appropriate HTTP status codes and stable error shapes.
- Add Swagger decorators for new public or administrative endpoints.
- Define authentication and authorization requirements for every new endpoint.
- Public endpoints must return only data intended for public consumption.
- Never return password hashes, refresh-token hashes, reset-token hashes, or
  other secrets.
- Add pagination, filtering, and indexes when a collection can grow
  significantly.
- Avoid N+1 database access patterns.
- Keep CORS, rate limits, Helmet, and validation enabled in production.

## 7. Authentication and authorization rules

- Hash passwords with the existing bcrypt-based service.
- Use the existing JWT access-token and refresh-session model unless a change
  is explicitly approved.
- Revoke refresh sessions on logout.
- Enforce role permissions in the API, not only by hiding frontend links.
- Use the existing CMS roles consistently:
  `SUPER_ADMIN`, `ADMIN`, `CONTENT_MANAGER`, `SEO_MANAGER`, `EDITOR`,
  `COUNSELLOR`, and `STUDENT`.
- Counsellors may access operational lead/student workflows only as defined by
  the API guards; they must not gain administrative publishing access by
  accident.
- Keep secrets in environment variables and maintain `.env.example` files
  without real values.

## 8. Database and migration rules

- Update `apps/api/prisma/schema.prisma` before adding persistence behavior.
- Create a Prisma migration for every schema change.
- Never edit an already-applied migration to repair history.
- Use one focused migration per logical schema change where possible.
- Add indexes for status, slug, foreign-key, date, and lookup fields used by
  real queries.
- Use safe deletion behavior for related records and document destructive
  choices.
- Update seed data when new required records or workflows are introduced.
- Do not use destructive database commands against shared or production data
  without explicit approval and a verified backup.

## 9. CMS and publishing rules

- Treat draft and published content as separate states.
- Draft changes must not become publicly visible before publishing.
- Publishing, archiving, restoring, and permission-sensitive content changes
  require API authorization.
- Preserve page revisions and preview behavior.
- Validate page-builder section data against the shared schema/registry.
- Keep layout and styling developer-owned unless the product explicitly adds a
  configurable capability.
- Media uploads must validate file type, size, storage path, and access rules.

## 10. Security and privacy rules

- Validate and sanitise all external input.
- Escape output by default and reject unsafe URLs/content where applicable.
- Do not log passwords, tokens, reset links, or unnecessary personal data.
- Protect lead, student, document, and application data from public endpoints.
- Apply rate limiting to login, password reset, and public enquiry flows.
- Use HTTPS outside local development.
- Keep upload directories isolated from executable code.
- Document retention, deletion, and access rules for personal data.
- Review third-party scripts and external assets before adding them to public
  pages.

## 11. Testing and validation rules

Before declaring a change complete, run the checks relevant to the changed
area:

```bash
npm run lint
npm run typecheck
npm run build
npm run test:cms
```

Additional expectations:

- Add or update unit tests for non-trivial service logic.
- Add API integration coverage for new endpoints and authorization rules.
- Add page-builder schema/editor tests for new section types.
- Test success, empty, loading, invalid-input, unauthorized, and API-failure
  states for user-facing workflows.
- Run the smallest useful check during development, then the broader suite
  before handoff.
- Report warnings and known limitations instead of hiding them.

## 12. Documentation rules

Update the appropriate document when behavior changes:

- `docs/project-details.md`: product behavior, scope, and acceptance.
- `docs/architecture.md`: boundaries, flows, infrastructure, or data design.
- `docs/task.md`: implementation status, backlog, and next priorities.
- `docs/GODADDY_DEPLOYMENT.md`: hosting, environment, and deployment changes.
- `README.md` or app README files: setup and developer commands.

Documentation must describe the current implementation accurately. Mark future
capabilities as planned instead of presenting them as complete.

## 13. Change workflow

1. Inspect the relevant code, tests, environment examples, and documentation.
2. Identify the owning application/module and the smallest safe change.
3. Check for existing uncommitted user changes before editing.
4. Implement with existing conventions and shared utilities.
5. Add migrations, validation, tests, and documentation where required.
6. Run focused validation, then broader checks proportional to risk.
7. Review the final diff for accidental files, secrets, debug output, and
   unrelated changes.
8. Report what changed, what was verified, and any remaining risks.

## 14. Git and file safety

- Do not use destructive commands such as `git reset --hard` or broad recursive
  deletion unless explicitly requested.
- Do not overwrite unrelated local changes.
- Do not commit generated dependencies such as `node_modules`.
- Keep generated build output out of source changes unless deployment explicitly
  requires it.
- Use focused patches and review `git diff --stat` and `git status` before
  handoff.

## 15. Definition of done

A change is complete when:

- The requested behavior is implemented in the correct application boundary.
- Validation and authorization are present where required.
- Errors and loading states are handled appropriately.
- Database changes have migrations and seed updates where needed.
- Relevant tests/build/lint/type checks pass or known failures are reported.
- Documentation and environment examples are updated when applicable.
- No secrets, unrelated edits, or accidental generated files are included.
