# RWS Tech â€” Technology & Online Learning Platform

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
| Icons | **Lucide React** | â€” |
| Utility Helpers | clsx + tailwind-merge (shadcn-style) | â€” |
| Hosting | **Cloudflare Pages** | â€” |
| CI/CD | GitHub Actions + Wrangler | â€” |

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

- Navbar & Footer use `next/link` `<Link>` components â€” client-side navigation with **no full page reload**
- Programmatic navigation (buttons inside views) goes through `navigateTo()` in `AppContext`, which calls `router.push()` under the hood

## Project Structure

```
RWS-Tech/
â”œâ”€â”€ app/                          # Next.js App Router (folder-based routing)
â”‚   â”œâ”€â”€ layout.tsx                # Root layout (metadata + AppShell wrapper)
â”‚   â”œâ”€â”€ page.tsx                  # / â€” Home page
â”‚   â”œâ”€â”€ globals.css               # Global styles (Tailwind + custom theme)
â”‚   â”œâ”€â”€ about/
â”‚   â”‚   â””â”€â”€ page.tsx              # /about
â”‚   â”œâ”€â”€ courses/
â”‚   â”‚   â”œâ”€â”€ page.tsx              # /courses â€” course catalog
â”‚   â”‚   â””â”€â”€ [slug]/
â”‚   â”‚       â”œâ”€â”€ page.tsx          # /courses/[slug] â€” details (SSG per course)
â”‚   â”‚       â””â”€â”€ CourseDetailsClient.tsx
â”‚   â”œâ”€â”€ contact/
â”‚   â”‚   â””â”€â”€ page.tsx              # /contact
â”‚   â”œâ”€â”€ login/
â”‚   â”‚   â””â”€â”€ page.tsx              # /login
â”‚   â”œâ”€â”€ register/
â”‚   â”‚   â””â”€â”€ page.tsx              # /register
â”‚   â”œâ”€â”€ purchase/
â”‚   â”‚   â””â”€â”€ page.tsx              # /purchase
â”‚   â””â”€â”€ dashboard/
â”‚       â””â”€â”€ page.tsx              # /dashboard
â”‚
â”œâ”€â”€ components/                   # Reusable UI components
â”‚   â”œâ”€â”€ AppShell.tsx              # App shell (AppProvider + Navbar + Footer)
â”‚   â”œâ”€â”€ Navbar.tsx                 #Ü˜]šYØ][Ûˆ
™^Û[šÊB¸¥ ˆ8¥'8¥ 8¥ ›Ûİ\‹ŞÈÚ]H›Ûİ\ˆ
™^Û[šÊB¸¥ ˆ8¥'8¥ 8¥ ÙÛËŞÈœ˜[™ÙÛÂ¸¥ ˆ8¥'8¥ 8¥ Ûİ\œÙPØ\™ŞÈÛİ\œÙH\İ[™ÈØ\™¸¥ ˆ8¥'8¥ 8¥ X\›š[™Ó[Ù[ŞÈÛİ\œÙH]Z[[Ù[¸¥ ˆ8¥'8¥ 8¥ Ø\İÛÛZ[™\‹ŞÈØ\İ›İYšXØ][ÛœÂ¸¥ ˆ8¥%8¥ 8¥ šY]ÜËÈÈYÙK[]™[šY]ÜÈ
™[™\™YH›İ]\ÊB¸¥ ˆ8¥'8¥ 8¥ ÛYUšY]ËŞÈ[™[™ÈYÙHÈ\›Â¸¥ ˆ8¥'8¥ 8¥ Ûİ\œÙ\ÕšY]ËŞÈÛİ\œÙHØ][ÙÈ
š[\œËÙX\˜Ú
B¸¥ ˆ8¥'8¥ 8¥ Ûİ\œÙQ]Z[ÕšY]ËŞÈ[Ûİ\œÙH]Z[Â¸¥ ˆ8¥'8¥ 8¥ \˜Ú\ÙUšY]ËŞÈÚXÚÛİ]È\˜Ú\ÙH›İÂ¸¥ ˆ8¥'8¥ 8¥ \Ú›Ø\™šY]ËŞÈİY[\Ú›Ø\™¸¥ ˆ8¥'8¥ 8¥ ]]šY]ËŞÈÙÚ[ˆÈÚYÛ\¸¥ ˆ8¥'8¥ 8¥ X›İ]šY]ËŞÈX›İ]H]›Ü›B¸¥ ˆ8¥%8¥ 8¥ ÛÛXİšY]ËŞÈÛÛXİ›Ü›B¸¥ ‚¸¥'8¥ 8¥ ÛÛ^Â¸¥ ˆ8¥%8¥ 8¥ \ÛÛ^ŞÈÛØ˜[İ]H
]]Ø\Ûİ\œÙ\Ë›İ][™ÊB¸¥ ‚¸¥'8¥ 8¥ ]KÂ¸¥ ˆ8¥%8¥ 8¥ Ûİ\œÙ\ËÈÈÛİ\œÙHØ][ÙÈ]H
™Y\ÈS”‹[Ù[\Ë[œİXİÜœÊB¸¥ ‚¸¥'8¥ 8¥ ÛÚÜËÂ¸¥ ˆ8¥%8¥ 8¥ \ÙK[[Øš[KÈÈ™\ÜÛœÚ]™Hœ™XZÜÚ[ÛÚÂ¸¥ ‚¸¥'8¥ 8¥ X‹Â¸¥ ˆ8¥%8¥ 8¥ ][ËÈÈ][]H[˜İ[ÛœÈ
Ûˆ[\‹]ËŠB¸¥ ‚¸¥'8¥ 8¥ ™Ú]X‹İÛÜšÙ›İÜËÂ¸¥ ˆ8¥%8¥ 8¥ \ŞKXÛİY›\™K\YÙ\Ë[[ÈÒNˆZ[	ˆ\ŞHÛˆ\ÚÈXZ[‚¸¥ ‚¸¥'8¥ 8¥ ™^˜ÛÛ™šYËÈÈ™^šœÈÛÛ™šYÈ
İ]XÈ^Ü[XYÙ\ÊB¸¥'8¥ 8¥ XÚØYÙKšœÛÛˆÈ\[™[˜ÚY\È	ˆØÜš\Â¸¥'8¥ 8¥ ØÛÛ™šYËšœÛÛˆÈ\TØÜš\ÛÛ™šYİ\˜][Û‚¸¥%8¥ 8¥ ÜİÜÜË˜ÛÛ™šYË›ZœÈÈÜİÔÔÈÈZ[Ú[™ÛÛ™šYÂ˜‚ˆÈÈ™X]\™\Â‚‹H
ŠÛİ\œÙHØ][ÙÊŠˆ8 %œ›İÜÙHÛİ\œÙ\ÈHØ]YÛÜH
ÙXˆ]‹›ÙÜ˜[[Z[™Ë\]‹ÛİYRJHÚ]ÙX\˜Ú[™š[\œÂ‹H
ŠÛİ\œÙH]Z[ÊŠˆ8 %İ\œšXİ[[H[Ù[\Ë›Ú™XİË[œİXİÜˆ[™›ËšXÚ[™È
S”ŠKÙ\YšXØ]\Â‹H
Š”İY[\Ú›Ø\™
Šˆ8 %[œ›ÛYÛİ\œÙ\Ë›ÙÜ™\ÜÈ˜XÚÚ[™Â‹H
Š]]›İÊŠˆ8 %ÙÚ[ˆÈÚYÛ\šY]È
ÛY[\ÚYH[[ÊB‹H
Š”\˜Ú\ÙH›İÊŠˆ8 %Ûİ\œÙHÚXÚÛİ]^\šY[˜ÙB‹H
Š‘[H™\ÜÛœÚ]™JŠˆ8 %[Øš[KYš\œİ\ÚYÛˆÚ]Y\]™H^[İ]Â‹H
Š‘\šÈRHXØÙ[ÊŠˆ8 %[Ù\›ˆÛ]KÜ\œH[YHÚ]Û[Ûİ[İ[Ûˆ[š[X][ÛœÂ‚ˆÈÈÙ][™Èİ\Y‚ˆÈÈÈ™\™\]Z\Ú]\Â‚‹H›ÙKšœÈNŒN
È
™XÛÛ[Y[™YˆŒ
B‚ˆÈÈÈ[œİ[	ˆ[ˆØØ[B‚˜˜\ÚˆÈÛÛ™HH™\ÜÚ]ÜB™Ú]ÛÛ™HÎ‹ËÙÚ]X‹˜ÛÛKÙ\šİ[Y\İ\ÚØZÔ•ÔËUXÚ™Ú]˜Ù•ÔËUXÚ‚ˆÈ[œİ[\[™[˜ÚY\Â›œH[œİ[‚ˆÈİ\H]ˆÙ\™\‚›œH[ˆ]‚˜‚“Ü[ˆÚ‹ËÛØØ[ÜİŒÌJ‹ËÛØØ[ÜİŒÌ
H[ˆ[İ\ˆœ›İÜÙ\‹‚‚ˆÈÈÈZ[›Üˆ›ÙXİ[Û‚‚˜˜\Ú›œH[ˆZ[ˆÈİ]XÈÚ]H\ÈÙ[™\˜]Y[ˆ‹Ûİ]˜‚ˆÈÈ\Ş[Y[‚•\È›Ú™Xİ\Ş\È]]ÛX]XØ[HÈ
ŠÛİY›\™HYÙ\ÊŠˆÛˆ]™\H\ÚÈXZ[˜‚‚ŒKˆÚ]XˆXİ[ÛœÈÛÜšÙ›İÈ
™Ú]X‹İÛÜšÙ›İÜËÙ\ŞKXÛİY›\™K\YÙ\Ë[[
H[œÂŒ‹ˆœH[ˆZ[›ÙXÙ\ÈHİ]XÈ^Ü[ˆİ]ØŒËˆÜ˜[™Û\ˆ\ØYÈHİ]Ø›Û\ˆÈHÜË]XÚÛİY›\™HYÙ\È›Ú™Xİ‚ŠŠ“]™HT“ŠŠˆÚÎ‹ËÜÜË]XÚœYÙ\Ë™]—JÎ‹ËÜÜË]XÚœYÙ\Ë™]ŠB‚ˆÈÈÈX[X[\ŞH
Ü[Û˜[
B‚˜˜\Ú›œH[ˆZ[›œÜ˜[™Û\ˆYÙ\È\ŞH‹Ûİ]K\›Ú™Xİ[˜[YO\ÜË]XÚ˜‚ˆÈÈ]]Ü‚‚ŠŠ’İ[Y\İ\ÚØZ
Šˆ8 %ÑÚ]X—JÎ‹ËÙÚ]X‹˜ÛÛKÙ\šİ[Y\İ\ÚØZ
B‚‹KKB‚°ªHŒˆ•ÔÈXÚˆ[šYÚÈ™\Ù\™Y‚