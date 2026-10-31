import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{t as r}from"./mms-card.component-Ae9XIj4r.js";import{t as i}from"./mms-inline-alert.component-Byp5LNfw.js";import{a,c as o,d as s,n as c,o as l,r as u,u as d}from"./doc-styles-DkvR_Qyb.js";var f,p=e((()=>{f=[[`mms-accordion`,`MmsAccordion`,[]],[`mms-accordion-item`,`MmsAccordionItem`,[`onAccordionItemToggle`]],[`mms-address`,`MmsAddress`,[]],[`mms-alert-banner`,`MmsAlertBanner`,[`onDismiss`,`onActionClick`]],[`mms-breadcrumbs`,`MmsBreadcrumbs`,[]],[`mms-button`,`MmsButton`,[]],[`mms-card`,`MmsCard`,[`onCardToggle`]],[`mms-checkbox`,`MmsCheckbox`,[`onChange`]],[`mms-checkbox-group`,`MmsCheckboxGroup`,[]],[`mms-document-title`,`MmsDocumentTitle`,[]],[`mms-drawer`,`MmsDrawer`,[`onClose`,`onPrimaryClick`,`onSecondaryClick`,`onTertiaryClick`]],[`mms-footer`,`MmsFooter`,[]],[`mms-header`,`MmsHeader`,[`onMenuToggle`]],[`mms-hero`,`MmsHero`,[]],[`mms-hero-image`,`MmsHeroImage`,[]],[`mms-icon`,`MmsIcon`,[]],[`mms-inline-alert`,`MmsInlineAlert`,[`onDismiss`,`onActionClick`]],[`mms-link`,`MmsLink`,[]],[`mms-loading-bar`,`MmsLoadingBar`,[]],[`mms-modal`,`MmsModal`,[`onClose`,`onPrimaryClick`,`onSecondaryClick`,`onTertiaryClick`]],[`mms-multi-select`,`MmsMultiSelect`,[`onChange`,`onFocus`,`onBlur`]],[`mms-page-spinner`,`MmsPageSpinner`,[]],[`mms-pagination`,`MmsPagination`,[`onPageChange`]],[`mms-progress-bar`,`MmsProgressBar`,[]],[`mms-radio`,`MmsRadio`,[`onChange`]],[`mms-radio-group`,`MmsRadioGroup`,[`onChange`]],[`mms-select`,`MmsSelect`,[`onChange`,`onFocus`,`onBlur`]],[`mms-side-nav`,`MmsSideNav`,[`onRailToggle`]],[`mms-side-nav-item`,`MmsSideNavItem`,[`onNavToggle`,`onNavSelect`]],[`mms-skip-link`,`MmsSkipLink`,[]],[`mms-status-tag`,`MmsStatusTag`,[]],[`mms-stepper`,`MmsStepper`,[`onStepClick`,`onSubstepClick`,`onActionClick`]],[`mms-tabs`,`MmsTabs`,[`onTabChange`,`onTabOrientationChange`]],[`mms-tabs-item`,`MmsTabsItem`,[`onTabSelect`]],[`mms-tag`,`MmsTag`,[]],[`mms-text-area`,`MmsTextArea`,[`onInput`,`onChange`,`onFocus`,`onBlur`]],[`mms-text-field`,`MmsTextField`,[`onInput`,`onChange`,`onFocus`,`onBlur`,`onClear`]],[`mms-text-size-control`,`MmsTextSizeControl`,[`onTextSizeLimit`,`onTextSizeChange`]],[`mms-toast`,`MmsToast`,[`onDismiss`,`onActionClick`]],[`mms-toggle`,`MmsToggle`,[`onChange`]],[`mms-tooltip`,`MmsTooltip`,[]]]})),m,h,g,_;e((()=>{n(),p(),r(),i(),o(),m=`${s.mono} background: var(--color-surface-raised); border: var(--border-width-xs) solid var(--color-border-subtle); padding: var(--spacing-xs1) var(--spacing-sm1); border-radius: var(--radius-sm);`,h={title:`Developer Guide/React Usage`},g={name:`React Usage`,render:()=>t`
    <div data-theme=${u} data-mode=${l()} style=${c}>

      <h1 style="${s.h1}">Using Components in React</h1>
      <p style="${s.body} ${a.muted} margin-bottom: ${d.subsection};">Every component ships a typed React wrapper — import it and go</p>

      <hr style="${a.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           WHY WRAPPERS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${s.h2}">Why React wrappers?</h2>

      <p style="${s.body} margin-bottom: ${d.content};">
        While web components work in React, there are friction points:
      </p>

      <ul style="${s.body} margin-bottom: ${d.content}; padding-left: var(--spacing-lg1);">
        <li><strong>Event handling</strong> — React's synthetic events don't natively work with custom element events</li>
        <li><strong>Property vs attribute</strong> — React passes all props as attributes (strings); objects/arrays need special handling</li>
        <li><strong>TypeScript</strong> — Custom elements lack type definitions for JSX</li>
        <li><strong>Refs</strong> — React refs need wrapping to expose the underlying element</li>
      </ul>

      <div style="${a.panel} margin-bottom: ${d.subsection};">
        <h3 style="${s.h3}">The solution: @lit/react wrappers</h3>
        <p style="${s.body} margin-bottom: ${d.content};">
          Thin React wrapper components built with <code style="${m}">@lit/react</code>. These wrappers provide typed props, React-style event handlers (<code style="${m}">onClick</code>), and proper ref forwarding — all while delegating to the underlying Lit web component.
        </p>
        <p style="${s.body} margin-bottom: ${d.content};">
          <strong>Every component ships a wrapper.</strong> They are generated from <code style="${m}">custom-elements.json</code>, so a component's React surface cannot drift from the component itself — a new event on the element becomes a new <code style="${m}">on*</code> prop in the same release.
        </p>
        <p style="${s.body}">
          Using a component as a plain custom element still works and is still supported (Option 2 below). It is the portable pattern, and the escape hatch when you need the element directly — not something you are pushed into by a missing wrapper.
        </p>
      </div>

      <hr style="${a.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           SETUP: IMPORT TOKENS & THEME
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${s.h2}">Setup: install peers, import tokens &amp; theme</h2>

      <p style="${s.body} margin-bottom: ${d.content};">
        <code style="${m}">@lit/react</code> is an optional peer — <code style="${m}">npm install @mms/design-system</code> does not pull it in, so no <code style="${m}">/react/*</code> entry point will resolve without it. Install all three React peers yourself:
      </p>

      <pre style="${a.pre}"><code>npm install react react-dom @lit/react</code></pre>

      <p style="${s.body} margin-bottom: ${d.content};">
        Then import the design tokens and your project's theme in your app entry point:
      </p>

      <pre style="${a.pre}"><code>// index.tsx or App.tsx — import ONCE at app root

// 1. Structural tokens (spacing, typography, radius, etc.)
import '@mms/design-system/tokens.css';

// 2. Brand theme — choose ONE per project
import '@mms/design-system/themes/maximus';

// 3. Activate the theme (required!)
document.documentElement.setAttribute('data-theme', 'maximus');

// 4. Now import components where needed
import { MmsButton } from '@mms/design-system/react/mms-button';</code></pre>

      <div style="margin-bottom: ${d.content};">
        <mms-inline-alert
          alert-type="caution"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Don't forget:"
          message="You must set data-theme=&quot;maximus&quot; on the HTML element to activate brand colors. Without it, components render without styling."
        ></mms-inline-alert>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content" style="${s.body}">
          <strong>See also:</strong> <em>Installation → Import tokens & theme</em> for the full list of available themes and dark mode setup.
        </div>
      </mms-card>

      <hr style="${a.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 1: REACT WRAPPERS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${s.h2}">Option 1: React wrapper components — the default path</h2>

      <p style="${s.body} margin-bottom: ${d.content};">
        Import each wrapper from its own entry point, <code style="${m}">@mms/design-system/react/mms-{name}</code>. This is the path to use for anything you ship:
      </p>

      <pre style="${a.pre}"><code>// React components with typed props and React events
import { MmsButton } from '@mms/design-system/react/mms-button';
import { MmsIcon } from '@mms/design-system/react/mms-icon';

function MyComponent() {
  return (
    &lt;MmsButton
      variant="primary"
      label="Submit"
      leftIcon="check"          {/* camelCase props */}
      onClick={() => handleClick()} {/* React event handler */}
    /&gt;
  );
}</code></pre>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.content};">
        <div slot="body-content" style="${s.body}">
          <strong>Benefits:</strong>
          <ul style="margin: ${d.label} 0 0 0; padding-left: var(--spacing-lg1);">
            <li><strong>TypeScript support</strong> — Full prop types, and event handlers typed against the event's <code style="${m}">detail</code> payload</li>
            <li><strong>camelCase props</strong> — <code style="${m}">leftIcon</code> instead of <code style="${m}">left-icon</code></li>
            <li><strong>Real values, not strings</strong> — booleans, arrays and objects pass as properties, no ref required</li>
            <li><strong>Tree-shakeable</strong> — per-component entry points ship only what you import</li>
          </ul>
        </div>
      </mms-card>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content" style="${s.body}">
          <strong>The barrel tree-shakes too — prefer per-component anyway.</strong> Importing one wrapper from <code style="${m}">@mms/design-system/react</code> bundles to the same bytes as importing it from its own entry point (measured under both esbuild and Rolldown). But that result depends on your bundler's side-effect analysis, and a per-component import doesn't — it names one module and pulls in one component regardless. Use the barrel for prototypes; use per-component entry points in production.
        </div>
      </mms-card>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPONENT MAPPING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${s.h2}">Component mapping</h2>

      <p style="${s.body} margin-bottom: ${d.content};">
        Web components use kebab-case (<code style="${m}">mms-button</code>). React wrappers use PascalCase (<code style="${m}">MmsButton</code>). Every component in the system is here — all ${f.length} of them. The third column is the complete set of <code style="${m}">on*</code> props each wrapper declares; anything not listed there (<code style="${m}">onClick</code>, <code style="${m}">onKeyDown</code>, …) is a plain React event and works as usual.
      </p>

      <table style="${a.table} margin-bottom: ${d.content};">
        <thead>
          <tr>
            <th style="${a.th}">Web Component</th>
            <th style="${a.th}">React Wrapper</th>
            <th style="${a.th}">Event props</th>
          </tr>
        </thead>
        <tbody>
          ${f.map(([e,n,r])=>t`
              <tr>
                <td style="${a.td}"><code style="${m}">${e}</code></td>
                <td style="${a.td}"><code style="${m}">${n}</code></td>
                <td style="${a.td}">
                  ${r.length===0?t`<span style="${a.muted}">—</span>`:r.map((e,n)=>t`${n>0?` `:``}<code style="${m}">${e}</code>`)}
                </td>
              </tr>
            `)}
        </tbody>
      </table>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content" style="${s.body}">
          <strong>Naming:</strong> <code style="${m}">mms-{name}</code> → <code style="${m}">Mms{Name}</code>, imported from <code style="${m}">@mms/design-system/react/mms-{name}</code>. Event props follow the element's event name: <code style="${m}">action-click</code> → <code style="${m}">onActionClick</code>. Both the wrappers and this mapping are generated from <code style="${m}">custom-elements.json</code>, so there is nothing to keep in sync by hand.
        </div>
      </mms-card>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           NATIVE-NAMED EVENTS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${s.h2}">Read this before wiring up a form</h2>

      <p style="${s.body} margin-bottom: ${d.content};">
        The form components dispatch <code style="${m}">change</code>, <code style="${m}">input</code>, <code style="${m}">focus</code> and <code style="${m}">blur</code> as their own events, with DOM semantics. The wrapper attaches those listeners itself, so your handler receives the component's event and reads its <code style="${m}">detail</code> — not a React synthetic event. Which of the four a given component dispatches varies:
      </p>

      <table style="${a.table} margin-bottom: ${d.content};">
        <thead>
          <tr>
            <th style="${a.th}">Component</th>
            <th style="${a.th}">Its own events</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${a.td}"><code style="${m}">mms-text-field</code></td>
            <td style="${a.td}"><code style="${m}">onInput</code> <code style="${m}">onChange</code> <code style="${m}">onFocus</code> <code style="${m}">onBlur</code> <code style="${m}">onClear</code></td>
          </tr>
          <tr>
            <td style="${a.td}"><code style="${m}">mms-text-area</code></td>
            <td style="${a.td}"><code style="${m}">onInput</code> <code style="${m}">onChange</code> <code style="${m}">onFocus</code> <code style="${m}">onBlur</code></td>
          </tr>
          <tr>
            <td style="${a.td}"><code style="${m}">mms-select</code>, <code style="${m}">mms-multi-select</code></td>
            <td style="${a.td}"><code style="${m}">onChange</code> <code style="${m}">onFocus</code> <code style="${m}">onBlur</code></td>
          </tr>
          <tr>
            <td style="${a.td}"><code style="${m}">mms-checkbox</code>, <code style="${m}">mms-radio</code>, <code style="${m}">mms-radio-group</code>, <code style="${m}">mms-toggle</code></td>
            <td style="${a.td}"><code style="${m}">onChange</code> only</td>
          </tr>
        </tbody>
      </table>

      <p style="${s.body} margin-bottom: ${d.content};">
        Anything not in that table is an ordinary React DOM handler. <code style="${m}">onFocus</code> on <code style="${m}">MmsCheckbox</code>, for instance, hands you a React synthetic event with no <code style="${m}">detail</code> — which is the correct behaviour, and the types say so.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.content};">
        <div slot="body-content" style="${s.body}">
          <strong><code style="${m}">onChange</code> fires on blur, not on every keystroke.</strong>
          <p style="${s.body} margin-top: ${d.label};">
            React aliases <code style="${m}">onChange</code> on native inputs to fire per keystroke. Ours does not — it follows the DOM, where <code style="${m}">input</code> fires as you type and <code style="${m}">change</code> fires when the value is committed. <strong>If you want per-keystroke updates, use <code style="${m}">onInput</code>.</strong>
          </p>
          <p style="${s.body} margin-top: ${d.label};">
            We kept the DOM meaning rather than remapping <code style="${m}">input</code> onto <code style="${m}">onChange</code>, because the alternative is a wrapper that lies about which event it listens to — and the same components have to behave identically outside React.
          </p>
        </div>
      </mms-card>

      <pre style="${a.pre}"><code>import { MmsTextField } from '@mms/design-system/react/mms-text-field';

&lt;MmsTextField
  label="Full name"
  onInput={(e) => setName(e.detail.value)}    {/* every keystroke */}
  onChange={(e) => validate(e.detail.value)}   {/* on commit / blur */}
/&gt;</code></pre>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content" style="${s.body}">
          <strong>Also worth knowing:</strong> your handler is called once per interaction, and <code style="${m}">e.detail</code> is always the documented payload — no defensive <code style="${m}">if (!e.detail)</code> guard needed. Two things would otherwise break that, and both are stopped at the component boundary. A native <code style="${m}">input</code>, <code style="${m}">focus</code> or <code style="${m}">blur</code> from the inner control is <code style="${m}">composed</code>, so on the components that declare those names it would cross the shadow boundary and hit your handler a second time with no payload. And on <code style="${m}">MmsRadioGroup</code>, the slotted <code style="${m}">mms-radio</code> dispatches its own bubbling <code style="${m}">change</code>, which would surface on the group a second time carrying the radio's payload instead of the group's. Both are verified in a real browser against the packed tarball, not just asserted.
        </div>
      </mms-card>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           FORM PARTICIPATION
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${s.h2}">Submitting, resetting and validating</h2>

      <p style="${s.body} margin-bottom: ${d.content};">
        <code style="${m}">MmsTextField</code>, <code style="${m}">MmsTextArea</code>, <code style="${m}">MmsSelect</code>, <code style="${m}">MmsMultiSelect</code>, <code style="${m}">MmsCheckbox</code>, <code style="${m}">MmsToggle</code> and <code style="${m}">MmsRadioGroup</code> take part in a surrounding <code style="${m}">&lt;form&gt;</code> the way native inputs do. Give each one a <code style="${m}">name</code> and it appears in <code style="${m}">new FormData(form)</code>, a <code style="${m}">required</code> field blocks a native submit, and a disabled <code style="${m}">&lt;fieldset&gt;</code> disables it. You do not need an <code style="${m}">onChange</code> handler just to read the value at submit time.
      </p>

      <pre style="${a.pre}"><code>import { MmsTextField } from '@mms/design-system/react/mms-text-field';
import { MmsCheckbox } from '@mms/design-system/react/mms-checkbox';

function SignUp() {
  return (
    &lt;form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        createAccount(Object.fromEntries(data)); {/* { email, terms } */}
      }}
    &gt;
      &lt;MmsTextField name="email" label="Email" required /&gt;
      &lt;MmsCheckbox name="terms" label="I agree to the terms" required /&gt;
      &lt;button type="submit"&gt;Create account&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content" style="${s.body}">
          <strong>Three things that differ from what you may expect.</strong>
          <ul style="margin: ${d.label} 0 0 0; padding-left: var(--spacing-lg1);">
            <li><strong>The field's <code style="${m}">name</code> is <code style="${m}">name</code>.</strong> On <code style="${m}">MmsCheckbox</code>, <code style="${m}">MmsToggle</code> and <code style="${m}">MmsRadio</code> it used to be <code style="${m}">fieldName</code>. That still works as an alias but is deprecated since 1.0.0 — use <code style="${m}">name</code>. A field with no name is not submitted.</li>
            <li><strong><code style="${m}">value</code> is no longer an attribute on the element.</strong> It is a property only, so browser DevTools, <code style="${m}">getAttribute('value')</code> and CSS attribute selectors will not show what the user typed. Read it from the event's <code style="${m}">detail.value</code>, the element's <code style="${m}">.value</code>, or <code style="${m}">FormData</code>. This keeps typed values — passwords included — out of the DOM.</li>
            <li><strong><code style="${m}">form.reset()</code> fires no event.</strong> A reset restores the authored <code style="${m}">value</code> <em>attribute</em>, which is empty when you set <code style="${m}">value</code> through a React prop. If you keep the value in state, clear it yourself in the form's <code style="${m}">onReset</code>, or your state and the field disagree.</li>
          </ul>
        </div>
      </mms-card>

      <h3 style="${s.h3}">Password strength</h3>

      <p style="${s.body} margin-bottom: ${d.content};">
        Strength feedback is part of <code style="${m}">MmsTextField</code> — there is no separate component to import. It is off by default and only applies to a password field. Props use camelCase; <code style="${m}">strengthRules</code> is an array, and <code style="${m}">strengthCriteria</code> (your own requirements, sync or async) is a property you pass directly, with no ref needed.
      </p>

      <pre style="${a.pre}"><code>// Defined once, outside the component, so its identity is stable
const CRITERIA = [
  {
    id: 'not-breached',
    label: 'Not found in a known data breach',
    debounce: 400,
    test: async (value: string) => !(await isBreached(value)),
  },
];

&lt;MmsTextField
  name="password"
  label="Password"
  type="password"
  showStrength
  strengthMinLength={12}
  strengthRules={['number', 'special']}
  strengthCriteria={CRITERIA}
/&gt;</code></pre>

      <p style="${s.body} ${a.muted} margin-bottom: ${d.subsection};">
        Keep the <code style="${m}">strengthCriteria</code> array stable (module scope, or <code style="${m}">useMemo</code>): a new array counts as a change, and each run calls your <code style="${m}">test</code> again. The password you receive in <code style="${m}">test(value)</code> is the only place the value leaves the field — send it nowhere you would not send a login. The full list of built-in requirements and options is on <strong>Text Field → Password Strength</strong>.
      </p>

      <hr style="${a.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 2: DIRECT WEB COMPONENTS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${s.h2}">Option 2: custom elements in JSX — the escape hatch</h2>

      <p style="${s.body} margin-bottom: ${d.content};">
        Every component still works as a plain custom element in JSX, and this path is fully supported. It is the portable pattern — the same markup runs in any framework or none — and it is what you reach for when you need the element itself rather than a React view of it. For everyday React work, Option 1 does all of the following for you:
      </p>

      <pre style="${a.pre}"><code>// Import component (registers the custom element)
import '@mms/design-system/components/mms-text-field';

function MyComponent() {
  const fieldRef = useRef&lt;HTMLElement&gt;(null);

  useEffect(() => {
    const field = fieldRef.current;

    // Events: attach manually, there is no onInput prop
    const onInput = (e) => setValue(e.target.value);
    field?.addEventListener('input', onInput);

    // Non-string values: set as a property, not an attribute
    if (field) field.required = true;

    return () => field?.removeEventListener('input', onInput);
  }, []);

  return (
    &lt;mms-text-field
      ref={fieldRef}
      label="Full name"
      helper-text="As it appears on your ID"  {/* kebab-case attributes */}
    /&gt;
  );
}</code></pre>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content" style="${s.body}">
          <strong>What you take on:</strong>
          <ul style="margin: ${d.label} 0 0 0; padding-left: var(--spacing-lg1);">
            <li>No TypeScript types for custom element props — declare them yourself (below)</li>
            <li>Attributes are kebab-case (<code style="${m}">left-icon</code>, not <code style="${m}">leftIcon</code>)</li>
            <li>Events require <code style="${m}">useRef</code> + <code style="${m}">useEffect</code> + <code style="${m}">addEventListener</code></li>
            <li>Attributes carry strings only. Set non-string values (booleans, arrays, objects) as properties through a ref — <code style="${m}">ref.current.checked = true</code></li>
          </ul>
          <p style="${s.body} margin-top: ${d.label};">The wrapper for the same component removes all four.</p>
        </div>
      </mms-card>

      <hr style="${a.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           TYPESCRIPT
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${s.h2}">TypeScript support</h2>

      <p style="${s.body} margin-bottom: ${d.content};">
        The Option 1 wrappers are fully typed — props, and event handlers typed against each event's <code style="${m}">detail</code> payload. Nothing below is needed for them.
      </p>

      <p style="${s.body} margin-bottom: ${d.content};">
        Components used the Option 2 way are untyped in JSX. Declare the ones you use — the shapes are in
        <code style="${m}">custom-elements.json</code>, which ships inside the package and lists every prop, attribute and event for all components:
      </p>

      <pre style="${a.pre}"><code>// types/mms-design-system.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'mms-text-field': React.DetailedHTMLProps&lt;
      React.HTMLAttributes&lt;HTMLElement&gt; & {
        label?: string;
        placeholder?: string;
        size?: 'sm' | 'md' | 'lg';
        'helper-text'?: string;
        'error-text'?: string;
        required?: boolean;
        disabled?: boolean;
      },
      HTMLElement
    >;
  }
}</code></pre>

      <p style="${s.body} ${a.muted} margin-bottom: ${d.subsection};">
        <strong>Note:</strong> the detail types are exported too — <code style="${m}">import type { TextFieldValueDetail } from '@mms/design-system/react/mms-text-field'</code> — so you can type a handler you've extracted out of the JSX.
      </p>

      <hr style="${a.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPLETE EXAMPLE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${s.h2}">Complete example</h2>

      <pre style="${a.pre} margin-bottom: ${d.subsection};"><code>// App.tsx
import '@mms/design-system/tokens.css';
import '@mms/design-system/themes/maximus';
// One import per component — tree-shakeable
import { MmsButton } from '@mms/design-system/react/mms-button';
import { MmsIcon } from '@mms/design-system/react/mms-icon';
import { MmsTextField } from '@mms/design-system/react/mms-text-field';

function App() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    await submitForm();
    setLoading(false);
  };

  return (
    &lt;div data-theme="maximus"&gt;
      &lt;header&gt;
        &lt;h1&gt;Welcome&lt;/h1&gt;
        &lt;MmsIcon name="user" size="lg" /&gt;
      &lt;/header&gt;

      &lt;main&gt;
        &lt;MmsTextField
          label="Full name"
          helperText="As it appears on your ID"
          onInput={(e) => setName(e.detail.value)} {/* per keystroke */}
        /&gt;

        &lt;MmsButton
          variant="primary"
          label={loading ? "Submitting..." : "Submit"}
          leftIcon={loading ? "spinner" : "check"}
          disabled={loading || !name}
          onClick={handleSubmit}
        /&gt;

        &lt;MmsButton
          variant="secondary"
          label="Cancel"
          onClick={() => navigate('/')}
        /&gt;
      &lt;/main&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <hr style="${a.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           REACT 19 NOTE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="${s.h2}">React 19+ note</h2>

      <p style="${s.body} margin-bottom: ${d.content};">
        React 19 adds <a href="https://react.dev/blog/2024/04/25/react-19#support-for-custom-elements" style="color: var(--color-link-default);">native custom element support</a> — it assigns a value as a property when the element defines one, and falls back to an attribute otherwise. That removes some of the Option 2 boilerplate on React 19 projects. The <code style="${m}">useRef</code> + <code style="${m}">addEventListener</code> pattern above is the portable one and keeps working either way.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block;">
        <div slot="body-content" style="${s.body}">
          <strong>Future-proof:</strong> React 19 closes the property-vs-attribute gap, but not the typing one — it gives you no prop types and no typed <code style="${m}">detail</code> on an event. The wrappers stay worth using on React 19 for exactly that.
        </div>
      </mms-card>

    </div>
  `},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'React Usage',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Using Components in React</h1>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.subsection};">Every component ships a typed React wrapper — import it and go</p>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           WHY WRAPPERS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Why React wrappers?</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        While web components work in React, there are friction points:
      </p>

      <ul style="\${t.body} margin-bottom: \${space.content}; padding-left: var(--spacing-lg1);">
        <li><strong>Event handling</strong> — React's synthetic events don't natively work with custom element events</li>
        <li><strong>Property vs attribute</strong> — React passes all props as attributes (strings); objects/arrays need special handling</li>
        <li><strong>TypeScript</strong> — Custom elements lack type definitions for JSX</li>
        <li><strong>Refs</strong> — React refs need wrapping to expose the underlying element</li>
      </ul>

      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        <h3 style="\${t.h3}">The solution: @lit/react wrappers</h3>
        <p style="\${t.body} margin-bottom: \${space.content};">
          Thin React wrapper components built with <code style="\${CODE}">@lit/react</code>. These wrappers provide typed props, React-style event handlers (<code style="\${CODE}">onClick</code>), and proper ref forwarding — all while delegating to the underlying Lit web component.
        </p>
        <p style="\${t.body} margin-bottom: \${space.content};">
          <strong>Every component ships a wrapper.</strong> They are generated from <code style="\${CODE}">custom-elements.json</code>, so a component's React surface cannot drift from the component itself — a new event on the element becomes a new <code style="\${CODE}">on*</code> prop in the same release.
        </p>
        <p style="\${t.body}">
          Using a component as a plain custom element still works and is still supported (Option 2 below). It is the portable pattern, and the escape hatch when you need the element directly — not something you are pushed into by a missing wrapper.
        </p>
      </div>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           SETUP: IMPORT TOKENS & THEME
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Setup: install peers, import tokens &amp; theme</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        <code style="\${CODE}">@lit/react</code> is an optional peer — <code style="\${CODE}">npm install @mms/design-system</code> does not pull it in, so no <code style="\${CODE}">/react/*</code> entry point will resolve without it. Install all three React peers yourself:
      </p>

      <pre style="\${doc.pre}"><code>npm install react react-dom @lit/react</code></pre>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Then import the design tokens and your project's theme in your app entry point:
      </p>

      <pre style="\${doc.pre}"><code>// index.tsx or App.tsx — import ONCE at app root

// 1. Structural tokens (spacing, typography, radius, etc.)
import '@mms/design-system/tokens.css';

// 2. Brand theme — choose ONE per project
import '@mms/design-system/themes/maximus';

// 3. Activate the theme (required!)
document.documentElement.setAttribute('data-theme', 'maximus');

// 4. Now import components where needed
import { MmsButton } from '@mms/design-system/react/mms-button';</code></pre>

      <div style="margin-bottom: \${space.content};">
        <mms-inline-alert
          alert-type="caution"
          role="note"
          aria-live="off"
          .dismissible=\${false}
          summary="Don't forget:"
          message="You must set data-theme=&quot;maximus&quot; on the HTML element to activate brand colors. Without it, components render without styling."
        ></mms-inline-alert>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content" style="\${t.body}">
          <strong>See also:</strong> <em>Installation → Import tokens & theme</em> for the full list of available themes and dark mode setup.
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 1: REACT WRAPPERS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Option 1: React wrapper components — the default path</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Import each wrapper from its own entry point, <code style="\${CODE}">@mms/design-system/react/mms-{name}</code>. This is the path to use for anything you ship:
      </p>

      <pre style="\${doc.pre}"><code>// React components with typed props and React events
import { MmsButton } from '@mms/design-system/react/mms-button';
import { MmsIcon } from '@mms/design-system/react/mms-icon';

function MyComponent() {
  return (
    &lt;MmsButton
      variant="primary"
      label="Submit"
      leftIcon="check"          {/* camelCase props */}
      onClick={() => handleClick()} {/* React event handler */}
    /&gt;
  );
}</code></pre>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content" style="\${t.body}">
          <strong>Benefits:</strong>
          <ul style="margin: \${space.label} 0 0 0; padding-left: var(--spacing-lg1);">
            <li><strong>TypeScript support</strong> — Full prop types, and event handlers typed against the event's <code style="\${CODE}">detail</code> payload</li>
            <li><strong>camelCase props</strong> — <code style="\${CODE}">leftIcon</code> instead of <code style="\${CODE}">left-icon</code></li>
            <li><strong>Real values, not strings</strong> — booleans, arrays and objects pass as properties, no ref required</li>
            <li><strong>Tree-shakeable</strong> — per-component entry points ship only what you import</li>
          </ul>
        </div>
      </mms-card>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content" style="\${t.body}">
          <strong>The barrel tree-shakes too — prefer per-component anyway.</strong> Importing one wrapper from <code style="\${CODE}">@mms/design-system/react</code> bundles to the same bytes as importing it from its own entry point (measured under both esbuild and Rolldown). But that result depends on your bundler's side-effect analysis, and a per-component import doesn't — it names one module and pulls in one component regardless. Use the barrel for prototypes; use per-component entry points in production.
        </div>
      </mms-card>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPONENT MAPPING
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Component mapping</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Web components use kebab-case (<code style="\${CODE}">mms-button</code>). React wrappers use PascalCase (<code style="\${CODE}">MmsButton</code>). Every component in the system is here — all \${WRAPPERS.length} of them. The third column is the complete set of <code style="\${CODE}">on*</code> props each wrapper declares; anything not listed there (<code style="\${CODE}">onClick</code>, <code style="\${CODE}">onKeyDown</code>, …) is a plain React event and works as usual.
      </p>

      <table style="\${doc.table} margin-bottom: \${space.content};">
        <thead>
          <tr>
            <th style="\${doc.th}">Web Component</th>
            <th style="\${doc.th}">React Wrapper</th>
            <th style="\${doc.th}">Event props</th>
          </tr>
        </thead>
        <tbody>
          \${WRAPPERS.map(([tag, wrapper, events]) => html\`
              <tr>
                <td style="\${doc.td}"><code style="\${CODE}">\${tag}</code></td>
                <td style="\${doc.td}"><code style="\${CODE}">\${wrapper}</code></td>
                <td style="\${doc.td}">
                  \${events.length === 0 ? html\`<span style="\${doc.muted}">—</span>\` : events.map((e, i) => html\`\${i > 0 ? ' ' : ''}<code style="\${CODE}">\${e}</code>\`)}
                </td>
              </tr>
            \`)}
        </tbody>
      </table>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content" style="\${t.body}">
          <strong>Naming:</strong> <code style="\${CODE}">mms-{name}</code> → <code style="\${CODE}">Mms{Name}</code>, imported from <code style="\${CODE}">@mms/design-system/react/mms-{name}</code>. Event props follow the element's event name: <code style="\${CODE}">action-click</code> → <code style="\${CODE}">onActionClick</code>. Both the wrappers and this mapping are generated from <code style="\${CODE}">custom-elements.json</code>, so there is nothing to keep in sync by hand.
        </div>
      </mms-card>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           NATIVE-NAMED EVENTS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Read this before wiring up a form</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        The form components dispatch <code style="\${CODE}">change</code>, <code style="\${CODE}">input</code>, <code style="\${CODE}">focus</code> and <code style="\${CODE}">blur</code> as their own events, with DOM semantics. The wrapper attaches those listeners itself, so your handler receives the component's event and reads its <code style="\${CODE}">detail</code> — not a React synthetic event. Which of the four a given component dispatches varies:
      </p>

      <table style="\${doc.table} margin-bottom: \${space.content};">
        <thead>
          <tr>
            <th style="\${doc.th}">Component</th>
            <th style="\${doc.th}">Its own events</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><code style="\${CODE}">mms-text-field</code></td>
            <td style="\${doc.td}"><code style="\${CODE}">onInput</code> <code style="\${CODE}">onChange</code> <code style="\${CODE}">onFocus</code> <code style="\${CODE}">onBlur</code> <code style="\${CODE}">onClear</code></td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${CODE}">mms-text-area</code></td>
            <td style="\${doc.td}"><code style="\${CODE}">onInput</code> <code style="\${CODE}">onChange</code> <code style="\${CODE}">onFocus</code> <code style="\${CODE}">onBlur</code></td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${CODE}">mms-select</code>, <code style="\${CODE}">mms-multi-select</code></td>
            <td style="\${doc.td}"><code style="\${CODE}">onChange</code> <code style="\${CODE}">onFocus</code> <code style="\${CODE}">onBlur</code></td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${CODE}">mms-checkbox</code>, <code style="\${CODE}">mms-radio</code>, <code style="\${CODE}">mms-radio-group</code>, <code style="\${CODE}">mms-toggle</code></td>
            <td style="\${doc.td}"><code style="\${CODE}">onChange</code> only</td>
          </tr>
        </tbody>
      </table>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Anything not in that table is an ordinary React DOM handler. <code style="\${CODE}">onFocus</code> on <code style="\${CODE}">MmsCheckbox</code>, for instance, hands you a React synthetic event with no <code style="\${CODE}">detail</code> — which is the correct behaviour, and the types say so.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content" style="\${t.body}">
          <strong><code style="\${CODE}">onChange</code> fires on blur, not on every keystroke.</strong>
          <p style="\${t.body} margin-top: \${space.label};">
            React aliases <code style="\${CODE}">onChange</code> on native inputs to fire per keystroke. Ours does not — it follows the DOM, where <code style="\${CODE}">input</code> fires as you type and <code style="\${CODE}">change</code> fires when the value is committed. <strong>If you want per-keystroke updates, use <code style="\${CODE}">onInput</code>.</strong>
          </p>
          <p style="\${t.body} margin-top: \${space.label};">
            We kept the DOM meaning rather than remapping <code style="\${CODE}">input</code> onto <code style="\${CODE}">onChange</code>, because the alternative is a wrapper that lies about which event it listens to — and the same components have to behave identically outside React.
          </p>
        </div>
      </mms-card>

      <pre style="\${doc.pre}"><code>import { MmsTextField } from '@mms/design-system/react/mms-text-field';

&lt;MmsTextField
  label="Full name"
  onInput={(e) => setName(e.detail.value)}    {/* every keystroke */}
  onChange={(e) => validate(e.detail.value)}   {/* on commit / blur */}
/&gt;</code></pre>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content" style="\${t.body}">
          <strong>Also worth knowing:</strong> your handler is called once per interaction, and <code style="\${CODE}">e.detail</code> is always the documented payload — no defensive <code style="\${CODE}">if (!e.detail)</code> guard needed. Two things would otherwise break that, and both are stopped at the component boundary. A native <code style="\${CODE}">input</code>, <code style="\${CODE}">focus</code> or <code style="\${CODE}">blur</code> from the inner control is <code style="\${CODE}">composed</code>, so on the components that declare those names it would cross the shadow boundary and hit your handler a second time with no payload. And on <code style="\${CODE}">MmsRadioGroup</code>, the slotted <code style="\${CODE}">mms-radio</code> dispatches its own bubbling <code style="\${CODE}">change</code>, which would surface on the group a second time carrying the radio's payload instead of the group's. Both are verified in a real browser against the packed tarball, not just asserted.
        </div>
      </mms-card>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           FORM PARTICIPATION
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Submitting, resetting and validating</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        <code style="\${CODE}">MmsTextField</code>, <code style="\${CODE}">MmsTextArea</code>, <code style="\${CODE}">MmsSelect</code>, <code style="\${CODE}">MmsMultiSelect</code>, <code style="\${CODE}">MmsCheckbox</code>, <code style="\${CODE}">MmsToggle</code> and <code style="\${CODE}">MmsRadioGroup</code> take part in a surrounding <code style="\${CODE}">&lt;form&gt;</code> the way native inputs do. Give each one a <code style="\${CODE}">name</code> and it appears in <code style="\${CODE}">new FormData(form)</code>, a <code style="\${CODE}">required</code> field blocks a native submit, and a disabled <code style="\${CODE}">&lt;fieldset&gt;</code> disables it. You do not need an <code style="\${CODE}">onChange</code> handler just to read the value at submit time.
      </p>

      <pre style="\${doc.pre}"><code>import { MmsTextField } from '@mms/design-system/react/mms-text-field';
import { MmsCheckbox } from '@mms/design-system/react/mms-checkbox';

function SignUp() {
  return (
    &lt;form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        createAccount(Object.fromEntries(data)); {/* { email, terms } */}
      }}
    &gt;
      &lt;MmsTextField name="email" label="Email" required /&gt;
      &lt;MmsCheckbox name="terms" label="I agree to the terms" required /&gt;
      &lt;button type="submit"&gt;Create account&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content" style="\${t.body}">
          <strong>Three things that differ from what you may expect.</strong>
          <ul style="margin: \${space.label} 0 0 0; padding-left: var(--spacing-lg1);">
            <li><strong>The field's <code style="\${CODE}">name</code> is <code style="\${CODE}">name</code>.</strong> On <code style="\${CODE}">MmsCheckbox</code>, <code style="\${CODE}">MmsToggle</code> and <code style="\${CODE}">MmsRadio</code> it used to be <code style="\${CODE}">fieldName</code>. That still works as an alias but is deprecated since 1.0.0 — use <code style="\${CODE}">name</code>. A field with no name is not submitted.</li>
            <li><strong><code style="\${CODE}">value</code> is no longer an attribute on the element.</strong> It is a property only, so browser DevTools, <code style="\${CODE}">getAttribute('value')</code> and CSS attribute selectors will not show what the user typed. Read it from the event's <code style="\${CODE}">detail.value</code>, the element's <code style="\${CODE}">.value</code>, or <code style="\${CODE}">FormData</code>. This keeps typed values — passwords included — out of the DOM.</li>
            <li><strong><code style="\${CODE}">form.reset()</code> fires no event.</strong> A reset restores the authored <code style="\${CODE}">value</code> <em>attribute</em>, which is empty when you set <code style="\${CODE}">value</code> through a React prop. If you keep the value in state, clear it yourself in the form's <code style="\${CODE}">onReset</code>, or your state and the field disagree.</li>
          </ul>
        </div>
      </mms-card>

      <h3 style="\${t.h3}">Password strength</h3>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Strength feedback is part of <code style="\${CODE}">MmsTextField</code> — there is no separate component to import. It is off by default and only applies to a password field. Props use camelCase; <code style="\${CODE}">strengthRules</code> is an array, and <code style="\${CODE}">strengthCriteria</code> (your own requirements, sync or async) is a property you pass directly, with no ref needed.
      </p>

      <pre style="\${doc.pre}"><code>// Defined once, outside the component, so its identity is stable
const CRITERIA = [
  {
    id: 'not-breached',
    label: 'Not found in a known data breach',
    debounce: 400,
    test: async (value: string) => !(await isBreached(value)),
  },
];

&lt;MmsTextField
  name="password"
  label="Password"
  type="password"
  showStrength
  strengthMinLength={12}
  strengthRules={['number', 'special']}
  strengthCriteria={CRITERIA}
/&gt;</code></pre>

      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.subsection};">
        Keep the <code style="\${CODE}">strengthCriteria</code> array stable (module scope, or <code style="\${CODE}">useMemo</code>): a new array counts as a change, and each run calls your <code style="\${CODE}">test</code> again. The password you receive in <code style="\${CODE}">test(value)</code> is the only place the value leaves the field — send it nowhere you would not send a login. The full list of built-in requirements and options is on <strong>Text Field → Password Strength</strong>.
      </p>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           OPTION 2: DIRECT WEB COMPONENTS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Option 2: custom elements in JSX — the escape hatch</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Every component still works as a plain custom element in JSX, and this path is fully supported. It is the portable pattern — the same markup runs in any framework or none — and it is what you reach for when you need the element itself rather than a React view of it. For everyday React work, Option 1 does all of the following for you:
      </p>

      <pre style="\${doc.pre}"><code>// Import component (registers the custom element)
import '@mms/design-system/components/mms-text-field';

function MyComponent() {
  const fieldRef = useRef&lt;HTMLElement&gt;(null);

  useEffect(() => {
    const field = fieldRef.current;

    // Events: attach manually, there is no onInput prop
    const onInput = (e) => setValue(e.target.value);
    field?.addEventListener('input', onInput);

    // Non-string values: set as a property, not an attribute
    if (field) field.required = true;

    return () => field?.removeEventListener('input', onInput);
  }, []);

  return (
    &lt;mms-text-field
      ref={fieldRef}
      label="Full name"
      helper-text="As it appears on your ID"  {/* kebab-case attributes */}
    /&gt;
  );
}</code></pre>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content" style="\${t.body}">
          <strong>What you take on:</strong>
          <ul style="margin: \${space.label} 0 0 0; padding-left: var(--spacing-lg1);">
            <li>No TypeScript types for custom element props — declare them yourself (below)</li>
            <li>Attributes are kebab-case (<code style="\${CODE}">left-icon</code>, not <code style="\${CODE}">leftIcon</code>)</li>
            <li>Events require <code style="\${CODE}">useRef</code> + <code style="\${CODE}">useEffect</code> + <code style="\${CODE}">addEventListener</code></li>
            <li>Attributes carry strings only. Set non-string values (booleans, arrays, objects) as properties through a ref — <code style="\${CODE}">ref.current.checked = true</code></li>
          </ul>
          <p style="\${t.body} margin-top: \${space.label};">The wrapper for the same component removes all four.</p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           TYPESCRIPT
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">TypeScript support</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        The Option 1 wrappers are fully typed — props, and event handlers typed against each event's <code style="\${CODE}">detail</code> payload. Nothing below is needed for them.
      </p>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Components used the Option 2 way are untyped in JSX. Declare the ones you use — the shapes are in
        <code style="\${CODE}">custom-elements.json</code>, which ships inside the package and lists every prop, attribute and event for all components:
      </p>

      <pre style="\${doc.pre}"><code>// types/mms-design-system.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'mms-text-field': React.DetailedHTMLProps&lt;
      React.HTMLAttributes&lt;HTMLElement&gt; & {
        label?: string;
        placeholder?: string;
        size?: 'sm' | 'md' | 'lg';
        'helper-text'?: string;
        'error-text'?: string;
        required?: boolean;
        disabled?: boolean;
      },
      HTMLElement
    >;
  }
}</code></pre>

      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.subsection};">
        <strong>Note:</strong> the detail types are exported too — <code style="\${CODE}">import type { TextFieldValueDetail } from '@mms/design-system/react/mms-text-field'</code> — so you can type a handler you've extracted out of the JSX.
      </p>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           COMPLETE EXAMPLE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">Complete example</h2>

      <pre style="\${doc.pre} margin-bottom: \${space.subsection};"><code>// App.tsx
import '@mms/design-system/tokens.css';
import '@mms/design-system/themes/maximus';
// One import per component — tree-shakeable
import { MmsButton } from '@mms/design-system/react/mms-button';
import { MmsIcon } from '@mms/design-system/react/mms-icon';
import { MmsTextField } from '@mms/design-system/react/mms-text-field';

function App() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    await submitForm();
    setLoading(false);
  };

  return (
    &lt;div data-theme="maximus"&gt;
      &lt;header&gt;
        &lt;h1&gt;Welcome&lt;/h1&gt;
        &lt;MmsIcon name="user" size="lg" /&gt;
      &lt;/header&gt;

      &lt;main&gt;
        &lt;MmsTextField
          label="Full name"
          helperText="As it appears on your ID"
          onInput={(e) => setName(e.detail.value)} {/* per keystroke */}
        /&gt;

        &lt;MmsButton
          variant="primary"
          label={loading ? "Submitting..." : "Submit"}
          leftIcon={loading ? "spinner" : "check"}
          disabled={loading || !name}
          onClick={handleSubmit}
        /&gt;

        &lt;MmsButton
          variant="secondary"
          label="Cancel"
          onClick={() => navigate('/')}
        /&gt;
      &lt;/main&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           REACT 19 NOTE
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="\${t.h2}">React 19+ note</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        React 19 adds <a href="https://react.dev/blog/2024/04/25/react-19#support-for-custom-elements" style="color: var(--color-link-default);">native custom element support</a> — it assigns a value as a property when the element defines one, and falls back to an attribute otherwise. That removes some of the Option 2 boilerplate on React 19 projects. The <code style="\${CODE}">useRef</code> + <code style="\${CODE}">addEventListener</code> pattern above is the portable one and keeps working either way.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block;">
        <div slot="body-content" style="\${t.body}">
          <strong>Future-proof:</strong> React 19 closes the property-vs-attribute gap, but not the typing one — it gives you no prop types and no typed <code style="\${CODE}">detail</code> on an event. The wrappers stay worth using on React 19 for exactly that.
        </div>
      </mms-card>

    </div>
  \`
}`,...g.parameters?.docs?.source}}},_=[`ReactUsage`]}))();export{g as ReactUsage,_ as __namedExportsOrder,h as default};