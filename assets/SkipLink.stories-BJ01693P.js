import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{s as n,t as r}from"./lit-B0BZwaT1.js";import{t as i}from"./mms-skip-link.component-CGJ1_U0S.js";import{t as a}from"./mms-card.component-Ae9XIj4r.js";import{n as o,r as s}from"./wcag-coverage-DNhlI7v1.js";import{a as c,c as l,d as u,i as d,n as f,o as p,r as m,u as h}from"./doc-styles-DkvR_Qyb.js";import{a as g,n as _}from"./a11y-outcome-BzyoULsn.js";var v=t({Overview:()=>b,PlaygroundStory:()=>x,__namedExportsOrder:()=>S,default:()=>y}),y,b,x,S,C=e((()=>{r(),i(),a(),o(),_(),l(),y={title:`Navigational/Skip Link`,tags:[`!autodocs`]},b={name:`Overview`,render:()=>n`
    <div data-theme=${m} data-mode=${p()} style=${f}>

      <!-- Header -->
      <h1 style="${u.h1}">Skip Link</h1>
      <p style="${u.body} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        The first focusable element on a page — visually hidden until it receives keyboard
        focus, letting a keyboard or screen-reader user jump straight past repeated navigation
        chrome to the main content. Satisfies <strong>WCAG 2.4.1 Bypass Blocks</strong>, required
        for both Section 508 (federal engagements) and ADA Title II (state engagements).
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${h.subsection};">
        <div slot="body-content">
        <p style="${u.bodySm} margin: 0;">
          <strong>Already in mms-header.</strong> <code style="${u.monoSm}">mms-header</code>
          composes this component internally (<code style="${u.monoSm}">skip-link-target</code>/
          <code style="${u.monoSm}">skip-link-text</code> props) — a page built with
          <code style="${u.monoSm}">mms-header</code> gets one for free. Place
          <code style="${u.monoSm}">mms-skip-link</code> directly only on a page layout that
          doesn't use <code style="${u.monoSm}">mms-header</code>.
        </p>
        </div>
      </mms-card>

      <hr style="${c.divider}" />

      <!-- Try it -->
      <h2 style="${u.h2}">Try it</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Click into the canvas below, then press
        <kbd style="${c.kbd}">Tab</kbd>:
        the link is invisible until it's the focused element, then appears as the first stop
        in the tab order. This is the same live component as the Playground tab.
      </p>
      <div style="${c.frame} margin-bottom: ${h.subsection};">
        <iframe
          src="./iframe.html?id=navigational-skip-link--playground-story&viewMode=story"
          style="width: 100%; height: 170px; border: 0; display: block;"
          title="mms-skip-link Playground — interactive demo"
        ></iframe>
      </div>

      <hr style="${c.divider}" />

      <!-- Props -->
      <h2 style="${u.h2}">Props</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        <code style="${u.monoSm}">target</code> is the id (no leading <code style="${u.monoSm}">#</code>)
        of the main content landmark to jump to, and <code style="${u.monoSm}">label</code> is the
        visible text revealed on focus.
      </p>

      <hr style="${c.divider}" />

      <!-- Accessibility -->
      <h2 style="${u.h2}">Accessibility</h2>

      <h3 style="${u.h3}">WCAG 2.2 AA compliance</h3>
      ${g(s[`skip-link`].rows)}

      <h3 style="${u.h3}">Screen reader behavior</h3>
      <ul style="${u.bodySm} ${c.muted} margin: 0 0 ${h.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${h.label};"><strong>Focus:</strong> Announces the link text (e.g. "Skip to main content") and "link" — a native <code style="${u.monoSm}">&lt;a href&gt;</code>, no ARIA role needed</li>
        <li><strong>Activation:</strong> Native hash navigation moves both the viewport and keyboard focus to the target landmark</li>
      </ul>

      <h3 style="${u.h3}">Keyboard navigation</h3>
      <table style="${c.table} margin-bottom: ${h.subsection};">
        <thead>
          <tr>
            <th style="${c.th} width: 140px;">Key</th>
            <th style="${c.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${c.td}"><kbd style="${c.kbd}">Tab</kbd></td>
            <td style="${c.td}">First stop in the page's tab order — reveals the link</td>
          </tr>
          <tr>
            <td style="${c.td}"><kbd style="${c.kbd}">Enter</kbd></td>
            <td style="${c.td}">Jumps focus and viewport to the target landmark</td>
          </tr>
        </tbody>
      </table>

      <hr style="${c.divider}" />

      <!-- Usage -->
      <h2 style="${u.h2}">Usage</h2>
      <pre style="${c.pre}"><code>&lt;!-- As the first element in body, on a page not using mms-header --&gt;
&lt;mms-skip-link target="main-content" label="Skip to main content"&gt;&lt;/mms-skip-link&gt;
&lt;main id="main-content"&gt;...&lt;/main&gt;</code></pre>

    </div>
  `},x={name:`Playground`,tags:[`!dev`],args:{target:`main-content`,label:`Skip to main content`},decorators:[e=>n`
        <div style="font-family: var(--font-family-body); padding: var(--spacing-md1) var(--spacing-md1) var(--spacing-xs2); margin-top: var(--spacing-xl1);">
          <p style="${u.caption} opacity: 0.75; margin: 0 0 var(--spacing-xs2);">
            Invisible until focused — click here, then press
            <kbd style="padding: var(--spacing-xs1) var(--spacing-xs2); background: var(--color-surface-sunken); border-radius: var(--radius-xs); font-size: 0.75rem;">Tab</kbd>.
          </p>
          <div
            style="
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: var(--spacing-lg1);
              border: var(--border-width-xs) dashed var(--color-border-strong);
              border-radius: var(--radius-sm);
            "
          >
            ${e()}
          </div>
        </div>
      `],argTypes:{target:{name:`Target`,control:`text`,description:`id (no leading #) of the main content landmark to jump to`,table:{category:`Component Props`}},label:{name:`Label`,control:`text`,description:`Visible link text, revealed on focus`,table:{category:`Component Props`}}},render:e=>n`
    <mms-skip-link target=${e.target} label=${e.label}></mms-skip-link>
  `},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Skip Link</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The first focusable element on a page — visually hidden until it receives keyboard
        focus, letting a keyboard or screen-reader user jump straight past repeated navigation
        chrome to the main content. Satisfies <strong>WCAG 2.4.1 Bypass Blocks</strong>, required
        for both Section 508 (federal engagements) and ADA Title II (state engagements).
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Already in mms-header.</strong> <code style="\${t.monoSm}">mms-header</code>
          composes this component internally (<code style="\${t.monoSm}">skip-link-target</code>/
          <code style="\${t.monoSm}">skip-link-text</code> props) — a page built with
          <code style="\${t.monoSm}">mms-header</code> gets one for free. Place
          <code style="\${t.monoSm}">mms-skip-link</code> directly only on a page layout that
          doesn't use <code style="\${t.monoSm}">mms-header</code>.
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Try it -->
      <h2 style="\${t.h2}">Try it</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Click into the canvas below, then press
        <kbd style="\${doc.kbd}">Tab</kbd>:
        the link is invisible until it's the focused element, then appears as the first stop
        in the tab order. This is the same live component as the Playground tab.
      </p>
      <div style="\${doc.frame} margin-bottom: \${space.subsection};">
        <iframe
          src="./iframe.html?id=navigational-skip-link--playground-story&viewMode=story"
          style="width: 100%; height: 170px; border: 0; display: block;"
          title="mms-skip-link Playground — interactive demo"
        ></iframe>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Props -->
      <h2 style="\${t.h2}">Props</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">target</code> is the id (no leading <code style="\${t.monoSm}">#</code>)
        of the main content landmark to jump to, and <code style="\${t.monoSm}">label</code> is the
        visible text revealed on focus.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['skip-link'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Focus:</strong> Announces the link text (e.g. "Skip to main content") and "link" — a native <code style="\${t.monoSm}">&lt;a href&gt;</code>, no ARIA role needed</li>
        <li><strong>Activation:</strong> Native hash navigation moves both the viewport and keyboard focus to the target landmark</li>
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
            <td style="\${doc.td}">First stop in the page's tab order — reveals the link</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd></td>
            <td style="\${doc.td}">Jumps focus and viewport to the target landmark</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="\${doc.pre}"><code>&lt;!-- As the first element in body, on a page not using mms-header --&gt;
&lt;mms-skip-link target="main-content" label="Skip to main content"&gt;&lt;/mms-skip-link&gt;
&lt;main id="main-content"&gt;...&lt;/main&gt;</code></pre>

    </div>
  \`
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    target: 'main-content',
    label: 'Skip to main content'
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div style="font-family: var(--font-family-body); padding: var(--spacing-md1) var(--spacing-md1) var(--spacing-xs2); margin-top: var(--spacing-xl1);">
          <p style="\${t.caption} opacity: 0.75; margin: 0 0 var(--spacing-xs2);">
            Invisible until focused — click here, then press
            <kbd style="padding: var(--spacing-xs1) var(--spacing-xs2); background: var(--color-surface-sunken); border-radius: var(--radius-xs); font-size: 0.75rem;">Tab</kbd>.
          </p>
          <div
            style="
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: var(--spacing-lg1);
              border: var(--border-width-xs) dashed var(--color-border-strong);
              border-radius: var(--radius-sm);
            "
          >
            \${story()}
          </div>
        </div>
      \`;
  }],
  argTypes: {
    target: {
      name: 'Target',
      control: 'text',
      description: 'id (no leading #) of the main content landmark to jump to',
      table: {
        category: 'Component Props'
      }
    },
    label: {
      name: 'Label',
      control: 'text',
      description: 'Visible link text, revealed on focus',
      table: {
        category: 'Component Props'
      }
    }
  },
  render: (args: {
    target: string;
    label: string;
  }) => html\`
    <mms-skip-link target=\${args.target} label=\${args.label}></mms-skip-link>
  \`
}`,...x.parameters?.docs?.source}}},S=[`Overview`,`PlaygroundStory`]}));C();export{b as Overview,x as PlaygroundStory,S as __namedExportsOrder,y as default,C as n,v as t};