# GO2ABROAD — HOMEPAGE DEVELOPMENT PROMPT

## ROLE

You are a Senior React UI/UX Engineer working on the Go2Abroad Study Abroad Consultancy Platform.

You must follow the existing Go2Abroad Master System Prompt and project architecture.

This task is ONLY for building the **public Go2Abroad homepage**.

Do not implement the Admin Panel, CRM, authentication, university CMS, course CMS, or other unrelated modules in this task.

---

# 1. PROJECT ARCHITECTURE

The final architecture is:

- Public Website: React 19 + Vite + JavaScript/JSX
- Admin: Next.js 15+ + React 19 + TypeScript
- Backend: NestJS + Node.js + TypeScript
- Database: PostgreSQL 14+ with Prisma
- ORM: Prisma
- Cache: Redis
- Queue: BullMQ
- UI: Tailwind CSS + shadcn/ui
- Forms: React Hook Form + Zod
- API communication: REST API
- Image storage: Cloudinary / S3 / Azure Blob

For this task, focus only on:

**React/Vite public website homepage.**

---

# 2. REFERENCE WEBSITES

Use these websites as UX and information-architecture references:

1. https://leverageedu.com/
2. https://www.studies-overseas.com/

Reference observations:

LeverageEdu uses strong conversion-oriented entry points, destination discovery, program/course discovery, success stories, trust/value sections, FAQ content, and prominent calls to action.

Studies Overseas uses a strong hero proposition, journey CTA, trust metrics, study destinations, services, and counselling-oriented conversion.

Use these references for:

- Section ordering ideas
- Conversion strategy
- Content hierarchy
- Card patterns
- Search/discovery concepts
- Trust-building sections
- CTA placement
- Mobile UX ideas

DO NOT:

- Copy their HTML
- Copy their CSS
- Copy their source code
- Copy their exact text
- Copy their images
- Copy their branding
- Copy their logos
- Reproduce their exact visual design

Create an original Go2Abroad visual identity.

---

# 3. BUSINESS OBJECTIVE

The homepage is not just an informational page.

Its primary purpose is:

1. Build trust.
2. Help students start their study-abroad journey.
3. Help users discover countries, universities and courses.
4. Generate qualified leads.
5. Encourage counselling bookings.
6. Encourage university/course enquiries.
7. Drive WhatsApp enquiries.
8. Support SEO and organic discovery.

Primary CTAs:

- Book Free Counselling
- Start Your Journey
- Explore Universities
- Explore Courses
- Apply Now
- Talk to a Counsellor

Secondary CTA:

- WhatsApp Us

---

# 4. HOMEPAGE STRUCTURE

Build the homepage in the following order:

## Section 1 — Header / Navigation

Create a premium responsive header.

Desktop navigation:

- Home
- Study Destinations
- Universities
- Courses
- Services
- Scholarships
- Success Stories
- Blogs
- About Us

Right side:

- Search
- Book Free Counselling
- WhatsApp

Mobile:

- Logo
- Menu button
- Mobile navigation drawer

Header requirements:

- Sticky on scroll
- Clean desktop navigation
- Mobile-first
- Accessible keyboard navigation
- Proper focus states
- Smooth transition when scrolling
- No excessive animation

The header must remain lightweight and fast.

---

# 5. SECTION 2 — HERO

Create a premium study-abroad hero section.

Recommended messaging direction:

"Your Global Education Journey Starts Here"

Supporting text:

"Discover the right country, university and course with expert guidance from Go2Abroad."

Do not invent unsupported company statistics.

Primary CTA:

"Book Free Counselling"

Secondary CTA:

"Explore Universities"

Include a strong visual representing international education.

Use:

- Student/international education imagery
- University/campus visual
- Subtle world/global visual elements
- Modern background treatment

The hero should immediately communicate:

WHAT:

Study Abroad

WHO:

Students planning international education

VALUE:

Expert guidance + university/course discovery

ACTION:

Book counselling / explore options

---

# 6. HERO SEARCH / DISCOVERY

Add a prominent study-abroad discovery component inside or immediately below the hero.

The user should be able to start with:

