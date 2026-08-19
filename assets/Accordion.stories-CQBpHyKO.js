import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{a as s,f as c,i as l,m as u,n as d,o as f,t as p,u as m}from"./decorate-BdwtT8fT.js";import{t as h}from"./mms-icon.component-B0xp-9Qj.js";import{t as g}from"./iframe-DuNKalfB.js";import{a as _,o as v,r as y,t as b}from"./a11y-outcome-DcpqwzN2.js";var x,S,C=e((()=>{o(),f(),s(),h(),d(),x=0,S=class extends i{constructor(){super(),this.headerText=``,this.expanded=!1,this.cuePosition=`right`,this.cueType=`caret`,this.titleSize=`body`,this.indent=!1,this.icon=``,this._handleClick=()=>{this._toggle()},this._handleKeyDown=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._toggle())};let e=x++;this._headerId=`mms-accordion-header-${e}`,this._bodyId=`mms-accordion-body-${e}`}static{this.styles=[l,r`
      :host {
        display: block;
        box-sizing: border-box;
        border-bottom: var(--border-width-xs) solid var(--color-border-default);
      }

      :host(:first-of-type) {
        border-top: var(--border-width-xs) solid var(--color-border-default);
      }

      .header {
        all: unset;
        display: flex;
        align-items: center;
        gap: var(--spacing-sm2);
        box-sizing: border-box;
        width: 100%;
        cursor: pointer;
        color: var(--color-text-default);
        background: transparent;
        transition: background var(--motion-duration-fast) var(--motion-easing-standard);
      }

      .header:hover {
        background: var(--color-surface-hover);
      }

      :host([title-size='title']) .header {
        padding-block: var(--spacing-md1);
        font-family: var(--type-heading-5-family);
        font-size: var(--type-heading-5-size);
        line-height: var(--type-heading-5-line-height);
        font-weight: var(--type-heading-5-weight);
        letter-spacing: var(--type-heading-5-letter-spacing);
      }

      :host([title-size='body']) .header {
        padding-block: var(--spacing-sm2);
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--font-weight-medium);
      }

      :host([indent]) .header {
        padding-inline: var(--spacing-md1);
      }

      .icon-text {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm1);
        flex: 1;
        min-width: 0;
      }

      .header-text {
        flex: 1;
        min-width: 0;
        text-align: left;
      }

      .brand-icon {
        flex-shrink: 0;
        display: inline-flex;
      }

      .cue {
        flex-shrink: 0;
        color: var(--color-text-subtle);
      }

      .body-wrapper {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows var(--motion-duration-moderate) var(--motion-easing-standard);
      }

      :host([expanded]) .body-wrapper {
        grid-template-rows: 1fr;
      }

      .body-inner {
        overflow: hidden;
        min-height: 0;
      }

      .body-content {
        padding-block: var(--spacing-sm1) var(--spacing-lg1);
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        color: var(--color-text-default);
      }

      :host([indent]) .body-content {
        padding-inline: var(--spacing-md1);
      }

      :host(:not([indent])[cue-position='left']) .body-content {
        padding-left: var(--spacing-lg-mid);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         DENSITY: COMPACT
         ═══════════════════════════════════════════════════════════════════════ */
      :host([data-density='compact'][title-size='title']) .header {
        padding-block: var(--spacing-sm2);
      }

      :host([data-density='compact'][title-size='body']) .header {
        padding-block: var(--spacing-sm1);
      }

      :host([data-density='compact']) .body-content {
        padding-block: var(--spacing-xs2) var(--spacing-md1);
      }

      :host([data-density='compact'][indent]) .header,
      :host([data-density='compact'][indent]) .body-content {
        padding-inline: var(--spacing-sm2);
      }

      @media (prefers-reduced-motion: reduce) {
        .body-wrapper,
        .header {
          transition: none;
        }
      }
    `]}_toggle(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent(`accordion-item-toggle`,{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}_cueIconName(){return this.cueType===`plus-minus`?this.expanded?`minus`:`plus`:this.expanded?`caret-up`:`caret-down`}focusHeader(){this.shadowRoot?.querySelector(`.header`)?.focus()}render(){let e=a`<mms-icon class="cue" name=${this._cueIconName()} size="sm"></mms-icon>`,t=this.icon?a`<mms-icon class="brand-icon" name=${this.icon} size="lg"></mms-icon>`:n;return a`
      <button
        type="button"
        class="header"
        id=${this._headerId}
        aria-expanded=${this.expanded?`true`:`false`}
        aria-controls=${this._bodyId}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        ${this.cuePosition===`left`?e:n}
        <span class="icon-text">
          ${t}
          <span class="header-text">${this.headerText}</span>
        </span>
        ${this.cuePosition===`right`?e:n}
      </button>
      <div class="body-wrapper" id=${this._bodyId} role="region" aria-labelledby=${this._headerId}>
        <div class="body-inner">
          <div class="body-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}},p([c({type:String,attribute:`header-text`})],S.prototype,`headerText`,void 0),p([c({type:Boolean,reflect:!0})],S.prototype,`expanded`,void 0),p([c({type:String,reflect:!0,attribute:`cue-position`})],S.prototype,`cuePosition`,void 0),p([c({type:String,reflect:!0,attribute:`cue-type`})],S.prototype,`cueType`,void 0),p([c({type:String,reflect:!0,attribute:`title-size`})],S.prototype,`titleSize`,void 0),p([c({type:Boolean,reflect:!0})],S.prototype,`indent`,void 0),p([c({type:String})],S.prototype,`icon`,void 0),S=p([u(`mms-accordion-item`)],S)})),w,T=e((()=>{o(),f(),C(),d(),w=class extends i{constructor(...e){super(...e),this.mode=`multiple`,this.cuePosition=`right`,this.cueType=`caret`,this.titleSize=`body`,this.indent=!1,this.density=`default`,this._items=[],this._handleSlotChange=()=>{this._propagateToItems()},this._handleItemToggle=e=>{if(this.mode!==`single`||!e.detail.expanded)return;let t=e.target;this._items.forEach(e=>{e!==t&&(e.expanded=!1)})},this._handleKeyDown=e=>{let t=this._items;if(t.length===0)return;let n=e.target,r=t.indexOf(n);if(r<0)return;let i=r;switch(e.key){case`ArrowDown`:e.preventDefault(),i=(r+1)%t.length;break;case`ArrowUp`:e.preventDefault(),i=(r-1+t.length)%t.length;break;case`Home`:e.preventDefault(),i=0;break;case`End`:e.preventDefault(),i=t.length-1;break;default:return}t[i]?.focusHeader()}}static{this.styles=r`
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
    }
  `}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this._handleKeyDown),this.addEventListener(`accordion-item-toggle`,this._handleItemToggle)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this._handleKeyDown),this.removeEventListener(`accordion-item-toggle`,this._handleItemToggle)}updated(e){super.updated(e),(e.has(`cuePosition`)||e.has(`cueType`)||e.has(`titleSize`)||e.has(`indent`)||e.has(`density`))&&this._propagateToItems()}_getItems(){let e=this.shadowRoot?.querySelector(`slot`);return e?e.assignedElements({flatten:!0}).filter(e=>e.tagName===`MMS-ACCORDION-ITEM`):[]}_propagateToItems(){let e=this._getItems();this._items=e,e.forEach(e=>{e.setAttribute(`cue-position`,this.cuePosition),e.setAttribute(`cue-type`,this.cueType),e.setAttribute(`title-size`,this.titleSize),e.setAttribute(`data-density`,this.density),this.indent?e.setAttribute(`indent`,``):e.removeAttribute(`indent`)})}render(){return a`<slot @slotchange=${this._handleSlotChange}></slot>`}},p([c({type:String,reflect:!0})],w.prototype,`mode`,void 0),p([c({type:String,reflect:!0,attribute:`cue-position`})],w.prototype,`cuePosition`,void 0),p([c({type:String,reflect:!0,attribute:`cue-type`})],w.prototype,`cueType`,void 0),p([c({type:String,reflect:!0,attribute:`title-size`})],w.prototype,`titleSize`,void 0),p([c({type:Boolean,reflect:!0})],w.prototype,`indent`,void 0),p([c({type:String,reflect:!0,attribute:`data-density`})],w.prototype,`density`,void 0),p([m()],w.prototype,`_items`,void 0),w=p([u(`mms-accordion`)],w)})),E=t({Overview:()=>j,PlaygroundStory:()=>M,__namedExportsOrder:()=>N,default:()=>D}),D,O,k,A,j,M,N,P=e((()=>{o(),T(),C(),g(),_(),b(),D={title:`Content Display/Accordion`,tags:[`!autodocs`]},O={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},k=`680px`,A=`960px`,j={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${A}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${O.h1}">Accordion</h1>
      <p style="${O.body} opacity: 0.85; max-width: ${k}; margin-bottom: 2rem;">
        A list of collapsible sections. Content is organized under headers that expand to reveal
        body content when clicked. <code style="${O.monoSm}">mms-accordion</code> coordinates
        single-open exclusivity and keyboard navigation across slotted
        <code style="${O.monoSm}">mms-accordion-item</code> elements — items also work standalone.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${O.h2}">Basic usage</h2>
      <p style="${O.bodySm} opacity: 0.85; max-width: ${k}; margin-bottom: 1.5rem;">
        By default, <code style="${O.monoSm}">mode="multiple"</code> allows any number of items open
        at once.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-accordion>
          <mms-accordion-item header-text="What is a design system?" expanded>
            A design system is a governed set of components, tokens, and guidelines that produce
            consistent, accessible interfaces across every engagement.
          </mms-accordion-item>
          <mms-accordion-item header-text="How are brand themes applied?">
            Each engagement supplies a standalone brand token sheet that conforms to the shared
            structural contract — brand sheets are not overrides on top of a default theme.
          </mms-accordion-item>
          <mms-accordion-item header-text="Is this accessible?">
            Yes — the header is a native button with unique per-instance <code style="${O.monoSm}">aria-controls</code>/<code style="${O.monoSm}">aria-labelledby</code> ids, and arrow keys move focus between headers.
          </mms-accordion-item>
        </mms-accordion>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Single mode -->
      <h2 style="${O.h2}">Single mode</h2>
      <p style="${O.bodySm} opacity: 0.85; max-width: ${k}; margin-bottom: 1.5rem;">
        <code style="${O.monoSm}">mode="single"</code> collapses any other open item when one is
        expanded.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-accordion mode="single">
          <mms-accordion-item header-text="Section one" expanded>
            Only one section can be open at a time in single mode.
          </mms-accordion-item>
          <mms-accordion-item header-text="Section two">
            Opening this section closes section one.
          </mms-accordion-item>
          <mms-accordion-item header-text="Section three">
            Opening this section closes whichever other section was open.
          </mms-accordion-item>
        </mms-accordion>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Cue position -->
      <h2 style="${O.h2}">Cue position</h2>
      <p style="${O.bodySm} opacity: 0.85; max-width: ${k}; margin-bottom: 1.5rem;">
        The expand/collapse icon can render on either side of the header text via
        <code style="${O.monoSm}">cue-position</code>.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${O.h3}">Right (default)</p>
          <mms-accordion cue-position="right">
            <mms-accordion-item header-text="Cue on the right" expanded>Body content.</mms-accordion-item>
          </mms-accordion>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${O.h3}">Left</p>
          <mms-accordion cue-position="left">
            <mms-accordion-item header-text="Cue on the left" expanded>Body content.</mms-accordion-item>
          </mms-accordion>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Cue type -->
      <h2 style="${O.h2}">Cue type</h2>
      <p style="${O.bodySm} opacity: 0.85; max-width: ${k}; margin-bottom: 1.5rem;">
        <code style="${O.monoSm}">cue-type</code> switches the expand/collapse icon between a caret
        (rotates via icon swap, not CSS rotation — <code style="${O.monoSm}">mms-icon</code> has no
        direction prop) and a plus/minus glyph.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${O.h3}">Caret (default)</p>
          <mms-accordion cue-type="caret">
            <mms-accordion-item header-text="Caret cue" expanded>Body content.</mms-accordion-item>
          </mms-accordion>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${O.h3}">Plus / minus</p>
          <mms-accordion cue-type="plus-minus">
            <mms-accordion-item header-text="Plus/minus cue" expanded>Body content.</mms-accordion-item>
          </mms-accordion>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Title size -->
      <h2 style="${O.h2}">Title size</h2>
      <p style="${O.bodySm} opacity: 0.85; max-width: ${k}; margin-bottom: 1.5rem;">
        <code style="${O.monoSm}">title-size="title"</code> renders the header using the
        heading-5 type scale — a larger size and the heading font family — for page-level
        sections; <code style="${O.monoSm}">"body"</code> (default) matches body copy for
        denser lists like FAQs.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${O.h3}">Title</p>
          <mms-accordion title-size="title">
            <mms-accordion-item header-text="Example section header" expanded>Body content.</mms-accordion-item>
          </mms-accordion>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${O.h3}">Body (default)</p>
          <mms-accordion title-size="body">
            <mms-accordion-item header-text="Example section header" expanded>Body content.</mms-accordion-item>
          </mms-accordion>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Rich content -->
      <h2 style="${O.h2}">Rich content</h2>
      <p style="${O.bodySm} opacity: 0.85; max-width: ${k}; margin-bottom: 1.5rem;">
        The panel body is a real default <code style="${O.monoSm}">&lt;slot&gt;</code>, the same
        pattern <code style="${O.monoSm}">mms-modal</code> uses for its body — not a plain-text
        prop. It accepts arbitrary markup: links, lists, buttons, or other mms components.
      </p>

      <div style="margin-bottom: 1.5rem;">
        <mms-accordion>
          <mms-accordion-item header-text="What's included in this plan?" expanded>
            <p style="margin: 0 0 0.75rem;">This plan includes:</p>
            <ul style="margin: 0 0 0.75rem; padding-left: 1.25rem;">
              <li>Primary care visits</li>
              <li>Prescription drug coverage</li>
              <li>Emergency services</li>
            </ul>
            <p style="margin: 0; display: flex; align-items: center; gap: 0.3em; flex-wrap: wrap;">
              Read the <mms-link href="#" label="full benefits summary"></mms-link> for details.
            </p>
          </mms-accordion-item>
        </mms-accordion>
      </div>

      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${O.monoSm} margin-bottom: 2rem;"><code>&lt;mms-accordion&gt;
  &lt;mms-accordion-item header-text="What's included in this plan?"&gt;
    &lt;p&gt;This plan includes:&lt;/p&gt;
    &lt;ul&gt;
      &lt;li&gt;Primary care visits&lt;/li&gt;
      &lt;li&gt;Prescription drug coverage&lt;/li&gt;
      &lt;li&gt;Emergency services&lt;/li&gt;
    &lt;/ul&gt;
    &lt;p&gt;Read the &lt;mms-link href="#" label="full benefits summary"&gt;&lt;/mms-link&gt; for details.&lt;/p&gt;
  &lt;/mms-accordion-item&gt;
&lt;/mms-accordion&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Indent -->
      <h2 style="${O.h2}">Indent</h2>
      <p style="${O.bodySm} opacity: 0.85; max-width: ${k}; margin-bottom: 1.5rem;">
        <code style="${O.monoSm}">indent</code> applies equal padding to both the header
        (cue icon included) and the body content, insetting them together from the
        container edge rather than sitting flush.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-accordion indent cue-position="left">
          <mms-accordion-item header-text="Indented section" expanded>
            The header, its cue icon, and this body content are all inset equally from the
            container edge.
          </mms-accordion-item>
        </mms-accordion>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Brand icon -->
      <h2 style="${O.h2}">With brand icon</h2>
      <p style="${O.bodySm} opacity: 0.85; max-width: ${k}; margin-bottom: 1.5rem;">
        An optional <code style="${O.monoSm}">icon</code> renders before the header text on any
        item, independent of the container's cue settings.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-accordion>
          <mms-accordion-item header-text="Billing" icon="wallet" expanded>
            Manage payment methods and view invoices.
          </mms-accordion-item>
          <mms-accordion-item header-text="Security" icon="shield-check">
            Review sign-in activity and manage two-factor authentication.
          </mms-accordion-item>
        </mms-accordion>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${O.h2}">Accessibility</h2>

      <h3 style="${O.h3}">WCAG 2.2 AA Compliance</h3>
      ${y(v.accordion.rows)}

      <h3 style="${O.h3}">Screen Reader Behavior</h3>
      <ul style="${O.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Header focus:</strong> Announces header text, role "button", and expanded/collapsed state</li>
        <li style="margin-bottom: 0.5rem;"><strong>Toggle:</strong> Announces the updated expanded/collapsed state immediately after activation</li>
        <li style="margin-bottom: 0.5rem;"><strong>Panel:</strong> Exposed as a labelled region tied to its header via unique per-instance ids — never a shared, hardcoded id across items</li>
        <li><strong>Cue icon:</strong> Decorative — <code style="${O.monoSm}">aria-expanded</code> on the header button is the single source of truth for state, not the icon glyph</li>
      </ul>

      <h3 style="${O.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to the next/previous header (each header is its own tab stop)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggle the focused item's expanded state</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus between headers within an <code style="${O.monoSm}">mms-accordion</code> container, with wrap-around</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus to the first / last header in the container</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},M={name:`Playground`,tags:[`!dev`],args:{mode:`multiple`,cuePosition:`right`,cueType:`caret`,titleSize:`body`,indent:!1,itemCount:3,header1:`What is a design system?`,header2:`How are brand themes applied?`,header3:`Is this accessible?`,body1:`A design system is a governed set of components, tokens, and guidelines that produce consistent, accessible interfaces across every engagement.`,body2:`Each engagement supplies a standalone brand token sheet that conforms to the shared structural contract.`,body3:`Yes — headers are native buttons with unique per-instance ARIA ids, and arrow keys move focus between them.`,theme:`maximus`,density:`default`},decorators:[e=>a`
        <div
          style="
            min-height: 200px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 100%; max-width: 560px;">${e()}</div>
        </div>
      `],argTypes:{mode:{name:`Mode`,control:`select`,options:[`multiple`,`single`],description:`Whether multiple items can be open at once, or only one at a time`,table:{category:`Component Props`}},cuePosition:{name:`Cue Position`,control:`select`,options:[`right`,`left`],description:`Side the expand/collapse icon renders on`,table:{category:`Component Props`}},cueType:{name:`Cue Type`,control:`select`,options:[`caret`,`plus-minus`],description:`Icon style for the expand/collapse cue`,table:{category:`Component Props`}},titleSize:{name:`Title Size`,control:`select`,options:[`title`,`body`],description:`Header size — larger heading scale, or body-copy scale`,table:{category:`Component Props`}},indent:{name:`Indent`,control:`boolean`,description:`Applies equal padding to both the header (cue icon included) and body content`,table:{category:`Component Props`}},itemCount:{name:`Item Count`,control:{type:`range`,min:1,max:3,step:1},description:`Number of accordion items (demo only — real accordions can have any number)`,table:{category:`Demo Controls`}},header1:{name:`Header 1`,control:`text`,table:{category:`Demo Controls`}},header2:{name:`Header 2`,control:`text`,table:{category:`Demo Controls`}},header3:{name:`Header 3`,control:`text`,table:{category:`Demo Controls`}},body1:{name:`Body 1`,control:`text`,table:{category:`Demo Controls`}},body2:{name:`Body 2`,control:`text`,table:{category:`Demo Controls`}},body3:{name:`Body 3`,control:`text`,table:{category:`Demo Controls`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`uss-oh-dvs`,`default`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Spacing density`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];n.mode!==`multiple`&&r.push(`mode="${n.mode}"`),n.cuePosition!==`right`&&r.push(`cue-position="${n.cuePosition}"`),n.cueType!==`caret`&&r.push(`cue-type="${n.cueType}"`),n.titleSize!==`body`&&r.push(`title-size="${n.titleSize}"`),n.indent&&r.push(`indent`);let i=[n.header1,n.header2,n.header3],a=[n.body1,n.body2,n.body3],o=n.itemCount,s=[];for(let e=0;e<o;e++)s.push(`  <mms-accordion-item header-text="${i[e]}">\n    ${a[e]}\n  </mms-accordion-item>`);return`<mms-accordion${r.length?`
  `+r.join(`
  `):``}\n>\n${s.join(`
`)}\n</mms-accordion>`},language:`html`}}},render:e=>{let t=[e.header1,e.header2,e.header3],n=[e.body1,e.body2,e.body3],r=t.slice(0,e.itemCount).map((e,t)=>({header:e,body:n[t]}));return a`
      <mms-accordion
        mode=${e.mode}
        cue-position=${e.cuePosition}
        cue-type=${e.cueType}
        title-size=${e.titleSize}
        ?indent=${e.indent}
        data-density=${e.density}
      >
        ${r.map(e=>a`
            <mms-accordion-item header-text=${e.header}>${e.body}</mms-accordion-item>
          `)}
      </mms-accordion>
    `}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Accordion</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A list of collapsible sections. Content is organized under headers that expand to reveal
        body content when clicked. <code style="\${t.monoSm}">mms-accordion</code> coordinates
        single-open exclusivity and keyboard navigation across slotted
        <code style="\${t.monoSm}">mms-accordion-item</code> elements — items also work standalone.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        By default, <code style="\${t.monoSm}">mode="multiple"</code> allows any number of items open
        at once.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-accordion>
          <mms-accordion-item header-text="What is a design system?" expanded>
            A design system is a governed set of components, tokens, and guidelines that produce
            consistent, accessible interfaces across every engagement.
          </mms-accordion-item>
          <mms-accordion-item header-text="How are brand themes applied?">
            Each engagement supplies a standalone brand token sheet that conforms to the shared
            structural contract — brand sheets are not overrides on top of a default theme.
          </mms-accordion-item>
          <mms-accordion-item header-text="Is this accessible?">
            Yes — the header is a native button with unique per-instance <code style="\${t.monoSm}">aria-controls</code>/<code style="\${t.monoSm}">aria-labelledby</code> ids, and arrow keys move focus between headers.
          </mms-accordion-item>
        </mms-accordion>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Single mode -->
      <h2 style="\${t.h2}">Single mode</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">mode="single"</code> collapses any other open item when one is
        expanded.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-accordion mode="single">
          <mms-accordion-item header-text="Section one" expanded>
            Only one section can be open at a time in single mode.
          </mms-accordion-item>
          <mms-accordion-item header-text="Section two">
            Opening this section closes section one.
          </mms-accordion-item>
          <mms-accordion-item header-text="Section three">
            Opening this section closes whichever other section was open.
          </mms-accordion-item>
        </mms-accordion>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Cue position -->
      <h2 style="\${t.h2}">Cue position</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The expand/collapse icon can render on either side of the header text via
        <code style="\${t.monoSm}">cue-position</code>.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Right (default)</p>
          <mms-accordion cue-position="right">
            <mms-accordion-item header-text="Cue on the right" expanded>Body content.</mms-accordion-item>
          </mms-accordion>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Left</p>
          <mms-accordion cue-position="left">
            <mms-accordion-item header-text="Cue on the left" expanded>Body content.</mms-accordion-item>
          </mms-accordion>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Cue type -->
      <h2 style="\${t.h2}">Cue type</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">cue-type</code> switches the expand/collapse icon between a caret
        (rotates via icon swap, not CSS rotation — <code style="\${t.monoSm}">mms-icon</code> has no
        direction prop) and a plus/minus glyph.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Caret (default)</p>
          <mms-accordion cue-type="caret">
            <mms-accordion-item header-text="Caret cue" expanded>Body content.</mms-accordion-item>
          </mms-accordion>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Plus / minus</p>
          <mms-accordion cue-type="plus-minus">
            <mms-accordion-item header-text="Plus/minus cue" expanded>Body content.</mms-accordion-item>
          </mms-accordion>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Title size -->
      <h2 style="\${t.h2}">Title size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">title-size="title"</code> renders the header using the
        heading-5 type scale — a larger size and the heading font family — for page-level
        sections; <code style="\${t.monoSm}">"body"</code> (default) matches body copy for
        denser lists like FAQs.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Title</p>
          <mms-accordion title-size="title">
            <mms-accordion-item header-text="Example section header" expanded>Body content.</mms-accordion-item>
          </mms-accordion>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Body (default)</p>
          <mms-accordion title-size="body">
            <mms-accordion-item header-text="Example section header" expanded>Body content.</mms-accordion-item>
          </mms-accordion>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Rich content -->
      <h2 style="\${t.h2}">Rich content</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The panel body is a real default <code style="\${t.monoSm}">&lt;slot&gt;</code>, the same
        pattern <code style="\${t.monoSm}">mms-modal</code> uses for its body — not a plain-text
        prop. It accepts arbitrary markup: links, lists, buttons, or other mms components.
      </p>

      <div style="margin-bottom: 1.5rem;">
        <mms-accordion>
          <mms-accordion-item header-text="What's included in this plan?" expanded>
            <p style="margin: 0 0 0.75rem;">This plan includes:</p>
            <ul style="margin: 0 0 0.75rem; padding-left: 1.25rem;">
              <li>Primary care visits</li>
              <li>Prescription drug coverage</li>
              <li>Emergency services</li>
            </ul>
            <p style="margin: 0; display: flex; align-items: center; gap: 0.3em; flex-wrap: wrap;">
              Read the <mms-link href="#" label="full benefits summary"></mms-link> for details.
            </p>
          </mms-accordion-item>
        </mms-accordion>
      </div>

      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm} margin-bottom: 2rem;"><code>&lt;mms-accordion&gt;
  &lt;mms-accordion-item header-text="What's included in this plan?"&gt;
    &lt;p&gt;This plan includes:&lt;/p&gt;
    &lt;ul&gt;
      &lt;li&gt;Primary care visits&lt;/li&gt;
      &lt;li&gt;Prescription drug coverage&lt;/li&gt;
      &lt;li&gt;Emergency services&lt;/li&gt;
    &lt;/ul&gt;
    &lt;p&gt;Read the &lt;mms-link href="#" label="full benefits summary"&gt;&lt;/mms-link&gt; for details.&lt;/p&gt;
  &lt;/mms-accordion-item&gt;
