import{i as e}from"./preload-helper-BdFrVu1K.js";import{o as t,t as n}from"./iframe-CQ36wFM3.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),r={title:`Foundations/Colors/Structural Colors`},i={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 2rem 0 0.75rem;`,h3:`font-size: 1.125rem; line-height: 1.35; font-weight: 600; margin: 1.5rem 0 0.5rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.8125rem;`},a=`680px`,o=`960px`,s={name:`Overview`,render:()=>t`
    <div data-theme="maximus" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${i.h1}">Structural Colors</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1.5rem;">
        Structural colors are <strong>theme-independent</strong> — they remain consistent across all client brands. Use these for UI scaffolding, status communication, and high-contrast interactive elements.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${i.bodySm} margin: 0;">
          <strong>Three structural palettes:</strong> <em>Onyx</em> for high-contrast interactive elements (unbranded buttons), <em>Neutral</em> for backgrounds and text, and <em>Utility</em> for status colors (success, error, caution).
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <!-- Onyx Card -->
        <div style="background: rgba(128,128,128,0.04); border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; padding: 1.25rem;">
          <h3 style="${i.h3} margin-top: 0;">Onyx</h3>
          <p style="${i.caption} opacity: 0.75; margin-bottom: 1rem;">Cool-tinted black/white scale for interactive elements. High contrast buttons without brand color.</p>
          <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1px; margin-bottom: 0.75rem;">
            ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
              <div style="height: 20px; background: var(--color-onyx-${e}); border-radius: 2px;"></div>
            `)}
          </div>
          <div style="padding: 0.5rem 0.75rem; border-radius: 4px; background: var(--color-onyx-9); display: inline-block;">
            <span style="color: var(--color-text-on-onyx); font-size: 0.75rem; font-weight: 600;">Button</span>
          </div>
        </div>

        <!-- Neutral Card -->
        <div style="background: rgba(128,128,128,0.04); border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; padding: 1.25rem;">
          <h3 style="${i.h3} margin-top: 0;">Neutral</h3>
          <p style="${i.caption} opacity: 0.75; margin-bottom: 1rem;">Grayscale for backgrounds, borders, dividers, and text. Non-interactive UI structure.</p>
          <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1px; margin-bottom: 0.75rem;">
            ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
              <div style="height: 20px; background: var(--color-neutral-${e}); border-radius: 2px;"></div>
            `)}
          </div>
          <div style="padding: 0.5rem 0.75rem; border-radius: 4px; background: var(--color-neutral-2); border: 1px solid var(--color-neutral-6); display: inline-block;">
            <span style="color: var(--color-neutral-12); font-size: 0.75rem;">Card surface</span>
          </div>
        </div>

        <!-- Utility Card -->
        <div style="background: rgba(128,128,128,0.04); border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; padding: 1.25rem;">
          <h3 style="${i.h3} margin-top: 0;">Utility</h3>
          <p style="${i.caption} opacity: 0.75; margin-bottom: 1rem;">Fixed status colors for feedback. Success, error, caution, notification.</p>
          <div style="display: flex; gap: 6px; margin-bottom: 0.75rem;">
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-success-emphasis);"></div>
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-error-emphasis);"></div>
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-caution-emphasis);"></div>
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-notification);"></div>
          </div>
          <div style="padding: 0.5rem 0.75rem; border-radius: 4px; background: var(--color-utility-success-muted); border: 1px solid var(--color-utility-success-emphasis); display: inline-block;">
            <span style="color: var(--color-utility-success-emphasis); font-size: 0.75rem;">Success alert</span>
          </div>
        </div>
      </div>

      <h2 style="${i.h2}">When to Use</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Palette</th>
            <th style="padding: 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Use For</th>
            <th style="padding: 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Don't Use For</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.75rem; ${i.bodySm} font-weight: 600;">Onyx</td>
            <td style="padding: 0.75rem; ${i.caption} opacity: 0.75;">Unbranded buttons, high-contrast CTAs, default theme buttons</td>
            <td style="padding: 0.75rem; ${i.caption} opacity: 0.75;">Backgrounds, text (use neutral)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.75rem; ${i.bodySm} font-weight: 600;">Neutral</td>
            <td style="padding: 0.75rem; ${i.caption} opacity: 0.75;">Page backgrounds, card surfaces, borders, dividers, body text</td>
            <td style="padding: 0.75rem; ${i.caption} opacity: 0.75;">Interactive element fills (use brand or onyx)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.75rem; ${i.bodySm} font-weight: 600;">Utility</td>
            <td style="padding: 0.75rem; ${i.caption} opacity: 0.75;">Success/error/caution states, validation, notifications</td>
            <td style="padding: 0.75rem; ${i.caption} opacity: 0.75;">General UI (use neutral or brand)</td>
          </tr>
        </tbody>
      </table>
    </div>
  `},c={1:{purpose:`Lightest surface`,hex:`#f8f9fb`},2:{purpose:`Light surface`,hex:`#f2f4f7`},3:{purpose:`Ghost element background`,hex:`#e8ebf0`},4:{purpose:`Ghost element hover`,hex:`#dde1e8`},5:{purpose:`Ghost element pressed`,hex:`#cfd5de`},6:{purpose:`Border`,hex:`#b5bdc8`},7:{purpose:`Border hover`,hex:`#919ba8`},8:{purpose:`Secondary fill`,hex:`#6b7685`},9:{purpose:`Primary fill — button background`,hex:`#1f252d`},10:{purpose:`Primary fill hover`,hex:`#161a21`},11:{purpose:`Text — high contrast`,hex:`#0f1216`},12:{purpose:`Text — maximum contrast`,hex:`#080a0c`}},l={1:{purpose:`Darkest surface`,hex:`#080a0c`},2:{purpose:`Dark surface`,hex:`#0f1216`},3:{purpose:`Ghost element background`,hex:`#161a21`},4:{purpose:`Ghost element hover`,hex:`#1f252d`},5:{purpose:`Ghost element pressed`,hex:`#2a323d`},6:{purpose:`Border`,hex:`#3d4754`},7:{purpose:`Border hover`,hex:`#55616f`},8:{purpose:`Secondary fill`,hex:`#76828f`},9:{purpose:`Primary fill — button background`,hex:`#c5cdd8`},10:{purpose:`Primary fill hover`,hex:`#d8dee6`},11:{purpose:`Text — high contrast`,hex:`#e8ecf0`},12:{purpose:`Text — maximum contrast`,hex:`#f8f9fb`}},u={name:`Onyx`,render:()=>t`
    <div data-theme="maximus" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${i.h1}">Onyx Colors</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1.5rem;">
        The onyx palette is a cool-tinted grayscale designed for <strong>high-contrast interactive elements</strong>. Unlike neutral (which is for UI structure), onyx is for buttons and other interactive elements when no brand color is appropriate.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${i.bodySm} margin: 0;">
          <strong>Why onyx?</strong> The neutral palette's gray buttons can look disabled. Onyx provides a distinct, cool-tinted black that clearly reads as interactive. In dark mode, onyx inverts — buttons become light on dark backgrounds.
        </p>
      </div>

      <h2 style="${i.h2}">Light Mode Scale</h2>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
          <div style="height: 48px; background: var(--color-onyx-${e}); border-radius: 4px;${e<=2?` border: 1px solid rgba(128,128,128,0.2);`:``}"></div>
        `)}
      </div>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 2rem;">
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
          <div style="text-align: center; ${i.monoSm} opacity: 0.7;">${e}</div>
        `)}
      </div>

      <h2 style="${i.h2}">Dark Mode Scale</h2>
      <div style="background: #0a0a0a; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="height: 48px; background: var(--onyx-dark-${e}); border-radius: 4px;${e>=11?` border: 1px solid rgba(255,255,255,0.2);`:``}"></div>
          `)}
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="text-align: center; ${i.monoSm} color: rgba(255,255,255,0.7);">${e}</div>
          `)}
        </div>
      </div>

      <h2 style="${i.h2}">On-Onyx Text</h2>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1rem;">
        Text rendered on Step 9 solid backgrounds uses the <code style="${i.monoSm}">--color-text-on-onyx</code> token to ensure WCAG AA contrast.
      </p>
      <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 2rem;">
        <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--color-onyx-9);">
          <span style="color: var(--color-text-on-onyx); font-weight: 600;">Text on Onyx (Light Mode)</span>
        </div>
      </div>
      <div style="background: #0a0a0a; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--onyx-dark-9); display: inline-block;">
          <span style="color: #0a0c0e; font-weight: 600;">Text on Onyx (Dark Mode)</span>
        </div>
      </div>

      <h2 style="${i.h2}">Token Reference — Light Mode</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; width: 64px;"></th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600; width: 50px;">Step</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Hex</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
          </tr>
        </thead>
        <tbody>
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">
                <div style="width: 48px; height: 32px; border-radius: 4px; background: var(--color-onyx-${e});${e<=2?` border: 1px solid rgba(128,128,128,0.2);`:``}"></div>
              </td>
              <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">${e}</td>
              <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">--color-onyx-${e}</td>
              <td style="padding: 0.5rem 0.75rem; ${i.monoSm} opacity: 0.65;">${c[e].hex}</td>
              <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">${c[e].purpose}</td>
            </tr>
          `)}
        </tbody>
      </table>

      <h2 style="${i.h2}">Token Reference — Dark Mode</h2>
      <div style="background: #0a0a0a; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.15);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; width: 64px;"></th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} color: rgba(255,255,255,0.75); font-weight: 600; width: 50px;">Step</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Hex</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Purpose</th>
            </tr>
          </thead>
          <tbody>
            ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.12);">
                <td style="padding: 0.5rem 0.75rem;">
                  <div style="width: 48px; height: 32px; border-radius: 4px; background: var(--onyx-dark-${e});${e>=11?` border: 1px solid rgba(255,255,255,0.2);`:``}"></div>
                </td>
                <td style="padding: 0.5rem 0.75rem; ${i.monoSm} color: rgba(255,255,255,0.85);">${e}</td>
                <td style="padding: 0.5rem 0.75rem; ${i.monoSm} color: rgba(255,255,255,0.85);">--onyx-dark-${e}</td>
                <td style="padding: 0.5rem 0.75rem; ${i.monoSm} color: rgba(255,255,255,0.65);">${l[e].hex}</td>
                <td style="padding: 0.5rem 0.75rem; ${i.caption} color: rgba(255,255,255,0.65);">${l[e].purpose}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>

      <h2 style="${i.h2}">Usage</h2>
      <pre style="${i.monoSm} background: rgba(128,128,128,0.08); padding: 1rem 1.25rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
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
  `},d={1:{purpose:`Page — body background`,hex:`#fcfcfc`},2:{purpose:`Surface — cards, sidebars, panels`,hex:`#f9f9f9`},3:{purpose:`Element — ghost button, list item default`,hex:`#f0f0f0`},4:{purpose:`Element hovered`,hex:`#e8e8e8`},5:{purpose:`Element pressed — selected item`,hex:`#e0e0e0`},6:{purpose:`Separator — dividers, card borders`,hex:`#d0d0d0`},7:{purpose:`Border — input borders, button outlines`,hex:`#b4b4b4`},8:{purpose:`Border hovered — emphasized outlines`,hex:`#8d8d8d`},9:{purpose:`Solid (anchor) — filled elements`,hex:`#6f6f6f`},10:{purpose:`Solid hovered`,hex:`#5c5c5c`},11:{purpose:`Text muted — placeholder, captions`,hex:`#484848`},12:{purpose:`Text — body, headings`,hex:`#1a1a1a`}},f={1:{purpose:`Page — body background`,hex:`#060606`},2:{purpose:`Surface — cards, sidebars, panels`,hex:`#151515`},3:{purpose:`Element — ghost button, list item default`,hex:`#191919`},4:{purpose:`Element hovered`,hex:`#1d1d1d`},5:{purpose:`Element pressed — selected item`,hex:`#262626`},6:{purpose:`Separator — dividers, card borders`,hex:`#303030`},7:{purpose:`Border — input borders, button outlines`,hex:`#424242`},8:{purpose:`Border hovered — emphasized outlines`,hex:`#525252`},9:{purpose:`Solid (anchor) — filled elements`,hex:`#7c7c7c`},10:{purpose:`Solid hovered`,hex:`#949494`},11:{purpose:`Text muted — placeholder, captions`,hex:`#c2c2c2`},12:{purpose:`Text — body, headings`,hex:`#e3e3e3`}},p={name:`Neutral`,render:()=>t`
    <div data-theme="default" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${i.h1}">Neutral Colors</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1.5rem;">
        The neutral palette is a 12-step grayscale used for backgrounds, borders, and text throughout the UI. Unlike brand colors, neutrals are <strong>shared across all themes</strong> — they provide structural consistency regardless of client brand.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${i.bodySm} margin: 0;">
          <strong>Structural token:</strong> Neutral colors don't change per theme. Use them for UI structure (cards, borders, text) that should remain consistent across all brand contexts.
        </p>
      </div>

      <h2 style="${i.h2}">Light Mode Scale</h2>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
          <div style="height: 48px; background: var(--color-neutral-${e}); border-radius: 4px;${e<=2?` border: 1px solid rgba(128,128,128,0.2);`:``}"></div>
        `)}
      </div>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 2rem;">
        ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
          <div style="text-align: center; ${i.monoSm} opacity: 0.7;">${e}</div>
        `)}
      </div>

      <h2 style="${i.h2}">Dark Mode Scale</h2>
      <div style="background: #0a0a0a; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="height: 48px; background: var(--neutral-dark-${e}); border-radius: 4px;${e>=11?` border: 1px solid rgba(255,255,255,0.2);`:``}"></div>
          `)}
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="text-align: center; ${i.monoSm} color: rgba(255,255,255,0.7);">${e}</div>
          `)}
        </div>
      </div>

      <h2 style="${i.h2}">Token Reference — Light Mode</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; width: 64px;"></th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600; width: 50px;">Step</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Hex</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Purpose</th>
          </tr>
        </thead>
        <tbody>
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem;">
                <div style="width: 48px; height: 32px; border-radius: 4px; background: var(--color-neutral-${e});${e<=2?` border: 1px solid rgba(128,128,128,0.2);`:``}"></div>
              </td>
              <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">${e}</td>
              <td style="padding: 0.5rem 0.75rem; ${i.monoSm}">--color-neutral-${e}</td>
              <td style="padding: 0.5rem 0.75rem; ${i.monoSm} opacity: 0.65;">${d[e].hex}</td>
              <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">${d[e].purpose}</td>
            </tr>
          `)}
        </tbody>
      </table>

      <h2 style="${i.h2}">Token Reference — Dark Mode</h2>
      <div style="background: #0a0a0a; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.15);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; width: 64px;"></th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} color: rgba(255,255,255,0.75); font-weight: 600; width: 50px;">Step</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Hex</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Purpose</th>
            </tr>
          </thead>
          <tbody>
            ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.12);">
                <td style="padding: 0.5rem 0.75rem;">
                  <div style="width: 48px; height: 32px; border-radius: 4px; background: var(--neutral-dark-${e});${e>=11?` border: 1px solid rgba(255,255,255,0.2);`:``}"></div>
                </td>
                <td style="padding: 0.5rem 0.75rem; ${i.monoSm} color: rgba(255,255,255,0.85);">${e}</td>
                <td style="padding: 0.5rem 0.75rem; ${i.monoSm} color: rgba(255,255,255,0.85);">--neutral-dark-${e}</td>
                <td style="padding: 0.5rem 0.75rem; ${i.monoSm} color: rgba(255,255,255,0.65);">${f[e].hex}</td>
                <td style="padding: 0.5rem 0.75rem; ${i.caption} color: rgba(255,255,255,0.65);">${f[e].purpose}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>

      <h2 style="${i.h2}">Common Usage</h2>
      <pre style="${i.monoSm} background: rgba(128,128,128,0.08); padding: 1rem 1.25rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
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
  `},m=[{category:`Success`,tokens:[{token:`--color-utility-success-muted`,hex:`#c6f3c6`,label:`Surface background`},{token:`--color-utility-success-emphasis`,hex:`#0e580e`,label:`Text, borders, icons`}]},{category:`Error`,tokens:[{token:`--color-utility-error-muted`,hex:`#f3ac99`,label:`Surface background`},{token:`--color-utility-error-emphasis`,hex:`#aa010e`,label:`Text, borders, icons`}]},{category:`Caution`,tokens:[{token:`--color-utility-caution-muted`,hex:`#faf3d1`,label:`Surface background`},{token:`--color-utility-caution-emphasis`,hex:`#936f38`,label:`Text, borders, icons (USWDS warning-darker)`}]},{category:`Informational`,note:`Semantic layer — references neutral palette (auto-swaps in dark mode)`,tokens:[{token:`--color-utility-informational-surface`,hex:`var(--color-neutral-3)`,label:`Surface background`,border:!0},{token:`--color-utility-informational-stroke`,hex:`var(--color-neutral-6)`,label:`Border`},{token:`--color-utility-informational-text`,hex:`var(--color-neutral-11)`,label:`Text, icons`}]},{category:`On-Fill & Notification`,note:`Special-purpose utility tokens`,tokens:[{token:`--color-utility-on-fill`,hex:`#ffffff`,label:`White text/icons on emphasis fills`,border:!0},{token:`--color-utility-notification`,hex:`#aa010e`,label:`Badge/indicator fill`}]},{category:`Focus Ring`,note:`Accessibility-critical — never themed away. See Foundations > Focus Ring for full documentation.`,tokens:[{token:`--focus-ring-color`,hex:`#386CF7`,label:`Focus indicator outline color`}]}],h=(e,t=!1)=>`background: ${e}; width: 40px; height: 40px; border-radius: 6px; flex-shrink: 0;${t?` border: 1px solid rgba(128,128,128,0.3);`:``}`,g=(e,n,r,a=!1)=>t`
  <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
    <td style="padding: 0.5rem 0.75rem;">
      <div style="${h(n,a)}"></div>
    </td>
    <td style="padding: 0.5rem 0.75rem; ${i.monoSm} color: inherit;">${e}</td>
    <td style="padding: 0.5rem 0.75rem; ${i.monoSm} opacity: 0.65;">${n}</td>
    <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">${r}</td>
  </tr>
