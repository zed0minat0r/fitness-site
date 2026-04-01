# Changelog

## 2026-03-30

### Cleanup: Remove dead CSS/HTML and consolidate duplicate selectors
- Removed ~75 lines of duplicate CSS selectors (stat__divider, btn--pulse, class-card__header, class-card__intensity, class-card__duration, trainer-card__certs, cert-badge)
- Removed dead .hero__texture div from HTML and its CSS (~16 lines) — visual energy already handled by .hero__overlay
- File sizes: style.css 34K (1421 lines), main.js 8.4K (272 lines), index.html 36K (618 lines)

### Builder Pass: Footer overhaul, hero texture, icon fixes
- Footer: full 4-column grid layout (brand/nav/contact/CTA) with social links, address, and conversion CTA
- Footer: theme toggle moved to bottom bar, mobile stacks to single column, 2-col at 600px+, 4-col at 900px+
- Hero: added dotted texture overlay for visual depth and energy beyond flat gradients
- Classes: replaced HIIT icon (was a house shape) with interval timer + plus icon
- Classes: replaced Mobility icon (was a flame) with stretching figure silhouette
- All changes mobile-first, light-mode compatible

### Refiner Pass: Audit Rec #1, #4 + hero enhancement
- Hero: added conic gradient layer and third radial for richer visual depth and warm light sweep (Audit Rec #1)
- Hero: diagonal accent line in overlay for subtle geometric energy
- Instagram: new placeholder section with 6-cell grid and "Follow @ironandflow" CTA (Audit Rec #4, P1 requirement)
- Footer: added social media links (Instagram, TikTok, YouTube) for brand presence
- Footer: added contact info block (address, phone, email) for SEO and user convenience
- Footer: restructured layout with brand/nav/socials columns for better visual weight
- All additions mobile-first, responsive at 600px and 900px breakpoints

### Spark Pass: Mobile-First Section Enhancements
- Hero: "What's your vibe?" quick-pick class type selector with tap-friendly pill tags (Strength, Flow, HIIT, Recovery)
- Classes: "Popular" badge on HIIT Burn card with orange border highlight
- Testimonials: journey duration tags (6-month journey, Day 1 win, 3 years and counting) above each card
- Testimonials: added second result badge to Rachel's card (Full splits)
- Pricing: summary note below grid reinforcing no-contract, cancel-anytime value prop
- Contact: quick-action buttons (Call, Email, Directions) with icons for mobile-first tap access
- FAQ: "Still have questions? Talk to Us" CTA card at bottom of FAQ section
- All new elements mobile-first, no hover dependencies, minimal animations, light mode compatible

### Refiner Pass: Audit Top Fixes (Rec #1, #2, #5 + bonus)
- Hero: multi-layer gradient background with warm radials for visual energy (Audit Rec #1)
- Hero: subtle scanline overlay texture for depth
- Trainers: replaced CSS dot-face avatars with styled SVG silhouettes in circular frames (Audit Rec #2)
- Sticky mobile CTA: floating "Start Free Trial" button, appears after hero, hides near contact (Audit Rec #5)
- Nav: tap-outside-to-close via backdrop overlay (usability gap from audit)
- Nav: scroll shadow uses CSS class toggle instead of inline style mutation
- Form: reset timeout extended from 4s to 8s so users can read confirmation
- Typography: replaced double-dashes (--) with proper em dashes throughout
- Added CSS for new class-card elements (intensity bars, duration badges, cert badges, stat dividers, CTA pulse)

### Enhancement Pass: Mobile-First Polish & Conversion Features
- Animated stat counters in hero with count-up on scroll (IntersectionObserver)
- Hero stats bar redesigned with card background and dividers
- Subtle pulse animation on primary CTA button
- Class cards: added intensity indicator bars (1-4 levels) and duration badges
- Trainer cards: added certification badge pills (CSCS, E-RYT 500, ACE, etc.)
- Pricing: monthly/annual toggle with 20% savings, smooth price transitions
- Testimonial cards: added result badges highlighting member achievements
- FAQ upgraded from native details to custom accordion with chevron animation
- Added 6th FAQ item (personal training)
- Contact section: social proof bar with avatar stack + member count
- Social media links (Instagram, TikTok, YouTube) added to contact info
- Trial banner: responsive row layout at 600px+ breakpoint
- All new features mobile-first, zero hover dependencies

### Task 2 & 3: Visual Polish + Content & Conversion
- Free trial CTA banner with orange gradient between pricing and testimonials
- FAQ accordion section (5 items) with open/close toggle and orange border highlight
- Staggered fade-in animations for card grids (classes, trainers, pricing, testimonials)
- Mobile tap feedback micro-interactions on all cards (scale on touch)
- Active nav section highlighting on scroll
- Hero radial gradient overlay for depth
- FAQ link added to navigation
- TASKS.md updated: Tasks 2 & 3 marked complete

### Task 1: Full Site Build
- Built complete single-page site: index.html, style.css, main.js
- Hero section with bold headline, stats bar (500+ members, 40+ classes/week, 8 coaches), dual CTAs
- Class schedule grid: Strength Lab, Flow Yoga, HIIT Burn, Mobility Reset with days/times
- 4 trainer cards with pure CSS avatar illustrations (Marcus, Priya, Jake, Nia)
- 3-tier pricing: Basic ($49), Pro ($89 featured), Elite ($149) with feature lists
- 3 testimonial cards with star ratings and member attribution
- Contact form with validation, success state, and auto-reset
- Location/hours sidebar (Philadelphia, PA) with map placeholder
- Dark theme default + light mode toggle with localStorage persistence
- Mobile-first responsive: 3 breakpoints (600px, 900px, 1200px)
- Hamburger nav with slide-in overlay for mobile
- Scroll-triggered fade-in animations via Intersection Observer
- Decorative background shapes in hero for visual energy
- Glass-morphism nav bar with backdrop blur

## 2026-04-01

### Initial Setup
- Iron & Flow Fitness — boutique fitness studio
- Dark energetic palette: #1a1a1a, #FF6B35, #F5F5F5
- 3 tasks defined, agent team deploying
