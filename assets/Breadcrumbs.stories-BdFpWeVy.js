import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-B0BZwaT1.js";import{E as s,S as c,T as l,g as u,n as d,r as f,w as p}from"./mms-icon.component-DFVI3nJi.js";import{i as m}from"./iframe-BrFFNKAP.js";import{n as h,t as g}from"./localize-DGaV1nF3.js";import{n as _,r as v}from"./wcag-coverage-DNhlI7v1.js";import{a as y,c as b,d as x,i as S,n as C,o as w,r as T,u as E}from"./doc-styles-DkvR_Qyb.js";import{a as D,n as O}from"./a11y-outcome-BzyoULsn.js";var k,A=e((()=>{o(),s(),u(),m(),h(),f(),k=class extends i{constructor(...e){super(...e),this.localize=new g(this),this.items=[],this.maxItems=4,this.size=`md`}static{this.styles=[l,r`
    :host {
      display: block;
      font-family: var(--type-body-md-family);
    }

    ol {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs2);
    }

    .crumb-current {
      font-weight: 700;
      color: var(--color-text-default);
    }

    .crumb-overflow {
      font-weight: var(--font-weight-medium);
      color: var(--color-text-subtle);
    }

    .separator {
      font-weight: var(--font-weight-medium);
      color: var(--color-text-subtle);
      padding: 0 var(--spacing-xs2);
    }

    :host([size='sm']) .crumb-current,
    :host([size='sm']) .crumb-overflow,
    :host([size='sm']) .separator {
      font-size: var(--type-ui-label-sm-size);
      line-height: var(--type-ui-label-sm-line-height);
      letter-spacing: var(--type-ui-label-sm-letter-spacing);
    }

    :host([size='md']) .crumb-current,
    :host([size='md']) .crumb-overflow,
    :host([size='md']) .separator {
      font-size: var(--type-ui-label-md-size);
      line-height: var(--type-ui-label-md-line-height);
      letter-spacing: var(--type-ui-label-md-letter-spacing);
    }

    :host([data-density='compact']) li {
      gap: var(--spacing-xs1);
    }

    :host([data-density='compact']) .separator {
      padding: 0 var(--spacing-xs1);
    }
  `]}get _renderItems(){let e=this.items??[],t=this.maxItems;if(t>0&&e.length>t){let n=Math.max(t-2,1);return[e[0],{label:`…`,type:`overflow`},...e.slice(-n)]}return e}render(){let e=this._renderItems,t=e.length-1;return a`
      <nav aria-label=${this.localize.term(`breadcrumb`)}>
        <ol>
          ${e.map((e,r)=>{let i=e.type??(r===t?`current-page`:`sub-item`),o=e.label??e.text??`Link`;return a`
              <li>
                ${i===`current-page`?a`<span class="crumb-current" aria-current="page">${o}</span>`:i===`overflow`?a`<span class="crumb-overflow">${o}</span>`:a`
                        <mms-link
                          href=${e.href??n}
                          label=${o}
                          size=${this.size}
                          link-color="neutral"
                          type-scale="ui-label"
                        ></mms-link>
                      `}
                ${r<t?a`<span class="separator" aria-hidden="true">/</span>`:n}
              </li>
            `})}
        </ol>
      </nav>
    `}},d([c({type:Array})],k.prototype,`items`,void 0),d([c({type:Number,attribute:`max-items`})],k.prototype,`maxItems`,void 0),d([c({type:String,reflect:!0})],k.prototype,`size`,void 0),k=d([p(`mms-breadcrumbs`)],k)})),j=t({Overview:()=>F,PlaygroundStory:()=>I,__namedExportsOrder:()=>L,default:()=>M}),M,N,P,F,I,L,R=e((()=>{o(),A(),_(),O(),b(),M={title:`Navigational/Breadcrumbs`,tags:[`!autodocs`]},N=[{label:`Home`,href:`#`},{label:`Section`,href:`#`},{label:`Current Page`}],P=[{label:`Home`,href:`#`},{label:`Level 1`,href:`#`},{label:`Level 2`,href:`#`},{label:`Level 3`,href:`#`},{label:`Level 4`,href:`#`},{label:`Current Page`}],F={name:`Overview`,render:()=>a`
    <div data-theme=${T} data-mode=${w()} style=${C}>

      <!-- Header -->
      <h1 style="${x.h1}">Breadcrumbs</h1>
      <p style="${x.body} ${y.muted} max-width: ${S}; margin-bottom: ${E.subsection};">
        Breadcrumbs show a user's location within a site hierarchy and provide quick navigation back to parent pages. The MMS Design System renders a single data-driven trail from an <code style="${x.monoSm}">items</code> array, with automatic overflow truncation for deep hierarchies.
      </p>

      <hr style="${y.divider}" />

      <!-- Basic trail -->
      <h2 style="${x.h2}">Basic trail</h2>
      <p style="${x.bodySm} ${y.muted} max-width: ${S}; margin-bottom: ${E.subsection};">
        Every item except the last renders as a navigable link. The last item is the current page — rendered as bold static text with <code style="${x.monoSm}">aria-current="page"</code>, never a link.
      </p>

      <div style="${y.panel} margin-bottom: ${E.subsection};">
        <mms-breadcrumbs .items=${N}></mms-breadcrumbs>
      </div>

      <hr style="${y.divider}" />

      <!-- Overflow truncation -->
      <h2 style="${x.h2}">Overflow truncation</h2>
      <p style="${x.bodySm} ${y.muted} max-width: ${S}; margin-bottom: ${E.subsection};">
        When <code style="${x.monoSm}">items.length</code> exceeds <code style="${x.monoSm}">maxItems</code> (default <code style="${x.monoSm}">4</code>), the trail collapses to the first item, a static "…" overflow marker, and the last two items. The overflow marker is non-interactive text — there is no overflow menu.
      </p>

      <div style="${y.panel} margin-bottom: ${E.subsection};">
        <mms-breadcrumbs .items=${P}></mms-breadcrumbs>
      </div>

      <hr style="${y.divider}" />

      <!-- Size -->
      <h2 style="${x.h2}">Size</h2>
      <p style="${x.bodySm} ${y.muted} max-width: ${S}; margin-bottom: ${E.subsection};">
        The <code style="${x.monoSm}">size</code> prop maps to the body type scale.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${E.content}; margin-bottom: ${E.subsection};">
        <div>
          <p style="${x.caption} ${y.muted} margin-bottom: ${E.label};"><code style="${x.monoSm}">sm</code></p>
          <mms-breadcrumbs size="sm" .items=${N}></mms-breadcrumbs>
        </div>
        <div>
          <p style="${x.caption} ${y.muted} margin-bottom: ${E.label};"><code style="${x.monoSm}">md</code> (default)</p>
          <mms-breadcrumbs size="md" .items=${N}></mms-breadcrumbs>
        </div>
      </div>

      <hr style="${y.divider}" />

      <!-- Accessibility -->
      <h2 style="${x.h2}">Accessibility</h2>

      <h3 style="${x.h3}">WCAG 2.2 AA compliance</h3>
      ${D(v.breadcrumbs.rows)}

      <h3 style="${x.h3}">Screen reader behavior</h3>
      <ul style="${x.bodySm} ${y.muted} margin: 0 0 ${E.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${E.label};"><strong>Landmark:</strong> The trail is wrapped in <code style="${x.monoSm}">&lt;nav aria-label="Breadcrumb"&gt;</code>, announced as a navigation region.</li>
        <li style="margin-bottom: ${E.label};"><strong>List semantics:</strong> Items render as an ordered <code style="${x.monoSm}">&lt;ol&gt;</code>/<code style="${x.monoSm}">&lt;li&gt;</code> list, so screen readers announce position ("item 2 of 4").</li>
        <li style="margin-bottom: ${E.label};"><strong>Current page:</strong> The last crumb carries <code style="${x.monoSm}">aria-current="page"</code> and is not focusable — it is not a link.</li>
        <li><strong>Overflow:</strong> The "…" marker is static text, not announced as interactive — no overflow menu exists.</li>
      </ul>

      <h3 style="${x.h3}">Keyboard navigation</h3>
      <table style="${y.table} margin-bottom: ${E.subsection};">
        <thead>
          <tr>
            <th style="${y.th} width: 140px;">Key</th>
            <th style="${y.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${y.td}"><kbd style="${y.kbd}">Tab</kbd></td>
            <td style="${y.td}">Move focus between crumb links. The current-page crumb and the overflow marker are not tab stops.</td>
          </tr>
        </tbody>
      </table>

      <hr style="${y.divider}" />

      <!-- Usage -->
      <h2 style="${x.h2}">Usage</h2>
      <pre style="${y.pre}"><code>const items = [
  { label: 'Home', href: '/' },
  { label: 'Section', href: '/section' },
  { label: 'Current Page' },
];

