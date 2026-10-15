import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{s as n,t as r}from"./lit-CBo78ikN.js";import{a as i,o as a,r as o,t as s}from"./a11y-outcome-cKjMdYHr.js";import{t as c}from"./mms-skip-link.component-D4lhT_5L.js";var l=t({Overview:()=>m,PlaygroundStory:()=>h,__namedExportsOrder:()=>g,default:()=>u}),u,d,f,p,m,h,g,_=e((()=>{r(),c(),i(),s(),u={title:`Navigational/Skip Link`,tags:[`!autodocs`]},d={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},f=`680px`,p=`960px`,m={name:`Overview`,render:()=>n`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${p}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${d.h1}">Skip Link</h1>
      <p style="${d.body} opacity: 0.85; max-width: ${f}; margin-bottom: 2rem;">
        The first focusable element on a page — visually hidden until it receives keyboard
        focus, letting a keyboard or screen-reader user jump straight past repeated navigation
        chrome to the main content. Satisfies <strong>WCAG 2.4.1 Bypass Blocks</strong>, required
        for both Section 508 (federal engagements) and ADA Title II (state engagements).
      </p>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${d.bodySm} margin: 0;">
          <strong>Already in mms-header.</strong> <code style="${d.monoSm}">mms-header</code>
          composes this component internally (<code style="${d.monoSm}">skip-link-target</code>/
          <code style="${d.monoSm}">skip-link-text</code> props) — a page built with
          <code style="${d.monoSm}">mms-header</code> gets one for free. Place
          <code style="${d.monoSm}">mms-skip-link</code> directly only on a page layout that
          doesn't use <code style="${d.monoSm}">mms-header</code>.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Try it -->
      <h2 style="${d.h2}">Try it</h2>
      <p style="${d.bodySm} opacity: 0.85; max-width: ${f}; margin-bottom: 1rem;">
        Click into the canvas below, then press
        <kbd style="padding: var(--spacing-xs1) var(--spacing-xs2); background: var(--color-surface-sunken); border-radius: var(--radius-xs); font-size: 0.75rem;">Tab</kbd>:
        the link is invisible until it's the focused element, then appears as the first stop
        in the tab order. This is the same live component as the Playground tab.
      </p>
      <div style="border: var(--border-width-xs) solid var(--color-border-strong); border-radius: var(--radius-md); overflow: hidden; margin-bottom: 2rem;">
        <iframe
          src="./iframe.html?id=navigational-skip-link--playground-story&viewMode=story"
          style="width: 100%; height: 170px; border: 0; display: block;"
          title="mms-skip-link Playground — interactive demo"
        ></iframe>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Props -->
      <h2 style="${d.h2}">Props</h2>
      <p style="${d.bodySm} opacity: 0.85; max-width: ${f}; margin-bottom: 1.5rem;">
        <code style="${d.monoSm}">target</code> is the id (no leading <code style="${d.monoSm}">#</code>)
        of the main content landmark to jump to, and <code style="${d.monoSm}">label</code> is the
        visible text revealed on focus.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${d.h2}">Accessibility</h2>

      <h3 style="${d.h3}">WCAG 2.2 AA Compliance</h3>
      ${o(a[`skip-link`].rows)}

      <h3 style="${d.h3}">Screen Reader Behavior</h3>
      <ul style="${d.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces the link text (e.g. "Skip to main content") and "link" — a native <code style="${d.monoSm}">&lt;a href&gt;</code>, no ARIA role needed</li>
        <li><strong>Activation:</strong> Native hash navigation moves both the viewport and keyboard focus to the target landmark</li>
      </ul>

      <h3 style="${d.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">First stop in the page's tab order — reveals the link</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jumps focus and viewport to the target landmark</td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="${d.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${d.monoSm}"><code>&lt;!-- As the first element in body, on a page not using mms-header --&gt;
&lt;mms-skip-link target="main-content" label="Skip to main content"&gt;&lt;/mms-skip-link&gt;
&lt;main id="main-content"&gt;...&lt;/main&gt;</code></pre>

    </div>
  `},h={name:`Playground`,tags:[`!dev`],args:{target:`main-content`,label:`Skip to main content`},decorators:[e=>n`
        <div style="font-family: var(--font-family-body); padding: var(--spacing-md1) var(--spacing-md1) var(--spacing-xs2); margin-top: var(--spacing-xl1);">
          <p style="${d.caption} opacity: 0.75; margin: 0 0 var(--spacing-xs2);">
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
  `},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Skip Link</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        The first focusable element on a page — visually hidden until it receives keyboard
        focus, letting a keyboard or screen-reader user jump straight past repeated navigation
        chrome to the main content. Satisfies <strong>WCAG 2.4.1 Bypass Blocks</strong>, required
        for both Section 508 (federal engagements) and ADA Title II (state engagements).
      </p>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Already in mms-header.</strong> <code style="\${t.monoSm}">mms-header</code>
          composes this component internally (<code style="\${t.monoSm}">skip-link-target</code>/
          <code style="\${t.monoSm}">skip-link-text</code> props) — a page built with
          <code style="\${t.monoSm}">mms-header</code> gets one for free. Place
          <code style="\${t.monoSm}">mms-skip-link</code> directly only on a page layout that
          doesn't use <code style="\${t.monoSm}">mms-header</code>.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Try it -->
      <h2 style="\${t.h2}">Try it</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Click into the canvas below, then press
        <kbd style="padding: var(--spacing-xs1) var(--spacing-xs2); background: var(--color-surface-sunken); border-radius: var(--radius-xs); font-size: 0.75rem;">Tab</kbd>:
        the link is invisible until it's the focused element, then appears as the first stop
        in the tab order. This is the same live component as the Playground tab.
      </p>
      <div style="border: var(--border-width-xs) solid var(--color-border-strong); border-radius: var(--radius-md); overflow: hidden; margin-bottom: 2rem;">
        <iframe
          src="./iframe.html?id=navigational-skip-link--playground-story&viewMode=story"
          style="width: 100%; height: 170px; border: 0; display: block;"
          title="mms-skip-link Playground — interactive demo"
        ></iframe>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Props -->
      <h2 style="\${t.h2}">Props</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">target</code> is the id (no leading <code style="\${t.monoSm}">#</code>)
        of the main content landmark to jump to, and <code style="\${t.monoSm}">label</code> is the
        visible text revealed on focus.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['skip-link'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces the link text (e.g. "Skip to main content") and "link" — a native <code style="\${t.monoSm}">&lt;a href&gt;</code>, no ARIA role needed</li>
        <li><strong>Activation:</strong> Native hash navigation moves both the viewport and keyboard focus to the target landmark</li>
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
            <td style="padding: 0.5rem 0.75rem;">First stop in the page's tab order — reveals the link</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jumps focus and viewport to the target landmark</td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm}"><code>&lt;!-- As the first element in body, on a page not using mms-header --&gt;
&lt;mms-skip-link target="main-content" label="Skip to main content"&gt;&lt;/mms-skip-link&gt;
&lt;main id="main-content"&gt;...&lt;/main&gt;</code></pre>

    </div>
  \`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Overview`,`PlaygroundStory`]}));_();export{m as Overview,h as PlaygroundStory,g as __namedExportsOrder,u as default,_ as n,l as t};