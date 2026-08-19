import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{a as s,f as c,i as l,m as u,n as d,o as f,t as p}from"./decorate-BdwtT8fT.js";import{t as m}from"./mms-icon.component-B0xp-9Qj.js";import{t as h}from"./iframe-DuNKalfB.js";import{a as g,o as _,r as v,t as y}from"./a11y-outcome-DcpqwzN2.js";var b,x=e((()=>{o(),f(),s(),m(),h(),d(),b=class extends i{constructor(...e){super(...e),this.alertType=`informational`,this.dismissible=!0,this.action=!1,this.summary=``,this.message=``,this.actionText=`Text link`,this.actionHref=`#`,this._handleDismiss=()=>{this.dispatchEvent(new CustomEvent(`dismiss`,{bubbles:!0,composed:!0}))},this._handleActionClick=()=>{this.dispatchEvent(new CustomEvent(`action-click`,{bubbles:!0,composed:!0,detail:{href:this.actionHref}}))}}static{this.styles=[l,r`
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

      .close-button:hover {
        opacity: 0.7;
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
    `]}_getIconName(){switch(this.alertType){case`success`:return`check-circle`;case`error`:return`warning-circle`;case`caution`:return`warning`;default:return`info`}}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`alert`),this.hasAttribute(`aria-live`)||this.setAttribute(`aria-live`,`polite`),this.hasAttribute(`aria-atomic`)||this.setAttribute(`aria-atomic`,`true`)}render(){return a`
      <div class="content">
        <span class="alert-icon">
          <mms-icon name=${this._getIconName()} size="md" label=${`${this.alertType} alert`}></mms-icon>
        </span>
        <div class="message-area">
          <p class="message">
            ${this.summary?a`<strong>${this.summary}</strong> `:n}${this.message}
          </p>
          ${this.action?a`
                <mms-link
                  href=${this.actionHref}
                  label=${this.actionText}
                  right-icon="arrow-right"
                  underline="hover"
                  @click=${this._handleActionClick}
                ></mms-link>
              `:n}
        </div>
      </div>
      ${this.dismissible?a`
            <button class="close-button" @click=${this._handleDismiss} aria-label="Dismiss alert">
              <mms-icon name="x" size="sm"></mms-icon>
            </button>
          `:n}
    `}},p([c({type:String,reflect:!0,attribute:`alert-type`})],b.prototype,`alertType`,void 0),p([c({type:Boolean,reflect:!0})],b.prototype,`dismissible`,void 0),p([c({type:Boolean,reflect:!0})],b.prototype,`action`,void 0),p([c({type:String})],b.prototype,`summary`,void 0),p([c({type:String})],b.prototype,`message`,void 0),p([c({type:String,attribute:`action-text`})],b.prototype,`actionText`,void 0),p([c({type:String,attribute:`action-href`})],b.prototype,`actionHref`,void 0),b=p([u(`mms-inline-alert`)],b)})),S=t({Overview:()=>D,PlaygroundStory:()=>O,__namedExportsOrder:()=>k,default:()=>C}),C,w,T,E,D,O,k,A=e((()=>{o(),x(),g(),y(),C={title:`Feedback/Inline Alert`,tags:[`!autodocs`]},w={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},T=`680px`,E=`960px`,D={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${E}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${w.h1}">Inline Alert</h1>
      <p style="${w.body} opacity: 0.85; max-width: ${T}; margin-bottom: 2rem;">
        A contextual message associated with a section, form field, or item on a page — unlike
        <code style="${w.monoSm}">mms-alert-banner</code>'s page-level placement, inline alert is meant to be
        embedded directly alongside the content it refers to. Announced assertively to assistive technology via
        <code style="${w.monoSm}">role="alert"</code>.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${w.h2}">Basic usage</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        Defaults to the <code style="${w.monoSm}">informational</code> type with a close button and no text-link action.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-inline-alert
          summary="Heads up:"
          message="This field will be validated when you submit the form."
        ></mms-inline-alert>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Alert Types -->
      <h2 style="${w.h2}">Alert types</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        Four semantic types: <code style="${w.monoSm}">informational</code> (default),
        <code style="${w.monoSm}">success</code>, <code style="${w.monoSm}">caution</code>, and
        <code style="${w.monoSm}">error</code>. Each pairs a distinct icon with its own accent color.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <mms-inline-alert
          alert-type="informational"
          summary="Informational:"
          message="A newer version of this document is available."
        ></mms-inline-alert>
        <mms-inline-alert
          alert-type="success"
          summary="Success:"
          message="This field was verified successfully."
        ></mms-inline-alert>
        <mms-inline-alert
          alert-type="caution"
          summary="Caution:"
          message="This value could not be automatically confirmed."
        ></mms-inline-alert>
        <mms-inline-alert
          alert-type="error"
          summary="Error:"
          message="This field is required."
        ></mms-inline-alert>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With action -->
      <h2 style="${w.h2}">With a text-link action</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        Setting <code style="${w.monoSm}">action</code> to <code style="${w.monoSm}">true</code> renders a text
        link below the message — off by default, unlike <code style="${w.monoSm}">mms-alert-banner</code>.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-inline-alert
          alert-type="error"
          message="We couldn't verify your address."
          action
          action-text="Edit address"
          action-href="#"
        ></mms-inline-alert>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Without dismiss -->
      <h2 style="${w.h2}">Without a close button</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        Setting <code style="${w.monoSm}">dismissible</code> to <code style="${w.monoSm}">false</code> hides the
        close button — for a message that should persist for the lifetime of its context (e.g. a field-level
        validation error).
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-inline-alert
          alert-type="error"
          message="Password must be at least 8 characters."
          .dismissible=${!1}
        ></mms-inline-alert>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Dismissal -->
      <h2 style="${w.h2}">Dismissal</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        The close button fires a <code style="${w.monoSm}">dismiss</code> event — the host page owns removal from
        the DOM (e.g. <code style="${w.monoSm}">@dismiss=\${() => el.remove()}</code>); the component does not
        remove itself, and has no auto-dismiss timer.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-inline-alert
          alert-type="caution"
          message="Dismiss this alert with the close button — it fires a 'dismiss' event."
        ></mms-inline-alert>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${w.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${w.bodySm} margin: 0;">
          <strong>Why <code style="${w.monoSm}">role="alert"</code>, not <code style="${w.monoSm}">role="status"</code>?</strong>
          Inline Alert is scoped to a specific section, field, or item — its message is directly relevant to
          whatever the user is doing right there (e.g. a validation error on the field they just left).
          <code style="${w.monoSm}">role="alert"</code>'s implicit <code style="${w.monoSm}">aria-live="polite"</code>
          announces it promptly in that immediate context, matching that framing. Use
          <code style="${w.monoSm}">mms-alert-banner</code> instead for page-level status that isn't tied to a
          specific piece of content.
        </p>
      </div>

      <h3 style="${w.h3}">WCAG 2.2 AA Compliance</h3>
      ${v(_[`inline-alert`].rows)}

      <h3 style="${w.h3}">Screen Reader Behavior</h3>
      <ul style="${w.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>On render:</strong> Announces via <code style="${w.monoSm}">role="alert"</code> — summary, message, and action link text are read as content</li>
        <li style="margin-bottom: 0.5rem;"><strong>Alert icon:</strong> Announced via its <code style="${w.monoSm}">aria-label</code> (e.g. "error alert"), not left silent as decorative</li>
        <li style="margin-bottom: 0.5rem;"><strong>Text link:</strong> Announced as a link with its label; focusable independently of the alert container</li>
        <li><strong>Close button:</strong> Announced as "Dismiss alert, button"</li>
      </ul>

      <h3 style="${w.h3}">Keyboard Navigation</h3>
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
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activates the focused text link or close button</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},O={name:`Playground`,tags:[`!dev`],args:{alertType:`informational`,dismissible:!0,action:!1,summary:`Heads up:`,message:`Additional information goes here.`,actionText:`Text link`,actionHref:`#`,theme:`maximus`,density:`default`},argTypes:{alertType:{name:`Alert type`,control:`select`,options:[`informational`,`error`,`success`,`caution`],description:`Semantic type — pairs an alert icon and accent color`,table:{category:`Visual`}},dismissible:{name:`Dismissible`,control:`boolean`,description:`Whether to render the close button`,table:{category:`Visual`}},action:{name:`Show action`,control:`boolean`,description:`Whether to render the text-link action`,table:{category:`Visual`}},summary:{name:`Summary`,control:`text`,description:`Bold lead-in text rendered before the message. Leave empty to omit.`,table:{category:`Content`}},message:{name:`Message`,control:`text`,description:`Regular message text`,table:{category:`Content`}},actionText:{name:`Action text`,control:`text`,description:`Text-link label`,table:{category:`Content`}},actionHref:{name:`Action href`,control:`text`,description:`Text-link URL`,table:{category:`Content`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects typography and link color)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-inline-alert has no compact-specific styling yet`,table:{category:`Global`}}},decorators:[e=>a`
        <div style="padding: 1.5rem 2rem;">
          ${e()}
        </div>
      `],parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.alertType&&n.alertType!==`informational`&&r.push(`alert-type="${n.alertType}"`),n.dismissible===!1&&r.push(".dismissible=${false}"),n.action&&r.push(`action`),n.summary&&r.push(`summary="${n.summary}"`),n.message&&r.push(`message="${n.message}"`),n.action&&n.actionText&&r.push(`action-text="${n.actionText}"`),n.action&&n.actionHref&&r.push(`action-href="${n.actionHref}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-inline-alert\n  ${r.join(`
  `)}\n></mms-inline-alert>`},language:`html`}},controls:{sort:`none`}},render:e=>a`
      <mms-inline-alert
        alert-type=${e.alertType}
        ?dismissible=${e.dismissible}
        ?action=${e.action}
        summary=${e.summary||n}
        message=${e.message}
        action-text=${e.actionText||n}
        action-href=${e.actionHref||n}
        data-density=${e.density===`compact`?`compact`:n}
      ></mms-inline-alert>
    `},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Inline Alert</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A contextual message associated with a section, form field, or item on a page — unlike
        <code style="\${t.monoSm}">mms-alert-banner</code>'s page-level placement, inline alert is meant to be
        embedded directly alongside the content it refers to. Announced assertively to assistive technology via
        <code style="\${t.monoSm}">role="alert"</code>.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Defaults to the <code style="\${t.monoSm}">informational</code> type with a close button and no text-link action.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-inline-alert
          summary="Heads up:"
          message="This field will be validated when you submit the form."
        ></mms-inline-alert>
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
        <mms-inline-alert
          alert-type="informational"
          summary="Informational:"
          message="A newer version of this document is available."
        ></mms-inline-alert>
        <mms-inline-alert
          alert-type="success"
          summary="Success:"
          message="This field was verified successfully."
        ></mms-inline-alert>
        <mms-inline-alert
          alert-type="caution"
          summary="Caution:"
          message="This value could not be automatically confirmed."
        ></mms-inline-alert>
        <mms-inline-alert
          alert-type="error"
          summary="Error:"
          message="This field is required."
        ></mms-inline-alert>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- With action -->
      <h2 style="\${t.h2}">With a text-link action</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Setting <code style="\${t.monoSm}">action</code> to <code style="\${t.monoSm}">true</code> renders a text
        link below the message — off by default, unlike <code style="\${t.monoSm}">mms-alert-banner</code>.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-inline-alert
          alert-type="error"
          message="We couldn't verify your address."
          action
          action-text="Edit address"
          action-href="#"
        ></mms-inline-alert>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Without dismiss -->
      <h2 style="\${t.h2}">Without a close button</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Setting <code style="\${t.monoSm}">dismissible</code> to <code style="\${t.monoSm}">false</code> hides the
        close button — for a message that should persist for the lifetime of its context (e.g. a field-level
        validation error).
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-inline-alert
          alert-type="error"
          message="Password must be at least 8 characters."
          .dismissible=\${false}
        ></mms-inline-alert>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Dismissal -->
      <h2 style="\${t.h2}">Dismissal</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The close button fires a <code style="\${t.monoSm}">dismiss</code> event — the host page owns removal from
        the DOM (e.g. <code style="\${t.monoSm}">@dismiss=\\\${() => el.remove()}</code>); the component does not
        remove itself, and has no auto-dismiss timer.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-inline-alert
          alert-type="caution"
          message="Dismiss this alert with the close button — it fires a 'dismiss' event."
        ></mms-inline-alert>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Why <code style="\${t.monoSm}">role="alert"</code>, not <code style="\${t.monoSm}">role="status"</code>?</strong>
          Inline Alert is scoped to a specific section, field, or item — its message is directly relevant to
          whatever the user is doing right there (e.g. a validation error on the field they just left).
          <code style="\${t.monoSm}">role="alert"</code>'s implicit <code style="\${t.monoSm}">aria-live="polite"</code>
          announces it promptly in that immediate context, matching that framing. Use
          <code style="\${t.monoSm}">mms-alert-banner</code> instead for page-level status that isn't tied to a
          specific piece of content.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['inline-alert'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>On render:</strong> Announces via <code style="\${t.monoSm}">role="alert"</code> — summary, message, and action link text are read as content</li>
        <li style="margin-bottom: 0.5rem;"><strong>Alert icon:</strong> Announced via its <code style="\${t.monoSm}">aria-label</code> (e.g. "error alert"), not left silent as decorative</li>
        <li style="margin-bottom: 0.5rem;"><strong>Text link:</strong> Announced as a link with its label; focusable independently of the alert container</li>
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
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activates the focused text link or close button</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    alertType: 'informational' as InlineAlertType,
    dismissible: true,
    action: false,
    summary: 'Heads up:',
    message: 'Additional information goes here.',
    actionText: 'Text link',
    actionHref: '#',
    theme: 'maximus',
    density: 'default'
  },
  argTypes: {
    // ── Visual ────────────────────────────────────────────────
    alertType: {
      name: 'Alert type',
      control: 'select',
      options: ['informational', 'error', 'success', 'caution'],
      description: 'Semantic type — pairs an alert icon and accent color',
      table: {
        category: 'Visual'
      }
    },
    dismissible: {
      name: 'Dismissible',
      control: 'boolean',
      description: 'Whether to render the close button',
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
      description: 'Accepted as a global attribute passthrough — mms-inline-alert has no compact-specific styling yet',
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
          if (a.dismissible === false) attrs.push('.dismissible=\${false}');
          if (a.action) attrs.push('action');
          if (a.summary) attrs.push(\`summary="\${a.summary}"\`);
          if (a.message) attrs.push(\`message="\${a.message}"\`);
          if (a.action && a.actionText) attrs.push(\`action-text="\${a.actionText}"\`);
          if (a.action && a.actionHref) attrs.push(\`action-href="\${a.actionHref}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-inline-alert\\n  \${attrs.join('\\n  ')}\\n></mms-inline-alert>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none' // Preserve argTypes definition order
    }
  },
  render: (args: {
    alertType: InlineAlertType;
    dismissible: boolean;
    action: boolean;
    summary: string;
    message: string;
    actionText: string;
    actionHref: string;
    theme: string;
    density: string;
  }) => {
    return html\`
      <mms-inline-alert
        alert-type=\${args.alertType}
        ?dismissible=\${args.dismissible}
        ?action=\${args.action}
        summary=\${args.summary || nothing}
        message=\${args.message}
        action-text=\${args.actionText || nothing}
        action-href=\${args.actionHref || nothing}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
      ></mms-inline-alert>
    \`;
  }
}`,...O.parameters?.docs?.source}}},k=[`Overview`,`PlaygroundStory`]}));A();export{D as Overview,O as PlaygroundStory,k as __namedExportsOrder,C as default,A as n,S as t};