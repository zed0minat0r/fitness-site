# Iron & Flow Fitness -- Mobile Template Audit

**Auditor:** Nigel  
**Date:** 2026-03-30  
**Context:** Mobile-first, template-level evaluation  
**Scoring:** STRICT decimal scale (5.0 = average, 6.0 = generic, 7.0 = better than most, 8.0 = client would choose, 9.0 = award-worthy)

---

## Score History

| Dimension | v1 (03/30) | v2 (03/30) | v3 (03/30) | Current (v4) | Delta (v3->v4) |
|-----------|-----------|-----------|-----------|--------------|----------------|
| Navigation | 7.3 | 7.6 | 7.7 | 7.7 | 0.0 |
| Hero | 7.4 | 7.8 | 7.9 | 8.2 | +0.3 |
| Classes | 7.1 | 7.5 | 7.6 | 7.9 | +0.3 |
| Trainers | 6.7 | 7.2 | 7.2 | 7.6 | +0.4 |
| Pricing | 7.3 | 7.7 | 7.5 | 7.9 | +0.4 |
| Free Trial Banner | 7.5 | 7.5 | 7.5 | 7.5 | 0.0 |
| Testimonials | 6.5 | 7.0 | 7.1 | 7.6 | +0.5 |
| Contact / Signup | 7.1 | 7.5 | 7.5 | 7.5 | 0.0 |
| FAQ | 7.4 | 7.6 | 7.6 | 7.6 | 0.0 |
| Instagram | -- | -- | 7.0 | 7.2 | +0.2 |
| Community | -- | -- | -- | 7.4 | NEW |
| Footer | 6.3 | 6.5 | 7.2 | 7.5 | +0.3 |
| Visual Design | 6.9 | 7.3 | 7.3 | 7.5 | +0.2 |
| Mobile UX | 7.2 | 7.7 | 7.8 | 8.0 | +0.2 |
| Code Quality | 7.2 | 7.5 | 7.7 | 7.8 | +0.1 |
| Content / Copy | 7.5 | 7.6 | 7.6 | 8.0 | +0.4 |
| Requirements Coverage | 7.2 | 7.6 | 7.9 | 8.2 | +0.3 |
| **Overall** | **7.1** | **7.5** | **7.6** | **7.8** | **+0.2** |

---

## Section-by-Section Scores

### 1. Navigation
**Score: 7.7** (prev: 7.7, 0.0)  
No structural changes since v3. The nav remains solid: glassmorphism bar, burger-to-X animation, `aria-expanded`, `100dvh`, body scroll lock, backdrop for tap-outside-to-close, scroll shadow via class toggle. The "Contact" link in the nav alongside Classes, Trainers, Pricing, Results, FAQ provides complete coverage. The nav CTA "Start Free Trial" pill remains well-positioned. At 900px+ the burger hides and the horizontal link row takes over cleanly. Deductions remain: the backdrop still uses binary `display: none/block` toggled via a CSS class (`.nav__backdrop.active { display: block; }`). The v3 audit flagged this as needing an opacity fade -- the mechanism has moved from JS display toggling to CSS class toggling, which is structurally better, but the visual result is identical: a binary snap with no opacity transition. Adding `opacity: 0` / `opacity: 1` with `pointer-events` and removing the `display` toggle would solve this in four lines.

### 2. Hero
**Score: 8.2** (prev: 7.9, +0.3)  
The headline has been rewritten from "BUILD STRENGTH. FIND FLOW. OWN YOUR POWER." to "WHERE DEADLIFTS MEET DOWNWARD DOG." -- this is the exact phrasing the scout report recommended to own the hybrid identity. This is a genuine copy upgrade: the new headline is specific, brand-defining, and immediately communicates what makes Iron & Flow different from a generic gym or a generic yoga studio. The subtitle "Iron & Flow isn't a gym. It's where lifters learn to move and movers learn to lift" reinforces the positioning with parallel structure. The "Philadelphia's Hybrid Studio" tag pill above the headline further anchors the brand in locality and niche. The multi-layer gradient stack, scanline overlay, vibe picker tags, stat counters, and dual CTAs all remain as before. The dead `.hero__texture` div remains removed. Deductions: the decorative background shapes at 8% opacity still contribute nothing visible and add DOM weight. The vibe tags still link to `#classes` without filtering or highlighting the corresponding card. The hero remains text-over-gradient with no photography infrastructure, but the copy quality now partially compensates for the visual limitation -- the headline does more work than the gradient.

