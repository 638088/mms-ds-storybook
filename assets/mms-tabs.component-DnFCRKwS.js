import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-B0BZwaT1.js";import{E as o,S as s,T as c,b as l,g as u,n as d,r as f,t as p,w as m}from"./mms-icon.component-DFVI3nJi.js";import{i as h,r as g}from"./delegates-aria-label-HG0ZTDsy.js";import{n as _,t as v}from"./localize-DGaV1nF3.js";var y,b=e((()=>{a(),o(),g(),u(),p(),_(),f(),y=class extends r{constructor(...e){super(...e),this.localize=new v(this),this.hideLabel=!1,this.active=!1,this.disabled=!1,this.tabStyle=`minimal`,this.roundness=`subtle`,this.orientation=`horizontal`,this.size=`md`,this.panelId=``,this.state=`default`,this._handleClick=()=>{this.disabled||this.dispatchEvent(new CustomEvent(`tab-select`,{bubbles:!0,composed:!0,detail:{label:this.label??this.localize.term(`tab`)}}))},this._handleKeyDown=e=>{this.disabled||(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._handleClick())}}get resolvedLabel(){return this.label??this.localize.term(`tab`)}static{this.styles=[c,h,n`
    :host {
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      font-family: var(--type-ui-label-md-family);
      outline: none;
      cursor: pointer;
      user-select: none;
      position: relative;
    }

    :host([orientation='vertical']) {
      display: flex;
    }

    :host([disabled]) {
      cursor: not-allowed;
    }

    :host(:focus-visible) {
      outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
      outline-offset: var(--focus-ring-inset-offset);
    }

    .tab {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-sm1);
      padding: var(--spacing-sm2);
      box-sizing: border-box;
      position: relative;
      transition: background var(--motion-duration-base) var(--motion-easing-standard),
        color var(--motion-duration-base) var(--motion-easing-standard),
        border-color var(--motion-duration-base) var(--motion-easing-standard);
    }

    /* Horizontal's border-bottom reads as extra visual weight on that edge
       with no equivalent on the opposing edge — bump the top padding by the
       minimal style's 2px border width to visually balance it. */
    :host([orientation='horizontal']) .tab {
      padding-top: calc(var(--spacing-sm2) + var(--spacing-xs1));
    }

    /* Vertical reads tighter than horizontal at equivalent tokens (border-left
       eats into the perceived left inset) — sized one step looser per
       size/density scenario instead of a directional calc compensation, with
       left padding one token step above top/bottom, and right padding one
       further step above left, to read balanced against the vertical
       tablist's own width and the border-left's visual weight. Selectors are
       ordered least-to-most specific by attribute count, so the most specific
       match always wins regardless of declaration order. */
    :host([orientation='vertical']) .tab {
      padding-top: var(--spacing-md1);
      padding-bottom: var(--spacing-md1);
      padding-inline-start: var(--spacing-md2);
      padding-inline-end: var(--spacing-lg1);
    }

    :host([orientation='vertical'][data-density='compact']) .tab {
      padding-top: var(--spacing-sm2);
      padding-bottom: var(--spacing-sm2);
      padding-inline-start: var(--spacing-md1);
      padding-inline-end: var(--spacing-md2);
    }

    :host([orientation='vertical'][size='lg']) .tab {
      padding-top: var(--spacing-md2);
      padding-bottom: var(--spacing-md2);
      padding-inline-start: var(--spacing-lg1);
      padding-inline-end: var(--spacing-lg2);
    }

    :host([orientation='vertical'][size='lg'][data-density='compact']) .tab {
      padding-top: var(--spacing-md1);
      padding-bottom: var(--spacing-md1);
      padding-inline-start: var(--spacing-md2);
      padding-inline-end: var(--spacing-lg1);
    }

    :host([orientation='vertical']) .tab {
      width: 100%;
    }

    :host([orientation='horizontal']) .tab {
      min-width: 100%;
      justify-content: center;
    }

    /* ===== FILL STYLE ===== */

    :host([tab-style='fill'][orientation='horizontal']) .tab {
      border-bottom: 4px solid var(--color-border-default);
      background: transparent;
    }

    :host([tab-style='fill'][orientation='vertical']) .tab {
      border-inline-start: 4px solid var(--color-border-default);
      background: transparent;
    }

    :host([tab-style='fill'][orientation='horizontal'][state='hover']) .tab,
    :host([tab-style='fill'][orientation='horizontal']:hover:not([disabled]):not([active])) .tab {
      background: var(--color-surface-hover);
      border-bottom-color: var(--color-border-interactive-hover);
    }

    :host([tab-style='fill'][orientation='vertical'][state='hover']) .tab,
    :host([tab-style='fill'][orientation='vertical']:hover:not([disabled]):not([active])) .tab {
      background: var(--color-surface-hover);
      border-inline-start-color: var(--color-border-interactive-hover);
    }

    :host([tab-style='fill'][orientation='horizontal'][active]) .tab {
      background: var(--color-action-solid);
      border-bottom-color: var(--color-action-solid-pressed);
    }

    :host([tab-style='fill'][orientation='vertical'][active]) .tab {
      background: var(--color-action-solid);
      border-inline-start-color: var(--color-action-solid-pressed);
    }

    :host([tab-style='fill'][orientation='horizontal'][disabled]) .tab {
      background: var(--color-disabled-surface);
      border-bottom-color: var(--color-border-default);
    }

    :host([tab-style='fill'][orientation='vertical'][disabled]) .tab {
      background: var(--color-disabled-surface);
      border-inline-start-color: var(--color-border-default);
    }

    /* ===== FILL STYLE — ROUNDNESS =====
       Applies only to the active/hover tab, and only on its leading corners —
       the corners away from the border-bottom (horizontal) / border-left
       (vertical) connecting edge. Uses --radius-lg (not --radius-full, as on
       mms-button) — a tab's corner height is much smaller than a button's, so
       a full pill reads more extreme here than the equivalent button variant. */
    :host([tab-style='fill'][roundness='boxed']) {
      --tabs-item-roundness: var(--radius-none);
    }

    :host([tab-style='fill'][roundness='subtle']),
    :host([tab-style='fill']:not([roundness])) {
      --tabs-item-roundness: var(--radius-sm);
    }

    :host([tab-style='fill'][roundness='rounded']) {
      --tabs-item-roundness: var(--radius-lg);
    }

    :host([tab-style='fill'][orientation='horizontal'][active]) .tab,
    :host([tab-style='fill'][orientation='horizontal'][state='hover']) .tab,
    :host([tab-style='fill'][orientation='horizontal']:hover:not([disabled]):not([active])) .tab {
      border-top-left-radius: var(--tabs-item-roundness);
      border-top-right-radius: var(--tabs-item-roundness);
    }

    :host([tab-style='fill'][orientation='vertical'][active]) .tab,
    :host([tab-style='fill'][orientation='vertical'][state='hover']) .tab,
    :host([tab-style='fill'][orientation='vertical']:hover:not([disabled]):not([active])) .tab {
      border-top-right-radius: var(--tabs-item-roundness);
      border-bottom-right-radius: var(--tabs-item-roundness);
    }

    /* ===== MINIMAL STYLE ===== */

    :host([tab-style='minimal'][orientation='horizontal']) .tab {
      border-bottom: 2px solid var(--color-border-default);
    }

    :host([tab-style='minimal'][orientation='vertical']) .tab {
      border-inline-start: 2px solid var(--color-border-default);
    }

    :host([tab-style='minimal'][orientation='horizontal'][state='hover']) .tab,
    :host([tab-style='minimal'][orientation='horizontal']:hover:not([disabled]):not([active])) .tab {
      border-bottom-color: var(--color-border-interactive-hover);
    }

    :host([tab-style='minimal'][orientation='vertical'][state='hover']) .tab,
    :host([tab-style='minimal'][orientation='vertical']:hover:not([disabled]):not([active])) .tab {
      border-inline-start-color: var(--color-border-interactive-hover);
    }

    /* Minimal - active: border stays default; the sliding indicator on mms-tabs shows selection */

    :host([tab-style='minimal'][orientation='horizontal'][disabled]) .tab {
      border-bottom-color: var(--color-border-default);
    }

    :host([tab-style='minimal'][orientation='vertical'][disabled]) .tab {
      border-inline-start-color: var(--color-border-default);
    }

    /* ===== LABEL ===== */

    .label {
      font-size: var(--type-ui-label-md-size);
      font-weight: var(--type-ui-label-md-weight);
      line-height: var(--type-ui-label-md-line-height);
      letter-spacing: var(--type-ui-label-md-letter-spacing);
      color: var(--color-text-subtle);
      font-family: var(--type-ui-label-md-family);
      white-space: nowrap;
    }

    /* Vertical labels wrap instead of forcing the tablist's fit-content width
       past whatever the consumer's layout allocates — nowrap's lack of break
       opportunities was making min-content == max-content, which defeated
       fit-content's ability to shrink at all. break-word guards the
       single-unbreakable-word edge case (e.g. a long acronym). */
    :host([orientation='vertical']) .label {
      white-space: normal;
      overflow-wrap: break-word;
    }

    :host([tab-style='minimal'][state='hover']) .label,
    :host([tab-style='minimal']:hover:not([disabled]):not([active])) .label,
    :host([tab-style='fill'][state='hover']) .label,
    :host([tab-style='fill']:hover:not([disabled]):not([active])) .label {
      color: var(--color-text-default);
    }

    /* --color-text-on-primary, not --color-text-on-emphasis. The active fill background is
       --color-action-solid, which resolves to --color-primary-9 — and that step inverts to a
       light tint in dark mode. --color-text-on-emphasis is deliberately fixed at #ffffff in
       every theme and mode (same rationale as --color-overlay-scrim-dark), so white-on-light-tint
       measured 4.17–4.19:1 against the 4.5:1 floor in all four dark themes.
       --color-text-on-primary is per-theme and inverts with the palette, which is why
       mms-button — same background token — has always passed. Light mode is unaffected: both
       tokens resolve to #ffffff there. Same defect class as DS-108. */
    :host([tab-style='fill'][active]) .label {
      color: var(--color-text-on-primary);
      font-weight: var(--font-weight-bold);
    }

    :host([tab-style='minimal'][active]) .label {
      color: var(--color-text-default);
      font-weight: var(--font-weight-bold);
    }

    :host([disabled]) .label {
      color: var(--color-disabled-text);
    }

    /* ===== ICON ===== */

    .icon {
      color: var(--color-text-subtle);
    }

    :host([tab-style='minimal']:hover:not([disabled]):not([active])) .icon,
    :host([tab-style='fill']:hover:not([disabled]):not([active])) .icon {
      color: var(--color-text-default);
    }

    /* Matches the .label rule above — see the reasoning there. */
    :host([tab-style='fill'][active]) .icon {
      color: var(--color-text-on-primary);
    }

    :host([tab-style='minimal'][active]) .icon {
      color: var(--color-text-default);
    }

    :host([disabled]) .icon {
      color: var(--color-disabled-stroke);
    }

    /* ═══════════════════════════════════════════════════════════════════════
       SIZE VARIANTS
       ═══════════════════════════════════════════════════════════════════════ */
    :host([size='lg']) .tab {
      padding: var(--spacing-md1);
    }

    :host([size='lg']) .label {
      font-size: var(--type-ui-label-lg-size);
      line-height: var(--type-ui-label-lg-line-height);
      letter-spacing: var(--type-ui-label-lg-letter-spacing);
    }

    /* lg bumps to --icon-size-lg (24px, up from --icon-size-md's 20px) to
       keep pace with the label's 16px->18px jump from the DS-060 token
       rename — matches the md tier's ~1.25x icon-to-text ratio instead of
       shrinking it. */
    :host([size='lg']) .icon {
      width: var(--icon-size-lg);
      height: var(--icon-size-lg);
    }

    /* ═══════════════════════════════════════════════════════════════════════
       DENSITY VARIANTS
       Compact density reduces tab padding for tighter UI. Set on the parent
       mms-tabs — it propagates data-density to each tab item.
       ═══════════════════════════════════════════════════════════════════════ */
    :host([data-density='compact']) .tab {
      padding: var(--spacing-xs2);
    }

    :host([data-density='compact'][orientation='horizontal']) .tab {
      padding-top: calc(var(--spacing-xs2) + var(--spacing-xs1));
    }
  `]}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this._handleClick),this.addEventListener(`keydown`,this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._handleClick),this.removeEventListener(`keydown`,this._handleKeyDown)}willUpdate(e){super.willUpdate(e),(e.has(`active`)||e.has(`disabled`)||e.has(`label`)||e.has(`panelId`))&&(this.setAttribute(`role`,`tab`),this.setAttribute(`aria-selected`,this.active?`true`:`false`),this.setAttribute(`aria-label`,this.label??this.localize.term(`tab`)),this.panelId?this.setAttribute(`aria-controls`,this.panelId):this.removeAttribute(`aria-controls`),this.disabled?(this.setAttribute(`aria-disabled`,`true`),this.removeAttribute(`tabindex`)):(this.removeAttribute(`aria-disabled`),this.setAttribute(`tabindex`,this.active?`0`:`-1`)))}render(){return i`
      <div class="tab">
        ${this.icon?i`<mms-icon class="icon" name=${this.icon} size="sm" weight="fill"></mms-icon>`:t}
        ${this.hideLabel?t:i`<span class="label">${this.label??this.localize.term(`tab`)}</span>`}
      </div>
    `}},d([s({type:String})],y.prototype,`label`,void 0),d([s({type:String})],y.prototype,`icon`,void 0),d([s({type:Boolean,reflect:!0,attribute:`hide-label`})],y.prototype,`hideLabel`,void 0),d([s({type:Boolean,reflect:!0})],y.prototype,`active`,void 0),d([s({type:Boolean,reflect:!0})],y.prototype,`disabled`,void 0),d([s({type:String,reflect:!0,attribute:`tab-style`})],y.prototype,`tabStyle`,void 0),d([s({type:String,reflect:!0})],y.prototype,`roundness`,void 0),d([s({type:String,reflect:!0})],y.prototype,`orientation`,void 0),d([s({type:String,reflect:!0})],y.prototype,`size`,void 0),d([s({type:String,attribute:`panel-id`})],y.prototype,`panelId`,void 0),d([s({type:String,reflect:!0})],y.prototype,`state`,void 0),y=d([m(`mms-tabs-item`)],y)})),x,S=e((()=>{a(),o(),g(),u(),b(),_(),f(),x=class extends r{constructor(...e){super(...e),this.localize=new v(this),this.activeIndex=0,this.orientation=`horizontal`,this.tabStyle=`minimal`,this.roundness=`subtle`,this.fullWidth=!1,this.iconOnly=!1,this.size=`md`,this._items=[],this._indicatorStyle=``,this._authoredOrientation=this.orientation,this._collapseWriteInFlight=!1,this._hasCompletedFirstUpdate=!1,this._equalizeQueue=Promise.resolve(),this._handleSlotChange=()=>{this._propagateToItems(),requestAnimationFrame(()=>{this._equalizeTabWidths().then(()=>this._updateIndicator())})},this._handleTabSelect=e=>{let t=e.target,n=this._items.indexOf(t);n<0||n===this.activeIndex||(this.activeIndex=n,this.dispatchEvent(new CustomEvent(`tab-change`,{bubbles:!0,composed:!0,detail:{index:n,label:t.resolvedLabel}})))},this._handleKeyDown=e=>{let t=this._items,n=t.map((e,t)=>e.disabled?-1:t).filter(e=>e>=0);if(n.length===0)return;let r=n.indexOf(this.activeIndex),i=r,a=this.orientation===`vertical`?`ArrowDown`:`ArrowRight`,o=this.orientation===`vertical`?`ArrowUp`:`ArrowLeft`;switch(e.key){case a:e.preventDefault(),i=r<0?0:(r+1)%n.length;break;case o:e.preventDefault(),i=r<0?n.length-1:(r-1+n.length)%n.length;break;case`Home`:e.preventDefault(),i=0;break;case`End`:e.preventDefault(),i=n.length-1;break;default:return}let s=n[i];s!==this.activeIndex&&(this.activeIndex=s,t[s].focus(),this.dispatchEvent(new CustomEvent(`tab-change`,{bubbles:!0,composed:!0,detail:{index:s,label:t[s].resolvedLabel}})))}}static{this.styles=[c,h,n`
    :host {
      display: block;
      position: relative;
      /* max-width defaults to none — fit-content already caps growth to the
         widest label's natural size. The custom property is an escape hatch
         for consumers who want a firmer cap than that (forcing wrap to kick
         in earlier), not a default constraint. Defined here (rather than
         only as the var()'s fallback below) so an outer document rule can
         override it — normal shadow-DOM cascade — and so this stays a
         recognized token reference for validate:tokens. */
      --mms-tabs-vertical-max-width: none;
    }

    .tablist {
      display: flex;
      position: relative;
    }

    :host([orientation='vertical']) .tablist {
      flex-direction: column;
      width: fit-content;
      max-width: var(--mms-tabs-vertical-max-width);
    }

    :host([orientation='horizontal']) .tablist {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    :host([orientation='horizontal']) .tablist::-webkit-scrollbar {
      display: none;
    }

    :host([orientation='horizontal']) .tablist ::slotted(mms-tabs-item) {
      flex-shrink: 0;
    }

    :host([full-width]) .tablist ::slotted(mms-tabs-item) {
      flex: 1 1 0;
    }

    .indicator {
      position: absolute;
      background: var(--color-action-solid);
      transition: left var(--motion-duration-moderate) var(--motion-easing-standard),
        width var(--motion-duration-moderate) var(--motion-easing-standard),
        top var(--motion-duration-moderate) var(--motion-easing-standard),
        height var(--motion-duration-moderate) var(--motion-easing-standard);
    }

    /* -0.5px centers the 3px indicator on the 2px resting border's midpoint
       (mms-tabs-item.component.ts's border-bottom/border-left width) rather
       than flush-aligning and overshooting upward past it. */
    :host([tab-style='minimal'][orientation='horizontal']) .indicator {
      bottom: calc((2px - 3px) / 2);
      height: 3px;
    }

    :host([tab-style='minimal'][orientation='vertical']) .indicator {
      inset-inline-start: calc((2px - 3px) / 2);
      width: 3px;
    }

    /* Fill style shows selection via each tab's own background — no separate indicator */
    :host([tab-style='fill']) .indicator {
      display: none;
    }
  `]}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this._handleKeyDown),this._resizeObserver=new ResizeObserver(e=>{let t=e[0]?.contentRect.width;t!==void 0&&this._handleResize(t)}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this._handleKeyDown),this._resizeObserver?.disconnect()}_setCollapsedOrientation(e){this._collapseWriteInFlight=!0,this.orientation=e,this.dispatchEvent(new CustomEvent(`tab-orientation-change`,{bubbles:!0,composed:!0,detail:{orientation:e,reason:e===`horizontal`?`collapse`:`expand`}}))}_handleResize(e){if(this.collapseBreakpoint===void 0||this._authoredOrientation!==`vertical`)return;let t=this.orientation===`horizontal`,n=e<this.collapseBreakpoint;n&&!t?this._setCollapsedOrientation(`horizontal`):!n&&t&&this._setCollapsedOrientation(`vertical`)}updated(e){super.updated(e);let t=!this._hasCompletedFirstUpdate;this._hasCompletedFirstUpdate=!0,e.has(`orientation`)&&!this._collapseWriteInFlight&&(this._authoredOrientation=this.orientation),this._collapseWriteInFlight=!1,(e.has(`activeIndex`)||e.has(`orientation`)||e.has(`tabStyle`)||e.has(`iconOnly`)||e.has(`label`)||e.has(`size`)||e.has(`roundness`)||e.has(`density`))&&this._propagateToItems(),(e.has(`activeIndex`)||e.has(`orientation`)||e.has(`tabStyle`)||e.has(`iconOnly`)||e.has(`fullWidth`)||e.has(`size`))&&requestAnimationFrame(()=>{this._equalizeTabWidths().then(()=>{this._updateIndicator(),e.has(`activeIndex`)&&!t&&this._scrollActiveIntoView()})})}_getItems(){let e=this.shadowRoot?.querySelector(`slot`);return e?e.assignedElements({flatten:!0}).filter(e=>e.tagName===`MMS-TABS-ITEM`):[]}_propagateToItems(){let e=this._getItems();this._items=e,e.forEach((e,t)=>{e.active=t===this.activeIndex,e.orientation=this.orientation,e.tabStyle=this.tabStyle,e.roundness=this.roundness,e.hideLabel=this.iconOnly,e.size=this.size,this.density?e.setAttribute(`data-density`,this.density):e.removeAttribute(`data-density`)})}_updateIndicator(){let e=this._items[this.activeIndex];if(!e||e.disabled){this._indicatorStyle=`display: none`;return}this.orientation===`vertical`?this._indicatorStyle=`top: ${e.offsetTop}px; height: ${e.offsetHeight}px`:this._indicatorStyle=`left: ${e.offsetLeft}px; width: ${e.offsetWidth}px`}_equalizeTabWidths(){return this._equalizeQueue=this._equalizeQueue.then(()=>this._doEqualizeTabWidths()),this._equalizeQueue}async _doEqualizeTabWidths(){if(this.fullWidth||this.orientation===`vertical`){this._items.forEach(e=>{e.style.minWidth=``});return}if(this._items.length===0)return;await(document.fonts?.ready??Promise.resolve());let e=this._items.map(e=>e.active);this._items.forEach(e=>{e.style.minWidth=``,e.active=!0}),await Promise.all(this._items.map(e=>e.updateComplete)),this.offsetWidth;let t=this._items.reduce((e,t)=>Math.max(e,t.offsetWidth),0);this._items.forEach((t,n)=>{t.active=e[n]}),await Promise.all(this._items.map(e=>e.updateComplete)),this._items.forEach(e=>{e.style.minWidth=t>0?`${t}px`:``})}_scrollActiveIntoView(){this._items[this.activeIndex]?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})}render(){return i`
      <div
        class="tablist"
        role="tablist"
        tabindex="-1"
        aria-label=${this.label??this.localize.term(`tabs`)}
        aria-orientation=${this.orientation}
        @tab-select=${this._handleTabSelect}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
        <div class="indicator" style=${this._indicatorStyle}></div>
      </div>
    `}},d([s({type:Number,reflect:!0,attribute:`active-index`})],x.prototype,`activeIndex`,void 0),d([s({type:String,reflect:!0})],x.prototype,`orientation`,void 0),d([s({type:String,reflect:!0,attribute:`tab-style`})],x.prototype,`tabStyle`,void 0),d([s({type:String,reflect:!0})],x.prototype,`roundness`,void 0),d([s({type:Boolean,reflect:!0,attribute:`full-width`})],x.prototype,`fullWidth`,void 0),d([s({type:Boolean,reflect:!0,attribute:`icon-only`})],x.prototype,`iconOnly`,void 0),d([s({type:String,reflect:!0})],x.prototype,`size`,void 0),d([s({type:String})],x.prototype,`label`,void 0),d([s({type:String,attribute:`data-density`})],x.prototype,`density`,void 0),d([s({type:Number,attribute:`collapse-breakpoint`})],x.prototype,`collapseBreakpoint`,void 0),d([l()],x.prototype,`_indicatorStyle`,void 0),x=d([m(`mms-tabs`)],x)}));export{b as n,S as t};