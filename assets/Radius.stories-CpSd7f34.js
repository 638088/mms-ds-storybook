import{i as e}from"./preload-helper-xPQekRTU.js";import{K as t,V as n}from"./iframe-DISs8Z3q.js";var r,i,a,o,s,c,l,u,d;e((()=>{n(),r={title:`Foundations/Radius`},i={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},a=`680px`,o=`960px`,s=[{token:`--radius-none`,value:`0px`,rem:`0rem`},{token:`--radius-xs`,value:`2px`,rem:`0.125rem`},{token:`--radius-sm`,value:`4px`,rem:`0.25rem`},{token:`--radius-md`,value:`8px`,rem:`0.5rem`},{token:`--radius-lg`,value:`16px`,rem:`1rem`},{token:`--radius-full`,value:`1000px`,rem:`—`}],c=e=>`width: 56px; height: 56px; border-radius: ${Math.min(parseInt(e,10),24)}px; background: currentColor; opacity: 0.15; flex-shrink: 0;`,l=(e,n,r)=>t`
  <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
    <td style="padding: 0.75rem; ${i.monoSm} color: inherit; white-space: nowrap;">${e}</td>
    <td style="padding: 0.75rem; ${i.monoSm} opacity: 0.65; width: 64px;">${n}</td>
    <td style="padding: 0.75rem; ${i.monoSm} opacity: 0.65; width: 64px;">${r}</td>
    <td style="padding: 0.75rem;">
      <div style="${c(n)}"></div>
    </td>
  </tr>
`,u={name:`Radius Scale`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${i.h1}">Radius</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 2rem;">Border radius tokens define the corner curvature scale used across all components. These are structural UX decisions shared across all engagements — the radius scale does not change per client theme.</p>

      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600; width: 64px;">px</th>
            <th style="padding: 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600; width: 64px;">rem</th>
            <th style="padding: 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;"></th>
          </tr>
        </thead>
        <tbody>
          ${s.map(e=>l(e.token,e.value,e.rem))}
        </tbody>
      </table>
    </div>
  `},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Radius Scale',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Radius</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">Border radius tokens define the corner curvature scale used across all components. These are structural UX decisions shared across all engagements — the radius scale does not change per client theme.</p>

      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 64px;">px</th>
            <th style="padding: 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 64px;">rem</th>
            <th style="padding: 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;"></th>
          </tr>
        </thead>
        <tbody>
          \${radiusTokens.map(i => row(i.token, i.value, i.rem))}
        </tbody>
      </table>
    </div>
  \`
}`,...u.parameters?.docs?.source}}},d=[`RadiusScale`]}))();export{u as RadiusScale,d as __namedExportsOrder,r as default};