`,_=(e,n,r)=>t`
  <h3 style="margin: 2rem 0 0.5rem; ${i.h2}">${e}</h3>
  ${r?t`<p style="${i.caption} opacity: 0.65; margin: 0 0 0.5rem;">${r}</p>`:``}
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 0.5rem;">
    <thead>
      <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
        <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600; width: 56px;"></th>
        <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Token</th>
        <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Hex</th>
        <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Usage</th>
      </tr>
    </thead>
    <tbody>
      ${n.map(e=>g(e.token,e.hex,e.label,e.border??!1))}
    </tbody>
  </table>
`,v={name:`Utility`,render:()=>t`
    <div data-theme="default" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${i.h1}">Utility Colors</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1.5rem;">
        Utility colors are structural tokens that remain <strong>fixed across all themes</strong>. They don't follow the 12-step brand framework — instead, they serve specific functional purposes that must remain consistent regardless of client brand.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="${i.bodySm} margin: 0;">
          <strong>Why fixed?</strong> Status feedback (success, error, caution) and accessibility indicators (focus ring) must communicate consistently. A green success message should look like a success message on every client site. A focus ring must always be visible for keyboard users.
        </p>
      </div>

      <h2 style="${i.h2}">Status Colors</h2>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1.5rem;">
        Each status category provides two tiers: <strong>muted</strong> for surface backgrounds and <strong>emphasis</strong> for text, borders, and icons.
      </p>

      ${m.map(e=>_(e.category,e.tokens,e.note))}

      <h2 style="${i.h2}">Usage Example</h2>
      <pre style="${i.monoSm} background: rgba(128,128,128,0.08); padding: 1rem 1.25rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
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

