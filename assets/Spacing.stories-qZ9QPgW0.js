import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{a as r,c as i,d as a,i as o,n as s,o as c,r as l,u}from"./doc-styles-DkvR_Qyb.js";var d,f,p,m,h,g,_,v;e((()=>{n(),i(),d={title:`Foundations/Spacing`},f=[{token:`--spacing-0`,value:`0px`,rem:`0rem`},{token:`--spacing-px`,value:`1px`,rem:`0.0625rem`},{token:`--spacing-xs1`,value:`2px`,rem:`0.125rem`},{token:`--spacing-xs0`,value:`3px`,rem:`0.1875rem`},{token:`--spacing-xs2`,value:`4px`,rem:`0.25rem`},{token:`--spacing-sm1`,value:`8px`,rem:`0.5rem`},{token:`--spacing-sm2`,value:`12px`,rem:`0.75rem`},{token:`--spacing-md1`,value:`16px`,rem:`1rem`},{token:`--spacing-md2`,value:`20px`,rem:`1.25rem`},{token:`--spacing-lg1`,value:`24px`,rem:`1.5rem`},{token:`--spacing-lg-mid`,value:`28px`,rem:`1.75rem`},{token:`--spacing-lg2`,value:`32px`,rem:`2rem`},{token:`--spacing-xl1`,value:`40px`,rem:`2.5rem`},{token:`--spacing-xl2`,value:`48px`,rem:`3rem`},{token:`--spacing-xl3`,value:`56px`,rem:`3.5rem`},{token:`--spacing-xxl1`,value:`64px`,rem:`4rem`},{token:`--spacing-xxl2`,value:`72px`,rem:`4.5rem`},{token:`--spacing-xxl3`,value:`96px`,rem:`6rem`},{token:`--spacing-xxl4`,value:`128px`,rem:`8rem`}],p=128,m=320,h=(e,t)=>{let n=parseInt(t,10);return`background: currentColor; height: 16px; border-radius: 3px; width: var(${e}, ${n===0?2:Math.round(n/p*m)}px); max-width: ${m}px; min-width: ${n===0?2:0}px; opacity: ${n===0?.15:.5};`},g=(e,n,i)=>t`
  <tr>
    <td style="${r.td} ${a.monoSm} white-space: nowrap;">${e}</td>
    <td style="${r.td} ${a.monoSm} ${r.muted} width: 52px;">${n}</td>
    <td style="${r.td} ${a.monoSm} ${r.muted} width: 72px;">${i}</td>
    <td style="${r.td}">
      <div style="${h(e,n)}"></div>
    </td>
  </tr>
`,_={name:`Spacing Scale`,render:()=>t`
    <div data-theme=${l} data-mode=${c()} style=${s}>
      <h1 style="${a.h1}">Spacing</h1>
      <p style="${a.body} ${r.muted} max-width: ${o}; margin-bottom: ${u.subsection};">Spacing tokens define a predefined scale for arranging elements within layouts and components. These values are shared across all engagements — they represent structural UX decisions, not brand decisions — ensuring consistent rhythm and density regardless of which client theme is applied.</p>

      <table style="${r.table}">
        <thead>
          <tr>
            <th style="${r.th}">Token</th>
            <th style="${r.th} width: 52px;">px</th>
            <th style="${r.th} width: 72px;">rem</th>
            <th style="${r.th} width: ${344}px;"></th>
          </tr>
        </thead>
        <tbody>
          ${f.map(e=>g(e.token,e.value,e.rem))}
        </tbody>
      </table>
    </div>
  `},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Spacing Scale',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Spacing</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">Spacing tokens define a predefined scale for arranging elements within layouts and components. These values are shared across all engagements — they represent structural UX decisions, not brand decisions — ensuring consistent rhythm and density regardless of which client theme is applied.</p>

      <table style="\${doc.table}">
        <thead>
          <tr>
            <th style="\${doc.th}">Token</th>
            <th style="\${doc.th} width: 52px;">px</th>
            <th style="\${doc.th} width: 72px;">rem</th>
            <th style="\${doc.th} width: \${BAR_MAX_WIDTH + 24}px;"></th>
          </tr>
        </thead>
        <tbody>
          \${spacingTokens.map(i => row(i.token, i.value, i.rem))}
        </tbody>
      </table>
    </div>
  \`
}`,..._.parameters?.docs?.source}}},v=[`SpacingScale`]}))();export{_ as SpacingScale,v as __namedExportsOrder,d as default};