Yes. This uploaded `project-details.md` is much more specific and should now be treated as the **source of truth for the project requirements**. I would update the architecture we discussed earlier rather than blindly keeping the previous version.

The main architectural change is:

> **React/Vite Website + Next.js Admin + NestJS API + PostgreSQL + Prisma + Redis**

The current implementation uses a React/Vite public website in `apps/frontend`, a Next.js admin application, and a NestJS API backed by PostgreSQL and Prisma.

# Go2Abroad — Updated Project Details

## 1. Project Overview

**Project Name:** Go2Abroad

**Project Type:** Premium Study Abroad Consultancy Platform

**Primary Objective:**

Build a production-ready, scalable, SEO-first, high-performance study-abroad platform focused on:

- Student lead generation
- Organic SEO traffic
- University discovery
- Course discovery
- Destination discovery
- Scholarship discovery
- Content marketing
- Counselling appointments
- Lead/CRM management
- Conversion tracking

The platform will be inspired by the information architecture and user experience patterns of **LeverageEdu** and **Studies Overseas**, while maintaining a unique Go2Abroad brand identity.

---

# 2. Final Technology Stack

### Frontend

```text
React 19 + Vite
React 19+
TypeScript
Tailwind CSS
shadcn/ui
Framer Motion
React Hook Form
Zod
Axios
TanStack Query
```

These are already specified in your project requirements.

### Admin

```text
Next.js 15+
React 19+
TypeScript
Tailwind CSS
shadcn/ui
TanStack Table
React Hook Form
Zod
Recharts
```

### Backend

The backend is a NestJS REST API:

```text
NestJS
Node.js
TypeScript
REST API
Prisma ORM
```

### Database

```text
PostgreSQL 14+
```

### Supporting infrastructure

```text
Redis
BullMQ
Cloudinary / S3 / Azure Blob
Sharp
Google Analytics 4
Google Search Console
Meta Pixel
Cloudflare
Docker
```

---

# 3. Final Architecture

```text
                         INTERNET
                            │
                            ▼
                    ┌──────────────┐
                    │  Cloudflare  │
                    │ CDN / WAF    │
                    │ SSL / DNS    │
                    └──────┬───────┘
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
    ┌──────────────────┐      ┌──────────────────┐
    │  React/Vite Web  │      │  Next.js Admin   │
    │                  │      │                  │
    │ Public Website   │      │ Admin Dashboard  │
    │ SEO / SSR / ISR  │      │ CMS / CRM        │
    │ Lead Generation  │      │ Analytics        │
    └────────┬─────────┘      └────────┬─────────┘
             │                         │
             └───────────┬─────────────┘
                         │
                     REST API
                         │
                         ▼
                ┌───────────────────┐
                │     NestJS API    │
                │                   │
                │ Auth              │
                │ RBAC              │
                │ CMS               │
                │ Leads             │
                │ Universities      │
                │ Courses           │
                │ Destinations      │
                │ Scholarships      │
                │ Appointments      │
                │ Analytics         │
                │ SEO               │
                │ Notifications     │
                └─────────┬─────────┘
                          │
                       Prisma
                          │
                          ▼
                  ┌──────────────┐
                  │ PostgreSQL 14+│
                  └──────┬───────┘
                         │
               ┌─────────┴─────────┐
               │                   │
               ▼                   ▼
          ┌─────────┐        ┌─────────────┐
          │  Redis  │        │   Storage   │
          │ Cache   │        │ S3/Cloudinary│
          │ BullMQ  │        │ / Azure Blob │
          └─────────┘        └─────────────┘
```

---

# 4. Monorepo Structure

The current repository uses this application structure:

```text
go2abroad/
│
├── apps/
│   │
│   ├── frontend/
│   │   └── React/Vite Public Website
│   │
│   ├── admin/
│   │   └── Next.js Admin Panel
│   │
│   └── api/
│       └── NestJS Backend
│
├── packages/
│   ├── ui/
│   ├── types/
│   ├── validation/
│   ├── config/
│   └── utils/
│
├── infrastructure/
│   ├── docker/
│   └── deployment/
│
├── docs/
│
├── scripts/
│
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

The current implementation uses React/Vite for the public website and Next.js for the admin application, while the NestJS API is completely separated.

---

# 5. Public Website

Your supplied requirement defines the following public sections.

```text
/
├── About Us
├── Services
├── Study Destinations
├── Country Pages
├── Universities
├── University Details
├── Courses
├── Course Details
├── Scholarships
├── Blogs
├── Blog Details
├── Success Stories
├── Events
├── Resources
├── FAQs
├── Contact
├── Book Counselling
├── Apply Now
├── Privacy Policy
└── Terms & Conditions
```

---

# 6. Homepage

The homepage should follow your exact requirement:

```text
Hero
   ↓
