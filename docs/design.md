# Go2Abroad Design System

**Version:** 1.1  
**Date:** 2026-09-21  
**Status:** Current public frontend design reference

## 1. Design purpose

Go2Abroad should feel trustworthy, supportive, modern, and action-oriented.
The design must reduce uncertainty for students and families while guiding
visitors toward a counselling enquiry.

The current implementation has three related but distinct experiences:

- Public website: inspirational, editorial, responsive, and conversion-focused.
- Admin workspace: dense, operational, clear, and task-focused.
- Student portal: calm, secure, and supportive for personal progress.

The public website is the primary brand experience. Admin and student screens
use simpler application layouts while retaining Go2Abroad branding.

## 2. Design principles

1. **Clarity before decoration** — every page should make the next useful action
   obvious.
2. **Confidence through evidence** — use destinations, partner information,
   testimonials, process steps, and clear service descriptions to build trust.
3. **Human guidance** — copy and interactions should feel supportive rather than
   transactional.
4. **Progressive disclosure** — show the important information first and allow
   detailed content to unfold through sections, cards, tabs, or detail pages.
5. **Accessible by default** — keyboard access, contrast, labels, focus states,
   readable type, and reduced-motion support are product requirements.
6. **Consistent conversion** — enquiry, call, email, WhatsApp, and counselling
   actions should look and behave consistently.
7. **Responsive composition** — layouts must adapt intentionally, not merely
   shrink from desktop to mobile.

## 3. Current public frontend design

The active public frontend is `apps/frontend`, a React 19 + Vite single-page
application. Its visual language is a polished study-abroad consultancy site:

- Large, bold editorial headings using the current Poppins/Plus Jakarta font
  setup (font choice is not yet fully consistent).
- Light blue-gray page backgrounds and white content cards.
- Go2Abroad blue accents with dark navy text.
- Rounded cards, pill labels, arrow-led buttons, image-led sections, and soft
  decorative gradients.
- Travel/study imagery, country icons, globe/cloud backgrounds, student stories,
  service imagery, and partner marks.
- A conversion path repeated through the site: explore → understand services →
  see proof → submit an enquiry or contact the team.

### Current public page composition

The current route/page composition is:

| Route | Implemented visual sections |
|---|---|
| `/` | Hero, popular destinations/counters, about, services, universities, CTAs, contact form, locations, process/how-it-works, success stories, team, FAQs, latest blog, and closing CTA. |
| `/about-us` | Banner, company story, approach, CTA, why choose us, counters, and closing CTA. |
| `/services` | Banner, services introduction, service cards/list, CTA, process, and closing CTA. |
| `/destinations` | Banner, destination introduction/list, CTA, more destinations, and closing CTA. |
| `/courses` | Banner, course introduction/list, CTA, process, and closing CTA. |
| `/success-stories` | Banner, story introduction/list, and CTA. |
| `/faq` | Banner, FAQ content, and CTA. |
| `/contact` | Banner, CTA, enquiry form, and office/location content. |
| `/usa` | USA banner and country-detail content. |
| `/arizona-state-university` | ASU banner and institution-detail content. |

The route shell is composed in `src/components/Layout.jsx` and consistently
renders `Header`, page content, `Footer`, `CursorFx`, `RouteEffects`, and
`FloatingContactButtons`.

### Current asset language

The public site uses asset families already present in
`apps/frontend/public/images`:

- `hero-*`, `slider-*`, `globe-*`, `cloud-*`, `lines-*`, and `bg-*` for hero and
  atmospheric backgrounds.
- `country-*`, `location*.svg`, and `country*.svg` for destination discovery.
- `service-image-*`, `about-*`, `page-*`, and `how-works-img.png` for service,
  process, and informational sections.
- `profile-*`, named team images, `story*`, and review imagery for people and
  success stories.
- `footer-bg.png`, `footerLight.png`, `logo.png`, `logo.svg`, and
  `logo-white.svg` for brand surfaces.

New imagery should fit this warm, optimistic, editorial travel/education
direction. Avoid generic corporate stock imagery or visual styles that compete
with the blue/navy Go2Abroad identity.

### Current frontend implementation stack

The visual layer currently combines:

- Bootstrap grid and utility classes.
- `custom.css` as the main Go2Abroad visual stylesheet.
- Swiper for sliders and horizontal destination/content groups.
- AOS, GSAP, cursor scripts, and the legacy template scripts for motion and
  route re-initialisation.
- Font Awesome classes for arrows, phone, email, WhatsApp, and other icons.
- React components for page composition and route-aware navigation.

