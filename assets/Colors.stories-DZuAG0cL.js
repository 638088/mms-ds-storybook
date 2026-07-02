import{i as e}from"./preload-helper-xPQekRTU.js";import{K as t,V as n}from"./iframe-Cy4I9pO6.js";function r(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var i=e((()=>{})),a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{n(),i(),o={title:`Foundations/Colors`},s={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 2rem 0 0.75rem;`,h3:`font-size: 1.125rem; line-height: 1.35; font-weight: 600; margin: 1.5rem 0 0.5rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.8125rem;`},c=`680px`,l=`960px`,u={name:`Overview`,render:()=>t`
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
      </ul>
    </div>
  `},d={name:`Color Framework`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${l}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${s.h1}">Color Framework</h1>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 2rem;">
        The 12-step scale is a purpose-driven color system. Instead of picking arbitrary shades, each step number maps to a specific UI role. This makes component styling predictable and consistent.
      </p>

      <h2 style="${s.h2}; margin-top: 3rem;">Step Purposes — Light Mode (Reference)</h2>
      <p style="${s.bodySm} opacity: 0.75; max-width: ${c}; margin-bottom: 1rem;">
        Below is <strong>Radix Blue</strong> as a reference example — this is not our brand palette. It demonstrates how the 12-step structure maps to UI purposes.
      </p>
      <div style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.2); margin-bottom: 1.5rem;">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="height: 40px; background: var(--color-primary-${e}); border-radius: 4px;${e<=2?` border: 1px solid rgba(128,128,128,0.15);`:``}"></div>
          `)}
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="text-align: center; ${s.monoSm} font-size: 0.7rem; color: #1a1a1a; opacity: 0.6;">${e}</div>
          `)}
        </div>
      </div>

      <h3 style="${s.h3}">Per-Step Reference</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600; width: 60px;">Step</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Example Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">1</td>
            <td style="padding: 0.5rem 0.75rem;">Page</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Body background, main canvas</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">2</td>
            <td style="padding: 0.5rem 0.75rem;">Surface</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Cards, sidebars, panels, table rows</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">3</td>
            <td style="padding: 0.5rem 0.75rem;">Element</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Ghost button, dropdown item, list item default</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">4</td>
            <td style="padding: 0.5rem 0.75rem;">Element hovered</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Hover state on interactive elements</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">5</td>
            <td style="padding: 0.5rem 0.75rem;">Element pressed</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Active/pressed state, selected item</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">6</td>
            <td style="padding: 0.5rem 0.75rem;">Separator</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Dividers, card borders, subtle accent lines</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">7</td>
            <td style="padding: 0.5rem 0.75rem;">Border</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Input borders, button outlines</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">8</td>
            <td style="padding: 0.5rem 0.75rem;">Border hovered</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Hover borders, emphasized outlines</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); background: rgba(128,128,128,0.04);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} font-weight: 600;">9</td>
            <td style="padding: 0.5rem 0.75rem; font-weight: 600;">Solid (anchor)</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Primary buttons, badges, filled elements</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">10</td>
            <td style="padding: 0.5rem 0.75rem;">Solid hovered</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Hover state on solid fills</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">11</td>
            <td style="padding: 0.5rem 0.75rem;">Text muted</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Placeholder, secondary labels, captions</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">12</td>
            <td style="padding: 0.5rem 0.75rem;">Text</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Body text, headings, high-contrast labels</td>
          </tr>
        </tbody>
      </table>

      <h2 style="${s.h2}; margin-top: 2rem;">Step Purposes — Dark Mode (Reference)</h2>
      <p style="${s.bodySm} opacity: 0.75; max-width: ${c}; margin-bottom: 1rem;">
        Dark mode uses a <strong>separate palette</strong>, not inverted colors. Below is <strong>Radix Blue Dark</strong> as a reference example — this is not our brand palette. Notice step 9 is still blue, just tuned for dark backgrounds.
      </p>
      <div style="background: #0d1520; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
          <div style="height: 40px; background: #0d1520; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);"></div>
          <div style="height: 40px; background: #111927; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);"></div>
          <div style="height: 40px; background: #0d2847; border-radius: 4px;"></div>
          <div style="height: 40px; background: #003362; border-radius: 4px;"></div>
          <div style="height: 40px; background: #004074; border-radius: 4px;"></div>
          <div style="height: 40px; background: #104d87; border-radius: 4px;"></div>
          <div style="height: 40px; background: #205d9e; border-radius: 4px;"></div>
          <div style="height: 40px; background: #2870bd; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0090ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #3b9eff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #70b8ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #c2e6ff; border-radius: 4px;"></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="text-align: center; ${s.monoSm} font-size: 0.7rem; color: #ffffff; opacity: 0.6;">${e}</div>
          `)}
        </div>
      </div>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 3rem;">
        The <strong>step purposes remain identical</strong> in dark mode — only the palette values change. Step 1 is still page, step 9 is still solid. This means component code stays the same across modes.
      </p>

      <h2 style="${s.h2}; margin-top: 3rem;">Usage Patterns</h2>

      <h3 style="${s.h3}; margin-top: 2rem;">Elements (list items, dropdowns, ghost buttons)</h3>
      <pre style="${s.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;">
.list-item {
  background: var(--color-neutral-3);      /* element */
}
.list-item:hover {
  background: var(--color-neutral-4);      /* element hovered */
}
.list-item[aria-selected="true"] {
  background: var(--color-primary-5);      /* element pressed */
}</pre>

      <h3 style="${s.h3}; margin-top: 2rem;">Solids (buttons, badges)</h3>
      <pre style="${s.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;">
.button-primary {
  background: var(--color-primary-9);      /* solid */
  color: var(--color-text-on-primary);     /* white text */
}
.button-primary:hover {
  background: var(--color-primary-10);     /* solid hovered */
}</pre>

      <h3 style="${s.h3}; margin-top: 2rem;">Borders (separators, inputs, cards)</h3>
      <pre style="${s.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;">
.divider {
  border-top: 1px solid var(--color-neutral-6); /* separator */
}
.card {
  border: 1px solid var(--color-neutral-6);     /* separator */
}
.input {
  border: 1px solid var(--color-neutral-7);     /* border */
}
.input:hover {
  border: 1px solid var(--color-neutral-8);     /* border hovered */
}
.input:focus {
  outline: 2px solid var(--focus-ring-color);   /* focus ring — utility, NOT border */
}</pre>

      <h3 style="${s.h3}; margin-top: 2rem;">Text</h3>
      <pre style="${s.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 3rem;">
