import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{t as r}from"./mms-icon.component-DFVI3nJi.js";import{n as i,t as a}from"./iframe-BrFFNKAP.js";import{t as o}from"./mms-card.component-Ae9XIj4r.js";import{r as s,t as c}from"./theme-constraints-BnNpJNRe.js";import{a as l,c as u,d,i as f,n as p,o as m,r as h,t as g,u as _}from"./doc-styles-DkvR_Qyb.js";import{n as v,s as y,t as b}from"./a11y-outcome-BzyoULsn.js";import{t as x}from"./mms-select.component-CO4YBVrq.js";function S(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var C=e((()=>{})),w,T,E,D,O,k,A,j,M,N,P,F,I,L;e((()=>{n(),x(),o(),r(),s(),i(),v(),u(),C(),T={title:`Foundations/Colors`},E=`${l.divider} margin-top: ${_.subsection};`,D={name:`Overview`,render:()=>t`
    <div data-theme=${h} data-mode=${m()} style=${p}>
      <h1 style="${d.h1}">Colors</h1>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.subsection};">
        The color system is designed for multi-brand theming with WCAG accessibility built in. It uses a two-layer architecture: structural tokens define the slots, brand tokens provide the primitives.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block;">
        <div slot="body-content">
          <h3 style="${d.h3}">Two-layer architecture</h3>
          <p style="${d.bodySm} margin-bottom: ${_.content};">
            <strong>Layer 1 — Structural (shell tokens)</strong><br>
            Defines the 12-step color scale contract. Each step is a slot with a designated purpose. The neutral palette follows this structure and is shared across all themes.
          </p>
          <p style="${d.bodySm} margin-bottom: ${_.content};">
            <strong>Layer 2 — Brand (primitives)</strong><br>
            Each brand theme provides primary, secondary, and accent palettes that fill the structural slots. Themes are standalone sheets, not overrides.
          </p>
          <p style="${d.bodySm} ${l.muted}">
            <strong>Utility colors</strong> (success, error, caution, focus ring) are separate — they don't follow the 12-step framework. They're fixed structural colors that remain consistent regardless of brand.
          </p>
        </div>
      </mms-card>

      <hr style="${E}" />

      <h2 style="${d.h2}">Color scale model</h2>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.content};">
        We adopt the <strong>Radix Colors 12-step scale</strong> because it solves the "which shade?" problem. Traditional scales (like Tailwind's 50–900) require developers to guess which value fits each use case — "should hover be 600 or 700?" becomes tribal knowledge.
      </p>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.content};">
        With the 12-step model, <strong>each step number maps to a specific UI purpose</strong>. Step 4 is always hover. Step 9 is always the solid fill. Step 12 is always high-contrast text. The step defines the role, not just the lightness.
      </p>

      <table style="${l.table} margin-bottom: ${_.subsection};">
        <thead>
          <tr>
            <th style="${l.th} width: 80px;">Steps</th>
            <th style="${l.th}">Category</th>
            <th style="${l.th}">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td} ${d.monoSm}">1–2</td>
            <td style="${l.td}">Backgrounds</td>
            <td style="${l.td} ${l.muted}">1 = page, 2 = surface (cards, sidebars, panels)</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">3–5</td>
            <td style="${l.td}">Elements</td>
            <td style="${l.td} ${l.muted}">Interactive UI states: default → hovered → pressed</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">6–8</td>
            <td style="${l.td}">Borders</td>
            <td style="${l.td} ${l.muted}">6 = separator, 7 = border, 8 = border hovered</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">9–10</td>
            <td style="${l.td}">Solids</td>
            <td style="${l.td} ${l.muted}">9 = solid fill (buttons, badges), 10 = solid hovered</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">11–12</td>
            <td style="${l.td}">Text</td>
            <td style="${l.td} ${l.muted}">11 = text muted (secondary), 12 = text (primary)</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${d.h3}">Light vs. dark mode</h3>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.content};">
        Dark mode uses <strong>separate palettes, not inverted values</strong>. Step 1 in light mode is near-white; step 1 in dark mode is near-black. The step numbers maintain their semantic meaning — step 9 is always the accessible solid fill, whether on a light or dark background.
      </p>
      <p style="${d.body} ${l.muted} max-width: ${f};">
        This approach ensures that <strong>component code doesn't change</strong> between modes. A button always uses <code style="${d.monoSm}">--color-primary-9</code> — the palette behind that token is what changes.
      </p>

      <hr style="${E}" />

      <h2 style="${d.h2}">Palettes</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: ${_.content}; margin-bottom: ${_.content};">
        <div>
          <h3 style="${d.h3}">Neutral (structural)</h3>
          <p style="${d.caption} ${l.muted}">Grayscale for backgrounds, borders, text. Follows the 12-step structure. Shared across all themes.</p>
        </div>
        <div>
          <h3 style="${d.h3}">Primary (brand)</h3>
          <p style="${d.caption} ${l.muted}">Main identity color. Buttons, links, primary actions. 12-step scale, varies per theme.</p>
        </div>
        <div>
          <h3 style="${d.h3}">Secondary (brand)</h3>
          <p style="${d.caption} ${l.muted}">Supporting color. Secondary buttons, accents. 12-step scale, varies per theme.</p>
        </div>
        <div>
          <h3 style="${d.h3}">Accent (brand)</h3>
          <p style="${d.caption} ${l.muted}">Highlight color. Badges, tags, promotional. 12-step scale, varies per theme.</p>
        </div>
      </div>
      <div style="${l.panel}">
        <h3 style="${d.h3}">Utility (separate)</h3>
        <p style="${d.caption} ${l.muted}">Success, error, caution, and focus ring. These are <strong>not</strong> part of the 12-step framework — they're fixed structural colors for status feedback and accessibility.</p>
      </div>

      <hr style="${E}" />

      <h2 style="${d.h2}">Section index</h2>
      <ul style="${d.body} max-width: ${f}; margin: 0; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${_.label};"><strong>Color framework</strong> — The 12-step scale, palette generation, and color tiering</li>
        <li style="margin-bottom: ${_.label};"><strong>Designing in Figma</strong> — How designers work with the color system</li>
        <li style="margin-bottom: ${_.label};"><strong>Brand colors</strong> — Primary, secondary, accent palettes per theme</li>
        <li style="margin-bottom: ${_.label};"><strong>Neutral colors</strong> — Grayscale palette for UI structure</li>
        <li style="margin-bottom: ${_.label};"><strong>Utility colors</strong> — Success, error, caution, and focus ring</li>
        <li style="margin-bottom: ${_.label};"><strong>State styling</strong> — Hover, pressed, disabled, and readonly patterns</li>
      </ul>
    </div>
  `},O={name:`Designing in Figma`,render:()=>t`
    <div data-theme=${h} data-mode=${m()} style=${p}>
      <h1 style="${d.h1}">Designing in Figma</h1>
      <p style="${d.body} ${l.muted} max-width: ${f};">
        The color system maps directly to Figma Variables. Designers work with the same 12-step scale, ensuring design-to-code parity.
      </p>

      <hr style="${E}" />

      <h2 style="${d.h2}">Variable structure</h2>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.content};">
        Figma Variables mirror the CSS token structure:
      </p>
      <pre style="${l.pre}">
Color/
├── neutral/
│   ├── 1  →  #fcfcfc
│   ├── 2  →  #f9f9f9
│   └── ...12
├── primary/
│   ├── 1  →  (theme-dependent)
│   └── ...12
├── secondary/
│   └── ...12
├── accent/
│   └── ...12
└── utility/
    ├── success/muted
    ├── success/emphasis
    └── ...</pre>

      <hr style="${E}" />

      <h2 style="${d.h2}">Theme modes</h2>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.content};">
        Create Variable Modes for each brand:
      </p>
      <ul style="${d.body} max-width: ${f}; margin: 0; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${_.label};"><strong>${a.default}</strong> — Neutral (development fallback)</li>
        <li style="margin-bottom: ${_.label};"><strong>${a.maximus}</strong> — Pantone Violet primary</li>
        <li style="margin-bottom: ${_.label};"><strong>${a.ves}</strong> — VA Blue primary</li>
        <li style="margin-bottom: ${_.label};"><strong>[Client]</strong> — Per-engagement brand</li>
      </ul>

      <hr style="${E}" />

      <h2 style="${d.h2}">Step selection guide</h2>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.content};">
        When designing components, use step numbers consistently:
      </p>
      <table style="${l.table} margin-bottom: ${_.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">Element</th>
            <th style="${l.th}">Normal</th>
            <th style="${l.th}">Hover</th>
            <th style="${l.th}">Pressed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td}">List item / Card</td>
            <td style="${l.td} ${d.monoSm}">neutral-3</td>
            <td style="${l.td} ${d.monoSm}">neutral-4</td>
            <td style="${l.td} ${d.monoSm}">neutral-5</td>
          </tr>
          <tr>
            <td style="${l.td}">Primary button</td>
            <td style="${l.td} ${d.monoSm}">primary-9</td>
            <td style="${l.td} ${d.monoSm}">primary-10</td>
            <td style="${l.td} ${d.monoSm}">—</td>
          </tr>
          <tr>
            <td style="${l.td}">Ghost button</td>
            <td style="${l.td} ${d.monoSm}">transparent</td>
            <td style="${l.td} ${d.monoSm}">primary-3</td>
            <td style="${l.td} ${d.monoSm}">primary-4</td>
          </tr>
          <tr>
            <td style="${l.td}">Card border</td>
            <td style="${l.td} ${d.monoSm}">neutral-6</td>
            <td style="${l.td} ${d.monoSm}">—</td>
            <td style="${l.td} ${d.monoSm}">—</td>
          </tr>
          <tr>
            <td style="${l.td}">Input border</td>
            <td style="${l.td} ${d.monoSm}">neutral-7</td>
            <td style="${l.td} ${d.monoSm}">neutral-8</td>
            <td style="${l.td} ${d.monoSm}">—</td>
          </tr>
          <tr>
            <td style="${l.td}">Body text</td>
            <td style="${l.td} ${d.monoSm}">neutral-12</td>
            <td style="${l.td} ${d.monoSm}">—</td>
            <td style="${l.td} ${d.monoSm}">—</td>
          </tr>
          <tr>
            <td style="${l.td}">Placeholder text</td>
            <td style="${l.td} ${d.monoSm}">neutral-11</td>
            <td style="${l.td} ${d.monoSm}">—</td>
            <td style="${l.td} ${d.monoSm}">—</td>
          </tr>
        </tbody>
      </table>

      <hr style="${E}" />

      <h2 style="${d.h2}">Handoff notes</h2>
      <ul style="${d.body} max-width: ${f}; margin: 0; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${_.label};">Always reference Variables, never hardcode hex values</li>
        <li style="margin-bottom: ${_.label};">Step numbers in Figma = step numbers in CSS (1:1 mapping)</li>
        <li style="margin-bottom: ${_.label};">Use the theme Mode to preview how designs render across brands</li>
        <li style="margin-bottom: ${_.label};">Focus rings are structural — don't customize per brand</li>
      </ul>
    </div>
  `},k={1:`Page`,2:`Surface`,3:`Element`,4:`Element hovered`,5:`Element pressed`,6:`Separator`,7:`Border`,8:`Border hovered`,9:`Solid (anchor)`,10:`Solid hovered`,11:`Text muted`,12:`Text`},A=e=>{let{label:n,bg:r,color:i}=y(1);return t`<span class="tier-badge" data-palette="${e}" style="${b} background: ${r}; color: ${i};">${n}</span>`},j=(e,n)=>t`
  <div style="margin-bottom: ${_.subsection};" data-palette="${n}">
    <h3 style="${d.h3} display: flex; align-items: center; gap: ${_.label};">
      ${e}
      ${A(n)}
    </h3>
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: ${_.label};">
      ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
        <div class="color-swatch" data-token="${n}-${e}" style="height: 48px; background: var(${n}-${e}, transparent); border-radius: 4px;${e<=2?` border: 1px solid rgba(128,128,128,0.2);`:``}"></div>
      `)}
    </div>
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
      ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>{let n=e===9;return t`
        <div style="text-align: center;" data-step="${e}">
          <div style="${d.monoSm}${n?` font-weight: 700;`:` ${l.muted}`}">${e}</div>
          ${n?t`<div style="${d.caption} line-height: 1; margin-top: 1px;">▲</div>`:``}
        </div>
      `})}
    </div>
  </div>
