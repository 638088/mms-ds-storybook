import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{H as n,K as r,V as i,W as a,Z as o}from"./iframe-J4X5mQMa.js";import{a as s,c,i as l,m as u,n as d,r as f,t as p,u as m}from"./mms-icon.component-DHfZ8Yc6.js";var h,g,_=t((()=>{i(),c(),s(),p(),f(),h=Object.values(l).flat().length,g=class extends n{constructor(...e){super(...e),this.query=``,this.copied=``}static{this.styles=o`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: inherit;
    }

    .search-bar {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .search-input {
      flex: 1;
      height: 2.5rem;
      padding: 0 0.875rem;
      border: 1px solid rgba(128,128,128,0.3);
      border-radius: 6px;
      background: transparent;
      color: inherit;
      font-size: 0.9375rem;
      font-family: inherit;
      outline: none;
    }

    .search-input:focus-visible {
      border-color: #386CF7;
      box-shadow: 0 0 0 2px rgba(56,108,247,0.2);
    }

    .search-input::placeholder {
      opacity: 0.4;
    }

    .clear-btn {
      height: 2.5rem;
      padding: 0 0.875rem;
      border: 1px solid rgba(128,128,128,0.25);
      border-radius: 6px;
      background: transparent;
      color: inherit;
      font-size: 0.875rem;
      font-family: inherit;
      cursor: pointer;
      opacity: 0.65;
    }

    .clear-btn:hover { opacity: 1; }

    .result-count {
      font-size: 0.8125rem;
      opacity: 0.55;
      margin-bottom: 1.5rem;
    }

    .empty {
      padding: 3rem 1rem;
      text-align: center;
      opacity: 0.45;
      font-size: 0.9375rem;
    }

    .category-heading {
      font-size: 0.8125rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      opacity: 0.65;
      margin: 0 0 0.75rem;
    }

    .category-section {
      margin-bottom: 2rem;
    }

    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      gap: 0.5rem;
    }

    .icon-cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 0.25rem;
      border-radius: 6px;
      background: rgba(128,128,128,0.04);
      cursor: pointer;
      border: 1px solid transparent;
      transition: background 120ms, border-color 120ms;
      position: relative;
    }

    .icon-cell:hover {
      background: rgba(56,108,247,0.06);
      border-color: rgba(56,108,247,0.2);
    }

    .icon-cell.copied {
      background: rgba(21,128,61,0.08);
      border-color: rgba(21,128,61,0.25);
    }

    .icon-name {
      font-size: 0.7rem;
      opacity: 0.6;
      text-align: center;
      line-height: 1.3;
      word-break: break-all;
    }

    .copied-label {
      position: absolute;
      top: 0.35rem;
      right: 0.35rem;
      font-size: 0.6rem;
      font-weight: 700;
      color: #15803d;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
  `}get filtered(){let e=this.query.trim().toLowerCase();if(!e)return Object.entries(l);let t=[];for(let[n,r]of Object.entries(l)){let i=r.filter(t=>t.includes(e));i.length&&t.push([n,i])}return t}get filteredTotal(){return this.filtered.reduce((e,[,t])=>e+t.length,0)}onInput(e){this.query=e.target.value}clear(){this.query=``,this.shadowRoot?.querySelector(`.search-input`)?.focus()}async copyIcon(e){let t=`<mms-icon name="${e}"></mms-icon>`;try{await navigator.clipboard.writeText(t)}catch{let e=document.createElement(`textarea`);e.value=t,e.style.position=`fixed`,e.style.opacity=`0`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e)}this.copied=e,setTimeout(()=>{this.copied===e&&(this.copied=``)},1500)}renderCell(e){let t=this.copied===e;return r`
      <div
        class="icon-cell ${t?`copied`:``}"
        role="button"
        tabindex="0"
        title="Click to copy &lt;mms-icon name=&quot;${e}&quot;&gt;&lt;/mms-icon&gt;"
        @click=${()=>this.copyIcon(e)}
        @keydown=${t=>{(t.key===`Enter`||t.key===` `)&&this.copyIcon(e)}}
        aria-label="Copy ${e} icon snippet"
      >
        ${t?r`<span class="copied-label">Copied</span>`:a}
        <mms-icon name="${e}" size="lg"></mms-icon>
        <span class="icon-name">${e}</span>
      </div>
    `}render(){let e=this.filtered,t=this.filteredTotal,n=this.query.trim().length>0,i=n?`${t} of ${h} icons match "${this.query.trim()}"`:`${h} icons across ${Object.keys(l).length} categories — click any icon to copy snippet`;return r`
      <div class="search-bar">
        <input
          class="search-input"
          type="search"
          placeholder="Search icons…"
          autocomplete="off"
          spellcheck="false"
          .value=${this.query}
          @input=${this.onInput}
          aria-label="Search icons"
        />
        ${n?r`<button class="clear-btn" @click=${this.clear} aria-label="Clear search">Clear</button>`:a}
      </div>

      <p class="result-count">${i}</p>

      ${t===0?r`<div class="empty">No icons match "${this.query.trim()}"</div>`:e.map(([e,t])=>r`
            <div class="category-section">
              <p class="category-heading">${e} <span style="font-weight:400;opacity:0.55;">(${t.length})</span></p>
              <div class="icon-grid">
                ${t.map(e=>this.renderCell(e))}
              </div>
            </div>
          `)}
    `}},d([m()],g.prototype,`query`,void 0),d([m()],g.prototype,`copied`,void 0),g=d([u(`mms-icon-gallery`)],g)})),v=e({Gallery:()=>D,Overview:()=>E,PlaygroundStory:()=>O,__namedExportsOrder:()=>k,default:()=>y}),y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{i(),p(),s(),_(),y={title:`Foundations/Iconography`,tags:[`!autodocs`]},b={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},x=`680px`,S=`960px`,C=[{token:`--icon-size-sm`,value:`16px`,label:`Small`,usage:`Inline with body text; form control indicators. Marina secondary size.`},{token:`--icon-size-md`,value:`20px`,label:`Medium`,usage:`Default — standard UI icon. Aligns with MUI default and Tailwind w-5.`},{token:`--icon-size-lg`,value:`24px`,label:`Large`,usage:`Navigation, prominent UI. Marina primary size. WCAG 2.5.8 minimum for interactive targets.`},{token:`--icon-size-xl`,value:`32px`,label:`X-Large`,usage:`Feature / display — onboarding, empty states, hero sections.`}],w=`
  :root {
    --icon-size-sm: 16px;
    --icon-size-md: 20px;
    --icon-size-lg: 24px;
    --icon-size-xl: 32px;
  }
`,T=({token:e,value:t,label:n,usage:i})=>r`
  <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
    <td style="padding: 0.5rem 0.75rem; ${b.monoSm} color: inherit; white-space: nowrap;">${e}</td>
    <td style="padding: 0.5rem 0.75rem; ${b.monoSm} opacity: 0.65; white-space: nowrap;">${t}</td>
    <td style="padding: 0.5rem 0.75rem; ${b.caption} opacity: 0.65;">${n}</td>
    <td style="padding: 0.5rem 0.75rem; ${b.caption} opacity: 0.65;">${i}</td>
  </tr>
`,E={name:`Overview`,render:()=>r`
    <style>${w}</style>
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${S}; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${b.h1}">Iconography</h1>
      <p style="${b.body} opacity: 0.85; max-width: ${x}; margin-bottom: 0.5rem;">
        1,458 icons from <strong>Phosphor Icons</strong> (MIT licence). Full library across 18 categories — covers the complete UI surface of government service delivery. Regular and Fill weights.
      </p>
      <p style="${b.caption} opacity: 0.65; max-width: ${x}; margin-bottom: 2rem;">
        All icons render via <code style="${b.monoSm}">&lt;mms-icon&gt;</code> and fill with <code style="${b.monoSm}">fill: currentColor</code>, making them automatically theme-responsive in both light and dark mode.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Library rationale -->
      <h2 style="${b.h2}">Library selection rationale</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1.25rem;">
        Phosphor was selected after evaluating the four libraries most commonly considered for design systems at this scale.
      </p>
      <div style="overflow-x: auto; margin-bottom: 1.25rem;">
        <table style="width: 100%; border-collapse: collapse; ${b.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Library</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Licence</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Count</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Verdict</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; font-weight: 600;">Phosphor Icons</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">MIT</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">1,512</td>
              <td style="padding: 0.5rem 0.75rem; color: #15803d; font-weight: 600;">Selected</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; font-weight: 600;">MUI / Material Icons</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">Apache 2.0</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">2,100+</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">Not selected</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; font-weight: 600;">Font Awesome</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">Free tier / Pro paid</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">2,000+ free</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">Not selected</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; font-weight: 600;">Heroicons</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">MIT</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">292</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">Not selected</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem; max-width: ${x}; margin-bottom: 2rem;">
        <div style="padding: 0.875rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="${b.caption} font-weight: 600; margin-bottom: 0.2rem;">Why not MUI / Material Icons?</p>
          <p style="${b.caption} opacity: 0.75; margin: 0;">Material Icons are Google's icon set, distributed via Google Fonts CDN. Government networks frequently restrict Google CDN access (DISA STIGs, agency firewall policies). Beyond the network dependency, the Material aesthetic is inseparable from Google's design language — adopting it imposes a visual identity that conflicts with client branding requirements. MUI's icon package also bundles React components as the primary delivery mechanism, which creates a framework dependency incompatible with this platform's framework-agnostic Lit web component architecture.</p>
        </div>
        <div style="padding: 0.875rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="${b.caption} font-weight: 600; margin-bottom: 0.2rem;">Why not Font Awesome?</p>
          <p style="${b.caption} opacity: 0.75; margin: 0;">The full library requires a paid Pro licence. The free tier covers common icons but creates a two-tier system where some icons are unavailable without a subscription — an unreliable foundation for a governed platform. Font Awesome's primary delivery mechanism is also icon fonts, which have known accessibility issues (screen readers can misread private-use Unicode codepoints) and require a CDN or self-hosted font file rather than inline SVG.</p>
        </div>
        <div style="padding: 0.875rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="${b.caption} font-weight: 600; margin-bottom: 0.2rem;">Why not Heroicons?</p>
          <p style="${b.caption} opacity: 0.75; margin: 0;">Only 292 icons — insufficient coverage for a full government service delivery UI surface. Heroicons is designed for Tailwind UI and is practical for small product teams; at platform scale it creates gaps that force per-project workarounds.</p>
        </div>
        <div style="padding: 0.875rem 1rem; background: rgba(56,108,247,0.06); border-left: 3px solid #386CF7; border-radius: 0 6px 6px 0;">
          <p style="${b.caption} font-weight: 600; margin-bottom: 0.2rem;">Why Phosphor?</p>
          <p style="${b.caption} opacity: 0.75; margin: 0;">MIT licence with no external dependencies — safe for all government client engagements, bundleable offline, no CDN required. 1,512 icons across 18 categories provides full UI coverage without gaps. The <code style="${b.monoSm}">@phosphor-icons/core</code> package exports raw SVG path data with no framework dependency, making it compatible with the platform's Lit web component core and all distribution targets (React binding, AEM clientlib, headless CSS). The Regular / Fill weight pair maps directly to the default / active state pattern used across navigation, toggles, and selection controls.</p>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- WCAG callout -->
      <div style="background: rgba(56,108,247,0.06); border-left: 3px solid #386CF7; border-radius: 0 6px 6px 0; padding: 1rem 1.25rem; margin-bottom: 2rem; max-width: ${x};">
        <p style="${b.bodySm} font-weight: 600; margin-bottom: 0.35rem;">Decorative vs. Semantic icons — accessibility requirement</p>
        <p style="${b.caption} opacity: 0.85; margin-bottom: 0.35rem;">
          <strong>Decorative</strong> (default) — icon conveys no meaning on its own; leave <code style="${b.monoSm}">label</code> empty. Renders with <code style="${b.monoSm}">aria-hidden="true"</code>. Screen readers skip it.
        </p>
        <p style="${b.caption} opacity: 0.85; margin: 0;">
          <strong>Semantic</strong> — icon is the only affordance (e.g., icon-only button). Provide a <code style="${b.monoSm}">label</code> prop. Renders with <code style="${b.monoSm}">role="img" aria-label="..."</code>. Section 508 / ADA Title II requirement.
        </p>
      </div>

      <!-- Size token table -->
      <h2 style="${b.h2}">Size tokens</h2>
      <div style="overflow-x: auto; margin-bottom: 2rem;">
        <table style="width: 100%; border-collapse: collapse; ${b.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Value</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Step</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>${C.map(T)}</tbody>
        </table>
      </div>

      <!-- Size scale preview -->
      <h2 style="${b.h2}">Size scale</h2>
      <div style="display: flex; align-items: flex-end; gap: 2.5rem; padding: 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 2rem;">
        ${[`sm`,`md`,`lg`,`xl`].map(e=>r`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
            <mms-icon name="house" size="${e}"></mms-icon>
            <div style="${b.monoSm} opacity: 0.65; font-size: 0.75rem;">${e}</div>
            <div style="${b.caption} opacity: 0.5; font-size: 0.7rem;">${C.find(t=>t.token===`--icon-size-${e}`)?.value}</div>
          </div>
        `)}
      </div>

      <!-- Weight preview -->
      <h2 style="${b.h2}">Weight variants</h2>
      <div style="display: flex; align-items: flex-end; gap: 2.5rem; padding: 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 2rem;">
        ${[`regular`,`fill`].map(e=>r`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
            <mms-icon name="house" size="lg" weight="${e}"></mms-icon>
            <div style="${b.caption} opacity: 0.65;">${e}</div>
          </div>
        `)}
      </div>

      <!-- Directional icons -->
      <h2 style="${b.h2}">Directional icons</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1rem;">
        Directional icons (arrows, carets, chevrons) have explicit variants for each direction. Use the appropriate variant directly — <code style="${b.monoSm}">arrow-left</code>, <code style="${b.monoSm}">caret-down</code>, etc.
      </p>
      <div style="display: flex; align-items: center; gap: 2.5rem; padding: 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 0.75rem;">
        ${[`caret-right`,`caret-down`,`caret-left`,`caret-up`].map(e=>r`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
            <mms-icon name="${e}" size="lg"></mms-icon>
            <div style="${b.monoSm} opacity: 0.65; font-size: 0.75rem;">${e}</div>
          </div>
        `)}
      </div>
      <p style="${b.caption} opacity: 0.55; max-width: ${x}; margin-bottom: 2rem;">
        This approach matches industry convention (Phosphor, Heroicons, Material) and simplifies component APIs — no direction prop threading required.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Badge preview -->
      <h2 style="${b.h2}">Badge variants</h2>
      <p style="${b.bodySm} opacity: 0.85; max-width: ${x}; margin-bottom: 1rem;">
        The <code style="${b.monoSm}">badge</code> prop overlays a notification indicator on the icon. Use <code style="${b.monoSm}">badge="dot"</code> for unread presence, or a number for counts. Values above 99 display as <code style="${b.monoSm}">99+</code>.
      </p>
      <div style="display: flex; align-items: center; gap: 2.5rem; padding: 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 2rem;">
        ${[{badge:``,label:`none`},{badge:`dot`,label:`badge="dot"`},{badge:`5`,label:`badge="5"`},{badge:`99`,label:`badge="99"`},{badge:`100`,label:`badge="100"`}].map(({badge:e,label:t})=>r`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem; padding: 0 0.5rem;">
            <mms-icon name="bell" size="lg" badge="${e}"></mms-icon>
            <div style="${b.monoSm} opacity: 0.65; font-size: 0.7rem; text-align: center;">${t}</div>
          </div>
        `)}
      </div>

    </div>
  `},D={name:`Gallery`,render:()=>r`
    <style>${w}</style>
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${S}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h2 style="${b.h2}">Icon library — 1,512 icons</h2>
      <mms-icon-gallery></mms-icon-gallery>
    </div>
  `},O={tags:[`!dev`],args:{name:`house`,size:`lg`,weight:`regular`,badge:``,label:``},argTypes:{name:{control:`select`,options:Object.values(l).flat().sort(),description:`Icon name from the registry`},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`],description:`Icon size token step`},weight:{control:`select`,options:[`regular`,`fill`],description:`Phosphor icon weight variant`},badge:{control:`text`,description:`Empty = none. "dot" = dot indicator. Number = numeric chip (>99 shows "99+").`},label:{control:`text`,description:`Accessible label. Empty = decorative (aria-hidden). Provided = semantic (role="img" + aria-label).`}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args;return`<mms-icon ${[`name="${n.name}"`,`size="${n.size}"`,n.weight===`regular`?``:`weight="${n.weight}"`,n.badge?`badge="${n.badge}"`:``,n.label?`label="${n.label}"`:``].filter(Boolean).join(` `)}></mms-icon>`},language:`html`}}},render:e=>r`
    <style>${w}</style>
    <div style="
      min-height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem 2rem;
      color: inherit;
    ">
      <mms-icon
        name="${e.name}"
        size="${e.size}"
        weight="${e.weight}"
        badge="${e.badge}"
        label="${e.label}"
      ></mms-icon>
    </div>
  `},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <style>\${TOKEN_CSS}</style>
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Iconography</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 0.5rem;">
        1,458 icons from <strong>Phosphor Icons</strong> (MIT licence). Full library across 18 categories — covers the complete UI surface of government service delivery. Regular and Fill weights.
      </p>
      <p style="\${t.caption} opacity: 0.65; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        All icons render via <code style="\${t.monoSm}">&lt;mms-icon&gt;</code> and fill with <code style="\${t.monoSm}">fill: currentColor</code>, making them automatically theme-responsive in both light and dark mode.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Library rationale -->
      <h2 style="\${t.h2}">Library selection rationale</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.25rem;">
        Phosphor was selected after evaluating the four libraries most commonly considered for design systems at this scale.
      </p>
      <div style="overflow-x: auto; margin-bottom: 1.25rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Library</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Licence</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Count</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Verdict</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; font-weight: 600;">Phosphor Icons</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">MIT</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">1,512</td>
              <td style="padding: 0.5rem 0.75rem; color: #15803d; font-weight: 600;">Selected</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; font-weight: 600;">MUI / Material Icons</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">Apache 2.0</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">2,100+</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">Not selected</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; font-weight: 600;">Font Awesome</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">Free tier / Pro paid</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">2,000+ free</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">Not selected</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; font-weight: 600;">Heroicons</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">MIT</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">292</td>
              <td style="padding: 0.5rem 0.75rem; opacity: 0.65;">Not selected</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        <div style="padding: 0.875rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="\${t.caption} font-weight: 600; margin-bottom: 0.2rem;">Why not MUI / Material Icons?</p>
          <p style="\${t.caption} opacity: 0.75; margin: 0;">Material Icons are Google's icon set, distributed via Google Fonts CDN. Government networks frequently restrict Google CDN access (DISA STIGs, agency firewall policies). Beyond the network dependency, the Material aesthetic is inseparable from Google's design language — adopting it imposes a visual identity that conflicts with client branding requirements. MUI's icon package also bundles React components as the primary delivery mechanism, which creates a framework dependency incompatible with this platform's framework-agnostic Lit web component architecture.</p>
        </div>
        <div style="padding: 0.875rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="\${t.caption} font-weight: 600; margin-bottom: 0.2rem;">Why not Font Awesome?</p>
          <p style="\${t.caption} opacity: 0.75; margin: 0;">The full library requires a paid Pro licence. The free tier covers common icons but creates a two-tier system where some icons are unavailable without a subscription — an unreliable foundation for a governed platform. Font Awesome's primary delivery mechanism is also icon fonts, which have known accessibility issues (screen readers can misread private-use Unicode codepoints) and require a CDN or self-hosted font file rather than inline SVG.</p>
        </div>
        <div style="padding: 0.875rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="\${t.caption} font-weight: 600; margin-bottom: 0.2rem;">Why not Heroicons?</p>
          <p style="\${t.caption} opacity: 0.75; margin: 0;">Only 292 icons — insufficient coverage for a full government service delivery UI surface. Heroicons is designed for Tailwind UI and is practical for small product teams; at platform scale it creates gaps that force per-project workarounds.</p>
        </div>
        <div style="padding: 0.875rem 1rem; background: rgba(56,108,247,0.06); border-left: 3px solid #386CF7; border-radius: 0 6px 6px 0;">
          <p style="\${t.caption} font-weight: 600; margin-bottom: 0.2rem;">Why Phosphor?</p>
          <p style="\${t.caption} opacity: 0.75; margin: 0;">MIT licence with no external dependencies — safe for all government client engagements, bundleable offline, no CDN required. 1,512 icons across 18 categories provides full UI coverage without gaps. The <code style="\${t.monoSm}">@phosphor-icons/core</code> package exports raw SVG path data with no framework dependency, making it compatible with the platform's Lit web component core and all distribution targets (React binding, AEM clientlib, headless CSS). The Regular / Fill weight pair maps directly to the default / active state pattern used across navigation, toggles, and selection controls.</p>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- WCAG callout -->
      <div style="background: rgba(56,108,247,0.06); border-left: 3px solid #386CF7; border-radius: 0 6px 6px 0; padding: 1rem 1.25rem; margin-bottom: 2rem; max-width: \${PROSE_MAX};">
        <p style="\${t.bodySm} font-weight: 600; margin-bottom: 0.35rem;">Decorative vs. Semantic icons — accessibility requirement</p>
        <p style="\${t.caption} opacity: 0.85; margin-bottom: 0.35rem;">
          <strong>Decorative</strong> (default) — icon conveys no meaning on its own; leave <code style="\${t.monoSm}">label</code> empty. Renders with <code style="\${t.monoSm}">aria-hidden="true"</code>. Screen readers skip it.
        </p>
        <p style="\${t.caption} opacity: 0.85; margin: 0;">
          <strong>Semantic</strong> — icon is the only affordance (e.g., icon-only button). Provide a <code style="\${t.monoSm}">label</code> prop. Renders with <code style="\${t.monoSm}">role="img" aria-label="..."</code>. Section 508 / ADA Title II requirement.
        </p>
      </div>

      <!-- Size token table -->
      <h2 style="\${t.h2}">Size tokens</h2>
      <div style="overflow-x: auto; margin-bottom: 2rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Value</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Step</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>\${iconTokens.map(tokenRow)}</tbody>
        </table>
      </div>

      <!-- Size scale preview -->
      <h2 style="\${t.h2}">Size scale</h2>
      <div style="display: flex; align-items: flex-end; gap: 2.5rem; padding: 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 2rem;">
        \${(['sm', 'md', 'lg', 'xl'] as const).map(size => html\`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
            <mms-icon name="house" size="\${size}"></mms-icon>
            <div style="\${t.monoSm} opacity: 0.65; font-size: 0.75rem;">\${size}</div>
            <div style="\${t.caption} opacity: 0.5; font-size: 0.7rem;">\${iconTokens.find(tk => tk.token === \`--icon-size-\${size}\`)?.value}</div>
          </div>
        \`)}
      </div>

      <!-- Weight preview -->
      <h2 style="\${t.h2}">Weight variants</h2>
      <div style="display: flex; align-items: flex-end; gap: 2.5rem; padding: 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 2rem;">
        \${(['regular', 'fill'] as const).map(weight => html\`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
            <mms-icon name="house" size="lg" weight="\${weight}"></mms-icon>
            <div style="\${t.caption} opacity: 0.65;">\${weight}</div>
          </div>
        \`)}
      </div>

      <!-- Directional icons -->
      <h2 style="\${t.h2}">Directional icons</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Directional icons (arrows, carets, chevrons) have explicit variants for each direction. Use the appropriate variant directly — <code style="\${t.monoSm}">arrow-left</code>, <code style="\${t.monoSm}">caret-down</code>, etc.
      </p>
      <div style="display: flex; align-items: center; gap: 2.5rem; padding: 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 0.75rem;">
        \${(['caret-right', 'caret-down', 'caret-left', 'caret-up'] as const).map(name => html\`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
            <mms-icon name="\${name}" size="lg"></mms-icon>
            <div style="\${t.monoSm} opacity: 0.65; font-size: 0.75rem;">\${name}</div>
          </div>
        \`)}
      </div>
      <p style="\${t.caption} opacity: 0.55; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        This approach matches industry convention (Phosphor, Heroicons, Material) and simplifies component APIs — no direction prop threading required.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Badge preview -->
      <h2 style="\${t.h2}">Badge variants</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        The <code style="\${t.monoSm}">badge</code> prop overlays a notification indicator on the icon. Use <code style="\${t.monoSm}">badge="dot"</code> for unread presence, or a number for counts. Values above 99 display as <code style="\${t.monoSm}">99+</code>.
      </p>
      <div style="display: flex; align-items: center; gap: 2.5rem; padding: 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 2rem;">
        \${([{
    badge: '',
    label: 'none'
  }, {
    badge: 'dot',
    label: 'badge="dot"'
  }, {
    badge: '5',
    label: 'badge="5"'
  }, {
    badge: '99',
    label: 'badge="99"'
  }, {
    badge: '100',
    label: 'badge="100"'
  }] as const).map(({
    badge,
    label
  }) => html\`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem; padding: 0 0.5rem;">
            <mms-icon name="bell" size="lg" badge="\${badge}"></mms-icon>
            <div style="\${t.monoSm} opacity: 0.65; font-size: 0.7rem; text-align: center;">\${label}</div>
          </div>
        \`)}
      </div>

    </div>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Gallery',
  render: () => html\`
    <style>\${TOKEN_CSS}</style>
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h2 style="\${t.h2}">Icon library — 1,512 icons</h2>
      <mms-icon-gallery></mms-icon-gallery>
    </div>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    name: 'house',
    size: 'lg',
    weight: 'regular',
    badge: '',
    label: ''
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(iconCategories).flat().sort(),
      description: 'Icon name from the registry'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Icon size token step'
    },
    weight: {
      control: 'select',
      options: ['regular', 'fill'],
      description: 'Phosphor icon weight variant'
    },
    badge: {
      control: 'text',
      description: 'Empty = none. "dot" = dot indicator. Number = numeric chip (>99 shows "99+").'
    },
    label: {
      control: 'text',
      description: 'Accessible label. Empty = decorative (aria-hidden). Provided = semantic (role="img" + aria-label).'
    }
  },
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string>;
        }) => {
          const a = ctx.args;
          const attrs = [\`name="\${a.name}"\`, \`size="\${a.size}"\`, a.weight !== 'regular' ? \`weight="\${a.weight}"\` : '', a.badge ? \`badge="\${a.badge}"\` : '', a.label ? \`label="\${a.label}"\` : ''].filter(Boolean).join(' ');
          return \`<mms-icon \${attrs}></mms-icon>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    name: string;
    size: string;
    weight: string;
    badge: string;
    label: string;
  }) => html\`
    <style>\${TOKEN_CSS}</style>
    <div style="
      min-height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem 2rem;
      color: inherit;
    ">
      <mms-icon
        name="\${args.name}"
        size="\${args.size}"
        weight="\${args.weight}"
        badge="\${args.badge}"
        label="\${args.label}"
      ></mms-icon>
    </div>
  \`
}`,...O.parameters?.docs?.source}}},k=[`Overview`,`Gallery`,`PlaygroundStory`]}));A();export{D as Gallery,E as Overview,O as PlaygroundStory,k as __namedExportsOrder,y as default,A as n,v as t};