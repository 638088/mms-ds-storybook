import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,n as r,p as i,s as a,t as o}from"./lit-aQ4dERgF.js";import{a as s,d as c,i as l,l as u,n as d,r as f,t as p}from"./decorate-ClfqJe3w.js";import{r as m,t as h}from"./if-defined-C8GHsg_z.js";import{n as g,t as _}from"./theme-constraints-BagCRQzo.js";var v,y=e((()=>{o(),s(),h(),l(),d(),v=class extends r{constructor(...e){super(...e),this.label=``,this.selected=!1,this.value=``,this.colorScheme=`primary`,this.size=`md`,this.state=`default`,this.readonly=!1,this.disabled=!1,this.error=!1,this.errorText=``,this.required=!1,this.heading=``,this.helperText=``,this.fieldName=``}static{this.styles=[f,i`
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
        --_fill-hover: var(--color-primary-10);
        --_stroke: var(--color-border-interactive);
        --_stroke-hover: var(--color-border-interactive-hover);
      }

      :host([color-scheme='secondary']) {
        --_fill: var(--color-secondary-9);
        --_fill-hover: var(--color-secondary-10);
      }

      :host([color-scheme='accent']) {
        --_fill: var(--color-accent-9);
        --_fill-hover: var(--color-accent-10);
      }

      :host([color-scheme='onyx']) {
        --_fill: var(--color-onyx-9);
        --_fill-hover: var(--color-onyx-10);
      }

      :host([disabled]) {
        cursor: not-allowed;
        pointer-events: none;
      }

      :host([readonly]) {
        cursor: default;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         HEADING — Optional title above radio
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
         RADIO ROW — Indicator + Label
         ═══════════════════════════════════════════════════════════════════════ */
      .radio-row {
        display: inline-flex;
        align-items: flex-start;
        gap: var(--spacing-sm1);
        cursor: pointer;
      }

      :host([disabled]) .radio-row {
        cursor: not-allowed;
        pointer-events: none;
      }

      :host([readonly]) .radio-row {
        cursor: default;
        pointer-events: none;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         INDICATOR WRAPPER — Contains touch target + visual indicator
         Marina pattern: indicator flush-left, hover-bg centered on indicator
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
        margin-top: -2px;         /* Pull up to align with label */
      }

      :host([size='md']) .indicator-wrapper,
      :host(:not([size])) .indicator-wrapper {
        width: var(--size-md1);   /* 16px indicator */
        height: var(--size-lg1);  /* 24px touch target */
      }

      :host([size='lg']) .indicator-wrapper {
        width: var(--size-md2);   /* 20px indicator */
        height: var(--size-lg2);  /* 32px touch target */
        margin-top: -2px;         /* Pull up to align with label */
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
        border-radius: 50%;
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

      :host(:not([disabled]):not([readonly])) .radio-row:hover .hover-bg,
      :host([state='hover']:not([disabled]):not([readonly])) .hover-bg {
        background: var(--color-surface-hover);
      }

      :host([state='focus']) .hover-bg {
        background: transparent;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         INDICATOR — The visual radio circle
         ═══════════════════════════════════════════════════════════════════════ */
      .indicator {
        position: relative;
        box-sizing: border-box;
        border: var(--border-width-xs) solid var(--_stroke);
        border-radius: 50%;
        background: transparent;
        transition:
          background var(--motion-duration-fast) var(--motion-easing-standard),
          border-color var(--motion-duration-fast) var(--motion-easing-standard);
        z-index: 1;
      }

      /* Size variants for indicator */
      :host([size='sm']) .indicator {
        width: var(--size-sm2);   /* 12px */
        height: var(--size-sm2);
      }

      :host([size='md']) .indicator,
      :host(:not([size])) .indicator {
        width: var(--size-md1);   /* 16px */
        height: var(--size-md1);
      }

      :host([size='lg']) .indicator {
        width: var(--size-md2);   /* 20px */
        height: var(--size-md2);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         INNER DOT — Centered circle shown when selected
         
         Dot size: ~37.5% of indicator width
         sm: 12px → 4px dot
         md: 16px → 6px dot
         lg: 20px → 8px dot
         ═══════════════════════════════════════════════════════════════════════ */
      .indicator::after {
        content: '';
        position: absolute;
        display: none;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: var(--_fill);
      }

      :host([size='sm']) .indicator::after {
        width: 4px;
        height: 4px;
      }

      :host([size='md']) .indicator::after,
      :host(:not([size])) .indicator::after {
        width: 6px;
        height: 6px;
      }

      :host([size='lg']) .indicator::after {
        width: 8px;
        height: 8px;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         SELECTED STATE
         ═══════════════════════════════════════════════════════════════════════ */
      :host([selected]) .indicator {
        border-color: var(--_fill);
      }

      :host([selected]) .indicator::after {
        display: block;
      }

      :host([selected]:not([disabled]):not([readonly])) .radio-row:hover .indicator,
      :host([selected][state='hover']:not([disabled]):not([readonly])) .indicator {
        border-color: var(--_fill-hover);
      }

      :host([selected]:not([disabled]):not([readonly])) .radio-row:hover .indicator::after,
      :host([selected][state='hover']:not([disabled]):not([readonly])) .indicator::after {
        background: var(--_fill-hover);
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

      :host([disabled][selected]) .indicator {
        border-color: var(--color-disabled-stroke);
      }

      :host([disabled][selected]) .indicator::after {
        background: var(--color-disabled-solid);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         READONLY STATE
         ═══════════════════════════════════════════════════════════════════════ */
      :host([readonly]) .indicator {
        border-color: var(--color-disabled-stroke);
        background: transparent;
      }

      :host([readonly][selected]) .indicator {
        border-color: var(--color-disabled-stroke);
      }

      /* Read-only dot uses text color (adapts to light/dark mode) */
      :host([readonly][selected]) .indicator::after {
        background: var(--color-text-default);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         ERROR STATE
         ═══════════════════════════════════════════════════════════════════════ */
      :host([error]) .indicator {
        border-color: var(--color-input-border-error);
      }

      :host([error][selected]) .indicator {
        border-color: var(--color-input-border-error);
      }

      :host([error][selected]) .indicator::after {
        background: var(--color-input-border-error);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         LABEL TEXT
         ═══════════════════════════════════════════════════════════════════════ */
      .label {
        color: var(--color-text-default);
        user-select: none;
        position: relative;
        top: -1px;  /* Optical alignment with radio circle */
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
    `]}_handleChange(e){if(this.disabled||this.readonly){e.preventDefault();return}e.target.checked&&(this.selected=!0,this.dispatchEvent(new CustomEvent(`change`,{detail:{selected:this.selected,value:this.value},bubbles:!0,composed:!0})))}_handleClick(e){(this.disabled||this.readonly)&&e.preventDefault()}get _ariaDescribedBy(){let e=[];return this.helperText&&e.push(`helper-text`),this.error&&this.errorText&&e.push(`error-text`),e.length>0?e.join(` `):void 0}render(){return a`
      ${this.heading?a`<span class="heading" id="heading">${this.heading}${this.required?a`<span class="required-indicator" aria-hidden="true"> *</span>`:n}</span>`:n}

      <label class="radio-row" @click=${this._handleClick}>
        <span class="indicator-wrapper">
          <input
            type="radio"
            class="native-input"
            .checked=${this.selected}
            ?disabled=${this.disabled}
            ?required=${this.required}
            name=${m(this.fieldName||void 0)}
            value=${this.value}
            aria-describedby=${m(this._ariaDescribedBy)}
            aria-invalid=${this.error?`true`:`false`}
            @change=${this._handleChange}
          />
          <span class="hover-bg"></span>
          <span class="indicator"></span>
        </span>
        ${this.label?a`<span class="label">${this.label}${this.required&&!this.heading?a`<span class="required-indicator" aria-hidden="true"> *</span>`:n}</span>`:n}
      </label>

      ${this.helperText?a`<span class="helper-text" id="helper-text">${this.helperText}</span>`:n}
      ${this.error&&this.errorText?a`<span class="error-text" id="error-text" role="alert">${this.errorText}</span>`:n}
    `}},p([u({type:String})],v.prototype,`label`,void 0),p([u({type:Boolean,reflect:!0})],v.prototype,`selected`,void 0),p([u({type:String})],v.prototype,`value`,void 0),p([u({type:String,reflect:!0,attribute:`color-scheme`})],v.prototype,`colorScheme`,void 0),p([u({type:String,reflect:!0})],v.prototype,`size`,void 0),p([u({type:String,reflect:!0})],v.prototype,`state`,void 0),p([u({type:Boolean,reflect:!0})],v.prototype,`readonly`,void 0),p([u({type:Boolean,reflect:!0})],v.prototype,`disabled`,void 0),p([u({type:Boolean,reflect:!0})],v.prototype,`error`,void 0),p([u({type:String,attribute:`error-text`})],v.prototype,`errorText`,void 0),p([u({type:Boolean,reflect:!0})],v.prototype,`required`,void 0),p([u({type:String})],v.prototype,`heading`,void 0),p([u({type:String,attribute:`helper-text`})],v.prototype,`helperText`,void 0),p([u({type:String,attribute:`field-name`})],v.prototype,`fieldName`,void 0),v=p([c(`mms-radio`)],v),customElements.get(`mms-radio`)||customElements.define(`mms-radio`,v)})),b=t({Overview:()=>T,PlaygroundStory:()=>E,__namedExportsOrder:()=>D,default:()=>x}),x,S,C,w,T,E,D,O=e((()=>{o(),y(),_(),x={title:`Forms/Radio`,tags:[`!autodocs`]},S={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},C=`680px`,w=`960px`,T={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${w}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${S.h1}">Radio</h1>
      <p style="${S.body} opacity: 0.85; max-width: ${C}; margin-bottom: 2rem;">
        Radio buttons allow users to select exactly one option from a set. Use radios when the user needs to see all available options at once.
      </p>

      <!-- Usage note -->
      <div style="
        padding: 1rem 1.25rem;
        background: rgba(59, 130, 246, 0.08);
        border-left: 3px solid rgba(59, 130, 246, 0.5);
        border-radius: 0 6px 6px 0;
        margin-bottom: 2rem;
      ">
        <p style="${S.bodySm} margin: 0;">
          <strong>Usage:</strong> Radio buttons should be used within <code style="${S.monoSm}">&lt;mms-radio-group&gt;</code> which handles single-selection behavior and arrow key navigation. This page documents individual radio button props.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- States -->
      <h2 style="${S.h2}">Selection states</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${S.h3}">Unselected</p>
          <p style="${S.bodySm} opacity: 0.85; flex: 1;">
            Default state. This option is not currently active.
          </p>
          <div style="margin-top: 1rem;"><mms-radio label="Unselected option"></mms-radio></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${S.h3}">Selected</p>
          <p style="${S.bodySm} opacity: 0.85; flex: 1;">
            Active state. User has chosen this option from the group.
          </p>
          <div style="margin-top: 1rem;"><mms-radio label="Selected option" selected></mms-radio></div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="${S.h2}">Color schemes</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        The <code style="${S.monoSm}">color-scheme</code> prop controls which color palette the radio uses when selected.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">Primary &amp; Secondary</p>
          <p style="${S.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Brand colors defined by the active theme.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-radio color-scheme="primary" label="Primary" selected></mms-radio>
            <mms-radio color-scheme="secondary" label="Secondary" selected></mms-radio>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">Accent &amp; Onyx</p>
          <p style="${S.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            <strong>Accent</strong> is theme-specific highlight. <strong>Onyx</strong> is structural black.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-radio color-scheme="accent" label="Accent" selected></mms-radio>
            <mms-radio color-scheme="onyx" label="Onyx" selected></mms-radio>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="${S.h2}">Sizes</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        Three sizes accommodate different contexts — compact forms, standard inputs, and prominent selections.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-radio size="sm" label="Small radio" selected></mms-radio>
        <mms-radio size="md" label="Medium radio (default)" selected></mms-radio>
        <mms-radio size="lg" label="Large radio" selected></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="${S.h2}">With helper text</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the radio.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio 
          label="Standard shipping" 
          helper-text="Arrives in 5-7 business days."
        ></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Heading -->
      <h2 style="${S.h2}">With heading</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        An optional heading can be displayed above the radio for field labels.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio 
          heading="Shipping method"
          label="Express shipping" 
          helper-text="Arrives in 1-2 business days."
        ></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="${S.h2}">Error state</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        Error state is used for validation feedback. The radio indicator and error message both use the error color.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio 
          label="Option A" 
          error
          error-text="Please select an option."
          required
        ></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Indicator -->
      <h2 style="${S.h2}">Required indicator</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        When <code style="${S.monoSm}">required</code> is set, an asterisk appears on the highest-level label. If a heading is present, the asterisk shows there; otherwise it appears on the radio label.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">With heading</p>
          <p style="${S.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Asterisk appears on the heading.
          </p>
          <mms-radio 
            heading="Payment method"
            label="Credit card" 
            required
          ></mms-radio>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">Without heading</p>
          <p style="${S.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Asterisk appears on the label.
          </p>
          <mms-radio 
            label="Credit card" 
            required
          ></mms-radio>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled & Readonly -->
      <h2 style="${S.h2}">Disabled &amp; read-only</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">Disabled</p>
          <p style="${S.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents interaction and dims appearance.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-radio label="Disabled unselected" disabled></mms-radio>
            <mms-radio label="Disabled selected" disabled selected></mms-radio>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">Read-only</p>
          <p style="${S.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents changes but remains visible and focusable.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-radio label="Read-only unselected" readonly></mms-radio>
            <mms-radio label="Read-only selected" readonly selected></mms-radio>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Radio Only (no label) -->
      <h2 style="${S.h2}">Radio only</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        When no label is provided, only the radio indicator is rendered. Useful for table rows or other constrained layouts.
      </p>

      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem;">
        <mms-radio></mms-radio>
        <mms-radio selected></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${S.h2}">Accessibility</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        Radio buttons follow WAI-ARIA Radio Group pattern for full keyboard and screen reader support.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">Behavior</th>
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.75rem 1rem; font-weight: 500;">ARIA</td>
            <td style="padding: 0.75rem 1rem;"><code style="${S.monoSm}">role="radio"</code> with <code style="${S.monoSm}">aria-checked</code> reflecting selection state</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.75rem 1rem; font-weight: 500;">Keyboard</td>
            <td style="padding: 0.75rem 1rem;">Arrow keys move selection within group; <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd> exits group</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.75rem 1rem; font-weight: 500;">Focus</td>
            <td style="padding: 0.75rem 1rem;">Visible focus ring; selected radio receives focus when group is entered</td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 1rem; font-weight: 500;">Labels</td>
            <td style="padding: 0.75rem 1rem;">Associated via <code style="${S.monoSm}">aria-labelledby</code> or visible <code style="${S.monoSm}">label</code> prop</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},E={name:`Playground`,tags:[`!dev`],args:{label:`Option A`,selected:!1,value:`option-a`,colorScheme:`primary`,size:`md`,state:`default`,readonly:!1,disabled:!1,error:!1,errorText:`Please select an option`,required:!1,heading:``,helperText:``,fieldName:``,theme:`maximus`},decorators:[e=>a`
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
      `],argTypes:{label:{name:`Label`,control:`text`,description:`Clickable text next to the radio indicator`,table:{category:`Core Interaction`}},selected:{name:`Selected`,control:`boolean`,description:`Whether this radio is the active selection`,table:{category:`Core Interaction`}},value:{name:`Value`,control:`text`,description:`Value submitted when selected (for form integration)`,table:{category:`Core Interaction`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Brand color applied to selected fill`,table:{category:`Visual`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Radio indicator and text size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`],description:`Interactive state preview (for documentation)`,table:{category:`Visual`}},readonly:{name:`Read-only`,control:`boolean`,description:`Prevents changes but remains focusable and visible`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction and dims appearance`,table:{category:`Visual`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and shows error message`,table:{category:`Validation`}},errorText:{name:`Error Text`,control:`text`,description:`Message displayed when error is true`,table:{category:`Validation`}},required:{name:`Required`,control:`boolean`,description:`Marks field as required for form validation`,table:{category:`Validation`}},heading:{name:`Heading`,control:`text`,description:`Optional title displayed above the radio`,table:{category:`Secondary Content`}},helperText:{name:`Helper Text`,control:`text`,description:`Supplementary guidance displayed below`,table:{category:`Secondary Content`}},fieldName:{name:`Field Name`,control:`text`,description:`Identifier used when submitting form data`,table:{category:`Form Integration`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`default`],description:`Brand theme`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.selected&&r.push(`selected`),n.value&&r.push(`value="${n.value}"`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.size!==`md`&&r.push(`size="${n.size}"`),n.readonly&&r.push(`readonly`),n.disabled&&r.push(`disabled`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.heading&&r.push(`heading="${n.heading}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.fieldName&&r.push(`field-name="${n.fieldName}"`),`<mms-radio\n  ${r.join(`
  `)}\n></mms-radio>`},language:`html`}}},render:e=>g(e.theme,e.colorScheme)?a`
      <mms-radio
        label=${e.label}
        ?selected=${e.selected}
        value=${e.value}
        color-scheme=${e.colorScheme}
        size=${e.size}
        state=${e.state}
        ?readonly=${e.readonly}
        ?disabled=${e.disabled}
        ?error=${e.error}
        error-text=${e.errorText}
        ?required=${e.required}
        heading=${e.heading}
        helper-text=${e.helperText}
        field-name=${e.fieldName}
      ></mms-radio>
    `:a`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 400px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            This color is decorative-only (no hover/pressed states). Select a different colorScheme for this theme.
          </p>
        </div>
      `},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Radio</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Radio buttons allow users to select exactly one option from a set. Use radios when the user needs to see all available options at once.
      </p>

      <!-- Usage note -->
      <div style="
        padding: 1rem 1.25rem;
        background: rgba(59, 130, 246, 0.08);
        border-left: 3px solid rgba(59, 130, 246, 0.5);
        border-radius: 0 6px 6px 0;
        margin-bottom: 2rem;
      ">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Usage:</strong> Radio buttons should be used within <code style="\${t.monoSm}">&lt;mms-radio-group&gt;</code> which handles single-selection behavior and arrow key navigation. This page documents individual radio button props.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- States -->
      <h2 style="\${t.h2}">Selection states</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Unselected</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Default state. This option is not currently active.
          </p>
          <div style="margin-top: 1rem;"><mms-radio label="Unselected option"></mms-radio></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Selected</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Active state. User has chosen this option from the group.
          </p>
          <div style="margin-top: 1rem;"><mms-radio label="Selected option" selected></mms-radio></div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="\${t.h2}">Color schemes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">color-scheme</code> prop controls which color palette the radio uses when selected.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Primary &amp; Secondary</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Brand colors defined by the active theme.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-radio color-scheme="primary" label="Primary" selected></mms-radio>
            <mms-radio color-scheme="secondary" label="Secondary" selected></mms-radio>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Accent &amp; Onyx</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            <strong>Accent</strong> is theme-specific highlight. <strong>Onyx</strong> is structural black.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-radio color-scheme="accent" label="Accent" selected></mms-radio>
            <mms-radio color-scheme="onyx" label="Onyx" selected></mms-radio>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Three sizes accommodate different contexts — compact forms, standard inputs, and prominent selections.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-radio size="sm" label="Small radio" selected></mms-radio>
        <mms-radio size="md" label="Medium radio (default)" selected></mms-radio>
        <mms-radio size="lg" label="Large radio" selected></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the radio.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio 
          label="Standard shipping" 
          helper-text="Arrives in 5-7 business days."
        ></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Heading -->
      <h2 style="\${t.h2}">With heading</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        An optional heading can be displayed above the radio for field labels.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio 
          heading="Shipping method"
          label="Express shipping" 
          helper-text="Arrives in 1-2 business days."
        ></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Error state is used for validation feedback. The radio indicator and error message both use the error color.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio 
          label="Option A" 
          error
          error-text="Please select an option."
          required
        ></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Indicator -->
      <h2 style="\${t.h2}">Required indicator</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        When <code style="\${t.monoSm}">required</code> is set, an asterisk appears on the highest-level label. If a heading is present, the asterisk shows there; otherwise it appears on the radio label.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">With heading</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Asterisk appears on the heading.
          </p>
          <mms-radio 
            heading="Payment method"
            label="Credit card" 
            required
          ></mms-radio>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Without heading</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Asterisk appears on the label.
          </p>
          <mms-radio 
            label="Credit card" 
            required
          ></mms-radio>
        </div>
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
            <mms-radio label="Disabled unselected" disabled></mms-radio>
            <mms-radio label="Disabled selected" disabled selected></mms-radio>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Read-only</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents changes but remains visible and focusable.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-radio label="Read-only unselected" readonly></mms-radio>
            <mms-radio label="Read-only selected" readonly selected></mms-radio>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Radio Only (no label) -->
      <h2 style="\${t.h2}">Radio only</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        When no label is provided, only the radio indicator is rendered. Useful for table rows or other constrained layouts.
      </p>

      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem;">
        <mms-radio></mms-radio>
        <mms-radio selected></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Radio buttons follow WAI-ARIA Radio Group pattern for full keyboard and screen reader support.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">Behavior</th>
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.75rem 1rem; font-weight: 500;">ARIA</td>
            <td style="padding: 0.75rem 1rem;"><code style="\${t.monoSm}">role="radio"</code> with <code style="\${t.monoSm}">aria-checked</code> reflecting selection state</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.75rem 1rem; font-weight: 500;">Keyboard</td>
            <td style="padding: 0.75rem 1rem;">Arrow keys move selection within group; <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd> exits group</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.75rem 1rem; font-weight: 500;">Focus</td>
            <td style="padding: 0.75rem 1rem;">Visible focus ring; selected radio receives focus when group is entered</td>
          </tr>
          <tr>
            <td style="padding: 0.75rem 1rem; font-weight: 500;">Labels</td>
            <td style="padding: 0.75rem 1rem;">Associated via <code style="\${t.monoSm}">aria-labelledby</code> or visible <code style="\${t.monoSm}">label</code> prop</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Core Interaction
    label: 'Option A',
    selected: false,
    value: 'option-a',
    // Visual
    colorScheme: 'primary',
    size: 'md',
    state: 'default',
    readonly: false,
    disabled: false,
    // Validation
    error: false,
    errorText: 'Please select an option',
    required: false,
    // Secondary Content
    heading: '',
    helperText: '',
    // Form Integration
    fieldName: '',
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
      description: 'Clickable text next to the radio indicator',
      table: {
        category: 'Core Interaction'
      }
    },
    selected: {
      name: 'Selected',
      control: 'boolean',
      description: 'Whether this radio is the active selection',
      table: {
        category: 'Core Interaction'
      }
    },
    value: {
      name: 'Value',
      control: 'text',
      description: 'Value submitted when selected (for form integration)',
      table: {
        category: 'Core Interaction'
      }
    },
    // ── Visual ────────────────────────────────────────────────
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Brand color applied to selected fill',
      table: {
        category: 'Visual'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Radio indicator and text size',
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
    // ── Validation ────────────────────────────────────────────
    error: {
      name: 'Error',
      control: 'boolean',
      description: 'Displays error styling and shows error message',
      table: {
        category: 'Validation'
      }
    },
    errorText: {
      name: 'Error Text',
      control: 'text',
      description: 'Message displayed when error is true',
      table: {
        category: 'Validation'
      }
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks field as required for form validation',
      table: {
        category: 'Validation'
      }
    },
    // ── Secondary Content ─────────────────────────────────────
    heading: {
      name: 'Heading',
      control: 'text',
      description: 'Optional title displayed above the radio',
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
    // ── Global Props ──────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'va-gov', 'default'],
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
          if (a.selected) attrs.push('selected');
          if (a.value) attrs.push(\`value="\${a.value}"\`);
          if (a.colorScheme !== 'primary') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.readonly) attrs.push('readonly');
          if (a.disabled) attrs.push('disabled');
          if (a.error) attrs.push('error');
          if (a.errorText && a.error) attrs.push(\`error-text="\${a.errorText}"\`);
          if (a.required) attrs.push('required');
          if (a.heading) attrs.push(\`heading="\${a.heading}"\`);
          if (a.helperText) attrs.push(\`helper-text="\${a.helperText}"\`);
          if (a.fieldName) attrs.push(\`field-name="\${a.fieldName}"\`);
          return \`<mms-radio\\n  \${attrs.join('\\n  ')}\\n></mms-radio>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    label: string;
    selected: boolean;
    value: string;
    colorScheme: string;
    size: string;
    state: string;
    readonly: boolean;
    disabled: boolean;
    error: boolean;
    errorText: string;
    required: boolean;
    heading: string;
    helperText: string;
    fieldName: string;
    theme: string;
  }) => {
    // Validate colorScheme × theme combination using shared config
    const valid = isValidColorScheme(args.theme as Theme, args.colorScheme as ColorScheme);
    if (!valid) {
      return html\`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 400px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            This color is decorative-only (no hover/pressed states). Select a different colorScheme for this theme.
          </p>
        </div>
      \`;
    }
    return html\`
      <mms-radio
        label=\${args.label}
        ?selected=\${args.selected}
        value=\${args.value}
        color-scheme=\${args.colorScheme}
        size=\${args.size}
        state=\${args.state}
        ?readonly=\${args.readonly}
        ?disabled=\${args.disabled}
        ?error=\${args.error}
        error-text=\${args.errorText}
        ?required=\${args.required}
        heading=\${args.heading}
        helper-text=\${args.helperText}
        field-name=\${args.fieldName}
      ></mms-radio>
    \`;
  }
}`,...E.parameters?.docs?.source}}},D=[`Overview`,`PlaygroundStory`]}));O();export{T as Overview,E as PlaygroundStory,D as __namedExportsOrder,x as default,O as n,b as t};