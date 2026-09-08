import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,s as d,t as f}from"./decorate-Bygya6Tu.js";import{t as p}from"./mms-icon.component-BJPQucU2.js";import{a as m,o as h,r as g,t as _}from"./a11y-outcome-DdXFaPju.js";var v,y=e((()=>{o(),u(),p(),l(),v=class extends i{constructor(...e){super(...e),this.label=`Tab`,this.hideLabel=!1,this.active=!1,this.disabled=!1,this.tabStyle=`minimal`,this.roundness=`subtle`,this.orientation=`horizontal`,this.size=`md`,this.panelId=``,this.state=`default`,this._handleClick=()=>{this.disabled||this.dispatchEvent(new CustomEvent(`tab-select`,{bubbles:!0,composed:!0,detail:{label:this.label}}))},this._handleKeyDown=e=>{this.disabled||(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._handleClick())}}static{this.styles=r`
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
      padding-left: var(--spacing-md2);
      padding-right: var(--spacing-lg1);
    }

    :host([orientation='vertical'][data-density='compact']) .tab {
      padding-top: var(--spacing-sm2);
      padding-bottom: var(--spacing-sm2);
      padding-left: var(--spacing-md1);
      padding-right: var(--spacing-md2);
    }

    :host([orientation='vertical'][size='lg']) .tab {
      padding-top: var(--spacing-md2);
      padding-bottom: var(--spacing-md2);
      padding-left: var(--spacing-lg1);
      padding-right: var(--spacing-lg2);
    }

    :host([orientation='vertical'][size='lg'][data-density='compact']) .tab {
      padding-top: var(--spacing-md1);
      padding-bottom: var(--spacing-md1);
      padding-left: var(--spacing-md2);
      padding-right: var(--spacing-lg1);
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
      border-left: 4px solid var(--color-border-default);
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
      border-left-color: var(--color-border-interactive-hover);
    }

    :host([tab-style='fill'][orientation='horizontal'][active]) .tab {
      background: var(--color-action-solid);
      border-bottom-color: var(--color-action-solid-pressed);
    }

    :host([tab-style='fill'][orientation='vertical'][active]) .tab {
      background: var(--color-action-solid);
      border-left-color: var(--color-action-solid-pressed);
    }

    :host([tab-style='fill'][orientation='horizontal'][disabled]) .tab {
      background: var(--color-disabled-surface);
      border-bottom-color: var(--color-border-default);
    }

    :host([tab-style='fill'][orientation='vertical'][disabled]) .tab {
      background: var(--color-disabled-surface);
      border-left-color: var(--color-border-default);
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
      border-left: 2px solid var(--color-border-default);
    }

    :host([tab-style='minimal'][orientation='horizontal'][state='hover']) .tab,
    :host([tab-style='minimal'][orientation='horizontal']:hover:not([disabled]):not([active])) .tab {
      border-bottom-color: var(--color-border-interactive-hover);
    }

    :host([tab-style='minimal'][orientation='vertical'][state='hover']) .tab,
    :host([tab-style='minimal'][orientation='vertical']:hover:not([disabled]):not([active])) .tab {
      border-left-color: var(--color-border-interactive-hover);
    }

    /* Minimal - active: border stays default; the sliding indicator on mms-tabs shows selection */

    :host([tab-style='minimal'][orientation='horizontal'][disabled]) .tab {
      border-bottom-color: var(--color-border-default);
    }

    :host([tab-style='minimal'][orientation='vertical'][disabled]) .tab {
      border-left-color: var(--color-border-default);
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
       every theme and mode (same rationale as --color-overlay-scrim), so white-on-light-tint
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
  `}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this._handleClick),this.addEventListener(`keydown`,this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._handleClick),this.removeEventListener(`keydown`,this._handleKeyDown)}willUpdate(e){super.willUpdate(e),(e.has(`active`)||e.has(`disabled`)||e.has(`label`)||e.has(`panelId`))&&(this.setAttribute(`role`,`tab`),this.setAttribute(`aria-selected`,this.active?`true`:`false`),this.setAttribute(`aria-label`,this.label),this.panelId?this.setAttribute(`aria-controls`,this.panelId):this.removeAttribute(`aria-controls`),this.disabled?(this.setAttribute(`aria-disabled`,`true`),this.removeAttribute(`tabindex`)):(this.removeAttribute(`aria-disabled`),this.setAttribute(`tabindex`,this.active?`0`:`-1`)))}render(){return a`
      <div class="tab">
        ${this.icon?a`<mms-icon class="icon" name=${this.icon} size="sm" weight="fill"></mms-icon>`:n}
        ${this.hideLabel?n:a`<span class="label">${this.label}</span>`}
      </div>
    `}},f([c({type:String})],v.prototype,`label`,void 0),f([c({type:String})],v.prototype,`icon`,void 0),f([c({type:Boolean,reflect:!0,attribute:`hide-label`})],v.prototype,`hideLabel`,void 0),f([c({type:Boolean,reflect:!0})],v.prototype,`active`,void 0),f([c({type:Boolean,reflect:!0})],v.prototype,`disabled`,void 0),f([c({type:String,reflect:!0,attribute:`tab-style`})],v.prototype,`tabStyle`,void 0),f([c({type:String,reflect:!0})],v.prototype,`roundness`,void 0),f([c({type:String,reflect:!0})],v.prototype,`orientation`,void 0),f([c({type:String,reflect:!0})],v.prototype,`size`,void 0),f([c({type:String,attribute:`panel-id`})],v.prototype,`panelId`,void 0),f([c({type:String,reflect:!0})],v.prototype,`state`,void 0),v=f([s(`mms-tabs-item`)],v)})),b,x=e((()=>{o(),u(),y(),l(),b=class extends i{constructor(...e){super(...e),this.activeIndex=0,this.orientation=`horizontal`,this.tabStyle=`minimal`,this.roundness=`subtle`,this.fullWidth=!1,this.iconOnly=!1,this.size=`md`,this.label=`Tabs`,this._items=[],this._indicatorStyle=``,this._authoredOrientation=this.orientation,this._collapseWriteInFlight=!1,this._hasCompletedFirstUpdate=!1,this._equalizeQueue=Promise.resolve(),this._handleSlotChange=()=>{this._propagateToItems(),requestAnimationFrame(()=>{this._equalizeTabWidths().then(()=>this._updateIndicator())})},this._handleTabSelect=e=>{let t=e.target,n=this._items.indexOf(t);n<0||n===this.activeIndex||(this.activeIndex=n,this.dispatchEvent(new CustomEvent(`tab-change`,{bubbles:!0,composed:!0,detail:{index:n,label:t.label}})))},this._handleKeyDown=e=>{let t=this._items,n=t.map((e,t)=>e.disabled?-1:t).filter(e=>e>=0);if(n.length===0)return;let r=n.indexOf(this.activeIndex),i=r,a=this.orientation===`vertical`?`ArrowDown`:`ArrowRight`,o=this.orientation===`vertical`?`ArrowUp`:`ArrowLeft`;switch(e.key){case a:e.preventDefault(),i=r<0?0:(r+1)%n.length;break;case o:e.preventDefault(),i=r<0?n.length-1:(r-1+n.length)%n.length;break;case`Home`:e.preventDefault(),i=0;break;case`End`:e.preventDefault(),i=n.length-1;break;default:return}let s=n[i];s!==this.activeIndex&&(this.activeIndex=s,t[s].focus(),this.dispatchEvent(new CustomEvent(`tab-change`,{bubbles:!0,composed:!0,detail:{index:s,label:t[s].label}})))}}static{this.styles=r`
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
      left: calc((2px - 3px) / 2);
      width: 3px;
    }

    /* Fill style shows selection via each tab's own background — no separate indicator */
    :host([tab-style='fill']) .indicator {
      display: none;
    }
  `}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this._handleKeyDown),this._resizeObserver=new ResizeObserver(e=>{let t=e[0]?.contentRect.width;t!==void 0&&this._handleResize(t)}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this._handleKeyDown),this._resizeObserver?.disconnect()}_setCollapsedOrientation(e){this._collapseWriteInFlight=!0,this.orientation=e,this.dispatchEvent(new CustomEvent(`tab-orientation-change`,{bubbles:!0,composed:!0,detail:{orientation:e,reason:e===`horizontal`?`collapse`:`expand`}}))}_handleResize(e){if(this.collapseBreakpoint===void 0||this._authoredOrientation!==`vertical`)return;let t=this.orientation===`horizontal`,n=e<this.collapseBreakpoint;n&&!t?this._setCollapsedOrientation(`horizontal`):!n&&t&&this._setCollapsedOrientation(`vertical`)}updated(e){super.updated(e);let t=!this._hasCompletedFirstUpdate;this._hasCompletedFirstUpdate=!0,e.has(`orientation`)&&!this._collapseWriteInFlight&&(this._authoredOrientation=this.orientation),this._collapseWriteInFlight=!1,(e.has(`activeIndex`)||e.has(`orientation`)||e.has(`tabStyle`)||e.has(`iconOnly`)||e.has(`label`)||e.has(`size`)||e.has(`roundness`)||e.has(`density`))&&this._propagateToItems(),(e.has(`activeIndex`)||e.has(`orientation`)||e.has(`tabStyle`)||e.has(`iconOnly`)||e.has(`fullWidth`)||e.has(`size`))&&requestAnimationFrame(()=>{this._equalizeTabWidths().then(()=>{this._updateIndicator(),e.has(`activeIndex`)&&!t&&this._scrollActiveIntoView()})})}_getItems(){let e=this.shadowRoot?.querySelector(`slot`);return e?e.assignedElements({flatten:!0}).filter(e=>e.tagName===`MMS-TABS-ITEM`):[]}_propagateToItems(){let e=this._getItems();this._items=e,e.forEach((e,t)=>{e.active=t===this.activeIndex,e.orientation=this.orientation,e.tabStyle=this.tabStyle,e.roundness=this.roundness,e.hideLabel=this.iconOnly,e.size=this.size,this.density?e.setAttribute(`data-density`,this.density):e.removeAttribute(`data-density`)})}_updateIndicator(){let e=this._items[this.activeIndex];if(!e||e.disabled){this._indicatorStyle=`display: none`;return}this.orientation===`vertical`?this._indicatorStyle=`top: ${e.offsetTop}px; height: ${e.offsetHeight}px`:this._indicatorStyle=`left: ${e.offsetLeft}px; width: ${e.offsetWidth}px`}_equalizeTabWidths(){return this._equalizeQueue=this._equalizeQueue.then(()=>this._doEqualizeTabWidths()),this._equalizeQueue}async _doEqualizeTabWidths(){if(this.fullWidth||this.orientation===`vertical`){this._items.forEach(e=>{e.style.minWidth=``});return}if(this._items.length===0)return;await(document.fonts?.ready??Promise.resolve());let e=this._items.map(e=>e.active);this._items.forEach(e=>{e.style.minWidth=``,e.active=!0}),await Promise.all(this._items.map(e=>e.updateComplete)),this.offsetWidth;let t=this._items.reduce((e,t)=>Math.max(e,t.offsetWidth),0);this._items.forEach((t,n)=>{t.active=e[n]}),await Promise.all(this._items.map(e=>e.updateComplete)),this._items.forEach(e=>{e.style.minWidth=t>0?`${t}px`:``})}_scrollActiveIntoView(){this._items[this.activeIndex]?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})}render(){return a`
      <div
        class="tablist"
        role="tablist"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @tab-select=${this._handleTabSelect}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
        <div class="indicator" style=${this._indicatorStyle}></div>
      </div>
    `}},f([c({type:Number,reflect:!0,attribute:`active-index`})],b.prototype,`activeIndex`,void 0),f([c({type:String,reflect:!0})],b.prototype,`orientation`,void 0),f([c({type:String,reflect:!0,attribute:`tab-style`})],b.prototype,`tabStyle`,void 0),f([c({type:String,reflect:!0})],b.prototype,`roundness`,void 0),f([c({type:Boolean,reflect:!0,attribute:`full-width`})],b.prototype,`fullWidth`,void 0),f([c({type:Boolean,reflect:!0,attribute:`icon-only`})],b.prototype,`iconOnly`,void 0),f([c({type:String,reflect:!0})],b.prototype,`size`,void 0),f([c({type:String})],b.prototype,`label`,void 0),f([c({type:String,attribute:`data-density`})],b.prototype,`density`,void 0),f([c({type:Number,attribute:`collapse-breakpoint`})],b.prototype,`collapseBreakpoint`,void 0),f([d()],b.prototype,`_indicatorStyle`,void 0),b=f([s(`mms-tabs`)],b)})),S=t({LayoutBehavior:()=>A,Overview:()=>k,PlaygroundStory:()=>M,__namedExportsOrder:()=>N,default:()=>w});function C(e){let t=`Tab ${e}`;return{[`tab${e}Label`]:{name:`Label`,control:`text`,description:`Tab ${e} label text (also the accessible name)`,table:{category:t}},[`tab${e}Icon`]:{name:`Icon`,control:`select`,options:j,description:`Tab ${e} leading icon ("none" for no icon). This is a sample of the full icon set for demo purposes only — any icon in the Phosphor registry can be used, not just the options listed here.`,table:{category:t}},[`tab${e}Disabled`]:{name:`Disabled`,control:`boolean`,description:`Disables tab ${e}`,table:{category:t}}}}var w,T,E,D,O,k,A,j,M,N,P=e((()=>{o(),x(),y(),m(),_(),w={title:`Content Display/Tabs`,tags:[`!autodocs`]},T={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},E=`680px`,D=`960px`,O={frame:`border: 2px dashed rgba(128,128,128,0.35); border-radius: 8px; padding: 1.5rem; position: relative; margin-bottom: 2rem;`,frameLabel:`position: absolute; top: -0.7rem; left: 1rem; background: var(--color-surface-default, #fff); padding: 0 0.5rem; font-size: 0.75rem; font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;`,callout:e=>`background: ${e}0d; border-left: 3px solid ${e}; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;`,tierCard:`flex: 1; min-width: 200px; border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; padding: 1rem;`,tierLabel:`font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6; margin: 0 0 0.375rem;`,caption:`font-size: 0.8125rem; opacity: 0.65; text-align: center; margin: 0.5rem 0 0;`},k={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${D}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${T.h1}">Tabs</h1>
      <p style="${T.body} opacity: 0.85; max-width: ${E}; margin-bottom: 2rem;">
        A tablist of <code style="${T.monoSm}">mms-tabs-item</code> elements implementing the WAI-ARIA
        tabs pattern — roving tabindex, arrow-key navigation, and a sliding selection indicator for
        the minimal style. <code style="${T.monoSm}">mms-tabs</code> manages the tablist only; consumers
        own the associated tabpanel(s).
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Basic usage</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        Slot <code style="${T.monoSm}">mms-tabs-item</code> elements into <code style="${T.monoSm}">mms-tabs</code>.
        The first tab is active by default; the minimal style (default) shows selection via a sliding indicator.
      </p>

      <div style="${O.frame}">
        <mms-tabs label="Basic usage example">
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details"></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Tab style</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">tab-style="minimal"</code> (default) shows selection via a sliding indicator border.
        <code style="${T.monoSm}">tab-style="fill"</code> shows selection via a solid background on the active tab —
        no separate indicator is rendered.
      </p>

      <div style="${O.frame}">
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <p style="${T.caption} margin-bottom: 0.5rem;"><strong>Minimal (default)</strong></p>
            <mms-tabs label="Minimal style example" tab-style="minimal">
              <mms-tabs-item label="Overview"></mms-tabs-item>
              <mms-tabs-item label="Details"></mms-tabs-item>
              <mms-tabs-item label="History"></mms-tabs-item>
            </mms-tabs>
          </div>
          <div>
            <p style="${T.caption} margin-bottom: 0.5rem;"><strong>Fill</strong></p>
            <mms-tabs label="Fill style example" tab-style="fill">
              <mms-tabs-item label="Overview"></mms-tabs-item>
              <mms-tabs-item label="Details"></mms-tabs-item>
              <mms-tabs-item label="History"></mms-tabs-item>
            </mms-tabs>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Orientation</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">orientation="vertical"</code> stacks tabs in a column and switches arrow-key
        navigation from Left/Right to Up/Down. See
        <a href="?path=/docs/content-display-tabs--layout-behavior" style="color: inherit;">Layout &amp; Behavior</a>
        for placement guidance and how a vertical tablist responds as its allocated width narrows.
      </p>

      <div style="${O.frame}">
        <mms-tabs label="Vertical orientation example" orientation="vertical">
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details"></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">With icons</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        The <code style="${T.monoSm}">icon</code> prop adds a leading icon to a tab.
      </p>

      <div style="${O.frame}">
        <mms-tabs label="Icon example">
          <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
          <mms-tabs-item label="Settings" icon="gear"></mms-tabs-item>
          <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Icon-only</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">icon-only</code> on <code style="${T.monoSm}">mms-tabs</code> hides every
        tab's visible label while keeping it as the accessible name (<code style="${T.monoSm}">aria-label</code>).
        Each tab needs its own <code style="${T.monoSm}">icon</code> prop set.
      </p>

      <div style="${O.frame}">
        <mms-tabs label="Icon-only example" icon-only>
          <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
          <mms-tabs-item label="Settings" icon="gear"></mms-tabs-item>
          <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Text size</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">size="lg"</code> increases label and icon size for contexts that need
        more visual weight than the default <code style="${T.monoSm}">md</code> size.
      </p>

      <div style="${O.frame}">
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <p style="${T.caption} margin-bottom: 0.5rem;"><strong>Medium (default)</strong></p>
            <mms-tabs label="Medium size example">
              <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
              <mms-tabs-item label="Details" icon="gear"></mms-tabs-item>
              <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
            </mms-tabs>
          </div>
          <div>
            <p style="${T.caption} margin-bottom: 0.5rem;"><strong>Large</strong></p>
            <mms-tabs label="Large size example" size="lg">
              <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
              <mms-tabs-item label="Details" icon="gear"></mms-tabs-item>
              <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
            </mms-tabs>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Full width</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">full-width</code> stretches every tab to share the tablist's width equally.
      </p>

      <div style="${O.frame}">
        <mms-tabs label="Full width example" full-width>
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details"></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Disabled tab</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">disabled</code> is set per-tab on an individual <code style="${T.monoSm}">mms-tabs-item</code>
        — there is no group-level disabled prop on <code style="${T.monoSm}">mms-tabs</code>. A disabled tab is
        removed from the roving tabindex and skipped by arrow-key navigation.
      </p>

      <div style="${O.frame}">
        <mms-tabs label="Disabled tab example">
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details" disabled></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Props reference</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        Every configurable prop on <code style="${T.monoSm}">mms-tabs</code> and <code style="${T.monoSm}">mms-tabs-item</code>,
        including the global props inherited by every mms component. All are exercised on the
        <a href="?path=/docs/content-display-tabs--playground" style="color: inherit;">Playground</a> page.
      </p>

      <h3 style="${T.h3}">mms-tabs</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Prop</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Type</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Default</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">label</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">string</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">'Tabs'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Accessible name for the tablist (<code style="${T.monoSm}">aria-label</code>)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">active-index</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">number</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">0</code></td>
            <td style="padding: 0.5rem 0.75rem;">Index of the currently selected tab</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">orientation</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">'horizontal' | 'vertical'</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">'horizontal'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Layout orientation; switches arrow-key axis</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">tab-style</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">'minimal' | 'fill'</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">'minimal'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Visual style propagated to all tabs</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">full-width</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">boolean</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">false</code></td>
            <td style="padding: 0.5rem 0.75rem;">Stretches tabs to fill the available width equally</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">icon-only</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">boolean</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">false</code></td>
            <td style="padding: 0.5rem 0.75rem;">Forces every tab into icon-only mode, hiding all labels</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">size</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">'md' | 'lg'</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">'md'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Text size, propagated to all tabs</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">roundness</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">'boxed' | 'subtle' | 'rounded'</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">'subtle'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Corner radius on the active/hover tab's leading corners, propagated to all tabs. <code style="${T.monoSm}">fill</code> style only.</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">collapse-breakpoint</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">number</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">undefined</code></td>
            <td style="padding: 0.5rem 0.75rem;">Host width (px) below which a vertically-authored tablist auto-switches to horizontal. Undefined disables auto-collapse. See <a href="?path=/docs/content-display-tabs--layout-behavior" style="color: inherit;">Layout &amp; Behavior</a>.</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${T.h3}">mms-tabs CSS custom properties</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Property</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Default</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">--mms-tabs-vertical-max-width</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">none</code></td>
            <td style="padding: 0.5rem 0.75rem;">Firmer cap on a vertical tablist's <code style="${T.monoSm}">fit-content</code> width, for consumers who want label-wrap to kick in earlier than the widest label's natural size would trigger it.</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${T.h3}">mms-tabs-item</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Prop</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Type</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Default</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">label</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">string</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">'Tab'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Tab label text; also the accessible name</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">icon</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">IconName</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">undefined</code></td>
            <td style="padding: 0.5rem 0.75rem;">Optional leading icon</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">hide-label</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">boolean</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">false</code></td>
            <td style="padding: 0.5rem 0.75rem;">Hides the visible label (icon-only tab); normally set via the parent's <code style="${T.monoSm}">icon-only</code></td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">disabled</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">boolean</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">false</code></td>
            <td style="padding: 0.5rem 0.75rem;">Disables selection and keyboard/pointer interaction; skipped by arrow-key navigation</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">panel-id</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">string</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">''</code></td>
            <td style="padding: 0.5rem 0.75rem;">Id of the associated tabpanel — sets <code style="${T.monoSm}">aria-controls</code></td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">active</code>, <code style="${T.monoSm}">tab-style</code>, <code style="${T.monoSm}">orientation</code>, <code style="${T.monoSm}">size</code></td>
            <td style="padding: 0.5rem 0.75rem;">—</td>
            <td style="padding: 0.5rem 0.75rem;">—</td>
            <td style="padding: 0.5rem 0.75rem;">Managed by the parent <code style="${T.monoSm}">mms-tabs</code> — do not set directly</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${T.h3}">Global props</h3>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1rem;">
        Inherited by every mms component per
        <code style="${T.monoSm}">.claude/contracts/global-props.md</code>.
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Attribute</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Values</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">data-theme</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">'default' | 'maximus' | 'va-gov' | 'uss-oh-dvs'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Brand theme (colors + fonts); set on <code style="${T.monoSm}">mms-tabs</code></td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">data-density</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="${T.monoSm}">'default' | 'compact'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Padding density; set on <code style="${T.monoSm}">mms-tabs</code> — it propagates to each tab item</td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${T.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${T.bodySm} margin: 0;">
          <strong>WAI-ARIA Tabs Pattern.</strong> <code style="${T.monoSm}">mms-tabs</code> renders
          <code style="${T.monoSm}">role="tablist"</code>; each slotted <code style="${T.monoSm}">mms-tabs-item</code>
          sets <code style="${T.monoSm}">role="tab"</code>, <code style="${T.monoSm}">aria-selected</code>, and a
          roving <code style="${T.monoSm}">tabindex</code> directly on itself. Consumers own the associated
          tabpanel(s) — set <code style="${T.monoSm}">panel-id</code> on each tab to wire up
          <code style="${T.monoSm}">aria-controls</code>.
        </p>
      </div>

      <h3 style="${T.h3}">WCAG 2.2 AA Compliance</h3>
      ${g(h.tabs.rows)}

      <h3 style="${T.h3}">Screen Reader Behavior</h3>
      <ul style="${T.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces the tab's label, "tab", position (e.g. "1 of 3"), and selected state</li>
        <li style="margin-bottom: 0.5rem;"><strong>Selection:</strong> Announces "selected" as the active tab changes via arrow keys or click</li>
        <li style="margin-bottom: 0.5rem;"><strong>Disabled:</strong> Announces "dimmed"/"unavailable" for a disabled tab; it is skipped by arrow-key navigation</li>
        <li><strong>Icon-only:</strong> Label is still announced via <code style="${T.monoSm}">aria-label</code> even when visually hidden</li>
      </ul>

      <h3 style="${T.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to the active tab / out of the tablist (roving tabindex — only the active tab is in the page tab order)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move selection to the next / previous enabled tab, wrapping at the ends (horizontal orientation)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move selection to the next / previous enabled tab, wrapping at the ends (vertical orientation)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jump to the first / last enabled tab</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused tab (only needed when a tab is reached by means other than arrow keys)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},A={name:`Layout & Behavior`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${D}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Intro -->
      <h1 style="${T.h1}">Layout &amp; Behavior</h1>
      <p style="${T.body} opacity: 0.85; max-width: ${E}; margin-bottom: 2rem;">
        Horizontal tabs need no layout guidance beyond the Overview page — they scroll their own overflow.
        Vertical tabs are different: <code style="${T.monoSm}">mms-tabs</code> doesn't own the surrounding
        layout, so placement and responsiveness are a shared contract between the component and the page
        that hosts it. This page covers that contract.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Placement -->
      <h2 style="${T.h2}">Placement</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1rem;">
        A vertical <code style="${T.monoSm}">mms-tabs</code> sizes itself to
        <code style="${T.monoSm}">fit-content</code> — it takes only as much width as its labels need, and
        never stretches to fill a container. Place it as the sidebar/nav column of a consumer-owned
        two-column grid or flex layout — the same pattern Carbon and Spectrum both use for their vertical
        tabs. mms doesn't ship a two-column layout component, so this is a placement convention, not
        something the component enforces in CSS.
      </p>

      <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px;">
          <p style="${T.bodySm} margin: 0 0 0.5rem; opacity: 0.6; font-weight: 600;">✅ Do</p>
          <pre style="${T.monoSm} background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.3); border-radius: 6px; padding: 0.75rem; margin: 0; overflow-x: auto;"><code>&lt;div class="two-col-layout"&gt;
  &lt;mms-tabs orientation="vertical"&gt;...&lt;/mms-tabs&gt;
  &lt;main&gt;...&lt;/main&gt;
&lt;/div&gt;</code></pre>
        </div>
        <div style="flex: 1; min-width: 240px;">
          <p style="${T.bodySm} margin: 0 0 0.5rem; opacity: 0.6; font-weight: 600;">❌ Don't</p>
          <pre style="${T.monoSm} background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.3); border-radius: 6px; padding: 0.75rem; margin: 0; overflow-x: auto;"><code>&lt;mms-tabs orientation="vertical" full-width&gt;
  ...
&lt;/mms-tabs&gt;
&lt;main&gt;...&lt;/main&gt;</code></pre>
        </div>
      </div>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        <code style="${T.monoSm}">full-width</code> stretches tabs to fill available width equally — it's a
        horizontal-orientation concept (equalizing tab widths across a row) and has no effect on a vertical
        tablist, which always sizes to content.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Responsiveness -->
      <h2 style="${T.h2}">Responsiveness</h2>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1rem;">
        Take a common layout: 30% of the width allocated to vertical tabs, 70% to a content pane that
        updates with the selected tab. As the consumer's column narrows — a resizable panel, a smaller
        viewport, a denser page — a fixed-width vertical tablist with <code style="${T.monoSm}">nowrap</code>
        labels would overflow past its allocated 30% once a label runs out of room. <code style="${T.monoSm}">mms-tabs</code>
        handles this in three tiers:
      </p>

      <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
        <div style="${O.tierCard}">
          <p style="${O.tierLabel}">Tier 1 — Comfortable</p>
          <p style="${T.bodySm} margin: 0; opacity: 0.85;">Default behavior. Labels render on a single line at their natural width.</p>
        </div>
        <div style="${O.tierCard}">
          <p style="${O.tierLabel}">Tier 2 — Wrap</p>
          <p style="${T.bodySm} margin: 0; opacity: 0.85;">As the allocated column narrows past a label's natural width, labels wrap onto multiple lines instead of overflowing. No configuration needed — this is always on.</p>
        </div>
        <div style="${O.tierCard}">
          <p style="${O.tierLabel}">Tier 3 — Collapse</p>
          <p style="${T.bodySm} margin: 0; opacity: 0.85;">Below an optional <code style="${T.monoSm}">collapse-breakpoint</code> (px), the tablist auto-switches to horizontal — ARIA, keyboard, and layout all follow automatically.</p>
        </div>
      </div>

      <div style="${O.frame}">
        <span style="${O.frameLabel}">Drag the ↘ handle on the container to resize — comfortable → wrap</span>
        <div style="box-sizing: border-box; resize: horizontal; overflow: auto; min-width: 480px; max-width: 100%; width: 100%; display: flex; gap: 1rem; height: 280px; margin-top: 0.5rem; border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; padding: 1rem;">
          <div style="flex: 0 0 30%; min-width: 0; border-right: 1px solid rgba(128,128,128,0.2); padding-right: 1rem;">
            <mms-tabs orientation="vertical" label="Section navigation" style="--mms-tabs-vertical-max-width: 100%;">
              <mms-tabs-item label="Overview"></mms-tabs-item>
              <mms-tabs-item label="Provider Directory"></mms-tabs-item>
              <mms-tabs-item label="Appeals &amp; Grievances"></mms-tabs-item>
              <mms-tabs-item label="History"></mms-tabs-item>
            </mms-tabs>
          </div>
          <div style="flex: 1 1 70%; min-width: 0; display: flex; align-items: center; justify-content: center; opacity: 0.5; font-size: 0.875rem;">
            content pane
          </div>
        </div>
      </div>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        No <code style="${T.monoSm}">collapse-breakpoint</code> is set here — this demo is scoped to Tiers 1
        and 2 only, which need no configuration and are always on. Tier 3 needs its own layout, shown below:
        collapsing orientation in place, with nothing else changing, just hides tabs behind horizontal scroll
        instead of helping — worse than wrap, not better.
      </p>

      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1rem;">
        <code style="${T.monoSm}">collapse-breakpoint</code> is a paired contract: set it to the same width
        where the consumer's own layout switches from a side-by-side column to a stacked one. Below that
        width, the now-horizontal tablist needs the full row to itself — otherwise it's just trading one
        overflow problem for another.
      </p>

      <div style="display: flex; gap: 1.5rem; margin-bottom: 1rem; flex-wrap: wrap; align-items: flex-start;">
        <div style="flex: 1; min-width: 260px;">
          <div style="${O.frame} margin-bottom: 0.5rem;">
            <span style="${O.frameLabel}">≥ collapse-breakpoint</span>
            <div style="display: flex; gap: 0.75rem; height: 170px;">
              <div style="width: 170px; border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; padding: 0.75rem;">
                <mms-tabs orientation="vertical" label="Section navigation">
                  <mms-tabs-item label="Overview"></mms-tabs-item>
                  <mms-tabs-item label="Directory"></mms-tabs-item>
                  <mms-tabs-item label="Appeals"></mms-tabs-item>
                </mms-tabs>
              </div>
              <div style="flex: 1; border: 1px dashed rgba(128,128,128,0.3); border-radius: 6px; display: flex; align-items: center; justify-content: center; opacity: 0.5; font-size: 0.8125rem;">
                content
              </div>
            </div>
          </div>
          <p style="${O.caption} margin-top: 0.25rem;">Side-by-side: sidebar + content</p>
        </div>

        <div style="flex: 1; min-width: 260px;">
          <div style="${O.frame} margin-bottom: 0.5rem;">
            <span style="${O.frameLabel}">&lt; collapse-breakpoint</span>
            <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 170px;">
              <div style="border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; padding: 0.5rem;">
                <mms-tabs orientation="horizontal" label="Section navigation">
                  <mms-tabs-item label="Overview"></mms-tabs-item>
                  <mms-tabs-item label="Directory"></mms-tabs-item>
                  <mms-tabs-item label="Appeals"></mms-tabs-item>
                </mms-tabs>
              </div>
              <div style="flex: 1; border: 1px dashed rgba(128,128,128,0.3); border-radius: 6px; display: flex; align-items: center; justify-content: center; opacity: 0.5; font-size: 0.8125rem;">
                content
              </div>
            </div>
          </div>
          <p style="${O.caption} margin-top: 0.25rem;">Stacked: tabs on top, content below</p>
        </div>
      </div>

      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1rem;">
        This is the whole fix — no auto-switch-to-icon-only tier sits between wrap and collapse. Icon-only
        mode remains a manual, author-chosen variant (<code style="${T.monoSm}">icon-only</code>), not an
        automatic responsive step.
      </p>
      <p style="${T.bodySm} opacity: 0.85; max-width: ${E}; margin-bottom: 1.5rem;">
        Because <code style="${T.monoSm}">collapse-breakpoint</code> overwrites the live
        <code style="${T.monoSm}">orientation</code> property to reuse all of its existing ARIA/keyboard/CSS
        behavior for free, the component fires <code style="${T.monoSm}">tab-orientation-change</code>
        whenever it collapses or expands on its own, so a consumer reading <code style="${T.monoSm}">orientation</code>
        back can tell the difference from a value it authored itself:
      </p>
      <pre style="${T.monoSm} background: rgba(128,128,128,0.06); border: 1px solid rgba(128,128,128,0.2); border-radius: 6px; padding: 0.75rem; margin: 0 0 1.5rem; overflow-x: auto;"><code>tabsEl.addEventListener('tab-orientation-change', (e) => {
  // e.detail: { orientation: 'horizontal' | 'vertical', reason: 'collapse' | 'expand' }
});</code></pre>

      <div style="${O.callout(`#F59E0B`)}">
        <p style="${T.bodySm} margin: 0;">
          <strong>Vertical tabs are for in-page section navigation</strong> — dashboard/content sections
          within a single page — not persistent primary/global navigation. Screen-reader users encounter
          the full tab list on every visit, and deep-linking into a specific tab's content is the
          consumer's routing responsibility; <code style="${T.monoSm}">mms-tabs</code> doesn't provide it.
        </p>
      </div>

    </div>
  `},j=[`none`,`house`,`gear`,`clock-counter-clockwise`,`user`,`bell`,`envelope`,`star`],M={name:`Playground`,tags:[`!dev`],args:{orientation:`horizontal`,tabStyle:`minimal`,roundness:`subtle`,fullWidth:!0,iconOnly:!1,size:`md`,label:`Tabs`,activeIndex:0,tabCount:3,tab1Label:`Overview`,tab1Icon:`house`,tab1Disabled:!1,tab2Label:`Details`,tab2Icon:`gear`,tab2Disabled:!1,tab3Label:`History`,tab3Icon:`clock-counter-clockwise`,tab3Disabled:!1,tab4Label:`Messages`,tab4Icon:`envelope`,tab4Disabled:!1,tab5Label:`Profile`,tab5Icon:`user`,tab5Disabled:!1,tab6Label:`Notifications`,tab6Icon:`bell`,tab6Disabled:!1,theme:`maximus`,density:`default`},decorators:[e=>a`
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 100%; max-width: ${D};">
            ${e()}
          </div>
        </div>
      `],argTypes:{orientation:{name:`Orientation`,control:`select`,options:[`horizontal`,`vertical`],description:`Layout orientation`,table:{category:`Visual`}},tabStyle:{name:`Tab style`,control:`select`,options:[`minimal`,`fill`],description:`Visual style propagated to all tabs`,table:{category:`Visual`}},roundness:{name:`Roundness`,control:`select`,options:[`boxed`,`subtle`,`rounded`],description:`Corner radius on the active/hover tab's leading corners. Fill style only.`,table:{category:`Visual`}},fullWidth:{name:`Full width`,control:`boolean`,description:`Stretches tabs to fill the available width equally`,table:{category:`Visual`}},iconOnly:{name:`Icon only`,control:`boolean`,description:`Forces every tab into icon-only mode, hiding all labels`,table:{category:`Visual`}},size:{name:`Size`,control:`select`,options:[`md`,`lg`],description:`Text size, propagated to all tabs`,table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Accessible name for the tablist (aria-label)`,table:{category:`Content`}},activeIndex:{name:`Active index`,control:{type:`number`,min:0,max:5,step:1},description:`Index of the currently selected tab`,table:{category:`Content`}},tabCount:{name:`Tab count`,control:{type:`range`,min:2,max:6,step:1},description:`Number of tabs to render in this demo (the component itself has no cap)`,table:{category:`Content`}},...C(1),...C(2),...C(3),...C(4),...C(5),...C(6),theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects typography and colors)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];r.push(`label="${n.label}"`),n.activeIndex&&r.push(`active-index="${n.activeIndex}"`),n.orientation!==`horizontal`&&r.push(`orientation="${n.orientation}"`),n.tabStyle!==`minimal`&&r.push(`tab-style="${n.tabStyle}"`),n.size&&n.size!==`md`&&r.push(`size="${n.size}"`),n.tabStyle===`fill`&&n.roundness&&n.roundness!==`subtle`&&r.push(`roundness="${n.roundness}"`),n.fullWidth&&r.push(`full-width`),n.iconOnly&&r.push(`icon-only`),n.density===`compact`&&r.push(`data-density="compact"`);let i=e=>{let t=n[`tab${e}Icon`],r=n[`tab${e}Disabled`],i=[`label="${n[`tab${e}Label`]}"`];return t&&t!==`none`&&i.push(`icon="${t}"`),r&&i.push(`disabled`),`  <mms-tabs-item ${i.join(` `)}></mms-tabs-item>`},a=Number(n.tabCount)||3,o=Array.from({length:a},(e,t)=>i(t+1)).join(`
`);return`<mms-tabs\n  ${r.join(`
  `)}\n>\n${o}\n</mms-tabs>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=e=>e===`none`?void 0:e,r=[1,2,3,4,5,6].map(r=>a`
        <mms-tabs-item
          label=${e[`tab${r}Label`]}
          icon=${t(e[`tab${r}Icon`])||n}
          ?disabled=${e[`tab${r}Disabled`]}
        ></mms-tabs-item>
      `).slice(0,e.tabCount);return a`
      <mms-tabs
        label=${e.label}
        active-index=${e.activeIndex}
        orientation=${e.orientation}
        tab-style=${e.tabStyle}
        roundness=${e.roundness}
        size=${e.size}
        ?full-width=${e.fullWidth}
        ?icon-only=${e.iconOnly}
        data-density=${e.density===`compact`?`compact`:n}
      >
        ${r}
      </mms-tabs>
    `}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Tabs</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A tablist of <code style="\${t.monoSm}">mms-tabs-item</code> elements implementing the WAI-ARIA
        tabs pattern — roving tabindex, arrow-key navigation, and a sliding selection indicator for
        the minimal style. <code style="\${t.monoSm}">mms-tabs</code> manages the tablist only; consumers
        own the associated tabpanel(s).
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Slot <code style="\${t.monoSm}">mms-tabs-item</code> elements into <code style="\${t.monoSm}">mms-tabs</code>.
        The first tab is active by default; the minimal style (default) shows selection via a sliding indicator.
      </p>

      <div style="\${d.frame}">
        <mms-tabs label="Basic usage example">
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details"></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Tab style</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">tab-style="minimal"</code> (default) shows selection via a sliding indicator border.
        <code style="\${t.monoSm}">tab-style="fill"</code> shows selection via a solid background on the active tab —
        no separate indicator is rendered.
      </p>

      <div style="\${d.frame}">
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>Minimal (default)</strong></p>
            <mms-tabs label="Minimal style example" tab-style="minimal">
              <mms-tabs-item label="Overview"></mms-tabs-item>
              <mms-tabs-item label="Details"></mms-tabs-item>
              <mms-tabs-item label="History"></mms-tabs-item>
            </mms-tabs>
          </div>
          <div>
            <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>Fill</strong></p>
            <mms-tabs label="Fill style example" tab-style="fill">
              <mms-tabs-item label="Overview"></mms-tabs-item>
              <mms-tabs-item label="Details"></mms-tabs-item>
              <mms-tabs-item label="History"></mms-tabs-item>
            </mms-tabs>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Orientation</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">orientation="vertical"</code> stacks tabs in a column and switches arrow-key
        navigation from Left/Right to Up/Down. See
        <a href="?path=/docs/content-display-tabs--layout-behavior" style="color: inherit;">Layout &amp; Behavior</a>
        for placement guidance and how a vertical tablist responds as its allocated width narrows.
      </p>

      <div style="\${d.frame}">
        <mms-tabs label="Vertical orientation example" orientation="vertical">
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details"></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">With icons</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">icon</code> prop adds a leading icon to a tab.
      </p>

      <div style="\${d.frame}">
        <mms-tabs label="Icon example">
          <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
          <mms-tabs-item label="Settings" icon="gear"></mms-tabs-item>
          <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Icon-only</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">icon-only</code> on <code style="\${t.monoSm}">mms-tabs</code> hides every
        tab's visible label while keeping it as the accessible name (<code style="\${t.monoSm}">aria-label</code>).
        Each tab needs its own <code style="\${t.monoSm}">icon</code> prop set.
      </p>

      <div style="\${d.frame}">
        <mms-tabs label="Icon-only example" icon-only>
          <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
          <mms-tabs-item label="Settings" icon="gear"></mms-tabs-item>
          <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Text size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">size="lg"</code> increases label and icon size for contexts that need
        more visual weight than the default <code style="\${t.monoSm}">md</code> size.
      </p>

      <div style="\${d.frame}">
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>Medium (default)</strong></p>
            <mms-tabs label="Medium size example">
              <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
              <mms-tabs-item label="Details" icon="gear"></mms-tabs-item>
              <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
            </mms-tabs>
          </div>
          <div>
            <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>Large</strong></p>
            <mms-tabs label="Large size example" size="lg">
              <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
              <mms-tabs-item label="Details" icon="gear"></mms-tabs-item>
              <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
            </mms-tabs>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Full width</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">full-width</code> stretches every tab to share the tablist's width equally.
      </p>

      <div style="\${d.frame}">
        <mms-tabs label="Full width example" full-width>
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details"></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Disabled tab</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">disabled</code> is set per-tab on an individual <code style="\${t.monoSm}">mms-tabs-item</code>
        — there is no group-level disabled prop on <code style="\${t.monoSm}">mms-tabs</code>. A disabled tab is
        removed from the roving tabindex and skipped by arrow-key navigation.
      </p>

      <div style="\${d.frame}">
        <mms-tabs label="Disabled tab example">
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details" disabled></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Props reference</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Every configurable prop on <code style="\${t.monoSm}">mms-tabs</code> and <code style="\${t.monoSm}">mms-tabs-item</code>,
        including the global props inherited by every mms component. All are exercised on the
        <a href="?path=/docs/content-display-tabs--playground" style="color: inherit;">Playground</a> page.
      </p>

      <h3 style="\${t.h3}">mms-tabs</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Prop</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Type</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Default</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">label</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">string</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">'Tabs'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Accessible name for the tablist (<code style="\${t.monoSm}">aria-label</code>)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">active-index</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">number</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">0</code></td>
            <td style="padding: 0.5rem 0.75rem;">Index of the currently selected tab</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">orientation</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">'horizontal' | 'vertical'</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">'horizontal'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Layout orientation; switches arrow-key axis</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">tab-style</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">'minimal' | 'fill'</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">'minimal'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Visual style propagated to all tabs</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">full-width</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">boolean</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">false</code></td>
            <td style="padding: 0.5rem 0.75rem;">Stretches tabs to fill the available width equally</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">icon-only</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">boolean</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">false</code></td>
            <td style="padding: 0.5rem 0.75rem;">Forces every tab into icon-only mode, hiding all labels</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">size</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">'md' | 'lg'</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">'md'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Text size, propagated to all tabs</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">roundness</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">'boxed' | 'subtle' | 'rounded'</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">'subtle'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Corner radius on the active/hover tab's leading corners, propagated to all tabs. <code style="\${t.monoSm}">fill</code> style only.</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">collapse-breakpoint</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">number</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">undefined</code></td>
            <td style="padding: 0.5rem 0.75rem;">Host width (px) below which a vertically-authored tablist auto-switches to horizontal. Undefined disables auto-collapse. See <a href="?path=/docs/content-display-tabs--layout-behavior" style="color: inherit;">Layout &amp; Behavior</a>.</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">mms-tabs CSS custom properties</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Property</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Default</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">--mms-tabs-vertical-max-width</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">none</code></td>
            <td style="padding: 0.5rem 0.75rem;">Firmer cap on a vertical tablist's <code style="\${t.monoSm}">fit-content</code> width, for consumers who want label-wrap to kick in earlier than the widest label's natural size would trigger it.</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">mms-tabs-item</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Prop</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Type</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Default</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">label</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">string</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">'Tab'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Tab label text; also the accessible name</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">icon</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">IconName</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">undefined</code></td>
            <td style="padding: 0.5rem 0.75rem;">Optional leading icon</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">hide-label</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">boolean</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">false</code></td>
            <td style="padding: 0.5rem 0.75rem;">Hides the visible label (icon-only tab); normally set via the parent's <code style="\${t.monoSm}">icon-only</code></td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">disabled</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">boolean</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">false</code></td>
            <td style="padding: 0.5rem 0.75rem;">Disables selection and keyboard/pointer interaction; skipped by arrow-key navigation</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">panel-id</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">string</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">''</code></td>
            <td style="padding: 0.5rem 0.75rem;">Id of the associated tabpanel — sets <code style="\${t.monoSm}">aria-controls</code></td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">active</code>, <code style="\${t.monoSm}">tab-style</code>, <code style="\${t.monoSm}">orientation</code>, <code style="\${t.monoSm}">size</code></td>
            <td style="padding: 0.5rem 0.75rem;">—</td>
            <td style="padding: 0.5rem 0.75rem;">—</td>
            <td style="padding: 0.5rem 0.75rem;">Managed by the parent <code style="\${t.monoSm}">mms-tabs</code> — do not set directly</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Global props</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Inherited by every mms component per
        <code style="\${t.monoSm}">.claude/contracts/global-props.md</code>.
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Attribute</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Values</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">data-theme</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">'default' | 'maximus' | 'va-gov' | 'uss-oh-dvs'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Brand theme (colors + fonts); set on <code style="\${t.monoSm}">mms-tabs</code></td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">data-density</code></td>
            <td style="padding: 0.5rem 0.75rem;"><code style="\${t.monoSm}">'default' | 'compact'</code></td>
            <td style="padding: 0.5rem 0.75rem;">Padding density; set on <code style="\${t.monoSm}">mms-tabs</code> — it propagates to each tab item</td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>WAI-ARIA Tabs Pattern.</strong> <code style="\${t.monoSm}">mms-tabs</code> renders
          <code style="\${t.monoSm}">role="tablist"</code>; each slotted <code style="\${t.monoSm}">mms-tabs-item</code>
          sets <code style="\${t.monoSm}">role="tab"</code>, <code style="\${t.monoSm}">aria-selected</code>, and a
          roving <code style="\${t.monoSm}">tabindex</code> directly on itself. Consumers own the associated
          tabpanel(s) — set <code style="\${t.monoSm}">panel-id</code> on each tab to wire up
          <code style="\${t.monoSm}">aria-controls</code>.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['tabs'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Announces the tab's label, "tab", position (e.g. "1 of 3"), and selected state</li>
        <li style="margin-bottom: 0.5rem;"><strong>Selection:</strong> Announces "selected" as the active tab changes via arrow keys or click</li>
        <li style="margin-bottom: 0.5rem;"><strong>Disabled:</strong> Announces "dimmed"/"unavailable" for a disabled tab; it is skipped by arrow-key navigation</li>
        <li><strong>Icon-only:</strong> Label is still announced via <code style="\${t.monoSm}">aria-label</code> even when visually hidden</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to the active tab / out of the tablist (roving tabindex — only the active tab is in the page tab order)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">→</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">←</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move selection to the next / previous enabled tab, wrapping at the ends (horizontal orientation)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move selection to the next / previous enabled tab, wrapping at the ends (vertical orientation)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Jump to the first / last enabled tab</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused tab (only needed when a tab is reached by means other than arrow keys)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Layout & Behavior',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Intro -->
      <h1 style="\${t.h1}">Layout &amp; Behavior</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Horizontal tabs need no layout guidance beyond the Overview page — they scroll their own overflow.
        Vertical tabs are different: <code style="\${t.monoSm}">mms-tabs</code> doesn't own the surrounding
        layout, so placement and responsiveness are a shared contract between the component and the page
        that hosts it. This page covers that contract.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Placement -->
      <h2 style="\${t.h2}">Placement</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        A vertical <code style="\${t.monoSm}">mms-tabs</code> sizes itself to
        <code style="\${t.monoSm}">fit-content</code> — it takes only as much width as its labels need, and
        never stretches to fill a container. Place it as the sidebar/nav column of a consumer-owned
        two-column grid or flex layout — the same pattern Carbon and Spectrum both use for their vertical
        tabs. mms doesn't ship a two-column layout component, so this is a placement convention, not
        something the component enforces in CSS.
      </p>

      <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px;">
          <p style="\${t.bodySm} margin: 0 0 0.5rem; opacity: 0.6; font-weight: 600;">✅ Do</p>
          <pre style="\${t.monoSm} background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.3); border-radius: 6px; padding: 0.75rem; margin: 0; overflow-x: auto;"><code>&lt;div class="two-col-layout"&gt;
  &lt;mms-tabs orientation="vertical"&gt;...&lt;/mms-tabs&gt;
  &lt;main&gt;...&lt;/main&gt;
&lt;/div&gt;</code></pre>
        </div>
        <div style="flex: 1; min-width: 240px;">
          <p style="\${t.bodySm} margin: 0 0 0.5rem; opacity: 0.6; font-weight: 600;">❌ Don't</p>
          <pre style="\${t.monoSm} background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.3); border-radius: 6px; padding: 0.75rem; margin: 0; overflow-x: auto;"><code>&lt;mms-tabs orientation="vertical" full-width&gt;
  ...
&lt;/mms-tabs&gt;
&lt;main&gt;...&lt;/main&gt;</code></pre>
        </div>
      </div>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">full-width</code> stretches tabs to fill available width equally — it's a
        horizontal-orientation concept (equalizing tab widths across a row) and has no effect on a vertical
        tablist, which always sizes to content.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Responsiveness -->
      <h2 style="\${t.h2}">Responsiveness</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Take a common layout: 30% of the width allocated to vertical tabs, 70% to a content pane that
        updates with the selected tab. As the consumer's column narrows — a resizable panel, a smaller
        viewport, a denser page — a fixed-width vertical tablist with <code style="\${t.monoSm}">nowrap</code>
        labels would overflow past its allocated 30% once a label runs out of room. <code style="\${t.monoSm}">mms-tabs</code>
        handles this in three tiers:
      </p>

      <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
        <div style="\${d.tierCard}">
          <p style="\${d.tierLabel}">Tier 1 — Comfortable</p>
          <p style="\${t.bodySm} margin: 0; opacity: 0.85;">Default behavior. Labels render on a single line at their natural width.</p>
        </div>
        <div style="\${d.tierCard}">
          <p style="\${d.tierLabel}">Tier 2 — Wrap</p>
          <p style="\${t.bodySm} margin: 0; opacity: 0.85;">As the allocated column narrows past a label's natural width, labels wrap onto multiple lines instead of overflowing. No configuration needed — this is always on.</p>
        </div>
        <div style="\${d.tierCard}">
          <p style="\${d.tierLabel}">Tier 3 — Collapse</p>
          <p style="\${t.bodySm} margin: 0; opacity: 0.85;">Below an optional <code style="\${t.monoSm}">collapse-breakpoint</code> (px), the tablist auto-switches to horizontal — ARIA, keyboard, and layout all follow automatically.</p>
        </div>
      </div>

      <div style="\${d.frame}">
        <span style="\${d.frameLabel}">Drag the ↘ handle on the container to resize — comfortable → wrap</span>
        <div style="box-sizing: border-box; resize: horizontal; overflow: auto; min-width: 480px; max-width: 100%; width: 100%; display: flex; gap: 1rem; height: 280px; margin-top: 0.5rem; border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; padding: 1rem;">
          <div style="flex: 0 0 30%; min-width: 0; border-right: 1px solid rgba(128,128,128,0.2); padding-right: 1rem;">
            <mms-tabs orientation="vertical" label="Section navigation" style="--mms-tabs-vertical-max-width: 100%;">
              <mms-tabs-item label="Overview"></mms-tabs-item>
              <mms-tabs-item label="Provider Directory"></mms-tabs-item>
              <mms-tabs-item label="Appeals &amp; Grievances"></mms-tabs-item>
              <mms-tabs-item label="History"></mms-tabs-item>
            </mms-tabs>
          </div>
          <div style="flex: 1 1 70%; min-width: 0; display: flex; align-items: center; justify-content: center; opacity: 0.5; font-size: 0.875rem;">
            content pane
          </div>
        </div>
      </div>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        No <code style="\${t.monoSm}">collapse-breakpoint</code> is set here — this demo is scoped to Tiers 1
        and 2 only, which need no configuration and are always on. Tier 3 needs its own layout, shown below:
        collapsing orientation in place, with nothing else changing, just hides tabs behind horizontal scroll
        instead of helping — worse than wrap, not better.
      </p>

      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        <code style="\${t.monoSm}">collapse-breakpoint</code> is a paired contract: set it to the same width
        where the consumer's own layout switches from a side-by-side column to a stacked one. Below that
        width, the now-horizontal tablist needs the full row to itself — otherwise it's just trading one
        overflow problem for another.
      </p>

      <div style="display: flex; gap: 1.5rem; margin-bottom: 1rem; flex-wrap: wrap; align-items: flex-start;">
        <div style="flex: 1; min-width: 260px;">
          <div style="\${d.frame} margin-bottom: 0.5rem;">
            <span style="\${d.frameLabel}">≥ collapse-breakpoint</span>
            <div style="display: flex; gap: 0.75rem; height: 170px;">
              <div style="width: 170px; border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; padding: 0.75rem;">
                <mms-tabs orientation="vertical" label="Section navigation">
                  <mms-tabs-item label="Overview"></mms-tabs-item>
                  <mms-tabs-item label="Directory"></mms-tabs-item>
                  <mms-tabs-item label="Appeals"></mms-tabs-item>
                </mms-tabs>
              </div>
              <div style="flex: 1; border: 1px dashed rgba(128,128,128,0.3); border-radius: 6px; display: flex; align-items: center; justify-content: center; opacity: 0.5; font-size: 0.8125rem;">
                content
              </div>
            </div>
          </div>
          <p style="\${d.caption} margin-top: 0.25rem;">Side-by-side: sidebar + content</p>
        </div>

        <div style="flex: 1; min-width: 260px;">
          <div style="\${d.frame} margin-bottom: 0.5rem;">
            <span style="\${d.frameLabel}">&lt; collapse-breakpoint</span>
            <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 170px;">
              <div style="border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; padding: 0.5rem;">
                <mms-tabs orientation="horizontal" label="Section navigation">
                  <mms-tabs-item label="Overview"></mms-tabs-item>
                  <mms-tabs-item label="Directory"></mms-tabs-item>
                  <mms-tabs-item label="Appeals"></mms-tabs-item>
                </mms-tabs>
              </div>
              <div style="flex: 1; border: 1px dashed rgba(128,128,128,0.3); border-radius: 6px; display: flex; align-items: center; justify-content: center; opacity: 0.5; font-size: 0.8125rem;">
                content
              </div>
            </div>
          </div>
          <p style="\${d.caption} margin-top: 0.25rem;">Stacked: tabs on top, content below</p>
        </div>
      </div>

      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        This is the whole fix — no auto-switch-to-icon-only tier sits between wrap and collapse. Icon-only
        mode remains a manual, author-chosen variant (<code style="\${t.monoSm}">icon-only</code>), not an
        automatic responsive step.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Because <code style="\${t.monoSm}">collapse-breakpoint</code> overwrites the live
        <code style="\${t.monoSm}">orientation</code> property to reuse all of its existing ARIA/keyboard/CSS
        behavior for free, the component fires <code style="\${t.monoSm}">tab-orientation-change</code>
        whenever it collapses or expands on its own, so a consumer reading <code style="\${t.monoSm}">orientation</code>
        back can tell the difference from a value it authored itself:
      </p>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.06); border: 1px solid rgba(128,128,128,0.2); border-radius: 6px; padding: 0.75rem; margin: 0 0 1.5rem; overflow-x: auto;"><code>tabsEl.addEventListener('tab-orientation-change', (e) => {
  // e.detail: { orientation: 'horizontal' | 'vertical', reason: 'collapse' | 'expand' }
});</code></pre>

      <div style="\${d.callout('#F59E0B')}">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Vertical tabs are for in-page section navigation</strong> — dashboard/content sections
          within a single page — not persistent primary/global navigation. Screen-reader users encounter
          the full tab list on every visit, and deep-linking into a specific tab's content is the
          consumer's routing responsibility; <code style="\${t.monoSm}">mms-tabs</code> doesn't provide it.
        </p>
      </div>

    </div>
  \`
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    orientation: 'horizontal',
    tabStyle: 'minimal',
    roundness: 'subtle',
    fullWidth: true,
    iconOnly: false,
    size: 'md',
    label: 'Tabs',
    activeIndex: 0,
    tabCount: 3,
    tab1Label: 'Overview',
    tab1Icon: 'house',
    tab1Disabled: false,
    tab2Label: 'Details',
    tab2Icon: 'gear',
    tab2Disabled: false,
    tab3Label: 'History',
    tab3Icon: 'clock-counter-clockwise',
    tab3Disabled: false,
    tab4Label: 'Messages',
    tab4Icon: 'envelope',
    tab4Disabled: false,
    tab5Label: 'Profile',
    tab5Icon: 'user',
    tab5Disabled: false,
    tab6Label: 'Notifications',
    tab6Icon: 'bell',
    tab6Disabled: false,
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 100%; max-width: \${PAGE_MAX};">
            \${story()}
          </div>
        </div>
      \`;
  }],
  argTypes: {
    // ── Visual ────────────────────────────────────────────────
    orientation: {
      name: 'Orientation',
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation',
      table: {
        category: 'Visual'
      }
    },
    tabStyle: {
      name: 'Tab style',
      control: 'select',
      options: ['minimal', 'fill'],
      description: 'Visual style propagated to all tabs',
      table: {
        category: 'Visual'
      }
    },
    roundness: {
      name: 'Roundness',
      control: 'select',
      options: ['boxed', 'subtle', 'rounded'],
      description: "Corner radius on the active/hover tab's leading corners. Fill style only.",
      table: {
        category: 'Visual'
      }
    },
    fullWidth: {
      name: 'Full width',
      control: 'boolean',
      description: 'Stretches tabs to fill the available width equally',
      table: {
        category: 'Visual'
      }
    },
    iconOnly: {
      name: 'Icon only',
      control: 'boolean',
      description: 'Forces every tab into icon-only mode, hiding all labels',
      table: {
        category: 'Visual'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['md', 'lg'],
      description: 'Text size, propagated to all tabs',
      table: {
        category: 'Visual'
      }
    },
    // ── Content ───────────────────────────────────────────────
    label: {
      name: 'Label',
      control: 'text',
      description: 'Accessible name for the tablist (aria-label)',
      table: {
        category: 'Content'
      }
    },
    activeIndex: {
      name: 'Active index',
      control: {
        type: 'number',
        min: 0,
        max: 5,
        step: 1
      },
      description: 'Index of the currently selected tab',
      table: {
        category: 'Content'
      }
    },
    tabCount: {
      name: 'Tab count',
      control: {
        type: 'range',
        min: 2,
        max: 6,
        step: 1
      },
      description: 'Number of tabs to render in this demo (the component itself has no cap)',
      table: {
        category: 'Content'
      }
    },
    // ── Per-tab ───────────────────────────────────────────────
    ...tabArgTypes(1),
    ...tabArgTypes(2),
    ...tabArgTypes(3),
    ...tabArgTypes(4),
    ...tabArgTypes(5),
    ...tabArgTypes(6),
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['default', 'maximus', 'va-gov', 'uss-oh-dvs'],
      description: 'Brand theme (affects typography and colors)',
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
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string | boolean | number>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          attrs.push(\`label="\${a.label}"\`);
          if (a.activeIndex) attrs.push(\`active-index="\${a.activeIndex}"\`);
          if (a.orientation !== 'horizontal') attrs.push(\`orientation="\${a.orientation}"\`);
          if (a.tabStyle !== 'minimal') attrs.push(\`tab-style="\${a.tabStyle}"\`);
          if (a.size && a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.tabStyle === 'fill' && a.roundness && a.roundness !== 'subtle') attrs.push(\`roundness="\${a.roundness}"\`);
          if (a.fullWidth) attrs.push('full-width');
          if (a.iconOnly) attrs.push('icon-only');
          if (a.density === 'compact') attrs.push('data-density="compact"');
          const tabAttrs = (n: number) => {
            const icon = a[\`tab\${n}Icon\`];
            const disabled = a[\`tab\${n}Disabled\`];
            const line = [\`label="\${a[\`tab\${n}Label\`]}"\`];
            if (icon && icon !== 'none') line.push(\`icon="\${icon}"\`);
            if (disabled) line.push('disabled');
            return \`  <mms-tabs-item \${line.join(' ')}></mms-tabs-item>\`;
          };
          const tabCount = Number(a.tabCount) || 3;
          const tabLines = Array.from({
            length: tabCount
          }, (_, i) => tabAttrs(i + 1)).join('\\n');
          return \`<mms-tabs\\n  \${attrs.join('\\n  ')}\\n>\\n\${tabLines}\\n</mms-tabs>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none'
    }
  },
  render: (args: {
    label: string;
    activeIndex: number;
    orientation: string;
    tabStyle: string;
    roundness: string;
    fullWidth: boolean;
    iconOnly: boolean;
    size: string;
    tabCount: number;
    theme: string;
    density: string;
  } & Record<string, string | boolean | number>) => {
    const icon = (name: string) => name === 'none' ? undefined : name;
    const allTabs = [1, 2, 3, 4, 5, 6].map(n => html\`
        <mms-tabs-item
          label=\${args[\`tab\${n}Label\`]}
          icon=\${icon(args[\`tab\${n}Icon\`] as string) || nothing}
          ?disabled=\${args[\`tab\${n}Disabled\`]}
        ></mms-tabs-item>
      \`);
    const items = allTabs.slice(0, args.tabCount);
    return html\`
      <mms-tabs
        label=\${args.label}
        active-index=\${args.activeIndex}
        orientation=\${args.orientation}
        tab-style=\${args.tabStyle}
        roundness=\${args.roundness}
        size=\${args.size}
        ?full-width=\${args.fullWidth}
        ?icon-only=\${args.iconOnly}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
      >
        \${items}
      </mms-tabs>
    \`;
  }
}`,...M.parameters?.docs?.source}}},N=[`Overview`,`LayoutBehavior`,`PlaygroundStory`]}));P();export{A as LayoutBehavior,k as Overview,M as PlaygroundStory,N as __namedExportsOrder,w as default,P as n,S as t};