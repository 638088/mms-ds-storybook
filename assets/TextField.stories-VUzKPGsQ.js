import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,n as r,p as i,s as a,t as o}from"./lit-aQ4dERgF.js";import{a as s,d as c,i as l,l as u,n as d,r as f,s as p,t as m}from"./decorate-ClfqJe3w.js";import{t as h}from"./mms-icon.component-zkSegWpV.js";var g,_=e((()=>{o(),s(),l(),h(),d(),g=class extends r{constructor(...e){super(...e),this.size=`md`,this.state=`default`,this.disabled=!1,this.readonly=!1,this.label=``,this.placeholder=``,this.helperText=``,this.prefixIcon=``,this.suffixIcon=``,this.clearButton=!1,this.mask=`none`,this.phoneLocale=`US`,this.currency=`USD`,this.measurementUnit=``,this.name=``,this.value=``,this.inputType=`text`,this.autocomplete=``,this.required=!1,this.error=!1,this.errorText=``,this.maxLength=0,this.showCharacterCounter=!1,this.showTooltip=!1,this.tooltipText=``,this._showPassword=!1}get iconSize(){switch(this.size){case`sm`:return`sm`;case`lg`:return`md`;default:return`sm`}}get effectiveInputType(){return this.mask===`protected-field`?this._showPassword?`text`:`password`:this.mask===`email`?`email`:this.mask===`phone-number`?`tel`:this.inputType}get effectiveAutocomplete(){if(this.autocomplete)return this.autocomplete;switch(this.mask){case`email`:return`email`;case`phone-number`:return`tel`;case`protected-field`:return`new-password`;default:return`off`}}get phoneCountryCode(){return this.mask===`phone-number`?{US:`+1`,MX:`+52`,UK:`+44`,FR:`+33`,SG:`+65`,HK:`+852`,AU:`+61`,TH:`+66`,MY:`+60`,GR:`+30`,IN:`+91`,JP:`+81`,KR:`+82`}[this.phoneLocale]||`+1`:``}get currencySymbol(){return this.mask===`currency`?{USD:`$`,EUR:`€`,GBP:`£`,JPY:`¥`,CNY:`¥`,AUD:`$`,CAD:`$`,CHF:`CHF`,HKD:`$`,SGD:`$`,INR:`₹`,KRW:`₩`,MXN:`$`}[this.currency]||`$`:``}get effectivePrefixIcon(){return this.mask===`email`?`envelope`:this.prefixIcon}get effectivePlaceholder(){if(this.placeholder)return this.placeholder;switch(this.mask){case`email`:return`name@example.com`;case`phone-number`:switch(this.phoneLocale){case`US`:return`(000) 000-0000`;case`MX`:return`000-000-0000`;case`UK`:return`00000-000000`;case`FR`:return`00-00-00-00-00`;case`SG`:return`0000-0000`;case`HK`:return`0000-0000`;case`AU`:return`0000-000-000`;case`TH`:return`000-000-0000`;case`MY`:return`00-0000-0000`;case`GR`:return`000-000-0000`;case`IN`:return`00000-00000`;case`JP`:return`000-0000-0000`;case`KR`:return`000-0000-0000`;default:return`(000) 000-0000`}case`currency`:return`0.00`;case`numeral`:case`measurement`:case`count`:return`0`;case`protected-field`:return`Enter password`;default:return``}}get showClearButton(){return this.clearButton&&this.value.length>0&&!this.disabled&&!this.readonly}get ariaDescribedBy(){let e=[];return this.helperText&&!this.error&&e.push(`helper-text`),this.error&&this.errorText&&e.push(`error-text`),this.showCharacterCounter&&this.maxLength>0&&e.push(`char-counter`),e.join(` `)||void 0}get charsRemaining(){return this.maxLength-this.value.length}static{this.styles=[f,i`
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
    `]}_handleInput(e){if(this.disabled||this.readonly)return;let t=e.target,n=this.value,r=t.value;r=this._formatValue(r),this.maxLength>0&&r.length>this.maxLength&&(r=r.slice(0,this.maxLength)),this.value=r,t.value!==r&&(t.value=r),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:this.value,oldValue:n},bubbles:!0,composed:!0}))}_handleFocus(){this.disabled||(this.state=`focus`,this.dispatchEvent(new CustomEvent(`focus`,{detail:{value:this.value},bubbles:!0,composed:!0})))}_handleBlur(){this.disabled||(this.state=this.value?`filled`:`default`,this.dispatchEvent(new CustomEvent(`blur`,{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0})))}_handleClear(){this.disabled||this.readonly||(this.value=``,this.state=`default`,this.dispatchEvent(new CustomEvent(`clear`,{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:``,oldValue:this.value},bubbles:!0,composed:!0})),(this.shadowRoot?.querySelector(`.input-field`))?.focus())}_handleTogglePassword(){this.disabled||this.readonly||(this._showPassword=!this._showPassword)}_formatValue(e){switch(this.mask){case`phone-number`:return this._formatPhoneNumber(e);case`numeral`:return this._formatNumeral(e);case`currency`:return this._formatCurrency(e);case`measurement`:case`count`:return this._formatInteger(e);default:return e}}_formatPhoneNumber(e){let t=e.replace(/\D/g,``);switch(this.phoneLocale){case`US`:return t.length<=3?t:t.length<=6?`(${t.slice(0,3)}) ${t.slice(3)}`:`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,10)}`;case`UK`:return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5,11)}`;case`FR`:return t.length<=2?t:t.length<=4?`${t.slice(0,2)}-${t.slice(2)}`:t.length<=6?`${t.slice(0,2)}-${t.slice(2,4)}-${t.slice(4)}`:t.length<=8?`${t.slice(0,2)}-${t.slice(2,4)}-${t.slice(4,6)}-${t.slice(6)}`:`${t.slice(0,2)}-${t.slice(2,4)}-${t.slice(4,6)}-${t.slice(6,8)}-${t.slice(8,10)}`;case`SG`:case`HK`:return t.length<=4?t:`${t.slice(0,4)}-${t.slice(4,8)}`;case`AU`:return t.length<=4?t:t.length<=7?`${t.slice(0,4)}-${t.slice(4)}`:`${t.slice(0,4)}-${t.slice(4,7)}-${t.slice(7,10)}`;case`IN`:return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5,10)}`;case`JP`:case`KR`:return t.length<=3?t:t.length<=7?`${t.slice(0,3)}-${t.slice(3)}`:`${t.slice(0,3)}-${t.slice(3,7)}-${t.slice(7,11)}`;default:return t.length<=3?t:t.length<=6?`${t.slice(0,3)}-${t.slice(3)}`:`${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6,10)}`}}_formatNumeral(e){let t=e.replace(/[^\d.]/g,``).split(`.`),n=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,`,`);return t[1]===void 0?n:`${n}.${t[1]}`}_formatCurrency(e){let t=e.replace(/[^\d.]/g,``);if(!t)return``;let n=t.split(`.`),r=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,`,`),i=n[1];return i===void 0?r:(i=i.slice(0,2),`${r}.${i}`)}_formatInteger(e){let t=e.replace(/\D/g,``);return t?t.replace(/\B(?=(\d{3})+(?!\d))/g,`,`):``}render(){let e=this.effectivePrefixIcon||this.phoneCountryCode||this.currencySymbol||this.mask===`count`,t=this.suffixIcon||this.measurementUnit||this.mask===`protected-field`||this.showClearButton;return a`
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

      <div class="input-container">
        ${this.effectivePrefixIcon?a`
              <mms-icon
                class="prefix-icon"
                name="${this.effectivePrefixIcon}"
                size="${this.iconSize}"
              ></mms-icon>
            `:n}
        ${this.phoneCountryCode?a`<span class="prefix-text">${this.phoneCountryCode}</span>`:n}
        ${this.currencySymbol?a`<span class="prefix-text">${this.currencySymbol}</span>`:n}
        ${this.mask===`count`?a`<span class="prefix-text">#</span>`:n}

        <input
          class="input-field ${e?`has-prefix`:``} ${t?`has-suffix`:``}"
          type="${this.effectiveInputType}"
          .value="${this.value}"
          placeholder="${this.effectivePlaceholder}"
          name="${this.name||n}"
          autocomplete="${this.effectiveAutocomplete}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          aria-label="${this.label||this.effectivePlaceholder}"
          aria-invalid="${this.error}"
          aria-describedby="${this.ariaDescribedBy||n}"
          maxlength="${this.maxLength>0?this.maxLength:n}"
          @input="${this._handleInput}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
        />

        ${this.measurementUnit?a`<span class="suffix-text">${this.measurementUnit}</span>`:n}
        ${this.suffixIcon&&this.mask!==`protected-field`?a`
              <mms-icon
                class="suffix-icon"
                name="${this.suffixIcon}"
                size="${this.iconSize}"
              ></mms-icon>
            `:n}
        ${this.mask===`protected-field`?a`
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
            `:n}
        ${this.showClearButton?a`
              <button
                type="button"
                class="clear-button"
                @click="${this._handleClear}"
                aria-label="Clear input"
              >
                <mms-icon name="x" size="${this.iconSize}"></mms-icon>
              </button>
            `:n}
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
    `}},m([u({type:String,reflect:!0})],g.prototype,`size`,void 0),m([u({type:String,reflect:!0})],g.prototype,`state`,void 0),m([u({type:Boolean,reflect:!0})],g.prototype,`disabled`,void 0),m([u({type:Boolean,reflect:!0})],g.prototype,`readonly`,void 0),m([u({type:String})],g.prototype,`label`,void 0),m([u({type:String})],g.prototype,`placeholder`,void 0),m([u({type:String,attribute:`helper-text`})],g.prototype,`helperText`,void 0),m([u({type:String,attribute:`prefix-icon`})],g.prototype,`prefixIcon`,void 0),m([u({type:String,attribute:`suffix-icon`})],g.prototype,`suffixIcon`,void 0),m([u({type:Boolean,reflect:!0,attribute:`clear-button`})],g.prototype,`clearButton`,void 0),m([u({type:String,reflect:!0})],g.prototype,`mask`,void 0),m([u({type:String,attribute:`phone-locale`})],g.prototype,`phoneLocale`,void 0),m([u({type:String})],g.prototype,`currency`,void 0),m([u({type:String,attribute:`measurement-unit`})],g.prototype,`measurementUnit`,void 0),m([u({type:String})],g.prototype,`name`,void 0),m([u({type:String,reflect:!0})],g.prototype,`value`,void 0),m([u({type:String,attribute:`type`})],g.prototype,`inputType`,void 0),m([u({type:String})],g.prototype,`autocomplete`,void 0),m([u({type:Boolean,reflect:!0})],g.prototype,`required`,void 0),m([u({type:Boolean,reflect:!0})],g.prototype,`error`,void 0),m([u({type:String,attribute:`error-text`})],g.prototype,`errorText`,void 0),m([u({type:Number,attribute:`max-length`})],g.prototype,`maxLength`,void 0),m([u({type:Boolean,attribute:`show-character-counter`})],g.prototype,`showCharacterCounter`,void 0),m([u({type:Boolean,reflect:!0,attribute:`show-tooltip`})],g.prototype,`showTooltip`,void 0),m([u({type:String,attribute:`tooltip-text`})],g.prototype,`tooltipText`,void 0),m([p()],g.prototype,`_showPassword`,void 0),g=m([c(`mms-text-field`)],g)})),v=t({Overview:()=>w,PlaygroundStory:()=>T,__namedExportsOrder:()=>E,default:()=>y}),y,b,x,S,C,w,T,E,D=e((()=>{o(),_(),y={title:`Forms/Text Field`,tags:[`!autodocs`]},b={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},x=`680px`,S=`960px`,C=`.at.bank.barcode.bell.briefcase.buildings.calendar.camera.check.clock.credit-card.download.envelope.eye.eye-closed.file.folder.funnel.gear.globe.hash.heart.identification-badge.identification-card.image.info.key.link.lock.magnifying-glass.map-pin.minus.pencil.percent.phone.plus.qr-code.question.shield.sliders.star.tag.trash.upload.user.user-circle.warning.wrench`.split(`.`),w={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${S}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${b.h1}">Text Field</h1>
      <p style="${b.body} opacity: 0.85; max-width: ${x}; margin-bottom: 2rem;">
        A single-line text input using the native &lt;input&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, masks, and integrates with forms.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${b.h2}">Basic usage</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Provide a label and optional placeholder. The text field fills its container width by default.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Full name"
          placeholder="Enter your full name"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="${b.h2}">With helper text</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the input.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Email address"
          placeholder="you@example.com"
          helper-text="We'll never share your email with anyone."
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Field -->
      <h2 style="${b.h2}">Required field</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        The <code style="${b.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Social Security Number"
          placeholder="XXX-XX-XXXX"
          required
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="${b.h2}">Error state</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        The <code style="${b.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Email address"
          value="invalid-email"
          error
          error-text="Please enter a valid email address."
          required
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Readonly State -->
      <h2 style="${b.h2}">Readonly state</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Case number"
          value="MC-2026-001234"
          readonly
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled State -->
      <h2 style="${b.h2}">Disabled state</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Disabled prevents any interaction and dims the appearance.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Account ID"
          value="ACC-99999"
          disabled
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="${b.h2}">With tooltip</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Date of birth"
          placeholder="MM/DD/YYYY"
          show-tooltip
          tooltip-text="Your date of birth is used to verify your identity."
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Clear Button -->
      <h2 style="${b.h2}">Clear button</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        The <code style="${b.monoSm}">clear-button</code> prop shows a clear icon when the field has a value.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Search"
          placeholder="Search..."
          value="Medicaid enrollment"
          clear-button
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Character Counter -->
      <h2 style="${b.h2}">Character counter</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Use <code style="${b.monoSm}">show-character-counter</code> with <code style="${b.monoSm}">max-length</code> to show remaining characters.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Notes"
          placeholder="Add a note..."
          value="This is a sample note"
          show-character-counter
          max-length="100"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="${b.h2}">Sizes</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Three sizes available: <code style="${b.monoSm}">sm</code>, <code style="${b.monoSm}">md</code> (default), and <code style="${b.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field label="Small" placeholder="Size sm" size="sm"></mms-text-field>
        <mms-text-field label="Medium" placeholder="Size md" size="md"></mms-text-field>
        <mms-text-field label="Large" placeholder="Size lg" size="lg"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           MASKS
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${b.h2}">Email mask</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Shows an email icon prefix and sets <code style="${b.monoSm}">type="email"</code> for mobile keyboards.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Email"
          mask="email"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${b.h2}">Phone number mask</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Shows country code prefix and auto-formats the number based on locale.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <mms-text-field label="US Phone" mask="phone-number" phone-locale="US"></mms-text-field>
        <mms-text-field label="UK Phone" mask="phone-number" phone-locale="UK"></mms-text-field>
        <mms-text-field label="France Phone" mask="phone-number" phone-locale="FR"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${b.h2}">Currency mask</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Shows currency symbol prefix, right-aligns text, and formats with comma separators.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <mms-text-field label="USD Amount" mask="currency" currency="USD"></mms-text-field>
        <mms-text-field label="EUR Amount" mask="currency" currency="EUR"></mms-text-field>
        <mms-text-field label="GBP Amount" mask="currency" currency="GBP"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${b.h2}">Protected field (password)</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Shows password toggle icon. Click to reveal/hide the password.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Password"
          mask="protected-field"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           ICONS
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${b.h2}">Icons</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Use <code style="${b.monoSm}">prefix-icon</code> and <code style="${b.monoSm}">suffix-icon</code> 
        to add visual context. Icons are from the system icon library.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <mms-text-field 
          label="Search"
          placeholder="Search..."
          prefix-icon="magnifying-glass"
        ></mms-text-field>
        <mms-text-field 
          label="Username"
          placeholder="Enter username"
          prefix-icon="user"
        ></mms-text-field>
        <mms-text-field 
          label="Website"
          placeholder="https://example.com"
          prefix-icon="globe"
          suffix-icon="link"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           WIDTH BEHAVIOR
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${b.h2}">Width behavior</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Text Field is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <p style="${b.caption} margin-bottom: 1rem;"><strong>Full-width (default)</strong></p>
        <mms-text-field 
          label="Full width input"
          placeholder="Fills container"
        ></mms-text-field>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="${b.caption} margin-bottom: 1rem;"><strong>Grid column 1</strong></p>
          <mms-text-field 
            label="First name"
            placeholder="Enter first name"
          ></mms-text-field>
        </div>
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="${b.caption} margin-bottom: 1rem;"><strong>Grid column 2</strong></p>
          <mms-text-field 
            label="Last name"
            placeholder="Enter last name"
          ></mms-text-field>
        </div>
      </div>

      <div style="width: 200px; background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <p style="${b.caption} margin-bottom: 0.25rem;"><strong>Narrow container (200px)</strong></p>
        <p style="${b.caption} opacity: 0.7; margin-bottom: 1rem;">Sidebars, filter drawers, compact dialogs</p>
        <mms-text-field 
          label="Zip code"
          placeholder="12345"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           DENSITY
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${b.h2}">Compact density</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Use <code style="${b.monoSm}">data-density="compact"</code> for reduced padding in data-dense interfaces.
      </p>

      <div data-density="compact" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field label="First name" placeholder="Enter first name" data-density="compact"></mms-text-field>
        <mms-text-field label="Last name" placeholder="Enter last name" data-density="compact"></mms-text-field>
        <mms-text-field label="Email" placeholder="Enter email" data-density="compact"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${b.h2}">Accessibility</h2>
      
      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${b.bodySm} margin: 0;">
          <strong>Why native &lt;input&gt;?</strong> Custom text input implementations require extensive ARIA wiring and 
          often fail edge cases with screen readers. Native &lt;input&gt; guarantees correct behavior across all assistive technologies 
          with zero custom ARIA — the browser handles announcements, focus, and keyboard navigation.
        </p>
      </div>

      <h3 style="${b.h3}">WCAG 2.2 AA Compliance</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Criterion</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Requirement</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Implementation</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>1.3.1</strong> Info & Relationships</td>
            <td style="padding: 0.5rem 0.75rem;">Programmatic label association</td>
            <td style="padding: 0.5rem 0.75rem;">Visible label linked via <code style="${b.monoSm}">aria-labelledby</code></td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>1.4.11</strong> Non-text Contrast</td>
            <td style="padding: 0.5rem 0.75rem;">3:1 for UI components</td>
            <td style="padding: 0.5rem 0.75rem;">Border meets 3.3:1 against surface background</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.4.7</strong> Focus Visible</td>
            <td style="padding: 0.5rem 0.75rem;">Visible focus indicator</td>
            <td style="padding: 0.5rem 0.75rem;">2px focus ring (1px border + 1px box-shadow)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.4.11</strong> Focus Not Obscured <span style="background: rgba(34, 197, 94, 0.15); padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">2.2</span></td>
            <td style="padding: 0.5rem 0.75rem;">Focus indicator not hidden</td>
            <td style="padding: 0.5rem 0.75rem;">No overlapping elements obscure focus ring</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.4.13</strong> Focus Appearance <span style="background: rgba(34, 197, 94, 0.15); padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">2.2</span></td>
            <td style="padding: 0.5rem 0.75rem;">≥2px thick, 3:1 contrast</td>
            <td style="padding: 0.5rem 0.75rem;">#386CF7 focus ring: 4.4:1 vs white, 4.1:1 vs dark surface</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.5.8</strong> Target Size <span style="background: rgba(34, 197, 94, 0.15); padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">2.2</span></td>
            <td style="padding: 0.5rem 0.75rem;">≥24×24 CSS pixels</td>
            <td style="padding: 0.5rem 0.75rem;">Minimum height 44px (md size with padding)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>3.3.1</strong> Error Identification</td>
            <td style="padding: 0.5rem 0.75rem;">Errors described in text</td>
            <td style="padding: 0.5rem 0.75rem;">Error message with <code style="${b.monoSm}">role="alert"</code> for immediate announcement</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><strong>4.1.2</strong> Name, Role, Value</td>
            <td style="padding: 0.5rem 0.75rem;">Accessible name and state</td>
            <td style="padding: 0.5rem 0.75rem;">Native &lt;input&gt; + <code style="${b.monoSm}">aria-invalid</code>, <code style="${b.monoSm}">aria-required</code></td>
          </tr>
        </tbody>
      </table>

      <h3 style="${b.h3}">Screen Reader Behavior</h3>
      <ul style="${b.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, current value (or "blank"), and input type (e.g., "edit text")</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="${b.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="${b.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: 0.5rem;"><strong>Password:</strong> Announces "password" input type; toggle button announces show/hide state</li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="${b.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${b.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the input (and to action buttons if present)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move cursor within text</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jump to beginning / end of text</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Select text character by character</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Cmd/Ctrl</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">A</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Select all text</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Submit form (when inside a form element)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},T={name:`Playground`,tags:[`!dev`],decorators:[e=>a`
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 2rem;">
          <div style="max-width: 320px;">
            ${e()}
          </div>
        </div>
      `],argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Text and padding size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`filled`],description:`Visual state (for documentation preview)`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction, dims appearance`,table:{category:`Visual`}},readonly:{name:`Readonly`,control:`boolean`,description:`Shows value but prevents changes`,table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Label text displayed above the input`,table:{category:`Content`}},placeholder:{name:`Placeholder`,control:`text`,description:`Placeholder shown when no value`,table:{category:`Content`}},helperText:{name:`Helper text`,control:`text`,description:`Supplementary guidance below the input`,table:{category:`Content`}},prefixIcon:{name:`Prefix icon`,control:`select`,options:C,description:`Icon name for left side of input. Any valid mms-icon name works (1500+ available).`,table:{category:`Content`}},suffixIcon:{name:`Suffix icon`,control:`select`,options:C,description:`Icon name for right side of input. Any valid mms-icon name works (1500+ available).`,table:{category:`Content`}},clearButton:{name:`Clear button`,control:`boolean`,description:`Shows clear (×) button when has value`,table:{category:`Content`}},mask:{name:`Mask`,control:`select`,options:[`none`,`email`,`phone-number`,`currency`,`numeral`,`measurement`,`count`,`protected-field`],description:`Input formatting mask`,table:{category:`Mask`}},phoneLocale:{name:`Phone locale`,control:`select`,options:[`US`,`UK`,`FR`,`MX`,`AU`,`IN`,`JP`,`KR`,`SG`,`HK`,`TH`,`MY`,`GR`],description:`Country code for phone mask`,table:{category:`Mask`}},currency:{name:`Currency`,control:`select`,options:[`USD`,`EUR`,`GBP`,`JPY`,`CNY`,`AUD`,`CAD`,`CHF`,`HKD`,`SGD`,`INR`,`KRW`,`MXN`],description:`Currency symbol for currency mask`,table:{category:`Mask`}},measurementUnit:{name:`Measurement unit`,control:`text`,description:`Unit suffix displayed after the value. Only applies when mask="measurement".`,table:{category:`Mask`}},name:{name:`Name`,control:`text`,description:"HTML `name` attribute — the key sent with form data on submit.",table:{category:`Form`}},value:{name:`Value`,control:`text`,description:`Current input value.`,table:{category:`Form`}},inputType:{name:`Input type`,control:`select`,options:[`text`,`email`,`password`,`tel`,`url`],description:`HTML input type (overridden by mask)`,table:{category:`Form`}},autocomplete:{name:`Autocomplete`,control:`text`,description:`Browser autocomplete hint (e.g., "email", "tel")`,table:{category:`Form`}},required:{name:`Required`,control:`boolean`,description:`Shows asterisk indicator on label`,table:{category:`Validation`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and message`,table:{category:`Validation`}},errorText:{name:`Error text`,control:`text`,description:`Error message when error is true`,table:{category:`Validation`}},maxLength:{name:`Max length`,control:`number`,description:`Maximum character limit (0 = unlimited)`,table:{category:`Validation`}},showCharacterCounter:{name:`Show character counter`,control:`boolean`,description:`Displays remaining characters`,table:{category:`Validation`}},showTooltip:{name:`Show tooltip`,control:`boolean`,description:`Show info icon next to label`,table:{category:`Tooltip`}},tooltipText:{name:`Tooltip text`,control:`text`,description:`Tooltip content (dialog coming soon)`,table:{category:`Tooltip`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`],description:`Brand theme (affects typography)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},args:{size:`md`,state:`default`,disabled:!1,readonly:!1,label:`Label`,placeholder:``,helperText:``,prefixIcon:``,suffixIcon:``,clearButton:!1,mask:`none`,phoneLocale:`US`,currency:`USD`,measurementUnit:``,name:``,value:``,inputType:`text`,autocomplete:``,required:!1,error:!1,errorText:``,maxLength:0,showCharacterCounter:!1,showTooltip:!1,tooltipText:``,theme:`maximus`,density:`default`},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.placeholder&&r.push(`placeholder="${n.placeholder}"`),n.value&&r.push(`value="${n.value}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.name&&r.push(`name="${n.name}"`),n.inputType!==`text`&&r.push(`type="${n.inputType}"`),n.autocomplete&&r.push(`autocomplete="${n.autocomplete}"`),n.state&&n.state!=="default"&&r.push(`state="${n.state}"`),n.mask&&n.mask!==`none`&&r.push(`mask="${n.mask}"`),n.mask===`phone-number`&&n.phoneLocale!==`US`&&r.push(`phone-locale="${n.phoneLocale}"`),n.mask===`currency`&&n.currency!==`USD`&&r.push(`currency="${n.currency}"`),n.mask===`measurement`&&n.measurementUnit&&r.push(`measurement-unit="${n.measurementUnit}"`),n.prefixIcon&&r.push(`prefix-icon="${n.prefixIcon}"`),n.suffixIcon&&r.push(`suffix-icon="${n.suffixIcon}"`),n.clearButton&&r.push(`clear-button`),n.showTooltip&&r.push(`show-tooltip`),n.tooltipText&&n.showTooltip&&r.push(`tooltip-text="${n.tooltipText}"`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.maxLength&&n.maxLength>0&&r.push(`max-length="${n.maxLength}"`),n.showCharacterCounter&&r.push(`show-character-counter`),n.size!==`md`&&r.push(`size="${n.size}"`),n.disabled&&r.push(`disabled`),n.readonly&&r.push(`readonly`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-text-field${r.length>0?`\n  ${r.join(`
  `)}\n`:``}></mms-text-field>`}}}},render:e=>a`
    <mms-text-field
      label=${e.label||n}
      placeholder=${e.placeholder||n}
      value=${e.value||n}
      helper-text=${e.helperText||n}
      name=${e.name||n}
      type=${e.inputType||n}
      autocomplete=${e.autocomplete||n}
      state=${e.state||n}
      mask=${e.mask||n}
      phone-locale=${e.phoneLocale||n}
      currency=${e.currency||n}
      measurement-unit=${e.measurementUnit||n}
      prefix-icon=${e.prefixIcon||n}
      suffix-icon=${e.suffixIcon||n}
      ?clear-button=${e.clearButton}
      ?show-tooltip=${e.showTooltip}
      tooltip-text=${e.tooltipText||n}
      ?error=${e.error}
      error-text=${e.errorText||n}
      ?required=${e.required}
      max-length=${e.maxLength||n}
      ?show-character-counter=${e.showCharacterCounter}
      size=${e.size||n}
      ?disabled=${e.disabled}
      ?readonly=${e.readonly}
      data-density=${e.density===`compact`?`compact`:n}
    ></mms-text-field>
  `},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Text Field</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A single-line text input using the native &lt;input&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, masks, and integrates with forms.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Provide a label and optional placeholder. The text field fills its container width by default.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Full name"
          placeholder="Enter your full name"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the input.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Email address"
          placeholder="you@example.com"
          helper-text="We'll never share your email with anyone."
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Field -->
      <h2 style="\${t.h2}">Required field</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Social Security Number"
          placeholder="XXX-XX-XXXX"
          required
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Email address"
          value="invalid-email"
          error
          error-text="Please enter a valid email address."
          required
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Readonly State -->
      <h2 style="\${t.h2}">Readonly state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Case number"
          value="MC-2026-001234"
          readonly
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled State -->
      <h2 style="\${t.h2}">Disabled state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Disabled prevents any interaction and dims the appearance.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Account ID"
          value="ACC-99999"
          disabled
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="\${t.h2}">With tooltip</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Date of birth"
          placeholder="MM/DD/YYYY"
          show-tooltip
          tooltip-text="Your date of birth is used to verify your identity."
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Clear Button -->
      <h2 style="\${t.h2}">Clear button</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">clear-button</code> prop shows a clear icon when the field has a value.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Search"
          placeholder="Search..."
          value="Medicaid enrollment"
          clear-button
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Character Counter -->
      <h2 style="\${t.h2}">Character counter</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">show-character-counter</code> with <code style="\${t.monoSm}">max-length</code> to show remaining characters.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Notes"
          placeholder="Add a note..."
          value="This is a sample note"
          show-character-counter
          max-length="100"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Three sizes available: <code style="\${t.monoSm}">sm</code>, <code style="\${t.monoSm}">md</code> (default), and <code style="\${t.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field label="Small" placeholder="Size sm" size="sm"></mms-text-field>
        <mms-text-field label="Medium" placeholder="Size md" size="md"></mms-text-field>
        <mms-text-field label="Large" placeholder="Size lg" size="lg"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           MASKS
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Email mask</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Shows an email icon prefix and sets <code style="\${t.monoSm}">type="email"</code> for mobile keyboards.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Email"
          mask="email"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Phone number mask</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Shows country code prefix and auto-formats the number based on locale.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <mms-text-field label="US Phone" mask="phone-number" phone-locale="US"></mms-text-field>
        <mms-text-field label="UK Phone" mask="phone-number" phone-locale="UK"></mms-text-field>
        <mms-text-field label="France Phone" mask="phone-number" phone-locale="FR"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Currency mask</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Shows currency symbol prefix, right-aligns text, and formats with comma separators.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <mms-text-field label="USD Amount" mask="currency" currency="USD"></mms-text-field>
        <mms-text-field label="EUR Amount" mask="currency" currency="EUR"></mms-text-field>
        <mms-text-field label="GBP Amount" mask="currency" currency="GBP"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Protected field (password)</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Shows password toggle icon. Click to reveal/hide the password.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Password"
          mask="protected-field"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           ICONS
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Icons</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">prefix-icon</code> and <code style="\${t.monoSm}">suffix-icon</code> 
        to add visual context. Icons are from the system icon library.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <mms-text-field 
          label="Search"
          placeholder="Search..."
          prefix-icon="magnifying-glass"
        ></mms-text-field>
        <mms-text-field 
          label="Username"
          placeholder="Enter username"
          prefix-icon="user"
        ></mms-text-field>
        <mms-text-field 
          label="Website"
          placeholder="https://example.com"
          prefix-icon="globe"
          suffix-icon="link"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           WIDTH BEHAVIOR
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Width behavior</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Text Field is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <p style="\${t.caption} margin-bottom: 1rem;"><strong>Full-width (default)</strong></p>
        <mms-text-field 
          label="Full width input"
          placeholder="Fills container"
        ></mms-text-field>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="\${t.caption} margin-bottom: 1rem;"><strong>Grid column 1</strong></p>
          <mms-text-field 
            label="First name"
            placeholder="Enter first name"
          ></mms-text-field>
        </div>
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="\${t.caption} margin-bottom: 1rem;"><strong>Grid column 2</strong></p>
          <mms-text-field 
            label="Last name"
            placeholder="Enter last name"
          ></mms-text-field>
        </div>
      </div>

      <div style="width: 200px; background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <p style="\${t.caption} margin-bottom: 0.25rem;"><strong>Narrow container (200px)</strong></p>
        <p style="\${t.caption} opacity: 0.7; margin-bottom: 1rem;">Sidebars, filter drawers, compact dialogs</p>
        <mms-text-field 
          label="Zip code"
          placeholder="12345"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           DENSITY
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Compact density</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">data-density="compact"</code> for reduced padding in data-dense interfaces.
      </p>

      <div data-density="compact" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field label="First name" placeholder="Enter first name" data-density="compact"></mms-text-field>
        <mms-text-field label="Last name" placeholder="Enter last name" data-density="compact"></mms-text-field>
        <mms-text-field label="Email" placeholder="Enter email" data-density="compact"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>
      
      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Why native &lt;input&gt;?</strong> Custom text input implementations require extensive ARIA wiring and 
          often fail edge cases with screen readers. Native &lt;input&gt; guarantees correct behavior across all assistive technologies 
          with zero custom ARIA — the browser handles announcements, focus, and keyboard navigation.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Criterion</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Requirement</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Implementation</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>1.3.1</strong> Info & Relationships</td>
            <td style="padding: 0.5rem 0.75rem;">Programmatic label association</td>
            <td style="padding: 0.5rem 0.75rem;">Visible label linked via <code style="\${t.monoSm}">aria-labelledby</code></td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>1.4.11</strong> Non-text Contrast</td>
            <td style="padding: 0.5rem 0.75rem;">3:1 for UI components</td>
            <td style="padding: 0.5rem 0.75rem;">Border meets 3.3:1 against surface background</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.4.7</strong> Focus Visible</td>
            <td style="padding: 0.5rem 0.75rem;">Visible focus indicator</td>
            <td style="padding: 0.5rem 0.75rem;">2px focus ring (1px border + 1px box-shadow)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.4.11</strong> Focus Not Obscured <span style="background: rgba(34, 197, 94, 0.15); padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">2.2</span></td>
            <td style="padding: 0.5rem 0.75rem;">Focus indicator not hidden</td>
            <td style="padding: 0.5rem 0.75rem;">No overlapping elements obscure focus ring</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.4.13</strong> Focus Appearance <span style="background: rgba(34, 197, 94, 0.15); padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">2.2</span></td>
            <td style="padding: 0.5rem 0.75rem;">≥2px thick, 3:1 contrast</td>
            <td style="padding: 0.5rem 0.75rem;">#386CF7 focus ring: 4.4:1 vs white, 4.1:1 vs dark surface</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.5.8</strong> Target Size <span style="background: rgba(34, 197, 94, 0.15); padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">2.2</span></td>
            <td style="padding: 0.5rem 0.75rem;">≥24×24 CSS pixels</td>
            <td style="padding: 0.5rem 0.75rem;">Minimum height 44px (md size with padding)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>3.3.1</strong> Error Identification</td>
            <td style="padding: 0.5rem 0.75rem;">Errors described in text</td>
            <td style="padding: 0.5rem 0.75rem;">Error message with <code style="\${t.monoSm}">role="alert"</code> for immediate announcement</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><strong>4.1.2</strong> Name, Role, Value</td>
            <td style="padding: 0.5rem 0.75rem;">Accessible name and state</td>
            <td style="padding: 0.5rem 0.75rem;">Native &lt;input&gt; + <code style="\${t.monoSm}">aria-invalid</code>, <code style="\${t.monoSm}">aria-required</code></td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, current value (or "blank"), and input type (e.g., "edit text")</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="\${t.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="\${t.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: 0.5rem;"><strong>Password:</strong> Announces "password" input type; toggle button announces show/hide state</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the input (and to action buttons if present)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move cursor within text</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jump to beginning / end of text</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Select text character by character</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Cmd/Ctrl</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">A</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Select all text</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Submit form (when inside a form element)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  decorators: [(story: () => unknown) => {
    return html\`
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 2rem;">
          <div style="max-width: 320px;">
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
      description: 'Label text displayed above the input',
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
      description: 'Supplementary guidance below the input',
      table: {
        category: 'Content'
      }
    },
    prefixIcon: {
      name: 'Prefix icon',
      control: 'select',
      options: iconOptions,
      description: 'Icon name for left side of input. Any valid mms-icon name works (1500+ available).',
      table: {
        category: 'Content'
      }
    },
    suffixIcon: {
      name: 'Suffix icon',
      control: 'select',
      options: iconOptions,
      description: 'Icon name for right side of input. Any valid mms-icon name works (1500+ available).',
      table: {
        category: 'Content'
      }
    },
    clearButton: {
      name: 'Clear button',
      control: 'boolean',
      description: 'Shows clear (×) button when has value',
      table: {
        category: 'Content'
      }
    },
    // ── Mask ──────────────────────────────────────────────────
    mask: {
      name: 'Mask',
      control: 'select',
      options: ['none', 'email', 'phone-number', 'currency', 'numeral', 'measurement', 'count', 'protected-field'],
      description: 'Input formatting mask',
      table: {
        category: 'Mask'
      }
    },
    phoneLocale: {
      name: 'Phone locale',
      control: 'select',
      options: ['US', 'UK', 'FR', 'MX', 'AU', 'IN', 'JP', 'KR', 'SG', 'HK', 'TH', 'MY', 'GR'],
      description: 'Country code for phone mask',
      table: {
        category: 'Mask'
      }
    },
    currency: {
      name: 'Currency',
      control: 'select',
      options: ['USD', 'EUR', 'GBP', 'JPY', 'CNY', 'AUD', 'CAD', 'CHF', 'HKD', 'SGD', 'INR', 'KRW', 'MXN'],
      description: 'Currency symbol for currency mask',
      table: {
        category: 'Mask'
      }
    },
    measurementUnit: {
      name: 'Measurement unit',
      control: 'text',
      description: 'Unit suffix displayed after the value. Only applies when mask="measurement".',
      table: {
        category: 'Mask'
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
      description: 'Current input value.',
      table: {
        category: 'Form'
      }
    },
    inputType: {
      name: 'Input type',
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url'],
      description: 'HTML input type (overridden by mask)',
      table: {
        category: 'Form'
      }
    },
    autocomplete: {
      name: 'Autocomplete',
      control: 'text',
      description: 'Browser autocomplete hint (e.g., "email", "tel")',
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
      description: 'Maximum character limit (0 = unlimited)',
      table: {
        category: 'Validation'
      }
    },
    showCharacterCounter: {
      name: 'Show character counter',
      control: 'boolean',
      description: 'Displays remaining characters',
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
      options: ['default', 'maximus', 'va-gov'],
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
  args: {
    // Visual
    size: 'md',
    state: 'default',
    disabled: false,
    readonly: false,
    // Content
    label: 'Label',
    placeholder: '',
    helperText: '',
    prefixIcon: '',
    suffixIcon: '',
    clearButton: false,
    // Mask
    mask: 'none',
    phoneLocale: 'US',
    currency: 'USD',
    measurementUnit: '',
    // Form
    name: '',
    value: '',
    inputType: 'text',
    autocomplete: '',
    // Validation
    required: false,
    error: false,
    errorText: '',
    maxLength: 0,
    showCharacterCounter: false,
    // Tooltip
    showTooltip: false,
    tooltipText: '',
    // Global
    theme: 'maximus',
    density: 'default'
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
          if (a.inputType !== 'text') attrs.push(\`type="\${a.inputType}"\`);
          if (a.autocomplete) attrs.push(\`autocomplete="\${a.autocomplete}"\`);
          if (a.state && a.state !== 'default') attrs.push(\`state="\${a.state}"\`);
          if (a.mask && a.mask !== 'none') attrs.push(\`mask="\${a.mask}"\`);
          if (a.mask === 'phone-number' && a.phoneLocale !== 'US') attrs.push(\`phone-locale="\${a.phoneLocale}"\`);
          if (a.mask === 'currency' && a.currency !== 'USD') attrs.push(\`currency="\${a.currency}"\`);
          if (a.mask === 'measurement' && a.measurementUnit) attrs.push(\`measurement-unit="\${a.measurementUnit}"\`);
          if (a.prefixIcon) attrs.push(\`prefix-icon="\${a.prefixIcon}"\`);
          if (a.suffixIcon) attrs.push(\`suffix-icon="\${a.suffixIcon}"\`);
          if (a.clearButton) attrs.push('clear-button');
          if (a.showTooltip) attrs.push('show-tooltip');
          if (a.tooltipText && a.showTooltip) attrs.push(\`tooltip-text="\${a.tooltipText}"\`);
          if (a.error) attrs.push('error');
          if (a.errorText && a.error) attrs.push(\`error-text="\${a.errorText}"\`);
          if (a.required) attrs.push('required');
          if (a.maxLength && a.maxLength > 0) attrs.push(\`max-length="\${a.maxLength}"\`);
          if (a.showCharacterCounter) attrs.push('show-character-counter');
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.disabled) attrs.push('disabled');
          if (a.readonly) attrs.push('readonly');
          if (a.density === 'compact') attrs.push('data-density="compact"');
          const attrStr = attrs.length > 0 ? \`\\n  \${attrs.join('\\n  ')}\\n\` : '';
          return \`<mms-text-field\${attrStr}></mms-text-field>\`;
        }
      }
    }
  },
  render: (args: Record<string, string | boolean | number>) => html\`
    <mms-text-field
      label=\${args.label || nothing}
      placeholder=\${args.placeholder || nothing}
      value=\${args.value || nothing}
      helper-text=\${args.helperText || nothing}
      name=\${args.name || nothing}
      type=\${args.inputType || nothing}
      autocomplete=\${args.autocomplete || nothing}
      state=\${args.state || nothing}
      mask=\${args.mask || nothing}
      phone-locale=\${args.phoneLocale || nothing}
      currency=\${args.currency || nothing}
      measurement-unit=\${args.measurementUnit || nothing}
      prefix-icon=\${args.prefixIcon || nothing}
      suffix-icon=\${args.suffixIcon || nothing}
      ?clear-button=\${args.clearButton}
      ?show-tooltip=\${args.showTooltip}
      tooltip-text=\${args.tooltipText || nothing}
      ?error=\${args.error}
      error-text=\${args.errorText || nothing}
      ?required=\${args.required}
      max-length=\${args.maxLength || nothing}
      ?show-character-counter=\${args.showCharacterCounter}
      size=\${args.size || nothing}
      ?disabled=\${args.disabled}
      ?readonly=\${args.readonly}
      data-density=\${args.density === 'compact' ? 'compact' : nothing}
    ></mms-text-field>
  \`
}`,...T.parameters?.docs?.source}}},E=[`Overview`,`PlaygroundStory`]}));D();export{w as Overview,T as PlaygroundStory,E as __namedExportsOrder,y as default,D as n,v as t};