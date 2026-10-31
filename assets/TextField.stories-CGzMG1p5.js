import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{n as a,r as o}from"./wcag-coverage-DNhlI7v1.js";import{t as s}from"./mms-inline-alert.component-Byp5LNfw.js";import{a as c,c as l,d as u,i as d,n as f,o as p,r as m,u as h}from"./doc-styles-DkvR_Qyb.js";import{a as g,n as _}from"./a11y-outcome-BzyoULsn.js";import{t as v}from"./mms-text-field.component-DPUzfOvQ.js";var y=t({Overview:()=>j,PasswordStrength:()=>M,PlaygroundStory:()=>N,__namedExportsOrder:()=>P,default:()=>C});function b(e){let t=Array.isArray(e)?e.map(String):typeof e==`string`?e.split(/[\s,]+/):[];return[`number`,`special`,`uppercase`,`lowercase`].filter(e=>t.includes(e))}function x(e){let t=Array.isArray(e)?e.map(String):e?[String(e)]:[];return Object.keys(O).filter(e=>t.includes(e))}function S(e){let t=x(e),n=t.join(`|`),r=k.get(n);return r||(r=t.map(e=>O[e].criterion),k.set(n,r)),r}var C,w,T,E,D,O,k,A,j,M,N,P,F=e((()=>{i(),v(),s(),a(),_(),l(),C={title:`Forms/Text Field`,tags:[`!autodocs`]},w={id:`no-username`,label:`Does not contain your username (jchung)`,test:e=>!e.toLowerCase().includes(`jchung`)},T={id:`not-common`,label:`Not a commonly used password`,debounce:300,test:e=>new Promise(t=>setTimeout(()=>t(![`password123`,`qwerty123456`,`letmein123456`].includes(e.toLowerCase())),600))},E={id:`breach-list`,label:`Not in a breached-password list (demo: the check fails)`,debounce:300,test:()=>new Promise((e,t)=>setTimeout(()=>t(Error(`offline`)),600))},D=[w,T],O={"Username check":{criterion:w,source:`{ id: 'no-username', label: 'Does not contain your username', test: (value) => !value.toLowerCase().includes(username) },`},"Common password check":{criterion:T,source:`{ id: 'not-common', label: 'Not a commonly used password', debounce: 300, test: async (value) => !(await isOnBlocklist(value)) },`},"Check fails (simulated outage)":{criterion:E,source:`{ id: 'breach-list', label: 'Not in a breached-password list', debounce: 300, test: async (value) => { throw new Error('offline'); } }, // a check that throws or rejects counts as not met`}},k=new Map,A=`.at.bank.barcode.bell.briefcase.buildings.calendar.camera.check.clock.credit-card.download.envelope.eye.eye-closed.file.folder.funnel.gear.globe.hash.heart.identification-badge.identification-card.image.info.key.link.lock.magnifying-glass.map-pin.minus.pencil.percent.phone.plus.qr-code.question.shield.sliders.star.tag.trash.upload.user.user-circle.warning.wrench`.split(`.`),j={name:`Overview`,render:()=>r`
    <div data-theme=${m} data-mode=${p()} style=${f}>

      <!-- Header -->
      <h1 style="${u.h1}">Text Field</h1>
      <p style="${u.body} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        A single-line text input using the native &lt;input&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, masks, and integrates with forms.
      </p>

      <hr style="${c.divider}" />

      <!-- Basic Usage -->
      <h2 style="${u.h2}">Basic usage</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Provide a label and optional placeholder. The text field fills its container width by default.
      </p>

      <div style="margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Full name"
          placeholder="Enter your full name"
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- With Helper Text -->
      <h2 style="${u.h2}">With helper text</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Helper text provides additional guidance below the input.
      </p>

      <div style="margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Email address"
          placeholder="you@example.com"
          helper-text="We'll never share your email with anyone."
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- Required Field -->
      <h2 style="${u.h2}">Required field</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        The <code style="${u.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Social Security Number"
          placeholder="XXX-XX-XXXX"
          required
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- Error State -->
      <h2 style="${u.h2}">Error state</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        The <code style="${u.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Email address"
          value="invalid-email"
          error
          error-text="Please enter a valid email address."
          required
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- Readonly State -->
      <h2 style="${u.h2}">Readonly state</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Case number"
          value="MC-2026-001234"
          readonly
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- Disabled State -->
      <h2 style="${u.h2}">Disabled state</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Disabled prevents any interaction and dims the appearance.
      </p>

      <div style="margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Account ID"
          value="ACC-99999"
          disabled
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- With Tooltip -->
      <h2 style="${u.h2}">With tooltip</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        An info icon can be shown next to the label. <em>(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Date of birth"
          placeholder="MM/DD/YYYY"
          show-tooltip
          tooltip-text="Your date of birth is used to verify your identity."
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- Clear Button -->
      <h2 style="${u.h2}">Clear button</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        The <code style="${u.monoSm}">clear-button</code> prop shows a clear icon when the field has a value.
      </p>

      <div style="margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Search"
          placeholder="Search..."
          value="Medicaid enrollment"
          clear-button
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- Character Counter -->
      <h2 style="${u.h2}">Character counter</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Use <code style="${u.monoSm}">show-character-counter</code> with <code style="${u.monoSm}">max-length</code> to show remaining characters.
      </p>

      <div style="margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Notes"
          placeholder="Add a note..."
          value="This is a sample note"
          show-character-counter
          max-length="100"
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- Sizes -->
      <h2 style="${u.h2}">Sizes</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Three sizes available: <code style="${u.monoSm}">sm</code>, <code style="${u.monoSm}">md</code> (default), and <code style="${u.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${h.content}; margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field label="Small" placeholder="Size sm" size="sm"></mms-text-field>
        <mms-text-field label="Medium" placeholder="Size md" size="md"></mms-text-field>
        <mms-text-field label="Large" placeholder="Size lg" size="lg"></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════
           MASKS
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${u.h2}">Email mask</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Shows an email icon prefix and sets <code style="${u.monoSm}">type="email"</code> for mobile keyboards.
      </p>

      <div style="margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Email"
          mask="email"
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <h2 style="${u.h2}">Phone number mask</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Shows country code prefix and auto-formats the number based on locale.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: ${h.content}; margin-bottom: ${h.subsection};">
        <mms-text-field label="US Phone" mask="phone-number" phone-locale="US"></mms-text-field>
        <mms-text-field label="UK Phone" mask="phone-number" phone-locale="UK"></mms-text-field>
        <mms-text-field label="France Phone" mask="phone-number" phone-locale="FR"></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <h2 style="${u.h2}">Currency mask</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Shows currency symbol prefix, right-aligns text, and formats with comma separators.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: ${h.content}; margin-bottom: ${h.subsection};">
        <mms-text-field label="USD Amount" mask="currency" currency="USD"></mms-text-field>
        <mms-text-field label="EUR Amount" mask="currency" currency="EUR"></mms-text-field>
        <mms-text-field label="GBP Amount" mask="currency" currency="GBP"></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <h2 style="${u.h2}">Protected field (password)</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Shows password toggle icon. Click to reveal/hide the password. To show a strength meter and requirements
        while a user creates a password, see <strong>Password Strength</strong>.
      </p>

      <div style="margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Password"
          mask="protected-field"
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════
           ICONS
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${u.h2}">Icons</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Use <code style="${u.monoSm}">prefix-icon</code> and <code style="${u.monoSm}">suffix-icon</code> 
        to add visual context. Icons are from the system icon library.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: ${h.content}; margin-bottom: ${h.subsection};">
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

      <hr style="${c.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════
           WIDTH BEHAVIOR
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${u.h2}">Width behavior</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Text Field is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: ${h.content};">
        <p style="${u.caption} margin-bottom: ${h.content};"><strong>Full-width (default)</strong></p>
        <mms-text-field 
          label="Full width input"
          placeholder="Fills container"
        ></mms-text-field>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: ${h.content}; margin-bottom: ${h.content};">
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md);">
          <p style="${u.caption} margin-bottom: ${h.content};"><strong>Grid column 1</strong></p>
          <mms-text-field 
            label="First name"
            placeholder="Enter first name"
          ></mms-text-field>
        </div>
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md);">
          <p style="${u.caption} margin-bottom: ${h.content};"><strong>Grid column 2</strong></p>
          <mms-text-field 
            label="Last name"
            placeholder="Enter last name"
          ></mms-text-field>
        </div>
      </div>

      <div style="width: 200px; background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: ${h.subsection};">
        <p style="${u.caption} margin-bottom: var(--spacing-xs2);"><strong>Narrow container (200px)</strong></p>
        <p style="${u.caption} ${c.muted} margin-bottom: ${h.content};">Sidebars, filter drawers, compact dialogs</p>
        <mms-text-field 
          label="Zip code"
          placeholder="12345"
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════
           DENSITY
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${u.h2}">Compact density</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Use <code style="${u.monoSm}">data-density="compact"</code> for reduced padding in data-dense interfaces.
      </p>

      <div data-density="compact" style="display: flex; flex-direction: column; gap: ${h.content}; margin-bottom: ${h.subsection}; max-width: 320px;">
        <mms-text-field label="First name" placeholder="Enter first name" data-density="compact"></mms-text-field>
        <mms-text-field label="Last name" placeholder="Enter last name" data-density="compact"></mms-text-field>
        <mms-text-field label="Email" placeholder="Enter email" data-density="compact"></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <!-- Accessibility -->
      <h2 style="${u.h2}">Accessibility</h2>
      
      <div style="margin-bottom: ${h.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Why native &lt;input&gt;?"
          message="Custom text input implementations require extensive ARIA wiring and often fail edge cases with screen readers. Native &lt;input&gt; guarantees correct behavior across all assistive technologies with zero custom ARIA — the browser handles announcements, focus, and keyboard navigation."
        ></mms-inline-alert>
      </div>

      <h3 style="${u.h3}">WCAG 2.2 AA compliance</h3>
      ${g(o[`text-field`].rows)}

      <h3 style="${u.h3}">Screen reader behavior</h3>
      <ul style="${u.bodySm} ${c.muted} margin: 0 0 ${h.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${h.label};"><strong>Focus:</strong> Announces label, current value (or "blank"), and input type (e.g., "edit text")</li>
        <li style="margin-bottom: ${h.label};"><strong>Required:</strong> Announces "required" when <code style="${u.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: ${h.label};"><strong>Error:</strong> Immediately announces error message via <code style="${u.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: ${h.label};"><strong>Password:</strong> Announces "password" input type; toggle button announces show/hide state</li>
        <li><strong>Helper text:</strong> Read as part of field description via <code style="${u.monoSm}">aria-describedby</code></li>
      </ul>

      <h3 style="${u.h3}">Keyboard navigation</h3>
      <table style="${c.table}">
        <thead>
          <tr>
            <th style="${c.th} width: 140px;">Key</th>
            <th style="${c.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${c.td}"><kbd style="${c.kbd}">Tab</kbd></td>
            <td style="${c.td}">Move focus to / from the input (and to action buttons if present)</td>
          </tr>
          <tr>
            <td style="${c.td}"><kbd style="${c.kbd}">←</kbd> <kbd style="${c.kbd}">→</kbd></td>
            <td style="${c.td}">Move cursor within text</td>
          </tr>
          <tr>
            <td style="${c.td}"><kbd style="${c.kbd}">Home</kbd> / <kbd style="${c.kbd}">End</kbd></td>
            <td style="${c.td}">Jump to beginning / end of text</td>
          </tr>
          <tr>
            <td style="${c.td}"><kbd style="${c.kbd}">Shift</kbd> + <kbd style="${c.kbd}">←</kbd> <kbd style="${c.kbd}">→</kbd></td>
            <td style="${c.td}">Select text character by character</td>
          </tr>
          <tr>
            <td style="${c.td}"><kbd style="${c.kbd}">Cmd/Ctrl</kbd> + <kbd style="${c.kbd}">A</kbd></td>
            <td style="${c.td}">Select all text</td>
          </tr>
          <tr>
            <td style="${c.td}"><kbd style="${c.kbd}">Enter</kbd></td>
            <td style="${c.td}">Submit form (when inside a form element)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},M={name:`Password Strength`,render:()=>r`
    <div data-theme=${m} data-mode=${p()} style=${f}>

      <h1 style="${u.h1}">Password Strength</h1>
      <p style="${u.body} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Add <code style="${u.monoSm}">show-strength</code> to a password field when someone is <em>creating</em> a
        password. It shows a requirements checklist, and a strength meter once they start typing. It is off by default,
        and a sign-in field must not use it.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: ${h.content}; margin-bottom: ${h.subsection};">
        <mms-text-field
          label="Password (default)"
          mask="protected-field"
          show-strength
        ></mms-text-field>
        <mms-text-field
          label="Password (number and symbol required)"
          mask="protected-field"
          show-strength
          strength-rules="number special"
          .value=${`correct horse battery`}
        ></mms-text-field>
      </div>

      <hr style="${c.divider}" />

      <h2 style="${u.h2}">Built in</h2>
      <ul style="${u.bodySm} ${c.muted} margin: 0 0 ${h.subsection}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${h.label};"><strong>Length</strong> — the default and only requirement. The minimum is the target: Weak below it, Strong once it is met. Set a higher strong length if you want a Moderate step in between.</li>
        <li style="margin-bottom: ${h.label};"><strong>Optional rules</strong> — at least one number, special character (anything that is not a letter or number, so a space counts), uppercase letter or lowercase letter. Turn on only what your server enforces.</li>
        <li style="margin-bottom: ${h.label};"><strong>Strong cap</strong> — the label stays at Moderate while any requirement is unmet.</li>
        <li style="margin-bottom: ${h.label};"><strong>Checklist and meter</strong> — each item shows an icon and "met" or "not met" text, never colour alone. The checklist is visible before typing; the meter appears once something is typed.</li>
        <li><strong>Screen readers</strong> — the checklist is read as the field's description, and a polite status message announces a changed strength once typing pauses. Nothing is announced for an empty or pre-filled field, and the password is never read out.</li>
      </ul>

      <hr style="${c.divider}" />

      <h2 style="${u.h2}">Use it</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        Password strength is part of <code style="${u.monoSm}">mms-text-field</code>, so there is one tag to use and
        nothing extra to install or import.
      </p>

      <h3 style="${u.h3}">HTML</h3>
      <pre style="${c.pre} white-space: pre-wrap;">&lt;mms-text-field
  label="Password"
  mask="protected-field"
  show-strength
  strength-min-length="12"
  strength-rules="number special"
&gt;&lt;/mms-text-field&gt;</pre>

      <h3 style="${u.h3}">React</h3>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        Use the generated <code style="${u.monoSm}">MmsTextField</code>. Props are camelCase, and
        <code style="${u.monoSm}">strengthRules</code> takes an array.
      </p>
      <pre style="${c.pre} white-space: pre-wrap;">import { MmsTextField } from '@mms/design-system/react';

&lt;MmsTextField
  label="Password"
  mask="protected-field"
  showStrength
  strengthMinLength={12}
  strengthRules={['number', 'special']}
  strengthCriteria={criteria}
/&gt;</pre>

      <h3 style="${u.h3}">Everything together</h3>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Length, two rules and a custom requirement on one field. It is pre-filled, so the checklist and the Moderate cap
        show straight away: the password has a number but no special character.
      </p>
      <div style="max-width: 420px; margin-bottom: ${h.subsection};">
        <mms-text-field
          label="Password (12 characters, number, symbol, no username)"
          mask="protected-field"
          show-strength
          strength-min-length="12"
          strength-strong-length="16"
          strength-full-length="16"
          strength-rules="number special"
          .strengthCriteria=${[w]}
          .value=${`correcthorse7battery`}
        ></mms-text-field>
      </div>

      <h3 style="${u.h3}">In a sign-up form</h3>
      <pre style="${c.pre} white-space: pre-wrap;">&lt;form method="post" action="/sign-up"&gt;
  &lt;mms-text-field
    label="Create a password"
    name="password"
    mask="protected-field"
    autocomplete="new-password"
    required
    show-strength
  &gt;&lt;/mms-text-field&gt;
  &lt;button type="submit"&gt;Create account&lt;/button&gt;
&lt;/form&gt;</pre>
      <ul style="${u.bodySm} ${c.muted} margin: 0 0 ${h.subsection}; padding-left: var(--spacing-lg1); max-width: ${d};">
        <li style="margin-bottom: ${h.label};">The password is submitted under <code style="${u.monoSm}">name</code> like any form field. The checklist and meter are display only and are never submitted.</li>
        <li style="margin-bottom: ${h.label};"><code style="${u.monoSm}">autocomplete="new-password"</code> lets password managers offer to generate one.</li>
        <li>The checklist is guidance, not enforcement. Your server must still validate the password.</li>
      </ul>

      <hr style="${c.divider}" />

      <h2 style="${u.h2}">Configure</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        An <strong>attribute</strong> can be written in HTML. A <strong>property</strong> holds a function or an object,
        so it can only be set from JavaScript (or as a prop in React).
      </p>
      <table style="${c.table} margin-bottom: ${h.content};">
        <thead>
          <tr>
            <th style="${c.th} width: 210px;">Prop</th>
            <th style="${c.th} width: 100px;">Set as</th>
            <th style="${c.th}">What it does</th>
            <th style="${c.th} width: 90px;">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="${c.td}"><code style="${u.monoSm}">show-strength</code></td><td style="${c.td}">attribute</td><td style="${c.td}">Turns the feature on. Applies to password fields only.</td><td style="${c.td}">off</td></tr>
          <tr><td style="${c.td}"><code style="${u.monoSm}">strength-min-length</code></td><td style="${c.td}">attribute</td><td style="${c.td}">Below this length the strength is Weak and the length item is unmet. This is the target. See Choosing the minimum length below.</td><td style="${c.td}">15</td></tr>
          <tr><td style="${c.td}"><code style="${u.monoSm}">strength-strong-length</code></td><td style="${c.td}">attribute</td><td style="${c.td}">At or above this length, with every requirement met, the strength is Strong. Set it above the minimum to add a Moderate step.</td><td style="${c.td}">the minimum</td></tr>
          <tr><td style="${c.td}"><code style="${u.monoSm}">strength-full-length</code></td><td style="${c.td}">attribute</td><td style="${c.td}">Length at which the meter reads 100%. Not a limit on the password.</td><td style="${c.td}">the strong length</td></tr>
          <tr><td style="${c.td}"><code style="${u.monoSm}">strength-rules</code></td><td style="${c.td}">attribute</td><td style="${c.td}">Space-separated extra rules: <code style="${u.monoSm}">number special uppercase lowercase</code>. In React, an array.</td><td style="${c.td}">none</td></tr>
          <tr><td style="${c.td}"><code style="${u.monoSm}">strengthCriteria</code></td><td style="${c.td}">property</td><td style="${c.td}">Your own requirements; see below.</td><td style="${c.td}">none</td></tr>
          <tr><td style="${c.td}"><code style="${u.monoSm}">strengthLabels</code></td><td style="${c.td}">property</td><td style="${c.td}">Overrides any of the text, for translation. <code style="${u.monoSm}">{count}</code>, <code style="${u.monoSm}">{met}</code> and <code style="${u.monoSm}">{total}</code> are filled in.</td><td style="${c.td}">English</td></tr>
        </tbody>
      </table>
      <h3 style="${u.h3}">Choosing the minimum length</h3>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        NIST SP 800-63B-4 (section 3.1.1.2) sets the minimum by how the password is used:
      </p>
      <ul style="${u.bodySm} ${c.muted} margin: 0 0 ${h.content}; padding-left: var(--spacing-lg1); max-width: ${d};">
        <li style="margin-bottom: ${h.label};"><strong>15 characters</strong> when the password is the only thing that signs someone in.</li>
        <li><strong>8 characters</strong> when it is one factor of several, for example alongside a one-time code or a passkey.</li>
      </ul>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        The default minimum is <strong>15</strong>, the stricter of the two. If your service also requires a second
        factor, set <code style="${u.monoSm}">strength-min-length="8"</code>:
      </p>
      <pre style="${c.pre} white-space: pre-wrap;">&lt;mms-text-field
  label="Password"
  mask="protected-field"
  show-strength
  strength-min-length="8"
&gt;&lt;/mms-text-field&gt;</pre>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        In React, pass <code style="${u.monoSm}">strengthMinLength={8}</code>. Whatever you choose, enforce the same
        minimum on your server. The checklist is guidance only.
      </p>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        <strong>The minimum is the target.</strong> The meter is relative to it, so any value you set works the same
        way: Weak below it, Strong once it is met. The bar fills toward it. NIST gives no tiers above the minimum, so
        none are invented. If you want a Moderate step, set
        <code style="${u.monoSm}">strength-strong-length</code> above the minimum.
      </p>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        NIST also says verifiers SHALL NOT impose other composition rules, such as requiring a mix of character types.
        The optional rules are here because some agency policies still require them, so they are opt-in.
      </p>

      <hr style="${c.divider}" />

      <h2 style="${u.h2}">Custom requirements</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        For anything else, set <code style="${u.monoSm}">strengthCriteria</code> from JavaScript. Each entry is an
        <code style="${u.monoSm}">id</code>, a <code style="${u.monoSm}">label</code> and a
        <code style="${u.monoSm}">test</code> that returns true or false, or a promise of that.
      </p>
      <pre style="${c.pre} white-space: pre-wrap;">field.strengthCriteria = [
  {
    id: 'no-username',
    label: 'Does not contain your username',
    test: (value) =&gt; !value.toLowerCase().includes(username),
  },
  {
    id: 'not-breached',
    label: 'Not in a breached-password list',
    debounce: 300, // wait for a pause in typing before calling the server
    test: async (value) =&gt; !(await isBreached(value)),
  },
];</pre>
      <ul style="${u.bodySm} ${c.muted} margin: 0 0 ${h.content}; padding-left: var(--spacing-lg1); max-width: ${d};">
        <li style="margin-bottom: ${h.label};">Custom items appear after the built-in ones and count toward the Strong cap.</li>
        <li style="margin-bottom: ${h.label};">An async test shows as <em>checking</em> until it settles. A test that throws or rejects counts as not met.</li>
        <li style="margin-bottom: ${h.label};">No test runs while the field is empty. The component never stores, logs or sends the password; only your function sees it.</li>
        <li>This does not replace the server. NIST requires the verifier to check the whole password against a blocklist and say why one is rejected. Do that on your server and show the reason through <code style="${u.monoSm}">error-text</code>.</li>
      </ul>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        Try it below. It checks for <code style="${u.monoSm}">jchung</code> and simulates a server look-up for
        <code style="${u.monoSm}">password123</code>.
      </p>
      <div style="max-width: 420px; margin-bottom: ${h.subsection};">
        <mms-text-field
          label="Password (custom requirements)"
          mask="protected-field"
          show-strength
          .strengthCriteria=${D}
        ></mms-text-field>
      </div>

    </div>
  `},N={name:`Playground`,tags:[`!dev`],decorators:[e=>r`
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
      `],argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Text and padding size`,table:{category:`Visual`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`filled`],description:`Visual state (for documentation preview)`,table:{category:`Visual`}},disabled:{name:`Disabled`,control:`boolean`,description:`Prevents interaction, dims appearance`,table:{category:`Visual`}},readonly:{name:`Readonly`,control:`boolean`,description:`Shows value but prevents changes`,table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Label text displayed above the input`,table:{category:`Content`}},placeholder:{name:`Placeholder`,control:`text`,description:`Placeholder shown when no value`,table:{category:`Content`}},helperText:{name:`Helper text`,control:`text`,description:`Supplementary guidance below the input`,table:{category:`Content`}},prefixIcon:{name:`Prefix icon`,control:`select`,options:A,description:`Icon name for left side of input. Any valid mms-icon name works (1500+ available).`,table:{category:`Content`}},suffixIcon:{name:`Suffix icon`,control:`select`,options:A,description:`Icon name for right side of input. Any valid mms-icon name works (1500+ available).`,table:{category:`Content`}},clearButton:{name:`Clear button`,control:`boolean`,description:`Shows clear (×) button when has value`,table:{category:`Content`}},mask:{name:`Mask`,control:`select`,options:[`none`,`email`,`phone-number`,`currency`,`numeral`,`measurement`,`count`,`protected-field`],description:`Input formatting mask`,table:{category:`Mask`}},phoneLocale:{name:`Phone locale`,control:`select`,options:[`US`,`UK`,`FR`,`MX`,`AU`,`IN`,`JP`,`KR`,`SG`,`HK`,`TH`,`MY`,`GR`],description:`Country code for phone mask`,table:{category:`Mask`}},currency:{name:`Currency`,control:`select`,options:[`USD`,`EUR`,`GBP`,`JPY`,`CNY`,`AUD`,`CAD`,`CHF`,`HKD`,`SGD`,`INR`,`KRW`,`MXN`],description:`Currency symbol for currency mask`,table:{category:`Mask`}},measurementUnit:{name:`Measurement unit`,control:`text`,description:`Unit suffix displayed after the value. Only applies when mask="measurement".`,table:{category:`Mask`}},name:{name:`Name`,control:`text`,description:"HTML `name` attribute — the key sent with form data on submit.",table:{category:`Form`}},value:{name:`Value`,control:`text`,description:`Current input value.`,table:{category:`Form`}},inputType:{name:`Input type`,control:`select`,options:[`text`,`email`,`password`,`tel`,`url`],description:`HTML input type (overridden by mask)`,table:{category:`Form`}},autocomplete:{name:`Autocomplete`,control:`text`,description:`Browser autocomplete hint (e.g., "email", "tel")`,table:{category:`Form`}},required:{name:`Required`,control:`boolean`,description:`Shows asterisk indicator on label`,table:{category:`Validation`}},error:{name:`Error`,control:`boolean`,description:`Displays error styling and message`,table:{category:`Validation`}},errorText:{name:`Error text`,control:`text`,description:`Error message when error is true`,table:{category:`Validation`}},maxLength:{name:`Max length`,control:`number`,description:`Maximum character limit (0 = unlimited)`,table:{category:`Validation`}},showCharacterCounter:{name:`Show character counter`,control:`boolean`,description:`Displays remaining characters`,table:{category:`Validation`}},showStrength:{name:`Show strength`,control:`boolean`,description:`Shows a strength meter and a checklist of requirements under a password field. Use it when someone is creating a password. Needs a password field (mask "protected-field").`,table:{category:`Password Strength`}},strengthMinLength:{name:`Strength min length`,control:`number`,description:`The target length. Anything shorter is rated Weak, and meeting it earns Strong. The default of 15 is NIST's minimum when the password is the only thing that signs someone in. Use 8 when it is one factor of several.`,table:{category:`Password Strength`,defaultValue:{summary:`15`}}},strengthStrongLength:{name:`Strength strong length`,control:`number`,description:`The length that earns a Strong rating. Leave it empty to use the minimum. Set it above the minimum to add a Moderate step. It stays at Moderate until every requirement is met.`,table:{category:`Password Strength`,defaultValue:{summary:`the minimum`}}},strengthFullLength:{name:`Strength full length`,control:`number`,description:`The length at which the meter bar is full. Leave it empty to use the strong length. People can still type more.`,table:{category:`Password Strength`,defaultValue:{summary:`the strong length`}}},strengthRules:{name:`Strength rules`,control:`multi-select`,options:[`number`,`special`,`uppercase`,`lowercase`],description:`Extra requirements to add to the checklist. Each one means "at least one": a number, a special character (anything that is not a letter or number), an uppercase letter, or a lowercase letter. Leave empty to check length only. Turn on only the rules your server enforces.`,table:{category:`Password Strength`}},strengthCriteria:{name:`Strength criteria`,control:!1,description:`Your own requirements, for anything the built-in ones do not cover. Set from JavaScript, not HTML. Each one has an id, a label, and a test function that returns true or false (or a promise of that). The Password Strength page shows how.`,table:{category:`Password Strength`}},strengthCriteriaDemo:{name:`Strength criteria (demo)`,control:`multi-select`,options:Object.keys(O),description:`Storybook only. Tick examples of custom requirements to try them. "Username check" fails if the password contains jchung. "Common password check" pretends to ask a server and fails for password123, qwerty123456 or letmein123456. "Check fails" shows what happens when a check errors: it counts as not met.`,table:{category:`Password Strength`}},showTooltip:{name:`Show tooltip`,control:`boolean`,description:`Show info icon next to label`,table:{category:`Tooltip`}},tooltipText:{name:`Tooltip text`,control:`text`,description:`Tooltip content (dialog coming soon)`,table:{category:`Tooltip`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme (affects typography)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},args:{size:`md`,state:`default`,disabled:!1,readonly:!1,label:`Label`,placeholder:``,helperText:``,prefixIcon:``,suffixIcon:``,clearButton:!1,mask:`none`,phoneLocale:`US`,currency:`USD`,measurementUnit:``,name:``,value:``,inputType:`text`,autocomplete:``,required:!1,error:!1,errorText:``,maxLength:0,showCharacterCounter:!1,showStrength:!1,strengthMinLength:15,strengthRules:[],strengthCriteriaDemo:[],tooltipText:``,theme:`maximus`,density:`default`},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];n.label&&r.push(`label="${n.label}"`),n.placeholder&&r.push(`placeholder="${n.placeholder}"`),n.value&&r.push(`value="${n.value}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.name&&r.push(`name="${n.name}"`),n.inputType!==`text`&&r.push(`type="${n.inputType}"`),n.autocomplete&&r.push(`autocomplete="${n.autocomplete}"`),n.state&&n.state!=="default"&&r.push(`state="${n.state}"`),n.mask&&n.mask!==`none`&&r.push(`mask="${n.mask}"`),n.mask===`phone-number`&&n.phoneLocale!==`US`&&r.push(`phone-locale="${n.phoneLocale}"`),n.mask===`currency`&&n.currency!==`USD`&&r.push(`currency="${n.currency}"`),n.mask===`measurement`&&n.measurementUnit&&r.push(`measurement-unit="${n.measurementUnit}"`),n.prefixIcon&&r.push(`prefix-icon="${n.prefixIcon}"`),n.suffixIcon&&r.push(`suffix-icon="${n.suffixIcon}"`),n.clearButton&&r.push(`clear-button`),n.showTooltip&&r.push(`show-tooltip`),n.tooltipText&&n.showTooltip&&r.push(`tooltip-text="${n.tooltipText}"`),n.error&&r.push(`error`),n.errorText&&n.error&&r.push(`error-text="${n.errorText}"`),n.required&&r.push(`required`),n.maxLength&&Number(n.maxLength)>0&&r.push(`max-length="${n.maxLength}"`),n.showCharacterCounter&&r.push(`show-character-counter`),n.showStrength&&(r.push(`show-strength`),Number(n.strengthMinLength)!==15&&r.push(`strength-min-length="${n.strengthMinLength}"`),n.strengthStrongLength&&r.push(`strength-strong-length="${n.strengthStrongLength}"`),n.strengthFullLength&&r.push(`strength-full-length="${n.strengthFullLength}"`),b(n.strengthRules).length&&r.push(`strength-rules="${b(n.strengthRules).join(` `)}"`)),n.size!==`md`&&r.push(`size="${n.size}"`),n.disabled&&r.push(`disabled`),n.readonly&&r.push(`readonly`),n.density===`compact`&&r.push(`data-density="compact"`);let i=r.length>0?`\n  ${r.join(`
  `)}\n`:``,a=n.showStrength?x(n.strengthCriteriaDemo):[];return`<mms-text-field${i}></mms-text-field>${a.length?`\n\n<script>\n  // strengthCriteria is a JavaScript property; it cannot be set from an attribute.\n  const field = document.querySelector('mms-text-field');\n  field.strengthCriteria = [\n${a.map(e=>`    ${O[e].source}`).join(`
`)}\n  ];\n<\/script>`:``}`}}}},render:e=>r`
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
      ?show-strength=${e.showStrength}
      strength-min-length=${e.strengthMinLength||n}
      strength-strong-length=${e.strengthStrongLength||n}
      strength-full-length=${e.strengthFullLength||n}
      strength-rules=${b(e.strengthRules).join(` `)||n}
      .strengthCriteria=${S(e.strengthCriteriaDemo)}
      ?disabled=${e.disabled}
      ?readonly=${e.readonly}
      data-density=${e.density===`compact`?`compact`:n}
    ></mms-text-field>
  `},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Text Field</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A single-line text input using the native &lt;input&gt; element for built-in accessibility
        and keyboard navigation. Provides label, helper text, validation, masks, and integrates with forms.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Provide a label and optional placeholder. The text field fills its container width by default.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Full name"
          placeholder="Enter your full name"
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <!-- With Helper Text -->
      <h2 style="\${t.h2}">With helper text</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Helper text provides additional guidance below the input.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Email address"
          placeholder="you@example.com"
          helper-text="We'll never share your email with anyone."
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Required Field -->
      <h2 style="\${t.h2}">Required field</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">required</code> prop adds an asterisk indicator to the label.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Social Security Number"
          placeholder="XXX-XX-XXXX"
          required
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Error State -->
      <h2 style="\${t.h2}">Error state</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">error</code> prop displays validation feedback.
        Helper text is replaced by the error message when in error state.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Email address"
          value="invalid-email"
          error
          error-text="Please enter a valid email address."
          required
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Readonly State -->
      <h2 style="\${t.h2}">Readonly state</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Readonly displays the current value but prevents changes. Use when data should be visible but not editable.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Case number"
          value="MC-2026-001234"
          readonly
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Disabled State -->
      <h2 style="\${t.h2}">Disabled state</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Disabled prevents any interaction and dims the appearance.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Account ID"
          value="ACC-99999"
          disabled
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <!-- With Tooltip -->
      <h2 style="\${t.h2}">With tooltip</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        An info icon can be shown next to the label. <em>(Tooltip dialog coming soon — icon is currently visual-only)</em>
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Date of birth"
          placeholder="MM/DD/YYYY"
          show-tooltip
          tooltip-text="Your date of birth is used to verify your identity."
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Clear Button -->
      <h2 style="\${t.h2}">Clear button</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">clear-button</code> prop shows a clear icon when the field has a value.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Search"
          placeholder="Search..."
          value="Medicaid enrollment"
          clear-button
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Character Counter -->
      <h2 style="\${t.h2}">Character counter</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Use <code style="\${t.monoSm}">show-character-counter</code> with <code style="\${t.monoSm}">max-length</code> to show remaining characters.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Notes"
          placeholder="Add a note..."
          value="This is a sample note"
          show-character-counter
          max-length="100"
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Three sizes available: <code style="\${t.monoSm}">sm</code>, <code style="\${t.monoSm}">md</code> (default), and <code style="\${t.monoSm}">lg</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field label="Small" placeholder="Size sm" size="sm"></mms-text-field>
        <mms-text-field label="Medium" placeholder="Size md" size="md"></mms-text-field>
        <mms-text-field label="Large" placeholder="Size lg" size="lg"></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════
           MASKS
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Email mask</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Shows an email icon prefix and sets <code style="\${t.monoSm}">type="email"</code> for mobile keyboards.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Email"
          mask="email"
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Phone number mask</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Shows country code prefix and auto-formats the number based on locale.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-text-field label="US Phone" mask="phone-number" phone-locale="US"></mms-text-field>
        <mms-text-field label="UK Phone" mask="phone-number" phone-locale="UK"></mms-text-field>
        <mms-text-field label="France Phone" mask="phone-number" phone-locale="FR"></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Currency mask</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Shows currency symbol prefix, right-aligns text, and formats with comma separators.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-text-field label="USD Amount" mask="currency" currency="USD"></mms-text-field>
        <mms-text-field label="EUR Amount" mask="currency" currency="EUR"></mms-text-field>
        <mms-text-field label="GBP Amount" mask="currency" currency="GBP"></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Protected field (password)</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Shows password toggle icon. Click to reveal/hide the password. To show a strength meter and requirements
        while a user creates a password, see <strong>Password Strength</strong>.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field 
          label="Password"
          mask="protected-field"
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════
           ICONS
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Icons</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Use <code style="\${t.monoSm}">prefix-icon</code> and <code style="\${t.monoSm}">suffix-icon</code> 
        to add visual context. Icons are from the system icon library.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: \${space.content}; margin-bottom: \${space.subsection};">
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

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════
           WIDTH BEHAVIOR
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Width behavior</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Text Field is block-level and fills its container width. Control width via the parent layout,
        not a component prop.
      </p>

      <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: \${space.content};">
        <p style="\${t.caption} margin-bottom: \${space.content};"><strong>Full-width (default)</strong></p>
        <mms-text-field 
          label="Full width input"
          placeholder="Fills container"
        ></mms-text-field>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: \${space.content}; margin-bottom: \${space.content};">
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md);">
          <p style="\${t.caption} margin-bottom: \${space.content};"><strong>Grid column 1</strong></p>
          <mms-text-field 
            label="First name"
            placeholder="Enter first name"
          ></mms-text-field>
        </div>
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md);">
          <p style="\${t.caption} margin-bottom: \${space.content};"><strong>Grid column 2</strong></p>
          <mms-text-field 
            label="Last name"
            placeholder="Enter last name"
          ></mms-text-field>
        </div>
      </div>

      <div style="width: 200px; background: var(--color-surface-sunken); padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: \${space.subsection};">
        <p style="\${t.caption} margin-bottom: var(--spacing-xs2);"><strong>Narrow container (200px)</strong></p>
        <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">Sidebars, filter drawers, compact dialogs</p>
        <mms-text-field 
          label="Zip code"
          placeholder="12345"
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <!-- ═══════════════════════════════════════════════════════════════════
           DENSITY
           ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Compact density</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Use <code style="\${t.monoSm}">data-density="compact"</code> for reduced padding in data-dense interfaces.
      </p>

      <div data-density="compact" style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection}; max-width: 320px;">
        <mms-text-field label="First name" placeholder="Enter first name" data-density="compact"></mms-text-field>
        <mms-text-field label="Last name" placeholder="Enter last name" data-density="compact"></mms-text-field>
        <mms-text-field label="Email" placeholder="Enter email" data-density="compact"></mms-text-field>
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
          summary="Why native &lt;input&gt;?"
          message="Custom text input implementations require extensive ARIA wiring and often fail edge cases with screen readers. Native &lt;input&gt; guarantees correct behavior across all assistive technologies with zero custom ARIA — the browser handles announcements, focus, and keyboard navigation."
        ></mms-inline-alert>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['text-field'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Focus:</strong> Announces label, current value (or "blank"), and input type (e.g., "edit text")</li>
        <li style="margin-bottom: \${space.label};"><strong>Required:</strong> Announces "required" when <code style="\${t.monoSm}">required</code> prop is set</li>
        <li style="margin-bottom: \${space.label};"><strong>Error:</strong> Immediately announces error message via <code style="\${t.monoSm}">role="alert"</code> when error state activates</li>
        <li style="margin-bottom: \${space.label};"><strong>Password:</strong> Announces "password" input type; toggle button announces show/hide state</li>
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
            <td style="\${doc.td}">Move focus to / from the input (and to action buttons if present)</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">←</kbd> <kbd style="\${doc.kbd}">→</kbd></td>
            <td style="\${doc.td}">Move cursor within text</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Home</kbd> / <kbd style="\${doc.kbd}">End</kbd></td>
            <td style="\${doc.td}">Jump to beginning / end of text</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Shift</kbd> + <kbd style="\${doc.kbd}">←</kbd> <kbd style="\${doc.kbd}">→</kbd></td>
            <td style="\${doc.td}">Select text character by character</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Cmd/Ctrl</kbd> + <kbd style="\${doc.kbd}">A</kbd></td>
            <td style="\${doc.td}">Select all text</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd></td>
            <td style="\${doc.td}">Submit form (when inside a form element)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Password Strength',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Password Strength</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Add <code style="\${t.monoSm}">show-strength</code> to a password field when someone is <em>creating</em> a
        password. It shows a requirements checklist, and a strength meter once they start typing. It is off by default,
        and a sign-in field must not use it.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-text-field
          label="Password (default)"
          mask="protected-field"
          show-strength
        ></mms-text-field>
        <mms-text-field
          label="Password (number and symbol required)"
          mask="protected-field"
          show-strength
          strength-rules="number special"
          .value=\${'correct horse battery'}
        ></mms-text-field>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Built in</h2>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.subsection}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Length</strong> — the default and only requirement. The minimum is the target: Weak below it, Strong once it is met. Set a higher strong length if you want a Moderate step in between.</li>
        <li style="margin-bottom: \${space.label};"><strong>Optional rules</strong> — at least one number, special character (anything that is not a letter or number, so a space counts), uppercase letter or lowercase letter. Turn on only what your server enforces.</li>
        <li style="margin-bottom: \${space.label};"><strong>Strong cap</strong> — the label stays at Moderate while any requirement is unmet.</li>
        <li style="margin-bottom: \${space.label};"><strong>Checklist and meter</strong> — each item shows an icon and "met" or "not met" text, never colour alone. The checklist is visible before typing; the meter appears once something is typed.</li>
        <li><strong>Screen readers</strong> — the checklist is read as the field's description, and a polite status message announces a changed strength once typing pauses. Nothing is announced for an empty or pre-filled field, and the password is never read out.</li>
      </ul>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Use it</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Password strength is part of <code style="\${t.monoSm}">mms-text-field</code>, so there is one tag to use and
        nothing extra to install or import.
      </p>

      <h3 style="\${t.h3}">HTML</h3>
      <pre style="\${doc.pre} white-space: pre-wrap;">&lt;mms-text-field
  label="Password"
  mask="protected-field"
  show-strength
  strength-min-length="12"
  strength-rules="number special"
&gt;&lt;/mms-text-field&gt;</pre>

      <h3 style="\${t.h3}">React</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Use the generated <code style="\${t.monoSm}">MmsTextField</code>. Props are camelCase, and
        <code style="\${t.monoSm}">strengthRules</code> takes an array.
      </p>
      <pre style="\${doc.pre} white-space: pre-wrap;">import { MmsTextField } from '@mms/design-system/react';

&lt;MmsTextField
  label="Password"
  mask="protected-field"
  showStrength
  strengthMinLength={12}
  strengthRules={['number', 'special']}
  strengthCriteria={criteria}
/&gt;</pre>

      <h3 style="\${t.h3}">Everything together</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Length, two rules and a custom requirement on one field. It is pre-filled, so the checklist and the Moderate cap
        show straight away: the password has a number but no special character.
      </p>
      <div style="max-width: 420px; margin-bottom: \${space.subsection};">
        <mms-text-field
          label="Password (12 characters, number, symbol, no username)"
          mask="protected-field"
          show-strength
          strength-min-length="12"
          strength-strong-length="16"
          strength-full-length="16"
          strength-rules="number special"
          .strengthCriteria=\${[demoNoUsername]}
          .value=\${'correcthorse7battery'}
        ></mms-text-field>
      </div>

      <h3 style="\${t.h3}">In a sign-up form</h3>
      <pre style="\${doc.pre} white-space: pre-wrap;">&lt;form method="post" action="/sign-up"&gt;
  &lt;mms-text-field
    label="Create a password"
    name="password"
    mask="protected-field"
    autocomplete="new-password"
    required
    show-strength
  &gt;&lt;/mms-text-field&gt;
  &lt;button type="submit"&gt;Create account&lt;/button&gt;
&lt;/form&gt;</pre>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.subsection}; padding-left: var(--spacing-lg1); max-width: \${PROSE_MAX};">
        <li style="margin-bottom: \${space.label};">The password is submitted under <code style="\${t.monoSm}">name</code> like any form field. The checklist and meter are display only and are never submitted.</li>
        <li style="margin-bottom: \${space.label};"><code style="\${t.monoSm}">autocomplete="new-password"</code> lets password managers offer to generate one.</li>
        <li>The checklist is guidance, not enforcement. Your server must still validate the password.</li>
      </ul>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Configure</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        An <strong>attribute</strong> can be written in HTML. A <strong>property</strong> holds a function or an object,
        so it can only be set from JavaScript (or as a prop in React).
      </p>
      <table style="\${doc.table} margin-bottom: \${space.content};">
        <thead>
          <tr>
            <th style="\${doc.th} width: 210px;">Prop</th>
            <th style="\${doc.th} width: 100px;">Set as</th>
            <th style="\${doc.th}">What it does</th>
            <th style="\${doc.th} width: 90px;">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="\${doc.td}"><code style="\${t.monoSm}">show-strength</code></td><td style="\${doc.td}">attribute</td><td style="\${doc.td}">Turns the feature on. Applies to password fields only.</td><td style="\${doc.td}">off</td></tr>
          <tr><td style="\${doc.td}"><code style="\${t.monoSm}">strength-min-length</code></td><td style="\${doc.td}">attribute</td><td style="\${doc.td}">Below this length the strength is Weak and the length item is unmet. This is the target. See Choosing the minimum length below.</td><td style="\${doc.td}">15</td></tr>
          <tr><td style="\${doc.td}"><code style="\${t.monoSm}">strength-strong-length</code></td><td style="\${doc.td}">attribute</td><td style="\${doc.td}">At or above this length, with every requirement met, the strength is Strong. Set it above the minimum to add a Moderate step.</td><td style="\${doc.td}">the minimum</td></tr>
          <tr><td style="\${doc.td}"><code style="\${t.monoSm}">strength-full-length</code></td><td style="\${doc.td}">attribute</td><td style="\${doc.td}">Length at which the meter reads 100%. Not a limit on the password.</td><td style="\${doc.td}">the strong length</td></tr>
          <tr><td style="\${doc.td}"><code style="\${t.monoSm}">strength-rules</code></td><td style="\${doc.td}">attribute</td><td style="\${doc.td}">Space-separated extra rules: <code style="\${t.monoSm}">number special uppercase lowercase</code>. In React, an array.</td><td style="\${doc.td}">none</td></tr>
          <tr><td style="\${doc.td}"><code style="\${t.monoSm}">strengthCriteria</code></td><td style="\${doc.td}">property</td><td style="\${doc.td}">Your own requirements; see below.</td><td style="\${doc.td}">none</td></tr>
          <tr><td style="\${doc.td}"><code style="\${t.monoSm}">strengthLabels</code></td><td style="\${doc.td}">property</td><td style="\${doc.td}">Overrides any of the text, for translation. <code style="\${t.monoSm}">{count}</code>, <code style="\${t.monoSm}">{met}</code> and <code style="\${t.monoSm}">{total}</code> are filled in.</td><td style="\${doc.td}">English</td></tr>
        </tbody>
      </table>
      <h3 style="\${t.h3}">Choosing the minimum length</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        NIST SP 800-63B-4 (section 3.1.1.2) sets the minimum by how the password is used:
      </p>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1); max-width: \${PROSE_MAX};">
        <li style="margin-bottom: \${space.label};"><strong>15 characters</strong> when the password is the only thing that signs someone in.</li>
        <li><strong>8 characters</strong> when it is one factor of several, for example alongside a one-time code or a passkey.</li>
      </ul>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The default minimum is <strong>15</strong>, the stricter of the two. If your service also requires a second
        factor, set <code style="\${t.monoSm}">strength-min-length="8"</code>:
      </p>
      <pre style="\${doc.pre} white-space: pre-wrap;">&lt;mms-text-field
  label="Password"
  mask="protected-field"
  show-strength
  strength-min-length="8"
&gt;&lt;/mms-text-field&gt;</pre>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        In React, pass <code style="\${t.monoSm}">strengthMinLength={8}</code>. Whatever you choose, enforce the same
        minimum on your server. The checklist is guidance only.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        <strong>The minimum is the target.</strong> The meter is relative to it, so any value you set works the same
        way: Weak below it, Strong once it is met. The bar fills toward it. NIST gives no tiers above the minimum, so
        none are invented. If you want a Moderate step, set
        <code style="\${t.monoSm}">strength-strong-length</code> above the minimum.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        NIST also says verifiers SHALL NOT impose other composition rules, such as requiring a mix of character types.
        The optional rules are here because some agency policies still require them, so they are opt-in.
      </p>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Custom requirements</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        For anything else, set <code style="\${t.monoSm}">strengthCriteria</code> from JavaScript. Each entry is an
        <code style="\${t.monoSm}">id</code>, a <code style="\${t.monoSm}">label</code> and a
        <code style="\${t.monoSm}">test</code> that returns true or false, or a promise of that.
      </p>
      <pre style="\${doc.pre} white-space: pre-wrap;">field.strengthCriteria = [
  {
    id: 'no-username',
    label: 'Does not contain your username',
    test: (value) =&gt; !value.toLowerCase().includes(username),
  },
  {
    id: 'not-breached',
    label: 'Not in a breached-password list',
    debounce: 300, // wait for a pause in typing before calling the server
    test: async (value) =&gt; !(await isBreached(value)),
  },
];</pre>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1); max-width: \${PROSE_MAX};">
        <li style="margin-bottom: \${space.label};">Custom items appear after the built-in ones and count toward the Strong cap.</li>
        <li style="margin-bottom: \${space.label};">An async test shows as <em>checking</em> until it settles. A test that throws or rejects counts as not met.</li>
        <li style="margin-bottom: \${space.label};">No test runs while the field is empty. The component never stores, logs or sends the password; only your function sees it.</li>
        <li>This does not replace the server. NIST requires the verifier to check the whole password against a blocklist and say why one is rejected. Do that on your server and show the reason through <code style="\${t.monoSm}">error-text</code>.</li>
      </ul>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Try it below. It checks for <code style="\${t.monoSm}">jchung</code> and simulates a server look-up for
        <code style="\${t.monoSm}">password123</code>.
      </p>
      <div style="max-width: 420px; margin-bottom: \${space.subsection};">
        <mms-text-field
          label="Password (custom requirements)"
          mask="protected-field"
          show-strength
          .strengthCriteria=\${demoCriteria}
        ></mms-text-field>
      </div>

    </div>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
    // ── Password strength ─────────────────────────────────────
    showStrength: {
      name: 'Show strength',
      control: 'boolean',
      description: 'Shows a strength meter and a checklist of requirements under a password field. Use it when someone is creating a password. Needs a password field (mask "protected-field").',
      table: {
        category: 'Password Strength'
      }
    },
    strengthMinLength: {
      name: 'Strength min length',
      control: 'number',
      description: 'The target length. Anything shorter is rated Weak, and meeting it earns Strong. The default of 15 is NIST\\'s minimum when the password is the only thing that signs someone in. Use 8 when it is one factor of several.',
      table: {
        category: 'Password Strength',
        defaultValue: {
          summary: '15'
        }
      }
    },
    strengthStrongLength: {
      name: 'Strength strong length',
      control: 'number',
      description: 'The length that earns a Strong rating. Leave it empty to use the minimum. Set it above the minimum to add a Moderate step. It stays at Moderate until every requirement is met.',
      table: {
        category: 'Password Strength',
        defaultValue: {
          summary: 'the minimum'
        }
      }
    },
    strengthFullLength: {
      name: 'Strength full length',
      control: 'number',
      description: 'The length at which the meter bar is full. Leave it empty to use the strong length. People can still type more.',
      table: {
        category: 'Password Strength',
        defaultValue: {
          summary: 'the strong length'
        }
      }
    },
    strengthRules: {
      name: 'Strength rules',
      control: 'multi-select',
      options: ['number', 'special', 'uppercase', 'lowercase'],
      description: 'Extra requirements to add to the checklist. Each one means "at least one": a number, a special character (anything that is not a letter or number), an uppercase letter, or a lowercase letter. Leave empty to check length only. Turn on only the rules your server enforces.',
      table: {
        category: 'Password Strength'
      }
    },
    strengthCriteria: {
      name: 'Strength criteria',
      control: false,
      description: 'Your own requirements, for anything the built-in ones do not cover. Set from JavaScript, not HTML. Each one has an id, a label, and a test function that returns true or false (or a promise of that). The Password Strength page shows how.',
      table: {
        category: 'Password Strength'
      }
    },
    strengthCriteriaDemo: {
      name: 'Strength criteria (demo)',
      control: 'multi-select',
      options: Object.keys(demoItems),
      description: 'Storybook only. Tick examples of custom requirements to try them. "Username check" fails if the password contains jchung. "Common password check" pretends to ask a server and fails for password123, qwerty123456 or letmein123456. "Check fails" shows what happens when a check errors: it counts as not met.',
      table: {
        category: 'Password Strength'
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
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
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
    // Password strength
    showStrength: false,
    strengthMinLength: 15,
    strengthRules: [],
    strengthCriteriaDemo: [],
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
          if (a.maxLength && Number(a.maxLength) > 0) attrs.push(\`max-length="\${a.maxLength}"\`);
          if (a.showCharacterCounter) attrs.push('show-character-counter');
          if (a.showStrength) {
            attrs.push('show-strength');
            if (Number(a.strengthMinLength) !== 15) attrs.push(\`strength-min-length="\${a.strengthMinLength}"\`);
            if (a.strengthStrongLength) attrs.push(\`strength-strong-length="\${a.strengthStrongLength}"\`);
            if (a.strengthFullLength) attrs.push(\`strength-full-length="\${a.strengthFullLength}"\`);
            if (pickedRules(a.strengthRules).length) attrs.push(\`strength-rules="\${pickedRules(a.strengthRules).join(' ')}"\`);
          }
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.disabled) attrs.push('disabled');
          if (a.readonly) attrs.push('readonly');
          if (a.density === 'compact') attrs.push('data-density="compact"');
          const attrStr = attrs.length > 0 ? \`\\n  \${attrs.join('\\n  ')}\\n\` : '';
          const picked = a.showStrength ? pickedDemoItems(a.strengthCriteriaDemo as unknown) : [];
          const script = picked.length ? \`\\n\\n<script>\\n  // strengthCriteria is a JavaScript property; it cannot be set from an attribute.\\n  const field = document.querySelector('mms-text-field');\\n  field.strengthCriteria = [\\n\${picked.map(name => \`    \${demoItems[name].source}\`).join('\\n')}\\n  ];\\n<\/script>\` : '';
          return \`<mms-text-field\${attrStr}></mms-text-field>\${script}\`;
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
      ?show-strength=\${args.showStrength}
      strength-min-length=\${args.strengthMinLength || nothing}
      strength-strong-length=\${args.strengthStrongLength || nothing}
      strength-full-length=\${args.strengthFullLength || nothing}
      strength-rules=\${pickedRules(args.strengthRules).join(' ') || nothing}
      .strengthCriteria=\${demoCriteriaFor(args.strengthCriteriaDemo as unknown)}
      ?disabled=\${args.disabled}
      ?readonly=\${args.readonly}
      data-density=\${args.density === 'compact' ? 'compact' : nothing}
    ></mms-text-field>
  \`
}`,...N.parameters?.docs?.source}}},P=[`Overview`,`PasswordStrength`,`PlaygroundStory`]}));F();export{j as Overview,M as PasswordStrength,N as PlaygroundStory,P as __namedExportsOrder,C as default,F as n,y as t};