/* Informational tooltip (references neutral palette — auto-swaps in dark mode) */
.tooltip-info {
  background: var(--color-utility-informational-surface);
  border: 1px solid var(--color-utility-informational-stroke);
  color: var(--color-utility-informational-text);
}</pre>
    </div>
  `},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme="maximus" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Structural Colors</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Structural colors are <strong>theme-independent</strong> — they remain consistent across all client brands. Use these for UI scaffolding, status communication, and high-contrast interactive elements.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Three structural palettes:</strong> <em>Onyx</em> for high-contrast interactive elements (unbranded buttons), <em>Neutral</em> for backgrounds and text, and <em>Utility</em> for status colors (success, error, caution).
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <!-- Onyx Card -->
        <div style="background: rgba(128,128,128,0.04); border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; padding: 1.25rem;">
          <h3 style="\${t.h3} margin-top: 0;">Onyx</h3>
          <p style="\${t.caption} opacity: 0.75; margin-bottom: 1rem;">Cool-tinted black/white scale for interactive elements. High contrast buttons without brand color.</p>
          <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1px; margin-bottom: 0.75rem;">
            \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
              <div style="height: 20px; background: var(--color-onyx-\${step}); border-radius: 2px;"></div>
            \`)}
          </div>
          <div style="padding: 0.5rem 0.75rem; border-radius: 4px; background: var(--color-onyx-9); display: inline-block;">
            <span style="color: var(--color-text-on-onyx); font-size: 0.75rem; font-weight: 600;">Button</span>
          </div>
        </div>

        <!-- Neutral Card -->
        <div style="background: rgba(128,128,128,0.04); border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; padding: 1.25rem;">
          <h3 style="\${t.h3} margin-top: 0;">Neutral</h3>
          <p style="\${t.caption} opacity: 0.75; margin-bottom: 1rem;">Grayscale for backgrounds, borders, dividers, and text. Non-interactive UI structure.</p>
          <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1px; margin-bottom: 0.75rem;">
            \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
              <div style="height: 20px; background: var(--color-neutral-\${step}); border-radius: 2px;"></div>
            \`)}
          </div>
          <div style="padding: 0.5rem 0.75rem; border-radius: 4px; background: var(--color-neutral-2); border: 1px solid var(--color-neutral-6); display: inline-block;">
            <span style="color: var(--color-neutral-12); font-size: 0.75rem;">Card surface</span>
          </div>
        </div>

        <!-- Utility Card -->
        <div style="background: rgba(128,128,128,0.04); border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; padding: 1.25rem;">
          <h3 style="\${t.h3} margin-top: 0;">Utility</h3>
          <p style="\${t.caption} opacity: 0.75; margin-bottom: 1rem;">Fixed status colors for feedback. Success, error, caution, notification.</p>
          <div style="display: flex; gap: 6px; margin-bottom: 0.75rem;">
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-success-emphasis);"></div>
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-error-emphasis);"></div>
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-caution-emphasis);"></div>
            <div style="width: 24px; height: 20px; border-radius: 2px; background: var(--color-utility-notification);"></div>
          </div>
          <div style="padding: 0.5rem 0.75rem; border-radius: 4px; background: var(--color-utility-success-muted); border: 1px solid var(--color-utility-success-emphasis); display: inline-block;">
            <span style="color: var(--color-utility-success-emphasis); font-size: 0.75rem;">Success alert</span>
          </div>
        </div>
      </div>

      <h2 style="\${t.h2}">When to Use</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Palette</th>
            <th style="padding: 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Use For</th>
            <th style="padding: 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Don't Use For</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.75rem; \${t.bodySm} font-weight: 600;">Onyx</td>
            <td style="padding: 0.75rem; \${t.caption} opacity: 0.75;">Unbranded buttons, high-contrast CTAs, default theme buttons</td>
            <td style="padding: 0.75rem; \${t.caption} opacity: 0.75;">Backgrounds, text (use neutral)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.75rem; \${t.bodySm} font-weight: 600;">Neutral</td>
            <td style="padding: 0.75rem; \${t.caption} opacity: 0.75;">Page backgrounds, card surfaces, borders, dividers, body text</td>
            <td style="padding: 0.75rem; \${t.caption} opacity: 0.75;">Interactive element fills (use brand or onyx)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.75rem; \${t.bodySm} font-weight: 600;">Utility</td>
            <td style="padding: 0.75rem; \${t.caption} opacity: 0.75;">Success/error/caution states, validation, notifications</td>
            <td style="padding: 0.75rem; \${t.caption} opacity: 0.75;">General UI (use neutral or brand)</td>
          </tr>
        </tbody>
      </table>
    </div>
  \`
}`,...s.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Onyx',
  render: () => html\`
    <div data-theme="maximus" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Onyx Colors</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The onyx palette is a cool-tinted grayscale designed for <strong>high-contrast interactive elements</strong>. Unlike neutral (which is for UI structure), onyx is for buttons and other interactive elements when no brand color is appropriate.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Why onyx?</strong> The neutral palette's gray buttons can look disabled. Onyx provides a distinct, cool-tinted black that clearly reads as interactive. In dark mode, onyx inverts — buttons become light on dark backgrounds.
        </p>
      </div>

      <h2 style="\${t.h2}">Light Mode Scale</h2>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
        \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
          <div style="height: 48px; background: var(--color-onyx-\${step}); border-radius: 4px;\${step <= 2 ? ' border: 1px solid rgba(128,128,128,0.2);' : ''}"></div>
        \`)}
      </div>
      <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 2rem;">
        \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
          <div style="text-align: center; \${t.monoSm} opacity: 0.7;">\${step}</div>
        \`)}
      </div>

      <h2 style="\${t.h2}">Dark Mode Scale</h2>
      <div style="background: #0a0a0a; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="height: 48px; background: var(--onyx-dark-\${step}); border-radius: 4px;\${step >= 11 ? ' border: 1px solid rgba(255,255,255,0.2);' : ''}"></div>
          \`)}
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="text-align: center; \${t.monoSm} color: rgba(255,255,255,0.7);">\${step}</div>
          \`)}
        </div>
      </div>

      <h2 style="\${t.h2}">On-Onyx Text</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Text rendered on Step 9 solid backgrounds uses the <code style="\${t.monoSm}">--color-text-on-onyx</code> token to ensure WCAG AA contrast.
      </p>
      <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 2rem;">
        <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--color-onyx-9);">
          <span style="color: var(--color-text-on-onyx); font-weight: 600;">Text on Onyx (Light Mode)</span>
        </div>
      </div>
      <div style="background: #0a0a0a; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <div style="padding: 1rem 1.5rem; border-radius: 8px; background: var(--onyx-dark-9); display: inline-block;">
          <span style="color: #0a0c0e; font-weight: 600;">Text on Onyx (Dark Mode)</span>
        </div>
      </div>

      <h2 style="\${t.h2}">Token Reference — Light Mode</h2>
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
                <div style="width: 48px; height: 32px; border-radius: 4px; background: var(--color-onyx-\${step});\${step <= 2 ? ' border: 1px solid rgba(128,128,128,0.2);' : ''}"></div>
              </td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">\${step}</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm}">--color-onyx-\${step}</td>
              <td style="padding: 0.5rem 0.75rem; \${t.monoSm} opacity: 0.65;">\${onyxLightSteps[step].hex}</td>
              <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.65;">\${onyxLightSteps[step].purpose}</td>
            </tr>
          \`)}
        </tbody>
      </table>

      <h2 style="\${t.h2}">Token Reference — Dark Mode</h2>
      <div style="background: #0a0a0a; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.15);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; width: 64px;"></th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} color: rgba(255,255,255,0.75); font-weight: 600; width: 50px;">Step</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Hex</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Purpose</th>
            </tr>
          </thead>
          <tbody>
            \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.12);">
                <td style="padding: 0.5rem 0.75rem;">
                  <div style="width: 48px; height: 32px; border-radius: 4px; background: var(--onyx-dark-\${step});\${step >= 11 ? ' border: 1px solid rgba(255,255,255,0.2);' : ''}"></div>
                </td>
                <td style="padding: 0.5rem 0.75rem; \${t.monoSm} color: rgba(255,255,255,0.85);">\${step}</td>
                <td style="padding: 0.5rem 0.75rem; \${t.monoSm} color: rgba(255,255,255,0.85);">--onyx-dark-\${step}</td>
                <td style="padding: 0.5rem 0.75rem; \${t.monoSm} color: rgba(255,255,255,0.65);">\${onyxDarkSteps[step].hex}</td>
                <td style="padding: 0.5rem 0.75rem; \${t.caption} color: rgba(255,255,255,0.65);">\${onyxDarkSteps[step].purpose}</td>
              </tr>
            \`)}
          </tbody>
        </table>
      </div>

      <h2 style="\${t.h2}">Usage</h2>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem 1.25rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;">
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
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Neutral',
  render: () => html\`
    <div data-theme="default" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Neutral Colors</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The neutral palette is a 12-step grayscale used for backgrounds, borders, and text throughout the UI. Unlike brand colors, neutrals are <strong>shared across all themes</strong> — they provide structural consistency regardless of client brand.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Structural token:</strong> Neutral colors don't change per theme. Use them for UI structure (cards, borders, text) that should remain consistent across all brand contexts.
        </p>
      </div>

      <h2 style="\${t.h2}">Light Mode Scale</h2>
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

      <h2 style="\${t.h2}">Dark Mode Scale</h2>
      <div style="background: #0a0a0a; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: 0.5rem;">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="height: 48px; background: var(--neutral-dark-\${step}); border-radius: 4px;\${step >= 11 ? ' border: 1px solid rgba(255,255,255,0.2);' : ''}"></div>
          \`)}
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="text-align: center; \${t.monoSm} color: rgba(255,255,255,0.7);">\${step}</div>
          \`)}
        </div>
      </div>

      <h2 style="\${t.h2}">Token Reference — Light Mode</h2>
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

      <h2 style="\${t.h2}">Token Reference — Dark Mode</h2>
      <div style="background: #0a0a0a; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.15);">
              <th style="padding: 0.5rem 0.75rem; text-align: left; width: 64px;"></th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} color: rgba(255,255,255,0.75); font-weight: 600; width: 50px;">Step</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Token</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Hex</th>
              <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} color: rgba(255,255,255,0.75); font-weight: 600;">Purpose</th>
            </tr>
          </thead>
          <tbody>
            \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.12);">
                <td style="padding: 0.5rem 0.75rem;">
                  <div style="width: 48px; height: 32px; border-radius: 4px; background: var(--neutral-dark-\${step});\${step >= 11 ? ' border: 1px solid rgba(255,255,255,0.2);' : ''}"></div>
                </td>
                <td style="padding: 0.5rem 0.75rem; \${t.monoSm} color: rgba(255,255,255,0.85);">\${step}</td>
                <td style="padding: 0.5rem 0.75rem; \${t.monoSm} color: rgba(255,255,255,0.85);">--neutral-dark-\${step}</td>
                <td style="padding: 0.5rem 0.75rem; \${t.monoSm} color: rgba(255,255,255,0.65);">\${neutralDarkSteps[step].hex}</td>
                <td style="padding: 0.5rem 0.75rem; \${t.caption} color: rgba(255,255,255,0.65);">\${neutralDarkSteps[step].purpose}</td>
              </tr>
            \`)}
          </tbody>
        </table>
      </div>

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
}`,...p.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Utility',
  render: () => html\`
    <div data-theme="default" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
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
}

/* Informational tooltip (references neutral palette — auto-swaps in dark mode) */
.tooltip-info {
  background: var(--color-utility-informational-surface);
  border: 1px solid var(--color-utility-informational-stroke);
  color: var(--color-utility-informational-text);
}</pre>
    </div>
  \`
}`,...v.parameters?.docs?.source}}},y=[`Overview`,`Onyx`,`Neutral`,`Utility`]}))();export{p as Neutral,u as Onyx,s as Overview,v as Utility,y as __namedExportsOrder,r as default};