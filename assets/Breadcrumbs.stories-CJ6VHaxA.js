import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,n as r,p as i,s as a,t as o}from"./lit-aQ4dERgF.js";import{f as s,m as c,n as l,o as u,t as d}from"./decorate-CFSc4vnv.js";import{t as f}from"./iframe-DQXT9Zip.js";import{a as p,o as m,r as h,t as g}from"./a11y-outcome-DlWsiEtn.js";var _,v=e((()=>{o(),u(),f(),l(),_=class extends r{constructor(...e){super(...e),this.items=[],this.maxItems=4,this.size=`md`}static{this.styles=i`
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
      color: var(--color-text-subtle);
    }

    .separator {
      color: var(--color-text-subtle);
      padding: 0 var(--spacing-xs2);
    }

    :host([size='sm']) .crumb-current,
    :host([size='sm']) .crumb-overflow,
    :host([size='sm']) .separator {
      font-size: var(--type-body-sm-size);
      line-height: var(--type-body-sm-line-height);
    }

    :host([size='md']) .crumb-current,
    :host([size='md']) .crumb-overflow,
    :host([size='md']) .separator {
      font-size: var(--type-body-md-size);
      line-height: var(--type-body-md-line-height);
    }

    :host([data-density='compact']) li {
      gap: var(--spacing-xs1);
    }

    :host([data-density='compact']) .separator {
      padding: 0 var(--spacing-xs1);
    }
  `}get _renderItems(){let e=this.items??[],t=this.maxItems;if(t>0&&e.length>t){let n=Math.max(t-2,1);return[e[0],{label:`…`,type:`overflow`},...e.slice(-n)]}return e}render(){let e=this._renderItems,t=e.length-1;return a`
      <nav aria-label="Breadcrumb">
        <ol>
          ${e.map((e,r)=>{let i=e.type??(r===t?`current-page`:`sub-item`),o=e.label??e.text??`Link`;return a`
              <li>
                ${i===`current-page`?a`<span class="crumb-current" aria-current="page">${o}</span>`:i===`overflow`?a`<span class="crumb-overflow">${o}</span>`:a`
                        <mms-link
                          href=${e.href??n}
                          label=${o}
                          size=${this.size}
                          link-color="neutral"
                        ></mms-link>
                      `}
                ${r<t?a`<span class="separator" aria-hidden="true">/</span>`:n}
              </li>
            `})}
        </ol>
      </nav>
    `}},d([s({type:Array})],_.prototype,`items`,void 0),d([s({type:Number,attribute:`max-items`})],_.prototype,`maxItems`,void 0),d([s({type:String,reflect:!0})],_.prototype,`size`,void 0),_=d([c(`mms-breadcrumbs`)],_)})),y=t({Overview:()=>E,PlaygroundStory:()=>D,__namedExportsOrder:()=>O,default:()=>b}),b,x,S,C,w,T,E,D,O,k=e((()=>{o(),v(),p(),g(),b={title:`Navigational/Breadcrumbs`,tags:[`!autodocs`]},x={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},S=`680px`,C=`960px`,w=[{label:`Home`,href:`#`},{label:`Section`,href:`#`},{label:`Current Page`}],T=[{label:`Home`,href:`#`},{label:`Level 1`,href:`#`},{label:`Level 2`,href:`#`},{label:`Level 3`,href:`#`},{label:`Level 4`,href:`#`},{label:`Current Page`}],E={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${C}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${x.h1}">Breadcrumbs</h1>
      <p style="${x.body} opacity: 0.85; max-width: ${S}; margin-bottom: 2rem;">
        Breadcrumbs show a user's location within a site hierarchy and provide quick navigation back to parent pages. The MMS Design System renders a single data-driven trail from an <code style="${x.monoSm}">items</code> array, with automatic overflow truncation for deep hierarchies.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic trail -->
      <h2 style="${x.h2}">Basic trail</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        Every item except the last renders as a navigable link. The last item is the current page — rendered as bold static text with <code style="${x.monoSm}">aria-current="page"</code>, never a link.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-breadcrumbs .items=${w}></mms-breadcrumbs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Overflow truncation -->
      <h2 style="${x.h2}">Overflow truncation</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        When <code style="${x.monoSm}">items.length</code> exceeds <code style="${x.monoSm}">maxItems</code> (default <code style="${x.monoSm}">4</code>), the trail collapses to the first item, a static "…" overflow marker, and the last two items. The overflow marker is non-interactive text — there is no overflow menu.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-breadcrumbs .items=${T}></mms-breadcrumbs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size -->
      <h2 style="${x.h2}">Size</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        The <code style="${x.monoSm}">size</code> prop maps to the body type scale.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <div>
          <p style="${x.caption} opacity: 0.65; margin-bottom: 0.5rem;"><code style="${x.monoSm}">sm</code></p>
          <mms-breadcrumbs size="sm" .items=${w}></mms-breadcrumbs>
        </div>
        <div>
          <p style="${x.caption} opacity: 0.65; margin-bottom: 0.5rem;"><code style="${x.monoSm}">md</code> (default)</p>
          <mms-breadcrumbs size="md" .items=${w}></mms-breadcrumbs>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${x.h2}">Accessibility</h2>

      <h3 style="${x.h3}">WCAG 2.2 AA Compliance</h3>
      ${h(m.breadcrumbs.rows)}

      <h3 style="${x.h3}">Screen Reader Behavior</h3>
      <ul style="${x.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> The trail is wrapped in <code style="${x.monoSm}">&lt;nav aria-label="Breadcrumb"&gt;</code>, announced as a navigation region.</li>
        <li style="margin-bottom: 0.5rem;"><strong>List semantics:</strong> Items render as an ordered <code style="${x.monoSm}">&lt;ol&gt;</code>/<code style="${x.monoSm}">&lt;li&gt;</code> list, so screen readers announce position ("item 2 of 4").</li>
        <li style="margin-bottom: 0.5rem;"><strong>Current page:</strong> The last crumb carries <code style="${x.monoSm}">aria-current="page"</code> and is not focusable — it is not a link.</li>
        <li><strong>Overflow:</strong> The "…" marker is static text, not announced as interactive — no overflow menu exists.</li>
      </ul>

      <h3 style="${x.h3}">Keyboard Navigation</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; width: 140px;">Key</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus between crumb links. The current-page crumb and the overflow marker are not tab stops.</td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="${x.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${x.monoSm}"><code>const items = [
  { label: 'Home', href: '/' },
  { label: 'Section', href: '/section' },
  { label: 'Current Page' },
];

&lt;mms-breadcrumbs .items=\${items}&gt;&lt;/mms-breadcrumbs&gt;</code></pre>

    </div>
  `},D={name:`Playground`,tags:[`!dev`],args:{items:w,maxItems:4,size:`md`,theme:`maximus`,density:`default`},decorators:[e=>a`
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
      `],argTypes:{items:{name:`Items`,control:`object`,description:"Ordered list of crumbs, root first. Each item accepts `label` (or `text`), `href`, and an optional explicit `type` override.",table:{category:`Component Props`}},maxItems:{name:`Max Items`,control:{type:`number`,min:2,max:10,step:1},description:`Truncation threshold. Above this count, renders [first, overflow, ...lastTwo].`,table:{category:`Component Props`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`],description:`Text size (maps to body type scale)`,table:{category:`Component Props`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`uss-oh-dvs`,`default`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Spacing density`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args;return`<mms-breadcrumbs${n.maxItems===4?``:` max-items="${n.maxItems}"`}${n.size===`md`?``:` size="${n.size}"`}${n.density===`compact`?` data-density="compact"`:``}\n  .items=\${items}\n></mms-breadcrumbs>`},language:`html`}}},render:e=>{let t=e.items;if(typeof e.items==`string`)try{t=JSON.parse(e.items)}catch{t=[]}return Array.isArray(t)||(t=[]),a`
      <mms-breadcrumbs
        max-items=${e.maxItems}
        size=${e.size}
        data-density=${e.density===`compact`?`compact`:n}
        .items=${t}
      ></mms-breadcrumbs>
    `}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Breadcrumbs</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Breadcrumbs show a user's location within a site hierarchy and provide quick navigation back to parent pages. The MMS Design System renders a single data-driven trail from an <code style="\${t.monoSm}">items</code> array, with automatic overflow truncation for deep hierarchies.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic trail -->
      <h2 style="\${t.h2}">Basic trail</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Every item except the last renders as a navigable link. The last item is the current page — rendered as bold static text with <code style="\${t.monoSm}">aria-current="page"</code>, never a link.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-breadcrumbs .items=\${SHORT_TRAIL}></mms-breadcrumbs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Overflow truncation -->
      <h2 style="\${t.h2}">Overflow truncation</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        When <code style="\${t.monoSm}">items.length</code> exceeds <code style="\${t.monoSm}">maxItems</code> (default <code style="\${t.monoSm}">4</code>), the trail collapses to the first item, a static "…" overflow marker, and the last two items. The overflow marker is non-interactive text — there is no overflow menu.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-breadcrumbs .items=\${LONG_TRAIL}></mms-breadcrumbs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size -->
      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">size</code> prop maps to the body type scale.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;"><code style="\${t.monoSm}">sm</code></p>
          <mms-breadcrumbs size="sm" .items=\${SHORT_TRAIL}></mms-breadcrumbs>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;"><code style="\${t.monoSm}">md</code> (default)</p>
          <mms-breadcrumbs size="md" .items=\${SHORT_TRAIL}></mms-breadcrumbs>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['breadcrumbs'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> The trail is wrapped in <code style="\${t.monoSm}">&lt;nav aria-label="Breadcrumb"&gt;</code>, announced as a navigation region.</li>
        <li style="margin-bottom: 0.5rem;"><strong>List semantics:</strong> Items render as an ordered <code style="\${t.monoSm}">&lt;ol&gt;</code>/<code style="\${t.monoSm}">&lt;li&gt;</code> list, so screen readers announce position ("item 2 of 4").</li>
        <li style="margin-bottom: 0.5rem;"><strong>Current page:</strong> The last crumb carries <code style="\${t.monoSm}">aria-current="page"</code> and is not focusable — it is not a link.</li>
        <li><strong>Overflow:</strong> The "…" marker is static text, not announced as interactive — no overflow menu exists.</li>
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
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus between crumb links. The current-page crumb and the overflow marker are not tab stops.</td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm}"><code>const items = [
  { label: 'Home', href: '/' },
  { label: 'Section', href: '/section' },
  { label: 'Current Page' },
];

&lt;mms-breadcrumbs .items=\\\${items}&gt;&lt;/mms-breadcrumbs&gt;</code></pre>

    </div>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Overview`,`PlaygroundStory`]}));k();export{E as Overview,D as PlaygroundStory,O as __namedExportsOrder,b as default,k as n,y as t};