University/Course Search
   ↓
Popular Destinations
   ↓
Top Universities
   ↓
Featured Courses
   ↓
Scholarships
   ↓
Why Choose Go2Abroad
   ↓
Study Abroad Process
   ↓
Success Stories
   ↓
Student Testimonials
   ↓
Upcoming Events
   ↓
Latest Blogs
   ↓
Partner Universities
   ↓
Lead Generation CTA
   ↓
WhatsApp Floating Button
   ↓
Sticky Consultation CTA
```

These sections are directly specified in your uploaded project requirements.

---

# 7. Destination Module

Example URLs:

```text
/study-in-canada
/study-in-uk
/study-in-australia
```

Each destination contains:

```text
Country
Slug
Banner
Meta Title
Meta Description
Overview
Popular Courses
Top Universities
Cost of Study
Living Expenses
Visa Information
Scholarships
Intakes
FAQs
```

---

# 8. University Module

URL:

```text
/universities/university-of-toronto
```

Fields:

```text
Name
Slug
Country
City
Ranking
Tuition Fee
Application Fee
Website
Description
Gallery
Featured
Meta Data
```

### Recommended internal relationship

```text
Destination
    │
    └── Universities
            │
            └── Courses
```

---

# 9. Course Module

URL:

```text
/courses/master-of-data-science
```

Fields:

```text
Name
Slug
Level
Duration
Tuition Fee
University
Country
Eligibility
IELTS Requirement
Description
```

---

# 10. Blog Module

URL:

```text
/blog/canada-study-visa-guide
```

Fields:

```text
Title
Slug
Featured Image
Content
Author
Category
Tags
Meta Title
Meta Description
Canonical URL
Schema Type
Publish Date
```

I would additionally support:

```text
Draft
Published
Archived
Scheduled
```

but these are implementation improvements, not requirements explicitly stated in your file.

---

# 11. Admin Dashboard

Your required KPIs are:

```text
Total Leads
Today's Leads
Monthly Leads
Appointments
Applications
Blog Traffic
Top Destinations
Conversion Rate
```

Charts:

```text
Leads by Month
Traffic Sources
Device Analytics
Country Interest
Campaign Performance
```

---

# 12. User Management

Required roles:

```text
Super Admin
Admin
Content Manager
SEO Manager
Counsellor
Editor
```

Permissions must be role-based.

I recommend implementing permissions like:

```text
lead.view
lead.create
lead.update
lead.delete
lead.export

university.view
university.create
university.update
university.delete

blog.view
blog.create
blog.update
blog.publish
blog.delete
```

This gives you much better control than simply checking role names.

---

# 13. Lead Management

This is a core part of the platform.

### Lead sources

```text
Contact Form
Counselling Form
Apply Now
Book Appointment
Scholarship Form
Destination Enquiry
University Enquiry
WhatsApp Callback
```

### Lead fields

```text
Name
Email
Phone
Country of Interest
Course
Intake
Budget
Status
Assigned Counsellor
Notes
Follow-up Date
```

### Lead statuses

```text
NEW
CONTACTED
QUALIFIED
APPLICATION_STARTED
OFFER_RECEIVED
VISA_PROCESSING
CONVERTED
CLOSED
```

### Features

```text
Search
Filters
CSV/Excel Export
Lead Timeline
Email Notifications
WhatsApp Integration
```

---

# 14. Content Management System

Admin must manage:

```text
Pages
Banners
Destinations
Universities
Courses
Blogs
FAQs
Testimonials
Events
Resources
Partners
Menus
Footer
SEO Settings
Media Library
```

All content must be editable through Admin.

This means **no important public content should be hard-coded**.

---

# 15. SEO Architecture

SEO is one of the highest priorities.

Your requirements specify:

```text
SSR
Static Generation
ISR
Dynamic Metadata
Open Graph
Twitter Cards
JSON-LD
Breadcrumb Schema
FAQ Schema
Organization Schema
Article Schema
University Schema
Canonical URLs
XML Sitemap
robots.txt
Image Optimization
Core Web Vitals
Semantic HTML
Internal Linking
Automatic Slug Generation
Redirect Management
```

### Architecture

```text
Admin
   ↓
SEO Metadata
   ↓
NestJS API
   ↓
PostgreSQL
   ↓
   React/Vite Web
   ↓