`,M=(e,n)=>t`
  <div style="margin-bottom: ${_.subsection};">
    <h3 style="${d.h3}">${e}</h3>
    <table style="${l.table}" data-palette="${n}">
      <thead>
        <tr>
          <th style="${l.th} width: 64px;"></th>
          <th style="${l.th} width: 50px;">Step</th>
          <th style="${l.th}">Token</th>
          <th style="${l.th} width: 90px;">Hexcode</th>
          <th style="${l.th}">Purpose</th>
        </tr>
      </thead>
      <tbody>
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>{let r=e===9,i=r?` border: var(--border-width-md) solid var(--color-text-default); box-shadow: 0 0 0 1px rgba(255,255,255,0.8) inset;`:e<=2?` border: 1px solid rgba(128,128,128,0.2);`:``;return t`
          <tr style="${r?` background: var(--color-surface-sunken);`:``}">
            <td style="${l.td}">
              <div class="color-swatch" data-token="${n}-${e}" style="width: 48px; height: 32px; border-radius: 4px; background: var(${n}-${e}, transparent);${i}"></div>
            </td>
            <td style="${l.td} ${d.monoSm}${r?` font-weight: 700;`:``}">${e}</td>
            <td style="${l.td} ${d.monoSm}${r?` font-weight: 600;`:``}">${n}-${e}</td>
            <td style="${l.td} ${d.monoSm} ${l.muted}${r?` font-weight: 600;`:``}" class="hex-value" data-token="${n}-${e}">—</td>
            <td style="${l.td}${r?` font-weight: 600;`:` ${l.muted}`}">${k[e]}</td>
          </tr>
        `})}
      </tbody>
    </table>
  </div>
