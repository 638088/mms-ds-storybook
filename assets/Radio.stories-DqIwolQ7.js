import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{s as n,t as r}from"./lit-B0BZwaT1.js";import{n as i,r as a}from"./iframe-C49srKsk.js";import{t as o}from"./mms-card.component-Ae9XIj4r.js";import{i as s,n as c,r as l}from"./theme-constraints-BjFqvFCo.js";import{n as u,r as d}from"./wcag-coverage-DNhlI7v1.js";import{a as f,c as p,d as m,i as h,n as g,o as _,r as v,u as y}from"./doc-styles-DkvR_Qyb.js";import{a as b,n as x}from"./a11y-outcome-Baw4sLAQ.js";import{t as S}from"./mms-radio.component-Bnt13DUs.js";var C=t({Overview:()=>T,PlaygroundStory:()=>E,__namedExportsOrder:()=>D,default:()=>w}),w,T,E,D,O=e((()=>{r(),a(),S(),o(),l(),u(),x(),p(),w={title:`Forms/Radio`,tags:[`!autodocs`]},T={name:`Overview`,render:()=>n`
    <div data-theme=${v} data-mode=${_()} style=${g}>

      <!-- Header -->
      <h1 style="${m.h1}">Radio</h1>
      <p style="${m.body} ${f.muted} max-width: ${h}; margin-bottom: ${y.subsection};">
        Radio buttons allow users to select exactly one option from a set. Use radios when the user needs to see all available options at once.
      </p>

      <!-- Usage note -->
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${y.subsection};">
        <div slot="body-content">
          <p style="${m.bodySm}">
            <strong>Usage:</strong> Radio buttons should be used within <code style="${m.monoSm}">&lt;mms-radio-group&gt;</code> which handles single-selection behavior and arrow key navigation. This page documents individual radio button props.
          </p>
        </div>
      </mms-card>

      <hr style="${f.divider}" />

      <!-- States -->
      <h2 style="${m.h2}">Selection states</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: ${y.content}; margin-bottom: ${y.subsection};">
        <div style="${f.panel} display: flex; flex-direction: column;">
          <h3 style="${m.h3}">Unselected</h3>
          <p style="${m.bodySm} ${f.muted} flex: 1;">
            Default state. This option is not currently active.
          </p>
          <div style="margin-top: ${y.content};"><mms-radio label="Unselected option"></mms-radio></div>
        </div>
        <div style="${f.panel} display: flex; flex-direction: column;">
          <h3 style="${m.h3}">Selected</h3>
          <p style="${m.bodySm} ${f.muted} flex: 1;">
            Active state. User has chosen this option from the group.
          </p>
          <div style="margin-top: ${y.content};"><mms-radio label="Selected option" selected></mms-radio></div>
        </div>
      </div>

      <hr style="${f.divider}" />

      <!-- Color Schemes -->
      <h2 style="${m.h2}">Color schemes</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.content};">
        The <code style="${m.monoSm}">color-scheme</code> prop controls which color palette the radio uses when selected.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: ${y.content}; margin-bottom: ${y.subsection};">
        <div style="${f.panel}">
          <h3 style="${m.h3}">Primary &amp; secondary</h3>
          <p style="${m.bodySm} ${f.muted} margin-bottom: ${y.content};">
            Brand colors defined by the active theme.
          </p>
          <div style="display: flex; gap: ${y.content};">
            <mms-radio color-scheme="primary" label="Primary" selected></mms-radio>
            <mms-radio color-scheme="secondary" label="Secondary" selected></mms-radio>
          </div>
        </div>
        <div style="${f.panel}">
          <h3 style="${m.h3}">Accent &amp; onyx</h3>
          <p style="${m.bodySm} ${f.muted} margin-bottom: ${y.content};">
            <strong>Accent</strong> is theme-specific highlight. <strong>Onyx</strong> is structural black.
          </p>
          <div style="display: flex; gap: ${y.content};">
            <mms-radio color-scheme="accent" label="Accent" selected></mms-radio>
            <mms-radio color-scheme="onyx" label="Onyx" selected></mms-radio>
          </div>
        </div>
      </div>

      <hr style="${f.divider}" />

      <!-- Sizes -->
      <h2 style="${m.h2}">Sizes</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.subsection};">
        Three sizes accommodate different contexts — compact forms, standard inputs, and prominent selections.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${y.content}; margin-bottom: ${y.subsection};">
        <mms-radio size="sm" label="Small radio" selected></mms-radio>
        <mms-radio size="md" label="Medium radio (default)" selected></mms-radio>
        <mms-radio size="lg" label="Large radio" selected></mms-radio>
      </div>

      <hr style="${f.divider}" />

      <!-- With Helper Text -->
      <h2 style="${m.h2}">With helper text</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.subsection};">
        Helper text provides additional guidance below the radio.
      </p>

      <div style="margin-bottom: ${y.subsection};">
        <mms-radio 
          label="Standard shipping" 
          helper-text="Arrives in 5-7 business days."
        ></mms-radio>
      </div>

      <hr style="${f.divider}" />

      <!-- With Heading -->
      <h2 style="${m.h2}">With heading</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.subsection};">
        An optional heading can be displayed above the radio for field labels.
      </p>

      <div style="margin-bottom: ${y.subsection};">
        <mms-radio 
          heading="Shipping method"
          label="Express shipping" 
          helper-text="Arrives in 1-2 business days."
        ></mms-radio>
      </div>

      <hr style="${f.divider}" />

      <!-- Error State -->
      <h2 style="${m.h2}">Error state</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.subsection};">
        Error state is used for validation feedback. The radio indicator and error message both use the error color.
      </p>

      <div style="margin-bottom: ${y.subsection};">
        <mms-radio 
          label="Option A" 
          error
          error-text="Please select an option."
          required
        ></mms-radio>
      </div>

      <hr style="${f.divider}" />

      <!-- Required Indicator -->
      <h2 style="${m.h2}">Required indicator</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.content};">
        When <code style="${m.monoSm}">required</code> is set, an asterisk appears on the highest-level label. If a heading is present, the asterisk shows there; otherwise it appears on the radio label.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: ${y.content}; margin-bottom: ${y.subsection};">
        <div style="${f.panel}">
          <h3 style="${m.h3}">With heading</h3>
          <p style="${m.bodySm} ${f.muted} margin-bottom: ${y.content};">
            Asterisk appears on the heading.
          </p>
          <mms-radio 
            heading="Payment method"
            label="Credit card" 
            required
          ></mms-radio>
        </div>
        <div style="${f.panel}">
          <h3 style="${m.h3}">Without heading</h3>
          <p style="${m.bodySm} ${f.muted} margin-bottom: ${y.content};">
            Asterisk appears on the label.
          </p>
          <mms-radio 
            label="Credit card" 
            required
          ></mms-radio>
        </div>
      </div>

      <hr style="${f.divider}" />

      <!-- Disabled & Readonly -->
      <h2 style="${m.h2}">Disabled &amp; read-only</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: ${y.content}; margin-bottom: ${y.subsection};">
        <div style="${f.panel}">
          <h3 style="${m.h3}">Disabled</h3>
          <p style="${m.bodySm} ${f.muted} margin-bottom: ${y.content};">
            Prevents interaction and dims appearance.
          </p>
          <div style="display: flex; flex-direction: column; gap: ${y.content};">
            <mms-radio label="Disabled unselected" disabled></mms-radio>
            <mms-radio label="Disabled selected" disabled selected></mms-radio>
          </div>
        </div>
        <div style="${f.panel}">
          <h3 style="${m.h3}">Read-only</h3>
          <p style="${m.bodySm} ${f.muted} margin-bottom: ${y.content};">
            Prevents changes but remains visible and focusable.
          </p>
          <div style="display: flex; flex-direction: column; gap: ${y.content};">
            <mms-radio label="Read-only unselected" readonly></mms-radio>
            <mms-radio label="Read-only selected" readonly selected></mms-radio>
          </div>
        </div>
      </div>

      <hr style="${f.divider}" />

      <!-- Radio Only (no label) -->
      <h2 style="${m.h2}">Radio only</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.subsection};">
        When no label is provided, only the radio indicator is rendered. Useful for table rows or other constrained layouts.
      </p>

      <div style="display: flex; gap: ${y.content}; align-items: center; margin-bottom: ${y.subsection};">
        <mms-radio></mms-radio>
        <mms-radio selected></mms-radio>
      </div>

      <hr style="${f.divider}" />

      <!-- Accessibility -->
      <h2 style="${m.h2}">Accessibility</h2>

      <h3 style="${m.h3}">WCAG 2.2 AA compliance</h3>
      ${b(d.radio.rows)}

      <h3 style="${m.h3}">Screen reader behavior</h3>
      <ul style="${m.bodySm} ${f.muted} margin: 0 0 ${y.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${y.label};"><strong>Focus:</strong> Announces label, selected state, and "radio button"</li>
        <li style="margin-bottom: ${y.label};"><strong>Group context:</strong> When inside <code style="${m.monoSm}">mms-radio-group</code>, announces position (e.g., "1 of 3")</li>
        <li style="margin-bottom: ${y.label};"><strong>Required:</strong> Announces "required" when <code style="${m.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: ${y.label};"><strong>Error:</strong> Immediately announces error message via <code style="${m.monoSm}">role="alert"</code></li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="${m.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${m.h3}">Keyboard navigation</h3>
      <table style="${f.table} margin-bottom: ${y.subsection};">
        <thead>
          <tr>
            <th style="${f.th} width: 140px;">Key</th>
            <th style="${f.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${f.td}"><kbd style="${f.kbd}">Tab</kbd></td>
            <td style="${f.td}">Move focus to/from the radio group (single tab stop per group)</td>
          </tr>
          <tr>
            <td style="${f.td}"><kbd style="${f.kbd}">↑</kbd> <kbd style="${f.kbd}">↓</kbd></td>
            <td style="${f.td}">Move selection to previous/next radio in group</td>
          </tr>
          <tr>
            <td style="${f.td}"><kbd style="${f.kbd}">Space</kbd></td>
            <td style="${f.td}">Select focused radio (if not already selected)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},E={name:`Playground`,tags:[`!dev`],args:{label:`Option A`,selected:!1,value:`option-a`,colorScheme:`primary`,size:`md`,state:`default`,readonly:!1,disabled:!1,error:!1,errorText:`Please select an option`,required:!1,heading:``,helperText:``,name:``,theme:`maximus`},decorators:[e=>n`
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
      `],argTypes:{label:{name:`Label`,control:`text`,description:`Clickable text next to the radio indicator`,table:{category:`Core Interaction`}},selected:{name:`Selected`,control:`boolean`,description:`Whether this radio is the active selection`,table:{category:`Core Interaction`}},value:{name:`Value`,control:`text`,description:`Value submitted when selected (for form integration)`,table:{category:`Core Interaction`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Brand color applied to selected fill`,table:{category:`Visual`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Radio indicator and text size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`],description:`Interactive state preview (for documentation)`,table:{category:`Visual`}},readonly:{name:`Read-only`,control:`boolean`,description:`Prevents changes but remains focusable and visible`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction and dims appearance`,table:{category:`Visual`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and shows error message`,table:{category:`Validation`}},errorText:{name:`Error Text`,control:`text`,description:`Message displayed when error is true`,table:{category:`Validation`}},required:{name:`Required`,control:`boolean`,description:`Marks field as required for form validation`,table:{category:`Validation`}},heading:{name:`Heading`,control:`text`,description:`Optional title displayed above the radio`,table:{category:`Secondary Content`}},helperText:{name:`Helper Text`,control:`text`,description:`Supplementary guidance displayed below`,table:{category:`Secondary Content`}},name:{name:`Name`,control:`text`,description:"Name of the radio group this radio belongs to. The older `field-name` attribute still works but is deprecated since 1.0.0.",table:{category:`Form Integration`}},theme:{name:`Theme`,control:`select`,options:i,description:`Brand theme`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.selected&&r.push(`selected`),n.value&&r.push(`value="${n.value}"`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.size!==`md`&&r.push(`size="${n.size}"`),n.readonly&&r.push(`readonly`),n.disabled&&r.push(`disabled`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.heading&&r.push(`heading="${n.heading}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.name&&r.push(`name="${n.name}"`),`<mms-radio\n  ${r.join(`
  `)}\n></mms-radio>`},language:`html`}}},render:e=>{let t=s(e.theme,e.colorScheme),r=c(e.theme,e.colorScheme);if(!t){let t=r===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,i=r===2?`Lacks step 10 (hover state). Use for branded text or badges, not radios.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return n`
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
          <strong style="display: block; margin-bottom: 0.5rem; color: #991b1b !important;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
            <strong style="color: #991b1b !important;">${t}:</strong> ${i}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7; color: #991b1b !important;">
            See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
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
        name=${e.name}
      ></mms-radio>
    `}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Radio</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Radio buttons allow users to select exactly one option from a set. Use radios when the user needs to see all available options at once.
      </p>

      <!-- Usage note -->
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <p style="\${t.bodySm}">
            <strong>Usage:</strong> Radio buttons should be used within <code style="\${t.monoSm}">&lt;mms-radio-group&gt;</code> which handles single-selection behavior and arrow key navigation. This page documents individual radio button props.
          </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- States -->
      <h2 style="\${t.h2}">Selection states</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel} display: flex; flex-direction: column;">
          <h3 style="\${t.h3}">Unselected</h3>
          <p style="\${t.bodySm} \${doc.muted} flex: 1;">
            Default state. This option is not currently active.
          </p>
          <div style="margin-top: \${space.content};"><mms-radio label="Unselected option"></mms-radio></div>
        </div>
        <div style="\${doc.panel} display: flex; flex-direction: column;">
          <h3 style="\${t.h3}">Selected</h3>
          <p style="\${t.bodySm} \${doc.muted} flex: 1;">
            Active state. User has chosen this option from the group.
          </p>
          <div style="margin-top: \${space.content};"><mms-radio label="Selected option" selected></mms-radio></div>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Color Schemes -->
      <h2 style="\${t.h2}">Color schemes</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The <code style="\${t.monoSm}">color-scheme</code> prop controls which color palette the radio uses when selected.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Primary &amp; secondary</h3>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            Brand colors defined by the active theme.
          </p>
          <div style="display: flex; gap: \${space.content};">
            <mms-radio color-scheme="primary" label="Primary" selected></mms-radio>
            <mms-radio color-scheme="secondary" label="Secondary" selected></mms-radio>
          </div>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Accent &amp; onyx</h3>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            <strong>Accent</strong> is theme-specific highlight. <strong>Onyx</strong> is structural black.
          </p>
          <div style="display: flex; gap: \${space.content};">
            <mms-radio color-scheme="accent" label="Accent" selected></mms-radio>
            <mms-radio color-scheme="onyx" label="Onyx" selected></mms-radio>
          </div>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Three sizes accommodate different contexts — compact forms, standard inputs, and prominent selections.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-radio size="sm" label="Small radio" selected></mms-radio>
        <mms-radio size="md" label="Medium radio (default)" selected></mms-radio>
        <mms-radio size="lg" label="Large radio" selected></mms-radio>
      </div>

      <hr style="\${doc.divider}" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Helper text provides additional guidance below the radio.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-radio 
          label="Standard shipping" 
          helper-text="Arrives in 5-7 business days."
        ></mms-radio>
      </div>

      <hr style="\${doc.divider}" />

      <!-- With Heading -->
      <h2 style="\${t.h2}">With heading</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        An optional heading can be displayed above the radio for field labels.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-radio 
          heading="Shipping method"
          label="Express shipping" 
          helper-text="Arrives in 1-2 business days."
        ></mms-radio>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Error state is used for validation feedback. The radio indicator and error message both use the error color.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-radio 
          label="Option A" 
          error
          error-text="Please select an option."
          required
        ></mms-radio>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Required Indicator -->
      <h2 style="\${t.h2}">Required indicator</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        When <code style="\${t.monoSm}">required</code> is set, an asterisk appears on the highest-level label. If a heading is present, the asterisk shows there; otherwise it appears on the radio label.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">With heading</h3>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            Asterisk appears on the heading.
          </p>
          <mms-radio 
            heading="Payment method"
            label="Credit card" 
            required
          ></mms-radio>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Without heading</h3>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            Asterisk appears on the label.
          </p>
          <mms-radio 
            label="Credit card" 
            required
          ></mms-radio>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Disabled & Readonly -->
      <h2 style="\${t.h2}">Disabled &amp; read-only</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Disabled</h3>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            Prevents interaction and dims appearance.
          </p>
          <div style="display: flex; flex-direction: column; gap: \${space.content};">
            <mms-radio label="Disabled unselected" disabled></mms-radio>
            <mms-radio label="Disabled selected" disabled selected></mms-radio>
          </div>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Read-only</h3>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            Prevents changes but remains visible and focusable.
          </p>
          <div style="display: flex; flex-direction: column; gap: \${space.content};">
            <mms-radio label="Read-only unselected" readonly></mms-radio>
            <mms-radio label="Read-only selected" readonly selected></mms-radio>
          </div>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Radio Only (no label) -->
      <h2 style="\${t.h2}">Radio only</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        When no label is provided, only the radio indicator is rendered. Useful for table rows or other constrained layouts.
      </p>

      <div style="display: flex; gap: \${space.content}; align-items: center; margin-bottom: \${space.subsection};">
        <mms-radio></mms-radio>
        <mms-radio selected></mms-radio>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['radio'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Focus:</strong> Announces label, selected state, and "radio button"</li>
        <li style="margin-bottom: \${space.label};"><strong>Group context:</strong> When inside <code style="\${t.monoSm}">mms-radio-group</code>, announces position (e.g., "1 of 3")</li>
        <li style="margin-bottom: \${space.label};"><strong>Required:</strong> Announces "required" when <code style="\${t.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: \${space.label};"><strong>Error:</strong> Immediately announces error message via <code style="\${t.monoSm}">role="alert"</code></li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="\${t.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th} width: 140px;">Key</th>
            <th style="\${doc.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Tab</kbd></td>
            <td style="\${doc.td}">Move focus to/from the radio group (single tab stop per group)</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">↑</kbd> <kbd style="\${doc.kbd}">↓</kbd></td>
            <td style="\${doc.td}">Move selection to previous/next radio in group</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Space</kbd></td>
            <td style="\${doc.td}">Select focused radio (if not already selected)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    name: '',
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
    name: {
      name: 'Name',
      control: 'text',
      description: 'Name of the radio group this radio belongs to. The older \`field-name\` attribute still works but is deprecated since 1.0.0.',
      table: {
        category: 'Form Integration'
      }
    },
    // ── Global Props ──────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: BRAND_ORDER,
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
          if (a.name) attrs.push(\`name="\${a.name}"\`);
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
    name: string;
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
          <strong style="display: block; margin-bottom: 0.5rem; color: #991b1b !important;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
            <strong style="color: #991b1b !important;">\${tierLabel}:</strong> \${tierReason}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7; color: #991b1b !important;">
            See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
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
        name=\${args.name}
      ></mms-radio>
    \`;
  }
}`,...E.parameters?.docs?.source}}},D=[`Overview`,`PlaygroundStory`]}));O();export{T as Overview,E as PlaygroundStory,D as __namedExportsOrder,w as default,O as n,C as t};