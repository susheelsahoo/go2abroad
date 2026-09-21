# Go2Abroad Project Details

**Version:** 1.0  
**Date:** 2026-09-21  
**Status:** Current product requirements and project scope  
**Product:** Go2Abroad study-abroad consultancy platform

## 1. Product summary

Go2Abroad is a study-abroad consultancy platform that helps prospective
students discover destinations, universities, courses, and support services,
then convert their interest into a counselling enquiry and, eventually, an
application.

The product consists of:

- A public website for discovery, education, trust building, and lead capture.
- An admin workspace for content, catalogue, users, leads, and website
  configuration.
- A student portal foundation for authentication and future application
  workflows.
- A shared API and database for authentication, CMS content, catalogue data,
  leads, media, and branding.

## 2. Problem statement

Students and their families need clear, trustworthy guidance when comparing
study destinations and courses. Go2Abroad currently has strong marketing
content and a working CMS foundation, but the product must progressively join
content discovery, enquiry management, counselling, and student applications
into one measurable workflow.

## 3. Goals and success metrics

### Product goals

1. Generate qualified counselling enquiries from the public website.
2. Make destination, university, and course information easy to discover.
3. Allow authorised staff to manage content without code changes.
4. Give counsellors a reliable lead queue and status workflow.
5. Provide students with a secure foundation for profiles and applications.
6. Create an SEO-friendly, fast, accessible, and maintainable platform.

### Success metrics

- Website enquiry completion rate.
- Number of new leads by source, destination, and interest.
- Lead response time and lead status progression.
- Qualified-lead and converted-lead rates.
- Organic sessions and landing-page conversions.
- Published content freshness and page-search visibility.
- Admin task completion time for common CMS operations.
- Public website performance, accessibility, and error rates.

The initial release should establish baseline measurements for these metrics;
targets will be agreed after analytics and production traffic are available.

## 4. Users and roles

### Public visitor / prospective student

Can browse marketing pages, destinations, courses, success stories, FAQs, and
blog content; submit an enquiry; and contact Go2Abroad through phone, email, or
WhatsApp.

### Counsellor

Can sign in, view and update leads, view students, and progress enquiries. A
counsellor must not manage users, site settings, or publishing configuration
unless explicitly granted another role.

### Content manager / editor

Can manage approved catalogue and editorial content according to assigned CMS
permissions.

### SEO manager

Can manage page metadata, content visibility, navigation, and SEO-related CMS
configuration.

### Administrator / super administrator

Can manage users, roles, content, leads, media, settings, publishing, and
platform configuration.

### Student

Can register and sign in. The target experience includes a profile, saved
options, documents, applications, status history, and counsellor communication.
Only authentication is currently implemented in the student application.

## 5. Scope

### Release 1: marketing website and CMS foundation

- Public responsive website with homepage, About, Services, Destinations,
  Courses, Success Stories, FAQ, Contact, USA, and Arizona State University
  pages.
- Public enquiry form and lead creation.
- Website branding and settings management.
- CMS page builder with draft, publish, preview, archive, version, and media
  capabilities.
- Admin management for users, students, leads, universities, courses, FAQs,
  reviews, blogs, and website settings.
- Role-based authentication and protected admin APIs.

### Release 2: conversion and content integration

- Connect all public catalogue and editorial pages to published API content.
- Add public blog listing and article detail views.
- Add lead assignment, notes, follow-ups, search, filters, and reporting.
- Add analytics, consent handling, form validation, notifications, and email
  workflows.

### Release 3: student journey

- Student profile and education information.
- Saved universities and courses.
- Application creation and status timeline.
- Document upload, verification, and secure access.
- Counsellor assignment and communication history.

### Out of scope for the initial release

- Direct university application submission integrations.
- Payment processing.
- Automated visa or immigration decisions.
- Guaranteed admission or visa outcomes.
- Native mobile applications.
- A full CRM replacement beyond the defined lead workflow.

## 6. Public website requirements

### Navigation and layout

