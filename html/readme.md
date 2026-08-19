# Go2Abroad — Connecting Dreams

Static Go2Abroad website built from the `Go2Abroad-Connecting-Dreams.pdf` brand book.

## Pages

- `index.php` — Homepage with destinations, universities, courses, FAQs and lead-generation form.
- Homepage feedback sections now include portfolio, video/story, testimonial, team, university network, social links and destination/services submenus.
- `about-us.php` — About page covering the brand purpose, vision, mission, pillars and service ecosystem.
- `services.php` — Services page covering counselling, applications and visa, student support and career ecosystem.
- `courses.php` — Course discovery page covering study pathways, fit checks, budget and career-led shortlisting.
- `portfolio.php` — Student pathway examples, planning framework and responsible outcome messaging.
- `team.php` — Team roles, working principles and people-first guidance.
- `university-network.php` — University network examples and profile-based shortlisting lens.
- `faqs.php` — Accessible FAQ accordion covering common study-abroad questions.
- `contact-us.php` — Contact details and validated enquiry form.
- `blog.php` — Guidance journal listing country, budget, career, visa and parent articles.
- `blog-detail.php` — Detail page for a practical destination-planning guide.
- `destinations/index.php` — Destination overview page.
- `destinations/united-kingdom.php` — United Kingdom destination page.
- `destinations/australia.php` — Australia destination page.
- `destinations/canada.php` — Canada destination page.
- `destinations/usa.php` — United States destination page.

## Run locally

### XAMPP

1. Make sure Apache is running in XAMPP.
2. Open:

   `http://localhost/go2abroad/html/`

3. Homepage:

   `http://localhost/go2abroad/html/index.php`

4. About page:

   `http://localhost/go2abroad/html/about-us.php`

5. Services page:

   `http://localhost/go2abroad/html/services.php`

6. Destinations:

   `http://localhost/go2abroad/html/destinations/index.php`

7. Team:

   `http://localhost/go2abroad/html/team.php`

8. University network:

   `http://localhost/go2abroad/html/university-network.php`

9. FAQs:

   `http://localhost/go2abroad/html/faqs.php`

10. Contact:

`http://localhost/go2abroad/html/contact-us.php`

11. Blog:

`http://localhost/go2abroad/html/blog.php`

12. Blog detail:

`http://localhost/go2abroad/html/blog-detail.php`

13. Courses:

`http://localhost/go2abroad/html/courses.php`

### Simple local server

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Main assets

- `assets/css/globals.css` — shared design system and responsive base styles.
- `assets/css/page.css` — shared page styles, brand overrides and navigation submenu styling.
- `assets/css/animations.css` — animation styles.
- `assets/js/animations.js` — scroll and reveal animations.
- `header.php` and `footer.php` — shared header, mobile navigation and footer rendered consistently across every page.
- `assets/css/home-feedback.css` — homepage portfolio, testimonial, team, video, partner and submenu UI.
- `assets/css/services-ui.css` — Services page layout and responsive UI.
- `assets/css/portfolio-ui.css` — Portfolio page layout and responsive UI.
- `assets/css/content-pages.css` — Team, university network, FAQ and contact page UI.
- `assets/css/blog-ui.css` — Blog listing and article detail UI.
- `assets/css/courses-ui.css` — Course discovery pathways, shortlisting lens and journey UI.
- `assets/images/logo.jpeg` — Go2Abroad logo.

## Lead form status

The homepage form currently validates the visitor’s name, email, phone, course and destination, then opens a pre-filled email to:

`hello@go2abroad.com`

For production, replace the `mailto:` handling in `index.php` with a secure backend or CRM endpoint. The production endpoint should include:

- Server-side validation and sanitisation.
- Spam protection such as CAPTCHA or rate limiting.
- Consent/privacy tracking where required.
- Secure storage and access controls.
- A confirmation response and internal notification.

## Brand rules used

The site follows the supplied brand book:

- Go Navy: `#013E53`
- Royal Abroad Blue: `#184FA3`
- Global Teal: `#006E93`
- Sky Progress: `#4FA8DC`
- Cloud White: `#F3F8FC`
- Founder Gold: `#B7923E`
- Digital typeface: Inter

Messaging is based on the approved ideas of trust, clarity, career and care. Avoid unsupported claims such as guaranteed visas, scholarships or jobs.

## Before launch

- Replace placeholder WhatsApp links and email addresses with verified contact details.
- Replace stock photography with approved, permissioned student and campus photography.
- Add the approved Go2Abroad brand film/video asset to the homepage video section.
- Replace sample testimonial and team content with approved names, photos and consented quotes.
- Confirm the listed university network names represent current partner relationships before publishing.
- Connect the lead form to the selected CRM or database.
- Add analytics and conversion tracking after confirming the privacy requirements.
- Test the pages on current Chrome, Safari and mobile browsers.
- Review all country, visa, scholarship and employment information before publishing.

## Reference material

- `Go2Abroad-Connecting-Dreams.pdf`
- `https://www.studies-overseas.com/`
- `https://leverageedu.com/`
