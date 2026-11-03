import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{n as a,r as o}from"./iframe-C49srKsk.js";import{t as s}from"./mms-card.component-Ae9XIj4r.js";import{n as c,r as l}from"./wcag-coverage-DNhlI7v1.js";import{t as u}from"./mms-inline-alert.component-D2eQsUms.js";import{a as d,c as f,d as p,i as m,n as h,o as g,r as _,u as v}from"./doc-styles-DkvR_Qyb.js";import{a as y,n as b}from"./a11y-outcome-Baw4sLAQ.js";import{n as x,t as S}from"./mms-tabs.component-DnFCRKwS.js";var C=t({LayoutBehavior:()=>k,Overview:()=>O,PlaygroundStory:()=>j,__namedExportsOrder:()=>M,default:()=>T});function w(e){let t=`Tab ${e}`;return{[`tab${e}Label`]:{name:`Label`,control:`text`,description:`Tab ${e} label text (also the accessible name)`,table:{category:t}},[`tab${e}Icon`]:{name:`Icon`,control:`select`,options:A,description:`Tab ${e} leading icon ("none" for no icon). This is a sample of the full icon set for demo purposes only — any icon in the Phosphor registry can be used, not just the options listed here.`,table:{category:t}},[`tab${e}Disabled`]:{name:`Disabled`,control:`boolean`,description:`Disables tab ${e}`,table:{category:t}}}}var T,E,D,O,k,A,j,M,N=e((()=>{i(),o(),S(),x(),s(),u(),c(),b(),f(),T={title:`Content Display/Tabs`,tags:[`!autodocs`]},E=`960px`,D={frame:`border: var(--border-width-sm) dashed var(--color-border-default); border-radius: var(--radius-md); padding: var(--spacing-lg1); position: relative; margin-bottom: ${v.subsection};`,frameLabel:`${d.label} ${d.muted} position: absolute; top: calc(-1 * var(--spacing-sm2)); left: var(--spacing-md1); background: var(--color-surface-default); padding: 0 var(--spacing-sm1);`,tierCard:`${d.panel} flex: 1; min-width: 200px;`,caption:`${p.caption} ${d.muted} text-align: center; margin: ${v.label} 0 0;`},O={name:`Overview`,render:()=>r`
    <div data-theme=${_} data-mode=${g()} style=${h}>

      <h1 style="${p.h1}">Tabs</h1>
      <p style="${p.body} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        A tablist of <code style="${p.monoSm}">mms-tabs-item</code> elements implementing the WAI-ARIA
        tabs pattern — roving tabindex, arrow-key navigation, and a sliding selection indicator for
        the minimal style. <code style="${p.monoSm}">mms-tabs</code> manages the tablist only; consumers
        own the associated tabpanel(s).
      </p>

      <hr style="${d.divider}" />

      <h2 style="${p.h2}">Basic usage</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        Slot <code style="${p.monoSm}">mms-tabs-item</code> elements into <code style="${p.monoSm}">mms-tabs</code>.
        The first tab is active by default; the minimal style (default) shows selection via a sliding indicator.
      </p>

      <div style="${D.frame}">
        <mms-tabs label="Basic usage example">
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details"></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="${d.divider}" />

      <h2 style="${p.h2}">Tab style</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        <code style="${p.monoSm}">tab-style="minimal"</code> (default) shows selection via a sliding indicator border.
        <code style="${p.monoSm}">tab-style="fill"</code> shows selection via a solid background on the active tab —
        no separate indicator is rendered.
      </p>

      <div style="${D.frame}">
        <div style="display: flex; flex-direction: column; gap: ${v.content};">
          <div>
            <p style="${p.caption} margin-bottom: ${v.label};"><strong>Minimal (default)</strong></p>
            <mms-tabs label="Minimal style example" tab-style="minimal">
              <mms-tabs-item label="Overview"></mms-tabs-item>
              <mms-tabs-item label="Details"></mms-tabs-item>
              <mms-tabs-item label="History"></mms-tabs-item>
            </mms-tabs>
          </div>
          <div>
            <p style="${p.caption} margin-bottom: ${v.label};"><strong>Fill</strong></p>
            <mms-tabs label="Fill style example" tab-style="fill">
              <mms-tabs-item label="Overview"></mms-tabs-item>
              <mms-tabs-item label="Details"></mms-tabs-item>
              <mms-tabs-item label="History"></mms-tabs-item>
            </mms-tabs>
          </div>
        </div>
      </div>

      <hr style="${d.divider}" />

      <h2 style="${p.h2}">Orientation</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        <code style="${p.monoSm}">orientation="vertical"</code> stacks tabs in a column and switches arrow-key
        navigation from Left/Right to Up/Down. See
        <a href="?path=/docs/content-display-tabs--layout-behavior" style="color: inherit;">Layout &amp; Behavior</a>
        for placement guidance and how a vertical tablist responds as its allocated width narrows.
      </p>

      <div style="${D.frame}">
        <mms-tabs label="Vertical orientation example" orientation="vertical">
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details"></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="${d.divider}" />

      <h2 style="${p.h2}">With icons</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        The <code style="${p.monoSm}">icon</code> prop adds a leading icon to a tab.
      </p>

      <div style="${D.frame}">
        <mms-tabs label="Icon example">
          <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
          <mms-tabs-item label="Settings" icon="gear"></mms-tabs-item>
          <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="${d.divider}" />

      <h2 style="${p.h2}">Icon-only</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        <code style="${p.monoSm}">icon-only</code> on <code style="${p.monoSm}">mms-tabs</code> hides every
        tab's visible label while keeping it as the accessible name (<code style="${p.monoSm}">aria-label</code>).
        Each tab needs its own <code style="${p.monoSm}">icon</code> prop set.
      </p>

      <div style="${D.frame}">
        <mms-tabs label="Icon-only example" icon-only>
          <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
          <mms-tabs-item label="Settings" icon="gear"></mms-tabs-item>
          <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="${d.divider}" />

      <h2 style="${p.h2}">Text size</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        <code style="${p.monoSm}">size="lg"</code> increases label and icon size for contexts that need
        more visual weight than the default <code style="${p.monoSm}">md</code> size.
      </p>

      <div style="${D.frame}">
        <div style="display: flex; flex-direction: column; gap: ${v.content};">
          <div>
            <p style="${p.caption} margin-bottom: ${v.label};"><strong>Medium (default)</strong></p>
            <mms-tabs label="Medium size example">
              <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
              <mms-tabs-item label="Details" icon="gear"></mms-tabs-item>
              <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
            </mms-tabs>
          </div>
          <div>
            <p style="${p.caption} margin-bottom: ${v.label};"><strong>Large</strong></p>
            <mms-tabs label="Large size example" size="lg">
              <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
              <mms-tabs-item label="Details" icon="gear"></mms-tabs-item>
              <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
            </mms-tabs>
          </div>
        </div>
      </div>

      <hr style="${d.divider}" />

      <h2 style="${p.h2}">Full width</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        <code style="${p.monoSm}">full-width</code> stretches every tab to share the tablist's width equally.
      </p>

      <div style="${D.frame}">
        <mms-tabs label="Full width example" full-width>
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details"></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="${d.divider}" />

      <h2 style="${p.h2}">Disabled tab</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        <code style="${p.monoSm}">disabled</code> is set per-tab on an individual <code style="${p.monoSm}">mms-tabs-item</code>
        — there is no group-level disabled prop on <code style="${p.monoSm}">mms-tabs</code>. A disabled tab is
        removed from the roving tabindex and skipped by arrow-key navigation.
      </p>

      <div style="${D.frame}">
        <mms-tabs label="Disabled tab example">
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details" disabled></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="${d.divider}" />

      <h2 style="${p.h2}">Props reference</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.content};">
        Every configurable prop on <code style="${p.monoSm}">mms-tabs</code> and <code style="${p.monoSm}">mms-tabs-item</code>,
        including the global props inherited by every mms component. All are exercised on the
        <a href="?path=/docs/content-display-tabs--playground" style="color: inherit;">Playground</a> page.
      </p>

      <h3 style="${p.h3}">mms-tabs</h3>
      <table style="${d.table} margin-bottom: ${v.content};">
        <thead>
          <tr>
            <th style="${d.th}">Prop</th>
            <th style="${d.th}">Type</th>
            <th style="${d.th}">Default</th>
            <th style="${d.th}">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">label</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">string</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">'Tabs'</code></td>
            <td style="${d.td}">Accessible name for the tablist (<code style="${p.monoSm}">aria-label</code>)</td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">active-index</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">number</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">0</code></td>
            <td style="${d.td}">Index of the currently selected tab</td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">orientation</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">'horizontal' | 'vertical'</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">'horizontal'</code></td>
            <td style="${d.td}">Layout orientation; switches arrow-key axis</td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">tab-style</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">'minimal' | 'fill'</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">'minimal'</code></td>
            <td style="${d.td}">Visual style propagated to all tabs</td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">full-width</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">boolean</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">false</code></td>
            <td style="${d.td}">Stretches tabs to fill the available width equally</td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">icon-only</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">boolean</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">false</code></td>
            <td style="${d.td}">Forces every tab into icon-only mode, hiding all labels</td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">size</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">'md' | 'lg'</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">'md'</code></td>
            <td style="${d.td}">Text size, propagated to all tabs</td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">roundness</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">'boxed' | 'subtle' | 'rounded'</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">'subtle'</code></td>
            <td style="${d.td}">Corner radius on the active/hover tab's leading corners, propagated to all tabs. <code style="${p.monoSm}">fill</code> style only.</td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">collapse-breakpoint</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">number</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">undefined</code></td>
            <td style="${d.td}">Host width (px) below which a vertically-authored tablist auto-switches to horizontal. Undefined disables auto-collapse. See <a href="?path=/docs/content-display-tabs--layout-behavior" style="color: inherit;">Layout &amp; Behavior</a>.</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${p.h3}">mms-tabs CSS custom properties</h3>
      <table style="${d.table} margin-bottom: ${v.content};">
        <thead>
          <tr>
            <th style="${d.th}">Property</th>
            <th style="${d.th}">Default</th>
            <th style="${d.th}">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">--mms-tabs-vertical-max-width</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">none</code></td>
            <td style="${d.td}">Firmer cap on a vertical tablist's <code style="${p.monoSm}">fit-content</code> width, for consumers who want label-wrap to kick in earlier than the widest label's natural size would trigger it.</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${p.h3}">mms-tabs-item</h3>
      <table style="${d.table} margin-bottom: ${v.content};">
        <thead>
          <tr>
            <th style="${d.th}">Prop</th>
            <th style="${d.th}">Type</th>
            <th style="${d.th}">Default</th>
            <th style="${d.th}">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">label</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">string</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">'Tab'</code></td>
            <td style="${d.td}">Tab label text; also the accessible name</td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">icon</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">IconName</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">undefined</code></td>
            <td style="${d.td}">Optional leading icon</td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">hide-label</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">boolean</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">false</code></td>
            <td style="${d.td}">Hides the visible label (icon-only tab); normally set via the parent's <code style="${p.monoSm}">icon-only</code></td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">disabled</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">boolean</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">false</code></td>
            <td style="${d.td}">Disables selection and keyboard/pointer interaction; skipped by arrow-key navigation</td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">panel-id</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">string</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">''</code></td>
            <td style="${d.td}">Id of the associated tabpanel — sets <code style="${p.monoSm}">aria-controls</code></td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">active</code>, <code style="${p.monoSm}">tab-style</code>, <code style="${p.monoSm}">orientation</code>, <code style="${p.monoSm}">size</code></td>
            <td style="${d.td}">—</td>
            <td style="${d.td}">—</td>
            <td style="${d.td}">Managed by the parent <code style="${p.monoSm}">mms-tabs</code> — do not set directly</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${p.h3}">Global props</h3>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.content};">
        Inherited by every mms component per
        <code style="${p.monoSm}">.claude/contracts/global-props.md</code>.
      </p>
      <table style="${d.table} margin-bottom: ${v.subsection};">
        <thead>
          <tr>
            <th style="${d.th}">Attribute</th>
            <th style="${d.th}">Values</th>
            <th style="${d.th}">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">data-theme</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">${[`default`,...a].map(e=>`'${e}'`).join(` | `)}</code></td>
            <td style="${d.td}">Brand theme (colors + fonts); set on <code style="${p.monoSm}">mms-tabs</code></td>
          </tr>
          <tr>
            <td style="${d.td}"><code style="${p.monoSm}">data-density</code></td>
            <td style="${d.td}"><code style="${p.monoSm}">'default' | 'compact'</code></td>
            <td style="${d.td}">Padding density; set on <code style="${p.monoSm}">mms-tabs</code> — it propagates to each tab item</td>
          </tr>
        </tbody>
      </table>

      <hr style="${d.divider}" />

      <h2 style="${p.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${v.content};">
        <div slot="body-content">
          <p style="${p.bodySm} margin: 0;">
            <strong>WAI-ARIA Tabs Pattern.</strong> <code style="${p.monoSm}">mms-tabs</code> renders
            <code style="${p.monoSm}">role="tablist"</code>; each slotted <code style="${p.monoSm}">mms-tabs-item</code>
            sets <code style="${p.monoSm}">role="tab"</code>, <code style="${p.monoSm}">aria-selected</code>, and a
            roving <code style="${p.monoSm}">tabindex</code> directly on itself. Consumers own the associated
            tabpanel(s) — set <code style="${p.monoSm}">panel-id</code> on each tab to wire up
            <code style="${p.monoSm}">aria-controls</code>.
          </p>
        </div>
      </mms-card>

      <h3 style="${p.h3}">WCAG 2.2 AA compliance</h3>
      ${y(l.tabs.rows)}

      <h3 style="${p.h3}">Screen reader behavior</h3>
      <ul style="${p.bodySm} ${d.muted} margin: 0 0 ${v.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${v.label};"><strong>Focus:</strong> Announces the tab's label, "tab", position (e.g. "1 of 3"), and selected state</li>
        <li style="margin-bottom: ${v.label};"><strong>Selection:</strong> Announces "selected" as the active tab changes via arrow keys or click</li>
        <li style="margin-bottom: ${v.label};"><strong>Disabled:</strong> Announces "dimmed"/"unavailable" for a disabled tab; it is skipped by arrow-key navigation</li>
        <li><strong>Icon-only:</strong> Label is still announced via <code style="${p.monoSm}">aria-label</code> even when visually hidden</li>
      </ul>

      <h3 style="${p.h3}">Keyboard navigation</h3>
      <table style="${d.table} margin-bottom: ${v.subsection};">
        <thead>
          <tr>
            <th style="${d.th} width: 140px;">Key</th>
            <th style="${d.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${d.td}"><kbd style="${d.kbd}">Tab</kbd></td>
            <td style="${d.td}">Move focus to the active tab / out of the tablist (roving tabindex — only the active tab is in the page tab order)</td>
          </tr>
          <tr>
            <td style="${d.td}"><kbd style="${d.kbd}">→</kbd> <kbd style="${d.kbd}">←</kbd></td>
            <td style="${d.td}">Move selection to the next / previous enabled tab, wrapping at the ends (horizontal orientation)</td>
          </tr>
          <tr>
            <td style="${d.td}"><kbd style="${d.kbd}">↓</kbd> <kbd style="${d.kbd}">↑</kbd></td>
            <td style="${d.td}">Move selection to the next / previous enabled tab, wrapping at the ends (vertical orientation)</td>
          </tr>
          <tr>
            <td style="${d.td}"><kbd style="${d.kbd}">Home</kbd> / <kbd style="${d.kbd}">End</kbd></td>
            <td style="${d.td}">Jump to the first / last enabled tab</td>
          </tr>
          <tr>
            <td style="${d.td}"><kbd style="${d.kbd}">Enter</kbd> / <kbd style="${d.kbd}">Space</kbd></td>
            <td style="${d.td}">Activate the focused tab (only needed when a tab is reached by means other than arrow keys)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},k={name:`Layout & Behavior`,render:()=>r`
    <div data-theme=${_} data-mode=${g()} style=${h}>

      <!-- Intro -->
      <h1 style="${p.h1}">Layout &amp; Behavior</h1>
      <p style="${p.body} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        Horizontal tabs need no layout guidance beyond the Overview page — they scroll their own overflow.
        Vertical tabs are different: <code style="${p.monoSm}">mms-tabs</code> doesn't own the surrounding
        layout, so placement and responsiveness are a shared contract between the component and the page
        that hosts it. This page covers that contract.
      </p>

      <hr style="${d.divider}" />

      <!-- Placement -->
      <h2 style="${p.h2}">Placement</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.content};">
        A vertical <code style="${p.monoSm}">mms-tabs</code> sizes itself to
        <code style="${p.monoSm}">fit-content</code> — it takes only as much width as its labels need, and
        never stretches to fill a container. Place it as the sidebar/nav column of a consumer-owned
        two-column grid or flex layout — the same pattern Carbon and Spectrum both use for their vertical
        tabs. mms doesn't ship a two-column layout component, so this is a placement convention, not
        something the component enforces in CSS.
      </p>

      <div style="display: flex; gap: ${v.content}; margin-bottom: ${v.content}; flex-wrap: wrap;">
        <div style="${d.panel} flex: 1; min-width: 240px;">
          <p style="${d.label} ${d.muted} margin: 0 0 ${v.label};">✅ Do</p>
          <pre style="${d.pre} margin: 0;"><code>&lt;div class="two-col-layout"&gt;
  &lt;mms-tabs orientation="vertical"&gt;...&lt;/mms-tabs&gt;
  &lt;main&gt;...&lt;/main&gt;
&lt;/div&gt;</code></pre>
        </div>
        <div style="${d.panel} flex: 1; min-width: 240px;">
          <p style="${d.label} ${d.muted} margin: 0 0 ${v.label};">❌ Don't</p>
          <pre style="${d.pre} margin: 0;"><code>&lt;mms-tabs orientation="vertical" full-width&gt;
  ...
&lt;/mms-tabs&gt;
&lt;main&gt;...&lt;/main&gt;</code></pre>
        </div>
      </div>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        <code style="${p.monoSm}">full-width</code> stretches tabs to fill available width equally — it's a
        horizontal-orientation concept (equalizing tab widths across a row) and has no effect on a vertical
        tablist, which always sizes to content.
      </p>

      <hr style="${d.divider}" />

      <!-- Responsiveness -->
      <h2 style="${p.h2}">Responsiveness</h2>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.content};">
        Take a common layout: 30% of the width allocated to vertical tabs, 70% to a content pane that
        updates with the selected tab. As the consumer's column narrows — a resizable panel, a smaller
        viewport, a denser page — a fixed-width vertical tablist with <code style="${p.monoSm}">nowrap</code>
        labels would overflow past its allocated 30% once a label runs out of room. <code style="${p.monoSm}">mms-tabs</code>
        handles this in three tiers:
      </p>

      <div style="display: flex; gap: ${v.content}; margin-bottom: ${v.subsection}; flex-wrap: wrap;">
        <div style="${D.tierCard}">
          <h3 style="${p.h3}">Tier 1 — comfortable</h3>
          <p style="${p.bodySm} ${d.muted}">Default behavior. Labels render on a single line at their natural width.</p>
        </div>
        <div style="${D.tierCard}">
          <h3 style="${p.h3}">Tier 2 — wrap</h3>
          <p style="${p.bodySm} ${d.muted}">As the allocated column narrows past a label's natural width, labels wrap onto multiple lines instead of overflowing. No configuration needed — this is always on.</p>
        </div>
        <div style="${D.tierCard}">
          <h3 style="${p.h3}">Tier 3 — collapse</h3>
          <p style="${p.bodySm} ${d.muted}">Below an optional <code style="${p.monoSm}">collapse-breakpoint</code> (px), the tablist auto-switches to horizontal — ARIA, keyboard, and layout all follow automatically.</p>
        </div>
      </div>

      <div style="${D.frame}">
        <span style="${D.frameLabel}">Drag the ↘ handle on the container to resize — comfortable → wrap</span>
        <div style="box-sizing: border-box; resize: horizontal; overflow: auto; min-width: 480px; max-width: 100%; width: 100%; display: flex; gap: ${v.content}; height: 280px; margin-top: ${v.label}; border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-sm); padding: var(--spacing-md1);">
          <div style="flex: 0 0 30%; min-width: 0; border-right: var(--border-width-xs) solid var(--color-border-subtle); padding-right: var(--spacing-md1);">
            <mms-tabs orientation="vertical" label="Section navigation" style="--mms-tabs-vertical-max-width: 100%;">
              <mms-tabs-item label="Overview"></mms-tabs-item>
              <mms-tabs-item label="Provider Directory"></mms-tabs-item>
              <mms-tabs-item label="Appeals &amp; Grievances"></mms-tabs-item>
              <mms-tabs-item label="History"></mms-tabs-item>
            </mms-tabs>
          </div>
          <div style="flex: 1 1 70%; min-width: 0; display: flex; align-items: center; justify-content: center; ${p.body} ${d.muted}">
            content pane
          </div>
        </div>
      </div>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.content};">
        No <code style="${p.monoSm}">collapse-breakpoint</code> is set here — this demo is scoped to Tiers 1
        and 2 only, which need no configuration and are always on. Tier 3 needs its own layout, shown below:
        collapsing orientation in place, with nothing else changing, just hides tabs behind horizontal scroll
        instead of helping — worse than wrap, not better.
      </p>

      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.subsection};">
        <code style="${p.monoSm}">collapse-breakpoint</code> is a paired contract: set it to the same width
        where the consumer's own layout switches from a side-by-side column to a stacked one. Below that
        width, the now-horizontal tablist needs the full row to itself — otherwise it's just trading one
        overflow problem for another.
      </p>

      <div style="display: flex; gap: ${v.content}; margin-bottom: ${v.subsection}; flex-wrap: wrap; align-items: flex-start;">
        <div style="flex: 1; min-width: 260px;">
          <div style="${D.frame} margin-bottom: ${v.label};">
            <span style="${D.frameLabel}">≥ collapse-breakpoint</span>
            <div style="display: flex; gap: ${v.content}; height: 170px;">
              <div style="width: 170px; border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-sm); padding: var(--spacing-sm2);">
                <mms-tabs orientation="vertical" label="Section navigation">
                  <mms-tabs-item label="Overview"></mms-tabs-item>
                  <mms-tabs-item label="Directory"></mms-tabs-item>
                  <mms-tabs-item label="Appeals"></mms-tabs-item>
                </mms-tabs>
              </div>
              <div style="flex: 1; border: var(--border-width-xs) dashed var(--color-border-default); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; ${p.body} ${d.muted}">
                content
              </div>
            </div>
          </div>
          <p style="${D.caption} margin-top: var(--spacing-xs2);">Side-by-side: sidebar + content</p>
        </div>

        <div style="flex: 1; min-width: 260px;">
          <div style="${D.frame} margin-bottom: ${v.label};">
            <span style="${D.frameLabel}">&lt; collapse-breakpoint</span>
            <div style="display: flex; flex-direction: column; gap: ${v.content}; height: 170px;">
              <div style="border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-sm); padding: var(--spacing-sm1);">
                <mms-tabs orientation="horizontal" label="Section navigation">
                  <mms-tabs-item label="Overview"></mms-tabs-item>
                  <mms-tabs-item label="Directory"></mms-tabs-item>
                  <mms-tabs-item label="Appeals"></mms-tabs-item>
                </mms-tabs>
              </div>
              <div style="flex: 1; border: var(--border-width-xs) dashed var(--color-border-default); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; ${p.body} ${d.muted}">
                content
              </div>
            </div>
          </div>
          <p style="${D.caption} margin-top: var(--spacing-xs2);">Stacked: tabs on top, content below</p>
        </div>
      </div>

      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.content};">
        This is the whole fix — no auto-switch-to-icon-only tier sits between wrap and collapse. Icon-only
        mode remains a manual, author-chosen variant (<code style="${p.monoSm}">icon-only</code>), not an
        automatic responsive step.
      </p>
      <p style="${p.bodySm} ${d.muted} max-width: ${m}; margin-bottom: ${v.content};">
        Because <code style="${p.monoSm}">collapse-breakpoint</code> overwrites the live
        <code style="${p.monoSm}">orientation</code> property to reuse all of its existing ARIA/keyboard/CSS
        behavior for free, the component fires <code style="${p.monoSm}">tab-orientation-change</code>
        whenever it collapses or expands on its own, so a consumer reading <code style="${p.monoSm}">orientation</code>
        back can tell the difference from a value it authored itself:
      </p>
      <pre style="${d.pre}"><code>tabsEl.addEventListener('tab-orientation-change', (e) => {
  // e.detail: { orientation: 'horizontal' | 'vertical', reason: 'collapse' | 'expand' }
});</code></pre>

      <div>
        <mms-inline-alert
          alert-type="caution"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Vertical tabs are for in-page section navigation"
          message="— dashboard/content sections within a single page — not persistent primary/global navigation. Screen-reader users encounter the full tab list on every visit, and deep-linking into a specific tab's content is the consumer's routing responsibility; mms-tabs doesn't provide it."
        ></mms-inline-alert>
      </div>

    </div>
  `},A=[`none`,`house`,`gear`,`clock-counter-clockwise`,`user`,`bell`,`envelope`,`star`],j={name:`Playground`,tags:[`!dev`],args:{orientation:`horizontal`,tabStyle:`minimal`,roundness:`subtle`,fullWidth:!0,iconOnly:!1,size:`md`,label:`Tabs`,activeIndex:0,tabCount:3,tab1Label:`Overview`,tab1Icon:`house`,tab1Disabled:!1,tab2Label:`Details`,tab2Icon:`gear`,tab2Disabled:!1,tab3Label:`History`,tab3Icon:`clock-counter-clockwise`,tab3Disabled:!1,tab4Label:`Messages`,tab4Icon:`envelope`,tab4Disabled:!1,tab5Label:`Profile`,tab5Icon:`user`,tab5Disabled:!1,tab6Label:`Notifications`,tab6Icon:`bell`,tab6Disabled:!1,theme:`maximus`,density:`default`},decorators:[e=>r`
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 100%; max-width: ${E};">
            ${e()}
          </div>
        </div>
      `],argTypes:{orientation:{name:`Orientation`,control:`select`,options:[`horizontal`,`vertical`],description:`Layout orientation`,table:{category:`Visual`}},tabStyle:{name:`Tab style`,control:`select`,options:[`minimal`,`fill`],description:`Visual style propagated to all tabs`,table:{category:`Visual`}},roundness:{name:`Roundness`,control:`select`,options:[`boxed`,`subtle`,`rounded`],description:`Corner radius on the active/hover tab's leading corners. Fill style only.`,table:{category:`Visual`}},fullWidth:{name:`Full width`,control:`boolean`,description:`Stretches tabs to fill the available width equally`,table:{category:`Visual`}},iconOnly:{name:`Icon only`,control:`boolean`,description:`Forces every tab into icon-only mode, hiding all labels`,table:{category:`Visual`}},size:{name:`Size`,control:`select`,options:[`md`,`lg`],description:`Text size, propagated to all tabs`,table:{category:`Visual`}},label:{name:`Label`,control:`text`,description:`Accessible name for the tablist (aria-label)`,table:{category:`Content`}},activeIndex:{name:`Active index`,control:{type:`number`,min:0,max:5,step:1},description:`Index of the currently selected tab`,table:{category:`Content`}},tabCount:{name:`Tab count`,control:{type:`range`,min:2,max:6,step:1},description:`Number of tabs to render in this demo (the component itself has no cap)`,table:{category:`Content`}},...w(1),...w(2),...w(3),...w(4),...w(5),...w(6),theme:{name:`Theme`,control:`select`,options:a,description:`Brand theme (affects typography and colors)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];r.push(`label="${n.label}"`),n.activeIndex&&r.push(`active-index="${n.activeIndex}"`),n.orientation!==`horizontal`&&r.push(`orientation="${n.orientation}"`),n.tabStyle!==`minimal`&&r.push(`tab-style="${n.tabStyle}"`),n.size&&n.size!==`md`&&r.push(`size="${n.size}"`),n.tabStyle===`fill`&&n.roundness&&n.roundness!==`subtle`&&r.push(`roundness="${n.roundness}"`),n.fullWidth&&r.push(`full-width`),n.iconOnly&&r.push(`icon-only`),n.density===`compact`&&r.push(`data-density="compact"`);let i=e=>{let t=n[`tab${e}Icon`],r=n[`tab${e}Disabled`],i=[`label="${n[`tab${e}Label`]}"`];return t&&t!==`none`&&i.push(`icon="${t}"`),r&&i.push(`disabled`),`  <mms-tabs-item ${i.join(` `)}></mms-tabs-item>`},a=Number(n.tabCount)||3,o=Array.from({length:a},(e,t)=>i(t+1)).join(`
