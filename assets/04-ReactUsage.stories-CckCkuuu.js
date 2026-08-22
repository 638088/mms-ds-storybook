import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-CBo78ikN.js";var r,i,a,o,s,c;e((()=>{n(),r=`960px`,i=`background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;`,a=[[`mms-accordion`,`MmsAccordion`,[]],[`mms-accordion-item`,`MmsAccordionItem`,[`onAccordionItemToggle`]],[`mms-alert-banner`,`MmsAlertBanner`,[`onDismiss`,`onActionClick`]],[`mms-breadcrumbs`,`MmsBreadcrumbs`,[]],[`mms-button`,`MmsButton`,[]],[`mms-card`,`MmsCard`,[]],[`mms-checkbox`,`MmsCheckbox`,[`onChange`]],[`mms-checkbox-group`,`MmsCheckboxGroup`,[]],[`mms-drawer`,`MmsDrawer`,[`onClose`,`onPrimaryClick`,`onSecondaryClick`,`onTertiaryClick`]],[`mms-icon`,`MmsIcon`,[]],[`mms-inline-alert`,`MmsInlineAlert`,[`onDismiss`,`onActionClick`]],[`mms-link`,`MmsLink`,[]],[`mms-modal`,`MmsModal`,[`onClose`,`onPrimaryClick`,`onSecondaryClick`,`onTertiaryClick`]],[`mms-multi-select`,`MmsMultiSelect`,[`onChange`,`onFocus`,`onBlur`]],[`mms-progress-bar`,`MmsProgressBar`,[]],[`mms-radio`,`MmsRadio`,[`onChange`]],[`mms-radio-group`,`MmsRadioGroup`,[`onChange`]],[`mms-select`,`MmsSelect`,[`onChange`,`onFocus`,`onBlur`]],[`mms-status-tag`,`MmsStatusTag`,[]],[`mms-stepper`,`MmsStepper`,[`onStepClick`,`onSubstepClick`,`onActionClick`]],[`mms-tabs`,`MmsTabs`,[`onTabChange`,`onTabOrientationChange`]],[`mms-tabs-item`,`MmsTabsItem`,[`onTabSelect`]],[`mms-tag`,`MmsTag`,[]],[`mms-text-area`,`MmsTextArea`,[`onInput`,`onChange`,`onFocus`,`onBlur`]],[`mms-text-field`,`MmsTextField`,[`onInput`,`onChange`,`onFocus`,`onBlur`,`onClear`]],[`mms-toast`,`MmsToast`,[`onDismiss`,`onActionClick`]],[`mms-toggle`,`MmsToggle`,[`onChange`]],[`mms-tooltip`,`MmsTooltip`,[]]],o={title:`Developer Guide/React Usage`},s={name:`React Usage`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${r}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Using components in React</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">Every component ships a typed React wrapper — import it and go</p>

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
          <strong>All 28 components ship a wrapper.</strong> They are generated from <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">custom-elements.json</code>, so a component's React surface cannot drift from the component itself — a new event on the element becomes a new <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">on*</code> prop in the same release.
        </p>
        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">
          Using a component as a plain custom element still works and is still supported (Option 2 below). It is the portable pattern, and the escape hatch when you need the element directly — not something you are pushed into by a missing wrapper.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           SETUP: IMPORT TOKENS & THEME
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Setup: Install peers, import tokens &amp; theme</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        <code style="${i}">@lit/react</code> is an optional peer — <code style="${i}">npm install @mms/design-system</code> does not pull it in, so no <code style="${i}">/react/*</code> entry point will resolve without it. Install all three React peers yourself:
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
<span style="color: #c586c0;">import</span> { MmsButton } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-button'</span>;</code></pre>

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
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Option 1: React wrapper components — the default path</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Import each wrapper from its own entry point, <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">@mms/design-system/react/mms-{name}</code>. This is the path to use for anything you ship:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// React components with typed props and React events</span>
<span style="color: #c586c0;">import</span> { MmsButton } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-button'</span>;
<span style="color: #c586c0;">import</span> { MmsIcon } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-icon'</span>;

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

      <div style="background: #dcfce7; border-left: 4px solid #22c55e; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #166534; margin-bottom: 1rem;">
        <strong>✅ Benefits:</strong>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.25rem;">
          <li><strong>TypeScript support</strong> — Full prop types, and event handlers typed against the event's <code>detail</code> payload</li>
          <li><strong>camelCase props</strong> — <code>leftIcon</code> instead of <code>left-icon</code></li>
          <li><strong>Real values, not strings</strong> — booleans, arrays and objects pass as properties, no ref required</li>
          <li><strong>Tree-shakeable</strong> — per-component entry points ship only what you import</li>
        </ul>
      </div>

      <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #1e40af; margin-bottom: 2rem;">
        <strong>ℹ️ The barrel tree-shakes too — prefer per-component anyway.</strong> Importing one wrapper from <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">@mms/design-system/react</code> bundles to the same bytes as importing it from its own entry point (measured under both esbuild and Rolldown). But that result depends on your bundler's side-effect analysis, and a per-component import doesn't — it names one module and pulls in one component regardless. Use the barrel for prototypes; use per-component entry points in production.
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPONENT MAPPING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Component mapping</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Web components use kebab-case (<code style="${i}">mms-button</code>). React wrappers use PascalCase (<code style="${i}">MmsButton</code>). Every component in the system is here — all ${a.length} of them. The third column is the complete set of <code style="${i}">on*</code> props each wrapper declares; anything not listed there (<code style="${i}">onClick</code>, <code style="${i}">onKeyDown</code>, …) is a plain React event and works as usual.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.3);">
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">Web Component</th>
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">React Wrapper</th>
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">Event props</th>
          </tr>
        </thead>
        <tbody>
          ${a.map(([e,n,r])=>t`
              <tr style="border-bottom: 1px solid rgba(128,128,128,0.15);">
                <td style="padding: 0.5rem 1rem;"><code style="${i}">${e}</code></td>
                <td style="padding: 0.5rem 1rem;"><code style="${i}">${n}</code></td>
                <td style="padding: 0.5rem 1rem;">
                  ${r.length===0?t`<span style="opacity: 0.5;">—</span>`:r.map((e,n)=>t`${n>0?` `:``}<code style="${i}">${e}</code>`)}
                </td>
              </tr>
            `)}
        </tbody>
      </table>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e; margin-bottom: 2rem;">
        <strong>📋 Naming:</strong> <code style="${i}">mms-{name}</code> → <code style="${i}">Mms{Name}</code>, imported from <code style="${i}">@mms/design-system/react/mms-{name}</code>. Event props follow the element's event name: <code style="${i}">action-click</code> → <code style="${i}">onActionClick</code>. Both the wrappers and this mapping are generated from <code style="${i}">custom-elements.json</code>, so there is nothing to keep in sync by hand.
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           NATIVE-NAMED EVENTS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Read this before wiring up a form</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        The form components dispatch <code style="${i}">change</code>, <code style="${i}">input</code>, <code style="${i}">focus</code> and <code style="${i}">blur</code> as their own events, with DOM semantics. The wrapper attaches those listeners itself, so your handler receives the component's event and reads its <code style="${i}">detail</code> — not a React synthetic event. Which of the four a given component dispatches varies:
      </p>

      <table style="width: 100%; border-collapse: collapse; margin: 0 0 1rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.08);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; border-bottom: 2px solid rgba(128,128,128,0.2);">Component</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; border-bottom: 2px solid rgba(128,128,128,0.2);">Its own events</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(128,128,128,0.2);"><code style="${i}">mms-text-field</code></td>
            <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(128,128,128,0.2);"><code style="${i}">onInput</code> <code style="${i}">onChange</code> <code style="${i}">onFocus</code> <code style="${i}">onBlur</code> <code style="${i}">onClear</code></td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(128,128,128,0.2);"><code style="${i}">mms-text-area</code></td>
            <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(128,128,128,0.2);"><code style="${i}">onInput</code> <code style="${i}">onChange</code> <code style="${i}">onFocus</code> <code style="${i}">onBlur</code></td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(128,128,128,0.2);"><code style="${i}">mms-select</code>, <code style="${i}">mms-multi-select</code></td>
            <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(128,128,128,0.2);"><code style="${i}">onChange</code> <code style="${i}">onFocus</code> <code style="${i}">onBlur</code></td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><code style="${i}">mms-checkbox</code>, <code style="${i}">mms-radio</code>, <code style="${i}">mms-radio-group</code>, <code style="${i}">mms-toggle</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${i}">onChange</code> only</td>
          </tr>
        </tbody>
      </table>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Anything not in that table is an ordinary React DOM handler. <code style="${i}">onFocus</code> on <code style="${i}">MmsCheckbox</code>, for instance, hands you a React synthetic event with no <code style="${i}">detail</code> — which is the correct behaviour, and the types say so.
      </p>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 1.5rem;">
        <strong>⚠️ <code style="${i}">onChange</code> fires on blur, not on every keystroke.</strong>
        <p style="margin: 0.5rem 0 0;">
          React aliases <code style="${i}">onChange</code> on native inputs to fire per keystroke. Ours does not — it follows the DOM, where <code style="${i}">input</code> fires as you type and <code style="${i}">change</code> fires when the value is committed. <strong>If you want per-keystroke updates, use <code style="${i}">onInput</code>.</strong>
        </p>
        <p style="margin: 0.5rem 0 0;">
          We kept the DOM meaning rather than remapping <code style="${i}">input</code> onto <code style="${i}">onChange</code>, because the alternative is a wrapper that lies about which event it listens to — and the same components have to behave identically outside React.
        </p>
      </div>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #c586c0;">import</span> { MmsTextField } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-text-field'</span>;

<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsTextField</span>
  <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Full name"</span>
  <span style="color: #9cdcfe;">onInput</span>={(e) => <span style="color: #dcdcaa;">setName</span>(e.detail.value)}    <span style="color: #6a9955;">{/* every keystroke */}</span>
  <span style="color: #9cdcfe;">onChange</span>={(e) => <span style="color: #dcdcaa;">validate</span>(e.detail.value)}   <span style="color: #6a9955;">{/* on commit / blur */}</span>
