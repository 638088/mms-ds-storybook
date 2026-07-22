import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{s as n,t as r}from"./lit-aQ4dERgF.js";import{t as i}from"./iframe-CFwqN9Xj.js";var a=t({Overview:()=>d,PlaygroundStory:()=>f,__namedExportsOrder:()=>p,default:()=>s}),o,s,c,l,u,d,f,p,m=e((()=>{r(),i(),o=[``,`arrow-right`,`arrow-left`,`arrow-up`,`arrow-up-right`,`arrow-square-out`,`caret-right`,`caret-left`,`download`,`upload`,`export`,`envelope`,`phone`,`info`,`question`,`file-text`,`file-pdf`,`lock`,`globe`,`link`],s={title:`Actions/Link`,tags:[`!autodocs`]},c={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},l=`680px`,u=`960px`,d={name:`Overview`,render:()=>n`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${u}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${c.h1}">Link</h1>
      <p style="${c.body} opacity: 0.85; max-width: ${l}; margin-bottom: 2rem;">
        Links navigate users to other pages or resources. The MMS Design System provides a unified link component with two color options — <code style="${c.monoSm}">standard</code> (USWDS blue with visited state) and <code style="${c.monoSm}">neutral</code> (inherits text color).
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Link color -->
      <h2 style="${c.h2}">Link color</h2>
      <p style="${c.bodySm} opacity: 0.85; max-width: ${l}; margin-bottom: 1.5rem;">
        The <code style="${c.monoSm}">color</code> prop controls the link's color scheme.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${c.h3}">standard</p>
          <p style="${c.bodySm} opacity: 0.85; flex: 1;">
            USWDS-aligned blue links with distinct visited state. Use for most navigation links. See <em>Foundations → Colors → Structural Colors → Utility</em> for color values.
          </p>
          <div style="margin-top: 1rem; display: flex; gap: 1.5rem; align-items: center;">
            <mms-link href="#" label="Default link"></mms-link>
            <mms-link href="#" label="Visited link" state="visited"></mms-link>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${c.h3}">neutral</p>
          <p style="${c.bodySm} opacity: 0.85; flex: 1;">
            Inherits text color. Use for navigation where color differentiation isn't needed (e.g., breadcrumbs, footers).
          </p>
          <div style="margin-top: 1rem;">
            <mms-link href="#" link-color="neutral" label="Neutral link"></mms-link>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Underline -->
      <h2 style="${c.h2}">Underline</h2>
      <p style="${c.bodySm} opacity: 0.85; max-width: ${l}; margin-bottom: 1.5rem;">
        The <code style="${c.monoSm}">underline</code> prop controls when the underline appears.
      </p>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
        <div style="padding: 1rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${c.h3}"><code style="${c.monoSm}">hover</code> (default)</p>
          <p style="${c.caption} opacity: 0.75; margin-bottom: 0.75rem;">Underline appears on hover</p>
          <mms-link href="#" underline="hover" label="Hover to see underline"></mms-link>
        </div>
        <div style="padding: 1rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${c.h3}"><code style="${c.monoSm}">always</code></p>
          <p style="${c.caption} opacity: 0.75; margin-bottom: 0.75rem;">Underline always visible</p>
          <mms-link href="#" underline="always" label="Always underlined"></mms-link>
        </div>
        <div style="padding: 1rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${c.h3}"><code style="${c.monoSm}">none</code></p>
          <p style="${c.caption} opacity: 0.75; margin-bottom: 0.75rem;">Never shows underline</p>
          <mms-link href="#" underline="none" label="No underline"></mms-link>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size -->
      <h2 style="${c.h2}">Size</h2>
      <p style="${c.bodySm} opacity: 0.85; max-width: ${l}; margin-bottom: 1.5rem;">
        The <code style="${c.monoSm}">size</code> prop maps to the body type scale.
      </p>

      <div style="display: flex; align-items: baseline; gap: 2rem; margin-bottom: 2rem;">
        <div>
          <p style="${c.caption} opacity: 0.65; margin-bottom: 0.5rem;"><code style="${c.monoSm}">sm</code></p>
          <mms-link href="#" size="sm" label="Small link"></mms-link>
        </div>
        <div>
          <p style="${c.caption} opacity: 0.65; margin-bottom: 0.5rem;"><code style="${c.monoSm}">md</code></p>
          <mms-link href="#" size="md" label="Medium link"></mms-link>
        </div>
        <div>
          <p style="${c.caption} opacity: 0.65; margin-bottom: 0.5rem;"><code style="${c.monoSm}">lg</code></p>
          <mms-link href="#" size="lg" label="Large link"></mms-link>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Icons -->
      <h2 style="${c.h2}">Icons</h2>
      <p style="${c.bodySm} opacity: 0.85; max-width: ${l}; margin-bottom: 1.5rem;">
        The <code style="${c.monoSm}">left-icon</code> and <code style="${c.monoSm}">right-icon</code> props add icons to indicate actions or destinations.
      </p>

      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 2rem; margin-bottom: 2rem;">
        <mms-link href="#" label="Download PDF" right-icon="download"></mms-link>
        <mms-link href="#" label="Open in new tab" right-icon="arrow-square-out" target="_blank"></mms-link>
        <mms-link href="#" label="Contact us" left-icon="envelope"></mms-link>
        <mms-link href="#" label="View document" left-icon="file-text" right-icon="arrow-right"></mms-link>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Framework router integration -->
      <h2 style="${c.h2}">Framework router integration</h2>
      <p style="${c.bodySm} opacity: 0.85; max-width: ${l}; margin-bottom: 1.5rem;">
        When <code style="${c.monoSm}">href</code> is omitted, the component renders styled text suitable for wrapping with framework router components (e.g., React Router's <code style="${c.monoSm}">&lt;Link&gt;</code>).
      </p>

      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${c.monoSm}; margin-bottom: 2rem;"><code>// React Router example
import { Link } from 'react-router-dom';

&lt;Link to="/dashboard"&gt;
  &lt;mms-link label="Go to Dashboard" /&gt;
&lt;/Link&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${c.h2}">Accessibility</h2>
      <ul style="${c.bodySm} opacity: 0.85; margin: 0 0 2rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">When <code style="${c.monoSm}">href</code> is provided, renders semantic <code style="${c.monoSm}">&lt;a&gt;</code> element</li>
        <li style="margin-bottom: 0.5rem;">When <code style="${c.monoSm}">href</code> is omitted, applies <code style="${c.monoSm}">role="link"</code> and keyboard handler</li>
        <li style="margin-bottom: 0.5rem;">External links (<code style="${c.monoSm}">target="_blank"</code>) automatically add <code style="${c.monoSm}">rel="noopener noreferrer"</code></li>
        <li style="margin-bottom: 0.5rem;">Focus ring meets WCAG 2.2 minimum area requirements</li>
        <li style="margin-bottom: 0.5rem;">Link colors meet WCAG AA contrast (4.5:1+) on white backgrounds</li>
        <li style="margin-bottom: 0.5rem;">Visited state provides clear visual distinction per WCAG 2.4.4</li>
      </ul>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="${c.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${c.monoSm}"><code>&lt;mms-link href="/about" label="About us"&gt;&lt;/mms-link&gt;
&lt;mms-link href="/docs" label="Documentation" right-icon="arrow-right"&gt;&lt;/mms-link&gt;
&lt;mms-link href="/contact" link-color="neutral" label="Contact"&gt;&lt;/mms-link&gt;</code></pre>

    </div>
  `},f={name:`Playground`,tags:[`!dev`],args:{linkColor:`standard`,size:`md`,underline:`hover`,state:`default`,disabled:!1,label:`Link text`,href:``,target:``,leftIcon:``,rightIcon:``,theme:`maximus`},decorators:[e=>n`
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
      `],argTypes:{linkColor:{name:`Link color`,control:`select`,options:[`standard`,`neutral`],description:`"standard" uses fixed USWDS government link colors (blue default, purple visited) — these never change with theme. "neutral" inherits the surrounding text color for use in breadcrumbs, footers, and navigation where color distinction isn't needed.`,table:{category:`Component Props`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Link text size (maps to body type scale)`,table:{category:`Component Props`}},underline:{name:`Underline`,control:`select`,options:[`always`,`hover`,`none`],description:`When to show underline: always, hover (default), or none`,table:{category:`Component Props`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`visited`],description:`Preview state (Storybook only)`,table:{category:`Component Props`}},disabled:{name:`Disabled`,control:`boolean`,description:`Disabled state`,table:{category:`Component Props`}},label:{name:`Label`,control:`text`,description:`Link text`,table:{category:`Component Props`}},href:{name:`Href`,control:`text`,description:`Navigation URL (optional). When provided, renders a semantic <a> element with native link behavior. When omitted, renders styled text with role="link" — use this when wrapping with framework routers like React Router's <Link> or Next.js <Link> that handle navigation themselves.`,table:{category:`Component Props`}},target:{name:`Target`,control:`select`,options:[``,`_self`,`_blank`,`_parent`,`_top`],description:`Where to open the linked URL: "" or "_self" = same tab (default), "_blank" = new tab (auto-adds rel="noopener noreferrer" for security), "_parent" = parent frame, "_top" = full window (breaks out of frames). Only applies when href is set.`,table:{category:`Component Props`}},leftIcon:{name:`Left Icon`,control:`select`,options:o,description:`Icon before the label`,table:{category:`Component Props`}},rightIcon:{name:`Right Icon`,control:`select`,options:o,description:`Icon after the label`,table:{category:`Component Props`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`default`],description:`Brand theme`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=n.href?` href="${n.href}"`:``,i=n.target?` target="${n.target}"`:``,a=n.linkColor===`standard`?``:` link-color="${n.linkColor}"`,o=n.size===`md`?``:` size="${n.size}"`,s=n.underline===`hover`?``:` underline="${n.underline}"`,c=n.leftIcon?` left-icon="${n.leftIcon}"`:``,l=n.rightIcon?` right-icon="${n.rightIcon}"`:``,u=n.disabled?` disabled`:``;return`<mms-link${r}${i}${a}${o}${s}
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
    `},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Link</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Links navigate users to other pages or resources. The MMS Design System provides a unified link component with two color options — <code style="\${t.monoSm}">standard</code> (USWDS blue with visited state) and <code style="\${t.monoSm}">neutral</code> (inherits text color).
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Link color -->
      <h2 style="\${t.h2}">Link color</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">color</code> prop controls the link's color scheme.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">standard</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            USWDS-aligned blue links with distinct visited state. Use for most navigation links. See <em>Foundations → Colors → Structural Colors → Utility</em> for color values.
          </p>
          <div style="margin-top: 1rem; display: flex; gap: 1.5rem; align-items: center;">
            <mms-link href="#" label="Default link"></mms-link>
            <mms-link href="#" label="Visited link" state="visited"></mms-link>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">neutral</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Inherits text color. Use for navigation where color differentiation isn't needed (e.g., breadcrumbs, footers).
          </p>
          <div style="margin-top: 1rem;">
            <mms-link href="#" link-color="neutral" label="Neutral link"></mms-link>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Underline -->
      <h2 style="\${t.h2}">Underline</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">underline</code> prop controls when the underline appears.
      </p>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
        <div style="padding: 1rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}"><code style="\${t.monoSm}">hover</code> (default)</p>
          <p style="\${t.caption} opacity: 0.75; margin-bottom: 0.75rem;">Underline appears on hover</p>
          <mms-link href="#" underline="hover" label="Hover to see underline"></mms-link>
        </div>
        <div style="padding: 1rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}"><code style="\${t.monoSm}">always</code></p>
          <p style="\${t.caption} opacity: 0.75; margin-bottom: 0.75rem;">Underline always visible</p>
          <mms-link href="#" underline="always" label="Always underlined"></mms-link>
        </div>
        <div style="padding: 1rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}"><code style="\${t.monoSm}">none</code></p>
          <p style="\${t.caption} opacity: 0.75; margin-bottom: 0.75rem;">Never shows underline</p>
          <mms-link href="#" underline="none" label="No underline"></mms-link>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size -->
      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">size</code> prop maps to the body type scale.
      </p>

      <div style="display: flex; align-items: baseline; gap: 2rem; margin-bottom: 2rem;">
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;"><code style="\${t.monoSm}">sm</code></p>
          <mms-link href="#" size="sm" label="Small link"></mms-link>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;"><code style="\${t.monoSm}">md</code></p>
          <mms-link href="#" size="md" label="Medium link"></mms-link>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;"><code style="\${t.monoSm}">lg</code></p>
          <mms-link href="#" size="lg" label="Large link"></mms-link>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Icons -->
      <h2 style="\${t.h2}">Icons</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">left-icon</code> and <code style="\${t.monoSm}">right-icon</code> props add icons to indicate actions or destinations.
      </p>

      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 2rem; margin-bottom: 2rem;">
        <mms-link href="#" label="Download PDF" right-icon="download"></mms-link>
        <mms-link href="#" label="Open in new tab" right-icon="arrow-square-out" target="_blank"></mms-link>
        <mms-link href="#" label="Contact us" left-icon="envelope"></mms-link>
        <mms-link href="#" label="View document" left-icon="file-text" right-icon="arrow-right"></mms-link>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Framework router integration -->
      <h2 style="\${t.h2}">Framework router integration</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        When <code style="\${t.monoSm}">href</code> is omitted, the component renders styled text suitable for wrapping with framework router components (e.g., React Router's <code style="\${t.monoSm}">&lt;Link&gt;</code>).
      </p>

      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm}; margin-bottom: 2rem;"><code>// React Router example
import { Link } from 'react-router-dom';

&lt;Link to="/dashboard"&gt;
  &lt;mms-link label="Go to Dashboard" /&gt;
&lt;/Link&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>
      <ul style="\${t.bodySm} opacity: 0.85; margin: 0 0 2rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">When <code style="\${t.monoSm}">href</code> is provided, renders semantic <code style="\${t.monoSm}">&lt;a&gt;</code> element</li>
        <li style="margin-bottom: 0.5rem;">When <code style="\${t.monoSm}">href</code> is omitted, applies <code style="\${t.monoSm}">role="link"</code> and keyboard handler</li>
        <li style="margin-bottom: 0.5rem;">External links (<code style="\${t.monoSm}">target="_blank"</code>) automatically add <code style="\${t.monoSm}">rel="noopener noreferrer"</code></li>
        <li style="margin-bottom: 0.5rem;">Focus ring meets WCAG 2.2 minimum area requirements</li>
        <li style="margin-bottom: 0.5rem;">Link colors meet WCAG AA contrast (4.5:1+) on white backgrounds</li>
        <li style="margin-bottom: 0.5rem;">Visited state provides clear visual distinction per WCAG 2.4.4</li>
      </ul>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm}"><code>&lt;mms-link href="/about" label="About us"&gt;&lt;/mms-link&gt;
&lt;mms-link href="/docs" label="Documentation" right-icon="arrow-right"&gt;&lt;/mms-link&gt;
&lt;mms-link href="/contact" link-color="neutral" label="Contact"&gt;&lt;/mms-link&gt;</code></pre>

    </div>
  \`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      options: ['maximus', 'va-gov', 'default'],
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
}`,...f.parameters?.docs?.source}}},p=[`Overview`,`PlaygroundStory`]}));m();export{d as Overview,f as PlaygroundStory,p as __namedExportsOrder,s as default,m as n,a as t};