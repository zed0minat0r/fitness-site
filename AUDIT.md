# Iron & Flow Fitness -- Mobile Template Audit

**Auditor:** Nigel  
**Date:** 2026-04-01  
**Context:** Mobile-first (375px), template-level evaluation  
**Scoring:** STRICT decimal scale (5.0 = average, 6.0 = generic, 7.0 = better than most, 8.0 = client would choose, 9.0 = award-worthy)

---

## Score History

| Dimension | v1 (03/30) | v2 (03/30) | v3 (03/30) | v4 (03/30) | Current (v5) | Delta (v4->v5) |
|-----------|-----------|-----------|-----------|-----------|--------------|----------------|
| Navigation | 7.3 | 7.6 | 7.7 | 7.7 | 7.9 | +0.2 |
| Hero | 7.4 | 7.8 | 7.9 | 8.2 | 8.4 | +0.2 |
| Classes | 7.1 | 7.5 | 7.6 | 7.9 | 8.1 | +0.2 |
| Trainers | 6.7 | 7.2 | 7.2 | 7.6 | 8.0 | +0.4 |
| Pricing | 7.3 | 7.7 | 7.5 | 7.9 | 8.1 | +0.2 |
| Free Trial Banner | 7.5 | 7.5 | 7.5 | 7.5 | 7.5 | 0.0 |
| Testimonials | 6.5 | 7.0 | 7.1 | 7.6 | 7.7 | +0.1 |
| Contact / Signup | 7.1 | 7.5 | 7.5 | 7.5 | 7.6 | +0.1 |
| FAQ | 7.4 | 7.6 | 7.6 | 7.6 | 7.6 | 0.0 |
| Instagram | -- | -- | 7.0 | 7.2 | 7.9 | +0.7 |
| Community | -- | -- | -- | 7.4 | 7.4 | 0.0 |
| Footer | 6.3 | 6.5 | 7.2 | 7.5 | 7.6 | +0.1 |
| Visual Design | 6.9 | 7.3 | 7.3 | 7.5 | 7.9 | +0.4 |
| Mobile UX | 7.2 | 7.7 | 7.8 | 8.0 | 8.3 | +0.3 |
| Code Quality | 7.2 | 7.5 | 7.7 | 7.8 | 8.1 | +0.3 |
| Content / Copy | 7.5 | 7.6 | 7.6 | 8.0 | 8.0 | 0.0 |
| Requirements Coverage | 7.2 | 7.6 | 7.9 | 8.2 | 8.5 | +0.3 |
| **Overall** | **7.1** | **7.5** | **7.6** | **7.8** | **8.0** | **+0.2** |

---

## Section-by-Section Scores

### 1. Navigation
**Score: 7.9** (prev: 7.7, +0.2)  
The nav backdrop now uses `opacity: 0/1` with `pointer-events: none/auto` and `transition: opacity 0.3s ease` instead of the binary `display: none/block` toggle. This was flagged in every audit since v1 and is now resolved -- the backdrop fades smoothly when opening and closing the mobile menu. The glassmorphism bar, burger-to-X animation, `aria-expanded`, `100dvh`, body scroll lock, scroll shadow via class toggle, and "Start Free Trial" pill CTA all remain solid. The center-alignment pass ensures the mobile nav menu content is uniformly centered. Deductions: the nav itself was already strong and this was the last known issue. Remaining nit: the nav links in the open menu could benefit from staggered entrance animations (50ms delay per item) to add polish, but this is a refinement, not a gap.

### 2. Hero
**Score: 8.4** (prev: 8.2, +0.2)  
Two infrastructure additions. First, `<div class="hero__image" aria-hidden="true">` is now in the DOM behind the gradient overlay, with `background-size: cover`, `background-position: center`, and a CSS comment showing exactly how to add a hero photo (`background-image: url('images/hero.jpg')`). The dark overlay auto-adapts to light/dark themes via `::after`. This is pure infrastructure -- zero visual change today, but it signals "template ready for photography" and is a one-line swap to activate. Second, the center-alignment pass ensures hero content, subtitle, CTAs, vibe tags, and stats are all uniformly centered on mobile with `text-align: center`, `justify-content: center`, and `margin: auto`. The headline, subtitle, stat counters, and dual CTAs all center cleanly at 375px. The decorative background shapes at 8% opacity remain (still invisible in practice, still adding DOM weight). Deductions: with the photo infrastructure in place but no actual photo, the hero remains visually gradient-only. The vibe tags still link to `#classes` without filtering.

