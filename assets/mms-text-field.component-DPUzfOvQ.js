import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-B0BZwaT1.js";import{E as o,S as s,T as c,b as l,g as u,h as d,n as f,p,r as m,t as h,w as g}from"./mms-icon.component-DFVI3nJi.js";import{i as _,n as v,r as y,t as b}from"./delegates-aria-label-HG0ZTDsy.js";import{n as x,t as S}from"./localize-DGaV1nF3.js";import{n as C,t as w}from"./form-associated-Db-pIajX.js";import{t as T}from"./mms-tooltip.component-BVbs43hE.js";function E(e){return Array.from(e).length}function D(e){if(!e)return[];let t=new Set(e.toLowerCase().split(/[\s,]+/));return P.filter(e=>t.has(e))}function O(e,t){return e.replace(/\{(\w+)\}/g,(e,n)=>n in t?String(t[n]):e)}function k(e){return{...F,...e??{}}}function A(e){let t=Math.max(1,Math.floor(Number(e.minLength))||1),n=Math.max(t,Math.floor(Number(e.strongLength))||t);return{minLength:t,strongLength:n,fullLength:Math.max(1,Math.floor(Number(e.fullLength))||n),rules:e.rules}}function j(e,t,n=[]){let r=A(t),i=E(e),a=[{id:`length`,met:i>=r.minLength},...r.rules.map(t=>({id:t,met:I[t].test(e)})),...n.map(e=>({id:e.id,label:e.label,met:e.state===`met`,...e.state===`pending`?{pending:!0}:{}}))],o=a.filter(e=>e.met).length,s=a.some(e=>e.pending);if(i===0)return{level:null,progress:0,criteria:a,metCount:o,pending:s};let c=`weak`;return i>=r.strongLength?c=`strong`:i>=r.minLength&&(c=`moderate`),c===`strong`&&a.some(e=>!e.met)&&(c=`moderate`),{level:c,progress:Math.min(100,Math.round(i*100/r.fullLength)),criteria:a,metCount:o,pending:s}}function M(e,t,n){return e===`length`?O(n.length,{count:A(t).minLength}):n[e]}function N(e,t){if(e.level===null||e.pending)return null;let n=O(t.summary,{met:e.metCount,total:e.criteria.length});return`${t.title}: ${t[e.level]}. ${n}.`}var P,F,I,L=e((()=>{P=[`number`,`special`,`uppercase`,`lowercase`],F={title:`Password strength`,weak:`Weak`,moderate:`Moderate`,strong:`Strong`,met:`met`,notMet:`not met`,checking:`checking`,length:`At least {count} characters`,number:`Contains a number`,special:`Contains a special character`,uppercase:`Contains an uppercase letter`,lowercase:`Contains a lowercase letter`,summary:`{met} of {total} requirements met`},I={number:/\p{Nd}/u,special:/[^\p{L}\p{N}]/u,uppercase:/\p{Lu}/u,lowercase:/\p{Ll}/u}}));function R(e){let t=new Set,n=[];for(let r of e??[])!r||typeof r.id!=`string`||!r.id||typeof r.label!=`string`||typeof r.test!=`function`||t.has(r.id)||(t.add(r.id),n.push(r));return n}function z(e,t){return R(e).map(e=>({id:e.id,label:e.label,state:t[e.id]??`unmet`}))}function B(e){return typeof e==`object`&&!!e&&typeof e.then==`function`}var V,H=e((()=>{V=class{constructor(e){this.onChange=e,this.results={},this.token=0,this.timers=new Map}run(e,t){this.cancel();let n=this.token,r={};for(let i of R(e)){if(t===``){r[i.id]=`unmet`;continue}let e=Math.max(0,Number(i.debounce)||0);e>0?(r[i.id]=`pending`,this.timers.set(i.id,setTimeout(()=>{this.timers.delete(i.id),this.settleNow(i,t,n)},e))):r[i.id]=this.evaluate(i,t,n)}this.results=r}cancel(){this.token+=1;for(let e of this.timers.values())clearTimeout(e);this.timers.clear()}reset(){this.cancel(),this.results={}}evaluate(e,t,n){let r;try{r=e.test(t)}catch{return`unmet`}return B(r)?(r.then(t=>this.settle(e.id,t?`met`:`unmet`,n),()=>this.settle(e.id,`unmet`,n)),`pending`):r?`met`:`unmet`}settleNow(e,t,n){let r=this.evaluate(e,t,n);r!==`pending`&&this.settle(e.id,r,n)}settle(e,t,n){n===this.token&&(this.results={...this.results,[e]:t},this.onChange())}}})),U,W,G=e((()=>{a(),o(),y(),u(),d(),v(),C(),h(),T(),x(),L(),H(),m(),U=500,W=class extends b(w(r)){constructor(...e){super(...e),this.localize=new S(this),this.size=`md`,this.state=`default`,this.disabled=!1,this.readonly=!1,this.label=``,this.placeholder=``,this.helperText=``,this.prefixIcon=``,this.suffixIcon=``,this.clearButton=!1,this.mask=`none`,this.phoneLocale=`US`,this.currency=`USD`,this.measurementUnit=``,this.name=``,this.value=``,this.inputType=`text`,this.autocomplete=``,this.required=!1,this.error=!1,this.errorText=``,this.maxLength=0,this.showCharacterCounter=!1,this.showTooltip=!1,this.tooltipText=``,this.showStrength=!1,this.strengthMinLength=15,this.strengthRules=[],this.strengthLabels={},this.strengthCriteria=[],this._showPassword=!1,this._strengthAnnouncement=``,this._strengthPrimed=!1,this._strengthLastSeen=null,this._customRunner=new V(()=>this.requestUpdate())}get iconSize(){switch(this.size){case`sm`:return`sm`;case`lg`:return`md`;default:return`sm`}}get effectiveInputType(){return this.mask===`protected-field`?this._showPassword?`text`:`password`:this.mask===`email`?`email`:this.mask===`phone-number`?`tel`:this.inputType}get effectiveAutocomplete(){if(this.autocomplete)return this.autocomplete;switch(this.mask){case`email`:return`email`;case`phone-number`:return`tel`;case`protected-field`:return`new-password`;default:return`off`}}get phoneCountryCode(){return this.mask===`phone-number`?{US:`+1`,MX:`+52`,UK:`+44`,FR:`+33`,SG:`+65`,HK:`+852`,AU:`+61`,TH:`+66`,MY:`+60`,GR:`+30`,IN:`+91`,JP:`+81`,KR:`+82`}[this.phoneLocale]||`+1`:``}get currencySymbol(){return this.mask===`currency`?{USD:`$`,EUR:`€`,GBP:`£`,JPY:`¥`,CNY:`¥`,AUD:`$`,CAD:`$`,CHF:`CHF`,HKD:`$`,SGD:`$`,INR:`₹`,KRW:`₩`,MXN:`$`}[this.currency]||`$`:``}get effectivePrefixIcon(){return this.mask===`email`?`envelope`:this.prefixIcon}get effectivePlaceholder(){if(this.placeholder)return this.placeholder;switch(this.mask){case`email`:return`name@example.com`;case`phone-number`:switch(this.phoneLocale){case`US`:return`(000) 000-0000`;case`MX`:return`000-000-0000`;case`UK`:return`00000-000000`;case`FR`:return`00-00-00-00-00`;case`SG`:return`0000-0000`;case`HK`:return`0000-0000`;case`AU`:return`0000-000-000`;case`TH`:return`000-000-0000`;case`MY`:return`00-0000-0000`;case`GR`:return`000-000-0000`;case`IN`:return`00000-00000`;case`JP`:return`000-0000-0000`;case`KR`:return`000-0000-0000`;default:return`(000) 000-0000`}case`currency`:return`0.00`;case`numeral`:case`measurement`:case`count`:return`0`;case`protected-field`:return`Enter password`;default:return``}}get showClearButton(){return this.clearButton&&this.value.length>0&&!this.disabled&&!this.readonly}get ariaDescribedBy(){let e=[];return this.helperText&&!this.error&&e.push(`helper-text`),this.error&&this.errorText&&e.push(`error-text`),this.showCharacterCounter&&this.maxLength>0&&e.push(`char-counter`),this._strengthActive&&(this._strengthResult.level!==null&&e.push(`strength-status`),e.push(`strength-criteria`)),e.join(` `)||void 0}get charsRemaining(){return this.maxLength-this.value.length}get _strengthActive(){let e=this.mask===`protected-field`||this.effectiveInputType===`password`;return this.showStrength&&e&&!this.disabled&&!this._fieldsetDisabled&&!this.readonly}get _strengthConfig(){return{minLength:this.strengthMinLength,strongLength:this.strengthStrongLength,fullLength:this.strengthFullLength,rules:this.strengthRules}}get _strengthLabels(){let e=this.localize.term.bind(this.localize);return k({title:e(`strengthTitle`),weak:e(`strengthWeak`),moderate:e(`strengthModerate`),strong:e(`strengthStrong`),met:e(`strengthMet`),notMet:e(`strengthNotMet`),checking:e(`strengthChecking`),length:e(`strengthLength`),number:e(`strengthNumber`),special:e(`strengthSpecial`),uppercase:e(`strengthUppercase`),lowercase:e(`strengthLowercase`),summary:e(`strengthSummary`),...this.strengthLabels})}get _strengthResult(){return j(this.value,this._strengthConfig,z(this.strengthCriteria,this._customRunner.results))}_formReset(){super._formReset(),this.state!==`focus`&&(this.state=this.value?`filled`:`default`)}connectedCallback(){super.connectedCallback(),this._customStamp=void 0,this.hasUpdated&&this.requestUpdate()}willUpdate(e){super.willUpdate(e),this._syncCustomCriteria()}updated(e){super.updated(e),this._syncStrengthAnnouncement()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._strengthTimer),this._strengthTimer=void 0,this._customRunner.cancel(),this._strengthLastSeen=null}_syncCustomCriteria(){let e=this._strengthActive,t=this._customStamp;if(!(t&&t.active===e&&t.criteria===this.strengthCriteria&&t.value===this.value)){if(this._customStamp={value:this.value,criteria:this.strengthCriteria,active:e},!e){this._customRunner.reset();return}this._customRunner.run(this.strengthCriteria,this.value)}}_syncStrengthAnnouncement(){if(!this._strengthActive){clearTimeout(this._strengthTimer),this._strengthTimer=void 0,this._strengthPrimed=!1,this._strengthAnnouncement&&=``;return}let e=this._strengthResult,t=N(e,this._strengthLabels);if(!this._strengthPrimed){if(e.pending)return;this._strengthPrimed=!0,this._strengthLastSeen=t;return}if(t!==this._strengthLastSeen){if(this._strengthLastSeen=t,clearTimeout(this._strengthTimer),this._strengthTimer=void 0,t===null){this._strengthAnnouncement&&=``;return}t!==this._strengthAnnouncement&&(this._strengthTimer=setTimeout(()=>{this._strengthTimer=void 0,this._strengthAnnouncement=t},U))}}static{this.shadowRootOptions={...r.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[c,_,p,n`
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
      :host(:not(:is([disabled], :disabled)):not([readonly])) .input-container:hover,
      :host([state='hover']:not(:is([disabled], :disabled)):not([readonly])) .input-container {
        border-color: var(--color-border-interactive-hover);
        box-shadow: inset 0 0 0 1px var(--color-border-interactive-hover);
      }

      /* Focus state */
      :host([state='focus']:not(:is([disabled], :disabled))) .input-container,
      .input-container:focus-within {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
      }

      /* Filled state */
      :host([state='filled']:not(:is([disabled], :disabled)):not([error])) .input-container {
        border-color: var(--color-neutral-9);
      }

      /* Error state */
      :host([error]) .input-container {
        border-color: var(--color-input-border-error);
      }

      :host([error]:not(:is([disabled], :disabled)):not([readonly])) .input-container:hover,
      :host([error][state='hover']:not(:is([disabled], :disabled)):not([readonly])) .input-container {
        border-color: var(--color-input-border-error);
        box-shadow: inset 0 0 0 1px var(--color-input-border-error);
      }

      :host([error][state='focus']) .input-container,
      :host([error]) .input-container:focus-within {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
      }

      /* Forced colors drops box-shadow and recolors borders, which erases the focus ring
         above. An outline survives and takes a system color. */
      @media (forced-colors: active) {
        :host([state='focus']) .input-container,
        .input-container:focus-within {
          outline: var(--focus-ring-width) solid Highlight;
          outline-offset: 1px;
        }
      }

      /* Disabled state */
      :host(:is([disabled], :disabled)) .input-container {
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
        margin-inline-start: var(--spacing-sm2);
        color: var(--color-text-subtle);
      }

      :host(:is([disabled], :disabled)) .prefix-icon,
      :host(:is([disabled], :disabled)) .prefix-text {
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
        padding-inline-start: var(--spacing-xs2);
      }

      /* Remove right padding when suffix present */
      .input-field.has-suffix {
        padding-inline-end: var(--spacing-xs2);
      }

      /* Placeholder */
      .input-field::placeholder {
        color: var(--color-text-placeholder);
      }

      :host(:hover:not(:is([disabled], :disabled)):not([readonly])) .input-field::placeholder {
        color: var(--color-text-default);
      }

      :host([error]) .input-field::placeholder {
        color: var(--color-input-border-error);
        opacity: 0.7;
      }

      /* Disabled */
      :host(:is([disabled], :disabled)) .input-field {
        color: var(--color-disabled-text);
        cursor: not-allowed;
      }

      :host(:is([disabled], :disabled)) .input-field::placeholder {
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
        text-align: end;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         SUFFIX — Icons and buttons after input
         ═══════════════════════════════════════════════════════════════════════ */
      .suffix-icon {
        flex-shrink: 0;
        margin-inline-end: var(--spacing-sm2);
        color: var(--color-text-subtle);
        cursor: pointer;
      }

      :host(:is([disabled], :disabled)) .suffix-icon {
        color: var(--color-disabled-text);
        cursor: not-allowed;
      }

      .suffix-text {
        flex-shrink: 0;
        margin-inline-end: var(--spacing-sm2);
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

      :host(:is([disabled], :disabled)) .suffix-text {
        color: var(--color-disabled-text);
      }

      .clear-button,
      .password-toggle {
        flex-shrink: 0;
        margin-inline-end: var(--spacing-sm2);
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
        margin-inline-end: calc(var(--spacing-sm2) - 14px); /* Preserve original right spacing */
      }

      :host([size='lg']) .password-toggle {
        padding: 12px; /* (44 - 20) / 2 = 12px around 20px icon */
        margin: -12px;
        margin-inline-end: calc(var(--spacing-sm2) - 12px);
      }

      .clear-button:hover,
      .password-toggle:hover {
        color: var(--color-text-default);
      }

      :host(:is([disabled], :disabled)) .clear-button,
      :host(:is([disabled], :disabled)) .password-toggle {
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
         PASSWORD STRENGTH — Meter, label and requirements checklist
         Level color comes from the structural utility tokens (weak = error,
         moderate = caution, strong = success). Color is never the only cue:
         every level also has its text label, and each requirement has a
         distinct icon plus hidden "met"/"not met" text.
         ═══════════════════════════════════════════════════════════════════════ */
      .strength {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs2);
        --_strength-fill: var(--color-utility-error-emphasis);
      }

      .strength[data-level='moderate'] {
        --_strength-fill: var(--color-utility-caution-emphasis);
      }

      .strength[data-level='strong'] {
        --_strength-fill: var(--color-utility-success-emphasis);
      }

      /* Rendered only once something is typed (see _renderStrength). The extra top margin
         brings the bar to 8px below the input; the checklist alone stays at the 4px that
         helper text uses. */
      .strength-meter-row {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm1);
        margin-block-start: var(--spacing-xs2);
      }

      .strength-track {
        flex: 1;
        position: relative;
        overflow: hidden;
        height: 8px;
        border-radius: var(--radius-full);
        background: var(--color-surface-sunken);
      }

      .strength-fill {
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        height: 100%;
        border-radius: var(--radius-full);
        background: var(--_strength-fill);
        transition: width var(--motion-duration-moderate) var(--motion-easing-standard);
      }

      @media (prefers-reduced-motion: reduce) {
        .strength-fill {
          transition-duration: var(--motion-duration-instant);
        }
      }

      .strength-label {
        min-width: 5em;
        text-align: end;
        font-size: var(--type-body-sm-size);
        line-height: var(--type-body-sm-line-height);
        /* Neutral text, not the level colour: the caution token measures 4.47:1 on the
           page surface, just under AA for 14px text. The level is carried by the word
           itself and by the coloured meter fill. */
        color: var(--color-text-default);
      }

      .strength-criteria {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs1);
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: var(--type-body-sm-size);
        line-height: var(--type-body-sm-line-height);
        color: var(--color-text-subtle);
      }

      .strength-criterion {
        display: flex;
        align-items: flex-start;
        gap: var(--spacing-xs2);
      }

      /* Stays on the first line when the text wraps, like checkbox and radio, and keeps its
         full size: as a flex item it would otherwise shrink beside a long label. The offset
         centres the 16px icon in the first line's box. */
      .strength-criterion mms-icon {
        flex-shrink: 0;
        margin-block-start: calc(
          (var(--type-body-sm-line-height) * var(--type-body-sm-size) - var(--icon-size-sm, 16px)) / 2
        );
      }

      .strength-criterion[data-met='true'] {
        color: var(--color-text-default);
      }

      .strength-criterion[data-met='true'] mms-icon {
        color: var(--color-utility-success-emphasis);
      }

      .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
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
    `]}_handleInput(e){if(e.stopPropagation(),this.disabled||this.readonly)return;let t=e.target,n=this.value,r=t.value;r=this._formatValue(r),this.maxLength>0&&r.length>this.maxLength&&(r=r.slice(0,this.maxLength)),this.value=r,t.value!==r&&(t.value=r),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:this.value,oldValue:n},bubbles:!0,composed:!0}))}_handleFocus(e){e.stopPropagation(),!this.disabled&&(this.state=`focus`,this.dispatchEvent(new CustomEvent(`focus`,{detail:{value:this.value},bubbles:!0,composed:!0})))}_handleBlur(e){e.stopPropagation(),!this.disabled&&(this.state=this.value?`filled`:`default`,this.dispatchEvent(new CustomEvent(`blur`,{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0})))}_handleClear(){this.disabled||this.readonly||(this.value=``,this.state=`default`,this.dispatchEvent(new CustomEvent(`clear`,{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:``,oldValue:this.value},bubbles:!0,composed:!0})),(this.shadowRoot?.querySelector(`.input-field`))?.focus())}_handleTogglePassword(){this.disabled||this.readonly||(this._showPassword=!this._showPassword)}_formatValue(e){switch(this.mask){case`phone-number`:return this._formatPhoneNumber(e);case`numeral`:return this._formatNumeral(e);case`currency`:return this._formatCurrency(e);case`measurement`:case`count`:return this._formatInteger(e);default:return e}}_formatPhoneNumber(e){let t=e.replace(/\D/g,``);switch(this.phoneLocale){case`US`:return t.length<=3?t:t.length<=6?`(${t.slice(0,3)}) ${t.slice(3)}`:`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,10)}`;case`UK`:return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5,11)}`;case`FR`:return t.length<=2?t:t.length<=4?`${t.slice(0,2)}-${t.slice(2)}`:t.length<=6?`${t.slice(0,2)}-${t.slice(2,4)}-${t.slice(4)}`:t.length<=8?`${t.slice(0,2)}-${t.slice(2,4)}-${t.slice(4,6)}-${t.slice(6)}`:`${t.slice(0,2)}-${t.slice(2,4)}-${t.slice(4,6)}-${t.slice(6,8)}-${t.slice(8,10)}`;case`SG`:case`HK`:return t.length<=4?t:`${t.slice(0,4)}-${t.slice(4,8)}`;case`AU`:return t.length<=4?t:t.length<=7?`${t.slice(0,4)}-${t.slice(4)}`:`${t.slice(0,4)}-${t.slice(4,7)}-${t.slice(7,10)}`;case`IN`:return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5,10)}`;case`JP`:case`KR`:return t.length<=3?t:t.length<=7?`${t.slice(0,3)}-${t.slice(3)}`:`${t.slice(0,3)}-${t.slice(3,7)}-${t.slice(7,11)}`;default:return t.length<=3?t:t.length<=6?`${t.slice(0,3)}-${t.slice(3)}`:`${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6,10)}`}}_formatNumeral(e){let t=e.replace(/[^\d.]/g,``).split(`.`),n=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,`,`);return t[1]===void 0?n:`${n}.${t[1]}`}_formatCurrency(e){let t=e.replace(/[^\d.]/g,``);if(!t)return``;let n=t.split(`.`),r=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,`,`),i=n[1];return i===void 0?r:(i=i.slice(0,2),`${r}.${i}`)}_formatInteger(e){let t=e.replace(/\D/g,``);return t?t.replace(/\B(?=(\d{3})+(?!\d))/g,`,`):``}_renderStrength(){if(!this._strengthActive)return t;let e=this._strengthLabels,n=this._strengthConfig,r=this._strengthResult,a=r.level?e[r.level]:``;return i`
      <div class="strength" data-level="${r.level??t}">
        ${r.level===null?t:i`
              <div class="strength-meter-row">
                <div
                  class="strength-track"
                  role="meter"
                  aria-label="${e.title}"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="${r.progress}"
                  aria-valuetext="${a}"
                >
                  <div class="strength-fill" style="width: ${r.progress}%"></div>
                </div>
                <span id="strength-status" class="strength-label">${a}</span>
              </div>
            `}
        <ul id="strength-criteria" class="strength-criteria">
          ${r.criteria.map(r=>i`
              <li
                class="strength-criterion"
                data-met="${r.met}"
                data-pending="${r.pending?`true`:t}"
              >
                <mms-icon
                  name="${r.pending?`clock`:r.met?`check-circle`:`circle`}"
                  size="sm"
                ></mms-icon>
                <span>${r.label??M(r.id,n,e)}</span>
                <span class="visually-hidden"
                  >(${r.pending?e.checking:r.met?e.met:e.notMet})</span
                >
              </li>
            `)}
        </ul>
        <div class="visually-hidden" role="status" aria-live="polite" aria-atomic="true">
          ${this._strengthAnnouncement}
        </div>
      </div>
    `}render(){let e=this.effectivePrefixIcon||this.phoneCountryCode||this.currencySymbol||this.mask===`count`,n=this.suffixIcon||this.measurementUnit||this.mask===`protected-field`||this.showClearButton;return i`
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
                        aria-label="${this.tooltipText||this.localize.term(`moreInformation`)}"
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
          ?disabled="${this.disabled||this._fieldsetDisabled}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          aria-label="${this._ariaLabelValue||this.label||this.effectivePlaceholder}"
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
                aria-label="${this._showPassword?this.localize.term(`hidePassword`):this.localize.term(`showPassword`)}"
                ?disabled="${this.disabled||this._fieldsetDisabled}"
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
                aria-label=${this.localize.term(`clearInput`)}
              >
                <mms-icon name="x" size="${this.iconSize}"></mms-icon>
              </button>
            `:t}
      </div>

      ${this._renderStrength()}
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
    `}},f([s({type:String,reflect:!0})],W.prototype,`size`,void 0),f([s({type:String,reflect:!0})],W.prototype,`state`,void 0),f([s({type:Boolean,reflect:!0})],W.prototype,`disabled`,void 0),f([s({type:Boolean,reflect:!0})],W.prototype,`readonly`,void 0),f([s({type:String})],W.prototype,`label`,void 0),f([s({type:String})],W.prototype,`placeholder`,void 0),f([s({type:String,attribute:`helper-text`})],W.prototype,`helperText`,void 0),f([s({type:String,attribute:`prefix-icon`})],W.prototype,`prefixIcon`,void 0),f([s({type:String,attribute:`suffix-icon`})],W.prototype,`suffixIcon`,void 0),f([s({type:Boolean,reflect:!0,attribute:`clear-button`})],W.prototype,`clearButton`,void 0),f([s({type:String,reflect:!0})],W.prototype,`mask`,void 0),f([s({type:String,attribute:`phone-locale`})],W.prototype,`phoneLocale`,void 0),f([s({type:String})],W.prototype,`currency`,void 0),f([s({type:String,attribute:`measurement-unit`})],W.prototype,`measurementUnit`,void 0),f([s({type:String,reflect:!0})],W.prototype,`name`,void 0),f([s({type:String})],W.prototype,`value`,void 0),f([s({type:String,attribute:`type`})],W.prototype,`inputType`,void 0),f([s({type:String})],W.prototype,`autocomplete`,void 0),f([s({type:Boolean,reflect:!0})],W.prototype,`required`,void 0),f([s({type:Boolean,reflect:!0})],W.prototype,`error`,void 0),f([s({type:String,attribute:`error-text`})],W.prototype,`errorText`,void 0),f([s({type:Number,attribute:`max-length`})],W.prototype,`maxLength`,void 0),f([s({type:Boolean,attribute:`show-character-counter`})],W.prototype,`showCharacterCounter`,void 0),f([s({type:Boolean,reflect:!0,attribute:`show-tooltip`})],W.prototype,`showTooltip`,void 0),f([s({type:String,attribute:`tooltip-text`})],W.prototype,`tooltipText`,void 0),f([s({type:Boolean,attribute:`show-strength`})],W.prototype,`showStrength`,void 0),f([s({type:Number,attribute:`strength-min-length`})],W.prototype,`strengthMinLength`,void 0),f([s({type:Number,attribute:`strength-strong-length`})],W.prototype,`strengthStrongLength`,void 0),f([s({type:Number,attribute:`strength-full-length`})],W.prototype,`strengthFullLength`,void 0),f([s({attribute:`strength-rules`,converter:{fromAttribute:e=>D(e),toAttribute:e=>e.join(` `)}})],W.prototype,`strengthRules`,void 0),f([s({attribute:!1})],W.prototype,`strengthLabels`,void 0),f([s({attribute:!1})],W.prototype,`strengthCriteria`,void 0),f([l()],W.prototype,`_showPassword`,void 0),f([l()],W.prototype,`_strengthAnnouncement`,void 0),W=f([g(`mms-text-field`)],W)}));export{G as t};