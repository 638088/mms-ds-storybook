import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-CBo78ikN.js";import{r,t as i}from"./theme-constraints-xITgb_Dw.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{n(),r(),a=`960px`,o=`background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin: 0 0 1.5rem; border: 1px solid rgba(128,128,128,0.2);`,s=`font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;`,c=`background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace; font-size: 0.9em;`,l=`padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); vertical-align: top;`,u=`text-align: left; ${l}`,d={default:`Default`,maximus:`Maximus`,"va-gov":`VA.gov`,"uss-oh-dvs":`Ohio DVS`},f={default:`Internal only — neutral greyscale used while developing a component before any brand exists.`,maximus:`Maximus corporate brand. The starting brand for prototypes and every example in these docs.`,"va-gov":`Virginia state government engagement.`,"uss-oh-dvs":`Ohio Department of Veterans Services.`},p={default:[`—`,`system-ui`],maximus:[`Avenir Next LT Pro`,`Arial`],"va-gov":[`Source Sans Pro (Roboto Mono for figures)`,`system-ui`],"uss-oh-dvs":[`Source Sans 3`,`system-ui`]},m=[`default`],h=Object.keys(i).filter(e=>!m.includes(e)),g={title:`Developer Guide/Themes`},_={name:`Themes`,render:()=>t`
    <div
      style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${a}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;"
    >
      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Themes</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">
        A theme is one client's brand expressed as tokens — colors and fonts, nothing else.
        Spacing, radius, elevation, motion and focus rings are structural and identical in every
        theme.
      </p>

      <h2 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 700;">Selecting a theme</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Set <code style=${c}>data-theme</code> on the
        <code style=${c}>&lt;html&gt;</code> element. Everything inside inherits it, and
        switching is that one attribute — never a rebuild.
      </p>

      <pre style=${o}><code style=${s}>&lt;html lang="en" data-theme="va-gov"&gt;</code></pre>

      <p style="margin: 0 0 2rem; font-size: 0.9375rem;">
        The standalone bundle carries every theme, so nothing further is installed. A page that
        sets no <code style=${c}>data-theme</code> renders on
        <strong>Maximus</strong>. With a bundler, import the theme you ship —
        <code style=${c}>@mms/design-system/themes/&lt;name&gt;</code>.
      </p>

      <h2 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 700;">
        Available themes
      </h2>

      <table
        style="width: 100%; border-collapse: collapse; font-size: 0.875rem; margin-bottom: 2rem;"
      >
        <thead>
          <tr style="background: rgba(128,128,128,0.08);">
            <th style=${u}>Theme</th>
            <th style=${u}><code style=${c}>data-theme</code></th>
            <th style=${u}>Used for</th>
          </tr>
        </thead>
        <tbody>
          ${h.map((e,n)=>t`
              <tr style=${n%2?`background: rgba(128,128,128,0.03);`:``}>
                <td style=${l}><strong>${d[e]}</strong></td>
                <td style=${l}><code style=${c}>${e}</code></td>
                <td style=${l}>${f[e]}</td>
              </tr>
            `)}
        </tbody>
      </table>

      <h2 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 700;">Typography</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        A theme <em>names</em> its brand typeface — it does not carry the font file. Each
        <code style=${c}>--font-family-*</code> stack lists the licensed face first and a
        widely-installed substitute after it, so a machine that already has the real font uses
        it and every other machine still renders consistent, readable type.
      </p>

      <table
        style="width: 100%; border-collapse: collapse; font-size: 0.875rem; margin-bottom: 1.5rem;"
      >
        <thead>
          <tr style="background: rgba(128,128,128,0.08);">
            <th style=${u}>Theme</th>
            <th style=${u}>Brand typeface</th>
            <th style=${u}>Falls back to</th>
          </tr>
        </thead>
        <tbody>
          ${h.map((e,n)=>t`
              <tr style=${n%2?`background: rgba(128,128,128,0.03);`:``}>
                <td style=${l}><strong>${d[e]}</strong></td>
                <td style=${l}>${p[e][0]}</td>
                <td style=${l}>${p[e][1]}</td>
              </tr>
            `)}
        </tbody>
      </table>

      <p style="margin: 0 0 2rem; font-size: 0.9375rem;">
        Font files are licensed per brand, so shipping them is a licensing question rather than
        a technical one and they stay out of the package. To render the real face, load it the
        way you already load fonts — a <code style=${c}>@font-face</code> rule or your
        brand's hosted kit — declaring the family name exactly as written above. Nothing else
        changes: the tokens are already pointing at it.
      </p>

      <h2 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 700;">Dark mode</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Every theme is light and dark, always. Dark is not a separate theme to select and not a
        feature to switch on — a reader whose operating system is set to dark gets the dark
        palette, and the contrast ratios hold either way. That is an accessibility obligation,
        not an option.
      </p>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Pin it only when the design calls for it. Adding
        <code style=${c}>data-mode</code> opts the page out of following the reader entirely:
      </p>

      <pre
        style=${o}
      ><code style=${s}>&lt;html lang="en" data-theme="maximus" data-mode="dark"&gt;</code></pre>

      <p style="margin: 0; font-size: 0.9375rem;">
        On the bundler path the two sheets are published separately, so import both —
        <code style=${c}>themes/maximus</code> <em>and</em>
        <code style=${c}>themes/maximus-dark</code>. They are a pair, not a choice.
      </p>
    </div>
  `},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Themes',
  render: () => html\`
    <div
      style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;"
    >
      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Themes</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">
        A theme is one client's brand expressed as tokens — colors and fonts, nothing else.
        Spacing, radius, elevation, motion and focus rings are structural and identical in every
        theme.
      </p>

      <h2 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 700;">Selecting a theme</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Set <code style=\${KBD}>data-theme</code> on the
        <code style=\${KBD}>&lt;html&gt;</code> element. Everything inside inherits it, and
        switching is that one attribute — never a rebuild.
      </p>

      <pre style=\${PRE}><code style=\${CODE}>&lt;html lang="en" data-theme="va-gov"&gt;</code></pre>

      <p style="margin: 0 0 2rem; font-size: 0.9375rem;">
        The standalone bundle carries every theme, so nothing further is installed. A page that
        sets no <code style=\${KBD}>data-theme</code> renders on
        <strong>Maximus</strong>. With a bundler, import the theme you ship —
        <code style=\${KBD}>@mms/design-system/themes/&lt;name&gt;</code>.
      </p>

      <h2 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 700;">
        Available themes
      </h2>

      <table
        style="width: 100%; border-collapse: collapse; font-size: 0.875rem; margin-bottom: 2rem;"
      >
        <thead>
          <tr style="background: rgba(128,128,128,0.08);">
            <th style=\${TH}>Theme</th>
            <th style=\${TH}><code style=\${KBD}>data-theme</code></th>
            <th style=\${TH}>Used for</th>
          </tr>
        </thead>
        <tbody>
          \${THEMES.map((theme, index) => html\`
              <tr style=\${index % 2 ? 'background: rgba(128,128,128,0.03);' : ''}>
                <td style=\${TD}><strong>\${THEME_LABELS[theme]}</strong></td>
                <td style=\${TD}><code style=\${KBD}>\${theme}</code></td>
                <td style=\${TD}>\${THEME_PURPOSE[theme]}</td>
              </tr>
            \`)}
        </tbody>
      </table>

      <h2 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 700;">Typography</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        A theme <em>names</em> its brand typeface — it does not carry the font file. Each
        <code style=\${KBD}>--font-family-*</code> stack lists the licensed face first and a
        widely-installed substitute after it, so a machine that already has the real font uses
        it and every other machine still renders consistent, readable type.
      </p>

      <table
        style="width: 100%; border-collapse: collapse; font-size: 0.875rem; margin-bottom: 1.5rem;"
      >
        <thead>
          <tr style="background: rgba(128,128,128,0.08);">
            <th style=\${TH}>Theme</th>
            <th style=\${TH}>Brand typeface</th>
            <th style=\${TH}>Falls back to</th>
          </tr>
        </thead>
        <tbody>
          \${THEMES.map((theme, index) => html\`
              <tr style=\${index % 2 ? 'background: rgba(128,128,128,0.03);' : ''}>
                <td style=\${TD}><strong>\${THEME_LABELS[theme]}</strong></td>
                <td style=\${TD}>\${THEME_TYPEFACE[theme][0]}</td>
                <td style=\${TD}>\${THEME_TYPEFACE[theme][1]}</td>
              </tr>
            \`)}
        </tbody>
      </table>

      <p style="margin: 0 0 2rem; font-size: 0.9375rem;">
        Font files are licensed per brand, so shipping them is a licensing question rather than
        a technical one and they stay out of the package. To render the real face, load it the
        way you already load fonts — a <code style=\${KBD}>@font-face</code> rule or your
        brand's hosted kit — declaring the family name exactly as written above. Nothing else
        changes: the tokens are already pointing at it.
      </p>

      <h2 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 700;">Dark mode</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Every theme is light and dark, always. Dark is not a separate theme to select and not a
        feature to switch on — a reader whose operating system is set to dark gets the dark
        palette, and the contrast ratios hold either way. That is an accessibility obligation,
        not an option.
      </p>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Pin it only when the design calls for it. Adding
        <code style=\${KBD}>data-mode</code> opts the page out of following the reader entirely:
      </p>

      <pre
        style=\${PRE}
      ><code style=\${CODE}>&lt;html lang="en" data-theme="maximus" data-mode="dark"&gt;</code></pre>

      <p style="margin: 0; font-size: 0.9375rem;">
        On the bundler path the two sheets are published separately, so import both —
        <code style=\${KBD}>themes/maximus</code> <em>and</em>
        <code style=\${KBD}>themes/maximus-dark</code>. They are a pair, not a choice.
      </p>
    </div>
  \`
}`,..._.parameters?.docs?.source}}},v=[`Themes`]}))();export{_ as Themes,v as __namedExportsOrder,g as default};