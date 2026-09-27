import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,i as c,l,n as u,r as d,s as f,t as p}from"./decorate-Bygya6Tu.js";import{r as m,t as h}from"./focus.css-BrGuLyxh.js";import{i as g,n as _,t as v}from"./mms-icon.component-BJPQucU2.js";import{n as y,t as b}from"./iframe-rHvC0bYI.js";import{a as x,o as S,r as ee,t as C}from"./a11y-outcome-BDXRHsfs.js";import{t as w}from"./mms-card.component-8yI6y1xe.js";import{t as te}from"./mms-drawer.component-ChrZ2eDD.js";import{n as T,r as E,t as D}from"./logo-registry-C4YC8ddW.js";var O,k,A,j=e((()=>{o(),d(),_(),m(),E(),v(),te(),u(),O=24,k=32,A=class extends i{constructor(...e){super(...e),this.logoSize=`sm`,this.container=`content`,this.siteName=``,this.showSiteDivider=!1,this.accentLine=`brand`,this.accentLineColor=`primary`,this.fixed=!1,this.shrinkOnScroll=!0,this.scrollThreshold=50,this.showHamburger=!0,this.homeHref=``,this.homeLabel=`Home`,this.homeCurrent=!1,this.menuOpen=!1,this.skipLinkTarget=`main-content`,this.skipLinkText=`Skip to main content`,this._scrolled=!1,this._navCollapsed=!1,this._hasAccount=!1,this._siteNameStacked=!1,this._theme=``,this._actionsCollapsed=!1,this._hasNavItems=!1,this._hasActionItems=!1,this._collapseCheckScheduled=!1,this._cachedNavWidth=0,this._cachedActionsWidth=0,this._cachedAccountWidth=0,this._cachedExpandedRightWidth=0,this._cachedLeftInlineWidth=0,this._boundScroll=this._handleScroll.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener(`scroll`,this._boundScroll,{passive:!0}),this._resolveTheme();let e=this.closest(`[data-theme]`);e&&typeof MutationObserver<`u`&&(this._themeObserver=new MutationObserver(()=>this._resolveTheme()),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`data-theme`]}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`scroll`,this._boundScroll),this._themeObserver?.disconnect(),this._themeObserver=void 0,this._resizeObserver?.disconnect()}firstUpdated(){typeof ResizeObserver<`u`&&this._innerEl&&(this._resizeObserver=new ResizeObserver(()=>this._debouncedCollapseCheck()),this._resizeObserver.observe(this._innerEl)),this._syncSlotPresence(),this._checkAutoCollapse(),this._scheduleCollapseCheck()}updated(e){super.updated(e),e.has(`_siteNameStacked`)&&this.toggleAttribute(`site-name-stacked`,this._siteNameStacked),(e.has(`_navCollapsed`)||e.has(`_actionsCollapsed`))&&this._syncSlotPresence(),(e.has(`_hasNavItems`)||e.has(`_hasActionItems`))&&this._scheduleCollapseCheck()}_handleNavSlotChange(){this._syncSlotPresence()}_syncSlotPresence(){let e=[...this.querySelectorAll(`:scope > [slot="nav"]`)];this._hasNavItems=e.length>0,this._hasActionItems=this.querySelector(`:scope > [slot="actions"]`)!==null,this._hasAccount=this.querySelector(`:scope > [slot="account"]`)!==null,this._applyNavTypeScale(e)}_applyNavTypeScale(e){for(let t of e)t.localName===`mms-link`&&t.getAttribute(`type-scale`)!==`ui-label`&&t.setAttribute(`type-scale`,`ui-label`)}_handleActionsSlotChange(){this._syncSlotPresence()}_handleAccountSlotChange(){this._syncSlotPresence(),this._scheduleCollapseCheck()}_handleScroll(){if(!this.shrinkOnScroll||!this.fixed)return;let e=window.scrollY>this.scrollThreshold;e!==this._scrolled&&(this._scrolled=e,this.toggleAttribute(`scrolled`,e))}get navCollapsed(){return this._navCollapsed}set navCollapsed(e){this._navCollapsed!==e&&(this._navCollapsed=e,this.toggleAttribute(`nav-collapsed`,e),this.toggleAttribute(`actions-collapsed`,this._actionsInDrawer),this._scheduleCollapseCheck())}get actionsCollapsed(){return this._actionsCollapsed}set actionsCollapsed(e){this._actionsCollapsed!==e&&(this._actionsCollapsed=e,this.toggleAttribute(`actions-collapsed`,this._actionsInDrawer))}get _actionsInDrawer(){return this._navCollapsed||this._actionsCollapsed}_scheduleCollapseCheck(){this._collapseCheckScheduled||(this._collapseCheckScheduled=!0,requestAnimationFrame(()=>{requestAnimationFrame(()=>{this._collapseCheckScheduled=!1,this._checkAutoCollapse()})}))}_debouncedCollapseCheck(){this._resizeDebounce!==void 0&&clearTimeout(this._resizeDebounce),this._resizeDebounce=window.setTimeout(()=>this._scheduleCollapseCheck(),50)}_checkAutoCollapse(){if(!this._innerEl||!this._leftEl||!this._headerRightEl)return;let e=getComputedStyle(this._innerEl),t=this._innerEl.clientWidth-(parseFloat(e.paddingLeft)||0)-(parseFloat(e.paddingRight)||0);if(t<=0)return;let n=this._leftEl.offsetWidth,r=this._headerRightEl.offsetWidth;!this._navCollapsed&&!this._actionsCollapsed&&(this._cachedExpandedRightWidth=r);let i=n+k+r>t||this._innerEl.scrollWidth>this._innerEl.clientWidth;if(this._siteNameStacked||(this._cachedLeftInlineWidth=n),i){if(!this._navCollapsed){this.navCollapsed=!0,this.actionsCollapsed=!0;return}!this._siteNameStacked&&this.siteName&&(this._siteNameStacked=!0);return}if(this._siteNameStacked){this._cachedLeftInlineWidth+k+r+O<=t&&(this._siteNameStacked=!1);return}this._navCollapsed&&this._cachedLeftInlineWidth+k+this._cachedExpandedRightWidth+O<=t&&(this.navCollapsed=!1,this.actionsCollapsed=!1)}_handleHamburgerClick(){this.menuOpen=!this.menuOpen,this.dispatchEvent(new CustomEvent(`menu-toggle`,{detail:{open:this.menuOpen},bubbles:!0,composed:!0}))}get _isOverlayActive(){return this._navCollapsed||this._actionsCollapsed}renderBrandLogo(e){let t=this._brandFromTheme,n=t?T(t,e)??(e===`compact`?T(t,`full`):void 0):void 0;return n?a`<svg
      class="brand-logo brand-logo--${e}"
      viewBox=${n.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label=${t}
    >
      ${g(n.inner)}
    </svg>`:a`<div
        class="brand-logo brand-logo--${e} brand-logo--placeholder"
        role="img"
        aria-label=${t?`${t} logo placeholder`:`Logo placeholder`}
      >
        ${e===`compact`?`◻`:`logo`}
      </div>`}get _brandFromTheme(){return this._theme.replace(/-dark$/,``)}_resolveTheme(){let e=this.closest(`[data-theme]`)?.getAttribute(`data-theme`)??``;e!==this._theme&&(this._theme=e),this.style.setProperty(`--_brand-logo-base`,`${D(this._brandFromTheme)}px`)}_renderBrandLockup(){let e=a`
      <div class="logo-container">
        <div class="logo-slot logo-slot--compact">
          <slot name="logo-compact">${this.renderBrandLogo(`compact`)}</slot>
        </div>
        <div class="logo-slot logo-slot--full">
          <slot name="logo">${this.renderBrandLogo(`full`)}</slot>
        </div>
      </div>
      ${this.siteName?a`
            ${this.showSiteDivider?a`<span class="site-divider" role="separator"></span>`:n}
            <span class="site-name">${this.siteName}</span>
          `:n}
    `;return this.homeHref?a`<a
      class="home-link"
      href=${this.homeHref}
      aria-label=${this.siteName?`${this.siteName}, ${this.homeLabel}`:this.homeLabel}
      aria-current=${this.homeCurrent?`page`:n}
      >${e}</a
    >`:e}render(){return a`
      <a class="skip-link" href="#${this.skipLinkTarget}">${this.skipLinkText}</a>
      <header role="banner">
        <div class="header-inner">
          <div class="header-left">${this._renderBrandLockup()}</div>

          <div class="spacer"></div>

          <div class="header-right">
            <div class="inline-cluster">
              ${this._navCollapsed?n:this._renderNavSlot()}
              ${this._hasNavItems&&(this._hasActionItems||this._hasAccount)&&!this._navCollapsed&&!this._actionsInDrawer?a`<span class="nav-actions-divider" role="separator"></span>`:n}
              ${this._actionsInDrawer?n:this._renderActionsSlot()}
              ${this._actionsInDrawer?n:this._renderAccountSlot()}
            </div>
            ${this.showHamburger||this._isOverlayActive?a`
                  <button
                    class="hamburger-toggle"
                    aria-label=${this.menuOpen?`Close menu`:`Open menu`}
                    aria-expanded=${this.menuOpen}
                    @click=${this._handleHamburgerClick}
                  >
                    <mms-icon name=${this.menuOpen?`x`:`list`} size="md"></mms-icon>
                  </button>
                `:n}
          </div>
        </div>
      </header>
      ${this.accentLine===`none`?n:a`<div class="accent-stroke"></div>`}
      ${this._isOverlayActive?a`
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
                ${this._navCollapsed?this._renderNavSlot():n}
                ${this._navCollapsed&&this._actionsInDrawer&&(this._hasActionItems||this._hasAccount)?a`<hr class="menu-divider" />`:n}
                ${this._actionsInDrawer?this._renderActionsSlot():n}
                ${this._actionsInDrawer?this._renderAccountSlot():n}
              </div>
            </mms-drawer>
          `:n}
    `}_renderNavSlot(){return a`<div class="nav-slot-wrap">
      <slot name="nav" @slotchange=${this._handleNavSlotChange}></slot>
    </div>`}_renderActionsSlot(){return a`<div class="actions-slot-wrap">
      <slot name="actions" @slotchange=${this._handleActionsSlotChange}></slot>
    </div>`}_renderAccountSlot(){return a`<div class="account-slot-wrap">
      <slot name="account" @slotchange=${this._handleAccountSlotChange}></slot>
    </div>`}_handleDrawerClose(){this.menuOpen&&(this.menuOpen=!1,this.dispatchEvent(new CustomEvent(`menu-toggle`,{detail:{open:!1},bubbles:!0,composed:!0})))}static{this.styles=[h,r`
      :host {
        display: block;
        /* Containing block for .skip-link — without it the link's -40px offset
           resolves against the viewport and it renders on top of the page. */
        position: relative;
        font-family: var(--font-family-body);
        /* logoSize is a multiplier on the brand's own base height, not an absolute
           px scale: a single-line wordmark and a stacked lockup do not read the
           same at equal height. A consumer-set --mms-header-logo-height wins. */
        --_logo-step: 1;
        --_logo-h: var(--mms-header-logo-height, calc(var(--_brand-logo-base, 16px) * var(--_logo-step)));
        /* Floor is what lg needs, so sm/md/lg share one bar height and only xl
           grows it — the same shape for every brand, not just ones whose base
           happens to fall under a global minimum. */
        --_logo-floor: calc(var(--_brand-logo-base, 16px) * 1.5);
        --_header-height: max(56px, calc(max(var(--_logo-floor), var(--_logo-h)) + 2 * var(--spacing-md1)));
        --_header-height-scrolled: max(48px, calc(max(var(--_logo-floor), var(--_logo-h)) + 2 * var(--spacing-sm2)));
      }

      :host([logo-size='md']) {
        --_logo-step: 1.25;
      }

      :host([logo-size='lg']) {
        --_logo-step: 1.5;
      }

      :host([logo-size='xl']) {
        --_logo-step: 2;
      }

      @media (max-width: 767px) {
        :host {
          --_header-height: 48px;
          --_header-height-scrolled: 44px;
        }
        :host([logo-size='xl']) {
          --_header-height: 56px;
          --_header-height-scrolled: 52px;
        }
      }

      /* Clipped rather than offset: a negative top offset only leaves the screen
         when the header sits at the very top of the viewport, so an offset link
         shows up as stray text whenever the header is inset (a docs canvas, a
         nested layout). Clipping hides it everywhere while keeping it focusable. */
      .skip-link {
        position: absolute;
        top: var(--spacing-sm1);
        left: var(--spacing-md1);
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
        z-index: 200;
        padding: var(--spacing-sm1) var(--spacing-md1);
        background: var(--color-surface-raised);
        color: var(--color-text-default);
        border-radius: var(--radius-xs);
        text-decoration: none;
      }

      .skip-link:focus {
        width: auto;
        height: auto;
        overflow: visible;
        clip-path: none;
      }

      header {
        display: flex;
        flex-direction: column;
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
         scale so a lockup sits at the same optical weight as adjacent labels. */
      .brand-logo {
        color: var(--color-primary-9);
        width: auto;
        display: block;
        height: var(--_logo-h);
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

      /* Set on :host, not .brand-logo — the bar height derives from --_logo-h,
         so the size has to be readable at host level. */
      :host([logo-size='sm']) {
        --_logo-step: 1;
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
    `]}},p([l({type:String,reflect:!0,attribute:`logo-size`})],A.prototype,`logoSize`,void 0),p([l({type:String,reflect:!0})],A.prototype,`container`,void 0),p([l({type:String,attribute:`site-name`})],A.prototype,`siteName`,void 0),p([l({type:Boolean,attribute:`show-site-divider`})],A.prototype,`showSiteDivider`,void 0),p([l({type:String,reflect:!0,attribute:`accent-line`})],A.prototype,`accentLine`,void 0),p([l({type:String,reflect:!0,attribute:`accent-line-color`})],A.prototype,`accentLineColor`,void 0),p([l({type:Boolean,reflect:!0})],A.prototype,`fixed`,void 0),p([l({type:Boolean,attribute:`shrink-on-scroll`})],A.prototype,`shrinkOnScroll`,void 0),p([l({type:Number,attribute:`scroll-threshold`})],A.prototype,`scrollThreshold`,void 0),p([l({type:Boolean,reflect:!0,attribute:`show-hamburger`})],A.prototype,`showHamburger`,void 0),p([l({type:String,attribute:`home-href`})],A.prototype,`homeHref`,void 0),p([l({type:String,attribute:`home-label`})],A.prototype,`homeLabel`,void 0),p([l({type:Boolean,reflect:!0,attribute:`home-current`})],A.prototype,`homeCurrent`,void 0),p([l({type:Boolean,reflect:!0,attribute:`menu-open`})],A.prototype,`menuOpen`,void 0),p([l({type:String,attribute:`skip-link-target`})],A.prototype,`skipLinkTarget`,void 0),p([l({type:String,attribute:`skip-link-text`})],A.prototype,`skipLinkText`,void 0),p([f()],A.prototype,`_scrolled`,void 0),p([f()],A.prototype,`_navCollapsed`,void 0),p([f()],A.prototype,`_hasAccount`,void 0),p([f()],A.prototype,`_siteNameStacked`,void 0),p([f()],A.prototype,`_theme`,void 0),p([f()],A.prototype,`_actionsCollapsed`,void 0),p([f()],A.prototype,`_hasNavItems`,void 0),p([f()],A.prototype,`_hasActionItems`,void 0),p([c(`.header-right`)],A.prototype,`_headerRightEl`,void 0),p([c(`.header-inner`)],A.prototype,`_innerEl`,void 0),p([c(`.header-left`)],A.prototype,`_leftEl`,void 0),p([c(`.spacer`)],A.prototype,`_spacerEl`,void 0),p([c(`.nav-slot-wrap`)],A.prototype,`_navWrapEl`,void 0),p([c(`.actions-slot-wrap`)],A.prototype,`_actionsWrapEl`,void 0),p([c(`.account-slot-wrap`)],A.prototype,`_accountWrapEl`,void 0),A=p([s(`mms-header`)],A)})),M=t({FullPreview:()=>X,LayoutBehavior:()=>Z,Overview:()=>J,PlaygroundStory:()=>Y,__namedExportsOrder:()=>Q,default:()=>V});function N(e){let t=e??`768`;return t===`fill`?`100%`:`${t}px`}function P(e=!1){return a`
    <span
      slot=${e?`logo-compact`:`logo`}
      style="display: inline-flex; align-items: center; justify-content: center; width: ${e?`32px`:`112px`}; height: 32px; border: 1px dashed rgba(128,128,128,0.5); border-radius: 4px; font-size: 0.6875rem; opacity: 0.6;"
      role="img"
      aria-label="Logo placeholder"
    >
      ${e?`â—»`:`logo`}
    </span>
  `}function F(e){return e.split(`,`).map(e=>e.trim()).filter(e=>e.length>0)}function I(e){return F(e).map(e=>{let[t,n]=e.split(`:`).map(e=>e.trim());return{label:t,icon:n||void 0}})}function L(e=G){return a`
    ${F(e).map(e=>a`<mms-link slot="nav" href="#" label=${e} underline="none"></mms-link>`)}
  `}function R(e=K,t=q){return a`
    ${I(e).map(({label:e,icon:t})=>a`
        <mms-button
          slot="actions"
          variant="ghost"
          size="md"
          color-scheme="onyx"
          left-icon=${t??n}
          label=${e}
        ></mms-button>
      `)}
    ${t?a`<mms-button
          slot="account"
          variant="ghost"
          size="md"
          color-scheme="onyx"
          left-icon="user-circle"
          label=${t}
        ></mms-button>`:n}
  `}function z(){return a`${L(`Benefits, Providers, Claims`)}${R(``)}`}function B(e=`content`,t=`main-content`){return a`
    <style>
      .demo-main {
        background: var(--color-surface-solid);
        padding-block: var(--spacing-lg2);
        /* Container-driven to match the header, which measures its own width.
           Left as a media query it would take the desktop branch whenever the
           real viewport is wide, and the page inset would drift out of
           alignment with the logo in any narrowed context. */
        container-type: inline-size;
        container-name: mms-page;
      }
      .demo-container {
        max-width: var(--layout-content-max-width);
        margin-inline: auto;
        padding-inline: var(--layout-inline-padding-compact);
        box-sizing: border-box;
      }
      @container mms-page (min-width: 768px) {
        .demo-container {
          padding-inline: var(--layout-inline-padding-default);
        }
      }
      .demo-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: var(--layout-gap-loose);
        margin-top: var(--spacing-lg2);
      }
      .demo-title {
        font-family: var(--type-heading-2-family);
        font-size: var(--type-heading-2-size);
        line-height: var(--type-heading-2-line-height);
        font-weight: var(--type-heading-2-weight);
        letter-spacing: var(--type-heading-2-letter-spacing);
        color: var(--color-text-default);
        margin: 0 0 var(--spacing-sm2);
      }
      .demo-lede {
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--type-body-md-weight);
        color: var(--color-text-subtle);
        max-width: 68ch;
        margin: 0;
      }
    </style>
    <main class="demo-main" id=${t} tabindex="-1">
      <div class="demo-container">
        <h1 class="demo-title">Your benefits, in one place</h1>
        <p class="demo-lede">
          ${e===`full`?`The header is full-bleed, so its logo sits at the viewport inset while this content stays in the capped container — the two edges intentionally differ.`:`The logo above lines up with the left edge of this text. Both read the same container tokens, so the alignment holds at every width.`}
        </p>
        <div class="demo-cards">
          <mms-card
            icon="heartbeat"
            title-text="Coverage"
            description-text="Review what your plan includes and what it costs."
            show-actions
            action-style="link"
          >
            <mms-link slot="actions" href="#" label="View plan"></mms-link>
          </mms-card>
          <mms-card
            icon="map-pin"
            title-text="Providers"
            description-text="Find in-network care near you."
            show-actions
            action-style="link"
          >
            <mms-link slot="actions" href="#" label="Search providers"></mms-link>
          </mms-card>
          <mms-card
            icon="receipt"
            title-text="Claims"
            description-text="Track recent activity on your account."
            show-actions
            action-style="link"
          >
            <mms-link slot="actions" href="#" label="View claims"></mms-link>
          </mms-card>
        </div>
      </div>
    </main>
  `}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{o(),j(),b(),y(),w(),x(),C(),V={title:`Navigational/Header`,tags:[`!autodocs`]},H={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},U=`680px`,W=`960px`,G=`Benefits, Providers, Pharmacy, Claims, Resources, Contact`,K=`Search:magnifying-glass, Alerts:bell`,q=`Account`,J={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${W}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${H.h1}">Header</h1>
      <p style="${H.body} opacity: 0.85; max-width: ${U}; margin-bottom: 2rem;">
        Site/application header with logo, primary navigation, and quick actions in a single
        structural shell. Navigation and action content are consumer-supplied via the
        <code style="${H.monoSm}">nav</code>/<code style="${H.monoSm}">actions</code> slots — compose
        with <code style="${H.monoSm}">mms-link</code>, <code style="${H.monoSm}">mms-button</code>, and
        <code style="${H.monoSm}">mms-icon</code> rather than a bespoke menu-item primitive.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${H.h2}">Basic usage</h2>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1.5rem;">
        A logo and primary navigation are enough to start. The site name, the divider beside it,
        quick actions and the account control are each optional — add them as the application
        needs them. Below <code style="${H.monoSm}">768px</code>, the
        <code style="${H.monoSm}">logo-compact</code> slot is shown instead of
        <code style="${H.monoSm}">logo</code>.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <mms-header>
          ${z()}
        </mms-header>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Slots -->
      <h2 style="${H.h2}">Slots</h2>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1.5rem;">
        All header content is consumer-supplied through slots. There is no bespoke menu-item
        primitive to learn — compose the same components used everywhere else in the system. Every
        slot is independent and every slot may be left empty.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; ${H.caption}">
          <thead>
            <tr style="background: rgba(128,128,128,0.06); text-align: left;">
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Slot</th>
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Typical content</th>
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Behaviour</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${H.monoSm}">logo</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                <code style="${H.monoSm}">img</code>, inline SVG, or any markup
              </td>
              <td style="padding: 0.625rem 0.875rem;">
                Shown at 768px and above. Falls back to the theme's built-in lockup when empty.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;">
                <code style="${H.monoSm}">logo-compact</code>
              </td>
              <td style="padding: 0.625rem 0.875rem;">A narrower mark</td>
              <td style="padding: 0.625rem 0.875rem;">
                Swapped in below 768px. Falls back to <code style="${H.monoSm}">logo</code> when
                empty.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${H.monoSm}">nav</code></td>
              <td style="padding: 0.625rem 0.875rem;"><code style="${H.monoSm}">mms-link</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                Moves into the drawer once the bar runs out of room.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${H.monoSm}">actions</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                <code style="${H.monoSm}">mms-button</code>
              </td>
              <td style="padding: 0.625rem 0.875rem;">
                Moves into the drawer in the same step as nav. Separated from nav by a divider
                while inline.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${H.monoSm}">account</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                <code style="${H.monoSm}">mms-button</code>
              </td>
              <td style="padding: 0.625rem 0.875rem;">
                Renders last, after actions. Optional — omit entirely for apps with no auth. Moves
                into the drawer with the actions, as its own group.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre style="${H.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;"><code>&lt;mms-header site-name="Member Portal" show-site-divider&gt;
  &lt;img slot="logo" src="/logo.svg" alt="Acme Health" /&gt;
  &lt;img slot="logo-compact" src="/logo-mark.svg" alt="Acme Health" /&gt;

  &lt;mms-link slot="nav" href="/benefits" label="Benefits"&gt;&lt;/mms-link&gt;
  &lt;mms-link slot="nav" href="/claims" label="Claims"&gt;&lt;/mms-link&gt;

  &lt;mms-button slot="actions" variant="ghost" left-icon="magnifying-glass" label="Search"&gt;&lt;/mms-button&gt;

  &lt;!-- omit this slot entirely for apps with no auth --&gt;
  &lt;mms-button slot="account" variant="ghost" left-icon="user-circle" label="Account"&gt;&lt;/mms-button&gt;
&lt;/mms-header&gt;</code></pre>

      <h3 style="${H.h3}">Account bound to auth state</h3>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1rem;">
        The most common use of the <code style="${H.monoSm}">account</code> slot is a control whose
        label follows authentication state — the signed-in user's name, or a sign-in prompt before.
        Swap the slotted element; the header needs no prop and no notification. Because it measures
        its content live, a longer name simply moves the point at which the bar collapses.
      </p>

      <pre style="${H.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>&lt;!-- signed out --&gt;
&lt;mms-button slot="account" variant="ghost" left-icon="sign-in" label="Sign in"&gt;&lt;/mms-button&gt;

&lt;!-- signed in --&gt;
&lt;mms-button slot="account" variant="ghost" left-icon="user-circle" label="John Doe"&gt;&lt;/mms-button&gt;</code></pre>

      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 2rem;">
        The slot is unopinionated about what goes in it. A custom account control — an avatar
        lockup, a menu trigger, anything the app needs — receives the same target size and the same
        drawer row treatment as a built-in button, so composing your own costs nothing in
        accessibility or layout.
      </p>

      <h3 style="${H.h3}">Linking the lockup home</h3>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1rem;">
        Set <code style="${H.monoSm}">home-href</code> and the logo and site name become a single
        link to your homepage — the behaviour users expect from a header. It is deliberately
        opt-in: a link announces its destination to assistive technology, and the platform cannot
        know your home URL. A guess would be wrong for an app mounted under a sub-path, for a
        Salesforce or ServiceNow embed, or for a locale-rooted site — and navigating someone out of
        the application is worse than a logo that does not navigate at all.
      </p>

      <pre style="${H.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>&lt;mms-header home-href="/" site-name="Member Portal" show-site-divider&gt;
  &lt;!-- on the homepage itself, mark it current --&gt;
&lt;mms-header home-href="/" home-current site-name="Member Portal"&gt;</code></pre>

      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 2rem;">
        The link is named explicitly — the site name followed by
        <code style="${H.monoSm}">home-label</code> (default <code style="${H.monoSm}">Home</code>),
        or the label alone when there is no site name. It wraps an image whose alt text you control,
        so deriving the name from its contents would make it depend on your markup.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Custom logo via slot -->
      <h2 style="${H.h2}">Custom logo</h2>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1.5rem;">
        The active theme supplies a built-in lockup, but it is only slot <em>fallback</em> —
        anything placed in the <code style="${H.monoSm}">logo</code> and
        <code style="${H.monoSm}">logo-compact</code> slots overrides it. Supply your own mark when
        the engagement's theme is not one the package ships a logo for.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <mms-header site-name="Member Portal" show-site-divider>
          ${P()}
          ${P(!0)}
          ${z()}
        </mms-header>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accent line -->
      <h2 style="${H.h2}">Accent line</h2>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1.5rem;">
        <code style="${H.monoSm}">accent-line</code> sets the thin rule along the header's bottom
        edge. It is purely decorative — it carries no status or meaning, so any palette tier is
        permitted.
      </p>

      <h3 style="${H.h3}">Line options</h3>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1.5rem;">
        <code style="${H.monoSm}">brand</code> (default) draws the rule in a scheme colour.
        <code style="${H.monoSm}">light</code> draws it in the neutral surface tone, for a header
        sitting on a dark or saturated backdrop. <code style="${H.monoSm}">none</code> removes the
        rule and the bottom border with it, leaving no edge at all.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem;">
        ${[`brand`,`light`,`none`].map(e=>a`
            <div>
              <p style="${H.caption} margin-bottom: 0.5rem;">
                <strong>accent-line="${e}"</strong>${e===`brand`?` — default`:``}
              </p>
              <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden;">
                <mms-header accent-line=${e}>${z()}</mms-header>
              </div>
            </div>
          `)}
      </div>
      <p style="${H.caption} opacity: 0.7; max-width: ${U}; margin-bottom: 2rem;">
        On a light theme <code style="${H.monoSm}">light</code> is near-white against a white bar,
        so what reads as a line above is the 1px bottom border rather than the accent itself.
        Judge it on a dark theme or a branded surface.
      </p>

      <h3 style="${H.h3}">Line color</h3>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1.5rem;">
        <code style="${H.monoSm}">accent-line-color</code> chooses which scheme colour the rule
        uses — <code style="${H.monoSm}">primary</code>,
        <code style="${H.monoSm}">secondary</code>, <code style="${H.monoSm}">accent</code> or
        <code style="${H.monoSm}">onyx</code>. It applies only when
        <code style="${H.monoSm}">accent-line</code> is <code style="${H.monoSm}">brand</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        ${[`primary`,`secondary`,`accent`,`onyx`].map(e=>a`
            <div>
              <p style="${H.caption} margin-bottom: 0.5rem;"><strong>brand / ${e}</strong></p>
              <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden;">
                <mms-header accent-line="brand" accent-line-color=${e}>
                  ${z()}
                </mms-header>
              </div>
            </div>
          `)}
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${H.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${H.bodySm} margin: 0;">
          <strong>Skip link.</strong> A visually-hidden-until-focused "Skip to main content" link
          is always the first focusable element, jumping to <code style="${H.monoSm}">skip-link-target</code>
          (default <code style="${H.monoSm}">#main-content</code>) — configurable via
          <code style="${H.monoSm}">skip-link-target</code>/<code style="${H.monoSm}">skip-link-text</code>.
        </p>
      </div>

      <h3 style="${H.h3}">WCAG 2.2 AA compliance</h3>
      ${ee(S.header.rows)}

      <h3 style="${H.h3}">Screen reader behavior</h3>
      <ul style="${H.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> The header is announced as "banner" via <code style="${H.monoSm}">role="banner"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Hamburger toggle:</strong> Announces "Open menu" / "Close menu" and expanded state via <code style="${H.monoSm}">aria-expanded</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Collapsed panel:</strong> Announced as a dialog ("Navigation menu") via <code style="${H.monoSm}">role="dialog"</code> and <code style="${H.monoSm}">aria-modal="true"</code> only while collapsed and open</li>
        <li><strong>Skip link:</strong> Announced first on Tab from page load, before any header content</li>
      </ul>

      <h3 style="${H.h3}">Keyboard navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus through skip link, logo, nav, actions, and hamburger toggle in order</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused link, button, or hamburger toggle</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close the collapsed nav/actions panel, if open</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">While the panel is open, cycles focus backward within it (focus is trapped)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},Y={name:`Playground`,tags:[`!dev`],args:{viewport:`768`,logoSize:`sm`,container:`content`,siteName:`Member Portal`,showSiteDivider:!0,homeHref:`#`,navItems:G,quickActions:K,accountLabel:q,accentLine:`brand`,accentLineColor:`primary`,fixed:!1,shrinkOnScroll:!0,scrollThreshold:50,showHamburger:!0,skipLinkTarget:`main-content`,skipLinkText:`Skip to main content`,theme:`maximus`,density:`default`},decorators:[(e,t)=>a`
        <div
          style="background: var(--color-surface-sunken); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;"
        >
          <!-- contain: paint makes this the containing block for the drawer's
               position: fixed overlay, so it covers the page sample rather than
               the whole canvas — without the compositing layer a transform would
               promote, which makes the drawer's slide-in animation jitter. -->
          <div
            style="display: flex; flex-direction: column; contain: paint; width: ${N(t.args.viewport)}; margin-inline: auto;"
          >
            ${e()}
          </div>
        </div>
      `],argTypes:{viewport:{name:`Viewport (simulated)`,control:`select`,options:[`400`,`768`,`1240`,`1440`,`fill`],description:"Not a component prop — a story control that constrains the preview width so responsive behavior can be seen without resizing the browser. The header measures its own container, so the simulation is faithful rather than a mock. `fill` hands the width back to the canvas. Widths above the canvas scroll within it.",table:{category:`Demo Controls`}},logoSize:{name:`Logo size`,control:`select`,options:[`sm`,`md`,`lg`,`xl`],description:`Built-in logo height on the icon-size scale — sm 16 / md 20 / lg 24 / xl 32.`,table:{category:`Content`}},siteName:{name:`Site name`,control:`text`,description:`Site/product name shown next to the logo`,table:{category:`Content`}},showSiteDivider:{name:`Show site divider`,control:`boolean`,description:`Show a vertical divider between the logo and site name`,table:{category:`Content`}},homeHref:{name:`Home link`,control:`text`,description:`Destination for the logo and site name, which link home as a single target. Unset by default — the platform cannot know your home URL, and a link announces its destination to assistive tech, so it will not invent one. Clear the field to render the lockup as plain content with no link semantics.`,table:{category:`Content`}},navItems:{name:`Navigation items`,control:`text`,description:'Comma-separated nav labels, slotted as `mms-link slot="nav"`. Add or remove entries to exercise the collapse ladder: nav moves into the drawer first, then actions, then the site name stacks under the logo.',table:{category:`Content`}},quickActions:{name:`Quick actions`,control:`text`,description:'Comma-separated quick actions, slotted as `mms-button slot="actions"`. Each entry is `Label:icon`; the icon is optional, so `Sign in` is as valid as `Search:magnifying-glass`. The account item sits in its own `account` slot and is not part of this list.',table:{category:`Content`}},accountLabel:{name:`Account`,control:`text`,description:"Label for the control in the `account` slot. Clear the field to omit the slot entirely — the header is designed to work without it, for apps with no auth. Bind it to app state in production: a username once signed in, `Sign in` before.",table:{category:`Content`}},container:{name:`Container`,control:`select`,options:[`content`,`full`],description:"Caps the header row, or does not. `content` (default) limits it to `--layout-content-max-width` (1280px) and centres it, so the logo lands on the same leading edge as page content — the header reads as part of the page. `full` removes the cap so the row spans the full bar and the logo sits on the header’s own inset, giving an edge-to-edge bar wider than the content beneath it. Inline padding is identical either way (16px, 32px from 768px up); only the cap differs, so the two are indistinguishable below 1280px — use the 1440 viewport to see it. To align with a page container that is not 1280px, set `--mms-header-content-max-width`.",table:{category:`Visual`}},accentLine:{name:`Accent line`,control:`select`,options:[`brand`,`light`,`none`],description:"Thin rule along the header's bottom edge. `none` removes it entirely.",table:{category:`Visual`}},accentLineColor:{name:`Accent line color`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:"Scheme colour used when `accent-line` is `brand`. Any tier is allowed — the line is decorative, so it carries no semantic constraint.",table:{category:`Visual`}},fixed:{name:`Fixed`,control:`boolean`,description:`Pin the header to the top of the viewport`,table:{category:`Behavior`}},shrinkOnScroll:{name:`Shrink on scroll`,control:`boolean`,description:`Reduce header height once scrolled past scroll threshold`,table:{category:`Behavior`}},scrollThreshold:{name:`Scroll threshold`,control:!1,description:"Scroll distance in px before the header shrinks. Applies only when both `fixed` and `shrink-on-scroll` are set. Defaults to 50 — configure only if that trigger point conflicts with your page.",table:{category:`Behavior`}},showHamburger:{name:`Show hamburger`,control:!1,description:`Keeps the hamburger toggle in the DOM while the header is expanded. Auto-collapse reveals the toggle on its own whenever nav or actions move into the drawer, so this needs no configuration in normal use.`,table:{category:`Behavior`}},skipLinkTarget:{name:`Skip link target`,control:`text`,description:`id of the main content landmark the skip link jumps to`,table:{category:`Accessibility`}},skipLinkText:{name:`Skip link text`,control:`text`,description:`Skip link label`,table:{category:`Accessibility`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects accent stroke color)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{layout:`fullscreen`,docs:{source:{transform:(e,t)=>{let n=t.args,r=[];n.logoSize!==`sm`&&r.push(`logo-size="${n.logoSize}"`),n.container!==`content`&&r.push(`container="${n.container}"`),n.siteName&&r.push(`site-name="${n.siteName}"`),n.showSiteDivider&&r.push(`show-site-divider`),n.homeHref&&r.push(`home-href="${n.homeHref}"`),n.accentLine!==`brand`&&r.push(`accent-line="${n.accentLine}"`),n.accentLineColor!==`primary`&&r.push(`accent-line-color="${n.accentLineColor}"`),n.fixed&&r.push(`fixed`),n.shrinkOnScroll||r.push(`shrink-on-scroll="false"`),n.scrollThreshold!==50&&r.push(`scroll-threshold="${n.scrollThreshold}"`),n.showHamburger||r.push(`show-hamburger="false"`),n.density===`compact`&&r.push(`data-density="compact"`);let i=F(n.navItems).map(e=>`  <mms-link slot="nav" href="#" label="${e}" underline="none"></mms-link>`),a=I(n.quickActions).map(({label:e,icon:t})=>`  <mms-button slot="actions" variant="ghost" color-scheme="onyx"${t?` left-icon="${t}"`:``} label="${e}"></mms-button>`),o=n.accountLabel?[`  <mms-button slot="account" variant="ghost" color-scheme="onyx" left-icon="user-circle" label="${n.accountLabel}"></mms-button>`]:[];return`<mms-header\n  ${r.join(`
  `)}\n>\n${[...i,...a,...o].join(`
`)}\n</mms-header>`},language:`html`}},controls:{sort:`none`}},render:e=>a`
    <mms-header
      logo-size=${e.logoSize}
      container=${e.container}
      site-name=${e.siteName}
      ?show-site-divider=${e.showSiteDivider}
      home-href=${e.homeHref||n}
      accent-line=${e.accentLine}
      accent-line-color=${e.accentLineColor}
      ?fixed=${e.fixed}
      ?shrink-on-scroll=${e.shrinkOnScroll}
      scroll-threshold=${e.scrollThreshold}
      ?show-hamburger=${e.showHamburger}
      skip-link-target=${e.skipLinkTarget||n}
      skip-link-text=${e.skipLinkText||n}
      data-density=${e.density===`compact`?`compact`:n}
    >
      ${L(e.navItems)}
      ${R(e.quickActions,e.accountLabel)}
    </mms-header>
    ${B(e.container,e.skipLinkTarget)}
  `},X={...Y,name:`Full Preview`,tags:[],args:{...Y.args,viewport:`fill`},parameters:{...Y.parameters,layout:`fullscreen`},decorators:[(e,t)=>a`
        <div style="min-height: 100vh; background: var(--color-surface-sunken); overflow-x: auto;">
          <div
            style="display: flex; flex-direction: column; min-height: 100vh; contain: paint; width: ${N(t.args.viewport)}; margin-inline: auto;"
          >
            ${e()}
          </div>
        </div>
      `]},Z={name:`Layout & Behavior`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${W}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${H.h1}">Layout &amp; Behavior</h1>
      <p style="${H.body} opacity: 0.85; max-width: ${U}; margin-bottom: 2rem;">
        The header adapts on two independent axes. <strong>Alignment</strong> and the
        <strong>inline inset</strong> follow the shared layout system, so the header lines up with
        page content by default. <strong>Degradation</strong> is measured from the header's own
        content rather than read from a breakpoint.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Container alignment -->
      <h2 style="${H.h2}">Container alignment</h2>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1rem;">
        The header is full-bleed; its inner row is capped at
        <code style="${H.monoSm}">--layout-content-max-width</code> and centered — the same shape a
        page content container uses. Because both read the same tokens, the logo's leading edge
        lines up with body content at every width. Margins are derived from centering, never
        declared.
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; ${H.bodySm}">
        <thead>
          <tr style="text-align: left; border-bottom: 1px solid rgba(128,128,128,0.25);">
            <th style="padding: 0.5rem 0.75rem 0.5rem 0;">Setting</th>
            <th style="padding: 0.5rem 0.75rem;">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem 0.5rem 0;">
              <code style="${H.monoSm}">container="content"</code> <em>(default)</em>
            </td>
            <td style="padding: 0.5rem 0.75rem;">Inner row aligns to the page content container.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem 0.5rem 0;">
              <code style="${H.monoSm}">container="full"</code>
            </td>
            <td style="padding: 0.5rem 0.75rem;">
              Cap released — edge-to-edge, held in only by the inline inset.
            </td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- The padding step -->
      <h2 style="${H.h2}">The padding step</h2>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1.5rem;">
        The layout system defines exactly one breakpoint —
        <code style="${H.monoSm}">--layout-padding-step</code> at 768px — where the inline inset
        goes from 16px to 32px. The logo slot swaps at the same width. Everything else about the
        header is content-driven.
      </p>
      <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
        <div>
          <p style="${H.caption} margin: 0 0 0.5rem;">
            <strong>Below 768px</strong> · inset 16px ·
            <code style="${H.monoSm}">logo-compact</code> slot
          </p>
          <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; width: 480px; max-width: 100%;">
            <mms-header site-name="Member Portal" show-site-divider>
              ${L()}${R()}
            </mms-header>
          </div>
        </div>
        <div>
          <p style="${H.caption} margin: 0 0 0.5rem;">
            <strong>768px and above</strong> · inset 32px ·
            <code style="${H.monoSm}">logo</code> slot · capped at 1280px, then centered
          </p>
          <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden;">
            <mms-header site-name="Member Portal" show-site-divider>
              ${L()}${R()}
            </mms-header>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Adjusting the container -->
      <h2 style="${H.h2}">Adjusting the container</h2>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1rem;">
        Two custom properties tune the container without declaring a margin. They inherit, so
        setting them on a page wrapper realigns the header with everything else.
      </p>
      <pre style="${H.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>/* Wider header than body */
mms-header { --mms-header-content-max-width: 1440px; }

/* Roomier inset, keeping a step of your own */
mms-header { --mms-header-inline-padding: 24px; }
@media (min-width: 1024px) {
  mms-header { --mms-header-inline-padding: 64px; }
}</code></pre>
      <p style="${H.caption} opacity: 0.7; max-width: ${U}; margin-bottom: 2rem;">
        Setting <code style="${H.monoSm}">--mms-header-inline-padding</code> once flattens the
        768px step by design — declare it inside your own media query to keep one.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Degradation -->
      <h2 style="${H.h2}">Responsive degradation</h2>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1rem;">
        The header measures its own content live via
        <code style="${H.monoSm}">ResizeObserver</code>, independent of any fixed breakpoint. A
        breakpoint cannot do this: four short nav items fit at 700px where seven long ones do not
        fit at 1100px.
      </p>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1rem;">
        It degrades in two steps as the container narrows:
      </p>
      <ol style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin: 0 0 1rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          Nav, quick actions and the account control move into
          <code style="${H.monoSm}">mms-drawer</code> together, and the hamburger toggle appears.
        </li>
        <li style="margin-bottom: 0.5rem;">
          If the logo and site name still do not fit, the site name stacks beneath the logo.
        </li>
      </ol>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1.5rem;">
        The site name never hides and the logo never degrades — identity stays visible at every
        width. Restoring on the way back up uses a wider threshold than collapsing, so a header
        sitting near the boundary does not oscillate.
      </p>

      <div style="resize: horizontal; overflow: auto; min-width: 240px; max-width: 100%; width: 520px; border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; margin-bottom: 0.75rem;">
        <mms-header site-name="Medicaid Enrollment Portal" show-site-divider>
          ${L()}${R()}
        </mms-header>
      </div>
      <p style="${H.caption} opacity: 0.65; margin-bottom: 2rem;">
        Drag the bottom-right corner to resize and watch both steps.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Fixed + shrink -->
      <h2 style="${H.h2}">Fixed header and shrink on scroll</h2>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1rem;">
        <code style="${H.monoSm}">fixed</code> pins the header to the top of the viewport.
        <code style="${H.monoSm}">shrink-on-scroll</code> (on by default) then reduces its height
        once the window has scrolled past <code style="${H.monoSm}">scroll-threshold</code> pixels
        (default <code style="${H.monoSm}">50</code>).
      </p>
      <p style="${H.bodySm} opacity: 0.85; max-width: ${U}; margin-bottom: 1rem;">
        Both conditions are required. On a static header the shrink is skipped entirely: the bar
        scrolls away regardless, and losing height mid-scroll shortens the document underneath the
        reader.
      </p>
      <p style="${H.caption} opacity: 0.7; max-width: ${U}; margin-bottom: 2rem;">
        This one cannot be shown in a panel on this page — it responds to window scroll, not to a
        scrolling region. Open <strong>Full Preview</strong>, switch
        <code style="${H.monoSm}">Fixed</code> on, and scroll the page.
      </p>

    </div>
  `},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Header</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Site/application header with logo, primary navigation, and quick actions in a single
        structural shell. Navigation and action content are consumer-supplied via the
        <code style="\${t.monoSm}">nav</code>/<code style="\${t.monoSm}">actions</code> slots — compose
        with <code style="\${t.monoSm}">mms-link</code>, <code style="\${t.monoSm}">mms-button</code>, and
        <code style="\${t.monoSm}">mms-icon</code> rather than a bespoke menu-item primitive.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        A logo and primary navigation are enough to start. The site name, the divider beside it,
        quick actions and the account control are each optional — add them as the application
        needs them. Below <code style="\${t.monoSm}">768px</code>, the
        <code style="\${t.monoSm}">logo-compact</code> slot is shown instead of
        <code style="\${t.monoSm}">logo</code>.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <mms-header>
          \${overviewContent()}
        </mms-header>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Slots -->
      <h2 style="\${t.h2}">Slots</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        All header content is consumer-supplied through slots. There is no bespoke menu-item
        primitive to learn — compose the same components used everywhere else in the system. Every
        slot is independent and every slot may be left empty.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="background: rgba(128,128,128,0.06); text-align: left;">
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Slot</th>
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Typical content</th>
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Behaviour</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">logo</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                <code style="\${t.monoSm}">img</code>, inline SVG, or any markup
              </td>
              <td style="padding: 0.625rem 0.875rem;">
                Shown at 768px and above. Falls back to the theme's built-in lockup when empty.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;">
                <code style="\${t.monoSm}">logo-compact</code>
              </td>
              <td style="padding: 0.625rem 0.875rem;">A narrower mark</td>
              <td style="padding: 0.625rem 0.875rem;">
                Swapped in below 768px. Falls back to <code style="\${t.monoSm}">logo</code> when
                empty.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">nav</code></td>
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">mms-link</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                Moves into the drawer once the bar runs out of room.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">actions</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                <code style="\${t.monoSm}">mms-button</code>
              </td>
              <td style="padding: 0.625rem 0.875rem;">
                Moves into the drawer in the same step as nav. Separated from nav by a divider
                while inline.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">account</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                <code style="\${t.monoSm}">mms-button</code>
              </td>
              <td style="padding: 0.625rem 0.875rem;">
                Renders last, after actions. Optional — omit entirely for apps with no auth. Moves
                into the drawer with the actions, as its own group.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;"><code>&lt;mms-header site-name="Member Portal" show-site-divider&gt;
  &lt;img slot="logo" src="/logo.svg" alt="Acme Health" /&gt;
  &lt;img slot="logo-compact" src="/logo-mark.svg" alt="Acme Health" /&gt;

  &lt;mms-link slot="nav" href="/benefits" label="Benefits"&gt;&lt;/mms-link&gt;
  &lt;mms-link slot="nav" href="/claims" label="Claims"&gt;&lt;/mms-link&gt;

  &lt;mms-button slot="actions" variant="ghost" left-icon="magnifying-glass" label="Search"&gt;&lt;/mms-button&gt;

  &lt;!-- omit this slot entirely for apps with no auth --&gt;
  &lt;mms-button slot="account" variant="ghost" left-icon="user-circle" label="Account"&gt;&lt;/mms-button&gt;
&lt;/mms-header&gt;</code></pre>

      <h3 style="\${t.h3}">Account bound to auth state</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        The most common use of the <code style="\${t.monoSm}">account</code> slot is a control whose
        label follows authentication state — the signed-in user's name, or a sign-in prompt before.
        Swap the slotted element; the header needs no prop and no notification. Because it measures
        its content live, a longer name simply moves the point at which the bar collapses.
      </p>

      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>&lt;!-- signed out --&gt;
&lt;mms-button slot="account" variant="ghost" left-icon="sign-in" label="Sign in"&gt;&lt;/mms-button&gt;

&lt;!-- signed in --&gt;
&lt;mms-button slot="account" variant="ghost" left-icon="user-circle" label="John Doe"&gt;&lt;/mms-button&gt;</code></pre>

      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        The slot is unopinionated about what goes in it. A custom account control — an avatar
        lockup, a menu trigger, anything the app needs — receives the same target size and the same
        drawer row treatment as a built-in button, so composing your own costs nothing in
        accessibility or layout.
      </p>

      <h3 style="\${t.h3}">Linking the lockup home</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Set <code style="\${t.monoSm}">home-href</code> and the logo and site name become a single
        link to your homepage — the behaviour users expect from a header. It is deliberately
        opt-in: a link announces its destination to assistive technology, and the platform cannot
        know your home URL. A guess would be wrong for an app mounted under a sub-path, for a
        Salesforce or ServiceNow embed, or for a locale-rooted site — and navigating someone out of
        the application is worse than a logo that does not navigate at all.
      </p>

      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>&lt;mms-header home-href="/" site-name="Member Portal" show-site-divider&gt;
  &lt;!-- on the homepage itself, mark it current --&gt;
&lt;mms-header home-href="/" home-current site-name="Member Portal"&gt;</code></pre>

      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        The link is named explicitly — the site name followed by
        <code style="\${t.monoSm}">home-label</code> (default <code style="\${t.monoSm}">Home</code>),
        or the label alone when there is no site name. It wraps an image whose alt text you control,
        so deriving the name from its contents would make it depend on your markup.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Custom logo via slot -->
      <h2 style="\${t.h2}">Custom logo</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The active theme supplies a built-in lockup, but it is only slot <em>fallback</em> —
        anything placed in the <code style="\${t.monoSm}">logo</code> and
        <code style="\${t.monoSm}">logo-compact</code> slots overrides it. Supply your own mark when
        the engagement's theme is not one the package ships a logo for.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <mms-header site-name="Member Portal" show-site-divider>
          \${sampleLogo()}
          \${sampleLogo(true)}
          \${overviewContent()}
        </mms-header>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accent line -->
      <h2 style="\${t.h2}">Accent line</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">accent-line</code> sets the thin rule along the header's bottom
        edge. It is purely decorative — it carries no status or meaning, so any palette tier is
        permitted.
      </p>

      <h3 style="\${t.h3}">Line options</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">brand</code> (default) draws the rule in a scheme colour.
        <code style="\${t.monoSm}">light</code> draws it in the neutral surface tone, for a header
        sitting on a dark or saturated backdrop. <code style="\${t.monoSm}">none</code> removes the
        rule and the bottom border with it, leaving no edge at all.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem;">
        \${(['brand', 'light', 'none'] as const).map(mode => html\`
            <div>
              <p style="\${t.caption} margin-bottom: 0.5rem;">
                <strong>accent-line="\${mode}"</strong>\${mode === 'brand' ? ' — default' : ''}
              </p>
              <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden;">
                <mms-header accent-line=\${mode}>\${overviewContent()}</mms-header>
              </div>
            </div>
          \`)}
      </div>
      <p style="\${t.caption} opacity: 0.7; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        On a light theme <code style="\${t.monoSm}">light</code> is near-white against a white bar,
        so what reads as a line above is the 1px bottom border rather than the accent itself.
        Judge it on a dark theme or a branded surface.
      </p>

      <h3 style="\${t.h3}">Line color</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">accent-line-color</code> chooses which scheme colour the rule
        uses — <code style="\${t.monoSm}">primary</code>,
        <code style="\${t.monoSm}">secondary</code>, <code style="\${t.monoSm}">accent</code> or
        <code style="\${t.monoSm}">onyx</code>. It applies only when
        <code style="\${t.monoSm}">accent-line</code> is <code style="\${t.monoSm}">brand</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        \${(['primary', 'secondary', 'accent', 'onyx'] as const).map(accent => html\`
            <div>
              <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>brand / \${accent}</strong></p>
              <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden;">
                <mms-header accent-line="brand" accent-line-color=\${accent}>
                  \${overviewContent()}
                </mms-header>
              </div>
            </div>
          \`)}
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Skip link.</strong> A visually-hidden-until-focused "Skip to main content" link
          is always the first focusable element, jumping to <code style="\${t.monoSm}">skip-link-target</code>
          (default <code style="\${t.monoSm}">#main-content</code>) — configurable via
          <code style="\${t.monoSm}">skip-link-target</code>/<code style="\${t.monoSm}">skip-link-text</code>.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['header'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> The header is announced as "banner" via <code style="\${t.monoSm}">role="banner"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Hamburger toggle:</strong> Announces "Open menu" / "Close menu" and expanded state via <code style="\${t.monoSm}">aria-expanded</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Collapsed panel:</strong> Announced as a dialog ("Navigation menu") via <code style="\${t.monoSm}">role="dialog"</code> and <code style="\${t.monoSm}">aria-modal="true"</code> only while collapsed and open</li>
        <li><strong>Skip link:</strong> Announced first on Tab from page load, before any header content</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus through skip link, logo, nav, actions, and hamburger toggle in order</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused link, button, or hamburger toggle</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close the collapsed nav/actions panel, if open</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">While the panel is open, cycles focus backward within it (focus is trapped)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    viewport: '768',
    logoSize: 'sm',
    container: 'content',
    siteName: 'Member Portal',
    showSiteDivider: true,
    homeHref: '#',
    navItems: DEFAULT_NAV_ITEMS,
    quickActions: DEFAULT_QUICK_ACTIONS,
    accountLabel: DEFAULT_ACCOUNT,
    accentLine: 'brand',
    accentLineColor: 'primary',
    fixed: false,
    shrinkOnScroll: true,
    scrollThreshold: 50,
    showHamburger: true,
    skipLinkTarget: 'main-content',
    skipLinkText: 'Skip to main content',
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown, ctx: {
    args: {
      viewport?: string;
    };
  }) => {
    const w = previewWidth(ctx.args.viewport);
    return html\`
        <div
          style="background: var(--color-surface-sunken); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;"
        >
          <!-- contain: paint makes this the containing block for the drawer's
               position: fixed overlay, so it covers the page sample rather than
               the whole canvas — without the compositing layer a transform would
               promote, which makes the drawer's slide-in animation jitter. -->
          <div
            style="display: flex; flex-direction: column; contain: paint; width: \${w}; margin-inline: auto;"
          >
            \${story()}
          </div>
        </div>
      \`;
  }],
  argTypes: {
    viewport: {
      name: 'Viewport (simulated)',
      control: 'select',
      options: ['400', '768', '1240', '1440', 'fill'],
      description: 'Not a component prop — a story control that constrains the preview width so responsive behavior can be seen without resizing the browser. The header measures its own container, so the simulation is faithful rather than a mock. \`fill\` hands the width back to the canvas. Widths above the canvas scroll within it.',
      table: {
        category: 'Demo Controls'
      }
    },
    // ── Content ───────────────────────────────────────────────
    logoSize: {
      name: 'Logo size',
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Built-in logo height on the icon-size scale — sm 16 / md 20 / lg 24 / xl 32.',
      table: {
        category: 'Content'
      }
    },
    siteName: {
      name: 'Site name',
      control: 'text',
      description: 'Site/product name shown next to the logo',
      table: {
        category: 'Content'
      }
    },
    showSiteDivider: {
      name: 'Show site divider',
      control: 'boolean',
      description: 'Show a vertical divider between the logo and site name',
      table: {
        category: 'Content'
      }
    },
    homeHref: {
      name: 'Home link',
      control: 'text',
      description: 'Destination for the logo and site name, which link home as a single target. Unset by default — the platform cannot know your home URL, and a link announces its destination to assistive tech, so it will not invent one. Clear the field to render the lockup as plain content with no link semantics.',
      table: {
        category: 'Content'
      }
    },
    navItems: {
      name: 'Navigation items',
      control: 'text',
      description: 'Comma-separated nav labels, slotted as \`mms-link slot="nav"\`. Add or remove entries to exercise the collapse ladder: nav moves into the drawer first, then actions, then the site name stacks under the logo.',
      table: {
        category: 'Content'
      }
    },
    quickActions: {
      name: 'Quick actions',
      control: 'text',
      description: 'Comma-separated quick actions, slotted as \`mms-button slot="actions"\`. Each entry is \`Label:icon\`; the icon is optional, so \`Sign in\` is as valid as \`Search:magnifying-glass\`. The account item sits in its own \`account\` slot and is not part of this list.',
      table: {
        category: 'Content'
      }
    },
    accountLabel: {
      name: 'Account',
      control: 'text',
      description: 'Label for the control in the \`account\` slot. Clear the field to omit the slot entirely — the header is designed to work without it, for apps with no auth. Bind it to app state in production: a username once signed in, \`Sign in\` before.',
      table: {
        category: 'Content'
      }
    },
    // ── Visual ────────────────────────────────────────────────
    container: {
      name: 'Container',
      control: 'select',
      options: ['content', 'full'],
      description: 'Caps the header row, or does not. \`content\` (default) limits it to \`--layout-content-max-width\` (1280px) and centres it, so the logo lands on the same leading edge as page content — the header reads as part of the page. \`full\` removes the cap so the row spans the full bar and the logo sits on the header’s own inset, giving an edge-to-edge bar wider than the content beneath it. Inline padding is identical either way (16px, 32px from 768px up); only the cap differs, so the two are indistinguishable below 1280px — use the 1440 viewport to see it. To align with a page container that is not 1280px, set \`--mms-header-content-max-width\`.',
      table: {
        category: 'Visual'
      }
    },
    accentLine: {
      name: 'Accent line',
      control: 'select',
      options: ['brand', 'light', 'none'],
      description: "Thin rule along the header's bottom edge. \`none\` removes it entirely.",
      table: {
        category: 'Visual'
      }
    },
    accentLineColor: {
      name: 'Accent line color',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Scheme colour used when \`accent-line\` is \`brand\`. Any tier is allowed — the line is decorative, so it carries no semantic constraint.',
      table: {
        category: 'Visual'
      }
    },
    // ── Behavior ──────────────────────────────────────────────
    fixed: {
      name: 'Fixed',
      control: 'boolean',
      description: 'Pin the header to the top of the viewport',
      table: {
        category: 'Behavior'
      }
    },
    shrinkOnScroll: {
      name: 'Shrink on scroll',
      control: 'boolean',
      description: 'Reduce header height once scrolled past scroll threshold',
      table: {
        category: 'Behavior'
      }
    },
    scrollThreshold: {
      name: 'Scroll threshold',
      control: false,
      description: 'Scroll distance in px before the header shrinks. Applies only when both \`fixed\` and \`shrink-on-scroll\` are set. Defaults to 50 — configure only if that trigger point conflicts with your page.',
      table: {
        category: 'Behavior'
      }
    },
    showHamburger: {
      name: 'Show hamburger',
      control: false,
      description: 'Keeps the hamburger toggle in the DOM while the header is expanded. Auto-collapse reveals the toggle on its own whenever nav or actions move into the drawer, so this needs no configuration in normal use.',
      table: {
        category: 'Behavior'
      }
    },
    // ── Accessibility ─────────────────────────────────────────
    skipLinkTarget: {
      name: 'Skip link target',
      control: 'text',
      description: 'id of the main content landmark the skip link jumps to',
      table: {
        category: 'Accessibility'
      }
    },
    skipLinkText: {
      name: 'Skip link text',
      control: 'text',
      description: 'Skip link label',
      table: {
        category: 'Accessibility'
      }
    },
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['default', 'maximus', 'va-gov', 'uss-oh-dvs'],
      description: 'Brand theme (affects accent stroke color)',
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
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: {
            logoSize: string;
            container: string;
            siteName: string;
            showSiteDivider: boolean;
            homeHref: string;
            navItems: string;
            quickActions: string;
            accountLabel: string;
            accentLine: string;
            accentLineColor: string;
            fixed: boolean;
            shrinkOnScroll: boolean;
            scrollThreshold: number;
            showHamburger: boolean;
            density: string;
          };
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.logoSize !== 'sm') attrs.push(\`logo-size="\${a.logoSize}"\`);
          if (a.container !== 'content') attrs.push(\`container="\${a.container}"\`);
          if (a.siteName) attrs.push(\`site-name="\${a.siteName}"\`);
          if (a.showSiteDivider) attrs.push('show-site-divider');
          if (a.homeHref) attrs.push(\`home-href="\${a.homeHref}"\`);
          if (a.accentLine !== 'brand') attrs.push(\`accent-line="\${a.accentLine}"\`);
          if (a.accentLineColor !== 'primary') attrs.push(\`accent-line-color="\${a.accentLineColor}"\`);
          if (a.fixed) attrs.push('fixed');
          if (!a.shrinkOnScroll) attrs.push('shrink-on-scroll="false"');
          if (a.scrollThreshold !== 50) attrs.push(\`scroll-threshold="\${a.scrollThreshold}"\`);
          if (!a.showHamburger) attrs.push('show-hamburger="false"');
          if (a.density === 'compact') attrs.push('data-density="compact"');
          const nav = parseCommaSeparated(a.navItems).map(label => \`  <mms-link slot="nav" href="#" label="\${label}" underline="none"></mms-link>\`);
          const actions = parseActionSpec(a.quickActions).map(({
            label,
            icon
          }) => \`  <mms-button slot="actions" variant="ghost" color-scheme="onyx"\${icon ? \` left-icon="\${icon}"\` : ''} label="\${label}"></mms-button>\`);
          const account = a.accountLabel ? [\`  <mms-button slot="account" variant="ghost" color-scheme="onyx" left-icon="user-circle" label="\${a.accountLabel}"></mms-button>\`] : [];
          return \`<mms-header\\n  \${attrs.join('\\n  ')}\\n>\\n\${[...nav, ...actions, ...account].join('\\n')}\\n</mms-header>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none'
    }
  },
  render: (args: {
    logoSize: string;
    container: string;
    siteName: string;
    showSiteDivider: boolean;
    homeHref: string;
    navItems: string;
    quickActions: string;
    accountLabel: string;
    accentLine: string;
    accentLineColor: string;
    fixed: boolean;
    shrinkOnScroll: boolean;
    scrollThreshold: number;
    showHamburger: boolean;
    skipLinkTarget: string;
    skipLinkText: string;
    density: string;
  }) => html\`
    <mms-header
      logo-size=\${args.logoSize}
      container=\${args.container}
      site-name=\${args.siteName}
      ?show-site-divider=\${args.showSiteDivider}
      home-href=\${args.homeHref || nothing}
      accent-line=\${args.accentLine}
      accent-line-color=\${args.accentLineColor}
      ?fixed=\${args.fixed}
      ?shrink-on-scroll=\${args.shrinkOnScroll}
      scroll-threshold=\${args.scrollThreshold}
      ?show-hamburger=\${args.showHamburger}
      skip-link-target=\${args.skipLinkTarget || nothing}
      skip-link-text=\${args.skipLinkText || nothing}
      data-density=\${args.density === 'compact' ? 'compact' : nothing}
    >
      \${sampleNav(args.navItems)}
      \${sampleActions(args.quickActions, args.accountLabel)}
    </mms-header>
    \${samplePage(args.container, args.skipLinkTarget)}
  \`
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  ...PlaygroundStory,
  name: 'Full Preview',
  tags: [],
  args: {
    ...PlaygroundStory.args,
    viewport: 'fill'
  },
  parameters: {
    ...PlaygroundStory.parameters,
    layout: 'fullscreen'
  },
  decorators: [(story: () => unknown, ctx: {
    args: {
      viewport?: string;
    };
  }) => {
    const w = previewWidth(ctx.args.viewport);
    return html\`
        <div style="min-height: 100vh; background: var(--color-surface-sunken); overflow-x: auto;">
          <div
            style="display: flex; flex-direction: column; min-height: 100vh; contain: paint; width: \${w}; margin-inline: auto;"
          >
            \${story()}
          </div>
        </div>
      \`;
  }]
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Layout & Behavior',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Layout &amp; Behavior</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        The header adapts on two independent axes. <strong>Alignment</strong> and the
        <strong>inline inset</strong> follow the shared layout system, so the header lines up with
        page content by default. <strong>Degradation</strong> is measured from the header's own
        content rather than read from a breakpoint.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Container alignment -->
      <h2 style="\${t.h2}">Container alignment</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        The header is full-bleed; its inner row is capped at
        <code style="\${t.monoSm}">--layout-content-max-width</code> and centered — the same shape a
        page content container uses. Because both read the same tokens, the logo's leading edge
        lines up with body content at every width. Margins are derived from centering, never
        declared.
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; \${t.bodySm}">
        <thead>
          <tr style="text-align: left; border-bottom: 1px solid rgba(128,128,128,0.25);">
            <th style="padding: 0.5rem 0.75rem 0.5rem 0;">Setting</th>
            <th style="padding: 0.5rem 0.75rem;">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem 0.5rem 0;">
              <code style="\${t.monoSm}">container="content"</code> <em>(default)</em>
            </td>
            <td style="padding: 0.5rem 0.75rem;">Inner row aligns to the page content container.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem 0.5rem 0;">
              <code style="\${t.monoSm}">container="full"</code>
            </td>
            <td style="padding: 0.5rem 0.75rem;">
              Cap released — edge-to-edge, held in only by the inline inset.
            </td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- The padding step -->
      <h2 style="\${t.h2}">The padding step</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The layout system defines exactly one breakpoint —
        <code style="\${t.monoSm}">--layout-padding-step</code> at 768px — where the inline inset
        goes from 16px to 32px. The logo slot swaps at the same width. Everything else about the
        header is content-driven.
      </p>
      <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
        <div>
          <p style="\${t.caption} margin: 0 0 0.5rem;">
            <strong>Below 768px</strong> · inset 16px ·
            <code style="\${t.monoSm}">logo-compact</code> slot
          </p>
          <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; width: 480px; max-width: 100%;">
            <mms-header site-name="Member Portal" show-site-divider>
              \${sampleNav()}\${sampleActions()}
            </mms-header>
          </div>
        </div>
        <div>
          <p style="\${t.caption} margin: 0 0 0.5rem;">
            <strong>768px and above</strong> · inset 32px ·
            <code style="\${t.monoSm}">logo</code> slot · capped at 1280px, then centered
          </p>
          <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden;">
            <mms-header site-name="Member Portal" show-site-divider>
              \${sampleNav()}\${sampleActions()}
            </mms-header>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Adjusting the container -->
      <h2 style="\${t.h2}">Adjusting the container</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Two custom properties tune the container without declaring a margin. They inherit, so
        setting them on a page wrapper realigns the header with everything else.
      </p>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>/* Wider header than body */
mms-header { --mms-header-content-max-width: 1440px; }

/* Roomier inset, keeping a step of your own */
mms-header { --mms-header-inline-padding: 24px; }
@media (min-width: 1024px) {
  mms-header { --mms-header-inline-padding: 64px; }
}</code></pre>
      <p style="\${t.caption} opacity: 0.7; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Setting <code style="\${t.monoSm}">--mms-header-inline-padding</code> once flattens the
        768px step by design — declare it inside your own media query to keep one.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Degradation -->
      <h2 style="\${t.h2}">Responsive degradation</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        The header measures its own content live via
        <code style="\${t.monoSm}">ResizeObserver</code>, independent of any fixed breakpoint. A
        breakpoint cannot do this: four short nav items fit at 700px where seven long ones do not
        fit at 1100px.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        It degrades in two steps as the container narrows:
      </p>
      <ol style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin: 0 0 1rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          Nav, quick actions and the account control move into
          <code style="\${t.monoSm}">mms-drawer</code> together, and the hamburger toggle appears.
        </li>
        <li style="margin-bottom: 0.5rem;">
          If the logo and site name still do not fit, the site name stacks beneath the logo.
        </li>
      </ol>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The site name never hides and the logo never degrades — identity stays visible at every
        width. Restoring on the way back up uses a wider threshold than collapsing, so a header
        sitting near the boundary does not oscillate.
      </p>

      <div style="resize: horizontal; overflow: auto; min-width: 240px; max-width: 100%; width: 520px; border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; margin-bottom: 0.75rem;">
        <mms-header site-name="Medicaid Enrollment Portal" show-site-divider>
          \${sampleNav()}\${sampleActions()}
        </mms-header>
      </div>
      <p style="\${t.caption} opacity: 0.65; margin-bottom: 2rem;">
        Drag the bottom-right corner to resize and watch both steps.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Fixed + shrink -->
      <h2 style="\${t.h2}">Fixed header and shrink on scroll</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        <code style="\${t.monoSm}">fixed</code> pins the header to the top of the viewport.
        <code style="\${t.monoSm}">shrink-on-scroll</code> (on by default) then reduces its height
        once the window has scrolled past <code style="\${t.monoSm}">scroll-threshold</code> pixels
        (default <code style="\${t.monoSm}">50</code>).
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Both conditions are required. On a static header the shrink is skipped entirely: the bar
        scrolls away regardless, and losing height mid-scroll shortens the document underneath the
        reader.
      </p>
      <p style="\${t.caption} opacity: 0.7; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        This one cannot be shown in a panel on this page — it responds to window scroll, not to a
        scrolling region. Open <strong>Full Preview</strong>, switch
        <code style="\${t.monoSm}">Fixed</code> on, and scroll the page.
      </p>

    </div>
  \`
}`,...Z.parameters?.docs?.source}}},Q=[`Overview`,`PlaygroundStory`,`FullPreview`,`LayoutBehavior`]}));$();export{X as FullPreview,Z as LayoutBehavior,J as Overview,Y as PlaygroundStory,Q as __namedExportsOrder,V as default,$ as n,M as t};