import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{a as r,c as i,d as a,i as o,n as s,o as c,r as l,u}from"./doc-styles-DkvR_Qyb.js";var d,f,p,m,h,g;e((()=>{n(),i(),d={title:`Foundations/Border Width`},f=[{token:`--border-width-none`,value:`0px`,comment:`removes border`},{token:`--border-width-xs`,value:`1px`,comment:`default/most common`},{token:`--border-width-sm`,value:`2px`,comment:`emphasized`},{token:`--border-width-md`,value:`3px`,comment:`heavy emphasis`},{token:`--border-width-lg`,value:`4px`,comment:`decorative`},{token:`--border-width-xl`,value:`6px`,comment:`maximum weight`}],p=(e,t)=>`
    width: 64px;
    height: 40px;
    border: var(${e}, ${t}) solid currentColor;
    border-radius: 4px;
    opacity: 0.7;
    flex-shrink: 0;
  `,m=(e,n,i)=>t`
  <tr>
    <td style="${r.td} ${a.monoSm} white-space: nowrap;">${e}</td>
    <td style="${r.td} ${a.monoSm} ${r.muted}">${n}</td>
    <td style="${r.td} ${r.muted}">${i}</td>
    <td style="${r.td}">
      <div style="${p(e,n)}"></div>
    </td>
  </tr>
`,h={name:`Border Width Scale`,render:()=>t`
    <div data-theme=${l} data-mode=${c()} style=${s}>
      <h1 style="${a.h1}">Border Width</h1>
      <p style="${a.body} ${r.muted} max-width: ${o}; margin-bottom: ${u.subsection};">
        Border width tokens define the thickness scale for element borders. These are structural tokens — the same scale applies across all client themes.
      </p>

      <table style="${r.table}">
        <thead>
          <tr>
            <th style="${r.th}">Token</th>
            <th style="${r.th}">Value</th>
            <th style="${r.th}">Usage</th>
            <th style="${r.th}">Preview</th>
          </tr>
        </thead>
        <tbody>
          ${f.map(e=>m(e.token,e.value,e.comment))}
        </tbody>
      </table>

      <hr style="${r.divider} margin-top: ${u.subsection};" />

      <h2 style="${a.h2}">Usage notes</h2>
      <ul style="${a.bodySm} ${r.muted} max-width: ${o}; margin: 0; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: var(--spacing-xs2);"><strong>xs (1px)</strong> — Default for most input borders, cards, and subtle separators</li>
        <li style="margin-bottom: var(--spacing-xs2);"><strong>sm (2px)</strong> — Focus rings, active states, emphasized containers</li>
        <li style="margin-bottom: var(--spacing-xs2);"><strong>md–xl (3–6px)</strong> — Decorative elements, progress indicators, heavy emphasis</li>
      </ul>

      <hr style="${r.divider} margin-top: ${u.subsection};" />

      <h2 style="${a.h2}">Relationship to dividers</h2>
      <p style="${a.bodySm} ${r.muted} max-width: ${o};">
        Dividers (horizontal/vertical separators) use <strong>size tokens</strong> for their thickness, not border-width tokens. A 1px horizontal divider uses <code>height: var(--size-px)</code>, while a 1px border uses <code>border-width: var(--border-width-xs)</code>.
      </p>
    </div>
  `},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Border Width Scale',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Border Width</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Border width tokens define the thickness scale for element borders. These are structural tokens — the same scale applies across all client themes.
      </p>

      <table style="\${doc.table}">
        <thead>
          <tr>
            <th style="\${doc.th}">Token</th>
            <th style="\${doc.th}">Value</th>
            <th style="\${doc.th}">Usage</th>
            <th style="\${doc.th}">Preview</th>
          </tr>
        </thead>
        <tbody>
          \${borderWidthTokens.map(i => row(i.token, i.value, i.comment))}
        </tbody>
      </table>

      <hr style="\${doc.divider} margin-top: \${space.subsection};" />

      <h2 style="\${t.h2}">Usage notes</h2>
      <ul style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: var(--spacing-xs2);"><strong>xs (1px)</strong> — Default for most input borders, cards, and subtle separators</li>
        <li style="margin-bottom: var(--spacing-xs2);"><strong>sm (2px)</strong> — Focus rings, active states, emphasized containers</li>
        <li style="margin-bottom: var(--spacing-xs2);"><strong>md–xl (3–6px)</strong> — Decorative elements, progress indicators, heavy emphasis</li>
      </ul>

      <hr style="\${doc.divider} margin-top: \${space.subsection};" />

      <h2 style="\${t.h2}">Relationship to dividers</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX};">
        Dividers (horizontal/vertical separators) use <strong>size tokens</strong> for their thickness, not border-width tokens. A 1px horizontal divider uses <code>height: var(--size-px)</code>, while a 1px border uses <code>border-width: var(--border-width-xs)</code>.
      </p>
    </div>
  \`
}`,...h.parameters?.docs?.source}}},g=[`BorderWidthScale`]}))();export{h as BorderWidthScale,g as __namedExportsOrder,d as default};