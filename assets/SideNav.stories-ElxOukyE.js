const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mms-header.component-DVvBUzcL.js","./rolldown-runtime-DaJ6WEGw.js","./lit-B0BZwaT1.js","./mms-icon.component-DFVI3nJi.js","./preload-helper-si3HNj2m.js","./logo-registry-X0LMqnmS.js","./localize-DGaV1nF3.js","./mms-drawer.component-C3MYAFZF.js","./validate-color-scheme-CB3dwOoW.js","./iframe-0m-KJlLB.js","./docs-tools-CsVml_Ha.js","./chunk-LCHBOIHN-CtiY1LDi.js","./chunk-A242L54C-BXJjN5h-.js","./delegates-aria-label-HG0ZTDsy.js","./iframe-DE0yxv3E.css","./print.css-DylLNsDy.js","./mms-skip-link.component-CGJ1_U0S.js"])))=>i.map(i=>d[i]);
import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{n,t as r}from"./preload-helper-si3HNj2m.js";import{i,m as a,n as o,s,t as c}from"./lit-B0BZwaT1.js";import{E as l,S as u,T as d,b as f,g as p,h as m,i as h,m as g,n as _,o as v,p as y,r as b,t as x,w as S}from"./mms-icon.component-DFVI3nJi.js";import{i as ee,r as te}from"./delegates-aria-label-HG0ZTDsy.js";import{c as ne,i as C}from"./iframe-0m-KJlLB.js";import{a as w,i as T,n as E,r as D,t as O}from"./logo-registry-X0LMqnmS.js";import{t as k}from"./mms-card.component-Ae9XIj4r.js";import{n as A,r as j}from"./wcag-coverage-DNhlI7v1.js";import{a as M,c as re,i as N,l as P,n as ie,o as ae,r as oe,u as F}from"./doc-styles-BoEZknkJ.js";import{a as I,n as L}from"./a11y-outcome-o7pti1Vx.js";var R,z,B=e((()=>{c(),l(),te(),p(),m(),x(),b(),R=0,z=class extends o{constructor(...e){super(...e),this.navType=`page`,this.label=``,this.href=``,this.active=!1,this.expanded=!1,this.nested=!1,this.disabled=!1,this.iconOnly=!1,this._groupId=`mms-side-nav-group-${R++}`}connectedCallback(){super.connectedCallback(),this.parentElement?.tagName===`MMS-SIDE-NAV-ITEM`&&(this.nested=!0),this.navType===`divider`||this.navType===`section-header`?this.setAttribute(`role`,`presentation`):this.slot===``?this.setAttribute(`role`,`listitem`):this.removeAttribute(`role`)}_handleCategoryToggle(){this.disabled||(this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent(`nav-toggle`,{bubbles:!0,composed:!0,detail:{expanded:this.expanded,label:this.label}})))}_handlePageSelect(){this.disabled||this.dispatchEvent(new CustomEvent(`nav-select`,{bubbles:!0,composed:!0,detail:{href:this.href,label:this.label}}))}_renderIcon(){return this.icon?s`<mms-icon class="icon" name=${this.icon} size=${this.iconOnly?`md`:`sm`}></mms-icon>`:i}render(){switch(this.navType){case`section-header`:return s`<div class="section-header">${this.label}</div>`;case`divider`:return s`<div class="divider" role="separator"></div>`;case`category`:return s`
          <button
            class="item category"
            @click=${this._handleCategoryToggle}
            aria-expanded=${this.expanded}
            aria-controls=${this._groupId}
            aria-label=${this.iconOnly?this.label:i}
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
        `;default:return this.href?s`
              <a
                class="item"
                href=${this.disabled?i:this.href}
                @click=${this._handlePageSelect}
                aria-current=${this.active?`page`:i}
                aria-disabled=${this.disabled?`true`:i}
                aria-label=${this.iconOnly?this.label:i}
                tabindex=${this.disabled?-1:0}
              >
                ${this._renderIcon()}
                <span class="label">${this.label}</span>
              </a>
            `:s`
              <button
                class="item"
                @click=${this._handlePageSelect}
                aria-current=${this.active?`page`:i}
                aria-label=${this.iconOnly?this.label:i}
                ?disabled=${this.disabled}
              >
                ${this._renderIcon()}
                <span class="label">${this.label}</span>
              </button>
            `}}static{this.styles=[d,ee,a`
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
    `,g]}},_([u({type:String,reflect:!0,attribute:`nav-type`})],z.prototype,`navType`,void 0),_([u({type:String})],z.prototype,`label`,void 0),_([u({type:String})],z.prototype,`icon`,void 0),_([u({type:String})],z.prototype,`href`,void 0),_([u({type:Boolean,reflect:!0})],z.prototype,`active`,void 0),_([u({type:Boolean,reflect:!0})],z.prototype,`expanded`,void 0),_([u({type:Boolean,reflect:!0})],z.prototype,`nested`,void 0),_([u({type:Boolean,reflect:!0})],z.prototype,`disabled`,void 0),_([u({type:Boolean,reflect:!0,attribute:`icon-only`})],z.prototype,`iconOnly`,void 0),z=_([S(`mms-side-nav-item`)],z)})),V,H,U=e((()=>{c(),l(),p(),h(),m(),D(),x(),C(),ne(),B(),b(),n(),V=`(max-width: 767px)`,H=class extends o{constructor(...e){super(...e),this.expanded=!0,this.collapsible=!0,this.icons=!1,this.surface=`solid`,this.siteName=``,this.hideLogo=!1,this.externalHeader=!1,this._isNarrow=!1,this.forceNarrow=!1,this._hasUtility=!1,this._hasAccount=!1,this._hasUtilityCompact=!1,this._hasAccountCompact=!1,this._theme=``,this._boundMediaChange=this._handleMediaChange.bind(this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`navigation`),this.setAttribute(`aria-label`,`Side navigation`),this.addEventListener(`nav-select`,this._handleItemActivity),this.addEventListener(`nav-toggle`,this._handleItemActivity),this._resolveTheme();let e=this.closest(`[data-theme]`);e&&typeof MutationObserver<`u`&&(this._themeObserver=new MutationObserver(()=>this._resolveTheme()),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`data-theme`]}))}willUpdate(e){(e.has(`collapsible`)||e.has(`expanded`))&&!this.collapsible&&!this.expanded&&(this.expanded=!0)}firstUpdated(){this._mediaQuery=window.matchMedia(V),this._isNarrow=this._mediaQuery.matches,this._syncNarrowAttribute(),this._mediaQuery.addEventListener(`change`,this._boundMediaChange),this._syncSlotPresence(),this._syncIconOnly()}updated(e){super.updated(e),(e.has(`expanded`)||e.has(`icons`))&&this._syncIconOnly(),e.has(`expanded`)&&this._syncCompactSlotInert(),e.has(`forceNarrow`)&&this._syncNarrowAttribute()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`nav-select`,this._handleItemActivity),this.removeEventListener(`nav-toggle`,this._handleItemActivity),this._mediaQuery?.removeEventListener(`change`,this._boundMediaChange),this._themeObserver?.disconnect(),this._themeObserver=void 0}_handleMediaChange(e){this._isNarrow=e.matches,this._syncNarrowAttribute()}get _showNarrowHeader(){return this._isNarrow||this.forceNarrow}_syncNarrowAttribute(){this.toggleAttribute(`narrow`,this._showNarrowHeader)}_syncSlotPresence(){this._hasUtility=this.querySelector(`:scope > [slot="utility"]`)!==null,this._hasAccount=this.querySelector(`:scope > [slot="account"]`)!==null,this._hasUtilityCompact=this.querySelector(`:scope > [slot="utility-compact"]`)!==null,this._hasAccountCompact=this.querySelector(`:scope > [slot="account-compact"]`)!==null,this._syncCompactSlotInert()}_syncCompactSlotInert(){let e=!this.expanded,t=(e,t)=>{this.querySelector(`:scope > [slot="${e}"]`)?.toggleAttribute(`inert`,t)};t(`utility`,e),t(`utility-compact`,!e),t(`account`,e),t(`account-compact`,!e)}_handleDefaultSlotChange(){this._syncIconOnly()}_syncIconOnly(){let e=!this.expanded&&this.icons;for(let t of this.querySelectorAll(`:scope > mms-side-nav-item:not([slot])`))t.iconOnly=e}_handleItemActivity(){!this.expanded&&this.icons&&this._setExpanded(!0)}_handleTriggerClick(){this._setExpanded(!this.expanded)}_setExpanded(e){this.expanded!==e&&(this.expanded=e,this.dispatchEvent(new CustomEvent(`rail-toggle`,{bubbles:!0,composed:!0,detail:{expanded:e}})),this._announce(e?`Side navigation expanded`:`Side navigation collapsed`))}_announce(e){let t=this.shadowRoot?.querySelector(`.sr-live-region`);t&&(t.textContent=e)}get _brandFromTheme(){return this._theme.replace(/-dark$/,``)}_resolveLogoVariant(e){return E(e,`stacked`)?`stacked`:E(e,`text`)?`text`:`full`}_resolveTheme(){let e=this.closest(`[data-theme]`)?.getAttribute(`data-theme`)??``;e!==this._theme&&(this._theme=e);let t=this._brandFromTheme;this.style.setProperty(`--_brand-logo-base`,`${O(t,this._resolveLogoVariant(t))}px`),this._ensureLogos(t)}_ensureLogos(e){T(e)&&w(e).then(()=>{this._resolveTheme(),this.requestUpdate()})}renderBrandLogo(){let e=this._brandFromTheme;if(T(e))return i;let t=e?E(e,this._resolveLogoVariant(e)):void 0;return t?s`<svg class="brand-logo" viewBox=${t.viewBox} xmlns="http://www.w3.org/2000/svg" role="img" aria-label=${e}>
      ${v(t.inner)}
    </svg>`:s`<div class="brand-logo brand-logo--placeholder" role="img" aria-label=${e?`${e} logo placeholder`:`Logo placeholder`}>
        logo
      </div>`}renderCollapsedMark(){let e=this._brandFromTheme,t=e?E(e,`mark-circle`):void 0;return t?s`<svg class="brand-logo brand-logo--mark" viewBox=${t.viewBox} xmlns="http://www.w3.org/2000/svg" role="img" aria-label=${e}>
      ${v(t.inner)}
    </svg>`:i}_renderNavBody(e){let t=!e||this.icons,n=e?this._hasUtilityCompact:this._hasUtility,r=e?this._hasAccountCompact:this._hasAccount;return s`
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
    `}_renderRail(){let e=this.expanded?`Collapse navigation`:`Expand navigation`;return s`
      <div class="side-nav" part="side-nav">
        <div class="nav-header">
          <div class="nav-header-top">
            ${this.hideLogo?i:s`<div class="logo-slot"><slot name="logo">${this.renderBrandLogo()}</slot></div>`}
            <div class="collapsed-mark">${this.renderCollapsedMark()}</div>
            ${this.collapsible?s`
                  <button
                    class="nav-trigger"
                    @click=${this._handleTriggerClick}
                    aria-expanded=${this.expanded}
                    aria-label=${e}
                    title=${e}
                  >
                    <mms-icon name=${this.expanded?`caret-double-left`:`caret-double-right`} size=${this.expanded?`sm`:`md`}></mms-icon>
                  </button>
                `:i}
          </div>
          ${this.siteName?s`<div class="site-name">${this.siteName}</div>`:i}
        </div>
        ${this._renderNavBody(!this.expanded)}
      </div>
    `}_mapNavLinks(){return[...this.querySelectorAll(`:scope > mms-side-nav-item:not([slot])`)].map(e=>{if(e.navType===`divider`||e.navType===`section-header`)return i;let t=e.navType===`category`?this._firstNavigableChildHref(e):e.href;return t?s`<mms-link slot="nav" href=${t} label=${e.label} underline="none"></mms-link>`:i})}_firstNavigableChildHref(e){for(let t of e.querySelectorAll(`:scope > mms-side-nav-item`)){let e=t.href;if(e)return e}return``}_mapAccountLink(){let e=this.querySelector(`:scope > [slot="account"]`);return e?s`<mms-link
      slot="account"
      href=${e.href}
      label=${e.label}
      left-icon=${e.icon||i}
      underline="none"
      type-scale="ui-label"
      style="--color-link-default: var(--color-onyx-11, var(--color-text-default)); --color-link-hover: var(--color-onyx-12, var(--color-text-subtle));"
    ></mms-link>`:i}_mapUtilityActions(){let e=this.querySelector(`:scope > [slot="utility"]`);return e?[...e.querySelectorAll(`mms-link, mms-button`)].map(e=>{let t=e.cloneNode(!0);return t.setAttribute(`slot`,`actions`),t.localName===`mms-link`&&t.setAttribute(`type-scale`,`ui-label`),t}):[]}_renderNarrowHeader(){return customElements.get(`mms-header`)?s`
      <mms-header data-theme=${this._theme} site-name=${this.siteName}>
        ${this._mapNavLinks()} ${this._mapUtilityActions()} ${this._mapAccountLink()}
      </mms-header>
    `:(r(()=>import(`./mms-header.component-DVvBUzcL.js`).then(e=>(e.t(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url),customElements.whenDefined(`mms-header`).then(()=>this.requestUpdate()),i)}render(){return s`
      <div class="sr-live-region" role="status" aria-live="polite" aria-atomic="true"></div>
      ${this._showNarrowHeader?this.externalHeader?i:this._renderNarrowHeader():this._renderRail()}
    `}static{this.styles=[d,y,a`
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
    `]}},_([u({type:Boolean,reflect:!0})],H.prototype,`expanded`,void 0),_([u({type:Boolean,reflect:!0})],H.prototype,`collapsible`,void 0),_([u({type:Boolean,reflect:!0})],H.prototype,`icons`,void 0),_([u({type:String,reflect:!0})],H.prototype,`surface`,void 0),_([u({type:String,attribute:`site-name`})],H.prototype,`siteName`,void 0),_([u({type:Boolean,reflect:!0,attribute:`hide-logo`})],H.prototype,`hideLogo`,void 0),_([u({type:Boolean,reflect:!0,attribute:`external-header`})],H.prototype,`externalHeader`,void 0),_([f()],H.prototype,`_isNarrow`,void 0),_([f()],H.prototype,`forceNarrow`,void 0),_([f()],H.prototype,`_hasUtility`,void 0),_([f()],H.prototype,`_hasAccount`,void 0),_([f()],H.prototype,`_hasUtilityCompact`,void 0),_([f()],H.prototype,`_hasAccountCompact`,void 0),_([f()],H.prototype,`_theme`,void 0),H=_([S(`mms-side-nav`)],H)})),W=t({Overview:()=>Y,PlaygroundStory:()=>Z,__namedExportsOrder:()=>Q,default:()=>J});function G(e,t=`480px`){return s`
    <div style="display: flex; height: ${t}; ${M.frame}">
      ${e}
    </div>
  `}function K(){return s`
    <mms-side-nav-item label="Home" icon="house" active href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Exams" icon="calendar" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Reimbursements" icon="currency-dollar" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Uploads" icon="upload" href="#"></mms-side-nav-item>
    <mms-side-nav-item nav-type="category" label="Resources" icon="book-open">
      <mms-side-nav-item label="Guides" href="#"></mms-side-nav-item>
      <mms-side-nav-item label="Forms" href="#"></mms-side-nav-item>
    </mms-side-nav-item>
    <mms-side-nav-item label="FAQs" icon="question" href="#"></mms-side-nav-item>
  `}function se(){return s`
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
  `}function q(e,t,n=!0){return s`
    ${e?s`
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
              style="padding-inline-start: ${n?`calc(var(--icon-size-sm) + var(--spacing-sm1))`:`0`};"
            ></mms-link>
          </div>
        `:i}
    <mms-side-nav-item slot="account" icon="user-circle" label="Jane Doe" href="#"></mms-side-nav-item>
    ${e&&t?s`<mms-icon slot="utility-compact" name="phone" size="sm" label="Contact: 1-800-555-0100"></mms-icon>`:i}
    ${t?s`
          <mms-side-nav-item
            slot="account-compact"
            icon="user-circle"
            label="Jane Doe"
            href="#"
            icon-only
          ></mms-side-nav-item>
        `:i}
  `}function ce(){return s`
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
  `}var J,Y,X,Z,Q,$=e((()=>{c(),U(),B(),x(),C(),k(),A(),L(),re(),J={title:`Navigational/Side Nav`,tags:[`!autodocs`]},Y={name:`Overview`,render:()=>s`
    <div data-theme=${oe} data-mode=${ae()} style=${ie}>

      <h1 style="${F.h1}">Side Nav</h1>
      <p style="${F.body} ${M.muted} max-width: ${N}; margin-bottom: ${P.subsection};">
        A persistent vertical panel for in-app/dashboard navigation, alongside page content —
        logo, a list of <code style="${F.monoSm}">mms-side-nav-item</code> entries, and optional
        utility/account content. Collapses to an icon rail on request, and below 768px the rail
        hands off to a real <code style="${F.monoSm}">mms-header</code> instance — not a second
        drawer implementation — configured from the same slotted content.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${P.subsection};">
        <div slot="body-content">
        <p style="${F.bodySm} margin: 0;">
          No gradient/brand background is built in. The component ships as a standard light
          surface, same as <code style="${F.monoSm}">mms-header</code> —
          a dark, branded treatment is a consuming theme's styling choice, not a structural default.
        </p>
        </div>
      </mms-card>

      <hr style="${M.divider}" />

      <!-- Basic Usage -->
      <h2 style="${F.h2}">Basic usage</h2>
      <p style="${F.bodySm} ${M.muted} max-width: ${N}; margin-bottom: ${P.subsection};">
        Page items (optionally linking via <code style="${F.monoSm}">href</code>), a category
        with its own disclosure group, dividers, and section headers all compose from the same
        <code style="${F.monoSm}">mms-side-nav-item</code> element via its
        <code style="${F.monoSm}">nav-type</code> prop.
      </p>

      ${G(s`
        <mms-side-nav site-name="Member Portal" style="--mms-side-nav-top-offset: 0px; --mms-side-nav-height: 100%;">
          ${K()}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="${F.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      `)}

      <hr style="${M.divider} margin-top: ${P.subsection};" />

      <!-- Collapse -->
      <h2 style="${F.h2}">Collapse</h2>
      <p style="${F.bodySm} ${M.muted} max-width: ${N}; margin-bottom: ${P.subsection};">
        The trigger toggles <code style="${F.monoSm}">expanded</code>. With
        <code style="${F.monoSm}">icons</code> set, collapsing shows an icon-only rail instead of
        hiding navigation entirely — the real items collapse in place rather than a second,
        synthetic rail (see the component doc comment for why). Activating any item while
        collapsed expands the rail first.
      </p>

      ${G(s`
        <mms-side-nav .expanded=${!1} icons style="--mms-side-nav-height: 100%;">
          ${K()}
          ${q(!1,!0)}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="${F.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      `)}

      <p style="${F.caption} ${M.muted} max-width: ${N}; margin: ${P.subsection} 0 0;">
        Without <code style="${F.monoSm}">icons</code>, collapsing hides the primary nav items
        entirely — appropriate when there's no meaningful icon-only representation for them.
        <code style="${F.monoSm}">account</code> uses its own <code style="${F.monoSm}">-compact</code>
        slot instead (shown above) and isn't gated by <code style="${F.monoSm}">icons</code> at
        all — a collapsed rail can show a compact account control even when the primary items have
        no icon-only form. <code style="${F.monoSm}">utility</code> has the same
        <code style="${F.monoSm}">-compact</code> option (see <code style="${F.monoSm}">mms-icon</code>
        slotted as <code style="${F.monoSm}">utility-compact</code>) — omitted here since this nav
        has no utility content to begin with.
      </p>

      <hr style="${M.divider} margin-top: ${P.subsection};" />

      <!-- Utility and account slots -->
      <h2 style="${F.h2}">Utility and account content</h2>
      <p style="${F.bodySm} ${M.muted} max-width: ${N}; margin-bottom: ${P.subsection};">
        Both optional. <code style="${F.monoSm}">utility</code> is free-form content between the
        nav items and the account block (e.g. a support/contact callout);
        <code style="${F.monoSm}">account</code> is pinned at the bottom (e.g. a profile control
        with sign-out). Each is preceded by a divider only when that slot actually has content —
        an empty slot contributes nothing, same convention as <code style="${F.monoSm}">mms-footer</code>.
      </p>

      ${G(s`
        <mms-side-nav icons style="--mms-side-nav-height: 100%;">
          ${K()}
          ${q(!0,!0)}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="${F.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      `)}

      <hr style="${M.divider} margin-top: ${P.subsection};" />

      <!-- Scrollable content -->
      <h2 style="${F.h2}">Scrollable content</h2>
      <p style="${F.bodySm} ${M.muted} max-width: ${N}; margin-bottom: ${P.subsection};">
        The rail is its own scroll container — independent of the page, and independent of the main
        content pane beside it. When there are more items than available height, the rail scrolls
        as a single unit (header, items, utility, and account all move together) rather than
        clipping or spawning a second nested scroll region. No scrollbar is ever shown for it —
        scroll with the wheel/trackpad over the rail below to see the rest of the list; the page
        and the content pane to its right don't move.
      </p>

      ${G(s`
        <mms-side-nav style="--mms-side-nav-height: 100%;">
          ${se()}
          ${q(!0,!1,!1)}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="${F.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      `)}

      <hr style="${M.divider} margin-top: ${P.subsection};" />

      <!-- Narrow viewport -->
      <h2 style="${F.h2}">Narrow viewport</h2>
      <p style="${F.bodySm} ${M.muted} max-width: ${N}; margin-bottom: ${P.content};">
        Below 768px, the rail disappears and <code style="${F.monoSm}">mms-header</code> renders.
        The switch happens at the real browser viewport width
        (<code style="${F.monoSm}">matchMedia</code>), not a container query.
      </p>
      <p style="${F.bodySm} ${M.muted} max-width: ${N}; margin: 0 0 ${P.content};">
        <code style="${F.monoSm}">mms-header</code>'s flat nav model has no equivalent of a
        category's disclosure group, so the slotted content is mapped rather than reused as-is:
      </p>
      <ul style="${F.bodySm} ${M.muted} max-width: ${N}; margin: 0 0 ${P.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${P.label};">
          <strong>Nav items:</strong> each <code style="${F.monoSm}">page</code>/<code style="${F.monoSm}">category</code>
          item becomes an <code style="${F.monoSm}">mms-link</code> nav entry
        </li>
        <li style="margin-bottom: ${P.label};">
          <strong>Categories:</strong> use their first navigable child's href, since a category
          itself has none — everything else nested under it isn't carried over
        </li>
        <li style="margin-bottom: ${P.label};">
          <strong>Dividers/section headers:</strong> dropped — no flat-nav equivalent
        </li>
        <li style="margin-bottom: ${P.label};">
          <strong>Account:</strong> the <code style="${F.monoSm}">account</code> slot's item maps
          to an <code style="${F.monoSm}">mms-link</code> in <code style="${F.monoSm}">mms-header</code>'s
          own <code style="${F.monoSm}">account</code> slot, carrying its icon over too, not just
          label/href
        </li>
        <li>
          <strong>Utility:</strong> only the <code style="${F.monoSm}">mms-link</code>/<code style="${F.monoSm}">mms-button</code>
          elements found inside it (free-form by design — see its own description above) carry
          over as quick actions
        </li>
      </ul>
      <p style="${F.bodySm} ${M.muted} max-width: ${N}; margin-bottom: ${P.content};">
        By default, <code style="${F.monoSm}">mms-link</code> renders lighter-weight and blue, like
        a plain hyperlink — not like <code style="${F.monoSm}">mms-header</code>'s own nav links.
        That's because <code style="${F.monoSm}">mms-header</code> only applies its nav color
        treatment and its <code style="${F.monoSm}">type-scale="ui-label"</code> weight correction
        to its own <code style="${F.monoSm}">nav</code> slot, not to <code style="${F.monoSm}">account</code>
        or <code style="${F.monoSm}">actions</code>. So both are set explicitly on every mapped
        link here, making them match the rest of the header instead of standing out.
      </p>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${P.subsection};">
        <div slot="body-content">
        <p style="${F.bodySm} margin: 0;">
          Resizing this preview won't trigger it — <code style="${F.monoSm}">mms-side-nav</code>
          listens for a real window resize, not a container size change. To see it, go to the
          Playground story and set "Viewport" to "Below breakpoint."
        </p>
        </div>
      </mms-card>

      <hr style="${M.divider}" />

      <!-- Placement -->
      <h2 style="${F.h2}">Placement under a fixed header</h2>
      <p style="${F.bodySm} ${M.muted} max-width: ${N}; margin-bottom: ${P.content};">
        If your page has a fixed header above the side nav, the nav would otherwise stick to the
        very top of the viewport and overlap it. Set <code style="${F.monoSm}">--mms-side-nav-top-offset</code>
        to the header's height (in px) to fix this: it pushes the nav's sticky position down below
        the header, and shrinks the nav's own height by that same amount so it doesn't run past
        the bottom of the screen.
      </p>
      <pre style="${M.pre} margin-bottom: ${P.content};"><code>mms-side-nav { --mms-side-nav-top-offset: 64px; }</code></pre>
      <p style="${F.bodySm} ${M.muted} max-width: ${N}; margin-bottom: ${P.content};">
        If that same external header also shows the brand logo, the rail would otherwise show it
        a second time right below. Set <code style="${F.monoSm}">hide-logo</code> on
        <code style="${F.monoSm}">mms-side-nav</code> to suppress its own expanded-state logo (the
        small collapsed-rail mark is unaffected — many products keep that one regardless). Omit
        <code style="${F.monoSm}">site-name</code> entirely if the external header already shows
        the product/site name; there's no separate prop needed for that, since it only renders
        when you pass it.
      </p>
      <pre style="${M.pre} margin-bottom: ${P.content};"><code>mms-side-nav { --mms-side-nav-top-offset: 64px; }
mms-side-nav[hide-logo] { /* no site-name attribute set */ }</code></pre>
      <p style="${F.bodySm} ${M.muted} max-width: ${N}; margin-bottom: ${P.content};">
        If that external header is meant to stay on screen at every width, also set
        <code style="${F.monoSm}">external-header</code>. Below 768px,
        <code style="${F.monoSm}">mms-side-nav</code> normally replaces the rail with its own
        separate nested <code style="${F.monoSm}">mms-header</code> (see "Narrow viewport" above)
        — with <code style="${F.monoSm}">external-header</code> set, it renders nothing there
        instead, so you don't end up with two header instances on screen at once.
      </p>
      <pre style="${M.pre} margin-bottom: ${P.content};"><code>&lt;mms-side-nav hide-logo external-header style="--mms-side-nav-top-offset: 64px;"&gt;
  ...
&lt;/mms-side-nav&gt;</code></pre>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${P.subsection};">
        <div slot="body-content">
        <p style="${F.bodySm} margin: 0;">
          <strong>Known limitation (MVP1):</strong> <code style="${F.monoSm}">external-header</code>
          only hides <code style="${F.monoSm}">mms-side-nav</code>'s own narrow-viewport content —
          it doesn't move that content anywhere else. Unless the external header independently
          provides an equivalent path to the same navigation, the side nav's own items have no
          reachable path on mobile in this composition. There's no automatic reconciliation
          between the two; this combination isn't recommended for an experience that must support
          narrow viewports without addressing that gap yourself.
        </p>
        </div>
      </mms-card>

      <hr style="${M.divider}" />

      <!-- Accessibility -->
      <h2 style="${F.h2}">Accessibility</h2>

      <h3 style="${F.h3}">WCAG 2.2 AA compliance</h3>
      ${I(j[`side-nav`].rows)}

      <h3 style="${F.h3}">Screen reader behavior</h3>
      <ul style="${F.bodySm} ${M.muted} margin: 0 0 ${P.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${P.label};"><strong>Landmark:</strong> The host exposes <code style="${F.monoSm}">role="navigation"</code> with <code style="${F.monoSm}">aria-label="Side navigation"</code></li>
        <li style="margin-bottom: ${P.label};"><strong>Trigger:</strong> Announces "Expand navigation"/"Collapse navigation" (or "Open"/"Close navigation" at narrow viewport) and its <code style="${F.monoSm}">aria-expanded</code> state</li>
        <li style="margin-bottom: ${P.label};"><strong>Current page:</strong> An active page item announces as current via <code style="${F.monoSm}">aria-current="page"</code></li>
        <li style="margin-bottom: ${P.label};"><strong>Category disclosure:</strong> Announces <code style="${F.monoSm}">aria-expanded</code> and is programmatically associated with its revealed group via <code style="${F.monoSm}">aria-controls</code></li>
        <li><strong>State change:</strong> Expand/collapse of the rail is announced via a visually-hidden live region (<code style="${F.monoSm}">role="status"</code>, <code style="${F.monoSm}">aria-live="polite"</code>)</li>
      </ul>

      <h3 style="${F.h3}">Keyboard navigation</h3>
      <table style="${M.table} margin-bottom: ${P.subsection};">
        <thead>
          <tr>
            <th style="${M.th} width: 140px;">Key</th>
            <th style="${M.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${M.td}"><kbd style="${M.kbd}">Tab</kbd> / <kbd style="${M.kbd}">Shift+Tab</kbd></td>
            <td style="${M.td}">Move focus through the trigger, items, and any utility/account content, in document order</td>
          </tr>
          <tr>
            <td style="${M.td}"><kbd style="${M.kbd}">Enter</kbd> / <kbd style="${M.kbd}">Space</kbd></td>
            <td style="${M.td}">Activate the focused trigger, page item, or category disclosure</td>
          </tr>
          <tr>
            <td style="${M.td}"><kbd style="${M.kbd}">Escape</kbd></td>
            <td style="${M.td}">Closes the narrow-viewport drawer, if open</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},X=[``,`house`,`calendar`,`currency-dollar`,`upload`,`book-open`,`question`,`file-text`,`stethoscope`,`calendar-plus`,`envelope`,`folder`,`receipt`,`bell`,`lifebuoy`,`gear`,`user-circle`,`phone`,`map-pin`,`heartbeat`],Z={name:`Playground`,tags:[`!dev`],args:{viewport:`current`,siteName:`Member Portal`,item1Label:`Home`,item1Icon:`house`,item2Label:`Exams`,item2Icon:`calendar`,item3Label:`Reimbursements`,item3Icon:`currency-dollar`,item4Label:`Uploads`,item4Icon:`upload`,categoryLabel:`Resources`,categoryIcon:`book-open`,categoryChild1Label:`Guides`,categoryChild2Label:`Forms`,item5Label:`FAQs`,item5Icon:`question`,selectedItem:`item1`,expanded:!0,collapsible:!0,icons:!0,showUtility:!0,showAccount:!0,showCompactVariants:!0,surface:`solid`,surfaceColor:``,theme:`maximus`,density:`default`},render:e=>{let t=e.selectedItem,n=e.viewport===`below-breakpoint`,r=document.body.getAttribute(`data-mode`)||`light`,a=s`
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
        data-mode=${r}
        style="display: flex; flex-direction: ${n?`column`:`row`}; height: ${n?`calc(560px - var(--spacing-lg2))`:`560px`}; overflow-y: ${n?`auto`:`visible`};"
      >
        <mms-side-nav
          .expanded=${e.expanded}
          ?collapsible=${e.collapsible}
          ?icons=${e.icons}
          .forceNarrow=${n}
          surface=${e.surface}
          style=${`--mms-side-nav-height: 100%;${e.surfaceColor?` --mms-side-nav-surface-color: ${e.surfaceColor};`:``}`}
          site-name=${e.siteName||i}
        >
          <mms-side-nav-item label=${e.item1Label} icon=${e.item1Icon||i} ?active=${t===`item1`} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=${e.item2Label} icon=${e.item2Icon||i} ?active=${t===`item2`} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=${e.item3Label} icon=${e.item3Icon||i} ?active=${t===`item3`} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=${e.item4Label} icon=${e.item4Icon||i} ?active=${t===`item4`} href="#"></mms-side-nav-item>
          <mms-side-nav-item nav-type="category" label=${e.categoryLabel} icon=${e.categoryIcon||i}>
            <mms-side-nav-item label=${e.categoryChild1Label} ?active=${t===`categoryChild1`} href="#"></mms-side-nav-item>
            <mms-side-nav-item label=${e.categoryChild2Label} ?active=${t===`categoryChild2`} href="#"></mms-side-nav-item>
          </mms-side-nav-item>
          <mms-side-nav-item label=${e.item5Label} icon=${e.item5Icon||i} ?active=${t===`item5`} href="#"></mms-side-nav-item>
          ${e.showUtility?s`
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
              `:i}
          ${e.showAccount?s`<mms-side-nav-item slot="account" icon="user-circle" label="Jane Doe" href="#"></mms-side-nav-item>`:i}
          ${e.showUtility&&e.showCompactVariants?s`<mms-icon slot="utility-compact" name="phone" size="sm" label="Contact: 1-800-555-0100"></mms-icon>`:i}
          ${e.showAccount&&e.showCompactVariants?s`
                <mms-side-nav-item
                  slot="account-compact"
                  icon="user-circle"
                  label="Jane Doe"
                  href="#"
                  icon-only
                ></mms-side-nav-item>
              `:i}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken); overflow-y: auto;">
          ${ce()}
        </div>
      </div>
    `;return n?s`
          <div style="background: var(--color-neutral-6); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;">
            <div style="width: 500px; margin-inline: auto; contain: paint;">${a}</div>
          </div>
        `:a},argTypes:{viewport:{name:`Viewport`,control:{type:`select`,labels:{current:`Current view`,"below-breakpoint":`Below breakpoint`}},options:[`current`,`below-breakpoint`],description:`Not a component prop — a story-only control. "Below breakpoint" forces the real below-768px render path (a nested mms-header, mapped from the same slotted content) and constrains the canvas to a real 500px-wide box, so mms-header's own width-measuring collapse genuinely triggers rather than being faked. mms-side-nav reads the real viewport via matchMedia rather than its own container width (see the Overview story), so unlike mms-header's own simulated-viewport control, nothing in this story can recreate a genuine matchMedia-triggering resize — the override drives that half, the real 500px box drives mms-header's half.`,table:{category:`Demo Controls`}},siteName:{name:`Site name`,control:`text`,description:`Portal/product name shown beneath the logo. Clear the field to omit it.`,table:{category:`Content`}},item1Label:{name:`Item 1 label`,control:`text`,table:{category:`Content`}},item1Icon:{name:`Item 1 icon`,control:`select`,options:X,table:{category:`Content`}},item2Label:{name:`Item 2 label`,control:`text`,table:{category:`Content`}},item2Icon:{name:`Item 2 icon`,control:`select`,options:X,table:{category:`Content`}},item3Label:{name:`Item 3 label`,control:`text`,table:{category:`Content`}},item3Icon:{name:`Item 3 icon`,control:`select`,options:X,table:{category:`Content`}},item4Label:{name:`Item 4 label`,control:`text`,table:{category:`Content`}},item4Icon:{name:`Item 4 icon`,control:`select`,options:X,table:{category:`Content`}},categoryLabel:{name:`Category label`,control:`text`,description:`Label for the disclosure category item`,table:{category:`Content`}},categoryIcon:{name:`Category icon`,control:`select`,options:X,table:{category:`Content`}},categoryChild1Label:{name:`Category › child 1`,control:`text`,table:{category:`Content`}},categoryChild2Label:{name:`Category › child 2`,control:`text`,table:{category:`Content`}},item5Label:{name:`Item 5 label`,control:`text`,table:{category:`Content`}},item5Icon:{name:`Item 5 icon`,control:`select`,options:X,table:{category:`Content`}},selectedItem:{name:`Selected (active) item`,control:`select`,options:[`none`,`item1`,`item2`,`item3`,`item4`,`categoryChild1`,`categoryChild2`,`item5`],description:`Which page item is currently active/current`,table:{category:`Content`}},expanded:{name:`Expanded`,control:`boolean`,description:`Whether the rail shows full content or is collapsed. Forced true whenever Collapsible is off.`,table:{category:`Behavior`}},collapsible:{name:`Collapsible`,control:`boolean`,description:`Whether the rail can collapse at all. Off removes the trigger entirely and forces Expanded on — for an experience (e.g. VES) whose rail never collapses. The narrow-viewport drawer is unaffected either way.`,table:{category:`Behavior`}},icons:{name:`Icons`,control:`boolean`,description:`When collapsed, show an icon-only rail for the primary nav items instead of hiding them entirely. Independent of utility/account, which use their own -compact slots regardless of this prop.`,table:{category:`Behavior`}},showUtility:{name:`Show utility`,control:`boolean`,description:`Toggles sample content in the utility slot (a contact callout here) between the nav items and account. The slot itself accepts any content — a different component, a custom element, a composite — this is just one example of what can go there, not a set of props the real component exposes.`,table:{category:`Behavior`}},showAccount:{name:`Show account`,control:`boolean`,description:`Toggles sample content in the account slot, pinned at the bottom (a profile item here). Same as utility — the slot accepts any content, this is one example.`,table:{category:`Behavior`}},showCompactVariants:{name:`Show compact variants`,control:`boolean`,description:`Supply utility-compact/account-compact content, shown instead of the full versions while the rail is collapsed`,table:{category:`Behavior`}},surface:{name:`Surface`,control:`select`,options:[`tint`,`solid`],description:`Background fill: solid (default, flatter, brand-themed solid fill) | tint (the standard panel background). Same prop/values as mms-card’s surface.`,table:{category:`Visual`}},surfaceColor:{name:`Surface color override`,control:`color`,description:`Sets --mms-side-nav-surface-color directly. This is an escape hatch for a specific business/design need, not a general invitation to recolor the panel — this control does not check contrast, and any value used here needs its own accessibility review (text, icon, and border colors against it) before shipping. Clear to fall back to the token Surface resolves to.`,table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{layout:`fullscreen`}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Side Nav</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A persistent vertical panel for in-app/dashboard navigation, alongside page content —
        logo, a list of <code style="\${t.monoSm}">mms-side-nav-item</code> entries, and optional
        utility/account content. Collapses to an icon rail on request, and below 768px the rail
        hands off to a real <code style="\${t.monoSm}">mms-header</code> instance — not a second
        drawer implementation — configured from the same slotted content.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm} margin: 0;">
          No gradient/brand background is built in. The component ships as a standard light
          surface, same as <code style="\${t.monoSm}">mms-header</code> —
          a dark, branded treatment is a consuming theme's styling choice, not a structural default.
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Page items (optionally linking via <code style="\${t.monoSm}">href</code>), a category
        with its own disclosure group, dividers, and section headers all compose from the same
        <code style="\${t.monoSm}">mms-side-nav-item</code> element via its
        <code style="\${t.monoSm}">nav-type</code> prop.
      </p>

      \${demoFrame(html\`
        <mms-side-nav site-name="Member Portal" style="--mms-side-nav-top-offset: 0px; --mms-side-nav-height: 100%;">
          \${sampleItems()}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="\${t.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      \`)}

      <hr style="\${doc.divider} margin-top: \${space.subsection};" />

      <!-- Collapse -->
      <h2 style="\${t.h2}">Collapse</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
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
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="\${t.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      \`)}

      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX}; margin: \${space.subsection} 0 0;">
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

      <hr style="\${doc.divider} margin-top: \${space.subsection};" />

      <!-- Utility and account slots -->
      <h2 style="\${t.h2}">Utility and account content</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
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
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="\${t.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      \`)}

      <hr style="\${doc.divider} margin-top: \${space.subsection};" />

      <!-- Scrollable content -->
      <h2 style="\${t.h2}">Scrollable content</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
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
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="\${t.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      \`)}

      <hr style="\${doc.divider} margin-top: \${space.subsection};" />

      <!-- Narrow viewport -->
      <h2 style="\${t.h2}">Narrow viewport</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Below 768px, the rail disappears and <code style="\${t.monoSm}">mms-header</code> renders.
        The switch happens at the real browser viewport width
        (<code style="\${t.monoSm}">matchMedia</code>), not a container query.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0 0 \${space.content};">
        <code style="\${t.monoSm}">mms-header</code>'s flat nav model has no equivalent of a
        category's disclosure group, so the slotted content is mapped rather than reused as-is:
      </p>
      <ul style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};">
          <strong>Nav items:</strong> each <code style="\${t.monoSm}">page</code>/<code style="\${t.monoSm}">category</code>
          item becomes an <code style="\${t.monoSm}">mms-link</code> nav entry
        </li>
        <li style="margin-bottom: \${space.label};">
          <strong>Categories:</strong> use their first navigable child's href, since a category
          itself has none — everything else nested under it isn't carried over
        </li>
        <li style="margin-bottom: \${space.label};">
          <strong>Dividers/section headers:</strong> dropped — no flat-nav equivalent
        </li>
        <li style="margin-bottom: \${space.label};">
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
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        By default, <code style="\${t.monoSm}">mms-link</code> renders lighter-weight and blue, like
        a plain hyperlink — not like <code style="\${t.monoSm}">mms-header</code>'s own nav links.
        That's because <code style="\${t.monoSm}">mms-header</code> only applies its nav color
        treatment and its <code style="\${t.monoSm}">type-scale="ui-label"</code> weight correction
        to its own <code style="\${t.monoSm}">nav</code> slot, not to <code style="\${t.monoSm}">account</code>
        or <code style="\${t.monoSm}">actions</code>. So both are set explicitly on every mapped
        link here, making them match the rest of the header instead of standing out.
      </p>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm} margin: 0;">
          Resizing this preview won't trigger it — <code style="\${t.monoSm}">mms-side-nav</code>
          listens for a real window resize, not a container size change. To see it, go to the
          Playground story and set "Viewport" to "Below breakpoint."
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Placement -->
      <h2 style="\${t.h2}">Placement under a fixed header</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        If your page has a fixed header above the side nav, the nav would otherwise stick to the
        very top of the viewport and overlap it. Set <code style="\${t.monoSm}">--mms-side-nav-top-offset</code>
        to the header's height (in px) to fix this: it pushes the nav's sticky position down below
        the header, and shrinks the nav's own height by that same amount so it doesn't run past
        the bottom of the screen.
      </p>
      <pre style="\${doc.pre} margin-bottom: \${space.content};"><code>mms-side-nav { --mms-side-nav-top-offset: 64px; }</code></pre>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        If that same external header also shows the brand logo, the rail would otherwise show it
        a second time right below. Set <code style="\${t.monoSm}">hide-logo</code> on
        <code style="\${t.monoSm}">mms-side-nav</code> to suppress its own expanded-state logo (the
        small collapsed-rail mark is unaffected — many products keep that one regardless). Omit
        <code style="\${t.monoSm}">site-name</code> entirely if the external header already shows
        the product/site name; there's no separate prop needed for that, since it only renders
        when you pass it.
      </p>
      <pre style="\${doc.pre} margin-bottom: \${space.content};"><code>mms-side-nav { --mms-side-nav-top-offset: 64px; }
mms-side-nav[hide-logo] { /* no site-name attribute set */ }</code></pre>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        If that external header is meant to stay on screen at every width, also set
        <code style="\${t.monoSm}">external-header</code>. Below 768px,
        <code style="\${t.monoSm}">mms-side-nav</code> normally replaces the rail with its own
        separate nested <code style="\${t.monoSm}">mms-header</code> (see "Narrow viewport" above)
        — with <code style="\${t.monoSm}">external-header</code> set, it renders nothing there
        instead, so you don't end up with two header instances on screen at once.
      </p>
      <pre style="\${doc.pre} margin-bottom: \${space.content};"><code>&lt;mms-side-nav hide-logo external-header style="--mms-side-nav-top-offset: 64px;"&gt;
  ...
&lt;/mms-side-nav&gt;</code></pre>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
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
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['side-nav'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Landmark:</strong> The host exposes <code style="\${t.monoSm}">role="navigation"</code> with <code style="\${t.monoSm}">aria-label="Side navigation"</code></li>
        <li style="margin-bottom: \${space.label};"><strong>Trigger:</strong> Announces "Expand navigation"/"Collapse navigation" (or "Open"/"Close navigation" at narrow viewport) and its <code style="\${t.monoSm}">aria-expanded</code> state</li>
        <li style="margin-bottom: \${space.label};"><strong>Current page:</strong> An active page item announces as current via <code style="\${t.monoSm}">aria-current="page"</code></li>
        <li style="margin-bottom: \${space.label};"><strong>Category disclosure:</strong> Announces <code style="\${t.monoSm}">aria-expanded</code> and is programmatically associated with its revealed group via <code style="\${t.monoSm}">aria-controls</code></li>
        <li><strong>State change:</strong> Expand/collapse of the rail is announced via a visually-hidden live region (<code style="\${t.monoSm}">role="status"</code>, <code style="\${t.monoSm}">aria-live="polite"</code>)</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th} width: 140px;">Key</th>
            <th style="\${doc.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Tab</kbd> / <kbd style="\${doc.kbd}">Shift+Tab</kbd></td>
            <td style="\${doc.td}">Move focus through the trigger, items, and any utility/account content, in document order</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd> / <kbd style="\${doc.kbd}">Space</kbd></td>
            <td style="\${doc.td}">Activate the focused trigger, page item, or category disclosure</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Escape</kbd></td>
            <td style="\${doc.td}">Closes the narrow-viewport drawer, if open</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Overview`,`PlaygroundStory`]}));$();export{Y as Overview,Z as PlaygroundStory,Q as __namedExportsOrder,J as default,$ as n,W as t};