import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-CBo78ikN.js";var r,i,a,o;e((()=>{n(),r=`960px`,i={title:`Developer Guide/React Usage`},a={name:`React Usage`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${r}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Using components in React</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">Every component works in React — two of them ship typed wrappers, the rest are used as custom elements</p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           WHY WRAPPERS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Why React wrappers?</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        While web components work in React, there are friction points:
      </p>

      <ul style="margin: 0 0 1.5rem; padding-left: 1.5rem; font-size: 0.9375rem;">
        <li><strong>Event handling</strong> — React's synthetic events don't natively work with custom element events</li>
        <li><strong>Property vs attribute</strong> — React passes all props as attributes (strings); objects/arrays need special handling</li>
        <li><strong>TypeScript</strong> — Custom elements lack type definitions for JSX</li>
        <li><strong>Refs</strong> — React refs need wrapping to expose the underlying element</li>
      </ul>

      <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(59, 130, 246, 0.15);">
        <h3 style="margin: 0 0 0.75rem; font-size: 1rem; font-weight: 700; color: #3b82f6;">🎯 The Solution: @lit/react Wrappers</h3>
        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.9;">
          Thin React wrapper components built with <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">@lit/react</code>. These wrappers provide typed props, React-style event handlers (<code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">onClick</code>), and proper ref forwarding — all while delegating to the underlying Lit web component.
        </p>
        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.9;">
          <strong>Two components ship wrappers today</strong> — <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">MmsButton</code> and <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">MmsIcon</code>. Every other component is used in React as a custom element (Option 2 below). That path is fully supported and nothing is unavailable in React — it costs the boilerplate the wrappers exist to remove.
        </p>
        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">
          <strong>🚧 Coming:</strong> wrappers are being extended to <strong>every component</strong> in the system. Until then, Option 2 is the path for the rest — and it stays valid afterwards, so nothing you write today needs rewriting.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           SETUP: IMPORT TOKENS & THEME
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Setup: Install peers, import tokens &amp; theme</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">@lit/react</code> is an optional peer — <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">npm install @mms/design-system</code> does not pull it in, so the <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">/react</code> entry point will not resolve without it. Install all three React peers yourself:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;">npm install react react-dom @lit/react</code></pre>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Then import the design tokens and your project's theme in your app entry point:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// index.tsx or App.tsx — import ONCE at app root</span>

<span style="color: #6a9955;">// 1. Structural tokens (spacing, typography, radius, etc.)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;

<span style="color: #6a9955;">// 2. Brand theme — choose ONE per project</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;

<span style="color: #6a9955;">// 3. Activate the theme (required!)</span>
document.<span style="color: #dcdcaa;">documentElement</span>.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'data-theme'</span>, <span style="color: #ce9178;">'maximus'</span>);

<span style="color: #6a9955;">// 4. Now import components where needed</span>
<span style="color: #c586c0;">import</span> { MmsButton } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react'</span>;</code></pre>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 1rem;">
        <strong>⚠️ Don't forget:</strong> You must set <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">data-theme="maximus"</code> on the HTML element to activate brand colors. Without it, components render without styling.
      </div>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e; margin-bottom: 2rem;">
        <strong>📘 See also:</strong> <em>Installation → Import tokens & theme</em> for the full list of available themes and dark mode setup.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 1: REACT WRAPPERS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Option 1: React wrapper components — <code style="font-size: 1.125rem; background: rgba(0,0,0,0.1); padding: 2px 8px; border-radius: 4px;">MmsButton</code> and <code style="font-size: 1.125rem; background: rgba(0,0,0,0.1); padding: 2px 8px; border-radius: 4px;">MmsIcon</code></h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        These two components import from the React-specific entry point. Use this path when the component you need is one of them:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// React component with typed props and React events</span>
<span style="color: #c586c0;">import</span> { MmsButton, MmsIcon } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react'</span>;

