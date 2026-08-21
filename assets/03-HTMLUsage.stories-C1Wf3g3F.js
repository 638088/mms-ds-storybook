import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-CBo78ikN.js";var r,i,a,o;e((()=>{n(),r=`960px`,i={title:`Developer Guide/HTML Usage`},a={name:`HTML Usage`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${r}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Using components in HTML</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">Web components work natively in any HTML document — no framework required</p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           BASIC USAGE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Basic usage</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        After importing a component, use it like any native HTML element. Components are <strong>custom elements</strong> — the browser treats them as first-class citizens.
      </p>

      <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(16, 185, 129, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #10b981; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">1</div>
          <h3 style="margin: 0; font-size: 1.125rem; font-weight: 700;">Import Components</h3>
        </div>

        <div style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;">📁 main.js or entry file</div>
        </div>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// Import CSS (once, in entry point)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus-dark'</span>;  <span style="color: #6a9955;">// required for dark mode</span>

<span style="color: #6a9955;">// Import components you'll use</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-button'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-icon'</span>;</code></pre>
      </div>

      <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(59, 130, 246, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #3b82f6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">2</div>
          <h3 style="margin: 0; font-size: 1.125rem; font-weight: 700;">Use in HTML</h3>
        </div>

        <div style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;">📁 index.html</div>
        </div>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">&lt;!-- Apply theme to the root element --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">html</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">body</span><span style="color: #808080;">&gt;</span>

  <span style="color: #6a9955;">&lt;!-- Use components like native elements --&gt;</span>
  <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span>
    <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span>
    <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Get Started"</span>
  <span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>

  <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span>
    <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"secondary"</span>
    <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Learn More"</span>
    <span style="color: #9cdcfe;">left-icon</span>=<span style="color: #ce9178;">"arrow-right"</span>
  <span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>

  <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-icon</span> <span style="color: #9cdcfe;">name</span>=<span style="color: #ce9178;">"check-circle"</span> <span style="color: #9cdcfe;">size</span>=<span style="color: #ce9178;">"lg"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-icon</span><span style="color: #808080;">&gt;</span>

<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">body</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">html</span><span style="color: #808080;">&gt;</span></code></pre>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           ATTRIBUTES
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Setting attributes</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Component properties are set via HTML attributes. Use <strong>kebab-case</strong> for multi-word attributes:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">&lt;!-- String attributes --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span> <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span> <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Click Me"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>

<span style="color: #6a9955;">&lt;!-- Multi-word attributes use kebab-case --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span> <span style="color: #9cdcfe;">left-icon</span>=<span style="color: #ce9178;">"arrow-left"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>

<span style="color: #6a9955;">&lt;!-- Boolean attributes: presence = true, absence = false --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span> <span style="color: #9cdcfe;">disabled</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>        <span style="color: #6a9955;">&lt;!-- disabled=true --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>                 <span style="color: #6a9955;">&lt;!-- disabled=false --&gt;</span></code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           EVENT HANDLING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Event handling</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Native events work as they always do. Components also emit their own <strong>custom events</strong> — the names are bare, with <strong>no <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">mms-</code> prefix</strong> (<code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">change</code>, <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">close</code>, <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">dismiss</code>, <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">tab-change</code>). Listen with <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">addEventListener()</code> either way:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// HTML</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span> <span style="color: #9cdcfe;">id</span>=<span style="color: #ce9178;">"submit"</span> <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Submit"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-checkbox</span> <span style="color: #9cdcfe;">id</span>=<span style="color: #ce9178;">"terms"</span> <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"I agree"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-checkbox</span><span style="color: #808080;">&gt;</span>

<span style="color: #6a9955;">// JavaScript — native event, nothing special</span>
document.<span style="color: #dcdcaa;">getElementById</span>(<span style="color: #ce9178;">'submit'</span>).<span style="color: #dcdcaa;">addEventListener</span>(<span style="color: #ce9178;">'click'</span>, () => {
  console.<span style="color: #dcdcaa;">log</span>(<span style="color: #ce9178;">'Button clicked'</span>);
});

<span style="color: #6a9955;">// Custom event — data arrives on event.detail</span>
document.<span style="color: #dcdcaa;">getElementById</span>(<span style="color: #ce9178;">'terms'</span>).<span style="color: #dcdcaa;">addEventListener</span>(<span style="color: #ce9178;">'change'</span>, (<span style="color: #9cdcfe;">event</span>) => {
  console.<span style="color: #dcdcaa;">log</span>(event.detail.checked);  <span style="color: #6a9955;">// true / false</span>
});</code></pre>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e; margin-bottom: 2rem;">
        <strong>📘 Which events does a component emit?</strong> Every event name and <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">detail</code> shape is listed in <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">custom-elements.json</code>, which ships inside the package — or on that component's page in this Storybook.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           DYNAMIC UPDATES
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Dynamic updates</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Update component state via JavaScript properties or attributes:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #569cd6;">const</span> button = document.<span style="color: #dcdcaa;">querySelector</span>(<span style="color: #ce9178;">'mms-button'</span>);

<span style="color: #6a9955;">// Option 1: Set property (camelCase)</span>
button.variant = <span style="color: #ce9178;">'secondary'</span>;
button.leftIcon = <span style="color: #ce9178;">'check'</span>;
button.disabled = <span style="color: #569cd6;">true</span>;

<span style="color: #6a9955;">// Option 2: Set attribute (kebab-case)</span>
button.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'variant'</span>, <span style="color: #ce9178;">'secondary'</span>);
button.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'left-icon'</span>, <span style="color: #ce9178;">'check'</span>);
button.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'disabled'</span>, <span style="color: #ce9178;">''</span>);  <span style="color: #6a9955;">// Boolean: set to empty string</span>

