# Iron & Flow Fitness -- Mobile Template Audit

**Auditor:** Nigel  
**Date:** 2026-03-30  
**Context:** Mobile-first, template-level evaluation  
**Scoring:** STRICT decimal scale (5.0 = average, 6.0 = generic, 7.0 = better than most, 8.0 = client would choose, 9.0 = award-worthy)

---

## Section-by-Section Scores

### 1. Navigation
**Score: 7.2**  
Glassmorphism bar with backdrop blur is a smart mobile choice. Burger menu slides from right with smooth cubic-bezier easing. Logo treatment (IRON & FLOW split-color) is clean and readable at mobile sizes. Links close on tap. Aria-expanded is toggled properly. `100dvh` on the overlay is correct for mobile viewports. The nav CTA pill button is a nice touch. Deduction: no visible close affordance on the open menu beyond the X-burger -- users unfamiliar with this pattern may not realize they can tap outside to close (and in fact, tapping outside does NOT close it -- only link taps or the burger itself close the menu). That is a real usability gap.

### 2. Hero
**Score: 7.4**  
Strong headline hierarchy with the three-line BUILD/FIND/OWN structure. Orange accent on the key words creates good visual rhythm. Stats bar (500+, 40+, 8) adds credibility above the fold. Dual CTA buttons (primary + ghost) give clear primary/secondary actions. The tag pill ("Boutique Fitness Studio") adds context without clutter. Decorative shapes at 8% opacity are subtle enough. Deductions: the double-dash in the subheading ("--") should be an em dash. The hero is text-only with no imagery or visual texture beyond the faint circles -- for a fitness studio, this feels bare on mobile. A background image, gradient overlay, or at least a more energetic visual element would push this higher.

### 3. Classes
**Score: 7.1**  
Four cards in a single-column mobile grid. Each card has a custom SVG icon, title, description, and schedule times. The orange top-bar animation on scroll (scaleX from 0 to 1) is a tasteful detail. Card structure is consistent and scannable. Deductions: the icons, while custom SVGs, are fairly abstract -- the HIIT icon looks like a house, and the Mobility icon reads as a flame/leaf. These do not clearly communicate the class types. Times are displayed as text strings rather than a structured schedule component. No "book now" or "learn more" CTA on individual cards, which is a missed conversion opportunity for mobile users.

### 4. Trainers
**Score: 6.8**  
CSS-only avatars are a creative placeholder solution but they look rudimentary on mobile -- the faces are very simplistic (two dots and a half-circle mouth). This reads as unfinished rather than stylized. The card content (name, role, bio) is well-structured and the role labels in orange create good visual hierarchy. Background color change (bg-card) differentiates this section. Deductions: CSS avatars, while technically interesting, hurt perceived quality. A fitness studio lives on the personality and credibility of its trainers -- these placeholder faces undermine that. The bios are decent but there is no CTA to learn more or book with a specific trainer.

### 5. Pricing
**Score: 7.3**  
Clean three-tier layout (Basic/Pro/Elite) collapsing to single column on mobile with featured card spanning full width at 600px. "Most Popular" badge on Pro is well-positioned. Price typography is bold and clear (large Montserrat numbers in orange). Feature lists with checkmarks are scannable. "No contracts. No hidden fees. Cancel anytime." is strong reassurance copy. Deductions: at mobile widths, three full pricing cards stacked vertically is a lot of scrolling. The featured card does not visually differentiate enough in single-column mode -- the orange border and glow are subtle on small screens. CTAs could be more differentiated (Basic/Elite both say "Get Started" while Pro says "Start Free Trial").

### 6. Testimonials
**Score: 6.6**  
Three testimonial cards with star ratings, quotes, and author attribution. Letter-avatar circles are functional. The quotes are well-written and specific (mentioning deadlift numbers, squat form, etc. -- relevant to the fitness context). Deductions: all three testimonials show 5 stars, which feels less authentic. The layout is generic -- just stacked cards with no visual distinction. No before/after transformation imagery or metrics, which REQUIREMENTS.md specifically calls out ("Testimonials/transformation results"). The section title says "Real Results" but delivers only text quotes. For a fitness site, visual proof is expected and missing.