<span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">MyComponent</span>() {
  <span style="color: #c586c0;">return</span> (
    <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsButton</span>
      <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span>
      <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Submit"</span>
      <span style="color: #9cdcfe;">leftIcon</span>=<span style="color: #ce9178;">"check"</span>          <span style="color: #6a9955;">{/* camelCase props */}</span>
      <span style="color: #9cdcfe;">onClick</span>={() => <span style="color: #dcdcaa;">handleClick</span>()} <span style="color: #6a9955;">{/* React event handler */}</span>
    <span style="color: #808080;">/&gt;</span>
  );
}</code></pre>

      <div style="background: #dcfce7; border-left: 4px solid #22c55e; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #166534; margin-bottom: 2rem;">
        <strong>✅ Benefits:</strong>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.25rem;">
          <li><strong>TypeScript support</strong> — Full prop types and event types</li>
          <li><strong>camelCase props</strong> — <code>leftIcon</code> instead of <code>left-icon</code></li>
          <li><strong>React events</strong> — <code>onClick</code>, <code>onChange</code>, etc. work as expected</li>
          <li><strong>Tree-shakeable</strong> — Import only what you need</li>
        </ul>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPONENT MAPPING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Component mapping</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Web components use kebab-case (<code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">mms-button</code>). React wrappers use PascalCase (<code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">MmsButton</code>). <strong>This table is the complete list of wrappers</strong> — if a component is not on it, reach for Option 2:
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.3);">
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">Web Component</th>
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">React Wrapper</th>
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.15);">
            <td style="padding: 0.75rem 1rem;"><code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">mms-button</code></td>
            <td style="padding: 0.75rem 1rem;"><code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">MmsButton</code></td>
            <td style="padding: 0.75rem 1rem;">Primary, secondary, ghost button variants</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.15);">
            <td style="padding: 0.75rem 1rem;"><code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">mms-icon</code></td>
            <td style="padding: 0.75rem 1rem;"><code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">MmsIcon</code></td>
            <td style="padding: 0.75rem 1rem;">SVG icon from the icon registry</td>
          </tr>
        </tbody>
      </table>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e; margin-bottom: 2rem;">
        <strong>📋 Naming:</strong> where a wrapper exists it is named <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">mms-{name}</code> → <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">Mms{Name}</code>, and that convention holds as the table grows to cover every component. A component missing from the table today means no wrapper exists <em>yet</em> — not that it can't be used in React.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 2: DIRECT WEB COMPONENTS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Option 2: Custom elements in JSX — every other component</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        This is the standard path for the components that don't ship a wrapper, not a fallback. Custom elements render in React JSX and everything works — props, events, refs. It costs more boilerplate, which is exactly what the wrappers exist to remove:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// Import component (registers the custom element)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-text-field'</span>;

