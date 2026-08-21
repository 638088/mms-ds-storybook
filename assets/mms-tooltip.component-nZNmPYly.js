import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-CBo78ikN.js";import{d as o,l as s,n as c,r as l,s as u,t as d}from"./decorate-Bygya6Tu.js";import{r as f,t as p}from"./focus.css-BrGuLyxh.js";import{t as m}from"./mms-icon.component-DRWi1aVe.js";var h,g=e((()=>{a(),l(),f(),m(),c(),h=class extends r{constructor(...e){super(...e),this.text=`Tooltip text`,this.size=`md`,this.direction=`below-right`,this.iconSize=`sm`,this.trigger=`hover`,this.active=!1,this._hasSlottedContent=!1,this._effectiveDirection=`below-right`,this._handleMouseEnter=()=>{this.trigger===`hover`&&(this.active=!0)},this._handleMouseLeave=()=>{this.trigger===`hover`&&(this.active=!1)},this._handleFocusIn=e=>{e.target.matches(`:focus-visible`)&&(this.trigger===`hover`||this.trigger===`focus`)&&(this.active=!0)},this._handleFocusOut=()=>{(this.trigger===`hover`||this.trigger===`focus`)&&(this.active=!1)},this._toggleTooltip=e=>{this.trigger===`click`&&(e.stopPropagation(),this.active=!this.active)},this._handleOutsideClick=e=>{this.trigger!==`click`||!this.active||e.composedPath().includes(this)||(this.active=!1)},this._handleKeydown=e=>{if(e.key===`Escape`&&this.active){this.active=!1;return}this.trigger===`click`&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.active=!this.active)},this._handleResize=()=>{this.active&&this._updatePosition()},this._handleSlotChange=e=>{let t=e.target.assignedNodes({flatten:!0});this._hasSlottedContent=t.some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!e.textContent?.trim())}}static{this.styles=[p,n`
      :host {
        --_arrow-width: 12px; /** Marina: caret SVG viewBox width */
        --_arrow-height: 8px; /** Marina: caret SVG viewBox height */
        --_bubble-gap: 7px; /** Marina: --ds-tooltip-bubble-gap is 7px, deliberately 1px LESS than --_arrow-height (8px) — the caret overlaps 1px into .tooltip-content. .tooltip-content paints after .caret in DOM order, so that 1px overlap is covered by the content box's own border/fill, fusing caret+bubble into one shape with no seam at any zoom level. A flush (non-overlapping) join is seam-prone under subpixel rounding — see DS-030 handoff notes. */
        --_arrow-offset: -6px; /** Marina: --ds-tooltip-arrow-offset-sm — shifts .tooltip-bubble so the caret centers on .trigger's own box center. One constant regardless of icon-size: .trigger's WCAG 24px min-width/min-height hit area (see .trigger below) means the box is always 24px wide even when icon-size="sm" renders a 16px icon inside it — the icon is centered within that box via flex, so its visual center always coincides with the box center. A separate, narrower offset for icon-size="sm" (Marina's coupled hit-area/icon-size assumption) mis-centered the caret by exactly the 4px gap between the 16px icon and the 24px box. */
        --_arrow-inner: 12px; /** Marina: --ds-tooltip-arrow-inner — caret's fixed inset from the (already shifted) bubble edge */
        position: relative;
        display: inline-flex;
      }

      .trigger {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 24px; /** WCAG 2.2 SC 2.5.8 Target Size (Minimum) — 24x24px floor regardless of icon-size, so icon-size="sm" (16px) still meets the requirement via hit-area padding rather than growing the icon itself. Marina's reference implementation ties hit area to icon-size (16px, no padding); mms decouples them so the hit area always clears the WCAG floor. */
        min-height: 24px;
        cursor: pointer;
        border-radius: var(--radius-sm);
        color: var(--color-text-default);
      }

      .tooltip-bubble {
        position: absolute;
        z-index: 10;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition:
          opacity var(--motion-duration-moderate) var(--motion-easing-exit),
          visibility var(--motion-duration-moderate) var(--motion-easing-exit);
      }

      :host([active]) .tooltip-bubble {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transition:
          opacity var(--motion-duration-moderate) var(--motion-easing-enter),
          visibility var(--motion-duration-moderate) var(--motion-easing-enter);
      }

      /* Section 508/ADA — every component that uses motion must resolve all
         transition durations to --motion-duration-instant under reduced
         motion (per Motion.stories.ts), not "none", so layout still reflows
         without the visual animation. Matches both the base and :host([active])
         rules above so this wins regardless of which is currently applied. */
      @media (prefers-reduced-motion: reduce) {
        .tooltip-bubble,
        :host([active]) .tooltip-bubble {
          transition-duration: var(--motion-duration-instant);
        }
      }

      .tooltip-content {
        box-sizing: border-box;
        width: max-content;
        max-width: 240px; /** Flat cap regardless of size/viewport — Fluent UI's tooltip max-width; NN Group's guidance that tooltip content should stay brief means a viewport-conditional clamp isn't needed. */
        overflow-wrap: break-word; /** .tooltip-content's text is consumer-supplied (the text prop) — an unbroken long token (URL, long ID) would otherwise overflow max-width instead of wrapping. */
        background: var(--color-surface-raised);
        border: var(--border-width-xs) solid var(--color-neutral-7); /** Not --color-border-default (neutral-6, ~1.9:1) — that fails WCAG 1.4.11 non-text contrast against --color-surface-raised. neutral-7 (~3.5:1) passes; same step mms-inline-alert uses for its stroke. */
        border-radius: var(--radius-md);
        box-shadow: var(--elevation-md);
        color: var(--color-text-default);
        padding: var(--spacing-sm1) var(--spacing-sm2);
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--type-body-md-weight);
      }

      :host([size='sm']) .tooltip-content {
        padding: var(--spacing-xs2) var(--spacing-sm1);
        font-family: var(--type-body-sm-family);
        font-size: var(--type-body-sm-size);
        line-height: var(--type-body-sm-line-height);
        font-weight: var(--type-body-sm-weight);
      }

      .caret {
        position: absolute;
        width: var(--_arrow-width);
        height: var(--_arrow-height);
      }

      .caret svg {
        display: block;
        width: 100%;
        height: 100%;
      }

      /* Fill + stroke split so only the two angled edges get a border —
         the base edge is left unstroked, so it reads as a continuation of
         .tooltip-content's own border rather than a doubled seam line.
         Ported directly from Marina's tooltip.component.ts .caret-fill /
         .caret-stroke. */
      .caret .caret-fill {
        fill: var(--color-surface-raised);
      }

      .caret .caret-stroke {
        fill: none;
        stroke: var(--color-neutral-7); /** Matches .tooltip-content's border color (see comment there) — keeps caret/bubble as one visually-fused unit. */
        stroke-width: 1px;
      }

      /* ═══════════════════════════════════════════════════════════════════
         DIRECTION — bubble + caret placement, ported from Marina's four
         direction blocks plus its icon-size override selectors. Selectors
         key off [data-direction], not the public [direction] attribute —
         data-direction is the effective (possibly viewport-flipped) value;
         see _updatePosition() below. Marina has no equivalent flip logic.

         Two offsets do the work:
         1. .tooltip-bubble's left/right shifts the whole bubble by
            --_arrow-offset (-6px) — one constant for both icon sizes, see
            --_arrow-offset's own comment above for why icon-size doesn't
            change it.
         2. .caret's left/right is a fixed --_arrow-inner (12px) inset from
            that already-shifted bubble edge.
         Combined: caret center = .trigger box's own center, in both icon
         sizes — the box (not the icon) is what the caret aligns to, and the
         box is always 24px regardless of icon-size (WCAG hit-area floor),
         so a single constant offset is correct rather than one per
         icon-size; a single hardcoded inset (mms's prior
         var(--spacing-md1)) ignores this box-centering entirely and just
         happens not to fail as visibly.

         .tooltip-bubble reserves --_bubble-gap (7px) as padding — deliberately
         1px LESS than the caret's own height (8px), so the caret overlaps 1px
         into .tooltip-content. Content paints after the caret in DOM order,
         so that 1px overlap is covered by the content box's own border/fill,
         fusing caret+bubble into one seamless shape with no seam at any
         subpixel rounding. A flush (non-overlapping) join is seam-prone by
         comparison — see DS-030 handoff notes.

         Caret SVG is drawn apex-up (below-* uses it unrotated so it points up
         at the trigger); rotated 180deg for the two above-* directions so the
         same shape points down at the trigger instead.
         ═══════════════════════════════════════════════════════════════════ */
      :host([data-direction='below-right']) .tooltip-bubble {
        top: 100%;
        left: var(--_arrow-offset);
        padding-top: var(--_bubble-gap);
      }
      :host([data-direction='below-right']) .caret {
        top: 0;
        left: var(--_arrow-inner);
      }

      :host([data-direction='below-left']) .tooltip-bubble {
        top: 100%;
        right: var(--_arrow-offset);
        padding-top: var(--_bubble-gap);
      }
      :host([data-direction='below-left']) .caret {
        top: 0;
        right: var(--_arrow-inner);
      }

      :host([data-direction='above-right']) .tooltip-bubble {
        bottom: 100%;
        left: var(--_arrow-offset);
        padding-bottom: var(--_bubble-gap);
      }
      :host([data-direction='above-right']) .caret {
        bottom: 0;
        left: var(--_arrow-inner);
        transform: rotate(180deg);
      }

      :host([data-direction='above-left']) .tooltip-bubble {
        bottom: 100%;
        right: var(--_arrow-offset);
        padding-bottom: var(--_bubble-gap);
      }
      :host([data-direction='above-left']) .caret {
        bottom: 0;
        right: var(--_arrow-inner);
        transform: rotate(180deg);
      }
    `]}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._handleOutsideClick),window.addEventListener(`resize`,this._handleResize)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._handleOutsideClick),window.removeEventListener(`resize`,this._handleResize)}firstUpdated(){this._effectiveDirection=this.direction,this._reflectEffectiveDirection()}updated(e){e.has(`direction`)&&(this._effectiveDirection=this.direction,this._reflectEffectiveDirection()),e.has(`active`)&&this.active&&this._updatePosition()}_reflectEffectiveDirection(){this.setAttribute(`data-direction`,this._effectiveDirection)}_updatePosition(){let e=this.renderRoot.querySelector(`.tooltip-content`);e&&(this._effectiveDirection=this.direction,this._reflectEffectiveDirection(),requestAnimationFrame(()=>{if(!this.active)return;let t=e.getBoundingClientRect(),n=this.getBoundingClientRect(),[r,i]=this._effectiveDirection.split(`-`),a=r;if(r===`below`&&t.bottom>window.innerHeight-4){let e=t.top-n.bottom;n.top-e-t.height>=4&&(a=`above`)}else if(r===`above`&&t.top<4){let e=n.top-t.bottom;n.bottom+e+t.height<=window.innerHeight-4&&(a=`below`)}let o=i;if(i===`right`&&t.right>window.innerWidth-4){let e=t.left-n.left;n.right-e-t.width>=4&&(o=`left`)}else if(i===`left`&&t.left<4){let e=n.right-t.right;n.left+e+t.width<=window.innerWidth-4&&(o=`right`)}let s=`${a}-${o}`;s!==this._effectiveDirection&&(this._effectiveDirection=s,this._reflectEffectiveDirection())}))}_renderDefaultTrigger(){return i`<mms-icon name="question" size=${this.iconSize} label="More information"></mms-icon>`}render(){return i`
      <div
        class="trigger"
        tabindex="0"
        role="button"
        aria-label=${this._hasSlottedContent?t:`More information`}
        aria-describedby="tooltip-content"
        aria-expanded=${this.active}
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
        @focusin=${this._handleFocusIn}
        @focusout=${this._handleFocusOut}
        @click=${this._toggleTooltip}
        @keydown=${this._handleKeydown}
      >
        <slot @slotchange=${this._handleSlotChange}>${this._renderDefaultTrigger()}</slot>
      </div>
      <div class="tooltip-bubble" role="tooltip" id="tooltip-content">
        <span class="caret" aria-hidden="true">
          <svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <polygon points="6,0 12,8 0,8" class="caret-fill" />
            <polyline points="0,8 6,0 12,8" class="caret-stroke" />
          </svg>
        </span>
        <div class="tooltip-content">${this.text}</div>
      </div>
    `}},d([s({type:String})],h.prototype,`text`,void 0),d([s({type:String})],h.prototype,`size`,void 0),d([s({type:String,reflect:!0})],h.prototype,`direction`,void 0),d([s({type:String,attribute:`icon-size`})],h.prototype,`iconSize`,void 0),d([s({type:String})],h.prototype,`trigger`,void 0),d([s({type:Boolean,reflect:!0})],h.prototype,`active`,void 0),d([u()],h.prototype,`_hasSlottedContent`,void 0),h=d([o(`mms-tooltip`)],h)}));export{g as t};