import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{c as a}from"./iframe-0m-KJlLB.js";import{t as o}from"./mms-drawer.component-C3MYAFZF.js";import{i as s,n as c,r as l}from"./theme-constraints-BnNpJNRe.js";import{n as u,r as d}from"./wcag-coverage-DNhlI7v1.js";import{t as f}from"./mms-inline-alert.component-BWndcKtJ.js";import{a as p,c as m,i as h,l as g,n as _,o as v,r as y,u as b}from"./doc-styles-BoEZknkJ.js";import{a as x,n as S}from"./a11y-outcome-o7pti1Vx.js";import{i as C,n as w,t as T}from"./ref-BS6EG0nL.js";import{t as E}from"./mms-text-field.component-DPUzfOvQ.js";var D=t({Overview:()=>z,PlaygroundStory:()=>V,__namedExportsOrder:()=>H,default:()=>k});function O(e){e.value&&(e.value.open=!0)}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U=e((()=>{i(),T(),o(),f(),a(),E(),l(),u(),S(),m(),k={title:`Content Display/Drawer`,tags:[`!autodocs`],parameters:{layout:`fullscreen`}},A=w(),j=w(),M=w(),N=w(),P=w(),F=w(),I=w(),L=w(),R=w(),z={name:`Overview`,render:()=>r`
    <div data-theme=${y} data-mode=${v()} style=${_}>

      <!-- Header -->
      <h1 style="${b.h1}">Drawer</h1>
      <p style="${b.body} ${p.muted} max-width: ${h}; margin-bottom: ${g.subsection};">
        A side panel that slides in from the right edge of the viewport, spanning full height. Used
        for supplemental content, filters, forms, and contextual information that doesn't require
        the full-screen weight of a modal. Traps keyboard focus while open (activated once the
        slide-in animation completes), restores focus to the invoking element on close, and closes
        via close button, overlay click, or Escape.
      </p>

      <hr style="${p.divider}" />

      <!-- Basic Usage -->
      <h2 style="${b.h2}">Basic usage</h2>
      <p style="${b.bodySm} ${p.muted} max-width: ${h}; margin-bottom: ${g.subsection};">
        A title, a description, and primary/secondary actions in the footer.
      </p>

      <div style="margin-bottom: ${g.subsection};">
        <mms-button variant="secondary" label="Open drawer" @click=${()=>O(A)}></mms-button>
        <mms-drawer
          ${C(A)}
          title-text="Filter results"
          desc-text="Narrow the list below by any combination of these fields."
          primary-label="Apply"
          secondary-label="Reset"
        ></mms-drawer>
      </div>

      <hr style="${p.divider}" />

      <!-- Sizes -->
      <h2 style="${b.h2}">Sizes</h2>
      <p style="${b.bodySm} ${p.muted} max-width: ${h}; margin-bottom: ${g.subsection};">
        Four sizes control the panel's max-width: <code style="${b.monoSm}">xl</code> (default, 960px),
        <code style="${b.monoSm}">lg</code> (800px), <code style="${b.monoSm}">md</code> (640px),
        and <code style="${b.monoSm}">sm</code> (320px). <code style="${b.monoSm}">sm</code>
        also stacks footer actions full-width and drops the left-aligned tertiary action's
        opposite-side grouping, for compact panels.
      </p>

      <div style="display: flex; gap: ${g.content}; flex-wrap: wrap; margin-bottom: ${g.subsection};">
        <mms-button variant="secondary" label="Open xl" @click=${()=>O(j)}></mms-button>
        <mms-drawer ${C(j)} size="xl" title-text="XL (960px)" desc-text="Used for content-rich panels."></mms-drawer>

        <mms-button variant="secondary" label="Open lg" @click=${()=>O(M)}></mms-button>
        <mms-drawer ${C(M)} size="lg" title-text="LG (800px)" desc-text="Used for standard forms and filters."></mms-drawer>

        <mms-button variant="secondary" label="Open md" @click=${()=>O(N)}></mms-button>
        <mms-drawer ${C(N)} size="md" title-text="MD (640px)" desc-text="Used for shorter panels."></mms-drawer>

        <mms-button variant="secondary" label="Open sm" @click=${()=>O(P)}></mms-button>
        <mms-drawer ${C(P)} size="sm" title-text="Quick filter" desc-text="Full-width stacked actions." primary-label="Apply" secondary-label="Reset"></mms-drawer>
      </div>

      <hr style="${p.divider}" />

      <!-- Tertiary Action -->
      <h2 style="${b.h2}">Tertiary action</h2>
      <p style="${b.bodySm} ${p.muted} max-width: ${h}; margin-bottom: ${g.subsection};">
        Setting <code style="${b.monoSm}">tertiary-label</code> adds a ghost-variant action, left-aligned
        opposite the primary/secondary group. Use for a low-emphasis option like "Reset all" that
        doesn't close the panel.
      </p>

      <div style="margin-bottom: ${g.subsection};">
        <mms-button variant="secondary" label="Open drawer" @click=${()=>O(F)}></mms-button>
        <mms-drawer
          ${C(F)}
          title-text="Notification preferences"
          desc-text="Choose how you'd like to be notified."
          primary-label="Save"
          secondary-label="Cancel"
          tertiary-label="Reset to defaults"
        ></mms-drawer>
      </div>

      <hr style="${p.divider}" />

      <!-- Without close icon -->
      <h2 style="${b.h2}">Without the close icon</h2>
      <p style="${b.bodySm} ${p.muted} max-width: ${h}; margin-bottom: ${g.subsection};">
        <code style="${b.monoSm}">close-icon</code> defaults to <code style="${b.monoSm}">true</code>.
        To hide it, set the <code style="${b.monoSm}">closeIcon</code> property to <code style="${b.monoSm}">false</code>
        directly (e.g. <code style="${b.monoSm}">el.closeIcon = false</code> or a template's
        <code style="${b.monoSm}">.closeIcon=\${false}</code> binding) — as a boolean property, its plain-HTML
        attribute form has no falsy representation, so <code style="${b.monoSm}">close-icon="false"</code>
        in static markup would still evaluate true. Use this to force a decision through the footer actions only.
      </p>

      <div style="margin-bottom: ${g.subsection};">
        <mms-button variant="secondary" label="Open drawer" @click=${()=>O(I)}></mms-button>
        <mms-drawer
          ${C(I)}
          .closeIcon=${!1}
          size="md"
          title-text="Confirm changes"
          desc-text="You must choose an option below to continue."
          primary-label="Discard"
          secondary-label="Keep editing"
        ></mms-drawer>
      </div>

      <hr style="${p.divider}" />

      <!-- Rich content slot -->
      <h2 style="${b.h2}">Rich content</h2>
      <p style="${b.bodySm} ${p.muted} max-width: ${h}; margin-bottom: ${g.subsection};">
        The default slot accepts any markup as light DOM children, rendered below the description —
        forms, lists, custom components, anything. The slot itself has no opinion about its content;
        a text field is shown below purely as one example. Slotted focusable elements participate in
        the same focus trap as the footer actions.
      </p>

      <div style="margin-bottom: ${g.subsection};">
        <mms-button variant="secondary" label="Open drawer" @click=${()=>O(L)}></mms-button>
        <mms-drawer
          ${C(L)}
          size="lg"
          title-text="Update your address"
          desc-text="This will be used for all future correspondence."
          primary-label="Save address"
          secondary-label="Cancel"
        >
          <mms-text-field label="Street address"></mms-text-field>
        </mms-drawer>
      </div>

      <hr style="${p.divider}" />

      <!-- Without a footer -->
      <h2 style="${b.h2}">Without a footer</h2>
      <p style="${b.bodySm} ${p.muted} max-width: ${h}; margin-bottom: ${g.subsection};">
        Unlike <code style="${b.monoSm}">mms-modal</code> (which always renders a primary action),
        all three footer buttons on <code style="${b.monoSm}">mms-drawer</code> are presence-based —
        leaving <code style="${b.monoSm}">primary-label</code>, <code style="${b.monoSm}">secondary-label</code>,
        and <code style="${b.monoSm}">tertiary-label</code> all empty omits the footer entirely. Use
        for read-only or purely informational panels.
      </p>

      <div style="margin-bottom: ${g.subsection};">
        <mms-button variant="secondary" label="Open drawer" @click=${()=>O(R)}></mms-button>
        <mms-drawer
          ${C(R)}
          title-text="Release notes"
          desc-text="What's new in this version."
          primary-label=""
          secondary-label=""
        ></mms-drawer>
      </div>

      <hr style="${p.divider}" />

      <!-- Accessibility -->
      <h2 style="${b.h2}">Accessibility</h2>

      <div style="margin-bottom: ${g.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Escape is the documented exit method."
          message="Trapping focus inside a dialog would otherwise violate WCAG 2.1.2 (No Keyboard Trap). The Escape key satisfies the criterion's &quot;standard exit method&quot; exception, so mms-drawer always closes on Escape regardless of which element currently has focus."
        ></mms-inline-alert>
      </div>

      <h3 style="${b.h3}">WCAG 2.2 AA compliance</h3>
      ${x(d.drawer.rows)}

      <h3 style="${b.h3}">Screen reader behavior</h3>
      <ul style="${b.bodySm} ${p.muted} margin: 0 0 ${g.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${g.label};"><strong>Open:</strong> Announces the dialog role and title as focus moves into the panel once the slide-in animation completes</li>
        <li style="margin-bottom: ${g.label};"><strong>Description:</strong> Read automatically as part of the dialog's accessible description via <code style="${b.monoSm}">aria-describedby</code></li>
        <li style="margin-bottom: ${g.label};"><strong>Close button:</strong> Announced as "Close drawer, button" regardless of visible label (icon-only)</li>
        <li><strong>Close:</strong> Focus and announcement return to the element that opened the panel once the slide-out animation completes</li>
      </ul>

      <h3 style="${b.h3}">Keyboard navigation</h3>
      <table style="${p.table} margin-bottom: ${g.subsection};">
        <thead>
          <tr>
            <th style="${p.th} width: 140px;">Key</th>
            <th style="${p.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${p.td}"><kbd style="${p.kbd}">Tab</kbd></td>
            <td style="${p.td}">Move to the next focusable element; wraps from the last to the first</td>
          </tr>
          <tr>
            <td style="${p.td}"><kbd style="${p.kbd}">Shift</kbd> + <kbd style="${p.kbd}">Tab</kbd></td>
            <td style="${p.td}">Move to the previous focusable element; wraps from the first to the last</td>
          </tr>
          <tr>
            <td style="${p.td}"><kbd style="${p.kbd}">Escape</kbd></td>
            <td style="${p.td}">Close the panel and restore focus to the invoking element</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},B=480,V={name:`Playground`,tags:[`!dev`],args:{size:`md`,closeIcon:!0,titleText:`Filter results`,description:!0,descText:`Narrow the list below by any combination of these fields.`,primaryLabel:`Apply`,secondaryLabel:`Reset`,tertiaryLabel:``,richContent:!1,colorScheme:`primary`,theme:`maximus`,density:`default`},argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`,`xl`],description:`Panel max-width and footer layout (sm stacks actions full-width)`,table:{category:`Behavior`}},closeIcon:{name:`Close icon`,control:`boolean`,description:`Shows the icon-only close button in the header. Default true — this control uses a property binding, so it toggles correctly here, but a plain HTML attribute cannot represent the false state (see Overview).`,table:{category:`Behavior`}},titleText:{name:`Title text`,control:`text`,description:`Panel title, rendered as the accessible name`,table:{category:`Content`}},description:{name:`Show description`,control:`boolean`,description:`Whether to render the description paragraph`,table:{category:`Content`}},descText:{name:`Description text`,control:`text`,description:`Description paragraph content`,table:{category:`Content`}},primaryLabel:{name:`Primary label`,control:`text`,description:`Primary action button label — hidden when empty`,table:{category:`Content`}},secondaryLabel:{name:`Secondary label`,control:`text`,description:`Secondary action button label — hidden when empty`,table:{category:`Content`}},tertiaryLabel:{name:`Tertiary label`,control:`text`,description:`Ghost-variant action label, left-aligned — hidden when empty`,table:{category:`Content`}},richContent:{name:`Rich content (slot)`,control:`boolean`,description:`The default slot accepts any markup as light DOM children — form fields, lists, custom components, anything — rendered below the description. This toggle inserts a text field purely as one example of what can go there; the slot has no opinion about its content. Slotted focusable elements join the same focus trap as the footer actions.`,table:{category:`Content`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Color palette for the footer action buttons. "onyx" is structural (works on all themes) and is the default. Brand colors (primary/secondary/accent) availability depends on theme.`,table:{category:`Component Props`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme (affects typography and action colors)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-drawer has no compact-specific styling yet, since panel chrome padding is intentionally fixed regardless of density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[`open`];n.size&&n.size!==`xl`&&r.push(`size="${n.size}"`),n.titleText&&r.push(`title-text="${n.titleText}"`),n.description===!1&&r.push(".description=${false}"),n.descText&&r.push(`desc-text="${n.descText}"`),n.closeIcon===!1&&r.push(".closeIcon=${false}"),n.primaryLabel&&r.push(`primary-label="${n.primaryLabel}"`),n.secondaryLabel&&r.push(`secondary-label="${n.secondaryLabel}"`),n.tertiaryLabel&&r.push(`tertiary-label="${n.tertiaryLabel}"`),n.colorScheme&&n.colorScheme!==`onyx`&&r.push(`color-scheme="${n.colorScheme}"`),n.density===`compact`&&r.push(`data-density="compact"`);let i=`<mms-drawer\n  ${r.join(`
  `)}\n>`;return n.richContent?`${i}\n  <mms-text-field label="Street address"></mms-text-field>\n</mms-drawer>`:`${i}\n</mms-drawer>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=w(),i=s(e.theme,e.colorScheme),a=c(e.theme,e.colorScheme);if(!i){let t=a===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,n=a===2?`Lacks step 10 (hover state). Use for branded text or badges, not interactive footer buttons.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return r`
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
            <strong style="display: block; margin-bottom: 0.5rem; color: #991b1b !important;">Invalid combination</strong>
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.theme}</code> theme +
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.colorScheme}</code> colorScheme
            <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
              <strong style="color: #991b1b !important;">${t}:</strong> ${n}
            </p>
            <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7; color: #991b1b !important;">
              See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
            </p>
          </div>
        </div>
      `}return r`
      <div style="position: relative; overflow: hidden; transform: translateZ(0); height: ${B}px;">
        <mms-drawer
          ${C(t)}
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
                <p style="${b.caption} margin-top: 0.5rem; opacity: 0.6; font-style: italic;">
                  Example only — the slot accepts any markup. Enabling this doesn't add
                  <code>mms-text-field</code> as a dependency, and the slot isn't limited to
                  text fields or any specific component; forms, lists, custom panels, anything
                  can go here.
                </p>
              `:n}
        </mms-drawer>
      </div>
    `}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Drawer</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A side panel that slides in from the right edge of the viewport, spanning full height. Used
        for supplemental content, filters, forms, and contextual information that doesn't require
        the full-screen weight of a modal. Traps keyboard focus while open (activated once the
        slide-in animation completes), restores focus to the invoking element on close, and closes
        via close button, overlay click, or Escape.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A title, a description, and primary/secondary actions in the footer.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-button variant="secondary" label="Open drawer" @click=\${() => openDrawer(basicRef)}></mms-button>
        <mms-drawer
          \${ref(basicRef)}
          title-text="Filter results"
          desc-text="Narrow the list below by any combination of these fields."
          primary-label="Apply"
          secondary-label="Reset"
        ></mms-drawer>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Four sizes control the panel's max-width: <code style="\${t.monoSm}">xl</code> (default, 960px),
        <code style="\${t.monoSm}">lg</code> (800px), <code style="\${t.monoSm}">md</code> (640px),
        and <code style="\${t.monoSm}">sm</code> (320px). <code style="\${t.monoSm}">sm</code>
        also stacks footer actions full-width and drops the left-aligned tertiary action's
        opposite-side grouping, for compact panels.
      </p>

      <div style="display: flex; gap: \${space.content}; flex-wrap: wrap; margin-bottom: \${space.subsection};">
        <mms-button variant="secondary" label="Open xl" @click=\${() => openDrawer(sizeXlRef)}></mms-button>
        <mms-drawer \${ref(sizeXlRef)} size="xl" title-text="XL (960px)" desc-text="Used for content-rich panels."></mms-drawer>

        <mms-button variant="secondary" label="Open lg" @click=\${() => openDrawer(sizeLgRef)}></mms-button>
        <mms-drawer \${ref(sizeLgRef)} size="lg" title-text="LG (800px)" desc-text="Used for standard forms and filters."></mms-drawer>

        <mms-button variant="secondary" label="Open md" @click=\${() => openDrawer(sizeMdRef)}></mms-button>
        <mms-drawer \${ref(sizeMdRef)} size="md" title-text="MD (640px)" desc-text="Used for shorter panels."></mms-drawer>

        <mms-button variant="secondary" label="Open sm" @click=\${() => openDrawer(sizeSmRef)}></mms-button>
        <mms-drawer \${ref(sizeSmRef)} size="sm" title-text="Quick filter" desc-text="Full-width stacked actions." primary-label="Apply" secondary-label="Reset"></mms-drawer>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Tertiary Action -->
      <h2 style="\${t.h2}">Tertiary action</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Setting <code style="\${t.monoSm}">tertiary-label</code> adds a ghost-variant action, left-aligned
        opposite the primary/secondary group. Use for a low-emphasis option like "Reset all" that
        doesn't close the panel.
      </p>

      <div style="margin-bottom: \${space.subsection};">
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

      <hr style="\${doc.divider}" />

      <!-- Without close icon -->
      <h2 style="\${t.h2}">Without the close icon</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">close-icon</code> defaults to <code style="\${t.monoSm}">true</code>.
        To hide it, set the <code style="\${t.monoSm}">closeIcon</code> property to <code style="\${t.monoSm}">false</code>
        directly (e.g. <code style="\${t.monoSm}">el.closeIcon = false</code> or a template's
        <code style="\${t.monoSm}">.closeIcon=\\\${false}</code> binding) — as a boolean property, its plain-HTML
        attribute form has no falsy representation, so <code style="\${t.monoSm}">close-icon="false"</code>
        in static markup would still evaluate true. Use this to force a decision through the footer actions only.
      </p>

      <div style="margin-bottom: \${space.subsection};">
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

      <hr style="\${doc.divider}" />

      <!-- Rich content slot -->
      <h2 style="\${t.h2}">Rich content</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The default slot accepts any markup as light DOM children, rendered below the description —
        forms, lists, custom components, anything. The slot itself has no opinion about its content;
        a text field is shown below purely as one example. Slotted focusable elements participate in
        the same focus trap as the footer actions.
      </p>

      <div style="margin-bottom: \${space.subsection};">
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

      <hr style="\${doc.divider}" />

      <!-- Without a footer -->
      <h2 style="\${t.h2}">Without a footer</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Unlike <code style="\${t.monoSm}">mms-modal</code> (which always renders a primary action),
        all three footer buttons on <code style="\${t.monoSm}">mms-drawer</code> are presence-based —
        leaving <code style="\${t.monoSm}">primary-label</code>, <code style="\${t.monoSm}">secondary-label</code>,
        and <code style="\${t.monoSm}">tertiary-label</code> all empty omits the footer entirely. Use
        for read-only or purely informational panels.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-button variant="secondary" label="Open drawer" @click=\${() => openDrawer(noFooterRef)}></mms-button>
        <mms-drawer
          \${ref(noFooterRef)}
          title-text="Release notes"
          desc-text="What's new in this version."
          primary-label=""
          secondary-label=""
        ></mms-drawer>
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
          summary="Escape is the documented exit method."
          message="Trapping focus inside a dialog would otherwise violate WCAG 2.1.2 (No Keyboard Trap). The Escape key satisfies the criterion's &quot;standard exit method&quot; exception, so mms-drawer always closes on Escape regardless of which element currently has focus."
        ></mms-inline-alert>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['drawer'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Open:</strong> Announces the dialog role and title as focus moves into the panel once the slide-in animation completes</li>
        <li style="margin-bottom: \${space.label};"><strong>Description:</strong> Read automatically as part of the dialog's accessible description via <code style="\${t.monoSm}">aria-describedby</code></li>
        <li style="margin-bottom: \${space.label};"><strong>Close button:</strong> Announced as "Close drawer, button" regardless of visible label (icon-only)</li>
        <li><strong>Close:</strong> Focus and announcement return to the element that opened the panel once the slide-out animation completes</li>
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
            <td style="\${doc.td}">Move to the next focusable element; wraps from the last to the first</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Shift</kbd> + <kbd style="\${doc.kbd}">Tab</kbd></td>
            <td style="\${doc.td}">Move to the previous focusable element; wraps from the first to the last</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Escape</kbd></td>
            <td style="\${doc.td}">Close the panel and restore focus to the invoking element</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
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
}`,...V.parameters?.docs?.source}}},H=[`Overview`,`PlaygroundStory`]}));U();export{z as Overview,V as PlaygroundStory,H as __namedExportsOrder,k as default,U as n,D as t};