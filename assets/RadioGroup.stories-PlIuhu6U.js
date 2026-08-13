import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,n as r,p as i,s as a,t as o}from"./lit-aQ4dERgF.js";import{f as s,m as c,n as l,o as u,t as d,u as f}from"./decorate-CFSc4vnv.js";import{n as p,r as m,t as h}from"./theme-constraints-D-yar-OC.js";import{a as g,o as _,r as v,t as y}from"./a11y-outcome-DlWsiEtn.js";import{t as b}from"./mms-radio.component-Ddmad0t8.js";var x,S=e((()=>{o(),u(),b(),l(),x=class extends r{constructor(...e){super(...e),this.label=``,this.helperText=``,this.name=``,this.value=``,this.showTooltip=!1,this.tooltipText=``,this.colorScheme=`primary`,this.size=`md`,this.orientation=`vertical`,this.disabled=!1,this.readonly=!1,this.error=!1,this.errorText=``,this.required=!1,this._radios=[],this._handleRadioChange=e=>{let t=e.target;if(t.tagName!==`MMS-RADIO`)return;let n=t.getAttribute(`value`)||``;n!==this.value&&(this.value=n,this._propagateToRadios(),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0})))},this._handleKeyDown=e=>{if(this.disabled||this.readonly)return;let t=this._radios.filter(e=>!e.hasAttribute(`disabled`));if(t.length===0)return;let n=this._getSelectedIndex(),r=n;switch(e.key){case`ArrowDown`:case`ArrowRight`:e.preventDefault(),r=n<0?0:(n+1)%t.length;break;case`ArrowUp`:case`ArrowLeft`:e.preventDefault(),r=n<0?t.length-1:(n-1+t.length)%t.length;break;case` `:case`Enter`:n<0&&(e.preventDefault(),r=0);break;default:return}if(r!==n&&t[r]){let e=t[r].getAttribute(`value`)||``;this.value=e,this._propagateToRadios(),t[r].focus(),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0}))}}}static{this.styles=i`
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
       LEGEND — Group label with optional required indicator
       ═══════════════════════════════════════════════════════════════════════ */
    .legend {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs2);
      font-size: var(--type-body-md-size);
      line-height: var(--type-body-md-line-height);
      color: var(--color-text-default);
    }

    :host([disabled]) .legend {
      color: var(--color-disabled-text);
    }

    .required-indicator {
      color: var(--color-input-border-error);
    }

    /* ═══════════════════════════════════════════════════════════════════════
       TOOLTIP ICON (Shell) — Visual placeholder until mms-tooltip is built
       ═══════════════════════════════════════════════════════════════════════ */
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
       ITEMS CONTAINER — Vertical or horizontal stack of radios
       ═══════════════════════════════════════════════════════════════════════ */
    .items-container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs2);
    }

    :host([orientation='horizontal']) .items-container {
      flex-direction: row;
      flex-wrap: wrap;
      gap: var(--spacing-md1);
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
       Compact density reduces vertical spacing only.
       Horizontal gap stays fixed at 16px regardless of density.
       ═══════════════════════════════════════════════════════════════════════ */
    :host([data-density='compact']) {
      gap: var(--spacing-xs1);
    }

    :host([data-density='compact']) .items-container {
      gap: var(--spacing-xs1);
    }

    :host([data-density='compact'][orientation='horizontal']) .items-container {
      gap: var(--spacing-md1);  /* Horizontal gap unaffected by density */
    }
  `}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this._handleKeyDown)}updated(e){super.updated(e),(e.has(`colorScheme`)||e.has(`size`)||e.has(`disabled`)||e.has(`readonly`)||e.has(`name`)||e.has(`value`))&&this._propagateToRadios()}_getRadios(){let e=this.shadowRoot?.querySelector(`slot`);return e?e.assignedElements({flatten:!0}).filter(e=>e.tagName===`MMS-RADIO`):[]}_propagateToRadios(){let e=this._getRadios();this._radios=e,e.forEach((e,t)=>{e.setAttribute(`color-scheme`,this.colorScheme),e.setAttribute(`size`,this.size),this.disabled?e.setAttribute(`disabled`,``):e.removeAttribute(`disabled`),this.readonly?e.setAttribute(`readonly`,``):e.removeAttribute(`readonly`),this.name&&e.setAttribute(`field-name`,this.name);let n=e.getAttribute(`value`)||``;this.value&&n===this.value?e.setAttribute(`selected`,``):e.removeAttribute(`selected`);let r=this._getSelectedIndex();t===(r>=0?r:0)&&!this.disabled?e.removeAttribute(`tabindex`):e.setAttribute(`tabindex`,`-1`)})}_getSelectedIndex(){return this._radios.findIndex(e=>e.getAttribute(`value`)===this.value)}_handleSlotChange(){this._propagateToRadios()}render(){return a`
      ${this.label?a`
            <div class="legend">
              <span id="group-label">${this.label}</span>
              ${this.required?a`<span class="required-indicator" aria-hidden="true">*</span>`:n}
              ${this.showTooltip?a`
                    <svg
                      class="tooltip-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="${this.tooltipText||`More information`}"
                      role="img"
                    >
                      <path
                        d="M8 1.33334C4.32 1.33334 1.33334 4.32001 1.33334 8.00001C1.33334 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00001C14.6667 4.32001 11.68 1.33334 8 1.33334ZM8.66667 11.3333H7.33334V7.33334H8.66667V11.3333ZM8.66667 6.00001H7.33334V4.66668H8.66667V6.00001Z"
                        fill="currentColor"
                      />
                    </svg>
                  `:n}
            </div>
          `:n}

      <div
        class="items-container"
        role="radiogroup"
        aria-labelledby=${this.label?`group-label`:n}
        aria-required=${this.required?`true`:n}
        aria-invalid=${this.error?`true`:n}
        aria-describedby=${this.error&&this.errorText?`error-text`:this.helperText?`helper-text`:n}
        @change=${this._handleRadioChange}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>

      ${this.helperText&&!this.error?a`<span id="helper-text" class="helper-text">${this.helperText}</span>`:n}

      ${this.error&&this.errorText?a`
            <span id="error-text" class="error-row" role="alert">
              <svg
                class="error-icon"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8 1.33334C4.32 1.33334 1.33334 4.32001 1.33334 8.00001C1.33334 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00001C14.6667 4.32001 11.68 1.33334 8 1.33334ZM8.66667 11.3333H7.33334V10H8.66667V11.3333ZM8.66667 8.66668H7.33334V4.66668H8.66667V8.66668Z"
                  fill="currentColor"
                />
              </svg>
              ${this.errorText}
            </span>
          `:n}
    `}},d([s({type:String})],x.prototype,`label`,void 0),d([s({type:String,attribute:`helper-text`})],x.prototype,`helperText`,void 0),d([s({type:String})],x.prototype,`name`,void 0),d([s({type:String,reflect:!0})],x.prototype,`value`,void 0),d([s({type:Boolean,reflect:!0,attribute:`show-tooltip`})],x.prototype,`showTooltip`,void 0),d([s({type:String,attribute:`tooltip-text`})],x.prototype,`tooltipText`,void 0),d([s({type:String,reflect:!0,attribute:`color-scheme`})],x.prototype,`colorScheme`,void 0),d([s({type:String,reflect:!0})],x.prototype,`size`,void 0),d([s({type:String,reflect:!0})],x.prototype,`orientation`,void 0),d([s({type:Boolean,reflect:!0})],x.prototype,`disabled`,void 0),d([s({type:Boolean,reflect:!0})],x.prototype,`readonly`,void 0),d([s({type:Boolean,reflect:!0})],x.prototype,`error`,void 0),d([s({type:String,attribute:`error-text`})],x.prototype,`errorText`,void 0),d([s({type:Boolean,reflect:!0})],x.prototype,`required`,void 0),d([f()],x.prototype,`_radios`,void 0),x=d([c(`mms-radio-group`)],x)})),C=t({Overview:()=>O,PlaygroundStory:()=>k,__namedExportsOrder:()=>A,default:()=>w}),w,T,E,D,O,k,A,j=e((()=>{o(),S(),b(),p(),g(),y(),w={title:`Forms/Radio Group`,tags:[`!autodocs`]},T={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},E=`680px`,D=`960px`,O={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${D}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${T.h1}">Radio Group</h1>
      <p style="${T.body} opacity: 0.85; max-width: ${E}; margin-bottom: 2rem;">
        A group wrapper for radio elements that provides single-selection behavior, arrow key navigation,
        shared label, helper text, validation, and propagates visual properties to all children.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${T.h2}">Basic usage</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        Wrap multiple <code style="${T.monoSm}">&lt;mms-radio&gt;</code> elements inside a group 
        with a shared label. Only one radio can be selected at a time.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio-group label="Preferred contact method" value="email">
          <mms-radio label="Email" value="email"></mms-radio>
          <mms-radio label="Phone" value="phone"></mms-radio>
          <mms-radio label="SMS" value="sms"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="${T.h2}">With helper text</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance for the entire group.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio-group 
          label="Notification frequency"
          helper-text="Choose how often you'd like to receive updates."
          value="weekly"
        >
          <mms-radio label="Daily" value="daily"></mms-radio>
          <mms-radio label="Weekly" value="weekly"></mms-radio>
          <mms-radio label="Monthly" value="monthly"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="${T.h2}">With tooltip</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio-group 
          label="Coverage level"
          show-tooltip
          tooltip-text="Select the level of coverage that best fits your needs."
          value="standard"
        >
          <mms-radio label="Basic" value="basic"></mms-radio>
          <mms-radio label="Standard" value="standard"></mms-radio>
          <mms-radio label="Premium" value="premium"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Horizontal Orientation -->
      <h2 style="${T.h2}">Horizontal orientation</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        Use <code style="${T.monoSm}">orientation="horizontal"</code> for inline layouts.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio-group 
          label="File format"
          orientation="horizontal"
          value="pdf"
        >
          <mms-radio label="PDF" value="pdf"></mms-radio>
          <mms-radio label="CSV" value="csv"></mms-radio>
          <mms-radio label="Excel" value="excel"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Group -->
      <h2 style="${T.h2}">Required group</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        The <code style="${T.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio-group 
          label="Payment method"
          required
        >
          <mms-radio label="Credit card" value="credit"></mms-radio>
          <mms-radio label="Bank transfer" value="bank"></mms-radio>
          <mms-radio label="PayPal" value="paypal"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="${T.h2}">Error state</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        The <code style="${T.monoSm}">error</code> prop displays validation feedback for the entire group.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio-group 
          label="Select an option"
          error
          error-text="Please select one option to continue."
          required
        >
          <mms-radio label="Option A" value="a"></mms-radio>
          <mms-radio label="Option B" value="b"></mms-radio>
          <mms-radio label="Option C" value="c"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="${T.h2}">Color schemes</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        The <code style="${T.monoSm}">color-scheme</code> prop propagates to all child radios.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-radio-group label="Primary" color-scheme="primary" value="opt1">
            <mms-radio label="Option 1" value="opt1"></mms-radio>
            <mms-radio label="Option 2" value="opt2"></mms-radio>
          </mms-radio-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-radio-group label="Secondary" color-scheme="secondary" value="opt1">
            <mms-radio label="Option 1" value="opt1"></mms-radio>
            <mms-radio label="Option 2" value="opt2"></mms-radio>
          </mms-radio-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-radio-group label="Accent" color-scheme="accent" value="opt1">
            <mms-radio label="Option 1" value="opt1"></mms-radio>
            <mms-radio label="Option 2" value="opt2"></mms-radio>
          </mms-radio-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-radio-group label="Onyx" color-scheme="onyx" value="opt1">
            <mms-radio label="Option 1" value="opt1"></mms-radio>
            <mms-radio label="Option 2" value="opt2"></mms-radio>
          </mms-radio-group>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="${T.h2}">Sizes</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        The <code style="${T.monoSm}">size</code> prop propagates to all child radios.
      </p>

      <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
        <mms-radio-group label="Small" size="sm" value="a">
          <mms-radio label="Option A" value="a"></mms-radio>
          <mms-radio label="Option B" value="b"></mms-radio>
        </mms-radio-group>

        <mms-radio-group label="Medium" size="md" value="a">
          <mms-radio label="Option A" value="a"></mms-radio>
          <mms-radio label="Option B" value="b"></mms-radio>
        </mms-radio-group>

        <mms-radio-group label="Large" size="lg" value="a">
          <mms-radio label="Option A" value="a"></mms-radio>
          <mms-radio label="Option B" value="b"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled & Readonly -->
      <h2 style="${T.h2}">Disabled &amp; read-only</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        These states propagate from the group to all child radios.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${T.h3}">Disabled</p>
          <mms-radio-group label="Disabled group" disabled value="opt2">
            <mms-radio label="Option 1" value="opt1"></mms-radio>
            <mms-radio label="Option 2" value="opt2"></mms-radio>
          </mms-radio-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${T.h3}">Read-only</p>
          <mms-radio-group label="Read-only group" readonly value="opt2">
            <mms-radio label="Option 1" value="opt1"></mms-radio>
            <mms-radio label="Option 2" value="opt2"></mms-radio>
          </mms-radio-group>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${T.h2}">Accessibility</h2>

      <h3 style="${T.h3}">WCAG 2.2 AA Compliance</h3>
      ${v(_[`radio-group`].rows)}

      <h3 style="${T.h3}">Screen Reader Behavior</h3>
      <ul style="${T.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Group entry:</strong> Announces group label, then "radio group"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Radio focus:</strong> Announces radio label, position (e.g., "1 of 3"), and selection state</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="${T.monoSm}">required</code> prop is set on group</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces group error message via <code style="${T.monoSm}">role="alert"</code></li>
        <li><strong>Helper text:</strong> Read as part of group description via <code style="${T.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${T.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to/from the radio group (single tab stop)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move selection between radios with wrap-around</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Select focused radio (if none selected, selects first)</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jump to first / last radio in group</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},k={name:`Playground`,tags:[`!dev`],args:{label:`Select an option`,helperText:`Choose your preferred option.`,name:``,showTooltip:!1,tooltipText:`Additional guidance for this field`,error:!1,errorText:`Please select an option.`,required:!1,value:``,colorScheme:`primary`,size:`md`,orientation:`vertical`,disabled:!1,readonly:!1,itemCount:3,option1:`Option A`,option2:`Option B`,option3:`Option C`,option4:`Option D`,option5:`Option E`,theme:`maximus`,density:`default`},decorators:[e=>a`
        <div
          style="
            min-height: 200px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          ${e()}
        </div>
      `],argTypes:{label:{name:`Label`,control:`text`,description:`Group label displayed above radios`,table:{category:`Component Props`}},helperText:{name:`Helper Text`,control:`text`,description:`Supplementary guidance displayed below radios`,table:{category:`Component Props`}},name:{name:`Name`,control:`text`,description:`Form field name for the group`,table:{category:`Component Props`}},showTooltip:{name:`Show Tooltip`,control:`boolean`,description:`Shows info icon next to label (tooltip dialog pending)`,table:{category:`Component Props`}},tooltipText:{name:`Tooltip Text`,control:`text`,description:`Tooltip content (stored for future mms-tooltip integration)`,table:{category:`Component Props`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and shows error message`,table:{category:`Component Props`}},errorText:{name:`Error Text`,control:`text`,description:`Message displayed when error is true`,table:{category:`Component Props`}},required:{name:`Required`,control:`boolean`,description:`Marks field group as required`,table:{category:`Component Props`}},value:{name:`Value`,control:`text`,description:`Pre-selected radio value. Must match a child mms-radio's value attribute (e.g., "option1", "option2"). Leave empty for no initial selection.`,table:{category:`Component Props`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Brand color propagated to all radios`,table:{category:`Propagated Props`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Size propagated to all radios`,table:{category:`Propagated Props`}},orientation:{name:`Orientation`,control:`select`,options:[`vertical`,`horizontal`],description:`Layout direction for radio items`,table:{category:`Propagated Props`}},disabled:{name:`Disabled`,control:`boolean`,description:`Disables all radios in the group`,table:{category:`Propagated Props`}},readonly:{name:`Read-only`,control:`boolean`,description:`Makes all radios readonly`,table:{category:`Propagated Props`}},itemCount:{name:`Item Count`,control:{type:`range`,min:2,max:5,step:1},description:`Number of radio items (demo only — real groups can have any number)`,table:{category:`Demo Controls`}},option1:{name:`Option 1`,control:`text`,description:`Label for first radio`,table:{category:`Demo Controls`}},option2:{name:`Option 2`,control:`text`,description:`Label for second radio`,table:{category:`Demo Controls`}},option3:{name:`Option 3`,control:`text`,description:`Label for third radio`,table:{category:`Demo Controls`}},option4:{name:`Option 4`,control:`text`,description:`Label for fourth radio`,table:{category:`Demo Controls`}},option5:{name:`Option 5`,control:`text`,description:`Label for fifth radio`,table:{category:`Demo Controls`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`uss-oh-dvs`,`default`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Spacing density`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];n.label&&r.push(`label="${n.label}"`),n.value&&r.push(`value="${n.value}"`),n.helperText&&!n.error&&r.push(`helper-text="${n.helperText}"`),n.name&&r.push(`name="${n.name}"`),n.showTooltip&&r.push(`show-tooltip`),n.tooltipText&&n.showTooltip&&r.push(`tooltip-text="${n.tooltipText}"`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.size!==`md`&&r.push(`size="${n.size}"`),n.orientation!==`vertical`&&r.push(`orientation="${n.orientation}"`),n.disabled&&r.push(`disabled`),n.readonly&&r.push(`readonly`);let i=[],a=n.itemCount,o=[n.option1,n.option2,n.option3,n.option4,n.option5];for(let e=0;e<a;e++)i.push(`  <mms-radio label="${o[e]}" value="option${e+1}"></mms-radio>`);return`<mms-radio-group\n  ${r.join(`
  `)}\n>\n${i.join(`
`)}\n</mms-radio-group>`},language:`html`}}},render:e=>{let t=m(e.theme,e.colorScheme),r=h(e.theme,e.colorScheme);if(!t){let t=r===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,n=r===2?`Lacks step 10 (hover state). Use for branded text or badges, not radios.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return a`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 440px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            <strong>${t}:</strong> ${n}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
            See <em>Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      `}let i=[e.option1,e.option2,e.option3,e.option4,e.option5].slice(0,e.itemCount);return a`
      <mms-radio-group
        label=${e.label}
        value=${e.value}
        helper-text=${e.helperText}
        name=${e.name||n}
        ?show-tooltip=${e.showTooltip}
        tooltip-text=${e.tooltipText}
        ?error=${e.error}
        error-text=${e.errorText}
        ?required=${e.required}
        color-scheme=${e.colorScheme}
        size=${e.size}
        orientation=${e.orientation}
        ?disabled=${e.disabled}
        ?readonly=${e.readonly}
        data-density=${e.density}
      >
        ${i.map((e,t)=>a`
          <mms-radio label=${e} value=${`option`+(t+1)}></mms-radio>
        `)}
      </mms-radio-group>
    `}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Radio Group</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A group wrapper for radio elements that provides single-selection behavior, arrow key navigation,
        shared label, helper text, validation, and propagates visual properties to all children.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Wrap multiple <code style="\${t.monoSm}">&lt;mms-radio&gt;</code> elements inside a group 
        with a shared label. Only one radio can be selected at a time.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio-group label="Preferred contact method" value="email">
          <mms-radio label="Email" value="email"></mms-radio>
          <mms-radio label="Phone" value="phone"></mms-radio>
          <mms-radio label="SMS" value="sms"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance for the entire group.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio-group 
          label="Notification frequency"
          helper-text="Choose how often you'd like to receive updates."
          value="weekly"
        >
          <mms-radio label="Daily" value="daily"></mms-radio>
          <mms-radio label="Weekly" value="weekly"></mms-radio>
          <mms-radio label="Monthly" value="monthly"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="\${t.h2}">With tooltip</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio-group 
          label="Coverage level"
          show-tooltip
          tooltip-text="Select the level of coverage that best fits your needs."
          value="standard"
        >
          <mms-radio label="Basic" value="basic"></mms-radio>
          <mms-radio label="Standard" value="standard"></mms-radio>
          <mms-radio label="Premium" value="premium"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Horizontal Orientation -->
      <h2 style="\${t.h2}">Horizontal orientation</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">orientation="horizontal"</code> for inline layouts.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio-group 
          label="File format"
          orientation="horizontal"
          value="pdf"
        >
          <mms-radio label="PDF" value="pdf"></mms-radio>
          <mms-radio label="CSV" value="csv"></mms-radio>
          <mms-radio label="Excel" value="excel"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Group -->
      <h2 style="\${t.h2}">Required group</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio-group 
          label="Payment method"
          required
        >
          <mms-radio label="Credit card" value="credit"></mms-radio>
          <mms-radio label="Bank transfer" value="bank"></mms-radio>
          <mms-radio label="PayPal" value="paypal"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">error</code> prop displays validation feedback for the entire group.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio-group 
          label="Select an option"
          error
          error-text="Please select one option to continue."
          required
        >
          <mms-radio label="Option A" value="a"></mms-radio>
          <mms-radio label="Option B" value="b"></mms-radio>
          <mms-radio label="Option C" value="c"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="\${t.h2}">Color schemes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">color-scheme</code> prop propagates to all child radios.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-radio-group label="Primary" color-scheme="primary" value="opt1">
            <mms-radio label="Option 1" value="opt1"></mms-radio>
            <mms-radio label="Option 2" value="opt2"></mms-radio>
          </mms-radio-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-radio-group label="Secondary" color-scheme="secondary" value="opt1">
            <mms-radio label="Option 1" value="opt1"></mms-radio>
            <mms-radio label="Option 2" value="opt2"></mms-radio>
          </mms-radio-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-radio-group label="Accent" color-scheme="accent" value="opt1">
            <mms-radio label="Option 1" value="opt1"></mms-radio>
            <mms-radio label="Option 2" value="opt2"></mms-radio>
          </mms-radio-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-radio-group label="Onyx" color-scheme="onyx" value="opt1">
            <mms-radio label="Option 1" value="opt1"></mms-radio>
            <mms-radio label="Option 2" value="opt2"></mms-radio>
          </mms-radio-group>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">size</code> prop propagates to all child radios.
      </p>

      <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
        <mms-radio-group label="Small" size="sm" value="a">
          <mms-radio label="Option A" value="a"></mms-radio>
          <mms-radio label="Option B" value="b"></mms-radio>
        </mms-radio-group>

        <mms-radio-group label="Medium" size="md" value="a">
          <mms-radio label="Option A" value="a"></mms-radio>
          <mms-radio label="Option B" value="b"></mms-radio>
        </mms-radio-group>

        <mms-radio-group label="Large" size="lg" value="a">
          <mms-radio label="Option A" value="a"></mms-radio>
          <mms-radio label="Option B" value="b"></mms-radio>
        </mms-radio-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled & Readonly -->
      <h2 style="\${t.h2}">Disabled &amp; read-only</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        These states propagate from the group to all child radios.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Disabled</p>
          <mms-radio-group label="Disabled group" disabled value="opt2">
            <mms-radio label="Option 1" value="opt1"></mms-radio>
            <mms-radio label="Option 2" value="opt2"></mms-radio>
          </mms-radio-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Read-only</p>
          <mms-radio-group label="Read-only group" readonly value="opt2">
            <mms-radio label="Option 1" value="opt1"></mms-radio>
            <mms-radio label="Option 2" value="opt2"></mms-radio>
          </mms-radio-group>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['radio-group'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Group entry:</strong> Announces group label, then "radio group"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Radio focus:</strong> Announces radio label, position (e.g., "1 of 3"), and selection state</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="\${t.monoSm}">required</code> prop is set on group</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces group error message via <code style="\${t.monoSm}">role="alert"</code></li>
        <li><strong>Helper text:</strong> Read as part of group description via <code style="\${t.monoSm}">aria-describedby</code></li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to/from the radio group (single tab stop)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move selection between radios with wrap-around</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Select focused radio (if none selected, selects first)</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jump to first / last radio in group</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Component Props
    label: 'Select an option',
    helperText: 'Choose your preferred option.',
    name: '',
    showTooltip: false,
    tooltipText: 'Additional guidance for this field',
    error: false,
    errorText: 'Please select an option.',
    required: false,
    value: '',
    // Propagated Props
    colorScheme: 'primary',
    size: 'md',
    orientation: 'vertical',
    disabled: false,
    readonly: false,
    // Demo Controls
    itemCount: 3,
    option1: 'Option A',
    option2: 'Option B',
    option3: 'Option C',
    option4: 'Option D',
    option5: 'Option E',
    // Global Props
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div
          style="
            min-height: 200px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          \${story()}
        </div>
      \`;
  }],
  argTypes: {
    // ── Component Props ───────────────────────────────────────
    label: {
      name: 'Label',
      control: 'text',
      description: 'Group label displayed above radios',
      table: {
        category: 'Component Props'
      }
    },
    helperText: {
      name: 'Helper Text',
      control: 'text',
      description: 'Supplementary guidance displayed below radios',
      table: {
        category: 'Component Props'
      }
    },
    name: {
      name: 'Name',
      control: 'text',
      description: 'Form field name for the group',
      table: {
        category: 'Component Props'
      }
    },
    showTooltip: {
      name: 'Show Tooltip',
      control: 'boolean',
      description: 'Shows info icon next to label (tooltip dialog pending)',
      table: {
        category: 'Component Props'
      }
    },
    tooltipText: {
      name: 'Tooltip Text',
      control: 'text',
      description: 'Tooltip content (stored for future mms-tooltip integration)',
      table: {
        category: 'Component Props'
      }
    },
    error: {
      name: 'Error',
      control: 'boolean',
      description: 'Displays error styling and shows error message',
      table: {
        category: 'Component Props'
      }
    },
    errorText: {
      name: 'Error Text',
      control: 'text',
      description: 'Message displayed when error is true',
      table: {
        category: 'Component Props'
      }
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks field group as required',
      table: {
        category: 'Component Props'
      }
    },
    value: {
      name: 'Value',
      control: 'text',
      description: 'Pre-selected radio value. Must match a child mms-radio\\'s value attribute (e.g., "option1", "option2"). Leave empty for no initial selection.',
      table: {
        category: 'Component Props'
      }
    },
    // ── Propagated Props ──────────────────────────────────────
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Brand color propagated to all radios',
      table: {
        category: 'Propagated Props'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size propagated to all radios',
      table: {
        category: 'Propagated Props'
      }
    },
    orientation: {
      name: 'Orientation',
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout direction for radio items',
      table: {
        category: 'Propagated Props'
      }
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables all radios in the group',
      table: {
        category: 'Propagated Props'
      }
    },
    readonly: {
      name: 'Read-only',
      control: 'boolean',
      description: 'Makes all radios readonly',
      table: {
        category: 'Propagated Props'
      }
    },
    // ── Demo Controls ─────────────────────────────────────────
    itemCount: {
      name: 'Item Count',
      control: {
        type: 'range',
        min: 2,
        max: 5,
        step: 1
      },
      description: 'Number of radio items (demo only — real groups can have any number)',
      table: {
        category: 'Demo Controls'
      }
    },
    option1: {
      name: 'Option 1',
      control: 'text',
      description: 'Label for first radio',
      table: {
        category: 'Demo Controls'
      }
    },
    option2: {
      name: 'Option 2',
      control: 'text',
      description: 'Label for second radio',
      table: {
        category: 'Demo Controls'
      }
    },
    option3: {
      name: 'Option 3',
      control: 'text',
      description: 'Label for third radio',
      table: {
        category: 'Demo Controls'
      }
    },
    option4: {
      name: 'Option 4',
      control: 'text',
      description: 'Label for fourth radio',
      table: {
        category: 'Demo Controls'
      }
    },
    option5: {
      name: 'Option 5',
      control: 'text',
      description: 'Label for fifth radio',
      table: {
        category: 'Demo Controls'
      }
    },
    // ── Global Props ──────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'va-gov', 'uss-oh-dvs', 'default'],
      description: 'Brand theme',
      table: {
        category: 'Global Props'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Spacing density',
      table: {
        category: 'Global Props'
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
          if (a.value) attrs.push(\`value="\${a.value}"\`);
          if (a.helperText && !a.error) attrs.push(\`helper-text="\${a.helperText}"\`);
          if (a.name) attrs.push(\`name="\${a.name}"\`);
          if (a.showTooltip) attrs.push('show-tooltip');
          if (a.tooltipText && a.showTooltip) attrs.push(\`tooltip-text="\${a.tooltipText}"\`);
          if (a.error) attrs.push('error');
          if (a.errorText && a.error) attrs.push(\`error-text="\${a.errorText}"\`);
          if (a.required) attrs.push('required');
          if (a.colorScheme !== 'primary') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.orientation !== 'vertical') attrs.push(\`orientation="\${a.orientation}"\`);
          if (a.disabled) attrs.push('disabled');
          if (a.readonly) attrs.push('readonly');
          const radios: string[] = [];
          const count = a.itemCount as number;
          const options = [a.option1, a.option2, a.option3, a.option4, a.option5];
          for (let i = 0; i < count; i++) {
            radios.push(\`  <mms-radio label="\${options[i]}" value="option\${i + 1}"></mms-radio>\`);
          }
          return \`<mms-radio-group\\n  \${attrs.join('\\n  ')}\\n>\\n\${radios.join('\\n')}\\n</mms-radio-group>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    label: string;
    value: string;
    helperText: string;
    name: string;
    showTooltip: boolean;
    tooltipText: string;
    error: boolean;
    errorText: string;
    required: boolean;
    colorScheme: string;
    size: string;
    orientation: string;
    disabled: boolean;
    readonly: boolean;
    itemCount: number;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    option5: string;
    theme: string;
    density: string;
  }) => {
    // Validate colorScheme × theme combination using shared config
    const valid = isValidColorScheme(args.theme as Theme, args.colorScheme as ColorScheme);
    const tier = getPaletteTier(args.theme as Theme, args.colorScheme as ColorScheme);
    if (!valid) {
      const tierLabel = tier === 2 ? 'Tier 2 (Text + Surface)' : 'Tier 3 (Decorative)';
      const tierReason = tier === 2 ? 'Lacks step 10 (hover state). Use for branded text or badges, not radios.' : 'Lacks text contrast and hover states. Decorative backgrounds only.';
      return html\`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 440px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            <strong>\${tierLabel}:</strong> \${tierReason}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
            See <em>Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      \`;
    }
    const options = [args.option1, args.option2, args.option3, args.option4, args.option5];
    const radios = options.slice(0, args.itemCount);
    return html\`
      <mms-radio-group
        label=\${args.label}
        value=\${args.value}
        helper-text=\${args.helperText}
        name=\${args.name || nothing}
        ?show-tooltip=\${args.showTooltip}
        tooltip-text=\${args.tooltipText}
        ?error=\${args.error}
        error-text=\${args.errorText}
        ?required=\${args.required}
        color-scheme=\${args.colorScheme}
        size=\${args.size}
        orientation=\${args.orientation}
        ?disabled=\${args.disabled}
        ?readonly=\${args.readonly}
        data-density=\${args.density}
      >
        \${radios.map((label, i) => html\`
          <mms-radio label=\${label} value=\${'option' + (i + 1)}></mms-radio>
        \`)}
      </mms-radio-group>
    \`;
  }
}`,...k.parameters?.docs?.source}}},A=[`Overview`,`PlaygroundStory`]}));j();export{O as Overview,k as PlaygroundStory,A as __namedExportsOrder,w as default,j as n,C as t};