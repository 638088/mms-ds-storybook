import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-CBo78ikN.js";import{n as a}from"./iframe-CSzr-2iw.js";import{i as o,n as s,r as c}from"./theme-constraints-xITgb_Dw.js";import{a as l,o as u,r as d,t as f}from"./a11y-outcome-CiARakld.js";import{i as p,n as m,t as h}from"./ref-LKDIq4za.js";import{t as g}from"./mms-drawer.component-CI70zMR4.js";import{t as _}from"./mms-text-field.component-DW8G20rj.js";var v=t({Overview:()=>N,PlaygroundStory:()=>F,__namedExportsOrder:()=>I,default:()=>b});function y(e){e.value&&(e.value.open=!0)}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=e((()=>{i(),h(),g(),a(),_(),c(),l(),f(),b={title:`Content Display/Drawer`,tags:[`!autodocs`],parameters:{layout:`fullscreen`}},x={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},S=`680px`,C=`960px`,w=m(),T=m(),E=m(),D=m(),O=m(),k=m(),A=m(),j=m(),M=m(),N={name:`Overview`,render:()=>r`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${C}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${x.h1}">Drawer</h1>
      <p style="${x.body} opacity: 0.85; max-width: ${S}; margin-bottom: 2rem;">
        A side panel that slides in from the right edge of the viewport, spanning full height. Used
        for supplemental content, filters, forms, and contextual information that doesn't require
        the full-screen weight of a modal. Traps keyboard focus while open (activated once the
        slide-in animation completes), restores focus to the invoking element on close, and closes
        via close button, overlay click, or Escape.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${x.h2}">Basic usage</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        A title, a description, and primary/secondary actions in the footer.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open drawer" @click=${()=>y(w)}></mms-button>
        <mms-drawer
          ${p(w)}
          title-text="Filter results"
          desc-text="Narrow the list below by any combination of these fields."
          primary-label="Apply"
          secondary-label="Reset"
        ></mms-drawer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="${x.h2}">Sizes</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        Four sizes control the panel's max-width: <code style="${x.monoSm}">xl</code> (default, 960px),
        <code style="${x.monoSm}">lg</code> (800px), <code style="${x.monoSm}">md</code> (640px),
        and <code style="${x.monoSm}">sm</code> (320px). <code style="${x.monoSm}">sm</code>
        also stacks footer actions full-width and drops the left-aligned tertiary action's
        opposite-side grouping, for compact panels.
      </p>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open xl" @click=${()=>y(T)}></mms-button>
        <mms-drawer ${p(T)} size="xl" title-text="XL (960px)" desc-text="Used for content-rich panels."></mms-drawer>

        <mms-button variant="secondary" label="Open lg" @click=${()=>y(E)}></mms-button>
        <mms-drawer ${p(E)} size="lg" title-text="LG (800px)" desc-text="Used for standard forms and filters."></mms-drawer>

        <mms-button variant="secondary" label="Open md" @click=${()=>y(D)}></mms-button>
        <mms-drawer ${p(D)} size="md" title-text="MD (640px)" desc-text="Used for shorter panels."></mms-drawer>

        <mms-button variant="secondary" label="Open sm" @click=${()=>y(O)}></mms-button>
        <mms-drawer ${p(O)} size="sm" title-text="Quick filter" desc-text="Full-width stacked actions." primary-label="Apply" secondary-label="Reset"></mms-drawer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Tertiary Action -->
      <h2 style="${x.h2}">Tertiary action</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        Setting <code style="${x.monoSm}">tertiary-label</code> adds a ghost-variant action, left-aligned
        opposite the primary/secondary group. Use for a low-emphasis option like "Reset all" that
        doesn't close the panel.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open drawer" @click=${()=>y(k)}></mms-button>
        <mms-drawer
          ${p(k)}
          title-text="Notification preferences"
          desc-text="Choose how you'd like to be notified."
          primary-label="Save"
          secondary-label="Cancel"
          tertiary-label="Reset to defaults"
        ></mms-drawer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Without close icon -->
      <h2 style="${x.h2}">Without the close icon</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        <code style="${x.monoSm}">close-icon</code> defaults to <code style="${x.monoSm}">true</code>.
        To hide it, set the <code style="${x.monoSm}">closeIcon</code> property to <code style="${x.monoSm}">false</code>
        directly (e.g. <code style="${x.monoSm}">el.closeIcon = false</code> or a template's
        <code style="${x.monoSm}">.closeIcon=\${false}</code> binding) — as a boolean property, its plain-HTML
        attribute form has no falsy representation, so <code style="${x.monoSm}">close-icon="false"</code>
        in static markup would still evaluate true. Use this to force a decision through the footer actions only.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open drawer" @click=${()=>y(A)}></mms-button>
        <mms-drawer
          ${p(A)}
          .closeIcon=${!1}
          size="md"
          title-text="Confirm changes"
          desc-text="You must choose an option below to continue."
          primary-label="Discard"
          secondary-label="Keep editing"
        ></mms-drawer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Rich content slot -->
      <h2 style="${x.h2}">Rich content</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        The default slot accepts any markup as light DOM children, rendered below the description —
        forms, lists, custom components, anything. The slot itself has no opinion about its content;
        a text field is shown below purely as one example. Slotted focusable elements participate in
        the same focus trap as the footer actions.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open drawer" @click=${()=>y(j)}></mms-button>
        <mms-drawer
          ${p(j)}
          size="lg"
          title-text="Update your address"
          desc-text="This will be used for all future correspondence."
          primary-label="Save address"
          secondary-label="Cancel"
        >
          <mms-text-field label="Street address"></mms-text-field>
        </mms-drawer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Without a footer -->
      <h2 style="${x.h2}">Without a footer</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        Unlike <code style="${x.monoSm}">mms-modal</code> (which always renders a primary action),
        all three footer buttons on <code style="${x.monoSm}">mms-drawer</code> are presence-based —
        leaving <code style="${x.monoSm}">primary-label</code>, <code style="${x.monoSm}">secondary-label</code>,
        and <code style="${x.monoSm}">tertiary-label</code> all empty omits the footer entirely. Use
        for read-only or purely informational panels.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open drawer" @click=${()=>y(M)}></mms-button>
        <mms-drawer
          ${p(M)}
          title-text="Release notes"
          desc-text="What's new in this version."
          primary-label=""
          secondary-label=""
        ></mms-drawer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${x.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${x.bodySm} margin: 0;">
          <strong>Escape is the documented exit method.</strong> Trapping focus inside a dialog would
          otherwise violate WCAG 2.1.2 (No Keyboard Trap). The Escape key satisfies the criterion's
          "standard exit method" exception, so <code style="${x.monoSm}">mms-drawer</code> always closes
          on Escape regardless of which element currently has focus.
        </p>
      </div>

      <h3 style="${x.h3}">WCAG 2.2 AA Compliance</h3>
      ${d(u.drawer.rows)}

      <h3 style="${x.h3}">Screen Reader Behavior</h3>
      <ul style="${x.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Open:</strong> Announces the dialog role and title as focus moves into the panel once the slide-in animation completes</li>
        <li style="margin-bottom: 0.5rem;"><strong>Description:</strong> Read automatically as part of the dialog's accessible description via <code style="${x.monoSm}">aria-describedby</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Close button:</strong> Announced as "Close drawer, button" regardless of visible label (icon-only)</li>
        <li><strong>Close:</strong> Focus and announcement return to the element that opened the panel once the slide-out animation completes</li>
      </ul>

      <h3 style="${x.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move to the next focusable element; wraps from the last to the first</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move to the previous focusable element; wraps from the first to the last</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close the panel and restore focus to the invoking element</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},P=480,F={name:`Playground`,tags:[`!dev`],args:{size:`md`,closeIcon:!0,titleText:`Filter results`,description:!0,descText:`Narrow the list below by any combination of these fields.`,primaryLabel:`Apply`,secondaryLabel:`Reset`,tertiaryLabel:``,richContent:!1,colorScheme:`primary`,theme:`maximus`,density:`default`},argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`,`xl`],description:`Panel max-width and footer layout (sm stacks actions full-width)`,table:{category:`Behavior`}},closeIcon:{name:`Close icon`,control:`boolean`,description:`Shows the icon-only close button in the header. Default true — this control uses a property binding, so it toggles correctly here, but a plain HTML attribute cannot represent the false state (see Overview).`,table:{category:`Behavior`}},titleText:{name:`Title text`,control:`text`,description:`Panel title, rendered as the accessible name`,table:{category:`Content`}},description:{name:`Show description`,control:`boolean`,description:`Whether to render the description paragraph`,table:{category:`Content`}},descText:{name:`Description text`,control:`text`,description:`Description paragraph content`,table:{category:`Content`}},primaryLabel:{name:`Primary label`,control:`text`,description:`Primary action button label — hidden when empty`,table:{category:`Content`}},secondaryLabel:{name:`Secondary label`,control:`text`,description:`Secondary action button label — hidden when empty`,table:{category:`Content`}},tertiaryLabel:{name:`Tertiary label`,control:`text`,description:`Ghost-variant action label, left-aligned — hidden when empty`,table:{category:`Content`}},richContent:{name:`Rich content (slot)`,control:`boolean`,description:`The default slot accepts any markup as light DOM children — form fields, lists, custom components, anything — rendered below the description. This toggle inserts a text field purely as one example of what can go there; the slot has no opinion about its content. Slotted focusable elements join the same focus trap as the footer actions.`,table:{category:`Content`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Color palette for the footer action buttons. "onyx" is structural (works on all themes) and is the default. Brand colors (primary/secondary/accent) availability depends on theme.`,table:{category:`Component Props`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects typography and action colors)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-drawer has no compact-specific styling yet, since panel chrome padding is intentionally fixed regardless of density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[`open`];n.size&&n.size!==`xl`&&r.push(`size="${n.size}"`),n.titleText&&r.push(`title-text="${n.titleText}"`),n.description===!1&&r.push(".description=${false}"),n.descText&&r.push(`desc-text="${n.descText}"`),n.closeIcon===!1&&r.push(".closeIcon=${false}"),n.primaryLabel&&r.push(`primary-label="${n.primaryLabel}"`),n.secondaryLabel&&r.push(`secondary-label="${n.secondaryLabel}"`),n.tertiaryLabel&&r.push(`tertiary-label="${n.tertiaryLabel}"`),n.colorScheme&&n.colorScheme!==`onyx`&&r.push(`color-scheme="${n.colorScheme}"`),n.density===`compact`&&r.push(`data-density="compact"`);let i=`<mms-drawer\n  ${r.join(`
  `)}\n>`;return n.richContent?`${i}\n  <mms-text-field label="Street address"></mms-text-field>\n</mms-drawer>`:`${i}\n</mms-drawer>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=m(),i=o(e.theme,e.colorScheme),a=s(e.theme,e.colorScheme);if(!i){let t=a===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,n=a===2?`Lacks step 10 (hover state). Use for branded text or badges, not interactive footer buttons.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return r`
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
        ">
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
              <strong>${t}:</strong> ${n}
            </p>
            <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
              See <em>Color Framework → Color Tiering</em> for details.
            </p>
          </div>
        </div>
      `}return r`
      <div style="position: relative; overflow: hidden; transform: translateZ(0); height: ${P}px;">
        <mms-drawer
          ${p(t)}
          size=${e.size}
          ?open=${!0}
          title-text=${e.titleText}
          ?description=${e.description}
          desc-text=${e.descText}
          ?close-icon=${e.closeIcon}
          primary-label=${e.primaryLabel||n}
          secondary-label=${e.secondaryLabel||n}
          tertiary-label=${e.tertiaryLabel||n}
          color-scheme=${e.colorScheme}
          data-density=${e.density===`compact`?`compact`:n}
          @close=${e=>{e.target.open=!0}}
        >
          ${e.richContent?r`
                <mms-text-field label="Street address"></mms-text-field>
                <p style="${x.caption} margin-top: 0.5rem; opacity: 0.6; font-style: italic;">
                  Example only — the slot accepts any markup. Enabling this doesn't add
                  <code>mms-text-field</code> as a dependency, and the slot isn't limited to
                  text fields or any specific component; forms, lists, custom panels, anything
                  can go here.
                </p>
              `:n}
        </mms-drawer>
      </div>
    `}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Drawer</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A side panel that slides in from the right edge of the viewport, spanning full height. Used
        for supplemental content, filters, forms, and contextual information that doesn't require
        the full-screen weight of a modal. Traps keyboard focus while open (activated once the
        slide-in animation completes), restores focus to the invoking element on close, and closes
        via close button, overlay click, or Escape.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        A title, a description, and primary/secondary actions in the footer.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open drawer" @click=\${() => openDrawer(basicRef)}></mms-button>
        <mms-drawer
          \${ref(basicRef)}
          title-text="Filter results"
          desc-text="Narrow the list below by any combination of these fields."
          primary-label="Apply"
          secondary-label="Reset"
        ></mms-drawer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Four sizes control the panel's max-width: <code style="\${t.monoSm}">xl</code> (default, 960px),
        <code style="\${t.monoSm}">lg</code> (800px), <code style="\${t.monoSm}">md</code> (640px),
        and <code style="\${t.monoSm}">sm</code> (320px). <code style="\${t.monoSm}">sm</code>
        also stacks footer actions full-width and drops the left-aligned tertiary action's
        opposite-side grouping, for compact panels.
      </p>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open xl" @click=\${() => openDrawer(sizeXlRef)}></mms-button>
        <mms-drawer \${ref(sizeXlRef)} size="xl" title-text="XL (960px)" desc-text="Used for content-rich panels."></mms-drawer>

        <mms-button variant="secondary" label="Open lg" @click=\${() => openDrawer(sizeLgRef)}></mms-button>
        <mms-drawer \${ref(sizeLgRef)} size="lg" title-text="LG (800px)" desc-text="Used for standard forms and filters."></mms-drawer>

        <mms-button variant="secondary" label="Open md" @click=\${() => openDrawer(sizeMdRef)}></mms-button>
        <mms-drawer \${ref(sizeMdRef)} size="md" title-text="MD (640px)" desc-text="Used for shorter panels."></mms-drawer>

        <mms-button variant="secondary" label="Open sm" @click=\${() => openDrawer(sizeSmRef)}></mms-button>
        <mms-drawer \${ref(sizeSmRef)} size="sm" title-text="Quick filter" desc-text="Full-width stacked actions." primary-label="Apply" secondary-label="Reset"></mms-drawer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Tertiary Action -->
      <h2 style="\${t.h2}">Tertiary action</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Setting <code style="\${t.monoSm}">tertiary-label</code> adds a ghost-variant action, left-aligned
        opposite the primary/secondary group. Use for a low-emphasis option like "Reset all" that
        doesn't close the panel.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open drawer" @click=\${() => openDrawer(tertiaryRef)}></mms-button>
        <mms-drawer
          \${ref(tertiaryRef)}
          title-text="Notification preferences"
          desc-text="Choose how you'd like to be notified."
          primary-label="Save"
          secondary-label="Cancel"
          tertiary-label="Reset to defaults"
        ></mms-drawer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Without close icon -->
      <h2 style="\${t.h2}">Without the close icon</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">close-icon</code> defaults to <code style="\${t.monoSm}">true</code>.
        To hide it, set the <code style="\${t.monoSm}">closeIcon</code> property to <code style="\${t.monoSm}">false</code>
        directly (e.g. <code style="\${t.monoSm}">el.closeIcon = false</code> or a template's
        <code style="\${t.monoSm}">.closeIcon=\\\${false}</code> binding) — as a boolean property, its plain-HTML
        attribute form has no falsy representation, so <code style="\${t.monoSm}">close-icon="false"</code>
        in static markup would still evaluate true. Use this to force a decision through the footer actions only.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open drawer" @click=\${() => openDrawer(noCloseIconRef)}></mms-button>
        <mms-drawer
          \${ref(noCloseIconRef)}
          .closeIcon=\${false}
          size="md"
          title-text="Confirm changes"
          desc-text="You must choose an option below to continue."
          primary-label="Discard"
          secondary-label="Keep editing"
        ></mms-drawer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Rich content slot -->
      <h2 style="\${t.h2}">Rich content</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The default slot accepts any markup as light DOM children, rendered below the description —
        forms, lists, custom components, anything. The slot itself has no opinion about its content;
        a text field is shown below purely as one example. Slotted focusable elements participate in
        the same focus trap as the footer actions.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open drawer" @click=\${() => openDrawer(richContentRef)}></mms-button>
        <mms-drawer
          \${ref(richContentRef)}
          size="lg"
          title-text="Update your address"
          desc-text="This will be used for all future correspondence."
          primary-label="Save address"
          secondary-label="Cancel"
        >
          <mms-text-field label="Street address"></mms-text-field>
        </mms-drawer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Without a footer -->
      <h2 style="\${t.h2}">Without a footer</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Unlike <code style="\${t.monoSm}">mms-modal</code> (which always renders a primary action),
        all three footer buttons on <code style="\${t.monoSm}">mms-drawer</code> are presence-based —
        leaving <code style="\${t.monoSm}">primary-label</code>, <code style="\${t.monoSm}">secondary-label</code>,
        and <code style="\${t.monoSm}">tertiary-label</code> all empty omits the footer entirely. Use
        for read-only or purely informational panels.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open drawer" @click=\${() => openDrawer(noFooterRef)}></mms-button>
        <mms-drawer
          \${ref(noFooterRef)}
          title-text="Release notes"
          desc-text="What's new in this version."
          primary-label=""
          secondary-label=""
        ></mms-drawer>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Escape is the documented exit method.</strong> Trapping focus inside a dialog would
          otherwise violate WCAG 2.1.2 (No Keyboard Trap). The Escape key satisfies the criterion's
          "standard exit method" exception, so <code style="\${t.monoSm}">mms-drawer</code> always closes
          on Escape regardless of which element currently has focus.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['drawer'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Open:</strong> Announces the dialog role and title as focus moves into the panel once the slide-in animation completes</li>
        <li style="margin-bottom: 0.5rem;"><strong>Description:</strong> Read automatically as part of the dialog's accessible description via <code style="\${t.monoSm}">aria-describedby</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Close button:</strong> Announced as "Close drawer, button" regardless of visible label (icon-only)</li>
        <li><strong>Close:</strong> Focus and announcement return to the element that opened the panel once the slide-out animation completes</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move to the next focusable element; wraps from the last to the first</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move to the previous focusable element; wraps from the first to the last</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close the panel and restore focus to the invoking element</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Behavior
    size: 'md' as DrawerSize,
    closeIcon: true,
    // Content
    titleText: 'Filter results',
    description: true,
    descText: 'Narrow the list below by any combination of these fields.',
    primaryLabel: 'Apply',
    secondaryLabel: 'Reset',
    tertiaryLabel: '',
    richContent: false,
    colorScheme: 'primary',
    // Global
    theme: 'maximus',
    density: 'default'
  },
  argTypes: {
    // ── Behavior ──────────────────────────────────────────────
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Panel max-width and footer layout (sm stacks actions full-width)',
      table: {
        category: 'Behavior'
      }
    },
    closeIcon: {
      name: 'Close icon',
      control: 'boolean',
      description: 'Shows the icon-only close button in the header. Default true — this control uses a property binding, so it toggles correctly here, but a plain HTML attribute cannot represent the false state (see Overview).',
      table: {
        category: 'Behavior'
      }
    },
    // ── Content ───────────────────────────────────────────────
    titleText: {
      name: 'Title text',
      control: 'text',
      description: 'Panel title, rendered as the accessible name',
      table: {
        category: 'Content'
      }
    },
    description: {
      name: 'Show description',
      control: 'boolean',
      description: 'Whether to render the description paragraph',
      table: {
        category: 'Content'
      }
    },
    descText: {
      name: 'Description text',
      control: 'text',
      description: 'Description paragraph content',
      table: {
        category: 'Content'
      }
    },
    primaryLabel: {
      name: 'Primary label',
      control: 'text',
      description: 'Primary action button label — hidden when empty',
      table: {
        category: 'Content'
      }
    },
    secondaryLabel: {
      name: 'Secondary label',
      control: 'text',
      description: 'Secondary action button label — hidden when empty',
      table: {
        category: 'Content'
      }
    },
    tertiaryLabel: {
      name: 'Tertiary label',
      control: 'text',
      description: 'Ghost-variant action label, left-aligned — hidden when empty',
      table: {
        category: 'Content'
      }
    },
    richContent: {
      name: 'Rich content (slot)',
      control: 'boolean',
      description: 'The default slot accepts any markup as light DOM children — form fields, lists, custom components, anything — rendered below the description. This toggle inserts a text field purely as one example of what can go there; the slot has no opinion about its content. Slotted focusable elements join the same focus trap as the footer actions.',
      table: {
        category: 'Content'
      }
    },
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Color palette for the footer action buttons. "onyx" is structural (works on all themes) and is the default. Brand colors (primary/secondary/accent) availability depends on theme.',
      table: {
        category: 'Component Props'
      }
    },
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['default', 'maximus', 'va-gov', 'uss-oh-dvs'],
      description: 'Brand theme (affects typography and action colors)',
      table: {
        category: 'Global'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Accepted as a global attribute passthrough — mms-drawer has no compact-specific styling yet, since panel chrome padding is intentionally fixed regardless of density',
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
          const attrs: string[] = ['open'];
          if (a.size && a.size !== 'xl') attrs.push(\`size="\${a.size}"\`);
          if (a.titleText) attrs.push(\`title-text="\${a.titleText}"\`);
          if (a.description === false) attrs.push('.description=\${false}');
          if (a.descText) attrs.push(\`desc-text="\${a.descText}"\`);
          if (a.closeIcon === false) attrs.push('.closeIcon=\${false}');
          if (a.primaryLabel) attrs.push(\`primary-label="\${a.primaryLabel}"\`);
          if (a.secondaryLabel) attrs.push(\`secondary-label="\${a.secondaryLabel}"\`);
          if (a.tertiaryLabel) attrs.push(\`tertiary-label="\${a.tertiaryLabel}"\`);
          if (a.colorScheme && a.colorScheme !== 'onyx') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          const openTag = \`<mms-drawer\\n  \${attrs.join('\\n  ')}\\n>\`;
          if (a.richContent) {
            return \`\${openTag}\\n  <mms-text-field label="Street address"></mms-text-field>\\n</mms-drawer>\`;
          }
          return \`\${openTag}\\n</mms-drawer>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none' // Preserve argTypes definition order
    }
  },
  render: (args: {
    size: DrawerSize;
    closeIcon: boolean;
    titleText: string;
    description: boolean;
    descText: string;
    primaryLabel: string;
    secondaryLabel: string;
    tertiaryLabel: string;
    richContent: boolean;
    colorScheme: ColorScheme;
    theme: Theme;
    density: string;
  }) => {
    const playgroundRef = createRef<MmsDrawer>();
    const valid = isValidColorScheme(args.theme, args.colorScheme);
    const tier = getPaletteTier(args.theme, args.colorScheme);
    if (!valid) {
      const tierLabel = tier === 2 ? 'Tier 2 (Text + Surface)' : 'Tier 3 (Decorative)';
      const tierReason = tier === 2 ? 'Lacks step 10 (hover state). Use for branded text or badges, not interactive footer buttons.' : 'Lacks text contrast and hover states. Decorative backgrounds only.';
      return html\`
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
        ">
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
        </div>
      \`;
    }
    return html\`
      <div style="position: relative; overflow: hidden; transform: translateZ(0); height: \${PLAYGROUND_CANVAS_HEIGHT}px;">
        <mms-drawer
          \${ref(playgroundRef)}
          size=\${args.size}
          ?open=\${true}
          title-text=\${args.titleText}
          ?description=\${args.description}
          desc-text=\${args.descText}
          ?close-icon=\${args.closeIcon}
          primary-label=\${args.primaryLabel || nothing}
          secondary-label=\${args.secondaryLabel || nothing}
          tertiary-label=\${args.tertiaryLabel || nothing}
          color-scheme=\${args.colorScheme}
          data-density=\${args.density === 'compact' ? 'compact' : nothing}
          @close=\${(e: Event) => {
      (e.target as MmsDrawer).open = true;
    }}
        >
          \${args.richContent ? html\`
                <mms-text-field label="Street address"></mms-text-field>
                <p style="\${t.caption} margin-top: 0.5rem; opacity: 0.6; font-style: italic;">
                  Example only — the slot accepts any markup. Enabling this doesn't add
                  <code>mms-text-field</code> as a dependency, and the slot isn't limited to
                  text fields or any specific component; forms, lists, custom panels, anything
                  can go here.
                </p>
              \` : nothing}
        </mms-drawer>
      </div>
    \`;
  }
}`,...F.parameters?.docs?.source}}},I=[`Overview`,`PlaygroundStory`]}));L();export{N as Overview,F as PlaygroundStory,I as __namedExportsOrder,b as default,L as n,v as t};