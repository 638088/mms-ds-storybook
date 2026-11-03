import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{a,l as o,n as s,r as c}from"./iframe-C49srKsk.js";import{t as l}from"./mms-header.component-CbCZ6cXY.js";import{t as u}from"./mms-card.component-Ae9XIj4r.js";import{n as d,r as f}from"./wcag-coverage-DNhlI7v1.js";import{a as p,c as m,d as h,i as g,n as _,o as v,r as y,u as b}from"./doc-styles-DkvR_Qyb.js";import{a as x,n as S}from"./a11y-outcome-Baw4sLAQ.js";var C=t({FullPreview:()=>R,LayoutBehavior:()=>z,Overview:()=>I,PlaygroundStory:()=>L,__namedExportsOrder:()=>B,default:()=>M});function w(e){let t=e??`768`;return t===`fill`?`100%`:`${t}px`}function T(e=!1){return r`
    <span
      slot=${e?`logo-compact`:`logo`}
      style="display: inline-flex; align-items: center; justify-content: center; width: ${e?`32px`:`112px`}; height: 32px; border: 1px dashed rgba(128,128,128,0.5); border-radius: 4px; font-family: var(--type-body-sm-family); font-size: var(--type-body-sm-size); line-height: var(--type-body-sm-line-height); font-weight: var(--type-body-sm-weight); opacity: 0.6;"
      role="img"
      aria-label="Logo placeholder"
    >
      ${e?`â—»`:`logo`}
    </span>
  `}function E(e){return e.split(`,`).map(e=>e.trim()).filter(e=>e.length>0)}function D(e){return E(e).map(e=>{let[t,n]=e.split(`:`).map(e=>e.trim());return{label:t,icon:n||void 0}})}function O(e=N){return r`
    ${E(e).map(e=>r`<mms-link slot="nav" href="#" label=${e} underline="none"></mms-link>`)}
  `}function k(e=P,t=F){return r`
    ${D(e).map(({label:e,icon:t})=>r`
        <mms-button
          slot="actions"
          variant="ghost"
          size="md"
          color-scheme="onyx"
          left-icon=${t??n}
          label=${e}
        ></mms-button>
      `)}
    ${t?r`<mms-button
          slot="account"
          variant="ghost"
          size="md"
          color-scheme="onyx"
          left-icon="user-circle"
          label=${t}
        ></mms-button>`:n}
  `}function A(){return r`${O(`Benefits, Providers, Claims`)}${k(``)}`}function j(e=`content`,t=`main-content`){return r`
    <style>
      .demo-main {
        background: var(--color-surface-solid);
        padding-block: var(--spacing-lg2);
        /* Container-driven to match the header, which measures its own width.
           Left as a media query it would take the desktop branch whenever the
           real viewport is wide, and the page inset would drift out of
           alignment with the logo in any narrowed context. */
        container-type: inline-size;
        container-name: mms-page;
      }
      .demo-container {
        max-width: var(--layout-content-max-width);
        margin-inline: auto;
        padding-inline: var(--layout-inline-padding-compact);
        box-sizing: border-box;
      }
      @container mms-page (min-width: 768px) {
        .demo-container {
          padding-inline: var(--layout-inline-padding-default);
        }
      }
      .demo-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: var(--layout-gap-loose);
        margin-top: var(--spacing-lg2);
      }
      .demo-title {
        font-family: var(--type-heading-2-family);
        font-size: var(--type-heading-2-size);
        line-height: var(--type-heading-2-line-height);
        font-weight: var(--type-heading-2-weight);
        letter-spacing: var(--type-heading-2-letter-spacing);
        color: var(--color-text-default);
        margin: 0 0 var(--spacing-sm2);
      }
      .demo-lede {
        font-family: var(--type-body-md-family);
        font-size: var(--type-body-md-size);
        line-height: var(--type-body-md-line-height);
        font-weight: var(--type-body-md-weight);
        color: var(--color-text-subtle);
        max-width: 68ch;
        margin: 0;
      }
    </style>
    <main class="demo-main" id=${t} tabindex="-1">
      <div class="demo-container">
        <h1 class="demo-title">Your benefits, in one place</h1>
        <p class="demo-lede">
          ${e===`full`?`The header is full-bleed, so its logo sits at the viewport inset while this content stays in the capped container — the two edges intentionally differ.`:`The logo above lines up with the left edge of this text. Both read the same container tokens, so the alignment holds at every width.`}
        </p>
        <div class="demo-cards">
          <mms-card
            icon="heartbeat"
            title-text="Coverage"
            description-text="Review what your plan includes and what it costs."
            show-actions
            action-style="link"
          >
            <mms-link slot="actions" href="#" label="View plan"></mms-link>
          </mms-card>
          <mms-card
            icon="map-pin"
            title-text="Providers"
            description-text="Find in-network care near you."
            show-actions
            action-style="link"
          >
            <mms-link slot="actions" href="#" label="Search providers"></mms-link>
          </mms-card>
          <mms-card
            icon="receipt"
            title-text="Claims"
            description-text="Track recent activity on your account."
            show-actions
            action-style="link"
          >
            <mms-link slot="actions" href="#" label="View claims"></mms-link>
          </mms-card>
        </div>
      </div>
    </main>
  `}var M,N,P,F,I,L,R,z,B,V=e((()=>{i(),c(),l(),a(),o(),u(),d(),S(),m(),M={title:`Navigational/Header`,tags:[`!autodocs`]},N=`Benefits, Providers, Pharmacy, Claims, Resources, Contact`,P=`Search:magnifying-glass, Alerts:bell`,F=`Account`,I={name:`Overview`,render:()=>r`
    <div data-theme=${y} data-mode=${v()} style=${_}>

      <!-- Header -->
      <h1 style="${h.h1}">Header</h1>
      <p style="${h.body} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        Site/application header with logo, primary navigation, and quick actions in a single
        structural shell. Navigation and action content are consumer-supplied via the
        <code style="${h.monoSm}">nav</code>/<code style="${h.monoSm}">actions</code> slots — compose
        with <code style="${h.monoSm}">mms-link</code>, <code style="${h.monoSm}">mms-button</code>, and
        <code style="${h.monoSm}">mms-icon</code> rather than a bespoke menu-item primitive.
      </p>

      <hr style="${p.divider}" />

      <!-- Basic Usage -->
      <h2 style="${h.h2}">Basic usage</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        A logo and primary navigation are enough to start. The site name, the divider beside it,
        quick actions and the account control are each optional — add them as the application
        needs them. Below <code style="${h.monoSm}">768px</code>, the
        <code style="${h.monoSm}">logo-compact</code> slot is shown instead of
        <code style="${h.monoSm}">logo</code>.
      </p>

      <div style="${p.frame} margin-bottom: ${b.subsection};">
        <mms-header>
          ${A()}
        </mms-header>
      </div>

      <hr style="${p.divider}" />

      <!-- Slots -->
      <h2 style="${h.h2}">Slots</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        All header content is consumer-supplied through slots. There is no bespoke menu-item
        primitive to learn — compose the same components used everywhere else in the system. Every
        slot is independent and every slot may be left empty.
      </p>

      <div style="margin-bottom: ${b.content};">
        <table style="${p.table}">
          <thead>
            <tr>
              <th style="${p.th}">Slot</th>
              <th style="${p.th}">Typical content</th>
              <th style="${p.th}">Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="${p.td}"><code style="${h.monoSm}">logo</code></td>
              <td style="${p.td}">
                <code style="${h.monoSm}">img</code>, inline SVG, or any markup
              </td>
              <td style="${p.td}">
                Shown at 768px and above. Falls back to the theme's built-in lockup when empty.
              </td>
            </tr>
            <tr>
              <td style="${p.td}">
                <code style="${h.monoSm}">logo-compact</code>
              </td>
              <td style="${p.td}">A narrower mark</td>
              <td style="${p.td}">
                Swapped in below 768px. Falls back to <code style="${h.monoSm}">logo</code> when
                empty.
              </td>
            </tr>
            <tr>
              <td style="${p.td}"><code style="${h.monoSm}">nav</code></td>
              <td style="${p.td}"><code style="${h.monoSm}">mms-link</code></td>
              <td style="${p.td}">
                Moves into the drawer once the bar runs out of room.
              </td>
            </tr>
            <tr>
              <td style="${p.td}"><code style="${h.monoSm}">actions</code></td>
              <td style="${p.td}">
                <code style="${h.monoSm}">mms-button</code>
              </td>
              <td style="${p.td}">
                Moves into the drawer in the same step as nav. Separated from nav by a divider
                while inline.
              </td>
            </tr>
            <tr>
              <td style="${p.td}"><code style="${h.monoSm}">account</code></td>
              <td style="${p.td}">
                <code style="${h.monoSm}">mms-button</code>
              </td>
              <td style="${p.td}">
                Renders last, after actions. Optional — omit entirely for apps with no auth. Moves
                into the drawer with the actions, as its own group.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre style="${p.pre}"><code>&lt;mms-header site-name="Member Portal" show-site-divider&gt;
  &lt;img slot="logo" src="/logo.svg" alt="Acme Health" /&gt;
  &lt;img slot="logo-compact" src="/logo-mark.svg" alt="Acme Health" /&gt;

  &lt;mms-link slot="nav" href="/benefits" label="Benefits"&gt;&lt;/mms-link&gt;
  &lt;mms-link slot="nav" href="/claims" label="Claims"&gt;&lt;/mms-link&gt;

  &lt;mms-button slot="actions" variant="ghost" left-icon="magnifying-glass" label="Search"&gt;&lt;/mms-button&gt;

  &lt;!-- omit this slot entirely for apps with no auth --&gt;
  &lt;mms-button slot="account" variant="ghost" left-icon="user-circle" label="Account"&gt;&lt;/mms-button&gt;
&lt;/mms-header&gt;</code></pre>

      <h3 style="${h.h3}">Account bound to auth state</h3>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        The most common use of the <code style="${h.monoSm}">account</code> slot is a control whose
        label follows authentication state — the signed-in user's name, or a sign-in prompt before.
        Swap the slotted element; the header needs no prop and no notification. Because it measures
        its content live, a longer name simply moves the point at which the bar collapses.
      </p>

      <pre style="${p.pre}"><code>&lt;!-- signed out --&gt;
&lt;mms-button slot="account" variant="ghost" left-icon="sign-in" label="Sign in"&gt;&lt;/mms-button&gt;

&lt;!-- signed in --&gt;
&lt;mms-button slot="account" variant="ghost" left-icon="user-circle" label="John Doe"&gt;&lt;/mms-button&gt;</code></pre>

      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        The slot is unopinionated about what goes in it. A custom account control — an avatar
        lockup, a menu trigger, anything the app needs — receives the same target size and the same
        drawer row treatment as a built-in button, so composing your own costs nothing in
        accessibility or layout.
      </p>

      <h3 style="${h.h3}">Linking the lockup home</h3>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        Set <code style="${h.monoSm}">home-href</code> and the logo and site name become a single
        link to your homepage — the behavior users expect from a header. It is deliberately
        opt-in: a link announces its destination to assistive technology, and the platform cannot
        know your home URL. A guess would be wrong for an app mounted under a sub-path, for a
        Salesforce or ServiceNow embed, or for a locale-rooted site — and navigating someone out of
        the application is worse than a logo that does not navigate at all.
      </p>

      <pre style="${p.pre}"><code>&lt;mms-header home-href="/" site-name="Member Portal" show-site-divider&gt;
  &lt;!-- on the homepage itself, mark it current --&gt;
&lt;mms-header home-href="/" home-current site-name="Member Portal"&gt;</code></pre>

      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        The link is named explicitly — the site name followed by
        <code style="${h.monoSm}">home-label</code> (default <code style="${h.monoSm}">Home</code>),
        or the label alone when there is no site name. It wraps an image whose alt text you control,
        so deriving the name from its contents would make it depend on your markup.
      </p>

      <hr style="${p.divider}" />

      <!-- Custom logo via slot -->
      <h2 style="${h.h2}">Custom logo</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        The active theme supplies a built-in lockup, but it is only slot <em>fallback</em> —
        anything placed in the <code style="${h.monoSm}">logo</code> and
        <code style="${h.monoSm}">logo-compact</code> slots overrides it. Supply your own mark when
        the engagement's theme is not one the package ships a logo for.
      </p>

      <div style="${p.frame} margin-bottom: ${b.subsection};">
        <mms-header site-name="Member Portal" show-site-divider>
          ${T()}
          ${T(!0)}
          ${A()}
        </mms-header>
      </div>

      <hr style="${p.divider}" />

      <!-- Logo size -->
      <h2 style="${h.h2}">Adjusting logo size</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        The built-in logo's height is not a named size a consumer picks — each theme ships its own
        pixel-tuned default. To render it larger or smaller, override the height directly:
      </p>
      <pre style="${p.pre}"><code>mms-header { --mms-header-logo-height: 56px; }</code></pre>
      <p style="${h.caption} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        <code style="${h.monoSm}">mms-footer</code> has the matching
        <code style="${h.monoSm}">--mms-footer-logo-height</code>.
      </p>

      <hr style="${p.divider}" />

      <!-- Accent line -->
      <h2 style="${h.h2}">Accent line</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        <code style="${h.monoSm}">accent-line</code> sets the thin rule along the header's bottom
        edge. It is purely decorative — it carries no status or meaning, so any palette tier is
        permitted.
      </p>

      <h3 style="${h.h3}">Line options</h3>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        <code style="${h.monoSm}">brand</code> (default) draws the rule in a scheme color.
        <code style="${h.monoSm}">light</code> draws it in the neutral surface tone, for a header
        sitting on a dark or saturated backdrop. <code style="${h.monoSm}">none</code> removes the
        rule and the bottom border with it, leaving no edge at all.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${b.content}; margin-bottom: ${b.subsection};">
        ${[`brand`,`light`,`none`].map(e=>r`
            <div>
              <p style="${h.caption} margin-bottom: ${b.label};">
                <strong>accent-line="${e}"</strong>${e===`brand`?` — default`:``}
              </p>
              <div style="${p.frame}">
                <mms-header accent-line=${e}>${A()}</mms-header>
              </div>
            </div>
          `)}
      </div>
      <p style="${h.caption} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        On a light theme <code style="${h.monoSm}">light</code> is near-white against a white bar,
        so what reads as a line above is the 1px bottom border rather than the accent itself.
        Judge it on a dark theme or a branded surface.
      </p>

      <h3 style="${h.h3}">Line color</h3>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        <code style="${h.monoSm}">accent-line-color</code> chooses which scheme color the rule
        uses — <code style="${h.monoSm}">primary</code>,
        <code style="${h.monoSm}">secondary</code>, <code style="${h.monoSm}">accent</code> or
        <code style="${h.monoSm}">onyx</code>. It applies only when
        <code style="${h.monoSm}">accent-line</code> is <code style="${h.monoSm}">brand</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${b.content}; margin-bottom: ${b.subsection};">
        ${[`primary`,`secondary`,`accent`,`onyx`].map(e=>r`
            <div>
              <p style="${h.caption} margin-bottom: ${b.label};"><strong>brand / ${e}</strong></p>
              <div style="${p.frame}">
                <mms-header accent-line="brand" accent-line-color=${e}>
                  ${A()}
                </mms-header>
              </div>
            </div>
          `)}
      </div>

      <hr style="${p.divider}" />

      <!-- Accessibility -->
      <h2 style="${h.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${b.content};">
        <div slot="body-content">
        <p style="${h.bodySm} margin: 0;">
          <strong>Skip link.</strong> A visually-hidden-until-focused "Skip to main content" link
          is always the first focusable element, jumping to <code style="${h.monoSm}">skip-link-target</code>
          (default <code style="${h.monoSm}">#main-content</code>) — configurable via
          <code style="${h.monoSm}">skip-link-target</code>/<code style="${h.monoSm}">skip-link-text</code>.
        </p>
        </div>
      </mms-card>

      <h3 style="${h.h3}">WCAG 2.2 AA compliance</h3>
      ${x(f.header.rows)}

      <h3 style="${h.h3}">Screen reader behavior</h3>
      <ul style="${h.bodySm} ${p.muted} margin: 0 0 ${b.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${b.label};"><strong>Landmark:</strong> The header is announced as "banner" via <code style="${h.monoSm}">role="banner"</code></li>
        <li style="margin-bottom: ${b.label};"><strong>Hamburger toggle:</strong> Announces "Open menu" / "Close menu" and expanded state via <code style="${h.monoSm}">aria-expanded</code></li>
        <li style="margin-bottom: ${b.label};"><strong>Collapsed panel:</strong> Announced as a dialog ("Navigation menu") via <code style="${h.monoSm}">role="dialog"</code> and <code style="${h.monoSm}">aria-modal="true"</code> only while collapsed and open</li>
        <li><strong>Skip link:</strong> Announced first on Tab from page load, before any header content</li>
      </ul>

      <h3 style="${h.h3}">Keyboard navigation</h3>
      <table style="${p.table}">
        <thead>
          <tr>
            <th style="${p.th} width: 140px;">Key</th>
            <th style="${p.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${p.td}"><kbd style="${p.kbd}">Tab</kbd></td>
            <td style="${p.td}">Move focus through skip link, logo, nav, actions, and hamburger toggle in order</td>
          </tr>
          <tr>
            <td style="${p.td}"><kbd style="${p.kbd}">Enter</kbd> / <kbd style="${p.kbd}">Space</kbd></td>
            <td style="${p.td}">Activate the focused link, button, or hamburger toggle</td>
          </tr>
          <tr>
            <td style="${p.td}"><kbd style="${p.kbd}">Escape</kbd></td>
            <td style="${p.td}">Close the collapsed nav/actions panel, if open</td>
          </tr>
          <tr>
            <td style="${p.td}"><kbd style="${p.kbd}">Shift</kbd> + <kbd style="${p.kbd}">Tab</kbd></td>
            <td style="${p.td}">While the panel is open, cycles focus backward within it (focus is trapped)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},L={name:`Playground`,tags:[`!dev`],args:{viewport:`768`,container:`content`,siteName:`Member Portal`,showSiteDivider:!0,homeHref:`#`,navItems:N,quickActions:P,accountLabel:F,accentLine:`brand`,accentLineColor:`primary`,fixed:!1,shrinkOnScroll:!0,scrollThreshold:50,showHamburger:!0,skipLinkTarget:`main-content`,skipLinkText:`Skip to main content`,theme:`maximus`,density:`default`},decorators:[(e,t)=>r`
        <div
          style="background: var(--color-surface-sunken); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;"
        >
          <!-- contain: paint makes this the containing block for the drawer's
               position: fixed overlay, so it covers the page sample rather than
               the whole canvas — without the compositing layer a transform would
               promote, which makes the drawer's slide-in animation jitter. -->
          <div
            style="display: flex; flex-direction: column; contain: paint; width: ${w(t.args.viewport)}; margin-inline: auto;"
          >
            ${e()}
          </div>
        </div>
      `],argTypes:{viewport:{name:`Viewport (simulated)`,control:`select`,options:[`400`,`768`,`1240`,`1440`,`fill`],description:"Not a component prop — a story control that constrains the preview width so responsive behavior can be seen without resizing the browser. The header measures its own container, so the simulation is faithful rather than a mock. `fill` hands the width back to the canvas. Widths above the canvas scroll within it.",table:{category:`Demo Controls`}},siteName:{name:`Site name`,control:`text`,description:`Site/product name shown next to the logo`,table:{category:`Content`}},showSiteDivider:{name:`Show site divider`,control:`boolean`,description:`Show a vertical divider between the logo and site name`,table:{category:`Content`}},homeHref:{name:`Home link`,control:`text`,description:`Destination for the logo and site name, which link home as a single target. Unset by default — the platform cannot know your home URL, and a link announces its destination to assistive tech, so it will not invent one. Clear the field to render the lockup as plain content with no link semantics.`,table:{category:`Content`}},navItems:{name:`Navigation items`,control:`text`,description:'Comma-separated nav labels, slotted as `mms-link slot="nav"`. Add or remove entries to exercise the collapse ladder: nav moves into the drawer first, then actions, then the site name stacks under the logo.',table:{category:`Content`}},quickActions:{name:`Quick actions`,control:`text`,description:'Comma-separated quick actions, slotted as `mms-button slot="actions"`. Each entry is `Label:icon`; the icon is optional, so `Sign in` is as valid as `Search:magnifying-glass`. The account item sits in its own `account` slot and is not part of this list.',table:{category:`Content`}},accountLabel:{name:`Account`,control:`text`,description:"Label for the control in the `account` slot. Clear the field to omit the slot entirely — the header is designed to work without it, for apps with no auth. Bind it to app state in production: a username once signed in, `Sign in` before.",table:{category:`Content`}},container:{name:`Container`,control:`select`,options:[`content`,`full`],description:"Caps the header row, or does not. `content` (default) limits it to `--layout-content-max-width` (1280px) and centers it, so the logo lands on the same leading edge as page content — the header reads as part of the page. `full` removes the cap so the row spans the full bar and the logo sits on the header’s own inset, giving an edge-to-edge bar wider than the content beneath it. Inline padding is identical either way (16px, 32px from 768px up); only the cap differs, so the two are indistinguishable below 1280px — use the 1440 viewport to see it. To align with a page container that is not 1280px, set `--mms-header-content-max-width`.",table:{category:`Visual`}},accentLine:{name:`Accent line`,control:`select`,options:[`brand`,`light`,`none`],description:"Thin rule along the header's bottom edge. `none` removes it entirely.",table:{category:`Visual`}},accentLineColor:{name:`Accent line color`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:"Scheme color used when `accent-line` is `brand`. Any tier is allowed — the line is decorative, so it carries no semantic constraint.",table:{category:`Visual`}},fixed:{name:`Fixed`,control:`boolean`,description:`Pin the header to the top of the viewport`,table:{category:`Behavior`}},shrinkOnScroll:{name:`Shrink on scroll`,control:`boolean`,description:`Reduce header height once scrolled past scroll threshold`,table:{category:`Behavior`}},scrollThreshold:{name:`Scroll threshold`,control:!1,description:"Scroll distance in px before the header shrinks. Applies only when both `fixed` and `shrink-on-scroll` are set. Defaults to 50 — configure only if that trigger point conflicts with your page.",table:{category:`Behavior`}},showHamburger:{name:`Show hamburger`,control:!1,description:`Keeps the hamburger toggle in the DOM while the header is expanded. Auto-collapse reveals the toggle on its own whenever nav or actions move into the drawer, so this needs no configuration in normal use.`,table:{category:`Behavior`}},skipLinkTarget:{name:`Skip link target`,control:`text`,description:`id of the main content landmark the skip link jumps to`,table:{category:`Accessibility`}},skipLinkText:{name:`Skip link text`,control:`text`,description:`Skip link label`,table:{category:`Accessibility`}},theme:{name:`Theme`,control:`select`,options:s,description:`Brand theme (affects accent stroke color)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{layout:`fullscreen`,docs:{source:{transform:(e,t)=>{let n=t.args,r=[];n.container!==`content`&&r.push(`container="${n.container}"`),n.siteName&&r.push(`site-name="${n.siteName}"`),n.showSiteDivider&&r.push(`show-site-divider`),n.homeHref&&r.push(`home-href="${n.homeHref}"`),n.accentLine!==`brand`&&r.push(`accent-line="${n.accentLine}"`),n.accentLineColor!==`primary`&&r.push(`accent-line-color="${n.accentLineColor}"`),n.fixed&&r.push(`fixed`),n.shrinkOnScroll||r.push(`shrink-on-scroll="false"`),n.scrollThreshold!==50&&r.push(`scroll-threshold="${n.scrollThreshold}"`),n.showHamburger||r.push(`show-hamburger="false"`),n.density===`compact`&&r.push(`data-density="compact"`);let i=E(n.navItems).map(e=>`  <mms-link slot="nav" href="#" label="${e}" underline="none"></mms-link>`),a=D(n.quickActions).map(({label:e,icon:t})=>`  <mms-button slot="actions" variant="ghost" color-scheme="onyx"${t?` left-icon="${t}"`:``} label="${e}"></mms-button>`),o=n.accountLabel?[`  <mms-button slot="account" variant="ghost" color-scheme="onyx" left-icon="user-circle" label="${n.accountLabel}"></mms-button>`]:[];return`<mms-header\n  ${r.join(`
  `)}\n>\n${[...i,...a,...o].join(`
`)}\n</mms-header>`},language:`html`}},controls:{sort:`none`}},render:e=>r`
    <mms-header
      container=${e.container}
      site-name=${e.siteName}
      ?show-site-divider=${e.showSiteDivider}
      home-href=${e.homeHref||n}
      accent-line=${e.accentLine}
      accent-line-color=${e.accentLineColor}
      ?fixed=${e.fixed}
      ?shrink-on-scroll=${e.shrinkOnScroll}
      scroll-threshold=${e.scrollThreshold}
      ?show-hamburger=${e.showHamburger}
      skip-link-target=${e.skipLinkTarget||n}
      skip-link-text=${e.skipLinkText||n}
      data-density=${e.density===`compact`?`compact`:n}
    >
      ${O(e.navItems)}
      ${k(e.quickActions,e.accountLabel)}
    </mms-header>
    ${j(e.container,e.skipLinkTarget)}
  `},R={...L,name:`Full Preview`,tags:[],args:{...L.args,viewport:`fill`},parameters:{...L.parameters,layout:`fullscreen`},decorators:[(e,t)=>r`
        <div style="min-height: 100vh; background: var(--color-surface-sunken); overflow-x: auto;">
          <div
            style="display: flex; flex-direction: column; min-height: 100vh; contain: paint; width: ${w(t.args.viewport)}; margin-inline: auto;"
          >
            ${e()}
          </div>
        </div>
      `]},z={name:`Layout & Behavior`,render:()=>r`
    <div data-theme=${y} data-mode=${v()} style=${_}>

      <h1 style="${h.h1}">Layout &amp; Behavior</h1>
      <p style="${h.body} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        The header adapts on two independent axes. <strong>Alignment</strong> and the
        <strong>inline inset</strong> follow the shared layout system, so the header lines up with
        page content by default. <strong>Degradation</strong> is measured from the header's own
        content rather than read from a breakpoint.
      </p>

      <hr style="${p.divider}" />

      <!-- Container alignment -->
      <h2 style="${h.h2}">Container alignment</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        The header is full-bleed; its inner row is capped at
        <code style="${h.monoSm}">--layout-content-max-width</code> and centered — the same shape a
        page content container uses. Because both read the same tokens, the logo's leading edge
        lines up with body content at every width. Margins are derived from centering, never
        declared.
      </p>
      <table style="${p.table} margin-bottom: ${b.subsection};">
        <thead>
          <tr>
            <th style="${p.th}">Setting</th>
            <th style="${p.th}">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${p.td}">
              <code style="${h.monoSm}">container="content"</code> <em>(default)</em>
            </td>
            <td style="${p.td}">Inner row aligns to the page content container.</td>
          </tr>
          <tr>
            <td style="${p.td}">
              <code style="${h.monoSm}">container="full"</code>
            </td>
            <td style="${p.td}">
              Cap released — edge-to-edge, held in only by the inline inset.
            </td>
          </tr>
        </tbody>
      </table>

      <hr style="${p.divider}" />

      <!-- The padding step -->
      <h2 style="${h.h2}">The padding step</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        The layout system defines exactly one breakpoint —
        <code style="${h.monoSm}">--layout-padding-step</code> at 768px — where the inline inset
        goes from 16px to 32px. The logo slot swaps at the same width. Everything else about the
        header is content-driven.
      </p>
      <div style="display: grid; gap: ${b.content}; margin-bottom: ${b.subsection};">
        <div>
          <p style="${h.caption} margin: 0 0 ${b.label};">
            <strong>Below 768px</strong> · inset 16px ·
            <code style="${h.monoSm}">logo-compact</code> slot
          </p>
          <div style="${p.frame} width: 480px; max-width: 100%;">
            <mms-header site-name="Member Portal" show-site-divider>
              ${O()}${k()}
            </mms-header>
          </div>
        </div>
        <div>
          <p style="${h.caption} margin: 0 0 ${b.label};">
            <strong>768px and above</strong> · inset 32px ·
            <code style="${h.monoSm}">logo</code> slot · capped at 1280px, then centered
          </p>
          <div style="${p.frame}">
            <mms-header site-name="Member Portal" show-site-divider>
              ${O()}${k()}
            </mms-header>
          </div>
        </div>
      </div>

      <hr style="${p.divider}" />

      <!-- Adjusting the container -->
      <h2 style="${h.h2}">Adjusting the container</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        Two custom properties tune the container without declaring a margin. They inherit, so
        setting them on a page wrapper realigns the header with everything else.
      </p>
      <pre style="${p.pre}"><code>/* Wider header than body */
mms-header { --mms-header-content-max-width: 1440px; }

/* Roomier inset, keeping a step of your own */
mms-header { --mms-header-inline-padding: 24px; }
@media (min-width: 1024px) {
  mms-header { --mms-header-inline-padding: 64px; }
}</code></pre>
      <p style="${h.caption} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        Setting <code style="${h.monoSm}">--mms-header-inline-padding</code> once flattens the
        768px step by design — declare it inside your own media query to keep one.
      </p>

      <hr style="${p.divider}" />

      <!-- Degradation -->
      <h2 style="${h.h2}">Responsive degradation</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        The header measures its own content live via
        <code style="${h.monoSm}">ResizeObserver</code>, independent of any fixed breakpoint. A
        breakpoint cannot do this: four short nav items fit at 700px where seven long ones do not
        fit at 1100px.
      </p>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        It degrades in two steps as the container narrows:
      </p>
      <ol style="${h.bodySm} ${p.muted} max-width: ${g}; margin: 0 0 ${b.content}; padding-left: var(--spacing-md2);">
        <li style="margin-bottom: ${b.label};">
          Nav, quick actions and the account control move into
          <code style="${h.monoSm}">mms-drawer</code> together, and the hamburger toggle appears.
        </li>
        <li style="margin-bottom: ${b.label};">
          If the logo and site name still do not fit, the site name stacks beneath the logo.
        </li>
      </ol>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.subsection};">
        The site name never hides and the logo never degrades — identity stays visible at every
        width. Restoring on the way back up uses a wider threshold than collapsing, so a header
        sitting near the boundary does not oscillate.
      </p>

      <div style="${p.frame} resize: horizontal; overflow: auto; min-width: 240px; max-width: 100%; width: 520px; margin-bottom: ${b.content};">
        <mms-header site-name="Medicaid Enrollment Portal" show-site-divider>
          ${O()}${k()}
        </mms-header>
      </div>
      <p style="${h.caption} ${p.muted} margin-bottom: ${b.subsection};">
        Drag the bottom-right corner to resize and watch both steps.
      </p>

      <hr style="${p.divider}" />

      <!-- Fixed + shrink -->
      <h2 style="${h.h2}">Fixed header and shrink on scroll</h2>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        <code style="${h.monoSm}">fixed</code> pins the header to the top of the viewport.
        <code style="${h.monoSm}">shrink-on-scroll</code> (on by default) then reduces its height
        once the window has scrolled past <code style="${h.monoSm}">scroll-threshold</code> pixels
        (default <code style="${h.monoSm}">50</code>).
      </p>
      <p style="${h.bodySm} ${p.muted} max-width: ${g}; margin-bottom: ${b.content};">
        Both conditions are required. On a static header the shrink is skipped entirely: the bar
        scrolls away regardless, and losing height mid-scroll shortens the document underneath the
        reader.
      </p>
      <p style="${h.caption} ${p.muted} max-width: ${g};">
        This one cannot be shown in a panel on this page — it responds to window scroll, not to a
        scrolling region. Open <strong>Full Preview</strong>, switch
        <code style="${h.monoSm}">Fixed</code> on, and scroll the page.
      </p>

    </div>
  `},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Header</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Site/application header with logo, primary navigation, and quick actions in a single
        structural shell. Navigation and action content are consumer-supplied via the
        <code style="\${t.monoSm}">nav</code>/<code style="\${t.monoSm}">actions</code> slots — compose
        with <code style="\${t.monoSm}">mms-link</code>, <code style="\${t.monoSm}">mms-button</code>, and
        <code style="\${t.monoSm}">mms-icon</code> rather than a bespoke menu-item primitive.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A logo and primary navigation are enough to start. The site name, the divider beside it,
        quick actions and the account control are each optional — add them as the application
        needs them. Below <code style="\${t.monoSm}">768px</code>, the
        <code style="\${t.monoSm}">logo-compact</code> slot is shown instead of
        <code style="\${t.monoSm}">logo</code>.
      </p>

      <div style="\${doc.frame} margin-bottom: \${space.subsection};">
        <mms-header>
          \${overviewContent()}
        </mms-header>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Slots -->
      <h2 style="\${t.h2}">Slots</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        All header content is consumer-supplied through slots. There is no bespoke menu-item
        primitive to learn — compose the same components used everywhere else in the system. Every
        slot is independent and every slot may be left empty.
      </p>

      <div style="margin-bottom: \${space.content};">
        <table style="\${doc.table}">
          <thead>
            <tr>
              <th style="\${doc.th}">Slot</th>
              <th style="\${doc.th}">Typical content</th>
              <th style="\${doc.th}">Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="\${doc.td}"><code style="\${t.monoSm}">logo</code></td>
              <td style="\${doc.td}">
                <code style="\${t.monoSm}">img</code>, inline SVG, or any markup
              </td>
              <td style="\${doc.td}">
                Shown at 768px and above. Falls back to the theme's built-in lockup when empty.
              </td>
            </tr>
            <tr>
              <td style="\${doc.td}">
                <code style="\${t.monoSm}">logo-compact</code>
              </td>
              <td style="\${doc.td}">A narrower mark</td>
              <td style="\${doc.td}">
                Swapped in below 768px. Falls back to <code style="\${t.monoSm}">logo</code> when
                empty.
              </td>
            </tr>
            <tr>
              <td style="\${doc.td}"><code style="\${t.monoSm}">nav</code></td>
              <td style="\${doc.td}"><code style="\${t.monoSm}">mms-link</code></td>
              <td style="\${doc.td}">
                Moves into the drawer once the bar runs out of room.
              </td>
            </tr>
            <tr>
              <td style="\${doc.td}"><code style="\${t.monoSm}">actions</code></td>
              <td style="\${doc.td}">
                <code style="\${t.monoSm}">mms-button</code>
              </td>
              <td style="\${doc.td}">
                Moves into the drawer in the same step as nav. Separated from nav by a divider
                while inline.
              </td>
            </tr>
            <tr>
              <td style="\${doc.td}"><code style="\${t.monoSm}">account</code></td>
              <td style="\${doc.td}">
                <code style="\${t.monoSm}">mms-button</code>
              </td>
              <td style="\${doc.td}">
                Renders last, after actions. Optional — omit entirely for apps with no auth. Moves
                into the drawer with the actions, as its own group.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre style="\${doc.pre}"><code>&lt;mms-header site-name="Member Portal" show-site-divider&gt;
  &lt;img slot="logo" src="/logo.svg" alt="Acme Health" /&gt;
  &lt;img slot="logo-compact" src="/logo-mark.svg" alt="Acme Health" /&gt;

  &lt;mms-link slot="nav" href="/benefits" label="Benefits"&gt;&lt;/mms-link&gt;
  &lt;mms-link slot="nav" href="/claims" label="Claims"&gt;&lt;/mms-link&gt;

  &lt;mms-button slot="actions" variant="ghost" left-icon="magnifying-glass" label="Search"&gt;&lt;/mms-button&gt;

  &lt;!-- omit this slot entirely for apps with no auth --&gt;
  &lt;mms-button slot="account" variant="ghost" left-icon="user-circle" label="Account"&gt;&lt;/mms-button&gt;
&lt;/mms-header&gt;</code></pre>

      <h3 style="\${t.h3}">Account bound to auth state</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The most common use of the <code style="\${t.monoSm}">account</code> slot is a control whose
        label follows authentication state — the signed-in user's name, or a sign-in prompt before.
        Swap the slotted element; the header needs no prop and no notification. Because it measures
        its content live, a longer name simply moves the point at which the bar collapses.
      </p>

      <pre style="\${doc.pre}"><code>&lt;!-- signed out --&gt;
&lt;mms-button slot="account" variant="ghost" left-icon="sign-in" label="Sign in"&gt;&lt;/mms-button&gt;

&lt;!-- signed in --&gt;
&lt;mms-button slot="account" variant="ghost" left-icon="user-circle" label="John Doe"&gt;&lt;/mms-button&gt;</code></pre>

      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The slot is unopinionated about what goes in it. A custom account control — an avatar
        lockup, a menu trigger, anything the app needs — receives the same target size and the same
        drawer row treatment as a built-in button, so composing your own costs nothing in
        accessibility or layout.
      </p>

      <h3 style="\${t.h3}">Linking the lockup home</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Set <code style="\${t.monoSm}">home-href</code> and the logo and site name become a single
        link to your homepage — the behavior users expect from a header. It is deliberately
        opt-in: a link announces its destination to assistive technology, and the platform cannot
        know your home URL. A guess would be wrong for an app mounted under a sub-path, for a
        Salesforce or ServiceNow embed, or for a locale-rooted site — and navigating someone out of
        the application is worse than a logo that does not navigate at all.
      </p>

      <pre style="\${doc.pre}"><code>&lt;mms-header home-href="/" site-name="Member Portal" show-site-divider&gt;
  &lt;!-- on the homepage itself, mark it current --&gt;
&lt;mms-header home-href="/" home-current site-name="Member Portal"&gt;</code></pre>

      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The link is named explicitly — the site name followed by
        <code style="\${t.monoSm}">home-label</code> (default <code style="\${t.monoSm}">Home</code>),
        or the label alone when there is no site name. It wraps an image whose alt text you control,
        so deriving the name from its contents would make it depend on your markup.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Custom logo via slot -->
      <h2 style="\${t.h2}">Custom logo</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The active theme supplies a built-in lockup, but it is only slot <em>fallback</em> —
        anything placed in the <code style="\${t.monoSm}">logo</code> and
        <code style="\${t.monoSm}">logo-compact</code> slots overrides it. Supply your own mark when
        the engagement's theme is not one the package ships a logo for.
      </p>

      <div style="\${doc.frame} margin-bottom: \${space.subsection};">
        <mms-header site-name="Member Portal" show-site-divider>
          \${sampleLogo()}
          \${sampleLogo(true)}
          \${overviewContent()}
        </mms-header>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Logo size -->
      <h2 style="\${t.h2}">Adjusting logo size</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The built-in logo's height is not a named size a consumer picks — each theme ships its own
        pixel-tuned default. To render it larger or smaller, override the height directly:
      </p>
      <pre style="\${doc.pre}"><code>mms-header { --mms-header-logo-height: 56px; }</code></pre>
      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">mms-footer</code> has the matching
        <code style="\${t.monoSm}">--mms-footer-logo-height</code>.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Accent line -->
      <h2 style="\${t.h2}">Accent line</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        <code style="\${t.monoSm}">accent-line</code> sets the thin rule along the header's bottom
        edge. It is purely decorative — it carries no status or meaning, so any palette tier is
        permitted.
      </p>

      <h3 style="\${t.h3}">Line options</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">brand</code> (default) draws the rule in a scheme color.
        <code style="\${t.monoSm}">light</code> draws it in the neutral surface tone, for a header
        sitting on a dark or saturated backdrop. <code style="\${t.monoSm}">none</code> removes the
        rule and the bottom border with it, leaving no edge at all.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection};">
        \${(['brand', 'light', 'none'] as const).map(mode => html\`
            <div>
              <p style="\${t.caption} margin-bottom: \${space.label};">
                <strong>accent-line="\${mode}"</strong>\${mode === 'brand' ? ' — default' : ''}
              </p>
              <div style="\${doc.frame}">
                <mms-header accent-line=\${mode}>\${overviewContent()}</mms-header>
              </div>
            </div>
          \`)}
      </div>
      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        On a light theme <code style="\${t.monoSm}">light</code> is near-white against a white bar,
        so what reads as a line above is the 1px bottom border rather than the accent itself.
        Judge it on a dark theme or a branded surface.
      </p>

      <h3 style="\${t.h3}">Line color</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">accent-line-color</code> chooses which scheme color the rule
        uses — <code style="\${t.monoSm}">primary</code>,
        <code style="\${t.monoSm}">secondary</code>, <code style="\${t.monoSm}">accent</code> or
        <code style="\${t.monoSm}">onyx</code>. It applies only when
        <code style="\${t.monoSm}">accent-line</code> is <code style="\${t.monoSm}">brand</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection};">
        \${(['primary', 'secondary', 'accent', 'onyx'] as const).map(accent => html\`
            <div>
              <p style="\${t.caption} margin-bottom: \${space.label};"><strong>brand / \${accent}</strong></p>
              <div style="\${doc.frame}">
                <mms-header accent-line="brand" accent-line-color=\${accent}>
                  \${overviewContent()}
                </mms-header>
              </div>
            </div>
          \`)}
      </div>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Skip link.</strong> A visually-hidden-until-focused "Skip to main content" link
          is always the first focusable element, jumping to <code style="\${t.monoSm}">skip-link-target</code>
          (default <code style="\${t.monoSm}">#main-content</code>) — configurable via
          <code style="\${t.monoSm}">skip-link-target</code>/<code style="\${t.monoSm}">skip-link-text</code>.
        </p>
        </div>
      </mms-card>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['header'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Landmark:</strong> The header is announced as "banner" via <code style="\${t.monoSm}">role="banner"</code></li>
        <li style="margin-bottom: \${space.label};"><strong>Hamburger toggle:</strong> Announces "Open menu" / "Close menu" and expanded state via <code style="\${t.monoSm}">aria-expanded</code></li>
        <li style="margin-bottom: \${space.label};"><strong>Collapsed panel:</strong> Announced as a dialog ("Navigation menu") via <code style="\${t.monoSm}">role="dialog"</code> and <code style="\${t.monoSm}">aria-modal="true"</code> only while collapsed and open</li>
        <li><strong>Skip link:</strong> Announced first on Tab from page load, before any header content</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <table style="\${doc.table}">
        <thead>
          <tr>
            <th style="\${doc.th} width: 140px;">Key</th>
            <th style="\${doc.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Tab</kbd></td>
            <td style="\${doc.td}">Move focus through skip link, logo, nav, actions, and hamburger toggle in order</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd> / <kbd style="\${doc.kbd}">Space</kbd></td>
            <td style="\${doc.td}">Activate the focused link, button, or hamburger toggle</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Escape</kbd></td>
            <td style="\${doc.td}">Close the collapsed nav/actions panel, if open</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Shift</kbd> + <kbd style="\${doc.kbd}">Tab</kbd></td>
            <td style="\${doc.td}">While the panel is open, cycles focus backward within it (focus is trapped)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    viewport: '768',
    container: 'content',
    siteName: 'Member Portal',
    showSiteDivider: true,
    homeHref: '#',
    navItems: DEFAULT_NAV_ITEMS,
    quickActions: DEFAULT_QUICK_ACTIONS,
    accountLabel: DEFAULT_ACCOUNT,
    accentLine: 'brand',
    accentLineColor: 'primary',
    fixed: false,
    shrinkOnScroll: true,
    scrollThreshold: 50,
    showHamburger: true,
    skipLinkTarget: 'main-content',
    skipLinkText: 'Skip to main content',
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown, ctx: {
    args: {
      viewport?: string;
    };
  }) => {
    const w = previewWidth(ctx.args.viewport);
    return html\`
        <div
          style="background: var(--color-surface-sunken); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;"
        >
          <!-- contain: paint makes this the containing block for the drawer's
               position: fixed overlay, so it covers the page sample rather than
               the whole canvas — without the compositing layer a transform would
               promote, which makes the drawer's slide-in animation jitter. -->
          <div
            style="display: flex; flex-direction: column; contain: paint; width: \${w}; margin-inline: auto;"
          >
            \${story()}
          </div>
        </div>
      \`;
  }],
  argTypes: {
    viewport: {
      name: 'Viewport (simulated)',
      control: 'select',
      options: ['400', '768', '1240', '1440', 'fill'],
      description: 'Not a component prop — a story control that constrains the preview width so responsive behavior can be seen without resizing the browser. The header measures its own container, so the simulation is faithful rather than a mock. \`fill\` hands the width back to the canvas. Widths above the canvas scroll within it.',
      table: {
        category: 'Demo Controls'
      }
    },
    // ── Content ───────────────────────────────────────────────
    siteName: {
      name: 'Site name',
      control: 'text',
      description: 'Site/product name shown next to the logo',
      table: {
        category: 'Content'
      }
    },
    showSiteDivider: {
      name: 'Show site divider',
      control: 'boolean',
      description: 'Show a vertical divider between the logo and site name',
      table: {
        category: 'Content'
      }
    },
    homeHref: {
      name: 'Home link',
      control: 'text',
      description: 'Destination for the logo and site name, which link home as a single target. Unset by default — the platform cannot know your home URL, and a link announces its destination to assistive tech, so it will not invent one. Clear the field to render the lockup as plain content with no link semantics.',
      table: {
        category: 'Content'
      }
    },
    navItems: {
      name: 'Navigation items',
      control: 'text',
      description: 'Comma-separated nav labels, slotted as \`mms-link slot="nav"\`. Add or remove entries to exercise the collapse ladder: nav moves into the drawer first, then actions, then the site name stacks under the logo.',
      table: {
        category: 'Content'
      }
    },
    quickActions: {
      name: 'Quick actions',
      control: 'text',
      description: 'Comma-separated quick actions, slotted as \`mms-button slot="actions"\`. Each entry is \`Label:icon\`; the icon is optional, so \`Sign in\` is as valid as \`Search:magnifying-glass\`. The account item sits in its own \`account\` slot and is not part of this list.',
      table: {
        category: 'Content'
      }
    },
    accountLabel: {
      name: 'Account',
      control: 'text',
      description: 'Label for the control in the \`account\` slot. Clear the field to omit the slot entirely — the header is designed to work without it, for apps with no auth. Bind it to app state in production: a username once signed in, \`Sign in\` before.',
      table: {
        category: 'Content'
      }
    },
    // ── Visual ────────────────────────────────────────────────
    container: {
      name: 'Container',
      control: 'select',
      options: ['content', 'full'],
      description: 'Caps the header row, or does not. \`content\` (default) limits it to \`--layout-content-max-width\` (1280px) and centers it, so the logo lands on the same leading edge as page content — the header reads as part of the page. \`full\` removes the cap so the row spans the full bar and the logo sits on the header’s own inset, giving an edge-to-edge bar wider than the content beneath it. Inline padding is identical either way (16px, 32px from 768px up); only the cap differs, so the two are indistinguishable below 1280px — use the 1440 viewport to see it. To align with a page container that is not 1280px, set \`--mms-header-content-max-width\`.',
      table: {
        category: 'Visual'
      }
    },
    accentLine: {
      name: 'Accent line',
      control: 'select',
      options: ['brand', 'light', 'none'],
      description: "Thin rule along the header's bottom edge. \`none\` removes it entirely.",
      table: {
        category: 'Visual'
      }
    },
    accentLineColor: {
      name: 'Accent line color',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Scheme color used when \`accent-line\` is \`brand\`. Any tier is allowed — the line is decorative, so it carries no semantic constraint.',
      table: {
        category: 'Visual'
      }
    },
    // ── Behavior ──────────────────────────────────────────────
    fixed: {
      name: 'Fixed',
      control: 'boolean',
      description: 'Pin the header to the top of the viewport',
      table: {
        category: 'Behavior'
      }
    },
    shrinkOnScroll: {
      name: 'Shrink on scroll',
      control: 'boolean',
      description: 'Reduce header height once scrolled past scroll threshold',
      table: {
        category: 'Behavior'
      }
    },
    scrollThreshold: {
      name: 'Scroll threshold',
      control: false,
      description: 'Scroll distance in px before the header shrinks. Applies only when both \`fixed\` and \`shrink-on-scroll\` are set. Defaults to 50 — configure only if that trigger point conflicts with your page.',
      table: {
        category: 'Behavior'
      }
    },
    showHamburger: {
      name: 'Show hamburger',
      control: false,
      description: 'Keeps the hamburger toggle in the DOM while the header is expanded. Auto-collapse reveals the toggle on its own whenever nav or actions move into the drawer, so this needs no configuration in normal use.',
      table: {
        category: 'Behavior'
      }
    },
    // ── Accessibility ─────────────────────────────────────────
    skipLinkTarget: {
      name: 'Skip link target',
      control: 'text',
      description: 'id of the main content landmark the skip link jumps to',
      table: {
        category: 'Accessibility'
      }
    },
    skipLinkText: {
      name: 'Skip link text',
      control: 'text',
      description: 'Skip link label',
      table: {
        category: 'Accessibility'
      }
    },
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: BRAND_ORDER,
      description: 'Brand theme (affects accent stroke color)',
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
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: {
            container: string;
            siteName: string;
            showSiteDivider: boolean;
            homeHref: string;
            navItems: string;
            quickActions: string;
            accountLabel: string;
            accentLine: string;
            accentLineColor: string;
            fixed: boolean;
            shrinkOnScroll: boolean;
            scrollThreshold: number;
            showHamburger: boolean;
            density: string;
          };
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.container !== 'content') attrs.push(\`container="\${a.container}"\`);
          if (a.siteName) attrs.push(\`site-name="\${a.siteName}"\`);
          if (a.showSiteDivider) attrs.push('show-site-divider');
          if (a.homeHref) attrs.push(\`home-href="\${a.homeHref}"\`);
          if (a.accentLine !== 'brand') attrs.push(\`accent-line="\${a.accentLine}"\`);
          if (a.accentLineColor !== 'primary') attrs.push(\`accent-line-color="\${a.accentLineColor}"\`);
          if (a.fixed) attrs.push('fixed');
          if (!a.shrinkOnScroll) attrs.push('shrink-on-scroll="false"');
          if (a.scrollThreshold !== 50) attrs.push(\`scroll-threshold="\${a.scrollThreshold}"\`);
          if (!a.showHamburger) attrs.push('show-hamburger="false"');
          if (a.density === 'compact') attrs.push('data-density="compact"');
          const nav = parseCommaSeparated(a.navItems).map(label => \`  <mms-link slot="nav" href="#" label="\${label}" underline="none"></mms-link>\`);
          const actions = parseActionSpec(a.quickActions).map(({
            label,
            icon
          }) => \`  <mms-button slot="actions" variant="ghost" color-scheme="onyx"\${icon ? \` left-icon="\${icon}"\` : ''} label="\${label}"></mms-button>\`);
          const account = a.accountLabel ? [\`  <mms-button slot="account" variant="ghost" color-scheme="onyx" left-icon="user-circle" label="\${a.accountLabel}"></mms-button>\`] : [];
          return \`<mms-header\\n  \${attrs.join('\\n  ')}\\n>\\n\${[...nav, ...actions, ...account].join('\\n')}\\n</mms-header>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none'
    }
  },
  render: (args: {
    container: string;
    siteName: string;
    showSiteDivider: boolean;
    homeHref: string;
    navItems: string;
    quickActions: string;
    accountLabel: string;
    accentLine: string;
    accentLineColor: string;
    fixed: boolean;
    shrinkOnScroll: boolean;
    scrollThreshold: number;
    showHamburger: boolean;
    skipLinkTarget: string;
    skipLinkText: string;
    density: string;
  }) => html\`
    <mms-header
      container=\${args.container}
      site-name=\${args.siteName}
      ?show-site-divider=\${args.showSiteDivider}
      home-href=\${args.homeHref || nothing}
      accent-line=\${args.accentLine}
      accent-line-color=\${args.accentLineColor}
      ?fixed=\${args.fixed}
      ?shrink-on-scroll=\${args.shrinkOnScroll}
      scroll-threshold=\${args.scrollThreshold}
      ?show-hamburger=\${args.showHamburger}
      skip-link-target=\${args.skipLinkTarget || nothing}
      skip-link-text=\${args.skipLinkText || nothing}
      data-density=\${args.density === 'compact' ? 'compact' : nothing}
    >
      \${sampleNav(args.navItems)}
      \${sampleActions(args.quickActions, args.accountLabel)}
    </mms-header>
    \${samplePage(args.container, args.skipLinkTarget)}
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...PlaygroundStory,
  name: 'Full Preview',
  tags: [],
  args: {
    ...PlaygroundStory.args,
    viewport: 'fill'
  },
  parameters: {
    ...PlaygroundStory.parameters,
    layout: 'fullscreen'
  },
  decorators: [(story: () => unknown, ctx: {
    args: {
      viewport?: string;
    };
  }) => {
    const w = previewWidth(ctx.args.viewport);
    return html\`
        <div style="min-height: 100vh; background: var(--color-surface-sunken); overflow-x: auto;">
          <div
            style="display: flex; flex-direction: column; min-height: 100vh; contain: paint; width: \${w}; margin-inline: auto;"
          >
            \${story()}
          </div>
        </div>
      \`;
  }]
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Layout & Behavior',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Layout &amp; Behavior</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The header adapts on two independent axes. <strong>Alignment</strong> and the
        <strong>inline inset</strong> follow the shared layout system, so the header lines up with
        page content by default. <strong>Degradation</strong> is measured from the header's own
        content rather than read from a breakpoint.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Container alignment -->
      <h2 style="\${t.h2}">Container alignment</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The header is full-bleed; its inner row is capped at
        <code style="\${t.monoSm}">--layout-content-max-width</code> and centered — the same shape a
        page content container uses. Because both read the same tokens, the logo's leading edge
        lines up with body content at every width. Margins are derived from centering, never
        declared.
      </p>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Setting</th>
            <th style="\${doc.th}">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}">
              <code style="\${t.monoSm}">container="content"</code> <em>(default)</em>
            </td>
            <td style="\${doc.td}">Inner row aligns to the page content container.</td>
          </tr>
          <tr>
            <td style="\${doc.td}">
              <code style="\${t.monoSm}">container="full"</code>
            </td>
            <td style="\${doc.td}">
              Cap released — edge-to-edge, held in only by the inline inset.
            </td>
          </tr>
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <!-- The padding step -->
      <h2 style="\${t.h2}">The padding step</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The layout system defines exactly one breakpoint —
        <code style="\${t.monoSm}">--layout-padding-step</code> at 768px — where the inline inset
        goes from 16px to 32px. The logo slot swaps at the same width. Everything else about the
        header is content-driven.
      </p>
      <div style="display: grid; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div>
          <p style="\${t.caption} margin: 0 0 \${space.label};">
            <strong>Below 768px</strong> · inset 16px ·
            <code style="\${t.monoSm}">logo-compact</code> slot
          </p>
          <div style="\${doc.frame} width: 480px; max-width: 100%;">
            <mms-header site-name="Member Portal" show-site-divider>
              \${sampleNav()}\${sampleActions()}
            </mms-header>
          </div>
        </div>
        <div>
          <p style="\${t.caption} margin: 0 0 \${space.label};">
            <strong>768px and above</strong> · inset 32px ·
            <code style="\${t.monoSm}">logo</code> slot · capped at 1280px, then centered
          </p>
          <div style="\${doc.frame}">
            <mms-header site-name="Member Portal" show-site-divider>
              \${sampleNav()}\${sampleActions()}
            </mms-header>
          </div>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Adjusting the container -->
      <h2 style="\${t.h2}">Adjusting the container</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Two custom properties tune the container without declaring a margin. They inherit, so
        setting them on a page wrapper realigns the header with everything else.
      </p>
      <pre style="\${doc.pre}"><code>/* Wider header than body */
mms-header { --mms-header-content-max-width: 1440px; }

/* Roomier inset, keeping a step of your own */
mms-header { --mms-header-inline-padding: 24px; }
@media (min-width: 1024px) {
  mms-header { --mms-header-inline-padding: 64px; }
}</code></pre>
      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Setting <code style="\${t.monoSm}">--mms-header-inline-padding</code> once flattens the
        768px step by design — declare it inside your own media query to keep one.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Degradation -->
      <h2 style="\${t.h2}">Responsive degradation</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The header measures its own content live via
        <code style="\${t.monoSm}">ResizeObserver</code>, independent of any fixed breakpoint. A
        breakpoint cannot do this: four short nav items fit at 700px where seven long ones do not
        fit at 1100px.
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        It degrades in two steps as the container narrows:
      </p>
      <ol style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0 0 \${space.content}; padding-left: var(--spacing-md2);">
        <li style="margin-bottom: \${space.label};">
          Nav, quick actions and the account control move into
          <code style="\${t.monoSm}">mms-drawer</code> together, and the hamburger toggle appears.
        </li>
        <li style="margin-bottom: \${space.label};">
          If the logo and site name still do not fit, the site name stacks beneath the logo.
        </li>
      </ol>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The site name never hides and the logo never degrades — identity stays visible at every
        width. Restoring on the way back up uses a wider threshold than collapsing, so a header
        sitting near the boundary does not oscillate.
      </p>

      <div style="\${doc.frame} resize: horizontal; overflow: auto; min-width: 240px; max-width: 100%; width: 520px; margin-bottom: \${space.content};">
        <mms-header site-name="Medicaid Enrollment Portal" show-site-divider>
          \${sampleNav()}\${sampleActions()}
        </mms-header>
      </div>
      <p style="\${t.caption} \${doc.muted} margin-bottom: \${space.subsection};">
        Drag the bottom-right corner to resize and watch both steps.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Fixed + shrink -->
      <h2 style="\${t.h2}">Fixed header and shrink on scroll</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        <code style="\${t.monoSm}">fixed</code> pins the header to the top of the viewport.
        <code style="\${t.monoSm}">shrink-on-scroll</code> (on by default) then reduces its height
        once the window has scrolled past <code style="\${t.monoSm}">scroll-threshold</code> pixels
        (default <code style="\${t.monoSm}">50</code>).
      </p>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Both conditions are required. On a static header the shrink is skipped entirely: the bar
        scrolls away regardless, and losing height mid-scroll shortens the document underneath the
        reader.
      </p>
      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX};">
        This one cannot be shown in a panel on this page — it responds to window scroll, not to a
        scrolling region. Open <strong>Full Preview</strong>, switch
        <code style="\${t.monoSm}">Fixed</code> on, and scroll the page.
      </p>

    </div>
  \`
}`,...z.parameters?.docs?.source}}},B=[`Overview`,`PlaygroundStory`,`FullPreview`,`LayoutBehavior`]}));V();export{R as FullPreview,z as LayoutBehavior,I as Overview,L as PlaygroundStory,B as __namedExportsOrder,M as default,V as n,C as t};