### 3. Classes
**Score: 7.9** (prev: 7.6, +0.3)  
"Book Class" CTAs have been added to every class card, directly addressing the P0 gap flagged in the previous three audits. Strength Lab, Flow Yoga, and Mobility Reset use `btn--ghost btn--card`, while HIIT Burn (the "Popular" card) uses `btn--primary btn--card`. This is the correct conversion hierarchy: the featured card gets the filled CTA, others get the ghost variant, avoiding visual competition while still providing a tap target on every card. The CTAs link to `#contact`, which is the appropriate destination for a template without a booking system. Cards now have `display: flex; flex-direction: column` with `margin-top: auto` on the button, ensuring consistent button alignment across cards of varying content height. Deductions: the HIIT icon (clipboard/book shape with plus and circles) still reads ambiguously as noted in v3 -- a lightning bolt or stopwatch would be more instantly parseable. The 4-column layout at 900px still makes cards narrow enough that schedule text wraps. The horizontal scroll with snap on mobile is functional but there are no scroll indicators or dots to signal swipeability (unlike the testimonial section which now has dots).

### 4. Trainers
**Score: 7.6** (prev: 7.2, +0.4)  
Three meaningful additions. First, "Train with [Name]" CTAs on every card (`btn--ghost btn--card btn--trainer`), linking to `#contact`. This addresses the v3 criticism about missing per-trainer conversion touches. Second, specialty tags above trainer names ("Strength Specialist," "Yoga & Mobility," "HIIT & Conditioning," "Fusion Specialist") in pill format with orange background glow -- these provide immediate visual categorization before reading the bio. Third, Jake's bio has been rewritten from the thin "Designs workouts that push limits while keeping you injury-free" to "Ex-D1 athlete who brings game-day energy to every session. Your limits are his warm-up." -- this is punchier, more specific, and matches the voice quality of the other bios. The SVG silhouette avatars with orange brand-color bodies remain the visual ceiling. Deductions: the avatars are still silhouettes that read as placeholders. No `<img>` fallback infrastructure for real photos. The `trainer-card__role` and `trainer-card__specialty` are somewhat redundant for Priya ("Yoga & Mobility" appears twice in different formatting). Marcus shows "12 yrs" as a cert badge, which is not a certification -- mixing time-served with credentials dilutes the badge system.

### 5. Pricing
**Score: 7.9** (prev: 7.5, +0.4)  
The pricing period text bug has been fixed. The JS handler now correctly updates `.price-period` text content: `periodEl.textContent = isAnnual ? '/yr' : '/mo'`. This was the single highest-priority recommendation from the last three audits and its fix is a meaningful quality-of-life improvement. Additionally, each pricing card now includes a guarantee line: "Cancel anytime. 7-day money-back guarantee." This is a strong risk-reduction micro-copy element that the scout report recommended. The toggle mechanics remain sound: `role="switch"`, `aria-checked`, knob animation, label active-state toggling, "Save 20%" badge. The pricing note "All plans include locker room access, towel service, and free parking. Cancel anytime -- no contracts." remains below the grid. Deductions: the price fade still uses direct `style.opacity` in JS (`amountEl.style.opacity = '0'` / `'1'`) rather than a CSS class toggle with a transition, inconsistent with the rest of the codebase's class-based animation approach. Toggle label tap targets remain text-only with no padding for mobile (the labels should have `padding: 8px` minimum for comfortable tapping). At 600px the featured Pro card uses `grid-column: 1 / -1; max-width: 400px; margin: 0 auto` which centers it but breaks the visual grid alignment with the cards above and below it.

