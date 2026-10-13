import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,s as d,t as f}from"./decorate-Bygya6Tu.js";import{n as p,t as m}from"./validate-color-scheme-CB3dwOoW.js";import{r as h,t as g}from"./if-defined-Cjo0XTWN.js";import{n as _,t as v}from"./iframe-DreyA1rb.js";import{i as y,n as b,r as x}from"./theme-constraints-BnNpJNRe.js";import{a as S,o as C,r as w,t as T}from"./a11y-outcome-Bu1rkJr_.js";var E,D,O=e((()=>{o(),u(),m(),l(),D=class extends i{static{E=this}constructor(...e){super(...e),this.variant=`no-media`,this.surface=`solid`,this.container=`content`,this.eyebrow=``,this.accentColorScheme=`onyx`,this.heading=``,this.headingLevel=1,this.headingSize=`1`,this.body=``,this.padding=`md`,this.density=`default`,this.mediaHeight=`default`,this.roundness=`subtle`,this.contentAlign=`top`,this._randomOrganicVariant=Math.floor(Math.random()*E.ORGANIC_VARIANT_COUNT),this._hasCta=!1}static{this.ORGANIC_VARIANT_COUNT=4}connectedCallback(){super.connectedCallback(),this._validateSurface(),this._syncOrganicVariant()}updated(e){e.has(`surface`)&&this._validateSurface(),e.has(`organicVariant`)&&this._syncOrganicVariant()}_syncOrganicVariant(){let e=this.organicVariant??this._randomOrganicVariant,t=(Math.trunc(e)%E.ORGANIC_VARIANT_COUNT+E.ORGANIC_VARIANT_COUNT)%E.ORGANIC_VARIANT_COUNT;this.setAttribute(`data-organic-variant`,String(t))}_validateSurface(){(this.surface===`primary`||this.surface===`secondary`||this.surface===`onyx`)&&p(this,this.surface,`mms-hero`)}_onCtaSlotChange(e){let t=e.target;this._hasCta=t.assignedElements().length>0}_renderHeading(){switch(Math.min(Math.max(this.headingLevel||1,1),6)){case 1:return a`<h1 class="heading">${this.heading}</h1>`;case 2:return a`<h2 class="heading">${this.heading}</h2>`;case 3:return a`<h3 class="heading">${this.heading}</h3>`;case 4:return a`<h4 class="heading">${this.heading}</h4>`;case 5:return a`<h5 class="heading">${this.heading}</h5>`;default:return a`<h6 class="heading">${this.heading}</h6>`}}_renderMedia(){return this.variant===`no-media`?n:a`
      <div class="media-wrapper">
        <slot name="media"></slot>
      </div>
    `}render(){return a`
      <div class="hero">
        <div
          class="hero-inner"
          role="region"
          aria-roledescription="hero"
          aria-label=${this.heading||`Hero`}
        >
          <div class="hero-content">
            ${this.eyebrow?a`<p class="eyebrow">${this.eyebrow}</p>`:n}
            ${this._renderHeading()}
            ${this.body?a`<p class="body">${this.body}</p>`:n}
            <div class="cta-container" ?hidden=${!this._hasCta}>
              <slot name="cta" @slotchange=${this._onCtaSlotChange}></slot>
            </div>
          </div>
          ${this._renderMedia()}
        </div>
      </div>
    `}static{this.styles=[r`
      /* ═══════════════════════════════════════════════════════════════════════
         HOST — Surface Mapping
         --_hero-fill is the content panel's background, in every variant.
         solid/tint reuse mms-card's own neutral surface pair (solid/default)
         so the two components stay visually consistent.
         ═══════════════════════════════════════════════════════════════════════ */
      :host {
        display: block;
        width: 100%;

        --_hero-fill: var(--color-surface-solid);
        --_hero-text: var(--color-text-default);
      }

      :host([surface='tint']) {
        --_hero-fill: var(--color-surface-default);
        --_hero-text: var(--color-text-default);
      }

      :host([surface='primary']) {
        --_hero-fill: var(--color-primary-9);
        --_hero-text: var(--color-text-on-primary);
      }

      :host([surface='secondary']) {
        --_hero-fill: var(--color-secondary-9);
        --_hero-text: var(--color-text-on-secondary);
      }

      :host([surface='onyx']) {
        --_hero-fill: var(--color-onyx-9);
        --_hero-text: var(--color-text-on-onyx);
      }

      /* headingSize is a visual-only axis, deliberately decoupled from
         headingLevel's semantic one (see that @prop's doc comment) — same
         :host-custom-property-per-attribute pattern as the surface mapping
         above, just keyed on a different attribute. */
      :host {
        --_heading-family: var(--type-heading-1-family);
        --_heading-size: var(--responsive-heading-1);
      }

      :host([heading-size='2']) {
        --_heading-family: var(--type-heading-2-family);
        --_heading-size: var(--responsive-heading-2);
      }

      :host([heading-size='3']) {
        --_heading-family: var(--type-heading-3-family);
        --_heading-size: var(--responsive-heading-3);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         FRAME — container-type scoped to the component's own box, mirroring
         mms-header/mms-footer exactly (see doc comment above).
         ═══════════════════════════════════════════════════════════════════════ */
      .hero {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        background: var(--_hero-fill);
        container-type: inline-size;
        container-name: mms-hero;
      }

      .hero-inner {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: var(--spacing-lg1);
        max-width: var(--mms-hero-content-max-width, var(--layout-content-max-width));
        width: 100%;
        margin-inline: auto;
        --_inline-pad: var(--mms-hero-inline-padding, var(--layout-inline-padding-compact));
        --_block-pad: var(--spacing-lg2); /* padding="md" (default), stacked */
        background: var(--_hero-fill);
        box-sizing: border-box;
      }

      /* Padding lives on .hero-content itself, not the row — so when media
         is shown, .hero-inner has nothing of its own for a 50% flex-basis
         to resolve against but each column's actual rendered width, and
         half-and-half's media-wrapper (unpadded, see below) reaches the
         row's true edges with no bleed hack needed at all. */
      .hero-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-sm2);
        min-width: 0;
        padding-inline: var(--_inline-pad);
        padding-block: var(--_block-pad);
        box-sizing: border-box;
      }

      .media-wrapper ::slotted(*) {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: var(--radius-md);
        object-fit: cover;
      }

      /* Stacked-mode block spacing applies to both variants alike — 20px
         top (the sole gap source, see .hero-inner/.hero-content below) and
         24px bottom. Only the inline treatment differs by variant: inset
         frames the image with its own side padding, right below;
         half-and-half stays unpadded on the sides so it bleeds full-width. */
      :host(:not([variant='no-media'])) .media-wrapper {
        padding-block-start: var(--spacing-md2);
        padding-block-end: var(--spacing-lg1);
        box-sizing: border-box;
      }

      /* half-and-half bleeds on every edge, including the bottom — the
         shared 24px above is an inset concern (framing), not relevant here. */
      :host([variant='half-and-half']) .media-wrapper {
        padding-block-end: 0;
      }

      /* Full-bleed means no corners either — unconditional, not just a row-
         layout concern, so it also covers the stacked (mobile) layout. */
      :host([variant='half-and-half']) .media-wrapper ::slotted(*) {
        border-radius: 0;
      }

      /* half-and-half: stacked layout only — once the row split kicks in,
         the image is always full-bleed/fills-available-height (see the
         variant doc comment above for why a ratio there would contradict
         the whole point of "half-and-half"). Scoped explicitly with "not"
         rather than left to rely on .media-wrapper's row-mode height being
         definite (position:absolute + inset-block:0) making this inert —
         that was true, but implicitly/fragile, and already caused one
         confusing round of "it's not working above the breakpoint". */
      @container mms-hero not (min-width: 768px) {
        :host([variant='half-and-half'][media-height='short']) .media-wrapper ::slotted(*) {
          aspect-ratio: 21 / 9;
        }
      }

      /* inset's framing applies regardless of layout mode (stacked or row)
         — unlike the row split itself, this isn't a >=768px-only concern.
         The image gets the exact same inset padding as the text, its own
         padding, not the row's. Inline only here — block spacing is shared
         with half-and-half above; row mode restores the general
         --_block-pad for both edges, symmetric again, further down. */
      :host([variant='inset']) .media-wrapper {
        padding-inline: var(--_inline-pad);
      }

      /* organic's position:absolute sizing fix lives in the 768px+ row
         breakpoint only (@container mms-hero (min-width: 768px), below) —
         it solves a row-mode-only flexbox bug (see that rule's own doc
         comment for the full history). Originally unconditional here,
         which broke stacked/mobile layout: the image collapsed to 0
         height, since nothing in stacked (column-flow) mode gives
         .media-wrapper a real height the way row mode's align-self:stretch
         does, and organic's own aspect-ratio:unset left nothing else to
         derive one from. Scoping it to row-only means stacked mode now
         falls through to the same generic aspect-ratio:16/9 rule (further
         below) every other roundness value already uses there — the
         organic clip-path still applies on top of that ordinary ratio
         box, it just no longer tries to exactly match .hero-content's
         height outside the two-column layout that comparison depends on. */


      :host([variant='inset'][roundness='boxed']) .media-wrapper ::slotted(*) {
        border-radius: var(--radius-none);
      }

      /* Asymmetric: top-left and bottom-right are the two accent corners,
         large (50% — see below for why not --radius-full); top-right and
         bottom-left stay at subtle's 8px. 50% is self-relative (half the
         image's own width/height), so it can't trigger CSS's mutual corner
         scaling (when one corner's radius is disproportionately larger
         than its box, every corner sharing an edge with it gets scaled
         down by the same ratio to fit) — --radius-full (1000px) did
         trigger exactly that, silently crushing the 8px (and, before that,
         16px) corners down to a couple of visible pixels regardless of
         what value they were actually set to. Order is CSS's own
         top-left/top-right/bottom-right/bottom-left. */
      :host([variant='inset'][roundness='rounded']) .media-wrapper ::slotted(*) {
        border-radius: 50% var(--radius-md) 50% var(--radius-md);
      }

      /* Freeform organic crop — a real irregular outline, not a radius
         variant. clip-path only visually masks the image; its underlying
         box/aspect-ratio is unchanged.
         This is polygon(), not an SVG <clipPath>+url() reference: a
         clip-path: url(#id) pointing at an SVG clipPath living in this
         same shadow root does NOT resolve against ::slotted() content —
         confirmed via isolated Playwright testing (works fine against a
         shadow-root-direct child, silently fails — computed style still
         reports the url() but nothing is actually clipped — the moment
         the same rule targets ::slotted(*)). Slotted content's clip-path
         url() lookups resolve against the light-DOM/document id space,
         not the shadow root the declaring rule lives in, so the id is
         simply never found. polygon() points are percentages, so they
         scale with the image's own rendered box rather than being fixed
         pixel coordinates tied to one specific size.
         Built from explicit control points + a closed Catmull-Rom spline,
         following J's 4-step method exactly: (1) confirm the container
         box, (2) place one point per side, exactly on the edge, (3)
         connect with a smooth curve, (4) add more points between them for
         organic irregularity.
         Step 1 took three attempts. First read: 320x180, from 'subtle''s
         own rendered image (aspect-ratio:16/9) — wrong, that's a smaller
         box nested inside the real one. Second: 320x290.195, matching
         .media-wrapper's own border-box — also wrong, that includes
         .media-wrapper's own 40px top/bottom padding, which every
         roundness (including subtle) respects; filling past it put the
         image above .hero-content's own eyebrow label, ignoring that
         padding rather than matching it. Correct: .hero-content minus its
         own padding-block (40px top, 40px bottom) = 320 wide x 210.195
         tall at this story's config — confirmed by reading
         .hero-content's padding directly and checking its rendered
         content area lines up with .media-wrapper's own (both wrappers
         share the same padding-block value, so with aspect-ratio removed
         below, the image naturally lands in the same box without any
         padding override needed here).
         Steps 2+3 alone, and every variant of Step 4 tried after them
         (superellipse base with per-point contrast, continuous sine
         sums, squared-sine sums), kept landing on the same wrong
         character: a rounded-corner shape — either a plain ellipse/lens,
         or a superellipse that reads as "four rounded corners on a
         rectangle." Confirmed directly by J after the smoothness problem
         was finally solved: "I'd like to see a bit of organic curve
         rather than assigning random radius values on the four corners
         to make something rounded." The fix isn't another contrast
         function layered on a corner-rounded base — it's a different
         base entirely: a continuously wavy, multi-lobed outline (several
         soft bumps distributed around the FULL perimeter, like a flower
         or blob silhouette), not a rectangle-plus-rounding at all.
         Built as a polar radius function r(θ) = 1 + three sine terms at
         moderate, non-harmonically-related frequencies (k=5, k=7, k=3,
         distinct phases) — enough terms at high-enough k to read as
         several genuine lobes around the full circle (not just 1-2 big
         bulges, not dozens of tiny busy ones), small enough combined
         amplitude (0.10+0.07+0.05) that r(θ) never approaches zero
         (nothing to clamp, so none of the earlier clamp-derivative
         problems apply here — this is an unclamped signed sum, safe
         specifically because the amplitudes can't drive it negative,
         unlike the earlier attempt that tried this with larger
         amplitudes and needed a clamp as a result).
         This no longer tries to guarantee a literal single pinned point
         per cardinal side (that constraint is what kept pulling every
         previous attempt back toward "rounded rectangle" — a true wavy
         blob's lobes aren't aligned to the box's own axes). Instead, the
         same per-side cardinal-scaling-with-cosine-blend technique from
         much earlier in this component (proven smooth, reused as-is) is
         applied directly to the raw polar curve, scaling it so its own
         bounding box fills the real container (320x210.195, see Step 1
         above) on all four sides without forcing any specific point to
         be the exact touch point.
         Verified: bbox touches 0%/100% on both axes (sub-0.3% residual,
         well below rendering precision), max turning angle 6.6deg —
         lower than every previous attempt including the plain
         superellipse (6.7deg) — and reviewed at 2x zoom: multiple
         distinct, soft, rounded lobes around the whole perimeter, reading
         as a genuine organic blob/flower silhouette rather than a
         rectangle with rounded corners.
         APPROVED (J, "much better! can we lock this down as variant 0") —
         this silhouette (radiusAt's three sine terms, the per-side
         cardinal-scaling-with-cosine-blend fit) is final for variant 0.
         Not yet themed/brand-specific (same shape in every theme) —
         that's a separate, still-open design decision, not a reason this
         variant itself is unfinished. Shape generation concluded at 4
         variants (organicVariant 0-3, randomly picked by default — see
         the _syncOrganicVariant doc comment above and the public
         organicVariant @prop doc); all 4 use this same wavy-polar-curve
         approach and are locked/approved — see each variant's own doc
         comment below for its specific k/amplitude choice and why. */
      :host([variant='inset'][roundness='organic'][data-organic-variant='0']) .media-wrapper ::slotted(*) {
        clip-path: polygon(
          100.00% 50.00%, 99.71% 52.51%, 98.90% 54.94%, 97.69% 57.24%,
          96.22% 59.39%, 94.65% 61.41%, 93.09% 63.32%, 91.65% 65.17%,
          90.38% 67.01%, 89.27% 68.88%, 88.28% 70.80%, 87.34% 72.77%,
          86.38% 74.76%, 85.30% 76.71%, 84.06% 78.59%, 82.62% 80.34%,
          80.98% 81.93%, 79.17% 83.35%, 77.24% 84.64%, 75.24% 85.83%,
          73.22% 87.00%, 71.21% 88.23%, 69.22% 89.56%, 67.22% 91.05%,
          65.18% 92.68%, 63.04% 94.39%, 60.76% 96.10%, 58.30% 97.67%,
          55.66% 98.94%, 52.87% 99.76%, 50.00% 100.00%, 47.13% 99.57%,
          44.38% 98.43%, 41.83% 96.65%, 39.58% 94.33%, 37.66% 91.63%,
          36.06% 88.78%, 34.72% 85.99%, 33.52% 83.47%, 32.32% 81.38%,
          30.96% 79.84%, 29.30% 78.85%, 27.23% 78.39%, 24.69% 78.33%,
          21.71% 78.51%, 18.37% 78.73%, 14.82% 78.80%, 11.28% 78.55%,
          7.94% 77.86%, 5.04% 76.66%, 2.72% 74.96%, 1.11% 72.82%,
          0.25% 70.33%, 0.07% 67.62%, 0.48% 64.82%, 1.28% 62.05%,
          2.29% 59.38%, 3.31% 56.86%, 4.14% 54.48%, 4.68% 52.21%,
          4.86% 50.00%, 4.69% 47.78%, 4.25% 45.49%, 3.66% 43.10%,
          3.07% 40.60%, 2.63% 38.01%, 2.46% 35.38%, 2.67% 32.75%,
          3.29% 30.21%, 4.32% 27.80%, 5.72% 25.56%, 7.40% 23.49%,
          9.27% 21.58%, 11.25% 19.79%, 13.25% 18.07%, 15.25% 16.39%,
          17.23% 14.73%, 19.22% 13.08%, 21.24% 11.48%, 23.36% 9.99%,
          25.59% 8.69%, 27.97% 7.67%, 30.48% 7.00%, 33.09% 6.73%,
          35.75% 6.86%, 38.40% 7.33%, 40.96% 8.05%, 43.41% 8.87%,
          45.71% 9.62%, 47.89% 10.13%, 50.00% 10.26%, 52.12% 9.91%,
          54.34% 9.06%, 56.74% 7.75%, 59.39% 6.11%, 62.31% 4.32%,
          65.49% 2.62%, 68.83% 1.23%, 72.22% 0.39%, 75.50% 0.26%,
          78.50% 0.95%, 81.08% 2.47%, 83.11% 4.77%, 84.53% 7.70%,
          85.35% 11.08%, 85.66% 14.68%, 85.59% 18.30%, 85.33% 21.73%,
          85.08% 24.84%, 85.04% 27.57%, 85.36% 29.91%, 86.15% 31.90%,
          87.43% 33.65%, 89.14% 35.29%, 91.17% 36.92%, 93.35% 38.67%,
          95.47% 40.59%, 97.34% 42.72%, 98.79% 45.03%, 99.70% 47.48%
        );
      }

      /* Variant 1 — APPROVED (J, "pass. lock in as variant 1"). Uses the
         same wavy-polar-curve method as variant 0 (locked/approved) —
         r(θ) = 1 + sum of sine terms, per-side cardinal-scaling-with-
         cosine-blend fit to the real container — replacing the old
         superellipse approach this originally shipped with (n=12, plus a
         multiplicative sine wobble), which read as a rounded rectangle,
         not organic, same problem variant 0 had before it was fixed.
         Per J's request for variant 1 specifically ("a little less in
         and out"), amplitudes are roughly half of variant 0's and the
         k/phase combination differs (k=4,6,2 vs. variant 0's k=5,7,3) for
         a visibly distinct, gentler silhouette — fewer, shallower
         undulations, still clearly organic rather than a smooth oval.
         Verified: bbox touches 0%/100% on both axes with zero overshoot,
         max turning angle 2.7deg (smoother than variant 0's 6.6deg, as
         expected from the smaller amplitudes), reviewed at 2x zoom. */
      :host([variant='inset'][roundness='organic'][data-organic-variant='1']) .media-wrapper ::slotted(*) {
        clip-path: polygon(
          99.84% 50.00%, 99.50% 52.41%, 99.03% 54.79%, 98.47% 57.13%,
          97.83% 59.44%, 97.15% 61.73%, 96.42% 64.00%, 95.62% 66.26%,
          94.75% 68.50%, 93.78% 70.72%, 92.68% 72.88%, 91.43% 74.98%,
          90.00% 76.99%, 88.40% 78.88%, 86.63% 80.63%, 84.71% 82.23%,
          82.66% 83.68%, 80.51% 84.99%, 78.30% 86.17%, 76.07% 87.27%,
          73.82% 88.32%, 71.59% 89.35%, 69.38% 90.41%, 67.16% 91.51%,
          64.93% 92.67%, 62.66% 93.88%, 60.33% 95.12%, 57.90% 96.34%,
          55.37% 97.49%, 52.74% 98.49%, 50.00% 99.29%, 47.19% 99.81%,
          44.34% 100.00%, 41.50% 99.82%, 38.73% 99.25%, 36.06% 98.29%,
          33.56% 96.99%, 31.24% 95.37%, 29.14% 93.52%, 27.23% 91.50%,
          25.51% 89.39%, 23.94% 87.27%, 22.47% 85.19%, 21.05% 83.20%,
          19.62% 81.33%, 18.14% 79.58%, 16.59% 77.94%, 14.93% 76.37%,
          13.18% 74.84%, 11.36% 73.30%, 9.52% 71.70%, 7.70% 70.02%,
          5.96% 68.21%, 4.37% 66.27%, 2.98% 64.19%, 1.84% 61.98%,
          0.97% 59.68%, 0.38% 57.30%, 0.07% 54.87%, 0.01% 52.43%,
          0.16% 50.00%, 0.50% 47.59%, 0.97% 45.21%, 1.53% 42.87%,
          2.17% 40.56%, 2.85% 38.27%, 3.58% 36.00%, 4.38% 33.74%,
          5.25% 31.50%, 6.22% 29.28%, 7.32% 27.12%, 8.57% 25.02%,
          10.00% 23.01%, 11.60% 21.12%, 13.37% 19.37%, 15.29% 17.77%,
          17.34% 16.32%, 19.49% 15.01%, 21.70% 13.83%, 23.93% 12.73%,
          26.18% 11.68%, 28.41% 10.65%, 30.62% 9.59%, 32.84% 8.49%,
          35.07% 7.33%, 37.34% 6.12%, 39.67% 4.88%, 42.10% 3.66%,
          44.63% 2.51%, 47.26% 1.51%, 50.00% 0.71%, 52.81% 0.19%,
          55.66% 0.00%, 58.50% 0.18%, 61.27% 0.75%, 63.94% 1.71%,
          66.44% 3.01%, 68.76% 4.63%, 70.86% 6.48%, 72.77% 8.50%,
          74.49% 10.61%, 76.06% 12.73%, 77.53% 14.81%, 78.95% 16.80%,
          80.38% 18.67%, 81.86% 20.42%, 83.41% 22.06%, 85.07% 23.63%,
          86.82% 25.16%, 88.64% 26.70%, 90.48% 28.30%, 92.30% 29.98%,
          94.04% 31.79%, 95.63% 33.73%, 97.02% 35.81%, 98.16% 38.02%,
          99.03% 40.32%, 99.62% 42.70%, 99.93% 45.13%, 99.99% 47.57%
        );
      }

      /* Variant 2 — APPROVED (J, "approve"). Uses the same wavy-polar-
         curve method as variants 0 and 1 (both locked/approved) —
         r(θ) = 1 + sum of sine terms, per-side cardinal-scaling-with-
         cosine-blend fit to the real container — replacing the old
         superellipse approach (n=12) this originally shipped with, same
         reason variant 1 was rebuilt. k=6,4,8 with amplitudes between
         variant 0's (0.10/0.07/0.05) and variant 1's (0.05/0.035/0.025)
         for a third visibly distinct silhouette in the same family —
         different lobe count/placement from both.
         Verified: bbox touches 0%/100% on both axes with zero overshoot,
         max turning angle 6.3deg, reviewed at 2x zoom. */
      :host([variant='inset'][roundness='organic'][data-organic-variant='2']) .media-wrapper ::slotted(*) {
        clip-path: polygon(
          99.93% 50.00%, 99.95% 52.69%, 99.46% 55.35%, 98.46% 57.90%,
          97.04% 60.29%, 95.34% 62.50%, 93.54% 64.56%, 91.84% 66.53%,
          90.41% 68.51%, 89.35% 70.64%, 88.73% 73.01%, 88.48% 75.71%,
          88.49% 78.77%, 88.56% 82.13%, 88.50% 85.67%, 88.08% 89.19%,
          87.15% 92.46%, 85.61% 95.25%, 83.44% 97.36%, 80.71% 98.66%,
          77.55% 99.10%, 74.14% 98.75%, 70.67% 97.77%, 67.30% 96.39%,
          64.17% 94.88%, 61.33% 93.52%, 58.78% 92.53%, 56.48% 92.08%,
          54.31% 92.22%, 52.19% 92.93%, 50.00% 94.09%, 47.68% 95.50%,
          45.20% 96.98%, 42.57% 98.30%, 39.81% 99.31%, 37.01% 99.89%,
          34.22% 99.97%, 31.50% 99.58%, 28.90% 98.77%, 26.43% 97.60%,
          24.10% 96.17%, 21.89% 94.55%, 19.79% 92.79%, 17.80% 90.92%,
          15.94% 88.93%, 14.21% 86.83%, 12.66% 84.60%, 11.30% 82.25%,
          10.16% 79.79%, 9.21% 77.26%, 8.43% 74.70%, 7.74% 72.16%,
          7.08% 69.67%, 6.36% 67.24%, 5.54% 64.87%, 4.58% 62.52%,
          3.51% 60.17%, 2.40% 57.76%, 1.37% 55.26%, 0.55% 52.67%,
          0.07% 50.00%, 0.05% 47.31%, 0.54% 44.65%, 1.54% 42.10%,
          2.96% 39.71%, 4.66% 37.50%, 6.46% 35.44%, 8.16% 33.47%,
          9.59% 31.49%, 10.65% 29.36%, 11.27% 26.99%, 11.52% 24.29%,
          11.51% 21.23%, 11.44% 17.87%, 11.50% 14.33%, 11.92% 10.81%,
          12.85% 7.54%, 14.39% 4.75%, 16.56% 2.64%, 19.29% 1.34%,
          22.45% 0.90%, 25.86% 1.25%, 29.33% 2.23%, 32.70% 3.61%,
          35.83% 5.12%, 38.67% 6.48%, 41.22% 7.47%, 43.52% 7.92%,
          45.69% 7.78%, 47.81% 7.07%, 50.00% 5.91%, 52.32% 4.50%,
          54.80% 3.02%, 57.43% 1.70%, 60.19% 0.69%, 62.99% 0.11%,
          65.78% 0.03%, 68.50% 0.42%, 71.10% 1.23%, 73.57% 2.40%,
          75.90% 3.83%, 78.11% 5.45%, 80.21% 7.21%, 82.20% 9.08%,
          84.06% 11.07%, 85.79% 13.17%, 87.34% 15.40%, 88.70% 17.75%,
          89.84% 20.21%, 90.79% 22.74%, 91.57% 25.30%, 92.26% 27.84%,
          92.92% 30.33%, 93.64% 32.76%, 94.46% 35.13%, 95.42% 37.48%,
          96.49% 39.83%, 97.60% 42.24%, 98.63% 44.74%, 99.45% 47.33%
        );
      }

      /* Variant 3 — APPROVED (J, "this is a good one. accept and lock
         in"). First two attempts at this slot (k=3,5,9 then k=2,7,5, both
         three-term combos in the same "multi-petal flower" family as
         variants 0/1/2) were quantitatively confirmed too close to
         variant 1 — RMS position-distance was the lowest of any pair in
         the set both times, matching a visual side-by-side ("same
         dominant upper-left bulge / smooth lower-right belly as variant
         1, just softer"). Fixed by switching families rather than just
         reshuffling k/phase: only two harmonics (k=2 dominant, k=3
         secondary, no third fine-texture term), producing a two-lobed
         "kidney" silhouette structurally unlike 0/1/2's multi-petal
         flowers, not just a different member of the same family.
         Verified: bbox touches 0%/100% on both axes (max 0.17% overshoot,
         consistent with variants 0-2's tolerance), max turning angle
         1.75deg (smoothest of the four), RMS vs. variants 0/1/2 is
         6.44-8.03% — no longer closest-of-set to any one variant,
         reviewed at 2x zoom on the live container. */
      :host([variant='inset'][roundness='organic'][data-organic-variant='3']) .media-wrapper ::slotted(*) {
        clip-path: polygon(
          99.73% 50.00%, 99.43% 52.93%, 99.01% 55.86%, 98.49% 58.76%,
          97.85% 61.65%, 97.10% 64.50%, 96.23% 67.33%, 95.23% 70.12%,
          94.12% 72.85%, 92.88% 75.52%, 91.51% 78.12%, 90.01% 80.63%,
          88.40% 83.03%, 86.66% 85.31%, 84.81% 87.45%, 82.86% 89.45%,
          80.82% 91.28%, 78.70% 92.94%, 76.52% 94.42%, 74.28% 95.72%,
          72.01% 96.82%, 69.71% 97.75%, 67.42% 98.49%, 65.13% 99.07%,
          62.86% 99.49%, 60.62% 99.77%, 58.41% 99.92%, 56.25% 99.96%,
          54.12% 99.91%, 52.04% 99.79%, 50.00% 99.62%, 47.99% 99.41%,
          46.00% 99.16%, 44.02% 98.90%, 42.05% 98.62%, 40.06% 98.32%,
          38.06% 98.01%, 36.04% 97.66%, 33.98% 97.27%, 31.87% 96.82%,
          29.73% 96.30%, 27.55% 95.67%, 25.33% 94.92%, 23.09% 94.02%,
          20.83% 92.95%, 18.58% 91.70%, 16.35% 90.23%, 14.16% 88.55%,
          12.03% 86.63%, 10.01% 84.48%, 8.10% 82.10%, 6.34% 79.50%,
          4.75% 76.69%, 3.35% 73.69%, 2.18% 70.52%, 1.24% 67.22%,
          0.56% 63.83%, 0.13% 60.37%, 0.00% 56.88%, 0.09% 53.41%,
          0.47% 50.00%, 1.10% 46.68%, 1.98% 43.47%, 3.08% 40.43%,
          4.38% 37.56%, 5.86% 34.88%, 7.49% 32.42%, 9.24% 30.17%,
          11.09% 28.14%, 13.00% 26.33%, 14.95% 24.71%, 16.91% 23.27%,
          18.86% 22.00%, 20.79% 20.87%, 22.67% 19.85%, 24.50% 18.92%,
          26.28% 18.04%, 27.99% 17.19%, 29.64% 16.36%, 31.25% 15.50%,
          32.82% 14.62%, 34.36% 13.69%, 35.89% 12.71%, 37.44% 11.67%,
          39.01% 10.58%, 40.64% 9.45%, 42.32% 8.28%, 44.09% 7.09%,
          45.96% 5.92%, 47.92% 4.77%, 50.00% 3.68%, 52.19% 2.67%,
          54.49% 1.78%, 56.89% 1.02%, 59.39% 0.43%, 61.97% 0.03%,
          64.60% 0.00%, 67.28% 0.00%, 69.97% 0.15%, 72.66% 0.68%,
          75.32% 1.45%, 77.91% 2.47%, 80.43% 3.74%, 82.84% 5.24%,
          85.13% 6.96%, 87.28% 8.89%, 89.27% 11.01%, 91.10% 13.30%,
          92.75% 15.73%, 94.22% 18.29%, 95.51% 20.96%, 96.63% 23.71%,
          97.57% 26.53%, 98.35% 29.40%, 98.96% 32.31%, 99.42% 35.24%,
          99.74% 38.19%, 99.93% 41.15%, 99.98% 44.10%, 99.91% 47.06%
        );
      }

      /* The ratio lives on the slotted image itself, not the wrapper —
         without it, the image's height rode .hero-content's height, which
         itself grows with --responsive-heading-1's viewport-driven
         clamp(), compounding with the image's own flex-basis width growth
         into runaway, unpredictable sizing. Putting it on the wrapper
         instead (box-sizing:border-box, with this same padding) governs
         the OUTER box including padding — the padding then eats into the
         ratio-constrained box asymmetrically (more block padding than
         inline), leaving a squished, much-shorter-than-16:9 visible photo
         with the "missing" height rendered as blank padding underneath.
         Same fixed-ratio approach as mms-card's media (16:9), just
         decoupled from a sibling's height instead of driven by it.
         Overrides the shared height:100% above — the ratio needs to derive
         height from this element's own (already padding-adjusted) width,
         not stretch to fill a parent box the ratio no longer governs. */
      :host([variant='inset']) .media-wrapper ::slotted(*) {
        height: auto;
        aspect-ratio: 16 / 9;
      }

      /* This rule and the [roundness='organic'] layout rule above have
         IDENTICAL specificity (2 attribute selectors on :host() either
         way), so for the aspect-ratio property specifically, source
         order decides — this one, being later, wins and computes to
         21/9 even when roundness='organic' (verified via
         getComputedStyle). It's still a no-op there: organic's width AND
         height are both explicit calc() values (no auto axis left), and
         aspect-ratio only affects layout when at most one of width/height
         is auto. Confirmed empirically — rendered box stays
         320x210.195 regardless of this rule. Don't "fix" this by adding
         !important or reordering without re-checking that invariant;
         removing either of organic's explicit width/height would make
         this rule start acting. */
      :host([variant='inset'][media-height='short']) .media-wrapper ::slotted(*) {
        aspect-ratio: 21 / 9;
      }

      /* Stacked layout (below 768px, or whenever variant is a media variant
         without the row split applying): the same double-spacing problem as the
         row case, just vertical — .hero-inner's own gap plus content's own
         bottom padding plus media's own top padding, three independent
         sources stacking into one much-larger-than-intended visual gap.
         Same fix: zero the row's own gap and content's facing (bottom)
         edge, leaving media's own top padding as the sole source. Applies
         to both variants — row mode restores content's bottom padding (and
         zeroes half-and-half's media padding entirely) further down. */
      :host(:not([variant='no-media'])) .hero-inner {
        gap: 0;
      }

      /* Top is stacked-mode-specific (24px, not the general --_block-pad) —
         row mode restores the general value for both edges further down. */
      :host(:not([variant='no-media'])) .hero-content {
        padding-block-start: var(--spacing-lg1);
        padding-block-end: 0;
      }

      /* Block padding only — inline padding is the breakpoint-driven layout
         concern above, a separate axis from padding. */
      :host([padding='sm']) .hero-inner {
        --_block-pad: var(--spacing-md2);
      }

      :host([padding='lg']) .hero-inner {
        --_block-pad: var(--spacing-xl2);
      }

      /* Sets the same custom property a consumer would, so the two never
         compete — an inline --mms-hero-content-max-width still wins. */
      :host([container='full']) {
        --mms-hero-content-max-width: none;
      }

      @container mms-hero (min-width: 768px) {
        .hero-inner {
          --_inline-pad: var(--mms-hero-inline-padding, var(--layout-inline-padding-default));
          --_block-pad: var(--spacing-xl1); /* padding="md" (default), row */
        }

        :host([padding='sm']) .hero-inner {
          --_block-pad: var(--spacing-lg2);
        }

        :host([padding='lg']) .hero-inner {
          --_block-pad: var(--spacing-xl3);
        }

        /* Two-column layout — text one half, media the other. Both variants
           split 50/50 the same way; only how the image itself renders
           within its half differs (see the variant overrides below). No
           row gap here: inset's spacing comes entirely from media's own
           leading padding below (content's own trailing padding is zeroed
           for this case); half-and-half has no such padding to lean on, so
           it gets an explicit gap of its own, right below. */
        :host(:not([variant='no-media'])) .hero-inner {
          flex-direction: row;
          align-items: stretch;
          gap: 0;
        }

        :host(:not([variant='no-media'])) .hero-content,
        :host(:not([variant='no-media'])) .media-wrapper {
          flex: 1 1 50%;
          min-width: 0;
        }

        /* inset: no cross-axis coupling between the two columns — stretch
           (the shared default above) makes each match whichever is
           naturally taller, which silently overrides the image's own
           aspect-ratio below whenever text happens to be the taller one.
           flex-start lets each size to its own content/ratio independently. */
        :host([variant='inset']) .hero-inner {
          align-items: flex-start;
        }

        /* content-align: default stays flex-start (top) above, matching
           existing behavior everywhere else. 'middle' overrides just this
           one flex item's own cross-axis position via align-self — the
           media column (and .hero-inner's own flex-start) are untouched,
           so a tall organic image still sizes independently and stays
           pinned top; only the shorter text column re-centers against it. */
        :host([variant='inset'][content-align='middle']) .hero-content {
          align-self: center;
        }

        /* Row mode restores the general --_block-pad symmetrically on both
           edges for both variants — the base rule above sets 24px top / 0
           bottom specifically for the stacked layout; in row mode, block
           is normal framing again, not a facing edge. */
        :host(:not([variant='no-media'])) .hero-content {
          padding-block-start: var(--_block-pad);
          padding-block-end: var(--_block-pad);
        }

        /* inset only: inline-end stays zeroed here — the spacing between
           the two columns comes from the image's own leading padding
           instead (see .media-wrapper below), not both stacked. */
        :host([variant='inset']) .hero-content {
          padding-inline-end: 0;
        }

        /* Row mode's facing edge is inline-start (see .hero-content above),
           not block — restore the general --_block-pad symmetrically here
           too, undoing the stacked-mode-specific 20px/24px split above.
           align-self:stretch (overriding .hero-inner's own flex-start, see
           above) lets the wrapper grow to match whichever column is taller
           — almost always .hero-content's text — then centers the image
           within that taller frame instead of pinning it to the top. The
           image's own aspect-ratio sizing is untouched either way: it was
           always independent of the wrapper's height, never stretched to
           fill it (that's what .hero-inner's flex-start was for, above). */
        :host([variant='inset']) .media-wrapper {
          align-self: stretch;
          display: flex;
          align-items: center;
          padding-block-start: var(--_block-pad);
          padding-block-end: var(--_block-pad);
        }

        /* organic's whole point is to reach the real container edges — not
           .media-wrapper's own border-box, its PADDED CONTENT area, which is
           what actually lines up with .hero-content's own text (both share
           the same 40px padding-block, confirmed by direct measurement —
           .media-wrapper's default padding-block was never the problem).
           First attempt zeroed padding-block entirely, which overshot PAST
           the real content area by 40px on both top and bottom — the image
           ended up higher than .hero-content's own eyebrow label, not
           aligned with it.
           Second attempt used height:100%; aspect-ratio:unset, then
           align-self:stretch + min-height:0 — neither fixed it, because the
           real cause isn't a cyclic percentage-height or a min-height:auto
           clamp at all: .media-wrapper sets align-self:stretch on ITSELF
           (confirmed via direct measurement, not inherited from .hero-inner,
           whose own align-items is flex-start, not stretch) — so
           .media-wrapper, not .hero-content, is the flex item whose own
           *hypothetical* (pre-stretch) cross size can set the flex line's
           cross size. With aspect-ratio removed, the image's intrinsic
           photo ratio (800x533 at this config) drives that hypothetical
           size to ~213px tall, plus .media-wrapper's own 80px of block
           padding = ~293px — 3px MORE than .hero-content's own natural
           height (290.195px, confirmed via direct measurement) — so
           .media-wrapper's stretch target becomes its own now-larger
           hypothetical size, pulling it away from .hero-content instead of
           matching it.
           Fixed by removing the image from that sizing calculation
           entirely: position:absolute on the image, position:relative on
           .media-wrapper. inset:0 was tried and rejected first — for an
           absolutely positioned element the containing block is the
           ancestor's PADDING box, so inset:0 overlaps/ignores the ancestor's
           own padding rather than stopping at its content edge, reintroducing
           the first bug. Explicit inset values matching the real padding
           fix that — but the first attempt at this copied the WRONG tokens
           (--spacing-md2/--spacing-lg1, the BASE rule above, which only
           resolves to 20px/24px) rather than var(--_block-pad), the row-
           mode-specific override further down that's what's actually
           applied here (40px/40px, confirmed directly via getComputedStyle
           on .media-wrapper itself — the base rule was already overridden).
           width/height:auto alongside correct insets STILL fell back to the
           image's intrinsic 800x533 — <img> is a REPLACED element, and the
           CSS2.1 algorithm for absolutely positioned replaced elements with
           width/height:auto uses the intrinsic size directly, then adjusts
           one of the offsets to resolve the now-over-constrained equation,
           rather than computing width/height from the insets the way a
           plain <div> would. Fixed by making width/height explicit instead
           of auto: calc(100% - 2 * the matching padding token), against the
           containing block (.media-wrapper's own padding box, i.e. its
           border-box at 384x290.195 here) — this sidesteps the replaced-
           element ambiguity entirely since nothing is left for the browser
           to resolve via intrinsic size. Confirmed via direct measurement:
           .media-wrapper's own height matches .hero-content's exactly
           (290.195px), and the image's final box is exactly 320x210.195 at
           the real padded content position — not the 800x533 intrinsic
           fallback.
           Scoped to this row-only breakpoint (not unconditional, as it
           originally was) — outside of it, this made the image collapse to
           0 height in stacked/mobile layout (no flex stretch calculation
           exists in column flow, so nothing here needed fixing, but
           aspect-ratio:unset still zeroed out the one thing — the generic
           16:9 rule further below — that would otherwise have given the
           image a real height). See the short pointer comment where this
           used to live, above .media-wrapper's base inset padding rule. */
        :host([variant='inset'][roundness='organic']) .media-wrapper {
          position: relative;
        }

        :host([variant='inset'][roundness='organic']) .media-wrapper ::slotted(*) {
          position: absolute;
          inset-block-start: var(--_block-pad);
          inset-inline-start: var(--_inline-pad);
          width: calc(100% - 2 * var(--_inline-pad));
          height: calc(100% - 2 * var(--_block-pad));
          aspect-ratio: unset;
        }

        /* half-and-half: the image is always full-bleed, the same way
           mms-hero-image's background photo is — container caps the text,
           never the image. .hero-inner keeps its normal container-aware
           cap/centering for the text (unchanged from every other variant),
           but the image can't live inside that capped box and still reach
           the real edge, so it escapes entirely: position:absolute against
           .hero itself (the positioning root — .hero-inner is never
           positioned, so it isn't in the chain), sized in cqw units, which
           resolve against .hero's true inline size regardless of the cap.
           Centering means .hero-inner's own midpoint always coincides with
           .hero's true midpoint, so .hero-content's plain 50%-minus-gap
           width (below) lines up with this exactly, at every viewport and
           every container value — no coordinate translation needed. */
        :host([variant='half-and-half']) .hero-content {
          flex: 0 0 auto;
          width: calc(50% - var(--spacing-xl1));
        }

        :host([variant='half-and-half']) .media-wrapper {
          position: absolute;
          inset-block: 0;
          inset-inline-end: 0;
          width: 50cqw;
          padding-block: 0;
        }

      }


      /* ═══════════════════════════════════════════════════════════════════════
         EYEBROW / HEADING / BODY
         ═══════════════════════════════════════════════════════════════════════ */
      .eyebrow {
        margin: 0;
        display: inline-block;
        align-self: flex-start;
        font-family: var(--type-ui-overline-family);
        font-size: var(--text-ui-overline-size);
        line-height: var(--text-ui-overline-line-height);
        letter-spacing: var(--text-ui-overline-letter-spacing);
        text-transform: var(--text-ui-overline-text-transform);
        font-weight: var(--font-weight-bold);
        color: var(--_hero-text);
        padding-bottom: var(--spacing-xs2);
        /* border-bottom-color split out from the shorthand (not width/style)
           so accentColorScheme's primary/secondary/accent overrides below
           can replace just the underline's color — the label text itself
           (color, above) always stays on-fill for contrast; only this
           decorative line is eligible to go brand. onyx is accentColorScheme's
           own default (always reflected, never unset), so it's the base
           color here directly rather than a fourth conditional rule below. */
        border-bottom: var(--border-width-md) solid var(--color-onyx-9);
      }

      /* Decorative only — the label text (color, above) keeps the on-fill
         contrast-safe color regardless. Base step (-9), the same one
         --_hero-fill itself reads for brand surfaces, not a text-contrast
         step — correct, since this line carries no text of its own and
         accentColorScheme is deliberately not tier-gated (see class doc). */
      :host([accent-color-scheme='primary']) .eyebrow {
        border-bottom-color: var(--color-primary-9);
      }
      :host([accent-color-scheme='secondary']) .eyebrow {
        border-bottom-color: var(--color-secondary-9);
      }
      :host([accent-color-scheme='accent']) .eyebrow {
        border-bottom-color: var(--color-accent-9);
      }

      .heading {
        margin: 0;
        font-family: var(--_heading-family);
        font-size: var(--_heading-size);
        line-height: 1.2;
        font-weight: var(--font-weight-bold);
        color: var(--_hero-text);
      }

      .body {
        margin: 0;
        font-family: var(--type-body-lg-family);
        font-size: var(--text-body-lg-size);
        line-height: var(--text-body-lg-line-height);
        color: var(--_hero-text);
        max-width: var(--text-measure-prose);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         CTA SLOT
         ═══════════════════════════════════════════════════════════════════════ */
      .cta-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        /* 20px (md2), not md1's 16px that mms-hero-image still uses — trying
           looser CTA spacing here first; mms-hero-image gets its own pass
           during its full revamp rather than picking this up as a drive-by. */
        gap: var(--spacing-md2);
        margin-block-start: var(--spacing-sm1);
      }

      .cta-container[hidden] {
        display: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .hero-inner {
          transition: none !important;
        }
      }
    `]}},f([c({type:String,reflect:!0})],D.prototype,`variant`,void 0),f([c({type:String,reflect:!0})],D.prototype,`surface`,void 0),f([c({type:String,reflect:!0})],D.prototype,`container`,void 0),f([c({type:String})],D.prototype,`eyebrow`,void 0),f([c({type:String,reflect:!0,attribute:`accent-color-scheme`})],D.prototype,`accentColorScheme`,void 0),f([c({type:String})],D.prototype,`heading`,void 0),f([c({type:Number,attribute:`heading-level`})],D.prototype,`headingLevel`,void 0),f([c({type:String,reflect:!0,attribute:`heading-size`})],D.prototype,`headingSize`,void 0),f([c({type:String})],D.prototype,`body`,void 0),f([c({type:String,reflect:!0})],D.prototype,`padding`,void 0),f([c({type:String,reflect:!0,attribute:`data-density`})],D.prototype,`density`,void 0),f([c({type:String,reflect:!0,attribute:`media-height`})],D.prototype,`mediaHeight`,void 0),f([c({type:String,reflect:!0})],D.prototype,`roundness`,void 0),f([c({type:String,reflect:!0,attribute:`content-align`})],D.prototype,`contentAlign`,void 0),f([c({type:Number,attribute:`organic-variant`})],D.prototype,`organicVariant`,void 0),f([d()],D.prototype,`_hasCta`,void 0),D=E=f([s(`mms-hero`)],D)})),k=t({Overview:()=>R,PlaygroundStory:()=>B,__namedExportsOrder:()=>V,default:()=>j});function A(e){let t=e??`768`;return t===`fill`?`100%`:`${t}px`}var j,M,N,P,F,I,L,R,z,B,V,H=e((()=>{o(),g(),O(),_(),v(),x(),S(),T(),j={title:`Content Display/Hero`,tags:[`!autodocs`]},M={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},N=`680px`,P=`960px`,F=[``,`scenic-landscape`,`community-support`,`parent-and-baby`,`caregiver-support`,`team-collaboration`,`community-outreach`,`support-call`],I={"scenic-landscape":{url:`https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80&auto=format&fit=crop`,alt:`A misty mountain valley with a river at sunrise`},"community-support":{url:`https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80&auto=format&fit=crop`,alt:`Two people holding hands across a table in a moment of comfort`},"parent-and-baby":{url:`https://images.unsplash.com/photo-1556566353-cdcb88a69f3c?w=800&q=80&auto=format&fit=crop`,alt:`A woman and baby sitting together on a sofa`},"caregiver-support":{url:`https://images.unsplash.com/photo-1543333995-a78aea2eee50?w=800&q=80&auto=format&fit=crop`,alt:`A caregiver standing next to a woman using a wheelchair`},"team-collaboration":{url:`https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&q=80&auto=format&fit=crop`,alt:`Four coworkers smiling together around a laptop at a table`},"community-outreach":{url:`https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?w=800&q=80&auto=format&fit=crop`,alt:`An elderly woman in a wheelchair talking with a man`},"support-call":{url:`https://images.unsplash.com/photo-1758876022836-70b89d3e6944?w=800&q=80&auto=format&fit=crop`,alt:`A woman talking on the phone at her desk with a laptop`}},L=e=>a`
  <div style="background: rgba(128,128,128,0.06); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
    ${e}
  </div>
`,R={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${P}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${M.h1}">Hero</h1>
      <p style="${M.body} opacity: 0.85; max-width: ${N}; margin-bottom: 2rem;">
        A full-width marketing section introducing a page or campaign — brand-color fill,
        optional eyebrow, heading, body text, and a CTA slot. Use
        <code style="${M.monoSm}">mms-hero-image</code> instead when the hero needs a
        background photo.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${M.h2}">Variant</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">no-media</code> (default) renders text only, no media column.
        <code style="${M.monoSm}">inset</code> and <code style="${M.monoSm}">half-and-half</code>
        both split the row 50/50 from 768px up — text content in one half, the
        <code style="${M.monoSm}">media</code> slot in the other (mirroring mms-card's own
        <code style="${M.monoSm}">showMedia</code>/<code style="${M.monoSm}">media</code> pair,
        just collapsed into this one prop rather than kept as a separate boolean). They differ
        only in how the image half itself renders: <code style="${M.monoSm}">inset</code> keeps
        it inside the same padded box as the text; <code style="${M.monoSm}">half-and-half</code>
        bleeds it past that padding on every edge but the one facing the text — a literal,
        unpadded 50%. Below 768px, or whenever
        <code style="${M.monoSm}">no-media</code> is set, media stacks as a normal block below
        the text rather than being hidden.
      </p>
      ${L(a`
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <mms-hero variant="inset" heading="Inset image" body="Image shares the text's own padding.">
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=${I[`team-collaboration`].url} alt=${I[`team-collaboration`].alt} />
          </mms-hero>
          <mms-hero
            variant="half-and-half"
            heading="Half-and-half image"
            body="Image bleeds to a literal, unpadded 50%."
          >
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=${I[`team-collaboration`].url} alt=${I[`team-collaboration`].alt} />
          </mms-hero>
        </div>
      `)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${M.h2}">Surface</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">surface</code> accepts <code style="${M.monoSm}">solid</code>
        (default — a flat white/near-black fill, theme-adaptive), <code style="${M.monoSm}">tint</code>
        (neutral, subtly shaded), <code style="${M.monoSm}">primary</code>, <code style="${M.monoSm}">secondary</code>,
        or <code style="${M.monoSm}">onyx</code> — the same brand fills as mms-button/mms-card,
        minus <code style="${M.monoSm}">accent</code> (no scenario where a hero's entire panel is
        the decorative accent hue). <code style="${M.monoSm}">solid</code>/<code style="${M.monoSm}">tint</code>
        reuse mms-card's own neutral surface pair (same naming — not <code style="${M.monoSm}">white</code>,
        since it isn't white in dark mode) and are never tier-gated.
      </p>

      <div style="background: rgba(234, 179, 8, 0.08); border-left: 3px solid #EAB308; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${M.bodySm} margin: 0;">
          <strong>Tier availability.</strong> Applies only to the three brand fills — the
          heading/body/eyebrow sit directly on them, so <strong>Tier 3</strong> (decorative-only)
          palettes are blocked for <code style="${M.monoSm}">primary</code>/<code style="${M.monoSm}">secondary</code>/<code style="${M.monoSm}">onyx</code>
          (Tier 1 and Tier 2 are both fine). <code style="${M.monoSm}">solid</code>/<code style="${M.monoSm}">tint</code>
          are structural neutrals and always valid, in every theme. See
          <em>Foundations → Color Framework → Color Tiering</em>.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        ${L(a`<mms-hero surface="solid" heading="Solid surface" body="Flat white/near-black fill — the default."></mms-hero>`)}
        ${L(a`<mms-hero surface="tint" heading="Tint surface" body="Neutral, subtly shaded fill."></mms-hero>`)}
        <mms-hero surface="primary" heading="Primary surface" body="Brand fill."></mms-hero>
        <mms-hero surface="secondary" heading="Secondary surface" body="Brand fill."></mms-hero>
        <mms-hero surface="onyx" heading="Onyx surface" body="Brand fill."></mms-hero>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${M.h2}">Padding</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">padding</code> tightens or loosens the content panel's
        block (top/bottom) padding only — its inline padding is a separate, breakpoint-driven
        layout concern. Independent of the global <code style="${M.monoSm}">density</code>
        prop, which has no effect on mms-hero.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem;">
        <div>
          <p style="${M.h3}">Small</p>
          ${L(a`<mms-hero padding="sm" heading="Small padding" body="Tightest block padding."></mms-hero>`)}
        </div>
        <div>
          <p style="${M.h3}">Medium (default)</p>
          ${L(a`<mms-hero padding="md" heading="Medium padding" body="Standard block padding."></mms-hero>`)}
        </div>
        <div>
          <p style="${M.h3}">Large</p>
          ${L(a`<mms-hero padding="lg" heading="Large padding" body="Loosest block padding."></mms-hero>`)}
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${M.h2}">Container</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">container</code> mirrors mms-header/mms-footer exactly:
        <code style="${M.monoSm}">content</code> (default) caps and centers the content panel
        to match page content beneath; <code style="${M.monoSm}">full</code> removes the cap —
        edge-to-edge.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${M.h2}">Media height</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">media-height</code> sets the image's aspect ratio: default
        (16:9, the inherent behavior) or <code style="${M.monoSm}">short</code> (21:9). Effective
        under <code style="${M.monoSm}">inset</code> at any width; under
        <code style="${M.monoSm}">half-and-half</code>, only below the 768px row step — at and
        above it the image is always full-bleed and fills whatever height the text needs, so
        this has no effect there. Has <strong>no visible effect</strong> when
        <code style="${M.monoSm}">roundness="organic"</code> either (see Media roundness below) —
        organic fixes both width and height to the padded content box, leaving no room for an
        aspect ratio to apply.
      </p>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        ${L(a`
          <mms-hero variant="inset" heading="Default (16:9)" body="The inherent image ratio.">
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=${I[`team-collaboration`].url} alt=${I[`team-collaboration`].alt} />
          </mms-hero>
        `)}
        ${L(a`
          <mms-hero variant="inset" media-height="short" heading="Short (21:9)" body="A wider, shallower crop.">
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=${I[`team-collaboration`].url} alt=${I[`team-collaboration`].alt} />
          </mms-hero>
        `)}
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${M.h2}">Media roundness</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">roundness</code> sets the image container's corner treatment,
        effective only under <code style="${M.monoSm}">inset</code> (<code style="${M.monoSm}">half-and-half</code>
        is always square-cornered/full-bleed regardless): <code style="${M.monoSm}">boxed</code>
        (0 — sharp corners), <code style="${M.monoSm}">subtle</code> (default, 8px),
        <code style="${M.monoSm}">rounded</code> (asymmetric — top-left/bottom-right are the two
        accent corners, top-right/bottom-left stay at subtle's 8px), or
        <code style="${M.monoSm}">organic</code> (a freeform irregular crop via
        <code style="${M.monoSm}">clip-path</code>, not a radius at all).
      </p>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
        ${L(a`
          <mms-hero variant="inset" roundness="boxed" heading="Boxed" body="Sharp corners, no radius.">
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=${I[`team-collaboration`].url} alt=${I[`team-collaboration`].alt} />
          </mms-hero>
        `)}
        ${L(a`
          <mms-hero variant="inset" roundness="subtle" heading="Subtle (default)" body="8px radius on every corner.">
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=${I[`team-collaboration`].url} alt=${I[`team-collaboration`].alt} />
          </mms-hero>
        `)}
        ${L(a`
          <mms-hero variant="inset" roundness="rounded" heading="Rounded" body="Asymmetric accent corners.">
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=${I[`team-collaboration`].url} alt=${I[`team-collaboration`].alt} />
          </mms-hero>
        `)}
      </div>

      <h3 style="${M.h3}">Organic shapes</h3>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        4 fixed, locked silhouettes (<code style="${M.monoSm}">organic-variant</code> 0–3). Left
        unset, one is picked at random when the hero is created and held stable for its lifetime;
        pin a specific number — shown below — to review or reproduce one exactly.
      </p>
      <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem;">
        ${[{heading:`Built for your team`,body:`Collaborate from anywhere.`},{heading:`Work your way`,body:`Flexible tools for flexible teams.`},{heading:`Stay connected`,body:`Keep every project moving.`},{heading:`Grow together`,body:`Support that scales with you.`}].map((e,t)=>a`
            <div>
              <p style="${M.h3}">Variant ${t}</p>
              ${L(a`
                <mms-hero variant="inset" roundness="organic" organic-variant="${t}" heading="${e.heading}" body="${e.body}">
                  <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
                  <img slot="media" src=${I[`team-collaboration`].url} alt=${I[`team-collaboration`].alt} />
                </mms-hero>
              `)}
            </div>
          `)}
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${M.h2}">Content align</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">content-align</code> sets the text column's vertical alignment
        against the media column, effective only under <code style="${M.monoSm}">inset</code> at
        the 768px+ row layout: <code style="${M.monoSm}">top</code> (default) or
        <code style="${M.monoSm}">middle</code>. Only visible when one column is taller than the
        other — e.g. a short heading next to a tall image, shown below. No effect under
        <code style="${M.monoSm}">half-and-half</code> or below 768px.
      </p>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        ${L(a`
          <mms-hero variant="inset" heading="Top (default)">
            <img slot="media" src=${I[`team-collaboration`].url} alt=${I[`team-collaboration`].alt} />
          </mms-hero>
        `)}
        ${L(a`
          <mms-hero variant="inset" content-align="middle" heading="Middle">
            <img slot="media" src=${I[`team-collaboration`].url} alt=${I[`team-collaboration`].alt} />
          </mms-hero>
        `)}
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${M.h2}">Eyebrow</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">eyebrow</code> is an optional uppercase label above the heading,
        with an accent underline. <code style="${M.monoSm}">accent-color-scheme</code> sets that
        underline's color only — not the eyebrow text, which always stays on the surface's own
        text color for contrast. Default <code style="${M.monoSm}">onyx</code> (structural); an
        explicit <code style="${M.monoSm}">primary</code>/<code style="${M.monoSm}">secondary</code>/<code style="${M.monoSm}">accent</code>
        reads that palette's base step regardless of its tier classification — intentionally
        <strong>not</strong> tier-gated, since a line with no text of its own has no contrast
        requirement a Tier 3 (decorative) palette would fail.
      </p>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        ${L(a`<mms-hero eyebrow="Default underline" heading="Onyx (default)"></mms-hero>`)}
        ${L(a`<mms-hero eyebrow="Branded underline" accent-color-scheme="accent" heading="Accent scheme"></mms-hero>`)}
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${M.h2}">CTA</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        The <code style="${M.monoSm}">cta</code> slot is not restricted to buttons. It's a
        plain, unstyled slot — no <code style="${M.monoSm}">::slotted</code> rules target it —
        laid out as a wrapping flex row with a 20px gap. It accepts any number of any element.
        <code style="${M.monoSm}">mms-button</code> is the common case and what the Playground
        story's controls demo, but <code style="${M.monoSm}">mms-link</code> or any other
        element works identically, as shown below.
      </p>
      ${L(a`
        <mms-hero heading="Mixed CTA slot" body="A button and a link, side by side.">
          <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
          <mms-link slot="cta" label="Learn about eligibility" href="#"></mms-link>
        </mms-hero>
      `)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${M.h2}">Heading level &amp; size</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">heading-level</code> sets the semantic heading element
        (<code style="${M.monoSm}">h1</code>–<code style="${M.monoSm}">h6</code>), default
        <code style="${M.monoSm}">1</code> — document outline and assistive tech only.
        <code style="${M.monoSm}">heading-size</code> is a separate, independent axis for the
        <em>visual</em> size — a hero doesn't always have to be the page's own <code style="${M.monoSm}">h1</code>
        to read at full marketing-headline size, or vice versa.
      </p>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        Pick <code style="${M.monoSm}">heading-size</code> by what this hero actually is in the
        page's outline — the same judgment call as sizing any other heading — not by which
        one looks best in isolation. Maps directly to the typographic framework's own defined
        usage (<em>Foundations → Typography → Typographic Framework</em>):
      </p>
      <ul style="${M.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><code style="${M.monoSm}">1</code> (default, ~40px/32px) — <strong>Page title.</strong> This hero IS the page's own title.</li>
        <li style="margin-bottom: 0.5rem;"><code style="${M.monoSm}">2</code> (~32px/24px) — <strong>Major section.</strong> This hero introduces a section within a page, not the whole page.</li>
        <li><code style="${M.monoSm}">3</code> (~24px/20px) — <strong>Subsection.</strong></li>
      </ul>
      ${L(a`
        <mms-hero heading="A section intro, not the page title" heading-level="2" heading-size="2" body="heading-level=2 (real h2 tag) and heading-size=2 (major-section scale) — the common case: both axes usually agree."></mms-hero>
      `)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${M.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${M.bodySm} margin: 0;">
          The content panel is marked <code style="${M.monoSm}">role="region"</code> with
          <code style="${M.monoSm}">aria-roledescription="hero"</code> and
          <code style="${M.monoSm}">aria-label</code> set to the heading text, so assistive
          tech can jump directly to it as a landmark.
        </p>
      </div>

      <h3 style="${M.h3}">WCAG 2.2 AA Compliance</h3>
      ${w(C.hero.rows)}

      <h3 style="${M.h3}">Screen Reader Behavior</h3>
      <ul style="${M.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> Announced as a region named after the heading text.</li>
        <li><strong>Reading order:</strong> Eyebrow, heading, body, then the <code style="${M.monoSm}">cta</code> slot's contents — normal document flow.</li>
      </ul>

      <h3 style="${M.h3}">Keyboard Navigation</h3>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 2rem;">
        mms-hero itself is not focusable. Slotted CTA buttons follow their own focus/activation
        model (Tab to focus, Enter/Space to activate).
      </p>

    </div>
  `},z=[`primary`,`secondary`,`onyx`],B={name:`Playground`,tags:[`!dev`],args:{viewport:`768`,surface:`solid`,variant:`no-media`,container:`content`,padding:`md`,eyebrow:`Eyebrow label`,accentColorScheme:`onyx`,heading:`Hero heading`,headingLevel:1,headingSize:`1`,body:`Supporting body text that introduces the page or campaign in a sentence or two.`,mediaImage:``,mediaHeight:`default`,roundness:`subtle`,organicVariant:`random`,contentAlign:`top`,ctaCount:1,cta1Label:`Get started`,cta1Variant:`primary`,cta1ColorScheme:`primary`,cta2Label:`Learn more`,cta2Variant:`secondary`,cta2ColorScheme:`primary`,ctaRoundness:`subtle`,theme:`maximus`,density:`default`},decorators:[(e,t)=>a`
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-lg2); overflow-x: auto;">
          <div style="width: ${A(t.args.viewport)}; margin-inline: auto;">${e()}</div>
        </div>
      `],argTypes:{viewport:{name:`Viewport (simulated)`,control:`select`,options:[`400`,`768`,`1240`,`1440`,`fill`],description:"Not a component prop — a story control that constrains the preview width so responsive behavior can be seen without resizing the browser. `fill` hands the width back to the canvas.",table:{category:`Demo Controls`}},surface:{name:`Surface`,control:`select`,options:[`solid`,`tint`,`primary`,`secondary`,`onyx`],description:`Fill. solid/tint are neutral and always valid; primary/secondary/onyx are brand fills — Tier 3 (decorative-only) palettes are blocked under the active theme.`,table:{category:`Visual`}},variant:{name:`Variant`,control:`select`,options:[`no-media`,`inset`,`half-and-half`],description:`no-media (default) — text only. inset/half-and-half show the media slot, 50/50 split at 768px+: inset keeps the image inside the text's own padding; half-and-half bleeds it to a literal, unpadded 50%.`,table:{category:`Visual`}},mediaImage:{name:`Media image`,control:`select`,options:F,description:`Storybook demo control only — swaps in a curated stock photo so you can preview the media slot at real proportions. Not a real mms-hero prop: consumers slot their own &lt;img&gt; or media markup into the media slot.`,table:{category:`Visual`},if:{arg:`variant`,neq:`no-media`}},mediaHeight:{name:`Media height`,control:`select`,options:[`default`,`short`],description:`Effective under inset at any width. Under half-and-half, only below the 768px step — at/above it the image is always full-bleed and fills whatever height the text needs, so this has no effect there. Also has no visible effect when Media roundness is organic — organic fixes both width and height to the padded content box, leaving no room for an aspect ratio to apply. Same values as mms-card’s mediaHeight.`,table:{category:`Visual`},if:{arg:`variant`,neq:`no-media`}},roundness:{name:`Media roundness`,control:`select`,options:[`boxed`,`subtle`,`rounded`,`organic`],description:`Corner radius of the image container. rounded is asymmetric — top-left/bottom-right are the two accent corners (large), top-right/bottom-left stay at subtle’s 8px. organic is a freeform irregular crop via clip-path, not a radius — 4 fixed silhouettes, randomly picked unless pinned via the organic-variant attribute — and overrides Media height (see above). Effective only under inset — half-and-half is always square-cornered (full bleed).`,table:{category:`Visual`},if:{arg:`variant`,eq:`inset`}},organicVariant:{name:`Organic shape`,control:`select`,options:[`random`,`0`,`1`,`2`,`3`],description:`Which of the 4 fixed organic blob shapes to render. random (default) picks one when the hero is created and holds it stable; pin a specific number to preview or review that exact shape. Maps to the organic-variant attribute.`,table:{category:`Visual`},if:{arg:`roundness`,eq:`organic`}},contentAlign:{name:`Content align`,control:`select`,options:[`top`,`middle`],description:`Vertical alignment of the text column against the media column. Only visible when one column is taller than the other (e.g. a short heading next to a tall image) — at equal heights top and middle look identical. No effect under half-and-half or below the 768px row step.`,table:{category:`Visual`},if:{arg:`variant`,eq:`inset`}},container:{name:`Container`,control:`select`,options:[`content`,`full`],description:`content (default) caps and centers the panel; full removes the cap`,table:{category:`Layout`}},eyebrow:{name:`Eyebrow`,control:`text`,description:`Optional label above the heading`,table:{category:`Content`}},accentColorScheme:{name:`Accent line color`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Color of the eyebrow’s accent underline only — not the eyebrow text itself. Default onyx — structural, matches today’s look under solid/tint surfaces. An explicit scheme is read at its base brand step regardless of the active theme’s tier classification for that color — intentionally not tier-gated, since this line carries no text of its own. Under a brand-fill surface, onyx no longer automatically matches the eyebrow text’s on-fill color — pick the matching scheme explicitly there.`,table:{category:`Content`}},heading:{name:`Heading`,control:`text`,description:`Hero heading text (required)`,table:{category:`Content`}},headingLevel:{name:`Heading level`,control:`select`,options:[1,2,3,4,5,6],description:`Semantic heading element — document outline/assistive tech only, does not change the visual size (see Heading size).`,table:{category:`Content`}},headingSize:{name:`Heading size`,control:`select`,options:[`1`,`2`,`3`],description:`Visual size only, independent of Heading level. Maps to the typographic framework’s own defined usage (Foundations → Typography → Typographic Framework) — pick by what this hero actually is in the page, not by eye: 1 (default, ~40px/32px) = Page title (h1), this hero IS the page’s title. 2 (~32px/24px) = Major section (h2) — this hero introduces a section, not the whole page. 3 (~24px/20px) = Subsection (h3).`,table:{category:`Content`}},body:{name:`Body`,control:`text`,description:`Optional body/description text`,table:{category:`Content`}},ctaCount:{name:`Number of buttons`,control:`select`,options:[0,1,2],description:`How many CTA buttons to preview — 0 (none), 1, or 2. Demo control only, not a component prop or a real limit: the cta slot accepts any number of any element (see the CTA section above), these controls just demo the common mms-button case.`,table:{category:`CTA`}},cta1Label:{name:`Button 1 — label`,control:`text`,table:{category:`CTA`}},cta1Variant:{name:`Button 1 — style`,control:`select`,options:[`primary`,`secondary`,`ghost`],table:{category:`CTA`}},cta1ColorScheme:{name:`Button 1 — color scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],table:{category:`CTA`}},cta2Label:{name:`Button 2 — label`,control:`text`,description:`Ignored when Number of buttons is 0 or 1`,table:{category:`CTA`}},cta2Variant:{name:`Button 2 — style`,control:`select`,options:[`primary`,`secondary`,`ghost`],description:`Ignored when Number of buttons is 0 or 1`,table:{category:`CTA`}},cta2ColorScheme:{name:`Button 2 — color scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Ignored when Number of buttons is 0 or 1`,table:{category:`CTA`}},ctaRoundness:{name:`Button roundness`,control:`select`,options:[`boxed`,`subtle`,`rounded`],description:`Storybook demo control only — not a real mms-hero prop. mms-button’s own roundness is set independently on that element; this control exists so you can preview it alongside Media roundness to see how the two pair visually.`,table:{category:`CTA`}},padding:{name:`Padding`,control:`select`,options:[`sm`,`md`,`lg`],description:`Block (top/bottom) padding — independent of the global density prop, which has no effect on mms-hero.`,table:{category:`Layout`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Global prop — currently has no visual effect on mms-hero (see Padding, a separate Hero-specific axis).`,table:{category:`Global Props`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];n.variant&&n.variant!==`no-media`&&r.push(`variant="${n.variant}"`),n.surface&&n.surface!==`solid`&&r.push(`surface="${n.surface}"`),n.container&&n.container!==`content`&&r.push(`container="${n.container}"`),n.padding&&n.padding!==`md`&&r.push(`padding="${n.padding}"`),n.eyebrow&&r.push(`eyebrow="${n.eyebrow}"`),n.eyebrow&&n.accentColorScheme&&n.accentColorScheme!==`onyx`&&r.push(`accent-color-scheme="${n.accentColorScheme}"`),n.heading&&r.push(`heading="${n.heading}"`),n.headingLevel&&n.headingLevel!==1&&r.push(`heading-level="${n.headingLevel}"`),n.headingSize&&n.headingSize!==`1`&&r.push(`heading-size="${n.headingSize}"`),n.body&&r.push(`body="${n.body}"`),n.density&&n.density!=="default"&&r.push(`data-density="${n.density}"`),n.variant!==`no-media`&&n.mediaHeight&&n.mediaHeight!=="default"&&r.push(`media-height="${n.mediaHeight}"`),n.variant===`inset`&&n.roundness&&n.roundness!==`subtle`&&r.push(`roundness="${n.roundness}"`),n.variant===`inset`&&n.roundness===`organic`&&n.organicVariant&&n.organicVariant!==`random`&&r.push(`organic-variant="${n.organicVariant}"`),n.variant===`inset`&&n.contentAlign&&n.contentAlign!==`top`&&r.push(`content-align="${n.contentAlign}"`);let i=Number(n.ctaCount??1),a=[];if(i>=1&&a.push(`  <mms-button slot="cta" label="${n.cta1Label}" variant="${n.cta1Variant}" color-scheme="${n.cta1ColorScheme}"${n.ctaRoundness&&n.ctaRoundness!==`subtle`?` roundness="${n.ctaRoundness}"`:``}></mms-button>`),i>=2&&a.push(`  <mms-button slot="cta" label="${n.cta2Label}" variant="${n.cta2Variant}" color-scheme="${n.cta2ColorScheme}"${n.ctaRoundness&&n.ctaRoundness!==`subtle`?` roundness="${n.ctaRoundness}"`:``}></mms-button>`),n.variant!==`no-media`){let e=I[n.mediaImage];a.push(e?`  <img slot="media" src="${e.url}" alt="${e.alt}" />`:`  <div slot="media">...</div>`)}return`<mms-hero\n  ${r.join(`
  `)}\n>\n${a.join(`
`)}\n</mms-hero>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=z.includes(e.surface),r=t?b(e.theme,e.surface):1,i=!t||y(e.theme,e.surface),o=[`primary`,`secondary`,`accent`],s=t=>o.includes(t)?b(e.theme,t):1,c=[];return e.ctaCount>=1&&s(e.cta1ColorScheme)!==1&&c.push({label:`Button 1`,scheme:e.cta1ColorScheme,tier:s(e.cta1ColorScheme)}),e.ctaCount>=2&&s(e.cta2ColorScheme)!==1&&c.push({label:`Button 2`,scheme:e.cta2ColorScheme,tier:s(e.cta2ColorScheme)}),t&&!i&&r===3||c.length>0?a`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 440px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem; color: #991b1b !important;">Invalid combination</strong>
          ${t&&!i&&r===3?a`
                <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.theme}</code> theme +
                <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.surface}</code> surface
                <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
                  <strong style="color: #991b1b !important;">Tier 3 (Decorative):</strong> Lacks text contrast. Not safe for the hero's heading/body text.
                </p>
              `:n}
          ${c.map(n=>a`
              <p style="margin: ${t&&!i&&r===3?`0.75rem`:`0`} 0 0; color: #991b1b !important;">
                <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.theme}</code> theme +
                <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${n.scheme}</code> ${n.label}
                <span style="display: block; margin-top: 0.25rem; opacity: 0.85;">
                  <strong style="color: #991b1b !important;">Tier ${n.tier}:</strong> Lacks the hover/pressed steps an interactive CTA needs. Only Tier 1 is valid here.
                </span>
              </p>
            `)}
        </div>
      `:a`
      <mms-hero
        variant=${e.variant}
        surface=${e.surface}
        container=${e.container}
        padding=${e.padding}
        eyebrow=${e.eyebrow}
        accent-color-scheme=${e.accentColorScheme}
        heading=${e.heading}
        heading-level=${e.headingLevel}
        heading-size=${e.headingSize}
        body=${e.body}
        data-density=${e.density}
        media-height=${e.mediaHeight}
        roundness=${e.roundness}
        organic-variant=${h(e.roundness===`organic`&&e.organicVariant!==`random`?e.organicVariant:void 0)}
        content-align=${e.contentAlign}
      >
        ${e.ctaCount>=1?a`<mms-button
              slot="cta"
              label=${e.cta1Label}
              variant=${e.cta1Variant}
              color-scheme=${e.cta1ColorScheme}
              roundness=${e.ctaRoundness}
            ></mms-button>`:n}
        ${e.ctaCount>=2?a`<mms-button
              slot="cta"
              label=${e.cta2Label}
              variant=${e.cta2Variant}
              color-scheme=${e.cta2ColorScheme}
              roundness=${e.ctaRoundness}
            ></mms-button>`:n}
        ${e.variant===`no-media`?n:e.mediaImage&&I[e.mediaImage]?a`<img
                slot="media"
                src="${I[e.mediaImage].url}"
                alt="${I[e.mediaImage].alt}"
              />`:a`<div slot="media" style="width: 100%; height: 100%; background: linear-gradient(135deg, #6366f1, #22d3ee);"></div>`}
      </mms-hero>
    `}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Hero</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A full-width marketing section introducing a page or campaign — brand-color fill,
        optional eyebrow, heading, body text, and a CTA slot. Use
        <code style="\${t.monoSm}">mms-hero-image</code> instead when the hero needs a
        background photo.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Variant</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">no-media</code> (default) renders text only, no media column.
        <code style="\${t.monoSm}">inset</code> and <code style="\${t.monoSm}">half-and-half</code>
        both split the row 50/50 from 768px up — text content in one half, the
        <code style="\${t.monoSm}">media</code> slot in the other (mirroring mms-card's own
        <code style="\${t.monoSm}">showMedia</code>/<code style="\${t.monoSm}">media</code> pair,
        just collapsed into this one prop rather than kept as a separate boolean). They differ
        only in how the image half itself renders: <code style="\${t.monoSm}">inset</code> keeps
        it inside the same padded box as the text; <code style="\${t.monoSm}">half-and-half</code>
        bleeds it past that padding on every edge but the one facing the text — a literal,
        unpadded 50%. Below 768px, or whenever
        <code style="\${t.monoSm}">no-media</code> is set, media stacks as a normal block below
        the text rather than being hidden.
      </p>
      \${demoWrap(html\`
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <mms-hero variant="inset" heading="Inset image" body="Image shares the text's own padding.">
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=\${mediaImageMap['team-collaboration'].url} alt=\${mediaImageMap['team-collaboration'].alt} />
          </mms-hero>
          <mms-hero
            variant="half-and-half"
            heading="Half-and-half image"
            body="Image bleeds to a literal, unpadded 50%."
          >
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=\${mediaImageMap['team-collaboration'].url} alt=\${mediaImageMap['team-collaboration'].alt} />
          </mms-hero>
        </div>
      \`)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Surface</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">surface</code> accepts <code style="\${t.monoSm}">solid</code>
        (default — a flat white/near-black fill, theme-adaptive), <code style="\${t.monoSm}">tint</code>
        (neutral, subtly shaded), <code style="\${t.monoSm}">primary</code>, <code style="\${t.monoSm}">secondary</code>,
        or <code style="\${t.monoSm}">onyx</code> — the same brand fills as mms-button/mms-card,
        minus <code style="\${t.monoSm}">accent</code> (no scenario where a hero's entire panel is
        the decorative accent hue). <code style="\${t.monoSm}">solid</code>/<code style="\${t.monoSm}">tint</code>
        reuse mms-card's own neutral surface pair (same naming — not <code style="\${t.monoSm}">white</code>,
        since it isn't white in dark mode) and are never tier-gated.
      </p>

      <div style="background: rgba(234, 179, 8, 0.08); border-left: 3px solid #EAB308; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Tier availability.</strong> Applies only to the three brand fills — the
          heading/body/eyebrow sit directly on them, so <strong>Tier 3</strong> (decorative-only)
          palettes are blocked for <code style="\${t.monoSm}">primary</code>/<code style="\${t.monoSm}">secondary</code>/<code style="\${t.monoSm}">onyx</code>
          (Tier 1 and Tier 2 are both fine). <code style="\${t.monoSm}">solid</code>/<code style="\${t.monoSm}">tint</code>
          are structural neutrals and always valid, in every theme. See
          <em>Foundations → Color Framework → Color Tiering</em>.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        \${demoWrap(html\`<mms-hero surface="solid" heading="Solid surface" body="Flat white/near-black fill — the default."></mms-hero>\`)}
        \${demoWrap(html\`<mms-hero surface="tint" heading="Tint surface" body="Neutral, subtly shaded fill."></mms-hero>\`)}
        <mms-hero surface="primary" heading="Primary surface" body="Brand fill."></mms-hero>
        <mms-hero surface="secondary" heading="Secondary surface" body="Brand fill."></mms-hero>
        <mms-hero surface="onyx" heading="Onyx surface" body="Brand fill."></mms-hero>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Padding</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">padding</code> tightens or loosens the content panel's
        block (top/bottom) padding only — its inline padding is a separate, breakpoint-driven
        layout concern. Independent of the global <code style="\${t.monoSm}">density</code>
        prop, which has no effect on mms-hero.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem;">
        <div>
          <p style="\${t.h3}">Small</p>
          \${demoWrap(html\`<mms-hero padding="sm" heading="Small padding" body="Tightest block padding."></mms-hero>\`)}
        </div>
        <div>
          <p style="\${t.h3}">Medium (default)</p>
          \${demoWrap(html\`<mms-hero padding="md" heading="Medium padding" body="Standard block padding."></mms-hero>\`)}
        </div>
        <div>
          <p style="\${t.h3}">Large</p>
          \${demoWrap(html\`<mms-hero padding="lg" heading="Large padding" body="Loosest block padding."></mms-hero>\`)}
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Container</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">container</code> mirrors mms-header/mms-footer exactly:
        <code style="\${t.monoSm}">content</code> (default) caps and centers the content panel
        to match page content beneath; <code style="\${t.monoSm}">full</code> removes the cap —
        edge-to-edge.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Media height</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">media-height</code> sets the image's aspect ratio: default
        (16:9, the inherent behavior) or <code style="\${t.monoSm}">short</code> (21:9). Effective
        under <code style="\${t.monoSm}">inset</code> at any width; under
        <code style="\${t.monoSm}">half-and-half</code>, only below the 768px row step — at and
        above it the image is always full-bleed and fills whatever height the text needs, so
        this has no effect there. Has <strong>no visible effect</strong> when
        <code style="\${t.monoSm}">roundness="organic"</code> either (see Media roundness below) —
        organic fixes both width and height to the padded content box, leaving no room for an
        aspect ratio to apply.
      </p>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        \${demoWrap(html\`
          <mms-hero variant="inset" heading="Default (16:9)" body="The inherent image ratio.">
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=\${mediaImageMap['team-collaboration'].url} alt=\${mediaImageMap['team-collaboration'].alt} />
          </mms-hero>
        \`)}
        \${demoWrap(html\`
          <mms-hero variant="inset" media-height="short" heading="Short (21:9)" body="A wider, shallower crop.">
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=\${mediaImageMap['team-collaboration'].url} alt=\${mediaImageMap['team-collaboration'].alt} />
          </mms-hero>
        \`)}
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Media roundness</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">roundness</code> sets the image container's corner treatment,
        effective only under <code style="\${t.monoSm}">inset</code> (<code style="\${t.monoSm}">half-and-half</code>
        is always square-cornered/full-bleed regardless): <code style="\${t.monoSm}">boxed</code>
        (0 — sharp corners), <code style="\${t.monoSm}">subtle</code> (default, 8px),
        <code style="\${t.monoSm}">rounded</code> (asymmetric — top-left/bottom-right are the two
        accent corners, top-right/bottom-left stay at subtle's 8px), or
        <code style="\${t.monoSm}">organic</code> (a freeform irregular crop via
        <code style="\${t.monoSm}">clip-path</code>, not a radius at all).
      </p>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
        \${demoWrap(html\`
          <mms-hero variant="inset" roundness="boxed" heading="Boxed" body="Sharp corners, no radius.">
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=\${mediaImageMap['team-collaboration'].url} alt=\${mediaImageMap['team-collaboration'].alt} />
          </mms-hero>
        \`)}
        \${demoWrap(html\`
          <mms-hero variant="inset" roundness="subtle" heading="Subtle (default)" body="8px radius on every corner.">
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=\${mediaImageMap['team-collaboration'].url} alt=\${mediaImageMap['team-collaboration'].alt} />
          </mms-hero>
        \`)}
        \${demoWrap(html\`
          <mms-hero variant="inset" roundness="rounded" heading="Rounded" body="Asymmetric accent corners.">
            <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
            <img slot="media" src=\${mediaImageMap['team-collaboration'].url} alt=\${mediaImageMap['team-collaboration'].alt} />
          </mms-hero>
        \`)}
      </div>

      <h3 style="\${t.h3}">Organic shapes</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        4 fixed, locked silhouettes (<code style="\${t.monoSm}">organic-variant</code> 0–3). Left
        unset, one is picked at random when the hero is created and held stable for its lifetime;
        pin a specific number — shown below — to review or reproduce one exactly.
      </p>
      <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem;">
        \${[{
    heading: 'Built for your team',
    body: 'Collaborate from anywhere.'
  }, {
    heading: 'Work your way',
    body: 'Flexible tools for flexible teams.'
  }, {
    heading: 'Stay connected',
    body: 'Keep every project moving.'
  }, {
    heading: 'Grow together',
    body: 'Support that scales with you.'
  }].map((copy, v) => html\`
            <div>
              <p style="\${t.h3}">Variant \${v}</p>
              \${demoWrap(html\`
                <mms-hero variant="inset" roundness="organic" organic-variant="\${v}" heading="\${copy.heading}" body="\${copy.body}">
                  <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
                  <img slot="media" src=\${mediaImageMap['team-collaboration'].url} alt=\${mediaImageMap['team-collaboration'].alt} />
                </mms-hero>
              \`)}
            </div>
          \`)}
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Content align</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">content-align</code> sets the text column's vertical alignment
        against the media column, effective only under <code style="\${t.monoSm}">inset</code> at
        the 768px+ row layout: <code style="\${t.monoSm}">top</code> (default) or
        <code style="\${t.monoSm}">middle</code>. Only visible when one column is taller than the
        other — e.g. a short heading next to a tall image, shown below. No effect under
        <code style="\${t.monoSm}">half-and-half</code> or below 768px.
      </p>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        \${demoWrap(html\`
          <mms-hero variant="inset" heading="Top (default)">
            <img slot="media" src=\${mediaImageMap['team-collaboration'].url} alt=\${mediaImageMap['team-collaboration'].alt} />
          </mms-hero>
        \`)}
        \${demoWrap(html\`
          <mms-hero variant="inset" content-align="middle" heading="Middle">
            <img slot="media" src=\${mediaImageMap['team-collaboration'].url} alt=\${mediaImageMap['team-collaboration'].alt} />
          </mms-hero>
        \`)}
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Eyebrow</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">eyebrow</code> is an optional uppercase label above the heading,
        with an accent underline. <code style="\${t.monoSm}">accent-color-scheme</code> sets that
        underline's color only — not the eyebrow text, which always stays on the surface's own
        text color for contrast. Default <code style="\${t.monoSm}">onyx</code> (structural); an
        explicit <code style="\${t.monoSm}">primary</code>/<code style="\${t.monoSm}">secondary</code>/<code style="\${t.monoSm}">accent</code>
        reads that palette's base step regardless of its tier classification — intentionally
        <strong>not</strong> tier-gated, since a line with no text of its own has no contrast
        requirement a Tier 3 (decorative) palette would fail.
      </p>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        \${demoWrap(html\`<mms-hero eyebrow="Default underline" heading="Onyx (default)"></mms-hero>\`)}
        \${demoWrap(html\`<mms-hero eyebrow="Branded underline" accent-color-scheme="accent" heading="Accent scheme"></mms-hero>\`)}
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">CTA</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">cta</code> slot is not restricted to buttons. It's a
        plain, unstyled slot — no <code style="\${t.monoSm}">::slotted</code> rules target it —
        laid out as a wrapping flex row with a 20px gap. It accepts any number of any element.
        <code style="\${t.monoSm}">mms-button</code> is the common case and what the Playground
        story's controls demo, but <code style="\${t.monoSm}">mms-link</code> or any other
        element works identically, as shown below.
      </p>
      \${demoWrap(html\`
        <mms-hero heading="Mixed CTA slot" body="A button and a link, side by side.">
          <mms-button slot="cta" label="Get started" variant="primary"></mms-button>
          <mms-link slot="cta" label="Learn about eligibility" href="#"></mms-link>
        </mms-hero>
      \`)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Heading level &amp; size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">heading-level</code> sets the semantic heading element
        (<code style="\${t.monoSm}">h1</code>–<code style="\${t.monoSm}">h6</code>), default
        <code style="\${t.monoSm}">1</code> — document outline and assistive tech only.
        <code style="\${t.monoSm}">heading-size</code> is a separate, independent axis for the
        <em>visual</em> size — a hero doesn't always have to be the page's own <code style="\${t.monoSm}">h1</code>
        to read at full marketing-headline size, or vice versa.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Pick <code style="\${t.monoSm}">heading-size</code> by what this hero actually is in the
        page's outline — the same judgment call as sizing any other heading — not by which
        one looks best in isolation. Maps directly to the typographic framework's own defined
        usage (<em>Foundations → Typography → Typographic Framework</em>):
      </p>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><code style="\${t.monoSm}">1</code> (default, ~40px/32px) — <strong>Page title.</strong> This hero IS the page's own title.</li>
        <li style="margin-bottom: 0.5rem;"><code style="\${t.monoSm}">2</code> (~32px/24px) — <strong>Major section.</strong> This hero introduces a section within a page, not the whole page.</li>
        <li><code style="\${t.monoSm}">3</code> (~24px/20px) — <strong>Subsection.</strong></li>
      </ul>
      \${demoWrap(html\`
        <mms-hero heading="A section intro, not the page title" heading-level="2" heading-size="2" body="heading-level=2 (real h2 tag) and heading-size=2 (major-section scale) — the common case: both axes usually agree."></mms-hero>
      \`)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          The content panel is marked <code style="\${t.monoSm}">role="region"</code> with
          <code style="\${t.monoSm}">aria-roledescription="hero"</code> and
          <code style="\${t.monoSm}">aria-label</code> set to the heading text, so assistive
          tech can jump directly to it as a landmark.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['hero'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> Announced as a region named after the heading text.</li>
        <li><strong>Reading order:</strong> Eyebrow, heading, body, then the <code style="\${t.monoSm}">cta</code> slot's contents — normal document flow.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard Navigation</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        mms-hero itself is not focusable. Slotted CTA buttons follow their own focus/activation
        model (Tab to focus, Enter/Space to activate).
      </p>

    </div>
  \`
}`,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    viewport: '768',
    surface: 'solid',
    variant: 'no-media',
    container: 'content',
    padding: 'md',
    eyebrow: 'Eyebrow label',
    accentColorScheme: 'onyx',
    heading: 'Hero heading',
    headingLevel: 1,
    headingSize: '1',
    body: 'Supporting body text that introduces the page or campaign in a sentence or two.',
    mediaImage: '',
    mediaHeight: 'default',
    roundness: 'subtle',
    organicVariant: 'random',
    contentAlign: 'top',
    ctaCount: 1,
    cta1Label: 'Get started',
    cta1Variant: 'primary',
    cta1ColorScheme: 'primary',
    cta2Label: 'Learn more',
    cta2Variant: 'secondary',
    cta2ColorScheme: 'primary',
    ctaRoundness: 'subtle',
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown, ctx: {
    args: {
      viewport?: string;
    };
  }) => {
    const w = previewWidth(ctx.args.viewport);
    return html\`
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-lg2); overflow-x: auto;">
          <div style="width: \${w}; margin-inline: auto;">\${story()}</div>
        </div>
      \`;
  }],
  argTypes: {
    viewport: {
      name: 'Viewport (simulated)',
      control: 'select',
      options: ['400', '768', '1240', '1440', 'fill'],
      description: 'Not a component prop — a story control that constrains the preview width so responsive behavior can be seen without resizing the browser. \`fill\` hands the width back to the canvas.',
      table: {
        category: 'Demo Controls'
      }
    },
    surface: {
      name: 'Surface',
      control: 'select',
      options: ['solid', 'tint', 'primary', 'secondary', 'onyx'],
      description: 'Fill. solid/tint are neutral and always valid; primary/secondary/onyx are brand fills — Tier 3 (decorative-only) palettes are blocked under the active theme.',
      table: {
        category: 'Visual'
      }
    },
    variant: {
      name: 'Variant',
      control: 'select',
      options: ['no-media', 'inset', 'half-and-half'],
      description: 'no-media (default) — text only. inset/half-and-half show the media slot, 50/50 split at 768px+: inset keeps the image inside the text\\'s own padding; half-and-half bleeds it to a literal, unpadded 50%.',
      table: {
        category: 'Visual'
      }
    },
    mediaImage: {
      name: 'Media image',
      control: 'select',
      options: mediaImageOptions,
      description: 'Storybook demo control only — swaps in a curated stock photo so you can preview the media slot at real proportions. Not a real mms-hero prop: consumers slot their own &lt;img&gt; or media markup into the media slot.',
      table: {
        category: 'Visual'
      },
      if: {
        arg: 'variant',
        neq: 'no-media'
      }
    },
    mediaHeight: {
      name: 'Media height',
      control: 'select',
      options: ['default', 'short'],
      description: 'Effective under inset at any width. Under half-and-half, only below the 768px step — at/above it the image is always full-bleed and fills whatever height the text needs, so this has no effect there. Also has no visible effect when Media roundness is organic — organic fixes both width and height to the padded content box, leaving no room for an aspect ratio to apply. Same values as mms-card\\u2019s mediaHeight.',
      table: {
        category: 'Visual'
      },
      if: {
        arg: 'variant',
        neq: 'no-media'
      }
    },
    roundness: {
      name: 'Media roundness',
      control: 'select',
      options: ['boxed', 'subtle', 'rounded', 'organic'],
      description: 'Corner radius of the image container. rounded is asymmetric — top-left/bottom-right are the two accent corners (large), top-right/bottom-left stay at subtle\\u2019s 8px. organic is a freeform irregular crop via clip-path, not a radius — 4 fixed silhouettes, randomly picked unless pinned via the organic-variant attribute — and overrides Media height (see above). Effective only under inset — half-and-half is always square-cornered (full bleed).',
      table: {
        category: 'Visual'
      },
      if: {
        arg: 'variant',
        eq: 'inset'
      }
    },
    organicVariant: {
      name: 'Organic shape',
      control: 'select',
      options: ['random', '0', '1', '2', '3'],
      description: 'Which of the 4 fixed organic blob shapes to render. random (default) picks one when the hero is created and holds it stable; pin a specific number to preview or review that exact shape. Maps to the organic-variant attribute.',
      table: {
        category: 'Visual'
      },
      if: {
        arg: 'roundness',
        eq: 'organic'
      }
    },
    contentAlign: {
      name: 'Content align',
      control: 'select',
      options: ['top', 'middle'],
      description: 'Vertical alignment of the text column against the media column. Only visible when one column is taller than the other (e.g. a short heading next to a tall image) — at equal heights top and middle look identical. No effect under half-and-half or below the 768px row step.',
      table: {
        category: 'Visual'
      },
      if: {
        arg: 'variant',
        eq: 'inset'
      }
    },
    container: {
      name: 'Container',
      control: 'select',
      options: ['content', 'full'],
      description: 'content (default) caps and centers the panel; full removes the cap',
      table: {
        category: 'Layout'
      }
    },
    eyebrow: {
      name: 'Eyebrow',
      control: 'text',
      description: 'Optional label above the heading',
      table: {
        category: 'Content'
      }
    },
    accentColorScheme: {
      name: 'Accent line color',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Color of the eyebrow\\u2019s accent underline only — not the eyebrow text itself. Default onyx — structural, matches today\\u2019s look under solid/tint surfaces. An explicit scheme is read at its base brand step regardless of the active theme\\u2019s tier classification for that color — intentionally not tier-gated, since this line carries no text of its own. Under a brand-fill surface, onyx no longer automatically matches the eyebrow text\\u2019s on-fill color — pick the matching scheme explicitly there.',
      table: {
        category: 'Content'
      }
    },
    heading: {
      name: 'Heading',
      control: 'text',
      description: 'Hero heading text (required)',
      table: {
        category: 'Content'
      }
    },
    headingLevel: {
      name: 'Heading level',
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Semantic heading element — document outline/assistive tech only, does not change the visual size (see Heading size).',
      table: {
        category: 'Content'
      }
    },
    headingSize: {
      name: 'Heading size',
      control: 'select',
      options: ['1', '2', '3'],
      description: 'Visual size only, independent of Heading level. Maps to the typographic framework\\u2019s own defined usage (Foundations \\u2192 Typography \\u2192 Typographic Framework) \\u2014 pick by what this hero actually is in the page, not by eye: 1 (default, ~40px/32px) = Page title (h1), this hero IS the page\\u2019s title. 2 (~32px/24px) = Major section (h2) \\u2014 this hero introduces a section, not the whole page. 3 (~24px/20px) = Subsection (h3).',
      table: {
        category: 'Content'
      }
    },
    body: {
      name: 'Body',
      control: 'text',
      description: 'Optional body/description text',
      table: {
        category: 'Content'
      }
    },
    ctaCount: {
      name: 'Number of buttons',
      control: 'select',
      options: [0, 1, 2],
      description: 'How many CTA buttons to preview — 0 (none), 1, or 2. Demo control only, not a component prop or a real limit: the cta slot accepts any number of any element (see the CTA section above), these controls just demo the common mms-button case.',
      table: {
        category: 'CTA'
      }
    },
    cta1Label: {
      name: 'Button 1 — label',
      control: 'text',
      table: {
        category: 'CTA'
      }
    },
    cta1Variant: {
      name: 'Button 1 — style',
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      table: {
        category: 'CTA'
      }
    },
    cta1ColorScheme: {
      name: 'Button 1 — color scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      table: {
        category: 'CTA'
      }
    },
    cta2Label: {
      name: 'Button 2 — label',
      control: 'text',
      description: 'Ignored when Number of buttons is 0 or 1',
      table: {
        category: 'CTA'
      }
    },
    cta2Variant: {
      name: 'Button 2 — style',
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Ignored when Number of buttons is 0 or 1',
      table: {
        category: 'CTA'
      }
    },
    cta2ColorScheme: {
      name: 'Button 2 — color scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Ignored when Number of buttons is 0 or 1',
      table: {
        category: 'CTA'
      }
    },
    ctaRoundness: {
      name: 'Button roundness',
      control: 'select',
      options: ['boxed', 'subtle', 'rounded'],
      description: 'Storybook demo control only — not a real mms-hero prop. mms-button\\u2019s own roundness is set independently on that element; this control exists so you can preview it alongside Media roundness to see how the two pair visually.',
      table: {
        category: 'CTA'
      }
    },
    padding: {
      name: 'Padding',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Block (top/bottom) padding — independent of the global density prop, which has no effect on mms-hero.',
      table: {
        category: 'Layout'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Global prop — currently has no visual effect on mms-hero (see Padding, a separate Hero-specific axis).',
      table: {
        category: 'Global Props'
      }
    },
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
      description: 'Brand theme',
      table: {
        category: 'Global Props'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string | number | boolean>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.variant && a.variant !== 'no-media') attrs.push(\`variant="\${a.variant}"\`);
          if (a.surface && a.surface !== 'solid') attrs.push(\`surface="\${a.surface}"\`);
          if (a.container && a.container !== 'content') attrs.push(\`container="\${a.container}"\`);
          if (a.padding && a.padding !== 'md') attrs.push(\`padding="\${a.padding}"\`);
          if (a.eyebrow) attrs.push(\`eyebrow="\${a.eyebrow}"\`);
          if (a.eyebrow && a.accentColorScheme && a.accentColorScheme !== 'onyx') attrs.push(\`accent-color-scheme="\${a.accentColorScheme}"\`);
          if (a.heading) attrs.push(\`heading="\${a.heading}"\`);
          if (a.headingLevel && a.headingLevel !== 1) attrs.push(\`heading-level="\${a.headingLevel}"\`);
          if (a.headingSize && a.headingSize !== '1') attrs.push(\`heading-size="\${a.headingSize}"\`);
          if (a.body) attrs.push(\`body="\${a.body}"\`);
          if (a.density && a.density !== 'default') attrs.push(\`data-density="\${a.density}"\`);
          if (a.variant !== 'no-media' && a.mediaHeight && a.mediaHeight !== 'default') attrs.push(\`media-height="\${a.mediaHeight}"\`);
          if (a.variant === 'inset' && a.roundness && a.roundness !== 'subtle') attrs.push(\`roundness="\${a.roundness}"\`);
          if (a.variant === 'inset' && a.roundness === 'organic' && a.organicVariant && a.organicVariant !== 'random') attrs.push(\`organic-variant="\${a.organicVariant}"\`);
          if (a.variant === 'inset' && a.contentAlign && a.contentAlign !== 'top') attrs.push(\`content-align="\${a.contentAlign}"\`);
          const ctaCount = Number(a.ctaCount ?? 1);
          const buttons: string[] = [];
          if (ctaCount >= 1) {
            buttons.push(\`  <mms-button slot="cta" label="\${a.cta1Label}" variant="\${a.cta1Variant}" color-scheme="\${a.cta1ColorScheme}"\${a.ctaRoundness && a.ctaRoundness !== 'subtle' ? \` roundness="\${a.ctaRoundness}"\` : ''}></mms-button>\`);
          }
          if (ctaCount >= 2) {
            buttons.push(\`  <mms-button slot="cta" label="\${a.cta2Label}" variant="\${a.cta2Variant}" color-scheme="\${a.cta2ColorScheme}"\${a.ctaRoundness && a.ctaRoundness !== 'subtle' ? \` roundness="\${a.ctaRoundness}"\` : ''}></mms-button>\`);
          }
          if (a.variant !== 'no-media') {
            const img = mediaImageMap[a.mediaImage as string];
            buttons.push(img ? \`  <img slot="media" src="\${img.url}" alt="\${img.alt}" />\` : \`  <div slot="media">...</div>\`);
          }
          return \`<mms-hero\\n  \${attrs.join('\\n  ')}\\n>\\n\${buttons.join('\\n')}\\n</mms-hero>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none'
    }
  },
  render: (args: {
    variant: string;
    surface: string;
    container: string;
    padding: string;
    eyebrow: string;
    accentColorScheme: string;
    heading: string;
    headingLevel: number;
    headingSize: string;
    body: string;
    mediaImage: string;
    mediaHeight: string;
    roundness: string;
    organicVariant: string;
    contentAlign: string;
    ctaCount: number;
    cta1Label: string;
    cta1Variant: string;
    cta1ColorScheme: string;
    cta2Label: string;
    cta2Variant: string;
    cta2ColorScheme: string;
    ctaRoundness: string;
    theme: string;
    density: string;
  }) => {
    // The heading/body sit directly on the surface fill, but only for the
    // three brand fills — solid/tint are structural neutrals and never
    // tier-gated. surface blocks Tier 3 only (text still has some contrast
    // on Tier 2); CTA below blocks anything non-Tier-1, since an interactive
    // button needs the hover/pressed steps only Tier 1 palettes have —
    // mirrors mms-button's own validateColorScheme, which only re-checks on
    // connect, not on every live control change, so this is what actually
    // gives this story immediate feedback as the control changes.
    const isBrandSurface = (BRAND_SURFACES as readonly string[]).includes(args.surface);
    const surfaceTier = isBrandSurface ? getPaletteTier(args.theme as Theme, args.surface as ColorScheme) : 1;
    const surfaceValid = isBrandSurface ? isValidColorScheme(args.theme as Theme, args.surface as ColorScheme) : true;
    const BRAND_CTA_SCHEMES = ['primary', 'secondary', 'accent'] as const; // onyx is structural, always Tier 1
    const ctaTier = (scheme: string) => (BRAND_CTA_SCHEMES as readonly string[]).includes(scheme) ? getPaletteTier(args.theme as Theme, scheme as ColorScheme) : 1;
    const ctaViolations: {
      label: string;
      scheme: string;
      tier: number;
    }[] = [];
    if (args.ctaCount >= 1 && ctaTier(args.cta1ColorScheme) !== 1) {
      ctaViolations.push({
        label: 'Button 1',
        scheme: args.cta1ColorScheme,
        tier: ctaTier(args.cta1ColorScheme)
      });
    }
    if (args.ctaCount >= 2 && ctaTier(args.cta2ColorScheme) !== 1) {
      ctaViolations.push({
        label: 'Button 2',
        scheme: args.cta2ColorScheme,
        tier: ctaTier(args.cta2ColorScheme)
      });
    }
    if (isBrandSurface && !surfaceValid && surfaceTier === 3 || ctaViolations.length > 0) {
      return html\`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 440px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem; color: #991b1b !important;">Invalid combination</strong>
          \${isBrandSurface && !surfaceValid && surfaceTier === 3 ? html\`
                <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.theme}</code> theme +
                <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.surface}</code> surface
                <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
                  <strong style="color: #991b1b !important;">Tier 3 (Decorative):</strong> Lacks text contrast. Not safe for the hero's heading/body text.
                </p>
              \` : nothing}
          \${ctaViolations.map(v => html\`
              <p style="margin: \${isBrandSurface && !surfaceValid && surfaceTier === 3 ? '0.75rem' : '0'} 0 0; color: #991b1b !important;">
                <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.theme}</code> theme +
                <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${v.scheme}</code> \${v.label}
                <span style="display: block; margin-top: 0.25rem; opacity: 0.85;">
                  <strong style="color: #991b1b !important;">Tier \${v.tier}:</strong> Lacks the hover/pressed steps an interactive CTA needs. Only Tier 1 is valid here.
                </span>
              </p>
            \`)}
        </div>
      \`;
    }
    return html\`
      <mms-hero
        variant=\${args.variant}
        surface=\${args.surface}
        container=\${args.container}
        padding=\${args.padding}
        eyebrow=\${args.eyebrow}
        accent-color-scheme=\${args.accentColorScheme}
        heading=\${args.heading}
        heading-level=\${args.headingLevel}
        heading-size=\${args.headingSize}
        body=\${args.body}
        data-density=\${args.density}
        media-height=\${args.mediaHeight}
        roundness=\${args.roundness}
        organic-variant=\${ifDefined(args.roundness === 'organic' && args.organicVariant !== 'random' ? args.organicVariant : undefined)}
        content-align=\${args.contentAlign}
      >
        \${args.ctaCount >= 1 ? html\`<mms-button
              slot="cta"
              label=\${args.cta1Label}
              variant=\${args.cta1Variant}
              color-scheme=\${args.cta1ColorScheme}
              roundness=\${args.ctaRoundness}
            ></mms-button>\` : nothing}
        \${args.ctaCount >= 2 ? html\`<mms-button
              slot="cta"
              label=\${args.cta2Label}
              variant=\${args.cta2Variant}
              color-scheme=\${args.cta2ColorScheme}
              roundness=\${args.ctaRoundness}
            ></mms-button>\` : nothing}
        \${args.variant !== 'no-media' ? args.mediaImage && mediaImageMap[args.mediaImage] ? html\`<img
                slot="media"
                src="\${mediaImageMap[args.mediaImage].url}"
                alt="\${mediaImageMap[args.mediaImage].alt}"
              />\` : html\`<div slot="media" style="width: 100%; height: 100%; background: linear-gradient(135deg, #6366f1, #22d3ee);"></div>\` : nothing}
      </mms-hero>
    \`;
  }
}`,...B.parameters?.docs?.source}}},V=[`Overview`,`PlaygroundStory`]}));H();export{R as Overview,B as PlaygroundStory,V as __namedExportsOrder,j as default,H as n,k as t};