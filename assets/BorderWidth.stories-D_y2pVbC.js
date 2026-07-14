import{i as e}from"./preload-helper-xPQekRTU.js";import{K as t,V as n}from"./iframe-J4X5mQMa.js";var r,i,a,o,s,c,l,u,d;e((()=>{n(),r={title:`Foundations/Border Width`},i={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},a=`680px`,o=`960px`,s=[{token:`--border-width-none`,value:`0px`,comment:`removes border`},{token:`--border-width-xs`,value:`1px`,comment:`default/most common`},{token:`--border-width-sm`,value:`2px`,comment:`emphasized`},{token:`--border-width-md`,value:`3px`,comment:`heavy emphasis`},{token:`--border-width-lg`,value:`4px`,comment:`decorative`},{token:`--border-width-xl`,value:`6px`,comment:`maximum weight`}],c=(e,t)=>`
    width: 64px;
    height: 40px;
    border: var(${e}, ${t}) solid currentColor;
    border-radius: 4px;
    opacity: 0.7;
    flex-shrink: 0;
  `,l=(e,n,r)=>t`
  <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
    <td style="padding: 0.75rem; ${i.monoSm} color: inherit; white-space: nowrap;">${e}</td>
    <td style="padding: 0.75rem; ${i.monoSm} opacity: 0.65; width: 52px;">${n}</td>
    <td style="padding: 0.75rem; ${i.caption} opacity: 0.65;">${r}</td>
    <td style="padding: 0.75rem;">
      <div style="${c(e,n)}"></div>
    </td>
  </tr>
`,u={name:`Border Width Scale`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="${i.h1}">Border Width</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 2rem;">
        Border width tokens define the thickness scale for element borders. These are structural tokens — the same scale applies across all client themes.
      </p>

      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600; width: 52px;">Value</th>
            <th style="padding: 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Usage</th>
            <th style="padding: 0.75rem; text-align: left; ${i.caption} opacity: 0.75; font-weight: 600;">Preview</th>
          </tr>
        </thead>
        <tbody>
          ${s.map(e=>l(e.token,e.value,e.comment))}
        </tbody>
      </table>

      <h2 style="${i.h2} margin-top: 3rem;">Usage Notes</h2>
      <ul style="${i.bodySm} opacity: 0.75; max-width: ${a}; margin: 0.5rem 0 0 1.25rem; padding: 0;">
        <li style="margin-bottom: 0.25rem;"><strong>xs (1px)</strong> — Default for most input borders, cards, and subtle separators</li>
        <li style="margin-bottom: 0.25rem;"><strong>sm (2px)</strong> — Focus rings, active states, emphasized containers</li>
        <li style="margin-bottom: 0.25rem;"><strong>md–xl (3–6px)</strong> — Decorative elements, progress indicators, heavy emphasis</li>
      </ul>

      <h2 style="${i.h2} margin-top: 3rem;">Relationship to Dividers</h2>
      <p style="${i.bodySm} opacity: 0.75; max-width: ${a};">
        Dividers (horizontal/vertical separators) use <strong>size tokens</strong> for their thickness, not border-width tokens. A 1px horizontal divider uses <code>height: var(--size-px)</code>, while a 1px border uses <code>border-width: var(--border-width-xs)</code>.
      </p>
    </div>
  `},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Border Width Scale',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">
      <h1 style="\${t.h1}">Border Width</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Border width tokens define the thickness scale for element borders. These are structural tokens — the same scale applies across all client themes.
      </p>

      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Token</th>
            <th style="padding: 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600; width: 52px;">Value</th>
            <th style="padding: 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Usage</th>
            <th style="padding: 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Preview</th>
          </tr>
        </thead>
        <tbody>
          \${borderWidthTokens.map(i => row(i.token, i.value, i.comment))}
        </tbody>
      </table>

      <h2 style="\${t.h2} margin-top: 3rem;">Usage Notes</h2>
      <ul style="\${t.bodySm} opacity: 0.75; max-width: \${PROSE_MAX}; margin: 0.5rem 0 0 1.25rem; padding: 0;">
        <li style="margin-bottom: 0.25rem;"><strong>xs (1px)</strong> — Default for most input borders, cards, and subtle separators</li>
        <li style="margin-bottom: 0.25rem;"><strong>sm (2px)</strong> — Focus rings, active states, emphasized containers</li>
        <li style="margin-bottom: 0.25rem;"><strong>md–xl (3–6px)</strong> — Decorative elements, progress indicators, heavy emphasis</li>
      </ul>

      <h2 style="\${t.h2} margin-top: 3rem;">Relationship to Dividers</h2>
      <p style="\${t.bodySm} opacity: 0.75; max-width: \${PROSE_MAX};">
        Dividers (horizontal/vertical separators) use <strong>size tokens</strong> for their thickness, not border-width tokens. A 1px horizontal divider uses <code>height: var(--size-px)</code>, while a 1px border uses <code>border-width: var(--border-width-xs)</code>.
      </p>
    </div>
  \`
}`,...u.parameters?.docs?.source}}},d=[`BorderWidthScale`]}))();export{u as BorderWidthScale,d as __namedExportsOrder,r as default};