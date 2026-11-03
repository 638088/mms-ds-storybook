import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-B0BZwaT1.js";import{E as s,S as c,T as l,g as u,h as d,n as f,p,r as m,t as h,w as g}from"./mms-icon.component-DFVI3nJi.js";import{i as _,n as v,r as y,t as b}from"./delegates-aria-label-HG0ZTDsy.js";import{n as x,r as S}from"./iframe-C49srKsk.js";import{n as C,t as w}from"./localize-DGaV1nF3.js";import{n as T,r as E}from"./wcag-coverage-DNhlI7v1.js";import{t as D}from"./mms-inline-alert.component-D2eQsUms.js";import{a as O,c as k,d as A,i as j,n as M,o as N,r as P,u as F}from"./doc-styles-DkvR_Qyb.js";import{a as I,n as L}from"./a11y-outcome-Baw4sLAQ.js";import{n as R,t as z}from"./form-associated-Db-pIajX.js";import{t as B}from"./mms-tooltip.component-BVbs43hE.js";var V,H=e((()=>{o(),s(),y(),u(),d(),v(),R(),h(),B(),C(),m(),V=class extends b(z(i)){constructor(...e){super(...e),this.localize=new w(this),this.size=`md`,this.state=`default`,this.disabled=!1,this.readonly=!1,this.resize=`vertical`,this._rows=3,this.label=``,this.placeholder=``,this.helperText=``,this.name=``,this.value=``,this.autocomplete=``,this.required=!1,this.error=!1,this.errorText=``,this.maxLength=0,this.showCharacterCounter=!1,this.showTooltip=!1,this.tooltipText=``}get rows(){return this._rows}set rows(e){let t=this._rows;this._rows=Math.min(15,Math.max(2,e)),this.requestUpdate(`rows`,t)}get ariaDescribedBy(){let e=[];return this.helperText&&!this.error&&e.push(`helper-text`),this.error&&this.errorText&&e.push(`error-text`),this.showCharacterCounter&&this.maxLength>0&&e.push(`char-counter`),e.join(` `)||void 0}get charsRemaining(){return this.maxLength-this.value.length}static{this.shadowRootOptions={...i.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[l,_,p,r`
      /* ═══════════════════════════════════════════════════════════════════════
         HOST
         ═══════════════════════════════════════════════════════════════════════ */
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs2);
        font-family: var(--type-body-md-family);
      }

      :host(:is([disabled], :disabled)) {
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

      :host(:is([disabled], :disabled)) .label-row {
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

      :host(:is([disabled], :disabled)) .tooltip-icon {
        color: var(--color-disabled-text);
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
      :host(:not(:is([disabled], :disabled)):not([readonly])) .textarea-container:hover,
      :host([state='hover']:not(:is([disabled], :disabled)):not([readonly])) .textarea-container {
        border-color: var(--color-border-interactive-hover);
        box-shadow: inset 0 0 0 1px var(--color-border-interactive-hover);
      }

      /* Focus state */
      :host([state='focus']:not(:is([disabled], :disabled))) .textarea-container,
      .textarea-container:focus-within {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
      }

      /* Filled state */
      :host([state='filled']:not(:is([disabled], :disabled)):not([error])) .textarea-container {
        border-color: var(--color-neutral-9);
      }

      /* Error state */
      :host([error]) .textarea-container {
        border-color: var(--color-input-border-error);
      }

      :host([error]:not(:is([disabled], :disabled)):not([readonly])) .textarea-container:hover,
      :host([error][state='hover']:not(:is([disabled], :disabled)):not([readonly])) .textarea-container {
        border-color: var(--color-input-border-error);
        box-shadow: inset 0 0 0 1px var(--color-input-border-error);
      }

      :host([error][state='focus']) .textarea-container,
      :host([error]) .textarea-container:focus-within {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
      }

      /* Forced colors drops box-shadow and recolors borders, which erases the focus ring
         above. An outline survives and takes a system color. */
      @media (forced-colors: active) {
        :host([state='focus']) .textarea-container,
        .textarea-container:focus-within {
          outline: var(--focus-ring-width) solid Highlight;
          outline-offset: 1px;
        }
      }

      /* Disabled state */
      :host(:is([disabled], :disabled)) .textarea-container {
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

      :host(:hover:not(:is([disabled], :disabled)):not([readonly])) .textarea-field::placeholder {
        color: var(--color-text-default);
      }

      :host([error]) .textarea-field::placeholder {
        color: var(--color-input-border-error);
        opacity: 0.7;
      }

      /* Disabled */
      :host(:is([disabled], :disabled)) .textarea-field {
        color: var(--color-disabled-text);
        cursor: not-allowed;
      }

      :host(:is([disabled], :disabled)) .textarea-field::placeholder {
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

      :host(:is([disabled], :disabled)) .helper-text {
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
        text-align: end;
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
    `]}_formReset(){super._formReset(),this.state!==`focus`&&(this.state=this.value?`filled`:`default`)}_handleInput(e){if(e.stopPropagation(),this.disabled||this.readonly)return;let t=e.target,n=this.value,r=t.value;this.maxLength>0&&r.length>this.maxLength&&(r=r.slice(0,this.maxLength),t.value=r),this.value=r,this.dispatchEvent(new CustomEvent(`input`,{detail:{value:this.value,oldValue:n},bubbles:!0,composed:!0}))}_handleFocus(e){e.stopPropagation(),!this.disabled&&(this.state=`focus`,this.dispatchEvent(new CustomEvent(`focus`,{detail:{value:this.value},bubbles:!0,composed:!0})))}_handleBlur(e){e.stopPropagation(),!this.disabled&&(this.state=this.value?`filled`:`default`,this.dispatchEvent(new CustomEvent(`blur`,{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0})))}render(){return a`
      ${this.label?a`
            <div class="label-row">
              <span>${this.label}</span>
              ${this.required?a`<span class="required-indicator" aria-hidden="true"
                    >*</span
                  >`:n}
              ${this.showTooltip?a`
                    <mms-tooltip text="${this.tooltipText}">
                      <mms-icon
                        class="tooltip-icon"
                        name="info"
                        size="sm"
                        aria-label="${this.tooltipText||this.localize.term(`moreInformation`)}"
                      ></mms-icon>
                    </mms-tooltip>
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
          ?disabled="${this.disabled||this._fieldsetDisabled}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          aria-label="${this._ariaLabelValue||this.label||this.placeholder}"
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
    `}},f([c({type:String,reflect:!0})],V.prototype,`size`,void 0),f([c({type:String,reflect:!0})],V.prototype,`state`,void 0),f([c({type:Boolean,reflect:!0})],V.prototype,`disabled`,void 0),f([c({type:Boolean,reflect:!0})],V.prototype,`readonly`,void 0),f([c({type:String,reflect:!0})],V.prototype,`resize`,void 0),f([c({type:Number})],V.prototype,`rows`,null),f([c({type:String})],V.prototype,`label`,void 0),f([c({type:String})],V.prototype,`placeholder`,void 0),f([c({type:String,attribute:`helper-text`})],V.prototype,`helperText`,void 0),f([c({type:String,reflect:!0})],V.prototype,`name`,void 0),f([c({type:String})],V.prototype,`value`,void 0),f([c({type:String})],V.prototype,`autocomplete`,void 0),f([c({type:Boolean,reflect:!0})],V.prototype,`required`,void 0),f([c({type:Boolean,reflect:!0})],V.prototype,`error`,void 0),f([c({type:String,attribute:`error-text`})],V.prototype,`errorText`,void 0),f([c({type:Number,attribute:`max-length`})],V.prototype,`maxLength`,void 0),f([c({type:Boolean,attribute:`show-character-counter`})],V.prototype,`showCharacterCounter`,void 0),f([c({type:Boolean,reflect:!0,attribute:`show-tooltip`})],V.prototype,`showTooltip`,void 0),f([c({type:String,attribute:`tooltip-text`})],V.prototype,`tooltipText`,void 0),V=f([g(`mms-text-area`)],V)})),U=t({Overview:()=>G,PlaygroundStory:()=>K,__namedExportsOrder:()=>q,default:()=>W}),W,G,K,q,J=e((()=>{o(),S(),H(),D(),T(),L(),k(),W={title:`Forms/Text Area`,tags:[`!autodocs`]},G={name:`Overview`,render:()=>a`
    <div data-theme=${P} data-mode=${N()} style=${M}>

      <!-- Header -->
      <h1 style="${A.h1}">Text Area</h1>
      <p style="${A.body} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        A multi-line text input using the native &lt;textarea&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, character counting, and
        integrates with forms.
      </p>

      <hr style="${O.divider}" />

      <!-- Basic Usage -->
      <h2 style="${A.h2}">Basic usage</h2>
      <p style="${A.bodySm} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        Provide a label and placeholder. The text area fills its container width by default.
      </p>

      <div style="margin-bottom: ${F.subsection}; max-width: 400px;">
        <mms-text-area
          label="Comments"
          placeholder="Enter your comments..."
        ></mms-text-area>
      </div>

      <hr style="${O.divider}" />

      <!-- With Helper Text -->
      <h2 style="${A.h2}">With helper text</h2>
      <p style="${A.bodySm} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        Helper text provides additional guidance below the text area.
      </p>

      <div style="margin-bottom: ${F.subsection}; max-width: 400px;">
        <mms-text-area
          label="Reason for request"
          helper-text="Provide as much detail as possible."
          placeholder="Describe your reason..."
        ></mms-text-area>
      </div>

      <hr style="${O.divider}" />

      <!-- With Tooltip -->
      <h2 style="${A.h2}">With tooltip</h2>
      <p style="${A.bodySm} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        An info icon can be shown next to the label. <em>(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: ${F.subsection}; max-width: 400px;">
        <mms-text-area
          label="Additional notes"
          show-tooltip
          tooltip-text="Include any information relevant to your case."
          placeholder="Enter notes..."
        ></mms-text-area>
      </div>

      <hr style="${O.divider}" />

      <!-- Required Field -->
      <h2 style="${A.h2}">Required field</h2>
      <p style="${A.bodySm} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        The <code style="${A.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: ${F.subsection}; max-width: 400px;">
        <mms-text-area
          label="Description of issue"
          required
          placeholder="Describe the issue..."
        ></mms-text-area>
      </div>

      <hr style="${O.divider}" />

      <!-- Error State -->
      <h2 style="${A.h2}">Error state</h2>
      <p style="${A.bodySm} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        The <code style="${A.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: ${F.subsection}; max-width: 400px;">
        <mms-text-area
          label="Explanation"
          error
          error-text="Explanation is required and must be at least 20 characters."
          required
          placeholder="Enter explanation..."
        ></mms-text-area>
      </div>

      <hr style="${O.divider}" />

      <!-- Character Counter -->
      <h2 style="${A.h2}">Character counter</h2>
      <p style="${A.bodySm} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        Set <code style="${A.monoSm}">max-length</code> and <code style="${A.monoSm}">show-character-counter</code>
        to display remaining characters. Input is clipped at the limit.
      </p>

      <div style="margin-bottom: ${F.subsection}; max-width: 400px;">
        <mms-text-area
          label="Short summary"
          max-length="140"
          show-character-counter
          placeholder="Summarize in 140 characters or fewer..."
        ></mms-text-area>
      </div>

      <hr style="${O.divider}" />

      <!-- Readonly State -->
      <h2 style="${A.h2}">Readonly state</h2>
      <p style="${A.bodySm} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: ${F.subsection}; max-width: 400px;">
        <mms-text-area
          label="Submitted feedback"
          value="The enrollment process was straightforward and the support team was helpful."
          readonly
        ></mms-text-area>
      </div>

      <hr style="${O.divider}" />

      <!-- Disabled State -->
      <h2 style="${A.h2}">Disabled state</h2>
      <p style="${A.bodySm} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        Disabled prevents all interaction and dims the appearance.
      </p>

      <div style="margin-bottom: ${F.subsection}; max-width: 400px;">
        <mms-text-area
          label="Case notes"
          disabled
          placeholder="Not editable"
        ></mms-text-area>
      </div>

      <hr style="${O.divider}" />

      <!-- Rows and Resize -->
      <h2 style="${A.h2}">Rows and resize behavior</h2>
      <p style="${A.bodySm} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        The <code style="${A.monoSm}">rows</code> prop sets the initial visible height.
        <code style="${A.monoSm}">resize</code> controls whether the user can drag-resize vertically
        (<code style="${A.monoSm}">vertical</code>, default) or not at all (<code style="${A.monoSm}">none</code>).
      </p>

      <div style="display: flex; flex-direction: column; gap: ${F.content}; max-width: 400px; margin-bottom: ${F.subsection};">
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

      <hr style="${O.divider}" />

      <!-- Size Variants -->
      <h2 style="${A.h2}">Size variants</h2>
      <p style="${A.bodySm} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        Three sizes are available: <code style="${A.monoSm}">sm</code>, <code style="${A.monoSm}">md</code> (default), and <code style="${A.monoSm}">lg</code>.
        Consistent with <code style="${A.monoSm}">mms-text-field</code> sizing.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${F.content}; max-width: 400px; margin-bottom: ${F.subsection};">
        <mms-text-area label="Small" size="sm" placeholder="Small text area"></mms-text-area>
        <mms-text-area label="Medium (default)" size="md" placeholder="Medium text area"></mms-text-area>
        <mms-text-area label="Large" size="lg" placeholder="Large text area"></mms-text-area>
      </div>

      <hr style="${O.divider}" />

      <!-- Width Behavior -->
      <h2 style="${A.h2}">Width behavior</h2>
      <p style="${A.bodySm} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        Text area is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: ${F.content};">
        <p style="${A.caption} margin-bottom: ${F.content};"><strong>Full-width (default)</strong></p>
        <mms-text-area label="Full width text area" placeholder="Fills container..."></mms-text-area>
      </div>

      <div style="width: 240px; background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: ${F.subsection};">
        <p style="${A.caption} margin-bottom: var(--spacing-xs2);"><strong>Narrow container (240px)</strong></p>
        <p style="${A.caption} ${O.muted} margin-bottom: ${F.content};">Sidebars, filter drawers, compact dialogs</p>
        <mms-text-area label="Constrained" placeholder="Narrow..."></mms-text-area>
      </div>

      <hr style="${O.divider}" />

      <!-- Compact Density -->
      <h2 style="${A.h2}">Compact density</h2>
      <p style="${A.bodySm} ${O.muted} max-width: ${j}; margin-bottom: ${F.subsection};">
        Use <code style="${A.monoSm}">data-density="compact"</code> for reduced padding.
        Useful for footer/header contexts or dense UI.
      </p>

      <div style="display: flex; gap: ${F.subsection}; max-width: 700px; margin-bottom: ${F.subsection};">
        <div style="flex: 1;">
          <p style="${A.caption} margin-bottom: ${F.label};"><strong>Default</strong></p>
          <mms-text-area label="Comments" placeholder="Enter text..."></mms-text-area>
        </div>
        <div style="flex: 1;">
          <p style="${A.caption} margin-bottom: ${F.label};"><strong>Compact</strong></p>
          <mms-text-area label="Comments" data-density="compact" placeholder="Enter text..."></mms-text-area>
        </div>
      </div>

      <hr style="${O.divider}" />

      <!-- Accessibility -->
      <h2 style="${A.h2}">Accessibility</h2>

      <div style="margin-bottom: ${F.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Why native &lt;textarea&gt;?"
          message="A native multi-line input guarantees correct behavior across all assistive technologies with zero custom ARIA — the browser handles text editing, selection, line wrapping, and resize affordance natively."
        ></mms-inline-alert>
      </div>

      <h3 style="${A.h3}">WCAG 2.2 AA compliance</h3>
      ${I(E[`text-area`].rows)}

      <h3 style="${A.h3}">Screen reader behavior</h3>
      <ul style="${A.bodySm} ${O.muted} margin: 0 0 ${F.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${F.label};"><strong>Focus:</strong> Announces label, current value (or "blank"), and "text area"</li>
        <li style="margin-bottom: ${F.label};"><strong>Required:</strong> Announces "required" when <code style="${A.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: ${F.label};"><strong>Error:</strong> Immediately announces error message via <code style="${A.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: ${F.label};"><strong>Character counter:</strong> Announces remaining characters via <code style="${A.monoSm}">aria-live="polite"</code> as the user types</li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="${A.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${A.h3}">Keyboard navigation</h3>
      <table style="${O.table}">
        <thead>
          <tr>
            <th style="${O.th} width: 140px;">Key</th>
            <th style="${O.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${O.td}"><kbd style="${O.kbd}">Tab</kbd></td>
            <td style="${O.td}">Move focus into / out of the text area</td>
          </tr>
          <tr>
            <td style="${O.td}"><kbd style="${O.kbd}">Shift</kbd> + <kbd style="${O.kbd}">Tab</kbd></td>
            <td style="${O.td}">Move focus to the previous field</td>
          </tr>
          <tr>
            <td style="${O.td}">Type character(s)</td>
            <td style="${O.td}">Insert text at cursor position (native multi-line editing)</td>
          </tr>
          <tr>
            <td style="${O.td}"><kbd style="${O.kbd}">Enter</kbd></td>
            <td style="${O.td}">Insert a new line (does not submit a form)</td>
          </tr>
          <tr>
            <td style="${O.td}"><kbd style="${O.kbd}">↑</kbd> <kbd style="${O.kbd}">↓</kbd> <kbd style="${O.kbd}">←</kbd> <kbd style="${O.kbd}">→</kbd></td>
            <td style="${O.td}">Move cursor within the text (native browser behavior)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},K={name:`Playground`,tags:[`!dev`],args:{size:`md`,state:`default`,disabled:!1,readonly:!1,resize:`vertical`,rows:3,label:`Comments`,placeholder:`Enter your comments...`,helperText:``,name:`myTextArea`,value:``,autocomplete:``,required:!1,error:!1,errorText:`This field is required.`,maxLength:0,showCharacterCounter:!1,showTooltip:!1,tooltipText:`Additional guidance for this field`,theme:`maximus`,density:`default`},decorators:[e=>a`
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
      `],argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Text and padding size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`filled`],description:`Visual state (for documentation preview)`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction, dims appearance`,table:{category:`Visual`}},readonly:{name:`Readonly`,control:`boolean`,description:`Shows value but prevents changes`,table:{category:`Visual`}},resize:{name:`Resize`,control:`select`,options:[`vertical`,`none`],description:`Whether the text area can be drag-resized vertically`,table:{category:`Visual`}},rows:{name:`Rows`,control:{type:`number`,min:2,max:15,step:1},description:"Visible text rows (native `rows` attribute), clamped to 2–15",table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Label text displayed above the text area`,table:{category:`Content`}},placeholder:{name:`Placeholder`,control:`text`,description:`Placeholder shown when no value`,table:{category:`Content`}},helperText:{name:`Helper text`,control:`text`,description:`Supplementary guidance below the text area`,table:{category:`Content`}},name:{name:`Name`,control:`text`,description:"HTML `name` attribute — the key sent with form data on submit.",table:{category:`Form`}},value:{name:`Value`,control:`text`,description:`Current textarea value`,table:{category:`Form`}},autocomplete:{name:`Autocomplete`,control:`text`,description:"Browser autocomplete hint — any valid HTML `autocomplete` token (e.g. `street-address`, `name`). Enables WCAG 1.3.5 Identify Input Purpose.",table:{category:`Form`}},required:{name:`Required`,control:`boolean`,description:`Shows asterisk indicator on label`,table:{category:`Validation`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and message`,table:{category:`Validation`}},errorText:{name:`Error text`,control:`text`,description:`Error message when error is true`,table:{category:`Validation`}},maxLength:{name:`Max length`,control:`number`,description:`Character limit (0 = unlimited). Input is clipped at the limit.`,table:{category:`Validation`}},showCharacterCounter:{name:`Show character counter`,control:`boolean`,description:`Displays remaining characters (requires max-length > 0)`,table:{category:`Validation`}},showTooltip:{name:`Show tooltip`,control:`boolean`,description:`Show info icon next to label`,table:{category:`Tooltip`}},tooltipText:{name:`Tooltip text`,control:`text`,description:`Tooltip content (dialog coming soon)`,table:{category:`Tooltip`}},theme:{name:`Theme`,control:`select`,options:x,description:`Brand theme (affects typography)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.placeholder&&r.push(`placeholder="${n.placeholder}"`),n.value&&r.push(`value="${n.value}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.name&&r.push(`name="${n.name}"`),n.state&&n.state!=="default"&&r.push(`state="${n.state}"`),n.rows&&n.rows!==3&&r.push(`rows="${n.rows}"`),n.resize&&n.resize!==`vertical`&&r.push(`resize="${n.resize}"`),n.showTooltip&&r.push(`show-tooltip`),n.tooltipText&&n.showTooltip&&r.push(`tooltip-text="${n.tooltipText}"`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.maxLength&&r.push(`max-length="${n.maxLength}"`),n.showCharacterCounter&&r.push(`show-character-counter`),n.size!==`md`&&r.push(`size="${n.size}"`),n.disabled&&r.push(`disabled`),n.readonly&&r.push(`readonly`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-text-area\n  ${r.join(`
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
    `},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Text Area</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A multi-line text input using the native &lt;textarea&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, character counting, and
        integrates with forms.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Provide a label and placeholder. The text area fills its container width by default.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 400px;">
        <mms-text-area
          label="Comments"
          placeholder="Enter your comments..."
        ></mms-text-area>
      </div>

      <hr style="\${doc.divider}" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Helper text provides additional guidance below the text area.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 400px;">
        <mms-text-area
          label="Reason for request"
          helper-text="Provide as much detail as possible."
          placeholder="Describe your reason..."
        ></mms-text-area>
      </div>

      <hr style="\${doc.divider}" />

      <!-- With Tooltip -->
      <h2 style="\${t.h2}">With tooltip</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        An info icon can be shown next to the label. <em>(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 400px;">
        <mms-text-area
          label="Additional notes"
          show-tooltip
          tooltip-text="Include any information relevant to your case."
          placeholder="Enter notes..."
        ></mms-text-area>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Required Field -->
      <h2 style="\${t.h2}">Required field</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 400px;">
        <mms-text-area
          label="Description of issue"
          required
          placeholder="Describe the issue..."
        ></mms-text-area>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 400px;">
        <mms-text-area
          label="Explanation"
          error
          error-text="Explanation is required and must be at least 20 characters."
          required
          placeholder="Enter explanation..."
        ></mms-text-area>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Character Counter -->
      <h2 style="\${t.h2}">Character counter</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Set <code style="\${t.monoSm}">max-length</code> and <code style="\${t.monoSm}">show-character-counter</code>
        to display remaining characters. Input is clipped at the limit.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 400px;">
        <mms-text-area
          label="Short summary"
          max-length="140"
          show-character-counter
          placeholder="Summarize in 140 characters or fewer..."
        ></mms-text-area>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Readonly State -->
      <h2 style="\${t.h2}">Readonly state</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 400px;">
        <mms-text-area
          label="Submitted feedback"
          value="The enrollment process was straightforward and the support team was helpful."
          readonly
        ></mms-text-area>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Disabled State -->
      <h2 style="\${t.h2}">Disabled state</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Disabled prevents all interaction and dims the appearance.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 400px;">
        <mms-text-area
          label="Case notes"
          disabled
          placeholder="Not editable"
        ></mms-text-area>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Rows and Resize -->
      <h2 style="\${t.h2}">Rows and resize behavior</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">rows</code> prop sets the initial visible height.
        <code style="\${t.monoSm}">resize</code> controls whether the user can drag-resize vertically
        (<code style="\${t.monoSm}">vertical</code>, default) or not at all (<code style="\${t.monoSm}">none</code>).
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; max-width: 400px; margin-bottom: \${space.subsection};">
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

      <hr style="\${doc.divider}" />

      <!-- Size Variants -->
      <h2 style="\${t.h2}">Size variants</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Three sizes are available: <code style="\${t.monoSm}">sm</code>, <code style="\${t.monoSm}">md</code> (default), and <code style="\${t.monoSm}">lg</code>.
        Consistent with <code style="\${t.monoSm}">mms-text-field</code> sizing.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; max-width: 400px; margin-bottom: \${space.subsection};">
        <mms-text-area label="Small" size="sm" placeholder="Small text area"></mms-text-area>
        <mms-text-area label="Medium (default)" size="md" placeholder="Medium text area"></mms-text-area>
        <mms-text-area label="Large" size="lg" placeholder="Large text area"></mms-text-area>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Width Behavior -->
      <h2 style="\${t.h2}">Width behavior</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Text area is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: \${space.content};">
        <p style="\${t.caption} margin-bottom: \${space.content};"><strong>Full-width (default)</strong></p>
        <mms-text-area label="Full width text area" placeholder="Fills container..."></mms-text-area>
      </div>

      <div style="width: 240px; background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: \${space.subsection};">
        <p style="\${t.caption} margin-bottom: var(--spacing-xs2);"><strong>Narrow container (240px)</strong></p>
        <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">Sidebars, filter drawers, compact dialogs</p>
        <mms-text-area label="Constrained" placeholder="Narrow..."></mms-text-area>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Compact Density -->
      <h2 style="\${t.h2}">Compact density</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Use <code style="\${t.monoSm}">data-density="compact"</code> for reduced padding.
        Useful for footer/header contexts or dense UI.
      </p>

      <div style="display: flex; gap: \${space.subsection}; max-width: 700px; margin-bottom: \${space.subsection};">
        <div style="flex: 1;">
          <p style="\${t.caption} margin-bottom: \${space.label};"><strong>Default</strong></p>
          <mms-text-area label="Comments" placeholder="Enter text..."></mms-text-area>
        </div>
        <div style="flex: 1;">
          <p style="\${t.caption} margin-bottom: \${space.label};"><strong>Compact</strong></p>
          <mms-text-area label="Comments" data-density="compact" placeholder="Enter text..."></mms-text-area>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="margin-bottom: \${space.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=\${false}
          summary="Why native &lt;textarea&gt;?"
          message="A native multi-line input guarantees correct behavior across all assistive technologies with zero custom ARIA — the browser handles text editing, selection, line wrapping, and resize affordance natively."
        ></mms-inline-alert>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['text-area'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Focus:</strong> Announces label, current value (or "blank"), and "text area"</li>
        <li style="margin-bottom: \${space.label};"><strong>Required:</strong> Announces "required" when <code style="\${t.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: \${space.label};"><strong>Error:</strong> Immediately announces error message via <code style="\${t.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: \${space.label};"><strong>Character counter:</strong> Announces remaining characters via <code style="\${t.monoSm}">aria-live="polite"</code> as the user types</li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="\${t.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <table style="\${doc.table}">
        <thead>
          <tr>
            <th style="\${doc.th} width: 140px;">Key</th>
            <th style="\${doc.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Tab</kbd></td>
            <td style="\${doc.td}">Move focus into / out of the text area</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Shift</kbd> + <kbd style="\${doc.kbd}">Tab</kbd></td>
            <td style="\${doc.td}">Move focus to the previous field</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Type character(s)</td>
            <td style="\${doc.td}">Insert text at cursor position (native multi-line editing)</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd></td>
            <td style="\${doc.td}">Insert a new line (does not submit a form)</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">↑</kbd> <kbd style="\${doc.kbd}">↓</kbd> <kbd style="\${doc.kbd}">←</kbd> <kbd style="\${doc.kbd}">→</kbd></td>
            <td style="\${doc.td}">Move cursor within the text (native browser behavior)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
      options: BRAND_ORDER,
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
}`,...K.parameters?.docs?.source}}},q=[`Overview`,`PlaygroundStory`]}));J();export{G as Overview,K as PlaygroundStory,q as __namedExportsOrder,W as default,J as n,U as t};