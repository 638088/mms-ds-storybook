import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-CBo78ikN.js";import{a,o,r as s,t as c}from"./a11y-outcome-CiARakld.js";import{t as l}from"./mms-tooltip.component-nZNmPYly.js";var u=t({Overview:()=>h,PlaygroundStory:()=>g,__namedExportsOrder:()=>_,default:()=>d}),d,f,p,m,h,g,_,v=e((()=>{i(),l(),a(),c(),d={title:`Content Display/Tooltip`,tags:[`!autodocs`]},f={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},p=`680px`,m=`960px`,h={name:`Overview`,render:()=>r`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${m}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${f.h1}">Tooltip</h1>
      <p style="${f.body} opacity: 0.85; max-width: ${p}; margin-bottom: 2rem;">
        A contextual bubble that reveals supplementary text next to a trigger — a question-mark icon by
        default, or any custom slotted content. Follows the
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/" style="color: inherit;">WAI-ARIA APG tooltip pattern</a>:
        <code style="${f.monoSm}">role="tooltip"</code>, hover/focus reveal, and Escape to dismiss.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${f.h2}">Basic usage</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Defaults to a hover-triggered bubble with a question-mark icon trigger, positioned below-right.
      </p>

      <div style="margin-bottom: 2rem; padding: 2rem 0 4rem;">
        <mms-tooltip text="Additional context about this field."></mms-tooltip>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Trigger -->
      <h2 style="${f.h2}">Trigger</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Three trigger modes: <code style="${f.monoSm}">hover</code> (default, also responds to focus),
        <code style="${f.monoSm}">focus</code> (keyboard/focus only), and <code style="${f.monoSm}">click</code>
        (toggles open, dismisses on outside click or Escape).
      </p>

      <div style="display: flex; gap: 3rem; margin-bottom: 2rem; padding: 2rem 0 4rem;">
        <div>
          <p style="${f.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">hover (default)</p>
          <mms-tooltip trigger="hover" text="Shown on hover or focus."></mms-tooltip>
        </div>
        <div>
          <p style="${f.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">focus</p>
          <mms-tooltip trigger="focus" text="Shown on focus only, not hover."></mms-tooltip>
        </div>
        <div>
          <p style="${f.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">click</p>
          <mms-tooltip trigger="click" text="Click to toggle; click outside or press Escape to close."></mms-tooltip>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Direction -->
      <h2 style="${f.h2}">Direction</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Four placements relative to the trigger: <code style="${f.monoSm}">below-right</code> (default),
        <code style="${f.monoSm}">below-left</code>, <code style="${f.monoSm}">above-right</code>, and
        <code style="${f.monoSm}">above-left</code>.
      </p>

      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        <code style="${f.monoSm}">direction</code> is a placement hint, not a guarantee: on open, the bubble
        measures itself against the viewport and automatically flips vertical (below/above) and/or horizontal
        (right/left) placement independently if the authored direction would clip past the viewport edge.
      </p>

      <div style="display: flex; gap: 3rem; margin-bottom: 2rem; padding: 3rem 0;">
        <div>
          <p style="${f.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">below-right</p>
          <mms-tooltip direction="below-right" trigger="click" text="Bubble opens below and to the right."></mms-tooltip>
        </div>
        <div>
          <p style="${f.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">below-left</p>
          <mms-tooltip direction="below-left" trigger="click" text="Bubble opens below and to the left."></mms-tooltip>
        </div>
        <div>
          <p style="${f.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">above-right</p>
          <mms-tooltip direction="above-right" trigger="click" text="Bubble opens above and to the right."></mms-tooltip>
        </div>
        <div>
          <p style="${f.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">above-left</p>
          <mms-tooltip direction="above-left" trigger="click" text="Bubble opens above and to the left."></mms-tooltip>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size -->
      <h2 style="${f.h2}">Size</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        <code style="${f.monoSm}">sm</code> and <code style="${f.monoSm}">md</code> (default) control the
        bubble's text scale, padding, and max-width.
      </p>

      <div style="display: flex; gap: 3rem; margin-bottom: 2rem; padding: 2rem 0 4rem;">
        <div>
          <p style="${f.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">sm</p>
          <mms-tooltip size="sm" trigger="click" text="Compact bubble for dense UI."></mms-tooltip>
        </div>
        <div>
          <p style="${f.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">md (default)</p>
          <mms-tooltip size="md" trigger="click" text="Standard bubble size for most contexts."></mms-tooltip>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Width & Wrapping -->
      <h2 style="${f.h2}">Width &amp; wrapping</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        The bubble sizes itself to its content — it never renders wider than the text needs — up to a flat
        <code style="${f.monoSm}">240px</code> max-width, regardless of <code style="${f.monoSm}">size</code>
        or viewport width (Fluent UI's tooltip cap). Tooltip content is meant to stay brief
        (<a href="https://www.nngroup.com/articles/tooltip-guidelines/" style="color: inherit;">Nielsen Norman Group</a>),
        so no separate mobile-breakpoint clamp is needed — 240px already fits comfortably even on narrow screens.
      </p>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Text that would exceed the cap wraps onto additional lines automatically, growing the bubble's
        height rather than its width — there's no truncation or ellipsis. This includes unbroken strings
        like long URLs or IDs, which wrap mid-token instead of overflowing the bubble.
      </p>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        This is independent of the viewport-aware placement described under
        <code style="${f.monoSm}">Direction</code> above: placement flips <em>where</em> the bubble sits
        relative to the trigger when it would clip a viewport edge, but never changes its width.
      </p>

      <div style="margin-bottom: 2rem; padding: 2rem 0 4rem;">
        <mms-tooltip
          active
          trigger="click"
          text="This tooltip text is long enough that it will wrap across several lines once it reaches the bubble's max-width cap."
        ></mms-tooltip>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Custom trigger -->
      <h2 style="${f.h2}">Custom trigger content</h2>
      <p style="${f.bodySm} opacity: 0.85; max-width: ${p}; margin-bottom: 1.5rem;">
        Slot in custom content to replace the default question-mark icon trigger.
      </p>

      <div style="margin-bottom: 2rem; padding: 2rem 0 4rem;">
        <mms-tooltip trigger="click" text="Custom slotted trigger content.">
          <mms-icon name="info" size="sm" label="More information"></mms-icon>
        </mms-tooltip>
      </div>

      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${f.monoSm} margin-bottom: 2rem;"><code>&lt;mms-tooltip trigger="click" text="Custom slotted trigger content."&gt;
  &lt;mms-icon name="info" size="sm" label="More information"&gt;&lt;/mms-icon&gt;
&lt;/mms-tooltip&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${f.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${f.bodySm} margin: 0;">
          <strong>Roadmap:</strong> mms-tooltip currently ships one canonical bordered/elevated-surface treatment
          (<code style="${f.monoSm}">--color-surface-raised</code> + <code style="${f.monoSm}">--elevation-md</code>).
          A dark/inverted "fill" style is planned once mms defines an inverse-surface semantic token.
        </p>
      </div>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${f.bodySm} margin: 0;">
          <strong>Target size:</strong> <code style="${f.monoSm}">.trigger</code> sets
          <code style="${f.monoSm}">min-width</code>/<code style="${f.monoSm}">min-height: 24px</code> so the hit area
          always meets WCAG 2.2 SC 2.5.8 Target Size (Minimum) regardless of
          <code style="${f.monoSm}">icon-size</code>, without changing the visible icon's size.
        </p>
      </div>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${f.bodySm} margin: 0;">
          <strong>Viewport-aware placement:</strong> mms measures the bubble against the viewport on open and flips
          vertical and/or horizontal placement independently if it would clip — reflected internally on an
          <code style="${f.monoSm}">effective</code> placement, never mutating the
          <code style="${f.monoSm}">direction</code> attribute a consumer set.
        </p>
      </div>

      <h3 style="${f.h3}">WCAG 2.2 AA Compliance</h3>
      ${s(o.tooltip.rows)}

      <h3 style="${f.h3}">Screen Reader Behavior</h3>
      <ul style="${f.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Trigger focus:</strong> Announces the trigger's accessible name (default icon: "More information") plus its description via <code style="${f.monoSm}">aria-describedby</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Bubble open:</strong> Announces <code style="${f.monoSm}">aria-expanded="true"</code> on the trigger; the bubble's text is exposed via <code style="${f.monoSm}">role="tooltip"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Caret:</strong> Hidden from assistive technology via <code style="${f.monoSm}">aria-hidden="true"</code> — decorative only</li>
        <li><strong>Bubble close:</strong> Announces <code style="${f.monoSm}">aria-expanded="false"</code></li>
      </ul>

      <h3 style="${f.h3}">Keyboard Navigation</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; width: 140px;">Key</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus to the trigger — reveals the bubble for <code style="${f.monoSm}">hover</code>/<code style="${f.monoSm}">focus</code> triggers</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggles the bubble open/closed — <code style="${f.monoSm}">click</code> trigger only</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Closes the bubble if open, for any trigger mode</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},g={name:`Playground`,tags:[`!dev`],args:{text:`Tooltip text`,size:`md`,direction:`below-right`,iconSize:`sm`,trigger:`hover`,theme:`maximus`,density:`default`},argTypes:{text:{name:`Text`,control:`text`,description:`Tooltip body text`,table:{category:`Content`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`],description:`Text/padding scale of the bubble`,table:{category:`Visual`}},direction:{name:`Direction`,control:`select`,options:[`below-right`,`below-left`,`above-right`,`above-left`],description:`Bubble placement relative to the trigger`,table:{category:`Visual`}},iconSize:{name:`Icon size`,control:`select`,options:[`sm`,`lg`],description:`Size of the default question-mark trigger icon`,table:{category:`Visual`}},trigger:{name:`Trigger`,control:`select`,options:[`hover`,`focus`,`click`],description:`Interaction that reveals the bubble`,table:{category:`Behavior`}},theme:{name:`Theme`,control:`select`,options:[`default`,`maximus`,`va-gov`,`uss-oh-dvs`],description:`Brand theme (affects typography and surface tokens)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-tooltip has no compact-specific styling yet`,table:{category:`Global`}}},decorators:[e=>r`
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
    `},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Tooltip</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A contextual bubble that reveals supplementary text next to a trigger — a question-mark icon by
        default, or any custom slotted content. Follows the
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/" style="color: inherit;">WAI-ARIA APG tooltip pattern</a>:
        <code style="\${t.monoSm}">role="tooltip"</code>, hover/focus reveal, and Escape to dismiss.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Defaults to a hover-triggered bubble with a question-mark icon trigger, positioned below-right.
      </p>

      <div style="margin-bottom: 2rem; padding: 2rem 0 4rem;">
        <mms-tooltip text="Additional context about this field."></mms-tooltip>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Trigger -->
      <h2 style="\${t.h2}">Trigger</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Three trigger modes: <code style="\${t.monoSm}">hover</code> (default, also responds to focus),
        <code style="\${t.monoSm}">focus</code> (keyboard/focus only), and <code style="\${t.monoSm}">click</code>
        (toggles open, dismisses on outside click or Escape).
      </p>

      <div style="display: flex; gap: 3rem; margin-bottom: 2rem; padding: 2rem 0 4rem;">
        <div>
          <p style="\${t.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">hover (default)</p>
          <mms-tooltip trigger="hover" text="Shown on hover or focus."></mms-tooltip>
        </div>
        <div>
          <p style="\${t.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">focus</p>
          <mms-tooltip trigger="focus" text="Shown on focus only, not hover."></mms-tooltip>
        </div>
        <div>
          <p style="\${t.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">click</p>
          <mms-tooltip trigger="click" text="Click to toggle; click outside or press Escape to close."></mms-tooltip>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Direction -->
      <h2 style="\${t.h2}">Direction</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Four placements relative to the trigger: <code style="\${t.monoSm}">below-right</code> (default),
        <code style="\${t.monoSm}">below-left</code>, <code style="\${t.monoSm}">above-right</code>, and
        <code style="\${t.monoSm}">above-left</code>.
      </p>

      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">direction</code> is a placement hint, not a guarantee: on open, the bubble
        measures itself against the viewport and automatically flips vertical (below/above) and/or horizontal
        (right/left) placement independently if the authored direction would clip past the viewport edge.
      </p>

      <div style="display: flex; gap: 3rem; margin-bottom: 2rem; padding: 3rem 0;">
        <div>
          <p style="\${t.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">below-right</p>
          <mms-tooltip direction="below-right" trigger="click" text="Bubble opens below and to the right."></mms-tooltip>
        </div>
        <div>
          <p style="\${t.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">below-left</p>
          <mms-tooltip direction="below-left" trigger="click" text="Bubble opens below and to the left."></mms-tooltip>
        </div>
        <div>
          <p style="\${t.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">above-right</p>
          <mms-tooltip direction="above-right" trigger="click" text="Bubble opens above and to the right."></mms-tooltip>
        </div>
        <div>
          <p style="\${t.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">above-left</p>
          <mms-tooltip direction="above-left" trigger="click" text="Bubble opens above and to the left."></mms-tooltip>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Size -->
      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">sm</code> and <code style="\${t.monoSm}">md</code> (default) control the
        bubble's text scale, padding, and max-width.
      </p>

      <div style="display: flex; gap: 3rem; margin-bottom: 2rem; padding: 2rem 0 4rem;">
        <div>
          <p style="\${t.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">sm</p>
          <mms-tooltip size="sm" trigger="click" text="Compact bubble for dense UI."></mms-tooltip>
        </div>
        <div>
          <p style="\${t.bodySm} opacity: 0.7; margin-bottom: 0.75rem;">md (default)</p>
          <mms-tooltip size="md" trigger="click" text="Standard bubble size for most contexts."></mms-tooltip>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Width & Wrapping -->
      <h2 style="\${t.h2}">Width &amp; wrapping</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The bubble sizes itself to its content — it never renders wider than the text needs — up to a flat
        <code style="\${t.monoSm}">240px</code> max-width, regardless of <code style="\${t.monoSm}">size</code>
        or viewport width (Fluent UI's tooltip cap). Tooltip content is meant to stay brief
        (<a href="https://www.nngroup.com/articles/tooltip-guidelines/" style="color: inherit;">Nielsen Norman Group</a>),
        so no separate mobile-breakpoint clamp is needed — 240px already fits comfortably even on narrow screens.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Text that would exceed the cap wraps onto additional lines automatically, growing the bubble's
        height rather than its width — there's no truncation or ellipsis. This includes unbroken strings
        like long URLs or IDs, which wrap mid-token instead of overflowing the bubble.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        This is independent of the viewport-aware placement described under
        <code style="\${t.monoSm}">Direction</code> above: placement flips <em>where</em> the bubble sits
        relative to the trigger when it would clip a viewport edge, but never changes its width.
      </p>

      <div style="margin-bottom: 2rem; padding: 2rem 0 4rem;">
        <mms-tooltip
          active
          trigger="click"
          text="This tooltip text is long enough that it will wrap across several lines once it reaches the bubble's max-width cap."
        ></mms-tooltip>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Custom trigger -->
      <h2 style="\${t.h2}">Custom trigger content</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Slot in custom content to replace the default question-mark icon trigger.
      </p>

      <div style="margin-bottom: 2rem; padding: 2rem 0 4rem;">
        <mms-tooltip trigger="click" text="Custom slotted trigger content.">
          <mms-icon name="info" size="sm" label="More information"></mms-icon>
        </mms-tooltip>
      </div>

      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm} margin-bottom: 2rem;"><code>&lt;mms-tooltip trigger="click" text="Custom slotted trigger content."&gt;
  &lt;mms-icon name="info" size="sm" label="More information"&gt;&lt;/mms-icon&gt;
&lt;/mms-tooltip&gt;</code></pre>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Roadmap:</strong> mms-tooltip currently ships one canonical bordered/elevated-surface treatment
          (<code style="\${t.monoSm}">--color-surface-raised</code> + <code style="\${t.monoSm}">--elevation-md</code>).
          A dark/inverted "fill" style is planned once mms defines an inverse-surface semantic token.
        </p>
      </div>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Target size:</strong> <code style="\${t.monoSm}">.trigger</code> sets
          <code style="\${t.monoSm}">min-width</code>/<code style="\${t.monoSm}">min-height: 24px</code> so the hit area
          always meets WCAG 2.2 SC 2.5.8 Target Size (Minimum) regardless of
          <code style="\${t.monoSm}">icon-size</code>, without changing the visible icon's size.
        </p>
      </div>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Viewport-aware placement:</strong> mms measures the bubble against the viewport on open and flips
          vertical and/or horizontal placement independently if it would clip — reflected internally on an
          <code style="\${t.monoSm}">effective</code> placement, never mutating the
          <code style="\${t.monoSm}">direction</code> attribute a consumer set.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['tooltip'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Trigger focus:</strong> Announces the trigger's accessible name (default icon: "More information") plus its description via <code style="\${t.monoSm}">aria-describedby</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Bubble open:</strong> Announces <code style="\${t.monoSm}">aria-expanded="true"</code> on the trigger; the bubble's text is exposed via <code style="\${t.monoSm}">role="tooltip"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Caret:</strong> Hidden from assistive technology via <code style="\${t.monoSm}">aria-hidden="true"</code> — decorative only</li>
        <li><strong>Bubble close:</strong> Announces <code style="\${t.monoSm}">aria-expanded="false"</code></li>
      </ul>

      <h3 style="\${t.h3}">Keyboard Navigation</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; width: 140px;">Key</th>
            <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Move focus to the trigger — reveals the bubble for <code style="\${t.monoSm}">hover</code>/<code style="\${t.monoSm}">focus</code> triggers</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Toggles the bubble open/closed — <code style="\${t.monoSm}">click</code> trigger only</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Closes the bubble if open, for any trigger mode</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
      options: ['default', 'maximus', 'va-gov', 'uss-oh-dvs'],
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
}`,...g.parameters?.docs?.source}}},_=[`Overview`,`PlaygroundStory`]}));v();export{h as Overview,g as PlaygroundStory,_ as __namedExportsOrder,d as default,v as n,u as t};