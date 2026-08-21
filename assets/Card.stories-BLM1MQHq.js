import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,s as d,t as f}from"./decorate-Bygya6Tu.js";import{r as p,t as m}from"./focus.css-BrGuLyxh.js";import{t as h}from"./mms-icon.component-DRWi1aVe.js";import{n as g,t as _}from"./iframe-CSzr-2iw.js";import{i as v,n as y,r as b}from"./theme-constraints-xITgb_Dw.js";import{a as x,o as S,r as C,t as w}from"./a11y-outcome-CiARakld.js";var T,E=e((()=>{o(),u(),p(),h(),l(),T=class extends i{constructor(...e){super(...e),this.variant=`outlined`,this.colorScheme=`primary`,this.titleText=``,this.subtitleText=``,this.subtitleRightText=``,this.descriptionText=``,this.showMedia=!1,this.mediaHeight=`default`,this.showBody=!0,this.showActions=!1,this.actionStyle=`1-action`,this.icon=``,this.showActionMenu=!1,this.actionMenuLabel=`More actions`,this.showDescription=!0,this.titleSize=`heading-4`,this.roundness=`subtle`,this.surface=`solid`,this.descriptionLines=0,this.density=`default`,this._menuOpen=!1,this._handleSlotChange=()=>{this._propagateDensity()},this._handleOutsideClick=e=>{this._menuOpen&&(e.composedPath().includes(this)||(this._menuOpen=!1))},this._toggleMenu=e=>{e.stopPropagation(),this._menuOpen=!this._menuOpen},this._handleMenuKeyDown=e=>{e.key===`Escape`&&this._menuOpen&&(e.preventDefault(),this._menuOpen=!1,(this.shadowRoot?.querySelector(`.action-icon`))?.focus())}}static{this.styles=[m,r`
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
    `]}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._handleOutsideClick)}updated(e){e.has(`density`)&&this._propagateDensity()}_propagateDensity(){this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.assignedElements({flatten:!0}).forEach(e=>{e.setAttribute(`data-density`,this.density)})})}_renderActionMenu(){return this.showActionMenu?a`
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
    `:n}_renderMedia(){return this.showMedia?a`
      <div class="media-wrapper">
        <slot name="media" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `:n}_renderHeader(){let e=!!this.icon,t=!!this.subtitleText||!!this.subtitleRightText;return!this.titleText&&!e&&!this.showActionMenu&&!t?n:a`
      <div class="card-header">
        <div class="header">
          <div class="title-section">
            ${this.icon?a`
                  <div class="icon-wrapper">
                    <mms-icon name=${this.icon} size=${this.titleSize===`body-bold`?`md`:`lg`}></mms-icon>
                  </div>
                `:n}
            <div class="title-group">
              <span class="title" id="card-title">${this.titleText}</span>
            </div>
            ${this.showActionMenu?this._renderActionMenu():n}
          </div>
          ${this.subtitleText||this.subtitleRightText?a`
                <div class="subtitle-row">
                  ${this.subtitleText?a`<span class="subtitle">${this.subtitleText}</span>`:n}
                  ${this.subtitleRightText?a`<span class="subtitle-right">${this.subtitleRightText}</span>`:n}
                </div>
              `:n}
        </div>
      </div>
    `}_renderBody(){return this.showBody?a`
      <div class="card-body">
        ${this.showDescription&&this.descriptionText?a`
              <p
                class="description ${this.descriptionLines>0?`clamped`:``}"
                style=${this.descriptionLines>0?`-webkit-line-clamp: ${this.descriptionLines}`:``}
              >
                ${this.descriptionText}
              </p>
            `:n}
        <slot name="body-content" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `:n}_renderFooter(){return this.showActions?a`
      <div class="card-footer">
        <slot name="actions" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `:n}render(){return a`
      ${this._renderMedia()}
      <div class="card-content" role="group" aria-labelledby=${this.titleText?`card-title`:n}>
        ${this._renderHeader()} ${this._renderBody()} ${this._renderFooter()}
      </div>
    `}},f([c({type:String,reflect:!0})],T.prototype,`variant`,void 0),f([c({type:String,reflect:!0,attribute:`color-scheme`})],T.prototype,`colorScheme`,void 0),f([c({type:String,attribute:`title-text`})],T.prototype,`titleText`,void 0),f([c({type:String,attribute:`subtitle-text`})],T.prototype,`subtitleText`,void 0),f([c({type:String,attribute:`subtitle-right-text`})],T.prototype,`subtitleRightText`,void 0),f([c({type:String,attribute:`description-text`})],T.prototype,`descriptionText`,void 0),f([c({type:Boolean,reflect:!0,attribute:`show-media`})],T.prototype,`showMedia`,void 0),f([c({type:String,reflect:!0,attribute:`media-height`})],T.prototype,`mediaHeight`,void 0),f([c({type:Boolean,reflect:!0,attribute:`show-body`})],T.prototype,`showBody`,void 0),f([c({type:Boolean,reflect:!0,attribute:`show-actions`})],T.prototype,`showActions`,void 0),f([c({type:String,reflect:!0,attribute:`action-style`})],T.prototype,`actionStyle`,void 0),f([c({type:String})],T.prototype,`icon`,void 0),f([c({type:Boolean,reflect:!0,attribute:`show-action-menu`})],T.prototype,`showActionMenu`,void 0),f([c({type:String,attribute:`action-menu-label`})],T.prototype,`actionMenuLabel`,void 0),f([c({type:Boolean,reflect:!0,attribute:`show-description`})],T.prototype,`showDescription`,void 0),f([c({type:String,reflect:!0,attribute:`title-size`})],T.prototype,`titleSize`,void 0),f([c({type:String,reflect:!0})],T.prototype,`roundness`,void 0),f([c({type:String,reflect:!0})],T.prototype,`surface`,void 0),f([c({type:Number,attribute:`description-lines`})],T.prototype,`descriptionLines`,void 0),f([c({type:String,reflect:!0,attribute:`data-density`})],T.prototype,`density`,void 0),f([d()],T.prototype,`_menuOpen`,void 0),T=f([s(`mms-card`)],T)})),D=t({Overview:()=>F,PlaygroundStory:()=>I,__namedExportsOrder:()=>L,default:()=>j}),O,k,A,j,M,N,P,F,I,L,R=e((()=>{o(),E(),g(),_(),x(),w(),b(),O=`.check.x.gear.user.calendar.shopping-cart.heart.star.question.info.flag.heartbeat.first-aid.first-aid-kit.pulse.stethoscope.hospital.pill.tooth.wheelchair.hand-heart.baby.wallet.credit-card.piggy-bank.coins.currency-dollar.bank.scales.handshake.buildings.building.house.identification-card.map-pin.globe.compass.users-three.user-circle.person.graduation-cap.clipboard-text.book-open.certificate.chart-line-up.chart-pie.chart-bar.shield.shield-check.umbrella.lifebuoy.medal.trophy`.split(`.`),k=[``,`community-support`,`family-consultation`,`parent-and-baby`,`caregiver-support`,`team-collaboration`,`community-outreach`,`support-call`],A={"community-support":{url:`https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80&auto=format&fit=crop`,alt:`Two people holding hands across a table in a moment of comfort`},"family-consultation":{url:`https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=800&q=80&auto=format&fit=crop`,alt:`A doctor consults with a mother and child in an office`},"parent-and-baby":{url:`https://images.unsplash.com/photo-1556566353-cdcb88a69f3c?w=800&q=80&auto=format&fit=crop`,alt:`A woman and baby sitting together on a sofa`},"caregiver-support":{url:`https://images.unsplash.com/photo-1543333995-a78aea2eee50?w=800&q=80&auto=format&fit=crop`,alt:`A caregiver standing next to a woman using a wheelchair`},"team-collaboration":{url:`https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&q=80&auto=format&fit=crop`,alt:`Four coworkers smiling together around a laptop at a table`},"community-outreach":{url:`https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?w=800&q=80&auto=format&fit=crop`,alt:`An elderly woman in a wheelchair talking with a man`},"support-call":{url:`https://images.unsplash.com/photo-1758876022836-70b89d3e6944?w=800&q=80&auto=format&fit=crop`,alt:`A woman talking on the phone at her desk with a laptop`}},j={title:`Content Display/Card`,tags:[`!autodocs`]},M={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},N=`680px`,P=`960px`,F={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${P}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${M.h1}">Card</h1>
      <p style="${M.body} opacity: 0.85; max-width: ${N}; margin-bottom: 2rem;">
        Displays content and actions related to a single subject. Typically shown as part of a
        group, each card highlights key details and distinguishes it from the set.
        <code style="${M.monoSm}">mms-card</code> composes an optional media slot, header
        (icon, title, subtitle, overflow trigger), body (description + custom slot), and
        footer actions.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic usage -->
      <h2 style="${M.h2}">Basic usage</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        A title and description are enough for a minimal card.
      </p>

      <div style="margin-bottom: 2rem; max-width: 360px;">
        <mms-card title-text="Plan overview" description-text="See what's covered under your current plan, including copays and deductibles."></mms-card>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Layout & sizing -->
      <h2 style="${M.h2}">Layout &amp; sizing</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1rem;">
        <code style="${M.monoSm}">mms-card</code> is fluid — it fills whatever container it's
        placed in and grows or shrinks with it. It sets no <code style="${M.monoSm}">width</code>
        of its own, only <code style="${M.monoSm}">min-width: 200px</code> to keep it from
        collapsing below a legible size. Real-world width is a layout decision, not a card prop:
        drop it into a CSS Grid cell, a flex item, or any sized container.
      </p>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        mms doesn't ship a dedicated card-grid layout component yet — compose one directly with
        the structural gap tokens:
      </p>

      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${M.monoSm} margin-bottom: 2rem;"><code>&lt;!-- CSS Grid --&gt;
&lt;div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--layout-gap-comfortable);"&gt;
  &lt;mms-card&gt;...&lt;/mms-card&gt;
  &lt;mms-card&gt;...&lt;/mms-card&gt;
  &lt;mms-card&gt;...&lt;/mms-card&gt;
&lt;/div&gt;

&lt;!-- Flexbox --&gt;
&lt;div style="display: flex; flex-wrap: wrap; gap: var(--layout-gap-comfortable);"&gt;
  &lt;mms-card style="flex: 1 1 280px;"&gt;...&lt;/mms-card&gt;
  &lt;mms-card style="flex: 1 1 280px;"&gt;...&lt;/mms-card&gt;
&lt;/div&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Variant -->
      <h2 style="${M.h2}">Variant</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">variant</code> controls elevation and border treatment.
        <code style="${M.monoSm}">accent-top</code>/<code style="${M.monoSm}">accent-left</code>
        add a <code style="${M.monoSm}">colorScheme</code>-driven accent border.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Outlined (default)</p>
          <mms-card variant="outlined" title-text="Outlined" description-text="Flat with a hairline border, no shadow."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Elevated</p>
          <mms-card variant="elevated" title-text="Elevated" description-text="Uses elevation shadow, no border."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Accent top</p>
          <mms-card variant="accent-top" color-scheme="secondary" title-text="Accent top" description-text="4px accent border along the top edge."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Accent left</p>
          <mms-card variant="accent-left" color-scheme="accent" title-text="Accent left" description-text="4px accent border along the left edge."></mms-card>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Roundness -->
      <h2 style="${M.h2}">Roundness</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">roundness</code> sets the corner radius independently of
        <code style="${M.monoSm}">variant</code>: <code style="${M.monoSm}">boxed</code> (square
        corners), <code style="${M.monoSm}">subtle</code> (default), or
        <code style="${M.monoSm}">rounded</code>.
      </p>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Boxed</p>
          <mms-card roundness="boxed" title-text="Boxed" description-text="Square corners, no radius."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Subtle (default)</p>
          <mms-card roundness="subtle" title-text="Subtle" description-text="A small corner radius."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Rounded</p>
          <mms-card roundness="rounded" title-text="Rounded" description-text="A larger corner radius."></mms-card>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Surface -->
      <h2 style="${M.h2}">Surface</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">surface</code> sets the card's background fill:
        <code style="${M.monoSm}">solid</code> (default, flat surface color) or
        <code style="${M.monoSm}">tint</code> (a subtle neutral tint) — useful when a card sits on
        a page background it needs to visually separate from without adding a border or shadow.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Solid (default)</p>
          <mms-card surface="solid" title-text="Solid" description-text="Flat surface background."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Tint</p>
          <mms-card surface="tint" title-text="Tint" description-text="Subtle neutral surface tint."></mms-card>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Media -->
      <h2 style="${M.h2}">Media</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">show-media</code> reveals the top media slot;
        <code style="${M.monoSm}">media-height</code> switches its aspect ratio between
        16:9 (default) and 21:9.
      </p>

      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-card show-media title-text="Provider search" description-text="Find in-network doctors and specialists near you.">
          <img
            slot="media"
            src="${A[`family-consultation`].url}"
            alt="${A[`family-consultation`].alt}"
            style="width: 100%; height: 100%; object-fit: cover;"
          />
        </mms-card>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Header composition -->
      <h2 style="${M.h2}">Header composition</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        The header can combine an <code style="${M.monoSm}">icon</code>, a subtitle row, and an
        overflow trigger (<code style="${M.monoSm}">show-action-menu</code>). It renders only when
        at least one of these has real content — an all-default card has no empty header wrapper.
      </p>

      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-card
          title-text="Claims"
          icon="clipboard-text"
          subtitle-text="Updated today"
          show-action-menu
          description-text="Track the status of submitted claims and view payment history."
        >
          <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">View details</button>
          <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">Dismiss</button>
        </mms-card>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Action menu content -->
      <h2 style="${M.h2}">Configuring action menu options</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1rem;">
        <code style="${M.monoSm}">mms-card</code> does not ship a menu-item component. The
        <code style="${M.monoSm}">action-menu</code> slot accepts any consumer-supplied markup —
        the examples above use plain <code style="${M.monoSm}">&lt;button&gt;</code> elements, but a
        slotted <code style="${M.monoSm}">mms-link</code>, an anchor, or any other interactive
        element works the same way. The card only owns the disclosure shell: the overflow
        trigger, the open/closed panel, dismissal on <code style="${M.monoSm}">Escape</code> or an
        outside click, and <code style="${M.monoSm}">data-density</code> propagation onto whatever
        is slotted.
      </p>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        Everything else is the consumer's responsibility: each menu option's click handling,
        disabled/hover states, and its own typography and color tokens per the
        <code style="${M.monoSm}">css-tokens.md</code> contract (see the demo buttons' inline
        styles for the token set to match: <code style="${M.monoSm}">--type-body-md-family</code>,
        <code style="${M.monoSm}">--type-body-md-size</code>,
        <code style="${M.monoSm}">--type-body-md-line-height</code>,
        <code style="${M.monoSm}">--font-weight-regular</code>,
        <code style="${M.monoSm}">--color-text-default</code>). There is currently no built-in
        arrow-key roving navigation between slotted items — each one is a normal tab stop, and
        only the disclosure itself (open/close via the trigger, close via
        <code style="${M.monoSm}">Escape</code>) is handled internally. This is a deliberate,
        temporary stand-in until a dedicated <code style="${M.monoSm}">mms-action-menu</code>
        component exists; the <code style="${M.monoSm}">show-action-menu</code> prop and
        <code style="${M.monoSm}">action-menu</code> slot names are stable so that future
        component can drop in without changing the public API.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Title size -->
      <h2 style="${M.h2}">Title size</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">title-size</code> picks the type scale for the title:
        <code style="${M.monoSm}">heading-4</code> (default) is the bold heading-4 scale;
        <code style="${M.monoSm}">body-bold</code> drops to the smaller body-md scale, kept bold
        so it still reads as a title — useful when a card's title needs to read as a label
        rather than a heading, e.g. inside a dense list of cards.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">heading-4 (default)</p>
          <mms-card title-size="heading-4" title-text="Plan overview" description-text="Heading-4 scale, bold."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">body-bold</p>
          <mms-card title-size="body-bold" title-text="Plan overview" description-text="Body-md scale, bold."></mms-card>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Description clamping -->
      <h2 style="${M.h2}">Description clamping</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">description-lines</code> clamps the description to a fixed
        number of lines with an ellipsis; <code style="${M.monoSm}">0</code> (default) never clamps.
      </p>

      <div style="max-width: 320px; margin-bottom: 2rem;">
        <mms-card
          title-text="Clamped to 2 lines"
          description-text="This description is intentionally long enough to wrap past two lines so the clamp behavior — an ellipsis after the second line — is visible in this example."
          description-lines="2"
        ></mms-card>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Footer actions -->
      <h2 style="${M.h2}">Footer actions</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">show-actions</code> reveals the footer;
        <code style="${M.monoSm}">action-style</code> lays out slotted
        <code style="${M.monoSm}">actions</code> content:
        <code style="${M.monoSm}">1-action</code> (default, single trailing action),
        <code style="${M.monoSm}">hr-actions</code> (horizontal, evenly split),
        <code style="${M.monoSm}">vt-actions</code> (stacked, full-width),
        <code style="${M.monoSm}">link</code> (a single <code style="${M.monoSm}">mms-link</code>
        instead of a button).
      </p>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        Action button <code style="${M.monoSm}">color-scheme</code> is independent of the card's own
        <code style="${M.monoSm}">colorScheme</code> — set it directly on each slotted
        <code style="${M.monoSm}">mms-button</code>. This lets a card's accent border color differ from
        its action button color, a common pairing. See <em>Density</em> below for how
        <code style="${M.monoSm}">density</code> affects footer spacing.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">1 action (default)</p>
          <mms-card title-text="Update payment method" show-actions action-style="1-action">
            <mms-button slot="actions" variant="primary" label="Update"></mms-button>
          </mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Horizontal (hr-actions)</p>
          <mms-card title-text="Review application" show-actions action-style="hr-actions">
            <mms-button slot="actions" variant="secondary" full-width label="Cancel"></mms-button>
            <mms-button slot="actions" variant="primary" full-width label="Submit"></mms-button>
          </mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Vertical (vt-actions)</p>
          <mms-card title-text="Upgrade plan" show-actions action-style="vt-actions">
            <mms-button slot="actions" variant="primary" full-width label="Upgrade"></mms-button>
            <mms-button slot="actions" variant="secondary" full-width label="Maybe later"></mms-button>
          </mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Link</p>
          <mms-card title-text="Coverage summary" show-actions action-style="link">
            <mms-link slot="actions" label="View details" right-icon="arrow-right"></mms-link>
          </mms-card>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Density -->
      <h2 style="${M.h2}">Density</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        <code style="${M.monoSm}">density</code> (read from the page-level
        <code style="${M.monoSm}">data-density</code> attribute) tightens the card's internal
        spacing and is automatically propagated as <code style="${M.monoSm}">data-density</code>
        onto all slotted content — actions, media, body content, and the action menu — with no
        per-slot wiring needed. Unlike <code style="${M.monoSm}">color-scheme</code>, which stays
        independent per slotted element, density is a page-wide global prop everything shares.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Default</p>
          <mms-card
            data-density="default"
            icon="clipboard-text"
            title-text="Claims"
            subtitle-text="Updated today"
            description-text="Track the status of submitted claims and view payment history."
            show-actions
            action-style="1-action"
          >
            <mms-button slot="actions" variant="primary" label="View"></mms-button>
          </mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${M.h3}">Compact</p>
          <mms-card
            data-density="compact"
            icon="clipboard-text"
            title-text="Claims"
            subtitle-text="Updated today"
            description-text="Track the status of submitted claims and view payment history."
            show-actions
            action-style="1-action"
          >
            <mms-button slot="actions" variant="primary" label="View"></mms-button>
          </mms-card>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Body content slot -->
      <h2 style="${M.h2}">Custom body content</h2>
      <p style="${M.bodySm} opacity: 0.85; max-width: ${N}; margin-bottom: 1.5rem;">
        The <code style="${M.monoSm}">body-content</code> slot accepts arbitrary markup below
        the description — lists, links, or other mms components.
      </p>

      <div style="max-width: 360px; margin-bottom: 1.5rem;">
        <mms-card title-text="What's included" description-text="This plan includes:">
          <ul slot="body-content" style="margin: 0; padding-left: 1.25rem; ${M.bodySm}">
            <li>Primary care visits</li>
            <li>Prescription drug coverage</li>
            <li>Emergency services</li>
          </ul>
        </mms-card>
      </div>

      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${M.monoSm} margin-bottom: 2rem;"><code>&lt;mms-card title-text="What's included" description-text="This plan includes:"&gt;
  &lt;ul slot="body-content"&gt;
    &lt;li&gt;Primary care visits&lt;/li&gt;
    &lt;li&gt;Prescription drug coverage&lt;/li&gt;
    &lt;li&gt;Emergency services&lt;/li&gt;
  &lt;/ul&gt;
&lt;/mms-card&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${M.h2}">Accessibility</h2>

      <h3 style="${M.h3}">WCAG 2.2 AA Compliance</h3>
      ${C(S.card.rows)}

      <h3 style="${M.h3}">Screen Reader Behavior</h3>
      <ul style="${M.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Card region:</strong> Exposed as a labelled group (<code style="${M.monoSm}">role="group"</code> tied to the title via <code style="${M.monoSm}">aria-labelledby</code>) — not a landmark, since a page typically contains many cards</li>
        <li style="margin-bottom: 0.5rem;"><strong>Action menu trigger:</strong> Announces as a button with a popup (<code style="${M.monoSm}">aria-haspopup</code>), its accessible name from <code style="${M.monoSm}">action-menu-label</code>, and the current expanded/collapsed state</li>
        <li style="margin-bottom: 0.5rem;"><strong>Action menu toggle:</strong> Announces the updated expanded/collapsed state immediately after activation</li>
        <li><strong>Media:</strong> Slotted — the consumer is responsible for its own alt text; the media wrapper itself carries no accessible name</li>
      </ul>

      <h3 style="${M.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to the action menu trigger, if present — the card itself is not a tab stop</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggle the action menu open or closed</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close an open action menu and return focus to its trigger</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},I={name:`Playground`,tags:[`!dev`],args:{variant:`outlined`,colorScheme:`primary`,roundness:`subtle`,surface:`solid`,titleText:`Plan overview`,titleSize:`heading-4`,icon:``,showActionMenu:!1,actionMenuLabel:`More actions`,subtitleText:``,subtitleRightText:``,showMedia:!1,mediaHeight:`default`,mediaImage:``,showBody:!0,showDescription:!0,descriptionText:`See what's covered under your current plan, including copays and deductibles.`,descriptionLines:0,showBodyContent:!1,showActions:!1,actionStyle:`1-action`,actionColorScheme:`primary`,actionRoundness:`subtle`,theme:`maximus`,density:`default`},decorators:[e=>a`
        <div
          style="
            min-height: 200px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 100%; max-width: 360px;">${e()}</div>
        </div>
      `],argTypes:{variant:{name:`Variant`,control:`select`,options:[`outlined`,`elevated`,`accent-top`,`accent-left`],description:`Visual treatment`,table:{category:`Appearance`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Accent border color — only visible on accent-top/accent-left variants`,table:{category:`Appearance`}},roundness:{name:`Roundness`,control:`select`,options:[`boxed`,`subtle`,`rounded`],description:`Corner radius: boxed (0) | subtle (default, 8px) | rounded (16px)`,table:{category:`Appearance`}},surface:{name:`Surface`,control:`select`,options:[`tint`,`solid`],description:`Background fill: solid (default, flat white/near-black) | tint (subtle neutral tint)`,table:{category:`Appearance`}},titleText:{name:`Title Text`,control:`text`,table:{category:`Header`}},titleSize:{name:`Title Size`,control:`select`,options:[`heading-4`,`body-bold`],table:{category:`Header`}},icon:{name:`Icon`,control:`select`,options:O,description:`Curated list of illustrative/contextual card icons (health, finance, civic, people, docs, trust). In code, any icon from the full Phosphor registry (1,512 icons) can be used. Empty selection ("Choose option...") hides the icon.`,table:{category:`Header`}},showActionMenu:{name:`Show Action Menu`,control:`boolean`,description:`Renders demo overflow trigger + menu items when true`,table:{category:`Header`}},actionMenuLabel:{name:`Action Menu Label`,control:`text`,table:{category:`Header`},if:{arg:`showActionMenu`,truthy:!0}},subtitleText:{name:`Subtitle Text`,control:`text`,description:`Left subtitle — hidden when empty`,table:{category:`Header`}},subtitleRightText:{name:`Subtitle Right Text`,control:`text`,description:`Right subtitle — hidden when empty`,table:{category:`Header`}},showMedia:{name:`Show Media`,control:`boolean`,table:{category:`Media`}},mediaHeight:{name:`Media Height`,control:`select`,options:[`default`,`short`],description:`Media aspect ratio: default (16:9) | short (21:9)`,table:{category:`Media`},if:{arg:`showMedia`,truthy:!0}},mediaImage:{name:`Media Image`,control:`select`,options:k,description:`Storybook demo control only — swaps in a curated stock photo so you can preview the media slot at real proportions. Not a real mms-card prop: consumers slot their own &lt;img&gt; or media markup into the media slot.`,table:{category:`Media`},if:{arg:`showMedia`,truthy:!0}},showBody:{name:`Show Body`,control:`boolean`,table:{category:`Body`}},showDescription:{name:`Show Description`,control:`boolean`,table:{category:`Body`},if:{arg:`showBody`,truthy:!0}},descriptionText:{name:`Description Text`,control:`text`,table:{category:`Body`},if:{arg:`showDescription`,truthy:!0}},descriptionLines:{name:`Description Lines`,control:{type:`range`,min:0,max:5,step:1},description:`Clamp description to this many lines (0 = no clamp)`,table:{category:`Body`},if:{arg:`showDescription`,truthy:!0}},showBodyContent:{name:`Show Body Content`,control:`boolean`,description:`Storybook demo only — projects a demo list into the body-content slot, which mms-card always renders (unconditional, matching mms-modal).`,table:{category:`Body`},if:{arg:`showBody`,truthy:!0}},showActions:{name:`Show Actions`,control:`boolean`,table:{category:`Footer`}},actionStyle:{name:`Action Style`,control:`select`,options:[`1-action`,`hr-actions`,`vt-actions`,`link`],description:"Footer layout. The `actions` slot is a real slot, not a fixed template — 1-action/hr-actions/vt-actions default to mms-button and link defaults to mms-link in this Playground purely to illustrate the pattern, but any compatible component or variant can be slotted in (e.g. a secondary or ghost mms-button instead of the default shown here).",table:{category:`Footer`},if:{arg:`showActions`,truthy:!0}},actionColorScheme:{name:`Action Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Color palette for footer actions — independent of the card's own Color Scheme (accent border). Common pairing: a differently-colored accent border with consistent action-button colors. Footer actions are mms-button, so the same Tier 1-only rule applies (see Color Framework → Color Tiering): a Tier 2/3 choice for the selected theme is rejected, not rendered. Error is excluded — it's reserved for destructive/alert-driven contexts (e.g. mms-modal's alertType), not a general-purpose footer action color.`,table:{category:`Footer`},if:{arg:`showActions`,truthy:!0}},actionRoundness:{name:`Action Roundness`,control:`select`,options:[`boxed`,`subtle`,`rounded`],description:`Corner radius for footer mms-button actions: boxed (0), subtle (4px), rounded (pill) — independent of the card's own Roundness. This Playground control is illustrative only; the slot accepts any roundness a consumer chooses.`,table:{category:`Footer`},if:{arg:`showActions`,truthy:!0}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`uss-oh-dvs`,`default`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Spacing density`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.variant!==`outlined`&&r.push(`variant="${n.variant}"`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.roundness!==`subtle`&&r.push(`roundness="${n.roundness}"`),n.surface!==`solid`&&r.push(`surface="${n.surface}"`),n.titleText&&r.push(`title-text="${n.titleText}"`),n.subtitleText&&r.push(`subtitle-text="${n.subtitleText}"`),n.subtitleRightText&&r.push(`subtitle-right-text="${n.subtitleRightText}"`),n.descriptionText&&r.push(`description-text="${n.descriptionText}"`),n.showDescription||r.push(`show-description="false"`),n.descriptionLines>0&&r.push(`description-lines="${n.descriptionLines}"`),n.showMedia&&r.push(`show-media`),n.mediaHeight!=="default"&&r.push(`media-height="${n.mediaHeight}"`),n.showBody||r.push(`show-body="false"`),n.showActions&&r.push(`show-actions`),n.actionStyle!==`1-action`&&r.push(`action-style="${n.actionStyle}"`),n.icon&&r.push(`icon="${n.icon}"`),n.showActionMenu&&r.push(`show-action-menu`),n.showActionMenu&&r.push(`action-menu-label="${n.actionMenuLabel}"`),n.titleSize!==`heading-4`&&r.push(`title-size="${n.titleSize}"`),`<mms-card${r.length?`
  `+r.join(`
  `):``}\n></mms-card>`},language:`html`}}},render:e=>{let t=e.showActions&&e.actionStyle!==`link`,r=!t||v(e.theme,e.actionColorScheme);return a`
      <mms-card
        variant=${e.variant}
        color-scheme=${e.colorScheme}
        title-text=${e.titleText}
        subtitle-text=${e.subtitleText}
        subtitle-right-text=${e.subtitleRightText}
        description-text=${e.descriptionText}
        ?show-description=${e.showDescription}
        description-lines=${e.descriptionLines}
        ?show-media=${e.showMedia}
        media-height=${e.mediaHeight}
        ?show-body=${e.showBody}
        ?show-actions=${e.showActions}
        action-style=${e.actionStyle}
        icon=${e.icon}
        ?show-action-menu=${e.showActionMenu}
        action-menu-label=${e.actionMenuLabel}
        title-size=${e.titleSize}
        roundness=${e.roundness}
        surface=${e.surface}
        data-density=${e.density}
      >
        ${e.showMedia?e.mediaImage&&A[e.mediaImage]?a`<img
                slot="media"
                src="${A[e.mediaImage].url}"
                alt="${A[e.mediaImage].alt}"
                style="width: 100%; height: 100%; object-fit: cover;"
              />`:a`<div slot="media" style="width: 100%; height: 100%; background: linear-gradient(135deg, #6366f1, #22d3ee);"></div>`:n}
        ${e.showActionMenu?a`
              <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">View details</button>
              <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">Dismiss</button>
            `:n}
        ${e.showBodyContent?a`
              <ul
                slot="body-content"
                style="margin: 0; padding-left: 1.25rem; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height);"
              >
                <li>Primary care visits</li>
                <li>Prescription drug coverage</li>
              </ul>
            `:n}
        ${t&&!r?(()=>{let t=y(e.theme,e.actionColorScheme),n=t===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,r=t===2?`Lacks step 10 (hover state). Use for branded text or badges, not buttons.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return a`
                <div
                  slot="actions"
                  style="
                    padding: 1rem 1.25rem;
                    background: #fef2f2;
                    border: 1px solid #ef4444;
                    border-radius: 6px;
                    color: #991b1b;
                    font-size: 0.8125rem;
                    line-height: 1.5;
                  "
                >
                  <strong style="display: block; margin-bottom: 0.375rem;">Invalid combination</strong>
                  <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.theme}</code> theme +
                  <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.actionColorScheme}</code> action color scheme
                  <p style="margin: 0.5rem 0 0; opacity: 0.85;">
                    <strong>${n}:</strong> ${r}
                  </p>
                  <p style="margin: 0.375rem 0 0; font-size: 0.75rem; opacity: 0.7;">
                    See <em>Color Framework → Color Tiering</em> for details.
                  </p>
                </div>
              `})():n}
        ${e.showActions&&e.actionStyle===`1-action`&&r?a`<mms-button
              slot="actions"
              variant="primary"
              color-scheme=${e.actionColorScheme}
              roundness=${e.actionRoundness}
              label="Action"
            ></mms-button>`:n}
        ${e.showActions&&e.actionStyle===`hr-actions`&&r?a`
              <mms-button
                slot="actions"
                variant="secondary"
                color-scheme=${e.actionColorScheme}
                roundness=${e.actionRoundness}
                full-width
                label="Cancel"
              ></mms-button>
              <mms-button
                slot="actions"
                variant="primary"
                color-scheme=${e.actionColorScheme}
                roundness=${e.actionRoundness}
                full-width
                label="Action"
              ></mms-button>
            `:n}
        ${e.showActions&&e.actionStyle===`vt-actions`&&r?a`
              <mms-button
                slot="actions"
                variant="primary"
                color-scheme=${e.actionColorScheme}
                roundness=${e.actionRoundness}
                full-width
                label="Action"
              ></mms-button>
              <mms-button
                slot="actions"
                variant="secondary"
                color-scheme=${e.actionColorScheme}
                roundness=${e.actionRoundness}
                full-width
                label="Cancel"
              ></mms-button>
            `:n}
        ${e.showActions&&e.actionStyle===`link`?a`<mms-link slot="actions" label="View details" right-icon="arrow-right"></mms-link>`:n}
      </mms-card>
    `}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Card</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Displays content and actions related to a single subject. Typically shown as part of a
        group, each card highlights key details and distinguishes it from the set.
        <code style="\${t.monoSm}">mms-card</code> composes an optional media slot, header
        (icon, title, subtitle, overflow trigger), body (description + custom slot), and
        footer actions.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        A title and description are enough for a minimal card.
      </p>

      <div style="margin-bottom: 2rem; max-width: 360px;">
        <mms-card title-text="Plan overview" description-text="See what's covered under your current plan, including copays and deductibles."></mms-card>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Layout & sizing -->
      <h2 style="\${t.h2}">Layout &amp; sizing</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        <code style="\${t.monoSm}">mms-card</code> is fluid — it fills whatever container it's
        placed in and grows or shrinks with it. It sets no <code style="\${t.monoSm}">width</code>
        of its own, only <code style="\${t.monoSm}">min-width: 200px</code> to keep it from
        collapsing below a legible size. Real-world width is a layout decision, not a card prop:
        drop it into a CSS Grid cell, a flex item, or any sized container.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        mms doesn't ship a dedicated card-grid layout component yet — compose one directly with
        the structural gap tokens:
      </p>

      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm} margin-bottom: 2rem;"><code>&lt;!-- CSS Grid --&gt;
&lt;div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--layout-gap-comfortable);"&gt;
  &lt;mms-card&gt;...&lt;/mms-card&gt;
  &lt;mms-card&gt;...&lt;/mms-card&gt;
  &lt;mms-card&gt;...&lt;/mms-card&gt;
&lt;/div&gt;

&lt;!-- Flexbox --&gt;
&lt;div style="display: flex; flex-wrap: wrap; gap: var(--layout-gap-comfortable);"&gt;
  &lt;mms-card style="flex: 1 1 280px;"&gt;...&lt;/mms-card&gt;
  &lt;mms-card style="flex: 1 1 280px;"&gt;...&lt;/mms-card&gt;
&lt;/div&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Variant -->
      <h2 style="\${t.h2}">Variant</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">variant</code> controls elevation and border treatment.
        <code style="\${t.monoSm}">accent-top</code>/<code style="\${t.monoSm}">accent-left</code>
        add a <code style="\${t.monoSm}">colorScheme</code>-driven accent border.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Outlined (default)</p>
          <mms-card variant="outlined" title-text="Outlined" description-text="Flat with a hairline border, no shadow."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Elevated</p>
          <mms-card variant="elevated" title-text="Elevated" description-text="Uses elevation shadow, no border."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Accent top</p>
          <mms-card variant="accent-top" color-scheme="secondary" title-text="Accent top" description-text="4px accent border along the top edge."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Accent left</p>
          <mms-card variant="accent-left" color-scheme="accent" title-text="Accent left" description-text="4px accent border along the left edge."></mms-card>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Roundness -->
      <h2 style="\${t.h2}">Roundness</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">roundness</code> sets the corner radius independently of
        <code style="\${t.monoSm}">variant</code>: <code style="\${t.monoSm}">boxed</code> (square
        corners), <code style="\${t.monoSm}">subtle</code> (default), or
        <code style="\${t.monoSm}">rounded</code>.
      </p>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Boxed</p>
          <mms-card roundness="boxed" title-text="Boxed" description-text="Square corners, no radius."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Subtle (default)</p>
          <mms-card roundness="subtle" title-text="Subtle" description-text="A small corner radius."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Rounded</p>
          <mms-card roundness="rounded" title-text="Rounded" description-text="A larger corner radius."></mms-card>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Surface -->
      <h2 style="\${t.h2}">Surface</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">surface</code> sets the card's background fill:
        <code style="\${t.monoSm}">solid</code> (default, flat surface color) or
        <code style="\${t.monoSm}">tint</code> (a subtle neutral tint) — useful when a card sits on
        a page background it needs to visually separate from without adding a border or shadow.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Solid (default)</p>
          <mms-card surface="solid" title-text="Solid" description-text="Flat surface background."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Tint</p>
          <mms-card surface="tint" title-text="Tint" description-text="Subtle neutral surface tint."></mms-card>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Media -->
      <h2 style="\${t.h2}">Media</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">show-media</code> reveals the top media slot;
        <code style="\${t.monoSm}">media-height</code> switches its aspect ratio between
        16:9 (default) and 21:9.
      </p>

      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-card show-media title-text="Provider search" description-text="Find in-network doctors and specialists near you.">
          <img
            slot="media"
            src="\${mediaImageMap['family-consultation'].url}"
            alt="\${mediaImageMap['family-consultation'].alt}"
            style="width: 100%; height: 100%; object-fit: cover;"
          />
        </mms-card>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Header composition -->
      <h2 style="\${t.h2}">Header composition</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The header can combine an <code style="\${t.monoSm}">icon</code>, a subtitle row, and an
        overflow trigger (<code style="\${t.monoSm}">show-action-menu</code>). It renders only when
        at least one of these has real content — an all-default card has no empty header wrapper.
      </p>

      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-card
          title-text="Claims"
          icon="clipboard-text"
          subtitle-text="Updated today"
          show-action-menu
          description-text="Track the status of submitted claims and view payment history."
        >
          <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">View details</button>
          <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">Dismiss</button>
        </mms-card>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Action menu content -->
      <h2 style="\${t.h2}">Configuring action menu options</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        <code style="\${t.monoSm}">mms-card</code> does not ship a menu-item component. The
        <code style="\${t.monoSm}">action-menu</code> slot accepts any consumer-supplied markup —
        the examples above use plain <code style="\${t.monoSm}">&lt;button&gt;</code> elements, but a
        slotted <code style="\${t.monoSm}">mms-link</code>, an anchor, or any other interactive
        element works the same way. The card only owns the disclosure shell: the overflow
        trigger, the open/closed panel, dismissal on <code style="\${t.monoSm}">Escape</code> or an
        outside click, and <code style="\${t.monoSm}">data-density</code> propagation onto whatever
        is slotted.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Everything else is the consumer's responsibility: each menu option's click handling,
        disabled/hover states, and its own typography and color tokens per the
        <code style="\${t.monoSm}">css-tokens.md</code> contract (see the demo buttons' inline
        styles for the token set to match: <code style="\${t.monoSm}">--type-body-md-family</code>,
        <code style="\${t.monoSm}">--type-body-md-size</code>,
        <code style="\${t.monoSm}">--type-body-md-line-height</code>,
        <code style="\${t.monoSm}">--font-weight-regular</code>,
        <code style="\${t.monoSm}">--color-text-default</code>). There is currently no built-in
        arrow-key roving navigation between slotted items — each one is a normal tab stop, and
        only the disclosure itself (open/close via the trigger, close via
        <code style="\${t.monoSm}">Escape</code>) is handled internally. This is a deliberate,
        temporary stand-in until a dedicated <code style="\${t.monoSm}">mms-action-menu</code>
        component exists; the <code style="\${t.monoSm}">show-action-menu</code> prop and
        <code style="\${t.monoSm}">action-menu</code> slot names are stable so that future
        component can drop in without changing the public API.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Title size -->
      <h2 style="\${t.h2}">Title size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">title-size</code> picks the type scale for the title:
        <code style="\${t.monoSm}">heading-4</code> (default) is the bold heading-4 scale;
        <code style="\${t.monoSm}">body-bold</code> drops to the smaller body-md scale, kept bold
        so it still reads as a title — useful when a card's title needs to read as a label
        rather than a heading, e.g. inside a dense list of cards.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">heading-4 (default)</p>
          <mms-card title-size="heading-4" title-text="Plan overview" description-text="Heading-4 scale, bold."></mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">body-bold</p>
          <mms-card title-size="body-bold" title-text="Plan overview" description-text="Body-md scale, bold."></mms-card>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Description clamping -->
      <h2 style="\${t.h2}">Description clamping</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">description-lines</code> clamps the description to a fixed
        number of lines with an ellipsis; <code style="\${t.monoSm}">0</code> (default) never clamps.
      </p>

      <div style="max-width: 320px; margin-bottom: 2rem;">
        <mms-card
          title-text="Clamped to 2 lines"
          description-text="This description is intentionally long enough to wrap past two lines so the clamp behavior — an ellipsis after the second line — is visible in this example."
          description-lines="2"
        ></mms-card>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Footer actions -->
      <h2 style="\${t.h2}">Footer actions</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">show-actions</code> reveals the footer;
        <code style="\${t.monoSm}">action-style</code> lays out slotted
        <code style="\${t.monoSm}">actions</code> content:
        <code style="\${t.monoSm}">1-action</code> (default, single trailing action),
        <code style="\${t.monoSm}">hr-actions</code> (horizontal, evenly split),
        <code style="\${t.monoSm}">vt-actions</code> (stacked, full-width),
        <code style="\${t.monoSm}">link</code> (a single <code style="\${t.monoSm}">mms-link</code>
        instead of a button).
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Action button <code style="\${t.monoSm}">color-scheme</code> is independent of the card's own
        <code style="\${t.monoSm}">colorScheme</code> — set it directly on each slotted
        <code style="\${t.monoSm}">mms-button</code>. This lets a card's accent border color differ from
        its action button color, a common pairing. See <em>Density</em> below for how
        <code style="\${t.monoSm}">density</code> affects footer spacing.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">1 action (default)</p>
          <mms-card title-text="Update payment method" show-actions action-style="1-action">
            <mms-button slot="actions" variant="primary" label="Update"></mms-button>
          </mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Horizontal (hr-actions)</p>
          <mms-card title-text="Review application" show-actions action-style="hr-actions">
            <mms-button slot="actions" variant="secondary" full-width label="Cancel"></mms-button>
            <mms-button slot="actions" variant="primary" full-width label="Submit"></mms-button>
          </mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Vertical (vt-actions)</p>
          <mms-card title-text="Upgrade plan" show-actions action-style="vt-actions">
            <mms-button slot="actions" variant="primary" full-width label="Upgrade"></mms-button>
            <mms-button slot="actions" variant="secondary" full-width label="Maybe later"></mms-button>
          </mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Link</p>
          <mms-card title-text="Coverage summary" show-actions action-style="link">
            <mms-link slot="actions" label="View details" right-icon="arrow-right"></mms-link>
          </mms-card>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Density -->
      <h2 style="\${t.h2}">Density</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">density</code> (read from the page-level
        <code style="\${t.monoSm}">data-density</code> attribute) tightens the card's internal
        spacing and is automatically propagated as <code style="\${t.monoSm}">data-density</code>
        onto all slotted content — actions, media, body content, and the action menu — with no
        per-slot wiring needed. Unlike <code style="\${t.monoSm}">color-scheme</code>, which stays
        independent per slotted element, density is a page-wide global prop everything shares.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Default</p>
          <mms-card
            data-density="default"
            icon="clipboard-text"
            title-text="Claims"
            subtitle-text="Updated today"
            description-text="Track the status of submitted claims and view payment history."
            show-actions
            action-style="1-action"
          >
            <mms-button slot="actions" variant="primary" label="View"></mms-button>
          </mms-card>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Compact</p>
          <mms-card
            data-density="compact"
            icon="clipboard-text"
            title-text="Claims"
            subtitle-text="Updated today"
            description-text="Track the status of submitted claims and view payment history."
            show-actions
            action-style="1-action"
          >
            <mms-button slot="actions" variant="primary" label="View"></mms-button>
          </mms-card>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Body content slot -->
      <h2 style="\${t.h2}">Custom body content</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">body-content</code> slot accepts arbitrary markup below
        the description — lists, links, or other mms components.
      </p>

      <div style="max-width: 360px; margin-bottom: 1.5rem;">
        <mms-card title-text="What's included" description-text="This plan includes:">
          <ul slot="body-content" style="margin: 0; padding-left: 1.25rem; \${t.bodySm}">
            <li>Primary care visits</li>
            <li>Prescription drug coverage</li>
            <li>Emergency services</li>
          </ul>
        </mms-card>
      </div>

      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm} margin-bottom: 2rem;"><code>&lt;mms-card title-text="What's included" description-text="This plan includes:"&gt;
  &lt;ul slot="body-content"&gt;
    &lt;li&gt;Primary care visits&lt;/li&gt;
    &lt;li&gt;Prescription drug coverage&lt;/li&gt;
    &lt;li&gt;Emergency services&lt;/li&gt;
  &lt;/ul&gt;