<span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">MyComponent</span>() {
  <span style="color: #569cd6;">const</span> fieldRef = <span style="color: #dcdcaa;">useRef</span><<span style="color: #4ec9b0;">HTMLElement</span>>(null);

  <span style="color: #dcdcaa;">useEffect</span>(() => {
    <span style="color: #569cd6;">const</span> field = fieldRef.current;

    <span style="color: #6a9955;">// Events: attach manually, there is no onInput prop</span>
    <span style="color: #569cd6;">const</span> <span style="color: #dcdcaa;">onInput</span> = (e) => <span style="color: #dcdcaa;">setValue</span>(e.target.value);
    field?.<span style="color: #dcdcaa;">addEventListener</span>(<span style="color: #ce9178;">'input'</span>, onInput);

    <span style="color: #6a9955;">// Non-string values: set as a property, not an attribute</span>
    <span style="color: #c586c0;">if</span> (field) field.required = <span style="color: #569cd6;">true</span>;

    <span style="color: #c586c0;">return</span> () => field?.<span style="color: #dcdcaa;">removeEventListener</span>(<span style="color: #ce9178;">'input'</span>, onInput);
  }, []);

  <span style="color: #c586c0;">return</span> (
    <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-text-field</span>
      <span style="color: #9cdcfe;">ref</span>={fieldRef}
      <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Full name"</span>
      <span style="color: #9cdcfe;">helper-text</span>=<span style="color: #ce9178;">"As it appears on your ID"</span>  <span style="color: #6a9955;">{/* kebab-case attributes */}</span>
    <span style="color: #808080;">/&gt;</span>
  );
}</code></pre>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 2rem;">
        <strong>⚠️ What you take on:</strong>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.25rem;">
          <li>No TypeScript types for custom element props — declare them yourself (below)</li>
          <li>Attributes are kebab-case (<code>left-icon</code>, not <code>leftIcon</code>)</li>
          <li>Events require <code>useRef</code> + <code>useEffect</code> + <code>addEventListener</code></li>
          <li>Attributes carry strings only. Set non-string values (booleans, arrays, objects) as properties through a ref — <code>ref.current.checked = true</code></li>
        </ul>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           TYPESCRIPT
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">TypeScript support</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Option 2 components are untyped in JSX. Declare the ones you use — the shapes are in
        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">custom-elements.json</code>, which ships inside the package and lists every prop, attribute and event for all components:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// types/mms-design-system.d.ts</span>
<span style="color: #c586c0;">declare</span> <span style="color: #c586c0;">namespace</span> <span style="color: #4ec9b0;">JSX</span> {
  <span style="color: #c586c0;">interface</span> <span style="color: #4ec9b0;">IntrinsicElements</span> {
    <span style="color: #ce9178;">'mms-text-field'</span>: <span style="color: #4ec9b0;">React.DetailedHTMLProps</span>&lt;
      <span style="color: #4ec9b0;">React.HTMLAttributes</span>&lt;<span style="color: #4ec9b0;">HTMLElement</span>&gt; & {
        label?: <span style="color: #4ec9b0;">string</span>;
        placeholder?: <span style="color: #4ec9b0;">string</span>;
        size?: <span style="color: #ce9178;">'sm'</span> | <span style="color: #ce9178;">'md'</span> | <span style="color: #ce9178;">'lg'</span>;
        <span style="color: #ce9178;">'helper-text'</span>?: <span style="color: #4ec9b0;">string</span>;
        <span style="color: #ce9178;">'error-text'</span>?: <span style="color: #4ec9b0;">string</span>;
        required?: <span style="color: #4ec9b0;">boolean</span>;
        disabled?: <span style="color: #4ec9b0;">boolean</span>;
      },
      <span style="color: #4ec9b0;">HTMLElement</span>
    >;
  }
}</code></pre>

      <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.7;">
        <strong>Note:</strong> the two Option 1 wrappers carry their TypeScript definitions already — no manual declarations needed for <code>MmsButton</code> or <code>MmsIcon</code>.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPLETE EXAMPLE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Complete example</h2>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// App.tsx</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;
<span style="color: #6a9955;">// Option 1 — wrappers</span>
<span style="color: #c586c0;">import</span> { MmsButton, MmsIcon } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react'</span>;
<span style="color: #6a9955;">// Option 2 — everything else, as a custom element</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-text-field'</span>;

