import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{l as s,n as c,r as l,s as u,t as d}from"./decorate-Bygya6Tu.js";import{t as f}from"./mms-icon.component-DRWi1aVe.js";import{a as p,o as m,r as h,t as g}from"./a11y-outcome-CiARakld.js";import{t as _}from"./mms-tooltip.component-nZNmPYly.js";import{n as v,r as y,t as b}from"./checkbox-indicator.parts-Balp8Zsp.js";var x,S=e((()=>{o(),l(),f(),_(),v(),c(),x=class extends i{constructor(...e){super(...e),this.label=``,this.placeholder=`Select options`,this.options=[],this.value=[],this.name=``,this.size=`md`,this.state=`default`,this.disabled=!1,this.readonly=!1,this.error=!1,this.errorText=``,this.required=!1,this.helperText=``,this.showTooltip=!1,this.tooltipText=``,this.searchable=!1,this.searchPlaceholder=`Search...`,this.showSelectAll=!1,this.selectAllLabel=`Select All`,this.selectedAtTop=!1,this.emptySearchText=`No results found`,this.isOpen=!1,this.searchQuery=``,this._boundClickOutside=this._handleClickOutside.bind(this)}static{this.styles=[b,r`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs2);
      font-family: var(--type-body-md-family);
      position: relative;

      --_display-padding: var(--spacing-sm2);
      --_display-padding-end: var(--spacing-xl1);
      --_font-size: var(--type-body-md-size);
      --_line-height: var(--type-body-md-line-height);
    }

    :host([disabled]) {
      cursor: not-allowed;
    }

    :host([size='sm']) {
      --_display-padding: var(--spacing-sm1);
      --_display-padding-end: var(--spacing-lg2);
      --_font-size: var(--type-body-sm-size);
      --_line-height: var(--type-body-sm-line-height);
    }

    :host([size='lg']) {
      --_display-padding: var(--spacing-md1);
      --_display-padding-end: var(--spacing-xl2);
      --_font-size: var(--type-body-lg-size);
      --_line-height: var(--type-body-lg-line-height);
    }

    :host([data-density='compact']) {
      --_display-padding: var(--spacing-sm1);
      --_display-padding-end: var(--spacing-lg2);
      gap: var(--spacing-xs1);
    }

    :host([data-density='compact'][size='sm']) {
      --_display-padding: var(--spacing-xs2);
      --_display-padding-end: var(--spacing-md1);
    }

    :host([data-density='compact'][size='lg']) {
      --_display-padding: var(--spacing-sm2);
      --_display-padding-end: var(--spacing-lg2);
    }

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

    .required-marker {
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

    .select-wrapper {
      position: relative;
    }

    /* Trigger */
    .select-container {
      position: relative;
      display: flex;
      align-items: center;
      min-width: 120px;
      background: transparent;
      border: var(--border-width-xs) solid var(--color-border-interactive);
      border-radius: var(--radius-sm);
      cursor: pointer;
      box-sizing: border-box;
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
    }

    .select-display {
      flex: 1;
      min-width: 0;
      padding: var(--_display-padding);
      padding-right: var(--_display-padding-end);
      font-size: var(--_font-size);
      line-height: var(--_line-height);
      color: var(--color-text-default);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .select-display.placeholder {
      color: var(--color-text-placeholder);
    }

    .dropdown-icon {
      position: absolute;
      right: var(--spacing-sm2);
      top: 50%;
      transform: translateY(-50%);
      color: var(--color-text-subtle);
      transition: transform var(--motion-duration-base) var(--motion-easing-standard);
      pointer-events: none;
    }

    :host([is-open]) .dropdown-icon {
      transform: translateY(-50%) rotate(180deg);
    }

    :host([size='sm']) .dropdown-icon {
      right: var(--spacing-sm1);
    }

    :host([size='lg']) .dropdown-icon {
      right: var(--spacing-md1);
    }

    /* Hover state */
    :host([state='hover']) .select-container {
      border-color: var(--color-border-interactive-hover);
      box-shadow: inset 0 0 0 1px var(--color-border-interactive-hover);
    }

    /* Focus / open state */
    :host([state='focus']) .select-container,
    :host([is-open]) .select-container {
      border-color: var(--focus-ring-color);
      box-shadow: 0 0 0 1px var(--focus-ring-color);
    }

    /* Filled state */
    :host([state='filled']) .select-container {
      border-color: var(--color-neutral-9);
    }

    /* Error state */
    :host([error]) .select-container {
      border-color: var(--color-input-border-error);
    }
    :host([error][state='hover']) .select-container {
      border-color: var(--color-input-border-error);
      box-shadow: inset 0 0 0 1px var(--color-input-border-error);
    }
    :host([error][state='focus']) .select-container,
    :host([error][is-open]) .select-container {
      border-color: var(--focus-ring-color);
      box-shadow: 0 0 0 1px var(--focus-ring-color);
    }
    :host([error]) .select-display {
      color: var(--color-input-border-error);
    }

    /* Disabled */
    :host([disabled]) .select-container {
      background: var(--color-disabled-surface);
      border-color: var(--color-disabled-stroke);
      cursor: not-allowed;
    }
    :host([disabled]) .select-display,
    :host([disabled]) .dropdown-icon {
      color: var(--color-disabled-text);
    }

    /* Readonly */
    :host([readonly]) .select-container {
      background: var(--color-disabled-surface);
      border-color: var(--color-disabled-stroke);
      cursor: default;
    }
    :host([readonly]) .select-display {
      color: var(--color-text-subtle);
    }
    :host([readonly]) .dropdown-icon {
      color: var(--color-disabled-text);
    }

    /* Dropdown panel */
    .dropdown-panel {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 1000;
      margin-top: var(--spacing-xs2);
      background: var(--color-surface-raised);
      border: var(--border-width-xs) solid var(--color-border-subtle);
      border-radius: var(--radius-sm);
      box-shadow: var(--elevation-md);
      max-height: 300px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .dropdown-panel[hidden] {
      display: none;
    }

    .listbox {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }

    .search-container {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm1);
      padding: var(--spacing-sm2);
      border-bottom: var(--border-width-xs) solid var(--color-border-subtle);
    }

    .search-container[hidden] {
      display: none;
    }

    .search-icon {
      color: var(--color-text-subtle);
      flex-shrink: 0;
    }

    .search-input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      font-family: inherit;
      font-size: var(--type-body-sm-size);
      color: var(--color-text-default);
      min-width: 0;
    }

    .search-input::placeholder {
      color: var(--color-text-placeholder);
    }

    .clear-search-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: var(--size-lg1);
      height: var(--size-lg1);
      padding: 0;
      border: none;
      background: transparent;
      color: var(--color-text-subtle);
      cursor: pointer;
      border-radius: var(--radius-xs);
    }
    .clear-search-button:hover {
      color: var(--color-text-default);
    }
    .clear-search-button:focus-visible {
      outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
      outline-offset: var(--focus-ring-offset);
    }
    .clear-search-button[hidden] {
      display: none;
    }

    .options-list {
      overflow-y: auto;
      flex: 1;
      max-height: 240px;
    }

    .option-item {
      display: flex;
      align-items: center;
      padding: var(--spacing-sm1) var(--spacing-sm2);
      gap: var(--spacing-sm1);
      cursor: pointer;
      transition: background-color var(--motion-duration-base) var(--motion-easing-standard);
    }

    :host([data-density='compact']) .option-item,
    :host([data-density='compact']) .search-container {
      padding-block: var(--spacing-xs2);
    }

    .option-item:hover {
      background: var(--color-surface-hover);
    }

    .option-item:focus-visible {
      outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
      outline-offset: var(--focus-ring-inset-offset);
    }

    .option-item[aria-selected='true'] {
      background: var(--color-surface-active);
    }

    .option-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: var(--type-body-md-size);
      color: var(--color-text-default);
    }

    .select-all .option-label {
      font-weight: var(--font-weight-medium);
    }

    .select-all[hidden] {
      display: none;
    }

    .divider {
      height: var(--border-width-xs);
      background: var(--color-border-subtle);
      flex-shrink: 0;
    }

    .divider[hidden] {
      display: none;
    }

    .empty-state {
      padding: var(--spacing-md1) var(--spacing-sm2);
      color: var(--color-text-subtle);
      font-size: var(--type-body-sm-size);
      text-align: center;
    }

    .empty-state[hidden] {
      display: none;
    }

    /* Base box shape, size, checkmark/dash positioning, and checked/indeterminate
       paint come from the shared checkbox-indicator.parts.ts partial (also
       consumed by mms-checkbox) — rendered here as an inert, aria-hidden glyph:
       option rows already carry role="option"/aria-selected, so a nested
       mms-checkbox would introduce a second, conflicting set of interactive/
       native semantics. Only the disabled/readonly override stays local. */
    :host([disabled]) .indicator,
    :host([readonly]) .indicator {
      border-color: var(--color-disabled-stroke);
    }

    .helper-text {
      font-size: var(--type-ui-caption-size);
      line-height: var(--type-ui-caption-line-height);
      color: var(--color-text-subtle);
    }

    :host([disabled]) .helper-text {
      display: none;
    }

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
    }
  `]}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._boundClickOutside)}get filteredOptions(){let e=this.searchQuery.trim().toLowerCase(),t=e?this.options.filter(t=>t.label.toLowerCase().includes(e)):this.options;return this.selectedAtTop&&(t=[...t].sort((e,t)=>{let n=this.isSelected(e.value);return n===this.isSelected(t.value)?0:n?-1:1})),t}get showSelectAllRow(){return this.showSelectAll&&!this.searchQuery.trim()}get allSelected(){let e=this.filteredOptions;return e.length>0&&e.every(e=>this.isSelected(e.value))}get someSelected(){let e=this.filteredOptions,t=e.filter(e=>this.isSelected(e.value)).length;return t>0&&t<e.length}get displayText(){return this.value.length===0?this.placeholder:`${this.value.length} selected`}get isPlaceholder(){return this.value.length===0}get ariaDescribedBy(){let e=[];return this.helperText&&!this.error&&!this.disabled&&e.push(`helper-text`),this.error&&this.errorText&&!this.disabled&&e.push(`error-text`),e.join(` `)}isSelected(e){return this.value.includes(e)}getSelectionState(e){return this.isSelected(e)?`checked`:`unchecked`}getSelectAllState(){return this.allSelected?`checked`:this.someSelected?`indeterminate`:`unchecked`}_handleTriggerClick(){this.disabled||this.readonly||(this.isOpen=!this.isOpen,this.isOpen?(this.state=`focus`,setTimeout(()=>document.addEventListener(`click`,this._boundClickOutside),0),this.searchable?setTimeout(()=>{(this.shadowRoot?.querySelector(`.search-input`))?.focus()},50):this._focusFirstPanelRow()):(this.state=this.value.length?`filled`:`default`,document.removeEventListener(`click`,this._boundClickOutside)))}_focusFirstPanelRow(){this.updateComplete.then(()=>{(this.shadowRoot?.querySelector(`.option-item:not([hidden])`))?.focus()})}_handleTriggerKeydown(e){this.disabled||this.readonly||(e.key===`Enter`||e.key===` `||e.key===`ArrowDown`?(e.preventDefault(),this.isOpen||this._handleTriggerClick()):e.key===`Escape`&&this.isOpen&&(this.isOpen=!1,this.state=this.value.length?`filled`:`default`,document.removeEventListener(`click`,this._boundClickOutside)))}_handleClickOutside(e){this.contains(e.target)||(this.isOpen=!1,this.state=this.value.length?`filled`:`default`,document.removeEventListener(`click`,this._boundClickOutside))}_handleFocusIn(){this.disabled||this.readonly||(this.state!==`hover`&&(this.state=`focus`),this.dispatchEvent(new CustomEvent(`focus`,{bubbles:!0,composed:!0})))}_handleFocusOut(){this.isOpen||(this.state=this.value.length?`filled`:`default`,this.dispatchEvent(new CustomEvent(`blur`,{bubbles:!0,composed:!0})))}_handleMouseEnter(){this.disabled||this.readonly||this.state===`focus`||this.isOpen||(this.state=`hover`)}_handleMouseLeave(){this.disabled||this.readonly||this.state===`focus`||this.isOpen||(this.state=this.value.length?`filled`:`default`)}_handleOptionClick(e,t){if(t.stopPropagation(),this.disabled||this.readonly)return;let n=this.value,r=this.isSelected(e.value)?this.value.filter(t=>t!==e.value):[...this.value,e.value];this.value=r,this.dispatchEvent(new CustomEvent(`change`,{detail:{value:r,oldValue:n,option:e},bubbles:!0,composed:!0}))}_handleSelectAll(e){if(e.stopPropagation(),this.disabled||this.readonly)return;let t=this.value,n=this.filteredOptions.map(e=>e.value),r=this.allSelected?this.value.filter(e=>!n.includes(e)):[...new Set([...this.value,...n])];this.value=r,this.dispatchEvent(new CustomEvent(`change`,{detail:{value:r,oldValue:t,selectAll:!this.allSelected},bubbles:!0,composed:!0}))}_handleSelectAllKeydown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._handleSelectAll(e))}_handleSearchInput(e){this.searchQuery=e.target.value}_handleSearchKeydown(e){e.key===`ArrowDown`?(e.preventDefault(),this._focusFirstPanelRow()):e.key===`Escape`&&(this.isOpen=!1,this.state=this.value.length?`filled`:`default`,document.removeEventListener(`click`,this._boundClickOutside),(this.shadowRoot?.querySelector(`.select-container`))?.focus())}_handleClearSearch(e){e.stopPropagation(),this.searchQuery=``,(this.shadowRoot?.querySelector(`.search-input`))?.focus()}_handleOptionKeydown(e,t){if(e.key===`Enter`||e.key===` `){e.preventDefault(),this._handleOptionClick(t,e);return}if(e.key===`Escape`){this.isOpen=!1,this.state=this.value.length?`filled`:`default`,document.removeEventListener(`click`,this._boundClickOutside),(this.shadowRoot?.querySelector(`.select-container`))?.focus();return}if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=Array.from(this.shadowRoot?.querySelectorAll(`.option-item`)??[]).filter(e=>!e.hidden),n=t.indexOf(e.currentTarget);t[e.key===`ArrowDown`?n+1:n-1]?.focus()}}firstUpdated(e){super.firstUpdated?.(e)}render(){let e=`multi-select-label`;return a`
      ${this.label?a`
            <div class="label-row">
              <span id=${e}
                >${this.label}${this.required?a`<span class="required-marker" aria-hidden="true"> *</span>`:``}</span
              >
              ${this.showTooltip?a`
                    <mms-tooltip text=${this.tooltipText}>
                      <mms-icon
                        class="tooltip-icon"
                        name="info"
                        size="sm"
                        aria-label=${this.tooltipText||`More information`}
                      ></mms-icon>
                    </mms-tooltip>
                  `:``}
            </div>
          `:``}

      <div class="select-wrapper">
      <div
        class="select-container"
        role="combobox"
        aria-expanded=${this.isOpen}
        aria-haspopup="listbox"
        aria-controls="dropdown-list"
        aria-describedby=${this.ariaDescribedBy||void 0}
        aria-labelledby=${this.label?e:void 0}
        aria-label=${this.label?void 0:this.placeholder}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-readonly=${this.readonly?`true`:`false`}
        aria-required=${this.required?`true`:`false`}
        aria-invalid=${this.error?`true`:`false`}
        tabindex=${this.disabled?-1:0}
        @click=${this._handleTriggerClick}
        @keydown=${this._handleTriggerKeydown}
        @focusin=${this._handleFocusIn}
        @focusout=${this._handleFocusOut}
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
      >
        <span class="select-display ${this.isPlaceholder?`placeholder`:``}"
          >${this.displayText}</span
        >
        <mms-icon class="dropdown-icon" name="caret-down" size="sm"></mms-icon>
      </div>

      <div class="dropdown-panel" ?hidden=${!this.isOpen}>
        <div class="search-container" ?hidden=${!this.searchable}>
          <mms-icon class="search-icon" name="magnifying-glass" size="sm"></mms-icon>
          <input
            type="text"
            class="search-input"
            placeholder=${this.searchPlaceholder}
            .value=${this.searchQuery}
            @input=${this._handleSearchInput}
            @keydown=${this._handleSearchKeydown}
            @click=${e=>e.stopPropagation()}
            aria-label="Search options"
          />
          <button
            type="button"
            class="clear-search-button"
            aria-label="Clear search"
            ?hidden=${!this.searchQuery}
            @click=${this._handleClearSearch}
          >
            <mms-icon name="x" size="sm"></mms-icon>
          </button>
        </div>

        <div class="listbox" role="listbox" aria-multiselectable="true" id="dropdown-list">
          <div
            class="option-item select-all"
            role="option"
            aria-selected=${this.allSelected}
            tabindex="0"
            ?hidden=${!this.showSelectAllRow}
            @click=${this._handleSelectAll}
            @keydown=${this._handleSelectAllKeydown}
          >
            ${y(`md`,this.getSelectAllState())}
            <span class="option-label">${this.selectAllLabel}</span>
          </div>

          <div class="divider" ?hidden=${!this.showSelectAllRow}></div>

          <div class="options-list">
            <div class="empty-state" ?hidden=${this.filteredOptions.length>0}>${this.emptySearchText}</div>
            ${this.filteredOptions.map(e=>a`
                <div
                  class="option-item"
                  role="option"
                  aria-selected=${this.isSelected(e.value)}
                  tabindex="0"
                  data-value=${e.value}
                  @click=${t=>this._handleOptionClick(e,t)}
                  @keydown=${t=>this._handleOptionKeydown(t,e)}
                >
                  ${y(`md`,this.getSelectionState(e.value))}
                  <span class="option-label">${e.label}</span>
                </div>
              `)}
          </div>
        </div>
      </div>
      </div>

      ${this.helperText&&!this.error&&!this.disabled?a`<span id="helper-text" class="helper-text">${this.helperText}</span>`:``}
      ${this.error&&this.errorText&&!this.disabled?a`
            <span id="error-text" class="error-row" role="alert">
              <mms-icon class="error-icon" name="warning-circle" size="sm"></mms-icon>
              ${this.errorText}
            </span>
          `:``}
    `}},d([s({type:String})],x.prototype,`label`,void 0),d([s({type:String})],x.prototype,`placeholder`,void 0),d([s({type:Array})],x.prototype,`options`,void 0),d([s({type:Array})],x.prototype,`value`,void 0),d([s({type:String})],x.prototype,`name`,void 0),d([s({type:String,reflect:!0})],x.prototype,`size`,void 0),d([s({type:String,reflect:!0})],x.prototype,`state`,void 0),d([s({type:Boolean,reflect:!0})],x.prototype,`disabled`,void 0),d([s({type:Boolean,reflect:!0})],x.prototype,`readonly`,void 0),d([s({type:Boolean,reflect:!0})],x.prototype,`error`,void 0),d([s({type:String,attribute:`error-text`})],x.prototype,`errorText`,void 0),d([s({type:Boolean,reflect:!0})],x.prototype,`required`,void 0),d([s({type:String,attribute:`helper-text`})],x.prototype,`helperText`,void 0),d([s({type:Boolean,reflect:!0,attribute:`show-tooltip`})],x.prototype,`showTooltip`,void 0),d([s({type:String,attribute:`tooltip-text`})],x.prototype,`tooltipText`,void 0),d([s({type:Boolean,reflect:!0})],x.prototype,`searchable`,void 0),d([s({type:String,attribute:`search-placeholder`})],x.prototype,`searchPlaceholder`,void 0),d([s({type:Boolean,reflect:!0,attribute:`show-select-all`})],x.prototype,`showSelectAll`,void 0),d([s({type:String,attribute:`select-all-label`})],x.prototype,`selectAllLabel`,void 0),d([s({type:Boolean,reflect:!0,attribute:`selected-at-top`})],x.prototype,`selectedAtTop`,void 0),d([s({type:String,attribute:`empty-search-text`})],x.prototype,`emptySearchText`,void 0),d([s({type:Boolean,reflect:!0,attribute:`is-open`})],x.prototype,`isOpen`,void 0),d([u()],x.prototype,`searchQuery`,void 0),customElements.get(`mms-multi-select`)||customElements.define(`mms-multi-select`,x)})),C=t({Overview:()=>A,PlaygroundStory:()=>j,__namedExportsOrder:()=>M,default:()=>w}),w,T,E,D,O,k,A,j,M,N=e((()=>{o(),S(),p(),g(),w={title:`Forms/Multi Select`,tags:[`!autodocs`]},T={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},E=`680px`,D=`960px`,O=[{value:`medicaid`,label:`Medicaid`},{value:`chip`,label:`CHIP`},{value:`snap`,label:`SNAP`},{value:`tanf`,label:`TANF`}],k=[{value:`al`,label:`Alabama`},{value:`ak`,label:`Alaska`},{value:`az`,label:`Arizona`},{value:`ar`,label:`Arkansas`},{value:`ca`,label:`California`},{value:`co`,label:`Colorado`},{value:`ct`,label:`Connecticut`},{value:`de`,label:`Delaware`},{value:`fl`,label:`Florida`},{value:`ga`,label:`Georgia`},{value:`hi`,label:`Hawaii`},{value:`id`,label:`Idaho`},{value:`il`,label:`Illinois`},{value:`in`,label:`Indiana`},{value:`ia`,label:`Iowa`}],A={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${D}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${T.h1}">Multi Select</h1>
      <p style="${T.body} opacity: 0.85; max-width: ${E}; margin-bottom: 2rem;">
        A custom combobox/listbox for selecting multiple options from a dropdown. Unlike
        <code style="${T.monoSm}">mms-select</code>, this is not backed by a native
        &lt;select&gt; — multi-selection requires custom markup, so keyboard model and ARIA
        wiring are hand-built to the WAI-ARIA combobox/listbox pattern.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${T.h2}">Basic usage</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        The trigger displays a count ("N selected") once any option is chosen, rather than
        listing selected labels inline.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-multi-select
          label="Programs"
          .options=${O}
        ></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Select All -->
      <h2 style="${T.h2}">Select all</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">show-select-all</code> adds a tri-state row above the list —
        checked when every visible option is selected, dashed/indeterminate when some are,
        empty when none are.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-multi-select
          label="Programs"
          show-select-all
          .value=${[`medicaid`]}
          .options=${O}
        ></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Searchable -->
      <h2 style="${T.h2}">Searchable</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">searchable</code> adds a filter input inside the dropdown
        panel for long option lists. Focus moves to the search input automatically when the
        panel opens.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-multi-select
          label="State"
          searchable
          search-placeholder="Search states..."
          .options=${k}
        ></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Selected at top -->
      <h2 style="${T.h2}">Selected sorted to top</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">selected-at-top</code> re-sorts selected options above
        unselected ones on every render, so a long selection stays visible without scrolling
        back through the full list.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-multi-select
          label="State"
          searchable
          selected-at-top
          .value=${[`ca`,`ga`]}
          .options=${k}
        ></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size Variants -->
      <h2 style="${T.h2}">Size variants</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        Three sizes are available: <code style="${T.monoSm}">sm</code>, <code style="${T.monoSm}">md</code> (default), and <code style="${T.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px; margin-bottom: 2rem;">
        <mms-multi-select label="Small" size="sm" .options=${O}></mms-multi-select>
        <mms-multi-select label="Medium (default)" size="md" .options=${O}></mms-multi-select>
        <mms-multi-select label="Large" size="lg" .options=${O}></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Validation States -->
      <h2 style="${T.h2}">Required &amp; error states</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">required</code> adds an asterisk indicator; <code style="${T.monoSm}">error</code>
        swaps helper text for the error message and announces it immediately via
        <code style="${T.monoSm}">role="alert"</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px; margin-bottom: 2rem;">
        <mms-multi-select label="Programs" required .options=${O}></mms-multi-select>
        <mms-multi-select
          label="Programs"
          error
          error-text="Select at least one program."
          required
          .options=${O}
        ></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Non-interactive states -->
      <h2 style="${T.h2}">Readonly &amp; disabled states</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        Readonly displays the current selection but blocks changes. Disabled prevents all
        interaction and dims the appearance.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px; margin-bottom: 2rem;">
        <mms-multi-select
          label="Programs"
          readonly
          .value=${[`medicaid`,`chip`]}
          .options=${O}
        ></mms-multi-select>
        <mms-multi-select
          label="Programs"
          disabled
          .value=${[`medicaid`]}
          .options=${O}
        ></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Compact Density -->
      <h2 style="${T.h2}">Compact density</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        Use <code style="${T.monoSm}">data-density="compact"</code> for reduced padding on the
        trigger, search field, and option rows.
      </p>

      <div style="display: flex; gap: 2rem; max-width: 600px; margin-bottom: 2rem;">
        <div style="flex: 1;">
          <p style="${T.caption} margin-bottom: 0.5rem;"><strong>Default</strong></p>
          <mms-multi-select label="Programs" .options=${O}></mms-multi-select>
        </div>
        <div style="flex: 1;">
          <p style="${T.caption} margin-bottom: 0.5rem;"><strong>Compact</strong></p>
          <mms-multi-select label="Programs" data-density="compact" .options=${O}></mms-multi-select>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${T.h2}">Accessibility</h2>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${T.bodySm} margin: 0;">
          <strong>Why a custom combobox?</strong> There is no native HTML element for
          multi-selection with search and select-all. This component follows the WAI-ARIA
          <code style="${T.monoSm}">combobox</code> (trigger) + <code style="${T.monoSm}">listbox</code>
          (panel, <code style="${T.monoSm}">aria-multiselectable="true"</code>) pattern, with
          hand-built keyboard support since the browser cannot supply it automatically.
        </p>
      </div>

      <h3 style="${T.h3}">WCAG 2.2 AA Compliance</h3>
      ${h(m[`multi-select`].rows)}

      <h3 style="${T.h3}">Screen Reader Behavior</h3>
      <ul style="${T.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Trigger focus:</strong> Announces label, "combo box", collapsed/expanded state, and current display text ("N selected" or the placeholder)</li>
        <li style="margin-bottom: 0.5rem;"><strong>Option focus:</strong> Announces "option", the option's label, and selected/not selected</li>
        <li style="margin-bottom: 0.5rem;"><strong>Select-all focus:</strong> Announces the select-all label and selected/not selected. The indeterminate ("some selected") visual state is presentational only — <code style="${T.monoSm}">role="option"</code> has no native mixed/tri-state value to expose, unlike a checkbox's <code style="${T.monoSm}">aria-checked="mixed"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="${T.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces the error message via <code style="${T.monoSm}">role="alert"</code> when error state activates</li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="${T.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${T.h3}">Keyboard Navigation</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; width: 180px;">Key</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the trigger (closes the panel if open)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Open the dropdown panel (on the trigger, when closed)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus between options (including the select-all row), non-wrapping</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggle the focused option (or select-all)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close the panel and return focus to the trigger</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;">Type in search field</td>
            <td style="padding: 0.5rem 0.75rem;">Filters the option list (when <code style="${T.monoSm}">searchable</code>)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},j={name:`Playground`,tags:[`!dev`],args:{size:`md`,state:`default`,disabled:!1,readonly:!1,label:`Select programs`,placeholder:`Select options`,helperText:``,options:O,searchable:!1,searchPlaceholder:`Search...`,showSelectAll:!1,selectAllLabel:`Select All`,selectedAtTop:!1,emptySearchText:`No results found`,name:`myMultiSelect`,value:[],required:!1,error:!1,errorText:`Please make a selection.`,showTooltip:!1,tooltipText:`Additional guidance for this field`,theme:`maximus`,density:`default`},decorators:[e=>a`
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 1.5rem 2rem;
            min-height: 300px;
          "
        >
          <div style="width: 320px;">
            ${e()}
          </div>
        </div>
      `],argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Text and padding size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`filled`],description:`Visual state (for documentation preview)`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction, dims appearance`,table:{category:`Visual`}},readonly:{name:`Readonly`,control:`boolean`,description:`Shows selection but prevents changes`,table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Label text displayed above the trigger`,table:{category:`Content`}},placeholder:{name:`Placeholder`,control:`text`,description:`Placeholder shown when no options are selected`,table:{category:`Content`}},helperText:{name:`Helper text`,control:`text`,description:`Supplementary guidance below the trigger`,table:{category:`Content`}},options:{name:`Options`,control:`object`,description:"Array of options. Each option needs `value` (string) and `label` (string) properties.",table:{category:`Content`}},searchable:{name:`Searchable`,control:`boolean`,description:`Adds a filter input inside the dropdown panel`,table:{category:`Behavior`}},searchPlaceholder:{name:`Search placeholder`,control:`text`,description:`Placeholder text for the search input`,table:{category:`Behavior`}},showSelectAll:{name:`Show select all`,control:`boolean`,description:`Adds a tri-state select-all row above the option list`,table:{category:`Behavior`}},selectAllLabel:{name:`Select all label`,control:`text`,description:`Label text for the select-all row`,table:{category:`Behavior`}},selectedAtTop:{name:`Selected at top`,control:`boolean`,description:`Re-sorts selected options above unselected ones`,table:{category:`Behavior`}},emptySearchText:{name:`Empty search text`,control:`text`,description:`Message shown when a search query matches no options`,table:{category:`Behavior`}},name:{name:`Name`,control:`text`,description:"HTML `name` attribute for form association",table:{category:`Form`}},value:{name:`Value`,control:`object`,description:`Array of currently selected option values.`,table:{category:`Form`}},required:{name:`Required`,control:`boolean`,description:`Shows asterisk indicator on label`,table:{category:`Validation`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and message`,table:{category:`Validation`}},errorText:{name:`Error text`,control:`text`,description:`Error message when error is true`,table:{category:`Validation`}},showTooltip:{name:`Show tooltip`,control:`boolean`,description:`Show info icon next to label`,table:{category:`Tooltip`}},tooltipText:{name:`Tooltip text`,control:`text`,description:`Tooltip content (dialog coming soon)`,table:{category:`Tooltip`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects typography)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.placeholder&&r.push(`placeholder="${n.placeholder}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.name&&r.push(`name="${n.name}"`),n.state&&n.state!=="default"&&r.push(`state="${n.state}"`),n.searchable&&r.push(`searchable`),n.searchPlaceholder&&n.searchable&&r.push(`search-placeholder="${n.searchPlaceholder}"`),n.showSelectAll&&r.push(`show-select-all`),n.selectAllLabel&&n.showSelectAll&&r.push(`select-all-label="${n.selectAllLabel}"`),n.selectedAtTop&&r.push(`selected-at-top`),n.showTooltip&&r.push(`show-tooltip`),n.tooltipText&&n.showTooltip&&r.push(`tooltip-text="${n.tooltipText}"`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.size!==`md`&&r.push(`size="${n.size}"`),n.disabled&&r.push(`disabled`),n.readonly&&r.push(`readonly`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-multi-select\n  ${r.join(`
  `)}\n  .options=\${options}\n  .value=\${value}\n></mms-multi-select>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=e.options;if(typeof e.options==`string`)try{t=JSON.parse(e.options)}catch{t=[]}Array.isArray(t)||(t=[]);let r=e.value;if(typeof e.value==`string`)try{r=JSON.parse(e.value)}catch{r=[]}return Array.isArray(r)||(r=[]),a`
      <mms-multi-select
        label=${e.label}
        placeholder=${e.placeholder}
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
        ?searchable=${e.searchable}
        search-placeholder=${e.searchPlaceholder}
        ?show-select-all=${e.showSelectAll}
        select-all-label=${e.selectAllLabel}
        ?selected-at-top=${e.selectedAtTop}
        empty-search-text=${e.emptySearchText}
        data-density=${e.density===`compact`?`compact`:n}
        .options=${t}
        .value=${r}
      ></mms-multi-select>
    `}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Multi Select</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A custom combobox/listbox for selecting multiple options from a dropdown. Unlike
        <code style="\${t.monoSm}">mms-select</code>, this is not backed by a native
        &lt;select&gt; — multi-selection requires custom markup, so keyboard model and ARIA
        wiring are hand-built to the WAI-ARIA combobox/listbox pattern.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The trigger displays a count ("N selected") once any option is chosen, rather than
        listing selected labels inline.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-multi-select
          label="Programs"
          .options=\${programOptions}
        ></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Select All -->
      <h2 style="\${t.h2}">Select all</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">show-select-all</code> adds a tri-state row above the list —
        checked when every visible option is selected, dashed/indeterminate when some are,
        empty when none are.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-multi-select
          label="Programs"
          show-select-all
          .value=\${['medicaid']}
          .options=\${programOptions}
        ></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Searchable -->
      <h2 style="\${t.h2}">Searchable</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">searchable</code> adds a filter input inside the dropdown
        panel for long option lists. Focus moves to the search input automatically when the
        panel opens.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-multi-select
          label="State"
          searchable
          search-placeholder="Search states..."
          .options=\${stateOptions}
        ></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Selected at top -->
      <h2 style="\${t.h2}">Selected sorted to top</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">selected-at-top</code> re-sorts selected options above
        unselected ones on every render, so a long selection stays visible without scrolling
        back through the full list.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-multi-select
          label="State"
          searchable
          selected-at-top
          .value=\${['ca', 'ga']}
          .options=\${stateOptions}
        ></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size Variants -->
      <h2 style="\${t.h2}">Size variants</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Three sizes are available: <code style="\${t.monoSm}">sm</code>, <code style="\${t.monoSm}">md</code> (default), and <code style="\${t.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px; margin-bottom: 2rem;">
        <mms-multi-select label="Small" size="sm" .options=\${programOptions}></mms-multi-select>
        <mms-multi-select label="Medium (default)" size="md" .options=\${programOptions}></mms-multi-select>
        <mms-multi-select label="Large" size="lg" .options=\${programOptions}></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Validation States -->
      <h2 style="\${t.h2}">Required &amp; error states</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">required</code> adds an asterisk indicator; <code style="\${t.monoSm}">error</code>
        swaps helper text for the error message and announces it immediately via
        <code style="\${t.monoSm}">role="alert"</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px; margin-bottom: 2rem;">
        <mms-multi-select label="Programs" required .options=\${programOptions}></mms-multi-select>
        <mms-multi-select
          label="Programs"
          error
          error-text="Select at least one program."
          required
          .options=\${programOptions}
        ></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Non-interactive states -->
      <h2 style="\${t.h2}">Readonly &amp; disabled states</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Readonly displays the current selection but blocks changes. Disabled prevents all
        interaction and dims the appearance.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px; margin-bottom: 2rem;">
        <mms-multi-select
          label="Programs"
          readonly
          .value=\${['medicaid', 'chip']}
          .options=\${programOptions}
        ></mms-multi-select>
        <mms-multi-select
          label="Programs"
          disabled
          .value=\${['medicaid']}
          .options=\${programOptions}
        ></mms-multi-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Compact Density -->
      <h2 style="\${t.h2}">Compact density</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">data-density="compact"</code> for reduced padding on the
        trigger, search field, and option rows.
      </p>

      <div style="display: flex; gap: 2rem; max-width: 600px; margin-bottom: 2rem;">
        <div style="flex: 1;">
          <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>Default</strong></p>
          <mms-multi-select label="Programs" .options=\${programOptions}></mms-multi-select>
        </div>
        <div style="flex: 1;">
          <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>Compact</strong></p>
          <mms-multi-select label="Programs" data-density="compact" .options=\${programOptions}></mms-multi-select>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Why a custom combobox?</strong> There is no native HTML element for
          multi-selection with search and select-all. This component follows the WAI-ARIA
          <code style="\${t.monoSm}">combobox</code> (trigger) + <code style="\${t.monoSm}">listbox</code>
          (panel, <code style="\${t.monoSm}">aria-multiselectable="true"</code>) pattern, with
          hand-built keyboard support since the browser cannot supply it automatically.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['multi-select'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Trigger focus:</strong> Announces label, "combo box", collapsed/expanded state, and current display text ("N selected" or the placeholder)</li>
        <li style="margin-bottom: 0.5rem;"><strong>Option focus:</strong> Announces "option", the option's label, and selected/not selected</li>
        <li style="margin-bottom: 0.5rem;"><strong>Select-all focus:</strong> Announces the select-all label and selected/not selected. The indeterminate ("some selected") visual state is presentational only — <code style="\${t.monoSm}">role="option"</code> has no native mixed/tri-state value to expose, unlike a checkbox's <code style="\${t.monoSm}">aria-checked="mixed"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="\${t.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces the error message via <code style="\${t.monoSm}">role="alert"</code> when error state activates</li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="\${t.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="\${t.h3}">Keyboard Navigation</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; width: 180px;">Key</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the trigger (closes the panel if open)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Open the dropdown panel (on the trigger, when closed)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus between options (including the select-all row), non-wrapping</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggle the focused option (or select-all)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close the panel and return focus to the trigger</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;">Type in search field</td>
            <td style="padding: 0.5rem 0.75rem;">Filters the option list (when <code style="\${t.monoSm}">searchable</code>)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Visual
    size: 'md',
    state: 'default',
    disabled: false,
    readonly: false,
    // Content
    label: 'Select programs',
    placeholder: 'Select options',
    helperText: '',
    options: programOptions,
    // Behavior
    searchable: false,
    searchPlaceholder: 'Search...',
    showSelectAll: false,
    selectAllLabel: 'Select All',
    selectedAtTop: false,
    emptySearchText: 'No results found',
    // Form
    name: 'myMultiSelect',
    value: [],
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
            min-height: 300px;
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
      description: 'Shows selection but prevents changes',
      table: {
        category: 'Visual'
      }
    },
    // ── Content ───────────────────────────────────────────────
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label text displayed above the trigger',
      table: {
        category: 'Content'
      }
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder shown when no options are selected',
      table: {
        category: 'Content'
      }
    },
    helperText: {
      name: 'Helper text',
      control: 'text',
      description: 'Supplementary guidance below the trigger',
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
    // ── Behavior ──────────────────────────────────────────────
    searchable: {
      name: 'Searchable',
      control: 'boolean',
      description: 'Adds a filter input inside the dropdown panel',
      table: {
        category: 'Behavior'
      }
    },
    searchPlaceholder: {
      name: 'Search placeholder',
      control: 'text',
      description: 'Placeholder text for the search input',
      table: {
        category: 'Behavior'
      }
    },
    showSelectAll: {
      name: 'Show select all',
      control: 'boolean',
      description: 'Adds a tri-state select-all row above the option list',
      table: {
        category: 'Behavior'
      }
    },
    selectAllLabel: {
      name: 'Select all label',
      control: 'text',
      description: 'Label text for the select-all row',
      table: {
        category: 'Behavior'
      }
    },
    selectedAtTop: {
      name: 'Selected at top',
      control: 'boolean',
      description: 'Re-sorts selected options above unselected ones',
      table: {
        category: 'Behavior'
      }
    },
    emptySearchText: {
      name: 'Empty search text',
      control: 'text',
      description: 'Message shown when a search query matches no options',
      table: {
        category: 'Behavior'
      }
    },
    // ── Form ──────────────────────────────────────────────────
    name: {
      name: 'Name',
      control: 'text',
      description: 'HTML \`name\` attribute for form association',
      table: {
        category: 'Form'
      }
    },
    value: {
      name: 'Value',
      control: 'object',
      description: 'Array of currently selected option values.',
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
          args: Record<string, string | boolean | unknown[]>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.label) attrs.push(\`label="\${a.label}"\`);
          if (a.placeholder) attrs.push(\`placeholder="\${a.placeholder}"\`);
          if (a.helperText) attrs.push(\`helper-text="\${a.helperText}"\`);
          if (a.name) attrs.push(\`name="\${a.name}"\`);
          if (a.state && a.state !== 'default') attrs.push(\`state="\${a.state}"\`);
          if (a.searchable) attrs.push('searchable');
          if (a.searchPlaceholder && a.searchable) attrs.push(\`search-placeholder="\${a.searchPlaceholder}"\`);
          if (a.showSelectAll) attrs.push('show-select-all');
          if (a.selectAllLabel && a.showSelectAll) attrs.push(\`select-all-label="\${a.selectAllLabel}"\`);
          if (a.selectedAtTop) attrs.push('selected-at-top');
          if (a.showTooltip) attrs.push('show-tooltip');
          if (a.tooltipText && a.showTooltip) attrs.push(\`tooltip-text="\${a.tooltipText}"\`);
          if (a.error) attrs.push('error');
          if (a.errorText && a.error) attrs.push(\`error-text="\${a.errorText}"\`);
          if (a.required) attrs.push('required');
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.disabled) attrs.push('disabled');
          if (a.readonly) attrs.push('readonly');
          if (a.density === 'compact') attrs.push('data-density="compact"');

          // Note: .options and .value must be set programmatically, not via attribute
          return \`<mms-multi-select\\n  \${attrs.join('\\n  ')}\\n  .options=\\\${options}\\n  .value=\\\${value}\\n></mms-multi-select>\`;
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
    value: string[] | string;
    size: string;
    state: string;
    disabled: boolean;
    readonly: boolean;
    searchable: boolean;
    searchPlaceholder: string;
    showSelectAll: boolean;
    selectAllLabel: string;
    selectedAtTop: boolean;
    emptySearchText: string;
    options: MultiSelectOption[] | string;
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
    let parsedValue = args.value;
    if (typeof args.value === 'string') {
      try {
        parsedValue = JSON.parse(args.value);
      } catch {
        parsedValue = [];
      }
    }
    if (!Array.isArray(parsedValue)) {
      parsedValue = [];
    }
    return html\`
      <mms-multi-select
        label=\${args.label}
        placeholder=\${args.placeholder}
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
        ?searchable=\${args.searchable}
        search-placeholder=\${args.searchPlaceholder}
        ?show-select-all=\${args.showSelectAll}
        select-all-label=\${args.selectAllLabel}
        ?selected-at-top=\${args.selectedAtTop}
        empty-search-text=\${args.emptySearchText}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
        .options=\${parsedOptions}
        .value=\${parsedValue}
      ></mms-multi-select>
    \`;
  }
}`,...j.parameters?.docs?.source}}},M=[`Overview`,`PlaygroundStory`]}));N();export{A as Overview,j as PlaygroundStory,M as __namedExportsOrder,w as default,N as n,C as t};