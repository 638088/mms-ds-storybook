import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{K as n,V as r}from"./iframe-Cy4I9pO6.js";var i=e({DesigningInFigma:()=>h,Overview:()=>p,PlaygroundStory:()=>g,TypographicFramework:()=>m,__namedExportsOrder:()=>_,default:()=>a}),a,o,s,c,l,u,d,f,p,m,h,g,_,v=t((()=>{r(),a={title:`Foundations/Typography`,tags:[`!autodocs`]},o={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},s=`680px`,c=`960px`,l={display:[{name:`display-lg`,size:`3.5rem`,px:`56px`,lineHeight:`1.1`,usage:`Hero taglines, splash screens`},{name:`display-md`,size:`2.75rem`,px:`44px`,lineHeight:`1.15`,usage:`Feature callouts, section heroes`},{name:`display-sm`,size:`2.25rem`,px:`36px`,lineHeight:`1.2`,usage:`Secondary hero text, card heroes`}],heading:[{name:`heading-1`,size:`2.5rem`,px:`40px`,lineHeight:`1.2`,html:`h1`,usage:`Page title`},{name:`heading-2`,size:`2rem`,px:`32px`,lineHeight:`1.25`,html:`h2`,usage:`Major section`},{name:`heading-3`,size:`1.5rem`,px:`24px`,lineHeight:`1.3`,html:`h3`,usage:`Subsection`},{name:`heading-4`,size:`1.25rem`,px:`20px`,lineHeight:`1.35`,html:`h4`,usage:`Card/panel title`},{name:`heading-5`,size:`1.125rem`,px:`18px`,lineHeight:`1.4`,html:`h5`,usage:`Minor heading`},{name:`heading-6`,size:`1rem`,px:`16px`,lineHeight:`1.45`,html:`h6`,usage:`Smallest heading`}],body:[{name:`body-lg`,size:`1.125rem`,px:`18px`,lineHeight:`1.5`,usage:`Lead paragraphs, emphasis`},{name:`body-md`,size:`1rem`,px:`16px`,lineHeight:`1.5`,usage:`Default body text`},{name:`body-sm`,size:`0.875rem`,px:`14px`,lineHeight:`1.5`,usage:`Secondary text, metadata`}],ui:[{name:`label-lg`,size:`1rem`,px:`16px`,lineHeight:`1.4`,usage:`Accessibility-first labels, government default`},{name:`label`,size:`0.875rem`,px:`14px`,lineHeight:`1.4`,usage:`Standard UI density labels`},{name:`caption`,size:`0.75rem`,px:`12px`,lineHeight:`1.4`,usage:`Timestamps, helper text, fine print`},{name:`overline`,size:`0.75rem`,px:`12px`,lineHeight:`1.4`,usage:`All caps — category tags, section labels`}],tabular:[{name:`tabular-lg`,size:`1.125rem`,px:`18px`,lineHeight:`1.6`,usage:`Large tabular data, confirmation numbers`},{name:`tabular-md`,size:`1rem`,px:`16px`,lineHeight:`1.6`,usage:`Default data tables, dollar amounts`},{name:`tabular-sm`,size:`0.875rem`,px:`14px`,lineHeight:`1.6`,usage:`Compact tables, reference codes`}]},u=[{name:`--font-weight-regular`,value:`400`,usage:`Default body text weight`},{name:`--font-weight-medium`,value:`500`,usage:`Semi-emphasis, labels, subheadings`},{name:`--font-weight-bold`,value:`700`,usage:`Strong emphasis, headings`}],d=[{name:`--text-measure-narrow`,value:`45ch`,usage:`Captions, sidebars, constrained layouts`},{name:`--text-measure-prose`,value:`65ch`,usage:`Optimal for running text (Bringhurst 45–75ch)`},{name:`--text-measure-wide`,value:`80ch`,usage:`Code blocks, tables, technical content`}],f=(e,t,r,i,a)=>n`
  <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
    <td style="padding: 0.5rem 0.75rem; ${o.monoSm} color: inherit; white-space: nowrap;">${e}</td>
    <td style="padding: 0.5rem 0.75rem; ${o.monoSm} opacity: 0.65; white-space: nowrap;">${t}</td>
    ${r===null?``:n`<td style="padding: 0.5rem 0.75rem; ${o.monoSm} opacity: 0.5; white-space: nowrap;">${r}</td>`}
    ${a?n`<td style="padding: 0.5rem 0.75rem; ${o.monoSm} opacity: 0.5; white-space: nowrap;">${a}</td>`:``}
    <td style="padding: 0.5rem 0.75rem; ${o.caption} opacity: 0.65;">${i}</td>
  </tr>
`,p={name:`Overview`,render:()=>n`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${c}; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${o.h1}">Typography</h1>
      <p style="${o.body} opacity: 0.85; max-width: ${s}; margin-bottom: 2rem;">
        The typography system defines how text appears across the platform — sizes, weights, line heights, and font families. The MMS Design System Platform adopts a <strong>two-layer architecture</strong>: structural tokens define the framework, brand sheets fill in the fonts.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Two-layer model -->
      <h2 style="${o.h2}">Two-layer architecture</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${o.h3}">Layer 1 — Structural (fixed)</p>
          <p style="${o.bodySm} opacity: 0.85; margin-bottom: 0.75rem;">
            Defines the typographic <em>framework</em> — scale steps, line heights, weights, measure constraints. These are UX decisions, not brand decisions.
          </p>
          <ul style="${o.caption} opacity: 0.7; margin: 0; padding-left: 1.25rem;">
            <li>Type scale: display, heading 1–6, body, UI</li>
            <li>Line heights: none → loose</li>
            <li>Font weights: light → bold</li>
            <li>Measure: prose max-width (65ch)</li>
          </ul>
        </div>
        <div style="padding: 1.25rem; background: rgba(56,108,247,0.06); border-left: 3px solid #386CF7; border-radius: 0 8px 8px 0;">
          <p style="${o.h3}">Layer 2 — Brand (per client)</p>
          <p style="${o.bodySm} opacity: 0.85; margin-bottom: 0.75rem;">
            Fills the font family <em>slots</em> with client-specific typefaces. Each engagement authors a theme file that satisfies the structural contract.
          </p>
          <ul style="${o.caption} opacity: 0.7; margin: 0; padding-left: 1.25rem;">
            <li><code style="${o.monoSm}">--font-family-heading</code> — headings, display text, titles</li>
            <li><code style="${o.monoSm}">--font-family-body</code> — body text, UI labels, captions</li>
            <li><code style="${o.monoSm}">--font-family-tabular</code> — data tables, numeric alignment, reference numbers</li>
          </ul>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Font family slots -->
      <h2 style="${o.h2}">Font family slots</h2>
      <p style="${o.bodySm} opacity: 0.85; max-width: ${s}; margin-bottom: 1rem;">
        Three slots that brand sheets fill. Components reference these tokens — never hardcoded font names. The table below shows two example themes to illustrate how different engagements satisfy the same structural contract.
      </p>

      <div style="overflow-x: auto; margin-bottom: 2rem;">
        <table style="width: 100%; border-collapse: collapse; ${o.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Purpose</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Maximus</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">VA.gov</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">--font-family-heading</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption} opacity: 0.65;">Headings, display text</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption}">Avenir Next LT Pro</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption}">Source Sans Pro</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">--font-family-body</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption} opacity: 0.65;">Body text, UI labels</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption}">Avenir Next LT Pro</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption}">Source Sans Pro</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">--font-family-tabular</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption} opacity: 0.65;">Data tables, numeric alignment</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption}">System mono stack</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption}">Roboto Mono</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Why self-host -->
      <h2 style="${o.h2}">Why self-host fonts?</h2>
      <div style="padding: 1rem 1.25rem; background: rgba(56,108,247,0.06); border-left: 3px solid #386CF7; border-radius: 0 6px 6px 0; max-width: ${s}; margin-bottom: 2rem;">
        <p style="${o.bodySm} opacity: 0.85; margin: 0;">
          Government networks frequently block external CDNs (Google Fonts, Adobe Fonts CDN). All fonts are bundled locally in <code style="${o.monoSm}">src/assets/fonts/</code> to ensure they load in DISA STIG-compliant, agency-firewalled, and air-gapped environments.
        </p>
      </div>

      <!-- Usage -->
      <h2 style="${o.h2}">Usage</h2>
      <p style="${o.bodySm} opacity: 0.85; max-width: ${s}; margin-bottom: 1rem;">
        Each theme is a standalone CSS file that includes <code style="${o.monoSm}">@font-face</code> declarations and CSS custom properties. Import once at your app's entry point — fonts load automatically.
      </p>

      <div style="background: rgba(128,128,128,0.06); border-radius: 8px; padding: 1rem 1.25rem; margin-bottom: 1rem; max-width: ${s};">
        <p style="${o.caption} opacity: 0.6; margin: 0 0 0.5rem;">Install the theme package:</p>
        <code style="${o.monoSm} display: block; padding: 0.5rem 0.75rem; background: rgba(0,0,0,0.04); border-radius: 4px;">npm install @mms/theme-va-gov</code>
      </div>

      <div style="background: rgba(128,128,128,0.06); border-radius: 8px; padding: 1rem 1.25rem; margin-bottom: 1.5rem; max-width: ${s};">
        <p style="${o.caption} opacity: 0.6; margin: 0 0 0.5rem;">Import in your app entry (e.g., main.tsx, App.tsx):</p>
        <code style="${o.monoSm} display: block; padding: 0.5rem 0.75rem; background: rgba(0,0,0,0.04); border-radius: 4px;">import '@mms/theme-va-gov/index.css';</code>
      </div>

      <div style="background: rgba(128,128,128,0.06); border-radius: 8px; padding: 1rem 1.25rem; margin-bottom: 2rem; max-width: ${s};">
        <p style="${o.caption} opacity: 0.6; margin: 0 0 0.5rem;">Use CSS custom properties in your styles:</p>
        <pre style="${o.monoSm} margin: 0; padding: 0.5rem 0.75rem; background: rgba(0,0,0,0.04); border-radius: 4px; white-space: pre-wrap;">h1 { font-family: var(--font-family-heading); }
p  { font-family: var(--font-family-body); }
td { font-family: var(--font-family-tabular); }</pre>
      </div>

      <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px; max-width: ${s}; margin-bottom: 2rem;">
        <p style="${o.caption}"><strong>Available themes:</strong> <code style="${o.monoSm}">@mms/theme-maximus</code>, <code style="${o.monoSm}">@mms/theme-va-gov</code>, <code style="${o.monoSm}">@mms/theme-system</code> (OS native fonts, no package needed)</p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${o.h2}">Accessibility requirements</h2>
      <div style="display: flex; flex-direction: column; gap: 0.75rem; max-width: ${s}; margin-bottom: 2rem;">
        <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="${o.caption}"><strong>Minimum body size:</strong> 16px (1rem). WCAG SC 1.4.4 — text must scale to 200% without loss.</p>
        </div>
        <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="${o.caption}"><strong>Minimum auxiliary size:</strong> 14px (0.875rem). Captions and labels only — never running prose.</p>
        </div>
        <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="${o.caption}"><strong>Line height:</strong> ≥1.5 for body text. WCAG SC 1.4.12 — text spacing adjustability.</p>
        </div>
        <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="${o.caption}"><strong>Line length:</strong> 45–75 characters per line. 65ch optimal (Bringhurst).</p>
        </div>
        <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="${o.caption}"><strong>Units:</strong> rem for sizes (respects browser zoom). Unitless for line-height (scales proportionally).</p>
        </div>
      </div>

    </div>
  `},m={name:`Typographic Framework`,render:()=>n`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${c}; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${o.h1}">Typographic Framework</h1>
      <p style="${o.body} opacity: 0.85; max-width: ${s}; margin-bottom: 2rem;">
        The complete type scale, weights, line heights, and measure constraints. All values are structural — they define the framework that brand fonts fill.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Type scale table -->
      <h2 style="${o.h2}">Type scale</h2>
      <p style="${o.bodySm} opacity: 0.85; max-width: ${s}; margin-bottom: 1.5rem;">
        Line heights are baked into each type level — no standalone tokens. This guarantees consistent vertical rhythm without additional decisions.
      </p>

      <!-- Display -->
      <h3 style="${o.h3}">Display — hero/marketing</h3>
      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; ${o.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">rem</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">px</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Line-height</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${l.display.map(e=>f(`--text-${e.name}`,e.size,e.px,e.usage,e.lineHeight))}
          </tbody>
        </table>
      </div>

      <!-- Heading -->
      <h3 style="${o.h3}">Heading — semantic (h1–h6)</h3>
      <div style="overflow-x: auto; margin-bottom: 1rem;">
        <table style="width: 100%; border-collapse: collapse; ${o.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">rem</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">px</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Line-height</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${l.heading.map(e=>f(`--text-${e.name}`,e.size,e.px,`${e.usage} (${e.html})`,e.lineHeight))}
          </tbody>
        </table>
      </div>

      <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px; max-width: ${s}; margin-bottom: 1.5rem;">
        <p style="${o.caption}"><strong>Content guidance:</strong> Most pages need only h1–h4. Avoid nesting content beyond four heading levels — deeper hierarchy usually signals a need to restructure the page or break content into separate sections.</p>
      </div>

      <!-- Body -->
      <h3 style="${o.h3}">Body — running prose</h3>
      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; ${o.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">rem</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">px</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Line-height</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${l.body.map(e=>f(`--text-${e.name}`,e.size,e.px,e.usage,e.lineHeight))}
          </tbody>
        </table>
      </div>

      <!-- UI -->
      <h3 style="${o.h3}">UI — interface elements</h3>
      <div style="overflow-x: auto; margin-bottom: 2rem;">
        <table style="width: 100%; border-collapse: collapse; ${o.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">rem</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">px</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Line-height</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${l.ui.map(e=>f(`--text-${e.name}`,e.size,e.px,e.usage,e.lineHeight))}
          </tbody>
        </table>
      </div>

      <!-- Tabular -->
      <h3 style="${o.h3}">Tabular — fixed-width data</h3>
      <div style="overflow-x: auto; margin-bottom: 1rem;">
        <table style="width: 100%; border-collapse: collapse; ${o.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">rem</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">px</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Line-height</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${l.tabular.map(e=>f(`--text-${e.name}`,e.size,e.px,e.usage,e.lineHeight))}
          </tbody>
        </table>
      </div>

      <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px; max-width: ${s}; margin-bottom: 2rem;">
        <p style="${o.caption}"><strong>Why tabular mirrors body sizes:</strong> Tabular text (data tables, confirmation numbers, dollar amounts) typically appears alongside body text. Matching sizes avoids visual jarring when monospace and proportional fonts sit together. <strong>Line-height 1.6</strong> (vs 1.5 for body) — monospace text benefits from more vertical breathing room in data-dense contexts.</p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Visual specimen -->
      <h2 style="${o.h2}">Visual specimen</h2>
      <div style="padding: 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 2rem;">

        <div style="margin-bottom: 1.5rem;">
          <span style="${o.monoSm} opacity: 0.5; font-size: 0.7rem;">display-lg</span>
          <p style="font-size: 3.5rem; line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; margin: 0.25rem 0 0;">Moving people forward</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span style="${o.monoSm} opacity: 0.5; font-size: 0.7rem;">heading-1</span>
          <p style="font-size: 2.5rem; line-height: 1.2; font-weight: 700; letter-spacing: -0.01em; margin: 0.25rem 0 0;">Page Title</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span style="${o.monoSm} opacity: 0.5; font-size: 0.7rem;">heading-2</span>
          <p style="font-size: 2rem; line-height: 1.25; font-weight: 700; margin: 0.25rem 0 0;">Section Heading</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span style="${o.monoSm} opacity: 0.5; font-size: 0.7rem;">heading-3</span>
          <p style="font-size: 1.5rem; line-height: 1.3; font-weight: 700; margin: 0.25rem 0 0;">Subsection</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span style="${o.monoSm} opacity: 0.5; font-size: 0.7rem;">body-lg</span>
          <p style="font-size: 1.125rem; line-height: 1.6; margin: 0.25rem 0 0;">Lead paragraph text for introductions and emphasis. Slightly larger than default body.</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span style="${o.monoSm} opacity: 0.5; font-size: 0.7rem;">body-md (default)</span>
          <p style="font-size: 1rem; line-height: 1.6; margin: 0.25rem 0 0;">Default body text for running prose. This is the workhorse of the type system — most content uses this size.</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span style="${o.monoSm} opacity: 0.5; font-size: 0.7rem;">body-sm</span>
          <p style="font-size: 0.875rem; line-height: 1.5; margin: 0.25rem 0 0; opacity: 0.85;">Secondary text, metadata, and supporting information.</p>
        </div>

        <div>
          <span style="${o.monoSm} opacity: 0.5; font-size: 0.7rem;">caption</span>
          <p style="font-size: 0.75rem; line-height: 1.4; margin: 0.25rem 0 0; opacity: 0.7;">Timestamps, helper text, fine print — smallest readable size.</p>
        </div>

        <div>
          <span style="${o.monoSm} opacity: 0.5; font-size: 0.7rem;">tabular-md</span>
          <p style="font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace; font-size: 1rem; line-height: 1.6; margin: 0.25rem 0 0;">Confirmation #: 1234-5678-9012 &nbsp;|&nbsp; SSN: ***-**-4567 &nbsp;|&nbsp; $12,345.67</p>
        </div>

      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Font weights -->
      <h2 style="${o.h2}">Font weights</h2>
      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; ${o.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Value</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${u.map(e=>f(e.name,e.value,null,e.usage))}
          </tbody>
        </table>
      </div>

      <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px; max-width: ${s}; margin-bottom: 1rem;">
        <p style="${o.caption}"><strong>Why no light (300)?</strong> Light weight reduces readability for low vision users and is rarely needed in government UI contexts. Three weights provide sufficient hierarchy without accessibility risk.</p>
      </div>

      <div style="display: flex; gap: 2rem; padding: 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 2rem;">
        <div style="text-align: center;">
          <p style="font-size: 1.5rem; font-weight: 400; margin: 0 0 0.5rem;">Regular</p>
          <span style="${o.monoSm} opacity: 0.5; font-size: 0.7rem;">400</span>
        </div>
        <div style="text-align: center;">
          <p style="font-size: 1.5rem; font-weight: 500; margin: 0 0 0.5rem;">Medium</p>
          <span style="${o.monoSm} opacity: 0.5; font-size: 0.7rem;">500</span>
        </div>
        <div style="text-align: center;">
          <p style="font-size: 1.5rem; font-weight: 700; margin: 0 0 0.5rem;">Bold</p>
          <span style="${o.monoSm} opacity: 0.5; font-size: 0.7rem;">700</span>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Measure -->
      <h2 style="${o.h2}">Measure (line length)</h2>
      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; ${o.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Value</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            ${d.map(e=>f(e.name,e.value,null,e.usage))}
          </tbody>
        </table>
      </div>

      <div style="padding: 1rem 1.25rem; background: rgba(56,108,247,0.06); border-left: 3px solid #386CF7; border-radius: 0 6px 6px 0; max-width: ${s}; margin-bottom: 2rem;">
        <p style="${o.bodySm} opacity: 0.85; margin: 0;">
          <strong>Why 65ch?</strong> Bringhurst's <em>Elements of Typographic Style</em> recommends 45–75 characters per line for comfortable reading. 65ch sits at the optimal midpoint and matches Tailwind's <code style="${o.monoSm}">max-w-prose</code>.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Responsive scaling -->
      <h2 style="${o.h2}">Responsive scaling</h2>
      <p style="${o.bodySm} opacity: 0.85; max-width: ${s}; margin-bottom: 1rem;">
        Headings scale fluidly between mobile and desktop using <code style="${o.monoSm}">clamp()</code>. Body text remains fixed — only headings need responsive adjustment.
      </p>

      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; ${o.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Mobile (375px)</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Desktop (1440px)</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">clamp()</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">--text-heading-1</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption} opacity: 0.65;">32px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption} opacity: 0.65;">40px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm} opacity: 0.65; font-size: 0.75rem;">clamp(2rem, 1.5rem + 2vw, 2.5rem)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">--text-heading-2</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption} opacity: 0.65;">24px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption} opacity: 0.65;">32px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm} opacity: 0.65; font-size: 0.75rem;">clamp(1.5rem, 1.25rem + 1.25vw, 2rem)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">--text-heading-3</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption} opacity: 0.65;">20px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.caption} opacity: 0.65;">24px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm} opacity: 0.65; font-size: 0.75rem;">clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Figma note -->
      <div style="padding: 1rem 1.25rem; background: rgba(128,128,128,0.05); border-radius: 6px; max-width: ${s};">
        <p style="${o.bodySm} opacity: 0.85; margin: 0;">
          Figma cannot preview <code style="${o.monoSm}">clamp()</code> interpolation. For design adoption guidance, text style setup, and variable binding — see <strong>Designing in Figma</strong>.
        </p>
      </div>

    </div>
  `},h={name:`Designing in Figma`,render:()=>n`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${c}; padding: 2rem; color: inherit;">

      <h1 style="${o.h1}">Designing in Figma</h1>
      <p style="${o.body} max-width: ${s}; opacity: 0.85; margin-bottom: 1.75rem;">Reference for creating Figma Text Styles. Headings scale between breakpoints; body and UI sizes stay fixed.</p>

      <div role="note" style="padding: 1rem 1.25rem; background: rgba(90,120,200,0.08); border-left: 3px solid rgba(90,120,200,0.5); border-radius: 4px; margin-bottom: 2.5rem; max-width: ${s};">
        <p style="${o.bodySm}"><strong>The principle:</strong> Designers apply Text Styles bound to Variables — never by typing a font size manually. Token names match between Figma and code.</p>
      </div>

      <!-- Type scale table -->
      <h2 style="${o.h2}">Type scale</h2>
      <p style="${o.bodySm} max-width: ${s}; opacity: 0.85; margin-bottom: 1rem;">Create two Text Styles per heading level (Mobile / Desktop). Body and UI styles need only one — they stay fixed across breakpoints. Line heights are baked into each Text Style.</p>

      <div style="overflow-x: auto; margin-bottom: 2rem;">
        <table style="width: 100%; border-collapse: collapse; ${o.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Text Style</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Mobile (375px)</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Desktop (1440px)</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Line-height</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.08); background: rgba(128,128,128,0.03);">
              <td colspan="4" style="padding: 0.5rem 0.75rem; ${o.caption} font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;">Display</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Display LG</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">44px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">56px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.1</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Display MD</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">36px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">44px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.15</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Display SM</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">28px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">36px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.2</td>
            </tr>

            <tr style="border-bottom: 1px solid rgba(128,128,128,0.08); background: rgba(128,128,128,0.03);">
              <td colspan="4" style="padding: 0.5rem 0.75rem; ${o.caption} font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;">Heading</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Heading 1</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">32px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">40px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.2</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Heading 2</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">24px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">32px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.25</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Heading 3</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">20px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">24px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.3</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Heading 4</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">18px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">20px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.35</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Heading 5</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">16px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">18px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.4</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Heading 6</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">14px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">16px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.45</td>
            </tr>

            <tr style="border-bottom: 1px solid rgba(128,128,128,0.08); background: rgba(128,128,128,0.03);">
              <td colspan="4" style="padding: 0.5rem 0.75rem; ${o.caption} font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;">Body (fixed)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Body LG</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}" colspan="2">18px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.5</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Body MD</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}" colspan="2">16px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.5</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Body SM</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}" colspan="2">14px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.5</td>
            </tr>

            <tr style="border-bottom: 1px solid rgba(128,128,128,0.08); background: rgba(128,128,128,0.03);">
              <td colspan="4" style="padding: 0.5rem 0.75rem; ${o.caption} font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;">UI (fixed)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Label LG</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}" colspan="2">16px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.4</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Label</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}" colspan="2">14px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.4</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Caption</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}" colspan="2">12px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.4</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Overline</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}" colspan="2">12px (all caps)</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.4</td>
            </tr>

            <tr style="border-bottom: 1px solid rgba(128,128,128,0.08); background: rgba(128,128,128,0.03);">
              <td colspan="4" style="padding: 0.5rem 0.75rem; ${o.caption} font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;">Tabular (fixed-width)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Tabular LG</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}" colspan="2">18px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.6</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Tabular MD</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}" colspan="2">16px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.6</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Tabular SM</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}" colspan="2">14px</td>
              <td style="padding: 0.5rem 0.75rem; ${o.monoSm}">1.6</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Tabular rationale -->
      <h2 style="${o.h2}">Why tabular mirrors body sizes</h2>
      <p style="${o.bodySm} max-width: ${s}; opacity: 0.85; margin-bottom: 1rem;">
        Tabular text (data tables, confirmation numbers, dollar amounts) typically appears alongside body text. Matching sizes avoids visual jarring when monospace and proportional fonts sit together.
      </p>
      <div style="padding: 1rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 1.5rem;">
        <p style="${o.caption} opacity: 0.85; margin: 0 0 0.5rem;"><strong>Line-height: 1.6</strong> (vs 1.5 for body)</p>
        <p style="${o.caption} opacity: 0.7; margin: 0;">
          Monospace text benefits from more vertical breathing room. Fixed-width characters in data-dense contexts (tables, forms) are easier to scan with slightly taller line-height.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Measure -->
      <h2 style="${o.h2}">Measure (line length)</h2>
      <p style="${o.bodySm} max-width: ${s}; opacity: 0.85; margin-bottom: 1rem;">Constrain prose containers to ~540px (65 characters at 16px). Use a guide or max-width constraint in Figma.</p>

    </div>
  `},g={tags:[`!dev`],args:{brand:`maximus`,level:`heading-1`,weight:`regular`,measure:`prose`,responsive:!1,text:`The quick brown fox jumps over the lazy dog`},argTypes:{brand:{control:`select`,options:[`maximus`,`va-gov`,`system fonts`],description:`Brand theme — determines font family. "system fonts" uses native OS fonts (San Francisco on Apple, Segoe UI on Windows, Roboto on Android).`},level:{control:`select`,options:[`display-lg`,`display-md`,`display-sm`,`heading-1`,`heading-2`,`heading-3`,`heading-4`,`heading-5`,`heading-6`,`body-lg`,`body-md`,`body-sm`,`label-lg`,`label`,`caption`,`overline`,`tabular-lg`,`tabular-md`,`tabular-sm`],description:`Type scale level`},weight:{control:`select`,options:[`regular`,`medium`,`bold`],description:`Font weight — independent of type level`},measure:{control:`select`,options:[`narrow`,`prose`,`wide`],description:`Line length constraint`},responsive:{control:`boolean`,description:`Enable responsive scaling (headings only)`},text:{control:`text`,description:`Sample text to render`}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=String(n.level),i=r.startsWith(`tabular`)?`--font-family-tabular`:r.startsWith(`display`)||r.startsWith(`heading`)?`--font-family-heading`:`--font-family-body`,a=`max-width: var(--text-measure-${n.measure}); `;return`<p style="font-family: var(${i}); font-size: var(--text-${n.level}); font-weight: var(--font-weight-${n.weight}); ${a}">
  ${n.text}
</p>`},language:`html`}}},render:e=>{let t={maximus:`maximus`,"va-gov":`va-gov`,"system fonts":`system`}[e.brand]||`system`,r=e.level.startsWith(`tabular`)?`var(--font-family-tabular)`:e.level.startsWith(`display`)||e.level.startsWith(`heading`)?`var(--font-family-heading)`:`var(--font-family-body)`,i={"display-lg":{size:`3.5rem`,lh:`1.1`,responsive:`clamp(2.75rem, 2rem + 3vw, 3.5rem)`},"display-md":{size:`2.75rem`,lh:`1.15`,responsive:`clamp(2.25rem, 1.75rem + 2vw, 2.75rem)`},"display-sm":{size:`2.25rem`,lh:`1.2`,responsive:`clamp(1.75rem, 1.5rem + 1.5vw, 2.25rem)`},"heading-1":{size:`2.5rem`,lh:`1.2`,responsive:`clamp(2rem, 1.5rem + 2vw, 2.5rem)`},"heading-2":{size:`2rem`,lh:`1.25`,responsive:`clamp(1.5rem, 1.25rem + 1.25vw, 2rem)`},"heading-3":{size:`1.5rem`,lh:`1.3`,responsive:`clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)`},"heading-4":{size:`1.25rem`,lh:`1.35`},"heading-5":{size:`1.125rem`,lh:`1.4`},"heading-6":{size:`1rem`,lh:`1.45`},"body-lg":{size:`1.125rem`,lh:`1.5`},"body-md":{size:`1rem`,lh:`1.5`},"body-sm":{size:`0.875rem`,lh:`1.5`},"label-lg":{size:`1rem`,lh:`1.4`},label:{size:`0.875rem`,lh:`1.4`},caption:{size:`0.75rem`,lh:`1.4`},overline:{size:`0.75rem`,lh:`1.4`,transform:`uppercase`},"tabular-lg":{size:`1.125rem`,lh:`1.6`},"tabular-md":{size:`1rem`,lh:`1.6`},"tabular-sm":{size:`0.875rem`,lh:`1.6`}},a={narrow:`45ch`,prose:`65ch`,wide:`80ch`},o={regular:`400`,medium:`500`,bold:`700`},s=i[e.level]||i[`body-md`],c=o[e.weight],l=a[e.measure],u=`
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
    `}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Typography</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        The typography system defines how text appears across the platform — sizes, weights, line heights, and font families. The MMS Design System Platform adopts a <strong>two-layer architecture</strong>: structural tokens define the framework, brand sheets fill in the fonts.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Two-layer model -->
      <h2 style="\${t.h2}">Two-layer architecture</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Layer 1 — Structural (fixed)</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 0.75rem;">
            Defines the typographic <em>framework</em> — scale steps, line heights, weights, measure constraints. These are UX decisions, not brand decisions.
          </p>
          <ul style="\${t.caption} opacity: 0.7; margin: 0; padding-left: 1.25rem;">
            <li>Type scale: display, heading 1–6, body, UI</li>
            <li>Line heights: none → loose</li>
            <li>Font weights: light → bold</li>
            <li>Measure: prose max-width (65ch)</li>
          </ul>
        </div>
        <div style="padding: 1.25rem; background: rgba(56,108,247,0.06); border-left: 3px solid #386CF7; border-radius: 0 8px 8px 0;">
          <p style="\${t.h3}">Layer 2 — Brand (per client)</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 0.75rem;">
            Fills the font family <em>slots</em> with client-specific typefaces. Each engagement authors a theme file that satisfies the structural contract.
          </p>
          <ul style="\${t.caption} opacity: 0.7; margin: 0; padding-left: 1.25rem;">
            <li><code style="\${t.monoSm}">--font-family-heading</code> — headings, display text, titles</li>
            <li><code style="\${t.monoSm}">--font-family-body</code> — body text, UI labels, captions</li>
            <li><code style="\${t.monoSm}">--font-family-tabular</code> — data tables, numeric alignment, reference numbers</li>
          </ul>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Font family slots -->
      <h2 style="\${t.h2}">Font family slots</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Three slots that brand sheets fill. Components reference these tokens — never hardcoded font names. The table below shows two example themes to illustrate how different engagements satisfy the same structural contract.
      </p>

      <div style="overflow-x: auto; margin-bottom: 2rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Purpose</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Maximus</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">VA.gov</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--font-family-heading</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Headings, display text</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption}">Avenir Next LT Pro</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption}">Source Sans Pro</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--font-family-body</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Body text, UI labels</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption}">Avenir Next LT Pro</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption}">Source Sans Pro</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--font-family-tabular</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Data tables, numeric alignment</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption}">System mono stack</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption}">Roboto Mono</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Why self-host -->
      <h2 style="\${t.h2}">Why self-host fonts?</h2>
      <div style="padding: 1rem 1.25rem; background: rgba(56,108,247,0.06); border-left: 3px solid #386CF7; border-radius: 0 6px 6px 0; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        <p style="\${t.bodySm} opacity: 0.85; margin: 0;">
          Government networks frequently block external CDNs (Google Fonts, Adobe Fonts CDN). All fonts are bundled locally in <code style="\${t.monoSm}">src/assets/fonts/</code> to ensure they load in DISA STIG-compliant, agency-firewalled, and air-gapped environments.
        </p>
      </div>

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Each theme is a standalone CSS file that includes <code style="\${t.monoSm}">@font-face</code> declarations and CSS custom properties. Import once at your app's entry point — fonts load automatically.
      </p>

      <div style="background: rgba(128,128,128,0.06); border-radius: 8px; padding: 1rem 1.25rem; margin-bottom: 1rem; max-width: \${PROSE_MAX};">
        <p style="\${t.caption} opacity: 0.6; margin: 0 0 0.5rem;">Install the theme package:</p>
        <code style="\${t.monoSm} display: block; padding: 0.5rem 0.75rem; background: rgba(0,0,0,0.04); border-radius: 4px;">npm install @mms/theme-va-gov</code>
      </div>

      <div style="background: rgba(128,128,128,0.06); border-radius: 8px; padding: 1rem 1.25rem; margin-bottom: 1.5rem; max-width: \${PROSE_MAX};">
        <p style="\${t.caption} opacity: 0.6; margin: 0 0 0.5rem;">Import in your app entry (e.g., main.tsx, App.tsx):</p>
        <code style="\${t.monoSm} display: block; padding: 0.5rem 0.75rem; background: rgba(0,0,0,0.04); border-radius: 4px;">import '@mms/theme-va-gov/index.css';</code>
      </div>

      <div style="background: rgba(128,128,128,0.06); border-radius: 8px; padding: 1rem 1.25rem; margin-bottom: 2rem; max-width: \${PROSE_MAX};">
        <p style="\${t.caption} opacity: 0.6; margin: 0 0 0.5rem;">Use CSS custom properties in your styles:</p>
        <pre style="\${t.monoSm} margin: 0; padding: 0.5rem 0.75rem; background: rgba(0,0,0,0.04); border-radius: 4px; white-space: pre-wrap;">h1 { font-family: var(--font-family-heading); }
