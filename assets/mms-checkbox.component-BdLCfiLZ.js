import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-CBo78ikN.js";import{d as o,l as s,n as c,r as l,t as u}from"./decorate-Bygya6Tu.js";import{r as d,t as f}from"./focus.css-BrGuLyxh.js";import{n as p,t as m}from"./validate-color-scheme-CB3dwOoW.js";import{r as h,t as g}from"./if-defined-Cjo0XTWN.js";import{n as _,r as v,t as y}from"./checkbox-indicator.parts-Balp8Zsp.js";var b,x=e((()=>{a(),l(),g(),d(),m(),_(),c(),b=class extends r{constructor(...e){super(...e),this.label=``,this.checked=!1,this.indeterminate=!1,this.colorScheme=`primary`,this.size=`md`,this.state=`default`,this.readonly=!1,this.disabled=!1,this.error=!1,this.errorText=``,this.required=!1,this.heading=``,this.helperText=``,this.fieldName=``,this.checkedValue=`on`}static{this.styles=[f,y,n`
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
        --_hover-bg: var(--color-primary-2);
        --_stroke: var(--color-border-interactive);
        --_stroke-hover: var(--color-border-interactive-hover);
        --_on-fill: var(--color-text-on-primary);
      }

      :host([color-scheme='secondary']) {
        --_fill: var(--color-secondary-9);
        --_fill-hover: var(--color-secondary-10, var(--color-secondary-9));
        --_hover-bg: var(--color-secondary-2);
        --_on-fill: var(--color-text-on-secondary);
      }

      :host([color-scheme='accent']) {
        --_fill: var(--color-accent-9);
        --_fill-hover: var(--color-accent-10, var(--color-accent-9));
        --_hover-bg: var(--color-accent-2);
        --_on-fill: var(--color-text-on-accent);
      }

      :host([color-scheme='onyx']) {
        --_fill: var(--color-onyx-9);
        --_fill-hover: var(--color-onyx-10, var(--color-onyx-9));
        --_hover-bg: var(--color-onyx-2);
        --_on-fill: var(--color-text-on-onyx);
      }

      /* Mirrors the .checkbox-row min-height/margin-bottom pair below: the
         host element itself (queried directly by mms-checkbox-group's a11y
         tests, from outside the shadow root) must also satisfy the 24px
         WCAG 2.5.8 floor at sm. margin-bottom cancels the growth so stacked
         siblings in a group are unaffected. */
      :host([size='sm']) {
        min-height: var(--size-lg1); /* 24px — WCAG 2.5.8 target size floor */
        margin-bottom: -2px;         /* Offsets the min-height growth; net layout footprint unchanged */
      }

      :host([disabled]) {
        cursor: not-allowed;
        pointer-events: none;
      }

      :host([readonly]) {
        cursor: default;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         HEADING — Optional title above checkbox
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

      .required-indicator {
        color: var(--color-input-border-error);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         CHECKBOX ROW — Indicator + Label
         ═══════════════════════════════════════════════════════════════════════ */
      .checkbox-row {
        display: inline-flex;
        align-items: flex-start;
        gap: var(--spacing-sm1);
        cursor: pointer;
      }

      /* At sm, the indicator-wrapper's -2px margin-top (below) reduces its
         contribution to this row's flex cross-size below the 24px WCAG 2.5.8
         floor (row measures 22px). min-height restores the floor on the row's
         own box; margin-bottom cancels the resulting growth so layout below
         is unaffected — indicator/label positions and all visible pixels are
         unchanged. */
      :host([size='sm']) .checkbox-row {
        min-height: var(--size-lg1); /* 24px — WCAG 2.5.8 target size floor */
        margin-bottom: -2px;         /* Offsets the min-height growth; net layout footprint unchanged */
      }

      :host([disabled]) .checkbox-row {
        cursor: not-allowed;
        pointer-events: none;
      }

      :host([readonly]) .checkbox-row {
        cursor: default;
        pointer-events: none;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         INDICATOR WRAPPER — Contains touch target + visual indicator
         Marina pattern: indicator flush-left, hover-bg bleeds RIGHT
         ═══════════════════════════════════════════════════════════════════════ */
      .indicator-wrapper {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        flex-shrink: 0;
      }

      /* Size variants for wrapper — width matches indicator, height matches touch target */
      :host([size='sm']) .indicator-wrapper {
        width: var(--size-sm2);   /* 12px indicator */
        height: var(--size-lg1);  /* 24px touch target */
        margin-top: -2px;         /* Pull box up to align with label */
      }

      :host([size='md']) .indicator-wrapper,
      :host(:not([size])) .indicator-wrapper {
        width: var(--size-md1);   /* 16px indicator */
        height: var(--size-lg1);  /* 24px touch target */
        /* No margin needed — 16px/24px naturally aligns */
      }

      :host([size='lg']) .indicator-wrapper {
        width: var(--size-md2);   /* 20px indicator */
        height: var(--size-lg2);  /* 32px touch target */
        margin-top: -2px;         /* Pull box up to align with label */
      }

      /* Hidden native input — covers entire touch target */
      .native-input {
        position: absolute;
        inset: 0;
        opacity: 0;
        margin: 0;
        cursor: inherit;
        z-index: 2;
      }

      /* Hover background — centered on indicator */
      .hover-bg {
        position: absolute;
        top: 0;
        bottom: 0;
        border-radius: var(--radius-sm);
        background: transparent;
        transition: background var(--motion-duration-fast) var(--motion-easing-standard);
      }

      :host([size='sm']) .hover-bg {
        width: var(--size-lg1);   /* 24px */
        left: -6px;               /* (24-12)/2 = 6px offset to center */
      }

      :host([size='md']) .hover-bg,
      :host(:not([size])) .hover-bg {
        width: var(--size-lg1);   /* 24px */
        left: -4px;               /* (24-16)/2 = 4px offset to center */
      }

      :host([size='lg']) .hover-bg {
        width: var(--size-lg2);   /* 32px */
        left: -6px;               /* (32-20)/2 = 6px offset to center */
      }

      :host(:not([disabled]):not([readonly])) .checkbox-row:hover .hover-bg,
      :host([state='hover']:not([disabled]):not([readonly])) .hover-bg {
        background: var(--_hover-bg);
      }

      :host([state='focus']) .hover-bg {
        background: transparent;
      }

      /* Base box shape, size variants, checkmark/dash positioning, and
         checked/indeterminate paint live in the shared checkbox-indicator.parts.ts
         partial (also consumed by mms-multi-select's decorative option glyph).
         Only checkbox-specific interactive/validation overrides stay here. */

      :host([checked]:not([disabled]):not([readonly])) .checkbox-row:hover .indicator,
      :host([checked][state='hover']:not([disabled]):not([readonly])) .indicator {
        background: var(--_fill-hover);
        border-color: var(--_fill-hover);
      }

      :host([indeterminate]:not([disabled]):not([readonly])) .checkbox-row:hover .indicator,
      :host([indeterminate][state='hover']:not([disabled]):not([readonly])) .indicator {
        background: var(--_fill-hover);
        border-color: var(--_fill-hover);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         FOCUS STATE
         ═══════════════════════════════════════════════════════════════════════ */
      .native-input:focus-visible ~ .indicator,
      :host([state='focus']) .indicator {
        outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
        outline-offset: var(--focus-ring-offset);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         DISABLED STATE
         ═══════════════════════════════════════════════════════════════════════ */
      :host([disabled]) .indicator {
        border-color: var(--color-disabled-stroke);
        background: transparent;
      }

      :host([disabled][checked]) .indicator,
      :host([disabled][indeterminate]) .indicator {
        background: var(--color-disabled-solid);
        border-color: var(--color-disabled-solid);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         READONLY STATE
         ═══════════════════════════════════════════════════════════════════════ */
      :host([readonly]) .indicator {
        border-color: var(--color-disabled-stroke);
        background: transparent;
      }

      :host([readonly][checked]) .indicator,
      :host([readonly][indeterminate]) .indicator {
        background: transparent;
        border-color: var(--color-disabled-stroke);
      }

      /* Read-only checkmark uses text color (adapts to light/dark mode) */
      :host([readonly][checked]) .indicator::after {
        border-color: var(--color-text-default);
      }

      /* Read-only indeterminate dash uses text color */
      :host([readonly][indeterminate]) .indicator::before {
        background: var(--color-text-default);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         ERROR STATE
         ═══════════════════════════════════════════════════════════════════════ */
      :host([error]) .indicator {
        border-color: var(--color-input-border-error);
      }

      :host([error][checked]) .indicator,
      :host([error][indeterminate]) .indicator {
        background: var(--color-input-border-error);
        border-color: var(--color-input-border-error);
      }

      /* Error indicator uses on-fill token which swaps in dark mode */
      :host([error][checked]),
      :host([error][indeterminate]) {
        --_on-fill: var(--color-utility-error-on-fill);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         LABEL TEXT
         ═══════════════════════════════════════════════════════════════════════ */
      .label {
        color: var(--color-text-default);
        user-select: none;
      }

      :host([size='sm']) .label {
        font-size: var(--type-body-sm-size);
        line-height: var(--type-body-sm-line-height);
      }

      :host([size='md']) .label,
      :host(:not([size])) .label {
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
      }

      :host([size='lg']) .label {
        font-size: var(--type-body-lg-size);
        line-height: var(--type-body-lg-line-height);
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

      /* ═══════════════════════════════════════════════════════════════════════
         ERROR TEXT
         ═══════════════════════════════════════════════════════════════════════ */
      .error-text {
        font-size: var(--type-ui-caption-size);
        line-height: var(--type-ui-caption-line-height);
        color: var(--color-input-border-error);
      }
    `]}firstUpdated(){p(this,this.colorScheme,`mms-checkbox`)}_handleChange(e){if(this.disabled||this.readonly){e.preventDefault();return}let t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:this.checked,value:this.checkedValue},bubbles:!0,composed:!0}))}_handleClick(e){(this.disabled||this.readonly)&&e.preventDefault()}get _ariaDescribedBy(){let e=[];return this.helperText&&e.push(`helper-text`),this.error&&this.errorText&&e.push(`error-text`),e.length>0?e.join(` `):void 0}get _indicatorState(){return this.indeterminate?`indeterminate`:this.checked?`checked`:`unchecked`}render(){return i`
      ${this.heading?i`<span class="heading" id="heading">${this.heading}${this.required?i`<span class="required-indicator" aria-hidden="true"> *</span>`:t}</span>`:t}

      <label class="checkbox-row" @click=${this._handleClick}>
        <span class="indicator-wrapper">
          <input
            type="checkbox"
            class="native-input"
            .checked=${this.checked}
            .indeterminate=${this.indeterminate}
            ?disabled=${this.disabled}
            ?required=${this.required}
            name=${h(this.fieldName||void 0)}
            value=${this.checkedValue}
            aria-describedby=${h(this._ariaDescribedBy)}
            aria-invalid=${this.error?`true`:`false`}
            @change=${this._handleChange}
          />
          <span class="hover-bg"></span>
          ${v(this.size,this._indicatorState,{decorative:!1})}
        </span>
        ${this.label?i`<span class="label">${this.label}${this.required&&!this.heading?i`<span class="required-indicator" aria-hidden="true"> *</span>`:t}</span>`:t}
      </label>

      ${this.helperText?i`<span class="helper-text" id="helper-text">${this.helperText}</span>`:t}
      ${this.error&&this.errorText?i`<span class="error-text" id="error-text" role="alert">${this.errorText}</span>`:t}
    `}},u([s({type:String})],b.prototype,`label`,void 0),u([s({type:Boolean,reflect:!0})],b.prototype,`checked`,void 0),u([s({type:Boolean,reflect:!0})],b.prototype,`indeterminate`,void 0),u([s({type:String,reflect:!0,attribute:`color-scheme`})],b.prototype,`colorScheme`,void 0),u([s({type:String,reflect:!0})],b.prototype,`size`,void 0),u([s({type:String,reflect:!0})],b.prototype,`state`,void 0),u([s({type:Boolean,reflect:!0})],b.prototype,`readonly`,void 0),u([s({type:Boolean,reflect:!0})],b.prototype,`disabled`,void 0),u([s({type:Boolean,reflect:!0})],b.prototype,`error`,void 0),u([s({type:String,attribute:`error-text`})],b.prototype,`errorText`,void 0),u([s({type:Boolean,reflect:!0})],b.prototype,`required`,void 0),u([s({type:String})],b.prototype,`heading`,void 0),u([s({type:String,attribute:`helper-text`})],b.prototype,`helperText`,void 0),u([s({type:String,attribute:`field-name`})],b.prototype,`fieldName`,void 0),u([s({type:String,attribute:`checked-value`})],b.prototype,`checkedValue`,void 0),b=u([o(`mms-checkbox`)],b),customElements.get(`mms-checkbox`)||customElements.define(`mms-checkbox`,b)}));export{x as t};