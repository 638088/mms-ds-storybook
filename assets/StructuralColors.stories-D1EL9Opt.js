import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{t as r}from"./mms-card.component-Ae9XIj4r.js";import{a as i,c as a,d as o,i as s,n as c,o as l,r as u,u as d}from"./doc-styles-DkvR_Qyb.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{n(),r(),a(),f={title:`Foundations/Colors/Structural Colors`},p={name:`Overview`,render:()=>t`
    <div data-theme=${u} data-mode=${l()} style=${c}>
      <h1 style="${o.h1}">Structural Colors</h1>
      <p style="${o.body} ${i.muted} max-width: ${s}; margin-bottom: ${d.content};">
        Structural colors are <strong>theme-independent</strong> — they remain consistent across all client brands. Use these for UI scaffolding, status communication, and high-contrast interactive elements.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content">
          <p style="${o.bodySm}">
            <strong>Three structural palettes:</strong> <em>Onyx</em> for high-contrast interactive elements (unbranded buttons), <em>Neutral</em> for backgrounds and text, and <em>Utility</em> for status colors (success, error, caution) and USWDS hyperlinks.
          </p>
        </div>
      </mms-card>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: ${d.content}; margin-bottom: ${d.subsection};">
        <!-- Onyx Card -->
        <div style="${i.panel}">
          <h3 style="${o.h3}">Onyx</h3>
          <p style="${o.caption} ${i.muted} margin-bottom: ${d.content};">Cool-tinted black/white scale for interactive elements. High contrast buttons without brand color.</p>
          <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1px; margin-bottom: ${d.content};">
            ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
              <div style="height: 20px; background: var(--color-onyx-${e}); border-radius: 2px;"></div>
            `)}
          </div>
          <div style="padding: var(--spacing-sm1) var(--spacing-sm2); border-radius: var(--radius-sm); background: var(--color-onyx-9); display: inline-block;">
            <span style="color: var(--color-text-on-onyx); font-weight: 600;">Button</span>
          </div>
        </div>

        <!-- Neutral Card -->
        <div style="${i.panel}">
          <h3 style="${o.h3}">Neutral</h3>
          <p style="${o.caption} ${i.muted} margin-bottom: ${d.content};">Grayscale for backgrounds, borders, dividers, and text. Non-interactive UI structure.</p>
          <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1px; margin-bottom: ${d.content};">
            ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
              <div style="height: 20px; background: var(--color-neutral-${e}); border-radius: 2px;"></div>
            `)}
          </div>
          <div style="padding: var(--spacing-sm1) var(--spacing-sm2); border-radius: var(--radius-sm); background: var(--color-neutral-2); border: var(--border-width-xs) solid var(--color-neutral-6); display: inline-block;">
            <span style="color: var(--color-neutral-12);">Card surface</span>
          </div>
        </div>

        <!-- Utility Card -->
        <div style="${i.panel}">
          <h3 style="${o.h3}">Utility</h3>
          <p style="${o.caption} ${i.muted} margin-bottom: ${d.content};">Fixed colors for status feedback and links. Success, error, caution, USWDS hyperlinks.</p>
          <div style="display: flex; gap: 6px; margin-bottom: ${d.content};">
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-success-emphasis);"></div>
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-error-emphasis);"></div>
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-caution-emphasis);"></div>
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-link);"></div>
          </div>
          <div style="padding: var(--spacing-sm1) var(--spacing-sm2); border-radius: var(--radius-sm); background: var(--color-utility-success-muted); border: var(--border-width-xs) solid var(--color-utility-success-emphasis); display: inline-block;">
            <span style="color: var(--color-utility-success-emphasis);">Success alert</span>
          </div>
        </div>
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">When to use</h2>
      <table style="${i.table}">
        <thead>
          <tr>
            <th style="${i.th}">Palette</th>
            <th style="${i.th}">Use For</th>
            <th style="${i.th}">Don't Use For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${i.td} font-weight: 600;">Onyx</td>
            <td style="${i.td} ${i.muted}">Unbranded buttons, high-contrast CTAs, default theme buttons</td>
            <td style="${i.td} ${i.muted}">Backgrounds, text (use neutral)</td>
          </tr>
          <tr>
            <td style="${i.td} font-weight: 600;">Neutral</td>
            <td style="${i.td} ${i.muted}">Page backgrounds, card surfaces, borders, dividers, body text</td>
            <td style="${i.td} ${i.muted}">Interactive element fills (use brand or onyx)</td>
          </tr>
          <tr>
            <td style="${i.td} font-weight: 600;">Utility</td>
            <td style="${i.td} ${i.muted}">Success/error/caution states, validation, notifications, hyperlinks (USWDS blue)</td>
            <td style="${i.td} ${i.muted}">General UI (use neutral or brand)</td>
          </tr>
        </tbody>
      </table>
    </div>
  `},m={1:{purpose:`Lightest surface`,hex:`#f8f9fb`},2:{purpose:`Light surface`,hex:`#f2f4f7`},3:{purpose:`Ghost element background`,hex:`#e8ebf0`},4:{purpose:`Ghost element hover`,hex:`#dde1e8`},5:{purpose:`Ghost element pressed`,hex:`#cfd5de`},6:{purpose:`Border`,hex:`#b5bdc8`},7:{purpose:`Border hover`,hex:`#7a8594`},8:{purpose:`Secondary fill`,hex:`#4d5766`},9:{purpose:`Primary fill — button background`,hex:`#1f252d`},10:{purpose:`Primary fill hover`,hex:`#161a21`},11:{purpose:`Text — high contrast`,hex:`#0f1216`},12:{purpose:`Text — maximum contrast`,hex:`#080a0c`}},h={1:{purpose:`Darkest surface`,hex:`#080a0c`},2:{purpose:`Dark surface`,hex:`#0f1216`},3:{purpose:`Ghost element background`,hex:`#161a21`},4:{purpose:`Ghost element hover`,hex:`#1f252d`},5:{purpose:`Ghost element pressed`,hex:`#2a323d`},6:{purpose:`Border`,hex:`#3d4754`},7:{purpose:`Border hover`,hex:`#55616f`},8:{purpose:`Secondary fill`,hex:`#76828f`},9:{purpose:`Primary fill — button background`,hex:`#c5cdd8`},10:{purpose:`Primary fill hover`,hex:`#d8dee6`},11:{purpose:`Text — high contrast`,hex:`#e8ecf0`},12:{purpose:`Text — maximum contrast`,hex:`#f8f9fb`}},g={name:`Onyx`,render:()=>t`
    <div data-theme=${u} data-mode=${l()} style=${c}>
      <h1 style="${o.h1}">Onyx Colors</h1>
      <p style="${o.body} ${i.muted} max-width: ${s}; margin-bottom: ${d.content};">
        The onyx palette is a cool-tinted grayscale designed for <strong>high-contrast interactive elements</strong>. Unlike neutral (which is for UI structure), onyx is for buttons and other interactive elements when no brand color is appropriate.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content">
          <p style="${o.bodySm}">
            <strong>Why onyx?</strong> The neutral palette's gray buttons can look disabled. Onyx provides a distinct, cool-tinted black that clearly reads as interactive. In dark mode, onyx inverts — buttons become light on dark backgrounds.
          </p>
        </div>
      </mms-card>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Light mode scale</h2>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: ${d.label};">
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
          <div style="height: 48px; background: var(--color-onyx-${e}); border-radius: var(--radius-sm);${e<=2?` border: var(--border-width-xs) solid var(--color-border-subtle);`:``}"></div>
        `)}
      </div>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: ${d.subsection};">
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
          <div style="text-align: center; ${o.monoSm} ${i.muted}">${e}</div>
        `)}
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Dark mode scale</h2>
      <div style="background: #0a0a0a; padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: ${d.subsection};">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: ${d.label};">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="height: 48px; background: var(--onyx-dark-${e}); border-radius: var(--radius-sm);${e>=11?` border: var(--border-width-xs) solid rgba(255,255,255,0.2);`:``}"></div>
          `)}
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="text-align: center; ${o.monoSm} color: rgba(255,255,255,0.7);">${e}</div>
          `)}
        </div>
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">On-onyx text</h2>
      <p style="${o.body} ${i.muted} max-width: ${s}; margin-bottom: ${d.content};">
        Text rendered on Step 9 solid backgrounds uses the <code style="${o.monoSm}">--color-text-on-onyx</code> token to ensure WCAG AA contrast.
      </p>
      <div style="display: flex; gap: ${d.content}; flex-wrap: wrap; margin-bottom: ${d.content};">
        <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--color-onyx-9);">
          <span style="color: var(--color-text-on-onyx); font-weight: 600;">Text on Onyx (Light Mode)</span>
        </div>
      </div>
      <div style="background: #0a0a0a; padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: ${d.subsection};">
        <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--onyx-dark-9); display: inline-block;">
          <span style="color: #0a0c0e; font-weight: 600;">Text on Onyx (Dark Mode)</span>
        </div>
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Token reference — light mode</h2>
      <table style="${i.table} margin-bottom: ${d.subsection};">
        <thead>
          <tr>
            <th style="${i.th} width: 64px;"></th>
            <th style="${i.th} width: 50px;">Step</th>
            <th style="${i.th}">Token</th>
            <th style="${i.th}">Hex</th>
            <th style="${i.th}">Purpose</th>
          </tr>
        </thead>
        <tbody>
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <tr>
              <td style="${i.td}">
                <div style="width: 48px; height: 32px; border-radius: var(--radius-sm); background: var(--color-onyx-${e});${e<=2?` border: var(--border-width-xs) solid var(--color-border-subtle);`:``}"></div>
              </td>
              <td style="${i.td} ${o.monoSm}">${e}</td>
              <td style="${i.td} ${o.monoSm}">--color-onyx-${e}</td>
              <td style="${i.td} ${o.monoSm} ${i.muted}">${m[e].hex}</td>
              <td style="${i.td} ${i.muted}">${m[e].purpose}</td>
            </tr>
          `)}
        </tbody>
      </table>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Token reference — dark mode</h2>
      <div style="background: #0a0a0a; padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: ${d.subsection};">
        <table style="width: 100%; border-collapse: collapse; ${i.tableText}">
          <thead>
            <tr style="border-bottom: var(--border-width-sm) solid rgba(255,255,255,0.15);">
              <th style="padding: ${d.label} var(--spacing-sm2); text-align: left; width: 64px;"></th>
              <th style="padding: ${d.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75); width: 50px;">Step</th>
              <th style="padding: ${d.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75);">Token</th>
              <th style="padding: ${d.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75);">Hex</th>
              <th style="padding: ${d.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75);">Purpose</th>
            </tr>
          </thead>
          <tbody>
            ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
              <tr style="border-bottom: var(--border-width-xs) solid rgba(255,255,255,0.12);">
                <td style="padding: ${d.label} var(--spacing-sm2);">
                  <div style="width: 48px; height: 32px; border-radius: var(--radius-sm); background: var(--onyx-dark-${e});${e>=11?` border: var(--border-width-xs) solid rgba(255,255,255,0.2);`:``}"></div>
                </td>
                <td style="padding: ${d.label} var(--spacing-sm2); ${o.monoSm} color: rgba(255,255,255,0.85);">${e}</td>
                <td style="padding: ${d.label} var(--spacing-sm2); ${o.monoSm} color: rgba(255,255,255,0.85);">--onyx-dark-${e}</td>
                <td style="padding: ${d.label} var(--spacing-sm2); ${o.monoSm} color: rgba(255,255,255,0.65);">${h[e].hex}</td>
                <td style="padding: ${d.label} var(--spacing-sm2); color: rgba(255,255,255,0.65);">${h[e].purpose}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Usage</h2>
      <pre style="${i.pre}">
/* Onyx button (primary variant) */
.button-onyx {
  background: var(--color-onyx-9);
  color: var(--color-text-on-onyx);
}
.button-onyx:hover {
  background: var(--color-onyx-10);
}

/* Onyx ghost button */
.button-onyx-ghost {
  background: var(--color-onyx-3);
  color: var(--color-onyx-12);
}
.button-onyx-ghost:hover {
  background: var(--color-onyx-4);
}

/* In mms-button */
&lt;mms-button color-scheme="onyx"&gt;Submit&lt;/mms-button&gt;</pre>
    </div>
  `},_={1:{purpose:`Page — body background`,hex:`#fcfcfc`},2:{purpose:`Surface — cards, sidebars, panels`,hex:`#f9f9f9`},3:{purpose:`Element — ghost button, list item default`,hex:`#f0f0f0`},4:{purpose:`Element hovered`,hex:`#e8e8e8`},5:{purpose:`Element pressed — selected item`,hex:`#e0e0e0`},6:{purpose:`Separator — dividers, card borders`,hex:`#b8b8b8`},7:{purpose:`Border — input borders, button outlines`,hex:`#878787`},8:{purpose:`Border hovered — emphasized outlines`,hex:`#737373`},9:{purpose:`Solid (anchor) — filled elements`,hex:`#606060`},10:{purpose:`Solid hovered`,hex:`#484848`},11:{purpose:`Text muted — secondary text, captions`,hex:`#303030`},12:{purpose:`Text — body, headings`,hex:`#1a1a1a`}},v={1:{purpose:`Page — body background`,hex:`#060606`},2:{purpose:`Surface — cards, sidebars, panels`,hex:`#151515`},3:{purpose:`Element — ghost button, list item default`,hex:`#191919`},4:{purpose:`Element hovered`,hex:`#1d1d1d`},5:{purpose:`Element pressed — selected item`,hex:`#262626`},6:{purpose:`Separator — dividers, card borders`,hex:`#444444`},7:{purpose:`Border — input borders, button outlines`,hex:`#636363`},8:{purpose:`Border hovered — emphasized outlines`,hex:`#7d7d7d`},9:{purpose:`Solid (anchor) — filled elements`,hex:`#979797`},10:{purpose:`Solid hovered`,hex:`#b0b0b0`},11:{purpose:`Text muted — secondary text, captions`,hex:`#cacaca`},12:{purpose:`Text — body, headings`,hex:`#e3e3e3`}},y={name:`Neutral`,render:()=>t`
    <div data-theme=${u} data-mode=${l()} style=${c}>
      <h1 style="${o.h1}">Neutral Colors</h1>
      <p style="${o.body} ${i.muted} max-width: ${s}; margin-bottom: ${d.content};">
        The neutral palette is a 12-step grayscale used for backgrounds, borders, and text throughout the UI. Unlike brand colors, neutrals are <strong>shared across all themes</strong> — they provide structural consistency regardless of client brand.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content">
          <p style="${o.bodySm}">
            <strong>Structural token:</strong> Neutral colors don't change per theme. Use them for UI structure (cards, borders, text) that should remain consistent across all brand contexts.
          </p>
        </div>
      </mms-card>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Light mode scale</h2>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: ${d.label};">
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
          <div style="height: 48px; background: var(--color-neutral-${e}); border-radius: var(--radius-sm);${e<=2?` border: var(--border-width-xs) solid var(--color-border-subtle);`:``}"></div>
        `)}
      </div>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: ${d.subsection};">
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
          <div style="text-align: center; ${o.monoSm} ${i.muted}">${e}</div>
        `)}
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Dark mode scale</h2>
      <div style="background: #0a0a0a; padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: ${d.subsection};">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: ${d.label};">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="height: 48px; background: var(--neutral-dark-${e}); border-radius: var(--radius-sm);${e>=11?` border: var(--border-width-xs) solid rgba(255,255,255,0.2);`:``}"></div>
          `)}
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="text-align: center; ${o.monoSm} color: rgba(255,255,255,0.7);">${e}</div>
          `)}
        </div>
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Token reference — light mode</h2>
      <table style="${i.table} margin-bottom: ${d.subsection};">
        <thead>
          <tr>
            <th style="${i.th} width: 64px;"></th>
            <th style="${i.th} width: 50px;">Step</th>
            <th style="${i.th}">Token</th>
            <th style="${i.th}">Hex</th>
            <th style="${i.th}">Purpose</th>
          </tr>
        </thead>
        <tbody>
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <tr>
              <td style="${i.td}">
                <div style="width: 48px; height: 32px; border-radius: var(--radius-sm); background: var(--color-neutral-${e});${e<=2?` border: var(--border-width-xs) solid var(--color-border-subtle);`:``}"></div>
              </td>
              <td style="${i.td} ${o.monoSm}">${e}</td>
              <td style="${i.td} ${o.monoSm}">--color-neutral-${e}</td>
              <td style="${i.td} ${o.monoSm} ${i.muted}">${_[e].hex}</td>
              <td style="${i.td} ${i.muted}">${_[e].purpose}</td>
            </tr>
          `)}
        </tbody>
      </table>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Token reference — dark mode</h2>
      <div style="background: #0a0a0a; padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: ${d.subsection};">
        <table style="width: 100%; border-collapse: collapse; ${i.tableText}">
          <thead>
            <tr style="border-bottom: var(--border-width-sm) solid rgba(255,255,255,0.15);">
              <th style="padding: ${d.label} var(--spacing-sm2); text-align: left; width: 64px;"></th>
              <th style="padding: ${d.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75); width: 50px;">Step</th>
              <th style="padding: ${d.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75);">Token</th>
              <th style="padding: ${d.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75);">Hex</th>
              <th style="padding: ${d.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75);">Purpose</th>
            </tr>
          </thead>
          <tbody>
            ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
              <tr style="border-bottom: var(--border-width-xs) solid rgba(255,255,255,0.12);">
                <td style="padding: ${d.label} var(--spacing-sm2);">
                  <div style="width: 48px; height: 32px; border-radius: var(--radius-sm); background: var(--neutral-dark-${e});${e>=11?` border: var(--border-width-xs) solid rgba(255,255,255,0.2);`:``}"></div>
                </td>
                <td style="padding: ${d.label} var(--spacing-sm2); ${o.monoSm} color: rgba(255,255,255,0.85);">${e}</td>
                <td style="padding: ${d.label} var(--spacing-sm2); ${o.monoSm} color: rgba(255,255,255,0.85);">--neutral-dark-${e}</td>
                <td style="padding: ${d.label} var(--spacing-sm2); ${o.monoSm} color: rgba(255,255,255,0.65);">${v[e].hex}</td>
                <td style="padding: ${d.label} var(--spacing-sm2); color: rgba(255,255,255,0.65);">${v[e].purpose}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Common usage</h2>
      <pre style="${i.pre}">
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
  `},b=[{category:`Success`,tokens:[{token:`--color-utility-success-muted`,hex:`#c6f3c6`,label:`Surface background`},{token:`--color-utility-success-emphasis`,hex:`#0e580e`,label:`Text, borders, icons`}]},{category:`Error`,tokens:[{token:`--color-utility-error-muted`,hex:`#f3ac99`,label:`Surface background`},{token:`--color-utility-error-emphasis`,hex:`#aa010e`,label:`Text, borders, icons`}]},{category:`Caution`,tokens:[{token:`--color-utility-caution-muted`,hex:`#faf3d1`,label:`Surface background`},{token:`--color-utility-caution-emphasis`,hex:`#936f38`,label:`Text, borders, icons (USWDS warning-darker)`}]},{category:`Informational`,note:`-muted/-stroke are fixed across all themes/modes, same pattern as Success/Error/Caution. -text is a mode-swapping neutral, used only by mms-inline-alert/mms-alert-banner's emphasis-on-raised-surface mechanism.`,tokens:[{token:`--color-utility-informational-muted`,hex:`#f0f0f0`,label:`Surface background (toast, status tag)`,border:!0},{token:`--color-utility-informational-stroke`,hex:`#878787`,label:`Border (toast, status tag)`},{token:`--color-utility-informational-text`,hex:`var(--color-neutral-11)`,label:`Emphasis/fill (inline alert, alert banner)`}]},{category:`On-fill & notification`,note:`Special-purpose utility tokens`,tokens:[{token:`--color-utility-on-fill`,hex:`#ffffff`,label:`White text/icons on emphasis fills`,border:!0},{token:`--color-utility-notification`,hex:`#aa010e`,label:`Badge/indicator fill`}]},{category:`Placeholder text`,note:`Form input placeholder text — NOT part of the neutral scale. Tuned for 4.5:1 contrast on all neutral surfaces including surface-sunken (#f0f0f0).`,tokens:[{token:`--color-text-placeholder (light)`,hex:`#6d6d6d`,label:`Placeholder text on light backgrounds (5.0:1 on #fcfcfc, 4.5:1 on #f0f0f0)`},{token:`--color-text-placeholder (dark)`,hex:`#8c8c8c`,label:`Placeholder text on dark backgrounds (4.5:1 on #262626)`}]},{category:`Link (light mode)`,note:`USWDS-aligned hyperlink colors for light backgrounds — structural (not brand-dependent). Meets WCAG AA contrast requirements.`,tokens:[{token:`--color-utility-link`,hex:`#005ea2`,label:`Default hyperlink text (4.54:1 on white)`},{token:`--color-utility-link-hover`,hex:`#0b4778`,label:`Hover state (8.18:1 on white)`},{token:`--color-utility-link-visited`,hex:`#54278f`,label:`Visited link (7.28:1 on white)`}]},{category:`Link (dark mode)`,note:`USWDS-aligned hyperlink colors for dark backgrounds — auto-applied via [data-mode="dark"]. Lighter variants for contrast.`,tokens:[{token:`--color-utility-link-dark`,hex:`#58b4ff`,label:`Default hyperlink text (7.5:1 on #060606)`},{token:`--color-utility-link-hover-dark`,hex:`#a9d6ff`,label:`Hover state (11.2:1 on #060606)`},{token:`--color-utility-link-visited-dark`,hex:`#c9b6e4`,label:`Visited link (8.9:1 on #060606)`}]},{category:`Focus ring`,note:`Accessibility-critical — never themed away. See Foundations > Focus Ring for full documentation.`,tokens:[{token:`--focus-ring-color`,hex:`#386CF7`,label:`Focus indicator outline color`}]}],x=(e,t=!1)=>`background: ${e}; width: 40px; height: 40px; border-radius: var(--radius-sm); flex-shrink: 0;${t?` border: var(--border-width-xs) solid var(--color-border-default);`:``}`,S=(e,n,r,a=!1)=>t`
  <tr>
    <td style="${i.td}">
      <div style="${x(n,a)}"></div>
    </td>
    <td style="${i.td} ${o.monoSm}">${e}</td>
    <td style="${i.td} ${o.monoSm} ${i.muted}">${n}</td>
    <td style="${i.td} ${i.muted}">${r}</td>
  </tr>
