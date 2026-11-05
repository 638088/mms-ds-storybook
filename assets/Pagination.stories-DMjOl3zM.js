import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-B0BZwaT1.js";import{E as s,S as c,T as l,g as u,h as d,n as f,p,r as m,t as h,w as g}from"./mms-icon.component-DFVI3nJi.js";import{i as _,r as v}from"./delegates-aria-label-HG0ZTDsy.js";import{n as y,t as b}from"./validate-color-scheme-CB3dwOoW.js";import{n as x,r as S,t as C}from"./iframe-CcinUa1O.js";import{n as w,t as T}from"./localize-DGaV1nF3.js";import{i as E,n as D,r as O}from"./theme-constraints-BjFqvFCo.js";import{n as k,r as A}from"./wcag-coverage-DNhlI7v1.js";import{a as j,c as M,d as N,i as P,n as F,o as I,r as L,u as R}from"./doc-styles-DkvR_Qyb.js";import{a as z,n as B}from"./a11y-outcome-B57XZvCQ.js";var V,H,U=e((()=>{o(),s(),v(),u(),d(),b(),h(),w(),m(),V={minimal:0,standard:1,wide:2,widest:3},H=class extends i{constructor(...e){super(...e),this.localize=new T(this),this.type=`numbered`,this.page=1,this.totalPages=1,this.pageRange=`standard`,this.disabled=!1,this.colorScheme=`primary`,this.size=`md`,this.roundness=`subtle`}static{this.styles=[l,_,p,r`
      :host {
        display: inline-block;
        font-family: var(--type-ui-label-md-family);

        --_solid: var(--color-primary-9);
        --_solid-hover: var(--color-primary-10, var(--color-primary-9));
        --_solid-pressed: var(--color-primary-11, var(--color-primary-9));
        --_on-solid: var(--color-text-on-primary);
      }

      :host([color-scheme='secondary']) {
        --_solid: var(--color-secondary-9);
        --_solid-hover: var(--color-secondary-10, var(--color-secondary-9));
        --_solid-pressed: var(--color-secondary-11, var(--color-secondary-9));
        --_on-solid: var(--color-text-on-secondary);
      }

      :host([color-scheme='accent']) {
        --_solid: var(--color-accent-9);
        --_solid-hover: var(--color-accent-10, var(--color-accent-9));
        --_solid-pressed: var(--color-accent-11, var(--color-accent-9));
        --_on-solid: var(--color-text-on-accent);
      }

      :host([color-scheme='onyx']) {
        --_solid: var(--color-onyx-9);
        --_solid-hover: var(--color-onyx-10, var(--color-onyx-9));
        --_solid-pressed: var(--color-onyx-11, var(--color-onyx-9));
        --_on-solid: var(--color-text-on-onyx);
      }

      .pagination {
        display: flex;
        align-items: center;
        gap: var(--layout-gap-tight);
      }

      .nav-btn,
      .page-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border: var(--border-width-xs) solid transparent;
        background: transparent;
        color: var(--color-text-default);
        cursor: pointer;
        font-family: inherit;
        font-weight: var(--font-weight-medium);
        min-width: 24px;
        min-height: 24px;
        transition:
          background-color var(--motion-duration-base) var(--motion-easing-standard),
          border-color var(--motion-duration-base) var(--motion-easing-standard),
          color var(--motion-duration-base) var(--motion-easing-standard);
      }

      /* ROUNDNESS — no rounded/pill option; pagination stays box-y/subtle */
      :host([roundness='boxed']) .nav-btn,
      :host([roundness='boxed']) .page-btn {
        border-radius: var(--radius-none);
      }

      :host([roundness='subtle']) .nav-btn,
      :host([roundness='subtle']) .page-btn,
      :host(:not([roundness])) .nav-btn,
      :host(:not([roundness])) .page-btn {
        border-radius: var(--radius-sm);
      }

      /* SIZE — md reproduces the component's original fixed values exactly */
      :host([size='sm']) .nav-btn,
      :host([size='sm']) .page-btn {
        padding: var(--spacing-xs1);
        font-size: var(--type-ui-label-sm-size);
        line-height: var(--type-ui-label-sm-line-height);
        letter-spacing: var(--type-ui-label-sm-letter-spacing);
      }

      :host([size='md']) .nav-btn,
      :host([size='md']) .page-btn,
      :host(:not([size])) .nav-btn,
      :host(:not([size])) .page-btn {
        padding: var(--spacing-xs2);
        font-size: var(--type-ui-label-md-size);
        line-height: var(--type-ui-label-md-line-height);
        letter-spacing: var(--type-ui-label-md-letter-spacing);
      }

      :host([size='lg']) .nav-btn,
      :host([size='lg']) .page-btn {
        padding: var(--spacing-sm1);
        font-size: var(--type-ui-label-lg-size);
        line-height: var(--type-ui-label-lg-line-height);
        letter-spacing: var(--type-ui-label-lg-letter-spacing);
      }

      /* Touch device: enforce 44×44px minimum (WCAG 2.5.5 AAA), mirrors mms-button icon-only */
      @media (pointer: coarse) {
        .nav-btn,
        .page-btn {
          min-width: 44px;
          min-height: 44px;
        }
      }

      .nav-btn:hover:not(:disabled),
      .page-btn:hover:not(:disabled):not(.page-btn--active) {
        border-color: var(--_solid-hover);
        color: var(--_solid-hover);
      }

      .page-btn--active {
        background: var(--_solid);
        color: var(--_on-solid);
      }

      .page-btn--active:hover:not(:disabled),
      .page-btn--active:active:not(:disabled) {
        background: var(--_solid-pressed);
      }

      .nav-btn:active:not(:disabled),
      .page-btn:active:not(:disabled):not(.page-btn--active) {
        border-color: var(--_solid-pressed);
        color: var(--_solid-pressed);
      }

      .nav-btn:disabled,
      .page-btn:disabled {
        cursor: not-allowed;
        color: var(--color-disabled-text);
      }

      /* Label stays --color-text-on-primary (not --_on-solid): disabled fill
         is always neutral --color-disabled-solid regardless of colorScheme,
         and --_on-solid varies per scheme (e.g. accent's dark-green, onyx
         dark-theme's near-black) — those read low-contrast against a neutral
         gray fill. --color-text-on-primary is white in light theme and
         near-black in dark theme, both a stronger contrast pairing against
         --color-disabled-solid than --color-disabled-text (~1.3:1) was. */
      .page-btn--active:disabled {
        background: var(--color-disabled-solid);
        color: var(--color-text-on-primary);
      }

      .ellipsis {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 24px;
        color: var(--color-text-subtle);
      }

      /* md reproduces the component's original fixed icon size exactly */
      :host([size='sm']) .icon {
        width: var(--icon-size-sm);
        height: var(--icon-size-sm);
      }

      :host([size='md']) .icon,
      :host(:not([size])) .icon {
        width: var(--icon-size-md);
        height: var(--icon-size-md);
      }

      :host([size='lg']) .icon {
        width: var(--icon-size-lg);
        height: var(--icon-size-lg);
      }

      .page-status {
        color: var(--color-text-default);
        white-space: nowrap;
        padding: 0 var(--spacing-xs1);
      }
    `]}connectedCallback(){super.connectedCallback(),y(this,this.colorScheme,`mms-pagination`)}_goTo(e){this.disabled||e<1||e>this.totalPages||e===this.page||(this.page=e,this.dispatchEvent(new CustomEvent(`page-change`,{bubbles:!0,composed:!0,detail:{page:e}})))}_pageTokens(){let{page:e,totalPages:t}=this,n=V[this.pageRange]??V.standard;if(t<=n*2+5)return Array.from({length:t},(e,t)=>t+1);let r=Math.max(e-n,1),i=Math.min(e+n,t),a=r>2,o=i<t-1;if(!a&&o){let e=3+n*2;return[...Array.from({length:e},(e,t)=>t+1),`ellipsis`,t]}if(a&&!o){let e=3+n*2;return[1,`ellipsis`,...Array.from({length:e},(n,r)=>t-e+1+r)]}return[1,`ellipsis`,...Array.from({length:i-r+1},(e,t)=>r+t),`ellipsis`,t]}_renderNumbered(){return this._pageTokens().map(e=>e===`ellipsis`?a`<span class="ellipsis" aria-hidden="true">…</span>`:a`
            <button
              class="page-btn ${e===this.page?`page-btn--active`:``}"
              ?disabled=${this.disabled}
              aria-current=${e===this.page?`page`:n}
              aria-label=${this.localize.term(`pageN`,e)}
              @click=${()=>this._goTo(e)}
            >
              ${e}
            </button>
          `)}_renderCompact(){return a`<span class="page-status">Page ${this.page} of ${this.totalPages}</span>`}render(){let e=this.page<=1,t=this.page>=this.totalPages;return a`
      <nav aria-label=${this.label??this.localize.term(`pagination`)}>
        <div class="pagination">
          ${e?n:a`
          <button
            class="nav-btn"
            ?disabled=${this.disabled}
            aria-label=${this.localize.term(`previousPage`)}
            @click=${()=>this._goTo(this.page-1)}
          >
            <mms-icon class="icon" name="caret-left" size="md"></mms-icon>
          </button>`}

          ${this.type===`compact`?this._renderCompact():this._renderNumbered()}

          ${t?n:a`
          <button
            class="nav-btn"
            ?disabled=${this.disabled}
            aria-label=${this.localize.term(`nextPage`)}
            @click=${()=>this._goTo(this.page+1)}
          >
            <mms-icon class="icon" name="caret-right" size="md"></mms-icon>
          </button>`}
        </div>
      </nav>
    `}},f([c({type:String,reflect:!0})],H.prototype,`type`,void 0),f([c({type:Number})],H.prototype,`page`,void 0),f([c({type:Number,attribute:`total-pages`})],H.prototype,`totalPages`,void 0),f([c({type:String,reflect:!0,attribute:`page-range`})],H.prototype,`pageRange`,void 0),f([c({type:String})],H.prototype,`label`,void 0),f([c({type:Boolean,reflect:!0})],H.prototype,`disabled`,void 0),f([c({type:String,reflect:!0,attribute:`color-scheme`})],H.prototype,`colorScheme`,void 0),f([c({type:String,reflect:!0})],H.prototype,`size`,void 0),f([c({type:String,reflect:!0})],H.prototype,`roundness`,void 0),H=f([g(`mms-pagination`)],H)})),W=t({Overview:()=>K,PlaygroundStory:()=>q,__namedExportsOrder:()=>J,default:()=>G}),G,K,q,J,Y=e((()=>{o(),U(),O(),k(),B(),M(),S(),G={title:`Navigational/Pagination`,tags:[`!autodocs`]},K={name:`Overview`,render:()=>a`
    <div data-theme=${L} data-mode=${I()} style=${F}>

      <!-- Header -->
      <h1 style="${N.h1}">Pagination</h1>
      <p style="${N.body} ${j.muted} max-width: ${P}; margin-bottom: ${R.subsection};">
        Page navigation control for moving through a paginated set of results. Two <code style="${N.monoSm}">type</code>s
        cover the two real usage patterns confirmed in production: <code style="${N.monoSm}">numbered</code>, a full
        page-number strip with previous/next controls, and <code style="${N.monoSm}">compact</code>, a previous/next-only
        control for tight layouts. Both fire the same <code style="${N.monoSm}">page-change</code> event — the host page
        owns re-fetching/re-rendering results in response.
      </p>

      <hr style="${j.divider}" />

      <!-- Numbered -->
      <h2 style="${N.h2}">Numbered</h2>
      <p style="${N.bodySm} ${j.muted} max-width: ${P}; margin-bottom: ${R.subsection};">
        The default type. Every page number is a real, individually-focusable control; the current page carries
        <code style="${N.monoSm}">aria-current="page"</code> and cannot be re-activated.
      </p>

      <div style="${j.panel} margin-bottom: ${R.subsection};">
        <mms-pagination type="numbered" label="Search results" page="1" total-pages="5"></mms-pagination>
      </div>

      <hr style="${j.divider}" />

      <!-- Truncation -->
      <h2 style="${N.h2}">Truncation</h2>
      <p style="${N.bodySm} ${j.muted} max-width: ${P}; margin-bottom: ${R.subsection};">
        When <code style="${N.monoSm}">totalPages</code> is large, the strip always keeps the first and last page,
        plus a <code style="${N.monoSm}">pageRange</code>-wide window around the current page — collapsing
        everything else behind a static "…" marker (non-interactive text, same treatment as the Breadcrumbs overflow
        marker). The window slides as the current page changes.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${R.content}; ${j.panel} margin-bottom: ${R.subsection};">
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Current page near the start</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="20"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Current page in the middle — ellipsis on both sides</p>
          <mms-pagination type="numbered" label="Search results" page="10" total-pages="20"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Current page near the end</p>
          <mms-pagination type="numbered" label="Search results" page="19" total-pages="20"></mms-pagination>
        </div>
      </div>

      <hr style="${j.divider}" />

      <!-- Page range -->
      <h2 style="${N.h2}">Page range</h2>
      <p style="${N.bodySm} ${j.muted} max-width: ${P}; margin-bottom: ${R.subsection};">
        <code style="${N.monoSm}">pageRange</code> sets how much of the strip is shown around the current page:
        <code style="${N.monoSm}">minimal</code>, <code style="${N.monoSm}">standard</code> (default),
        <code style="${N.monoSm}">wide</code>, or <code style="${N.monoSm}">widest</code>. The first and last pages
        are always shown and are unaffected — only the run around the current page grows. Every example below sits at
        page 5 of 20.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${R.content}; ${j.panel} margin-bottom: ${R.subsection};">
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Minimal — current page only</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="minimal"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Standard — default</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="standard"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Wide</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="wide"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Widest — the "…" is dropped once the run reaches page 2, so the low numbers fill in</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="widest"></mms-pagination>
        </div>
      </div>

      <hr style="${j.divider}" />

      <!-- Compact -->
      <h2 style="${N.h2}">Compact</h2>
      <p style="${N.bodySm} ${j.muted} max-width: ${P}; margin-bottom: ${R.subsection};">
        Previous/next controls only, with a "Page X of Y" status readout in place of individual page numbers. Use
        this where a full numbered strip doesn't fit — a card footer, a mobile layout, or a narrow sidebar list.
      </p>

      <div style="${j.panel} margin-bottom: ${R.subsection};">
        <mms-pagination type="compact" label="Search results" page="3" total-pages="12"></mms-pagination>
      </div>

      <hr style="${j.divider}" />

      <!-- Size -->
      <h2 style="${N.h2}">Size</h2>
      <p style="${N.bodySm} ${j.muted} max-width: ${P}; margin-bottom: ${R.subsection};">
        <code style="${N.monoSm}">sm</code>, <code style="${N.monoSm}">md</code> (default), and
        <code style="${N.monoSm}">lg</code> scale padding, label typography, and caret icon size together. Touch
        targets stay at 44px on coarse pointers regardless of size.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${R.content}; ${j.panel} margin-bottom: ${R.subsection};">
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Small</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" size="sm"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Medium — default</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" size="md"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Large</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" size="lg"></mms-pagination>
        </div>
      </div>

      <hr style="${j.divider}" />

      <!-- Roundness -->
      <h2 style="${N.h2}">Roundness</h2>
      <p style="${N.bodySm} ${j.muted} max-width: ${P}; margin-bottom: ${R.subsection};">
        <code style="${N.monoSm}">subtle</code> (default) or <code style="${N.monoSm}">boxed</code>. There is no
        pill/fully-rounded option — a circular page number reads as a status dot rather than a control, so pagination
        stays box-y by design.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${R.content}; ${j.panel} margin-bottom: ${R.subsection};">
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Subtle — default</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" roundness="subtle"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Boxed</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" roundness="boxed"></mms-pagination>
        </div>
      </div>

      <hr style="${j.divider}" />

      <!-- Color scheme -->
      <h2 style="${N.h2}">Color scheme</h2>
      <p style="${N.bodySm} ${j.muted} max-width: ${P}; margin-bottom: ${R.subsection};">
        Pagination is interactive, so it needs a palette with hover and pressed states — <strong>only Tier 1
        palettes qualify</strong>. Tier 2 and Tier 3 are both excluded: Tier 2 is missing step 10 (the hover state),
        and Tier 3 is missing hover and text contrast. On the Maximus theme the valid schemes are
        <code style="${N.monoSm}">primary</code>, <code style="${N.monoSm}">secondary</code>, and
        <code style="${N.monoSm}">onyx</code> — <code style="${N.monoSm}">accent</code> is Tier 3 (decorative,
        2.23:1). Which schemes are excluded differs per theme: on ${C[`fed-ves`]}, <code style="${N.monoSm}">accent</code> is
        Tier 2 and <code style="${N.monoSm}">secondary</code> is Tier 3. Selecting any excluded combination in the
        Playground renders an "Invalid combination" notice instead of the component. See
        <em>Color Framework → Color Tiering</em>.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${R.content}; ${j.panel} margin-bottom: ${R.subsection};">
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Primary — default</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" color-scheme="primary"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Secondary</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" color-scheme="secondary"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Onyx — structural, valid on every theme</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" color-scheme="onyx"></mms-pagination>
        </div>
      </div>

      <hr style="${j.divider}" />

      <!-- Boundary and disabled states -->
      <h2 style="${N.h2}">Boundary and disabled states</h2>
      <p style="${N.bodySm} ${j.muted} max-width: ${P}; margin-bottom: ${R.content};">
        At the first page the previous caret is <strong>not rendered at all</strong>, and likewise the next caret at
        the last page — the same approach GOV.UK and USWDS take. A disabled caret differs from an enabled one by
        color alone on a small glyph, which is easy to miss; omitting it removes the state rather than asking the
        user to perceive it, and leaves nothing for a screen reader to announce and skip. The strip shifts by one
        control width at the boundaries, which is the accepted trade.
      </p>
      <p style="${N.bodySm} ${j.muted} max-width: ${P}; margin-bottom: ${R.subsection};">
        <code style="${N.monoSm}">disabled</code> is a different state and still renders every control — it means
        “temporarily unavailable”, for example while a results fetch is in flight, rather than “does not apply here”.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${R.content}; ${j.panel} margin-bottom: ${R.subsection};">
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">First page — no previous caret</p>
          <mms-pagination type="numbered" label="Search results" page="1" total-pages="5"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Middle page — both carets</p>
          <mms-pagination type="numbered" label="Search results" page="3" total-pages="5"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Last page — no next caret</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="5"></mms-pagination>
        </div>
        <div>
          <p style="${N.caption} ${j.muted} margin-bottom: ${R.label};">Fully disabled — all controls present, none actionable</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" disabled></mms-pagination>
        </div>
      </div>

      <hr style="${j.divider}" />

      <!-- Usage -->
      <h2 style="${N.h2}">Usage</h2>
      <pre style="${j.pre} margin-bottom: ${R.subsection};"><code>&lt;mms-pagination
  label="Search results"
  page="1"
  total-pages="20"
  @page-change=\${(e) => { /* re-fetch results for e.detail.page */ }}
