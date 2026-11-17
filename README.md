# Hiya Dullu — Personal Portfolio

A production-quality, fully responsive personal portfolio website built with **Vite + React + Tailwind CSS + Framer Motion**.

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # production bundle in dist/
npm run preview    # preview the production build
```

## Editing Your Content

**All editable content lives in a single file:** [`src/content.js`](src/content.js)

Open it and replace every `[PLACEHOLDER]` with your real data. You should **never** need to edit any component file to update your portfolio content.

### Placeholder Reference

| Placeholder | Where in `content.js` | Description |
|---|---|---|
| `[YOUR_PHOTO_URL]` | `hero.photoUrl` | Path or URL to your portrait image |
| `[RESUME_LINK]` | `hero.ctaSecondary.href` | Link to download your resume |
| `[YOUR_EMAIL]` | `about.contact.email` | Your email address |
| `[YOUR_PHONE]` | `about.contact.phone` | Your phone number |
| `[YOUR_CITY]` | `about.contact.location` | Your city / location |
| `[LINKEDIN_URL]` | `about.contact.linkedin` | Your LinkedIn profile URL |
| `[GITHUB_URL]` | `about.contact.github` | Your GitHub profile URL |
| `[RESUME_URL]` | `about.contact.resume` | Resume view/download URL |
| `[FORM_ENDPOINT_PLACEHOLDER]` | `about.formEndpoint` | Contact form action URL (e.g. Formspree, Getform) |
| `[PROJECT_IMAGE_URL]` | `projects[*].imageUrl` | Screenshot for each project |
| `[PROJECT_LINK]` | `projects[*].liveLink` | Live demo URL for each project |
| `[GITHUB_REPO_LINK]` | `projects[*].repoLink` | GitHub repo URL for each project |
| `[CERTIFICATE_LINK]` | `certifications[*].link` | Credential verification URL |
| `[COMPANY_LINK]` | `experiences[*].companyLink` | Company website URL |
| `[PAPER_LINK]` | `moreAbout.research.link` | Link to your IEEE paper |
| `[PERSONAL_BIO_PLACEHOLDER]` | `moreAbout.personalBio` | Short personal bio paragraph |
| `[HOBBIES_PLACEHOLDER]` | `moreAbout.hobbies` | Your hobbies and interests |
| `[IMAGE_1]`, `[IMAGE_2]`, `[IMAGE_3]` | `moreAbout.imageStrip` | Personal photo strip images |

### Adding Images

Place images in the `public/` folder and reference them with a leading `/`:
```js
photoUrl: "/my-portrait.jpg",
```

Or use external URLs:
```js
photoUrl: "https://example.com/photo.jpg",
```

## Project Structure

```
src/
├── content.js              ← All editable content
├── index.css               ← Global styles, design tokens, animations
├── main.jsx                ← React entry point
├── App.jsx                 ← Layout & section ordering
└── components/
    ├── Navbar.jsx           ← Sticky nav with mobile hamburger
    ├── Hero.jsx             ← Home/hero section
    ├── MarqueeBand.jsx      ← Scrolling pink marquee band
    ├── RotatingBadge.jsx    ← Circular spinning text badge
    ├── Projects.jsx         ← "Recent Work" project cards
    ├── About.jsx            ← Bio, contact card & form
    ├── Skills.jsx           ← Skills tags & certifications
    ├── Experience.jsx       ← Timeline-style work experience
    ├── MoreAbout.jsx        ← Research, positions, personal info
    └── Footer.jsx           ← Social icons & copyright
```

## Design System

- **Background:** warm cream `#F2EFE6`
- **Accent:** bubblegum pink `#EFA9CB`
- **Text:** near-black `#111`
- **Headings:** Cormorant Garamond (serif), with key words in pink italic
- **Body:** Inter (sans-serif), 13–14px
- **Buttons:** pill-shaped, pink fill, thin black border, serif text with arrow →

## Tech Stack

- [Vite](https://vite.dev/) — build tool
- [React](https://react.dev/) — UI library
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first CSS
- [Framer Motion](https://motion.dev/) — scroll animations
- Google Fonts (Cormorant Garamond, Playfair Display, Inter)

## License

Personal portfolio — all rights reserved.