`,C=(e,n,r)=>t`
  <h3 style="${o.h3}">${e}</h3>
  ${r?t`<p style="${o.caption} ${i.muted} max-width: ${s}; margin-bottom: ${d.content};">${r}</p>`:``}
  <table style="${i.table}">
    <thead>
      <tr>
        <th style="${i.th} width: 56px;"></th>
        <th style="${i.th}">Token</th>
        <th style="${i.th}">Hex</th>
        <th style="${i.th}">Usage</th>
      </tr>
    </thead>
    <tbody>
      ${n.map(e=>S(e.token,e.hex,e.label,e.border??!1))}
    </tbody>
  </table>
`,w={name:`Utility`,render:()=>t`
    <div data-theme=${u} data-mode=${l()} style=${c}>
      <h1 style="${o.h1}">Utility Colors</h1>
      <p style="${o.body} ${i.muted} max-width: ${s}; margin-bottom: ${d.content};">
        Utility colors are structural tokens that remain <strong>fixed across all themes</strong>. They don't follow the 12-step brand framework — instead, they serve specific functional purposes that must remain consistent regardless of client brand.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content">
          <p style="${o.bodySm}">
            <strong>Why fixed?</strong> Status feedback (success, error, caution) and accessibility indicators (focus ring) must communicate consistently. A green success message should look like a success message on every client site. A focus ring must always be visible for keyboard users.
          </p>
        </div>
      </mms-card>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Status colors</h2>
      <p style="${o.body} ${i.muted} max-width: ${s}; margin-bottom: ${d.content};">
        Each status category provides two tiers: <strong>muted</strong> for surface backgrounds and <strong>emphasis</strong> for text, borders, and icons.
      </p>

      <div style="margin-bottom: ${d.subsection};">
        ${b.map(e=>C(e.category,e.tokens,e.note))}
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Usage example</h2>
      <pre style="${i.pre}">
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
}

