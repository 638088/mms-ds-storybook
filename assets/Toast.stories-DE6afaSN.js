import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{c as a}from"./iframe-CEHEciqj.js";import{t as o}from"./mms-card.component-Ae9XIj4r.js";import{n as s,r as c}from"./wcag-coverage-DNhlI7v1.js";import{a as l,c as u,d,i as f,n as p,o as m,r as h,u as g}from"./doc-styles-DkvR_Qyb.js";import{a as _,n as v}from"./a11y-outcome-Chf8PZL1.js";import{i as y,n as b,t as x}from"./ref-DY5YbyIQ.js";import{t as S}from"./mms-toast.component-B1sE0kZB.js";var C=t({LayoutBehavior:()=>j,Overview:()=>E,PlaygroundStory:()=>M,ResponsiveDemo:()=>N,__namedExportsOrder:()=>P,default:()=>T});function w(){let e=D.value;if(!e)return;let{alertType:t,message:n}=k[O%k.length];O++;let r=document.createElement(`mms-toast`);r.setAttribute(`alert-type`,t),r.setAttribute(`message`,n),e.appendChild(r)}var T,E,D,O,k,A,j,M,N,P,F=e((()=>{i(),x(),S(),a(),o(),s(),v(),u(),T={title:`Feedback/Toast`,tags:[`!autodocs`]},E={name:`Overview`,render:()=>r`
    <div data-theme=${h} data-mode=${m()} style=${p}>

      <!-- Header -->
      <h1 style="${d.h1}">Toast</h1>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${g.content};">
        A transient, dismissible notification confirming the result of a user-triggered action —
        saved, submitted, undone. Self-positions in a fixed, bottom-center viewport stack — no
        wrapper or manager element required — and announced assertively to assistive technology
        since it reports something the user just did, not ambient page status.
      </p>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${g.subsection};">
       <div slot="body-content" style="${d.body} text-align: left;">
        Examples below have their real <code style="${d.monoSm}">position: fixed</code> flattened
        (<code style="${d.monoSm}">.docs-flat</code>) purely so variants render side-by-side for
        comparison on this page. See <strong>Layout &amp; Behavior</strong> for a live demo of the
        real fixed-position self-stacking.
       </div>
      </mms-card>
      <style>
        .docs-flat mms-toast {
          position: static !important;
          margin-left: 0 !important;
          transform: none !important;
        }
      </style>

      <hr style="${l.divider}" />

      <!-- Basic Usage -->
      <h2 style="${d.h2}">Basic usage</h2>
      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.subsection};">
        Defaults to the <code style="${d.monoSm}">informational</code> type with a status icon and a close button.
      </p>

      <div class="docs-flat" style="margin-bottom: ${g.subsection};">
        <mms-toast message="Your changes have been saved."></mms-toast>
      </div>

      <hr style="${l.divider}" />

      <!-- Alert Types -->
      <h2 style="${d.h2}">Alert types</h2>
      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.subsection};">
        Four semantic types: <code style="${d.monoSm}">informational</code> (default),
        <code style="${d.monoSm}">success</code>, <code style="${d.monoSm}">caution</code>, and
        <code style="${d.monoSm}">error</code>. Each pairs a distinct icon with its own accent color.
      </p>

      <div class="docs-flat" style="display: flex; flex-direction: column; gap: ${g.content}; margin-bottom: ${g.subsection};">
        <mms-toast alert-type="informational" message="A new version of this form is available."></mms-toast>
        <mms-toast alert-type="success" message="Your application was submitted successfully."></mms-toast>
        <mms-toast alert-type="caution" message="Some information could not be verified automatically."></mms-toast>
        <mms-toast alert-type="error" message="We were unable to process your last payment."></mms-toast>
      </div>

      <hr style="${l.divider}" />

      <!-- With an action -->
      <h2 style="${d.h2}">With an action</h2>
      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.subsection};">
        Setting <code style="${d.monoSm}">action</code> to <code style="${d.monoSm}">true</code> adds an inline
        text-link — most commonly used for an "Undo".
      </p>

      <div class="docs-flat" style="margin-bottom: ${g.subsection};">
        <mms-toast
          message="Item moved to archive."
          action
          action-text="Undo"
          action-href="#"
        ></mms-toast>
      </div>

      <hr style="${l.divider}" />

      <!-- Without an icon / without a close button -->
      <h2 style="${d.h2}">Optional icon and close button</h2>
      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.subsection};">
        <code style="${d.monoSm}">left-icon</code> and <code style="${d.monoSm}">close-icon</code> each default to
        <code style="${d.monoSm}">true</code> and can be turned off independently.
      </p>

      <div class="docs-flat" style="display: flex; flex-direction: column; gap: ${g.content}; margin-bottom: ${g.subsection};">
        <mms-toast message="No status icon." .leftIcon=${!1}></mms-toast>
        <mms-toast message="No close button — dismissed by the host page only." .closeIcon=${!1}></mms-toast>
      </div>

      <hr style="${l.divider}" />

      <!-- Dismissal -->
      <h2 style="${d.h2}">Dismissal</h2>
      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.content};">
        The close button fires a <code style="${d.monoSm}">dismiss</code> event with
        <code style="${d.monoSm}">detail: { reason: 'user' }</code> — the host page owns removal from the DOM
        (e.g. <code style="${d.monoSm}">@dismiss=\${() => el.remove()}</code>); the component does not remove
        itself. <code style="${d.monoSm}">auto-dismiss</code> opts the toast into <em>also</em> dismissing on a
        timer (<code style="${d.monoSm}">reason: 'timeout'</code>), pausing on hover or keyboard focus — the same
        tested pattern as <code style="${d.monoSm}">mms-alert-banner</code>'s
        <code style="${d.monoSm}">autoDismiss</code>/<code style="${d.monoSm}">autoDismissDuration</code>
        (WCAG 2.2.1/2.2.2). Unlike Marina's <code style="${d.monoSm}">ds-toast</code> — whose JSDoc describes
        auto-dismiss but whose implementation never actually starts a timer — this is a real one. See
        <strong>Layout &amp; Behavior</strong> for the full opt-in timer behavior.
      </p>

      <hr style="${l.divider}" />

      <!-- Accessibility -->
      <h2 style="${d.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${g.content};">
        <div slot="body-content">
        <p style="${d.bodySm}">
          <strong>Why <code style="${d.monoSm}">role="alert"</code>, not <code style="${d.monoSm}">role="status"</code>?</strong>
          Toast reports the direct result of something the user just did — a save, a submission, an undo window —
          not ambient page status. Its implicit <code style="${d.monoSm}">aria-live="assertive"</code> interrupts
          to confirm that action immediately. Use <code style="${d.monoSm}">mms-alert-banner</code>
          (<code style="${d.monoSm}">role="status"</code>, polite) for non-interrupting general status instead.
        </p>
        </div>
      </mms-card>

      <h3 style="${d.h3}">WCAG 2.2 AA compliance</h3>
      ${_(c.toast.rows)}

      <h3 style="${d.h3}">Screen reader behavior</h3>
      <ul style="${d.bodySm} margin-bottom: ${g.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${g.label};"><strong>On render:</strong> Announces immediately (interrupts) via <code style="${d.monoSm}">role="alert"</code> — message and action link text are read as content</li>
        <li style="margin-bottom: ${g.label};"><strong>Status icon:</strong> Announced via its <code style="${d.monoSm}">aria-label</code> (e.g. "error toast"), not left silent as decorative</li>
        <li style="margin-bottom: ${g.label};"><strong>Text link:</strong> Announced as a link with its label; focusable independently of the toast container</li>
        <li><strong>Close button:</strong> Announced as "Dismiss toast, button"</li>
      </ul>

      <h3 style="${d.h3}">Keyboard navigation</h3>
      <table style="${l.table}">
        <thead>
          <tr>
            <th style="${l.th} width: 140px;">Key</th>
            <th style="${l.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td}"><kbd style="${l.kbd}">Tab</kbd></td>
            <td style="${l.td}">Move focus to the text-link action, then the close button (in DOM order)</td>
          </tr>
          <tr>
            <td style="${l.td}"><kbd style="${l.kbd}">Enter</kbd> / <kbd style="${l.kbd}">Space</kbd></td>
            <td style="${l.td}">Activates the focused text link or close button</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},D=b(),O=0,k=[{alertType:`success`,message:`Your changes have been saved.`},{alertType:`caution`,message:`Your session will expire in 5 minutes.`},{alertType:`error`,message:`Something went wrong — please try again.`},{alertType:`informational`,message:`A new version of this form is available.`}],A={frame:`border: var(--border-width-sm) dashed var(--color-border-default); border-radius: var(--radius-md); padding: var(--spacing-lg2) var(--spacing-lg1) var(--spacing-md1); position: relative; margin-bottom: ${g.content};`,frameLabel:`${d.body} ${l.muted} position: absolute; top: calc(-1 * var(--spacing-sm2)); left: var(--spacing-md1); background: var(--color-surface-page); padding: 0 var(--spacing-sm1); text-transform: uppercase;`,stackDemo:`position: relative; transform: translateZ(0); overflow: hidden; min-height: 13rem;`,caption:`${d.caption} ${l.muted} margin-top: ${g.label};`,viewportBox:`border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-sm); padding: var(--spacing-md2) var(--spacing-md1); background: var(--color-surface-default); display: flex; align-items: center; justify-content: center;`,widthRow:`margin: ${g.content} 12% 0; height: var(--spacing-md2); border-top: var(--border-width-xs) solid var(--color-border-default); border-left: var(--border-width-xs) solid var(--color-border-default); border-right: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-xs) var(--radius-xs) 0 0; display: flex; align-items: flex-end; justify-content: center;`,widthLabel:`${d.mono} ${l.muted} transform: translateY(50%); background: var(--color-surface-page); padding: 0 var(--spacing-sm1); white-space: nowrap;`},j={name:`Layout & Behavior`,render:()=>r`
    <div data-theme=${h} data-mode=${m()} style=${p}>

      <!-- Intro -->
      <h1 style="${d.h1}">Layout &amp; Behavior</h1>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${g.subsection};">
        Toast is a floating, overlay-positioned element, not a docked page-level one like
        <code style="${d.monoSm}">mms-alert-banner</code> — it isn't meant to sit inline in document flow.
        <code style="${d.monoSm}">:host</code> self-positions (<code style="${d.monoSm}">position: fixed</code>,
        bottom-center) and self-stacks — no wrapper or manager element required, the same pattern
        <code style="${d.monoSm}">mms-modal</code> already uses for its own viewport-level positioning. This page
        covers that placement/stacking behavior, the responsiveness rule, and the component's own opt-in
        auto-dismiss timer.
      </p>

      <hr style="${l.divider}" />

      <!-- Placement -->
      <h2 style="${d.h2}">Placement</h2>
      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.content};">
        Toast places itself in a <strong>fixed, bottom-center viewport stack</strong> —
        <code style="${d.monoSm}">:host</code> sets <code style="${d.monoSm}">position: fixed; bottom: 24px;</code>
        directly, with no consumer wrapper or manager element involved.
      </p>
      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.subsection};">
        When more than one toast is connected, a shared registry
        (<code style="${d.monoSm}">src/utils/toast-stack.ts</code>) tracks every mounted
        <code style="${d.monoSm}">mms-toast</code> and writes a computed
        <code style="${d.monoSm}">--_stack-offset</code> custom property onto each one — newest-connected sits
        nearest the bottom edge (offset 0), older toasts are pushed upward by the height + a
        <strong>12px gap</strong> of every toast connected after them. This recomputes live via a
        <code style="${d.monoSm}">ResizeObserver</code>, so a toast's message wrapping to a second line
        re-flows the whole stack automatically.
      </p>

      <div style="${A.frame}">
        <span style="${A.frameLabel}">Live demo — contained to this frame for docs purposes only</span>
        <div style="${A.stackDemo}" ${y(D)}>
          <mms-toast alert-type="success" message="Your application was submitted successfully."></mms-toast>
          <mms-toast alert-type="informational" message="A new version of this form is available."></mms-toast>
        </div>
      </div>
      <div style="display: flex; justify-content: center; margin-bottom: ${g.subsection};">
        <mms-button variant="secondary" label="Trigger a toast" @click=${w}></mms-button>
      </div>
      <p style="${A.caption} margin-bottom: ${g.content};">
        The two toasts above are real, currently-connected <code style="${d.monoSm}">mms-toast</code> elements —
        click <strong>Trigger a toast</strong> to connect another and watch it animate in while the rest of the
        stack reflows to make room. The frame itself only exists to keep this demo visible inline on the docs page
        (via a CSS <code style="${d.monoSm}">transform</code>, which creates a containing block for
        <code style="${d.monoSm}">position: fixed</code> descendants) — in production, with no such override,
        this same mechanism stacks against the real viewport edge.
      </p>

      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.content};">
        The stack is capped at <strong>3 toasts at once</strong> — keep clicking <strong>Trigger a toast</strong>
        past 3 and the oldest is evicted automatically, the same way it would be in production. The registry
        dispatches the same <code style="${d.monoSm}">dismiss</code> event a consumer already listens for, with
        <code style="${d.monoSm}">detail: { reason: 'stack-limit' }</code>, so eviction goes through the one
        removal path rather than a second one. The cap exists because every toast is
        <code style="${d.monoSm}">aria-live="assertive"</code> — past 3 simultaneous announcements, a screen
        reader's queue becomes unintelligible rather than just visually crowded. Consumers don't need to
        rate-limit their own toast creation to stay under this; the component enforces it.
      </p>

      <hr style="${l.divider}" />

      <!-- Motion -->
      <h2 style="${d.h2}">Entrance &amp; reflow motion</h2>
      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.content};">
        Click <strong>Trigger a toast</strong> in the demo above to see this live: every toast animates in on
        connect — whether it's the only one on screen or joining an existing stack — and the rest of the stack
        animates to its new position at the same time. Both are the same mechanism:
        <code style="${d.monoSm}">:host</code> transitions <code style="${d.monoSm}">transform</code>
        and <code style="${d.monoSm}">opacity</code> whenever <code style="${d.monoSm}">--_stack-offset</code>
        changes, so there's nothing separate to configure for entrance vs. reflow. Duration and easing come from
        the structural motion tokens (<code style="${d.monoSm}">--motion-duration-slow</code>,
        <code style="${d.monoSm}">--motion-easing-standard</code>) — no per-instance motion props exist.
      </p>
      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.content};">
        <code style="${d.monoSm}">prefers-reduced-motion: reduce</code> collapses all of this to
        <code style="${d.monoSm}">--motion-duration-instant</code> (0ms) automatically — layout still reflows
        immediately, only the animated transition is removed. No consumer opt-out or prop is needed; it follows the
        user's OS-level setting.
      </p>

      <hr style="${l.divider}" />

      <!-- Toast vs. Modal -->
      <h2 style="${d.h2}">Toast vs. modal</h2>
      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.content};">
        Toast's <code style="${d.monoSm}">z-index</code> is <strong>1100</strong> — deliberately above
        <code style="${d.monoSm}">mms-modal</code>'s <strong>1000</strong>, so a toast started before a modal opens
        (e.g. a background save completing) still reaches the user rather than being hidden behind the dialog. This
        doesn't conflict with the modal's focus trap: a toast never moves or steals focus, it only announces via
        <code style="${d.monoSm}">aria-live</code> (WCAG 2.4.3). No consumer configuration is needed for this —
        it's automatic whenever both are on screen together.
      </p>

      <hr style="${l.divider}" />

      <!-- Responsiveness -->
      <h2 style="${d.h2}">Responsiveness</h2>
      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.content};">
        Toast adapts its own width and layout to the viewport — there's no prop to set and nothing for a consumer
        to configure. Three states, based on how much horizontal space is available:
      </p>
      <ul style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.subsection}; padding-left: var(--spacing-md2);">
        <li style="margin-bottom: ${g.label};">
          <strong>768px and up</strong> — a fixed 560px card, centered at the bottom of the screen.
        </li>
        <li style="margin-bottom: ${g.label};">
          <strong>340–767px</strong> — the card stretches to fill the available width instead, inset 20px from
          each edge, since a fixed 560px card no longer fits comfortably centered.
        </li>
        <li>
          <strong>Below 340px</strong> — the icon, message, and close button (normally side by side) stack into
          their own rows, so a long message can't push the icon or close button off-screen.
        </li>
      </ul>

      <!-- Breakpoint diagram: the ≥768px band renders the actual mms-toast, -->
      <!-- contained inline via the same fixed-position containing-block trick -->
      <!-- as the Placement demo above. The two narrower bands can't do that on -->
      <!-- a wide desktop page — @media queries here are real viewport queries, -->
      <!-- not container queries — so each embeds the real component inside its -->
      <!-- own <iframe>, pinned to a literal pixel width, so its own breakpoint -->
      <!-- CSS genuinely fires for that browsing context. -->
      <div style="display: flex; flex-direction: column; gap: ${g.content}; margin-bottom: ${g.subsection};">

        <!-- Band 1: >=768px, fixed 560px, centered — real component, own iframe -->
        <!-- Same isolation reason as bands 2/3 below, not just pixel-width -->
        <!-- accuracy: toast-stack.ts's registry is a page-global singleton, so a -->
        <!-- same-document "live" toast here would silently share one stacking -->
        <!-- order with the Placement demo's toasts above (confirmed: it was -->
        <!-- counted as the newest toast, pushing Placement's two out of place). -->
        <!-- An iframe is its own browsing context with its own copy of the -->
        <!-- registry module, so it can't collide with anything outside it. -->
        <div style="width: 100%;">
          <div style="${A.frame}">
            <span style="${A.frameLabel}">≥ 768px viewport</span>
            <div style="${A.viewportBox}">
              <iframe
                src="./iframe.html?id=feedback-toast--responsive-demo&viewMode=story"
                style="width: 800px; max-width: 100%; height: 150px; border: 0; background: transparent;"
                title="mms-toast rendered at a real 800px viewport width"
              ></iframe>
            </div>
            <div style="${A.widthRow}"><span style="${A.widthLabel}">560px card, centered</span></div>
          </div>
          <p style="${A.caption}">Fixed width, centered at the bottom of the screen</p>
        </div>

        <!-- Bands 2 + 3: side by side, each a real component in its own iframe -->
        <div style="display: flex; gap: ${g.content}; align-items: flex-start;">

          <!-- Band 2: 340-767px, full width, inset -->
          <div style="flex: 1 1 60%; min-width: 0;">
            <div style="${A.frame}">
              <span style="${A.frameLabel}">340–767px viewport</span>
              <div style="${A.viewportBox}">
                <iframe
                  src="./iframe.html?id=feedback-toast--responsive-demo&viewMode=story"
                  style="width: 420px; max-width: 100%; height: 190px; border: 0; background: transparent;"
                  title="mms-toast rendered at a real 420px viewport width"
                ></iframe>
              </div>
              <div style="${A.widthRow}"><span style="${A.widthLabel}">full width, 20px inset</span></div>
            </div>
            <p style="${A.caption}">Stretches edge-to-edge, inset 20px each side</p>
          </div>

          <!-- Band 3: <340px, stacked, icon top-left -->
          <div style="flex: 1 1 40%; min-width: 0;">
            <div style="${A.frame}">
              <span style="${A.frameLabel}">&lt; 340px viewport</span>
              <div style="${A.viewportBox}">
                <iframe
                  src="./iframe.html?id=feedback-toast--responsive-demo&viewMode=story"
                  style="width: 260px; max-width: 100%; height: 190px; border: 0; background: transparent;"
                  title="mms-toast rendered at a real 260px viewport width"
                ></iframe>
              </div>
              <div style="${A.widthRow}"><span style="${A.widthLabel}">icon / message / close stacked</span></div>
            </div>
            <p style="${A.caption}">Icon top-left, message, close bottom-right</p>
          </div>

        </div>
      </div>
      <p style="${d.caption} ${l.muted} max-width: ${f}; margin-bottom: ${g.subsection};">
        Every card above is the real <code style="${d.monoSm}">mms-toast</code> component, not a mockup — the two
        narrower bands run inside an <code style="${d.monoSm}">iframe</code> pinned to that literal pixel width, so
        their own <code style="${d.monoSm}">@media</code> breakpoint genuinely fires for that browsing context. You
        can also resize this window below 767px and 340px to see the same behavior applied to the whole page.
      </p>

      <hr style="${l.divider}" />

      <!-- UX behavior — dismissal -->
      <h2 style="${d.h2}">UX behavior — dismissal</h2>
      <p style="${d.bodySm} ${l.muted} max-width: ${f}; margin-bottom: ${g.content};">
        Manual dismiss (the close button) is the default and always available. Setting
        <code style="${d.monoSm}">auto-dismiss</code> opts a toast into <em>also</em> dismissing on a timer —
        <code style="${d.monoSm}">auto-dismiss-duration</code> controls the delay (default
        <strong>8000ms</strong>). The timer pauses whenever the pointer hovers the toast or keyboard focus lands
        anywhere inside it, and restarts from the full duration once both clear — there's no separate
        pause/resume button; hover, focus, and the always-present close button are the full control surface.
        Both dismissal paths fire the same <code style="${d.monoSm}">dismiss</code> event, distinguished by
        <code style="${d.monoSm}">event.detail.reason</code> (<code style="${d.monoSm}">'user'</code> or
        <code style="${d.monoSm}">'timeout'</code>) — the component never removes itself from the DOM either way;
        the host page owns that.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${g.subsection};">
        <div slot="body-content">
        <p style="${d.bodySm}">
          <strong>Caution:</strong> avoid pairing <code style="${d.monoSm}">auto-dismiss</code> with
          <code style="${d.monoSm}">action</code> (e.g. "Undo") unless
          <code style="${d.monoSm}">auto-dismiss-duration</code> gives the user realistic time to read the
          message and act on the text link before it disappears — this isn't enforced by the component, so it's
          a per-instance judgment call.
        </p>
        </div>
      </mms-card>

      <hr style="${l.divider}" />

      <!-- Other considerations -->
      <h2 style="${d.h2}">Other considerations</h2>
      <ul style="${d.bodySm} padding-left: var(--spacing-lg1); max-width: ${f};">
        <li style="margin-bottom: ${g.content};">
          <strong>Consumer-owned.</strong> Focus management after dismiss is undefined today — where focus lands when a toast disappears while
          focused isn't handled by the component. Candidate for a small future accessibility ticket.
        </li>
        <li style="margin-bottom: ${g.content};">
          <strong>Current behavior.</strong> The stack-cap-3 auto-evict (see <strong>Placement</strong> above) is the component's mitigation for
          overlapping <code style="${d.monoSm}">aria-live</code> announcements from rapid multi-toast mounting —
          consumers no longer need to self-limit concurrent toast count.
        </li>
        <li>
          <strong>Current behavior.</strong> Clicking the text-link action never dismisses the toast — action and dismissal are independent.
        </li>
      </ul>

    </div>
  `},M={name:`Playground`,tags:[`!dev`],args:{alertType:`informational`,leftIcon:!0,closeIcon:!0,action:!1,message:`Informational message.`,actionText:`Action`,actionHref:`#`,autoDismiss:!1,autoDismissDuration:8e3,theme:`maximus`,density:`default`},argTypes:{alertType:{name:`Alert type`,control:`select`,options:[`informational`,`error`,`success`,`caution`],description:`Semantic type — pairs a status icon and accent color`,table:{category:`Visual`}},leftIcon:{name:`Show icon`,control:`boolean`,description:`Whether to render the status icon`,table:{category:`Visual`}},closeIcon:{name:`Show close button`,control:`boolean`,description:`Whether to render the divider and close button`,table:{category:`Visual`}},action:{name:`Show action`,control:`boolean`,description:`Whether to render the text-link action`,table:{category:`Visual`}},message:{name:`Message`,control:`text`,description:`Message text`,table:{category:`Content`}},actionText:{name:`Action text`,control:`text`,description:`Text-link label`,table:{category:`Content`}},actionHref:{name:`Action href`,control:`text`,description:`Text-link URL`,table:{category:`Content`}},autoDismiss:{name:`Auto dismiss`,control:`boolean`,description:`Opt-in: dismiss automatically after the duration below. Off by default. Pauses on hover or keyboard focus; the close button always remains available as a stop mechanism. Not demoed live on this page (no dismiss/close interaction context to observe it against) — but available for use in your project.`,table:{category:`Behavior`}},autoDismissDuration:{name:`Auto dismiss duration (ms)`,control:`number`,description:`Delay before auto-dismiss fires, when auto dismiss is on. Default 8000. Not demoed live on this page — available for use in your project.`,table:{category:`Behavior`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme (affects typography and link color)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-toast has no compact-specific styling yet`,table:{category:`Global`}}},decorators:[e=>r`
        <div style="padding: 1.5rem 2rem; position: relative; transform: translateZ(0); overflow: hidden; min-height: 4.5rem;">
          ${e()}
        </div>
      `],parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.alertType&&n.alertType!==`informational`&&r.push(`alert-type="${n.alertType}"`),n.leftIcon===!1&&r.push(".leftIcon=${false}"),n.closeIcon===!1&&r.push(".closeIcon=${false}"),n.action&&r.push(`action`),n.message&&r.push(`message="${n.message}"`),n.action&&n.actionText&&r.push(`action-text="${n.actionText}"`),n.action&&n.actionHref&&r.push(`action-href="${n.actionHref}"`),n.autoDismiss&&r.push(`auto-dismiss`),n.autoDismiss&&n.autoDismissDuration&&n.autoDismissDuration!==8e3&&r.push(`auto-dismiss-duration="${n.autoDismissDuration}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-toast\n  ${r.join(`
  `)}\n></mms-toast>`},language:`html`}},controls:{sort:`none`}},render:e=>r`
      <mms-toast
        alert-type=${e.alertType}
        .leftIcon=${e.leftIcon}
        .closeIcon=${e.closeIcon}
        ?action=${e.action}
        message=${e.message}
        action-text=${e.actionText||n}
        action-href=${e.actionHref||n}
        ?auto-dismiss=${e.autoDismiss}
        auto-dismiss-duration=${e.autoDismissDuration}
        data-density=${e.density===`compact`?`compact`:n}
      ></mms-toast>
    `},N={name:`Responsive demo (internal)`,tags:[`!dev`],render:()=>r`
    <mms-toast alert-type="informational" message="Your application was submitted successfully."></mms-toast>
  `},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Toast</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        A transient, dismissible notification confirming the result of a user-triggered action —
        saved, submitted, undone. Self-positions in a fixed, bottom-center viewport stack — no
        wrapper or manager element required — and announced assertively to assistive technology
        since it reports something the user just did, not ambient page status.
      </p>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
       <div slot="body-content" style="\${t.body} text-align: left;">
        Examples below have their real <code style="\${t.monoSm}">position: fixed</code> flattened
        (<code style="\${t.monoSm}">.docs-flat</code>) purely so variants render side-by-side for
        comparison on this page. See <strong>Layout &amp; Behavior</strong> for a live demo of the
        real fixed-position self-stacking.
       </div>
      </mms-card>
      <style>
        .docs-flat mms-toast {
          position: static !important;
          margin-left: 0 !important;
          transform: none !important;
        }
      </style>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Defaults to the <code style="\${t.monoSm}">informational</code> type with a status icon and a close button.
      </p>

      <div class="docs-flat" style="margin-bottom: \${space.subsection};">
        <mms-toast message="Your changes have been saved."></mms-toast>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Alert Types -->
      <h2 style="\${t.h2}">Alert types</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Four semantic types: <code style="\${t.monoSm}">informational</code> (default),
        <code style="\${t.monoSm}">success</code>, <code style="\${t.monoSm}">caution</code>, and
        <code style="\${t.monoSm}">error</code>. Each pairs a distinct icon with its own accent color.
      </p>

      <div class="docs-flat" style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-toast alert-type="informational" message="A new version of this form is available."></mms-toast>
        <mms-toast alert-type="success" message="Your application was submitted successfully."></mms-toast>
        <mms-toast alert-type="caution" message="Some information could not be verified automatically."></mms-toast>
        <mms-toast alert-type="error" message="We were unable to process your last payment."></mms-toast>
      </div>

      <hr style="\${doc.divider}" />

      <!-- With an action -->
      <h2 style="\${t.h2}">With an action</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Setting <code style="\${t.monoSm}">action</code> to <code style="\${t.monoSm}">true</code> adds an inline
        text-link — most commonly used for an "Undo".
      </p>

      <div class="docs-flat" style="margin-bottom: \${space.subsection};">
        <mms-toast
          message="Item moved to archive."
          action
          action-text="Undo"
          action-href="#"
        ></mms-toast>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Without an icon / without a close button -->
      <h2 style="\${t.h2}">Optional icon and close button</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">left-icon</code> and <code style="\${t.monoSm}">close-icon</code> each default to
        <code style="\${t.monoSm}">true</code> and can be turned off independently.
      </p>

      <div class="docs-flat" style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-toast message="No status icon." .leftIcon=\${false}></mms-toast>
        <mms-toast message="No close button — dismissed by the host page only." .closeIcon=\${false}></mms-toast>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Dismissal -->
      <h2 style="\${t.h2}">Dismissal</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The close button fires a <code style="\${t.monoSm}">dismiss</code> event with
        <code style="\${t.monoSm}">detail: { reason: 'user' }</code> — the host page owns removal from the DOM
        (e.g. <code style="\${t.monoSm}">@dismiss=\\\${() => el.remove()}</code>); the component does not remove
        itself. <code style="\${t.monoSm}">auto-dismiss</code> opts the toast into <em>also</em> dismissing on a
        timer (<code style="\${t.monoSm}">reason: 'timeout'</code>), pausing on hover or keyboard focus — the same
        tested pattern as <code style="\${t.monoSm}">mms-alert-banner</code>'s
        <code style="\${t.monoSm}">autoDismiss</code>/<code style="\${t.monoSm}">autoDismissDuration</code>
        (WCAG 2.2.1/2.2.2). Unlike Marina's <code style="\${t.monoSm}">ds-toast</code> — whose JSDoc describes
        auto-dismiss but whose implementation never actually starts a timer — this is a real one. See
        <strong>Layout &amp; Behavior</strong> for the full opt-in timer behavior.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
        <p style="\${t.bodySm}">
          <strong>Why <code style="\${t.monoSm}">role="alert"</code>, not <code style="\${t.monoSm}">role="status"</code>?</strong>
          Toast reports the direct result of something the user just did — a save, a submission, an undo window —
          not ambient page status. Its implicit <code style="\${t.monoSm}">aria-live="assertive"</code> interrupts
          to confirm that action immediately. Use <code style="\${t.monoSm}">mms-alert-banner</code>
          (<code style="\${t.monoSm}">role="status"</code>, polite) for non-interrupting general status instead.
        </p>
        </div>
      </mms-card>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['toast'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} margin-bottom: \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>On render:</strong> Announces immediately (interrupts) via <code style="\${t.monoSm}">role="alert"</code> — message and action link text are read as content</li>
        <li style="margin-bottom: \${space.label};"><strong>Status icon:</strong> Announced via its <code style="\${t.monoSm}">aria-label</code> (e.g. "error toast"), not left silent as decorative</li>
        <li style="margin-bottom: \${space.label};"><strong>Text link:</strong> Announced as a link with its label; focusable independently of the toast container</li>
        <li><strong>Close button:</strong> Announced as "Dismiss toast, button"</li>
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
            <td style="\${doc.td}">Move focus to the text-link action, then the close button (in DOM order)</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd> / <kbd style="\${doc.kbd}">Space</kbd></td>
            <td style="\${doc.td}">Activates the focused text link or close button</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...E.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Layout & Behavior',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Intro -->
      <h1 style="\${t.h1}">Layout &amp; Behavior</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Toast is a floating, overlay-positioned element, not a docked page-level one like
        <code style="\${t.monoSm}">mms-alert-banner</code> — it isn't meant to sit inline in document flow.
        <code style="\${t.monoSm}">:host</code> self-positions (<code style="\${t.monoSm}">position: fixed</code>,
        bottom-center) and self-stacks — no wrapper or manager element required, the same pattern
        <code style="\${t.monoSm}">mms-modal</code> already uses for its own viewport-level positioning. This page
        covers that placement/stacking behavior, the responsiveness rule, and the component's own opt-in
        auto-dismiss timer.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Placement -->
      <h2 style="\${t.h2}">Placement</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Toast places itself in a <strong>fixed, bottom-center viewport stack</strong> —
        <code style="\${t.monoSm}">:host</code> sets <code style="\${t.monoSm}">position: fixed; bottom: 24px;</code>
        directly, with no consumer wrapper or manager element involved.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        When more than one toast is connected, a shared registry
        (<code style="\${t.monoSm}">src/utils/toast-stack.ts</code>) tracks every mounted
        <code style="\${t.monoSm}">mms-toast</code> and writes a computed
        <code style="\${t.monoSm}">--_stack-offset</code> custom property onto each one — newest-connected sits
        nearest the bottom edge (offset 0), older toasts are pushed upward by the height + a
        <strong>12px gap</strong> of every toast connected after them. This recomputes live via a
        <code style="\${t.monoSm}">ResizeObserver</code>, so a toast's message wrapping to a second line
        re-flows the whole stack automatically.
      </p>

      <div style="\${d.frame}">
        <span style="\${d.frameLabel}">Live demo — contained to this frame for docs purposes only</span>
        <div style="\${d.stackDemo}" \${ref(placementDemoRef)}>
          <mms-toast alert-type="success" message="Your application was submitted successfully."></mms-toast>
          <mms-toast alert-type="informational" message="A new version of this form is available."></mms-toast>
        </div>
      </div>
      <div style="display: flex; justify-content: center; margin-bottom: \${space.subsection};">
        <mms-button variant="secondary" label="Trigger a toast" @click=\${triggerPlacementDemoToast}></mms-button>
      </div>
      <p style="\${d.caption} margin-bottom: \${space.content};">
        The two toasts above are real, currently-connected <code style="\${t.monoSm}">mms-toast</code> elements —
        click <strong>Trigger a toast</strong> to connect another and watch it animate in while the rest of the
        stack reflows to make room. The frame itself only exists to keep this demo visible inline on the docs page
        (via a CSS <code style="\${t.monoSm}">transform</code>, which creates a containing block for
        <code style="\${t.monoSm}">position: fixed</code> descendants) — in production, with no such override,
        this same mechanism stacks against the real viewport edge.
      </p>

      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The stack is capped at <strong>3 toasts at once</strong> — keep clicking <strong>Trigger a toast</strong>
        past 3 and the oldest is evicted automatically, the same way it would be in production. The registry
        dispatches the same <code style="\${t.monoSm}">dismiss</code> event a consumer already listens for, with
        <code style="\${t.monoSm}">detail: { reason: 'stack-limit' }</code>, so eviction goes through the one
        removal path rather than a second one. The cap exists because every toast is
        <code style="\${t.monoSm}">aria-live="assertive"</code> — past 3 simultaneous announcements, a screen
        reader's queue becomes unintelligible rather than just visually crowded. Consumers don't need to
        rate-limit their own toast creation to stay under this; the component enforces it.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Motion -->
      <h2 style="\${t.h2}">Entrance &amp; reflow motion</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Click <strong>Trigger a toast</strong> in the demo above to see this live: every toast animates in on
        connect — whether it's the only one on screen or joining an existing stack — and the rest of the stack
        animates to its new position at the same time. Both are the same mechanism:
        <code style="\${t.monoSm}">:host</code> transitions <code style="\${t.monoSm}">transform</code>
        and <code style="\${t.monoSm}">opacity</code> whenever <code style="\${t.monoSm}">--_stack-offset</code>
        changes, so there's nothing separate to configure for entrance vs. reflow. Duration and easing come from
        the structural motion tokens (<code style="\${t.monoSm}">--motion-duration-slow</code>,
        <code style="\${t.monoSm}">--motion-easing-standard</code>) — no per-instance motion props exist.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        <code style="\${t.monoSm}">prefers-reduced-motion: reduce</code> collapses all of this to
        <code style="\${t.monoSm}">--motion-duration-instant</code> (0ms) automatically — layout still reflows
        immediately, only the animated transition is removed. No consumer opt-out or prop is needed; it follows the
        user's OS-level setting.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Toast vs. Modal -->
      <h2 style="\${t.h2}">Toast vs. modal</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Toast's <code style="\${t.monoSm}">z-index</code> is <strong>1100</strong> — deliberately above
        <code style="\${t.monoSm}">mms-modal</code>'s <strong>1000</strong>, so a toast started before a modal opens
        (e.g. a background save completing) still reaches the user rather than being hidden behind the dialog. This
        doesn't conflict with the modal's focus trap: a toast never moves or steals focus, it only announces via
        <code style="\${t.monoSm}">aria-live</code> (WCAG 2.4.3). No consumer configuration is needed for this —
        it's automatic whenever both are on screen together.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Responsiveness -->
      <h2 style="\${t.h2}">Responsiveness</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Toast adapts its own width and layout to the viewport — there's no prop to set and nothing for a consumer
        to configure. Three states, based on how much horizontal space is available:
      </p>
      <ul style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection}; padding-left: var(--spacing-md2);">
        <li style="margin-bottom: \${space.label};">
          <strong>768px and up</strong> — a fixed 560px card, centered at the bottom of the screen.
        </li>
        <li style="margin-bottom: \${space.label};">
          <strong>340–767px</strong> — the card stretches to fill the available width instead, inset 20px from
          each edge, since a fixed 560px card no longer fits comfortably centered.
        </li>
        <li>
          <strong>Below 340px</strong> — the icon, message, and close button (normally side by side) stack into
          their own rows, so a long message can't push the icon or close button off-screen.
        </li>
      </ul>

      <!-- Breakpoint diagram: the ≥768px band renders the actual mms-toast, -->
      <!-- contained inline via the same fixed-position containing-block trick -->
      <!-- as the Placement demo above. The two narrower bands can't do that on -->
      <!-- a wide desktop page — @media queries here are real viewport queries, -->
      <!-- not container queries — so each embeds the real component inside its -->
      <!-- own <iframe>, pinned to a literal pixel width, so its own breakpoint -->
      <!-- CSS genuinely fires for that browsing context. -->
      <div style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection};">

        <!-- Band 1: >=768px, fixed 560px, centered — real component, own iframe -->
        <!-- Same isolation reason as bands 2/3 below, not just pixel-width -->
        <!-- accuracy: toast-stack.ts's registry is a page-global singleton, so a -->
        <!-- same-document "live" toast here would silently share one stacking -->
        <!-- order with the Placement demo's toasts above (confirmed: it was -->
        <!-- counted as the newest toast, pushing Placement's two out of place). -->
        <!-- An iframe is its own browsing context with its own copy of the -->
        <!-- registry module, so it can't collide with anything outside it. -->
        <div style="width: 100%;">
          <div style="\${d.frame}">
            <span style="\${d.frameLabel}">≥ 768px viewport</span>
            <div style="\${d.viewportBox}">
              <iframe
                src="./iframe.html?id=feedback-toast--responsive-demo&viewMode=story"
                style="width: 800px; max-width: 100%; height: 150px; border: 0; background: transparent;"
                title="mms-toast rendered at a real 800px viewport width"
              ></iframe>
            </div>
            <div style="\${d.widthRow}"><span style="\${d.widthLabel}">560px card, centered</span></div>
          </div>
          <p style="\${d.caption}">Fixed width, centered at the bottom of the screen</p>
        </div>

        <!-- Bands 2 + 3: side by side, each a real component in its own iframe -->
        <div style="display: flex; gap: \${space.content}; align-items: flex-start;">

          <!-- Band 2: 340-767px, full width, inset -->
          <div style="flex: 1 1 60%; min-width: 0;">
            <div style="\${d.frame}">
              <span style="\${d.frameLabel}">340–767px viewport</span>
              <div style="\${d.viewportBox}">
                <iframe
                  src="./iframe.html?id=feedback-toast--responsive-demo&viewMode=story"
                  style="width: 420px; max-width: 100%; height: 190px; border: 0; background: transparent;"
                  title="mms-toast rendered at a real 420px viewport width"
                ></iframe>
              </div>
              <div style="\${d.widthRow}"><span style="\${d.widthLabel}">full width, 20px inset</span></div>
            </div>
            <p style="\${d.caption}">Stretches edge-to-edge, inset 20px each side</p>
          </div>

          <!-- Band 3: <340px, stacked, icon top-left -->
          <div style="flex: 1 1 40%; min-width: 0;">
            <div style="\${d.frame}">
              <span style="\${d.frameLabel}">&lt; 340px viewport</span>
              <div style="\${d.viewportBox}">
                <iframe
                  src="./iframe.html?id=feedback-toast--responsive-demo&viewMode=story"
                  style="width: 260px; max-width: 100%; height: 190px; border: 0; background: transparent;"
                  title="mms-toast rendered at a real 260px viewport width"
                ></iframe>
              </div>
              <div style="\${d.widthRow}"><span style="\${d.widthLabel}">icon / message / close stacked</span></div>
            </div>
            <p style="\${d.caption}">Icon top-left, message, close bottom-right</p>
          </div>

        </div>
      </div>
      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Every card above is the real <code style="\${t.monoSm}">mms-toast</code> component, not a mockup — the two
        narrower bands run inside an <code style="\${t.monoSm}">iframe</code> pinned to that literal pixel width, so
        their own <code style="\${t.monoSm}">@media</code> breakpoint genuinely fires for that browsing context. You
        can also resize this window below 767px and 340px to see the same behavior applied to the whole page.
      </p>

      <hr style="\${doc.divider}" />

      <!-- UX behavior — dismissal -->
      <h2 style="\${t.h2}">UX behavior — dismissal</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Manual dismiss (the close button) is the default and always available. Setting
        <code style="\${t.monoSm}">auto-dismiss</code> opts a toast into <em>also</em> dismissing on a timer —
        <code style="\${t.monoSm}">auto-dismiss-duration</code> controls the delay (default
        <strong>8000ms</strong>). The timer pauses whenever the pointer hovers the toast or keyboard focus lands
        anywhere inside it, and restarts from the full duration once both clear — there's no separate
        pause/resume button; hover, focus, and the always-present close button are the full control surface.
        Both dismissal paths fire the same <code style="\${t.monoSm}">dismiss</code> event, distinguished by
        <code style="\${t.monoSm}">event.detail.reason</code> (<code style="\${t.monoSm}">'user'</code> or
        <code style="\${t.monoSm}">'timeout'</code>) — the component never removes itself from the DOM either way;
        the host page owns that.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm}">
          <strong>Caution:</strong> avoid pairing <code style="\${t.monoSm}">auto-dismiss</code> with
          <code style="\${t.monoSm}">action</code> (e.g. "Undo") unless
          <code style="\${t.monoSm}">auto-dismiss-duration</code> gives the user realistic time to read the
          message and act on the text link before it disappears — this isn't enforced by the component, so it's
          a per-instance judgment call.
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Other considerations -->
      <h2 style="\${t.h2}">Other considerations</h2>
      <ul style="\${t.bodySm} padding-left: var(--spacing-lg1); max-width: \${PROSE_MAX};">
        <li style="margin-bottom: \${space.content};">
          <strong>Consumer-owned.</strong> Focus management after dismiss is undefined today — where focus lands when a toast disappears while
          focused isn't handled by the component. Candidate for a small future accessibility ticket.
        </li>
        <li style="margin-bottom: \${space.content};">
          <strong>Current behavior.</strong> The stack-cap-3 auto-evict (see <strong>Placement</strong> above) is the component's mitigation for
          overlapping <code style="\${t.monoSm}">aria-live</code> announcements from rapid multi-toast mounting —
          consumers no longer need to self-limit concurrent toast count.
        </li>
        <li>
          <strong>Current behavior.</strong> Clicking the text-link action never dismisses the toast — action and dismissal are independent.
        </li>
      </ul>

    </div>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    alertType: 'informational' as ToastType,
    leftIcon: true,
    closeIcon: true,
    action: false,
    message: 'Informational message.',
    actionText: 'Action',
    actionHref: '#',
    autoDismiss: false,
    autoDismissDuration: 8000,
    theme: 'maximus',
    density: 'default'
  },
  argTypes: {
    // ── Visual ────────────────────────────────────────────────
    alertType: {
      name: 'Alert type',
      control: 'select',
      options: ['informational', 'error', 'success', 'caution'],
      description: 'Semantic type — pairs a status icon and accent color',
      table: {
        category: 'Visual'
      }
    },
    leftIcon: {
      name: 'Show icon',
      control: 'boolean',
      description: 'Whether to render the status icon',
      table: {
        category: 'Visual'
      }
    },
    closeIcon: {
      name: 'Show close button',
      control: 'boolean',
      description: 'Whether to render the divider and close button',
      table: {
        category: 'Visual'
      }
    },
    action: {
      name: 'Show action',
      control: 'boolean',
      description: 'Whether to render the text-link action',
      table: {
        category: 'Visual'
      }
    },
    // ── Content ───────────────────────────────────────────────
    message: {
      name: 'Message',
      control: 'text',
      description: 'Message text',
      table: {
        category: 'Content'
      }
    },
    actionText: {
      name: 'Action text',
      control: 'text',
      description: 'Text-link label',
      table: {
        category: 'Content'
      }
    },
    actionHref: {
      name: 'Action href',
      control: 'text',
      description: 'Text-link URL',
      table: {
        category: 'Content'
      }
    },
    // ── Behavior ──────────────────────────────────────────────
    // Toggling this won't visibly demo here — the Playground has no dismiss/close
    // interaction context to observe pause/resume/timeout against — but the prop
    // still needs to be listed so consumers know it exists.
    autoDismiss: {
      name: 'Auto dismiss',
      control: 'boolean',
      description: 'Opt-in: dismiss automatically after the duration below. Off by default. Pauses on hover or keyboard focus; the close button always remains available as a stop mechanism. Not demoed live on this page (no dismiss/close interaction context to observe it against) — but available for use in your project.',
      table: {
        category: 'Behavior'
      }
    },
    autoDismissDuration: {
      name: 'Auto dismiss duration (ms)',
      control: 'number',
      description: 'Delay before auto-dismiss fires, when auto dismiss is on. Default 8000. Not demoed live on this page — available for use in your project.',
      table: {
        category: 'Behavior'
      }
    },
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
      description: 'Brand theme (affects typography and link color)',
      table: {
        category: 'Global'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Accepted as a global attribute passthrough — mms-toast has no compact-specific styling yet',
      table: {
        category: 'Global'
      }
    }
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div style="padding: 1.5rem 2rem; position: relative; transform: translateZ(0); overflow: hidden; min-height: 4.5rem;">
          \${story()}
        </div>
      \`;
  }],
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string | boolean | number>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.alertType && a.alertType !== 'informational') attrs.push(\`alert-type="\${a.alertType}"\`);
          if (a.leftIcon === false) attrs.push('.leftIcon=\${false}');
          if (a.closeIcon === false) attrs.push('.closeIcon=\${false}');
          if (a.action) attrs.push('action');
          if (a.message) attrs.push(\`message="\${a.message}"\`);
          if (a.action && a.actionText) attrs.push(\`action-text="\${a.actionText}"\`);
          if (a.action && a.actionHref) attrs.push(\`action-href="\${a.actionHref}"\`);
          if (a.autoDismiss) attrs.push('auto-dismiss');
          if (a.autoDismiss && a.autoDismissDuration && a.autoDismissDuration !== 8000) attrs.push(\`auto-dismiss-duration="\${a.autoDismissDuration}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-toast\\n  \${attrs.join('\\n  ')}\\n></mms-toast>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none' // Preserve argTypes definition order
    }
  },
  render: (args: {
    alertType: ToastType;
    leftIcon: boolean;
    closeIcon: boolean;
    action: boolean;
    message: string;
    actionText: string;
    actionHref: string;
    autoDismiss: boolean;
    autoDismissDuration: number;
    theme: string;
    density: string;
  }) => {
    return html\`
      <mms-toast
        alert-type=\${args.alertType}
        .leftIcon=\${args.leftIcon}
        .closeIcon=\${args.closeIcon}
        ?action=\${args.action}
        message=\${args.message}
        action-text=\${args.actionText || nothing}
        action-href=\${args.actionHref || nothing}
        ?auto-dismiss=\${args.autoDismiss}
        auto-dismiss-duration=\${args.autoDismissDuration}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
      ></mms-toast>
    \`;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Responsive demo (internal)',
  tags: ['!dev'],
  render: () => html\`
    <mms-toast alert-type="informational" message="Your application was submitted successfully."></mms-toast>
  \`
}`,...N.parameters?.docs?.source}}},P=[`Overview`,`LayoutBehavior`,`PlaygroundStory`,`ResponsiveDemo`]}));F();export{j as LayoutBehavior,E as Overview,M as PlaygroundStory,N as ResponsiveDemo,P as __namedExportsOrder,T as default,F as n,C as t};