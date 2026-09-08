import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-CBo78ikN.js";import{d as o,l as s,n as c,r as l,s as u,t as d}from"./decorate-Bygya6Tu.js";import{r as f,t as p}from"./focus.css-BrGuLyxh.js";import{t as m}from"./mms-icon.component-BJPQucU2.js";var h,g=e((()=>{a(),l(),f(),m(),c(),h=class extends r{constructor(...e){super(...e),this.variant=`outlined`,this.colorScheme=`primary`,this.titleText=``,this.subtitleText=``,this.subtitleRightText=``,this.descriptionText=``,this.showMedia=!1,this.mediaHeight=`default`,this.showBody=!0,this.showActions=!1,this.actionStyle=`1-action`,this.icon=``,this.showActionMenu=!1,this.actionMenuLabel=`More actions`,this.showDescription=!0,this.titleSize=`heading-4`,this.roundness=`subtle`,this.surface=`solid`,this.descriptionLines=0,this.density=`default`,this._menuOpen=!1,this._handleSlotChange=()=>{this._propagateDensity()},this._handleOutsideClick=e=>{this._menuOpen&&(e.composedPath().includes(this)||(this._menuOpen=!1))},this._toggleMenu=e=>{e.stopPropagation(),this._menuOpen=!this._menuOpen},this._handleMenuKeyDown=e=>{e.key===`Escape`&&this._menuOpen&&(e.preventDefault(),this._menuOpen=!1,(this.shadowRoot?.querySelector(`.action-icon`))?.focus())}}static{this.styles=[p,n`
      /* ═══════════════════════════════════════════════════════════════════════
         HOST — Display + Variant
         ═══════════════════════════════════════════════════════════════════════ */
      :host {
        display: flex;
        flex-direction: column;
        min-width: 200px;
        font-family: var(--type-body-md-family);
        background: var(--color-surface-solid);
        border-radius: var(--radius-md);
        position: relative;

        /* Accent color, resolved per color-scheme below */
        --_accent-color: var(--color-primary-9);
      }

      :host([roundness='boxed']) {
        border-radius: var(--radius-none);
      }

      :host([roundness='rounded']) {
        border-radius: var(--radius-lg);
      }

      :host([surface='tint']) {
        background: var(--color-surface-default);
      }

      :host([color-scheme='secondary']) {
        --_accent-color: var(--color-secondary-9);
      }

      :host([color-scheme='accent']) {
        --_accent-color: var(--color-accent-9);
      }

      :host([color-scheme='onyx']) {
        --_accent-color: var(--color-onyx-9);
      }

      :host([variant='elevated']) {
        box-shadow: var(--elevation-sm);
      }

      :host([variant='outlined']) {
        box-shadow: none;
        border: 1px solid var(--color-border-default);
      }

      :host([variant='accent-top']) {
        border-top: 4px solid var(--_accent-color);
        box-shadow: var(--elevation-sm);
      }

      :host([variant='accent-left']) {
        border-left: 4px solid var(--_accent-color);
        box-shadow: var(--elevation-sm);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         MEDIA SLOT
         ═══════════════════════════════════════════════════════════════════════ */
      .media-wrapper {
        overflow: hidden;
        aspect-ratio: 16 / 9;
      }

      :host([media-height='short']) .media-wrapper {
        aspect-ratio: 21 / 9;
      }

      @media (max-width: 1023px) {
        :host(:not([media-height='short'])) .media-wrapper {
          aspect-ratio: 21 / 9;
        }
      }

      .media-wrapper ::slotted(*) {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         CARD CONTENT
         ═══════════════════════════════════════════════════════════════════════ */
      .card-content {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding-top: var(--spacing-md1);
        padding-bottom: var(--spacing-md1);
      }

      :host([data-density='compact']) .card-content {
        padding-top: var(--spacing-sm2);
        padding-bottom: var(--spacing-sm2);
      }

      /* Header -> Body: tightened independently of Body -> Footer below */
      .card-header + .card-body {
        margin-top: var(--spacing-sm1);
      }

      :host([data-density='compact']) .card-header + .card-body {
        margin-top: var(--spacing-xs2);
      }

      :host([title-size='body-bold']) .card-header + .card-body {
        margin-top: var(--spacing-sm1);
      }

      :host([title-size='body-bold'][data-density='compact']) .card-header + .card-body {
        margin-top: var(--spacing-xs2);
      }

      /* Body -> Footer, and Header -> Footer when Body is hidden: unchanged spacing */
      .card-body + .card-footer,
      .card-header + .card-footer {
        margin-top: var(--spacing-md2);
      }

      :host([data-density='compact']) .card-body + .card-footer,
      :host([data-density='compact']) .card-header + .card-footer {
        margin-top: var(--spacing-md1);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         HEADER
         ═══════════════════════════════════════════════════════════════════════ */
      .card-header {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm2);
        padding-left: var(--spacing-md1);
        padding-right: var(--spacing-md1);
      }

      :host([data-density='compact']) .card-header {
        padding-left: var(--spacing-sm2);
        padding-right: var(--spacing-sm2);
      }

      .header {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm1);
      }

      .title-section {
        display: flex;
        align-items: flex-start;
        gap: var(--spacing-sm1);
      }

      .icon-wrapper {
        display: flex;
        align-items: center;
        padding-top: var(--spacing-xs1);
        padding-bottom: 0;
        flex-shrink: 0;
        color: var(--color-text-default);
      }

      .title-group {
        flex: 1;
        min-width: 0;
        display: flex;
        align-items: flex-start;
        gap: var(--spacing-sm2);
      }

      .title {
        font-family: var(--type-heading-4-family);
        font-size: var(--type-heading-4-size);
        line-height: var(--type-heading-4-line-height);
        font-weight: var(--type-heading-4-weight);
        color: var(--color-text-default);
        margin: 0;
        overflow-wrap: break-word;
      }

      :host([title-size='body-bold']) .title {
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--font-weight-bold);
      }

      /* Overflow trigger + panel — temporary stand-in, see class JSDoc */
      .action-menu {
        position: relative;
        flex-shrink: 0;
      }

      .action-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--size-lg2); /* 32px touch target */
        height: var(--size-lg2);
        padding: 0;
        margin: calc(var(--spacing-xs0) * -1);
        border: none;
        border-radius: var(--radius-sm);
        background: transparent;
        color: var(--color-text-default);
        cursor: pointer;
      }

      .action-icon:hover {
        background: var(--color-surface-raised);
      }

      .action-menu-panel {
        position: absolute;
        top: calc(100% + var(--spacing-xs0));
        right: 0;
        z-index: 1;
        min-width: 160px;
        background: var(--color-surface-raised);
        border: 1px solid var(--color-border-default);
        border-radius: var(--radius-sm);
        box-shadow: var(--elevation-md);
        padding: var(--spacing-xs0);
      }

      .action-menu-panel[hidden] {
        display: none;
      }

      /* Subtitle row */
      .subtitle-row {
        display: flex;
        align-items: flex-start;
        gap: var(--spacing-sm1);
      }

      .subtitle,
      .subtitle-right {
        font-family: var(--type-ui-overline-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--font-weight-regular);
        color: var(--color-text-subtle);
        text-transform: uppercase;
        overflow-wrap: break-word;
        min-width: 0;
      }

      .subtitle-right {
        margin-left: auto;
        text-align: right;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         BODY
         ═══════════════════════════════════════════════════════════════════════ */
      .card-body {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: var(--spacing-md1);
        padding-left: var(--spacing-md1);
        padding-right: var(--spacing-md1);
      }

      :host([data-density='compact']) .card-body,
      :host([data-density='compact']) .card-footer {
        padding-left: var(--spacing-sm2);
        padding-right: var(--spacing-sm2);
      }

      .description {
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--font-weight-regular);
        color: var(--color-text-subtle);
        margin: 0;
      }

      .description.clamped {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         FOOTER
         ═══════════════════════════════════════════════════════════════════════ */
      .card-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: var(--spacing-sm1);
        padding-left: var(--spacing-md1);
        padding-right: var(--spacing-md1);
      }

      :host([action-style='hr-actions']) .card-footer {
        flex-wrap: wrap;
        gap: var(--spacing-md1);
      }

      :host([action-style='hr-actions']) .card-footer ::slotted(*) {
        flex: 1 1 0;
        min-width: fit-content;
      }

      :host([action-style='vt-actions']) .card-footer {
        flex-direction: column;
        align-items: stretch;
        gap: var(--spacing-md1);
      }
    `]}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._handleOutsideClick)}updated(e){e.has(`density`)&&this._propagateDensity()}_propagateDensity(){this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.assignedElements({flatten:!0}).forEach(e=>{e.setAttribute(`data-density`,this.density)})})}_renderActionMenu(){return this.showActionMenu?i`
      <div class="action-menu" @keydown=${this._handleMenuKeyDown}>
        <button
          type="button"
          class="action-icon"
          aria-haspopup="true"
          aria-expanded=${this._menuOpen}
          aria-controls="action-menu-panel"
          aria-label=${this.actionMenuLabel}
          @click=${this._toggleMenu}
        >
          <mms-icon name="dots-three-vertical" size="md"></mms-icon>
        </button>
        <div id="action-menu-panel" class="action-menu-panel" ?hidden=${!this._menuOpen}>
          <slot name="action-menu" @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `:t}_renderMedia(){return this.showMedia?i`
      <div class="media-wrapper">
        <slot name="media" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `:t}_renderHeader(){let e=!!this.icon,n=!!this.subtitleText||!!this.subtitleRightText;return!this.titleText&&!e&&!this.showActionMenu&&!n?t:i`
      <div class="card-header">
        <div class="header">
          <div class="title-section">
            ${this.icon?i`
                  <div class="icon-wrapper">
                    <mms-icon name=${this.icon} size=${this.titleSize===`body-bold`?`md`:`lg`}></mms-icon>
                  </div>
                `:t}
            <div class="title-group">
              <span class="title" id="card-title">${this.titleText}</span>
            </div>
            ${this.showActionMenu?this._renderActionMenu():t}
          </div>
          ${this.subtitleText||this.subtitleRightText?i`
                <div class="subtitle-row">
                  ${this.subtitleText?i`<span class="subtitle">${this.subtitleText}</span>`:t}
                  ${this.subtitleRightText?i`<span class="subtitle-right">${this.subtitleRightText}</span>`:t}
                </div>
              `:t}
        </div>
      </div>
    `}_renderBody(){return this.showBody?i`
      <div class="card-body">
        ${this.showDescription&&this.descriptionText?i`
              <p
                class="description ${this.descriptionLines>0?`clamped`:``}"
                style=${this.descriptionLines>0?`-webkit-line-clamp: ${this.descriptionLines}`:``}
              >
                ${this.descriptionText}
              </p>
            `:t}
        <slot name="body-content" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `:t}_renderFooter(){return this.showActions?i`
      <div class="card-footer">
        <slot name="actions" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `:t}render(){return i`
      ${this._renderMedia()}
      <div class="card-content" role="group" aria-labelledby=${this.titleText?`card-title`:t}>
        ${this._renderHeader()} ${this._renderBody()} ${this._renderFooter()}
      </div>
    `}},d([s({type:String,reflect:!0})],h.prototype,`variant`,void 0),d([s({type:String,reflect:!0,attribute:`color-scheme`})],h.prototype,`colorScheme`,void 0),d([s({type:String,attribute:`title-text`})],h.prototype,`titleText`,void 0),d([s({type:String,attribute:`subtitle-text`})],h.prototype,`subtitleText`,void 0),d([s({type:String,attribute:`subtitle-right-text`})],h.prototype,`subtitleRightText`,void 0),d([s({type:String,attribute:`description-text`})],h.prototype,`descriptionText`,void 0),d([s({type:Boolean,reflect:!0,attribute:`show-media`})],h.prototype,`showMedia`,void 0),d([s({type:String,reflect:!0,attribute:`media-height`})],h.prototype,`mediaHeight`,void 0),d([s({type:Boolean,reflect:!0,attribute:`show-body`})],h.prototype,`showBody`,void 0),d([s({type:Boolean,reflect:!0,attribute:`show-actions`})],h.prototype,`showActions`,void 0),d([s({type:String,reflect:!0,attribute:`action-style`})],h.prototype,`actionStyle`,void 0),d([s({type:String})],h.prototype,`icon`,void 0),d([s({type:Boolean,reflect:!0,attribute:`show-action-menu`})],h.prototype,`showActionMenu`,void 0),d([s({type:String,attribute:`action-menu-label`})],h.prototype,`actionMenuLabel`,void 0),d([s({type:Boolean,reflect:!0,attribute:`show-description`})],h.prototype,`showDescription`,void 0),d([s({type:String,reflect:!0,attribute:`title-size`})],h.prototype,`titleSize`,void 0),d([s({type:String,reflect:!0})],h.prototype,`roundness`,void 0),d([s({type:String,reflect:!0})],h.prototype,`surface`,void 0),d([s({type:Number,attribute:`description-lines`})],h.prototype,`descriptionLines`,void 0),d([s({type:String,reflect:!0,attribute:`data-density`})],h.prototype,`density`,void 0),d([u()],h.prototype,`_menuOpen`,void 0),h=d([o(`mms-card`)],h)}));export{g as t};