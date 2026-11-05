import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{s as n,t as r}from"./lit-B0BZwaT1.js";import{n as i,r as a,t as o}from"./iframe-CcinUa1O.js";import{t as s}from"./mms-card.component-Ae9XIj4r.js";import{a as c,c as l,d as u,i as d,n as f,o as p,r as m,u as h}from"./doc-styles-DkvR_Qyb.js";var g=t({DesigningInFigma:()=>w,Overview:()=>S,PlaygroundStory:()=>T,TypographicFramework:()=>C,__namedExportsOrder:()=>E,default:()=>_}),_,v,y,b,x,S,C,w,T,E,D=e((()=>{r(),s(),l(),a(),_={title:`Foundations/Typography`,tags:[`!autodocs`]},v={display:[{name:`display-lg`,size:`3.5rem`,px:`56px`,lineHeight:`1.1`,usage:`Hero taglines, splash screens`},{name:`display-md`,size:`2.75rem`,px:`44px`,lineHeight:`1.15`,usage:`Feature callouts, section heroes`},{name:`display-sm`,size:`2.25rem`,px:`36px`,lineHeight:`1.2`,usage:`Secondary hero text, card heroes`}],heading:[{name:`heading-1`,size:`2.5rem`,px:`40px`,lineHeight:`1.2`,html:`h1`,usage:`Page title`},{name:`heading-2`,size:`2rem`,px:`32px`,lineHeight:`1.25`,html:`h2`,usage:`Major section`},{name:`heading-3`,size:`1.5rem`,px:`24px`,lineHeight:`1.3`,html:`h3`,usage:`Subsection`},{name:`heading-4`,size:`1.25rem`,px:`20px`,lineHeight:`1.35`,html:`h4`,usage:`Card/panel title`},{name:`heading-5`,size:`1.125rem`,px:`18px`,lineHeight:`1.4`,html:`h5`,usage:`Minor heading`},{name:`heading-6`,size:`1rem`,px:`16px`,lineHeight:`1.45`,html:`h6`,usage:`Smallest heading`}],body:[{name:`body-lg`,size:`1.125rem`,px:`18px`,lineHeight:`1.5`,usage:`Lead paragraphs, emphasis`},{name:`body-md`,size:`1rem`,px:`16px`,lineHeight:`1.5`,usage:`Default body text`},{name:`body-sm`,size:`0.875rem`,px:`14px`,lineHeight:`1.5`,usage:`Secondary text, metadata`}],ui:[{name:`ui-label-lg`,size:`1.125rem`,px:`18px`,lineHeight:`1.4`,usage:`Prominent labels, large controls`},{name:`ui-label-md`,size:`1rem`,px:`16px`,lineHeight:`1.4`,usage:`Accessibility-first labels, government default`},{name:`ui-label-sm`,size:`0.875rem`,px:`14px`,lineHeight:`1.4`,usage:`Standard UI density labels; dense tables`},{name:`ui-caption`,size:`0.75rem`,px:`12px`,lineHeight:`1.4`,usage:`Timestamps, helper text, fine print`},{name:`ui-overline`,size:`0.75rem`,px:`12px`,lineHeight:`1.4`,usage:`All caps — category tags, section labels`}],tabular:[{name:`tabular-lg`,size:`1.125rem`,px:`18px`,lineHeight:`1.6`,usage:`Large tabular data, confirmation numbers`},{name:`tabular-md`,size:`1rem`,px:`16px`,lineHeight:`1.6`,usage:`Default data tables, dollar amounts`},{name:`tabular-sm`,size:`0.875rem`,px:`14px`,lineHeight:`1.6`,usage:`Compact tables, reference codes`}]},y=[{name:`--font-weight-regular`,value:`400`,usage:`Default body text weight`},{name:`--font-weight-medium`,value:`500`,usage:`Semi-emphasis, labels, subheadings`},{name:`--font-weight-bold`,value:`700`,usage:`Strong emphasis, headings`}],b=[{name:`--text-measure-narrow`,value:`45ch`,usage:`Captions, sidebars, constrained layouts`},{name:`--text-measure-prose`,value:`65ch`,usage:`Optimal for running text (Bringhurst 45–75ch)`},{name:`--text-measure-wide`,value:`80ch`,usage:`Code blocks, tables, technical content`}],x=(e,t,r,i,a)=>n`
  <tr>
    <td style="${c.td} ${u.monoSm} white-space: nowrap;">${e}</td>
    <td style="${c.td} ${u.monoSm} ${c.muted} white-space: nowrap;">${t}</td>
    ${r===null?``:n`<td style="${c.td} ${u.monoSm} ${c.muted} white-space: nowrap;">${r}</td>`}
    ${a?n`<td style="${c.td} ${u.monoSm} ${c.muted} white-space: nowrap;">${a}</td>`:``}
    <td style="${c.td} ${c.muted}">${i}</td>
  </tr>
`,S={name:`Overview`,render:()=>n`
    <div data-theme=${m} data-mode=${p()} style=${f}>

      <!-- Header -->
      <h1 style="${u.h1}">Typography</h1>
      <p style="${u.body} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        The typography system defines how text appears across the platform — sizes, weights, line heights, and font families. The MMS Design System Platform adopts a <strong>two-layer architecture</strong>: structural tokens define the framework, brand sheets fill in the fonts.
      </p>

      <hr style="${c.divider}" />

      <!-- Two-layer model -->
      <h2 style="${u.h2}">Two-layer architecture</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: ${h.content}; margin-bottom: ${h.subsection};">
        <div style="${c.panel}">
          <h3 style="${u.h3}">Layer 1 — structural (fixed)</h3>
          <p style="${u.bodySm} ${c.muted} margin-bottom: ${h.content};">
            Defines the typographic <em>framework</em> — scale steps, line heights, weights, measure constraints. These are UX decisions, not brand decisions.
          </p>
          <ul style="${u.caption} ${c.muted} margin: 0; padding-left: var(--spacing-md2);">
            <li>Type scale: display, heading 1–6, body, UI</li>
            <li>Line heights: none → loose</li>
            <li>Font weights: light → bold</li>
            <li>Measure: prose max-width (65ch)</li>
          </ul>
        </div>
        <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block;">
          <div slot="body-content">
          <h3 style="${u.h3}">Layer 2 — brand (per client)</h3>
          <p style="${u.bodySm} ${c.muted} margin-bottom: ${h.content};">
            Fills the font family <em>slots</em> with client-specific typefaces. Each engagement authors a theme file that satisfies the structural contract.
          </p>
          <ul style="${u.caption} ${c.muted} margin: 0; padding-left: var(--spacing-md2);">
            <li><code style="${u.monoSm}">--font-family-heading</code> — headings, display text, titles</li>
            <li><code style="${u.monoSm}">--font-family-body</code> — body text, UI labels, captions</li>
            <li><code style="${u.monoSm}">--font-family-tabular</code> — data tables, numeric alignment, reference numbers</li>
          </ul>
          </div>
        </mms-card>
      </div>

      <hr style="${c.divider}" />

      <!-- Font family slots -->
      <h2 style="${u.h2}">Font family slots</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        Three slots that brand sheets fill. Components reference these tokens — never hardcoded font names. The table below shows two example themes to illustrate how different engagements satisfy the same structural contract.
      </p>

      <div style="overflow-x: auto; margin-bottom: ${h.subsection};">
        <table style="${c.table}">
          <thead>
            <tr>
              <th style="${c.th}">Token</th>
              <th style="${c.th}">Purpose</th>
              <th style="${c.th}">${o.maximus}</th>
              <th style="${c.th}">${o[`fed-ves`]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="${c.td} ${u.monoSm}">--font-family-heading</td>
              <td style="${c.td} ${c.muted}">Headings, display text</td>
              <td style="${c.td}">Avenir Next</td>
              <td style="${c.td}">Source Sans Pro</td>
            </tr>
            <tr>
              <td style="${c.td} ${u.monoSm}">--font-family-body</td>
              <td style="${c.td} ${c.muted}">Body text, UI labels</td>
              <td style="${c.td}">Avenir Next</td>
              <td style="${c.td}">Source Sans Pro</td>
            </tr>
            <tr>
              <td style="${c.td} ${u.monoSm}">--font-family-tabular</td>
              <td style="${c.td} ${c.muted}">Data tables, numeric alignment</td>
              <td style="${c.td}">System mono stack</td>
              <td style="${c.td}">Roboto Mono</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style="${c.divider}" />

      <!-- Why self-host -->
      <h2 style="${u.h2}">Why self-host fonts?</h2>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${h.subsection};">
        <div slot="body-content">
          <p style="${u.bodySm}">
            Government networks frequently block external CDNs (Google Fonts, Adobe Fonts CDN). All fonts are bundled locally in <code style="${u.monoSm}">src/assets/fonts/</code> to ensure they load in DISA STIG-compliant, agency-firewalled, and air-gapped environments.
          </p>
        </div>
      </mms-card>

      <hr style="${c.divider}" />

      <!-- Usage -->
      <h2 style="${u.h2}">Usage</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        Each theme is a standalone CSS file that includes <code style="${u.monoSm}">@font-face</code> declarations and CSS custom properties. Import once at your app's entry point — fonts load automatically.
      </p>

      <div style="${c.panel} margin-bottom: ${h.content};">
        <p style="${u.bodySm} ${c.muted} margin-bottom: ${h.label};">Install the theme package:</p>
        <code style="${u.monoSm} ${c.codeBlockSize} display: block; padding: var(--spacing-sm1) var(--spacing-sm2); background: var(--color-surface-raised); border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-sm);">npm install @mms/theme-fed-ves</code>
      </div>

      <div style="${c.panel} margin-bottom: ${h.content};">
        <p style="${u.bodySm} ${c.muted} margin-bottom: ${h.label};">Import in your app entry (e.g., main.tsx, App.tsx):</p>
        <code style="${u.monoSm} ${c.codeBlockSize} display: block; padding: var(--spacing-sm1) var(--spacing-sm2); background: var(--color-surface-raised); border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-sm);">import '@mms/theme-fed-ves/index.css';</code>
      </div>

      <div style="${c.panel} margin-bottom: ${h.content};">
        <p style="${u.bodySm} ${c.muted} margin-bottom: ${h.label};">Use CSS custom properties in your styles:</p>
        <pre style="${c.pre} margin: 0; white-space: pre-wrap;">h1 { font-family: var(--font-family-heading); }
p  { font-family: var(--font-family-body); }
td { font-family: var(--font-family-tabular); }</pre>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${h.subsection};">
        <div slot="body-content">
          <p style="${u.bodySm}"><strong>Available themes:</strong> <code style="${u.monoSm}">@mms/theme-maximus</code>, <code style="${u.monoSm}">@mms/theme-fed-ves</code>, <code style="${u.monoSm}">@mms/theme-system</code> (OS native fonts, no package needed)</p>
        </div>
      </mms-card>

      <hr style="${c.divider}" />

      <!-- Accessibility -->
      <h2 style="${u.h2}">Accessibility requirements</h2>
      <ul style="${u.bodySm} ${c.muted} padding-left: var(--spacing-lg1); margin: 0 0 ${h.subsection};">
        <li style="margin-bottom: ${h.label};"><strong>Minimum body size:</strong> 16px (1rem). WCAG SC 1.4.4 — text must scale to 200% without loss.</li>
        <li style="margin-bottom: ${h.label};"><strong>Minimum auxiliary size:</strong> 14px (0.875rem). Captions and labels only — never running prose.</li>
        <li style="margin-bottom: ${h.label};"><strong>Line height:</strong> ≥1.5 for body text. WCAG SC 1.4.12 — text spacing adjustability.</li>
        <li style="margin-bottom: ${h.label};"><strong>Line length:</strong> 45–75 characters per line. 65ch optimal (Bringhurst).</li>
        <li><strong>Units:</strong> rem for sizes (respects browser zoom). Unitless for line-height (scales proportionally).</li>
      </ul>

    </div>
  `},C={name:`Typographic Framework`,render:()=>n`
    <div data-theme=${m} data-mode=${p()} style=${f}>

      <h1 style="${u.h1}">Typographic Framework</h1>
      <p style="${u.body} ${c.muted} max-width: ${d}; margin-bottom: ${h.subsection};">
        The complete type scale, weights, line heights, and measure constraints. All values are structural — they define the framework that brand fonts fill.
      </p>

      <hr style="${c.divider}" />

      <!-- Type scale table -->
      <h2 style="${u.h2}">Type scale</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        Line heights are baked into each type level — no standalone tokens. This guarantees consistent vertical rhythm without additional decisions.
      </p>

      <!-- Display -->
      <h3 style="${u.h3}">Display — hero/marketing</h3>
      <div style="overflow-x: auto; margin-bottom: ${h.subsection};">
        <table style="${c.table}">
          <thead>
            <tr>
              <th style="${c.th}">Token</th>
              <th style="${c.th}">rem</th>
              <th style="${c.th}">px</th>
              <th style="${c.th}">Line-height</th>
              <th style="${c.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${v.display.map(e=>x(`--text-${e.name}`,e.size,e.px,e.usage,e.lineHeight))}
          </tbody>
        </table>
      </div>

      <!-- Heading -->
      <h3 style="${u.h3}">Heading — semantic (h1–h6)</h3>
      <div style="overflow-x: auto; margin-bottom: ${h.content};">
        <table style="${c.table}">
          <thead>
            <tr>
              <th style="${c.th}">Token</th>
              <th style="${c.th}">rem</th>
              <th style="${c.th}">px</th>
              <th style="${c.th}">Line-height</th>
              <th style="${c.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${v.heading.map(e=>x(`--text-${e.name}`,e.size,e.px,`${e.usage} (${e.html})`,e.lineHeight))}
          </tbody>
        </table>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${h.subsection};">
        <div slot="body-content">
          <p style="${u.bodySm}"><strong>Content guidance:</strong> Most pages need only h1–h4. Avoid nesting content beyond four heading levels — deeper hierarchy usually signals a need to restructure the page or break content into separate sections.</p>
        </div>
      </mms-card>

      <!-- Body -->
      <h3 style="${u.h3}">Body — running prose</h3>
      <div style="overflow-x: auto; margin-bottom: ${h.subsection};">
        <table style="${c.table}">
          <thead>
            <tr>
              <th style="${c.th}">Token</th>
              <th style="${c.th}">rem</th>
              <th style="${c.th}">px</th>
              <th style="${c.th}">Line-height</th>
              <th style="${c.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${v.body.map(e=>x(`--text-${e.name}`,e.size,e.px,e.usage,e.lineHeight))}
          </tbody>
        </table>
      </div>

      <!-- UI -->
      <h3 style="${u.h3}">UI — interface elements</h3>
      <div style="overflow-x: auto; margin-bottom: ${h.content};">
        <table style="${c.table}">
          <thead>
            <tr>
              <th style="${c.th}">Token</th>
              <th style="${c.th}">rem</th>
              <th style="${c.th}">px</th>
              <th style="${c.th}">Line-height</th>
              <th style="${c.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${v.ui.map(e=>x(`--text-${e.name}`,e.size,e.px,e.usage,e.lineHeight))}
          </tbody>
        </table>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${h.subsection};">
        <div slot="body-content">
          <p style="${u.bodySm}"><strong>Corrected token names.</strong> This table previously listed <code style="${u.monoSm}">--text-label-lg</code> (16px), <code style="${u.monoSm}">--text-label</code> (14px), <code style="${u.monoSm}">--text-caption</code> and <code style="${u.monoSm}">--text-overline</code>. None of those exist in the token files. The real names carry a <code style="${u.monoSm}">ui-</code> prefix, and the 16px and 14px rows are <code style="${u.monoSm}">ui-label-md</code> and <code style="${u.monoSm}">ui-label-sm</code>; <code style="${u.monoSm}">ui-label-lg</code> is a separate 18px size. Each token is set per property, for example <code style="${u.monoSm}">--text-ui-label-sm-size</code> and <code style="${u.monoSm}">--type-ui-label-sm-weight</code>.</p>
        </div>
      </mms-card>

      <!-- Tabular -->
      <h3 style="${u.h3}">Tabular — fixed-width data</h3>
      <div style="overflow-x: auto; margin-bottom: ${h.content};">
        <table style="${c.table}">
          <thead>
            <tr>
              <th style="${c.th}">Token</th>
              <th style="${c.th}">rem</th>
              <th style="${c.th}">px</th>
              <th style="${c.th}">Line-height</th>
              <th style="${c.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${v.tabular.map(e=>x(`--text-${e.name}`,e.size,e.px,e.usage,e.lineHeight))}
          </tbody>
        </table>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${h.subsection};">
        <div slot="body-content">
          <p style="${u.bodySm}"><strong>Why tabular mirrors body sizes:</strong> Tabular text (data tables, confirmation numbers, dollar amounts) typically appears alongside body text. Matching sizes avoids visual jarring when monospace and proportional fonts sit together. <strong>Line-height 1.6</strong> (vs 1.5 for body) — monospace text benefits from more vertical breathing room in data-dense contexts.</p>
        </div>
      </mms-card>

      <hr style="${c.divider}" />

      <!-- Visual specimen -->
      <h2 style="${u.h2}">Visual specimen</h2>
      <div style="${c.panel} margin-bottom: ${h.subsection};">

        <div style="margin-bottom: ${h.subsectionTop};">
          <span style="${u.monoSm} color: var(--color-neutral-11);">display-lg</span>
          <p style="font-size: 3.5rem; line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; margin: var(--spacing-xs2) 0 0;">Moving people forward</p>
        </div>

        <div style="margin-bottom: ${h.subsectionTop};">
          <span style="${u.monoSm} color: var(--color-neutral-11);">heading-1</span>
          <p style="font-size: 2.5rem; line-height: 1.2; font-weight: 700; letter-spacing: -0.01em; margin: var(--spacing-xs2) 0 0;">Page Title</p>
        </div>

        <div style="margin-bottom: ${h.subsectionTop};">
          <span style="${u.monoSm} color: var(--color-neutral-11);">heading-2</span>
          <p style="font-size: 2rem; line-height: 1.25; font-weight: 700; margin: var(--spacing-xs2) 0 0;">Section Heading</p>
        </div>

        <div style="margin-bottom: ${h.subsectionTop};">
          <span style="${u.monoSm} color: var(--color-neutral-11);">heading-3</span>
          <p style="font-size: 1.5rem; line-height: 1.3; font-weight: 700; margin: var(--spacing-xs2) 0 0;">Subsection</p>
        </div>

        <div style="margin-bottom: ${h.subsectionTop};">
          <span style="${u.monoSm} color: var(--color-neutral-11);">body-lg</span>
          <p style="font-size: 1.125rem; line-height: 1.6; margin: var(--spacing-xs2) 0 0;">Lead paragraph text for introductions and emphasis. Slightly larger than default body.</p>
        </div>

        <div style="margin-bottom: ${h.subsectionTop};">
          <span style="${u.monoSm} color: var(--color-neutral-11);">body-md (default)</span>
          <p style="font-size: 1rem; line-height: 1.6; margin: var(--spacing-xs2) 0 0;">Default body text for running prose. This is the workhorse of the type system — most content uses this size.</p>
        </div>

        <div style="margin-bottom: ${h.subsectionTop};">
          <span style="${u.monoSm} color: var(--color-neutral-11);">body-sm</span>
          <p style="font-size: 0.875rem; line-height: 1.5; margin: var(--spacing-xs2) 0 0;">Secondary text, metadata, and supporting information.</p>
        </div>

        <div style="margin-bottom: ${h.subsectionTop};">
          <span style="${u.monoSm} color: var(--color-neutral-11);">caption</span>
          <p style="font-size: 0.75rem; line-height: 1.4; margin: var(--spacing-xs2) 0 0;">Timestamps, helper text, fine print — smallest readable size.</p>
        </div>

        <div>
          <span style="${u.monoSm} color: var(--color-neutral-11);">tabular-md</span>
          <p style="font-family: var(--font-family-tabular); font-size: 1rem; line-height: 1.6; margin: var(--spacing-xs2) 0 0;">Confirmation #: 1234-5678-9012 &nbsp;|&nbsp; SSN: ***-**-4567 &nbsp;|&nbsp; $12,345.67</p>
        </div>

      </div>

      <hr style="${c.divider}" />

      <!-- Font weights -->
      <h2 style="${u.h2}">Font weights</h2>
      <div style="overflow-x: auto; margin-bottom: ${h.content};">
        <table style="${c.table}">
          <thead>
            <tr>
              <th style="${c.th}">Token</th>
              <th style="${c.th}">Value</th>
              <th style="${c.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${y.map(e=>x(e.name,e.value,null,e.usage))}
          </tbody>
        </table>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${h.content};">
        <div slot="body-content">
          <p style="${u.bodySm}"><strong>Why no light (300)?</strong> Light weight reduces readability for low vision users and is rarely needed in government UI contexts. Three weights provide sufficient hierarchy without accessibility risk.</p>
        </div>
      </mms-card>

      <div style="${c.panel} display: flex; gap: ${h.subsection}; margin-bottom: ${h.subsection};">
        <div style="text-align: center;">
          <p style="font-size: 1.5rem; font-weight: 400; margin: 0 0 ${h.label};">Regular</p>
          <span style="${u.monoSm} ${c.muted}">400</span>
        </div>
        <div style="text-align: center;">
          <p style="font-size: 1.5rem; font-weight: 500; margin: 0 0 ${h.label};">Medium</p>
          <span style="${u.monoSm} ${c.muted}">500</span>
        </div>
        <div style="text-align: center;">
          <p style="font-size: 1.5rem; font-weight: 700; margin: 0 0 ${h.label};">Bold</p>
          <span style="${u.monoSm} ${c.muted}">700</span>
        </div>
      </div>

      <hr style="${c.divider}" />

      <!-- Measure -->
      <h2 style="${u.h2}">Measure (line length)</h2>
      <div style="overflow-x: auto; margin-bottom: ${h.content};">
        <table style="${c.table}">
          <thead>
            <tr>
              <th style="${c.th}">Token</th>
              <th style="${c.th}">Value</th>
              <th style="${c.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${b.map(e=>x(e.name,e.value,null,e.usage))}
          </tbody>
        </table>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${h.subsection};">
        <div slot="body-content">
          <p style="${u.bodySm}">
            <strong>Why 65ch?</strong> Bringhurst's <em>Elements of Typographic Style</em> recommends 45–75 characters per line for comfortable reading. 65ch sits at the optimal midpoint and matches Tailwind's <code style="${u.monoSm}">max-w-prose</code>.
          </p>
        </div>
      </mms-card>

      <hr style="${c.divider}" />

      <!-- Responsive scaling -->
      <h2 style="${u.h2}">Responsive scaling</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        Headings scale fluidly between mobile and desktop using <code style="${u.monoSm}">clamp()</code>. Body text remains fixed — only headings need responsive adjustment.
      </p>

      <div style="overflow-x: auto; margin-bottom: ${h.content};">
        <table style="${c.table}">
          <thead>
            <tr>
              <th style="${c.th}">Token</th>
              <th style="${c.th}">Mobile (375px)</th>
              <th style="${c.th}">Desktop (1440px)</th>
              <th style="${c.th}">clamp()</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="${c.td} ${u.monoSm}">--text-heading-1</td>
              <td style="${c.td} ${c.muted}">32px</td>
              <td style="${c.td} ${c.muted}">40px</td>
              <td style="${c.td} ${u.monoSm} ${c.muted}">clamp(2rem, 1.5rem + 2vw, 2.5rem)</td>
            </tr>
            <tr>
              <td style="${c.td} ${u.monoSm}">--text-heading-2</td>
              <td style="${c.td} ${c.muted}">24px</td>
              <td style="${c.td} ${c.muted}">32px</td>
              <td style="${c.td} ${u.monoSm} ${c.muted}">clamp(1.5rem, 1.25rem + 1.25vw, 2rem)</td>
            </tr>
            <tr>
              <td style="${c.td} ${u.monoSm}">--text-heading-3</td>
              <td style="${c.td} ${c.muted}">20px</td>
              <td style="${c.td} ${c.muted}">24px</td>
              <td style="${c.td} ${u.monoSm} ${c.muted}">clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Figma note -->
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block;">
        <div slot="body-content">
          <p style="${u.bodySm}">
            Figma cannot preview <code style="${u.monoSm}">clamp()</code> interpolation. For design adoption guidance, text style setup, and variable binding — see <strong>Designing in Figma</strong>.
          </p>
        </div>
      </mms-card>

    </div>
  `},w={name:`Designing in Figma`,render:()=>n`
    <div data-theme=${m} data-mode=${p()} style=${f}>

      <h1 style="${u.h1}">Designing in Figma</h1>
      <p style="${u.body} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">Reference for creating Figma Text Styles. Headings scale between breakpoints; body and UI sizes stay fixed.</p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${h.subsection};">
        <div slot="body-content" role="note">
          <p style="${u.bodySm}"><strong>The principle:</strong> Designers apply Text Styles bound to Variables — never by typing a font size manually. Token names match between Figma and code.</p>
        </div>
      </mms-card>

      <hr style="${c.divider}" />

      <!-- Type scale table -->
      <h2 style="${u.h2}">Type scale</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">Create two Text Styles per heading level (Mobile / Desktop). Body and UI styles need only one — they stay fixed across breakpoints. Line heights are baked into each Text Style.</p>

      <div style="overflow-x: auto; margin-bottom: ${h.subsection};">
        <table style="${c.table}">
          <thead>
            <tr>
              <th style="${c.th}">Text Style</th>
              <th style="${c.th}">Mobile (375px)</th>
              <th style="${c.th}">Desktop (1440px)</th>
              <th style="${c.th}">Line-height</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" style="${c.th}">Display</td>
            </tr>
            <tr>
              <td style="${c.td}">Display LG</td>
              <td style="${c.td} ${u.monoSm}">44px</td>
              <td style="${c.td} ${u.monoSm}">56px</td>
              <td style="${c.td} ${u.monoSm}">1.1</td>
            </tr>
            <tr>
              <td style="${c.td}">Display MD</td>
              <td style="${c.td} ${u.monoSm}">36px</td>
              <td style="${c.td} ${u.monoSm}">44px</td>
              <td style="${c.td} ${u.monoSm}">1.15</td>
            </tr>
            <tr>
              <td style="${c.td}">Display SM</td>
              <td style="${c.td} ${u.monoSm}">28px</td>
              <td style="${c.td} ${u.monoSm}">36px</td>
              <td style="${c.td} ${u.monoSm}">1.2</td>
            </tr>

            <tr>
              <td colspan="4" style="${c.th}">Heading</td>
            </tr>
            <tr>
              <td style="${c.td}">Heading 1</td>
              <td style="${c.td} ${u.monoSm}">32px</td>
              <td style="${c.td} ${u.monoSm}">40px</td>
              <td style="${c.td} ${u.monoSm}">1.2</td>
            </tr>
            <tr>
              <td style="${c.td}">Heading 2</td>
              <td style="${c.td} ${u.monoSm}">24px</td>
              <td style="${c.td} ${u.monoSm}">32px</td>
              <td style="${c.td} ${u.monoSm}">1.25</td>
            </tr>
            <tr>
              <td style="${c.td}">Heading 3</td>
              <td style="${c.td} ${u.monoSm}">20px</td>
              <td style="${c.td} ${u.monoSm}">24px</td>
              <td style="${c.td} ${u.monoSm}">1.3</td>
            </tr>
            <tr>
              <td style="${c.td}">Heading 4</td>
              <td style="${c.td} ${u.monoSm}">18px</td>
              <td style="${c.td} ${u.monoSm}">20px</td>
              <td style="${c.td} ${u.monoSm}">1.35</td>
            </tr>
            <tr>
              <td style="${c.td}">Heading 5</td>
              <td style="${c.td} ${u.monoSm}">16px</td>
              <td style="${c.td} ${u.monoSm}">18px</td>
              <td style="${c.td} ${u.monoSm}">1.4</td>
            </tr>
            <tr>
              <td style="${c.td}">Heading 6</td>
              <td style="${c.td} ${u.monoSm}">14px</td>
              <td style="${c.td} ${u.monoSm}">16px</td>
              <td style="${c.td} ${u.monoSm}">1.45</td>
            </tr>

            <tr>
              <td colspan="4" style="${c.th}">Body (fixed)</td>
            </tr>
            <tr>
              <td style="${c.td}">Body LG</td>
              <td style="${c.td} ${u.monoSm}" colspan="2">18px</td>
              <td style="${c.td} ${u.monoSm}">1.5</td>
            </tr>
            <tr>
              <td style="${c.td}">Body MD</td>
              <td style="${c.td} ${u.monoSm}" colspan="2">16px</td>
              <td style="${c.td} ${u.monoSm}">1.5</td>
            </tr>
            <tr>
              <td style="${c.td}">Body SM</td>
              <td style="${c.td} ${u.monoSm}" colspan="2">14px</td>
              <td style="${c.td} ${u.monoSm}">1.5</td>
            </tr>

            <tr>
              <td colspan="4" style="${c.th}">UI (fixed)</td>
            </tr>
            <tr>
              <td style="${c.td}">Label LG</td>
              <td style="${c.td} ${u.monoSm}" colspan="2">16px</td>
              <td style="${c.td} ${u.monoSm}">1.4</td>
            </tr>
            <tr>
              <td style="${c.td}">Label</td>
              <td style="${c.td} ${u.monoSm}" colspan="2">14px</td>
              <td style="${c.td} ${u.monoSm}">1.4</td>
            </tr>
            <tr>
              <td style="${c.td}">Caption</td>
              <td style="${c.td} ${u.monoSm}" colspan="2">12px</td>
              <td style="${c.td} ${u.monoSm}">1.4</td>
            </tr>
            <tr>
              <td style="${c.td}">Overline</td>
              <td style="${c.td} ${u.monoSm}" colspan="2">12px (all caps)</td>
              <td style="${c.td} ${u.monoSm}">1.4</td>
            </tr>

            <tr>
              <td colspan="4" style="${c.th}">Tabular (fixed-width)</td>
            </tr>
            <tr>
              <td style="${c.td}">Tabular LG</td>
              <td style="${c.td} ${u.monoSm}" colspan="2">18px</td>
              <td style="${c.td} ${u.monoSm}">1.6</td>
            </tr>
            <tr>
              <td style="${c.td}">Tabular MD</td>
              <td style="${c.td} ${u.monoSm}" colspan="2">16px</td>
              <td style="${c.td} ${u.monoSm}">1.6</td>
            </tr>
            <tr>
              <td style="${c.td}">Tabular SM</td>
              <td style="${c.td} ${u.monoSm}" colspan="2">14px</td>
              <td style="${c.td} ${u.monoSm}">1.6</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style="${c.divider}" />

      <!-- Tabular rationale -->
      <h2 style="${u.h2}">Why tabular mirrors body sizes</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d}; margin-bottom: ${h.content};">
        Tabular text (data tables, confirmation numbers, dollar amounts) typically appears alongside body text. Matching sizes avoids visual jarring when monospace and proportional fonts sit together.
      </p>
      <div style="${c.panel} margin-bottom: ${h.subsection};">
        <p style="${u.caption} margin-bottom: ${h.label};"><strong>Line-height: 1.6</strong> (vs 1.5 for body)</p>
        <p style="${u.caption} ${c.muted}">
          Monospace text benefits from more vertical breathing room. Fixed-width characters in data-dense contexts (tables, forms) are easier to scan with slightly taller line-height.
        </p>
      </div>

      <hr style="${c.divider}" />

      <!-- Measure -->
      <h2 style="${u.h2}">Measure (line length)</h2>
      <p style="${u.bodySm} ${c.muted} max-width: ${d};">Constrain prose containers to ~540px (65 characters at 16px). Use a guide or max-width constraint in Figma.</p>

    </div>
  `},T={tags:[`!dev`],args:{brand:`maximus`,level:`heading-1`,weight:`regular`,measure:`prose`,responsive:!1,text:`The quick brown fox jumps over the lazy dog`},argTypes:{brand:{control:`select`,options:[...i,`system fonts`],description:`Brand theme — determines font family. "system fonts" uses native OS fonts (San Francisco on Apple, Segoe UI on Windows, Roboto on Android).`},level:{control:`select`,options:[`display-lg`,`display-md`,`display-sm`,`heading-1`,`heading-2`,`heading-3`,`heading-4`,`heading-5`,`heading-6`,`body-lg`,`body-md`,`body-sm`,`label-lg`,`label`,`caption`,`overline`,`tabular-lg`,`tabular-md`,`tabular-sm`],description:`Type scale level`},weight:{control:`select`,options:[`regular`,`medium`,`bold`],description:`Font weight — independent of type level`},measure:{control:`select`,options:[`narrow`,`prose`,`wide`],description:`Line length constraint`},responsive:{control:`boolean`,description:`Enable responsive scaling (headings only)`},text:{control:`text`,description:`Sample text to render`}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=String(n.level),i=r.startsWith(`tabular`)?`--font-family-tabular`:r.startsWith(`display`)||r.startsWith(`heading`)?`--font-family-heading`:`--font-family-body`,a=`max-width: var(--text-measure-${n.measure}); `;return`<p style="font-family: var(${i}); font-size: var(--text-${n.level}); font-weight: var(--font-weight-${n.weight}); ${a}">
  ${n.text}
</p>`},language:`html`}}},render:e=>{let t=e.brand===`system fonts`?`system`:e.brand,r=e.level.startsWith(`tabular`)?`var(--font-family-tabular)`:e.level.startsWith(`display`)||e.level.startsWith(`heading`)?`var(--font-family-heading)`:`var(--font-family-body)`,i={"display-lg":{size:`3.5rem`,lh:`1.1`,responsive:`clamp(2.75rem, 2rem + 3vw, 3.5rem)`},"display-md":{size:`2.75rem`,lh:`1.15`,responsive:`clamp(2.25rem, 1.75rem + 2vw, 2.75rem)`},"display-sm":{size:`2.25rem`,lh:`1.2`,responsive:`clamp(1.75rem, 1.5rem + 1.5vw, 2.25rem)`},"heading-1":{size:`2.5rem`,lh:`1.2`,responsive:`clamp(2rem, 1.5rem + 2vw, 2.5rem)`},"heading-2":{size:`2rem`,lh:`1.25`,responsive:`clamp(1.5rem, 1.25rem + 1.25vw, 2rem)`},"heading-3":{size:`1.5rem`,lh:`1.3`,responsive:`clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)`},"heading-4":{size:`1.25rem`,lh:`1.35`},"heading-5":{size:`1.125rem`,lh:`1.4`},"heading-6":{size:`1rem`,lh:`1.45`},"body-lg":{size:`1.125rem`,lh:`1.5`},"body-md":{size:`1rem`,lh:`1.5`},"body-sm":{size:`0.875rem`,lh:`1.5`},"label-lg":{size:`1rem`,lh:`1.4`},label:{size:`0.875rem`,lh:`1.4`},caption:{size:`0.75rem`,lh:`1.4`},overline:{size:`0.75rem`,lh:`1.4`,transform:`uppercase`},"tabular-lg":{size:`1.125rem`,lh:`1.6`},"tabular-md":{size:`1rem`,lh:`1.6`},"tabular-sm":{size:`0.875rem`,lh:`1.6`}},a={narrow:`45ch`,prose:`65ch`,wide:`80ch`},o={regular:`400`,medium:`500`,bold:`700`},s=i[e.level]||i[`body-md`],c=o[e.weight],l=a[e.measure],u=`
      font-family: ${r};
      line-height: ${s.lh};
      font-weight: ${c};
      ${s.transform?`text-transform: ${s.transform};`:``}
      letter-spacing: ${e.level===`overline`?`0.08em`:e.level.startsWith(`display`)?`-0.02em`:`0`};
      max-width: ${l};
      margin: 0;
    `;if(e.responsive&&s.responsive){let r=s.responsive.match(/clamp\(([^,]+),\s*([^,]+),\s*([^)]+)\)/),i=r?r[1].trim():s.size,a=r?r[3].trim():s.size;return n`
        <div data-theme="${t}" style="padding: 1.5rem; color: inherit;">
          <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
            <div style="flex: 0 0 auto; width: 320px; border: 1px solid; border-radius: 4px; opacity: 0.9; padding: 1rem; box-sizing: border-box;">
              <div style="font-size: 0.75rem; opacity: 0.6; margin-bottom: 0.75rem; font-family: system-ui;">
                Mobile · 320px · ${i}
              </div>
              <p style="${u} font-size: ${i};">${e.text}</p>
            </div>
            <div style="flex: 1; min-width: 400px; border: 1px solid; border-radius: 4px; opacity: 0.9; padding: 1rem; box-sizing: border-box;">
              <div style="font-size: 0.75rem; opacity: 0.6; margin-bottom: 0.75rem; font-family: system-ui;">
                Desktop · 1200px+ · ${a}
              </div>
              <p style="${u} font-size: ${a};">${e.text}</p>
            </div>
          </div>
        </div>
      `}return n`
      <div data-theme="${t}" style="padding: 2rem; color: inherit;">
        <p style="${u} font-size: ${s.size};">${e.text}</p>
      </div>
    `}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Typography</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The typography system defines how text appears across the platform — sizes, weights, line heights, and font families. The MMS Design System Platform adopts a <strong>two-layer architecture</strong>: structural tokens define the framework, brand sheets fill in the fonts.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Two-layer model -->
      <h2 style="\${t.h2}">Two-layer architecture</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Layer 1 — structural (fixed)</h3>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            Defines the typographic <em>framework</em> — scale steps, line heights, weights, measure constraints. These are UX decisions, not brand decisions.
          </p>
          <ul style="\${t.caption} \${doc.muted} margin: 0; padding-left: var(--spacing-md2);">
            <li>Type scale: display, heading 1–6, body, UI</li>
            <li>Line heights: none → loose</li>
            <li>Font weights: light → bold</li>
            <li>Measure: prose max-width (65ch)</li>
          </ul>
        </div>
        <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block;">
          <div slot="body-content">
          <h3 style="\${t.h3}">Layer 2 — brand (per client)</h3>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            Fills the font family <em>slots</em> with client-specific typefaces. Each engagement authors a theme file that satisfies the structural contract.
          </p>
          <ul style="\${t.caption} \${doc.muted} margin: 0; padding-left: var(--spacing-md2);">
            <li><code style="\${t.monoSm}">--font-family-heading</code> — headings, display text, titles</li>
            <li><code style="\${t.monoSm}">--font-family-body</code> — body text, UI labels, captions</li>
            <li><code style="\${t.monoSm}">--font-family-tabular</code> — data tables, numeric alignment, reference numbers</li>
          </ul>
          </div>
        </mms-card>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Font family slots -->
      <h2 style="\${t.h2}">Font family slots</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Three slots that brand sheets fill. Components reference these tokens — never hardcoded font names. The table below shows two example themes to illustrate how different engagements satisfy the same structural contract.
      </p>

      <div style="overflow-x: auto; margin-bottom: \${space.subsection};">
        <table style="\${doc.table}">
          <thead>
            <tr>
              <th style="\${doc.th}">Token</th>
              <th style="\${doc.th}">Purpose</th>
              <th style="\${doc.th}">\${BRAND_LABELS.maximus}</th>
              <th style="\${doc.th}">\${BRAND_LABELS['fed-ves']}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="\${doc.td} \${t.monoSm}">--font-family-heading</td>
              <td style="\${doc.td} \${doc.muted}">Headings, display text</td>
              <td style="\${doc.td}">Avenir Next</td>
              <td style="\${doc.td}">Source Sans Pro</td>
            </tr>
            <tr>
              <td style="\${doc.td} \${t.monoSm}">--font-family-body</td>
              <td style="\${doc.td} \${doc.muted}">Body text, UI labels</td>
              <td style="\${doc.td}">Avenir Next</td>
              <td style="\${doc.td}">Source Sans Pro</td>
            </tr>
            <tr>
              <td style="\${doc.td} \${t.monoSm}">--font-family-tabular</td>
              <td style="\${doc.td} \${doc.muted}">Data tables, numeric alignment</td>
              <td style="\${doc.td}">System mono stack</td>
              <td style="\${doc.td}">Roboto Mono</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Why self-host -->
      <h2 style="\${t.h2}">Why self-host fonts?</h2>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <p style="\${t.bodySm}">
            Government networks frequently block external CDNs (Google Fonts, Adobe Fonts CDN). All fonts are bundled locally in <code style="\${t.monoSm}">src/assets/fonts/</code> to ensure they load in DISA STIG-compliant, agency-firewalled, and air-gapped environments.
          </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Each theme is a standalone CSS file that includes <code style="\${t.monoSm}">@font-face</code> declarations and CSS custom properties. Import once at your app's entry point — fonts load automatically.
      </p>

      <div style="\${doc.panel} margin-bottom: \${space.content};">
        <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.label};">Install the theme package:</p>
        <code style="\${t.monoSm} \${doc.codeBlockSize} display: block; padding: var(--spacing-sm1) var(--spacing-sm2); background: var(--color-surface-raised); border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-sm);">npm install @mms/theme-fed-ves</code>
      </div>

      <div style="\${doc.panel} margin-bottom: \${space.content};">
        <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.label};">Import in your app entry (e.g., main.tsx, App.tsx):</p>
        <code style="\${t.monoSm} \${doc.codeBlockSize} display: block; padding: var(--spacing-sm1) var(--spacing-sm2); background: var(--color-surface-raised); border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-sm);">import '@mms/theme-fed-ves/index.css';</code>
      </div>

      <div style="\${doc.panel} margin-bottom: \${space.content};">
        <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.label};">Use CSS custom properties in your styles:</p>
        <pre style="\${doc.pre} margin: 0; white-space: pre-wrap;">h1 { font-family: var(--font-family-heading); }