The design system is therefore currently class-based and stylesheet-led. New
public components should reuse classes such as `sis-section-title`,
`sis-btn-default`, `sis-radius`, `sis-brand-gradient-light`,
`sis-brand-gradient-dark`, and the existing `sisf-*` section patterns before
introducing a new visual vocabulary.

### Current implementation gaps

These are documented differences between the intended design system and the
current frontend code:

- `custom.css` declares Poppins, while `index.html` currently imports Plus
  Jakarta Sans. Choose one production font and make the CSS/import consistent.
- `WebsiteSettingsContext.jsx` contains API-backed branding and metadata logic,
  but the current `App.jsx` does not mount `WebsiteSettingsProvider`; public
  header/footer branding currently uses static asset paths.
- `submitContactForm.js` currently submits to FormSubmit. The NestJS `POST
  /leads` endpoint exists, but the public form is not currently using it.
- Several page sections still use static component content and assets rather
  than published CMS/catalogue data.
- Legacy vendor scripts and CSS remain part of the visual runtime and should be
  replaced or isolated incrementally, not removed without visual regression
  testing.

## 4. Brand foundations

### 4.1 Public-site color tokens

These tokens are currently defined in `apps/frontend/public/css/custom.css`:

| Token | Value | Use |
|---|---|---|
| `--main-color` | `#4FA8DC` | Primary accent, links, labels, active details, and calls to action. |
| `--primary-color` | `#15202B` | Headings, dark text, navigation, and strong contrast surfaces. |
| `--secondary-color` | `#F1F5F9` | Page background and light sections. |
| `--text-color` | `#55627A` | Body copy and supporting text. |
| `--white-color` | `#FFFFFF` | Cards, navigation surfaces, and reversed text. |
| `--transparent-color` | `#0000004d` | Overlays and translucent UI layers. |
| `--error-color` | `rgb(230, 87, 87)` | Form and validation errors. |

Use the existing tokens before introducing new colors. New colors require a
clear semantic purpose and a contrast check.

### 4.2 Application colors

The admin workspace currently uses a Tailwind-based slate, indigo, and orange
palette:

- Slate: application backgrounds, borders, body text, and navigation.
- Indigo: primary actions, active navigation, focus states, and admin brand
  accent.
- Orange: secondary brand accent, avatars, and highlights.
- Red: destructive actions and errors.
- Green: successful operations and positive status.

The student portal currently uses a light blue-gray background, navy text,
orange accent, white cards, and navy primary buttons. Future shared design
tokens should align these application palettes without reducing the distinct
operational character of each experience.

## 5. Typography

### Public website

- The stylesheet's intended primary and heading font is Poppins. The current
  HTML font import is Plus Jakarta Sans, so this is a known implementation
  mismatch that must be resolved before treating typography as final.
- Body size: approximately `17px`.
- Body line height: approximately `1.7`.
- Heading line height: approximately `1.25`.
- Section labels: uppercase, compact, accent-colored, and often paired with a
  dot or icon.
- Main headings: bold, high-contrast, and short enough to scan quickly.

Typography rules:

- Use sentence case for normal copy and headings unless a small section label
  intentionally uses uppercase.
- Keep paragraphs short and use subheadings, bullets, or cards for long content.
- Do not use font weight or color as the only indicator of meaning.
- Avoid all-caps for long sentences.

### Admin and student applications

- Prioritise compact, readable labels and data density.
- Use clear hierarchy between page title, section title, label, helper text, and
  validation message.
- Do not copy the public website's large marketing typography into tables or
  operational forms.

## 6. Spacing and layout

Use the existing Bootstrap/grid conventions on the public site and Tailwind
layout utilities in admin/student applications. New components should follow a
consistent spacing scale rather than arbitrary one-off values.

Recommended semantic spacing:

| Level | Purpose |
|---|---|
| `xs` | Icon/text gaps, compact metadata, input helper text. |
| `sm` | Form controls, card internals, list rows. |
| `md` | Related content groups and standard section gaps. |
| `lg` | Card groups, major content blocks, and desktop form spacing. |
| `xl` | Page sections, hero composition, and major visual transitions. |

Layout rules:

- Use a constrained content container for readable line lengths.
- Keep important content above excessive decorative background layers.
- Use whitespace to separate intent: discovery, proof, process, and conversion.
- Maintain consistent horizontal alignment between section headings and content.
- Avoid layouts that depend on fixed-height text containers.

## 7. Public website composition

### Header

The current header contains the Go2Abroad logo, active-route styling, a
contact/counselling CTA, and these primary navigation groups:

- Home
- About Us
- Services, with service anchors such as counselling, profile building,
  university shortlisting, scholarships, SOP/LOR, visa, loans, tests,
  accommodation, forex, post-arrival, alumni, and helpline support.
- Study Destinations, with country and regional links.
- Courses, with undergraduate, postgraduate, MBA, PhD, diploma, and language
  anchors.
- Success Stories
- FAQ
- Contact Us

Services, destinations, and courses use dropdown menus on the desktop layout.
The mobile behavior is supported by the legacy navigation scripts and must be
verified after route changes.

Rules:

- Logo links to `/` and has meaningful alt text.
- The active route must be visible without relying on color alone.
- Dropdown items must be keyboard and touch usable.
- Navigation must remain usable at narrow widths without clipped content.
- Do not introduce a second competing primary navigation pattern.

### Hero sections

Hero sections should communicate one message, one audience benefit, and one
primary action. Use supporting imagery or illustration to establish aspiration,
but keep the heading and action legible on small screens.

### Content sections

Common public patterns include:

- Section label plus strong heading.
- Image/text split sections.
- Destination, service, university, course, or story cards.
- Process/timeline steps.
- Testimonial/review blocks.
- FAQ accordion or grouped questions.
- Contact/enquiry panels.
- Partner and trust strips.

Cards should have a clear title, useful supporting content, and an obvious
interaction when clickable. Avoid making an entire decorative card appear
interactive without a meaningful link or button.

### Footer

The footer provides partner/trust content, brand identity, contact details,
office information, navigation, social links, and legal links. It should be
useful even when the visitor has not converted and must remain readable over
background imagery.

### Floating actions

The public site currently provides floating WhatsApp, call, and back-to-top
actions. These controls must:

- Have accessible labels and visible focus states.
- Avoid covering form fields, cookie notices, or important mobile content.
- Remain large enough for touch interaction.
- Use the same phone and WhatsApp destinations as the contact content.

The current implementation uses a fixed floating stack on the public frontend:

1. WhatsApp button.
2. Phone/call button.
3. Back-to-top button, shown after scrolling beyond the initial viewport.

The component is `src/components/FloatingContactButtons.jsx`; its visual
classes are `sis-floating-contact`, `sis-floating-whatsapp`,
`sis-floating-call`, and `sis-floating-top`.

## 8. Forms and interaction states

The current public enquiry form is implemented in the home and contact page
`ContactUs` components. It uses a two-part visual layout: a contact/information
panel with the Go2Abroad image and phone/email/WhatsApp details, alongside a
white form card. The form includes destination, interest, country code, phone,
email, message, and submission feedback.

The form currently uses `src/utils/submitContactForm.js` and the FormSubmit
AJAX endpoint. This is an implementation detail, not the long-term product
design: once the public form moves to `POST /leads`, the visual states should
remain unchanged while the data path changes.

Every form must visibly support:

- Default state.
- Focus state.
- Invalid field state with an understandable message.
- Submitting state that prevents accidental duplicate actions.
- Success state with a clear next step.
- Failure state with recovery guidance.
- Disabled state with sufficient contrast.

Form rules:

- Every input needs a visible or programmatically associated label.
- Use the correct input type and autocomplete attributes.
- Do not clear user input after an error.
- Preserve entered values when a request fails.
- Keep validation messages next to the relevant field where possible.
- Never expose internal API errors, stack traces, or sensitive data to users.

## 9. Buttons, links, and status patterns

### Buttons

- Primary: high-contrast filled action for the main task.
- Secondary: lower-emphasis action for an alternative path.
- Text/link action: low visual weight for navigation or supporting actions.
- Destructive: reserved for irreversible or removal operations and must require
  appropriate confirmation.

Button labels should describe the result: `Book counselling`, `Send enquiry`,
`Save changes`, `Publish page`, or `Sign in`.

### Links

- Use links for navigation and buttons for state-changing actions.
- Link text must make sense out of context where practical.
- External links must communicate or safely handle opening a new tab.
- Do not use empty anchors for visual effects.

### Status

Status labels should combine text with color or icons. Never communicate a
lead, user, publishing, or validation state by color alone.

## 10. Admin design rules

The admin workspace should optimise for frequent tasks and information
accuracy.

- Use a persistent sidebar on wide screens and a compact horizontal/navigation
  treatment on small screens.
- Keep page titles, descriptions, primary actions, filters, and result counts
  in predictable locations.
- Use cards for summaries and tables/lists for record management.
- Keep destructive actions visually separated from primary save actions.
- Use empty states that explain what is missing and how to create the first
  record.
- Use confirmation for delete, archive, publish, restore, and permission
  changes.
