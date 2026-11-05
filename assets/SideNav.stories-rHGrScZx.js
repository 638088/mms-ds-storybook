import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{t as a}from"./mms-icon.component-DFVI3nJi.js";import{a as o,n as s,r as c}from"./iframe-CcinUa1O.js";import{t as l}from"./mms-card.component-Ae9XIj4r.js";import{n as u,r as d}from"./wcag-coverage-DNhlI7v1.js";import{a as f,c as p,d as m,i as h,n as g,o as _,r as v,u as y}from"./doc-styles-DkvR_Qyb.js";import{a as b,n as x}from"./a11y-outcome-B57XZvCQ.js";import{n as S,t as C}from"./mms-side-nav.component-1gid_Ho_.js";var w=t({Overview:()=>j,PlaygroundStory:()=>N,__namedExportsOrder:()=>P,default:()=>A});function T(e,t=`480px`){return r`
    <div style="display: flex; height: ${t}; ${f.frame}">
      ${e}
    </div>
  `}function E(){return r`
    <mms-side-nav-item label="Home" icon="house" active href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Exams" icon="calendar" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Reimbursements" icon="currency-dollar" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Uploads" icon="upload" href="#"></mms-side-nav-item>
    <mms-side-nav-item nav-type="category" label="Resources" icon="book-open">
      <mms-side-nav-item label="Guides" href="#"></mms-side-nav-item>
      <mms-side-nav-item label="Forms" href="#"></mms-side-nav-item>
    </mms-side-nav-item>
    <mms-side-nav-item label="FAQs" icon="question" href="#"></mms-side-nav-item>
  `}function D(){return r`
    <mms-side-nav-item label="Home" icon="house" active href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Exams" icon="calendar" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Reimbursements" icon="currency-dollar" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Uploads" icon="upload" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Claims" icon="file-text" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Providers" icon="stethoscope" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Appointments" icon="calendar-plus" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Messages" icon="envelope" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Documents" icon="folder" href="#"></mms-side-nav-item>
    <mms-side-nav-item nav-type="category" label="Resources" icon="book-open">
      <mms-side-nav-item label="Guides" href="#"></mms-side-nav-item>
      <mms-side-nav-item label="Forms" href="#"></mms-side-nav-item>
    </mms-side-nav-item>
    <mms-side-nav-item label="Billing" icon="receipt" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Notifications" icon="bell" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Help Center" icon="lifebuoy" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="Settings" icon="gear" href="#"></mms-side-nav-item>
    <mms-side-nav-item label="FAQs" icon="question" href="#"></mms-side-nav-item>
  `}function O(e,t,i=!0){return r`
    ${e?r`
          <div slot="utility" style="display: flex; flex-direction: column; gap: var(--spacing-xs2); padding: var(--spacing-sm2); box-sizing: border-box;">
            <div style="display: flex; align-items: center; gap: var(--spacing-sm1);">
              <mms-icon name="phone" size="sm" style="flex-shrink: 0; color: var(--color-text-subtle); display: var(--mms-side-nav-icon-display, flex);"></mms-icon>
              <span
                style="font-family: var(--type-ui-label-md-family); font-size: var(--type-ui-label-md-size); line-height: var(--type-ui-label-md-line-height); font-weight: var(--type-ui-label-md-weight); color: var(--color-text-default);"
              >
                Contact
              </span>
            </div>
            <mms-link
              href="tel:+18005550100"
              label="1-800-555-0100"
              size="sm"
              style="padding-inline-start: ${i?`calc(var(--icon-size-sm) + var(--spacing-sm1))`:`0`};"
            ></mms-link>
          </div>
        `:n}
    <mms-side-nav-item slot="account" icon="user-circle" label="Jane Doe" href="#"></mms-side-nav-item>
    ${e&&t?r`<mms-icon slot="utility-compact" name="phone" size="sm" label="Contact: 1-800-555-0100"></mms-icon>`:n}
    ${t?r`
          <mms-side-nav-item
            slot="account-compact"
            icon="user-circle"
            label="Jane Doe"
            href="#"
            icon-only
          ></mms-side-nav-item>
        `:n}
  `}function k(){return r`
    <h1
      style="font-family: var(--type-heading-2-family); font-size: var(--type-heading-2-size); line-height: var(--type-heading-2-line-height); font-weight: var(--type-heading-2-weight); letter-spacing: var(--type-heading-2-letter-spacing); color: var(--color-text-default); margin: 0 0 var(--spacing-sm2);"
    >
      Your benefits, in one place
    </h1>
    <p
      style="font-family: var(--type-body-md-family); font-size: var(--type-body-md-size); line-height: var(--type-body-md-line-height); font-weight: var(--type-body-md-weight); color: var(--color-text-subtle); margin: 0;"
    >
      Review coverage, find providers, and track claims — all from this dashboard.
    </p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--layout-gap-default); margin-top: var(--layout-gap-default);">
      <mms-card icon="heartbeat" title-text="Coverage" description-text="Review what your plan includes and what it costs." show-actions action-style="link">
        <mms-link slot="actions" href="#" label="View plan"></mms-link>
      </mms-card>
      <mms-card icon="map-pin" title-text="Providers" description-text="Find in-network care near you." show-actions action-style="link">
        <mms-link slot="actions" href="#" label="Search providers"></mms-link>
      </mms-card>
      <mms-card icon="receipt" title-text="Claims" description-text="Track recent activity on your account." show-actions action-style="link">
        <mms-link slot="actions" href="#" label="View claims"></mms-link>
      </mms-card>
    </div>
  `}var A,j,M,N,P,F=e((()=>{i(),c(),C(),S(),a(),o(),l(),u(),x(),p(),A={title:`Navigational/Side Nav`,tags:[`!autodocs`]},j={name:`Overview`,render:()=>r`
    <div data-theme=${v} data-mode=${_()} style=${g}>

      <h1 style="${m.h1}">Side Nav</h1>
      <p style="${m.body} ${f.muted} max-width: ${h}; margin-bottom: ${y.subsection};">
        A persistent vertical panel for in-app/dashboard navigation, alongside page content —
        logo, a list of <code style="${m.monoSm}">mms-side-nav-item</code> entries, and optional
        utility/account content. Collapses to an icon rail on request, and below 768px the rail
        hands off to a real <code style="${m.monoSm}">mms-header</code> instance — not a second
        drawer implementation — configured from the same slotted content.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${y.subsection};">
        <div slot="body-content">
        <p style="${m.bodySm} margin: 0;">
          No gradient/brand background is built in. The component ships as a standard light
          surface, same as <code style="${m.monoSm}">mms-header</code> —
          a dark, branded treatment is a consuming theme's styling choice, not a structural default.
        </p>
        </div>
      </mms-card>

      <hr style="${f.divider}" />

      <!-- Basic Usage -->
      <h2 style="${m.h2}">Basic usage</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.subsection};">
        Page items (optionally linking via <code style="${m.monoSm}">href</code>), a category
        with its own disclosure group, dividers, and section headers all compose from the same
        <code style="${m.monoSm}">mms-side-nav-item</code> element via its
        <code style="${m.monoSm}">nav-type</code> prop.
      </p>

      ${T(r`
        <mms-side-nav site-name="Member Portal" style="--mms-side-nav-top-offset: 0px; --mms-side-nav-height: 100%;">
          ${E()}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="${m.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      `)}

      <hr style="${f.divider} margin-top: ${y.subsection};" />

      <!-- Collapse -->
      <h2 style="${m.h2}">Collapse</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.subsection};">
        The trigger toggles <code style="${m.monoSm}">expanded</code>. With
        <code style="${m.monoSm}">icons</code> set, collapsing shows an icon-only rail instead of
        hiding navigation entirely — the real items collapse in place rather than a second,
        synthetic rail (see the component doc comment for why). Activating any item while
        collapsed expands the rail first.
      </p>

      ${T(r`
        <mms-side-nav .expanded=${!1} icons style="--mms-side-nav-height: 100%;">
          ${E()}
          ${O(!1,!0)}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="${m.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      `)}

      <p style="${m.caption} ${f.muted} max-width: ${h}; margin: ${y.subsection} 0 0;">
        Without <code style="${m.monoSm}">icons</code>, collapsing hides the primary nav items
        entirely — appropriate when there's no meaningful icon-only representation for them.
        <code style="${m.monoSm}">account</code> uses its own <code style="${m.monoSm}">-compact</code>
        slot instead (shown above) and isn't gated by <code style="${m.monoSm}">icons</code> at
        all — a collapsed rail can show a compact account control even when the primary items have
        no icon-only form. <code style="${m.monoSm}">utility</code> has the same
        <code style="${m.monoSm}">-compact</code> option (see <code style="${m.monoSm}">mms-icon</code>
        slotted as <code style="${m.monoSm}">utility-compact</code>) — omitted here since this nav
        has no utility content to begin with.
      </p>

      <hr style="${f.divider} margin-top: ${y.subsection};" />

      <!-- Utility and account slots -->
      <h2 style="${m.h2}">Utility and account content</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.subsection};">
        Both optional. <code style="${m.monoSm}">utility</code> is free-form content between the
        nav items and the account block (e.g. a support/contact callout);
        <code style="${m.monoSm}">account</code> is pinned at the bottom (e.g. a profile control
        with sign-out). Each is preceded by a divider only when that slot actually has content —
        an empty slot contributes nothing, same convention as <code style="${m.monoSm}">mms-footer</code>.
      </p>

      ${T(r`
        <mms-side-nav icons style="--mms-side-nav-height: 100%;">
          ${E()}
          ${O(!0,!0)}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="${m.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      `)}

      <hr style="${f.divider} margin-top: ${y.subsection};" />

      <!-- Scrollable content -->
      <h2 style="${m.h2}">Scrollable content</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.subsection};">
        The rail is its own scroll container — independent of the page, and independent of the main
        content pane beside it. When there are more items than available height, the rail scrolls
        as a single unit (header, items, utility, and account all move together) rather than
        clipping or spawning a second nested scroll region. No scrollbar is ever shown for it —
        scroll with the wheel/trackpad over the rail below to see the rest of the list; the page
        and the content pane to its right don't move.
      </p>

      ${T(r`
        <mms-side-nav style="--mms-side-nav-height: 100%;">
          ${D()}
          ${O(!0,!1,!1)}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="${m.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      `)}

      <hr style="${f.divider} margin-top: ${y.subsection};" />

      <!-- Narrow viewport -->
      <h2 style="${m.h2}">Narrow viewport</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.content};">
        Below 768px, the rail disappears and <code style="${m.monoSm}">mms-header</code> renders.
        The switch happens at the real browser viewport width
        (<code style="${m.monoSm}">matchMedia</code>), not a container query.
      </p>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin: 0 0 ${y.content};">
        <code style="${m.monoSm}">mms-header</code>'s flat nav model has no equivalent of a
        category's disclosure group, so the slotted content is mapped rather than reused as-is:
      </p>
      <ul style="${m.bodySm} ${f.muted} max-width: ${h}; margin: 0 0 ${y.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${y.label};">
          <strong>Nav items:</strong> each <code style="${m.monoSm}">page</code>/<code style="${m.monoSm}">category</code>
          item becomes an <code style="${m.monoSm}">mms-link</code> nav entry
        </li>
        <li style="margin-bottom: ${y.label};">
          <strong>Categories:</strong> use their first navigable child's href, since a category
          itself has none — everything else nested under it isn't carried over
        </li>
        <li style="margin-bottom: ${y.label};">
          <strong>Dividers/section headers:</strong> dropped — no flat-nav equivalent
        </li>
        <li style="margin-bottom: ${y.label};">
          <strong>Account:</strong> the <code style="${m.monoSm}">account</code> slot's item maps
          to an <code style="${m.monoSm}">mms-link</code> in <code style="${m.monoSm}">mms-header</code>'s
          own <code style="${m.monoSm}">account</code> slot, carrying its icon over too, not just
          label/href
        </li>
        <li>
          <strong>Utility:</strong> only the <code style="${m.monoSm}">mms-link</code>/<code style="${m.monoSm}">mms-button</code>
          elements found inside it (free-form by design — see its own description above) carry
          over as quick actions
        </li>
      </ul>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.content};">
        By default, <code style="${m.monoSm}">mms-link</code> renders lighter-weight and blue, like
        a plain hyperlink — not like <code style="${m.monoSm}">mms-header</code>'s own nav links.
        That's because <code style="${m.monoSm}">mms-header</code> only applies its nav color
        treatment and its <code style="${m.monoSm}">type-scale="ui-label"</code> weight correction
        to its own <code style="${m.monoSm}">nav</code> slot, not to <code style="${m.monoSm}">account</code>
        or <code style="${m.monoSm}">actions</code>. So both are set explicitly on every mapped
        link here, making them match the rest of the header instead of standing out.
      </p>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${y.subsection};">
        <div slot="body-content">
        <p style="${m.bodySm} margin: 0;">
          Resizing this preview won't trigger it — <code style="${m.monoSm}">mms-side-nav</code>
          listens for a real window resize, not a container size change. To see it, go to the
          Playground story and set "Viewport" to "Below breakpoint."
        </p>
        </div>
      </mms-card>

      <hr style="${f.divider}" />

      <!-- Placement -->
      <h2 style="${m.h2}">Placement under a fixed header</h2>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.content};">
        If your page has a fixed header above the side nav, the nav would otherwise stick to the
        very top of the viewport and overlap it. Set <code style="${m.monoSm}">--mms-side-nav-top-offset</code>
        to the header's height (in px) to fix this: it pushes the nav's sticky position down below
        the header, and shrinks the nav's own height by that same amount so it doesn't run past
        the bottom of the screen.
      </p>
      <pre style="${f.pre} margin-bottom: ${y.content};"><code>mms-side-nav { --mms-side-nav-top-offset: 64px; }</code></pre>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.content};">
        If that same external header also shows the brand logo, the rail would otherwise show it
        a second time right below. Set <code style="${m.monoSm}">hide-logo</code> on
        <code style="${m.monoSm}">mms-side-nav</code> to suppress its own expanded-state logo (the
        small collapsed-rail mark is unaffected — many products keep that one regardless). Omit
        <code style="${m.monoSm}">site-name</code> entirely if the external header already shows
        the product/site name; there's no separate prop needed for that, since it only renders
        when you pass it.
      </p>
      <pre style="${f.pre} margin-bottom: ${y.content};"><code>mms-side-nav { --mms-side-nav-top-offset: 64px; }
