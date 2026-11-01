import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{s as n,t as r}from"./lit-B0BZwaT1.js";import{c as i}from"./iframe-CEHEciqj.js";import{t as a}from"./mms-card.component-Ae9XIj4r.js";import{i as o,n as s,r as c}from"./theme-constraints-BnNpJNRe.js";import{n as l,r as u}from"./wcag-coverage-DNhlI7v1.js";import{a as d,c as f,d as p,i as m,n as h,o as g,r as _,u as v}from"./doc-styles-DkvR_Qyb.js";import{a as y,n as b}from"./a11y-outcome-Chf8PZL1.js";var x=t({Overview:()=>w,PlaygroundStory:()=>T,__namedExportsOrder:()=>E,default:()=>C}),S,C,w,T,E,D=e((()=>{r(),i(),a(),c(),l(),b(),f(),S=`.arrow-left.arrow-right.arrow-up.arrow-down.arrow-clockwise.arrow-square-out.caret-left.caret-right.caret-up.caret-down.plus.minus.x.check.pencil.trash.copy.upload.download.export.floppy-disk.printer.paperclip.play.pause.stop.magnifying-glass.funnel.gear.envelope.phone.share-network.user.sign-in.sign-out.lock.lock-open.eye.eye-slash.calendar.shopping-cart.heart.star.question.info`.split(`.`),C={title:`Actions/Button`,tags:[`!autodocs`]},w={name:`Overview`,render:()=>n`
    <div data-theme=${_} data-mode=${g()} style=${h}>

      <!-- Header -->
      <h1 style="${p.h1}">Button</h1>
      <p style="${p.body} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        Buttons trigger actions. The MMS Design System provides a unified button component with three visual variants — <strong>primary</strong>, <strong>secondary</strong>, and <strong>ghost</strong> — each serving distinct interaction patterns.
      </p>

      <hr style="${d.divider}" />

      <!-- Variants -->
      <h2 style="${p.h2}">Variants</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: ${v.content}; margin-bottom: ${v.subsection};">
        <div style="${d.panel} display: flex; flex-direction: column;">
          <h3 style="${p.h3}">Primary</h3>
          <p style="${p.bodySm} ${d.muted} flex: 1;">
            High-emphasis actions. Use for the primary call-to-action on a page or form.
          </p>
          <div style="margin-top: ${v.content};"><mms-button variant="primary" label="Submit"></mms-button></div>
        </div>
        <div style="${d.panel} display: flex; flex-direction: column;">
          <h3 style="${p.h3}">Secondary</h3>
          <p style="${p.bodySm} ${d.muted} flex: 1;">
            Medium-emphasis actions. Use alongside primary buttons for secondary options.
          </p>
          <div style="margin-top: ${v.content};"><mms-button variant="secondary" label="Cancel"></mms-button></div>
        </div>
        <div style="${d.panel} display: flex; flex-direction: column;">
          <h3 style="${p.h3}">Ghost</h3>
          <p style="${p.bodySm} ${d.muted} flex: 1;">
            Low-emphasis actions. Use for tertiary actions or inline links.
          </p>
          <div style="margin-top: ${v.content};"><mms-button variant="ghost" label="Learn more"></mms-button></div>
        </div>
      </div>

      <hr style="${d.divider}" />

      <!-- Color Schemes -->
      <h2 style="${p.h2}">Color schemes</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.content};">
        The <code style="${p.monoSm}">color-scheme</code> prop controls which color palette the button uses. Four options are available:
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: ${v.content}; margin-bottom: ${v.content};">
        <div style="${d.panel}">
          <h3 style="${p.h3}">Primary &amp; secondary</h3>
          <p style="${p.bodySm} ${d.muted} margin-bottom: ${v.content};">
            Brand colors defined by the active theme. Use for most UI actions.
          </p>
          <div style="display: flex; gap: ${v.content};">
            <mms-button variant="primary" color-scheme="primary" label="Primary" size="sm"></mms-button>
            <mms-button variant="primary" color-scheme="secondary" label="Secondary" size="sm"></mms-button>
          </div>
        </div>
        <div style="${d.panel}">
          <h3 style="${p.h3}">Accent &amp; onyx</h3>
          <p style="${p.bodySm} ${d.muted} margin-bottom: ${v.content};">
            <strong>Accent</strong> is theme-specific highlight color. <strong>Onyx</strong> is structural black — always available.
          </p>
          <div style="display: flex; gap: ${v.content};">
            <mms-button variant="primary" color-scheme="accent" label="Accent" size="sm"></mms-button>
            <mms-button variant="primary" color-scheme="onyx" label="Onyx" size="sm"></mms-button>
          </div>
        </div>
        <div style="${d.panel}">
          <h3 style="${p.h3}">Error</h3>
          <p style="${p.bodySm} ${d.muted} margin-bottom: ${v.content};">
            Structural destructive-action red — fixed across all themes. Use for delete/remove/destroy actions.
          </p>
          <div style="display: flex; gap: ${v.content};">
            <mms-button variant="primary" color-scheme="error" label="Delete" size="sm"></mms-button>
            <mms-button variant="secondary" color-scheme="error" label="Remove" size="sm"></mms-button>
            <mms-button variant="ghost" color-scheme="error" label="Discard" size="sm"></mms-button>
          </div>
        </div>
      </div>

      <p style="${p.caption} ${d.muted} margin-bottom: ${v.subsection};">
        Theme determines which color schemes are available. Onyx and error are structural — the only palettes guaranteed across all themes. Colors that don't meet WCAG contrast requirements are classified as decorative (9 steps only, no hover/pressed states) and are out of scope for interactive components.
      </p>

      <hr style="${d.divider}" />

      <!-- Full Width -->
      <h2 style="${p.h2}">Full width</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        Use <code style="${p.monoSm}">full-width</code> to stretch the button to fill its container instead of shrink-wrapping to the label — common in modal footers and mobile-width forms.
      </p>

      <div style="max-width: 320px; margin-bottom: ${v.subsection};">
        <mms-button variant="primary" label="Continue" full-width></mms-button>
      </div>

      <hr style="${d.divider}" />

      <!-- Sizes -->
      <h2 style="${p.h2}">Sizes</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        Three sizes accommodate different contexts — compact UIs, standard forms, and prominent CTAs.
      </p>

      <div style="display: flex; align-items: center; gap: ${v.content}; margin-bottom: ${v.subsection};">
        <mms-button variant="primary" size="sm" label="Small"></mms-button>
        <mms-button variant="primary" size="md" label="Medium"></mms-button>
        <mms-button variant="primary" size="lg" label="Large"></mms-button>
      </div>

      <hr style="${d.divider}" />

      <!-- Icons -->
      <h2 style="${p.h2}">With icons</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        Icons can be placed on the left, right, or both sides of the label to reinforce meaning.
      </p>

      <div style="display: flex; align-items: center; gap: ${v.content}; margin-bottom: ${v.subsection};">
        <mms-button variant="primary" label="Download" left-icon="download"></mms-button>
        <mms-button variant="secondary" label="Continue" right-icon="caret-right"></mms-button>
        <div style="margin-top: 5px;"><mms-button variant="ghost" label="Settings" left-icon="gear"></mms-button></div>
      </div>

      <hr style="${d.divider}" />

      <!-- Icon-Only Mode -->
      <h2 style="${p.h2}">Icon-only mode</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        Use <code style="${p.monoSm}">icon-only</code> for compact actions where visual context makes the icon meaning clear (close, menu, settings). The <code style="${p.monoSm}">label</code> prop becomes the accessible name — <strong>always provide a label for screen readers</strong>.
      </p>

      <div style="display: flex; align-items: center; gap: ${v.content}; margin-bottom: ${v.subsection};">
        <mms-button variant="ghost" label="Close" left-icon="x" icon-only></mms-button>
        <mms-button variant="ghost" label="Menu" left-icon="list" icon-only></mms-button>
        <mms-button variant="secondary" label="Settings" left-icon="gear" icon-only></mms-button>
        <mms-button variant="primary" label="Add item" left-icon="plus" icon-only></mms-button>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${v.content};">
        <div slot="body-content">
          <h3 style="${p.h3}">Accessibility requirements</h3>
          <ul style="${p.bodySm} margin: 0; padding-left: var(--spacing-lg1);">
            <li style="margin-bottom: ${v.label};"><strong>Use <code style="${p.monoSm}">aria-label</code> for overrides</strong> — When the accessible name should differ from the visible label text.</li>
            <li><strong>Touch targets</strong> — Icon-only buttons enforce WCAG 2.2 minimum sizing: 44×44px on touch devices, 24×24px on mouse devices.</li>
          </ul>
        </div>
      </mms-card>

      <pre style="${d.pre} margin-bottom: ${v.subsection};"><code>&lt;!-- Standard: label becomes aria-label --&gt;
&lt;mms-button label="Close" left-icon="x" icon-only&gt;&lt;/mms-button&gt;

&lt;!-- Override: different aria-label for more context --&gt;
&lt;mms-button left-icon="x" icon-only aria-label="Close dialog"&gt;&lt;/mms-button&gt;</code></pre>

      <hr style="${d.divider}" />

      <!-- Accessibility -->
      <h2 style="${p.h2}">Accessibility</h2>

      <h3 style="${p.h3}">WCAG 2.2 AA compliance</h3>
      ${y(u.button.rows)}

      <h3 style="${p.h3}">Screen reader behavior</h3>
      <ul style="${p.bodySm} ${d.muted} margin: 0 0 ${v.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${v.label};"><strong>Focus:</strong> Announces label text and "button"</li>
        <li style="margin-bottom: ${v.label};"><strong>Disabled:</strong> Announces "dimmed" or "unavailable" (varies by screen reader)</li>
        <li style="margin-bottom: ${v.label};"><strong>Icon-only:</strong> Uses <code style="${p.monoSm}">label</code> as <code style="${p.monoSm}">aria-label</code> — always provide a label</li>
        <li><strong>Loading:</strong> <code style="${p.monoSm}">aria-busy="true"</code> indicates processing state</li>
      </ul>

      <h3 style="${p.h3}">Keyboard navigation</h3>
      <table style="${d.table} margin-bottom: ${v.subsection};">
        <thead>
          <tr>
            <th style="${d.th} width: 140px;">Key</th>
            <th style="${d.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${d.td}"><kbd style="${d.kbd}">Tab</kbd></td>
            <td style="${d.td}">Move focus to / from the button</td>
          </tr>
          <tr>
            <td style="${d.td}"><kbd style="${d.kbd}">Enter</kbd></td>
            <td style="${d.td}">Activate the button</td>
          </tr>
          <tr>
            <td style="${d.td}"><kbd style="${d.kbd}">Space</kbd></td>
            <td style="${d.td}">Activate the button</td>
          </tr>
        </tbody>
      </table>

      <hr style="${d.divider}" />

      <!-- Usage -->
      <h2 style="${p.h2}">Usage</h2>
      <pre style="${d.pre}"><code>&lt;mms-button variant="primary" label="Submit"&gt;&lt;/mms-button&gt;
&lt;mms-button variant="secondary" label="Cancel"&gt;&lt;/mms-button&gt;
&lt;mms-button variant="ghost" label="Learn more"&gt;&lt;/mms-button&gt;</code></pre>

    </div>
  `},T={name:`Playground`,tags:[`!dev`],args:{variant:`primary`,size:`md`,roundness:`subtle`,state:`default`,disabled:!1,fullWidth:!1,label:`Button`,leftIcon:``,rightIcon:``,iconOnly:!1,ariaLabel:``,colorScheme:`primary`,theme:`maximus`,density:`default`},decorators:[e=>n`
        <div
          style="
            min-height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          ${e()}
        </div>
      `],argTypes:{variant:{name:`Variant`,control:`select`,options:[`primary`,`secondary`,`ghost`],description:`Visual variant: primary (solid), secondary (outlined), ghost (text only)`,table:{category:`Component Props`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`,`error`],description:`Color palette for the button. "onyx" and "error" are structural (work on all themes). Brand colors (primary/secondary/accent) availability depends on theme.`,table:{category:`Component Props`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Button size`,table:{category:`Component Props`}},roundness:{name:`Roundness`,control:`select`,options:[`boxed`,`subtle`,`rounded`],description:`Corner radius: boxed (0), subtle (4px), rounded (pill)`,table:{category:`Component Props`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`active`],description:`Preview state (Storybook only)`,table:{category:`Component Props`}},disabled:{name:`Disabled`,control:`boolean`,description:`Disabled state`,table:{category:`Component Props`}},fullWidth:{name:`Full Width`,control:`boolean`,description:`Stretch to the container's full width instead of shrink-wrapping to the label`,table:{category:`Component Props`}},label:{name:`Label`,control:`text`,description:`Button text`,table:{category:`Component Props`}},leftIcon:{name:`Left Icon`,control:`select`,options:S,description:`Curated list of common button icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.`,table:{category:`Component Props`}},rightIcon:{name:`Right Icon`,control:`select`,options:S,description:`Curated list of common button icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.`,table:{category:`Component Props`}},iconOnly:{name:`Icon Only`,control:`boolean`,description:`Hides visible label, renders icon only. Label becomes aria-label for screen readers.`,table:{category:`Component Props`}},ariaLabel:{name:`Aria Label`,control:`text`,description:`Override accessible name. Use when aria-label should differ from label text.`,table:{category:`Component Props`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Spacing density`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=n.colorScheme===`primary`?``:` color-scheme="${n.colorScheme}"`,i=n.leftIcon?` left-icon="${n.leftIcon}"`:``,a=n.rightIcon?` right-icon="${n.rightIcon}"`:``,o=n.iconOnly?` icon-only`:``,s=n.ariaLabel?` aria-label="${n.ariaLabel}"`:``,c=n.disabled?` disabled`:``,l=n.fullWidth?` full-width`:``;return`<mms-button
  variant="${n.variant}"${r}
  size="${n.size}"
  roundness="${n.roundness}"
  label="${n.label}"${i}${a}${o}${s}${c}${l}
></mms-button>`},language:`html`}}},render:e=>{let t=o(e.theme,e.colorScheme),r=s(e.theme,e.colorScheme);if(!t){let t=r===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,i=r===2?`Lacks step 10 (hover state). Use for branded text or badges, not buttons.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return n`
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
      <mms-button
        variant=${e.variant}
        color-scheme=${e.colorScheme}
        size=${e.size}
        roundness=${e.roundness}
        state=${e.state}
        ?disabled=${e.disabled}
        ?full-width=${e.fullWidth}
        label=${e.label}
        left-icon=${e.leftIcon||``}
        right-icon=${e.rightIcon||``}
        ?icon-only=${e.iconOnly}
        aria-label=${e.ariaLabel||``}
        data-density=${e.density}
      ></mms-button>
    `}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Button</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Buttons trigger actions. The MMS Design System provides a unified button component with three visual variants — <strong>primary</strong>, <strong>secondary</strong>, and <strong>ghost</strong> — each serving distinct interaction patterns.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Variants -->
      <h2 style="\${t.h2}">Variants</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel} display: flex; flex-direction: column;">
          <h3 style="\${t.h3}">Primary</h3>
          <p style="\${t.bodySm} \${doc.muted} flex: 1;">
            High-emphasis actions. Use for the primary call-to-action on a page or form.
          </p>
          <div style="margin-top: \${space.content};"><mms-button variant="primary" label="Submit"></mms-button></div>
        </div>
        <div style="\${doc.panel} display: flex; flex-direction: column;">
          <h3 style="\${t.h3}">Secondary</h3>
          <p style="\${t.bodySm} \${doc.muted} flex: 1;">
            Medium-emphasis actions. Use alongside primary buttons for secondary options.
          </p>
          <div style="margin-top: \${space.content};"><mms-button variant="secondary" label="Cancel"></mms-button></div>
        </div>
        <div style="\${doc.panel} display: flex; flex-direction: column;">
          <h3 style="\${t.h3}">Ghost</h3>
          <p style="\${t.bodySm} \${doc.muted} flex: 1;">
            Low-emphasis actions. Use for tertiary actions or inline links.
          </p>
          <div style="margin-top: \${space.content};"><mms-button variant="ghost" label="Learn more"></mms-button></div>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Color Schemes -->
      <h2 style="\${t.h2}">Color schemes</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The <code style="\${t.monoSm}">color-scheme</code> prop controls which color palette the button uses. Four options are available:
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: \${space.content}; margin-bottom: \${space.content};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Primary &amp; secondary</h3>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            Brand colors defined by the active theme. Use for most UI actions.
          </p>
          <div style="display: flex; gap: \${space.content};">
            <mms-button variant="primary" color-scheme="primary" label="Primary" size="sm"></mms-button>
            <mms-button variant="primary" color-scheme="secondary" label="Secondary" size="sm"></mms-button>
          </div>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Accent &amp; onyx</h3>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            <strong>Accent</strong> is theme-specific highlight color. <strong>Onyx</strong> is structural black — always available.
          </p>
          <div style="display: flex; gap: \${space.content};">
            <mms-button variant="primary" color-scheme="accent" label="Accent" size="sm"></mms-button>
            <mms-button variant="primary" color-scheme="onyx" label="Onyx" size="sm"></mms-button>
          </div>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Error</h3>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            Structural destructive-action red — fixed across all themes. Use for delete/remove/destroy actions.
          </p>
          <div style="display: flex; gap: \${space.content};">
            <mms-button variant="primary" color-scheme="error" label="Delete" size="sm"></mms-button>
            <mms-button variant="secondary" color-scheme="error" label="Remove" size="sm"></mms-button>
            <mms-button variant="ghost" color-scheme="error" label="Discard" size="sm"></mms-button>
          </div>
        </div>
      </div>

      <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.subsection};">
        Theme determines which color schemes are available. Onyx and error are structural — the only palettes guaranteed across all themes. Colors that don't meet WCAG contrast requirements are classified as decorative (9 steps only, no hover/pressed states) and are out of scope for interactive components.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Full Width -->
      <h2 style="\${t.h2}">Full width</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Use <code style="\${t.monoSm}">full-width</code> to stretch the button to fill its container instead of shrink-wrapping to the label — common in modal footers and mobile-width forms.
      </p>

      <div style="max-width: 320px; margin-bottom: \${space.subsection};">
        <mms-button variant="primary" label="Continue" full-width></mms-button>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Three sizes accommodate different contexts — compact UIs, standard forms, and prominent CTAs.
      </p>

      <div style="display: flex; align-items: center; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-button variant="primary" size="sm" label="Small"></mms-button>
        <mms-button variant="primary" size="md" label="Medium"></mms-button>
        <mms-button variant="primary" size="lg" label="Large"></mms-button>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Icons -->
      <h2 style="\${t.h2}">With icons</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Icons can be placed on the left, right, or both sides of the label to reinforce meaning.
      </p>

      <div style="display: flex; align-items: center; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-button variant="primary" label="Download" left-icon="download"></mms-button>
        <mms-button variant="secondary" label="Continue" right-icon="caret-right"></mms-button>
        <div style="margin-top: 5px;"><mms-button variant="ghost" label="Settings" left-icon="gear"></mms-button></div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Icon-Only Mode -->
      <h2 style="\${t.h2}">Icon-only mode</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Use <code style="\${t.monoSm}">icon-only</code> for compact actions where visual context makes the icon meaning clear (close, menu, settings). The <code style="\${t.monoSm}">label</code> prop becomes the accessible name — <strong>always provide a label for screen readers</strong>.
      </p>

      <div style="display: flex; align-items: center; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-button variant="ghost" label="Close" left-icon="x" icon-only></mms-button>
        <mms-button variant="ghost" label="Menu" left-icon="list" icon-only></mms-button>
        <mms-button variant="secondary" label="Settings" left-icon="gear" icon-only></mms-button>
        <mms-button variant="primary" label="Add item" left-icon="plus" icon-only></mms-button>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
          <h3 style="\${t.h3}">Accessibility requirements</h3>
          <ul style="\${t.bodySm} margin: 0; padding-left: var(--spacing-lg1);">
            <li style="margin-bottom: \${space.label};"><strong>Use <code style="\${t.monoSm}">aria-label</code> for overrides</strong> — When the accessible name should differ from the visible label text.</li>
            <li><strong>Touch targets</strong> — Icon-only buttons enforce WCAG 2.2 minimum sizing: 44×44px on touch devices, 24×24px on mouse devices.</li>
          </ul>
        </div>
      </mms-card>

      <pre style="\${doc.pre} margin-bottom: \${space.subsection};"><code>&lt;!-- Standard: label becomes aria-label --&gt;
&lt;mms-button label="Close" left-icon="x" icon-only&gt;&lt;/mms-button&gt;

&lt;!-- Override: different aria-label for more context --&gt;
&lt;mms-button left-icon="x" icon-only aria-label="Close dialog"&gt;&lt;/mms-button&gt;</code></pre>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['button'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Focus:</strong> Announces label text and "button"</li>
        <li style="margin-bottom: \${space.label};"><strong>Disabled:</strong> Announces "dimmed" or "unavailable" (varies by screen reader)</li>
        <li style="margin-bottom: \${space.label};"><strong>Icon-only:</strong> Uses <code style="\${t.monoSm}">label</code> as <code style="\${t.monoSm}">aria-label</code> — always provide a label</li>
        <li><strong>Loading:</strong> <code style="\${t.monoSm}">aria-busy="true"</code> indicates processing state</li>
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
            <td style="\${doc.td}">Move focus to / from the button</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd></td>
            <td style="\${doc.td}">Activate the button</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Space</kbd></td>
            <td style="\${doc.td}">Activate the button</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="\${doc.pre}"><code>&lt;mms-button variant="primary" label="Submit"&gt;&lt;/mms-button&gt;
&lt;mms-button variant="secondary" label="Cancel"&gt;&lt;/mms-button&gt;
&lt;mms-button variant="ghost" label="Learn more"&gt;&lt;/mms-button&gt;</code></pre>

    </div>
  \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    variant: 'primary',
    size: 'md',
    roundness: 'subtle',
    state: 'default',
    disabled: false,
    fullWidth: false,
    label: 'Button',
    leftIcon: '',
    rightIcon: '',
    iconOnly: false,
    ariaLabel: '',
    colorScheme: 'primary',
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => {
    // Layout only - theme/mode/background handled by global decorator
    return html\`
        <div
          style="
            min-height: 80px;
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
    // Component Props
    variant: {
      name: 'Variant',
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Visual variant: primary (solid), secondary (outlined), ghost (text only)',
      table: {
        category: 'Component Props'
      }
    },
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx', 'error'],
      description: 'Color palette for the button. "onyx" and "error" are structural (work on all themes). Brand colors (primary/secondary/accent) availability depends on theme.',
      table: {
        category: 'Component Props'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        category: 'Component Props'
      }
    },
    roundness: {
      name: 'Roundness',
      control: 'select',
      options: ['boxed', 'subtle', 'rounded'],
      description: 'Corner radius: boxed (0), subtle (4px), rounded (pill)',
      table: {
        category: 'Component Props'
      }
    },
    state: {
      name: 'State',
      control: 'select',
      options: ['default', 'hover', 'focus', 'active'],
      description: 'Preview state (Storybook only)',
      table: {
        category: 'Component Props'
      }
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disabled state',
      table: {
        category: 'Component Props'
      }
    },
    fullWidth: {
      name: 'Full Width',
      control: 'boolean',
      description: 'Stretch to the container\\'s full width instead of shrink-wrapping to the label',
      table: {
        category: 'Component Props'
      }
    },
    label: {
      name: 'Label',
      control: 'text',
      description: 'Button text',
      table: {
        category: 'Component Props'
      }
    },
    leftIcon: {
      name: 'Left Icon',
      control: 'select',
      options: iconOptions,
      description: 'Curated list of common button icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.',
      table: {
        category: 'Component Props'
      }
    },
    rightIcon: {
      name: 'Right Icon',
      control: 'select',
      options: iconOptions,
      description: 'Curated list of common button icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.',
      table: {
        category: 'Component Props'
      }
    },
    iconOnly: {
      name: 'Icon Only',
      control: 'boolean',
      description: 'Hides visible label, renders icon only. Label becomes aria-label for screen readers.',
      table: {
        category: 'Component Props'
      }
    },
    ariaLabel: {
      name: 'Aria Label',
      control: 'text',
      description: 'Override accessible name. Use when aria-label should differ from label text.',
      table: {
        category: 'Component Props'
      }
    },
    // Global Props
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
      description: 'Brand theme',
      table: {
        category: 'Global Props'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Spacing density',
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
          const colorScheme = a.colorScheme !== 'primary' ? \` color-scheme="\${a.colorScheme}"\` : '';
          const leftIcon = a.leftIcon ? \` left-icon="\${a.leftIcon}"\` : '';
          const rightIcon = a.rightIcon ? \` right-icon="\${a.rightIcon}"\` : '';
          const iconOnly = a.iconOnly ? ' icon-only' : '';
          const ariaLabel = a.ariaLabel ? \` aria-label="\${a.ariaLabel}"\` : '';
          const disabled = a.disabled ? ' disabled' : '';
          const fullWidth = a.fullWidth ? ' full-width' : '';
          return \`<mms-button
  variant="\${a.variant}"\${colorScheme}
  size="\${a.size}"
  roundness="\${a.roundness}"
  label="\${a.label}"\${leftIcon}\${rightIcon}\${iconOnly}\${ariaLabel}\${disabled}\${fullWidth}
></mms-button>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    variant: string;
    colorScheme: string;
    size: string;
    roundness: string;
    state: string;
    disabled: boolean;
    fullWidth: boolean;
    label: string;
    leftIcon: string;
    rightIcon: string;
    iconOnly: boolean;
    ariaLabel: string;
    theme: string;
    density: string;
  }) => {
    // Validate colorScheme × theme combination using shared config
    const valid = isValidColorScheme(args.theme as Theme, args.colorScheme as ColorScheme);
    const tier = getPaletteTier(args.theme as Theme, args.colorScheme as ColorScheme);
    if (!valid) {
      const tierLabel = tier === 2 ? 'Tier 2 (Text + Surface)' : 'Tier 3 (Decorative)';
      const tierReason = tier === 2 ? 'Lacks step 10 (hover state). Use for branded text or badges, not buttons.' : 'Lacks text contrast and hover states. Decorative backgrounds only.';
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
      <mms-button
        variant=\${args.variant}
        color-scheme=\${args.colorScheme}
        size=\${args.size}
        roundness=\${args.roundness}
        state=\${args.state}
        ?disabled=\${args.disabled}
        ?full-width=\${args.fullWidth}
        label=\${args.label}
        left-icon=\${args.leftIcon || ''}
        right-icon=\${args.rightIcon || ''}
        ?icon-only=\${args.iconOnly}
        aria-label=\${args.ariaLabel || ''}
        data-density=\${args.density}
      ></mms-button>
    \`;
  }
}`,...T.parameters?.docs?.source}}},E=[`Overview`,`PlaygroundStory`]}));D();export{w as Overview,T as PlaygroundStory,E as __namedExportsOrder,C as default,D as n,x as t};