<span style="color: #808080;">/&gt;</span></code></pre>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e; margin-bottom: 2rem;">
        <strong>📘 Also worth knowing:</strong> your handler is called once per interaction, and <code style="${i}">e.detail</code> is always the documented payload — no defensive <code style="${i}">if (!e.detail)</code> guard needed. Two things would otherwise break that, and both are stopped at the component boundary. A native <code style="${i}">input</code>, <code style="${i}">focus</code> or <code style="${i}">blur</code> from the inner control is <code style="${i}">composed</code>, so on the components that declare those names it would cross the shadow boundary and hit your handler a second time with no payload. And on <code style="${i}">MmsRadioGroup</code>, the slotted <code style="${i}">mms-radio</code> dispatches its own bubbling <code style="${i}">change</code>, which would surface on the group a second time carrying the radio's payload instead of the group's. Both are verified in a real browser against the packed tarball, not just asserted.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 2: DIRECT WEB COMPONENTS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Option 2: Custom elements in JSX — the escape hatch</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Every component still works as a plain custom element in JSX, and this path is fully supported. It is the portable pattern — the same markup runs in any framework or none — and it is what you reach for when you need the element itself rather than a React view of it. For everyday React work, Option 1 does all of the following for you:
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
        <p style="margin: 0.5rem 0 0;">The wrapper for the same component removes all four.</p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           TYPESCRIPT
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">TypeScript support</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        The Option 1 wrappers are fully typed — props, and event handlers typed against each event's <code style="${i}">detail</code> payload. Nothing below is needed for them.
      </p>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Components used the Option 2 way are untyped in JSX. Declare the ones you use — the shapes are in
        <code style="${i}">custom-elements.json</code>, which ships inside the package and lists every prop, attribute and event for all components:
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
        <strong>Note:</strong> the detail types are exported too — <code>import type { TextFieldValueDetail } from '@mms/design-system/react/mms-text-field'</code> — so you can type a handler you've extracted out of the JSX.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPLETE EXAMPLE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Complete example</h2>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// App.tsx</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;