&lt;mms-breadcrumbs .items=\${items}&gt;&lt;/mms-breadcrumbs&gt;</code></pre>

    </div>
  `},I={name:`Playground`,tags:[`!dev`],args:{items:N,maxItems:4,size:`md`,theme:`maximus`,density:`default`},decorators:[e=>a`
        <div
          style="
            min-height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          ${e()}
        </div>
      `],argTypes:{items:{name:`Items`,control:`object`,description:"Ordered list of crumbs, root first. Each item accepts `label` (or `text`), `href`, and an optional explicit `type` override.",table:{category:`Component Props`}},maxItems:{name:`Max Items`,control:{type:`number`,min:2,max:10,step:1},description:`Truncation threshold. Above this count, renders [first, overflow, ...lastTwo].`,table:{category:`Component Props`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`],description:`Text size (maps to body type scale)`,table:{category:`Component Props`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Spacing density`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args;return`<mms-breadcrumbs${n.maxItems===4?``:` max-items="${n.maxItems}"`}${n.size===`md`?``:` size="${n.size}"`}${n.density===`compact`?` data-density="compact"`:``}\n  .items=\${items}\n></mms-breadcrumbs>`},language:`html`}}},render:e=>{let t=e.items;if(typeof e.items==`string`)try{t=JSON.parse(e.items)}catch{t=[]}return Array.isArray(t)||(t=[]),a`
      <mms-breadcrumbs
        max-items=${e.maxItems}
        size=${e.size}
        data-density=${e.density===`compact`?`compact`:n}
        .items=${t}
      ></mms-breadcrumbs>
    `}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Breadcrumbs</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Breadcrumbs show a user's location within a site hierarchy and provide quick navigation back to parent pages. The MMS Design System renders a single data-driven trail from an <code style="\${t.monoSm}">items</code> array, with automatic overflow truncation for deep hierarchies.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Basic trail -->
      <h2 style="\${t.h2}">Basic trail</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Every item except the last renders as a navigable link. The last item is the current page — rendered as bold static text with <code style="\${t.monoSm}">aria-current="page"</code>, never a link.
      </p>

      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        <mms-breadcrumbs .items=\${SHORT_TRAIL}></mms-breadcrumbs>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Overflow truncation -->
      <h2 style="\${t.h2}">Overflow truncation</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        When <code style="\${t.monoSm}">items.length</code> exceeds <code style="\${t.monoSm}">maxItems</code> (default <code style="\${t.monoSm}">4</code>), the trail collapses to the first item, a static "…" overflow marker, and the last two items. The overflow marker is non-interactive text — there is no overflow menu.
      </p>

      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        <mms-breadcrumbs .items=\${LONG_TRAIL}></mms-breadcrumbs>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Size -->
      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">size</code> prop maps to the body type scale.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};"><code style="\${t.monoSm}">sm</code></p>
          <mms-breadcrumbs size="sm" .items=\${SHORT_TRAIL}></mms-breadcrumbs>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};"><code style="\${t.monoSm}">md</code> (default)</p>
          <mms-breadcrumbs size="md" .items=\${SHORT_TRAIL}></mms-breadcrumbs>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['breadcrumbs'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Landmark:</strong> The trail is wrapped in <code style="\${t.monoSm}">&lt;nav aria-label="Breadcrumb"&gt;</code>, announced as a navigation region.</li>
        <li style="margin-bottom: \${space.label};"><strong>List semantics:</strong> Items render as an ordered <code style="\${t.monoSm}">&lt;ol&gt;</code>/<code style="\${t.monoSm}">&lt;li&gt;</code> list, so screen readers announce position ("item 2 of 4").</li>
        <li style="margin-bottom: \${space.label};"><strong>Current page:</strong> The last crumb carries <code style="\${t.monoSm}">aria-current="page"</code> and is not focusable — it is not a link.</li>
        <li><strong>Overflow:</strong> The "…" marker is static text, not announced as interactive — no overflow menu exists.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th} width: 140px;">Key</th>
            <th style="\${doc.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Tab</kbd></td>
            <td style="\${doc.td}">Move focus between crumb links. The current-page crumb and the overflow marker are not tab stops.</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="\${doc.pre}"><code>const items = [
  { label: 'Home', href: '/' },
  { label: 'Section', href: '/section' },
  { label: 'Current Page' },
];

&lt;mms-breadcrumbs .items=\\\${items}&gt;&lt;/mms-breadcrumbs&gt;</code></pre>

    </div>
  \`
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    items: SHORT_TRAIL,
    maxItems: 4,
    size: 'md',
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div
          style="
            min-height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          \${story()}
        </div>
      \`;
  }],
  argTypes: {
    // Component Props
    items: {
      name: 'Items',
      control: 'object',
      description: 'Ordered list of crumbs, root first. Each item accepts \`label\` (or \`text\`), \`href\`, and an optional explicit \`type\` override.',
      table: {
        category: 'Component Props'
      }
    },
    maxItems: {
      name: 'Max Items',
      control: {
        type: 'number',
        min: 2,
        max: 10,
        step: 1
      },
      description: 'Truncation threshold. Above this count, renders [first, overflow, ...lastTwo].',
      table: {
        category: 'Component Props'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md'],
      description: 'Text size (maps to body type scale)',
      table: {
        category: 'Component Props'
      }
    },
    // Global Props
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
          args: Record<string, string | number>;
        }) => {
          const a = ctx.args;
          const maxItems = a.maxItems !== 4 ? \` max-items="\${a.maxItems}"\` : '';
          const size = a.size !== 'md' ? \` size="\${a.size}"\` : '';
          const density = a.density === 'compact' ? ' data-density="compact"' : '';
          // Note: .items must be set programmatically, not via attribute
          return \`<mms-breadcrumbs\${maxItems}\${size}\${density}\\n  .items=\\\${items}\\n></mms-breadcrumbs>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    items: BreadcrumbItem[] | string;
    maxItems: number;
    size: string;
    theme: string;
    density: string;
  }) => {
    // Handle Storybook control edge cases (may be stringified JSON)
    let parsedItems = args.items;
    if (typeof args.items === 'string') {
      try {
        parsedItems = JSON.parse(args.items);
      } catch {
        parsedItems = [];
      }
    }
    if (!Array.isArray(parsedItems)) {
      parsedItems = [];
    }
    return html\`
      <mms-breadcrumbs
        max-items=\${args.maxItems}
        size=\${args.size}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
        .items=\${parsedItems}
      ></mms-breadcrumbs>
    \`;
  }
}`,...I.parameters?.docs?.source}}},L=[`Overview`,`PlaygroundStory`]}));R();export{F as Overview,I as PlaygroundStory,L as __namedExportsOrder,M as default,R as n,j as t};