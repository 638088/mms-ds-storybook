import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-B0BZwaT1.js";import{E as s,S as c,T as l,_ as u,g as d,h as f,m as p,n as m,p as ee,r as te,t as ne,w as h}from"./mms-icon.component-DFVI3nJi.js";import{n as g,t as _}from"./validate-color-scheme-CB3dwOoW.js";import{c as v}from"./iframe-BrFFNKAP.js";import{n as y,t as b}from"./print.css-DylLNsDy.js";import{n as re,t as ie}from"./localize-DGaV1nF3.js";import{i as ae,n as oe,r as se}from"./theme-constraints-BnNpJNRe.js";import{n as ce,r as le}from"./wcag-coverage-DNhlI7v1.js";import{t as ue}from"./mms-inline-alert.component-Byp5LNfw.js";import{a as x,c as de,d as S,i as C,n as fe,o as pe,r as w,u as T}from"./doc-styles-DkvR_Qyb.js";import{a as E,n as D}from"./a11y-outcome-BzyoULsn.js";import{i as O,n as k,t as A}from"./ref-Cvr26Ksx.js";import{t as j}from"./mms-text-field.component-DPUzfOvQ.js";var M,N,P=e((()=>{o(),s(),y(),d(),f(),_(),ne(),v(),re(),te(),M=[`a[href]`,`button:not([disabled])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`,`mms-button:not([disabled])`,`mms-link`,`mms-text-field:not([disabled])`].join(`,`),N=class extends i{constructor(...e){super(...e),this.localize=new ie(this),this.size=`xl`,this.open=!1,this.titleText=``,this.description=!0,this.descText=``,this.closeIcon=!0,this.tertiaryLabel=``,this.colorScheme=`onyx`,this.alertType=`none`,this._previouslyFocused=null,this._boundEscapeKeyDown=this._handleEscapeKeyDown.bind(this),this._boundFocusTrapKeyDown=this._handleFocusTrapKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this._boundEscapeKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this._boundEscapeKeyDown),document.removeEventListener(`keydown`,this._boundFocusTrapKeyDown)}firstUpdated(){g(this,this._footerColorScheme(),`mms-modal`)}updated(e){super.updated(e),e.has(`open`)&&(this.open?this._activateFocusTrap():this._deactivateFocusTrap())}_handleEscapeKeyDown(e){this.open&&e.key===`Escape`&&this._handleClose(`escape-key`)}_getFocusableElements(){if(!this._dialogEl)return[];let e=Array.from(this._dialogEl.querySelectorAll(M)),t=this.shadowRoot?.querySelector(`slot`),n=(t?t.assignedElements({flatten:!0}):[]).flatMap(e=>e.matches(M)?[e]:Array.from(e.querySelectorAll(M)));return[...e,...n].filter(e=>{let t=getComputedStyle(e);return t.display!==`none`&&t.visibility!==`hidden`})}_activateFocusTrap(){this._previouslyFocused=document.activeElement,document.addEventListener(`keydown`,this._boundFocusTrapKeyDown),requestAnimationFrame(()=>{this._getFocusableElements()[0]?.focus()})}_deactivateFocusTrap(){document.removeEventListener(`keydown`,this._boundFocusTrapKeyDown),this._previouslyFocused?.focus(),this._previouslyFocused=null}_handleFocusTrapKeyDown(e){if(e.key!==`Tab`)return;let t=this._getFocusableElements();if(t.length===0)return;let n=t[0],r=t[t.length-1],i=this.shadowRoot?.activeElement;e.shiftKey&&i===n?(e.preventDefault(),r.focus()):!e.shiftKey&&i===r&&(e.preventDefault(),n.focus())}_handleClose(e){this.open=!1,this.dispatchEvent(new CustomEvent(`close`,{detail:{source:e},bubbles:!0,composed:!0}))}_handleOverlayClick(e){e.target===e.currentTarget&&this._handleClose(`overlay-click`)}_handlePrimaryClick(){this.dispatchEvent(new CustomEvent(`primary-click`,{bubbles:!0,composed:!0}))}_handleSecondaryClick(){this.dispatchEvent(new CustomEvent(`secondary-click`,{bubbles:!0,composed:!0})),this._handleClose(`secondary-button`)}_handleTertiaryClick(){this.dispatchEvent(new CustomEvent(`tertiary-click`,{bubbles:!0,composed:!0}))}_footerColorScheme(){return this.alertType===`destructive`?`error`:this.colorScheme}_renderFooter(){let e=this._footerColorScheme();return a`
      ${this.tertiaryLabel?a`
            <mms-button
              variant="ghost"
              color-scheme=${e}
              label=${this.tertiaryLabel}
              @click=${this._handleTertiaryClick}
            ></mms-button>
          `:n}
      <div class="footer-spacer"></div>
      <div class="action-group">
        ${this.secondaryLabel??this.localize.term(`cancel`)?a`
              <mms-button
                variant="secondary"
                color-scheme=${e}
                label=${this.secondaryLabel??this.localize.term(`cancel`)}
                @click=${this._handleSecondaryClick}
              ></mms-button>
            `:n}
        <mms-button
          variant="primary"
          color-scheme=${e}
          label=${this.primaryLabel??this.localize.term(`confirm`)}
          @click=${this._handlePrimaryClick}
        ></mms-button>
      </div>
    `}render(){let e=this.description&&this.descText;return a`
      <div class="overlay" @click=${this._handleOverlayClick}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby=${e?`modal-desc`:n}
        >
          <div class="header">
            <div class="header-text">
              <h2 class="title" id="modal-title">${this.titleText}</h2>
            </div>
            ${this.closeIcon?a`
                  <div class="close-frame">
                    <button
                      class="close-button"
                      @click=${()=>this._handleClose(`close-button`)}
                      aria-label=${this.localize.term(`closeModal`)}
                    >
                      <mms-icon name="x" size="md"></mms-icon>
                    </button>
                  </div>
                `:n}
          </div>

          <div class="body">
            <div class="content-frame">
              ${e?a`<p class="message" id="modal-desc">${this.descText}</p>`:n}
              <slot></slot>
            </div>
          </div>

          <div class="footer">${this._renderFooter()}</div>
        </div>
      </div>
    `}static{this.styles=[l,b,ee,p,r`
      :host {
        display: none;
      }

      :host([open]) {
        display: block;
        position: fixed;
        inset: 0;
        z-index: 1000;
      }

      .overlay {
        position: fixed;
        inset: 0;
        background: var(--color-overlay-scrim);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-lg1);
      }

      .dialog {
        display: flex;
        flex-direction: column;
        background: var(--color-surface-raised);
        box-shadow: var(--elevation-xl);
        border-radius: var(--radius-md);
        max-height: 80%;
        overflow: hidden;
        width: 100%;
      }

      /* Forced colors removes box-shadow, which is all that sets this surface apart from the page. */
      @media (forced-colors: active) {
        .dialog {
          outline: 1px solid CanvasText;
          outline-offset: -1px;
        }
      }

      :host([size='xl']) .dialog {
        max-width: 1140px;
      }

      :host([size='lg']) .dialog {
        max-width: 800px;
      }

      :host([size='md']) .dialog {
        max-width: 640px;
      }

      :host([size='sm']) .dialog {
        max-width: 320px;
      }

      .header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--spacing-md1);
        padding: var(--spacing-lg2) var(--spacing-lg2) 0;
      }

      :host([size='sm']) .header {
        padding: var(--spacing-lg1) var(--spacing-lg1) 0;
      }

      .header-text {
        flex: 1;
        min-width: 0;
      }

      .title {
        margin: 0;
        font-family: var(--type-heading-3-family);
        font-size: var(--type-heading-3-size);
        line-height: var(--type-heading-3-line-height);
        font-weight: var(--font-weight-bold);
        color: var(--color-text-default);
      }

      :host([size='md']) .title,
      :host([size='sm']) .title {
        font-family: var(--type-heading-5-family);
        font-size: var(--type-heading-5-size);
        line-height: var(--type-heading-5-line-height);
      }

      .close-frame {
        flex-shrink: 0;
      }

      .close-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-md1);
        margin: calc(var(--spacing-md1) * -1);
        background: none;
        border: none;
        cursor: pointer;
        color: var(--color-text-default);
        border-radius: var(--radius-xs);
      }

      /* Transparent-by-default control: step-3 hover fill, same as the card's
         expand control and side-nav items — not a fade of the whole button. */
      .close-button:hover {
        background: var(--color-surface-hover);
      }

      .close-button:focus-visible {
        outline-offset: 2px;
      }

      .body {
        overflow-y: auto;
        padding: var(--spacing-md1) var(--spacing-lg2);
      }

      :host([size='sm']) .body {
        padding: var(--spacing-md1) var(--spacing-lg1);
      }

      .content-frame {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md1);
      }

      .message {
        margin: 0;
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--font-weight-regular);
        color: var(--color-text-default);
      }

      .footer {
        display: flex;
        align-items: center;
        gap: var(--spacing-md1);
        padding: var(--spacing-lg1) var(--spacing-lg2);
      }

      .action-group {
        display: flex;
        align-items: center;
        gap: var(--spacing-md1);
      }

      .footer-spacer {
        flex: 1;
      }

      :host([size='sm']) .footer {
        padding: var(--spacing-lg1);
      }

      :host([size='sm']) .action-group {
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      :host([size='sm']) .action-group mms-button {
        flex: 0 0 auto;
        white-space: nowrap;
      }
    `]}},m([c({type:String,reflect:!0})],N.prototype,`size`,void 0),m([c({type:Boolean,reflect:!0})],N.prototype,`open`,void 0),m([c({type:String,attribute:`title-text`})],N.prototype,`titleText`,void 0),m([c({type:Boolean})],N.prototype,`description`,void 0),m([c({type:String,attribute:`desc-text`})],N.prototype,`descText`,void 0),m([c({type:Boolean,attribute:`close-icon`})],N.prototype,`closeIcon`,void 0),m([c({type:String,attribute:`primary-label`})],N.prototype,`primaryLabel`,void 0),m([c({type:String,attribute:`secondary-label`})],N.prototype,`secondaryLabel`,void 0),m([c({type:String,attribute:`tertiary-label`})],N.prototype,`tertiaryLabel`,void 0),m([c({type:String,reflect:!0,attribute:`color-scheme`})],N.prototype,`colorScheme`,void 0),m([c({type:String,reflect:!0,attribute:`alert-type`})],N.prototype,`alertType`,void 0),m([u(`.dialog`)],N.prototype,`_dialogEl`,void 0),N=m([h(`mms-modal`)],N)})),F=t({Overview:()=>X,PlaygroundStory:()=>Z,__namedExportsOrder:()=>Q,default:()=>R});function I(e){e.value&&(e.value.open=!0)}function L(e,t){if(J.has(e))return;J.add(e);let n=()=>{let n=e.shadowRoot?.querySelector(`.overlay`),r=e.shadowRoot?.querySelector(`.header`),i=e.shadowRoot?.querySelector(`.body`),a=e.shadowRoot?.querySelector(`.footer`);if(!n||!r||!i||!a)return;let o=parseFloat(getComputedStyle(n).paddingTop)||0,s=(r.getBoundingClientRect().height+i.scrollHeight+a.getBoundingClientRect().height)/.8+o*2;t.style.height=`${Math.ceil(Math.min(s,Y))}px`},r=new ResizeObserver(n),i=e.shadowRoot?.querySelector(`.content-frame`);i&&r.observe(i);let a=e.shadowRoot?.querySelector(`.header`);a&&r.observe(a);let o=e.shadowRoot?.querySelector(`.footer`);o&&r.observe(o),new MutationObserver(n).observe(e,{attributes:!0,attributeFilter:[`size`]}),n()}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{o(),A(),P(),ue(),v(),j(),se(),ce(),D(),de(),R={title:`Feedback/Modal`,tags:[`!autodocs`],parameters:{layout:`fullscreen`}},z=k(),B=k(),V=k(),H=k(),U=k(),W=k(),G=k(),K=k(),q=k(),J=new WeakSet,Y=900,X={name:`Overview`,parameters:{layout:`padded`},render:()=>a`
    <div data-theme=${w} data-mode=${pe()} style=${fe}>

      <!-- Header -->
      <h1 style="${S.h1}">Modal</h1>
      <p style="${S.body} ${x.muted} max-width: ${C}; margin-bottom: ${T.subsection};">
        A dialog overlay for content or decisions that require the user's focused attention.
        Traps keyboard focus while open, restores focus to the invoking element on close, and
        closes via close button, overlay click, or Escape.
      </p>

      <hr style="${x.divider}" />

      <!-- Basic Usage -->
      <h2 style="${S.h2}">Basic usage</h2>
      <p style="${S.bodySm} ${x.muted} max-width: ${C}; margin-bottom: ${T.subsection};">
        A title, a description, and primary/secondary actions in the footer.
      </p>

      <div style="margin-bottom: ${T.subsection};">
        <mms-button variant="secondary" label="Open modal" @click=${()=>I(z)}></mms-button>
        <mms-modal
          ${O(z)}
          title-text="Save changes?"
          desc-text="Your changes will be saved and applied immediately."
          primary-label="Save"
          secondary-label="Cancel"
        ></mms-modal>
      </div>

      <hr style="${x.divider}" />

      <!-- Sizes -->
      <h2 style="${S.h2}">Sizes</h2>
      <p style="${S.bodySm} ${x.muted} max-width: ${C}; margin-bottom: ${T.subsection};">
        Four sizes control the dialog's max-width: <code style="${S.monoSm}">xl</code> (default, 1140px),
        <code style="${S.monoSm}">lg</code> (800px), <code style="${S.monoSm}">md</code> (640px),
        and <code style="${S.monoSm}">sm</code> (320px). <code style="${S.monoSm}">sm</code>
        also stacks footer actions full-width, for compact confirmation prompts.
      </p>

      <div style="display: flex; gap: ${T.content}; flex-wrap: wrap; margin-bottom: ${T.subsection};">
        <mms-button variant="secondary" label="Open xl" @click=${()=>I(B)}></mms-button>
        <mms-modal ${O(B)} size="xl" title-text="XL (1140px)" desc-text="Used for content-rich dialogs."></mms-modal>

        <mms-button variant="secondary" label="Open lg" @click=${()=>I(V)}></mms-button>
        <mms-modal ${O(V)} size="lg" title-text="LG (800px)" desc-text="Used for standard forms and decisions."></mms-modal>

        <mms-button variant="secondary" label="Open md" @click=${()=>I(H)}></mms-button>
        <mms-modal ${O(H)} size="md" title-text="MD (640px)" desc-text="Used for shorter confirmations."></mms-modal>

        <mms-button variant="secondary" label="Open sm" @click=${()=>I(U)}></mms-button>
        <mms-modal ${O(U)} size="sm" title-text="Are you sure?" desc-text="Full-width stacked actions." primary-label="Confirm" secondary-label="Cancel"></mms-modal>
      </div>

      <hr style="${x.divider}" />

      <!-- Tertiary Action -->
      <h2 style="${S.h2}">Tertiary action</h2>
      <p style="${S.bodySm} ${x.muted} max-width: ${C}; margin-bottom: ${T.subsection};">
        Setting <code style="${S.monoSm}">tertiary-label</code> adds a ghost-variant action, left-aligned
        opposite the primary/secondary group. Use for a low-emphasis option like "Learn more" that
        doesn't close the dialog.
      </p>

      <div style="margin-bottom: ${T.subsection};">
        <mms-button variant="secondary" label="Open modal" @click=${()=>I(W)}></mms-button>
        <mms-modal
          ${O(W)}
          title-text="Enable two-factor authentication?"
          desc-text="Adds an extra verification step when signing in."
          primary-label="Enable"
          secondary-label="Not now"
          tertiary-label="Learn more"
        ></mms-modal>
      </div>

      <hr style="${x.divider}" />

      <!-- Without close icon -->
      <h2 style="${S.h2}">Without the close icon</h2>
      <p style="${S.bodySm} ${x.muted} max-width: ${C}; margin-bottom: ${T.subsection};">
        <code style="${S.monoSm}">close-icon</code> defaults to <code style="${S.monoSm}">true</code>.
        To hide it, set the <code style="${S.monoSm}">closeIcon</code> property to <code style="${S.monoSm}">false</code>
        directly (e.g. <code style="${S.monoSm}">el.closeIcon = false</code> or a template's
        <code style="${S.monoSm}">.closeIcon=\${false}</code> binding) — as a boolean property, its plain-HTML
        attribute form has no falsy representation, so <code style="${S.monoSm}">close-icon="false"</code>
        in static markup would still evaluate true. Use this to force a decision through the footer actions only.
      </p>

      <div style="margin-bottom: ${T.subsection};">
        <mms-button variant="secondary" label="Open modal" @click=${()=>I(G)}></mms-button>
        <mms-modal
          ${O(G)}
          .closeIcon=${!1}
          size="md"
          title-text="Confirm cancellation"
          desc-text="You must choose an option below to continue."
          primary-label="Cancel plan"
          secondary-label="Keep plan"
        ></mms-modal>
      </div>

      <hr style="${x.divider}" />

      <!-- Rich content slot -->
      <h2 style="${S.h2}">Rich content</h2>
      <p style="${S.bodySm} ${x.muted} max-width: ${C}; margin-bottom: ${T.subsection};">
        The default slot accepts any markup as light DOM children, rendered below the description —
        forms, lists, custom components, anything. The slot itself has no opinion about its content;
        a text field is shown below purely as one example. Slotted focusable elements participate in
        the same focus trap as the footer actions.
      </p>

      <div style="margin-bottom: ${T.subsection};">
        <mms-button variant="secondary" label="Open modal" @click=${()=>I(K)}></mms-button>
        <mms-modal
          ${O(K)}
          size="lg"
          title-text="Update your address"
          desc-text="This will be used for all future correspondence."
          primary-label="Save address"
          secondary-label="Cancel"
        >
          <mms-text-field label="Street address"></mms-text-field>
        </mms-modal>
      </div>

      <hr style="${x.divider}" />

      <!-- Destructive alert -->
      <h2 style="${S.h2}">Destructive alert</h2>
      <p style="${S.bodySm} ${x.muted} max-width: ${C}; margin-bottom: ${T.subsection};">
        Setting <code style="${S.monoSm}">alert-type="destructive"</code> overrides every footer
        button's color scheme to <code style="${S.monoSm}">error</code> — the structural
        destructive-action red — regardless of the <code style="${S.monoSm}">color-scheme</code>
        prop. Use for irreversible actions like delete or permanent removal.
      </p>

      <div style="margin-bottom: ${T.subsection};">
        <mms-button variant="secondary" label="Open modal" @click=${()=>I(q)}></mms-button>
        <mms-modal
          ${O(q)}
          alert-type="destructive"
          size="sm"
          title-text="Delete this item?"
          desc-text="This action cannot be undone."
          primary-label="Delete"
          secondary-label="Cancel"
        ></mms-modal>
      </div>

      <hr style="${x.divider}" />

      <!-- Accessibility -->
      <h2 style="${S.h2}">Accessibility</h2>

      <div style="margin-bottom: ${T.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Escape is the documented exit method."
          message="Trapping focus inside a dialog would otherwise violate WCAG 2.1.2 (No Keyboard Trap). The Escape key satisfies the criterion's &quot;standard exit method&quot; exception, so mms-modal always closes on Escape regardless of which element currently has focus."
        ></mms-inline-alert>
      </div>

      <h3 style="${S.h3}">WCAG 2.2 AA compliance</h3>
      ${E(le.modal.rows)}

      <h3 style="${S.h3}">Screen reader behavior</h3>
      <ul style="${S.bodySm} margin-bottom: ${T.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${T.label};"><strong>Open:</strong> Announces the dialog role and title as focus moves to the first focusable element</li>
        <li style="margin-bottom: ${T.label};"><strong>Description:</strong> Read automatically as part of the dialog's accessible description via <code style="${S.monoSm}">aria-describedby</code></li>
        <li style="margin-bottom: ${T.label};"><strong>Close button:</strong> Announced as "Close modal, button" regardless of visible label (icon-only)</li>
        <li><strong>Close:</strong> Focus and announcement return to the element that opened the dialog</li>
      </ul>

      <h3 style="${S.h3}">Keyboard navigation</h3>
      <table style="${x.table}">
        <thead>
          <tr>
            <th style="${x.th} width: 140px;">Key</th>
            <th style="${x.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${x.td}"><kbd style="${x.kbd}">Tab</kbd></td>
            <td style="${x.td}">Move to the next focusable element; wraps from the last to the first</td>
          </tr>
          <tr>
            <td style="${x.td}"><kbd style="${x.kbd}">Shift</kbd> + <kbd style="${x.kbd}">Tab</kbd></td>
            <td style="${x.td}">Move to the previous focusable element; wraps from the first to the last</td>
          </tr>
          <tr>
            <td style="${x.td}"><kbd style="${x.kbd}">Escape</kbd></td>
            <td style="${x.td}">Close the dialog and restore focus to the invoking element</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},Z={name:`Playground`,tags:[`!dev`],args:{size:`md`,closeIcon:!0,titleText:`Save changes?`,description:!0,descText:`Your changes will be saved and applied immediately.`,primaryLabel:`Save`,secondaryLabel:`Cancel`,tertiaryLabel:``,richContent:!1,colorScheme:`primary`,alertType:`none`,theme:`maximus`,density:`default`},argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`,`xl`],description:`Dialog max-width and footer layout (sm stacks actions full-width)`,table:{category:`Behavior`}},closeIcon:{name:`Close icon`,control:`boolean`,description:`Shows the icon-only close button in the header. Default true — this control uses a property binding, so it toggles correctly here, but a plain HTML attribute cannot represent the false state (see Overview).`,table:{category:`Behavior`}},titleText:{name:`Title text`,control:`text`,description:`Dialog title, rendered as the accessible name`,table:{category:`Content`}},description:{name:`Show description`,control:`boolean`,description:`Whether to render the description paragraph`,table:{category:`Content`}},descText:{name:`Description text`,control:`text`,description:`Description paragraph content`,table:{category:`Content`}},primaryLabel:{name:`Primary label`,control:`text`,description:`Primary action button label — always rendered`,table:{category:`Content`}},secondaryLabel:{name:`Secondary label`,control:`text`,description:`Secondary action button label — hidden when empty`,table:{category:`Content`}},tertiaryLabel:{name:`Tertiary label`,control:`text`,description:`Ghost-variant action label, left-aligned — hidden when empty`,table:{category:`Content`}},richContent:{name:`Rich content (slot)`,control:`boolean`,description:`The default slot accepts any markup as light DOM children — form fields, lists, custom components, anything — rendered below the description. This toggle inserts a text field purely as one example of what can go there; the slot has no opinion about its content. Slotted focusable elements join the same focus trap as the footer actions.`,table:{category:`Content`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Color palette for the footer action buttons. "onyx" is structural (works on all themes) and is the default. Brand colors (primary/secondary/accent) availability depends on theme. Ignored when Alert Type is "destructive".`,table:{category:`Component Props`}},alertType:{name:`Alert Type`,control:`select`,options:[`none`,`destructive`],description:`"destructive" overrides all footer buttons to the structural error colorScheme, regardless of Color Scheme. Use for irreversible actions.`,table:{category:`Component Props`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme (affects typography and action colors)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-modal has no compact-specific styling yet, since dialog chrome padding is intentionally fixed regardless of density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[`open`];n.size&&n.size!==`xl`&&r.push(`size="${n.size}"`),n.titleText&&r.push(`title-text="${n.titleText}"`),n.description===!1&&r.push(".description=${false}"),n.descText&&r.push(`desc-text="${n.descText}"`),n.closeIcon===!1&&r.push(".closeIcon=${false}"),n.primaryLabel&&n.primaryLabel!==`Confirm`&&r.push(`primary-label="${n.primaryLabel}"`),n.secondaryLabel&&n.secondaryLabel!==`Cancel`&&r.push(`secondary-label="${n.secondaryLabel}"`),n.tertiaryLabel&&r.push(`tertiary-label="${n.tertiaryLabel}"`),n.alertType&&n.alertType!==`none`&&r.push(`alert-type="${n.alertType}"`),n.colorScheme&&n.colorScheme!==`onyx`&&n.alertType!==`destructive`&&r.push(`color-scheme="${n.colorScheme}"`),n.density===`compact`&&r.push(`data-density="compact"`);let i=`<mms-modal\n  ${r.join(`
  `)}\n>`;return n.richContent?`${i}\n  <mms-text-field label="Street address"></mms-text-field>\n</mms-modal>`:`${i}\n</mms-modal>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=k(),r=k();queueMicrotask(async()=>{let e=t.value,n=r.value;!e||!n||(await e.updateComplete,L(e,n))});let i=e.alertType===`destructive`?`error`:e.colorScheme,o=ae(e.theme,i),s=oe(e.theme,i);if(!o){let t=s===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,n=s===2?`Lacks step 10 (hover state). Use for branded text or badges, not interactive footer buttons.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return a`
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
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${i}</code> colorScheme
            <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
              <strong style="color: #991b1b !important;">${t}:</strong> ${n}
            </p>
            <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7; color: #991b1b !important;">
              See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
            </p>
          </div>
        </div>
      `}return a`
      <div
        ${O(r)}
        style="position: relative; overflow: hidden; transform: translateZ(0); height: 500px;"
      >
        <mms-modal
          ${O(t)}
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
          alert-type=${e.alertType}
          data-density=${e.density===`compact`?`compact`:n}
          @close=${e=>{e.target.open=!0}}
        >
          ${e.richContent?a`
                <mms-text-field label="Street address"></mms-text-field>
                <p style="${S.caption} margin-top: 0.5rem; opacity: 0.6; font-style: italic;">
                  Example only — the slot accepts any markup. Enabling this doesn't add
                  <code>mms-text-field</code> as a dependency, and the slot isn't limited to
                  text fields or any specific component; forms, lists, custom panels, anything
                  can go here.
                </p>
              `:n}
        </mms-modal>
      </div>
    `}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  parameters: {
    layout: 'padded'
  },
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Modal</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A dialog overlay for content or decisions that require the user's focused attention.
        Traps keyboard focus while open, restores focus to the invoking element on close, and
        closes via close button, overlay click, or Escape.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A title, a description, and primary/secondary actions in the footer.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-button variant="secondary" label="Open modal" @click=\${() => openModal(basicRef)}></mms-button>
        <mms-modal
          \${ref(basicRef)}
          title-text="Save changes?"
          desc-text="Your changes will be saved and applied immediately."
          primary-label="Save"
          secondary-label="Cancel"
        ></mms-modal>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Four sizes control the dialog's max-width: <code style="\${t.monoSm}">xl</code> (default, 1140px),
        <code style="\${t.monoSm}">lg</code> (800px), <code style="\${t.monoSm}">md</code> (640px),
        and <code style="\${t.monoSm}">sm</code> (320px). <code style="\${t.monoSm}">sm</code>
        also stacks footer actions full-width, for compact confirmation prompts.
      </p>

      <div style="display: flex; gap: \${space.content}; flex-wrap: wrap; margin-bottom: \${space.subsection};">
        <mms-button variant="secondary" label="Open xl" @click=\${() => openModal(sizeXlRef)}></mms-button>
        <mms-modal \${ref(sizeXlRef)} size="xl" title-text="XL (1140px)" desc-text="Used for content-rich dialogs."></mms-modal>

        <mms-button variant="secondary" label="Open lg" @click=\${() => openModal(sizeLgRef)}></mms-button>
        <mms-modal \${ref(sizeLgRef)} size="lg" title-text="LG (800px)" desc-text="Used for standard forms and decisions."></mms-modal>

        <mms-button variant="secondary" label="Open md" @click=\${() => openModal(sizeMdRef)}></mms-button>
        <mms-modal \${ref(sizeMdRef)} size="md" title-text="MD (640px)" desc-text="Used for shorter confirmations."></mms-modal>

        <mms-button variant="secondary" label="Open sm" @click=\${() => openModal(sizeSmRef)}></mms-button>
        <mms-modal \${ref(sizeSmRef)} size="sm" title-text="Are you sure?" desc-text="Full-width stacked actions." primary-label="Confirm" secondary-label="Cancel"></mms-modal>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Tertiary Action -->
      <h2 style="\${t.h2}">Tertiary action</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Setting <code style="\${t.monoSm}">tertiary-label</code> adds a ghost-variant action, left-aligned
        opposite the primary/secondary group. Use for a low-emphasis option like "Learn more" that
        doesn't close the dialog.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-button variant="secondary" label="Open modal" @click=\${() => openModal(tertiaryRef)}></mms-button>
        <mms-modal
          \${ref(tertiaryRef)}
          title-text="Enable two-factor authentication?"
          desc-text="Adds an extra verification step when signing in."
          primary-label="Enable"
          secondary-label="Not now"
          tertiary-label="Learn more"
        ></mms-modal>
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
        <mms-button variant="secondary" label="Open modal" @click=\${() => openModal(noCloseIconRef)}></mms-button>
        <mms-modal
          \${ref(noCloseIconRef)}
          .closeIcon=\${false}
          size="md"
          title-text="Confirm cancellation"
          desc-text="You must choose an option below to continue."
          primary-label="Cancel plan"
          secondary-label="Keep plan"
        ></mms-modal>
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
        <mms-button variant="secondary" label="Open modal" @click=\${() => openModal(richContentRef)}></mms-button>
        <mms-modal
          \${ref(richContentRef)}
          size="lg"
          title-text="Update your address"
          desc-text="This will be used for all future correspondence."
          primary-label="Save address"
          secondary-label="Cancel"
        >
          <mms-text-field label="Street address"></mms-text-field>
        </mms-modal>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Destructive alert -->
      <h2 style="\${t.h2}">Destructive alert</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Setting <code style="\${t.monoSm}">alert-type="destructive"</code> overrides every footer
        button's color scheme to <code style="\${t.monoSm}">error</code> — the structural
        destructive-action red — regardless of the <code style="\${t.monoSm}">color-scheme</code>
        prop. Use for irreversible actions like delete or permanent removal.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-button variant="secondary" label="Open modal" @click=\${() => openModal(destructiveRef)}></mms-button>
        <mms-modal
          \${ref(destructiveRef)}
          alert-type="destructive"
          size="sm"
          title-text="Delete this item?"
          desc-text="This action cannot be undone."
          primary-label="Delete"
          secondary-label="Cancel"
        ></mms-modal>
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
          message="Trapping focus inside a dialog would otherwise violate WCAG 2.1.2 (No Keyboard Trap). The Escape key satisfies the criterion's &quot;standard exit method&quot; exception, so mms-modal always closes on Escape regardless of which element currently has focus."
        ></mms-inline-alert>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['modal'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} margin-bottom: \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Open:</strong> Announces the dialog role and title as focus moves to the first focusable element</li>
        <li style="margin-bottom: \${space.label};"><strong>Description:</strong> Read automatically as part of the dialog's accessible description via <code style="\${t.monoSm}">aria-describedby</code></li>
        <li style="margin-bottom: \${space.label};"><strong>Close button:</strong> Announced as "Close modal, button" regardless of visible label (icon-only)</li>
        <li><strong>Close:</strong> Focus and announcement return to the element that opened the dialog</li>
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
            <td style="\${doc.td}">Move to the next focusable element; wraps from the last to the first</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Shift</kbd> + <kbd style="\${doc.kbd}">Tab</kbd></td>
            <td style="\${doc.td}">Move to the previous focusable element; wraps from the first to the last</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Escape</kbd></td>
            <td style="\${doc.td}">Close the dialog and restore focus to the invoking element</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Behavior
    size: 'md' as ModalSize,
    closeIcon: true,
    // Content
    titleText: 'Save changes?',
    description: true,
    descText: 'Your changes will be saved and applied immediately.',
    primaryLabel: 'Save',
    secondaryLabel: 'Cancel',
    tertiaryLabel: '',
    richContent: false,
    colorScheme: 'primary',
    alertType: 'none',
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
      description: 'Dialog max-width and footer layout (sm stacks actions full-width)',
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
      description: 'Dialog title, rendered as the accessible name',
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
      description: 'Primary action button label — always rendered',
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
      description: 'Color palette for the footer action buttons. "onyx" is structural (works on all themes) and is the default. Brand colors (primary/secondary/accent) availability depends on theme. Ignored when Alert Type is "destructive".',
      table: {
        category: 'Component Props'
      }
    },
    alertType: {
      name: 'Alert Type',
      control: 'select',
      options: ['none', 'destructive'],
      description: '"destructive" overrides all footer buttons to the structural error colorScheme, regardless of Color Scheme. Use for irreversible actions.',
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
      description: 'Accepted as a global attribute passthrough — mms-modal has no compact-specific styling yet, since dialog chrome padding is intentionally fixed regardless of density',
      table: {
        category: 'Global'
      }
    }
  },
  parameters: {
    docs: {
      // No fixed iframeHeight — syncPlaygroundCanvasHeight() below measures the
      // actual rendered modal and drives the wrapper's height from that instead.
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
          if (a.primaryLabel && a.primaryLabel !== 'Confirm') attrs.push(\`primary-label="\${a.primaryLabel}"\`);
          if (a.secondaryLabel && a.secondaryLabel !== 'Cancel') attrs.push(\`secondary-label="\${a.secondaryLabel}"\`);
          if (a.tertiaryLabel) attrs.push(\`tertiary-label="\${a.tertiaryLabel}"\`);
          if (a.alertType && a.alertType !== 'none') attrs.push(\`alert-type="\${a.alertType}"\`);
          if (a.colorScheme && a.colorScheme !== 'onyx' && a.alertType !== 'destructive') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          const openTag = \`<mms-modal\\n  \${attrs.join('\\n  ')}\\n>\`;
          if (a.richContent) {
            return \`\${openTag}\\n  <mms-text-field label="Street address"></mms-text-field>\\n</mms-modal>\`;
          }
          return \`\${openTag}\\n</mms-modal>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none' // Preserve argTypes definition order
    }
  },
  render: (args: {
    size: ModalSize;
    closeIcon: boolean;
    titleText: string;
    description: boolean;
    descText: string;
    primaryLabel: string;
    secondaryLabel: string;
    tertiaryLabel: string;
    richContent: boolean;
    colorScheme: ColorScheme;
    alertType: 'none' | 'destructive';
    theme: Theme;
    density: string;
  }) => {
    const playgroundRef = createRef<MmsModal>();
    const rootRef = createRef<HTMLDivElement>();
    queueMicrotask(async () => {
      const modal = playgroundRef.value;
      const root = rootRef.value;
      if (!modal || !root) return;
      await modal.updateComplete;
      syncPlaygroundCanvasHeight(modal, root);
    });
    const effectiveColorScheme: ColorScheme = args.alertType === 'destructive' ? 'error' : args.colorScheme;
    const valid = isValidColorScheme(args.theme, effectiveColorScheme);
    const tier = getPaletteTier(args.theme, effectiveColorScheme);
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
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${effectiveColorScheme}</code> colorScheme
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
      <div
        \${ref(rootRef)}
        style="position: relative; overflow: hidden; transform: translateZ(0); height: 500px;"
      >
        <mms-modal
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
          alert-type=\${args.alertType}
          data-density=\${args.density === 'compact' ? 'compact' : nothing}
          @close=\${(e: Event) => {
      (e.target as MmsModal).open = true;
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
        </mms-modal>
      </div>
    \`;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Overview`,`PlaygroundStory`]}));$();export{X as Overview,Z as PlaygroundStory,Q as __namedExportsOrder,R as default,$ as n,F as t};