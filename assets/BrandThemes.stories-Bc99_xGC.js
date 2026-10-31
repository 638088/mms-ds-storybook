import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t,s as n,t as r}from"./lit-B0BZwaT1.js";import{b as i,g as a,n as o,r as s,t as c,w as l}from"./mms-icon.component-DFVI3nJi.js";import{i as u,n as d,r as f,t as p}from"./iframe-BrFFNKAP.js";import{t as m}from"./mms-header.component-DYAUeykQ.js";import{r as h,t as g}from"./theme-constraints-BnNpJNRe.js";import{a as _,c as v,f as y,i as b,l as x,r as S,t as C,u as w}from"./doc-styles-DkvR_Qyb.js";import{t as T}from"./mms-footer.component-SgcEioZh.js";import{n as E,t as D}from"./mms-side-nav.component-CHuQJhHP.js";import{t as O}from"./mms-select.component-CO4YBVrq.js";import{t as k}from"./mms-tag.component-DJAxUPFB.js";var A,j,M,N,P,F,I,L,R,z,B,V,H,U=e((()=>{r(),a(),h(),v(),d(),m(),T(),D(),E(),u(),O(),k(),c(),s(),A={default:`Neutral greyscale used internally while a component is built.`,maximus:`Maximus corporate brand — the starting brand for prototypes.`,ves:`Veterans Evaluation Services — rooted in va.gov's visual language.`,"uss-oh-dvs":`Ohio Department of Veterans Services.`,dow:`Department of War engagement.`},j=f(Object.keys(g).filter(e=>e!=="default")),M=[`primary`,`secondary`,`accent`],N={1:`Tier 1 — Full`,2:`Tier 2 — Text + Surface`,3:`Tier 3 — Decorative`},P={1:[1,2,3,4,5,6,7,8,9,10,11,12],2:[1,2,9,11,12],3:[1,2,9]},F=[1,2,3,4,5,6,7,8,9,10,11,12],I=[{role:`display-lg`,label:`Display LG`,usage:`Hero taglines, splash screens`},{role:`display-md`,label:`Display MD`,usage:`Feature callouts, section heroes`},{role:`display-sm`,label:`Display SM`,usage:`Secondary hero text, card heroes`},{role:`heading-1`,label:`Heading 1`,usage:`Page title`},{role:`heading-2`,label:`Heading 2`,usage:`Major section`},{role:`heading-3`,label:`Heading 3`,usage:`Subsection`},{role:`heading-4`,label:`Heading 4`,usage:`Card/panel title`},{role:`heading-5`,label:`Heading 5`,usage:`Minor heading`},{role:`heading-6`,label:`Heading 6`,usage:`Smallest heading`},{role:`body-lg`,label:`Body LG`,usage:`Lead paragraphs, emphasis`},{role:`body-md`,label:`Body MD`,usage:`Default body text`},{role:`body-sm`,label:`Body SM`,usage:`Secondary text, metadata`},{role:`ui-label-lg`,label:`UI Label LG`,usage:`Large labels, sized as Body LG`},{role:`ui-label-md`,label:`UI Label MD`,usage:`Accessibility-first labels, government default`},{role:`ui-label-sm`,label:`UI Label SM`,usage:`Standard UI density labels`},{role:`ui-caption`,label:`UI Caption`,usage:`Timestamps, helper text, fine print`},{role:`ui-overline`,label:`UI Overline`,usage:`All caps. Category tags, section labels`},{role:`code-inline`,label:`Code Inline`,usage:`Inline code, relative to surrounding text`},{role:`code-block`,label:`Code Block`,usage:`Code blocks`}],L=[`About`,`Services`,`Resources`,`News`,`Contact`],R=[{label:`Home`,icon:`house`},{label:`About`,icon:`info`},{label:`Services`,icon:`briefcase`},{label:`Resources`,icon:`book-open`},{label:`Contact`,icon:`envelope`}],z=[{label:`1-800-555-1234`,href:`tel:+18005551234`},{label:`support@example.gov`,href:`mailto:support@example.gov`}],B=[{label:`Facebook`,icon:`facebook-logo`},{label:`X`,icon:`x-logo`},{label:`LinkedIn`,icon:`linkedin-logo`}],V=[`Privacy Policy`,`Terms of Use`,`Accessibility`,`Nondiscrimination Notice`],H=class extends t{constructor(...e){super(...e),this.brand=`maximus`,this.mode=`light`,this.fonts={heading:``,body:``,tabular:``}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.readMode(),this.modeObserver=new MutationObserver(()=>this.readMode()),this.modeObserver.observe(document.body,{attributes:!0,attributeFilter:[`data-mode`]})}disconnectedCallback(){this.modeObserver?.disconnect(),super.disconnectedCallback()}readMode(){this.mode=document.body.getAttribute(`data-mode`)===`dark`?`dark`:`light`}onBrandChange(e){this.brand=e.detail.value}updated(){let e=this.querySelector(`.bt-sample`);if(!e)return;let t=getComputedStyle(e),n=e=>t.getPropertyValue(e).trim().replace(/"/g,`'`),r={heading:n(`--font-family-heading`),body:n(`--font-family-body`),tabular:n(`--font-family-tabular`)};(r.heading!==this.fonts.heading||r.body!==this.fonts.body||r.tabular!==this.fonts.tabular)&&(this.fonts=r)}renderStyles(){return n`<style>
      mms-brand-themes-page { display: block; }
      .bt-page { ${y.body} ${C} max-width: 960px; margin: 0 auto; padding: var(--spacing-lg2); color: inherit; }
      .bt-title { ${y.pageTitle} margin: 0 0 ${w.content}; }
      .bt-intro { ${y.intro} margin: 0 0 ${w.subsection}; max-width: ${b}; }

      .bt-scope { ${y.body} background: var(--color-surface-page); color: var(--color-text-default); border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-md); padding: ${w.subsection}; margin-block-start: ${w.subsection}; }
      .bt-section + .bt-section { ${x} }
      .bt-subsection + .bt-subsection { margin-block-start: ${w.subsection}; }
      .bt-h2 { ${y.section} margin: 0 0 ${w.content}; }
      .bt-h3 { ${y.subsection} display: flex; align-items: center; gap: ${w.label}; margin: 0 0 ${w.content}; }
      .bt-lede { ${y.body} color: var(--color-text-subtle); margin: 0 0 ${w.content}; max-width: ${b}; }
      .bt-note { ${y.body} color: var(--color-text-subtle); }
      .bt-mono { ${y.code} }
      .bt-role { ${y.label} color: var(--color-text-subtle); }

      .bt-frame { border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-md); overflow: hidden; }
      .bt-shell { display: flex; height: 380px; }
      .bt-shell > div { flex: 1; padding: var(--layout-gap-loose); background: var(--color-surface-sunken); }
      @media (max-width: 767px) { .bt-shell { flex-direction: column; height: auto; } }

      .bt-scale { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--spacing-xs1); }
      .bt-swatch { height: var(--spacing-xl2); border-radius: var(--radius-sm); }
      .bt-swatch--set { border: var(--border-width-xs) solid var(--color-border-subtle); }
      .bt-swatch--empty { border: var(--border-width-xs) dashed var(--color-border-default); }
      .bt-step { ${y.code} text-align: center; margin-block-start: ${w.label}; color: var(--color-text-subtle); }
      .bt-step--empty { color: var(--color-text-muted); }
      .bt-on { display: flex; flex-wrap: wrap; gap: ${w.content}; }

      .bt-fonts { width: 100%; border-collapse: collapse; ${_.tableText} }
      .bt-fonts th, .bt-fonts td { text-align: left; padding: ${w.label} var(--spacing-sm2); border: var(--border-width-xs) solid var(--color-border-subtle); vertical-align: top; }
      .bt-fonts code { font-size: inherit; }
      .bt-type { display: grid; grid-template-columns: 8rem 1fr; gap: ${w.subsection}; align-items: baseline; padding-block: ${w.content}; border-block-start: var(--border-width-xs) solid var(--color-border-subtle); }
    </style>`}renderPalette(e){let t=g[this.brand][e],r=P[t];return n`<div class="bt-subsection">
      <h3 class="bt-h3">
        <span style="text-transform: capitalize;">${e}</span>
        <mms-tag label=${N[t]} tag-style="stroke" color-scheme="onyx"></mms-tag>
      </h3>
      <div class="bt-scale" data-theme=${this.brand} data-mode=${this.mode}>
        ${F.map(t=>r.includes(t)?n`<div class="bt-swatch bt-swatch--set" style="background: var(--color-${e}-${t});"></div>`:n`<div class="bt-swatch bt-swatch--empty"></div>`)}
      </div>
      <div class="bt-scale">
        ${F.map(e=>n`<div class="bt-step ${r.includes(e)?``:`bt-step--empty`}">${e}</div>`)}
      </div>
    </div>`}renderTypography(){let{heading:e,body:t,tabular:r}=this.fonts;return n`
      <div class="bt-subsection">
        <h3 class="bt-h3">Font families</h3>
        <table class="bt-fonts">
          <thead><tr><th>Role</th><th>Token</th><th>Resolved stack</th></tr></thead>
          <tbody>
            <tr><td>Headings</td><td><code class="bt-mono">--font-family-heading</code></td><td>${e}</td></tr>
            <tr><td>Body</td><td><code class="bt-mono">--font-family-body</code></td><td>${t}</td></tr>
            <tr><td>Tabular / code</td><td><code class="bt-mono">--font-family-tabular</code></td><td>${r}</td></tr>
          </tbody>
        </table>
      </div>
      <div class="bt-subsection">
        <h3 class="bt-h3">Type scale</h3>
        ${I.map(({role:e,label:t,usage:r})=>n`<div class="bt-type">
            <span class="bt-role">${t}</span>
            <span
              class="bt-sample"
              data-theme=${this.brand}
              data-mode=${this.mode}
              style="font-family: var(--type-${e}-family); font-size: var(--type-${e}-size); line-height: var(--type-${e}-line-height); letter-spacing: var(--type-${e}-letter-spacing, normal); font-weight: var(--type-${e}-weight); text-transform: var(--type-${e}-text-transform, none);"
              >${r}</span
            >
          </div>`)}
      </div>
    `}render(){return n`
      ${this.renderStyles()}
      <div class="bt-page" data-theme=${S} data-mode=${this.mode}>
        <h1 class="bt-title">Brand Themes</h1>
        <p class="bt-intro">
          Pick a brand to see its colors and typography, and how the header, side nav, and footer
          carry its logo. Switch light and dark with Storybook's Backgrounds control.
        </p>

        <mms-select
          label="Select brand"
          helper-text=${A[this.brand]}
          .value=${this.brand}
          .options=${j.map(e=>({value:e,label:p[e]}))}
          style="max-width: 320px;"
          @change=${this.onBrandChange}
        ></mms-select>

        <div class="bt-scope">
          <section class="bt-section">
            <h2 class="bt-h2">Colors</h2>
            ${M.map(e=>this.renderPalette(e))}
            <div class="bt-subsection">
              <h3 class="bt-h3">Text on solid</h3>
              <p class="bt-lede">
                Shown for Tier 1 palettes only. Tier 3 palettes are decorative fills and carry no text.
              </p>
              <div class="bt-on" data-theme=${this.brand} data-mode=${this.mode}>
                ${M.filter(e=>g[this.brand][e]===1).map(e=>n`<mms-tag label="On ${e}" tag-style="fill" color-scheme=${e}></mms-tag>`)}
              </div>
            </div>
          </section>

          <section class="bt-section">
            <h2 class="bt-h2">Typography</h2>
            ${this.renderTypography()}
          </section>

          <section class="bt-section">
            <h2 class="bt-h2">Header</h2>
            <p class="bt-lede">The brand's logo is the header's default — nothing is slotted for it.</p>
            <div class="bt-frame" data-theme=${this.brand} data-mode=${this.mode}>
              <mms-header>
                ${L.map(e=>n`<mms-link slot="nav" href="#" label=${e} underline="none"></mms-link>`)}
              </mms-header>
            </div>
          </section>

          <section class="bt-section">
            <h2 class="bt-h2">Side nav</h2>
            <p class="bt-lede">Collapsed to the icon rail: the brand's mark sits above one icon per item.</p>
            <div class="bt-frame bt-shell" data-theme=${this.brand} data-mode=${this.mode}>
              <mms-side-nav .expanded=${!1} icons style="--mms-side-nav-top-offset: 0px; --mms-side-nav-height: 100%;">
                ${R.map(({label:e,icon:t},r)=>n`<mms-side-nav-item label=${e} icon=${t} ?active=${r===0} href="#"></mms-side-nav-item>`)}
              </mms-side-nav>
              <div><span class="bt-note">Page content area</span></div>
            </div>
          </section>

          <section class="bt-section">
            <h2 class="bt-h2">Footer</h2>
            <p class="bt-lede">
              The brand's logo is the footer's default. It shows here with every slot filled: contact,
              social, language, links and fine print.
            </p>
            <div class="bt-frame" data-theme=${this.brand} data-mode=${this.mode}>
              <mms-footer
                copyright-text="© 2026 [Organization Name]."
                fine-print-text="[Organization Name] is administered in accordance with state and federal regulations."
              >
                ${z.map(({label:e,href:t})=>n`<mms-link slot="contact" href=${t} label=${e} underline="none"></mms-link>`)}
                ${B.map(({label:e,icon:t})=>n`<a slot="social" href="#" aria-label=${e}><mms-icon name=${t} size="lg"></mms-icon></a>`)}
                <mms-select
                  slot="language"
                  size="sm"
                  placeholder="Language"
                  value="en"
                  .options=${[{value:`en`,label:`English`},{value:`es`,label:`Español`}]}
                ></mms-select>
                ${V.map(e=>n`<mms-link slot="links" href="#" label=${e} underline="none"></mms-link>`)}
              </mms-footer>
            </div>
          </section>
        </div>
      </div>
    `}},o([i()],H.prototype,`brand`,void 0),o([i()],H.prototype,`mode`,void 0),o([i()],H.prototype,`fonts`,void 0),H=o([l(`mms-brand-themes-page`)],H)})),W,G,K;e((()=>{r(),U(),customElements.get(`mms-brand-themes-page`)||customElements.define(`mms-brand-themes-page`,H),W={title:`Brand Themes/Brand Themes`,tags:[`!autodocs`]},G={name:`Brand Themes`,render:()=>n`<mms-brand-themes-page></mms-brand-themes-page>`},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Brand Themes',
  render: () => html\`<mms-brand-themes-page></mms-brand-themes-page>\`
}`,...G.parameters?.docs?.source}}},K=[`BrandThemes`]}))();export{G as BrandThemes,K as __namedExportsOrder,W as default};