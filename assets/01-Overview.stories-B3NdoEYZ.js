import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-aQ4dERgF.js";var r,i,a,o;e((()=>{n(),r=`960px`,i={title:`Developer Guide/Overview`},a={name:`Overview`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${r}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Developer guide</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">Everything you need to integrate the Maximus Design System into your application</p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           ARCHITECTURE OVERVIEW
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Architecture</h2>
      
      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        The Maximus Design System is built on <strong>Lit Web Components</strong> — framework-agnostic custom elements that work natively in any modern browser. This means you can use our components in:
      </p>

      <ul style="margin: 0 0 1.5rem; padding-left: 1.5rem; font-size: 0.9375rem;">
        <li><strong>Vanilla HTML/JavaScript</strong> — zero dependencies, just import and use</li>
        <li><strong>React</strong> — via thin wrapper components with full TypeScript support</li>
        <li><strong>Vue, Angular, Svelte</strong> — web components work natively in all frameworks</li>
        <li><strong>Server-side rendering</strong> — using Declarative Shadow DOM</li>
      </ul>

      <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(59, 130, 246, 0.15);">
        <h3 style="margin: 0 0 0.75rem; font-size: 1rem; font-weight: 700; color: #3b82f6;">🎯 Key Principle: One Source, Many Targets</h3>
        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">
          Every component is authored once in Lit and distributed to all target platforms. This ensures visual consistency and reduces maintenance overhead across React, AEM, Drupal, Salesforce, and native HTML applications.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           PACKAGE STRUCTURE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Package structure</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">The package is organized for optimal tree-shaking and flexibility:</p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #569cd6;">@mms/design-system</span>
├── <span style="color: #ce9178;">tokens.css</span>          <span style="color: #6a9955;">← CSS custom properties (spacing, radius, etc.)</span>
├── <span style="color: #ce9178;">themes/</span>
│   ├── default.css       <span style="color: #6a9955;">← Neutral development theme (light)</span>
│   ├── default-dark.css  <span style="color: #6a9955;">← Neutral development theme (dark)</span>
│   ├── maximus.css       <span style="color: #6a9955;">← Maximus brand theme (light)</span>
│   ├── maximus-dark.css  <span style="color: #6a9955;">← Maximus brand theme (dark)</span>
│   ├── va-gov.css        <span style="color: #6a9955;">← VA.gov brand theme (light)</span>
│   └── va-gov-dark.css   <span style="color: #6a9955;">← VA.gov brand theme (dark)</span>
├── <span style="color: #ce9178;">components/</span>
│   ├── mms-button        <span style="color: #6a9955;">← Individual component (treeshake-friendly)</span>
│   ├── mms-icon
│   └── ...
└── <span style="color: #ce9178;">index.js</span>             <span style="color: #6a9955;">← All components bundled (convenience import)</span></code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           TREE-SHAKING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Tree-shaking</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        <strong>Bundle only what you use.</strong> The package supports two levels of tree-shaking:
      </p>

      <h3 style="margin: 0 0 0.75rem; font-size: 1.125rem; font-weight: 600;">1. Component-level tree-shaking</h3>
      <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.9;">Import individual components to exclude unused code from your bundle:</p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// ✅ GOOD: Only mms-button code ends up in your bundle</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-button'</span>;

<span style="color: #6a9955;">// ❌ AVOID in production: Imports ALL components</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system'</span>;</code></pre>

      <h3 style="margin: 0 0 0.75rem; font-size: 1.125rem; font-weight: 600;">2. Theme-level tree-shaking</h3>
      <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.9;">Import only the brand theme your project uses:</p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// ✅ GOOD: Only VA.gov tokens in your CSS</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/va-gov'</span>;

