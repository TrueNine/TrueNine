# TrueNine Personal Site Design

## Direction

An editorial-style personal homepage that presents TrueNine as an engineer and accessibility advocate. The site should feel like a compact technical magazine: strong typography, generous whitespace, restrained color, and clear project navigation.

## Visual System

- Warm off-white background, ink-black text, coral-red accent, and fine gray rules.
- Wide editorial grid on desktop; single-column flow on mobile.
- Hero uses a large name/statement lockup on the left and `personal_photo.jpeg` on the right.
- Fixed, compact anchor navigation: Index, Projects, Notes, Support.
- Projects are numbered editorial rows rather than rounded cards, with project name, summary, stack labels, GitHub link, and a color block.
- Motion is limited to viewport entry and hover emphasis, and is disabled for `prefers-reduced-motion`.
- Include skip link, semantic landmarks, visible keyboard focus, and WCAG AA contrast.

## Content Structure

The site is a single `/` route with anchor sections:

1. Hero / Index: identity, short bio, current focus, portrait.
2. Featured Projects: memory-sync, compose-server, compose-client with GitHub links.
3. Principles: accessibility, maintainability, TDD, practical AI, sustainable open source.
4. Toolbox: Backend, Frontend, Desktop, Workflow, and AI tools.
5. Acknowledgments: supporters, open-source communities, and contributors.
6. Support / Connect: Alipay QR code, support message, and GitHub contact path.
7. Footer: signature and back-to-top link.

Project, principle, and toolbox content lives in `web/src/content/site.ts`; presentation components remain data-driven. External links open in a new tab with `rel="noreferrer"`. Metadata includes title, description, theme color, and Open Graph basics. Add `robots.ts` and `sitemap.ts` for discoverability.

## Technical Design

- Latest stable Next.js App Router, React, and TypeScript under `web/`.
- `src/app` structure with server-rendered page and small client component only for viewport motion.
- Native global CSS/CSS Modules; no UI framework or backend dependency.
- Use `next/font` with local/system fallbacks and `next/image` for images.
- Copy existing `personal_photo.jpeg` and `alipay_qrcode.jpg` into `web/public/`.
- Components: `SiteHeader`, `HeroSection`, `ProjectList`, `PrinciplesSection`, `ToolboxSection`, `AcknowledgmentsSection`, `SupportSection`, and `SiteFooter`.
- No database, API, or runtime environment variables.

## Verification and Deployment

- Install and build with Bun; run lint.
- Run the local dev server and inspect desktop/mobile layouts, image loading, anchor navigation, and keyboard focus.
- Deploy from `web/` using the Vercel CLI with `web/` as the project root. Keep credentials out of the repository.
