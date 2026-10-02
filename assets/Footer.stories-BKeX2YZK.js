import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,s as d,t as f}from"./decorate-Bygya6Tu.js";import{i as p,n as m,t as h}from"./mms-icon.component-BJPQucU2.js";import{t as g}from"./iframe-8I-qdbz8.js";import{a as _,o as v,r as y,t as b}from"./a11y-outcome-BDXRHsfs.js";import{t as x}from"./mms-select.component-DamC9Zix.js";import{n as S,r as C,t as w}from"./logo-registry-Bcg5_PHD.js";var T,E=e((()=>{o(),u(),m(),C(),l(),T=class extends i{constructor(...e){super(...e),this.container=`content`,this.copyrightText=``,this.finePrintText=``,this._hasLogo=!1,this._hasContact=!1,this._hasSocial=!1,this._hasLanguage=!1,this._hasLinks=!1,this._hasFinePrint=!1,this._theme=``}connectedCallback(){super.connectedCallback(),this._syncSlotPresence(),this._resolveTheme();let e=this.closest(`[data-theme]`);e&&typeof MutationObserver<`u`&&(this._themeObserver=new MutationObserver(()=>this._resolveTheme()),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`data-theme`]})),typeof MutationObserver<`u`&&(this._childObserver=new MutationObserver(()=>this._syncSlotPresence()),this._childObserver.observe(this,{childList:!0}))}disconnectedCallback(){super.disconnectedCallback(),this._childObserver?.disconnect(),this._childObserver=void 0,this._themeObserver?.disconnect(),this._themeObserver=void 0}_syncSlotPresence(){let e=e=>this.querySelector(`:scope > [slot="${e}"]`)!==null;this._hasLogo=e(`logo`)||e(`logo-compact`),this._hasContact=e(`contact`),this._hasSocial=e(`social`),this._hasLanguage=e(`language`),this._hasLinks=e(`links`),this._hasFinePrint=e(`fine-print`)||this.finePrintText.length>0}_handleSlotChange(){this._syncSlotPresence()}renderBrandLogo(e){let t=this._brandFromTheme,n=t?S(t,e)??(e===`compact`?S(t,`full`):void 0):void 0;return n?a`<svg
      class="brand-logo brand-logo--${e}"
      viewBox=${n.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label=${t}
    >
      ${p(n.inner)}
    </svg>`:a`<div
        class="brand-logo brand-logo--${e} brand-logo--placeholder"
        role="img"
        aria-label=${t?`${t} logo placeholder`:`Logo placeholder`}
      >
        ${e===`compact`?`◻`:`logo`}
      </div>`}get _brandFromTheme(){return this._theme.replace(/-dark$/,``)}_resolveTheme(){let e=this.closest(`[data-theme]`)?.getAttribute(`data-theme`)??``;e!==this._theme&&(this._theme=e),this.style.setProperty(`--_brand-logo-base`,`${w(this._brandFromTheme)}px`)}render(){let e=this._hasLogo||this._hasContact||this._hasSocial||this._hasLanguage,t=this.copyrightText.length>0||this._hasFinePrint;return a`
      <footer role="contentinfo">
        <div class="footer-inner">
          ${e?a`
                <div class="utility-row">
                  <div class="utility-row-start">
                    <div class="logo-container">
                      <div class="logo-slot logo-slot--compact">
                        <slot name="logo-compact" @slotchange=${this._handleSlotChange}
                          >${this.renderBrandLogo(`compact`)}</slot
                        >
                      </div>
                      <div class="logo-slot logo-slot--full">
                        <slot name="logo" @slotchange=${this._handleSlotChange}>${this.renderBrandLogo(`full`)}</slot>
                      </div>
                    </div>
                    <div class="contact-section">
                      <slot name="contact" @slotchange=${this._handleSlotChange}></slot>
                    </div>
                  </div>
                  <div class="utility-row-end">
                    <div class="social-section">
                      <slot name="social" @slotchange=${this._handleSlotChange}></slot>
                    </div>
                    <div class="language-section">
                      <slot name="language" @slotchange=${this._handleSlotChange}></slot>
                    </div>
                  </div>
                </div>
              `:n}
          ${this._hasLinks?a`
                <div class="links-row">
                  <slot name="links" @slotchange=${this._handleSlotChange}></slot>
                </div>
              `:n}
          ${t?a`
                <div class="fine-print-row">
                  <div class="fine-print-divider"></div>
                  <div class="fine-print-text">
                    ${this.copyrightText?a`<span class="copyright">${this.copyrightText}</span> `:n}
                    <slot name="fine-print" @slotchange=${this._handleSlotChange}>${this.finePrintText}</slot>
                  </div>
                </div>
              `:n}
        </div>
      </footer>
    `}static{this.styles=r`
    :host {
      display: block;
      font-family: var(--font-family-body);
      /* Recolors every slotted node placed on the dark band — mms-link and
         plain anchors both read --color-text-default/--color-link-* from
         these inherited custom properties (see mms-link.component.ts), so
         setting them here at :host repaints slotted content without a
         per-slot ::slotted() override. Fixed primitives, not the mode-relative
         --color-neutral-* semantic tokens — see the component doc comment. */
      --color-text-default: var(--neutral-dark-12);
      --color-text-subtle: var(--neutral-dark-9);
      --color-link-default: var(--neutral-dark-12);
      --color-link-hover: var(--neutral-dark-10);
      --color-link-visited: var(--neutral-dark-9);
      /* mms-select reads these two for its container border — same
         mode-relative-token problem as the text/link vars above, same fix. */
      --color-border-interactive: var(--neutral-dark-9);
      --color-border-interactive-hover: var(--neutral-dark-10);
      /* mms-select's state="filled" container border reads this directly
         (not --color-border-interactive) — required alongside state="filled"
         (itself required for --color-text-placeholder, see the language
         slot's Storybook demo) or the border falls back to the light-mode
         value and fails WCAG 1.4.11's 3:1 non-text floor (2.91:1 measured). */
      --color-neutral-9: var(--neutral-dark-9);
    }

    footer {
      display: block;
      background: var(--neutral-dark-2);
      color: var(--neutral-dark-12);
      /* Same single 768px step as mms-header, measured against the footer's
         own width rather than the viewport — scoped here (not :host) for
         parity with header's rationale, in case slotted content ever
         includes a fixed-position overlay. */
      container-type: inline-size;
      container-name: mms-footer;
    }

    .footer-inner {
      display: flex;
      flex-direction: column;
      gap: var(--layout-gap-loose);
      max-width: var(--mms-footer-content-max-width, var(--layout-content-max-width));
      margin-inline: auto;
      padding-block: var(--spacing-lg1);
      padding-inline: var(--mms-footer-inline-padding, var(--layout-inline-padding-compact));
      box-sizing: border-box;
    }

    /* Mirrors :host([container='full']) on mms-header — sets the same
       override custom property a consumer would, so the two never compete. */
    :host([container='full']) .footer-inner {
      --mms-footer-content-max-width: none;
    }

    @container mms-footer (min-width: 768px) {
      .footer-inner {
        padding-inline: var(--mms-footer-inline-padding, var(--layout-inline-padding-default));
      }
    }

    /* Two independent flex groups rather than one flat row with a growing
       spacer — flex-wrap resolves justify-content per line, so a line left
       with only .utility-row-end on it (once .utility-row-start no longer
       fits beside it) has nothing to "space between" and lands at the
       start. A single spacer child wrapping onto that line would instead
       keep pushing whatever followed it to the far right. */
    .utility-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: var(--layout-gap-comfortable);
    }

    /* flex-shrink: 0 keeps these two from squeezing together onto one line
       (see the comment above) — but it equally blocks the browser from ever
       sizing either below its own unwrapped content width, even once it has
       a full line to itself, which left contact's phone/email overflowing
       the footer instead of wrapping. max-width caps that case without
       touching the shrink behavior the squeeze comment depends on. */
    .utility-row-start,
    .utility-row-end {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--layout-gap-comfortable);
      flex-shrink: 0;
      max-width: 100%;
    }

    .logo-container {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    /* Same compact/full swap as mms-header's .logo-slot, at the same
       container-query step — an empty slot renders nothing either way. */
    .logo-slot {
      display: flex;
      align-items: center;
    }

    .logo-slot--full {
      display: none;
    }

    @container mms-footer (min-width: 768px) {
      .logo-slot--compact {
        display: none;
      }
      .logo-slot--full {
        display: flex;
      }
    }

    /* Built-in brand logos are currentColor, so they follow a fixed light
       tone rather than the theme's brand color — the mark reads as a
       reversed/white lockup against the always-dark band, matching how a
       real logo commonly renders in a dark footer. --color-primary-9 (what
       mms-header uses on its light bar) is mode-relative and isn't
       guaranteed to read against a background that is deliberately never
       mode-relative. */
    .brand-logo {
      color: var(--neutral-dark-12);
      width: auto;
      display: block;
      height: var(--mms-footer-logo-height, var(--_brand-logo-base, 16px));
    }

    /* Shown when the active theme has no registered mark — same fallback
       mms-header renders, not the default rendering path. */
    .brand-logo--placeholder {
      aspect-ratio: 3.5 / 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: var(--border-width-xs) dashed var(--neutral-dark-9);
      border-radius: var(--radius-xs);
      color: var(--neutral-dark-9);
      font-size: calc(var(--_brand-logo-base, 16px) * 0.6);
      line-height: 1;
      letter-spacing: var(--type-ui-label-sm-letter-spacing);
    }

    .brand-logo--placeholder.brand-logo--compact {
      aspect-ratio: 1 / 1;
    }

    /* Unlike social/language, contact commonly holds two+ items (phone,
       email) that must stack rather than overflow once the row runs out of
       width — flex-wrap here, not just on the parent .utility-row-start.
       max-width: same reasoning as .utility-row-start above — flex-shrink: 0
       alone still lets this overflow a narrowed parent instead of wrapping. */
    .contact-section {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--layout-gap-default);
      flex-shrink: 0;
      max-width: 100%;
    }

    .social-section,
    .language-section {
      display: flex;
      align-items: center;
      gap: var(--layout-gap-default);
      flex-shrink: 0;
    }

    .social-section ::slotted(a) {
      display: flex;
      align-items: center;
      color: inherit;
      text-decoration: none;
    }

    /* Standalone row of legal/utility links — no longer paired with
       copyright, which now flows into .fine-print-text instead. Always a
       simple wrapping row, so no breakpoint step is needed here. */
    .links-row {
      display: flex;
      flex-wrap: wrap;
      row-gap: var(--spacing-sm1);
      column-gap: var(--spacing-sm2);
    }

    /* Inline with .fine-print-text's slotted content, not a standalone
       label — reads as one flowing sentence: "© 2026 Org. Org is
       administered ...". white-space normal (not nowrap) so it wraps with
       the rest of the paragraph instead of forcing a line break. */
    .copyright {
      color: var(--neutral-dark-9);
    }

    .fine-print-row {
      display: flex;
      flex-direction: column;
      gap: var(--layout-gap-loose);
    }

    .fine-print-divider {
      width: 100%;
      height: var(--border-width-xs);
      background-color: var(--neutral-dark-9);
      opacity: 0.4;
    }

    .fine-print-text {
      font-family: var(--type-body-sm-family);
      font-size: var(--type-body-sm-size);
      line-height: var(--type-body-sm-line-height);
      color: var(--neutral-dark-9);
    }
  `}},f([c({type:String,reflect:!0})],T.prototype,`container`,void 0),f([c({type:String,attribute:`copyright-text`})],T.prototype,`copyrightText`,void 0),f([c({type:String,attribute:`fine-print-text`})],T.prototype,`finePrintText`,void 0),f([d()],T.prototype,`_hasLogo`,void 0),f([d()],T.prototype,`_hasContact`,void 0),f([d()],T.prototype,`_hasSocial`,void 0),f([d()],T.prototype,`_hasLanguage`,void 0),f([d()],T.prototype,`_hasLinks`,void 0),f([d()],T.prototype,`_hasFinePrint`,void 0),f([d()],T.prototype,`_theme`,void 0),T=f([s(`mms-footer`)],T)})),D=t({Overview:()=>H,PlaygroundStory:()=>U,__namedExportsOrder:()=>W,default:()=>P});function O(e){let t=e??`1240`;return t===`fill`?`100%`:`${t}px`}function k(e){return e.split(`,`).map(e=>e.trim()).filter(e=>e.length>0)}function A(e){return k(e).map(e=>{let t=e.indexOf(`:`);return t===-1?{label:e,href:`#`}:{label:e.slice(0,t).trim(),href:e.slice(t+1).trim()}})}function j(e){return k(e).map(e=>{let[t,n]=e.split(`:`).map(e=>e.trim());return{label:t,icon:n||void 0}})}function M(e=!1){return a`
    <span
      slot=${e?`logo-compact`:`logo`}
      style="display: inline-flex; align-items: center; justify-content: center; width: ${e?`32px`:`112px`}; height: 32px; border: 1px dashed rgba(255,255,255,0.4); border-radius: 4px; font-size: 0.6875rem; opacity: 0.7; color: #fff;"
      role="img"
      aria-label="Logo placeholder"
    >
      ${e?`◻`:`logo`}
    </span>
  `}function N(e=R,t=z,r=B,i=V){return a`
    ${A(i).map(({label:e,href:t})=>a`<mms-link slot="contact" href=${t} label=${e} underline="none"></mms-link>`)}
    ${j(t).map(({label:e,icon:t})=>a`
        <a slot="social" href="#" aria-label=${e}
          ><mms-icon name=${t??n} size="lg"></mms-icon
        ></a>
      `)}
    ${r?a`
          <mms-select
            slot="language"
            size="sm"
            placeholder="Language"
            value="en"
            .options=${[{value:`en`,label:r},{value:`es`,label:`Español`}]}
          ></mms-select>
        `:n}
    ${k(e).map(e=>a`<mms-link slot="links" href="#" label=${e} underline="none"></mms-link>`)}
  `}var P,F,I,L,R,z,B,V,H,U,W,G=e((()=>{o(),E(),g(),h(),x(),_(),b(),P={title:`Navigational/Footer`,tags:[`!autodocs`]},F={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},I=`680px`,L=`960px`,R=`Privacy Policy, Terms of Use, Accessibility, Nondiscrimination Notice`,z=`Facebook:facebook-logo, X:x-logo, LinkedIn:linkedin-logo`,B=`English`,V=`1-800-555-1234:tel:+18005551234, support@example.gov:mailto:support@example.gov`,H={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${L}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${F.h1}">Footer</h1>
      <p style="${F.body} opacity: 0.85; max-width: ${I}; margin-bottom: 2rem;">
        Global site footer — brand mark, contact/social/language utilities, legal links, and fine
        print in a single structural shell. All content is consumer-supplied via slots; the
        component renders only the wrappers a slot's content actually needs — an empty slot
        contributes nothing, never an empty row.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3b82f6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${F.bodySm} margin: 0;">
          Layout and responsiveness follow <code style="${F.monoSm}">mms-header</code>'s precedent: one
          responsive step at 768px, driven by the shared layout tokens and the footer's own
          <code style="${F.monoSm}">container-type: inline-size</code> — not Marina's four-tier
          breakpoint scale. See <strong>The padding step</strong> and
          <strong>Responsive degradation</strong> below for the full detail.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${F.h2}">Basic usage</h2>
      <p style="${F.bodySm} opacity: 0.85; max-width: ${I}; margin-bottom: 1.5rem;">
        Every section is optional. A footer with only a copyright line and legal links is valid;
        so is one with every slot filled. Below 768px, the <code style="${F.monoSm}">logo-compact</code>
        slot is shown instead of <code style="${F.monoSm}">logo</code>, the same swap
        <code style="${F.monoSm}">mms-header</code> makes.
      </p>

      <div style="border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <mms-footer copyright-text="© 2026 [Organization Name]." fine-print-text="[Organization Name] is administered in accordance with state and federal regulations.">
          ${N()}
        </mms-footer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Slots -->
      <h2 style="${F.h2}">Slots</h2>
      <p style="${F.bodySm} opacity: 0.85; max-width: ${I}; margin-bottom: 1.5rem;">
        Every slot is independent and may be left empty. The utility row (logo through language)
        renders only if at least one of its slots has content; the links row renders only if the
        <code style="${F.monoSm}">links</code> slot has content; the fine-print row renders only if
        <code style="${F.monoSm}">copyright-text</code> is set, or <code style="${F.monoSm}">fine-print-text</code>
        is set, or the <code style="${F.monoSm}">fine-print</code> slot has content. <code style="${F.monoSm}">contact</code>,
        <code style="${F.monoSm}">social</code>, and <code style="${F.monoSm}">links</code> content is configurable
        from the <strong>Playground</strong> story's controls, without editing this page's markup.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; ${F.caption}">
          <thead>
            <tr style="background: rgba(128,128,128,0.06); text-align: left;">
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Slot</th>
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Typical content</th>
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${F.monoSm}">logo</code></td>
              <td style="padding: 0.625rem 0.875rem;">Brand mark — image, inline SVG, or text lockup</td>
              <td style="padding: 0.625rem 0.875rem;">Shown at 768px and above. Falls back to the theme's own mark.</td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${F.monoSm}">logo-compact</code></td>
              <td style="padding: 0.625rem 0.875rem;">A narrower mark</td>
              <td style="padding: 0.625rem 0.875rem;">Shown below 768px. Falls back to the theme's compact mark, or its full one if no compact variant exists.</td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${F.monoSm}">contact</code></td>
              <td style="padding: 0.625rem 0.875rem;"><code style="${F.monoSm}">mms-link</code> — phone/email</td>
              <td style="padding: 0.625rem 0.875rem;">Grouped with <code style="${F.monoSm}">logo</code>/<code style="${F.monoSm}">logo-compact</code> at the row's leading edge</td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${F.monoSm}">social</code></td>
              <td style="padding: 0.625rem 0.875rem;"><code style="${F.monoSm}">a</code> wrapping <code style="${F.monoSm}">mms-icon</code></td>
              <td style="padding: 0.625rem 0.875rem;">Grouped with <code style="${F.monoSm}">language</code> at the row's trailing edge — the pair wraps and left-aligns together once it no longer fits beside <code style="${F.monoSm}">logo</code>/<code style="${F.monoSm}">contact</code></td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${F.monoSm}">language</code></td>
              <td style="padding: 0.625rem 0.875rem;">Locale switcher — <code style="${F.monoSm}">mms-select</code> is the common pattern; a link or button works too</td>
              <td style="padding: 0.625rem 0.875rem;">Unopinionated about control shape; renders last in the utility row</td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${F.monoSm}">links</code></td>
              <td style="padding: 0.625rem 0.875rem;"><code style="${F.monoSm}">mms-link</code></td>
              <td style="padding: 0.625rem 0.875rem;">Legal/utility links, its own standalone row</td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${F.monoSm}">fine-print</code></td>
              <td style="padding: 0.625rem 0.875rem;">Legal disclaimer text</td>
              <td style="padding: 0.625rem 0.875rem;">Falls back to <code style="${F.monoSm}">fine-print-text</code> when empty; flows in the same line as <code style="${F.monoSm}">copyright-text</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre style="${F.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;"><code>&lt;mms-footer copyright-text="© 2026 [Organization Name]."&gt;
  &lt;!-- omit logo/logo-compact entirely to use the active theme's own mark --&gt;

  &lt;mms-link slot="contact" href="tel:+18005551234" label="1-800-555-1234"&gt;&lt;/mms-link&gt;

  &lt;a slot="social" href="#" aria-label="Facebook"&gt;&lt;mms-icon name="facebook-logo"&gt;&lt;/mms-icon&gt;&lt;/a&gt;

  &lt;!-- options is an array property — set it from JS, not an HTML attribute --&gt;
  &lt;mms-select slot="language" id="language-select" size="sm" placeholder="Language" value="en"&gt;&lt;/mms-select&gt;
  &lt;script&gt;
    document.getElementById('language-select').options = [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Español' },
    ];
  &lt;/script&gt;

  &lt;mms-link slot="links" href="/privacy" label="Privacy Policy"&gt;&lt;/mms-link&gt;
  &lt;mms-link slot="links" href="/terms" label="Terms of Use"&gt;&lt;/mms-link&gt;

  &lt;span slot="fine-print"&gt;[Organization Name] is administered in accordance with state and federal regulations.&lt;/span&gt;
&lt;/mms-footer&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Custom logo -->
      <h2 style="${F.h2}">Custom logo</h2>
      <p style="${F.bodySm} opacity: 0.85; max-width: ${I}; margin-bottom: 1.5rem;">
        The active theme supplies a built-in lockup — the demo above renders it with no
        <code style="${F.monoSm}">logo</code>/<code style="${F.monoSm}">logo-compact</code> content slotted at all. That's slot
        <em>fallback</em>, the same mechanism <code style="${F.monoSm}">mms-header</code> uses — anything placed in those
        slots overrides it. Supply your own mark when the engagement's theme is not one the package ships a logo for.
      </p>

      <div style="border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <mms-footer copyright-text="© 2026 [Organization Name].">
          ${M()} ${M(!0)}
          <mms-link slot="links" href="#" label="Privacy Policy" underline="none"></mms-link>
        </mms-footer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Logo size -->
      <h2 style="${F.h2}">Adjusting logo size</h2>
      <p style="${F.bodySm} opacity: 0.85; max-width: ${I}; margin-bottom: 1rem;">
        The built-in logo's height is not a named size a consumer picks — each theme ships its own
        pixel-tuned default. To render it larger or smaller, override the height directly:
      </p>
      <pre style="${F.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>mms-footer { --mms-footer-logo-height: 56px; }</code></pre>
      <p style="${F.caption} opacity: 0.7; max-width: ${I}; margin-bottom: 2rem;">
        <code style="${F.monoSm}">mms-header</code> has the matching
        <code style="${F.monoSm}">--mms-header-logo-height</code>.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Container -->
      <h2 style="${F.h2}">Container</h2>
      <p style="${F.bodySm} opacity: 0.85; max-width: ${I}; margin-bottom: 1.5rem;">
        <code style="${F.monoSm}">container="content"</code> (default) caps the inner row at
        <code style="${F.monoSm}">--layout-content-max-width</code> and centers it, matching page
        content above the footer. <code style="${F.monoSm}">container="full"</code> releases the cap
        so the band's content spans edge-to-edge, held in only by the inline inset — the same
        distinction <code style="${F.monoSm}">mms-header</code> draws.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- The padding step -->
      <h2 style="${F.h2}">The padding step</h2>
      <p style="${F.bodySm} opacity: 0.85; max-width: ${I}; margin-bottom: 1.5rem;">
        The layout system defines exactly one breakpoint — <code style="${F.monoSm}">--layout-padding-step</code>
        at 768px — where the inline inset goes from 16px to 32px. The logo slot swaps at the same
        width. Everything else about the footer is content-driven, the same shape mms-header uses.
      </p>
      <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
        <div>
          <p style="${F.caption} margin: 0 0 0.5rem;">
            <strong>Below 768px</strong> · inset 16px · <code style="${F.monoSm}">logo-compact</code> slot
          </p>
          <div style="border-radius: 8px; overflow: hidden; width: 480px; max-width: 100%;">
            <mms-footer copyright-text="© 2026 [Organization Name].">${N()}</mms-footer>
          </div>
        </div>
        <div>
          <p style="${F.caption} margin: 0 0 0.5rem;">
            <strong>768px and above</strong> · inset 32px · <code style="${F.monoSm}">logo</code> slot ·
            capped at 1280px, then centered
          </p>
          <div style="border-radius: 8px; overflow: hidden;">
            <mms-footer copyright-text="© 2026 [Organization Name].">${N()}</mms-footer>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Adjusting the container -->
      <h2 style="${F.h2}">Adjusting the container</h2>
      <p style="${F.bodySm} opacity: 0.85; max-width: ${I}; margin-bottom: 1rem;">
        Two custom properties tune the container without declaring a margin. They inherit, so
        setting them on a page wrapper realigns the footer with everything else — the same two
        mms-header exposes.
      </p>
      <pre style="${F.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>/* Wider footer than body */
mms-footer { --mms-footer-content-max-width: 1440px; }

/* Roomier inset, keeping a step of your own */
mms-footer { --mms-footer-inline-padding: 24px; }
@media (min-width: 1024px) {
  mms-footer { --mms-footer-inline-padding: 64px; }
}</code></pre>
      <p style="${F.caption} opacity: 0.7; max-width: ${I}; margin-bottom: 2rem;">
        Setting <code style="${F.monoSm}">--mms-footer-inline-padding</code> once flattens the
        768px step by design — declare it inside your own media query to keep one.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Responsive degradation -->
      <h2 style="${F.h2}">Responsive degradation</h2>
      <p style="${F.bodySm} opacity: 0.85; max-width: ${I}; margin-bottom: 1rem;">
        Unlike mms-header, nothing here collapses behind a toggle — there is no bounded bar height
        forcing content to hide. The utility row is two independent flex groups,
        <code style="${F.monoSm}">logo</code>/<code style="${F.monoSm}">contact</code> and
        <code style="${F.monoSm}">social</code>/<code style="${F.monoSm}">language</code>, pushed to
        opposite ends when both fit. Once they don't, the trailing group wraps to its own line and
        left-aligns there rather than staying pinned to the right — real CSS wrap, not a
        measured/JS-driven collapse.
      </p>
      <div style="border-radius: 8px; overflow: hidden; width: 380px; max-width: 100%; margin-bottom: 2rem;">
        <mms-footer copyright-text="© 2026 [Organization Name].">${N()}</mms-footer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${F.h2}">Accessibility</h2>

      <h3 style="${F.h3}">WCAG 2.2 AA compliance</h3>
      ${y(v.footer.rows)}

      <h3 style="${F.h3}">Screen reader behavior</h3>
      <ul style="${F.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> The footer is announced as "contentinfo" via <code style="${F.monoSm}">role="contentinfo"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Slotted content:</strong> Every link, button, and icon in the footer is consumer-supplied — its accessible name and role come from that element, not from mms-footer</li>
        <li><strong>Empty sections:</strong> An unfilled slot contributes no row, wrapper, or divider to the accessibility tree</li>
      </ul>

      <h3 style="${F.h3}">Keyboard navigation</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; width: 140px;">Key</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus through slotted contact, social, language, and legal links in document order</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused link or control</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},U={name:`Playground`,tags:[`!dev`],args:{viewport:`1240`,container:`content`,copyrightText:`© 2026 [Organization Name].`,finePrintText:`[Organization Name] is administered in accordance with state and federal regulations.`,footerLinks:R,socialLinks:z,languageLabel:B,contactItems:V,theme:`maximus`,density:`default`},decorators:[(e,t)=>a`
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;">
          <div style="display: flex; flex-direction: column; width: ${O(t.args.viewport)}; margin-inline: auto;">
            ${e()}
          </div>
        </div>
      `],argTypes:{viewport:{name:`Viewport (simulated)`,control:`select`,options:[`400`,`768`,`1240`,`1440`,`fill`],description:`Not a component prop — a story control that constrains the preview width so responsive behavior can be seen without resizing the browser. The footer measures its own container, so the simulation is faithful rather than a mock.`,table:{category:`Demo Controls`}},copyrightText:{name:`Copyright text`,control:`text`,description:`Copyright line, flows inline with the fine-print text`,table:{category:`Content`}},finePrintText:{name:`Fine print text`,control:`text`,description:`Fallback fine-print content, used only when the fine-print slot is empty`,table:{category:`Content`}},footerLinks:{name:`Legal links`,control:`text`,description:'Comma-separated labels, slotted as `mms-link slot="links"`',table:{category:`Content`}},contactItems:{name:`Contact items`,control:`text`,description:'Comma-separated `Label:href` pairs, slotted as `mms-link slot="contact"`. Use a `tel:`/`mailto:` href for phone/email, same as any other link the consumer supplies.',table:{category:`Content`}},socialLinks:{name:`Social links`,control:`text`,description:'Comma-separated `Label:icon` pairs, slotted as an `<a slot="social">` wrapping `mms-icon`. Which platforms to include and what they link to is entirely up to the consumer.',table:{category:`Content`}},languageLabel:{name:`Language control label`,control:`text`,description:"Label for the selected English option in the `language` slot, demonstrated with `mms-select` (the common real-world pattern). Clear the field to omit the slot entirely — a link or button works too, whichever better matches how your app switches locale.",table:{category:`Content`}},container:{name:`Container`,control:`select`,options:[`content`,`full`],description:"Caps the footer row, or does not. `content` (default) limits it to `--layout-content-max-width` (1280px) and centres it. `full` removes the cap so the band spans edge-to-edge.",table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{layout:`fullscreen`,docs:{source:{transform:(e,t)=>{let n=t.args,r=[];n.container!==`content`&&r.push(`container="${n.container}"`),n.copyrightText&&r.push(`copyright-text="${n.copyrightText}"`),n.finePrintText&&r.push(`fine-print-text="${n.finePrintText}"`),n.density===`compact`&&r.push(`data-density="compact"`);let i=A(n.contactItems).map(({label:e,href:t})=>`  <mms-link slot="contact" href="${t}" label="${e}"></mms-link>`),a=j(n.socialLinks).map(({label:e,icon:t})=>`  <a slot="social" href="#" aria-label="${e}"><mms-icon name="${t??``}"></mms-icon></a>`),o=n.languageLabel?[`  <mms-select slot="language" size="sm" placeholder="Language" value="en"></mms-select>`]:[],s=k(n.footerLinks).map(e=>`  <mms-link slot="links" href="#" label="${e}"></mms-link>`);return`<mms-footer\n  ${r.join(`
  `)}\n>\n${[...i,...a,...o,...s].join(`
`)}\n</mms-footer>`},language:`html`}},controls:{sort:`none`}},render:e=>a`
    <mms-footer
      container=${e.container}
      copyright-text=${e.copyrightText||n}
      fine-print-text=${e.finePrintText||n}
      data-density=${e.density===`compact`?`compact`:n}
    >
      ${N(e.footerLinks,e.socialLinks,e.languageLabel,e.contactItems)}
    </mms-footer>
  `},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Footer</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Global site footer — brand mark, contact/social/language utilities, legal links, and fine
        print in a single structural shell. All content is consumer-supplied via slots; the
        component renders only the wrappers a slot's content actually needs — an empty slot
        contributes nothing, never an empty row.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3b82f6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          Layout and responsiveness follow <code style="\${t.monoSm}">mms-header</code>'s precedent: one
          responsive step at 768px, driven by the shared layout tokens and the footer's own
          <code style="\${t.monoSm}">container-type: inline-size</code> — not Marina's four-tier
          breakpoint scale. See <strong>The padding step</strong> and
          <strong>Responsive degradation</strong> below for the full detail.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Every section is optional. A footer with only a copyright line and legal links is valid;
        so is one with every slot filled. Below 768px, the <code style="\${t.monoSm}">logo-compact</code>
        slot is shown instead of <code style="\${t.monoSm}">logo</code>, the same swap
        <code style="\${t.monoSm}">mms-header</code> makes.
      </p>

      <div style="border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <mms-footer copyright-text="© 2026 [Organization Name]." fine-print-text="[Organization Name] is administered in accordance with state and federal regulations.">
          \${sampleContent()}
        </mms-footer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Slots -->
      <h2 style="\${t.h2}">Slots</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Every slot is independent and may be left empty. The utility row (logo through language)
        renders only if at least one of its slots has content; the links row renders only if the
        <code style="\${t.monoSm}">links</code> slot has content; the fine-print row renders only if
        <code style="\${t.monoSm}">copyright-text</code> is set, or <code style="\${t.monoSm}">fine-print-text</code>
        is set, or the <code style="\${t.monoSm}">fine-print</code> slot has content. <code style="\${t.monoSm}">contact</code>,
        <code style="\${t.monoSm}">social</code>, and <code style="\${t.monoSm}">links</code> content is configurable
        from the <strong>Playground</strong> story's controls, without editing this page's markup.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="background: rgba(128,128,128,0.06); text-align: left;">
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Slot</th>
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Typical content</th>
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">logo</code></td>
              <td style="padding: 0.625rem 0.875rem;">Brand mark — image, inline SVG, or text lockup</td>
              <td style="padding: 0.625rem 0.875rem;">Shown at 768px and above. Falls back to the theme's own mark.</td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">logo-compact</code></td>
              <td style="padding: 0.625rem 0.875rem;">A narrower mark</td>
              <td style="padding: 0.625rem 0.875rem;">Shown below 768px. Falls back to the theme's compact mark, or its full one if no compact variant exists.</td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">contact</code></td>
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">mms-link</code> — phone/email</td>
              <td style="padding: 0.625rem 0.875rem;">Grouped with <code style="\${t.monoSm}">logo</code>/<code style="\${t.monoSm}">logo-compact</code> at the row's leading edge</td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">social</code></td>
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">a</code> wrapping <code style="\${t.monoSm}">mms-icon</code></td>
              <td style="padding: 0.625rem 0.875rem;">Grouped with <code style="\${t.monoSm}">language</code> at the row's trailing edge — the pair wraps and left-aligns together once it no longer fits beside <code style="\${t.monoSm}">logo</code>/<code style="\${t.monoSm}">contact</code></td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">language</code></td>
              <td style="padding: 0.625rem 0.875rem;">Locale switcher — <code style="\${t.monoSm}">mms-select</code> is the common pattern; a link or button works too</td>
              <td style="padding: 0.625rem 0.875rem;">Unopinionated about control shape; renders last in the utility row</td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">links</code></td>
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">mms-link</code></td>
              <td style="padding: 0.625rem 0.875rem;">Legal/utility links, its own standalone row</td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">fine-print</code></td>
              <td style="padding: 0.625rem 0.875rem;">Legal disclaimer text</td>
              <td style="padding: 0.625rem 0.875rem;">Falls back to <code style="\${t.monoSm}">fine-print-text</code> when empty; flows in the same line as <code style="\${t.monoSm}">copyright-text</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;"><code>&lt;mms-footer copyright-text="© 2026 [Organization Name]."&gt;
  &lt;!-- omit logo/logo-compact entirely to use the active theme's own mark --&gt;

  &lt;mms-link slot="contact" href="tel:+18005551234" label="1-800-555-1234"&gt;&lt;/mms-link&gt;

  &lt;a slot="social" href="#" aria-label="Facebook"&gt;&lt;mms-icon name="facebook-logo"&gt;&lt;/mms-icon&gt;&lt;/a&gt;

  &lt;!-- options is an array property — set it from JS, not an HTML attribute --&gt;
  &lt;mms-select slot="language" id="language-select" size="sm" placeholder="Language" value="en"&gt;&lt;/mms-select&gt;
  &lt;script&gt;
    document.getElementById('language-select').options = [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Español' },
    ];
  &lt;/script&gt;

  &lt;mms-link slot="links" href="/privacy" label="Privacy Policy"&gt;&lt;/mms-link&gt;
  &lt;mms-link slot="links" href="/terms" label="Terms of Use"&gt;&lt;/mms-link&gt;

  &lt;span slot="fine-print"&gt;[Organization Name] is administered in accordance with state and federal regulations.&lt;/span&gt;
&lt;/mms-footer&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Custom logo -->
      <h2 style="\${t.h2}">Custom logo</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The active theme supplies a built-in lockup — the demo above renders it with no
        <code style="\${t.monoSm}">logo</code>/<code style="\${t.monoSm}">logo-compact</code> content slotted at all. That's slot
        <em>fallback</em>, the same mechanism <code style="\${t.monoSm}">mms-header</code> uses — anything placed in those
        slots overrides it. Supply your own mark when the engagement's theme is not one the package ships a logo for.
      </p>

      <div style="border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <mms-footer copyright-text="© 2026 [Organization Name].">
          \${sampleLogo()} \${sampleLogo(true)}
          <mms-link slot="links" href="#" label="Privacy Policy" underline="none"></mms-link>
        </mms-footer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Logo size -->
      <h2 style="\${t.h2}">Adjusting logo size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        The built-in logo's height is not a named size a consumer picks — each theme ships its own
        pixel-tuned default. To render it larger or smaller, override the height directly:
      </p>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>mms-footer { --mms-footer-logo-height: 56px; }</code></pre>
      <p style="\${t.caption} opacity: 0.7; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        <code style="\${t.monoSm}">mms-header</code> has the matching
        <code style="\${t.monoSm}">--mms-header-logo-height</code>.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Container -->
      <h2 style="\${t.h2}">Container</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">container="content"</code> (default) caps the inner row at
        <code style="\${t.monoSm}">--layout-content-max-width</code> and centers it, matching page
        content above the footer. <code style="\${t.monoSm}">container="full"</code> releases the cap
        so the band's content spans edge-to-edge, held in only by the inline inset — the same
        distinction <code style="\${t.monoSm}">mms-header</code> draws.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- The padding step -->
      <h2 style="\${t.h2}">The padding step</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The layout system defines exactly one breakpoint — <code style="\${t.monoSm}">--layout-padding-step</code>
        at 768px — where the inline inset goes from 16px to 32px. The logo slot swaps at the same
        width. Everything else about the footer is content-driven, the same shape mms-header uses.
      </p>
      <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
        <div>
          <p style="\${t.caption} margin: 0 0 0.5rem;">
            <strong>Below 768px</strong> · inset 16px · <code style="\${t.monoSm}">logo-compact</code> slot
          </p>
          <div style="border-radius: 8px; overflow: hidden; width: 480px; max-width: 100%;">
            <mms-footer copyright-text="© 2026 [Organization Name].">\${sampleContent()}</mms-footer>
          </div>
        </div>
        <div>
          <p style="\${t.caption} margin: 0 0 0.5rem;">
            <strong>768px and above</strong> · inset 32px · <code style="\${t.monoSm}">logo</code> slot ·
            capped at 1280px, then centered
          </p>
          <div style="border-radius: 8px; overflow: hidden;">
            <mms-footer copyright-text="© 2026 [Organization Name].">\${sampleContent()}</mms-footer>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Adjusting the container -->
      <h2 style="\${t.h2}">Adjusting the container</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Two custom properties tune the container without declaring a margin. They inherit, so
        setting them on a page wrapper realigns the footer with everything else — the same two
        mms-header exposes.
      </p>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>/* Wider footer than body */
mms-footer { --mms-footer-content-max-width: 1440px; }

/* Roomier inset, keeping a step of your own */
mms-footer { --mms-footer-inline-padding: 24px; }
@media (min-width: 1024px) {
  mms-footer { --mms-footer-inline-padding: 64px; }
}</code></pre>
      <p style="\${t.caption} opacity: 0.7; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Setting <code style="\${t.monoSm}">--mms-footer-inline-padding</code> once flattens the
        768px step by design — declare it inside your own media query to keep one.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Responsive degradation -->
      <h2 style="\${t.h2}">Responsive degradation</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Unlike mms-header, nothing here collapses behind a toggle — there is no bounded bar height
        forcing content to hide. The utility row is two independent flex groups,
        <code style="\${t.monoSm}">logo</code>/<code style="\${t.monoSm}">contact</code> and
        <code style="\${t.monoSm}">social</code>/<code style="\${t.monoSm}">language</code>, pushed to
        opposite ends when both fit. Once they don't, the trailing group wraps to its own line and
        left-aligns there rather than staying pinned to the right — real CSS wrap, not a
        measured/JS-driven collapse.
      </p>
      <div style="border-radius: 8px; overflow: hidden; width: 380px; max-width: 100%; margin-bottom: 2rem;">
        <mms-footer copyright-text="© 2026 [Organization Name].">\${sampleContent()}</mms-footer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['footer'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> The footer is announced as "contentinfo" via <code style="\${t.monoSm}">role="contentinfo"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Slotted content:</strong> Every link, button, and icon in the footer is consumer-supplied — its accessible name and role come from that element, not from mms-footer</li>
        <li><strong>Empty sections:</strong> An unfilled slot contributes no row, wrapper, or divider to the accessibility tree</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; width: 140px;">Key</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus through slotted contact, social, language, and legal links in document order</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused link or control</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    viewport: '1240',
    container: 'content',
    copyrightText: '© 2026 [Organization Name].',
    finePrintText: '[Organization Name] is administered in accordance with state and federal regulations.',
    footerLinks: DEFAULT_LINKS,
    socialLinks: DEFAULT_SOCIAL,
    languageLabel: DEFAULT_LANGUAGE_LABEL,
    contactItems: DEFAULT_CONTACT,
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
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;">
          <div style="display: flex; flex-direction: column; width: \${w}; margin-inline: auto;">
            \${story()}
          </div>
        </div>
      \`;
  }],
  argTypes: {
    viewport: {
      name: 'Viewport (simulated)',
      control: 'select',
      options: ['400', '768', '1240', '1440', 'fill'],
      description: 'Not a component prop — a story control that constrains the preview width so responsive behavior can be seen without resizing the browser. The footer measures its own container, so the simulation is faithful rather than a mock.',
      table: {
        category: 'Demo Controls'
      }
    },
    copyrightText: {
      name: 'Copyright text',
      control: 'text',
      description: 'Copyright line, flows inline with the fine-print text',
      table: {
        category: 'Content'
      }
    },
    finePrintText: {
      name: 'Fine print text',
      control: 'text',
      description: 'Fallback fine-print content, used only when the fine-print slot is empty',
      table: {
        category: 'Content'
      }
    },
    footerLinks: {
      name: 'Legal links',
      control: 'text',
      description: 'Comma-separated labels, slotted as \`mms-link slot="links"\`',
      table: {
        category: 'Content'
      }
    },
    contactItems: {
      name: 'Contact items',
      control: 'text',
      description: 'Comma-separated \`Label:href\` pairs, slotted as \`mms-link slot="contact"\`. Use a \`tel:\`/\`mailto:\` href for phone/email, same as any other link the consumer supplies.',
      table: {
        category: 'Content'
      }
    },
    socialLinks: {
      name: 'Social links',
      control: 'text',
      description: 'Comma-separated \`Label:icon\` pairs, slotted as an \`<a slot="social">\` wrapping \`mms-icon\`. Which platforms to include and what they link to is entirely up to the consumer.',
      table: {
        category: 'Content'
      }
    },
    languageLabel: {
      name: 'Language control label',
      control: 'text',
      description: 'Label for the selected English option in the \`language\` slot, demonstrated with \`mms-select\` (the common real-world pattern). Clear the field to omit the slot entirely — a link or button works too, whichever better matches how your app switches locale.',
      table: {
        category: 'Content'
      }
    },
    container: {
      name: 'Container',
      control: 'select',
      options: ['content', 'full'],
      description: 'Caps the footer row, or does not. \`content\` (default) limits it to \`--layout-content-max-width\` (1280px) and centres it. \`full\` removes the cap so the band spans edge-to-edge.',
      table: {
        category: 'Visual'
      }
    },
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
      description: 'Brand theme',
      table: {
        category: 'Global'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Padding density',
      table: {
        category: 'Global'
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: {
            container: string;
            copyrightText: string;
            finePrintText: string;
            footerLinks: string;
            socialLinks: string;
            languageLabel: string;
            contactItems: string;
            density: string;
          };
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.container !== 'content') attrs.push(\`container="\${a.container}"\`);
          if (a.copyrightText) attrs.push(\`copyright-text="\${a.copyrightText}"\`);
          if (a.finePrintText) attrs.push(\`fine-print-text="\${a.finePrintText}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          const contact = parseContactSpec(a.contactItems).map(({
            label,
            href
          }) => \`  <mms-link slot="contact" href="\${href}" label="\${label}"></mms-link>\`);
          const social = parseSocialSpec(a.socialLinks).map(({
            label,
            icon
          }) => \`  <a slot="social" href="#" aria-label="\${label}"><mms-icon name="\${icon ?? ''}"></mms-icon></a>\`);
          const language = a.languageLabel ? [\`  <mms-select slot="language" size="sm" placeholder="Language" value="en"></mms-select>\`] : [];
          const links = parseCommaSeparated(a.footerLinks).map(label => \`  <mms-link slot="links" href="#" label="\${label}"></mms-link>\`);
          return \`<mms-footer\\n  \${attrs.join('\\n  ')}\\n>\\n\${[...contact, ...social, ...language, ...links].join('\\n')}\\n</mms-footer>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none'
    }
  },
  render: (args: {
    container: string;
    copyrightText: string;
    finePrintText: string;
    footerLinks: string;
    socialLinks: string;
    languageLabel: string;
    contactItems: string;
    density: string;
  }) => html\`
    <mms-footer
      container=\${args.container}
      copyright-text=\${args.copyrightText || nothing}
      fine-print-text=\${args.finePrintText || nothing}
      data-density=\${args.density === 'compact' ? 'compact' : nothing}
    >
      \${sampleContent(args.footerLinks, args.socialLinks, args.languageLabel, args.contactItems)}
    </mms-footer>
  \`
}`,...U.parameters?.docs?.source}}},W=[`Overview`,`PlaygroundStory`]}));G();export{H as Overview,U as PlaygroundStory,W as __namedExportsOrder,P as default,G as n,D as t};