`,N=(e,n)=>t`
  <div style="margin-bottom: ${_.subsection};" data-palette="${n}">
    <h3 style="${d.h3} display: flex; align-items: center; gap: ${_.label};">
      ${e}
      ${A(n)}
    </h3>
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: ${_.label};">
      ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
        <div class="color-swatch-dark" data-token="${n}-${e}" style="height: 48px; background: var(${n}-${e}, transparent); border-radius: 4px;${e<=3?` border: 1px solid rgba(255,255,255,0.15);`:``}"></div>
      `)}
    </div>
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
      ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>{let n=e===9;return t`
        <div style="text-align: center;" data-step="${e}">
          <div style="${d.monoSm}${n?` font-weight: 700;`:` ${l.muted}`}">${e}</div>
          ${n?t`<div style="${d.caption} line-height: 1; margin-top: 1px;">▲</div>`:``}
        </div>
      `})}
    </div>
  </div>
`,P=(e,n)=>t`
  <div style="margin-bottom: ${_.subsection};">
    <h3 style="${d.h3}">${e}</h3>
    <table style="${l.table}" data-palette="${n}">
      <thead>
        <tr>
          <th style="${l.th} width: 64px;"></th>
          <th style="${l.th} width: 50px;">Step</th>
          <th style="${l.th}">Token</th>
          <th style="${l.th} width: 90px;">Hexcode</th>
          <th style="${l.th}">Purpose</th>
        </tr>
      </thead>
      <tbody>
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>{let r=e===9,i=r?` border: var(--border-width-md) solid var(--color-text-default); box-shadow: 0 0 0 1px rgba(0,0,0,0.3) inset;`:e<=3?` border: 1px solid rgba(255,255,255,0.15);`:``;return t`
          <tr style="${r?` background: var(--color-surface-sunken);`:``}">
            <td style="${l.td}">
              <div class="color-swatch-dark" data-token="${n}-${e}" style="width: 48px; height: 32px; border-radius: 4px; background: var(${n}-${e}, transparent);${i}"></div>
            </td>
            <td style="${l.td} ${d.monoSm}${r?` font-weight: 700;`:``}">${e}</td>
            <td style="${l.td} ${d.monoSm}${r?` font-weight: 600;`:``}">${n}-${e}</td>
            <td style="${l.td} ${d.monoSm} ${l.muted}${r?` font-weight: 600;`:``}" class="hex-value-dark" data-token="${n}-${e}">—</td>
            <td style="${l.td}${r?` font-weight: 600;`:` ${l.muted}`}">${k[e]}</td>
          </tr>
        `})}
      </tbody>
    </table>
  </div>
`,F={name:`Brand Colors`,render:()=>{let e=[{value:`maximus`,label:a.maximus,description:`Violet primary, slate secondary, green accent`},{value:`dow`,label:a.dow,description:`DOW Blue primary, Steel Blue secondary, green accent`},{value:`ves`,label:a.ves,description:`VA Blue primary, gold secondary, teal accent`},{value:`uss-oh-dvs`,label:a[`uss-oh-dvs`],description:`Buckeye Blue primary, Earth Brown secondary, Cardinal Red accent`}],n=Object.fromEntries(e.map(({value:e})=>{let t=c[e];return[e,{"--color-primary":t.primary,"--color-secondary":t.secondary,"--color-accent":t.accent}]}));return t(w||=S([`
      <div id="brand-colors-page" data-theme=`,` data-mode=`,` style=`,`>
        <h1 style="`,`">Brand Colors</h1>
        <p style="`,` `,` max-width: `,`; margin-bottom: `,`;">
          Brand colors define the visual identity for each client engagement. Each brand provides three palettes — <strong>primary</strong>, <strong>secondary</strong>, and <strong>accent</strong>.
        </p>

        <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: `,`;">
          <div slot="body-content">
            <p style="`,`">
              <strong>Theme-aware:</strong> The swatches below use CSS custom properties. Select a theme to see how palettes change per brand.
            </p>
          </div>
        </mms-card>

        <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: `,`;">
          <div slot="body-content">
            <h3 style="`,`">Palette tier classification</h3>
            <p style="`,` `,` margin-bottom: `,`;">
              Not all brand colors can be used for all purposes. Each palette is classified into a tier based on WCAG accessibility constraints:
            </p>
            <ul style="`,` `,` margin: 0; padding-left: var(--spacing-lg1);">
              <li><strong>Tier 1 (Full):</strong> All 12 steps — buttons, inputs, all interactive components</li>
              <li><strong>Tier 2 (Text + Surface):</strong> Steps 1, 2, 9, 11, 12 — branded text and tinted backgrounds only</li>
              <li><strong>Tier 3 (Decorative):</strong> Steps 1, 2, 9 — tinted surfaces and decorative fills only</li>
            </ul>
          </div>
        </mms-card>

        <div style="margin-bottom: `,`;">
          <mms-select
            id="theme-selector"
            label="Select Theme"
            style="min-width: 240px;"
            .value=`,`
            .options=`,`
          ></mms-select>
          <p id="theme-description" style="`,` `,` margin-top: `,`;">Violet primary, slate secondary, green accent</p>
        </div>

        <hr style="`,`" />

        <h2 style="`,`">Light mode</h2>
        <div id="brand-palettes" data-theme="maximus" style="`,` background: #ffffff; color: var(--color-text-default); padding: var(--spacing-lg1); border-radius: var(--radius-md); border: var(--border-width-xs) solid var(--color-border-subtle);">
          `,`
          `,`
          `,`
        </div>

        <hr style="`,`" />

        <h2 style="`,`">Dark mode</h2>
        <div id="brand-palettes-dark" data-theme="maximus" data-mode="dark" style="`,` background: #111111; color: var(--color-text-default); padding: var(--spacing-lg1); border-radius: var(--radius-md);">
          `,`
          `,`
          `,`
        </div>

        <hr style="`,`" />

        <h2 style="`,`">On-color text</h2>
        <p style="`,` `,` max-width: `,`; margin-bottom: `,`;">
          Text rendered on Step 9 solid backgrounds uses dedicated on-color tokens to ensure WCAG AA contrast (4.5:1).
        </p>
        <div id="on-color-examples" data-theme="maximus" style="`,` display: flex; gap: `,`; flex-wrap: wrap;">
          <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--color-primary-9);">
            <span style="`,` color: var(--color-text-on-primary); font-weight: 600;">Text on Primary</span>
          </div>
          <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--color-secondary-9);">
            <span style="`,` color: var(--color-text-on-secondary); font-weight: 600;">Text on Secondary</span>
          </div>
          <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--color-accent-9);">
            <span style="`,` color: var(--color-text-on-accent); font-weight: 600;">Text on Accent</span>
          </div>
        </div>

        <hr style="`,`" />

        <h2 style="`,`">Token reference — light mode</h2>
        <div id="palette-tables" data-theme="maximus" style="`,` background: #ffffff; color: var(--color-text-default); padding: var(--spacing-lg1); border-radius: var(--radius-md); border: var(--border-width-xs) solid var(--color-border-subtle);">
          `,`
          `,`
          `,`
        </div>

        <hr style="`,`" />

        <h2 style="`,`">Token reference — dark mode</h2>
        <div id="palette-tables-dark" data-theme="maximus" data-mode="dark" style="`,` background: #111111; color: var(--color-text-default); padding: var(--spacing-lg1); border-radius: var(--radius-md);">
          `,`
          `,`
          `,`
        </div>

        <hr style="`,`" />

        <h2 style="`,`">Usage</h2>
        <pre style="`,` margin: 0;">
/* Import a theme package */
npm install @mms/theme-ves

/* In your entry CSS */
@import '@mms/theme-ves/index.css';

/* Use step-based tokens */
.button-primary {
  background: var(--color-primary-9);
  color: var(--color-text-on-primary);
}
.button-primary:hover {
  background: var(--color-primary-10);
}</pre>
      </div>

      <script type="module">
        const themes = `,`;
        const selector = document.getElementById('theme-selector');
        const description = document.getElementById('theme-description');

        // Tier classification is computed in render() from PALETTE_TIERS
        // (theme-constraints.ts) and serialized here — not restated by hand.
        // Tier 1 (Full): All 12 steps
        // Tier 2 (Text + Surface): Steps 1, 2, 9, 11, 12 only
        // Tier 3 (Decorative): Steps 1, 2, 9 only
        const paletteTiers = `,`;

        // Which steps are visible per tier
        const tierVisibleSteps = {
          1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],  // Full
          2: [1, 2, 9, 11, 12],                        // Text + Surface
          3: [1, 2, 9],                                // Decorative
        };

        // Get all themed containers
        const lightPalettes = document.getElementById('brand-palettes');
        const darkPalettes = document.getElementById('brand-palettes-dark');
        const lightTables = document.getElementById('palette-tables');
        const darkTables = document.getElementById('palette-tables-dark');
        const onColorExamples = document.getElementById('on-color-examples');

        // Convert RGB to hex
        const rgbToHex = (rgb) => {
          const match = rgb.match(/rgb\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)/);
          if (!match) return rgb;
          const [, r, g, b] = match;
          return '#' + [r, g, b].map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
        };

        // Check if a color value is undefined (transparent/empty)
        const isUndefined = (bgColor) => {
          return !bgColor || 
                 bgColor === 'rgba(0, 0, 0, 0)' || 
                 bgColor === 'transparent' ||
                 bgColor === '';
        };

        // Update all hex value cells (light mode)
        const updateHexValues = () => {
          const hexCells = document.querySelectorAll('.hex-value[data-token]');
          hexCells.forEach(cell => {
            const token = cell.getAttribute('data-token');
            const swatch = document.querySelector('.color-swatch[data-token="' + token + '"]');
            if (swatch) {
              const computed = getComputedStyle(swatch).backgroundColor;
              if (isUndefined(computed)) {
                cell.textContent = '—';
              } else {
                cell.textContent = rgbToHex(computed).toUpperCase();
              }
            }
          });
        };

        // Update all hex value cells (dark mode)
        const updateHexValuesDark = () => {
          const hexCells = document.querySelectorAll('.hex-value-dark[data-token]');
          hexCells.forEach(cell => {
            const token = cell.getAttribute('data-token');
            const swatch = document.querySelector('.color-swatch-dark[data-token="' + token + '"]');
            if (swatch) {
              const computed = getComputedStyle(swatch).backgroundColor;
              if (isUndefined(computed)) {
                cell.textContent = '—';
              } else {
                cell.textContent = rgbToHex(computed).toUpperCase();
              }
            }
          });
        };

        // Update theme on all containers
        const updateTheme = (themeName) => {
          [lightPalettes, lightTables, onColorExamples].forEach(el => {
            if (el) el.setAttribute('data-theme', themeName);
          });
          [darkPalettes, darkTables].forEach(el => {
            if (el) el.setAttribute('data-theme', themeName);
          });
          // Update tier-based visibility
          updateTierVisibility(themeName);
        };

        // Show/hide steps based on palette tier
        const updateTierVisibility = (themeName) => {
          const tiers = paletteTiers[themeName] || {};
          
          // For each palette container, check its tier
          document.querySelectorAll('[data-palette]').forEach(container => {
            const palette = container.getAttribute('data-palette');
            const tier = tiers[palette] || 1; // Default to full if not specified
            const visibleSteps = tierVisibleSteps[tier];
            
            // Hide/show step cells based on tier
            container.querySelectorAll('[data-step]').forEach(cell => {
              const step = parseInt(cell.getAttribute('data-step'), 10);
              cell.style.visibility = visibleSteps.includes(step) ? 'visible' : 'hidden';
            });
            
            // For swatches in the scale grid
            container.querySelectorAll('.color-swatch, .color-swatch-dark').forEach(swatch => {
              const token = swatch.getAttribute('data-token');
              if (token) {
                const step = parseInt(token.split('-').pop(), 10);
                swatch.style.visibility = visibleSteps.includes(step) ? 'visible' : 'hidden';
              }
            });
          });
          
          // Also handle tables
          document.querySelectorAll('table[data-palette]').forEach(table => {
            const palette = table.getAttribute('data-palette');
            const tier = tiers[palette] || 1;
            const visibleSteps = tierVisibleSteps[tier];
            
            table.querySelectorAll('tbody tr').forEach((row, idx) => {
              const step = idx + 1;
              row.style.display = visibleSteps.includes(step) ? '' : 'none';
            });
          });
        };

        // Tier badge: each tier maps to a flat chip (same look as the outcome chips)
        const tierStyles = `,`;

        // Update tier badges based on theme
        const updateTierBadges = (themeName) => {
          const tiers = paletteTiers[themeName] || {};
          
          document.querySelectorAll('.tier-badge[data-palette]').forEach(badge => {
            const palette = badge.getAttribute('data-palette');
            const tier = tiers[palette] || 1;
            const style = tierStyles[tier];
            
            badge.textContent = style.label;
            badge.style.background = style.bg;
            badge.style.color = style.color;
          });
        };

        // Initial update after render
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            updateHexValues();
            updateHexValuesDark();
            updateTierVisibility('maximus'); // Initial theme
            updateTierBadges('maximus');     // Initial tier badges
          });
        });

        if (selector && description) {
          selector.addEventListener('change', (e) => {
            const value = e.target.value;
            const theme = themes.find(t => t.value === value);

            if (value) {
              updateTheme(value);
              updateTierBadges(value);
            }

            if (theme) {
              description.textContent = theme.description;
            }

            // Update hex values after theme change
            requestAnimationFrame(() => {
              updateHexValues();
              updateHexValuesDark();
            });
          });
        }
      <\/script>
    `],[`
      <div id="brand-colors-page" data-theme=`,` data-mode=`,` style=`,`>
        <h1 style="`,`">Brand Colors</h1>
        <p style="`,` `,` max-width: `,`; margin-bottom: `,`;">
          Brand colors define the visual identity for each client engagement. Each brand provides three palettes — <strong>primary</strong>, <strong>secondary</strong>, and <strong>accent</strong>.
        </p>

        <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: `,`;">
          <div slot="body-content">
            <p style="`,`">
              <strong>Theme-aware:</strong> The swatches below use CSS custom properties. Select a theme to see how palettes change per brand.
            </p>
          </div>
        </mms-card>

        <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: `,`;">
          <div slot="body-content">
            <h3 style="`,`">Palette tier classification</h3>
            <p style="`,` `,` margin-bottom: `,`;">
              Not all brand colors can be used for all purposes. Each palette is classified into a tier based on WCAG accessibility constraints:
            </p>
            <ul style="`,` `,` margin: 0; padding-left: var(--spacing-lg1);">
              <li><strong>Tier 1 (Full):</strong> All 12 steps — buttons, inputs, all interactive components</li>
              <li><strong>Tier 2 (Text + Surface):</strong> Steps 1, 2, 9, 11, 12 — branded text and tinted backgrounds only</li>
              <li><strong>Tier 3 (Decorative):</strong> Steps 1, 2, 9 — tinted surfaces and decorative fills only</li>
            </ul>
          </div>
        </mms-card>

        <div style="margin-bottom: `,`;">
          <mms-select
            id="theme-selector"
            label="Select Theme"
            style="min-width: 240px;"
            .value=`,`
            .options=`,`
          ></mms-select>
          <p id="theme-description" style="`,` `,` margin-top: `,`;">Violet primary, slate secondary, green accent</p>
        </div>

        <hr style="`,`" />

        <h2 style="`,`">Light mode</h2>
        <div id="brand-palettes" data-theme="maximus" style="`,` background: #ffffff; color: var(--color-text-default); padding: var(--spacing-lg1); border-radius: var(--radius-md); border: var(--border-width-xs) solid var(--color-border-subtle);">
          `,`
          `,`
          `,`
        </div>

        <hr style="`,`" />

        <h2 style="`,`">Dark mode</h2>
        <div id="brand-palettes-dark" data-theme="maximus" data-mode="dark" style="`,` background: #111111; color: var(--color-text-default); padding: var(--spacing-lg1); border-radius: var(--radius-md);">
          `,`
          `,`
          `,`
        </div>

        <hr style="`,`" />

        <h2 style="`,`">On-color text</h2>
        <p style="`,` `,` max-width: `,`; margin-bottom: `,`;">
          Text rendered on Step 9 solid backgrounds uses dedicated on-color tokens to ensure WCAG AA contrast (4.5:1).
        </p>
        <div id="on-color-examples" data-theme="maximus" style="`,` display: flex; gap: `,`; flex-wrap: wrap;">
          <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--color-primary-9);">
            <span style="`,` color: var(--color-text-on-primary); font-weight: 600;">Text on Primary</span>
          </div>
          <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--color-secondary-9);">
            <span style="`,` color: var(--color-text-on-secondary); font-weight: 600;">Text on Secondary</span>
          </div>
          <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--color-accent-9);">
            <span style="`,` color: var(--color-text-on-accent); font-weight: 600;">Text on Accent</span>
          </div>
        </div>

        <hr style="`,`" />

        <h2 style="`,`">Token reference — light mode</h2>
        <div id="palette-tables" data-theme="maximus" style="`,` background: #ffffff; color: var(--color-text-default); padding: var(--spacing-lg1); border-radius: var(--radius-md); border: var(--border-width-xs) solid var(--color-border-subtle);">
          `,`
          `,`
          `,`
        </div>

        <hr style="`,`" />

        <h2 style="`,`">Token reference — dark mode</h2>
        <div id="palette-tables-dark" data-theme="maximus" data-mode="dark" style="`,` background: #111111; color: var(--color-text-default); padding: var(--spacing-lg1); border-radius: var(--radius-md);">
          `,`
          `,`
          `,`
        </div>

        <hr style="`,`" />

        <h2 style="`,`">Usage</h2>
        <pre style="`,` margin: 0;">
/* Import a theme package */
npm install @mms/theme-ves

/* In your entry CSS */
@import '@mms/theme-ves/index.css';

/* Use step-based tokens */
.button-primary {
  background: var(--color-primary-9);
  color: var(--color-text-on-primary);
}
.button-primary:hover {
  background: var(--color-primary-10);
}</pre>
      </div>

      <script type="module">
        const themes = `,`;
        const selector = document.getElementById('theme-selector');
        const description = document.getElementById('theme-description');

        // Tier classification is computed in render() from PALETTE_TIERS
        // (theme-constraints.ts) and serialized here — not restated by hand.
        // Tier 1 (Full): All 12 steps
        // Tier 2 (Text + Surface): Steps 1, 2, 9, 11, 12 only
        // Tier 3 (Decorative): Steps 1, 2, 9 only
        const paletteTiers = `,`;

        // Which steps are visible per tier
        const tierVisibleSteps = {
          1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],  // Full
          2: [1, 2, 9, 11, 12],                        // Text + Surface
          3: [1, 2, 9],                                // Decorative
        };

        // Get all themed containers
        const lightPalettes = document.getElementById('brand-palettes');
        const darkPalettes = document.getElementById('brand-palettes-dark');
        const lightTables = document.getElementById('palette-tables');
        const darkTables = document.getElementById('palette-tables-dark');
        const onColorExamples = document.getElementById('on-color-examples');

        // Convert RGB to hex
        const rgbToHex = (rgb) => {
          const match = rgb.match(/rgb\\\\(\\\\s*(\\\\d+)\\\\s*,\\\\s*(\\\\d+)\\\\s*,\\\\s*(\\\\d+)\\\\s*\\\\)/);
          if (!match) return rgb;
          const [, r, g, b] = match;
          return '#' + [r, g, b].map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
        };

        // Check if a color value is undefined (transparent/empty)
        const isUndefined = (bgColor) => {
          return !bgColor || 
                 bgColor === 'rgba(0, 0, 0, 0)' || 
                 bgColor === 'transparent' ||
                 bgColor === '';
        };

        // Update all hex value cells (light mode)
        const updateHexValues = () => {
          const hexCells = document.querySelectorAll('.hex-value[data-token]');
          hexCells.forEach(cell => {
            const token = cell.getAttribute('data-token');
            const swatch = document.querySelector('.color-swatch[data-token="' + token + '"]');
            if (swatch) {
              const computed = getComputedStyle(swatch).backgroundColor;
              if (isUndefined(computed)) {
                cell.textContent = '—';
              } else {
                cell.textContent = rgbToHex(computed).toUpperCase();
              }
            }
          });
        };

        // Update all hex value cells (dark mode)
        const updateHexValuesDark = () => {
          const hexCells = document.querySelectorAll('.hex-value-dark[data-token]');
          hexCells.forEach(cell => {
            const token = cell.getAttribute('data-token');
            const swatch = document.querySelector('.color-swatch-dark[data-token="' + token + '"]');
            if (swatch) {
              const computed = getComputedStyle(swatch).backgroundColor;
              if (isUndefined(computed)) {
                cell.textContent = '—';
              } else {
                cell.textContent = rgbToHex(computed).toUpperCase();
              }
            }
          });
        };

        // Update theme on all containers
        const updateTheme = (themeName) => {
          [lightPalettes, lightTables, onColorExamples].forEach(el => {
            if (el) el.setAttribute('data-theme', themeName);
          });
          [darkPalettes, darkTables].forEach(el => {
            if (el) el.setAttribute('data-theme', themeName);
          });
          // Update tier-based visibility
          updateTierVisibility(themeName);
        };

        // Show/hide steps based on palette tier
        const updateTierVisibility = (themeName) => {
          const tiers = paletteTiers[themeName] || {};
          
          // For each palette container, check its tier
          document.querySelectorAll('[data-palette]').forEach(container => {
            const palette = container.getAttribute('data-palette');
            const tier = tiers[palette] || 1; // Default to full if not specified
            const visibleSteps = tierVisibleSteps[tier];
            
            // Hide/show step cells based on tier
            container.querySelectorAll('[data-step]').forEach(cell => {
              const step = parseInt(cell.getAttribute('data-step'), 10);
              cell.style.visibility = visibleSteps.includes(step) ? 'visible' : 'hidden';
            });
            
            // For swatches in the scale grid
            container.querySelectorAll('.color-swatch, .color-swatch-dark').forEach(swatch => {
              const token = swatch.getAttribute('data-token');
              if (token) {
                const step = parseInt(token.split('-').pop(), 10);
                swatch.style.visibility = visibleSteps.includes(step) ? 'visible' : 'hidden';
              }
            });
          });
          
          // Also handle tables
          document.querySelectorAll('table[data-palette]').forEach(table => {
            const palette = table.getAttribute('data-palette');
            const tier = tiers[palette] || 1;
            const visibleSteps = tierVisibleSteps[tier];
            
            table.querySelectorAll('tbody tr').forEach((row, idx) => {
              const step = idx + 1;
              row.style.display = visibleSteps.includes(step) ? '' : 'none';
            });
          });
        };

        // Tier badge: each tier maps to a flat chip (same look as the outcome chips)
        const tierStyles = `,`;

        // Update tier badges based on theme
        const updateTierBadges = (themeName) => {
          const tiers = paletteTiers[themeName] || {};
          
          document.querySelectorAll('.tier-badge[data-palette]').forEach(badge => {
            const palette = badge.getAttribute('data-palette');
            const tier = tiers[palette] || 1;
            const style = tierStyles[tier];
            
            badge.textContent = style.label;
            badge.style.background = style.bg;
            badge.style.color = style.color;
          });
        };

        // Initial update after render
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            updateHexValues();
            updateHexValuesDark();
            updateTierVisibility('maximus'); // Initial theme
            updateTierBadges('maximus');     // Initial tier badges
          });
        });

        if (selector && description) {
          selector.addEventListener('change', (e) => {
            const value = e.target.value;
            const theme = themes.find(t => t.value === value);

            if (value) {
              updateTheme(value);
              updateTierBadges(value);
            }

            if (theme) {
              description.textContent = theme.description;
            }

            // Update hex values after theme change
            requestAnimationFrame(() => {
              updateHexValues();
              updateHexValuesDark();
            });
          });
        }
      <\/script>
    `]),h,m(),p,d.h1,d.body,l.muted,f,_.content,_.content,d.bodySm,_.subsection,d.h3,d.caption,l.muted,_.content,d.caption,l.muted,_.subsection,`maximus`,e.map(e=>({value:e.value,label:e.label})),d.caption,l.muted,_.label,E,d.h2,g,j(`Primary`,`--color-primary`),j(`Secondary`,`--color-secondary`),j(`Accent`,`--color-accent`),E,d.h2,g,N(`Primary`,`--color-primary`),N(`Secondary`,`--color-secondary`),N(`Accent`,`--color-accent`),E,d.h2,d.body,l.muted,f,_.content,g,_.content,d.body,d.body,d.body,E,d.h2,g,M(`Primary palette`,`--color-primary`),M(`Secondary palette`,`--color-secondary`),M(`Accent palette`,`--color-accent`),E,d.h2,g,P(`Primary palette`,`--color-primary`),P(`Secondary palette`,`--color-secondary`),P(`Accent palette`,`--color-accent`),E,d.h2,l.pre,JSON.stringify(e),JSON.stringify(n),JSON.stringify({1:y(1),2:y(2),3:y(3)}))}},I={name:`State Styling`,render:()=>t`
    <div data-theme=${h} data-mode=${m()} style=${p}>
      <h1 style="${d.h1}">State Styling</h1>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.content};">
        State styles provide visual feedback for interactive elements. They communicate what's happening — whether an element is being hovered, pressed, focused, disabled, or in a validation state.
      </p>
      <ul style="${d.body} ${l.muted} max-width: ${f}; margin: 0; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${_.label};"><strong>Interaction feedback</strong> — Confirms "I see your action" (hover, pressed, focus)</li>
        <li style="margin-bottom: ${_.label};"><strong>Status communication</strong> — Explains "This is the current state" (disabled, error, success)</li>
      </ul>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- SCOPE                                                               -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <hr style="${E}" />

      <h2 style="${d.h2}">Scope</h2>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.content};">
        This token set covers color changes for interactive states. It does not cover animation, transitions, or non-color feedback.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: ${_.content}; max-width: ${f};">
        <div style="${l.panel}">
          <h3 style="${d.h3}">In scope</h3>
          <ul style="${d.caption} ${l.muted} margin: 0; padding-left: var(--spacing-lg1);">
            <li>Hover states</li>
            <li>Pressed/active states</li>
            <li>Focus indicators</li>
            <li>Disabled appearance</li>
            <li>Validation states (error, success, caution)</li>
            <li>Selected/active surface states</li>
          </ul>
        </div>
        <div style="${l.panel}">
          <h3 style="${d.h3}">Out of scope</h3>
          <ul style="${d.caption} ${l.muted} margin: 0; padding-left: var(--spacing-lg1);">
            <li>Readonly (no special tokens — uses normal colors)</li>
            <li>Loading (animation concern, not color)</li>
            <li>Drag/drop (interaction pattern, not color)</li>
            <li>Transitions/animations (motion tokens)</li>
          </ul>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 3. ARCHITECTURE                                                     -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <hr style="${E}" />

      <h2 style="${d.h2}">Architecture</h2>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.content};">
        State tokens live in the <strong>semantic layer</strong>. They reference the 12-step color scale via <code style="${d.monoSm}">var()</code>, which means they automatically adapt to light/dark mode and brand themes.
      </p>

      <h3 style="${d.h3}">Three patterns</h3>
      <table style="${l.table} margin-bottom: ${_.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">Pattern</th>
            <th style="${l.th}">Used For</th>
            <th style="${l.th}">How It Works</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td} font-weight: 500;">Step-Shifting</td>
            <td style="${l.td}">Hover, pressed</td>
            <td style="${l.td} ${l.muted}">Move one step up in the scale (9→10→11)</td>
          </tr>
          <tr>
            <td style="${l.td} font-weight: 500;">Exit to Neutral</td>
            <td style="${l.td}">Disabled</td>
            <td style="${l.td} ${l.muted}">Leave brand scale entirely, use neutral grays</td>
          </tr>
          <tr>
            <td style="${l.td} font-weight: 500;">Utility Colors</td>
            <td style="${l.td}">Error, success, caution, focus</td>
            <td style="${l.td} ${l.muted}">Use structural utility tokens (fixed across themes)</td>
          </tr>
        </tbody>
      </table>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 4. TOKEN REFERENCE                                                  -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <hr style="${E}" />

      <h2 style="${d.h2}">Token reference</h2>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.content};">
        Complete list of semantic state tokens. All tokens reference <code style="${d.monoSm}">var(--color-*)</code> and adapt automatically to theme.
      </p>

      <h3 style="${d.h3}">Action tokens</h3>
      <p style="${d.caption} ${l.muted} margin-bottom: ${_.content};">For buttons and primary interactive elements</p>
      <table style="${l.table} margin-bottom: ${_.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">Token</th>
            <th style="${l.th}">References</th>
            <th style="${l.th}">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-action-solid</td>
            <td style="${l.td} ${d.monoSm}">primary-9</td>
            <td style="${l.td} ${l.muted}">Primary button default</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-action-solid-hover</td>
            <td style="${l.td} ${d.monoSm}">primary-10</td>
            <td style="${l.td} ${l.muted}">Primary button hover</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-action-solid-pressed</td>
            <td style="${l.td} ${d.monoSm}">primary-11</td>
            <td style="${l.td} ${l.muted}">Primary button pressed</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-action-subtle</td>
            <td style="${l.td} ${d.monoSm}">primary-3</td>
            <td style="${l.td} ${l.muted}">Subtle tinted fill, default</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-action-subtle-hover</td>
            <td style="${l.td} ${d.monoSm}">primary-4</td>
            <td style="${l.td} ${l.muted}">Subtle tinted fill, hover</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-action-subtle-active</td>
            <td style="${l.td} ${d.monoSm}">primary-5</td>
            <td style="${l.td} ${l.muted}">Subtle tinted fill, pressed</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${d.h3}">Surface tokens</h3>
      <p style="${d.caption} ${l.muted} margin-bottom: ${_.content};">For table rows, list items, card hover states</p>
      <table style="${l.table} margin-bottom: ${_.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">Token</th>
            <th style="${l.th}">References</th>
            <th style="${l.th}">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-surface-hover</td>
            <td style="${l.td} ${d.monoSm}">neutral-3</td>
            <td style="${l.td} ${l.muted}">Table row hover, list item hover</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-surface-active</td>
            <td style="${l.td} ${d.monoSm}">neutral-4</td>
            <td style="${l.td} ${l.muted}">Selected row, active item</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-surface-brand-hover</td>
            <td style="${l.td} ${d.monoSm}">primary-3</td>
            <td style="${l.td} ${l.muted}">Hover on brand-tinted surface</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-surface-brand-active</td>
            <td style="${l.td} ${d.monoSm}">primary-4</td>
            <td style="${l.td} ${l.muted}">Selected on brand surface</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${d.h3}">Scrim tokens</h3>
      <p style="${d.caption} ${l.muted} margin-bottom: ${_.content};">For the layer behind a dialog, or over a photo or page content</p>
      <table style="${l.table} margin-bottom: ${_.content};">
        <thead>
          <tr>
            <th style="${l.th}">Token</th>
            <th style="${l.th}">References</th>
            <th style="${l.th}">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td} white-space: nowrap; ${d.monoSm}">--color-overlay-scrim</td>
            <td style="${l.td} white-space: nowrap; ${d.monoSm}">light: rgba(26,26,26,0.7)<br>dark: rgba(77,77,77,0.7)</td>
            <td style="${l.td} ${l.muted}">Modal and drawer backdrop — adapts to the page's mode</td>
          </tr>
          <tr>
            <td style="${l.td} white-space: nowrap; ${d.monoSm}">--color-overlay-scrim-dark</td>
            <td style="${l.td} white-space: nowrap; ${d.monoSm}">rgba(26,26,26,0.7)</td>
            <td style="${l.td} ${l.muted}">Hero image and page spinner, white text — fixed in every theme and mode</td>
          </tr>
          <tr>
            <td style="${l.td} white-space: nowrap; ${d.monoSm}">--color-overlay-scrim-light</td>
            <td style="${l.td} white-space: nowrap; ${d.monoSm}">rgba(255,255,255,0.8)</td>
            <td style="${l.td} ${l.muted}">Hero image and page spinner, near-black text — fixed in every theme and mode</td>
          </tr>
        </tbody>
      </table>
      <p style="${d.caption} ${l.muted} max-width: ${f}; margin-bottom: ${_.subsection};">
        <strong>Note:</strong> The backdrop adapts because a near-black scrim over a near-black dark page is invisible; the lighter dark-mode value keeps it visible. The <code style="${d.monoSm}">-dark</code> and <code style="${d.monoSm}">-light</code> pair never changes: it sits over content the system can't see, so the author picks one by that content's tone, independent of the page's light or dark mode.
      </p>

      <h3 style="${d.h3}">Disabled tokens</h3>
      <p style="${d.caption} ${l.muted} margin-bottom: ${_.content};">For unavailable/inactive elements (exits to neutral scale)</p>
      <table style="${l.table} margin-bottom: ${_.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">Token</th>
            <th style="${l.th}">References</th>
            <th style="${l.th}">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-disabled-text</td>
            <td style="${l.td} ${d.monoSm}">neutral-8</td>
            <td style="${l.td} ${l.muted}">Disabled text, icons</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-disabled-surface</td>
            <td style="${l.td} ${d.monoSm}">neutral-3</td>
            <td style="${l.td} ${l.muted}">Disabled input background</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-disabled-solid</td>
            <td style="${l.td} ${d.monoSm}">neutral-7</td>
            <td style="${l.td} ${l.muted}">Disabled button fill</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-disabled-stroke</td>
            <td style="${l.td} ${d.monoSm}">neutral-6</td>
            <td style="${l.td} ${l.muted}">Disabled border</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${d.h3}">Input validation tokens</h3>
      <p style="${d.caption} ${l.muted} margin-bottom: ${_.content};">For form validation states (references utility colors)</p>
      <table style="${l.table} margin-bottom: ${_.content};">
        <thead>
          <tr>
            <th style="${l.th}">Token</th>
            <th style="${l.th}">References</th>
            <th style="${l.th}">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-input-border-focus</td>
            <td style="${l.td} ${d.monoSm}">primary-8</td>
            <td style="${l.td} ${l.muted}">Focused input border</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-input-border-error</td>
            <td style="${l.td} ${d.monoSm}">utility-error-emphasis</td>
            <td style="${l.td} ${l.muted}">Invalid input border</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-input-surface-error</td>
            <td style="${l.td} ${d.monoSm}">utility-error-muted</td>
            <td style="${l.td} ${l.muted}">Invalid input background</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-input-border-success</td>
            <td style="${l.td} ${d.monoSm}">utility-success-emphasis</td>
            <td style="${l.td} ${l.muted}">Valid input border</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-input-surface-success</td>
            <td style="${l.td} ${d.monoSm}">utility-success-muted</td>
            <td style="${l.td} ${l.muted}">Valid input background</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-input-border-caution</td>
            <td style="${l.td} ${d.monoSm}">utility-caution-emphasis</td>
            <td style="${l.td} ${l.muted}">Warning input border</td>
          </tr>
          <tr>
            <td style="${l.td} ${d.monoSm}">--color-input-surface-caution</td>
            <td style="${l.td} ${d.monoSm}">utility-caution-muted</td>
            <td style="${l.td} ${l.muted}">Warning input background</td>
          </tr>
        </tbody>
      </table>
      <p style="${d.caption} ${l.muted} max-width: ${f};">
        <strong>Note:</strong> Validation tokens reference utility colors, which swap between light and dark mode palettes. The semantic meaning stays consistent — only the underlying values change to maintain contrast in each mode.
      </p>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 5. RATIONALE                                                        -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <hr style="${E}" />

      <h2 style="${d.h2}">Rationale</h2>

      <h3 style="${d.h3}">Why step-shifting?</h3>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.content};">
        An alternative approach is <strong>overlays</strong> — adding semi-transparent black/white layers on top of colors (e.g., <code style="${d.monoSm}">rgba(0,0,0,0.20)</code>). Material Design 2 used this approach. We chose step-shifting instead:
      </p>
      <ul style="${d.body} ${l.muted} max-width: ${f}; margin: 0 0 ${_.subsection}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${_.label};"><strong>Token integrity</strong> — Overlays produce computed colors that aren't tokens. They can't be referenced, themed, or contrast-validated.</li>
        <li style="margin-bottom: ${_.label};"><strong>Predictable accessibility</strong> — Step-shifting maintains known contrast ratios. Overlays produce inconsistent results across the scale.</li>
        <li style="margin-bottom: ${_.label};"><strong>Design-code parity</strong> — Figma Variables can't express blend modes. Step-shifting works identically in design and code.</li>
        <li style="margin-bottom: ${_.label};"><strong>Simpler implementation</strong> — Just reference the next step: <code style="${d.monoSm}">var(--color-primary-10)</code>.</li>
      </ul>

      <h3 style="${d.h3}">Why exit to neutral for disabled?</h3>
      <p style="${d.body} ${l.muted} max-width: ${f}; margin-bottom: ${_.subsection};">
        If disabled elements stayed within the brand scale (e.g., <code style="${d.monoSm}">primary-3</code> for a disabled primary button), they could be confused with hover or selected states. Gray universally signals "unavailable" — switching to neutral makes the disabled state unambiguous across all brand themes.
      </p>

      <h3 style="${d.h3}">Why utility colors for validation?</h3>
      <p style="${d.body} ${l.muted} max-width: ${f};">
        Error red, success green, and caution yellow have fixed semantic meaning. They must be consistent across themes to maintain user expectations. A red error on Virginia's blue theme should look the same as on Maximus's purple theme.
      </p>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 6. CODE EXAMPLES                                                    -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <hr style="${E}" />

      <h2 style="${d.h2}">Code examples</h2>

      <h3 style="${d.h3}">Primary button</h3>
      <pre style="${l.pre} margin-bottom: ${_.subsection};">
.button-primary {
  background: var(--color-action-solid);
  color: var(--color-text-on-primary);
}

.button-primary:hover {
  background: var(--color-action-solid-hover);
}

.button-primary:active {
  background: var(--color-action-solid-pressed);
}

.button-primary:disabled {
  background: var(--color-disabled-solid);
  color: var(--color-disabled-text);
  cursor: not-allowed;
}</pre>

      <h3 style="${d.h3}">Ghost button</h3>
      <pre style="${l.pre} margin-bottom: ${_.subsection};">
.button-ghost {
  background: transparent;           /* text-only: no fill */
  color: var(--color-primary-11);
}

.button-ghost:hover,
.button-ghost:active {
  color: var(--color-primary-12);    /* next text step, not a fill */
  text-decoration: underline;
}</pre>

      <h3 style="${d.h3}">Table row</h3>
      <pre style="${l.pre} margin-bottom: ${_.subsection};">
.table-row:hover {
  background: var(--color-surface-hover);
}

.table-row[aria-selected="true"] {
  background: var(--color-surface-active);
}</pre>

      <h3 style="${d.h3}">Input with validation</h3>
      <pre style="${l.pre} margin-bottom: ${_.subsection};">
.input {
  border: 1px solid var(--color-border-interactive);
}

.input:focus {
  border-color: var(--color-input-border-focus);
}

.input[aria-invalid="true"] {
  border-color: var(--color-input-border-error);
  background: var(--color-input-surface-error);
}

.input:disabled {
  background: var(--color-disabled-surface);
  border-color: var(--color-disabled-stroke);
  color: var(--color-disabled-text);
}</pre>

      <h3 style="${d.h3}">Focus ring</h3>
      <pre style="${l.pre} margin: 0;">
/* Focus ring uses utility token — consistent across all themes */
.button:focus-visible {
  outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}</pre>

    </div>
  `},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Colors</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The color system is designed for multi-brand theming with WCAG accessibility built in. It uses a two-layer architecture: structural tokens define the slots, brand tokens provide the primitives.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block;">
        <div slot="body-content">
          <h3 style="\${t.h3}">Two-layer architecture</h3>
          <p style="\${t.bodySm} margin-bottom: \${space.content};">
            <strong>Layer 1 — Structural (shell tokens)</strong><br>
            Defines the 12-step color scale contract. Each step is a slot with a designated purpose. The neutral palette follows this structure and is shared across all themes.
          </p>
          <p style="\${t.bodySm} margin-bottom: \${space.content};">
            <strong>Layer 2 — Brand (primitives)</strong><br>
            Each brand theme provides primary, secondary, and accent palettes that fill the structural slots. Themes are standalone sheets, not overrides.
          </p>
          <p style="\${t.bodySm} \${doc.muted}">
            <strong>Utility colors</strong> (success, error, caution, focus ring) are separate — they don't follow the 12-step framework. They're fixed structural colors that remain consistent regardless of brand.
          </p>
        </div>
      </mms-card>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Color scale model</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        We adopt the <strong>Radix Colors 12-step scale</strong> because it solves the "which shade?" problem. Traditional scales (like Tailwind's 50–900) require developers to guess which value fits each use case — "should hover be 600 or 700?" becomes tribal knowledge.
      </p>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        With the 12-step model, <strong>each step number maps to a specific UI purpose</strong>. Step 4 is always hover. Step 9 is always the solid fill. Step 12 is always high-contrast text. The step defines the role, not just the lightness.
      </p>

      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th} width: 80px;">Steps</th>
            <th style="\${doc.th}">Category</th>
            <th style="\${doc.th}">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">1–2</td>
            <td style="\${doc.td}">Backgrounds</td>
            <td style="\${doc.td} \${doc.muted}">1 = page, 2 = surface (cards, sidebars, panels)</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">3–5</td>
            <td style="\${doc.td}">Elements</td>
            <td style="\${doc.td} \${doc.muted}">Interactive UI states: default → hovered → pressed</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">6–8</td>
            <td style="\${doc.td}">Borders</td>
            <td style="\${doc.td} \${doc.muted}">6 = separator, 7 = border, 8 = border hovered</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">9–10</td>
            <td style="\${doc.td}">Solids</td>
            <td style="\${doc.td} \${doc.muted}">9 = solid fill (buttons, badges), 10 = solid hovered</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">11–12</td>
            <td style="\${doc.td}">Text</td>
            <td style="\${doc.td} \${doc.muted}">11 = text muted (secondary), 12 = text (primary)</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Light vs. dark mode</h3>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Dark mode uses <strong>separate palettes, not inverted values</strong>. Step 1 in light mode is near-white; step 1 in dark mode is near-black. The step numbers maintain their semantic meaning — step 9 is always the accessible solid fill, whether on a light or dark background.
      </p>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX};">
        This approach ensures that <strong>component code doesn't change</strong> between modes. A button always uses <code style="\${t.monoSm}">--color-primary-9</code> — the palette behind that token is what changes.
      </p>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Palettes</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: \${space.content}; margin-bottom: \${space.content};">
        <div>
          <h3 style="\${t.h3}">Neutral (structural)</h3>
          <p style="\${t.caption} \${doc.muted}">Grayscale for backgrounds, borders, text. Follows the 12-step structure. Shared across all themes.</p>
        </div>
        <div>
          <h3 style="\${t.h3}">Primary (brand)</h3>
          <p style="\${t.caption} \${doc.muted}">Main identity color. Buttons, links, primary actions. 12-step scale, varies per theme.</p>
        </div>
        <div>
          <h3 style="\${t.h3}">Secondary (brand)</h3>
          <p style="\${t.caption} \${doc.muted}">Supporting color. Secondary buttons, accents. 12-step scale, varies per theme.</p>
        </div>
        <div>
          <h3 style="\${t.h3}">Accent (brand)</h3>
          <p style="\${t.caption} \${doc.muted}">Highlight color. Badges, tags, promotional. 12-step scale, varies per theme.</p>
        </div>
      </div>
      <div style="\${doc.panel}">
        <h3 style="\${t.h3}">Utility (separate)</h3>
        <p style="\${t.caption} \${doc.muted}">Success, error, caution, and focus ring. These are <strong>not</strong> part of the 12-step framework — they're fixed structural colors for status feedback and accessibility.</p>
      </div>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Section index</h2>
      <ul style="\${t.body} max-width: \${PROSE_MAX}; margin: 0; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Color framework</strong> — The 12-step scale, palette generation, and color tiering</li>
        <li style="margin-bottom: \${space.label};"><strong>Designing in Figma</strong> — How designers work with the color system</li>
        <li style="margin-bottom: \${space.label};"><strong>Brand colors</strong> — Primary, secondary, accent palettes per theme</li>
        <li style="margin-bottom: \${space.label};"><strong>Neutral colors</strong> — Grayscale palette for UI structure</li>
        <li style="margin-bottom: \${space.label};"><strong>Utility colors</strong> — Success, error, caution, and focus ring</li>
        <li style="margin-bottom: \${space.label};"><strong>State styling</strong> — Hover, pressed, disabled, and readonly patterns</li>
      </ul>
    </div>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Designing in Figma',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Designing in Figma</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX};">
        The color system maps directly to Figma Variables. Designers work with the same 12-step scale, ensuring design-to-code parity.
      </p>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Variable structure</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Figma Variables mirror the CSS token structure:
      </p>
      <pre style="\${doc.pre}">
