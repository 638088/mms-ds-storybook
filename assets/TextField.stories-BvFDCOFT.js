import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-CBo78ikN.js";import{a,o,r as s,t as c}from"./a11y-outcome-CiARakld.js";import{t as l}from"./mms-text-field.component-DW8G20rj.js";var u=t({Overview:()=>g,PlaygroundStory:()=>_,__namedExportsOrder:()=>v,default:()=>d}),d,f,p,m,h,g,_,v,y=e((()=>{i(),l(),a(),c(),d={title:`Forms/Text Field`,tags:[`!autodocs`]},f={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},p=`680px`,m=`960px`,h=`.at.bank.barcode.bell.briefcase.buildings.calendar.camera.check.clock.credit-card.download.envelope.eye.eye-closed.file.folder.funnel.gear.globe.hash.heart.identification-badge.identification-card.image.info.key.link.lock.magnifying-glass.map-pin.minus.pencil.percent.phone.plus.qr-code.question.shield.sliders.star.tag.trash.upload.user.user-circle.warning.wrench`.split(`.`),g={name:`Overview`,render:()=>r`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${m}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${f.h1}">Text Field</h1>
      <p style="${f.body} opacity: 0.85; max-width: ${p}; margin-bottom: 2rem;">
        A single-line text input using the native &lt;input&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, masks, and integrates with forms.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${f.h2}">Basic usage</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Provide a label and optional placeholder. The text field fills its container width by default.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Full name"
          placeholder="Enter your full name"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="${f.h2}">With helper text</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the input.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Email address"
          placeholder="you@example.com"
          helper-text="We'll never share your email with anyone."
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Field -->
      <h2 style="${f.h2}">Required field</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        The <code style="${f.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Social Security Number"
          placeholder="XXX-XX-XXXX"
          required
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="${f.h2}">Error state</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        The <code style="${f.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Email address"
          value="invalid-email"
          error
          error-text="Please enter a valid email address."
          required
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Readonly State -->
      <h2 style="${f.h2}">Readonly state</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Case number"
          value="MC-2026-001234"
          readonly
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled State -->
      <h2 style="${f.h2}">Disabled state</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Disabled prevents any interaction and dims the appearance.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Account ID"
          value="ACC-99999"
          disabled
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="${f.h2}">With tooltip</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Date of birth"
          placeholder="MM/DD/YYYY"
          show-tooltip
          tooltip-text="Your date of birth is used to verify your identity."
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Clear Button -->
      <h2 style="${f.h2}">Clear button</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        The <code style="${f.monoSm}">clear-button</code> prop shows a clear icon when the field has a value.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Search"
          placeholder="Search..."
          value="Medicaid enrollment"
          clear-button
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Character Counter -->
      <h2 style="${f.h2}">Character counter</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Use <code style="${f.monoSm}">show-character-counter</code> with <code style="${f.monoSm}">max-length</code> to show remaining characters.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Notes"
          placeholder="Add a note..."
          value="This is a sample note"
          show-character-counter
          max-length="100"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="${f.h2}">Sizes</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Three sizes available: <code style="${f.monoSm}">sm</code>, <code style="${f.monoSm}">md</code> (default), and <code style="${f.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field label="Small" placeholder="Size sm" size="sm"></mms-text-field>
        <mms-text-field label="Medium" placeholder="Size md" size="md"></mms-text-field>
        <mms-text-field label="Large" placeholder="Size lg" size="lg"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           MASKS
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${f.h2}">Email mask</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Shows an email icon prefix and sets <code style="${f.monoSm}">type="email"</code> for mobile keyboards.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Email"
          mask="email"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${f.h2}">Phone number mask</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Shows country code prefix and auto-formats the number based on locale.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <mms-text-field label="US Phone" mask="phone-number" phone-locale="US"></mms-text-field>
        <mms-text-field label="UK Phone" mask="phone-number" phone-locale="UK"></mms-text-field>
        <mms-text-field label="France Phone" mask="phone-number" phone-locale="FR"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${f.h2}">Currency mask</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Shows currency symbol prefix, right-aligns text, and formats with comma separators.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <mms-text-field label="USD Amount" mask="currency" currency="USD"></mms-text-field>
        <mms-text-field label="EUR Amount" mask="currency" currency="EUR"></mms-text-field>
        <mms-text-field label="GBP Amount" mask="currency" currency="GBP"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${f.h2}">Protected field (password)</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Shows password toggle icon. Click to reveal/hide the password.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Password"
          mask="protected-field"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           ICONS
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${f.h2}">Icons</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Use <code style="${f.monoSm}">prefix-icon</code> and <code style="${f.monoSm}">suffix-icon</code> 
        to add visual context. Icons are from the system icon library.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <mms-text-field 
          label="Search"
          placeholder="Search..."
          prefix-icon="magnifying-glass"
        ></mms-text-field>
        <mms-text-field 
          label="Username"
          placeholder="Enter username"
          prefix-icon="user"
        ></mms-text-field>
        <mms-text-field 
          label="Website"
          placeholder="https://example.com"
          prefix-icon="globe"
          suffix-icon="link"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           WIDTH BEHAVIOR
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${f.h2}">Width behavior</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Text Field is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <p style="${f.caption} margin-bottom: 1rem;"><strong>Full-width (default)</strong></p>
        <mms-text-field 
          label="Full width input"
          placeholder="Fills container"
        ></mms-text-field>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="${f.caption} margin-bottom: 1rem;"><strong>Grid column 1</strong></p>
          <mms-text-field 
            label="First name"
            placeholder="Enter first name"
          ></mms-text-field>
        </div>
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="${f.caption} margin-bottom: 1rem;"><strong>Grid column 2</strong></p>
          <mms-text-field 
            label="Last name"
            placeholder="Enter last name"
          ></mms-text-field>
        </div>
      </div>

      <div style="width: 200px; background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <p style="${f.caption} margin-bottom: 0.25rem;"><strong>Narrow container (200px)</strong></p>
        <p style="${f.caption} opacity: 0.7; margin-bottom: 1rem;">Sidebars, filter drawers, compact dialogs</p>
        <mms-text-field 
          label="Zip code"
          placeholder="12345"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           DENSITY
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${f.h2}">Compact density</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Use <code style="${f.monoSm}">data-density="compact"</code> for reduced padding in data-dense interfaces.
      </p>

      <div data-density="compact" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field label="First name" placeholder="Enter first name" data-density="compact"></mms-text-field>
        <mms-text-field label="Last name" placeholder="Enter last name" data-density="compact"></mms-text-field>
        <mms-text-field label="Email" placeholder="Enter email" data-density="compact"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${f.h2}">Accessibility</h2>
      
      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${f.bodySm} margin: 0;">
          <strong>Why native &lt;input&gt;?</strong> Custom text input implementations require extensive ARIA wiring and 
          often fail edge cases with screen readers. Native &lt;input&gt; guarantees correct behavior across all assistive technologies 
          with zero custom ARIA — the browser handles announcements, focus, and keyboard navigation.
        </p>
      </div>

      <h3 style="${f.h3}">WCAG 2.2 AA Compliance</h3>
      ${s(o[`text-field`].rows)}

      <h3 style="${f.h3}">Screen Reader Behavior</h3>
      <ul style="${f.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, current value (or "blank"), and input type (e.g., "edit text")</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="${f.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="${f.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: 0.5rem;"><strong>Password:</strong> Announces "password" input type; toggle button announces show/hide state</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the input (and to action buttons if present)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move cursor within text</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jump to beginning / end of text</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Select text character by character</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Cmd/Ctrl</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">A</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Select all text</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Submit form (when inside a form element)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},_={name:`Playground`,tags:[`!dev`],decorators:[e=>r`
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 2rem;
          "
        >
          <div style="width: 320px;">
            ${e()}
          </div>
        </div>
      `],argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Text and padding size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`filled`],description:`Visual state (for documentation preview)`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction, dims appearance`,table:{category:`Visual`}},readonly:{name:`Readonly`,control:`boolean`,description:`Shows value but prevents changes`,table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Label text displayed above the input`,table:{category:`Content`}},placeholder:{name:`Placeholder`,control:`text`,description:`Placeholder shown when no value`,table:{category:`Content`}},helperText:{name:`Helper text`,control:`text`,description:`Supplementary guidance below the input`,table:{category:`Content`}},prefixIcon:{name:`Prefix icon`,control:`select`,options:h,description:`Icon name for left side of input. Any valid mms-icon name works (1500+ available).`,table:{category:`Content`}},suffixIcon:{name:`Suffix icon`,control:`select`,options:h,description:`Icon name for right side of input. Any valid mms-icon name works (1500+ available).`,table:{category:`Content`}},clearButton:{name:`Clear button`,control:`boolean`,description:`Shows clear (×) button when has value`,table:{category:`Content`}},mask:{name:`Mask`,control:`select`,options:[`none`,`email`,`phone-number`,`currency`,`numeral`,`measurement`,`count`,`protected-field`],description:`Input formatting mask`,table:{category:`Mask`}},phoneLocale:{name:`Phone locale`,control:`select`,options:[`US`,`UK`,`FR`,`MX`,`AU`,`IN`,`JP`,`KR`,`SG`,`HK`,`TH`,`MY`,`GR`],description:`Country code for phone mask`,table:{category:`Mask`}},currency:{name:`Currency`,control:`select`,options:[`USD`,`EUR`,`GBP`,`JPY`,`CNY`,`AUD`,`CAD`,`CHF`,`HKD`,`SGD`,`INR`,`KRW`,`MXN`],description:`Currency symbol for currency mask`,table:{category:`Mask`}},measurementUnit:{name:`Measurement unit`,control:`text`,description:`Unit suffix displayed after the value. Only applies when mask="measurement".`,table:{category:`Mask`}},name:{name:`Name`,control:`text`,description:"HTML `name` attribute — the key sent with form data on submit.",table:{category:`Form`}},value:{name:`Value`,control:`text`,description:`Current input value.`,table:{category:`Form`}},inputType:{name:`Input type`,control:`select`,options:[`text`,`email`,`password`,`tel`,`url`],description:`HTML input type (overridden by mask)`,table:{category:`Form`}},autocomplete:{name:`Autocomplete`,control:`text`,description:`Browser autocomplete hint (e.g., "email", "tel")`,table:{category:`Form`}},required:{name:`Required`,control:`boolean`,description:`Shows asterisk indicator on label`,table:{category:`Validation`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and message`,table:{category:`Validation`}},errorText:{name:`Error text`,control:`text`,description:`Error message when error is true`,table:{category:`Validation`}},maxLength:{name:`Max length`,control:`number`,description:`Maximum character limit (0 = unlimited)`,table:{category:`Validation`}},showCharacterCounter:{name:`Show character counter`,control:`boolean`,description:`Displays remaining characters`,table:{category:`Validation`}},showTooltip:{name:`Show tooltip`,control:`boolean`,description:`Show info icon next to label`,table:{category:`Tooltip`}},tooltipText:{name:`Tooltip text`,control:`text`,description:`Tooltip content (dialog coming soon)`,table:{category:`Tooltip`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects typography)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},args:{size:`md`,state:`default`,disabled:!1,readonly:!1,label:`Label`,placeholder:``,helperText:``,prefixIcon:``,suffixIcon:``,clearButton:!1,mask:`none`,phoneLocale:`US`,currency:`USD`,measurementUnit:``,name:``,value:``,inputType:`text`,autocomplete:``,required:!1,error:!1,errorText:``,maxLength:0,showCharacterCounter:!1,showTooltip:!1,tooltipText:``,theme:`maximus`,density:`default`},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.placeholder&&r.push(`placeholder="${n.placeholder}"`),n.value&&r.push(`value="${n.value}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.name&&r.push(`name="${n.name}"`),n.inputType!==`text`&&r.push(`type="${n.inputType}"`),n.autocomplete&&r.push(`autocomplete="${n.autocomplete}"`),n.state&&n.state!=="default"&&r.push(`state="${n.state}"`),n.mask&&n.mask!==`none`&&r.push(`mask="${n.mask}"`),n.mask===`phone-number`&&n.phoneLocale!==`US`&&r.push(`phone-locale="${n.phoneLocale}"`),n.mask===`currency`&&n.currency!==`USD`&&r.push(`currency="${n.currency}"`),n.mask===`measurement`&&n.measurementUnit&&r.push(`measurement-unit="${n.measurementUnit}"`),n.prefixIcon&&r.push(`prefix-icon="${n.prefixIcon}"`),n.suffixIcon&&r.push(`suffix-icon="${n.suffixIcon}"`),n.clearButton&&r.push(`clear-button`),n.showTooltip&&r.push(`show-tooltip`),n.tooltipText&&n.showTooltip&&r.push(`tooltip-text="${n.tooltipText}"`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.maxLength&&n.maxLength>0&&r.push(`max-length="${n.maxLength}"`),n.showCharacterCounter&&r.push(`show-character-counter`),n.size!==`md`&&r.push(`size="${n.size}"`),n.disabled&&r.push(`disabled`),n.readonly&&r.push(`readonly`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-text-field${r.length>0?`\n  ${r.join(`
  `)}\n`:``}></mms-text-field>`}}}},render:e=>r`
    <mms-text-field
      label=${e.label||n}
      placeholder=${e.placeholder||n}
      value=${e.value||n}
      helper-text=${e.helperText||n}
      name=${e.name||n}
      type=${e.inputType||n}
      autocomplete=${e.autocomplete||n}
      state=${e.state||n}
      mask=${e.mask||n}
      phone-locale=${e.phoneLocale||n}
      currency=${e.currency||n}
      measurement-unit=${e.measurementUnit||n}
      prefix-icon=${e.prefixIcon||n}
      suffix-icon=${e.suffixIcon||n}
      ?clear-button=${e.clearButton}
      ?show-tooltip=${e.showTooltip}
      tooltip-text=${e.tooltipText||n}
      ?error=${e.error}
      error-text=${e.errorText||n}
      ?required=${e.required}
      max-length=${e.maxLength||n}
      ?show-character-counter=${e.showCharacterCounter}
      size=${e.size||n}
      ?disabled=${e.disabled}
      ?readonly=${e.readonly}
      data-density=${e.density===`compact`?`compact`:n}
    ></mms-text-field>
  `},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Text Field</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A single-line text input using the native &lt;input&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, masks, and integrates with forms.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Provide a label and optional placeholder. The text field fills its container width by default.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Full name"
          placeholder="Enter your full name"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Helper text provides additional guidance below the input.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Email address"
          placeholder="you@example.com"
          helper-text="We'll never share your email with anyone."
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Required Field -->
      <h2 style="\${t.h2}">Required field</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Social Security Number"
          placeholder="XXX-XX-XXXX"
          required
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Email address"
          value="invalid-email"
          error
          error-text="Please enter a valid email address."
          required
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Readonly State -->
      <h2 style="\${t.h2}">Readonly state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Case number"
          value="MC-2026-001234"
          readonly
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Disabled State -->
      <h2 style="\${t.h2}">Disabled state</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Disabled prevents any interaction and dims the appearance.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Account ID"
          value="ACC-99999"
          disabled
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With Tooltip -->
      <h2 style="\${t.h2}">With tooltip</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        An info icon can be shown next to the label. <em style="opacity: 0.7;">(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Date of birth"
          placeholder="MM/DD/YYYY"
          show-tooltip
          tooltip-text="Your date of birth is used to verify your identity."
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Clear Button -->
      <h2 style="\${t.h2}">Clear button</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">clear-button</code> prop shows a clear icon when the field has a value.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Search"
          placeholder="Search..."
          value="Medicaid enrollment"
          clear-button
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Character Counter -->
      <h2 style="\${t.h2}">Character counter</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">show-character-counter</code> with <code style="\${t.monoSm}">max-length</code> to show remaining characters.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Notes"
          placeholder="Add a note..."
          value="This is a sample note"
          show-character-counter
          max-length="100"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Three sizes available: <code style="\${t.monoSm}">sm</code>, <code style="\${t.monoSm}">md</code> (default), and <code style="\${t.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field label="Small" placeholder="Size sm" size="sm"></mms-text-field>
        <mms-text-field label="Medium" placeholder="Size md" size="md"></mms-text-field>
        <mms-text-field label="Large" placeholder="Size lg" size="lg"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           MASKS
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Email mask</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Shows an email icon prefix and sets <code style="\${t.monoSm}">type="email"</code> for mobile keyboards.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Email"
          mask="email"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Phone number mask</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Shows country code prefix and auto-formats the number based on locale.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <mms-text-field label="US Phone" mask="phone-number" phone-locale="US"></mms-text-field>
        <mms-text-field label="UK Phone" mask="phone-number" phone-locale="UK"></mms-text-field>
        <mms-text-field label="France Phone" mask="phone-number" phone-locale="FR"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Currency mask</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Shows currency symbol prefix, right-aligns text, and formats with comma separators.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <mms-text-field label="USD Amount" mask="currency" currency="USD"></mms-text-field>
        <mms-text-field label="EUR Amount" mask="currency" currency="EUR"></mms-text-field>
        <mms-text-field label="GBP Amount" mask="currency" currency="GBP"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Protected field (password)</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Shows password toggle icon. Click to reveal/hide the password.
      </p>

      <div style="margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field 
          label="Password"
          mask="protected-field"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           ICONS
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Icons</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">prefix-icon</code> and <code style="\${t.monoSm}">suffix-icon</code> 
        to add visual context. Icons are from the system icon library.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <mms-text-field 
          label="Search"
          placeholder="Search..."
          prefix-icon="magnifying-glass"
        ></mms-text-field>
        <mms-text-field 
          label="Username"
          placeholder="Enter username"
          prefix-icon="user"
        ></mms-text-field>
        <mms-text-field 
          label="Website"
          placeholder="https://example.com"
          prefix-icon="globe"
          suffix-icon="link"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           WIDTH BEHAVIOR
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Width behavior</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Text Field is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <p style="\${t.caption} margin-bottom: 1rem;"><strong>Full-width (default)</strong></p>
        <mms-text-field 
          label="Full width input"
          placeholder="Fills container"
        ></mms-text-field>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="\${t.caption} margin-bottom: 1rem;"><strong>Grid column 1</strong></p>
          <mms-text-field 
            label="First name"
            placeholder="Enter first name"
          ></mms-text-field>
        </div>
        <div style="background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px;">
          <p style="\${t.caption} margin-bottom: 1rem;"><strong>Grid column 2</strong></p>
          <mms-text-field 
            label="Last name"
            placeholder="Enter last name"
          ></mms-text-field>
        </div>
      </div>

      <div style="width: 200px; background: rgba(128,128,128,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <p style="\${t.caption} margin-bottom: 0.25rem;"><strong>Narrow container (200px)</strong></p>
        <p style="\${t.caption} opacity: 0.7; margin-bottom: 1rem;">Sidebars, filter drawers, compact dialogs</p>
        <mms-text-field 
          label="Zip code"
          placeholder="12345"
        ></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════
           DENSITY
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Compact density</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">data-density="compact"</code> for reduced padding in data-dense interfaces.
      </p>

      <div data-density="compact" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem; max-width: 320px;">
        <mms-text-field label="First name" placeholder="Enter first name" data-density="compact"></mms-text-field>
        <mms-text-field label="Last name" placeholder="Enter last name" data-density="compact"></mms-text-field>
        <mms-text-field label="Email" placeholder="Enter email" data-density="compact"></mms-text-field>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>
      
      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Why native &lt;input&gt;?</strong> Custom text input implementations require extensive ARIA wiring and 
          often fail edge cases with screen readers. Native &lt;input&gt; guarantees correct behavior across all assistive technologies 
          with zero custom ARIA — the browser handles announcements, focus, and keyboard navigation.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['text-field'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label, current value (or "blank"), and input type (e.g., "edit text")</li>
        <li style="margin-bottom: 0.5rem;"><strong>Required:</strong> Announces "required" when <code style="\${t.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> Immediately announces error message via <code style="\${t.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: 0.5rem;"><strong>Password:</strong> Announces "password" input type; toggle button announces show/hide state</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the input (and to action buttons if present)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move cursor within text</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jump to beginning / end of text</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Select text character by character</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Cmd/Ctrl</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">A</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Select all text</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Submit form (when inside a form element)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  decorators: [(story: () => unknown) => {
    return html\`
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 2rem;
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
      description: 'Label text displayed above the input',
      table: {
        category: 'Content'
      }
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder shown when no value',
      table: {
        category: 'Content'
      }
    },
    helperText: {
      name: 'Helper text',
      control: 'text',
      description: 'Supplementary guidance below the input',
      table: {
        category: 'Content'
      }
    },
    prefixIcon: {
      name: 'Prefix icon',
      control: 'select',
      options: iconOptions,
      description: 'Icon name for left side of input. Any valid mms-icon name works (1500+ available).',
      table: {
        category: 'Content'
      }
    },
    suffixIcon: {
      name: 'Suffix icon',
      control: 'select',
      options: iconOptions,
      description: 'Icon name for right side of input. Any valid mms-icon name works (1500+ available).',
      table: {
        category: 'Content'
      }
    },
    clearButton: {
      name: 'Clear button',
      control: 'boolean',
      description: 'Shows clear (×) button when has value',
      table: {
        category: 'Content'
      }
    },
    // ── Mask ──────────────────────────────────────────────────
    mask: {
      name: 'Mask',
      control: 'select',
      options: ['none', 'email', 'phone-number', 'currency', 'numeral', 'measurement', 'count', 'protected-field'],
      description: 'Input formatting mask',
      table: {
        category: 'Mask'
      }
    },
    phoneLocale: {
      name: 'Phone locale',
      control: 'select',
      options: ['US', 'UK', 'FR', 'MX', 'AU', 'IN', 'JP', 'KR', 'SG', 'HK', 'TH', 'MY', 'GR'],
      description: 'Country code for phone mask',
      table: {
        category: 'Mask'
      }
    },
    currency: {
      name: 'Currency',
      control: 'select',
      options: ['USD', 'EUR', 'GBP', 'JPY', 'CNY', 'AUD', 'CAD', 'CHF', 'HKD', 'SGD', 'INR', 'KRW', 'MXN'],
      description: 'Currency symbol for currency mask',
      table: {
        category: 'Mask'
      }
    },
    measurementUnit: {
      name: 'Measurement unit',
      control: 'text',
      description: 'Unit suffix displayed after the value. Only applies when mask="measurement".',
      table: {
        category: 'Mask'
      }
    },
    // ── Form ──────────────────────────────────────────────────
    name: {
      name: 'Name',
      control: 'text',
      description: 'HTML \`name\` attribute — the key sent with form data on submit.',
      table: {
        category: 'Form'
      }
    },
    value: {
      name: 'Value',
      control: 'text',
      description: 'Current input value.',
      table: {
        category: 'Form'
      }
    },
    inputType: {
      name: 'Input type',
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url'],
      description: 'HTML input type (overridden by mask)',
      table: {
        category: 'Form'
      }
    },
    autocomplete: {
      name: 'Autocomplete',
      control: 'text',
      description: 'Browser autocomplete hint (e.g., "email", "tel")',
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
    maxLength: {
      name: 'Max length',
      control: 'number',
      description: 'Maximum character limit (0 = unlimited)',
      table: {
        category: 'Validation'
      }
    },
    showCharacterCounter: {
      name: 'Show character counter',
      control: 'boolean',
      description: 'Displays remaining characters',
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
  args: {
    // Visual
    size: 'md',
    state: 'default',
    disabled: false,
    readonly: false,
    // Content
    label: 'Label',
    placeholder: '',
    helperText: '',
    prefixIcon: '',
    suffixIcon: '',
    clearButton: false,
    // Mask
    mask: 'none',
    phoneLocale: 'US',
    currency: 'USD',
    measurementUnit: '',
    // Form
    name: '',
    value: '',
    inputType: 'text',
    autocomplete: '',
    // Validation
    required: false,
    error: false,
    errorText: '',
    maxLength: 0,
    showCharacterCounter: false,
    // Tooltip
    showTooltip: false,
    tooltipText: '',
    // Global
    theme: 'maximus',
    density: 'default'
  },
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string | boolean | number>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.label) attrs.push(\`label="\${a.label}"\`);
          if (a.placeholder) attrs.push(\`placeholder="\${a.placeholder}"\`);
          if (a.value) attrs.push(\`value="\${a.value}"\`);
          if (a.helperText) attrs.push(\`helper-text="\${a.helperText}"\`);
          if (a.name) attrs.push(\`name="\${a.name}"\`);
          if (a.inputType !== 'text') attrs.push(\`type="\${a.inputType}"\`);
          if (a.autocomplete) attrs.push(\`autocomplete="\${a.autocomplete}"\`);
          if (a.state && a.state !== 'default') attrs.push(\`state="\${a.state}"\`);
          if (a.mask && a.mask !== 'none') attrs.push(\`mask="\${a.mask}"\`);
          if (a.mask === 'phone-number' && a.phoneLocale !== 'US') attrs.push(\`phone-locale="\${a.phoneLocale}"\`);
          if (a.mask === 'currency' && a.currency !== 'USD') attrs.push(\`currency="\${a.currency}"\`);
          if (a.mask === 'measurement' && a.measurementUnit) attrs.push(\`measurement-unit="\${a.measurementUnit}"\`);
          if (a.prefixIcon) attrs.push(\`prefix-icon="\${a.prefixIcon}"\`);
          if (a.suffixIcon) attrs.push(\`suffix-icon="\${a.suffixIcon}"\`);
          if (a.clearButton) attrs.push('clear-button');
          if (a.showTooltip) attrs.push('show-tooltip');
          if (a.tooltipText && a.showTooltip) attrs.push(\`tooltip-text="\${a.tooltipText}"\`);
          if (a.error) attrs.push('error');
          if (a.errorText && a.error) attrs.push(\`error-text="\${a.errorText}"\`);
          if (a.required) attrs.push('required');
          if (a.maxLength && a.maxLength > 0) attrs.push(\`max-length="\${a.maxLength}"\`);
          if (a.showCharacterCounter) attrs.push('show-character-counter');
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.disabled) attrs.push('disabled');
          if (a.readonly) attrs.push('readonly');
          if (a.density === 'compact') attrs.push('data-density="compact"');
          const attrStr = attrs.length > 0 ? \`\\n  \${attrs.join('\\n  ')}\\n\` : '';
          return \`<mms-text-field\${attrStr}></mms-text-field>\`;
        }
      }
    }
  },
  render: (args: Record<string, string | boolean | number>) => html\`
    <mms-text-field
      label=\${args.label || nothing}
      placeholder=\${args.placeholder || nothing}
      value=\${args.value || nothing}
      helper-text=\${args.helperText || nothing}
      name=\${args.name || nothing}
      type=\${args.inputType || nothing}
      autocomplete=\${args.autocomplete || nothing}
      state=\${args.state || nothing}
      mask=\${args.mask || nothing}
      phone-locale=\${args.phoneLocale || nothing}
      currency=\${args.currency || nothing}
      measurement-unit=\${args.measurementUnit || nothing}
      prefix-icon=\${args.prefixIcon || nothing}
      suffix-icon=\${args.suffixIcon || nothing}
      ?clear-button=\${args.clearButton}
      ?show-tooltip=\${args.showTooltip}
      tooltip-text=\${args.tooltipText || nothing}
      ?error=\${args.error}
      error-text=\${args.errorText || nothing}
      ?required=\${args.required}
      max-length=\${args.maxLength || nothing}
      ?show-character-counter=\${args.showCharacterCounter}
      size=\${args.size || nothing}
      ?disabled=\${args.disabled}
      ?readonly=\${args.readonly}
      data-density=\${args.density === 'compact' ? 'compact' : nothing}
    ></mms-text-field>
  \`
}`,..._.parameters?.docs?.source}}},v=[`Overview`,`PlaygroundStory`]}));y();export{g as Overview,_ as PlaygroundStory,v as __namedExportsOrder,d as default,y as n,u as t};