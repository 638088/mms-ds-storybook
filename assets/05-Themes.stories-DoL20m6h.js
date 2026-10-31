import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{n as r,r as i,t as a}from"./iframe-BrFFNKAP.js";import{r as o,t as s}from"./theme-constraints-BnNpJNRe.js";import{a as c,c as l,d as u,n as d,o as f,r as p,u as m}from"./doc-styles-DkvR_Qyb.js";var h,g,_,v,y,b,x,S;e((()=>{n(),o(),r(),l(),h=u.mono,g={default:`Internal only — neutral greyscale used while developing a component before any brand exists.`,maximus:`Maximus corporate brand. The starting brand for prototypes and every example in these docs.`,ves:`Veterans Evaluation Services, a Maximus company — engagement rooted in va.gov's visual language.`,"uss-oh-dvs":`Ohio Department of Veterans Services.`,dow:`Department of War (DOW) engagement.`},_={default:[`—`,`system-ui`],maximus:[`Avenir Next`,`Arial`],ves:[`Source Sans Pro (Roboto Mono for figures)`,`system-ui`],"uss-oh-dvs":[`Source Sans 3`,`system-ui`],dow:[`Avenir Next`,`Arial`]},v=[`default`],y=i(Object.keys(s).filter(e=>!v.includes(e))),b={title:`Developer Guide/Themes`},x={name:`Themes`,render:()=>t`
    <div data-theme=${p} data-mode=${f()} style=${d}>
      <h1 style="${u.h1}">Themes</h1>
      <p style="${u.body} ${c.muted} margin-bottom: ${m.subsection};">
        A theme is one client's brand expressed as tokens — colors and fonts, nothing else.
        Spacing, radius, elevation, motion and focus rings are structural and identical in every
        theme.
      </p>

      <h2 style="${u.h2}">Selecting a theme</h2>

      <p style="${u.body} margin-bottom: ${m.content};">
        Set <code style=${h}>data-theme</code> on the
        <code style=${h}>&lt;html&gt;</code> element. Everything inside inherits it, and
        switching is that one attribute — never a rebuild.
      </p>

      <pre style="${c.pre}"><code>&lt;html lang="en" data-theme="ves"&gt;</code></pre>

      <p style="${u.body} margin-bottom: ${m.subsection};">
        The standalone bundle carries every theme, so nothing further is installed. A page that
        sets no <code style=${h}>data-theme</code> renders on
        <strong>Maximus</strong>. With a bundler, import the theme you ship —
        <code style=${h}>@mms/design-system/themes/&lt;name&gt;</code>.
      </p>

      <h2 style="${u.h2}">
        Available themes
      </h2>

      <table style="${c.table} margin-bottom: ${m.subsection};">
        <thead>
          <tr>
            <th style="${c.th}">Theme</th>
            <th style="${c.th}"><code style=${h}>data-theme</code></th>
            <th style="${c.th}">Used for</th>
          </tr>
        </thead>
        <tbody>
          ${y.map(e=>t`
              <tr>
                <td style="${c.td}"><strong>${a[e]}</strong></td>
                <td style="${c.td}"><code style=${h}>${e}</code></td>
                <td style="${c.td}">${g[e]}</td>
              </tr>
            `)}
        </tbody>
      </table>

      <h2 style="${u.h2}">Typography</h2>

      <p style="${u.body} margin-bottom: ${m.content};">
        A theme names its brand typeface, and the package ships the font files for it. Import
        <code style=${h}>@mms/design-system/fonts.css</code> once and every theme's face is
        available. Each <code style=${h}>--font-family-*</code> stack still lists a
        widely-installed substitute after the brand face, so type stays readable while the font
        loads or if the stylesheet is not imported at all.
      </p>

      <table style="${c.table} margin-bottom: ${m.content};">
        <thead>
          <tr>
            <th style="${c.th}">Theme</th>
            <th style="${c.th}">Brand typeface</th>
            <th style="${c.th}">Falls back to</th>
          </tr>
        </thead>
        <tbody>
          ${y.map(e=>t`
              <tr>
                <td style="${c.td}"><strong>${a[e]}</strong></td>
                <td style="${c.td}">${_[e][0]}</td>
                <td style="${c.td}">${_[e][1]}</td>
              </tr>
            `)}
        </tbody>
      </table>

      <p style="${u.body} margin-bottom: ${m.subsection};">
        <strong>Licensing is yours, not the platform's.</strong> The package carries the
        reference brand implementation so a component looks right the moment you install it.
        A team delivering a branded engagement is responsible for the font entitlement covering
        that deployment. Source Sans Pro, Source Sans 3 and Roboto Mono are OFL 1.1 / Apache 2.0
        and carry no restriction; Avenir Next is a commercial face and needs a licence you hold.
      </p>

      <h2 style="${u.h2}">Dark mode</h2>

      <p style="${u.body} margin-bottom: ${m.content};">
        Every theme is light and dark, always. Dark is not a separate theme to select and not a
        feature to switch on — a reader whose operating system is set to dark gets the dark
        palette, and the contrast ratios hold either way. That is an accessibility obligation,
        not an option.
      </p>

      <p style="${u.body} margin-bottom: ${m.content};">
        Pin it only when the design calls for it. Adding
        <code style=${h}>data-mode</code> opts the page out of following the reader entirely:
      </p>

      <pre style="${c.pre}"><code>&lt;html lang="en" data-theme="maximus" data-mode="dark"&gt;</code></pre>

      <p style="${u.body}">
        On the bundler path the two sheets are published separately, so import both —
        <code style=${h}>themes/maximus</code> <em>and</em>
        <code style=${h}>themes/maximus-dark</code>. They are a pair, not a choice.
      </p>
    </div>
  `},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Themes',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Themes</h1>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.subsection};">
        A theme is one client's brand expressed as tokens — colors and fonts, nothing else.
        Spacing, radius, elevation, motion and focus rings are structural and identical in every
        theme.
      </p>

      <h2 style="\${t.h2}">Selecting a theme</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Set <code style=\${KBD}>data-theme</code> on the
        <code style=\${KBD}>&lt;html&gt;</code> element. Everything inside inherits it, and
        switching is that one attribute — never a rebuild.
      </p>

      <pre style="\${doc.pre}"><code>&lt;html lang="en" data-theme="ves"&gt;</code></pre>

      <p style="\${t.body} margin-bottom: \${space.subsection};">
        The standalone bundle carries every theme, so nothing further is installed. A page that
        sets no <code style=\${KBD}>data-theme</code> renders on
        <strong>Maximus</strong>. With a bundler, import the theme you ship —
        <code style=\${KBD}>@mms/design-system/themes/&lt;name&gt;</code>.
      </p>

      <h2 style="\${t.h2}">
        Available themes
      </h2>

      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Theme</th>
            <th style="\${doc.th}"><code style=\${KBD}>data-theme</code></th>
            <th style="\${doc.th}">Used for</th>
          </tr>
        </thead>
        <tbody>
          \${THEMES.map(theme => html\`
              <tr>
                <td style="\${doc.td}"><strong>\${BRAND_LABELS[theme]}</strong></td>
                <td style="\${doc.td}"><code style=\${KBD}>\${theme}</code></td>
                <td style="\${doc.td}">\${THEME_PURPOSE[theme]}</td>
              </tr>
            \`)}
        </tbody>
      </table>

      <h2 style="\${t.h2}">Typography</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        A theme names its brand typeface, and the package ships the font files for it. Import
        <code style=\${KBD}>@mms/design-system/fonts.css</code> once and every theme's face is
        available. Each <code style=\${KBD}>--font-family-*</code> stack still lists a
        widely-installed substitute after the brand face, so type stays readable while the font
        loads or if the stylesheet is not imported at all.
      </p>

      <table style="\${doc.table} margin-bottom: \${space.content};">
        <thead>
          <tr>
            <th style="\${doc.th}">Theme</th>
            <th style="\${doc.th}">Brand typeface</th>
            <th style="\${doc.th}">Falls back to</th>
          </tr>
        </thead>
        <tbody>
          \${THEMES.map(theme => html\`
              <tr>
                <td style="\${doc.td}"><strong>\${BRAND_LABELS[theme]}</strong></td>
                <td style="\${doc.td}">\${THEME_TYPEFACE[theme][0]}</td>
                <td style="\${doc.td}">\${THEME_TYPEFACE[theme][1]}</td>
              </tr>
            \`)}
        </tbody>
      </table>

      <p style="\${t.body} margin-bottom: \${space.subsection};">
        <strong>Licensing is yours, not the platform's.</strong> The package carries the
        reference brand implementation so a component looks right the moment you install it.
        A team delivering a branded engagement is responsible for the font entitlement covering
        that deployment. Source Sans Pro, Source Sans 3 and Roboto Mono are OFL 1.1 / Apache 2.0
        and carry no restriction; Avenir Next is a commercial face and needs a licence you hold.
      </p>

      <h2 style="\${t.h2}">Dark mode</h2>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Every theme is light and dark, always. Dark is not a separate theme to select and not a
        feature to switch on — a reader whose operating system is set to dark gets the dark
        palette, and the contrast ratios hold either way. That is an accessibility obligation,
        not an option.
      </p>

      <p style="\${t.body} margin-bottom: \${space.content};">
        Pin it only when the design calls for it. Adding
        <code style=\${KBD}>data-mode</code> opts the page out of following the reader entirely:
      </p>

      <pre style="\${doc.pre}"><code>&lt;html lang="en" data-theme="maximus" data-mode="dark"&gt;</code></pre>

      <p style="\${t.body}">
        On the bundler path the two sheets are published separately, so import both —
        <code style=\${KBD}>themes/maximus</code> <em>and</em>
        <code style=\${KBD}>themes/maximus-dark</code>. They are a pair, not a choice.
      </p>
    </div>
  \`
}`,...x.parameters?.docs?.source}}},S=[`Themes`]}))();export{x as Themes,S as __namedExportsOrder,b as default};