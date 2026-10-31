import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{a as r,c as i,i as a,l as o,n as s,o as c,r as l,u}from"./doc-styles-BoEZknkJ.js";var d,f,p,m,h;e((()=>{n(),i(),d={title:`Foundations/Elevation`},f=[{token:`--elevation-none`,value:`none`,label:`None`,usage:`Flat surfaces — no lift`},{token:`--elevation-sm`,value:`0 1px 3px 1px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.30)`,label:`Small`,usage:`Cards at rest, subtle lift`},{token:`--elevation-md`,value:`0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.30)`,label:`Medium`,usage:`Dropdowns, popovers`},{token:`--elevation-lg`,value:`0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px 0 rgba(0,0,0,0.30)`,label:`Large`,usage:`Modals, drawers`},{token:`--elevation-xl`,value:`0 6px 10px 4px rgba(0,0,0,0.15), 0 2px 3px 0 rgba(0,0,0,0.30)`,label:`X-Large`,usage:`Top-level overlays, dialogs`}],p=(e,n,i,a)=>t`
  <div style="display: flex; align-items: center; gap: ${o.subsection}; padding: var(--spacing-md2) 0; border-bottom: var(--border-width-xs) solid var(--color-border-subtle);">
    <div style="
      width: 80px; height: 80px; flex-shrink: 0;
      border-radius: 8px;
      background: rgba(128,128,128,0.06);
      box-shadow: ${n};
    "></div>
    <div style="flex: 1; min-width: 0;">
      <div style="${u.monoSm} display: block; margin-bottom: var(--spacing-xs2);">${e}</div>
      <div style="${u.caption} font-weight: 600; margin-bottom: var(--spacing-xs2); ${r.muted}">${i}</div>
      <div style="${u.caption} ${r.muted}">${a}</div>
    </div>
    <div style="${u.monoSm} ${r.muted} max-width: 340px; word-break: break-all; text-align: right;">${n}</div>
  </div>
`,m={name:`Elevation Scale`,render:()=>t`
    <div data-theme=${l} data-mode=${c()} style=${s}>
      <h1 style="${u.h1}">Elevation</h1>
      <p style="${u.body} ${r.muted} max-width: ${a}; margin-bottom: ${o.subsection};">Elevation tokens define the shadow scale used to communicate depth and layering across components. These are structural UX decisions — the elevation scale does not change per client theme.</p>
      <div>
        ${f.map(e=>p(e.token,e.value,e.label,e.usage))}
      </div>
    </div>
  `},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Elevation Scale',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Elevation</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">Elevation tokens define the shadow scale used to communicate depth and layering across components. These are structural UX decisions — the elevation scale does not change per client theme.</p>
      <div>
        \${elevationTokens.map(i => card(i.token, i.value, i.label, i.usage))}
      </div>
    </div>
  \`
}`,...m.parameters?.docs?.source}}},h=[`ElevationScale`]}))();export{m as ElevationScale,h as __namedExportsOrder,d as default};