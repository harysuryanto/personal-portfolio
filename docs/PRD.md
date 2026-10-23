# Product Requirements Document (PRD)
## Personal Engineering Portfolio (Single-Page)

- **Owner**: Hary Suryanto ([@harysuryanto](https://github.com/harysuryanto))
- **Primary Identity**: Mobile Engineer (Flutter, Swift / iOS, React Native / Android, Systems)
- **Flagship Project**: **Papyrus Photobox** (Cross-platform desktop & mobile, camera hardware integration, offline-first architecture)
- **Target Audience**: Engineering leads, technical recruiters, founders, collaborators
- **Architecture**: Single-Page Application (SPA experience) powered by Astro 7 SSG + Tailwind CSS v4
- **Deployment**: GitHub Pages via GitHub Actions CI/CD

---

## 1. Product Overview & Strategic Goals

### 1.1 Objective
Build a high-performance, single-page personal portfolio that showcases real-world mobile engineering depth, hardware/camera integrations, and production architecture. The site must communicate technical credibility in under 15 seconds.

### 1.2 Core Success Metrics
- **Instant Positioning**: Clear mobile engineer identity and flagship highlight immediately visible above the fold.
- **Deep Technical Showcase**: Visitors can inspect full architectural case studies (problem, architecture, key challenges, metrics) without leaving the page via a lightweight slide-over drawer.
- **Lighthouse Performance**: 100/100 score on Performance, Accessibility, Best Practices, and SEO.
- **Zero Runtime Bloat**: Zero heavy client framework runtime (no multi-megabyte React/Vue bundles); interactive drawer built with native lightweight JavaScript / Astro island.
- **Automated Deployment**: GitHub Actions workflow that automatically validates, builds, and deploys to GitHub Pages upon push to `main`.

---

## 2. User Experience & Information Architecture

The application is structured as a continuous single-page layout with smooth anchor scrolling and an overlay drawer for technical deep dives.

```
┌────────────────────────────────────────────────────────┐
│ Sticky Navigation Header (Logo, #work, #skills, #exp, #contact) │
├────────────────────────────────────────────────────────┤
│ 1. Hero Section                                        │
│    - Identity: Mobile Engineer                         │
│    - Tagline & Core Specialization                     │
│    - Status Badge ("Open to Mobile / Systems Roles")   │
│    - Quick CTAs: [View Projects] [Resume] [Contact]    │
├────────────────────────────────────────────────────────┤
│ 2. Featured Projects & Case Studies                    │
│    - Flagship Feature: Papyrus Photobox                │
│      (Interactive Card, Tech Badges, Metrics, [Case Study Button])
│    - Secondary Grid:                                   │
│      • Cash (React Native / Expo / Clean Architecture) │
│      • BRB (macOS Native Swift Proximity Security)     │
├────────────────────────────────────────────────────────┤
│ 3. Technical Arsenal & Architecture Matrix             │
│    - Mobile Core (Flutter, Swift, React Native, Kotlin)│
│    - Architecture (Clean Architecture, MVVM, Offline)  │
│    - Hardware & Systems (Camera APIs, Platform Bridges)│
│    - Tooling & DevOps (Fastlane, CI/CD, Stores)        │
├────────────────────────────────────────────────────────┤
│ 4. Experience & Shipped Milestones                     │
│    - Reverse-chronological timeline of roles & products│
├────────────────────────────────────────────────────────┤
│ 5. Contact & Footer                                    │
│    - Email (with 1-click copy toast & direct link)     │
│    - GitHub, LinkedIn, Resume Download                 │
└────────────────────────────────────────────────────────┘
```

---

## 3. Detailed Component & Section Specifications

### 3.1 Header / Navbar
- **Positioning**: Sticky top with backdrop blur (`backdrop-blur-md bg-neutral-900/80` or dynamic theme).
- **Elements**:
  - Left: Logo / Brand initials (`HS` or `hary.dev`).
  - Center/Right: Anchor navigation links (`#work`, `#skills`, `#experience`, `#contact`).
  - Action: Resume button or direct "Get in touch" CTA button.
  - Mobile: Clean hamburger menu or compact horizontal pill.

### 3.2 Hero Section
- **Headline**: High-impact statement establishing seniority and discipline.
  - *Example*: *"Mobile Engineer building high-performance client applications, native hardware bridges, and fluid user experiences."*
- **Sub-headline**: Concise summary of technology breadth (Flutter, Swift, React Native, Clean Architecture).
- **Status Indicator**: Subtle glowing badge (e.g., green dot + *"Shipping apps & open to new opportunities"*).
- **Action Group**:
  - Primary button: Anchor to `#work` ("Explore Work").
  - Secondary button: Resume view/download.
  - Social quick links: GitHub, LinkedIn, Email icons.

### 3.3 Projects Section & Flagship Showcase
- **Flagship Card: Papyrus Photobox**:
  - Full-width hero card featuring:
    - Badges: `Flutter`, `macOS / Desktop`, `iOS / Android`, `Hardware Integration`, `Camera Bridge`.
    - Key Highlights: Cross-platform reliability, low-latency live camera feed, offline-first transaction/session sync, kiosk printing pipeline.
    - Prominent action: **"Read Architectural Case Study →"** (triggers the drawer).
- **Companion Project Cards**:
  - **Cash**: Personal wealth and cash flow tracker built with React Native / Expo, Clean Architecture, and PocketBase. Focus: Offline persistence, domain separation, robust testing.
  - **BRB**: macOS menu bar utility written in native Swift / SwiftUI using Bluetooth proximity RSSI tracking for auto-locking and tamper security.
- **Card Content**: Title, brief problem/solution overview, key technical tags, direct repository/demo links (if public), and Case Study trigger.

### 3.4 Interactive Case Study Drawer (Deep-Dive Modal)
- **Behavior**:
  - Slides in smoothly from the right side of the screen on desktop (or slides up from bottom on mobile).
  - Background overlay with dimming and blur.
  - Keyboard accessible: closes on `Esc` key press, traps focus when open, returns focus to triggering button upon close.
  - URL hash support: optionally updates hash (e.g. `#project-papyrus`) so deep links can open the drawer directly.
- **Drawer Structure**:
  1. **Header**: Project Title, Platform badges, Close button (`×` / `Esc`).
  2. **The Problem / Context**: Why the app was built, target operational environment (e.g. self-service photo kiosks, commercial booth events).
  3. **Technical Architecture**: Diagram or structured list of modules (Presentation / Domain / Data / Native Hardware Driver).
  4. **Key Technical Challenges & Solutions**:
     - *Challenge 1*: Direct camera hardware control, frame rate optimization, zero-drop capture.
     - *Challenge 2*: Offline reliability, print queue synchronization, fault-tolerant state recovery.
  5. **Tech Stack & Libraries**: Comprehensive breakdown of libraries and tools used.
  6. **Results & Metrics**: Stability, latency, throughput, or deployment footprint.

### 3.5 Technical Arsenal & Architecture Matrix
- Categorized into clear engineering domains (avoiding meaningless percentage bars):
  - **Mobile Client**: Flutter & Dart, Swift & SwiftUI, React Native & TypeScript, Kotlin / Jetpack Compose.
  - **Architecture & Paradigms**: Clean Architecture, MVVM / Riverpod, Offline-first caching (Drift, SQLite), Native Platform Channels / JSI.
  - **Hardware & Native**: External Camera SDKs, Bluetooth Low Energy (BLE), USB/Serial Kiosk hardware, CoreBluetooth.
  - **DevOps & Tooling**: Fastlane, GitHub Actions, App Store Connect, Google Play Console, Postman, Git.

### 3.6 Experience & Shipped Milestones
- Chronological timeline displaying:
  - Role Title, Organization / Client / Product name, Timeframe.
  - 2–3 bullet points highlighting technical decisions, scale, and shipped outcomes (e.g., reduced crash rate, automated build pipeline, hardware integration).

### 3.7 Contact & Footer
- **Direct Mailto**: One-click email button with a companion **"Copy Email"** button that shows a brief toast confirmation ("Copied to clipboard!").
- **External Links**: GitHub (`github.com/harysuryanto`), LinkedIn, Resume link.
- **Copyright & Tech Stamp**: "Built with Astro & Tailwind CSS v4. Deployed to GitHub Pages."

---

## 4. Technical Specifications & Architecture

### 4.1 Tech Stack
- **Framework**: Astro 7 (`astro`) in static site generation (SSG) mode.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) via `@import "tailwindcss";` in `src/styles/global.css`.
- **Package Manager**: `bun`.
- **Language**: TypeScript (`strict: true`).
- **Icons**: Clean SVG icon system (Lucide-style or accessible inline SVGs).

### 4.2 Data Layer Architecture
All project data, skills, and experience items are typed and centralized in TypeScript files inside `src/data/`:
```
src/
├── data/
│   ├── siteConfig.ts       # Name, bio, social links, SEO defaults
│   ├── projects.ts         # Project metadata, metrics, and case study content
│   ├── skills.ts           # Categorized technical skills & tools
│   └── experience.ts       # Work history and milestone items
├── components/
│   ├── Header.astro        # Sticky navigation
│   ├── Hero.astro          # Hero section
│   ├── ProjectCard.astro   # Card representation
│   ├── CaseStudyDrawer.astro # Slide-over modal with vanilla JS controller
│   ├── SkillsMatrix.astro  # Categorized skills
│   ├── Experience.astro    # Timeline
│   ├── Contact.astro       # CTA & email copy
│   └── Footer.astro        # Footer metadata
├── layouts/
│   └── BaseLayout.astro    # HTML head, meta, fonts, analytics, theme
└── pages/
    └── index.astro         # Single-page assembly
```

### 4.3 Case Study Drawer Implementation
- Pure Vanilla JavaScript embedded in the Astro component:
  - Accessible via ARIA attributes: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.
  - Event listeners for `Escape` key, backdrop click, and close button.
  - Body scroll lock (`overflow: hidden` on `document.body` when open) to prevent dual-scrolling.

---

## 5. Deployment & CI/CD Pipeline

### 5.1 GitHub Pages Configuration
- **Repository**: `harysuryanto/personal-portfolio`
- **Astro Config (`astro.config.mjs`)**:
  ```javascript
  export default defineConfig({
    site: 'https://harysuryanto.github.io',
    base: '/personal-portfolio',
    vite: {
      plugins: [tailwindcss()]
    }
  });
  ```
  *(Note: If a custom domain like `harysuryanto.com` or `hary.dev` is added later, `base` will be changed to `/`).*

### 5.2 GitHub Actions Workflow (`.github/workflows/deploy.yml`)
1. Trigger on `push` to `main` branch.
2. Setup Bun (`oven-sh/setup-bun@v2`).
3. Setup Node.js 22.x for Astro dependencies.
4. Install dependencies: `bun install --frozen-lockfile`.
5. Run build: `bun run build`.
6. Deploy to GitHub Pages via official `actions/deploy-pages@v4`.

---

## 6. Execution Roadmap & Milestones

| Phase | Description | Key Deliverables |
| :--- | :--- | :--- |
| **Phase 1** | PRD & Specifications (Current) | `PRD.md` approved. |
| **Phase 2** | Theme & Shell Foundation | `BaseLayout.astro`, Tailwind v4 dark-first theme tokens, typography, Header, Footer. |
| **Phase 3** | UI Components & Drawer Engine | `Hero.astro`, `ProjectCard.astro`, `CaseStudyDrawer.astro`, `SkillsMatrix.astro`, `Experience.astro`. |
| **Phase 4** | Content & Case Study Authoring | Rich case study data for **Papyrus Photobox**, **Cash**, and **BRB**. |
| **Phase 5** | Polish, SEO, CI/CD & Deploy | Meta tags, OpenGraph cards, `.github/workflows/deploy.yml`, verification build. |
