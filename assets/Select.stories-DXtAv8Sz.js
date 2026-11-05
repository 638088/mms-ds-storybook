import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{n as a,r as o}from"./iframe-CcinUa1O.js";import{n as s,r as c}from"./wcag-coverage-DNhlI7v1.js";import{t as l}from"./mms-inline-alert.component-DL_QIcV8.js";import{a as u,c as d,d as f,i as p,n as m,o as h,r as g,u as _}from"./doc-styles-DkvR_Qyb.js";import{a as v,n as y}from"./a11y-outcome-B57XZvCQ.js";import{t as b}from"./mms-select.component-CO4YBVrq.js";var x=t({OptionLanguage:()=>T,Overview:()=>w,PlaygroundStory:()=>E,__namedExportsOrder:()=>D,default:()=>S}),S,C,w,T,E,D,O=e((()=>{i(),o(),b(),l(),s(),y(),d(),S={title:`Forms/Select`,tags:[`!autodocs`]},C=[{value:`al`,label:`Alabama`},{value:`ak`,label:`Alaska`},{value:`az`,label:`Arizona`},{value:`ar`,label:`Arkansas`},{value:`ca`,label:`California`},{value:`co`,label:`Colorado`},{value:`ct`,label:`Connecticut`},{value:`de`,label:`Delaware`},{value:`dc`,label:`District of Columbia`},{value:`fl`,label:`Florida`},{value:`ga`,label:`Georgia`},{value:`hi`,label:`Hawaii`},{value:`id`,label:`Idaho`},{value:`il`,label:`Illinois`},{value:`in`,label:`Indiana`},{value:`ia`,label:`Iowa`},{value:`ks`,label:`Kansas`},{value:`ky`,label:`Kentucky`},{value:`la`,label:`Louisiana`},{value:`me`,label:`Maine`},{value:`md`,label:`Maryland`},{value:`ma`,label:`Massachusetts`},{value:`mi`,label:`Michigan`},{value:`mn`,label:`Minnesota`},{value:`ms`,label:`Mississippi`},{value:`mo`,label:`Missouri`},{value:`mt`,label:`Montana`},{value:`ne`,label:`Nebraska`},{value:`nv`,label:`Nevada`},{value:`nh`,label:`New Hampshire`},{value:`nj`,label:`New Jersey`},{value:`nm`,label:`New Mexico`},{value:`ny`,label:`New York`},{value:`nc`,label:`North Carolina`},{value:`nd`,label:`North Dakota`},{value:`oh`,label:`Ohio`},{value:`ok`,label:`Oklahoma`},{value:`or`,label:`Oregon`},{value:`pa`,label:`Pennsylvania`},{value:`ri`,label:`Rhode Island`},{value:`sc`,label:`South Carolina`},{value:`sd`,label:`South Dakota`},{value:`tn`,label:`Tennessee`},{value:`tx`,label:`Texas`},{value:`ut`,label:`Utah`},{value:`vt`,label:`Vermont`},{value:`va`,label:`Virginia`},{value:`wa`,label:`Washington`},{value:`wv`,label:`West Virginia`},{value:`wi`,label:`Wisconsin`},{value:`wy`,label:`Wyoming`}],w={name:`Overview`,render:()=>r`
    <div data-theme=${g} data-mode=${h()} style=${m}>

      <!-- Header -->
      <h1 style="${f.h1}">Select</h1>
      <p style="${f.body} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        A single-selection dropdown using the native &lt;select&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, and integrates with forms.
      </p>

      <hr style="${u.divider}" />

      <!-- Basic Usage -->
      <h2 style="${f.h2}">Basic usage</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        Provide a label and options array. The select fills its container width by default.
      </p>

      <div style="margin-bottom: ${_.subsection}; max-width: 320px;">
        <mms-select 
          label="State"
          .options=${C}
        ></mms-select>
      </div>

      <hr style="${u.divider}" />

      <!-- With Helper Text -->
      <h2 style="${f.h2}">With helper text</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        Helper text provides additional guidance below the select.
      </p>

      <div style="margin-bottom: ${_.subsection}; max-width: 320px;">
        <mms-select 
          label="State"
          helper-text="Select your state of residence."
          .options=${C}
        ></mms-select>
      </div>

      <hr style="${u.divider}" />

      <!-- With Tooltip -->
      <h2 style="${f.h2}">With tooltip</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        An info icon can be shown next to the label. <em>(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: ${_.subsection}; max-width: 320px;">
        <mms-select 
          label="County"
          show-tooltip
          tooltip-text="Your county determines available services and providers."
          .options=${[{value:`la`,label:`Los Angeles County`},{value:`or`,label:`Orange County`},{value:`sd`,label:`San Diego County`}]}
        ></mms-select>
      </div>

      <hr style="${u.divider}" />

      <!-- Required Field -->
      <h2 style="${f.h2}">Required field</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        The <code style="${f.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: ${_.subsection}; max-width: 320px;">
        <mms-select 
          label="State of residence"
          required
          .options=${C}
        ></mms-select>
      </div>

      <hr style="${u.divider}" />

      <!-- Error State -->
      <h2 style="${f.h2}">Error state</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        The <code style="${f.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: ${_.subsection}; max-width: 320px;">
        <mms-select 
          label="Language"
          error
          error-text="Please select a language."
          required
          .options=${[{value:`en`,label:`English`},{value:`es`,label:`Spanish`},{value:`zh`,label:`Chinese`}]}
        ></mms-select>
      </div>

      <hr style="${u.divider}" />

      <!-- Readonly State -->
      <h2 style="${f.h2}">Readonly state</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: ${_.subsection}; max-width: 320px;">
        <mms-select 
          label="Enrollment status"
          value="active"
          readonly
          .options=${[{value:`pending`,label:`Pending`},{value:`active`,label:`Active`},{value:`closed`,label:`Closed`}]}
        ></mms-select>
      </div>

      <hr style="${u.divider}" />

      <!-- Disabled State -->
      <h2 style="${f.h2}">Disabled state</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        Disabled prevents all interaction and dims the appearance.
      </p>

      <div style="margin-bottom: ${_.subsection}; max-width: 320px;">
        <mms-select 
          label="Program type"
          disabled
          .options=${[{value:`medicaid`,label:`Medicaid`},{value:`chip`,label:`CHIP`}]}
        ></mms-select>
      </div>

      <hr style="${u.divider}" />

      <!-- Size Variants -->
      <h2 style="${f.h2}">Size variants</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        Three sizes are available: <code style="${f.monoSm}">sm</code>, <code style="${f.monoSm}">md</code> (default), and <code style="${f.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${_.content}; max-width: 320px; margin-bottom: ${_.subsection};">
        <mms-select 
          label="Small"
          size="sm"
          .options=${[{value:`a`,label:`Option A`},{value:`b`,label:`Option B`},{value:`c`,label:`Option C`}]}
        ></mms-select>
        <mms-select 
          label="Medium (default)"
          size="md"
          .options=${[{value:`a`,label:`Option A`},{value:`b`,label:`Option B`},{value:`c`,label:`Option C`}]}
        ></mms-select>
        <mms-select 
          label="Large"
          size="lg"
          .options=${[{value:`a`,label:`Option A`},{value:`b`,label:`Option B`},{value:`c`,label:`Option C`}]}
        ></mms-select>
      </div>

      <hr style="${u.divider}" />

      <!-- Width Behavior -->
      <h2 style="${f.h2}">Width behavior</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        Select is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: ${_.content};">
        <p style="${f.caption} margin-bottom: ${_.content};"><strong>Full-width (default)</strong></p>
        <mms-select 
          label="Full width select"
          .options=${C}
        ></mms-select>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: ${_.content}; margin-bottom: ${_.content};">
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md);">
          <p style="${f.caption} margin-bottom: ${_.content};"><strong>Grid column 1</strong></p>
          <mms-select 
            label="State"
            .options=${C}
          ></mms-select>
        </div>
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md);">
          <p style="${f.caption} margin-bottom: ${_.content};"><strong>Grid column 2</strong></p>
          <mms-select 
            label="Language"
            .options=${[{value:`en`,label:`English`},{value:`es`,label:`Spanish`}]}
          ></mms-select>
        </div>
      </div>

      <div style="width: 200px; background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: ${_.subsection};">
        <p style="${f.caption} margin-bottom: var(--spacing-xs2);"><strong>Narrow container (200px)</strong></p>
        <p style="${f.caption} ${u.muted} margin-bottom: ${_.content};">Sidebars, filter drawers, compact dialogs</p>
        <mms-select 
          label="Constrained"
          .options=${[{value:`yes`,label:`Yes`},{value:`no`,label:`No`}]}
        ></mms-select>
      </div>

      <hr style="${u.divider}" />

      <!-- Compact Density -->
      <h2 style="${f.h2}">Compact density</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        Use <code style="${f.monoSm}">data-density="compact"</code> for reduced padding. 
        Useful for footer/header contexts or dense UI.
      </p>

      <div style="display: flex; gap: ${_.subsection}; max-width: 600px; margin-bottom: ${_.subsection};">
        <div style="flex: 1;">
          <p style="${f.caption} margin-bottom: ${_.label};"><strong>Default</strong></p>
          <mms-select 
            label="State"
            .options=${C}
          ></mms-select>
        </div>
        <div style="flex: 1;">
          <p style="${f.caption} margin-bottom: ${_.label};"><strong>Compact</strong></p>
          <mms-select 
            label="State"
            data-density="compact"
            .options=${C}
          ></mms-select>
        </div>
      </div>

      <hr style="${u.divider}" />

      <!-- Accessibility -->
      <h2 style="${f.h2}">Accessibility</h2>
      
      <div style="margin-bottom: ${_.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Why native &lt;select&gt;?"
          message="Custom dropdown implementations (listbox + button) require extensive ARIA wiring and often fail edge cases with screen readers. Native &lt;select&gt; guarantees correct behavior across all assistive technologies with zero custom ARIA — the browser handles announcements, focus, and keyboard navigation."
        ></mms-inline-alert>
      </div>

      <h3 style="${f.h3}">WCAG 2.2 AA compliance</h3>
      ${v(c.select.rows)}

      <h3 style="${f.h3}">Screen reader behavior</h3>
      <ul style="${f.bodySm} ${u.muted} margin: 0 0 ${_.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${_.label};"><strong>Focus:</strong> Announces label, current value (or "blank"), and "combo box"</li>
        <li style="margin-bottom: ${_.label};"><strong>Required:</strong> Announces "required" when <code style="${f.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: ${_.label};"><strong>Error:</strong> Immediately announces error message via <code style="${f.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: ${_.label};"><strong>Selection:</strong> Announces newly selected option as user navigates with arrow keys</li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="${f.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${f.h3}">Keyboard navigation</h3>
      <table style="${u.table}">
        <thead>
          <tr>
            <th style="${u.th} width: 140px;">Key</th>
            <th style="${u.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${u.td}"><kbd style="${u.kbd}">Tab</kbd></td>
            <td style="${u.td}">Move focus to / from the select</td>
          </tr>
          <tr>
            <td style="${u.td}"><kbd style="${u.kbd}">Space</kbd> / <kbd style="${u.kbd}">Enter</kbd></td>
            <td style="${u.td}">Open dropdown menu (behavior varies by browser/OS)</td>
          </tr>
          <tr>
            <td style="${u.td}"><kbd style="${u.kbd}">↑</kbd> <kbd style="${u.kbd}">↓</kbd></td>
            <td style="${u.td}">Navigate between options (selects immediately on some platforms)</td>
          </tr>
          <tr>
            <td style="${u.td}"><kbd style="${u.kbd}">Home</kbd> / <kbd style="${u.kbd}">End</kbd></td>
            <td style="${u.td}">Jump to first / last option</td>
          </tr>
          <tr>
            <td style="${u.td}"><kbd style="${u.kbd}">Escape</kbd></td>
            <td style="${u.td}">Close dropdown without changing selection</td>
          </tr>
          <tr>
            <td style="${u.td}">Type character(s)</td>
            <td style="${u.td}">Jump to first option starting with typed characters (native type-ahead)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},T={name:`Option language`,render:()=>r`
    <div data-theme=${g} data-mode=${h()} style=${m}>

      <!-- Header -->
      <h1 style="${f.h1}">Option Language</h1>
      <p style="${f.body} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        An optional <code style="${f.monoSm}">lang</code> field on <code style="${f.monoSm}">SelectOption</code>,
        for any option whose label is written in a different language than the rest of the page.
      </p>

      <hr style="${u.divider}" />

      <!-- Why -->
      <h2 style="${f.h2}">Why</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.content};">
        A screen reader pronounces option text using the page's own declared language by default.
        When an option's label is itself written in a different language — "Español" inside an
        English-language page, for example — that default is wrong: the label gets read back using
        English letter-sounds instead of Spanish phonetics, which can make it unintelligible.
      </p>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.content};">
        This is a real, named accessibility requirement — WCAG 3.1.2, <em>Language of Parts</em> —
        not a cosmetic nicety. It applies to any option list that mixes languages, most commonly a
        locale switcher, but just as much to e.g. a country select whose names are each written in
        that country's own language.
      </p>

      <hr style="${u.divider}" />

      <!-- What -->
      <h2 style="${f.h2}">What it is</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        <code style="${f.monoSm}">SelectOption</code> accepts an optional <code style="${f.monoSm}">lang</code>
        field — a BCP 47 language tag, e.g. <code style="${f.monoSm}">es</code> or <code style="${f.monoSm}">zh</code>.
        When set, it's rendered directly as the generated <code style="${f.monoSm}">&lt;option&gt;</code>'s
        own <code style="${f.monoSm}">lang</code> attribute. It has no visible effect for a sighted
        user — no font, color, or layout change — it exists purely so assistive tech reads that one
        option correctly. Leave it unset for any option whose label is already in the page's own
        language; there's nothing to opt into for those.
      </p>

      <div style="margin-bottom: ${_.content}; max-width: 320px;">
        <mms-select
          label="Language"
          value="en"
          .options=${[{value:`en`,label:`English`,lang:`en`},{value:`es`,label:`Español`,lang:`es`},{value:`zh`,label:`中文`,lang:`zh`}]}
        ></mms-select>
      </div>

      <hr style="${u.divider}" />

      <!-- How to implement -->
      <h2 style="${f.h2}">How to implement</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.content};">
        Shown below as both a plain web component and the generated React wrapper
        (<code style="${f.monoSm}">@mms/design-system/react/mms-select</code>) — see
        <strong>Developer Guide → React Usage</strong> for the full wrapper conventions.
      </p>

      <h3 style="${f.h3}">Step 1 — tag each option with its own language</h3>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.content};">
        Add <code style="${f.monoSm}">lang</code> alongside <code style="${f.monoSm}">value</code> and
        <code style="${f.monoSm}">label</code> on any option whose label is in another language. This
        is the only required step — it's all a consumer has to do for assistive tech to read that
        option correctly, regardless of what the select is used for.
      </p>

      <p style="${u.label} ${u.muted} margin: 0 0 var(--spacing-xs2);">Web component</p>
      <pre style="${u.pre}"><code>select.options = [
  { value: 'en', label: 'English', lang: 'en' },
  { value: 'es', label: 'Español', lang: 'es' },
  { value: 'zh', label: '中文', lang: 'zh' },
];</code></pre>

      <p style="${u.label} ${u.muted} margin: 0 0 var(--spacing-xs2);">React</p>
      <pre style="${u.pre}"><code>import { MmsSelect } from '@mms/design-system/react/mms-select';