### 3. Classes
**Score: 8.1** (prev: 7.9, +0.2)  
The HIIT icon has been replaced with a lightning bolt SVG (`M26 4L10 28h14l-2 16 16-24H24l2-16z`), addressing the ambiguous clipboard icon flagged in three consecutive audits. The lightning bolt is instantly recognizable as "high intensity" and matches the HIIT vibe tag icon in the hero. The center-alignment pass adds `text-align: center` and `align-items: center` to `.class-card` and `.class-card__header`, making cards read cleanly as centered units on 375px. The `flex-direction: column` on `.class-card__header` stacks the icon above the intensity bar on mobile, which is the correct vertical reading order. "Book Class" CTAs remain on every card with correct conversion hierarchy (ghost for standard, primary for HIIT). Deductions: horizontal scroll still has no swipe indicators or dots. The 4-column layout at 900px still makes cards narrow. Schedule text wrapping at narrow widths persists.

### 4. Trainers
**Score: 8.0** (prev: 7.6, +0.4)  
Three targeted fixes from the v4 audit. First, Marcus's cert badge changed from "12 yrs" (not a certification) to "USAW-L1" (USA Weightlifting Level 1) -- the badge system now exclusively contains actual credentials. Second, Priya's role changed from "Yoga & Mobility" (duplicating her specialty tag) to "Flexibility & Recovery," eliminating the redundancy. Third, Jake's role changed from "HIIT & Conditioning" (duplicating his specialty tag) to "Explosive Performance." Each trainer now has a distinct specialty tag and a distinct role, with no overlap. The avatar `<img>` CSS infrastructure is in place (`position: absolute; object-fit: cover; z-index: 1` above the SVG fallback), and a HTML comment shows the pattern for adding photos. The center-alignment pass centers trainer cards on mobile. Deductions: avatars remain SVG silhouettes -- the img infrastructure is ready but unused. No visual differentiation between the four trainer cards beyond the SVG body colors. The specialty tags and roles, while now distinct, still create two lines of categorization text that could be consolidated.

### 5. Pricing
**Score: 8.1** (prev: 7.9, +0.2)  
The price fade now uses a CSS class toggle (`price-amount--fading` with `opacity: 0` and CSS `transition`) instead of inline `style.opacity`, making it consistent with the rest of the codebase's class-based animation approach. This was the last remaining inline-style animation. The toggle labels now have `padding: 8px 4px`, addressing the mobile tap target concern (previously text-only with no padding). The center-alignment pass centers pricing features and card content on mobile. The period text fix, guarantee micro-copy, toggle mechanics (`role="switch"`, `aria-checked`), and "Save 20%" badge all remain from v4. Deductions: the featured Pro card at 600px still uses `grid-column: 1 / -1; max-width: 400px` which breaks visual grid alignment. The pricing note below the grid could be more visually distinct from the card content above it.

### 6. Free Trial Banner
**Score: 7.5** (prev: 7.5, 0.0)  
No changes. The gradient card with white CTA on orange remains the strongest single visual moment on the page. No regression, no improvement needed urgently.

### 7. Testimonials
**Score: 7.7** (prev: 7.6, +0.1)  
The center-alignment pass centers testimonial card content on mobile, improving readability of the quote text, star ratings, and progress bars at 375px. The progress bars, varied star ratings, and carousel dots from v4 remain. Deductions: progress bar fills are still inline styles rather than scroll-triggered animations. "Squat Form: Fixed" at 100% on a percentage bar remains conceptually odd. The orphaned third card at 600px 2-column grid persists. The 0.1 gain reflects the alignment polish only; no structural changes.

### 8. Contact / Signup Form
**Score: 7.6** (prev: 7.5, +0.1)  
The newsletter form now has a JS handler (`handleNewsletterSubmit`) with `preventDefault`, a success message (`form-success--sm`), and a 5-second reset timeout that restores the original form and re-attaches the event listener. This closes the functional gap flagged in v4. The center-alignment pass centers contact info and quick-action buttons on mobile. Deductions: phone field still has no input masking. Map is still an SVG pin placeholder. Social links still go to `#`. Email validation remains browser-default only. The newsletter success state uses `form-success--sm` which is defined in CSS, but the styling is minimal (just orange text).

### 9. FAQ
**Score: 7.6** (prev: 7.6, 0.0)  
The center-alignment pass centers FAQ answer text on mobile, but the accordion structure is unchanged. The `max-height: 300px` magic number persists. No regression, no improvement.

