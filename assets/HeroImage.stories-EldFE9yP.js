import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,s as d,t as f}from"./decorate-Bygya6Tu.js";import{n as p}from"./iframe-DSDTSjSG.js";import{n as m,r as h}from"./theme-constraints-BnNpJNRe.js";import{a as g,o as _,r as v,t as y}from"./a11y-outcome-cKjMdYHr.js";var b,x=e((()=>{o(),u(),l(),b=class extends i{constructor(...e){super(...e),this.src=``,this.alt=``,this.scrim=`dark`,this.container=`content`,this.eyebrow=``,this.accentColorScheme=`onyx`,this.heading=``,this.headingLevel=1,this.headingSize=`1`,this.body=``,this.padding=`md`,this.density=`default`,this.minHeight=!1,this.contentAlign=`top`,this._hasCta=!1}connectedCallback(){super.connectedCallback(),this._syncForcedMode(),this._observeAmbientTheme()}disconnectedCallback(){super.disconnectedCallback(),this._themeObserver?.disconnect()}updated(e){e.has(`scrim`)&&this._syncForcedMode()}_syncForcedMode(){let e=(this.parentElement?.closest(`[data-theme]`))?.getAttribute(`data-theme`);e&&(this.setAttribute(`data-theme`,e),this.setAttribute(`data-mode`,this.scrim===`dark`?`dark`:`light`))}_observeAmbientTheme(){let e=this.parentElement?.closest(`[data-theme]`);e&&(this._themeObserver=new MutationObserver(()=>this._syncForcedMode()),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`data-theme`]}))}_onCtaSlotChange(e){let t=e.target;this._hasCta=t.assignedElements().length>0}_renderHeading(){switch(Math.min(Math.max(this.headingLevel||1,1),6)){case 1:return a`<h1 class="heading">${this.heading}</h1>`;case 2:return a`<h2 class="heading">${this.heading}</h2>`;case 3:return a`<h3 class="heading">${this.heading}</h3>`;case 4:return a`<h4 class="heading">${this.heading}</h4>`;case 5:return a`<h5 class="heading">${this.heading}</h5>`;default:return a`<h6 class="heading">${this.heading}</h6>`}}render(){let e=!this.alt;return a`
      <div
        class="hero-image"
        role="region"
        aria-roledescription="hero"
        aria-label=${this.heading||`Hero`}
      >
        ${this.src?a`
              <img
                class="hero-bg"
                src=${this.src}
                alt=${this.alt}
                aria-hidden=${e?`true`:n}
              />
            `:n}
        <div class="scrim" aria-hidden="true"></div>
        <div class="hero-inner">
          ${this.eyebrow?a`<p class="eyebrow">${this.eyebrow}</p>`:n}
          ${this._renderHeading()}
          ${this.body?a`<p class="body">${this.body}</p>`:n}
          <div class="cta-container" ?hidden=${!this._hasCta}>
            <slot name="cta" @slotchange=${this._onCtaSlotChange}></slot>
          </div>
        </div>
      </div>
    `}static{this.styles=[r`
      :host {
        display: block;
        width: 100%;
        position: relative;
        overflow: hidden;
        container-type: inline-size;
        container-name: mms-hero-image;

        /* Fixed — never swapped by [data-mode="dark"]. See doc comment above.
           --mms-hero-image-scrim lets a consumer override the color+opacity
           outright (see that @cssprop's doc comment) instead of just the token. */
        --_scrim-bg: var(--mms-hero-image-scrim, var(--color-overlay-scrim));
        --_scrim-text: var(--color-text-on-emphasis);
      }

      :host([scrim='light']) {
        --_scrim-bg: var(--mms-hero-image-scrim, var(--color-overlay-scrim-light));
        --_scrim-text: var(--color-text-on-muted);
      }

      /* headingSize is a visual-only axis, deliberately decoupled from
         headingLevel's semantic one (see that @prop's doc comment) — same
         pattern as mms-hero's identical prop. */
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

      /* No fixed min-height by default — same as Marina's ds-hero-image
         reference ("hero height is driven by content — no fixed
         min-height"). .hero-bg/.scrim are both absolutely positioned
         (inset: 0), so neither contributes to this element's size; only
         .hero-inner, the one child left in normal flow, does. Height is
         therefore always exactly padding-block (--_block-pad, the same
         predefined sm/md/lg scale .hero-inner's padding-block already
         uses) + the content's own natural height — so a longer body simply
         adds its line-height, nothing clips and nothing jumps to fill an
         arbitrary floor. align-items is top (flex-start), matching
         mms-hero's own content-align default — inconsequential here unless
         minHeight (below, 768px+ only) creates slack to align within. */
      .hero-image {
        position: relative;
        width: 100%;
        display: flex;
        align-items: flex-start;
      }

      .hero-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .scrim {
        position: absolute;
        inset: 0;
        z-index: 1;
        background: var(--_scrim-bg);
      }

      .hero-inner {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-sm2);
        max-width: var(--mms-hero-image-content-max-width, var(--layout-content-max-width));
        width: 100%;
        margin-inline: auto;
        padding-inline: var(--mms-hero-image-inline-padding, var(--layout-inline-padding-compact));
        --_block-pad: var(--spacing-lg2); /* padding="md" (default), stacked */
        padding-block: var(--_block-pad);
        box-sizing: border-box;
      }

      /* Block padding only — inline padding is the breakpoint-driven layout
         concern above, a separate axis from padding. Same token values as
         mms-hero's identical prop. */
      :host([padding='sm']) .hero-inner {
        --_block-pad: var(--spacing-md2);
      }

      :host([padding='lg']) .hero-inner {
        --_block-pad: var(--spacing-xl2);
      }

      :host([container='full']) {
        --mms-hero-image-content-max-width: none;
      }

      @container mms-hero-image (min-width: 768px) {
        .hero-inner {
          padding-inline: var(--mms-hero-image-inline-padding, var(--layout-inline-padding-default));
          --_block-pad: var(--spacing-xl1); /* padding="md" (default), row */
        }

        :host([padding='sm']) .hero-inner {
          --_block-pad: var(--spacing-lg2);
        }

        :host([padding='lg']) .hero-inner {
          --_block-pad: var(--spacing-xl3);
        }

        /* min-height/content-align are row-mode (768px+) only — below the
           step, a forced-tall hero with centered text reads like an error
           state on a narrow screen, and stacked layout already lets photo
           + text share space naturally without a floor. The 400px fallback
           is a deliberate, named default (a typical full-bleed-hero
           minimum), not a hidden magic number — override
           --mms-hero-image-min-height for a different floor. */
        :host([min-height]) .hero-image {
          min-height: var(--mms-hero-image-min-height, 400px);
        }

        /* contentAlign: only visible once min-height (above) creates slack
           between the container's floor and the text's own natural height —
           same "no effect at equal heights" reasoning as mms-hero's identical
           prop. top is the shared base rule; these override middle/bottom.
           bottom restores this component's own pre-minHeight look (align-items
           was flex-end before minHeight existed to give it anything to do). */
        :host([min-height][content-align='middle']) .hero-image {
          align-items: center;
        }

        :host([min-height][content-align='bottom']) .hero-image {
          align-items: flex-end;
        }
      }

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
        color: var(--_scrim-text);
        padding-bottom: var(--spacing-xs2);
        /* border-bottom-color split out from the shorthand (not width/style)
           so accentColorScheme's primary/secondary/accent overrides below can
           replace just the underline's color — the label text itself (color,
           above) always stays on the scrim's fixed text color for contrast.
           onyx is accentColorScheme's own default (always reflected, never
           unset), so it's the base color here directly, same pattern as
           mms-hero's identical prop. */
        border-bottom: var(--border-width-md) solid var(--color-onyx-9);
      }

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
        color: var(--_scrim-text);
      }

      .body {
        margin: 0;
        font-family: var(--type-body-lg-family);
        font-size: var(--text-body-lg-size);
        line-height: var(--text-body-lg-line-height);
        color: var(--_scrim-text);
        max-width: var(--text-measure-prose);
      }

      .cta-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
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
    `]}},f([c({type:String})],b.prototype,`src`,void 0),f([c({type:String})],b.prototype,`alt`,void 0),f([c({type:String,reflect:!0})],b.prototype,`scrim`,void 0),f([c({type:String,reflect:!0})],b.prototype,`container`,void 0),f([c({type:String})],b.prototype,`eyebrow`,void 0),f([c({type:String,reflect:!0,attribute:`accent-color-scheme`})],b.prototype,`accentColorScheme`,void 0),f([c({type:String})],b.prototype,`heading`,void 0),f([c({type:Number,attribute:`heading-level`})],b.prototype,`headingLevel`,void 0),f([c({type:String,reflect:!0,attribute:`heading-size`})],b.prototype,`headingSize`,void 0),f([c({type:String})],b.prototype,`body`,void 0),f([c({type:String,reflect:!0})],b.prototype,`padding`,void 0),f([c({type:String,reflect:!0,attribute:`data-density`})],b.prototype,`density`,void 0),f([c({type:Boolean,reflect:!0,attribute:`min-height`})],b.prototype,`minHeight`,void 0),f([c({type:String,reflect:!0,attribute:`content-align`})],b.prototype,`contentAlign`,void 0),f([d()],b.prototype,`_hasCta`,void 0),b=f([s(`mms-hero-image`)],b)})),S=t({Overview:()=>A,PlaygroundStory:()=>j,__namedExportsOrder:()=>M,default:()=>w});function C(e){let t=e??`768`;return t===`fill`?`100%`:`${t}px`}var w,T,E,D,O,k,A,j,M,N=e((()=>{o(),x(),p(),h(),g(),y(),w={title:`Content Display/Hero Image`,tags:[`!autodocs`]},T={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},E=`680px`,D=`960px`,O=[`scenic-landscape`,`community-support`,`parent-and-baby`,`caregiver-support`,`team-collaboration`,`community-outreach`,`support-call`],k={"scenic-landscape":{url:`https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=60`,alt:`A misty mountain valley with a river at sunrise`},"community-support":{url:`https://images.unsplash.com/photo-1604881991720-f91add269bed?w=1600&q=60`,alt:`Two people holding hands across a table in a moment of comfort`},"parent-and-baby":{url:`https://images.unsplash.com/photo-1556566353-cdcb88a69f3c?w=1600&q=60`,alt:`A woman and baby sitting together on a sofa`},"caregiver-support":{url:`https://images.unsplash.com/photo-1543333995-a78aea2eee50?w=1600&q=60`,alt:`A caregiver standing next to a woman using a wheelchair`},"team-collaboration":{url:`https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=1600&q=60`,alt:`Four coworkers smiling together around a laptop at a table`},"community-outreach":{url:`https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?w=1600&q=60`,alt:`An elderly woman in a wheelchair talking with a man`},"support-call":{url:`https://images.unsplash.com/photo-1758876022836-70b89d3e6944?w=1600&q=60`,alt:`A woman talking on the phone at her desk with a laptop`}},A={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${D}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${T.h1}">Hero Image</h1>
      <p style="${T.body} opacity: 0.85; max-width: ${E}; margin-bottom: 2rem;">
        A full-bleed, edge-to-edge marketing hero with a background photo and a text/CTA block
        layered over it. Use <code style="${T.monoSm}">mms-hero</code> instead when the hero
        has no photography.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Basic usage</h2>
      <div style="margin-bottom: 2rem;">
        <mms-hero-image
          src=${k[`scenic-landscape`].url}
          heading="Full-bleed hero"
          body="Background photo with an overlay scrim for text legibility."
        >
          <mms-button slot="cta" label="Get started" variant="primary" color-scheme="onyx"></mms-button>
        </mms-hero-image>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Scrim</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">scrim</code> accepts <code style="${T.monoSm}">dark</code>
        (default — black 70% overlay, white text) or <code style="${T.monoSm}">light</code>
        (white 80% overlay, near-black text). Pick based on the photo's own tonal range —
        this is an authoring choice, independent of the page's light/dark mode. Both hold AA
        contrast (4.5:1+) against a photo of any tone, including the theoretical worst case of
        a pure white/black frame.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${T.bodySm} margin: 0;">
          <strong>Dark mode is not theme-reactive here</strong> — unlike every other mms
          component. The scrim and text colors are fixed, author-chosen tokens
          (<code style="${T.monoSm}">--color-overlay-scrim</code> /
          <code style="${T.monoSm}">--color-overlay-scrim-light</code>), not themed surface
          tokens — there is no "surface" to flip under an arbitrary photo. Legibility comes
          from the scrim, not from reacting to the page's mode.
        </p>
      </div>

      <h3 style="${T.h3}">Customizing the opacity</h3>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1rem;">
        If a specific photo still reads poorly at the default 0.7/0.8 opacity, override
        <code style="${T.monoSm}">--mms-hero-image-scrim</code> with any CSS color — it
        replaces the active <code style="${T.monoSm}">scrim</code> variant's color
        <em>and</em> opacity together, so it can go darker or lighter than the default in
        either direction:
      </p>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${T.monoSm} margin-bottom: 1.5rem;"><code>mms-hero-image {
  /* darker — e.g. a busy or unusually bright photo */
  --mms-hero-image-scrim: rgba(0, 0, 0, 0.95);

  /* lighter — let more of the photo show through */
  --mms-hero-image-scrim: rgba(26, 26, 26, 0.3);
}</code></pre>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
        <mms-hero-image
          src=${k[`scenic-landscape`].url}
          heading="Darkened (0.95)"
          style="--mms-hero-image-scrim: rgba(0, 0, 0, 0.95);"
        ></mms-hero-image>
        <mms-hero-image
          src=${k[`scenic-landscape`].url}
          heading="Lightened (0.3)"
          style="--mms-hero-image-scrim: rgba(26, 26, 26, 0.3);"
        ></mms-hero-image>
      </div>
      <p style="${T.bodySm} opacity: 0.7; max-width: ${E}; margin-bottom: 2rem;">
        Re-check contrast against your own photo's worst-case tone when overriding this — the
        default's AA margin no longer applies once the alpha changes.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Padding</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">padding</code> sets the text block's own block (top/bottom)
        padding — independent of the global <code style="${T.monoSm}">density</code> prop,
        which has no effect on mms-hero-image. Same token values as <code style="${T.monoSm}">mms-hero</code>'s
        identical prop: sm | md (default) | lg.
      </p>
      <div style="margin-bottom: 2rem;">
        <mms-hero-image
          src=${k[`scenic-landscape`].url}
          padding="lg"
          heading="Large padding"
          body="Loosest block padding on the text block."
        ></mms-hero-image>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Container</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 2rem;">
        <code style="${T.monoSm}">container</code> caps the text/CTA block only — the
        background photo is always edge-to-edge, by definition of "full bleed".
        <code style="${T.monoSm}">content</code> (default) caps and centers the text to match
        page content beneath; <code style="${T.monoSm}">full</code> removes the cap.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Min height &amp; content align</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">min-height</code> is off by default — the container is
        always exactly padding + content height, nothing to align within. Turned on, it
        floors the container at <code style="${T.monoSm}">--mms-hero-image-min-height</code>
        (400px unless overridden) for a consistently tall, photography-forward hero
        regardless of how short the text is — content still grows past the floor on longer
        text, same as always. <code style="${T.monoSm}">content-align</code> then positions
        the text within that extra space: <code style="${T.monoSm}">top</code> (default) |
        <code style="${T.monoSm}">middle</code> | <code style="${T.monoSm}">bottom</code>.
        Both are row-mode (768px+) only — below the step, stacked layout already lets photo
        and text share space naturally, so neither has any effect there.
      </p>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-hero-image
          src=${k[`scenic-landscape`].url}
          heading="Top (default)"
          min-height
        ></mms-hero-image>
        <mms-hero-image
          src=${k[`scenic-landscape`].url}
          heading="Middle"
          min-height
          content-align="middle"
        ></mms-hero-image>
        <mms-hero-image
          src=${k[`scenic-landscape`].url}
          heading="Bottom"
          min-height
          content-align="bottom"
        ></mms-hero-image>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Eyebrow</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">eyebrow</code> is an optional uppercase label above the
        heading, with an accent underline. <code style="${T.monoSm}">accent-color-scheme</code>
        sets that underline's color only — not the eyebrow text, which always stays on the
        scrim's fixed text color for contrast. Default <code style="${T.monoSm}">onyx</code>;
        an explicit <code style="${T.monoSm}">primary</code>/<code style="${T.monoSm}">secondary</code>/<code style="${T.monoSm}">accent</code>
        reads that palette's base step regardless of its tier classification — intentionally
        <strong>not</strong> tier-gated, same reasoning as <code style="${T.monoSm}">mms-hero</code>'s
        identical prop.
      </p>
      <div style="margin-bottom: 2rem;">
        <mms-hero-image
          src=${k[`scenic-landscape`].url}
          eyebrow="Branded underline"
          accent-color-scheme="primary"
          heading="Accent scheme"
        ></mms-hero-image>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">CTA</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        The <code style="${T.monoSm}">cta</code> slot is not restricted to buttons. It's a
        plain, unstyled slot — no <code style="${T.monoSm}">::slotted</code> rules target it —
        laid out as a wrapping flex row with a 20px gap. It accepts any number of any element,
        same as <code style="${T.monoSm}">mms-hero</code>'s identical slot.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Heading level &amp; size</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">heading-level</code> sets the semantic heading element
        (<code style="${T.monoSm}">h1</code>–<code style="${T.monoSm}">h6</code>) — document
        outline and assistive tech only. <code style="${T.monoSm}">heading-size</code> is a
        separate, independent axis for the visual size. Maps to the typographic framework's
        own defined usage (<em>Foundations → Typography → Typographic Framework</em>):
      </p>
      <ul style="${T.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><code style="${T.monoSm}">1</code> (default, ~40px/32px) — <strong>Page title.</strong> This hero IS the page's own title.</li>
        <li style="margin-bottom: 0.5rem;"><code style="${T.monoSm}">2</code> (~32px/24px) — <strong>Major section.</strong> This hero introduces a section within a page, not the whole page.</li>
        <li><code style="${T.monoSm}">3</code> (~24px/20px) — <strong>Subsection.</strong></li>
      </ul>
      <div style="margin-bottom: 2rem;">
        <mms-hero-image
          src=${k[`scenic-landscape`].url}
          heading="A section intro, not the page title"
          heading-level="2"
          heading-size="2"
          body="heading-level=2 (real h2 tag) and heading-size=2 (major-section scale) — the common case: both axes usually agree."
        ></mms-hero-image>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Alt text</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 2rem;">
        <code style="${T.monoSm}">alt</code> is empty by default — the image is treated as
        purely decorative and hidden from assistive tech
        (<code style="${T.monoSm}">aria-hidden</code>), since the heading/body already carry
        the hero's meaning. Supply <code style="${T.monoSm}">alt</code> only when the photo
        itself conveys information the text doesn't.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${T.bodySm} margin: 0;">
          The text block is marked <code style="${T.monoSm}">role="region"</code> with
          <code style="${T.monoSm}">aria-roledescription="hero"</code> and
          <code style="${T.monoSm}">aria-label</code> set to the heading text. Both scrim
          choices are contrast-verified against the fixed white/near-black text colors they pair with.
        </p>
      </div>

      <h3 style="${T.h3}">WCAG 2.2 AA Compliance</h3>
      ${v(_[`hero-image`].rows)}

      <h3 style="${T.h3}">Screen Reader Behavior</h3>
      <ul style="${T.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> Announced as a region named after the heading text.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Background photo:</strong> Hidden from assistive tech unless <code style="${T.monoSm}">alt</code> is supplied.</li>
        <li><strong>Reading order:</strong> Eyebrow, heading, body, then the <code style="${T.monoSm}">cta</code> slot's contents — normal document flow.</li>
      </ul>

      <h3 style="${T.h3}">Keyboard Navigation</h3>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 2rem;">
        mms-hero-image itself is not focusable. Slotted CTA buttons follow their own
        focus/activation model (Tab to focus, Enter/Space to activate).
      </p>

    </div>
  `},j={name:`Playground`,tags:[`!dev`],args:{viewport:`768`,mediaImage:`scenic-landscape`,alt:``,scrim:`dark`,container:`content`,padding:`md`,minHeight:!1,contentAlign:`top`,eyebrow:`Eyebrow label`,accentColorScheme:`onyx`,heading:`Hero heading`,headingLevel:1,headingSize:`1`,body:`Supporting body text that introduces the page or campaign in a sentence or two.`,ctaCount:1,cta1Label:`Get started`,cta1Variant:`primary`,cta1ColorScheme:`onyx`,cta2Label:`Learn more`,cta2Variant:`secondary`,cta2ColorScheme:`onyx`,ctaRoundness:`subtle`,theme:`maximus`,density:`default`},decorators:[(e,t)=>a`
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-lg2); overflow-x: auto;">
          <div style="width: ${C(t.args.viewport)}; margin-inline: auto;">${e()}</div>
        </div>
      `],argTypes:{viewport:{name:`Viewport (simulated)`,control:`select`,options:[`400`,`768`,`1240`,`1440`,`fill`],description:"Not a component prop — a story control that constrains the preview width so responsive behavior can be seen without resizing the browser. `fill` hands the width back to the canvas.",table:{category:`Demo Controls`}},mediaImage:{name:`Media image`,control:`select`,options:O,description:`Storybook demo control only — swaps in a curated stock photo. Not a real mms-hero-image prop: consumers supply their own image via the src prop. Same curated set as mms-hero’s own Media image control.`,table:{category:`Visual`}},alt:{name:`Alt text`,control:`text`,description:`Empty (default) treats the image as decorative`,table:{category:`Content`}},scrim:{name:`Scrim`,control:`select`,options:[`dark`,`light`],description:`dark (default, white text) or light (near-black text) overlay`,table:{category:`Visual`}},container:{name:`Container`,control:`select`,options:[`content`,`full`],description:`content (default) caps and centers the text block; full removes the cap`,table:{category:`Layout`}},padding:{name:`Padding`,control:`select`,options:[`sm`,`md`,`lg`],description:`Block (top/bottom) padding on the text block — independent of the global density prop, which has no effect on mms-hero-image.`,table:{category:`Layout`}},minHeight:{name:`Min height`,control:`boolean`,description:`Off (default): the container is always exactly padding + content height. On: floors it at a consistently tall, photography-forward minimum (see Content align below) — row mode (768px+) only, no effect below the step.`,table:{category:`Layout`}},contentAlign:{name:`Content align`,control:`select`,options:[`top`,`middle`,`bottom`],description:`Vertical position of the text block within the container. Only visible when Min height is on at 768px+ — at the default content-driven height there’s no slack to align within.`,table:{category:`Layout`},if:{arg:`minHeight`,truthy:!0}},eyebrow:{name:`Eyebrow`,control:`text`,description:`Optional label above the heading`,table:{category:`Content`}},accentColorScheme:{name:`Accent line color`,control:`select`,options:[`onyx`,`primary`,`secondary`,`accent`],description:`Color of the eyebrow’s accent underline only — not the eyebrow text itself. Default onyx. An explicit scheme is read at its base brand step regardless of the active theme’s tier classification — intentionally not tier-gated, since this line carries no text of its own.`,table:{category:`Content`}},heading:{name:`Heading`,control:`text`,description:`Hero heading text (required)`,table:{category:`Content`}},headingLevel:{name:`Heading level`,control:`select`,options:[1,2,3,4,5,6],description:`Semantic heading element — document outline/assistive tech only, does not change the visual size (see Heading size).`,table:{category:`Content`}},headingSize:{name:`Heading size`,control:`select`,options:[`1`,`2`,`3`],description:`Visual size only, independent of Heading level. Maps to the typographic framework’s own defined usage: 1 (default, ~40px/32px) = Page title (h1). 2 (~32px/24px) = Major section (h2). 3 (~24px/20px) = Subsection (h3).`,table:{category:`Content`}},body:{name:`Body`,control:`text`,description:`Optional body/description text`,table:{category:`Content`}},ctaCount:{name:`Number of buttons`,control:`select`,options:[0,1,2],description:`How many CTA buttons to preview — 0 (none), 1, or 2. Demo control only, not a component prop or a real limit: the cta slot accepts any number of any element, same as mms-hero’s identical slot.`,table:{category:`CTA`}},cta1Label:{name:`Button 1 — label`,control:`text`,table:{category:`CTA`}},cta1Variant:{name:`Button 1 — style`,control:`select`,options:[`primary`,`secondary`,`ghost`],table:{category:`CTA`}},cta1ColorScheme:{name:`Button 1 — color scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],table:{category:`CTA`}},cta2Label:{name:`Button 2 — label`,control:`text`,description:`Ignored when Number of buttons is 0 or 1`,table:{category:`CTA`}},cta2Variant:{name:`Button 2 — style`,control:`select`,options:[`primary`,`secondary`,`ghost`],description:`Ignored when Number of buttons is 0 or 1`,table:{category:`CTA`}},cta2ColorScheme:{name:`Button 2 — color scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Ignored when Number of buttons is 0 or 1`,table:{category:`CTA`}},ctaRoundness:{name:`Button roundness`,control:`select`,options:[`boxed`,`subtle`,`rounded`],description:`Storybook demo control only — not a real mms-hero-image prop. mms-button’s own roundness is set independently on that element.`,table:{category:`CTA`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Global prop — currently has no visual effect on mms-hero-image (see Padding, a separate component-specific axis).`,table:{category:`Global Props`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[`src="${k[n.mediaImage]?.url??``}"`];n.alt&&r.push(`alt="${n.alt}"`),n.scrim&&n.scrim!==`dark`&&r.push(`scrim="${n.scrim}"`),n.container&&n.container!==`content`&&r.push(`container="${n.container}"`),n.padding&&n.padding!==`md`&&r.push(`padding="${n.padding}"`),n.minHeight&&r.push(`min-height`),n.minHeight&&n.contentAlign&&n.contentAlign!==`top`&&r.push(`content-align="${n.contentAlign}"`),n.eyebrow&&r.push(`eyebrow="${n.eyebrow}"`),n.eyebrow&&n.accentColorScheme&&n.accentColorScheme!==`onyx`&&r.push(`accent-color-scheme="${n.accentColorScheme}"`),n.heading&&r.push(`heading="${n.heading}"`),n.headingLevel&&n.headingLevel!==1&&r.push(`heading-level="${n.headingLevel}"`),n.headingSize&&n.headingSize!==`1`&&r.push(`heading-size="${n.headingSize}"`),n.body&&r.push(`body="${n.body}"`),n.density&&n.density!=="default"&&r.push(`data-density="${n.density}"`);let i=Number(n.ctaCount??1),a=[];return i>=1&&a.push(`  <mms-button slot="cta" label="${n.cta1Label}" variant="${n.cta1Variant}" color-scheme="${n.cta1ColorScheme}"${n.ctaRoundness&&n.ctaRoundness!==`subtle`?` roundness="${n.ctaRoundness}"`:``}></mms-button>`),i>=2&&a.push(`  <mms-button slot="cta" label="${n.cta2Label}" variant="${n.cta2Variant}" color-scheme="${n.cta2ColorScheme}"${n.ctaRoundness&&n.ctaRoundness!==`subtle`?` roundness="${n.ctaRoundness}"`:``}></mms-button>`),`<mms-hero-image\n  ${r.join(`
  `)}\n>\n${a.join(`
`)}\n</mms-hero-image>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=[`primary`,`secondary`,`accent`],r=n=>t.includes(n)?m(e.theme,n):1,i=[];return e.ctaCount>=1&&r(e.cta1ColorScheme)!==1&&i.push({label:`Button 1`,scheme:e.cta1ColorScheme,tier:r(e.cta1ColorScheme)}),e.ctaCount>=2&&r(e.cta2ColorScheme)!==1&&i.push({label:`Button 2`,scheme:e.cta2ColorScheme,tier:r(e.cta2ColorScheme)}),i.length>0?a`
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
          ${i.map(t=>a`
              <p style="margin: 0 0 0.5rem; color: #991b1b !important;">
                <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.theme}</code> theme +
                <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${t.scheme}</code> ${t.label}
                <span style="display: block; margin-top: 0.25rem; opacity: 0.85;">
                  <strong style="color: #991b1b !important;">Tier ${t.tier}:</strong> Lacks the hover/pressed steps an interactive CTA needs. Only Tier 1 is valid here.
                </span>
              </p>
            `)}
        </div>
      `:a`
      <mms-hero-image
        src=${k[e.mediaImage]?.url??``}
        alt=${e.alt}
        scrim=${e.scrim}
        container=${e.container}
        padding=${e.padding}
        ?min-height=${e.minHeight}
        content-align=${e.contentAlign}
        eyebrow=${e.eyebrow}
        accent-color-scheme=${e.accentColorScheme}
        heading=${e.heading}
        heading-level=${e.headingLevel}
        heading-size=${e.headingSize}
        body=${e.body}
        data-density=${e.density}
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
      </mms-hero-image>
    `}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Hero Image</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A full-bleed, edge-to-edge marketing hero with a background photo and a text/CTA block
        layered over it. Use <code style="\${t.monoSm}">mms-hero</code> instead when the hero
        has no photography.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <div style="margin-bottom: 2rem;">
        <mms-hero-image
          src=\${mediaImageMap['scenic-landscape'].url}
          heading="Full-bleed hero"
          body="Background photo with an overlay scrim for text legibility."
        >
          <mms-button slot="cta" label="Get started" variant="primary" color-scheme="onyx"></mms-button>
        </mms-hero-image>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Scrim</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">scrim</code> accepts <code style="\${t.monoSm}">dark</code>
        (default — black 70% overlay, white text) or <code style="\${t.monoSm}">light</code>
        (white 80% overlay, near-black text). Pick based on the photo's own tonal range —
        this is an authoring choice, independent of the page's light/dark mode. Both hold AA
        contrast (4.5:1+) against a photo of any tone, including the theoretical worst case of
        a pure white/black frame.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Dark mode is not theme-reactive here</strong> — unlike every other mms
          component. The scrim and text colors are fixed, author-chosen tokens
          (<code style="\${t.monoSm}">--color-overlay-scrim</code> /
          <code style="\${t.monoSm}">--color-overlay-scrim-light</code>), not themed surface
          tokens — there is no "surface" to flip under an arbitrary photo. Legibility comes
          from the scrim, not from reacting to the page's mode.
        </p>
      </div>

      <h3 style="\${t.h3}">Customizing the opacity</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        If a specific photo still reads poorly at the default 0.7/0.8 opacity, override
        <code style="\${t.monoSm}">--mms-hero-image-scrim</code> with any CSS color — it
        replaces the active <code style="\${t.monoSm}">scrim</code> variant's color
        <em>and</em> opacity together, so it can go darker or lighter than the default in
        either direction:
      </p>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm} margin-bottom: 1.5rem;"><code>mms-hero-image {
  /* darker — e.g. a busy or unusually bright photo */
  --mms-hero-image-scrim: rgba(0, 0, 0, 0.95);

  /* lighter — let more of the photo show through */
  --mms-hero-image-scrim: rgba(26, 26, 26, 0.3);
}</code></pre>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
        <mms-hero-image
          src=\${mediaImageMap['scenic-landscape'].url}
          heading="Darkened (0.95)"
          style="--mms-hero-image-scrim: rgba(0, 0, 0, 0.95);"
        ></mms-hero-image>
        <mms-hero-image
          src=\${mediaImageMap['scenic-landscape'].url}
          heading="Lightened (0.3)"
          style="--mms-hero-image-scrim: rgba(26, 26, 26, 0.3);"
        ></mms-hero-image>
      </div>
      <p style="\${t.bodySm} opacity: 0.7; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Re-check contrast against your own photo's worst-case tone when overriding this — the
        default's AA margin no longer applies once the alpha changes.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Padding</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">padding</code> sets the text block's own block (top/bottom)
        padding — independent of the global <code style="\${t.monoSm}">density</code> prop,
        which has no effect on mms-hero-image. Same token values as <code style="\${t.monoSm}">mms-hero</code>'s
        identical prop: sm | md (default) | lg.
      </p>
      <div style="margin-bottom: 2rem;">
        <mms-hero-image
          src=\${mediaImageMap['scenic-landscape'].url}
          padding="lg"
          heading="Large padding"
          body="Loosest block padding on the text block."
        ></mms-hero-image>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Container</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        <code style="\${t.monoSm}">container</code> caps the text/CTA block only — the
        background photo is always edge-to-edge, by definition of "full bleed".
        <code style="\${t.monoSm}">content</code> (default) caps and centers the text to match
        page content beneath; <code style="\${t.monoSm}">full</code> removes the cap.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Min height &amp; content align</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">min-height</code> is off by default — the container is
        always exactly padding + content height, nothing to align within. Turned on, it
        floors the container at <code style="\${t.monoSm}">--mms-hero-image-min-height</code>
        (400px unless overridden) for a consistently tall, photography-forward hero
        regardless of how short the text is — content still grows past the floor on longer
        text, same as always. <code style="\${t.monoSm}">content-align</code> then positions
        the text within that extra space: <code style="\${t.monoSm}">top</code> (default) |
        <code style="\${t.monoSm}">middle</code> | <code style="\${t.monoSm}">bottom</code>.
        Both are row-mode (768px+) only — below the step, stacked layout already lets photo
        and text share space naturally, so neither has any effect there.
      </p>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-hero-image
          src=\${mediaImageMap['scenic-landscape'].url}
          heading="Top (default)"
          min-height
        ></mms-hero-image>
        <mms-hero-image
          src=\${mediaImageMap['scenic-landscape'].url}
          heading="Middle"
          min-height
          content-align="middle"
        ></mms-hero-image>
        <mms-hero-image
          src=\${mediaImageMap['scenic-landscape'].url}
          heading="Bottom"
          min-height
          content-align="bottom"
        ></mms-hero-image>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Eyebrow</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">eyebrow</code> is an optional uppercase label above the
        heading, with an accent underline. <code style="\${t.monoSm}">accent-color-scheme</code>
        sets that underline's color only — not the eyebrow text, which always stays on the
        scrim's fixed text color for contrast. Default <code style="\${t.monoSm}">onyx</code>;
        an explicit <code style="\${t.monoSm}">primary</code>/<code style="\${t.monoSm}">secondary</code>/<code style="\${t.monoSm}">accent</code>
        reads that palette's base step regardless of its tier classification — intentionally
        <strong>not</strong> tier-gated, same reasoning as <code style="\${t.monoSm}">mms-hero</code>'s
        identical prop.
      </p>
      <div style="margin-bottom: 2rem;">
        <mms-hero-image
          src=\${mediaImageMap['scenic-landscape'].url}
          eyebrow="Branded underline"
          accent-color-scheme="primary"
          heading="Accent scheme"
        ></mms-hero-image>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">CTA</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">cta</code> slot is not restricted to buttons. It's a
        plain, unstyled slot — no <code style="\${t.monoSm}">::slotted</code> rules target it —
        laid out as a wrapping flex row with a 20px gap. It accepts any number of any element,
        same as <code style="\${t.monoSm}">mms-hero</code>'s identical slot.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Heading level &amp; size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">heading-level</code> sets the semantic heading element
        (<code style="\${t.monoSm}">h1</code>–<code style="\${t.monoSm}">h6</code>) — document
        outline and assistive tech only. <code style="\${t.monoSm}">heading-size</code> is a
        separate, independent axis for the visual size. Maps to the typographic framework's
        own defined usage (<em>Foundations → Typography → Typographic Framework</em>):
      </p>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><code style="\${t.monoSm}">1</code> (default, ~40px/32px) — <strong>Page title.</strong> This hero IS the page's own title.</li>
        <li style="margin-bottom: 0.5rem;"><code style="\${t.monoSm}">2</code> (~32px/24px) — <strong>Major section.</strong> This hero introduces a section within a page, not the whole page.</li>
        <li><code style="\${t.monoSm}">3</code> (~24px/20px) — <strong>Subsection.</strong></li>
      </ul>
      <div style="margin-bottom: 2rem;">
        <mms-hero-image
          src=\${mediaImageMap['scenic-landscape'].url}
          heading="A section intro, not the page title"
          heading-level="2"
          heading-size="2"
          body="heading-level=2 (real h2 tag) and heading-size=2 (major-section scale) — the common case: both axes usually agree."
        ></mms-hero-image>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Alt text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        <code style="\${t.monoSm}">alt</code> is empty by default — the image is treated as
        purely decorative and hidden from assistive tech
        (<code style="\${t.monoSm}">aria-hidden</code>), since the heading/body already carry
        the hero's meaning. Supply <code style="\${t.monoSm}">alt</code> only when the photo
        itself conveys information the text doesn't.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          The text block is marked <code style="\${t.monoSm}">role="region"</code> with
          <code style="\${t.monoSm}">aria-roledescription="hero"</code> and
          <code style="\${t.monoSm}">aria-label</code> set to the heading text. Both scrim
          choices are contrast-verified against the fixed white/near-black text colors they pair with.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['hero-image'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> Announced as a region named after the heading text.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Background photo:</strong> Hidden from assistive tech unless <code style="\${t.monoSm}">alt</code> is supplied.</li>
        <li><strong>Reading order:</strong> Eyebrow, heading, body, then the <code style="\${t.monoSm}">cta</code> slot's contents — normal document flow.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard Navigation</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        mms-hero-image itself is not focusable. Slotted CTA buttons follow their own
        focus/activation model (Tab to focus, Enter/Space to activate).
      </p>

    </div>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    viewport: '768',
    mediaImage: 'scenic-landscape',
    alt: '',
    scrim: 'dark',
    container: 'content',
    padding: 'md',
    minHeight: false,
    contentAlign: 'top',
    eyebrow: 'Eyebrow label',
    accentColorScheme: 'onyx',
    heading: 'Hero heading',
    headingLevel: 1,
    headingSize: '1',
    body: 'Supporting body text that introduces the page or campaign in a sentence or two.',
    ctaCount: 1,
    cta1Label: 'Get started',
    cta1Variant: 'primary',
    cta1ColorScheme: 'onyx',
    cta2Label: 'Learn more',
    cta2Variant: 'secondary',
    cta2ColorScheme: 'onyx',
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
    mediaImage: {
      name: 'Media image',
      control: 'select',
      options: mediaImageOptions,
      description: 'Storybook demo control only — swaps in a curated stock photo. Not a real mms-hero-image prop: consumers supply their own image via the src prop. Same curated set as mms-hero\\u2019s own Media image control.',
      table: {
        category: 'Visual'
      }
    },
    alt: {
      name: 'Alt text',
      control: 'text',
      description: 'Empty (default) treats the image as decorative',
      table: {
        category: 'Content'
      }
    },
    scrim: {
      name: 'Scrim',
      control: 'select',
      options: ['dark', 'light'],
      description: 'dark (default, white text) or light (near-black text) overlay',
      table: {
        category: 'Visual'
      }
    },
    container: {
      name: 'Container',
      control: 'select',
      options: ['content', 'full'],
      description: 'content (default) caps and centers the text block; full removes the cap',
      table: {
        category: 'Layout'
      }
    },
    padding: {
      name: 'Padding',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Block (top/bottom) padding on the text block — independent of the global density prop, which has no effect on mms-hero-image.',
      table: {
        category: 'Layout'
      }
    },
    minHeight: {
      name: 'Min height',
      control: 'boolean',
      description: 'Off (default): the container is always exactly padding + content height. On: floors it at a consistently tall, photography-forward minimum (see Content align below) — row mode (768px+) only, no effect below the step.',
      table: {
        category: 'Layout'
      }
    },
    contentAlign: {
      name: 'Content align',
      control: 'select',
      options: ['top', 'middle', 'bottom'],
      description: 'Vertical position of the text block within the container. Only visible when Min height is on at 768px+ — at the default content-driven height there’s no slack to align within.',
      table: {
        category: 'Layout'
      },
      if: {
        arg: 'minHeight',
        truthy: true
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
      options: ['onyx', 'primary', 'secondary', 'accent'],
      description: 'Color of the eyebrow\\u2019s accent underline only — not the eyebrow text itself. Default onyx. An explicit scheme is read at its base brand step regardless of the active theme\\u2019s tier classification — intentionally not tier-gated, since this line carries no text of its own.',
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
      description: 'Visual size only, independent of Heading level. Maps to the typographic framework\\u2019s own defined usage: 1 (default, ~40px/32px) = Page title (h1). 2 (~32px/24px) = Major section (h2). 3 (~24px/20px) = Subsection (h3).',
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
      description: 'How many CTA buttons to preview — 0 (none), 1, or 2. Demo control only, not a component prop or a real limit: the cta slot accepts any number of any element, same as mms-hero\\u2019s identical slot.',
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
      description: 'Storybook demo control only — not a real mms-hero-image prop. mms-button\\u2019s own roundness is set independently on that element.',
      table: {
        category: 'CTA'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Global prop — currently has no visual effect on mms-hero-image (see Padding, a separate component-specific axis).',
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
          args: Record<string, string | number>;
        }) => {
          const a = ctx.args;
          const resolvedSrc = mediaImageMap[a.mediaImage as string]?.url ?? '';
          const attrs: string[] = [\`src="\${resolvedSrc}"\`];
          if (a.alt) attrs.push(\`alt="\${a.alt}"\`);
          if (a.scrim && a.scrim !== 'dark') attrs.push(\`scrim="\${a.scrim}"\`);
          if (a.container && a.container !== 'content') attrs.push(\`container="\${a.container}"\`);
          if (a.padding && a.padding !== 'md') attrs.push(\`padding="\${a.padding}"\`);
          if (a.minHeight) attrs.push('min-height');
          if (a.minHeight && a.contentAlign && a.contentAlign !== 'top') attrs.push(\`content-align="\${a.contentAlign}"\`);
          if (a.eyebrow) attrs.push(\`eyebrow="\${a.eyebrow}"\`);
          if (a.eyebrow && a.accentColorScheme && a.accentColorScheme !== 'onyx') attrs.push(\`accent-color-scheme="\${a.accentColorScheme}"\`);
          if (a.heading) attrs.push(\`heading="\${a.heading}"\`);
          if (a.headingLevel && a.headingLevel !== 1) attrs.push(\`heading-level="\${a.headingLevel}"\`);
          if (a.headingSize && a.headingSize !== '1') attrs.push(\`heading-size="\${a.headingSize}"\`);
          if (a.body) attrs.push(\`body="\${a.body}"\`);
          if (a.density && a.density !== 'default') attrs.push(\`data-density="\${a.density}"\`);
          const ctaCount = Number(a.ctaCount ?? 1);
          const buttons: string[] = [];
          if (ctaCount >= 1) {
            buttons.push(\`  <mms-button slot="cta" label="\${a.cta1Label}" variant="\${a.cta1Variant}" color-scheme="\${a.cta1ColorScheme}"\${a.ctaRoundness && a.ctaRoundness !== 'subtle' ? \` roundness="\${a.ctaRoundness}"\` : ''}></mms-button>\`);
          }
          if (ctaCount >= 2) {
            buttons.push(\`  <mms-button slot="cta" label="\${a.cta2Label}" variant="\${a.cta2Variant}" color-scheme="\${a.cta2ColorScheme}"\${a.ctaRoundness && a.ctaRoundness !== 'subtle' ? \` roundness="\${a.ctaRoundness}"\` : ''}></mms-button>\`);
          }
          return \`<mms-hero-image\\n  \${attrs.join('\\n  ')}\\n>\\n\${buttons.join('\\n')}\\n</mms-hero-image>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none'
    }
  },
  render: (args: {
    mediaImage: string;
    alt: string;
    scrim: string;
    container: string;
    padding: string;
    minHeight: boolean;
    contentAlign: string;
    eyebrow: string;
    accentColorScheme: string;
    heading: string;
    headingLevel: number;
    headingSize: string;
    body: string;
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
    // CTA blocks anything non-Tier-1, since an interactive button needs the
    // hover/pressed steps only Tier 1 palettes have — mirrors mms-hero's
    // identical check (that component's own render function), which in
    // turn mirrors mms-button's own validateColorScheme (only re-checks on
    // connect, not on every live control change, so this is what actually
    // gives this story immediate feedback as the control changes).
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
    if (ctaViolations.length > 0) {
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
          \${ctaViolations.map(v => html\`
              <p style="margin: 0 0 0.5rem; color: #991b1b !important;">
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
      <mms-hero-image
        src=\${mediaImageMap[args.mediaImage]?.url ?? ''}
        alt=\${args.alt}
        scrim=\${args.scrim}
        container=\${args.container}
        padding=\${args.padding}
        ?min-height=\${args.minHeight}
        content-align=\${args.contentAlign}
        eyebrow=\${args.eyebrow}
        accent-color-scheme=\${args.accentColorScheme}
        heading=\${args.heading}
        heading-level=\${args.headingLevel}
        heading-size=\${args.headingSize}
        body=\${args.body}
        data-density=\${args.density}
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
      </mms-hero-image>
    \`;
  }
}`,...j.parameters?.docs?.source}}},M=[`Overview`,`PlaygroundStory`]}));N();export{A as Overview,j as PlaygroundStory,M as __namedExportsOrder,w as default,N as n,S as t};