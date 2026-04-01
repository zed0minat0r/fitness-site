# Iron & Flow Fitness -- Mobile Template Audit

**Auditor:** Nigel  
**Date:** 2026-03-30  
**Context:** Mobile-first, template-level evaluation  
**Scoring:** STRICT decimal scale (5.0 = average, 6.0 = generic, 7.0 = better than most, 8.0 = client would choose, 9.0 = award-worthy)

---

## Section-by-Section Scores

### 1. Navigation
**Score: 7.3**  
Glassmorphism bar with `backdrop-filter: blur(12px)` is a solid mobile pattern. The burger animates to an X with proper cubic-bezier easing, `aria-expanded` toggles correctly, and `100dvh` on the overlay handles iOS viewport quirks. Logo split-color treatment (IRON white, & and FLOW orange) is legible at mobile scale. Nav CTA pill ("Start Free Trial") in the overlay is a good conversion touch. Links close on tap and body scroll locks when the menu is open. Deductions: tapping outside the open overlay does not close it -- only the burger or a link tap dismisses the menu. This is a real usability gap; users expect tap-outside-to-close on slide-in panels. The nav shadow is toggled via inline `style.boxShadow` instead of a CSS class, which is a minor code smell but functionally fine. FAQ link is now present, which is good.

### 2. Hero
**Score: 7.4**  
The three-line BUILD/FIND/OWN structure creates strong visual rhythm with orange accent words. `clamp(2.2rem, 6vw, 4.5rem)` on the h1 scales well across devices. Stats bar (500+, 40+, 8) delivers credibility above the fold without clutter. Dual CTAs (primary fill + ghost outline) give clear primary/secondary hierarchy. The tag pill ("Boutique Fitness Studio") with orange border adds context without competing. Background shapes at 8% opacity are restrained. Deductions: the hero is entirely text-based with no imagery, gradient texture, or visual energy beyond faint circles. For a fitness studio -- where energy, movement, and physicality are the product -- this reads more like a SaaS landing page than a gym. A background image with a dark overlay, even a CSS gradient with more complexity, would significantly elevate this. The subtitle still uses "--" instead of an em dash.

### 3. Classes
**Score: 7.1**  
Four cards in single-column mobile grid, each with a custom SVG icon, title, description, and schedule times. The orange top-bar that scales in via `scaleX(0)` to `scaleX(1)` on scroll visibility is a tasteful animated detail. Card structure is consistent and scannable. The times section is separated by a subtle border-top, which aids readability. Deductions: the SVG icons are too abstract -- the HIIT icon reads as a house (it is literally a house path shape), and the Mobility icon looks like a flame or teardrop, not a stretch or joint. These fail to communicate the class type at a glance, which matters on mobile where scanning speed is everything. No "Book Now" or "Learn More" CTA on individual cards is a missed conversion opportunity. Times are plain text strings rather than a structured or interactive schedule component.

### 4. Trainers
**Score: 6.7**  
CSS-only avatar system is technically creative but visually crude on mobile. The faces are two dots for eyes and a half-circle mouth on a colored circle -- this reads as a placeholder or early prototype, not a design choice. Card content is well-structured: name in bold, role label in orange uppercase, bio in secondary text. The section uses `var(--bg-card)` background to differentiate from adjacent sections. Deductions: a fitness studio's trainers are its biggest trust signal. These CSS cartoon faces actively undermine credibility. A user evaluating this template for real use would immediately flag this section as needing real photography. Even high-quality illustrated avatars or silhouettes with initials (like the testimonial section already does) would be a step up. No CTA to book with a specific trainer or learn more.

### 5. Pricing
**Score: 7.3**  
Three-tier layout (Basic $49 / Pro $89 / Elite $149) stacks cleanly to single column on mobile. "Most Popular" badge on Pro is positioned correctly with `translateX(-50%)`. Price typography is strong -- large Montserrat 900-weight numbers in orange with dollar sign and period in secondary text. Checkmark feature lists are scannable. "No contracts. No hidden fees. Cancel anytime." is effective reassurance copy. The featured card gets an orange border and glow via `box-shadow: 0 0 40px var(--orange-glow)`. Deductions: three full pricing cards stacked vertically at mobile width is a lot of scrolling. The featured card's orange border and glow are subtle on small screens in single-column mode -- the visual hierarchy between tiers is weaker than it should be. CTA differentiation is minimal (two say "Get Started", one says "Start Free Trial").

