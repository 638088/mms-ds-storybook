import{i as e}from"./preload-helper-xPQekRTU.js";import{K as t,V as n}from"./iframe-J4X5mQMa.js";var r,i,a,o,s,c,l,u,d,f,p;e((()=>{n(),r={title:`Foundations/Spacing`},i={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},a=`680px`,o=`960px`,s=[{token:`--spacing-0`,value:`0px`,rem:`0rem`},{token:`--spacing-px`,value:`1px`,rem:`0.0625rem`},{token:`--spacing-xs1`,value:`2px`,rem:`0.125rem`},{token:`--spacing-xs0`,value:`3px`,rem:`0.1875rem`},{token:`--spacing-xs2`,value:`4px`,rem:`0.25rem`},{token:`--spacing-sm1`,value:`8px`,rem:`0.5rem`},{token:`--spacing-sm2`,value:`12px`,rem:`0.75rem`},{token:`--spacing-md1`,value:`16px`,rem:`1rem`},{token:`--spacing-md2`,value:`20px`,rem:`1.25rem`},{token:`--spacing-lg1`,value:`24px`,rem:`1.5rem`},{token:`--spacing-lg-mid`,value:`28px`,rem:`1.75rem`},{token:`--spacing-lg2`,value:`32px`,rem:`2rem`},{token:`--spacing-xl1`,value:`40px`,rem:`2.5rem`},{token:`--spacing-xl2`,value:`48px`,rem:`3rem`},{token:`--spacing-xl3`,value:`56px`,rem:`3.5rem`},{token:`--spacing-xxl1`,value:`64px`,rem:`4rem`},{token:`--spacing-xxl2`,value:`72px`,rem:`4.5rem`},{token:`--spacing-xxl3`,value:`96px`,rem:`6rem`},{token:`--spacing-xxl4`,value:`128px`,rem:`8rem`}],c=128,l=320,u=(e,t)=>{let n=parseInt(t,10);return`background: currentColor; height: 16px; border-radius: 3px; width: var(${e}, ${n===0?2:Math.round(n/c*l)}px); max-width: ${l}px; min-width: ${n===0?2:0}px; opacity: ${n===0?.15:.5};`},d=(e,n,r)=>t`
  <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
    <td style="padding: 0.5rem 0.75rem; ${i.monoSm} color: inherit; white-space: nowrap;">${e}</td>
    <td style="padding: 0.5rem 0.75rem; ${i.monoSm} opacity: 0.65; width: 52px;">${n}</td>
    <td style="padding: 0.5rem 0.75rem; ${i.monoSm} opacity: 0.65; width: 72px;">${r}</td>
    <td style="padding: 0.5rem 0.75rem;">
      <div style="${u(e,n)}"></div>
    </td>
  </tr>
`,f={name:`Spacing Scale`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${i.h1}">Spacing</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 2rem;">Spacing tokens define a predefined scale for arranging elements within layouts and components. These values are shared across all engagements — they represent structural UX decisions, not brand decisions — ensuring consistent rhythm and density regardless of which client theme is applied.</p>

      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600; width: 52px;">px</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600; width: 72px;">rem</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600; width: ${344}px;"></th>
          </tr>
        </thead>
        <tbody>
          ${s.map(e=>d(e.token,e.value,e.rem))}
        </tbody>
      </table>
    </div>
  `},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Spacing Scale',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Spacing</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">Spacing tokens define a predefined scale for arranging elements within layouts and components. These values are shared across all engagements — they represent structural UX decisions, not brand decisions — ensuring consistent rhythm and density regardless of which client theme is applied.</p>

      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 52px;">px</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 72px;">rem</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: \${BAR_MAX_WIDTH + 24}px;"></th>
          </tr>
        </thead>
        <tbody>
          \${spacingTokens.map(i => row(i.token, i.value, i.rem))}
        </tbody>
      </table>
    </div>
  \`
}`,...f.parameters?.docs?.source}}},p=[`SpacingScale`]}))();export{f as SpacingScale,p as __namedExportsOrder,r as default};