- The website must provide consistent header, navigation, footer, mobile menu,
  breadcrumb/page context where appropriate, and floating contact actions.
- Navigation must work with client-side routing and direct URL access.
- Branding, logo, favicon, contact information, social links, and legal links
  should be configurable from the admin settings area.

### Required public routes

| Area | Current route | Requirement |
|---|---|---|
| Homepage | `/` | Present the value proposition, destinations, services, trust signals, stories, FAQs, blog/content, and enquiry CTA. |
| About | `/about-us` | Explain the company, approach, team, and reasons to choose Go2Abroad. |
| Services | `/services` | Explain counselling and study-abroad support services. |
| Destinations | `/destinations` | Present study destinations and relevant guidance. |
| Courses | `/courses` | Present course options and discovery content. |
| Success stories | `/success-stories` | Show student outcomes and testimonials. |
| FAQ | `/faq` | Answer common study-abroad and service questions. |
| Contact | `/contact` | Provide enquiry form and contact channels. |
| USA | `/usa` | Provide USA-focused destination content. |
| Arizona State University | `/arizona-state-university` | Provide institution-specific information and enquiry CTA. |

Future routes include university details, course details, scholarships, blog
listing/detail, events, resources, counselling booking, application, privacy,
and terms pages.

### Enquiry form

The form must collect, at minimum:

- First name.
- Email address.
- Phone number, including country code where applicable.
- Preferred destination.
- Area of interest.
- Message.
- Source and page URL when available.

Requirements:

- Validate required fields on the client and server.
- Show clear loading, success, and failure states.
- Prevent duplicate submissions where reasonably possible.
- Store accepted enquiries as leads with status `NEW`.
- Protect personal data and avoid exposing lead details in public responses.

## 7. Admin and CMS requirements

### Authentication and security

- Admin login must issue access and refresh tokens.
- Refresh tokens must be revocable on logout.
- Passwords must be hashed and never returned by the API.
- Password reset flows must use expiring, single-use tokens.
- Protected endpoints must enforce authentication and role permissions.
- Inactive and suspended users must not access protected workflows.
- Sensitive operations must be auditable.

### Dashboard

The dashboard should provide useful operational summaries, including lead
volume, active students, applications when available, conversion indicators,
recent activity, and shortcuts to high-frequency tasks. Placeholder metrics
must be replaced with API-backed values before production reporting is relied
upon.

### Content management

Authorised users must be able to:

- Create, edit, duplicate, reorder, preview, publish, archive, and restore
  supported pages and sections.
- Manage page title, slug, SEO metadata, canonical URL, robots directives, and
  social sharing metadata.
- Save draft changes independently from published content.
- Review page versions and restore a previous version.
- Manage navigation items and visibility.
- Upload, list, and remove permitted media files.
- Configure site theme and branding settings.

### Catalogue management

Administrators must be able to manage:

- Universities: name, slug, country, city, website, description, logo, and
  publication status.
- Courses: title, slug, level, field, duration, description, university, and
  publication status.
- FAQs: question, answer, category, order, and publication status.
- Reviews/testimonials: name, role, quote, rating, avatar, and publication
  status.
- Blog posts: title, slug, excerpt, content, cover image, author, status, and
  publication date.

### Lead management

Authorised staff must be able to list leads, filter by status, inspect lead
details, and update status. Supported statuses are:

`NEW` → `CONTACTED` → `QUALIFIED` → `CONVERTED` or `LOST`.

The next release must add assignment, notes, follow-up date, contact history,
search, pagination, and export.

## 8. Student portal requirements

### Current

- Student registration API exists.
- Student login API exists.
- Student login screen exists.
- Database user and student-profile models exist.

### Required next capabilities

- Protected student layout and dashboard.
- Profile fields including nationality, education, graduation year, English
  test, and score.
- University/course search and saved items.
- Application creation and editing.
- Application status history and counsellor assignment.
- Secure document upload and verification status.
- Notifications and communication history.
- Account settings, password reset, and logout.

