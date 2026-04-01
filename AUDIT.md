# Iron & Flow Fitness -- Mobile Template Audit

**Auditor:** Nigel  
**Date:** 2026-03-30  
**Context:** Mobile-first, template-level evaluation  
**Scoring:** STRICT decimal scale (5.0 = average, 6.0 = generic, 7.0 = better than most, 8.0 = client would choose, 9.0 = award-worthy)

---

## Score History

| Dimension | Previous (03/30 v1) | Current (03/30 v2) | Delta |
|-----------|---------------------|---------------------|-------|
| Navigation | 7.3 | 7.6 | +0.3 |
| Hero | 7.4 | 7.8 | +0.4 |
| Classes | 7.1 | 7.5 | +0.4 |
| Trainers | 6.7 | 7.2 | +0.5 |
| Pricing | 7.3 | 7.7 | +0.4 |
| Free Trial Banner | 7.5 | 7.5 | 0.0 |
| Testimonials | 6.5 | 7.0 | +0.5 |
| Contact / Signup | 7.1 | 7.5 | +0.4 |
| FAQ | 7.4 | 7.6 | +0.2 |
| Footer | 6.3 | 6.5 | +0.2 |
| Visual Design | 6.9 | 7.3 | +0.4 |
| Mobile UX | 7.2 | 7.7 | +0.5 |
| Code Quality | 7.2 | 7.5 | +0.3 |
| Content / Copy | 7.5 | 7.6 | +0.1 |
| Requirements Coverage | 7.2 | 7.6 | +0.4 |
| **Overall** | **7.1** | **7.5** | **+0.4** |

---

## Section-by-Section Scores

### 1. Navigation
**Score: 7.6** (prev: 7.3, +0.3)  
The tap-outside-to-close gap flagged in the previous audit is resolved. A dedicated `.nav__backdrop` element is created in JS and toggled with an `active` class, layered at `z-index: 999` behind the slide-in panel. Tapping the backdrop fires `closeNav()`, which also restores body scroll. This is the correct implementation pattern. The scroll shadow now uses a CSS class toggle (`.nav--scrolled`) instead of inline `style.boxShadow`, which is cleaner. All prior strengths remain: glassmorphism bar, burger-to-X animation, `aria-expanded`, `100dvh`, nav CTA pill, body scroll lock. Deductions: the backdrop transition is binary (`display: none` to `display: block`) rather than a fade-in opacity transition, which produces a slightly harsh appearance when the menu opens. The backdrop itself has no `transition` on opacity, so the dark overlay pops rather than easing in. Minor, but noticeable on a site where most other transitions use `0.3s ease`.

### 2. Hero
**Score: 7.8** (prev: 7.4, +0.4)  
The hero background has been significantly upgraded. The multi-layered gradient stack -- a primary radial gradient with 15% orange at upper-right, a secondary at lower-left, a tertiary circle at lower-right, a conic gradient for directional color, and a base linear gradient from `var(--bg)` through `#111` to `#0d0d0d` -- creates genuine depth and visual energy without relying on external images. The `hero__overlay` adds a subtle diagonal line at 40% and faint horizontal scanlines via `repeating-linear-gradient`, giving the section a textured, physical quality. Light-mode overrides are complete for all layers. The tag pill now includes "Philadelphia" for geographic specificity, and the subtitle uses a proper `&mdash;` entity. The animated stat counters with ease-out cubic easing are a polished detail -- numbers counting up on scroll creates a micro-engagement moment. Deductions: even with the improved gradients, this is still fundamentally a text-over-gradient hero, which puts a ceiling on visual impact compared to templates that use photography with dark overlays. The `.hero__texture` div is in the HTML but has no CSS rules applied to it, suggesting an incomplete implementation. The decorative shapes at 8% opacity are largely invisible against the gradient layers now and could be removed or made more intentional.

