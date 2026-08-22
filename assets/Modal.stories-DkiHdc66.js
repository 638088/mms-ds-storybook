import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,i as c,l,n as u,r as d,t as f}from"./decorate-Bygya6Tu.js";import{n as p,r as m,t as h}from"./focus.css-BrGuLyxh.js";import{n as g,t as ee}from"./validate-color-scheme-CB3dwOoW.js";import{t as _}from"./mms-icon.component-DRWi1aVe.js";import{n as v}from"./iframe-nf1RCFSe.js";import{i as y,n as b,r as x}from"./theme-constraints-xITgb_Dw.js";import{a as S,o as C,r as w,t as T}from"./a11y-outcome-CiARakld.js";import{i as E,n as D,t as O}from"./ref-H_iB0_5U.js";import{t as k}from"./mms-text-field.component-Bwc9v-UB.js";var A,j,M=e((()=>{o(),d(),m(),ee(),_(),v(),u(),A=[`a[href]`,`button:not([disabled])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`,`mms-button:not([disabled])`,`mms-link`,`mms-text-field:not([disabled])`].join(`,`),j=class extends i{constructor(...e){super(...e),this.size=`xl`,this.open=!1,this.titleText=``,this.description=!0,this.descText=``,this.closeIcon=!0,this.primaryLabel=`Confirm`,this.secondaryLabel=`Cancel`,this.tertiaryLabel=``,this.colorScheme=`onyx`,this.alertType=`none`,this._previouslyFocused=null,this._boundEscapeKeyDown=this._handleEscapeKeyDown.bind(this),this._boundFocusTrapKeyDown=this._handleFocusTrapKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this._boundEscapeKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this._boundEscapeKeyDown),document.removeEventListener(`keydown`,this._boundFocusTrapKeyDown)}firstUpdated(){g(this,this._footerColorScheme(),`mms-modal`)}updated(e){super.updated(e),e.has(`open`)&&(this.open?this._activateFocusTrap():this._deactivateFocusTrap())}_handleEscapeKeyDown(e){this.open&&e.key===`Escape`&&this._handleClose(`escape-key`)}_getFocusableElements(){if(!this._dialogEl)return[];let e=Array.from(this._dialogEl.querySelectorAll(A)),t=this.shadowRoot?.querySelector(`slot`),n=(t?t.assignedElements({flatten:!0}):[]).flatMap(e=>e.matches(A)?[e]:Array.from(e.querySelectorAll(A)));return[...e,...n].filter(e=>{let t=getComputedStyle(e);return t.display!==`none`&&t.visibility!==`hidden`})}_activateFocusTrap(){this._previouslyFocused=document.activeElement,document.addEventListener(`keydown`,this._boundFocusTrapKeyDown),requestAnimationFrame(()=>{this._getFocusableElements()[0]?.focus()})}_deactivateFocusTrap(){document.removeEventListener(`keydown`,this._boundFocusTrapKeyDown),this._previouslyFocused?.focus(),this._previouslyFocused=null}_handleFocusTrapKeyDown(e){if(e.key!==`Tab`)return;let t=this._getFocusableElements();if(t.length===0)return;let n=t[0],r=t[t.length-1],i=this.shadowRoot?.activeElement;e.shiftKey&&i===n?(e.preventDefault(),r.focus()):!e.shiftKey&&i===r&&(e.preventDefault(),n.focus())}_handleClose(e){this.open=!1,this.dispatchEvent(new CustomEvent(`close`,{detail:{source:e},bubbles:!0,composed:!0}))}_handleOverlayClick(e){e.target===e.currentTarget&&this._handleClose(`overlay-click`)}_handlePrimaryClick(){this.dispatchEvent(new CustomEvent(`primary-click`,{bubbles:!0,composed:!0}))}_handleSecondaryClick(){this.dispatchEvent(new CustomEvent(`secondary-click`,{bubbles:!0,composed:!0})),this._handleClose(`secondary-button`)}_handleTertiaryClick(){this.dispatchEvent(new CustomEvent(`tertiary-click`,{bubbles:!0,composed:!0}))}_footerColorScheme(){return this.alertType===`destructive`?`error`:this.colorScheme}_renderFooter(){let e=this._footerColorScheme();return a`
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
        ${this.secondaryLabel?a`
              <mms-button
                variant="secondary"
                color-scheme=${e}
                label=${this.secondaryLabel}
                @click=${this._handleSecondaryClick}
              ></mms-button>
            `:n}
        <mms-button
          variant="primary"
          color-scheme=${e}
          label=${this.primaryLabel}
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
                      aria-label="Close modal"
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
    `}static{this.styles=[h,p,r`
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

      .close-button:hover {
        opacity: 0.7;
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
    `]}},f([l({type:String,reflect:!0})],j.prototype,`size`,void 0),f([l({type:Boolean,reflect:!0})],j.prototype,`open`,void 0),f([l({type:String,attribute:`title-text`})],j.prototype,`titleText`,void 0),f([l({type:Boolean})],j.prototype,`description`,void 0),f([l({type:String,attribute:`desc-text`})],j.prototype,`descText`,void 0),f([l({type:Boolean,attribute:`close-icon`})],j.prototype,`closeIcon`,void 0),f([l({type:String,attribute:`primary-label`})],j.prototype,`primaryLabel`,void 0),f([l({type:String,attribute:`secondary-label`})],j.prototype,`secondaryLabel`,void 0),f([l({type:String,attribute:`tertiary-label`})],j.prototype,`tertiaryLabel`,void 0),f([l({type:String,reflect:!0,attribute:`color-scheme`})],j.prototype,`colorScheme`,void 0),f([l({type:String,reflect:!0,attribute:`alert-type`})],j.prototype,`alertType`,void 0),f([c(`.dialog`)],j.prototype,`_dialogEl`,void 0),j=f([s(`mms-modal`)],j)})),N=t({Overview:()=>X,PlaygroundStory:()=>Z,__namedExportsOrder:()=>Q,default:()=>F});function P(e){e.value&&(e.value.open=!0)}function te(e,t){if(J.has(e))return;J.add(e);let n=()=>{let n=e.shadowRoot?.querySelector(`.overlay`),r=e.shadowRoot?.querySelector(`.header`),i=e.shadowRoot?.querySelector(`.body`),a=e.shadowRoot?.querySelector(`.footer`);if(!n||!r||!i||!a)return;let o=parseFloat(getComputedStyle(n).paddingTop)||0,s=(r.getBoundingClientRect().height+i.scrollHeight+a.getBoundingClientRect().height)/.8+o*2;t.style.height=`${Math.ceil(Math.min(s,Y))}px`},r=new ResizeObserver(n),i=e.shadowRoot?.querySelector(`.content-frame`);i&&r.observe(i);let a=e.shadowRoot?.querySelector(`.header`);a&&r.observe(a);let o=e.shadowRoot?.querySelector(`.footer`);o&&r.observe(o),new MutationObserver(n).observe(e,{attributes:!0,attributeFilter:[`size`]}),n()}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{o(),O(),M(),v(),k(),x(),S(),T(),F={title:`Feedback/Modal`,tags:[`!autodocs`],parameters:{layout:`fullscreen`}},I={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},L=`680px`,R=`960px`,z=D(),B=D(),V=D(),H=D(),U=D(),W=D(),G=D(),K=D(),q=D(),J=new WeakSet,Y=900,X={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${R}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${I.h1}">Modal</h1>
      <p style="${I.body} opacity: 0.85; max-width: ${L}; margin-bottom: 2rem;">
        A dialog overlay for content or decisions that require the user's focused attention.
        Traps keyboard focus while open, restores focus to the invoking element on close, and
        closes via close button, overlay click, or Escape.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${I.h2}">Basic usage</h2>
      <p style="${I.bodySm} opacity: 0.85; max-width: ${L}; margin-bottom: 1.5rem;">
        A title, a description, and primary/secondary actions in the footer.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open modal" @click=${()=>P(z)}></mms-button>
        <mms-modal
          ${E(z)}
          title-text="Save changes?"
          desc-text="Your changes will be saved and applied immediately."
          primary-label="Save"
          secondary-label="Cancel"
        ></mms-modal>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="${I.h2}">Sizes</h2>
      <p style="${I.bodySm} opacity: 0.85; max-width: ${L}; margin-bottom: 1.5rem;">
        Four sizes control the dialog's max-width: <code style="${I.monoSm}">xl</code> (default, 1140px),
        <code style="${I.monoSm}">lg</code> (800px), <code style="${I.monoSm}">md</code> (640px),
        and <code style="${I.monoSm}">sm</code> (320px). <code style="${I.monoSm}">sm</code>
        also stacks footer actions full-width, for compact confirmation prompts.
      </p>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open xl" @click=${()=>P(B)}></mms-button>
        <mms-modal ${E(B)} size="xl" title-text="XL (1140px)" desc-text="Used for content-rich dialogs."></mms-modal>

        <mms-button variant="secondary" label="Open lg" @click=${()=>P(V)}></mms-button>
        <mms-modal ${E(V)} size="lg" title-text="LG (800px)" desc-text="Used for standard forms and decisions."></mms-modal>

        <mms-button variant="secondary" label="Open md" @click=${()=>P(H)}></mms-button>
        <mms-modal ${E(H)} size="md" title-text="MD (640px)" desc-text="Used for shorter confirmations."></mms-modal>

        <mms-button variant="secondary" label="Open sm" @click=${()=>P(U)}></mms-button>
        <mms-modal ${E(U)} size="sm" title-text="Are you sure?" desc-text="Full-width stacked actions." primary-label="Confirm" secondary-label="Cancel"></mms-modal>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Tertiary Action -->
      <h2 style="${I.h2}">Tertiary action</h2>
      <p style="${I.bodySm} opacity: 0.85; max-width: ${L}; margin-bottom: 1.5rem;">
        Setting <code style="${I.monoSm}">tertiary-label</code> adds a ghost-variant action, left-aligned
        opposite the primary/secondary group. Use for a low-emphasis option like "Learn more" that
        doesn't close the dialog.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open modal" @click=${()=>P(W)}></mms-button>
        <mms-modal
          ${E(W)}
          title-text="Enable two-factor authentication?"
          desc-text="Adds an extra verification step when signing in."
          primary-label="Enable"
          secondary-label="Not now"
          tertiary-label="Learn more"
        ></mms-modal>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Without close icon -->
      <h2 style="${I.h2}">Without the close icon</h2>
      <p style="${I.bodySm} opacity: 0.85; max-width: ${L}; margin-bottom: 1.5rem;">
        <code style="${I.monoSm}">close-icon</code> defaults to <code style="${I.monoSm}">true</code>.
        To hide it, set the <code style="${I.monoSm}">closeIcon</code> property to <code style="${I.monoSm}">false</code>
        directly (e.g. <code style="${I.monoSm}">el.closeIcon = false</code> or a template's
        <code style="${I.monoSm}">.closeIcon=\${false}</code> binding) — as a boolean property, its plain-HTML
        attribute form has no falsy representation, so <code style="${I.monoSm}">close-icon="false"</code>
        in static markup would still evaluate true. Use this to force a decision through the footer actions only.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open modal" @click=${()=>P(G)}></mms-button>
        <mms-modal
          ${E(G)}
          .closeIcon=${!1}
          size="md"
          title-text="Confirm cancellation"
          desc-text="You must choose an option below to continue."
          primary-label="Cancel plan"
          secondary-label="Keep plan"
        ></mms-modal>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Rich content slot -->
      <h2 style="${I.h2}">Rich content</h2>
      <p style="${I.bodySm} opacity: 0.85; max-width: ${L}; margin-bottom: 1.5rem;">
        The default slot accepts any markup as light DOM children, rendered below the description —
        forms, lists, custom components, anything. The slot itself has no opinion about its content;
        a text field is shown below purely as one example. Slotted focusable elements participate in
        the same focus trap as the footer actions.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open modal" @click=${()=>P(K)}></mms-button>
        <mms-modal
          ${E(K)}
          size="lg"
          title-text="Update your address"
          desc-text="This will be used for all future correspondence."
          primary-label="Save address"
          secondary-label="Cancel"
        >
          <mms-text-field label="Street address"></mms-text-field>
        </mms-modal>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Destructive alert -->
      <h2 style="${I.h2}">Destructive alert</h2>
      <p style="${I.bodySm} opacity: 0.85; max-width: ${L}; margin-bottom: 1.5rem;">
        Setting <code style="${I.monoSm}">alert-type="destructive"</code> overrides every footer
        button's color scheme to <code style="${I.monoSm}">error</code> — the structural
        destructive-action red — regardless of the <code style="${I.monoSm}">color-scheme</code>
        prop. Use for irreversible actions like delete or permanent removal.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open modal" @click=${()=>P(q)}></mms-button>
        <mms-modal
          ${E(q)}
          alert-type="destructive"
          size="sm"
          title-text="Delete this item?"
          desc-text="This action cannot be undone."
          primary-label="Delete"
          secondary-label="Cancel"
        ></mms-modal>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${I.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${I.bodySm} margin: 0;">
          <strong>Escape is the documented exit method.</strong> Trapping focus inside a dialog would
          otherwise violate WCAG 2.1.2 (No Keyboard Trap). The Escape key satisfies the criterion's
          "standard exit method" exception, so <code style="${I.monoSm}">mms-modal</code> always closes
          on Escape regardless of which element currently has focus.
        </p>
      </div>

      <h3 style="${I.h3}">WCAG 2.2 AA Compliance</h3>
      ${w(C.modal.rows)}

      <h3 style="${I.h3}">Screen Reader Behavior</h3>
      <ul style="${I.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Open:</strong> Announces the dialog role and title as focus moves to the first focusable element</li>
        <li style="margin-bottom: 0.5rem;"><strong>Description:</strong> Read automatically as part of the dialog's accessible description via <code style="${I.monoSm}">aria-describedby</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Close button:</strong> Announced as "Close modal, button" regardless of visible label (icon-only)</li>
        <li><strong>Close:</strong> Focus and announcement return to the element that opened the dialog</li>
      </ul>

      <h3 style="${I.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Close the dialog and restore focus to the invoking element</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},Z={name:`Playground`,tags:[`!dev`],args:{size:`md`,closeIcon:!0,titleText:`Save changes?`,description:!0,descText:`Your changes will be saved and applied immediately.`,primaryLabel:`Save`,secondaryLabel:`Cancel`,tertiaryLabel:``,richContent:!1,colorScheme:`primary`,alertType:`none`,theme:`maximus`,density:`default`},argTypes:{size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`,`xl`],description:`Dialog max-width and footer layout (sm stacks actions full-width)`,table:{category:`Behavior`}},closeIcon:{name:`Close icon`,control:`boolean`,description:`Shows the icon-only close button in the header. Default true — this control uses a property binding, so it toggles correctly here, but a plain HTML attribute cannot represent the false state (see Overview).`,table:{category:`Behavior`}},titleText:{name:`Title text`,control:`text`,description:`Dialog title, rendered as the accessible name`,table:{category:`Content`}},description:{name:`Show description`,control:`boolean`,description:`Whether to render the description paragraph`,table:{category:`Content`}},descText:{name:`Description text`,control:`text`,description:`Description paragraph content`,table:{category:`Content`}},primaryLabel:{name:`Primary label`,control:`text`,description:`Primary action button label — always rendered`,table:{category:`Content`}},secondaryLabel:{name:`Secondary label`,control:`text`,description:`Secondary action button label — hidden when empty`,table:{category:`Content`}},tertiaryLabel:{name:`Tertiary label`,control:`text`,description:`Ghost-variant action label, left-aligned — hidden when empty`,table:{category:`Content`}},richContent:{name:`Rich content (slot)`,control:`boolean`,description:`The default slot accepts any markup as light DOM children — form fields, lists, custom components, anything — rendered below the description. This toggle inserts a text field purely as one example of what can go there; the slot has no opinion about its content. Slotted focusable elements join the same focus trap as the footer actions.`,table:{category:`Content`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Color palette for the footer action buttons. "onyx" is structural (works on all themes) and is the default. Brand colors (primary/secondary/accent) availability depends on theme. Ignored when Alert Type is "destructive".`,table:{category:`Component Props`}},alertType:{name:`Alert Type`,control:`select`,options:[`none`,`destructive`],description:`"destructive" overrides all footer buttons to the structural error colorScheme, regardless of Color Scheme. Use for irreversible actions.`,table:{category:`Component Props`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects typography and action colors)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-modal has no compact-specific styling yet, since dialog chrome padding is intentionally fixed regardless of density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[`open`];n.size&&n.size!==`xl`&&r.push(`size="${n.size}"`),n.titleText&&r.push(`title-text="${n.titleText}"`),n.description===!1&&r.push(".description=${false}"),n.descText&&r.push(`desc-text="${n.descText}"`),n.closeIcon===!1&&r.push(".closeIcon=${false}"),n.primaryLabel&&n.primaryLabel!==`Confirm`&&r.push(`primary-label="${n.primaryLabel}"`),n.secondaryLabel&&n.secondaryLabel!==`Cancel`&&r.push(`secondary-label="${n.secondaryLabel}"`),n.tertiaryLabel&&r.push(`tertiary-label="${n.tertiaryLabel}"`),n.alertType&&n.alertType!==`none`&&r.push(`alert-type="${n.alertType}"`),n.colorScheme&&n.colorScheme!==`onyx`&&n.alertType!==`destructive`&&r.push(`color-scheme="${n.colorScheme}"`),n.density===`compact`&&r.push(`data-density="compact"`);let i=`<mms-modal\n  ${r.join(`
  `)}\n>`;return n.richContent?`${i}\n  <mms-text-field label="Street address"></mms-text-field>\n</mms-modal>`:`${i}\n</mms-modal>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=D(),r=D();queueMicrotask(async()=>{let e=t.value,n=r.value;!e||!n||(await e.updateComplete,te(e,n))});let i=e.alertType===`destructive`?`error`:e.colorScheme,o=y(e.theme,i),s=b(e.theme,i);if(!o){let t=s===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,n=s===2?`Lacks step 10 (hover state). Use for branded text or badges, not interactive footer buttons.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return a`
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
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${i}</code> colorScheme
            <p style="margin: 0.75rem 0 0; opacity: 0.85;">
              <strong>${t}:</strong> ${n}
            </p>
            <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
              See <em>Color Framework → Color Tiering</em> for details.
            </p>
          </div>
        </div>
      `}return a`
      <div
        ${E(r)}
        style="position: relative; overflow: hidden; transform: translateZ(0); height: 500px;"
      >
        <mms-modal
          ${E(t)}
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
                <p style="${I.caption} margin-top: 0.5rem; opacity: 0.6; font-style: italic;">
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
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Modal</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A dialog overlay for content or decisions that require the user's focused attention.
        Traps keyboard focus while open, restores focus to the invoking element on close, and
        closes via close button, overlay click, or Escape.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        A title, a description, and primary/secondary actions in the footer.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open modal" @click=\${() => openModal(basicRef)}></mms-button>
        <mms-modal
          \${ref(basicRef)}
          title-text="Save changes?"
          desc-text="Your changes will be saved and applied immediately."
          primary-label="Save"
          secondary-label="Cancel"
        ></mms-modal>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Four sizes control the dialog's max-width: <code style="\${t.monoSm}">xl</code> (default, 1140px),
        <code style="\${t.monoSm}">lg</code> (800px), <code style="\${t.monoSm}">md</code> (640px),
        and <code style="\${t.monoSm}">sm</code> (320px). <code style="\${t.monoSm}">sm</code>
        also stacks footer actions full-width, for compact confirmation prompts.
      </p>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
        <mms-button variant="secondary" label="Open xl" @click=\${() => openModal(sizeXlRef)}></mms-button>
        <mms-modal \${ref(sizeXlRef)} size="xl" title-text="XL (1140px)" desc-text="Used for content-rich dialogs."></mms-modal>

        <mms-button variant="secondary" label="Open lg" @click=\${() => openModal(sizeLgRef)}></mms-button>
        <mms-modal \${ref(sizeLgRef)} size="lg" title-text="LG (800px)" desc-text="Used for standard forms and decisions."></mms-modal>

        <mms-button variant="secondary" label="Open md" @click=\${() => openModal(sizeMdRef)}></mms-button>
        <mms-modal \${ref(sizeMdRef)} size="md" title-text="MD (640px)" desc-text="Used for shorter confirmations."></mms-modal>

        <mms-button variant="secondary" label="Open sm" @click=\${() => openModal(sizeSmRef)}></mms-button>
        <mms-modal \${ref(sizeSmRef)} size="sm" title-text="Are you sure?" desc-text="Full-width stacked actions." primary-label="Confirm" secondary-label="Cancel"></mms-modal>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Tertiary Action -->
      <h2 style="\${t.h2}">Tertiary action</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Setting <code style="\${t.monoSm}">tertiary-label</code> adds a ghost-variant action, left-aligned
        opposite the primary/secondary group. Use for a low-emphasis option like "Learn more" that
        doesn't close the dialog.
      </p>

      <div style="margin-bottom: 2rem;">
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Destructive alert -->
      <h2 style="\${t.h2}">Destructive alert</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Setting <code style="\${t.monoSm}">alert-type="destructive"</code> overrides every footer
        button's color scheme to <code style="\${t.monoSm}">error</code> — the structural
        destructive-action red — regardless of the <code style="\${t.monoSm}">color-scheme</code>
        prop. Use for irreversible actions like delete or permanent removal.
      </p>

      <div style="margin-bottom: 2rem;">
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Escape is the documented exit method.</strong> Trapping focus inside a dialog would
          otherwise violate WCAG 2.1.2 (No Keyboard Trap). The Escape key satisfies the criterion's
          "standard exit method" exception, so <code style="\${t.monoSm}">mms-modal</code> always closes
          on Escape regardless of which element currently has focus.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['modal'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Open:</strong> Announces the dialog role and title as focus moves to the first focusable element</li>
        <li style="margin-bottom: 0.5rem;"><strong>Description:</strong> Read automatically as part of the dialog's accessible description via <code style="\${t.monoSm}">aria-describedby</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Close button:</strong> Announced as "Close modal, button" regardless of visible label (icon-only)</li>
        <li><strong>Close:</strong> Focus and announcement return to the element that opened the dialog</li>
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
            <td style="padding: 0.5rem 0.75rem;">Close the dialog and restore focus to the invoking element</td>
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
            <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.theme}</code> theme +
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${effectiveColorScheme}</code> colorScheme
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
}`,...Z.parameters?.docs?.source}}},Q=[`Overview`,`PlaygroundStory`]}));$();export{X as Overview,Z as PlaygroundStory,Q as __namedExportsOrder,F as default,$ as n,N as t};