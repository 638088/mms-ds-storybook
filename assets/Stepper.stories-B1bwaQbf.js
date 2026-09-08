import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o,u as s}from"./lit-CBo78ikN.js";import{d as c,l,n as u,r as d,s as f,t as p}from"./decorate-Bygya6Tu.js";import{r as m,t as h}from"./focus.css-BrGuLyxh.js";import{t as g}from"./mms-icon.component-BJPQucU2.js";import{n as _}from"./iframe-y4HxnH0J.js";import{i as v,n as y,r as b}from"./theme-constraints-xITgb_Dw.js";import{a as x,o as S,r as C,t as w}from"./a11y-outcome-DdXFaPju.js";import{t as T}from"./mms-drawer.component-1jR0WmrA.js";var E,D,O=e((()=>{o(),d(),m(),g(),_(),T(),u(),E={completed:`Completed`,"needs-attention":`Needs attention`,disabled:`Disabled`},D=class extends i{constructor(...e){super(...e),this.type=`vertical`,this.colorScheme=`primary`,this.items=[],this.label=`Progress steps`,this.showStepNumbers=!0,this.radialSize=`large`,this.radialAlignment=`top`,this.actionLabel=``,this.currentStepLabel=``,this.nextStepLabel=``,this.labelSize=`heading-3`,this.labelBold=!1,this.isLastStep=!1,this.forceCompact=!1,this._viewAllOpen=!1,this._stepsDrawerRendered=!1,this._handleActionClick=()=>{this._stepsDrawerRendered=!0,this._viewAllOpen=!0,this.dispatchEvent(new CustomEvent(`action-click`,{bubbles:!0,composed:!0}))},this._handleStepsDrawerClose=()=>{this._viewAllOpen=!1}}static{this.styles=[h,r`
      /* ========== HOST ========== */
      :host {
        display: block;
        font-family: var(--type-body-md-family);
        /* Internal density-scaled spacing — private custom props (--_ prefix)
           so they never collide with shared token names. Default tier passes
           through today's existing spacing values unchanged. */
        --_density-gap-sm: var(--spacing-sm1);
        --_density-gap-md: var(--spacing-sm2);
        --_density-pad: var(--spacing-sm1);
        /* Current/completed step color — brand fill, remapped per color-scheme
           below. All 6 usages are graphical (icon fill/stroke, connector bar,
           radial track), not text, so the relevant bar is WCAG 1.4.11 non-text
           contrast (3:1), not 1.4.3 text contrast (4.5:1). Even so, not every
           theme/scheme combination clears it or is intended for fills (Tier 3
           is Decorative-only; some Tier 2 palettes are documented "no fills") —
           see the Playground's Invalid-combination gate in Stepper.stories.ts,
           which reuses isValidColorScheme()/getPaletteTier() (Tier 1 only). */
        --_fill: var(--color-primary-9);
      }

      :host([color-scheme='secondary']) {
        --_fill: var(--color-secondary-9);
      }

      :host([color-scheme='accent']) {
        --_fill: var(--color-accent-9);
      }

      :host([color-scheme='onyx']) {
        --_fill: var(--color-onyx-9);
      }

      :host([data-density='compact']) {
        --_density-gap-sm: var(--spacing-xs2);
        --_density-gap-md: var(--spacing-xs1);
        --_density-pad: var(--spacing-xs2);
      }

      .visually-hidden {
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

      /* ========== VERTICAL LAYOUT ========== */
      .vt-container {
        display: flex;
        flex-direction: column;
        gap: 0;
      }

      .vt-item {
        display: flex;
        flex-direction: row;
        gap: var(--_density-gap-sm);
      }

      .vt-indicator {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
        width: var(--icon-size-lg);
        /* Nudges the icon down to optically center it against the step
           label's line box — text renders ~1px lower than a pure box-model
           center would predict. */
        margin-top: var(--spacing-px);
      }

      .vt-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--icon-size-lg);
        height: var(--icon-size-lg);
        position: relative;
        flex-shrink: 0;
      }

      .vt-connector {
        flex: 1;
        display: flex;
        justify-content: center;
        padding: 0 calc(var(--_density-gap-md) - var(--spacing-px));
      }

      .vt-connector-line {
        width: 2px;
        height: 100%;
      }

      .vt-content {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs2);
        padding-bottom: var(--_density-gap-md);
        flex: 1;
        min-width: 0;
      }

      .vt-item:last-child .vt-content {
        padding-bottom: var(--spacing-0);
      }

      .vt-item:last-child .vt-connector {
        display: none;
      }

      /* Step label */
      .step-label {
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--font-weight-regular);
        padding-top: var(--spacing-px);
        padding-bottom: var(--spacing-px);
        cursor: pointer;
      }

      .step-label:hover {
        text-decoration: underline;
      }

      .step-label--not-started {
        color: var(--color-text-subtle);
      }

      .step-label--current {
        color: var(--color-text-default);
        font-weight: var(--font-weight-bold);
      }

      .step-label--completed {
        color: var(--color-text-default);
      }

      .step-label--needs-attention {
        color: var(--color-text-default);
      }

      .step-label--disabled {
        color: var(--color-disabled-text);
        cursor: default;
        pointer-events: none;
      }

      /* Icon state colors */
      .icon-circle {
        fill: none;
        stroke-width: 2;
      }

      .icon-circle--not-started {
        stroke: var(--color-text-subtle);
        stroke-dasharray: 4 3;
      }

      .icon-circle--disabled {
        stroke: var(--color-disabled-text);
        stroke-dasharray: 4 3;
      }

      .icon-ring-knockout {
        fill: none;
        stroke: var(--color-surface-default);
        stroke-width: 2.6;
      }

      .icon-ring-knockout--sm {
        stroke-width: 1.73;
      }

      .icon-number {
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--font-weight-bold);
        text-anchor: middle;
        dominant-baseline: central;
      }

      .icon-number--not-started {
        fill: var(--color-text-subtle);
      }

      .icon-number--disabled {
        fill: var(--color-disabled-text);
      }

      .icon-filled-circle {
        fill: var(--_fill);
      }

      .icon--current,
      .icon--completed {
        color: var(--_fill);
      }

      .icon--needs-attention {
        color: var(--color-utility-error-emphasis);
      }

      /* Connector state colors */
      .connector--not-started {
        background: var(--color-text-subtle);
      }

      .connector--current {
        background: var(--_fill);
      }

      .connector--completed {
        background: var(--_fill);
      }

      .connector--needs-attention {
        background: var(--color-utility-error-emphasis);
      }

      .connector--disabled {
        background: var(--color-disabled-text);
      }

      /* ========== SUBSTEPS ========== */
      .substep-group {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs2);
      }

      .substep-item {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: var(--_density-gap-sm);
      }

      .substep-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--icon-size-sm);
        height: var(--icon-size-sm);
        flex-shrink: 0;
        padding-top: var(--spacing-xs0);
        padding-bottom: var(--spacing-xs0);
        box-sizing: border-box;
        /* .substep-item uses align-items: flex-start (not stretch, unlike
           .vt-item), so this icon and .substep-label both start at the same
           y=0. The label has no padding and a 24px line-height (center at
           12px); this icon is a 16px border-box with symmetric 3px padding
           (visual center = box center, 8px before any offset). Closing that
           4px gap takes a margin-top of 4px, not the label's own 1px offset
           used at the top-level (.vt-indicator) — the two layouts aren't
           symmetric, so the same token doesn't apply at both levels. */
        margin-top: var(--spacing-xs2);
      }

      .substep-circle {
        fill: none;
        stroke-width: 1.5;
      }

      .substep-circle--not-started {
        stroke: var(--color-text-subtle);
        stroke-dasharray: 4 3;
      }

      .substep-circle--disabled {
        stroke: var(--color-disabled-text);
        stroke-dasharray: 4 3;
      }

      .substep-filled-circle {
        fill: var(--_fill);
      }

      .substep-icon--needs-attention {
        color: var(--color-utility-error-emphasis);
      }

      .substep-label {
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--font-weight-regular);
        flex: 1;
        min-width: 0;
        cursor: pointer;
      }

      .substep-label:hover {
        text-decoration: underline;
      }

      .substep-label:active {
        text-decoration: underline;
        font-weight: var(--font-weight-bold);
      }

      .substep-label--not-started {
        color: var(--color-text-subtle);
      }

      .substep-label--current {
        color: var(--color-text-default);
        font-weight: var(--font-weight-bold);
      }

      .substep-label--completed {
        color: var(--color-text-default);
      }

      .substep-label--needs-attention {
        color: var(--color-text-default);
      }

      .substep-label--disabled {
        color: var(--color-disabled-text);
        cursor: default;
        pointer-events: none;
      }

      /* ========== HORIZONTAL LINE LAYOUT ========== */
      .hr-line-container {
        display: flex;
        flex-direction: row;
        overflow-x: auto;
      }

      .hr-line-item {
        display: flex;
        flex-direction: column;
        gap: var(--_density-gap-md);
        flex: 1;
        min-width: 100px;
        align-items: center;
      }

      .hr-line-indicator {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: var(--icon-size-lg);
      }

      .hr-connector {
        flex: 1;
        display: flex;
        align-items: center;
      }

      .hr-connector-line {
        height: 2px;
        width: 100%;
      }

      .hr-label-wrap {
        padding: 0 var(--_density-pad);
        text-align: center;
        width: 100%;
        box-sizing: border-box;
      }

      .hr-label {
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--font-weight-regular);
        cursor: pointer;
      }

      .hr-label:hover {
        text-decoration: underline;
      }

      .hr-label--not-started {
        color: var(--color-text-subtle);
      }

      .hr-label--current {
        color: var(--color-text-default);
        font-weight: var(--font-weight-bold);
      }

      .hr-label--completed {
        color: var(--color-text-default);
      }

      .hr-label--needs-attention {
        color: var(--color-text-default);
      }

      .hr-label--disabled {
        color: var(--color-disabled-text);
        cursor: default;
        pointer-events: none;
      }

      /* ========== RADIAL LAYOUT ========== */
      .radial-container {
        display: flex;
        flex-direction: column;
        gap: var(--_density-pad);
      }

      .radial-step-labels {
        display: flex;
        flex-direction: row;
        gap: var(--_density-pad);
        align-items: flex-start;
      }

      .radial-container--align-center .radial-step-labels {
        align-items: center;
      }

      .radial-label-group {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs2);
        flex: 1;
        min-width: 0;
      }

      .radial-current-label {
        font-family: var(--type-heading-3-family);
        font-size: var(--type-heading-3-size);
        line-height: var(--type-heading-3-line-height);
        font-weight: var(--font-weight-regular);
        color: var(--color-text-default);
      }

      .radial-current-label--heading-2 {
        font-family: var(--type-heading-2-family);
        font-size: var(--type-heading-2-size);
        line-height: var(--type-heading-2-line-height);
      }

      .radial-current-label--heading-4 {
        font-family: var(--type-heading-4-family);
        font-size: var(--type-heading-4-size);
        line-height: var(--type-heading-4-line-height);
      }

      .radial-current-label--heading-5 {
        font-family: var(--type-heading-5-family);
        font-size: var(--type-heading-5-size);
        line-height: var(--type-heading-5-line-height);
      }

      .radial-current-label--bold {
        font-weight: var(--font-weight-bold);
      }

      .radial-next-label {
        display: flex;
        flex-direction: row;
        gap: var(--spacing-xs1);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
      }

      .radial-next-prefix {
        font-weight: var(--font-weight-regular);
        color: var(--color-text-subtle);
      }

      .radial-next-text {
        font-weight: var(--font-weight-regular);
        color: var(--color-text-subtle);
      }

      .radial-last-step {
        font-weight: var(--font-weight-regular);
        color: var(--color-text-subtle);
      }

      /* Radial SVG tracker */
      .radial-tracker {
        flex-shrink: 0;
        /* Optical alignment: align-items: flex-start aligns box edges, but the label's
           box-top is its line-box top, sitting above the text's visible cap-height due to
           line-height leading. Nudge the SVG down to match the label's visible top. */
        margin-top: 4px;
        /* Component-scoped track color — no dedicated mms global token for this;
           aliases the closest structural border token (see token mapping table). */
        --_track-color: var(--color-border-subtle);
      }

      .radial-container--align-center .radial-tracker {
        margin-top: 0;
      }

      .radial-track-bg {
        fill: none;
        stroke: var(--_track-color);
      }

      .radial-track-active {
        fill: none;
        stroke: var(--_fill);
        stroke-linecap: round;
        transition: stroke-dashoffset var(--motion-duration-base) var(--motion-easing-standard);
      }

      .radial-counter {
        font-family: var(--type-body-md-family);
        font-weight: var(--font-weight-bold);
        fill: var(--color-text-default);
        text-anchor: middle;
        dominant-baseline: central;
      }

      .radial-counter--large {
        font-size: var(--type-body-md-size);
      }

      .radial-counter--small {
        font-size: var(--type-body-sm-size);
      }

      /* Radial action button — 8px gap from last label, inside label group */
      .radial-action {
        margin-top: calc(var(--spacing-sm1) - var(--spacing-xs2));
      }

      /* ========== RESPONSIVE (vertical only, below 768px) ========== */
      .responsive-compact {
        display: none;
      }

      @media (max-width: 768px) {
        .responsive-full {
          display: none;
        }
        .responsive-compact {
          display: block;
        }
      }

      /* Force compact via attribute (Storybook demo) */
      :host([force-compact]) .responsive-full {
        display: none !important;
      }
      :host([force-compact]) .responsive-compact {
        display: block !important;
      }
    `]}_handleStepClick(e,t){e.state!==`disabled`&&this.dispatchEvent(new CustomEvent(`step-click`,{bubbles:!0,composed:!0,detail:{index:t,label:e.label,state:e.state??`not-started`}}))}_handleSubstepClick(e,t,n){e.state!==`disabled`&&this.dispatchEvent(new CustomEvent(`substep-click`,{bubbles:!0,composed:!0,detail:{stepIndex:t,substepIndex:n,label:e.label,state:e.state??`not-started`}}))}_handleActivateKey(e,t){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t())}_renderStepIcon(e,t){switch(e){case`current`:return a`
          <svg class="vt-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <circle class="icon-filled-circle" cx="12" cy="12" r="12" />
            <circle class="icon-ring-knockout" cx="12" cy="12" r="8.3" />
          </svg>
        `;case`completed`:return a`<mms-icon class="icon--completed" name="check-circle" size="lg" weight="fill"></mms-icon>`;case`needs-attention`:return a`<mms-icon class="icon--needs-attention" name="warning-circle" size="lg"></mms-icon>`;case`disabled`:return a`
          <svg class="vt-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <circle class="icon-circle icon-circle--disabled" cx="12" cy="12" r="11" />
            ${this.showStepNumbers?s`<text class="icon-number icon-number--disabled" x="12" y="12">${t+1}</text>`:n}
          </svg>
        `;default:return a`
          <svg class="vt-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <circle class="icon-circle icon-circle--not-started" cx="12" cy="12" r="11" />
            ${this.showStepNumbers?s`<text class="icon-number icon-number--not-started" x="12" y="12">${t+1}</text>`:n}
          </svg>
        `}}_renderSubstepIcon(e){switch(e){case`current`:return a`
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <circle class="substep-filled-circle" cx="8" cy="8" r="8" />
            <circle class="icon-ring-knockout icon-ring-knockout--sm" cx="8" cy="8" r="5.5" />
          </svg>
        `;case`completed`:return a`<mms-icon class="icon--completed" name="check-circle" size="sm" weight="fill"></mms-icon>`;case`needs-attention`:return a`<mms-icon class="substep-icon--needs-attention" name="warning-circle" size="sm"></mms-icon>`;case`disabled`:return a`
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <circle class="substep-circle substep-circle--disabled" cx="8" cy="8" r="7.25" />
          </svg>
        `;default:return a`
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <circle class="substep-circle substep-circle--not-started" cx="8" cy="8" r="7.25" />
          </svg>
        `}}_stateAnnouncement(e){let t=E[e];return t?a`<span class="visually-hidden">${t}</span>`:n}_renderVertical(){return a`
      <div class="vt-container" role="list" aria-label=${this.label}>
        ${this.items.map((e,t)=>this._renderVerticalItem(e,t))}
      </div>
    `}_renderVerticalItem(e,t){let r=e.state||`not-started`,i=!!e.substeps&&e.substeps.length>0;return a`
      <div class="vt-item" role="listitem">
        <div class="vt-indicator">
          ${this._renderStepIcon(r,t)}
          <div class="vt-connector">
            <div class="vt-connector-line connector--${r}"></div>
          </div>
        </div>
        <div class="vt-content">
          <span
            class="step-label step-label--${r}"
            tabindex=${r===`disabled`?`-1`:`0`}
            role="button"
            aria-current=${r===`current`?`step`:n}
            @click=${()=>this._handleStepClick(e,t)}
            @keydown=${n=>this._handleActivateKey(n,()=>this._handleStepClick(e,t))}
            >${e.label||`Step ${t+1}`}${this._stateAnnouncement(r)}</span
          >
          ${i?this._renderSubstepGroup(e.substeps,t):n}
        </div>
      </div>
    `}_renderSubstepGroup(e,t){return a`
      <div class="substep-group">
        ${e.map((e,r)=>{let i=e.state||`not-started`;return a`
            <div class="substep-item">
              <div class="substep-icon">${this._renderSubstepIcon(i)}</div>
              <span
                class="substep-label substep-label--${i}"
                tabindex=${i===`disabled`?`-1`:`0`}
                role="button"
                aria-current=${i===`current`?`step`:n}
                @click=${()=>this._handleSubstepClick(e,t,r)}
                @keydown=${n=>this._handleActivateKey(n,()=>this._handleSubstepClick(e,t,r))}
                >${e.label}${this._stateAnnouncement(i)}</span
              >
            </div>
          `})}
      </div>
    `}_renderHorizontalLine(){return a`
      <div class="hr-line-container" role="list" aria-label=${this.label}>
        ${this.items.map((e,t)=>this._renderHorizontalLineItem(e,t))}
      </div>
    `}_renderHorizontalLineItem(e,t){let r=e.state||`not-started`,i=t===0,o=t===this.items.length-1;return a`
      <div class="hr-line-item" role="listitem">
        <div class="hr-line-indicator">
          ${i?a`<div class="hr-connector"></div>`:a`<div class="hr-connector"><div class="hr-connector-line connector--${r}"></div></div>`}
          ${this._renderStepIcon(r,t)}
          ${o?a`<div class="hr-connector"></div>`:a`<div class="hr-connector">
                <div class="hr-connector-line connector--${this._getNextConnectorState(t)}"></div>
              </div>`}
        </div>
        <div class="hr-label-wrap">
          <span
            class="hr-label hr-label--${r}"
            tabindex=${r===`disabled`?`-1`:`0`}
            role="button"
            aria-current=${r===`current`?`step`:n}
            @click=${()=>this._handleStepClick(e,t)}
            @keydown=${n=>this._handleActivateKey(n,()=>this._handleStepClick(e,t))}
            >${e.label||`Step ${t+1}`}${this._stateAnnouncement(r)}</span
          >
        </div>
      </div>
    `}_getNextConnectorState(e){let t=this.items[e+1];return t&&t.state||`not-started`}_renderRadial(){let e=this.items.length,t=this.items.findIndex(e=>e.state===`current`)+1||1,r=this.radialAlignment===`center`?` radial-container--align-center`:``,i=this.actionLabel?a`<mms-button
          class="radial-action"
          variant="ghost"
          color-scheme=${this.colorScheme}
          label=${this.actionLabel}
          @click=${this._handleActionClick}
        ></mms-button>`:n;return a`
      <div class="radial-container${r}">
        <div class="radial-step-labels">
          <div class="radial-label-group" aria-live="polite">
            ${this._renderRadialLabels()} ${i}
          </div>
          ${this._renderRadialTracker(t,e)}
        </div>
      </div>
    `}_renderRadialLabels(){return a`
      <span class="radial-current-label${this.labelSize===`heading-3`?``:` radial-current-label--${this.labelSize}`}${this.labelBold?` radial-current-label--bold`:``}">${this.currentStepLabel}</span>
      ${this.isLastStep?a`<span class="radial-next-label"><span class="radial-last-step">Last step</span></span>`:this.nextStepLabel?a`<span class="radial-next-label">
              <span class="radial-next-prefix">Next:</span>
              <span class="radial-next-text">${this.nextStepLabel}</span>
            </span>`:n}
    `}_renderRadialTracker(e,t,n){let r=(n||this.radialSize)===`large`,i=r?84:64,o=r?8.4:6.4,s=(i-o)/2,c=i/2,l=i/2,u=2*Math.PI*s;return a`
      <svg
        class="radial-tracker"
        width=${i}
        height=${i}
        viewBox="0 0 ${i} ${i}"
        role="img"
        aria-label="Step ${e} of ${t}"
      >
        <circle class="radial-track-bg" cx=${c} cy=${l} r=${s} stroke-width=${o} />
        <circle
          class="radial-track-active"
          cx=${c}
          cy=${l}
          r=${s}
          stroke-width=${o}
          stroke-dasharray=${u}
          stroke-dashoffset=${u*(1-(t>0?e/t:0))}
          transform="rotate(-90 ${c} ${l})"
        />
        <text class="radial-counter radial-counter--${r?`large`:`small`}" x=${c} y=${l}
          >${e} of ${t}</text
        >
      </svg>
    `}_renderResponsiveRadial(){let e=this.items.findIndex(e=>e.state===`current`),t=this.items.length,r=e>=0?e+1:1,i=e>=0?this.items[e].label:``,o=e===this.items.length-1,s=!o&&e>=0&&e<this.items.length-1?this.items[e+1].label:``,c=this.actionLabel||`View all steps`;return a`
      <div class="radial-container">
        <div class="radial-step-labels">
          <div class="radial-label-group" aria-live="polite">
            <span class="radial-current-label radial-current-label--heading-5">${i}</span>
            ${o?a`<span class="radial-next-label"><span class="radial-last-step">Last step</span></span>`:s?a`<span class="radial-next-label">
                    <span class="radial-next-prefix">Next:</span>
                    <span class="radial-next-text">${s}</span>
                  </span>`:n}
            <mms-button
              class="radial-action"
              variant="ghost"
              label=${c}
              @click=${this._handleActionClick}
            ></mms-button>
          </div>
          ${this._renderRadialTracker(r,t,`small`)}
        </div>
      </div>
    `}_renderStepsDrawer(){return this._stepsDrawerRendered?a`
      <mms-drawer
        .open=${this._viewAllOpen}
        size="sm"
        title-text=${this.label}
        .description=${!1}
        primary-label=""
        secondary-label="Close"
        color-scheme=${this.colorScheme}
        @close=${this._handleStepsDrawerClose}
      >
        <mms-stepper
          type="vertical"
          label="${this.label} — full list"
          .items=${this.items}
          color-scheme=${this.colorScheme}
          .showStepNumbers=${this.showStepNumbers}
        ></mms-stepper>
      </mms-drawer>
    `:n}render(){return a`
      ${this._renderByType()}
      ${this.actionLabel?this._renderStepsDrawer():n}
    `}_renderByType(){switch(this.type){case`radial`:return this._renderRadial();case`horizontal-line`:return this._renderHorizontalLine();default:return a`
          <div class="responsive-full">${this._renderVertical()}</div>
          <div class="responsive-compact">${this._renderResponsiveRadial()}</div>
        `}}},p([l({type:String,reflect:!0})],D.prototype,`type`,void 0),p([l({type:String,reflect:!0,attribute:`color-scheme`})],D.prototype,`colorScheme`,void 0),p([l({type:Array})],D.prototype,`items`,void 0),p([l({type:String})],D.prototype,`label`,void 0),p([l({type:Boolean,attribute:`show-step-numbers`})],D.prototype,`showStepNumbers`,void 0),p([l({type:String,attribute:`radial-size`})],D.prototype,`radialSize`,void 0),p([l({type:String,attribute:`radial-alignment`})],D.prototype,`radialAlignment`,void 0),p([l({type:String,attribute:`action-label`})],D.prototype,`actionLabel`,void 0),p([l({type:String,attribute:`current-step-label`})],D.prototype,`currentStepLabel`,void 0),p([l({type:String,attribute:`next-step-label`})],D.prototype,`nextStepLabel`,void 0),p([l({type:String,attribute:`label-size`})],D.prototype,`labelSize`,void 0),p([l({type:Boolean,attribute:`label-bold`})],D.prototype,`labelBold`,void 0),p([l({type:Boolean,attribute:`is-last-step`})],D.prototype,`isLastStep`,void 0),p([l({type:Boolean,reflect:!0,attribute:`force-compact`})],D.prototype,`forceCompact`,void 0),p([f()],D.prototype,`_viewAllOpen`,void 0),p([f()],D.prototype,`_stepsDrawerRendered`,void 0),D=p([c(`mms-stepper`)],D)})),k=t({LayoutBehavior:()=>V,Overview:()=>B,PlaygroundStory:()=>G,ResponsiveDemo:()=>H,ResponsiveDemoHorizontal:()=>W,ResponsiveDemoRail:()=>U,__namedExportsOrder:()=>K,default:()=>A}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q=e((()=>{o(),O(),x(),w(),b(),A={title:`Navigational/Stepper`,tags:[`!autodocs`]},j={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},M=`680px`,N=`960px`,P={frame:`border: 2px dashed rgba(128,128,128,0.35); border-radius: 8px; padding: 2rem 1.5rem 1rem; position: relative; margin-bottom: 0.75rem;`,frameLabel:`position: absolute; top: -0.7rem; left: 1rem; background: var(--color-surface-default, #fff); padding: 0 0.5rem; font-size: 0.75rem; font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;`,caption:`font-size: 0.8125rem; opacity: 0.65; text-align: center; margin: 0.5rem 0 0;`,callout:e=>`background: ${e}0d; border-left: 3px solid ${e}; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;`,viewportBox:`border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; padding: 1.25rem 1rem; background: rgba(128,128,128,0.03); display: flex; align-items: center; justify-content: center;`,widthRow:`margin: 0.75rem 12% 0; height: 1.125rem; border-top: 1px solid rgba(128,128,128,0.3); border-left: 1px solid rgba(128,128,128,0.3); border-right: 1px solid rgba(128,128,128,0.3); border-radius: 4px 4px 0 0; display: flex; align-items: flex-end; justify-content: center;`,widthLabel:`font-size: 0.75rem; opacity: 0.55; font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; transform: translateY(0.6rem); background: var(--color-surface-default, #fff); padding: 0 0.375rem; white-space: nowrap;`},F=[{label:`Account details`,state:`completed`},{label:`Eligibility information`,state:`completed`},{label:`Household information`,state:`current`,substeps:[{label:`Household members`,state:`completed`},{label:`Income verification`,state:`current`},{label:`Additional documentation`,state:`not-started`}]},{label:`Confirmation`,state:`not-started`}],I=[{label:`Account details`,state:`completed`},{label:`Eligibility information`,state:`completed`},{label:`Household information`,state:`current`},{label:`Confirmation`,state:`not-started`}],L=[{label:`Personal info`,state:`completed`},{label:`Program selection`,state:`completed`},{label:`Documents`,state:`current`},{label:`Review`,state:`not-started`}],R=[{label:`Personal info`,state:`completed`},{label:`Program selection`,state:`completed`},{label:`Documents`,state:`current`},{label:`Review`,state:`not-started`},{label:`Confirmation`,state:`not-started`}],z=[{label:`Not started`,state:`not-started`},{label:`Current`,state:`current`},{label:`Completed`,state:`completed`},{label:`Needs attention`,state:`needs-attention`},{label:`Disabled`,state:`disabled`}],B={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${N}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${j.h1}">Stepper</h1>
      <p style="${j.body} opacity: 0.85; max-width: ${M}; margin-bottom: 2rem;">
        Displays the steps and progress through a task or journey, driven by a single <code style="${j.monoSm}">items</code>
        array. <code style="${j.monoSm}">vertical</code> and <code style="${j.monoSm}">horizontal-line</code> are the
        two layouts you choose between directly. <code style="${j.monoSm}">radial</code> is <code style="${j.monoSm}">vertical</code>'s
        responsive pair, not a third independent choice — it's the compact view vertical automatically becomes
        below the responsive breakpoint. It's still a real, settable <code style="${j.monoSm}">type</code>, shown
        in its own section below and selectable in the Playground, so you can preview it directly without resizing
        anything.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Vertical -->
      <h2 style="${j.h2}">Vertical</h2>
      <p style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin-bottom: 1.5rem;">
        The default layout. Best for long or detailed journeys — supports optional <code style="${j.monoSm}">substeps</code>
        nested under any step, as shown on "Household information" below.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem; max-width: 420px;">
        <mms-stepper type="vertical" label="Application progress" .items=${F}></mms-stepper>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Radial -->
      <h2 style="${j.h2}">Radial</h2>
      <p style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin-bottom: 1.5rem;">
        A compact circular progress tracker with the current step's label, an optional next-step preview, and
        an optional action button. It's already the compact representation — it has no further collapsed state.
        The action button ("View all steps" below) is built in: clicking it opens a drawer showing the full
        <code style="${j.monoSm}">vertical</code> stepper for the same <code style="${j.monoSm}">items</code> array
        — icons, substeps, and states included. No wiring required from consumers; every instance with an
        <code style="${j.monoSm}">action-label</code> set gets this automatically. The two demos below share the
        same size and alignment (large, top-aligned) and differ only in the axis that actually matters here:
        whether there's a next step (with an action button) or it's the last step.
      </p>

      <div style="display: flex; gap: 2rem; flex-wrap: wrap; margin-bottom: 1rem;">
        <div style="flex: 1; min-width: 280px; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${j.caption} opacity: 0.65; margin-bottom: 0.75rem;"><strong>Large, top-aligned, with action</strong></p>
          <mms-stepper
            type="radial"
            label="Task progress"
            .items=${L}
            radial-size="large"
            radial-alignment="top"
            current-step-label="Upload documents"
            next-step-label="Review"
            action-label="View all steps"
          ></mms-stepper>
        </div>
        <div style="flex: 1; min-width: 280px; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${j.caption} opacity: 0.65; margin-bottom: 0.75rem;"><strong>Large, top-aligned, last step</strong></p>
          <mms-stepper
            type="radial"
            label="Task progress"
            .items=${[{label:`Personal info`,state:`completed`},{label:`Program selection`,state:`completed`},{label:`Review`,state:`current`}]}
            radial-size="large"
            radial-alignment="top"
            current-step-label="Review"
            is-last-step
          ></mms-stepper>
        </div>
      </div>

      <h3 style="${j.h3} opacity: 1; margin-top: 2.5rem;">Responsive collapse</h3>
      <p style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin-bottom: 1.5rem;">
        Below a 768px viewport, <code style="${j.monoSm}">vertical</code> automatically collapses into the compact
        radial view above. <code style="${j.monoSm}">horizontal-line</code> never collapses — instead its row
        scrolls horizontally so full labels stay legible instead of being truncated or shrunk. Resize the window
        to see vertical's collapse live, or use the <code style="${j.monoSm}">force-compact</code> attribute to
        preview it at any width without resizing.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Horizontal line -->
      <h2 style="${j.h2}">Horizontal line</h2>
      <p style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin-bottom: 1.5rem;">
        Best for short, linear flows (3–5 steps) with room across the top of a page. Substeps are not supported
        in this layout.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-stepper type="horizontal-line" label="Enrollment progress" .items=${L}></mms-stepper>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Step states -->
      <h2 style="${j.h2}">Step states</h2>
      <p style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin-bottom: 1.5rem;">
        Five states are available per step (and per substep): <code style="${j.monoSm}">not-started</code>,
        <code style="${j.monoSm}">current</code>, <code style="${j.monoSm}">completed</code>,
        <code style="${j.monoSm}">needs-attention</code>, and <code style="${j.monoSm}">disabled</code>.
        State is never color-only — each carries a distinct icon shape, and completed/needs-attention/disabled
        also carry a screen-reader-only text announcement.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem; max-width: 420px;">
        <mms-stepper type="vertical" label="Step states" .items=${z}></mms-stepper>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="${j.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${j.monoSm}"><code>const items = [
  { label: 'Account details', state: 'completed' },
  { label: 'Household information', state: 'current', substeps: [
    { label: 'Income verification', state: 'current' },
  ]},
  { label: 'Review and submit', state: 'not-started' },
];

&lt;mms-stepper type="vertical" label="Application progress" .items=\${items}&gt;&lt;/mms-stepper&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Accessibility -->
      <h2 style="${j.h2}">Accessibility</h2>

      <h3 style="${j.h3}">WCAG 2.2 AA Compliance</h3>
      ${C(S.stepper.rows)}

      <h3 style="${j.h3}">Screen Reader Behavior</h3>
      <ul style="${j.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Structure:</strong> Steps render as a <code style="${j.monoSm}">role="list"</code>/<code style="${j.monoSm}">role="listitem"</code> group with an <code style="${j.monoSm}">aria-label</code> naming the overall list.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Current step:</strong> Announced via <code style="${j.monoSm}">aria-current="step"</code> — never conveyed by color alone.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Other states:</strong> Completed, needs-attention, and disabled steps carry a visually-hidden text announcement ("Completed", "Needs attention", "Disabled") appended to the step label.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Radial tracker:</strong> The circular progress SVG carries <code style="${j.monoSm}">role="img"</code> with an <code style="${j.monoSm}">aria-label</code> of "Step X of Y"; the current/next label group is <code style="${j.monoSm}">aria-live="polite"</code> so step changes are announced.</li>
        <li><strong>Decorative icons:</strong> All state icons are <code style="${j.monoSm}">aria-hidden</code> — the accessible name comes from the label text and state announcement, not the icon.</li>
      </ul>

      <h3 style="${j.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus between clickable steps/substeps (and the radial action button, when present). Disabled steps are not tab stops.</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused step, substep, or action button, firing <code style="${j.monoSm}">step-click</code>, <code style="${j.monoSm}">substep-click</code>, or <code style="${j.monoSm}">action-click</code>.</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},V={name:`Layout & Behavior`,render:(e,t)=>{let n=`globals=backgrounds.value:${t.globals?.backgrounds?.value===`dark`?`dark`:`light`}`;return a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${N}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Intro -->
      <h1 style="${j.h1}">Layout &amp; Behavior</h1>
      <p style="${j.body} opacity: 0.85; max-width: ${M}; margin-bottom: 1rem;">
        Stepper is a plain block-level element with no default width — sizing follows the layout you choose, and
        each has an expected place on the page:
      </p>
      <ul style="${j.body} opacity: 0.85; max-width: ${M}; margin: 0 0 1.5rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          <code style="${j.monoSm}">horizontal-line</code> sits above the main content, spanning its full width, to
          aid navigation across the page.
        </li>
        <li style="margin-bottom: 0.5rem;">
          <code style="${j.monoSm}">vertical</code> sits in a left-hand column beside the main content, with the
          right-hand panel reflecting the current step (see the breakpoint diagram below).
        </li>
        <li>
          <code style="${j.monoSm}">radial</code>, when used as a standalone widget rather than vertical's
          auto-collapsed view, sizes to whatever container you give it.
        </li>
      </ul>
      <p style="${j.body} opacity: 0.85; max-width: ${M}; margin-bottom: 2rem;">
        This page covers layout selection, the responsive collapse rule, the per-layout interactivity model
        (including the rationale behind vertical vs. horizontal-line), and overflow behavior.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Choosing a layout -->
      <h2 style="${j.h2}">Choosing a layout</h2>
      <p style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin-bottom: 1rem;">
        Three layouts share one <code style="${j.monoSm}">items</code> array — switching
        <code style="${j.monoSm}">type</code> doesn't require reshaping data:
      </p>
      <ul style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin: 0 0 1rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          <strong>Vertical</strong> — the default. Use for long or detailed journeys, or when any step needs
          <code style="${j.monoSm}">substeps</code> (the only layout that supports them). No practical item-count
          ceiling; it grows down the page instead of competing for horizontal space.
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong>Radial</strong> — not an independent choice for a whole flow. It's the compact view
          <code style="${j.monoSm}">vertical</code> automatically becomes below the responsive breakpoint (see
          "Responsive collapse" below), documented and selectable here — and in the Playground via
          <code style="${j.monoSm}">type="radial"</code> — so it can be previewed directly. Set it directly only
          for a standalone persistent header/sidebar widget.
        </li>
        <li>
          <strong>Horizontal-line</strong> — best for short, linear flows (3–5 steps) with room across the top of
          a page. No substeps. Never collapses to radial at any width; its row scrolls horizontally instead (see
          Overflow below) once items no longer fit, keeping full labels legible rather than swapping to a compact
          view.
        </li>
      </ul>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Responsive collapse -->
      <h2 style="${j.h2}">Responsive collapse</h2>
      <p style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin-bottom: 0.75rem;">
        Below <strong>768px</strong>, <code style="${j.monoSm}">vertical</code> collapses into the compact radial
        view automatically — a single <code style="${j.monoSm}">@media</code> rule, no JS measurement.
        <code style="${j.monoSm}">horizontal-line</code> has no part in this — it never collapses (see Overflow
        below).
      </p>
      <ul style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin: 0 0 1.5rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          Both subtrees render at all times; the media query only toggles which is visible — instant on resize,
          no re-render, and the hidden one drops out of the accessibility tree so nothing double-announces.
        </li>
        <li style="margin-bottom: 0.5rem;">
          Radial isn't a separate, disconnected mode — it reads the same <code style="${j.monoSm}">items</code>
          array for its "Step X of Y" counter, whether it got there by auto-collapsing or via
          <code style="${j.monoSm}">type="radial"</code> directly.
        </li>
        <li>
          The one exception is label <em>text</em>: auto-collapse derives it from the current/next item's own
          <code style="${j.monoSm}">label</code>. A standalone radial widget sets it manually instead, via
          <code style="${j.monoSm}">current-step-label</code>/<code style="${j.monoSm}">next-step-label</code>
          (plus <code style="${j.monoSm}">is-last-step</code>).
        </li>
      </ul>

      <!-- Breakpoint diagram: real component, own iframe per band, pinned to a -->
      <!-- literal pixel width so the real 768px @media query genuinely fires -->
      <!-- for that browsing context (this page itself renders well above it). -->
      <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 0.5rem;">
        <div style="width: 100%;">
          <div style="${P.frame}">
            <span style="${P.frameLabel}">&gt; 768px viewport</span>
            <div style="${P.viewportBox}">
              <iframe
                src="./iframe.html?id=navigational-stepper--responsive-demo-rail&viewMode=story&${n}"
                style="width: 900px; max-width: 100%; height: 300px; border: 0; background: transparent;"
                title="mms-stepper rendered at a real 900px viewport width, as a left rail alongside main content"
              ></iframe>
            </div>
            <div style="${P.widthRow}"><span style="${P.widthLabel}">vertical, as a rail beside content</span></div>
          </div>
          <p style="${P.caption}">Above the breakpoint — vertical renders in full, as a narrow rail next to the page's main content</p>
        </div>
        <div style="max-width: 420px;">
          <div style="${P.frame}">
            <span style="${P.frameLabel}">&le; 768px viewport</span>
            <div style="${P.viewportBox} flex-direction: column; align-items: stretch; gap: 1rem;">
              <iframe
                src="./iframe.html?id=navigational-stepper--responsive-demo&viewMode=story&${n}"
                style="width: 100%; height: 130px; border: 0; background: transparent;"
                title="mms-stepper rendered at a real 375px viewport width"
              ></iframe>
              <div style="min-height: 100px; background: rgba(128,128,128,0.06); border-radius: 6px; display: flex; align-items: center; justify-content: center;">
                <span style="${j.caption} opacity: 0.4;">Main content area</span>
              </div>
            </div>
            <div style="${P.widthRow}"><span style="${P.widthLabel}">compact radial (auto), content stacks below</span></div>
          </div>
          <p style="${P.caption}">At/below the breakpoint — same <code style="${j.monoSm}">items</code>, collapsed to radial; content stacks below rather than sitting beside it</p>
        </div>
      </div>
      <p style="${j.caption} opacity: 0.55; max-width: ${M}; margin-bottom: 1rem;">
        Each frame embeds the real component in its own <code style="${j.monoSm}">iframe</code>, pinned to a
        literal pixel width so its <code style="${j.monoSm}">@media</code> query actually evaluates for that
        viewport (this page itself is wider than 768px). Resize this window below 768px to see it live.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Interactivity model -->
      <h2 style="${j.h2}">Interactivity model</h2>
      <p style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin-bottom: 1rem;">
        Steps are navigational controls, so vertical and horizontal-line are interactive the same way:
      </p>
      <ul style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin: 0 0 1rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          <strong>Vertical</strong> — every step and substep label is a real control:
          <code style="${j.monoSm}">tabindex="0"</code>, <code style="${j.monoSm}">role="button"</code>, and a
          click/Enter/Space handler firing <code style="${j.monoSm}">step-click</code> or
          <code style="${j.monoSm}">substep-click</code>. Disabled steps drop to
          <code style="${j.monoSm}">tabindex="-1"</code> and don't fire.
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong>Radial</strong> — no per-step controls (no per-step DOM to click); the only control is the
          single optional action button, firing <code style="${j.monoSm}">action-click</code>.
        </li>
        <li>
          <strong>Horizontal-line</strong> — same model as vertical, at the step level: each
          <code style="${j.monoSm}">.hr-label</code> is <code style="${j.monoSm}">tabindex="0"</code>,
          <code style="${j.monoSm}">role="button"</code>, click/Enter/Space-activated, firing
          <code style="${j.monoSm}">step-click</code>. Disabled steps drop to
          <code style="${j.monoSm}">tabindex="-1"</code>. No substeps in this layout, so no
          <code style="${j.monoSm}">substep-click</code> equivalent.
        </li>
      </ul>
      <div style="${P.callout(`#3B82F6`)}">
        <p style="${j.bodySm} margin: 0;">
          <strong>Vertical and horizontal-line match on purpose:</strong> steps are navigational UI regardless of
          layout, so both get the same click/keyboard model — unlike Marina, where horizontal-line is static.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Overflow -->
      <h2 style="${j.h2}">Overflow (horizontal-line)</h2>
      <p style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin-bottom: 0.5rem;">
        Horizontal-line has no breakpoint — it scrolls instead of collapsing:
      </p>
      <ul style="${j.bodySm} opacity: 0.85; max-width: ${M}; margin: 0 0 1rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          <code style="${j.monoSm}">.hr-line-container</code> is <code style="${j.monoSm}">overflow-x: auto</code>;
          each item is <code style="${j.monoSm}">flex: 1; min-width: 100px</code> — items shrink toward that floor,
          then the row scrolls once they can't shrink further.
        </li>
        <li style="margin-bottom: 0.5rem;">
          Each <code style="${j.monoSm}">.hr-label</code> is already keyboard-focusable, so the scrollable region
          satisfies axe's <code style="${j.monoSm}">scrollable-region-focusable</code> rule with no extra
          <code style="${j.monoSm}">tabindex</code> needed.
        </li>
        <li>
          The scrollbar below sits on an outer wrapper the docs page owns, not on
          <code style="${j.monoSm}">.hr-line-container</code> itself — that internal scrollbar is
          shadow-encapsulated and can't be restyled from outside without piercing the shadow boundary.
          The component below is otherwise fully real and unmodified.
        </li>
      </ul>
      <div style="width: 100%; margin-bottom: 0.5rem;">
        <div style="${P.frame}">
          <span style="${P.frameLabel}">375px viewport</span>
          <div style="${P.viewportBox}">
            <iframe
              src="./iframe.html?id=navigational-stepper--responsive-demo-horizontal&viewMode=story&${n}"
              style="width: 375px; max-width: 100%; height: 170px; border: 0; background: transparent;"
              title="mms-stepper horizontal-line rendered at a real 375px viewport width"
            ></iframe>
          </div>
          <div style="${P.widthRow}"><span style="${P.widthLabel}">full row, scrollable</span></div>
        </div>
        <p style="${P.caption}">Five items at their natural width need more than 375px, so the row scrolls instead of collapsing.</p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Other considerations -->
      <h2 style="${j.h2}">Other considerations</h2>
      <ul style="${j.bodySm} margin: 0; padding-left: 1.5rem; opacity: 0.85; max-width: ${M};">
        <li style="margin-bottom: 0.75rem;">
          <span style="${P.callout(`#22C55E`).replace(`padding: 1rem 1.25rem;`,`padding: 0.0625rem 0.5rem;`).replace(`margin-bottom: 1.5rem;`,``).replace(`border-radius: 0 6px 6px 0;`,`border-radius: 3px;`).replace(`border-left: 3px solid #22C55E;`,`border: none;`)}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Current behavior</span>
          Width is entirely consumer-owned — there's no min/max-width default, so vertical and radial demos above
          are wrapped in a sized container purely for the docs page; production usage should size the wrapper
          deliberately rather than relying on any built-in constraint.
        </li>
        <li style="margin-bottom: 0.75rem;">
          <span style="${P.callout(`#3B82F6`).replace(`padding: 1rem 1.25rem;`,`padding: 0.0625rem 0.5rem;`).replace(`margin-bottom: 1.5rem;`,``).replace(`border-radius: 0 6px 6px 0;`,`border-radius: 3px;`).replace(`border-left: 3px solid #3B82F6;`,`border: none;`)}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Consumer-owned</span>
          Navigating via <code style="${j.monoSm}">step-click</code>/<code style="${j.monoSm}">substep-click</code>
          doesn't change <code style="${j.monoSm}">items</code> itself — the component never mutates its own state
          on click. The host page owns re-rendering with updated step states in response to the event.
        </li>
        <li>
          <span style="${P.callout(`#22C55E`).replace(`padding: 1rem 1.25rem;`,`padding: 0.0625rem 0.5rem;`).replace(`margin-bottom: 1.5rem;`,``).replace(`border-radius: 0 6px 6px 0;`,`border-radius: 3px;`).replace(`border-left: 3px solid #22C55E;`,`border: none;`)}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Current behavior</span>
          <code style="${j.monoSm}">force-compact</code> is a demo/test escape hatch (documented as such in the
          component's JSDoc) — it's not intended as a production prop for consumers to force compact mode above
          768px.
        </li>
      </ul>

    </div>
    `}},H={name:`Responsive demo (internal)`,tags:[`!dev`],render:()=>a`
    <mms-stepper type="vertical" label="Enrollment progress" .items=${I}></mms-stepper>
  `},U={name:`Responsive demo rail (internal)`,tags:[`!dev`],render:()=>a`
    <div style="display: flex; align-items: stretch; gap: 1.5rem; height: 240px;">
      <mms-stepper
        type="vertical"
        label="Enrollment progress"
        style="width: 260px; flex-shrink: 0;"
        .items=${I}
      ></mms-stepper>
      <div style="flex: 1; background: rgba(128,128,128,0.06); border-radius: 6px; display: flex; align-items: center; justify-content: center;">
        <span style="opacity: 0.4; font-size: 0.8125rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">Main content area</span>
      </div>
    </div>
  `},W={name:`Responsive demo horizontal (internal)`,tags:[`!dev`],render:()=>a`
    <div style="width: 375px; max-width: 100%; height: 138px; overflow-x: auto; display: flex; align-items: center;">
      <mms-stepper
        type="horizontal-line"
        label="Enrollment progress"
        style="width: max-content; flex-shrink: 0;"
        .items=${R}
      ></mms-stepper>
    </div>
  `},G={name:`Playground`,tags:[`!dev`],args:{type:`vertical`,colorScheme:`primary`,label:`Application progress`,showStepNumbers:!0,showSubsteps:!1,stepCount:5,substepCount:3,step1Label:`Account details`,step1State:`completed`,step2Label:`Eligibility information`,step2State:`completed`,step3Label:`Household information`,step3State:`current`,step4Label:`Review and submit`,step4State:`not-started`,step5Label:`Confirmation`,step5State:`not-started`,radialSize:`large`,radialAlignment:`top`,actionLabel:`View all steps`,currentStepLabel:`Household information`,nextStepLabel:`Review and submit`,labelSize:`heading-3`,labelBold:!1,isLastStep:!1,theme:`maximus`,density:`default`},decorators:[(e,t)=>{let n=t.args.theme||`maximus`,r=t.args.density||`default`;return a`
        <div
          data-theme=${n}
          data-mode=${t.globals?.backgrounds?.value===`dark`?`dark`:`light`}
          data-density=${r}
          style="
            display: flex;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 420px;">
            ${e()}
          </div>
        </div>
      `}],argTypes:{type:{name:`Type`,control:`select`,options:[`vertical`,`radial`,`horizontal-line`],description:`Layout type`,table:{category:`Content`}},colorScheme:{name:`Color scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Brand color applied to the current/completed step indicator, connector, and radial track`,table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Accessible name for the step list (aria-label)`,table:{category:`Content`}},showStepNumbers:{name:`Show step numbers`,control:`boolean`,description:`Show step numbers inside the not-started/disabled icon`,table:{category:`Content`}},showSubsteps:{name:`Show substeps`,control:`boolean`,description:`Attach a sample substeps group to whichever step is "current" (vertical layout only) — demos the nested, "level 2" view vs. the plain step list.`,table:{category:`Content`}},stepCount:{name:`Step count`,control:{type:`range`,min:2,max:5,step:1},description:`Number of steps shown (demo only — real steppers can have any number of items)`,table:{category:`Demo Controls`}},substepCount:{name:`Substep count`,control:{type:`range`,min:1,max:3,step:1},description:`Number of substeps attached to the current step when Show substeps is on (demo only — real steppers can have any number of substeps)`,table:{category:`Demo Controls`}},step1Label:{name:`Label`,control:`text`,table:{category:`Step 1`}},step1State:{name:`State`,control:`select`,options:[`not-started`,`current`,`completed`,`needs-attention`,`disabled`],table:{category:`Step 1`}},step2Label:{name:`Label`,control:`text`,table:{category:`Step 2`}},step2State:{name:`State`,control:`select`,options:[`not-started`,`current`,`completed`,`needs-attention`,`disabled`],table:{category:`Step 2`}},step3Label:{name:`Label`,control:`text`,table:{category:`Step 3`}},step3State:{name:`State`,control:`select`,options:[`not-started`,`current`,`completed`,`needs-attention`,`disabled`],table:{category:`Step 3`}},step4Label:{name:`Label`,control:`text`,table:{category:`Step 4`}},step4State:{name:`State`,control:`select`,options:[`not-started`,`current`,`completed`,`needs-attention`,`disabled`],table:{category:`Step 4`}},step5Label:{name:`Label`,control:`text`,table:{category:`Step 5`}},step5State:{name:`State`,control:`select`,options:[`not-started`,`current`,`completed`,`needs-attention`,`disabled`],table:{category:`Step 5`}},radialSize:{name:`Radial size`,control:`select`,options:[`large`,`small`],description:`Radial tracker size (radial type only; responsive-compact fallback always uses small)`,table:{category:`Radial`}},radialAlignment:{name:`Radial alignment`,control:`select`,options:[`top`,`center`],description:`Vertical alignment of the radial label group against the tracker`,table:{category:`Radial`}},currentStepLabel:{name:`Current step label`,control:`text`,description:`Radial current-step display text`,table:{category:`Radial`}},nextStepLabel:{name:`Next step label`,control:`text`,description:`Radial next-step preview text (ignored when Is last step is set)`,table:{category:`Radial`}},isLastStep:{name:`Is last step`,control:`boolean`,description:`Radial: shows "Last step" instead of the next-step preview`,table:{category:`Radial`}},actionLabel:{name:`Action label`,control:`text`,description:`Radial action button text. Empty hides the button.`,table:{category:`Radial`}},labelSize:{name:`Label size`,control:`select`,options:[`heading-2`,`heading-3`,`heading-4`,`heading-5`],description:`Radial current-step label size`,table:{category:`Radial`}},labelBold:{name:`Label bold`,control:`boolean`,description:`Bold the radial current-step label`,table:{category:`Radial`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.type&&n.type!==`vertical`&&r.push(`type="${n.type}"`),n.colorScheme&&n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.label&&r.push(`label="${n.label}"`),n.showStepNumbers===!1&&r.push(`show-step-numbers="false"`),n.type===`radial`&&(n.radialSize&&n.radialSize!==`large`&&r.push(`radial-size="${n.radialSize}"`),n.radialAlignment&&n.radialAlignment!==`top`&&r.push(`radial-alignment="${n.radialAlignment}"`),n.currentStepLabel&&r.push(`current-step-label="${n.currentStepLabel}"`),n.isLastStep?r.push(`is-last-step`):n.nextStepLabel&&r.push(`next-step-label="${n.nextStepLabel}"`),n.actionLabel&&r.push(`action-label="${n.actionLabel}"`),n.labelSize&&n.labelSize!==`heading-3`&&r.push(`label-size="${n.labelSize}"`),n.labelBold&&r.push(`label-bold`)),n.theme&&n.theme!==`maximus`&&r.push(`data-theme="${n.theme}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-stepper\n  ${r.join(`
  `)}\n  .items=\${items}\n></mms-stepper>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=v(e.theme,e.colorScheme),r=y(e.theme,e.colorScheme);if(!t){let t=r===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,n=r===2?`Lacks step 10 (hover state) and, on at least one theme, is documented as no-fills — stepper's icon fill, connector, and radial track are all fills. Use for branded text or badges, not step indicators.`:`Lacks text contrast and hover states, and does not meet non-text (3:1) contrast on every theme. Decorative backgrounds only — not a functional step indicator.`;return a`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 440px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            <strong>${t}:</strong> ${n}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
            See <em>Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      `}let i=[{label:e.step1Label,state:e.step1State},{label:e.step2Label,state:e.step2State},{label:e.step3Label,state:e.step3State},{label:e.step4Label,state:e.step4State},{label:e.step5Label,state:e.step5State}].slice(0,e.stepCount);if(e.showSubsteps&&e.type===`vertical`){let t=i.findIndex(e=>e.state===`current`);t>=0&&(i[t]={...i[t],substeps:[{label:`Household members`,state:`completed`},{label:`Income verification`,state:`current`},{label:`Additional documentation`,state:`not-started`}].slice(0,e.substepCount)})}return a`
      <mms-stepper
        type=${e.type}
        color-scheme=${e.colorScheme}
        label=${e.label}
        ?show-step-numbers=${e.showStepNumbers}
        radial-size=${e.radialSize}
        radial-alignment=${e.radialAlignment}
        current-step-label=${e.currentStepLabel}
        next-step-label=${e.nextStepLabel}
        ?is-last-step=${e.isLastStep}
        action-label=${e.actionLabel}
        label-size=${e.labelSize}
        ?label-bold=${e.labelBold}
        data-density=${e.density===`compact`?`compact`:n}
        .items=${i}
      ></mms-stepper>
    `}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Stepper</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Displays the steps and progress through a task or journey, driven by a single <code style="\${t.monoSm}">items</code>
        array. <code style="\${t.monoSm}">vertical</code> and <code style="\${t.monoSm}">horizontal-line</code> are the
        two layouts you choose between directly. <code style="\${t.monoSm}">radial</code> is <code style="\${t.monoSm}">vertical</code>'s
        responsive pair, not a third independent choice — it's the compact view vertical automatically becomes
        below the responsive breakpoint. It's still a real, settable <code style="\${t.monoSm}">type</code>, shown
        in its own section below and selectable in the Playground, so you can preview it directly without resizing
        anything.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Vertical -->
      <h2 style="\${t.h2}">Vertical</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The default layout. Best for long or detailed journeys — supports optional <code style="\${t.monoSm}">substeps</code>
        nested under any step, as shown on "Household information" below.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem; max-width: 420px;">
        <mms-stepper type="vertical" label="Application progress" .items=\${VERTICAL_STEPS_SIMPLE}></mms-stepper>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Radial -->
      <h2 style="\${t.h2}">Radial</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        A compact circular progress tracker with the current step's label, an optional next-step preview, and
        an optional action button. It's already the compact representation — it has no further collapsed state.
        The action button ("View all steps" below) is built in: clicking it opens a drawer showing the full
        <code style="\${t.monoSm}">vertical</code> stepper for the same <code style="\${t.monoSm}">items</code> array
        — icons, substeps, and states included. No wiring required from consumers; every instance with an
        <code style="\${t.monoSm}">action-label</code> set gets this automatically. The two demos below share the
        same size and alignment (large, top-aligned) and differ only in the axis that actually matters here:
        whether there's a next step (with an action button) or it's the last step.
      </p>

      <div style="display: flex; gap: 2rem; flex-wrap: wrap; margin-bottom: 1rem;">
        <div style="flex: 1; min-width: 280px; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.75rem;"><strong>Large, top-aligned, with action</strong></p>
          <mms-stepper
            type="radial"
            label="Task progress"
            .items=\${HORIZONTAL_STEPS}
            radial-size="large"
            radial-alignment="top"
            current-step-label="Upload documents"
            next-step-label="Review"
            action-label="View all steps"
          ></mms-stepper>
        </div>
        <div style="flex: 1; min-width: 280px; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.75rem;"><strong>Large, top-aligned, last step</strong></p>
          <mms-stepper
            type="radial"
            label="Task progress"
            .items=\${[{
    label: 'Personal info',
    state: 'completed'
  }, {
    label: 'Program selection',
    state: 'completed'
  }, {
    label: 'Review',
    state: 'current'
  }]}
            radial-size="large"
            radial-alignment="top"
            current-step-label="Review"
            is-last-step
          ></mms-stepper>
        </div>
      </div>

      <h3 style="\${t.h3} opacity: 1; margin-top: 2.5rem;">Responsive collapse</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Below a 768px viewport, <code style="\${t.monoSm}">vertical</code> automatically collapses into the compact
        radial view above. <code style="\${t.monoSm}">horizontal-line</code> never collapses — instead its row
        scrolls horizontally so full labels stay legible instead of being truncated or shrunk. Resize the window
        to see vertical's collapse live, or use the <code style="\${t.monoSm}">force-compact</code> attribute to
        preview it at any width without resizing.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Horizontal line -->
      <h2 style="\${t.h2}">Horizontal line</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Best for short, linear flows (3–5 steps) with room across the top of a page. Substeps are not supported
        in this layout.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-stepper type="horizontal-line" label="Enrollment progress" .items=\${HORIZONTAL_STEPS}></mms-stepper>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Step states -->
      <h2 style="\${t.h2}">Step states</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Five states are available per step (and per substep): <code style="\${t.monoSm}">not-started</code>,
        <code style="\${t.monoSm}">current</code>, <code style="\${t.monoSm}">completed</code>,
        <code style="\${t.monoSm}">needs-attention</code>, and <code style="\${t.monoSm}">disabled</code>.
        State is never color-only — each carries a distinct icon shape, and completed/needs-attention/disabled
        also carry a screen-reader-only text announcement.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem; max-width: 420px;">
        <mms-stepper type="vertical" label="Step states" .items=\${STATE_DEMO_STEPS}></mms-stepper>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm}"><code>const items = [
  { label: 'Account details', state: 'completed' },
  { label: 'Household information', state: 'current', substeps: [
    { label: 'Income verification', state: 'current' },
  ]},
  { label: 'Review and submit', state: 'not-started' },
];

&lt;mms-stepper type="vertical" label="Application progress" .items=\\\${items}&gt;&lt;/mms-stepper&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['stepper'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Structure:</strong> Steps render as a <code style="\${t.monoSm}">role="list"</code>/<code style="\${t.monoSm}">role="listitem"</code> group with an <code style="\${t.monoSm}">aria-label</code> naming the overall list.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Current step:</strong> Announced via <code style="\${t.monoSm}">aria-current="step"</code> — never conveyed by color alone.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Other states:</strong> Completed, needs-attention, and disabled steps carry a visually-hidden text announcement ("Completed", "Needs attention", "Disabled") appended to the step label.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Radial tracker:</strong> The circular progress SVG carries <code style="\${t.monoSm}">role="img"</code> with an <code style="\${t.monoSm}">aria-label</code> of "Step X of Y"; the current/next label group is <code style="\${t.monoSm}">aria-live="polite"</code> so step changes are announced.</li>
        <li><strong>Decorative icons:</strong> All state icons are <code style="\${t.monoSm}">aria-hidden</code> — the accessible name comes from the label text and state announcement, not the icon.</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus between clickable steps/substeps (and the radial action button, when present). Disabled steps are not tab stops.</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused step, substep, or action button, firing <code style="\${t.monoSm}">step-click</code>, <code style="\${t.monoSm}">substep-click</code>, or <code style="\${t.monoSm}">action-click</code>.</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Layout & Behavior',
  render: (_args: unknown, context: {
    globals?: {
      backgrounds?: {
        value?: string;
      };
    };
  }) => {
    const isDark = context.globals?.backgrounds?.value === 'dark';
    const bg = \`globals=backgrounds.value:\${isDark ? 'dark' : 'light'}\`;
    return html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Intro -->
      <h1 style="\${t.h1}">Layout &amp; Behavior</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Stepper is a plain block-level element with no default width — sizing follows the layout you choose, and
        each has an expected place on the page:
      </p>
      <ul style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin: 0 0 1.5rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          <code style="\${t.monoSm}">horizontal-line</code> sits above the main content, spanning its full width, to
          aid navigation across the page.
        </li>
        <li style="margin-bottom: 0.5rem;">
          <code style="\${t.monoSm}">vertical</code> sits in a left-hand column beside the main content, with the
          right-hand panel reflecting the current step (see the breakpoint diagram below).
        </li>
        <li>
          <code style="\${t.monoSm}">radial</code>, when used as a standalone widget rather than vertical's
          auto-collapsed view, sizes to whatever container you give it.
        </li>
      </ul>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        This page covers layout selection, the responsive collapse rule, the per-layout interactivity model
        (including the rationale behind vertical vs. horizontal-line), and overflow behavior.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Choosing a layout -->
      <h2 style="\${t.h2}">Choosing a layout</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Three layouts share one <code style="\${t.monoSm}">items</code> array — switching
        <code style="\${t.monoSm}">type</code> doesn't require reshaping data:
      </p>
      <ul style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin: 0 0 1rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          <strong>Vertical</strong> — the default. Use for long or detailed journeys, or when any step needs
          <code style="\${t.monoSm}">substeps</code> (the only layout that supports them). No practical item-count
          ceiling; it grows down the page instead of competing for horizontal space.
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong>Radial</strong> — not an independent choice for a whole flow. It's the compact view
          <code style="\${t.monoSm}">vertical</code> automatically becomes below the responsive breakpoint (see
          "Responsive collapse" below), documented and selectable here — and in the Playground via
          <code style="\${t.monoSm}">type="radial"</code> — so it can be previewed directly. Set it directly only
          for a standalone persistent header/sidebar widget.
        </li>
        <li>
          <strong>Horizontal-line</strong> — best for short, linear flows (3–5 steps) with room across the top of
          a page. No substeps. Never collapses to radial at any width; its row scrolls horizontally instead (see
          Overflow below) once items no longer fit, keeping full labels legible rather than swapping to a compact
          view.
        </li>
      </ul>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Responsive collapse -->
      <h2 style="\${t.h2}">Responsive collapse</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 0.75rem;">
        Below <strong>768px</strong>, <code style="\${t.monoSm}">vertical</code> collapses into the compact radial
        view automatically — a single <code style="\${t.monoSm}">@media</code> rule, no JS measurement.
        <code style="\${t.monoSm}">horizontal-line</code> has no part in this — it never collapses (see Overflow
        below).
      </p>
      <ul style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin: 0 0 1.5rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          Both subtrees render at all times; the media query only toggles which is visible — instant on resize,
          no re-render, and the hidden one drops out of the accessibility tree so nothing double-announces.
        </li>
        <li style="margin-bottom: 0.5rem;">
          Radial isn't a separate, disconnected mode — it reads the same <code style="\${t.monoSm}">items</code>
          array for its "Step X of Y" counter, whether it got there by auto-collapsing or via
          <code style="\${t.monoSm}">type="radial"</code> directly.
        </li>
        <li>
          The one exception is label <em>text</em>: auto-collapse derives it from the current/next item's own
          <code style="\${t.monoSm}">label</code>. A standalone radial widget sets it manually instead, via
          <code style="\${t.monoSm}">current-step-label</code>/<code style="\${t.monoSm}">next-step-label</code>
          (plus <code style="\${t.monoSm}">is-last-step</code>).
        </li>
      </ul>

      <!-- Breakpoint diagram: real component, own iframe per band, pinned to a -->
      <!-- literal pixel width so the real 768px @media query genuinely fires -->
      <!-- for that browsing context (this page itself renders well above it). -->
      <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 0.5rem;">
        <div style="width: 100%;">
          <div style="\${d.frame}">
            <span style="\${d.frameLabel}">&gt; 768px viewport</span>
            <div style="\${d.viewportBox}">
              <iframe
                src="./iframe.html?id=navigational-stepper--responsive-demo-rail&viewMode=story&\${bg}"
                style="width: 900px; max-width: 100%; height: 300px; border: 0; background: transparent;"
                title="mms-stepper rendered at a real 900px viewport width, as a left rail alongside main content"
              ></iframe>
            </div>
            <div style="\${d.widthRow}"><span style="\${d.widthLabel}">vertical, as a rail beside content</span></div>
          </div>
          <p style="\${d.caption}">Above the breakpoint — vertical renders in full, as a narrow rail next to the page's main content</p>
        </div>
        <div style="max-width: 420px;">
          <div style="\${d.frame}">
            <span style="\${d.frameLabel}">&le; 768px viewport</span>
            <div style="\${d.viewportBox} flex-direction: column; align-items: stretch; gap: 1rem;">
              <iframe
                src="./iframe.html?id=navigational-stepper--responsive-demo&viewMode=story&\${bg}"
                style="width: 100%; height: 130px; border: 0; background: transparent;"
                title="mms-stepper rendered at a real 375px viewport width"
              ></iframe>
              <div style="min-height: 100px; background: rgba(128,128,128,0.06); border-radius: 6px; display: flex; align-items: center; justify-content: center;">
                <span style="\${t.caption} opacity: 0.4;">Main content area</span>
              </div>
            </div>
            <div style="\${d.widthRow}"><span style="\${d.widthLabel}">compact radial (auto), content stacks below</span></div>
          </div>
          <p style="\${d.caption}">At/below the breakpoint — same <code style="\${t.monoSm}">items</code>, collapsed to radial; content stacks below rather than sitting beside it</p>
        </div>
      </div>
      <p style="\${t.caption} opacity: 0.55; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Each frame embeds the real component in its own <code style="\${t.monoSm}">iframe</code>, pinned to a
        literal pixel width so its <code style="\${t.monoSm}">@media</code> query actually evaluates for that
        viewport (this page itself is wider than 768px). Resize this window below 768px to see it live.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Interactivity model -->
      <h2 style="\${t.h2}">Interactivity model</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Steps are navigational controls, so vertical and horizontal-line are interactive the same way:
      </p>
      <ul style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin: 0 0 1rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          <strong>Vertical</strong> — every step and substep label is a real control:
          <code style="\${t.monoSm}">tabindex="0"</code>, <code style="\${t.monoSm}">role="button"</code>, and a
          click/Enter/Space handler firing <code style="\${t.monoSm}">step-click</code> or
          <code style="\${t.monoSm}">substep-click</code>. Disabled steps drop to
          <code style="\${t.monoSm}">tabindex="-1"</code> and don't fire.
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong>Radial</strong> — no per-step controls (no per-step DOM to click); the only control is the
          single optional action button, firing <code style="\${t.monoSm}">action-click</code>.
        </li>
        <li>
          <strong>Horizontal-line</strong> — same model as vertical, at the step level: each
          <code style="\${t.monoSm}">.hr-label</code> is <code style="\${t.monoSm}">tabindex="0"</code>,
          <code style="\${t.monoSm}">role="button"</code>, click/Enter/Space-activated, firing
          <code style="\${t.monoSm}">step-click</code>. Disabled steps drop to
          <code style="\${t.monoSm}">tabindex="-1"</code>. No substeps in this layout, so no
          <code style="\${t.monoSm}">substep-click</code> equivalent.
        </li>
      </ul>
      <div style="\${d.callout('#3B82F6')}">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Vertical and horizontal-line match on purpose:</strong> steps are navigational UI regardless of
          layout, so both get the same click/keyboard model — unlike Marina, where horizontal-line is static.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Overflow -->
      <h2 style="\${t.h2}">Overflow (horizontal-line)</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 0.5rem;">
        Horizontal-line has no breakpoint — it scrolls instead of collapsing:
      </p>
      <ul style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin: 0 0 1rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          <code style="\${t.monoSm}">.hr-line-container</code> is <code style="\${t.monoSm}">overflow-x: auto</code>;
          each item is <code style="\${t.monoSm}">flex: 1; min-width: 100px</code> — items shrink toward that floor,
          then the row scrolls once they can't shrink further.
        </li>
        <li style="margin-bottom: 0.5rem;">
          Each <code style="\${t.monoSm}">.hr-label</code> is already keyboard-focusable, so the scrollable region
          satisfies axe's <code style="\${t.monoSm}">scrollable-region-focusable</code> rule with no extra
          <code style="\${t.monoSm}">tabindex</code> needed.
        </li>
        <li>
          The scrollbar below sits on an outer wrapper the docs page owns, not on
          <code style="\${t.monoSm}">.hr-line-container</code> itself — that internal scrollbar is
          shadow-encapsulated and can't be restyled from outside without piercing the shadow boundary.
          The component below is otherwise fully real and unmodified.
        </li>
      </ul>
      <div style="width: 100%; margin-bottom: 0.5rem;">
        <div style="\${d.frame}">
          <span style="\${d.frameLabel}">375px viewport</span>
          <div style="\${d.viewportBox}">
            <iframe
              src="./iframe.html?id=navigational-stepper--responsive-demo-horizontal&viewMode=story&\${bg}"
              style="width: 375px; max-width: 100%; height: 170px; border: 0; background: transparent;"
              title="mms-stepper horizontal-line rendered at a real 375px viewport width"
            ></iframe>
          </div>
          <div style="\${d.widthRow}"><span style="\${d.widthLabel}">full row, scrollable</span></div>
        </div>
        <p style="\${d.caption}">Five items at their natural width need more than 375px, so the row scrolls instead of collapsing.</p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Other considerations -->
      <h2 style="\${t.h2}">Other considerations</h2>
      <ul style="\${t.bodySm} margin: 0; padding-left: 1.5rem; opacity: 0.85; max-width: \${PROSE_MAX};">
        <li style="margin-bottom: 0.75rem;">
          <span style="\${d.callout('#22C55E').replace('padding: 1rem 1.25rem;', 'padding: 0.0625rem 0.5rem;').replace('margin-bottom: 1.5rem;', '').replace('border-radius: 0 6px 6px 0;', 'border-radius: 3px;').replace('border-left: 3px solid #22C55E;', 'border: none;')}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Current behavior</span>
          Width is entirely consumer-owned — there's no min/max-width default, so vertical and radial demos above
          are wrapped in a sized container purely for the docs page; production usage should size the wrapper
          deliberately rather than relying on any built-in constraint.
        </li>
        <li style="margin-bottom: 0.75rem;">
          <span style="\${d.callout('#3B82F6').replace('padding: 1rem 1.25rem;', 'padding: 0.0625rem 0.5rem;').replace('margin-bottom: 1.5rem;', '').replace('border-radius: 0 6px 6px 0;', 'border-radius: 3px;').replace('border-left: 3px solid #3B82F6;', 'border: none;')}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Consumer-owned</span>
          Navigating via <code style="\${t.monoSm}">step-click</code>/<code style="\${t.monoSm}">substep-click</code>
          doesn't change <code style="\${t.monoSm}">items</code> itself — the component never mutates its own state
          on click. The host page owns re-rendering with updated step states in response to the event.
        </li>
        <li>
          <span style="\${d.callout('#22C55E').replace('padding: 1rem 1.25rem;', 'padding: 0.0625rem 0.5rem;').replace('margin-bottom: 1.5rem;', '').replace('border-radius: 0 6px 6px 0;', 'border-radius: 3px;').replace('border-left: 3px solid #22C55E;', 'border: none;')}; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;">Current behavior</span>
          <code style="\${t.monoSm}">force-compact</code> is a demo/test escape hatch (documented as such in the
          component's JSDoc) — it's not intended as a production prop for consumers to force compact mode above
          768px.
        </li>
      </ul>

    </div>
    \`;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Responsive demo (internal)',
  tags: ['!dev'],
  render: () => html\`
    <mms-stepper type="vertical" label="Enrollment progress" .items=\${VERTICAL_STEPS_MINIMAL}></mms-stepper>
  \`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Responsive demo rail (internal)',
  tags: ['!dev'],
  render: () => html\`
    <div style="display: flex; align-items: stretch; gap: 1.5rem; height: 240px;">
      <mms-stepper
        type="vertical"
        label="Enrollment progress"
        style="width: 260px; flex-shrink: 0;"
        .items=\${VERTICAL_STEPS_MINIMAL}
      ></mms-stepper>
      <div style="flex: 1; background: rgba(128,128,128,0.06); border-radius: 6px; display: flex; align-items: center; justify-content: center;">
        <span style="opacity: 0.4; font-size: 0.8125rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">Main content area</span>
      </div>
    </div>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Responsive demo horizontal (internal)',
  tags: ['!dev'],
  render: () => html\`
    <div style="width: 375px; max-width: 100%; height: 138px; overflow-x: auto; display: flex; align-items: center;">
      <mms-stepper
        type="horizontal-line"
        label="Enrollment progress"
        style="width: max-content; flex-shrink: 0;"
        .items=\${HORIZONTAL_STEPS_OVERFLOW}
      ></mms-stepper>
    </div>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Content
    type: 'vertical',
    colorScheme: 'primary',
    label: 'Application progress',
    showStepNumbers: true,
    showSubsteps: false,
    // Demo controls — real steppers can have any number of steps/substeps;
    // these two just slice the fixed demo data below for preview purposes.
    stepCount: 5,
    substepCount: 3,
    // Steps — a natural narrative by default (2 completed, 1 current, rest
    // not-started), not every state at once. Dial an individual step's state
    // to needs-attention/disabled/etc. to preview that state in isolation.
    step1Label: 'Account details',
    step1State: 'completed',
    step2Label: 'Eligibility information',
    step2State: 'completed',
    step3Label: 'Household information',
    step3State: 'current',
    step4Label: 'Review and submit',
    step4State: 'not-started',
    step5Label: 'Confirmation',
    step5State: 'not-started',
    // Radial
    radialSize: 'large',
    radialAlignment: 'top',
    actionLabel: 'View all steps',
    currentStepLabel: 'Household information',
    nextStepLabel: 'Review and submit',
    labelSize: 'heading-3',
    labelBold: false,
    isLastStep: false,
    // Global
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown, context: {
    args: Record<string, unknown>;
    globals: {
      backgrounds?: {
        value?: string;
      };
    };
  }) => {
    const theme = context.args.theme as string || 'maximus';
    const density = context.args.density as string || 'default';
    // Mirrors the global preview.ts decorator's light/dark derivation. Required
    // here because this div re-declares data-theme locally (so the Playground's
    // own theme control works) — without also setting data-mode on the SAME
    // element, the plain \`[data-theme="maximus"]\` light-mode rule re-matches
    // this div and shadows the dark values correctly inherited from <body>,
    // since custom-property resolution is per-element, not just per-ancestor.
    const mode = context.globals?.backgrounds?.value === 'dark' ? 'dark' : 'light';
    return html\`
        <div
          data-theme=\${theme}
          data-mode=\${mode}
          data-density=\${density}
          style="
            display: flex;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 420px;">
            \${story()}
          </div>
        </div>
      \`;
  }],
  argTypes: {
    // ── Content ───────────────────────────────────────────────
    type: {
      name: 'Type',
      control: 'select',
      options: ['vertical', 'radial', 'horizontal-line'],
      description: 'Layout type',
      table: {
        category: 'Content'
      }
    },
    // ── Visual ────────────────────────────────────────────────
    colorScheme: {
      name: 'Color scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Brand color applied to the current/completed step indicator, connector, and radial track',
      table: {
        category: 'Visual'
      }
    },
    label: {
      name: 'Label',
      control: 'text',
      description: 'Accessible name for the step list (aria-label)',
      table: {
        category: 'Content'
      }
    },
    showStepNumbers: {
      name: 'Show step numbers',
      control: 'boolean',
      description: 'Show step numbers inside the not-started/disabled icon',
      table: {
        category: 'Content'
      }
    },
    showSubsteps: {
      name: 'Show substeps',
      control: 'boolean',
      description: 'Attach a sample substeps group to whichever step is "current" (vertical layout only) — demos the nested, "level 2" view vs. the plain step list.',
      table: {
        category: 'Content'
      }
    },
    // ── Demo Controls ─────────────────────────────────────────
    stepCount: {
      name: 'Step count',
      control: {
        type: 'range',
        min: 2,
        max: 5,
        step: 1
      },
      description: 'Number of steps shown (demo only — real steppers can have any number of items)',
      table: {
        category: 'Demo Controls'
      }
    },
    substepCount: {
      name: 'Substep count',
      control: {
        type: 'range',
        min: 1,
        max: 3,
        step: 1
      },
      description: 'Number of substeps attached to the current step when Show substeps is on (demo only — real steppers can have any number of substeps)',
      table: {
        category: 'Demo Controls'
      }
    },
    // ── Step 1–5 ──────────────────────────────────────────────
    step1Label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Step 1'
      }
    },
    step1State: {
      name: 'State',
      control: 'select',
      options: ['not-started', 'current', 'completed', 'needs-attention', 'disabled'],
      table: {
        category: 'Step 1'
      }
    },
    step2Label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Step 2'
      }
    },
    step2State: {
      name: 'State',
      control: 'select',
      options: ['not-started', 'current', 'completed', 'needs-attention', 'disabled'],
      table: {
        category: 'Step 2'
      }
    },
    step3Label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Step 3'
      }
    },
    step3State: {
      name: 'State',
      control: 'select',
      options: ['not-started', 'current', 'completed', 'needs-attention', 'disabled'],
      table: {
        category: 'Step 3'
      }
    },
    step4Label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Step 4'
      }
    },
    step4State: {
      name: 'State',
      control: 'select',
      options: ['not-started', 'current', 'completed', 'needs-attention', 'disabled'],
      table: {
        category: 'Step 4'
      }
    },
    step5Label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Step 5'
      }
    },
    step5State: {
      name: 'State',
      control: 'select',
      options: ['not-started', 'current', 'completed', 'needs-attention', 'disabled'],
      table: {
        category: 'Step 5'
      }
    },
    // ── Radial ────────────────────────────────────────────────
    radialSize: {
      name: 'Radial size',
      control: 'select',
      options: ['large', 'small'],
      description: 'Radial tracker size (radial type only; responsive-compact fallback always uses small)',
      table: {
        category: 'Radial'
      }
    },
    radialAlignment: {
      name: 'Radial alignment',
      control: 'select',
      options: ['top', 'center'],
      description: 'Vertical alignment of the radial label group against the tracker',
      table: {
        category: 'Radial'
      }
    },
    currentStepLabel: {
      name: 'Current step label',
      control: 'text',
      description: 'Radial current-step display text',
      table: {
        category: 'Radial'
      }
    },
    nextStepLabel: {
      name: 'Next step label',
      control: 'text',
      description: 'Radial next-step preview text (ignored when Is last step is set)',
      table: {
        category: 'Radial'
      }
    },
    isLastStep: {
      name: 'Is last step',
      control: 'boolean',
      description: 'Radial: shows "Last step" instead of the next-step preview',
      table: {
        category: 'Radial'
      }
    },
    actionLabel: {
      name: 'Action label',
      control: 'text',
      description: 'Radial action button text. Empty hides the button.',
      table: {
        category: 'Radial'
      }
    },
    labelSize: {
      name: 'Label size',
      control: 'select',
      options: ['heading-2', 'heading-3', 'heading-4', 'heading-5'],
      description: 'Radial current-step label size',
      table: {
        category: 'Radial'
      }
    },
    labelBold: {
      name: 'Label bold',
      control: 'boolean',
      description: 'Bold the radial current-step label',
      table: {
        category: 'Radial'
      }
    },
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['default', 'maximus', 'va-gov', 'uss-oh-dvs'],
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
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string | boolean>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.type && a.type !== 'vertical') attrs.push(\`type="\${a.type}"\`);
          if (a.colorScheme && a.colorScheme !== 'primary') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.label) attrs.push(\`label="\${a.label}"\`);
          if (a.showStepNumbers === false) attrs.push('show-step-numbers="false"');
          if (a.type === 'radial') {
            if (a.radialSize && a.radialSize !== 'large') attrs.push(\`radial-size="\${a.radialSize}"\`);
            if (a.radialAlignment && a.radialAlignment !== 'top') attrs.push(\`radial-alignment="\${a.radialAlignment}"\`);
            if (a.currentStepLabel) attrs.push(\`current-step-label="\${a.currentStepLabel}"\`);
            if (a.isLastStep) {
              attrs.push('is-last-step');
            } else if (a.nextStepLabel) {
              attrs.push(\`next-step-label="\${a.nextStepLabel}"\`);
            }
            if (a.actionLabel) attrs.push(\`action-label="\${a.actionLabel}"\`);
            if (a.labelSize && a.labelSize !== 'heading-3') attrs.push(\`label-size="\${a.labelSize}"\`);
            if (a.labelBold) attrs.push('label-bold');
          }
          if (a.theme && a.theme !== 'maximus') attrs.push(\`data-theme="\${a.theme}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');

          // Note: .items must be set programmatically, not via attribute
          return \`<mms-stepper\\n  \${attrs.join('\\n  ')}\\n  .items=\\\${items}\\n></mms-stepper>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none' // Preserve argTypes definition order
    }
  },
  render: (args: {
    type: StepperType;
    colorScheme: string;
    label: string;
    showStepNumbers: boolean;
    showSubsteps: boolean;
    stepCount: number;
    substepCount: number;
    step1Label: string;
    step1State: StepperItem['state'];
    step2Label: string;
    step2State: StepperItem['state'];
    step3Label: string;
    step3State: StepperItem['state'];
    step4Label: string;
    step4State: StepperItem['state'];
    step5Label: string;
    step5State: StepperItem['state'];
    radialSize: string;
    radialAlignment: string;
    currentStepLabel: string;
    nextStepLabel: string;
    isLastStep: boolean;
    actionLabel: string;
    labelSize: string;
    labelBold: boolean;
    theme: string;
    density: string;
  }) => {
    const valid = isValidColorScheme(args.theme as Theme, args.colorScheme as ColorScheme);
    const tier = getPaletteTier(args.theme as Theme, args.colorScheme as ColorScheme);
    if (!valid) {
      const tierLabel = tier === 2 ? 'Tier 2 (Text + Surface)' : 'Tier 3 (Decorative)';
      const tierReason = tier === 2 ? 'Lacks step 10 (hover state) and, on at least one theme, is documented as no-fills — stepper\\'s icon fill, connector, and radial track are all fills. Use for branded text or badges, not step indicators.' : 'Lacks text contrast and hover states, and does not meet non-text (3:1) contrast on every theme. Decorative backgrounds only — not a functional step indicator.';
      return html\`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 440px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            <strong>\${tierLabel}:</strong> \${tierReason}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
            See <em>Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      \`;
    }
    const allItems: StepperItem[] = [{
      label: args.step1Label,
      state: args.step1State
    }, {
      label: args.step2Label,
      state: args.step2State
    }, {
      label: args.step3Label,
      state: args.step3State
    }, {
      label: args.step4Label,
      state: args.step4State
    }, {
      label: args.step5Label,
      state: args.step5State
    }];
    const items = allItems.slice(0, args.stepCount);

    // Mirrors Marina's showSubsteps toggle: attach the sample substeps group
    // to whichever step is "current", only for vertical (the only layout
    // that supports substeps) — demos "level 1 only" vs. "level 2 introduced"
    // as one clean on/off switch instead of baking substeps in permanently.
    if (args.showSubsteps && args.type === 'vertical') {
      const currentIndex = items.findIndex(item => item.state === 'current');
      if (currentIndex >= 0) {
        items[currentIndex] = {
          ...items[currentIndex],
          // \`satisfies\` rather than a bare literal: .slice() would otherwise make
          // TypeScript infer this array on its own and widen \`state\` to string,
          // silently disabling the StepperItemState union at the one call site
          // that feeds it user-authored values.
          substeps: ([{
            label: 'Household members',
            state: 'completed'
          }, {
            label: 'Income verification',
            state: 'current'
          }, {
            label: 'Additional documentation',
            state: 'not-started'
          }] satisfies StepperSubstep[]).slice(0, args.substepCount)
        };
      }
    }
    return html\`
      <mms-stepper
        type=\${args.type}
        color-scheme=\${args.colorScheme}
        label=\${args.label}
        ?show-step-numbers=\${args.showStepNumbers}
        radial-size=\${args.radialSize}
        radial-alignment=\${args.radialAlignment}
        current-step-label=\${args.currentStepLabel}
        next-step-label=\${args.nextStepLabel}
        ?is-last-step=\${args.isLastStep}
        action-label=\${args.actionLabel}
        label-size=\${args.labelSize}
        ?label-bold=\${args.labelBold}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
        .items=\${items}
      ></mms-stepper>
    \`;
  }
}`,...G.parameters?.docs?.source}}},K=[`Overview`,`LayoutBehavior`,`ResponsiveDemo`,`ResponsiveDemoRail`,`ResponsiveDemoHorizontal`,`PlaygroundStory`]}));q();export{V as LayoutBehavior,B as Overview,G as PlaygroundStory,H as ResponsiveDemo,W as ResponsiveDemoHorizontal,U as ResponsiveDemoRail,K as __namedExportsOrder,A as default,q as n,k as t};