### 3. Classes
**Score: 7.5** (prev: 7.1, +0.4)  
The SVG icons are now meaningful: a barbell for Strength Lab, a human figure in a pose for Flow Yoga, a clipboard with a plus sign for HIIT Burn, and a leaf/drop with a spine for Mobility Reset. These communicate the class type at a glance, which was the primary criticism in the previous audit. The intensity indicator (1-4 orange bars) is a smart addition -- it gives users an instant read on difficulty without requiring text, and the `data-level` attribute driving `:nth-child` styling is clean implementation. Duration badges ("55 min", "60 min", etc.) in a pill format add scannable metadata. The `scaleX(0)` to `scaleX(1)` orange top-bar animation on scroll is still present and effective. Deductions: the HIIT icon (clipboard with plus sign) still reads more "medical" or "add-to-list" than "high intensity interval training." A lightning bolt, stopwatch, or explosion shape would be more semantically aligned. The Mobility icon (a teardrop/leaf path with a spine) is better than before but still abstract. No "Book Now" CTA on individual cards remains a missed conversion opportunity. The 2-column layout at 600px and 4-column at 900px is correct but the 4-column width at 900px makes cards quite narrow.

### 4. Trainers
**Score: 7.2** (prev: 6.7, +0.5)  
This section received the largest improvement. The CSS cartoon faces are gone, replaced by SVG silhouette avatars with differentiated skin tones, hairstyles, and orange shirts/bodies. Each trainer has a visually distinct avatar (different hair shapes and skin colors for Marcus, Priya, Jake, and Nia). The orange `fill` on the body portion ties to the brand palette. Certification badges in pill format (CSCS, E-RYT 500, ACE, D1 Athlete, NASM-CPT, RYT 200) with the `cert-badge` class add credibility at a glance. The avatars now have a 3px orange border ring around the circle, which frames them intentionally. Deductions: the silhouette avatars are a genuine step up from the cartoon faces but still read as "placeholder" rather than "design choice." A prospective gym member expects to see the actual coaches -- these avatars tell the user "photos go here" rather than selling trust. For a template this is acceptable, but it caps the section's ceiling. The bio text is short and punchy for Jake ("Designs workouts that push limits while keeping you injury-free") but lacks the specificity that Marcus's and Priya's bios have. No CTA to book with a specific trainer.

### 5. Pricing
**Score: 7.7** (prev: 7.3, +0.4)  
The monthly/annual toggle is a strong functional addition. The toggle switch uses `role="switch"` with `aria-checked`, which is the correct ARIA pattern. The knob animates via `translateX(24px)` with a 0.3s ease. When toggled, the orange fill on the switch is clear feedback. Price amounts fade out and back in during the switch (`opacity: 0` then `opacity: 1` after 150ms), which is subtle but prevents a jarring number-swap. The "Save 20%" badge next to "Annual" is a smart nudge. The `data-monthly` and `data-annual` attributes on cards keep the data structure clean. All three tiers now show annual pricing ($39/$71/$119). The 2-column grid at 600px+ with the featured card spanning full width is a reasonable mobile-to-tablet transition. At 900px+ the featured card gets `scale(1.04)`, which restores visual hierarchy in the 3-column layout. Deductions: the price fade animation is implemented via direct `style.opacity` manipulation in JS rather than CSS class toggles, which is inconsistent with the rest of the codebase's approach. The toggle labels don't have tap targets large enough for mobile -- they're text-only with no padding. The period text should update from "/mo" to "/yr" when switching to annual, but it stays as "/mo" regardless. This is a functional bug that makes the annual pricing confusing.

### 6. Free Trial Banner
**Score: 7.5** (prev: 7.5, 0.0)  
No changes detected. The gradient card, copy, and CTA remain effective. This was already the strongest visual moment on the page and still is. The reduced padding section (`padding: 40px 0`) keeps it from competing with adjacent sections' whitespace. At 600px+ it flexes to side-by-side layout. The white CTA button with orange text on the orange gradient pops. No regressions, no improvements needed urgently.