- Preserve unsaved form data when validation or network errors occur.
- Make filters, sorting, pagination, and search state visible and repeatable.
- Avoid dashboard metrics that are hardcoded or presented as production data.

## 11. Student portal design rules

The student portal should feel reassuring and private:

- Use plain language and explain unfamiliar application steps.
- Show progress, current status, next action, and outstanding requirements.
- Keep personal data and document actions clearly scoped.
- Use confirmation for submissions and document removal.
- Provide accessible authentication, recovery, loading, and session-expiry
  states.
- Prefer guided workflows over dense administrative tables.

## 12. Responsive behavior

### Mobile

- Prioritise the hero message and primary conversion action.
- Collapse multi-column sections into a readable single-column flow.
- Keep tap targets comfortably sized and separated.
- Prevent horizontal overflow from carousels, tables, dropdowns, or long URLs.
- Keep floating actions away from browser controls and form submit buttons.

### Tablet

- Use intermediate column counts and preserve readable card widths.
- Avoid simply stretching desktop navigation across the viewport.

### Desktop

- Use whitespace and grouped sections to establish hierarchy.
- Keep line lengths readable even inside wide containers.
- Use multi-column layouts where comparison or scanning benefits from it.

## 13. Motion and visual effects

The public site currently uses AOS, cursor effects, sliders, and legacy visual
plugins. Future motion must follow these rules:

- Motion must support hierarchy or feedback, not distract from the task.
- Respect `prefers-reduced-motion` and provide an effectively static experience
  when requested.
- Never make essential content depend on an animation completing.
- Avoid cursor effects on touch devices and low-power contexts.
- Keep decorative background motion lightweight and non-blocking.
- Ensure animated elements do not cause layout shifts.

## 14. Images and media

- Use descriptive alt text for informative images.
- Use empty alt text for purely decorative images.
- Provide appropriate dimensions and responsive sizing.
- Prefer compressed, modern formats where the hosting pipeline supports them.
- Do not place text-only information inside images.
- Use `loading="lazy"` for below-the-fold non-critical imagery.
- Keep brand logos legible on light and dark backgrounds.
- Store configurable CMS media through the API/media system rather than
  hardcoding user-uploaded files into source.

## 15. Accessibility requirements

All new screens and components must target WCAG 2.1 AA practices:

- Keyboard-operable navigation, forms, dialogs, menus, and carousels.
- Logical heading hierarchy.
- Visible focus indication.
- Sufficient text and control contrast.
- Labels and errors announced appropriately to assistive technology.
- No keyboard traps.
- No color-only status communication.
- Reduced-motion support.
- Meaningful page titles and document language.

Accessibility review is required before production launch and after major
navigation or form changes.

## 16. Design implementation rules

- Reuse existing CSS variables, Bootstrap patterns, Tailwind utilities, and
  shared page-builder components before adding new primitives.
- Keep public-site styles in the frontend style system; do not leak admin
  styles into public components.
- Keep component-specific styles close to their component convention unless a
  token or pattern is genuinely shared.
- Use stable class names and avoid styling based on fragile DOM position.
- Do not add inline styles for reusable visual rules.
- Do not change brand colors, fonts, logo treatment, or primary navigation
  structure without product/design approval.
- Test new designs at the smallest supported viewport and with keyboard-only
  navigation.

### Current frontend source of truth

When implementing a public-site design change, inspect these files first:

- `apps/frontend/public/css/custom.css` — tokens, layout, responsive rules,
  gradients, buttons, cards, header/footer, and section styles.
- `apps/frontend/index.html` — global CSS, font, icon, and legacy plugin loads.
- `apps/frontend/src/components/Layout.jsx` — global page shell.
- `apps/frontend/src/components/Header.jsx` — navigation and global CTA.
- `apps/frontend/src/components/Footer.jsx` — footer/partner/contact design.
- `apps/frontend/src/components/FloatingContactButtons.jsx` — fixed contact
  actions.
- `apps/frontend/src/components/sections/` — reusable page section patterns.
- `apps/frontend/public/images/` — approved current visual assets.

## 17. Design review checklist

Before completing a design change, verify:

- The page has a clear purpose and primary action.
- The visual hierarchy is understandable without animation.
- Copy, labels, and error states are complete.
- The design works at mobile, tablet, and desktop widths.
- Focus, hover, active, disabled, loading, empty, success, and error states
  are covered.
- Images have correct alt behavior and do not distort the layout.
- Contrast and keyboard interaction are acceptable.
- Public, admin, and student boundaries remain visually and technically clear.
- The change does not introduce hardcoded production configuration or duplicate
  an existing design pattern.