.body {
  color: var(--color-neutral-12);          /* text */
}
.caption {
  color: var(--color-neutral-11);          /* text muted */
}
.link {
  color: var(--color-primary-11);          /* text muted (brand) */
}</pre>

      <h2 style="${s.h2}; margin-top: 3rem;">Why This Model?</h2>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        Traditional color scales (like Tailwind's 50-900) require developers to guess which shade fits each use case. "Should hover be 600 or 700?" becomes tribal knowledge.
      </p>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        With the 12-step model: <strong>Step 4 is always hover. Step 9 is always the solid fill. Step 12 is always high-contrast text.</strong> The step number defines the purpose, not just the lightness.
      </p>

      <div style="background: rgba(251, 191, 36, 0.1); border-left: 3px solid #F59E0B; padding: 0.75rem 1rem; margin-top: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${s.bodySm} margin: 0;">
          <strong>Note:</strong> Focus rings use our structural utility token (<code>--focus-ring-color</code>), NOT step 8. This ensures consistent accessibility regardless of brand theme.
        </p>
      </div>
    </div>
  `},f={name:`Color Generator`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${l}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${s.h1}">Color Generator</h1>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 2rem;">
        When onboarding a new brand, we programmatically generate accessible 12-step palettes from a single anchor color. The generator uses OKLCH color space and validates WCAG contrast requirements.
      </p>

      <h2 style="${s.h2}; margin-top: 2rem;">Accessibility by Design</h2>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        The 12-step system isn't just about visual organization — it's engineered to guarantee WCAG contrast ratios. Radix designed specific <strong>step pairings</strong> that always meet accessibility thresholds.
      </p>

      <h3 style="${s.h3}">Contrast Pairing Guarantees</h3>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        These pairings are pre-validated to meet WCAG AA requirements:
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Pairing</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Min Ratio</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">WCAG Level</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">Step 9 + white</td>
            <td style="padding: 0.5rem 0.75rem;">4.5:1</td>
            <td style="padding: 0.5rem 0.75rem;">AA Normal</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Primary button text</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">Step 11 on Step 1</td>
            <td style="padding: 0.5rem 0.75rem;">4.5:1</td>
            <td style="padding: 0.5rem 0.75rem;">AA Normal</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Secondary text on app bg</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">Step 12 on Step 1–2</td>
            <td style="padding: 0.5rem 0.75rem;">7:1</td>
            <td style="padding: 0.5rem 0.75rem;">AAA Normal</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Primary text on surfaces</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">Step 9 on Step 1–2</td>
            <td style="padding: 0.5rem 0.75rem;">3:1</td>
            <td style="padding: 0.5rem 0.75rem;">AA Large/UI</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">UI component boundaries</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${s.bodySm} margin: 0;">
          <strong>Why this matters:</strong> You don't check contrast manually for every color choice. If you use step 9 for a button background with white text, it <em>will</em> pass — that's baked into the scale generation.
        </p>
      </div>

      <h2 style="${s.h2}; margin-top: 3rem;">Why OKLCH?</h2>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        Traditional color spaces (HSL, RGB) have a critical flaw: adjusting lightness causes <strong>hue shifts</strong>. A blue darkened in HSL drifts toward purple. This breaks the visual consistency of a color scale.
      </p>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        <strong>OKLCH</strong> (Oklab Lightness-Chroma-Hue) provides perceptually uniform lightness. Changing L doesn't shift the hue — a blue stays blue across all 12 steps. This is essential for generating accessible scales where each step must maintain predictable contrast relationships.
      </p>

      <h3 style="${s.h3}">OKLCH Components</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} font-weight: 600; width: 80px;">L</td>
            <td style="padding: 0.5rem 0.75rem;">Lightness (0–1)</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Perceptually uniform — 0.5 looks "half bright"</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} font-weight: 600;">C</td>
            <td style="padding: 0.5rem 0.75rem;">Chroma (0–0.4+)</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Color intensity — 0 is grayscale</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} font-weight: 600;">H</td>
            <td style="padding: 0.5rem 0.75rem;">Hue (0–360°)</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Color angle — preserved across the scale</td>
          </tr>
        </tbody>
      </table>

      <h2 style="${s.h2}; margin-top: 3rem;">Generation Algorithm</h2>

      <h3 style="${s.h3}">Input</h3>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        A single hex color — the brand's primary, secondary, or accent. This becomes <strong>Step 9</strong> (the solid fill anchor).
      </p>

      <h3 style="${s.h3}">Process</h3>
      <ol style="${s.body} max-width: ${c}; margin: 0 0 1.5rem 1.5rem; padding: 0;">
        <li style="margin-bottom: 0.5rem;"><strong>Convert</strong> — Input hex → OKLCH (extract L, C, H)</li>
        <li style="margin-bottom: 0.5rem;"><strong>Generate</strong> — Create steps 1–8 and 10–12 using target lightness values, scaled chroma, preserved hue</li>
        <li style="margin-bottom: 0.5rem;"><strong>Validate</strong> — Check contrast ratios for each critical pairing</li>
        <li style="margin-bottom: 0.5rem;"><strong>Adjust</strong> — If a pairing fails, shift L until it passes</li>
        <li style="margin-bottom: 0.5rem;"><strong>Output</strong> — 12-step palette as hex values + CSS custom properties</li>
      </ol>

      <h3 style="${s.h3}">Step Targets (Light Mode)</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600; width: 60px;">Step</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600; width: 100px;">L Target</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600; width: 100px;">C Scale</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">1</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">0.985</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">8%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Page</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">2</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">0.965</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">12%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Surface</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">3–5</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">0.94–0.88</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">20–36%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Element → hovered → pressed</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">6–8</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">0.82–0.68</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">45–70%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Separator → border → border hovered</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); background: rgba(128,128,128,0.04);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} font-weight: 600;">9</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">input</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">100%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} font-weight: 600;">Solid (anchor)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">10</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">input − 0.08</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">95%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Solid hovered</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">11</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">0.45</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">75%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Text muted</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">12</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">0.30</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">60%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Text</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${s.h3}">Step Targets (Dark Mode)</h3>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        Dark mode isn't an inversion — it's a separate palette. Key differences: backgrounds are dark (low L), text is light (high L), and hover <em>brightens</em> instead of darkening.
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600; width: 60px;">Step</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600; width: 100px;">L Target</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600; width: 100px;">C Scale</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">1</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">0.12</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">8%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Page</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">2</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">0.145</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">12%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Surface</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">3–5</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">0.175–0.24</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">20–36%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Element → hovered → pressed</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">6–8</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">0.30–0.44</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">45–70%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Separator → border → border hovered</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); background: rgba(128,128,128,0.04);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} font-weight: 600;">9</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">input (0.45–0.65)</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">100%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} font-weight: 600;">Solid (anchor)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">10</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">input + 0.08</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">95%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Solid hovered (brightens)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">11</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">0.75</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">75%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Text muted</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">12</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">0.90</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">60%</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Text</td>
          </tr>
        </tbody>
      </table>

      <h2 style="${s.h2}; margin-top: 3rem;">Three-Tier Compliance Model</h2>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        The generator validates each anchor color against WCAG contrast requirements and applies one of three scenarios:
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Scenario</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Contrast</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Behavior</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Output</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">1 — Full</td>
            <td style="padding: 0.5rem 0.75rem;">≥ 4.5:1</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption}">Anchor passes — full scale generated</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-{name}-1 … 12</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">2 — Adjusted</td>
            <td style="padding: 0.5rem 0.75rem;">4.0 – 4.5:1</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption}">Minor adjustment applied, then full scale</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-{name}-1 … 12</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">3 — Decorative</td>
            <td style="padding: 0.5rem 0.75rem;">< 4.0:1</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption}">Decorative use only — no solid fills or text</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-{name}-decorative-1 … 8</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${s.h3}">Decorative-Safe Steps (Scenario 3)</h3>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1rem;">
        When an anchor cannot meet 4.0:1, only steps 1–8 are generated. These are safe because they don't place text directly on the accent color:
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Steps</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Use</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Text on it?</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Safe?</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">1–2</td>
            <td style="padding: 0.5rem 0.75rem;">Page, surface (tinted backgrounds)</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">No</td>
            <td style="padding: 0.5rem 0.75rem;">✓</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">3–5</td>
            <td style="padding: 0.5rem 0.75rem;">Element backgrounds (default → hovered → pressed)</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Yes, but neutral-12 (dark)</td>
            <td style="padding: 0.5rem 0.75rem;">✓</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">6–8</td>
            <td style="padding: 0.5rem 0.75rem;">Separators, borders (dividers, strokes, outlines)</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">No</td>
            <td style="padding: 0.5rem 0.75rem;">✓</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); background: rgba(239, 68, 68, 0.04);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">9–10</td>
            <td style="padding: 0.5rem 0.75rem;">Solid, solid hovered (buttons, badges)</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">Yes, white text</td>
            <td style="padding: 0.5rem 0.75rem;">✗ Not generated</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); background: rgba(239, 68, 68, 0.04);">
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">11–12</td>
            <td style="padding: 0.5rem 0.75rem;">Text muted, text (colored labels, links)</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">N/A — these ARE text</td>
            <td style="padding: 0.5rem 0.75rem;">✗ Not generated</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #EF4444; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <h4 style="margin: 0 0 0.5rem; font-weight: 600;">Common Decorative-Only Hues</h4>
        <p style="${s.bodySm} margin: 0 0 0.75rem;">
          These colors typically fall into Scenario 3 (< 4.0:1 with white):
        </p>
        <ul style="${s.bodySm} margin: 0 0 0 1.25rem; padding: 0;">
          <li style="margin-bottom: 0.25rem;"><strong>Bright yellow</strong> (#FFD700, #FFFF00)</li>
          <li style="margin-bottom: 0.25rem;"><strong>Lime green</strong> (#32CD32, #00FF00)</li>
          <li style="margin-bottom: 0.25rem;"><strong>Cyan / aqua</strong> (#00FFFF, #00CED1)</li>
          <li style="margin-bottom: 0.25rem;"><strong>Light orange</strong> (#FFA500)</li>
        </ul>
      </div>
    </div>
  `},p=e=>{let t=e.replace(`#`,``);return{r:parseInt(t.substring(0,2),16)/255,g:parseInt(t.substring(2,4),16)/255,b:parseInt(t.substring(4,6),16)/255}},m=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,h=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,g=e=>{let t=m(e.r),n=m(e.g),r=m(e.b),i=Math.cbrt(.4122214708*t+.5363325363*n+.0514459929*r),a=Math.cbrt(.2119034982*t+.6806995451*n+.1073969566*r),o=Math.cbrt(.0883024619*t+.2817188376*n+.6299787005*r);return{L:.2104542553*i+.793617785*a-.0040720468*o,a:1.9779984951*i-2.428592205*a+.4505937099*o,b:.0259040371*i+.7827717662*a-.808675766*o}},_=e=>{let t=e.L+.3963377774*e.a+.2158037573*e.b,n=e.L-.1055613458*e.a-.0638541728*e.b,r=e.L-.0894841775*e.a-1.291485548*e.b,i=t*t*t,a=n*n*n,o=r*r*r;return{r:h(4.0767416621*i-3.3077115913*a+.2309699292*o),g:h(-1.2684380046*i+2.6097574011*a-.3413193965*o),b:h(-.0041960863*i-.7034186147*a+1.707614701*o)}},v=e=>{let t=Math.sqrt(e.a*e.a+e.b*e.b),n=Math.atan2(e.b,e.a)*(180/Math.PI);return n<0&&(n+=360),{L:e.L,C:t,H:n}},y=e=>{let t=e.H*(Math.PI/180);return{L:e.L,a:e.C*Math.cos(t),b:e.C*Math.sin(t)}},b=e=>{let t=e=>Math.max(0,Math.min(1,e)),n=e=>Math.round(t(e)*255).toString(16).padStart(2,`0`);return`#${n(e.r)}${n(e.g)}${n(e.b)}`},x=e=>v(g(p(e))),S=e=>b(_(y(e))),C=e=>.2126*m(e.r)+.7152*m(e.g)+.0722*m(e.b),w=(e,t)=>{let n=C(p(e)),r=C(p(t));return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)},T=[.985,.965,.94,.915,.885,.82,.75,.68,null,null,.45,.3],E=[.12,.145,.175,.205,.24,.3,.37,.44,null,null,.75,.9],D=[.08,.12,.2,.28,.36,.45,.55,.7,1,.95,.75,.6],O=[`Page`,`Surface`,`Element`,`Element hovered`,`Element pressed`,`Separator`,`Border`,`Border hovered`,`Solid (anchor)`,`Solid hovered`,`Text muted`,`Text`],k=(e,t,n)=>{let r=`#ffffff`,i=w(e,r),a,o=e,s=null;if(i>=4.5)a=1;else if(i>=4){a=2;let t=x(e);for(let e=t.L;e>=.15;e-=.005){let n=S({L:e,C:t.C,H:t.H});if(w(n,r)>=4.5){o=n,s=w(n,r);break}}}else a=3;let c=x(o),l=t?E:T,u=a===3?8:12,d=a===3?`-decorative`:``,f=[];for(let e=0;e<u;e++){let r=e+1,i,a,o=c.H;if(r===9)i=t?Math.max(.45,Math.min(.65,c.L)):c.L,a=c.C;else if(r===10){let e=t?Math.max(.45,Math.min(.65,c.L)):c.L;i=t?Math.min(.75,e+.08):Math.max(.25,e-.08),a=c.C*.95}else i=l[e],a=c.C*D[e];a=Math.max(0,Math.min(.4,a)),f.push({step:r,hex:S({L:i,C:a,H:o}),name:O[e],token:`--color-${n}${d}-${r}`})}return{steps:f,scenario:a,ratio:i,anchorHex:o,adjustedRatio:s,suffix:d}},A={name:`Color Generator Tool`,render:()=>{let e=`generator-${Math.random().toString(36).slice(2,9)}`;return setTimeout(()=>{let t=document.getElementById(e);if(!t)return;let n=t.querySelector(`#hex-input`),r=t.querySelector(`#name-input`),i=t.querySelector(`#result-area`),a=t.querySelector(`#light-scale-area`),o=t.querySelector(`#dark-scale-area`),s=t.querySelector(`#css-output`),c=t.querySelector(`#copy-btn`),l=(e,t)=>{let n=`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(65px, 1fr)); gap: 6px;">`,r=t?`rgba(255,255,255,0.7)`:`inherit`;return e.steps.forEach(e=>{let i=t?e.step>=11?`#1a1a1a`:`#fff`:e.step>=9?`#fff`:`#1a1a1a`,a=!t&&e.step<=2?` border: 1px solid rgba(128,128,128,0.2);`:``;n+=`<div style="text-align: center;"><div style="height: 40px; border-radius: 5px; background: ${e.hex}; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 600; color: ${i};${a}">${e.step}</div><div style="font-size: 0.6rem; margin-top: 3px; color: ${r};">${e.name}</div></div>`}),n+=`</div>`,n},u=()=>{let e=n?.value||`#0066CC`,t=r?.value||`brand`;if(!/^#[0-9A-Fa-f]{6}$/.test(e)){i&&(i.innerHTML=`<span style="color: #EF4444;">Invalid hex format. Use #RRGGBB.</span>`);return}let c=k(e,!1,t),u=k(e,!0,t),[d,f,p]={1:[`✓ Full Scale`,`rgba(34, 197, 94, 0.15)`,`#16A34A`],2:[`⚠ Adjusted`,`rgba(251, 191, 36, 0.15)`,`#D97706`],3:[`✗ Decorative Only`,`rgba(239, 68, 68, 0.15)`,`#DC2626`]}[c.scenario],m=e=>`<span style="display: inline-block; width: 24px; height: 24px; border-radius: 4px; background: ${e}; vertical-align: middle; border: 1px solid rgba(128,128,128,0.2);"></span>`,h=`<div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 6px; background: ${f}; color: ${p}; font-weight: 600; margin-bottom: 0.75rem;">${d}</div>`;c.scenario===2?(h+=`<div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.75rem;">`,h+=`<div style="text-align: center;">${m(e)}<div style="font-size: 0.7rem; margin-top: 0.25rem; opacity: 0.6;">Input</div><div style="font-size: 0.75rem; font-family: ui-monospace, monospace;">${e}</div><div style="font-size: 0.7rem; opacity: 0.6;">${c.ratio.toFixed(2)}:1</div></div>`,h+=`<div style="font-size: 1.25rem; opacity: 0.4;">→</div>`,h+=`<div style="text-align: center;">${m(c.anchorHex)}<div style="font-size: 0.7rem; margin-top: 0.25rem; opacity: 0.6;">Adjusted</div><div style="font-size: 0.75rem; font-family: ui-monospace, monospace;">${c.anchorHex}</div><div style="font-size: 0.7rem; opacity: 0.6;">${c.adjustedRatio?.toFixed(2)}:1</div></div>`,h+=`</div>`):h+=`<div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem;">${m(e)}<span style="font-size: 0.875rem;"><span style="font-family: ui-monospace, monospace;">${e}</span> — Contrast with white: ${c.ratio.toFixed(2)}:1</span></div>`,i&&(i.innerHTML=h),a&&(a.innerHTML=l(c,!1)),o&&(o.innerHTML=l(u,!0));let g=c.steps.map(e=>`${e.token}: ${e.hex};`).join(`\\n`),_=u.steps.map(e=>`${e.token.replace(t,t+`-dark`)}: ${e.hex};`).join(`\\n`);s&&(s.value=`/* Light Mode */\\n${g}\\n\\n/* Dark Mode */\\n${_}`)};n?.addEventListener(`input`,u),r?.addEventListener(`change`,u),c?.addEventListener(`click`,()=>{s?.select(),document.execCommand(`copy`),c&&(c.textContent=`Copied!`),setTimeout(()=>{c&&(c.textContent=`Copy CSS`)},1500)}),u()},0),t`
      <div id="${e}" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${l}; padding: 2rem; line-height: 1.6; color: inherit;">
        <h1 style="${s.h1}">Color Generator Tool</h1>
        <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1.5rem;">
          Enter an anchor color to preview an accessible 12-step palette. The tool validates WCAG contrast and applies the appropriate scenario.
        </p>

        <div style="background: rgba(251, 191, 36, 0.1); border-left: 3px solid #F59E0B; padding: 0.75rem 1rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0; max-width: ${c};">
          <p style="${s.bodySm} margin: 0;">
            <strong>Demo tool:</strong> This generator is for exploration and simulation. Official brand themes are authored and published by the DS team as <code style="font-size: 0.8125rem;">@mms/theme-[client]</code> packages.
          </p>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; align-items: flex-end;">
          <div>
            <label style="display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.25rem;">Anchor Color</label>
            <input type="text" id="hex-input" value="#0066CC" style="padding: 0.5rem 0.75rem; border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; font-family: ui-monospace, monospace; font-size: 0.9375rem; width: 120px;" />
          </div>
          <div>
            <label style="display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.25rem;">Token Name</label>
            <select id="name-input" style="padding: 0.5rem 0.75rem; border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; font-size: 0.9375rem; width: 140px; background: #fff;">
              <option value="primary" selected>primary</option>
              <option value="secondary">secondary</option>
              <option value="accent">accent</option>
            </select>
          </div>
        </div>

        <div id="result-area" style="margin-bottom: 1.5rem;"></div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
          <div>
            <h4 style="margin: 0 0 0.75rem; font-weight: 600; font-size: 0.9375rem;">Light Mode</h4>
            <div id="light-scale-area" style="background: #ffffff; padding: 1rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15);"></div>
          </div>
          <div>
            <h4 style="margin: 0 0 0.75rem; font-weight: 600; font-size: 0.9375rem;">Dark Mode</h4>
            <div id="dark-scale-area" style="background: #111111; padding: 1rem; border-radius: 8px;"></div>
          </div>
        </div>

        <h3 style="${s.h3}">CSS Output</h3>
        <div style="position: relative;">
          <textarea id="css-output" readonly style="width: 100%; height: 320px; padding: 1rem; border: 1px solid rgba(128,128,128,0.2); border-radius: 6px; font-family: ui-monospace, monospace; font-size: 0.8125rem; resize: vertical; background: rgba(128,128,128,0.04);"></textarea>
          <button id="copy-btn" style="position: absolute; top: 0.5rem; right: 0.5rem; padding: 0.375rem 0.75rem; border: 1px solid rgba(128,128,128,0.3); border-radius: 4px; background: rgba(255,255,255,0.9); font-size: 0.75rem; cursor: pointer;">Copy CSS</button>
        </div>
      </div>
    `}},j={name:`Designing in Figma`,render:()=>t`
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
  `},M={1:`Page`,2:`Surface`,3:`Element`,4:`Element hovered`,5:`Element pressed`,6:`Separator`,7:`Border`,8:`Border hovered`,9:`Solid (anchor)`,10:`Solid hovered`,11:`Text muted`,12:`Text`},N=(e,n)=>t`
  <div style="margin-bottom: 2rem;">
    <h3 style="${s.h3} margin-top: 0;">${e}</h3>
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
      ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
        <div style="height: 48px; background: var(${n}-${e}); border-radius: 4px;${e<=2?` border: 1px solid rgba(128,128,128,0.2);`:``}"></div>
      `)}
    </div>
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
      ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>{let n=e===9;return t`
        <div style="text-align: center;">
          <div style="${s.monoSm}${n?` font-weight: 700;`:` opacity: 0.8;`}">${e}</div>
          ${n?t`<div style="font-size: 0.625rem; line-height: 1; margin-top: 1px;">▲</div>`:``}
        </div>
      `})}
    </div>
  </div>
`,P=(e,n)=>t`
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
              <div class="color-swatch" data-token="${n}-${e}" style="width: 48px; height: 32px; border-radius: 4px; background: var(${n}-${e});${r?` border: 3px solid #1a1a1a; box-shadow: 0 0 0 1px rgba(255,255,255,0.8) inset;`:e<=2?` border: 1px solid rgba(128,128,128,0.2);`:``}"></div>
            </td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}${r?` font-weight: 700;`:``}">${e}</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm}${r?` font-weight: 600;`:``}">${n}-${e}</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} opacity: 0.65;${r?` font-weight: 600;`:``}" class="hex-value" data-token="${n}-${e}">—</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption}${r?` font-weight: 600;`:` opacity: 0.65;`}">${M[e]}</td>
          </tr>
        `})}
      </tbody>
    </table>
  </div>
`,F=(e,n)=>t`
  <div style="margin-bottom: 2rem;">
    <h3 style="${s.h3} margin-top: 0; color: #ffffff;">${e}</h3>
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
      ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
        <div style="height: 48px; background: var(${n}-dark-${e}); border-radius: 4px;${e>=11?` border: 1px solid rgba(255,255,255,0.15);`:``}"></div>
      `)}
    </div>
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
      ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>{let n=e===9;return t`
        <div style="text-align: center;">
          <div style="${s.monoSm} color: rgba(255,255,255,0.85);${n?` font-weight: 700;`:` opacity: 0.8;`}">${e}</div>
          ${n?t`<div style="font-size: 0.625rem; line-height: 1; margin-top: 1px; color: rgba(255,255,255,0.85);">▲</div>`:``}
        </div>
      `})}
    </div>
  </div>