### 7. Contact / Signup Form
**Score: 7.0**  
Well-structured form with first/last name, email, phone, and interest dropdown. Form-row splits name fields at 600px+. Focus states with orange border and glow ring are polished. Success state ("You're In!") provides immediate feedback. The adjacent contact info block (address, hours, phone/email) is essential and well-organized. Map placeholder with pin SVG is functional. Deductions: the form resets after 4 seconds via setTimeout, which is aggressive -- a user might not have finished reading the confirmation. The form re-binding via `arguments.callee` is fragile and will break in strict mode contexts. Phone field has no input masking or pattern validation. The map placeholder is just an icon -- even a static image would be better.

### 8. Footer
**Score: 6.4**  
Minimal footer with brand, nav links, theme toggle, and copyright. Theme toggle placement in the footer is unusual -- most users expect this in the nav or a settings area. The footer is functionally complete but visually bare. No social media links (Instagram feed was a P1 requirement). No secondary CTAs. No email signup. For a fitness studio, the footer is an underutilized conversion opportunity.

---

## Cross-Cutting Scores

### Visual Design
**Score: 7.0**  
The dark palette with orange accents is cohesive and on-brand. Typography choices (Montserrat headings, Inter body) are solid. The color system is well-implemented via CSS custom properties with proper light-mode overrides. Card designs are consistent. However, the site is entirely text and vector-based -- no photography, no texture, no gradients beyond the faint background shapes. For a fitness brand, this is too sterile. The energy promised by the copy is not matched by the visual treatment.

### Mobile UX
**Score: 7.2**  
Truly mobile-first CSS with breakpoints scaling up. Touch targets are adequate (14px padding on buttons, 44px theme toggle). `100dvh` usage is correct. No hover-dependent interactions. Scroll animations use IntersectionObserver with a reasonable threshold. Passive scroll listener is correct. `overflow-x: hidden` on body prevents horizontal scroll. Deductions: the nav overlay has no tap-outside-to-close. Long pricing section requires extensive scrolling. No sticky CTA or floating action button for quick signup access while scrolling.

### Code Quality
**Score: 7.1**  
Clean, well-organized CSS with logical section comments. BEM-like naming convention is consistent. CSS custom properties for theming are well-done. JS is wrapped in an IIFE with `'use strict'`. IntersectionObserver has a proper fallback. Font loading uses preconnect. Deductions: the form re-bind using `arguments.callee` is a real bug (deprecated, fails in strict mode). The scroll handler directly mutates `nav.style.boxShadow` instead of toggling a class. No minification or build tooling, but acceptable for a template.

### Content / Copy
**Score: 7.5**  
The strongest dimension. Headlines are punchy and on-brand ("Build Strength. Find Flow. Own Your Power."). Trainer bios feel authentic with specific credentials. Pricing copy addresses objections directly. Class descriptions are concise and informative. Testimonials reference specific results. The "where iron meets intention" tagline is memorable. Deductions: the hero subtitle uses "--" instead of an em dash. Some section subtitles are slightly generic ("Four disciplines. One studio. Every level welcome.").

### Requirements Coverage
**Score: 6.9**  
P0 items: Hero with CTA (yes), class schedule (partial -- times listed but no full weekly schedule view), trainers (yes), pricing tiers (yes), contact form (yes), location & hours (yes). P1 items: testimonials (yes, but no transformation visuals), free trial CTA (yes), FAQ (missing), Instagram placeholder (missing). Two P1 requirements are unmet. No P2 items are present, which is acceptable.

---

## Overall Score: 7.0

This is a solid, competent fitness template that gets the fundamentals right. The mobile-first architecture is genuine, the dark theme is well-executed, and the copy punches above its weight. It clears the bar of "better than most templates" in structure and code quality.

What holds it back from an 8.0 (client would choose): the complete absence of imagery makes it feel like a wireframe with nice typography rather than a finished product. The CSS avatars hurt credibility. Two P1 requirements (FAQ, Instagram) are missing. The testimonials section does not deliver on the "transformation results" promise. The footer underperforms. A client comparing this to competitors with hero photography, real trainer headshots, and richer visual storytelling would not choose this version as-is.

---

## Top 5 Recommendations (Priority Order)

1. **Add hero imagery or video background** -- even a CSS gradient overlay on a placeholder would add energy
2. **Replace CSS avatars with real photo placeholders** -- use colored silhouettes or illustrated avatars at minimum
3. **Add FAQ accordion section** -- P1 requirement, high-value for conversion
4. **Fix form re-bind bug** -- `arguments.callee` in strict mode will throw; refactor to named function
5. **Add a sticky mobile CTA** -- floating "Start Free Trial" button visible while scrolling past the hero
