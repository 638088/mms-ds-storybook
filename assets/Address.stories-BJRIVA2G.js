import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-B0BZwaT1.js";import{E as s,S as c,T as l,g as u,n as d,r as f,w as p}from"./mms-icon.component-DFVI3nJi.js";import{n as m,r as h}from"./iframe-CcinUa1O.js";import{n as g,t as _}from"./localize-DGaV1nF3.js";import{t as v}from"./mms-card.component-Ae9XIj4r.js";import{n as y,r as b}from"./wcag-coverage-DNhlI7v1.js";import{a as x,c as S,d as C,i as w,n as T,o as E,r as D,u as O}from"./doc-styles-DkvR_Qyb.js";import{a as k,n as A}from"./a11y-outcome-B57XZvCQ.js";var j,M=e((()=>{o(),s(),u(),g(),f(),j=class extends i{constructor(...e){super(...e),this.localize=new _(this),this.addressLine1=``,this.addressLine2=``,this.city=``,this.state=``,this.zipCode=``,this.multiline=!1,this.showLabel=!1}get _hasRequiredFields(){return!!(this.addressLine1&&this.city&&this.state&&this.zipCode)}get _fullAddressText(){return[[this.addressLine1,this.addressLine2].filter(Boolean).join(`, `),`${this.city}, ${this.state} ${this.zipCode}`].filter(Boolean).join(`, `)}get _accessibleLabel(){return`${this.label??this.localize.term(`address`)}: ${this._fullAddressText}`}static{this.styles=[l,r`
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
  `]}_renderLines(){return this.multiline?a`
        <span class="line">${this.addressLine1}</span>
        ${this.addressLine2?a`<span class="line">${this.addressLine2}</span>`:n}
        <span class="line">${this.city}, ${this.state} ${this.zipCode}</span>
      `:a`<span class="line">${this._fullAddressText}</span>`}render(){return this._hasRequiredFields?a`
      <address role="group" aria-label=${this._accessibleLabel}>
        ${this.showLabel?a`<span class="label">${this.label??this.localize.term(`address`)}</span>`:n}
        <span class="lines">${this._renderLines()}</span>
      </address>
    `:n}},d([c({type:String,attribute:`address-line-1`})],j.prototype,`addressLine1`,void 0),d([c({type:String,attribute:`address-line-2`})],j.prototype,`addressLine2`,void 0),d([c({type:String})],j.prototype,`city`,void 0),d([c({type:String})],j.prototype,`state`,void 0),d([c({type:String,attribute:`zip-code`})],j.prototype,`zipCode`,void 0),d([c({type:Boolean,reflect:!0})],j.prototype,`multiline`,void 0),d([c({type:Boolean,reflect:!0,attribute:`show-label`})],j.prototype,`showLabel`,void 0),d([c({type:String})],j.prototype,`label`,void 0),j=d([p(`mms-address`)],j)})),N=t({Overview:()=>F,PlaygroundStory:()=>I,__namedExportsOrder:()=>L,default:()=>P}),P,F,I,L,R=e((()=>{o(),h(),M(),v(),y(),A(),S(),P={title:`Content Display/Address`,tags:[`!autodocs`]},F={name:`Overview`,render:()=>a`
    <div data-theme=${D} data-mode=${E()} style=${T}>

      <h1 style="${C.h1}">Address</h1>
      <p style="${C.body} ${x.muted} max-width: ${w}; margin-bottom: ${O.subsection};">
        Formats and displays a US postal address. A read-only formatter, not an input — conforms to
        USPS Publication 28, including PO Box and military (APO/FPO/DPO) address formats.
      </p>

      <hr style="${x.divider}" />

      <h2 style="${C.h2}">Basic usage</h2>
      <p style="${C.bodySm} ${x.muted} max-width: ${w}; margin-bottom: ${O.subsection};">
        A single-line address: line 1 (plus an optional line 2), city, state, and ZIP joined into one
        reading unit. Renders only once <code style="${C.monoSm}">address-line-1</code>,
        <code style="${C.monoSm}">city</code>, <code style="${C.monoSm}">state</code>, and
        <code style="${C.monoSm}">zip-code</code> are all present.
      </p>
      <div style="${x.panel} margin-bottom: ${O.subsection};">
        <mms-address
          address-line-1="123 Main Street"
          city="Richmond"
          state="VA"
          zip-code="23219"
        ></mms-address>
      </div>

      <hr style="${x.divider}" />

      <h2 style="${C.h2}">Multiline</h2>
      <p style="${C.bodySm} ${x.muted} max-width: ${w}; margin-bottom: ${O.subsection};">
        <code style="${C.monoSm}">multiline</code> stacks each logical line (street, optional
        apartment/suite/unit, city/state/zip) instead of joining them into one line.
      </p>
      <div style="display: flex; gap: ${O.subsection}; flex-wrap: wrap; ${x.panel} margin-bottom: ${O.subsection};">
        <mms-address
          address-line-1="789 Government Plaza"
          address-line-2="Suite 400"
          city="Richmond"
          state="VA"
          zip-code="23219"
          multiline
        ></mms-address>
      </div>

      <hr style="${x.divider}" />

      <h2 style="${C.h2}">Label</h2>
      <p style="${C.bodySm} ${x.muted} max-width: ${w}; margin-bottom: ${O.subsection};">
        <code style="${C.monoSm}">show-label</code> shows a visible caption (default text:
        <code style="${C.monoSm}">Address</code>, override with <code style="${C.monoSm}">label</code>)
        above the address. The accessible name is always prefixed with <code style="${C.monoSm}">label</code>
        regardless of this setting — see Accessibility below.
      </p>
      <div style="${x.panel} margin-bottom: ${O.subsection};">
        <mms-address
          address-line-1="456 Elm Avenue"
          city="Albany"
          state="NY"
          zip-code="12201"
          show-label
        ></mms-address>
      </div>

      <hr style="${x.divider}" />

      <h2 style="${C.h2}">PO Box and military addresses</h2>
      <p style="${C.bodySm} ${x.muted} max-width: ${w}; margin-bottom: ${O.subsection};">
        USPS Publication 28 treats these as the same 3-line shape with a different vocabulary — no separate
        prop or mode. A PO Box replaces the street line; a military address uses
        <code style="${C.monoSm}">APO</code>/<code style="${C.monoSm}">FPO</code>/<code style="${C.monoSm}">DPO</code>
        as the city and <code style="${C.monoSm}">AA</code>/<code style="${C.monoSm}">AE</code>/<code style="${C.monoSm}">AP</code>
        as the state.
      </p>
      <div style="display: flex; gap: ${O.subsection}; flex-wrap: wrap; ${x.panel} margin-bottom: ${O.subsection};">
        <mms-address address-line-1="PO Box 1234" city="Richmond" state="VA" zip-code="23219"></mms-address>
        <mms-address address-line-1="Unit 2050 Box 4190" city="APO" state="AE" zip-code="09123"></mms-address>
      </div>

      <hr style="${x.divider}" />

      <h2 style="${C.h2}">Incomplete data</h2>
      <p style="${C.bodySm} ${x.muted} max-width: ${w}; margin-bottom: ${O.content};">
        Renders nothing if <code style="${C.monoSm}">address-line-1</code>, <code style="${C.monoSm}">city</code>,
        <code style="${C.monoSm}">state</code>, or <code style="${C.monoSm}">zip-code</code> is missing —
        never a broken partial address.
      </p>

      <hr style="${x.divider}" />

      <h2 style="${C.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${O.content};">
        <div slot="body-content">
          <p style="${C.bodySm} margin: 0;">
            <strong>Not interactive.</strong> mms-address renders a semantic <code style="${C.monoSm}">&lt;address&gt;</code>
            element — it is not a button, link, or form control, has no focus/hover state, and is not a tab
            stop. The address is grouped under one <code style="${C.monoSm}">aria-label</code> (always
            <code style="${C.monoSm}">"Address: &lt;full address&gt;"</code>, regardless of whether the visible
            caption is shown) so assistive tech announces the whole address as a single coherent unit, rather
            than fragmented line-by-line text.
          </p>
        </div>
      </mms-card>

      <h3 style="${C.h3}">WCAG 2.2 AA compliance</h3>
      ${b.address?k(b.address.rows):n}

      <h3 style="${C.h3}">Screen reader behavior</h3>
      <ul style="${C.bodySm} ${x.muted} margin: 0 0 ${O.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${O.label};"><strong>Reading order:</strong> Announced as one grouped name — "Address: 123 Main Street, Richmond, VA 23219" — via <code style="${C.monoSm}">aria-label</code>, not as separate line-by-line text.</li>
        <li><strong>No focus stop:</strong> mms-address is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="${C.h3}">Keyboard navigation</h3>
      <p style="${C.bodySm} ${x.muted} max-width: ${w}; margin-bottom: ${O.subsection};">
        None. mms-address is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},I={name:`Playground`,tags:[`!dev`],args:{addressLine1:`123 Main Street`,addressLine2:``,city:`Richmond`,state:`VA`,zipCode:`23219`,multiline:!1,showLabel:!1,label:`Address`,theme:`maximus`,density:`default`},argTypes:{addressLine1:{name:`Address line 1`,control:`text`,description:`Street address, or "PO Box ####". Required to render.`,table:{category:`Content`}},addressLine2:{name:`Address line 2`,control:`text`,description:`Apartment/suite/unit line (optional)`,table:{category:`Content`}},city:{name:`City`,control:`text`,description:`City, or APO/FPO/DPO for military addresses. Required to render.`,table:{category:`Content`}},state:{name:`State`,control:`text`,description:`Two-letter state abbreviation, or AA/AE/AP for military addresses. Required to render.`,table:{category:`Content`}},zipCode:{name:`ZIP code`,control:`text`,description:`5-digit or ZIP+4 postal code, passed through unformatted. Required to render.`,table:{category:`Content`}},multiline:{name:`Multiline`,control:`boolean`,description:`Stacked block layout instead of a single joined line.`,table:{category:`Visual`}},showLabel:{name:`Show label`,control:`boolean`,description:`Shows a visible caption above the address.`,table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Caption text shown when Show label is true, and always prefixed to the accessible name.`,table:{category:`Content`}},theme:{name:`Theme`,control:`select`,options:m,description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-address has no compact-specific styling since it's a static, non-interactive text formatter with no touch-target constraint`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.addressLine1&&r.push(`address-line-1="${n.addressLine1}"`),n.addressLine2&&r.push(`address-line-2="${n.addressLine2}"`),n.city&&r.push(`city="${n.city}"`),n.state&&r.push(`state="${n.state}"`),n.zipCode&&r.push(`zip-code="${n.zipCode}"`),n.multiline&&r.push(`multiline`),n.showLabel&&r.push(`show-label`),n.label&&n.label!==`Address`&&r.push(`label="${n.label}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-address\n  ${r.join(`
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
  `},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Address</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Formats and displays a US postal address. A read-only formatter, not an input — conforms to
        USPS Publication 28, including PO Box and military (APO/FPO/DPO) address formats.
      </p>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A single-line address: line 1 (plus an optional line 2), city, state, and ZIP joined into one
        reading unit. Renders only once <code style="\${t.monoSm}">address-line-1</code>,
        <code style="\${t.monoSm}">city</code>, <code style="\${t.monoSm}">state</code>, and
        <code style="\${t.monoSm}">zip-code</code> are all present.
      </p>
      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        <mms-address
          address-line-1="123 Main Street"
          city="Richmond"
          state="VA"
          zip-code="23219"
        ></mms-address>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Multiline</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">multiline</code> stacks each logical line (street, optional
        apartment/suite/unit, city/state/zip) instead of joining them into one line.
      </p>
      <div style="display: flex; gap: \${space.subsection}; flex-wrap: wrap; \${doc.panel} margin-bottom: \${space.subsection};">
        <mms-address
          address-line-1="789 Government Plaza"
          address-line-2="Suite 400"
          city="Richmond"
          state="VA"
          zip-code="23219"
          multiline
        ></mms-address>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Label</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">show-label</code> shows a visible caption (default text:
        <code style="\${t.monoSm}">Address</code>, override with <code style="\${t.monoSm}">label</code>)
        above the address. The accessible name is always prefixed with <code style="\${t.monoSm}">label</code>
        regardless of this setting — see Accessibility below.
      </p>
      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        <mms-address
          address-line-1="456 Elm Avenue"
          city="Albany"
          state="NY"
          zip-code="12201"
          show-label
        ></mms-address>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">PO Box and military addresses</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        USPS Publication 28 treats these as the same 3-line shape with a different vocabulary — no separate
        prop or mode. A PO Box replaces the street line; a military address uses
        <code style="\${t.monoSm}">APO</code>/<code style="\${t.monoSm}">FPO</code>/<code style="\${t.monoSm}">DPO</code>
        as the city and <code style="\${t.monoSm}">AA</code>/<code style="\${t.monoSm}">AE</code>/<code style="\${t.monoSm}">AP</code>
        as the state.
      </p>
      <div style="display: flex; gap: \${space.subsection}; flex-wrap: wrap; \${doc.panel} margin-bottom: \${space.subsection};">
        <mms-address address-line-1="PO Box 1234" city="Richmond" state="VA" zip-code="23219"></mms-address>
        <mms-address address-line-1="Unit 2050 Box 4190" city="APO" state="AE" zip-code="09123"></mms-address>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Incomplete data</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Renders nothing if <code style="\${t.monoSm}">address-line-1</code>, <code style="\${t.monoSm}">city</code>,
        <code style="\${t.monoSm}">state</code>, or <code style="\${t.monoSm}">zip-code</code> is missing —
        never a broken partial address.
      </p>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
          <p style="\${t.bodySm} margin: 0;">
            <strong>Not interactive.</strong> mms-address renders a semantic <code style="\${t.monoSm}">&lt;address&gt;</code>
            element — it is not a button, link, or form control, has no focus/hover state, and is not a tab
            stop. The address is grouped under one <code style="\${t.monoSm}">aria-label</code> (always
            <code style="\${t.monoSm}">"Address: &lt;full address&gt;"</code>, regardless of whether the visible
            caption is shown) so assistive tech announces the whole address as a single coherent unit, rather
            than fragmented line-by-line text.
          </p>
        </div>
      </mms-card>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${wcagTables['address'] ? renderWcagComplianceTable(wcagTables['address'].rows) : nothing}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Reading order:</strong> Announced as one grouped name — "Address: 123 Main Street, Richmond, VA 23219" — via <code style="\${t.monoSm}">aria-label</code>, not as separate line-by-line text.</li>
        <li><strong>No focus stop:</strong> mms-address is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        None. mms-address is not focusable and has no keyboard interaction model.
      </p>

    </div>
  \`
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
      options: BRAND_ORDER,
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
}`,...I.parameters?.docs?.source}}},L=[`Overview`,`PlaygroundStory`]}));R();export{F as Overview,I as PlaygroundStory,L as __namedExportsOrder,P as default,R as n,N as t};