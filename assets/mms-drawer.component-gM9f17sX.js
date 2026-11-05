import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-B0BZwaT1.js";import{E as o,S as s,T as c,_ as l,g as u,h as d,m as f,n as p,p as m,r as h,t as g,w as _}from"./mms-icon.component-DFVI3nJi.js";import{n as v,t as y}from"./validate-color-scheme-CB3dwOoW.js";import{l as b}from"./iframe-CcinUa1O.js";import{n as x,t as S}from"./print.css-DylLNsDy.js";import{n as C,t as w}from"./localize-DGaV1nF3.js";var T,E,D=e((()=>{a(),o(),x(),u(),d(),y(),g(),b(),C(),h(),T=[`a[href]`,`button:not([disabled])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`,`mms-button:not([disabled])`,`mms-link`,`mms-text-field:not([disabled])`].join(`,`),E=class extends r{constructor(...e){super(...e),this.localize=new w(this),this.size=`xl`,this.open=!1,this.titleText=``,this.description=!0,this.descText=``,this.closeIcon=!0,this.tertiaryLabel=``,this.colorScheme=`onyx`,this._previouslyFocused=null,this._closing=!1,this._closeSource=`close-button`,this._boundEscapeKeyDown=this._handleEscapeKeyDown.bind(this),this._boundFocusTrapKeyDown=this._handleFocusTrapKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this._boundEscapeKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this._boundEscapeKeyDown),document.removeEventListener(`keydown`,this._boundFocusTrapKeyDown)}firstUpdated(){v(this,this.colorScheme,`mms-drawer`)}updated(e){super.updated(e),e.has(`open`)&&(this.open&&!this._closing?requestAnimationFrame(()=>{this._overlayEl?.classList.add(`opening`),this._drawerEl?.classList.add(`opening`),this._drawerEl?.addEventListener(`animationend`,()=>{this._overlayEl?.classList.remove(`opening`),this._drawerEl?.classList.remove(`opening`),this._drawerEl&&(this._drawerEl.style.transform=`translateX(0)`),this._overlayEl&&(this._overlayEl.style.opacity=`1`),this._activateFocusTrap()},{once:!0})}):this.open||this._deactivateFocusTrap())}_handleEscapeKeyDown(e){this.open&&e.key===`Escape`&&this._handleClose(`escape-key`)}_getFocusableElements(){if(!this._drawerEl)return[];let e=Array.from(this._drawerEl.querySelectorAll(T)),t=this.shadowRoot?.querySelector(`slot`),n=(t?t.assignedElements({flatten:!0}):[]).flatMap(e=>e.matches(T)?[e]:Array.from(e.querySelectorAll(T)));return[...e,...n].filter(e=>{let t=getComputedStyle(e);return t.display!==`none`&&t.visibility!==`hidden`})}_activateFocusTrap(){this._previouslyFocused=document.activeElement,document.addEventListener(`keydown`,this._boundFocusTrapKeyDown),requestAnimationFrame(()=>{this._getFocusableElements()[0]?.focus()})}_deactivateFocusTrap(){document.removeEventListener(`keydown`,this._boundFocusTrapKeyDown),this._previouslyFocused?.focus(),this._previouslyFocused=null}_handleFocusTrapKeyDown(e){if(e.key!==`Tab`)return;let t=this._getFocusableElements();if(t.length===0)return;let n=t[0],r=t[t.length-1],i=this.shadowRoot?.activeElement;e.shiftKey&&i===n?(e.preventDefault(),r.focus()):!e.shiftKey&&i===r&&(e.preventDefault(),n.focus())}_handleClose(e){if(this._closing)return;this._closeSource=e,this._closing=!0,this._overlayEl?.classList.add(`closing`),this._drawerEl?.classList.add(`closing`);let t=()=>{this._closing=!1,this._overlayEl&&(this._overlayEl.classList.remove(`closing`),this._overlayEl.style.opacity=``),this._drawerEl&&(this._drawerEl.classList.remove(`closing`),this._drawerEl.style.transform=``),this.open=!1,this.dispatchEvent(new CustomEvent(`close`,{detail:{source:this._closeSource},bubbles:!0,composed:!0}))};this._drawerEl?this._drawerEl.addEventListener(`animationend`,t,{once:!0}):t()}_handleOverlayClick(e){e.target===e.currentTarget&&this._handleClose(`overlay-click`)}_handlePrimaryClick(){this.dispatchEvent(new CustomEvent(`primary-click`,{bubbles:!0,composed:!0}))}_handleSecondaryClick(){this.dispatchEvent(new CustomEvent(`secondary-click`,{bubbles:!0,composed:!0})),this._handleClose(`secondary-button`)}_handleTertiaryClick(){this.dispatchEvent(new CustomEvent(`tertiary-click`,{bubbles:!0,composed:!0}))}_renderFooter(){return this.size===`sm`?i`
        ${this.primaryLabel??this.localize.term(`confirm`)?i`
              <mms-button
                variant="primary"
                color-scheme=${this.colorScheme}
                label=${this.primaryLabel??this.localize.term(`confirm`)}
                full-width
                @click=${this._handlePrimaryClick}
              ></mms-button>
            `:t}
        ${this.secondaryLabel??this.localize.term(`cancel`)?i`
              <mms-button
                variant="secondary"
                color-scheme=${this.colorScheme}
                label=${this.secondaryLabel??this.localize.term(`cancel`)}
                full-width
                @click=${this._handleSecondaryClick}
              ></mms-button>
            `:t}
        ${this.tertiaryLabel?i`
              <mms-button
                variant="ghost"
                color-scheme=${this.colorScheme}
                label=${this.tertiaryLabel}
                full-width
                @click=${this._handleTertiaryClick}
              ></mms-button>
            `:t}
      `:i`
      ${this.tertiaryLabel?i`
            <mms-button
              variant="ghost"
              color-scheme=${this.colorScheme}
              label=${this.tertiaryLabel}
              @click=${this._handleTertiaryClick}
            ></mms-button>
          `:t}
      <div class="footer-spacer"></div>
      <div class="action-group">
        ${this.secondaryLabel??this.localize.term(`cancel`)?i`
              <mms-button
                variant="secondary"
                color-scheme=${this.colorScheme}
                label=${this.secondaryLabel??this.localize.term(`cancel`)}
                @click=${this._handleSecondaryClick}
              ></mms-button>
            `:t}
        ${this.primaryLabel??this.localize.term(`confirm`)?i`
              <mms-button
                variant="primary"
                color-scheme=${this.colorScheme}
                label=${this.primaryLabel??this.localize.term(`confirm`)}
                @click=${this._handlePrimaryClick}
              ></mms-button>
            `:t}
      </div>
    `}render(){let e=this.description&&this.descText,n=!!((this.primaryLabel??this.localize.term(`confirm`))||(this.secondaryLabel??this.localize.term(`cancel`))||this.tertiaryLabel);return i`
      <div class="overlay" @click=${this._handleOverlayClick}>
        <div
          class="drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
          aria-describedby=${e?`drawer-desc`:t}
        >
          <div class="header">
            <div class="header-text">
              <h2 class="title" id="drawer-title">${this.titleText}</h2>
            </div>
            ${this.closeIcon?i`
                  <div class="close-frame">
                    <button
                      class="close-button"
                      @click=${()=>this._handleClose(`close-button`)}
                      aria-label=${this.localize.term(`closeDrawer`)}
                    >
                      <mms-icon name="x" size="md"></mms-icon>
                    </button>
                  </div>
                `:t}
          </div>

          <div class="body">
            <div class="content-frame">
              ${e?i`<p class="message" id="drawer-desc">${this.descText}</p>`:t}
              <slot></slot>
            </div>
          </div>

          ${n?i`<div class="footer">${this._renderFooter()}</div>`:t}
        </div>
      </div>
    `}static{this.styles=[c,S,m,f,n`
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
        justify-content: flex-end;
        opacity: 0;
      }

      .overlay.opening {
        animation: mms-drawer-fade-in var(--motion-duration-moderate) var(--motion-easing-enter) forwards;
      }

      .overlay.closing {
        animation: mms-drawer-fade-out var(--motion-duration-moderate) var(--motion-easing-exit) forwards;
      }

      .drawer {
        display: flex;
        flex-direction: column;
        background: var(--color-surface-raised);
        box-shadow: var(--elevation-xl);
        height: 100%;
        width: 100%;
        overflow: hidden;
        transform: translateX(100%);
      }

      /* Forced colors removes box-shadow, which is all that sets this surface apart from the page. */
      @media (forced-colors: active) {
        .drawer {
          outline: 1px solid CanvasText;
          outline-offset: -1px;
        }
      }

      .drawer.opening {
        animation: mms-drawer-slide-in var(--motion-duration-moderate) var(--motion-easing-enter) forwards;
      }

      .drawer.closing {
        animation: mms-drawer-slide-out var(--motion-duration-moderate) var(--motion-easing-exit) forwards;
      }

      @keyframes mms-drawer-fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes mms-drawer-fade-out {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      @keyframes mms-drawer-slide-in {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0);
        }
      }

      @keyframes mms-drawer-slide-out {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(100%);
        }
      }

      :host([size='xl']) .drawer {
        max-width: 960px;
      }

      :host([size='lg']) .drawer {
        max-width: 800px;
      }

      :host([size='md']) .drawer {
        max-width: 640px;
      }

      :host([size='sm']) .drawer {
        max-width: 320px;
      }

      .header {
        display: flex;
        flex-shrink: 0;
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
        flex: 1;
        min-height: 0;
        overflow: hidden;
        display: flex;
      }

      .content-frame {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md1);
        flex: 1;
        min-width: 0;
        padding: var(--spacing-lg2);
        overflow-y: auto;
      }

      :host([size='sm']) .content-frame {
        padding: var(--spacing-md1) var(--spacing-lg1);
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
        padding: 0 var(--spacing-lg2) var(--spacing-lg2);
        flex-shrink: 0;
      }

      :host([size='sm']) .footer {
        flex-direction: column;
        padding: var(--spacing-md1) var(--spacing-lg1) var(--spacing-lg2);
      }

      .action-group {
        display: flex;
        align-items: center;
        gap: var(--spacing-md1);
      }

      .footer-spacer {
        flex: 1;
      }

      :host([size='sm']) .action-group {
        flex-direction: column;
        width: 100%;
      }

      :host([size='sm']) .footer-spacer {
        display: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .overlay.opening,
        .overlay.closing,
        .drawer.opening,
        .drawer.closing {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
        }
      }
    `]}},p([s({type:String,reflect:!0})],E.prototype,`size`,void 0),p([s({type:Boolean,reflect:!0})],E.prototype,`open`,void 0),p([s({type:String,attribute:`title-text`})],E.prototype,`titleText`,void 0),p([s({type:Boolean})],E.prototype,`description`,void 0),p([s({type:String,attribute:`desc-text`})],E.prototype,`descText`,void 0),p([s({type:Boolean,attribute:`close-icon`})],E.prototype,`closeIcon`,void 0),p([s({type:String,attribute:`primary-label`})],E.prototype,`primaryLabel`,void 0),p([s({type:String,attribute:`secondary-label`})],E.prototype,`secondaryLabel`,void 0),p([s({type:String,attribute:`tertiary-label`})],E.prototype,`tertiaryLabel`,void 0),p([s({type:String,reflect:!0,attribute:`color-scheme`})],E.prototype,`colorScheme`,void 0),p([l(`.overlay`)],E.prototype,`_overlayEl`,void 0),p([l(`.drawer`)],E.prototype,`_drawerEl`,void 0),E=p([_(`mms-drawer`)],E)}));export{D as t};