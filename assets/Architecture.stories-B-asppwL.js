import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{t as r}from"./mms-card.component-Ae9XIj4r.js";import{a as i,c as a,d as o,n as s,o as c,r as l,u}from"./doc-styles-DkvR_Qyb.js";import{n as d,r as f}from"./a11y-outcome-B57XZvCQ.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{n(),r(),a(),d(),p={AVAILABLE:`PASS`,"FUTURE STATE":`N/A`,"TO BE DETERMINED":`MANUAL`},m=`color: var(--color-text-on-muted);`,h=`${o.mono} margin-bottom: var(--spacing-xs1);`,g=`${i.label} margin-top: var(--spacing-sm2); margin-bottom: var(--spacing-xs2);`,_=`${i.label} margin-bottom: var(--spacing-xs2);`,v=`${i.label} margin-bottom: var(--spacing-xs2);`,y=`${o.body} font-style: italic; margin-top: var(--spacing-sm2);`,b=`color: var(--color-text-muted); display: flex; align-items: center; justify-content: center; padding: 0 var(--spacing-xs2); flex-shrink: 0;`,x=`text-align: center; color: var(--color-text-muted); margin: var(--spacing-xs2) 0;`,S=`width: var(--spacing-sm2); height: var(--spacing-sm2); border-radius: var(--radius-xs); border-width: var(--border-width-sm); border-style: solid;`,C=`background: var(--color-utility-caution-muted); ${m} border: var(--border-width-sm) solid var(--color-utility-caution-stroke); border-radius: var(--radius-md); padding: var(--spacing-sm1) var(--spacing-sm2);`,w=`background: var(--color-secondary-2); border: var(--border-width-xs) solid var(--color-secondary-6); border-radius: var(--radius-sm); padding: var(--spacing-xs2) var(--spacing-sm1);`,T=`background: var(--color-utility-success-muted); ${m} border: var(--border-width-sm) solid var(--color-utility-success-stroke); border-radius: var(--radius-md); padding: var(--spacing-sm1) var(--spacing-sm2);`,E=`background: var(--color-primary-2); border: var(--border-width-xs) solid var(--color-primary-6); border-radius: var(--radius-sm); padding: var(--spacing-xs2) var(--spacing-sm1);`,D=`background: var(--color-surface-raised); border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-sm); padding: var(--spacing-xs2) var(--spacing-sm1); flex: 1;`,O={title:`Introduction/Architecture`},k={name:`Architecture`,render:()=>t`
    <div data-theme=${l} data-mode=${c()} style=${s}>

      <h1 style="${o.h1}">Platform Architecture</h1>
      <p style="${o.body} ${i.muted} margin-bottom: ${u.subsection};">Web component core · headless token model · multi-platform distribution</p>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Architecture</h2>
      <table style="${i.table} margin-bottom: ${u.subsection};">
        <thead>
          <tr>
            <th style="${i.th}">Capability</th>
            <th style="${i.th}">Approach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${i.td} font-weight: var(--font-weight-bold);">Lit Web Components</td>
            <td style="${i.td}">Framework-agnostic core. One implementation reaches React, Salesforce, AEM, Drupal, and ServiceNow.</td>
          </tr>
          <tr style="background: var(--color-surface-default);">
            <td style="${i.td} font-weight: var(--font-weight-bold);">Headless Token Model</td>
            <td style="${i.td}">Structural tokens fixed. Each engagement gets a standalone brand sheet — not overrides.</td>
          </tr>
          <tr>
            <td style="${i.td} font-weight: var(--font-weight-bold);">WCAG Compliant</td>
            <td style="${i.td}">Section 508 for federal engagements; ADA Title II for state engagements. Enforced structurally via token contracts.</td>
          </tr>
          <tr style="background: var(--color-surface-default);">
            <td style="${i.td} font-weight: var(--font-weight-bold);">Multi-Platform Distribution</td>
            <td style="${i.td}">@mms/components-react, @mms/aem-clientlib, @mms/drupal-module, @mms/headless-css</td>
          </tr>
        </tbody>
      </table>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Token architecture</h2>
      <p style="${o.body} ${i.muted} margin-bottom: ${u.content};">Two layers with a strict separation of concerns. Layer 1 is fixed across all engagements. Layer 2 is a standalone sheet authored per client — not overrides on top of Layer 1.</p>

      <div data-doc-diagram style="${i.frame} display: flex; margin-bottom: ${u.content};">

        <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); flex: 1 1 0; min-width: 0;">
          <div style="${v}">Layer 1 — structural + defaults</div>
          <div style="margin-bottom: var(--spacing-sm1);">Maximus-owned · complete working system</div>

          <div style="${_}">Layout &amp; motion</div>
          <div style="${h}">• spacing scale</div>
          <div style="${h}">• radius scale</div>
          <div style="${h}">• breakpoints</div>
          <div style="${h}">• grid system</div>
          <div style="${h}">• elevation scale</div>
          <div style="${h}">• motion (duration, easing)</div>

          <div style="${g}">Neutral colors</div>
          <div style="${h}">• black / white</div>
          <div style="${h}">• grayscale</div>
          <div style="${h}">• surface colors</div>

          <div style="${g}">Utility colors</div>
          <div style="${h}">• success</div>
          <div style="${h}">• error</div>
          <div style="${h}">• warning</div>
          <div style="${h}">• focus ring</div>

          <div style="${g}">Default type system</div>
          <div style="${h}">• type scale structure</div>
          <div style="${h}">• default font family</div>
          <div style="${h}">• font weight scale</div>

          <div style="${g}">Default color theme</div>
          <div style="${h}">• primary + secondary + tertiary (with scales)</div>
          <div style="${h}">• renderable without any brand sheet applied</div>

          <div style="${y}">All color tokens — neutral, utility, and default theme — must meet WCAG 2.1 AA contrast requirements in their intended usage contexts. Values TBD.</div>
        </div>

        <div style="background: var(--color-secondary-2); padding: var(--spacing-md1); flex: 1 1 0; min-width: 0;">
          <div style="${v}">Layer 2 — brand token sheets</div>
          <div style="${i.muted} margin-bottom: var(--spacing-sm1);">Client-owned · standalone sheet per engagement</div>

          <div style="${_}">Color</div>
          <div style="${h}">• color.brand.primary (with scale)</div>
          <div style="${h}">• color.brand.secondary (with scale)</div>
          <div style="${h}">• color.brand.tertiary (with scale)</div>

          <div style="${g}">Typography</div>
          <div style="${h}">• font.family.base</div>
          <div style="${h}">• font.family.heading</div>

          <div style="${y} ${i.muted}">Font families change per engagement — the type system structure (headline-1, headline-2, body-sm, body-rg, body-lg) stays fixed in Layer 1. A client swap changes the face; the hierarchy stays intact.</div>
        </div>

        <div style="padding: var(--spacing-md1); flex: 1 1 0; min-width: 0;">
          <div style="${v}">Theme packages</div>
          <div style="${i.muted} margin-bottom: var(--spacing-sm1);">One per engagement</div>
          <div style="${h}">@mms/tokens-structural</div>
          <div style="${h}">@mms/theme-default</div>
          <div style="${h}">@mms/theme-virginia</div>
          <div style="${h}">@mms/theme-federal</div>
          <div style="${h}">...</div>
        </div>

      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${u.subsection};">
        <div slot="body-content">
          <strong>Accessibility enforcement via token contracts.</strong> All color pairings (text on surface, text on primary, etc.) must meet WCAG 2.1 AA contrast requirements: 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold). Utility colors (error, success, warning) and focus ring are structural tokens — they cannot be themed away by any client engagement.
        </div>
      </mms-card>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Multi-framework distribution</h2>

      <div data-doc-diagram style="${i.panel} border: var(--border-width-xs) solid var(--color-border-subtle); margin-bottom: ${u.subsection};">

        <div style="text-align: center; margin-bottom: ${u.content};">
          <span style="${i.label}">How the DS Platform reaches every delivery target</span>
        </div>

        <div style="display: flex; gap: ${u.content}; justify-content: center; margin-bottom: ${u.content}; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: var(--spacing-sm1);"><div style="${S} background: var(--color-utility-caution-muted); border-color: var(--color-utility-caution-stroke);"></div><span style="${i.muted}">Inputs</span></div>
          <div style="display: flex; align-items: center; gap: var(--spacing-sm1);"><div style="${S} background: var(--color-primary-2); border-color: var(--color-primary-9);"></div><span style="${i.muted}">DS foundation</span></div>
          <div style="display: flex; align-items: center; gap: var(--spacing-sm1);"><div style="${S} background: var(--color-secondary-2); border-color: var(--color-secondary-7);"></div><span style="${i.muted}">DS repos</span></div>
          <div style="display: flex; align-items: center; gap: var(--spacing-sm1);"><div style="${S} background: var(--color-utility-success-muted); border-color: var(--color-utility-success-stroke);"></div><span style="${i.muted}">Delivery teams</span></div>
        </div>

        <div style="display: flex; align-items: stretch; gap: 0;">

          <div style="display: flex; flex-direction: column; gap: var(--spacing-sm1); justify-content: center;">
            <div style="${C}">
              <div style="${i.label}">Client brand guide</div>
              <div>Per-engagement identity</div>
            </div>
            <div style="${C}">
              <div style="${i.label}">Team input</div>
              <div>UX feedback</div>
            </div>
            <div style="${C}">
              <div style="${i.label}">Tech guide</div>
              <div>Tech feedback</div>
            </div>
          </div>

          <div style="${b}">→</div>

          <div style="flex: 1.4; min-width: 0; display: flex; flex-direction: column;">
            <div style="border: var(--border-width-md) solid var(--color-primary-9); border-radius: var(--radius-md); padding: var(--spacing-lg1) var(--spacing-sm2) var(--spacing-sm2); position: relative; background: var(--color-primary-2); display: flex; flex-direction: column;">
              <div style="position: absolute; top: calc(-1 * var(--spacing-md1)); left: var(--spacing-md1); background: var(--color-primary-9); color: var(--color-text-on-primary); ${i.label} padding: var(--spacing-xs1) var(--spacing-sm1); border-radius: var(--radius-lg);">DS PLATFORM</div>
              <div style="background: var(--color-primary-3); border: var(--border-width-xs) solid var(--color-primary-6); border-radius: var(--radius-md); padding: var(--spacing-sm1); display: flex; flex-direction: column; gap: var(--spacing-xs2);">
                <div style="${E}">
                  <div style="${i.label}">Structural tokens</div>
                  <div style="${i.muted}">Shared foundation: spacing, radius, motion, a11y</div>
                </div>
                <div style="${E}">
                  <div style="${i.label}">Brand tokens</div>
                  <div style="${i.muted}">Standalone sheets, one per engagement</div>
                </div>
                <div style="${E}">
                  <div style="${i.label}">Theme packages</div>
                  <div style="${i.muted}">Assembled bundles per engagement</div>
                </div>
              </div>
              <div style="${x}">↓</div>
              <div style="background: var(--color-primary-3); border: var(--border-width-sm) solid var(--color-primary-9); border-radius: var(--radius-md); padding: var(--spacing-sm1) var(--spacing-sm2);">
                <div style="${i.label} color: var(--color-primary-11);">Framework-agnostic Web Components</div>
                <div style="${i.muted} margin-top: var(--spacing-xs1);">Built on the token system · source of truth for all distribution</div>
              </div>
            </div>
            <div style="${x}">↓</div>
            <div style="border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-md); padding: var(--spacing-sm1); background: var(--color-surface-raised);">
              <div style="${i.label} ${i.muted} margin-bottom: var(--spacing-sm1);">Published surfaces</div>
              <div style="display: flex; gap: var(--spacing-sm1);">
                <div style="${D}">
                  <div style="${i.label}">DS Docs</div>
                  <div style="${i.muted}">Storybook</div>
                </div>
                <div style="${D}">
                  <div style="${i.label}">Figma Library</div>
                  <div style="${i.muted}">Design kit</div>
                </div>
              </div>
            </div>
          </div>

          <div style="${b}">→</div>

          <div style="display: flex; flex-direction: column; gap: var(--spacing-xs2); justify-content: center;">
            <div style="${w}"><div style="${i.label}">React UI Lib</div><div style="${i.muted}">Dev kit</div></div>
            <div style="${w}"><div style="${i.label}">Salesforce</div><div style="${i.muted}">TBD</div></div>
            <div style="${w}"><div style="${i.label}">ServiceNow</div><div style="${i.muted}">Widget integration</div></div>
            <div style="${w}"><div style="${i.label}">AEM Clientlib</div><div style="${i.muted}">Author kit</div></div>
            <div style="${w}"><div style="${i.label}">Drupal Module</div><div style="${i.muted}">Theme integration</div></div>
            <div style="${w}"><div style="${i.label}">Headless CSS</div><div style="${i.muted}">Stylesheet + icons</div></div>
            <div style="${w}"><div style="${i.label}">iOS / Android</div><div style="${i.muted}">Tokens only (TBD)</div></div>
          </div>

          <div style="${b}">→</div>

          <div style="display: flex; flex-direction: column; gap: var(--spacing-sm1); justify-content: center;">
            <div style="${T}"><div style="${i.label}">DXHub</div><div>Enrollment sites</div></div>
            <div style="${T}"><div style="${i.label}">Enterprise apps</div><div>Salesforce, ServiceNow</div></div>
            <div style="${T}"><div style="${i.label}">Public web</div><div>AEM, Drupal sites</div></div>
            <div style="${T}"><div style="${i.label}">Mobile apps</div><div>Tokens only (Obj-C)</div></div>
          </div>

        </div>
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Distribution packages</h2>
      <table style="${i.table}">
        <thead>
          <tr>
            <th style="${i.th}">Package</th>
            <th style="${i.th}">Consumer</th>
            <th style="${i.th}">Integration model</th>
            <th style="${i.th}">Status</th>
          </tr>
        </thead>
        <tbody>
          ${[[`@mms/components-react`,`DXHub and React apps`,`Generated React binding — typed props, React events, ref forwarding. Web component layer invisible to consumers. Ships today as @mms/design-system/react.`,`AVAILABLE`],[`@mms/salesforce`,`Salesforce`,`—`,`TO BE DETERMINED`],[`@mms/aem-clientlib`,`Adobe Experience Manager`,`Web components registered as custom elements in AEM page templates via a client library package.`,`FUTURE STATE`],[`@mms/drupal-module`,`Drupal`,`Web components consumed via Drupal module with CSS custom property theming.`,`FUTURE STATE`],[`@mms/headless-css`,`Any platform without web component support`,`Stylesheet and icon set only — token-backed CSS classes for platforms that cannot consume web components.`,`FUTURE STATE`],[`@mms/tokens-structural`,`All web platforms`,`CSS custom properties — the shared structural foundation for spacing, radius, motion, and accessibility. Ships today as @mms/design-system/tokens.css.`,`AVAILABLE`],[`@mms/ios`,`iOS`,`—`,`TO BE DETERMINED`],[`@mms/android`,`Android`,`—`,`TO BE DETERMINED`],[`@mms/theme-default`,`Dev / demo fallback`,`Brand token sheet — default visual identity for development and demos before a client engagement theme is applied. Ships today as @mms/design-system/themes/default.`,`AVAILABLE`]].map(([e,n,r,a],s)=>t`
            <tr style="${s%2?`background: var(--color-surface-default);`:``}">
              <td style="${i.td} ${o.mono}">${e}</td>
              <td style="${i.td}">${n}</td>
              <td style="${i.td}">${r}</td>
              <td style="${i.td}">${f(a,p[a])}</td>
            </tr>
          `)}
        </tbody>
      </table>
      <p style="${o.body} ${i.muted} margin-top: ${u.content};">
        <strong>Available</strong> packages ship together inside the single published @mms/design-system package today.
        Splitting them into the separate packages named above is the Phase 4 target.
      </p>

    </div>
  `},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Architecture',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Platform Architecture</h1>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.subsection};">Web component core · headless token model · multi-platform distribution</p>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Architecture</h2>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Capability</th>
            <th style="\${doc.th}">Approach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td} font-weight: var(--font-weight-bold);">Lit Web Components</td>
            <td style="\${doc.td}">Framework-agnostic core. One implementation reaches React, Salesforce, AEM, Drupal, and ServiceNow.</td>
          </tr>
          <tr style="background: var(--color-surface-default);">
            <td style="\${doc.td} font-weight: var(--font-weight-bold);">Headless Token Model</td>
            <td style="\${doc.td}">Structural tokens fixed. Each engagement gets a standalone brand sheet — not overrides.</td>
          </tr>
          <tr>
            <td style="\${doc.td} font-weight: var(--font-weight-bold);">WCAG Compliant</td>
            <td style="\${doc.td}">Section 508 for federal engagements; ADA Title II for state engagements. Enforced structurally via token contracts.</td>
          </tr>
          <tr style="background: var(--color-surface-default);">
            <td style="\${doc.td} font-weight: var(--font-weight-bold);">Multi-Platform Distribution</td>
            <td style="\${doc.td}">@mms/components-react, @mms/aem-clientlib, @mms/drupal-module, @mms/headless-css</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Token architecture</h2>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.content};">Two layers with a strict separation of concerns. Layer 1 is fixed across all engagements. Layer 2 is a standalone sheet authored per client — not overrides on top of Layer 1.</p>

      <div data-doc-diagram style="\${doc.frame} display: flex; margin-bottom: \${space.content};">

        <div style="background: var(--color-surface-sunken); padding: var(--spacing-md1); flex: 1 1 0; min-width: 0;">
          <div style="\${COL_TITLE}">Layer 1 — structural + defaults</div>
          <div style="margin-bottom: var(--spacing-sm1);">Maximus-owned · complete working system</div>

          <div style="\${GROUP_FIRST}">Layout &amp; motion</div>
          <div style="\${ITEM}">• spacing scale</div>
          <div style="\${ITEM}">• radius scale</div>
          <div style="\${ITEM}">• breakpoints</div>
          <div style="\${ITEM}">• grid system</div>
          <div style="\${ITEM}">• elevation scale</div>
          <div style="\${ITEM}">• motion (duration, easing)</div>

          <div style="\${GROUP}">Neutral colors</div>
          <div style="\${ITEM}">• black / white</div>
          <div style="\${ITEM}">• grayscale</div>
          <div style="\${ITEM}">• surface colors</div>

          <div style="\${GROUP}">Utility colors</div>
          <div style="\${ITEM}">• success</div>
          <div style="\${ITEM}">• error</div>
          <div style="\${ITEM}">• warning</div>
          <div style="\${ITEM}">• focus ring</div>

          <div style="\${GROUP}">Default type system</div>
          <div style="\${ITEM}">• type scale structure</div>
          <div style="\${ITEM}">• default font family</div>
          <div style="\${ITEM}">• font weight scale</div>

          <div style="\${GROUP}">Default color theme</div>
          <div style="\${ITEM}">• primary + secondary + tertiary (with scales)</div>
          <div style="\${ITEM}">• renderable without any brand sheet applied</div>

          <div style="\${NOTE}">All color tokens — neutral, utility, and default theme — must meet WCAG 2.1 AA contrast requirements in their intended usage contexts. Values TBD.</div>
        </div>

        <div style="background: var(--color-secondary-2); padding: var(--spacing-md1); flex: 1 1 0; min-width: 0;">
          <div style="\${COL_TITLE}">Layer 2 — brand token sheets</div>
          <div style="\${doc.muted} margin-bottom: var(--spacing-sm1);">Client-owned · standalone sheet per engagement</div>

          <div style="\${GROUP_FIRST}">Color</div>
          <div style="\${ITEM}">• color.brand.primary (with scale)</div>
          <div style="\${ITEM}">• color.brand.secondary (with scale)</div>
          <div style="\${ITEM}">• color.brand.tertiary (with scale)</div>

          <div style="\${GROUP}">Typography</div>
          <div style="\${ITEM}">• font.family.base</div>
          <div style="\${ITEM}">• font.family.heading</div>

          <div style="\${NOTE} \${doc.muted}">Font families change per engagement — the type system structure (headline-1, headline-2, body-sm, body-rg, body-lg) stays fixed in Layer 1. A client swap changes the face; the hierarchy stays intact.</div>
        </div>

        <div style="padding: var(--spacing-md1); flex: 1 1 0; min-width: 0;">
          <div style="\${COL_TITLE}">Theme packages</div>
          <div style="\${doc.muted} margin-bottom: var(--spacing-sm1);">One per engagement</div>
          <div style="\${ITEM}">@mms/tokens-structural</div>
          <div style="\${ITEM}">@mms/theme-default</div>
          <div style="\${ITEM}">@mms/theme-virginia</div>
          <div style="\${ITEM}">@mms/theme-federal</div>
          <div style="\${ITEM}">...</div>
        </div>

      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <strong>Accessibility enforcement via token contracts.</strong> All color pairings (text on surface, text on primary, etc.) must meet WCAG 2.1 AA contrast requirements: 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold). Utility colors (error, success, warning) and focus ring are structural tokens — they cannot be themed away by any client engagement.
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Multi-framework distribution</h2>

      <div data-doc-diagram style="\${doc.panel} border: var(--border-width-xs) solid var(--color-border-subtle); margin-bottom: \${space.subsection};">

        <div style="text-align: center; margin-bottom: \${space.content};">
          <span style="\${doc.label}">How the DS Platform reaches every delivery target</span>
        </div>

        <div style="display: flex; gap: \${space.content}; justify-content: center; margin-bottom: \${space.content}; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: var(--spacing-sm1);"><div style="\${LEGEND_SWATCH} background: var(--color-utility-caution-muted); border-color: var(--color-utility-caution-stroke);"></div><span style="\${doc.muted}">Inputs</span></div>
          <div style="display: flex; align-items: center; gap: var(--spacing-sm1);"><div style="\${LEGEND_SWATCH} background: var(--color-primary-2); border-color: var(--color-primary-9);"></div><span style="\${doc.muted}">DS foundation</span></div>
          <div style="display: flex; align-items: center; gap: var(--spacing-sm1);"><div style="\${LEGEND_SWATCH} background: var(--color-secondary-2); border-color: var(--color-secondary-7);"></div><span style="\${doc.muted}">DS repos</span></div>
          <div style="display: flex; align-items: center; gap: var(--spacing-sm1);"><div style="\${LEGEND_SWATCH} background: var(--color-utility-success-muted); border-color: var(--color-utility-success-stroke);"></div><span style="\${doc.muted}">Delivery teams</span></div>
        </div>

        <div style="display: flex; align-items: stretch; gap: 0;">

          <div style="display: flex; flex-direction: column; gap: var(--spacing-sm1); justify-content: center;">
            <div style="\${INPUT_BOX}">
              <div style="\${doc.label}">Client brand guide</div>
              <div>Per-engagement identity</div>
            </div>
            <div style="\${INPUT_BOX}">
              <div style="\${doc.label}">Team input</div>
              <div>UX feedback</div>
            </div>
            <div style="\${INPUT_BOX}">
              <div style="\${doc.label}">Tech guide</div>
              <div>Tech feedback</div>
            </div>
          </div>

          <div style="\${ARROW}">→</div>

          <div style="flex: 1.4; min-width: 0; display: flex; flex-direction: column;">
            <div style="border: var(--border-width-md) solid var(--color-primary-9); border-radius: var(--radius-md); padding: var(--spacing-lg1) var(--spacing-sm2) var(--spacing-sm2); position: relative; background: var(--color-primary-2); display: flex; flex-direction: column;">
              <div style="position: absolute; top: calc(-1 * var(--spacing-md1)); left: var(--spacing-md1); background: var(--color-primary-9); color: var(--color-text-on-primary); \${doc.label} padding: var(--spacing-xs1) var(--spacing-sm1); border-radius: var(--radius-lg);">DS PLATFORM</div>
              <div style="background: var(--color-primary-3); border: var(--border-width-xs) solid var(--color-primary-6); border-radius: var(--radius-md); padding: var(--spacing-sm1); display: flex; flex-direction: column; gap: var(--spacing-xs2);">
                <div style="\${FOUNDATION_CARD}">
                  <div style="\${doc.label}">Structural tokens</div>
                  <div style="\${doc.muted}">Shared foundation: spacing, radius, motion, a11y</div>
                </div>
                <div style="\${FOUNDATION_CARD}">
                  <div style="\${doc.label}">Brand tokens</div>
                  <div style="\${doc.muted}">Standalone sheets, one per engagement</div>
                </div>
                <div style="\${FOUNDATION_CARD}">
                  <div style="\${doc.label}">Theme packages</div>
                  <div style="\${doc.muted}">Assembled bundles per engagement</div>
                </div>
              </div>
              <div style="\${ARROW_DOWN}">↓</div>
              <div style="background: var(--color-primary-3); border: var(--border-width-sm) solid var(--color-primary-9); border-radius: var(--radius-md); padding: var(--spacing-sm1) var(--spacing-sm2);">
                <div style="\${doc.label} color: var(--color-primary-11);">Framework-agnostic Web Components</div>
                <div style="\${doc.muted} margin-top: var(--spacing-xs1);">Built on the token system · source of truth for all distribution</div>
              </div>
            </div>
            <div style="\${ARROW_DOWN}">↓</div>
            <div style="border: var(--border-width-xs) solid var(--color-border-subtle); border-radius: var(--radius-md); padding: var(--spacing-sm1); background: var(--color-surface-raised);">
              <div style="\${doc.label} \${doc.muted} margin-bottom: var(--spacing-sm1);">Published surfaces</div>
              <div style="display: flex; gap: var(--spacing-sm1);">
                <div style="\${SURFACE_CARD}">
                  <div style="\${doc.label}">DS Docs</div>
                  <div style="\${doc.muted}">Storybook</div>
                </div>
                <div style="\${SURFACE_CARD}">
                  <div style="\${doc.label}">Figma Library</div>
                  <div style="\${doc.muted}">Design kit</div>
                </div>
              </div>
            </div>
          </div>

          <div style="\${ARROW}">→</div>

          <div style="display: flex; flex-direction: column; gap: var(--spacing-xs2); justify-content: center;">
            <div style="\${REPO_BOX}"><div style="\${doc.label}">React UI Lib</div><div style="\${doc.muted}">Dev kit</div></div>
            <div style="\${REPO_BOX}"><div style="\${doc.label}">Salesforce</div><div style="\${doc.muted}">TBD</div></div>
            <div style="\${REPO_BOX}"><div style="\${doc.label}">ServiceNow</div><div style="\${doc.muted}">Widget integration</div></div>
            <div style="\${REPO_BOX}"><div style="\${doc.label}">AEM Clientlib</div><div style="\${doc.muted}">Author kit</div></div>
            <div style="\${REPO_BOX}"><div style="\${doc.label}">Drupal Module</div><div style="\${doc.muted}">Theme integration</div></div>
            <div style="\${REPO_BOX}"><div style="\${doc.label}">Headless CSS</div><div style="\${doc.muted}">Stylesheet + icons</div></div>
            <div style="\${REPO_BOX}"><div style="\${doc.label}">iOS / Android</div><div style="\${doc.muted}">Tokens only (TBD)</div></div>
          </div>

          <div style="\${ARROW}">→</div>

          <div style="display: flex; flex-direction: column; gap: var(--spacing-sm1); justify-content: center;">
            <div style="\${TEAM_BOX}"><div style="\${doc.label}">DXHub</div><div>Enrollment sites</div></div>
            <div style="\${TEAM_BOX}"><div style="\${doc.label}">Enterprise apps</div><div>Salesforce, ServiceNow</div></div>
            <div style="\${TEAM_BOX}"><div style="\${doc.label}">Public web</div><div>AEM, Drupal sites</div></div>
            <div style="\${TEAM_BOX}"><div style="\${doc.label}">Mobile apps</div><div>Tokens only (Obj-C)</div></div>
          </div>

        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Distribution packages</h2>
      <table style="\${doc.table}">
        <thead>
          <tr>
            <th style="\${doc.th}">Package</th>
            <th style="\${doc.th}">Consumer</th>
            <th style="\${doc.th}">Integration model</th>
            <th style="\${doc.th}">Status</th>
          </tr>
        </thead>
        <tbody>
          \${[['@mms/components-react', 'DXHub and React apps', 'Generated React binding — typed props, React events, ref forwarding. Web component layer invisible to consumers. Ships today as @mms/design-system/react.', 'AVAILABLE'], ['@mms/salesforce', 'Salesforce', '—', 'TO BE DETERMINED'], ['@mms/aem-clientlib', 'Adobe Experience Manager', 'Web components registered as custom elements in AEM page templates via a client library package.', 'FUTURE STATE'], ['@mms/drupal-module', 'Drupal', 'Web components consumed via Drupal module with CSS custom property theming.', 'FUTURE STATE'], ['@mms/headless-css', 'Any platform without web component support', 'Stylesheet and icon set only — token-backed CSS classes for platforms that cannot consume web components.', 'FUTURE STATE'], ['@mms/tokens-structural', 'All web platforms', 'CSS custom properties — the shared structural foundation for spacing, radius, motion, and accessibility. Ships today as @mms/design-system/tokens.css.', 'AVAILABLE'], ['@mms/ios', 'iOS', '—', 'TO BE DETERMINED'], ['@mms/android', 'Android', '—', 'TO BE DETERMINED'], ['@mms/theme-default', 'Dev / demo fallback', 'Brand token sheet — default visual identity for development and demos before a client engagement theme is applied. Ships today as @mms/design-system/themes/default.', 'AVAILABLE']].map(([pkg, consumer, model, status], i) => html\`
            <tr style="\${i % 2 ? 'background: var(--color-surface-default);' : ''}">
              <td style="\${doc.td} \${t.mono}">\${pkg}</td>
              <td style="\${doc.td}">\${consumer}</td>
              <td style="\${doc.td}">\${model}</td>
              <td style="\${doc.td}">\${labelChip(status, STATUS_CHIP[status])}</td>
            </tr>
          \`)}
        </tbody>
      </table>
      <p style="\${t.body} \${doc.muted} margin-top: \${space.content};">
        <strong>Available</strong> packages ship together inside the single published @mms/design-system package today.
        Splitting them into the separate packages named above is the Phase 4 target.
      </p>

    </div>
  \`
}`,...k.parameters?.docs?.source}}},A=[`Architecture`]}))();export{k as Architecture,A as __namedExportsOrder,O as default};