import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,n as r,p as i,s as a,t as o}from"./lit-aQ4dERgF.js";import{a as s,f as c,m as l,n as u,o as d,r as f,t as p}from"./decorate-CFSc4vnv.js";import{t as m}from"./mms-icon.component-Cz1Jc6Sy.js";import{a as h,o as g,r as _,t as v}from"./a11y-outcome-Bve_D8DZ.js";var y,b=e((()=>{o(),d(),s(),m(),u(),y=class extends r{constructor(...e){super(...e),this.size=`md`,this.state=`default`,this.disabled=!1,this.readonly=!1,this.resize=`vertical`,this._rows=3,this.label=``,this.placeholder=``,this.helperText=``,this.name=``,this.value=``,this.autocomplete=``,this.required=!1,this.error=!1,this.errorText=``,this.maxLength=0,this.showCharacterCounter=!1,this.showTooltip=!1,this.tooltipText=``}get rows(){return this._rows}set rows(e){let t=this._rows;this._rows=Math.min(15,Math.max(2,e)),this.requestUpdate(`rows`,t)}get ariaDescribedBy(){let e=[];return this.helperText&&!this.error&&e.push(`helper-text`),this.error&&this.errorText&&e.push(`error-text`),this.showCharacterCounter&&this.maxLength>0&&e.push(`char-counter`),e.join(` `)||void 0}get charsRemaining(){return this.maxLength-this.value.length}static{this.styles=[f,i`
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
        cursor: help;
      }

      :host([disabled]) .tooltip-icon {
        color: var(--color-disabled-text);
        cursor: not-allowed;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         TEXTAREA CONTAINER
         ═══════════════════════════════════════════════════════════════════════ */
      .textarea-container {
        display: flex;
        box-sizing: border-box;
        min-width: 120px;
        background: var(--color-surface-raised);
        border: 1px solid var(--color-neutral-7);
        border-radius: var(--radius-sm);
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }

      /* Hover state — inset shadow for visual distinction (no layout shift) */
      :host(:not([disabled]):not([readonly])) .textarea-container:hover,
      :host([state='hover']:not([disabled]):not([readonly])) .textarea-container {
        border-color: var(--color-border-interactive-hover);
        box-shadow: inset 0 0 0 1px var(--color-border-interactive-hover);
      }

      /* Focus state */
      :host([state='focus']:not([disabled])) .textarea-container,
      .textarea-container:focus-within {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
      }

      /* Filled state */
      :host([state='filled']:not([disabled]):not([error])) .textarea-container {
        border-color: var(--color-neutral-9);
      }

      /* Error state */
      :host([error]) .textarea-container {
        border-color: var(--color-input-border-error);
      }

      :host([error]:not([disabled]):not([readonly])) .textarea-container:hover,
      :host([error][state='hover']:not([disabled]):not([readonly])) .textarea-container {
        border-color: var(--color-input-border-error);
        box-shadow: inset 0 0 0 1px var(--color-input-border-error);
      }

      :host([error][state='focus']) .textarea-container,
      :host([error]) .textarea-container:focus-within {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
      }

      /* Disabled state */
      :host([disabled]) .textarea-container {
        background: var(--color-disabled-surface);
        border-color: var(--color-disabled-stroke);
        cursor: not-allowed;
      }

      /* Readonly state */
      :host([readonly]) .textarea-container {
        background: var(--color-neutral-2);
        border-color: var(--color-neutral-5);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         TEXTAREA FIELD
         ═══════════════════════════════════════════════════════════════════════ */
      .textarea-field {
        flex: 1;
        width: 100%;
        min-width: 60px;
        border: none;
        outline: none;
        background: transparent;
        font-family: inherit;
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        color: var(--color-text-default);
        padding: var(--spacing-sm2);
        box-sizing: border-box;
        /* Baseline height matches the rows count; resize=vertical can grow it but never shrink below this floor */
        height: calc(var(--mms-ta-rows, 3) * 1em * var(--type-body-md-line-height) + 2 * var(--spacing-sm2));
        min-height: calc(var(--mms-ta-rows, 3) * 1em * var(--type-body-md-line-height) + 2 * var(--spacing-sm2));
      }

      :host([resize='none']) .textarea-field {
        resize: none;
      }

      :host([size='sm']) .textarea-field {
        font-size: var(--type-body-sm-size);
        line-height: var(--type-body-sm-line-height);
        padding: var(--spacing-xs2) var(--spacing-sm1);
        height: calc(var(--mms-ta-rows, 3) * 1em * var(--type-body-sm-line-height) + 2 * var(--spacing-xs2));
        min-height: calc(var(--mms-ta-rows, 3) * 1em * var(--type-body-sm-line-height) + 2 * var(--spacing-xs2));
      }

      :host([size='lg']) .textarea-field {
        font-size: var(--type-body-lg-size);
        line-height: var(--type-body-lg-line-height);
        padding: var(--spacing-md1) var(--spacing-sm2);
        height: calc(var(--mms-ta-rows, 3) * 1em * var(--type-body-lg-line-height) + 2 * var(--spacing-md1));
        min-height: calc(var(--mms-ta-rows, 3) * 1em * var(--type-body-lg-line-height) + 2 * var(--spacing-md1));
      }

      /* Placeholder */
      .textarea-field::placeholder {
        color: var(--color-text-placeholder);
      }

      :host(:hover:not([disabled]):not([readonly])) .textarea-field::placeholder {
        color: var(--color-text-default);
      }

      :host([error]) .textarea-field::placeholder {
        color: var(--color-input-border-error);
        opacity: 0.7;
      }

      /* Disabled */
      :host([disabled]) .textarea-field {
        color: var(--color-disabled-text);
        cursor: not-allowed;
      }

      :host([disabled]) .textarea-field::placeholder {
        color: var(--color-disabled-text);
      }

      /* Readonly */
      :host([readonly]) .textarea-field {
        color: var(--color-text-subtle);
        cursor: default;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         HELPER TEXT
         ═══════════════════════════════════════════════════════════════════════ */
      .helper-text {
        font-size: var(--type-body-sm-size);
        line-height: var(--type-body-sm-line-height);
        color: var(--color-text-subtle);
      }

      :host([disabled]) .helper-text {
        color: var(--color-disabled-text);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         ERROR TEXT
         ═══════════════════════════════════════════════════════════════════════ */
      .error-text {
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
         CHARACTER COUNTER
         ═══════════════════════════════════════════════════════════════════════ */
      .char-counter {
        font-size: var(--type-body-sm-size);
        line-height: var(--type-body-sm-line-height);
        color: var(--color-text-subtle);
        text-align: right;
      }

      .char-counter.warning {
        color: var(--color-utility-caution-emphasis);
      }

      .char-counter.error {
        color: var(--color-input-border-error);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         DENSITY: COMPACT
         ═══════════════════════════════════════════════════════════════════════ */
      :host([data-density='compact']) {
        gap: var(--spacing-xs1);
      }

      :host([data-density='compact']) .textarea-field {
        padding: var(--spacing-xs2) var(--spacing-sm1);
        height: calc(var(--mms-ta-rows, 3) * 1em * var(--type-body-md-line-height) + 2 * var(--spacing-xs2));
        min-height: calc(var(--mms-ta-rows, 3) * 1em * var(--type-body-md-line-height) + 2 * var(--spacing-xs2));
      }

      :host([data-density='compact'][size='sm']) .textarea-field {
        padding: var(--spacing-xs1) var(--spacing-xs2);
        height: calc(var(--mms-ta-rows, 3) * 1em * var(--type-body-sm-line-height) + 2 * var(--spacing-xs1));
        min-height: calc(var(--mms-ta-rows, 3) * 1em * var(--type-body-sm-line-height) + 2 * var(--spacing-xs1));
      }

      :host([data-density='compact'][size='lg']) .textarea-field {
        padding: var(--spacing-sm1) var(--spacing-sm2);
        height: calc(var(--mms-ta-rows, 3) * 1em * var(--type-body-lg-line-height) + 2 * var(--spacing-sm1));
        min-height: calc(var(--mms-ta-rows, 3) * 1em * var(--type-body-lg-line-height) + 2 * var(--spacing-sm1));
      }
    `]}_handleInput(e){if(this.disabled||this.readonly)return;let t=e.target,n=this.value,r=t.value;this.maxLength>0&&r.length>this.maxLength&&(r=r.slice(0,this.maxLength),t.value=r),this.value=r,this.dispatchEvent(new CustomEvent(`input`,{detail:{value:this.value,oldValue:n},bubbles:!0,composed:!0}))}_handleFocus(){this.disabled||(this.state=`focus`,this.dispatchEvent(new CustomEvent(`focus`,{detail:{value:this.value},bubbles:!0,composed:!0})))}_handleBlur(){this.disabled||(this.state=this.value?`filled`:`default`,this.dispatchEvent(new CustomEvent(`blur`,{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0})))}render(){return a`
      ${this.label?a`
            <div class="label-row">
              <span>${this.label}</span>
              ${this.required?a`<span class="required-indicator" aria-hidden="true"
                    >*</span
                  >`:n}
              ${this.showTooltip?a`
                    <mms-icon
                      class="tooltip-icon"
                      name="info"
                      size="sm"
                      title="${this.tooltipText}"
                    ></mms-icon>
                  `:n}
            </div>
          `:n}

      <div class="textarea-container">
        <textarea
          class="textarea-field"
          rows="${this.rows}"
          style="--mms-ta-rows: ${this.rows}"
          .value="${this.value}"
          placeholder="${this.placeholder}"
          name="${this.name||n}"
          autocomplete="${this.autocomplete||n}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          aria-label="${this.label||this.placeholder}"
          aria-invalid="${this.error}"
          aria-describedby="${this.ariaDescribedBy||n}"
          maxlength="${this.maxLength>0?this.maxLength:n}"
          @input="${this._handleInput}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
        ></textarea>
      </div>

      ${this.showCharacterCounter&&this.maxLength>0?a`
            <div
              id="char-counter"
              class="char-counter ${this.charsRemaining<=10?`warning`:``} ${this.charsRemaining<0?`error`:``}"
              aria-live="polite"
            >
              ${this.charsRemaining} characters remaining
            </div>
          `:n}
      ${this.helperText&&!this.error&&!this.disabled?a`<span id="helper-text" class="helper-text"
            >${this.helperText}</span
          >`:n}
      ${this.error&&this.errorText&&!this.disabled?a`
            <span id="error-text" class="error-text" role="alert">
              <mms-icon class="error-icon" name="warning-circle" size="16"></mms-icon>
              ${this.errorText}
            </span>
          `:n}
    `}},p([c({type:String,reflect:!0})],y.prototype,`size`,void 0),p([c({type:String,reflect:!0})],y.prototype,`state`,void 0),p([c({type:Boolean,reflect:!0})],y.prototype,`disabled`,void 0),p([c({type:Boolean,reflect:!0})],y.prototype,`readonly`,void 0),p([c({type:String,reflect:!0})],y.prototype,`resize`,void 0),p([c({type:Number})],y.prototype,`rows`,null),p([c({type:String})],y.prototype,`label`,void 0),p([c({type:String})],y.prototype,`placeholder`,void 0),p([c({type:String,attribute:`helper-text`})],y.prototype,`helperText`,void 0),p([c({type:String})],y.prototype,`name`,void 0),p([c({type:String,reflect:!0})],y.prototype,`value`,void 0),p([c({type:String})],y.prototype,`autocomplete`,void 0),p([c({type:Boolean,reflect:!0})],y.prototype,`required`,void 0),p([c({type:Boolean,reflect:!0})],y.prototype,`error`,void 0),p([c({type:String,attribute:`error-text`})],y.prototype,`errorText`,void 0),p([c({type:Number,attribute:`max-length`})],y.prototype,`maxLength`,void 0),p([c({type:Boolean,attribute:`show-character-counter`})],y.prototype,`showCharacterCounter`,void 0),p([c({type:Boolean,reflect:!0,attribute:`show-tooltip`})],y.prototype,`showTooltip`,void 0),p([c({type:String,attribute:`tooltip-text`})],y.prototype,`tooltipText`,void 0),y=p([l(`mms-text-area`)],y)})),x=t({Overview:()=>E,PlaygroundStory:()=>D,__namedExportsOrder:()=>O,default:()=>S}),S,C,w,T,E,D,O,k=e((()=>{o(),b(),h(),v(),S={title:`Forms/Text Area`,tags:[`!autodocs`]},C={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},w=`680px`,T=`960px`,E={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${T}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${C.h1}">Text Area</h1>
      <p style="${C.body} opacity: 0.85; max-width: ${w}; margin-bottom: 2rem;">
        A multi-line text input using the native &lt;textarea&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, character counting, and
        integrates with forms.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${C.h2}">Basic usage</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        Provide a label and placeholder. The text area fills its container width by default.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Comments"
          placeholder="Enter your comments..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="${C.h2}">With helper text</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the text area.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Reason for request"
          helper-text="Provide as much detail as possible."
          placeholder="Describe your reason..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="${C.h2}">With tooltip</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Additional notes"
          show-tooltip
          tooltip-text="Include any information relevant to your case."
          placeholder="Enter notes..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Field -->
      <h2 style="${C.h2}">Required field</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        The <code style="${C.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Description of issue"
          required
          placeholder="Describe the issue..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="${C.h2}">Error state</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        The <code style="${C.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Explanation"
          error
          error-text="Explanation is required and must be at least 20 characters."
          required
          placeholder="Enter explanation..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Character Counter -->
      <h2 style="${C.h2}">Character counter</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        Set <code style="${C.monoSm}">max-length</code> and <code style="${C.monoSm}">show-character-counter</code>
        to display remaining characters. Input is clipped at the limit.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Short summary"
          max-length="140"
          show-character-counter
          placeholder="Summarize in 140 characters or fewer..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Readonly State -->
      <h2 style="${C.h2}">Readonly state</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Submitted feedback"
          value="The enrollment process was straightforward and the support team was helpful."
          readonly
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled State -->
      <h2 style="${C.h2}">Disabled state</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        Disabled prevents all interaction and dims the appearance.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Case notes"
          disabled
          placeholder="Not editable"
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Rows and Resize -->
      <h2 style="${C.h2}">Rows and resize behavior</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        The <code style="${C.monoSm}">rows</code> prop sets the initial visible height.
        <code style="${C.monoSm}">resize</code> controls whether the user can drag-resize vertically
        (<code style="${C.monoSm}">vertical</code>, default) or not at all (<code style="${C.monoSm}">none</code>).
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px; margin-bottom: 2rem;">
        <mms-text-area
          label="Resizable (default)"
          rows="3"
          resize="vertical"
          placeholder="Drag the bottom-right corner to resize..."
        ></mms-text-area>
        <mms-text-area
          label="Fixed size (no resize)"
          rows="5"
          resize="none"
          placeholder="Cannot be resized..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size Variants -->
      <h2 style="${C.h2}">Size variants</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        Three sizes are available: <code style="${C.monoSm}">sm</code>, <code style="${C.monoSm}">md</code> (default), and <code style="${C.monoSm}">lg</code>.
        Consistent with <code style="${C.monoSm}">mms-text-field</code> sizing.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px; margin-bottom: 2rem;">
        <mms-text-area label="Small" size="sm" placeholder="Small text area"></mms-text-area>
        <mms-text-area label="Medium (default)" size="md" placeholder="Medium text area"></mms-text-area>
        <mms-text-area label="Large" size="lg" placeholder="Large text area"></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Width Behavior -->
      <h2 style="${C.h2}">Width behavior</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        Text area is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <p style="${C.caption} margin-bottom: 1rem;"><strong>Full-width (default)</strong></p>
        <mms-text-area label="Full width text area" placeholder="Fills container..."></mms-text-area>
      </div>

      <div style="width: 240px; background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <p style="${C.caption} margin-bottom: 0.25rem;"><strong>Narrow container (240px)</strong></p>
        <p style="${C.caption} opacity: 0.7; margin-bottom: 1rem;">Sidebars, filter drawers, compact dialogs</p>
        <mms-text-area label="Constrained" placeholder="Narrow..."></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Compact Density -->
      <h2 style="${C.h2}">Compact density</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        Use <code style="${C.monoSm}">data-density="compact"</code> for reduced padding.
        Useful for footer/header contexts or dense UI.
      </p>

      <div style="display: flex; gap: 2rem; max-width: 700px; margin-bottom: 2rem;">
        <div style="flex: 1;">
          <p style="${C.caption} margin-bottom: 0.5rem;"><strong>Default</strong></p>
          <mms-text-area label="Comments" placeholder="Enter text..."></mms-text-area>
        </div>
        <div style="flex: 1;">
          <p style="${C.caption} margin-bottom: 0.5rem;"><strong>Compact</strong></p>
          <mms-text-area label="Comments" data-density="compact" placeholder="Enter text..."></mms-text-area>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${C.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${C.bodySm} margin: 0;">
          <strong>Why native &lt;textarea&gt;?</strong> A native multi-line input guarantees correct behavior
          across all assistive technologies with zero custom ARIA — the browser handles text editing,
          selection, line wrapping, and resize affordance natively.
        </p>
      </div>

      <h3 style="${C.h3}">WCAG 2.2 AA Compliance</h3>
      ${_(g[`text-area`].rows)}

      <h3 style="${C.h3}">Screen Reader Behavior</h3>
      <ul style="${C.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, current value (or "blank"), and "text area"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="${C.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="${C.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: 0.5rem;"><strong>Character counter:</strong> Announces remaining characters via <code style="${C.monoSm}">aria-live="polite"</code> as the user types</li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="${C.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${C.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus into / out of the text area</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus to the previous field</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;">Type character(s)</td>
            <td style="padding: 0.5rem 0.75rem;">Insert text at cursor position (native multi-line editing)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Insert a new line (does not submit a form)</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move cursor within the text (native browser behavior)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},D={name:`Playground`,tags:[`!dev`],args:{size:`md`,state:`default`,disabled:!1,readonly:!1,resize:`vertical`,rows:3,label:`Comments`,placeholder:`Enter your comments...`,helperText:``,name:`myTextArea`,value:``,autocomplete:``,required:!1,error:!1,errorText:`This field is required.`,maxLength:0,showCharacterCounter:!1,showTooltip:!1,tooltipText:`Additional guidance for this field`,theme:`maximus`,density:`default`},decorators:[e=>a`
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 400px;">
            ${e()}
          </div>
        </div>
      `],argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Text and padding size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`filled`],description:`Visual state (for documentation preview)`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction, dims appearance`,table:{category:`Visual`}},readonly:{name:`Readonly`,control:`boolean`,description:`Shows value but prevents changes`,table:{category:`Visual`}},resize:{name:`Resize`,control:`select`,options:[`vertical`,`none`],description:`Whether the text area can be drag-resized vertically`,table:{category:`Visual`}},rows:{name:`Rows`,control:{type:`number`,min:2,max:15,step:1},description:"Visible text rows (native `rows` attribute), clamped to 2–15",table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Label text displayed above the text area`,table:{category:`Content`}},placeholder:{name:`Placeholder`,control:`text`,description:`Placeholder shown when no value`,table:{category:`Content`}},helperText:{name:`Helper text`,control:`text`,description:`Supplementary guidance below the text area`,table:{category:`Content`}},name:{name:`Name`,control:`text`,description:"HTML `name` attribute — the key sent with form data on submit.",table:{category:`Form`}},value:{name:`Value`,control:`text`,description:`Current textarea value`,table:{category:`Form`}},autocomplete:{name:`Autocomplete`,control:`text`,description:"Browser autocomplete hint — any valid HTML `autocomplete` token (e.g. `street-address`, `name`). Enables WCAG 1.3.5 Identify Input Purpose.",table:{category:`Form`}},required:{name:`Required`,control:`boolean`,description:`Shows asterisk indicator on label`,table:{category:`Validation`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and message`,table:{category:`Validation`}},errorText:{name:`Error text`,control:`text`,description:`Error message when error is true`,table:{category:`Validation`}},maxLength:{name:`Max length`,control:`number`,description:`Character limit (0 = unlimited). Input is clipped at the limit.`,table:{category:`Validation`}},showCharacterCounter:{name:`Show character counter`,control:`boolean`,description:`Displays remaining characters (requires max-length > 0)`,table:{category:`Validation`}},showTooltip:{name:`Show tooltip`,control:`boolean`,description:`Show info icon next to label`,table:{category:`Tooltip`}},tooltipText:{name:`Tooltip text`,control:`text`,description:`Tooltip content (dialog coming soon)`,table:{category:`Tooltip`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects typography)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.placeholder&&r.push(`placeholder="${n.placeholder}"`),n.value&&r.push(`value="${n.value}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.name&&r.push(`name="${n.name}"`),n.state&&n.state!=="default"&&r.push(`state="${n.state}"`),n.rows&&n.rows!==3&&r.push(`rows="${n.rows}"`),n.resize&&n.resize!==`vertical`&&r.push(`resize="${n.resize}"`),n.showTooltip&&r.push(`show-tooltip`),n.tooltipText&&n.showTooltip&&r.push(`tooltip-text="${n.tooltipText}"`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.maxLength&&r.push(`max-length="${n.maxLength}"`),n.showCharacterCounter&&r.push(`show-character-counter`),n.size!==`md`&&r.push(`size="${n.size}"`),n.disabled&&r.push(`disabled`),n.readonly&&r.push(`readonly`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-text-area\n  ${r.join(`
  `)}\n></mms-text-area>`},language:`html`}},controls:{sort:`none`}},render:e=>a`
      <mms-text-area
        label=${e.label}
        placeholder=${e.placeholder}
        value=${e.value}
        helper-text=${e.helperText}
        name=${e.name||n}
        autocomplete=${e.autocomplete||n}
        state=${e.state}
        rows=${e.rows}
        resize=${e.resize}
        ?show-tooltip=${e.showTooltip}
        tooltip-text=${e.tooltipText}
        ?error=${e.error}
        error-text=${e.errorText}
        ?required=${e.required}
        max-length=${e.maxLength||n}
        ?show-character-counter=${e.showCharacterCounter}
        size=${e.size}
        ?disabled=${e.disabled}
        ?readonly=${e.readonly}
        data-density=${e.density===`compact`?`compact`:n}
      ></mms-text-area>
    `},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Text Area</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A multi-line text input using the native &lt;textarea&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, character counting, and
        integrates with forms.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Provide a label and placeholder. The text area fills its container width by default.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Comments"
          placeholder="Enter your comments..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the text area.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Reason for request"
          helper-text="Provide as much detail as possible."
          placeholder="Describe your reason..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="\${t.h2}">With tooltip</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Additional notes"
          show-tooltip
          tooltip-text="Include any information relevant to your case."
          placeholder="Enter notes..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Field -->
      <h2 style="\${t.h2}">Required field</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Description of issue"
          required
          placeholder="Describe the issue..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Explanation"
          error
          error-text="Explanation is required and must be at least 20 characters."
          required
          placeholder="Enter explanation..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Character Counter -->
      <h2 style="\${t.h2}">Character counter</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Set <code style="\${t.monoSm}">max-length</code> and <code style="\${t.monoSm}">show-character-counter</code>
        to display remaining characters. Input is clipped at the limit.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Short summary"
          max-length="140"
          show-character-counter
          placeholder="Summarize in 140 characters or fewer..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Readonly State -->
      <h2 style="\${t.h2}">Readonly state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Submitted feedback"
          value="The enrollment process was straightforward and the support team was helpful."
          readonly
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled State -->
      <h2 style="\${t.h2}">Disabled state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Disabled prevents all interaction and dims the appearance.
      </p>

      <div style="margin-bottom: 2rem; max-width: 400px;">
        <mms-text-area
          label="Case notes"
          disabled
          placeholder="Not editable"
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Rows and Resize -->
      <h2 style="\${t.h2}">Rows and resize behavior</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">rows</code> prop sets the initial visible height.
        <code style="\${t.monoSm}">resize</code> controls whether the user can drag-resize vertically
        (<code style="\${t.monoSm}">vertical</code>, default) or not at all (<code style="\${t.monoSm}">none</code>).
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px; margin-bottom: 2rem;">
        <mms-text-area
          label="Resizable (default)"
          rows="3"
          resize="vertical"
          placeholder="Drag the bottom-right corner to resize..."
        ></mms-text-area>
        <mms-text-area
          label="Fixed size (no resize)"
          rows="5"
          resize="none"
          placeholder="Cannot be resized..."
        ></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size Variants -->
      <h2 style="\${t.h2}">Size variants</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Three sizes are available: <code style="\${t.monoSm}">sm</code>, <code style="\${t.monoSm}">md</code> (default), and <code style="\${t.monoSm}">lg</code>.
        Consistent with <code style="\${t.monoSm}">mms-text-field</code> sizing.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px; margin-bottom: 2rem;">
        <mms-text-area label="Small" size="sm" placeholder="Small text area"></mms-text-area>
        <mms-text-area label="Medium (default)" size="md" placeholder="Medium text area"></mms-text-area>
        <mms-text-area label="Large" size="lg" placeholder="Large text area"></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Width Behavior -->
      <h2 style="\${t.h2}">Width behavior</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Text area is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <p style="\${t.caption} margin-bottom: 1rem;"><strong>Full-width (default)</strong></p>
        <mms-text-area label="Full width text area" placeholder="Fills container..."></mms-text-area>
      </div>

      <div style="width: 240px; background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <p style="\${t.caption} margin-bottom: 0.25rem;"><strong>Narrow container (240px)</strong></p>
        <p style="\${t.caption} opacity: 0.7; margin-bottom: 1rem;">Sidebars, filter drawers, compact dialogs</p>
        <mms-text-area label="Constrained" placeholder="Narrow..."></mms-text-area>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Compact Density -->
      <h2 style="\${t.h2}">Compact density</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">data-density="compact"</code> for reduced padding.
        Useful for footer/header contexts or dense UI.
      </p>

      <div style="display: flex; gap: 2rem; max-width: 700px; margin-bottom: 2rem;">
        <div style="flex: 1;">
          <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>Default</strong></p>
          <mms-text-area label="Comments" placeholder="Enter text..."></mms-text-area>
        </div>
        <div style="flex: 1;">
          <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>Compact</strong></p>
          <mms-text-area label="Comments" data-density="compact" placeholder="Enter text..."></mms-text-area>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Why native &lt;textarea&gt;?</strong> A native multi-line input guarantees correct behavior
          across all assistive technologies with zero custom ARIA — the browser handles text editing,
          selection, line wrapping, and resize affordance natively.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['text-area'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, current value (or "blank"), and "text area"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="\${t.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="\${t.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: 0.5rem;"><strong>Character counter:</strong> Announces remaining characters via <code style="\${t.monoSm}">aria-live="polite"</code> as the user types</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus into / out of the text area</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus to the previous field</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;">Type character(s)</td>
            <td style="padding: 0.5rem 0.75rem;">Insert text at cursor position (native multi-line editing)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Insert a new line (does not submit a form)</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move cursor within the text (native browser behavior)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Visual
    size: 'md',
    state: 'default',
    disabled: false,
    readonly: false,
    resize: 'vertical',
    rows: 3,
    // Content
    label: 'Comments',
    placeholder: 'Enter your comments...',
    helperText: '',
    // Form
    name: 'myTextArea',
    value: '',
    autocomplete: '',
    // Validation
    required: false,
    error: false,
    errorText: 'This field is required.',
    maxLength: 0,
    showCharacterCounter: false,
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
          <div style="width: 400px;">
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
    resize: {
      name: 'Resize',
      control: 'select',
      options: ['vertical', 'none'],
      description: 'Whether the text area can be drag-resized vertically',
      table: {
        category: 'Visual'
      }
    },
    rows: {
      name: 'Rows',
      control: {
        type: 'number',
        min: 2,
        max: 15,
        step: 1
      },
      description: 'Visible text rows (native \`rows\` attribute), clamped to 2–15',
      table: {
        category: 'Visual'
      }
    },
    // ── Content ───────────────────────────────────────────────
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label text displayed above the text area',
      table: {
        category: 'Content'
      }
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder shown when no value',
      table: {
        category: 'Content'
      }
    },
    helperText: {
      name: 'Helper text',
      control: 'text',
      description: 'Supplementary guidance below the text area',
      table: {
        category: 'Content'
      }
    },
    // ── Form ──────────────────────────────────────────────────
    name: {
      name: 'Name',
      control: 'text',
      description: 'HTML \`name\` attribute — the key sent with form data on submit.',
      table: {
        category: 'Form'
      }
    },
    value: {
      name: 'Value',
      control: 'text',
      description: 'Current textarea value',
      table: {
        category: 'Form'
      }
    },
    autocomplete: {
      name: 'Autocomplete',
      control: 'text',
      description: 'Browser autocomplete hint — any valid HTML \`autocomplete\` token (e.g. \`street-address\`, \`name\`). Enables WCAG 1.3.5 Identify Input Purpose.',
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
    maxLength: {
      name: 'Max length',
      control: 'number',
      description: 'Character limit (0 = unlimited). Input is clipped at the limit.',
      table: {
        category: 'Validation'
      }
    },
    showCharacterCounter: {
      name: 'Show character counter',
      control: 'boolean',
      description: 'Displays remaining characters (requires max-length > 0)',
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
          args: Record<string, string | boolean | number>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.label) attrs.push(\`label="\${a.label}"\`);
          if (a.placeholder) attrs.push(\`placeholder="\${a.placeholder}"\`);
          if (a.value) attrs.push(\`value="\${a.value}"\`);
          if (a.helperText) attrs.push(\`helper-text="\${a.helperText}"\`);
          if (a.name) attrs.push(\`name="\${a.name}"\`);
          if (a.state && a.state !== 'default') attrs.push(\`state="\${a.state}"\`);
          if (a.rows && a.rows !== 3) attrs.push(\`rows="\${a.rows}"\`);
          if (a.resize && a.resize !== 'vertical') attrs.push(\`resize="\${a.resize}"\`);
          if (a.showTooltip) attrs.push('show-tooltip');
          if (a.tooltipText && a.showTooltip) attrs.push(\`tooltip-text="\${a.tooltipText}"\`);
          if (a.error) attrs.push('error');
          if (a.errorText && a.error) attrs.push(\`error-text="\${a.errorText}"\`);
          if (a.required) attrs.push('required');
          if (a.maxLength) attrs.push(\`max-length="\${a.maxLength}"\`);
          if (a.showCharacterCounter) attrs.push('show-character-counter');
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.disabled) attrs.push('disabled');
          if (a.readonly) attrs.push('readonly');
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-text-area\\n  \${attrs.join('\\n  ')}\\n></mms-text-area>\`;
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
    autocomplete: string;
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
    resize: string;
    rows: number;
    maxLength: number;
    showCharacterCounter: boolean;
    theme: string;
    density: string;
  }) => {
    return html\`
      <mms-text-area
        label=\${args.label}
        placeholder=\${args.placeholder}
        value=\${args.value}
        helper-text=\${args.helperText}
        name=\${args.name || nothing}
        autocomplete=\${args.autocomplete || nothing}
        state=\${args.state}
        rows=\${args.rows}
        resize=\${args.resize}
        ?show-tooltip=\${args.showTooltip}
        tooltip-text=\${args.tooltipText}
        ?error=\${args.error}
        error-text=\${args.errorText}
        ?required=\${args.required}
        max-length=\${args.maxLength || nothing}
        ?show-character-counter=\${args.showCharacterCounter}
        size=\${args.size}
        ?disabled=\${args.disabled}
        ?readonly=\${args.readonly}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
      ></mms-text-area>
    \`;
  }
}`,...D.parameters?.docs?.source}}},O=[`Overview`,`PlaygroundStory`]}));k();export{E as Overview,D as PlaygroundStory,O as __namedExportsOrder,S as default,k as n,x as t};