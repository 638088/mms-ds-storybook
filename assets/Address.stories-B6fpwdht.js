import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,t as d}from"./decorate-Bygya6Tu.js";import{a as f,o as p,r as m,t as h}from"./a11y-outcome-cKjMdYHr.js";var g,_=e((()=>{o(),u(),l(),g=class extends i{constructor(...e){super(...e),this.addressLine1=``,this.addressLine2=``,this.city=``,this.state=``,this.zipCode=``,this.multiline=!1,this.showLabel=!1,this.label=`Address`}get _hasRequiredFields(){return!!(this.addressLine1&&this.city&&this.state&&this.zipCode)}get _fullAddressText(){return[[this.addressLine1,this.addressLine2].filter(Boolean).join(`, `),`${this.city}, ${this.state} ${this.zipCode}`].filter(Boolean).join(`, `)}get _accessibleLabel(){return`${this.label}: ${this._fullAddressText}`}static{this.styles=r`
    /* data-density is intentionally not implemented here — mms-address is a
       static, non-interactive text formatter with no touch-target
       constraint, unlike mms-button's compact override. See
       .claude/contracts/global-props.md. */
    :host {
      display: block;
      font-family: var(--type-body-md-family);
      font-size: var(--type-body-md-size);
      font-weight: var(--type-body-md-weight);
      line-height: var(--type-body-md-line-height);
      color: var(--color-text-default);
    }

    address {
      margin: 0;
      /* Browsers italicize <address> by default; mms body text is never italic. */
      font-style: normal;
    }

    .label {
      display: block;
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--spacing-xs2);
    }

    .lines {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    :host([multiline]) .lines {
      flex-direction: column;
      gap: var(--spacing-xs2);
    }
  `}_renderLines(){return this.multiline?a`
        <span class="line">${this.addressLine1}</span>
        ${this.addressLine2?a`<span class="line">${this.addressLine2}</span>`:n}
        <span class="line">${this.city}, ${this.state} ${this.zipCode}</span>
      `:a`<span class="line">${this._fullAddressText}</span>`}render(){return this._hasRequiredFields?a`
      <address role="group" aria-label=${this._accessibleLabel}>
        ${this.showLabel?a`<span class="label">${this.label}</span>`:n}
        <span class="lines">${this._renderLines()}</span>
      </address>
    `:n}},d([c({type:String,attribute:`address-line-1`})],g.prototype,`addressLine1`,void 0),d([c({type:String,attribute:`address-line-2`})],g.prototype,`addressLine2`,void 0),d([c({type:String})],g.prototype,`city`,void 0),d([c({type:String})],g.prototype,`state`,void 0),d([c({type:String,attribute:`zip-code`})],g.prototype,`zipCode`,void 0),d([c({type:Boolean,reflect:!0})],g.prototype,`multiline`,void 0),d([c({type:Boolean,reflect:!0,attribute:`show-label`})],g.prototype,`showLabel`,void 0),d([c({type:String})],g.prototype,`label`,void 0),g=d([s(`mms-address`)],g)})),v=t({Overview:()=>C,PlaygroundStory:()=>w,__namedExportsOrder:()=>T,default:()=>y}),y,b,x,S,C,w,T,E=e((()=>{o(),_(),f(),h(),y={title:`Content Display/Address`,tags:[`!autodocs`]},b={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},x=`680px`,S=`960px`,C={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${S}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${b.h1}">Address</h1>
      <p style="${b.body} opacity: 0.85; max-width: ${x}; margin-bottom: 2rem;">
        Formats and displays a US postal address. A read-only formatter, not an input — conforms to
        USPS Publication 28, including PO Box and military (APO/FPO/DPO) address formats.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${b.h2}">Basic usage</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        A single-line address: line 1 (plus an optional line 2), city, state, and ZIP joined into one
        reading unit. Renders only once <code style="${b.monoSm}">address-line-1</code>,
        <code style="${b.monoSm}">city</code>, <code style="${b.monoSm}">state</code>, and
        <code style="${b.monoSm}">zip-code</code> are all present.
      </p>
      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-address
          address-line-1="123 Main Street"
          city="Richmond"
          state="VA"
          zip-code="23219"
        ></mms-address>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${b.h2}">Multiline</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        <code style="${b.monoSm}">multiline</code> stacks each logical line (street, optional
        apartment/suite/unit, city/state/zip) instead of joining them into one line.
      </p>
      <div style="display: flex; gap: 2rem; flex-wrap: wrap; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-address
          address-line-1="789 Government Plaza"
          address-line-2="Suite 400"
          city="Richmond"
          state="VA"
          zip-code="23219"
          multiline
        ></mms-address>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${b.h2}">Label</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        <code style="${b.monoSm}">show-label</code> shows a visible caption (default text:
        <code style="${b.monoSm}">Address</code>, override with <code style="${b.monoSm}">label</code>)
        above the address. The accessible name is always prefixed with <code style="${b.monoSm}">label</code>
        regardless of this setting — see Accessibility below.
      </p>
      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-address
          address-line-1="456 Elm Avenue"
          city="Albany"
          state="NY"
          zip-code="12201"
          show-label
        ></mms-address>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${b.h2}">PO Box and military addresses</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        USPS Publication 28 treats these as the same 3-line shape with a different vocabulary — no separate
        prop or mode. A PO Box replaces the street line; a military address uses
        <code style="${b.monoSm}">APO</code>/<code style="${b.monoSm}">FPO</code>/<code style="${b.monoSm}">DPO</code>
        as the city and <code style="${b.monoSm}">AA</code>/<code style="${b.monoSm}">AE</code>/<code style="${b.monoSm}">AP</code>
        as the state.
      </p>
      <div style="display: flex; gap: 2rem; flex-wrap: wrap; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-address address-line-1="PO Box 1234" city="Richmond" state="VA" zip-code="23219"></mms-address>
        <mms-address address-line-1="Unit 2050 Box 4190" city="APO" state="AE" zip-code="09123"></mms-address>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${b.h2}">Incomplete data</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.5rem;">
        Renders nothing if <code style="${b.monoSm}">address-line-1</code>, <code style="${b.monoSm}">city</code>,
        <code style="${b.monoSm}">state</code>, or <code style="${b.monoSm}">zip-code</code> is missing —
        never a broken partial address.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${b.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${b.bodySm} margin: 0;">
          <strong>Not interactive.</strong> mms-address renders a semantic <code style="${b.monoSm}">&lt;address&gt;</code>
          element — it is not a button, link, or form control, has no focus/hover state, and is not a tab
          stop. The address is grouped under one <code style="${b.monoSm}">aria-label</code> (always
          <code style="${b.monoSm}">"Address: &lt;full address&gt;"</code>, regardless of whether the visible
          caption is shown) so assistive tech announces the whole address as a single coherent unit, rather
          than fragmented line-by-line text.
        </p>
      </div>

      <h3 style="${b.h3}">WCAG 2.2 AA Compliance</h3>
      ${p.address?m(p.address.rows):n}

      <h3 style="${b.h3}">Screen Reader Behavior</h3>
      <ul style="${b.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Reading order:</strong> Announced as one grouped name — "Address: 123 Main Street, Richmond, VA 23219" — via <code style="${b.monoSm}">aria-label</code>, not as separate line-by-line text.</li>
        <li><strong>No focus stop:</strong> mms-address is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="${b.h3}">Keyboard Navigation</h3>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 2rem;">
        None. mms-address is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},w={name:`Playground`,tags:[`!dev`],args:{addressLine1:`123 Main Street`,addressLine2:``,city:`Richmond`,state:`VA`,zipCode:`23219`,multiline:!1,showLabel:!1,label:`Address`,theme:`maximus`,density:`default`},argTypes:{addressLine1:{name:`Address line 1`,control:`text`,description:`Street address, or "PO Box ####". Required to render.`,table:{category:`Content`}},addressLine2:{name:`Address line 2`,control:`text`,description:`Apartment/suite/unit line (optional)`,table:{category:`Content`}},city:{name:`City`,control:`text`,description:`City, or APO/FPO/DPO for military addresses. Required to render.`,table:{category:`Content`}},state:{name:`State`,control:`text`,description:`Two-letter state abbreviation, or AA/AE/AP for military addresses. Required to render.`,table:{category:`Content`}},zipCode:{name:`ZIP code`,control:`text`,description:`5-digit or ZIP+4 postal code, passed through unformatted. Required to render.`,table:{category:`Content`}},multiline:{name:`Multiline`,control:`boolean`,description:`Stacked block layout instead of a single joined line.`,table:{category:`Visual`}},showLabel:{name:`Show label`,control:`boolean`,description:`Shows a visible caption above the address.`,table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Caption text shown when Show label is true, and always prefixed to the accessible name.`,table:{category:`Content`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-address has no compact-specific styling since it's a static, non-interactive text formatter with no touch-target constraint`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.addressLine1&&r.push(`address-line-1="${n.addressLine1}"`),n.addressLine2&&r.push(`address-line-2="${n.addressLine2}"`),n.city&&r.push(`city="${n.city}"`),n.state&&r.push(`state="${n.state}"`),n.zipCode&&r.push(`zip-code="${n.zipCode}"`),n.multiline&&r.push(`multiline`),n.showLabel&&r.push(`show-label`),n.label&&n.label!==`Address`&&r.push(`label="${n.label}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-address\n  ${r.join(`
  `)}\n></mms-address>`},language:`html`}},controls:{sort:`none`}},render:e=>a`
    <mms-address
      address-line-1=${e.addressLine1}
      address-line-2=${e.addressLine2}
      city=${e.city}
      state=${e.state}
      zip-code=${e.zipCode}
      ?multiline=${e.multiline}
      ?show-label=${e.showLabel}
      label=${e.label}
      data-density=${e.density===`compact`?`compact`:n}
    ></mms-address>
  `},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Address</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Formats and displays a US postal address. A read-only formatter, not an input — conforms to
        USPS Publication 28, including PO Box and military (APO/FPO/DPO) address formats.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        A single-line address: line 1 (plus an optional line 2), city, state, and ZIP joined into one
        reading unit. Renders only once <code style="\${t.monoSm}">address-line-1</code>,
        <code style="\${t.monoSm}">city</code>, <code style="\${t.monoSm}">state</code>, and
        <code style="\${t.monoSm}">zip-code</code> are all present.
      </p>
      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-address
          address-line-1="123 Main Street"
          city="Richmond"
          state="VA"
          zip-code="23219"
        ></mms-address>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Multiline</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">multiline</code> stacks each logical line (street, optional
        apartment/suite/unit, city/state/zip) instead of joining them into one line.
      </p>
      <div style="display: flex; gap: 2rem; flex-wrap: wrap; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-address
          address-line-1="789 Government Plaza"
          address-line-2="Suite 400"
          city="Richmond"
          state="VA"
          zip-code="23219"
          multiline
        ></mms-address>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Label</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">show-label</code> shows a visible caption (default text:
        <code style="\${t.monoSm}">Address</code>, override with <code style="\${t.monoSm}">label</code>)
        above the address. The accessible name is always prefixed with <code style="\${t.monoSm}">label</code>
        regardless of this setting — see Accessibility below.
      </p>
      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-address
          address-line-1="456 Elm Avenue"
          city="Albany"
          state="NY"
          zip-code="12201"
          show-label
        ></mms-address>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">PO Box and military addresses</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        USPS Publication 28 treats these as the same 3-line shape with a different vocabulary — no separate
        prop or mode. A PO Box replaces the street line; a military address uses
        <code style="\${t.monoSm}">APO</code>/<code style="\${t.monoSm}">FPO</code>/<code style="\${t.monoSm}">DPO</code>
        as the city and <code style="\${t.monoSm}">AA</code>/<code style="\${t.monoSm}">AE</code>/<code style="\${t.monoSm}">AP</code>
        as the state.
      </p>
      <div style="display: flex; gap: 2rem; flex-wrap: wrap; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-address address-line-1="PO Box 1234" city="Richmond" state="VA" zip-code="23219"></mms-address>
        <mms-address address-line-1="Unit 2050 Box 4190" city="APO" state="AE" zip-code="09123"></mms-address>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Incomplete data</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Renders nothing if <code style="\${t.monoSm}">address-line-1</code>, <code style="\${t.monoSm}">city</code>,
        <code style="\${t.monoSm}">state</code>, or <code style="\${t.monoSm}">zip-code</code> is missing —
        never a broken partial address.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Not interactive.</strong> mms-address renders a semantic <code style="\${t.monoSm}">&lt;address&gt;</code>
          element — it is not a button, link, or form control, has no focus/hover state, and is not a tab
          stop. The address is grouped under one <code style="\${t.monoSm}">aria-label</code> (always
          <code style="\${t.monoSm}">"Address: &lt;full address&gt;"</code>, regardless of whether the visible
          caption is shown) so assistive tech announces the whole address as a single coherent unit, rather
          than fragmented line-by-line text.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${wcagTables['address'] ? renderWcagComplianceTable(wcagTables['address'].rows) : nothing}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Reading order:</strong> Announced as one grouped name — "Address: 123 Main Street, Richmond, VA 23219" — via <code style="\${t.monoSm}">aria-label</code>, not as separate line-by-line text.</li>
        <li><strong>No focus stop:</strong> mms-address is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard Navigation</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        None. mms-address is not focusable and has no keyboard interaction model.
      </p>

    </div>
  \`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    addressLine1: '123 Main Street',
    addressLine2: '',
    city: 'Richmond',
    state: 'VA',
    zipCode: '23219',
    multiline: false,
    showLabel: false,
    label: 'Address',
    theme: 'maximus',
    density: 'default'
  },
  argTypes: {
    addressLine1: {
      name: 'Address line 1',
      control: 'text',
      description: 'Street address, or "PO Box ####". Required to render.',
      table: {
        category: 'Content'
      }
    },
    addressLine2: {
      name: 'Address line 2',
      control: 'text',
      description: 'Apartment/suite/unit line (optional)',
      table: {
        category: 'Content'
      }
    },
    city: {
      name: 'City',
      control: 'text',
      description: 'City, or APO/FPO/DPO for military addresses. Required to render.',
      table: {
        category: 'Content'
      }
    },
    state: {
      name: 'State',
      control: 'text',
      description: 'Two-letter state abbreviation, or AA/AE/AP for military addresses. Required to render.',
      table: {
        category: 'Content'
      }
    },
    zipCode: {
      name: 'ZIP code',
      control: 'text',
      description: '5-digit or ZIP+4 postal code, passed through unformatted. Required to render.',
      table: {
        category: 'Content'
      }
    },
    multiline: {
      name: 'Multiline',
      control: 'boolean',
      description: 'Stacked block layout instead of a single joined line.',
      table: {
        category: 'Visual'
      }
    },
    showLabel: {
      name: 'Show label',
      control: 'boolean',
      description: 'Shows a visible caption above the address.',
      table: {
        category: 'Visual'
      }
    },
    label: {
      name: 'Label',
      control: 'text',
      description: 'Caption text shown when Show label is true, and always prefixed to the accessible name.',
      table: {
        category: 'Content'
      }
    },
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
      description: 'Brand theme',
      table: {
        category: 'Global Props'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Accepted as a global attribute passthrough — mms-address has no compact-specific styling since it\\'s a static, non-interactive text formatter with no touch-target constraint',
      table: {
        category: 'Global Props'
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
          if (a.addressLine1) attrs.push(\`address-line-1="\${a.addressLine1}"\`);
          if (a.addressLine2) attrs.push(\`address-line-2="\${a.addressLine2}"\`);
          if (a.city) attrs.push(\`city="\${a.city}"\`);
          if (a.state) attrs.push(\`state="\${a.state}"\`);
          if (a.zipCode) attrs.push(\`zip-code="\${a.zipCode}"\`);
          if (a.multiline) attrs.push('multiline');
          if (a.showLabel) attrs.push('show-label');
          if (a.label && a.label !== 'Address') attrs.push(\`label="\${a.label}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-address\\n  \${attrs.join('\\n  ')}\\n></mms-address>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none'
    }
  },
  render: (args: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
    multiline: boolean;
    showLabel: boolean;
    label: string;
    theme: string;
    density: string;
  }) => html\`
    <mms-address
      address-line-1=\${args.addressLine1}
      address-line-2=\${args.addressLine2}
      city=\${args.city}
      state=\${args.state}
      zip-code=\${args.zipCode}
      ?multiline=\${args.multiline}
      ?show-label=\${args.showLabel}
      label=\${args.label}
      data-density=\${args.density === 'compact' ? 'compact' : nothing}
    ></mms-address>
  \`
}`,...w.parameters?.docs?.source}}},T=[`Overview`,`PlaygroundStory`]}));E();export{C as Overview,w as PlaygroundStory,T as __namedExportsOrder,y as default,E as n,v as t};