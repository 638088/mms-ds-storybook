import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-B0BZwaT1.js";import{E as o,S as s,T as c,g as l,h as u,m as d,n as f,r as p,t as m,w as h}from"./mms-icon.component-DFVI3nJi.js";import{i as g}from"./iframe-0m-KJlLB.js";import{n as _,t as v}from"./localize-DGaV1nF3.js";import{n as y,t as b}from"./normalize-alert-type-C-qeRm_W.js";var x,S,C=e((()=>{a(),o(),l(),u(),b(),m(),g(),_(),p(),x=`informational`,S=class extends r{constructor(...e){super(...e),this.localize=new v(this),this.alertType=`informational`,this.dismissible=!0,this.action=!1,this.summary=``,this.message=``,this.actionHref=`#`,this._handleDismiss=()=>{this.dispatchEvent(new CustomEvent(`dismiss`,{bubbles:!0,composed:!0}))},this._handleActionClick=()=>{this.dispatchEvent(new CustomEvent(`action-click`,{bubbles:!0,composed:!0,detail:{href:this.actionHref}}))}}static{this.styles=[c,d,n`
      /* ═══════════════════════════════════════════════════════════════════════
         HOST — flex row; .content and .close-button are direct, sibling
         children (not wrapped in an inner container) so that neither an
         external flex/grid parent's align-items nor its own layout can nest
         the close button inside .content — see the flex-column-parent
         regression test ported from Marina.
         ═══════════════════════════════════════════════════════════════════════ */
      :host {
        --_stroke: var(--color-utility-informational-stroke);
        --_fill: var(--color-utility-informational-text);
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: var(--spacing-sm2);
        padding: var(--spacing-sm2);
        box-sizing: border-box;
        min-width: 0;
        background: var(--color-surface-raised);
        border: var(--border-width-xs) solid var(--_stroke);
        border-radius: var(--radius-md);
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

      /* ═══════════════════════════════════════════════════════════════════════
         CONTENT
         ═══════════════════════════════════════════════════════════════════════ */
      .content {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: var(--spacing-sm1);
        flex: 1;
        min-width: 0;
        align-self: flex-start;
      }

      .alert-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        /* 20px icon in a 24px (body-md) line box: centering against the text's
           true vertical center — not just the row's top edge — requires
           nudging down by half the icon/line-height delta: (24 - 20) / 2 = 2px,
           which is exactly --spacing-xs1. */
        padding-top: var(--spacing-xs1);
        color: var(--_fill);
      }

      .message-area {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm1);
        flex: 1;
        min-width: 0;
      }

      .message {
        margin: 0;
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--type-body-md-weight);
        color: var(--color-text-default);
        overflow-wrap: break-word;
      }

      .message strong {
        font-weight: var(--font-weight-bold);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         CLOSE BUTTON — padded symmetrically (rather than Marina's vertical-only
         padding) so the 16px icon clears the WCAG 2.5.8 24px target-size floor;
         the matching negative margin cancels that padding's footprint out of
         the host's flex row so it doesn't shift layout (same pattern as
         mms-alert-banner's close button).
         ═══════════════════════════════════════════════════════════════════════ */
      .close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        align-self: flex-start;
        cursor: pointer;
        background: none;
        border: none;
        border-radius: var(--radius-sm);
        color: var(--color-text-default);
        padding: var(--spacing-xs2);
        margin: calc(var(--spacing-xs2) * -1);
      }

      /* Transparent-by-default control: step-3 hover fill, same as the card's
         expand control and side-nav items — not a fade of the whole button. */
      .close-button:hover {
        background: var(--color-surface-hover);
      }

      /* Below this width, the alert icon and close button — both fixed-size,
         flex-shrink: 0 — can together exceed the available row width at a
         320px viewport combined with 200% browser zoom (WCAG 1.4.4 Resize
         Text). Literal breakpoint value: media queries can't resolve custom
         properties, same reasoning as mms-alert-banner's identical fix. */
      @media (max-width: 340px) {
        :host {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas: 'content' 'close';
        }

        .content {
          grid-area: content;
        }

        .close-button {
          grid-area: close;
          justify-self: end;
          margin: 0;
        }
      }
    `]}_getIconName(){switch(this.alertType){case`success`:return`check-circle`;case`error`:return`warning-circle`;case`caution`:return`warning`;default:return`info`}}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`alert`),this.hasAttribute(`aria-live`)||this.setAttribute(`aria-live`,`polite`),this.hasAttribute(`aria-atomic`)||this.setAttribute(`aria-atomic`,`true`)}willUpdate(e){if(!e.has(`alertType`))return;let t=y(this.alertType,x);t!==this.alertType&&(this.alertType=t)}render(){return i`
      <div class="content">
        <span class="alert-icon">
          <mms-icon name=${this._getIconName()} size="md" label=${`${this.alertType} alert`}></mms-icon>
        </span>
        <div class="message-area">
          <p class="message">
            ${this.summary?i`<strong>${this.summary}</strong> `:t}${this.message}
          </p>
          ${this.action?i`
                <mms-link
                  href=${this.actionHref}
                  label=${this.actionText??this.localize.term(`textLink`)}
                  right-icon="arrow-right"
                  underline="hover"
                  @click=${this._handleActionClick}
                ></mms-link>
              `:t}
        </div>
      </div>
      ${this.dismissible?i`
            <button class="close-button" @click=${this._handleDismiss} aria-label=${this.localize.term(`dismissAlert`)}>
              <mms-icon name="x" size="sm"></mms-icon>
            </button>
          `:t}
    `}},f([s({type:String,reflect:!0,attribute:`alert-type`})],S.prototype,`alertType`,void 0),f([s({type:Boolean,reflect:!0})],S.prototype,`dismissible`,void 0),f([s({type:Boolean,reflect:!0})],S.prototype,`action`,void 0),f([s({type:String})],S.prototype,`summary`,void 0),f([s({type:String})],S.prototype,`message`,void 0),f([s({type:String,attribute:`action-text`})],S.prototype,`actionText`,void 0),f([s({type:String,attribute:`action-href`})],S.prototype,`actionHref`,void 0),S=f([h(`mms-inline-alert`)],S)}));export{C as t};