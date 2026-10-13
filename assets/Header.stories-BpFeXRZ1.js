import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-CBo78ikN.js";import{n as a,t as o}from"./iframe--PTQF4Zo.js";import{a as s,o as c,r as l,t as u}from"./a11y-outcome-Bu1rkJr_.js";import{t as d}from"./mms-card.component-8yI6y1xe.js";import{t as f}from"./mms-header.component-BbC5HsTC.js";var p=t({FullPreview:()=>j,LayoutBehavior:()=>M,Overview:()=>k,PlaygroundStory:()=>A,__namedExportsOrder:()=>N,default:()=>S});function m(e){let t=e??`768`;return t===`fill`?`100%`:`${t}px`}function h(e=!1){return r`
    <span
      slot=${e?`logo-compact`:`logo`}
      style="display: inline-flex; align-items: center; justify-content: center; width: ${e?`32px`:`112px`}; height: 32px; border: 1px dashed rgba(128,128,128,0.5); border-radius: 4px; font-size: 0.6875rem; opacity: 0.6;"
      role="img"
      aria-label="Logo placeholder"
    >
      ${e?`â—»`:`logo`}
    </span>
  `}function g(e){return e.split(`,`).map(e=>e.trim()).filter(e=>e.length>0)}function _(e){return g(e).map(e=>{let[t,n]=e.split(`:`).map(e=>e.trim());return{label:t,icon:n||void 0}})}function v(e=E){return r`
    ${g(e).map(e=>r`<mms-link slot="nav" href="#" label=${e} underline="none"></mms-link>`)}
  `}function y(e=D,t=O){return r`
    ${_(e).map(({label:e,icon:t})=>r`
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
  `}function b(){return r`${v(`Benefits, Providers, Claims`)}${y(``)}`}function x(e=`content`,t=`main-content`){return r`
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
  `}var S,C,w,T,E,D,O,k,A,j,M,N,P=e((()=>{i(),f(),o(),a(),d(),s(),u(),S={title:`Navigational/Header`,tags:[`!autodocs`]},C={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},w=`680px`,T=`960px`,E=`Benefits, Providers, Pharmacy, Claims, Resources, Contact`,D=`Search:magnifying-glass, Alerts:bell`,O=`Account`,k={name:`Overview`,render:()=>r`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${T}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${C.h1}">Header</h1>
      <p style="${C.body} opacity: 0.85; max-width: ${w}; margin-bottom: 2rem;">
        Site/application header with logo, primary navigation, and quick actions in a single
        structural shell. Navigation and action content are consumer-supplied via the
        <code style="${C.monoSm}">nav</code>/<code style="${C.monoSm}">actions</code> slots — compose
        with <code style="${C.monoSm}">mms-link</code>, <code style="${C.monoSm}">mms-button</code>, and
        <code style="${C.monoSm}">mms-icon</code> rather than a bespoke menu-item primitive.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="${C.h2}">Basic usage</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        A logo and primary navigation are enough to start. The site name, the divider beside it,
        quick actions and the account control are each optional — add them as the application
        needs them. Below <code style="${C.monoSm}">768px</code>, the
        <code style="${C.monoSm}">logo-compact</code> slot is shown instead of
        <code style="${C.monoSm}">logo</code>.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <mms-header>
          ${b()}
        </mms-header>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Slots -->
      <h2 style="${C.h2}">Slots</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        All header content is consumer-supplied through slots. There is no bespoke menu-item
        primitive to learn — compose the same components used everywhere else in the system. Every
        slot is independent and every slot may be left empty.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; ${C.caption}">
          <thead>
            <tr style="background: rgba(128,128,128,0.06); text-align: left;">
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Slot</th>
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Typical content</th>
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Behaviour</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${C.monoSm}">logo</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                <code style="${C.monoSm}">img</code>, inline SVG, or any markup
              </td>
              <td style="padding: 0.625rem 0.875rem;">
                Shown at 768px and above. Falls back to the theme's built-in lockup when empty.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;">
                <code style="${C.monoSm}">logo-compact</code>
              </td>
              <td style="padding: 0.625rem 0.875rem;">A narrower mark</td>
              <td style="padding: 0.625rem 0.875rem;">
                Swapped in below 768px. Falls back to <code style="${C.monoSm}">logo</code> when
                empty.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${C.monoSm}">nav</code></td>
              <td style="padding: 0.625rem 0.875rem;"><code style="${C.monoSm}">mms-link</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                Moves into the drawer once the bar runs out of room.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${C.monoSm}">actions</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                <code style="${C.monoSm}">mms-button</code>
              </td>
              <td style="padding: 0.625rem 0.875rem;">
                Moves into the drawer in the same step as nav. Separated from nav by a divider
                while inline.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="${C.monoSm}">account</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                <code style="${C.monoSm}">mms-button</code>
              </td>
              <td style="padding: 0.625rem 0.875rem;">
                Renders last, after actions. Optional — omit entirely for apps with no auth. Moves
                into the drawer with the actions, as its own group.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre style="${C.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;"><code>&lt;mms-header site-name="Member Portal" show-site-divider&gt;
  &lt;img slot="logo" src="/logo.svg" alt="Acme Health" /&gt;
  &lt;img slot="logo-compact" src="/logo-mark.svg" alt="Acme Health" /&gt;

  &lt;mms-link slot="nav" href="/benefits" label="Benefits"&gt;&lt;/mms-link&gt;
  &lt;mms-link slot="nav" href="/claims" label="Claims"&gt;&lt;/mms-link&gt;

  &lt;mms-button slot="actions" variant="ghost" left-icon="magnifying-glass" label="Search"&gt;&lt;/mms-button&gt;

  &lt;!-- omit this slot entirely for apps with no auth --&gt;
  &lt;mms-button slot="account" variant="ghost" left-icon="user-circle" label="Account"&gt;&lt;/mms-button&gt;
&lt;/mms-header&gt;</code></pre>

      <h3 style="${C.h3}">Account bound to auth state</h3>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1rem;">
        The most common use of the <code style="${C.monoSm}">account</code> slot is a control whose
        label follows authentication state — the signed-in user's name, or a sign-in prompt before.
        Swap the slotted element; the header needs no prop and no notification. Because it measures
        its content live, a longer name simply moves the point at which the bar collapses.
      </p>

      <pre style="${C.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>&lt;!-- signed out --&gt;
&lt;mms-button slot="account" variant="ghost" left-icon="sign-in" label="Sign in"&gt;&lt;/mms-button&gt;

&lt;!-- signed in --&gt;
&lt;mms-button slot="account" variant="ghost" left-icon="user-circle" label="John Doe"&gt;&lt;/mms-button&gt;</code></pre>

      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 2rem;">
        The slot is unopinionated about what goes in it. A custom account control — an avatar
        lockup, a menu trigger, anything the app needs — receives the same target size and the same
        drawer row treatment as a built-in button, so composing your own costs nothing in
        accessibility or layout.
      </p>

      <h3 style="${C.h3}">Linking the lockup home</h3>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1rem;">
        Set <code style="${C.monoSm}">home-href</code> and the logo and site name become a single
        link to your homepage — the behaviour users expect from a header. It is deliberately
        opt-in: a link announces its destination to assistive technology, and the platform cannot
        know your home URL. A guess would be wrong for an app mounted under a sub-path, for a
        Salesforce or ServiceNow embed, or for a locale-rooted site — and navigating someone out of
        the application is worse than a logo that does not navigate at all.
      </p>

      <pre style="${C.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>&lt;mms-header home-href="/" site-name="Member Portal" show-site-divider&gt;
  &lt;!-- on the homepage itself, mark it current --&gt;
&lt;mms-header home-href="/" home-current site-name="Member Portal"&gt;</code></pre>

      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 2rem;">
        The link is named explicitly — the site name followed by
        <code style="${C.monoSm}">home-label</code> (default <code style="${C.monoSm}">Home</code>),
        or the label alone when there is no site name. It wraps an image whose alt text you control,
        so deriving the name from its contents would make it depend on your markup.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Custom logo via slot -->
      <h2 style="${C.h2}">Custom logo</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        The active theme supplies a built-in lockup, but it is only slot <em>fallback</em> —
        anything placed in the <code style="${C.monoSm}">logo</code> and
        <code style="${C.monoSm}">logo-compact</code> slots overrides it. Supply your own mark when
        the engagement's theme is not one the package ships a logo for.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <mms-header site-name="Member Portal" show-site-divider>
          ${h()}
          ${h(!0)}
          ${b()}
        </mms-header>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Logo size -->
      <h2 style="${C.h2}">Adjusting logo size</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1rem;">
        The built-in logo's height is not a named size a consumer picks — each theme ships its own
        pixel-tuned default. To render it larger or smaller, override the height directly:
      </p>
      <pre style="${C.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>mms-header { --mms-header-logo-height: 56px; }</code></pre>
      <p style="${C.caption} opacity: 0.7; max-width: ${w}; margin-bottom: 2rem;">
        <code style="${C.monoSm}">mms-footer</code> has the matching
        <code style="${C.monoSm}">--mms-footer-logo-height</code>.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accent line -->
      <h2 style="${C.h2}">Accent line</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        <code style="${C.monoSm}">accent-line</code> sets the thin rule along the header's bottom
        edge. It is purely decorative — it carries no status or meaning, so any palette tier is
        permitted.
      </p>

      <h3 style="${C.h3}">Line options</h3>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        <code style="${C.monoSm}">brand</code> (default) draws the rule in a scheme colour.
        <code style="${C.monoSm}">light</code> draws it in the neutral surface tone, for a header
        sitting on a dark or saturated backdrop. <code style="${C.monoSm}">none</code> removes the
        rule and the bottom border with it, leaving no edge at all.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem;">
        ${[`brand`,`light`,`none`].map(e=>r`
            <div>
              <p style="${C.caption} margin-bottom: 0.5rem;">
                <strong>accent-line="${e}"</strong>${e===`brand`?` — default`:``}
              </p>
              <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden;">
                <mms-header accent-line=${e}>${b()}</mms-header>
              </div>
            </div>
          `)}
      </div>
      <p style="${C.caption} opacity: 0.7; max-width: ${w}; margin-bottom: 2rem;">
        On a light theme <code style="${C.monoSm}">light</code> is near-white against a white bar,
        so what reads as a line above is the 1px bottom border rather than the accent itself.
        Judge it on a dark theme or a branded surface.
      </p>

      <h3 style="${C.h3}">Line color</h3>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        <code style="${C.monoSm}">accent-line-color</code> chooses which scheme colour the rule
        uses — <code style="${C.monoSm}">primary</code>,
        <code style="${C.monoSm}">secondary</code>, <code style="${C.monoSm}">accent</code> or
        <code style="${C.monoSm}">onyx</code>. It applies only when
        <code style="${C.monoSm}">accent-line</code> is <code style="${C.monoSm}">brand</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        ${[`primary`,`secondary`,`accent`,`onyx`].map(e=>r`
            <div>
              <p style="${C.caption} margin-bottom: 0.5rem;"><strong>brand / ${e}</strong></p>
              <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden;">
                <mms-header accent-line="brand" accent-line-color=${e}>
                  ${b()}
                </mms-header>
              </div>
            </div>
          `)}
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${C.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${C.bodySm} margin: 0;">
          <strong>Skip link.</strong> A visually-hidden-until-focused "Skip to main content" link
          is always the first focusable element, jumping to <code style="${C.monoSm}">skip-link-target</code>
          (default <code style="${C.monoSm}">#main-content</code>) — configurable via
          <code style="${C.monoSm}">skip-link-target</code>/<code style="${C.monoSm}">skip-link-text</code>.
        </p>
      </div>

      <h3 style="${C.h3}">WCAG 2.2 AA compliance</h3>
      ${l(c.header.rows)}

      <h3 style="${C.h3}">Screen reader behavior</h3>
      <ul style="${C.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> The header is announced as "banner" via <code style="${C.monoSm}">role="banner"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Hamburger toggle:</strong> Announces "Open menu" / "Close menu" and expanded state via <code style="${C.monoSm}">aria-expanded</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Collapsed panel:</strong> Announced as a dialog ("Navigation menu") via <code style="${C.monoSm}">role="dialog"</code> and <code style="${C.monoSm}">aria-modal="true"</code> only while collapsed and open</li>
        <li><strong>Skip link:</strong> Announced first on Tab from page load, before any header content</li>
      </ul>

      <h3 style="${C.h3}">Keyboard navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus through skip link, logo, nav, actions, and hamburger toggle in order</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused link, button, or hamburger toggle</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close the collapsed nav/actions panel, if open</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">While the panel is open, cycles focus backward within it (focus is trapped)</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},A={name:`Playground`,tags:[`!dev`],args:{viewport:`768`,container:`content`,siteName:`Member Portal`,showSiteDivider:!0,homeHref:`#`,navItems:E,quickActions:D,accountLabel:O,accentLine:`brand`,accentLineColor:`primary`,fixed:!1,shrinkOnScroll:!0,scrollThreshold:50,showHamburger:!0,skipLinkTarget:`main-content`,skipLinkText:`Skip to main content`,theme:`maximus`,density:`default`},decorators:[(e,t)=>r`
        <div
          style="background: var(--color-surface-sunken); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;"
        >
          <!-- contain: paint makes this the containing block for the drawer's
               position: fixed overlay, so it covers the page sample rather than
               the whole canvas — without the compositing layer a transform would
               promote, which makes the drawer's slide-in animation jitter. -->
          <div
            style="display: flex; flex-direction: column; contain: paint; width: ${m(t.args.viewport)}; margin-inline: auto;"
          >
            ${e()}
          </div>
        </div>
      `],argTypes:{viewport:{name:`Viewport (simulated)`,control:`select`,options:[`400`,`768`,`1240`,`1440`,`fill`],description:"Not a component prop — a story control that constrains the preview width so responsive behavior can be seen without resizing the browser. The header measures its own container, so the simulation is faithful rather than a mock. `fill` hands the width back to the canvas. Widths above the canvas scroll within it.",table:{category:`Demo Controls`}},siteName:{name:`Site name`,control:`text`,description:`Site/product name shown next to the logo`,table:{category:`Content`}},showSiteDivider:{name:`Show site divider`,control:`boolean`,description:`Show a vertical divider between the logo and site name`,table:{category:`Content`}},homeHref:{name:`Home link`,control:`text`,description:`Destination for the logo and site name, which link home as a single target. Unset by default — the platform cannot know your home URL, and a link announces its destination to assistive tech, so it will not invent one. Clear the field to render the lockup as plain content with no link semantics.`,table:{category:`Content`}},navItems:{name:`Navigation items`,control:`text`,description:'Comma-separated nav labels, slotted as `mms-link slot="nav"`. Add or remove entries to exercise the collapse ladder: nav moves into the drawer first, then actions, then the site name stacks under the logo.',table:{category:`Content`}},quickActions:{name:`Quick actions`,control:`text`,description:'Comma-separated quick actions, slotted as `mms-button slot="actions"`. Each entry is `Label:icon`; the icon is optional, so `Sign in` is as valid as `Search:magnifying-glass`. The account item sits in its own `account` slot and is not part of this list.',table:{category:`Content`}},accountLabel:{name:`Account`,control:`text`,description:"Label for the control in the `account` slot. Clear the field to omit the slot entirely — the header is designed to work without it, for apps with no auth. Bind it to app state in production: a username once signed in, `Sign in` before.",table:{category:`Content`}},container:{name:`Container`,control:`select`,options:[`content`,`full`],description:"Caps the header row, or does not. `content` (default) limits it to `--layout-content-max-width` (1280px) and centres it, so the logo lands on the same leading edge as page content — the header reads as part of the page. `full` removes the cap so the row spans the full bar and the logo sits on the header’s own inset, giving an edge-to-edge bar wider than the content beneath it. Inline padding is identical either way (16px, 32px from 768px up); only the cap differs, so the two are indistinguishable below 1280px — use the 1440 viewport to see it. To align with a page container that is not 1280px, set `--mms-header-content-max-width`.",table:{category:`Visual`}},accentLine:{name:`Accent line`,control:`select`,options:[`brand`,`light`,`none`],description:"Thin rule along the header's bottom edge. `none` removes it entirely.",table:{category:`Visual`}},accentLineColor:{name:`Accent line color`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:"Scheme colour used when `accent-line` is `brand`. Any tier is allowed — the line is decorative, so it carries no semantic constraint.",table:{category:`Visual`}},fixed:{name:`Fixed`,control:`boolean`,description:`Pin the header to the top of the viewport`,table:{category:`Behavior`}},shrinkOnScroll:{name:`Shrink on scroll`,control:`boolean`,description:`Reduce header height once scrolled past scroll threshold`,table:{category:`Behavior`}},scrollThreshold:{name:`Scroll threshold`,control:!1,description:"Scroll distance in px before the header shrinks. Applies only when both `fixed` and `shrink-on-scroll` are set. Defaults to 50 — configure only if that trigger point conflicts with your page.",table:{category:`Behavior`}},showHamburger:{name:`Show hamburger`,control:!1,description:`Keeps the hamburger toggle in the DOM while the header is expanded. Auto-collapse reveals the toggle on its own whenever nav or actions move into the drawer, so this needs no configuration in normal use.`,table:{category:`Behavior`}},skipLinkTarget:{name:`Skip link target`,control:`text`,description:`id of the main content landmark the skip link jumps to`,table:{category:`Accessibility`}},skipLinkText:{name:`Skip link text`,control:`text`,description:`Skip link label`,table:{category:`Accessibility`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme (affects accent stroke color)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{layout:`fullscreen`,docs:{source:{transform:(e,t)=>{let n=t.args,r=[];n.container!==`content`&&r.push(`container="${n.container}"`),n.siteName&&r.push(`site-name="${n.siteName}"`),n.showSiteDivider&&r.push(`show-site-divider`),n.homeHref&&r.push(`home-href="${n.homeHref}"`),n.accentLine!==`brand`&&r.push(`accent-line="${n.accentLine}"`),n.accentLineColor!==`primary`&&r.push(`accent-line-color="${n.accentLineColor}"`),n.fixed&&r.push(`fixed`),n.shrinkOnScroll||r.push(`shrink-on-scroll="false"`),n.scrollThreshold!==50&&r.push(`scroll-threshold="${n.scrollThreshold}"`),n.showHamburger||r.push(`show-hamburger="false"`),n.density===`compact`&&r.push(`data-density="compact"`);let i=g(n.navItems).map(e=>`  <mms-link slot="nav" href="#" label="${e}" underline="none"></mms-link>`),a=_(n.quickActions).map(({label:e,icon:t})=>`  <mms-button slot="actions" variant="ghost" color-scheme="onyx"${t?` left-icon="${t}"`:``} label="${e}"></mms-button>`),o=n.accountLabel?[`  <mms-button slot="account" variant="ghost" color-scheme="onyx" left-icon="user-circle" label="${n.accountLabel}"></mms-button>`]:[];return`<mms-header\n  ${r.join(`
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
      ${v(e.navItems)}
      ${y(e.quickActions,e.accountLabel)}
    </mms-header>
    ${x(e.container,e.skipLinkTarget)}
  `},j={...A,name:`Full Preview`,tags:[],args:{...A.args,viewport:`fill`},parameters:{...A.parameters,layout:`fullscreen`},decorators:[(e,t)=>r`
        <div style="min-height: 100vh; background: var(--color-surface-sunken); overflow-x: auto;">
          <div
            style="display: flex; flex-direction: column; min-height: 100vh; contain: paint; width: ${m(t.args.viewport)}; margin-inline: auto;"
          >
            ${e()}
          </div>
        </div>
      `]},M={name:`Layout & Behavior`,render:()=>r`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${T}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${C.h1}">Layout &amp; Behavior</h1>
      <p style="${C.body} opacity: 0.85; max-width: ${w}; margin-bottom: 2rem;">
        The header adapts on two independent axes. <strong>Alignment</strong> and the
        <strong>inline inset</strong> follow the shared layout system, so the header lines up with
        page content by default. <strong>Degradation</strong> is measured from the header's own
        content rather than read from a breakpoint.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Container alignment -->
      <h2 style="${C.h2}">Container alignment</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1rem;">
        The header is full-bleed; its inner row is capped at
        <code style="${C.monoSm}">--layout-content-max-width</code> and centered — the same shape a
        page content container uses. Because both read the same tokens, the logo's leading edge
        lines up with body content at every width. Margins are derived from centering, never
        declared.
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; ${C.bodySm}">
        <thead>
          <tr style="text-align: left; border-bottom: 1px solid rgba(128,128,128,0.25);">
            <th style="padding: 0.5rem 0.75rem 0.5rem 0;">Setting</th>
            <th style="padding: 0.5rem 0.75rem;">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem 0.5rem 0;">
              <code style="${C.monoSm}">container="content"</code> <em>(default)</em>
            </td>
            <td style="padding: 0.5rem 0.75rem;">Inner row aligns to the page content container.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem 0.5rem 0;">
              <code style="${C.monoSm}">container="full"</code>
            </td>
            <td style="padding: 0.5rem 0.75rem;">
              Cap released — edge-to-edge, held in only by the inline inset.
            </td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- The padding step -->
      <h2 style="${C.h2}">The padding step</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        The layout system defines exactly one breakpoint —
        <code style="${C.monoSm}">--layout-padding-step</code> at 768px — where the inline inset
        goes from 16px to 32px. The logo slot swaps at the same width. Everything else about the
        header is content-driven.
      </p>
      <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
        <div>
          <p style="${C.caption} margin: 0 0 0.5rem;">
            <strong>Below 768px</strong> · inset 16px ·
            <code style="${C.monoSm}">logo-compact</code> slot
          </p>
          <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; width: 480px; max-width: 100%;">
            <mms-header site-name="Member Portal" show-site-divider>
              ${v()}${y()}
            </mms-header>
          </div>
        </div>
        <div>
          <p style="${C.caption} margin: 0 0 0.5rem;">
            <strong>768px and above</strong> · inset 32px ·
            <code style="${C.monoSm}">logo</code> slot · capped at 1280px, then centered
          </p>
          <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden;">
            <mms-header site-name="Member Portal" show-site-divider>
              ${v()}${y()}
            </mms-header>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Adjusting the container -->
      <h2 style="${C.h2}">Adjusting the container</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1rem;">
        Two custom properties tune the container without declaring a margin. They inherit, so
        setting them on a page wrapper realigns the header with everything else.
      </p>
      <pre style="${C.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>/* Wider header than body */
mms-header { --mms-header-content-max-width: 1440px; }

/* Roomier inset, keeping a step of your own */
mms-header { --mms-header-inline-padding: 24px; }
@media (min-width: 1024px) {
  mms-header { --mms-header-inline-padding: 64px; }
}</code></pre>
      <p style="${C.caption} opacity: 0.7; max-width: ${w}; margin-bottom: 2rem;">
        Setting <code style="${C.monoSm}">--mms-header-inline-padding</code> once flattens the
        768px step by design — declare it inside your own media query to keep one.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Degradation -->
      <h2 style="${C.h2}">Responsive degradation</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1rem;">
        The header measures its own content live via
        <code style="${C.monoSm}">ResizeObserver</code>, independent of any fixed breakpoint. A
        breakpoint cannot do this: four short nav items fit at 700px where seven long ones do not
        fit at 1100px.
      </p>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1rem;">
        It degrades in two steps as the container narrows:
      </p>
      <ol style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin: 0 0 1rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          Nav, quick actions and the account control move into
          <code style="${C.monoSm}">mms-drawer</code> together, and the hamburger toggle appears.
        </li>
        <li style="margin-bottom: 0.5rem;">
          If the logo and site name still do not fit, the site name stacks beneath the logo.
        </li>
      </ol>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        The site name never hides and the logo never degrades — identity stays visible at every
        width. Restoring on the way back up uses a wider threshold than collapsing, so a header
        sitting near the boundary does not oscillate.
      </p>

      <div style="resize: horizontal; overflow: auto; min-width: 240px; max-width: 100%; width: 520px; border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; margin-bottom: 0.75rem;">
        <mms-header site-name="Medicaid Enrollment Portal" show-site-divider>
          ${v()}${y()}
        </mms-header>
      </div>
      <p style="${C.caption} opacity: 0.65; margin-bottom: 2rem;">
        Drag the bottom-right corner to resize and watch both steps.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Fixed + shrink -->
      <h2 style="${C.h2}">Fixed header and shrink on scroll</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1rem;">
        <code style="${C.monoSm}">fixed</code> pins the header to the top of the viewport.
        <code style="${C.monoSm}">shrink-on-scroll</code> (on by default) then reduces its height
        once the window has scrolled past <code style="${C.monoSm}">scroll-threshold</code> pixels
        (default <code style="${C.monoSm}">50</code>).
      </p>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1rem;">
        Both conditions are required. On a static header the shrink is skipped entirely: the bar
        scrolls away regardless, and losing height mid-scroll shortens the document underneath the
        reader.
      </p>
      <p style="${C.caption} opacity: 0.7; max-width: ${w}; margin-bottom: 2rem;">
        This one cannot be shown in a panel on this page — it responds to window scroll, not to a
        scrolling region. Open <strong>Full Preview</strong>, switch
        <code style="${C.monoSm}">Fixed</code> on, and scroll the page.
      </p>

    </div>
  `},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Header</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Site/application header with logo, primary navigation, and quick actions in a single
        structural shell. Navigation and action content are consumer-supplied via the
        <code style="\${t.monoSm}">nav</code>/<code style="\${t.monoSm}">actions</code> slots — compose
        with <code style="\${t.monoSm}">mms-link</code>, <code style="\${t.monoSm}">mms-button</code>, and
        <code style="\${t.monoSm}">mms-icon</code> rather than a bespoke menu-item primitive.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        A logo and primary navigation are enough to start. The site name, the divider beside it,
        quick actions and the account control are each optional — add them as the application
        needs them. Below <code style="\${t.monoSm}">768px</code>, the
        <code style="\${t.monoSm}">logo-compact</code> slot is shown instead of
        <code style="\${t.monoSm}">logo</code>.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <mms-header>
          \${overviewContent()}
        </mms-header>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Slots -->
      <h2 style="\${t.h2}">Slots</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        All header content is consumer-supplied through slots. There is no bespoke menu-item
        primitive to learn — compose the same components used everywhere else in the system. Every
        slot is independent and every slot may be left empty.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; \${t.caption}">
          <thead>
            <tr style="background: rgba(128,128,128,0.06); text-align: left;">
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Slot</th>
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Typical content</th>
              <th style="padding: 0.625rem 0.875rem; font-weight: 700;">Behaviour</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">logo</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                <code style="\${t.monoSm}">img</code>, inline SVG, or any markup
              </td>
              <td style="padding: 0.625rem 0.875rem;">
                Shown at 768px and above. Falls back to the theme's built-in lockup when empty.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;">
                <code style="\${t.monoSm}">logo-compact</code>
              </td>
              <td style="padding: 0.625rem 0.875rem;">A narrower mark</td>
              <td style="padding: 0.625rem 0.875rem;">
                Swapped in below 768px. Falls back to <code style="\${t.monoSm}">logo</code> when
                empty.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">nav</code></td>
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">mms-link</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                Moves into the drawer once the bar runs out of room.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">actions</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                <code style="\${t.monoSm}">mms-button</code>
              </td>
              <td style="padding: 0.625rem 0.875rem;">
                Moves into the drawer in the same step as nav. Separated from nav by a divider
                while inline.
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(128,128,128,0.15);">
              <td style="padding: 0.625rem 0.875rem;"><code style="\${t.monoSm}">account</code></td>
              <td style="padding: 0.625rem 0.875rem;">
                <code style="\${t.monoSm}">mms-button</code>
              </td>
              <td style="padding: 0.625rem 0.875rem;">
                Renders last, after actions. Optional — omit entirely for apps with no auth. Moves
                into the drawer with the actions, as its own group.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 2rem;"><code>&lt;mms-header site-name="Member Portal" show-site-divider&gt;
  &lt;img slot="logo" src="/logo.svg" alt="Acme Health" /&gt;
  &lt;img slot="logo-compact" src="/logo-mark.svg" alt="Acme Health" /&gt;

  &lt;mms-link slot="nav" href="/benefits" label="Benefits"&gt;&lt;/mms-link&gt;
  &lt;mms-link slot="nav" href="/claims" label="Claims"&gt;&lt;/mms-link&gt;

  &lt;mms-button slot="actions" variant="ghost" left-icon="magnifying-glass" label="Search"&gt;&lt;/mms-button&gt;

  &lt;!-- omit this slot entirely for apps with no auth --&gt;
  &lt;mms-button slot="account" variant="ghost" left-icon="user-circle" label="Account"&gt;&lt;/mms-button&gt;
&lt;/mms-header&gt;</code></pre>

      <h3 style="\${t.h3}">Account bound to auth state</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        The most common use of the <code style="\${t.monoSm}">account</code> slot is a control whose
        label follows authentication state — the signed-in user's name, or a sign-in prompt before.
        Swap the slotted element; the header needs no prop and no notification. Because it measures
        its content live, a longer name simply moves the point at which the bar collapses.
      </p>

      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>&lt;!-- signed out --&gt;
&lt;mms-button slot="account" variant="ghost" left-icon="sign-in" label="Sign in"&gt;&lt;/mms-button&gt;

&lt;!-- signed in --&gt;
&lt;mms-button slot="account" variant="ghost" left-icon="user-circle" label="John Doe"&gt;&lt;/mms-button&gt;</code></pre>

      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        The slot is unopinionated about what goes in it. A custom account control — an avatar
        lockup, a menu trigger, anything the app needs — receives the same target size and the same
        drawer row treatment as a built-in button, so composing your own costs nothing in
        accessibility or layout.
      </p>

      <h3 style="\${t.h3}">Linking the lockup home</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Set <code style="\${t.monoSm}">home-href</code> and the logo and site name become a single
        link to your homepage — the behaviour users expect from a header. It is deliberately
        opt-in: a link announces its destination to assistive technology, and the platform cannot
        know your home URL. A guess would be wrong for an app mounted under a sub-path, for a
        Salesforce or ServiceNow embed, or for a locale-rooted site — and navigating someone out of
        the application is worse than a logo that does not navigate at all.
      </p>

      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.5rem;"><code>&lt;mms-header home-href="/" site-name="Member Portal" show-site-divider&gt;
  &lt;!-- on the homepage itself, mark it current --&gt;
&lt;mms-header home-href="/" home-current site-name="Member Portal"&gt;</code></pre>

      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        The link is named explicitly — the site name followed by
        <code style="\${t.monoSm}">home-label</code> (default <code style="\${t.monoSm}">Home</code>),
        or the label alone when there is no site name. It wraps an image whose alt text you control,
        so deriving the name from its contents would make it depend on your markup.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Custom logo via slot -->
      <h2 style="\${t.h2}">Custom logo</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The active theme supplies a built-in lockup, but it is only slot <em>fallback</em> —
        anything placed in the <code style="\${t.monoSm}">logo</code> and
        <code style="\${t.monoSm}">logo-compact</code> slots overrides it. Supply your own mark when
        the engagement's theme is not one the package ships a logo for.
      </p>

      <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
        <mms-header site-name="Member Portal" show-site-divider>
          \${sampleLogo()}
          \${sampleLogo(true)}
          \${overviewContent()}
        </mms-header>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Logo size -->
      <h2 style="\${t.h2}">Adjusting logo size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        The built-in logo's height is not a named size a consumer picks — each theme ships its own
        pixel-tuned default. To render it larger or smaller, override the height directly:
      </p>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>mms-header { --mms-header-logo-height: 56px; }</code></pre>
      <p style="\${t.caption} opacity: 0.7; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        <code style="\${t.monoSm}">mms-footer</code> has the matching
        <code style="\${t.monoSm}">--mms-footer-logo-height</code>.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accent line -->
      <h2 style="\${t.h2}">Accent line</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">accent-line</code> sets the thin rule along the header's bottom
        edge. It is purely decorative — it carries no status or meaning, so any palette tier is
        permitted.
      </p>

      <h3 style="\${t.h3}">Line options</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">brand</code> (default) draws the rule in a scheme colour.
        <code style="\${t.monoSm}">light</code> draws it in the neutral surface tone, for a header
        sitting on a dark or saturated backdrop. <code style="\${t.monoSm}">none</code> removes the
        rule and the bottom border with it, leaving no edge at all.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem;">
        \${(['brand', 'light', 'none'] as const).map(mode => html\`
            <div>
              <p style="\${t.caption} margin-bottom: 0.5rem;">
                <strong>accent-line="\${mode}"</strong>\${mode === 'brand' ? ' — default' : ''}
              </p>
              <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden;">
                <mms-header accent-line=\${mode}>\${overviewContent()}</mms-header>
              </div>
            </div>
          \`)}
      </div>
      <p style="\${t.caption} opacity: 0.7; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        On a light theme <code style="\${t.monoSm}">light</code> is near-white against a white bar,
        so what reads as a line above is the 1px bottom border rather than the accent itself.
        Judge it on a dark theme or a branded surface.
      </p>

      <h3 style="\${t.h3}">Line color</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">accent-line-color</code> chooses which scheme colour the rule
        uses — <code style="\${t.monoSm}">primary</code>,
        <code style="\${t.monoSm}">secondary</code>, <code style="\${t.monoSm}">accent</code> or
        <code style="\${t.monoSm}">onyx</code>. It applies only when
        <code style="\${t.monoSm}">accent-line</code> is <code style="\${t.monoSm}">brand</code>.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        \${(['primary', 'secondary', 'accent', 'onyx'] as const).map(accent => html\`
            <div>
              <p style="\${t.caption} margin-bottom: 0.5rem;"><strong>brand / \${accent}</strong></p>
              <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden;">
                <mms-header accent-line="brand" accent-line-color=\${accent}>
                  \${overviewContent()}
                </mms-header>
              </div>
            </div>
          \`)}
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Skip link.</strong> A visually-hidden-until-focused "Skip to main content" link
          is always the first focusable element, jumping to <code style="\${t.monoSm}">skip-link-target</code>
          (default <code style="\${t.monoSm}">#main-content</code>) — configurable via
          <code style="\${t.monoSm}">skip-link-target</code>/<code style="\${t.monoSm}">skip-link-text</code>.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['header'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Landmark:</strong> The header is announced as "banner" via <code style="\${t.monoSm}">role="banner"</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Hamburger toggle:</strong> Announces "Open menu" / "Close menu" and expanded state via <code style="\${t.monoSm}">aria-expanded</code></li>
        <li style="margin-bottom: 0.5rem;"><strong>Collapsed panel:</strong> Announced as a dialog ("Navigation menu") via <code style="\${t.monoSm}">role="dialog"</code> and <code style="\${t.monoSm}">aria-modal="true"</code> only while collapsed and open</li>
        <li><strong>Skip link:</strong> Announced first on Tab from page load, before any header content</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
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
            <td style="padding: 0.5rem 0.75rem;">Move focus through skip link, logo, nav, actions, and hamburger toggle in order</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Enter</kbd> / <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Space</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Activate the focused link, button, or hamburger toggle</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.1);">
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Escape</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">Close the collapsed nav/actions panel, if open</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem;"><kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Shift</kbd> + <kbd style="padding: 0.125rem 0.375rem; background: rgba(128,128,128,0.1); border-radius: 3px; font-size: 0.75rem;">Tab</kbd></td>
            <td style="padding: 0.5rem 0.75rem;">While the panel is open, cycles focus backward within it (focus is trapped)</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
      description: 'Caps the header row, or does not. \`content\` (default) limits it to \`--layout-content-max-width\` (1280px) and centres it, so the logo lands on the same leading edge as page content — the header reads as part of the page. \`full\` removes the cap so the row spans the full bar and the logo sits on the header’s own inset, giving an edge-to-edge bar wider than the content beneath it. Inline padding is identical either way (16px, 32px from 768px up); only the cap differs, so the two are indistinguishable below 1280px — use the 1440 viewport to see it. To align with a page container that is not 1280px, set \`--mms-header-content-max-width\`.',
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
      description: 'Scheme colour used when \`accent-line\` is \`brand\`. Any tier is allowed — the line is decorative, so it carries no semantic constraint.',
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
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Layout & Behavior',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Layout &amp; Behavior</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        The header adapts on two independent axes. <strong>Alignment</strong> and the
        <strong>inline inset</strong> follow the shared layout system, so the header lines up with
        page content by default. <strong>Degradation</strong> is measured from the header's own
        content rather than read from a breakpoint.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Container alignment -->
      <h2 style="\${t.h2}">Container alignment</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        The header is full-bleed; its inner row is capped at
        <code style="\${t.monoSm}">--layout-content-max-width</code> and centered — the same shape a
        page content container uses. Because both read the same tokens, the logo's leading edge
        lines up with body content at every width. Margins are derived from centering, never
        declared.
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; \${t.bodySm}">
        <thead>
          <tr style="text-align: left; border-bottom: 1px solid rgba(128,128,128,0.25);">
            <th style="padding: 0.5rem 0.75rem 0.5rem 0;">Setting</th>
            <th style="padding: 0.5rem 0.75rem;">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem 0.5rem 0;">
              <code style="\${t.monoSm}">container="content"</code> <em>(default)</em>
            </td>
            <td style="padding: 0.5rem 0.75rem;">Inner row aligns to the page content container.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem 0.5rem 0;">
              <code style="\${t.monoSm}">container="full"</code>
            </td>
            <td style="padding: 0.5rem 0.75rem;">
              Cap released — edge-to-edge, held in only by the inline inset.
            </td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- The padding step -->
      <h2 style="\${t.h2}">The padding step</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The layout system defines exactly one breakpoint —
        <code style="\${t.monoSm}">--layout-padding-step</code> at 768px — where the inline inset
        goes from 16px to 32px. The logo slot swaps at the same width. Everything else about the
        header is content-driven.
      </p>
      <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
        <div>
          <p style="\${t.caption} margin: 0 0 0.5rem;">
            <strong>Below 768px</strong> · inset 16px ·
            <code style="\${t.monoSm}">logo-compact</code> slot
          </p>
          <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden; width: 480px; max-width: 100%;">
            <mms-header site-name="Member Portal" show-site-divider>
              \${sampleNav()}\${sampleActions()}
            </mms-header>
          </div>
        </div>
        <div>
          <p style="\${t.caption} margin: 0 0 0.5rem;">
            <strong>768px and above</strong> · inset 32px ·
            <code style="\${t.monoSm}">logo</code> slot · capped at 1280px, then centered
          </p>
          <div style="border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; overflow: hidden;">
            <mms-header site-name="Member Portal" show-site-divider>
              \${sampleNav()}\${sampleActions()}
            </mms-header>
          </div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Adjusting the container -->
      <h2 style="\${t.h2}">Adjusting the container</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Two custom properties tune the container without declaring a margin. They inherit, so
        setting them on a page wrapper realigns the header with everything else.
      </p>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>/* Wider header than body */
mms-header { --mms-header-content-max-width: 1440px; }

/* Roomier inset, keeping a step of your own */
mms-header { --mms-header-inline-padding: 24px; }
@media (min-width: 1024px) {
  mms-header { --mms-header-inline-padding: 64px; }
}</code></pre>
      <p style="\${t.caption} opacity: 0.7; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Setting <code style="\${t.monoSm}">--mms-header-inline-padding</code> once flattens the
        768px step by design — declare it inside your own media query to keep one.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Degradation -->
      <h2 style="\${t.h2}">Responsive degradation</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        The header measures its own content live via
        <code style="\${t.monoSm}">ResizeObserver</code>, independent of any fixed breakpoint. A
        breakpoint cannot do this: four short nav items fit at 700px where seven long ones do not
        fit at 1100px.
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        It degrades in two steps as the container narrows:
      </p>
      <ol style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin: 0 0 1rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          Nav, quick actions and the account control move into
          <code style="\${t.monoSm}">mms-drawer</code> together, and the hamburger toggle appears.
        </li>
        <li style="margin-bottom: 0.5rem;">
          If the logo and site name still do not fit, the site name stacks beneath the logo.
        </li>
      </ol>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The site name never hides and the logo never degrades — identity stays visible at every
        width. Restoring on the way back up uses a wider threshold than collapsing, so a header
        sitting near the boundary does not oscillate.
      </p>

      <div style="resize: horizontal; overflow: auto; min-width: 240px; max-width: 100%; width: 520px; border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; margin-bottom: 0.75rem;">
        <mms-header site-name="Medicaid Enrollment Portal" show-site-divider>
          \${sampleNav()}\${sampleActions()}
        </mms-header>
      </div>
      <p style="\${t.caption} opacity: 0.65; margin-bottom: 2rem;">
        Drag the bottom-right corner to resize and watch both steps.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Fixed + shrink -->
      <h2 style="\${t.h2}">Fixed header and shrink on scroll</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        <code style="\${t.monoSm}">fixed</code> pins the header to the top of the viewport.
        <code style="\${t.monoSm}">shrink-on-scroll</code> (on by default) then reduces its height
        once the window has scrolled past <code style="\${t.monoSm}">scroll-threshold</code> pixels
        (default <code style="\${t.monoSm}">50</code>).
      </p>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Both conditions are required. On a static header the shrink is skipped entirely: the bar
        scrolls away regardless, and losing height mid-scroll shortens the document underneath the
        reader.
      </p>
      <p style="\${t.caption} opacity: 0.7; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        This one cannot be shown in a panel on this page — it responds to window scroll, not to a
        scrolling region. Open <strong>Full Preview</strong>, switch
        <code style="\${t.monoSm}">Fixed</code> on, and scroll the page.
      </p>

    </div>
  \`
}`,...M.parameters?.docs?.source}}},N=[`Overview`,`PlaygroundStory`,`FullPreview`,`LayoutBehavior`]}));P();export{j as FullPreview,M as LayoutBehavior,k as Overview,A as PlaygroundStory,N as __namedExportsOrder,S as default,P as n,p as t};