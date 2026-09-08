import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,t as d}from"./decorate-Bygya6Tu.js";import{r as f,t as p}from"./focus.css-BrGuLyxh.js";import{n as m,t as h}from"./validate-color-scheme-CB3dwOoW.js";import{t as g}from"./mms-icon.component-BJPQucU2.js";import{i as _,n as v,r as y}from"./theme-constraints-xITgb_Dw.js";import{a as b,o as x,r as S,t as C}from"./a11y-outcome-DdXFaPju.js";var w,T,E=e((()=>{o(),u(),f(),h(),g(),l(),w={minimal:0,standard:1,wide:2,widest:3},T=class extends i{constructor(...e){super(...e),this.type=`numbered`,this.page=1,this.totalPages=1,this.pageRange=`standard`,this.label=`Pagination`,this.disabled=!1,this.colorScheme=`primary`,this.size=`md`,this.roundness=`subtle`}static{this.styles=[p,r`
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
    `]}connectedCallback(){super.connectedCallback(),m(this,this.colorScheme,`mms-pagination`)}_goTo(e){this.disabled||e<1||e>this.totalPages||e===this.page||(this.page=e,this.dispatchEvent(new CustomEvent(`page-change`,{bubbles:!0,composed:!0,detail:{page:e}})))}_pageTokens(){let{page:e,totalPages:t}=this,n=w[this.pageRange]??w.standard;if(t<=n*2+5)return Array.from({length:t},(e,t)=>t+1);let r=Math.max(e-n,1),i=Math.min(e+n,t),a=r>2,o=i<t-1;if(!a&&o){let e=3+n*2;return[...Array.from({length:e},(e,t)=>t+1),`ellipsis`,t]}if(a&&!o){let e=3+n*2;return[1,`ellipsis`,...Array.from({length:e},(n,r)=>t-e+1+r)]}return[1,`ellipsis`,...Array.from({length:i-r+1},(e,t)=>r+t),`ellipsis`,t]}_renderNumbered(){return this._pageTokens().map(e=>e===`ellipsis`?a`<span class="ellipsis" aria-hidden="true">…</span>`:a`
            <button
              class="page-btn ${e===this.page?`page-btn--active`:``}"
              ?disabled=${this.disabled}
              aria-current=${e===this.page?`page`:n}
              aria-label="Page ${e}"
              @click=${()=>this._goTo(e)}
            >
              ${e}
            </button>
          `)}_renderCompact(){return a`<span class="page-status">Page ${this.page} of ${this.totalPages}</span>`}render(){let e=this.page<=1,t=this.page>=this.totalPages;return a`
      <nav aria-label=${this.label}>
        <div class="pagination">
          ${e?n:a`
          <button
            class="nav-btn"
            ?disabled=${this.disabled}
            aria-label="Previous page"
            @click=${()=>this._goTo(this.page-1)}
          >
            <mms-icon class="icon" name="caret-left" size="md"></mms-icon>
          </button>`}

          ${this.type===`compact`?this._renderCompact():this._renderNumbered()}

          ${t?n:a`
          <button
            class="nav-btn"
            ?disabled=${this.disabled}
            aria-label="Next page"
            @click=${()=>this._goTo(this.page+1)}
          >
            <mms-icon class="icon" name="caret-right" size="md"></mms-icon>
          </button>`}
        </div>
      </nav>
    `}},d([c({type:String,reflect:!0})],T.prototype,`type`,void 0),d([c({type:Number})],T.prototype,`page`,void 0),d([c({type:Number,attribute:`total-pages`})],T.prototype,`totalPages`,void 0),d([c({type:String,reflect:!0,attribute:`page-range`})],T.prototype,`pageRange`,void 0),d([c({type:String})],T.prototype,`label`,void 0),d([c({type:Boolean,reflect:!0})],T.prototype,`disabled`,void 0),d([c({type:String,reflect:!0,attribute:`color-scheme`})],T.prototype,`colorScheme`,void 0),d([c({type:String,reflect:!0})],T.prototype,`size`,void 0),d([c({type:String,reflect:!0})],T.prototype,`roundness`,void 0),T=d([s(`mms-pagination`)],T)})),D=t({Overview:()=>M,PlaygroundStory:()=>N,__namedExportsOrder:()=>P,default:()=>O}),O,k,A,j,M,N,P,F=e((()=>{o(),E(),y(),b(),C(),O={title:`Navigational/Pagination`,tags:[`!autodocs`]},k={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},A=`680px`,j=`960px`,M={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${j}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${k.h1}">Pagination</h1>
      <p style="${k.body} opacity: 0.85; max-width: ${A}; margin-bottom: 2rem;">
        Page navigation control for moving through a paginated set of results. Two <code style="${k.monoSm}">type</code>s
        cover the two real usage patterns confirmed in production: <code style="${k.monoSm}">numbered</code>, a full
        page-number strip with previous/next controls, and <code style="${k.monoSm}">compact</code>, a previous/next-only
        control for tight layouts. Both fire the same <code style="${k.monoSm}">page-change</code> event — the host page
        owns re-fetching/re-rendering results in response.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Numbered -->
      <h2 style="${k.h2}">Numbered</h2>
      <p style="${k.bodySm} opacity: 0.85; max-width: ${A}; margin-bottom: 1.5rem;">
        The default type. Every page number is a real, individually-focusable control; the current page carries
        <code style="${k.monoSm}">aria-current="page"</code> and cannot be re-activated.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-pagination type="numbered" label="Search results" page="1" total-pages="5"></mms-pagination>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Truncation -->
      <h2 style="${k.h2}">Truncation</h2>
      <p style="${k.bodySm} opacity: 0.85; max-width: ${A}; margin-bottom: 1.5rem;">
        When <code style="${k.monoSm}">totalPages</code> is large, the strip always keeps the first and last page,
        plus a <code style="${k.monoSm}">pageRange</code>-wide window around the current page — collapsing
        everything else behind a static "…" marker (non-interactive text, same treatment as the Breadcrumbs overflow
        marker). The window slides as the current page changes.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Current page near the start</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="20"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Current page in the middle — ellipsis on both sides</p>
          <mms-pagination type="numbered" label="Search results" page="10" total-pages="20"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Current page near the end</p>
          <mms-pagination type="numbered" label="Search results" page="19" total-pages="20"></mms-pagination>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Page range -->
      <h2 style="${k.h2}">Page range</h2>
      <p style="${k.bodySm} opacity: 0.85; max-width: ${A}; margin-bottom: 1.5rem;">
        <code style="${k.monoSm}">pageRange</code> sets how much of the strip is shown around the current page:
        <code style="${k.monoSm}">minimal</code>, <code style="${k.monoSm}">standard</code> (default),
        <code style="${k.monoSm}">wide</code>, or <code style="${k.monoSm}">widest</code>. The first and last pages
        are always shown and are unaffected — only the run around the current page grows. Every example below sits at
        page 5 of 20.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Minimal — current page only</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="minimal"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Standard — default</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="standard"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Wide</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="wide"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Widest — the "…" is dropped once the run reaches page 2, so the low numbers fill in</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="widest"></mms-pagination>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Compact -->
      <h2 style="${k.h2}">Compact</h2>
      <p style="${k.bodySm} opacity: 0.85; max-width: ${A}; margin-bottom: 1.5rem;">
        Previous/next controls only, with a "Page X of Y" status readout in place of individual page numbers. Use
        this where a full numbered strip doesn't fit — a card footer, a mobile layout, or a narrow sidebar list.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-pagination type="compact" label="Search results" page="3" total-pages="12"></mms-pagination>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size -->
      <h2 style="${k.h2}">Size</h2>
      <p style="${k.bodySm} opacity: 0.85; max-width: ${A}; margin-bottom: 1.5rem;">
        <code style="${k.monoSm}">sm</code>, <code style="${k.monoSm}">md</code> (default), and
        <code style="${k.monoSm}">lg</code> scale padding, label typography, and caret icon size together. Touch
        targets stay at 44px on coarse pointers regardless of size.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Small</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" size="sm"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Medium — default</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" size="md"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Large</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" size="lg"></mms-pagination>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Roundness -->
      <h2 style="${k.h2}">Roundness</h2>
      <p style="${k.bodySm} opacity: 0.85; max-width: ${A}; margin-bottom: 1.5rem;">
        <code style="${k.monoSm}">subtle</code> (default) or <code style="${k.monoSm}">boxed</code>. There is no
        pill/fully-rounded option — a circular page number reads as a status dot rather than a control, so pagination
        stays box-y by design.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Subtle — default</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" roundness="subtle"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Boxed</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" roundness="boxed"></mms-pagination>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color scheme -->
      <h2 style="${k.h2}">Color scheme</h2>
      <p style="${k.bodySm} opacity: 0.85; max-width: ${A}; margin-bottom: 1.5rem;">
        Pagination is interactive, so it needs a palette with hover and pressed states — <strong>only Tier 1
        palettes qualify</strong>. Tier 2 and Tier 3 are both excluded: Tier 2 is missing step 10 (the hover state),
        and Tier 3 is missing hover and text contrast. On the Maximus theme the valid schemes are
        <code style="${k.monoSm}">primary</code>, <code style="${k.monoSm}">secondary</code>, and
        <code style="${k.monoSm}">onyx</code> — <code style="${k.monoSm}">accent</code> is Tier 3 (decorative,
        2.23:1). Which schemes are excluded differs per theme: on VA.gov, <code style="${k.monoSm}">accent</code> is
        Tier 2 and <code style="${k.monoSm}">secondary</code> is Tier 3. Selecting any excluded combination in the
        Playground renders an "Invalid combination" notice instead of the component. See
        <em>Color Framework → Color Tiering</em>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Primary — default</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" color-scheme="primary"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Secondary</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" color-scheme="secondary"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Onyx — structural, valid on every theme</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" color-scheme="onyx"></mms-pagination>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Boundary and disabled states -->
      <h2 style="${k.h2}">Boundary and disabled states</h2>
      <p style="${k.bodySm} opacity: 0.85; max-width: ${A}; margin-bottom: 1.5rem;">
        At the first page the previous caret is <strong>not rendered at all</strong>, and likewise the next caret at
        the last page — the same approach GOV.UK and USWDS take. A disabled caret differs from an enabled one by
        colour alone on a small glyph, which is easy to miss; omitting it removes the state rather than asking the
        user to perceive it, and leaves nothing for a screen reader to announce and skip. The strip shifts by one
        control width at the boundaries, which is the accepted trade.
      </p>
      <p style="${k.bodySm} opacity: 0.85; max-width: ${A}; margin-bottom: 1.5rem;">
        <code style="${k.monoSm}">disabled</code> is a different state and still renders every control — it means
        “temporarily unavailable”, for example while a results fetch is in flight, rather than “does not apply here”.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">First page — no previous caret</p>
          <mms-pagination type="numbered" label="Search results" page="1" total-pages="5"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Middle page — both carets</p>
          <mms-pagination type="numbered" label="Search results" page="3" total-pages="5"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Last page — no next caret</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="5"></mms-pagination>
        </div>
        <div>
          <p style="${k.caption} opacity: 0.65; margin-bottom: 0.5rem;">Fully disabled — all controls present, none actionable</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" disabled></mms-pagination>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="${k.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${k.monoSm}"><code>&lt;mms-pagination
  label="Search results"
  page="1"
  total-pages="20"
  @page-change=\${(e) => { /* re-fetch results for e.detail.page */ }}
&gt;&lt;/mms-pagination&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Accessibility -->
      <h2 style="${k.h2}">Accessibility</h2>

      <h3 style="${k.h3}">WCAG 2.2 AA Compliance</h3>
      ${S(x.pagination.rows)}

      <h3 style="${k.h3}">Screen Reader Behavior</h3>
      <ul style="${k.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> The control is wrapped in <code style="${k.monoSm}">&lt;nav aria-label="..."&gt;</code>, announced as a navigation region named by the <code style="${k.monoSm}">label</code> prop.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Current page:</strong> The active page button carries <code style="${k.monoSm}">aria-current="page"</code> — never conveyed by color alone.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Page buttons:</strong> Each carries its own <code style="${k.monoSm}">aria-label</code> ("Page N"); previous/next carets are labeled "Previous page"/"Next page".</li>
        <li style="margin-bottom: 0.5rem;"><strong>Ellipsis:</strong> The "…" overflow marker is <code style="${k.monoSm}">aria-hidden</code> static text — not announced as interactive, no overflow menu.</li>
        <li><strong>Decorative icons:</strong> The caret icons are <code style="${k.monoSm}">aria-hidden</code> — the accessible name comes from the wrapping button's <code style="${k.monoSm}">aria-label</code>, not the icon.</li>
      </ul>

      <h3 style="${k.h3}">Keyboard Navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus between the previous caret, each visible page number, and the next caret. Disabled controls are not tab stops.</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused control, firing <code style="${k.monoSm}">page-change</code>.</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},N={name:`Playground`,tags:[`!dev`],args:{type:`numbered`,page:5,totalPages:20,pageRange:`standard`,label:`Search results`,disabled:!1,colorScheme:`primary`,size:`md`,roundness:`subtle`,theme:`maximus`,density:`default`},decorators:[e=>a`
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
`),table:{category:`Content`}},label:{name:`Label`,control:`text`,description:`Accessible name for the nav landmark`,table:{category:`Content`}},disabled:{name:`Disabled`,control:`boolean`,description:`Disables every control`,table:{category:`Content`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Brand color applied to the active page, hover, and pressed accents. "onyx" is structural (works on all themes); primary/secondary/accent availability depends on theme.`,table:{category:`Content`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Scales padding, label typography, and caret icon size`,table:{category:`Content`}},roundness:{name:`Roundness`,control:`select`,options:[`boxed`,`subtle`],description:`Corner radius — boxed (0) or subtle (4px). No pill/rounded option; pagination stays box-y.`,table:{category:`Content`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.type&&n.type!==`numbered`&&r.push(`type="${n.type}"`),r.push(`page="${n.page}"`),r.push(`total-pages="${n.totalPages}"`),n.pageRange!==`standard`&&r.push(`page-range="${n.pageRange}"`),n.label&&r.push(`label="${n.label}"`),n.disabled&&r.push(`disabled`),n.colorScheme&&n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.size&&n.size!==`md`&&r.push(`size="${n.size}"`),n.roundness&&n.roundness!==`subtle`&&r.push(`roundness="${n.roundness}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-pagination\n  ${r.join(`
  `)}\n></mms-pagination>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=_(e.theme,e.colorScheme),r=v(e.theme,e.colorScheme);if(!t){let t=r===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,n=r===2?`Lacks step 10 (hover state). The active page is a solid fill with hover and pressed states, so a no-hover palette cannot express pagination’s interactive states.`:`Lacks text contrast and hover states, and does not meet non-text (3:1) contrast on every theme. Decorative backgrounds only — not a functional navigation control.`;return a`
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
            See <em>Color Framework \u2192 Color Tiering</em> for details.
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
      data-theme=${e.theme===`maximus`?n:e.theme}
    ></mms-pagination>
  `}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Pagination</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Page navigation control for moving through a paginated set of results. Two <code style="\${t.monoSm}">type</code>s
        cover the two real usage patterns confirmed in production: <code style="\${t.monoSm}">numbered</code>, a full
        page-number strip with previous/next controls, and <code style="\${t.monoSm}">compact</code>, a previous/next-only
        control for tight layouts. Both fire the same <code style="\${t.monoSm}">page-change</code> event — the host page
        owns re-fetching/re-rendering results in response.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Numbered -->
      <h2 style="\${t.h2}">Numbered</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The default type. Every page number is a real, individually-focusable control; the current page carries
        <code style="\${t.monoSm}">aria-current="page"</code> and cannot be re-activated.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-pagination type="numbered" label="Search results" page="1" total-pages="5"></mms-pagination>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Truncation -->
      <h2 style="\${t.h2}">Truncation</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        When <code style="\${t.monoSm}">totalPages</code> is large, the strip always keeps the first and last page,
        plus a <code style="\${t.monoSm}">pageRange</code>-wide window around the current page — collapsing
        everything else behind a static "…" marker (non-interactive text, same treatment as the Breadcrumbs overflow
        marker). The window slides as the current page changes.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Current page near the start</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="20"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Current page in the middle — ellipsis on both sides</p>
          <mms-pagination type="numbered" label="Search results" page="10" total-pages="20"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Current page near the end</p>
          <mms-pagination type="numbered" label="Search results" page="19" total-pages="20"></mms-pagination>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Page range -->
      <h2 style="\${t.h2}">Page range</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">pageRange</code> sets how much of the strip is shown around the current page:
        <code style="\${t.monoSm}">minimal</code>, <code style="\${t.monoSm}">standard</code> (default),
        <code style="\${t.monoSm}">wide</code>, or <code style="\${t.monoSm}">widest</code>. The first and last pages
        are always shown and are unaffected — only the run around the current page grows. Every example below sits at
        page 5 of 20.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Minimal — current page only</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="minimal"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Standard — default</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="standard"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Wide</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="wide"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Widest — the "…" is dropped once the run reaches page 2, so the low numbers fill in</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="20" page-range="widest"></mms-pagination>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Compact -->
      <h2 style="\${t.h2}">Compact</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Previous/next controls only, with a "Page X of Y" status readout in place of individual page numbers. Use
        this where a full numbered strip doesn't fit — a card footer, a mobile layout, or a narrow sidebar list.
      </p>

      <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <mms-pagination type="compact" label="Search results" page="3" total-pages="12"></mms-pagination>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size -->
      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">sm</code>, <code style="\${t.monoSm}">md</code> (default), and
        <code style="\${t.monoSm}">lg</code> scale padding, label typography, and caret icon size together. Touch
        targets stay at 44px on coarse pointers regardless of size.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Small</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" size="sm"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Medium — default</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" size="md"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Large</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" size="lg"></mms-pagination>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Roundness -->
      <h2 style="\${t.h2}">Roundness</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">subtle</code> (default) or <code style="\${t.monoSm}">boxed</code>. There is no
        pill/fully-rounded option — a circular page number reads as a status dot rather than a control, so pagination
        stays box-y by design.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Subtle — default</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" roundness="subtle"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Boxed</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" roundness="boxed"></mms-pagination>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color scheme -->
      <h2 style="\${t.h2}">Color scheme</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Pagination is interactive, so it needs a palette with hover and pressed states — <strong>only Tier 1
        palettes qualify</strong>. Tier 2 and Tier 3 are both excluded: Tier 2 is missing step 10 (the hover state),
        and Tier 3 is missing hover and text contrast. On the Maximus theme the valid schemes are
        <code style="\${t.monoSm}">primary</code>, <code style="\${t.monoSm}">secondary</code>, and
        <code style="\${t.monoSm}">onyx</code> — <code style="\${t.monoSm}">accent</code> is Tier 3 (decorative,
        2.23:1). Which schemes are excluded differs per theme: on VA.gov, <code style="\${t.monoSm}">accent</code> is
        Tier 2 and <code style="\${t.monoSm}">secondary</code> is Tier 3. Selecting any excluded combination in the
        Playground renders an "Invalid combination" notice instead of the component. See
        <em>Color Framework → Color Tiering</em>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Primary — default</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" color-scheme="primary"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Secondary</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" color-scheme="secondary"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Onyx — structural, valid on every theme</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" color-scheme="onyx"></mms-pagination>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Boundary and disabled states -->
      <h2 style="\${t.h2}">Boundary and disabled states</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        At the first page the previous caret is <strong>not rendered at all</strong>, and likewise the next caret at
        the last page — the same approach GOV.UK and USWDS take. A disabled caret differs from an enabled one by
        colour alone on a small glyph, which is easy to miss; omitting it removes the state rather than asking the
        user to perceive it, and leaves nothing for a screen reader to announce and skip. The strip shifts by one
        control width at the boundaries, which is the accepted trade.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">disabled</code> is a different state and still renders every control — it means
        “temporarily unavailable”, for example while a results fetch is in flight, rather than “does not apply here”.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; margin-bottom: 2rem;">
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">First page — no previous caret</p>
          <mms-pagination type="numbered" label="Search results" page="1" total-pages="5"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Middle page — both carets</p>
          <mms-pagination type="numbered" label="Search results" page="3" total-pages="5"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Last page — no next caret</p>
          <mms-pagination type="numbered" label="Search results" page="5" total-pages="5"></mms-pagination>
        </div>
        <div>
          <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.5rem;">Fully disabled — all controls present, none actionable</p>
          <mms-pagination type="numbered" label="Search results" page="2" total-pages="5" disabled></mms-pagination>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm}"><code>&lt;mms-pagination
  label="Search results"
  page="1"
  total-pages="20"
  @page-change=\\\${(e) => { /* re-fetch results for e.detail.page */ }}
&gt;&lt;/mms-pagination&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 2rem 0;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['pagination'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> The control is wrapped in <code style="\${t.monoSm}">&lt;nav aria-label="..."&gt;</code>, announced as a navigation region named by the <code style="\${t.monoSm}">label</code> prop.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Current page:</strong> The active page button carries <code style="\${t.monoSm}">aria-current="page"</code> — never conveyed by color alone.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Page buttons:</strong> Each carries its own <code style="\${t.monoSm}">aria-label</code> ("Page N"); previous/next carets are labeled "Previous page"/"Next page".</li>
        <li style="margin-bottom: 0.5rem;"><strong>Ellipsis:</strong> The "…" overflow marker is <code style="\${t.monoSm}">aria-hidden</code> static text — not announced as interactive, no overflow menu.</li>
        <li><strong>Decorative icons:</strong> The caret icons are <code style="\${t.monoSm}">aria-hidden</code> — the accessible name comes from the wrapping button's <code style="\${t.monoSm}">aria-label</code>, not the icon.</li>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus between the previous caret, each visible page number, and the next caret. Disabled controls are not tab stops.</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused control, firing <code style="\${t.monoSm}">page-change</code>.</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            <strong>\${tierLabel}:</strong> \${tierReason}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
            See <em>Color Framework \\u2192 Color Tiering</em> for details.
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
      data-theme=\${args.theme !== 'maximus' ? args.theme : nothing}
    ></mms-pagination>
  \`;
  }
}`,...N.parameters?.docs?.source}}},P=[`Overview`,`PlaygroundStory`]}));F();export{M as Overview,N as PlaygroundStory,P as __namedExportsOrder,O as default,F as n,D as t};