- Study Destination
- Course / Field of Study
- University

Example:

"Where do you want to study?"

[ Select Country ]

"What do you want to study?"

[ Select Course ]

[ Find Universities ]

The search UI must be designed so it can later connect to the NestJS API.

For now, use clean mock/static data only if the API is not yet available.

Do not hard-code the architecture in a way that makes future API integration difficult.

Create reusable types and interfaces.

---

# 7. SECTION 3 — TRUST / BUSINESS STATS

Create a trust-building section.

Use configurable/statistical placeholders rather than inventing real Go2Abroad numbers.

Example structure:

- Students Guided
- University Partners
- Study Destinations
- Years of Experience

Use placeholders such as:

"1000+"
"500+"
"20+"
"10+"

ONLY if clearly marked as temporary/demo content.

Do not present invented statistics as real business claims.

The final values will come from CMS/admin later.

---

# 8. SECTION 4 — STUDY DESTINATIONS

Heading:

"Explore Top Study Destinations"

Supporting text:

"Discover popular destinations, leading universities, courses, scholarships and study opportunities."

Create destination cards.

Initial example destinations:

- UK
- USA
- Canada
- Australia
- Ireland
- Germany

Each card should include:

- Country image
- Country name
- Short description
- Popularity/value indicator if data exists
- Explore button

Example URL structure:

/study-in-uk

/study-in-usa

/study-in-canada

/study-in-australia

/study-in-ireland

/study-in-germany

Do not hard-code URLs throughout components.

Create a destination data structure.

---

# 9. SECTION 5 — WHY GO2ABROAD

Create a strong trust/value proposition section.

Heading:

"Why Choose Go2Abroad?"

Recommended service cards:

- Expert Counselling
- University Selection
- Course Guidance
- Application Assistance
- Scholarship Guidance
- Visa Assistance
- Education Loan Guidance
- Pre-Departure Support

Each card should have:

- Icon
- Title
- Short description
- Optional link

Keep descriptions concise.

Do not make unsupported claims such as guaranteed visa success.

---

# 10. SECTION 6 — FIND YOUR UNIVERSITY

Create a university discovery section inspired by the discovery experience seen on modern study-abroad platforms.

Heading:

"Find the Right University for You"

Provide filters/search:

- Country
- Course
- Degree Level
- Budget

CTA:

"Explore Universities"

Display a few featured university cards.

University card:

- Logo
- University name
- Country
- City
- Ranking if available
- Popular courses
- Tuition fee if available
- View University

Example URL:

/universities/[slug]

For homepage development, use mock data.

The component must be designed for future NestJS API integration.

---

# 11. SECTION 7 — POPULAR COURSES

Heading:

"Explore Popular Courses"

Create cards for popular study areas:

- Computer Science
- Data Science
- Artificial Intelligence
- Business & Management
- Engineering
- Healthcare
- Finance
- Law

Each card:

- Course/category image or icon
- Name
- Short description
- Explore Courses CTA

Future URL:

/courses/[slug]

Do not create individual course pages in this task.

Only build the homepage section.

---

# 12. SECTION 8 — FEATURED UNIVERSITIES / PROGRAMS

Create a premium horizontal/card grid.

Each card should show:

- University logo
- University name
- Country
- Course/program
- Duration
- Study mode
- Tuition fee where available
- View Details

Add:

"View All Universities"

This section should be data-driven.

Create a reusable:

UniversityCard

component.

---

# 13. SECTION 9 — SCHOLARSHIPS

Heading:

"Discover Scholarships"

Supporting text:

"Explore scholarship opportunities that can help make your international education journey more affordable."

Display:

- Scholarship name
- University/provider
- Country
- Eligibility summary
- Deadline if available
- Explore button

CTA:

"Explore Scholarships"

Do not invent scholarship amounts or deadlines.

Use placeholder/mock data clearly separated from production content.

---

# 14. SECTION 10 — STUDY ABROAD PROCESS

Create a simple visual process.

Heading:

"Your Study Abroad Journey, Simplified"

Steps:

1. Free Counselling
2. Profile Assessment
3. University & Course Selection
4. Application Assistance
5. Offer & Admission
6. Visa Guidance
7. Pre-Departure Support

Create a clean horizontal desktop timeline and vertical mobile version.

Use subtle animations only.

---

# 15. SECTION 11 — SUCCESS STORIES

Create a high-quality success-story section.

Heading:

"Students Who Achieved Their Dreams"

Cards should support:

- Student image
- Student name
- Destination
- University
- Course
- Short testimonial
- Rating if available
- Read Story

CTA:

"View All Success Stories"

Do not create fake student testimonials as real testimonials.

Use clearly marked demo content until CMS data is connected.

---

# 16. SECTION 12 — TESTIMONIALS

Create a testimonial carousel.

Support:

- Student photo
- Name
- Country
- University
- Course
- Testimonial
- Rating

Desktop:

3 cards where appropriate.

Mobile:

1 card per slide.

Use accessible carousel controls.

Do not autoplay aggressively.

---

# 17. SECTION 13 — PARTNER UNIVERSITIES

Create a trust section showing partner university logos.

Heading:

"Our University Partners"

Use placeholder logos only if real partner data/assets are unavailable.

Do not use competitor logos or copyrighted logos as fake Go2Abroad partners.

The final version will be CMS-driven.

---

# 18. SECTION 14 — UPCOMING EVENTS

Create an events section.

Heading:

"Upcoming Events"

Cards:

- Event image
- Event title
- Date
- Location / Online
- Short description
- Register button

CTA:

"View All Events"

Future URL:

/events

---

# 19. SECTION 15 — LATEST BLOGS

Create a blog section.

Heading:

"Study Abroad Insights"

Show:

- Featured image
- Blog title
- Category
- Publish date
- Short excerpt
- Read More

CTA:

"View All Blogs"

Future URL:

/blog/[slug]

Create a reusable BlogCard component.

---

# 20. SECTION 16 — FAQ

Create an FAQ section.

Heading:

"Frequently Asked Questions"

Initial categories/questions should relate to:

- Study abroad process
- Choosing a country
- University selection
- Scholarships
- Application process
- Visa guidance
- Counselling

Use an accessible accordion.

The FAQ content must eventually come from CMS.

Do not hard-code the architecture around fixed questions.

---

# 21. SECTION 17 — FINAL LEAD CTA

Create a strong conversion section near the bottom.

Heading:

"Ready to Start Your Study Abroad Journey?"

Supporting text:

"Speak with our counsellors and take the next step toward studying abroad."

Primary:

"Book Free Counselling"

Secondary:

"Apply Now"

WhatsApp CTA:

"Chat on WhatsApp"

This should visually stand out from the rest of the page.

---

# 22. FLOATING WHATSAPP BUTTON

Add a floating WhatsApp button.

Requirements:

- Fixed position
- Mobile friendly
- Accessible label
- Tooltip
- Configurable phone number
- Configurable default message

Do not hard-code the final WhatsApp number.

Use environment/configuration or CMS settings later.

---

# 23. MOBILE STICKY CTA

On mobile, create a bottom sticky CTA:

[ WhatsApp ] [ Book Free Counselling ]

Requirements:

- Does not cover important content
- Safe-area aware
- Accessible
- Dismissible if appropriate
- Lightweight

---

# 24. FOOTER

Create a complete footer.

Columns:

Study Destinations

- UK
- USA
- Canada
- Australia
- Ireland
- Germany

Services

- Counselling
- University Selection
- Application Assistance
- Visa Assistance
- Scholarships

Resources

- Blogs
- FAQs
- Events
- Resources

Company

- About
- Contact
- Success Stories
- Team

Legal

- Privacy Policy
- Terms & Conditions

Include:

- Social links
- WhatsApp
- Contact information
- Copyright

Footer links must be configurable in the future through CMS.

---

# 25. DESIGN SYSTEM

Create a unique Go2Abroad visual identity.

Desired direction:

- Premium
- International
- Trustworthy
- Modern
- Clean
- Education-focused
- Conversion-focused

Use:

- White/light background
- Blue as the primary brand direction
- One complementary accent color
- Large typography
- Rounded cards
- Subtle shadows
- Spacious sections
- High-quality imagery
- Clean iconography

Do not reproduce the exact visual style of LeverageEdu or Studies Overseas.

The site should feel inspired by the category but clearly belong to Go2Abroad.

---

# 26. RESPONSIVE DESIGN

Design mobile-first.

Support:

320px
375px
390px
414px
768px
1024px
1280px
1440px
1920px

Check:

- Navigation
- Hero
- Search
- Cards
- Carousels
- Forms
- Sticky CTA
- Footer
- Typography
- Spacing

No horizontal scrolling.

---

# 27. ACCESSIBILITY

Follow WCAG principles.

Requirements:

- Semantic HTML
- Correct heading hierarchy
- Accessible buttons
- Accessible links
- Keyboard navigation
- Visible focus states
- Proper form labels
- Alt text
- Accessible carousel controls
- Accessible accordions
- Good contrast
- Reduced-motion support

Do not use unnecessary ARIA.

---

# 28. PERFORMANCE

Target:

Lighthouse Performance >= 95

Accessibility >= 95

Best Practices >= 95

SEO = 100

Use:

- Server Components by default
- next/image
- AVIF/WebP where appropriate
- Lazy loading
- Dynamic imports
- Optimized fonts
- Minimal JavaScript
- Avoid unnecessary Client Components
- Avoid large animation libraries where unnecessary
- Avoid rendering huge data sets

Do not make the entire homepage a Client Component.

Only interactive sections should use Client Components.

---

# 29. COMPONENT ARCHITECTURE

Create reusable components.

Recommended:

components/

├── layout/
│ ├── Header
│ ├── MobileMenu
│ └── Footer
│
├── hero/
│ └── HeroSection
│
├── search/
│ └── StudySearch
│
├── destination/
│ └── DestinationCard
│
├── university/
│ └── UniversityCard
│
├── course/
│ └── CourseCard
│
├── scholarship/
│ └── ScholarshipCard
│
├── testimonial/
│ └── TestimonialCard
│
├── blog/
│ └── BlogCard
│
├── event/
│ └── EventCard
│
├── faq/
│ └── FAQAccordion
│
├── cta/
│ └── ConsultationCTA
│
└── common/
├── SectionHeading
├── Button
├── Container
├── Badge
└── EmptyState

Do not create one giant page.tsx file.

---

# 30. DATA ARCHITECTURE

For now, if backend APIs are not ready:

Create typed mock data under:

lib/data/

Example:

destinations.ts
universities.ts
courses.ts
scholarships.ts
testimonials.ts
events.ts
blogs.ts
faqs.ts

Use TypeScript interfaces/types.

Example:

type Destination = {
id: string;
name: string;
slug: string;
image: string;
description: string;
};

Do not place large arrays directly inside React components.

Later these repositories/data functions will be replaced with NestJS API calls.

---

# 31. API-READY ARCHITECTURE

Do not directly couple UI components to mock data.

Prefer:

UI Component
↓
Data Function / Repository
↓
Mock Data

Later:

UI Component
↓
Data Function / Repository
↓
NestJS API
↓
PostgreSQL

This allows backend integration without rewriting the UI.

---

# 32. SEO

Implement homepage SEO using document metadata and the website settings API.

Create:

- Title
- Description
- Canonical URL
- Open Graph
- Twitter metadata
- Organization schema
- Website schema
- SearchAction schema where appropriate

Do not keyword-stuff.

Recommended homepage keyword direction:

- Study abroad consultants
- Study abroad
- Study abroad universities
- Study abroad courses
- Study abroad counselling

Use natural language.

Do not claim rankings or achievements that Go2Abroad has not verified.

---

# 33. INTERNAL LINKING

Homepage should link naturally to:

- Destinations
- Universities
- Courses
- Scholarships
- Services
- Blogs
- Success Stories
- Events
- FAQs
- Counselling

Use descriptive anchor text.

Avoid generic links such as "Click Here".

---

# 34. ANALYTICS EVENTS

Prepare analytics events for:

- hero_cta_click
- university_search
- course_search
- destination_click
- university_click
- course_click
- scholarship_click
- counselling_cta_click
- apply_now_click
- whatsapp_click
- blog_click
- event_click
- faq_expand

Do not hard-code analytics provider logic directly into UI components.

Create a reusable analytics utility.

---

# 35. LEAD GENERATION

The homepage must be prepared for:

- Free Counselling
- Apply Now
- University Enquiry
- Course Enquiry
- Scholarship Enquiry
- WhatsApp Consultation

Do not implement the complete CRM in this task.

Only create the frontend integration points/components.

The actual lead API will be implemented later in NestJS.

---

# 36. ANIMATION

Use Framer Motion selectively.

Allowed:

- Hero entrance
- Card reveal
- Section reveal
- Hover effects
- Smooth mobile menu
- Subtle CTA animation

Avoid:

- Excessive parallax
- Large animated backgrounds
- Continuous heavy animations
- Animation that delays page interaction

Respect:

prefers-reduced-motion

---

# 37. IMAGE REQUIREMENTS

Use next/image.

Every meaningful image must have:

- Appropriate alt text
- Responsive dimensions
- Correct aspect ratio
- Lazy loading where appropriate

Do not use random external image URLs as permanent production assets.

If placeholder imagery is required during development, clearly isolate it.

---

# 38. CODE QUALITY

Use:

- TypeScript strict mode
- Reusable components
- Server Components by default
- Clean props
- Small components
- No unnecessary abstraction
- No `any`
- No duplicated code
- ESLint
- Prettier

Follow:

- SOLID
- DRY
- KISS

---

# 39. DO NOT IMPLEMENT

Do NOT implement in this task:

- NestJS backend
- Prisma schema
- PostgreSQL migrations
- Admin dashboard
- Admin authentication
- RBAC
- Lead CRM
- Appointment backend
- WhatsApp backend
- Payment gateway
- Student portal
- Counsellor portal
- AI chatbot

Only create the public homepage and the frontend interfaces required for future integration.

---

# 40. DEVELOPMENT PROCESS

Before writing code:

1. Inspect the existing project.
2. Identify the existing React/Vite structure.
3. Check whether Tailwind/shadcn is already configured.
4. Check existing components.
5. Reuse existing design-system components where appropriate.
6. Do not overwrite existing functionality unnecessarily.

Then:

1. Create homepage architecture.
2. Create reusable components.
3. Create typed mock data.
4. Build sections.
5. Make responsive.
6. Add accessibility.
7. Add SEO.
8. Add analytics hooks.
9. Optimize performance.
10. Test.

---

# 41. REQUIRED OUTPUT

Before implementation, provide:

## A. Homepage section structure

Show the exact section order.

## B. Component tree

Show the React component hierarchy.

## C. File structure

Show files that will be created/modified.

## D. Design decisions

Briefly explain:

- Color direction
- Typography
- Layout
- CTA strategy
- Card style
- Mobile strategy

Then implement the homepage.

---

# 42. AFTER IMPLEMENTATION

Provide:

### 1. Files created

### 2. Files modified

### 3. Components created

### 4. Routes created

### 5. Mock data created

### 6. SEO implemented

### 7. Analytics events prepared

### 8. Responsive breakpoints tested

### 9. Performance considerations

### 10. Accessibility considerations

### 11. How to run

### 12. How to verify

### 13. Known limitations

### 14. Recommended next step

Do not implement the next project phase automatically.

---

# 43. IMPORTANT

The homepage must look like a real premium production website, not a developer prototype.

Avoid:

- Generic template appearance
- Excessive gradients
- Excessive rounded containers
- Huge unnecessary whitespace
- Generic stock dashboard styling
- Poor typography
- Overuse of blue
- Repetitive cards
- Fake statistics presented as real
- Fake testimonials presented as real
- Placeholder content that looks production-ready

Create a polished, original Go2Abroad experience.

The final result should communicate:

"Go2Abroad helps students confidently find the right destination, university and course and begin their international education journey."

END OF HOMEPAGE DEVELOPMENT PROMPT