mms-side-nav[hide-logo] { /* no site-name attribute set */ }</code></pre>
      <p style="${m.bodySm} ${f.muted} max-width: ${h}; margin-bottom: ${y.content};">
        If that external header is meant to stay on screen at every width, also set
        <code style="${m.monoSm}">external-header</code>. Below 768px,
        <code style="${m.monoSm}">mms-side-nav</code> normally replaces the rail with its own
        separate nested <code style="${m.monoSm}">mms-header</code> (see "Narrow viewport" above)
        — with <code style="${m.monoSm}">external-header</code> set, it renders nothing there
        instead, so you don't end up with two header instances on screen at once.
      </p>
      <pre style="${f.pre} margin-bottom: ${y.content};"><code>&lt;mms-side-nav hide-logo external-header style="--mms-side-nav-top-offset: 64px;"&gt;
  ...
&lt;/mms-side-nav&gt;</code></pre>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${y.subsection};">
        <div slot="body-content">
        <p style="${m.bodySm} margin: 0;">
          <strong>Known limitation (MVP1):</strong> <code style="${m.monoSm}">external-header</code>
          only hides <code style="${m.monoSm}">mms-side-nav</code>'s own narrow-viewport content —
          it doesn't move that content anywhere else. Unless the external header independently
          provides an equivalent path to the same navigation, the side nav's own items have no
          reachable path on mobile in this composition. There's no automatic reconciliation
          between the two; this combination isn't recommended for an experience that must support
          narrow viewports without addressing that gap yourself.
        </p>
        </div>
      </mms-card>

      <hr style="${f.divider}" />

      <!-- Accessibility -->
      <h2 style="${m.h2}">Accessibility</h2>

      <h3 style="${m.h3}">WCAG 2.2 AA compliance</h3>
      ${b(d[`side-nav`].rows)}

      <h3 style="${m.h3}">Screen reader behavior</h3>
      <ul style="${m.bodySm} ${f.muted} margin: 0 0 ${y.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${y.label};"><strong>Landmark:</strong> The host exposes <code style="${m.monoSm}">role="navigation"</code> with <code style="${m.monoSm}">aria-label="Side navigation"</code></li>
        <li style="margin-bottom: ${y.label};"><strong>Trigger:</strong> Announces "Expand navigation"/"Collapse navigation" (or "Open"/"Close navigation" at narrow viewport) and its <code style="${m.monoSm}">aria-expanded</code> state</li>
        <li style="margin-bottom: ${y.label};"><strong>Current page:</strong> An active page item announces as current via <code style="${m.monoSm}">aria-current="page"</code></li>
        <li style="margin-bottom: ${y.label};"><strong>Category disclosure:</strong> Announces <code style="${m.monoSm}">aria-expanded</code> and is programmatically associated with its revealed group via <code style="${m.monoSm}">aria-controls</code></li>
        <li><strong>State change:</strong> Expand/collapse of the rail is announced via a visually-hidden live region (<code style="${m.monoSm}">role="status"</code>, <code style="${m.monoSm}">aria-live="polite"</code>)</li>
      </ul>

      <h3 style="${m.h3}">Keyboard navigation</h3>
      <table style="${f.table} margin-bottom: ${y.subsection};">
        <thead>
          <tr>
            <th style="${f.th} width: 140px;">Key</th>
            <th style="${f.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${f.td}"><kbd style="${f.kbd}">Tab</kbd> / <kbd style="${f.kbd}">Shift+Tab</kbd></td>
            <td style="${f.td}">Move focus through the trigger, items, and any utility/account content, in document order</td>
          </tr>
          <tr>
            <td style="${f.td}"><kbd style="${f.kbd}">Enter</kbd> / <kbd style="${f.kbd}">Space</kbd></td>
            <td style="${f.td}">Activate the focused trigger, page item, or category disclosure</td>
          </tr>
          <tr>
            <td style="${f.td}"><kbd style="${f.kbd}">Escape</kbd></td>
            <td style="${f.td}">Closes the narrow-viewport drawer, if open</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},M=[``,`house`,`calendar`,`currency-dollar`,`upload`,`book-open`,`question`,`file-text`,`stethoscope`,`calendar-plus`,`envelope`,`folder`,`receipt`,`bell`,`lifebuoy`,`gear`,`user-circle`,`phone`,`map-pin`,`heartbeat`],N={name:`Playground`,tags:[`!dev`],args:{viewport:`current`,siteName:`Member Portal`,item1Label:`Home`,item1Icon:`house`,item2Label:`Exams`,item2Icon:`calendar`,item3Label:`Reimbursements`,item3Icon:`currency-dollar`,item4Label:`Uploads`,item4Icon:`upload`,categoryLabel:`Resources`,categoryIcon:`book-open`,categoryChild1Label:`Guides`,categoryChild2Label:`Forms`,item5Label:`FAQs`,item5Icon:`question`,selectedItem:`item1`,expanded:!0,collapsible:!0,icons:!0,showUtility:!0,showAccount:!0,showCompactVariants:!0,surface:`solid`,surfaceColor:``,theme:`maximus`,density:`default`},render:e=>{let t=e.selectedItem,i=e.viewport===`below-breakpoint`,a=document.body.getAttribute(`data-mode`)||`light`,o=r`
      <style>
        /* Below mms-side-nav's own 768px breakpoint it hands off to a real mms-header (see its
           class doc comment, DUE-1644) — a normal top-of-page element, not a rail beside content,
           so this demo wrapper needs to stack rather than sit side by side there too. !important
           on both: the Viewport demo control below sets these same properties inline for the
           simulated case, and a genuinely narrow real browser window needs to win over that
           inline default regardless of what the control happens to be set to. */
        @media (max-width: 767px) {
          .side-nav-demo {
            flex-direction: column !important;
            height: auto !important;
          }
        }
      </style>
      <div
        class="side-nav-demo"
        data-theme=${e.theme}
        data-mode=${a}
        style="display: flex; flex-direction: ${i?`column`:`row`}; height: ${i?`calc(560px - var(--spacing-lg2))`:`560px`}; overflow-y: ${i?`auto`:`visible`};"
      >
        <mms-side-nav
          .expanded=${e.expanded}
          ?collapsible=${e.collapsible}
          ?icons=${e.icons}
          .forceNarrow=${i}
          surface=${e.surface}
          style=${`--mms-side-nav-height: 100%;${e.surfaceColor?` --mms-side-nav-surface-color: ${e.surfaceColor};`:``}`}
          site-name=${e.siteName||n}
        >
          <mms-side-nav-item label=${e.item1Label} icon=${e.item1Icon||n} ?active=${t===`item1`} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=${e.item2Label} icon=${e.item2Icon||n} ?active=${t===`item2`} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=${e.item3Label} icon=${e.item3Icon||n} ?active=${t===`item3`} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=${e.item4Label} icon=${e.item4Icon||n} ?active=${t===`item4`} href="#"></mms-side-nav-item>
          <mms-side-nav-item nav-type="category" label=${e.categoryLabel} icon=${e.categoryIcon||n}>
            <mms-side-nav-item label=${e.categoryChild1Label} ?active=${t===`categoryChild1`} href="#"></mms-side-nav-item>
            <mms-side-nav-item label=${e.categoryChild2Label} ?active=${t===`categoryChild2`} href="#"></mms-side-nav-item>
          </mms-side-nav-item>
          <mms-side-nav-item label=${e.item5Label} icon=${e.item5Icon||n} ?active=${t===`item5`} href="#"></mms-side-nav-item>
          ${e.showUtility?r`
                <div slot="utility" style="display: flex; flex-direction: column; gap: var(--spacing-xs2); padding: var(--spacing-sm2); box-sizing: border-box;">
                  <div style="display: flex; align-items: center; gap: var(--spacing-sm1);">
                    <mms-icon name="phone" size="sm" style="flex-shrink: 0; color: var(--color-text-subtle); display: var(--mms-side-nav-icon-display, flex);"></mms-icon>
                    <span
                      style="font-family: var(--type-ui-label-md-family); font-size: var(--type-ui-label-md-size); line-height: var(--type-ui-label-md-line-height); font-weight: var(--type-ui-label-md-weight); color: var(--color-text-default);"
                    >
                      Contact
                    </span>
                  </div>
                  <mms-link
                    href="tel:+18005550100"
                    label="1-800-555-0100"
                    left-icon="phone"
                    size="sm"
                  ></mms-link>
                </div>
              `:n}
          ${e.showAccount?r`<mms-side-nav-item slot="account" icon="user-circle" label="Jane Doe" href="#"></mms-side-nav-item>`:n}
          ${e.showUtility&&e.showCompactVariants?r`<mms-icon slot="utility-compact" name="phone" size="sm" label="Contact: 1-800-555-0100"></mms-icon>`:n}
          ${e.showAccount&&e.showCompactVariants?r`
                <mms-side-nav-item
                  slot="account-compact"
                  icon="user-circle"
                  label="Jane Doe"
                  href="#"
                  icon-only
                ></mms-side-nav-item>
              `:n}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken); overflow-y: auto;">
          ${k()}
        </div>
      </div>
    `;return i?r`
          <div style="background: var(--color-neutral-6); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;">
            <div style="width: 500px; margin-inline: auto; contain: paint;">${o}</div>
          </div>
        `:o},argTypes:{viewport:{name:`Viewport`,control:{type:`select`,labels:{current:`Current view`,"below-breakpoint":`Below breakpoint`}},options:[`current`,`below-breakpoint`],description:`Not a component prop — a story-only control. "Below breakpoint" forces the real below-768px render path (a nested mms-header, mapped from the same slotted content) and constrains the canvas to a real 500px-wide box, so mms-header's own width-measuring collapse genuinely triggers rather than being faked. mms-side-nav reads the real viewport via matchMedia rather than its own container width (see the Overview story), so unlike mms-header's own simulated-viewport control, nothing in this story can recreate a genuine matchMedia-triggering resize — the override drives that half, the real 500px box drives mms-header's half.`,table:{category:`Demo Controls`}},siteName:{name:`Site name`,control:`text`,description:`Portal/product name shown beneath the logo. Clear the field to omit it.`,table:{category:`Content`}},item1Label:{name:`Item 1 label`,control:`text`,table:{category:`Content`}},item1Icon:{name:`Item 1 icon`,control:`select`,options:M,table:{category:`Content`}},item2Label:{name:`Item 2 label`,control:`text`,table:{category:`Content`}},item2Icon:{name:`Item 2 icon`,control:`select`,options:M,table:{category:`Content`}},item3Label:{name:`Item 3 label`,control:`text`,table:{category:`Content`}},item3Icon:{name:`Item 3 icon`,control:`select`,options:M,table:{category:`Content`}},item4Label:{name:`Item 4 label`,control:`text`,table:{category:`Content`}},item4Icon:{name:`Item 4 icon`,control:`select`,options:M,table:{category:`Content`}},categoryLabel:{name:`Category label`,control:`text`,description:`Label for the disclosure category item`,table:{category:`Content`}},categoryIcon:{name:`Category icon`,control:`select`,options:M,table:{category:`Content`}},categoryChild1Label:{name:`Category › child 1`,control:`text`,table:{category:`Content`}},categoryChild2Label:{name:`Category › child 2`,control:`text`,table:{category:`Content`}},item5Label:{name:`Item 5 label`,control:`text`,table:{category:`Content`}},item5Icon:{name:`Item 5 icon`,control:`select`,options:M,table:{category:`Content`}},selectedItem:{name:`Selected (active) item`,control:`select`,options:[`none`,`item1`,`item2`,`item3`,`item4`,`categoryChild1`,`categoryChild2`,`item5`],description:`Which page item is currently active/current`,table:{category:`Content`}},expanded:{name:`Expanded`,control:`boolean`,description:`Whether the rail shows full content or is collapsed. Forced true whenever Collapsible is off.`,table:{category:`Behavior`}},collapsible:{name:`Collapsible`,control:`boolean`,description:`Whether the rail can collapse at all. Off removes the trigger entirely and forces Expanded on — for an experience (e.g. VES) whose rail never collapses. The narrow-viewport drawer is unaffected either way.`,table:{category:`Behavior`}},icons:{name:`Icons`,control:`boolean`,description:`When collapsed, show an icon-only rail for the primary nav items instead of hiding them entirely. Independent of utility/account, which use their own -compact slots regardless of this prop.`,table:{category:`Behavior`}},showUtility:{name:`Show utility`,control:`boolean`,description:`Toggles sample content in the utility slot (a contact callout here) between the nav items and account. The slot itself accepts any content — a different component, a custom element, a composite — this is just one example of what can go there, not a set of props the real component exposes.`,table:{category:`Behavior`}},showAccount:{name:`Show account`,control:`boolean`,description:`Toggles sample content in the account slot, pinned at the bottom (a profile item here). Same as utility — the slot accepts any content, this is one example.`,table:{category:`Behavior`}},showCompactVariants:{name:`Show compact variants`,control:`boolean`,description:`Supply utility-compact/account-compact content, shown instead of the full versions while the rail is collapsed`,table:{category:`Behavior`}},surface:{name:`Surface`,control:`select`,options:[`tint`,`solid`],description:`Background fill: solid (default, flatter, brand-themed solid fill) | tint (the standard panel background). Same prop/values as mms-card’s surface.`,table:{category:`Visual`}},surfaceColor:{name:`Surface color override`,control:`color`,description:`Sets --mms-side-nav-surface-color directly. This is an escape hatch for a specific business/design need, not a general invitation to recolor the panel — this control does not check contrast, and any value used here needs its own accessibility review (text, icon, and border colors against it) before shipping. Clear to fall back to the token Surface resolves to.`,table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:s,description:`Brand theme`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{layout:`fullscreen`}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Side Nav</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A persistent vertical panel for in-app/dashboard navigation, alongside page content —
        logo, a list of <code style="\${t.monoSm}">mms-side-nav-item</code> entries, and optional
        utility/account content. Collapses to an icon rail on request, and below 768px the rail
        hands off to a real <code style="\${t.monoSm}">mms-header</code> instance — not a second
        drawer implementation — configured from the same slotted content.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm} margin: 0;">
          No gradient/brand background is built in. The component ships as a standard light
          surface, same as <code style="\${t.monoSm}">mms-header</code> —
          a dark, branded treatment is a consuming theme's styling choice, not a structural default.
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Page items (optionally linking via <code style="\${t.monoSm}">href</code>), a category
        with its own disclosure group, dividers, and section headers all compose from the same
        <code style="\${t.monoSm}">mms-side-nav-item</code> element via its
        <code style="\${t.monoSm}">nav-type</code> prop.
      </p>

      \${demoFrame(html\`
        <mms-side-nav site-name="Member Portal" style="--mms-side-nav-top-offset: 0px; --mms-side-nav-height: 100%;">
          \${sampleItems()}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="\${t.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      \`)}

      <hr style="\${doc.divider} margin-top: \${space.subsection};" />

      <!-- Collapse -->
      <h2 style="\${t.h2}">Collapse</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The trigger toggles <code style="\${t.monoSm}">expanded</code>. With
        <code style="\${t.monoSm}">icons</code> set, collapsing shows an icon-only rail instead of
        hiding navigation entirely — the real items collapse in place rather than a second,
        synthetic rail (see the component doc comment for why). Activating any item while
        collapsed expands the rail first.
      </p>

      \${demoFrame(html\`
        <mms-side-nav .expanded=\${false} icons style="--mms-side-nav-height: 100%;">
          \${sampleItems()}
          \${sampleUtilityAccount(false, true)}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="\${t.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      \`)}

      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX}; margin: \${space.subsection} 0 0;">
        Without <code style="\${t.monoSm}">icons</code>, collapsing hides the primary nav items
        entirely — appropriate when there's no meaningful icon-only representation for them.
        <code style="\${t.monoSm}">account</code> uses its own <code style="\${t.monoSm}">-compact</code>
        slot instead (shown above) and isn't gated by <code style="\${t.monoSm}">icons</code> at
        all — a collapsed rail can show a compact account control even when the primary items have
        no icon-only form. <code style="\${t.monoSm}">utility</code> has the same
        <code style="\${t.monoSm}">-compact</code> option (see <code style="\${t.monoSm}">mms-icon</code>
        slotted as <code style="\${t.monoSm}">utility-compact</code>) — omitted here since this nav
        has no utility content to begin with.
      </p>

      <hr style="\${doc.divider} margin-top: \${space.subsection};" />

      <!-- Utility and account slots -->
      <h2 style="\${t.h2}">Utility and account content</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Both optional. <code style="\${t.monoSm}">utility</code> is free-form content between the
        nav items and the account block (e.g. a support/contact callout);
        <code style="\${t.monoSm}">account</code> is pinned at the bottom (e.g. a profile control
        with sign-out). Each is preceded by a divider only when that slot actually has content —
        an empty slot contributes nothing, same convention as <code style="\${t.monoSm}">mms-footer</code>.
      </p>

      \${demoFrame(html\`
        <mms-side-nav icons style="--mms-side-nav-height: 100%;">
          \${sampleItems()}
          \${sampleUtilityAccount(true, true)}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="\${t.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      \`)}

      <hr style="\${doc.divider} margin-top: \${space.subsection};" />

      <!-- Scrollable content -->
      <h2 style="\${t.h2}">Scrollable content</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The rail is its own scroll container — independent of the page, and independent of the main
        content pane beside it. When there are more items than available height, the rail scrolls
        as a single unit (header, items, utility, and account all move together) rather than
        clipping or spawning a second nested scroll region. No scrollbar is ever shown for it —
        scroll with the wheel/trackpad over the rail below to see the rest of the list; the page
        and the content pane to its right don't move.
      </p>

      \${demoFrame(html\`
        <mms-side-nav style="--mms-side-nav-height: 100%;">
          \${sampleManyItems()}
          \${sampleUtilityAccount(true, false, false)}
        </mms-side-nav>
        <div style="flex: 1; padding: var(--spacing-lg2); background: var(--color-surface-sunken);">
          <p style="\${t.bodySm} color: var(--color-text-subtle); margin: 0;">Page content area</p>
        </div>
      \`)}

      <hr style="\${doc.divider} margin-top: \${space.subsection};" />

      <!-- Narrow viewport -->
      <h2 style="\${t.h2}">Narrow viewport</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Below 768px, the rail disappears and <code style="\${t.monoSm}">mms-header</code> renders.
        The switch happens at the real browser viewport width
        (<code style="\${t.monoSm}">matchMedia</code>), not a container query.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0 0 \${space.content};">
        <code style="\${t.monoSm}">mms-header</code>'s flat nav model has no equivalent of a
        category's disclosure group, so the slotted content is mapped rather than reused as-is:
      </p>
      <ul style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};">
          <strong>Nav items:</strong> each <code style="\${t.monoSm}">page</code>/<code style="\${t.monoSm}">category</code>
          item becomes an <code style="\${t.monoSm}">mms-link</code> nav entry
        </li>
        <li style="margin-bottom: \${space.label};">
          <strong>Categories:</strong> use their first navigable child's href, since a category
          itself has none — everything else nested under it isn't carried over
        </li>
        <li style="margin-bottom: \${space.label};">
          <strong>Dividers/section headers:</strong> dropped — no flat-nav equivalent
        </li>
        <li style="margin-bottom: \${space.label};">
          <strong>Account:</strong> the <code style="\${t.monoSm}">account</code> slot's item maps
          to an <code style="\${t.monoSm}">mms-link</code> in <code style="\${t.monoSm}">mms-header</code>'s
          own <code style="\${t.monoSm}">account</code> slot, carrying its icon over too, not just
          label/href
        </li>
        <li>
          <strong>Utility:</strong> only the <code style="\${t.monoSm}">mms-link</code>/<code style="\${t.monoSm}">mms-button</code>
          elements found inside it (free-form by design — see its own description above) carry
          over as quick actions
        </li>
      </ul>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        By default, <code style="\${t.monoSm}">mms-link</code> renders lighter-weight and blue, like
        a plain hyperlink — not like <code style="\${t.monoSm}">mms-header</code>'s own nav links.
        That's because <code style="\${t.monoSm}">mms-header</code> only applies its nav color
        treatment and its <code style="\${t.monoSm}">type-scale="ui-label"</code> weight correction
        to its own <code style="\${t.monoSm}">nav</code> slot, not to <code style="\${t.monoSm}">account</code>
        or <code style="\${t.monoSm}">actions</code>. So both are set explicitly on every mapped
        link here, making them match the rest of the header instead of standing out.
      </p>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm} margin: 0;">
          Resizing this preview won't trigger it — <code style="\${t.monoSm}">mms-side-nav</code>
          listens for a real window resize, not a container size change. To see it, go to the
          Playground story and set "Viewport" to "Below breakpoint."
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Placement -->
      <h2 style="\${t.h2}">Placement under a fixed header</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        If your page has a fixed header above the side nav, the nav would otherwise stick to the
        very top of the viewport and overlap it. Set <code style="\${t.monoSm}">--mms-side-nav-top-offset</code>
        to the header's height (in px) to fix this: it pushes the nav's sticky position down below
        the header, and shrinks the nav's own height by that same amount so it doesn't run past
        the bottom of the screen.
      </p>
      <pre style="\${doc.pre} margin-bottom: \${space.content};"><code>mms-side-nav { --mms-side-nav-top-offset: 64px; }</code></pre>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        If that same external header also shows the brand logo, the rail would otherwise show it
        a second time right below. Set <code style="\${t.monoSm}">hide-logo</code> on
        <code style="\${t.monoSm}">mms-side-nav</code> to suppress its own expanded-state logo (the
        small collapsed-rail mark is unaffected — many products keep that one regardless). Omit
        <code style="\${t.monoSm}">site-name</code> entirely if the external header already shows
        the product/site name; there's no separate prop needed for that, since it only renders
        when you pass it.
      </p>
      <pre style="\${doc.pre} margin-bottom: \${space.content};"><code>mms-side-nav { --mms-side-nav-top-offset: 64px; }
mms-side-nav[hide-logo] { /* no site-name attribute set */ }</code></pre>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        If that external header is meant to stay on screen at every width, also set
        <code style="\${t.monoSm}">external-header</code>. Below 768px,
        <code style="\${t.monoSm}">mms-side-nav</code> normally replaces the rail with its own
        separate nested <code style="\${t.monoSm}">mms-header</code> (see "Narrow viewport" above)
        — with <code style="\${t.monoSm}">external-header</code> set, it renders nothing there
        instead, so you don't end up with two header instances on screen at once.
      </p>
      <pre style="\${doc.pre} margin-bottom: \${space.content};"><code>&lt;mms-side-nav hide-logo external-header style="--mms-side-nav-top-offset: 64px;"&gt;
  ...
&lt;/mms-side-nav&gt;</code></pre>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Known limitation (MVP1):</strong> <code style="\${t.monoSm}">external-header</code>
          only hides <code style="\${t.monoSm}">mms-side-nav</code>'s own narrow-viewport content —
          it doesn't move that content anywhere else. Unless the external header independently
          provides an equivalent path to the same navigation, the side nav's own items have no
          reachable path on mobile in this composition. There's no automatic reconciliation
          between the two; this combination isn't recommended for an experience that must support
          narrow viewports without addressing that gap yourself.
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['side-nav'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Landmark:</strong> The host exposes <code style="\${t.monoSm}">role="navigation"</code> with <code style="\${t.monoSm}">aria-label="Side navigation"</code></li>
        <li style="margin-bottom: \${space.label};"><strong>Trigger:</strong> Announces "Expand navigation"/"Collapse navigation" (or "Open"/"Close navigation" at narrow viewport) and its <code style="\${t.monoSm}">aria-expanded</code> state</li>
        <li style="margin-bottom: \${space.label};"><strong>Current page:</strong> An active page item announces as current via <code style="\${t.monoSm}">aria-current="page"</code></li>
        <li style="margin-bottom: \${space.label};"><strong>Category disclosure:</strong> Announces <code style="\${t.monoSm}">aria-expanded</code> and is programmatically associated with its revealed group via <code style="\${t.monoSm}">aria-controls</code></li>
        <li><strong>State change:</strong> Expand/collapse of the rail is announced via a visually-hidden live region (<code style="\${t.monoSm}">role="status"</code>, <code style="\${t.monoSm}">aria-live="polite"</code>)</li>
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
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Tab</kbd> / <kbd style="\${doc.kbd}">Shift+Tab</kbd></td>
            <td style="\${doc.td}">Move focus through the trigger, items, and any utility/account content, in document order</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd> / <kbd style="\${doc.kbd}">Space</kbd></td>
            <td style="\${doc.td}">Activate the focused trigger, page item, or category disclosure</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Escape</kbd></td>
            <td style="\${doc.td}">Closes the narrow-viewport drawer, if open</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    // Demo Controls
    viewport: 'current',
    // Content
    siteName: 'Member Portal',
    item1Label: 'Home',
    item1Icon: 'house',
    item2Label: 'Exams',
    item2Icon: 'calendar',
    item3Label: 'Reimbursements',
    item3Icon: 'currency-dollar',
    item4Label: 'Uploads',
    item4Icon: 'upload',
    categoryLabel: 'Resources',
    categoryIcon: 'book-open',
    categoryChild1Label: 'Guides',
    categoryChild2Label: 'Forms',
    item5Label: 'FAQs',
    item5Icon: 'question',
    selectedItem: 'item1',
    // Behavior
    expanded: true,
    collapsible: true,
    icons: true,
    showUtility: true,
    showAccount: true,
    showCompactVariants: true,
    // Visual
    surface: 'solid',
    surfaceColor: '',
    // Global
    theme: 'maximus',
    density: 'default'
  },
  render: (args: PlaygroundArgs) => {
    const sel = args.selectedItem;
    const simulateNarrow = args.viewport === 'below-breakpoint';
    // Wired to args, not just the global toolbar — mode comes along from
    // whatever the toolbar currently has on body, read at render time, so the
    // two don't fight (data-theme/data-mode dark-mode overrides are a single
    // compound selector and need to live on the same element).
    const mode = document.body.getAttribute('data-mode') || 'light';
    const demo = html\`
      <style>
        /* Below mms-side-nav's own 768px breakpoint it hands off to a real mms-header (see its
           class doc comment, DUE-1644) — a normal top-of-page element, not a rail beside content,
           so this demo wrapper needs to stack rather than sit side by side there too. !important
           on both: the Viewport demo control below sets these same properties inline for the
           simulated case, and a genuinely narrow real browser window needs to win over that
           inline default regardless of what the control happens to be set to. */
        @media (max-width: 767px) {
          .side-nav-demo {
            flex-direction: column !important;
            height: auto !important;
          }
        }
      </style>
      <div
        class="side-nav-demo"
        data-theme=\${args.theme}
        data-mode=\${mode}
        style="display: flex; flex-direction: \${simulateNarrow ? 'column' : 'row'}; height: \${simulateNarrow ? 'calc(560px - var(--spacing-lg2))' : '560px'}; overflow-y: \${simulateNarrow ? 'auto' : 'visible'};"
      >
        <mms-side-nav
          .expanded=\${args.expanded}
          ?collapsible=\${args.collapsible}
          ?icons=\${args.icons}
          .forceNarrow=\${simulateNarrow}
          surface=\${args.surface}
          style=\${\`--mms-side-nav-height: 100%;\${args.surfaceColor ? \` --mms-side-nav-surface-color: \${args.surfaceColor};\` : ''}\`}
          site-name=\${args.siteName || nothing}
        >
          <mms-side-nav-item label=\${args.item1Label} icon=\${args.item1Icon || nothing} ?active=\${sel === 'item1'} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=\${args.item2Label} icon=\${args.item2Icon || nothing} ?active=\${sel === 'item2'} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=\${args.item3Label} icon=\${args.item3Icon || nothing} ?active=\${sel === 'item3'} href="#"></mms-side-nav-item>
          <mms-side-nav-item label=\${args.item4Label} icon=\${args.item4Icon || nothing} ?active=\${sel === 'item4'} href="#"></mms-side-nav-item>
          <mms-side-nav-item nav-type="category" label=\${args.categoryLabel} icon=\${args.categoryIcon || nothing}>
            <mms-side-nav-item label=\${args.categoryChild1Label} ?active=\${sel === 'categoryChild1'} href="#"></mms-side-nav-item>
            <mms-side-nav-item label=\${args.categoryChild2Label} ?active=\${sel === 'categoryChild2'} href="#"></mms-side-nav-item>
          </mms-side-nav-item>
          <mms-side-nav-item label=\${args.item5Label} icon=\${args.item5Icon || nothing} ?active=\${sel === 'item5'} href="#"></mms-side-nav-item>
          \${args.showUtility ? html\`
                <div slot="utility" style="display: flex; flex-direction: column; gap: var(--spacing-xs2); padding: var(--spacing-sm2); box-sizing: border-box;">
                  <div style="display: flex; align-items: center; gap: var(--spacing-sm1);">
                    <mms-icon name="phone" size="sm" style="flex-shrink: 0; color: var(--color-text-subtle); display: var(--mms-side-nav-icon-display, flex);"></mms-icon>
                    <span
                      style="font-family: var(--type-ui-label-md-family); font-size: var(--type-ui-label-md-size); line-height: var(--type-ui-label-md-line-height); font-weight: var(--type-ui-label-md-weight); color: var(--color-text-default);"
                    >
                      Contact
                    </span>
                  </div>
                  <mms-link
                    href="tel:+18005550100"
                    label="1-800-555-0100"
                    left-icon="phone"
                    size="sm"
                  ></mms-link>
                </div>
              \` : nothing}
          \${args.showAccount ? html\`<mms-side-nav-item slot="account" icon="user-circle" label="Jane Doe" href="#"></mms-side-nav-item>\` : nothing}
          \${args.showUtility && args.showCompactVariants ? html\`<mms-icon slot="utility-compact" name="phone" size="sm" label="Contact: 1-800-555-0100"></mms-icon>\` : nothing}
          \${args.showAccount && args.showCompactVariants ? html\`
                <mms-side-nav-item
                  slot="account-compact"
                  icon="user-circle"
                  label="Jane Doe"
                  href="#"
                  icon-only
                ></mms-side-nav-item>
              \` : nothing}
        </mms-side-nav>
        <div style="flex: 1; padding: 2rem; background: var(--color-surface-sunken); overflow-y: auto;">
          \${samplePageContent()}
        </div>
      </div>
    \`;
    // A real ~500px box, not a CSS trick — mms-header's own below-breakpoint collapse measures
    // its actual container width via ResizeObserver, so genuinely constraining the canvas here
    // (padding showing it's a deliberately narrow slice, same pattern mms-header's own Playground
    // uses for its simulated-viewport control) is what makes it collapse for real, rather than
    // needing a second forced-collapse override on top of mms-side-nav's own forceNarrow.
    return simulateNarrow ? html\`
          <div style="background: var(--color-neutral-6); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;">
            <div style="width: 500px; margin-inline: auto; contain: paint;">\${demo}</div>
          </div>
        \` : demo;
  },
  argTypes: {
    // ── Demo Controls ─────────────────────────────────────────
    viewport: {
      name: 'Viewport',
      control: {
        type: 'select',
        labels: {
          current: 'Current view',
          'below-breakpoint': 'Below breakpoint'
        }
      },
      options: ['current', 'below-breakpoint'],
      description: 'Not a component prop — a story-only control. "Below breakpoint" forces the real below-768px render path (a nested mms-header, mapped from the same slotted content) and constrains the canvas to a real 500px-wide box, so mms-header\\'s own width-measuring collapse genuinely triggers rather than being faked. mms-side-nav reads the real viewport via matchMedia rather than its own container width (see the Overview story), so unlike mms-header\\'s own simulated-viewport control, nothing in this story can recreate a genuine matchMedia-triggering resize — the override drives that half, the real 500px box drives mms-header\\'s half.',
      table: {
        category: 'Demo Controls'
      }
    },
    // ── Content ───────────────────────────────────────────────
    siteName: {
      name: 'Site name',
      control: 'text',
      description: 'Portal/product name shown beneath the logo. Clear the field to omit it.',
      table: {
        category: 'Content'
      }
    },
    item1Label: {
      name: 'Item 1 label',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    item1Icon: {
      name: 'Item 1 icon',
      control: 'select',
      options: navIconOptions,
      table: {
        category: 'Content'
      }
    },
    item2Label: {
      name: 'Item 2 label',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    item2Icon: {
      name: 'Item 2 icon',
      control: 'select',
      options: navIconOptions,
      table: {
        category: 'Content'
      }
    },
    item3Label: {
      name: 'Item 3 label',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    item3Icon: {
      name: 'Item 3 icon',
      control: 'select',
      options: navIconOptions,
      table: {
        category: 'Content'
      }
    },
    item4Label: {
      name: 'Item 4 label',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    item4Icon: {
      name: 'Item 4 icon',
      control: 'select',
      options: navIconOptions,
      table: {
        category: 'Content'
      }
    },
    categoryLabel: {
      name: 'Category label',
      control: 'text',
      description: 'Label for the disclosure category item',
      table: {
        category: 'Content'
      }
    },
    categoryIcon: {
      name: 'Category icon',
      control: 'select',
      options: navIconOptions,
      table: {
        category: 'Content'
      }
    },
    categoryChild1Label: {
      name: 'Category › child 1',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    categoryChild2Label: {
      name: 'Category › child 2',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    item5Label: {
      name: 'Item 5 label',
      control: 'text',
      table: {
        category: 'Content'
      }
    },
    item5Icon: {
      name: 'Item 5 icon',
      control: 'select',
      options: navIconOptions,
      table: {
        category: 'Content'
      }
    },
    selectedItem: {
      name: 'Selected (active) item',
      control: 'select',
      options: ['none', 'item1', 'item2', 'item3', 'item4', 'categoryChild1', 'categoryChild2', 'item5'],
      description: 'Which page item is currently active/current',
      table: {
        category: 'Content'
      }
    },
    // ── Behavior ──────────────────────────────────────────────
    expanded: {
      name: 'Expanded',
      control: 'boolean',
      description: 'Whether the rail shows full content or is collapsed. Forced true whenever Collapsible is off.',
      table: {
        category: 'Behavior'
      }
    },
    collapsible: {
      name: 'Collapsible',
      control: 'boolean',
      description: 'Whether the rail can collapse at all. Off removes the trigger entirely and forces Expanded on — for an experience (e.g. VES) whose rail never collapses. The narrow-viewport drawer is unaffected either way.',
      table: {
        category: 'Behavior'
      }
    },
    icons: {
      name: 'Icons',
      control: 'boolean',
      description: 'When collapsed, show an icon-only rail for the primary nav items instead of hiding them entirely. Independent of utility/account, which use their own -compact slots regardless of this prop.',
      table: {
        category: 'Behavior'
      }
    },
    showUtility: {
      name: 'Show utility',
      control: 'boolean',
      description: 'Toggles sample content in the utility slot (a contact callout here) between the nav items and account. The slot itself accepts any content — a different component, a custom element, a composite — this is just one example of what can go there, not a set of props the real component exposes.',
      table: {
        category: 'Behavior'
      }
    },
    showAccount: {
      name: 'Show account',
      control: 'boolean',
      description: 'Toggles sample content in the account slot, pinned at the bottom (a profile item here). Same as utility — the slot accepts any content, this is one example.',
      table: {
        category: 'Behavior'
      }
    },
    showCompactVariants: {
      name: 'Show compact variants',
      control: 'boolean',
      description: 'Supply utility-compact/account-compact content, shown instead of the full versions while the rail is collapsed',
      table: {
        category: 'Behavior'
      }
    },
    // ── Visual ────────────────────────────────────────────────
    surface: {
      name: 'Surface',
      control: 'select',
      options: ['tint', 'solid'],
      description: 'Background fill: solid (default, flatter, brand-themed solid fill) | tint (the standard panel background). Same prop/values as mms-card’s surface.',
      table: {
        category: 'Visual'
      }
    },
    surfaceColor: {
      name: 'Surface color override',
      control: 'color',
      description: 'Sets --mms-side-nav-surface-color directly. This is an escape hatch for a specific business/design need, not a general invitation to recolor the panel — this control does not check contrast, and any value used here needs its own accessibility review (text, icon, and border colors against it) before shipping. Clear to fall back to the token Surface resolves to.',
      table: {
        category: 'Visual'
      }
    },
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: BRAND_ORDER,
      description: 'Brand theme',
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
    layout: 'fullscreen'
  }
}`,...N.parameters?.docs?.source}}},P=[`Overview`,`PlaygroundStory`]}));F();export{j as Overview,N as PlaygroundStory,P as __namedExportsOrder,A as default,F as n,w as t};