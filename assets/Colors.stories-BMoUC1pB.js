import{i as e}from"./preload-helper-BdFrVu1K.js";import{o as t,t as n}from"./iframe-CQ36wFM3.js";function r(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var i=e((()=>{})),a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),i(),o={title:`Foundations/Colors`},s={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 2rem 0 0.75rem;`,h3:`font-size: 1.125rem; line-height: 1.35; font-weight: 600; margin: 1.5rem 0 0.5rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.8125rem;`},c=`680px`,l=`960px`,u={name:`Overview`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${l}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${s.h1}">Colors</h1>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 2rem;">
        The color system is designed for multi-brand theming with WCAG accessibility built in. It uses a two-layer architecture: structural tokens define the slots, brand tokens provide the primitives.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 3rem; border-radius: 0 6px 6px 0;">
        <h3 style="${s.h3} margin: 0 0 0.75rem;">Two-Layer Architecture</h3>
        <p style="${s.bodySm} margin: 0 0 1rem;">
          <strong>Layer 1 — Structural (shell tokens)</strong><br>
          Defines the 12-step color scale contract. Each step is a slot with a designated purpose. The neutral palette follows this structure and is shared across all themes.
        </p>
        <p style="${s.bodySm} margin: 0 0 1rem;">
          <strong>Layer 2 — Brand (primitives)</strong><br>
          Each brand theme provides primary, secondary, and accent palettes that fill the structural slots. Themes are standalone sheets, not overrides.
        </p>
        <p style="${s.bodySm} margin: 0; opacity: 0.8;">
          <strong>Utility colors</strong> (success, error, caution, focus ring) are separate — they don't follow the 12-step framework. They're fixed structural colors that remain consistent regardless of brand.
        </p>
      </div>

      <h2 style="${s.h2}; margin-top: 3rem;">Color Scale Model</h2>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1.5rem;">
        We adopt the <strong>Radix Colors 12-step scale</strong> because it solves the "which shade?" problem. Traditional scales (like Tailwind's 50–900) require developers to guess which value fits each use case — "should hover be 600 or 700?" becomes tribal knowledge.
      </p>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1.5rem;">
        With the 12-step model, <strong>each step number maps to a specific UI purpose</strong>. Step 4 is always hover. Step 9 is always the solid fill. Step 12 is always high-contrast text. The step defines the role, not just the lightness.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600; width: 80px;">Steps</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Category</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">1–2</td>
            <td style="padding: 0.5rem 0.75rem;">Backgrounds</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">1 = page, 2 = surface (cards, sidebars, panels)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">3–5</td>
            <td style="padding: 0.5rem 0.75rem;">Elements</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Interactive UI states: default → hovered → pressed</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">6–8</td>
            <td style="padding: 0.5rem 0.75rem;">Borders</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">6 = separator, 7 = border, 8 = border hovered</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">9–10</td>
            <td style="padding: 0.5rem 0.75rem;">Solids</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">9 = solid fill (buttons, badges), 10 = solid hovered</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">11–12</td>
            <td style="padding: 0.5rem 0.75rem;">Text</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">11 = text muted (secondary), 12 = text (primary)</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${s.h3}">Light vs. Dark Mode</h3>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        Dark mode uses <strong>separate palettes, not inverted values</strong>. Step 1 in light mode is near-white; step 1 in dark mode is near-black. The step numbers maintain their semantic meaning — step 9 is always the accessible solid fill, whether on a light or dark background.
      </p>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        This approach ensures that <strong>component code doesn't change</strong> between modes. A button always uses <code style="${s.monoSm}">--color-primary-9</code> — the palette behind that token is what changes.
      </p>

      <h2 style="${s.h2}; margin-top: 3rem;">Palettes</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
        <div>
          <h4 style="margin: 0 0 0.5rem; font-weight: 600;">Neutral (structural)</h4>
          <p style="${s.caption} opacity: 0.65; margin: 0;">Grayscale for backgrounds, borders, text. Follows the 12-step structure. Shared across all themes.</p>
        </div>
        <div>
          <h4 style="margin: 0 0 0.5rem; font-weight: 600;">Primary (brand)</h4>
          <p style="${s.caption} opacity: 0.65; margin: 0;">Main identity color. Buttons, links, primary actions. 12-step scale, varies per theme.</p>
        </div>
        <div>
          <h4 style="margin: 0 0 0.5rem; font-weight: 600;">Secondary (brand)</h4>
          <p style="${s.caption} opacity: 0.65; margin: 0;">Supporting color. Secondary buttons, accents. 12-step scale, varies per theme.</p>
        </div>
        <div>
          <h4 style="margin: 0 0 0.5rem; font-weight: 600;">Accent (brand)</h4>
          <p style="${s.caption} opacity: 0.65; margin: 0;">Highlight color. Badges, tags, promotional. 12-step scale, varies per theme.</p>
        </div>
      </div>
      <div style="background: rgba(128,128,128,0.06); padding: 1rem 1.25rem; border-radius: 6px; margin-bottom: 3rem;">
        <h4 style="margin: 0 0 0.5rem; font-weight: 600;">Utility (separate)</h4>
        <p style="${s.caption} opacity: 0.65; margin: 0;">Success, error, caution, and focus ring. These are <strong>not</strong> part of the 12-step framework — they're fixed structural colors for status feedback and accessibility.</p>
      </div>

      <h2 style="${s.h2}; margin-top: 3rem;">Section Index</h2>
      <ul style="${s.body} max-width: ${c}; margin: 0 0 2rem 1.5rem; padding: 0;">
        <li style="margin-bottom: 0.5rem;"><strong>Color Framework</strong> — The 12-step scale system and how to use it</li>
        <li style="margin-bottom: 0.5rem;"><strong>Color Generator</strong> — OKLCH-based palette generation with accessibility validation</li>
        <li style="margin-bottom: 0.5rem;"><strong>Designing in Figma</strong> — How designers work with the color system</li>
        <li style="margin-bottom: 0.5rem;"><strong>Brand Colors</strong> — Primary, secondary, accent palettes per theme</li>
        <li style="margin-bottom: 0.5rem;"><strong>Neutral Colors</strong> — Grayscale palette for UI structure</li>
        <li style="margin-bottom: 0.5rem;"><strong>Utility Colors</strong> — Success, error, caution, and focus ring</li>
        <li style="margin-bottom: 0.5rem;"><strong>State Styling</strong> — Hover, pressed, disabled, and readonly patterns</li>
      </ul>
    </div>
  `},d={name:`Designing in Figma`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${l}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${s.h1}">Designing in Figma</h1>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1.5rem;">
        The color system maps directly to Figma Variables. Designers work with the same 12-step scale, ensuring design-to-code parity.
      </p>

      <h2 style="${s.h2}">Variable Structure</h2>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        Figma Variables mirror the CSS token structure:
      </p>
      <pre style="${s.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
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

      <h2 style="${s.h2}">Theme Modes</h2>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        Create Variable Modes for each brand:
      </p>
      <ul style="${s.body} max-width: ${c}; margin: 0 0 1.5rem 1.5rem; padding: 0;">
        <li style="margin-bottom: 0.5rem;"><strong>Default</strong> — Neutral (development fallback)</li>
        <li style="margin-bottom: 0.5rem;"><strong>Maximus</strong> — Pantone Violet primary</li>
        <li style="margin-bottom: 0.5rem;"><strong>VA.gov</strong> — VA Blue primary</li>
        <li style="margin-bottom: 0.5rem;"><strong>[Client]</strong> — Per-engagement brand</li>
      </ul>

      <h2 style="${s.h2}">Step Selection Guide</h2>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        When designing components, use step numbers consistently:
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Element</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Normal</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Hover</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Pressed</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">List item / Card</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-3</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-4</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-5</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">Primary button</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-9</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-10</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">—</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">Ghost button</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">transparent</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-3</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-4</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">Card border</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-6</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">—</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">—</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">Input border</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-7</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-8</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">—</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">Body text</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-12</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">—</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">—</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">Placeholder text</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-11</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">—</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">—</td>
          </tr>
        </tbody>
      </table>

      <h2 style="${s.h2}">Handoff Notes</h2>
      <ul style="${s.body} max-width: ${c}; margin: 0 0 2rem 1.5rem; padding: 0;">
        <li style="margin-bottom: 0.5rem;">Always reference Variables, never hardcode hex values</li>
        <li style="margin-bottom: 0.5rem;">Step numbers in Figma = step numbers in CSS (1:1 mapping)</li>
        <li style="margin-bottom: 0.5rem;">Use the theme Mode to preview how designs render across brands</li>
        <li style="margin-bottom: 0.5rem;">Focus rings are structural — don't customize per brand</li>
      </ul>
    </div>
  `},f={1:`Page`,2:`Surface`,3:`Element`,4:`Element hovered`,5:`Element pressed`,6:`Separator`,7:`Border`,8:`Border hovered`,9:`Solid (anchor)`,10:`Solid hovered`,11:`Text muted`,12:`Text`},p=(e,n)=>t`
  <div style="margin-bottom: 2rem;" data-palette="${n}">
    <h3 style="${s.h3} margin-top: 0;">${e}</h3>
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
      ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
        <div class="color-swatch" data-token="${n}-${e}" style="height: 48px; background: var(${n}-${e}, transparent); border-radius: 4px;${e<=2?` border: 1px solid rgba(128,128,128,0.2);`:``}"></div>
      `)}
    </div>
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
      ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>{let n=e===9;return t`
        <div style="text-align: center;" data-step="${e}">
          <div style="${s.monoSm}${n?` font-weight: 700;`:` opacity: 0.8;`}">${e}</div>
          ${n?t`<div style="font-size: 0.625rem; line-height: 1; margin-top: 1px;">▲</div>`:``}
        </div>
      `})}
    </div>
  </div>
`,m=(e,n)=>t`
  <div style="margin-bottom: 2rem;">
    <h3 style="${s.h3}">${e}</h3>
    <table style="width: 100%; border-collapse: collapse;" data-palette="${n}">
      <thead>
        <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
          <th style="padding: 0.5rem 0.75rem; text-align: left; width: 64px;"></th>
          <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600; width: 50px;">Step</th>
          <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Token</th>
          <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600; width: 90px;">Hexcode</th>
          <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
        </tr>
      </thead>
      <tbody>
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>{let r=e===9;return t`
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);${r?` background: rgba(128,128,128,0.06);`:``}">
            <td style="padding: 0.5rem 0.75rem;">
              <div class="color-swatch" data-token="${n}-${e}" style="width: 48px; height: 32px; border-radius: 4px; background: var(${n}-${e}, transparent);${r?` border: 3px solid #1a1a1a; box-shadow: 0 0 0 1px rgba(255,255,255,0.8) inset;`:e<=2?` border: 1px solid rgba(128,128,128,0.2);`:``}"></div>
            </td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}${r?` font-weight: 700;`:``}">${e}</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}${r?` font-weight: 600;`:``}">${n}-${e}</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} opacity: 0.65;${r?` font-weight: 600;`:``}" class="hex-value" data-token="${n}-${e}">—</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption}${r?` font-weight: 600;`:` opacity: 0.65;`}">${f[e]}</td>
          </tr>
        `})}
      </tbody>
    </table>
  </div>
`,h=(e,n)=>t`
  <div style="margin-bottom: 2rem;" data-palette="${n}">
    <h3 style="${s.h3} margin-top: 0; color: #ffffff;">${e}</h3>
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
      ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
        <div class="color-swatch-dark" data-token="${n}-${e}" style="height: 48px; background: var(${n}-${e}, transparent); border-radius: 4px;${e<=3?` border: 1px solid rgba(255,255,255,0.15);`:``}"></div>
      `)}
    </div>
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
      ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>{let n=e===9;return t`
        <div style="text-align: center;" data-step="${e}">
          <div style="${s.monoSm} color: rgba(255,255,255,0.85);${n?` font-weight: 700;`:` opacity: 0.8;`}">${e}</div>
          ${n?t`<div style="font-size: 0.625rem; line-height: 1; margin-top: 1px; color: rgba(255,255,255,0.85);">▲</div>`:``}
        </div>
      `})}
    </div>
  </div>
