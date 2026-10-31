import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{t as r}from"./mms-card.component-Ae9XIj4r.js";import{a as i,c as a,l as o,n as s,o as c,r as l,s as u,u as d}from"./doc-styles-BoEZknkJ.js";var f,p,m,h;e((()=>{n(),r(),a(),f=`${d.mono} background: var(--color-surface-raised); border: var(--border-width-xs) solid var(--color-border-subtle); padding: var(--spacing-xs1) var(--spacing-sm1); border-radius: var(--radius-sm);`,p={title:`Developer Guide/HTML Usage`},m={name:`HTML Usage`,render:()=>t`
    <div data-theme=${l} data-mode=${c()} style=${s}>

      <h1 style="${d.h1}">Using components in HTML</h1>
      <p style="${d.body} ${i.muted} margin-bottom: ${o.subsection};">Web components work natively in any HTML document — no framework required</p>

      <hr style="${i.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           BASIC USAGE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${d.h2}">Basic usage</h2>

      <p style="${d.body} margin-bottom: ${o.content};">
        After importing a component, use it like any native HTML element. Components are <strong>custom elements</strong> — the browser treats them as first-class citizens.
      </p>

      <div style="${i.panel} margin-bottom: ${o.subsection};">
        <div style="display: flex; align-items: center; gap: ${o.content}; margin-bottom: ${o.content};">
          <div style="${u.label} width: var(--spacing-lg2); height: var(--spacing-lg2); flex-shrink: 0; background: var(--color-surface-raised); color: var(--color-text-default); border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center;">1</div>
          <h3 style="${d.h3} margin: 0;">Import components</h3>
        </div>

        <div style="background: var(--color-surface-raised); border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-md); padding: var(--spacing-sm2) var(--spacing-md1); margin-bottom: ${o.content};">
          <div style="${u.label} ${i.muted}">main.js or entry file</div>
        </div>

        <pre style="${i.pre}"><code>// Import CSS (once, in entry point)
import '@mms/design-system/tokens.css';
import '@mms/design-system/themes/maximus';
import '@mms/design-system/themes/maximus-dark';  // required for dark mode

// Import components you'll use
import '@mms/design-system/components/mms-button';
import '@mms/design-system/components/mms-icon';</code></pre>
      </div>

      <div style="${i.panel} margin-bottom: ${o.subsection};">
        <div style="display: flex; align-items: center; gap: ${o.content}; margin-bottom: ${o.content};">
          <div style="${u.label} width: var(--spacing-lg2); height: var(--spacing-lg2); flex-shrink: 0; background: var(--color-surface-raised); color: var(--color-text-default); border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center;">2</div>
          <h3 style="${d.h3} margin: 0;">Use in HTML</h3>
        </div>

        <div style="background: var(--color-surface-raised); border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-md); padding: var(--spacing-sm2) var(--spacing-md1); margin-bottom: ${o.content};">
          <div style="${u.label} ${i.muted}">index.html</div>
        </div>

        <pre style="${i.pre}"><code>&lt;!-- Apply theme to the root element --&gt;
&lt;html data-theme="maximus"&gt;
&lt;body&gt;

  &lt;!-- Use components like native elements --&gt;
  &lt;mms-button
    variant="primary"
    label="Get Started"
  &gt;&lt;/mms-button&gt;

  &lt;mms-button
    variant="secondary"
    label="Learn More"
    left-icon="arrow-right"
  &gt;&lt;/mms-button&gt;

  &lt;mms-icon name="check-circle" size="lg"&gt;&lt;/mms-icon&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>

      <hr style="${i.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           ATTRIBUTES
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${d.h2}">Setting attributes</h2>

      <p style="${d.body} margin-bottom: ${o.content};">
        Component properties are set via HTML attributes. Use <strong>kebab-case</strong> for multi-word attributes:
      </p>

      <pre style="${i.pre} margin-bottom: ${o.subsection};"><code>&lt;!-- String attributes --&gt;
&lt;mms-button variant="primary" label="Click Me"&gt;&lt;/mms-button&gt;

&lt;!-- Multi-word attributes use kebab-case --&gt;
&lt;mms-button left-icon="arrow-left"&gt;&lt;/mms-button&gt;

&lt;!-- Boolean attributes: presence = true, absence = false --&gt;
&lt;mms-button disabled&gt;&lt;/mms-button&gt;        &lt;!-- disabled=true --&gt;
&lt;mms-button&gt;&lt;/mms-button&gt;                 &lt;!-- disabled=false --&gt;</code></pre>

      <hr style="${i.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           EVENT HANDLING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${d.h2}">Event handling</h2>

      <p style="${d.body} margin-bottom: ${o.content};">
        Native events work as they always do. Components also emit their own <strong>custom events</strong> — the names are bare, with <strong>no <code style="${f}">mms-</code> prefix</strong> (<code style="${f}">change</code>, <code style="${f}">close</code>, <code style="${f}">dismiss</code>, <code style="${f}">tab-change</code>). Listen with <code style="${f}">addEventListener()</code> either way:
      </p>

      <pre style="${i.pre}"><code>// HTML
&lt;mms-button id="submit" label="Submit"&gt;&lt;/mms-button&gt;
&lt;mms-checkbox id="terms" label="I agree"&gt;&lt;/mms-checkbox&gt;

// JavaScript — native event, nothing special
document.getElementById('submit').addEventListener('click', () => {
  console.log('Button clicked');
});

// Custom event — data arrives on event.detail
document.getElementById('terms').addEventListener('change', (event) => {
  console.log(event.detail.checked);  // true / false
});</code></pre>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${o.subsection};">
        <div slot="body-content" style="${d.body}">
          <strong>Which events does a component emit?</strong> Every event name and <code style="${f}">detail</code> shape is listed in <code style="${f}">custom-elements.json</code>, which ships inside the package — or on that component's page in this Storybook.
        </div>
      </mms-card>

      <hr style="${i.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           DYNAMIC UPDATES
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${d.h2}">Dynamic updates</h2>

      <p style="${d.body} margin-bottom: ${o.content};">
        Update component state via JavaScript properties or attributes:
      </p>

      <pre style="${i.pre}"><code>const button = document.querySelector('mms-button');

// Option 1: Set property (camelCase)
button.variant = 'secondary';
button.leftIcon = 'check';
button.disabled = true;

// Option 2: Set attribute (kebab-case)
button.setAttribute('variant', 'secondary');
button.setAttribute('left-icon', 'check');
button.setAttribute('disabled', '');  // Boolean: set to empty string

// Remove boolean attribute to disable
button.removeAttribute('disabled');</code></pre>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${o.subsection};">
        <div slot="body-content" style="${d.body}">
          <strong>Tip:</strong> Prefer setting JavaScript <strong>properties</strong> (camelCase) for better performance and type safety. Attributes are serialized to strings; properties preserve types.
        </div>
      </mms-card>

      <hr style="${i.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           THEMING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${d.h2}">Theming & dark mode</h2>

      <p style="${d.body} margin-bottom: ${o.content};">
        Themes are applied via data attributes on a container element:
      </p>

      <pre style="${i.pre}"><code>&lt;!-- Follows the user's OS / browser dark mode setting --&gt;
&lt;html data-theme="maximus"&gt;

&lt;!-- Pinned — ignores the browser setting --&gt;
&lt;html data-theme="maximus" data-mode="light"&gt;
&lt;html data-theme="maximus" data-mode="dark"&gt;

&lt;!-- Optional three-way control: dark → light → follow browser --&gt;
&lt;script&gt;
  function cycleMode() {
    const html = document.documentElement;
    if (!html.dataset.mode) html.dataset.mode = 'dark';
    else if (html.dataset.mode === 'dark') html.dataset.mode = 'light';
    else delete html.dataset.mode; // back to following the browser
  }
&lt;/script&gt;</code></pre>

      <p style="${d.body} margin-bottom: ${o.subsection};">
        <strong>You do not need a dark mode toggle.</strong> With no
        <code style="${f}">data-mode</code>
        attribute the theme follows
        <code style="${f}">prefers-color-scheme</code>
        on its own &mdash; a media query in the theme CSS, no JavaScript involved. This works on
        every path, including static HTML, AEM and Drupal. Setting
        <code style="${f}">data-mode</code>
        opts out and pins the mode. Auto-following requires the
        <code style="${f}">-dark</code>
        sheet to be loaded; the standalone build already includes every theme.
      </p>

      <hr style="${i.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           STATIC HTML (NO BUNDLER)
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${d.h2}">Static HTML (no bundler)</h2>

      <p style="${d.body} margin-bottom: ${o.content};">
        For a page with no build tool, load <code style="${f}">standalone.js</code>. It is self-contained — Lit, every component, the icons, and all tokens and themes are inside that one file, and it falls back to the Maximus brand if the page sets no <code style="${f}">data-theme</code>. There are no stylesheets to link and nothing to configure.
      </p>

      <pre style="${i.pre}"><code>&lt;!DOCTYPE html&gt;
&lt;html data-theme="maximus"&gt;
&lt;head&gt;
  &lt;script type="module" src="./node_modules/@mms/design-system/dist/standalone.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;mms-button variant="primary" label="Hello"&gt;&lt;/mms-button&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

      <p style="${d.body} margin-bottom: ${o.content};">
        Serve the page over HTTP — browsers refuse module scripts on <code style="${f}">file://</code>. <code style="${f}">npx mms-ds start</code> writes this page for you and serves it — see <strong>Installation, Path A</strong>. Any other static server works too.
      </p>

      <ul style="${d.bodySm} ${i.muted} padding-left: var(--spacing-lg1); margin: 0 0 ${o.subsection};">
        <li style="margin-bottom: ${o.label};"><strong>Prototyping only:</strong> The standalone file contains every component whether the page uses it or not, so it cannot be tree-shaken. For production use a bundler with per-component imports — see <strong>Installation, Path B</strong>.</li>
        <li><strong>Do not point a plain script tag at <code style="${f}">dist/index.js</code></strong> or at an individual component file. Those import <code style="${f}">lit</code> by bare specifier, which a browser cannot resolve without an import map — you get <code style="${f}">Failed to resolve module specifier "lit"</code>. That is what <code style="${f}">standalone.js</code> exists to solve.</li>
      </ul>

    </div>
  `},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'HTML Usage',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Using components in HTML</h1>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.subsection};">Web components work natively in any HTML document — no framework required</p>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           BASIC USAGE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Basic usage</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        After importing a component, use it like any native HTML element. Components are <strong>custom elements</strong> — the browser treats them as first-class citizens.
      </p>

      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        <div style="display: flex; align-items: center; gap: \${space.content}; margin-bottom: \${space.content};">
          <div style="\${docType.label} width: var(--spacing-lg2); height: var(--spacing-lg2); flex-shrink: 0; background: var(--color-surface-raised); color: var(--color-text-default); border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center;">1</div>
          <h3 style="\${t.h3} margin: 0;">Import components</h3>
        </div>

        <div style="background: var(--color-surface-raised); border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-md); padding: var(--spacing-sm2) var(--spacing-md1); margin-bottom: \${space.content};">
          <div style="\${docType.label} \${doc.muted}">main.js or entry file</div>
        </div>

        <pre style="\${doc.pre}"><code>// Import CSS (once, in entry point)
import '@mms/design-system/tokens.css';
import '@mms/design-system/themes/maximus';
import '@mms/design-system/themes/maximus-dark';  // required for dark mode

// Import components you'll use
import '@mms/design-system/components/mms-button';
import '@mms/design-system/components/mms-icon';</code></pre>
      </div>

      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        <div style="display: flex; align-items: center; gap: \${space.content}; margin-bottom: \${space.content};">
          <div style="\${docType.label} width: var(--spacing-lg2); height: var(--spacing-lg2); flex-shrink: 0; background: var(--color-surface-raised); color: var(--color-text-default); border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center;">2</div>
          <h3 style="\${t.h3} margin: 0;">Use in HTML</h3>
        </div>

        <div style="background: var(--color-surface-raised); border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-md); padding: var(--spacing-sm2) var(--spacing-md1); margin-bottom: \${space.content};">
          <div style="\${docType.label} \${doc.muted}">index.html</div>
        </div>

        <pre style="\${doc.pre}"><code>&lt;!-- Apply theme to the root element --&gt;
&lt;html data-theme="maximus"&gt;
&lt;body&gt;

  &lt;!-- Use components like native elements --&gt;
  &lt;mms-button
    variant="primary"
    label="Get Started"
  &gt;&lt;/mms-button&gt;

  &lt;mms-button
    variant="secondary"
    label="Learn More"
    left-icon="arrow-right"
  &gt;&lt;/mms-button&gt;

  &lt;mms-icon name="check-circle" size="lg"&gt;&lt;/mms-icon&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           ATTRIBUTES
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Setting attributes</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Component properties are set via HTML attributes. Use <strong>kebab-case</strong> for multi-word attributes:
      </p>

      <pre style="\${doc.pre} margin-bottom: \${space.subsection};"><code>&lt;!-- String attributes --&gt;
&lt;mms-button variant="primary" label="Click Me"&gt;&lt;/mms-button&gt;

&lt;!-- Multi-word attributes use kebab-case --&gt;
&lt;mms-button left-icon="arrow-left"&gt;&lt;/mms-button&gt;

&lt;!-- Boolean attributes: presence = true, absence = false --&gt;
&lt;mms-button disabled&gt;&lt;/mms-button&gt;        &lt;!-- disabled=true --&gt;
&lt;mms-button&gt;&lt;/mms-button&gt;                 &lt;!-- disabled=false --&gt;</code></pre>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           EVENT HANDLING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Event handling</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Native events work as they always do. Components also emit their own <strong>custom events</strong> — the names are bare, with <strong>no <code style="\${CODE}">mms-</code> prefix</strong> (<code style="\${CODE}">change</code>, <code style="\${CODE}">close</code>, <code style="\${CODE}">dismiss</code>, <code style="\${CODE}">tab-change</code>). Listen with <code style="\${CODE}">addEventListener()</code> either way:
      </p>

      <pre style="\${doc.pre}"><code>// HTML
&lt;mms-button id="submit" label="Submit"&gt;&lt;/mms-button&gt;
&lt;mms-checkbox id="terms" label="I agree"&gt;&lt;/mms-checkbox&gt;

// JavaScript — native event, nothing special
document.getElementById('submit').addEventListener('click', () => {
  console.log('Button clicked');
});

// Custom event — data arrives on event.detail
document.getElementById('terms').addEventListener('change', (event) => {
  console.log(event.detail.checked);  // true / false
});</code></pre>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content" style="\${t.body}">
          <strong>Which events does a component emit?</strong> Every event name and <code style="\${CODE}">detail</code> shape is listed in <code style="\${CODE}">custom-elements.json</code>, which ships inside the package — or on that component's page in this Storybook.
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           DYNAMIC UPDATES
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Dynamic updates</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Update component state via JavaScript properties or attributes:
      </p>

      <pre style="\${doc.pre}"><code>const button = document.querySelector('mms-button');

// Option 1: Set property (camelCase)
button.variant = 'secondary';
button.leftIcon = 'check';
button.disabled = true;

// Option 2: Set attribute (kebab-case)
button.setAttribute('variant', 'secondary');
button.setAttribute('left-icon', 'check');
button.setAttribute('disabled', '');  // Boolean: set to empty string

// Remove boolean attribute to disable
button.removeAttribute('disabled');</code></pre>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content" style="\${t.body}">
          <strong>Tip:</strong> Prefer setting JavaScript <strong>properties</strong> (camelCase) for better performance and type safety. Attributes are serialized to strings; properties preserve types.
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           THEMING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Theming & dark mode</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Themes are applied via data attributes on a container element:
      </p>

      <pre style="\${doc.pre}"><code>&lt;!-- Follows the user's OS / browser dark mode setting --&gt;
&lt;html data-theme="maximus"&gt;

&lt;!-- Pinned — ignores the browser setting --&gt;
&lt;html data-theme="maximus" data-mode="light"&gt;
&lt;html data-theme="maximus" data-mode="dark"&gt;

&lt;!-- Optional three-way control: dark → light → follow browser --&gt;
&lt;script&gt;
  function cycleMode() {
    const html = document.documentElement;
    if (!html.dataset.mode) html.dataset.mode = 'dark';
    else if (html.dataset.mode === 'dark') html.dataset.mode = 'light';
    else delete html.dataset.mode; // back to following the browser
  }
&lt;/script&gt;</code></pre>

      <p style="\${t.body} margin-bottom: \${space.subsection};">
        <strong>You do not need a dark mode toggle.</strong> With no
        <code style="\${CODE}">data-mode</code>
        attribute the theme follows
        <code style="\${CODE}">prefers-color-scheme</code>
        on its own &mdash; a media query in the theme CSS, no JavaScript involved. This works on
        every path, including static HTML, AEM and Drupal. Setting
        <code style="\${CODE}">data-mode</code>
        opts out and pins the mode. Auto-following requires the
        <code style="\${CODE}">-dark</code>
        sheet to be loaded; the standalone build already includes every theme.
      </p>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           STATIC HTML (NO BUNDLER)
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Static HTML (no bundler)</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        For a page with no build tool, load <code style="\${CODE}">standalone.js</code>. It is self-contained — Lit, every component, the icons, and all tokens and themes are inside that one file, and it falls back to the Maximus brand if the page sets no <code style="\${CODE}">data-theme</code>. There are no stylesheets to link and nothing to configure.
      </p>

      <pre style="\${doc.pre}"><code>&lt;!DOCTYPE html&gt;
&lt;html data-theme="maximus"&gt;
&lt;head&gt;
  &lt;script type="module" src="./node_modules/@mms/design-system/dist/standalone.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;mms-button variant="primary" label="Hello"&gt;&lt;/mms-button&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Serve the page over HTTP — browsers refuse module scripts on <code style="\${CODE}">file://</code>. <code style="\${CODE}">npx mms-ds start</code> writes this page for you and serves it — see <strong>Installation, Path A</strong>. Any other static server works too.
      </p>

      <ul style="\${t.bodySm} \${doc.muted} padding-left: var(--spacing-lg1); margin: 0 0 \${space.subsection};">
        <li style="margin-bottom: \${space.label};"><strong>Prototyping only:</strong> The standalone file contains every component whether the page uses it or not, so it cannot be tree-shaken. For production use a bundler with per-component imports — see <strong>Installation, Path B</strong>.</li>
        <li><strong>Do not point a plain script tag at <code style="\${CODE}">dist/index.js</code></strong> or at an individual component file. Those import <code style="\${CODE}">lit</code> by bare specifier, which a browser cannot resolve without an import map — you get <code style="\${CODE}">Failed to resolve module specifier "lit"</code>. That is what <code style="\${CODE}">standalone.js</code> exists to solve.</li>
      </ul>

    </div>
  \`
}`,...m.parameters?.docs?.source}}},h=[`HTMLUsage`]}))();export{m as HTMLUsage,h as __namedExportsOrder,p as default};