### 6. Free Trial Banner
**Score: 7.5** (prev: 7.5, 0.0)  
No changes. The gradient card with white CTA on orange remains the single strongest visual moment on the page. Copy is clean, layout flexes to side-by-side at 600px+. No regression, no improvement needed urgently.

### 7. Testimonials
**Score: 7.6** (prev: 7.1, +0.5)  
The largest single-section improvement this version, driven by three additions. First, visual progress bars below each quote -- Rachel's card shows "Deadlift: 225 lbs" at 90% fill and "Flexibility: Full splits" at 100%, David's shows "Squat Form: Fixed" at 100%, Sarah's shows "Consistency: 3 years" at 100%. These horizontal bars with `.progress-fill` animated via CSS `transition: width 0.8s ease` are the first visual proof-of-transformation element on the page. They convert abstract quotes into scannable data. Second, star ratings have been varied: Rachel is 5 stars, David is "4.9 stars," Sarah is "4.8 stars" with a `.star-partial` class at `opacity: 0.4`. This addresses the scout report's authenticity recommendation. Third, carousel navigation dots (`.testimonial-dots`) with JS-driven scroll tracking and tap-to-scroll on mobile. The dots use `scrollIntoView({ behavior: 'smooth', inline: 'center' })` for smooth snapping. The dots hide at 600px+ when the grid layout takes over (`display: none`). Deductions: the progress bar fills are set via inline `style="width:90%"` which is correct for template data but means all bars are pre-filled on load rather than animating on scroll (the IntersectionObserver only drives the `.fade-in` class, not the bar width). The "4.9 stars" and "4.8 stars" `aria-label` values are accurate but the visual rendering uses 5 full star characters with the last one at `opacity: 0.4` -- this is a reasonable CSS-only approach but it means the visual is either "5 stars" or "4-and-a-dim-star," not a precise 4.8 or 4.9. The orphaned third card at 600px 2-column grid remains. David's progress bar showing "Squat Form: Fixed" at 100% is conceptually odd -- a binary outcome does not map naturally to a percentage bar.

### 8. Contact / Signup Form
**Score: 7.5** (prev: 7.5, 0.0)  
No changes since v3. Quick-action buttons (Call, Email, Directions) with icons provide mobile-first tap access. Social proof bar ("Join 500+ members training this week" with avatar stack) remains a conversion booster. Social links (Instagram, TikTok, YouTube) with 44px touch targets are present. Form reset timeout at 8 seconds. Deductions remain: phone field has no input masking or pattern. Map is still an SVG pin placeholder. Social links go to `#`. The `sp-avatar` inline background styles are a minor code quality nit. Email validation is browser-default only.

### 9. FAQ
**Score: 7.6** (prev: 7.6, 0.0)  
No changes. The custom JS accordion with `max-height` transition, chevron rotation, `aria-expanded`, mutual exclusion, and six questions remains well-implemented. The "Still have questions? Talk to Us" CTA card at the bottom is a good conversion touch. Deductions: `max-height: 300px` is still a magic number that could clip longer answers on narrow screens with larger text.

