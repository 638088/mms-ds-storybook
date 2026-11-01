import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{n as r,t as i}from"./iframe-CEHEciqj.js";import{t as a}from"./mms-inline-alert.component-Yg3wQ3bY.js";import{a as o,c as s,d as c,n as l,o as u,r as d,u as f}from"./doc-styles-DkvR_Qyb.js";var p,m,h;e((()=>{n(),r(),a(),s(),p={title:`Developer Guide/Overview`},m={name:`Overview`,render:()=>t`
    <div data-theme=${d} data-mode=${u()} style=${l}>

      <h1 style="${c.h1}">Developer Guide</h1>
      <p style="${c.body} ${o.muted} margin-bottom: ${f.subsection};">Everything you need to integrate the Maximus Design System into your application</p>

      <hr style="${o.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           ARCHITECTURE OVERVIEW
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${c.h2}">Architecture</h2>
      
      <p style="${c.body} margin-bottom: ${f.content};">
        The Maximus Design System is built on <strong>Lit Web Components</strong> — framework-agnostic custom elements that work natively in any modern browser. This means you can use our components in:
      </p>

      <ul style="${c.body} margin-bottom: ${f.content}; padding-left: var(--spacing-lg1);">
        <li><strong>Vanilla HTML/JavaScript</strong> — zero dependencies, just import and use</li>
        <li><strong>React</strong> — via thin wrapper components with full TypeScript support</li>
        <li><strong>Vue, Angular, Svelte</strong> — web components work natively in all frameworks</li>
        <li><strong>Server-side rendering</strong> — using Declarative Shadow DOM</li>
      </ul>

      <div style="${o.panel} margin-bottom: ${f.subsection};">
        <h3 style="${c.h3}">Key principle: one source, many targets</h3>
        <p style="${c.body}">
          Every component is authored once in Lit and distributed to all target platforms. This ensures visual consistency and reduces maintenance overhead across React, AEM, Drupal, Salesforce, and native HTML applications.
        </p>
      </div>

      <hr style="${o.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           PACKAGE STRUCTURE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${c.h2}">Package structure</h2>

      <p style="${c.body} margin-bottom: ${f.content};">The package is organized for optimal tree-shaking and flexibility:</p>

      <pre style="${o.pre}" data-hl="off"><code>@mms/design-system
├── tokens.css          <span style="${o.muted}">← CSS custom properties (spacing, radius, etc.)</span>
├── themes/
│   ├── default.css       <span style="${o.muted}">← Neutral development theme (light)</span>
│   ├── default-dark.css  <span style="${o.muted}">← Neutral development theme (dark)</span>
│   ├── maximus.css       <span style="${o.muted}">← Maximus brand theme (light)</span>
│   ├── maximus-dark.css  <span style="${o.muted}">← Maximus brand theme (dark)</span>
│   ├── ves.css        <span style="${o.muted}">← ${i.ves} brand theme (light)</span>
│   └── ves-dark.css   <span style="${o.muted}">← ${i.ves} brand theme (dark)</span>
├── components/
│   ├── mms-button        <span style="${o.muted}">← Individual component (treeshake-friendly)</span>
│   ├── mms-icon
│   └── ...
└── index.js             <span style="${o.muted}">← All components bundled (convenience import)</span></code></pre>

      <hr style="${o.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           TREE-SHAKING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${c.h2}">Tree-shaking</h2>

      <p style="${c.body} margin-bottom: ${f.content};">
        <strong>Bundle only what you use.</strong> The package supports two levels of tree-shaking:
      </p>

      <h3 style="${c.h3}">1. Component-level tree-shaking</h3>
      <p style="${c.body} margin-bottom: ${f.content};">Import individual components to exclude unused code from your bundle:</p>

      <pre style="${o.pre}"><code><span style="${o.muted}">// GOOD: Only mms-button code ends up in your bundle</span>
import '@mms/design-system/components/mms-button';

<span style="${o.muted}">// AVOID in production: Imports ALL components</span>
import '@mms/design-system';</code></pre>

      <h3 style="${c.h3}">2. Theme-level tree-shaking</h3>
      <p style="${c.body} margin-bottom: ${f.content};">Import only the brand theme your project uses:</p>

      <pre style="${o.pre}"><code><span style="${o.muted}">// GOOD: Only ${i.ves} tokens in your CSS</span>
import '@mms/design-system/themes/ves';

<span style="${o.muted}">// If you need dark mode support:</span>
import '@mms/design-system/themes/ves-dark';</code></pre>

      <div style="margin-bottom: ${f.subsection};">
        <mms-inline-alert
          alert-type="caution"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Note:"
          message="Always import tokens.css — it contains structural tokens (spacing, radius, typography scale) that all components depend on."
        ></mms-inline-alert>
      </div>

      <hr style="${o.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           CHOOSING YOUR INTEGRATION
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${c.h2}">Choose your integration</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: ${f.content}; margin-bottom: ${f.subsection};">
        
        <div style="${o.panel}">
          <h3 style="${c.h3}">Native HTML</h3>
          <p style="${c.body} margin-bottom: ${f.content};">
            Simplest path. Use web components directly in HTML. No framework required.
          </p>
          <p style="${c.body} ${o.muted}">
            Best for: Static sites, CMS integrations, vanilla JS apps
          </p>
        </div>

        <div style="${o.panel}">
          <h3 style="${c.h3}">React</h3>
          <p style="${c.body} margin-bottom: ${f.content};">
            Wrapper components with React-style props, events, and TypeScript support.
          </p>
          <p style="${c.body} ${o.muted}">
            Best for: React apps, Next.js, DXHub applications
          </p>
        </div>

      </div>

      <p style="${c.body} ${o.muted}">
        Continue to the next sections for step-by-step integration guides.
      </p>

    </div>
  `},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Developer Guide</h1>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.subsection};">Everything you need to integrate the Maximus Design System into your application</p>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           ARCHITECTURE OVERVIEW
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Architecture</h2>
      
      <p style="\${t.body} margin-bottom: \${space.content};">
        The Maximus Design System is built on <strong>Lit Web Components</strong> — framework-agnostic custom elements that work natively in any modern browser. This means you can use our components in:
      </p>

      <ul style="\${t.body} margin-bottom: \${space.content}; padding-left: var(--spacing-lg1);">
        <li><strong>Vanilla HTML/JavaScript</strong> — zero dependencies, just import and use</li>
        <li><strong>React</strong> — via thin wrapper components with full TypeScript support</li>
        <li><strong>Vue, Angular, Svelte</strong> — web components work natively in all frameworks</li>
        <li><strong>Server-side rendering</strong> — using Declarative Shadow DOM</li>
      </ul>

      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        <h3 style="\${t.h3}">Key principle: one source, many targets</h3>
        <p style="\${t.body}">
          Every component is authored once in Lit and distributed to all target platforms. This ensures visual consistency and reduces maintenance overhead across React, AEM, Drupal, Salesforce, and native HTML applications.
        </p>
      </div>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           PACKAGE STRUCTURE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Package structure</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">The package is organized for optimal tree-shaking and flexibility:</p>

      <pre style="\${doc.pre}" data-hl="off"><code>@mms/design-system
├── tokens.css          <span style="\${doc.muted}">← CSS custom properties (spacing, radius, etc.)</span>
├── themes/
│   ├── default.css       <span style="\${doc.muted}">← Neutral development theme (light)</span>
│   ├── default-dark.css  <span style="\${doc.muted}">← Neutral development theme (dark)</span>
│   ├── maximus.css       <span style="\${doc.muted}">← Maximus brand theme (light)</span>
│   ├── maximus-dark.css  <span style="\${doc.muted}">← Maximus brand theme (dark)</span>
│   ├── ves.css        <span style="\${doc.muted}">← \${BRAND_LABELS.ves} brand theme (light)</span>
│   └── ves-dark.css   <span style="\${doc.muted}">← \${BRAND_LABELS.ves} brand theme (dark)</span>
├── components/
│   ├── mms-button        <span style="\${doc.muted}">← Individual component (treeshake-friendly)</span>
│   ├── mms-icon
│   └── ...
└── index.js             <span style="\${doc.muted}">← All components bundled (convenience import)</span></code></pre>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           TREE-SHAKING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Tree-shaking</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        <strong>Bundle only what you use.</strong> The package supports two levels of tree-shaking:
      </p>

      <h3 style="\${t.h3}">1. Component-level tree-shaking</h3>
      <p style="\${t.body} margin-bottom: \${space.content};">Import individual components to exclude unused code from your bundle:</p>

      <pre style="\${doc.pre}"><code><span style="\${doc.muted}">// GOOD: Only mms-button code ends up in your bundle</span>
import '@mms/design-system/components/mms-button';

<span style="\${doc.muted}">// AVOID in production: Imports ALL components</span>
import '@mms/design-system';</code></pre>

      <h3 style="\${t.h3}">2. Theme-level tree-shaking</h3>
      <p style="\${t.body} margin-bottom: \${space.content};">Import only the brand theme your project uses:</p>

      <pre style="\${doc.pre}"><code><span style="\${doc.muted}">// GOOD: Only \${BRAND_LABELS.ves} tokens in your CSS</span>
import '@mms/design-system/themes/ves';

<span style="\${doc.muted}">// If you need dark mode support:</span>
import '@mms/design-system/themes/ves-dark';</code></pre>

      <div style="margin-bottom: \${space.subsection};">
        <mms-inline-alert
          alert-type="caution"
          role="note"
          aria-live="off"
          .dismissible=\${false}
          summary="Note:"
          message="Always import tokens.css — it contains structural tokens (spacing, radius, typography scale) that all components depend on."
        ></mms-inline-alert>
      </div>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           CHOOSING YOUR INTEGRATION
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Choose your integration</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: \${space.content}; margin-bottom: \${space.subsection};">
        
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Native HTML</h3>
          <p style="\${t.body} margin-bottom: \${space.content};">
            Simplest path. Use web components directly in HTML. No framework required.
          </p>
          <p style="\${t.body} \${doc.muted}">
            Best for: Static sites, CMS integrations, vanilla JS apps
          </p>
        </div>

        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">React</h3>
          <p style="\${t.body} margin-bottom: \${space.content};">
            Wrapper components with React-style props, events, and TypeScript support.
          </p>
          <p style="\${t.body} \${doc.muted}">
            Best for: React apps, Next.js, DXHub applications
          </p>
        </div>

      </div>

      <p style="\${t.body} \${doc.muted}">
        Continue to the next sections for step-by-step integration guides.
      </p>

    </div>
  \`
}`,...m.parameters?.docs?.source}}},h=[`Overview`]}))();export{m as Overview,h as __namedExportsOrder,p as default};