<span style="color: #6a9955;">// Remove boolean attribute to disable</span>
button.<span style="color: #dcdcaa;">removeAttribute</span>(<span style="color: #ce9178;">'disabled'</span>);</code></pre>

      <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #1e3a8a; margin-bottom: 2rem;">
        <strong>💡 Tip:</strong> Prefer setting JavaScript <strong>properties</strong> (camelCase) for better performance and type safety. Attributes are serialized to strings; properties preserve types.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           THEMING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Theming & dark mode</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Themes are applied via data attributes on a container element:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">&lt;!-- Follows the user's OS / browser dark mode setting --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">html</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span>

<span style="color: #6a9955;">&lt;!-- Pinned — ignores the browser setting --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">html</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span> <span style="color: #9cdcfe;">data-mode</span>=<span style="color: #ce9178;">"light"</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">html</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span> <span style="color: #9cdcfe;">data-mode</span>=<span style="color: #ce9178;">"dark"</span><span style="color: #808080;">&gt;</span>

<span style="color: #6a9955;">&lt;!-- Optional three-way control: dark → light → follow browser --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">script</span><span style="color: #808080;">&gt;</span>
  <span style="color: #569cd6;">function</span> <span style="color: #dcdcaa;">cycleMode</span>() {
    <span style="color: #569cd6;">const</span> html = document.documentElement;
    <span style="color: #c586c0;">if</span> (!html.dataset.mode) html.dataset.mode = <span style="color: #ce9178;">'dark'</span>;
    <span style="color: #c586c0;">else if</span> (html.dataset.mode === <span style="color: #ce9178;">'dark'</span>) html.dataset.mode = <span style="color: #ce9178;">'light'</span>;
    <span style="color: #c586c0;">else</span> <span style="color: #c586c0;">delete</span> html.dataset.mode; <span style="color: #6a9955;">// back to following the browser</span>
  }