Metadata / JSON-LD / Sitemap
```

---

# 16. SEO URL Structure

Use the URLs specified in your requirements:

```text
/study-in-canada

/study-in-uk

/study-in-australia

/universities/university-of-toronto

/courses/master-of-data-science

/blog/canada-study-visa-guide
```

This is excellent for organic SEO.

---

# 17. Performance

Your target is:

```text
Performance: 95+
Accessibility: 95+
Best Practices: 95+
SEO: 100
```

Use:

```text
next/image
Lazy Loading
Code Splitting
Dynamic Imports
Optimized Fonts
Caching
CDN
ISR
```

I would also use:

```text
Server Components
AVIF/WebP
Redis
Database indexes
Response caching
Cloudflare CDN
```

as implementation-level optimizations.

---

# 18. Authentication

Your requirements:

```text
Secure Admin Login
JWT
Refresh Tokens
Password Reset
Email Verification
Session Management
Activity Logs
2FA Ready
```

With the new NestJS architecture:

```text
Next.js Admin
       │
       ▼
   NestJS Auth
       │
       ├── JWT
       ├── Refresh Token
       ├── Session
       ├── Password Reset
       ├── Email Verification
       └── 2FA-ready
```

For browser security, I recommend keeping authentication tokens in **secure HTTP-only cookies**, rather than exposing them to browser JavaScript.

---

# 19. Analytics

Required:

```text
Google Analytics 4
Google Search Console
Meta Pixel
Event Tracking
Form Submission Tracking
CTA Click Tracking
WhatsApp Click Tracking
Appointment Tracking
Conversion Tracking
```

I would divide analytics into:

### Marketing analytics

```text
GA4
Search Console
Meta Pixel
UTM campaigns
```

### Business analytics

```text
Leads
Appointments
Applications
Offers
Conversions
```

This lets the admin eventually answer:

> Which marketing source generates the most qualified leads?

---

# 20. Security

Required:

```text
CSRF Protection
XSS Prevention
SQL Injection Protection
Rate Limiting
Secure Headers
Input Validation
File Upload Validation
RBAC
Audit Logs
Encrypted Passwords
```

With NestJS:

```text
Global ValidationPipe
Guards
RBAC Guards
Rate Limiting
Security Headers
Exception Filters
Audit Interceptors
```

---

# 21. Database

Your original file lists:

```text
users
roles
permissions
pages
banners
destinations
universities
courses
blogs
blog_categories
testimonials
events
resources
faqs
leads
appointments
seo_metadata
media
settings
activity_logs
```

For the final architecture, use:

**PostgreSQL 14+ + Prisma.**

I would extend the schema slightly for the actual relationships:

```text
users
roles
permissions
role_permissions

pages
page_sections
banners

destinations
universities
courses

blogs
blog_categories
blog_tags

testimonials
events
resources
faqs
partners

leads
lead_activities
lead_assignments

appointments

seo_metadata
redirects

media
settings
activity_logs
```

---

# 22. API Architecture

Your source specifies REST APIs such as:

```text
GET /api/destinations
POST /api/destinations
PUT /api/destinations/:id
DELETE /api/destinations/:id
```

with:

```text
Zod validation
Consistent responses
HTTP status codes
Pagination
Filtering
Sorting
```

With NestJS, I recommend versioning them:

```text
/api/v1/destinations
/api/v1/universities
/api/v1/courses
/api/v1/blogs
/api/v1/leads
/api/v1/appointments
```

Admin operations:

```text
/api/v1/admin/destinations
/api/v1/admin/universities
/api/v1/admin/courses
/api/v1/admin/leads
```

---

# 23. NestJS Module Architecture

```text
apps/api/src/

├── auth/
├── users/
├── roles/
├── permissions/
│
├── pages/
├── banners/
├── destinations/
├── universities/
├── courses/
├── blogs/
├── blog-categories/
├── testimonials/
├── events/
├── resources/
├── faqs/
├── partners/
│
├── leads/
├── appointments/
│
├── seo/
├── media/
├── settings/
├── analytics/
│
├── notifications/
├── email/
├── whatsapp/
│
├── audit/
├── jobs/
│
├── common/
├── config/
└── prisma/
```

---

# 24. Redis + Background Jobs

Your current requirements mention Redis as optional caching.

For this project, I would use Redis for:

```text
Caching
Rate Limiting
Background Jobs
```

And BullMQ for:

```text
Lead email
Appointment notifications
WhatsApp notifications
Image processing
Analytics processing
Scheduled publishing
Sitemap generation
```

Example:

```text
Student submits lead
       ↓
