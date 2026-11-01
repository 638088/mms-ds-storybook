import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{c as a,i as o}from"./iframe-CEHEciqj.js";import{t as s}from"./mms-card.component-Ae9XIj4r.js";import{i as c,n as l,r as u}from"./theme-constraints-BnNpJNRe.js";import{n as d,r as f}from"./wcag-coverage-DNhlI7v1.js";import{a as p,c as m,d as h,i as g,n as _,o as v,r as y,u as b}from"./doc-styles-DkvR_Qyb.js";import{a as x,n as S}from"./a11y-outcome-Chf8PZL1.js";var C=t({Overview:()=>O,PlaygroundStory:()=>k,__namedExportsOrder:()=>A,default:()=>D}),w,T,E,D,O,k,A,j=e((()=>{i(),s(),a(),o(),d(),S(),u(),m(),w=`.check.x.gear.user.calendar.shopping-cart.heart.star.question.info.flag.heartbeat.first-aid.first-aid-kit.pulse.stethoscope.hospital.pill.tooth.wheelchair.hand-heart.baby.wallet.credit-card.piggy-bank.coins.currency-dollar.bank.scales.handshake.buildings.building.house.identification-card.map-pin.globe.compass.users-three.user-circle.person.graduation-cap.clipboard-text.book-open.certificate.chart-line-up.chart-pie.chart-bar.shield.shield-check.umbrella.lifebuoy.medal.trophy`.split(`.`),T=[``,`community-support`,`family-consultation`,`parent-and-baby`,`caregiver-support`,`team-collaboration`,`community-outreach`,`support-call`],E={"community-support":{url:`https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80&auto=format&fit=crop`,alt:`Two people holding hands across a table in a moment of comfort`},"family-consultation":{url:`https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=800&q=80&auto=format&fit=crop`,alt:`A doctor consults with a mother and child in an office`},"parent-and-baby":{url:`https://images.unsplash.com/photo-1556566353-cdcb88a69f3c?w=800&q=80&auto=format&fit=crop`,alt:`A woman and baby sitting together on a sofa`},"caregiver-support":{url:`https://images.unsplash.com/photo-1543333995-a78aea2eee50?w=800&q=80&auto=format&fit=crop`,alt:`A caregiver standing next to a woman using a wheelchair`},"team-collaboration":{url:`https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&q=80&auto=format&fit=crop`,alt:`Four coworkers smiling together around a laptop at a table`},"community-outreach":{url:`https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?w=800&q=80&auto=format&fit=crop`,alt:`An elderly woman in a wheelchair talking with a man`},"support-call":{url:`https://images.unsplash.com/photo-1758876022836-70b89d3e6944?w=800&q=80&auto=format&fit=crop`,alt:`A woman talking on the phone at her desk with a laptop`}},D={title:`Content Display/Card`,tags:[`!autodocs`]},O={name:`Overview`,render:()=>r`
    <div data-theme=${y} data-mode=${v()} style=${_}>

      <!-- Header -->
      <h1 style="${h.h1}">Card</h1>
      <p style="${h.body} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        Displays content and actions related to a single subject. Typically shown as part of a
        group, each card highlights key details and distinguishes it from the set.
        <code style="${h.monoSm}">mms-card</code> composes an optional media slot, header
        (icon, title, subtitle, overflow trigger), body (description + custom slot), and
        footer actions.
      </p>

      <hr style="${p.divider}" />

      <!-- Basic usage -->
      <h2 style="${h.h2}">Basic usage</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        A title and description are enough for a minimal card.
      </p>

      <div style="margin-bottom: ${b.subsection}; max-width: 360px;">
        <mms-card title-text="Plan overview" description-text="See what's covered under your current plan, including copays and deductibles."></mms-card>
      </div>

      <hr style="${p.divider}" />

      <!-- Layout & sizing -->
      <h2 style="${h.h2}">Layout &amp; sizing</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        <code style="${h.monoSm}">mms-card</code> is fluid — it fills whatever container it's
        placed in and grows or shrinks with it. It sets no <code style="${h.monoSm}">width</code>
        of its own, only <code style="${h.monoSm}">min-width: 200px</code> to keep it from
        collapsing below a legible size. Real-world width is a layout decision, not a card prop:
        drop it into a CSS Grid cell, a flex item, or any sized container.
      </p>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        mms doesn't ship a dedicated card-grid layout component yet — compose one directly with
        the structural gap tokens:
      </p>

      <pre style="${p.pre}"><code>&lt;!-- CSS Grid --&gt;
&lt;div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--layout-gap-comfortable);"&gt;
  &lt;mms-card&gt;...&lt;/mms-card&gt;
  &lt;mms-card&gt;...&lt;/mms-card&gt;
  &lt;mms-card&gt;...&lt;/mms-card&gt;
&lt;/div&gt;

&lt;!-- Flexbox --&gt;
&lt;div style="display: flex; flex-wrap: wrap; gap: var(--layout-gap-comfortable);"&gt;
  &lt;mms-card style="flex: 1 1 280px;"&gt;...&lt;/mms-card&gt;
  &lt;mms-card style="flex: 1 1 280px;"&gt;...&lt;/mms-card&gt;
&lt;/div&gt;</code></pre>

      <hr style="${p.divider}" />

      <!-- Variant -->
      <h2 style="${h.h2}">Variant</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        <code style="${h.monoSm}">variant</code> controls elevation and border treatment.
        <code style="${h.monoSm}">accent-top</code>/<code style="${h.monoSm}">accent-left</code>
        add a <code style="${h.monoSm}">colorScheme</code>-driven accent border.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: ${b.content}; margin-bottom: ${b.subsection};">
        <div style="${p.panel}">
          <h3 style="${h.h3}">Outlined (default)</h3>
          <mms-card variant="outlined" title-text="Outlined" description-text="Flat with a hairline border, no shadow."></mms-card>
        </div>
        <div style="${p.panel}">
          <h3 style="${h.h3}">Elevated</h3>
          <mms-card variant="elevated" title-text="Elevated" description-text="Uses elevation shadow, no border."></mms-card>
        </div>
        <div style="${p.panel}">
          <h3 style="${h.h3}">Accent top</h3>
          <mms-card variant="accent-top" color-scheme="secondary" title-text="Accent top" description-text="4px accent border along the top edge."></mms-card>
        </div>
        <div style="${p.panel}">
          <h3 style="${h.h3}">Accent left</h3>
          <mms-card variant="accent-left" color-scheme="accent" title-text="Accent left" description-text="4px accent border along the left edge."></mms-card>
        </div>
      </div>

      <hr style="${p.divider}" />

      <!-- Roundness -->
      <h2 style="${h.h2}">Roundness</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        <code style="${h.monoSm}">roundness</code> sets the corner radius independently of
        <code style="${h.monoSm}">variant</code>: <code style="${h.monoSm}">boxed</code> (square
        corners), <code style="${h.monoSm}">subtle</code> (default), or
        <code style="${h.monoSm}">rounded</code>.
      </p>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: ${b.content}; margin-bottom: ${b.subsection};">
        <div style="${p.panel}">
          <h3 style="${h.h3}">Boxed</h3>
          <mms-card roundness="boxed" title-text="Boxed" description-text="Square corners, no radius."></mms-card>
        </div>
        <div style="${p.panel}">
          <h3 style="${h.h3}">Subtle (default)</h3>
          <mms-card roundness="subtle" title-text="Subtle" description-text="A small corner radius."></mms-card>
        </div>
        <div style="${p.panel}">
          <h3 style="${h.h3}">Rounded</h3>
          <mms-card roundness="rounded" title-text="Rounded" description-text="A larger corner radius."></mms-card>
        </div>
      </div>

      <hr style="${p.divider}" />

      <!-- Surface -->
      <h2 style="${h.h2}">Surface</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        <code style="${h.monoSm}">surface</code> sets the card's background fill:
        <code style="${h.monoSm}">solid</code> (default, flat surface color) or
        <code style="${h.monoSm}">tint</code> (a subtle neutral tint) — useful when a card sits on
        a page background it needs to visually separate from without adding a border or shadow.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: ${b.content}; margin-bottom: ${b.subsection};">
        <div style="${p.panel}">
          <h3 style="${h.h3}">Solid (default)</h3>
          <mms-card surface="solid" title-text="Solid" description-text="Flat surface background."></mms-card>
        </div>
        <div style="${p.panel}">
          <h3 style="${h.h3}">Tint</h3>
          <mms-card surface="tint" title-text="Tint" description-text="Subtle neutral surface tint."></mms-card>
        </div>
      </div>

      <hr style="${p.divider}" />

      <!-- Media -->
      <h2 style="${h.h2}">Media</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        <code style="${h.monoSm}">show-media</code> reveals the top media slot;
        <code style="${h.monoSm}">media-height</code> switches its aspect ratio between
        16:9 (default) and 21:9.
      </p>

      <div style="max-width: 360px; margin-bottom: ${b.subsection};">
        <mms-card show-media title-text="Provider search" description-text="Find in-network doctors and specialists near you.">
          <img
            slot="media"
            src="${E[`family-consultation`].url}"
            alt="${E[`family-consultation`].alt}"
            style="width: 100%; height: 100%; object-fit: cover;"
          />
        </mms-card>
      </div>

      <hr style="${p.divider}" />

      <!-- Header composition -->
      <h2 style="${h.h2}">Header composition</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        The header can combine an <code style="${h.monoSm}">icon</code>, a subtitle row, and an
        overflow trigger (<code style="${h.monoSm}">show-action-menu</code>). It renders only when
        at least one of these has real content — an all-default card has no empty header wrapper.
      </p>

      <div style="max-width: 360px; margin-bottom: ${b.subsection};">
        <mms-card
          title-text="Claims"
          icon="clipboard-text"
          subtitle-text="Updated today"
          show-action-menu
          description-text="Track the status of submitted claims and view payment history."
        >
          <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">View details</button>
          <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">Dismiss</button>
        </mms-card>
      </div>

      <hr style="${p.divider}" />

      <!-- Action menu content -->
      <h2 style="${h.h2}">Configuring action menu options</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        <code style="${h.monoSm}">mms-card</code> does not ship a menu-item component. The
        <code style="${h.monoSm}">action-menu</code> slot accepts any consumer-supplied markup —
        the examples above use plain <code style="${h.monoSm}">&lt;button&gt;</code> elements, but a
        slotted <code style="${h.monoSm}">mms-link</code>, an anchor, or any other interactive
        element works the same way. The card only owns the disclosure shell: the overflow
        trigger, the open/closed panel, dismissal on <code style="${h.monoSm}">Escape</code> or an
        outside click, and <code style="${h.monoSm}">data-density</code> propagation onto whatever
        is slotted.
      </p>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        Everything else is the consumer's responsibility: each menu option's click handling,
        disabled/hover states, and its own typography and color tokens per the
        <code style="${h.monoSm}">css-tokens.md</code> contract (see the demo buttons' inline
        styles for the token set to match: <code style="${h.monoSm}">--type-body-md-family</code>,
        <code style="${h.monoSm}">--type-body-md-size</code>,
        <code style="${h.monoSm}">--type-body-md-line-height</code>,
        <code style="${h.monoSm}">--font-weight-regular</code>,
        <code style="${h.monoSm}">--color-text-default</code>). There is currently no built-in
        arrow-key roving navigation between slotted items — each one is a normal tab stop, and
        only the disclosure itself (open/close via the trigger, close via
        <code style="${h.monoSm}">Escape</code>) is handled internally. This is a deliberate,
        temporary stand-in until a dedicated <code style="${h.monoSm}">mms-action-menu</code>
        component exists; the <code style="${h.monoSm}">show-action-menu</code> prop and
        <code style="${h.monoSm}">action-menu</code> slot names are stable so that future
        component can drop in without changing the public API.
      </p>

      <hr style="${p.divider}" />

      <!-- Title size -->
      <h2 style="${h.h2}">Title size</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        <code style="${h.monoSm}">title-size</code> picks the type scale for the title:
        <code style="${h.monoSm}">heading-4</code> (default) is the bold heading-4 scale;
        <code style="${h.monoSm}">body-bold</code> drops to the smaller body-md scale, kept bold
        so it still reads as a title — useful when a card's title needs to read as a label
        rather than a heading, e.g. inside a dense list of cards.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: ${b.content}; margin-bottom: ${b.subsection};">
        <div style="${p.panel}">
          <h3 style="${h.h3}">heading-4 (default)</h3>
          <mms-card title-size="heading-4" title-text="Plan overview" description-text="Heading-4 scale, bold."></mms-card>
        </div>
        <div style="${p.panel}">
          <h3 style="${h.h3}">body-bold</h3>
          <mms-card title-size="body-bold" title-text="Plan overview" description-text="Body-md scale, bold."></mms-card>
        </div>
      </div>

      <hr style="${p.divider}" />

      <!-- Description clamping -->
      <h2 style="${h.h2}">Description clamping</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        <code style="${h.monoSm}">description-lines</code> clamps the description to a fixed
        number of lines with an ellipsis; <code style="${h.monoSm}">0</code> (default) never clamps.
      </p>

      <div style="max-width: 320px; margin-bottom: ${b.subsection};">
        <mms-card
          title-text="Clamped to 2 lines"
          description-text="This description is intentionally long enough to wrap past two lines so the clamp behavior — an ellipsis after the second line — is visible in this example."
          description-lines="2"
        ></mms-card>
      </div>

      <hr style="${p.divider}" />

      <!-- Footer actions -->
      <h2 style="${h.h2}">Footer actions</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        <code style="${h.monoSm}">show-actions</code> reveals the footer;
        <code style="${h.monoSm}">action-style</code> lays out slotted
        <code style="${h.monoSm}">actions</code> content:
        <code style="${h.monoSm}">1-action</code> (default, single trailing action),
        <code style="${h.monoSm}">hr-actions</code> (horizontal, evenly split),
        <code style="${h.monoSm}">vt-actions</code> (stacked, full-width),
        <code style="${h.monoSm}">link</code> (a single <code style="${h.monoSm}">mms-link</code>
        instead of a button).
      </p>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        Action button <code style="${h.monoSm}">color-scheme</code> is independent of the card's own
        <code style="${h.monoSm}">colorScheme</code> — set it directly on each slotted
        <code style="${h.monoSm}">mms-button</code>. This lets a card's accent border color differ from
        its action button color, a common pairing. See <em>Density</em> below for how
        <code style="${h.monoSm}">density</code> affects footer spacing.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: ${b.content}; margin-bottom: ${b.subsection};">
        <div style="${p.panel}">
          <h3 style="${h.h3}">1 action (default)</h3>
          <mms-card title-text="Update payment method" show-actions action-style="1-action">
            <mms-button slot="actions" variant="primary" label="Update"></mms-button>
          </mms-card>
        </div>
        <div style="${p.panel}">
          <h3 style="${h.h3}">Horizontal (hr-actions)</h3>
          <mms-card title-text="Review application" show-actions action-style="hr-actions">
            <mms-button slot="actions" variant="secondary" full-width label="Cancel"></mms-button>
            <mms-button slot="actions" variant="primary" full-width label="Submit"></mms-button>
          </mms-card>
        </div>
        <div style="${p.panel}">
          <h3 style="${h.h3}">Vertical (vt-actions)</h3>
          <mms-card title-text="Upgrade plan" show-actions action-style="vt-actions">
            <mms-button slot="actions" variant="primary" full-width label="Upgrade"></mms-button>
            <mms-button slot="actions" variant="secondary" full-width label="Maybe later"></mms-button>
          </mms-card>
        </div>
        <div style="${p.panel}">
          <h3 style="${h.h3}">Link</h3>
          <mms-card title-text="Coverage summary" show-actions action-style="link">
            <mms-link slot="actions" label="View details" right-icon="arrow-right"></mms-link>
          </mms-card>
        </div>
      </div>

      <hr style="${p.divider}" />

      <!-- Density -->
      <h2 style="${h.h2}">Density</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        <code style="${h.monoSm}">density</code> (read from the page-level
        <code style="${h.monoSm}">data-density</code> attribute) tightens the card's internal
        spacing and is automatically propagated as <code style="${h.monoSm}">data-density</code>
        onto all slotted content — actions, media, body content, and the action menu — with no
        per-slot wiring needed. Unlike <code style="${h.monoSm}">color-scheme</code>, which stays
        independent per slotted element, density is a page-wide global prop everything shares.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: ${b.content}; margin-bottom: ${b.subsection};">
        <div style="${p.panel}">
          <h3 style="${h.h3}">Default</h3>
          <mms-card
            data-density="default"
            icon="clipboard-text"
            title-text="Claims"
            subtitle-text="Updated today"
            description-text="Track the status of submitted claims and view payment history."
            show-actions
            action-style="1-action"
          >
            <mms-button slot="actions" variant="primary" label="View"></mms-button>
          </mms-card>
        </div>
        <div style="${p.panel}">
          <h3 style="${h.h3}">Compact</h3>
          <mms-card
            data-density="compact"
            icon="clipboard-text"
            title-text="Claims"
            subtitle-text="Updated today"
            description-text="Track the status of submitted claims and view payment history."
            show-actions
            action-style="1-action"
          >
            <mms-button slot="actions" variant="primary" label="View"></mms-button>
          </mms-card>
        </div>
      </div>

      <hr style="${p.divider}" />

      <!-- Body content slot -->
      <h2 style="${h.h2}">Custom body content</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        The <code style="${h.monoSm}">body-content</code> slot accepts arbitrary markup below
        the description — lists, links, or other mms components.
      </p>

      <div style="max-width: 360px; margin-bottom: ${b.subsection};">
        <mms-card title-text="What's included" description-text="This plan includes:">
          <ul slot="body-content" style="margin: 0; padding-left: var(--spacing-md2); ${h.bodySm}">
            <li>Primary care visits</li>
            <li>Prescription drug coverage</li>
            <li>Emergency services</li>
          </ul>
        </mms-card>
      </div>

      <pre style="${p.pre}"><code>&lt;mms-card title-text="What's included" description-text="This plan includes:"&gt;
  &lt;ul slot="body-content"&gt;
    &lt;li&gt;Primary care visits&lt;/li&gt;
    &lt;li&gt;Prescription drug coverage&lt;/li&gt;
    &lt;li&gt;Emergency services&lt;/li&gt;
  &lt;/ul&gt;
&lt;/mms-card&gt;</code></pre>

      <hr style="${p.divider}" />

      <!-- Accessibility -->
      <h2 style="${h.h2}">Accessibility</h2>

      <h3 style="${h.h3}">WCAG 2.2 AA compliance</h3>
      ${x(f.card.rows)}

      <h3 style="${h.h3}">Screen reader behavior</h3>
      <ul style="${h.bodySm} ${p.muted} margin: 0 0 ${b.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${b.label};"><strong>Card region:</strong> Exposed as a labeled group (<code style="${h.monoSm}">role="group"</code> tied to the title via <code style="${h.monoSm}">aria-labelledby</code>) — not a landmark, since a page typically contains many cards</li>
        <li style="margin-bottom: ${b.label};"><strong>Action menu trigger:</strong> Announces as a button with a popup (<code style="${h.monoSm}">aria-haspopup</code>), its accessible name from <code style="${h.monoSm}">action-menu-label</code>, and the current expanded/collapsed state</li>
        <li style="margin-bottom: ${b.label};"><strong>Action menu toggle:</strong> Announces the updated expanded/collapsed state immediately after activation</li>
        <li><strong>Media:</strong> Slotted — the consumer is responsible for its own alt text; the media wrapper itself carries no accessible name</li>
      </ul>

      <h3 style="${h.h3}">Keyboard navigation</h3>
      <table style="${p.table} margin-bottom: ${b.subsection};">
        <thead>
          <tr>
            <th style="${p.th} width: 140px;">Key</th>
            <th style="${p.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${p.td}"><kbd style="${p.kbd}">Tab</kbd></td>
            <td style="${p.td}">Move focus to the action menu trigger, if present — the card itself is not a tab stop</td>
          </tr>
          <tr>
            <td style="${p.td}"><kbd style="${p.kbd}">Enter</kbd> / <kbd style="${p.kbd}">Space</kbd></td>
            <td style="${p.td}">Toggle the action menu open or closed</td>
          </tr>
          <tr>
            <td style="${p.td}"><kbd style="${p.kbd}">Escape</kbd></td>
            <td style="${p.td}">Close an open action menu and return focus to its trigger</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},k={name:`Playground`,tags:[`!dev`],args:{variant:`outlined`,colorScheme:`primary`,roundness:`subtle`,surface:`solid`,titleText:`Plan overview`,titleSize:`heading-4`,icon:``,showActionMenu:!1,actionMenuLabel:`More actions`,subtitleText:``,subtitleRightText:``,showMedia:!1,mediaHeight:`default`,mediaImage:``,showBody:!0,showDescription:!0,descriptionText:`This plan includes coverage for primary care visits, specialist referrals, emergency services, and prescription drug benefits, including preventive care with no cost-sharing.`,descriptionLines:0,showBodyContent:!1,showExpand:!1,expandLabel:`Show more`,collapseLabel:`Show less`,showActions:!1,actionStyle:`1-action`,actionColorScheme:`primary`,actionRoundness:`subtle`,theme:`maximus`,density:`default`},decorators:[e=>r`
        <div
          style="
            min-height: 200px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 100%; max-width: 360px;">${e()}</div>
        </div>
      `],argTypes:{variant:{name:`Variant`,control:`select`,options:[`outlined`,`elevated`,`accent-top`,`accent-left`],description:`Visual treatment`,table:{category:`Appearance`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Accent border color — only visible on accent-top/accent-left variants`,table:{category:`Appearance`}},roundness:{name:`Roundness`,control:`select`,options:[`boxed`,`subtle`,`rounded`],description:`Corner radius: boxed (0) | subtle (default, 8px) | rounded (16px)`,table:{category:`Appearance`}},surface:{name:`Surface`,control:`select`,options:[`tint`,`solid`],description:`Background fill: solid (default, flat white/near-black) | tint (subtle neutral tint)`,table:{category:`Appearance`}},titleText:{name:`Title Text`,control:`text`,table:{category:`Header`}},titleSize:{name:`Title Size`,control:`select`,options:[`heading-4`,`body-bold`],table:{category:`Header`}},icon:{name:`Icon`,control:`select`,options:w,description:`Curated list of illustrative/contextual card icons (health, finance, civic, people, docs, trust). In code, any icon from the full Phosphor registry (1,512 icons) can be used. Empty selection ("Choose option...") hides the icon.`,table:{category:`Header`}},showActionMenu:{name:`Show Action Menu`,control:`boolean`,description:`Renders demo overflow trigger + menu items when true`,table:{category:`Header`}},actionMenuLabel:{name:`Action Menu Label`,control:`text`,table:{category:`Header`},if:{arg:`showActionMenu`,truthy:!0}},subtitleText:{name:`Subtitle Text`,control:`text`,description:`Left subtitle — hidden when empty`,table:{category:`Header`}},subtitleRightText:{name:`Subtitle Right Text`,control:`text`,description:`Right subtitle — hidden when empty`,table:{category:`Header`}},showMedia:{name:`Show Media`,control:`boolean`,table:{category:`Media`}},mediaHeight:{name:`Media Height`,control:`select`,options:[`default`,`short`],description:`Media aspect ratio: default (16:9) | short (21:9)`,table:{category:`Media`},if:{arg:`showMedia`,truthy:!0}},mediaImage:{name:`Media Image`,control:`select`,options:T,description:`Storybook demo control only — swaps in a curated stock photo so you can preview the media slot at real proportions. Not a real mms-card prop: consumers slot their own &lt;img&gt; or media markup into the media slot.`,table:{category:`Media`},if:{arg:`showMedia`,truthy:!0}},showBody:{name:`Show Body`,control:`boolean`,table:{category:`Body`}},showDescription:{name:`Show Description`,control:`boolean`,table:{category:`Body`},if:{arg:`showBody`,truthy:!0}},descriptionText:{name:`Description Text`,control:`text`,table:{category:`Body`},if:{arg:`showDescription`,truthy:!0}},descriptionLines:{name:`Description Lines`,control:{type:`range`,min:0,max:5,step:1},description:`Clamp description to this many lines (0 = no clamp)`,table:{category:`Body`},if:{arg:`showDescription`,truthy:!0}},showBodyContent:{name:`Show Body Content`,control:`boolean`,description:`Storybook demo only — projects a demo list into the body-content slot. Rendered unconditionally when Show Expand is off; when Show Expand is on, this same content moves inside the expand panel instead, hidden while collapsed.`,table:{category:`Body`},if:{arg:`showBody`,truthy:!0}},showExpand:{name:`Show Expand`,control:`boolean`,description:"Gates the `body-content` slot behind the expand control instead of rendering it unconditionally — hidden while collapsed, revealed when expanded, alongside the Description Lines clamp release. Driven only by its own control — never by a click on the card surface, which would overlap the footer actions and overflow menu.",table:{category:`Expand`}},expandLabel:{name:`Expand Label`,control:`text`,table:{category:`Expand`},if:{arg:`showExpand`,truthy:!0}},collapseLabel:{name:`Collapse Label`,control:`text`,table:{category:`Expand`},if:{arg:`showExpand`,truthy:!0}},showActions:{name:`Show Actions`,control:`boolean`,table:{category:`Footer`}},actionStyle:{name:`Action Style`,control:`select`,options:[`1-action`,`hr-actions`,`vt-actions`,`link`],description:"Footer layout. The `actions` slot is a real slot, not a fixed template — 1-action/hr-actions/vt-actions default to mms-button and link defaults to mms-link in this Playground purely to illustrate the pattern, but any compatible component or variant can be slotted in (e.g. a secondary or ghost mms-button instead of the default shown here).",table:{category:`Footer`},if:{arg:`showActions`,truthy:!0}},actionColorScheme:{name:`Action Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Color palette for footer actions — independent of the card's own Color Scheme (accent border). Common pairing: a differently-colored accent border with consistent action-button colors. Footer actions are mms-button, so the same Tier 1-only rule applies (see Color Framework → Color Tiering): a Tier 2/3 choice for the selected theme is rejected, not rendered. Error is excluded — it's reserved for destructive/alert-driven contexts (e.g. mms-modal's alertType), not a general-purpose footer action color.`,table:{category:`Footer`},if:{arg:`showActions`,truthy:!0}},actionRoundness:{name:`Action Roundness`,control:`select`,options:[`boxed`,`subtle`,`rounded`],description:`Corner radius for footer mms-button actions: boxed (0), subtle (4px), rounded (pill) — independent of the card's own Roundness. This Playground control is illustrative only; the slot accepts any roundness a consumer chooses.`,table:{category:`Footer`},if:{arg:`showActions`,truthy:!0}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Spacing density`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.variant!==`outlined`&&r.push(`variant="${n.variant}"`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.roundness!==`subtle`&&r.push(`roundness="${n.roundness}"`),n.surface!==`solid`&&r.push(`surface="${n.surface}"`),n.titleText&&r.push(`title-text="${n.titleText}"`),n.subtitleText&&r.push(`subtitle-text="${n.subtitleText}"`),n.subtitleRightText&&r.push(`subtitle-right-text="${n.subtitleRightText}"`),n.descriptionText&&r.push(`description-text="${n.descriptionText}"`),n.showDescription||r.push(`show-description="false"`),n.descriptionLines>0&&r.push(`description-lines="${n.descriptionLines}"`),n.showMedia&&r.push(`show-media`),n.mediaHeight!=="default"&&r.push(`media-height="${n.mediaHeight}"`),n.showBody||r.push(`show-body="false"`),n.showActions&&r.push(`show-actions`),n.actionStyle!==`1-action`&&r.push(`action-style="${n.actionStyle}"`),n.icon&&r.push(`icon="${n.icon}"`),n.showActionMenu&&r.push(`show-action-menu`),n.showActionMenu&&r.push(`action-menu-label="${n.actionMenuLabel}"`),n.titleSize!==`heading-4`&&r.push(`title-size="${n.titleSize}"`),n.showExpand&&r.push(`show-expand`),n.showExpand&&n.expandLabel!==`Show more`&&r.push(`expand-label="${n.expandLabel}"`),n.showExpand&&n.collapseLabel!==`Show less`&&r.push(`collapse-label="${n.collapseLabel}"`),`<mms-card${r.length?`
  `+r.join(`
  `):``}\n></mms-card>`},language:`html`}}},render:e=>{let t=e.showActions&&e.actionStyle!==`link`,i=!t||c(e.theme,e.actionColorScheme);return r`
      <mms-card
        variant=${e.variant}
        color-scheme=${e.colorScheme}
        title-text=${e.titleText}
        subtitle-text=${e.subtitleText}
        subtitle-right-text=${e.subtitleRightText}
        description-text=${e.descriptionText}
        ?show-description=${e.showDescription}
        description-lines=${e.descriptionLines}
        ?show-media=${e.showMedia}
        media-height=${e.mediaHeight}
        ?show-body=${e.showBody}
        ?show-expand=${e.showExpand}
        expand-label=${e.expandLabel}
        collapse-label=${e.collapseLabel}
        ?show-actions=${e.showActions}
        action-style=${e.actionStyle}
        icon=${e.icon}
        ?show-action-menu=${e.showActionMenu}
        action-menu-label=${e.actionMenuLabel}
        title-size=${e.titleSize}
        roundness=${e.roundness}
        surface=${e.surface}
        data-density=${e.density}
      >
        ${e.showMedia?e.mediaImage&&E[e.mediaImage]?r`<img
                slot="media"
                src="${E[e.mediaImage].url}"
                alt="${E[e.mediaImage].alt}"
                style="width: 100%; height: 100%; object-fit: cover;"
              />`:r`<div slot="media" style="width: 100%; height: 100%; background: linear-gradient(135deg, #6366f1, #22d3ee);"></div>`:n}
        ${e.showActionMenu?r`
              <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">View details</button>
              <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">Dismiss</button>
            `:n}
        ${e.showBodyContent?r`
              <ul
                slot="body-content"
                style="margin: 0; padding-left: 1.25rem; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height);"
              >
                <li>Primary care visits</li>
                <li>Prescription drug coverage</li>
              </ul>
            `:n}
        ${t&&!i?(()=>{let t=l(e.theme,e.actionColorScheme),n=t===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,i=t===2?`Lacks step 10 (hover state). Use for branded text or badges, not buttons.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return r`
                <div
                  slot="actions"
                  style="
                    padding: 1rem 1.25rem;
                    background: #fef2f2;
                    border: 1px solid #ef4444;
                    border-radius: 6px;
                    color: #991b1b;
                    font-size: 0.8125rem;
                    line-height: 1.5;
                  "
                >
                  <strong style="display: block; margin-bottom: 0.375rem; color: #991b1b !important;">Invalid combination</strong>
                  <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.theme}</code> theme +
                  <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.actionColorScheme}</code> action color scheme
                  <p style="margin: 0.5rem 0 0; opacity: 0.85; color: #991b1b !important;">
                    <strong style="color: #991b1b !important;">${n}:</strong> ${i}
                  </p>
                  <p style="margin: 0.375rem 0 0; font-size: 0.75rem; opacity: 0.7; color: #991b1b !important;">
                    See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
                  </p>
                </div>
              `})():n}
        ${e.showActions&&e.actionStyle===`1-action`&&i?r`<mms-button
              slot="actions"
              variant="primary"
              color-scheme=${e.actionColorScheme}
              roundness=${e.actionRoundness}
              label="Action"
            ></mms-button>`:n}
        ${e.showActions&&e.actionStyle===`hr-actions`&&i?r`
              <mms-button
                slot="actions"
                variant="secondary"
                color-scheme=${e.actionColorScheme}
                roundness=${e.actionRoundness}
                full-width
                label="Cancel"
              ></mms-button>
              <mms-button
                slot="actions"
                variant="primary"
                color-scheme=${e.actionColorScheme}
                roundness=${e.actionRoundness}
                full-width
                label="Action"
              ></mms-button>
            `:n}
        ${e.showActions&&e.actionStyle===`vt-actions`&&i?r`
              <mms-button
                slot="actions"
                variant="primary"
                color-scheme=${e.actionColorScheme}
                roundness=${e.actionRoundness}
                full-width
                label="Action"
              ></mms-button>
              <mms-button
                slot="actions"
                variant="secondary"
                color-scheme=${e.actionColorScheme}
                roundness=${e.actionRoundness}
                full-width
                label="Cancel"
              ></mms-button>
            `:n}
        ${e.showActions&&e.actionStyle===`link`?r`<mms-link slot="actions" label="View details" right-icon="arrow-right"></mms-link>`:n}
      </mms-card>
    `}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Card</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Displays content and actions related to a single subject. Typically shown as part of a
        group, each card highlights key details and distinguishes it from the set.
        <code style="\${t.monoSm}">mms-card</code> composes an optional media slot, header
        (icon, title, subtitle, overflow trigger), body (description + custom slot), and
        footer actions.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Basic usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A title and description are enough for a minimal card.
      </p>

      <div style="margin-bottom: \${space.subsection}; max-width: 360px;">
        <mms-card title-text="Plan overview" description-text="See what's covered under your current plan, including copays and deductibles."></mms-card>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Layout & sizing -->
      <h2 style="\${t.h2}">Layout &amp; sizing</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        <code style="\${t.monoSm}">mms-card</code> is fluid — it fills whatever container it's
        placed in and grows or shrinks with it. It sets no <code style="\${t.monoSm}">width</code>
        of its own, only <code style="\${t.monoSm}">min-width: 200px</code> to keep it from
        collapsing below a legible size. Real-world width is a layout decision, not a card prop:
        drop it into a CSS Grid cell, a flex item, or any sized container.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        mms doesn't ship a dedicated card-grid layout component yet — compose one directly with
        the structural gap tokens:
      </p>

      <pre style="\${doc.pre}"><code>&lt;!-- CSS Grid --&gt;
&lt;div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--layout-gap-comfortable);"&gt;
  &lt;mms-card&gt;...&lt;/mms-card&gt;
  &lt;mms-card&gt;...&lt;/mms-card&gt;
  &lt;mms-card&gt;...&lt;/mms-card&gt;
&lt;/div&gt;

&lt;!-- Flexbox --&gt;
&lt;div style="display: flex; flex-wrap: wrap; gap: var(--layout-gap-comfortable);"&gt;
  &lt;mms-card style="flex: 1 1 280px;"&gt;...&lt;/mms-card&gt;
  &lt;mms-card style="flex: 1 1 280px;"&gt;...&lt;/mms-card&gt;
&lt;/div&gt;</code></pre>

      <hr style="\${doc.divider}" />

      <!-- Variant -->
      <h2 style="\${t.h2}">Variant</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">variant</code> controls elevation and border treatment.
        <code style="\${t.monoSm}">accent-top</code>/<code style="\${t.monoSm}">accent-left</code>
        add a <code style="\${t.monoSm}">colorScheme</code>-driven accent border.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Outlined (default)</h3>
          <mms-card variant="outlined" title-text="Outlined" description-text="Flat with a hairline border, no shadow."></mms-card>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Elevated</h3>
          <mms-card variant="elevated" title-text="Elevated" description-text="Uses elevation shadow, no border."></mms-card>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Accent top</h3>
          <mms-card variant="accent-top" color-scheme="secondary" title-text="Accent top" description-text="4px accent border along the top edge."></mms-card>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Accent left</h3>
          <mms-card variant="accent-left" color-scheme="accent" title-text="Accent left" description-text="4px accent border along the left edge."></mms-card>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Roundness -->
      <h2 style="\${t.h2}">Roundness</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">roundness</code> sets the corner radius independently of
        <code style="\${t.monoSm}">variant</code>: <code style="\${t.monoSm}">boxed</code> (square
        corners), <code style="\${t.monoSm}">subtle</code> (default), or
        <code style="\${t.monoSm}">rounded</code>.
      </p>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Boxed</h3>
          <mms-card roundness="boxed" title-text="Boxed" description-text="Square corners, no radius."></mms-card>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Subtle (default)</h3>
          <mms-card roundness="subtle" title-text="Subtle" description-text="A small corner radius."></mms-card>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Rounded</h3>
          <mms-card roundness="rounded" title-text="Rounded" description-text="A larger corner radius."></mms-card>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Surface -->
      <h2 style="\${t.h2}">Surface</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">surface</code> sets the card's background fill:
        <code style="\${t.monoSm}">solid</code> (default, flat surface color) or
        <code style="\${t.monoSm}">tint</code> (a subtle neutral tint) — useful when a card sits on
        a page background it needs to visually separate from without adding a border or shadow.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Solid (default)</h3>
          <mms-card surface="solid" title-text="Solid" description-text="Flat surface background."></mms-card>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Tint</h3>
          <mms-card surface="tint" title-text="Tint" description-text="Subtle neutral surface tint."></mms-card>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Media -->
      <h2 style="\${t.h2}">Media</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">show-media</code> reveals the top media slot;
        <code style="\${t.monoSm}">media-height</code> switches its aspect ratio between
        16:9 (default) and 21:9.
      </p>

      <div style="max-width: 360px; margin-bottom: \${space.subsection};">
        <mms-card show-media title-text="Provider search" description-text="Find in-network doctors and specialists near you.">
          <img
            slot="media"
            src="\${mediaImageMap['family-consultation'].url}"
            alt="\${mediaImageMap['family-consultation'].alt}"
            style="width: 100%; height: 100%; object-fit: cover;"
          />
        </mms-card>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Header composition -->
      <h2 style="\${t.h2}">Header composition</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The header can combine an <code style="\${t.monoSm}">icon</code>, a subtitle row, and an
        overflow trigger (<code style="\${t.monoSm}">show-action-menu</code>). It renders only when
        at least one of these has real content — an all-default card has no empty header wrapper.
      </p>

      <div style="max-width: 360px; margin-bottom: \${space.subsection};">
        <mms-card
          title-text="Claims"
          icon="clipboard-text"
          subtitle-text="Updated today"
          show-action-menu
          description-text="Track the status of submitted claims and view payment history."
        >
          <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">View details</button>
          <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">Dismiss</button>
        </mms-card>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Action menu content -->
      <h2 style="\${t.h2}">Configuring action menu options</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        <code style="\${t.monoSm}">mms-card</code> does not ship a menu-item component. The
        <code style="\${t.monoSm}">action-menu</code> slot accepts any consumer-supplied markup —
        the examples above use plain <code style="\${t.monoSm}">&lt;button&gt;</code> elements, but a
        slotted <code style="\${t.monoSm}">mms-link</code>, an anchor, or any other interactive
        element works the same way. The card only owns the disclosure shell: the overflow
        trigger, the open/closed panel, dismissal on <code style="\${t.monoSm}">Escape</code> or an
        outside click, and <code style="\${t.monoSm}">data-density</code> propagation onto whatever
        is slotted.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Everything else is the consumer's responsibility: each menu option's click handling,
        disabled/hover states, and its own typography and color tokens per the
        <code style="\${t.monoSm}">css-tokens.md</code> contract (see the demo buttons' inline
        styles for the token set to match: <code style="\${t.monoSm}">--type-body-md-family</code>,
        <code style="\${t.monoSm}">--type-body-md-size</code>,
        <code style="\${t.monoSm}">--type-body-md-line-height</code>,
        <code style="\${t.monoSm}">--font-weight-regular</code>,
        <code style="\${t.monoSm}">--color-text-default</code>). There is currently no built-in
        arrow-key roving navigation between slotted items — each one is a normal tab stop, and
        only the disclosure itself (open/close via the trigger, close via
        <code style="\${t.monoSm}">Escape</code>) is handled internally. This is a deliberate,
        temporary stand-in until a dedicated <code style="\${t.monoSm}">mms-action-menu</code>
        component exists; the <code style="\${t.monoSm}">show-action-menu</code> prop and
        <code style="\${t.monoSm}">action-menu</code> slot names are stable so that future
        component can drop in without changing the public API.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Title size -->
      <h2 style="\${t.h2}">Title size</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">title-size</code> picks the type scale for the title:
        <code style="\${t.monoSm}">heading-4</code> (default) is the bold heading-4 scale;
        <code style="\${t.monoSm}">body-bold</code> drops to the smaller body-md scale, kept bold
        so it still reads as a title — useful when a card's title needs to read as a label
        rather than a heading, e.g. inside a dense list of cards.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">heading-4 (default)</h3>
          <mms-card title-size="heading-4" title-text="Plan overview" description-text="Heading-4 scale, bold."></mms-card>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">body-bold</h3>
          <mms-card title-size="body-bold" title-text="Plan overview" description-text="Body-md scale, bold."></mms-card>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Description clamping -->
      <h2 style="\${t.h2}">Description clamping</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">description-lines</code> clamps the description to a fixed
        number of lines with an ellipsis; <code style="\${t.monoSm}">0</code> (default) never clamps.
      </p>

      <div style="max-width: 320px; margin-bottom: \${space.subsection};">
        <mms-card
          title-text="Clamped to 2 lines"
          description-text="This description is intentionally long enough to wrap past two lines so the clamp behavior — an ellipsis after the second line — is visible in this example."
          description-lines="2"
        ></mms-card>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Footer actions -->
      <h2 style="\${t.h2}">Footer actions</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        <code style="\${t.monoSm}">show-actions</code> reveals the footer;
        <code style="\${t.monoSm}">action-style</code> lays out slotted
        <code style="\${t.monoSm}">actions</code> content:
        <code style="\${t.monoSm}">1-action</code> (default, single trailing action),
        <code style="\${t.monoSm}">hr-actions</code> (horizontal, evenly split),
        <code style="\${t.monoSm}">vt-actions</code> (stacked, full-width),
        <code style="\${t.monoSm}">link</code> (a single <code style="\${t.monoSm}">mms-link</code>
        instead of a button).
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Action button <code style="\${t.monoSm}">color-scheme</code> is independent of the card's own
        <code style="\${t.monoSm}">colorScheme</code> — set it directly on each slotted
        <code style="\${t.monoSm}">mms-button</code>. This lets a card's accent border color differ from
        its action button color, a common pairing. See <em>Density</em> below for how
        <code style="\${t.monoSm}">density</code> affects footer spacing.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">1 action (default)</h3>
          <mms-card title-text="Update payment method" show-actions action-style="1-action">
            <mms-button slot="actions" variant="primary" label="Update"></mms-button>
          </mms-card>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Horizontal (hr-actions)</h3>
          <mms-card title-text="Review application" show-actions action-style="hr-actions">
            <mms-button slot="actions" variant="secondary" full-width label="Cancel"></mms-button>
            <mms-button slot="actions" variant="primary" full-width label="Submit"></mms-button>
          </mms-card>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Vertical (vt-actions)</h3>
          <mms-card title-text="Upgrade plan" show-actions action-style="vt-actions">
            <mms-button slot="actions" variant="primary" full-width label="Upgrade"></mms-button>
            <mms-button slot="actions" variant="secondary" full-width label="Maybe later"></mms-button>
          </mms-card>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Link</h3>
          <mms-card title-text="Coverage summary" show-actions action-style="link">
            <mms-link slot="actions" label="View details" right-icon="arrow-right"></mms-link>
          </mms-card>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Density -->
      <h2 style="\${t.h2}">Density</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">density</code> (read from the page-level
        <code style="\${t.monoSm}">data-density</code> attribute) tightens the card's internal
        spacing and is automatically propagated as <code style="\${t.monoSm}">data-density</code>
        onto all slotted content — actions, media, body content, and the action menu — with no
        per-slot wiring needed. Unlike <code style="\${t.monoSm}">color-scheme</code>, which stays
        independent per slotted element, density is a page-wide global prop everything shares.
      </p>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Default</h3>
          <mms-card
            data-density="default"
            icon="clipboard-text"
            title-text="Claims"
            subtitle-text="Updated today"
            description-text="Track the status of submitted claims and view payment history."
            show-actions
            action-style="1-action"
          >
            <mms-button slot="actions" variant="primary" label="View"></mms-button>
          </mms-card>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">Compact</h3>
          <mms-card
            data-density="compact"
            icon="clipboard-text"
            title-text="Claims"
            subtitle-text="Updated today"
            description-text="Track the status of submitted claims and view payment history."
            show-actions
            action-style="1-action"
          >
            <mms-button slot="actions" variant="primary" label="View"></mms-button>
          </mms-card>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Body content slot -->
      <h2 style="\${t.h2}">Custom body content</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">body-content</code> slot accepts arbitrary markup below
        the description — lists, links, or other mms components.
      </p>

      <div style="max-width: 360px; margin-bottom: \${space.subsection};">
        <mms-card title-text="What's included" description-text="This plan includes:">
          <ul slot="body-content" style="margin: 0; padding-left: var(--spacing-md2); \${t.bodySm}">
            <li>Primary care visits</li>
            <li>Prescription drug coverage</li>
            <li>Emergency services</li>
          </ul>
        </mms-card>
      </div>

      <pre style="\${doc.pre}"><code>&lt;mms-card title-text="What's included" description-text="This plan includes:"&gt;
  &lt;ul slot="body-content"&gt;
    &lt;li&gt;Primary care visits&lt;/li&gt;
    &lt;li&gt;Prescription drug coverage&lt;/li&gt;
    &lt;li&gt;Emergency services&lt;/li&gt;
  &lt;/ul&gt;
&lt;/mms-card&gt;</code></pre>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['card'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Card region:</strong> Exposed as a labeled group (<code style="\${t.monoSm}">role="group"</code> tied to the title via <code style="\${t.monoSm}">aria-labelledby</code>) — not a landmark, since a page typically contains many cards</li>
        <li style="margin-bottom: \${space.label};"><strong>Action menu trigger:</strong> Announces as a button with a popup (<code style="\${t.monoSm}">aria-haspopup</code>), its accessible name from <code style="\${t.monoSm}">action-menu-label</code>, and the current expanded/collapsed state</li>
        <li style="margin-bottom: \${space.label};"><strong>Action menu toggle:</strong> Announces the updated expanded/collapsed state immediately after activation</li>
        <li><strong>Media:</strong> Slotted — the consumer is responsible for its own alt text; the media wrapper itself carries no accessible name</li>
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
            <td style="\${doc.td}">Move focus to the action menu trigger, if present — the card itself is not a tab stop</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd> / <kbd style="\${doc.kbd}">Space</kbd></td>
            <td style="\${doc.td}">Toggle the action menu open or closed</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Escape</kbd></td>
            <td style="\${doc.td}">Close an open action menu and return focus to its trigger</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Appearance
    variant: 'outlined',
    colorScheme: 'primary',
    roundness: 'subtle',
    surface: 'solid',
    // Header
    titleText: 'Plan overview',
    titleSize: 'heading-4',
    icon: '',
    showActionMenu: false,
    actionMenuLabel: 'More actions',
    subtitleText: '',
    subtitleRightText: '',
    // Media
    showMedia: false,
    mediaHeight: 'default',
    mediaImage: '',
    // Body
    showBody: true,
    showDescription: true,
    // Long enough to actually clamp at 2 lines — a short description makes the
    // Description Lines / Show Expand controls look like a no-op (nothing visibly
    // truncates), which is the story that shipped originally and hid the defect.
    descriptionText: "This plan includes coverage for primary care visits, specialist referrals, emergency services, and prescription drug benefits, including preventive care with no cost-sharing.",
    descriptionLines: 0,
    showBodyContent: false,
    // Expand
    showExpand: false,
    expandLabel: 'Show more',
    collapseLabel: 'Show less',
    // Footer
    showActions: false,
    actionStyle: '1-action',
    actionColorScheme: 'primary',
    actionRoundness: 'subtle',
    // Global Props
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div
          style="
            min-height: 200px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          <div style="width: 100%; max-width: 360px;">\${story()}</div>
        </div>
      \`;
  }],
  argTypes: {
    // ── Appearance ─────────────────────────────────────────────
    variant: {
      name: 'Variant',
      control: 'select',
      options: ['outlined', 'elevated', 'accent-top', 'accent-left'],
      description: 'Visual treatment',
      table: {
        category: 'Appearance'
      }
    },
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Accent border color — only visible on accent-top/accent-left variants',
      table: {
        category: 'Appearance'
      }
    },
    roundness: {
      name: 'Roundness',
      control: 'select',
      options: ['boxed', 'subtle', 'rounded'],
      description: 'Corner radius: boxed (0) | subtle (default, 8px) | rounded (16px)',
      table: {
        category: 'Appearance'
      }
    },
    surface: {
      name: 'Surface',
      control: 'select',
      options: ['tint', 'solid'],
      description: 'Background fill: solid (default, flat white/near-black) | tint (subtle neutral tint)',
      table: {
        category: 'Appearance'
      }
    },
    // ── Header ─────────────────────────────────────────────────
    titleText: {
      name: 'Title Text',
      control: 'text',
      table: {
        category: 'Header'
      }
    },
    titleSize: {
      name: 'Title Size',
      control: 'select',
      options: ['heading-4', 'body-bold'],
      table: {
        category: 'Header'
      }
    },
    icon: {
      name: 'Icon',
      control: 'select',
      options: iconOptions,
      description: 'Curated list of illustrative/contextual card icons (health, finance, civic, people, docs, trust). In code, any icon from the full Phosphor registry (1,512 icons) can be used. Empty selection ("Choose option...") hides the icon.',
      table: {
        category: 'Header'
      }
    },
    showActionMenu: {
      name: 'Show Action Menu',
      control: 'boolean',
      description: 'Renders demo overflow trigger + menu items when true',
      table: {
        category: 'Header'
      }
    },
    actionMenuLabel: {
      name: 'Action Menu Label',
      control: 'text',
      table: {
        category: 'Header'
      },
      if: {
        arg: 'showActionMenu',
        truthy: true
      }
    },
    subtitleText: {
      name: 'Subtitle Text',
      control: 'text',
      description: 'Left subtitle — hidden when empty',
      table: {
        category: 'Header'
      }
    },
    subtitleRightText: {
      name: 'Subtitle Right Text',
      control: 'text',
      description: 'Right subtitle — hidden when empty',
      table: {
        category: 'Header'
      }
    },
    // ── Media ──────────────────────────────────────────────────
    showMedia: {
      name: 'Show Media',
      control: 'boolean',
      table: {
        category: 'Media'
      }
    },
    mediaHeight: {
      name: 'Media Height',
      control: 'select',
      options: ['default', 'short'],
      description: 'Media aspect ratio: default (16:9) | short (21:9)',
      table: {
        category: 'Media'
      },
      if: {
        arg: 'showMedia',
        truthy: true
      }
    },
    mediaImage: {
      name: 'Media Image',
      control: 'select',
      options: mediaImageOptions,
      description: 'Storybook demo control only — swaps in a curated stock photo so you can preview the media slot at real proportions. Not a real mms-card prop: consumers slot their own &lt;img&gt; or media markup into the media slot.',
      table: {
        category: 'Media'
      },
      if: {
        arg: 'showMedia',
        truthy: true
      }
    },
    // ── Body ───────────────────────────────────────────────────
    showBody: {
      name: 'Show Body',
      control: 'boolean',
      table: {
        category: 'Body'
      }
    },
    showDescription: {
      name: 'Show Description',
      control: 'boolean',
      table: {
        category: 'Body'
      },
      if: {
        arg: 'showBody',
        truthy: true
      }
    },
    descriptionText: {
      name: 'Description Text',
      control: 'text',
      table: {
        category: 'Body'
      },
      if: {
        arg: 'showDescription',
        truthy: true
      }
    },
    descriptionLines: {
      name: 'Description Lines',
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 1
      },
      description: 'Clamp description to this many lines (0 = no clamp)',
      table: {
        category: 'Body'
      },
      if: {
        arg: 'showDescription',
        truthy: true
      }
    },
    showBodyContent: {
      name: 'Show Body Content',
      control: 'boolean',
      description: 'Storybook demo only — projects a demo list into the body-content slot. Rendered unconditionally when Show Expand is off; when Show Expand is on, this same content moves inside the expand panel instead, hidden while collapsed.',
      table: {
        category: 'Body'
      },
      if: {
        arg: 'showBody',
        truthy: true
      }
    },
    showExpand: {
      name: 'Show Expand',
      control: 'boolean',
      description: 'Gates the \`body-content\` slot behind the expand control instead of rendering it unconditionally — hidden while collapsed, revealed when expanded, alongside the Description Lines clamp release. Driven only by its own control — never by a click on the card surface, which would overlap the footer actions and overflow menu.',
      table: {
        category: 'Expand'
      }
    },
    expandLabel: {
      name: 'Expand Label',
      control: 'text',
      table: {
        category: 'Expand'
      },
      if: {
        arg: 'showExpand',
        truthy: true
      }
    },
    collapseLabel: {
      name: 'Collapse Label',
      control: 'text',
      table: {
        category: 'Expand'
      },
      if: {
        arg: 'showExpand',
        truthy: true
      }
    },
    // ── Footer ─────────────────────────────────────────────────
    showActions: {
      name: 'Show Actions',
      control: 'boolean',
      table: {
        category: 'Footer'
      }
    },
    actionStyle: {
      name: 'Action Style',
      control: 'select',
      options: ['1-action', 'hr-actions', 'vt-actions', 'link'],
      description: 'Footer layout. The \`actions\` slot is a real slot, not a fixed template — 1-action/hr-actions/vt-actions default to mms-button and link defaults to mms-link in this Playground purely to illustrate the pattern, but any compatible component or variant can be slotted in (e.g. a secondary or ghost mms-button instead of the default shown here).',
      table: {
        category: 'Footer'
      },
      if: {
        arg: 'showActions',
        truthy: true
      }
    },
    actionColorScheme: {
      name: 'Action Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Color palette for footer actions — independent of the card\\'s own Color Scheme (accent border). Common pairing: a differently-colored accent border with consistent action-button colors. Footer actions are mms-button, so the same Tier 1-only rule applies (see Color Framework → Color Tiering): a Tier 2/3 choice for the selected theme is rejected, not rendered. Error is excluded — it\\'s reserved for destructive/alert-driven contexts (e.g. mms-modal\\'s alertType), not a general-purpose footer action color.',
      table: {
        category: 'Footer'
      },
      if: {
        arg: 'showActions',
        truthy: true
      }
    },
    actionRoundness: {
      name: 'Action Roundness',
      control: 'select',
      options: ['boxed', 'subtle', 'rounded'],
      description: 'Corner radius for footer mms-button actions: boxed (0), subtle (4px), rounded (pill) — independent of the card\\'s own Roundness. This Playground control is illustrative only; the slot accepts any roundness a consumer chooses.',
      table: {
        category: 'Footer'
      },
      if: {
        arg: 'showActions',
        truthy: true
      }
    },
    // ── Global Props ──────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
      description: 'Brand theme',
      table: {
        category: 'Global Props'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Spacing density',
      table: {
        category: 'Global Props'
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
          if (a.variant !== 'outlined') attrs.push(\`variant="\${a.variant}"\`);
          if (a.colorScheme !== 'primary') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.roundness !== 'subtle') attrs.push(\`roundness="\${a.roundness}"\`);
          if (a.surface !== 'solid') attrs.push(\`surface="\${a.surface}"\`);
          if (a.titleText) attrs.push(\`title-text="\${a.titleText}"\`);
          if (a.subtitleText) attrs.push(\`subtitle-text="\${a.subtitleText}"\`);
          if (a.subtitleRightText) attrs.push(\`subtitle-right-text="\${a.subtitleRightText}"\`);
          if (a.descriptionText) attrs.push(\`description-text="\${a.descriptionText}"\`);
          if (!a.showDescription) attrs.push('show-description="false"');
          if (a.descriptionLines as number > 0) attrs.push(\`description-lines="\${a.descriptionLines}"\`);
          if (a.showMedia) attrs.push('show-media');
          if (a.mediaHeight !== 'default') attrs.push(\`media-height="\${a.mediaHeight}"\`);
          if (!a.showBody) attrs.push('show-body="false"');
          if (a.showActions) attrs.push('show-actions');
          if (a.actionStyle !== '1-action') attrs.push(\`action-style="\${a.actionStyle}"\`);
          if (a.icon) attrs.push(\`icon="\${a.icon}"\`);
          if (a.showActionMenu) attrs.push('show-action-menu');
          if (a.showActionMenu) attrs.push(\`action-menu-label="\${a.actionMenuLabel}"\`);
          if (a.titleSize !== 'heading-4') attrs.push(\`title-size="\${a.titleSize}"\`);
          if (a.showExpand) attrs.push('show-expand');
          if (a.showExpand && a.expandLabel !== 'Show more') attrs.push(\`expand-label="\${a.expandLabel}"\`);
          if (a.showExpand && a.collapseLabel !== 'Show less') attrs.push(\`collapse-label="\${a.collapseLabel}"\`);
          return \`<mms-card\${attrs.length ? '\\n  ' + attrs.join('\\n  ') : ''}\\n></mms-card>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    variant: string;
    colorScheme: string;
    titleText: string;
    subtitleText: string;
    subtitleRightText: string;
    descriptionText: string;
    showDescription: boolean;
    descriptionLines: number;
    showMedia: boolean;
    mediaHeight: string;
    mediaImage: string;
    showBody: boolean;
    showBodyContent: boolean;
    showExpand: boolean;
    expandLabel: string;
    collapseLabel: string;
    showActions: boolean;
    actionStyle: string;
    actionColorScheme: string;
    actionRoundness: string;
    icon: string;
    showActionMenu: boolean;
    actionMenuLabel: string;
    titleSize: string;
    roundness: string;
    surface: string;
    theme: string;
    density: string;
  }) => {
    // Footer actions render as mms-button, so the same Tier 1-only rule applies as
    // Button.stories.ts: a Tier 2/3 combination for the selected theme is rejected
    // (rendered as a notice) rather than rendered with a broken hover/contrast state.
    // 'link' actionStyle uses mms-link, which doesn't take a colorScheme, so it's exempt.
    const usesActionColorScheme = args.showActions && args.actionStyle !== 'link';
    const actionColorSchemeValid = !usesActionColorScheme || isValidColorScheme(args.theme as Theme, args.actionColorScheme as ColorScheme);
    return html\`
      <mms-card
        variant=\${args.variant}
        color-scheme=\${args.colorScheme}
        title-text=\${args.titleText}
        subtitle-text=\${args.subtitleText}
        subtitle-right-text=\${args.subtitleRightText}
        description-text=\${args.descriptionText}
        ?show-description=\${args.showDescription}
        description-lines=\${args.descriptionLines}
        ?show-media=\${args.showMedia}
        media-height=\${args.mediaHeight}
        ?show-body=\${args.showBody}
        ?show-expand=\${args.showExpand}
        expand-label=\${args.expandLabel}
        collapse-label=\${args.collapseLabel}
        ?show-actions=\${args.showActions}
        action-style=\${args.actionStyle}
        icon=\${args.icon}
        ?show-action-menu=\${args.showActionMenu}
        action-menu-label=\${args.actionMenuLabel}
        title-size=\${args.titleSize}
        roundness=\${args.roundness}
        surface=\${args.surface}
        data-density=\${args.density}
      >
        \${args.showMedia ? args.mediaImage && mediaImageMap[args.mediaImage] ? html\`<img
                slot="media"
                src="\${mediaImageMap[args.mediaImage].url}"
                alt="\${mediaImageMap[args.mediaImage].alt}"
                style="width: 100%; height: 100%; object-fit: cover;"
              />\` : html\`<div slot="media" style="width: 100%; height: 100%; background: linear-gradient(135deg, #6366f1, #22d3ee);"></div>\` : nothing}
        \${args.showActionMenu ? html\`
              <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">View details</button>
              <button slot="action-menu" style="display: block; width: 100%; text-align: left; padding: var(--spacing-xs2) var(--spacing-sm1); border: none; background: none; cursor: pointer; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--font-weight-regular); color: var(--color-text-default);">Dismiss</button>
            \` : nothing}
        \${args.showBodyContent ? html\`
              <ul
                slot="body-content"
                style="margin: 0; padding-left: 1.25rem; font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height);"
              >
                <li>Primary care visits</li>
                <li>Prescription drug coverage</li>
              </ul>
            \` : nothing}
        \${usesActionColorScheme && !actionColorSchemeValid ? (() => {
      const tier = getPaletteTier(args.theme as Theme, args.actionColorScheme as ColorScheme);
      const tierLabel = tier === 2 ? 'Tier 2 (Text + Surface)' : 'Tier 3 (Decorative)';
      const tierReason = tier === 2 ? 'Lacks step 10 (hover state). Use for branded text or badges, not buttons.' : 'Lacks text contrast and hover states. Decorative backgrounds only.';
      return html\`
                <div
                  slot="actions"
                  style="
                    padding: 1rem 1.25rem;
                    background: #fef2f2;
                    border: 1px solid #ef4444;
                    border-radius: 6px;
                    color: #991b1b;
                    font-size: 0.8125rem;
                    line-height: 1.5;
                  "
                >
                  <strong style="display: block; margin-bottom: 0.375rem; color: #991b1b !important;">Invalid combination</strong>
                  <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.theme}</code> theme +
                  <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.actionColorScheme}</code> action color scheme
                  <p style="margin: 0.5rem 0 0; opacity: 0.85; color: #991b1b !important;">
                    <strong style="color: #991b1b !important;">\${tierLabel}:</strong> \${tierReason}
                  </p>
                  <p style="margin: 0.375rem 0 0; font-size: 0.75rem; opacity: 0.7; color: #991b1b !important;">
                    See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
                  </p>
                </div>
              \`;
    })() : nothing}
        \${args.showActions && args.actionStyle === '1-action' && actionColorSchemeValid ? html\`<mms-button
              slot="actions"
              variant="primary"
              color-scheme=\${args.actionColorScheme}
              roundness=\${args.actionRoundness}
              label="Action"
            ></mms-button>\` : nothing}
        \${args.showActions && args.actionStyle === 'hr-actions' && actionColorSchemeValid ? html\`
              <mms-button
                slot="actions"
                variant="secondary"
                color-scheme=\${args.actionColorScheme}
                roundness=\${args.actionRoundness}
                full-width
                label="Cancel"
              ></mms-button>
              <mms-button
                slot="actions"
                variant="primary"
                color-scheme=\${args.actionColorScheme}
                roundness=\${args.actionRoundness}
                full-width
                label="Action"
              ></mms-button>
            \` : nothing}
        \${args.showActions && args.actionStyle === 'vt-actions' && actionColorSchemeValid ? html\`
              <mms-button
                slot="actions"
                variant="primary"
                color-scheme=\${args.actionColorScheme}
                roundness=\${args.actionRoundness}
                full-width
                label="Action"
              ></mms-button>
              <mms-button
                slot="actions"
                variant="secondary"
                color-scheme=\${args.actionColorScheme}
                roundness=\${args.actionRoundness}
                full-width
                label="Cancel"
              ></mms-button>
            \` : nothing}
        \${args.showActions && args.actionStyle === 'link' ? html\`<mms-link slot="actions" label="View details" right-icon="arrow-right"></mms-link>\` : nothing}
      </mms-card>
    \`;
  }
}`,...k.parameters?.docs?.source}}},A=[`Overview`,`PlaygroundStory`]}));j();export{O as Overview,k as PlaygroundStory,A as __namedExportsOrder,D as default,j as n,C as t};