### 7. Testimonials
**Score: 7.0** (prev: 6.5, +0.5)  
The addition of `result-badge` elements is the key improvement. Each testimonial now has a concrete metric: "Deadlift: 0 -> 225 lbs", "Squat form: fixed in 1 session", "3 years strong." These badges use orange-on-orange-glow styling with a subtle 1px border, consistent with the cert-badge pattern. This partially addresses the "Real Results" header promise that previously went unmet. The visual weight of the section is improved by this additional element per card. Deductions: all three testimonials are still 5 stars, which reads as curated. The result badges are text-only -- for a fitness brand, a progress bar, before/after number comparison, or even a simple visual indicator (an upward arrow, a strength gauge) would sell transformation more effectively. The section still lacks any visual transformation proof (photos, progress charts). The layout remains flat -- three stacked cards on mobile with no distinguishing visual treatment between them. At 600px+ it goes to 2-column which leaves the third card orphaned on its own row.

### 8. Contact / Signup Form
**Score: 7.5** (prev: 7.1, +0.4)  
The social proof bar above the form ("Join 500+ members training this week" with three overlapping letter-avatars) is a conversion-boosting addition. The negative margin overlap on `.sp-avatar` creates the standard "avatar stack" pattern. Social media links (Instagram, TikTok, YouTube) with 44x44px circular touch targets are now present in the contact info sidebar, addressing the previously missing social presence. The form reset timeout increased from 4s to 8s, addressing the previous "aggressive reset" criticism. The success message gives users adequate reading time now. Deductions: the social proof bar avatars use inline `style="background:..."` for colors, which is a code quality nit but functionally fine. Phone field still has no input masking or pattern validation. The map placeholder is still just an SVG pin icon -- a static map image or embedded iframe placeholder would be significantly better. The social links go to `#` (expected for a template, but worth noting). No email validation beyond browser default `type="email"`.

### 9. FAQ
**Score: 7.6** (prev: 7.4, +0.2)  
Migrated from native `<details>` elements to a custom JS accordion with `max-height` transition animation. The open/close is now smooth (`max-height: 0` to `max-height: 300px` with `transition: max-height 0.35s ease, padding 0.35s ease`), addressing the previous "content snaps in" criticism. A chevron SVG rotates 180 degrees on open, replacing the +/- text toggle. The `aria-expanded` attribute updates correctly on the button elements. A sixth question ("Do you offer personal training?") rounds out the section, answering a natural objection and tying back to the pricing tiers. The accordion-style mutual exclusion (opening one closes others) is correct for a mobile context where screen real estate is limited. Deductions: `max-height: 300px` is a magic number -- if any answer exceeds that height (e.g., on very narrow screens with larger text), it will clip. Using a larger value like `500px` or calculating dynamically via `scrollHeight` would be more robust. The transition timing on `max-height` with a fixed pixel value means shorter answers animate faster than longer ones, which creates subtle inconsistency. The section background uses `var(--bg-card)` which is the same as the trainers and testimonials sections, creating a visual rhythm of alternating backgrounds, but three consecutive `bg-card` sections (testimonials, contact, faq) could benefit from more differentiation.

### 10. Footer
**Score: 6.5** (prev: 6.3, +0.2)  
A "Contact" link has been added to the footer nav links, joining Classes, Trainers, Pricing, and FAQ. This is a minor but useful addition. All prior criticisms remain: no social media links in the footer (they were added to the contact section instead, which is good but the footer should also have them), no email signup or newsletter CTA, no address/phone repetition for SEO and utility, and the theme toggle is still positioned here rather than in the nav. The footer remains the weakest section on the page. Deductions: the footer still reads as structurally complete but visually and functionally underweight for a fitness studio template. Social links were added to the contact section but not duplicated here. No "final conversion push" element (a mini trial CTA, a tagline with signup link, a class count stat). The `footer__inner` goes to `flex-direction: row` at 900px+ which is good, but at mobile widths the vertical stack is very minimal.

---

## Cross-Cutting Scores

