import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{s as n,t as r}from"./lit-aQ4dERgF.js";import{n as i,r as a,t as o}from"./theme-constraints-DyQSN_xs.js";import{t as s}from"./mms-checkbox.component-B-NGa3wB.js";var c=t({Overview:()=>p,PlaygroundStory:()=>m,__namedExportsOrder:()=>h,default:()=>l}),l,u,d,f,p,m,h,g=e((()=>{r(),s(),i(),l={title:`Forms/Checkbox`,tags:[`!autodocs`]},u={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},d=`680px`,f=`960px`,p={name:`Overview`,render:()=>n`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${f}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${u.h1}">Checkbox</h1>
      <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 2rem;">
        Checkboxes allow users to select one or more items from a set. They're commonly used in forms, settings, and filters.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- States -->
      <h2 style="${u.h2}">Selection states</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${u.h3}">Unchecked</p>
          <p style="${u.bodySm} opacity: 0.85; flex: 1;">
            Default state. User has not selected this option.
          </p>
          <div style="margin-top: 1rem;"><mms-checkbox label="Unchecked option"></mms-checkbox></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${u.h3}">Checked</p>
          <p style="${u.bodySm} opacity: 0.85; flex: 1;">
            Selected state. User has chosen this option.
          </p>
          <div style="margin-top: 1rem;"><mms-checkbox label="Checked option" checked></mms-checkbox></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${u.h3}">Indeterminate</p>
          <p style="${u.bodySm} opacity: 0.85; flex: 1;">
            Mixed state. Used for "select all" when some children are checked.
          </p>
          <div style="margin-top: 1rem;"><mms-checkbox label="Some selected" indeterminate></mms-checkbox></div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="${u.h2}">Color schemes</h2>
      <p style="${u.bodySm} opacity: 0.85; max-width: ${d}; margin-bottom: 1.5rem;">
        The <code style="${u.monoSm}">color-scheme</code> prop controls which color palette the checkbox uses when checked.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${u.h3}">Primary &amp; Secondary</p>
          <p style="${u.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Brand colors defined by the active theme.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-checkbox color-scheme="primary" label="Primary" checked></mms-checkbox>
            <mms-checkbox color-scheme="secondary" label="Secondary" checked></mms-checkbox>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${u.h3}">Accent &amp; Onyx</p>
          <p style="${u.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            <strong>Accent</strong> is theme-specific highlight. <strong>Onyx</strong> is structural black.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-checkbox color-scheme="accent" label="Accent" checked></mms-checkbox>
            <mms-checkbox color-scheme="onyx" label="Onyx" checked></mms-checkbox>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="${u.h2}">Sizes</h2>
      <p style="${u.bodySm} opacity: 0.85; max-width: ${d}; margin-bottom: 1.5rem;">
        Three sizes accommodate different contexts — compact forms, standard inputs, and prominent selections.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-checkbox size="sm" label="Small checkbox" checked></mms-checkbox>
        <mms-checkbox size="md" label="Medium checkbox (default)" checked></mms-checkbox>
        <mms-checkbox size="lg" label="Large checkbox" checked></mms-checkbox>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="${u.h2}">With helper text</h2>
      <p style="${u.bodySm} opacity: 0.85; max-width: ${d}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the checkbox.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox 
          label="Subscribe to newsletter" 
          helper-text="We'll send you weekly updates about new features."
        ></mms-checkbox>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Heading -->
      <h2 style="${u.h2}">With heading</h2>
      <p style="${u.bodySm} opacity: 0.85; max-width: ${d}; margin-bottom: 1.5rem;">
        An optional heading can be displayed above the checkbox for field labels.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox 
          heading="Notification preferences"
          label="Send me email notifications" 
          helper-text="You can change this setting at any time."
        ></mms-checkbox>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="${u.h2}">Error state</h2>
      <p style="${u.bodySm} opacity: 0.85; max-width: ${d}; margin-bottom: 1.5rem;">
        Error state is used for validation feedback. The checkbox indicator and error message both use the error color.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox 
          label="I agree to the terms and conditions" 
          error
          error-text="You must accept the terms to continue."
          required
        ></mms-checkbox>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Indicator -->
      <h2 style="${u.h2}">Required indicator</h2>
      <p style="${u.bodySm} opacity: 0.85; max-width: ${d}; margin-bottom: 1.5rem;">
        When <code style="${u.monoSm}">required</code> is set, an asterisk appears on the highest-level label. If a heading is present, the asterisk shows there; otherwise it appears on the checkbox label.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${u.h3}">With heading</p>
          <p style="${u.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Asterisk appears on the heading.
          </p>
          <mms-checkbox 
            heading="Terms agreement"
            label="I accept the terms" 
            required
          ></mms-checkbox>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${u.h3}">Without heading</p>
          <p style="${u.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Asterisk appears on the label.
          </p>
          <mms-checkbox 
            label="I accept the terms" 
            required
          ></mms-checkbox>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled & Readonly -->
      <h2 style="${u.h2}">Disabled &amp; read-only</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${u.h3}">Disabled</p>
          <p style="${u.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents interaction and dims appearance.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-checkbox label="Disabled unchecked" disabled></mms-checkbox>
            <mms-checkbox label="Disabled checked" disabled checked></mms-checkbox>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${u.h3}">Read-only</p>
          <p style="${u.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents changes but remains visible and focusable.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-checkbox label="Read-only unchecked" readonly></mms-checkbox>
            <mms-checkbox label="Read-only checked" readonly checked></mms-checkbox>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Checkbox Only (no label) -->
      <h2 style="${u.h2}">Checkbox only</h2>
      <p style="${u.bodySm} opacity: 0.85; max-width: ${d}; margin-bottom: 1.5rem;">
        When no label is provided, only the checkbox indicator is rendered. Useful for table rows or other constrained layouts.
      </p>

      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem;">
        <mms-checkbox></mms-checkbox>
        <mms-checkbox checked></mms-checkbox>
        <mms-checkbox indeterminate></mms-checkbox>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${u.h2}">Accessibility</h2>

      <h3 style="${u.h3}">WCAG 2.2 AA Compliance</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Criterion</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Requirement</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Implementation</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>1.3.1</strong> Info & Relationships</td>
            <td style="padding: 0.5rem 0.75rem;">Programmatic label association</td>
            <td style="padding: 0.5rem 0.75rem;">Label linked via <code style="${u.monoSm}">aria-labelledby</code> or implicit association</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>1.4.11</strong> Non-text Contrast</td>
            <td style="padding: 0.5rem 0.75rem;">3:1 for UI components</td>
            <td style="padding: 0.5rem 0.75rem;">Checkbox border meets 3.3:1 against surface background</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.4.7</strong> Focus Visible</td>
            <td style="padding: 0.5rem 0.75rem;">Visible focus indicator</td>
            <td style="padding: 0.5rem 0.75rem;">2px focus ring around checkbox indicator</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.4.11</strong> Focus Not Obscured <span style="background: rgba(34, 197, 94, 0.15); padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">2.2</span></td>
            <td style="padding: 0.5rem 0.75rem;">Focus indicator not hidden</td>
            <td style="padding: 0.5rem 0.75rem;">Focus ring never clipped by parent containers</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.4.13</strong> Focus Appearance <span style="background: rgba(34, 197, 94, 0.15); padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">2.2</span></td>
            <td style="padding: 0.5rem 0.75rem;">≥2px thick, 3:1 contrast</td>
            <td style="padding: 0.5rem 0.75rem;">#386CF7 focus ring: 4.4:1 vs white, 4.1:1 vs dark surface</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.5.8</strong> Target Size <span style="background: rgba(34, 197, 94, 0.15); padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">2.2</span></td>
            <td style="padding: 0.5rem 0.75rem;">≥24×24 CSS pixels</td>
            <td style="padding: 0.5rem 0.75rem;">Click target includes label; indicator ≥24px for all sizes</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>3.3.1</strong> Error Identification</td>
            <td style="padding: 0.5rem 0.75rem;">Errors described in text</td>
            <td style="padding: 0.5rem 0.75rem;">Error message with <code style="${u.monoSm}">role="alert"</code> for immediate announcement</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><strong>4.1.2</strong> Name, Role, Value</td>
            <td style="padding: 0.5rem 0.75rem;">Accessible name and state</td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${u.monoSm}">role="checkbox"</code> + <code style="${u.monoSm}">aria-checked</code> (true/false/mixed)</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${u.h3}">Screen Reader Behavior</h3>
      <ul style="${u.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, checked state, and "checkbox"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Indeterminate:</strong> Announces "mixed" or "partially checked"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="${u.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="${u.monoSm}">role="alert"</code></li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="${u.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${u.h3}">Keyboard Navigation</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; width: 140px;">Key</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the checkbox</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggle checkbox checked state</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},m={name:`Playground`,tags:[`!dev`],args:{label:`I agree to the terms`,checked:!1,indeterminate:!1,colorScheme:`primary`,size:`md`,state:`default`,readonly:!1,disabled:!1,error:!1,errorText:`This field is required`,required:!1,heading:``,helperText:``,fieldName:``,checkedValue:`on`,theme:`maximus`},decorators:[e=>n`
        <div
          style="
            min-height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          ${e()}
        </div>
      `],argTypes:{label:{name:`Label`,control:`text`,description:`Clickable text next to the checkbox indicator`,table:{category:`Core Interaction`}},checked:{name:`Checked`,control:`boolean`,description:`Whether the checkbox is selected`,table:{category:`Core Interaction`}},indeterminate:{name:`Indeterminate`,control:`boolean`,description:`Mixed state, typically used for "select all" when some children are checked`,table:{category:`Core Interaction`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Brand color applied to checked/indeterminate fill`,table:{category:`Visual`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Checkbox indicator and text size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`],description:`Interactive state preview (for documentation)`,table:{category:`Visual`}},readonly:{name:`Read-only`,control:`boolean`,description:`Prevents changes but remains focusable and visible`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction and dims appearance`,table:{category:`Visual`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and shows error message`,table:{category:`Validation`}},errorText:{name:`Error Text`,control:`text`,description:`Message displayed when error is true`,table:{category:`Validation`}},required:{name:`Required`,control:`boolean`,description:`Marks field as required for form validation`,table:{category:`Validation`}},heading:{name:`Heading`,control:`text`,description:`Optional title displayed above the checkbox`,table:{category:`Secondary Content`}},helperText:{name:`Helper Text`,control:`text`,description:`Supplementary guidance displayed below`,table:{category:`Secondary Content`}},fieldName:{name:`Field Name`,control:`text`,description:`Identifier used when submitting form data`,table:{category:`Form Integration`}},checkedValue:{name:`Checked Value`,control:`text`,description:`Value submitted to the form when checked`,table:{category:`Form Integration`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`default`],description:`Brand theme`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.checked&&r.push(`checked`),n.indeterminate&&r.push(`indeterminate`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.size!==`md`&&r.push(`size="${n.size}"`),n.readonly&&r.push(`readonly`),n.disabled&&r.push(`disabled`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.heading&&r.push(`heading="${n.heading}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.fieldName&&r.push(`field-name="${n.fieldName}"`),n.checkedValue!==`on`&&r.push(`checked-value="${n.checkedValue}"`),`<mms-checkbox\n  ${r.join(`
  `)}\n></mms-checkbox>`},language:`html`}}},render:e=>{let t=a(e.theme,e.colorScheme),r=o(e.theme,e.colorScheme);if(!t){let t=r===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,i=r===2?`Lacks step 10 (hover state). Use for branded text or badges, not checkboxes.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return n`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 440px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            <strong>${t}:</strong> ${i}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
            See <em>Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      `}return n`
      <mms-checkbox
        label=${e.label}
        ?checked=${e.checked}
        ?indeterminate=${e.indeterminate}
        color-scheme=${e.colorScheme}
        size=${e.size}
        state=${e.state}
        ?readonly=${e.readonly}
        ?disabled=${e.disabled}
        ?error=${e.error}
        error-text=${e.errorText}
        ?required=${e.required}
        heading=${e.heading}
        helper-text=${e.helperText}
        field-name=${e.fieldName}
        checked-value=${e.checkedValue}
      ></mms-checkbox>
    `}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Checkbox</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Checkboxes allow users to select one or more items from a set. They're commonly used in forms, settings, and filters.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- States -->
      <h2 style="\${t.h2}">Selection states</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Unchecked</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Default state. User has not selected this option.
          </p>
          <div style="margin-top: 1rem;"><mms-checkbox label="Unchecked option"></mms-checkbox></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Checked</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Selected state. User has chosen this option.
          </p>
          <div style="margin-top: 1rem;"><mms-checkbox label="Checked option" checked></mms-checkbox></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Indeterminate</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Mixed state. Used for "select all" when some children are checked.
          </p>
          <div style="margin-top: 1rem;"><mms-checkbox label="Some selected" indeterminate></mms-checkbox></div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="\${t.h2}">Color schemes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">color-scheme</code> prop controls which color palette the checkbox uses when checked.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Primary &amp; Secondary</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Brand colors defined by the active theme.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-checkbox color-scheme="primary" label="Primary" checked></mms-checkbox>
            <mms-checkbox color-scheme="secondary" label="Secondary" checked></mms-checkbox>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Accent &amp; Onyx</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            <strong>Accent</strong> is theme-specific highlight. <strong>Onyx</strong> is structural black.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-checkbox color-scheme="accent" label="Accent" checked></mms-checkbox>
            <mms-checkbox color-scheme="onyx" label="Onyx" checked></mms-checkbox>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Three sizes accommodate different contexts — compact forms, standard inputs, and prominent selections.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-checkbox size="sm" label="Small checkbox" checked></mms-checkbox>
        <mms-checkbox size="md" label="Medium checkbox (default)" checked></mms-checkbox>
        <mms-checkbox size="lg" label="Large checkbox" checked></mms-checkbox>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the checkbox.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox 
          label="Subscribe to newsletter" 
          helper-text="We'll send you weekly updates about new features."
        ></mms-checkbox>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Heading -->
      <h2 style="\${t.h2}">With heading</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        An optional heading can be displayed above the checkbox for field labels.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox 
          heading="Notification preferences"
          label="Send me email notifications" 
          helper-text="You can change this setting at any time."
        ></mms-checkbox>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Error state is used for validation feedback. The checkbox indicator and error message both use the error color.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-checkbox 
          label="I agree to the terms and conditions" 
          error
          error-text="You must accept the terms to continue."
          required
        ></mms-checkbox>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Indicator -->
      <h2 style="\${t.h2}">Required indicator</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        When <code style="\${t.monoSm}">required</code> is set, an asterisk appears on the highest-level label. If a heading is present, the asterisk shows there; otherwise it appears on the checkbox label.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">With heading</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Asterisk appears on the heading.
          </p>
          <mms-checkbox 
            heading="Terms agreement"
            label="I accept the terms" 
            required
          ></mms-checkbox>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Without heading</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Asterisk appears on the label.
          </p>
          <mms-checkbox 
            label="I accept the terms" 
            required
          ></mms-checkbox>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled & Readonly -->
      <h2 style="\${t.h2}">Disabled &amp; read-only</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Disabled</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents interaction and dims appearance.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-checkbox label="Disabled unchecked" disabled></mms-checkbox>
            <mms-checkbox label="Disabled checked" disabled checked></mms-checkbox>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Read-only</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents changes but remains visible and focusable.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-checkbox label="Read-only unchecked" readonly></mms-checkbox>
            <mms-checkbox label="Read-only checked" readonly checked></mms-checkbox>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Checkbox Only (no label) -->
      <h2 style="\${t.h2}">Checkbox only</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        When no label is provided, only the checkbox indicator is rendered. Useful for table rows or other constrained layouts.
      </p>

      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem;">
        <mms-checkbox></mms-checkbox>
        <mms-checkbox checked></mms-checkbox>
        <mms-checkbox indeterminate></mms-checkbox>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Criterion</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Requirement</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Implementation</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>1.3.1</strong> Info & Relationships</td>
            <td style="padding: 0.5rem 0.75rem;">Programmatic label association</td>
            <td style="padding: 0.5rem 0.75rem;">Label linked via <code style="\${t.monoSm}">aria-labelledby</code> or implicit association</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>1.4.11</strong> Non-text Contrast</td>
            <td style="padding: 0.5rem 0.75rem;">3:1 for UI components</td>
            <td style="padding: 0.5rem 0.75rem;">Checkbox border meets 3.3:1 against surface background</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.4.7</strong> Focus Visible</td>
            <td style="padding: 0.5rem 0.75rem;">Visible focus indicator</td>
            <td style="padding: 0.5rem 0.75rem;">2px focus ring around checkbox indicator</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.4.11</strong> Focus Not Obscured <span style="background: rgba(34, 197, 94, 0.15); padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">2.2</span></td>
            <td style="padding: 0.5rem 0.75rem;">Focus indicator not hidden</td>
            <td style="padding: 0.5rem 0.75rem;">Focus ring never clipped by parent containers</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.4.13</strong> Focus Appearance <span style="background: rgba(34, 197, 94, 0.15); padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">2.2</span></td>
            <td style="padding: 0.5rem 0.75rem;">≥2px thick, 3:1 contrast</td>
            <td style="padding: 0.5rem 0.75rem;">#386CF7 focus ring: 4.4:1 vs white, 4.1:1 vs dark surface</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>2.5.8</strong> Target Size <span style="background: rgba(34, 197, 94, 0.15); padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">2.2</span></td>
            <td style="padding: 0.5rem 0.75rem;">≥24×24 CSS pixels</td>
            <td style="padding: 0.5rem 0.75rem;">Click target includes label; indicator ≥24px for all sizes</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><strong>3.3.1</strong> Error Identification</td>
            <td style="padding: 0.5rem 0.75rem;">Errors described in text</td>
            <td style="padding: 0.5rem 0.75rem;">Error message with <code style="\${t.monoSm}">role="alert"</code> for immediate announcement</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><strong>4.1.2</strong> Name, Role, Value</td>
            <td style="padding: 0.5rem 0.75rem;">Accessible name and state</td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">role="checkbox"</code> + <code style="\${t.monoSm}">aria-checked</code> (true/false/mixed)</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, checked state, and "checkbox"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Indeterminate:</strong> Announces "mixed" or "partially checked"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="\${t.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="\${t.monoSm}">role="alert"</code></li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="\${t.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="\${t.h3}">Keyboard Navigation</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; width: 140px;">Key</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the checkbox</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggle checkbox checked state</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Core Interaction
    label: 'I agree to the terms',
    checked: false,
    indeterminate: false,
    // Visual
    colorScheme: 'primary',
    size: 'md',
    state: 'default',
    readonly: false,
    disabled: false,
    // Validation
    error: false,
    errorText: 'This field is required',
    required: false,
    // Secondary Content
    heading: '',
    helperText: '',
    // Form Integration
    fieldName: '',
    checkedValue: 'on',
    // Global Props
    theme: 'maximus'
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div
          style="
            min-height: 120px;
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
    // ── Core Interaction ──────────────────────────────────────
    label: {
      name: 'Label',
      control: 'text',
      description: 'Clickable text next to the checkbox indicator',
      table: {
        category: 'Core Interaction'
      }
    },
    checked: {
      name: 'Checked',
      control: 'boolean',
      description: 'Whether the checkbox is selected',
      table: {
        category: 'Core Interaction'
      }
    },
    indeterminate: {
      name: 'Indeterminate',
      control: 'boolean',
      description: 'Mixed state, typically used for "select all" when some children are checked',
      table: {
        category: 'Core Interaction'
      }
    },
    // ── Visual ────────────────────────────────────────────────
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Brand color applied to checked/indeterminate fill',
      table: {
        category: 'Visual'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Checkbox indicator and text size',
      table: {
        category: 'Visual'
      }
    },
    state: {
      name: 'State',
      control: 'select',
      options: ['default', 'hover', 'focus'],
      description: 'Interactive state preview (for documentation)',
      table: {
        category: 'Visual'
      }
    },
    readonly: {
      name: 'Read-only',
      control: 'boolean',
      description: 'Prevents changes but remains focusable and visible',
      table: {
        category: 'Visual'
      }
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Prevents interaction and dims appearance',
      table: {
        category: 'Visual'
      }
    },
    // ── Validation ────────────────────────────────────────────
    error: {
      name: 'Error',
      control: 'boolean',
      description: 'Displays error styling and shows error message',
      table: {
        category: 'Validation'
      }
    },
    errorText: {
      name: 'Error Text',
      control: 'text',
      description: 'Message displayed when error is true',
      table: {
        category: 'Validation'
      }
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks field as required for form validation',
      table: {
        category: 'Validation'
      }
    },
    // ── Secondary Content ─────────────────────────────────────
    heading: {
      name: 'Heading',
      control: 'text',
      description: 'Optional title displayed above the checkbox',
      table: {
        category: 'Secondary Content'
      }
    },
    helperText: {
      name: 'Helper Text',
      control: 'text',
      description: 'Supplementary guidance displayed below',
      table: {
        category: 'Secondary Content'
      }
    },
    // ── Form Integration ──────────────────────────────────────
    fieldName: {
      name: 'Field Name',
      control: 'text',
      description: 'Identifier used when submitting form data',
      table: {
        category: 'Form Integration'
      }
    },
    checkedValue: {
      name: 'Checked Value',
      control: 'text',
      description: 'Value submitted to the form when checked',
      table: {
        category: 'Form Integration'
      }
    },
    // ── Global Props ──────────────────────────────────────────
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
          const attrs: string[] = [];
          if (a.label) attrs.push(\`label="\${a.label}"\`);
          if (a.checked) attrs.push('checked');
          if (a.indeterminate) attrs.push('indeterminate');
          if (a.colorScheme !== 'primary') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.readonly) attrs.push('readonly');
          if (a.disabled) attrs.push('disabled');
          if (a.error) attrs.push('error');
          if (a.errorText && a.error) attrs.push(\`error-text="\${a.errorText}"\`);
          if (a.required) attrs.push('required');
          if (a.heading) attrs.push(\`heading="\${a.heading}"\`);
          if (a.helperText) attrs.push(\`helper-text="\${a.helperText}"\`);
          if (a.fieldName) attrs.push(\`field-name="\${a.fieldName}"\`);
          if (a.checkedValue !== 'on') attrs.push(\`checked-value="\${a.checkedValue}"\`);
          return \`<mms-checkbox\\n  \${attrs.join('\\n  ')}\\n></mms-checkbox>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    label: string;
    checked: boolean;
    indeterminate: boolean;
    colorScheme: string;
    size: string;
    state: string;
    readonly: boolean;
    disabled: boolean;
    error: boolean;
    errorText: string;
    required: boolean;
    heading: string;
    helperText: string;
    fieldName: string;
    checkedValue: string;
    theme: string;
  }) => {
    // Validate colorScheme × theme combination using shared config
    const valid = isValidColorScheme(args.theme as Theme, args.colorScheme as ColorScheme);
    const tier = getPaletteTier(args.theme as Theme, args.colorScheme as ColorScheme);
    if (!valid) {
      const tierLabel = tier === 2 ? 'Tier 2 (Text + Surface)' : 'Tier 3 (Decorative)';
      const tierReason = tier === 2 ? 'Lacks step 10 (hover state). Use for branded text or badges, not checkboxes.' : 'Lacks text contrast and hover states. Decorative backgrounds only.';
      return html\`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 440px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            <strong>\${tierLabel}:</strong> \${tierReason}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
            See <em>Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      \`;
    }
    return html\`
      <mms-checkbox
        label=\${args.label}
        ?checked=\${args.checked}
        ?indeterminate=\${args.indeterminate}
        color-scheme=\${args.colorScheme}
        size=\${args.size}
        state=\${args.state}
        ?readonly=\${args.readonly}
        ?disabled=\${args.disabled}
        ?error=\${args.error}
        error-text=\${args.errorText}
        ?required=\${args.required}
        heading=\${args.heading}
        helper-text=\${args.helperText}
        field-name=\${args.fieldName}
        checked-value=\${args.checkedValue}
      ></mms-checkbox>
    \`;
  }
}`,...m.parameters?.docs?.source}}},h=[`Overview`,`PlaygroundStory`]}));g();export{p as Overview,m as PlaygroundStory,h as __namedExportsOrder,l as default,g as n,c as t};