import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{n as a,r as o}from"./wcag-coverage-DNhlI7v1.js";import{a as s,c,d as l,i as u,n as d,o as f,r as p,u as m}from"./doc-styles-DkvR_Qyb.js";import{a as h,n as g}from"./a11y-outcome-Chf8PZL1.js";import{t as _}from"./mms-tooltip.component-BVbs43hE.js";var v=t({Overview:()=>b,PlaygroundStory:()=>x,__namedExportsOrder:()=>S,default:()=>y}),y,b,x,S,C=e((()=>{i(),_(),a(),g(),c(),y={title:`Content Display/Tooltip`,tags:[`!autodocs`]},b={name:`Overview`,render:()=>r`
    <div data-theme=${p} data-mode=${f()} style=${d}>

      <!-- Header -->
      <h1 style="${l.h1}">Tooltip</h1>
      <p style="${l.body} ${s.muted} max-width: ${u}; margin-bottom: ${m.subsection};">
        A contextual bubble that reveals supplementary text next to a trigger — a question-mark icon by
        default, or any custom slotted content. Follows the
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/" style="color: inherit;">WAI-ARIA APG tooltip pattern</a>:
        <code style="${l.monoSm}">role="tooltip"</code>, hover/focus reveal, and Escape to dismiss.
      </p>

      <hr style="${s.divider}" />

      <!-- Basic Usage -->
      <h2 style="${l.h2}">Basic usage</h2>
      <p style="${l.bodySm} ${s.muted} max-width: ${u}; margin-bottom: ${m.subsection};">
        Defaults to a hover-triggered bubble with a question-mark icon trigger, positioned below-right.
      </p>

      <div style="margin-bottom: ${m.subsection}; padding: var(--spacing-lg2) 0 var(--spacing-xxl1);">
        <mms-tooltip text="Additional context about this field."></mms-tooltip>
      </div>

      <hr style="${s.divider}" />

      <!-- Trigger -->
      <h2 style="${l.h2}">Trigger</h2>
      <p style="${l.bodySm} ${s.muted} max-width: ${u}; margin-bottom: ${m.subsection};">
        Three trigger modes: <code style="${l.monoSm}">hover</code> (default, also responds to focus),
        <code style="${l.monoSm}">focus</code> (keyboard/focus only), and <code style="${l.monoSm}">click</code>
        (toggles open, dismisses on outside click or Escape).
      </p>

      <div style="display: flex; gap: ${m.subsection}; margin-bottom: ${m.subsection}; padding: var(--spacing-lg2) 0 var(--spacing-xxl1);">
        <div>
          <p style="${l.bodySm} ${s.muted} margin-bottom: ${m.content};">hover (default)</p>
          <mms-tooltip trigger="hover" text="Shown on hover or focus."></mms-tooltip>
        </div>
        <div>
          <p style="${l.bodySm} ${s.muted} margin-bottom: ${m.content};">focus</p>
          <mms-tooltip trigger="focus" text="Shown on focus only, not hover."></mms-tooltip>
        </div>
        <div>
          <p style="${l.bodySm} ${s.muted} margin-bottom: ${m.content};">click</p>
          <mms-tooltip trigger="click" text="Click to toggle; click outside or press Escape to close."></mms-tooltip>
        </div>
      </div>

      <hr style="${s.divider}" />

      <!-- Direction -->
      <h2 style="${l.h2}">Direction</h2>
      <p style="${l.bodySm} ${s.muted} max-width: ${u}; margin-bottom: ${m.content};">
        Four placements relative to the trigger: <code style="${l.monoSm}">below-right</code> (default),
        <code style="${l.monoSm}">below-left</code>, <code style="${l.monoSm}">above-right</code>, and
        <code style="${l.monoSm}">above-left</code>.
      </p>

      <p style="${l.bodySm} ${s.muted} max-width: ${u}; margin-bottom: ${m.subsection};">
        <code style="${l.monoSm}">direction</code> is a placement hint, not a guarantee: on open, the bubble
        measures itself against the viewport and automatically flips vertical (below/above) and/or horizontal
        (right/left) placement independently if the authored direction would clip past the viewport edge.
      </p>

      <div style="display: flex; gap: ${m.subsection}; margin-bottom: ${m.subsection}; padding: var(--spacing-xl2) 0;">
        <div>
          <p style="${l.bodySm} ${s.muted} margin-bottom: ${m.content};">below-right</p>
          <mms-tooltip direction="below-right" trigger="click" text="Bubble opens below and to the right."></mms-tooltip>
        </div>
        <div>
          <p style="${l.bodySm} ${s.muted} margin-bottom: ${m.content};">below-left</p>
          <mms-tooltip direction="below-left" trigger="click" text="Bubble opens below and to the left."></mms-tooltip>
        </div>
        <div>
          <p style="${l.bodySm} ${s.muted} margin-bottom: ${m.content};">above-right</p>
          <mms-tooltip direction="above-right" trigger="click" text="Bubble opens above and to the right."></mms-tooltip>
        </div>
        <div>
          <p style="${l.bodySm} ${s.muted} margin-bottom: ${m.content};">above-left</p>
          <mms-tooltip direction="above-left" trigger="click" text="Bubble opens above and to the left."></mms-tooltip>
        </div>
      </div>

      <hr style="${s.divider}" />

      <!-- Size -->
      <h2 style="${l.h2}">Size</h2>
      <p style="${l.bodySm} ${s.muted} max-width: ${u}; margin-bottom: ${m.subsection};">
        <code style="${l.monoSm}">sm</code> and <code style="${l.monoSm}">md</code> (default) control the
        bubble's text scale, padding, and max-width.
      </p>

      <div style="display: flex; gap: ${m.subsection}; margin-bottom: ${m.subsection}; padding: var(--spacing-lg2) 0 var(--spacing-xxl1);">
        <div>
          <p style="${l.bodySm} ${s.muted} margin-bottom: ${m.content};">sm</p>
          <mms-tooltip size="sm" trigger="click" text="Compact bubble for dense UI."></mms-tooltip>
        </div>
        <div>
          <p style="${l.bodySm} ${s.muted} margin-bottom: ${m.content};">md (default)</p>
          <mms-tooltip size="md" trigger="click" text="Standard bubble size for most contexts."></mms-tooltip>
        </div>
      </div>

      <hr style="${s.divider}" />

      <!-- Width & Wrapping -->
      <h2 style="${l.h2}">Width &amp; wrapping</h2>
      <p style="${l.bodySm} ${s.muted} max-width: ${u}; margin-bottom: ${m.content};">
        The bubble sizes itself to its content — it never renders wider than the text needs — up to a flat
        <code style="${l.monoSm}">240px</code> max-width, regardless of <code style="${l.monoSm}">size</code>
        or viewport width (Fluent UI's tooltip cap). Tooltip content is meant to stay brief
        (<a href="https://www.nngroup.com/articles/tooltip-guidelines/" style="color: inherit;">Nielsen Norman Group</a>),
        so no separate mobile-breakpoint clamp is needed — 240px already fits comfortably even on narrow screens.
      </p>
      <p style="${l.bodySm} ${s.muted} max-width: ${u}; margin-bottom: ${m.content};">
        Text that would exceed the cap wraps onto additional lines automatically, growing the bubble's
        height rather than its width — there's no truncation or ellipsis. This includes unbroken strings
        like long URLs or IDs, which wrap mid-token instead of overflowing the bubble.
      </p>
      <p style="${l.bodySm} ${s.muted} max-width: ${u}; margin-bottom: ${m.subsection};">
        This is independent of the viewport-aware placement described under
        <code style="${l.monoSm}">Direction</code> above: placement flips <em>where</em> the bubble sits
        relative to the trigger when it would clip a viewport edge, but never changes its width.
      </p>

      <div style="margin-bottom: ${m.subsection}; padding: var(--spacing-lg2) 0 var(--spacing-xxl1);">
        <mms-tooltip
          active
          trigger="click"
          text="This tooltip text is long enough that it will wrap across several lines once it reaches the bubble's max-width cap."
        ></mms-tooltip>
      </div>

      <hr style="${s.divider}" />

      <!-- Custom trigger -->
      <h2 style="${l.h2}">Custom trigger content</h2>
      <p style="${l.bodySm} ${s.muted} max-width: ${u}; margin-bottom: ${m.subsection};">
        Slot in custom content to replace the default question-mark icon trigger.
      </p>

      <div style="margin-bottom: ${m.subsection}; padding: var(--spacing-lg2) 0 var(--spacing-xxl1);">
        <mms-tooltip trigger="click" text="Custom slotted trigger content.">
          <mms-icon name="info" size="sm" label="More information"></mms-icon>
        </mms-tooltip>
      </div>

      <pre style="${s.pre}"><code>&lt;mms-tooltip trigger="click" text="Custom slotted trigger content."&gt;
  &lt;mms-icon name="info" size="sm" label="More information"&gt;&lt;/mms-icon&gt;
&lt;/mms-tooltip&gt;</code></pre>

      <hr style="${s.divider}" />

      <!-- Accessibility -->
      <h2 style="${l.h2}">Accessibility</h2>

      <ul style="${l.bodySm} ${s.muted} padding-left: var(--spacing-lg1); margin: 0 0 ${m.subsection};">
        <li style="margin-bottom: ${m.label};">
          <strong>Roadmap:</strong> mms-tooltip currently ships one canonical bordered/elevated-surface treatment
          (<code style="${l.monoSm}">--color-surface-raised</code> + <code style="${l.monoSm}">--elevation-md</code>).
          A dark/inverted "fill" style is planned once mms defines an inverse-surface semantic token.
        </li>
        <li style="margin-bottom: ${m.label};">
          <strong>Target size:</strong> <code style="${l.monoSm}">.trigger</code> sets
          <code style="${l.monoSm}">min-width</code>/<code style="${l.monoSm}">min-height: 24px</code> so the hit area
          always meets WCAG 2.2 SC 2.5.8 Target Size (Minimum) regardless of
          <code style="${l.monoSm}">icon-size</code>, without changing the visible icon's size.
        </li>
        <li>
          <strong>Viewport-aware placement:</strong> mms measures the bubble against the viewport on open and flips
          vertical and/or horizontal placement independently if it would clip — reflected internally on an
          <code style="${l.monoSm}">effective</code> placement, never mutating the
          <code style="${l.monoSm}">direction</code> attribute a consumer set.
        </li>
      </ul>

      <h3 style="${l.h3}">WCAG 2.2 AA compliance</h3>
      ${h(o.tooltip.rows)}

      <h3 style="${l.h3}">Screen reader behavior</h3>
      <ul style="${l.bodySm} ${s.muted} margin: 0 0 ${m.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${m.label};"><strong>Trigger focus:</strong> Announces the trigger's accessible name (default icon: "More information") plus its description via <code style="${l.monoSm}">aria-describedby</code></li>
        <li style="margin-bottom: ${m.label};"><strong>Bubble open:</strong> Announces <code style="${l.monoSm}">aria-expanded="true"</code> on the trigger; the bubble's text is exposed via <code style="${l.monoSm}">role="tooltip"</code></li>
        <li style="margin-bottom: ${m.label};"><strong>Caret:</strong> Hidden from assistive technology via <code style="${l.monoSm}">aria-hidden="true"</code> — decorative only</li>
        <li><strong>Bubble close:</strong> Announces <code style="${l.monoSm}">aria-expanded="false"</code></li>
      </ul>

      <h3 style="${l.h3}">Keyboard navigation</h3>
      <table style="${s.table} margin-bottom: ${m.subsection};">
        <thead>
          <tr>
            <th style="${s.th} width: 140px;">Key</th>
            <th style="${s.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${s.td}"><kbd style="${s.kbd}">Tab</kbd></td>
            <td style="${s.td}">Move focus to the trigger — reveals the bubble for <code style="${l.monoSm}">hover</code>/<code style="${l.monoSm}">focus</code> triggers</td>
          </tr>
          <tr>
            <td style="${s.td}"><kbd style="${s.kbd}">Enter</kbd> / <kbd style="${s.kbd}">Space</kbd></td>
            <td style="${s.td}">Toggles the bubble open/closed — <code style="${l.monoSm}">click</code> trigger only</td>
          </tr>
          <tr>
            <td style="${s.td}"><kbd style="${s.kbd}">Escape</kbd></td>
            <td style="${s.td}">Closes the bubble if open, for any trigger mode</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},x={name:`Playground`,tags:[`!dev`],args:{text:`Tooltip text`,size:`md`,direction:`below-right`,iconSize:`sm`,trigger:`hover`,theme:`maximus`,density:`default`},argTypes:{text:{name:`Text`,control:`text`,description:`Tooltip body text`,table:{category:`Content`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`],description:`Text/padding scale of the bubble`,table:{category:`Visual`}},direction:{name:`Direction`,control:`select`,options:[`below-right`,`below-left`,`above-right`,`above-left`],description:`Bubble placement relative to the trigger`,table:{category:`Visual`}},iconSize:{name:`Icon size`,control:`select`,options:[`sm`,`lg`],description:`Size of the default question-mark trigger icon`,table:{category:`Visual`}},trigger:{name:`Trigger`,control:`select`,options:[`hover`,`focus`,`click`],description:`Interaction that reveals the bubble`,table:{category:`Behavior`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme (affects typography and surface tokens)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-tooltip has no compact-specific styling yet`,table:{category:`Global`}}},decorators:[e=>r`
        <div
          style="
            min-height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          ${e()}
        </div>
      `],parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.text&&r.push(`text="${n.text}"`),n.size&&n.size!==`md`&&r.push(`size="${n.size}"`),n.direction&&n.direction!==`below-right`&&r.push(`direction="${n.direction}"`),n.iconSize&&n.iconSize!==`sm`&&r.push(`icon-size="${n.iconSize}"`),n.trigger&&n.trigger!==`hover`&&r.push(`trigger="${n.trigger}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-tooltip\n  ${r.join(`
  `)}\n></mms-tooltip>`},language:`html`}},controls:{sort:`none`}},render:e=>r`
      <mms-tooltip
        text=${e.text||n}
        size=${e.size}
        direction=${e.direction}
        icon-size=${e.iconSize}
        trigger=${e.trigger}
        data-density=${e.density===`compact`?`compact`:n}
      ></mms-tooltip>
    `},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Tooltip</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A contextual bubble that reveals supplementary text next to a trigger — a question-mark icon by
        default, or any custom slotted content. Follows the
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/" style="color: inherit;">WAI-ARIA APG tooltip pattern</a>:
        <code style="\${t.monoSm}">role="tooltip"</code>, hover/focus reveal, and Escape to dismiss.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Defaults to a hover-triggered bubble with a question-mark icon trigger, positioned below-right.
      </p>

      <div style="margin-bottom: \${space.subsection}; padding: var(--spacing-lg2) 0 var(--spacing-xxl1);">
        <mms-tooltip text="Additional context about this field."></mms-tooltip>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Trigger -->
      <h2 style="\${t.h2}">Trigger</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Three trigger modes: <code style="\${t.monoSm}">hover</code> (default, also responds to focus),
        <code style="\${t.monoSm}">focus</code> (keyboard/focus only), and <code style="\${t.monoSm}">click</code>
        (toggles open, dismisses on outside click or Escape).
      </p>

      <div style="display: flex; gap: \${space.subsection}; margin-bottom: \${space.subsection}; padding: var(--spacing-lg2) 0 var(--spacing-xxl1);">
        <div>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">hover (default)</p>
          <mms-tooltip trigger="hover" text="Shown on hover or focus."></mms-tooltip>
        </div>
        <div>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">focus</p>
          <mms-tooltip trigger="focus" text="Shown on focus only, not hover."></mms-tooltip>
        </div>
        <div>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">click</p>
          <mms-tooltip trigger="click" text="Click to toggle; click outside or press Escape to close."></mms-tooltip>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Direction -->
      <h2 style="\${t.h2}">Direction</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Four placements relative to the trigger: <code style="\${t.monoSm}">below-right</code> (default),
        <code style="\${t.monoSm}">below-left</code>, <code style="\${t.monoSm}">above-right</code>, and
        <code style="\${t.monoSm}">above-left</code>.
      </p>

      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">direction</code> is a placement hint, not a guarantee: on open, the bubble
        measures itself against the viewport and automatically flips vertical (below/above) and/or horizontal
        (right/left) placement independently if the authored direction would clip past the viewport edge.
      </p>

      <div style="display: flex; gap: \${space.subsection}; margin-bottom: \${space.subsection}; padding: var(--spacing-xl2) 0;">
        <div>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">below-right</p>
          <mms-tooltip direction="below-right" trigger="click" text="Bubble opens below and to the right."></mms-tooltip>
        </div>
        <div>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">below-left</p>
          <mms-tooltip direction="below-left" trigger="click" text="Bubble opens below and to the left."></mms-tooltip>
        </div>
        <div>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">above-right</p>
          <mms-tooltip direction="above-right" trigger="click" text="Bubble opens above and to the right."></mms-tooltip>
        </div>
        <div>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">above-left</p>
          <mms-tooltip direction="above-left" trigger="click" text="Bubble opens above and to the left."></mms-tooltip>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Size -->
      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">sm</code> and <code style="\${t.monoSm}">md</code> (default) control the
        bubble's text scale, padding, and max-width.
      </p>

      <div style="display: flex; gap: \${space.subsection}; margin-bottom: \${space.subsection}; padding: var(--spacing-lg2) 0 var(--spacing-xxl1);">
        <div>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">sm</p>
          <mms-tooltip size="sm" trigger="click" text="Compact bubble for dense UI."></mms-tooltip>
        </div>
        <div>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">md (default)</p>
          <mms-tooltip size="md" trigger="click" text="Standard bubble size for most contexts."></mms-tooltip>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Width & Wrapping -->
      <h2 style="\${t.h2}">Width &amp; wrapping</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The bubble sizes itself to its content — it never renders wider than the text needs — up to a flat
        <code style="\${t.monoSm}">240px</code> max-width, regardless of <code style="\${t.monoSm}">size</code>
        or viewport width (Fluent UI's tooltip cap). Tooltip content is meant to stay brief
        (<a href="https://www.nngroup.com/articles/tooltip-guidelines/" style="color: inherit;">Nielsen Norman Group</a>),
        so no separate mobile-breakpoint clamp is needed — 240px already fits comfortably even on narrow screens.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Text that would exceed the cap wraps onto additional lines automatically, growing the bubble's
        height rather than its width — there's no truncation or ellipsis. This includes unbroken strings
        like long URLs or IDs, which wrap mid-token instead of overflowing the bubble.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        This is independent of the viewport-aware placement described under
        <code style="\${t.monoSm}">Direction</code> above: placement flips <em>where</em> the bubble sits
        relative to the trigger when it would clip a viewport edge, but never changes its width.
      </p>

      <div style="margin-bottom: \${space.subsection}; padding: var(--spacing-lg2) 0 var(--spacing-xxl1);">
        <mms-tooltip
          active
          trigger="click"
          text="This tooltip text is long enough that it will wrap across several lines once it reaches the bubble's max-width cap."
        ></mms-tooltip>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Custom trigger -->
      <h2 style="\${t.h2}">Custom trigger content</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Slot in custom content to replace the default question-mark icon trigger.
      </p>

      <div style="margin-bottom: \${space.subsection}; padding: var(--spacing-lg2) 0 var(--spacing-xxl1);">
        <mms-tooltip trigger="click" text="Custom slotted trigger content.">
          <mms-icon name="info" size="sm" label="More information"></mms-icon>
        </mms-tooltip>
      </div>

      <pre style="\${doc.pre}"><code>&lt;mms-tooltip trigger="click" text="Custom slotted trigger content."&gt;
  &lt;mms-icon name="info" size="sm" label="More information"&gt;&lt;/mms-icon&gt;
&lt;/mms-tooltip&gt;</code></pre>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <ul style="\${t.bodySm} \${doc.muted} padding-left: var(--spacing-lg1); margin: 0 0 \${space.subsection};">
        <li style="margin-bottom: \${space.label};">
          <strong>Roadmap:</strong> mms-tooltip currently ships one canonical bordered/elevated-surface treatment
          (<code style="\${t.monoSm}">--color-surface-raised</code> + <code style="\${t.monoSm}">--elevation-md</code>).
          A dark/inverted "fill" style is planned once mms defines an inverse-surface semantic token.
        </li>
        <li style="margin-bottom: \${space.label};">
          <strong>Target size:</strong> <code style="\${t.monoSm}">.trigger</code> sets
          <code style="\${t.monoSm}">min-width</code>/<code style="\${t.monoSm}">min-height: 24px</code> so the hit area
          always meets WCAG 2.2 SC 2.5.8 Target Size (Minimum) regardless of
          <code style="\${t.monoSm}">icon-size</code>, without changing the visible icon's size.
        </li>
        <li>
          <strong>Viewport-aware placement:</strong> mms measures the bubble against the viewport on open and flips
          vertical and/or horizontal placement independently if it would clip — reflected internally on an
          <code style="\${t.monoSm}">effective</code> placement, never mutating the
          <code style="\${t.monoSm}">direction</code> attribute a consumer set.
        </li>
      </ul>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['tooltip'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Trigger focus:</strong> Announces the trigger's accessible name (default icon: "More information") plus its description via <code style="\${t.monoSm}">aria-describedby</code></li>
        <li style="margin-bottom: \${space.label};"><strong>Bubble open:</strong> Announces <code style="\${t.monoSm}">aria-expanded="true"</code> on the trigger; the bubble's text is exposed via <code style="\${t.monoSm}">role="tooltip"</code></li>
        <li style="margin-bottom: \${space.label};"><strong>Caret:</strong> Hidden from assistive technology via <code style="\${t.monoSm}">aria-hidden="true"</code> — decorative only</li>
        <li><strong>Bubble close:</strong> Announces <code style="\${t.monoSm}">aria-expanded="false"</code></li>
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
            <td style="\${doc.td}">Move focus to the trigger — reveals the bubble for <code style="\${t.monoSm}">hover</code>/<code style="\${t.monoSm}">focus</code> triggers</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd> / <kbd style="\${doc.kbd}">Space</kbd></td>
            <td style="\${doc.td}">Toggles the bubble open/closed — <code style="\${t.monoSm}">click</code> trigger only</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Escape</kbd></td>
            <td style="\${doc.td}">Closes the bubble if open, for any trigger mode</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    text: 'Tooltip text',
    size: 'md' as TooltipSize,
    direction: 'below-right' as TooltipDirection,
    iconSize: 'sm' as TooltipIconSize,
    trigger: 'hover' as TooltipTrigger,
    theme: 'maximus',
    density: 'default'
  },
  argTypes: {
    // ── Content ───────────────────────────────────────────────
    text: {
      name: 'Text',
      control: 'text',
      description: 'Tooltip body text',
      table: {
        category: 'Content'
      }
    },
    // ── Visual ────────────────────────────────────────────────
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md'],
      description: 'Text/padding scale of the bubble',
      table: {
        category: 'Visual'
      }
    },
    direction: {
      name: 'Direction',
      control: 'select',
      options: ['below-right', 'below-left', 'above-right', 'above-left'],
      description: 'Bubble placement relative to the trigger',
      table: {
        category: 'Visual'
      }
    },
    iconSize: {
      name: 'Icon size',
      control: 'select',
      options: ['sm', 'lg'],
      description: 'Size of the default question-mark trigger icon',
      table: {
        category: 'Visual'
      }
    },
    // ── Behavior ──────────────────────────────────────────────
    trigger: {
      name: 'Trigger',
      control: 'select',
      options: ['hover', 'focus', 'click'],
      description: 'Interaction that reveals the bubble',
      table: {
        category: 'Behavior'
      }
    },
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
      description: 'Brand theme (affects typography and surface tokens)',
      table: {
        category: 'Global'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Accepted as a global attribute passthrough — mms-tooltip has no compact-specific styling yet',
      table: {
        category: 'Global'
      }
    }
  },
  decorators: [(story: () => unknown) => {
    // Layout only - theme/mode/background handled by global decorator
    return html\`
        <div
          style="
            min-height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          \${story()}
        </div>
      \`;
  }],
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.text) attrs.push(\`text="\${a.text}"\`);
          if (a.size && a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.direction && a.direction !== 'below-right') attrs.push(\`direction="\${a.direction}"\`);
          if (a.iconSize && a.iconSize !== 'sm') attrs.push(\`icon-size="\${a.iconSize}"\`);
          if (a.trigger && a.trigger !== 'hover') attrs.push(\`trigger="\${a.trigger}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-tooltip\\n  \${attrs.join('\\n  ')}\\n></mms-tooltip>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none' // Preserve argTypes definition order
    }
  },
  render: (args: {
    text: string;
    size: TooltipSize;
    direction: TooltipDirection;
    iconSize: TooltipIconSize;
    trigger: TooltipTrigger;
    theme: string;
    density: string;
  }) => {
    return html\`
      <mms-tooltip
        text=\${args.text || nothing}
        size=\${args.size}
        direction=\${args.direction}
        icon-size=\${args.iconSize}
        trigger=\${args.trigger}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
      ></mms-tooltip>
    \`;
  }
}`,...x.parameters?.docs?.source}}},S=[`Overview`,`PlaygroundStory`]}));C();export{b as Overview,x as PlaygroundStory,S as __namedExportsOrder,y as default,C as n,v as t};