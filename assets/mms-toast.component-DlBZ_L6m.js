import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-B0BZwaT1.js";import{E as o,S as s,T as c,g as l,h as u,n as d,p as f,r as p,t as m,w as h}from"./mms-icon.component-DFVI3nJi.js";import{i as g}from"./iframe-BrFFNKAP.js";import{n as _,t as v}from"./print.css-DylLNsDy.js";import{n as y,t as b}from"./localize-DGaV1nF3.js";import{n as x,t as S}from"./normalize-alert-type-C-qeRm_W.js";function C(){let e=0;for(let t=O.length-1;t>=0;t--){let n=O[t];n.style.setProperty(`--_stack-offset`,`${e}px`),e+=n.getBoundingClientRect().height+E}}function w(e){O.push(e),k??=new ResizeObserver(()=>C()),k.observe(e),O.length>D&&O[0].dispatchEvent(new CustomEvent(`dismiss`,{bubbles:!0,composed:!0,detail:{reason:`stack-limit`}})),C()}function T(e){let t=O.indexOf(e);t!==-1&&O.splice(t,1),k?.unobserve(e),e.style.removeProperty(`--_stack-offset`),C()}var E,D,O,k,A=e((()=>{E=12,D=3,O=[],k=null})),j,M,N=e((()=>{a(),o(),_(),l(),u(),A(),S(),m(),g(),y(),p(),j=`informational`,M=class extends r{constructor(...e){super(...e),this.localize=new b(this),this.alertType=`informational`,this.leftIcon=!0,this.closeIcon=!0,this.action=!1,this.message=`Informational message.`,this.actionHref=`#`,this.autoDismiss=!1,this.autoDismissDuration=8e3,this._isHovered=!1,this._isFocused=!1,this._dismissTimer=null,this._handleDismiss=e=>{this._stopDismissTimer(),this.dispatchEvent(new CustomEvent(`dismiss`,{bubbles:!0,composed:!0,detail:{reason:e}}))},this._handleCloseClick=()=>{this._handleDismiss(`user`)},this._handleActionClick=()=>{this.dispatchEvent(new CustomEvent(`action-click`,{bubbles:!0,composed:!0,detail:{href:this.actionHref}}))},this._handleMouseEnter=()=>{this._isHovered=!0,this._stopDismissTimer()},this._handleMouseLeave=()=>{this._isHovered=!1,this._startDismissTimer()},this._handleFocusIn=()=>{this._isFocused=!0,this._stopDismissTimer()},this._handleFocusOut=e=>{let t=e.relatedTarget;t&&(this.shadowRoot?.contains(t)||this.contains(t))||(this._isFocused=!1,this._startDismissTimer())},this._handleVisibilityChange=()=>{document.hidden?this._stopDismissTimer():this._startDismissTimer()}}static{this.styles=[c,v,f,n`
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
          inset-inline-start: 20px;
          inset-inline-end: 20px;
          margin-inline-start: 0;
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
        margin-inline-end: var(--spacing-sm1);
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
        margin-inline-start: var(--spacing-sm2);
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
          margin-inline-end: 0;
        }

        .content {
          grid-area: content;
        }

        .close-section {
          grid-area: close;
          justify-self: end;
          margin-inline-start: 0;
        }
      }
    `]}_getIconName(){switch(this.alertType){case`success`:return`check-circle`;case`error`:return`warning-circle`;case`caution`:return`warning`;default:return`info`}}_startDismissTimer(){this._stopDismissTimer(),!(!this.autoDismiss||this._isHovered||this._isFocused||document.hidden)&&(this._dismissTimer=setTimeout(()=>{this._handleDismiss(`timeout`)},this.autoDismissDuration))}_stopDismissTimer(){this._dismissTimer&&=(clearTimeout(this._dismissTimer),null)}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`alert`),this.hasAttribute(`aria-live`)||this.setAttribute(`aria-live`,`assertive`),this.hasAttribute(`aria-atomic`)||this.setAttribute(`aria-atomic`,`true`),this.addEventListener(`mouseenter`,this._handleMouseEnter),this.addEventListener(`mouseleave`,this._handleMouseLeave),this.addEventListener(`focusin`,this._handleFocusIn),this.addEventListener(`focusout`,this._handleFocusOut),document.addEventListener(`visibilitychange`,this._handleVisibilityChange),this.setAttribute(`data-entering`,``),w(this),this._startDismissTimer(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.removeAttribute(`data-entering`)})})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseenter`,this._handleMouseEnter),this.removeEventListener(`mouseleave`,this._handleMouseLeave),this.removeEventListener(`focusin`,this._handleFocusIn),this.removeEventListener(`focusout`,this._handleFocusOut),document.removeEventListener(`visibilitychange`,this._handleVisibilityChange),T(this),this._stopDismissTimer()}updated(e){super.updated(e),(e.has(`autoDismiss`)||e.has(`autoDismissDuration`))&&this._startDismissTimer()}willUpdate(e){if(!e.has(`alertType`))return;let t=x(this.alertType,j);t!==this.alertType&&(this.alertType=t)}render(){return i`
      ${this.leftIcon?i`
            <span class="left-icon">
              <mms-icon name=${this._getIconName()} size="lg" label=${`${this.alertType} toast`}></mms-icon>
            </span>
          `:t}
      <div class="content">
        <span class="message">${this.message}</span>
        ${this.action?i`
              <mms-link
                href=${this.actionHref}
                label=${this.actionText??this.localize.term(`action`)}
                link-color="inherit"
                underline="always"
                @click=${this._handleActionClick}
              ></mms-link>
            `:t}
      </div>
      ${this.closeIcon?i`
            <div class="close-section">
              <div class="divider"></div>
              <button class="close-button" @click=${this._handleCloseClick} aria-label=${this.localize.term(`dismissToast`)}>
                <mms-icon name="x" size="sm"></mms-icon>
              </button>
            </div>
          `:t}
    `}},d([s({type:String,reflect:!0,attribute:`alert-type`})],M.prototype,`alertType`,void 0),d([s({type:Boolean,attribute:`left-icon`})],M.prototype,`leftIcon`,void 0),d([s({type:Boolean,attribute:`close-icon`})],M.prototype,`closeIcon`,void 0),d([s({type:Boolean,reflect:!0})],M.prototype,`action`,void 0),d([s({type:String})],M.prototype,`message`,void 0),d([s({type:String,attribute:`action-text`})],M.prototype,`actionText`,void 0),d([s({type:String,attribute:`action-href`})],M.prototype,`actionHref`,void 0),d([s({type:Boolean,reflect:!0,attribute:`auto-dismiss`})],M.prototype,`autoDismiss`,void 0),d([s({type:Number,attribute:`auto-dismiss-duration`})],M.prototype,`autoDismissDuration`,void 0),M=d([h(`mms-toast`)],M)}));export{N as t};