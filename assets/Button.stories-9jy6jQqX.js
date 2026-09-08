import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{s as n,t as r}from"./lit-CBo78ikN.js";import{n as i}from"./iframe-y4HxnH0J.js";import{i as a,n as o,r as s}from"./theme-constraints-xITgb_Dw.js";import{a as c,o as l,r as u,t as d}from"./a11y-outcome-DdXFaPju.js";var f=t({Overview:()=>v,PlaygroundStory:()=>y,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b,x=e((()=>{r(),i(),s(),c(),d(),p=`.arrow-left.arrow-right.arrow-up.arrow-down.arrow-clockwise.arrow-square-out.caret-left.caret-right.caret-up.caret-down.plus.minus.x.check.pencil.trash.copy.upload.download.export.floppy-disk.printer.paperclip.play.pause.stop.magnifying-glass.funnel.gear.envelope.phone.share-network.user.sign-in.sign-out.lock.lock-open.eye.eye-slash.calendar.shopping-cart.heart.star.question.info`.split(`.`),m={title:`Actions/Button`,tags:[`!autodocs`]},h={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},g=`680px`,_=`960px`,v={name:`Overview`,render:()=>n`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${_}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${h.h1}">Button</h1>
      <p style="${h.body} opacity: 0.85; max-width: ${g}; margin-bottom: 2rem;">
        Buttons trigger actions. The MMS Design System provides a unified button component with three visual variants — <strong>primary</strong>, <strong>secondary</strong>, and <strong>ghost</strong> — each serving distinct interaction patterns.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Variants -->
      <h2 style="${h.h2}">Variants</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${h.h3}">Primary</p>
          <p style="${h.bodySm} opacity: 0.85; flex: 1;">
            High-emphasis actions. Use for the primary call-to-action on a page or form.
          </p>
          <div style="margin-top: 1rem;"><mms-button variant="primary" label="Submit"></mms-button></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${h.h3}">Secondary</p>
          <p style="${h.bodySm} opacity: 0.85; flex: 1;">
            Medium-emphasis actions. Use alongside primary buttons for secondary options.
          </p>
          <div style="margin-top: 1rem;"><mms-button variant="secondary" label="Cancel"></mms-button></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${h.h3}">Ghost</p>
          <p style="${h.bodySm} opacity: 0.85; flex: 1;">
            Low-emphasis actions. Use for tertiary actions or inline links.
          </p>
          <div style="margin-top: 1rem;"><mms-button variant="ghost" label="Learn more"></mms-button></div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="${h.h2}">Color Schemes</h2>
      <p style="${h.bodySm} opacity: 0.85; max-width: ${g}; margin-bottom: 1.5rem;">
        The <code style="${h.monoSm}">color-scheme</code> prop controls which color palette the button uses. Four options are available:
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${h.h3}">Primary &amp; Secondary</p>
          <p style="${h.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Brand colors defined by the active theme. Use for most UI actions.
          </p>
          <div style="display: flex; gap: 0.75rem;">
            <mms-button variant="primary" color-scheme="primary" label="Primary" size="sm"></mms-button>
            <mms-button variant="primary" color-scheme="secondary" label="Secondary" size="sm"></mms-button>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${h.h3}">Accent &amp; Onyx</p>
          <p style="${h.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            <strong>Accent</strong> is theme-specific highlight color. <strong>Onyx</strong> is structural black — always available.
          </p>
          <div style="display: flex; gap: 0.75rem;">
            <mms-button variant="primary" color-scheme="accent" label="Accent" size="sm"></mms-button>
            <mms-button variant="primary" color-scheme="onyx" label="Onyx" size="sm"></mms-button>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${h.h3}">Error</p>
          <p style="${h.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Structural destructive-action red — fixed across all themes. Use for delete/remove/destroy actions.
          </p>
          <div style="display: flex; gap: 0.75rem;">
            <mms-button variant="primary" color-scheme="error" label="Delete" size="sm"></mms-button>
            <mms-button variant="secondary" color-scheme="error" label="Remove" size="sm"></mms-button>
            <mms-button variant="ghost" color-scheme="error" label="Discard" size="sm"></mms-button>
          </div>
        </div>
      </div>

      <p style="${h.caption} opacity: 0.65; margin-bottom: 2rem;">
        Theme determines which color schemes are available. Onyx and error are structural — the only palettes guaranteed across all themes. Colors that don't meet WCAG contrast requirements are classified as decorative (9 steps only, no hover/pressed states) and are out of scope for interactive components.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Full Width -->
      <h2 style="${h.h2}">Full width</h2>
      <p style="${h.bodySm} opacity: 0.85; max-width: ${g}; margin-bottom: 1.5rem;">
        Use <code style="${h.monoSm}">full-width</code> to stretch the button to fill its container instead of shrink-wrapping to the label — common in modal footers and mobile-width forms.
      </p>

      <div style="max-width: 320px; margin-bottom: 2rem;">
        <mms-button variant="primary" label="Continue" full-width></mms-button>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="${h.h2}">Sizes</h2>
      <p style="${h.bodySm} opacity: 0.85; max-width: ${g}; margin-bottom: 1.5rem;">
        Three sizes accommodate different contexts — compact UIs, standard forms, and prominent CTAs.
      </p>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
        <mms-button variant="primary" size="sm" label="Small"></mms-button>
        <mms-button variant="primary" size="md" label="Medium"></mms-button>
        <mms-button variant="primary" size="lg" label="Large"></mms-button>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Icons -->
      <h2 style="${h.h2}">With icons</h2>
      <p style="${h.bodySm} opacity: 0.85; max-width: ${g}; margin-bottom: 1.5rem;">
        Icons can be placed on the left, right, or both sides of the label to reinforce meaning.
      </p>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
        <mms-button variant="primary" label="Download" left-icon="download"></mms-button>
        <mms-button variant="secondary" label="Continue" right-icon="caret-right"></mms-button>
        <div style="margin-top: 5px;"><mms-button variant="ghost" label="Settings" left-icon="gear"></mms-button></div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Icon-Only Mode -->
      <h2 style="${h.h2}">Icon-only mode</h2>
      <p style="${h.bodySm} opacity: 0.85; max-width: ${g}; margin-bottom: 1.5rem;">
        Use <code style="${h.monoSm}">icon-only</code> for compact actions where visual context makes the icon meaning clear (close, menu, settings). The <code style="${h.monoSm}">label</code> prop becomes the accessible name — <strong>always provide a label for screen readers</strong>.
      </p>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
        <mms-button variant="ghost" label="Close" left-icon="x" icon-only></mms-button>
        <mms-button variant="ghost" label="Menu" left-icon="list" icon-only></mms-button>
        <mms-button variant="secondary" label="Settings" left-icon="gear" icon-only></mms-button>
        <mms-button variant="primary" label="Add item" left-icon="plus" icon-only></mms-button>
      </div>

      <div style="padding: 1rem 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 1.5rem;">
        <p style="${h.h3}">A11y requirements</p>
        <ul style="${h.bodySm} opacity: 0.85; margin: 0; padding-left: 1.25rem;">
          <li style="margin-bottom: 0.5rem;"><strong>Always provide a <code style="${h.monoSm}">label</code></strong> — It becomes the <code style="${h.monoSm}">aria-label</code> for screen readers.</li>
          <li style="margin-bottom: 0.5rem;"><strong>Use <code style="${h.monoSm}">aria-label</code> for overrides</strong> — When the accessible name should differ from the visible label text.</li>
          <li style="margin-bottom: 0.5rem;"><strong>Touch targets</strong> — Icon-only buttons enforce WCAG 2.2 minimum sizing: 44×44px on touch devices, 24×24px on mouse devices.</li>
        </ul>
      </div>

      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${h.monoSm} margin-bottom: 2rem;"><code>&lt;!-- Standard: label becomes aria-label --&gt;
&lt;mms-button label="Close" left-icon="x" icon-only&gt;&lt;/mms-button&gt;

&lt;!-- Override: different aria-label for more context --&gt;
&lt;mms-button left-icon="x" icon-only aria-label="Close dialog"&gt;&lt;/mms-button&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${h.h2}">Accessibility</h2>

      <h3 style="${h.h3}">WCAG 2.2 AA Compliance</h3>
      ${u(l.button.rows)}

      <h3 style="${h.h3}">Screen Reader Behavior</h3>
      <ul style="${h.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label text and "button"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Disabled:</strong> Announces "dimmed" or "unavailable" (varies by screen reader)</li>
        <li style="margin-bottom: 0.5rem;"><strong>Icon-only:</strong> Uses <code style="${h.monoSm}">label</code> as <code style="${h.monoSm}">aria-label</code> — always provide a label</li>
        <li><strong>Loading:</strong> <code style="${h.monoSm}">aria-busy="true"</code> indicates processing state</li>
      </ul>

      <h3 style="${h.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the button</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the button</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the button</td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="${h.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${h.monoSm}"><code>&lt;mms-button variant="primary" label="Submit"&gt;&lt;/mms-button&gt;
&lt;mms-button variant="secondary" label="Cancel"&gt;&lt;/mms-button&gt;
&lt;mms-button variant="ghost" label="Learn more"&gt;&lt;/mms-button&gt;</code></pre>

    </div>
  `},y={name:`Playground`,tags:[`!dev`],args:{variant:`primary`,size:`md`,roundness:`subtle`,state:`default`,disabled:!1,fullWidth:!1,label:`Button`,leftIcon:``,rightIcon:``,iconOnly:!1,ariaLabel:``,colorScheme:`primary`,theme:`maximus`,density:`default`},decorators:[e=>n`
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
      `],argTypes:{variant:{name:`Variant`,control:`select`,options:[`primary`,`secondary`,`ghost`],description:`Visual variant: primary (solid), secondary (outlined), ghost (text only)`,table:{category:`Component Props`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`,`error`],description:`Color palette for the button. "onyx" and "error" are structural (work on all themes). Brand colors (primary/secondary/accent) availability depends on theme.`,table:{category:`Component Props`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Button size`,table:{category:`Component Props`}},roundness:{name:`Roundness`,control:`select`,options:[`boxed`,`subtle`,`rounded`],description:`Corner radius: boxed (0), subtle (4px), rounded (pill)`,table:{category:`Component Props`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`active`],description:`Preview state (Storybook only)`,table:{category:`Component Props`}},disabled:{name:`Disabled`,control:`boolean`,description:`Disabled state`,table:{category:`Component Props`}},fullWidth:{name:`Full Width`,control:`boolean`,description:`Stretch to the container's full width instead of shrink-wrapping to the label`,table:{category:`Component Props`}},label:{name:`Label`,control:`text`,description:`Button text`,table:{category:`Component Props`}},leftIcon:{name:`Left Icon`,control:`select`,options:p,description:`Curated list of common button icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.`,table:{category:`Component Props`}},rightIcon:{name:`Right Icon`,control:`select`,options:p,description:`Curated list of common button icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.`,table:{category:`Component Props`}},iconOnly:{name:`Icon Only`,control:`boolean`,description:`Hides visible label, renders icon only. Label becomes aria-label for screen readers.`,table:{category:`Component Props`}},ariaLabel:{name:`Aria Label`,control:`text`,description:`Override accessible name. Use when aria-label should differ from label text.`,table:{category:`Component Props`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`uss-oh-dvs`,`default`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Spacing density`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=n.colorScheme===`primary`?``:` color-scheme="${n.colorScheme}"`,i=n.leftIcon?` left-icon="${n.leftIcon}"`:``,a=n.rightIcon?` right-icon="${n.rightIcon}"`:``,o=n.iconOnly?` icon-only`:``,s=n.ariaLabel?` aria-label="${n.ariaLabel}"`:``,c=n.disabled?` disabled`:``,l=n.fullWidth?` full-width`:``;return`<mms-button
  variant="${n.variant}"${r}
  size="${n.size}"
  roundness="${n.roundness}"
  label="${n.label}"${i}${a}${o}${s}${c}${l}
></mms-button>`},language:`html`}}},render:e=>{let t=a(e.theme,e.colorScheme),r=o(e.theme,e.colorScheme);if(!t){let t=r===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,i=r===2?`Lacks step 10 (hover state). Use for branded text or badges, not buttons.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return n`
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
    `}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Button</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Buttons trigger actions. The MMS Design System provides a unified button component with three visual variants — <strong>primary</strong>, <strong>secondary</strong>, and <strong>ghost</strong> — each serving distinct interaction patterns.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Variants -->
      <h2 style="\${t.h2}">Variants</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Primary</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            High-emphasis actions. Use for the primary call-to-action on a page or form.
          </p>
          <div style="margin-top: 1rem;"><mms-button variant="primary" label="Submit"></mms-button></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Secondary</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Medium-emphasis actions. Use alongside primary buttons for secondary options.
          </p>
          <div style="margin-top: 1rem;"><mms-button variant="secondary" label="Cancel"></mms-button></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Ghost</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Low-emphasis actions. Use for tertiary actions or inline links.
          </p>
          <div style="margin-top: 1rem;"><mms-button variant="ghost" label="Learn more"></mms-button></div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="\${t.h2}">Color Schemes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">color-scheme</code> prop controls which color palette the button uses. Four options are available:
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Primary &amp; Secondary</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Brand colors defined by the active theme. Use for most UI actions.
          </p>
          <div style="display: flex; gap: 0.75rem;">
            <mms-button variant="primary" color-scheme="primary" label="Primary" size="sm"></mms-button>
            <mms-button variant="primary" color-scheme="secondary" label="Secondary" size="sm"></mms-button>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Accent &amp; Onyx</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            <strong>Accent</strong> is theme-specific highlight color. <strong>Onyx</strong> is structural black — always available.
          </p>
          <div style="display: flex; gap: 0.75rem;">
            <mms-button variant="primary" color-scheme="accent" label="Accent" size="sm"></mms-button>
            <mms-button variant="primary" color-scheme="onyx" label="Onyx" size="sm"></mms-button>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Error</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Structural destructive-action red — fixed across all themes. Use for delete/remove/destroy actions.
          </p>
          <div style="display: flex; gap: 0.75rem;">
            <mms-button variant="primary" color-scheme="error" label="Delete" size="sm"></mms-button>
            <mms-button variant="secondary" color-scheme="error" label="Remove" size="sm"></mms-button>
            <mms-button variant="ghost" color-scheme="error" label="Discard" size="sm"></mms-button>
          </div>
        </div>
      </div>

      <p style="\${t.caption} opacity: 0.65; margin-bottom: 2rem;">
        Theme determines which color schemes are available. Onyx and error are structural — the only palettes guaranteed across all themes. Colors that don't meet WCAG contrast requirements are classified as decorative (9 steps only, no hover/pressed states) and are out of scope for interactive components.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Full Width -->
      <h2 style="\${t.h2}">Full width</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">full-width</code> to stretch the button to fill its container instead of shrink-wrapping to the label — common in modal footers and mobile-width forms.
      </p>

      <div style="max-width: 320px; margin-bottom: 2rem;">
        <mms-button variant="primary" label="Continue" full-width></mms-button>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Three sizes accommodate different contexts — compact UIs, standard forms, and prominent CTAs.
      </p>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
        <mms-button variant="primary" size="sm" label="Small"></mms-button>
        <mms-button variant="primary" size="md" label="Medium"></mms-button>
        <mms-button variant="primary" size="lg" label="Large"></mms-button>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Icons -->
      <h2 style="\${t.h2}">With icons</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Icons can be placed on the left, right, or both sides of the label to reinforce meaning.
      </p>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
        <mms-button variant="primary" label="Download" left-icon="download"></mms-button>
        <mms-button variant="secondary" label="Continue" right-icon="caret-right"></mms-button>
        <div style="margin-top: 5px;"><mms-button variant="ghost" label="Settings" left-icon="gear"></mms-button></div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Icon-Only Mode -->
      <h2 style="\${t.h2}">Icon-only mode</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Use <code style="\${t.monoSm}">icon-only</code> for compact actions where visual context makes the icon meaning clear (close, menu, settings). The <code style="\${t.monoSm}">label</code> prop becomes the accessible name — <strong>always provide a label for screen readers</strong>.
      </p>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
        <mms-button variant="ghost" label="Close" left-icon="x" icon-only></mms-button>
        <mms-button variant="ghost" label="Menu" left-icon="list" icon-only></mms-button>
        <mms-button variant="secondary" label="Settings" left-icon="gear" icon-only></mms-button>
        <mms-button variant="primary" label="Add item" left-icon="plus" icon-only></mms-button>
      </div>

      <div style="padding: 1rem 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 1.5rem;">
        <p style="\${t.h3}">A11y requirements</p>
        <ul style="\${t.bodySm} opacity: 0.85; margin: 0; padding-left: 1.25rem;">
          <li style="margin-bottom: 0.5rem;"><strong>Always provide a <code style="\${t.monoSm}">label</code></strong> — It becomes the <code style="\${t.monoSm}">aria-label</code> for screen readers.</li>
          <li style="margin-bottom: 0.5rem;"><strong>Use <code style="\${t.monoSm}">aria-label</code> for overrides</strong> — When the accessible name should differ from the visible label text.</li>
          <li style="margin-bottom: 0.5rem;"><strong>Touch targets</strong> — Icon-only buttons enforce WCAG 2.2 minimum sizing: 44×44px on touch devices, 24×24px on mouse devices.</li>
        </ul>
      </div>

      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm} margin-bottom: 2rem;"><code>&lt;!-- Standard: label becomes aria-label --&gt;
&lt;mms-button label="Close" left-icon="x" icon-only&gt;&lt;/mms-button&gt;

&lt;!-- Override: different aria-label for more context --&gt;
&lt;mms-button left-icon="x" icon-only aria-label="Close dialog"&gt;&lt;/mms-button&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['button'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces label text and "button"</li>
        <li style="margin-bottom: 0.5rem;"><strong>Disabled:</strong> Announces "dimmed" or "unavailable" (varies by screen reader)</li>
        <li style="margin-bottom: 0.5rem;"><strong>Icon-only:</strong> Uses <code style="\${t.monoSm}">label</code> as <code style="\${t.monoSm}">aria-label</code> — always provide a label</li>
        <li><strong>Loading:</strong> <code style="\${t.monoSm}">aria-busy="true"</code> indicates processing state</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to / from the button</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the button</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the button</td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm}"><code>&lt;mms-button variant="primary" label="Submit"&gt;&lt;/mms-button&gt;
&lt;mms-button variant="secondary" label="Cancel"&gt;&lt;/mms-button&gt;
&lt;mms-button variant="ghost" label="Learn more"&gt;&lt;/mms-button&gt;</code></pre>

    </div>
  \`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      options: ['maximus', 'va-gov', 'uss-oh-dvs', 'default'],
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
}`,...y.parameters?.docs?.source}}},b=[`Overview`,`PlaygroundStory`]}));x();export{v as Overview,y as PlaygroundStory,b as __namedExportsOrder,m as default,x as n,f as t};