<span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">App</span>() {
  <span style="color: #569cd6;">const</span> [<span style="color: #9cdcfe;">loading</span>, <span style="color: #9cdcfe;">setLoading</span>] = <span style="color: #dcdcaa;">useState</span>(<span style="color: #569cd6;">false</span>);
  <span style="color: #569cd6;">const</span> [<span style="color: #9cdcfe;">name</span>, <span style="color: #9cdcfe;">setName</span>] = <span style="color: #dcdcaa;">useState</span>(<span style="color: #ce9178;">''</span>);
  <span style="color: #569cd6;">const</span> nameRef = <span style="color: #dcdcaa;">useRef</span>(<span style="color: #569cd6;">null</span>);

  <span style="color: #dcdcaa;">useEffect</span>(() => {
    <span style="color: #569cd6;">const</span> field = nameRef.current;
    <span style="color: #569cd6;">const</span> <span style="color: #dcdcaa;">onInput</span> = (e) => <span style="color: #dcdcaa;">setName</span>(e.target.value);
    field?.<span style="color: #dcdcaa;">addEventListener</span>(<span style="color: #ce9178;">'input'</span>, onInput);
    <span style="color: #c586c0;">return</span> () => field?.<span style="color: #dcdcaa;">removeEventListener</span>(<span style="color: #ce9178;">'input'</span>, onInput);
  }, []);

  <span style="color: #569cd6;">const</span> <span style="color: #dcdcaa;">handleSubmit</span> = <span style="color: #c586c0;">async</span> () => {
    <span style="color: #dcdcaa;">setLoading</span>(<span style="color: #569cd6;">true</span>);
    <span style="color: #c586c0;">await</span> <span style="color: #dcdcaa;">submitForm</span>();
    <span style="color: #dcdcaa;">setLoading</span>(<span style="color: #569cd6;">false</span>);
  };

  <span style="color: #c586c0;">return</span> (
    <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">div</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span>
      <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">header</span><span style="color: #808080;">&gt;</span>
        <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">h1</span><span style="color: #808080;">&gt;</span>Welcome<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">h1</span><span style="color: #808080;">&gt;</span>
        <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsIcon</span> <span style="color: #9cdcfe;">name</span>=<span style="color: #ce9178;">"user"</span> <span style="color: #9cdcfe;">size</span>=<span style="color: #ce9178;">"lg"</span> <span style="color: #808080;">/&gt;</span>
      <span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">header</span><span style="color: #808080;">&gt;</span>

      <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">main</span><span style="color: #808080;">&gt;</span>
        <span style="color: #6a9955;">{/* No wrapper — custom element, kebab-case attributes, ref for events */}</span>
        <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-text-field</span>
          <span style="color: #9cdcfe;">ref</span>={nameRef}
          <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Full name"</span>
          <span style="color: #9cdcfe;">helper-text</span>=<span style="color: #ce9178;">"As it appears on your ID"</span>
        <span style="color: #808080;">/&gt;</span>

        <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsButton</span>
          <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span>
          <span style="color: #9cdcfe;">label</span>={loading ? <span style="color: #ce9178;">"Submitting..."</span> : <span style="color: #ce9178;">"Submit"</span>}
          <span style="color: #9cdcfe;">leftIcon</span>={loading ? <span style="color: #ce9178;">"spinner"</span> : <span style="color: #ce9178;">"check"</span>}
          <span style="color: #9cdcfe;">disabled</span>={loading || !name}
          <span style="color: #9cdcfe;">onClick</span>={handleSubmit}
        <span style="color: #808080;">/&gt;</span>

        <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsButton</span>
          <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"secondary"</span>
          <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Cancel"</span>
          <span style="color: #9cdcfe;">onClick</span>={() => <span style="color: #dcdcaa;">navigate</span>(<span style="color: #ce9178;">'/'</span>)}
        <span style="color: #808080;">/&gt;</span>
      <span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">main</span><span style="color: #808080;">&gt;</span>
    <span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">div</span><span style="color: #808080;">&gt;</span>
  );
}</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           REACT 19 NOTE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">React 19+ note</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        React 19 adds <a href="https://react.dev/blog/2024/04/25/react-19#support-for-custom-elements" style="color: #3b82f6;">native custom element support</a> — it assigns a value as a property when the element defines one, and falls back to an attribute otherwise. That removes some of the Option 2 boilerplate on React 19 projects. The <code>useRef</code> + <code>addEventListener</code> pattern above is the portable one and keeps working either way.
      </p>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e;">
        <strong>📋 Future-Proof:</strong> The <code>@mms/design-system/react</code> wrappers remain useful for TypeScript types and a consistent API, even with React 19's native support.
      </div>

    </div>
  `},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'React Usage',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Using components in React</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">Every component works in React — two of them ship typed wrappers, the rest are used as custom elements</p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           WHY WRAPPERS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Why React wrappers?</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        While web components work in React, there are friction points:
      </p>

      <ul style="margin: 0 0 1.5rem; padding-left: 1.5rem; font-size: 0.9375rem;">
        <li><strong>Event handling</strong> — React's synthetic events don't natively work with custom element events</li>
        <li><strong>Property vs attribute</strong> — React passes all props as attributes (strings); objects/arrays need special handling</li>
        <li><strong>TypeScript</strong> — Custom elements lack type definitions for JSX</li>
        <li><strong>Refs</strong> — React refs need wrapping to expose the underlying element</li>
      </ul>

      <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(59, 130, 246, 0.15);">
        <h3 style="margin: 0 0 0.75rem; font-size: 1rem; font-weight: 700; color: #3b82f6;">🎯 The Solution: @lit/react Wrappers</h3>
        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.9;">
          Thin React wrapper components built with <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">@lit/react</code>. These wrappers provide typed props, React-style event handlers (<code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">onClick</code>), and proper ref forwarding — all while delegating to the underlying Lit web component.
        </p>
        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.9;">
          <strong>Two components ship wrappers today</strong> — <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">MmsButton</code> and <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">MmsIcon</code>. Every other component is used in React as a custom element (Option 2 below). That path is fully supported and nothing is unavailable in React — it costs the boilerplate the wrappers exist to remove.
        </p>
        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">
          <strong>🚧 Coming:</strong> wrappers are being extended to <strong>every component</strong> in the system. Until then, Option 2 is the path for the rest — and it stays valid afterwards, so nothing you write today needs rewriting.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           SETUP: IMPORT TOKENS & THEME
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Setup: Install peers, import tokens &amp; theme</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">@lit/react</code> is an optional peer — <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">npm install @mms/design-system</code> does not pull it in, so the <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">/react</code> entry point will not resolve without it. Install all three React peers yourself:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;">npm install react react-dom @lit/react</code></pre>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Then import the design tokens and your project's theme in your app entry point:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// index.tsx or App.tsx — import ONCE at app root</span>

<span style="color: #6a9955;">// 1. Structural tokens (spacing, typography, radius, etc.)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;

<span style="color: #6a9955;">// 2. Brand theme — choose ONE per project</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;

<span style="color: #6a9955;">// 3. Activate the theme (required!)</span>
document.<span style="color: #dcdcaa;">documentElement</span>.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'data-theme'</span>, <span style="color: #ce9178;">'maximus'</span>);

<span style="color: #6a9955;">// 4. Now import components where needed</span>
<span style="color: #c586c0;">import</span> { MmsButton } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react'</span>;</code></pre>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 1rem;">
        <strong>⚠️ Don't forget:</strong> You must set <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">data-theme="maximus"</code> on the HTML element to activate brand colors. Without it, components render without styling.
      </div>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e; margin-bottom: 2rem;">
        <strong>📘 See also:</strong> <em>Installation → Import tokens & theme</em> for the full list of available themes and dark mode setup.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 1: REACT WRAPPERS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Option 1: React wrapper components — <code style="font-size: 1.125rem; background: rgba(0,0,0,0.1); padding: 2px 8px; border-radius: 4px;">MmsButton</code> and <code style="font-size: 1.125rem; background: rgba(0,0,0,0.1); padding: 2px 8px; border-radius: 4px;">MmsIcon</code></h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        These two components import from the React-specific entry point. Use this path when the component you need is one of them:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// React component with typed props and React events</span>
<span style="color: #c586c0;">import</span> { MmsButton, MmsIcon } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react'</span>;

<span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">MyComponent</span>() {
  <span style="color: #c586c0;">return</span> (
    <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsButton</span>
      <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span>
      <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Submit"</span>
      <span style="color: #9cdcfe;">leftIcon</span>=<span style="color: #ce9178;">"check"</span>          <span style="color: #6a9955;">{/* camelCase props */}</span>
      <span style="color: #9cdcfe;">onClick</span>={() => <span style="color: #dcdcaa;">handleClick</span>()} <span style="color: #6a9955;">{/* React event handler */}</span>
    <span style="color: #808080;">/&gt;</span>
  );
}</code></pre>

      <div style="background: #dcfce7; border-left: 4px solid #22c55e; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #166534; margin-bottom: 2rem;">
        <strong>✅ Benefits:</strong>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.25rem;">
          <li><strong>TypeScript support</strong> — Full prop types and event types</li>
          <li><strong>camelCase props</strong> — <code>leftIcon</code> instead of <code>left-icon</code></li>
          <li><strong>React events</strong> — <code>onClick</code>, <code>onChange</code>, etc. work as expected</li>
          <li><strong>Tree-shakeable</strong> — Import only what you need</li>
        </ul>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPONENT MAPPING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Component mapping</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Web components use kebab-case (<code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">mms-button</code>). React wrappers use PascalCase (<code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">MmsButton</code>). <strong>This table is the complete list of wrappers</strong> — if a component is not on it, reach for Option 2:
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.3);">
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">Web Component</th>
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">React Wrapper</th>
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.15);">
            <td style="padding: 0.75rem 1rem;"><code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">mms-button</code></td>
            <td style="padding: 0.75rem 1rem;"><code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">MmsButton</code></td>
            <td style="padding: 0.75rem 1rem;">Primary, secondary, ghost button variants</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.15);">
            <td style="padding: 0.75rem 1rem;"><code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">mms-icon</code></td>
            <td style="padding: 0.75rem 1rem;"><code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">MmsIcon</code></td>
            <td style="padding: 0.75rem 1rem;">SVG icon from the icon registry</td>
          </tr>
        </tbody>
      </table>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e; margin-bottom: 2rem;">
        <strong>📋 Naming:</strong> where a wrapper exists it is named <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">mms-{name}</code> → <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">Mms{Name}</code>, and that convention holds as the table grows to cover every component. A component missing from the table today means no wrapper exists <em>yet</em> — not that it can't be used in React.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 2: DIRECT WEB COMPONENTS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Option 2: Custom elements in JSX — every other component</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        This is the standard path for the components that don't ship a wrapper, not a fallback. Custom elements render in React JSX and everything works — props, events, refs. It costs more boilerplate, which is exactly what the wrappers exist to remove:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// Import component (registers the custom element)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-text-field'</span>;

<span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">MyComponent</span>() {
  <span style="color: #569cd6;">const</span> fieldRef = <span style="color: #dcdcaa;">useRef</span><<span style="color: #4ec9b0;">HTMLElement</span>>(null);

  <span style="color: #dcdcaa;">useEffect</span>(() => {
    <span style="color: #569cd6;">const</span> field = fieldRef.current;

    <span style="color: #6a9955;">// Events: attach manually, there is no onInput prop</span>
    <span style="color: #569cd6;">const</span> <span style="color: #dcdcaa;">onInput</span> = (e) => <span style="color: #dcdcaa;">setValue</span>(e.target.value);
    field?.<span style="color: #dcdcaa;">addEventListener</span>(<span style="color: #ce9178;">'input'</span>, onInput);

    <span style="color: #6a9955;">// Non-string values: set as a property, not an attribute</span>
    <span style="color: #c586c0;">if</span> (field) field.required = <span style="color: #569cd6;">true</span>;

    <span style="color: #c586c0;">return</span> () => field?.<span style="color: #dcdcaa;">removeEventListener</span>(<span style="color: #ce9178;">'input'</span>, onInput);
  }, []);

  <span style="color: #c586c0;">return</span> (
    <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-text-field</span>
      <span style="color: #9cdcfe;">ref</span>={fieldRef}
      <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Full name"</span>
      <span style="color: #9cdcfe;">helper-text</span>=<span style="color: #ce9178;">"As it appears on your ID"</span>  <span style="color: #6a9955;">{/* kebab-case attributes */}</span>
    <span style="color: #808080;">/&gt;</span>
  );
}</code></pre>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 2rem;">
        <strong>⚠️ What you take on:</strong>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.25rem;">
          <li>No TypeScript types for custom element props — declare them yourself (below)</li>
          <li>Attributes are kebab-case (<code>left-icon</code>, not <code>leftIcon</code>)</li>
          <li>Events require <code>useRef</code> + <code>useEffect</code> + <code>addEventListener</code></li>
          <li>Attributes carry strings only. Set non-string values (booleans, arrays, objects) as properties through a ref — <code>ref.current.checked = true</code></li>
        </ul>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           TYPESCRIPT
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">TypeScript support</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Option 2 components are untyped in JSX. Declare the ones you use — the shapes are in
        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">custom-elements.json</code>, which ships inside the package and lists every prop, attribute and event for all components:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// types/mms-design-system.d.ts</span>
<span style="color: #c586c0;">declare</span> <span style="color: #c586c0;">namespace</span> <span style="color: #4ec9b0;">JSX</span> {
  <span style="color: #c586c0;">interface</span> <span style="color: #4ec9b0;">IntrinsicElements</span> {
    <span style="color: #ce9178;">'mms-text-field'</span>: <span style="color: #4ec9b0;">React.DetailedHTMLProps</span>&lt;
      <span style="color: #4ec9b0;">React.HTMLAttributes</span>&lt;<span style="color: #4ec9b0;">HTMLElement</span>&gt; & {
        label?: <span style="color: #4ec9b0;">string</span>;
        placeholder?: <span style="color: #4ec9b0;">string</span>;
        size?: <span style="color: #ce9178;">'sm'</span> | <span style="color: #ce9178;">'md'</span> | <span style="color: #ce9178;">'lg'</span>;
        <span style="color: #ce9178;">'helper-text'</span>?: <span style="color: #4ec9b0;">string</span>;
        <span style="color: #ce9178;">'error-text'</span>?: <span style="color: #4ec9b0;">string</span>;
        required?: <span style="color: #4ec9b0;">boolean</span>;
        disabled?: <span style="color: #4ec9b0;">boolean</span>;
      },
      <span style="color: #4ec9b0;">HTMLElement</span>
    >;
  }
}</code></pre>

      <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.7;">
        <strong>Note:</strong> the two Option 1 wrappers carry their TypeScript definitions already — no manual declarations needed for <code>MmsButton</code> or <code>MmsIcon</code>.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPLETE EXAMPLE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Complete example</h2>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// App.tsx</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;
<span style="color: #6a9955;">// Option 1 — wrappers</span>
<span style="color: #c586c0;">import</span> { MmsButton, MmsIcon } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react'</span>;
<span style="color: #6a9955;">// Option 2 — everything else, as a custom element</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-text-field'</span>;

<span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">App</span>() {
  <span style="color: #569cd6;">const</span> [<span style="color: #9cdcfe;">loading</span>, <span style="color: #9cdcfe;">setLoading</span>] = <span style="color: #dcdcaa;">useState</span>(<span style="color: #569cd6;">false</span>);
  <span style="color: #569cd6;">const</span> [<span style="color: #9cdcfe;">name</span>, <span style="color: #9cdcfe;">setName</span>] = <span style="color: #dcdcaa;">useState</span>(<span style="color: #ce9178;">''</span>);
  <span style="color: #569cd6;">const</span> nameRef = <span style="color: #dcdcaa;">useRef</span>(<span style="color: #569cd6;">null</span>);

  <span style="color: #dcdcaa;">useEffect</span>(() => {
    <span style="color: #569cd6;">const</span> field = nameRef.current;
    <span style="color: #569cd6;">const</span> <span style="color: #dcdcaa;">onInput</span> = (e) => <span style="color: #dcdcaa;">setName</span>(e.target.value);
    field?.<span style="color: #dcdcaa;">addEventListener</span>(<span style="color: #ce9178;">'input'</span>, onInput);
    <span style="color: #c586c0;">return</span> () => field?.<span style="color: #dcdcaa;">removeEventListener</span>(<span style="color: #ce9178;">'input'</span>, onInput);
  }, []);

  <span style="color: #569cd6;">const</span> <span style="color: #dcdcaa;">handleSubmit</span> = <span style="color: #c586c0;">async</span> () => {
    <span style="color: #dcdcaa;">setLoading</span>(<span style="color: #569cd6;">true</span>);
    <span style="color: #c586c0;">await</span> <span style="color: #dcdcaa;">submitForm</span>();
    <span style="color: #dcdcaa;">setLoading</span>(<span style="color: #569cd6;">false</span>);
  };

  <span style="color: #c586c0;">return</span> (
    <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">div</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span>
      <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">header</span><span style="color: #808080;">&gt;</span>
        <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">h1</span><span style="color: #808080;">&gt;</span>Welcome<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">h1</span><span style="color: #808080;">&gt;</span>
        <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsIcon</span> <span style="color: #9cdcfe;">name</span>=<span style="color: #ce9178;">"user"</span> <span style="color: #9cdcfe;">size</span>=<span style="color: #ce9178;">"lg"</span> <span style="color: #808080;">/&gt;</span>
      <span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">header</span><span style="color: #808080;">&gt;</span>

      <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">main</span><span style="color: #808080;">&gt;</span>
        <span style="color: #6a9955;">{/* No wrapper — custom element, kebab-case attributes, ref for events */}</span>
        <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-text-field</span>
          <span style="color: #9cdcfe;">ref</span>={nameRef}
          <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Full name"</span>
          <span style="color: #9cdcfe;">helper-text</span>=<span style="color: #ce9178;">"As it appears on your ID"</span>
        <span style="color: #808080;">/&gt;</span>

        <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsButton</span>
          <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span>
          <span style="color: #9cdcfe;">label</span>={loading ? <span style="color: #ce9178;">"Submitting..."</span> : <span style="color: #ce9178;">"Submit"</span>}
          <span style="color: #9cdcfe;">leftIcon</span>={loading ? <span style="color: #ce9178;">"spinner"</span> : <span style="color: #ce9178;">"check"</span>}
          <span style="color: #9cdcfe;">disabled</span>={loading || !name}
          <span style="color: #9cdcfe;">onClick</span>={handleSubmit}
        <span style="color: #808080;">/&gt;</span>

        <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsButton</span>
          <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"secondary"</span>
          <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Cancel"</span>
          <span style="color: #9cdcfe;">onClick</span>={() => <span style="color: #dcdcaa;">navigate</span>(<span style="color: #ce9178;">'/'</span>)}
        <span style="color: #808080;">/&gt;</span>
      <span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">main</span><span style="color: #808080;">&gt;</span>
    <span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">div</span><span style="color: #808080;">&gt;</span>
  );
}</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           REACT 19 NOTE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">React 19+ note</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        React 19 adds <a href="https://react.dev/blog/2024/04/25/react-19#support-for-custom-elements" style="color: #3b82f6;">native custom element support</a> — it assigns a value as a property when the element defines one, and falls back to an attribute otherwise. That removes some of the Option 2 boilerplate on React 19 projects. The <code>useRef</code> + <code>addEventListener</code> pattern above is the portable one and keeps working either way.
      </p>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e;">
        <strong>📋 Future-Proof:</strong> The <code>@mms/design-system/react</code> wrappers remain useful for TypeScript types and a consistent API, even with React 19's native support.
      </div>

    </div>
  \`
}`,...a.parameters?.docs?.source}}},o=[`ReactUsage`]}))();export{a as ReactUsage,o as __namedExportsOrder,i as default};