const languageOptions = [
  { value: 'en', label: 'English', lang: 'en' },
  { value: 'es', label: 'Español', lang: 'es' },
  { value: 'zh', label: '中文', lang: 'zh' },
];

&lt;MmsSelect label="Language" options={languageOptions} /&gt;</code></pre>

      <h3 style="${f.h3}">Step 2 — only if building a locale switcher</h3>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.content};">
        <code style="${f.monoSm}">mms-select</code> is the recommended control for a locale switcher
        (see <code style="${f.monoSm}">mms-footer</code>'s <code style="${f.monoSm}">language</code>
        slot) — no dedicated language-switcher component is needed. A switcher's own job beyond
        Step 1 is to keep the page's declared language in sync with the user's choice —
        WCAG 3.1.1, <em>Language of Page</em> — by listening for <code style="${f.monoSm}">change</code>
        and setting <code style="${f.monoSm}">document.documentElement.lang</code>. This is a consumer
        responsibility, not component behavior: <code style="${f.monoSm}">mms-select</code> doesn't own
        the whole document, same reasoning that keeps <code style="${f.monoSm}">mms-footer</code>'s
        <code style="${f.monoSm}">language</code> slot unopinionated about routing.
      </p>

      <p style="${u.label} ${u.muted} margin: 0 0 var(--spacing-xs2);">Web component</p>
      <pre style="${u.pre}"><code>languageSelect.addEventListener('change', (e) => {
  document.documentElement.lang = e.detail.value;
});</code></pre>

      <p style="${u.label} ${u.muted} margin: 0 0 var(--spacing-xs2);">React</p>
      <pre style="${u.pre} margin-bottom: ${_.subsection};"><code>&lt;MmsSelect
  label="Language"
  options={languageOptions}
  onChange={(e) => { document.documentElement.lang = e.detail.value; }}