### 10. Instagram
**Score: 7.9** (prev: 7.2, +0.7)  
The largest single-section improvement this version, driven by two major additions that directly implement audit recommendations #1. First, the `insta-placeholder--1` through `--6` modifier classes now have unique gradient backgrounds -- each cell has a distinct angle and color mix (warm orange, purple-tinted, blue-cool, golden). Dark and light theme variants are both defined. The six cells are now visually distinguishable at a glance, creating a varied grid that hints at the diversity of an actual Instagram feed. Second, Spark added a shimmer micro-interaction: a diagonal light sweep (`@keyframes insta-shimmer`) cascading across cells with staggered delays (0s to 3s), simulating a loading feed. The shimmer uses `::after` pseudo-elements with `pointer-events: none` so it does not interfere with taps. The light theme gets a brighter shimmer pass. `prefers-reduced-motion` is covered by the existing wildcard rule. The tap feedback (`:active` scaling to 0.97 with border-color change and label opacity pop to 1) adds tactile responsiveness. Deductions: the shimmer runs infinitely, which is appropriate for a "loading placeholder" metaphor but means the animation never settles. The cells still link to `#` (no Instagram URL). The labels remain small at `0.75rem` -- they are more visible now against the gradient backgrounds but still require close reading on mobile.

### 11. Community
**Score: 7.4** (prev: 7.4, 0.0)  
No changes. The inclusivity statement, value pills, and card format remain as evaluated in v4. Still text-only with no visual element. The center-alignment pass may have affected this section but the card was already centered.

### 12. Footer
**Score: 7.6** (prev: 7.5, +0.1)  
The newsletter form now functions (JS handler added, success state, reset). The `form-success--sm` class has dedicated CSS styling. The center-alignment pass centers footer content on mobile. Deductions: footer nav links still use `min-height: 44px` creating excessive vertical spacing in mobile stack. Newsletter success feedback is minimal. The "Get Class Updates" heading still blends with other footer headings.

---

## Cross-Cutting Scores

### Visual Design
**Score: 7.9** (prev: 7.5, +0.4)  
The Instagram section transformation is the biggest visual upgrade. Six cells that were identical dark rectangles are now a varied gradient grid with cascading shimmer -- this is the first section that feels genuinely alive and animated in a purposeful way. The HIIT lightning bolt icon is immediately parseable and adds visual energy to the class grid. The center-alignment pass creates a consistent visual rhythm on mobile: every section reads as a centered column, which is the correct pattern for 375px. The hero photo and trainer avatar infrastructure are invisible today but represent the correct architectural investment. Deductions: still no photography. The community section remains text-only. Three consecutive dark-background sections still create potential monotony. The Instagram shimmer, while visually appealing, is the only animated element on the page (besides scroll-triggered fade-ins), making it feel slightly disconnected from the rest of the visual language.

### Mobile UX
**Score: 8.3** (prev: 8.0, +0.3)  
The center-alignment pass is the single biggest mobile UX improvement. Pixel audited every section at 375px and added uniform center alignment for hero content, class cards, testimonials, pricing features, contact info, FAQ answers, and footer -- all reverting to left-aligned at 600px+ via media query. This is the correct responsive pattern and it eliminates the ragged left-aligned look that several sections had on narrow screens. The nav backdrop opacity transition adds smooth open/close behavior. The Instagram tap feedback (scale + border + label pop) is a proper mobile interaction pattern. Toggle label padding of `8px 4px` provides adequate tap targets. Deductions: vibe tags still do not filter. Instagram cells still link to `#`. No pull-to-refresh or any progressive-web-app considerations. The horizontal class card scroll still lacks swipe indicators.

### Code Quality
**Score: 8.1** (prev: 7.8, +0.3)  
Multiple quality improvements converge. The price fade is now CSS-class-based (`price-amount--fading`) instead of inline `style.opacity` -- this was the last inline-style animation and its removal makes the animation approach fully consistent. The nav backdrop uses `opacity/pointer-events/transition` instead of `display: none/block` -- the correct modern pattern. The Instagram modifier classes (`--1` through `--6`) now have corresponding CSS rules, eliminating the dead-markup flag. The newsletter form has a complete JS handler with success state, timeout reset, and re-attachment. The shimmer animation uses `::after` pseudo-elements with `pointer-events: none`, keeping interaction clean. The center-alignment CSS is well-organized in a dedicated block before the 600px breakpoint, with comments explaining the pattern. `prefers-reduced-motion` covers all new animations via the existing wildcard rule. Deductions: the center-alignment block adds 140 lines of CSS -- some of these could be consolidated using shared selectors. The shimmer animation runs infinitely with no `animation-play-state` control. The `hero__image` div is empty in the DOM with no visual output, which is technically dead HTML until a photo is added. The trainer photo comment pattern (`<!-- To add a photo: ... -->`) is only on Marcus's card, not all four.

