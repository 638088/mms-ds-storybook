import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{s as n,t as r}from"./lit-aQ4dERgF.js";import{n as i,r as a,t as o}from"./theme-constraints-D-yar-OC.js";import{a as s,o as c,r as l,t as u}from"./a11y-outcome-DlWsiEtn.js";import{t as d}from"./mms-radio.component-Ddmad0t8.js";var f=t({Overview:()=>_,PlaygroundStory:()=>v,__namedExportsOrder:()=>y,default:()=>p}),p,m,h,g,_,v,y,b=e((()=>{r(),d(),i(),s(),u(),p={title:`Forms/Radio`,tags:[`!autodocs`]},m={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},h=`680px`,g=`960px`,_={name:`Overview`,render:()=>n`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${g}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${m.h1}">Radio</h1>
      <p style="${m.body} opacity: 0.85; max-width: ${h}; margin-bottom: 2rem;">
        Radio buttons allow users to select exactly one option from a set. Use radios when the user needs to see all available options at once.
      </p>

      <!-- Usage note -->
      <div style="
        padding: 1rem 1.25rem;
        background: rgba(59, 130, 246, 0.08);
        border-left: 3px solid rgba(59, 130, 246, 0.5);
        border-radius: 0 6px 6px 0;
        margin-bottom: 2rem;
      ">
        <p style="${m.bodySm} margin: 0;">
          <strong>Usage:</strong> Radio buttons should be used within <code style="${m.monoSm}">&lt;mms-radio-group&gt;</code> which handles single-selection behavior and arrow key navigation. This page documents individual radio button props.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- States -->
      <h2 style="${m.h2}">Selection states</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${m.h3}">Unselected</p>
          <p style="${m.bodySm} opacity: 0.85; flex: 1;">
            Default state. This option is not currently active.
          </p>
          <div style="margin-top: 1rem;"><mms-radio label="Unselected option"></mms-radio></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${m.h3}">Selected</p>
          <p style="${m.bodySm} opacity: 0.85; flex: 1;">
            Active state. User has chosen this option from the group.
          </p>
          <div style="margin-top: 1rem;"><mms-radio label="Selected option" selected></mms-radio></div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="${m.h2}">Color schemes</h2>
      <p style="${m.bodySm} opacity: 0.85; max-width: ${h}; margin-bottom: 1.5rem;">
        The <code style="${m.monoSm}">color-scheme</code> prop controls which color palette the radio uses when selected.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${m.h3}">Primary &amp; Secondary</p>
          <p style="${m.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Brand colors defined by the active theme.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-radio color-scheme="primary" label="Primary" selected></mms-radio>
            <mms-radio color-scheme="secondary" label="Secondary" selected></mms-radio>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${m.h3}">Accent &amp; Onyx</p>
          <p style="${m.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            <strong>Accent</strong> is theme-specific highlight. <strong>Onyx</strong> is structural black.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-radio color-scheme="accent" label="Accent" selected></mms-radio>
            <mms-radio color-scheme="onyx" label="Onyx" selected></mms-radio>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="${m.h2}">Sizes</h2>
      <p style="${m.bodySm} opacity: 0.85; max-width: ${h}; margin-bottom: 1.5rem;">
        Three sizes accommodate different contexts — compact forms, standard inputs, and prominent selections.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-radio size="sm" label="Small radio" selected></mms-radio>
        <mms-radio size="md" label="Medium radio (default)" selected></mms-radio>
        <mms-radio size="lg" label="Large radio" selected></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="${m.h2}">With helper text</h2>
      <p style="${m.bodySm} opacity: 0.85; max-width: ${h}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the radio.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio 
          label="Standard shipping" 
          helper-text="Arrives in 5-7 business days."
        ></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Heading -->
      <h2 style="${m.h2}">With heading</h2>
      <p style="${m.bodySm} opacity: 0.85; max-width: ${h}; margin-bottom: 1.5rem;">
        An optional heading can be displayed above the radio for field labels.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio 
          heading="Shipping method"
          label="Express shipping" 
          helper-text="Arrives in 1-2 business days."
        ></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="${m.h2}">Error state</h2>
      <p style="${m.bodySm} opacity: 0.85; max-width: ${h}; margin-bottom: 1.5rem;">
        Error state is used for validation feedback. The radio indicator and error message both use the error color.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio 
          label="Option A" 
          error
          error-text="Please select an option."
          required
        ></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Indicator -->
      <h2 style="${m.h2}">Required indicator</h2>
      <p style="${m.bodySm} opacity: 0.85; max-width: ${h}; margin-bottom: 1.5rem;">
        When <code style="${m.monoSm}">required</code> is set, an asterisk appears on the highest-level label. If a heading is present, the asterisk shows there; otherwise it appears on the radio label.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${m.h3}">With heading</p>
          <p style="${m.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Asterisk appears on the heading.
          </p>
          <mms-radio 
            heading="Payment method"
            label="Credit card" 
            required
          ></mms-radio>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${m.h3}">Without heading</p>
          <p style="${m.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Asterisk appears on the label.
          </p>
          <mms-radio 
            label="Credit card" 
            required
          ></mms-radio>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled & Readonly -->
      <h2 style="${m.h2}">Disabled &amp; read-only</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${m.h3}">Disabled</p>
          <p style="${m.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents interaction and dims appearance.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-radio label="Disabled unselected" disabled></mms-radio>
            <mms-radio label="Disabled selected" disabled selected></mms-radio>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${m.h3}">Read-only</p>
          <p style="${m.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents changes but remains visible and focusable.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-radio label="Read-only unselected" readonly></mms-radio>
            <mms-radio label="Read-only selected" readonly selected></mms-radio>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Radio Only (no label) -->
      <h2 style="${m.h2}">Radio only</h2>
      <p style="${m.bodySm} opacity: 0.85; max-width: ${h}; margin-bottom: 1.5rem;">
        When no label is provided, only the radio indicator is rendered. Useful for table rows or other constrained layouts.
      </p>

      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem;">
        <mms-radio></mms-radio>
        <mms-radio selected></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${m.h2}">Accessibility</h2>

      <h3 style="${m.h3}">WCAG 2.2 AA Compliance</h3>
      ${l(c.radio.rows)}

      <h3 style="${m.h3}">Screen Reader Behavior</h3>
      <ul style="${m.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, selected state, and "radio button"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Group context:</strong> When inside <code style="${m.monoSm}">mms-radio-group</code>, announces position (e.g., "1 of 3")</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="${m.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="${m.monoSm}">role="alert"</code></li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="${m.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${m.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to/from the radio group (single tab stop per group)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move selection to previous/next radio in group</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Select focused radio (if not already selected)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},v={name:`Playground`,tags:[`!dev`],args:{label:`Option A`,selected:!1,value:`option-a`,colorScheme:`primary`,size:`md`,state:`default`,readonly:!1,disabled:!1,error:!1,errorText:`Please select an option`,required:!1,heading:``,helperText:``,fieldName:``,theme:`maximus`},decorators:[e=>n`
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
      `],argTypes:{label:{name:`Label`,control:`text`,description:`Clickable text next to the radio indicator`,table:{category:`Core Interaction`}},selected:{name:`Selected`,control:`boolean`,description:`Whether this radio is the active selection`,table:{category:`Core Interaction`}},value:{name:`Value`,control:`text`,description:`Value submitted when selected (for form integration)`,table:{category:`Core Interaction`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Brand color applied to selected fill`,table:{category:`Visual`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Radio indicator and text size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`],description:`Interactive state preview (for documentation)`,table:{category:`Visual`}},readonly:{name:`Read-only`,control:`boolean`,description:`Prevents changes but remains focusable and visible`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction and dims appearance`,table:{category:`Visual`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and shows error message`,table:{category:`Validation`}},errorText:{name:`Error Text`,control:`text`,description:`Message displayed when error is true`,table:{category:`Validation`}},required:{name:`Required`,control:`boolean`,description:`Marks field as required for form validation`,table:{category:`Validation`}},heading:{name:`Heading`,control:`text`,description:`Optional title displayed above the radio`,table:{category:`Secondary Content`}},helperText:{name:`Helper Text`,control:`text`,description:`Supplementary guidance displayed below`,table:{category:`Secondary Content`}},fieldName:{name:`Field Name`,control:`text`,description:`Identifier used when submitting form data`,table:{category:`Form Integration`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`uss-oh-dvs`,`default`],description:`Brand theme`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.selected&&r.push(`selected`),n.value&&r.push(`value="${n.value}"`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.size!==`md`&&r.push(`size="${n.size}"`),n.readonly&&r.push(`readonly`),n.disabled&&r.push(`disabled`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.heading&&r.push(`heading="${n.heading}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.fieldName&&r.push(`field-name="${n.fieldName}"`),`<mms-radio\n  ${r.join(`
  `)}\n></mms-radio>`},language:`html`}}},render:e=>{let t=a(e.theme,e.colorScheme),r=o(e.theme,e.colorScheme);if(!t){let t=r===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,i=r===2?`Lacks step 10 (hover state). Use for branded text or badges, not radios.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return n`
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
      <mms-radio
        label=${e.label}
        ?selected=${e.selected}
        value=${e.value}
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
      ></mms-radio>
    `}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Radio</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Radio buttons allow users to select exactly one option from a set. Use radios when the user needs to see all available options at once.
      </p>

      <!-- Usage note -->
      <div style="
        padding: 1rem 1.25rem;
        background: rgba(59, 130, 246, 0.08);
        border-left: 3px solid rgba(59, 130, 246, 0.5);
        border-radius: 0 6px 6px 0;
        margin-bottom: 2rem;
      ">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Usage:</strong> Radio buttons should be used within <code style="\${t.monoSm}">&lt;mms-radio-group&gt;</code> which handles single-selection behavior and arrow key navigation. This page documents individual radio button props.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- States -->
      <h2 style="\${t.h2}">Selection states</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Unselected</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Default state. This option is not currently active.
          </p>
          <div style="margin-top: 1rem;"><mms-radio label="Unselected option"></mms-radio></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Selected</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Active state. User has chosen this option from the group.
          </p>
          <div style="margin-top: 1rem;"><mms-radio label="Selected option" selected></mms-radio></div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="\${t.h2}">Color schemes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">color-scheme</code> prop controls which color palette the radio uses when selected.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Primary &amp; Secondary</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Brand colors defined by the active theme.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-radio color-scheme="primary" label="Primary" selected></mms-radio>
            <mms-radio color-scheme="secondary" label="Secondary" selected></mms-radio>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Accent &amp; Onyx</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            <strong>Accent</strong> is theme-specific highlight. <strong>Onyx</strong> is structural black.
          </p>
          <div style="display: flex; gap: 1.5rem;">
            <mms-radio color-scheme="accent" label="Accent" selected></mms-radio>
            <mms-radio color-scheme="onyx" label="Onyx" selected></mms-radio>
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
        <mms-radio size="sm" label="Small radio" selected></mms-radio>
        <mms-radio size="md" label="Medium radio (default)" selected></mms-radio>
        <mms-radio size="lg" label="Large radio" selected></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the radio.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio 
          label="Standard shipping" 
          helper-text="Arrives in 5-7 business days."
        ></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Heading -->
      <h2 style="\${t.h2}">With heading</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        An optional heading can be displayed above the radio for field labels.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio 
          heading="Shipping method"
          label="Express shipping" 
          helper-text="Arrives in 1-2 business days."
        ></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Error state is used for validation feedback. The radio indicator and error message both use the error color.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-radio 
          label="Option A" 
          error
          error-text="Please select an option."
          required
        ></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Indicator -->
      <h2 style="\${t.h2}">Required indicator</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        When <code style="\${t.monoSm}">required</code> is set, an asterisk appears on the highest-level label. If a heading is present, the asterisk shows there; otherwise it appears on the radio label.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">With heading</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Asterisk appears on the heading.
          </p>
          <mms-radio 
            heading="Payment method"
            label="Credit card" 
            required
          ></mms-radio>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Without heading</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Asterisk appears on the label.
          </p>
          <mms-radio 
            label="Credit card" 
            required
          ></mms-radio>
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
            <mms-radio label="Disabled unselected" disabled></mms-radio>
            <mms-radio label="Disabled selected" disabled selected></mms-radio>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Read-only</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Prevents changes but remains visible and focusable.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <mms-radio label="Read-only unselected" readonly></mms-radio>
            <mms-radio label="Read-only selected" readonly selected></mms-radio>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Radio Only (no label) -->
      <h2 style="\${t.h2}">Radio only</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        When no label is provided, only the radio indicator is rendered. Useful for table rows or other constrained layouts.
      </p>

      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem;">
        <mms-radio></mms-radio>
        <mms-radio selected></mms-radio>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['radio'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, selected state, and "radio button"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Group context:</strong> When inside <code style="\${t.monoSm}">mms-radio-group</code>, announces position (e.g., "1 of 3")</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to/from the radio group (single tab stop per group)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move selection to previous/next radio in group</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Select focused radio (if not already selected)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Core Interaction
    label: 'Option A',
    selected: false,
    value: 'option-a',
    // Visual
    colorScheme: 'primary',
    size: 'md',
    state: 'default',
    readonly: false,
    disabled: false,
    // Validation
    error: false,
    errorText: 'Please select an option',
    required: false,
    // Secondary Content
    heading: '',
    helperText: '',
    // Form Integration
    fieldName: '',
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
      description: 'Clickable text next to the radio indicator',
      table: {
        category: 'Core Interaction'
      }
    },
    selected: {
      name: 'Selected',
      control: 'boolean',
      description: 'Whether this radio is the active selection',
      table: {
        category: 'Core Interaction'
      }
    },
    value: {
      name: 'Value',
      control: 'text',
      description: 'Value submitted when selected (for form integration)',
      table: {
        category: 'Core Interaction'
      }
    },
    // ── Visual ────────────────────────────────────────────────
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Brand color applied to selected fill',
      table: {
        category: 'Visual'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Radio indicator and text size',
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
      description: 'Optional title displayed above the radio',
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
    // ── Global Props ──────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'va-gov', 'uss-oh-dvs', 'default'],
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
          if (a.selected) attrs.push('selected');
          if (a.value) attrs.push(\`value="\${a.value}"\`);
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
          return \`<mms-radio\\n  \${attrs.join('\\n  ')}\\n></mms-radio>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    label: string;
    selected: boolean;
    value: string;
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
    theme: string;
  }) => {
    // Validate colorScheme × theme combination using shared config
    const valid = isValidColorScheme(args.theme as Theme, args.colorScheme as ColorScheme);
    const tier = getPaletteTier(args.theme as Theme, args.colorScheme as ColorScheme);
    if (!valid) {
      const tierLabel = tier === 2 ? 'Tier 2 (Text + Surface)' : 'Tier 3 (Decorative)';
      const tierReason = tier === 2 ? 'Lacks step 10 (hover state). Use for branded text or badges, not radios.' : 'Lacks text contrast and hover states. Decorative backgrounds only.';
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
      <mms-radio
        label=\${args.label}
        ?selected=\${args.selected}
        value=\${args.value}
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
      ></mms-radio>
    \`;
  }
}`,...v.parameters?.docs?.source}}},y=[`Overview`,`PlaygroundStory`]}));b();export{_ as Overview,v as PlaygroundStory,y as __namedExportsOrder,p as default,b as n,f as t};