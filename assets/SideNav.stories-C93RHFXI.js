import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,s as d,t as f}from"./decorate-Bygya6Tu.js";import{n as p,r as m,t as h}from"./focus.css-BrGuLyxh.js";import{i as g,n as _,t as v}from"./mms-icon.component-BJPQucU2.js";import{n as y,t as b}from"./iframe--PTQF4Zo.js";import{a as x,o as S,r as C,t as w}from"./a11y-outcome-Bu1rkJr_.js";import{t as T}from"./mms-card.component-8yI6y1xe.js";import{n as E,r as D,t as O}from"./logo-registry-BWTiYVIK.js";import{t as k}from"./mms-header.component-BbC5HsTC.js";var A,j,M=e((()=>{o(),u(),m(),v(),l(),A=0,j=class extends i{constructor(...e){super(...e),this.navType=`page`,this.label=``,this.href=``,this.active=!1,this.expanded=!1,this.nested=!1,this.disabled=!1,this.iconOnly=!1,this._groupId=`mms-side-nav-group-${A++}`}connectedCallback(){super.connectedCallback(),this.parentElement?.tagName===`MMS-SIDE-NAV-ITEM`&&(this.nested=!0),this.navType===`divider`||this.navType===`section-header`?this.setAttribute(`role`,`presentation`):this.slot===``?this.setAttribute(`role`,`listitem`):this.removeAttribute(`role`)}_handleCategoryToggle(){this.disabled||(this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent(`nav-toggle`,{bubbles:!0,composed:!0,detail:{expanded:this.expanded,label:this.label}})))}_handlePageSelect(){this.disabled||this.dispatchEvent(new CustomEvent(`nav-select`,{bubbles:!0,composed:!0,detail:{href:this.href,label:this.label}}))}_renderIcon(){return this.icon?a`<mms-icon class="icon" name=${this.icon} size=${this.iconOnly?`md`:`sm`}></mms-icon>`:n}render(){switch(this.navType){case`section-header`:return a`<div class="section-header">${this.label}</div>`;case`divider`:return a`<div class="divider" role="separator"></div>`;case`category`:return a`
          <button
            class="item category"
            @click=${this._handleCategoryToggle}
            aria-expanded=${this.expanded}
            aria-controls=${this._groupId}
            aria-label=${this.iconOnly?this.label:n}
            ?disabled=${this.disabled}
          >
            ${this._renderIcon()}
            <span class="label">${this.label}</span>
            <mms-icon
              class="caret"
              name=${this.expanded?`caret-up`:`caret-down`}
              size="sm"
            ></mms-icon>
          </button>
          <div class="group" id=${this._groupId} role="list" ?hidden=${!this.expanded}>
            <slot></slot>
          </div>
        `;default:return this.href?a`
              <a
                class="item"
                href=${this.disabled?n:this.href}
                @click=${this._handlePageSelect}
                aria-current=${this.active?`page`:n}
                aria-disabled=${this.disabled?`true`:n}
                aria-label=${this.iconOnly?this.label:n}
                tabindex=${this.disabled?-1:0}
              >
                ${this._renderIcon()}
                <span class="label">${this.label}</span>
              </a>
            `:a`
              <button
                class="item"
                @click=${this._handlePageSelect}
                aria-current=${this.active?`page`:n}
                aria-label=${this.iconOnly?this.label:n}
                ?disabled=${this.disabled}
              >
                ${this._renderIcon()}
                <span class="label">${this.label}</span>
              </button>
            `}}static{this.styles=[r`
      :host {
        display: block;
        box-sizing: border-box;
        font-family: var(--type-ui-label-md-family);
      }

      .item {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: var(--mms-side-nav-item-justify, flex-start);
        box-sizing: border-box;
        width: 100%;
        gap: var(--spacing-sm1);
        padding: var(--spacing-sm2);
        border-radius: var(--radius-sm);
        cursor: pointer;
        font-size: var(--type-ui-label-md-size);
        line-height: var(--type-ui-label-md-line-height);
        letter-spacing: var(--type-ui-label-md-letter-spacing);
        font-weight: var(--type-ui-label-md-weight);
        color: var(--color-text-default);
        transition: background var(--motion-duration-base) var(--motion-easing-standard);
      }

      .item:hover:not(:disabled):not([aria-disabled='true']) {
        background: var(--color-surface-hover);
      }

      :host([active]) .item {
        background: var(--color-surface-active);
        font-weight: var(--font-weight-bold);
      }

      .item:disabled,
      .item[aria-disabled='true'] {
        color: var(--color-disabled-text);
        cursor: not-allowed;
      }

      :host([nested]) .item {
        /* Icon width + its gap, so a nested label lines up under the parent's
           label rather than its icon — same reasoning as Marina's indent. */
        padding-inline-start: var(--mms-side-nav-nested-indent, calc(var(--spacing-sm2) + var(--icon-size-sm) + var(--spacing-sm1)));
      }

      /* Same self-driven reasoning as the .label rule below — compact-slot
         content doesn't inherit the collapsed+icons parent cascade that
         centers a primary item's icon, so icon-only centers itself directly. */
      :host([icon-only]) .item {
        justify-content: center;
      }

      .icon {
        display: var(--mms-side-nav-icon-display, flex);
        flex-shrink: 0;
        color: inherit;
      }

      .label {
        display: var(--mms-side-nav-label-display, block);
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
      }

      /* Compact-slot content (account-compact/utility-compact) sets icon-only
         directly on itself rather than inheriting --mms-side-nav-label-display
         from a collapsed+icons parent — those slots render regardless of the
         icons prop (see mms-side-nav's class doc comment), so the label needs
         its own visual hide tied to the same attribute that already drives
         the item's aria-label fallback, not just the inherited cascade used
         for auto-synced primary items. */
      :host([icon-only]) .label {
        display: none;
      }

      /* Same reasoning as .label above, other direction: icon-only compact content's icon is
         its only remaining content, so it can't be left to the inherited icons-off display:none
         either — that combination left it with neither icon nor label, fully blank (DUE-1644). */
      :host([icon-only]) .icon {
        display: flex;
      }

      .caret {
        display: var(--mms-side-nav-caret-display, flex);
        flex-shrink: 0;
        color: var(--color-text-subtle);
      }

      .group {
        display: var(--mms-side-nav-group-display, flex);
        flex-direction: column;
      }

      .group[hidden] {
        display: none;
      }

      .section-header {
        padding: var(--spacing-sm2);
        font-size: var(--type-ui-label-sm-size);
        line-height: var(--type-ui-label-sm-line-height);
        font-weight: var(--font-weight-bold);
        letter-spacing: var(--text-ui-label-sm-letter-spacing);
        color: var(--color-text-subtle);
        text-transform: uppercase;
      }

      .divider {
        height: var(--border-width-xs);
        background: var(--color-border-default);
        margin: var(--spacing-xs2) 0;
      }
    `,p]}},f([c({type:String,reflect:!0,attribute:`nav-type`})],j.prototype,`navType`,void 0),f([c({type:String})],j.prototype,`label`,void 0),f([c({type:String})],j.prototype,`icon`,void 0),f([c({type:String})],j.prototype,`href`,void 0),f([c({type:Boolean,reflect:!0})],j.prototype,`active`,void 0),f([c({type:Boolean,reflect:!0})],j.prototype,`expanded`,void 0),f([c({type:Boolean,reflect:!0})],j.prototype,`nested`,void 0),f([c({type:Boolean,reflect:!0})],j.prototype,`disabled`,void 0),f([c({type:Boolean,reflect:!0,attribute:`icon-only`})],j.prototype,`iconOnly`,void 0),j=f([s(`mms-side-nav-item`)],j)})),N,P,F=e((()=>{o(),u(),_(),m(),D(),v(),k(),b(),y(),M(),l(),N=`(max-width: 767px)`,P=class extends i{constructor(...e){super(...e),this.expanded=!0,this.collapsible=!0,this.icons=!1,this.surface=`solid`,this.siteName=``,this.hideLogo=!1,this.externalHeader=!1,this._isNarrow=!1,this.forceNarrow=!1,this._hasUtility=!1,this._hasAccount=!1,this._hasUtilityCompact=!1,this._hasAccountCompact=!1,this._theme=``,this._boundMediaChange=this._handleMediaChange.bind(this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`navigation`),this.setAttribute(`aria-label`,`Side navigation`),this.addEventListener(`nav-select`,this._handleItemActivity),this.addEventListener(`nav-toggle`,this._handleItemActivity),this._resolveTheme();let e=this.closest(`[data-theme]`);e&&typeof MutationObserver<`u`&&(this._themeObserver=new MutationObserver(()=>this._resolveTheme()),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`data-theme`]}))}willUpdate(e){(e.has(`collapsible`)||e.has(`expanded`))&&!this.collapsible&&!this.expanded&&(this.expanded=!0)}firstUpdated(){this._mediaQuery=window.matchMedia(N),this._isNarrow=this._mediaQuery.matches,this._syncNarrowAttribute(),this._mediaQuery.addEventListener(`change`,this._boundMediaChange),this._syncSlotPresence(),this._syncIconOnly()}updated(e){super.updated(e),(e.has(`expanded`)||e.has(`icons`))&&this._syncIconOnly(),e.has(`expanded`)&&this._syncCompactSlotInert(),e.has(`forceNarrow`)&&this._syncNarrowAttribute()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`nav-select`,this._handleItemActivity),this.removeEventListener(`nav-toggle`,this._handleItemActivity),this._mediaQuery?.removeEventListener(`change`,this._boundMediaChange),this._themeObserver?.disconnect(),this._themeObserver=void 0}_handleMediaChange(e){this._isNarrow=e.matches,this._syncNarrowAttribute()}get _showNarrowHeader(){return this._isNarrow||this.forceNarrow}_syncNarrowAttribute(){this.toggleAttribute(`narrow`,this._showNarrowHeader)}_syncSlotPresence(){this._hasUtility=this.querySelector(`:scope > [slot="utility"]`)!==null,this._hasAccount=this.querySelector(`:scope > [slot="account"]`)!==null,this._hasUtilityCompact=this.querySelector(`:scope > [slot="utility-compact"]`)!==null,this._hasAccountCompact=this.querySelector(`:scope > [slot="account-compact"]`)!==null,this._syncCompactSlotInert()}_syncCompactSlotInert(){let e=!this.expanded,t=(e,t)=>{this.querySelector(`:scope > [slot="${e}"]`)?.toggleAttribute(`inert`,t)};t(`utility`,e),t(`utility-compact`,!e),t(`account`,e),t(`account-compact`,!e)}_handleDefaultSlotChange(){this._syncIconOnly()}_syncIconOnly(){let e=!this.expanded&&this.icons;for(let t of this.querySelectorAll(`:scope > mms-side-nav-item:not([slot])`))t.iconOnly=e}_handleItemActivity(){!this.expanded&&this.icons&&this._setExpanded(!0)}_handleTriggerClick(){this._setExpanded(!this.expanded)}_setExpanded(e){this.expanded!==e&&(this.expanded=e,this.dispatchEvent(new CustomEvent(`rail-toggle`,{bubbles:!0,composed:!0,detail:{expanded:e}})),this._announce(e?`Side navigation expanded`:`Side navigation collapsed`))}_announce(e){let t=this.shadowRoot?.querySelector(`.sr-live-region`);t&&(t.textContent=e)}get _brandFromTheme(){return this._theme.replace(/-dark$/,``)}_resolveLogoVariant(e){return E(e,`stacked`)?`stacked`:E(e,`text`)?`text`:`full`}_resolveTheme(){let e=this.closest(`[data-theme]`)?.getAttribute(`data-theme`)??``;e!==this._theme&&(this._theme=e);let t=this._brandFromTheme;this.style.setProperty(`--_brand-logo-base`,`${O(t,this._resolveLogoVariant(t))}px`)}renderBrandLogo(){let e=this._brandFromTheme,t=e?E(e,this._resolveLogoVariant(e)):void 0;return t?a`<svg class="brand-logo" viewBox=${t.viewBox} xmlns="http://www.w3.org/2000/svg" role="img" aria-label=${e}>
      ${g(t.inner)}
    </svg>`:a`<div class="brand-logo brand-logo--placeholder" role="img" aria-label=${e?`${e} logo placeholder`:`Logo placeholder`}>
        logo
      </div>`}renderCollapsedMark(){let e=this._brandFromTheme,t=e?E(e,`mark-circle`):void 0;return t?a`<svg class="brand-logo brand-logo--mark" viewBox=${t.viewBox} xmlns="http://www.w3.org/2000/svg" role="img" aria-label=${e}>
      ${g(t.inner)}
    </svg>`:n}_renderNavBody(e){let t=!e||this.icons,n=e?this._hasUtilityCompact:this._hasUtility,r=e?this._hasAccountCompact:this._hasAccount;return a`
      <div class="divider" role="separator" ?hidden=${!(this.siteName&&(t||n||r))}></div>
      <div class="nav-items" role="list" ?hidden=${!t}>
        <slot @slotchange=${this._handleDefaultSlotChange}></slot>
      </div>
      <div class="divider" role="separator" ?hidden=${!(t&&n)}></div>
      <div class="utility-slot" ?hidden=${!n}>
        <slot name="utility" @slotchange=${this._syncSlotPresence} ?hidden=${e}></slot>
        <slot name="utility-compact" @slotchange=${this._syncSlotPresence} ?hidden=${!e}></slot>
      </div>
      <div class="divider" role="separator" ?hidden=${!(r&&(t||n))}></div>
      <div class="account-slot" ?hidden=${!r}>
        <slot name="account" @slotchange=${this._syncSlotPresence} ?hidden=${e}></slot>
        <slot name="account-compact" @slotchange=${this._syncSlotPresence} ?hidden=${!e}></slot>
      </div>
    `}_renderRail(){let e=this.expanded?`Collapse navigation`:`Expand navigation`;return a`
      <div class="side-nav" part="side-nav">
        <div class="nav-header">
          <div class="nav-header-top">
            ${this.hideLogo?n:a`<div class="logo-slot"><slot name="logo">${this.renderBrandLogo()}</slot></div>`}
            <div class="collapsed-mark">${this.renderCollapsedMark()}</div>
            ${this.collapsible?a`
                  <button
                    class="nav-trigger"
                    @click=${this._handleTriggerClick}
                    aria-expanded=${this.expanded}
                    aria-label=${e}
                    title=${e}
                  >
                    <mms-icon name=${this.expanded?`caret-double-left`:`caret-double-right`} size=${this.expanded?`sm`:`md`}></mms-icon>
                  </button>
                `:n}
          </div>
          ${this.siteName?a`<div class="site-name">${this.siteName}</div>`:n}
        </div>
        ${this._renderNavBody(!this.expanded)}
      </div>
    `}_mapNavLinks(){return[...this.querySelectorAll(`:scope > mms-side-nav-item:not([slot])`)].map(e=>{if(e.navType===`divider`||e.navType===`section-header`)return n;let t=e.navType===`category`?this._firstNavigableChildHref(e):e.href;return t?a`<mms-link slot="nav" href=${t} label=${e.label} underline="none"></mms-link>`:n})}_firstNavigableChildHref(e){for(let t of e.querySelectorAll(`:scope > mms-side-nav-item`)){let e=t.href;if(e)return e}return``}_mapAccountLink(){let e=this.querySelector(`:scope > [slot="account"]`);return e?a`<mms-link
      slot="account"
      href=${e.href}
      label=${e.label}
      left-icon=${e.icon||n}
      underline="none"
      type-scale="ui-label"
      style="--color-link-default: var(--color-onyx-11, var(--color-text-default)); --color-link-hover: var(--color-onyx-12, var(--color-text-subtle));"
    ></mms-link>`:n}_mapUtilityActions(){let e=this.querySelector(`:scope > [slot="utility"]`);return e?[...e.querySelectorAll(`mms-link, mms-button`)].map(e=>{let t=e.cloneNode(!0);return t.setAttribute(`slot`,`actions`),t.localName===`mms-link`&&t.setAttribute(`type-scale`,`ui-label`),t}):[]}_renderNarrowHeader(){return a`
      <mms-header data-theme=${this._theme} site-name=${this.siteName}>
        ${this._mapNavLinks()} ${this._mapUtilityActions()} ${this._mapAccountLink()}
      </mms-header>
    `}render(){return a`
      <div class="sr-live-region" role="status" aria-live="polite" aria-atomic="true"></div>
      ${this._showNarrowHeader?this.externalHeader?n:this._renderNarrowHeader():this._renderRail()}
    `}static{this.styles=[h,r`
      :host {
        display: block;
        box-sizing: border-box;
        font-family: var(--font-family-body);
        position: sticky;
        top: var(--mms-side-nav-top-offset, 0px);
        height: var(--mms-side-nav-height, calc(100vh - var(--mms-side-nav-top-offset, 0px)));
      }

      /* Below the breakpoint, the shadow content is a nested mms-header (not .side-nav, whose own
         explicit width otherwise gave the host its shrink-to-fit size as a flex item in a
         consumer's layout) — mms-header expects to size itself off a real containing-block width,
         so the host needs one explicitly here, the same way a normal full-width header does when
         it isn't nested inside another flex item (DUE-1644). */
      :host([narrow]) {
        display: block;
        width: 100%;
        height: auto;
        position: static;
      }

      /* external-header renders nothing below the breakpoint (see render()) — collapses the host
         entirely rather than reserving the width/height above for empty shadow content. */
      :host([narrow][external-header]) {
        display: none;
      }

      .side-nav {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: 100%;
        background: var(--mms-side-nav-surface-color, var(--color-surface-default));
        border-inline-end: var(--border-width-xs) solid var(--color-border-subtle);
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: none;
        transition: width var(--motion-duration-moderate) var(--motion-easing-standard);
      }

      :host([surface='solid']) .side-nav {
        background: var(--mms-side-nav-surface-color, var(--color-surface-solid));
      }

      /* A persistent rail scrolling internally (rather than the page) reads as
         a layout bug if the OS scrollbar chrome is visible — hidden here, but
         overflow-y: auto above keeps real wheel/touch/keyboard scrolling intact
         for the rare case where items genuinely exceed the viewport. */
      .side-nav::-webkit-scrollbar {
        display: none;
      }

      :host([expanded]) .side-nav {
        width: var(--mms-side-nav-width, 256px);
        padding: var(--spacing-lg1) var(--spacing-md2);
      }

      :host(:not([expanded])) .side-nav {
        width: var(--mms-side-nav-collapsed-width, 60px);
        padding: var(--spacing-lg1) var(--spacing-sm1);
        align-items: center;
      }

      /* Icon-rail mode: real items stay mounted and collapse in place — see
         class doc comment for why this replaces Marina's synthetic rail. */
      /* Marina's icons prop isn't collapse-only — it's "do items in this
         nav use icons at all", so it hides every item's leading icon even
         while expanded, not just while collapsed. */
      :host(:not([icons])) {
        --mms-side-nav-icon-display: none;
        /* A nested item's default indent reserves an icon's width so its label
           lines up under its parent's label, not its icon — with icons off
           there's no icon column anywhere to line up past, so that term drops
           out instead of leaving a gap nothing accounts for. */
        --mms-side-nav-nested-indent: calc(var(--spacing-sm2) + var(--spacing-sm1));
      }

      :host(:not([expanded])[icons]) {
        --mms-side-nav-label-display: none;
        --mms-side-nav-caret-display: none;
        --mms-side-nav-group-display: none;
        --mms-side-nav-item-justify: center;
      }

      :host(:not([expanded])[icons]) ::slotted(mms-side-nav-item[nav-type='divider']),
      :host(:not([expanded])[icons]) ::slotted(mms-side-nav-item[nav-type='section-header']) {
        display: none;
      }

      /* Not icons: collapsed hides the primary nav items entirely rather than
         showing an unlabelled, non-interactive sliver of them. utility/account
         are unaffected — their own presence while collapsed is decided in
         _renderBody() by whether a -compact slot was supplied, independent of
         icons (see mms-side-nav-item's iconOnly doc comment for why icons
         itself can't drive a generic icon-only fallback for free-form slotted
         content the way it can for mms-side-nav-item). Visibility itself is decided in JS
         (_renderNavBody's ?hidden) now, alongside every other section/divider — see that
         method's doc comment. */

      .nav-header {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs2);
        flex-shrink: 0;
      }

      /* Last child of .nav-header is the logo row itself only when there's no site-name below
         it (site-name has its own padding-bottom instead, unchanged by this) — a little more
         room than the default --spacing-sm1 gap, since there's no divider here to do the work. */
      .nav-header-top:last-child,
      .logo-slot:last-child {
        padding-bottom: var(--spacing-lg1);
      }

      .nav-header-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-sm1);
      }

      :host(:not([expanded])) .nav-header-top {
        flex-direction: column;
        align-items: center;
      }

      .site-name {
        font-family: var(--type-heading-5-family);
        font-size: var(--type-heading-6-size);
        line-height: var(--type-heading-5-line-height);
        font-weight: var(--font-weight-medium);
        color: var(--color-text-default);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-inline-start: 12px;
        padding-top: var(--spacing-xs2);
        padding-bottom: var(--spacing-sm1);
      }

      :host(:not([expanded])) .site-name {
        display: none;
      }

      .logo-slot {
        display: flex;
        align-items: center;
        align-self: stretch;
        min-width: 0;
        overflow: hidden;
        padding-inline-start: var(--mms-side-nav-logo-inset, 12px);
      }

      :host(:not([expanded])) .logo-slot {
        display: none;
      }

      .brand-logo {
        /* Same anchor mms-header/mms-footer use — the registered mark is
           currentColor by design, tinted via the theme's primary token rather
           than a baked-in hex. --mms-side-nav-logo-color overrides it for a
           brand whose guide prescribes something else (see mms-header's
           --mms-header-logo-color for the DOW dark-mode case this mirrors). */
        color: var(--mms-side-nav-logo-color, var(--color-primary-9));
        width: auto;
        display: block;
        height: var(--mms-side-nav-logo-height, var(--_brand-logo-base, 16px));
      }

      /* Shown when the active theme has no registered mark — same fallback
         mms-header/mms-footer render, not the default rendering path. */
      .brand-logo--placeholder {
        aspect-ratio: 3.5 / 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: var(--border-width-xs) dashed var(--color-border-default);
        border-radius: var(--radius-xs);
        color: var(--color-text-subtle);
        font-size: calc(var(--_brand-logo-base, 16px) * 0.6);
        line-height: 1;
        letter-spacing: var(--type-ui-label-sm-letter-spacing);
      }

      /* Square icon mark, not the wordmark's width:auto/height-driven box —
         renderCollapsedMark() returns 'nothing' for a brand with no
         'mark-circle' registered, so this stays empty (no reserved space,
         no placeholder) rather than showing for every brand by default. */
      .collapsed-mark {
        display: none;
      }

      :host(:not([expanded])) .collapsed-mark {
        display: flex;
        margin-bottom: var(--spacing-xs2);
      }

      .brand-logo--mark {
        width: var(--mms-side-nav-collapsed-logo-size, var(--icon-size-xl));
        height: var(--mms-side-nav-collapsed-logo-size, var(--icon-size-xl));
      }

      .nav-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: var(--size-xl-touch);
        height: var(--size-xl-touch);
        padding: 0;
        border: none;
        border-radius: var(--radius-sm);
        background: transparent;
        color: var(--color-text-default);
        cursor: pointer;
        transition: background var(--motion-duration-base) var(--motion-easing-standard);
      }

      .nav-trigger:hover {
        background: var(--color-surface-hover);
      }

      .nav-items {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs2);
      }

      .divider {
        align-self: stretch;
        flex-shrink: 0;
        height: var(--border-width-xs);
        background: var(--color-border-default);
        margin: var(--spacing-sm1) 0;
      }

      .utility-slot,
      .account-slot {
        flex-shrink: 0;
      }

      /* Explicit rather than relying on the bare [hidden] UA default — both slots stay mounted
         (see _renderNavBody()'s doc comment) and are toggled by this attribute alone. */
      .nav-items[hidden],
      .divider[hidden],
      .utility-slot[hidden],
      .account-slot[hidden],
      .utility-slot slot[hidden],
      .account-slot slot[hidden] {
        display: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .side-nav {
          transition: none;
        }
      }

      .sr-live-region {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `]}},f([c({type:Boolean,reflect:!0})],P.prototype,`expanded`,void 0),f([c({type:Boolean,reflect:!0})],P.prototype,`collapsible`,void 0),f([c({type:Boolean,reflect:!0})],P.prototype,`icons`,void 0),f([c({type:String,reflect:!0})],P.prototype,`surface`,void 0),f([c({type:String,attribute:`site-name`})],P.prototype,`siteName`,void 0),f([c({type:Boolean,reflect:!0,attribute:`hide-logo`})],P.prototype,`hideLogo`,void 0),f([c({type:Boolean,reflect:!0,attribute:`external-header`})],P.prototype,`externalHeader`,void 0),f([d()],P.prototype,`_isNarrow`,void 0),f([d()],P.prototype,`forceNarrow`,void 0),f([d()],P.prototype,`_hasUtility`,void 0),f([d()],P.prototype,`_hasAccount`,void 0),f([d()],P.prototype,`_hasUtilityCompact`,void 0),f([d()],P.prototype,`_hasAccountCompact`,void 0),f([d()],P.prototype,`_theme`,void 0),P=f([s(`mms-side-nav`)],P)})),I=t({Overview:()=>K,PlaygroundStory:()=>J,__namedExportsOrder:()=>Y,default:()=>H});function L(e,t=`480px`){return a`
    <div style="display: flex; height: ${t}; border-radius: 8px; overflow: hidden; border: 1px solid rgba(128,128,128,0.15);">
      ${e}
    </div>
  `}function R(){return a`
    <mms-side-nav-item label="Home" icon="house" active href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Exams" icon="calendar" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Reimbursements" icon="currency-dollar" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Uploads" icon="upload" href="#"></mms-side-nav-item>
    <mms-side-nav-item nav-type="category" label="Resources" icon="book-open">
      <mms-side-nav-item label="Guides" href="#"></mms-side-nav-item>
      <mms-side-nav-item label="Forms" href="#"></mms-side-nav-item>
    </mms-side-nav-item>
    <mms-side-nav-item label="FAQs" icon="question" href="#"></mms-side-nav-item>
  `}function z(){return a`
    <mms-side-nav-item label="Home" icon="house" active href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Exams" icon="calendar" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Reimbursements" icon="currency-dollar" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Uploads" icon="upload" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Claims" icon="file-text" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Providers" icon="stethoscope" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Appointments" icon="calendar-plus" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Messages" icon="envelope" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Documents" icon="folder" href="#"></mms-side-nav-item>
    <mms-side-nav-item nav-type="category" label="Resources" icon="book-open">
      <mms-side-nav-item label="Guides" href="#"></mms-side-nav-item>
      <mms-side-nav-item label="Forms" href="#"></mms-side-nav-item>
    </mms-side-nav-item>
    <mms-side-nav-item label="Billing" icon="receipt" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Notifications" icon="bell" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Help Center" icon="lifebuoy" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Settings" icon="gear" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="FAQs" icon="question" href="#"></mms-side-nav-item>
  `}function B(e,t,r=!0){return a`
    ${e?a`
          <div slot="utility" style="display: flex; flex-direction: column; gap: var(--spacing-xs2); padding: var(--spacing-sm2); box-sizing: border-box;">
            <div style="display: flex; align-items: center; gap: var(--spacing-sm1);">
              <mms-icon name="phone" size="sm" style="flex-shrink: 0; color: var(--color-text-subtle); display: var(--mms-side-nav-icon-display, flex);"></mms-icon>
              <span
                style="font-family: var(--type-ui-label-md-family); font-size: var(--type-ui-label-md-size); line-height: var(--type-ui-label-md-line-height); font-weight: var(--type-ui-label-md-weight); color: var(--color-text-default);"
              >
                Contact
              </span>
            </div>
            <mms-link
              href="tel:+18005550100"
              label="1-800-555-0100"
              size="sm"
              style="padding-inline-start: ${r?`calc(var(--icon-size-sm) + var(--spacing-sm1))`:`0`};"
            ></mms-link>
          </div>
        `:n}
    <mms-side-nav-item slot="account" icon="user-circle" label="Jane Doe" href="#"></mms-side-nav-item>
    ${e&&t?a`<mms-icon slot="utility-compact" name="phone" size="sm" label="Contact: 1-800-555-0100"></mms-icon>`:n}
    ${t?a`
          <mms-side-nav-item
            slot="account-compact"
            icon="user-circle"
            label="Jane Doe"
            href="#"
            icon-only
          ></mms-side-nav-item>
        `:n}
  `}function V(){return a`
    <h1
      style="font-family: var(--type-heading-2-family); font-size: var(--type-heading-2-size); line-height: var(--type-heading-2-line-height); font-weight: var(--type-heading-2-weight); letter-spacing: var(--type-heading-2-letter-spacing); color: var(--color-text-default); margin: 0 0 var(--spacing-sm2);"
    >
      Your benefits, in one place
    </h1>
    <p
      style="font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--type-body-md-weight); color: var(--color-text-subtle); margin: 0;"
    >
      Review coverage, find providers, and track claims — all from this dashboard.
    </p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--layout-gap-default); margin-top: var(--layout-gap-default);">
      <mms-card icon="heartbeat" title-text="Coverage" description-text="Review what your plan includes and what it costs." show-actions action-style="link">
        <mms-link slot="actions" href="#" label="View plan"></mms-link>
      </mms-card>
      <mms-card icon="map-pin" title-text="Providers" description-text="Find in-network care near you." show-actions action-style="link">
        <mms-link slot="actions" href="#" label="Search providers"></mms-link>
      </mms-card>
      <mms-card icon="receipt" title-text="Claims" description-text="Track recent activity on your account." show-actions action-style="link">
        <mms-link slot="actions" href="#" label="View claims"></mms-link>
      </mms-card>
    </div>
  `}var H,U,W,G,K,q,J,Y,X=e((()=>{o(),F(),M(),v(),b(),T(),x(),w(),H={title:`Navigational/Side Nav`,tags:[`!autodocs`]},U={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},W=`680px`,G=`960px`,K={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${G}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${U.h1}">Side Nav</h1>
      <p style="${U.body} opacity: 0.85; max-width: ${W}; margin-bottom: 2rem;">
        A persistent vertical panel for in-app/dashboard navigation, alongside page content —
        logo, a list of <code style="${U.monoSm}">mms-side-nav-item</code> entries, and optional
        utility/account content. Collapses to an icon rail on request, and below 768px the rail
        hands off to a real <code style="${U.monoSm}">mms-header</code> instance — not a second
        drawer implementation — configured from the same slotted content.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3b82f6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${U.bodySm} margin: 0;">
          No gradient/brand background is built in. The component ships as a standard light
          surface, same as <code style="${U.monoSm}">mms-header</code> —
          a dark, branded treatment is a consuming theme's styling choice, not a structural default.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${U.h2}">Basic usage</h2>
      <p style="${U.bodySm} opacity: 0.85; max-width: ${W}; margin-bottom: 1.5rem;">
        Page items (optionally linking via <code style="${U.monoSm}">href</code>), a category
        with its own disclosure group, dividers, and section headers all compose from the same
        <code style="${U.monoSm}">mms-side-nav-item</code> element via its
        <code style="${U.monoSm}">nav-type</code> prop.
      </p>

      ${L(a`
        <mms-side-nav site-name="Member Portal" style="--mms-side-nav-top-offset: 0px; --mms-side-nav-height: 100%;">
          ${R()}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken);">
          <p style="${U.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      `)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Collapse -->
      <h2 style="${U.h2}">Collapse</h2>
      <p style="${U.bodySm} opacity: 0.85; max-width: ${W}; margin-bottom: 1.5rem;">
        The trigger toggles <code style="${U.monoSm}">expanded</code>. With
        <code style="${U.monoSm}">icons</code> set, collapsing shows an icon-only rail instead of
        hiding navigation entirely — the real items collapse in place rather than a second,
        synthetic rail (see the component doc comment for why). Activating any item while
        collapsed expands the rail first.
      </p>

      ${L(a`
        <mms-side-nav .expanded=${!1} icons style="--mms-side-nav-height: 100%;">
          ${R()}
          ${B(!1,!0)}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken);">
          <p style="${U.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      `)}

      <p style="${U.caption} opacity: 0.7; max-width: ${W}; margin: 1rem 0 0;">
        Without <code style="${U.monoSm}">icons</code>, collapsing hides the primary nav items
        entirely — appropriate when there's no meaningful icon-only representation for them.
        <code style="${U.monoSm}">account</code> uses its own <code style="${U.monoSm}">-compact</code>
        slot instead (shown above) and isn't gated by <code style="${U.monoSm}">icons</code> at
        all — a collapsed rail can show a compact account control even when the primary items have
        no icon-only form. <code style="${U.monoSm}">utility</code> has the same
        <code style="${U.monoSm}">-compact</code> option (see <code style="${U.monoSm}">mms-icon</code>
        slotted as <code style="${U.monoSm}">utility-compact</code>) — omitted here since this nav
        has no utility content to begin with.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Utility and account slots -->
      <h2 style="${U.h2}">Utility and account content</h2>
      <p style="${U.bodySm} opacity: 0.85; max-width: ${W}; margin-bottom: 1.5rem;">
        Both optional. <code style="${U.monoSm}">utility</code> is free-form content between the
        nav items and the account block (e.g. a support/contact callout);
        <code style="${U.monoSm}">account</code> is pinned at the bottom (e.g. a profile control
        with sign-out). Each is preceded by a divider only when that slot actually has content —
        an empty slot contributes nothing, same convention as <code style="${U.monoSm}">mms-footer</code>.
      </p>

      ${L(a`
        <mms-side-nav icons style="--mms-side-nav-height: 100%;">
          ${R()}
          ${B(!0,!0)}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken);">
          <p style="${U.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      `)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Scrollable content -->
      <h2 style="${U.h2}">Scrollable content</h2>
      <p style="${U.bodySm} opacity: 0.85; max-width: ${W}; margin-bottom: 1.5rem;">
        The rail is its own scroll container — independent of the page, and independent of the main
        content pane beside it. When there are more items than available height, the rail scrolls
        as a single unit (header, items, utility, and account all move together) rather than
        clipping or spawning a second nested scroll region. No scrollbar is ever shown for it —
        scroll with the wheel/trackpad over the rail below to see the rest of the list; the page
        and the content pane to its right don't move.
      </p>

      ${L(a`
        <mms-side-nav style="--mms-side-nav-height: 100%;">
          ${z()}
          ${B(!0,!1,!1)}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken);">
          <p style="${U.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      `)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Narrow viewport -->
      <h2 style="${U.h2}">Narrow viewport</h2>
      <p style="${U.bodySm} opacity: 0.85; max-width: ${W}; margin-bottom: 1rem;">
        Below 768px, the rail disappears and <code style="${U.monoSm}">mms-header</code> renders.
        The switch happens at the real browser viewport width
        (<code style="${U.monoSm}">matchMedia</code>), not a container query.
      </p>
      <p style="${U.bodySm} opacity: 0.85; max-width: ${W}; margin: 0 0 0.5rem;">
        <code style="${U.monoSm}">mms-header</code>'s flat nav model has no equivalent of a
        category's disclosure group, so the slotted content is mapped rather than reused as-is:
      </p>
      <ul style="${U.bodySm} max-width: ${W}; margin: 0 0 1rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;">
          <strong>Nav items:</strong> each <code style="${U.monoSm}">page</code>/<code style="${U.monoSm}">category</code>
          item becomes an <code style="${U.monoSm}">mms-link</code> nav entry
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong>Categories:</strong> use their first navigable child's href, since a category
          itself has none — everything else nested under it isn't carried over
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong>Dividers/section headers:</strong> dropped — no flat-nav equivalent
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong>Account:</strong> the <code style="${U.monoSm}">account</code> slot's item maps
          to an <code style="${U.monoSm}">mms-link</code> in <code style="${U.monoSm}">mms-header</code>'s
          own <code style="${U.monoSm}">account</code> slot, carrying its icon over too, not just
          label/href
        </li>
        <li>
          <strong>Utility:</strong> only the <code style="${U.monoSm}">mms-link</code>/<code style="${U.monoSm}">mms-button</code>
          elements found inside it (free-form by design — see its own description above) carry
          over as quick actions
        </li>
      </ul>
      <p style="${U.bodySm} opacity: 0.85; max-width: ${W}; margin-bottom: 1.5rem;">
        By default, <code style="${U.monoSm}">mms-link</code> renders lighter-weight and blue, like
        a plain hyperlink — not like <code style="${U.monoSm}">mms-header</code>'s own nav links.
        That's because <code style="${U.monoSm}">mms-header</code> only applies its nav color
        treatment and its <code style="${U.monoSm}">type-scale="ui-label"</code> weight correction
        to its own <code style="${U.monoSm}">nav</code> slot, not to <code style="${U.monoSm}">account</code>
        or <code style="${U.monoSm}">actions</code>. So both are set explicitly on every mapped
        link here, making them match the rest of the header instead of standing out.
      </p>
      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3b82f6; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${U.bodySm} margin: 0;">
          Resizing this preview won't trigger it — <code style="${U.monoSm}">mms-side-nav</code>
          listens for a real window resize, not a container size change. To see it, go to the
          Playground story and set "Viewport" to "Below breakpoint."
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Placement -->
      <h2 style="${U.h2}">Placement under a fixed header</h2>
      <p style="${U.bodySm} opacity: 0.85; max-width: ${W}; margin-bottom: 1rem;">
        If your page has a fixed header above the side nav, the nav would otherwise stick to the
        very top of the viewport and overlap it. Set <code style="${U.monoSm}">--mms-side-nav-top-offset</code>
        to the header's height (in px) to fix this: it pushes the nav's sticky position down below
        the header, and shrinks the nav's own height by that same amount so it doesn't run past
        the bottom of the screen.
      </p>
      <pre style="${U.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>mms-side-nav { --mms-side-nav-top-offset: 64px; }</code></pre>
      <p style="${U.bodySm} opacity: 0.85; max-width: ${W}; margin-bottom: 1rem;">
        If that same external header also shows the brand logo, the rail would otherwise show it
        a second time right below. Set <code style="${U.monoSm}">hide-logo</code> on
        <code style="${U.monoSm}">mms-side-nav</code> to suppress its own expanded-state logo (the
        small collapsed-rail mark is unaffected — many products keep that one regardless). Omit
        <code style="${U.monoSm}">site-name</code> entirely if the external header already shows
        the product/site name; there's no separate prop needed for that, since it only renders
        when you pass it.
      </p>
      <pre style="${U.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>mms-side-nav { --mms-side-nav-top-offset: 64px; }
mms-side-nav[hide-logo] { /* no site-name attribute set */ }</code></pre>
      <p style="${U.bodySm} opacity: 0.85; max-width: ${W}; margin-bottom: 1rem;">
        If that external header is meant to stay on screen at every width, also set
        <code style="${U.monoSm}">external-header</code>. Below 768px,
        <code style="${U.monoSm}">mms-side-nav</code> normally replaces the rail with its own
        separate nested <code style="${U.monoSm}">mms-header</code> (see "Narrow viewport" above)
        — with <code style="${U.monoSm}">external-header</code> set, it renders nothing there
        instead, so you don't end up with two header instances on screen at once.
      </p>
      <pre style="${U.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>&lt;mms-side-nav hide-logo external-header style="--mms-side-nav-top-offset: 64px;"&gt;
  ...
&lt;/mms-side-nav&gt;</code></pre>
      <div style="background: rgba(217, 119, 6, 0.08); border-left: 3px solid #d97706; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${U.bodySm} margin: 0;">
          <strong>Known limitation (MVP1):</strong> <code style="${U.monoSm}">external-header</code>
          only hides <code style="${U.monoSm}">mms-side-nav</code>'s own narrow-viewport content —
          it doesn't move that content anywhere else. Unless the external header independently
          provides an equivalent path to the same navigation, the side nav's own items have no
          reachable path on mobile in this composition. There's no automatic reconciliation
          between the two; this combination isn't recommended for an experience that must support
          narrow viewports without addressing that gap yourself.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${U.h2}">Accessibility</h2>

      <h3 style="${U.h3}">WCAG 2.2 AA Compliance</h3>
      ${C(S[`side-nav`].rows)}

      <h3 style="${U.h3}">Screen Reader Behavior</h3>
      <ul style="${U.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> The host exposes <code style="${U.monoSm}">role="navigation"</code> with <code style="${U.monoSm}">aria-label="Side navigation"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Trigger:</strong> Announces "Expand navigation"/"Collapse navigation" (or "Open"/"Close navigation" at narrow viewport) and its <code style="${U.monoSm}">aria-expanded</code> state</li>
        <li style="margin-bottom: 0.5rem;"><strong>Current page:</strong> An active page item announces as current via <code style="${U.monoSm}">aria-current="page"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Category disclosure:</strong> Announces <code style="${U.monoSm}">aria-expanded</code> and is programmatically associated with its revealed group via <code style="${U.monoSm}">aria-controls</code></li>
        <li><strong>State change:</strong> Expand/collapse of the rail is announced via a visually-hidden live region (<code style="${U.monoSm}">role="status"</code>, <code style="${U.monoSm}">aria-live="polite"</code>)</li>
      </ul>

      <h3 style="${U.h3}">Keyboard Navigation</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; width: 140px;">Key</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift+Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus through the trigger, items, and any utility/account content, in document order</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused trigger, page item, or category disclosure</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Closes the narrow-viewport drawer, if open</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},q=[``,`house`,`calendar`,`currency-dollar`,`upload`,`book-open`,`question`,`file-text`,`stethoscope`,`calendar-plus`,`envelope`,`folder`,`receipt`,`bell`,`lifebuoy`,`gear`,`user-circle`,`phone`,`map-pin`,`heartbeat`],J={name:`Playground`,tags:[`!dev`],args:{viewport:`current`,siteName:`Member Portal`,item1Label:`Home`,item1Icon:`house`,item2Label:`Exams`,item2Icon:`calendar`,item3Label:`Reimbursements`,item3Icon:`currency-dollar`,item4Label:`Uploads`,item4Icon:`upload`,categoryLabel:`Resources`,categoryIcon:`book-open`,categoryChild1Label:`Guides`,categoryChild2Label:`Forms`,item5Label:`FAQs`,item5Icon:`question`,selectedItem:`item1`,expanded:!0,collapsible:!0,icons:!0,showUtility:!0,showAccount:!0,showCompactVariants:!0,surface:`solid`,surfaceColor:``,theme:`maximus`,density:`default`},render:e=>{let t=e.selectedItem,r=e.viewport===`below-breakpoint`,i=document.body.getAttribute(`data-mode`)||`light`,o=a`
      <style>
        /* Below mms-side-nav's own 768px breakpoint it hands off to a real mms-header (see its
           class doc comment, DUE-1644) — a normal top-of-page element, not a rail beside content,
           so this demo wrapper needs to stack rather than sit side by side there too. !important
           on both: the Viewport demo control below sets these same properties inline for the
           simulated case, and a genuinely narrow real browser window needs to win over that
           inline default regardless of what the control happens to be set to. */
        @media (max-width: 767px) {
          .side-nav-demo {
            flex-direction: column !important;
            height: auto !important;
          }
        }
      </style>
      <div
        class="side-nav-demo"
        data-theme=${e.theme}
        data-mode=${i}
        style="display: flex; flex-direction: ${r?`column`:`row`}; height: ${r?`calc(560px - var(--spacing-lg2))`:`560px`}; overflow-y: ${r?`auto`:`visible`};"
      >
        <mms-side-nav
          .expanded=${e.expanded}
          ?collapsible=${e.collapsible}
          ?icons=${e.icons}
          .forceNarrow=${r}
          surface=${e.surface}
          style=${`--mms-side-nav-height: 100%;${e.surfaceColor?` --mms-side-nav-surface-color: ${e.surfaceColor};`:``}`}
          site-name=${e.siteName||n}
        >
          <mms-side-nav-item label=${e.item1Label} icon=${e.item1Icon||n} ?active=${t===`item1`} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=${e.item2Label} icon=${e.item2Icon||n} ?active=${t===`item2`} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=${e.item3Label} icon=${e.item3Icon||n} ?active=${t===`item3`} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=${e.item4Label} icon=${e.item4Icon||n} ?active=${t===`item4`} href="#"></mms-side-nav-item>
          <mms-side-nav-item nav-type="category" label=${e.categoryLabel} icon=${e.categoryIcon||n}>
            <mms-side-nav-item label=${e.categoryChild1Label} ?active=${t===`categoryChild1`} href="#"></mms-side-nav-item>
            <mms-side-nav-item label=${e.categoryChild2Label} ?active=${t===`categoryChild2`} href="#"></mms-side-nav-item>
          </mms-side-nav-item>
          <mms-side-nav-item label=${e.item5Label} icon=${e.item5Icon||n} ?active=${t===`item5`} href="#"></mms-side-nav-item>
          ${e.showUtility?a`
                <div slot="utility" style="display: flex; flex-direction: column; gap: var(--spacing-xs2); padding: var(--spacing-sm2); box-sizing: border-box;">
                  <div style="display: flex; align-items: center; gap: var(--spacing-sm1);">
                    <mms-icon name="phone" size="sm" style="flex-shrink: 0; color: var(--color-text-subtle); display: var(--mms-side-nav-icon-display, flex);"></mms-icon>
                    <span
                      style="font-family: var(--type-ui-label-md-family); font-size: var(--type-ui-label-md-size); line-height: var(--type-ui-label-md-line-height); font-weight: var(--type-ui-label-md-weight); color: var(--color-text-default);"
                    >
                      Contact
                    </span>
                  </div>
                  <mms-link
                    href="tel:+18005550100"
                    label="1-800-555-0100"
                    left-icon="phone"
                    size="sm"
                  ></mms-link>
                </div>
              `:n}
          ${e.showAccount?a`<mms-side-nav-item slot="account" icon="user-circle" label="Jane Doe" href="#"></mms-side-nav-item>`:n}
          ${e.showUtility&&e.showCompactVariants?a`<mms-icon slot="utility-compact" name="phone" size="sm" label="Contact: 1-800-555-0100"></mms-icon>`:n}
          ${e.showAccount&&e.showCompactVariants?a`
                <mms-side-nav-item
                  slot="account-compact"
                  icon="user-circle"
                  label="Jane Doe"
                  href="#"
                  icon-only
                ></mms-side-nav-item>
              `:n}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken); overflow-y: auto;">
          ${V()}
        </div>
      </div>
    `;return r?a`
          <div style="background: var(--color-neutral-6); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;">
            <div style="width: 500px; margin-inline: auto; contain: paint;">${o}</div>
          </div>
        `:o},argTypes:{viewport:{name:`Viewport`,control:{type:`select`,labels:{current:`Current view`,"below-breakpoint":`Below breakpoint`}},options:[`current`,`below-breakpoint`],description:`Not a component prop — a story-only control. "Below breakpoint" forces the real below-768px render path (a nested mms-header, mapped from the same slotted content) and constrains the canvas to a real 500px-wide box, so mms-header's own width-measuring collapse genuinely triggers rather than being faked. mms-side-nav reads the real viewport via matchMedia rather than its own container width (see the Overview story), so unlike mms-header's own simulated-viewport control, nothing in this story can recreate a genuine matchMedia-triggering resize — the override drives that half, the real 500px box drives mms-header's half.`,table:{category:`Demo Controls`}},siteName:{name:`Site name`,control:`text`,description:`Portal/product name shown beneath the logo. Clear the field to omit it.`,table:{category:`Content`}},item1Label:{name:`Item 1 label`,control:`text`,table:{category:`Content`}},item1Icon:{name:`Item 1 icon`,control:`select`,options:q,table:{category:`Content`}},item2Label:{name:`Item 2 label`,control:`text`,table:{category:`Content`}},item2Icon:{name:`Item 2 icon`,control:`select`,options:q,table:{category:`Content`}},item3Label:{name:`Item 3 label`,control:`text`,table:{category:`Content`}},item3Icon:{name:`Item 3 icon`,control:`select`,options:q,table:{category:`Content`}},item4Label:{name:`Item 4 label`,control:`text`,table:{category:`Content`}},item4Icon:{name:`Item 4 icon`,control:`select`,options:q,table:{category:`Content`}},categoryLabel:{name:`Category label`,control:`text`,description:`Label for the disclosure category item`,table:{category:`Content`}},categoryIcon:{name:`Category icon`,control:`select`,options:q,table:{category:`Content`}},categoryChild1Label:{name:`Category › child 1`,control:`text`,table:{category:`Content`}},categoryChild2Label:{name:`Category › child 2`,control:`text`,table:{category:`Content`}},item5Label:{name:`Item 5 label`,control:`text`,table:{category:`Content`}},item5Icon:{name:`Item 5 icon`,control:`select`,options:q,table:{category:`Content`}},selectedItem:{name:`Selected (active) item`,control:`select`,options:[`none`,`item1`,`item2`,`item3`,`item4`,`categoryChild1`,`categoryChild2`,`item5`],description:`Which page item is currently active/current`,table:{category:`Content`}},expanded:{name:`Expanded`,control:`boolean`,description:`Whether the rail shows full content or is collapsed. Forced true whenever Collapsible is off.`,table:{category:`Behavior`}},collapsible:{name:`Collapsible`,control:`boolean`,description:`Whether the rail can collapse at all. Off removes the trigger entirely and forces Expanded on — for an experience (e.g. VES) whose rail never collapses. The narrow-viewport drawer is unaffected either way.`,table:{category:`Behavior`}},icons:{name:`Icons`,control:`boolean`,description:`When collapsed, show an icon-only rail for the primary nav items instead of hiding them entirely. Independent of utility/account, which use their own -compact slots regardless of this prop.`,table:{category:`Behavior`}},showUtility:{name:`Show utility`,control:`boolean`,description:`Toggles sample content in the utility slot (a contact callout here) between the nav items and account. The slot itself accepts any content — a different component, a custom element, a composite — this is just one example of what can go there, not a set of props the real component exposes.`,table:{category:`Behavior`}},showAccount:{name:`Show account`,control:`boolean`,description:`Toggles sample content in the account slot, pinned at the bottom (a profile item here). Same as utility — the slot accepts any content, this is one example.`,table:{category:`Behavior`}},showCompactVariants:{name:`Show compact variants`,control:`boolean`,description:`Supply utility-compact/account-compact content, shown instead of the full versions while the rail is collapsed`,table:{category:`Behavior`}},surface:{name:`Surface`,control:`select`,options:[`tint`,`solid`],description:`Background fill: solid (default, flatter, brand-themed solid fill) | tint (the standard panel background). Same prop/values as mms-card’s surface.`,table:{category:`Visual`}},surfaceColor:{name:`Surface color override`,control:`color`,description:`Sets --mms-side-nav-surface-color directly. This is an escape hatch for a specific business/design need, not a general invitation to recolor the panel — this control does not check contrast, and any value used here needs its own accessibility review (text, icon, and border colors against it) before shipping. Clear to fall back to the token Surface resolves to.`,table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{layout:`fullscreen`}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Side Nav</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A persistent vertical panel for in-app/dashboard navigation, alongside page content —
        logo, a list of <code style="\${t.monoSm}">mms-side-nav-item</code> entries, and optional
        utility/account content. Collapses to an icon rail on request, and below 768px the rail
        hands off to a real <code style="\${t.monoSm}">mms-header</code> instance — not a second
        drawer implementation — configured from the same slotted content.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3b82f6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          No gradient/brand background is built in. The component ships as a standard light
          surface, same as <code style="\${t.monoSm}">mms-header</code> —
          a dark, branded treatment is a consuming theme's styling choice, not a structural default.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Page items (optionally linking via <code style="\${t.monoSm}">href</code>), a category
        with its own disclosure group, dividers, and section headers all compose from the same
        <code style="\${t.monoSm}">mms-side-nav-item</code> element via its
        <code style="\${t.monoSm}">nav-type</code> prop.
      </p>

      \${demoFrame(html\`
        <mms-side-nav site-name="Member Portal" style="--mms-side-nav-top-offset: 0px; --mms-side-nav-height: 100%;">
          \${sampleItems()}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken);">
          <p style="\${t.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      \`)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Collapse -->
      <h2 style="\${t.h2}">Collapse</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The trigger toggles <code style="\${t.monoSm}">expanded</code>. With
        <code style="\${t.monoSm}">icons</code> set, collapsing shows an icon-only rail instead of
        hiding navigation entirely — the real items collapse in place rather than a second,
        synthetic rail (see the component doc comment for why). Activating any item while
        collapsed expands the rail first.
      </p>

      \${demoFrame(html\`
        <mms-side-nav .expanded=\${false} icons style="--mms-side-nav-height: 100%;">
          \${sampleItems()}
          \${sampleUtilityAccount(false, true)}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken);">
          <p style="\${t.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      \`)}

      <p style="\${t.caption} opacity: 0.7; max-width: \${PROSE_MAX}; margin: 1rem 0 0;">
        Without <code style="\${t.monoSm}">icons</code>, collapsing hides the primary nav items
        entirely — appropriate when there's no meaningful icon-only representation for them.
        <code style="\${t.monoSm}">account</code> uses its own <code style="\${t.monoSm}">-compact</code>
        slot instead (shown above) and isn't gated by <code style="\${t.monoSm}">icons</code> at
        all — a collapsed rail can show a compact account control even when the primary items have
        no icon-only form. <code style="\${t.monoSm}">utility</code> has the same
        <code style="\${t.monoSm}">-compact</code> option (see <code style="\${t.monoSm}">mms-icon</code>
        slotted as <code style="\${t.monoSm}">utility-compact</code>) — omitted here since this nav
        has no utility content to begin with.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Utility and account slots -->
      <h2 style="\${t.h2}">Utility and account content</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Both optional. <code style="\${t.monoSm}">utility</code> is free-form content between the
        nav items and the account block (e.g. a support/contact callout);
        <code style="\${t.monoSm}">account</code> is pinned at the bottom (e.g. a profile control
        with sign-out). Each is preceded by a divider only when that slot actually has content —
        an empty slot contributes nothing, same convention as <code style="\${t.monoSm}">mms-footer</code>.
      </p>

      \${demoFrame(html\`
        <mms-side-nav icons style="--mms-side-nav-height: 100%;">
          \${sampleItems()}
          \${sampleUtilityAccount(true, true)}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken);">
          <p style="\${t.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      \`)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Scrollable content -->
      <h2 style="\${t.h2}">Scrollable content</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The rail is its own scroll container — independent of the page, and independent of the main
        content pane beside it. When there are more items than available height, the rail scrolls
        as a single unit (header, items, utility, and account all move together) rather than
        clipping or spawning a second nested scroll region. No scrollbar is ever shown for it —
        scroll with the wheel/trackpad over the rail below to see the rest of the list; the page
        and the content pane to its right don't move.
      </p>

      \${demoFrame(html\`
        <mms-side-nav style="--mms-side-nav-height: 100%;">
          \${sampleManyItems()}
          \${sampleUtilityAccount(true, false, false)}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken);">
          <p style="\${t.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      \`)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Narrow viewport -->
      <h2 style="\${t.h2}">Narrow viewport</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Below 768px, the rail disappears and <code style="\${t.monoSm}">mms-header</code> renders.
        The switch happens at the real browser viewport width
        (<code style="\${t.monoSm}">matchMedia</code>), not a container query.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin: 0 0 0.5rem;">
        <code style="\${t.monoSm}">mms-header</code>'s flat nav model has no equivalent of a
        category's disclosure group, so the slotted content is mapped rather than reused as-is:
      </p>
      <ul style="\${t.bodySm} max-width: \${PROSE_MAX}; margin: 0 0 1rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;">
          <strong>Nav items:</strong> each <code style="\${t.monoSm}">page</code>/<code style="\${t.monoSm}">category</code>
          item becomes an <code style="\${t.monoSm}">mms-link</code> nav entry
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong>Categories:</strong> use their first navigable child's href, since a category
          itself has none — everything else nested under it isn't carried over
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong>Dividers/section headers:</strong> dropped — no flat-nav equivalent
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong>Account:</strong> the <code style="\${t.monoSm}">account</code> slot's item maps
          to an <code style="\${t.monoSm}">mms-link</code> in <code style="\${t.monoSm}">mms-header</code>'s
          own <code style="\${t.monoSm}">account</code> slot, carrying its icon over too, not just
          label/href
        </li>
        <li>
          <strong>Utility:</strong> only the <code style="\${t.monoSm}">mms-link</code>/<code style="\${t.monoSm}">mms-button</code>
          elements found inside it (free-form by design — see its own description above) carry
          over as quick actions
        </li>
      </ul>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        By default, <code style="\${t.monoSm}">mms-link</code> renders lighter-weight and blue, like
        a plain hyperlink — not like <code style="\${t.monoSm}">mms-header</code>'s own nav links.
        That's because <code style="\${t.monoSm}">mms-header</code> only applies its nav color
        treatment and its <code style="\${t.monoSm}">type-scale="ui-label"</code> weight correction
        to its own <code style="\${t.monoSm}">nav</code> slot, not to <code style="\${t.monoSm}">account</code>
        or <code style="\${t.monoSm}">actions</code>. So both are set explicitly on every mapped
        link here, making them match the rest of the header instead of standing out.
      </p>
      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3b82f6; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          Resizing this preview won't trigger it — <code style="\${t.monoSm}">mms-side-nav</code>
          listens for a real window resize, not a container size change. To see it, go to the
          Playground story and set "Viewport" to "Below breakpoint."
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Placement -->
      <h2 style="\${t.h2}">Placement under a fixed header</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        If your page has a fixed header above the side nav, the nav would otherwise stick to the
        very top of the viewport and overlap it. Set <code style="\${t.monoSm}">--mms-side-nav-top-offset</code>
        to the header's height (in px) to fix this: it pushes the nav's sticky position down below
        the header, and shrinks the nav's own height by that same amount so it doesn't run past
        the bottom of the screen.
      </p>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>mms-side-nav { --mms-side-nav-top-offset: 64px; }</code></pre>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        If that same external header also shows the brand logo, the rail would otherwise show it
        a second time right below. Set <code style="\${t.monoSm}">hide-logo</code> on
        <code style="\${t.monoSm}">mms-side-nav</code> to suppress its own expanded-state logo (the
        small collapsed-rail mark is unaffected — many products keep that one regardless). Omit
        <code style="\${t.monoSm}">site-name</code> entirely if the external header already shows
        the product/site name; there's no separate prop needed for that, since it only renders
        when you pass it.
      </p>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>mms-side-nav { --mms-side-nav-top-offset: 64px; }
mms-side-nav[hide-logo] { /* no site-name attribute set */ }</code></pre>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        If that external header is meant to stay on screen at every width, also set
        <code style="\${t.monoSm}">external-header</code>. Below 768px,
        <code style="\${t.monoSm}">mms-side-nav</code> normally replaces the rail with its own
        separate nested <code style="\${t.monoSm}">mms-header</code> (see "Narrow viewport" above)
        — with <code style="\${t.monoSm}">external-header</code> set, it renders nothing there
        instead, so you don't end up with two header instances on screen at once.
      </p>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>&lt;mms-side-nav hide-logo external-header style="--mms-side-nav-top-offset: 64px;"&gt;
  ...
&lt;/mms-side-nav&gt;</code></pre>
      <div style="background: rgba(217, 119, 6, 0.08); border-left: 3px solid #d97706; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Known limitation (MVP1):</strong> <code style="\${t.monoSm}">external-header</code>
          only hides <code style="\${t.monoSm}">mms-side-nav</code>'s own narrow-viewport content —
          it doesn't move that content anywhere else. Unless the external header independently
          provides an equivalent path to the same navigation, the side nav's own items have no
          reachable path on mobile in this composition. There's no automatic reconciliation
          between the two; this combination isn't recommended for an experience that must support
          narrow viewports without addressing that gap yourself.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['side-nav'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> The host exposes <code style="\${t.monoSm}">role="navigation"</code> with <code style="\${t.monoSm}">aria-label="Side navigation"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Trigger:</strong> Announces "Expand navigation"/"Collapse navigation" (or "Open"/"Close navigation" at narrow viewport) and its <code style="\${t.monoSm}">aria-expanded</code> state</li>
        <li style="margin-bottom: 0.5rem;"><strong>Current page:</strong> An active page item announces as current via <code style="\${t.monoSm}">aria-current="page"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Category disclosure:</strong> Announces <code style="\${t.monoSm}">aria-expanded</code> and is programmatically associated with its revealed group via <code style="\${t.monoSm}">aria-controls</code></li>
        <li><strong>State change:</strong> Expand/collapse of the rail is announced via a visually-hidden live region (<code style="\${t.monoSm}">role="status"</code>, <code style="\${t.monoSm}">aria-live="polite"</code>)</li>
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
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift+Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus through the trigger, items, and any utility/account content, in document order</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused trigger, page item, or category disclosure</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Closes the narrow-viewport drawer, if open</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Demo Controls
    viewport: 'current',
    // Content
    siteName: 'Member Portal',
    item1Label: 'Home',
    item1Icon: 'house',
    item2Label: 'Exams',
    item2Icon: 'calendar',
    item3Label: 'Reimbursements',
    item3Icon: 'currency-dollar',
    item4Label: 'Uploads',
    item4Icon: 'upload',
    categoryLabel: 'Resources',
    categoryIcon: 'book-open',
    categoryChild1Label: 'Guides',
    categoryChild2Label: 'Forms',
    item5Label: 'FAQs',
    item5Icon: 'question',
    selectedItem: 'item1',
    // Behavior
    expanded: true,
    collapsible: true,
    icons: true,
    showUtility: true,
    showAccount: true,
    showCompactVariants: true,
    // Visual
    surface: 'solid',
    surfaceColor: '',
    // Global
    theme: 'maximus',
    density: 'default'
  },
  render: (args: PlaygroundArgs) => {
    const sel = args.selectedItem;
    const simulateNarrow = args.viewport === 'below-breakpoint';
    // Wired to args, not just the global toolbar — mode comes along from
    // whatever the toolbar currently has on body, read at render time, so the
    // two don't fight (data-theme/data-mode dark-mode overrides are a single
    // compound selector and need to live on the same element).
    const mode = document.body.getAttribute('data-mode') || 'light';
    const demo = html\`
      <style>
        /* Below mms-side-nav's own 768px breakpoint it hands off to a real mms-header (see its
           class doc comment, DUE-1644) — a normal top-of-page element, not a rail beside content,
           so this demo wrapper needs to stack rather than sit side by side there too. !important
           on both: the Viewport demo control below sets these same properties inline for the
           simulated case, and a genuinely narrow real browser window needs to win over that
           inline default regardless of what the control happens to be set to. */
        @media (max-width: 767px) {
          .side-nav-demo {
            flex-direction: column !important;
            height: auto !important;
          }
        }
      </style>
      <div
        class="side-nav-demo"
        data-theme=\${args.theme}
        data-mode=\${mode}
        style="display: flex; flex-direction: \${simulateNarrow ? 'column' : 'row'}; height: \${simulateNarrow ? 'calc(560px - var(--spacing-lg2))' : '560px'}; overflow-y: \${simulateNarrow ? 'auto' : 'visible'};"
      >
        <mms-side-nav
          .expanded=\${args.expanded}
          ?collapsible=\${args.collapsible}
          ?icons=\${args.icons}
          .forceNarrow=\${simulateNarrow}
          surface=\${args.surface}
          style=\${\`--mms-side-nav-height: 100%;\${args.surfaceColor ? \` --mms-side-nav-surface-color: \${args.surfaceColor};\` : ''}\`}
          site-name=\${args.siteName || nothing}
        >
          <mms-side-nav-item label=\${args.item1Label} icon=\${args.item1Icon || nothing} ?active=\${sel === 'item1'} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=\${args.item2Label} icon=\${args.item2Icon || nothing} ?active=\${sel === 'item2'} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=\${args.item3Label} icon=\${args.item3Icon || nothing} ?active=\${sel === 'item3'} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=\${args.item4Label} icon=\${args.item4Icon || nothing} ?active=\${sel === 'item4'} href="#"></mms-side-nav-item>
          <mms-side-nav-item nav-type="category" label=\${args.categoryLabel} icon=\${args.categoryIcon || nothing}>
            <mms-side-nav-item label=\${args.categoryChild1Label} ?active=\${sel === 'categoryChild1'} href="#"></mms-side-nav-item>
            <mms-side-nav-item label=\${args.categoryChild2Label} ?active=\${sel === 'categoryChild2'} href="#"></mms-side-nav-item>
          </mms-side-nav-item>
          <mms-side-nav-item label=\${args.item5Label} icon=\${args.item5Icon || nothing} ?active=\${sel === 'item5'} href="#"></mms-side-nav-item>
          \${args.showUtility ? html\`
                <div slot="utility" style="display: flex; flex-direction: column; gap: var(--spacing-xs2); padding: var(--spacing-sm2); box-sizing: border-box;">
                  <div style="display: flex; align-items: center; gap: var(--spacing-sm1);">
                    <mms-icon name="phone" size="sm" style="flex-shrink: 0; color: var(--color-text-subtle); display: var(--mms-side-nav-icon-display, flex);"></mms-icon>
                    <span
                      style="font-family: var(--type-ui-label-md-family); font-size: var(--type-ui-label-md-size); line-height: var(--type-ui-label-md-line-height); font-weight: var(--type-ui-label-md-weight); color: var(--color-text-default);"
                    >
                      Contact
                    </span>
                  </div>
                  <mms-link
                    href="tel:+18005550100"
                    label="1-800-555-0100"
                    left-icon="phone"
                    size="sm"
                  ></mms-link>
                </div>
              \` : nothing}
          \${args.showAccount ? html\`<mms-side-nav-item slot="account" icon="user-circle" label="Jane Doe" href="#"></mms-side-nav-item>\` : nothing}
          \${args.showUtility && args.showCompactVariants ? html\`<mms-icon slot="utility-compact" name="phone" size="sm" label="Contact: 1-800-555-0100"></mms-icon>\` : nothing}
          \${args.showAccount && args.showCompactVariants ? html\`
                <mms-side-nav-item
                  slot="account-compact"
                  icon="user-circle"
                  label="Jane Doe"
                  href="#"
                  icon-only
                ></mms-side-nav-item>
              \` : nothing}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken); overflow-y: auto;">
          \${samplePageContent()}
        </div>
      </div>
    \`;
    // A real ~500px box, not a CSS trick — mms-header's own below-breakpoint collapse measures
    // its actual container width via ResizeObserver, so genuinely constraining the canvas here
    // (padding showing it's a deliberately narrow slice, same pattern mms-header's own Playground
    // uses for its simulated-viewport control) is what makes it collapse for real, rather than
    // needing a second forced-collapse override on top of mms-side-nav's own forceNarrow.
    return simulateNarrow ? html\`
          <div style="background: var(--color-neutral-6); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;">
            <div style="width: 500px; margin-inline: auto; contain: paint;">\${demo}</div>
          </div>
        \` : demo;
  },
  argTypes: {
    // ── Demo Controls ─────────────────────────────────────────
    viewport: {
      name: 'Viewport',
      control: {
        type: 'select',
        labels: {
          current: 'Current view',
          'below-breakpoint': 'Below breakpoint'
        }
      },
      options: ['current', 'below-breakpoint'],
      description: 'Not a component prop — a story-only control. "Below breakpoint" forces the real below-768px render path (a nested mms-header, mapped from the same slotted content) and constrains the canvas to a real 500px-wide box, so mms-header\\'s own width-measuring collapse genuinely triggers rather than being faked. mms-side-nav reads the real viewport via matchMedia rather than its own container width (see the Overview story), so unlike mms-header\\'s own simulated-viewport control, nothing in this story can recreate a genuine matchMedia-triggering resize — the override drives that half, the real 500px box drives mms-header\\'s half.',
      table: {
        category: 'Demo Controls'
      }
    },
    // ── Content ───────────────────────────────────────────────
    siteName: {
      name: 'Site name',
      control: 'text',
      description: 'Portal/product name shown beneath the logo. Clear the field to omit it.',
      table: {
        category: 'Content'
      }
    },
    item1Label: {
      name: 'Item 1 label',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    item1Icon: {
      name: 'Item 1 icon',
      control: 'select',
      options: navIconOptions,
      table: {
        category: 'Content'
      }
    },
    item2Label: {
      name: 'Item 2 label',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    item2Icon: {
      name: 'Item 2 icon',
      control: 'select',
      options: navIconOptions,
      table: {
        category: 'Content'
      }
    },
    item3Label: {
      name: 'Item 3 label',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    item3Icon: {
      name: 'Item 3 icon',
      control: 'select',
      options: navIconOptions,
      table: {
        category: 'Content'
      }
    },
    item4Label: {
      name: 'Item 4 label',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    item4Icon: {
      name: 'Item 4 icon',
      control: 'select',
      options: navIconOptions,
      table: {
        category: 'Content'
      }
    },
    categoryLabel: {
      name: 'Category label',
      control: 'text',
      description: 'Label for the disclosure category item',
      table: {
        category: 'Content'
      }
    },
    categoryIcon: {
      name: 'Category icon',
      control: 'select',
      options: navIconOptions,
      table: {
        category: 'Content'
      }
    },
    categoryChild1Label: {
      name: 'Category › child 1',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    categoryChild2Label: {
      name: 'Category › child 2',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    item5Label: {
      name: 'Item 5 label',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    item5Icon: {
      name: 'Item 5 icon',
      control: 'select',
      options: navIconOptions,
      table: {
        category: 'Content'
      }
    },
    selectedItem: {
      name: 'Selected (active) item',
      control: 'select',
      options: ['none', 'item1', 'item2', 'item3', 'item4', 'categoryChild1', 'categoryChild2', 'item5'],
      description: 'Which page item is currently active/current',
      table: {
        category: 'Content'
      }
    },
    // ── Behavior ──────────────────────────────────────────────
    expanded: {
      name: 'Expanded',
      control: 'boolean',
      description: 'Whether the rail shows full content or is collapsed. Forced true whenever Collapsible is off.',
      table: {
        category: 'Behavior'
      }
    },
    collapsible: {
      name: 'Collapsible',
      control: 'boolean',
      description: 'Whether the rail can collapse at all. Off removes the trigger entirely and forces Expanded on — for an experience (e.g. VES) whose rail never collapses. The narrow-viewport drawer is unaffected either way.',
      table: {
        category: 'Behavior'
      }
    },
    icons: {
      name: 'Icons',
      control: 'boolean',
      description: 'When collapsed, show an icon-only rail for the primary nav items instead of hiding them entirely. Independent of utility/account, which use their own -compact slots regardless of this prop.',
      table: {
        category: 'Behavior'
      }
    },
    showUtility: {
      name: 'Show utility',
      control: 'boolean',
      description: 'Toggles sample content in the utility slot (a contact callout here) between the nav items and account. The slot itself accepts any content — a different component, a custom element, a composite — this is just one example of what can go there, not a set of props the real component exposes.',
      table: {
        category: 'Behavior'
      }
    },
    showAccount: {
      name: 'Show account',
      control: 'boolean',
      description: 'Toggles sample content in the account slot, pinned at the bottom (a profile item here). Same as utility — the slot accepts any content, this is one example.',
      table: {
        category: 'Behavior'
      }
    },
    showCompactVariants: {
      name: 'Show compact variants',
      control: 'boolean',
      description: 'Supply utility-compact/account-compact content, shown instead of the full versions while the rail is collapsed',
      table: {
        category: 'Behavior'
      }
    },
    // ── Visual ────────────────────────────────────────────────
    surface: {
      name: 'Surface',
      control: 'select',
      options: ['tint', 'solid'],
      description: 'Background fill: solid (default, flatter, brand-themed solid fill) | tint (the standard panel background). Same prop/values as mms-card’s surface.',
      table: {
        category: 'Visual'
      }
    },
    surfaceColor: {
      name: 'Surface color override',
      control: 'color',
      description: 'Sets --mms-side-nav-surface-color directly. This is an escape hatch for a specific business/design need, not a general invitation to recolor the panel — this control does not check contrast, and any value used here needs its own accessibility review (text, icon, and border colors against it) before shipping. Clear to fall back to the token Surface resolves to.',
      table: {
        category: 'Visual'
      }
    },
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
      description: 'Brand theme',
      table: {
        category: 'Global'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Padding density',
      table: {
        category: 'Global'
      }
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...J.parameters?.docs?.source}}},Y=[`Overview`,`PlaygroundStory`]}));X();export{K as Overview,J as PlaygroundStory,Y as __namedExportsOrder,H as default,X as n,I as t};