### Visual Design
**Score: 7.3** (prev: 6.9, +0.4)  
The hero gradient upgrade is the biggest visual improvement. The multi-layered radial + conic + linear gradient stack with the scanline overlay creates genuine depth and atmosphere without external assets. The trainer silhouette avatars are a meaningful step up from the cartoon faces -- distinct skin tones, hairstyles, and the brand orange on the body portion show intentional design work. The intensity bars, duration pills, cert badges, and result badges introduce visual variety across cards that was previously missing. The pricing toggle switch is well-styled with proper active state. The sticky mobile CTA with an orange glow shadow is visually strong. Light-mode overrides are comprehensive across all new elements. Deductions: the site is still entirely vector and CSS-based with no photography. While the gradients add warmth, a fitness studio template without a single photo of a person lifting, stretching, or sweating still has a ceiling. The `.hero__texture` div exists in HTML but has no CSS rules, suggesting an abandoned implementation. The trainers section avatars, while improved, still signal "placeholder" rather than finished product.

### Mobile UX
**Score: 7.7** (prev: 7.2, +0.5)  
Three significant UX additions: (1) The sticky mobile CTA (`position: fixed; bottom: 20px; right: 20px`) appears after scrolling past the hero and disappears near the contact section. This addresses the previous audit's note about no floating action button for signup access while scrolling. The show/hide logic uses `offsetTop + offsetHeight` calculations with a `0.5 * innerHeight` buffer, which prevents it from overlapping the actual contact form. It properly hides at 900px+ via `display: none`. (2) The nav backdrop enables tap-outside-to-close, resolving the most significant prior UX gap. (3) The small-mobile breakpoint at 399px and below handles sub-400px screens with tighter padding, smaller text, and full-width hero CTAs. The stats bar gets `flex-wrap: wrap` for screens where three stats don't fit in one row. All touch targets remain at 44px+ minimum. The coarse-pointer card feedback is still present. Deductions: the sticky CTA text "Start Free Trial" duplicates the hero CTA and the nav CTA exactly -- context-aware text (e.g., "Book a Class" when near the classes section) would be more sophisticated but is over-engineering for a template. The backdrop has no opacity transition (it snaps in). The 399px breakpoint uses `max-width` which is a top-down approach inside a mobile-first codebase -- technically functional but philosophically inconsistent.

### Code Quality
**Score: 7.5** (prev: 7.2, +0.3)  
The `prefers-reduced-motion` media query is now present and comprehensive -- it sets `animation-duration: 0.01ms !important`, `transition-duration: 0.01ms !important`, and `scroll-behavior: auto` on all elements, plus explicitly resets `.fade-in`, `.btn--pulse`, and `.sticky-cta`. This was the #3 recommendation in the previous audit and it's implemented correctly. The nav scroll shadow uses class toggle instead of inline style. The IIFE wrapping, `'use strict'`, passive scroll listener, and IntersectionObserver fallback remain solid. The FAQ accordion JS is clean with proper `aria-expanded` management. The pricing toggle uses `role="switch"` with `aria-checked`, which is semantically correct. Deductions: there are duplicate CSS rules for `.class-card__header`, `.class-card__intensity`, `.class-card__duration`, `.cert-badge`, and `.stat__divider` -- these appear once in the main flow (around lines 342-478) and again later (lines 1065-1120). This suggests iterative additions without cleanup. The duplicate rules create maintenance risk and increase file size unnecessarily. The pricing price-fade uses direct `style.opacity` in JS rather than a CSS class. No `<meta name="theme-color">` for mobile browser chrome. No HTML `lang` attribute on elements with non-English content (though there is none currently). The `.hero__texture` div exists in HTML with no corresponding CSS.

### Content / Copy
**Score: 7.6** (prev: 7.5, +0.1)  
The em dash fix in the hero subtitle is minor but correct. The Philadelphia location in the tag pill adds geographic specificity. The sixth FAQ question about personal training ties pricing to services naturally. The result badges on testimonials add concrete specificity. The social proof bar copy ("Join 500+ members training this week") is action-oriented and time-sensitive. The "Save 20%" badge on annual pricing is standard but effective. Trainer cert badges surface credentials in a scannable format. Deductions: pricing period text doesn't update from "/mo" to "/yr" on annual toggle, which is a content accuracy bug. The trainers section subtitle ("Certified. Passionate. They'll remember your deadlift PR.") is strong. Some section subtitles remain generic ("Four disciplines. One studio. Every level welcome."). Overall the copy was already the strongest dimension and this version maintains that with minor additions.

