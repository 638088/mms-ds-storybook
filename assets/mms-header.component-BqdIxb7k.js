import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-CBo78ikN.js";import{d as o,i as s,l as c,n as l,r as u,s as d,t as f}from"./decorate-Bygya6Tu.js";import{r as p,t as m}from"./focus.css-BrGuLyxh.js";import{i as h,n as g,t as _}from"./mms-icon.component-BJPQucU2.js";import{t as v}from"./mms-drawer.component-DT7Np_rv.js";import{n as y,r as b,t as x}from"./logo-registry-BWTiYVIK.js";import{t as S}from"./mms-skip-link.component-D4lhT_5L.js";var C,w,T,E=e((()=>{a(),u(),g(),p(),b(),_(),v(),S(),l(),C=24,w=32,T=class extends r{constructor(...e){super(...e),this.container=`content`,this.siteName=``,this.showSiteDivider=!1,this.accentLine=`brand`,this.accentLineColor=`primary`,this.fixed=!1,this.shrinkOnScroll=!0,this.scrollThreshold=50,this.showHamburger=!0,this.homeHref=``,this.homeLabel=`Home`,this.homeCurrent=!1,this.menuOpen=!1,this.skipLinkTarget=`main-content`,this.skipLinkText=`Skip to main content`,this._scrolled=!1,this._navCollapsed=!1,this._hasAccount=!1,this._siteNameStacked=!1,this._theme=``,this._actionsCollapsed=!1,this._hasNavItems=!1,this._hasActionItems=!1,this._collapseCheckScheduled=!1,this._cachedNavWidth=0,this._cachedActionsWidth=0,this._cachedAccountWidth=0,this._cachedExpandedRightWidth=0,this._cachedLeftInlineWidth=0,this._boundScroll=this._handleScroll.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener(`scroll`,this._boundScroll,{passive:!0}),this._resolveTheme();let e=this.closest(`[data-theme]`);e&&typeof MutationObserver<`u`&&(this._themeObserver=new MutationObserver(()=>this._resolveTheme()),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`data-theme`]}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`scroll`,this._boundScroll),this._themeObserver?.disconnect(),this._themeObserver=void 0,this._resizeObserver?.disconnect()}firstUpdated(){typeof ResizeObserver<`u`&&this._innerEl&&(this._resizeObserver=new ResizeObserver(()=>this._debouncedCollapseCheck()),this._resizeObserver.observe(this._innerEl)),this._syncSlotPresence(),this._checkAutoCollapse(),this._scheduleCollapseCheck()}updated(e){super.updated(e),e.has(`_siteNameStacked`)&&this.toggleAttribute(`site-name-stacked`,this._siteNameStacked),(e.has(`_navCollapsed`)||e.has(`_actionsCollapsed`))&&this._syncSlotPresence(),(e.has(`_hasNavItems`)||e.has(`_hasActionItems`))&&this._scheduleCollapseCheck()}_handleNavSlotChange(){this._syncSlotPresence()}_syncSlotPresence(){let e=[...this.querySelectorAll(`:scope > [slot="nav"]`)];this._hasNavItems=e.length>0,this._hasActionItems=this.querySelector(`:scope > [slot="actions"]`)!==null,this._hasAccount=this.querySelector(`:scope > [slot="account"]`)!==null,this._applyNavTypeScale(e)}_applyNavTypeScale(e){for(let t of e)t.localName===`mms-link`&&t.getAttribute(`type-scale`)!==`ui-label`&&t.setAttribute(`type-scale`,`ui-label`)}_handleActionsSlotChange(){this._syncSlotPresence()}_handleAccountSlotChange(){this._syncSlotPresence(),this._scheduleCollapseCheck()}_handleScroll(){if(!this.shrinkOnScroll||!this.fixed)return;let e=window.scrollY>this.scrollThreshold;e!==this._scrolled&&(this._scrolled=e,this.toggleAttribute(`scrolled`,e))}get navCollapsed(){return this._navCollapsed}set navCollapsed(e){this._navCollapsed!==e&&(this._navCollapsed=e,this.toggleAttribute(`nav-collapsed`,e),this.toggleAttribute(`actions-collapsed`,this._actionsInDrawer),this._scheduleCollapseCheck())}get actionsCollapsed(){return this._actionsCollapsed}set actionsCollapsed(e){this._actionsCollapsed!==e&&(this._actionsCollapsed=e,this.toggleAttribute(`actions-collapsed`,this._actionsInDrawer))}get _actionsInDrawer(){return this._navCollapsed||this._actionsCollapsed}_scheduleCollapseCheck(){this._collapseCheckScheduled||(this._collapseCheckScheduled=!0,requestAnimationFrame(()=>{requestAnimationFrame(()=>{this._collapseCheckScheduled=!1,this._checkAutoCollapse()})}))}_debouncedCollapseCheck(){this._resizeDebounce!==void 0&&clearTimeout(this._resizeDebounce),this._resizeDebounce=window.setTimeout(()=>this._scheduleCollapseCheck(),50)}_checkAutoCollapse(){if(!this._innerEl||!this._leftEl||!this._headerRightEl)return;let e=getComputedStyle(this._innerEl),t=this._innerEl.clientWidth-(parseFloat(e.paddingLeft)||0)-(parseFloat(e.paddingRight)||0);if(t<=0)return;let n=this._leftEl.offsetWidth,r=this._headerRightEl.offsetWidth;!this._navCollapsed&&!this._actionsCollapsed&&(this._cachedExpandedRightWidth=r);let i=n+w+r>t||this._innerEl.scrollWidth>this._innerEl.clientWidth;if(this._siteNameStacked||(this._cachedLeftInlineWidth=n),i){if(!this._navCollapsed){this.navCollapsed=!0,this.actionsCollapsed=!0;return}!this._siteNameStacked&&this.siteName&&(this._siteNameStacked=!0);return}if(this._siteNameStacked){this._cachedLeftInlineWidth+w+r+C<=t&&(this._siteNameStacked=!1);return}this._navCollapsed&&this._cachedLeftInlineWidth+w+this._cachedExpandedRightWidth+C<=t&&(this.navCollapsed=!1,this.actionsCollapsed=!1)}_handleHamburgerClick(){this.menuOpen=!this.menuOpen,this.dispatchEvent(new CustomEvent(`menu-toggle`,{detail:{open:this.menuOpen},bubbles:!0,composed:!0}))}get _isOverlayActive(){return this._navCollapsed||this._actionsCollapsed}renderBrandLogo(e){let t=this._brandFromTheme,n=t?y(t,e)??(e===`compact`?y(t,`full`):void 0):void 0;return n?i`<svg
      class="brand-logo brand-logo--${e}"
      viewBox=${n.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label=${t}
    >
      ${h(n.inner)}
    </svg>`:i`<div
        class="brand-logo brand-logo--${e} brand-logo--placeholder"
        role="img"
        aria-label=${t?`${t} logo placeholder`:`Logo placeholder`}
      >
        ${e===`compact`?`◻`:`logo`}
      </div>`}get _brandFromTheme(){return this._theme.replace(/-dark$/,``)}_resolveTheme(){let e=this.closest(`[data-theme]`)?.getAttribute(`data-theme`)??``;e!==this._theme&&(this._theme=e);let t=this._brandFromTheme;this.style.setProperty(`--_brand-logo-base`,`${x(t,`full`)}px`),this.style.setProperty(`--_brand-logo-base-compact`,`${x(t,`compact`)}px`)}_renderBrandLockup(){let e=i`
      <div class="logo-container">
        <div class="logo-slot logo-slot--compact">
          <slot name="logo-compact">${this.renderBrandLogo(`compact`)}</slot>
        </div>
        <div class="logo-slot logo-slot--full">
          <slot name="logo">${this.renderBrandLogo(`full`)}</slot>
        </div>
      </div>
      ${this.siteName?i`
            ${this.showSiteDivider?i`<span class="site-divider" role="separator"></span>`:t}
            <span class="site-name">${this.siteName}</span>
          `:t}
    `;return this.homeHref?i`<a
      class="home-link"
      href=${this.homeHref}
      aria-label=${this.siteName?`${this.siteName}, ${this.homeLabel}`:this.homeLabel}
      aria-current=${this.homeCurrent?`page`:t}
      >${e}</a
    >`:e}render(){return i`
      <header role="banner">
        <mms-skip-link local target=${this.skipLinkTarget} label=${this.skipLinkText}></mms-skip-link>
        <div class="header-inner">
          <div class="header-left">${this._renderBrandLockup()}</div>

          <div class="spacer"></div>

          <div class="header-right">
            <div class="inline-cluster">
              ${this._navCollapsed?t:this._renderNavSlot()}
              ${this._hasNavItems&&(this._hasActionItems||this._hasAccount)&&!this._navCollapsed&&!this._actionsInDrawer?i`<span class="nav-actions-divider" role="separator"></span>`:t}
              ${this._actionsInDrawer?t:this._renderActionsSlot()}
              ${this._actionsInDrawer?t:this._renderAccountSlot()}
            </div>
            ${this.showHamburger||this._isOverlayActive?i`
                  <button
                    class="hamburger-toggle"
                    aria-label=${this.menuOpen?`Close menu`:`Open menu`}
                    aria-expanded=${this.menuOpen}
                    @click=${this._handleHamburgerClick}
                  >
                    <mms-icon name=${this.menuOpen?`x`:`list`} size="md"></mms-icon>
                  </button>
                `:t}
          </div>
        </div>
      </header>
      ${this.accentLine===`none`?t:i`<div class="accent-stroke"></div>`}
      ${this._isOverlayActive?i`
            <mms-drawer
              size="sm"
              ?open=${this.menuOpen}
              title-text="Menu"
              .description=${!1}
              primary-label=""
              secondary-label=""
              @close=${this._handleDrawerClose}
            >
              <div class="menu-body">
                ${this._navCollapsed?this._renderNavSlot():t}
                ${this._navCollapsed&&this._actionsInDrawer&&(this._hasActionItems||this._hasAccount)?i`<hr class="menu-divider" />`:t}
                ${this._actionsInDrawer?this._renderActionsSlot():t}
                ${this._actionsInDrawer?this._renderAccountSlot():t}
              </div>
            </mms-drawer>
          `:t}
    `}_renderNavSlot(){return i`<div class="nav-slot-wrap">
      <slot name="nav" @slotchange=${this._handleNavSlotChange}></slot>
    </div>`}_renderActionsSlot(){return i`<div class="actions-slot-wrap">
      <slot name="actions" @slotchange=${this._handleActionsSlotChange}></slot>
    </div>`}_renderAccountSlot(){return i`<div class="account-slot-wrap">
      <slot name="account" @slotchange=${this._handleAccountSlotChange}></slot>
    </div>`}_handleDrawerClose(){this.menuOpen&&(this.menuOpen=!1,this.dispatchEvent(new CustomEvent(`menu-toggle`,{detail:{open:!1},bubbles:!0,composed:!0})))}static{this.styles=[m,n`
      :host {
        display: block;
        font-family: var(--font-family-body);
        /* Consumer-adjustable baseline: defaults to the brand's own pixel-tuned
           height (logo-meta.json), not a formula derived from a global scale.
           Full and compact are tracked separately — a brand may read smaller
           below the layout padding step, not just swap artwork there. */
        --_logo-h: var(--mms-header-logo-height, var(--_brand-logo-base, 16px));
        --_logo-h-compact: var(--mms-header-logo-height, var(--_brand-logo-base-compact, 16px));
        /* Padding around the logo is brand-tunable too (a theme sets
           --mms-header-logo-padding/-scrolled), not just the height — both are
           part of the same pixel-perfect pass, not independent decisions.
           Compact padding defaults to the same value as full — only a brand
           that explicitly sets it gets a different mobile padding. */
        --_logo-pad: var(--mms-header-logo-padding, var(--spacing-md1));
        --_logo-pad-scrolled: var(--mms-header-logo-padding-scrolled, var(--spacing-sm2));
        --_logo-pad-compact: var(--mms-header-logo-padding-compact, var(--_logo-pad));
        --_logo-pad-compact-scrolled: var(--mms-header-logo-padding-compact-scrolled, var(--_logo-pad-scrolled));
        --_header-height: max(56px, calc(var(--_logo-h) + 2 * var(--_logo-pad)));
        --_header-height-scrolled: max(48px, calc(var(--_logo-h) + 2 * var(--_logo-pad-scrolled)));
      }

      @media (max-width: 767px) {
        :host {
          --_header-height: max(48px, calc(var(--_logo-h-compact) + 2 * var(--_logo-pad-compact)));
          --_header-height-scrolled: max(44px, calc(var(--_logo-h-compact) + 2 * var(--_logo-pad-compact-scrolled)));
        }
      }

      /* position: relative anchors mms-skip-link's "local" mode (top: 100%)
         to this element's own box, not the viewport — see that component's
         "local" prop doc. Safe for mms-drawer's fixed overlay, which renders
         as a later sibling of header, not a descendant. */
      header {
        display: flex;
        flex-direction: column;
        position: relative;
        background: var(--color-surface-solid);
        border-bottom: var(--border-width-xs) solid var(--color-border-subtle);
        /* Size container for the rules below — same single 768px step, measured
           against the header's own width so it stays correct when embedded in a
           narrow region. Declared here rather than on :host so it does not
           become a containing block for mms-drawer's fixed overlay, which
           renders as a sibling of this element. */
        container-type: inline-size;
        container-name: mms-header;
      }

      :host([fixed]) header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
      }

      .header-inner {
        display: flex;
        align-items: center;
        min-block-size: var(--_header-height);
        max-width: var(--mms-header-content-max-width, var(--layout-content-max-width));
        width: 100%;
        margin-inline: auto;
        padding-inline: var(--mms-header-inline-padding, var(--layout-inline-padding-compact));
        /* Collapse is measured after layout, so a resize always has a frame
           where the not-yet-collapsed cluster is wider than the bar. Clipping
           keeps that frame from painting outside the header. */
        overflow: hidden;
        transition: height var(--motion-duration-moderate) var(--motion-easing-standard);
        box-sizing: border-box;
      }

      /* Sets the same custom property the consumer would, so the two never
         compete — an inline --mms-header-content-max-width still wins. */
      :host([container='full']) {
        --mms-header-content-max-width: none;
      }

      /* The padding step is the layout system's only breakpoint. The override
         var is re-declared on both sides of it, so leaving it unset preserves
         the step; setting it once deliberately flattens it, and a consumer who
         wants their own step sets the same var inside their own media query. */
      @container mms-header (min-width: 768px) {
        .header-inner {
          padding-inline: var(--mms-header-inline-padding, var(--layout-inline-padding-default));
        }
      }

      :host([scrolled]) .header-inner {
        height: var(--_header-height-scrolled);
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm2);
        /* Must not compress: if the logo/site-name cluster shrinks it frees room
           for nav and actions, so they never trip the collapse threshold and the
           site name truncates instead. Holding its width forces the overflow
           into the right cluster, which is what collapse measures. */
        flex-shrink: 0;
        min-width: 0;
      }

      /* Terminal degradation step: the name sits under the logo as one lockup,
         bound at 4px, with the bar's own 16px inset carried below it. The bar
         grows because .header-inner is min-block-size, not a fixed height. */
      :host([site-name-stacked]) .header-left {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-xs2);
        /* Nothing left to collapse below this, so the name wraps rather than
           pushing past the bar. */
        flex-shrink: 1;
      }

      :host([site-name-stacked]) .site-name {
        white-space: normal;
        overflow-wrap: anywhere;
      }

      :host([site-name-stacked]) .header-inner {
        padding-block: var(--spacing-md1);
      }

      :host([site-name-stacked]) .site-divider {
        display: none;
      }

      .logo-container {
        display: flex;
        align-items: center;
      }

      /* Carries the cluster's own gap: when the lockup links home its children
         move inside this element, so .header-left's gap no longer reaches them.
         Inherits colour and drops underline so linked and unlinked look identical. */
      .home-link {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm2);
        min-width: 0;
        color: inherit;
        text-decoration: none;
        border-radius: var(--radius-xs);
      }

      :host([site-name-stacked]) .home-link {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-xs2);
      }

      /* Toggled on these shadow-DOM wrappers rather than the slotted nodes: an
         inline style on a consumer's logo outranks ::slotted() and would leave
         both lockups visible at once. */
      .logo-slot {
        display: flex;
        align-items: center;
        min-width: 0;
      }

      .logo-slot--full {
        display: none;
      }

      /* Built-in brand logos are currentColor, so they follow the brand sheet's
         primary anchor rather than a baked-in hex. Height rides the icon-size
         scale so a lockup sits at the same optical weight as adjacent labels.
         --mms-header-logo-color overrides the anchor for a brand whose official
         guide prescribes a specific dark-mode treatment instead of a tint of
         its own primary token (DOW: white, not --color-primary-9's dark value). */
      .brand-logo {
        color: var(--mms-header-logo-color, var(--color-primary-9));
        width: auto;
        display: block;
        height: var(--_logo-h);
      }

      .brand-logo--compact {
        height: var(--_logo-h-compact);
      }

      /* Shown when the active theme has no registered mark. Deliberately visible
         rather than empty: a missing logo is a setup gap the consumer needs to
         see, not something to fail silently. Label scales off the logo height so
         it stays legible from sm (16px) to xl (32px). */
      .brand-logo--placeholder {
        aspect-ratio: 3.5 / 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: var(--border-width-xs) dashed var(--color-border-default);
        border-radius: var(--radius-xs);
        color: var(--color-text-subtle);
        font-size: calc(var(--mms-header-logo-height, var(--icon-size-sm)) * 0.6);
        line-height: 1;
        letter-spacing: var(--type-ui-label-sm-letter-spacing);
      }

      .brand-logo--placeholder.brand-logo--compact {
        aspect-ratio: 1 / 1;
      }

      @container mms-header (min-width: 768px) {
        .logo-slot--compact {
          display: none;
        }
        .logo-slot--full {
          display: flex;
        }
      }

      .site-divider {
        width: var(--border-width-xs);
        height: 24px;
        background-color: var(--color-border-default);
      }

      .site-name {
        font-family: var(--type-heading-5-family);
        font-size: var(--type-heading-5-size);
        line-height: var(--type-heading-5-line-height);
        font-weight: var(--font-weight-medium);
        color: var(--color-text-default);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .spacer {
        flex: 1 1 auto;
        /* Guaranteed gap between the two clusters. Mirrored by MIN_SPACER_PX,
           which the restore calculation subtracts so this reserved space is
           never mistaken for room that content could move back into. */
        min-width: var(--spacing-lg2);
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: var(--layout-gap-default);
        position: relative;
        /* Pinned like .header-left: if this cluster may shrink, the browser
           compresses it instead of overflowing, and the overflow the collapse
           logic detects never physically happens. */
        flex-shrink: 0;
      }

      /* Zero, deliberately: nav and actions are one row of items, and their
         rhythm is set at the text edge by each wrap's own gap and the button
         inset. A gap here would stack on top of both. The divider supplies the
         only group break. */
      .inline-cluster {
        display: flex;
        align-items: center;
        gap: 0;
      }

      .nav-slot-wrap {
        display: flex;
        align-items: center;
        gap: var(--layout-gap-default);
      }

      /* Tighter than nav: action controls are icon-bearing buttons whose own
         padding already supplies most of the visual separation, so the default
         gap stacks on top of it and reads as uneven against text items. */
      .actions-slot-wrap,
      .account-slot-wrap {
        display: flex;
        align-items: center;
        gap: 0;
      }

      :host([actions-collapsed]) .account-slot-wrap {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
      }

      /* Buttons carry their own inset, so the rhythm is set at the text edge,
         not the box edge: half the nav gap per side, zero flex gap, which lands
         label-to-label on the same 16px as the nav items. */
      :host(:not([actions-collapsed])) .actions-slot-wrap ::slotted(mms-button),
      :host(:not([actions-collapsed])) .account-slot-wrap ::slotted(mms-button) {
        padding-inline: var(--spacing-sm1);
      }

      /* A ghost button sizes to its own text box — 23px at size="md", under the
         24px WCAG 2.5.8 floor. In the drawer the row padding already clears it;
         in the bar nothing does, so the header supplies the target itself.
         The host is display:block, so height alone would leave its inline-flex
         inner pinned to the top — the box must centre what it grew around.
         Element-agnostic for the account slot: a consumer may compose their own
         control there, and 2.5.8 does not care which element they reached for. */
      :host(:not([actions-collapsed])) .actions-slot-wrap ::slotted(mms-button),
      :host(:not([actions-collapsed])) .account-slot-wrap ::slotted(*) {
        display: inline-flex;
        align-items: center;
        min-block-size: var(--size-xl-touch);
      }

      /* Separates the drawer's two groups: primary nav and actions. Rendered
         only when both exist, so a nav-only header never shows a rule against
         empty space. */
      /* One child, so mms-drawer's own body gap applies once at the edge rather
         than between every group — otherwise it stacks on the row rhythm and
         each wrapper boundary reads 16px wider than the rows around it. */
      .menu-body {
        display: flex;
        flex-direction: column;
        gap: 0;
      }

      .menu-divider {
        border: none;
        border-top: var(--border-width-xs) solid var(--color-border-subtle);
        margin-block: var(--spacing-sm1);
        width: 100%;
      }

      /* Header-scoped nav-item treatment. mms-link's default standard color
         variant reads its color from these two custom properties internally, so
         overriding them here (rather than on mms-link itself) repaints only nav
         items placed inside this header — everywhere else mms-link still renders
         its normal hyperlink-blue default. This is what gives slotted nav content
         real header-appropriate color without a bespoke nav-item primitive. */
      .nav-slot-wrap ::slotted(mms-link[slot='nav']) {
        --color-link-default: var(--color-onyx-11, var(--color-text-default));
        --color-link-hover: var(--color-onyx-12, var(--color-text-subtle));
      }

      /* Asymmetric by the button inset so it reads symmetric: nav labels sit
         flush to their box, action labels 8px inside theirs. The break is 2x the
         16px item rhythm — at 1.5x it read as one more loose gap rather than a
         group boundary. */
      .nav-actions-divider {
        width: var(--border-width-xs);
        height: 20px;
        background-color: var(--color-border-default);
        margin-inline: var(--layout-gap-comfortable) calc(var(--layout-gap-comfortable) - var(--spacing-sm1));
      }

      /* Collapsed state: the slot moves inside mms-drawer, which owns the
         overlay, focus trap and animation. Only the row treatment lives here. */
      :host([nav-collapsed]) .nav-slot-wrap,
      :host([actions-collapsed]) .actions-slot-wrap {
        flex-direction: column;
        align-items: stretch;
        /* Rows carry their own vertical padding; keeping the horizontal toolbar
           gap here would stack on top of it and read as a loose list. */
        gap: 0;
      }

      /* Stacked rows, not a distinct row primitive: these are the same slotted
         mms-link/mms-button nodes as the bar, so the only thing added is the
         full-bleed hit area. Vertical padding only — the drawer already insets
         its body, so horizontal padding would indent rows off the title.
         Height is set here rather than left to each component: mms-link's
         ui-label compensation makes its box 4px taller than mms-button's, and
         equal gaps around unequal boxes read as uneven pitch down the list. */
      :host([nav-collapsed]) .nav-slot-wrap ::slotted(mms-link),
      :host([actions-collapsed]) .actions-slot-wrap ::slotted(mms-link),
      :host([actions-collapsed]) .account-slot-wrap ::slotted(*),
      :host([nav-collapsed]) .nav-slot-wrap ::slotted(mms-button),
      :host([actions-collapsed]) .actions-slot-wrap ::slotted(mms-button) {
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        min-block-size: var(--size-xl-touch);
        padding-block: var(--spacing-sm1);
      }

      :host([nav-collapsed]:not([actions-collapsed])) .actions-slot-wrap,
      :host([actions-collapsed]:not([nav-collapsed])) .nav-slot-wrap {
        flex-direction: row;
      }

      :host([nav-collapsed]) .nav-actions-divider,
      :host([actions-collapsed]) .nav-actions-divider {
        display: none;
      }

      /* Only shown once nav or actions have actually collapsed into the panel.
         Rendering it alongside visible nav gives the user a second control that
         opens a duplicate of what's already on screen — and the panel's drawer
         styling is keyed on the same collapsed state, so it would open unstyled. */
      .hamburger-toggle {
        display: none;
        align-items: center;
        justify-content: center;
        --_hamburger-target: 48px;
        width: var(--_hamburger-target);
        height: var(--_hamburger-target);
        /* Optical alignment: the target centres a smaller glyph, so box-aligning
           it leaves the glyph inset further than the logo opposite. Pulling out
           by that difference lands the glyph on the container inset while the
           48px target (WCAG 2.5.8) is preserved. */
        margin-inline-end: calc((var(--_hamburger-target) - var(--icon-size-md)) / -2);
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        color: var(--color-text-default);
        position: relative;
        z-index: 101;
      }

      :host([nav-collapsed]) .hamburger-toggle,
      :host([actions-collapsed]) .hamburger-toggle {
        display: inline-flex;
      }

      .accent-stroke {
        width: 100%;
        height: 3px;
      }

      /* Colour is chosen by accent-line-color; accent-line only decides which
         source it comes from — a scheme colour, the light neutral, or nothing. */
      :host([accent-line='brand']) .accent-stroke {
        background-color: var(--color-primary-9);
      }

      :host([accent-line='brand'][accent-line-color='secondary']) .accent-stroke {
        background-color: var(--color-secondary-9);
      }

      :host([accent-line='brand'][accent-line-color='accent']) .accent-stroke {
        background-color: var(--color-accent-9);
      }

      :host([accent-line='brand'][accent-line-color='onyx']) .accent-stroke {
        background-color: var(--color-onyx-9);
      }

      :host([accent-line='light']) .accent-stroke {
        background-color: var(--color-neutral-1);
      }

      /* none means no bottom edge at all — the border is the only separator once
         the accent line is gone, so leaving it would make none read as light. */
      :host([accent-line='none']) header {
        border-bottom: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .header-inner {
          transition-duration: 0.01ms !important;
        }
      }
    `]}},f([c({type:String,reflect:!0})],T.prototype,`container`,void 0),f([c({type:String,attribute:`site-name`})],T.prototype,`siteName`,void 0),f([c({type:Boolean,attribute:`show-site-divider`})],T.prototype,`showSiteDivider`,void 0),f([c({type:String,reflect:!0,attribute:`accent-line`})],T.prototype,`accentLine`,void 0),f([c({type:String,reflect:!0,attribute:`accent-line-color`})],T.prototype,`accentLineColor`,void 0),f([c({type:Boolean,reflect:!0})],T.prototype,`fixed`,void 0),f([c({type:Boolean,attribute:`shrink-on-scroll`})],T.prototype,`shrinkOnScroll`,void 0),f([c({type:Number,attribute:`scroll-threshold`})],T.prototype,`scrollThreshold`,void 0),f([c({type:Boolean,reflect:!0,attribute:`show-hamburger`})],T.prototype,`showHamburger`,void 0),f([c({type:String,attribute:`home-href`})],T.prototype,`homeHref`,void 0),f([c({type:String,attribute:`home-label`})],T.prototype,`homeLabel`,void 0),f([c({type:Boolean,reflect:!0,attribute:`home-current`})],T.prototype,`homeCurrent`,void 0),f([c({type:Boolean,reflect:!0,attribute:`menu-open`})],T.prototype,`menuOpen`,void 0),f([c({type:String,attribute:`skip-link-target`})],T.prototype,`skipLinkTarget`,void 0),f([c({type:String,attribute:`skip-link-text`})],T.prototype,`skipLinkText`,void 0),f([d()],T.prototype,`_scrolled`,void 0),f([d()],T.prototype,`_navCollapsed`,void 0),f([d()],T.prototype,`_hasAccount`,void 0),f([d()],T.prototype,`_siteNameStacked`,void 0),f([d()],T.prototype,`_theme`,void 0),f([d()],T.prototype,`_actionsCollapsed`,void 0),f([d()],T.prototype,`_hasNavItems`,void 0),f([d()],T.prototype,`_hasActionItems`,void 0),f([s(`.header-right`)],T.prototype,`_headerRightEl`,void 0),f([s(`.header-inner`)],T.prototype,`_innerEl`,void 0),f([s(`.header-left`)],T.prototype,`_leftEl`,void 0),f([s(`.spacer`)],T.prototype,`_spacerEl`,void 0),f([s(`.nav-slot-wrap`)],T.prototype,`_navWrapEl`,void 0),f([s(`.actions-slot-wrap`)],T.prototype,`_actionsWrapEl`,void 0),f([s(`.account-slot-wrap`)],T.prototype,`_accountWrapEl`,void 0),T=f([o(`mms-header`)],T)}));export{E as t};