import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{f as s,m as c,n as l,o as u,t as d}from"./decorate-BdwtT8fT.js";import{t as f}from"./mms-icon.component-B0xp-9Qj.js";import{n as p,r as m,t as h}from"./theme-constraints-HoH5pJ5P.js";import{a as g,o as _,r as v,t as y}from"./a11y-outcome-DcpqwzN2.js";import{t as b}from"./mms-tooltip.component-DX3p7ZJI.js";import{t as x}from"./mms-checkbox.component-BlMCN4RV.js";var S,C=e((()=>{o(),u(),x(),f(),b(),l(),S=class extends i{constructor(...e){super(...e),this.label=``,this.helperText=``,this.name=``,this.showTooltip=!1,this.tooltipText=``,this.colorScheme=`primary`,this.size=`md`,this.disabled=!1,this.readonly=!1,this.error=!1,this.errorText=``,this.required=!1}static{this.styles=r`
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
       TOOLTIP ICON — Slotted trigger content for mms-tooltip
       ═══════════════════════════════════════════════════════════════════════ */
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
       ITEMS CONTAINER — Vertical stack of checkboxes
       ═══════════════════════════════════════════════════════════════════════ */
    .items-container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs2);
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
       Compact density reduces spacing between items for tighter UI
       ═══════════════════════════════════════════════════════════════════════ */
    :host([data-density='compact']) {
      gap: var(--spacing-xs1);
    }

    :host([data-density='compact']) .items-container {
      gap: var(--spacing-xs1);
    }
  `}_propagateToCheckboxes(){let e=this.shadowRoot?.querySelector(`slot`);e&&e.assignedElements({flatten:!0}).filter(e=>e.tagName===`MMS-CHECKBOX`).forEach(e=>{e.setAttribute(`color-scheme`,this.colorScheme),e.setAttribute(`size`,this.size),this.disabled?e.setAttribute(`disabled`,``):e.removeAttribute(`disabled`),this.readonly?e.setAttribute(`readonly`,``):e.removeAttribute(`readonly`),this.name&&e.setAttribute(`field-name`,this.name)})}_handleSlotChange(){this._propagateToCheckboxes()}updated(e){super.updated(e),(e.has(`colorScheme`)||e.has(`size`)||e.has(`disabled`)||e.has(`readonly`)||e.has(`name`))&&this._propagateToCheckboxes()}render(){return a`
      ${this.label?a`
            <div class="legend" role="group" aria-labelledby="group-label">
              <span id="group-label">${this.label}</span>
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

      <div class="items-container" role="group" aria-labelledby=${this.label?`group-label`:n}>
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>

      ${this.helperText&&!this.error?a`<span class="helper-text">${this.helperText}</span>`:n}

      ${this.error&&this.errorText?a`
            <span class="error-row" role="alert">
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
    `}},d([s({type:String})],S.prototype,`label`,void 0),d([s({type:String,attribute:`helper-text`})],S.prototype,`helperText`,void 0),d([s({type:String})],S.prototype,`name`,void 0),d([s({type:Boolean,reflect:!0,attribute:`show-tooltip`})],S.prototype,`showTooltip`,void 0),d([s({type:String,attribute:`tooltip-text`})],S.prototype,`tooltipText`,void 0),d([s({type:String,reflect:!0,attribute:`color-scheme`})],S.prototype,`colorScheme`,void 0),d([s({type:String,reflect:!0})],S.prototype,`size`,void 0),d([s({type:Boolean,reflect:!0})],S.prototype,`disabled`,void 0),d([s({type:Boolean,reflect:!0})],S.prototype,`readonly`,void 0),d([s({type:Boolean,reflect:!0})],S.prototype,`error`,void 0),d([s({type:String,attribute:`error-text`})],S.prototype,`errorText`,void 0),d([s({type:Boolean,reflect:!0})],S.prototype,`required`,void 0),S=d([c(`mms-checkbox-group`)],S)})),w=t({Overview:()=>k,PlaygroundStory:()=>A,__namedExportsOrder:()=>j,default:()=>T}),T,E,D,O,k,A,j,M=e((()=>{o(),C(),x(),p(),g(),y(),T={title:`Forms/Checkbox Group`,tags:[`!autodocs`]},E={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},D=`680px`,O=`960px`,k={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${O}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${E.h1}">Checkbox Group</h1>
      <p style="${E.body} opacity: 0.85; max-width: ${D}; margin-bottom: 2rem;">
        A group wrapper for checkbox elements that provides a shared label, helper text, validation, 
        and propagates visual properties (color scheme, size, disabled, readonly) to all children.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${E.h2}">Basic usage</h2>
      <p style="${E.bodySm} opacity: 0.85; max-width: ${D}; margin-bottom: 1.5rem;">
        Wrap multiple <code style="${E.monoSm}">&lt;mms-checkbox&gt;</code> elements inside a group 
        with a shared label.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox-group label="Notification preferences">
          <mms-checkbox label="Email notifications"></mms-checkbox>
          <mms-checkbox label="SMS notifications"></mms-checkbox>
          <mms-checkbox label="Push notifications" checked></mms-checkbox>
        </mms-checkbox-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="${E.h2}">With helper text</h2>
      <p style="${E.bodySm} opacity: 0.85; max-width: ${D}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance for the entire group.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox-group 
          label="Communication preferences"
          helper-text="Select how you'd like to receive updates from us."
        >
          <mms-checkbox label="Product updates"></mms-checkbox>
          <mms-checkbox label="Weekly newsletter"></mms-checkbox>
          <mms-checkbox label="Special offers" checked></mms-checkbox>
        </mms-checkbox-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="${E.h2}">With tooltip</h2>
      <p style="${E.bodySm} opacity: 0.85; max-width: ${D}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox-group 
          label="Coverage options"
          show-tooltip
          tooltip-text="Select the types of coverage you need for your policy."
        >
          <mms-checkbox label="Liability coverage"></mms-checkbox>
          <mms-checkbox label="Collision coverage"></mms-checkbox>
          <mms-checkbox label="Comprehensive coverage"></mms-checkbox>
        </mms-checkbox-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Group -->
      <h2 style="${E.h2}">Required group</h2>
      <p style="${E.bodySm} opacity: 0.85; max-width: ${D}; margin-bottom: 1.5rem;">
        The <code style="${E.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox-group 
          label="Agreements"
          required
        >
          <mms-checkbox label="I accept the Terms of Service"></mms-checkbox>
          <mms-checkbox label="I accept the Privacy Policy"></mms-checkbox>
        </mms-checkbox-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="${E.h2}">Error state</h2>
      <p style="${E.bodySm} opacity: 0.85; max-width: ${D}; margin-bottom: 1.5rem;">
        The <code style="${E.monoSm}">error</code> prop displays validation feedback for the entire group.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox-group 
          label="Required selections"
          error
          error-text="Please select at least one option."
          required
        >
          <mms-checkbox label="Option A"></mms-checkbox>
          <mms-checkbox label="Option B"></mms-checkbox>
          <mms-checkbox label="Option C"></mms-checkbox>
        </mms-checkbox-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="${E.h2}">Color schemes</h2>
      <p style="${E.bodySm} opacity: 0.85; max-width: ${D}; margin-bottom: 1.5rem;">
        The <code style="${E.monoSm}">color-scheme</code> prop propagates to all child checkboxes.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-checkbox-group label="Primary" color-scheme="primary">
            <mms-checkbox label="Option 1" checked></mms-checkbox>
            <mms-checkbox label="Option 2"></mms-checkbox>
          </mms-checkbox-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-checkbox-group label="Secondary" color-scheme="secondary">
            <mms-checkbox label="Option 1" checked></mms-checkbox>
            <mms-checkbox label="Option 2"></mms-checkbox>
          </mms-checkbox-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-checkbox-group label="Accent" color-scheme="accent">
            <mms-checkbox label="Option 1" checked></mms-checkbox>
            <mms-checkbox label="Option 2"></mms-checkbox>
          </mms-checkbox-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-checkbox-group label="Onyx" color-scheme="onyx">
            <mms-checkbox label="Option 1" checked></mms-checkbox>
            <mms-checkbox label="Option 2"></mms-checkbox>
          </mms-checkbox-group>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="${E.h2}">Sizes</h2>
      <p style="${E.bodySm} opacity: 0.85; max-width: ${D}; margin-bottom: 1.5rem;">
        The <code style="${E.monoSm}">size</code> prop propagates to all child checkboxes.
      </p>

      <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
        <mms-checkbox-group label="Small" size="sm">
          <mms-checkbox label="Option A" checked></mms-checkbox>
          <mms-checkbox label="Option B"></mms-checkbox>
        </mms-checkbox-group>

        <mms-checkbox-group label="Medium" size="md">
          <mms-checkbox label="Option A" checked></mms-checkbox>
          <mms-checkbox label="Option B"></mms-checkbox>
        </mms-checkbox-group>

        <mms-checkbox-group label="Large" size="lg">
          <mms-checkbox label="Option A" checked></mms-checkbox>
          <mms-checkbox label="Option B"></mms-checkbox>
        </mms-checkbox-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled & Readonly -->
      <h2 style="${E.h2}">Disabled &amp; read-only</h2>
      <p style="${E.bodySm} opacity: 0.85; max-width: ${D}; margin-bottom: 1.5rem;">
        These states propagate from the group to all child checkboxes.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${E.h3}">Disabled</p>
          <mms-checkbox-group label="Disabled group" disabled>
            <mms-checkbox label="Option 1"></mms-checkbox>
            <mms-checkbox label="Option 2" checked></mms-checkbox>
          </mms-checkbox-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${E.h3}">Read-only</p>
          <mms-checkbox-group label="Read-only group" readonly>
            <mms-checkbox label="Option 1"></mms-checkbox>
            <mms-checkbox label="Option 2" checked></mms-checkbox>
          </mms-checkbox-group>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${E.h2}">Accessibility</h2>

      <h3 style="${E.h3}">WCAG 2.2 AA Compliance</h3>
      ${v(_[`checkbox-group`].rows)}

      <h3 style="${E.h3}">Screen Reader Behavior</h3>
      <ul style="${E.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Group entry:</strong> Announces group label, then "group"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Checkbox focus:</strong> Announces checkbox label, checked state</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="${E.monoSm}">required</code> prop is set on group</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces group error message via <code style="${E.monoSm}">role="alert"</code></li>
        <li><strong>Helper text:</strong> Read as part of group description via <code style="${E.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${E.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus between checkboxes in the group</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggle focused checkbox's checked state</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},A={name:`Playground`,tags:[`!dev`],args:{label:`Select options`,helperText:`Choose one or more options.`,name:``,showTooltip:!1,tooltipText:`Additional guidance for this field`,error:!1,errorText:`Please select at least one option.`,required:!1,colorScheme:`primary`,size:`md`,disabled:!1,readonly:!1,itemCount:3,option1:`Option A`,option2:`Option B`,option3:`Option C`,option4:`Option D`,option5:`Option E`,theme:`maximus`,density:`default`},decorators:[e=>a`
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
      `],argTypes:{label:{name:`Label`,control:`text`,description:`Group label displayed above checkboxes`,table:{category:`Component Props`}},helperText:{name:`Helper Text`,control:`text`,description:`Supplementary guidance displayed below checkboxes`,table:{category:`Component Props`}},name:{name:`Name`,control:`text`,description:`Form field name for the group`,table:{category:`Component Props`}},showTooltip:{name:`Show Tooltip`,control:`boolean`,description:`Shows info icon next to label (tooltip dialog pending)`,table:{category:`Component Props`}},tooltipText:{name:`Tooltip Text`,control:`text`,description:`Tooltip content (stored for future mms-tooltip integration)`,table:{category:`Component Props`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and shows error message`,table:{category:`Component Props`}},errorText:{name:`Error Text`,control:`text`,description:`Message displayed when error is true`,table:{category:`Component Props`}},required:{name:`Required`,control:`boolean`,description:`Marks field group as required`,table:{category:`Component Props`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Brand color propagated to all checkboxes`,table:{category:`Propagated Props`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Size propagated to all checkboxes`,table:{category:`Propagated Props`}},disabled:{name:`Disabled`,control:`boolean`,description:`Disables all checkboxes in the group`,table:{category:`Propagated Props`}},readonly:{name:`Read-only`,control:`boolean`,description:`Makes all checkboxes readonly`,table:{category:`Propagated Props`}},itemCount:{name:`Item Count`,control:{type:`range`,min:1,max:5,step:1},description:`Number of checkbox items (demo only — real groups can have any number)`,table:{category:`Demo Controls`}},option1:{name:`Option 1`,control:`text`,description:`Label for first checkbox`,table:{category:`Demo Controls`}},option2:{name:`Option 2`,control:`text`,description:`Label for second checkbox`,table:{category:`Demo Controls`}},option3:{name:`Option 3`,control:`text`,description:`Label for third checkbox`,table:{category:`Demo Controls`}},option4:{name:`Option 4`,control:`text`,description:`Label for fourth checkbox`,table:{category:`Demo Controls`}},option5:{name:`Option 5`,control:`text`,description:`Label for fifth checkbox`,table:{category:`Demo Controls`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`uss-oh-dvs`,`default`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Spacing density`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];n.label&&r.push(`label="${n.label}"`),n.helperText&&!n.error&&r.push(`helper-text="${n.helperText}"`),n.name&&r.push(`name="${n.name}"`),n.showTooltip&&r.push(`show-tooltip`),n.tooltipText&&n.showTooltip&&r.push(`tooltip-text="${n.tooltipText}"`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.size!==`md`&&r.push(`size="${n.size}"`),n.disabled&&r.push(`disabled`),n.readonly&&r.push(`readonly`);let i=[],a=n.itemCount,o=[n.option1,n.option2,n.option3,n.option4,n.option5];for(let e=0;e<a;e++)i.push(`  <mms-checkbox label="${o[e]}"></mms-checkbox>`);return`<mms-checkbox-group\n  ${r.join(`
  `)}\n>\n${i.join(`
`)}\n</mms-checkbox-group>`},language:`html`}}},render:e=>{let t=m(e.theme,e.colorScheme),r=h(e.theme,e.colorScheme);if(!t){let t=r===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,n=r===2?`Lacks step 10 (hover state). Use for branded text or badges, not checkboxes.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return a`
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
      <mms-checkbox-group
        label=${e.label}
        helper-text=${e.helperText}
        name=${e.name||n}
        ?show-tooltip=${e.showTooltip}
        tooltip-text=${e.tooltipText}
        ?error=${e.error}
        error-text=${e.errorText}
        ?required=${e.required}
        color-scheme=${e.colorScheme}
        size=${e.size}
        ?disabled=${e.disabled}
        ?readonly=${e.readonly}
        data-density=${e.density}
      >
        ${i.map(e=>a`
          <mms-checkbox label=${e}></mms-checkbox>
        `)}
      </mms-checkbox-group>
    `}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Checkbox Group</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A group wrapper for checkbox elements that provides a shared label, helper text, validation, 
        and propagates visual properties (color scheme, size, disabled, readonly) to all children.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Wrap multiple <code style="\${t.monoSm}">&lt;mms-checkbox&gt;</code> elements inside a group 
        with a shared label.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox-group label="Notification preferences">
          <mms-checkbox label="Email notifications"></mms-checkbox>
          <mms-checkbox label="SMS notifications"></mms-checkbox>
          <mms-checkbox label="Push notifications" checked></mms-checkbox>
        </mms-checkbox-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance for the entire group.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox-group 
          label="Communication preferences"
          helper-text="Select how you'd like to receive updates from us."
        >
          <mms-checkbox label="Product updates"></mms-checkbox>
          <mms-checkbox label="Weekly newsletter"></mms-checkbox>
          <mms-checkbox label="Special offers" checked></mms-checkbox>
        </mms-checkbox-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="\${t.h2}">With tooltip</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox-group 
          label="Coverage options"
          show-tooltip
          tooltip-text="Select the types of coverage you need for your policy."
        >
          <mms-checkbox label="Liability coverage"></mms-checkbox>
          <mms-checkbox label="Collision coverage"></mms-checkbox>
          <mms-checkbox label="Comprehensive coverage"></mms-checkbox>
        </mms-checkbox-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Group -->
      <h2 style="\${t.h2}">Required group</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox-group 
          label="Agreements"
          required
        >
          <mms-checkbox label="I accept the Terms of Service"></mms-checkbox>
          <mms-checkbox label="I accept the Privacy Policy"></mms-checkbox>
        </mms-checkbox-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">error</code> prop displays validation feedback for the entire group.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox-group 
          label="Required selections"
          error
          error-text="Please select at least one option."
          required
        >
          <mms-checkbox label="Option A"></mms-checkbox>
          <mms-checkbox label="Option B"></mms-checkbox>
          <mms-checkbox label="Option C"></mms-checkbox>
        </mms-checkbox-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="\${t.h2}">Color schemes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">color-scheme</code> prop propagates to all child checkboxes.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-checkbox-group label="Primary" color-scheme="primary">
            <mms-checkbox label="Option 1" checked></mms-checkbox>
            <mms-checkbox label="Option 2"></mms-checkbox>
          </mms-checkbox-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-checkbox-group label="Secondary" color-scheme="secondary">
            <mms-checkbox label="Option 1" checked></mms-checkbox>
            <mms-checkbox label="Option 2"></mms-checkbox>
          </mms-checkbox-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-checkbox-group label="Accent" color-scheme="accent">
            <mms-checkbox label="Option 1" checked></mms-checkbox>
            <mms-checkbox label="Option 2"></mms-checkbox>
          </mms-checkbox-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <mms-checkbox-group label="Onyx" color-scheme="onyx">
            <mms-checkbox label="Option 1" checked></mms-checkbox>
            <mms-checkbox label="Option 2"></mms-checkbox>
          </mms-checkbox-group>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">size</code> prop propagates to all child checkboxes.
      </p>

      <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
        <mms-checkbox-group label="Small" size="sm">
          <mms-checkbox label="Option A" checked></mms-checkbox>
          <mms-checkbox label="Option B"></mms-checkbox>
        </mms-checkbox-group>

        <mms-checkbox-group label="Medium" size="md">
          <mms-checkbox label="Option A" checked></mms-checkbox>
          <mms-checkbox label="Option B"></mms-checkbox>
        </mms-checkbox-group>

        <mms-checkbox-group label="Large" size="lg">
          <mms-checkbox label="Option A" checked></mms-checkbox>
          <mms-checkbox label="Option B"></mms-checkbox>
        </mms-checkbox-group>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled & Readonly -->
      <h2 style="\${t.h2}">Disabled &amp; read-only</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        These states propagate from the group to all child checkboxes.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Disabled</p>
          <mms-checkbox-group label="Disabled group" disabled>
            <mms-checkbox label="Option 1"></mms-checkbox>
            <mms-checkbox label="Option 2" checked></mms-checkbox>
          </mms-checkbox-group>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Read-only</p>
          <mms-checkbox-group label="Read-only group" readonly>
            <mms-checkbox label="Option 1"></mms-checkbox>
            <mms-checkbox label="Option 2" checked></mms-checkbox>
          </mms-checkbox-group>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['checkbox-group'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Group entry:</strong> Announces group label, then "group"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Checkbox focus:</strong> Announces checkbox label, checked state</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus between checkboxes in the group</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggle focused checkbox's checked state</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Component Props
    label: 'Select options',
    helperText: 'Choose one or more options.',
    name: '',
    showTooltip: false,
    tooltipText: 'Additional guidance for this field',
    error: false,
    errorText: 'Please select at least one option.',
    required: false,
    // Propagated Props
    colorScheme: 'primary',
    size: 'md',
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
      description: 'Group label displayed above checkboxes',
      table: {
        category: 'Component Props'
      }
    },
    helperText: {
      name: 'Helper Text',
      control: 'text',
      description: 'Supplementary guidance displayed below checkboxes',
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
    // ── Propagated Props ──────────────────────────────────────
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Brand color propagated to all checkboxes',
      table: {
        category: 'Propagated Props'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size propagated to all checkboxes',
      table: {
        category: 'Propagated Props'
      }
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables all checkboxes in the group',
      table: {
        category: 'Propagated Props'
      }
    },
    readonly: {
      name: 'Read-only',
      control: 'boolean',
      description: 'Makes all checkboxes readonly',
      table: {
        category: 'Propagated Props'
      }
    },
    // ── Demo Controls ─────────────────────────────────────────
    itemCount: {
      name: 'Item Count',
      control: {
        type: 'range',
        min: 1,
        max: 5,
        step: 1
      },
      description: 'Number of checkbox items (demo only — real groups can have any number)',
      table: {
        category: 'Demo Controls'
      }
    },
    option1: {
      name: 'Option 1',
      control: 'text',
      description: 'Label for first checkbox',
      table: {
        category: 'Demo Controls'
      }
    },
    option2: {
      name: 'Option 2',
      control: 'text',
      description: 'Label for second checkbox',
      table: {
        category: 'Demo Controls'
      }
    },
    option3: {
      name: 'Option 3',
      control: 'text',
      description: 'Label for third checkbox',
      table: {
        category: 'Demo Controls'
      }
    },
    option4: {
      name: 'Option 4',
      control: 'text',
      description: 'Label for fourth checkbox',
      table: {
        category: 'Demo Controls'
      }
    },
    option5: {
      name: 'Option 5',
      control: 'text',
      description: 'Label for fifth checkbox',
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
          if (a.helperText && !a.error) attrs.push(\`helper-text="\${a.helperText}"\`);
          if (a.name) attrs.push(\`name="\${a.name}"\`);
          if (a.showTooltip) attrs.push('show-tooltip');
          if (a.tooltipText && a.showTooltip) attrs.push(\`tooltip-text="\${a.tooltipText}"\`);
          if (a.error) attrs.push('error');
          if (a.errorText && a.error) attrs.push(\`error-text="\${a.errorText}"\`);
          if (a.required) attrs.push('required');
          if (a.colorScheme !== 'primary') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.disabled) attrs.push('disabled');
          if (a.readonly) attrs.push('readonly');
          const checkboxes: string[] = [];
          const count = a.itemCount as number;
          const options = [a.option1, a.option2, a.option3, a.option4, a.option5];
          for (let i = 0; i < count; i++) {
            checkboxes.push(\`  <mms-checkbox label="\${options[i]}"></mms-checkbox>\`);
          }
          return \`<mms-checkbox-group\\n  \${attrs.join('\\n  ')}\\n>\\n\${checkboxes.join('\\n')}\\n</mms-checkbox-group>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    label: string;
    helperText: string;
    name: string;
    showTooltip: boolean;
    tooltipText: string;
    error: boolean;
    errorText: string;
    required: boolean;
    colorScheme: string;
    size: string;
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
      const tierReason = tier === 2 ? 'Lacks step 10 (hover state). Use for branded text or badges, not checkboxes.' : 'Lacks text contrast and hover states. Decorative backgrounds only.';
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
    const checkboxes = options.slice(0, args.itemCount);
    return html\`
      <mms-checkbox-group
        label=\${args.label}
        helper-text=\${args.helperText}
        name=\${args.name || nothing}
        ?show-tooltip=\${args.showTooltip}
        tooltip-text=\${args.tooltipText}
        ?error=\${args.error}
        error-text=\${args.errorText}
        ?required=\${args.required}
        color-scheme=\${args.colorScheme}
        size=\${args.size}
        ?disabled=\${args.disabled}
        ?readonly=\${args.readonly}
        data-density=\${args.density}
      >
        \${checkboxes.map(label => html\`
          <mms-checkbox label=\${label}></mms-checkbox>
        \`)}
      </mms-checkbox-group>
    \`;
  }
}`,...A.parameters?.docs?.source}}},j=[`Overview`,`PlaygroundStory`]}));M();export{k as Overview,A as PlaygroundStory,j as __namedExportsOrder,T as default,M as n,w as t};