<span style="color: #6a9955;">// One import per component — tree-shakeable</span>
<span style="color: #c586c0;">import</span> { MmsButton } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-button'</span>;
<span style="color: #c586c0;">import</span> { MmsIcon } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-icon'</span>;
<span style="color: #c586c0;">import</span> { MmsTextField } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-text-field'</span>;

<span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">App</span>() {
  <span style="color: #569cd6;">const</span> [<span style="color: #9cdcfe;">loading</span>, <span style="color: #9cdcfe;">setLoading</span>] = <span style="color: #dcdcaa;">useState</span>(<span style="color: #569cd6;">false</span>);
  <span style="color: #569cd6;">const</span> [<span style="color: #9cdcfe;">name</span>, <span style="color: #9cdcfe;">setName</span>] = <span style="color: #dcdcaa;">useState</span>(<span style="color: #ce9178;">''</span>);

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
        <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsTextField</span>
          <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Full name"</span>
          <span style="color: #9cdcfe;">helperText</span>=<span style="color: #ce9178;">"As it appears on your ID"</span>
          <span style="color: #9cdcfe;">onInput</span>={(e) => <span style="color: #dcdcaa;">setName</span>(e.detail.value)} <span style="color: #6a9955;">{/* per keystroke */}</span>
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
        <strong>📋 Future-proof:</strong> React 19 closes the property-vs-attribute gap, but not the typing one — it gives you no prop types and no typed <code>detail</code> on an event. The wrappers stay worth using on React 19 for exactly that.
      </div>

    </div>
  `},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'React Usage',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Using components in React</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">Every component ships a typed React wrapper — import it and go</p>

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
          <strong>All 28 components ship a wrapper.</strong> They are generated from <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">custom-elements.json</code>, so a component's React surface cannot drift from the component itself — a new event on the element becomes a new <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">on*</code> prop in the same release.
        </p>
        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">
          Using a component as a plain custom element still works and is still supported (Option 2 below). It is the portable pattern, and the escape hatch when you need the element directly — not something you are pushed into by a missing wrapper.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           SETUP: IMPORT TOKENS & THEME
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Setup: Install peers, import tokens &amp; theme</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        <code style="\${CODE}">@lit/react</code> is an optional peer — <code style="\${CODE}">npm install @mms/design-system</code> does not pull it in, so no <code style="\${CODE}">/react/*</code> entry point will resolve without it. Install all three React peers yourself:
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
<span style="color: #c586c0;">import</span> { MmsButton } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-button'</span>;</code></pre>

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
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Option 1: React wrapper components — the default path</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Import each wrapper from its own entry point, <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">@mms/design-system/react/mms-{name}</code>. This is the path to use for anything you ship:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// React components with typed props and React events</span>
<span style="color: #c586c0;">import</span> { MmsButton } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-button'</span>;
<span style="color: #c586c0;">import</span> { MmsIcon } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-icon'</span>;

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

      <div style="background: #dcfce7; border-left: 4px solid #22c55e; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #166534; margin-bottom: 1rem;">
        <strong>✅ Benefits:</strong>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.25rem;">
          <li><strong>TypeScript support</strong> — Full prop types, and event handlers typed against the event's <code>detail</code> payload</li>
          <li><strong>camelCase props</strong> — <code>leftIcon</code> instead of <code>left-icon</code></li>
          <li><strong>Real values, not strings</strong> — booleans, arrays and objects pass as properties, no ref required</li>
          <li><strong>Tree-shakeable</strong> — per-component entry points ship only what you import</li>
        </ul>
      </div>

      <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #1e40af; margin-bottom: 2rem;">
        <strong>ℹ️ The barrel tree-shakes too — prefer per-component anyway.</strong> Importing one wrapper from <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">@mms/design-system/react</code> bundles to the same bytes as importing it from its own entry point (measured under both esbuild and Rolldown). But that result depends on your bundler's side-effect analysis, and a per-component import doesn't — it names one module and pulls in one component regardless. Use the barrel for prototypes; use per-component entry points in production.
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPONENT MAPPING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Component mapping</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Web components use kebab-case (<code style="\${CODE}">mms-button</code>). React wrappers use PascalCase (<code style="\${CODE}">MmsButton</code>). Every component in the system is here — all \${WRAPPERS.length} of them. The third column is the complete set of <code style="\${CODE}">on*</code> props each wrapper declares; anything not listed there (<code style="\${CODE}">onClick</code>, <code style="\${CODE}">onKeyDown</code>, …) is a plain React event and works as usual.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.3);">
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">Web Component</th>
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">React Wrapper</th>
            <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600;">Event props</th>
          </tr>
        </thead>
        <tbody>
          \${WRAPPERS.map(([tag, wrapper, events]) => html\`
              <tr style="border-bottom: 1px solid rgba(128,128,128,0.15);">
                <td style="padding: 0.5rem 1rem;"><code style="\${CODE}">\${tag}</code></td>
                <td style="padding: 0.5rem 1rem;"><code style="\${CODE}">\${wrapper}</code></td>
                <td style="padding: 0.5rem 1rem;">
                  \${events.length === 0 ? html\`<span style="opacity: 0.5;">—</span>\` : events.map((e, i) => html\`\${i > 0 ? ' ' : ''}<code style="\${CODE}">\${e}</code>\`)}
                </td>
              </tr>
            \`)}
        </tbody>
      </table>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e; margin-bottom: 2rem;">
        <strong>📋 Naming:</strong> <code style="\${CODE}">mms-{name}</code> → <code style="\${CODE}">Mms{Name}</code>, imported from <code style="\${CODE}">@mms/design-system/react/mms-{name}</code>. Event props follow the element's event name: <code style="\${CODE}">action-click</code> → <code style="\${CODE}">onActionClick</code>. Both the wrappers and this mapping are generated from <code style="\${CODE}">custom-elements.json</code>, so there is nothing to keep in sync by hand.
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           NATIVE-NAMED EVENTS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Read this before wiring up a form</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        The form components dispatch <code style="\${CODE}">change</code>, <code style="\${CODE}">input</code>, <code style="\${CODE}">focus</code> and <code style="\${CODE}">blur</code> as their own events, with DOM semantics. The wrapper attaches those listeners itself, so your handler receives the component's event and reads its <code style="\${CODE}">detail</code> — not a React synthetic event. Which of the four a given component dispatches varies:
      </p>

      <table style="width: 100%; border-collapse: collapse; margin: 0 0 1rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.08);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; border-bottom: 2px solid rgba(128,128,128,0.2);">Component</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; border-bottom: 2px solid rgba(128,128,128,0.2);">Its own events</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(128,128,128,0.2);"><code style="\${CODE}">mms-text-field</code></td>
            <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(128,128,128,0.2);"><code style="\${CODE}">onInput</code> <code style="\${CODE}">onChange</code> <code style="\${CODE}">onFocus</code> <code style="\${CODE}">onBlur</code> <code style="\${CODE}">onClear</code></td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(128,128,128,0.2);"><code style="\${CODE}">mms-text-area</code></td>
            <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(128,128,128,0.2);"><code style="\${CODE}">onInput</code> <code style="\${CODE}">onChange</code> <code style="\${CODE}">onFocus</code> <code style="\${CODE}">onBlur</code></td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(128,128,128,0.2);"><code style="\${CODE}">mms-select</code>, <code style="\${CODE}">mms-multi-select</code></td>
            <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(128,128,128,0.2);"><code style="\${CODE}">onChange</code> <code style="\${CODE}">onFocus</code> <code style="\${CODE}">onBlur</code></td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${CODE}">mms-checkbox</code>, <code style="\${CODE}">mms-radio</code>, <code style="\${CODE}">mms-radio-group</code>, <code style="\${CODE}">mms-toggle</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${CODE}">onChange</code> only</td>
          </tr>
        </tbody>
      </table>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Anything not in that table is an ordinary React DOM handler. <code style="\${CODE}">onFocus</code> on <code style="\${CODE}">MmsCheckbox</code>, for instance, hands you a React synthetic event with no <code style="\${CODE}">detail</code> — which is the correct behaviour, and the types say so.
      </p>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 1.5rem;">
        <strong>⚠️ <code style="\${CODE}">onChange</code> fires on blur, not on every keystroke.</strong>
        <p style="margin: 0.5rem 0 0;">
          React aliases <code style="\${CODE}">onChange</code> on native inputs to fire per keystroke. Ours does not — it follows the DOM, where <code style="\${CODE}">input</code> fires as you type and <code style="\${CODE}">change</code> fires when the value is committed. <strong>If you want per-keystroke updates, use <code style="\${CODE}">onInput</code>.</strong>
        </p>
        <p style="margin: 0.5rem 0 0;">
          We kept the DOM meaning rather than remapping <code style="\${CODE}">input</code> onto <code style="\${CODE}">onChange</code>, because the alternative is a wrapper that lies about which event it listens to — and the same components have to behave identically outside React.
        </p>
      </div>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #c586c0;">import</span> { MmsTextField } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-text-field'</span>;

<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsTextField</span>
  <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Full name"</span>
  <span style="color: #9cdcfe;">onInput</span>={(e) => <span style="color: #dcdcaa;">setName</span>(e.detail.value)}    <span style="color: #6a9955;">{/* every keystroke */}</span>
  <span style="color: #9cdcfe;">onChange</span>={(e) => <span style="color: #dcdcaa;">validate</span>(e.detail.value)}   <span style="color: #6a9955;">{/* on commit / blur */}</span>
<span style="color: #808080;">/&gt;</span></code></pre>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e; margin-bottom: 2rem;">
        <strong>📘 Also worth knowing:</strong> your handler is called once per interaction, and <code style="\${CODE}">e.detail</code> is always the documented payload — no defensive <code style="\${CODE}">if (!e.detail)</code> guard needed. Two things would otherwise break that, and both are stopped at the component boundary. A native <code style="\${CODE}">input</code>, <code style="\${CODE}">focus</code> or <code style="\${CODE}">blur</code> from the inner control is <code style="\${CODE}">composed</code>, so on the components that declare those names it would cross the shadow boundary and hit your handler a second time with no payload. And on <code style="\${CODE}">MmsRadioGroup</code>, the slotted <code style="\${CODE}">mms-radio</code> dispatches its own bubbling <code style="\${CODE}">change</code>, which would surface on the group a second time carrying the radio's payload instead of the group's. Both are verified in a real browser against the packed tarball, not just asserted.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 2: DIRECT WEB COMPONENTS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Option 2: Custom elements in JSX — the escape hatch</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Every component still works as a plain custom element in JSX, and this path is fully supported. It is the portable pattern — the same markup runs in any framework or none — and it is what you reach for when you need the element itself rather than a React view of it. For everyday React work, Option 1 does all of the following for you:
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
        <p style="margin: 0.5rem 0 0;">The wrapper for the same component removes all four.</p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           TYPESCRIPT
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">TypeScript support</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        The Option 1 wrappers are fully typed — props, and event handlers typed against each event's <code style="\${CODE}">detail</code> payload. Nothing below is needed for them.
      </p>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Components used the Option 2 way are untyped in JSX. Declare the ones you use — the shapes are in
        <code style="\${CODE}">custom-elements.json</code>, which ships inside the package and lists every prop, attribute and event for all components:
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
        <strong>Note:</strong> the detail types are exported too — <code>import type { TextFieldValueDetail } from '@mms/design-system/react/mms-text-field'</code> — so you can type a handler you've extracted out of the JSX.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPLETE EXAMPLE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Complete example</h2>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// App.tsx</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;
<span style="color: #6a9955;">// One import per component — tree-shakeable</span>
<span style="color: #c586c0;">import</span> { MmsButton } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-button'</span>;
<span style="color: #c586c0;">import</span> { MmsIcon } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-icon'</span>;
<span style="color: #c586c0;">import</span> { MmsTextField } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-text-field'</span>;

<span style="color: #c586c0;">function</span> <span style="color: #dcdcaa;">App</span>() {
  <span style="color: #569cd6;">const</span> [<span style="color: #9cdcfe;">loading</span>, <span style="color: #9cdcfe;">setLoading</span>] = <span style="color: #dcdcaa;">useState</span>(<span style="color: #569cd6;">false</span>);
  <span style="color: #569cd6;">const</span> [<span style="color: #9cdcfe;">name</span>, <span style="color: #9cdcfe;">setName</span>] = <span style="color: #dcdcaa;">useState</span>(<span style="color: #ce9178;">''</span>);

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
        <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">MmsTextField</span>
          <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Full name"</span>
          <span style="color: #9cdcfe;">helperText</span>=<span style="color: #ce9178;">"As it appears on your ID"</span>
          <span style="color: #9cdcfe;">onInput</span>={(e) => <span style="color: #dcdcaa;">setName</span>(e.detail.value)} <span style="color: #6a9955;">{/* per keystroke */}</span>
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
        <strong>📋 Future-proof:</strong> React 19 closes the property-vs-attribute gap, but not the typing one — it gives you no prop types and no typed <code>detail</code> on an event. The wrappers stay worth using on React 19 for exactly that.
      </div>

    </div>
  \`
}`,...s.parameters?.docs?.source}}},c=[`ReactUsage`]}))();export{s as ReactUsage,c as __namedExportsOrder,o as default};