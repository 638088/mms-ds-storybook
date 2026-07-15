import{i as e}from"./preload-helper-BdFrVu1K.js";import{o as t,t as n}from"./iframe-CQ36wFM3.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{n(),r={title:`Foundations/Colors/Color Framework`},i={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 2rem 0 0.75rem;`,h3:`font-size: 1.125rem; line-height: 1.35; font-weight: 600; margin: 1.5rem 0 0.5rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.8125rem;`},a=`680px`,o=`960px`,s={name:`Overview`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${i.h1}">Color Framework</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 2rem;">
        The 12-step scale is a purpose-driven color system. Instead of picking arbitrary shades, each step number maps to a specific UI role. This makes component styling predictable and consistent.
      </p>

      <h2 style="${i.h2}; margin-top: 3rem;">Step Purposes — Light Mode (Reference)</h2>
      <p style="${i.bodySm} opacity: 0.75; max-width: ${a}; margin-bottom: 1rem;">
        Below is <strong>Radix Blue</strong> as a reference example — this is not our brand palette. It demonstrates how the 12-step structure maps to UI purposes.
      </p>
      <div style="background: #ffffff; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(128,128,128,0.2); margin-bottom: 1.5rem;">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
          <div style="height: 40px; background: #fbfdff; border-radius: 4px; border: 1px solid rgba(128,128,128,0.15);"></div>
          <div style="height: 40px; background: #f4faff; border-radius: 4px; border: 1px solid rgba(128,128,128,0.15);"></div>
          <div style="height: 40px; background: #e6f4fe; border-radius: 4px;"></div>
          <div style="height: 40px; background: #d5efff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #c2e5ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #acd8fc; border-radius: 4px;"></div>
          <div style="height: 40px; background: #8ec8f6; border-radius: 4px;"></div>
          <div style="height: 40px; background: #5eb1ef; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0090ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0588f0; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0d74ce; border-radius: 4px;"></div>
          <div style="height: 40px; background: #113264; border-radius: 4px;"></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="text-align: center; ${i.monoSm} font-size: 0.7rem; color: #1a1a1a; opacity: 0.6;">${e}</div>
          `)}
        </div>
      </div>

      <h3 style="${i.h3}">Per-Step Reference</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600; width: 60px;">Step</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Example Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">1</td>
            <td style="padding: 0.5rem 0.75rem;">Page</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Body background, main canvas</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">2</td>
            <td style="padding: 0.5rem 0.75rem;">Surface</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Cards, sidebars, panels, table rows</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">3</td>
            <td style="padding: 0.5rem 0.75rem;">Element</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Ghost button, dropdown item, list item default</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">4</td>
            <td style="padding: 0.5rem 0.75rem;">Element hovered</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Hover state on interactive elements</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">5</td>
            <td style="padding: 0.5rem 0.75rem;">Element pressed</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Active/pressed state, selected item</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">6</td>
            <td style="padding: 0.5rem 0.75rem;">Separator</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Dividers, card borders, subtle accent lines</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">7</td>
            <td style="padding: 0.5rem 0.75rem;">Border</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Input borders, button outlines</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">8</td>
            <td style="padding: 0.5rem 0.75rem;">Border hovered</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Hover borders, emphasized outlines</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); background: rgba(128,128,128,0.04);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm} font-weight: 600;">9</td>
            <td style="padding: 0.5rem 0.75rem; font-weight: 600;">Solid (anchor)</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Primary buttons, badges, filled elements</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">10</td>
            <td style="padding: 0.5rem 0.75rem;">Solid hovered</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Hover state on solid fills</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">11</td>
            <td style="padding: 0.5rem 0.75rem;">Text muted</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Placeholder, secondary labels, captions</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">12</td>
            <td style="padding: 0.5rem 0.75rem;">Text</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Body text, headings, high-contrast labels</td>
          </tr>
        </tbody>
      </table>

      <h2 style="${i.h2}; margin-top: 2rem;">Step Purposes — Dark Mode (Reference)</h2>
      <p style="${i.bodySm} opacity: 0.75; max-width: ${a}; margin-bottom: 1rem;">
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
            <div style="text-align: center; ${i.monoSm} font-size: 0.7rem; color: #ffffff; opacity: 0.6;">${e}</div>
          `)}
        </div>
      </div>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 3rem;">
        The <strong>step purposes remain identical</strong> in dark mode — only the palette values change. Step 1 is still page, step 9 is still solid. This means component code stays the same across modes.
      </p>

      <h2 style="${i.h2}; margin-top: 3rem;">Usage Patterns</h2>

      <h3 style="${i.h3}; margin-top: 2rem;">Elements (list items, dropdowns, ghost buttons)</h3>
      <pre style="${i.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;">
