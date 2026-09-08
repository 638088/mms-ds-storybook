import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-CBo78ikN.js";import{d as o,l as s,n as c,r as l,s as u,t as d}from"./decorate-Bygya6Tu.js";import{r as f,t as p}from"./focus.css-BrGuLyxh.js";import{t as m}from"./mms-icon.component-BJPQucU2.js";import{t as h}from"./mms-tooltip.component-D_aMEIgp.js";var g,_=e((()=>{a(),l(),f(),m(),h(),c(),g=class extends r{constructor(...e){super(...e),this.size=`md`,this.state=`default`,this.disabled=!1,this.readonly=!1,this.label=``,this.placeholder=``,this.helperText=``,this.prefixIcon=``,this.suffixIcon=``,this.clearButton=!1,this.mask=`none`,this.phoneLocale=`US`,this.currency=`USD`,this.measurementUnit=``,this.name=``,this.value=``,this.inputType=`text`,this.autocomplete=``,this.required=!1,this.error=!1,this.errorText=``,this.maxLength=0,this.showCharacterCounter=!1,this.showTooltip=!1,this.tooltipText=``,this._showPassword=!1}get iconSize(){switch(this.size){case`sm`:return`sm`;case`lg`:return`md`;default:return`sm`}}get effectiveInputType(){return this.mask===`protected-field`?this._showPassword?`text`:`password`:this.mask===`email`?`email`:this.mask===`phone-number`?`tel`:this.inputType}get effectiveAutocomplete(){if(this.autocomplete)return this.autocomplete;switch(this.mask){case`email`:return`email`;case`phone-number`:return`tel`;case`protected-field`:return`new-password`;default:return`off`}}get phoneCountryCode(){return this.mask===`phone-number`?{US:`+1`,MX:`+52`,UK:`+44`,FR:`+33`,SG:`+65`,HK:`+852`,AU:`+61`,TH:`+66`,MY:`+60`,GR:`+30`,IN:`+91`,JP:`+81`,KR:`+82`}[this.phoneLocale]||`+1`:``}get currencySymbol(){return this.mask===`currency`?{USD:`$`,EUR:`€`,GBP:`£`,JPY:`¥`,CNY:`¥`,AUD:`$`,CAD:`$`,CHF:`CHF`,HKD:`$`,SGD:`$`,INR:`₹`,KRW:`₩`,MXN:`$`}[this.currency]||`$`:``}get effectivePrefixIcon(){return this.mask===`email`?`envelope`:this.prefixIcon}get effectivePlaceholder(){if(this.placeholder)return this.placeholder;switch(this.mask){case`email`:return`name@example.com`;case`phone-number`:switch(this.phoneLocale){case`US`:return`(000) 000-0000`;case`MX`:return`000-000-0000`;case`UK`:return`00000-000000`;case`FR`:return`00-00-00-00-00`;case`SG`:return`0000-0000`;case`HK`:return`0000-0000`;case`AU`:return`0000-000-000`;case`TH`:return`000-000-0000`;case`MY`:return`00-0000-0000`;case`GR`:return`000-000-0000`;case`IN`:return`00000-00000`;case`JP`:return`000-0000-0000`;case`KR`:return`000-0000-0000`;default:return`(000) 000-0000`}case`currency`:return`0.00`;case`numeral`:case`measurement`:case`count`:return`0`;case`protected-field`:return`Enter password`;default:return``}}get showClearButton(){return this.clearButton&&this.value.length>0&&!this.disabled&&!this.readonly}get ariaDescribedBy(){let e=[];return this.helperText&&!this.error&&e.push(`helper-text`),this.error&&this.errorText&&e.push(`error-text`),this.showCharacterCounter&&this.maxLength>0&&e.push(`char-counter`),e.join(` `)||void 0}get charsRemaining(){return this.maxLength-this.value.length}static{this.styles=[p,n`
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
         INPUT CONTAINER — Holds input and icons
         ═══════════════════════════════════════════════════════════════════════ */
      .input-container {
        display: flex;
        align-items: center;
        position: relative;
        box-sizing: border-box;
        min-width: 120px;
        background: var(--color-surface-raised);
        border: 1px solid var(--color-neutral-7);
        border-radius: var(--radius-sm);
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }

      /* Hover state — inset shadow for visual distinction (no layout shift) */
      :host(:not([disabled]):not([readonly])) .input-container:hover,
      :host([state='hover']:not([disabled]):not([readonly])) .input-container {
        border-color: var(--color-border-interactive-hover);
        box-shadow: inset 0 0 0 1px var(--color-border-interactive-hover);
      }

      /* Focus state */
      :host([state='focus']:not([disabled])) .input-container,
      .input-container:focus-within {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
      }

      /* Filled state */
      :host([state='filled']:not([disabled]):not([error])) .input-container {
        border-color: var(--color-neutral-9);
      }

      /* Error state */
      :host([error]) .input-container {
        border-color: var(--color-input-border-error);
      }

      :host([error]:not([disabled]):not([readonly])) .input-container:hover,
      :host([error][state='hover']:not([disabled]):not([readonly])) .input-container {
        border-color: var(--color-input-border-error);
        box-shadow: inset 0 0 0 1px var(--color-input-border-error);
      }

      :host([error][state='focus']) .input-container,
      :host([error]) .input-container:focus-within {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
      }

      /* Disabled state */
      :host([disabled]) .input-container {
        background: var(--color-disabled-surface);
        border-color: var(--color-disabled-stroke);
        cursor: not-allowed;
      }

      /* Readonly state */
      :host([readonly]) .input-container {
        background: var(--color-neutral-2);
        border-color: var(--color-neutral-5);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         PREFIX — Icon or text before input
         ═══════════════════════════════════════════════════════════════════════ */
      .prefix-icon,
      .prefix-text {
        flex-shrink: 0;
        margin-left: var(--spacing-sm2);
        color: var(--color-text-subtle);
      }

      :host([disabled]) .prefix-icon,
      :host([disabled]) .prefix-text {
        color: var(--color-disabled-text);
      }

      .prefix-text {
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        white-space: nowrap;
      }

      :host([size='sm']) .prefix-text {
        font-size: var(--type-body-sm-size);
        line-height: var(--type-body-sm-line-height);
      }

      :host([size='lg']) .prefix-text {
        font-size: var(--type-body-lg-size);
        line-height: var(--type-body-lg-line-height);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         INPUT FIELD
         ═══════════════════════════════════════════════════════════════════════ */
      .input-field {
        flex: 1;
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
      }

      :host([size='sm']) .input-field {
        font-size: var(--type-body-sm-size);
        line-height: var(--type-body-sm-line-height);
        padding: var(--spacing-xs2) var(--spacing-sm1);
      }

      :host([size='lg']) .input-field {
        font-size: var(--type-body-lg-size);
        line-height: var(--type-body-lg-line-height);
        padding: var(--spacing-md1) var(--spacing-sm2);
      }

      /* Remove left padding when prefix present */
      .input-field.has-prefix {
        padding-left: var(--spacing-xs2);
      }

      /* Remove right padding when suffix present */
      .input-field.has-suffix {
        padding-right: var(--spacing-xs2);
      }

      /* Placeholder */
      .input-field::placeholder {
        color: var(--color-text-placeholder);
      }

      :host(:hover:not([disabled]):not([readonly])) .input-field::placeholder {
        color: var(--color-text-default);
      }

      :host([error]) .input-field::placeholder {
        color: var(--color-input-border-error);
        opacity: 0.7;
      }

      /* Disabled */
      :host([disabled]) .input-field {
        color: var(--color-disabled-text);
        cursor: not-allowed;
      }

      :host([disabled]) .input-field::placeholder {
        color: var(--color-disabled-text);
      }

      /* Readonly */
      :host([readonly]) .input-field {
        color: var(--color-text-subtle);
        cursor: default;
      }

      /* Right-align for numeric masks */
      :host([mask='numeral']) .input-field,
      :host([mask='currency']) .input-field,
      :host([mask='measurement']) .input-field,
      :host([mask='count']) .input-field {
        text-align: right;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         SUFFIX — Icons and buttons after input
         ═══════════════════════════════════════════════════════════════════════ */
      .suffix-icon {
        flex-shrink: 0;
        margin-right: var(--spacing-sm2);
        color: var(--color-text-subtle);
        cursor: pointer;
      }

      :host([disabled]) .suffix-icon {
        color: var(--color-disabled-text);
        cursor: not-allowed;
      }

      .suffix-text {
        flex-shrink: 0;
        margin-right: var(--spacing-sm2);
        color: var(--color-text-subtle);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        white-space: nowrap;
      }

      :host([size='sm']) .suffix-text {
        font-size: var(--type-body-sm-size);
        line-height: var(--type-body-sm-line-height);
      }

      :host([size='lg']) .suffix-text {
        font-size: var(--type-body-lg-size);
        line-height: var(--type-body-lg-line-height);
      }

      :host([disabled]) .suffix-text {
        color: var(--color-disabled-text);
      }

      .clear-button,
      .password-toggle {
        flex-shrink: 0;
        margin-right: var(--spacing-sm2);
        color: var(--color-text-subtle);
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* WCAG 2.2 target-size: 44x44px minimum touch target
         Padding expands touch area, negative margin preserves layout */
      .password-toggle {
        padding: 14px; /* (44 - 16) / 2 = 14px around 16px icon */
        margin: -14px;
        margin-right: calc(var(--spacing-sm2) - 14px); /* Preserve original right spacing */
      }

      :host([size='lg']) .password-toggle {
        padding: 12px; /* (44 - 20) / 2 = 12px around 20px icon */
        margin: -12px;
        margin-right: calc(var(--spacing-sm2) - 12px);
      }

      .clear-button:hover,
      .password-toggle:hover {
        color: var(--color-text-default);
      }

      :host([disabled]) .clear-button,
      :host([disabled]) .password-toggle {
        color: var(--color-disabled-text);
        cursor: not-allowed;
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

      :host([data-density='compact']) .input-field {
        padding: var(--spacing-xs2) var(--spacing-sm1);
      }

      :host([data-density='compact'][size='sm']) .input-field {
        padding: var(--spacing-xs1) var(--spacing-xs2);
      }

      :host([data-density='compact'][size='lg']) .input-field {
        padding: var(--spacing-sm1) var(--spacing-sm2);
      }
    `]}_handleInput(e){if(e.stopPropagation(),this.disabled||this.readonly)return;let t=e.target,n=this.value,r=t.value;r=this._formatValue(r),this.maxLength>0&&r.length>this.maxLength&&(r=r.slice(0,this.maxLength)),this.value=r,t.value!==r&&(t.value=r),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:this.value,oldValue:n},bubbles:!0,composed:!0}))}_handleFocus(e){e.stopPropagation(),!this.disabled&&(this.state=`focus`,this.dispatchEvent(new CustomEvent(`focus`,{detail:{value:this.value},bubbles:!0,composed:!0})))}_handleBlur(e){e.stopPropagation(),!this.disabled&&(this.state=this.value?`filled`:`default`,this.dispatchEvent(new CustomEvent(`blur`,{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0})))}_handleClear(){this.disabled||this.readonly||(this.value=``,this.state=`default`,this.dispatchEvent(new CustomEvent(`clear`,{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:``,oldValue:this.value},bubbles:!0,composed:!0})),(this.shadowRoot?.querySelector(`.input-field`))?.focus())}_handleTogglePassword(){this.disabled||this.readonly||(this._showPassword=!this._showPassword)}_formatValue(e){switch(this.mask){case`phone-number`:return this._formatPhoneNumber(e);case`numeral`:return this._formatNumeral(e);case`currency`:return this._formatCurrency(e);case`measurement`:case`count`:return this._formatInteger(e);default:return e}}_formatPhoneNumber(e){let t=e.replace(/\D/g,``);switch(this.phoneLocale){case`US`:return t.length<=3?t:t.length<=6?`(${t.slice(0,3)}) ${t.slice(3)}`:`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,10)}`;case`UK`:return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5,11)}`;case`FR`:return t.length<=2?t:t.length<=4?`${t.slice(0,2)}-${t.slice(2)}`:t.length<=6?`${t.slice(0,2)}-${t.slice(2,4)}-${t.slice(4)}`:t.length<=8?`${t.slice(0,2)}-${t.slice(2,4)}-${t.slice(4,6)}-${t.slice(6)}`:`${t.slice(0,2)}-${t.slice(2,4)}-${t.slice(4,6)}-${t.slice(6,8)}-${t.slice(8,10)}`;case`SG`:case`HK`:return t.length<=4?t:`${t.slice(0,4)}-${t.slice(4,8)}`;case`AU`:return t.length<=4?t:t.length<=7?`${t.slice(0,4)}-${t.slice(4)}`:`${t.slice(0,4)}-${t.slice(4,7)}-${t.slice(7,10)}`;case`IN`:return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5,10)}`;case`JP`:case`KR`:return t.length<=3?t:t.length<=7?`${t.slice(0,3)}-${t.slice(3)}`:`${t.slice(0,3)}-${t.slice(3,7)}-${t.slice(7,11)}`;default:return t.length<=3?t:t.length<=6?`${t.slice(0,3)}-${t.slice(3)}`:`${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6,10)}`}}_formatNumeral(e){let t=e.replace(/[^\d.]/g,``).split(`.`),n=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,`,`);return t[1]===void 0?n:`${n}.${t[1]}`}_formatCurrency(e){let t=e.replace(/[^\d.]/g,``);if(!t)return``;let n=t.split(`.`),r=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,`,`),i=n[1];return i===void 0?r:(i=i.slice(0,2),`${r}.${i}`)}_formatInteger(e){let t=e.replace(/\D/g,``);return t?t.replace(/\B(?=(\d{3})+(?!\d))/g,`,`):``}render(){let e=this.effectivePrefixIcon||this.phoneCountryCode||this.currencySymbol||this.mask===`count`,n=this.suffixIcon||this.measurementUnit||this.mask===`protected-field`||this.showClearButton;return i`
      ${this.label?i`
            <div class="label-row">
              <span>${this.label}</span>
              ${this.required?i`<span class="required-indicator" aria-hidden="true"
                    >*</span
                  >`:t}
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

      <div class="input-container">
        ${this.effectivePrefixIcon?i`
              <mms-icon
                class="prefix-icon"
                name="${this.effectivePrefixIcon}"
                size="${this.iconSize}"
              ></mms-icon>
            `:t}
        ${this.phoneCountryCode?i`<span class="prefix-text">${this.phoneCountryCode}</span>`:t}
        ${this.currencySymbol?i`<span class="prefix-text">${this.currencySymbol}</span>`:t}
        ${this.mask===`count`?i`<span class="prefix-text">#</span>`:t}

        <input
          class="input-field ${e?`has-prefix`:``} ${n?`has-suffix`:``}"
          type="${this.effectiveInputType}"
          .value="${this.value}"
          placeholder="${this.effectivePlaceholder}"
          name="${this.name||t}"
          autocomplete="${this.effectiveAutocomplete}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          aria-label="${this.label||this.effectivePlaceholder}"
          aria-invalid="${this.error}"
          aria-describedby="${this.ariaDescribedBy||t}"
          maxlength="${this.maxLength>0?this.maxLength:t}"
          @input="${this._handleInput}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
        />

        ${this.measurementUnit?i`<span class="suffix-text">${this.measurementUnit}</span>`:t}
        ${this.suffixIcon&&this.mask!==`protected-field`?i`
              <mms-icon
                class="suffix-icon"
                name="${this.suffixIcon}"
                size="${this.iconSize}"
              ></mms-icon>
            `:t}
        ${this.mask===`protected-field`?i`
              <button
                type="button"
                class="password-toggle"
                @click="${this._handleTogglePassword}"
                aria-label="${this._showPassword?`Hide password`:`Show password`}"
                ?disabled="${this.disabled}"
              >
                <mms-icon
                  name="${this._showPassword?`eye`:`eye-closed`}"
                  size="${this.iconSize}"
                ></mms-icon>
              </button>
            `:t}
        ${this.showClearButton?i`
              <button
                type="button"
                class="clear-button"
                @click="${this._handleClear}"
                aria-label="Clear input"
              >
                <mms-icon name="x" size="${this.iconSize}"></mms-icon>
              </button>
            `:t}
      </div>

      ${this.showCharacterCounter&&this.maxLength>0?i`
            <div
              id="char-counter"
              class="char-counter ${this.charsRemaining<=10?`warning`:``} ${this.charsRemaining<0?`error`:``}"
              aria-live="polite"
            >
              ${this.charsRemaining} characters remaining
            </div>
          `:t}
      ${this.helperText&&!this.error&&!this.disabled?i`<span id="helper-text" class="helper-text"
            >${this.helperText}</span
          >`:t}
      ${this.error&&this.errorText&&!this.disabled?i`
            <span id="error-text" class="error-text" role="alert">
              <mms-icon class="error-icon" name="warning-circle" size="16"></mms-icon>
              ${this.errorText}
            </span>
          `:t}
    `}},d([s({type:String,reflect:!0})],g.prototype,`size`,void 0),d([s({type:String,reflect:!0})],g.prototype,`state`,void 0),d([s({type:Boolean,reflect:!0})],g.prototype,`disabled`,void 0),d([s({type:Boolean,reflect:!0})],g.prototype,`readonly`,void 0),d([s({type:String})],g.prototype,`label`,void 0),d([s({type:String})],g.prototype,`placeholder`,void 0),d([s({type:String,attribute:`helper-text`})],g.prototype,`helperText`,void 0),d([s({type:String,attribute:`prefix-icon`})],g.prototype,`prefixIcon`,void 0),d([s({type:String,attribute:`suffix-icon`})],g.prototype,`suffixIcon`,void 0),d([s({type:Boolean,reflect:!0,attribute:`clear-button`})],g.prototype,`clearButton`,void 0),d([s({type:String,reflect:!0})],g.prototype,`mask`,void 0),d([s({type:String,attribute:`phone-locale`})],g.prototype,`phoneLocale`,void 0),d([s({type:String})],g.prototype,`currency`,void 0),d([s({type:String,attribute:`measurement-unit`})],g.prototype,`measurementUnit`,void 0),d([s({type:String})],g.prototype,`name`,void 0),d([s({type:String,reflect:!0})],g.prototype,`value`,void 0),d([s({type:String,attribute:`type`})],g.prototype,`inputType`,void 0),d([s({type:String})],g.prototype,`autocomplete`,void 0),d([s({type:Boolean,reflect:!0})],g.prototype,`required`,void 0),d([s({type:Boolean,reflect:!0})],g.prototype,`error`,void 0),d([s({type:String,attribute:`error-text`})],g.prototype,`errorText`,void 0),d([s({type:Number,attribute:`max-length`})],g.prototype,`maxLength`,void 0),d([s({type:Boolean,attribute:`show-character-counter`})],g.prototype,`showCharacterCounter`,void 0),d([s({type:Boolean,reflect:!0,attribute:`show-tooltip`})],g.prototype,`showTooltip`,void 0),d([s({type:String,attribute:`tooltip-text`})],g.prototype,`tooltipText`,void 0),d([u()],g.prototype,`_showPassword`,void 0),g=d([o(`mms-text-field`)],g)}));export{_ as t};