`);return`<mms-tabs\n  ${r.join(`
  `)}\n>\n${o}\n</mms-tabs>`},language:`html`}},controls:{sort:`none`}},render:e=>{let t=e=>e===`none`?void 0:e,i=[1,2,3,4,5,6].map(i=>r`
        <mms-tabs-item
          label=${e[`tab${i}Label`]}
          icon=${t(e[`tab${i}Icon`])||n}
          ?disabled=${e[`tab${i}Disabled`]}
        ></mms-tabs-item>
      `).slice(0,e.tabCount);return r`
      <mms-tabs
        label=${e.label}
        active-index=${e.activeIndex}
        orientation=${e.orientation}
        tab-style=${e.tabStyle}
        roundness=${e.roundness}
        size=${e.size}
        ?full-width=${e.fullWidth}
        ?icon-only=${e.iconOnly}
        data-density=${e.density===`compact`?`compact`:n}
      >
        ${i}
      </mms-tabs>
    `}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Tabs</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A tablist of <code style="\${t.monoSm}">mms-tabs-item</code> elements implementing the WAI-ARIA
        tabs pattern — roving tabindex, arrow-key navigation, and a sliding selection indicator for
        the minimal style. <code style="\${t.monoSm}">mms-tabs</code> manages the tablist only; consumers
        own the associated tabpanel(s).
      </p>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Slot <code style="\${t.monoSm}">mms-tabs-item</code> elements into <code style="\${t.monoSm}">mms-tabs</code>.
        The first tab is active by default; the minimal style (default) shows selection via a sliding indicator.
      </p>

      <div style="\${d.frame}">
        <mms-tabs label="Basic usage example">
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details"></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Tab style</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">tab-style="minimal"</code> (default) shows selection via a sliding indicator border.
        <code style="\${t.monoSm}">tab-style="fill"</code> shows selection via a solid background on the active tab —
        no separate indicator is rendered.
      </p>

      <div style="\${d.frame}">
        <div style="display: flex; flex-direction: column; gap: \${space.content};">
          <div>
            <p style="\${t.caption} margin-bottom: \${space.label};"><strong>Minimal (default)</strong></p>
            <mms-tabs label="Minimal style example" tab-style="minimal">
              <mms-tabs-item label="Overview"></mms-tabs-item>
              <mms-tabs-item label="Details"></mms-tabs-item>
              <mms-tabs-item label="History"></mms-tabs-item>
            </mms-tabs>
          </div>
          <div>
            <p style="\${t.caption} margin-bottom: \${space.label};"><strong>Fill</strong></p>
            <mms-tabs label="Fill style example" tab-style="fill">
              <mms-tabs-item label="Overview"></mms-tabs-item>
              <mms-tabs-item label="Details"></mms-tabs-item>
              <mms-tabs-item label="History"></mms-tabs-item>
            </mms-tabs>
          </div>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Orientation</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">orientation="vertical"</code> stacks tabs in a column and switches arrow-key
        navigation from Left/Right to Up/Down. See
        <a href="?path=/docs/content-display-tabs--layout-behavior" style="color: inherit;">Layout &amp; Behavior</a>
        for placement guidance and how a vertical tablist responds as its allocated width narrows.
      </p>

      <div style="\${d.frame}">
        <mms-tabs label="Vertical orientation example" orientation="vertical">
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details"></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">With icons</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">icon</code> prop adds a leading icon to a tab.
      </p>

      <div style="\${d.frame}">
        <mms-tabs label="Icon example">
          <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
          <mms-tabs-item label="Settings" icon="gear"></mms-tabs-item>
          <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Icon-only</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">icon-only</code> on <code style="\${t.monoSm}">mms-tabs</code> hides every
        tab's visible label while keeping it as the accessible name (<code style="\${t.monoSm}">aria-label</code>).
        Each tab needs its own <code style="\${t.monoSm}">icon</code> prop set.
      </p>

      <div style="\${d.frame}">
        <mms-tabs label="Icon-only example" icon-only>
          <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
          <mms-tabs-item label="Settings" icon="gear"></mms-tabs-item>
          <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Text size</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">size="lg"</code> increases label and icon size for contexts that need
        more visual weight than the default <code style="\${t.monoSm}">md</code> size.
      </p>

      <div style="\${d.frame}">
        <div style="display: flex; flex-direction: column; gap: \${space.content};">
          <div>
            <p style="\${t.caption} margin-bottom: \${space.label};"><strong>Medium (default)</strong></p>
            <mms-tabs label="Medium size example">
              <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
              <mms-tabs-item label="Details" icon="gear"></mms-tabs-item>
              <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
            </mms-tabs>
          </div>
          <div>
            <p style="\${t.caption} margin-bottom: \${space.label};"><strong>Large</strong></p>
            <mms-tabs label="Large size example" size="lg">
              <mms-tabs-item label="Overview" icon="house"></mms-tabs-item>
              <mms-tabs-item label="Details" icon="gear"></mms-tabs-item>
              <mms-tabs-item label="History" icon="clock-counter-clockwise"></mms-tabs-item>
            </mms-tabs>
          </div>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Full width</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">full-width</code> stretches every tab to share the tablist's width equally.
      </p>

      <div style="\${d.frame}">
        <mms-tabs label="Full width example" full-width>
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details"></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Disabled tab</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">disabled</code> is set per-tab on an individual <code style="\${t.monoSm}">mms-tabs-item</code>
        — there is no group-level disabled prop on <code style="\${t.monoSm}">mms-tabs</code>. A disabled tab is
        removed from the roving tabindex and skipped by arrow-key navigation.
      </p>

      <div style="\${d.frame}">
        <mms-tabs label="Disabled tab example">
          <mms-tabs-item label="Overview"></mms-tabs-item>
          <mms-tabs-item label="Details" disabled></mms-tabs-item>
          <mms-tabs-item label="History"></mms-tabs-item>
        </mms-tabs>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Props reference</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Every configurable prop on <code style="\${t.monoSm}">mms-tabs</code> and <code style="\${t.monoSm}">mms-tabs-item</code>,
        including the global props inherited by every mms component. All are exercised on the
        <a href="?path=/docs/content-display-tabs--playground" style="color: inherit;">Playground</a> page.
      </p>

      <h3 style="\${t.h3}">mms-tabs</h3>
      <table style="\${doc.table} margin-bottom: \${space.content};">
        <thead>
          <tr>
            <th style="\${doc.th}">Prop</th>
            <th style="\${doc.th}">Type</th>
            <th style="\${doc.th}">Default</th>
            <th style="\${doc.th}">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">label</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">string</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">'Tabs'</code></td>
            <td style="\${doc.td}">Accessible name for the tablist (<code style="\${t.monoSm}">aria-label</code>)</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">active-index</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">number</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">0</code></td>
            <td style="\${doc.td}">Index of the currently selected tab</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">orientation</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">'horizontal' | 'vertical'</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">'horizontal'</code></td>
            <td style="\${doc.td}">Layout orientation; switches arrow-key axis</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">tab-style</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">'minimal' | 'fill'</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">'minimal'</code></td>
            <td style="\${doc.td}">Visual style propagated to all tabs</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">full-width</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">boolean</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">false</code></td>
            <td style="\${doc.td}">Stretches tabs to fill the available width equally</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">icon-only</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">boolean</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">false</code></td>
            <td style="\${doc.td}">Forces every tab into icon-only mode, hiding all labels</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">size</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">'md' | 'lg'</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">'md'</code></td>
            <td style="\${doc.td}">Text size, propagated to all tabs</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">roundness</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">'boxed' | 'subtle' | 'rounded'</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">'subtle'</code></td>
            <td style="\${doc.td}">Corner radius on the active/hover tab's leading corners, propagated to all tabs. <code style="\${t.monoSm}">fill</code> style only.</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">collapse-breakpoint</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">number</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">undefined</code></td>
            <td style="\${doc.td}">Host width (px) below which a vertically-authored tablist auto-switches to horizontal. Undefined disables auto-collapse. See <a href="?path=/docs/content-display-tabs--layout-behavior" style="color: inherit;">Layout &amp; Behavior</a>.</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">mms-tabs CSS custom properties</h3>
      <table style="\${doc.table} margin-bottom: \${space.content};">
        <thead>
          <tr>
            <th style="\${doc.th}">Property</th>
            <th style="\${doc.th}">Default</th>
            <th style="\${doc.th}">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">--mms-tabs-vertical-max-width</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">none</code></td>
            <td style="\${doc.td}">Firmer cap on a vertical tablist's <code style="\${t.monoSm}">fit-content</code> width, for consumers who want label-wrap to kick in earlier than the widest label's natural size would trigger it.</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">mms-tabs-item</h3>
      <table style="\${doc.table} margin-bottom: \${space.content};">
        <thead>
          <tr>
            <th style="\${doc.th}">Prop</th>
            <th style="\${doc.th}">Type</th>
            <th style="\${doc.th}">Default</th>
            <th style="\${doc.th}">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">label</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">string</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">'Tab'</code></td>
            <td style="\${doc.td}">Tab label text; also the accessible name</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">icon</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">IconName</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">undefined</code></td>
            <td style="\${doc.td}">Optional leading icon</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">hide-label</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">boolean</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">false</code></td>
            <td style="\${doc.td}">Hides the visible label (icon-only tab); normally set via the parent's <code style="\${t.monoSm}">icon-only</code></td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">disabled</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">boolean</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">false</code></td>
            <td style="\${doc.td}">Disables selection and keyboard/pointer interaction; skipped by arrow-key navigation</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">panel-id</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">string</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">''</code></td>
            <td style="\${doc.td}">Id of the associated tabpanel — sets <code style="\${t.monoSm}">aria-controls</code></td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">active</code>, <code style="\${t.monoSm}">tab-style</code>, <code style="\${t.monoSm}">orientation</code>, <code style="\${t.monoSm}">size</code></td>
            <td style="\${doc.td}">—</td>
            <td style="\${doc.td}">—</td>
            <td style="\${doc.td}">Managed by the parent <code style="\${t.monoSm}">mms-tabs</code> — do not set directly</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Global props</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Inherited by every mms component per
        <code style="\${t.monoSm}">.claude/contracts/global-props.md</code>.
      </p>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Attribute</th>
            <th style="\${doc.th}">Values</th>
            <th style="\${doc.th}">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">data-theme</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">\${['default', ...BRAND_ORDER].map(b => \`'\${b}'\`).join(' | ')}</code></td>
            <td style="\${doc.td}">Brand theme (colors + fonts); set on <code style="\${t.monoSm}">mms-tabs</code></td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">data-density</code></td>
            <td style="\${doc.td}"><code style="\${t.monoSm}">'default' | 'compact'</code></td>
            <td style="\${doc.td}">Padding density; set on <code style="\${t.monoSm}">mms-tabs</code> — it propagates to each tab item</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
          <p style="\${t.bodySm} margin: 0;">
            <strong>WAI-ARIA Tabs Pattern.</strong> <code style="\${t.monoSm}">mms-tabs</code> renders
            <code style="\${t.monoSm}">role="tablist"</code>; each slotted <code style="\${t.monoSm}">mms-tabs-item</code>
            sets <code style="\${t.monoSm}">role="tab"</code>, <code style="\${t.monoSm}">aria-selected</code>, and a
            roving <code style="\${t.monoSm}">tabindex</code> directly on itself. Consumers own the associated
            tabpanel(s) — set <code style="\${t.monoSm}">panel-id</code> on each tab to wire up
            <code style="\${t.monoSm}">aria-controls</code>.
          </p>
        </div>
      </mms-card>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['tabs'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Focus:</strong> Announces the tab's label, "tab", position (e.g. "1 of 3"), and selected state</li>
        <li style="margin-bottom: \${space.label};"><strong>Selection:</strong> Announces "selected" as the active tab changes via arrow keys or click</li>
        <li style="margin-bottom: \${space.label};"><strong>Disabled:</strong> Announces "dimmed"/"unavailable" for a disabled tab; it is skipped by arrow-key navigation</li>
        <li><strong>Icon-only:</strong> Label is still announced via <code style="\${t.monoSm}">aria-label</code> even when visually hidden</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th} width: 140px;">Key</th>
            <th style="\${doc.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Tab</kbd></td>
            <td style="\${doc.td}">Move focus to the active tab / out of the tablist (roving tabindex — only the active tab is in the page tab order)</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">→</kbd> <kbd style="\${doc.kbd}">←</kbd></td>
            <td style="\${doc.td}">Move selection to the next / previous enabled tab, wrapping at the ends (horizontal orientation)</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">↓</kbd> <kbd style="\${doc.kbd}">↑</kbd></td>
            <td style="\${doc.td}">Move selection to the next / previous enabled tab, wrapping at the ends (vertical orientation)</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Home</kbd> / <kbd style="\${doc.kbd}">End</kbd></td>
            <td style="\${doc.td}">Jump to the first / last enabled tab</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd> / <kbd style="\${doc.kbd}">Space</kbd></td>
            <td style="\${doc.td}">Activate the focused tab (only needed when a tab is reached by means other than arrow keys)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Layout & Behavior',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Intro -->
      <h1 style="\${t.h1}">Layout &amp; Behavior</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Horizontal tabs need no layout guidance beyond the Overview page — they scroll their own overflow.
        Vertical tabs are different: <code style="\${t.monoSm}">mms-tabs</code> doesn't own the surrounding
        layout, so placement and responsiveness are a shared contract between the component and the page
        that hosts it. This page covers that contract.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Placement -->
      <h2 style="\${t.h2}">Placement</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        A vertical <code style="\${t.monoSm}">mms-tabs</code> sizes itself to
        <code style="\${t.monoSm}">fit-content</code> — it takes only as much width as its labels need, and
        never stretches to fill a container. Place it as the sidebar/nav column of a consumer-owned
        two-column grid or flex layout — the same pattern Carbon and Spectrum both use for their vertical
        tabs. mms doesn't ship a two-column layout component, so this is a placement convention, not
        something the component enforces in CSS.
      </p>

      <div style="display: flex; gap: \${space.content}; margin-bottom: \${space.content}; flex-wrap: wrap;">
        <div style="\${doc.panel} flex: 1; min-width: 240px;">
          <p style="\${doc.label} \${doc.muted} margin: 0 0 \${space.label};">✅ Do</p>
          <pre style="\${doc.pre} margin: 0;"><code>&lt;div class="two-col-layout"&gt;
  &lt;mms-tabs orientation="vertical"&gt;...&lt;/mms-tabs&gt;
  &lt;main&gt;...&lt;/main&gt;
&lt;/div&gt;</code></pre>
        </div>
        <div style="\${doc.panel} flex: 1; min-width: 240px;">
          <p style="\${doc.label} \${doc.muted} margin: 0 0 \${space.label};">❌ Don't</p>
          <pre style="\${doc.pre} margin: 0;"><code>&lt;mms-tabs orientation="vertical" full-width&gt;
  ...
&lt;/mms-tabs&gt;
&lt;main&gt;...&lt;/main&gt;</code></pre>
        </div>
      </div>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">full-width</code> stretches tabs to fill available width equally — it's a
        horizontal-orientation concept (equalizing tab widths across a row) and has no effect on a vertical
        tablist, which always sizes to content.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Responsiveness -->
      <h2 style="\${t.h2}">Responsiveness</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Take a common layout: 30% of the width allocated to vertical tabs, 70% to a content pane that
        updates with the selected tab. As the consumer's column narrows — a resizable panel, a smaller
        viewport, a denser page — a fixed-width vertical tablist with <code style="\${t.monoSm}">nowrap</code>
        labels would overflow past its allocated 30% once a label runs out of room. <code style="\${t.monoSm}">mms-tabs</code>
        handles this in three tiers:
      </p>

      <div style="display: flex; gap: \${space.content}; margin-bottom: \${space.subsection}; flex-wrap: wrap;">
        <div style="\${d.tierCard}">
          <h3 style="\${t.h3}">Tier 1 — comfortable</h3>
          <p style="\${t.bodySm} \${doc.muted}">Default behavior. Labels render on a single line at their natural width.</p>
        </div>
        <div style="\${d.tierCard}">
          <h3 style="\${t.h3}">Tier 2 — wrap</h3>
          <p style="\${t.bodySm} \${doc.muted}">As the allocated column narrows past a label's natural width, labels wrap onto multiple lines instead of overflowing. No configuration needed — this is always on.</p>
        </div>
        <div style="\${d.tierCard}">
          <h3 style="\${t.h3}">Tier 3 — collapse</h3>
          <p style="\${t.bodySm} \${doc.muted}">Below an optional <code style="\${t.monoSm}">collapse-breakpoint</code> (px), the tablist auto-switches to horizontal — ARIA, keyboard, and layout all follow automatically.</p>
        </div>
      </div>

      <div style="\${d.frame}">
        <span style="\${d.frameLabel}">Drag the ↘ handle on the container to resize — comfortable → wrap</span>
        <div style="box-sizing: border-box; resize: horizontal; overflow: auto; min-width: 480px; max-width: 100%; width: 100%; display: flex; gap: \${space.content}; height: 280px; margin-top: \${space.label}; border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-sm); padding: var(--spacing-md1);">
          <div style="flex: 0 0 30%; min-width: 0; border-right: var(--border-width-xs) solid var(--color-border-subtle); padding-right: var(--spacing-md1);">
            <mms-tabs orientation="vertical" label="Section navigation" style="--mms-tabs-vertical-max-width: 100%;">
              <mms-tabs-item label="Overview"></mms-tabs-item>
              <mms-tabs-item label="Provider Directory"></mms-tabs-item>
              <mms-tabs-item label="Appeals &amp; Grievances"></mms-tabs-item>
              <mms-tabs-item label="History"></mms-tabs-item>
            </mms-tabs>
          </div>
          <div style="flex: 1 1 70%; min-width: 0; display: flex; align-items: center; justify-content: center; \${t.body} \${doc.muted}">
            content pane
          </div>
        </div>
      </div>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        No <code style="\${t.monoSm}">collapse-breakpoint</code> is set here — this demo is scoped to Tiers 1
        and 2 only, which need no configuration and are always on. Tier 3 needs its own layout, shown below:
        collapsing orientation in place, with nothing else changing, just hides tabs behind horizontal scroll
        instead of helping — worse than wrap, not better.
      </p>

      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">collapse-breakpoint</code> is a paired contract: set it to the same width
        where the consumer's own layout switches from a side-by-side column to a stacked one. Below that
        width, the now-horizontal tablist needs the full row to itself — otherwise it's just trading one
        overflow problem for another.
      </p>

      <div style="display: flex; gap: \${space.content}; margin-bottom: \${space.subsection}; flex-wrap: wrap; align-items: flex-start;">
        <div style="flex: 1; min-width: 260px;">
          <div style="\${d.frame} margin-bottom: \${space.label};">
            <span style="\${d.frameLabel}">≥ collapse-breakpoint</span>
            <div style="display: flex; gap: \${space.content}; height: 170px;">
              <div style="width: 170px; border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-sm); padding: var(--spacing-sm2);">
                <mms-tabs orientation="vertical" label="Section navigation">
                  <mms-tabs-item label="Overview"></mms-tabs-item>
                  <mms-tabs-item label="Directory"></mms-tabs-item>
                  <mms-tabs-item label="Appeals"></mms-tabs-item>
                </mms-tabs>
              </div>
              <div style="flex: 1; border: var(--border-width-xs) dashed var(--color-border-default); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; \${t.body} \${doc.muted}">
                content
              </div>
            </div>
          </div>
          <p style="\${d.caption} margin-top: var(--spacing-xs2);">Side-by-side: sidebar + content</p>
        </div>

        <div style="flex: 1; min-width: 260px;">
          <div style="\${d.frame} margin-bottom: \${space.label};">
            <span style="\${d.frameLabel}">&lt; collapse-breakpoint</span>
            <div style="display: flex; flex-direction: column; gap: \${space.content}; height: 170px;">
              <div style="border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-sm); padding: var(--spacing-sm1);">
                <mms-tabs orientation="horizontal" label="Section navigation">
                  <mms-tabs-item label="Overview"></mms-tabs-item>
                  <mms-tabs-item label="Directory"></mms-tabs-item>
                  <mms-tabs-item label="Appeals"></mms-tabs-item>
                </mms-tabs>
              </div>
              <div style="flex: 1; border: var(--border-width-xs) dashed var(--color-border-default); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; \${t.body} \${doc.muted}">
                content
              </div>
            </div>
          </div>
          <p style="\${d.caption} margin-top: var(--spacing-xs2);">Stacked: tabs on top, content below</p>
        </div>
      </div>

      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        This is the whole fix — no auto-switch-to-icon-only tier sits between wrap and collapse. Icon-only
        mode remains a manual, author-chosen variant (<code style="\${t.monoSm}">icon-only</code>), not an
        automatic responsive step.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Because <code style="\${t.monoSm}">collapse-breakpoint</code> overwrites the live
        <code style="\${t.monoSm}">orientation</code> property to reuse all of its existing ARIA/keyboard/CSS
        behavior for free, the component fires <code style="\${t.monoSm}">tab-orientation-change</code>
        whenever it collapses or expands on its own, so a consumer reading <code style="\${t.monoSm}">orientation</code>
        back can tell the difference from a value it authored itself:
      </p>
      <pre style="\${doc.pre}"><code>tabsEl.addEventListener('tab-orientation-change', (e) => {
  // e.detail: { orientation: 'horizontal' | 'vertical', reason: 'collapse' | 'expand' }
});</code></pre>

      <div>
        <mms-inline-alert
          alert-type="caution"
          role="note"
          aria-live="off"
          .dismissible=\${false}
          summary="Vertical tabs are for in-page section navigation"
          message="— dashboard/content sections within a single page — not persistent primary/global navigation. Screen-reader users encounter the full tab list on every visit, and deep-linking into a specific tab's content is the consumer's routing responsibility; mms-tabs doesn't provide it."
        ></mms-inline-alert>
      </div>

    </div>
  \`
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    orientation: 'horizontal',
    tabStyle: 'minimal',
    roundness: 'subtle',
    fullWidth: true,
    iconOnly: false,
    size: 'md',
    label: 'Tabs',
    activeIndex: 0,
    tabCount: 3,
    tab1Label: 'Overview',
    tab1Icon: 'house',
    tab1Disabled: false,
    tab2Label: 'Details',
    tab2Icon: 'gear',
    tab2Disabled: false,
    tab3Label: 'History',
    tab3Icon: 'clock-counter-clockwise',
    tab3Disabled: false,
    tab4Label: 'Messages',
    tab4Icon: 'envelope',
    tab4Disabled: false,
    tab5Label: 'Profile',
    tab5Icon: 'user',
    tab5Disabled: false,
    tab6Label: 'Notifications',
    tab6Icon: 'bell',
    tab6Disabled: false,
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div
          style="
            display: flex;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 100%; max-width: \${PAGE_MAX};">
            \${story()}
          </div>
        </div>
      \`;
  }],
  argTypes: {
    // ── Visual ────────────────────────────────────────────────
    orientation: {
      name: 'Orientation',
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation',
      table: {
        category: 'Visual'
      }
    },
    tabStyle: {
      name: 'Tab style',
      control: 'select',
      options: ['minimal', 'fill'],
      description: 'Visual style propagated to all tabs',
      table: {
        category: 'Visual'
      }
    },
    roundness: {
      name: 'Roundness',
      control: 'select',
      options: ['boxed', 'subtle', 'rounded'],
      description: "Corner radius on the active/hover tab's leading corners. Fill style only.",
      table: {
        category: 'Visual'
      }
    },
    fullWidth: {
      name: 'Full width',
      control: 'boolean',
      description: 'Stretches tabs to fill the available width equally',
      table: {
        category: 'Visual'
      }
    },
    iconOnly: {
      name: 'Icon only',
      control: 'boolean',
      description: 'Forces every tab into icon-only mode, hiding all labels',
      table: {
        category: 'Visual'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['md', 'lg'],
      description: 'Text size, propagated to all tabs',
      table: {
        category: 'Visual'
      }
    },
    // ── Content ───────────────────────────────────────────────
    label: {
      name: 'Label',
      control: 'text',
      description: 'Accessible name for the tablist (aria-label)',
      table: {
        category: 'Content'
      }
    },
    activeIndex: {
      name: 'Active index',
      control: {
        type: 'number',
        min: 0,
        max: 5,
        step: 1
      },
      description: 'Index of the currently selected tab',
      table: {
        category: 'Content'
      }
    },
    tabCount: {
      name: 'Tab count',
      control: {
        type: 'range',
        min: 2,
        max: 6,
        step: 1
      },
      description: 'Number of tabs to render in this demo (the component itself has no cap)',
      table: {
        category: 'Content'
      }
    },
    // ── Per-tab ───────────────────────────────────────────────
    ...tabArgTypes(1),
    ...tabArgTypes(2),
    ...tabArgTypes(3),
    ...tabArgTypes(4),
    ...tabArgTypes(5),
    ...tabArgTypes(6),
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: BRAND_ORDER,
      description: 'Brand theme (affects typography and colors)',
      table: {
        category: 'Global'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Padding density',
      table: {
        category: 'Global'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string | boolean | number>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          attrs.push(\`label="\${a.label}"\`);
          if (a.activeIndex) attrs.push(\`active-index="\${a.activeIndex}"\`);
          if (a.orientation !== 'horizontal') attrs.push(\`orientation="\${a.orientation}"\`);
          if (a.tabStyle !== 'minimal') attrs.push(\`tab-style="\${a.tabStyle}"\`);
          if (a.size && a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.tabStyle === 'fill' && a.roundness && a.roundness !== 'subtle') attrs.push(\`roundness="\${a.roundness}"\`);
          if (a.fullWidth) attrs.push('full-width');
          if (a.iconOnly) attrs.push('icon-only');
          if (a.density === 'compact') attrs.push('data-density="compact"');
          const tabAttrs = (n: number) => {
            const icon = a[\`tab\${n}Icon\`];
            const disabled = a[\`tab\${n}Disabled\`];
            const line = [\`label="\${a[\`tab\${n}Label\`]}"\`];
            if (icon && icon !== 'none') line.push(\`icon="\${icon}"\`);
            if (disabled) line.push('disabled');
            return \`  <mms-tabs-item \${line.join(' ')}></mms-tabs-item>\`;
          };
          const tabCount = Number(a.tabCount) || 3;
          const tabLines = Array.from({
            length: tabCount
          }, (_, i) => tabAttrs(i + 1)).join('\\n');
          return \`<mms-tabs\\n  \${attrs.join('\\n  ')}\\n>\\n\${tabLines}\\n</mms-tabs>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none'
    }
  },
  render: (args: {
    label: string;
    activeIndex: number;
    orientation: string;
    tabStyle: string;
    roundness: string;
    fullWidth: boolean;
    iconOnly: boolean;
    size: string;
    tabCount: number;
    theme: string;
    density: string;
  } & Record<string, string | boolean | number>) => {
    const icon = (name: string) => name === 'none' ? undefined : name;
    const allTabs = [1, 2, 3, 4, 5, 6].map(n => html\`
        <mms-tabs-item
          label=\${args[\`tab\${n}Label\`]}
          icon=\${icon(args[\`tab\${n}Icon\`] as string) || nothing}
          ?disabled=\${args[\`tab\${n}Disabled\`]}
        ></mms-tabs-item>
      \`);
    const items = allTabs.slice(0, args.tabCount);
    return html\`
      <mms-tabs
        label=\${args.label}
        active-index=\${args.activeIndex}
        orientation=\${args.orientation}
        tab-style=\${args.tabStyle}
        roundness=\${args.roundness}
        size=\${args.size}
        ?full-width=\${args.fullWidth}
        ?icon-only=\${args.iconOnly}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
      >
        \${items}
      </mms-tabs>
    \`;
  }
}`,...j.parameters?.docs?.source}}},M=[`Overview`,`LayoutBehavior`,`PlaygroundStory`]}));N();export{k as LayoutBehavior,O as Overview,j as PlaygroundStory,M as __namedExportsOrder,T as default,N as n,C as t};