### 6. Free Trial Banner
**Score: 7.5**  
This is the strongest visual moment on the page. The gradient card (`linear-gradient(135deg, var(--orange) 0%, #e85a28 100%)`) with the large decorative circle at 8% opacity is eye-catching. Copy is sharp and low-friction: "No credit card. No commitment. Just show up." The CTA button inverts to white-on-orange, which pops. At mobile widths it stacks text above button cleanly. At 900px+ it flexes to side-by-side. Deductions: the white CTA text on white button border could have slightly more contrast on some screens. This section carries the conversion weight that the hero's text-only approach misses.

### 7. Testimonials
**Score: 6.5**  
Three cards with star ratings, italic quotes, and author attribution with letter-avatar circles. The quotes are well-written and fitness-specific (deadlift numbers, squat form, gym energy). Stacked single-column on mobile, expanding to 3-col at 900px+. Deductions: all three testimonials are 5 stars, which reads as curated rather than authentic. The layout is visually flat -- stacked cards with no distinguishing element between them. REQUIREMENTS.md calls for "Testimonials/transformation results" and the section title promises "Real Results" but delivers only text quotes. For a fitness studio, before/after photos, weight-lifted milestones, or visual progress indicators are expected. This section underdelivers against what a fitness audience wants to see. The letter-avatar approach is functional but generic.

### 8. Contact / Signup Form
**Score: 7.1**  
Well-structured form with first/last name (split row at 600px+), email, phone, interest dropdown, and submit CTA. Focus states use orange border with a `box-shadow: 0 0 0 3px var(--orange-glow)` ring -- polished detail. The adjacent contact info block (address, hours, phone, email) is essential and well-organized with orange h4 labels. Map placeholder with pin SVG is functional. Success state shows "You're In!" with follow-up messaging. The form re-bind after reset now uses a named function (`handleFormSubmit`), fixing the previous `arguments.callee` strict-mode bug. Deductions: the 4-second setTimeout auto-reset is aggressive -- a user may not have finished reading the confirmation. Phone field has no input masking or pattern validation. The map placeholder is just an icon and text; even a static map image would be significantly better. No email validation beyond `type="email"` browser default.

### 9. FAQ
**Score: 7.4**  
Five well-chosen questions using native `<details>` elements, which is the correct semantic choice and works without JS. Summary elements have proper touch target sizing (`min-height: 48px`). The +/- icon toggles cleanly. Orange border appears on open state. Content answers are concise, informative, and address real objections (fitness level, plan switching, first-class expectations, booking). Max-width 680px keeps line lengths readable. Deductions: no animation on open/close -- the content snaps in rather than sliding, which feels abrupt compared to the smooth animations elsewhere. The `<details>` marker is hidden with `-webkit-details-marker` but there is no Firefox-specific `list-style: none` on summary (though modern Firefox handles this). The questions are good but five is light -- one or two more (parking, class capacity, cancellation policy) would round it out.

### 10. Footer
**Score: 6.3**  
Minimal footer with brand logo, tagline, four nav links, theme toggle, and copyright. Functionally complete but visually underweight. Theme toggle placement in the footer is unconventional -- most users expect this in the nav header or an accessible settings control. Deductions: no social media links despite Instagram feed being a P1 requirement. No secondary CTAs or email signup in the footer. No address or phone repetition, which is useful for SEO and users who scroll to the bottom seeking contact info. The footer is the least polished section on the page and feels like an afterthought. For a fitness studio, the footer is prime real estate for class schedule links, social proof badges, and a final conversion push.

---

## Cross-Cutting Scores

### Visual Design
**Score: 6.9**  
The dark palette with orange accents is cohesive and implemented well through CSS custom properties with proper light-mode overrides. Typography pairing (Montserrat headings, Inter body) is solid and the `clamp()` sizing scales correctly. Card designs are consistent across sections. The trial banner gradient is the one moment of real visual energy. However, the site is entirely text and vector-based -- no photography, no texture, no background imagery beyond faint circles. For a fitness brand that sells energy, movement, and physical transformation, this is too sterile. The CSS avatars actively hurt the visual impression. The site looks like a well-coded wireframe with nice typography, not a finished product a gym owner would screenshot and say "I want this."

### Mobile UX
**Score: 7.2**  
Genuinely mobile-first CSS with breakpoints scaling upward (600, 900, 1200). Touch targets meet the 44px minimum (`min-height: 44px` on nav links, `min-width/height: 44px` on burger and theme toggle, 48px on buttons). `100dvh` is used correctly. No hover-dependent interactions. Scroll animations use IntersectionObserver with `threshold: 0.15` and `rootMargin: '0px 0px -40px 0px'`, which triggers slightly before elements hit center-screen -- good choice. Passive scroll listener is correct. `overflow-x: hidden` prevents horizontal scroll. Card tap feedback via `@media (pointer: coarse)` with `scale(0.985)` is a nice mobile-specific detail. Deductions: nav overlay has no tap-outside-to-close. Long pricing section requires extensive vertical scrolling. No sticky CTA or floating action button for signup access while scrolling past the hero. No pull-to-refresh or swipe interaction patterns, though those would be over-engineering for a template.