/&gt;</code></pre>

    </div>
  `},E={name:`Playground`,tags:[`!dev`],args:{size:`md`,state:`default`,disabled:!1,readonly:!1,label:`Select an option`,placeholder:`Choose...`,helperText:`Select one of the available options.`,options:[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`},{value:`option4`,label:`Option 4`}],name:`mySelect`,value:``,required:!1,error:!1,errorText:`Please make a selection.`,showTooltip:!1,tooltipText:`Additional guidance for this field`,theme:`maximus`,density:`default`},decorators:[e=>r`
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 320px;">
            ${e()}
          </div>
        </div>
      `],argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Text and padding size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`filled`],description:`Visual state (for documentation preview)`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction, dims appearance`,table:{category:`Visual`}},readonly:{name:`Readonly`,control:`boolean`,description:`Shows value but prevents changes`,table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Label text displayed above the select`,table:{category:`Content`}},placeholder:{name:`Placeholder`,control:`text`,description:`Placeholder shown when no value selected`,table:{category:`Content`}},helperText:{name:`Helper text`,control:`text`,description:`Supplementary guidance below the select`,table:{category:`Content`}},options:{name:`Options`,control:`object`,description:"Array of options. Each option needs `value` (string) and `label` (string) properties.",table:{category:`Content`}},name:{name:`Name`,control:`text`,description:'HTML `name` attribute — the key sent with form data on submit (e.g., `name="state"` submits as `state=CA`).',table:{category:`Form`}},value:{name:`Value`,control:`text`,description:"Currently selected option value — must match one of the `value` properties in the options array. **Clear this field to reset to placeholder.**",table:{category:`Form`}},required:{name:`Required`,control:`boolean`,description:`Shows asterisk indicator on label`,table:{category:`Validation`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and message`,table:{category:`Validation`}},errorText:{name:`Error text`,control:`text`,description:`Error message when error is true`,table:{category:`Validation`}},showTooltip:{name:`Show tooltip`,control:`boolean`,description:`Show info icon next to label`,table:{category:`Tooltip`}},tooltipText:{name:`Tooltip text`,control:`text`,description:`Tooltip content (dialog coming soon)`,table:{category:`Tooltip`}},theme:{name:`Theme`,control:`select`,options:a,description:`Brand theme (affects typography)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.placeholder&&r.push(`placeholder="${n.placeholder}"`),n.value&&r.push(`value="${n.value}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.name&&r.push(`name="${n.name}"`),n.state&&n.state!=="default"&&r.push(`state="${n.state}"`),n.showTooltip&&r.push(`show-tooltip`),n.tooltipText&&n.showTooltip&&r.push(`tooltip-text="${n.tooltipText}"`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.size!==`md`&&r.push(`size="${n.size}"`),n.disabled&&r.push(`disabled`),n.readonly&&r.push(`readonly`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-select\n  ${r.join(`
  `)}\n  .options=\${options}\n></mms-select>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=e.options;if(typeof e.options==`string`)try{t=JSON.parse(e.options)}catch{t=[]}return Array.isArray(t)||(t=[]),r`
      <mms-select
        label=${e.label}
        placeholder=${e.placeholder}
        value=${e.value}
        helper-text=${e.helperText}
        name=${e.name||n}
        state=${e.state}
        ?show-tooltip=${e.showTooltip}
        tooltip-text=${e.tooltipText}
        ?error=${e.error}
        error-text=${e.errorText}
        ?required=${e.required}
        size=${e.size}
        ?disabled=${e.disabled}
        ?readonly=${e.readonly}
        data-density=${e.density===`compact`?`compact`:n}
        .options=${t}
      ></mms-select>
    `}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Select</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A single-selection dropdown using the native &lt;select&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, and integrates with forms.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Provide a label and options array. The select fills its container width by default.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-select 
          label="State"
          .options=\${stateOptions}
        ></mms-select>
      </div>

      <hr style="\${doc.divider}" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Helper text provides additional guidance below the select.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-select 
          label="State"
          helper-text="Select your state of residence."
          .options=\${stateOptions}
        ></mms-select>
      </div>

      <hr style="\${doc.divider}" />

      <!-- With Tooltip -->
      <h2 style="\${t.h2}">With tooltip</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        An info icon can be shown next to the label. <em>(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-select 
          label="County"
          show-tooltip
          tooltip-text="Your county determines available services and providers."
          .options=\${[{
    value: 'la',
    label: 'Los Angeles County'
  }, {
    value: 'or',
    label: 'Orange County'
  }, {
    value: 'sd',
    label: 'San Diego County'
  }]}
        ></mms-select>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Required Field -->
      <h2 style="\${t.h2}">Required field</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-select 
          label="State of residence"
          required
          .options=\${stateOptions}
        ></mms-select>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-select 
          label="Language"
          error
          error-text="Please select a language."
          required
          .options=\${[{
    value: 'en',
    label: 'English'
  }, {
    value: 'es',
    label: 'Spanish'
  }, {
    value: 'zh',
    label: 'Chinese'
  }]}
        ></mms-select>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Readonly State -->
      <h2 style="\${t.h2}">Readonly state</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-select 
          label="Enrollment status"
          value="active"
          readonly
          .options=\${[{
    value: 'pending',
    label: 'Pending'
  }, {
    value: 'active',
    label: 'Active'
  }, {
    value: 'closed',
    label: 'Closed'
  }]}
        ></mms-select>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Disabled State -->
      <h2 style="\${t.h2}">Disabled state</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Disabled prevents all interaction and dims the appearance.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-select 
          label="Program type"
          disabled
          .options=\${[{
    value: 'medicaid',
    label: 'Medicaid'
  }, {
    value: 'chip',
    label: 'CHIP'
  }]}
        ></mms-select>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Size Variants -->
      <h2 style="\${t.h2}">Size variants</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Three sizes are available: <code style="\${t.monoSm}">sm</code>, <code style="\${t.monoSm}">md</code> (default), and <code style="\${t.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; max-width: 320px; margin-bottom: \${space.subsection};">
        <mms-select 
          label="Small"
          size="sm"
          .options=\${[{
    value: 'a',
    label: 'Option A'
  }, {
    value: 'b',
    label: 'Option B'
  }, {
    value: 'c',
    label: 'Option C'
  }]}
        ></mms-select>
        <mms-select 
          label="Medium (default)"
          size="md"
          .options=\${[{
    value: 'a',
    label: 'Option A'
  }, {
    value: 'b',
    label: 'Option B'
  }, {
    value: 'c',
    label: 'Option C'
  }]}
        ></mms-select>
        <mms-select 
          label="Large"
          size="lg"
          .options=\${[{
    value: 'a',
    label: 'Option A'
  }, {
    value: 'b',
    label: 'Option B'
  }, {
    value: 'c',
    label: 'Option C'
  }]}
        ></mms-select>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Width Behavior -->
      <h2 style="\${t.h2}">Width behavior</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Select is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: \${space.content};">
        <p style="\${t.caption} margin-bottom: \${space.content};"><strong>Full-width (default)</strong></p>
        <mms-select 
          label="Full width select"
          .options=\${stateOptions}
        ></mms-select>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: \${space.content}; margin-bottom: \${space.content};">
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md);">
          <p style="\${t.caption} margin-bottom: \${space.content};"><strong>Grid column 1</strong></p>
          <mms-select 
            label="State"
            .options=\${stateOptions}
          ></mms-select>
        </div>
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md);">
          <p style="\${t.caption} margin-bottom: \${space.content};"><strong>Grid column 2</strong></p>
          <mms-select 
            label="Language"
            .options=\${[{
    value: 'en',
    label: 'English'
  }, {
    value: 'es',
    label: 'Spanish'
  }]}
          ></mms-select>
        </div>
      </div>

      <div style="width: 200px; background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: \${space.subsection};">
        <p style="\${t.caption} margin-bottom: var(--spacing-xs2);"><strong>Narrow container (200px)</strong></p>
        <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">Sidebars, filter drawers, compact dialogs</p>
        <mms-select 
          label="Constrained"
          .options=\${[{
    value: 'yes',
    label: 'Yes'
  }, {
    value: 'no',
    label: 'No'
  }]}
        ></mms-select>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Compact Density -->
      <h2 style="\${t.h2}">Compact density</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Use <code style="\${t.monoSm}">data-density="compact"</code> for reduced padding. 
        Useful for footer/header contexts or dense UI.
      </p>

      <div style="display: flex; gap: \${space.subsection}; max-width: 600px; margin-bottom: \${space.subsection};">
        <div style="flex: 1;">
          <p style="\${t.caption} margin-bottom: \${space.label};"><strong>Default</strong></p>
          <mms-select 
            label="State"
            .options=\${stateOptions}
          ></mms-select>
        </div>
        <div style="flex: 1;">
          <p style="\${t.caption} margin-bottom: \${space.label};"><strong>Compact</strong></p>
          <mms-select 
            label="State"
            data-density="compact"
            .options=\${stateOptions}
          ></mms-select>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>
      
      <div style="margin-bottom: \${space.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=\${false}
          summary="Why native &lt;select&gt;?"
          message="Custom dropdown implementations (listbox + button) require extensive ARIA wiring and often fail edge cases with screen readers. Native &lt;select&gt; guarantees correct behavior across all assistive technologies with zero custom ARIA — the browser handles announcements, focus, and keyboard navigation."
        ></mms-inline-alert>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['select'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Focus:</strong> Announces label, current value (or "blank"), and "combo box"</li>
        <li style="margin-bottom: \${space.label};"><strong>Required:</strong> Announces "required" when <code style="\${t.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: \${space.label};"><strong>Error:</strong> Immediately announces error message via <code style="\${t.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: \${space.label};"><strong>Selection:</strong> Announces newly selected option as user navigates with arrow keys</li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="\${t.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <table style="\${doc.table}">
        <thead>
          <tr>
            <th style="\${doc.th} width: 140px;">Key</th>
            <th style="\${doc.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Tab</kbd></td>
            <td style="\${doc.td}">Move focus to / from the select</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Space</kbd> / <kbd style="\${doc.kbd}">Enter</kbd></td>
            <td style="\${doc.td}">Open dropdown menu (behavior varies by browser/OS)</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">↑</kbd> <kbd style="\${doc.kbd}">↓</kbd></td>
            <td style="\${doc.td}">Navigate between options (selects immediately on some platforms)</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Home</kbd> / <kbd style="\${doc.kbd}">End</kbd></td>
            <td style="\${doc.td}">Jump to first / last option</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Escape</kbd></td>
            <td style="\${doc.td}">Close dropdown without changing selection</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Type character(s)</td>
            <td style="\${doc.td}">Jump to first option starting with typed characters (native type-ahead)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Option language',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Option Language</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        An optional <code style="\${t.monoSm}">lang</code> field on <code style="\${t.monoSm}">SelectOption</code>,
        for any option whose label is written in a different language than the rest of the page.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Why -->
      <h2 style="\${t.h2}">Why</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        A screen reader pronounces option text using the page's own declared language by default.
        When an option's label is itself written in a different language — "Español" inside an
        English-language page, for example — that default is wrong: the label gets read back using
        English letter-sounds instead of Spanish phonetics, which can make it unintelligible.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        This is a real, named accessibility requirement — WCAG 3.1.2, <em>Language of Parts</em> —
        not a cosmetic nicety. It applies to any option list that mixes languages, most commonly a
        locale switcher, but just as much to e.g. a country select whose names are each written in
        that country's own language.
      </p>

      <hr style="\${doc.divider}" />

      <!-- What -->
      <h2 style="\${t.h2}">What it is</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">SelectOption</code> accepts an optional <code style="\${t.monoSm}">lang</code>
        field — a BCP 47 language tag, e.g. <code style="\${t.monoSm}">es</code> or <code style="\${t.monoSm}">zh</code>.
        When set, it's rendered directly as the generated <code style="\${t.monoSm}">&lt;option&gt;</code>'s
        own <code style="\${t.monoSm}">lang</code> attribute. It has no visible effect for a sighted
        user — no font, color, or layout change — it exists purely so assistive tech reads that one
        option correctly. Leave it unset for any option whose label is already in the page's own
        language; there's nothing to opt into for those.
      </p>

      <div style="margin-bottom: \${space.content}; max-width: 320px;">
        <mms-select
          label="Language"
          value="en"
          .options=\${[{
    value: 'en',
    label: 'English',
    lang: 'en'
  }, {
    value: 'es',
    label: 'Español',
    lang: 'es'
  }, {
    value: 'zh',
    label: '中文',
    lang: 'zh'
  }]}
        ></mms-select>
      </div>

      <hr style="\${doc.divider}" />

      <!-- How to implement -->
      <h2 style="\${t.h2}">How to implement</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Shown below as both a plain web component and the generated React wrapper
        (<code style="\${t.monoSm}">@mms/design-system/react/mms-select</code>) — see
        <strong>Developer Guide → React Usage</strong> for the full wrapper conventions.
      </p>

      <h3 style="\${t.h3}">Step 1 — tag each option with its own language</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Add <code style="\${t.monoSm}">lang</code> alongside <code style="\${t.monoSm}">value</code> and
        <code style="\${t.monoSm}">label</code> on any option whose label is in another language. This
        is the only required step — it's all a consumer has to do for assistive tech to read that
        option correctly, regardless of what the select is used for.
      </p>

      <p style="\${doc.label} \${doc.muted} margin: 0 0 var(--spacing-xs2);">Web component</p>
      <pre style="\${doc.pre}"><code>select.options = [
  { value: 'en', label: 'English', lang: 'en' },
  { value: 'es', label: 'Español', lang: 'es' },
  { value: 'zh', label: '中文', lang: 'zh' },
];</code></pre>

      <p style="\${doc.label} \${doc.muted} margin: 0 0 var(--spacing-xs2);">React</p>
      <pre style="\${doc.pre}"><code>import { MmsSelect } from '@mms/design-system/react/mms-select';

const languageOptions = [
  { value: 'en', label: 'English', lang: 'en' },
  { value: 'es', label: 'Español', lang: 'es' },
  { value: 'zh', label: '中文', lang: 'zh' },
];

&lt;MmsSelect label="Language" options={languageOptions} /&gt;</code></pre>

      <h3 style="\${t.h3}">Step 2 — only if building a locale switcher</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        <code style="\${t.monoSm}">mms-select</code> is the recommended control for a locale switcher
        (see <code style="\${t.monoSm}">mms-footer</code>'s <code style="\${t.monoSm}">language</code>
        slot) — no dedicated language-switcher component is needed. A switcher's own job beyond
        Step 1 is to keep the page's declared language in sync with the user's choice —
        WCAG 3.1.1, <em>Language of Page</em> — by listening for <code style="\${t.monoSm}">change</code>
        and setting <code style="\${t.monoSm}">document.documentElement.lang</code>. This is a consumer
        responsibility, not component behavior: <code style="\${t.monoSm}">mms-select</code> doesn't own
        the whole document, same reasoning that keeps <code style="\${t.monoSm}">mms-footer</code>'s
        <code style="\${t.monoSm}">language</code> slot unopinionated about routing.
      </p>

      <p style="\${doc.label} \${doc.muted} margin: 0 0 var(--spacing-xs2);">Web component</p>
      <pre style="\${doc.pre}"><code>languageSelect.addEventListener('change', (e) => {
  document.documentElement.lang = e.detail.value;
});</code></pre>

      <p style="\${doc.label} \${doc.muted} margin: 0 0 var(--spacing-xs2);">React</p>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};"><code>&lt;MmsSelect
  label="Language"
  options={languageOptions}
  onChange={(e) => { document.documentElement.lang = e.detail.value; }}
/&gt;</code></pre>

    </div>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Visual
    size: 'md',
    state: 'default',
    disabled: false,
    readonly: false,
    // Content
    label: 'Select an option',
    placeholder: 'Choose...',
    helperText: 'Select one of the available options.',
    options: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }, {
      value: 'option4',
      label: 'Option 4'
    }],
    // Form
    name: 'mySelect',
    value: '',
    // Validation
    required: false,
    error: false,
    errorText: 'Please make a selection.',
    // Tooltip
    showTooltip: false,
    tooltipText: 'Additional guidance for this field',
    // Global
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 320px;">
            \${story()}
          </div>
        </div>
      \`;
  }],
  argTypes: {
    // ── Visual ────────────────────────────────────────────────
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Text and padding size',
      table: {
        category: 'Visual'
      }
    },
    state: {
      name: 'State',
      control: 'select',
      options: ['default', 'hover', 'focus', 'filled'],
      description: 'Visual state (for documentation preview)',
      table: {
        category: 'Visual'
      }
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Prevents interaction, dims appearance',
      table: {
        category: 'Visual'
      }
    },
    readonly: {
      name: 'Readonly',
      control: 'boolean',
      description: 'Shows value but prevents changes',
      table: {
        category: 'Visual'
      }
    },
    // ── Content ───────────────────────────────────────────────
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label text displayed above the select',
      table: {
        category: 'Content'
      }
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder shown when no value selected',
      table: {
        category: 'Content'
      }
    },
    helperText: {
      name: 'Helper text',
      control: 'text',
      description: 'Supplementary guidance below the select',
      table: {
        category: 'Content'
      }
    },
    options: {
      name: 'Options',
      control: 'object',
      description: 'Array of options. Each option needs \`value\` (string) and \`label\` (string) properties.',
      table: {
        category: 'Content'
      }
    },
    // ── Form ──────────────────────────────────────────────────
    name: {
      name: 'Name',
      control: 'text',
      description: 'HTML \`name\` attribute — the key sent with form data on submit (e.g., \`name="state"\` submits as \`state=CA\`).',
      table: {
        category: 'Form'
      }
    },
    value: {
      name: 'Value',
      control: 'text',
      description: 'Currently selected option value — must match one of the \`value\` properties in the options array. **Clear this field to reset to placeholder.**',
      table: {
        category: 'Form'
      }
    },
    // ── Validation ────────────────────────────────────────────
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Shows asterisk indicator on label',
      table: {
        category: 'Validation'
      }
    },
    error: {
      name: 'Error',
      control: 'boolean',
      description: 'Displays error styling and message',
      table: {
        category: 'Validation'
      }
    },
    errorText: {
      name: 'Error text',
      control: 'text',
      description: 'Error message when error is true',
      table: {
        category: 'Validation'
      }
    },
    // ── Tooltip ───────────────────────────────────────────────
    showTooltip: {
      name: 'Show tooltip',
      control: 'boolean',
      description: 'Show info icon next to label',
      table: {
        category: 'Tooltip'
      }
    },
    tooltipText: {
      name: 'Tooltip text',
      control: 'text',
      description: 'Tooltip content (dialog coming soon)',
      table: {
        category: 'Tooltip'
      }
    },
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: BRAND_ORDER,
      description: 'Brand theme (affects typography)',
      table: {
        category: 'Global'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Padding density',
      table: {
        category: 'Global'
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
          if (a.placeholder) attrs.push(\`placeholder="\${a.placeholder}"\`);
          if (a.value) attrs.push(\`value="\${a.value}"\`);
          if (a.helperText) attrs.push(\`helper-text="\${a.helperText}"\`);
          if (a.name) attrs.push(\`name="\${a.name}"\`);
          if (a.state && a.state !== 'default') attrs.push(\`state="\${a.state}"\`);
          if (a.showTooltip) attrs.push('show-tooltip');
          if (a.tooltipText && a.showTooltip) attrs.push(\`tooltip-text="\${a.tooltipText}"\`);
          if (a.error) attrs.push('error');
          if (a.errorText && a.error) attrs.push(\`error-text="\${a.errorText}"\`);
          if (a.required) attrs.push('required');
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.disabled) attrs.push('disabled');
          if (a.readonly) attrs.push('readonly');
          if (a.density === 'compact') attrs.push('data-density="compact"');

          // Note: .options must be set programmatically, not via attribute
          return \`<mms-select\\n  \${attrs.join('\\n  ')}\\n  .options=\\\${options}\\n></mms-select>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none' // Preserve argTypes definition order
    }
  },
  render: (args: {
    label: string;
    placeholder: string;
    helperText: string;
    name: string;
    showTooltip: boolean;
    tooltipText: string;
    error: boolean;
    errorText: string;
    required: boolean;
    value: string;
    size: string;
    state: string;
    disabled: boolean;
    readonly: boolean;
    options: SelectOption[] | string;
    theme: string;
    density: string;
  }) => {
    // Handle Storybook control edge cases (may be stringified JSON)
    let parsedOptions = args.options;
    if (typeof args.options === 'string') {
      try {
        parsedOptions = JSON.parse(args.options);
      } catch {
        parsedOptions = [];
      }
    }
    if (!Array.isArray(parsedOptions)) {
      parsedOptions = [];
    }
    return html\`
      <mms-select
        label=\${args.label}
        placeholder=\${args.placeholder}
        value=\${args.value}
        helper-text=\${args.helperText}
        name=\${args.name || nothing}
        state=\${args.state}
        ?show-tooltip=\${args.showTooltip}
        tooltip-text=\${args.tooltipText}
        ?error=\${args.error}
        error-text=\${args.errorText}
        ?required=\${args.required}
        size=\${args.size}
        ?disabled=\${args.disabled}
        ?readonly=\${args.readonly}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
        .options=\${parsedOptions}
      ></mms-select>
    \`;
  }
}`,...E.parameters?.docs?.source}}},D=[`Overview`,`OptionLanguage`,`PlaygroundStory`]}));O();export{T as OptionLanguage,w as Overview,E as PlaygroundStory,D as __namedExportsOrder,S as default,O as n,x as t};