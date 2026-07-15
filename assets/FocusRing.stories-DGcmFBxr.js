import{i as e}from"./preload-helper-BdFrVu1K.js";import{o as t,t as n}from"./iframe-CQ36wFM3.js";var r,i,a,o,s,c,l,u,d;e((()=>{n(),r={title:`Foundations/Focus Ring`},i={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},a=`680px`,o=`960px`,s=[{token:`--focus-ring-width`,value:`2px`,label:`Width`,usage:`WCAG 2.2 SC 2.4.11 minimum. Applied as outline-width.`},{token:`--focus-ring-style`,value:`solid`,label:`Style`,usage:`Outline style. Solid ensures maximum visibility across backgrounds.`},{token:`--focus-ring-color`,value:`#386CF7`,label:`Color`,usage:`Structural — not overridable by brand sheets. Meets 3:1 contrast against white and light surfaces (SC 2.4.11, SC 1.4.11).`},{token:`--focus-ring-offset`,value:`2px`,label:`Offset`,usage:`Standard external ring offset. Used on buttons, links, checkboxes, radios — any element without a visible boundary.`},{token:`--focus-ring-inset-offset`,value:`-2px`,label:`Inset offset`,usage:`Inset ring offset for bordered elements — Text Field, Select. Ring draws inside the element boundary.`}],c=`
  .focus-preview {
    outline: var(--focus-ring-width, 2px) var(--focus-ring-style, solid) var(--focus-ring-color, #386CF7);
  }
  .focus-preview-inset {
    outline: var(--focus-ring-width, 2px) var(--focus-ring-style, solid) var(--focus-ring-color, #386CF7);
    outline-offset: var(--focus-ring-inset-offset, -2px);
  }
  .focus-preview-standard {
    outline-offset: var(--focus-ring-offset, 2px);
  }
`,l=({token:e,value:n,label:r,usage:a})=>t`
  <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
    <td style="padding: 0.5rem 0.75rem; ${i.monoSm} color: inherit; white-space: nowrap;">${e}</td>
    <td style="padding: 0.5rem 0.75rem; ${i.monoSm} opacity: 0.65; white-space: nowrap;">${n}</td>
    <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">${r}</td>
    <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">${a}</td>
  </tr>
`,u={name:`Focus Ring Tokens`,render:()=>t`
    <style>${c}</style>
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${i.h1}">Focus Ring</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1.5rem;">Structural tokens defining the keyboard focus indicator. The focus ring is a non-negotiable accessibility primitive — it cannot be overridden by any brand sheet. All components consume these tokens via a shared <code>focusRing</code> CSSResult rather than implementing their own <code>:focus-visible</code> rules.</p>

      <div style="margin-bottom: 2rem; padding: 0.875rem 1rem; background: rgba(251,191,36,0.1); border-left: 3px solid #f59e0b; border-radius: 0 4px 4px 0;">
        <p style="${i.caption}"><strong>Section 508 / ADA Title II:</strong> WCAG 2.2 SC 2.4.11 (Focus Appearance) requires a minimum indicator area (perimeter × 2px) and minimum 3:1 contrast ratio between focused and unfocused states. SC 1.4.11 (Non-text Contrast) requires 3:1 against adjacent colors. <code>--focus-ring-color</code> is structural and satisfies both criteria — it must never be removed or replaced by a brand token.</p>
      </div>

      <h2 style="${i.h2}">Tokens</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Value</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Label</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Usage</th>
          </tr>
        </thead>
        <tbody>
          ${s.map(l)}
        </tbody>
      </table>

      <h2 style="${i.h2}">Preview</h2>
      <p style="${i.body} opacity: 0.65; margin-bottom: 1.5rem;">Focus state shown statically. In production, the ring appears only on <code>:focus-visible</code> — keyboard navigation, not mouse click.</p>

      <div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-bottom: 2.5rem; align-items: flex-start;">

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="${i.caption} opacity: 0.65; margin-bottom: 0.25rem;">Button — standard offset</div>
          <button class="focus-preview focus-preview-standard" style="padding: 0.5rem 1.25rem; border-radius: 4px; border: 1px solid rgba(128,128,128,0.3); background: rgba(128,128,128,0.06); font-size: 0.875rem; cursor: default; color: inherit;">
            Primary action
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="${i.caption} opacity: 0.65; margin-bottom: 0.25rem;">Link — standard offset</div>
          <a class="focus-preview focus-preview-standard" style="font-size: 0.875rem; color: #386CF7; text-decoration: underline; cursor: default; align-self: flex-start;">
            Anchor link
          </a>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="${i.caption} opacity: 0.65; margin-bottom: 0.25rem;">Text Field — inset offset</div>
          <input class="focus-preview focus-preview-inset" style="padding: 0.5rem 0.75rem; border-radius: 4px; border: 1px solid rgba(128,128,128,0.4); background: transparent; font-size: 0.875rem; color: inherit; width: 180px;" value="Input value" readonly />
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="${i.caption} opacity: 0.65; margin-bottom: 0.25rem;">Checkbox — standard offset</div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <input class="focus-preview focus-preview-standard" type="checkbox" checked readonly style="width: 16px; height: 16px; accent-color: #386CF7; cursor: default;" />
            <span style="${i.caption}">Checkbox label</span>
          </div>
        </div>

      </div>

      <h2 style="${i.h2}">Component Usage</h2>
      <p style="${i.body} opacity: 0.65; margin-bottom: 1rem;">Import the shared <code>CSSResult</code> — never write a custom <code>:focus-visible</code> rule in a component.</p>

      <pre style="margin: 0 0 0.75rem; padding: 1rem 1.25rem; background: rgba(128,128,128,0.06); border-radius: 6px; ${i.monoSm} line-height: 1.75; overflow-x: auto;">import { focusRing } from '@mms/tokens-structural/focus';
// or for bordered elements:
import { focusRingInset } from '@mms/tokens-structural/focus';

@customElement('mms-button')
class MmsButton extends LitElement {
  static styles = [focusRing, css\`
    /* component styles */
  \`];
}</pre>

      <h2 style="${i.h2}">Reference CSS</h2>
      <pre style="margin: 0; padding: 1rem 1.25rem; background: rgba(128,128,128,0.06); border-radius: 6px; ${i.monoSm} line-height: 1.75; overflow-x: auto;">:root {
  --focus-ring-width:        2px;
  --focus-ring-style:        solid;
  --focus-ring-color:        #386CF7;
  --focus-ring-offset:       2px;
  --focus-ring-inset-offset: -2px;
}

/* Standard — buttons, links, checkboxes, radios */
:focus-visible {
  outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

/* Inset — Text Field, Select */
:focus-visible {
  outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
  outline-offset: var(--focus-ring-inset-offset);
}</pre>

    </div>
  `},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Focus Ring Tokens',
  render: () => html\`
    <style>\${DEMO_STYLE}</style>
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Focus Ring</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">Structural tokens defining the keyboard focus indicator. The focus ring is a non-negotiable accessibility primitive — it cannot be overridden by any brand sheet. All components consume these tokens via a shared <code>focusRing</code> CSSResult rather than implementing their own <code>:focus-visible</code> rules.</p>

      <div style="margin-bottom: 2rem; padding: 0.875rem 1rem; background: rgba(251,191,36,0.1); border-left: 3px solid #f59e0b; border-radius: 0 4px 4px 0;">
        <p style="\${t.caption}"><strong>Section 508 / ADA Title II:</strong> WCAG 2.2 SC 2.4.11 (Focus Appearance) requires a minimum indicator area (perimeter × 2px) and minimum 3:1 contrast ratio between focused and unfocused states. SC 1.4.11 (Non-text Contrast) requires 3:1 against adjacent colors. <code>--focus-ring-color</code> is structural and satisfies both criteria — it must never be removed or replaced by a brand token.</p>
      </div>

      <h2 style="\${t.h2}">Tokens</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Value</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Label</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Usage</th>
          </tr>
        </thead>
        <tbody>
          \${focusTokens.map(tokenRow)}
        </tbody>
      </table>

      <h2 style="\${t.h2}">Preview</h2>
      <p style="\${t.body} opacity: 0.65; margin-bottom: 1.5rem;">Focus state shown statically. In production, the ring appears only on <code>:focus-visible</code> — keyboard navigation, not mouse click.</p>

      <div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-bottom: 2.5rem; align-items: flex-start;">

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="\${t.caption} opacity: 0.65; margin-bottom: 0.25rem;">Button — standard offset</div>
          <button class="focus-preview focus-preview-standard" style="padding: 0.5rem 1.25rem; border-radius: 4px; border: 1px solid rgba(128,128,128,0.3); background: rgba(128,128,128,0.06); font-size: 0.875rem; cursor: default; color: inherit;">
            Primary action
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="\${t.caption} opacity: 0.65; margin-bottom: 0.25rem;">Link — standard offset</div>
          <a class="focus-preview focus-preview-standard" style="font-size: 0.875rem; color: #386CF7; text-decoration: underline; cursor: default; align-self: flex-start;">
            Anchor link
          </a>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="\${t.caption} opacity: 0.65; margin-bottom: 0.25rem;">Text Field — inset offset</div>
          <input class="focus-preview focus-preview-inset" style="padding: 0.5rem 0.75rem; border-radius: 4px; border: 1px solid rgba(128,128,128,0.4); background: transparent; font-size: 0.875rem; color: inherit; width: 180px;" value="Input value" readonly />
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="\${t.caption} opacity: 0.65; margin-bottom: 0.25rem;">Checkbox — standard offset</div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <input class="focus-preview focus-preview-standard" type="checkbox" checked readonly style="width: 16px; height: 16px; accent-color: #386CF7; cursor: default;" />
            <span style="\${t.caption}">Checkbox label</span>
          </div>
        </div>

      </div>

      <h2 style="\${t.h2}">Component Usage</h2>
      <p style="\${t.body} opacity: 0.65; margin-bottom: 1rem;">Import the shared <code>CSSResult</code> — never write a custom <code>:focus-visible</code> rule in a component.</p>

      <pre style="margin: 0 0 0.75rem; padding: 1rem 1.25rem; background: rgba(128,128,128,0.06); border-radius: 6px; \${t.monoSm} line-height: 1.75; overflow-x: auto;">import { focusRing } from '@mms/tokens-structural/focus';
// or for bordered elements:
import { focusRingInset } from '@mms/tokens-structural/focus';

@customElement('mms-button')
class MmsButton extends LitElement {
  static styles = [focusRing, css\\\`
    /* component styles */
  \\\`];
}</pre>

      <h2 style="\${t.h2}">Reference CSS</h2>
      <pre style="margin: 0; padding: 1rem 1.25rem; background: rgba(128,128,128,0.06); border-radius: 6px; \${t.monoSm} line-height: 1.75; overflow-x: auto;">:root {
  --focus-ring-width:        2px;
  --focus-ring-style:        solid;
  --focus-ring-color:        #386CF7;
  --focus-ring-offset:       2px;
  --focus-ring-inset-offset: -2px;
}

/* Standard — buttons, links, checkboxes, radios */
:focus-visible {
  outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

/* Inset — Text Field, Select */
:focus-visible {
  outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
  outline-offset: var(--focus-ring-inset-offset);
}</pre>

    </div>
  \`
}`,...u.parameters?.docs?.source}}},d=[`FocusRingTokens`]}))();export{u as FocusRingTokens,d as __namedExportsOrder,r as default};