import{i as e}from"./preload-helper-xPQekRTU.js";import{K as t,V as n}from"./iframe-J4X5mQMa.js";var r,i,a,o,s,c,l,u;e((()=>{n(),r={title:`Foundations/Elevation`},i={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},a=`680px`,o=`960px`,s=[{token:`--elevation-none`,value:`none`,label:`None`,usage:`Flat surfaces — no lift`},{token:`--elevation-sm`,value:`0 1px 3px 1px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.30)`,label:`Small`,usage:`Cards at rest, subtle lift`},{token:`--elevation-md`,value:`0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.30)`,label:`Medium`,usage:`Dropdowns, popovers`},{token:`--elevation-lg`,value:`0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px 0 rgba(0,0,0,0.30)`,label:`Large`,usage:`Modals, drawers`},{token:`--elevation-xl`,value:`0 6px 10px 4px rgba(0,0,0,0.15), 0 2px 3px 0 rgba(0,0,0,0.30)`,label:`X-Large`,usage:`Top-level overlays, dialogs`}],c=(e,n,r,a)=>t`
  <div style="display: flex; align-items: center; gap: 2rem; padding: 1.25rem 0; border-bottom: 1px solid rgba(128,128,128,0.12);">
    <div style="
      width: 80px; height: 80px; flex-shrink: 0;
      border-radius: 8px;
      background: rgba(128,128,128,0.06);
      box-shadow: ${n};
    "></div>
    <div style="flex: 1; min-width: 0;">
      <div style="${i.monoSm} display: block; margin-bottom: 0.25rem;">${e}</div>
      <div style="${i.caption} font-weight: 600; margin-bottom: 0.2rem; opacity: 0.7;">${r}</div>
      <div style="${i.caption} opacity: 0.65;">${a}</div>
    </div>
    <div style="${i.monoSm} opacity: 0.65; max-width: 340px; word-break: break-all; text-align: right;">${n}</div>
  </div>
`,l={name:`Elevation Scale`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${i.h1}">Elevation</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 2rem;">Elevation tokens define the shadow scale used to communicate depth and layering across components. These are structural UX decisions — the elevation scale does not change per client theme.</p>
      <div>
        ${s.map(e=>c(e.token,e.value,e.label,e.usage))}
      </div>
    </div>
  `},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Elevation Scale',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Elevation</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">Elevation tokens define the shadow scale used to communicate depth and layering across components. These are structural UX decisions — the elevation scale does not change per client theme.</p>
      <div>
        \${elevationTokens.map(i => card(i.token, i.value, i.label, i.usage))}
      </div>
    </div>
  \`
}`,...l.parameters?.docs?.source}}},u=[`ElevationScale`]}))();export{l as ElevationScale,u as __namedExportsOrder,r as default};