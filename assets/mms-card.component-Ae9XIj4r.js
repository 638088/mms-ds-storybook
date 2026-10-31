import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-B0BZwaT1.js";import{E as o,S as s,T as c,b as l,g as u,h as d,n as f,p,r as m,t as h,w as g}from"./mms-icon.component-DFVI3nJi.js";import{n as _,t as v}from"./localize-DGaV1nF3.js";var y,b,x=e((()=>{a(),o(),u(),d(),h(),_(),m(),y=0,b=class extends r{constructor(){super(),this.localize=new v(this),this.variant=`outlined`,this.colorScheme=`primary`,this.titleText=``,this.subtitleText=``,this.subtitleRightText=``,this.descriptionText=``,this.showMedia=!1,this.mediaHeight=`default`,this.showBody=!0,this.showActions=!1,this.actionStyle=`1-action`,this.icon=``,this.showActionMenu=!1,this.showDescription=!0,this.titleSize=`heading-4`,this.roundness=`subtle`,this.surface=`solid`,this.descriptionLines=0,this.showExpand=!1,this.expanded=!1,this.density=`default`,this._menuOpen=!1,this._handleSlotChange=()=>{this._propagateDensity()},this._handleOutsideClick=e=>{this._menuOpen&&(e.composedPath().includes(this)||(this._menuOpen=!1))},this._toggleMenu=e=>{e.stopPropagation(),this._menuOpen=!this._menuOpen},this._handleMenuKeyDown=e=>{e.key===`Escape`&&this._menuOpen&&(e.preventDefault(),this._menuOpen=!1,(this.shadowRoot?.querySelector(`.action-icon`))?.focus())},this._handleExpandClick=()=>{this._toggleExpanded()},this._handleExpandKeyDown=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._toggleExpanded())};let e=y++;this._expandControlId=`mms-card-expand-control-${e}`,this._expandPanelId=`mms-card-expand-panel-${e}`}static{this.styles=[c,p,n`
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
        border-inline-start: 4px solid var(--_accent-color);
        box-shadow: var(--elevation-sm);
      }

      /* Forced colors removes box-shadow, which is all that sets this surface apart from the page. */
      @media (forced-colors: active) {
        :host([variant='elevated']), :host([variant='accent-top']), :host([variant='accent-left']) {
          outline: 1px solid CanvasText;
          outline-offset: -1px;
        }
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
        margin-top: var(--spacing-md1);
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
        padding-inline-start: var(--spacing-md1);
        padding-inline-end: var(--spacing-md1);
      }

      :host([data-density='compact']) .card-header {
        padding-inline-start: var(--spacing-sm2);
        padding-inline-end: var(--spacing-sm2);
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
        inset-inline-end: 0;
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
        margin-inline-start: auto;
        text-align: end;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         BODY
         ═══════════════════════════════════════════════════════════════════════ */
      .card-body {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: var(--spacing-sm1);
        padding-inline-start: var(--spacing-md1);
        padding-inline-end: var(--spacing-md1);
      }

      :host([data-density='compact']) .card-body,
      :host([data-density='compact']) .card-footer {
        padding-inline-start: var(--spacing-sm2);
        padding-inline-end: var(--spacing-sm2);
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
        padding-inline-start: var(--spacing-md1);
        padding-inline-end: var(--spacing-md1);
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

      /* ══════════════════════════════════════════════════════════════════════
         EXPAND — control row + revealed panel
         ══════════════════════════════════════════════════════════════════════ */
      /* Divider spans the full card width; the button keeps its content inset. */
      .expand-row {
        border-top: var(--border-width-xs) solid var(--color-border-default);
      }

      /* Collapsed: gap to the divider/trigger, spacing-md1. Expanded: gap to the
         revealed content instead, spacing-sm1 — matches .card-body's own internal
         gap (description to inline body-content) so the same 8px rhythm holds
         whether the content sits inline or inside the panel. Not density-adjusted,
         per J. */
      .card-body + .expand-panel,
      .card-header + .expand-panel {
        margin-top: var(--spacing-md1);
      }

      :host([expanded]) .card-body + .expand-panel,
      :host([expanded]) .card-header + .expand-panel {
        margin-top: var(--spacing-sm1);
      }

      .expand-row + .card-footer {
        margin-top: var(--spacing-md1);
      }

      :host([data-density='compact']) .expand-row + .card-footer {
        margin-top: var(--spacing-md1);
      }

      .expand-control {
        all: unset;
        display: flex;
        align-items: center;
        gap: var(--spacing-sm2);
        box-sizing: border-box;
        width: 100%;
        cursor: pointer;
        color: var(--color-text-default);
        background: transparent;
        padding-block: var(--spacing-sm2);
        padding-inline: var(--spacing-md1);
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--font-weight-medium);
        transition: background var(--motion-duration-fast) var(--motion-easing-standard);
      }

      .expand-control:hover {
        background: var(--color-surface-hover);
      }

      /* Scoped inset offset: the control is full-bleed, so the default outward
         offset would sit on or past the card border. Not applied via focusRingInset,
         which shares the bare :focus-visible selector and would retarget every
         focusable in this shadow root. */
      .expand-control:focus-visible {
        outline-offset: var(--focus-ring-inset-offset);
      }

      :host([data-density='compact']) .expand-control {
        padding-block: var(--spacing-sm1);
        padding-inline: var(--spacing-sm2);
      }

      .expand-label {
        flex: 1;
        min-width: 0;
        text-align: start;
      }

      .expand-cue {
        flex-shrink: 0;
        color: var(--color-text-subtle);
      }

      .expand-panel {
        overflow: hidden;
        max-height: 0;
        transition: max-height var(--motion-duration-moderate) var(--motion-easing-standard);
      }

      :host([expanded]) .expand-panel {
        /* Generous ceiling, not a measured value — see _renderExpand() comment. */
        max-height: 2000px;
      }

      /* Top space comes from the margin-top rules above, not padding-top here — that
         would stack with the margin and double the visible gap. Bottom has no such
         sibling margin, so it needs its own padding-bottom to give the slotted
         content breathing room before the divider. Fixed at spacing-md1 per J —
         does not track .card-body's gap the way the top margin does. */
      .expand-panel-content {
        padding-inline: var(--spacing-md1);
        padding-bottom: var(--spacing-md1);
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        color: var(--color-text-default);
      }

      :host([data-density='compact']) .expand-panel-content {
        padding-inline: var(--spacing-sm2);
      }

      /* Resting state is declared by the [expanded] rule above, not by an
         animation frame, so dropping the transition leaves it correct. */
      @media (prefers-reduced-motion: reduce) {
        .expand-panel,
        .expand-control {
          transition: none;
        }
      }
    `]}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._handleOutsideClick)}updated(e){e.has(`density`)&&this._propagateDensity()}_propagateDensity(){this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.assignedElements({flatten:!0}).forEach(e=>{e.setAttribute(`data-density`,this.density)})})}_toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent(`card-toggle`,{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}_renderExpand(){return this.showExpand?i`
      <!-- max-height transition, not grid-template-rows fr-units: the 0fr→1fr trick
           (used successfully by mms-accordion-item, whose :host is plain display:block)
           is unreliable here because .expand-panel sits inside .card-content's flex
           column — confirmed live and non-deterministic across identical clicks: the
           panel sometimes settled at the correct height and sometimes stuck
           permanently at 0px with the transition's playState stuck at "running", even
           after isolating .expand-panel from the flex column with a wrapper div.
           max-height interpolates between two fixed pixel values instead, which
           doesn't hit this. Trade-off: the ceiling is generous, not exact, so
           animation speed is uneven relative to real content height — accepted for
           reliability. -->
      <div
        class="expand-panel"
        id=${this._expandPanelId}
        role="region"
        aria-labelledby=${this._expandControlId}
        ?inert=${!this.expanded}
      >
        <!-- inert while collapsed: matches the W3C APG disclosure-card reference — keeps slotted content out of the tab order and the a11y tree despite zero measured height -->
        <div class="expand-panel-content">
          <slot name="body-content" @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
      <!-- Panel precedes the trigger by design, so it reads as a continuation of the
           body rather than a disclosure bolted below the button (J, DS-162). One
           consequence: forward Tab from the trigger goes to the footer, not into the
           panel — any interactive body-content is reached via Shift+Tab instead. -->
      <div class="expand-row">
        <button
          type="button"
          class="expand-control"
          id=${this._expandControlId}
          aria-expanded=${this.expanded?`true`:`false`}
          aria-controls=${this._expandPanelId}
          @click=${this._handleExpandClick}
          @keydown=${this._handleExpandKeyDown}
        >
          <span class="expand-label">${this.expanded?this.collapseLabel??this.localize.term(`showLess`):this.expandLabel??this.localize.term(`showMore`)}</span>
          <mms-icon
            class="expand-cue"
            name=${this.expanded?`caret-up`:`caret-down`}
            size="sm"
          ></mms-icon>
        </button>
      </div>
    `:t}_renderActionMenu(){return this.showActionMenu?i`
      <div class="action-menu" @keydown=${this._handleMenuKeyDown}>
        <button
          type="button"
          class="action-icon"
          aria-haspopup="true"
          aria-expanded=${this._menuOpen}
          aria-controls="action-menu-panel"
          aria-label=${this.actionMenuLabel??this.localize.term(`moreActions`)}
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
    `}_renderBody(){if(!this.showBody)return t;let e=this.descriptionLines>0&&!this.expanded;return i`
      <div class="card-body">
        ${this.showDescription&&this.descriptionText?i`
              <p
                class="description ${e?`clamped`:``}"
                style=${e?`-webkit-line-clamp: ${this.descriptionLines}`:``}
              >
                ${this.descriptionText}
              </p>
            `:t}
        <!-- body-content lives here only when showExpand is off; _renderExpand() renders the
             same slot inside the panel instead, so exactly one copy of it ever exists. -->
        ${this.showExpand?t:i`<slot name="body-content" @slotchange=${this._handleSlotChange}></slot>`}
      </div>
    `}_renderFooter(){return this.showActions?i`
      <div class="card-footer">
        <slot name="actions" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `:t}render(){return i`
      ${this._renderMedia()}
      <div class="card-content" role="group" aria-labelledby=${this.titleText?`card-title`:t}>
        ${this._renderHeader()} ${this._renderBody()} ${this._renderExpand()} ${this._renderFooter()}
      </div>
    `}},f([s({type:String,reflect:!0})],b.prototype,`variant`,void 0),f([s({type:String,reflect:!0,attribute:`color-scheme`})],b.prototype,`colorScheme`,void 0),f([s({type:String,attribute:`title-text`})],b.prototype,`titleText`,void 0),f([s({type:String,attribute:`subtitle-text`})],b.prototype,`subtitleText`,void 0),f([s({type:String,attribute:`subtitle-right-text`})],b.prototype,`subtitleRightText`,void 0),f([s({type:String,attribute:`description-text`})],b.prototype,`descriptionText`,void 0),f([s({type:Boolean,reflect:!0,attribute:`show-media`})],b.prototype,`showMedia`,void 0),f([s({type:String,reflect:!0,attribute:`media-height`})],b.prototype,`mediaHeight`,void 0),f([s({type:Boolean,reflect:!0,attribute:`show-body`})],b.prototype,`showBody`,void 0),f([s({type:Boolean,reflect:!0,attribute:`show-actions`})],b.prototype,`showActions`,void 0),f([s({type:String,reflect:!0,attribute:`action-style`})],b.prototype,`actionStyle`,void 0),f([s({type:String})],b.prototype,`icon`,void 0),f([s({type:Boolean,reflect:!0,attribute:`show-action-menu`})],b.prototype,`showActionMenu`,void 0),f([s({type:String,attribute:`action-menu-label`})],b.prototype,`actionMenuLabel`,void 0),f([s({type:Boolean,reflect:!0,attribute:`show-description`})],b.prototype,`showDescription`,void 0),f([s({type:String,reflect:!0,attribute:`title-size`})],b.prototype,`titleSize`,void 0),f([s({type:String,reflect:!0})],b.prototype,`roundness`,void 0),f([s({type:String,reflect:!0})],b.prototype,`surface`,void 0),f([s({type:Number,attribute:`description-lines`})],b.prototype,`descriptionLines`,void 0),f([s({type:Boolean,reflect:!0,attribute:`show-expand`})],b.prototype,`showExpand`,void 0),f([s({type:Boolean,reflect:!0})],b.prototype,`expanded`,void 0),f([s({type:String,attribute:`expand-label`})],b.prototype,`expandLabel`,void 0),f([s({type:String,attribute:`collapse-label`})],b.prototype,`collapseLabel`,void 0),f([s({type:String,reflect:!0,attribute:`data-density`})],b.prototype,`density`,void 0),f([l()],b.prototype,`_menuOpen`,void 0),b=f([g(`mms-card`)],b)}));export{x as t};