&lt;/mms-card&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['card'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Card region:</strong> Exposed as a labelled group (<code style="\${t.monoSm}">role="group"</code> tied to the title via <code style="\${t.monoSm}">aria-labelledby</code>) — not a landmark, since a page typically contains many cards</li>
        <li style="margin-bottom: 0.5rem;"><strong>Action menu trigger:</strong> Announces as a button with a popup (<code style="\${t.monoSm}">aria-haspopup</code>), its accessible name from <code style="\${t.monoSm}">action-menu-label</code>, and the current expanded/collapsed state</li>
        <li style="margin-bottom: 0.5rem;"><strong>Action menu toggle:</strong> Announces the updated expanded/collapsed state immediately after activation</li>
        <li><strong>Media:</strong> Slotted — the consumer is responsible for its own alt text; the media wrapper itself carries no accessible name</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to the action menu trigger, if present — the card itself is not a tab stop</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggle the action menu open or closed</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close an open action menu and return focus to its trigger</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Appearance
    variant: 'outlined',
    colorScheme: 'primary',
    roundness: 'subtle',
    surface: 'solid',
    // Header
    titleText: 'Plan overview',
    titleSize: 'heading-4',
    icon: '',
    showActionMenu: false,
    actionMenuLabel: 'More actions',
    subtitleText: '',
    subtitleRightText: '',
    // Media
    showMedia: false,
    mediaHeight: 'default',
    mediaImage: '',
    // Body
    showBody: true,
    showDescription: true,
    descriptionText: "See what's covered under your current plan, including copays and deductibles.",
    descriptionLines: 0,
    showBodyContent: false,
    // Footer
    showActions: false,
    actionStyle: '1-action',
    actionColorScheme: 'primary',
    actionRoundness: 'subtle',
    // Global Props
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div
          style="
            min-height: 200px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 100%; max-width: 360px;">\${story()}</div>
        </div>
      \`;
  }],
  argTypes: {
    // ── Appearance ─────────────────────────────────────────────
    variant: {
      name: 'Variant',
      control: 'select',
      options: ['outlined', 'elevated', 'accent-top', 'accent-left'],
      description: 'Visual treatment',
      table: {
        category: 'Appearance'
      }
    },
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Accent border color — only visible on accent-top/accent-left variants',
      table: {
        category: 'Appearance'
      }
    },
    roundness: {
      name: 'Roundness',
      control: 'select',
      options: ['boxed', 'subtle', 'rounded'],
      description: 'Corner radius: boxed (0) | subtle (default, 8px) | rounded (16px)',
      table: {
        category: 'Appearance'
      }
    },
    surface: {
      name: 'Surface',
      control: 'select',
      options: ['tint', 'solid'],
      description: 'Background fill: solid (default, flat white/near-black) | tint (subtle neutral tint)',
      table: {
        category: 'Appearance'
      }
    },
    // ── Header ─────────────────────────────────────────────────
    titleText: {
      name: 'Title Text',
      control: 'text',
      table: {
        category: 'Header'
      }
    },
    titleSize: {
      name: 'Title Size',
      control: 'select',
      options: ['heading-4', 'body-bold'],
      table: {
        category: 'Header'
      }
    },
    icon: {
      name: 'Icon',
      control: 'select',
      options: iconOptions,
      description: 'Curated list of illustrative/contextual card icons (health, finance, civic, people, docs, trust). In code, any icon from the full Phosphor registry (1,512 icons) can be used. Empty selection ("Choose option...") hides the icon.',
      table: {
        category: 'Header'
      }
    },
    showActionMenu: {
      name: 'Show Action Menu',
      control: 'boolean',
      description: 'Renders demo overflow trigger + menu items when true',
      table: {
        category: 'Header'
      }
    },
    actionMenuLabel: {
      name: 'Action Menu Label',
      control: 'text',
      table: {
        category: 'Header'
      },
      if: {
        arg: 'showActionMenu',
        truthy: true
      }
    },
    subtitleText: {
      name: 'Subtitle Text',
      control: 'text',
      description: 'Left subtitle — hidden when empty',
      table: {
        category: 'Header'
      }
    },
    subtitleRightText: {
      name: 'Subtitle Right Text',
      control: 'text',
      description: 'Right subtitle — hidden when empty',
      table: {
        category: 'Header'
      }
    },
    // ── Media ──────────────────────────────────────────────────
    showMedia: {
      name: 'Show Media',
      control: 'boolean',
      table: {
        category: 'Media'
      }
    },
    mediaHeight: {
      name: 'Media Height',
      control: 'select',
      options: ['default', 'short'],
      description: 'Media aspect ratio: default (16:9) | short (21:9)',
      table: {
        category: 'Media'
      },
      if: {
        arg: 'showMedia',
        truthy: true
      }
    },
    mediaImage: {
      name: 'Media Image',
      control: 'select',
      options: mediaImageOptions,
      description: 'Storybook demo control only — swaps in a curated stock photo so you can preview the media slot at real proportions. Not a real mms-card prop: consumers slot their own &lt;img&gt; or media markup into the media slot.',
      table: {
        category: 'Media'
      },
      if: {
        arg: 'showMedia',
        truthy: true
      }
    },
    // ── Body ───────────────────────────────────────────────────
    showBody: {
      name: 'Show Body',
      control: 'boolean',
      table: {
        category: 'Body'
      }
    },
    showDescription: {
      name: 'Show Description',
      control: 'boolean',
      table: {
        category: 'Body'
      },
      if: {
        arg: 'showBody',
        truthy: true
      }
    },
    descriptionText: {
      name: 'Description Text',
      control: 'text',
      table: {
        category: 'Body'
      },
      if: {
        arg: 'showDescription',
        truthy: true
      }
    },
    descriptionLines: {
      name: 'Description Lines',
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 1
      },
      description: 'Clamp description to this many lines (0 = no clamp)',
      table: {
        category: 'Body'
      },
      if: {
        arg: 'showDescription',
        truthy: true
      }
    },
    showBodyContent: {
      name: 'Show Body Content',
      control: 'boolean',
      description: 'Storybook demo only — projects a demo list into the body-content slot, which mms-card always renders (unconditional, matching mms-modal).',
      table: {
        category: 'Body'
      },
      if: {
        arg: 'showBody',
        truthy: true
      }
    },
    // ── Footer ─────────────────────────────────────────────────
    showActions: {
      name: 'Show Actions',
      control: 'boolean',
      table: {
        category: 'Footer'
      }
    },
    actionStyle: {
      name: 'Action Style',
      control: 'select',
      options: ['1-action', 'hr-actions', 'vt-actions', 'link'],
      description: 'Footer layout. The \`actions\` slot is a real slot, not a fixed template — 1-action/hr-actions/vt-actions default to mms-button and link defaults to mms-link in this Playground purely to illustrate the pattern, but any compatible component or variant can be slotted in (e.g. a secondary or ghost mms-button instead of the default shown here).',
      table: {
        category: 'Footer'
      },
      if: {
        arg: 'showActions',
        truthy: true
      }
    },
    actionColorScheme: {
      name: 'Action Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Color palette for footer actions — independent of the card\\'s own Color Scheme (accent border). Common pairing: a differently-colored accent border with consistent action-button colors. Footer actions are mms-button, so the same Tier 1-only rule applies (see Color Framework → Color Tiering): a Tier 2/3 choice for the selected theme is rejected, not rendered. Error is excluded — it\\'s reserved for destructive/alert-driven contexts (e.g. mms-modal\\'s alertType), not a general-purpose footer action color.',
      table: {
        category: 'Footer'
      },
      if: {
        arg: 'showActions',
        truthy: true
      }
    },
    actionRoundness: {
      name: 'Action Roundness',
      control: 'select',
      options: ['boxed', 'subtle', 'rounded'],
      description: 'Corner radius for footer mms-button actions: boxed (0), subtle (4px), rounded (pill) — independent of the card\\'s own Roundness. This Playground control is illustrative only; the slot accepts any roundness a consumer chooses.',
      table: {
        category: 'Footer'
      },
      if: {
        arg: 'showActions',
        truthy: true
      }
    },
    // ── Global Props ──────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'va-gov', 'uss-oh-dvs', 'default'],
      description: 'Brand theme',
      table: {
        category: 'Global Props'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Spacing density',
      table: {
        category: 'Global Props'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string | boolean | number>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.variant !== 'outlined') attrs.push(\`variant="\${a.variant}"\`);
          if (a.colorScheme !== 'primary') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.roundness !== 'subtle') attrs.push(\`roundness="\${a.roundness}"\`);
          if (a.surface !== 'solid') attrs.push(\`surface="\${a.surface}"\`);
          if (a.titleText) attrs.push(\`title-text="\${a.titleText}"\`);
          if (a.subtitleText) attrs.push(\`subtitle-text="\${a.subtitleText}"\`);
          if (a.subtitleRightText) attrs.push(\`subtitle-right-text="\${a.subtitleRightText}"\`);
          if (a.descriptionText) attrs.push(\`description-text="\${a.descriptionText}"\`);
          if (!a.showDescription) attrs.push('show-description="false"');
          if (a.descriptionLines as number > 0) attrs.push(\`description-lines="\${a.descriptionLines}"\`);
          if (a.showMedia) attrs.push('show-media');
          if (a.mediaHeight !== 'default') attrs.push(\`media-height="\${a.mediaHeight}"\`);
          if (!a.showBody) attrs.push('show-body="false"');
          if (a.showActions) attrs.push('show-actions');
          if (a.actionStyle !== '1-action') attrs.push(\`action-style="\${a.actionStyle}"\`);
          if (a.icon) attrs.push(\`icon="\${a.icon}"\`);
          if (a.showActionMenu) attrs.push('show-action-menu');
          if (a.showActionMenu) attrs.push(\`action-menu-label="\${a.actionMenuLabel}"\`);
          if (a.titleSize !== 'heading-4') attrs.push(\`title-size="\${a.titleSize}"\`);
          return \`<mms-card\${attrs.length ? '\\n  ' + attrs.join('\\n  ') : ''}\\n></mms-card>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    variant: string;
    colorScheme: string;
    titleText: string;
    subtitleText: string;
    subtitleRightText: string;
    descriptionText: string;
    showDescription: boolean;
    descriptionLines: number;
    showMedia: boolean;
    mediaHeight: string;
    mediaImage: string;
    showBody: boolean;
    showBodyContent: boolean;
    showActions: boolean;
    actionStyle: string;
    actionColorScheme: string;
    actionRoundness: string;
    icon: string;
    showActionMenu: boolean;
    actionMenuLabel: string;
    titleSize: string;
    roundness: string;
    surface: string;
    theme: string;
    density: string;
  }) => {
    // Footer actions render as mms-button, so the same Tier 1-only rule applies as
    // Button.stories.ts: a Tier 2/3 combination for the selected theme is rejected
    // (rendered as a notice) rather than rendered with a broken hover/contrast state.
    // 'link' actionStyle uses mms-link, which doesn't take a colorScheme, so it's exempt.
    const usesActionColorScheme = args.showActions && args.actionStyle !== 'link';
    const actionColorSchemeValid = !usesActionColorScheme || isValidColorScheme(args.theme as Theme, args.actionColorScheme as ColorScheme);
    return html\`
      <mms-card
        variant=\${args.variant}
        color-scheme=\${args.colorScheme}
        title-text=\${args.titleText}
        subtitle-text=\${args.subtitleText}
        subtitle-right-text=\${args.subtitleRightText}
        description-text=\${args.descriptionText}
        ?show-description=\${args.showDescription}
        description-lines=\${args.descriptionLines}
        ?show-media=\${args.showMedia}
        media-height=\${args.mediaHeight}
        ?show-body=\${args.showBody}
        ?show-actions=\${args.showActions}
        action-style=\${args.actionStyle}
        icon=\${args.icon}
        ?show-action-menu=\${args.showActionMenu}
        action-menu-label=\${args.actionMenuLabel}
        title-size=\${args.titleSize}
        roundness=\${args.roundness}
        surface=\${args.surface}
        data-density=\${args.density}
      >
        \${args.showMedia ? args.mediaImage && mediaImageMap[args.mediaImage] ? html\`<img
                slot="media"
                src="\${mediaImageMap[args.mediaImage].url}"
                alt="\${mediaImageMap[args.mediaImage].alt}"
                style="width: 100%; height: 100%; object-fit: cover;"
              />\` : html\`<div slot="media" style="width: 100%; height: 100%; background: linear-gradient(135deg, #6366f1, #22d3ee);"></div>\` : nothing}
        \${args.showActionMenu ? html\`
              <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">View details</button>
              <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">Dismiss</button>
            \` : nothing}
        \${args.showBodyContent ? html\`
              <ul
                slot="body-content"
                style="margin: 0; padding-left: 1.25rem; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height);"
              >
                <li>Primary care visits</li>
                <li>Prescription drug coverage</li>
              </ul>
            \` : nothing}
        \${usesActionColorScheme && !actionColorSchemeValid ? (() => {
      const tier = getPaletteTier(args.theme as Theme, args.actionColorScheme as ColorScheme);
      const tierLabel = tier === 2 ? 'Tier 2 (Text + Surface)' : 'Tier 3 (Decorative)';
      const tierReason = tier === 2 ? 'Lacks step 10 (hover state). Use for branded text or badges, not buttons.' : 'Lacks text contrast and hover states. Decorative backgrounds only.';
      return html\`
                <div
                  slot="actions"
                  style="
                    padding: 1rem 1.25rem;
                    background: #fef2f2;
                    border: 1px solid #ef4444;
                    border-radius: 6px;
                    color: #991b1b;
                    font-size: 0.8125rem;
                    line-height: 1.5;
                  "
                >
                  <strong style="display: block; margin-bottom: 0.375rem;">Invalid combination</strong>
                  <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.theme}</code> theme +
                  <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.actionColorScheme}</code> action color scheme
                  <p style="margin: 0.5rem 0 0; opacity: 0.85;">
                    <strong>\${tierLabel}:</strong> \${tierReason}
                  </p>
                  <p style="margin: 0.375rem 0 0; font-size: 0.75rem; opacity: 0.7;">
                    See <em>Color Framework → Color Tiering</em> for details.
                  </p>
                </div>
              \`;
    })() : nothing}
        \${args.showActions && args.actionStyle === '1-action' && actionColorSchemeValid ? html\`<mms-button
              slot="actions"
              variant="primary"
              color-scheme=\${args.actionColorScheme}
              roundness=\${args.actionRoundness}
              label="Action"
            ></mms-button>\` : nothing}
        \${args.showActions && args.actionStyle === 'hr-actions' && actionColorSchemeValid ? html\`
              <mms-button
                slot="actions"
                variant="secondary"
                color-scheme=\${args.actionColorScheme}
                roundness=\${args.actionRoundness}
                full-width
                label="Cancel"
              ></mms-button>
              <mms-button
                slot="actions"
                variant="primary"
                color-scheme=\${args.actionColorScheme}
                roundness=\${args.actionRoundness}
                full-width
                label="Action"
              ></mms-button>
            \` : nothing}
        \${args.showActions && args.actionStyle === 'vt-actions' && actionColorSchemeValid ? html\`
              <mms-button
                slot="actions"
                variant="primary"
                color-scheme=\${args.actionColorScheme}
                roundness=\${args.actionRoundness}
                full-width
                label="Action"
              ></mms-button>
              <mms-button
                slot="actions"
                variant="secondary"
                color-scheme=\${args.actionColorScheme}
                roundness=\${args.actionRoundness}
                full-width
                label="Cancel"
              ></mms-button>
            \` : nothing}
        \${args.showActions && args.actionStyle === 'link' ? html\`<mms-link slot="actions" label="View details" right-icon="arrow-right"></mms-link>\` : nothing}
      </mms-card>
    \`;
  }
}`,...I.parameters?.docs?.source}}},L=[`Overview`,`PlaygroundStory`]}));R();export{F as Overview,I as PlaygroundStory,L as __namedExportsOrder,j as default,R as n,D as t};