import{i as e}from"./preload-helper-BdFrVu1K.js";import{o as t,t as n}from"./iframe-BmVhdvF8.js";var r,i,a,o,s,c,l,u,d,f,p;e((()=>{n(),r={title:`Foundations/Size`},i={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},a=`680px`,o=`960px`,s=[{token:`--size-0`,value:`0px`,comment:`zero utility`},{token:`--size-px`,value:`1px`,comment:`borders, hairlines`},{token:`--size-xs1`,value:`2px`,comment:``},{token:`--size-xs0`,value:`3px`,comment:`small details`},{token:`--size-xs2`,value:`4px`,comment:``},{token:`--size-sm0`,value:`6px`,comment:`small elements`},{token:`--size-sm1`,value:`8px`,comment:`radio dot, small icons`},{token:`--size-sm2`,value:`12px`,comment:`small icons, indicators`},{token:`--size-md1`,value:`16px`,comment:`icons, checkbox indicator`},{token:`--size-md2`,value:`20px`,comment:`toggle thumb`},{token:`--size-lg1`,value:`24px`,comment:`icons, touch areas`},{token:`--size-lg-28`,value:`28px`,comment:`accordion/grid indent`},{token:`--size-lg2`,value:`32px`,comment:`desktop touch target`},{token:`--size-xl1`,value:`40px`,comment:`large controls`},{token:`--size-xl-touch`,value:`44px`,comment:`WCAG mobile touch target`},{token:`--size-xl2`,value:`48px`,comment:`toggle width, controls`},{token:`--size-xl3`,value:`56px`,comment:`larger controls`},{token:`--size-xxl1`,value:`64px`,comment:`avatars`},{token:`--size-xxl2`,value:`80px`,comment:`large avatars`},{token:`--size-xxl3`,value:`96px`,comment:`extra large avatars`},{token:`--size-xxl4`,value:`128px`,comment:`hero elements`}],c=128,l=320,u=(e,t)=>{let n=parseInt(t,10);return`background: currentColor; height: 16px; border-radius: 3px; width: var(${e}, ${n===0?2:Math.round(n/c*l)}px); max-width: ${l}px; min-width: ${n===0?2:0}px; opacity: 0.5;`},d=(e,n,r)=>t`
  <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
    <td style="padding: 0.5rem 0.75rem; ${i.monoSm} color: inherit; white-space: nowrap;">${e}</td>
    <td style="padding: 0.5rem 0.75rem; ${i.monoSm} opacity: 0.65; width: 52px;">${n}</td>
    <td style="padding: 0.5rem 0.75rem; ${i.caption} opacity: 0.65;">${r}</td>
    <td style="padding: 0.5rem 0.75rem;">
      <div style="${u(e,n)}"></div>
    </td>
  </tr>
`,f={name:`Size Scale`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${i.h1}">Size</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1rem;">
        Size tokens define dimensions for interactive elements — icons, controls, touch targets, and avatars. 
        These are structural UX decisions that ensure consistent component sizing across all themes.
      </p>
      <p style="${i.bodySm} opacity: 0.7; max-width: ${a}; margin-bottom: 2rem;">
        The scale mirrors spacing tokens where values overlap, with additions for WCAG touch targets (44px) 
        and common component sizes (6px, 80px). Component-specific dimensions (e.g., date picker width) 
        stay at the component level — not here.
      </p>

      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600; width: 52px;">px</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Use case</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600; width: ${344}px;"></th>
          </tr>
        </thead>
        <tbody>
          ${s.map(e=>d(e.token,e.value,e.comment))}
        </tbody>
      </table>

      <h2 style="${i.h2} margin-top: 3rem;">Relationship to Spacing</h2>
      <p style="${i.bodySm} opacity: 0.75; max-width: ${a};">
        Size and spacing tokens share the same value scale but serve different purposes:
      </p>
      <ul style="${i.bodySm} opacity: 0.75; max-width: ${a}; margin: 0.5rem 0 0 1.25rem; padding: 0;">
        <li style="margin-bottom: 0.25rem;"><strong>Spacing</strong> — gaps, margins (between elements), padding (within elements)</li>
        <li style="margin-bottom: 0.25rem;"><strong>Size</strong> — width, height, dimensions (of elements)</li>
      </ul>
      <p style="${i.monoSm} opacity: 0.6; max-width: ${a}; margin-top: 1rem;">
        Example: A 32px icon uses <code>--size-lg2</code>, but the 32px gap around it uses <code>--spacing-lg2</code>.
      </p>
    </div>
  `},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Size Scale',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Size</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Size tokens define dimensions for interactive elements — icons, controls, touch targets, and avatars. 
        These are structural UX decisions that ensure consistent component sizing across all themes.
      </p>
      <p style="\${t.bodySm} opacity: 0.7; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        The scale mirrors spacing tokens where values overlap, with additions for WCAG touch targets (44px) 
        and common component sizes (6px, 80px). Component-specific dimensions (e.g., date picker width) 
        stay at the component level — not here.
      </p>

      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 52px;">px</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Use case</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: \${BAR_MAX_WIDTH + 24}px;"></th>
          </tr>
        </thead>
        <tbody>
          \${sizeTokens.map(i => row(i.token, i.value, i.comment))}
        </tbody>
      </table>

      <h2 style="\${t.h2} margin-top: 3rem;">Relationship to Spacing</h2>
      <p style="\${t.bodySm} opacity: 0.75; max-width: \${PROSE_MAX};">
        Size and spacing tokens share the same value scale but serve different purposes:
      </p>
      <ul style="\${t.bodySm} opacity: 0.75; max-width: \${PROSE_MAX}; margin: 0.5rem 0 0 1.25rem; padding: 0;">
        <li style="margin-bottom: 0.25rem;"><strong>Spacing</strong> — gaps, margins (between elements), padding (within elements)</li>
        <li style="margin-bottom: 0.25rem;"><strong>Size</strong> — width, height, dimensions (of elements)</li>
      </ul>
      <p style="\${t.monoSm} opacity: 0.6; max-width: \${PROSE_MAX}; margin-top: 1rem;">
        Example: A 32px icon uses <code>--size-lg2</code>, but the 32px gap around it uses <code>--spacing-lg2</code>.
      </p>
    </div>
  \`
}`,...f.parameters?.docs?.source}}},p=[`SizeScale`]}))();export{f as SizeScale,p as __namedExportsOrder,r as default};