### Requirements Coverage
**Score: 7.6** (prev: 7.2, +0.4)  
P0 items: Hero with CTA (yes), class schedule (partial -- times listed, intensity/duration added, but no full weekly grid), trainers (yes, improved avatars with cert badges), pricing tiers (yes, enhanced with monthly/annual toggle), contact form (yes, enhanced with social proof), location & hours (yes). All P0s present. P1 items: testimonials with transformation results (improved -- result badges now present), free trial CTA (yes, strong, plus sticky mobile CTA), FAQ (yes, six questions with animated accordion), Instagram placeholder (partial -- social links added in contact section but no Instagram feed/grid placeholder section). The Instagram requirement is now partially met via the link but there's still no visual grid placeholder. No P2 items present. The sticky mobile CTA addresses an implicit UX requirement not in the spec but valuable for conversion.

---

## Overall Score: 7.5

This version shows meaningful progress across every dimension. The previous audit's top 5 recommendations were directly addressed: hero gradient depth (#1), trainer avatars (#2), `prefers-reduced-motion` (#3), social links (#4 partial), and tap-outside-to-close (#5). The overall score moves from 7.1 to 7.5, which reflects genuine improvement rather than grade inflation -- the site now confidently clears the "better than most templates" bar and starts approaching "a client could consider this."

What keeps it from 8.0 (client would choose): the absence of photography remains the single largest gap. Every improvement in this version was code-based -- better gradients, better SVGs, better UI patterns -- but a fitness studio template without a single image of a human body in motion still reads as a developer's portfolio piece rather than a product a gym owner would buy. The trainer silhouettes, while much improved, explicitly say "put your photos here" to anyone evaluating the template. The testimonials promise "Real Results" with text badges but no visual proof. The footer remains thin. The pricing toggle has a functional bug (period text doesn't update to "/yr"). The CSS has accumulated duplicate rules from iterative work.

The gap between code quality (7.5) and visual design (7.3) has narrowed. The gap between copy quality (7.6) and everything else is still present but less pronounced. The site is now a genuinely well-built mobile-first template with strong UX patterns. The next leap requires either placeholder photography or a visual strategy that makes the intentional absence of photos feel like a design decision rather than a limitation.

---

## Top 5 Recommendations (Priority Order)

1. **Add placeholder hero imagery or a CSS illustration** -- the gradient upgrade was good but the ceiling for a text-over-gradient hero is reached. A placeholder image with `object-fit: cover` and a dark overlay, or a bold CSS-only illustration (geometric fitness shapes, an abstract figure in motion), would push this past the 8.0 threshold. The hero sets the emotional tone for the entire page.
2. **Fix the pricing period text bug** -- when toggling to annual, the "/mo" text must update to "/yr". This is a functional accuracy issue that undermines the pricing toggle feature. A quick fix in the pricing switch click handler to update `.price-period` text alongside the amount.
3. **Clean up duplicate CSS rules** -- `.class-card__header`, `.class-card__intensity`, `.class-card__duration`, `.cert-badge`, and `.stat__divider` all appear twice in `style.css`. Consolidate to a single declaration each. This is a code hygiene issue that creates maintenance risk and adds ~60 unnecessary lines.
4. **Add social links to the footer** -- Instagram, TikTok, and YouTube links exist in the contact section but not in the footer. Duplicating them there is standard practice and addresses the footer's visual underweight. Consider adding a mini newsletter signup input as well.
5. **Add an Instagram grid placeholder section** -- the P1 requirement for an Instagram feed placeholder is still unmet as a section. A simple grid of 6-8 placeholder boxes with gradient fills, overlaid with an "@ironandflow" CTA and a "Follow Us" button, would satisfy the requirement and add visual density to the page bottom before the footer.