Color/
├── neutral/
│   ├── 1  →  #fcfcfc
│   ├── 2  →  #f9f9f9
│   └── ...12
├── primary/
│   ├── 1  →  (theme-dependent)
│   └── ...12
├── secondary/
│   └── ...12
├── accent/
│   └── ...12
└── utility/
    ├── success/muted
    ├── success/emphasis
    └── ...</pre>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Theme modes</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Create Variable Modes for each brand:
      </p>
      <ul style="\${t.body} max-width: \${PROSE_MAX}; margin: 0; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>\${BRAND_LABELS.default}</strong> — Neutral (development fallback)</li>
        <li style="margin-bottom: \${space.label};"><strong>\${BRAND_LABELS.maximus}</strong> — Pantone Violet primary</li>
        <li style="margin-bottom: \${space.label};"><strong>\${BRAND_LABELS.ves}</strong> — VA Blue primary</li>
        <li style="margin-bottom: \${space.label};"><strong>[Client]</strong> — Per-engagement brand</li>
      </ul>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Step selection guide</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        When designing components, use step numbers consistently:
      </p>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Element</th>
            <th style="\${doc.th}">Normal</th>
            <th style="\${doc.th}">Hover</th>
            <th style="\${doc.th}">Pressed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}">List item / Card</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-3</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-4</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-5</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Primary button</td>
            <td style="\${doc.td} \${t.monoSm}">primary-9</td>
            <td style="\${doc.td} \${t.monoSm}">primary-10</td>
            <td style="\${doc.td} \${t.monoSm}">—</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Ghost button</td>
            <td style="\${doc.td} \${t.monoSm}">transparent</td>
            <td style="\${doc.td} \${t.monoSm}">primary-3</td>
            <td style="\${doc.td} \${t.monoSm}">primary-4</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Card border</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-6</td>
            <td style="\${doc.td} \${t.monoSm}">—</td>
            <td style="\${doc.td} \${t.monoSm}">—</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Input border</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-7</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-8</td>
            <td style="\${doc.td} \${t.monoSm}">—</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Body text</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-12</td>
            <td style="\${doc.td} \${t.monoSm}">—</td>
            <td style="\${doc.td} \${t.monoSm}">—</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Placeholder text</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-11</td>
            <td style="\${doc.td} \${t.monoSm}">—</td>
            <td style="\${doc.td} \${t.monoSm}">—</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Handoff notes</h2>
      <ul style="\${t.body} max-width: \${PROSE_MAX}; margin: 0; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};">Always reference Variables, never hardcode hex values</li>
        <li style="margin-bottom: \${space.label};">Step numbers in Figma = step numbers in CSS (1:1 mapping)</li>
        <li style="margin-bottom: \${space.label};">Use the theme Mode to preview how designs render across brands</li>
        <li style="margin-bottom: \${space.label};">Focus rings are structural — don't customize per brand</li>
      </ul>
    </div>
  \`
}`,...O.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Brand Colors',
  render: () => {
    const themes = [{
      value: 'maximus',
      label: BRAND_LABELS.maximus,
      description: 'Violet primary, slate secondary, green accent'
    }, {
      value: 'dow',
      label: BRAND_LABELS.dow,
      description: 'DOW Blue primary, Steel Blue secondary, green accent'
    }, {
      value: 'ves',
      label: BRAND_LABELS.ves,
      description: 'VA Blue primary, gold secondary, teal accent'
    }, {
      value: 'uss-oh-dvs',
      label: BRAND_LABELS['uss-oh-dvs'],
      description: 'Buckeye Blue primary, Earth Brown secondary, Cardinal Red accent'
    }];

    // Read from PALETTE_TIERS (theme-constraints.ts) rather than restating tier
    // numbers here — a second hand-copied manifest is what let ves/uss-oh-dvs's
    // accent tier go stale before (DUE-1714).
    const paletteTiers = Object.fromEntries(themes.map(({
      value
    }) => {
      const tiers = PALETTE_TIERS[value as Theme];
      return [value, {
        '--color-primary': tiers.primary,
        '--color-secondary': tiers.secondary,
        '--color-accent': tiers.accent
      }];
    }));
    return html\`
      <div id="brand-colors-page" data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
        <h1 style="\${t.h1}">Brand Colors</h1>
        <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
          Brand colors define the visual identity for each client engagement. Each brand provides three palettes — <strong>primary</strong>, <strong>secondary</strong>, and <strong>accent</strong>.
        </p>

        <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
          <div slot="body-content">
            <p style="\${t.bodySm}">
              <strong>Theme-aware:</strong> The swatches below use CSS custom properties. Select a theme to see how palettes change per brand.
            </p>
          </div>
        </mms-card>

        <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
          <div slot="body-content">
            <h3 style="\${t.h3}">Palette tier classification</h3>
            <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">
              Not all brand colors can be used for all purposes. Each palette is classified into a tier based on WCAG accessibility constraints:
            </p>
            <ul style="\${t.caption} \${doc.muted} margin: 0; padding-left: var(--spacing-lg1);">
              <li><strong>Tier 1 (Full):</strong> All 12 steps — buttons, inputs, all interactive components</li>
              <li><strong>Tier 2 (Text + Surface):</strong> Steps 1, 2, 9, 11, 12 — branded text and tinted backgrounds only</li>
              <li><strong>Tier 3 (Decorative):</strong> Steps 1, 2, 9 — tinted surfaces and decorative fills only</li>
            </ul>
          </div>
        </mms-card>

        <div style="margin-bottom: \${space.subsection};">
          <mms-select
            id="theme-selector"
            label="Select Theme"
            style="min-width: 240px;"
            .value=\${'maximus'}
            .options=\${themes.map(theme => ({
      value: theme.value,
      label: theme.label
    }))}
          ></mms-select>
          <p id="theme-description" style="\${t.caption} \${doc.muted} margin-top: \${space.label};">Violet primary, slate secondary, green accent</p>
        </div>

        <hr style="\${DIVIDER}" />

        <h2 style="\${t.h2}">Light mode</h2>
        <div id="brand-palettes" data-theme="maximus" style="\${DOC_FONT_VARS} background: #ffffff; color: var(--color-text-default); padding: var(--spacing-lg1); border-radius: var(--radius-md); border: var(--border-width-xs) solid var(--color-border-subtle);">
          \${paletteScale('Primary', '--color-primary')}
          \${paletteScale('Secondary', '--color-secondary')}
          \${paletteScale('Accent', '--color-accent')}
        </div>

        <hr style="\${DIVIDER}" />

        <h2 style="\${t.h2}">Dark mode</h2>
        <div id="brand-palettes-dark" data-theme="maximus" data-mode="dark" style="\${DOC_FONT_VARS} background: #111111; color: var(--color-text-default); padding: var(--spacing-lg1); border-radius: var(--radius-md);">
          \${paletteScaleDark('Primary', '--color-primary')}
          \${paletteScaleDark('Secondary', '--color-secondary')}
          \${paletteScaleDark('Accent', '--color-accent')}
        </div>

        <hr style="\${DIVIDER}" />

        <h2 style="\${t.h2}">On-color text</h2>
        <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
          Text rendered on Step 9 solid backgrounds uses dedicated on-color tokens to ensure WCAG AA contrast (4.5:1).
        </p>
        <div id="on-color-examples" data-theme="maximus" style="\${DOC_FONT_VARS} display: flex; gap: \${space.content}; flex-wrap: wrap;">
          <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--color-primary-9);">
            <span style="\${t.body} color: var(--color-text-on-primary); font-weight: 600;">Text on Primary</span>
          </div>
          <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--color-secondary-9);">
            <span style="\${t.body} color: var(--color-text-on-secondary); font-weight: 600;">Text on Secondary</span>
          </div>
          <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--color-accent-9);">
            <span style="\${t.body} color: var(--color-text-on-accent); font-weight: 600;">Text on Accent</span>
          </div>
        </div>

        <hr style="\${DIVIDER}" />

        <h2 style="\${t.h2}">Token reference — light mode</h2>
        <div id="palette-tables" data-theme="maximus" style="\${DOC_FONT_VARS} background: #ffffff; color: var(--color-text-default); padding: var(--spacing-lg1); border-radius: var(--radius-md); border: var(--border-width-xs) solid var(--color-border-subtle);">
          \${paletteTable('Primary palette', '--color-primary')}
          \${paletteTable('Secondary palette', '--color-secondary')}
          \${paletteTable('Accent palette', '--color-accent')}
        </div>

        <hr style="\${DIVIDER}" />

        <h2 style="\${t.h2}">Token reference — dark mode</h2>
        <div id="palette-tables-dark" data-theme="maximus" data-mode="dark" style="\${DOC_FONT_VARS} background: #111111; color: var(--color-text-default); padding: var(--spacing-lg1); border-radius: var(--radius-md);">
          \${paletteTableDark('Primary palette', '--color-primary')}
          \${paletteTableDark('Secondary palette', '--color-secondary')}
          \${paletteTableDark('Accent palette', '--color-accent')}
        </div>

        <hr style="\${DIVIDER}" />

        <h2 style="\${t.h2}">Usage</h2>
        <pre style="\${doc.pre} margin: 0;">
/* Import a theme package */
npm install @mms/theme-ves

/* In your entry CSS */
@import '@mms/theme-ves/index.css';

/* Use step-based tokens */
.button-primary {
  background: var(--color-primary-9);
  color: var(--color-text-on-primary);
}
.button-primary:hover {
  background: var(--color-primary-10);
}</pre>
      </div>

      <script type="module">
        const themes = \${JSON.stringify(themes)};
        const selector = document.getElementById('theme-selector');
        const description = document.getElementById('theme-description');

        // Tier classification is computed in render() from PALETTE_TIERS
        // (theme-constraints.ts) and serialized here — not restated by hand.
        // Tier 1 (Full): All 12 steps
        // Tier 2 (Text + Surface): Steps 1, 2, 9, 11, 12 only
        // Tier 3 (Decorative): Steps 1, 2, 9 only
        const paletteTiers = \${JSON.stringify(paletteTiers)};

        // Which steps are visible per tier
        const tierVisibleSteps = {
          1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],  // Full
          2: [1, 2, 9, 11, 12],                        // Text + Surface
          3: [1, 2, 9],                                // Decorative
        };

        // Get all themed containers
        const lightPalettes = document.getElementById('brand-palettes');
        const darkPalettes = document.getElementById('brand-palettes-dark');
        const lightTables = document.getElementById('palette-tables');
        const darkTables = document.getElementById('palette-tables-dark');
        const onColorExamples = document.getElementById('on-color-examples');

        // Convert RGB to hex
        const rgbToHex = (rgb) => {
          const match = rgb.match(/rgb\\\\(\\\\s*(\\\\d+)\\\\s*,\\\\s*(\\\\d+)\\\\s*,\\\\s*(\\\\d+)\\\\s*\\\\)/);
          if (!match) return rgb;
          const [, r, g, b] = match;
          return '#' + [r, g, b].map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
        };

        // Check if a color value is undefined (transparent/empty)
        const isUndefined = (bgColor) => {
          return !bgColor || 
                 bgColor === 'rgba(0, 0, 0, 0)' || 
                 bgColor === 'transparent' ||
                 bgColor === '';
        };

        // Update all hex value cells (light mode)
        const updateHexValues = () => {
          const hexCells = document.querySelectorAll('.hex-value[data-token]');
          hexCells.forEach(cell => {
            const token = cell.getAttribute('data-token');
            const swatch = document.querySelector('.color-swatch[data-token="' + token + '"]');
            if (swatch) {
              const computed = getComputedStyle(swatch).backgroundColor;
              if (isUndefined(computed)) {
                cell.textContent = '—';
              } else {
                cell.textContent = rgbToHex(computed).toUpperCase();
              }
            }
          });
        };

        // Update all hex value cells (dark mode)
        const updateHexValuesDark = () => {
          const hexCells = document.querySelectorAll('.hex-value-dark[data-token]');
          hexCells.forEach(cell => {
            const token = cell.getAttribute('data-token');
            const swatch = document.querySelector('.color-swatch-dark[data-token="' + token + '"]');
            if (swatch) {
              const computed = getComputedStyle(swatch).backgroundColor;
              if (isUndefined(computed)) {
                cell.textContent = '—';
              } else {
                cell.textContent = rgbToHex(computed).toUpperCase();
              }
            }
          });
        };

        // Update theme on all containers
        const updateTheme = (themeName) => {
          [lightPalettes, lightTables, onColorExamples].forEach(el => {
            if (el) el.setAttribute('data-theme', themeName);
          });
          [darkPalettes, darkTables].forEach(el => {
            if (el) el.setAttribute('data-theme', themeName);
          });
          // Update tier-based visibility
          updateTierVisibility(themeName);
        };

        // Show/hide steps based on palette tier
        const updateTierVisibility = (themeName) => {
          const tiers = paletteTiers[themeName] || {};
          
          // For each palette container, check its tier
          document.querySelectorAll('[data-palette]').forEach(container => {
            const palette = container.getAttribute('data-palette');
            const tier = tiers[palette] || 1; // Default to full if not specified
            const visibleSteps = tierVisibleSteps[tier];
            
            // Hide/show step cells based on tier
            container.querySelectorAll('[data-step]').forEach(cell => {
              const step = parseInt(cell.getAttribute('data-step'), 10);
              cell.style.visibility = visibleSteps.includes(step) ? 'visible' : 'hidden';
            });
            
            // For swatches in the scale grid
            container.querySelectorAll('.color-swatch, .color-swatch-dark').forEach(swatch => {
              const token = swatch.getAttribute('data-token');
              if (token) {
                const step = parseInt(token.split('-').pop(), 10);
                swatch.style.visibility = visibleSteps.includes(step) ? 'visible' : 'hidden';
              }
            });
          });
          
          // Also handle tables
          document.querySelectorAll('table[data-palette]').forEach(table => {
            const palette = table.getAttribute('data-palette');
            const tier = tiers[palette] || 1;
            const visibleSteps = tierVisibleSteps[tier];
            
            table.querySelectorAll('tbody tr').forEach((row, idx) => {
              const step = idx + 1;
              row.style.display = visibleSteps.includes(step) ? '' : 'none';
            });
          });
        };

        // Tier badge: each tier maps to a flat chip (same look as the outcome chips)
        const tierStyles = \${JSON.stringify({
      1: tierChipSpec(1),
      2: tierChipSpec(2),
      3: tierChipSpec(3)
    })};

        // Update tier badges based on theme
        const updateTierBadges = (themeName) => {
          const tiers = paletteTiers[themeName] || {};
          
          document.querySelectorAll('.tier-badge[data-palette]').forEach(badge => {
            const palette = badge.getAttribute('data-palette');
            const tier = tiers[palette] || 1;
            const style = tierStyles[tier];
            
            badge.textContent = style.label;
            badge.style.background = style.bg;
            badge.style.color = style.color;
          });
        };

        // Initial update after render
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            updateHexValues();
            updateHexValuesDark();
            updateTierVisibility('maximus'); // Initial theme
            updateTierBadges('maximus');     // Initial tier badges
          });
        });

        if (selector && description) {
          selector.addEventListener('change', (e) => {
            const value = e.target.value;
            const theme = themes.find(t => t.value === value);

            if (value) {
              updateTheme(value);
              updateTierBadges(value);
            }

            if (theme) {
              description.textContent = theme.description;
            }

            // Update hex values after theme change
            requestAnimationFrame(() => {
              updateHexValues();
              updateHexValuesDark();
            });
          });
        }
      <\/script>
    \`;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'State Styling',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">State Styling</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        State styles provide visual feedback for interactive elements. They communicate what's happening — whether an element is being hovered, pressed, focused, disabled, or in a validation state.
      </p>
      <ul style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Interaction feedback</strong> — Confirms "I see your action" (hover, pressed, focus)</li>
        <li style="margin-bottom: \${space.label};"><strong>Status communication</strong> — Explains "This is the current state" (disabled, error, success)</li>
      </ul>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- SCOPE                                                               -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Scope</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        This token set covers color changes for interactive states. It does not cover animation, transitions, or non-color feedback.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: \${space.content}; max-width: \${PROSE_MAX};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">In scope</h3>
          <ul style="\${t.caption} \${doc.muted} margin: 0; padding-left: var(--spacing-lg1);">
            <li>Hover states</li>
            <li>Pressed/active states</li>
            <li>Focus indicators</li>
            <li>Disabled appearance</li>
            <li>Validation states (error, success, caution)</li>
            <li>Selected/active surface states</li>
          </ul>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Out of scope</h3>
          <ul style="\${t.caption} \${doc.muted} margin: 0; padding-left: var(--spacing-lg1);">
            <li>Readonly (no special tokens — uses normal colors)</li>
            <li>Loading (animation concern, not color)</li>
            <li>Drag/drop (interaction pattern, not color)</li>
            <li>Transitions/animations (motion tokens)</li>
          </ul>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 3. ARCHITECTURE                                                     -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Architecture</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        State tokens live in the <strong>semantic layer</strong>. They reference the 12-step color scale via <code style="\${t.monoSm}">var()</code>, which means they automatically adapt to light/dark mode and brand themes.
      </p>

      <h3 style="\${t.h3}">Three patterns</h3>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Pattern</th>
            <th style="\${doc.th}">Used For</th>
            <th style="\${doc.th}">How It Works</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td} font-weight: 500;">Step-Shifting</td>
            <td style="\${doc.td}">Hover, pressed</td>
            <td style="\${doc.td} \${doc.muted}">Move one step up in the scale (9→10→11)</td>
          </tr>
          <tr>
            <td style="\${doc.td} font-weight: 500;">Exit to Neutral</td>
            <td style="\${doc.td}">Disabled</td>
            <td style="\${doc.td} \${doc.muted}">Leave brand scale entirely, use neutral grays</td>
          </tr>
          <tr>
            <td style="\${doc.td} font-weight: 500;">Utility Colors</td>
            <td style="\${doc.td}">Error, success, caution, focus</td>
            <td style="\${doc.td} \${doc.muted}">Use structural utility tokens (fixed across themes)</td>
          </tr>
        </tbody>
      </table>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 4. TOKEN REFERENCE                                                  -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Token reference</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Complete list of semantic state tokens. All tokens reference <code style="\${t.monoSm}">var(--color-*)</code> and adapt automatically to theme.
      </p>

      <h3 style="\${t.h3}">Action tokens</h3>
      <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">For buttons and primary interactive elements</p>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Token</th>
            <th style="\${doc.th}">References</th>
            <th style="\${doc.th}">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-action-solid</td>
            <td style="\${doc.td} \${t.monoSm}">primary-9</td>
            <td style="\${doc.td} \${doc.muted}">Primary button default</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-action-solid-hover</td>
            <td style="\${doc.td} \${t.monoSm}">primary-10</td>
            <td style="\${doc.td} \${doc.muted}">Primary button hover</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-action-solid-pressed</td>
            <td style="\${doc.td} \${t.monoSm}">primary-11</td>
            <td style="\${doc.td} \${doc.muted}">Primary button pressed</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-action-subtle</td>
            <td style="\${doc.td} \${t.monoSm}">primary-3</td>
            <td style="\${doc.td} \${doc.muted}">Subtle tinted fill, default</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-action-subtle-hover</td>
            <td style="\${doc.td} \${t.monoSm}">primary-4</td>
            <td style="\${doc.td} \${doc.muted}">Subtle tinted fill, hover</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-action-subtle-active</td>
            <td style="\${doc.td} \${t.monoSm}">primary-5</td>
            <td style="\${doc.td} \${doc.muted}">Subtle tinted fill, pressed</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Surface tokens</h3>
      <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">For table rows, list items, card hover states</p>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Token</th>
            <th style="\${doc.th}">References</th>
            <th style="\${doc.th}">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-surface-hover</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-3</td>
            <td style="\${doc.td} \${doc.muted}">Table row hover, list item hover</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-surface-active</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-4</td>
            <td style="\${doc.td} \${doc.muted}">Selected row, active item</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-surface-brand-hover</td>
            <td style="\${doc.td} \${t.monoSm}">primary-3</td>
            <td style="\${doc.td} \${doc.muted}">Hover on brand-tinted surface</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-surface-brand-active</td>
            <td style="\${doc.td} \${t.monoSm}">primary-4</td>
            <td style="\${doc.td} \${doc.muted}">Selected on brand surface</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Scrim tokens</h3>
      <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">For the layer behind a dialog, or over a photo or page content</p>
      <table style="\${doc.table} margin-bottom: \${space.content};">
        <thead>
          <tr>
            <th style="\${doc.th}">Token</th>
            <th style="\${doc.th}">References</th>
            <th style="\${doc.th}">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td} white-space: nowrap; \${t.monoSm}">--color-overlay-scrim</td>
            <td style="\${doc.td} white-space: nowrap; \${t.monoSm}">light: rgba(26,26,26,0.7)<br>dark: rgba(77,77,77,0.7)</td>
            <td style="\${doc.td} \${doc.muted}">Modal and drawer backdrop — adapts to the page's mode</td>
          </tr>
          <tr>
            <td style="\${doc.td} white-space: nowrap; \${t.monoSm}">--color-overlay-scrim-dark</td>
            <td style="\${doc.td} white-space: nowrap; \${t.monoSm}">rgba(26,26,26,0.7)</td>
            <td style="\${doc.td} \${doc.muted}">Hero image and page spinner, white text — fixed in every theme and mode</td>
          </tr>
          <tr>
            <td style="\${doc.td} white-space: nowrap; \${t.monoSm}">--color-overlay-scrim-light</td>
            <td style="\${doc.td} white-space: nowrap; \${t.monoSm}">rgba(255,255,255,0.8)</td>
            <td style="\${doc.td} \${doc.muted}">Hero image and page spinner, near-black text — fixed in every theme and mode</td>
          </tr>
        </tbody>
      </table>
      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <strong>Note:</strong> The backdrop adapts because a near-black scrim over a near-black dark page is invisible; the lighter dark-mode value keeps it visible. The <code style="\${t.monoSm}">-dark</code> and <code style="\${t.monoSm}">-light</code> pair never changes: it sits over content the system can't see, so the author picks one by that content's tone, independent of the page's light or dark mode.
      </p>

      <h3 style="\${t.h3}">Disabled tokens</h3>
      <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">For unavailable/inactive elements (exits to neutral scale)</p>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Token</th>
            <th style="\${doc.th}">References</th>
            <th style="\${doc.th}">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-disabled-text</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-8</td>
            <td style="\${doc.td} \${doc.muted}">Disabled text, icons</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-disabled-surface</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-3</td>
            <td style="\${doc.td} \${doc.muted}">Disabled input background</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-disabled-solid</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-7</td>
            <td style="\${doc.td} \${doc.muted}">Disabled button fill</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-disabled-stroke</td>
            <td style="\${doc.td} \${t.monoSm}">neutral-6</td>
            <td style="\${doc.td} \${doc.muted}">Disabled border</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Input validation tokens</h3>
      <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">For form validation states (references utility colors)</p>
      <table style="\${doc.table} margin-bottom: \${space.content};">
        <thead>
          <tr>
            <th style="\${doc.th}">Token</th>
            <th style="\${doc.th}">References</th>
            <th style="\${doc.th}">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-input-border-focus</td>
            <td style="\${doc.td} \${t.monoSm}">primary-8</td>
            <td style="\${doc.td} \${doc.muted}">Focused input border</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-input-border-error</td>
            <td style="\${doc.td} \${t.monoSm}">utility-error-emphasis</td>
            <td style="\${doc.td} \${doc.muted}">Invalid input border</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-input-surface-error</td>
            <td style="\${doc.td} \${t.monoSm}">utility-error-muted</td>
            <td style="\${doc.td} \${doc.muted}">Invalid input background</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-input-border-success</td>
            <td style="\${doc.td} \${t.monoSm}">utility-success-emphasis</td>
            <td style="\${doc.td} \${doc.muted}">Valid input border</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-input-surface-success</td>
            <td style="\${doc.td} \${t.monoSm}">utility-success-muted</td>
            <td style="\${doc.td} \${doc.muted}">Valid input background</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-input-border-caution</td>
            <td style="\${doc.td} \${t.monoSm}">utility-caution-emphasis</td>
            <td style="\${doc.td} \${doc.muted}">Warning input border</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">--color-input-surface-caution</td>
            <td style="\${doc.td} \${t.monoSm}">utility-caution-muted</td>
            <td style="\${doc.td} \${doc.muted}">Warning input background</td>
          </tr>
        </tbody>
      </table>
      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX};">
        <strong>Note:</strong> Validation tokens reference utility colors, which swap between light and dark mode palettes. The semantic meaning stays consistent — only the underlying values change to maintain contrast in each mode.
      </p>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 5. RATIONALE                                                        -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Rationale</h2>

      <h3 style="\${t.h3}">Why step-shifting?</h3>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        An alternative approach is <strong>overlays</strong> — adding semi-transparent black/white layers on top of colors (e.g., <code style="\${t.monoSm}">rgba(0,0,0,0.20)</code>). Material Design 2 used this approach. We chose step-shifting instead:
      </p>
      <ul style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0 0 \${space.subsection}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Token integrity</strong> — Overlays produce computed colors that aren't tokens. They can't be referenced, themed, or contrast-validated.</li>
        <li style="margin-bottom: \${space.label};"><strong>Predictable accessibility</strong> — Step-shifting maintains known contrast ratios. Overlays produce inconsistent results across the scale.</li>
        <li style="margin-bottom: \${space.label};"><strong>Design-code parity</strong> — Figma Variables can't express blend modes. Step-shifting works identically in design and code.</li>
        <li style="margin-bottom: \${space.label};"><strong>Simpler implementation</strong> — Just reference the next step: <code style="\${t.monoSm}">var(--color-primary-10)</code>.</li>
      </ul>

      <h3 style="\${t.h3}">Why exit to neutral for disabled?</h3>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        If disabled elements stayed within the brand scale (e.g., <code style="\${t.monoSm}">primary-3</code> for a disabled primary button), they could be confused with hover or selected states. Gray universally signals "unavailable" — switching to neutral makes the disabled state unambiguous across all brand themes.
      </p>

      <h3 style="\${t.h3}">Why utility colors for validation?</h3>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX};">
        Error red, success green, and caution yellow have fixed semantic meaning. They must be consistent across themes to maintain user expectations. A red error on Virginia's blue theme should look the same as on Maximus's purple theme.
      </p>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 6. CODE EXAMPLES                                                    -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Code examples</h2>

      <h3 style="\${t.h3}">Primary button</h3>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};">
.button-primary {
  background: var(--color-action-solid);
  color: var(--color-text-on-primary);
}

.button-primary:hover {
  background: var(--color-action-solid-hover);
}

.button-primary:active {
  background: var(--color-action-solid-pressed);
}

.button-primary:disabled {
  background: var(--color-disabled-solid);
  color: var(--color-disabled-text);
  cursor: not-allowed;
}</pre>

      <h3 style="\${t.h3}">Ghost button</h3>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};">
.button-ghost {
  background: transparent;           /* text-only: no fill */
  color: var(--color-primary-11);
}

.button-ghost:hover,
.button-ghost:active {
  color: var(--color-primary-12);    /* next text step, not a fill */
  text-decoration: underline;
}</pre>

      <h3 style="\${t.h3}">Table row</h3>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};">
.table-row:hover {
  background: var(--color-surface-hover);
}

.table-row[aria-selected="true"] {
  background: var(--color-surface-active);
}</pre>

      <h3 style="\${t.h3}">Input with validation</h3>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};">
.input {
  border: 1px solid var(--color-border-interactive);
}

.input:focus {
  border-color: var(--color-input-border-focus);
}

.input[aria-invalid="true"] {
  border-color: var(--color-input-border-error);
  background: var(--color-input-surface-error);
}

.input:disabled {
  background: var(--color-disabled-surface);
  border-color: var(--color-disabled-stroke);
  color: var(--color-disabled-text);
}</pre>

      <h3 style="\${t.h3}">Focus ring</h3>
      <pre style="\${doc.pre} margin: 0;">
/* Focus ring uses utility token — consistent across all themes */
.button:focus-visible {
  outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}</pre>

    </div>
  \`
}`,...I.parameters?.docs?.source}}},L=[`Overview`,`DesigningInFigma`,`BrandColors`,`StateStyling`]}))();export{F as BrandColors,O as DesigningInFigma,D as Overview,I as StateStyling,L as __namedExportsOrder,T as default};