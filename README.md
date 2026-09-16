# RWS Tech - Technology & Online Learning Platform

Modern technology education platform offering industry-aligned courses in **Web Development**, **Programming**, **App Development**, **Cloud**, and **AI** with an interactive curriculum and a student dashboard.

## Live Link

**Production:** [https://rws-tech.pages.dev](https://rws-tech.pages.dev)

Deployed on **Cloudflare Pages** (static export). Every push to the `main` branch triggers an automatic build and deployment via GitHub Actions.

## Tech Stack & Framework Details

| Layer | Technology | Version |
|---|---|---|
| Framework | **Next.js** (App Router, static export) | 15.x |
| Language | **TypeScript** | 5.9 |
| UI Library | **React** | 19.x |
| Styling | **Tailwind CSS v4** + PostCSS | 4.1 |
| Animation | **Motion** (Framer Motion) | 12.x |
| Icons | **Lucide React** | - |
| Utility Helpers | clsx + tailwind-merge (shadcn-style) | - |
| Hosting | **Cloudflare Pages** | - |
| CI/CD | GitHub Actions + Wrangler | - |

### Why Static Export?
The app is fully client-side (no server-side API routes), so it builds to a static site with `output: 'export'` in `next.config.ts`. This makes it:

- Blazing fast (pure CDN delivery)
- Free to host on Cloudflare Pages
- Instantly scalable worldwide

## Routing

Navigation uses the **Next.js App Router** with folder-based routes:

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/courses` | Course catalog |
| `/courses/[slug]` | Course details (statically generated per course) |
| `/contact` | Contact |
| `/login` | Login |
| `/register` | Register |
| `/purchase` | Checkout |
| `/dashboard` | Student dashboard |

- Navbar & Footer use `next/link` `<Link>` components - client-side navigation with **no full page reload**
- Programmatic navigation (buttons inside views) goes through `navigateTo()` in `AppContext`, which calls `router.push()` under the hood

## Project Structure

```
RWS-Tech/
|-- app/                          # Next.js App Router (folder-based routing)
|   |-- layout.tsx                # Root layout (metadata + AppShell wrapper)
|   |-- page.tsx                  # / - Home page
|   |-- globals.css               # Global styles (Tailwind + custom theme)
|   |-- about/
|   |   `-- page.tsx              # /about
|   |-- courses/
|   |   |-- page.tsx              # /courses - course catalog
|   |   `-- [slug]/
|   |       |-- page.tsx          # /courses/[slug] - details (SSG per course)
|   |       `-- CourseDetailsClient.tsx
|   |-- contact/
|   |   `-- page.tsx              # /contact
|   |-- login/
|   |   `-- page.tsx              # /login
|   |-- register/
|   |   `-- page.tsx              # /register
|   |-- purchase/
|   |   `-- page.tsx              # /purchase
|   `-- dashboard/
|       `-- page.tsx              # /dashboard
|
|-- components/                   # Reusable UI components
|   |-- AppShell.tsx              # App shell (AppProvider + Navbar + Footer)
|   |-- Navbar.tsx                # Top navigation (next/link)
|   |-- Footer.tsx                # Site footer (next/link)
|   |-- Logo.tsx                  # Brand logo
|   |-- CourseCard.tsx            # Course listing card
|   |-- LearningModal.tsx         # Course detail modal
|   |-- ToastContainer.tsx        # Toast notifications
|   `-- views/                    # Page-level views (rendered by routes)
|       |-- HomeView.tsx          # Landing page / hero
|       |-- CoursesView.tsx       # Course catalog (filters, search)
|       |-- CourseDetailsView.tsx # Full course details
|       |-- PurchaseView.tsx      # Checkout / purchase flow
|       |-- DashboardView.tsx     # Student dashboard
|       |-- AuthView.tsx          # Login / signup
|       |-- AboutView.tsx        # About the platform
|       `-- ContactView.tsx       # Contact form
|
|-- context/
|   `-- AppContext.tsx            # Global state (auth, cart, courses, routing)
|
|-- data/
|   `-- courses.ts                # Course catalog data (fees INR, modules, instructors)
|
|-- hooks/
|   `-- use-mobile.ts             # Responsive breakpoint hook
|
|-- lib/
|   `-- utils.ts                  # Utility functions (cn helper, etc.)
|
|-- .github/workflows/
|   `-- deploy-cloudflare-pages.yml  # CI: build & deploy on push to main
|
|-- next.config.ts                # Next.js config (static export, images)
|-- package.json                  # Dependencies & scripts
|-- tsconfig.json                 # TypeScript configuration
`-- postcss.config.mjs            # PostCSS / Tailwind config
```

## Features

- **Course Catalog** - Browse courses by category (Web Dev, Programming, App Dev, Cloud, AI) with search and filters
- **Course Details** - Curriculum modules, projects, instructor info, pricing (INR), certificates
- **Student Dashboard** - Enrolled courses, progress tracking
- **Auth Flow** - Login / signup view (client-side demo)
- **Purchase Flow** - Course checkout experience
- **Fully Responsive** - Mobile-first design with adaptive layouts
- **Dark UI Accents** - Modern slate/purple theme with smooth motion animations

## Getting Started

### Prerequisites

- Node.js 18.18+ (recommended: 20)

### Install & Run Locally

```bash
# Clone the repository
git clone https://github.com/erkuldeepkushwah/RWS-Tech.git
cd RWS-Tech

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
# Static site is generated in ./out
```

## Deployment

This project deploys automatically to **Cloudflare Pages** on every push to `main`:

1. GitHub Actions workflow (`.github/workflows/deploy-cloudflare-pages.yml`) runs
2. `npm run build` produces a static export in `out/`
3. Wrangler uploads the `out/` folder to the `rws-tech` Cloudflare Pages project

**Live URL:** [https://rws-tech.pages.dev](https://rws-tech.pages.dev)

### Manual Deploy (optional)

```bash
npm run build
npx wrangler pages deploy ./out --project-name=rws-tech
```

## Author

**Kuldeep Kushwah** - [GitHub](https://github.com/erkuldeepkushwah)

---

(c) 2026 RWS Tech. All rights reserved.
