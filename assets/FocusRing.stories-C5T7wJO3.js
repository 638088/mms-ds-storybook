import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{t as r}from"./mms-inline-alert.component-Yg3wQ3bY.js";import{a as i,c as a,d as o,i as s,n as c,o as l,r as u,u as d}from"./doc-styles-DkvR_Qyb.js";var f,p,m,h,g,_;e((()=>{n(),r(),a(),f={title:`Foundations/Focus Ring`},p=[{token:`--focus-ring-width`,value:`2px`,label:`Width`,usage:`WCAG 2.2 SC 2.4.11 minimum. Applied as outline-width.`},{token:`--focus-ring-style`,value:`solid`,label:`Style`,usage:`Outline style. Solid ensures maximum visibility across backgrounds.`},{token:`--focus-ring-color`,value:`#386CF7`,label:`Color`,usage:`Structural — not overridable by brand sheets. Meets 3:1 contrast against white and light surfaces (SC 2.4.11, SC 1.4.11).`},{token:`--focus-ring-offset`,value:`2px`,label:`Offset`,usage:`Standard external ring offset. Used on buttons, links, checkboxes, radios — any element without a visible boundary.`},{token:`--focus-ring-inset-offset`,value:`-2px`,label:`Inset offset`,usage:`Inset ring offset for bordered elements — Text Field, Select. Ring draws inside the element boundary.`}],m=`
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
`,h=({token:e,value:n,label:r,usage:a})=>t`
  <tr>
    <td style="${i.td} ${o.monoSm} white-space: nowrap;">${e}</td>
    <td style="${i.td} ${o.monoSm} ${i.muted} white-space: nowrap;">${n}</td>
    <td style="${i.td} ${i.muted}">${r}</td>
    <td style="${i.td} ${i.muted}">${a}</td>
  </tr>
`,g={name:`Focus Ring Tokens`,render:()=>t`
    <style>${m}</style>
    <div data-theme=${u} data-mode=${l()} style=${c}>

      <h1 style="${o.h1}">Focus Ring</h1>
      <p style="${o.body} ${i.muted} max-width: ${s}; margin-bottom: ${d.content};">Structural tokens defining the keyboard focus indicator. The focus ring is a non-negotiable accessibility primitive — it cannot be overridden by any brand sheet. All components consume these tokens via a shared <code style="${o.monoSm}">focusRing</code> CSSResult rather than implementing their own <code style="${o.monoSm}">:focus-visible</code> rules.</p>

      <div style="margin-bottom: ${d.subsection};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Section 508 / ADA Title II:"
          message="WCAG 2.2 SC 2.4.11 (Focus Appearance) requires a minimum indicator area (perimeter × 2px) and minimum 3:1 contrast ratio between focused and unfocused states. SC 1.4.11 (Non-text Contrast) requires 3:1 against adjacent colors. --focus-ring-color is structural and satisfies both criteria — it must never be removed or replaced by a brand token."
        ></mms-inline-alert>
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Tokens</h2>
      <table style="${i.table} margin-bottom: ${d.subsection};">
        <thead>
          <tr>
            <th style="${i.th}">Token</th>
            <th style="${i.th}">Value</th>
            <th style="${i.th}">Label</th>
            <th style="${i.th}">Usage</th>
          </tr>
        </thead>
        <tbody>
          ${p.map(h)}
        </tbody>
      </table>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Preview</h2>
      <p style="${o.body} ${i.muted} margin-bottom: ${d.content};">Focus state shown statically. In production, the ring appears only on <code style="${o.monoSm}">:focus-visible</code> — keyboard navigation, not mouse click.</p>

      <div style="display: flex; flex-wrap: wrap; gap: ${d.subsection}; margin-bottom: ${d.subsection}; align-items: flex-start;">

        <div style="display: flex; flex-direction: column; gap: ${d.label};">
          <div style="${o.caption} ${i.muted}">Button — standard offset</div>
          <button class="focus-preview focus-preview-standard" style="padding: 0.5rem 1.25rem; border-radius: 4px; border: 1px solid rgba(128,128,128,0.3); background: rgba(128,128,128,0.06); font-family: inherit; font-size: 0.875rem; cursor: default; color: inherit;">
            Primary action
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: ${d.label};">
          <div style="${o.caption} ${i.muted}">Link — standard offset</div>
          <a class="focus-preview focus-preview-standard" style="font-size: 0.875rem; color: #386CF7; text-decoration: underline; cursor: default; align-self: flex-start;">
            Anchor link
          </a>
        </div>

        <div style="display: flex; flex-direction: column; gap: ${d.label};">
          <div style="${o.caption} ${i.muted}">Text Field — inset offset</div>
          <input class="focus-preview focus-preview-inset" style="padding: 0.5rem 0.75rem; border-radius: 4px; border: 1px solid rgba(128,128,128,0.4); background: transparent; font-size: 0.875rem; color: inherit; width: 180px;" value="Input value" readonly />
        </div>

        <div style="display: flex; flex-direction: column; gap: ${d.label};">
          <div style="${o.caption} ${i.muted}">Checkbox — standard offset</div>
          <div style="display: flex; align-items: center; gap: ${d.label};">
            <input class="focus-preview focus-preview-standard" type="checkbox" checked readonly style="width: 16px; height: 16px; accent-color: #386CF7; cursor: default;" />
            <span style="${o.caption}">Checkbox label</span>
          </div>
        </div>

      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Component usage</h2>
      <p style="${o.body} ${i.muted} margin-bottom: ${d.content};">Import the shared <code style="${o.monoSm}">CSSResult</code> — never write a custom <code style="${o.monoSm}">:focus-visible</code> rule in a component.</p>

      <pre style="${i.pre} margin-bottom: ${d.subsection};">import { focusRing } from '@mms/tokens-structural/focus';
// or for bordered elements:
import { focusRingInset } from '@mms/tokens-structural/focus';

@customElement('mms-button')
class MmsButton extends LitElement {
  static styles = [focusRing, css\`
    /* component styles */
  \`];
}</pre>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Reference CSS</h2>
      <pre style="${i.pre} margin: 0;">:root {
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
  `},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Focus Ring Tokens',
  render: () => html\`
    <style>\${DEMO_STYLE}</style>
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Focus Ring</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">Structural tokens defining the keyboard focus indicator. The focus ring is a non-negotiable accessibility primitive — it cannot be overridden by any brand sheet. All components consume these tokens via a shared <code style="\${t.monoSm}">focusRing</code> CSSResult rather than implementing their own <code style="\${t.monoSm}">:focus-visible</code> rules.</p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=\${false}
          summary="Section 508 / ADA Title II:"
          message="WCAG 2.2 SC 2.4.11 (Focus Appearance) requires a minimum indicator area (perimeter × 2px) and minimum 3:1 contrast ratio between focused and unfocused states. SC 1.4.11 (Non-text Contrast) requires 3:1 against adjacent colors. --focus-ring-color is structural and satisfies both criteria — it must never be removed or replaced by a brand token."
        ></mms-inline-alert>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Tokens</h2>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Token</th>
            <th style="\${doc.th}">Value</th>
            <th style="\${doc.th}">Label</th>
            <th style="\${doc.th}">Usage</th>
          </tr>
        </thead>
        <tbody>
          \${focusTokens.map(tokenRow)}
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Preview</h2>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.content};">Focus state shown statically. In production, the ring appears only on <code style="\${t.monoSm}">:focus-visible</code> — keyboard navigation, not mouse click.</p>

      <div style="display: flex; flex-wrap: wrap; gap: \${space.subsection}; margin-bottom: \${space.subsection}; align-items: flex-start;">

        <div style="display: flex; flex-direction: column; gap: \${space.label};">
          <div style="\${t.caption} \${doc.muted}">Button — standard offset</div>
          <button class="focus-preview focus-preview-standard" style="padding: 0.5rem 1.25rem; border-radius: 4px; border: 1px solid rgba(128,128,128,0.3); background: rgba(128,128,128,0.06); font-family: inherit; font-size: 0.875rem; cursor: default; color: inherit;">
            Primary action
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: \${space.label};">
          <div style="\${t.caption} \${doc.muted}">Link — standard offset</div>
          <a class="focus-preview focus-preview-standard" style="font-size: 0.875rem; color: #386CF7; text-decoration: underline; cursor: default; align-self: flex-start;">
            Anchor link
          </a>
        </div>

        <div style="display: flex; flex-direction: column; gap: \${space.label};">
          <div style="\${t.caption} \${doc.muted}">Text Field — inset offset</div>
          <input class="focus-preview focus-preview-inset" style="padding: 0.5rem 0.75rem; border-radius: 4px; border: 1px solid rgba(128,128,128,0.4); background: transparent; font-size: 0.875rem; color: inherit; width: 180px;" value="Input value" readonly />
        </div>

        <div style="display: flex; flex-direction: column; gap: \${space.label};">
          <div style="\${t.caption} \${doc.muted}">Checkbox — standard offset</div>
          <div style="display: flex; align-items: center; gap: \${space.label};">
            <input class="focus-preview focus-preview-standard" type="checkbox" checked readonly style="width: 16px; height: 16px; accent-color: #386CF7; cursor: default;" />
            <span style="\${t.caption}">Checkbox label</span>
          </div>
        </div>

      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Component usage</h2>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.content};">Import the shared <code style="\${t.monoSm}">CSSResult</code> — never write a custom <code style="\${t.monoSm}">:focus-visible</code> rule in a component.</p>

      <pre style="\${doc.pre} margin-bottom: \${space.subsection};">import { focusRing } from '@mms/tokens-structural/focus';
// or for bordered elements:
import { focusRingInset } from '@mms/tokens-structural/focus';

@customElement('mms-button')
class MmsButton extends LitElement {
  static styles = [focusRing, css\\\`
    /* component styles */
  \\\`];
}</pre>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Reference CSS</h2>
      <pre style="\${doc.pre} margin: 0;">:root {
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
}`,...g.parameters?.docs?.source}}},_=[`FocusRingTokens`]}))();export{g as FocusRingTokens,_ as __namedExportsOrder,f as default};