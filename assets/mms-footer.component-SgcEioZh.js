import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-B0BZwaT1.js";import{E as o,S as s,T as c,b as l,g as u,i as d,n as f,o as p,r as m,w as h}from"./mms-icon.component-DFVI3nJi.js";import{a as g,i as _,n as v,r as y,t as b}from"./logo-registry-X0LMqnmS.js";var x,S=e((()=>{a(),o(),u(),d(),y(),m(),x=class extends r{constructor(...e){super(...e),this.container=`content`,this.copyrightText=``,this.finePrintText=``,this._hasLogo=!1,this._hasContact=!1,this._hasSocial=!1,this._hasLanguage=!1,this._hasLinks=!1,this._hasFinePrint=!1,this._theme=``}connectedCallback(){super.connectedCallback(),this._syncSlotPresence(),this._resolveTheme();let e=this.closest(`[data-theme]`);e&&typeof MutationObserver<`u`&&(this._themeObserver=new MutationObserver(()=>this._resolveTheme()),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`data-theme`]})),typeof MutationObserver<`u`&&(this._childObserver=new MutationObserver(()=>this._syncSlotPresence()),this._childObserver.observe(this,{childList:!0}))}disconnectedCallback(){super.disconnectedCallback(),this._childObserver?.disconnect(),this._childObserver=void 0,this._themeObserver?.disconnect(),this._themeObserver=void 0}_syncSlotPresence(){let e=e=>this.querySelector(`:scope > [slot="${e}"]`)!==null;this._hasLogo=e(`logo`)||e(`logo-compact`),this._hasContact=e(`contact`),this._hasSocial=e(`social`),this._hasLanguage=e(`language`),this._hasLinks=e(`links`),this._hasFinePrint=e(`fine-print`)||this.finePrintText.length>0}_handleSlotChange(){this._syncSlotPresence()}renderBrandLogo(e){let n=this._brandFromTheme;if(_(n))return t;let r=n?v(n,e)??(e===`compact`?v(n,`full`):void 0):void 0;return r?i`<svg
      class="brand-logo brand-logo--${e}"
      viewBox=${r.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label=${n}
    >
      ${p(r.inner)}
    </svg>`:i`<div
        class="brand-logo brand-logo--${e} brand-logo--placeholder"
        role="img"
        aria-label=${n?`${n} logo placeholder`:`Logo placeholder`}
      >
        ${e===`compact`?`◻`:`logo`}
      </div>`}get _brandFromTheme(){return this._theme.replace(/-dark$/,``)}_resolveTheme(){let e=this.closest(`[data-theme]`)?.getAttribute(`data-theme`)??``;e!==this._theme&&(this._theme=e),this.style.setProperty(`--_brand-logo-base`,`${b(this._brandFromTheme)}px`),this._ensureLogos(this._brandFromTheme)}_ensureLogos(e){_(e)&&g(e).then(()=>{this._resolveTheme(),this.requestUpdate()})}render(){let e=this._hasLogo||this._hasContact||this._hasSocial||this._hasLanguage,n=this.copyrightText.length>0||this._hasFinePrint;return i`
      <footer role="contentinfo">
        <div class="footer-inner">
          ${e?i`
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
              `:t}
          ${this._hasLinks?i`
                <div class="links-row">
                  <slot name="links" @slotchange=${this._handleSlotChange}></slot>
                </div>
              `:t}
          ${n?i`
                <div class="fine-print-row">
                  <div class="fine-print-divider"></div>
                  <div class="fine-print-text">
                    ${this.copyrightText?i`<span class="copyright">${this.copyrightText}</span> `:t}
                    <slot name="fine-print" @slotchange=${this._handleSlotChange}>${this.finePrintText}</slot>
                  </div>
                </div>
              `:t}
        </div>
      </footer>
    `}static{this.styles=[c,n`
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
  `]}},f([s({type:String,reflect:!0})],x.prototype,`container`,void 0),f([s({type:String,attribute:`copyright-text`})],x.prototype,`copyrightText`,void 0),f([s({type:String,attribute:`fine-print-text`})],x.prototype,`finePrintText`,void 0),f([l()],x.prototype,`_hasLogo`,void 0),f([l()],x.prototype,`_hasContact`,void 0),f([l()],x.prototype,`_hasSocial`,void 0),f([l()],x.prototype,`_hasLanguage`,void 0),f([l()],x.prototype,`_hasLinks`,void 0),f([l()],x.prototype,`_hasFinePrint`,void 0),f([l()],x.prototype,`_theme`,void 0),x=f([h(`mms-footer`)],x)}));export{S as t};