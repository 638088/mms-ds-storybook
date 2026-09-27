import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-CBo78ikN.js";import{d as o,l as s,n as c,r as l,t as u}from"./decorate-Bygya6Tu.js";import{r as d,t as f}from"./focus.css-BrGuLyxh.js";import{t as p}from"./mms-icon.component-BJPQucU2.js";import{t as m}from"./mms-tooltip.component-D_aMEIgp.js";var h,g=e((()=>{a(),l(),d(),p(),m(),c(),h=class extends r{constructor(...e){super(...e),this.label=``,this.value=``,this.placeholder=`Select an option`,this.options=[],this.name=``,this.state=`default`,this.disabled=!1,this.readonly=!1,this.error=!1,this.errorText=``,this.required=!1,this.helperText=``,this.showTooltip=!1,this.tooltipText=``,this.size=`md`}get iconSize(){switch(this.size){case`sm`:return`sm`;case`lg`:return`md`;default:return`sm`}}static{this.styles=[f,n`
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
    `]}get parsedOptions(){if(Array.isArray(this.options))return this.options;if(typeof this.options==`string`)try{let e=JSON.parse(this.options);return Array.isArray(e)?e:[]}catch{return[]}return[]}get ariaDescribedBy(){let e=[];return this.helperText&&e.push(`helper-text`),this.error&&this.errorText&&e.push(`error-text`),e.join(` `)||void 0}willUpdate(e){!e.has(`value`)||this.state===`hover`||this.state===`focus`||!this.hasUpdated&&this.hasAttribute(`state`)||(this.state=this.value?`filled`:`default`)}_handleChange(e){if(this.disabled||this.readonly)return;let t=e.target,n=this.value;this.value=t.value,this.state=this.value?`filled`:`default`,this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value,oldValue:n},bubbles:!0,composed:!0}))}_stopNativeInput(e){e.stopPropagation()}_handleFocus(e){e.stopPropagation(),!this.disabled&&(this.state=`focus`,this.dispatchEvent(new CustomEvent(`focus`,{detail:{value:this.value},bubbles:!0,composed:!0})))}_handleBlur(e){e.stopPropagation(),!this.disabled&&(this.state=this.value?`filled`:`default`,this.dispatchEvent(new CustomEvent(`blur`,{detail:{value:this.value},bubbles:!0,composed:!0})))}_handleMouseEnter(){this.disabled||this.state===`focus`||this.readonly||(this.state=`hover`)}_handleMouseLeave(){this.disabled||this.state===`focus`||(this.state=this.value?`filled`:`default`)}render(){return i`
      ${this.label?i`
            <div class="label-row">
              <span>${this.label}</span>
              ${this.required?i`<span class="required-indicator" aria-hidden="true">*</span>`:t}
              ${this.showTooltip?i`
                    <mms-tooltip text="${this.tooltipText}">
                      <mms-icon
                        class="tooltip-icon"
                        name="info"
                        size="sm"
                        aria-label="${this.tooltipText||`More information`}"
                      ></mms-icon>
                    </mms-tooltip>
                  `:t}
            </div>
          `:t}

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
          aria-describedby=${this.ariaDescribedBy||t}
          aria-required=${this.required?`true`:`false`}
          @change=${this._handleChange}
          @input=${this._stopNativeInput}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
        >
          <option value="" ?selected=${!this.value} disabled hidden>
            ${this.placeholder}
          </option>
          ${this.parsedOptions.map(e=>i`
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

      ${this.helperText&&!this.error&&!this.disabled?i`<span id="helper-text" class="helper-text">${this.helperText}</span>`:t}

      ${this.error&&this.errorText&&!this.disabled?i`
            <span id="error-text" class="error-row" role="alert">
              <mms-icon class="error-icon" name="warning-circle" size="16"></mms-icon>
              ${this.errorText}
            </span>
          `:t}
    `}},u([s({type:String})],h.prototype,`label`,void 0),u([s({type:String,reflect:!0})],h.prototype,`value`,void 0),u([s({type:String})],h.prototype,`placeholder`,void 0),u([s({type:Array})],h.prototype,`options`,void 0),u([s({type:String})],h.prototype,`name`,void 0),u([s({type:String,reflect:!0})],h.prototype,`state`,void 0),u([s({type:Boolean,reflect:!0})],h.prototype,`disabled`,void 0),u([s({type:Boolean,reflect:!0})],h.prototype,`readonly`,void 0),u([s({type:Boolean,reflect:!0})],h.prototype,`error`,void 0),u([s({type:String,attribute:`error-text`})],h.prototype,`errorText`,void 0),u([s({type:Boolean,reflect:!0})],h.prototype,`required`,void 0),u([s({type:String,attribute:`helper-text`})],h.prototype,`helperText`,void 0),u([s({type:Boolean,reflect:!0,attribute:`show-tooltip`})],h.prototype,`showTooltip`,void 0),u([s({type:String,attribute:`tooltip-text`})],h.prototype,`tooltipText`,void 0),u([s({type:String,reflect:!0})],h.prototype,`size`,void 0),h=u([o(`mms-select`)],h)}));export{g as t};