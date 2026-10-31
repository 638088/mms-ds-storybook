import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{a as r,c as i,i as a,l as o,n as s,o as c,r as l,u}from"./doc-styles-BoEZknkJ.js";var d,f,p,m,h,g;e((()=>{n(),i(),d={title:`Foundations/Radius`},f=[{token:`--radius-none`,value:`0px`,rem:`0rem`},{token:`--radius-xs`,value:`2px`,rem:`0.125rem`},{token:`--radius-sm`,value:`4px`,rem:`0.25rem`},{token:`--radius-md`,value:`8px`,rem:`0.5rem`},{token:`--radius-lg`,value:`16px`,rem:`1rem`},{token:`--radius-full`,value:`1000px`,rem:`—`}],p=e=>`width: 56px; height: 56px; border-radius: ${Math.min(parseInt(e,10),24)}px; background: currentColor; opacity: 0.15; flex-shrink: 0;`,m=(e,n,i)=>t`
  <tr>
    <td style="${r.td} ${u.monoSm} white-space: nowrap;">${e}</td>
    <td style="${r.td} ${u.monoSm} ${r.muted} width: 64px;">${n}</td>
    <td style="${r.td} ${u.monoSm} ${r.muted} width: 64px;">${i}</td>
    <td style="${r.td}">
      <div style="${p(n)}"></div>
    </td>
  </tr>
`,h={name:`Radius Scale`,render:()=>t`
    <div data-theme=${l} data-mode=${c()} style=${s}>
      <h1 style="${u.h1}">Radius</h1>
      <p style="${u.body} ${r.muted} max-width: ${a}; margin-bottom: ${o.subsection};">Border radius tokens define the corner curvature scale used across all components. These are structural UX decisions shared across all engagements — the radius scale does not change per client theme.</p>

      <table style="${r.table}">
        <thead>
          <tr>
            <th style="${r.th}">Token</th>
            <th style="${r.th} width: 64px;">px</th>
            <th style="${r.th} width: 64px;">rem</th>
            <th style="${r.th}"></th>
          </tr>
        </thead>
        <tbody>
          ${f.map(e=>m(e.token,e.value,e.rem))}
        </tbody>
      </table>
    </div>
  `},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Radius Scale',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Radius</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">Border radius tokens define the corner curvature scale used across all components. These are structural UX decisions shared across all engagements — the radius scale does not change per client theme.</p>

      <table style="\${doc.table}">
        <thead>
          <tr>
            <th style="\${doc.th}">Token</th>
            <th style="\${doc.th} width: 64px;">px</th>
            <th style="\${doc.th} width: 64px;">rem</th>
            <th style="\${doc.th}"></th>
          </tr>
        </thead>
        <tbody>
          \${radiusTokens.map(i => row(i.token, i.value, i.rem))}
        </tbody>
      </table>
    </div>
  \`
}`,...h.parameters?.docs?.source}}},g=[`RadiusScale`]}))();export{h as RadiusScale,g as __namedExportsOrder,d as default};