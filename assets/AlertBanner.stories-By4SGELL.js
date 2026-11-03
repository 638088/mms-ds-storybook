import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-B0BZwaT1.js";import{E as s,S as c,T as l,g as u,h as d,m as f,n as p,r as m,t as h,w as g}from"./mms-icon.component-DFVI3nJi.js";import{a as _,n as v,r as y}from"./iframe-C49srKsk.js";import{n as b,t as x}from"./localize-DGaV1nF3.js";import{t as S}from"./mms-card.component-Ae9XIj4r.js";import{n as C,r as w}from"./wcag-coverage-DNhlI7v1.js";import{n as T,t as E}from"./normalize-alert-type-C-qeRm_W.js";import{a as D,c as O,d as k,i as A,n as j,o as M,r as N,u as P}from"./doc-styles-DkvR_Qyb.js";import{a as F,n as I}from"./a11y-outcome-Baw4sLAQ.js";var L,R,z=e((()=>{o(),s(),u(),d(),E(),h(),_(),b(),m(),L=`informational`,R=class extends i{constructor(...e){super(...e),this.localize=new x(this),this.alertType=`informational`,this.actionPosition=`below`,this.action=!0,this.summary=``,this.message=`Additional information goes here.`,this.actionHref=`#`,this.autoDismiss=!1,this.autoDismissDuration=8e3,this._isHovered=!1,this._isFocused=!1,this._dismissTimer=null,this._handleDismiss=e=>{this._stopDismissTimer(),this.dispatchEvent(new CustomEvent(`dismiss`,{bubbles:!0,composed:!0,detail:{reason:e}}))},this._handleCloseClick=()=>{this._handleDismiss(`user`)},this._handleActionClick=()=>{this.dispatchEvent(new CustomEvent(`action-click`,{bubbles:!0,composed:!0,detail:{href:this.actionHref}}))},this._handleMouseEnter=()=>{this._isHovered=!0,this._stopDismissTimer()},this._handleMouseLeave=()=>{this._isHovered=!1,this._startDismissTimer()},this._handleFocusIn=()=>{this._isFocused=!0,this._stopDismissTimer()},this._handleFocusOut=e=>{let t=e.relatedTarget;t&&(this.shadowRoot?.contains(t)||this.contains(t))||(this._isFocused=!1,this._startDismissTimer())},this._handleVisibilityChange=()=>{document.hidden?this._stopDismissTimer():this._startDismissTimer()}}static{this.styles=[l,f,r`
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
        inset-inline-start: 0;
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
        padding-inline-start: var(--spacing-md2); /* 6px accent (::before) + 14px visible gap to icon */
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
        margin-inline-start: var(--spacing-sm1);
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

      /* Transparent-by-default control: step-3 hover fill, same as the card's
         expand control and side-nav items — not a fade of the whole button. */
      .close-button:hover {
        background: var(--color-surface-hover);
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
        label=${this.actionText??this.localize.term(`textLink`)}
        right-icon="arrow-right"
        underline="hover"
        @click=${this._handleActionClick}
      ></mms-link>
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`status`),document.addEventListener(`visibilitychange`,this._handleVisibilityChange),this._startDismissTimer()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`visibilitychange`,this._handleVisibilityChange),this._stopDismissTimer()}updated(e){super.updated(e),(e.has(`autoDismiss`)||e.has(`autoDismissDuration`))&&this._startDismissTimer()}willUpdate(e){if(!e.has(`alertType`))return;let t=T(this.alertType,L);t!==this.alertType&&(this.alertType=t)}render(){let e=this.actionPosition===`right`;return a`
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
        <button class="close-button" @click=${this._handleCloseClick} aria-label=${this.localize.term(`dismissAlert`)}>
          <mms-icon name="x" size="sm"></mms-icon>
        </button>
      </div>
    `}},p([c({type:String,reflect:!0,attribute:`alert-type`})],R.prototype,`alertType`,void 0),p([c({type:String,reflect:!0,attribute:`action-position`})],R.prototype,`actionPosition`,void 0),p([c({type:Boolean,reflect:!0})],R.prototype,`action`,void 0),p([c({type:String})],R.prototype,`summary`,void 0),p([c({type:String})],R.prototype,`message`,void 0),p([c({type:String,attribute:`action-text`})],R.prototype,`actionText`,void 0),p([c({type:String,attribute:`action-href`})],R.prototype,`actionHref`,void 0),p([c({type:Boolean,reflect:!0,attribute:`auto-dismiss`})],R.prototype,`autoDismiss`,void 0),p([c({type:Number,attribute:`auto-dismiss-duration`})],R.prototype,`autoDismissDuration`,void 0),R=p([g(`mms-alert-banner`)],R)})),B=t({LayoutBehavior:()=>W,Overview:()=>H,PlaygroundStory:()=>G,__namedExportsOrder:()=>K,default:()=>V}),V,H,U,W,G,K,q=e((()=>{o(),y(),z(),C(),I(),S(),O(),V={title:`Feedback/Alert Banner`,tags:[`!autodocs`]},H={name:`Overview`,render:()=>a`
    <div data-theme=${N} data-mode=${M()} style=${j}>

      <!-- Header -->
      <h1 style="${k.h1}">Alert Banner</h1>
      <p style="${k.body} ${D.muted} max-width: ${A}; margin-bottom: ${P.subsection};">
        A full-width, dismissible banner surfacing general status information — not critical or
        blocking — with an optional text-link action. Announced politely to assistive technology,
        not interrupting the user's current task.
      </p>

      <hr style="${D.divider}" />

      <!-- Basic Usage -->
      <h2 style="${k.h2}">Basic usage</h2>
      <p style="${k.bodySm} ${D.muted} max-width: ${A}; margin-bottom: ${P.subsection};">
        Defaults to the <code style="${k.monoSm}">informational</code> type with a below-message text-link action.
      </p>

      <div style="margin-bottom: ${P.subsection};">
        <mms-alert-banner
          summary="Heads up:"
          message="Your session will expire in 15 minutes."
          action-text="Extend session"
        ></mms-alert-banner>
      </div>

      <hr style="${D.divider}" />

      <!-- Alert Types -->
      <h2 style="${k.h2}">Alert types</h2>
      <p style="${k.bodySm} ${D.muted} max-width: ${A}; margin-bottom: ${P.subsection};">
        Four semantic types: <code style="${k.monoSm}">informational</code> (default),
        <code style="${k.monoSm}">success</code>, <code style="${k.monoSm}">caution</code>, and
        <code style="${k.monoSm}">error</code>. Each pairs a distinct icon with its own accent color.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${P.content}; margin-bottom: ${P.subsection};">
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

      <hr style="${D.divider}" />

      <!-- Action Position -->
      <h2 style="${k.h2}">Action position</h2>
      <p style="${k.bodySm} ${D.muted} max-width: ${A}; margin-bottom: ${P.subsection};">
        <code style="${k.monoSm}">action-position="below"</code> (default) places the text link on its
        own line beneath the message. <code style="${k.monoSm}">action-position="right"</code> flows
        it inline at the end of the message text.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${P.content}; margin-bottom: ${P.subsection};">
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

      <hr style="${D.divider}" />

      <!-- Without action -->
      <h2 style="${k.h2}">Without an action</h2>
      <p style="${k.bodySm} ${D.muted} max-width: ${A}; margin-bottom: ${P.subsection};">
        Setting <code style="${k.monoSm}">action</code> to <code style="${k.monoSm}">false</code> hides the text link entirely — for a message that needs no follow-up.
      </p>

      <div style="margin-bottom: ${P.subsection};">
        <mms-alert-banner
          .action=${!1}
          alert-type="success"
          summary="Saved."
          message="All changes have been saved."
        ></mms-alert-banner>
      </div>

      <hr style="${D.divider}" />

      <!-- Dismissal -->
      <h2 style="${k.h2}">Dismissal</h2>
      <p style="${k.bodySm} ${D.muted} max-width: ${A}; margin-bottom: ${P.subsection};">
        The close button fires a <code style="${k.monoSm}">dismiss</code> event — the host page owns
        removal from the DOM (e.g. <code style="${k.monoSm}">@dismiss=\${() => el.remove()}</code>);
        the component does not remove itself. Manual dismiss is the default; setting
        <code style="${k.monoSm}">auto-dismiss</code> opts the banner into also firing
        <code style="${k.monoSm}">dismiss</code> on a timer (<code style="${k.monoSm}">detail.reason</code>
        is <code style="${k.monoSm}">'user'</code> or <code style="${k.monoSm}">'timeout'</code> accordingly) —
        see the <strong>Layout &amp; Behavior</strong> page for the full guidance.
      </p>

      <div style="margin-bottom: ${P.subsection};">
        <mms-alert-banner
          alert-type="caution"
          message="Dismiss this banner with the close button — it fires a 'dismiss' event."
          .action=${!1}
        ></mms-alert-banner>
      </div>

      <hr style="${D.divider}" />

      <!-- Accessibility -->
      <h2 style="${k.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${P.content};">
        <div slot="body-content">
        <p style="${k.bodySm}">
          <strong>Why <code style="${k.monoSm}">role="status"</code>, not <code style="${k.monoSm}">role="alert"</code>?</strong>
          Alert Banner surfaces general status information — including <code style="${k.monoSm}">error</code> type —
          that is not critical or blocking. <code style="${k.monoSm}">role="status"</code>'s implicit
          <code style="${k.monoSm}">aria-live="polite"</code> announces the banner without interrupting the
          user's current task, matching that framing. Use a dedicated blocking-error pattern (e.g. inline
          field validation, a modal) for messages that must halt the user's flow.
        </p>
        </div>
      </mms-card>

      <h3 style="${k.h3}">WCAG 2.2 AA compliance</h3>
      ${F(w[`alert-banner`].rows)}

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${P.content};">
        <div slot="body-content">
        <p style="${k.bodySm} margin-bottom: ${P.content};">
          <strong>Why doesn't 1.4.11 Non-Text Contrast apply to <code style="${k.monoSm}">informational</code>'s border?</strong>
        </p>
        <p style="${k.bodySm} margin-bottom: ${P.content};">
          1.4.11 only applies to graphical objects <em>required to identify or understand content</em> — it is
          not a blanket 3:1 rule for every border. The <code style="${k.monoSm}">informational</code> alert
          type is already conveyed by the status icon (with its own <code style="${k.monoSm}">aria-label</code>)
          and the bold summary text, so this border isn't required to identify anything — it's decorative
          reinforcement. That makes the criterion inapplicable to it, not a case of meeting it at a low ratio.
        </p>
        <p style="${k.bodySm} margin-bottom: ${P.content};">
          For reference, <code style="${k.monoSm}">informational</code> is the one alert type without a
          dedicated structural utility hue — it borrows <code style="${k.monoSm}">--color-border-default</code>
          (<code style="${k.monoSm}">--color-neutral-6</code>, <code style="${k.monoSm}">#b8b8b8</code>) against
          the banner's <code style="${k.monoSm}">--color-surface-raised</code>
          (<code style="${k.monoSm}">#fcfcfc</code>) background — a computed ratio of ~1.77:1. That number is
          background context for why the exemption matters here, not a contrast figure this component needs to
          clear.
        </p>
        <p style="${k.bodySm} margin-bottom: ${P.content};">
          <code style="${k.monoSm}">error</code>, <code style="${k.monoSm}">success</code>, and
          <code style="${k.monoSm}">caution</code> happen to clear 3:1 regardless — each reuses the same
          dedicated emphasis hex chosen to satisfy 4.5:1 text contrast (1.4.3) for that type, which incidentally
          clears the lower 3:1 non-text bar too. So all four types are compliant, but for two different reasons:
          the other three by meeting the ratio, <code style="${k.monoSm}">informational</code> by the criterion
          not applying.
        </p>
        <p style="${k.bodySm}">
          <strong>Caveat:</strong> this exemption holds only as long as the status icon and its label continue
          to accompany the <code style="${k.monoSm}">informational</code> variant. If a future revision ever
          drops the icon (or its label) as the sole identifier of alert type, this border would become a
          required graphical object and 1.4.11 would apply to it directly.
        </p>
        </div>
      </mms-card>

      <h3 style="${k.h3}">Screen reader behavior</h3>
      <ul style="${k.bodySm} margin-bottom: ${P.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${P.label};"><strong>On render:</strong> Announces politely (does not interrupt) via <code style="${k.monoSm}">role="status"</code> — summary, message, and action link text are read as content</li>
        <li style="margin-bottom: ${P.label};"><strong>Status icon:</strong> Announced via its <code style="${k.monoSm}">aria-label</code> (e.g. "error alert"), not left silent as decorative</li>
        <li style="margin-bottom: ${P.label};"><strong>Text link:</strong> Announced as a link with its label; focusable independently of the banner container</li>
        <li><strong>Close button:</strong> Announced as "Dismiss alert, button"</li>
      </ul>

      <h3 style="${k.h3}">Keyboard navigation</h3>
      <table style="${D.table}">
        <thead>
          <tr>
            <th style="${D.th} width: 140px;">Key</th>
            <th style="${D.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${D.td}"><kbd style="${D.kbd}">Tab</kbd></td>
            <td style="${D.td}">Move focus to the text-link action, then the close button (in DOM order)</td>
          </tr>
          <tr>
            <td style="${D.td}"><kbd style="${D.kbd}">Enter</kbd> / <kbd style="${D.kbd}">Space</kbd></td>
            <td style="${D.td}">Activates the focused text link or close button</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},U={frame:`border: var(--border-width-sm) dashed var(--color-border-default); border-radius: var(--radius-md); padding: var(--spacing-lg2) var(--spacing-lg1) var(--spacing-md1); position: relative; margin-bottom: ${P.content};`,frameLabel:`${k.body} ${D.muted} position: absolute; top: calc(-1 * var(--spacing-sm2)); left: var(--spacing-md1); background: var(--color-surface-page); padding: 0 var(--spacing-sm1); text-transform: uppercase;`,content:`border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-sm); padding: var(--spacing-md1); background: var(--color-surface-default);`,header:`${k.body} ${D.muted} border-radius: var(--radius-xs); background: var(--color-surface-sunken); display: flex; align-items: center; padding: var(--spacing-sm1) var(--spacing-sm2);`,gap:`${k.mono} ${D.muted} display: flex; align-items: center; justify-content: center; gap: var(--spacing-xs2); padding: var(--spacing-xs2) 0;`,bannerEmphasis:`${k.body} border-radius: var(--radius-sm); border: var(--border-width-xs) solid var(--color-utility-informational-stroke); background: var(--color-utility-informational-surface); padding: var(--spacing-sm2) var(--spacing-md1);`,bannerMuted:`${k.body} ${D.muted} border-radius: var(--radius-sm); border: var(--border-width-xs) dashed var(--color-border-default); background: var(--color-surface-sunken); padding: var(--spacing-sm2) var(--spacing-md1);`,widthRow:`margin: ${P.content} var(--spacing-lg2) 0; height: var(--spacing-md2); border-top: var(--border-width-xs) solid var(--color-border-default); border-left: var(--border-width-xs) solid var(--color-border-default); border-right: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-xs) var(--radius-xs) 0 0; display: flex; align-items: flex-end; justify-content: center;`,widthLabel:`${k.mono} ${D.muted} transform: translateY(50%); background: var(--color-surface-page); padding: 0 var(--spacing-sm1);`,caption:`${k.caption} ${D.muted} margin-top: ${P.label};`},W={name:`Layout & Behavior`,render:()=>a`
    <div data-theme=${N} data-mode=${M()} style=${j}>

      <!-- Intro -->
      <h1 style="${k.h1}">Layout &amp; Behavior</h1>
      <p style="${k.body} ${D.muted} max-width: ${A}; margin-bottom: ${P.subsection};">
        Alert Banner is a page-level element, not an embeddable one — it isn't meant to be nested inside cards,
        panels, sidebars, or other narrow containers. It has no built-in position, stacking, or z-index; it
        renders as a direct child of the page's main content area and expects the host page to position it
        (typically pinned below the header). Because of that placement,
        <code style="${k.monoSm}">width: 100%</code> resolves to the content area's width — the viewport minus
        layout offsets — never the raw viewport, and never some narrower container it happens to be dropped
        into. Dismissal is manual by default; auto-dismiss is available as an opt-in per-instance choice. This
        page covers the placement conventions, the responsiveness rule, and the full dismissal behavior — none
        of which can be defined or enforced at the single-component level.
      </p>

      <hr style="${D.divider}" />

      <!-- Placement -->
      <h2 style="${k.h2}">Placement</h2>
      <p style="${k.bodySm} ${D.muted} max-width: ${A}; margin-bottom: ${P.content};">
        Alert Banner is placed <strong>sticky, below the page header</strong>,
        so it stays visible as the user scrolls without covering primary navigation. This is a
        <strong>consumer-implemented layout responsibility</strong> — <code style="${k.monoSm}">:host</code> is
        <code style="${k.monoSm}">position: relative</code> with no sticky/z-index baked in, because the correct
        top offset depends on each host page's own header height, which this component has no way to know.
      </p>
      <p style="${k.bodySm} ${D.muted} max-width: ${A}; margin-bottom: ${P.content};">
        When more than one banner is present, stack them <strong>most-recent-on-top</strong> (newest nearest the
        header), each separated by a small gap: <strong>4px at the Xs breakpoint, 8px from Sm through Xl</strong>.
        Below the Xs breakpoint, prefer <code style="${k.monoSm}">action-position="below"</code> as a rule of
        thumb — inline (<code style="${k.monoSm}">"right"</code>) actions are more likely to wrap awkwardly at
        that width. This is guidance for choosing the prop per breakpoint, not an automatic switch the component
        makes on its own.
      </p>

      <div style="display: flex; gap: ${P.content}; margin-bottom: ${P.subsection}; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px; display: flex; flex-direction: column;">
          <h3 style="${k.h3} margin-bottom: ${P.label};">✅ Do</h3>
          <p style="${k.bodySm} ${D.panel} flex: 1; border: var(--border-width-xs) solid var(--color-utility-success-stroke);">
            Position the banner (or a wrapping container) as <code style="${k.monoSm}">sticky</code> with
            <code style="${k.monoSm}">top</code> set to the host page's actual header height. Stack multiple
            banners with newest on top and the gap rule above.
          </p>
        </div>
        <div style="flex: 1; min-width: 240px; display: flex; flex-direction: column;">
          <h3 style="${k.h3} margin-bottom: ${P.label};">❌ Don't</h3>
          <p style="${k.bodySm} ${D.panel} flex: 1; border: var(--border-width-xs) solid var(--color-utility-error-stroke);">
            Don't append banners directly to <code style="${k.monoSm}">&lt;body&gt;</code> with no offset — they'll
            either cover the header or scroll away with the content, defeating the "stays visible" purpose.
          </p>
        </div>
      </div>

      <div style="${U.frame}">
        <span style="${U.frameLabel}">Viewport</span>
        <div style="${U.content}">
          <div style="${U.header}">Header</div>
          <div style="${U.gap}">↕ 4px (Xs) · 8px (Sm–Xl)</div>
          <div style="${U.bannerEmphasis}"><strong>Banner #1</strong> — newest, nearest the header</div>
          <div style="${U.gap}">↕ 4px (Xs) · 8px (Sm–Xl)</div>
          <div style="${U.bannerMuted}">Banner #2 — older, pushed down</div>
        </div>
        <div style="${U.widthRow}"><span style="${U.widthLabel}">content-area width = viewport − layout offsets</span></div>
      </div>
      <p style="${U.caption} margin-bottom: ${P.subsection};">
        Both banners are sticky — pinned below the header as the page scrolls. Width matches the content area,
        not the raw viewport.
      </p>

      <hr style="${D.divider}" />

      <!-- Responsiveness -->
      <h2 style="${k.h2}">Responsiveness</h2>
      <p style="${k.bodySm} ${D.muted} max-width: ${A}; margin-bottom: ${P.content};">
        Alert Banner has no independent container of its own — it's a page-level element, placed directly within
        <strong>the content area</strong>: the full viewport minus whatever layout offsets the host page applies
        (side nav, page margins, grid gutters), not the raw viewport width. The component already implements
        this correctly: <code style="${k.monoSm}">:host { width: 100%; }</code> resolves to whatever its parent's
        width is, so the consumer's only job is placement — as a direct child of the content-area region,
        alongside <code style="${k.monoSm}">&lt;main&gt;</code>, not nested inside a card, panel, or sidebar, and
        not appended to <code style="${k.monoSm}">&lt;body&gt;</code> above the content area.
      </p>
      <p style="${k.bodySm} ${D.muted} max-width: ${A}; margin-bottom: ${P.content};">
        This isn't automatic — <code style="${k.monoSm}">width: 100%</code> only ever resolves relative to the
        banner's immediate parent, never the viewport itself. If the parent is the true content-area container
        (already inset from the viewport edges by the page's own nav/margin layout), the banner honors those
        offsets correctly. If the banner is placed directly under <code style="${k.monoSm}">&lt;body&gt;</code>
        or any other full-bleed wrapper, it stretches edge-to-edge — full raw viewport width, ignoring the nav
        and margins entirely. The component has no way to detect or correct for this; it's placement alone that
        determines which of the two happens.
      </p>

      <div style="display: flex; gap: ${P.content}; margin-bottom: ${P.subsection}; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px; display: flex; flex-direction: column;">
          <h3 style="${k.h3} margin-bottom: ${P.label};">✅ Do</h3>
          <pre style="${D.pre} flex: 1; margin: 0; border: var(--border-width-xs) solid var(--color-utility-success-stroke);"><code>&lt;div class="content-area"&gt;
  &lt;mms-alert-banner&gt;&lt;/mms-alert-banner&gt;
  &lt;main&gt;...&lt;/main&gt;
&lt;/div&gt;</code></pre>
        </div>
        <div style="flex: 1; min-width: 240px; display: flex; flex-direction: column;">
          <h3 style="${k.h3} margin-bottom: ${P.label};">❌ Don't</h3>
          <pre style="${D.pre} flex: 1; margin: 0; border: var(--border-width-xs) solid var(--color-utility-error-stroke);"><code>&lt;body&gt;
  &lt;mms-alert-banner&gt;&lt;/mms-alert-banner&gt;
  &lt;div class="content-area"&gt;...&lt;/div&gt;
&lt;/body&gt;</code></pre>
        </div>
      </div>

      <hr style="${D.divider}" />

      <!-- UX behavior — dismissal -->
      <h2 style="${k.h2}">UX behavior — dismissal</h2>
      <p style="${k.bodySm} ${D.muted} max-width: ${A}; margin-bottom: ${P.content};">
        Manual dismiss (the close button) is the default and always available. Setting
        <code style="${k.monoSm}">auto-dismiss</code> opts a banner into <em>also</em> dismissing on a timer —
        <code style="${k.monoSm}">auto-dismiss-duration</code> controls the delay (default
        <strong>8000ms</strong>). The timer pauses whenever the pointer hovers the banner or keyboard focus
        lands anywhere inside it, and restarts from the full duration once both clear — there's no separate
        pause/resume button; hover, focus, and the always-present close button are the full control surface.
        Both dismissal paths fire the same <code style="${k.monoSm}">dismiss</code> event, distinguished by
        <code style="${k.monoSm}">event.detail.reason</code> (<code style="${k.monoSm}">'user'</code> or
        <code style="${k.monoSm}">'timeout'</code>) — the component never removes itself from the DOM either
        way; the host page owns that.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${P.subsection};">
        <div slot="body-content">
        <p style="${k.bodySm}">
          <strong>Caution:</strong> avoid pairing <code style="${k.monoSm}">auto-dismiss</code> with
          <code style="${k.monoSm}">action</code> unless <code style="${k.monoSm}">auto-dismiss-duration</code>
          gives the user realistic time to read the message and act on the text link before it disappears. A
          banner asking someone to do something needs time to do it — this isn't enforced by the component, so
          it's a per-instance judgment call.
        </p>
        </div>
      </mms-card>

      <hr style="${D.divider}" />

      <!-- Other considerations -->
      <h2 style="${k.h2}">Other considerations</h2>
      <ul style="${k.bodySm} padding-left: var(--spacing-lg1); max-width: ${A};">
        <li style="margin-bottom: ${P.content};">
          <strong>Consumer-owned.</strong> Focus management after dismiss is undefined today — where focus lands when a banner disappears while
          focused isn't handled by the component. Candidate for a small future accessibility ticket.
        </li>
        <li style="margin-bottom: ${P.content};">
          <strong>Current behavior.</strong> Clicking the text-link action never dismisses the banner or resets the auto-dismiss timer — action
          and dismissal are independent.
        </li>
        <li style="margin-bottom: ${P.content};">
          <strong>Consumer-owned.</strong> Rapid mount/unmount of multiple banners can produce overlapping <code style="${k.monoSm}">aria-live</code>
          announcements. Stagger banner mounts where possible and keep concurrent count small.
        </li>
        <li style="margin-bottom: ${P.content};">
          <strong>Consumer-owned.</strong> Whether a dismissal persists across navigation/reload (e.g. via <code style="${k.monoSm}">sessionStorage</code>)
          is entirely up to the host page — the component has no memory of prior dismissals.
        </li>
        <li>
          <strong>Current behavior.</strong> Stacking priority is most-recent-on-top, not severity-based — an <code style="${k.monoSm}">error</code>
          banner mounted first will sit below a later <code style="${k.monoSm}">informational</code> one (see
          Placement above).
        </li>
      </ul>

    </div>
  `},G={name:`Playground`,tags:[`!dev`],args:{alertType:`informational`,actionPosition:`below`,action:!0,summary:`Heads up:`,message:`Additional information goes here.`,actionText:`Text link`,actionHref:`#`,autoDismiss:!1,autoDismissDuration:8e3,theme:`maximus`,density:`default`},argTypes:{alertType:{name:`Alert type`,control:`select`,options:[`informational`,`error`,`success`,`caution`],description:`Semantic type — pairs a status icon and accent color`,table:{category:`Visual`}},actionPosition:{name:`Action position`,control:`select`,options:[`below`,`right`],description:`Text-link placement: on its own line below the message, or inline at the end of it`,table:{category:`Visual`}},action:{name:`Show action`,control:`boolean`,description:`Whether to render the text-link action`,table:{category:`Visual`}},summary:{name:`Summary`,control:`text`,description:`Bold lead-in text rendered before the message. Leave empty to omit.`,table:{category:`Content`}},message:{name:`Message`,control:`text`,description:`Regular message text`,table:{category:`Content`}},actionText:{name:`Action text`,control:`text`,description:`Text-link label`,table:{category:`Content`}},actionHref:{name:`Action href`,control:`text`,description:`Text-link URL`,table:{category:`Content`}},autoDismiss:{name:`Auto dismiss`,control:`boolean`,description:`Opt-in: dismiss automatically after the duration below. Off by default. Pauses on hover or keyboard focus; the close button always remains available as a stop mechanism. Not demoed live on this page (no dismiss/close interaction context to observe it against) — but available for use in your project.`,table:{category:`Behavior`}},autoDismissDuration:{name:`Auto dismiss duration (ms)`,control:`number`,description:`Delay before auto-dismiss fires, when auto dismiss is on. Default 8000. Not demoed live on this page — available for use in your project.`,table:{category:`Behavior`}},theme:{name:`Theme`,control:`select`,options:v,description:`Brand theme (affects typography and link color)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-alert-banner has no compact-specific styling yet`,table:{category:`Global`}}},decorators:[e=>a`
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
    `},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Alert Banner</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A full-width, dismissible banner surfacing general status information — not critical or
        blocking — with an optional text-link action. Announced politely to assistive technology,
        not interrupting the user's current task.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Defaults to the <code style="\${t.monoSm}">informational</code> type with a below-message text-link action.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-alert-banner
          summary="Heads up:"
          message="Your session will expire in 15 minutes."
          action-text="Extend session"
        ></mms-alert-banner>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Alert Types -->
      <h2 style="\${t.h2}">Alert types</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Four semantic types: <code style="\${t.monoSm}">informational</code> (default),
        <code style="\${t.monoSm}">success</code>, <code style="\${t.monoSm}">caution</code>, and
        <code style="\${t.monoSm}">error</code>. Each pairs a distinct icon with its own accent color.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection};">
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

      <hr style="\${doc.divider}" />

      <!-- Action Position -->
      <h2 style="\${t.h2}">Action position</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">action-position="below"</code> (default) places the text link on its
        own line beneath the message. <code style="\${t.monoSm}">action-position="right"</code> flows
        it inline at the end of the message text.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection};">
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

      <hr style="\${doc.divider}" />

      <!-- Without action -->
      <h2 style="\${t.h2}">Without an action</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Setting <code style="\${t.monoSm}">action</code> to <code style="\${t.monoSm}">false</code> hides the text link entirely — for a message that needs no follow-up.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-alert-banner
          .action=\${false}
          alert-type="success"
          summary="Saved."
          message="All changes have been saved."
        ></mms-alert-banner>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Dismissal -->
      <h2 style="\${t.h2}">Dismissal</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The close button fires a <code style="\${t.monoSm}">dismiss</code> event — the host page owns
        removal from the DOM (e.g. <code style="\${t.monoSm}">@dismiss=\\\${() => el.remove()}</code>);
        the component does not remove itself. Manual dismiss is the default; setting
        <code style="\${t.monoSm}">auto-dismiss</code> opts the banner into also firing
        <code style="\${t.monoSm}">dismiss</code> on a timer (<code style="\${t.monoSm}">detail.reason</code>
        is <code style="\${t.monoSm}">'user'</code> or <code style="\${t.monoSm}">'timeout'</code> accordingly) —
        see the <strong>Layout &amp; Behavior</strong> page for the full guidance.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-alert-banner
          alert-type="caution"
          message="Dismiss this banner with the close button — it fires a 'dismiss' event."
          .action=\${false}
        ></mms-alert-banner>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
        <p style="\${t.bodySm}">
          <strong>Why <code style="\${t.monoSm}">role="status"</code>, not <code style="\${t.monoSm}">role="alert"</code>?</strong>
          Alert Banner surfaces general status information — including <code style="\${t.monoSm}">error</code> type —
          that is not critical or blocking. <code style="\${t.monoSm}">role="status"</code>'s implicit
          <code style="\${t.monoSm}">aria-live="polite"</code> announces the banner without interrupting the
          user's current task, matching that framing. Use a dedicated blocking-error pattern (e.g. inline
          field validation, a modal) for messages that must halt the user's flow.
        </p>
        </div>
      </mms-card>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['alert-banner'].rows)}

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
        <p style="\${t.bodySm} margin-bottom: \${space.content};">
          <strong>Why doesn't 1.4.11 Non-Text Contrast apply to <code style="\${t.monoSm}">informational</code>'s border?</strong>
        </p>
        <p style="\${t.bodySm} margin-bottom: \${space.content};">
          1.4.11 only applies to graphical objects <em>required to identify or understand content</em> — it is
          not a blanket 3:1 rule for every border. The <code style="\${t.monoSm}">informational</code> alert
          type is already conveyed by the status icon (with its own <code style="\${t.monoSm}">aria-label</code>)
          and the bold summary text, so this border isn't required to identify anything — it's decorative
          reinforcement. That makes the criterion inapplicable to it, not a case of meeting it at a low ratio.
        </p>
        <p style="\${t.bodySm} margin-bottom: \${space.content};">
          For reference, <code style="\${t.monoSm}">informational</code> is the one alert type without a
          dedicated structural utility hue — it borrows <code style="\${t.monoSm}">--color-border-default</code>
          (<code style="\${t.monoSm}">--color-neutral-6</code>, <code style="\${t.monoSm}">#b8b8b8</code>) against
          the banner's <code style="\${t.monoSm}">--color-surface-raised</code>
          (<code style="\${t.monoSm}">#fcfcfc</code>) background — a computed ratio of ~1.77:1. That number is
          background context for why the exemption matters here, not a contrast figure this component needs to
          clear.
        </p>
        <p style="\${t.bodySm} margin-bottom: \${space.content};">
          <code style="\${t.monoSm}">error</code>, <code style="\${t.monoSm}">success</code>, and
          <code style="\${t.monoSm}">caution</code> happen to clear 3:1 regardless — each reuses the same
          dedicated emphasis hex chosen to satisfy 4.5:1 text contrast (1.4.3) for that type, which incidentally
          clears the lower 3:1 non-text bar too. So all four types are compliant, but for two different reasons:
          the other three by meeting the ratio, <code style="\${t.monoSm}">informational</code> by the criterion
          not applying.
        </p>
        <p style="\${t.bodySm}">
          <strong>Caveat:</strong> this exemption holds only as long as the status icon and its label continue
          to accompany the <code style="\${t.monoSm}">informational</code> variant. If a future revision ever
          drops the icon (or its label) as the sole identifier of alert type, this border would become a
          required graphical object and 1.4.11 would apply to it directly.
        </p>
        </div>
      </mms-card>

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} margin-bottom: \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>On render:</strong> Announces politely (does not interrupt) via <code style="\${t.monoSm}">role="status"</code> — summary, message, and action link text are read as content</li>
        <li style="margin-bottom: \${space.label};"><strong>Status icon:</strong> Announced via its <code style="\${t.monoSm}">aria-label</code> (e.g. "error alert"), not left silent as decorative</li>
        <li style="margin-bottom: \${space.label};"><strong>Text link:</strong> Announced as a link with its label; focusable independently of the banner container</li>
        <li><strong>Close button:</strong> Announced as "Dismiss alert, button"</li>
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
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Layout & Behavior',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Intro -->
      <h1 style="\${t.h1}">Layout &amp; Behavior</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
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

      <hr style="\${doc.divider}" />

      <!-- Placement -->
      <h2 style="\${t.h2}">Placement</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Alert Banner is placed <strong>sticky, below the page header</strong>,
        so it stays visible as the user scrolls without covering primary navigation. This is a
        <strong>consumer-implemented layout responsibility</strong> — <code style="\${t.monoSm}">:host</code> is
        <code style="\${t.monoSm}">position: relative</code> with no sticky/z-index baked in, because the correct
        top offset depends on each host page's own header height, which this component has no way to know.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        When more than one banner is present, stack them <strong>most-recent-on-top</strong> (newest nearest the
        header), each separated by a small gap: <strong>4px at the Xs breakpoint, 8px from Sm through Xl</strong>.
        Below the Xs breakpoint, prefer <code style="\${t.monoSm}">action-position="below"</code> as a rule of
        thumb — inline (<code style="\${t.monoSm}">"right"</code>) actions are more likely to wrap awkwardly at
        that width. This is guidance for choosing the prop per breakpoint, not an automatic switch the component
        makes on its own.
      </p>

      <div style="display: flex; gap: \${space.content}; margin-bottom: \${space.subsection}; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px; display: flex; flex-direction: column;">
          <h3 style="\${t.h3} margin-bottom: \${space.label};">✅ Do</h3>
          <p style="\${t.bodySm} \${doc.panel} flex: 1; border: var(--border-width-xs) solid var(--color-utility-success-stroke);">
            Position the banner (or a wrapping container) as <code style="\${t.monoSm}">sticky</code> with
            <code style="\${t.monoSm}">top</code> set to the host page's actual header height. Stack multiple
            banners with newest on top and the gap rule above.
          </p>
        </div>
        <div style="flex: 1; min-width: 240px; display: flex; flex-direction: column;">
          <h3 style="\${t.h3} margin-bottom: \${space.label};">❌ Don't</h3>
          <p style="\${t.bodySm} \${doc.panel} flex: 1; border: var(--border-width-xs) solid var(--color-utility-error-stroke);">
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
      <p style="\${d.caption} margin-bottom: \${space.subsection};">
        Both banners are sticky — pinned below the header as the page scrolls. Width matches the content area,
        not the raw viewport.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Responsiveness -->
      <h2 style="\${t.h2}">Responsiveness</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Alert Banner has no independent container of its own — it's a page-level element, placed directly within
        <strong>the content area</strong>: the full viewport minus whatever layout offsets the host page applies
        (side nav, page margins, grid gutters), not the raw viewport width. The component already implements
        this correctly: <code style="\${t.monoSm}">:host { width: 100%; }</code> resolves to whatever its parent's
        width is, so the consumer's only job is placement — as a direct child of the content-area region,
        alongside <code style="\${t.monoSm}">&lt;main&gt;</code>, not nested inside a card, panel, or sidebar, and
        not appended to <code style="\${t.monoSm}">&lt;body&gt;</code> above the content area.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        This isn't automatic — <code style="\${t.monoSm}">width: 100%</code> only ever resolves relative to the
        banner's immediate parent, never the viewport itself. If the parent is the true content-area container
        (already inset from the viewport edges by the page's own nav/margin layout), the banner honors those
        offsets correctly. If the banner is placed directly under <code style="\${t.monoSm}">&lt;body&gt;</code>
        or any other full-bleed wrapper, it stretches edge-to-edge — full raw viewport width, ignoring the nav
        and margins entirely. The component has no way to detect or correct for this; it's placement alone that
        determines which of the two happens.
      </p>

      <div style="display: flex; gap: \${space.content}; margin-bottom: \${space.subsection}; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px; display: flex; flex-direction: column;">
          <h3 style="\${t.h3} margin-bottom: \${space.label};">✅ Do</h3>
          <pre style="\${doc.pre} flex: 1; margin: 0; border: var(--border-width-xs) solid var(--color-utility-success-stroke);"><code>&lt;div class="content-area"&gt;
  &lt;mms-alert-banner&gt;&lt;/mms-alert-banner&gt;
  &lt;main&gt;...&lt;/main&gt;
&lt;/div&gt;</code></pre>
        </div>
        <div style="flex: 1; min-width: 240px; display: flex; flex-direction: column;">
          <h3 style="\${t.h3} margin-bottom: \${space.label};">❌ Don't</h3>
          <pre style="\${doc.pre} flex: 1; margin: 0; border: var(--border-width-xs) solid var(--color-utility-error-stroke);"><code>&lt;body&gt;
  &lt;mms-alert-banner&gt;&lt;/mms-alert-banner&gt;
  &lt;div class="content-area"&gt;...&lt;/div&gt;
&lt;/body&gt;</code></pre>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- UX behavior — dismissal -->
      <h2 style="\${t.h2}">UX behavior — dismissal</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
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

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm}">
          <strong>Caution:</strong> avoid pairing <code style="\${t.monoSm}">auto-dismiss</code> with
          <code style="\${t.monoSm}">action</code> unless <code style="\${t.monoSm}">auto-dismiss-duration</code>
          gives the user realistic time to read the message and act on the text link before it disappears. A
          banner asking someone to do something needs time to do it — this isn't enforced by the component, so
          it's a per-instance judgment call.
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Other considerations -->
      <h2 style="\${t.h2}">Other considerations</h2>
      <ul style="\${t.bodySm} padding-left: var(--spacing-lg1); max-width: \${PROSE_MAX};">
        <li style="margin-bottom: \${space.content};">
          <strong>Consumer-owned.</strong> Focus management after dismiss is undefined today — where focus lands when a banner disappears while
          focused isn't handled by the component. Candidate for a small future accessibility ticket.
        </li>
        <li style="margin-bottom: \${space.content};">
          <strong>Current behavior.</strong> Clicking the text-link action never dismisses the banner or resets the auto-dismiss timer — action
          and dismissal are independent.
        </li>
        <li style="margin-bottom: \${space.content};">
          <strong>Consumer-owned.</strong> Rapid mount/unmount of multiple banners can produce overlapping <code style="\${t.monoSm}">aria-live</code>
          announcements. Stagger banner mounts where possible and keep concurrent count small.
        </li>
        <li style="margin-bottom: \${space.content};">
          <strong>Consumer-owned.</strong> Whether a dismissal persists across navigation/reload (e.g. via <code style="\${t.monoSm}">sessionStorage</code>)
          is entirely up to the host page — the component has no memory of prior dismissals.
        </li>
        <li>
          <strong>Current behavior.</strong> Stacking priority is most-recent-on-top, not severity-based — an <code style="\${t.monoSm}">error</code>
          banner mounted first will sit below a later <code style="\${t.monoSm}">informational</code> one (see
          Placement above).
        </li>
      </ul>

    </div>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
      options: BRAND_ORDER,
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
}`,...G.parameters?.docs?.source}}},K=[`Overview`,`LayoutBehavior`,`PlaygroundStory`]}));q();export{W as LayoutBehavior,H as Overview,G as PlaygroundStory,K as __namedExportsOrder,V as default,q as n,B as t};