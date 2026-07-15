import{i as e}from"./preload-helper-BdFrVu1K.js";import{o as t,t as n}from"./iframe-CQ36wFM3.js";var r,i,a;e((()=>{n(),r={title:`Developer Guide/React Usage`},i={name:`React Usage`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 900px; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Using components in React</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">React wrappers with typed props, React-style events, and ref forwarding</p>

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
        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">
          We generate thin React wrapper components using <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">@lit/react</code>. These wrappers provide typed props, React-style event handlers (<code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">onClick</code>), and proper ref forwarding — all while delegating to the underlying Lit web component.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 1: REACT WRAPPERS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Option 1: React wrapper components (recommended)</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Import from the React-specific entry point:
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 2: DIRECT WEB COMPONENTS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Option 2: Direct web component usage</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        You can use web components directly in React JSX. This works but requires more boilerplate:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// Import component (registers custom element)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-button'</span>;

<span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">MyComponent</span>() {
  <span style="color: #569cd6;">const</span> buttonRef = <span style="color: #dcdcaa;">useRef</span><<span style="color: #4ec9b0;">HTMLElement</span>>(null);

  <span style="color: #dcdcaa;">useEffect</span>(() => {
    <span style="color: #6a9955;">// Event listeners must be attached manually</span>
    buttonRef.current?.<span style="color: #dcdcaa;">addEventListener</span>(<span style="color: #ce9178;">'click'</span>, handleClick);
    <span style="color: #c586c0;">return</span> () => buttonRef.current?.<span style="color: #dcdcaa;">removeEventListener</span>(<span style="color: #ce9178;">'click'</span>, handleClick);
  }, []);

  <span style="color: #c586c0;">return</span> (
    <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span>
      <span style="color: #9cdcfe;">ref</span>={buttonRef}
      <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span>
      <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Submit"</span>
      <span style="color: #9cdcfe;">left-icon</span>=<span style="color: #ce9178;">"check"</span>    <span style="color: #6a9955;">{/* kebab-case attributes */}</span>
    <span style="color: #808080;">/&gt;</span>
  );
}</code></pre>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 2rem;">
        <strong>⚠️ Caveats:</strong>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.25rem;">
          <li>No TypeScript types for custom element props</li>
          <li>Must use kebab-case attributes (<code>left-icon</code>, not <code>leftIcon</code>)</li>
          <li>Events require <code>useRef</code> + <code>useEffect</code> + <code>addEventListener</code></li>
          <li>Boolean props must be set as attributes, not React booleans</li>
        </ul>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           TYPESCRIPT
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">TypeScript support</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        When using Option 2 (direct custom elements), add type declarations:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// types/mms-design-system.d.ts</span>
<span style="color: #c586c0;">declare</span> <span style="color: #c586c0;">namespace</span> <span style="color: #4ec9b0;">JSX</span> {
  <span style="color: #c586c0;">interface</span> <span style="color: #4ec9b0;">IntrinsicElements</span> {
    <span style="color: #ce9178;">'mms-button'</span>: <span style="color: #4ec9b0;">React.DetailedHTMLProps</span>&lt;
      <span style="color: #4ec9b0;">React.HTMLAttributes</span>&lt;<span style="color: #4ec9b0;">HTMLElement</span>&gt; & {
        variant?: <span style="color: #ce9178;">'primary'</span> | <span style="color: #ce9178;">'secondary'</span> | <span style="color: #ce9178;">'ghost'</span>;
        label?: <span style="color: #4ec9b0;">string</span>;
        <span style="color: #ce9178;">'left-icon'</span>?: <span style="color: #4ec9b0;">string</span>;
        <span style="color: #ce9178;">'right-icon'</span>?: <span style="color: #4ec9b0;">string</span>;
        disabled?: <span style="color: #4ec9b0;">boolean</span>;
      },
      <span style="color: #4ec9b0;">HTMLElement</span>
    >;
    <span style="color: #ce9178;">'mms-icon'</span>: <span style="color: #4ec9b0;">React.DetailedHTMLProps</span>&lt;
      <span style="color: #4ec9b0;">React.HTMLAttributes</span>&lt;<span style="color: #4ec9b0;">HTMLElement</span>&gt; & {
        name?: <span style="color: #4ec9b0;">string</span>;
        size?: <span style="color: #ce9178;">'sm'</span> | <span style="color: #ce9178;">'md'</span> | <span style="color: #ce9178;">'lg'</span> | <span style="color: #ce9178;">'xl'</span>;
      },
      <span style="color: #4ec9b0;">HTMLElement</span>
    >;
  }
}</code></pre>

      <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.7;">
        <strong>Note:</strong> React wrappers (Option 1) include TypeScript definitions automatically — no manual declarations needed.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPLETE EXAMPLE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Complete example</h2>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// App.tsx</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;
<span style="color: #c586c0;">import</span> { MmsButton, MmsIcon } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react'</span>;

<span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">App</span>() {
  <span style="color: #569cd6;">const</span> [<span style="color: #9cdcfe;">loading</span>, <span style="color: #9cdcfe;">setLoading</span>] = <span style="color: #dcdcaa;">useState</span>(<span style="color: #569cd6;">false</span>);

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
        <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsButton</span>
          <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span>
          <span style="color: #9cdcfe;">label</span>={loading ? <span style="color: #ce9178;">"Submitting..."</span> : <span style="color: #ce9178;">"Submit"</span>}
          <span style="color: #9cdcfe;">leftIcon</span>={loading ? <span style="color: #ce9178;">"spinner"</span> : <span style="color: #ce9178;">"check"</span>}
          <span style="color: #9cdcfe;">disabled</span>={loading}
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
        React 19 includes <a href="https://react.dev/blog/2024/04/25/react-19#support-for-custom-elements" style="color: #3b82f6;">native custom element support</a>. When React 19 is widely adopted, you may be able to use web components directly with full event and property support — no wrappers needed.
      </p>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e;">
        <strong>📋 Future-Proof:</strong> The <code>@mms/design-system/react</code> wrappers remain useful for TypeScript types and a consistent API, even with React 19's native support.
      </div>

    </div>
  `},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'React Usage',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 900px; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Using components in React</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">React wrappers with typed props, React-style events, and ref forwarding</p>

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
        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">
          We generate thin React wrapper components using <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">@lit/react</code>. These wrappers provide typed props, React-style event handlers (<code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">onClick</code>), and proper ref forwarding — all while delegating to the underlying Lit web component.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 1: REACT WRAPPERS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Option 1: React wrapper components (recommended)</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Import from the React-specific entry point:
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 2: DIRECT WEB COMPONENTS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Option 2: Direct web component usage</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        You can use web components directly in React JSX. This works but requires more boilerplate:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// Import component (registers custom element)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-button'</span>;

<span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">MyComponent</span>() {
  <span style="color: #569cd6;">const</span> buttonRef = <span style="color: #dcdcaa;">useRef</span><<span style="color: #4ec9b0;">HTMLElement</span>>(null);

  <span style="color: #dcdcaa;">useEffect</span>(() => {
    <span style="color: #6a9955;">// Event listeners must be attached manually</span>
    buttonRef.current?.<span style="color: #dcdcaa;">addEventListener</span>(<span style="color: #ce9178;">'click'</span>, handleClick);
    <span style="color: #c586c0;">return</span> () => buttonRef.current?.<span style="color: #dcdcaa;">removeEventListener</span>(<span style="color: #ce9178;">'click'</span>, handleClick);
  }, []);

  <span style="color: #c586c0;">return</span> (
    <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span>
      <span style="color: #9cdcfe;">ref</span>={buttonRef}
      <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span>
      <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Submit"</span>
      <span style="color: #9cdcfe;">left-icon</span>=<span style="color: #ce9178;">"check"</span>    <span style="color: #6a9955;">{/* kebab-case attributes */}</span>
    <span style="color: #808080;">/&gt;</span>
  );
}</code></pre>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 2rem;">
        <strong>⚠️ Caveats:</strong>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.25rem;">
          <li>No TypeScript types for custom element props</li>
          <li>Must use kebab-case attributes (<code>left-icon</code>, not <code>leftIcon</code>)</li>
          <li>Events require <code>useRef</code> + <code>useEffect</code> + <code>addEventListener</code></li>
          <li>Boolean props must be set as attributes, not React booleans</li>
        </ul>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           TYPESCRIPT
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">TypeScript support</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        When using Option 2 (direct custom elements), add type declarations:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// types/mms-design-system.d.ts</span>
<span style="color: #c586c0;">declare</span> <span style="color: #c586c0;">namespace</span> <span style="color: #4ec9b0;">JSX</span> {
  <span style="color: #c586c0;">interface</span> <span style="color: #4ec9b0;">IntrinsicElements</span> {
    <span style="color: #ce9178;">'mms-button'</span>: <span style="color: #4ec9b0;">React.DetailedHTMLProps</span>&lt;
      <span style="color: #4ec9b0;">React.HTMLAttributes</span>&lt;<span style="color: #4ec9b0;">HTMLElement</span>&gt; & {
        variant?: <span style="color: #ce9178;">'primary'</span> | <span style="color: #ce9178;">'secondary'</span> | <span style="color: #ce9178;">'ghost'</span>;
        label?: <span style="color: #4ec9b0;">string</span>;
        <span style="color: #ce9178;">'left-icon'</span>?: <span style="color: #4ec9b0;">string</span>;
        <span style="color: #ce9178;">'right-icon'</span>?: <span style="color: #4ec9b0;">string</span>;
        disabled?: <span style="color: #4ec9b0;">boolean</span>;
      },
      <span style="color: #4ec9b0;">HTMLElement</span>
    >;
    <span style="color: #ce9178;">'mms-icon'</span>: <span style="color: #4ec9b0;">React.DetailedHTMLProps</span>&lt;
      <span style="color: #4ec9b0;">React.HTMLAttributes</span>&lt;<span style="color: #4ec9b0;">HTMLElement</span>&gt; & {
        name?: <span style="color: #4ec9b0;">string</span>;
        size?: <span style="color: #ce9178;">'sm'</span> | <span style="color: #ce9178;">'md'</span> | <span style="color: #ce9178;">'lg'</span> | <span style="color: #ce9178;">'xl'</span>;
      },
      <span style="color: #4ec9b0;">HTMLElement</span>
    >;
  }
}</code></pre>

      <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.7;">
        <strong>Note:</strong> React wrappers (Option 1) include TypeScript definitions automatically — no manual declarations needed.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPLETE EXAMPLE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Complete example</h2>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// App.tsx</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;
<span style="color: #c586c0;">import</span> { MmsButton, MmsIcon } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react'</span>;

<span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">App</span>() {
  <span style="color: #569cd6;">const</span> [<span style="color: #9cdcfe;">loading</span>, <span style="color: #9cdcfe;">setLoading</span>] = <span style="color: #dcdcaa;">useState</span>(<span style="color: #569cd6;">false</span>);

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
        <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsButton</span>
          <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span>
          <span style="color: #9cdcfe;">label</span>={loading ? <span style="color: #ce9178;">"Submitting..."</span> : <span style="color: #ce9178;">"Submit"</span>}
          <span style="color: #9cdcfe;">leftIcon</span>={loading ? <span style="color: #ce9178;">"spinner"</span> : <span style="color: #ce9178;">"check"</span>}
          <span style="color: #9cdcfe;">disabled</span>={loading}
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
        React 19 includes <a href="https://react.dev/blog/2024/04/25/react-19#support-for-custom-elements" style="color: #3b82f6;">native custom element support</a>. When React 19 is widely adopted, you may be able to use web components directly with full event and property support — no wrappers needed.
      </p>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e;">
        <strong>📋 Future-Proof:</strong> The <code>@mms/design-system/react</code> wrappers remain useful for TypeScript types and a consistent API, even with React 19's native support.
      </div>

    </div>
  \`
}`,...i.parameters?.docs?.source}}},a=[`ReactUsage`]}))();export{i as ReactUsage,a as __namedExportsOrder,r as default};