/* Hyperlink — uses semantic tokens that auto-swap for dark mode */
a {
  color: var(--color-link-default);       /* #005ea2 light, #58b4ff dark */
}
a:hover {
  color: var(--color-link-hover);         /* #0b4778 light, #a9d6ff dark */
}
a:visited {
  color: var(--color-link-visited);       /* #54278f light, #c9b6e4 dark */
}

/* Informational toast/tag (fixed across themes/modes, same pattern as success/error/caution) */
.toast-info {
  background: var(--color-utility-informational-muted);
  border: 1px solid var(--color-utility-informational-stroke);
  color: var(--color-text-on-muted);
}</pre>
    </div>
  `},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Structural Colors</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Structural colors are <strong>theme-independent</strong> — they remain consistent across all client brands. Use these for UI scaffolding, status communication, and high-contrast interactive elements.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <p style="\${t.bodySm}">
            <strong>Three structural palettes:</strong> <em>Onyx</em> for high-contrast interactive elements (unbranded buttons), <em>Neutral</em> for backgrounds and text, and <em>Utility</em> for status colors (success, error, caution) and USWDS hyperlinks.
          </p>
        </div>
      </mms-card>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <!-- Onyx Card -->
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Onyx</h3>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">Cool-tinted black/white scale for interactive elements. High contrast buttons without brand color.</p>
          <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1px; margin-bottom: \${space.content};">
            \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
              <div style="height: 20px; background: var(--color-onyx-\${step}); border-radius: 2px;"></div>
            \`)}
          </div>
          <div style="padding: var(--spacing-sm1) var(--spacing-sm2); border-radius: var(--radius-sm); background: var(--color-onyx-9); display: inline-block;">
            <span style="color: var(--color-text-on-onyx); font-weight: 600;">Button</span>
          </div>
        </div>

        <!-- Neutral Card -->
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Neutral</h3>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">Grayscale for backgrounds, borders, dividers, and text. Non-interactive UI structure.</p>
          <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1px; margin-bottom: \${space.content};">
            \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
              <div style="height: 20px; background: var(--color-neutral-\${step}); border-radius: 2px;"></div>
            \`)}
          </div>
          <div style="padding: var(--spacing-sm1) var(--spacing-sm2); border-radius: var(--radius-sm); background: var(--color-neutral-2); border: var(--border-width-xs) solid var(--color-neutral-6); display: inline-block;">
            <span style="color: var(--color-neutral-12);">Card surface</span>
          </div>
        </div>

        <!-- Utility Card -->
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Utility</h3>
          <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.content};">Fixed colors for status feedback and links. Success, error, caution, USWDS hyperlinks.</p>
          <div style="display: flex; gap: 6px; margin-bottom: \${space.content};">
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-success-emphasis);"></div>
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-error-emphasis);"></div>
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-caution-emphasis);"></div>
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-link);"></div>
          </div>
          <div style="padding: var(--spacing-sm1) var(--spacing-sm2); border-radius: var(--radius-sm); background: var(--color-utility-success-muted); border: var(--border-width-xs) solid var(--color-utility-success-emphasis); display: inline-block;">
            <span style="color: var(--color-utility-success-emphasis);">Success alert</span>
          </div>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">When to use</h2>
      <table style="\${doc.table}">
        <thead>
          <tr>
            <th style="\${doc.th}">Palette</th>
            <th style="\${doc.th}">Use For</th>
            <th style="\${doc.th}">Don't Use For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td} font-weight: 600;">Onyx</td>
            <td style="\${doc.td} \${doc.muted}">Unbranded buttons, high-contrast CTAs, default theme buttons</td>
            <td style="\${doc.td} \${doc.muted}">Backgrounds, text (use neutral)</td>
          </tr>
          <tr>
            <td style="\${doc.td} font-weight: 600;">Neutral</td>
            <td style="\${doc.td} \${doc.muted}">Page backgrounds, card surfaces, borders, dividers, body text</td>
            <td style="\${doc.td} \${doc.muted}">Interactive element fills (use brand or onyx)</td>
          </tr>
          <tr>
            <td style="\${doc.td} font-weight: 600;">Utility</td>
            <td style="\${doc.td} \${doc.muted}">Success/error/caution states, validation, notifications, hyperlinks (USWDS blue)</td>
            <td style="\${doc.td} \${doc.muted}">General UI (use neutral or brand)</td>
          </tr>
        </tbody>
      </table>
    </div>
  \`
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Onyx',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Onyx Colors</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The onyx palette is a cool-tinted grayscale designed for <strong>high-contrast interactive elements</strong>. Unlike neutral (which is for UI structure), onyx is for buttons and other interactive elements when no brand color is appropriate.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <p style="\${t.bodySm}">
            <strong>Why onyx?</strong> The neutral palette's gray buttons can look disabled. Onyx provides a distinct, cool-tinted black that clearly reads as interactive. In dark mode, onyx inverts — buttons become light on dark backgrounds.
          </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Light mode scale</h2>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: \${space.label};">
        \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
          <div style="height: 48px; background: var(--color-onyx-\${step}); border-radius: var(--radius-sm);\${step <= 2 ? ' border: var(--border-width-xs) solid var(--color-border-subtle);' : ''}"></div>
        \`)}
      </div>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: \${space.subsection};">
        \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
          <div style="text-align: center; \${t.monoSm} \${doc.muted}">\${step}</div>
        \`)}
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Dark mode scale</h2>
      <div style="background: #0a0a0a; padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: \${space.subsection};">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: \${space.label};">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="height: 48px; background: var(--onyx-dark-\${step}); border-radius: var(--radius-sm);\${step >= 11 ? ' border: var(--border-width-xs) solid rgba(255,255,255,0.2);' : ''}"></div>
          \`)}
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="text-align: center; \${t.monoSm} color: rgba(255,255,255,0.7);">\${step}</div>
          \`)}
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">On-onyx text</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Text rendered on Step 9 solid backgrounds uses the <code style="\${t.monoSm}">--color-text-on-onyx</code> token to ensure WCAG AA contrast.
      </p>
      <div style="display: flex; gap: \${space.content}; flex-wrap: wrap; margin-bottom: \${space.content};">
        <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--color-onyx-9);">
          <span style="color: var(--color-text-on-onyx); font-weight: 600;">Text on Onyx (Light Mode)</span>
        </div>
      </div>
      <div style="background: #0a0a0a; padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: \${space.subsection};">
        <div style="padding: var(--spacing-md1) var(--spacing-lg1); border-radius: var(--radius-md); background: var(--onyx-dark-9); display: inline-block;">
          <span style="color: #0a0c0e; font-weight: 600;">Text on Onyx (Dark Mode)</span>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Token reference — light mode</h2>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th} width: 64px;"></th>
            <th style="\${doc.th} width: 50px;">Step</th>
            <th style="\${doc.th}">Token</th>
            <th style="\${doc.th}">Hex</th>
            <th style="\${doc.th}">Purpose</th>
          </tr>
        </thead>
        <tbody>
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <tr>
              <td style="\${doc.td}">
                <div style="width: 48px; height: 32px; border-radius: var(--radius-sm); background: var(--color-onyx-\${step});\${step <= 2 ? ' border: var(--border-width-xs) solid var(--color-border-subtle);' : ''}"></div>
              </td>
              <td style="\${doc.td} \${t.monoSm}">\${step}</td>
              <td style="\${doc.td} \${t.monoSm}">--color-onyx-\${step}</td>
              <td style="\${doc.td} \${t.monoSm} \${doc.muted}">\${onyxLightSteps[step].hex}</td>
              <td style="\${doc.td} \${doc.muted}">\${onyxLightSteps[step].purpose}</td>
            </tr>
          \`)}
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Token reference — dark mode</h2>
      <div style="background: #0a0a0a; padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: \${space.subsection};">
        <table style="width: 100%; border-collapse: collapse; \${doc.tableText}">
          <thead>
            <tr style="border-bottom: var(--border-width-sm) solid rgba(255,255,255,0.15);">
              <th style="padding: \${space.label} var(--spacing-sm2); text-align: left; width: 64px;"></th>
              <th style="padding: \${space.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75); width: 50px;">Step</th>
              <th style="padding: \${space.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75);">Token</th>
              <th style="padding: \${space.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75);">Hex</th>
              <th style="padding: \${space.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75);">Purpose</th>
            </tr>
          </thead>
          <tbody>
            \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
              <tr style="border-bottom: var(--border-width-xs) solid rgba(255,255,255,0.12);">
                <td style="padding: \${space.label} var(--spacing-sm2);">
                  <div style="width: 48px; height: 32px; border-radius: var(--radius-sm); background: var(--onyx-dark-\${step});\${step >= 11 ? ' border: var(--border-width-xs) solid rgba(255,255,255,0.2);' : ''}"></div>
                </td>
                <td style="padding: \${space.label} var(--spacing-sm2); \${t.monoSm} color: rgba(255,255,255,0.85);">\${step}</td>
                <td style="padding: \${space.label} var(--spacing-sm2); \${t.monoSm} color: rgba(255,255,255,0.85);">--onyx-dark-\${step}</td>
                <td style="padding: \${space.label} var(--spacing-sm2); \${t.monoSm} color: rgba(255,255,255,0.65);">\${onyxDarkSteps[step].hex}</td>
                <td style="padding: \${space.label} var(--spacing-sm2); color: rgba(255,255,255,0.65);">\${onyxDarkSteps[step].purpose}</td>
              </tr>
            \`)}
          </tbody>
        </table>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Usage</h2>
      <pre style="\${doc.pre}">
/* Onyx button (primary variant) */
.button-onyx {
  background: var(--color-onyx-9);
  color: var(--color-text-on-onyx);
}
.button-onyx:hover {
  background: var(--color-onyx-10);
}

/* Onyx ghost button */
.button-onyx-ghost {
  background: var(--color-onyx-3);
  color: var(--color-onyx-12);
}
.button-onyx-ghost:hover {
  background: var(--color-onyx-4);
}

/* In mms-button */
&lt;mms-button color-scheme="onyx"&gt;Submit&lt;/mms-button&gt;</pre>
    </div>
  \`
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Neutral',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Neutral Colors</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The neutral palette is a 12-step grayscale used for backgrounds, borders, and text throughout the UI. Unlike brand colors, neutrals are <strong>shared across all themes</strong> — they provide structural consistency regardless of client brand.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <p style="\${t.bodySm}">
            <strong>Structural token:</strong> Neutral colors don't change per theme. Use them for UI structure (cards, borders, text) that should remain consistent across all brand contexts.
          </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Light mode scale</h2>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: \${space.label};">
        \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
          <div style="height: 48px; background: var(--color-neutral-\${step}); border-radius: var(--radius-sm);\${step <= 2 ? ' border: var(--border-width-xs) solid var(--color-border-subtle);' : ''}"></div>
        \`)}
      </div>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: \${space.subsection};">
        \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
          <div style="text-align: center; \${t.monoSm} \${doc.muted}">\${step}</div>
        \`)}
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Dark mode scale</h2>
      <div style="background: #0a0a0a; padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: \${space.subsection};">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: \${space.label};">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="height: 48px; background: var(--neutral-dark-\${step}); border-radius: var(--radius-sm);\${step >= 11 ? ' border: var(--border-width-xs) solid rgba(255,255,255,0.2);' : ''}"></div>
          \`)}
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="text-align: center; \${t.monoSm} color: rgba(255,255,255,0.7);">\${step}</div>
          \`)}
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Token reference — light mode</h2>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th} width: 64px;"></th>
            <th style="\${doc.th} width: 50px;">Step</th>
            <th style="\${doc.th}">Token</th>
            <th style="\${doc.th}">Hex</th>
            <th style="\${doc.th}">Purpose</th>
          </tr>
        </thead>
        <tbody>
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <tr>
              <td style="\${doc.td}">
                <div style="width: 48px; height: 32px; border-radius: var(--radius-sm); background: var(--color-neutral-\${step});\${step <= 2 ? ' border: var(--border-width-xs) solid var(--color-border-subtle);' : ''}"></div>
              </td>
              <td style="\${doc.td} \${t.monoSm}">\${step}</td>
              <td style="\${doc.td} \${t.monoSm}">--color-neutral-\${step}</td>
              <td style="\${doc.td} \${t.monoSm} \${doc.muted}">\${neutralSteps[step].hex}</td>
              <td style="\${doc.td} \${doc.muted}">\${neutralSteps[step].purpose}</td>
            </tr>
          \`)}
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Token reference — dark mode</h2>
      <div style="background: #0a0a0a; padding: var(--spacing-md1); border-radius: var(--radius-md); margin-bottom: \${space.subsection};">
        <table style="width: 100%; border-collapse: collapse; \${doc.tableText}">
          <thead>
            <tr style="border-bottom: var(--border-width-sm) solid rgba(255,255,255,0.15);">
              <th style="padding: \${space.label} var(--spacing-sm2); text-align: left; width: 64px;"></th>
              <th style="padding: \${space.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75); width: 50px;">Step</th>
              <th style="padding: \${space.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75);">Token</th>
              <th style="padding: \${space.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75);">Hex</th>
              <th style="padding: \${space.label} var(--spacing-sm2); text-align: left; color: rgba(255,255,255,0.75);">Purpose</th>
            </tr>
          </thead>
          <tbody>
            \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
              <tr style="border-bottom: var(--border-width-xs) solid rgba(255,255,255,0.12);">
                <td style="padding: \${space.label} var(--spacing-sm2);">
                  <div style="width: 48px; height: 32px; border-radius: var(--radius-sm); background: var(--neutral-dark-\${step});\${step >= 11 ? ' border: var(--border-width-xs) solid rgba(255,255,255,0.2);' : ''}"></div>
                </td>
                <td style="padding: \${space.label} var(--spacing-sm2); \${t.monoSm} color: rgba(255,255,255,0.85);">\${step}</td>
                <td style="padding: \${space.label} var(--spacing-sm2); \${t.monoSm} color: rgba(255,255,255,0.85);">--neutral-dark-\${step}</td>
                <td style="padding: \${space.label} var(--spacing-sm2); \${t.monoSm} color: rgba(255,255,255,0.65);">\${neutralDarkSteps[step].hex}</td>
                <td style="padding: \${space.label} var(--spacing-sm2); color: rgba(255,255,255,0.65);">\${neutralDarkSteps[step].purpose}</td>
              </tr>
            \`)}
          </tbody>
        </table>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Common usage</h2>
      <pre style="\${doc.pre}">
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
}`,...y.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Utility',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Utility Colors</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Utility colors are structural tokens that remain <strong>fixed across all themes</strong>. They don't follow the 12-step brand framework — instead, they serve specific functional purposes that must remain consistent regardless of client brand.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <p style="\${t.bodySm}">
            <strong>Why fixed?</strong> Status feedback (success, error, caution) and accessibility indicators (focus ring) must communicate consistently. A green success message should look like a success message on every client site. A focus ring must always be visible for keyboard users.
          </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Status colors</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Each status category provides two tiers: <strong>muted</strong> for surface backgrounds and <strong>emphasis</strong> for text, borders, and icons.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        \${utilityTokens.map(g => utilitySection(g.category, g.tokens, g.note))}
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Usage example</h2>
      <pre style="\${doc.pre}">
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
}

/* Hyperlink — uses semantic tokens that auto-swap for dark mode */
a {
  color: var(--color-link-default);       /* #005ea2 light, #58b4ff dark */
}
a:hover {
  color: var(--color-link-hover);         /* #0b4778 light, #a9d6ff dark */
}
a:visited {
  color: var(--color-link-visited);       /* #54278f light, #c9b6e4 dark */
}

/* Informational toast/tag (fixed across themes/modes, same pattern as success/error/caution) */
.toast-info {
  background: var(--color-utility-informational-muted);
  border: 1px solid var(--color-utility-informational-stroke);
  color: var(--color-text-on-muted);
}</pre>
    </div>
  \`
}`,...w.parameters?.docs?.source}}},T=[`Overview`,`Onyx`,`Neutral`,`Utility`]}))();export{y as Neutral,g as Onyx,p as Overview,w as Utility,T as __namedExportsOrder,f as default};