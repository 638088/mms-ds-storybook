import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-B0BZwaT1.js";import{S as o,b as s,g as c,n as l,r as u,w as d}from"./mms-icon.component-DFVI3nJi.js";import{t as f}from"./mms-card.component-Ae9XIj4r.js";import{a as p,c as m,d as h,i as g,n as _,o as v,r as y,u as b}from"./doc-styles-DkvR_Qyb.js";import{a as x,n as S}from"./a11y-outcome-Baw4sLAQ.js";import{n as C,t as w}from"./mms-tabs.component-DnFCRKwS.js";var T,E=e((()=>{a(),c(),u(),T=class extends r{constructor(...e){super(...e),this.pageTitle=``,this.suffix=``,this._previousTitle=null}connectedCallback(){super.connectedCallback(),this._previousTitle=document.title,this._applyTitle()}disconnectedCallback(){super.disconnectedCallback(),this._previousTitle!==null&&(document.title=this._previousTitle)}updated(e){(e.has(`pageTitle`)||e.has(`suffix`))&&this._applyTitle()}_applyTitle(){document.title=this.suffix?`${this.pageTitle} - ${this.suffix}`:this.pageTitle}render(){return t}},l([o({type:String,attribute:`page-title`})],T.prototype,`pageTitle`,void 0),l([o({type:String})],T.prototype,`suffix`,void 0),T=l([d(`mms-document-title`)],T)})),D,O,k,A,j=e((()=>{a(),c(),w(),C(),E(),u(),D=`MyStateProgram`,O=`MyStateProgram`,k=[{id:`home`,label:`Home`},{id:`enrollment`,label:`Enrollment`,pageTitle:`Enrollment`},{id:`plan-comparison`,label:`Plan Comparison`,pageTitle:`Plan Comparison`},{id:`confirmation`,label:`Confirmation`,pageTitle:`Confirmation`}],A=class extends r{constructor(...e){super(...e),this.currentPageId=`home`,this.liveTitle=document.title,this._handleTabChange=e=>{this.currentPageId=k[e.detail.index]?.id??k[0].id}}static{this.styles=n`
    :host {
      display: block;
      font-family: var(--font-family-body);
      color: var(--color-text-default);
    }

    .panel {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md1);
      padding: var(--spacing-md1);
      border: var(--spacing-px) solid var(--color-border-default);
      border-radius: var(--radius-md);
      background: var(--color-surface-default);
    }

    .caption {
      font-family: var(--type-body-sm-family);
      font-size: var(--type-body-sm-size);
      line-height: var(--type-body-sm-line-height);
      color: var(--color-text-muted);
      margin: 0;
    }

    /* Mock browser chrome — a rounded-top "tab" with the live title inside,
       so the demo reads as "this is your browser tab" at a glance. */
    .browser-chrome {
      border-radius: var(--radius-md) var(--radius-md) 0 0;
      background: var(--color-surface-sunken);
      padding: var(--spacing-sm1) var(--spacing-sm1) 0;
    }

    .browser-tab {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs2);
      max-width: 220px;
      padding: var(--spacing-xs2) var(--spacing-sm2);
      border-radius: var(--radius-sm) var(--radius-sm) 0 0;
      background: var(--color-surface-raised);
    }

    .browser-tab-dot {
      flex: none;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: var(--radius-full);
      background: var(--color-utility-informational-stroke);
    }

    .browser-tab-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: var(--type-body-sm-family);
      font-size: var(--type-body-sm-size);
      font-weight: var(--font-weight-medium);
    }

    .browser-body {
      padding: var(--spacing-sm2) var(--spacing-md1);
      border-radius: 0 0 var(--radius-md) var(--radius-md);
      background: var(--color-surface-raised);
      font-family: var(--type-body-sm-family);
      font-size: var(--type-body-sm-size);
      color: var(--color-text-muted);
    }
  `}connectedCallback(){super.connectedCallback(),document.title=O;let e=document.querySelector(`title`);e&&(this._observer=new MutationObserver(()=>{this.liveTitle=document.title}),this._observer.observe(e,{childList:!0,characterData:!0,subtree:!0}))}disconnectedCallback(){this._observer?.disconnect(),super.disconnectedCallback()}render(){let e=k.find(e=>e.id===this.currentPageId)??k[0],n=k.findIndex(e=>e.id===this.currentPageId);return i`
      <div class="panel">
        <div class="browser-chrome">
          <div class="browser-tab">
            <span class="browser-tab-dot"></span>
            <span class="browser-tab-title">${this.liveTitle}</span>
          </div>
        </div>
        <div class="browser-body">This mocks what your actual browser tab would show.</div>

        <mms-tabs
          label="Demo pages"
          active-index=${n}
          @tab-change=${this._handleTabChange}
        >
          ${k.map(e=>i`<mms-tabs-item label=${e.label}></mms-tabs-item>`)}
        </mms-tabs>
        <p class="caption">
          Select a tab to "navigate" to that page. "Home" mounts no mms-document-title at all —
          switching back to it shows the title restoring to the app's own baseline.
        </p>

        ${e.pageTitle?i`<mms-document-title
              page-title=${e.pageTitle}
              suffix=${D}
            ></mms-document-title>`:t}
      </div>
    `}},l([s()],A.prototype,`currentPageId`,void 0),l([s()],A.prototype,`liveTitle`,void 0),A=l([d(`mms-document-title-demo`)],A)})),M,N,P,F;e((()=>{a(),E(),j(),f(),S(),m(),M={title:`Navigational/Document Title`,tags:[`!autodocs`]},N=[{sc:`2.4.2`,name:`Page Titled`,level:`A`,requirement:`Web pages have titles that describe topic or purpose`,isNew22:!1,category:`Page-level`,result:`PASS`,implementation:`Sets document.title to pageTitle (optionally suffixed) on connect and on every subsequent pageTitle/suffix change; restores the exact prior title on disconnect. Verified by a 14-test Vitest unit spec (mms-document-title.test.ts), not by axe-core/Playwright — this component renders no DOM for either to scan (see the rendersNoDom entry in a11y-coverage.md). This is the per-route mechanism a consumer wires into each page/route component to satisfy 2.4.2; the criterion itself is classified page-level/Not-STP in a11y-coverage.md, same bucket as Skip Link's 2.4.1.`}],P={name:`Overview`,render:()=>i`
    <div data-theme=${y} data-mode=${v()} style=${_}>

      <!-- Header -->
      <h1 style="${h.h1}">Document Title</h1>
      <p style="${h.body} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        A side-effect-only utility. It renders nothing — no DOM, no visual output.
      </p>
      <ul style="${h.body} ${p.muted} max-width: ${g}; margin: 0 0 ${b.content}; padding-left: var(--spacing-md2);">
        <li>While mounted, it keeps the browser tab's title in sync with the active route.</li>
        <li>On unmount, it restores whatever title was active before it connected.</li>
      </ul>
      <p style="${h.body} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        Satisfies <strong>WCAG 2.4.2 Page Titled</strong> — required for Section 508 (federal
        engagements) and ADA Title II (state engagements).
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${b.subsection};">
        <div slot="body-content">
        <p style="${h.bodySm} margin: 0 0 ${b.label};">
          <strong>Why this exists.</strong> Client-side route changes in a single-page app never
          trigger a real page load.
        </p>
        <p style="${h.bodySm} margin: 0;">
          Without something actively updating it, the tab title stays frozen on whatever the
          initial HTML shipped with — and so does what's announced to assistive technology on
          route change. Mount one instance per route; it takes effect the moment that route
          becomes active.
        </p>
        </div>
      </mms-card>

      <hr style="${p.divider}" />

      <!-- Try it -->
      <h2 style="${h.h2}">Try it</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.label};">
        You won't see your real browser tab change below — Storybook's canvas runs in its own
        iframe, which has its own separate <code style="${h.monoSm}">document</code>.
      </p>
      <p style="${h.caption} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        The mock browser tab below shows that iframe's own title updating in real time instead —
        proving the component actually works.
      </p>
      <mms-document-title-demo></mms-document-title-demo>

      <hr style="${p.divider}" />

      <!-- Usage -->
      <h2 style="${h.h2}">Usage</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        Place one instance inside each route/page component. It has no layout footprint — only
        whether it's connected matters, not where in the markup.
      </p>
      <pre style="${p.pre}"><code>&lt;mms-document-title page-title="Enrollment" suffix="MyStateProgram"&gt;&lt;/mms-document-title&gt;