### Content / Copy
**Score: 8.0** (prev: 8.0, 0.0)  
No copy changes this version. The v4 headline, bios, guarantee copy, and community statement remain. The trainer role deduplication (Priya: "Flexibility & Recovery" instead of duplicate "Yoga & Mobility"; Jake: "Explosive Performance" instead of duplicate "HIIT & Conditioning") is a micro-copy quality fix. Marcus's "USAW-L1" credential is more informative than "12 yrs." These are correctness fixes rather than creative upgrades, so the score holds at 8.0.

### Requirements Coverage
**Score: 8.5** (prev: 8.2, +0.3)  
Every v4 audit recommendation has been addressed. Rec #1 (Instagram gradients): implemented with six unique gradients plus shimmer. Rec #2 (newsletter JS handler): implemented with success state and reset. Rec #3 (nav backdrop fade): implemented with opacity transition. Rec #4 (hero photo + trainer avatar infrastructure): implemented with CSS and HTML. Rec #5 (HIIT lightning bolt icon): implemented. This is a clean sweep of all five recommendations, which has not happened in any previous audit cycle. All P0 and P1 items are functional with no known bugs. The newsletter form, which was the last functional gap, now works. The only remaining coverage gaps are P2 items (booking integration, real photography, blog) which are correctly out of scope for a template.

---

## Overall Score: 8.0

This version crosses the 8.0 threshold, up from 7.8. The gain is driven by three categories:

**Audit recommendation sweep** (biggest impact): All five v4 recommendations were implemented. This is the first version where every flagged item was addressed, and it shows -- the Instagram section jumped +0.7, the largest single-section gain in audit history. The nav backdrop, pricing fade, HIIT icon, newsletter handler, and photo infrastructure collectively close every known gap from v4.

**Center-alignment pass** (second biggest): Pixel's 140-line CSS addition creates a consistent mobile reading experience at 375px. Every section now reads as a centered column, which is the correct pattern for narrow viewports. This is a subtle but pervasive improvement that touches every section score by +0.1 to +0.2.

**Code consistency** (third): The shift from inline `style.opacity` to CSS classes, the nav backdrop opacity pattern, and the complete newsletter handler represent a codebase that now follows consistent patterns throughout. No dead markup, no incomplete handlers, no inline-style animations.

What keeps it from 8.5: the fundamental photography ceiling remains. The hero photo and trainer avatar infrastructure are ready but empty -- until real images are dropped in, the site reads as "well-built template" rather than "finished product." The Instagram shimmer is visually alive but the cells still link nowhere. The community section remains text-only. The horizontal class scroll lacks swipe indicators. These are all solvable, but they represent the gap between 8.0 (client would choose this template) and 8.5+ (client would deploy this with minimal changes).

The site now occupies a confident 8.0. Six of seventeen dimensions are at or above 8.0. Mobile UX leads at 8.3. The next push toward 8.5 requires visual content -- real or convincing placeholder photography -- which is the single remaining ceiling.

---

## Top 3 Recommendations (Priority Order)

1. **Add placeholder hero photography with overlay** -- the `hero__image` infrastructure is built and ready. Source or generate a dark, moody gym photo (person mid-deadlift or in a yoga flow) and set it as `background-image`. The dark overlay `::after` is already in place and theme-adaptive. This is the single highest-impact visual change remaining -- it transforms the hero from "CSS gradient template" to "this looks like a real gym site." Similarly, add trainer headshots (or high-quality stock portraits) using the `<img>` pattern already documented in Marcus's card. Photography is the ceiling and the infrastructure is waiting.

2. **Add swipe indicators to horizontal scroll sections** -- the class cards horizontal scroll on mobile has no visual signal that more cards exist offscreen. Add a subtle gradient fade on the right edge (CSS `mask-image: linear-gradient(to right, black 85%, transparent)`) or small dot indicators matching the testimonial carousel pattern. This is a mobile UX convention that users expect, and its absence is the biggest remaining mobile UX gap.

3. **Add a subtle entrance animation to community section** -- the community card is the only section that is purely static text with no visual element, no icon, no illustration, and no animation. Add a simple SVG icon (hands, circle of people, or a unity symbol) above the heading, and give the value pills a staggered entrance animation on scroll (50ms delay per pill via `transition-delay`). This would bring the section's visual weight in line with the rest of the page without adding complexity.