.list-item {
  background: var(--color-neutral-3);      /* element */
}
.list-item:hover {
  background: var(--color-neutral-4);      /* element hovered */
}
.list-item[aria-selected="true"] {
  background: var(--color-primary-5);      /* element pressed */
}</pre>

      <h3 style="${i.h3}; margin-top: 2rem;">Solids (buttons, badges)</h3>
      <pre style="${i.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;">
.button-primary {
  background: var(--color-primary-9);      /* solid */
  color: var(--color-text-on-primary);     /* white text */
}
.button-primary:hover {
  background: var(--color-primary-10);     /* solid hovered */
}</pre>

      <h3 style="${i.h3}; margin-top: 2rem;">Borders (separators, inputs, cards)</h3>
      <pre style="${i.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;">
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

      <h3 style="${i.h3}; margin-top: 2rem;">Text</h3>
      <pre style="${i.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 3rem;">
.body {
  color: var(--color-neutral-12);          /* text */
}
.caption {
  color: var(--color-neutral-11);          /* text muted */
}
.link {
  color: var(--color-primary-11);          /* text muted (brand) */
}</pre>

      <h2 style="${i.h2}; margin-top: 3rem;">Why This Model?</h2>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1rem;">
        Traditional color scales (like Tailwind's 50-900) require developers to guess which shade fits each use case. "Should hover be 600 or 700?" becomes tribal knowledge.
      </p>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1rem;">
        With the 12-step model: <strong>Step 4 is always hover. Step 9 is always the solid fill. Step 12 is always high-contrast text.</strong> The step number defines the purpose, not just the lightness.
      </p>

      <div style="background: rgba(251, 191, 36, 0.1); border-left: 3px solid #F59E0B; padding: 0.75rem 1rem; margin-top: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${i.bodySm} margin: 0;">
          <strong>Note:</strong> Focus rings use our structural utility token (<code>--focus-ring-color</code>), NOT step 8. This ensures consistent accessibility regardless of brand theme.
        </p>
      </div>
    </div>
  `},c={name:`Color Generator`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${i.h1}">Color Generator</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 2rem;">
        When onboarding a new brand, we programmatically generate accessible 12-step palettes from a single anchor color. The generator uses OKLCH color space and validates WCAG contrast requirements.
      </p>

      <h2 style="${i.h2}; margin-top: 2rem;">Accessibility by Design</h2>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1rem;">
        The 12-step system isn't just about visual organization — it's engineered to guarantee WCAG contrast ratios. Radix designed specific <strong>step pairings</strong> that always meet accessibility thresholds.
      </p>

      <h3 style="${i.h3}">Contrast Pairing Guarantees</h3>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1rem;">
        These pairings are pre-validated to meet WCAG AA requirements:
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Pairing</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Min Ratio</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">WCAG Level</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">Step 9 + <code>-9-on</code></td>
            <td style="padding: 0.5rem 0.75rem;">4.5:1</td>
            <td style="padding: 0.5rem 0.75rem;">AA Normal</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Primary button text (auto-calculated)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">Step 11 on Step 1</td>
            <td style="padding: 0.5rem 0.75rem;">4.5:1</td>
            <td style="padding: 0.5rem 0.75rem;">AA Normal</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Secondary text on app bg</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">Step 12 on Step 1–2</td>
            <td style="padding: 0.5rem 0.75rem;">7:1</td>
            <td style="padding: 0.5rem 0.75rem;">AAA Normal</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Primary text on surfaces</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">Step 9 on Step 1–2</td>
            <td style="padding: 0.5rem 0.75rem;">3:1</td>
            <td style="padding: 0.5rem 0.75rem;">AA Large/UI</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">UI component boundaries</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${i.bodySm} margin: 0;">
          <strong>Why this matters:</strong> You don't check contrast manually. The generator outputs <code>-9-on</code> and <code>-10-on</code> tokens that auto-select white (<code>#ffffff</code>) or dark (<code>#060606</code>) text based on which provides better contrast. Components reference <code>--color-text-on-emphasis</code> which aliases to the computed value.
        </p>
      </div>

      <h2 style="${i.h2}; margin-top: 3rem;">Why OKLCH?</h2>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1rem;">
        Traditional color spaces (HSL, RGB) have a critical flaw: adjusting lightness causes <strong>hue shifts</strong>. A blue darkened in HSL drifts toward purple. This breaks the visual consistency of a color scale.
      </p>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1rem;">
        <strong>OKLCH</strong> (Oklab Lightness-Chroma-Hue) provides perceptually uniform lightness. Changing L doesn't shift the hue — a blue stays blue across all 12 steps. This is essential for generating accessible scales where each step must maintain predictable contrast relationships.
      </p>

      <h3 style="${i.h3}">OKLCH Components</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm} font-weight: 600; width: 80px;">L</td>
            <td style="padding: 0.5rem 0.75rem;">Lightness (0–1)</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Perceptually uniform — 0.5 looks "half bright"</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm} font-weight: 600;">C</td>
            <td style="padding: 0.5rem 0.75rem;">Chroma (0–0.4+)</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Color intensity — 0 is grayscale</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm} font-weight: 600;">H</td>
            <td style="padding: 0.5rem 0.75rem;">Hue (0–360°)</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">Color angle — preserved across the scale</td>
          </tr>
        </tbody>
      </table>

      <h2 style="${i.h2}; margin-top: 3rem;">Three-Tier Compliance Model</h2>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1rem;">
        The generator validates each anchor color against WCAG contrast requirements and applies one of three scenarios:
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Scenario</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Contrast</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Behavior</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Output</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">1 — Full</td>
            <td style="padding: 0.5rem 0.75rem;">≥ 4.5:1</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption}">Anchor passes — full scale generated</td>
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">--color-{name}-1 … 12</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">2 — Adjusted</td>
            <td style="padding: 0.5rem 0.75rem;">4.0 – 4.5:1</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption}">Minor adjustment applied, then full scale</td>
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">--color-{name}-1 … 12</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">3 — Decorative</td>
            <td style="padding: 0.5rem 0.75rem;">< 4.0:1</td>
            <td style="padding: 0.5rem 0.75rem; ${i.caption}">Decorative use only — no solid fills or text</td>
            <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">--color-{name}-decorative-1 … 9</td>
          </tr>
        </tbody>
      </table>

      <p style="${i.body} opacity: 0.85; max-width: ${a};">
        See the <strong>Color Generator Tool</strong> to interactively explore how different anchor colors produce palettes under each scenario.
      </p>
    </div>
  `},l=e=>{let t=e.replace(`#`,``);return{r:parseInt(t.substring(0,2),16)/255,g:parseInt(t.substring(2,4),16)/255,b:parseInt(t.substring(4,6),16)/255}},u=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,d=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,f=e=>{let t=u(e.r),n=u(e.g),r=u(e.b),i=Math.cbrt(.4122214708*t+.5363325363*n+.0514459929*r),a=Math.cbrt(.2119034982*t+.6806995451*n+.1073969566*r),o=Math.cbrt(.0883024619*t+.2817188376*n+.6299787005*r);return{L:.2104542553*i+.793617785*a-.0040720468*o,a:1.9779984951*i-2.428592205*a+.4505937099*o,b:.0259040371*i+.7827717662*a-.808675766*o}},p=e=>{let t=e.L+.3963377774*e.a+.2158037573*e.b,n=e.L-.1055613458*e.a-.0638541728*e.b,r=e.L-.0894841775*e.a-1.291485548*e.b,i=t*t*t,a=n*n*n,o=r*r*r;return{r:d(4.0767416621*i-3.3077115913*a+.2309699292*o),g:d(-1.2684380046*i+2.6097574011*a-.3413193965*o),b:d(-.0041960863*i-.7034186147*a+1.707614701*o)}},m=e=>{let t=Math.sqrt(e.a*e.a+e.b*e.b),n=Math.atan2(e.b,e.a)*(180/Math.PI);return n<0&&(n+=360),{L:e.L,C:t,H:n}},h=e=>{let t=e.H*(Math.PI/180);return{L:e.L,a:e.C*Math.cos(t),b:e.C*Math.sin(t)}},g=e=>{let t=e=>Math.max(0,Math.min(1,e)),n=e=>Math.round(t(e)*255).toString(16).padStart(2,`0`);return`#${n(e.r)}${n(e.g)}${n(e.b)}`},_=e=>m(f(l(e))),v=e=>g(p(h(e))),y=e=>.2126*u(e.r)+.7152*u(e.g)+.0722*u(e.b),b=(e,t)=>{let n=y(l(e)),r=y(l(t));return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)},x=[.985,.965,.94,.915,.885,.82,.75,.68,null,null,.45,.3],S=[.12,.195,.215,.23,.27,.3,.37,.44,null,null,.75,.9],C=[.08,.12,.2,.28,.36,.45,.55,.7,1,.95,.75,.6],w=[2.2,1.5,1.45,1.4,1.28,1.25,1.15,1.06,1,1,1,1],T=[`Page`,`Surface`,`Element`,`Element hovered`,`Element pressed`,`Separator`,`Border`,`Border hovered`,`Solid (anchor)`,`Solid hovered`,`Text muted`,`Text`],E=(e,t,n)=>{let r=`#ffffff`,i=b(e,r),a,o=e,s=null;if(i>=4.5)a=1;else if(i>=4){a=2;let t=_(e);for(let e=t.L;e>=.15;e-=.005){let n=v({L:e,C:t.C,H:t.H});if(b(n,r)>=4.5){o=n,s=b(n,r);break}}}else a=3;let c=_(o),l=t?S:x,u=a===3?9:12,d=a===3?`-decorative`:``,f=[];for(let e=0;e<u;e++){let r=e+1,i,a,o=c.H;if(r===9)i=t?Math.max(.45,Math.min(.65,c.L)):c.L,a=c.C;else if(r===10){let e=t?Math.max(.45,Math.min(.65,c.L)):c.L;i=t?Math.min(.75,e+.08):Math.max(.25,e-.08),a=c.C*.95}else{i=l[e];let n=t?C[e]*w[e]:C[e];a=c.C*n}a=Math.max(0,Math.min(.4,a)),f.push({step:r,hex:v({L:i,C:a,H:o}),name:T[e],token:`--color-${n}${d}-${r}`})}return{steps:f,scenario:a,ratio:i,anchorHex:o,adjustedRatio:s,suffix:d}},D={name:`Color Generator Tool`,render:()=>{let e=`generator-${Math.random().toString(36).slice(2,9)}`;return setTimeout(()=>{let t=document.getElementById(e);if(!t)return;let n=t.querySelector(`#hex-input`),r=t.querySelector(`#name-input`),i=t.querySelector(`#result-area`),a=t.querySelector(`#light-scale-area`),o=t.querySelector(`#dark-scale-area`),s=t.querySelector(`#css-output`),c=t.querySelector(`#copy-btn`),l=(e,t)=>{let n=`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(65px, 1fr)); gap: 6px;">`,r=t?`rgba(255,255,255,0.7)`:`inherit`;return e.steps.forEach(e=>{let i=t?e.step>=11?`#1a1a1a`:`#fff`:e.step>=9?`#fff`:`#1a1a1a`,a=!t&&e.step<=2?` border: 1px solid rgba(128,128,128,0.2);`:t&&e.step<=3?` border: 1px solid rgba(255,255,255,0.15);`:``;n+=`<div style="text-align: center;"><div style="height: 40px; border-radius: 5px; background: ${e.hex}; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 600; color: ${i};${a}">${e.step}</div><div style="font-size: 0.6rem; margin-top: 3px; color: ${r};">${e.name}</div></div>`}),n+=`</div>`,n},u=()=>{let e=n?.value||`#0066CC`,t=r?.value||`brand`;if(!/^#[0-9A-Fa-f]{6}$/.test(e)){i&&(i.innerHTML=`<span style="color: #EF4444;">Invalid hex format. Use #RRGGBB.</span>`);return}let c=E(e,!1,t),u=E(e,!0,t),[d,f,p]={1:[`✓ Full Scale`,`rgba(34, 197, 94, 0.15)`,`#16A34A`],2:[`⚠ Adjusted`,`rgba(251, 191, 36, 0.15)`,`#D97706`],3:[`✗ Decorative Only`,`rgba(239, 68, 68, 0.15)`,`#DC2626`]}[c.scenario],m=e=>`<span style="display: inline-block; width: 24px; height: 24px; border-radius: 4px; background: ${e}; vertical-align: middle; border: 1px solid rgba(128,128,128,0.2);"></span>`,h=`<div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 6px; background: ${f}; color: ${p}; font-weight: 600; margin-bottom: 0.75rem;">${d}</div>`;c.scenario===2?(h+=`<div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.75rem;">`,h+=`<div style="text-align: center;">${m(e)}<div style="font-size: 0.7rem; margin-top: 0.25rem; opacity: 0.6;">Input</div><div style="font-size: 0.75rem; font-family: ui-monospace, monospace;">${e}</div><div style="font-size: 0.7rem; opacity: 0.6;">${c.ratio.toFixed(2)}:1</div></div>`,h+=`<div style="font-size: 1.25rem; opacity: 0.4;">→</div>`,h+=`<div style="text-align: center;">${m(c.anchorHex)}<div style="font-size: 0.7rem; margin-top: 0.25rem; opacity: 0.6;">Adjusted</div><div style="font-size: 0.75rem; font-family: ui-monospace, monospace;">${c.anchorHex}</div><div style="font-size: 0.7rem; opacity: 0.6;">${c.adjustedRatio?.toFixed(2)}:1</div></div>`,h+=`</div>`):h+=`<div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem;">${m(e)}<span style="font-size: 0.875rem;"><span style="font-family: ui-monospace, monospace;">${e}</span> — Contrast with white: ${c.ratio.toFixed(2)}:1</span></div>`,i&&(i.innerHTML=h),a&&(a.innerHTML=l(c,!1)),o&&(o.innerHTML=l(u,!0));let g=c.steps.map(e=>`${e.token}: ${e.hex};`).join(`\\n`),_=u.steps.map(e=>`${e.token.replace(t,t+`-dark`)}: ${e.hex};`).join(`\\n`);s&&(s.value=`/* Light Mode */\\n${g}\\n\\n/* Dark Mode */\\n${_}`)};n?.addEventListener(`input`,u),r?.addEventListener(`change`,u),c?.addEventListener(`click`,()=>{s?.select(),document.execCommand(`copy`),c&&(c.textContent=`Copied!`),setTimeout(()=>{c&&(c.textContent=`Copy CSS`)},1500)}),u()},0),t`
      <div id="${e}" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">
        <h1 style="${i.h1}">Color Generator Tool</h1>
        <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1.5rem;">
          Enter an anchor color to preview an accessible 12-step palette. The tool validates WCAG contrast and applies the appropriate scenario.
        </p>

        <div style="background: rgba(251, 191, 36, 0.1); border-left: 3px solid #F59E0B; padding: 0.75rem 1rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0; max-width: ${a};">
          <p style="${i.bodySm} margin: 0;">
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

        <h3 style="${i.h3}">CSS Output</h3>
        <div style="position: relative;">
          <textarea id="css-output" readonly style="width: 100%; height: 320px; padding: 1rem; border: 1px solid rgba(128,128,128,0.2); border-radius: 6px; font-family: ui-monospace, monospace; font-size: 0.8125rem; resize: vertical; background: rgba(128,128,128,0.04);"></textarea>
          <button id="copy-btn" style="position: absolute; top: 0.5rem; right: 0.5rem; padding: 0.375rem 0.75rem; border: 1px solid rgba(128,128,128,0.3); border-radius: 4px; background: rgba(255,255,255,0.9); font-size: 0.75rem; cursor: pointer;">Copy CSS</button>
        </div>
      </div>
    `}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
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
          <div style="height: 40px; background: #fbfdff; border-radius: 4px; border: 1px solid rgba(128,128,128,0.15);"></div>
          <div style="height: 40px; background: #f4faff; border-radius: 4px; border: 1px solid rgba(128,128,128,0.15);"></div>
          <div style="height: 40px; background: #e6f4fe; border-radius: 4px;"></div>
          <div style="height: 40px; background: #d5efff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #c2e5ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #acd8fc; border-radius: 4px;"></div>
          <div style="height: 40px; background: #8ec8f6; border-radius: 4px;"></div>
          <div style="height: 40px; background: #5eb1ef; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0090ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0588f0; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0d74ce; border-radius: 4px;"></div>
          <div style="height: 40px; background: #113264; border-radius: 4px;"></div>
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">Step 9 + <code>-9-on</code></td>
            <td style="padding: 0.5rem 0.75rem;">4.5:1</td>
            <td style="padding: 0.5rem 0.75rem;">AA Normal</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">Primary button text (auto-calculated)</td>
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
          <strong>Why this matters:</strong> You don't check contrast manually. The generator outputs <code>-9-on</code> and <code>-10-on</code> tokens that auto-select white (<code>#ffffff</code>) or dark (<code>#060606</code>) text based on which provides better contrast. Components reference <code>--color-text-on-emphasis</code> which aliases to the computed value.
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
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-{name}-decorative-1 … 9</td>
          </tr>
        </tbody>
      </table>

      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX};">
        See the <strong>Color Generator Tool</strong> to interactively explore how different anchor colors produce palettes under each scenario.
      </p>
    </div>
  \`
}`,...c.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
          const border = !isDark && s.step <= 2 ? ' border: 1px solid rgba(128,128,128,0.2);' : isDark && s.step <= 3 ? ' border: 1px solid rgba(255,255,255,0.15);' : '';
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
}`,...D.parameters?.docs?.source}}},O=[`Overview`,`ColorGenerator`,`ColorGeneratorTool`]}))();export{c as ColorGenerator,D as ColorGeneratorTool,s as Overview,O as __namedExportsOrder,r as default};