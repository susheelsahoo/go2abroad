# Go2Abroad — Custom CMS Page Content Editor

I need you to build a **simple, maintainable Page Content Management module** for the existing Go2Abroad project.

IMPORTANT:

This is NOT a full Elementor/Figma/GrapesJS-style page builder.

The React/Next.js page design already exists.

The developer must control:

- Layout
- Components
- CSS
- Typography
- Colors
- Spacing
- Animations
- Responsive behavior
- Section structure

The Admin should only be able to change:

- Text/content
- Images
- Links/buttons where explicitly configured
- Other predefined content fields

The Admin must NOT be able to modify the actual page design.

==================================================

1. FIRST: ANALYZE THE EXISTING PROJECT
   \==================================================

Before writing any code:

1. Read README.md completely.
2. Read all relevant .md documentation files.
3. Inspect the existing Next.js/React frontend.
4. Inspect the existing NestJS backend.
5. Inspect Prisma schema.
6. Inspect existing MySQL models.
7. Inspect existing Admin/CMS modules.
8. Inspect existing Media Library.
9. Inspect existing authentication and permissions.
10. Inspect existing SEO functionality.
11. Inspect the current Home page.
12. Identify all sections/components used by the Home page.

Do NOT start implementing until you understand the existing architecture.

Reuse existing architecture wherever possible.

Do NOT create duplicate functionality.

================================================== 2. PRIMARY GOAL
==================================================

I already have a React page such as:

Home Page
↓
Hero
↓
About
↓
Study Destinations
↓
Why Choose Us
↓
How It Works
↓
Testimonials
↓
FAQ
↓
CTA

I want Admin to be able to edit the content without modifying the React code.

Example:

Developer code:

<h1>{content.hero.title}</h1>

Admin sees:

Hero
-------------------------

Title:
[ Study Abroad Made Easy ]

Description:
[ Find your perfect university... ]

Image:
[ Current Image ] [Change Image]

[Save Changes]

After saving:

Database
↓
NestJS API
↓
Next.js
↓
React component

The page should automatically display the updated content.

================================================== 3. DO NOT BUILD A FREE-FORM PAGE BUILDER
==================================================

Do NOT implement:

- Drag and drop page layout
- Arbitrary HTML builder
- CSS editor
- Visual canvas
- Free positioning
- Elementor clone
- Figma-style editor
- GrapesJS
- Builder.io
- Arbitrary JavaScript
- Arbitrary CSS

The page structure remains controlled by developers.

The Admin edits content only.

================================================== 4. CONTENT-DRIVEN REACT COMPONENTS
==================================================

Convert the existing Home Page components to use CMS content.

Instead of:

<h1>Study Abroad Made Easy</h1>

Use:

<h1>{content.hero.title}</h1>

Instead of:

<p>Find the right university for your future.</p>

Use:

<p>{content.hero.description}</p>

Instead of hardcoded image:

<Image src="/images/student.jpg" />

Use:

<Image
    src={content.hero.image}
    alt={content.hero.imageAlt}
/>

Do this carefully for all content that should be editable.

DO NOT convert design-related values into CMS fields.

================================================== 5. EDITABLE VS NON-EDITABLE
==================================================

Clearly separate editable content from developer-controlled design.

### Admin Editable

Examples:

- Heading
- Description
- Paragraph
- Button text
- Button URL
- Image
- Image alt text
- Student name
- Student feedback
- Country name
- University name
- FAQ question
- FAQ answer
- Section label
- CTA text

### Developer Controlled

Do NOT expose these to Admin:

- Font family
- Font size
- Colors
- CSS
- Margin
- Padding
- Width
- Height
- Grid configuration
- Animation code
- Component structure
- Responsive breakpoints
- HTML
- JavaScript

The goal is to prevent an Admin from accidentally breaking the website design.

================================================== 6. DATABASE DESIGN
==================================================

Use the existing Prisma/MySQL architecture.

Prefer a simple JSON content model unless the existing project has a better established CMS structure.

Recommended conceptual model:

Page

- id
- title
- slug
- content JSON
- status
- seoTitle
- seoDescription
- createdAt
- updatedAt
- publishedAt