p  { font-family: var(--font-family-body); }
td { font-family: var(--font-family-tabular); }</pre>
      </div>

      <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        <p style="\${t.caption}"><strong>Available themes:</strong> <code style="\${t.monoSm}">@mms/theme-maximus</code>, <code style="\${t.monoSm}">@mms/theme-va-gov</code>, <code style="\${t.monoSm}">@mms/theme-system</code> (OS native fonts, no package needed)</p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility requirements</h2>
      <div style="display: flex; flex-direction: column; gap: 0.75rem; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="\${t.caption}"><strong>Minimum body size:</strong> 16px (1rem). WCAG SC 1.4.4 — text must scale to 200% without loss.</p>
        </div>
        <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="\${t.caption}"><strong>Minimum auxiliary size:</strong> 14px (0.875rem). Captions and labels only — never running prose.</p>
        </div>
        <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="\${t.caption}"><strong>Line height:</strong> ≥1.5 for body text. WCAG SC 1.4.12 — text spacing adjustability.</p>
        </div>
        <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="\${t.caption}"><strong>Line length:</strong> 45–75 characters per line. 65ch optimal (Bringhurst).</p>
        </div>
        <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px;">
          <p style="\${t.caption}"><strong>Units:</strong> rem for sizes (respects browser zoom). Unitless for line-height (scales proportionally).</p>
        </div>
      </div>

    </div>
  \`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Typographic Framework',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Typographic Framework</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        The complete type scale, weights, line heights, and measure constraints. All values are structural — they define the framework that brand fonts fill.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Type scale table -->
      <h2 style="\${t.h2}">Type scale</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Line heights are baked into each type level — no standalone tokens. This guarantees consistent vertical rhythm without additional decisions.
      </p>

      <!-- Display -->
      <h3 style="\${t.h3}">Display — hero/marketing</h3>
      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">rem</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">px</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Line-height</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${typeScale.display.map(s => tokenRow(\`--text-\${s.name}\`, s.size, s.px, s.usage, s.lineHeight))}
          </tbody>
        </table>
      </div>

      <!-- Heading -->
      <h3 style="\${t.h3}">Heading — semantic (h1–h6)</h3>
      <div style="overflow-x: auto; margin-bottom: 1rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">rem</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">px</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Line-height</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${typeScale.heading.map(s => tokenRow(\`--text-\${s.name}\`, s.size, s.px, \`\${s.usage} (\${s.html})\`, s.lineHeight))}
          </tbody>
        </table>
      </div>

      <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <p style="\${t.caption}"><strong>Content guidance:</strong> Most pages need only h1–h4. Avoid nesting content beyond four heading levels — deeper hierarchy usually signals a need to restructure the page or break content into separate sections.</p>
      </div>

      <!-- Body -->
      <h3 style="\${t.h3}">Body — running prose</h3>
      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">rem</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">px</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Line-height</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${typeScale.body.map(s => tokenRow(\`--text-\${s.name}\`, s.size, s.px, s.usage, s.lineHeight))}
          </tbody>
        </table>
      </div>

      <!-- UI -->
      <h3 style="\${t.h3}">UI — interface elements</h3>
      <div style="overflow-x: auto; margin-bottom: 2rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">rem</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">px</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Line-height</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${typeScale.ui.map(s => tokenRow(\`--text-\${s.name}\`, s.size, s.px, s.usage, s.lineHeight))}
          </tbody>
        </table>
      </div>

      <!-- Tabular -->
      <h3 style="\${t.h3}">Tabular — fixed-width data</h3>
      <div style="overflow-x: auto; margin-bottom: 1rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">rem</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">px</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Line-height</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${typeScale.tabular.map(s => tokenRow(\`--text-\${s.name}\`, s.size, s.px, s.usage, s.lineHeight))}
          </tbody>
        </table>
      </div>

      <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        <p style="\${t.caption}"><strong>Why tabular mirrors body sizes:</strong> Tabular text (data tables, confirmation numbers, dollar amounts) typically appears alongside body text. Matching sizes avoids visual jarring when monospace and proportional fonts sit together. <strong>Line-height 1.6</strong> (vs 1.5 for body) — monospace text benefits from more vertical breathing room in data-dense contexts.</p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Visual specimen -->
      <h2 style="\${t.h2}">Visual specimen</h2>
      <div style="padding: 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 2rem;">

        <div style="margin-bottom: 1.5rem;">
          <span style="\${t.monoSm} opacity: 0.5; font-size: 0.7rem;">display-lg</span>
          <p style="font-size: 3.5rem; line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; margin: 0.25rem 0 0;">Moving people forward</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span style="\${t.monoSm} opacity: 0.5; font-size: 0.7rem;">heading-1</span>
          <p style="font-size: 2.5rem; line-height: 1.2; font-weight: 700; letter-spacing: -0.01em; margin: 0.25rem 0 0;">Page Title</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span style="\${t.monoSm} opacity: 0.5; font-size: 0.7rem;">heading-2</span>
          <p style="font-size: 2rem; line-height: 1.25; font-weight: 700; margin: 0.25rem 0 0;">Section Heading</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span style="\${t.monoSm} opacity: 0.5; font-size: 0.7rem;">heading-3</span>
          <p style="font-size: 1.5rem; line-height: 1.3; font-weight: 700; margin: 0.25rem 0 0;">Subsection</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span style="\${t.monoSm} opacity: 0.5; font-size: 0.7rem;">body-lg</span>
          <p style="font-size: 1.125rem; line-height: 1.6; margin: 0.25rem 0 0;">Lead paragraph text for introductions and emphasis. Slightly larger than default body.</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span style="\${t.monoSm} opacity: 0.5; font-size: 0.7rem;">body-md (default)</span>
          <p style="font-size: 1rem; line-height: 1.6; margin: 0.25rem 0 0;">Default body text for running prose. This is the workhorse of the type system — most content uses this size.</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span style="\${t.monoSm} opacity: 0.5; font-size: 0.7rem;">body-sm</span>
          <p style="font-size: 0.875rem; line-height: 1.5; margin: 0.25rem 0 0; opacity: 0.85;">Secondary text, metadata, and supporting information.</p>
        </div>

        <div>
          <span style="\${t.monoSm} opacity: 0.5; font-size: 0.7rem;">caption</span>
          <p style="font-size: 0.75rem; line-height: 1.4; margin: 0.25rem 0 0; opacity: 0.7;">Timestamps, helper text, fine print — smallest readable size.</p>
        </div>

        <div>
          <span style="\${t.monoSm} opacity: 0.5; font-size: 0.7rem;">tabular-md</span>
          <p style="font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace; font-size: 1rem; line-height: 1.6; margin: 0.25rem 0 0;">Confirmation #: 1234-5678-9012 &nbsp;|&nbsp; SSN: ***-**-4567 &nbsp;|&nbsp; $12,345.67</p>
        </div>

      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Font weights -->
      <h2 style="\${t.h2}">Font weights</h2>
      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Value</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${fontWeights.map(w => tokenRow(w.name, w.value, null, w.usage))}
          </tbody>
        </table>
      </div>

      <div style="padding: 0.75rem 1rem; background: rgba(128,128,128,0.05); border-radius: 6px; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        <p style="\${t.caption}"><strong>Why no light (300)?</strong> Light weight reduces readability for low vision users and is rarely needed in government UI contexts. Three weights provide sufficient hierarchy without accessibility risk.</p>
      </div>

      <div style="display: flex; gap: 2rem; padding: 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 2rem;">
        <div style="text-align: center;">
          <p style="font-size: 1.5rem; font-weight: 400; margin: 0 0 0.5rem;">Regular</p>
          <span style="\${t.monoSm} opacity: 0.5; font-size: 0.7rem;">400</span>
        </div>
        <div style="text-align: center;">
          <p style="font-size: 1.5rem; font-weight: 500; margin: 0 0 0.5rem;">Medium</p>
          <span style="\${t.monoSm} opacity: 0.5; font-size: 0.7rem;">500</span>
        </div>
        <div style="text-align: center;">
          <p style="font-size: 1.5rem; font-weight: 700; margin: 0 0 0.5rem;">Bold</p>
          <span style="\${t.monoSm} opacity: 0.5; font-size: 0.7rem;">700</span>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Measure -->
      <h2 style="\${t.h2}">Measure (line length)</h2>
      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Value</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Usage</th>
            </tr>
          </thead>
          <tbody>
            \${measures.map(m => tokenRow(m.name, m.value, null, m.usage))}
          </tbody>
        </table>
      </div>

      <div style="padding: 1rem 1.25rem; background: rgba(56,108,247,0.06); border-left: 3px solid #386CF7; border-radius: 0 6px 6px 0; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        <p style="\${t.bodySm} opacity: 0.85; margin: 0;">
          <strong>Why 65ch?</strong> Bringhurst's <em>Elements of Typographic Style</em> recommends 45–75 characters per line for comfortable reading. 65ch sits at the optimal midpoint and matches Tailwind's <code style="\${t.monoSm}">max-w-prose</code>.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Responsive scaling -->
      <h2 style="\${t.h2}">Responsive scaling</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Headings scale fluidly between mobile and desktop using <code style="\${t.monoSm}">clamp()</code>. Body text remains fixed — only headings need responsive adjustment.
      </p>

      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Mobile (375px)</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Desktop (1440px)</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">clamp()</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--text-heading-1</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">32px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">40px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm} opacity: 0.65; font-size: 0.75rem;">clamp(2rem, 1.5rem + 2vw, 2.5rem)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--text-heading-2</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">24px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">32px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm} opacity: 0.65; font-size: 0.75rem;">clamp(1.5rem, 1.25rem + 1.25vw, 2rem)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--text-heading-3</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">20px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">24px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm} opacity: 0.65; font-size: 0.75rem;">clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Figma note -->
      <div style="padding: 1rem 1.25rem; background: rgba(128,128,128,0.05); border-radius: 6px; max-width: \${PROSE_MAX};">
        <p style="\${t.bodySm} opacity: 0.85; margin: 0;">
          Figma cannot preview <code style="\${t.monoSm}">clamp()</code> interpolation. For design adoption guidance, text style setup, and variable binding — see <strong>Designing in Figma</strong>.
        </p>
      </div>

    </div>
  \`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Designing in Figma',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; color: inherit;">

      <h1 style="\${t.h1}">Designing in Figma</h1>
      <p style="\${t.body} max-width: \${PROSE_MAX}; opacity: 0.85; margin-bottom: 1.75rem;">Reference for creating Figma Text Styles. Headings scale between breakpoints; body and UI sizes stay fixed.</p>

      <div role="note" style="padding: 1rem 1.25rem; background: rgba(90,120,200,0.08); border-left: 3px solid rgba(90,120,200,0.5); border-radius: 4px; margin-bottom: 2.5rem; max-width: \${PROSE_MAX};">
        <p style="\${t.bodySm}"><strong>The principle:</strong> Designers apply Text Styles bound to Variables — never by typing a font size manually. Token names match between Figma and code.</p>
      </div>

      <!-- Type scale table -->
      <h2 style="\${t.h2}">Type scale</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; opacity: 0.85; margin-bottom: 1rem;">Create two Text Styles per heading level (Mobile / Desktop). Body and UI styles need only one — they stay fixed across breakpoints. Line heights are baked into each Text Style.</p>

      <div style="overflow-x: auto; margin-bottom: 2rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Text Style</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Mobile (375px)</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Desktop (1440px)</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; opacity: 0.75;">Line-height</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.08); background: rgba(128,128,128,0.03);">
              <td colspan="4" style="padding: 0.5rem 0.75rem; \${t.caption} font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;">Display</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Display LG</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">44px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">56px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.1</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Display MD</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">36px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">44px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.15</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Display SM</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">28px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">36px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.2</td>
            </tr>

            <tr style="border-bottom: 1px solid rgba(128,128,128,0.08); background: rgba(128,128,128,0.03);">
              <td colspan="4" style="padding: 0.5rem 0.75rem; \${t.caption} font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;">Heading</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Heading 1</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">32px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">40px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.2</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Heading 2</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">24px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">32px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.25</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Heading 3</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">20px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">24px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.3</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Heading 4</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">18px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">20px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.35</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Heading 5</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">16px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">18px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.4</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Heading 6</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">14px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">16px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.45</td>
            </tr>

            <tr style="border-bottom: 1px solid rgba(128,128,128,0.08); background: rgba(128,128,128,0.03);">
              <td colspan="4" style="padding: 0.5rem 0.75rem; \${t.caption} font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;">Body (fixed)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Body LG</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}" colspan="2">18px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.5</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Body MD</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}" colspan="2">16px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.5</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Body SM</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}" colspan="2">14px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.5</td>
            </tr>

            <tr style="border-bottom: 1px solid rgba(128,128,128,0.08); background: rgba(128,128,128,0.03);">
              <td colspan="4" style="padding: 0.5rem 0.75rem; \${t.caption} font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;">UI (fixed)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Label LG</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}" colspan="2">16px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.4</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Label</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}" colspan="2">14px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.4</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Caption</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}" colspan="2">12px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.4</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Overline</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}" colspan="2">12px (all caps)</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.4</td>
            </tr>

            <tr style="border-bottom: 1px solid rgba(128,128,128,0.08); background: rgba(128,128,128,0.03);">
              <td colspan="4" style="padding: 0.5rem 0.75rem; \${t.caption} font-weight: 600; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.05em;">Tabular (fixed-width)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Tabular LG</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}" colspan="2">18px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.6</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Tabular MD</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}" colspan="2">16px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.6</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">Tabular SM</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}" colspan="2">14px</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1.6</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Tabular rationale -->
      <h2 style="\${t.h2}">Why tabular mirrors body sizes</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; opacity: 0.85; margin-bottom: 1rem;">
        Tabular text (data tables, confirmation numbers, dollar amounts) typically appears alongside body text. Matching sizes avoids visual jarring when monospace and proportional fonts sit together.
      </p>
      <div style="padding: 1rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 1.5rem;">
        <p style="\${t.caption} opacity: 0.85; margin: 0 0 0.5rem;"><strong>Line-height: 1.6</strong> (vs 1.5 for body)</p>
        <p style="\${t.caption} opacity: 0.7; margin: 0;">
          Monospace text benefits from more vertical breathing room. Fixed-width characters in data-dense contexts (tables, forms) are easier to scan with slightly taller line-height.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Measure -->
      <h2 style="\${t.h2}">Measure (line length)</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; opacity: 0.85; margin-bottom: 1rem;">Constrain prose containers to ~540px (65 characters at 16px). Use a guide or max-width constraint in Figma.</p>

    </div>
  \`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
      options: ['maximus', 'va-gov', 'system fonts'],
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
    // Map brand selector to data-theme value
    const themeMap: Record<string, string> = {
      maximus: 'maximus',
      'va-gov': 'va-gov',
      'system fonts': 'system'
    };
    const theme = themeMap[args.brand] || 'system';

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
}`,...g.parameters?.docs?.source}}},_=[`Overview`,`TypographicFramework`,`DesigningInFigma`,`PlaygroundStory`]}));v();export{h as DesigningInFigma,p as Overview,g as PlaygroundStory,m as TypographicFramework,_ as __namedExportsOrder,a as default,v as n,i as t};