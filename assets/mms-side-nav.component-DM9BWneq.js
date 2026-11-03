const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mms-header.component-CbCZ6cXY.js","./rolldown-runtime-DaJ6WEGw.js","./lit-B0BZwaT1.js","./mms-icon.component-DFVI3nJi.js","./preload-helper-si3HNj2m.js","./logo-registry-Dq-Indbo.js","./localize-DGaV1nF3.js","./mms-drawer.component-DvGg3crJ.js","./validate-color-scheme-CB3dwOoW.js","./iframe-C49srKsk.js","./docs-tools-CsVml_Ha.js","./chunk-LCHBOIHN-CtiY1LDi.js","./chunk-A242L54C-BXJjN5h-.js","./delegates-aria-label-HG0ZTDsy.js","./iframe-eulDy1rV.css","./print.css-DylLNsDy.js","./mms-skip-link.component-CGJ1_U0S.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t,t as n}from"./preload-helper-si3HNj2m.js";import{i as r,m as i,n as a,s as o,t as s}from"./lit-B0BZwaT1.js";import{E as c,S as l,T as u,b as d,g as f,h as p,i as m,m as h,n as g,o as _,p as v,r as y,t as b,w as x}from"./mms-icon.component-DFVI3nJi.js";import{i as S,r as C}from"./delegates-aria-label-HG0ZTDsy.js";import{a as w,l as T}from"./iframe-C49srKsk.js";import{a as E,i as D,n as O,r as k,t as A}from"./logo-registry-Dq-Indbo.js";var j,M,N=e((()=>{s(),c(),C(),f(),p(),b(),y(),j=0,M=class extends a{constructor(...e){super(...e),this.navType=`page`,this.label=``,this.href=``,this.active=!1,this.expanded=!1,this.nested=!1,this.disabled=!1,this.iconOnly=!1,this._groupId=`mms-side-nav-group-${j++}`}connectedCallback(){super.connectedCallback(),this.parentElement?.tagName===`MMS-SIDE-NAV-ITEM`&&(this.nested=!0),this.navType===`divider`||this.navType===`section-header`?this.setAttribute(`role`,`presentation`):this.slot===``?this.setAttribute(`role`,`listitem`):this.removeAttribute(`role`)}_handleCategoryToggle(){this.disabled||(this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent(`nav-toggle`,{bubbles:!0,composed:!0,detail:{expanded:this.expanded,label:this.label}})))}_handlePageSelect(){this.disabled||this.dispatchEvent(new CustomEvent(`nav-select`,{bubbles:!0,composed:!0,detail:{href:this.href,label:this.label}}))}_renderIcon(){return this.icon?o`<mms-icon class="icon" name=${this.icon} size=${this.iconOnly?`md`:`sm`}></mms-icon>`:r}render(){switch(this.navType){case`section-header`:return o`<div class="section-header">${this.label}</div>`;case`divider`:return o`<div class="divider" role="separator"></div>`;case`category`:return o`
          <button
            class="item category"
            @click=${this._handleCategoryToggle}
            aria-expanded=${this.expanded}
            aria-controls=${this._groupId}
            aria-label=${this.iconOnly?this.label:r}
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
        `;default:return this.href?o`
              <a
                class="item"
                href=${this.disabled?r:this.href}
                @click=${this._handlePageSelect}
                aria-current=${this.active?`page`:r}
                aria-disabled=${this.disabled?`true`:r}
                aria-label=${this.iconOnly?this.label:r}
                tabindex=${this.disabled?-1:0}
              >
                ${this._renderIcon()}
                <span class="label">${this.label}</span>
              </a>
            `:o`
              <button
                class="item"
                @click=${this._handlePageSelect}
                aria-current=${this.active?`page`:r}
                aria-label=${this.iconOnly?this.label:r}
                ?disabled=${this.disabled}
              >
                ${this._renderIcon()}
                <span class="label">${this.label}</span>
              </button>
            `}}static{this.styles=[u,S,i`
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
        text-align: start;
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
    `,h]}},g([l({type:String,reflect:!0,attribute:`nav-type`})],M.prototype,`navType`,void 0),g([l({type:String})],M.prototype,`label`,void 0),g([l({type:String})],M.prototype,`icon`,void 0),g([l({type:String})],M.prototype,`href`,void 0),g([l({type:Boolean,reflect:!0})],M.prototype,`active`,void 0),g([l({type:Boolean,reflect:!0})],M.prototype,`expanded`,void 0),g([l({type:Boolean,reflect:!0})],M.prototype,`nested`,void 0),g([l({type:Boolean,reflect:!0})],M.prototype,`disabled`,void 0),g([l({type:Boolean,reflect:!0,attribute:`icon-only`})],M.prototype,`iconOnly`,void 0),M=g([x(`mms-side-nav-item`)],M)})),P,F,I=e((()=>{s(),c(),f(),m(),p(),k(),b(),w(),T(),N(),y(),t(),P=`(max-width: 767px)`,F=class extends a{constructor(...e){super(...e),this.expanded=!0,this.collapsible=!0,this.icons=!1,this.surface=`solid`,this.siteName=``,this.hideLogo=!1,this.externalHeader=!1,this._isNarrow=!1,this.forceNarrow=!1,this._hasUtility=!1,this._hasAccount=!1,this._hasUtilityCompact=!1,this._hasAccountCompact=!1,this._theme=``,this._boundMediaChange=this._handleMediaChange.bind(this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`navigation`),this.setAttribute(`aria-label`,`Side navigation`),this.addEventListener(`nav-select`,this._handleItemActivity),this.addEventListener(`nav-toggle`,this._handleItemActivity),this._resolveTheme();let e=this.closest(`[data-theme]`);e&&typeof MutationObserver<`u`&&(this._themeObserver=new MutationObserver(()=>this._resolveTheme()),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`data-theme`]}))}willUpdate(e){(e.has(`collapsible`)||e.has(`expanded`))&&!this.collapsible&&!this.expanded&&(this.expanded=!0)}firstUpdated(){this._mediaQuery=window.matchMedia(P),this._isNarrow=this._mediaQuery.matches,this._syncNarrowAttribute(),this._mediaQuery.addEventListener(`change`,this._boundMediaChange),this._syncSlotPresence(),this._syncIconOnly()}updated(e){super.updated(e),(e.has(`expanded`)||e.has(`icons`))&&this._syncIconOnly(),e.has(`expanded`)&&this._syncCompactSlotInert(),e.has(`forceNarrow`)&&this._syncNarrowAttribute()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`nav-select`,this._handleItemActivity),this.removeEventListener(`nav-toggle`,this._handleItemActivity),this._mediaQuery?.removeEventListener(`change`,this._boundMediaChange),this._themeObserver?.disconnect(),this._themeObserver=void 0}_handleMediaChange(e){this._isNarrow=e.matches,this._syncNarrowAttribute()}get _showNarrowHeader(){return this._isNarrow||this.forceNarrow}_syncNarrowAttribute(){this.toggleAttribute(`narrow`,this._showNarrowHeader)}_syncSlotPresence(){this._hasUtility=this.querySelector(`:scope > [slot="utility"]`)!==null,this._hasAccount=this.querySelector(`:scope > [slot="account"]`)!==null,this._hasUtilityCompact=this.querySelector(`:scope > [slot="utility-compact"]`)!==null,this._hasAccountCompact=this.querySelector(`:scope > [slot="account-compact"]`)!==null,this._syncCompactSlotInert()}_syncCompactSlotInert(){let e=!this.expanded,t=(e,t)=>{this.querySelector(`:scope > [slot="${e}"]`)?.toggleAttribute(`inert`,t)};t(`utility`,e),t(`utility-compact`,!e),t(`account`,e),t(`account-compact`,!e)}_handleDefaultSlotChange(){this._syncIconOnly()}_syncIconOnly(){let e=!this.expanded&&this.icons;for(let t of this.querySelectorAll(`:scope > mms-side-nav-item:not([slot])`))t.iconOnly=e}_handleItemActivity(){!this.expanded&&this.icons&&this._setExpanded(!0)}_handleTriggerClick(){this._setExpanded(!this.expanded)}_setExpanded(e){this.expanded!==e&&(this.expanded=e,this.dispatchEvent(new CustomEvent(`rail-toggle`,{bubbles:!0,composed:!0,detail:{expanded:e}})),this._announce(e?`Side navigation expanded`:`Side navigation collapsed`))}_announce(e){let t=this.shadowRoot?.querySelector(`.sr-live-region`);t&&(t.textContent=e)}get _brandFromTheme(){return this._theme.replace(/-dark$/,``)}_resolveLogoVariant(e){return O(e,`stacked`)?`stacked`:O(e,`text`)?`text`:`full`}_resolveTheme(){let e=this.closest(`[data-theme]`)?.getAttribute(`data-theme`)??``;e!==this._theme&&(this._theme=e);let t=this._brandFromTheme;this.style.setProperty(`--_brand-logo-base`,`${A(t,this._resolveLogoVariant(t))}px`),this._ensureLogos(t)}_ensureLogos(e){D(e)&&E(e).then(()=>{this._resolveTheme(),this.requestUpdate()})}renderBrandLogo(){let e=this._brandFromTheme;if(D(e))return r;let t=e?O(e,this._resolveLogoVariant(e)):void 0;return t?o`<svg class="brand-logo" viewBox=${t.viewBox} xmlns="http://www.w3.org/2000/svg" role="img" aria-label=${e}>
      ${_(t.inner)}
    </svg>`:o`<div class="brand-logo brand-logo--placeholder" role="img" aria-label=${e?`${e} logo placeholder`:`Logo placeholder`}>
        logo
      </div>`}renderCollapsedMark(){let e=this._brandFromTheme,t=e?O(e,`mark-circle`):void 0;return t?o`<svg class="brand-logo brand-logo--mark" viewBox=${t.viewBox} xmlns="http://www.w3.org/2000/svg" role="img" aria-label=${e}>
      ${_(t.inner)}
    </svg>`:r}_renderNavBody(e){let t=!e||this.icons,n=e?this._hasUtilityCompact:this._hasUtility,r=e?this._hasAccountCompact:this._hasAccount;return o`
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
    `}_renderRail(){let e=this.expanded?`Collapse navigation`:`Expand navigation`;return o`
      <div class="side-nav" part="side-nav">
        <div class="nav-header">
          <div class="nav-header-top">
            ${this.hideLogo?r:o`<div class="logo-slot"><slot name="logo">${this.renderBrandLogo()}</slot></div>`}
            <div class="collapsed-mark">${this.renderCollapsedMark()}</div>
            ${this.collapsible?o`
                  <button
                    class="nav-trigger"
                    @click=${this._handleTriggerClick}
                    aria-expanded=${this.expanded}
                    aria-label=${e}
                    title=${e}
                  >
                    <mms-icon name=${this.expanded?`caret-double-left`:`caret-double-right`} size=${this.expanded?`sm`:`md`}></mms-icon>
                  </button>
                `:r}
          </div>
          ${this.siteName?o`<div class="site-name">${this.siteName}</div>`:r}
        </div>
        ${this._renderNavBody(!this.expanded)}
      </div>
    `}_mapNavLinks(){return[...this.querySelectorAll(`:scope > mms-side-nav-item:not([slot])`)].map(e=>{if(e.navType===`divider`||e.navType===`section-header`)return r;let t=e.navType===`category`?this._firstNavigableChildHref(e):e.href;return t?o`<mms-link slot="nav" href=${t} label=${e.label} underline="none"></mms-link>`:r})}_firstNavigableChildHref(e){for(let t of e.querySelectorAll(`:scope > mms-side-nav-item`)){let e=t.href;if(e)return e}return``}_mapAccountLink(){let e=this.querySelector(`:scope > [slot="account"]`);return e?o`<mms-link
      slot="account"
      href=${e.href}
      label=${e.label}
      left-icon=${e.icon||r}
      underline="none"
      type-scale="ui-label"
      style="--color-link-default: var(--color-onyx-11, var(--color-text-default)); --color-link-hover: var(--color-onyx-12, var(--color-text-subtle));"
    ></mms-link>`:r}_mapUtilityActions(){let e=this.querySelector(`:scope > [slot="utility"]`);return e?[...e.querySelectorAll(`mms-link, mms-button`)].map(e=>{let t=e.cloneNode(!0);return t.setAttribute(`slot`,`actions`),t.localName===`mms-link`&&t.setAttribute(`type-scale`,`ui-label`),t}):[]}_renderNarrowHeader(){return customElements.get(`mms-header`)?o`
      <mms-header data-theme=${this._theme} site-name=${this.siteName}>
        ${this._mapNavLinks()} ${this._mapUtilityActions()} ${this._mapAccountLink()}
      </mms-header>
    `:(n(()=>import(`./mms-header.component-CbCZ6cXY.js`).then(e=>(e.t(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),customElements.whenDefined(`mms-header`).then(()=>this.requestUpdate()),r)}render(){return o`
      <div class="sr-live-region" role="status" aria-live="polite" aria-atomic="true"></div>
      ${this._showNarrowHeader?this.externalHeader?r:this._renderNarrowHeader():this._renderRail()}
    `}static{this.styles=[u,v,i`
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
         showing an unlabeled, non-interactive sliver of them. utility/account
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
    `]}},g([l({type:Boolean,reflect:!0})],F.prototype,`expanded`,void 0),g([l({type:Boolean,reflect:!0})],F.prototype,`collapsible`,void 0),g([l({type:Boolean,reflect:!0})],F.prototype,`icons`,void 0),g([l({type:String,reflect:!0})],F.prototype,`surface`,void 0),g([l({type:String,attribute:`site-name`})],F.prototype,`siteName`,void 0),g([l({type:Boolean,reflect:!0,attribute:`hide-logo`})],F.prototype,`hideLogo`,void 0),g([l({type:Boolean,reflect:!0,attribute:`external-header`})],F.prototype,`externalHeader`,void 0),g([d()],F.prototype,`_isNarrow`,void 0),g([d()],F.prototype,`forceNarrow`,void 0),g([d()],F.prototype,`_hasUtility`,void 0),g([d()],F.prototype,`_hasAccount`,void 0),g([d()],F.prototype,`_hasUtilityCompact`,void 0),g([d()],F.prototype,`_hasAccountCompact`,void 0),g([d()],F.prototype,`_theme`,void 0),F=g([x(`mms-side-nav`)],F)}));export{N as n,I as t};