Example:

{
"hero": {
"title": "Study Abroad Made Easy",
"description": "Find your perfect university.",
"image": "/uploads/hero.jpg",
"imageAlt": "Students studying abroad",
"buttonText": "Get Free Consultation",
"buttonUrl": "/contact"
},

    "about": {
        "title": "Your Trusted Study Abroad Partner",
        "description": "We help students...",
        "image": "/uploads/about.jpg",
        "imageAlt": "Student consultation"
    },

    "cta": {
        "title": "Ready to Start Your Journey?",
        "description": "Talk to our study abroad experts."
    }

}

Adapt the exact Prisma model and naming conventions to the existing project.

Do NOT blindly create a new Page table if one already exists.

Extend the existing Pages/CMS model if appropriate.

================================================== 7. CONTENT SCHEMA
==================================================

Do not allow arbitrary JSON.

Define a known content schema for each page.

For example:

Home Page:

hero
about
destinations
whyChooseUs
howItWorks
testimonials
faq
cta

Each section defines exactly which fields can be edited.

Example:

Hero:

{
title: string,
description: string,
image: string,
imageAlt: string,
buttonText: string,
buttonUrl: string
}

This provides structure and validation.

================================================== 8. ADMIN CONTENT EDITOR
==================================================

Create:

Admin
↓
Pages
↓
Home
↓
Edit Content

The Admin UI should be simple and clean.

Example:

---

Home Page
------------------------------------------

[Save Changes] [Preview]

HERO
------------------------------------------

Heading

[ Study Abroad Made Easy ]

Description

[ Find your perfect university... ]

Hero Image

┌───────────────────┐
│ │
│ IMAGE │
│ │
└───────────────────┘

[ Change Image ]

Button Text

[ Get Free Consultation ]

Button URL

[ /contact ]

---

ABOUT
------------------------------------------

Heading

[ Your Trusted Study Abroad Partner ]

Description

[ We help students... ]

Image

[ Change Image ]

---

Do NOT show raw JSON to normal Admin users.

================================================== 9. IMAGE MANAGEMENT
==================================================

Use the existing Media Library.

Do NOT create a separate image upload system if one already exists.

Admin should be able to:

- View current image
- Change image
- Remove image
- Select image from Media Library
- Add alt text

Prefer existing Media Library APIs/components.

Store the media reference/path/ID according to the existing project architecture.

Do not duplicate image files unnecessarily.

================================================== 10. RICH TEXT
==================================================

For fields that require formatting, use the project's existing rich text editor if available.

If there is no existing editor, use a lightweight editor such as Tiptap.

Use rich text only where necessary.

Do NOT use rich text for simple:

- Headings
- Buttons
- Labels
- Short descriptions

Avoid allowing arbitrary HTML unless absolutely necessary.

If HTML is allowed, sanitize it securely.

================================================== 11. HOME PAGE SECTIONS
==================================================

Inspect the current Home page and create editable fields based on its actual sections.

Do NOT blindly create fields that do not exist.

Potential sections include:

1. Hero
2. Trust/Statistics
3. About
4. Study Destinations
5. Universities
6. Why Choose Us
7. How It Works
8. Client Feedback / Testimonials
9. FAQ
10. Blog
11. Consultation CTA
12. Footer

Use the existing page structure.

================================================== 12. CLIENT FEEDBACK
==================================================

The existing Client Feedback section should remain visually controlled by React.

Admin should only manage:

- Student name
- Student image
- Country
- University
- Course
- Rating
- Feedback text

Example:

{
"name": "Rahul Sharma",
"country": "United Kingdom",
"university": "University Name",
"course": "MSc Computer Science",
"rating": 5,
"feedback": "The Go2Abroad team helped me throughout my application.",
"image": "/uploads/student.jpg"
}

The Admin must not be able to change the testimonial card layout.

================================================== 13. DYNAMIC DATA
==================================================

Do not duplicate existing database entities into Page JSON.

For example, if the project already has:

- Countries
- Universities
- Courses
- Blogs
- Testimonials

then reuse those APIs/models where appropriate.

Example:

The page may store:

{
"destinations": {
"title": "Explore Study Destinations",
"countryIds": [1, 3, 5]
}
}

The actual country information should continue to come from the existing Country module.

Do not duplicate the complete country record inside page content.

================================================== 14. API
==================================================

Follow the existing NestJS API conventions.

Required functionality:

- Get page content
- Update page content
- Get published page
- Save draft
- Publish page

Use the existing authorization system.

Do not expose Admin-only editing endpoints publicly.

Adapt endpoint naming to the project's current API conventions.

================================================== 15. DRAFT / PUBLISHED
==================================================

Support:

DRAFT
PUBLISHED

Workflow:

Admin edits
↓
Save Draft
↓
Preview
↓
Publish
↓
Public website displays content

Saving changes must NOT automatically publish them unless the existing project specifically follows that behavior.

The public website should display only published content.

================================================== 16. PREVIEW
==================================================

Provide a Preview option in Admin.

Preview should show the actual React page with draft content.

Prefer reusing the existing frontend page/component instead of creating a separate preview design.

Preview must:

- Use the same components
- Use the same CSS
- Use the same responsive behavior
- Use the same animations
- Use draft content

Do not create a second version of the page.

================================================== 17. SEO
==================================================

Allow Admin to edit:

- SEO title
- SEO description
- OG image if supported

Reuse the existing SEO system.

Do not create duplicate SEO functionality.

================================================== 18. VALIDATION
==================================================

Validate all content before saving.

Examples:

Hero title:

- Required
- Reasonable length

Description:

- Optional/required according to current design

Image:

- Valid media reference

Button URL:

- Valid internal or external URL

Testimonial:

- Name required
- Feedback required

Prevent malformed content from breaking the frontend.

================================================== 19. DEFAULT CONTENT / FALLBACK
==================================================

Very important:

The website must not break if CMS content is missing.

Provide safe defaults where appropriate.

Example:

const title =
content?.hero?.title ??
"Study Abroad Made Easy";

Do this thoughtfully.

Do not hide programming errors with excessive fallback logic.

================================================== 20. PERFORMANCE
==================================================

Keep the existing page performance.

Do not make every component unnecessarily client-side.

Use server-side data fetching where appropriate.

Avoid:

- Unnecessary API requests
- Duplicate API calls
- Large JSON payloads
- Unnecessary React state
- Heavy CMS libraries

The CMS should have minimal impact on public website performance.

================================================== 21. SECURITY
==================================================

Follow existing Admin authorization.

Only authorized users can edit content.

Validate all incoming data.

Sanitize rich text.

Do not allow:

- Arbitrary JavaScript
- Arbitrary CSS
- Script injection
- Unsafe iframe injection
- Untrusted HTML execution

================================================== 22. VERSION SAFETY
==================================================

Before modifying existing database models:

- Inspect current usage
- Check existing migrations
- Check existing APIs
- Check frontend dependencies

Do not delete existing content.

Create safe Prisma migrations.

================================================== 23. COMPONENT ARCHITECTURE
==================================================

Keep the React code clean.

Example:

HomePage
↓
usePageContent()
↓
content
↓
HeroSection
AboutSection
DestinationSection
TestimonialSection
CTASection

Avoid passing the entire CMS object everywhere if only a small portion is needed.

Prefer:

<HeroSection data={content.hero} />

<AboutSection data={content.about} />

<TestimonialsSection data={content.testimonials} />

================================================== 24. CONTENT EDITOR ARCHITECTURE
==================================================

Create reusable Admin field components.

Examples:

TextField
TextareaField
RichTextField
ImageField
UrlField
RepeaterField

For example:

<TextField
    label="Heading"
    value={content.hero.title}
    onChange={...}
/>

<ImageField
    label="Hero Image"
    value={content.hero.image}
    onChange={...}
/>

This makes future pages easier to implement.

================================================== 25. REUSABLE PAGE SCHEMA
==================================================

Do not hardcode the Admin UI separately for every field if it can be avoided.

Create a structured schema/configuration system where practical.

Example:

Hero schema:

{
title: {
type: "text",
label: "Heading"
},
description: {
type: "textarea",
label: "Description"
},
image: {
type: "image",
label: "Hero Image"
}
}

The editor can use this schema to render the appropriate fields.

Keep the implementation simple.

Do NOT over-engineer a generic framework.

================================================== 26. ADMIN UX
==================================================

Make content editing easy for a non-technical user.

Use:

- Clear labels
- Helpful placeholders
- Image previews
- Save button
- Saving indicator
- Success notification
- Error notification
- Unsaved changes warning
- Section headings
- Collapsible sections if the page is large

Example:

Saving...

Saved successfully

Unsaved changes

Do not make the Admin work with JSON or code.

================================================== 27. MOBILE ADMIN
==================================================

The Admin editor should be usable on:

- Desktop
- Tablet

Mobile support is desirable but not mandatory if the existing Admin is desktop-oriented.

================================================== 28. DO NOT CHANGE THE EXISTING DESIGN
==================================================

This is one of the most important requirements.

The current React page design should remain exactly as designed unless a change is explicitly required.

Do NOT change:

- Layout
- Section order
- Colors
- Fonts
- Animations
- Spacing
- Cards
- Responsive behavior
- CSS

Only replace hardcoded content with CMS-driven content.

================================================== 29. IMPLEMENTATION PROCESS
==================================================

Follow this exact process:

STEP 1
Read README.md and all relevant documentation.

STEP 2
Inspect existing Pages/CMS functionality.

STEP 3
Inspect the current Home page.

STEP 4
Create a list of all text/image fields currently hardcoded in the Home page.

STEP 5
Separate fields into:

Editable by Admin
vs
Developer controlled.

STEP 6
Design the Prisma content model.

STEP 7
Create migration.

STEP 8
Create NestJS API.

STEP 9
Create Admin Content Editor.

STEP 10
Connect existing Media Library.

STEP 11
Convert React Home Page to CMS-driven content.

STEP 12
Add fallback/default content.

STEP 13
Add draft/publish.

STEP 14
Add preview.

STEP 15
Add validation/security.

STEP 16
Test everything.

================================================== 30. TESTING
==================================================

Test:

1. Open Home page without CMS content.
2. Confirm page still works.
3. Create initial CMS content.
4. Change Hero heading.
5. Save.
6. Reload website.
7. Confirm heading changed.
8. Change Hero image.
9. Confirm image changed.
10. Change About content.
11. Change testimonial.
12. Preview draft.
13. Confirm draft is not public.
14. Publish.
15. Confirm published content is public.
16. Test invalid content.
17. Test unauthorized access.
18. Test missing image.
19. Test mobile frontend.
20. Test desktop frontend.

Run:

- Existing tests
- New tests
- TypeScript checks
- Lint
- Prisma validation
- Production build

Fix all errors before completing.

================================================== 31. FUTURE EXTENSIBILITY
==================================================

Design the system so future pages can use the same architecture.

For example:

Home
Study Abroad
Study in UK
Study in Canada
Study in Australia
Study in USA
About Us
Contact Us

However, DO NOT build all these pages now unless they already exist.

Start with the existing Home page.

================================================== 32. FINAL RESULT
==================================================

The final system should work like this:

Developer creates:

React Page
↓
Fixed design/components

Admin manages:

Content
↓
Text
Images
Buttons/Links
Testimonials
FAQ content
SEO

Database:

MySQL
↓
Prisma

Backend:

NestJS API

Frontend:

Next.js / React

Final result:

Admin changes content
↓
Save
↓
Database
↓
API
↓
React page
↓
Updated website

==================================================
MOST IMPORTANT RULE
==================================================

This is a **CONTENT MANAGEMENT SYSTEM**, not a visual website builder.

The developer owns the design.

The Admin owns the content.

DO NOT allow Admin users to accidentally change the website layout or design.

Keep the implementation simple, clean, secure, reusable, and compatible with the existing Go2Abroad architecture.

Before finishing, provide a summary of:

- Files changed
- Database changes
- API changes
- Admin changes
- React components converted
- Editable fields added
- Media Library integration
- Draft/publish implementation
- Tests performed
- Any issues or recommendations