### 10. Instagram
**Score: 7.2** (prev: 7.0, +0.2)  
The six cells now have unique text labels ("Deadlift day," "Flow class," "Community WOD," "HIIT scorcher," "Recovery vibes," "PR celebration") replacing the identical SVG Instagram icons from v3. This is a direct implementation of audit recommendation #3 (differentiate Instagram placeholder cells). The labels give each cell a distinct identity and hint at the content type the feed would contain. The modifier classes (`insta-placeholder--1` through `--6`) are present in HTML. Deductions: the modifier classes have no corresponding CSS rules -- there is no visual differentiation between cells beyond the text labels. The v3 recommendation specifically called for "varied gradient fills (using different orange opacities or angles)" which would have made the grid visually scannable at a glance. The text labels at `opacity: 0.5` and `font-size: 0.75rem` are subtle enough that the cells still read as mostly empty on first scan. Adding background gradients per numbered class (e.g., `--1` gets a warm upper-right radial, `--2` gets a cool lower-left) would be a low-effort visual upgrade. The section subtitle "Sweat, PRs, and community moments -- straight from the floor at 742 Iron Way" has been updated with the address, which is a nice local-SEO touch.

### 11. Community
**Score: 7.4** (NEW)  
New section not present in previous audits. "Every Body Belongs Here." is a strong inclusivity statement that addresses a gap identified in the scout report -- the site previously had no explicit belonging/inclusion messaging. The section uses a card format with an orange top-border gradient (`linear-gradient(90deg, var(--orange), transparent)`), three value pills ("All levels," "All bodies," "Zero ego"), and a paragraph that explicitly names the target audience spectrum: "the lifter who's curious about yoga and the yogi who wants to get strong." This is effective positioning copy that reinforces the brand's hybrid identity. The section sits between testimonials and contact, which is a logical placement -- after social proof and before the conversion ask. Deductions: the section is text-only with no visual element (no icon, no illustration, no supporting imagery). A simple SVG illustration of diverse silhouettes or an abstract community/unity icon would add visual weight. The value pills use the same styling as cert badges and other pills across the site -- some visual differentiation (larger size, different background treatment) would help them feel less like another instance of the same component. The card's `overflow: hidden` is needed for the `::before` gradient bar but clips any content that might extend beyond the card boundary.

### 12. Footer
**Score: 7.5** (prev: 7.2, +0.3)  
A newsletter signup has been added to the footer CTA column, addressing the scout report recommendation for a secondary conversion path. The form is a simple email input with a "Subscribe" button using `btn--primary btn--sm`, wrapped in a `newsletter-form` flex container. The input has proper `border-radius: 50px` matching the button style, focus states with orange border and glow, and a `required` attribute. However, the form has no JS handler -- submitting it will cause a page reload since there is no `preventDefault` or success state. This is a functional gap. The 4-column grid (brand, nav, contact, CTA/newsletter) at 900px+ is now more content-rich. The `btn--sm` class is now defined in the main button section area (line 1193) rather than inline in the footer CSS. Deductions: the newsletter form lacks a JS handler, which means the form either reloads the page or does nothing visible on submit. The footer nav links still use `min-height: 44px` which creates excessive vertical spacing in the mobile stack. No newsletter success state or validation feedback. The newsletter `h4` ("Get Class Updates") shares the same styling as the other footer headings, which is consistent but makes it hard to distinguish as a separate conversion element.

---

## Cross-Cutting Scores

### Visual Design
**Score: 7.5** (prev: 7.3, +0.2)  
The progress bars in testimonials are the first data-visualization element on the page and they add genuine visual interest -- horizontal orange fills against dark backgrounds create a new visual rhythm that did not exist before. The community section card with its gradient top-border and value pills adds a different visual texture (statement card vs. grid card vs. form card). The varied star ratings create subtle visual differentiation between testimonial cards. The "Book Class" and "Train with [Name]" CTAs add button density to sections that previously ended abruptly, improving the visual completeness of each card. Deductions: the site remains entirely vector and CSS-based with no photography -- this is the persistent ceiling. The Instagram cells still lack visual gradient differentiation despite having numbered modifier classes. The community section is purely text-based with no illustrative element. The hero headline change is a copy win, not a visual one. Three consecutive `bg-card` background sections (testimonials, community, contact... wait, community uses `var(--bg-card)` implicitly through its card) still create potential visual monotony.

