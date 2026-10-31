import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{a as r,c as i,i as a,l as o,n as s,o as c,r as l,u}from"./doc-styles-BoEZknkJ.js";var d,f,p,m,h,g,_,v;e((()=>{n(),i(),d={title:`Foundations/Size`},f=[{token:`--size-0`,value:`0px`,comment:`zero utility`},{token:`--size-px`,value:`1px`,comment:`borders, hairlines`},{token:`--size-xs1`,value:`2px`,comment:``},{token:`--size-xs0`,value:`3px`,comment:`small details`},{token:`--size-xs2`,value:`4px`,comment:``},{token:`--size-sm0`,value:`6px`,comment:`small elements`},{token:`--size-sm1`,value:`8px`,comment:`radio dot, small icons`},{token:`--size-sm2`,value:`12px`,comment:`small icons, indicators`},{token:`--size-md1`,value:`16px`,comment:`icons, checkbox indicator`},{token:`--size-md2`,value:`20px`,comment:`toggle thumb`},{token:`--size-lg1`,value:`24px`,comment:`icons, touch areas`},{token:`--size-lg-28`,value:`28px`,comment:`accordion/grid indent`},{token:`--size-lg2`,value:`32px`,comment:`desktop touch target`},{token:`--size-xl1`,value:`40px`,comment:`large controls`},{token:`--size-xl-touch`,value:`44px`,comment:`WCAG mobile touch target`},{token:`--size-xl2`,value:`48px`,comment:`toggle width, controls`},{token:`--size-xl3`,value:`56px`,comment:`larger controls`},{token:`--size-xxl1`,value:`64px`,comment:`avatars`},{token:`--size-xxl2`,value:`80px`,comment:`large avatars`},{token:`--size-xxl3`,value:`96px`,comment:`extra large avatars`},{token:`--size-xxl4`,value:`128px`,comment:`hero elements`}],p=128,m=320,h=(e,t)=>{let n=parseInt(t,10);return`background: currentColor; height: 16px; border-radius: 3px; width: var(${e}, ${n===0?2:Math.round(n/p*m)}px); max-width: ${m}px; min-width: ${n===0?2:0}px; opacity: 0.5;`},g=(e,n,i)=>t`
  <tr>
    <td style="${r.td} ${u.monoSm} white-space: nowrap;">${e}</td>
    <td style="${r.td} ${u.monoSm} ${r.muted} width: 52px;">${n}</td>
    <td style="${r.td} ${r.muted}">${i}</td>
    <td style="${r.td}">
      <div style="${h(e,n)}"></div>
    </td>
  </tr>
`,_={name:`Size Scale`,render:()=>t`
    <div data-theme=${l} data-mode=${c()} style=${s}>
      <h1 style="${u.h1}">Size</h1>
      <p style="${u.body} ${r.muted} max-width: ${a}; margin-bottom: ${o.content};">
        Size tokens define dimensions for interactive elements — icons, controls, touch targets, and avatars. 
        These are structural UX decisions that ensure consistent component sizing across all themes.
      </p>
      <p style="${u.bodySm} ${r.muted} max-width: ${a}; margin-bottom: ${o.subsection};">
        The scale mirrors spacing tokens where values overlap, with additions for WCAG touch targets (44px) 
        and common component sizes (6px, 80px). Component-specific dimensions (e.g., date picker width) 
        stay at the component level — not here.
      </p>

      <table style="${r.table} margin-bottom: ${o.subsection};">
        <thead>
          <tr>
            <th style="${r.th}">Token</th>
            <th style="${r.th} width: 52px;">px</th>
            <th style="${r.th}">Use case</th>
            <th style="${r.th} width: ${344}px;"></th>
          </tr>
        </thead>
        <tbody>
          ${f.map(e=>g(e.token,e.value,e.comment))}
        </tbody>
      </table>

      <hr style="${r.divider}" />

      <h2 style="${u.h2}">Relationship to spacing</h2>
      <p style="${u.bodySm} ${r.muted} max-width: ${a};">
        Size and spacing tokens share the same value scale but serve different purposes:
      </p>
      <ul style="${u.bodySm} ${r.muted} max-width: ${a}; margin: ${o.content} 0 0 var(--spacing-md2); padding: 0;">
        <li style="margin-bottom: var(--spacing-xs2);"><strong>Spacing</strong> — gaps, margins (between elements), padding (within elements)</li>
        <li style="margin-bottom: var(--spacing-xs2);"><strong>Size</strong> — width, height, dimensions (of elements)</li>
      </ul>
      <p style="${u.body} ${r.muted} max-width: ${a}; margin-top: ${o.content};">
        Example: A 32px icon uses <code style="${u.monoSm}">--size-lg2</code>, but the 32px gap around it uses <code style="${u.monoSm}">--spacing-lg2</code>.
      </p>
    </div>
  `},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Size Scale',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Size</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Size tokens define dimensions for interactive elements — icons, controls, touch targets, and avatars. 
        These are structural UX decisions that ensure consistent component sizing across all themes.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The scale mirrors spacing tokens where values overlap, with additions for WCAG touch targets (44px) 
        and common component sizes (6px, 80px). Component-specific dimensions (e.g., date picker width) 
        stay at the component level — not here.
      </p>

      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Token</th>
            <th style="\${doc.th} width: 52px;">px</th>
            <th style="\${doc.th}">Use case</th>
            <th style="\${doc.th} width: \${BAR_MAX_WIDTH + 24}px;"></th>
          </tr>
        </thead>
        <tbody>
          \${sizeTokens.map(i => row(i.token, i.value, i.comment))}
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Relationship to spacing</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX};">
        Size and spacing tokens share the same value scale but serve different purposes:
      </p>
      <ul style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin: \${space.content} 0 0 var(--spacing-md2); padding: 0;">
        <li style="margin-bottom: var(--spacing-xs2);"><strong>Spacing</strong> — gaps, margins (between elements), padding (within elements)</li>
        <li style="margin-bottom: var(--spacing-xs2);"><strong>Size</strong> — width, height, dimensions (of elements)</li>
      </ul>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-top: \${space.content};">
        Example: A 32px icon uses <code style="\${t.monoSm}">--size-lg2</code>, but the 32px gap around it uses <code style="\${t.monoSm}">--spacing-lg2</code>.
      </p>
    </div>
  \`
}`,..._.parameters?.docs?.source}}},v=[`SizeScale`]}))();export{_ as SizeScale,v as __namedExportsOrder,d as default};