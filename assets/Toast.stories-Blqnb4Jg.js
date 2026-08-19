import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{a as s,f as c,m as l,n as u,o as d,r as f,t as p}from"./decorate-BdwtT8fT.js";import{t as m}from"./mms-icon.component-B0xp-9Qj.js";import{n as h,t as g}from"./iframe-DuNKalfB.js";import{a as _,o as v,r as y,t as b}from"./a11y-outcome-DcpqwzN2.js";import{i as x,n as S,t as C}from"./ref-dfzCbf-C.js";function w(){let e=0;for(let t=k.length-1;t>=0;t--){let n=k[t];n.style.setProperty(`--_stack-offset`,`${e}px`),e+=n.getBoundingClientRect().height+D}}function T(e){k.push(e),A??=new ResizeObserver(()=>w()),A.observe(e),k.length>O&&k[0].dispatchEvent(new CustomEvent(`dismiss`,{bubbles:!0,composed:!0,detail:{reason:`stack-limit`}})),w()}function E(e){let t=k.indexOf(e);t!==-1&&k.splice(t,1),A?.unobserve(e),e.style.removeProperty(`--_stack-offset`),w()}var D,O,k,A,j=e((()=>{D=12,O=3,k=[],A=null})),M,N=e((()=>{o(),d(),s(),j(),m(),g(),u(),M=class extends i{constructor(...e){super(...e),this.alertType=`informational`,this.leftIcon=!0,this.closeIcon=!0,this.action=!1,this.message=`Informational message.`,this.actionText=`Action`,this.actionHref=`#`,this.autoDismiss=!1,this.autoDismissDuration=8e3,this._isHovered=!1,this._isFocused=!1,this._dismissTimer=null,this._handleDismiss=e=>{this._stopDismissTimer(),this.dispatchEvent(new CustomEvent(`dismiss`,{bubbles:!0,composed:!0,detail:{reason:e}}))},this._handleCloseClick=()=>{this._handleDismiss(`user`)},this._handleActionClick=()=>{this.dispatchEvent(new CustomEvent(`action-click`,{bubbles:!0,composed:!0,detail:{href:this.actionHref}}))},this._handleMouseEnter=()=>{this._isHovered=!0,this._stopDismissTimer()},this._handleMouseLeave=()=>{this._isHovered=!1,this._startDismissTimer()},this._handleFocusIn=()=>{this._isFocused=!0,this._stopDismissTimer()},this._handleFocusOut=e=>{let t=e.relatedTarget;t&&(this.shadowRoot?.contains(t)||this.contains(t))||(this._isFocused=!1,this._startDismissTimer())},this._handleVisibilityChange=()=>{document.hidden?this._stopDismissTimer():this._startDismissTimer()}}static{this.styles=[f,r`
      /* ═══════════════════════════════════════════════════════════════════════
         HOST — Default (informational) fill/stroke/text colors
         Marina's ds-toast fills the whole surface with the type color and
         pairs it with a fixed on-color text token (--global-surface-onsurface-primary,
         never mode-relative). mms mirrors that literally here via
         --color-text-on-muted (fixed near-black, see tokens-semantic.css) and
         the new --color-utility-{error,success,caution}-stroke tokens (fixed
         border — the existing -emphasis token is swapped to -muted under
         [data-mode="dark"] for an unrelated use case and would collapse the
         border into the fill color if reused here). Informational keeps the
         existing mode-aware neutral surface/text pairing — it was never part
         of this pattern and neutral tokens already swap correctly per mode.
         ═══════════════════════════════════════════════════════════════════════ */
      /* ═══════════════════════════════════════════════════════════════════════
         PLACEMENT — the component owns its own viewport positioning and
         stacking; no wrapper/manager element required. Mirrors mms-modal's
         existing :host([open]) { position: fixed } precedent (see
         mms-modal.component.ts) — self-positioning is the established mms
         pattern for viewport-level components, not a new shape introduced
         here.

         --_stack-offset is written directly onto each host element by
         src/utils/toast-stack.ts, which tracks every connected mms-toast to
         compute a translateY offset so multiple toasts stack with a 12px gap
         instead of overlapping (newest toast at offset 0 / closest to the
         bottom edge, per Marina's documented "most recent toast displays on
         top"). z-index: 1100 sits deliberately above mms-modal's 1000 — a
         toast is a system-level message that should reach the user
         regardless of what dialog is open, and it never competes for the
         modal's focus trap since aria-live announces without taking focus.

         ENTRANCE + REFLOW MOTION — a single transition: transform (plus
         opacity) on :host drives both: every toast starts in the
         [data-entering] state (translated further down + invisible) and
         transitions to its resting, --_stack-offset-driven position on
         connect — uniformly, whether it's the only toast or joining an
         existing stack. That same transition then also animates any later
         change to --_stack-offset when a sibling toast connects/disconnects
         and the stack reflows — no separate reflow mechanism needed, it's
         the same property transitioning either way. [data-entering] is
         removed via a double rAF in connectedCallback (see below) so the
         browser paints the "entering" position at least once before the
         transition has something to animate away from.
         ═══════════════════════════════════════════════════════════════════════ */
      :host {
        --_stroke: var(--color-utility-informational-stroke);
        --_text: var(--color-text-default);
        display: flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
        position: fixed;
        bottom: 24px;
        left: 50%;
        margin-left: -280px;
        width: 560px;
        transform: translateY(calc(var(--_stack-offset, 0px) * -1));
        opacity: 1;
        transition:
          transform var(--motion-duration-slow) var(--motion-easing-standard),
          opacity var(--motion-duration-slow) var(--motion-easing-linear);
        z-index: 1100;
        padding: var(--spacing-sm2);
        border: 1px solid var(--_stroke);
        border-radius: var(--radius-md);
        background: var(--color-utility-informational-surface);
        box-shadow: var(--elevation-md);
        overflow: hidden;
      }

      /* Starting position for the entrance transition — see the PLACEMENT
         comment above :host. Offset by a further 100% of the toast's own
         height (on top of --_stack-offset) so it slides up into its resting
         spot rather than just fading in place. Removed via a double rAF in
         connectedCallback, not a single one — some engines can batch a
         single rAF into the same frame as the initial paint, which would
         skip the transition entirely; two frames guarantees a paint happens
         in between. */
      :host([data-entering]) {
        transform: translateY(calc(var(--_stack-offset, 0px) * -1 + 100%));
        opacity: 0;
      }

      /* Section 508/ADA — every component that uses motion must resolve all
         transition durations to --motion-duration-instant under reduced
         motion (per Motion.stories.ts), not "none", so layout still reflows
         without the visual animation. */
      @media (prefers-reduced-motion: reduce) {
        :host {
          transition-duration: var(--motion-duration-instant);
        }
      }

      /* Below the mms 768px layout-padding-step (--layout-padding-step), flex
         to the viewport instead of a fixed 560px card, inset from the side
         edges instead of centered — literal breakpoint value, same reasoning
         as mms-alert-banner: media queries can't resolve custom properties. */
      @media (max-width: 767px) {
        :host {
          width: auto;
          left: 20px;
          right: 20px;
          margin-left: 0;
        }
      }

      :host([alert-type='error']) {
        --_stroke: var(--color-utility-error-stroke);
        --_text: var(--color-text-on-muted);
        background: var(--color-utility-error-muted);
      }

      :host([alert-type='success']) {
        --_stroke: var(--color-utility-success-stroke);
        --_text: var(--color-text-on-muted);
        background: var(--color-utility-success-muted);
      }

      :host([alert-type='caution']) {
        --_stroke: var(--color-utility-caution-stroke);
        --_text: var(--color-text-on-muted);
        background: var(--color-utility-caution-muted);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         LEFT ICON
         ═══════════════════════════════════════════════════════════════════════ */
      .left-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        /* Tighter than the sm2 gap used elsewhere in this row — J flagged the
           default icon-to-text gap as too loose; this is a toast-only
           adjustment, not a change to the shared row-gap pattern used by
           mms-alert-banner/mms-inline-alert. */
        margin-right: var(--spacing-sm1);
        color: var(--_text);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         CONTENT
         ═══════════════════════════════════════════════════════════════════════ */
      .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sm2);
        flex: 1;
        min-width: 0;
      }

      .message {
        flex: 1;
        min-width: 0;
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--type-body-md-weight);
        color: var(--_text);
        /* Same rationale as mms-alert-banner's .message — a single long word
           at 320px + 200% zoom must break rather than overflow (WCAG 1.4.4). */
        overflow-wrap: break-word;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         CLOSE SECTION (Divider + Close Button)
         ═══════════════════════════════════════════════════════════════════════ */
      .close-section {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        gap: var(--spacing-sm2);
        flex-shrink: 0;
        /* Preserves the original content-to-close-section spacing now that
           :host no longer sets a uniform row gap (see .left-icon). */
        margin-left: var(--spacing-sm2);
        /* Matches Marina's ds-toast .close-section — without this, :host's
           align-items: center leaves this section (and the divider inside
           it) at its own intrinsic height instead of growing with the host
           when .message wraps to multiple lines. */
        align-self: stretch;
      }

      .divider {
        width: var(--spacing-px);
        background: var(--_text);
        flex-shrink: 0;
      }

      /* Marina's .text-link is always the fixed on-surface text color, never
         a distinct link tint. mms-link's own color variants (standard =
         link-blue, neutral = mode-aware body text) don't fit here: this
         toast's colored fills are fixed/non-inverting, so a mode-aware color
         fails contrast in dark mode (measured: --color-text-default flips to
         #e3e3e3 in dark mode, giving 1.04-1.46:1 against the fixed error/
         success/caution fills — worse than the original mode-relative-blue
         bug it would replace). Rendered with link-color="inherit" (see
         mms-link.component.ts), which resolves to currentColor — this rule
         supplies that color via standard CSS inheritance, matching Marina
         and reusing --_text, already verified to pass in both modes for
         every alert type. */
      mms-link {
        color: var(--_text);
      }

      .close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        cursor: pointer;
        background: none;
        border: none;
        border-radius: var(--radius-sm);
        color: var(--_text);
        /* Marina's close button (3px vertical padding only) falls short of
           WCAG 2.5.8's 24x24 target-size floor. Same padding+negative-margin
           trick as mms-alert-banner's close-button: expands the hit target
           without shifting layout. */
        padding: var(--spacing-sm1);
        margin: calc(var(--spacing-sm1) * -1);
      }

      .close-button:hover {
        opacity: 0.7;
      }

      /* Below this width, the left icon and close section — both fixed-size,
         flex-shrink: 0 — can alone exceed the available row width (e.g. a
         320px viewport at 200% zoom, WCAG 1.4.4). Same stacking rationale as
         mms-alert-banner's 340px breakpoint. */
      @media (max-width: 340px) {
        :host {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas: 'icon' 'content' 'close';
          width: auto;
          /* Restores uniform row-gap for the stacked layout now that :host
             no longer sets a single shared gap (see .left-icon/.close-section
             margins above, which are horizontal-only and not applicable here). */
          gap: var(--spacing-sm2);
        }

        .left-icon {
          grid-area: icon;
          /* Without this, the grid item stretches to the full row width
             (grid's default justify-self), and .left-icon's own
             justify-content: center (set for centering the icon glyph
             inside its box in the default row layout) then centers it
             within that full-width box instead of pinning it to the left. */
          justify-self: start;
          margin-right: 0;
        }

        .content {
          grid-area: content;
        }

        .close-section {
          grid-area: close;
          justify-self: end;
          margin-left: 0;
        }
      }
    `]}_getIconName(){switch(this.alertType){case`success`:return`check-circle`;case`error`:return`warning-circle`;case`caution`:return`warning`;default:return`info`}}_startDismissTimer(){this._stopDismissTimer(),!(!this.autoDismiss||this._isHovered||this._isFocused||document.hidden)&&(this._dismissTimer=setTimeout(()=>{this._handleDismiss(`timeout`)},this.autoDismissDuration))}_stopDismissTimer(){this._dismissTimer&&=(clearTimeout(this._dismissTimer),null)}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`alert`),this.hasAttribute(`aria-live`)||this.setAttribute(`aria-live`,`assertive`),this.hasAttribute(`aria-atomic`)||this.setAttribute(`aria-atomic`,`true`),this.addEventListener(`mouseenter`,this._handleMouseEnter),this.addEventListener(`mouseleave`,this._handleMouseLeave),this.addEventListener(`focusin`,this._handleFocusIn),this.addEventListener(`focusout`,this._handleFocusOut),document.addEventListener(`visibilitychange`,this._handleVisibilityChange),this.setAttribute(`data-entering`,``),T(this),this._startDismissTimer(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.removeAttribute(`data-entering`)})})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseenter`,this._handleMouseEnter),this.removeEventListener(`mouseleave`,this._handleMouseLeave),this.removeEventListener(`focusin`,this._handleFocusIn),this.removeEventListener(`focusout`,this._handleFocusOut),document.removeEventListener(`visibilitychange`,this._handleVisibilityChange),E(this),this._stopDismissTimer()}updated(e){super.updated(e),(e.has(`autoDismiss`)||e.has(`autoDismissDuration`))&&this._startDismissTimer()}render(){return a`
      ${this.leftIcon?a`
            <span class="left-icon">
              <mms-icon name=${this._getIconName()} size="lg" label=${`${this.alertType} toast`}></mms-icon>
            </span>
          `:n}
      <div class="content">
        <span class="message">${this.message}</span>
        ${this.action?a`
              <mms-link
                href=${this.actionHref}
                label=${this.actionText}
                link-color="inherit"
                underline="always"
                @click=${this._handleActionClick}
              ></mms-link>
            `:n}
      </div>
      ${this.closeIcon?a`
            <div class="close-section">
              <div class="divider"></div>
              <button class="close-button" @click=${this._handleCloseClick} aria-label="Dismiss toast">
                <mms-icon name="x" size="sm"></mms-icon>
              </button>
            </div>
          `:n}
    `}},p([c({type:String,reflect:!0,attribute:`alert-type`})],M.prototype,`alertType`,void 0),p([c({type:Boolean,attribute:`left-icon`})],M.prototype,`leftIcon`,void 0),p([c({type:Boolean,attribute:`close-icon`})],M.prototype,`closeIcon`,void 0),p([c({type:Boolean,reflect:!0})],M.prototype,`action`,void 0),p([c({type:String})],M.prototype,`message`,void 0),p([c({type:String,attribute:`action-text`})],M.prototype,`actionText`,void 0),p([c({type:String,attribute:`action-href`})],M.prototype,`actionHref`,void 0),p([c({type:Boolean,reflect:!0,attribute:`auto-dismiss`})],M.prototype,`autoDismiss`,void 0),p([c({type:Number,attribute:`auto-dismiss-duration`})],M.prototype,`autoDismissDuration`,void 0),M=p([l(`mms-toast`)],M)})),P=t({LayoutBehavior:()=>G,Overview:()=>B,PlaygroundStory:()=>K,ResponsiveDemo:()=>q,__namedExportsOrder:()=>J,default:()=>I});function F(){let e=V.value;if(!e)return;let{alertType:t,message:n}=U[H%U.length];H++;let r=document.createElement(`mms-toast`);r.setAttribute(`alert-type`,t),r.setAttribute(`message`,n),e.appendChild(r)}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y=e((()=>{o(),C(),N(),h(),_(),b(),I={title:`Feedback/Toast`,tags:[`!autodocs`]},L={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},R=`680px`,z=`960px`,B={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${z}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${L.h1}">Toast</h1>
      <p style="${L.body} opacity: 0.85; max-width: ${R}; margin-bottom: 1.5rem;">
        A transient, dismissible notification confirming the result of a user-triggered action —
        saved, submitted, undone. Self-positions in a fixed, bottom-center viewport stack — no
        wrapper or manager element required — and announced assertively to assistive technology
        since it reports something the user just did, not ambient page status.
      </p>
      <p style="${L.caption} background: rgba(59,130,246,0.06); border-left: 3px solid #3B82F6; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; text-align: left; opacity: 0.85; margin: 0 0 2rem;">
        Examples below have their real <code style="${L.monoSm}">position: fixed</code> flattened
        (<code style="${L.monoSm}">.docs-flat</code>) purely so variants render side-by-side for
        comparison on this page. See <strong>Layout &amp; Behavior</strong> for a live demo of the
        real fixed-position self-stacking.
      </p>
      <style>
        .docs-flat mms-toast {
          position: static !important;
          margin-left: 0 !important;
          transform: none !important;
        }
      </style>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${L.h2}">Basic usage</h2>
      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1.5rem;">
        Defaults to the <code style="${L.monoSm}">informational</code> type with a status icon and a close button.
      </p>

      <div class="docs-flat" style="margin-bottom: 2rem;">
        <mms-toast message="Your changes have been saved."></mms-toast>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Alert Types -->
      <h2 style="${L.h2}">Alert types</h2>
      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1.5rem;">
        Four semantic types: <code style="${L.monoSm}">informational</code> (default),
        <code style="${L.monoSm}">success</code>, <code style="${L.monoSm}">caution</code>, and
        <code style="${L.monoSm}">error</code>. Each pairs a distinct icon with its own accent color.
      </p>

      <div class="docs-flat" style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-toast alert-type="informational" message="A new version of this form is available."></mms-toast>
        <mms-toast alert-type="success" message="Your application was submitted successfully."></mms-toast>
        <mms-toast alert-type="caution" message="Some information could not be verified automatically."></mms-toast>
        <mms-toast alert-type="error" message="We were unable to process your last payment."></mms-toast>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With an action -->
      <h2 style="${L.h2}">With an action</h2>
      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1.5rem;">
        Setting <code style="${L.monoSm}">action</code> to <code style="${L.monoSm}">true</code> adds an inline
        text-link — most commonly used for an "Undo".
      </p>

      <div class="docs-flat" style="margin-bottom: 2rem;">
        <mms-toast
          message="Item moved to archive."
          action
          action-text="Undo"
          action-href="#"
        ></mms-toast>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Without an icon / without a close button -->
      <h2 style="${L.h2}">Optional icon and close button</h2>
      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1.5rem;">
        <code style="${L.monoSm}">left-icon</code> and <code style="${L.monoSm}">close-icon</code> each default to
        <code style="${L.monoSm}">true</code> and can be turned off independently.
      </p>

      <div class="docs-flat" style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-toast message="No status icon." .leftIcon=${!1}></mms-toast>
        <mms-toast message="No close button — dismissed by the host page only." .closeIcon=${!1}></mms-toast>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Dismissal -->
      <h2 style="${L.h2}">Dismissal</h2>
      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1.5rem;">
        The close button fires a <code style="${L.monoSm}">dismiss</code> event with
        <code style="${L.monoSm}">detail: { reason: 'user' }</code> — the host page owns removal from the DOM
        (e.g. <code style="${L.monoSm}">@dismiss=\${() => el.remove()}</code>); the component does not remove
        itself. <code style="${L.monoSm}">auto-dismiss</code> opts the toast into <em>also</em> dismissing on a
        timer (<code style="${L.monoSm}">reason: 'timeout'</code>), pausing on hover or keyboard focus — the same
        tested pattern as <code style="${L.monoSm}">mms-alert-banner</code>'s
        <code style="${L.monoSm}">autoDismiss</code>/<code style="${L.monoSm}">autoDismissDuration</code>
        (WCAG 2.2.1/2.2.2). Unlike Marina's <code style="${L.monoSm}">ds-toast</code> — whose JSDoc describes
        auto-dismiss but whose implementation never actually starts a timer — this is a real one. See
        <strong>Layout &amp; Behavior</strong> for the full opt-in timer behavior.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${L.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${L.bodySm} margin: 0;">
          <strong>Why <code style="${L.monoSm}">role="alert"</code>, not <code style="${L.monoSm}">role="status"</code>?</strong>
          Toast reports the direct result of something the user just did — a save, a submission, an undo window —
          not ambient page status. Its implicit <code style="${L.monoSm}">aria-live="assertive"</code> interrupts
          to confirm that action immediately. Use <code style="${L.monoSm}">mms-alert-banner</code>
          (<code style="${L.monoSm}">role="status"</code>, polite) for non-interrupting general status instead.
        </p>
      </div>

      <h3 style="${L.h3}">WCAG 2.2 AA Compliance</h3>
      ${y(v.toast.rows)}

      <h3 style="${L.h3}">Screen Reader Behavior</h3>
      <ul style="${L.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>On render:</strong> Announces immediately (interrupts) via <code style="${L.monoSm}">role="alert"</code> — message and action link text are read as content</li>
        <li style="margin-bottom: 0.5rem;"><strong>Status icon:</strong> Announced via its <code style="${L.monoSm}">aria-label</code> (e.g. "error toast"), not left silent as decorative</li>
        <li style="margin-bottom: 0.5rem;"><strong>Text link:</strong> Announced as a link with its label; focusable independently of the toast container</li>
        <li><strong>Close button:</strong> Announced as "Dismiss toast, button"</li>
      </ul>

      <h3 style="${L.h3}">Keyboard Navigation</h3>
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
  `},V=S(),H=0,U=[{alertType:`success`,message:`Your changes have been saved.`},{alertType:`caution`,message:`Your session will expire in 5 minutes.`},{alertType:`error`,message:`Something went wrong — please try again.`},{alertType:`informational`,message:`A new version of this form is available.`}],W={frame:`border: 2px dashed rgba(128,128,128,0.35); border-radius: 8px; padding: 2rem 1.5rem 1rem; position: relative; margin-bottom: 0.75rem;`,frameLabel:`position: absolute; top: -0.7rem; left: 1rem; background: var(--color-surface-default, #fff); padding: 0 0.5rem; font-size: 0.75rem; font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;`,stackDemo:`position: relative; transform: translateZ(0); overflow: hidden; min-height: 13rem;`,caption:`font-size: 0.8125rem; opacity: 0.65; text-align: center; margin: 0.5rem 0 0;`,callout:e=>`background: ${e}0d; border-left: 3px solid ${e}; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;`,viewportBox:`border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; padding: 1.25rem 1rem; background: rgba(128,128,128,0.03); display: flex; align-items: center; justify-content: center;`,widthRow:`margin: 0.75rem 12% 0; height: 1.125rem; border-top: 1px solid rgba(128,128,128,0.3); border-left: 1px solid rgba(128,128,128,0.3); border-right: 1px solid rgba(128,128,128,0.3); border-radius: 4px 4px 0 0; display: flex; align-items: flex-end; justify-content: center;`,widthLabel:`font-size: 0.75rem; opacity: 0.55; font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; transform: translateY(0.6rem); background: var(--color-surface-default, #fff); padding: 0 0.375rem; white-space: nowrap;`},G={name:`Layout & Behavior`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${z}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Intro -->
      <h1 style="${L.h1}">Layout &amp; Behavior</h1>
      <p style="${L.body} opacity: 0.85; max-width: ${R}; margin-bottom: 2rem;">
        Toast is a floating, overlay-positioned element, not a docked page-level one like
        <code style="${L.monoSm}">mms-alert-banner</code> — it isn't meant to sit inline in document flow.
        <code style="${L.monoSm}">:host</code> self-positions (<code style="${L.monoSm}">position: fixed</code>,
        bottom-center) and self-stacks — no wrapper or manager element required, the same pattern
        <code style="${L.monoSm}">mms-modal</code> already uses for its own viewport-level positioning. This page
        covers that placement/stacking behavior, the responsiveness rule, and the component's own opt-in
        auto-dismiss timer.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Placement -->
      <h2 style="${L.h2}">Placement</h2>
      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1rem;">
        Toast places itself in a <strong>fixed, bottom-center viewport stack</strong> —
        <code style="${L.monoSm}">:host</code> sets <code style="${L.monoSm}">position: fixed; bottom: 24px;</code>
        directly, with no consumer wrapper or manager element involved.
      </p>
      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1rem;">
        When more than one toast is connected, a shared registry
        (<code style="${L.monoSm}">src/utils/toast-stack.ts</code>) tracks every mounted
        <code style="${L.monoSm}">mms-toast</code> and writes a computed
        <code style="${L.monoSm}">--_stack-offset</code> custom property onto each one — newest-connected sits
        nearest the bottom edge (offset 0), older toasts are pushed upward by the height + a
        <strong>12px gap</strong> of every toast connected after them. This recomputes live via a
        <code style="${L.monoSm}">ResizeObserver</code>, so a toast's message wrapping to a second line
        re-flows the whole stack automatically.
      </p>

      <div style="${W.frame}">
        <span style="${W.frameLabel}">Live demo — contained to this frame for docs purposes only</span>
        <div style="${W.stackDemo}" ${x(V)}>
          <mms-toast alert-type="success" message="Your application was submitted successfully."></mms-toast>
          <mms-toast alert-type="informational" message="A new version of this form is available."></mms-toast>
        </div>
      </div>
      <div style="display: flex; justify-content: center; margin-bottom: 0.75rem;">
        <mms-button variant="secondary" label="Trigger a toast" @click=${F}></mms-button>
      </div>
      <p style="${W.caption}">
        The two toasts above are real, currently-connected <code style="${L.monoSm}">mms-toast</code> elements —
        click <strong>Trigger a toast</strong> to connect another and watch it animate in while the rest of the
        stack reflows to make room. The frame itself only exists to keep this demo visible inline on the docs page
        (via a CSS <code style="${L.monoSm}">transform</code>, which creates a containing block for
        <code style="${L.monoSm}">position: fixed</code> descendants) — in production, with no such override,
        this same mechanism stacks against the real viewport edge.
      </p>

      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1rem;">
        The stack is capped at <strong>3 toasts at once</strong> — keep clicking <strong>Trigger a toast</strong>
        past 3 and the oldest is evicted automatically, the same way it would be in production. The registry
        dispatches the same <code style="${L.monoSm}">dismiss</code> event a consumer already listens for, with
        <code style="${L.monoSm}">detail: { reason: 'stack-limit' }</code>, so eviction goes through the one
        removal path rather than a second one. The cap exists because every toast is
        <code style="${L.monoSm}">aria-live="assertive"</code> — past 3 simultaneous announcements, a screen
        reader's queue becomes unintelligible rather than just visually crowded. Consumers don't need to
        rate-limit their own toast creation to stay under this; the component enforces it.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Motion -->
      <h2 style="${L.h2}">Entrance &amp; reflow motion</h2>
      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1rem;">
        Click <strong>Trigger a toast</strong> in the demo above to see this live: every toast animates in on
        connect — whether it's the only one on screen or joining an existing stack — and the rest of the stack
        animates to its new position at the same time. Both are the same mechanism:
        <code style="${L.monoSm}">:host</code> transitions <code style="${L.monoSm}">transform</code>
        and <code style="${L.monoSm}">opacity</code> whenever <code style="${L.monoSm}">--_stack-offset</code>
        changes, so there's nothing separate to configure for entrance vs. reflow. Duration and easing come from
        the structural motion tokens (<code style="${L.monoSm}">--motion-duration-slow</code>,
        <code style="${L.monoSm}">--motion-easing-standard</code>) — no per-instance motion props exist.
      </p>
      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1rem;">
        <code style="${L.monoSm}">prefers-reduced-motion: reduce</code> collapses all of this to
        <code style="${L.monoSm}">--motion-duration-instant</code> (0ms) automatically — layout still reflows
        immediately, only the animated transition is removed. No consumer opt-out or prop is needed; it follows the
        user's OS-level setting.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Toast vs. Modal -->
      <h2 style="${L.h2}">Toast vs. modal</h2>
      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1rem;">
        Toast's <code style="${L.monoSm}">z-index</code> is <strong>1100</strong> — deliberately above
        <code style="${L.monoSm}">mms-modal</code>'s <strong>1000</strong>, so a toast started before a modal opens
        (e.g. a background save completing) still reaches the user rather than being hidden behind the dialog. This
        doesn't conflict with the modal's focus trap: a toast never moves or steals focus, it only announces via
        <code style="${L.monoSm}">aria-live</code> (WCAG 2.4.3). No consumer configuration is needed for this —
        it's automatic whenever both are on screen together.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Responsiveness -->
      <h2 style="${L.h2}">Responsiveness</h2>
      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1rem;">
        Toast adapts its own width and layout to the viewport — there's no prop to set and nothing for a consumer
        to configure. Three states, based on how much horizontal space is available:
      </p>
      <ul style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin: 0 0 1rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          <strong>768px and up</strong> — a fixed 560px card, centered at the bottom of the screen.
        </li>
        <li style="margin-bottom: 0.5rem;">
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
      <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 0.5rem;">

        <!-- Band 1: >=768px, fixed 560px, centered — real component, own iframe -->
        <!-- Same isolation reason as bands 2/3 below, not just pixel-width -->
        <!-- accuracy: toast-stack.ts's registry is a page-global singleton, so a -->
        <!-- same-document "live" toast here would silently share one stacking -->
        <!-- order with the Placement demo's toasts above (confirmed: it was -->
        <!-- counted as the newest toast, pushing Placement's two out of place). -->
        <!-- An iframe is its own browsing context with its own copy of the -->
        <!-- registry module, so it can't collide with anything outside it. -->
        <div style="width: 100%;">
          <div style="${W.frame}">
            <span style="${W.frameLabel}">≥ 768px viewport</span>
            <div style="${W.viewportBox}">
              <iframe
                src="./iframe.html?id=feedback-toast--responsive-demo&viewMode=story"
                style="width: 800px; max-width: 100%; height: 150px; border: 0; background: transparent;"
                title="mms-toast rendered at a real 800px viewport width"
              ></iframe>
            </div>
            <div style="${W.widthRow}"><span style="${W.widthLabel}">560px card, centered</span></div>
          </div>
          <p style="${W.caption}">Fixed width, centered at the bottom of the screen</p>
        </div>

        <!-- Bands 2 + 3: side by side, each a real component in its own iframe -->
        <div style="display: flex; gap: 1.5rem; align-items: flex-start;">

          <!-- Band 2: 340-767px, full width, inset -->
          <div style="flex: 1 1 60%; min-width: 0;">
            <div style="${W.frame}">
              <span style="${W.frameLabel}">340–767px viewport</span>
              <div style="${W.viewportBox}">
                <iframe
                  src="./iframe.html?id=feedback-toast--responsive-demo&viewMode=story"
                  style="width: 420px; max-width: 100%; height: 190px; border: 0; background: transparent;"
                  title="mms-toast rendered at a real 420px viewport width"
                ></iframe>
              </div>
              <div style="${W.widthRow}"><span style="${W.widthLabel}">full width, 20px inset</span></div>
            </div>
            <p style="${W.caption}">Stretches edge-to-edge, inset 20px each side</p>
          </div>

          <!-- Band 3: <340px, stacked, icon top-left -->
          <div style="flex: 1 1 40%; min-width: 0;">
            <div style="${W.frame}">
              <span style="${W.frameLabel}">&lt; 340px viewport</span>
              <div style="${W.viewportBox}">
                <iframe
                  src="./iframe.html?id=feedback-toast--responsive-demo&viewMode=story"
                  style="width: 260px; max-width: 100%; height: 190px; border: 0; background: transparent;"
                  title="mms-toast rendered at a real 260px viewport width"
                ></iframe>
              </div>
              <div style="${W.widthRow}"><span style="${W.widthLabel}">icon / message / close stacked</span></div>
            </div>
            <p style="${W.caption}">Icon top-left, message, close bottom-right</p>
          </div>

        </div>
      </div>
      <p style="${L.caption} opacity: 0.55; max-width: ${R}; margin-bottom: 1rem;">
        Every card above is the real <code style="${L.monoSm}">mms-toast</code> component, not a mockup — the two
        narrower bands run inside an <code style="${L.monoSm}">iframe</code> pinned to that literal pixel width, so
        their own <code style="${L.monoSm}">@media</code> breakpoint genuinely fires for that browsing context. You
        can also resize this window below 767px and 340px to see the same behavior applied to the whole page.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- UX Behavior — Dismissal -->
      <h2 style="${L.h2}">UX Behavior — Dismissal</h2>
      <p style="${L.bodySm} opacity: 0.85; max-width: ${R}; margin-bottom: 1rem;">
        Manual dismiss (the close button) is the default and always available. Setting
        <code style="${L.monoSm}">auto-dismiss</code> opts a toast into <em>also</em> dismissing on a timer —
        <code style="${L.monoSm}">auto-dismiss-duration</code> controls the delay (default
        <strong>8000ms</strong>). The timer pauses whenever the pointer hovers the toast or keyboard focus lands
        anywhere inside it, and restarts from the full duration once both clear — there's no separate
        pause/resume button; hover, focus, and the always-present close button are the full control surface.
        Both dismissal paths fire the same <code style="${L.monoSm}">dismiss</code> event, distinguished by
        <code style="${L.monoSm}">event.detail.reason</code> (<code style="${L.monoSm}">'user'</code> or
        <code style="${L.monoSm}">'timeout'</code>) — the component never removes itself from the DOM either way;
        the host page owns that.
      </p>

      <div style="${W.callout(`#F59E0B`)}">
        <p style="${L.bodySm} margin: 0;">
          <strong>Caution:</strong> avoid pairing <code style="${L.monoSm}">auto-dismiss</code> with
          <code style="${L.monoSm}">action</code> (e.g. "Undo") unless
          <code style="${L.monoSm}">auto-dismiss-duration</code> gives the user realistic time to read the
          message and act on the text link before it disappears — this isn't enforced by the component, so it's
          a per-instance judgment call.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Other considerations -->
      <h2 style="${L.h2}">Other considerations</h2>
      <ul style="${L.bodySm} margin: 0; padding-left: 1.5rem; opacity: 0.85; max-width: ${R};">
        <li style="margin-bottom: 0.75rem;">
          <span style="${W.callout(`#3B82F6`).replace(`padding: 1rem 1.25rem;`,`padding: 0.0625rem 0.5rem;`).replace(`margin-bottom: 1.5rem;`,``).replace(`border-radius: 0 6px 6px 0;`,`border-radius: 3px;`).replace(`border-left: 3px solid #3B82F6;`,`border: none;`)}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Consumer-owned</span>
          Focus management after dismiss is undefined today — where focus lands when a toast disappears while
          focused isn't handled by the component. Candidate for a small future accessibility ticket.
        </li>
        <li style="margin-bottom: 0.75rem;">
          <span style="${W.callout(`#22C55E`).replace(`padding: 1rem 1.25rem;`,`padding: 0.0625rem 0.5rem;`).replace(`margin-bottom: 1.5rem;`,``).replace(`border-radius: 0 6px 6px 0;`,`border-radius: 3px;`).replace(`border-left: 3px solid #22C55E;`,`border: none;`)}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Current behavior</span>
          The stack-cap-3 auto-evict (see <strong>Placement</strong> above) is the component's mitigation for
          overlapping <code style="${L.monoSm}">aria-live</code> announcements from rapid multi-toast mounting —
          consumers no longer need to self-limit concurrent toast count.
        </li>
        <li>
          <span style="${W.callout(`#22C55E`).replace(`padding: 1rem 1.25rem;`,`padding: 0.0625rem 0.5rem;`).replace(`margin-bottom: 1.5rem;`,``).replace(`border-radius: 0 6px 6px 0;`,`border-radius: 3px;`).replace(`border-left: 3px solid #22C55E;`,`border: none;`)}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Current behavior</span>
          Clicking the text-link action never dismisses the toast — action and dismissal are independent.
        </li>
      </ul>

    </div>
  `},K={name:`Playground`,tags:[`!dev`],args:{alertType:`informational`,leftIcon:!0,closeIcon:!0,action:!1,message:`Informational message.`,actionText:`Action`,actionHref:`#`,autoDismiss:!1,autoDismissDuration:8e3,theme:`maximus`,density:`default`},argTypes:{alertType:{name:`Alert type`,control:`select`,options:[`informational`,`error`,`success`,`caution`],description:`Semantic type — pairs a status icon and accent color`,table:{category:`Visual`}},leftIcon:{name:`Show icon`,control:`boolean`,description:`Whether to render the status icon`,table:{category:`Visual`}},closeIcon:{name:`Show close button`,control:`boolean`,description:`Whether to render the divider and close button`,table:{category:`Visual`}},action:{name:`Show action`,control:`boolean`,description:`Whether to render the text-link action`,table:{category:`Visual`}},message:{name:`Message`,control:`text`,description:`Message text`,table:{category:`Content`}},actionText:{name:`Action text`,control:`text`,description:`Text-link label`,table:{category:`Content`}},actionHref:{name:`Action href`,control:`text`,description:`Text-link URL`,table:{category:`Content`}},autoDismiss:{name:`Auto dismiss`,control:`boolean`,description:`Opt-in: dismiss automatically after the duration below. Off by default. Pauses on hover or keyboard focus; the close button always remains available as a stop mechanism. Not demoed live on this page (no dismiss/close interaction context to observe it against) — but available for use in your project.`,table:{category:`Behavior`}},autoDismissDuration:{name:`Auto dismiss duration (ms)`,control:`number`,description:`Delay before auto-dismiss fires, when auto dismiss is on. Default 8000. Not demoed live on this page — available for use in your project.`,table:{category:`Behavior`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects typography and link color)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-toast has no compact-specific styling yet`,table:{category:`Global`}}},decorators:[e=>a`
        <div style="padding: 1.5rem 2rem; position: relative; transform: translateZ(0); overflow: hidden; min-height: 4.5rem;">
          ${e()}
        </div>
      `],parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.alertType&&n.alertType!==`informational`&&r.push(`alert-type="${n.alertType}"`),n.leftIcon===!1&&r.push(".leftIcon=${false}"),n.closeIcon===!1&&r.push(".closeIcon=${false}"),n.action&&r.push(`action`),n.message&&r.push(`message="${n.message}"`),n.action&&n.actionText&&r.push(`action-text="${n.actionText}"`),n.action&&n.actionHref&&r.push(`action-href="${n.actionHref}"`),n.autoDismiss&&r.push(`auto-dismiss`),n.autoDismiss&&n.autoDismissDuration&&n.autoDismissDuration!==8e3&&r.push(`auto-dismiss-duration="${n.autoDismissDuration}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-toast\n  ${r.join(`
  `)}\n></mms-toast>`},language:`html`}},controls:{sort:`none`}},render:e=>a`
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
    `},q={name:`Responsive demo (internal)`,tags:[`!dev`],render:()=>a`
    <mms-toast alert-type="informational" message="Your application was submitted successfully."></mms-toast>
  `},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Toast</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        A transient, dismissible notification confirming the result of a user-triggered action —
        saved, submitted, undone. Self-positions in a fixed, bottom-center viewport stack — no
        wrapper or manager element required — and announced assertively to assistive technology
        since it reports something the user just did, not ambient page status.
      </p>
      <p style="\${t.caption} background: rgba(59,130,246,0.06); border-left: 3px solid #3B82F6; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; text-align: left; opacity: 0.85; margin: 0 0 2rem;">
        Examples below have their real <code style="\${t.monoSm}">position: fixed</code> flattened
        (<code style="\${t.monoSm}">.docs-flat</code>) purely so variants render side-by-side for
        comparison on this page. See <strong>Layout &amp; Behavior</strong> for a live demo of the
        real fixed-position self-stacking.
      </p>
      <style>
        .docs-flat mms-toast {
          position: static !important;
          margin-left: 0 !important;
          transform: none !important;
        }
      </style>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Defaults to the <code style="\${t.monoSm}">informational</code> type with a status icon and a close button.
      </p>

      <div class="docs-flat" style="margin-bottom: 2rem;">
        <mms-toast message="Your changes have been saved."></mms-toast>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Alert Types -->
      <h2 style="\${t.h2}">Alert types</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Four semantic types: <code style="\${t.monoSm}">informational</code> (default),
        <code style="\${t.monoSm}">success</code>, <code style="\${t.monoSm}">caution</code>, and
        <code style="\${t.monoSm}">error</code>. Each pairs a distinct icon with its own accent color.
      </p>

      <div class="docs-flat" style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-toast alert-type="informational" message="A new version of this form is available."></mms-toast>
        <mms-toast alert-type="success" message="Your application was submitted successfully."></mms-toast>
        <mms-toast alert-type="caution" message="Some information could not be verified automatically."></mms-toast>
        <mms-toast alert-type="error" message="We were unable to process your last payment."></mms-toast>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With an action -->
      <h2 style="\${t.h2}">With an action</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Setting <code style="\${t.monoSm}">action</code> to <code style="\${t.monoSm}">true</code> adds an inline
        text-link — most commonly used for an "Undo".
      </p>

      <div class="docs-flat" style="margin-bottom: 2rem;">
        <mms-toast
          message="Item moved to archive."
          action
          action-text="Undo"
          action-href="#"
        ></mms-toast>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Without an icon / without a close button -->
      <h2 style="\${t.h2}">Optional icon and close button</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">left-icon</code> and <code style="\${t.monoSm}">close-icon</code> each default to
        <code style="\${t.monoSm}">true</code> and can be turned off independently.
      </p>

      <div class="docs-flat" style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-toast message="No status icon." .leftIcon=\${false}></mms-toast>
        <mms-toast message="No close button — dismissed by the host page only." .closeIcon=\${false}></mms-toast>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Dismissal -->
      <h2 style="\${t.h2}">Dismissal</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Why <code style="\${t.monoSm}">role="alert"</code>, not <code style="\${t.monoSm}">role="status"</code>?</strong>
          Toast reports the direct result of something the user just did — a save, a submission, an undo window —
          not ambient page status. Its implicit <code style="\${t.monoSm}">aria-live="assertive"</code> interrupts
          to confirm that action immediately. Use <code style="\${t.monoSm}">mms-alert-banner</code>
          (<code style="\${t.monoSm}">role="status"</code>, polite) for non-interrupting general status instead.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['toast'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>On render:</strong> Announces immediately (interrupts) via <code style="\${t.monoSm}">role="alert"</code> — message and action link text are read as content</li>
        <li style="margin-bottom: 0.5rem;"><strong>Status icon:</strong> Announced via its <code style="\${t.monoSm}">aria-label</code> (e.g. "error toast"), not left silent as decorative</li>
        <li style="margin-bottom: 0.5rem;"><strong>Text link:</strong> Announced as a link with its label; focusable independently of the toast container</li>
        <li><strong>Close button:</strong> Announced as "Dismiss toast, button"</li>
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
}`,...B.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Layout & Behavior',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Intro -->
      <h1 style="\${t.h1}">Layout &amp; Behavior</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Toast is a floating, overlay-positioned element, not a docked page-level one like
        <code style="\${t.monoSm}">mms-alert-banner</code> — it isn't meant to sit inline in document flow.
        <code style="\${t.monoSm}">:host</code> self-positions (<code style="\${t.monoSm}">position: fixed</code>,
        bottom-center) and self-stacks — no wrapper or manager element required, the same pattern
        <code style="\${t.monoSm}">mms-modal</code> already uses for its own viewport-level positioning. This page
        covers that placement/stacking behavior, the responsiveness rule, and the component's own opt-in
        auto-dismiss timer.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Placement -->
      <h2 style="\${t.h2}">Placement</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Toast places itself in a <strong>fixed, bottom-center viewport stack</strong> —
        <code style="\${t.monoSm}">:host</code> sets <code style="\${t.monoSm}">position: fixed; bottom: 24px;</code>
        directly, with no consumer wrapper or manager element involved.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
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
      <div style="display: flex; justify-content: center; margin-bottom: 0.75rem;">
        <mms-button variant="secondary" label="Trigger a toast" @click=\${triggerPlacementDemoToast}></mms-button>
      </div>
      <p style="\${d.caption}">
        The two toasts above are real, currently-connected <code style="\${t.monoSm}">mms-toast</code> elements —
        click <strong>Trigger a toast</strong> to connect another and watch it animate in while the rest of the
        stack reflows to make room. The frame itself only exists to keep this demo visible inline on the docs page
        (via a CSS <code style="\${t.monoSm}">transform</code>, which creates a containing block for
        <code style="\${t.monoSm}">position: fixed</code> descendants) — in production, with no such override,
        this same mechanism stacks against the real viewport edge.
      </p>

      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        The stack is capped at <strong>3 toasts at once</strong> — keep clicking <strong>Trigger a toast</strong>
        past 3 and the oldest is evicted automatically, the same way it would be in production. The registry
        dispatches the same <code style="\${t.monoSm}">dismiss</code> event a consumer already listens for, with
        <code style="\${t.monoSm}">detail: { reason: 'stack-limit' }</code>, so eviction goes through the one
        removal path rather than a second one. The cap exists because every toast is
        <code style="\${t.monoSm}">aria-live="assertive"</code> — past 3 simultaneous announcements, a screen
        reader's queue becomes unintelligible rather than just visually crowded. Consumers don't need to
        rate-limit their own toast creation to stay under this; the component enforces it.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Motion -->
      <h2 style="\${t.h2}">Entrance &amp; reflow motion</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Click <strong>Trigger a toast</strong> in the demo above to see this live: every toast animates in on
        connect — whether it's the only one on screen or joining an existing stack — and the rest of the stack
        animates to its new position at the same time. Both are the same mechanism:
        <code style="\${t.monoSm}">:host</code> transitions <code style="\${t.monoSm}">transform</code>
        and <code style="\${t.monoSm}">opacity</code> whenever <code style="\${t.monoSm}">--_stack-offset</code>
        changes, so there's nothing separate to configure for entrance vs. reflow. Duration and easing come from
        the structural motion tokens (<code style="\${t.monoSm}">--motion-duration-slow</code>,
        <code style="\${t.monoSm}">--motion-easing-standard</code>) — no per-instance motion props exist.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        <code style="\${t.monoSm}">prefers-reduced-motion: reduce</code> collapses all of this to
        <code style="\${t.monoSm}">--motion-duration-instant</code> (0ms) automatically — layout still reflows
        immediately, only the animated transition is removed. No consumer opt-out or prop is needed; it follows the
        user's OS-level setting.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Toast vs. Modal -->
      <h2 style="\${t.h2}">Toast vs. modal</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Toast's <code style="\${t.monoSm}">z-index</code> is <strong>1100</strong> — deliberately above
        <code style="\${t.monoSm}">mms-modal</code>'s <strong>1000</strong>, so a toast started before a modal opens
        (e.g. a background save completing) still reaches the user rather than being hidden behind the dialog. This
        doesn't conflict with the modal's focus trap: a toast never moves or steals focus, it only announces via
        <code style="\${t.monoSm}">aria-live</code> (WCAG 2.4.3). No consumer configuration is needed for this —
        it's automatic whenever both are on screen together.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Responsiveness -->
      <h2 style="\${t.h2}">Responsiveness</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Toast adapts its own width and layout to the viewport — there's no prop to set and nothing for a consumer
        to configure. Three states, based on how much horizontal space is available:
      </p>
      <ul style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin: 0 0 1rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          <strong>768px and up</strong> — a fixed 560px card, centered at the bottom of the screen.
        </li>
        <li style="margin-bottom: 0.5rem;">
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
      <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 0.5rem;">

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
        <div style="display: flex; gap: 1.5rem; align-items: flex-start;">

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
      <p style="\${t.caption} opacity: 0.55; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Every card above is the real <code style="\${t.monoSm}">mms-toast</code> component, not a mockup — the two
        narrower bands run inside an <code style="\${t.monoSm}">iframe</code> pinned to that literal pixel width, so
        their own <code style="\${t.monoSm}">@media</code> breakpoint genuinely fires for that browsing context. You
        can also resize this window below 767px and 340px to see the same behavior applied to the whole page.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- UX Behavior — Dismissal -->
      <h2 style="\${t.h2}">UX Behavior — Dismissal</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
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

      <div style="\${d.callout('#F59E0B')}">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Caution:</strong> avoid pairing <code style="\${t.monoSm}">auto-dismiss</code> with
          <code style="\${t.monoSm}">action</code> (e.g. "Undo") unless
          <code style="\${t.monoSm}">auto-dismiss-duration</code> gives the user realistic time to read the
          message and act on the text link before it disappears — this isn't enforced by the component, so it's
          a per-instance judgment call.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Other considerations -->
      <h2 style="\${t.h2}">Other considerations</h2>
      <ul style="\${t.bodySm} margin: 0; padding-left: 1.5rem; opacity: 0.85; max-width: \${PROSE_MAX};">
        <li style="margin-bottom: 0.75rem;">
          <span style="\${d.callout('#3B82F6').replace('padding: 1rem 1.25rem;', 'padding: 0.0625rem 0.5rem;').replace('margin-bottom: 1.5rem;', '').replace('border-radius: 0 6px 6px 0;', 'border-radius: 3px;').replace('border-left: 3px solid #3B82F6;', 'border: none;')}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Consumer-owned</span>
          Focus management after dismiss is undefined today — where focus lands when a toast disappears while
          focused isn't handled by the component. Candidate for a small future accessibility ticket.
        </li>
        <li style="margin-bottom: 0.75rem;">
          <span style="\${d.callout('#22C55E').replace('padding: 1rem 1.25rem;', 'padding: 0.0625rem 0.5rem;').replace('margin-bottom: 1.5rem;', '').replace('border-radius: 0 6px 6px 0;', 'border-radius: 3px;').replace('border-left: 3px solid #22C55E;', 'border: none;')}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Current behavior</span>
          The stack-cap-3 auto-evict (see <strong>Placement</strong> above) is the component's mitigation for
          overlapping <code style="\${t.monoSm}">aria-live</code> announcements from rapid multi-toast mounting —
          consumers no longer need to self-limit concurrent toast count.
        </li>
        <li>
          <span style="\${d.callout('#22C55E').replace('padding: 1rem 1.25rem;', 'padding: 0.0625rem 0.5rem;').replace('margin-bottom: 1.5rem;', '').replace('border-radius: 0 6px 6px 0;', 'border-radius: 3px;').replace('border-left: 3px solid #22C55E;', 'border: none;')}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Current behavior</span>
          Clicking the text-link action never dismisses the toast — action and dismissal are independent.
        </li>
      </ul>

    </div>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Responsive demo (internal)',
  tags: ['!dev'],
  render: () => html\`
    <mms-toast alert-type="informational" message="Your application was submitted successfully."></mms-toast>
  \`
}`,...q.parameters?.docs?.source}}},J=[`Overview`,`LayoutBehavior`,`PlaygroundStory`,`ResponsiveDemo`]}));Y();export{G as LayoutBehavior,B as Overview,K as PlaygroundStory,q as ResponsiveDemo,J as __namedExportsOrder,I as default,Y as n,P as t};