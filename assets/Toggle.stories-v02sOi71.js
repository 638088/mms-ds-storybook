import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,t as d}from"./decorate-Bygya6Tu.js";import{r as f,t as p}from"./focus.css-BrGuLyxh.js";import{n as m,t as h}from"./validate-color-scheme-CB3dwOoW.js";import{r as g,t as _}from"./if-defined-Cjo0XTWN.js";import{i as v,n as y,r as b}from"./theme-constraints-xITgb_Dw.js";import{a as x,o as S,r as C,t as w}from"./a11y-outcome-CiARakld.js";var T,E,D=e((()=>{o(),u(),_(),f(),h(),l(),T={fromAttribute:e=>e!==`false`,toAttribute:e=>e?null:`false`},E=class extends i{constructor(...e){super(...e),this.label=``,this.checked=!1,this.colorScheme=`primary`,this.state=`default`,this.readonly=!1,this.disabled=!1,this.showIcon=!0,this.heading=``,this.helperText=``,this.fieldName=``,this.checkedValue=`on`}static{this.styles=[p,r`
      /* ═══════════════════════════════════════════════════════════════════════
         HOST — Color Scheme Mapping
         ═══════════════════════════════════════════════════════════════════════ */
      :host {
        display: inline-flex;
        flex-direction: column;
        gap: var(--spacing-xs2);
        font-family: var(--type-body-md-family);

        /* Default: primary color scheme */
        --_fill: var(--color-primary-9);
        --_fill-hover: var(--color-primary-10, var(--color-primary-9));
        --_hover-border: var(--color-primary-8);
      }

      :host([color-scheme='secondary']) {
        --_fill: var(--color-secondary-9);
        --_fill-hover: var(--color-secondary-10, var(--color-secondary-9));
        --_hover-border: var(--color-secondary-8);
      }

      :host([color-scheme='accent']) {
        --_fill: var(--color-accent-9);
        --_fill-hover: var(--color-accent-10, var(--color-accent-9));
        --_hover-border: var(--color-accent-8, var(--color-accent-9));
      }

      :host([color-scheme='onyx']) {
        --_fill: var(--color-onyx-9);
        --_fill-hover: var(--color-onyx-10, var(--color-onyx-9));
        --_hover-border: var(--color-onyx-8);
      }

      :host([disabled]) {
        cursor: not-allowed;
        pointer-events: none;
      }

      :host([readonly]) {
        cursor: default;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         HEADING — Optional title above toggle
         ═══════════════════════════════════════════════════════════════════════ */
      .heading {
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        color: var(--color-text-default);
        margin-bottom: var(--spacing-xs2);
      }

      :host([disabled]) .heading {
        color: var(--color-disabled-text);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         TOGGLE ROW — Switch + Label
         ═══════════════════════════════════════════════════════════════════════ */
      .toggle-row {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-sm1);
        cursor: pointer;
      }

      :host([disabled]) .toggle-row {
        cursor: not-allowed;
        pointer-events: none;
      }

      :host([readonly]) .toggle-row {
        cursor: default;
        pointer-events: none;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         TOGGLE WRAPPER — Touch target (track height + established
         checkbox touch-target padding convention: visual + 8px)
         ═══════════════════════════════════════════════════════════════════════ */
      .toggle-wrapper {
        position: relative;
        width: var(--size-xl2); /* 48px */
        height: var(--size-lg2); /* 32px touch target (24px track + 8px, per checkbox convention) */
        flex-shrink: 0;
      }

      .native-input {
        position: absolute;
        inset: 0;
        opacity: 0;
        margin: 0;
        cursor: inherit;
        z-index: 2;
      }

      /* Track (background) */
      .track {
        position: absolute;
        top: 4px; /* (32 - 24) / 2 */
        left: 0;
        width: 100%;
        height: var(--size-lg1); /* 24px */
        border-radius: var(--radius-full);
        background: var(--color-border-interactive);
        transition: background var(--motion-duration-fast) var(--motion-easing-standard);
        box-sizing: border-box;
        z-index: 0;
      }

      /* Hover background — centered on thumb. Base state is fully transparent
         (fill + border); on hover it fills to match the thumb's own color
         and gains a colorScheme-scoped border, so the thumb reads as
         enlarging inside a bordered ring rather than showing a separate
         tint behind it (see HOVER STATE below). */
      .hover-bg {
        position: absolute;
        top: 0;
        left: -4px; /* thumb-left(2px) - (halo(32px) - thumb(20px)) / 2 (6px) */
        width: var(--size-lg2); /* 32px */
        height: var(--size-lg2);
        border-radius: 50%;
        background: transparent;
        border: var(--border-width-sm) solid transparent;
        box-sizing: border-box;
        transition:
          background var(--motion-duration-fast) var(--motion-easing-standard),
          border-color var(--motion-duration-fast) var(--motion-easing-standard);
        z-index: 1;
      }

      /* Thumb (the circle that moves) */
      .thumb {
        position: absolute;
        top: 6px; /* (32 - 20) / 2 */
        left: 2px;
        width: var(--size-md2); /* 20px */
        height: var(--size-md2);
        border-radius: 50%;
        background: var(--color-surface-raised);
        display: flex;
        align-items: center;
        justify-content: center;
        transition:
          left var(--motion-duration-fast) var(--motion-easing-standard),
          background var(--motion-duration-fast) var(--motion-easing-standard);
        box-sizing: border-box;
        z-index: 2;
      }

      /* Icon inside thumb — no mms-icon size token exists below 16px
         (--icon-size-sm); drawn as an inline SVG at Marina's native 10px. */
      .icon {
        width: 10px;
        height: 10px;
        color: var(--color-border-interactive);
        transition: color var(--motion-duration-fast) var(--motion-easing-standard);
      }

      .icon svg {
        display: block;
        width: 100%;
        height: 100%;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         CHECKED STATE
         ═══════════════════════════════════════════════════════════════════════ */
      :host([checked]) .track {
        background: var(--_fill);
      }

      :host([checked]) .thumb {
        left: calc(100% - var(--size-md2) - 2px); /* 48 - 20 - 2 */
      }

      :host([checked]) .hover-bg {
        /* Mirrors the thumb's own checked offset (100% - 20px - 2px), minus the
           same 6px halo margin used in the unchecked .hover-bg rule above
           ((32px halo - 20px thumb) / 2). A naive port of Marina's checked-state
           formula (width - haloSize + 2px) only centers correctly for Marina's
           28px halo / 20px thumb ratio (4px margin); mms's 32px halo needs a
           6px margin, so that formula lands 2px off-center here. */
        left: calc(100% - var(--size-md2) - 2px - 6px); /* 48 - 20 - 2 - 6 */
      }

      :host([checked]) .icon {
        color: var(--_fill);
      }

      :host([checked]:not([disabled]):not([readonly])) .toggle-row:hover .thumb,
      :host([checked][state='hover']:not([disabled]):not([readonly])) .thumb {
        background: var(--color-surface-raised);
      }

      :host([checked]:not([disabled]):not([readonly])) .toggle-row:hover .track,
      :host([checked][state='hover']:not([disabled]):not([readonly])) .track {
        background: var(--_fill-hover);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         HOVER STATE (EXPERIMENT) — hover-bg fill matches the thumb's own
         color (--color-surface-raised), so hover reads as the thumb circle
         enlarging inside a colorScheme-scoped border ring (--_hover-border,
         which resolves to that scheme's own -8 step) rather than a separate
         background tint.
         ═══════════════════════════════════════════════════════════════════════ */
      :host(:not([disabled]):not([readonly])) .toggle-row:hover .hover-bg,
      :host([state='hover']:not([disabled]):not([readonly])) .hover-bg {
        background: var(--color-surface-raised);
        border-color: var(--_hover-border);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         FOCUS STATE
         ═══════════════════════════════════════════════════════════════════════ */
      .native-input:focus-visible ~ .track,
      :host([state='focus']) .track {
        outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
        outline-offset: var(--focus-ring-offset);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         DISABLED STATE
         ═══════════════════════════════════════════════════════════════════════ */
      :host([disabled]) .track {
        background: var(--color-disabled-surface);
      }

      :host([disabled]) .thumb {
        background: var(--color-disabled-stroke);
      }

      :host([disabled][checked]) .track {
        background: var(--color-disabled-surface);
      }

      :host([disabled]) .icon {
        color: var(--color-surface-raised);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         READONLY STATE
         ═══════════════════════════════════════════════════════════════════════ */
      :host([readonly]) .track {
        background: transparent;
        border: var(--border-width-xs) solid var(--color-disabled-stroke);
      }

      :host([readonly]) .thumb {
        border: var(--border-width-xs) solid var(--color-disabled-stroke);
      }

      :host([readonly][checked]) .track {
        background: transparent;
        border: var(--border-width-xs) solid var(--color-disabled-stroke);
      }

      :host([readonly]) .icon {
        color: var(--color-text-default);
      }

      :host([readonly][checked]) .icon {
        color: var(--color-text-default);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         LABEL TEXT
         ═══════════════════════════════════════════════════════════════════════ */
      .label {
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        color: var(--color-text-default);
        user-select: none;
      }

      :host([disabled]) .label {
        color: var(--color-disabled-text);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         HELPER TEXT
         ═══════════════════════════════════════════════════════════════════════ */
      .helper-text {
        font-size: var(--type-ui-caption-size);
        line-height: var(--type-ui-caption-line-height);
        color: var(--color-text-subtle);
      }

      :host([disabled]) .helper-text {
        color: var(--color-disabled-text);
      }
    `]}firstUpdated(){m(this,this.colorScheme,`mms-toggle`)}_handleChange(e){if(this.disabled||this.readonly){e.preventDefault();return}let t=e.target;this.checked=t.checked,this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:this.checked,value:this.checkedValue},bubbles:!0,composed:!0}))}_handleClick(e){(this.disabled||this.readonly)&&e.preventDefault()}get _ariaDescribedBy(){return this.helperText?`helper-text`:void 0}_renderIcon(){return this.checked?a`<span class="icon" aria-hidden="true">
          <svg viewBox="0 0 10 10" fill="none">
            <path d="M1 5L4 8L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>`:a`<span class="icon" aria-hidden="true">
          <svg viewBox="0 0 10 10" fill="none">
            <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </span>`}render(){return a`
      ${this.heading?a`<span class="heading" id="heading">${this.heading}</span>`:n}

      <label class="toggle-row" @click=${this._handleClick}>
        <span class="toggle-wrapper">
          <input
            type="checkbox"
            role="switch"
            class="native-input"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            aria-checked=${this.checked?`true`:`false`}
            aria-readonly=${g(this.readonly?`true`:void 0)}
            aria-describedby=${g(this._ariaDescribedBy)}
            name=${g(this.fieldName||void 0)}
            value=${this.checkedValue}
            @change=${this._handleChange}
          />
          <span class="track"></span>
          <span class="hover-bg"></span>
          <span class="thumb">${this.showIcon?this._renderIcon():n}</span>
        </span>
        ${this.label?a`<span class="label">${this.label}</span>`:n}
      </label>

      ${this.helperText?a`<span class="helper-text" id="helper-text">${this.helperText}</span>`:n}
    `}},d([c({type:String})],E.prototype,`label`,void 0),d([c({type:Boolean,reflect:!0})],E.prototype,`checked`,void 0),d([c({type:String,reflect:!0,attribute:`color-scheme`})],E.prototype,`colorScheme`,void 0),d([c({type:String,reflect:!0})],E.prototype,`state`,void 0),d([c({type:Boolean,reflect:!0})],E.prototype,`readonly`,void 0),d([c({type:Boolean,reflect:!0})],E.prototype,`disabled`,void 0),d([c({reflect:!0,attribute:`show-icon`,converter:T})],E.prototype,`showIcon`,void 0),d([c({type:String})],E.prototype,`heading`,void 0),d([c({type:String,attribute:`helper-text`})],E.prototype,`helperText`,void 0),d([c({type:String,attribute:`field-name`})],E.prototype,`fieldName`,void 0),d([c({type:String,attribute:`checked-value`})],E.prototype,`checkedValue`,void 0),E=d([s(`mms-toggle`)],E),customElements.get(`mms-toggle`)||customElements.define(`mms-toggle`,E)})),O=t({Overview:()=>N,PlaygroundStory:()=>P,__namedExportsOrder:()=>F,default:()=>k}),k,A,j,M,N,P,F,I=e((()=>{o(),D(),b(),x(),w(),k={title:`Forms/Toggle`,tags:[`!autodocs`]},A={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},j=`680px`,M=`960px`,N={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${M}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${A.h1}">Toggle</h1>
      <p style="${A.body} opacity: 0.85; max-width: ${j}; margin-bottom: 2rem;">
        Toggles let users switch a single setting on or off immediately. Unlike checkboxes, changes take effect right away — there's no separate "submit" step implied.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- States -->
      <h2 style="${A.h2}">Selection states</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${A.h3}">Off</p>
          <p style="${A.bodySm} opacity: 0.85; flex: 1;">
            Default state. The setting is disabled.
          </p>
          <div style="margin-top: 1rem;"><mms-toggle label="Off"></mms-toggle></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${A.h3}">On</p>
          <p style="${A.bodySm} opacity: 0.85; flex: 1;">
            The setting is enabled.
          </p>
          <div style="margin-top: 1rem;"><mms-toggle label="On" checked></mms-toggle></div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="${A.h2}">Color schemes</h2>
      <p style="${A.bodySm} opacity: 0.85; max-width: ${j}; margin-bottom: 1.5rem;">
        The <code style="${A.monoSm}">color-scheme</code> prop controls which color palette the toggle uses when checked.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${A.h3}">Primary &amp; Secondary</p>
          <p style="${A.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Brand colors defined by the active theme.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-toggle color-scheme="primary" label="Primary" checked></mms-toggle>
            <mms-toggle color-scheme="secondary" label="Secondary" checked></mms-toggle>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${A.h3}">Accent &amp; Onyx</p>
          <p style="${A.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            <strong>Accent</strong> is theme-specific highlight. <strong>Onyx</strong> is structural black.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-toggle color-scheme="accent" label="Accent" checked></mms-toggle>
            <mms-toggle color-scheme="onyx" label="Onyx" checked></mms-toggle>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Icon -->
      <h2 style="${A.h2}">Thumb icon</h2>
      <p style="${A.bodySm} opacity: 0.85; max-width: ${j}; margin-bottom: 1.5rem;">
        A check/close glyph inside the thumb reinforces state for users who rely on shape rather than color. Set <code style="${A.monoSm}">show-icon="false"</code> to render a plain thumb.
      </p>

      <div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 2rem;">
        <mms-toggle label="With icon (default)" checked></mms-toggle>
        <mms-toggle label="Without icon" checked show-icon="false"></mms-toggle>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="${A.h2}">With helper text</h2>
      <p style="${A.bodySm} opacity: 0.85; max-width: ${j}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the toggle.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-toggle
          label="Enable notifications"
          helper-text="You'll receive an alert when a case status changes."
        ></mms-toggle>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Heading -->
      <h2 style="${A.h2}">With heading</h2>
      <p style="${A.bodySm} opacity: 0.85; max-width: ${j}; margin-bottom: 1.5rem;">
        An optional heading can be displayed above the toggle for field labels.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-toggle
          heading="Account preferences"
          label="Two-factor authentication"
          helper-text="Requires a verification code at sign-in."
          checked
        ></mms-toggle>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled & Readonly -->
      <h2 style="${A.h2}">Disabled &amp; read-only</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${A.h3}">Disabled</p>
          <p style="${A.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents interaction and dims appearance.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-toggle label="Disabled off" disabled></mms-toggle>
            <mms-toggle label="Disabled on" disabled checked></mms-toggle>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${A.h3}">Read-only</p>
          <p style="${A.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents changes but remains visible and focusable.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-toggle label="Read-only off" readonly></mms-toggle>
            <mms-toggle label="Read-only on" readonly checked></mms-toggle>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Toggle Only (no label) -->
      <h2 style="${A.h2}">Toggle only</h2>
      <p style="${A.bodySm} opacity: 0.85; max-width: ${j}; margin-bottom: 1.5rem;">
        When no label is provided, only the toggle switch is rendered. Useful for table rows or other constrained layouts — pair with an external, associated label when used this way.
      </p>

      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem;">
        <mms-toggle></mms-toggle>
        <mms-toggle checked></mms-toggle>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${A.h2}">Accessibility</h2>

      <h3 style="${A.h3}">WCAG 2.2 AA Compliance</h3>
      ${C(S.toggle.rows)}

      <h3 style="${A.h3}">Screen Reader Behavior</h3>
      <ul style="${A.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, checked state ("on"/"off"), and "switch"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Toggle:</strong> Announces the new state immediately on change</li>
        <li style="margin-bottom: 0.5rem;"><strong>Read-only:</strong> Announces "read only" via <code style="${A.monoSm}">aria-readonly</code></li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="${A.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${A.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the toggle</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggle checked state</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},P={name:`Playground`,tags:[`!dev`],args:{label:`Enable notifications`,checked:!1,colorScheme:`primary`,state:`default`,readonly:!1,disabled:!1,showIcon:!0,heading:``,helperText:``,fieldName:``,checkedValue:`on`,theme:`maximus`},decorators:[e=>a`
        <div
          style="
            min-height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          ${e()}
        </div>
      `],argTypes:{label:{name:`Label`,control:`text`,description:`Clickable text next to the toggle`,table:{category:`Core Interaction`}},checked:{name:`Checked`,control:`boolean`,description:`Whether the toggle is on`,table:{category:`Core Interaction`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Brand color applied when checked`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`],description:`Interactive state preview (for documentation)`,table:{category:`Visual`}},readonly:{name:`Read-only`,control:`boolean`,description:`Prevents changes but remains focusable and visible`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction and dims appearance`,table:{category:`Visual`}},showIcon:{name:`Show Icon`,control:`boolean`,description:`Shows a check/close glyph inside the thumb`,table:{category:`Visual`}},heading:{name:`Heading`,control:`text`,description:`Optional title displayed above the toggle`,table:{category:`Secondary Content`}},helperText:{name:`Helper Text`,control:`text`,description:`Supplementary guidance displayed below`,table:{category:`Secondary Content`}},fieldName:{name:`Field Name`,control:`text`,description:`Identifier used when submitting form data`,table:{category:`Form Integration`}},checkedValue:{name:`Checked Value`,control:`text`,description:`Value submitted to the form when checked`,table:{category:`Form Integration`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`uss-oh-dvs`,`default`],description:`Brand theme`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.checked&&r.push(`checked`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.readonly&&r.push(`readonly`),n.disabled&&r.push(`disabled`),n.showIcon===!1&&r.push(`show-icon="false"`),n.heading&&r.push(`heading="${n.heading}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.fieldName&&r.push(`field-name="${n.fieldName}"`),n.checkedValue!==`on`&&r.push(`checked-value="${n.checkedValue}"`),`<mms-toggle\n  ${r.join(`
  `)}\n></mms-toggle>`},language:`html`}}},render:e=>{let t=v(e.theme,e.colorScheme),n=y(e.theme,e.colorScheme);if(!t){let t=n===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,r=n===2?`Lacks step 10 (hover state). Use for branded text or badges, not toggles.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return a`
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
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            <strong>${t}:</strong> ${r}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
            See <em>Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      `}return a`
      <mms-toggle
        label=${e.label}
        ?checked=${e.checked}
        color-scheme=${e.colorScheme}
        state=${e.state}
        ?readonly=${e.readonly}
        ?disabled=${e.disabled}
        ?show-icon=${e.showIcon}
        heading=${e.heading}
        helper-text=${e.helperText}
        field-name=${e.fieldName}
        checked-value=${e.checkedValue}
      ></mms-toggle>
    `}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Toggle</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Toggles let users switch a single setting on or off immediately. Unlike checkboxes, changes take effect right away — there's no separate "submit" step implied.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- States -->
      <h2 style="\${t.h2}">Selection states</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Off</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Default state. The setting is disabled.
          </p>
          <div style="margin-top: 1rem;"><mms-toggle label="Off"></mms-toggle></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">On</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            The setting is enabled.
          </p>
          <div style="margin-top: 1rem;"><mms-toggle label="On" checked></mms-toggle></div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="\${t.h2}">Color schemes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">color-scheme</code> prop controls which color palette the toggle uses when checked.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Primary &amp; Secondary</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Brand colors defined by the active theme.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-toggle color-scheme="primary" label="Primary" checked></mms-toggle>
            <mms-toggle color-scheme="secondary" label="Secondary" checked></mms-toggle>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Accent &amp; Onyx</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            <strong>Accent</strong> is theme-specific highlight. <strong>Onyx</strong> is structural black.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-toggle color-scheme="accent" label="Accent" checked></mms-toggle>
            <mms-toggle color-scheme="onyx" label="Onyx" checked></mms-toggle>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Icon -->
      <h2 style="\${t.h2}">Thumb icon</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        A check/close glyph inside the thumb reinforces state for users who rely on shape rather than color. Set <code style="\${t.monoSm}">show-icon="false"</code> to render a plain thumb.
      </p>

      <div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 2rem;">
        <mms-toggle label="With icon (default)" checked></mms-toggle>
        <mms-toggle label="Without icon" checked show-icon="false"></mms-toggle>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the toggle.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-toggle
          label="Enable notifications"
          helper-text="You'll receive an alert when a case status changes."
        ></mms-toggle>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Heading -->
      <h2 style="\${t.h2}">With heading</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        An optional heading can be displayed above the toggle for field labels.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-toggle
          heading="Account preferences"
          label="Two-factor authentication"
          helper-text="Requires a verification code at sign-in."
          checked
        ></mms-toggle>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled & Readonly -->
      <h2 style="\${t.h2}">Disabled &amp; read-only</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Disabled</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents interaction and dims appearance.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-toggle label="Disabled off" disabled></mms-toggle>
            <mms-toggle label="Disabled on" disabled checked></mms-toggle>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Read-only</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents changes but remains visible and focusable.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-toggle label="Read-only off" readonly></mms-toggle>
            <mms-toggle label="Read-only on" readonly checked></mms-toggle>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Toggle Only (no label) -->
      <h2 style="\${t.h2}">Toggle only</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        When no label is provided, only the toggle switch is rendered. Useful for table rows or other constrained layouts — pair with an external, associated label when used this way.
      </p>

      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem;">
        <mms-toggle></mms-toggle>
        <mms-toggle checked></mms-toggle>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['toggle'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, checked state ("on"/"off"), and "switch"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Toggle:</strong> Announces the new state immediately on change</li>
        <li style="margin-bottom: 0.5rem;"><strong>Read-only:</strong> Announces "read only" via <code style="\${t.monoSm}">aria-readonly</code></li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="\${t.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="\${t.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the toggle</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggle checked state</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Core Interaction
    label: 'Enable notifications',
    checked: false,
    // Visual
    colorScheme: 'primary',
    state: 'default',
    readonly: false,
    disabled: false,
    showIcon: true,
    // Secondary Content
    heading: '',
    helperText: '',
    // Form Integration
    fieldName: '',
    checkedValue: 'on',
    // Global Props
    theme: 'maximus'
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div
          style="
            min-height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          \${story()}
        </div>
      \`;
  }],
  argTypes: {
    // ── Core Interaction ──────────────────────────────────────
    label: {
      name: 'Label',
      control: 'text',
      description: 'Clickable text next to the toggle',
      table: {
        category: 'Core Interaction'
      }
    },
    checked: {
      name: 'Checked',
      control: 'boolean',
      description: 'Whether the toggle is on',
      table: {
        category: 'Core Interaction'
      }
    },
    // ── Visual ────────────────────────────────────────────────
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Brand color applied when checked',
      table: {
        category: 'Visual'
      }
    },
    state: {
      name: 'State',
      control: 'select',
      options: ['default', 'hover', 'focus'],
      description: 'Interactive state preview (for documentation)',
      table: {
        category: 'Visual'
      }
    },
    readonly: {
      name: 'Read-only',
      control: 'boolean',
      description: 'Prevents changes but remains focusable and visible',
      table: {
        category: 'Visual'
      }
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Prevents interaction and dims appearance',
      table: {
        category: 'Visual'
      }
    },
    showIcon: {
      name: 'Show Icon',
      control: 'boolean',
      description: 'Shows a check/close glyph inside the thumb',
      table: {
        category: 'Visual'
      }
    },
    // ── Secondary Content ─────────────────────────────────────
    heading: {
      name: 'Heading',
      control: 'text',
      description: 'Optional title displayed above the toggle',
      table: {
        category: 'Secondary Content'
      }
    },
    helperText: {
      name: 'Helper Text',
      control: 'text',
      description: 'Supplementary guidance displayed below',
      table: {
        category: 'Secondary Content'
      }
    },
    // ── Form Integration ──────────────────────────────────────
    fieldName: {
      name: 'Field Name',
      control: 'text',
      description: 'Identifier used when submitting form data',
      table: {
        category: 'Form Integration'
      }
    },
    checkedValue: {
      name: 'Checked Value',
      control: 'text',
      description: 'Value submitted to the form when checked',
      table: {
        category: 'Form Integration'
      }
    },
    // ── Global Props ──────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'va-gov', 'uss-oh-dvs', 'default'],
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
          args: Record<string, string | boolean>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.label) attrs.push(\`label="\${a.label}"\`);
          if (a.checked) attrs.push('checked');
          if (a.colorScheme !== 'primary') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.readonly) attrs.push('readonly');
          if (a.disabled) attrs.push('disabled');
          if (a.showIcon === false) attrs.push('show-icon="false"');
          if (a.heading) attrs.push(\`heading="\${a.heading}"\`);
          if (a.helperText) attrs.push(\`helper-text="\${a.helperText}"\`);
          if (a.fieldName) attrs.push(\`field-name="\${a.fieldName}"\`);
          if (a.checkedValue !== 'on') attrs.push(\`checked-value="\${a.checkedValue}"\`);
          return \`<mms-toggle\\n  \${attrs.join('\\n  ')}\\n></mms-toggle>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    label: string;
    checked: boolean;
    colorScheme: string;
    state: string;
    readonly: boolean;
    disabled: boolean;
    showIcon: boolean;
    heading: string;
    helperText: string;
    fieldName: string;
    checkedValue: string;
    theme: string;
  }) => {
    // Validate colorScheme × theme combination using shared config
    const valid = isValidColorScheme(args.theme as Theme, args.colorScheme as ColorScheme);
    const tier = getPaletteTier(args.theme as Theme, args.colorScheme as ColorScheme);
    if (!valid) {
      const tierLabel = tier === 2 ? 'Tier 2 (Text + Surface)' : 'Tier 3 (Decorative)';
      const tierReason = tier === 2 ? 'Lacks step 10 (hover state). Use for branded text or badges, not toggles.' : 'Lacks text contrast and hover states. Decorative backgrounds only.';
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
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            <strong>\${tierLabel}:</strong> \${tierReason}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
            See <em>Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      \`;
    }
    return html\`
      <mms-toggle
        label=\${args.label}
        ?checked=\${args.checked}
        color-scheme=\${args.colorScheme}
        state=\${args.state}
        ?readonly=\${args.readonly}
        ?disabled=\${args.disabled}
        ?show-icon=\${args.showIcon}
        heading=\${args.heading}
        helper-text=\${args.helperText}
        field-name=\${args.fieldName}
        checked-value=\${args.checkedValue}
      ></mms-toggle>
    \`;
  }
}`,...P.parameters?.docs?.source}}},F=[`Overview`,`PlaygroundStory`]}));I();export{N as Overview,P as PlaygroundStory,F as __namedExportsOrder,k as default,I as n,O as t};