&lt;!-- Tab reads: Enrollment - MyStateProgram --&gt;</code></pre>

      <hr style="${p.divider}" />

      <!-- Props -->
      <h2 style="${h.h2}">Props</h2>
      <ul style="${h.bodySm} ${p.muted} max-width: ${g}; margin: 0 0 ${b.content}; padding-left: var(--spacing-md2);">
        <li><code style="${h.monoSm}">page-title</code> — required. The title for this route.</li>
        <li><code style="${h.monoSm}">suffix</code> — optional. Appended as
          <code style="${h.monoSm}">"page-title - suffix"</code> when present.</li>
      </ul>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        Named <code style="${h.monoSm}">page-title</code>, not the more obvious
        <code style="${h.monoSm}">title</code> — <code style="${h.monoSm}">title</code> is a
        native HTML attribute (hover tooltip text) present on every element. Reusing it would
        silently shadow that built-in behavior.
      </p>

      <hr style="${p.divider}" />

      <!-- Accessibility -->
      <h2 style="${h.h2}">Accessibility</h2>

      <h3 style="${h.h3}">WCAG 2.2 AA compliance</h3>
      ${x(N)}

      <h3 style="${h.h3}">Screen reader behavior</h3>
      <ul style="${h.bodySm} ${p.muted} margin: 0 0 ${b.content}; padding-left: var(--spacing-lg1);">
        <li><strong>Route change:</strong> Screen readers commonly announce the document title on
          route change — keeping it current gives AT users the same cue sighted users get from
          the tab text.</li>
        <li><strong>No live region:</strong> This is a document-level side effect, not an on-page
          announcement. No <code style="${h.monoSm}">aria-live</code> — there's no visible content
          to pair it with.</li>
      </ul>

      <h3 style="${h.h3}">Keyboard navigation</h3>
      <p style="${h.bodySm} ${p.muted} margin: 0;">
        None. Not focusable — it renders no DOM at all.
      </p>
    </div>
  `},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Document Title</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        A side-effect-only utility. It renders nothing — no DOM, no visual output.
      </p>
      <ul style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0 0 \${space.content}; padding-left: var(--spacing-md2);">
        <li>While mounted, it keeps the browser tab's title in sync with the active route.</li>
        <li>On unmount, it restores whatever title was active before it connected.</li>
      </ul>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Satisfies <strong>WCAG 2.4.2 Page Titled</strong> — required for Section 508 (federal
        engagements) and ADA Title II (state engagements).
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm} margin: 0 0 \${space.label};">
          <strong>Why this exists.</strong> Client-side route changes in a single-page app never
          trigger a real page load.
        </p>
        <p style="\${t.bodySm} margin: 0;">
          Without something actively updating it, the tab title stays frozen on whatever the
          initial HTML shipped with — and so does what's announced to assistive technology on
          route change. Mount one instance per route; it takes effect the moment that route
          becomes active.
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Try it -->
      <h2 style="\${t.h2}">Try it</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.label};">
        You won't see your real browser tab change below — Storybook's canvas runs in its own
        iframe, which has its own separate <code style="\${t.monoSm}">document</code>.
      </p>
      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The mock browser tab below shows that iframe's own title updating in real time instead —
        proving the component actually works.
      </p>
      <mms-document-title-demo></mms-document-title-demo>

      <hr style="\${doc.divider}" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Place one instance inside each route/page component. It has no layout footprint — only
        whether it's connected matters, not where in the markup.
      </p>
      <pre style="\${doc.pre}"><code>&lt;mms-document-title page-title="Enrollment" suffix="MyStateProgram"&gt;&lt;/mms-document-title&gt;
&lt;!-- Tab reads: Enrollment - MyStateProgram --&gt;</code></pre>

      <hr style="\${doc.divider}" />

      <!-- Props -->
      <h2 style="\${t.h2}">Props</h2>
      <ul style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0 0 \${space.content}; padding-left: var(--spacing-md2);">
        <li><code style="\${t.monoSm}">page-title</code> — required. The title for this route.</li>
        <li><code style="\${t.monoSm}">suffix</code> — optional. Appended as
          <code style="\${t.monoSm}">"page-title - suffix"</code> when present.</li>
      </ul>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Named <code style="\${t.monoSm}">page-title</code>, not the more obvious
        <code style="\${t.monoSm}">title</code> — <code style="\${t.monoSm}">title</code> is a
        native HTML attribute (hover tooltip text) present on every element. Reusing it would
        silently shadow that built-in behavior.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(documentTitleWcagRows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li><strong>Route change:</strong> Screen readers commonly announce the document title on
          route change — keeping it current gives AT users the same cue sighted users get from
          the tab text.</li>
        <li><strong>No live region:</strong> This is a document-level side effect, not an on-page
          announcement. No <code style="\${t.monoSm}">aria-live</code> — there's no visible content
          to pair it with.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <p style="\${t.bodySm} \${doc.muted} margin: 0;">
        None. Not focusable — it renders no DOM at all.
      </p>
    </div>
  \`
}`,...P.parameters?.docs?.source}}},F=[`Overview`]}))();export{P as Overview,F as __namedExportsOrder,M as default};