### Mobile UX
**Score: 8.0** (prev: 7.8, +0.2)  
This version crosses the 8.0 threshold on mobile UX. The testimonial carousel dots with tap-to-scroll and active state tracking are a proper mobile pattern -- they signal pagination and provide navigation without requiring swipe discovery. Every card section now has a CTA button (classes have "Book Class," trainers have "Train with [Name]," pricing has "Get Started" / "Start Free Trial"), which means every section has a tap target that advances the user toward conversion. The progress bars in testimonials provide scannable information density on mobile where users are scrolling quickly. The community section's value pills provide tappable-looking (though not interactive) visual anchors. The sticky mobile CTA, quick-action buttons, vibe picker, and all previous mobile UX patterns remain intact. Deductions: the vibe picker tags still do not filter or highlight class cards. The Instagram cells have no meaningful tap feedback beyond border-color change. The newsletter form in the footer has no JS handler. The backdrop still snaps without opacity transition.

### Code Quality
**Score: 7.8** (prev: 7.7, +0.1)  
The pricing period bug fix is clean and minimal -- two lines added to the existing handler. The testimonial carousel dot system uses `scrollIntoView` with `behavior: 'smooth'` and `inline: 'center'` which is the correct modern API. The scroll listener for dot updates uses `{ passive: true }`. The `.star-partial` class for varied ratings is a clean CSS-only approach (opacity reduction on the last star character). The progress bars use semantic markup (label, bar, value) with clear class names. The community section follows the established card pattern. Deductions: the newsletter form (`#newsletterForm`) has no JS handler, which is an incomplete implementation -- the HTML element exists but there is no corresponding functionality. The `style.opacity` approach for pricing fade remains inconsistent with the class-based approach used elsewhere. The `insta-placeholder--1` through `--6` modifier classes are defined in HTML but have no CSS rules, which is dead markup. The progress bar widths are inline styles (`style="width:90%"`) rather than driven by data attributes, which is less maintainable and inconsistent with the stat counters which use `data-count`. One new nit: the `btn--card` class is defined in the class cards CSS section but used in both class cards and trainer cards -- it should either be in the global button system or renamed to indicate shared usage.

### Content / Copy
**Score: 8.0** (prev: 7.6, +0.4)  
The headline rewrite is the single biggest copy upgrade across all four audit versions. "WHERE DEADLIFTS MEET DOWNWARD DOG." is specific, memorable, and brand-defining. It immediately communicates what Iron & Flow is (hybrid strength + yoga) without requiring further explanation. The subtitle "Iron & Flow isn't a gym. It's where lifters learn to move and movers learn to lift" uses chiastic structure to reinforce the dual identity. Jake's bio rewrite ("Ex-D1 athlete who brings game-day energy to every session. Your limits are his warm-up.") is punchy and voice-consistent. The community statement "Whether you're pulling your first deadlift or deepening your practice, warming up for a marathon or cooling down from desk life" names specific audience scenarios that create identification. The pricing guarantee micro-copy ("Cancel anytime. 7-day money-back guarantee.") reduces purchase anxiety. The Instagram cell labels ("Deadlift day," "Flow class," "Community WOD") preview content types effectively. Deductions: the hero subtitle "Where iron meets intention" from previous versions has been replaced by the longer subtitle paragraph, which is more informative but less punchy as a standalone phrase. Some section subtitles remain generic ("Everything you need to know before your first class" for FAQ). The community section paragraph, while well-written, is long for mobile reading.

### Requirements Coverage
**Score: 8.2** (prev: 7.9, +0.3)  
All P0 and P1 items are now present and functional with no known bugs. The pricing period bug that was the last functional deficiency is fixed. Every card section has conversion CTAs. The community/belonging statement satisfies an implicit P1 requirement identified in the scout report. The newsletter signup in the footer adds a secondary conversion path. Testimonials now have visual proof of transformation (progress bars). Star ratings are varied for authenticity. Trainer specialty tags provide clear categorization. Pricing cards have guarantee copy. The only P1 gap remaining is the newsletter form's lack of JS functionality. No P2 items (blog, app download, events calendar) are present, which remains appropriate for scope.

