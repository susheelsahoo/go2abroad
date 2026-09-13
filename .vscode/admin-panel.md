Yes. Since you are creating this in **Figma AI**, I recommend generating each screen separately. Keep the same visual system across all screens.

Use this **base style** for every prompt, then paste the individual screen prompt.

### Common design direction

- Premium modern SaaS/CMS admin panel
- Desktop-first, responsive
- Clean white/light-gray interface
- Left fixed sidebar
- Top navigation bar
- Inter font
- Lucide-style icons
- 8–12px rounded corners
- Subtle borders and shadows
- Strong typography hierarchy
- Minimal gradients
- Professional blue primary accent
- Spacious layout
- Modern cards, tables, drawers and modals
- Avoid generic Bootstrap/admin-dashboard appearance
- Designed for a professional website management platform

---

## 1. Dashboard

```text
Design a premium modern SaaS CMS Admin Dashboard for managing a single website.

Create a desktop admin interface with a fixed left sidebar and top navigation.

Sidebar:
Logo and website name at the top.
Dashboard
Pages
Media Library
Navigation
Components
Theme
SEO
Settings
Admin profile at bottom.

Top bar:
Global search, notification icon, admin avatar/menu.

Main content:
Heading "Dashboard"
Subtitle "Manage your website content and configuration."

Show four KPI cards:
Total Pages: 18
Published Pages: 12
Draft Pages: 6
Media Files: 245

Below, create a "Recent Pages" table with:
Page Name, URL, Status, Last Updated, Actions.

Rows:
Home / Published
About Us /about / Published
Services /services / Draft
Contact /contact / Published

Add a "Quick Actions" area with:
Create Page
Upload Media
Edit Navigation
Customize Theme

Use clean spacing, subtle borders, professional typography and a polished SaaS aesthetic. Make the dashboard visually balanced and production-ready.
```

---

## 2. Pages Management

```text
Design a premium modern CMS Pages Management screen for a single website.

Use the same visual language as the Dashboard: fixed left sidebar, top navigation, white/light-gray background, Inter typography, subtle borders and modern SaaS styling.

Sidebar:
Dashboard
Pages active
Media Library
Navigation
Components
Theme
SEO
Settings

Main content:
Breadcrumb "Dashboard / Pages"
Heading "Pages"
Subtitle "Create and manage the pages of your website."

Top right:
"+ Create Page" primary button.

Toolbar:
Search pages
Status filter
Sort dropdown
View toggle

Create a clean table:
Page Name
URL
Status
Sections
Last Updated
Actions

Rows:
Home / 12 sections / Published
About Us /about / 8 sections / Published
Services /services / 10 sections / Draft
Contact /contact / 6 sections / Published
FAQ /faq / 5 sections / Draft

Actions menu:
Edit
Duplicate
Preview
Publish
Delete

Include pagination and a clean empty-state design.

Make the page feel like a professional modern CMS rather than a traditional admin dashboard.
```

---

## 3. Create/Edit Page

```text
Design a modern CMS "Create Page" screen for a single website.

Use the same premium SaaS admin design system with fixed sidebar and top navigation.

Main content:
Breadcrumb "Pages / Create Page"
Heading "Create New Page"
Subtitle "Configure the basic information for your new page."

Create a centered form card.

Fields:
Page Title
URL Slug
Page Status
Template
Set as Homepage toggle

SEO section:
Meta Title
Meta Description
OG Image

Right side or top action area:
Save Draft
Create Page

Below the basic form, show an informational card:
"After creating the page, you can use the visual page builder to add and arrange sections."

Use modern inputs, dropdowns, toggles, helper text, clear labels and validation states.

Keep the interface spacious, minimal and professional.
```

---

# 4. Visual Page Builder ⭐

This is the most important Figma screen.

```text
Design a premium visual website page builder similar in usability to modern tools such as Webflow and Framer, but with a completely original UI.

Create a full-screen three-panel editor.

Top toolbar:
Back to Pages
Page name "Home"
Undo
Redo
Desktop / Tablet / Mobile preview
Preview
Save Draft
Publish

Left panel titled "Components":
Search components.

Categories:
Layout
Content
Sections
Forms

Components:
Container
Columns
Text
Image
Button
Hero
Services
Features
Statistics
Testimonials
FAQ
Gallery
CTA
Contact
Footer

Center area:
Large live website canvas showing a realistic website homepage.
Display multiple sections:
Header
Hero
Services
Testimonials
CTA
Footer

Each section should have a subtle selection outline when selected.
Show drag handles and insertion indicators.

Right panel:
"Properties"
When Hero is selected show:
Content
Title
Description
Button Text
Button URL
Image
Alignment
Background
Spacing

Bottom of canvas:
Desktop / Tablet / Mobile controls.

Make this interface polished, highly usable and visually impressive. The page builder should be the main product experience.
```

---

# 5. Page Builder — Add Section

```text
Design an "Add Section" interface for a premium website visual page builder.

The interface should appear as a modal or right-side drawer over the page builder.

Heading:
"Add Section"

Search field:
"Search components..."

Category tabs:
All
Layout
Content
Marketing
Social Proof
Forms

Display component cards in a clean grid.

Cards:
Hero
Services
Features
Statistics
Countries
Testimonials
FAQ
Gallery
CTA
Contact
Logo Cloud
Pricing
Team
Blog
Footer

Each card should include:
Simple icon/thumbnail
Component name
Short description

Example:
Hero
"Large introductory section with heading, image and CTA."

Add a small preview thumbnail for each component.

Include Cancel button.

Use a premium SaaS design with subtle borders, rounded cards, clean typography and excellent spacing.
```