<span style="color: #6a9955;">// If you need dark mode support:</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/va-gov-dark'</span>;</code></pre>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 2rem;">
        <strong>⚠️ Note:</strong> Always import <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">tokens.css</code> — it contains structural tokens (spacing, radius, typography scale) that all components depend on.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           CHOOSING YOUR INTEGRATION
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Choose your integration</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.02)); border-radius: 12px; padding: 1.5rem; border: 1px solid rgba(16, 185, 129, 0.15);">
          <h3 style="margin: 0 0 0.5rem; font-size: 1.125rem; font-weight: 700; color: #10b981;">🌐 Native HTML</h3>
          <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
            Simplest path. Use web components directly in HTML. No framework required.
          </p>
          <p style="margin: 0; font-size: 0.8125rem; opacity: 0.7;">
            Best for: Static sites, CMS integrations, vanilla JS apps
          </p>
        </div>

        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02)); border-radius: 12px; padding: 1.5rem; border: 1px solid rgba(59, 130, 246, 0.15);">
          <h3 style="margin: 0 0 0.5rem; font-size: 1.125rem; font-weight: 700; color: #3b82f6;">⚛️ React</h3>
          <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
            Wrapper components with React-style props, events, and TypeScript support.
          </p>
          <p style="margin: 0; font-size: 0.8125rem; opacity: 0.7;">
            Best for: React apps, Next.js, DXHub applications
          </p>
        </div>

      </div>

      <p style="margin: 0; font-size: 0.875rem; opacity: 0.7;">
        Continue to the next sections for step-by-step integration guides.
      </p>

    </div>
  `},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Developer guide</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">Everything you need to integrate the Maximus Design System into your application</p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           ARCHITECTURE OVERVIEW
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Architecture</h2>
      
      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        The Maximus Design System is built on <strong>Lit Web Components</strong> — framework-agnostic custom elements that work natively in any modern browser. This means you can use our components in:
      </p>

      <ul style="margin: 0 0 1.5rem; padding-left: 1.5rem; font-size: 0.9375rem;">
        <li><strong>Vanilla HTML/JavaScript</strong> — zero dependencies, just import and use</li>
        <li><strong>React</strong> — via thin wrapper components with full TypeScript support</li>
        <li><strong>Vue, Angular, Svelte</strong> — web components work natively in all frameworks</li>
        <li><strong>Server-side rendering</strong> — using Declarative Shadow DOM</li>
      </ul>

      <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(59, 130, 246, 0.15);">
        <h3 style="margin: 0 0 0.75rem; font-size: 1rem; font-weight: 700; color: #3b82f6;">🎯 Key Principle: One Source, Many Targets</h3>
        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">
          Every component is authored once in Lit and distributed to all target platforms. This ensures visual consistency and reduces maintenance overhead across React, AEM, Drupal, Salesforce, and native HTML applications.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           PACKAGE STRUCTURE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Package structure</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">The package is organized for optimal tree-shaking and flexibility:</p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #569cd6;">@mms/design-system</span>
├── <span style="color: #ce9178;">tokens.css</span>          <span style="color: #6a9955;">← CSS custom properties (spacing, radius, etc.)</span>
├── <span style="color: #ce9178;">themes/</span>
│   ├── default.css       <span style="color: #6a9955;">← Neutral development theme (light)</span>
│   ├── default-dark.css  <span style="color: #6a9955;">← Neutral development theme (dark)</span>
│   ├── maximus.css       <span style="color: #6a9955;">← Maximus brand theme (light)</span>
│   ├── maximus-dark.css  <span style="color: #6a9955;">← Maximus brand theme (dark)</span>
│   ├── va-gov.css        <span style="color: #6a9955;">← VA.gov brand theme (light)</span>
│   └── va-gov-dark.css   <span style="color: #6a9955;">← VA.gov brand theme (dark)</span>
├── <span style="color: #ce9178;">components/</span>
│   ├── mms-button        <span style="color: #6a9955;">← Individual component (treeshake-friendly)</span>
│   ├── mms-icon
│   └── ...
└── <span style="color: #ce9178;">index.js</span>             <span style="color: #6a9955;">← All components bundled (convenience import)</span></code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           TREE-SHAKING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Tree-shaking</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        <strong>Bundle only what you use.</strong> The package supports two levels of tree-shaking:
      </p>

      <h3 style="margin: 0 0 0.75rem; font-size: 1.125rem; font-weight: 600;">1. Component-level tree-shaking</h3>
      <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.9;">Import individual components to exclude unused code from your bundle:</p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// ✅ GOOD: Only mms-button code ends up in your bundle</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-button'</span>;

<span style="color: #6a9955;">// ❌ AVOID in production: Imports ALL components</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system'</span>;</code></pre>

      <h3 style="margin: 0 0 0.75rem; font-size: 1.125rem; font-weight: 600;">2. Theme-level tree-shaking</h3>
      <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.9;">Import only the brand theme your project uses:</p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// ✅ GOOD: Only VA.gov tokens in your CSS</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/va-gov'</span>;

<span style="color: #6a9955;">// If you need dark mode support:</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/va-gov-dark'</span>;</code></pre>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 2rem;">
        <strong>⚠️ Note:</strong> Always import <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">tokens.css</code> — it contains structural tokens (spacing, radius, typography scale) that all components depend on.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           CHOOSING YOUR INTEGRATION
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Choose your integration</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.02)); border-radius: 12px; padding: 1.5rem; border: 1px solid rgba(16, 185, 129, 0.15);">
          <h3 style="margin: 0 0 0.5rem; font-size: 1.125rem; font-weight: 700; color: #10b981;">🌐 Native HTML</h3>
          <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
            Simplest path. Use web components directly in HTML. No framework required.
          </p>
          <p style="margin: 0; font-size: 0.8125rem; opacity: 0.7;">
            Best for: Static sites, CMS integrations, vanilla JS apps
          </p>
        </div>

        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02)); border-radius: 12px; padding: 1.5rem; border: 1px solid rgba(59, 130, 246, 0.15);">
          <h3 style="margin: 0 0 0.5rem; font-size: 1.125rem; font-weight: 700; color: #3b82f6;">⚛️ React</h3>
          <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
            Wrapper components with React-style props, events, and TypeScript support.
          </p>
          <p style="margin: 0; font-size: 0.8125rem; opacity: 0.7;">
            Best for: React apps, Next.js, DXHub applications
          </p>
        </div>

      </div>

      <p style="margin: 0; font-size: 0.875rem; opacity: 0.7;">
        Continue to the next sections for step-by-step integration guides.
      </p>

    </div>
  \`
}`,...a.parameters?.docs?.source}}},o=[`Overview`]}))();export{a as Overview,o as __namedExportsOrder,i as default};