<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">script</span><span style="color: #808080;">&gt;</span></code></pre>

      <p style="margin: 0 0 1.5rem; font-size: 0.9375rem;">
        <strong>You do not need a dark mode toggle.</strong> With no
        <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">data-mode</code>
        attribute the theme follows
        <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">prefers-color-scheme</code>
        on its own &mdash; a media query in the theme CSS, no JavaScript involved. This works on
        every path, including static HTML, AEM and Drupal. Setting
        <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">data-mode</code>
        opts out and pins the mode. Auto-following requires the
        <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">-dark</code>
        sheet to be loaded; the standalone build already includes every theme.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           STATIC HTML (NO BUNDLER)
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Static HTML (no bundler)</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        For a page with no build tool, load <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">standalone.js</code>. It is self-contained — Lit, every component, the icons, and all tokens and themes are inside that one file, and it falls back to the Maximus brand if the page sets no <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">data-theme</code>. There are no stylesheets to link and nothing to configure.
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #808080;">&lt;!</span><span style="color: #569cd6;">DOCTYPE</span> <span style="color: #9cdcfe;">html</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">html</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">head</span><span style="color: #808080;">&gt;</span>
  <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">script</span> <span style="color: #9cdcfe;">type</span>=<span style="color: #ce9178;">"module"</span> <span style="color: #9cdcfe;">src</span>=<span style="color: #ce9178;">"./node_modules/@mms/design-system/dist/standalone.js"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #569cd6;">script</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">head</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">body</span><span style="color: #808080;">&gt;</span>
  <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span> <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span> <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Hello"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">body</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">html</span><span style="color: #808080;">&gt;</span></code></pre>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Serve the page over HTTP — browsers refuse module scripts on <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">file://</code>. <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">npx mms-ds start</code> writes this page for you and serves it — see <strong>Installation, Path A</strong>. Any other static server works too.
      </p>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 1rem;">
        <strong>⚠️ Prototyping only.</strong> The standalone file contains every component whether the page uses it or not, so it cannot be tree-shaken. For production use a bundler with per-component imports — see <strong>Installation, Path B</strong>.
      </div>

      <div style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #991b1b;">
        <strong>Do not point a plain script tag at <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">dist/index.js</code></strong> or at an individual component file. Those import <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">lit</code> by bare specifier, which a browser cannot resolve without an import map — you get <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">Failed to resolve module specifier "lit"</code>. That is what <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">standalone.js</code> exists to solve.
      </div>

    </div>
  `},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'HTML Usage',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Using components in HTML</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">Web components work natively in any HTML document — no framework required</p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           BASIC USAGE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Basic usage</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        After importing a component, use it like any native HTML element. Components are <strong>custom elements</strong> — the browser treats them as first-class citizens.
      </p>

      <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(16, 185, 129, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #10b981; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">1</div>
          <h3 style="margin: 0; font-size: 1.125rem; font-weight: 700;">Import Components</h3>
        </div>

        <div style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;">📁 main.js or entry file</div>
        </div>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// Import CSS (once, in entry point)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus-dark'</span>;  <span style="color: #6a9955;">// required for dark mode</span>

<span style="color: #6a9955;">// Import components you'll use</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-button'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-icon'</span>;</code></pre>
      </div>

      <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(59, 130, 246, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #3b82f6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">2</div>
          <h3 style="margin: 0; font-size: 1.125rem; font-weight: 700;">Use in HTML</h3>
        </div>

        <div style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;">📁 index.html</div>
        </div>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">&lt;!-- Apply theme to the root element --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">html</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">body</span><span style="color: #808080;">&gt;</span>

  <span style="color: #6a9955;">&lt;!-- Use components like native elements --&gt;</span>
  <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span>
    <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span>
    <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Get Started"</span>
  <span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>

  <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span>
    <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"secondary"</span>
    <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Learn More"</span>
    <span style="color: #9cdcfe;">left-icon</span>=<span style="color: #ce9178;">"arrow-right"</span>
  <span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>

  <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-icon</span> <span style="color: #9cdcfe;">name</span>=<span style="color: #ce9178;">"check-circle"</span> <span style="color: #9cdcfe;">size</span>=<span style="color: #ce9178;">"lg"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-icon</span><span style="color: #808080;">&gt;</span>

<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">body</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">html</span><span style="color: #808080;">&gt;</span></code></pre>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           ATTRIBUTES
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Setting attributes</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Component properties are set via HTML attributes. Use <strong>kebab-case</strong> for multi-word attributes:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">&lt;!-- String attributes --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span> <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span> <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Click Me"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>

<span style="color: #6a9955;">&lt;!-- Multi-word attributes use kebab-case --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span> <span style="color: #9cdcfe;">left-icon</span>=<span style="color: #ce9178;">"arrow-left"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>

<span style="color: #6a9955;">&lt;!-- Boolean attributes: presence = true, absence = false --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span> <span style="color: #9cdcfe;">disabled</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>        <span style="color: #6a9955;">&lt;!-- disabled=true --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>                 <span style="color: #6a9955;">&lt;!-- disabled=false --&gt;</span></code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           EVENT HANDLING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Event handling</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Native events work as they always do. Components also emit their own <strong>custom events</strong> — the names are bare, with <strong>no <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">mms-</code> prefix</strong> (<code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">change</code>, <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">close</code>, <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">dismiss</code>, <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">tab-change</code>). Listen with <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">addEventListener()</code> either way:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// HTML</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span> <span style="color: #9cdcfe;">id</span>=<span style="color: #ce9178;">"submit"</span> <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Submit"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-checkbox</span> <span style="color: #9cdcfe;">id</span>=<span style="color: #ce9178;">"terms"</span> <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"I agree"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-checkbox</span><span style="color: #808080;">&gt;</span>

<span style="color: #6a9955;">// JavaScript — native event, nothing special</span>
document.<span style="color: #dcdcaa;">getElementById</span>(<span style="color: #ce9178;">'submit'</span>).<span style="color: #dcdcaa;">addEventListener</span>(<span style="color: #ce9178;">'click'</span>, () => {
  console.<span style="color: #dcdcaa;">log</span>(<span style="color: #ce9178;">'Button clicked'</span>);
});

<span style="color: #6a9955;">// Custom event — data arrives on event.detail</span>
document.<span style="color: #dcdcaa;">getElementById</span>(<span style="color: #ce9178;">'terms'</span>).<span style="color: #dcdcaa;">addEventListener</span>(<span style="color: #ce9178;">'change'</span>, (<span style="color: #9cdcfe;">event</span>) => {
  console.<span style="color: #dcdcaa;">log</span>(event.detail.checked);  <span style="color: #6a9955;">// true / false</span>
});</code></pre>

      <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #0c4a6e; margin-bottom: 2rem;">
        <strong>📘 Which events does a component emit?</strong> Every event name and <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">detail</code> shape is listed in <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">custom-elements.json</code>, which ships inside the package — or on that component's page in this Storybook.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           DYNAMIC UPDATES
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Dynamic updates</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Update component state via JavaScript properties or attributes:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #569cd6;">const</span> button = document.<span style="color: #dcdcaa;">querySelector</span>(<span style="color: #ce9178;">'mms-button'</span>);

<span style="color: #6a9955;">// Option 1: Set property (camelCase)</span>
button.variant = <span style="color: #ce9178;">'secondary'</span>;
button.leftIcon = <span style="color: #ce9178;">'check'</span>;
button.disabled = <span style="color: #569cd6;">true</span>;

<span style="color: #6a9955;">// Option 2: Set attribute (kebab-case)</span>
button.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'variant'</span>, <span style="color: #ce9178;">'secondary'</span>);
button.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'left-icon'</span>, <span style="color: #ce9178;">'check'</span>);
button.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'disabled'</span>, <span style="color: #ce9178;">''</span>);  <span style="color: #6a9955;">// Boolean: set to empty string</span>

<span style="color: #6a9955;">// Remove boolean attribute to disable</span>
button.<span style="color: #dcdcaa;">removeAttribute</span>(<span style="color: #ce9178;">'disabled'</span>);</code></pre>

      <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #1e3a8a; margin-bottom: 2rem;">
        <strong>💡 Tip:</strong> Prefer setting JavaScript <strong>properties</strong> (camelCase) for better performance and type safety. Attributes are serialized to strings; properties preserve types.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           THEMING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Theming & dark mode</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Themes are applied via data attributes on a container element:
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">&lt;!-- Follows the user's OS / browser dark mode setting --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">html</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span>

<span style="color: #6a9955;">&lt;!-- Pinned — ignores the browser setting --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">html</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span> <span style="color: #9cdcfe;">data-mode</span>=<span style="color: #ce9178;">"light"</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">html</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span> <span style="color: #9cdcfe;">data-mode</span>=<span style="color: #ce9178;">"dark"</span><span style="color: #808080;">&gt;</span>

<span style="color: #6a9955;">&lt;!-- Optional three-way control: dark → light → follow browser --&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">script</span><span style="color: #808080;">&gt;</span>
  <span style="color: #569cd6;">function</span> <span style="color: #dcdcaa;">cycleMode</span>() {
    <span style="color: #569cd6;">const</span> html = document.documentElement;
    <span style="color: #c586c0;">if</span> (!html.dataset.mode) html.dataset.mode = <span style="color: #ce9178;">'dark'</span>;
    <span style="color: #c586c0;">else if</span> (html.dataset.mode === <span style="color: #ce9178;">'dark'</span>) html.dataset.mode = <span style="color: #ce9178;">'light'</span>;
    <span style="color: #c586c0;">else</span> <span style="color: #c586c0;">delete</span> html.dataset.mode; <span style="color: #6a9955;">// back to following the browser</span>
  }
<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">script</span><span style="color: #808080;">&gt;</span></code></pre>

      <p style="margin: 0 0 1.5rem; font-size: 0.9375rem;">
        <strong>You do not need a dark mode toggle.</strong> With no
        <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">data-mode</code>
        attribute the theme follows
        <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">prefers-color-scheme</code>
        on its own &mdash; a media query in the theme CSS, no JavaScript involved. This works on
        every path, including static HTML, AEM and Drupal. Setting
        <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">data-mode</code>
        opts out and pins the mode. Auto-following requires the
        <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">-dark</code>
        sheet to be loaded; the standalone build already includes every theme.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           STATIC HTML (NO BUNDLER)
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Static HTML (no bundler)</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        For a page with no build tool, load <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">standalone.js</code>. It is self-contained — Lit, every component, the icons, and all tokens and themes are inside that one file, and it falls back to the Maximus brand if the page sets no <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">data-theme</code>. There are no stylesheets to link and nothing to configure.
      </p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #808080;">&lt;!</span><span style="color: #569cd6;">DOCTYPE</span> <span style="color: #9cdcfe;">html</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">html</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">head</span><span style="color: #808080;">&gt;</span>
  <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">script</span> <span style="color: #9cdcfe;">type</span>=<span style="color: #ce9178;">"module"</span> <span style="color: #9cdcfe;">src</span>=<span style="color: #ce9178;">"./node_modules/@mms/design-system/dist/standalone.js"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #569cd6;">script</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">head</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">body</span><span style="color: #808080;">&gt;</span>
  <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span> <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span> <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Hello"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">body</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">html</span><span style="color: #808080;">&gt;</span></code></pre>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Serve the page over HTTP — browsers refuse module scripts on <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">file://</code>. <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">npx mms-ds start</code> writes this page for you and serves it — see <strong>Installation, Path A</strong>. Any other static server works too.
      </p>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 1rem;">
        <strong>⚠️ Prototyping only.</strong> The standalone file contains every component whether the page uses it or not, so it cannot be tree-shaken. For production use a bundler with per-component imports — see <strong>Installation, Path B</strong>.
      </div>

      <div style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #991b1b;">
        <strong>Do not point a plain script tag at <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">dist/index.js</code></strong> or at an individual component file. Those import <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">lit</code> by bare specifier, which a browser cannot resolve without an import map — you get <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">Failed to resolve module specifier "lit"</code>. That is what <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">standalone.js</code> exists to solve.
      </div>

    </div>
  \`
}`,...a.parameters?.docs?.source}}},o=[`HTMLUsage`]}))();export{a as HTMLUsage,o as __namedExportsOrder,i as default};