`,I=(e,n)=>t`
  <div style="margin-bottom: 2rem;">
    <h3 style="${s.h3} color: #ffffff;">${e}</h3>
    <table style="width: 100%; border-collapse: collapse;" data-palette="${n}-dark">
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
              <div class="color-swatch-dark" data-token="${n}-dark-${e}" style="width: 48px; height: 32px; border-radius: 4px; background: var(${n}-dark-${e});${r?` border: 3px solid #ffffff; box-shadow: 0 0 0 1px rgba(0,0,0,0.3) inset;`:e>=11?` border: 1px solid rgba(255,255,255,0.15);`:``}"></div>
            </td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} color: rgba(255,255,255,0.9);${r?` font-weight: 700;`:``}">${e}</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} color: rgba(255,255,255,0.9);${r?` font-weight: 600;`:``}">${n}-dark-${e}</td>
            <td style="padding: 0.5rem 0.75rem; ${s.monoSm} color: rgba(255,255,255,0.65);${r?` font-weight: 600;`:``}" class="hex-value-dark" data-token="${n}-dark-${e}">—</td>
            <td style="padding: 0.5rem 0.75rem; ${s.caption} color: rgba(255,255,255,${r?`0.9`:`0.65`});${r?` font-weight: 600;`:``}">${M[e]}</td>
          </tr>
        `})}
      </tbody>
    </table>
  </div>
`,L={name:`Brand Colors`,render:()=>{let e=[{value:``,label:`Neutral (development fallback)`,description:`Grayscale — no brand applied`},{value:`maximus`,label:`Maximus`,description:`Violet primary, slate secondary, green accent`},{value:`va-gov`,label:`VA.gov`,description:`VA Blue primary, gold secondary, teal accent`}];return t(a||=r([`
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: `,`; padding: 2rem; line-height: 1.6; color: inherit;">
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
          <p id="theme-description" style="`,` opacity: 0.65; margin: 0.5rem 0 0;">Grayscale — no brand applied</p>
        </div>

        <h2 style="`,`">Light Mode</h2>
        <div id="brand-palettes" style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15); margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">Dark Mode</h2>
        <div id="brand-palettes-dark" style="background: #111111; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">On-Color Text</h2>
        <p style="`,` opacity: 0.85; max-width: `,`; margin-bottom: 1rem;">
          Text rendered on Step 9 solid backgrounds uses dedicated on-color tokens to ensure WCAG AA contrast (4.5:1).
        </p>
        <div id="on-color-examples" style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 2rem;">
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
        <div id="palette-tables" style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15); margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">Token Reference — Dark Mode</h2>
        <div id="palette-tables-dark" style="background: #111111; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
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
        const container = document.getElementById('brand-palettes')?.closest('div[style*="max-width"]');
        const darkPalettes = document.getElementById('brand-palettes-dark');
        const darkTables = document.getElementById('palette-tables-dark');

        // Convert RGB to hex
        const rgbToHex = (rgb) => {
          const match = rgb.match(/rgb\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)/);
          if (!match) return rgb;
          const [, r, g, b] = match;
          return '#' + [r, g, b].map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
        };

        // Update all hex value cells (light mode)
        const updateHexValues = () => {
          const hexCells = document.querySelectorAll('.hex-value[data-token]');
          hexCells.forEach(cell => {
            const token = cell.getAttribute('data-token');
            const swatch = document.querySelector('.color-swatch[data-token="' + token + '"]');
            if (swatch) {
              const computed = getComputedStyle(swatch).backgroundColor;
              cell.textContent = rgbToHex(computed).toUpperCase();
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
              cell.textContent = rgbToHex(computed).toUpperCase();
            }
          });
        };

        // Initial update after render
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            updateHexValues();
            updateHexValuesDark();
          });
        });

        if (selector && description && container) {
          selector.addEventListener('change', (e) => {
            const value = e.target.value;
            const theme = themes.find(t => t.value === value);

            if (value) {
              container.setAttribute('data-theme', value);
            } else {
              container.removeAttribute('data-theme');
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
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: `,`; padding: 2rem; line-height: 1.6; color: inherit;">
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
          <p id="theme-description" style="`,` opacity: 0.65; margin: 0.5rem 0 0;">Grayscale — no brand applied</p>
        </div>

        <h2 style="`,`">Light Mode</h2>
        <div id="brand-palettes" style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15); margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">Dark Mode</h2>
        <div id="brand-palettes-dark" style="background: #111111; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">On-Color Text</h2>
        <p style="`,` opacity: 0.85; max-width: `,`; margin-bottom: 1rem;">
          Text rendered on Step 9 solid backgrounds uses dedicated on-color tokens to ensure WCAG AA contrast (4.5:1).
        </p>
        <div id="on-color-examples" style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 2rem;">
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
        <div id="palette-tables" style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15); margin-bottom: 2rem;">
          `,`
          `,`
          `,`
        </div>

        <h2 style="`,`">Token Reference — Dark Mode</h2>
        <div id="palette-tables-dark" style="background: #111111; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
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
        const container = document.getElementById('brand-palettes')?.closest('div[style*="max-width"]');
        const darkPalettes = document.getElementById('brand-palettes-dark');
        const darkTables = document.getElementById('palette-tables-dark');

        // Convert RGB to hex
        const rgbToHex = (rgb) => {
          const match = rgb.match(/rgb\\\\(\\\\s*(\\\\d+)\\\\s*,\\\\s*(\\\\d+)\\\\s*,\\\\s*(\\\\d+)\\\\s*\\\\)/);
          if (!match) return rgb;
          const [, r, g, b] = match;
          return '#' + [r, g, b].map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
        };

        // Update all hex value cells (light mode)
        const updateHexValues = () => {
          const hexCells = document.querySelectorAll('.hex-value[data-token]');
          hexCells.forEach(cell => {
            const token = cell.getAttribute('data-token');
            const swatch = document.querySelector('.color-swatch[data-token="' + token + '"]');
            if (swatch) {
              const computed = getComputedStyle(swatch).backgroundColor;
              cell.textContent = rgbToHex(computed).toUpperCase();
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
              cell.textContent = rgbToHex(computed).toUpperCase();
            }
          });
        };

        // Initial update after render
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            updateHexValues();
            updateHexValuesDark();
          });
        });

        if (selector && description && container) {
          selector.addEventListener('change', (e) => {
            const value = e.target.value;
            const theme = themes.find(t => t.value === value);

            if (value) {
              container.setAttribute('data-theme', value);
            } else {
              container.removeAttribute('data-theme');
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
            `),s.caption,s.h2,N(`Primary`,`--color-primary`),N(`Secondary`,`--color-secondary`),N(`Accent`,`--color-accent`),s.h2,F(`Primary`,`--color-primary`),F(`Secondary`,`--color-secondary`),F(`Accent`,`--color-accent`),s.h2,s.body,c,s.h2,P(`Primary Palette`,`--color-primary`),P(`Secondary Palette`,`--color-secondary`),P(`Accent Palette`,`--color-accent`),s.h2,I(`Primary Palette`,`--color-primary`),I(`Secondary Palette`,`--color-secondary`),I(`Accent Palette`,`--color-accent`),s.h2,s.monoSm,JSON.stringify(e))}},R={1:{purpose:`Page — body background`,hex:`#fcfcfc`},2:{purpose:`Surface — cards, sidebars, panels`,hex:`#f9f9f9`},3:{purpose:`Element — ghost button, list item default`,hex:`#f0f0f0`},4:{purpose:`Element hovered`,hex:`#e8e8e8`},5:{purpose:`Element pressed — selected item`,hex:`#e0e0e0`},6:{purpose:`Separator — dividers, card borders`,hex:`#d0d0d0`},7:{purpose:`Border — input borders, button outlines`,hex:`#b4b4b4`},8:{purpose:`Border hovered — emphasized outlines`,hex:`#8d8d8d`},9:{purpose:`Solid (anchor) — filled elements`,hex:`#6f6f6f`},10:{purpose:`Solid hovered`,hex:`#5c5c5c`},11:{purpose:`Text muted — placeholder, captions`,hex:`#484848`},12:{purpose:`Text — body, headings`,hex:`#1a1a1a`}},z={name:`Neutral Colors`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${l}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${s.h1}">Neutral Colors</h1>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1.5rem;">
        The neutral palette is a 12-step grayscale used for backgrounds, borders, and text throughout the UI. Unlike brand colors, neutrals are <strong>shared across all themes</strong> — they provide structural consistency regardless of client brand.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${s.bodySm} margin: 0;">
          <strong>Structural token:</strong> Neutral colors don't change per theme. Use them for UI structure (cards, borders, text) that should remain consistent across all brand contexts.
        </p>
      </div>

      <h2 style="${s.h2}">12-Step Scale</h2>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
          <div style="height: 48px; background: var(--color-neutral-${e}); border-radius: 4px;${e<=2?` border: 1px solid rgba(128,128,128,0.2);`:``}"></div>
        `)}
      </div>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 2rem;">
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
          <div style="text-align: center; ${s.monoSm} opacity: 0.7;">${e}</div>
        `)}
      </div>

      <h2 style="${s.h2}">Token Reference</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; width: 64px;"></th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600; width: 50px;">Step</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Hex</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
          </tr>
        </thead>
        <tbody>
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">
                <div style="width: 48px; height: 32px; border-radius: 4px; background: var(--color-neutral-${e});${e<=2?` border: 1px solid rgba(128,128,128,0.2);`:``}"></div>
              </td>
              <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">${e}</td>
              <td style="padding: 0.5rem 0.75rem; ${s.monoSm}">--color-neutral-${e}</td>
              <td style="padding: 0.5rem 0.75rem; ${s.monoSm} opacity: 0.65;">${R[e].hex}</td>
              <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">${R[e].purpose}</td>
            </tr>
          `)}
        </tbody>
      </table>

      <h2 style="${s.h2}">Common Usage</h2>
      <pre style="${s.monoSm} background: rgba(128,128,128,0.08); padding: 1rem 1.25rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
/* Page background */
body {
  background: var(--color-neutral-1);
  color: var(--color-neutral-12);
}

/* Card */
.card {
  background: var(--color-neutral-2);
  border: 1px solid var(--color-neutral-6);
}

/* List item states */
.list-item:hover {
  background: var(--color-neutral-4);
}

/* Input */
.input {
  border: 1px solid var(--color-neutral-7);
}
.input::placeholder {
  color: var(--color-neutral-11);
}</pre>
    </div>
  `},B=[{category:`Success`,tokens:[{token:`--color-utility-success-muted`,hex:`#c6f3c6`,label:`Surface background`},{token:`--color-utility-success-emphasis`,hex:`#0e580e`,label:`Text, borders, icons`}]},{category:`Error`,tokens:[{token:`--color-utility-error-muted`,hex:`#f3ac99`,label:`Surface background`},{token:`--color-utility-error-emphasis`,hex:`#aa010e`,label:`Text, borders, icons`}]},{category:`Caution`,tokens:[{token:`--color-utility-caution-muted`,hex:`#faf3d1`,label:`Surface background`},{token:`--color-utility-caution-emphasis`,hex:`#e5a000`,label:`Text, borders, icons`}]},{category:`Informational`,note:`References neutral palette — no dedicated primitives`,tokens:[{token:`--color-neutral-3`,hex:`#f0f0f0`,label:`Surface background`,border:!0},{token:`--color-neutral-11`,hex:`#484848`,label:`Text, borders, icons`}]},{category:`Focus Ring`,note:`Accessibility-critical — never themed away. See Foundations > Focus Ring for full documentation.`,tokens:[{token:`--focus-ring-color`,hex:`#386CF7`,label:`Focus indicator outline color`}]}],V=(e,t=!1)=>`background: ${e}; width: 40px; height: 40px; border-radius: 6px; flex-shrink: 0;${t?` border: 1px solid rgba(128,128,128,0.3);`:``}`,H=(e,n,r,i=!1)=>t`
  <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
    <td style="padding: 0.5rem 0.75rem;">
      <div style="${V(n,i)}"></div>
    </td>
    <td style="padding: 0.5rem 0.75rem; ${s.monoSm} color: inherit;">${e}</td>
    <td style="padding: 0.5rem 0.75rem; ${s.monoSm} opacity: 0.65;">${n}</td>
    <td style="padding: 0.5rem 0.75rem; ${s.caption} opacity: 0.65;">${r}</td>
  </tr>
`,U=(e,n,r)=>t`
  <h3 style="margin: 2rem 0 0.5rem; ${s.h2}">${e}</h3>
  ${r?t`<p style="${s.caption} opacity: 0.65; margin: 0 0 0.5rem;">${r}</p>`:``}
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 0.5rem;">
    <thead>
      <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
        <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600; width: 56px;"></th>
        <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Token</th>
        <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Hex</th>
        <th style="padding: 0.5rem 0.75rem; text-align: left; ${s.caption} opacity: 0.75; font-weight: 600;">Usage</th>
      </tr>
    </thead>
    <tbody>
      ${n.map(e=>H(e.token,e.hex,e.label,e.border??!1))}
    </tbody>
  </table>
`,W={name:`Utility Colors`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${l}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${s.h1}">Utility Colors</h1>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1.5rem;">
        Utility colors are structural tokens that remain <strong>fixed across all themes</strong>. They don't follow the 12-step brand framework — instead, they serve specific functional purposes that must remain consistent regardless of client brand.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${s.bodySm} margin: 0;">
          <strong>Why fixed?</strong> Status feedback (success, error, caution) and accessibility indicators (focus ring) must communicate consistently. A green success message should look like a success message on every client site. A focus ring must always be visible for keyboard users.
        </p>
      </div>

      <h2 style="${s.h2}">Status Colors</h2>
      <p style="${s.body} opacity: 0.85; max-width: ${c}; margin-bottom: 1.5rem;">
        Each status category provides two tiers: <strong>muted</strong> for surface backgrounds and <strong>emphasis</strong> for text, borders, and icons.
      </p>

      ${B.map(e=>U(e.category,e.tokens,e.note))}

      <h2 style="${s.h2}">Usage Example</h2>
      <pre style="${s.monoSm} background: rgba(128,128,128,0.08); padding: 1rem 1.25rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
/* Success alert */
.alert-success {
  background: var(--color-utility-success-muted);
  border: 1px solid var(--color-utility-success-emphasis);
  color: var(--color-utility-success-emphasis);
}

/* Error message */
.error-text {
  color: var(--color-utility-error-emphasis);
}

/* Caution banner */
.banner-caution {
  background: var(--color-utility-caution-muted);
  border-left: 4px solid var(--color-utility-caution-emphasis);
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
      </ul>
    </div>
  \`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Color Framework',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Color Framework</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        The 12-step scale is a purpose-driven color system. Instead of picking arbitrary shades, each step number maps to a specific UI role. This makes component styling predictable and consistent.
      </p>

      <h2 style="\${t.h2}; margin-top: 3rem;">Step Purposes — Light Mode (Reference)</h2>
      <p style="\${t.bodySm} opacity: 0.75; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Below is <strong>Radix Blue</strong> as a reference example — this is not our brand palette. It demonstrates how the 12-step structure maps to UI purposes.
      </p>
      <div style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.2); margin-bottom: 1.5rem;">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="height: 40px; background: var(--color-primary-\${step}); border-radius: 4px;\${step <= 2 ? ' border: 1px solid rgba(128,128,128,0.15);' : ''}"></div>
          \`)}
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="text-align: center; \${t.monoSm} font-size: 0.7rem; color: #1a1a1a; opacity: 0.6;">\${step}</div>
          \`)}
        </div>
      </div>

      <h3 style="\${t.h3}">Per-Step Reference</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 60px;">Step</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Example Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1</td>
            <td style="padding: 0.5rem 0.75rem;">Page</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Body background, main canvas</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">2</td>
            <td style="padding: 0.5rem 0.75rem;">Surface</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Cards, sidebars, panels, table rows</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">3</td>
            <td style="padding: 0.5rem 0.75rem;">Element</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Ghost button, dropdown item, list item default</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">4</td>
            <td style="padding: 0.5rem 0.75rem;">Element hovered</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Hover state on interactive elements</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">5</td>
            <td style="padding: 0.5rem 0.75rem;">Element pressed</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Active/pressed state, selected item</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">6</td>
            <td style="padding: 0.5rem 0.75rem;">Separator</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Dividers, card borders, subtle accent lines</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">7</td>
            <td style="padding: 0.5rem 0.75rem;">Border</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Input borders, button outlines</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">8</td>
            <td style="padding: 0.5rem 0.75rem;">Border hovered</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Hover borders, emphasized outlines</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); background: rgba(128,128,128,0.04);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} font-weight: 600;">9</td>
            <td style="padding: 0.5rem 0.75rem; font-weight: 600;">Solid (anchor)</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Primary buttons, badges, filled elements</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">10</td>
            <td style="padding: 0.5rem 0.75rem;">Solid hovered</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Hover state on solid fills</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">11</td>
            <td style="padding: 0.5rem 0.75rem;">Text muted</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Placeholder, secondary labels, captions</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">12</td>
            <td style="padding: 0.5rem 0.75rem;">Text</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Body text, headings, high-contrast labels</td>
          </tr>
        </tbody>
      </table>

      <h2 style="\${t.h2}; margin-top: 2rem;">Step Purposes — Dark Mode (Reference)</h2>
      <p style="\${t.bodySm} opacity: 0.75; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Dark mode uses a <strong>separate palette</strong>, not inverted colors. Below is <strong>Radix Blue Dark</strong> as a reference example — this is not our brand palette. Notice step 9 is still blue, just tuned for dark backgrounds.
      </p>
      <div style="background: #0d1520; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
          <div style="height: 40px; background: #0d1520; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);"></div>
          <div style="height: 40px; background: #111927; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);"></div>
          <div style="height: 40px; background: #0d2847; border-radius: 4px;"></div>
          <div style="height: 40px; background: #003362; border-radius: 4px;"></div>
          <div style="height: 40px; background: #004074; border-radius: 4px;"></div>
          <div style="height: 40px; background: #104d87; border-radius: 4px;"></div>
          <div style="height: 40px; background: #205d9e; border-radius: 4px;"></div>
          <div style="height: 40px; background: #2870bd; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0090ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #3b9eff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #70b8ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #c2e6ff; border-radius: 4px;"></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="text-align: center; \${t.monoSm} font-size: 0.7rem; color: #ffffff; opacity: 0.6;">\${step}</div>
          \`)}
        </div>
      </div>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 3rem;">
        The <strong>step purposes remain identical</strong> in dark mode — only the palette values change. Step 1 is still page, step 9 is still solid. This means component code stays the same across modes.
      </p>

      <h2 style="\${t.h2}; margin-top: 3rem;">Usage Patterns</h2>

      <h3 style="\${t.h3}; margin-top: 2rem;">Elements (list items, dropdowns, ghost buttons)</h3>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;">
.list-item {
  background: var(--color-neutral-3);      /* element */
}
.list-item:hover {
  background: var(--color-neutral-4);      /* element hovered */
}
.list-item[aria-selected="true"] {
  background: var(--color-primary-5);      /* element pressed */
}</pre>

      <h3 style="\${t.h3}; margin-top: 2rem;">Solids (buttons, badges)</h3>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;">
.button-primary {
  background: var(--color-primary-9);      /* solid */
  color: var(--color-text-on-primary);     /* white text */
}
.button-primary:hover {
  background: var(--color-primary-10);     /* solid hovered */
}</pre>

      <h3 style="\${t.h3}; margin-top: 2rem;">Borders (separators, inputs, cards)</h3>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;">
.divider {
  border-top: 1px solid var(--color-neutral-6); /* separator */
}
.card {
  border: 1px solid var(--color-neutral-6);     /* separator */
}
.input {
  border: 1px solid var(--color-neutral-7);     /* border */
}
.input:hover {
  border: 1px solid var(--color-neutral-8);     /* border hovered */
}
.input:focus {
  outline: 2px solid var(--focus-ring-color);   /* focus ring — utility, NOT border */
}</pre>

      <h3 style="\${t.h3}; margin-top: 2rem;">Text</h3>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 3rem;">
.body {
  color: var(--color-neutral-12);          /* text */
}
.caption {
  color: var(--color-neutral-11);          /* text muted */
}
.link {
  color: var(--color-primary-11);          /* text muted (brand) */
}</pre>

      <h2 style="\${t.h2}; margin-top: 3rem;">Why This Model?</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Traditional color scales (like Tailwind's 50-900) require developers to guess which shade fits each use case. "Should hover be 600 or 700?" becomes tribal knowledge.
      </p>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        With the 12-step model: <strong>Step 4 is always hover. Step 9 is always the solid fill. Step 12 is always high-contrast text.</strong> The step number defines the purpose, not just the lightness.
      </p>

      <div style="background: rgba(251, 191, 36, 0.1); border-left: 3px solid #F59E0B; padding: 0.75rem 1rem; margin-top: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Note:</strong> Focus rings use our structural utility token (<code>--focus-ring-color</code>), NOT step 8. This ensures consistent accessibility regardless of brand theme.
        </p>
      </div>
    </div>
  \`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Color Generator',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Color Generator</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        When onboarding a new brand, we programmatically generate accessible 12-step palettes from a single anchor color. The generator uses OKLCH color space and validates WCAG contrast requirements.
      </p>

      <h2 style="\${t.h2}; margin-top: 2rem;">Accessibility by Design</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        The 12-step system isn't just about visual organization — it's engineered to guarantee WCAG contrast ratios. Radix designed specific <strong>step pairings</strong> that always meet accessibility thresholds.
      </p>

      <h3 style="\${t.h3}">Contrast Pairing Guarantees</h3>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        These pairings are pre-validated to meet WCAG AA requirements:
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Pairing</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Min Ratio</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">WCAG Level</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">Step 9 + white</td>
            <td style="padding: 0.5rem 0.75rem;">4.5:1</td>
            <td style="padding: 0.5rem 0.75rem;">AA Normal</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Primary button text</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">Step 11 on Step 1</td>
            <td style="padding: 0.5rem 0.75rem;">4.5:1</td>
            <td style="padding: 0.5rem 0.75rem;">AA Normal</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Secondary text on app bg</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">Step 12 on Step 1–2</td>
            <td style="padding: 0.5rem 0.75rem;">7:1</td>
            <td style="padding: 0.5rem 0.75rem;">AAA Normal</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Primary text on surfaces</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">Step 9 on Step 1–2</td>
            <td style="padding: 0.5rem 0.75rem;">3:1</td>
            <td style="padding: 0.5rem 0.75rem;">AA Large/UI</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">UI component boundaries</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Why this matters:</strong> You don't check contrast manually for every color choice. If you use step 9 for a button background with white text, it <em>will</em> pass — that's baked into the scale generation.
        </p>
      </div>

      <h2 style="\${t.h2}; margin-top: 3rem;">Why OKLCH?</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Traditional color spaces (HSL, RGB) have a critical flaw: adjusting lightness causes <strong>hue shifts</strong>. A blue darkened in HSL drifts toward purple. This breaks the visual consistency of a color scale.
      </p>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        <strong>OKLCH</strong> (Oklab Lightness-Chroma-Hue) provides perceptually uniform lightness. Changing L doesn't shift the hue — a blue stays blue across all 12 steps. This is essential for generating accessible scales where each step must maintain predictable contrast relationships.
      </p>

      <h3 style="\${t.h3}">OKLCH Components</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} font-weight: 600; width: 80px;">L</td>
            <td style="padding: 0.5rem 0.75rem;">Lightness (0–1)</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Perceptually uniform — 0.5 looks "half bright"</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} font-weight: 600;">C</td>
            <td style="padding: 0.5rem 0.75rem;">Chroma (0–0.4+)</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Color intensity — 0 is grayscale</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} font-weight: 600;">H</td>
            <td style="padding: 0.5rem 0.75rem;">Hue (0–360°)</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Color angle — preserved across the scale</td>
          </tr>
        </tbody>
      </table>

      <h2 style="\${t.h2}; margin-top: 3rem;">Generation Algorithm</h2>

      <h3 style="\${t.h3}">Input</h3>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        A single hex color — the brand's primary, secondary, or accent. This becomes <strong>Step 9</strong> (the solid fill anchor).
      </p>

      <h3 style="\${t.h3}">Process</h3>
      <ol style="\${t.body} max-width: \${PROSE_MAX}; margin: 0 0 1.5rem 1.5rem; padding: 0;">
        <li style="margin-bottom: 0.5rem;"><strong>Convert</strong> — Input hex → OKLCH (extract L, C, H)</li>
        <li style="margin-bottom: 0.5rem;"><strong>Generate</strong> — Create steps 1–8 and 10–12 using target lightness values, scaled chroma, preserved hue</li>
        <li style="margin-bottom: 0.5rem;"><strong>Validate</strong> — Check contrast ratios for each critical pairing</li>
        <li style="margin-bottom: 0.5rem;"><strong>Adjust</strong> — If a pairing fails, shift L until it passes</li>
        <li style="margin-bottom: 0.5rem;"><strong>Output</strong> — 12-step palette as hex values + CSS custom properties</li>
      </ol>

      <h3 style="\${t.h3}">Step Targets (Light Mode)</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 60px;">Step</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 100px;">L Target</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 100px;">C Scale</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">0.985</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">8%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Page</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">2</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">0.965</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">12%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Surface</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">3–5</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">0.94–0.88</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">20–36%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Element → hovered → pressed</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">6–8</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">0.82–0.68</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">45–70%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Separator → border → border hovered</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); background: rgba(128,128,128,0.04);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} font-weight: 600;">9</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">input</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">100%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} font-weight: 600;">Solid (anchor)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">10</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">input − 0.08</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">95%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Solid hovered</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">11</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">0.45</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">75%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Text muted</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">12</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">0.30</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">60%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Text</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Step Targets (Dark Mode)</h3>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Dark mode isn't an inversion — it's a separate palette. Key differences: backgrounds are dark (low L), text is light (high L), and hover <em>brightens</em> instead of darkening.
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 60px;">Step</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 100px;">L Target</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 100px;">C Scale</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">0.12</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">8%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Page</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">2</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">0.145</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">12%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Surface</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">3–5</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">0.175–0.24</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">20–36%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Element → hovered → pressed</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">6–8</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">0.30–0.44</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">45–70%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Separator → border → border hovered</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); background: rgba(128,128,128,0.04);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} font-weight: 600;">9</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">input (0.45–0.65)</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">100%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} font-weight: 600;">Solid (anchor)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">10</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">input + 0.08</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">95%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Solid hovered (brightens)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">11</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">0.75</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">75%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Text muted</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">12</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">0.90</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">60%</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Text</td>
          </tr>
        </tbody>
      </table>

      <h2 style="\${t.h2}; margin-top: 3rem;">Three-Tier Compliance Model</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        The generator validates each anchor color against WCAG contrast requirements and applies one of three scenarios:
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Scenario</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Contrast</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Behavior</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Output</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1 — Full</td>
            <td style="padding: 0.5rem 0.75rem;">≥ 4.5:1</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Anchor passes — full scale generated</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-{name}-1 … 12</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">2 — Adjusted</td>
            <td style="padding: 0.5rem 0.75rem;">4.0 – 4.5:1</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Minor adjustment applied, then full scale</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-{name}-1 … 12</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">3 — Decorative</td>
            <td style="padding: 0.5rem 0.75rem;">< 4.0:1</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Decorative use only — no solid fills or text</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-{name}-decorative-1 … 8</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Decorative-Safe Steps (Scenario 3)</h3>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        When an anchor cannot meet 4.0:1, only steps 1–8 are generated. These are safe because they don't place text directly on the accent color:
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Steps</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Use</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Text on it?</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Safe?</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">1–2</td>
            <td style="padding: 0.5rem 0.75rem;">Page, surface (tinted backgrounds)</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">No</td>
            <td style="padding: 0.5rem 0.75rem;">✓</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">3–5</td>
            <td style="padding: 0.5rem 0.75rem;">Element backgrounds (default → hovered → pressed)</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Yes, but neutral-12 (dark)</td>
            <td style="padding: 0.5rem 0.75rem;">✓</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">6–8</td>
            <td style="padding: 0.5rem 0.75rem;">Separators, borders (dividers, strokes, outlines)</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">No</td>
            <td style="padding: 0.5rem 0.75rem;">✓</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); background: rgba(239, 68, 68, 0.04);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">9–10</td>
            <td style="padding: 0.5rem 0.75rem;">Solid, solid hovered (buttons, badges)</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Yes, white text</td>
            <td style="padding: 0.5rem 0.75rem;">✗ Not generated</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); background: rgba(239, 68, 68, 0.04);">
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">11–12</td>
            <td style="padding: 0.5rem 0.75rem;">Text muted, text (colored labels, links)</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">N/A — these ARE text</td>
            <td style="padding: 0.5rem 0.75rem;">✗ Not generated</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #EF4444; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <h4 style="margin: 0 0 0.5rem; font-weight: 600;">Common Decorative-Only Hues</h4>
        <p style="\${t.bodySm} margin: 0 0 0.75rem;">
          These colors typically fall into Scenario 3 (< 4.0:1 with white):
        </p>
        <ul style="\${t.bodySm} margin: 0 0 0 1.25rem; padding: 0;">
          <li style="margin-bottom: 0.25rem;"><strong>Bright yellow</strong> (#FFD700, #FFFF00)</li>
          <li style="margin-bottom: 0.25rem;"><strong>Lime green</strong> (#32CD32, #00FF00)</li>
          <li style="margin-bottom: 0.25rem;"><strong>Cyan / aqua</strong> (#00FFFF, #00CED1)</li>
          <li style="margin-bottom: 0.25rem;"><strong>Light orange</strong> (#FFA500)</li>
        </ul>
      </div>
    </div>
  \`
}`,...f.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Color Generator Tool',
  render: () => {
    const containerId = \`generator-\${Math.random().toString(36).slice(2, 9)}\`;
    const initGenerator = () => {
      const container = document.getElementById(containerId);
      if (!container) return;
      const hexInput = container.querySelector<HTMLInputElement>('#hex-input');
      const nameInput = container.querySelector<HTMLSelectElement>('#name-input');
      const resultArea = container.querySelector('#result-area');
      const lightScaleArea = container.querySelector('#light-scale-area');
      const darkScaleArea = container.querySelector('#dark-scale-area');
      const cssArea = container.querySelector<HTMLTextAreaElement>('#css-output');
      const copyBtn = container.querySelector('#copy-btn');
      const renderScale = (result: ReturnType<typeof generateScale>, isDark: boolean) => {
        let html = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(65px, 1fr)); gap: 6px;">';
        const labelColor = isDark ? 'rgba(255,255,255,0.7)' : 'inherit';
        result.steps.forEach(s => {
          const textColor = isDark ? s.step >= 11 ? '#1a1a1a' : '#fff' : s.step >= 9 ? '#fff' : '#1a1a1a';
          const border = !isDark && s.step <= 2 ? ' border: 1px solid rgba(128,128,128,0.2);' : '';
          html += \`<div style="text-align: center;"><div style="height: 40px; border-radius: 5px; background: \${s.hex}; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 600; color: \${textColor};\${border}">\${s.step}</div><div style="font-size: 0.6rem; margin-top: 3px; color: \${labelColor};">\${s.name}</div></div>\`;
        });
        html += '</div>';
        return html;
      };
      const update = () => {
        const hex = hexInput?.value || '#0066CC';
        const name = nameInput?.value || 'brand';
        if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) {
          if (resultArea) resultArea.innerHTML = '<span style="color: #EF4444;">Invalid hex format. Use #RRGGBB.</span>';
          return;
        }
        const lightResult = generateScale(hex, false, name);
        const darkResult = generateScale(hex, true, name);
        const scenarioLabels = {
          1: ['✓ Full Scale', 'rgba(34, 197, 94, 0.15)', '#16A34A'],
          2: ['⚠ Adjusted', 'rgba(251, 191, 36, 0.15)', '#D97706'],
          3: ['✗ Decorative Only', 'rgba(239, 68, 68, 0.15)', '#DC2626']
        };
        const [label, bg, color] = scenarioLabels[lightResult.scenario];
        const swatch = (c: string) => \`<span style="display: inline-block; width: 24px; height: 24px; border-radius: 4px; background: \${c}; vertical-align: middle; border: 1px solid rgba(128,128,128,0.2);"></span>\`;
        let info = \`<div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 6px; background: \${bg}; color: \${color}; font-weight: 600; margin-bottom: 0.75rem;">\${label}</div>\`;
        if (lightResult.scenario === 2) {
          info += \`<div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.75rem;">\`;
          info += \`<div style="text-align: center;">\${swatch(hex)}<div style="font-size: 0.7rem; margin-top: 0.25rem; opacity: 0.6;">Input</div><div style="font-size: 0.75rem; font-family: ui-monospace, monospace;">\${hex}</div><div style="font-size: 0.7rem; opacity: 0.6;">\${lightResult.ratio.toFixed(2)}:1</div></div>\`;
          info += \`<div style="font-size: 1.25rem; opacity: 0.4;">→</div>\`;
          info += \`<div style="text-align: center;">\${swatch(lightResult.anchorHex)}<div style="font-size: 0.7rem; margin-top: 0.25rem; opacity: 0.6;">Adjusted</div><div style="font-size: 0.75rem; font-family: ui-monospace, monospace;">\${lightResult.anchorHex}</div><div style="font-size: 0.7rem; opacity: 0.6;">\${lightResult.adjustedRatio?.toFixed(2)}:1</div></div>\`;
          info += \`</div>\`;
        } else {
          info += \`<div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem;">\${swatch(hex)}<span style="font-size: 0.875rem;"><span style="font-family: ui-monospace, monospace;">\${hex}</span> — Contrast with white: \${lightResult.ratio.toFixed(2)}:1</span></div>\`;
        }
        if (resultArea) resultArea.innerHTML = info;
        if (lightScaleArea) lightScaleArea.innerHTML = renderScale(lightResult, false);
        if (darkScaleArea) darkScaleArea.innerHTML = renderScale(darkResult, true);
        const lightCss = lightResult.steps.map(s => \`\${s.token}: \${s.hex};\`).join('\\\\n');
        const darkCss = darkResult.steps.map(s => \`\${s.token.replace(name, name + '-dark')}: \${s.hex};\`).join('\\\\n');
        if (cssArea) cssArea.value = \`/* Light Mode */\\\\n\${lightCss}\\\\n\\\\n/* Dark Mode */\\\\n\${darkCss}\`;
      };
      hexInput?.addEventListener('input', update);
      nameInput?.addEventListener('change', update);
      copyBtn?.addEventListener('click', () => {
        cssArea?.select();
        document.execCommand('copy');
        if (copyBtn) copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          if (copyBtn) copyBtn.textContent = 'Copy CSS';
        }, 1500);
      });
      update();
    };
    setTimeout(initGenerator, 0);
    return html\`
      <div id="\${containerId}" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
        <h1 style="\${t.h1}">Color Generator Tool</h1>
        <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
          Enter an anchor color to preview an accessible 12-step palette. The tool validates WCAG contrast and applies the appropriate scenario.
        </p>

        <div style="background: rgba(251, 191, 36, 0.1); border-left: 3px solid #F59E0B; padding: 0.75rem 1rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0; max-width: \${PROSE_MAX};">
          <p style="\${t.bodySm} margin: 0;">
            <strong>Demo tool:</strong> This generator is for exploration and simulation. Official brand themes are authored and published by the DS team as <code style="font-size: 0.8125rem;">@mms/theme-[client]</code> packages.
          </p>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; align-items: flex-end;">
          <div>
            <label style="display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.25rem;">Anchor Color</label>
            <input type="text" id="hex-input" value="#0066CC" style="padding: 0.5rem 0.75rem; border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; font-family: ui-monospace, monospace; font-size: 0.9375rem; width: 120px;" />
          </div>
          <div>
            <label style="display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.25rem;">Token Name</label>
            <select id="name-input" style="padding: 0.5rem 0.75rem; border: 1px solid rgba(128,128,128,0.3); border-radius: 6px; font-size: 0.9375rem; width: 140px; background: #fff;">
              <option value="primary" selected>primary</option>
              <option value="secondary">secondary</option>
              <option value="accent">accent</option>
            </select>
          </div>
        </div>

        <div id="result-area" style="margin-bottom: 1.5rem;"></div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
          <div>
            <h4 style="margin: 0 0 0.75rem; font-weight: 600; font-size: 0.9375rem;">Light Mode</h4>
            <div id="light-scale-area" style="background: #ffffff; padding: 1rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15);"></div>
          </div>
          <div>
            <h4 style="margin: 0 0 0.75rem; font-weight: 600; font-size: 0.9375rem;">Dark Mode</h4>
            <div id="dark-scale-area" style="background: #111111; padding: 1rem; border-radius: 8px;"></div>
          </div>
        </div>

        <h3 style="\${t.h3}">CSS Output</h3>
        <div style="position: relative;">
          <textarea id="css-output" readonly style="width: 100%; height: 320px; padding: 1rem; border: 1px solid rgba(128,128,128,0.2); border-radius: 6px; font-family: ui-monospace, monospace; font-size: 0.8125rem; resize: vertical; background: rgba(128,128,128,0.04);"></textarea>
          <button id="copy-btn" style="position: absolute; top: 0.5rem; right: 0.5rem; padding: 0.375rem 0.75rem; border: 1px solid rgba(128,128,128,0.3); border-radius: 4px; background: rgba(255,255,255,0.9); font-size: 0.75rem; cursor: pointer;">Copy CSS</button>
        </div>
      </div>
    \`;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Brand Colors',
  render: () => {
    const themes = [{
      value: '',
      label: 'Neutral (development fallback)',
      description: 'Grayscale — no brand applied'
    }, {
      value: 'maximus',
      label: 'Maximus',
      description: 'Violet primary, slate secondary, green accent'
    }, {
      value: 'va-gov',
      label: 'VA.gov',
      description: 'VA Blue primary, gold secondary, teal accent'
    }];
    return html\`
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
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
          <p id="theme-description" style="\${t.caption} opacity: 0.65; margin: 0.5rem 0 0;">Grayscale — no brand applied</p>
        </div>

        <h2 style="\${t.h2}">Light Mode</h2>
        <div id="brand-palettes" style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15); margin-bottom: 2rem;">
          \${paletteScale('Primary', '--color-primary')}
          \${paletteScale('Secondary', '--color-secondary')}
          \${paletteScale('Accent', '--color-accent')}
        </div>

        <h2 style="\${t.h2}">Dark Mode</h2>
        <div id="brand-palettes-dark" style="background: #111111; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
          \${paletteScaleDark('Primary', '--color-primary')}
          \${paletteScaleDark('Secondary', '--color-secondary')}
          \${paletteScaleDark('Accent', '--color-accent')}
        </div>

        <h2 style="\${t.h2}">On-Color Text</h2>
        <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
          Text rendered on Step 9 solid backgrounds uses dedicated on-color tokens to ensure WCAG AA contrast (4.5:1).
        </p>
        <div id="on-color-examples" style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 2rem;">
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
        <div id="palette-tables" style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.15); margin-bottom: 2rem;">
          \${paletteTable('Primary Palette', '--color-primary')}
          \${paletteTable('Secondary Palette', '--color-secondary')}
          \${paletteTable('Accent Palette', '--color-accent')}
        </div>

        <h2 style="\${t.h2}">Token Reference — Dark Mode</h2>
        <div id="palette-tables-dark" style="background: #111111; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
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
        const container = document.getElementById('brand-palettes')?.closest('div[style*="max-width"]');
        const darkPalettes = document.getElementById('brand-palettes-dark');
        const darkTables = document.getElementById('palette-tables-dark');

        // Convert RGB to hex
        const rgbToHex = (rgb) => {
          const match = rgb.match(/rgb\\\\(\\\\s*(\\\\d+)\\\\s*,\\\\s*(\\\\d+)\\\\s*,\\\\s*(\\\\d+)\\\\s*\\\\)/);
          if (!match) return rgb;
          const [, r, g, b] = match;
          return '#' + [r, g, b].map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
        };

        // Update all hex value cells (light mode)
        const updateHexValues = () => {
          const hexCells = document.querySelectorAll('.hex-value[data-token]');
          hexCells.forEach(cell => {
            const token = cell.getAttribute('data-token');
            const swatch = document.querySelector('.color-swatch[data-token="' + token + '"]');
            if (swatch) {
              const computed = getComputedStyle(swatch).backgroundColor;
              cell.textContent = rgbToHex(computed).toUpperCase();
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
              cell.textContent = rgbToHex(computed).toUpperCase();
            }
          });
        };

        // Initial update after render
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            updateHexValues();
            updateHexValuesDark();
          });
        });

        if (selector && description && container) {
          selector.addEventListener('change', (e) => {
            const value = e.target.value;
            const theme = themes.find(t => t.value === value);

            if (value) {
              container.setAttribute('data-theme', value);
            } else {
              container.removeAttribute('data-theme');
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
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Neutral Colors',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Neutral Colors</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The neutral palette is a 12-step grayscale used for backgrounds, borders, and text throughout the UI. Unlike brand colors, neutrals are <strong>shared across all themes</strong> — they provide structural consistency regardless of client brand.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Structural token:</strong> Neutral colors don't change per theme. Use them for UI structure (cards, borders, text) that should remain consistent across all brand contexts.
        </p>
      </div>

      <h2 style="\${t.h2}">12-Step Scale</h2>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
        \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
          <div style="height: 48px; background: var(--color-neutral-\${step}); border-radius: 4px;\${step <= 2 ? ' border: 1px solid rgba(128,128,128,0.2);' : ''}"></div>
        \`)}
      </div>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 2rem;">
        \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
          <div style="text-align: center; \${t.monoSm} opacity: 0.7;">\${step}</div>
        \`)}
      </div>

      <h2 style="\${t.h2}">Token Reference</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; width: 64px;"></th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 50px;">Step</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Hex</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
          </tr>
        </thead>
        <tbody>
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">
                <div style="width: 48px; height: 32px; border-radius: 4px; background: var(--color-neutral-\${step});\${step <= 2 ? ' border: 1px solid rgba(128,128,128,0.2);' : ''}"></div>
              </td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">\${step}</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-neutral-\${step}</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm} opacity: 0.65;">\${neutralSteps[step].hex}</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">\${neutralSteps[step].purpose}</td>
            </tr>
          \`)}
        </tbody>
      </table>

      <h2 style="\${t.h2}">Common Usage</h2>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem 1.25rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
/* Page background */
body {
  background: var(--color-neutral-1);
  color: var(--color-neutral-12);
}

/* Card */
.card {
  background: var(--color-neutral-2);
  border: 1px solid var(--color-neutral-6);
}

/* List item states */
.list-item:hover {
  background: var(--color-neutral-4);
}

/* Input */
.input {
  border: 1px solid var(--color-neutral-7);
}
.input::placeholder {
  color: var(--color-neutral-11);
}</pre>
    </div>
  \`
}`,...z.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Utility Colors',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Utility Colors</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Utility colors are structural tokens that remain <strong>fixed across all themes</strong>. They don't follow the 12-step brand framework — instead, they serve specific functional purposes that must remain consistent regardless of client brand.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Why fixed?</strong> Status feedback (success, error, caution) and accessibility indicators (focus ring) must communicate consistently. A green success message should look like a success message on every client site. A focus ring must always be visible for keyboard users.
        </p>
      </div>

      <h2 style="\${t.h2}">Status Colors</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Each status category provides two tiers: <strong>muted</strong> for surface backgrounds and <strong>emphasis</strong> for text, borders, and icons.
      </p>

      \${utilityTokens.map(g => utilitySection(g.category, g.tokens, g.note))}

      <h2 style="\${t.h2}">Usage Example</h2>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem 1.25rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
/* Success alert */
.alert-success {
  background: var(--color-utility-success-muted);
  border: 1px solid var(--color-utility-success-emphasis);
  color: var(--color-utility-success-emphasis);
}

/* Error message */
.error-text {
  color: var(--color-utility-error-emphasis);
}

/* Caution banner */
.banner-caution {
  background: var(--color-utility-caution-muted);
  border-left: 4px solid var(--color-utility-caution-emphasis);
}</pre>
    </div>
  \`
}`,...W.parameters?.docs?.source}}},G=[`Overview`,`ColorFramework`,`ColorGenerator`,`ColorGeneratorTool`,`DesigningInFigma`,`BrandColors`,`NeutralColors`,`UtilityColors`]}))();export{L as BrandColors,d as ColorFramework,f as ColorGenerator,A as ColorGeneratorTool,j as DesigningInFigma,z as NeutralColors,u as Overview,W as UtilityColors,G as __namedExportsOrder,o as default};