NestJS
       ↓
PostgreSQL ← Save lead immediately
       ↓
Redis/BullMQ
       ├── Email
       ├── WhatsApp
       └── Notification
```

---

# 25. Media Architecture

Your requirements include a media library and image optimization.

Use:

```text
Admin
  ↓
Media Upload
  ↓
Object Storage
  ↓
Cloudinary / S3 / Azure Blob
  ↓
CDN
  ↓
Frontend image element
```

Don't store actual images inside PostgreSQL.

PostgreSQL stores metadata:

```text
media
├── id
├── filename
├── path
├── url
├── mime_type
├── size
├── width
├── height
└── created_at
```

---

# 26. Development Workflow

Your uploaded requirements already define four phases.

I would keep these phases but break them into smaller implementation sprints.

### Phase 1 — Foundation

```text
Monorepo
React/Vite Web
Next.js Admin
NestJS API
PostgreSQL
Prisma
Redis
Authentication
Admin Layout
Public Layout
Core UI
```

### Phase 2 — Core Education Platform

```text
Homepage
Destinations
Universities
Courses
```

### Phase 3 — Content + SEO + Leads

```text
Blogs
SEO
Lead Management
Forms
Scholarships
FAQs
Testimonials
Events
Resources
Partners
```

### Phase 4 — Business Intelligence + Production

```text
Analytics
Performance
Security
Testing
Deployment
Documentation
```

---

# 27. Future Scalability

Your source explicitly identifies:

```text
Student Portal
Counsellor Portal
Application Tracking
Document Upload
Visa Tracking
AI Chatbot
CRM
Email Marketing
SMS Notifications
WhatsApp Automation
Payment Gateway
Mobile App
Multi-language
Multi-country offices
```

The NestJS API gives us a clean foundation for this:

```text
                    NestJS API
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ▼               ▼                ▼
   React/Vite Web  Next.js Admin    Student Portal
                                        │
                                        ▼
                                   Mobile App
```

Later:

```text
NestJS
  │
  ├── Core API
  ├── AI Service
  ├── Search Service
  ├── Notification Worker
  └── Marketing Automation
```

But **do not build microservices now**.

Start with a **modular monolith**.

---

# 28. Final Technology Decision

After reviewing your actual project requirements and our architecture discussion, I would lock this:

```text
┌─────────────────────────────────────────────┐
│                 GO2ABROAD                   │
├─────────────────────────────────────────────┤
│                                             │
│ Public Website                              │
│ React 19 + Vite                             │
│ JavaScript / JSX                            │
│                                             │
│ Admin                                       │
│ Next.js 15+                                 │
│ React 19                                    │
│ TypeScript                                  │
│                                             │
│ Backend                                     │
│ NestJS                                      │
│ Node.js                                     │
│ TypeScript                                  │
│                                             │
│ Database                                    │
│ PostgreSQL 14+                              │
│                                             │
│ ORM                                         │
│ Prisma                                      │
│                                             │
│ Cache / Queue                               │
│ Redis + BullMQ                              │
│                                             │
│ UI                                          │
│ Tailwind + shadcn/ui                       │
│                                             │
│ Storage                                     │
│ Cloudinary / S3 / Azure Blob               │
│                                             │
│ Analytics                                   │
│ GA4 + Search Console + Meta Pixel          │
│                                             │
│ CDN / Security                              │
│ Cloudflare                                  │
│                                             │
│ Testing                                     │
│ Jest + Playwright                           │
│                                             │
│ Architecture                                │
│ Modular Monolith                            │
└─────────────────────────────────────────────┘
```

## One important correction to your uploaded prompt

Your current file says:

```text
Backend
NestJS REST API
Prisma
PostgreSQL
NextAuth / JWT
```

For the **final project**, replace that with:

```text
Backend
- NestJS
- Node.js
- TypeScript
- REST API
- Prisma ORM
- PostgreSQL 14+
- Redis
- BullMQ
- JWT / secure HTTP-only cookie authentication
- Swagger/OpenAPI
- Nodemailer / transactional email
- Cloudinary / S3 / Azure Blob
```

That is the main architectural update.

**Everything else in your uploaded project requirements can remain the foundation.**

This gives you a clean separation:

```text
React/Vite Web
      │
      ├──────────────┐
      │              │
      ▼              ▼
   NestJS API ← Next.js Admin
      │
      ▼
   Prisma
      │
      ▼
   PostgreSQL
```

And it keeps the system simple enough to develop now while being ready for the future student portal, counsellor portal, AI, mobile app, WhatsApp automation, and multi-country expansion.