`,g=(e,n)=>t`
  <div style="margin-bottom: 2rem;">
    <h3 style="${s.h3} color: #ffffff;">${e}</h3>
    <table style="width: 100%; border-collapse: collapse;" data-palette="${n}">
      <thead>
        <tr style="background: rgba(255,255,255,0.06); border-bottom: 2px solid rgba(255,255,255,0.15);">
          <th style="padding: 0.5rem 0.75rem; text-align: left; width: 64px;"></th>
          <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} color: rgba(255,255,255,0.75); font-weight: 600; width: 50px;">Step</th>
          <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Token</th>
          <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} color: rgba(255,255,255,0.75); font-weight: 600; width: 90px;">Hexcode</th>
          <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Purpose</th>
        </tr>
      </thead>
      <tbody>
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>{let r=e===9;return t`
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.12);${r?` background: rgba(255,255,255,0.06);`:``}">
            <td style="padding: 0.5rem 0.75rem;">
              <div class="color-swatch-dark" data-token="${n}-${e}" style="width: 48px; height: 32px; border-radius: 4px; background: var(${n}-${e}, transparent);${r?` border: 3px solid #ffffff; box-shadow: 0 0 0 1px rgba(0,0,0,0.3) inset;`:e<=3?` border: 1px solid rgba(255,255,255,0.15);`:``}"></div>
            </td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} color: rgba(255,255,255,0.9);${r?` font-weight: 700;`:``}">${e}</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} color: rgba(255,255,255,0.9);${r?` font-weight: 600;`:``}">${n}-${e}</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} color: rgba(255,255,255,0.65);${r?` font-weight: 600;`:``}" class="hex-value-dark" data-token="${n}-${e}">—</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} color: rgba(255,255,255,${r?`0.9`:`0.65`});${r?` font-weight: 600;`:``}">${f[e]}</td>
          </tr>
        `})}
      </tbody>
    </table>
  </div>
`,_={name:`Brand Colors`,render:()=>{let e=[{value:`maximus`,label:`Maximus`,description:`Violet primary, slate secondary, green accent`},{value:`va-gov`,label:`VA.gov`,description:`VA Blue primary, gold secondary, teal accent`}];return t(a||=r([`
      <div id="brand-colors-page" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: `,`; padding: 2rem; line-height: 1.6; color: inherit;">
        <h1 style="`,`">Brand Colors</h1>
        <p style="`,` opacity: 0.85; max-width: `,`; margin-bottom: 1.5rem;">
          Brand colors define the visual identity for each client engagement. Each brand provides three palettes — <strong>primary</strong>, <strong>secondary</strong>, and <strong>accent</strong> — all using the 12-step scale.
        </p>

        <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
          <p style="`,` margin: 0;">
            <strong>Theme-aware:</strong> The swatches below use CSS custom properties. Select a theme to see how palettes change per brand.
          </p>
        </div>

        <div style="margin-bottom: 2rem;">
          <label style="`,` font-weight: 600; display: block; margin-bottom: 0.5rem;">Select Theme</label>
          <select id="theme-selector" style="padding: 0.5rem 1rem; font-size: 1rem; border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; min-width: 240px; cursor: pointer;">
            `,`
          </select>
          <p id="theme-description" style="`,` opacity: 0.65; margin: 0.5rem 0 0;">Violet primary, slate secondary, green accent</p>
        </div>

        <h2 style="`,`">Light Mode</h2>
        <div id="brand-palettes" data-theme="maximus" style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15); margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">Dark Mode</h2>
        <div id="brand-palettes-dark" data-theme="maximus" data-mode="dark" style="background: #111111; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">On-Color Text</h2>
        <p style="`,` opacity: 0.85; max-width: `,`; margin-bottom: 1rem;">
          Text rendered on Step 9 solid backgrounds uses dedicated on-color tokens to ensure WCAG AA contrast (4.5:1).
        </p>
        <div id="on-color-examples" data-theme="maximus" style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 2rem;">
          <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--color-primary-9);">
            <span style="color: var(--color-text-on-primary); font-weight: 600;">Text on Primary</span>
          </div>
          <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--color-secondary-9);">
            <span style="color: var(--color-text-on-secondary); font-weight: 600;">Text on Secondary</span>
          </div>
          <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--color-accent-9);">
            <span style="color: var(--color-text-on-accent); font-weight: 600;">Text on Accent</span>
          </div>
        </div>

        <h2 style="`,`">Token Reference — Light Mode</h2>
        <div id="palette-tables" data-theme="maximus" style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15); margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">Token Reference — Dark Mode</h2>
        <div id="palette-tables-dark" data-theme="maximus" data-mode="dark" style="background: #111111; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">Usage</h2>
        <pre style="`,` background: rgba(128,128,128,0.08); padding: 1rem 1.25rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
/* Import a theme package */
npm install @mms/theme-va-gov

/* In your entry CSS */
@import '@mms/theme-va-gov/index.css';

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

        // Scenario 3 (decorative) palettes — only show steps 1-9
        const decorativePalettes = {
          'maximus': ['--color-accent'],
          'va-gov': ['--color-secondary'],
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
          // Update decorative palette visibility
          updateDecorativeVisibility(themeName);
        };

        // Hide steps 10-12 for decorative (scenario 3) palettes
        const updateDecorativeVisibility = (themeName) => {
          const decorative = decorativePalettes[themeName] || [];
          
          // For each palette container, check if it's decorative
          document.querySelectorAll('[data-palette]').forEach(container => {
            const palette = container.getAttribute('data-palette');
            const isDecorative = decorative.includes(palette);
            
            // Hide/show step cells and rows 10-12
            container.querySelectorAll('[data-step]').forEach(cell => {
              const step = parseInt(cell.getAttribute('data-step'), 10);
              if (step >= 10) {
                cell.style.visibility = isDecorative ? 'hidden' : 'visible';
              }
            });
            
            // For swatches in the scale grid
            container.querySelectorAll('.color-swatch, .color-swatch-dark').forEach(swatch => {
              const token = swatch.getAttribute('data-token');
              if (token) {
                const step = parseInt(token.split('-').pop(), 10);
                if (step >= 10) {
                  swatch.style.visibility = isDecorative ? 'hidden' : 'visible';
                }
              }
            });
          });
          
          // Also handle tables
          document.querySelectorAll('table[data-palette]').forEach(table => {
            const palette = table.getAttribute('data-palette');
            const isDecorative = decorative.includes(palette);
            
            table.querySelectorAll('tbody tr').forEach((row, idx) => {
              const step = idx + 1;
              if (step >= 10) {
                row.style.display = isDecorative ? 'none' : '';
              }
            });
          });
        };

        // Initial update after render
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            updateHexValues();
            updateHexValuesDark();
            updateDecorativeVisibility('maximus'); // Initial theme
          });
        });

        if (selector && description) {
          selector.addEventListener('change', (e) => {
            const value = e.target.value;
            const theme = themes.find(t => t.value === value);

            if (value) {
              updateTheme(value);
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
      <div id="brand-colors-page" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: `,`; padding: 2rem; line-height: 1.6; color: inherit;">
        <h1 style="`,`">Brand Colors</h1>
        <p style="`,` opacity: 0.85; max-width: `,`; margin-bottom: 1.5rem;">
          Brand colors define the visual identity for each client engagement. Each brand provides three palettes — <strong>primary</strong>, <strong>secondary</strong>, and <strong>accent</strong> — all using the 12-step scale.
        </p>

        <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
          <p style="`,` margin: 0;">
            <strong>Theme-aware:</strong> The swatches below use CSS custom properties. Select a theme to see how palettes change per brand.
          </p>
        </div>

        <div style="margin-bottom: 2rem;">
          <label style="`,` font-weight: 600; display: block; margin-bottom: 0.5rem;">Select Theme</label>
          <select id="theme-selector" style="padding: 0.5rem 1rem; font-size: 1rem; border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; min-width: 240px; cursor: pointer;">
            `,`
          </select>
          <p id="theme-description" style="`,` opacity: 0.65; margin: 0.5rem 0 0;">Violet primary, slate secondary, green accent</p>
        </div>

        <h2 style="`,`">Light Mode</h2>
        <div id="brand-palettes" data-theme="maximus" style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15); margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">Dark Mode</h2>
        <div id="brand-palettes-dark" data-theme="maximus" data-mode="dark" style="background: #111111; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">On-Color Text</h2>
        <p style="`,` opacity: 0.85; max-width: `,`; margin-bottom: 1rem;">
          Text rendered on Step 9 solid backgrounds uses dedicated on-color tokens to ensure WCAG AA contrast (4.5:1).
        </p>
        <div id="on-color-examples" data-theme="maximus" style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 2rem;">
          <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--color-primary-9);">
            <span style="color: var(--color-text-on-primary); font-weight: 600;">Text on Primary</span>
          </div>
          <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--color-secondary-9);">
            <span style="color: var(--color-text-on-secondary); font-weight: 600;">Text on Secondary</span>
          </div>
          <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--color-accent-9);">
            <span style="color: var(--color-text-on-accent); font-weight: 600;">Text on Accent</span>
          </div>
        </div>

        <h2 style="`,`">Token Reference — Light Mode</h2>
        <div id="palette-tables" data-theme="maximus" style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15); margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">Token Reference — Dark Mode</h2>
        <div id="palette-tables-dark" data-theme="maximus" data-mode="dark" style="background: #111111; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">Usage</h2>
        <pre style="`,` background: rgba(128,128,128,0.08); padding: 1rem 1.25rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
/* Import a theme package */
npm install @mms/theme-va-gov

/* In your entry CSS */
@import '@mms/theme-va-gov/index.css';

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

        // Scenario 3 (decorative) palettes — only show steps 1-9
        const decorativePalettes = {
          'maximus': ['--color-accent'],
          'va-gov': ['--color-secondary'],
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
          // Update decorative palette visibility
          updateDecorativeVisibility(themeName);
        };

        // Hide steps 10-12 for decorative (scenario 3) palettes
        const updateDecorativeVisibility = (themeName) => {
          const decorative = decorativePalettes[themeName] || [];
          
          // For each palette container, check if it's decorative
          document.querySelectorAll('[data-palette]').forEach(container => {
            const palette = container.getAttribute('data-palette');
            const isDecorative = decorative.includes(palette);
            
            // Hide/show step cells and rows 10-12
            container.querySelectorAll('[data-step]').forEach(cell => {
              const step = parseInt(cell.getAttribute('data-step'), 10);
              if (step >= 10) {
                cell.style.visibility = isDecorative ? 'hidden' : 'visible';
              }
            });
            
            // For swatches in the scale grid
            container.querySelectorAll('.color-swatch, .color-swatch-dark').forEach(swatch => {
              const token = swatch.getAttribute('data-token');
              if (token) {
                const step = parseInt(token.split('-').pop(), 10);
                if (step >= 10) {
                  swatch.style.visibility = isDecorative ? 'hidden' : 'visible';
                }
              }
            });
          });
          
          // Also handle tables
          document.querySelectorAll('table[data-palette]').forEach(table => {
            const palette = table.getAttribute('data-palette');
            const isDecorative = decorative.includes(palette);
            
            table.querySelectorAll('tbody tr').forEach((row, idx) => {
              const step = idx + 1;
              if (step >= 10) {
                row.style.display = isDecorative ? 'none' : '';
              }
            });
          });
        };

        // Initial update after render
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            updateHexValues();
            updateHexValuesDark();
            updateDecorativeVisibility('maximus'); // Initial theme
          });
        });

        if (selector && description) {
          selector.addEventListener('change', (e) => {
            const value = e.target.value;
            const theme = themes.find(t => t.value === value);

            if (value) {
              updateTheme(value);
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
    `]),l,s.h1,s.body,c,s.bodySm,s.bodySm,e.map(e=>t`
              <option value="${e.value}">${e.label}</option>
            `),s.caption,s.h2,p(`Primary`,`--color-primary`),p(`Secondary`,`--color-secondary`),p(`Accent`,`--color-accent`),s.h2,h(`Primary`,`--color-primary`),h(`Secondary`,`--color-secondary`),h(`Accent`,`--color-accent`),s.h2,s.body,c,s.h2,m(`Primary Palette`,`--color-primary`),m(`Secondary Palette`,`--color-secondary`),m(`Accent Palette`,`--color-accent`),s.h2,g(`Primary Palette`,`--color-primary`),g(`Secondary Palette`,`--color-secondary`),g(`Accent Palette`,`--color-accent`),s.h2,s.monoSm,JSON.stringify(e))}},v={name:`State Styling`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${l}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${s.h1}">State Styling</h1>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        State styles provide visual feedback for interactive elements. They communicate what's happening — whether an element is being hovered, pressed, focused, disabled, or in a validation state.
      </p>
      <ul style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 2rem; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem;"><strong>Interaction feedback</strong> — Confirms "I see your action" (hover, pressed, focus)</li>
        <li style="margin-bottom: 0.5rem;"><strong>Status communication</strong> — Explains "This is the current state" (disabled, error, success)</li>
      </ul>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- SCOPE                                                               -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${s.h2}">Scope</h2>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        This token set covers color changes for interactive states. It does not cover animation, transitions, or non-color feedback.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem; max-width: ${c};">
        <div style="background: rgba(34, 197, 94, 0.06); padding: 1rem 1.25rem; border-radius: 6px; border: 1px solid rgba(34, 197, 94, 0.15);">
          <p style="${s.bodySm} font-weight: 600; margin: 0 0 0.5rem; color: #16a34a;">In Scope</p>
          <ul style="${s.caption} opacity: 0.85; margin: 0; padding-left: 1.25rem;">
            <li>Hover states</li>
            <li>Pressed/active states</li>
            <li>Focus indicators</li>
            <li>Disabled appearance</li>
            <li>Validation states (error, success, caution)</li>
            <li>Selected/active surface states</li>
          </ul>
        </div>
        <div style="background: rgba(128, 128, 128, 0.06); padding: 1rem 1.25rem; border-radius: 6px; border: 1px solid rgba(128, 128, 128, 0.15);">
          <p style="${s.bodySm} font-weight: 600; margin: 0 0 0.5rem; opacity: 0.75;">Out of Scope</p>
          <ul style="${s.caption} opacity: 0.65; margin: 0; padding-left: 1.25rem;">
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

      <h2 style="${s.h2}">Architecture</h2>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        State tokens live in the <strong>semantic layer</strong>. They reference the 12-step color scale via <code style="${s.monoSm}">var()</code>, which means they automatically adapt to light/dark mode and brand themes.
      </p>

      <h3 style="${s.h3}">Three Patterns</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Pattern</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Used For</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">How It Works</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; font-weight: 500;">Step-Shifting</td>
            <td style="padding: 0.5rem 0.75rem;">Hover, pressed</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.75;">Move one step up in the scale (9→10→11)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; font-weight: 500;">Exit to Neutral</td>
            <td style="padding: 0.5rem 0.75rem;">Disabled</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.75;">Leave brand scale entirely, use neutral grays</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; font-weight: 500;">Utility Colors</td>
            <td style="padding: 0.5rem 0.75rem;">Error, success, caution, focus</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.75;">Use structural utility tokens (fixed across themes)</td>
          </tr>
        </tbody>
      </table>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 4. TOKEN REFERENCE                                                  -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${s.h2}">Token Reference</h2>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        Complete list of semantic state tokens. All tokens reference <code style="${s.monoSm}">var(--color-*)</code> and adapt automatically to theme.
      </p>

      <h3 style="${s.h3}">Action Tokens</h3>
      <p style="${s.caption} opacity: 0.65; margin-bottom: 0.75rem;">For buttons and primary interactive elements</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">References</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-action-solid</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-9</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Primary button default</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-action-solid-hover</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-10</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Primary button hover</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-action-solid-pressed</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-11</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Primary button pressed</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-action-subtle</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-3</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Ghost/secondary button default</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-action-subtle-hover</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-4</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Ghost button hover</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-action-subtle-active</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-5</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Ghost button pressed</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${s.h3}">Surface Tokens</h3>
      <p style="${s.caption} opacity: 0.65; margin-bottom: 0.75rem;">For table rows, list items, card hover states</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">References</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-surface-hover</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-3</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Table row hover, list item hover</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-surface-active</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-4</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Selected row, active item</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-surface-brand-hover</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-3</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Hover on brand-tinted surface</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-surface-brand-active</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-4</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Selected on brand surface</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${s.h3}">Disabled Tokens</h3>
      <p style="${s.caption} opacity: 0.65; margin-bottom: 0.75rem;">For unavailable/inactive elements (exits to neutral scale)</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">References</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-disabled-text</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-8</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Disabled text, icons</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-disabled-surface</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-3</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Disabled input background</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-disabled-solid</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-7</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Disabled button fill</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-disabled-stroke</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">neutral-6</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Disabled border</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${s.h3}">Input Validation Tokens</h3>
      <p style="${s.caption} opacity: 0.65; margin-bottom: 0.75rem;">For form validation states (references utility colors)</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">References</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-input-border-focus</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">primary-8</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Focused input border</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-input-border-error</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">utility-error-emphasis</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Invalid input border</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-input-surface-error</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">utility-error-muted</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Invalid input background</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-input-border-success</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">utility-success-emphasis</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Valid input border</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-input-surface-success</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">utility-success-muted</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Valid input background</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-input-border-caution</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">utility-caution-emphasis</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Warning input border</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-input-surface-caution</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">utility-caution-muted</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Warning input background</td>
          </tr>
        </tbody>
      </table>
      <p style="${s.caption} opacity: 0.65; max-width: ${c}; margin-top: -1rem; margin-bottom: 2rem;">
        <strong>Note:</strong> Validation tokens reference utility colors, which swap between light and dark mode palettes. The semantic meaning stays consistent — only the underlying values change to maintain contrast in each mode.
      </p>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 5. RATIONALE                                                        -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${s.h2}">Rationale</h2>

      <h3 style="${s.h3}">Why Step-Shifting?</h3>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        An alternative approach is <strong>overlays</strong> — adding semi-transparent black/white layers on top of colors (e.g., <code style="${s.monoSm}">rgba(0,0,0,0.20)</code>). Material Design 2 used this approach. We chose step-shifting instead:
      </p>
      <ul style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 2rem; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem;"><strong>Token integrity</strong> — Overlays produce computed colors that aren't tokens. They can't be referenced, themed, or contrast-validated.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Predictable accessibility</strong> — Step-shifting maintains known contrast ratios. Overlays produce inconsistent results across the scale.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Design-code parity</strong> — Figma Variables can't express blend modes. Step-shifting works identically in design and code.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Simpler implementation</strong> — Just reference the next step: <code style="${s.monoSm}">var(--color-primary-10)</code>.</li>
      </ul>

      <h3 style="${s.h3}">Why Exit to Neutral for Disabled?</h3>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 2rem;">
        If disabled elements stayed within the brand scale (e.g., <code style="${s.monoSm}">primary-3</code> for a disabled primary button), they could be confused with hover or selected states. Gray universally signals "unavailable" — switching to neutral makes the disabled state unambiguous across all brand themes.
      </p>

      <h3 style="${s.h3}">Why Utility Colors for Validation?</h3>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 2rem;">
        Error red, success green, and caution yellow have fixed semantic meaning. They must be consistent across themes to maintain user expectations. A red error on Virginia's blue theme should look the same as on Maximus's purple theme.
      </p>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 6. CODE EXAMPLES                                                    -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="${s.h2}">Code Examples</h2>

      <h3 style="${s.h3}">Primary Button</h3>
      <pre style="${s.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
.button-primary {
  background: var(--color-action-solid);
  color: var(--color-text-on-emphasis);
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

      <h3 style="${s.h3}">Ghost Button</h3>
      <pre style="${s.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
.button-ghost {
  background: var(--color-action-subtle);
  color: var(--color-primary-11);
}

.button-ghost:hover {
  background: var(--color-action-subtle-hover);
}

.button-ghost:active {
  background: var(--color-action-subtle-active);
}</pre>

      <h3 style="${s.h3}">Table Row</h3>
      <pre style="${s.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
.table-row:hover {
  background: var(--color-surface-hover);
}

.table-row[aria-selected="true"] {
  background: var(--color-surface-active);
}</pre>

      <h3 style="${s.h3}">Input with Validation</h3>
      <pre style="${s.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
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

      <h3 style="${s.h3}">Focus Ring</h3>
      <pre style="${s.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;">
/* Focus ring uses utility token — consistent across all themes */
.button:focus-visible {
  outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}</pre>

    </div>
  `},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Colors</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        The color system is designed for multi-brand theming with WCAG accessibility built in. It uses a two-layer architecture: structural tokens define the slots, brand tokens provide the primitives.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 3rem; border-radius: 0 6px 6px 0;">
        <h3 style="\${t.h3} margin: 0 0 0.75rem;">Two-Layer Architecture</h3>
        <p style="\${t.bodySm} margin: 0 0 1rem;">
          <strong>Layer 1 — Structural (shell tokens)</strong><br>
          Defines the 12-step color scale contract. Each step is a slot with a designated purpose. The neutral palette follows this structure and is shared across all themes.
        </p>
        <p style="\${t.bodySm} margin: 0 0 1rem;">
          <strong>Layer 2 — Brand (primitives)</strong><br>
          Each brand theme provides primary, secondary, and accent palettes that fill the structural slots. Themes are standalone sheets, not overrides.
        </p>
        <p style="\${t.bodySm} margin: 0; opacity: 0.8;">
          <strong>Utility colors</strong> (success, error, caution, focus ring) are separate — they don't follow the 12-step framework. They're fixed structural colors that remain consistent regardless of brand.
        </p>
      </div>

      <h2 style="\${t.h2}; margin-top: 3rem;">Color Scale Model</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        We adopt the <strong>Radix Colors 12-step scale</strong> because it solves the "which shade?" problem. Traditional scales (like Tailwind's 50–900) require developers to guess which value fits each use case — "should hover be 600 or 700?" becomes tribal knowledge.
      </p>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        With the 12-step model, <strong>each step number maps to a specific UI purpose</strong>. Step 4 is always hover. Step 9 is always the solid fill. Step 12 is always high-contrast text. The step defines the role, not just the lightness.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 80px;">Steps</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Category</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1–2</td>
            <td style="padding: 0.5rem 0.75rem;">Backgrounds</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">1 = page, 2 = surface (cards, sidebars, panels)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">3–5</td>
            <td style="padding: 0.5rem 0.75rem;">Elements</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Interactive UI states: default → hovered → pressed</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">6–8</td>
            <td style="padding: 0.5rem 0.75rem;">Borders</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">6 = separator, 7 = border, 8 = border hovered</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">9–10</td>
            <td style="padding: 0.5rem 0.75rem;">Solids</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">9 = solid fill (buttons, badges), 10 = solid hovered</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">11–12</td>
            <td style="padding: 0.5rem 0.75rem;">Text</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">11 = text muted (secondary), 12 = text (primary)</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Light vs. Dark Mode</h3>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Dark mode uses <strong>separate palettes, not inverted values</strong>. Step 1 in light mode is near-white; step 1 in dark mode is near-black. The step numbers maintain their semantic meaning — step 9 is always the accessible solid fill, whether on a light or dark background.
      </p>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        This approach ensures that <strong>component code doesn't change</strong> between modes. A button always uses <code style="\${t.monoSm}">--color-primary-9</code> — the palette behind that token is what changes.
      </p>

      <h2 style="\${t.h2}; margin-top: 3rem;">Palettes</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
        <div>
          <h4 style="margin: 0 0 0.5rem; font-weight: 600;">Neutral (structural)</h4>
          <p style="\${t.caption} opacity: 0.65; margin: 0;">Grayscale for backgrounds, borders, text. Follows the 12-step structure. Shared across all themes.</p>
        </div>
        <div>
          <h4 style="margin: 0 0 0.5rem; font-weight: 600;">Primary (brand)</h4>
          <p style="\${t.caption} opacity: 0.65; margin: 0;">Main identity color. Buttons, links, primary actions. 12-step scale, varies per theme.</p>
        </div>
        <div>
          <h4 style="margin: 0 0 0.5rem; font-weight: 600;">Secondary (brand)</h4>
          <p style="\${t.caption} opacity: 0.65; margin: 0;">Supporting color. Secondary buttons, accents. 12-step scale, varies per theme.</p>
        </div>
        <div>
          <h4 style="margin: 0 0 0.5rem; font-weight: 600;">Accent (brand)</h4>
          <p style="\${t.caption} opacity: 0.65; margin: 0;">Highlight color. Badges, tags, promotional. 12-step scale, varies per theme.</p>
        </div>
      </div>
      <div style="background: rgba(128,128,128,0.06); padding: 1rem 1.25rem; border-radius: 6px; margin-bottom: 3rem;">
        <h4 style="margin: 0 0 0.5rem; font-weight: 600;">Utility (separate)</h4>
        <p style="\${t.caption} opacity: 0.65; margin: 0;">Success, error, caution, and focus ring. These are <strong>not</strong> part of the 12-step framework — they're fixed structural colors for status feedback and accessibility.</p>
      </div>

      <h2 style="\${t.h2}; margin-top: 3rem;">Section Index</h2>
      <ul style="\${t.body} max-width: \${PROSE_MAX}; margin: 0 0 2rem 1.5rem; padding: 0;">
        <li style="margin-bottom: 0.5rem;"><strong>Color Framework</strong> — The 12-step scale system and how to use it</li>
        <li style="margin-bottom: 0.5rem;"><strong>Color Generator</strong> — OKLCH-based palette generation with accessibility validation</li>
        <li style="margin-bottom: 0.5rem;"><strong>Designing in Figma</strong> — How designers work with the color system</li>
        <li style="margin-bottom: 0.5rem;"><strong>Brand Colors</strong> — Primary, secondary, accent palettes per theme</li>
        <li style="margin-bottom: 0.5rem;"><strong>Neutral Colors</strong> — Grayscale palette for UI structure</li>
        <li style="margin-bottom: 0.5rem;"><strong>Utility Colors</strong> — Success, error, caution, and focus ring</li>
        <li style="margin-bottom: 0.5rem;"><strong>State Styling</strong> — Hover, pressed, disabled, and readonly patterns</li>
      </ul>
    </div>
  \`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Designing in Figma',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Designing in Figma</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The color system maps directly to Figma Variables. Designers work with the same 12-step scale, ensuring design-to-code parity.
      </p>

      <h2 style="\${t.h2}">Variable Structure</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Figma Variables mirror the CSS token structure:
      </p>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
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

      <h2 style="\${t.h2}">Theme Modes</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Create Variable Modes for each brand:
      </p>
      <ul style="\${t.body} max-width: \${PROSE_MAX}; margin: 0 0 1.5rem 1.5rem; padding: 0;">
        <li style="margin-bottom: 0.5rem;"><strong>Default</strong> — Neutral (development fallback)</li>
        <li style="margin-bottom: 0.5rem;"><strong>Maximus</strong> — Pantone Violet primary</li>
        <li style="margin-bottom: 0.5rem;"><strong>VA.gov</strong> — VA Blue primary</li>
        <li style="margin-bottom: 0.5rem;"><strong>[Client]</strong> — Per-engagement brand</li>
      </ul>

      <h2 style="\${t.h2}">Step Selection Guide</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        When designing components, use step numbers consistently:
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Element</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Normal</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Hover</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Pressed</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">List item / Card</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-3</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-4</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-5</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">Primary button</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-9</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-10</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">—</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">Ghost button</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">transparent</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-3</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-4</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">Card border</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-6</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">—</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">—</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">Input border</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-7</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-8</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">—</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">Body text</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-12</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">—</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">—</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem;">Placeholder text</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-11</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">—</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">—</td>
          </tr>
        </tbody>
      </table>

      <h2 style="\${t.h2}">Handoff Notes</h2>
      <ul style="\${t.body} max-width: \${PROSE_MAX}; margin: 0 0 2rem 1.5rem; padding: 0;">
        <li style="margin-bottom: 0.5rem;">Always reference Variables, never hardcode hex values</li>
        <li style="margin-bottom: 0.5rem;">Step numbers in Figma = step numbers in CSS (1:1 mapping)</li>
        <li style="margin-bottom: 0.5rem;">Use the theme Mode to preview how designs render across brands</li>
        <li style="margin-bottom: 0.5rem;">Focus rings are structural — don't customize per brand</li>
      </ul>
    </div>
  \`
}`,...d.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Brand Colors',
  render: () => {
    const themes = [{
      value: 'maximus',
      label: 'Maximus',
      description: 'Violet primary, slate secondary, green accent'
    }, {
      value: 'va-gov',
      label: 'VA.gov',
      description: 'VA Blue primary, gold secondary, teal accent'
    }];
    return html\`
      <div id="brand-colors-page" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
        <h1 style="\${t.h1}">Brand Colors</h1>
        <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
          Brand colors define the visual identity for each client engagement. Each brand provides three palettes — <strong>primary</strong>, <strong>secondary</strong>, and <strong>accent</strong> — all using the 12-step scale.
        </p>

        <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
          <p style="\${t.bodySm} margin: 0;">
            <strong>Theme-aware:</strong> The swatches below use CSS custom properties. Select a theme to see how palettes change per brand.
          </p>
        </div>

        <div style="margin-bottom: 2rem;">
          <label style="\${t.bodySm} font-weight: 600; display: block; margin-bottom: 0.5rem;">Select Theme</label>
          <select id="theme-selector" style="padding: 0.5rem 1rem; font-size: 1rem; border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; min-width: 240px; cursor: pointer;">
            \${themes.map(theme => html\`
              <option value="\${theme.value}">\${theme.label}</option>
            \`)}
          </select>
          <p id="theme-description" style="\${t.caption} opacity: 0.65; margin: 0.5rem 0 0;">Violet primary, slate secondary, green accent</p>
        </div>

        <h2 style="\${t.h2}">Light Mode</h2>
        <div id="brand-palettes" data-theme="maximus" style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15); margin-bottom: 2rem;">
          \${paletteScale('Primary', '--color-primary')}
          \${paletteScale('Secondary', '--color-secondary')}
          \${paletteScale('Accent', '--color-accent')}
        </div>

        <h2 style="\${t.h2}">Dark Mode</h2>
        <div id="brand-palettes-dark" data-theme="maximus" data-mode="dark" style="background: #111111; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
          \${paletteScaleDark('Primary', '--color-primary')}
          \${paletteScaleDark('Secondary', '--color-secondary')}
          \${paletteScaleDark('Accent', '--color-accent')}
        </div>

        <h2 style="\${t.h2}">On-Color Text</h2>
        <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
          Text rendered on Step 9 solid backgrounds uses dedicated on-color tokens to ensure WCAG AA contrast (4.5:1).
        </p>
        <div id="on-color-examples" data-theme="maximus" style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 2rem;">
          <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--color-primary-9);">
            <span style="color: var(--color-text-on-primary); font-weight: 600;">Text on Primary</span>
          </div>
          <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--color-secondary-9);">
            <span style="color: var(--color-text-on-secondary); font-weight: 600;">Text on Secondary</span>
          </div>
          <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--color-accent-9);">
            <span style="color: var(--color-text-on-accent); font-weight: 600;">Text on Accent</span>
          </div>
        </div>

        <h2 style="\${t.h2}">Token Reference — Light Mode</h2>
        <div id="palette-tables" data-theme="maximus" style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15); margin-bottom: 2rem;">
          \${paletteTable('Primary Palette', '--color-primary')}
          \${paletteTable('Secondary Palette', '--color-secondary')}
          \${paletteTable('Accent Palette', '--color-accent')}
        </div>

        <h2 style="\${t.h2}">Token Reference — Dark Mode</h2>
        <div id="palette-tables-dark" data-theme="maximus" data-mode="dark" style="background: #111111; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
          \${paletteTableDark('Primary Palette', '--color-primary')}
          \${paletteTableDark('Secondary Palette', '--color-secondary')}
          \${paletteTableDark('Accent Palette', '--color-accent')}
        </div>

        <h2 style="\${t.h2}">Usage</h2>
        <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem 1.25rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
/* Import a theme package */
npm install @mms/theme-va-gov

/* In your entry CSS */
@import '@mms/theme-va-gov/index.css';

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

        // Scenario 3 (decorative) palettes — only show steps 1-9
        const decorativePalettes = {
          'maximus': ['--color-accent'],
          'va-gov': ['--color-secondary'],
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
          // Update decorative palette visibility
          updateDecorativeVisibility(themeName);
        };

        // Hide steps 10-12 for decorative (scenario 3) palettes
        const updateDecorativeVisibility = (themeName) => {
          const decorative = decorativePalettes[themeName] || [];
          
          // For each palette container, check if it's decorative
          document.querySelectorAll('[data-palette]').forEach(container => {
            const palette = container.getAttribute('data-palette');
            const isDecorative = decorative.includes(palette);
            
            // Hide/show step cells and rows 10-12
            container.querySelectorAll('[data-step]').forEach(cell => {
              const step = parseInt(cell.getAttribute('data-step'), 10);
              if (step >= 10) {
                cell.style.visibility = isDecorative ? 'hidden' : 'visible';
              }
            });
            
            // For swatches in the scale grid
            container.querySelectorAll('.color-swatch, .color-swatch-dark').forEach(swatch => {
              const token = swatch.getAttribute('data-token');
              if (token) {
                const step = parseInt(token.split('-').pop(), 10);
                if (step >= 10) {
                  swatch.style.visibility = isDecorative ? 'hidden' : 'visible';
                }
              }
            });
          });
          
          // Also handle tables
          document.querySelectorAll('table[data-palette]').forEach(table => {
            const palette = table.getAttribute('data-palette');
            const isDecorative = decorative.includes(palette);
            
            table.querySelectorAll('tbody tr').forEach((row, idx) => {
              const step = idx + 1;
              if (step >= 10) {
                row.style.display = isDecorative ? 'none' : '';
              }
            });
          });
        };

        // Initial update after render
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            updateHexValues();
            updateHexValuesDark();
            updateDecorativeVisibility('maximus'); // Initial theme
          });
        });

        if (selector && description) {
          selector.addEventListener('change', (e) => {
            const value = e.target.value;
            const theme = themes.find(t => t.value === value);

            if (value) {
              updateTheme(value);
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'State Styling',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">State Styling</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        State styles provide visual feedback for interactive elements. They communicate what's happening — whether an element is being hovered, pressed, focused, disabled, or in a validation state.
      </p>
      <ul style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem;"><strong>Interaction feedback</strong> — Confirms "I see your action" (hover, pressed, focus)</li>
        <li style="margin-bottom: 0.5rem;"><strong>Status communication</strong> — Explains "This is the current state" (disabled, error, success)</li>
      </ul>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- SCOPE                                                               -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Scope</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        This token set covers color changes for interactive states. It does not cover animation, transitions, or non-color feedback.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem; max-width: \${PROSE_MAX};">
        <div style="background: rgba(34, 197, 94, 0.06); padding: 1rem 1.25rem; border-radius: 6px; border: 1px solid rgba(34, 197, 94, 0.15);">
          <p style="\${t.bodySm} font-weight: 600; margin: 0 0 0.5rem; color: #16a34a;">In Scope</p>
          <ul style="\${t.caption} opacity: 0.85; margin: 0; padding-left: 1.25rem;">
            <li>Hover states</li>
            <li>Pressed/active states</li>
            <li>Focus indicators</li>
            <li>Disabled appearance</li>
            <li>Validation states (error, success, caution)</li>
            <li>Selected/active surface states</li>
          </ul>
        </div>
        <div style="background: rgba(128, 128, 128, 0.06); padding: 1rem 1.25rem; border-radius: 6px; border: 1px solid rgba(128, 128, 128, 0.15);">
          <p style="\${t.bodySm} font-weight: 600; margin: 0 0 0.5rem; opacity: 0.75;">Out of Scope</p>
          <ul style="\${t.caption} opacity: 0.65; margin: 0; padding-left: 1.25rem;">
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

      <h2 style="\${t.h2}">Architecture</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        State tokens live in the <strong>semantic layer</strong>. They reference the 12-step color scale via <code style="\${t.monoSm}">var()</code>, which means they automatically adapt to light/dark mode and brand themes.
      </p>

      <h3 style="\${t.h3}">Three Patterns</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Pattern</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Used For</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">How It Works</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; font-weight: 500;">Step-Shifting</td>
            <td style="padding: 0.5rem 0.75rem;">Hover, pressed</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">Move one step up in the scale (9→10→11)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; font-weight: 500;">Exit to Neutral</td>
            <td style="padding: 0.5rem 0.75rem;">Disabled</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">Leave brand scale entirely, use neutral grays</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; font-weight: 500;">Utility Colors</td>
            <td style="padding: 0.5rem 0.75rem;">Error, success, caution, focus</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">Use structural utility tokens (fixed across themes)</td>
          </tr>
        </tbody>
      </table>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 4. TOKEN REFERENCE                                                  -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Token Reference</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Complete list of semantic state tokens. All tokens reference <code style="\${t.monoSm}">var(--color-*)</code> and adapt automatically to theme.
      </p>

      <h3 style="\${t.h3}">Action Tokens</h3>
      <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.75rem;">For buttons and primary interactive elements</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">References</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-action-solid</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-9</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Primary button default</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-action-solid-hover</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-10</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Primary button hover</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-action-solid-pressed</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-11</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Primary button pressed</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-action-subtle</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-3</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Ghost/secondary button default</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-action-subtle-hover</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-4</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Ghost button hover</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-action-subtle-active</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-5</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Ghost button pressed</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Surface Tokens</h3>
      <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.75rem;">For table rows, list items, card hover states</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">References</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-surface-hover</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-3</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Table row hover, list item hover</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-surface-active</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-4</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Selected row, active item</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-surface-brand-hover</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-3</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Hover on brand-tinted surface</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-surface-brand-active</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-4</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Selected on brand surface</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Disabled Tokens</h3>
      <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.75rem;">For unavailable/inactive elements (exits to neutral scale)</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">References</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-disabled-text</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-8</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Disabled text, icons</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-disabled-surface</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-3</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Disabled input background</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-disabled-solid</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-7</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Disabled button fill</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-disabled-stroke</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">neutral-6</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Disabled border</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Input Validation Tokens</h3>
      <p style="\${t.caption} opacity: 0.65; margin-bottom: 0.75rem;">For form validation states (references utility colors)</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">References</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-input-border-focus</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">primary-8</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Focused input border</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-input-border-error</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">utility-error-emphasis</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Invalid input border</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-input-surface-error</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">utility-error-muted</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Invalid input background</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-input-border-success</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">utility-success-emphasis</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Valid input border</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-input-surface-success</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">utility-success-muted</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Valid input background</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-input-border-caution</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">utility-caution-emphasis</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Warning input border</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-input-surface-caution</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">utility-caution-muted</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Warning input background</td>
          </tr>
        </tbody>
      </table>
      <p style="\${t.caption} opacity: 0.65; max-width: \${PROSE_MAX}; margin-top: -1rem; margin-bottom: 2rem;">
        <strong>Note:</strong> Validation tokens reference utility colors, which swap between light and dark mode palettes. The semantic meaning stays consistent — only the underlying values change to maintain contrast in each mode.
      </p>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 5. RATIONALE                                                        -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Rationale</h2>

      <h3 style="\${t.h3}">Why Step-Shifting?</h3>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        An alternative approach is <strong>overlays</strong> — adding semi-transparent black/white layers on top of colors (e.g., <code style="\${t.monoSm}">rgba(0,0,0,0.20)</code>). Material Design 2 used this approach. We chose step-shifting instead:
      </p>
      <ul style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem;"><strong>Token integrity</strong> — Overlays produce computed colors that aren't tokens. They can't be referenced, themed, or contrast-validated.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Predictable accessibility</strong> — Step-shifting maintains known contrast ratios. Overlays produce inconsistent results across the scale.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Design-code parity</strong> — Figma Variables can't express blend modes. Step-shifting works identically in design and code.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Simpler implementation</strong> — Just reference the next step: <code style="\${t.monoSm}">var(--color-primary-10)</code>.</li>
      </ul>

      <h3 style="\${t.h3}">Why Exit to Neutral for Disabled?</h3>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        If disabled elements stayed within the brand scale (e.g., <code style="\${t.monoSm}">primary-3</code> for a disabled primary button), they could be confused with hover or selected states. Gray universally signals "unavailable" — switching to neutral makes the disabled state unambiguous across all brand themes.
      </p>

      <h3 style="\${t.h3}">Why Utility Colors for Validation?</h3>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Error red, success green, and caution yellow have fixed semantic meaning. They must be consistent across themes to maintain user expectations. A red error on Virginia's blue theme should look the same as on Maximus's purple theme.
      </p>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- 6. CODE EXAMPLES                                                    -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->

      <h2 style="\${t.h2}">Code Examples</h2>

      <h3 style="\${t.h3}">Primary Button</h3>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
.button-primary {
  background: var(--color-action-solid);
  color: var(--color-text-on-emphasis);
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

      <h3 style="\${t.h3}">Ghost Button</h3>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
.button-ghost {
  background: var(--color-action-subtle);
  color: var(--color-primary-11);
}

.button-ghost:hover {
  background: var(--color-action-subtle-hover);
}

.button-ghost:active {
  background: var(--color-action-subtle-active);
}</pre>

      <h3 style="\${t.h3}">Table Row</h3>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
.table-row:hover {
  background: var(--color-surface-hover);
}

.table-row[aria-selected="true"] {
  background: var(--color-surface-active);
}</pre>

      <h3 style="\${t.h3}">Input with Validation</h3>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
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

      <h3 style="\${t.h3}">Focus Ring</h3>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;">
/* Focus ring uses utility token — consistent across all themes */
.button:focus-visible {
  outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}</pre>

    </div>
  \`
}`,...v.parameters?.docs?.source}}},y=[`Overview`,`DesigningInFigma`,`BrandColors`,`StateStyling`]}))();export{_ as BrandColors,d as DesigningInFigma,u as Overview,v as StateStyling,y as __namedExportsOrder,o as default};