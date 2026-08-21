import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,t as d}from"./decorate-Bygya6Tu.js";import{n as f,r as p}from"./focus.css-BrGuLyxh.js";import{t as m}from"./mms-icon.component-DRWi1aVe.js";import{t as h}from"./iframe-CSzr-2iw.js";import{a as g,o as _,r as v,t as y}from"./a11y-outcome-CiARakld.js";import{n as b,t as x}from"./normalize-alert-type-C-qeRm_W.js";var S,C,w=e((()=>{o(),u(),p(),x(),m(),h(),l(),S=`informational`,C=class extends i{constructor(...e){super(...e),this.alertType=`informational`,this.actionPosition=`below`,this.action=!0,this.summary=``,this.message=`Additional information goes here.`,this.actionText=`Text link`,this.actionHref=`#`,this.autoDismiss=!1,this.autoDismissDuration=8e3,this._isHovered=!1,this._isFocused=!1,this._dismissTimer=null,this._handleDismiss=e=>{this._stopDismissTimer(),this.dispatchEvent(new CustomEvent(`dismiss`,{bubbles:!0,composed:!0,detail:{reason:e}}))},this._handleCloseClick=()=>{this._handleDismiss(`user`)},this._handleActionClick=()=>{this.dispatchEvent(new CustomEvent(`action-click`,{bubbles:!0,composed:!0,detail:{href:this.actionHref}}))},this._handleMouseEnter=()=>{this._isHovered=!0,this._stopDismissTimer()},this._handleMouseLeave=()=>{this._isHovered=!1,this._startDismissTimer()},this._handleFocusIn=()=>{this._isFocused=!0,this._stopDismissTimer()},this._handleFocusOut=e=>{let t=e.relatedTarget;t&&(this.shadowRoot?.contains(t)||this.contains(t))||(this._isFocused=!1,this._startDismissTimer())},this._handleVisibilityChange=()=>{document.hidden?this._stopDismissTimer():this._startDismissTimer()}}static{this.styles=[f,r`
      /* ═══════════════════════════════════════════════════════════════════════
         HOST — Default (informational) stroke/fill colors
         ═══════════════════════════════════════════════════════════════════════ */
      :host {
        --_stroke: var(--color-utility-informational-stroke);
        --_fill: var(--color-utility-informational-text);
        display: flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        position: relative;
        background: var(--color-surface-raised);
        border-radius: var(--radius-md);
        border: 1px solid var(--_stroke);
        box-shadow: var(--elevation-lg);
        overflow: hidden;
      }

      :host::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 6px;
        background: var(--_stroke);
      }

      :host([alert-type='error']) {
        --_stroke: var(--color-utility-error-emphasis);
        --_fill: var(--color-utility-error-emphasis);
      }

      :host([alert-type='success']) {
        --_stroke: var(--color-utility-success-emphasis);
        --_fill: var(--color-utility-success-emphasis);
      }

      :host([alert-type='caution']) {
        --_stroke: var(--color-utility-caution-emphasis);
        --_fill: var(--color-utility-caution-emphasis);
      }

      /* Compact corner radius below the mms 768px layout-padding-step
         (--layout-padding-step) — media queries can't resolve custom
         properties, so the literal breakpoint value is unavoidable */
      @media (max-width: 767px) {
        :host {
          border-radius: var(--radius-sm);
        }
      }

      /* ═══════════════════════════════════════════════════════════════════════
         CONTAINER
         ═══════════════════════════════════════════════════════════════════════ */
      .container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: var(--spacing-sm1);
        padding: var(--spacing-md1) var(--spacing-md2);
        padding-left: var(--spacing-md2); /* 6px accent (::before) + 14px visible gap to icon */
        flex: 1;
        min-width: 0;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         STATUS ICON
         ═══════════════════════════════════════════════════════════════════════ */
      .status-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: var(--_fill);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         CONTENT
         ═══════════════════════════════════════════════════════════════════════ */
      .content {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs2);
        flex: 1;
        min-width: 0;
      }

      .message {
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--type-body-md-weight);
        color: var(--color-text-default);
        margin: 0;
        /* At extreme narrow+zoomed states even the stacked layout can leave a
           single long word with nowhere to wrap; break it instead of letting
           it overflow past :host's overflow: hidden and disappear (WCAG 1.4.4). */
        overflow-wrap: break-word;
      }

      .message strong {
        font-weight: var(--font-weight-bold);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         TEXT LINK — inline (action-position="right") sits within message flow
         ═══════════════════════════════════════════════════════════════════════ */
      .text-link--inline {
        display: inline-flex;
        margin-left: var(--spacing-sm1);
        vertical-align: middle;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         CLOSE BUTTON
         ═══════════════════════════════════════════════════════════════════════ */
      .close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        cursor: pointer;
        background: none;
        border: none;
        border-radius: var(--radius-sm);
        color: var(--color-text-default);
        /* Expands the click/hover/focus target to WCAG 2.5.8's 24px floor
           without affecting layout — the negative margin cancels the
           padding's footprint out of the flex row (same pattern as
           mms-modal's .close-button). */
        padding: var(--spacing-sm1);
        margin: calc(var(--spacing-sm1) * -1);
      }

      .close-button:hover {
        opacity: 0.7;
      }

      /* Below this width, the status icon and close button — both fixed-size,
         flex-shrink: 0 — can alone exceed the available row width (e.g. a
         320px viewport at 200% browser zoom, WCAG 1.4.4 Resize Text): CSS
         zoom magnifies rendering but does not change the viewport width a
         media query evaluates against, so the breakpoint must cover the
         unzoomed 320px viewport itself, not some smaller zoomed-equivalent
         value. Stacking here also covers plain narrow-viewport rendering
         (no zoom) at this width, which already passed before this change.
         Literal breakpoint value, same reasoning as the border-radius media
         query above: media queries can't resolve custom properties. */
      @media (max-width: 340px) {
        /* Fully vertical stack, not just the text: at this width combined with
           200% zoom (WCAG 1.4.4), the fixed-size icon (24px) and close button
           (32px, from the target-size fix above) together already exceed the
           available row width even with the text moved out of the way — no
           side-by-side arrangement of the two fits. Giving each its own row
           removes the width constraint entirely, since every item then only
           has to fit against the full row width alone. */
        .container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas: 'icon' 'content' 'close';
        }

        .status-icon {
          grid-area: icon;
        }

        .content {
          grid-area: content;
        }

        .close-button {
          grid-area: close;
          justify-self: end;
          /* The target-size fix's padding+negative-margin trick (above) relies
             on a flex row absorbing the negative margin within its own bounds.
             In its own grid row that margin instead renders past the row's
             edge and overflows the host — reset it here; the button no longer
             shares its row with anything else, so the expanded 32px hit
             target doesn't need the margin cancellation to avoid shifting
             layout. */
          margin: 0;
        }
      }
    `]}_getIconName(){switch(this.alertType){case`success`:return`check-circle`;case`error`:return`warning-circle`;case`caution`:return`warning`;default:return`info`}}_startDismissTimer(){this._stopDismissTimer(),!(!this.autoDismiss||this._isHovered||this._isFocused||document.hidden)&&(this._dismissTimer=setTimeout(()=>{this._handleDismiss(`timeout`)},this.autoDismissDuration))}_stopDismissTimer(){this._dismissTimer&&=(clearTimeout(this._dismissTimer),null)}_renderTextLink(e){return a`
      <mms-link
        class=${e?`text-link--inline`:``}
        href=${this.actionHref}
        label=${this.actionText}
        right-icon="arrow-right"
        underline="hover"
        @click=${this._handleActionClick}
      ></mms-link>
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`status`),document.addEventListener(`visibilitychange`,this._handleVisibilityChange),this._startDismissTimer()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`visibilitychange`,this._handleVisibilityChange),this._stopDismissTimer()}updated(e){super.updated(e),(e.has(`autoDismiss`)||e.has(`autoDismissDuration`))&&this._startDismissTimer()}willUpdate(e){if(!e.has(`alertType`))return;let t=b(this.alertType,S);t!==this.alertType&&(this.alertType=t)}render(){let e=this.actionPosition===`right`;return a`
      <div
        class="container"
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
        @focusin=${this._handleFocusIn}
        @focusout=${this._handleFocusOut}
      >
        <span class="status-icon">
          <mms-icon name=${this._getIconName()} size="lg" label=${`${this.alertType} alert`}></mms-icon>
        </span>
        <div class="content">
          <p class="message">
            ${this.summary?a`<strong>${this.summary}</strong> `:n}${this.message}${this.action&&e?this._renderTextLink(!0):n}
          </p>
          ${this.action&&!e?this._renderTextLink(!1):n}
        </div>
        <button class="close-button" @click=${this._handleCloseClick} aria-label="Dismiss alert">
          <mms-icon name="x" size="sm"></mms-icon>
        </button>
      </div>
    `}},d([c({type:String,reflect:!0,attribute:`alert-type`})],C.prototype,`alertType`,void 0),d([c({type:String,reflect:!0,attribute:`action-position`})],C.prototype,`actionPosition`,void 0),d([c({type:Boolean,reflect:!0})],C.prototype,`action`,void 0),d([c({type:String})],C.prototype,`summary`,void 0),d([c({type:String})],C.prototype,`message`,void 0),d([c({type:String,attribute:`action-text`})],C.prototype,`actionText`,void 0),d([c({type:String,attribute:`action-href`})],C.prototype,`actionHref`,void 0),d([c({type:Boolean,reflect:!0,attribute:`auto-dismiss`})],C.prototype,`autoDismiss`,void 0),d([c({type:Number,attribute:`auto-dismiss-duration`})],C.prototype,`autoDismissDuration`,void 0),C=d([s(`mms-alert-banner`)],C)})),T=t({LayoutBehavior:()=>M,Overview:()=>A,PlaygroundStory:()=>N,__namedExportsOrder:()=>P,default:()=>E}),E,D,O,k,A,j,M,N,P,F=e((()=>{o(),w(),g(),y(),E={title:`Feedback/Alert Banner`,tags:[`!autodocs`]},D={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},O=`680px`,k=`960px`,A={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${k}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${D.h1}">Alert Banner</h1>
      <p style="${D.body} opacity: 0.85; max-width: ${O}; margin-bottom: 2rem;">
        A full-width, dismissible banner surfacing general status information — not critical or
        blocking — with an optional text-link action. Announced politely to assistive technology,
        not interrupting the user's current task.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${D.h2}">Basic usage</h2>
      <p style="${D.bodySm} opacity: 0.85; max-width: ${O}; margin-bottom: 1.5rem;">
        Defaults to the <code style="${D.monoSm}">informational</code> type with a below-message text-link action.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-alert-banner
          summary="Heads up:"
          message="Your session will expire in 15 minutes."
          action-text="Extend session"
        ></mms-alert-banner>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Alert Types -->
      <h2 style="${D.h2}">Alert types</h2>
      <p style="${D.bodySm} opacity: 0.85; max-width: ${O}; margin-bottom: 1.5rem;">
        Four semantic types: <code style="${D.monoSm}">informational</code> (default),
        <code style="${D.monoSm}">success</code>, <code style="${D.monoSm}">caution</code>, and
        <code style="${D.monoSm}">error</code>. Each pairs a distinct icon with its own accent color.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-alert-banner
          alert-type="informational"
          summary="Informational:"
          message="A new version of this form is available."
          action-text="View changes"
        ></mms-alert-banner>
        <mms-alert-banner
          alert-type="success"
          summary="Success:"
          message="Your application was submitted successfully."
          action-text="View confirmation"
        ></mms-alert-banner>
        <mms-alert-banner
          alert-type="caution"
          summary="Caution:"
          message="Some information could not be verified automatically."
          action-text="Review details"
        ></mms-alert-banner>
        <mms-alert-banner
          alert-type="error"
          summary="Error:"
          message="We were unable to process your last payment."
          action-text="Update payment method"
        ></mms-alert-banner>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Action Position -->
      <h2 style="${D.h2}">Action position</h2>
      <p style="${D.bodySm} opacity: 0.85; max-width: ${O}; margin-bottom: 1.5rem;">
        <code style="${D.monoSm}">action-position="below"</code> (default) places the text link on its
        own line beneath the message. <code style="${D.monoSm}">action-position="right"</code> flows
        it inline at the end of the message text.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-alert-banner
          action-position="below"
          message="Below places the action on its own line."
          action-text="Text link"
        ></mms-alert-banner>
        <mms-alert-banner
          action-position="right"
          message="Right flows the action inline with the message."
          action-text="Text link"
        ></mms-alert-banner>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Without action -->
      <h2 style="${D.h2}">Without an action</h2>
      <p style="${D.bodySm} opacity: 0.85; max-width: ${O}; margin-bottom: 1.5rem;">
        Setting <code style="${D.monoSm}">action</code> to <code style="${D.monoSm}">false</code> hides the text link entirely — for a message that needs no follow-up.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-alert-banner
          .action=${!1}
          alert-type="success"
          summary="Saved."
          message="All changes have been saved."
        ></mms-alert-banner>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Dismissal -->
      <h2 style="${D.h2}">Dismissal</h2>
      <p style="${D.bodySm} opacity: 0.85; max-width: ${O}; margin-bottom: 1.5rem;">
        The close button fires a <code style="${D.monoSm}">dismiss</code> event — the host page owns
        removal from the DOM (e.g. <code style="${D.monoSm}">@dismiss=\${() => el.remove()}</code>);
        the component does not remove itself. Manual dismiss is the default; setting
        <code style="${D.monoSm}">auto-dismiss</code> opts the banner into also firing
        <code style="${D.monoSm}">dismiss</code> on a timer (<code style="${D.monoSm}">detail.reason</code>
        is <code style="${D.monoSm}">'user'</code> or <code style="${D.monoSm}">'timeout'</code> accordingly) —
        see the <strong>Layout &amp; Behavior</strong> page for the full guidance.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-alert-banner
          alert-type="caution"
          message="Dismiss this banner with the close button — it fires a 'dismiss' event."
          .action=${!1}
        ></mms-alert-banner>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${D.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${D.bodySm} margin: 0;">
          <strong>Why <code style="${D.monoSm}">role="status"</code>, not <code style="${D.monoSm}">role="alert"</code>?</strong>
          Alert Banner surfaces general status information — including <code style="${D.monoSm}">error</code> type —
          that is not critical or blocking. <code style="${D.monoSm}">role="status"</code>'s implicit
          <code style="${D.monoSm}">aria-live="polite"</code> announces the banner without interrupting the
          user's current task, matching that framing. Use a dedicated blocking-error pattern (e.g. inline
          field validation, a modal) for messages that must halt the user's flow.
        </p>
      </div>

      <h3 style="${D.h3}">WCAG 2.2 AA Compliance</h3>
      ${v(_[`alert-banner`].rows)}

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${D.bodySm} margin: 0 0 0.5rem;">
          <strong>Why doesn't 1.4.11 Non-Text Contrast apply to <code style="${D.monoSm}">informational</code>'s border?</strong>
        </p>
        <p style="${D.bodySm} margin: 0 0 0.5rem;">
          1.4.11 only applies to graphical objects <em>required to identify or understand content</em> — it is
          not a blanket 3:1 rule for every border. The <code style="${D.monoSm}">informational</code> alert
          type is already conveyed by the status icon (with its own <code style="${D.monoSm}">aria-label</code>)
          and the bold summary text, so this border isn't required to identify anything — it's decorative
          reinforcement. That makes the criterion inapplicable to it, not a case of meeting it at a low ratio.
        </p>
        <p style="${D.bodySm} margin: 0 0 0.5rem;">
          For reference, <code style="${D.monoSm}">informational</code> is the one alert type without a
          dedicated structural utility hue — it borrows <code style="${D.monoSm}">--color-border-default</code>
          (<code style="${D.monoSm}">--color-neutral-6</code>, <code style="${D.monoSm}">#b8b8b8</code>) against
          the banner's <code style="${D.monoSm}">--color-surface-raised</code>
          (<code style="${D.monoSm}">#fcfcfc</code>) background — a computed ratio of ~1.77:1. That number is
          background context for why the exemption matters here, not a contrast figure this component needs to
          clear.
        </p>
        <p style="${D.bodySm} margin: 0 0 0.5rem;">
          <code style="${D.monoSm}">error</code>, <code style="${D.monoSm}">success</code>, and
          <code style="${D.monoSm}">caution</code> happen to clear 3:1 regardless — each reuses the same
          dedicated emphasis hex chosen to satisfy 4.5:1 text contrast (1.4.3) for that type, which incidentally
          clears the lower 3:1 non-text bar too. So all four types are compliant, but for two different reasons:
          the other three by meeting the ratio, <code style="${D.monoSm}">informational</code> by the criterion
          not applying.
        </p>
        <p style="${D.bodySm} margin: 0; opacity: 0.85;">
          <strong>Caveat:</strong> this exemption holds only as long as the status icon and its label continue
          to accompany the <code style="${D.monoSm}">informational</code> variant. If a future revision ever
          drops the icon (or its label) as the sole identifier of alert type, this border would become a
          required graphical object and 1.4.11 would apply to it directly.
        </p>
      </div>

      <h3 style="${D.h3}">Screen Reader Behavior</h3>
      <ul style="${D.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>On render:</strong> Announces politely (does not interrupt) via <code style="${D.monoSm}">role="status"</code> — summary, message, and action link text are read as content</li>
        <li style="margin-bottom: 0.5rem;"><strong>Status icon:</strong> Announced via its <code style="${D.monoSm}">aria-label</code> (e.g. "error alert"), not left silent as decorative</li>
        <li style="margin-bottom: 0.5rem;"><strong>Text link:</strong> Announced as a link with its label; focusable independently of the banner container</li>
        <li><strong>Close button:</strong> Announced as "Dismiss alert, button"</li>
      </ul>

      <h3 style="${D.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to the text-link action, then the close button (in DOM order)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activates the focused text link or close button</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},j={frame:`border: 2px dashed rgba(128,128,128,0.35); border-radius: 8px; padding: 2rem 1.5rem 1rem; position: relative; margin-bottom: 0.75rem;`,frameLabel:`position: absolute; top: -0.7rem; left: 1rem; background: var(--color-surface-default, #fff); padding: 0 0.5rem; font-size: 0.75rem; font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;`,content:`border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; padding: 1rem; background: rgba(128,128,128,0.03);`,header:`height: 2.5rem; border-radius: 4px; background: rgba(128,128,128,0.15); display: flex; align-items: center; padding: 0 0.75rem; font-size: 0.75rem; font-weight: 600; opacity: 0.6;`,gap:`display: flex; align-items: center; justify-content: center; gap: 0.375rem; padding: 0.375rem 0; font-size: 0.75rem; opacity: 0.55; font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;`,bannerEmphasis:`border-radius: 6px; border: 1px solid #3B82F6; background: rgba(59, 130, 246, 0.08); padding: 0.75rem 1rem; font-size: 0.8125rem;`,bannerMuted:`border-radius: 6px; border: 1px dashed rgba(128,128,128,0.3); background: rgba(128,128,128,0.04); padding: 0.75rem 1rem; font-size: 0.8125rem; opacity: 0.6;`,widthRow:`margin: 1rem 2.5rem 0; height: 1.25rem; border-top: 1px solid rgba(128,128,128,0.3); border-left: 1px solid rgba(128,128,128,0.3); border-right: 1px solid rgba(128,128,128,0.3); border-radius: 4px 4px 0 0; display: flex; align-items: flex-end; justify-content: center;`,widthLabel:`font-size: 0.75rem; opacity: 0.55; font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; transform: translateY(0.65rem); background: var(--color-surface-default, #fff); padding: 0 0.375rem;`,caption:`font-size: 0.8125rem; opacity: 0.65; text-align: center; margin: 0.5rem 0 0;`,callout:e=>`background: ${e}0d; border-left: 3px solid ${e}; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;`},M={name:`Layout & Behavior`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${k}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Intro -->
      <h1 style="${D.h1}">Layout &amp; Behavior</h1>
      <p style="${D.body} opacity: 0.85; max-width: ${O}; margin-bottom: 2rem;">
        Alert Banner is a page-level element, not an embeddable one — it isn't meant to be nested inside cards,
        panels, sidebars, or other narrow containers. It has no built-in position, stacking, or z-index; it
        renders as a direct child of the page's main content area and expects the host page to position it
        (typically pinned below the header). Because of that placement,
        <code style="${D.monoSm}">width: 100%</code> resolves to the content area's width — the viewport minus
        layout offsets — never the raw viewport, and never some narrower container it happens to be dropped
        into. Dismissal is manual by default; auto-dismiss is available as an opt-in per-instance choice. This
        page covers the placement conventions, the responsiveness rule, and the full dismissal behavior — none
        of which can be defined or enforced at the single-component level.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Placement -->
      <h2 style="${D.h2}">Placement</h2>
      <p style="${D.bodySm} opacity: 0.85; max-width: ${O}; margin-bottom: 1rem;">
        Alert Banner is placed <strong>sticky, below the page header</strong>,
        so it stays visible as the user scrolls without covering primary navigation. This is a
        <strong>consumer-implemented layout responsibility</strong> — <code style="${D.monoSm}">:host</code> is
        <code style="${D.monoSm}">position: relative</code> with no sticky/z-index baked in, because the correct
        top offset depends on each host page's own header height, which this component has no way to know.
      </p>
      <p style="${D.bodySm} opacity: 0.85; max-width: ${O}; margin-bottom: 1rem;">
        When more than one banner is present, stack them <strong>most-recent-on-top</strong> (newest nearest the
        header), each separated by a small gap: <strong>4px at the Xs breakpoint, 8px from Sm through Xl</strong>.
        Below the Xs breakpoint, prefer <code style="${D.monoSm}">action-position="below"</code> as a rule of
        thumb — inline (<code style="${D.monoSm}">"right"</code>) actions are more likely to wrap awkwardly at
        that width. This is guidance for choosing the prop per breakpoint, not an automatic switch the component
        makes on its own.
      </p>

      <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px;">
          <p style="${D.bodySm} margin: 0 0 0.5rem; opacity: 0.6; font-weight: 600;">✅ Do</p>
          <p style="${D.bodySm} background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.3); border-radius: 6px; padding: 0.75rem; margin: 0; opacity: 0.85;">
            Position the banner (or a wrapping container) as <code style="${D.monoSm}">sticky</code> with
            <code style="${D.monoSm}">top</code> set to the host page's actual header height. Stack multiple
            banners with newest on top and the gap rule above.
          </p>
        </div>
        <div style="flex: 1; min-width: 240px;">
          <p style="${D.bodySm} margin: 0 0 0.5rem; opacity: 0.6; font-weight: 600;">❌ Don't</p>
          <p style="${D.bodySm} background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.3); border-radius: 6px; padding: 0.75rem; margin: 0; opacity: 0.85;">
            Don't append banners directly to <code style="${D.monoSm}">&lt;body&gt;</code> with no offset — they'll
            either cover the header or scroll away with the content, defeating the "stays visible" purpose.
          </p>
        </div>
      </div>

      <div style="${j.frame}">
        <span style="${j.frameLabel}">Viewport</span>
        <div style="${j.content}">
          <div style="${j.header}">Header</div>
          <div style="${j.gap}">↕ 4px (Xs) · 8px (Sm–Xl)</div>
          <div style="${j.bannerEmphasis}"><strong>Banner #1</strong> — newest, nearest the header</div>
          <div style="${j.gap}">↕ 4px (Xs) · 8px (Sm–Xl)</div>
          <div style="${j.bannerMuted}">Banner #2 — older, pushed down</div>
        </div>
        <div style="${j.widthRow}"><span style="${j.widthLabel}">content-area width = viewport − layout offsets</span></div>
      </div>
      <p style="${j.caption}">
        Both banners are sticky — pinned below the header as the page scrolls. Width matches the content area,
        not the raw viewport.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Responsiveness -->
      <h2 style="${D.h2}">Responsiveness</h2>
      <p style="${D.bodySm} opacity: 0.85; max-width: ${O}; margin-bottom: 1rem;">
        Alert Banner has no independent container of its own — it's a page-level element, placed directly within
        <strong>the content area</strong>: the full viewport minus whatever layout offsets the host page applies
        (side nav, page margins, grid gutters), not the raw viewport width. The component already implements
        this correctly: <code style="${D.monoSm}">:host { width: 100%; }</code> resolves to whatever its parent's
        width is, so the consumer's only job is placement — as a direct child of the content-area region,
        alongside <code style="${D.monoSm}">&lt;main&gt;</code>, not nested inside a card, panel, or sidebar, and
        not appended to <code style="${D.monoSm}">&lt;body&gt;</code> above the content area.
      </p>
      <p style="${D.bodySm} opacity: 0.85; max-width: ${O}; margin-bottom: 1rem;">
        This isn't automatic — <code style="${D.monoSm}">width: 100%</code> only ever resolves relative to the
        banner's immediate parent, never the viewport itself. If the parent is the true content-area container
        (already inset from the viewport edges by the page's own nav/margin layout), the banner honors those
        offsets correctly. If the banner is placed directly under <code style="${D.monoSm}">&lt;body&gt;</code>
        or any other full-bleed wrapper, it stretches edge-to-edge — full raw viewport width, ignoring the nav
        and margins entirely. The component has no way to detect or correct for this; it's placement alone that
        determines which of the two happens.
      </p>

      <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px;">
          <p style="${D.bodySm} margin: 0 0 0.5rem; opacity: 0.6; font-weight: 600;">✅ Do</p>
          <pre style="${D.monoSm} background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.3); border-radius: 6px; padding: 0.75rem; margin: 0; overflow-x: auto;"><code>&lt;div class="content-area"&gt;
  &lt;mms-alert-banner&gt;&lt;/mms-alert-banner&gt;
  &lt;main&gt;...&lt;/main&gt;
&lt;/div&gt;</code></pre>
        </div>
        <div style="flex: 1; min-width: 240px;">
          <p style="${D.bodySm} margin: 0 0 0.5rem; opacity: 0.6; font-weight: 600;">❌ Don't</p>
          <pre style="${D.monoSm} background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.3); border-radius: 6px; padding: 0.75rem; margin: 0; overflow-x: auto;"><code>&lt;body&gt;
  &lt;mms-alert-banner&gt;&lt;/mms-alert-banner&gt;
  &lt;div class="content-area"&gt;...&lt;/div&gt;
&lt;/body&gt;</code></pre>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- UX Behavior — Dismissal -->
      <h2 style="${D.h2}">UX Behavior — Dismissal</h2>
      <p style="${D.bodySm} opacity: 0.85; max-width: ${O}; margin-bottom: 1rem;">
        Manual dismiss (the close button) is the default and always available. Setting
        <code style="${D.monoSm}">auto-dismiss</code> opts a banner into <em>also</em> dismissing on a timer —
        <code style="${D.monoSm}">auto-dismiss-duration</code> controls the delay (default
        <strong>8000ms</strong>). The timer pauses whenever the pointer hovers the banner or keyboard focus
        lands anywhere inside it, and restarts from the full duration once both clear — there's no separate
        pause/resume button; hover, focus, and the always-present close button are the full control surface.
        Both dismissal paths fire the same <code style="${D.monoSm}">dismiss</code> event, distinguished by
        <code style="${D.monoSm}">event.detail.reason</code> (<code style="${D.monoSm}">'user'</code> or
        <code style="${D.monoSm}">'timeout'</code>) — the component never removes itself from the DOM either
        way; the host page owns that.
      </p>

      <div style="${j.callout(`#F59E0B`)}">
        <p style="${D.bodySm} margin: 0;">
          <strong>Caution:</strong> avoid pairing <code style="${D.monoSm}">auto-dismiss</code> with
          <code style="${D.monoSm}">action</code> unless <code style="${D.monoSm}">auto-dismiss-duration</code>
          gives the user realistic time to read the message and act on the text link before it disappears. A
          banner asking someone to do something needs time to do it — this isn't enforced by the component, so
          it's a per-instance judgment call.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Other considerations -->
      <h2 style="${D.h2}">Other considerations</h2>
      <ul style="${D.bodySm} margin: 0; padding-left: 1.5rem; opacity: 0.85; max-width: ${O};">
        <li style="margin-bottom: 0.75rem;">
          <span style="${j.callout(`#3B82F6`).replace(`padding: 1rem 1.25rem;`,`padding: 0.0625rem 0.5rem;`).replace(`margin-bottom: 1.5rem;`,``).replace(`border-radius: 0 6px 6px 0;`,`border-radius: 3px;`).replace(`border-left: 3px solid #3B82F6;`,`border: none;`)}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Consumer-owned</span>
          Focus management after dismiss is undefined today — where focus lands when a banner disappears while
          focused isn't handled by the component. Candidate for a small future accessibility ticket.
        </li>
        <li style="margin-bottom: 0.75rem;">
          <span style="${j.callout(`#22C55E`).replace(`padding: 1rem 1.25rem;`,`padding: 0.0625rem 0.5rem;`).replace(`margin-bottom: 1.5rem;`,``).replace(`border-radius: 0 6px 6px 0;`,`border-radius: 3px;`).replace(`border-left: 3px solid #22C55E;`,`border: none;`)}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Current behavior</span>
          Clicking the text-link action never dismisses the banner or resets the auto-dismiss timer — action
          and dismissal are independent.
        </li>
        <li style="margin-bottom: 0.75rem;">
          <span style="${j.callout(`#3B82F6`).replace(`padding: 1rem 1.25rem;`,`padding: 0.0625rem 0.5rem;`).replace(`margin-bottom: 1.5rem;`,``).replace(`border-radius: 0 6px 6px 0;`,`border-radius: 3px;`).replace(`border-left: 3px solid #3B82F6;`,`border: none;`)}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Consumer-owned</span>
          Rapid mount/unmount of multiple banners can produce overlapping <code style="${D.monoSm}">aria-live</code>
          announcements. Stagger banner mounts where possible and keep concurrent count small.
        </li>
        <li style="margin-bottom: 0.75rem;">
          <span style="${j.callout(`#3B82F6`).replace(`padding: 1rem 1.25rem;`,`padding: 0.0625rem 0.5rem;`).replace(`margin-bottom: 1.5rem;`,``).replace(`border-radius: 0 6px 6px 0;`,`border-radius: 3px;`).replace(`border-left: 3px solid #3B82F6;`,`border: none;`)}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Consumer-owned</span>
          Whether a dismissal persists across navigation/reload (e.g. via <code style="${D.monoSm}">sessionStorage</code>)
          is entirely up to the host page — the component has no memory of prior dismissals.
        </li>
        <li>
          <span style="${j.callout(`#22C55E`).replace(`padding: 1rem 1.25rem;`,`padding: 0.0625rem 0.5rem;`).replace(`margin-bottom: 1.5rem;`,``).replace(`border-radius: 0 6px 6px 0;`,`border-radius: 3px;`).replace(`border-left: 3px solid #22C55E;`,`border: none;`)}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Current behavior</span>
          Stacking priority is most-recent-on-top, not severity-based — an <code style="${D.monoSm}">error</code>
          banner mounted first will sit below a later <code style="${D.monoSm}">informational</code> one (see
          Placement above).
        </li>
      </ul>

    </div>
  `},N={name:`Playground`,tags:[`!dev`],args:{alertType:`informational`,actionPosition:`below`,action:!0,summary:`Heads up:`,message:`Additional information goes here.`,actionText:`Text link`,actionHref:`#`,autoDismiss:!1,autoDismissDuration:8e3,theme:`maximus`,density:`default`},argTypes:{alertType:{name:`Alert type`,control:`select`,options:[`informational`,`error`,`success`,`caution`],description:`Semantic type — pairs a status icon and accent color`,table:{category:`Visual`}},actionPosition:{name:`Action position`,control:`select`,options:[`below`,`right`],description:`Text-link placement: on its own line below the message, or inline at the end of it`,table:{category:`Visual`}},action:{name:`Show action`,control:`boolean`,description:`Whether to render the text-link action`,table:{category:`Visual`}},summary:{name:`Summary`,control:`text`,description:`Bold lead-in text rendered before the message. Leave empty to omit.`,table:{category:`Content`}},message:{name:`Message`,control:`text`,description:`Regular message text`,table:{category:`Content`}},actionText:{name:`Action text`,control:`text`,description:`Text-link label`,table:{category:`Content`}},actionHref:{name:`Action href`,control:`text`,description:`Text-link URL`,table:{category:`Content`}},autoDismiss:{name:`Auto dismiss`,control:`boolean`,description:`Opt-in: dismiss automatically after the duration below. Off by default. Pauses on hover or keyboard focus; the close button always remains available as a stop mechanism. Not demoed live on this page (no dismiss/close interaction context to observe it against) — but available for use in your project.`,table:{category:`Behavior`}},autoDismissDuration:{name:`Auto dismiss duration (ms)`,control:`number`,description:`Delay before auto-dismiss fires, when auto dismiss is on. Default 8000. Not demoed live on this page — available for use in your project.`,table:{category:`Behavior`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects typography and link color)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-alert-banner has no compact-specific styling yet`,table:{category:`Global`}}},decorators:[e=>a`
        <div style="padding: 1.5rem 2rem;">
          ${e()}
        </div>
      `],parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.alertType&&n.alertType!==`informational`&&r.push(`alert-type="${n.alertType}"`),n.actionPosition&&n.actionPosition!==`below`&&r.push(`action-position="${n.actionPosition}"`),n.action===!1&&r.push(".action=${false}"),n.summary&&r.push(`summary="${n.summary}"`),n.message&&r.push(`message="${n.message}"`),n.action!==!1&&n.actionText&&r.push(`action-text="${n.actionText}"`),n.action!==!1&&n.actionHref&&r.push(`action-href="${n.actionHref}"`),n.autoDismiss&&r.push(`auto-dismiss`),n.autoDismiss&&n.autoDismissDuration&&n.autoDismissDuration!==8e3&&r.push(`auto-dismiss-duration="${n.autoDismissDuration}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-alert-banner\n  ${r.join(`
  `)}\n></mms-alert-banner>`},language:`html`}},controls:{sort:`none`}},render:e=>a`
      <mms-alert-banner
        alert-type=${e.alertType}
        action-position=${e.actionPosition}
        ?action=${e.action}
        summary=${e.summary||n}
        message=${e.message}
        action-text=${e.actionText||n}
        action-href=${e.actionHref||n}
        ?auto-dismiss=${e.autoDismiss}
        auto-dismiss-duration=${e.autoDismissDuration}
        data-density=${e.density===`compact`?`compact`:n}
      ></mms-alert-banner>
    `},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Alert Banner</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A full-width, dismissible banner surfacing general status information — not critical or
        blocking — with an optional text-link action. Announced politely to assistive technology,
        not interrupting the user's current task.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Defaults to the <code style="\${t.monoSm}">informational</code> type with a below-message text-link action.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-alert-banner
          summary="Heads up:"
          message="Your session will expire in 15 minutes."
          action-text="Extend session"
        ></mms-alert-banner>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Alert Types -->
      <h2 style="\${t.h2}">Alert types</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Four semantic types: <code style="\${t.monoSm}">informational</code> (default),
        <code style="\${t.monoSm}">success</code>, <code style="\${t.monoSm}">caution</code>, and
        <code style="\${t.monoSm}">error</code>. Each pairs a distinct icon with its own accent color.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-alert-banner
          alert-type="informational"
          summary="Informational:"
          message="A new version of this form is available."
          action-text="View changes"
        ></mms-alert-banner>
        <mms-alert-banner
          alert-type="success"
          summary="Success:"
          message="Your application was submitted successfully."
          action-text="View confirmation"
        ></mms-alert-banner>
        <mms-alert-banner
          alert-type="caution"
          summary="Caution:"
          message="Some information could not be verified automatically."
          action-text="Review details"
        ></mms-alert-banner>
        <mms-alert-banner
          alert-type="error"
          summary="Error:"
          message="We were unable to process your last payment."
          action-text="Update payment method"
        ></mms-alert-banner>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Action Position -->
      <h2 style="\${t.h2}">Action position</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">action-position="below"</code> (default) places the text link on its
        own line beneath the message. <code style="\${t.monoSm}">action-position="right"</code> flows
        it inline at the end of the message text.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-alert-banner
          action-position="below"
          message="Below places the action on its own line."
          action-text="Text link"
        ></mms-alert-banner>
        <mms-alert-banner
          action-position="right"
          message="Right flows the action inline with the message."
          action-text="Text link"
        ></mms-alert-banner>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Without action -->
      <h2 style="\${t.h2}">Without an action</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Setting <code style="\${t.monoSm}">action</code> to <code style="\${t.monoSm}">false</code> hides the text link entirely — for a message that needs no follow-up.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-alert-banner
          .action=\${false}
          alert-type="success"
          summary="Saved."
          message="All changes have been saved."
        ></mms-alert-banner>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Dismissal -->
      <h2 style="\${t.h2}">Dismissal</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The close button fires a <code style="\${t.monoSm}">dismiss</code> event — the host page owns
        removal from the DOM (e.g. <code style="\${t.monoSm}">@dismiss=\\\${() => el.remove()}</code>);
        the component does not remove itself. Manual dismiss is the default; setting
        <code style="\${t.monoSm}">auto-dismiss</code> opts the banner into also firing
        <code style="\${t.monoSm}">dismiss</code> on a timer (<code style="\${t.monoSm}">detail.reason</code>
        is <code style="\${t.monoSm}">'user'</code> or <code style="\${t.monoSm}">'timeout'</code> accordingly) —
        see the <strong>Layout &amp; Behavior</strong> page for the full guidance.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-alert-banner
          alert-type="caution"
          message="Dismiss this banner with the close button — it fires a 'dismiss' event."
          .action=\${false}
        ></mms-alert-banner>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Why <code style="\${t.monoSm}">role="status"</code>, not <code style="\${t.monoSm}">role="alert"</code>?</strong>
          Alert Banner surfaces general status information — including <code style="\${t.monoSm}">error</code> type —
          that is not critical or blocking. <code style="\${t.monoSm}">role="status"</code>'s implicit
          <code style="\${t.monoSm}">aria-live="polite"</code> announces the banner without interrupting the
          user's current task, matching that framing. Use a dedicated blocking-error pattern (e.g. inline
          field validation, a modal) for messages that must halt the user's flow.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['alert-banner'].rows)}

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0 0 0.5rem;">
          <strong>Why doesn't 1.4.11 Non-Text Contrast apply to <code style="\${t.monoSm}">informational</code>'s border?</strong>
        </p>
        <p style="\${t.bodySm} margin: 0 0 0.5rem;">
          1.4.11 only applies to graphical objects <em>required to identify or understand content</em> — it is
          not a blanket 3:1 rule for every border. The <code style="\${t.monoSm}">informational</code> alert
          type is already conveyed by the status icon (with its own <code style="\${t.monoSm}">aria-label</code>)
          and the bold summary text, so this border isn't required to identify anything — it's decorative
          reinforcement. That makes the criterion inapplicable to it, not a case of meeting it at a low ratio.
        </p>
        <p style="\${t.bodySm} margin: 0 0 0.5rem;">
          For reference, <code style="\${t.monoSm}">informational</code> is the one alert type without a
          dedicated structural utility hue — it borrows <code style="\${t.monoSm}">--color-border-default</code>
          (<code style="\${t.monoSm}">--color-neutral-6</code>, <code style="\${t.monoSm}">#b8b8b8</code>) against
          the banner's <code style="\${t.monoSm}">--color-surface-raised</code>
          (<code style="\${t.monoSm}">#fcfcfc</code>) background — a computed ratio of ~1.77:1. That number is
          background context for why the exemption matters here, not a contrast figure this component needs to
          clear.
        </p>
        <p style="\${t.bodySm} margin: 0 0 0.5rem;">
          <code style="\${t.monoSm}">error</code>, <code style="\${t.monoSm}">success</code>, and
          <code style="\${t.monoSm}">caution</code> happen to clear 3:1 regardless — each reuses the same
          dedicated emphasis hex chosen to satisfy 4.5:1 text contrast (1.4.3) for that type, which incidentally
          clears the lower 3:1 non-text bar too. So all four types are compliant, but for two different reasons:
          the other three by meeting the ratio, <code style="\${t.monoSm}">informational</code> by the criterion
          not applying.
        </p>
        <p style="\${t.bodySm} margin: 0; opacity: 0.85;">
          <strong>Caveat:</strong> this exemption holds only as long as the status icon and its label continue
          to accompany the <code style="\${t.monoSm}">informational</code> variant. If a future revision ever
          drops the icon (or its label) as the sole identifier of alert type, this border would become a
          required graphical object and 1.4.11 would apply to it directly.
        </p>
      </div>

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>On render:</strong> Announces politely (does not interrupt) via <code style="\${t.monoSm}">role="status"</code> — summary, message, and action link text are read as content</li>
        <li style="margin-bottom: 0.5rem;"><strong>Status icon:</strong> Announced via its <code style="\${t.monoSm}">aria-label</code> (e.g. "error alert"), not left silent as decorative</li>
        <li style="margin-bottom: 0.5rem;"><strong>Text link:</strong> Announced as a link with its label; focusable independently of the banner container</li>
        <li><strong>Close button:</strong> Announced as "Dismiss alert, button"</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to the text-link action, then the close button (in DOM order)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activates the focused text link or close button</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Layout & Behavior',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Intro -->
      <h1 style="\${t.h1}">Layout &amp; Behavior</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Alert Banner is a page-level element, not an embeddable one — it isn't meant to be nested inside cards,
        panels, sidebars, or other narrow containers. It has no built-in position, stacking, or z-index; it
        renders as a direct child of the page's main content area and expects the host page to position it
        (typically pinned below the header). Because of that placement,
        <code style="\${t.monoSm}">width: 100%</code> resolves to the content area's width — the viewport minus
        layout offsets — never the raw viewport, and never some narrower container it happens to be dropped
        into. Dismissal is manual by default; auto-dismiss is available as an opt-in per-instance choice. This
        page covers the placement conventions, the responsiveness rule, and the full dismissal behavior — none
        of which can be defined or enforced at the single-component level.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Placement -->
      <h2 style="\${t.h2}">Placement</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Alert Banner is placed <strong>sticky, below the page header</strong>,
        so it stays visible as the user scrolls without covering primary navigation. This is a
        <strong>consumer-implemented layout responsibility</strong> — <code style="\${t.monoSm}">:host</code> is
        <code style="\${t.monoSm}">position: relative</code> with no sticky/z-index baked in, because the correct
        top offset depends on each host page's own header height, which this component has no way to know.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        When more than one banner is present, stack them <strong>most-recent-on-top</strong> (newest nearest the
        header), each separated by a small gap: <strong>4px at the Xs breakpoint, 8px from Sm through Xl</strong>.
        Below the Xs breakpoint, prefer <code style="\${t.monoSm}">action-position="below"</code> as a rule of
        thumb — inline (<code style="\${t.monoSm}">"right"</code>) actions are more likely to wrap awkwardly at
        that width. This is guidance for choosing the prop per breakpoint, not an automatic switch the component
        makes on its own.
      </p>

      <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px;">
          <p style="\${t.bodySm} margin: 0 0 0.5rem; opacity: 0.6; font-weight: 600;">✅ Do</p>
          <p style="\${t.bodySm} background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.3); border-radius: 6px; padding: 0.75rem; margin: 0; opacity: 0.85;">
            Position the banner (or a wrapping container) as <code style="\${t.monoSm}">sticky</code> with
            <code style="\${t.monoSm}">top</code> set to the host page's actual header height. Stack multiple
            banners with newest on top and the gap rule above.
          </p>
        </div>
        <div style="flex: 1; min-width: 240px;">
          <p style="\${t.bodySm} margin: 0 0 0.5rem; opacity: 0.6; font-weight: 600;">❌ Don't</p>
          <p style="\${t.bodySm} background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.3); border-radius: 6px; padding: 0.75rem; margin: 0; opacity: 0.85;">
            Don't append banners directly to <code style="\${t.monoSm}">&lt;body&gt;</code> with no offset — they'll
            either cover the header or scroll away with the content, defeating the "stays visible" purpose.
          </p>
        </div>
      </div>

      <div style="\${d.frame}">
        <span style="\${d.frameLabel}">Viewport</span>
        <div style="\${d.content}">
          <div style="\${d.header}">Header</div>
          <div style="\${d.gap}">↕ 4px (Xs) · 8px (Sm–Xl)</div>
          <div style="\${d.bannerEmphasis}"><strong>Banner #1</strong> — newest, nearest the header</div>
          <div style="\${d.gap}">↕ 4px (Xs) · 8px (Sm–Xl)</div>
          <div style="\${d.bannerMuted}">Banner #2 — older, pushed down</div>
        </div>
        <div style="\${d.widthRow}"><span style="\${d.widthLabel}">content-area width = viewport − layout offsets</span></div>
      </div>
      <p style="\${d.caption}">
        Both banners are sticky — pinned below the header as the page scrolls. Width matches the content area,
        not the raw viewport.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Responsiveness -->
      <h2 style="\${t.h2}">Responsiveness</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Alert Banner has no independent container of its own — it's a page-level element, placed directly within
        <strong>the content area</strong>: the full viewport minus whatever layout offsets the host page applies
        (side nav, page margins, grid gutters), not the raw viewport width. The component already implements
        this correctly: <code style="\${t.monoSm}">:host { width: 100%; }</code> resolves to whatever its parent's
        width is, so the consumer's only job is placement — as a direct child of the content-area region,
        alongside <code style="\${t.monoSm}">&lt;main&gt;</code>, not nested inside a card, panel, or sidebar, and
        not appended to <code style="\${t.monoSm}">&lt;body&gt;</code> above the content area.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        This isn't automatic — <code style="\${t.monoSm}">width: 100%</code> only ever resolves relative to the
        banner's immediate parent, never the viewport itself. If the parent is the true content-area container
        (already inset from the viewport edges by the page's own nav/margin layout), the banner honors those
        offsets correctly. If the banner is placed directly under <code style="\${t.monoSm}">&lt;body&gt;</code>
        or any other full-bleed wrapper, it stretches edge-to-edge — full raw viewport width, ignoring the nav
        and margins entirely. The component has no way to detect or correct for this; it's placement alone that
        determines which of the two happens.
      </p>

      <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px;">
          <p style="\${t.bodySm} margin: 0 0 0.5rem; opacity: 0.6; font-weight: 600;">✅ Do</p>
          <pre style="\${t.monoSm} background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.3); border-radius: 6px; padding: 0.75rem; margin: 0; overflow-x: auto;"><code>&lt;div class="content-area"&gt;
  &lt;mms-alert-banner&gt;&lt;/mms-alert-banner&gt;
  &lt;main&gt;...&lt;/main&gt;
&lt;/div&gt;</code></pre>
        </div>
        <div style="flex: 1; min-width: 240px;">
          <p style="\${t.bodySm} margin: 0 0 0.5rem; opacity: 0.6; font-weight: 600;">❌ Don't</p>
          <pre style="\${t.monoSm} background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.3); border-radius: 6px; padding: 0.75rem; margin: 0; overflow-x: auto;"><code>&lt;body&gt;
  &lt;mms-alert-banner&gt;&lt;/mms-alert-banner&gt;
  &lt;div class="content-area"&gt;...&lt;/div&gt;
&lt;/body&gt;</code></pre>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- UX Behavior — Dismissal -->
      <h2 style="\${t.h2}">UX Behavior — Dismissal</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Manual dismiss (the close button) is the default and always available. Setting
        <code style="\${t.monoSm}">auto-dismiss</code> opts a banner into <em>also</em> dismissing on a timer —
        <code style="\${t.monoSm}">auto-dismiss-duration</code> controls the delay (default
        <strong>8000ms</strong>). The timer pauses whenever the pointer hovers the banner or keyboard focus
        lands anywhere inside it, and restarts from the full duration once both clear — there's no separate
        pause/resume button; hover, focus, and the always-present close button are the full control surface.
        Both dismissal paths fire the same <code style="\${t.monoSm}">dismiss</code> event, distinguished by
        <code style="\${t.monoSm}">event.detail.reason</code> (<code style="\${t.monoSm}">'user'</code> or
        <code style="\${t.monoSm}">'timeout'</code>) — the component never removes itself from the DOM either
        way; the host page owns that.
      </p>

      <div style="\${d.callout('#F59E0B')}">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Caution:</strong> avoid pairing <code style="\${t.monoSm}">auto-dismiss</code> with
          <code style="\${t.monoSm}">action</code> unless <code style="\${t.monoSm}">auto-dismiss-duration</code>
          gives the user realistic time to read the message and act on the text link before it disappears. A
          banner asking someone to do something needs time to do it — this isn't enforced by the component, so
          it's a per-instance judgment call.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Other considerations -->
      <h2 style="\${t.h2}">Other considerations</h2>
      <ul style="\${t.bodySm} margin: 0; padding-left: 1.5rem; opacity: 0.85; max-width: \${PROSE_MAX};">
        <li style="margin-bottom: 0.75rem;">
          <span style="\${d.callout('#3B82F6').replace('padding: 1rem 1.25rem;', 'padding: 0.0625rem 0.5rem;').replace('margin-bottom: 1.5rem;', '').replace('border-radius: 0 6px 6px 0;', 'border-radius: 3px;').replace('border-left: 3px solid #3B82F6;', 'border: none;')}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Consumer-owned</span>
          Focus management after dismiss is undefined today — where focus lands when a banner disappears while
          focused isn't handled by the component. Candidate for a small future accessibility ticket.
        </li>
        <li style="margin-bottom: 0.75rem;">
          <span style="\${d.callout('#22C55E').replace('padding: 1rem 1.25rem;', 'padding: 0.0625rem 0.5rem;').replace('margin-bottom: 1.5rem;', '').replace('border-radius: 0 6px 6px 0;', 'border-radius: 3px;').replace('border-left: 3px solid #22C55E;', 'border: none;')}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Current behavior</span>
          Clicking the text-link action never dismisses the banner or resets the auto-dismiss timer — action
          and dismissal are independent.
        </li>
        <li style="margin-bottom: 0.75rem;">
          <span style="\${d.callout('#3B82F6').replace('padding: 1rem 1.25rem;', 'padding: 0.0625rem 0.5rem;').replace('margin-bottom: 1.5rem;', '').replace('border-radius: 0 6px 6px 0;', 'border-radius: 3px;').replace('border-left: 3px solid #3B82F6;', 'border: none;')}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Consumer-owned</span>
          Rapid mount/unmount of multiple banners can produce overlapping <code style="\${t.monoSm}">aria-live</code>
          announcements. Stagger banner mounts where possible and keep concurrent count small.
        </li>
        <li style="margin-bottom: 0.75rem;">
          <span style="\${d.callout('#3B82F6').replace('padding: 1rem 1.25rem;', 'padding: 0.0625rem 0.5rem;').replace('margin-bottom: 1.5rem;', '').replace('border-radius: 0 6px 6px 0;', 'border-radius: 3px;').replace('border-left: 3px solid #3B82F6;', 'border: none;')}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Consumer-owned</span>
          Whether a dismissal persists across navigation/reload (e.g. via <code style="\${t.monoSm}">sessionStorage</code>)
          is entirely up to the host page — the component has no memory of prior dismissals.
        </li>
        <li>
          <span style="\${d.callout('#22C55E').replace('padding: 1rem 1.25rem;', 'padding: 0.0625rem 0.5rem;').replace('margin-bottom: 1.5rem;', '').replace('border-radius: 0 6px 6px 0;', 'border-radius: 3px;').replace('border-left: 3px solid #22C55E;', 'border: none;')}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Current behavior</span>
          Stacking priority is most-recent-on-top, not severity-based — an <code style="\${t.monoSm}">error</code>
          banner mounted first will sit below a later <code style="\${t.monoSm}">informational</code> one (see
          Placement above).
        </li>
      </ul>

    </div>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    alertType: 'informational' as AlertBannerType,
    actionPosition: 'below' as AlertBannerActionPosition,
    action: true,
    summary: 'Heads up:',
    message: 'Additional information goes here.',
    actionText: 'Text link',
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
    actionPosition: {
      name: 'Action position',
      control: 'select',
      options: ['below', 'right'],
      description: 'Text-link placement: on its own line below the message, or inline at the end of it',
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
    summary: {
      name: 'Summary',
      control: 'text',
      description: 'Bold lead-in text rendered before the message. Leave empty to omit.',
      table: {
        category: 'Content'
      }
    },
    message: {
      name: 'Message',
      control: 'text',
      description: 'Regular message text',
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
      options: ['default', 'maximus', 'va-gov', 'uss-oh-dvs'],
      description: 'Brand theme (affects typography and link color)',
      table: {
        category: 'Global'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Accepted as a global attribute passthrough — mms-alert-banner has no compact-specific styling yet',
      table: {
        category: 'Global'
      }
    }
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div style="padding: 1.5rem 2rem;">
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
          if (a.actionPosition && a.actionPosition !== 'below') attrs.push(\`action-position="\${a.actionPosition}"\`);
          if (a.action === false) attrs.push('.action=\${false}');
          if (a.summary) attrs.push(\`summary="\${a.summary}"\`);
          if (a.message) attrs.push(\`message="\${a.message}"\`);
          if (a.action !== false && a.actionText) attrs.push(\`action-text="\${a.actionText}"\`);
          if (a.action !== false && a.actionHref) attrs.push(\`action-href="\${a.actionHref}"\`);
          if (a.autoDismiss) attrs.push('auto-dismiss');
          if (a.autoDismiss && a.autoDismissDuration && a.autoDismissDuration !== 8000) attrs.push(\`auto-dismiss-duration="\${a.autoDismissDuration}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-alert-banner\\n  \${attrs.join('\\n  ')}\\n></mms-alert-banner>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none' // Preserve argTypes definition order
    }
  },
  render: (args: {
    alertType: AlertBannerType;
    actionPosition: AlertBannerActionPosition;
    action: boolean;
    summary: string;
    message: string;
    actionText: string;
    actionHref: string;
    autoDismiss: boolean;
    autoDismissDuration: number;
    theme: string;
    density: string;
  }) => {
    return html\`
      <mms-alert-banner
        alert-type=\${args.alertType}
        action-position=\${args.actionPosition}
        ?action=\${args.action}
        summary=\${args.summary || nothing}
        message=\${args.message}
        action-text=\${args.actionText || nothing}
        action-href=\${args.actionHref || nothing}
        ?auto-dismiss=\${args.autoDismiss}
        auto-dismiss-duration=\${args.autoDismissDuration}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
      ></mms-alert-banner>
    \`;
  }
}`,...N.parameters?.docs?.source}}},P=[`Overview`,`LayoutBehavior`,`PlaygroundStory`]}));F();export{M as LayoutBehavior,A as Overview,N as PlaygroundStory,P as __namedExportsOrder,E as default,F as n,T as t};