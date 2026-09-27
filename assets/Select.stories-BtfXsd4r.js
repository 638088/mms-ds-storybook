import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-CBo78ikN.js";import{a,o,r as s,t as c}from"./a11y-outcome-BDXRHsfs.js";import{t as l}from"./mms-select.component-DamC9Zix.js";var u=t({Overview:()=>g,PlaygroundStory:()=>_,__namedExportsOrder:()=>v,default:()=>d}),d,f,p,m,h,g,_,v,y=e((()=>{i(),l(),a(),c(),d={title:`Forms/Select`,tags:[`!autodocs`]},f={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},p=`680px`,m=`960px`,h=[{value:`al`,label:`Alabama`},{value:`ak`,label:`Alaska`},{value:`az`,label:`Arizona`},{value:`ar`,label:`Arkansas`},{value:`ca`,label:`California`},{value:`co`,label:`Colorado`},{value:`ct`,label:`Connecticut`},{value:`de`,label:`Delaware`},{value:`dc`,label:`District of Columbia`},{value:`fl`,label:`Florida`},{value:`ga`,label:`Georgia`},{value:`hi`,label:`Hawaii`},{value:`id`,label:`Idaho`},{value:`il`,label:`Illinois`},{value:`in`,label:`Indiana`},{value:`ia`,label:`Iowa`},{value:`ks`,label:`Kansas`},{value:`ky`,label:`Kentucky`},{value:`la`,label:`Louisiana`},{value:`me`,label:`Maine`},{value:`md`,label:`Maryland`},{value:`ma`,label:`Massachusetts`},{value:`mi`,label:`Michigan`},{value:`mn`,label:`Minnesota`},{value:`ms`,label:`Mississippi`},{value:`mo`,label:`Missouri`},{value:`mt`,label:`Montana`},{value:`ne`,label:`Nebraska`},{value:`nv`,label:`Nevada`},{value:`nh`,label:`New Hampshire`},{value:`nj`,label:`New Jersey`},{value:`nm`,label:`New Mexico`},{value:`ny`,label:`New York`},{value:`nc`,label:`North Carolina`},{value:`nd`,label:`North Dakota`},{value:`oh`,label:`Ohio`},{value:`ok`,label:`Oklahoma`},{value:`or`,label:`Oregon`},{value:`pa`,label:`Pennsylvania`},{value:`ri`,label:`Rhode Island`},{value:`sc`,label:`South Carolina`},{value:`sd`,label:`South Dakota`},{value:`tn`,label:`Tennessee`},{value:`tx`,label:`Texas`},{value:`ut`,label:`Utah`},{value:`vt`,label:`Vermont`},{value:`va`,label:`Virginia`},{value:`wa`,label:`Washington`},{value:`wv`,label:`West Virginia`},{value:`wi`,label:`Wisconsin`},{value:`wy`,label:`Wyoming`}],g={name:`Overview`,render:()=>r`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${m}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${f.h1}">Select</h1>
      <p style="${f.body} opacity: 0.85; max-width: ${p}; margin-bottom: 2rem;">
        A single-selection dropdown using the native &lt;select&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, and integrates with forms.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${f.h2}">Basic usage</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Provide a label and options array. The select fills its container width by default.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="State"
          .options=${h}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="${f.h2}">With helper text</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the select.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="State"
          helper-text="Select your state of residence."
          .options=${h}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="${f.h2}">With tooltip</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="County"
          show-tooltip
          tooltip-text="Your county determines available services and providers."
          .options=${[{value:`la`,label:`Los Angeles County`},{value:`or`,label:`Orange County`},{value:`sd`,label:`San Diego County`}]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Field -->
      <h2 style="${f.h2}">Required field</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        The <code style="${f.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="State of residence"
          required
          .options=${h}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="${f.h2}">Error state</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        The <code style="${f.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="Language"
          error
          error-text="Please select a language."
          required
          .options=${[{value:`en`,label:`English`},{value:`es`,label:`Spanish`},{value:`zh`,label:`Chinese`}]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Readonly State -->
      <h2 style="${f.h2}">Readonly state</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="Enrollment status"
          value="active"
          readonly
          .options=${[{value:`pending`,label:`Pending`},{value:`active`,label:`Active`},{value:`closed`,label:`Closed`}]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled State -->
      <h2 style="${f.h2}">Disabled state</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Disabled prevents all interaction and dims the appearance.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="Program type"
          disabled
          .options=${[{value:`medicaid`,label:`Medicaid`},{value:`chip`,label:`CHIP`}]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size Variants -->
      <h2 style="${f.h2}">Size variants</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Three sizes are available: <code style="${f.monoSm}">sm</code>, <code style="${f.monoSm}">md</code> (default), and <code style="${f.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px; margin-bottom: 2rem;">
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Width Behavior -->
      <h2 style="${f.h2}">Width behavior</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Select is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <p style="${f.caption} margin-bottom: 1rem;"><strong>Full-width (default)</strong></p>
        <mms-select 
          label="Full width select"
          .options=${h}
        ></mms-select>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="${f.caption} margin-bottom: 1rem;"><strong>Grid column 1</strong></p>
          <mms-select 
            label="State"
            .options=${h}
          ></mms-select>
        </div>
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="${f.caption} margin-bottom: 1rem;"><strong>Grid column 2</strong></p>
          <mms-select 
            label="Language"
            .options=${[{value:`en`,label:`English`},{value:`es`,label:`Spanish`}]}
          ></mms-select>
        </div>
      </div>

      <div style="width: 200px; background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <p style="${f.caption} margin-bottom: 0.25rem;"><strong>Narrow container (200px)</strong></p>
        <p style="${f.caption} opacity: 0.7; margin-bottom: 1rem;">Sidebars, filter drawers, compact dialogs</p>
        <mms-select 
          label="Constrained"
          .options=${[{value:`yes`,label:`Yes`},{value:`no`,label:`No`}]}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Compact Density -->
      <h2 style="${f.h2}">Compact density</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Use <code style="${f.monoSm}">data-density="compact"</code> for reduced padding. 
        Useful for footer/header contexts or dense UI.
      </p>

      <div style="display: flex; gap: 2rem; max-width: 600px; margin-bottom: 2rem;">
        <div style="flex: 1;">
          <p style="${f.caption} margin-bottom: 0.5rem;"><strong>Default</strong></p>
          <mms-select 
            label="State"
            .options=${h}
          ></mms-select>
        </div>
        <div style="flex: 1;">
          <p style="${f.caption} margin-bottom: 0.5rem;"><strong>Compact</strong></p>
          <mms-select 
            label="State"
            data-density="compact"
            .options=${h}
          ></mms-select>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${f.h2}">Accessibility</h2>
      
      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${f.bodySm} margin: 0;">
          <strong>Why native &lt;select&gt;?</strong> Custom dropdown implementations (listbox + button) require extensive ARIA wiring and 
          often fail edge cases with screen readers. Native &lt;select&gt; guarantees correct behavior across all assistive technologies 
          with zero custom ARIA — the browser handles announcements, focus, and keyboard navigation.
        </p>
      </div>

      <h3 style="${f.h3}">WCAG 2.2 AA Compliance</h3>
      ${s(o.select.rows)}

      <h3 style="${f.h3}">Screen Reader Behavior</h3>
      <ul style="${f.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, current value (or "blank"), and "combo box"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="${f.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="${f.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: 0.5rem;"><strong>Selection:</strong> Announces newly selected option as user navigates with arrow keys</li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="${f.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${f.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the select</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Open dropdown menu (behavior varies by browser/OS)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Navigate between options (selects immediately on some platforms)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jump to first / last option</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close dropdown without changing selection</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;">Type character(s)</td>
            <td style="padding: 0.5rem 0.75rem;">Jump to first option starting with typed characters (native type-ahead)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},_={name:`Playground`,tags:[`!dev`],args:{size:`md`,state:`default`,disabled:!1,readonly:!1,label:`Select an option`,placeholder:`Choose...`,helperText:`Select one of the available options.`,options:[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`},{value:`option4`,label:`Option 4`}],name:`mySelect`,value:``,required:!1,error:!1,errorText:`Please make a selection.`,showTooltip:!1,tooltipText:`Additional guidance for this field`,theme:`maximus`,density:`default`},decorators:[e=>r`
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
      `],argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Text and padding size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`filled`],description:`Visual state (for documentation preview)`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction, dims appearance`,table:{category:`Visual`}},readonly:{name:`Readonly`,control:`boolean`,description:`Shows value but prevents changes`,table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Label text displayed above the select`,table:{category:`Content`}},placeholder:{name:`Placeholder`,control:`text`,description:`Placeholder shown when no value selected`,table:{category:`Content`}},helperText:{name:`Helper text`,control:`text`,description:`Supplementary guidance below the select`,table:{category:`Content`}},options:{name:`Options`,control:`object`,description:"Array of options. Each option needs `value` (string) and `label` (string) properties.",table:{category:`Content`}},name:{name:`Name`,control:`text`,description:'HTML `name` attribute — the key sent with form data on submit (e.g., `name="state"` submits as `state=CA`).',table:{category:`Form`}},value:{name:`Value`,control:`text`,description:"Currently selected option value — must match one of the `value` properties in the options array. **Clear this field to reset to placeholder.**",table:{category:`Form`}},required:{name:`Required`,control:`boolean`,description:`Shows asterisk indicator on label`,table:{category:`Validation`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and message`,table:{category:`Validation`}},errorText:{name:`Error text`,control:`text`,description:`Error message when error is true`,table:{category:`Validation`}},showTooltip:{name:`Show tooltip`,control:`boolean`,description:`Show info icon next to label`,table:{category:`Tooltip`}},tooltipText:{name:`Tooltip text`,control:`text`,description:`Tooltip content (dialog coming soon)`,table:{category:`Tooltip`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects typography)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.placeholder&&r.push(`placeholder="${n.placeholder}"`),n.value&&r.push(`value="${n.value}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.name&&r.push(`name="${n.name}"`),n.state&&n.state!=="default"&&r.push(`state="${n.state}"`),n.showTooltip&&r.push(`show-tooltip`),n.tooltipText&&n.showTooltip&&r.push(`tooltip-text="${n.tooltipText}"`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.size!==`md`&&r.push(`size="${n.size}"`),n.disabled&&r.push(`disabled`),n.readonly&&r.push(`readonly`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-select\n  ${r.join(`
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
    `}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Select</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A single-selection dropdown using the native &lt;select&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, and integrates with forms.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Provide a label and options array. The select fills its container width by default.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="State"
          .options=\${stateOptions}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the select.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="State"
          helper-text="Select your state of residence."
          .options=\${stateOptions}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="\${t.h2}">With tooltip</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Field -->
      <h2 style="\${t.h2}">Required field</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-select 
          label="State of residence"
          required
          .options=\${stateOptions}
        ></mms-select>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Readonly State -->
      <h2 style="\${t.h2}">Readonly state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled State -->
      <h2 style="\${t.h2}">Disabled state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Disabled prevents all interaction and dims the appearance.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size Variants -->
      <h2 style="\${t.h2}">Size variants</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Three sizes are available: <code style="\${t.monoSm}">sm</code>, <code style="\${t.monoSm}">md</code> (default), and <code style="\${t.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px; margin-bottom: 2rem;">
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Width Behavior -->
      <h2 style="\${t.h2}">Width behavior</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Select is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <p style="\${t.caption} margin-bottom: 1rem;"><strong>Full-width (default)</strong></p>
        <mms-select 
          label="Full width select"
          .options=\${stateOptions}
        ></mms-select>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="\${t.caption} margin-bottom: 1rem;"><strong>Grid column 1</strong></p>
          <mms-select 
            label="State"
            .options=\${stateOptions}
          ></mms-select>
        </div>
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="\${t.caption} margin-bottom: 1rem;"><strong>Grid column 2</strong></p>
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

      <div style="width: 200px; background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <p style="\${t.caption} margin-bottom: 0.25rem;"><strong>Narrow container (200px)</strong></p>
        <p style="\${t.caption} opacity: 0.7; margin-bottom: 1rem;">Sidebars, filter drawers, compact dialogs</p>
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Compact Density -->
      <h2 style="\${t.h2}">Compact density</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">data-density="compact"</code> for reduced padding. 
        Useful for footer/header contexts or dense UI.
      </p>

      <div style="display: flex; gap: 2rem; max-width: 600px; margin-bottom: 2rem;">
        <div style="flex: 1;">
          <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>Default</strong></p>
          <mms-select 
            label="State"
            .options=\${stateOptions}
          ></mms-select>
        </div>
        <div style="flex: 1;">
          <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>Compact</strong></p>
          <mms-select 
            label="State"
            data-density="compact"
            .options=\${stateOptions}
          ></mms-select>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>
      
      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Why native &lt;select&gt;?</strong> Custom dropdown implementations (listbox + button) require extensive ARIA wiring and 
          often fail edge cases with screen readers. Native &lt;select&gt; guarantees correct behavior across all assistive technologies 
          with zero custom ARIA — the browser handles announcements, focus, and keyboard navigation.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['select'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, current value (or "blank"), and "combo box"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="\${t.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="\${t.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: 0.5rem;"><strong>Selection:</strong> Announces newly selected option as user navigates with arrow keys</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the select</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Open dropdown menu (behavior varies by browser/OS)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Navigate between options (selects immediately on some platforms)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jump to first / last option</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close dropdown without changing selection</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;">Type character(s)</td>
            <td style="padding: 0.5rem 0.75rem;">Jump to first option starting with typed characters (native type-ahead)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
      options: ['default', 'maximus', 'va-gov', 'uss-oh-dvs'],
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
}`,..._.parameters?.docs?.source}}},v=[`Overview`,`PlaygroundStory`]}));y();export{g as Overview,_ as PlaygroundStory,v as __namedExportsOrder,d as default,y as n,u as t};