p  { font-family: var(--font-family-body); }
td { font-family: var(--font-family-tabular); }</pre>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <p style="\${t.bodySm}"><strong>Available themes:</strong> <code style="\${t.monoSm}">@mms/theme-maximus</code>, <code style="\${t.monoSm}">@mms/theme-fed-ves</code>, <code style="\${t.monoSm}">@mms/theme-system</code> (OS native fonts, no package needed)</p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility requirements</h2>
      <ul style="\${t.bodySm} \${doc.muted} padding-left: var(--spacing-lg1); margin: 0 0 \${space.subsection};">
        <li style="margin-bottom: \${space.label};"><strong>Minimum body size:</strong> 16px (1rem). WCAG SC 1.4.4 — text must scale to 200% without loss.</li>
        <li style="margin-bottom: \${space.label};"><strong>Minimum auxiliary size:</strong> 14px (0.875rem). Captions and labels only — never running prose.</li>
        <li style="margin-bottom: \${space.label};"><strong>Line height:</strong> ≥1.5 for body text. WCAG SC 1.4.12 — text spacing adjustability.</li>
        <li style="margin-bottom: \${space.label};"><strong>Line length:</strong> 45–75 characters per line. 65ch optimal (Bringhurst).</li>
        <li><strong>Units:</strong> rem for sizes (respects browser zoom). Unitless for line-height (scales proportionally).</li>
      </ul>

    </div>
  \`
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Typographic Framework',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Typographic Framework</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The complete type scale, weights, line heights, and measure constraints. All values are structural — they define the framework that brand fonts fill.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Type scale table -->
      <h2 style="\${t.h2}">Type scale</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Line heights are baked into each type level — no standalone tokens. This guarantees consistent vertical rhythm without additional decisions.
      </p>

      <!-- Display -->
      <h3 style="\${t.h3}">Display — hero/marketing</h3>
      <div style="overflow-x: auto; margin-bottom: \${space.subsection};">
        <table style="\${doc.table}">
          <thead>
            <tr>
              <th style="\${doc.th}">Token</th>
              <th style="\${doc.th}">rem</th>
              <th style="\${doc.th}">px</th>
              <th style="\${doc.th}">Line-height</th>
              <th style="\${doc.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${typeScale.display.map(s => tokenRow(\`--text-\${s.name}\`, s.size, s.px, s.usage, s.lineHeight))}
          </tbody>
        </table>
      </div>

      <!-- Heading -->
      <h3 style="\${t.h3}">Heading — semantic (h1–h6)</h3>
      <div style="overflow-x: auto; margin-bottom: \${space.content};">
        <table style="\${doc.table}">
          <thead>
            <tr>
              <th style="\${doc.th}">Token</th>
              <th style="\${doc.th}">rem</th>
              <th style="\${doc.th}">px</th>
              <th style="\${doc.th}">Line-height</th>
              <th style="\${doc.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${typeScale.heading.map(s => tokenRow(\`--text-\${s.name}\`, s.size, s.px, \`\${s.usage} (\${s.html})\`, s.lineHeight))}
          </tbody>
        </table>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <p style="\${t.bodySm}"><strong>Content guidance:</strong> Most pages need only h1–h4. Avoid nesting content beyond four heading levels — deeper hierarchy usually signals a need to restructure the page or break content into separate sections.</p>
        </div>
      </mms-card>

      <!-- Body -->
      <h3 style="\${t.h3}">Body — running prose</h3>
      <div style="overflow-x: auto; margin-bottom: \${space.subsection};">
        <table style="\${doc.table}">
          <thead>
            <tr>
              <th style="\${doc.th}">Token</th>
              <th style="\${doc.th}">rem</th>
              <th style="\${doc.th}">px</th>
              <th style="\${doc.th}">Line-height</th>
              <th style="\${doc.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${typeScale.body.map(s => tokenRow(\`--text-\${s.name}\`, s.size, s.px, s.usage, s.lineHeight))}
          </tbody>
        </table>
      </div>

      <!-- UI -->
      <h3 style="\${t.h3}">UI — interface elements</h3>
      <div style="overflow-x: auto; margin-bottom: \${space.content};">
        <table style="\${doc.table}">
          <thead>
            <tr>
              <th style="\${doc.th}">Token</th>
              <th style="\${doc.th}">rem</th>
              <th style="\${doc.th}">px</th>
              <th style="\${doc.th}">Line-height</th>
              <th style="\${doc.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${typeScale.ui.map(s => tokenRow(\`--text-\${s.name}\`, s.size, s.px, s.usage, s.lineHeight))}
          </tbody>
        </table>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <p style="\${t.bodySm}"><strong>Corrected token names.</strong> This table previously listed <code style="\${t.monoSm}">--text-label-lg</code> (16px), <code style="\${t.monoSm}">--text-label</code> (14px), <code style="\${t.monoSm}">--text-caption</code> and <code style="\${t.monoSm}">--text-overline</code>. None of those exist in the token files. The real names carry a <code style="\${t.monoSm}">ui-</code> prefix, and the 16px and 14px rows are <code style="\${t.monoSm}">ui-label-md</code> and <code style="\${t.monoSm}">ui-label-sm</code>; <code style="\${t.monoSm}">ui-label-lg</code> is a separate 18px size. Each token is set per property, for example <code style="\${t.monoSm}">--text-ui-label-sm-size</code> and <code style="\${t.monoSm}">--type-ui-label-sm-weight</code>.</p>
        </div>
      </mms-card>

      <!-- Tabular -->
      <h3 style="\${t.h3}">Tabular — fixed-width data</h3>
      <div style="overflow-x: auto; margin-bottom: \${space.content};">
        <table style="\${doc.table}">
          <thead>
            <tr>
              <th style="\${doc.th}">Token</th>
              <th style="\${doc.th}">rem</th>
              <th style="\${doc.th}">px</th>
              <th style="\${doc.th}">Line-height</th>
              <th style="\${doc.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${typeScale.tabular.map(s => tokenRow(\`--text-\${s.name}\`, s.size, s.px, s.usage, s.lineHeight))}
          </tbody>
        </table>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <p style="\${t.bodySm}"><strong>Why tabular mirrors body sizes:</strong> Tabular text (data tables, confirmation numbers, dollar amounts) typically appears alongside body text. Matching sizes avoids visual jarring when monospace and proportional fonts sit together. <strong>Line-height 1.6</strong> (vs 1.5 for body) — monospace text benefits from more vertical breathing room in data-dense contexts.</p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Visual specimen -->
      <h2 style="\${t.h2}">Visual specimen</h2>
      <div style="\${doc.panel} margin-bottom: \${space.subsection};">

        <div style="margin-bottom: \${space.subsectionTop};">
          <span style="\${t.monoSm} color: var(--color-neutral-11);">display-lg</span>
          <p style="font-size: 3.5rem; line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; margin: var(--spacing-xs2) 0 0;">Moving people forward</p>
        </div>

        <div style="margin-bottom: \${space.subsectionTop};">
          <span style="\${t.monoSm} color: var(--color-neutral-11);">heading-1</span>
          <p style="font-size: 2.5rem; line-height: 1.2; font-weight: 700; letter-spacing: -0.01em; margin: var(--spacing-xs2) 0 0;">Page Title</p>
        </div>

        <div style="margin-bottom: \${space.subsectionTop};">
          <span style="\${t.monoSm} color: var(--color-neutral-11);">heading-2</span>
          <p style="font-size: 2rem; line-height: 1.25; font-weight: 700; margin: var(--spacing-xs2) 0 0;">Section Heading</p>
        </div>

        <div style="margin-bottom: \${space.subsectionTop};">
          <span style="\${t.monoSm} color: var(--color-neutral-11);">heading-3</span>
          <p style="font-size: 1.5rem; line-height: 1.3; font-weight: 700; margin: var(--spacing-xs2) 0 0;">Subsection</p>
        </div>

        <div style="margin-bottom: \${space.subsectionTop};">
          <span style="\${t.monoSm} color: var(--color-neutral-11);">body-lg</span>
          <p style="font-size: 1.125rem; line-height: 1.6; margin: var(--spacing-xs2) 0 0;">Lead paragraph text for introductions and emphasis. Slightly larger than default body.</p>
        </div>

        <div style="margin-bottom: \${space.subsectionTop};">
          <span style="\${t.monoSm} color: var(--color-neutral-11);">body-md (default)</span>
          <p style="font-size: 1rem; line-height: 1.6; margin: var(--spacing-xs2) 0 0;">Default body text for running prose. This is the workhorse of the type system — most content uses this size.</p>
        </div>

        <div style="margin-bottom: \${space.subsectionTop};">
          <span style="\${t.monoSm} color: var(--color-neutral-11);">body-sm</span>
          <p style="font-size: 0.875rem; line-height: 1.5; margin: var(--spacing-xs2) 0 0;">Secondary text, metadata, and supporting information.</p>
        </div>

        <div style="margin-bottom: \${space.subsectionTop};">
          <span style="\${t.monoSm} color: var(--color-neutral-11);">caption</span>
          <p style="font-size: 0.75rem; line-height: 1.4; margin: var(--spacing-xs2) 0 0;">Timestamps, helper text, fine print — smallest readable size.</p>
        </div>

        <div>
          <span style="\${t.monoSm} color: var(--color-neutral-11);">tabular-md</span>
          <p style="font-family: var(--font-family-tabular); font-size: 1rem; line-height: 1.6; margin: var(--spacing-xs2) 0 0;">Confirmation #: 1234-5678-9012 &nbsp;|&nbsp; SSN: ***-**-4567 &nbsp;|&nbsp; $12,345.67</p>
        </div>

      </div>

      <hr style="\${doc.divider}" />

      <!-- Font weights -->
      <h2 style="\${t.h2}">Font weights</h2>
      <div style="overflow-x: auto; margin-bottom: \${space.content};">
        <table style="\${doc.table}">
          <thead>
            <tr>
              <th style="\${doc.th}">Token</th>
              <th style="\${doc.th}">Value</th>
              <th style="\${doc.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${fontWeights.map(w => tokenRow(w.name, w.value, null, w.usage))}
          </tbody>
        </table>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
          <p style="\${t.bodySm}"><strong>Why no light (300)?</strong> Light weight reduces readability for low vision users and is rarely needed in government UI contexts. Three weights provide sufficient hierarchy without accessibility risk.</p>
        </div>
      </mms-card>

      <div style="\${doc.panel} display: flex; gap: \${space.subsection}; margin-bottom: \${space.subsection};">
        <div style="text-align: center;">
          <p style="font-size: 1.5rem; font-weight: 400; margin: 0 0 \${space.label};">Regular</p>
          <span style="\${t.monoSm} \${doc.muted}">400</span>
        </div>
        <div style="text-align: center;">
          <p style="font-size: 1.5rem; font-weight: 500; margin: 0 0 \${space.label};">Medium</p>
          <span style="\${t.monoSm} \${doc.muted}">500</span>
        </div>
        <div style="text-align: center;">
          <p style="font-size: 1.5rem; font-weight: 700; margin: 0 0 \${space.label};">Bold</p>
          <span style="\${t.monoSm} \${doc.muted}">700</span>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Measure -->
      <h2 style="\${t.h2}">Measure (line length)</h2>
      <div style="overflow-x: auto; margin-bottom: \${space.content};">
        <table style="\${doc.table}">
          <thead>
            <tr>
              <th style="\${doc.th}">Token</th>
              <th style="\${doc.th}">Value</th>
              <th style="\${doc.th}">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${measures.map(m => tokenRow(m.name, m.value, null, m.usage))}
          </tbody>
        </table>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <p style="\${t.bodySm}">
            <strong>Why 65ch?</strong> Bringhurst's <em>Elements of Typographic Style</em> recommends 45–75 characters per line for comfortable reading. 65ch sits at the optimal midpoint and matches Tailwind's <code style="\${t.monoSm}">max-w-prose</code>.
          </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Responsive scaling -->
      <h2 style="\${t.h2}">Responsive scaling</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Headings scale fluidly between mobile and desktop using <code style="\${t.monoSm}">clamp()</code>. Body text remains fixed — only headings need responsive adjustment.
      </p>

      <div style="overflow-x: auto; margin-bottom: \${space.content};">
        <table style="\${doc.table}">
          <thead>
            <tr>
              <th style="\${doc.th}">Token</th>
              <th style="\${doc.th}">Mobile (375px)</th>
              <th style="\${doc.th}">Desktop (1440px)</th>
              <th style="\${doc.th}">clamp()</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="\${doc.td} \${t.monoSm}">--text-heading-1</td>
              <td style="\${doc.td} \${doc.muted}">32px</td>
              <td style="\${doc.td} \${doc.muted}">40px</td>
              <td style="\${doc.td} \${t.monoSm} \${doc.muted}">clamp(2rem, 1.5rem + 2vw, 2.5rem)</td>
            </tr>
            <tr>
              <td style="\${doc.td} \${t.monoSm}">--text-heading-2</td>
              <td style="\${doc.td} \${doc.muted}">24px</td>
              <td style="\${doc.td} \${doc.muted}">32px</td>
              <td style="\${doc.td} \${t.monoSm} \${doc.muted}">clamp(1.5rem, 1.25rem + 1.25vw, 2rem)</td>
            </tr>
            <tr>
              <td style="\${doc.td} \${t.monoSm}">--text-heading-3</td>
              <td style="\${doc.td} \${doc.muted}">20px</td>
              <td style="\${doc.td} \${doc.muted}">24px</td>
              <td style="\${doc.td} \${t.monoSm} \${doc.muted}">clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Figma note -->
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block;">
        <div slot="body-content">
          <p style="\${t.bodySm}">
            Figma cannot preview <code style="\${t.monoSm}">clamp()</code> interpolation. For design adoption guidance, text style setup, and variable binding — see <strong>Designing in Figma</strong>.
          </p>
        </div>
      </mms-card>

    </div>
  \`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Designing in Figma',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Designing in Figma</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">Reference for creating Figma Text Styles. Headings scale between breakpoints; body and UI sizes stay fixed.</p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content" role="note">
          <p style="\${t.bodySm}"><strong>The principle:</strong> Designers apply Text Styles bound to Variables — never by typing a font size manually. Token names match between Figma and code.</p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Type scale table -->
      <h2 style="\${t.h2}">Type scale</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">Create two Text Styles per heading level (Mobile / Desktop). Body and UI styles need only one — they stay fixed across breakpoints. Line heights are baked into each Text Style.</p>

      <div style="overflow-x: auto; margin-bottom: \${space.subsection};">
        <table style="\${doc.table}">
          <thead>
            <tr>
              <th style="\${doc.th}">Text Style</th>
              <th style="\${doc.th}">Mobile (375px)</th>
              <th style="\${doc.th}">Desktop (1440px)</th>
              <th style="\${doc.th}">Line-height</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" style="\${doc.th}">Display</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Display LG</td>
              <td style="\${doc.td} \${t.monoSm}">44px</td>
              <td style="\${doc.td} \${t.monoSm}">56px</td>
              <td style="\${doc.td} \${t.monoSm}">1.1</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Display MD</td>
              <td style="\${doc.td} \${t.monoSm}">36px</td>
              <td style="\${doc.td} \${t.monoSm}">44px</td>
              <td style="\${doc.td} \${t.monoSm}">1.15</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Display SM</td>
              <td style="\${doc.td} \${t.monoSm}">28px</td>
              <td style="\${doc.td} \${t.monoSm}">36px</td>
              <td style="\${doc.td} \${t.monoSm}">1.2</td>
            </tr>

            <tr>
              <td colspan="4" style="\${doc.th}">Heading</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Heading 1</td>
              <td style="\${doc.td} \${t.monoSm}">32px</td>
              <td style="\${doc.td} \${t.monoSm}">40px</td>
              <td style="\${doc.td} \${t.monoSm}">1.2</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Heading 2</td>
              <td style="\${doc.td} \${t.monoSm}">24px</td>
              <td style="\${doc.td} \${t.monoSm}">32px</td>
              <td style="\${doc.td} \${t.monoSm}">1.25</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Heading 3</td>
              <td style="\${doc.td} \${t.monoSm}">20px</td>
              <td style="\${doc.td} \${t.monoSm}">24px</td>
              <td style="\${doc.td} \${t.monoSm}">1.3</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Heading 4</td>
              <td style="\${doc.td} \${t.monoSm}">18px</td>
              <td style="\${doc.td} \${t.monoSm}">20px</td>
              <td style="\${doc.td} \${t.monoSm}">1.35</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Heading 5</td>
              <td style="\${doc.td} \${t.monoSm}">16px</td>
              <td style="\${doc.td} \${t.monoSm}">18px</td>
              <td style="\${doc.td} \${t.monoSm}">1.4</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Heading 6</td>
              <td style="\${doc.td} \${t.monoSm}">14px</td>
              <td style="\${doc.td} \${t.monoSm}">16px</td>
              <td style="\${doc.td} \${t.monoSm}">1.45</td>
            </tr>

            <tr>
              <td colspan="4" style="\${doc.th}">Body (fixed)</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Body LG</td>
              <td style="\${doc.td} \${t.monoSm}" colspan="2">18px</td>
              <td style="\${doc.td} \${t.monoSm}">1.5</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Body MD</td>
              <td style="\${doc.td} \${t.monoSm}" colspan="2">16px</td>
              <td style="\${doc.td} \${t.monoSm}">1.5</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Body SM</td>
              <td style="\${doc.td} \${t.monoSm}" colspan="2">14px</td>
              <td style="\${doc.td} \${t.monoSm}">1.5</td>
            </tr>

            <tr>
              <td colspan="4" style="\${doc.th}">UI (fixed)</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Label LG</td>
              <td style="\${doc.td} \${t.monoSm}" colspan="2">16px</td>
              <td style="\${doc.td} \${t.monoSm}">1.4</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Label</td>
              <td style="\${doc.td} \${t.monoSm}" colspan="2">14px</td>
              <td style="\${doc.td} \${t.monoSm}">1.4</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Caption</td>
              <td style="\${doc.td} \${t.monoSm}" colspan="2">12px</td>
              <td style="\${doc.td} \${t.monoSm}">1.4</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Overline</td>
              <td style="\${doc.td} \${t.monoSm}" colspan="2">12px (all caps)</td>
              <td style="\${doc.td} \${t.monoSm}">1.4</td>
            </tr>

            <tr>
              <td colspan="4" style="\${doc.th}">Tabular (fixed-width)</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Tabular LG</td>
              <td style="\${doc.td} \${t.monoSm}" colspan="2">18px</td>
              <td style="\${doc.td} \${t.monoSm}">1.6</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Tabular MD</td>
              <td style="\${doc.td} \${t.monoSm}" colspan="2">16px</td>
              <td style="\${doc.td} \${t.monoSm}">1.6</td>
            </tr>
            <tr>
              <td style="\${doc.td}">Tabular SM</td>
              <td style="\${doc.td} \${t.monoSm}" colspan="2">14px</td>
              <td style="\${doc.td} \${t.monoSm}">1.6</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Tabular rationale -->
      <h2 style="\${t.h2}">Why tabular mirrors body sizes</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Tabular text (data tables, confirmation numbers, dollar amounts) typically appears alongside body text. Matching sizes avoids visual jarring when monospace and proportional fonts sit together.
      </p>
      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        <p style="\${t.caption} margin-bottom: \${space.label};"><strong>Line-height: 1.6</strong> (vs 1.5 for body)</p>
        <p style="\${t.caption} \${doc.muted}">
          Monospace text benefits from more vertical breathing room. Fixed-width characters in data-dense contexts (tables, forms) are easier to scan with slightly taller line-height.
        </p>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Measure -->
      <h2 style="\${t.h2}">Measure (line length)</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX};">Constrain prose containers to ~540px (65 characters at 16px). Use a guide or max-width constraint in Figma.</p>

    </div>
  \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    brand: 'maximus',
    level: 'heading-1',
    weight: 'regular',
    measure: 'prose',
    responsive: false,
    text: 'The quick brown fox jumps over the lazy dog'
  },
  argTypes: {
    brand: {
      control: 'select',
      options: [...BRAND_ORDER, 'system fonts'],
      description: 'Brand theme — determines font family. "system fonts" uses native OS fonts (San Francisco on Apple, Segoe UI on Windows, Roboto on Android).'
    },
    level: {
      control: 'select',
      options: ['display-lg', 'display-md', 'display-sm', 'heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5', 'heading-6', 'body-lg', 'body-md', 'body-sm', 'label-lg', 'label', 'caption', 'overline', 'tabular-lg', 'tabular-md', 'tabular-sm'],
      description: 'Type scale level'
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'bold'],
      description: 'Font weight — independent of type level'
    },
    measure: {
      control: 'select',
      options: ['narrow', 'prose', 'wide'],
      description: 'Line length constraint'
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive scaling (headings only)'
    },
    text: {
      control: 'text',
      description: 'Sample text to render'
    }
  },
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string | boolean>;
        }) => {
          const a = ctx.args;
          const level = String(a.level);
          const fontVar = level.startsWith('tabular') ? '--font-family-tabular' : level.startsWith('display') || level.startsWith('heading') ? '--font-family-heading' : '--font-family-body';
          const measureVal = \`max-width: var(--text-measure-\${a.measure}); \`;
          return \`<p style="font-family: var(\${fontVar}); font-size: var(--text-\${a.level}); font-weight: var(--font-weight-\${a.weight}); \${measureVal}">
  \${a.text}
</p>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    brand: string;
    level: string;
    weight: string;
    measure: string;
    responsive: boolean;
    text: string;
  }) => {
    // The brand selector's value is the data-theme key; only "system fonts" maps to a different theme name.
    const theme = args.brand === 'system fonts' ? 'system' : args.brand;

    // Font family via CSS vars (set by data-theme in storybook-themes.css)
    const fontFamilyVar = args.level.startsWith('tabular') ? 'var(--font-family-tabular)' : args.level.startsWith('display') || args.level.startsWith('heading') ? 'var(--font-family-heading)' : 'var(--font-family-body)';
    const sizes: Record<string, {
      size: string;
      lh: string;
      transform?: string;
      responsive?: string;
    }> = {
      'display-lg': {
        size: '3.5rem',
        lh: '1.1',
        responsive: 'clamp(2.75rem, 2rem + 3vw, 3.5rem)'
      },
      'display-md': {
        size: '2.75rem',
        lh: '1.15',
        responsive: 'clamp(2.25rem, 1.75rem + 2vw, 2.75rem)'
      },
      'display-sm': {
        size: '2.25rem',
        lh: '1.2',
        responsive: 'clamp(1.75rem, 1.5rem + 1.5vw, 2.25rem)'
      },
      'heading-1': {
        size: '2.5rem',
        lh: '1.2',
        responsive: 'clamp(2rem, 1.5rem + 2vw, 2.5rem)'
      },
      'heading-2': {
        size: '2rem',
        lh: '1.25',
        responsive: 'clamp(1.5rem, 1.25rem + 1.25vw, 2rem)'
      },
      'heading-3': {
        size: '1.5rem',
        lh: '1.3',
        responsive: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)'
      },
      'heading-4': {
        size: '1.25rem',
        lh: '1.35'
      },
      'heading-5': {
        size: '1.125rem',
        lh: '1.4'
      },
      'heading-6': {
        size: '1rem',
        lh: '1.45'
      },
      'body-lg': {
        size: '1.125rem',
        lh: '1.5'
      },
      'body-md': {
        size: '1rem',
        lh: '1.5'
      },
      'body-sm': {
        size: '0.875rem',
        lh: '1.5'
      },
      'label-lg': {
        size: '1rem',
        lh: '1.4'
      },
      'label': {
        size: '0.875rem',
        lh: '1.4'
      },
      'caption': {
        size: '0.75rem',
        lh: '1.4'
      },
      'overline': {
        size: '0.75rem',
        lh: '1.4',
        transform: 'uppercase'
      },
      'tabular-lg': {
        size: '1.125rem',
        lh: '1.6'
      },
      'tabular-md': {
        size: '1rem',
        lh: '1.6'
      },
      'tabular-sm': {
        size: '0.875rem',
        lh: '1.6'
      }
    };
    const measures: Record<string, string> = {
      narrow: '45ch',
      prose: '65ch',
      wide: '80ch'
    };
    const weights: Record<string, string> = {
      regular: '400',
      medium: '500',
      bold: '700'
    };
    const style = sizes[args.level] || sizes['body-md'];
    const fontWeight = weights[args.weight];
    const maxWidth = measures[args.measure];
    const baseStyles = \`
      font-family: \${fontFamilyVar};
      line-height: \${style.lh};
      font-weight: \${fontWeight};
      \${style.transform ? \`text-transform: \${style.transform};\` : ''}
      letter-spacing: \${args.level === 'overline' ? '0.08em' : args.level.startsWith('display') ? '-0.02em' : '0'};
      max-width: \${maxWidth};
      margin: 0;
    \`;

    // When responsive is enabled and level supports it, show dual preview
    if (args.responsive && style.responsive) {
      // Parse clamp values: clamp(min, preferred, max)
      const clampMatch = style.responsive.match(/clamp\\(([^,]+),\\s*([^,]+),\\s*([^)]+)\\)/);
      const minSize = clampMatch ? clampMatch[1].trim() : style.size;
      const maxSize = clampMatch ? clampMatch[3].trim() : style.size;
      return html\`
        <div data-theme="\${theme}" style="padding: 1.5rem; color: inherit;">
          <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
            <div style="flex: 0 0 auto; width: 320px; border: 1px solid; border-radius: 4px; opacity: 0.9; padding: 1rem; box-sizing: border-box;">
              <div style="font-size: 0.75rem; opacity: 0.6; margin-bottom: 0.75rem; font-family: system-ui;">
                Mobile · 320px · \${minSize}
              </div>
              <p style="\${baseStyles} font-size: \${minSize};">\${args.text}</p>
            </div>
            <div style="flex: 1; min-width: 400px; border: 1px solid; border-radius: 4px; opacity: 0.9; padding: 1rem; box-sizing: border-box;">
              <div style="font-size: 0.75rem; opacity: 0.6; margin-bottom: 0.75rem; font-family: system-ui;">
                Desktop · 1200px+ · \${maxSize}
              </div>
              <p style="\${baseStyles} font-size: \${maxSize};">\${args.text}</p>
            </div>
          </div>
        </div>
      \`;
    }
    return html\`
      <div data-theme="\${theme}" style="padding: 2rem; color: inherit;">
        <p style="\${baseStyles} font-size: \${style.size};">\${args.text}</p>
      </div>
    \`;
  }
}`,...T.parameters?.docs?.source}}},E=[`Overview`,`TypographicFramework`,`DesigningInFigma`,`PlaygroundStory`]}));D();export{w as DesigningInFigma,S as Overview,T as PlaygroundStory,C as TypographicFramework,E as __namedExportsOrder,_ as default,D as n,g as t};