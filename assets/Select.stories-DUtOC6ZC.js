import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,t as d}from"./decorate-Bygya6Tu.js";import{r as f,t as p}from"./focus.css-BrGuLyxh.js";import{t as m}from"./mms-icon.component-DRWi1aVe.js";import{a as h,o as g,r as _,t as v}from"./a11y-outcome-CiARakld.js";import{t as y}from"./mms-tooltip.component-nZNmPYly.js";var b,x=e((()=>{o(),u(),f(),m(),y(),l(),b=class extends i{constructor(...e){super(...e),this.label=``,this.value=``,this.placeholder=`Select an option`,this.options=[],this.name=``,this.state=`default`,this.disabled=!1,this.readonly=!1,this.error=!1,this.errorText=``,this.required=!1,this.helperText=``,this.showTooltip=!1,this.tooltipText=``,this.size=`md`}get iconSize(){switch(this.size){case`sm`:return`sm`;case`lg`:return`md`;default:return`sm`}}static{this.styles=[p,r`
      /* ═══════════════════════════════════════════════════════════════════════
         HOST
         ═══════════════════════════════════════════════════════════════════════ */
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs2);
        font-family: var(--type-body-md-family);
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         LABEL ROW — Label with optional required indicator and tooltip
         ═══════════════════════════════════════════════════════════════════════ */
      .label-row {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs2);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        color: var(--color-text-default);
      }

      :host([size='sm']) .label-row {
        font-size: var(--type-body-sm-size);
        line-height: var(--type-body-sm-line-height);
      }

      :host([size='lg']) .label-row {
        font-size: var(--type-body-lg-size);
        line-height: var(--type-body-lg-line-height);
      }

      :host([disabled]) .label-row {
        color: var(--color-disabled-text);
      }

      .required-indicator {
        color: var(--color-input-border-error);
      }

      .tooltip-icon {
        flex-shrink: 0;
        width: 16px;
        height: 16px;
        color: var(--color-text-subtle);
      }

      :host([disabled]) .tooltip-icon {
        color: var(--color-disabled-text);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         SELECT CONTAINER — Holds native select and dropdown icon
         ═══════════════════════════════════════════════════════════════════════ */
      .select-container {
        display: flex;
        align-items: center;
        position: relative;
        box-sizing: border-box;
        background: transparent;
        border: 1px solid var(--color-border-interactive);
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }

      /* Hover state — inset shadow for visual distinction (no layout shift) */
      :host([state='hover']) .select-container,
      .select-container:hover {
        border-color: var(--color-border-interactive-hover);
        box-shadow: inset 0 0 0 1px var(--color-border-interactive-hover);
      }

      /* Focus state */
      :host([state='focus']) .select-container {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
      }

      /* Filled state — darker border to indicate value present */
      :host([state='filled']) .select-container {
        border-color: var(--color-neutral-9);
      }

      /* Error state */
      :host([error]) .select-container {
        border-color: var(--color-input-border-error);
      }

      :host([error][state='hover']) .select-container,
      :host([error]) .select-container:hover {
        border-color: var(--color-input-border-error);
        box-shadow: inset 0 0 0 1px var(--color-input-border-error);
      }

      :host([error][state='focus']) .select-container {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
      }

      /* Disabled state */
      :host([disabled]) .select-container {
        background: var(--color-neutral-3);
        border-color: var(--color-disabled-stroke);
        cursor: not-allowed;
      }

      /* Readonly state */
      :host([readonly]) .select-container {
        background: var(--color-neutral-3);
        border-color: var(--color-disabled-stroke);
        cursor: default;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         NATIVE SELECT
         ═══════════════════════════════════════════════════════════════════════ */
      .select-field {
        flex: 1;
        min-width: 0;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        color: var(--color-text-default);
        background: transparent;
        padding: var(--spacing-sm2);
        padding-right: var(--spacing-xl1); /* Space for dropdown icon */
        box-sizing: border-box;
        cursor: pointer;

        /* Hide native dropdown arrow */
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      /* Hide native dropdown arrow in IE */
      .select-field::-ms-expand {
        display: none;
      }

      /* Size variants */
      :host([size='sm']) .select-field {
        font-size: var(--type-body-sm-size);
        line-height: var(--type-body-sm-line-height);
        padding: var(--spacing-sm1);
        padding-right: var(--spacing-lg2);
      }

      :host([size='lg']) .select-field {
        font-size: var(--type-body-lg-size);
        line-height: var(--type-body-lg-line-height);
        padding: var(--spacing-md1);
        padding-right: var(--spacing-xl2);
      }

      /* Placeholder text color (default state with no selection) */
      :host([state='default']) .select-field {
        color: var(--color-text-placeholder);
      }

      /* Filled state — normal text color */
      :host([state='filled']) .select-field {
        color: var(--color-text-default);
      }

      /* Error state text */
      :host([error]) .select-field {
        color: var(--color-input-border-error);
      }

      /* Disabled state text */
      :host([disabled]) .select-field {
        color: var(--color-disabled-text);
        cursor: not-allowed;
      }

      /* Readonly state text */
      :host([readonly]) .select-field {
        color: var(--color-text-subtle);
        cursor: default;
      }

      /* Focus visible on the select itself */
      .select-field:focus-visible {
        outline: none; /* Container handles focus ring */
      }

      /* ═══════════════════════════════════════════════════════════════════════
         DROPDOWN ICON
         ═══════════════════════════════════════════════════════════════════════ */
      .dropdown-icon {
        position: absolute;
        right: var(--spacing-sm2);
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        color: var(--color-text-subtle);
      }

      :host([size='sm']) .dropdown-icon {
        right: var(--spacing-sm1);
      }

      :host([size='lg']) .dropdown-icon {
        right: var(--spacing-md1);
      }

      :host([disabled]) .dropdown-icon {
        color: var(--color-disabled-text);
      }

      :host([readonly]) .dropdown-icon {
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
         ERROR MESSAGE
         ═══════════════════════════════════════════════════════════════════════ */
      .error-row {
        display: flex;
        align-items: flex-start;
        gap: var(--spacing-xs2);
        font-size: var(--type-ui-caption-size);
        line-height: var(--type-ui-caption-line-height);
        color: var(--color-input-border-error);
      }

      .error-icon {
        flex-shrink: 0;
        width: 16px;
        height: 16px;
        color: var(--color-input-border-error);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         DENSITY VARIANTS
         ═══════════════════════════════════════════════════════════════════════ */
      :host([data-density='compact']) {
        gap: var(--spacing-xs1);
      }

      :host([data-density='compact']) .select-field {
        padding: var(--spacing-sm1);
        padding-right: var(--spacing-lg2);
      }

      :host([data-density='compact'][size='sm']) .select-field {
        padding: var(--spacing-xs2);
        padding-right: var(--spacing-md1);
      }

      :host([data-density='compact'][size='lg']) .select-field {
        padding: var(--spacing-sm2);
        padding-right: var(--spacing-lg2);
      }
    `]}get parsedOptions(){if(Array.isArray(this.options))return this.options;if(typeof this.options==`string`)try{let e=JSON.parse(this.options);return Array.isArray(e)?e:[]}catch{return[]}return[]}get ariaDescribedBy(){let e=[];return this.helperText&&e.push(`helper-text`),this.error&&this.errorText&&e.push(`error-text`),e.join(` `)||void 0}_handleChange(e){if(this.disabled||this.readonly)return;let t=e.target,n=this.value;this.value=t.value,this.state=this.value?`filled`:`default`,this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value,oldValue:n},bubbles:!0,composed:!0}))}_stopNativeInput(e){e.stopPropagation()}_handleFocus(e){e.stopPropagation(),!this.disabled&&(this.state=`focus`,this.dispatchEvent(new CustomEvent(`focus`,{detail:{value:this.value},bubbles:!0,composed:!0})))}_handleBlur(e){e.stopPropagation(),!this.disabled&&(this.state=this.value?`filled`:`default`,this.dispatchEvent(new CustomEvent(`blur`,{detail:{value:this.value},bubbles:!0,composed:!0})))}_handleMouseEnter(){this.disabled||this.state===`focus`||this.readonly||(this.state=`hover`)}_handleMouseLeave(){this.disabled||this.state===`focus`||(this.state=this.value?`filled`:`default`)}render(){return a`
      ${this.label?a`
            <div class="label-row">
              <span>${this.label}</span>
              ${this.required?a`<span class="required-indicator" aria-hidden="true">*</span>`:n}
              ${this.showTooltip?a`
                    <mms-tooltip text="${this.tooltipText}">
                      <mms-icon
                        class="tooltip-icon"
                        name="info"
                        size="sm"
                        aria-label="${this.tooltipText||`More information`}"
                      ></mms-icon>
                    </mms-tooltip>
                  `:n}
            </div>
          `:n}

      <div
        class="select-container"
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
      >
        <select
          class="select-field"
          .value=${this.value}
          ?disabled=${this.disabled}
          .name=${this.name}
          aria-label=${this.label||this.placeholder}
          aria-invalid=${this.error?`true`:`false`}
          aria-describedby=${this.ariaDescribedBy||n}
          aria-required=${this.required?`true`:`false`}
          @change=${this._handleChange}
          @input=${this._stopNativeInput}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
        >
          <option value="" ?selected=${!this.value} disabled hidden>
            ${this.placeholder}
          </option>
          ${this.parsedOptions.map(e=>a`
              <option value=${e.value} ?selected=${this.value===e.value}>
                ${e.label}
              </option>
            `)}
        </select>
        <mms-icon
          class="dropdown-icon"
          name="caret-down"
          size=${this.iconSize}
        ></mms-icon>
      </div>

      ${this.helperText&&!this.error&&!this.disabled?a`<span id="helper-text" class="helper-text">${this.helperText}</span>`:n}

      ${this.error&&this.errorText&&!this.disabled?a`
            <span id="error-text" class="error-row" role="alert">
              <mms-icon class="error-icon" name="warning-circle" size="16"></mms-icon>
              ${this.errorText}
            </span>
          `:n}
    `}},d([c({type:String})],b.prototype,`label`,void 0),d([c({type:String,reflect:!0})],b.prototype,`value`,void 0),d([c({type:String})],b.prototype,`placeholder`,void 0),d([c({type:Array})],b.prototype,`options`,void 0),d([c({type:String})],b.prototype,`name`,void 0),d([c({type:String,reflect:!0})],b.prototype,`state`,void 0),d([c({type:Boolean,reflect:!0})],b.prototype,`disabled`,void 0),d([c({type:Boolean,reflect:!0})],b.prototype,`readonly`,void 0),d([c({type:Boolean,reflect:!0})],b.prototype,`error`,void 0),d([c({type:String,attribute:`error-text`})],b.prototype,`errorText`,void 0),d([c({type:Boolean,reflect:!0})],b.prototype,`required`,void 0),d([c({type:String,attribute:`helper-text`})],b.prototype,`helperText`,void 0),d([c({type:Boolean,reflect:!0,attribute:`show-tooltip`})],b.prototype,`showTooltip`,void 0),d([c({type:String,attribute:`tooltip-text`})],b.prototype,`tooltipText`,void 0),d([c({type:String,reflect:!0})],b.prototype,`size`,void 0),b=d([s(`mms-select`)],b)})),S=t({Overview:()=>O,PlaygroundStory:()=>k,__namedExportsOrder:()=>A,default:()=>C}),C,w,T,E,D,O,k,A,j=e((()=>{o(),x(),h(),v(),C={title:`Forms/Select`,tags:[`!autodocs`]},w={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},T=`680px`,E=`960px`,D=[{value:`al`,label:`Alabama`},{value:`ak`,label:`Alaska`},{value:`az`,label:`Arizona`},{value:`ar`,label:`Arkansas`},{value:`ca`,label:`California`},{value:`co`,label:`Colorado`},{value:`ct`,label:`Connecticut`},{value:`de`,label:`Delaware`},{value:`dc`,label:`District of Columbia`},{value:`fl`,label:`Florida`},{value:`ga`,label:`Georgia`},{value:`hi`,label:`Hawaii`},{value:`id`,label:`Idaho`},{value:`il`,label:`Illinois`},{value:`in`,label:`Indiana`},{value:`ia`,label:`Iowa`},{value:`ks`,label:`Kansas`},{value:`ky`,label:`Kentucky`},{value:`la`,label:`Louisiana`},{value:`me`,label:`Maine`},{value:`md`,label:`Maryland`},{value:`ma`,label:`Massachusetts`},{value:`mi`,label:`Michigan`},{value:`mn`,label:`Minnesota`},{value:`ms`,label:`Mississippi`},{value:`mo`,label:`Missouri`},{value:`mt`,label:`Montana`},{value:`ne`,label:`Nebraska`},{value:`nv`,label:`Nevada`},{value:`nh`,label:`New Hampshire`},{value:`nj`,label:`New Jersey`},{value:`nm`,label:`New Mexico`},{value:`ny`,label:`New York`},{value:`nc`,label:`North Carolina`},{value:`nd`,label:`North Dakota`},{value:`oh`,label:`Ohio`},{value:`ok`,label:`Oklahoma`},{value:`or`,label:`Oregon`},{value:`pa`,label:`Pennsylvania`},{value:`ri`,label:`Rhode Island`},{value:`sc`,label:`South Carolina`},{value:`sd`,label:`South Dakota`},{value:`tn`,label:`Tennessee`},{value:`tx`,label:`Texas`},{value:`ut`,label:`Utah`},{value:`vt`,label:`Vermont`},{value:`va`,label:`Virginia`},{value:`wa`,label:`Washington`},{value:`wv`,label:`West Virginia`},{value:`wi`,label:`Wisconsin`},{value:`wy`,label:`Wyoming`}],O={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${E}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${w.h1}">Select</h1>
      <p style="${w.body} opacity: 0.85; max-width: ${T}; margin-bottom: 2rem;">
        A single-selection dropdown using the native &lt;select&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, and integrates with forms.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${w.h2}">Basic usage</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        Provide a label and options array. The select fills its container width by default.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="State"
          .options=${D}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="${w.h2}">With helper text</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the select.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="State"
          helper-text="Select your state of residence."
          .options=${D}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="${w.h2}">With tooltip</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="County"
          show-tooltip
          tooltip-text="Your county determines available services and providers."
          .options=${[{value:`la`,label:`Los Angeles County`},{value:`or`,label:`Orange County`},{value:`sd`,label:`San Diego County`}]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Field -->
      <h2 style="${w.h2}">Required field</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        The <code style="${w.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="State of residence"
          required
          .options=${D}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="${w.h2}">Error state</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        The <code style="${w.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="Language"
          error
          error-text="Please select a language."
          required
          .options=${[{value:`en`,label:`English`},{value:`es`,label:`Spanish`},{value:`zh`,label:`Chinese`}]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Readonly State -->
      <h2 style="${w.h2}">Readonly state</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="Enrollment status"
          value="active"
          readonly
          .options=${[{value:`pending`,label:`Pending`},{value:`active`,label:`Active`},{value:`closed`,label:`Closed`}]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled State -->
      <h2 style="${w.h2}">Disabled state</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        Disabled prevents all interaction and dims the appearance.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="Program type"
          disabled
          .options=${[{value:`medicaid`,label:`Medicaid`},{value:`chip`,label:`CHIP`}]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size Variants -->
      <h2 style="${w.h2}">Size variants</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        Three sizes are available: <code style="${w.monoSm}">sm</code>, <code style="${w.monoSm}">md</code> (default), and <code style="${w.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px; margin-bottom: 2rem;">
        <mms-select 
          label="Small"
          size="sm"
          .options=${[{value:`a`,label:`Option A`},{value:`b`,label:`Option B`},{value:`c`,label:`Option C`}]}
        ></mms-select>
        <mms-select 
          label="Medium (default)"
          size="md"
          .options=${[{value:`a`,label:`Option A`},{value:`b`,label:`Option B`},{value:`c`,label:`Option C`}]}
        ></mms-select>
        <mms-select 
          label="Large"
          size="lg"
          .options=${[{value:`a`,label:`Option A`},{value:`b`,label:`Option B`},{value:`c`,label:`Option C`}]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Width Behavior -->
      <h2 style="${w.h2}">Width behavior</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        Select is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <p style="${w.caption} margin-bottom: 1rem;"><strong>Full-width (default)</strong></p>
        <mms-select 
          label="Full width select"
          .options=${D}
        ></mms-select>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="${w.caption} margin-bottom: 1rem;"><strong>Grid column 1</strong></p>
          <mms-select 
            label="State"
            .options=${D}
          ></mms-select>
        </div>
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="${w.caption} margin-bottom: 1rem;"><strong>Grid column 2</strong></p>
          <mms-select 
            label="Language"
            .options=${[{value:`en`,label:`English`},{value:`es`,label:`Spanish`}]}
          ></mms-select>
        </div>
      </div>

      <div style="width: 200px; background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <p style="${w.caption} margin-bottom: 0.25rem;"><strong>Narrow container (200px)</strong></p>
        <p style="${w.caption} opacity: 0.7; margin-bottom: 1rem;">Sidebars, filter drawers, compact dialogs</p>
        <mms-select 
          label="Constrained"
          .options=${[{value:`yes`,label:`Yes`},{value:`no`,label:`No`}]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Compact Density -->
      <h2 style="${w.h2}">Compact density</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        Use <code style="${w.monoSm}">data-density="compact"</code> for reduced padding. 
        Useful for footer/header contexts or dense UI.
      </p>

      <div style="display: flex; gap: 2rem; max-width: 600px; margin-bottom: 2rem;">
        <div style="flex: 1;">
          <p style="${w.caption} margin-bottom: 0.5rem;"><strong>Default</strong></p>
          <mms-select 
            label="State"
            .options=${D}
          ></mms-select>
        </div>
        <div style="flex: 1;">
          <p style="${w.caption} margin-bottom: 0.5rem;"><strong>Compact</strong></p>
          <mms-select 
            label="State"
            data-density="compact"
            .options=${D}
          ></mms-select>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${w.h2}">Accessibility</h2>
      
      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${w.bodySm} margin: 0;">
          <strong>Why native &lt;select&gt;?</strong> Custom dropdown implementations (listbox + button) require extensive ARIA wiring and 
          often fail edge cases with screen readers. Native &lt;select&gt; guarantees correct behavior across all assistive technologies 
          with zero custom ARIA — the browser handles announcements, focus, and keyboard navigation.
        </p>
      </div>

      <h3 style="${w.h3}">WCAG 2.2 AA Compliance</h3>
      ${_(g.select.rows)}

      <h3 style="${w.h3}">Screen Reader Behavior</h3>
      <ul style="${w.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, current value (or "blank"), and "combo box"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="${w.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="${w.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: 0.5rem;"><strong>Selection:</strong> Announces newly selected option as user navigates with arrow keys</li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="${w.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${w.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the select</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Open dropdown menu (behavior varies by browser/OS)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Navigate between options (selects immediately on some platforms)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jump to first / last option</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close dropdown without changing selection</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;">Type character(s)</td>
            <td style="padding: 0.5rem 0.75rem;">Jump to first option starting with typed characters (native type-ahead)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},k={name:`Playground`,tags:[`!dev`],args:{size:`md`,state:`default`,disabled:!1,readonly:!1,label:`Select an option`,placeholder:`Choose...`,helperText:`Select one of the available options.`,options:[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`},{value:`option4`,label:`Option 4`}],name:`mySelect`,value:``,required:!1,error:!1,errorText:`Please make a selection.`,showTooltip:!1,tooltipText:`Additional guidance for this field`,theme:`maximus`,density:`default`},decorators:[e=>a`
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 320px;">
            ${e()}
          </div>
        </div>
      `],argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Text and padding size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`filled`],description:`Visual state (for documentation preview)`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction, dims appearance`,table:{category:`Visual`}},readonly:{name:`Readonly`,control:`boolean`,description:`Shows value but prevents changes`,table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Label text displayed above the select`,table:{category:`Content`}},placeholder:{name:`Placeholder`,control:`text`,description:`Placeholder shown when no value selected`,table:{category:`Content`}},helperText:{name:`Helper text`,control:`text`,description:`Supplementary guidance below the select`,table:{category:`Content`}},options:{name:`Options`,control:`object`,description:"Array of options. Each option needs `value` (string) and `label` (string) properties.",table:{category:`Content`}},name:{name:`Name`,control:`text`,description:'HTML `name` attribute — the key sent with form data on submit (e.g., `name="state"` submits as `state=CA`).',table:{category:`Form`}},value:{name:`Value`,control:`text`,description:"Currently selected option value — must match one of the `value` properties in the options array. **Clear this field to reset to placeholder.**",table:{category:`Form`}},required:{name:`Required`,control:`boolean`,description:`Shows asterisk indicator on label`,table:{category:`Validation`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and message`,table:{category:`Validation`}},errorText:{name:`Error text`,control:`text`,description:`Error message when error is true`,table:{category:`Validation`}},showTooltip:{name:`Show tooltip`,control:`boolean`,description:`Show info icon next to label`,table:{category:`Tooltip`}},tooltipText:{name:`Tooltip text`,control:`text`,description:`Tooltip content (dialog coming soon)`,table:{category:`Tooltip`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects typography)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.placeholder&&r.push(`placeholder="${n.placeholder}"`),n.value&&r.push(`value="${n.value}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.name&&r.push(`name="${n.name}"`),n.state&&n.state!=="default"&&r.push(`state="${n.state}"`),n.showTooltip&&r.push(`show-tooltip`),n.tooltipText&&n.showTooltip&&r.push(`tooltip-text="${n.tooltipText}"`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.size!==`md`&&r.push(`size="${n.size}"`),n.disabled&&r.push(`disabled`),n.readonly&&r.push(`readonly`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-select\n  ${r.join(`
  `)}\n  .options=\${options}\n></mms-select>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=e.options;if(typeof e.options==`string`)try{t=JSON.parse(e.options)}catch{t=[]}return Array.isArray(t)||(t=[]),a`
      <mms-select
        label=${e.label}
        placeholder=${e.placeholder}
        value=${e.value}
        helper-text=${e.helperText}
        name=${e.name||n}
        state=${e.state}
        ?show-tooltip=${e.showTooltip}
        tooltip-text=${e.tooltipText}
        ?error=${e.error}
        error-text=${e.errorText}
        ?required=${e.required}
        size=${e.size}
        ?disabled=${e.disabled}
        ?readonly=${e.readonly}
        data-density=${e.density===`compact`?`compact`:n}
        .options=${t}
      ></mms-select>
    `}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Select</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A single-selection dropdown using the native &lt;select&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, and integrates with forms.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Provide a label and options array. The select fills its container width by default.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="State"
          .options=\${stateOptions}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the select.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="State"
          helper-text="Select your state of residence."
          .options=\${stateOptions}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="\${t.h2}">With tooltip</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="County"
          show-tooltip
          tooltip-text="Your county determines available services and providers."
          .options=\${[{
    value: 'la',
    label: 'Los Angeles County'
  }, {
    value: 'or',
    label: 'Orange County'
  }, {
    value: 'sd',
    label: 'San Diego County'
  }]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Field -->
      <h2 style="\${t.h2}">Required field</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="State of residence"
          required
          .options=\${stateOptions}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="Language"
          error
          error-text="Please select a language."
          required
          .options=\${[{
    value: 'en',
    label: 'English'
  }, {
    value: 'es',
    label: 'Spanish'
  }, {
    value: 'zh',
    label: 'Chinese'
  }]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Readonly State -->
      <h2 style="\${t.h2}">Readonly state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="Enrollment status"
          value="active"
          readonly
          .options=\${[{
    value: 'pending',
    label: 'Pending'
  }, {
    value: 'active',
    label: 'Active'
  }, {
    value: 'closed',
    label: 'Closed'
  }]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled State -->
      <h2 style="\${t.h2}">Disabled state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Disabled prevents all interaction and dims the appearance.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="Program type"
          disabled
          .options=\${[{
    value: 'medicaid',
    label: 'Medicaid'
  }, {
    value: 'chip',
    label: 'CHIP'
  }]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size Variants -->
      <h2 style="\${t.h2}">Size variants</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Three sizes are available: <code style="\${t.monoSm}">sm</code>, <code style="\${t.monoSm}">md</code> (default), and <code style="\${t.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px; margin-bottom: 2rem;">
        <mms-select 
          label="Small"
          size="sm"
          .options=\${[{
    value: 'a',
    label: 'Option A'
  }, {
    value: 'b',
    label: 'Option B'
  }, {
    value: 'c',
    label: 'Option C'
  }]}
        ></mms-select>
        <mms-select 
          label="Medium (default)"
          size="md"
          .options=\${[{
    value: 'a',
    label: 'Option A'
  }, {
    value: 'b',
    label: 'Option B'
  }, {
    value: 'c',
    label: 'Option C'
  }]}
        ></mms-select>
        <mms-select 
          label="Large"
          size="lg"
          .options=\${[{
    value: 'a',
    label: 'Option A'
  }, {
    value: 'b',
    label: 'Option B'
  }, {
    value: 'c',
    label: 'Option C'
  }]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Width Behavior -->
      <h2 style="\${t.h2}">Width behavior</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Select is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <p style="\${t.caption} margin-bottom: 1rem;"><strong>Full-width (default)</strong></p>
        <mms-select 
          label="Full width select"
          .options=\${stateOptions}
        ></mms-select>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="\${t.caption} margin-bottom: 1rem;"><strong>Grid column 1</strong></p>
          <mms-select 
            label="State"
            .options=\${stateOptions}
          ></mms-select>
        </div>
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="\${t.caption} margin-bottom: 1rem;"><strong>Grid column 2</strong></p>
          <mms-select 
            label="Language"
            .options=\${[{
    value: 'en',
    label: 'English'
  }, {
    value: 'es',
    label: 'Spanish'
  }]}
          ></mms-select>
        </div>
      </div>

      <div style="width: 200px; background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <p style="\${t.caption} margin-bottom: 0.25rem;"><strong>Narrow container (200px)</strong></p>
        <p style="\${t.caption} opacity: 0.7; margin-bottom: 1rem;">Sidebars, filter drawers, compact dialogs</p>
        <mms-select 
          label="Constrained"
          .options=\${[{
    value: 'yes',
    label: 'Yes'
  }, {
    value: 'no',
    label: 'No'
  }]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Compact Density -->
      <h2 style="\${t.h2}">Compact density</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">data-density="compact"</code> for reduced padding. 
        Useful for footer/header contexts or dense UI.
      </p>

      <div style="display: flex; gap: 2rem; max-width: 600px; margin-bottom: 2rem;">
        <div style="flex: 1;">
          <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>Default</strong></p>
          <mms-select 
            label="State"
            .options=\${stateOptions}
          ></mms-select>
        </div>
        <div style="flex: 1;">
          <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>Compact</strong></p>
          <mms-select 
            label="State"
            data-density="compact"
            .options=\${stateOptions}
          ></mms-select>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>
      
      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Why native &lt;select&gt;?</strong> Custom dropdown implementations (listbox + button) require extensive ARIA wiring and 
          often fail edge cases with screen readers. Native &lt;select&gt; guarantees correct behavior across all assistive technologies 
          with zero custom ARIA — the browser handles announcements, focus, and keyboard navigation.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['select'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, current value (or "blank"), and "combo box"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="\${t.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="\${t.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: 0.5rem;"><strong>Selection:</strong> Announces newly selected option as user navigates with arrow keys</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the select</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Open dropdown menu (behavior varies by browser/OS)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Navigate between options (selects immediately on some platforms)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jump to first / last option</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close dropdown without changing selection</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;">Type character(s)</td>
            <td style="padding: 0.5rem 0.75rem;">Jump to first option starting with typed characters (native type-ahead)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Visual
    size: 'md',
    state: 'default',
    disabled: false,
    readonly: false,
    // Content
    label: 'Select an option',
    placeholder: 'Choose...',
    helperText: 'Select one of the available options.',
    options: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }, {
      value: 'option4',
      label: 'Option 4'
    }],
    // Form
    name: 'mySelect',
    value: '',
    // Validation
    required: false,
    error: false,
    errorText: 'Please make a selection.',
    // Tooltip
    showTooltip: false,
    tooltipText: 'Additional guidance for this field',
    // Global
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 320px;">
            \${story()}
          </div>
        </div>
      \`;
  }],
  argTypes: {
    // ── Visual ────────────────────────────────────────────────
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Text and padding size',
      table: {
        category: 'Visual'
      }
    },
    state: {
      name: 'State',
      control: 'select',
      options: ['default', 'hover', 'focus', 'filled'],
      description: 'Visual state (for documentation preview)',
      table: {
        category: 'Visual'
      }
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Prevents interaction, dims appearance',
      table: {
        category: 'Visual'
      }
    },
    readonly: {
      name: 'Readonly',
      control: 'boolean',
      description: 'Shows value but prevents changes',
      table: {
        category: 'Visual'
      }
    },
    // ── Content ───────────────────────────────────────────────
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label text displayed above the select',
      table: {
        category: 'Content'
      }
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder shown when no value selected',
      table: {
        category: 'Content'
      }
    },
    helperText: {
      name: 'Helper text',
      control: 'text',
      description: 'Supplementary guidance below the select',
      table: {
        category: 'Content'
      }
    },
    options: {
      name: 'Options',
      control: 'object',
      description: 'Array of options. Each option needs \`value\` (string) and \`label\` (string) properties.',
      table: {
        category: 'Content'
      }
    },
    // ── Form ──────────────────────────────────────────────────
    name: {
      name: 'Name',
      control: 'text',
      description: 'HTML \`name\` attribute — the key sent with form data on submit (e.g., \`name="state"\` submits as \`state=CA\`).',
      table: {
        category: 'Form'
      }
    },
    value: {
      name: 'Value',
      control: 'text',
      description: 'Currently selected option value — must match one of the \`value\` properties in the options array. **Clear this field to reset to placeholder.**',
      table: {
        category: 'Form'
      }
    },
    // ── Validation ────────────────────────────────────────────
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Shows asterisk indicator on label',
      table: {
        category: 'Validation'
      }
    },
    error: {
      name: 'Error',
      control: 'boolean',
      description: 'Displays error styling and message',
      table: {
        category: 'Validation'
      }
    },
    errorText: {
      name: 'Error text',
      control: 'text',
      description: 'Error message when error is true',
      table: {
        category: 'Validation'
      }
    },
    // ── Tooltip ───────────────────────────────────────────────
    showTooltip: {
      name: 'Show tooltip',
      control: 'boolean',
      description: 'Show info icon next to label',
      table: {
        category: 'Tooltip'
      }
    },
    tooltipText: {
      name: 'Tooltip text',
      control: 'text',
      description: 'Tooltip content (dialog coming soon)',
      table: {
        category: 'Tooltip'
      }
    },
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['default', 'maximus', 'va-gov', 'uss-oh-dvs'],
      description: 'Brand theme (affects typography)',
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
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string | boolean>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.label) attrs.push(\`label="\${a.label}"\`);
          if (a.placeholder) attrs.push(\`placeholder="\${a.placeholder}"\`);
          if (a.value) attrs.push(\`value="\${a.value}"\`);
          if (a.helperText) attrs.push(\`helper-text="\${a.helperText}"\`);
          if (a.name) attrs.push(\`name="\${a.name}"\`);
          if (a.state && a.state !== 'default') attrs.push(\`state="\${a.state}"\`);
          if (a.showTooltip) attrs.push('show-tooltip');
          if (a.tooltipText && a.showTooltip) attrs.push(\`tooltip-text="\${a.tooltipText}"\`);
          if (a.error) attrs.push('error');
          if (a.errorText && a.error) attrs.push(\`error-text="\${a.errorText}"\`);
          if (a.required) attrs.push('required');
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.disabled) attrs.push('disabled');
          if (a.readonly) attrs.push('readonly');
          if (a.density === 'compact') attrs.push('data-density="compact"');

          // Note: .options must be set programmatically, not via attribute
          return \`<mms-select\\n  \${attrs.join('\\n  ')}\\n  .options=\\\${options}\\n></mms-select>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none' // Preserve argTypes definition order
    }
  },
  render: (args: {
    label: string;
    placeholder: string;
    helperText: string;
    name: string;
    showTooltip: boolean;
    tooltipText: string;
    error: boolean;
    errorText: string;
    required: boolean;
    value: string;
    size: string;
    state: string;
    disabled: boolean;
    readonly: boolean;
    options: SelectOption[] | string;
    theme: string;
    density: string;
  }) => {
    // Handle Storybook control edge cases (may be stringified JSON)
    let parsedOptions = args.options;
    if (typeof args.options === 'string') {
      try {
        parsedOptions = JSON.parse(args.options);
      } catch {
        parsedOptions = [];
      }
    }
    if (!Array.isArray(parsedOptions)) {
      parsedOptions = [];
    }
    return html\`
      <mms-select
        label=\${args.label}
        placeholder=\${args.placeholder}
        value=\${args.value}
        helper-text=\${args.helperText}
        name=\${args.name || nothing}
        state=\${args.state}
        ?show-tooltip=\${args.showTooltip}
        tooltip-text=\${args.tooltipText}
        ?error=\${args.error}
        error-text=\${args.errorText}
        ?required=\${args.required}
        size=\${args.size}
        ?disabled=\${args.disabled}
        ?readonly=\${args.readonly}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
        .options=\${parsedOptions}
      ></mms-select>
    \`;
  }
}`,...k.parameters?.docs?.source}}},A=[`Overview`,`PlaygroundStory`]}));j();export{O as Overview,k as PlaygroundStory,A as __namedExportsOrder,C as default,j as n,S as t};