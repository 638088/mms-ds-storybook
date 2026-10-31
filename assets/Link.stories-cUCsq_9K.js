import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{s as n,t as r}from"./lit-B0BZwaT1.js";import{i}from"./iframe-0m-KJlLB.js";import{n as a,r as o}from"./wcag-coverage-DNhlI7v1.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,u as m}from"./doc-styles-BoEZknkJ.js";import{a as h,n as g}from"./a11y-outcome-o7pti1Vx.js";var _=t({Overview:()=>b,PlaygroundStory:()=>x,__namedExportsOrder:()=>S,default:()=>y}),v,y,b,x,S,C=e((()=>{r(),i(),a(),g(),c(),v=[``,`arrow-right`,`arrow-left`,`arrow-up`,`arrow-up-right`,`arrow-square-out`,`caret-right`,`caret-left`,`download`,`upload`,`export`,`envelope`,`phone`,`info`,`question`,`file-text`,`file-pdf`,`lock`,`globe`,`link`],y={title:`Actions/Link`,tags:[`!autodocs`]},b={name:`Overview`,render:()=>n`
    <div data-theme=${p} data-mode=${f()} style=${d}>

      <!-- Header -->
      <h1 style="${m.h1}">Link</h1>
      <p style="${m.body} ${s.muted} max-width: ${l}; margin-bottom: ${u.subsection};">
        Links navigate users to other pages or resources. The MMS Design System provides a unified link component with two color options — <code style="${m.monoSm}">standard</code> (USWDS blue with visited state) and <code style="${m.monoSm}">neutral</code> (inherits text color).
      </p>

      <hr style="${s.divider}" />

      <!-- Link color -->
      <h2 style="${m.h2}">Link color</h2>
      <p style="${m.bodySm} ${s.muted} max-width: ${l}; margin-bottom: ${u.content};">
        The <code style="${m.monoSm}">color</code> prop controls the link's color scheme.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: ${u.content}; margin-bottom: ${u.subsection};">
        <div style="${s.panel} display: flex; flex-direction: column;">
          <h3 style="${m.h3}">standard</h3>
          <p style="${m.bodySm} ${s.muted} flex: 1;">
            USWDS-aligned blue links with distinct visited state. Use for most navigation links. See <em>Foundations → Colors → Structural Colors → Utility</em> for color values.
          </p>
          <div style="margin-top: ${u.content}; display: flex; gap: ${u.content}; align-items: center;">
            <mms-link href="#" label="Default link"></mms-link>
            <mms-link href="#" label="Visited link" state="visited"></mms-link>
          </div>
        </div>
        <div style="${s.panel} display: flex; flex-direction: column;">
          <h3 style="${m.h3}">neutral</h3>
          <p style="${m.bodySm} ${s.muted} flex: 1;">
            Inherits text color. Use for navigation where color differentiation isn't needed (e.g., breadcrumbs, footers).
          </p>
          <div style="margin-top: ${u.content};">
            <mms-link href="#" link-color="neutral" label="Neutral link"></mms-link>
          </div>
        </div>
      </div>

      <hr style="${s.divider}" />

      <!-- Underline -->
      <h2 style="${m.h2}">Underline</h2>
      <p style="${m.bodySm} ${s.muted} max-width: ${l}; margin-bottom: ${u.content};">
        The <code style="${m.monoSm}">underline</code> prop controls when the underline appears.
      </p>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: ${u.content}; margin-bottom: ${u.subsection};">
        <div style="${s.panel}">
          <h3 style="${m.h3}"><code style="${m.monoSm}">hover</code> (default)</h3>
          <p style="${m.caption} ${s.muted} margin-bottom: ${u.content};">Underline appears on hover</p>
          <mms-link href="#" underline="hover" label="Hover to see underline"></mms-link>
        </div>
        <div style="${s.panel}">
          <h3 style="${m.h3}"><code style="${m.monoSm}">always</code></h3>
          <p style="${m.caption} ${s.muted} margin-bottom: ${u.content};">Underline always visible</p>
          <mms-link href="#" underline="always" label="Always underlined"></mms-link>
        </div>
        <div style="${s.panel}">
          <h3 style="${m.h3}"><code style="${m.monoSm}">none</code></h3>
          <p style="${m.caption} ${s.muted} margin-bottom: ${u.content};">Never shows underline</p>
          <mms-link href="#" underline="none" label="No underline"></mms-link>
        </div>
      </div>

      <hr style="${s.divider}" />

      <!-- Size -->
      <h2 style="${m.h2}">Size</h2>
      <p style="${m.bodySm} ${s.muted} max-width: ${l}; margin-bottom: ${u.subsection};">
        The <code style="${m.monoSm}">size</code> prop maps to the body type scale.
      </p>

      <div style="display: flex; align-items: baseline; gap: ${u.subsection}; margin-bottom: ${u.subsection};">
        <div>
          <p style="${m.caption} ${s.muted} margin-bottom: ${u.label};"><code style="${m.monoSm}">sm</code></p>
          <mms-link href="#" size="sm" label="Small link"></mms-link>
        </div>
        <div>
          <p style="${m.caption} ${s.muted} margin-bottom: ${u.label};"><code style="${m.monoSm}">md</code></p>
          <mms-link href="#" size="md" label="Medium link"></mms-link>
        </div>
        <div>
          <p style="${m.caption} ${s.muted} margin-bottom: ${u.label};"><code style="${m.monoSm}">lg</code></p>
          <mms-link href="#" size="lg" label="Large link"></mms-link>
        </div>
      </div>

      <hr style="${s.divider}" />

      <!-- Icons -->
      <h2 style="${m.h2}">Icons</h2>
      <p style="${m.bodySm} ${s.muted} max-width: ${l}; margin-bottom: ${u.subsection};">
        The <code style="${m.monoSm}">left-icon</code> and <code style="${m.monoSm}">right-icon</code> props add icons to indicate actions or destinations.
      </p>

      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: ${u.subsection}; margin-bottom: ${u.subsection};">
        <mms-link href="#" label="Download PDF" right-icon="download"></mms-link>
        <mms-link href="#" label="Open in new tab" right-icon="arrow-square-out" target="_blank"></mms-link>
        <mms-link href="#" label="Contact us" left-icon="envelope"></mms-link>
        <mms-link href="#" label="View document" left-icon="file-text" right-icon="arrow-right"></mms-link>
      </div>

      <hr style="${s.divider}" />

      <!-- Framework router integration -->
      <h2 style="${m.h2}">Framework router integration</h2>
      <p style="${m.bodySm} ${s.muted} max-width: ${l}; margin-bottom: ${u.content};">
        When <code style="${m.monoSm}">href</code> is omitted, the component renders styled text suitable for wrapping with framework router components (e.g., React Router's <code style="${m.monoSm}">&lt;Link&gt;</code>).
      </p>

      <pre style="${s.pre} margin-bottom: ${u.subsection};"><code>// React Router example
import { Link } from 'react-router-dom';

&lt;Link to="/dashboard"&gt;
  &lt;mms-link label="Go to Dashboard" /&gt;
&lt;/Link&gt;</code></pre>

      <hr style="${s.divider}" />

      <!-- Accessibility -->
      <h2 style="${m.h2}">Accessibility</h2>

      <h3 style="${m.h3}">WCAG 2.2 AA compliance</h3>
      ${h(o.link.rows)}

      <h3 style="${m.h3}">Screen reader behavior</h3>
      <ul style="${m.bodySm} ${s.muted} margin: 0 0 ${u.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${u.label};"><strong>Focus:</strong> Announces link text and "link"</li>
        <li style="margin-bottom: ${u.label};"><strong>Visited:</strong> Some screen readers announce "visited link" based on browser history</li>
        <li style="margin-bottom: ${u.label};"><strong>External:</strong> When <code style="${m.monoSm}">target="_blank"</code>, consider adding "(opens in new tab)" to link text</li>
        <li><strong>No href:</strong> Uses <code style="${m.monoSm}">role="link"</code> + <code style="${m.monoSm}">tabindex="0"</code> for router wrappers</li>
      </ul>

      <h3 style="${m.h3}">Keyboard navigation</h3>
      <table style="${s.table} margin-bottom: ${u.subsection};">
        <thead>
          <tr>
            <th style="${s.th} width: 140px;">Key</th>
            <th style="${s.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${s.td}"><kbd style="${s.kbd}">Tab</kbd></td>
            <td style="${s.td}">Move focus to / from the link</td>
          </tr>
          <tr>
            <td style="${s.td}"><kbd style="${s.kbd}">Enter</kbd></td>
            <td style="${s.td}">Navigate to link destination</td>
          </tr>
        </tbody>
      </table>

      <hr style="${s.divider}" />

      <!-- Usage -->
      <h2 style="${m.h2}">Usage</h2>
      <pre style="${s.pre}"><code>&lt;mms-link href="/about" label="About us"&gt;&lt;/mms-link&gt;
&lt;mms-link href="/docs" label="Documentation" right-icon="arrow-right"&gt;&lt;/mms-link&gt;
&lt;mms-link href="/contact" link-color="neutral" label="Contact"&gt;&lt;/mms-link&gt;</code></pre>

    </div>
  `},x={name:`Playground`,tags:[`!dev`],args:{linkColor:`standard`,size:`md`,underline:`hover`,state:`default`,disabled:!1,label:`Link text`,href:``,target:``,leftIcon:``,rightIcon:``,theme:`maximus`},decorators:[e=>n`
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
      `],argTypes:{linkColor:{name:`Link color`,control:`select`,options:[`standard`,`neutral`],description:`"standard" uses fixed USWDS government link colors (blue default, purple visited) — these never change with theme. "neutral" inherits the surrounding text color for use in breadcrumbs, footers, and navigation where color distinction isn't needed.`,table:{category:`Component Props`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Link text size (maps to body type scale)`,table:{category:`Component Props`}},underline:{name:`Underline`,control:`select`,options:[`always`,`hover`,`none`],description:`When to show underline: always, hover (default), or none`,table:{category:`Component Props`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`visited`],description:`Preview state (Storybook only)`,table:{category:`Component Props`}},disabled:{name:`Disabled`,control:`boolean`,description:`Disabled state`,table:{category:`Component Props`}},label:{name:`Label`,control:`text`,description:`Link text`,table:{category:`Component Props`}},href:{name:`Href`,control:`text`,description:`Navigation URL (optional). When provided, renders a semantic <a> element with native link behavior. When omitted, renders styled text with role="link" — use this when wrapping with framework routers like React Router's <Link> or Next.js <Link> that handle navigation themselves.`,table:{category:`Component Props`}},target:{name:`Target`,control:`select`,options:[``,`_self`,`_blank`,`_parent`,`_top`],description:`Where to open the linked URL: "" or "_self" = same tab (default), "_blank" = new tab (auto-adds rel="noopener noreferrer" for security), "_parent" = parent frame, "_top" = full window (breaks out of frames). Only applies when href is set.`,table:{category:`Component Props`}},leftIcon:{name:`Left Icon`,control:`select`,options:v,description:`Icon before the label`,table:{category:`Component Props`}},rightIcon:{name:`Right Icon`,control:`select`,options:v,description:`Icon after the label`,table:{category:`Component Props`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=n.href?` href="${n.href}"`:``,i=n.target?` target="${n.target}"`:``,a=n.linkColor===`standard`?``:` link-color="${n.linkColor}"`,o=n.size===`md`?``:` size="${n.size}"`,s=n.underline===`hover`?``:` underline="${n.underline}"`,c=n.leftIcon?` left-icon="${n.leftIcon}"`:``,l=n.rightIcon?` right-icon="${n.rightIcon}"`:``,u=n.disabled?` disabled`:``;return`<mms-link${r}${i}${a}${o}${s}
  label="${n.label}"${c}${l}${u}
></mms-link>`},language:`html`}}},render:e=>n`
      <mms-link
        link-color=${e.linkColor}
        size=${e.size}
        underline=${e.underline}
        state=${e.state}
        ?disabled=${e.disabled}
        label=${e.label}
        href=${e.href||``}
        target=${e.target||``}
        left-icon=${e.leftIcon||``}
        right-icon=${e.rightIcon||``}
      ></mms-link>
    `},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Link</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Links navigate users to other pages or resources. The MMS Design System provides a unified link component with two color options — <code style="\${t.monoSm}">standard</code> (USWDS blue with visited state) and <code style="\${t.monoSm}">neutral</code> (inherits text color).
      </p>

      <hr style="\${doc.divider}" />

      <!-- Link color -->
      <h2 style="\${t.h2}">Link color</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The <code style="\${t.monoSm}">color</code> prop controls the link's color scheme.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel} display: flex; flex-direction: column;">
          <h3 style="\${t.h3}">standard</h3>
          <p style="\${t.bodySm} \${doc.muted} flex: 1;">
            USWDS-aligned blue links with distinct visited state. Use for most navigation links. See <em>Foundations → Colors → Structural Colors → Utility</em> for color values.
          </p>
          <div style="margin-top: \${space.content}; display: flex; gap: \${space.content}; align-items: center;">
            <mms-link href="#" label="Default link"></mms-link>
            <mms-link href="#" label="Visited link" state="visited"></mms-link>
          </div>
        </div>
        <div style="\${doc.panel} display: flex; flex-direction: column;">
          <h3 style="\${t.h3}">neutral</h3>
          <p style="\${t.bodySm} \${doc.muted} flex: 1;">
            Inherits text color. Use for navigation where color differentiation isn't needed (e.g., breadcrumbs, footers).
          </p>
          <div style="margin-top: \${space.content};">
            <mms-link href="#" link-color="neutral" label="Neutral link"></mms-link>
          </div>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Underline -->
      <h2 style="\${t.h2}">Underline</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The <code style="\${t.monoSm}">underline</code> prop controls when the underline appears.
      </p>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}"><code style="\${t.monoSm}">hover</code> (default)</h3>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">Underline appears on hover</p>
          <mms-link href="#" underline="hover" label="Hover to see underline"></mms-link>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}"><code style="\${t.monoSm}">always</code></h3>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">Underline always visible</p>
          <mms-link href="#" underline="always" label="Always underlined"></mms-link>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}"><code style="\${t.monoSm}">none</code></h3>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">Never shows underline</p>
          <mms-link href="#" underline="none" label="No underline"></mms-link>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Size -->
      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">size</code> prop maps to the body type scale.
      </p>

      <div style="display: flex; align-items: baseline; gap: \${space.subsection}; margin-bottom: \${space.subsection};">
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};"><code style="\${t.monoSm}">sm</code></p>
          <mms-link href="#" size="sm" label="Small link"></mms-link>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};"><code style="\${t.monoSm}">md</code></p>
          <mms-link href="#" size="md" label="Medium link"></mms-link>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};"><code style="\${t.monoSm}">lg</code></p>
          <mms-link href="#" size="lg" label="Large link"></mms-link>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Icons -->
      <h2 style="\${t.h2}">Icons</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">left-icon</code> and <code style="\${t.monoSm}">right-icon</code> props add icons to indicate actions or destinations.
      </p>

      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: \${space.subsection}; margin-bottom: \${space.subsection};">
        <mms-link href="#" label="Download PDF" right-icon="download"></mms-link>
        <mms-link href="#" label="Open in new tab" right-icon="arrow-square-out" target="_blank"></mms-link>
        <mms-link href="#" label="Contact us" left-icon="envelope"></mms-link>
        <mms-link href="#" label="View document" left-icon="file-text" right-icon="arrow-right"></mms-link>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Framework router integration -->
      <h2 style="\${t.h2}">Framework router integration</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        When <code style="\${t.monoSm}">href</code> is omitted, the component renders styled text suitable for wrapping with framework router components (e.g., React Router's <code style="\${t.monoSm}">&lt;Link&gt;</code>).
      </p>

      <pre style="\${doc.pre} margin-bottom: \${space.subsection};"><code>// React Router example
import { Link } from 'react-router-dom';

&lt;Link to="/dashboard"&gt;
  &lt;mms-link label="Go to Dashboard" /&gt;
&lt;/Link&gt;</code></pre>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['link'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Focus:</strong> Announces link text and "link"</li>
        <li style="margin-bottom: \${space.label};"><strong>Visited:</strong> Some screen readers announce "visited link" based on browser history</li>
        <li style="margin-bottom: \${space.label};"><strong>External:</strong> When <code style="\${t.monoSm}">target="_blank"</code>, consider adding "(opens in new tab)" to link text</li>
        <li><strong>No href:</strong> Uses <code style="\${t.monoSm}">role="link"</code> + <code style="\${t.monoSm}">tabindex="0"</code> for router wrappers</li>
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
            <td style="\${doc.td}">Move focus to / from the link</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd></td>
            <td style="\${doc.td}">Navigate to link destination</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="\${doc.pre}"><code>&lt;mms-link href="/about" label="About us"&gt;&lt;/mms-link&gt;
&lt;mms-link href="/docs" label="Documentation" right-icon="arrow-right"&gt;&lt;/mms-link&gt;
&lt;mms-link href="/contact" link-color="neutral" label="Contact"&gt;&lt;/mms-link&gt;</code></pre>

    </div>
  \`
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    linkColor: "standard",
    size: 'md',
    underline: 'hover',
    state: 'default',
    disabled: false,
    label: 'Link text',
    href: '',
    target: '',
    leftIcon: '',
    rightIcon: '',
    theme: 'maximus'
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
    linkColor: {
      name: 'Link color',
      control: 'select',
      options: ['standard', 'neutral'],
      description: '"standard" uses fixed USWDS government link colors (blue default, purple visited) — these never change with theme. "neutral" inherits the surrounding text color for use in breadcrumbs, footers, and navigation where color distinction isn\\'t needed.',
      table: {
        category: 'Component Props'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Link text size (maps to body type scale)',
      table: {
        category: 'Component Props'
      }
    },
    underline: {
      name: 'Underline',
      control: 'select',
      options: ['always', 'hover', 'none'],
      description: 'When to show underline: always, hover (default), or none',
      table: {
        category: 'Component Props'
      }
    },
    state: {
      name: 'State',
      control: 'select',
      options: ['default', 'hover', 'focus', 'visited'],
      description: 'Preview state (Storybook only)',
      table: {
        category: 'Component Props'
      }
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disabled state',
      table: {
        category: 'Component Props'
      }
    },
    label: {
      name: 'Label',
      control: 'text',
      description: 'Link text',
      table: {
        category: 'Component Props'
      }
    },
    href: {
      name: 'Href',
      control: 'text',
      description: 'Navigation URL (optional). When provided, renders a semantic <a> element with native link behavior. When omitted, renders styled text with role="link" — use this when wrapping with framework routers like React Router\\'s <Link> or Next.js <Link> that handle navigation themselves.',
      table: {
        category: 'Component Props'
      }
    },
    target: {
      name: 'Target',
      control: 'select',
      options: ['', '_self', '_blank', '_parent', '_top'],
      description: 'Where to open the linked URL: "" or "_self" = same tab (default), "_blank" = new tab (auto-adds rel="noopener noreferrer" for security), "_parent" = parent frame, "_top" = full window (breaks out of frames). Only applies when href is set.',
      table: {
        category: 'Component Props'
      }
    },
    leftIcon: {
      name: 'Left Icon',
      control: 'select',
      options: iconOptions,
      description: 'Icon before the label',
      table: {
        category: 'Component Props'
      }
    },
    rightIcon: {
      name: 'Right Icon',
      control: 'select',
      options: iconOptions,
      description: 'Icon after the label',
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
    }
  },
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string | boolean>;
        }) => {
          const a = ctx.args;
          const href = a.href ? \` href="\${a.href}"\` : '';
          const target = a.target ? \` target="\${a.target}"\` : '';
          const colorAttr = a.linkColor !== 'standard' ? \` link-color="\${a.linkColor}"\` : '';
          const size = a.size !== 'md' ? \` size="\${a.size}"\` : '';
          const underline = a.underline !== 'hover' ? \` underline="\${a.underline}"\` : '';
          const leftIcon = a.leftIcon ? \` left-icon="\${a.leftIcon}"\` : '';
          const rightIcon = a.rightIcon ? \` right-icon="\${a.rightIcon}"\` : '';
          const disabled = a.disabled ? ' disabled' : '';
          return \`<mms-link\${href}\${target}\${colorAttr}\${size}\${underline}
  label="\${a.label}"\${leftIcon}\${rightIcon}\${disabled}
></mms-link>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    linkColor: string;
    size: string;
    underline: string;
    state: string;
    disabled: boolean;
    label: string;
    href: string;
    target: string;
    leftIcon: string;
    rightIcon: string;
    theme: string;
  }) => {
    return html\`
      <mms-link
        link-color=\${args.linkColor}
        size=\${args.size}
        underline=\${args.underline}
        state=\${args.state}
        ?disabled=\${args.disabled}
        label=\${args.label}
        href=\${args.href || ''}
        target=\${args.target || ''}
        left-icon=\${args.leftIcon || ''}
        right-icon=\${args.rightIcon || ''}
      ></mms-link>
    \`;
  }
}`,...x.parameters?.docs?.source}}},S=[`Overview`,`PlaygroundStory`]}));C();export{b as Overview,x as PlaygroundStory,S as __namedExportsOrder,y as default,C as n,_ as t};