&lt;/mms-accordion&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Indent -->
      <h2 style="\${t.h2}">Indent</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">indent</code> applies equal padding to both the header
        (cue icon included) and the body content, insetting them together from the
        container edge rather than sitting flush.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-accordion indent cue-position="left">
          <mms-accordion-item header-text="Indented section" expanded>
            The header, its cue icon, and this body content are all inset equally from the
            container edge.
          </mms-accordion-item>
        </mms-accordion>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Brand icon -->
      <h2 style="\${t.h2}">With brand icon</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        An optional <code style="\${t.monoSm}">icon</code> renders before the header text on any
        item, independent of the container's cue settings.
      </p>

      <div style="margin-bottom: 2rem;">
        <mms-accordion>
          <mms-accordion-item header-text="Billing" icon="wallet" expanded>
            Manage payment methods and view invoices.
          </mms-accordion-item>
          <mms-accordion-item header-text="Security" icon="shield-check">
            Review sign-in activity and manage two-factor authentication.
          </mms-accordion-item>
        </mms-accordion>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['accordion'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Header focus:</strong> Announces header text, role "button", and expanded/collapsed state</li>
        <li style="margin-bottom: 0.5rem;"><strong>Toggle:</strong> Announces the updated expanded/collapsed state immediately after activation</li>
        <li style="margin-bottom: 0.5rem;"><strong>Panel:</strong> Exposed as a labelled region tied to its header via unique per-instance ids — never a shared, hardcoded id across items</li>
        <li><strong>Cue icon:</strong> Decorative — <code style="\${t.monoSm}">aria-expanded</code> on the header button is the single source of truth for state, not the icon glyph</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus to the next/previous header (each header is its own tab stop)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggle the focused item's expanded state</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">↓</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus between headers within an <code style="\${t.monoSm}">mms-accordion</code> container, with wrap-around</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Home</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">End</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus to the first / last header in the container</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Component Props
    mode: 'multiple',
    cuePosition: 'right',
    cueType: 'caret',
    titleSize: 'body',
    indent: false,
    // Demo Controls
    itemCount: 3,
    header1: 'What is a design system?',
    header2: 'How are brand themes applied?',
    header3: 'Is this accessible?',
    body1: 'A design system is a governed set of components, tokens, and guidelines that produce consistent, accessible interfaces across every engagement.',
    body2: 'Each engagement supplies a standalone brand token sheet that conforms to the shared structural contract.',
    body3: 'Yes — headers are native buttons with unique per-instance ARIA ids, and arrow keys move focus between them.',
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
          <div style="width: 100%; max-width: 560px;">\${story()}</div>
        </div>
      \`;
  }],
  argTypes: {
    // ── Component Props ───────────────────────────────────────
    mode: {
      name: 'Mode',
      control: 'select',
      options: ['multiple', 'single'],
      description: 'Whether multiple items can be open at once, or only one at a time',
      table: {
        category: 'Component Props'
      }
    },
    cuePosition: {
      name: 'Cue Position',
      control: 'select',
      options: ['right', 'left'],
      description: 'Side the expand/collapse icon renders on',
      table: {
        category: 'Component Props'
      }
    },
    cueType: {
      name: 'Cue Type',
      control: 'select',
      options: ['caret', 'plus-minus'],
      description: 'Icon style for the expand/collapse cue',
      table: {
        category: 'Component Props'
      }
    },
    titleSize: {
      name: 'Title Size',
      control: 'select',
      options: ['title', 'body'],
      description: 'Header size — larger heading scale, or body-copy scale',
      table: {
        category: 'Component Props'
      }
    },
    indent: {
      name: 'Indent',
      control: 'boolean',
      description: 'Applies equal padding to both the header (cue icon included) and body content',
      table: {
        category: 'Component Props'
      }
    },
    // ── Demo Controls ─────────────────────────────────────────
    itemCount: {
      name: 'Item Count',
      control: {
        type: 'range',
        min: 1,
        max: 3,
        step: 1
      },
      description: 'Number of accordion items (demo only — real accordions can have any number)',
      table: {
        category: 'Demo Controls'
      }
    },
    header1: {
      name: 'Header 1',
      control: 'text',
      table: {
        category: 'Demo Controls'
      }
    },
    header2: {
      name: 'Header 2',
      control: 'text',
      table: {
        category: 'Demo Controls'
      }
    },
    header3: {
      name: 'Header 3',
      control: 'text',
      table: {
        category: 'Demo Controls'
      }
    },
    body1: {
      name: 'Body 1',
      control: 'text',
      table: {
        category: 'Demo Controls'
      }
    },
    body2: {
      name: 'Body 2',
      control: 'text',
      table: {
        category: 'Demo Controls'
      }
    },
    body3: {
      name: 'Body 3',
      control: 'text',
      table: {
        category: 'Demo Controls'
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
          if (a.mode !== 'multiple') attrs.push(\`mode="\${a.mode}"\`);
          if (a.cuePosition !== 'right') attrs.push(\`cue-position="\${a.cuePosition}"\`);
          if (a.cueType !== 'caret') attrs.push(\`cue-type="\${a.cueType}"\`);
          if (a.titleSize !== 'body') attrs.push(\`title-size="\${a.titleSize}"\`);
          if (a.indent) attrs.push('indent');
          const headers = [a.header1, a.header2, a.header3];
          const bodies = [a.body1, a.body2, a.body3];
          const count = a.itemCount as number;
          const items: string[] = [];
          for (let i = 0; i < count; i++) {
            items.push(\`  <mms-accordion-item header-text="\${headers[i]}">\\n    \${bodies[i]}\\n  </mms-accordion-item>\`);
          }
          return \`<mms-accordion\${attrs.length ? '\\n  ' + attrs.join('\\n  ') : ''}\\n>\\n\${items.join('\\n')}\\n</mms-accordion>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    mode: string;
    cuePosition: string;
    cueType: string;
    titleSize: string;
    indent: boolean;
    itemCount: number;
    header1: string;
    header2: string;
    header3: string;
    body1: string;
    body2: string;
    body3: string;
    theme: string;
    density: string;
  }) => {
    const headers = [args.header1, args.header2, args.header3];
    const bodies = [args.body1, args.body2, args.body3];
    const items = headers.slice(0, args.itemCount).map((header, i) => ({
      header,
      body: bodies[i]
    }));
    return html\`
      <mms-accordion
        mode=\${args.mode}
        cue-position=\${args.cuePosition}
        cue-type=\${args.cueType}
        title-size=\${args.titleSize}
        ?indent=\${args.indent}
        data-density=\${args.density}
      >
        \${items.map(item => html\`
            <mms-accordion-item header-text=\${item.header}>\${item.body}</mms-accordion-item>
          \`)}
      </mms-accordion>
    \`;
  }
}`,...M.parameters?.docs?.source}}},N=[`Overview`,`PlaygroundStory`]}));P();export{j as Overview,M as PlaygroundStory,N as __namedExportsOrder,D as default,P as n,E as t};