---

## Overall Score: 7.8

This version represents the most significant single-version improvement in the audit history, moving from 7.6 to 7.8. The gains are driven by three categories of change:

**Conversion infrastructure** (biggest impact): "Book Class" CTAs on every class card, "Train with [Name]" CTAs on every trainer card, and the pricing period bug fix collectively close the functional gaps that were dragging the score down. Every section now has at least one conversion touchpoint. This is the single most important change -- a prospective client scanning the page on mobile can now take action from any section without scrolling to the contact form.

**Content quality** (second biggest): The hero headline rewrite to "WHERE DEADLIFTS MEET DOWNWARD DOG." is the strongest single copy change across all versions. It transforms the hero from generic-motivational to brand-specific. Combined with Jake's bio rewrite, the community statement, pricing guarantees, and Instagram cell labels, the copy now consistently owns the hybrid identity.

**Visual proof** (third): Progress bars in testimonials, varied star ratings, and carousel dots add visual information density that was previously absent. The testimonial section went from the weakest scored section to a solid 7.6.

What keeps it from 8.5: the same fundamental ceiling applies. No photography, no booking system integration, and the Instagram cells still lack visual gradient differentiation despite having the HTML hooks for it. The newsletter form is incomplete (no JS handler). The backdrop still snaps without opacity transition. The HIIT icon is still not instantly parseable. These are all solvable without external assets, but they represent the remaining gap between "well-built template" and "template a client would choose without hesitation."

The site now confidently occupies the 7.8 range and is within striking distance of 8.0 across all dimensions. Mobile UX and Content/Copy have already crossed 8.0. The next push requires: (a) visual differentiation of Instagram cells via CSS gradients on the existing modifier classes, (b) a JS handler for the newsletter form, (c) an opacity fade on the nav backdrop, and (d) placeholder photo infrastructure in the hero and trainer sections.

---

## Top 5 Recommendations (Priority Order)

1. **Add CSS gradients to Instagram placeholder cells** -- the `insta-placeholder--1` through `--6` modifier classes already exist in HTML but have zero CSS rules. Add unique gradient backgrounds (varying angles, orange opacities) per cell. Six CSS rules, each three lines. This is the lowest-effort visual upgrade available and would make the Instagram grid scannable and visually rich rather than six identical empty squares.

2. **Add a JS handler for the newsletter form** -- `#newsletterForm` exists in the DOM but has no `addEventListener('submit', ...)`. Submitting it causes a page reload. Add a handler mirroring the contact form pattern: `preventDefault`, basic validation, success message, reset timeout. This is a functional completeness issue.

3. **Fade the nav backdrop with opacity transition** -- replace `display: none/block` with `opacity: 0/1` + `pointer-events: none/auto` + `transition: opacity 0.3s ease`. The backdrop class toggle mechanism is already in place; only the CSS needs to change. This has been flagged in every audit since v1.

4. **Add placeholder photo infrastructure to hero** -- add a `<div class="hero__image">` container behind the gradient with `background-image: url()` ready for a real photo, `object-fit: cover`, and a dark overlay. This signals "template ready for your photos" and creates the infrastructure for the single highest-impact visual upgrade (actual photography). Similarly, make trainer avatar containers accept `<img>` tags with the SVG as a fallback via CSS `content` or a wrapper pattern.

5. **Replace HIIT icon with a lightning bolt** -- the current icon (clipboard/book shape with a plus sign and circles) has been flagged in three consecutive audits as ambiguous. A simple lightning bolt SVG (`M13 2L3 14h9l-1 8 10-12h-9l1-8z`) already exists in the hero vibe picker tags for the HIIT tag. Reuse it at 48x48 in the class card. One SVG swap.