---

# 6. Media Library

```text
Design a premium modern CMS Media Library for a single website.

Use the same admin sidebar and top navigation.

Main content:
Breadcrumb "Dashboard / Media Library"
Heading "Media Library"
Subtitle "Manage images, videos and files used across your website."

Top right:
"+ Upload Media"

Toolbar:
Search files
Type filter
Sort
Grid/List toggle

Main area:
Responsive image grid with attractive thumbnails.

Each asset card:
Image preview
Filename
File type
File size
More menu

Example files:
hero-study.jpg
about-team.jpg
usa-campus.jpg
logo.png
testimonial-01.jpg
contact-banner.jpg

Clicking an asset opens a right-side details drawer containing:
Preview
Filename
Alt Text
Title
File Type
File Size
URL
Copy URL
Delete

Include upload dropzone state.

Make it clean, visual and similar to a professional modern digital asset manager.
```

---

# 7. Navigation Builder

```text
Design a modern CMS Navigation Builder for a single website.

Use the same premium SaaS admin design system.

Main content:
Heading "Navigation"
Subtitle "Create and organize your website navigation."

Top right:
"Save Navigation"

Create a navigation tree:

Home
About Us
Study Destinations
  USA
  UK
  Canada
  Australia
Services
Testimonials
Contact

Each row includes:
Drag handle
Page/menu name
Link URL
Visibility indicator
More menu

Allow nested drag-and-drop menu items.

Right-side editing drawer when a menu item is selected:

Menu Label
Link Type
Page
URL
Open in New Tab
Visible toggle

Actions:
Save
Cancel

Add "+ Add Menu Item" button.

Use indentation for nested navigation and clear drag handles. Make the interface intuitive for non-technical administrators.
```

---

# 8. Components Management

```text
Design a premium CMS Components Management screen.

This screen manages reusable website sections/components used by the visual page builder.

Main content:
Heading "Components"
Subtitle "Manage reusable sections available in the page builder."

Top right:
"+ Create Component"

Toolbar:
Search components
Category filter
Status filter

Display components as modern cards.

Components:
Hero
Services
Features
Statistics
Testimonials
FAQ
Gallery
CTA
Contact
Footer

Each card:
Component preview thumbnail
Component name
Category
Used on 8 pages
Status: Active
Actions menu

Include tabs:
All Components
Active
Inactive

When selecting a component, show an editing drawer containing:
Component name
Description
Fields/schema
Preview
Active toggle

Use a polished SaaS interface and make reusable components feel like an important core feature of the CMS.
```

---

# 9. Theme Customization

```text
Design a premium visual Theme Customization screen for a single website CMS.

Create a two-column layout.

Left side:
Theme Settings panel.

Sections:

Colors
Primary Color
Secondary Color
Accent Color
Background Color
Text Color

Typography
Heading Font
Body Font
Font Size
Line Height

Buttons
Button Style
Border Radius
Padding

Layout
Container Width
Section Spacing

Right side:
Large live website preview.

Show:
Header
Hero
Content cards
Buttons
CTA
Footer

Changes to colors, typography and button styles should appear visually in the preview.

Top toolbar:
"Theme"
Reset Changes
Save Theme

Use color pickers, dropdowns, sliders and toggles.

The design should feel like a modern visual design system editor, not a traditional settings form.
```

---

# 10. SEO Management

```text
Design a modern CMS SEO Management screen for a single website.

Use the same sidebar and top navigation.

Main heading:
"SEO Settings"
Subtitle:
"Manage search engine and social sharing settings."

Create sections:

Global SEO
Site Title
Default Meta Description
Default OG Image
Canonical Domain

Search Engine
Robots
Indexing toggle
Sitemap status

Social Sharing
Open Graph Title
Open Graph Description
OG Image
Twitter/X Card

Analytics
Google Analytics ID
Google Tag Manager ID

Page SEO table below:
Page
URL
Meta Title
Meta Description
SEO Status
Actions

Show SEO status badges:
Optimized
Needs Attention
Missing

Right side optionally show a Google search preview card showing:
Website title
URL
Description

Use clean cards, clear hierarchy, helpful descriptions and modern controls.
```

---

# 11. Settings

```text
Design a premium CMS Settings screen for a single website.

Use the same modern SaaS admin layout.

Heading:
"Settings"
Subtitle:
"Manage website and system configuration."

Create settings navigation/tabs:

General
Website
Contact
Social Media
Email
Security
Users
Advanced

General section:
Website Name
Website URL
Logo
Favicon
Timezone
Default Language

Contact:
Email
Phone
Address

Social Media:
Facebook
Instagram
LinkedIn
YouTube
WhatsApp

System:
Maintenance Mode
Cache
Debug Status

Danger Zone:
Clear Cache
Reset Configuration
Delete Website

Use confirmation dialogs for destructive actions.

Keep the design professional, clean and spacious with strong visual hierarchy.
```

---

## One important recommendation

For your project, I would make the **Page Builder** the centerpiece rather than the Dashboard.

Your final navigation should be:

```text
┌──────────────────────┐
│ LOGO                 │
│                      │
│ Dashboard            │
│ Pages                │
│ Media Library        │
│ Navigation           │
│ Components           │
│ Theme                │
│ SEO                  │
│                      │
│ Settings             │
│                      │
│ ───────────────────  │
│ Admin                │
└──────────────────────┘
```

And the main workflow should be:

**Pages → Edit → Visual Builder → Add Section → Configure Section → Preview → Publish**

This will make your product feel like a **real website CMS/builder**, rather than just an admin panel with CRUD screens.