## 9. API and data requirements

The shared backend is a NestJS REST API using Prisma and MySQL in the current
implementation. The API must provide:

- Authentication, refresh, logout, and password reset.
- Website settings and branding.
- Public and protected page/CMS operations.
- Media upload and delivery.
- Lead creation and protected lead management.
- Student, university, course, FAQ, and review management.
- Public and admin blog operations.
- Health check and Swagger documentation.

Core persisted entities currently include users, sessions, student profiles,
website settings, leads, universities, courses, FAQs, reviews, blog posts,
pages, sections, page versions, previews, media, theme, navigation, and audit
logs.

All new API input must use DTO validation, return appropriate HTTP status
codes, apply authorization where required, and avoid leaking internal errors or
personal data.

## 10. Non-functional requirements

### Performance

- Optimise images and avoid unnecessary client-side work.
- Keep public pages responsive on mobile and desktop.
- Add caching or query optimisation as catalogue/content volume grows.
- Track Core Web Vitals before production launch.

### SEO

- Every indexable page must have a unique title and description.
- Support canonical URLs, Open Graph metadata, structured content where useful,
  sitemap, robots rules, and clean slugs.
- Published content must be crawlable without authentication.

### Accessibility

- Use semantic HTML, keyboard-accessible controls, visible focus states,
  meaningful labels, alt text, sufficient contrast, and usable error messages.
- Perform an accessibility audit before production launch.

### Reliability and operations

- Provide separate development, staging, and production configuration.
- Use environment variables for API, database, storage, and integration
  credentials.
- Add structured logging, error monitoring, database backups, and health
  monitoring.
- Store uploaded media outside the application bundle in production.

### Privacy and security

- Minimise collection of personal data.
- Use HTTPS in all non-local environments.
- Configure CORS with explicit allowed origins.
- Add rate limiting to authentication and public form endpoints.
- Define retention and deletion procedures for leads, profiles, and documents.
- Publish privacy policy and terms before collecting production leads.

## 11. Technical architecture

```text
Public React/Vite website ─┐
Next.js admin application ─┼─ NestJS REST API ─ Prisma ─ MySQL
Next.js student portal ───┘             ├─ media storage
                                        └─ future email/jobs/analytics
```

Repository applications:

- `apps/frontend`: public React/Vite website.
- `apps/admin`: Next.js CMS and operations workspace.
- `apps/student`: student portal foundation.
- `apps/api`: NestJS API and Prisma schema.
- `packages/page-builder`: shared page builder registry, schemas, renderer,
  and components.

## 12. Release acceptance criteria

Release 1 is ready for stakeholder acceptance when:

- Public routes render correctly on desktop and mobile.
- Navigation, direct links, forms, contact actions, and error states work.
- A valid enquiry creates a lead visible to an authorised admin user.
- Unauthorised users cannot access protected admin/API resources.
- Admin users can manage the agreed catalogue, FAQ, review, blog, page, media,
  and settings records.
- Draft content does not appear publicly until published.
- Published content is available through the public API/rendering path.
- Branding changes are reflected in supported public/admin surfaces.
- Build, typecheck, lint, and automated tests pass in CI.
- Production configuration, backup, logging, privacy, and deployment runbooks
  are documented.

## 13. Delivery priorities

1. Stabilise the merged public frontend and connect public content to the API.
2. Finish blog listing/detail integration and public SEO metadata.
3. Complete lead workflow: assignment, notes, follow-ups, filters, and
   notifications.
4. Build the student profile and application foundation.
5. Add document workflows and communication history.
6. Add analytics, accessibility, security hardening, tests, monitoring, and
   production deployment readiness.

## 14. Open decisions

- Final production hosting topology and domain/subdomain routing.
- Production media provider: S3, Cloudinary, or Azure Blob.
- Email provider and notification templates.
- Analytics and consent platform.
- Lead ownership and service-level response targets.
- Whether applications will be managed internally or integrated with external
  university/application systems.
- Final database migration and backup policy for production.