### Code Quality
**Score: 7.2**  
Clean, well-organized CSS with logical section comments and a consistent BEM-like naming convention. CSS custom properties for theming are comprehensive and light-mode overrides are complete. JS is wrapped in an IIFE with `'use strict'`. IntersectionObserver has a proper fallback for older browsers. Font loading uses `preconnect`. The form re-bind uses a named function reference now, which is correct. The staggered animation delays via nth-child are a clean implementation. Deductions: nav scroll shadow is still set via inline `style.boxShadow` rather than toggling a CSS class -- minor but worth noting. No build tooling, minification, or asset optimization, which is acceptable for a template but limits production-readiness. No `<meta name="theme-color">` for mobile browser chrome. No `prefers-reduced-motion` media query to disable animations for users who need it -- this is an accessibility gap.

### Content / Copy
**Score: 7.5**  
The strongest dimension on this site. Headlines are punchy and on-brand. "Build Strength. Find Flow. Own Your Power." is a strong opener. Trainer bios feel authentic with specific credentials (CSCS, E-RYT 500, ACE, NASM-CPT + RYT 200). Pricing copy addresses objections head-on. Class descriptions are concise and informative with specific schedule times. Testimonials reference concrete results. FAQ answers are substantive and reassuring. The trial banner copy is low-friction and compelling. "Where iron meets intention" as the studio tagline is memorable. Deductions: the hero subtitle still uses "--" instead of an em dash. Some section subtitles lean generic ("Four disciplines. One studio. Every level welcome."). Testimonials are exclusively text with no quantified transformation data despite the "Real Results" header.

### Requirements Coverage
**Score: 7.2**  
P0 items: Hero with CTA (yes), class schedule (partial -- times listed but no full weekly grid view), trainers (yes, but CSS avatars need replacement), pricing tiers (yes), contact form (yes), location & hours (yes). All P0s are present. P1 items: testimonials (yes, but no transformation visuals), free trial CTA (yes, strong), FAQ (yes, five solid questions), Instagram placeholder (missing). One P1 requirement remains unmet. No P2 items present, which is acceptable at this stage. The FAQ addition since last review closes a significant gap.

---

## Overall Score: 7.1

This is a competent, well-structured fitness template with genuine mobile-first architecture and strong copy. The code is clean, the dark theme is cohesive, and the FAQ and trial banner additions improve conversion readiness since the last review. It clears the "better than most templates" bar on structure, code quality, and content.

What keeps it from 8.0 (client would choose): the complete absence of imagery makes it feel like a wireframe with excellent typography rather than a finished product. The CSS avatars in the trainers section actively hurt credibility -- a fitness studio's coaches are its biggest selling point and two-dot-eye cartoon faces undermine that entirely. The testimonials section promises "Real Results" but delivers only text quotes with no visual proof. The footer underperforms as a conversion tool. A fitness studio owner comparing this to competitor templates with hero photography, real trainer headshots, transformation before/after galleries, and social media integration would not choose this version without significant modification.

The gap between the copy quality (7.5) and the visual design (6.9) is the central tension. The words sell the experience; the visuals do not yet match.

---

## Top 5 Recommendations (Priority Order)

1. **Add hero background imagery or gradient texture** -- a CSS gradient overlay on a placeholder image, a more complex radial gradient, or even a high-energy pattern would inject the visual energy this section needs. The text-only hero is the biggest single gap between "good template" and "client-ready."
2. **Replace CSS avatars with quality placeholders** -- use illustrated vector avatars, colored silhouettes with initials, or placeholder images. The current cartoon faces are the weakest visual element on the entire page and damage the trainers section, which should be a trust-building centerpiece.
3. **Add `prefers-reduced-motion` support** -- wrap all animation/transition declarations in a motion query. This is an accessibility requirement, not a nice-to-have, and it is currently missing entirely.
4. **Add social links to footer and an Instagram placeholder section** -- Instagram feed is a P1 requirement that remains unmet. Even a grid of placeholder image boxes with an "Follow @ironandflow" CTA would check this box and add visual weight to the page bottom.
5. **Implement tap-outside-to-close on the mobile nav overlay** -- add an event listener on a backdrop element or document body (when menu is open) that closes the menu. This is a standard mobile pattern and its absence is a real usability gap that every mobile user will encounter.