&gt;&lt;/mms-pagination&gt;</code></pre>

      <hr style="${j.divider}" />

      <!-- Accessibility -->
      <h2 style="${N.h2}">Accessibility</h2>

      <h3 style="${N.h3}">WCAG 2.2 AA compliance</h3>
      ${z(A.pagination.rows)}

      <h3 style="${N.h3}">Screen reader behavior</h3>
      <ul style="${N.bodySm} ${j.muted} margin: 0 0 ${R.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${R.label};"><strong>Landmark:</strong> The control is wrapped in <code style="${N.monoSm}">&lt;nav aria-label="..."&gt;</code>, announced as a navigation region named by the <code style="${N.monoSm}">label</code> prop.</li>
        <li style="margin-bottom: ${R.label};"><strong>Current page:</strong> The active page button carries <code style="${N.monoSm}">aria-current="page"</code> — never conveyed by color alone.</li>
        <li style="margin-bottom: ${R.label};"><strong>Page buttons:</strong> Each carries its own <code style="${N.monoSm}">aria-label</code> ("Page N"); previous/next carets are labeled "Previous page"/"Next page".</li>
        <li style="margin-bottom: ${R.label};"><strong>Ellipsis:</strong> The "…" overflow marker is <code style="${N.monoSm}">aria-hidden</code> static text — not announced as interactive, no overflow menu.</li>
        <li><strong>Decorative icons:</strong> The caret icons are <code style="${N.monoSm}">aria-hidden</code> — the accessible name comes from the wrapping button's <code style="${N.monoSm}">aria-label</code>, not the icon.</li>
      </ul>

      <h3 style="${N.h3}">Keyboard navigation</h3>
      <table style="${j.table} margin-bottom: ${R.subsection};">
        <thead>
          <tr>
            <th style="${j.th} width: 140px;">Key</th>
            <th style="${j.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${j.td}"><kbd style="${j.kbd}">Tab</kbd></td>
            <td style="${j.td}">Move focus between the previous caret, each visible page number, and the next caret. Disabled controls are not tab stops.</td>
          </tr>
          <tr>
            <td style="${j.td}"><kbd style="${j.kbd}">Enter</kbd> / <kbd style="${j.kbd}">Space</kbd></td>
            <td style="${j.td}">Activate the focused control, firing <code style="${N.monoSm}">page-change</code>.</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},q={name:`Playground`,tags:[`!dev`],args:{type:`numbered`,page:5,totalPages:20,pageRange:`standard`,label:`Search results`,disabled:!1,colorScheme:`primary`,size:`md`,roundness:`subtle`,theme:`maximus`,density:`default`},decorators:[e=>a`
      <div
        style="
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 2rem;
        "
      >
        ${e()}
      </div>
    `],argTypes:{type:{name:`Type`,control:`select`,options:[`numbered`,`compact`],description:`numbered = full page strip, compact = previous/next only`,table:{category:`Content`}},page:{name:`Page`,control:{type:`number`,min:1},description:`Current page, 1-indexed`,table:{category:`Content`}},totalPages:{name:`Total pages`,control:{type:`number`,min:1},description:`Total number of pages`,table:{category:`Content`}},pageRange:{name:`Page range`,control:{type:`select`,labels:{minimal:`Minimal`,standard:`Standard (default)`,wide:`Wide`,widest:`Widest`}},options:[`minimal`,`standard`,`wide`,`widest`],description:[`Numbered type only. How much of the page strip is shown around the current page.`,"The first and last pages are always shown and are *not* affected by this setting — only the run around the current page grows. Everything else collapses behind `…`.",``,`Example — current page 5 of 20:`,``,"- **Minimal** — `1 … 5 … 20`","- **Standard** (default) — `1 … 4 5 6 … 20`","- **Wide** — `1 … 3 4 5 6 7 … 20`","- **Widest** — `1 2 3 4 5 6 7 8 9 … 20`",``,"At **Widest** the run reaches page 2, and a `…` hiding a single page is pointless — so the marker is dropped and the numbers fill in. This is why Widest looks different from the pattern above."].join(`
`),table:{category:`Content`}},label:{name:`Label`,control:`text`,description:`Accessible name for the nav landmark`,table:{category:`Content`}},disabled:{name:`Disabled`,control:`boolean`,description:`Disables every control`,table:{category:`Content`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Brand color applied to the active page, hover, and pressed accents. "onyx" is structural (works on all themes); primary/secondary/accent availability depends on theme.`,table:{category:`Content`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Scales padding, label typography, and caret icon size`,table:{category:`Content`}},roundness:{name:`Roundness`,control:`select`,options:[`boxed`,`subtle`],description:`Corner radius — boxed (0) or subtle (4px). No pill/rounded option; pagination stays box-y.`,table:{category:`Content`}},theme:{name:`Theme`,control:`select`,options:x,description:`Brand theme`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.type&&n.type!==`numbered`&&r.push(`type="${n.type}"`),r.push(`page="${n.page}"`),r.push(`total-pages="${n.totalPages}"`),n.pageRange!==`standard`&&r.push(`page-range="${n.pageRange}"`),n.label&&r.push(`label="${n.label}"`),n.disabled&&r.push(`disabled`),n.colorScheme&&n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.size&&n.size!==`md`&&r.push(`size="${n.size}"`),n.roundness&&n.roundness!==`subtle`&&r.push(`roundness="${n.roundness}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-pagination\n  ${r.join(`
  `)}\n></mms-pagination>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=E(e.theme,e.colorScheme),r=D(e.theme,e.colorScheme);if(!t){let t=r===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,n=r===2?`Lacks step 10 (hover state). The active page is a solid fill with hover and pressed states, so a no-hover palette cannot express pagination’s interactive states.`:`Lacks text contrast and hover states, and does not meet non-text (3:1) contrast on every theme. Decorative backgrounds only — not a functional navigation control.`;return a`
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
          <strong style="display: block; margin-bottom: 0.5rem; color: #991b1b !important;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
            <strong style="color: #991b1b !important;">${t}:</strong> ${n}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7; color: #991b1b !important;">
            See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      `}return a`
    <mms-pagination
      type=${e.type}
      page=${e.page}
      total-pages=${e.totalPages}
      page-range=${e.pageRange}
      label=${e.label}
      ?disabled=${e.disabled}
      color-scheme=${e.colorScheme}
      size=${e.size}
      roundness=${e.roundness}
      data-density=${e.density===`compact`?`compact`:n}
    ></mms-pagination>
  `}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Pagination</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Page navigation control for moving through a paginated set of results. Two <code style="\${t.monoSm}">type</code>s
        cover the two real usage patterns confirmed in production: <code style="\${t.monoSm}">numbered</code>, a full
        page-number strip with previous/next controls, and <code style="\${t.monoSm}">compact</code>, a previous/next-only
        control for tight layouts. Both fire the same <code style="\${t.monoSm}">page-change</code> event — the host page
        owns re-fetching/re-rendering results in response.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Numbered -->
      <h2 style="\${t.h2}">Numbered</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The default type. Every page number is a real, individually-focusable control; the current page carries
        <code style="\${t.monoSm}">aria-current="page"</code> and cannot be re-activated.
      </p>

      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        <mms-pagination type="numbered" label="Search results" page="1" total-pages="5"></mms-pagination>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Truncation -->
      <h2 style="\${t.h2}">Truncation</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        When <code style="\${t.monoSm}">totalPages</code> is large, the strip always keeps the first and last page,
        plus a <code style="\${t.monoSm}">pageRange</code>-wide window around the current page — collapsing
        everything else behind a static "…" marker (non-interactive text, same treatment as the Breadcrumbs overflow
        marker). The window slides as the current page changes.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; \${doc.panel} margin-bottom: \${space.subsection};">
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Current page near the start</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="20"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Current page in the middle — ellipsis on both sides</p>
          <mms-pagination type="numbered" label="Search results" page="10" total-pages="20"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Current page near the end</p>
          <mms-pagination type="numbered" label="Search results" page="19" total-pages="20"></mms-pagination>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Page range -->
      <h2 style="\${t.h2}">Page range</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">pageRange</code> sets how much of the strip is shown around the current page:
        <code style="\${t.monoSm}">minimal</code>, <code style="\${t.monoSm}">standard</code> (default),
        <code style="\${t.monoSm}">wide</code>, or <code style="\${t.monoSm}">widest</code>. The first and last pages
        are always shown and are unaffected — only the run around the current page grows. Every example below sits at
        page 5 of 20.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; \${doc.panel} margin-bottom: \${space.subsection};">
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Minimal — current page only</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="minimal"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Standard — default</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="standard"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Wide</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="wide"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Widest — the "…" is dropped once the run reaches page 2, so the low numbers fill in</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="widest"></mms-pagination>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Compact -->
      <h2 style="\${t.h2}">Compact</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Previous/next controls only, with a "Page X of Y" status readout in place of individual page numbers. Use
        this where a full numbered strip doesn't fit — a card footer, a mobile layout, or a narrow sidebar list.
      </p>

      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        <mms-pagination type="compact" label="Search results" page="3" total-pages="12"></mms-pagination>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Size -->
      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">sm</code>, <code style="\${t.monoSm}">md</code> (default), and
        <code style="\${t.monoSm}">lg</code> scale padding, label typography, and caret icon size together. Touch
        targets stay at 44px on coarse pointers regardless of size.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; \${doc.panel} margin-bottom: \${space.subsection};">
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Small</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" size="sm"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Medium — default</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" size="md"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Large</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" size="lg"></mms-pagination>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Roundness -->
      <h2 style="\${t.h2}">Roundness</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">subtle</code> (default) or <code style="\${t.monoSm}">boxed</code>. There is no
        pill/fully-rounded option — a circular page number reads as a status dot rather than a control, so pagination
        stays box-y by design.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; \${doc.panel} margin-bottom: \${space.subsection};">
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Subtle — default</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" roundness="subtle"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Boxed</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" roundness="boxed"></mms-pagination>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Color scheme -->
      <h2 style="\${t.h2}">Color scheme</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Pagination is interactive, so it needs a palette with hover and pressed states — <strong>only Tier 1
        palettes qualify</strong>. Tier 2 and Tier 3 are both excluded: Tier 2 is missing step 10 (the hover state),
        and Tier 3 is missing hover and text contrast. On the Maximus theme the valid schemes are
        <code style="\${t.monoSm}">primary</code>, <code style="\${t.monoSm}">secondary</code>, and
        <code style="\${t.monoSm}">onyx</code> — <code style="\${t.monoSm}">accent</code> is Tier 3 (decorative,
        2.23:1). Which schemes are excluded differs per theme: on \${BRAND_LABELS['fed-ves']}, <code style="\${t.monoSm}">accent</code> is
        Tier 2 and <code style="\${t.monoSm}">secondary</code> is Tier 3. Selecting any excluded combination in the
        Playground renders an "Invalid combination" notice instead of the component. See
        <em>Color Framework → Color Tiering</em>.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; \${doc.panel} margin-bottom: \${space.subsection};">
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Primary — default</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" color-scheme="primary"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Secondary</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" color-scheme="secondary"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Onyx — structural, valid on every theme</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" color-scheme="onyx"></mms-pagination>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Boundary and disabled states -->
      <h2 style="\${t.h2}">Boundary and disabled states</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        At the first page the previous caret is <strong>not rendered at all</strong>, and likewise the next caret at
        the last page — the same approach GOV.UK and USWDS take. A disabled caret differs from an enabled one by
        color alone on a small glyph, which is easy to miss; omitting it removes the state rather than asking the
        user to perceive it, and leaves nothing for a screen reader to announce and skip. The strip shifts by one
        control width at the boundaries, which is the accepted trade.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">disabled</code> is a different state and still renders every control — it means
        “temporarily unavailable”, for example while a results fetch is in flight, rather than “does not apply here”.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; \${doc.panel} margin-bottom: \${space.subsection};">
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">First page — no previous caret</p>
          <mms-pagination type="numbered" label="Search results" page="1" total-pages="5"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Middle page — both carets</p>
          <mms-pagination type="numbered" label="Search results" page="3" total-pages="5"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Last page — no next caret</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="5"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.label};">Fully disabled — all controls present, none actionable</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" disabled></mms-pagination>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};"><code>&lt;mms-pagination
  label="Search results"
  page="1"
  total-pages="20"
  @page-change=\\\${(e) => { /* re-fetch results for e.detail.page */ }}
&gt;&lt;/mms-pagination&gt;</code></pre>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['pagination'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Landmark:</strong> The control is wrapped in <code style="\${t.monoSm}">&lt;nav aria-label="..."&gt;</code>, announced as a navigation region named by the <code style="\${t.monoSm}">label</code> prop.</li>
        <li style="margin-bottom: \${space.label};"><strong>Current page:</strong> The active page button carries <code style="\${t.monoSm}">aria-current="page"</code> — never conveyed by color alone.</li>
        <li style="margin-bottom: \${space.label};"><strong>Page buttons:</strong> Each carries its own <code style="\${t.monoSm}">aria-label</code> ("Page N"); previous/next carets are labeled "Previous page"/"Next page".</li>
        <li style="margin-bottom: \${space.label};"><strong>Ellipsis:</strong> The "…" overflow marker is <code style="\${t.monoSm}">aria-hidden</code> static text — not announced as interactive, no overflow menu.</li>
        <li><strong>Decorative icons:</strong> The caret icons are <code style="\${t.monoSm}">aria-hidden</code> — the accessible name comes from the wrapping button's <code style="\${t.monoSm}">aria-label</code>, not the icon.</li>
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
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Tab</kbd></td>
            <td style="\${doc.td}">Move focus between the previous caret, each visible page number, and the next caret. Disabled controls are not tab stops.</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd> / <kbd style="\${doc.kbd}">Space</kbd></td>
            <td style="\${doc.td}">Activate the focused control, firing <code style="\${t.monoSm}">page-change</code>.</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    type: 'numbered',
    page: 5,
    totalPages: 20,
    pageRange: 'standard',
    label: 'Search results',
    disabled: false,
    colorScheme: 'primary',
    size: 'md',
    roundness: 'subtle',
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => html\`
      <div
        style="
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 2rem;
        "
      >
        \${story()}
      </div>
    \`],
  argTypes: {
    type: {
      name: 'Type',
      control: 'select',
      options: ['numbered', 'compact'],
      description: 'numbered = full page strip, compact = previous/next only',
      table: {
        category: 'Content'
      }
    },
    page: {
      name: 'Page',
      control: {
        type: 'number',
        min: 1
      },
      description: 'Current page, 1-indexed',
      table: {
        category: 'Content'
      }
    },
    totalPages: {
      name: 'Total pages',
      control: {
        type: 'number',
        min: 1
      },
      description: 'Total number of pages',
      table: {
        category: 'Content'
      }
    },
    pageRange: {
      name: 'Page range',
      control: {
        type: 'select',
        labels: {
          minimal: 'Minimal',
          standard: 'Standard (default)',
          wide: 'Wide',
          widest: 'Widest'
        }
      },
      options: ['minimal', 'standard', 'wide', 'widest'],
      description: ['Numbered type only. How much of the page strip is shown around the current page.', 'The first and last pages are always shown and are *not* affected by this setting \\u2014 only the run around the current page grows. Everything else collapses behind \`\\u2026\`.', '', 'Example \\u2014 current page 5 of 20:', '', '- **Minimal** \\u2014 \`1 \\u2026 5 \\u2026 20\`', '- **Standard** (default) \\u2014 \`1 \\u2026 4 5 6 \\u2026 20\`', '- **Wide** \\u2014 \`1 \\u2026 3 4 5 6 7 \\u2026 20\`', '- **Widest** \\u2014 \`1 2 3 4 5 6 7 8 9 \\u2026 20\`', '', 'At **Widest** the run reaches page 2, and a \`\\u2026\` hiding a single page is pointless \\u2014 so the marker is dropped and the numbers fill in. This is why Widest looks different from the pattern above.'].join('\\n'),
      table: {
        category: 'Content'
      }
    },
    label: {
      name: 'Label',
      control: 'text',
      description: 'Accessible name for the nav landmark',
      table: {
        category: 'Content'
      }
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables every control',
      table: {
        category: 'Content'
      }
    },
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Brand color applied to the active page, hover, and pressed accents. "onyx" is structural (works on all themes); primary/secondary/accent availability depends on theme.',
      table: {
        category: 'Content'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Scales padding, label typography, and caret icon size',
      table: {
        category: 'Content'
      }
    },
    roundness: {
      name: 'Roundness',
      control: 'select',
      options: ['boxed', 'subtle'],
      description: 'Corner radius — boxed (0) or subtle (4px). No pill/rounded option; pagination stays box-y.',
      table: {
        category: 'Content'
      }
    },
    theme: {
      name: 'Theme',
      control: 'select',
      options: BRAND_ORDER,
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
          args: Record<string, string | number | boolean>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.type && a.type !== 'numbered') attrs.push(\`type="\${a.type}"\`);
          attrs.push(\`page="\${a.page}"\`);
          attrs.push(\`total-pages="\${a.totalPages}"\`);
          if (a.pageRange !== 'standard') attrs.push(\`page-range="\${a.pageRange}"\`);
          if (a.label) attrs.push(\`label="\${a.label}"\`);
          if (a.disabled) attrs.push('disabled');
          if (a.colorScheme && a.colorScheme !== 'primary') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.size && a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.roundness && a.roundness !== 'subtle') attrs.push(\`roundness="\${a.roundness}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-pagination\\n  \${attrs.join('\\n  ')}\\n></mms-pagination>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none'
    }
  },
  render: (args: {
    type: PaginationType;
    page: number;
    totalPages: number;
    pageRange: PaginationPageRange;
    label: string;
    disabled: boolean;
    colorScheme: PaginationColorScheme;
    size: PaginationSize;
    roundness: PaginationRoundness;
    theme: string;
    density: string;
  }) => {
    const valid = isValidColorScheme(args.theme as Theme, args.colorScheme as ColorScheme);
    const tier = getPaletteTier(args.theme as Theme, args.colorScheme as ColorScheme);
    if (!valid) {
      const tierLabel = tier === 2 ? 'Tier 2 (Text + Surface)' : 'Tier 3 (Decorative)';
      const tierReason = tier === 2 ? 'Lacks step 10 (hover state). The active page is a solid fill with hover and pressed states, so a no-hover palette cannot express pagination\\u2019s interactive states.' : 'Lacks text contrast and hover states, and does not meet non-text (3:1) contrast on every theme. Decorative backgrounds only \\u2014 not a functional navigation control.';
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
          <strong style="display: block; margin-bottom: 0.5rem; color: #991b1b !important;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
            <strong style="color: #991b1b !important;">\${tierLabel}:</strong> \${tierReason}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7; color: #991b1b !important;">
            See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      \`;
    }
    return html\`
    <mms-pagination
      type=\${args.type}
      page=\${args.page}
      total-pages=\${args.totalPages}
      page-range=\${args.pageRange}
      label=\${args.label}
      ?disabled=\${args.disabled}
      color-scheme=\${args.colorScheme}
      size=\${args.size}
      roundness=\${args.roundness}
      data-density=\${args.density === 'compact' ? 'compact' : nothing}
    ></mms-pagination>
  \`;
  }
}`,...q.parameters?.docs?.source}}},J=[`Overview`,`PlaygroundStory`]}));Y();export{K as Overview,q as PlaygroundStory,J as __namedExportsOrder,G as default,Y as n,W as t};