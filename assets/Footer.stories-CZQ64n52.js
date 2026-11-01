import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{t as a}from"./mms-icon.component-DFVI3nJi.js";import{i as o}from"./iframe-CEHEciqj.js";import{t as s}from"./mms-card.component-Ae9XIj4r.js";import{n as c,r as l}from"./wcag-coverage-DNhlI7v1.js";import{a as u,c as d,d as f,i as p,n as m,o as h,r as g,u as _}from"./doc-styles-DkvR_Qyb.js";import{a as v,n as y}from"./a11y-outcome-Chf8PZL1.js";import{t as b}from"./mms-footer.component-iYe2Q4Am.js";import{t as x}from"./mms-select.component-CO4YBVrq.js";var S=t({Overview:()=>P,PlaygroundStory:()=>F,__namedExportsOrder:()=>I,default:()=>k});function C(e){let t=e??`1240`;return t===`fill`?`100%`:`${t}px`}function w(e){return e.split(`,`).map(e=>e.trim()).filter(e=>e.length>0)}function T(e){return w(e).map(e=>{let t=e.indexOf(`:`);return t===-1?{label:e,href:`#`}:{label:e.slice(0,t).trim(),href:e.slice(t+1).trim()}})}function E(e){return w(e).map(e=>{let[t,n]=e.split(`:`).map(e=>e.trim());return{label:t,icon:n||void 0}})}function D(e=!1){return r`
    <span
      slot=${e?`logo-compact`:`logo`}
      style="display: inline-flex; align-items: center; justify-content: center; width: ${e?`32px`:`112px`}; height: 32px; border: 1px dashed rgba(255,255,255,0.4); border-radius: 4px; font-family: var(--type-body-sm-family); font-size: var(--type-body-sm-size); line-height: var(--type-body-sm-line-height); font-weight: var(--type-body-sm-weight); opacity: 0.7; color: #fff;"
      role="img"
      aria-label="Logo placeholder"
    >
      ${e?`◻`:`logo`}
    </span>
  `}function O(e=A,t=j,i=M,a=N){return r`
    ${T(a).map(({label:e,href:t})=>r`<mms-link slot="contact" href=${t} label=${e} underline="none"></mms-link>`)}
    ${E(t).map(({label:e,icon:t})=>r`
        <a slot="social" href="#" aria-label=${e}
          ><mms-icon name=${t??n} size="lg"></mms-icon
        ></a>
      `)}
    ${i?r`
          <mms-select
            slot="language"
            size="sm"
            placeholder="Language"
            value="en"
            .options=${[{value:`en`,label:i},{value:`es`,label:`Español`}]}
          ></mms-select>
        `:n}
    ${w(e).map(e=>r`<mms-link slot="links" href="#" label=${e} underline="none"></mms-link>`)}
  `}var k,A,j,M,N,P,F,I,L=e((()=>{i(),b(),o(),a(),x(),s(),c(),y(),d(),k={title:`Navigational/Footer`,tags:[`!autodocs`]},A=`Privacy Policy, Terms of Use, Accessibility, Nondiscrimination Notice`,j=`Facebook:facebook-logo, X:x-logo, LinkedIn:linkedin-logo`,M=`English`,N=`1-800-555-1234:tel:+18005551234, support@example.gov:mailto:support@example.gov`,P={name:`Overview`,render:()=>r`
    <div data-theme=${g} data-mode=${h()} style=${m}>

      <h1 style="${f.h1}">Footer</h1>
      <p style="${f.body} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        Global site footer — brand mark, contact/social/language utilities, legal links, and fine
        print in a single structural shell. All content is consumer-supplied via slots; the
        component renders only the wrappers a slot's content actually needs — an empty slot
        contributes nothing, never an empty row.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${_.subsection};">
        <div slot="body-content">
        <p style="${f.bodySm} margin: 0;">
          Layout and responsiveness follow <code style="${f.monoSm}">mms-header</code>'s precedent: one
          responsive step at 768px, driven by the shared layout tokens and the footer's own
          <code style="${f.monoSm}">container-type: inline-size</code> — not Marina's four-tier
          breakpoint scale. See <strong>The padding step</strong> and
          <strong>Responsive degradation</strong> below for the full detail.
        </p>
        </div>
      </mms-card>

      <hr style="${u.divider}" />

      <!-- Basic Usage -->
      <h2 style="${f.h2}">Basic usage</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        Every section is optional. A footer with only a copyright line and legal links is valid;
        so is one with every slot filled. Below 768px, the <code style="${f.monoSm}">logo-compact</code>
        slot is shown instead of <code style="${f.monoSm}">logo</code>, the same swap
        <code style="${f.monoSm}">mms-header</code> makes.
      </p>

      <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: ${_.subsection};">
        <mms-footer copyright-text="© 2026 [Organization Name]." fine-print-text="[Organization Name] is administered in accordance with state and federal regulations.">
          ${O()}
        </mms-footer>
      </div>

      <hr style="${u.divider}" />

      <!-- Slots -->
      <h2 style="${f.h2}">Slots</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.content};">
        Every slot is independent and may be left empty. The utility row (logo through language)
        renders only if at least one of its slots has content; the links row renders only if the
        <code style="${f.monoSm}">links</code> slot has content; the fine-print row renders only if
        <code style="${f.monoSm}">copyright-text</code> is set, or <code style="${f.monoSm}">fine-print-text</code>
        is set, or the <code style="${f.monoSm}">fine-print</code> slot has content. <code style="${f.monoSm}">contact</code>,
        <code style="${f.monoSm}">social</code>, and <code style="${f.monoSm}">links</code> content is configurable
        from the <strong>Playground</strong> story's controls, without editing this page's markup.
      </p>

      <div style="margin-bottom: ${_.content};">
        <table style="${u.table}">
          <thead>
            <tr>
              <th style="${u.th}">Slot</th>
              <th style="${u.th}">Typical content</th>
              <th style="${u.th}">Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="${u.td}"><code style="${f.monoSm}">logo</code></td>
              <td style="${u.td}">Brand mark — image, inline SVG, or text lockup</td>
              <td style="${u.td}">Shown at 768px and above. Falls back to the theme's own mark.</td>
            </tr>
            <tr>
              <td style="${u.td}"><code style="${f.monoSm}">logo-compact</code></td>
              <td style="${u.td}">A narrower mark</td>
              <td style="${u.td}">Shown below 768px. Falls back to the theme's compact mark, or its full one if no compact variant exists.</td>
            </tr>
            <tr>
              <td style="${u.td}"><code style="${f.monoSm}">contact</code></td>
              <td style="${u.td}"><code style="${f.monoSm}">mms-link</code> — phone/email</td>
              <td style="${u.td}">Grouped with <code style="${f.monoSm}">logo</code>/<code style="${f.monoSm}">logo-compact</code> at the row's leading edge</td>
            </tr>
            <tr>
              <td style="${u.td}"><code style="${f.monoSm}">social</code></td>
              <td style="${u.td}"><code style="${f.monoSm}">a</code> wrapping <code style="${f.monoSm}">mms-icon</code></td>
              <td style="${u.td}">Grouped with <code style="${f.monoSm}">language</code> at the row's trailing edge — the pair wraps and left-aligns together once it no longer fits beside <code style="${f.monoSm}">logo</code>/<code style="${f.monoSm}">contact</code></td>
            </tr>
            <tr>
              <td style="${u.td}"><code style="${f.monoSm}">language</code></td>
              <td style="${u.td}">Locale switcher — <code style="${f.monoSm}">mms-select</code> is the common pattern; a link or button works too</td>
              <td style="${u.td}">Unopinionated about control shape; renders last in the utility row</td>
            </tr>
            <tr>
              <td style="${u.td}"><code style="${f.monoSm}">links</code></td>
              <td style="${u.td}"><code style="${f.monoSm}">mms-link</code></td>
              <td style="${u.td}">Legal/utility links, its own standalone row</td>
            </tr>
            <tr>
              <td style="${u.td}"><code style="${f.monoSm}">fine-print</code></td>
              <td style="${u.td}">Legal disclaimer text</td>
              <td style="${u.td}">Falls back to <code style="${f.monoSm}">fine-print-text</code> when empty; flows in the same line as <code style="${f.monoSm}">copyright-text</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre style="${u.pre}"><code>&lt;mms-footer copyright-text="© 2026 [Organization Name]."&gt;
  &lt;!-- omit logo/logo-compact entirely to use the active theme's own mark --&gt;

  &lt;mms-link slot="contact" href="tel:+18005551234" label="1-800-555-1234"&gt;&lt;/mms-link&gt;

  &lt;a slot="social" href="#" aria-label="Facebook"&gt;&lt;mms-icon name="facebook-logo"&gt;&lt;/mms-icon&gt;&lt;/a&gt;

  &lt;!-- options is an array property — set it from JS, not an HTML attribute --&gt;
  &lt;mms-select slot="language" id="language-select" size="sm" placeholder="Language" value="en"&gt;&lt;/mms-select&gt;
  &lt;script&gt;
    document.getElementById('language-select').options = [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Español' },
    ];
  &lt;/script&gt;

  &lt;mms-link slot="links" href="/privacy" label="Privacy Policy"&gt;&lt;/mms-link&gt;
  &lt;mms-link slot="links" href="/terms" label="Terms of Use"&gt;&lt;/mms-link&gt;

  &lt;span slot="fine-print"&gt;[Organization Name] is administered in accordance with state and federal regulations.&lt;/span&gt;
&lt;/mms-footer&gt;</code></pre>

      <hr style="${u.divider}" />

      <!-- Custom logo -->
      <h2 style="${f.h2}">Custom logo</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        The active theme supplies a built-in lockup — the demo above renders it with no
        <code style="${f.monoSm}">logo</code>/<code style="${f.monoSm}">logo-compact</code> content slotted at all. That's slot
        <em>fallback</em>, the same mechanism <code style="${f.monoSm}">mms-header</code> uses — anything placed in those
        slots overrides it. Supply your own mark when the engagement's theme is not one the package ships a logo for.
      </p>

      <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: ${_.subsection};">
        <mms-footer copyright-text="© 2026 [Organization Name].">
          ${D()} ${D(!0)}
          <mms-link slot="links" href="#" label="Privacy Policy" underline="none"></mms-link>
        </mms-footer>
      </div>

      <hr style="${u.divider}" />

      <!-- Logo size -->
      <h2 style="${f.h2}">Adjusting logo size</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.content};">
        The built-in logo's height is not a named size a consumer picks — each theme ships its own
        pixel-tuned default. To render it larger or smaller, override the height directly:
      </p>
      <pre style="${u.pre}"><code>mms-footer { --mms-footer-logo-height: 56px; }</code></pre>
      <p style="${f.caption} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        <code style="${f.monoSm}">mms-header</code> has the matching
        <code style="${f.monoSm}">--mms-header-logo-height</code>.
      </p>

      <hr style="${u.divider}" />

      <!-- Container -->
      <h2 style="${f.h2}">Container</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.content};">
        <code style="${f.monoSm}">container="content"</code> (default) caps the inner row at
        <code style="${f.monoSm}">--layout-content-max-width</code> and centers it, matching page
        content above the footer. <code style="${f.monoSm}">container="full"</code> releases the cap
        so the band's content spans edge-to-edge, held in only by the inline inset — the same
        distinction <code style="${f.monoSm}">mms-header</code> draws.
      </p>

      <hr style="${u.divider}" />

      <!-- The padding step -->
      <h2 style="${f.h2}">The padding step</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        The layout system defines exactly one breakpoint — <code style="${f.monoSm}">--layout-padding-step</code>
        at 768px — where the inline inset goes from 16px to 32px. The logo slot swaps at the same
        width. Everything else about the footer is content-driven, the same shape mms-header uses.
      </p>
      <div style="display: grid; gap: ${_.content}; margin-bottom: ${_.subsection};">
        <div>
          <p style="${f.caption} margin: 0 0 ${_.label};">
            <strong>Below 768px</strong> · inset 16px · <code style="${f.monoSm}">logo-compact</code> slot
          </p>
          <div style="border-radius: var(--radius-md); overflow: hidden; width: 480px; max-width: 100%;">
            <mms-footer copyright-text="© 2026 [Organization Name].">${O()}</mms-footer>
          </div>
        </div>
        <div>
          <p style="${f.caption} margin: 0 0 ${_.label};">
            <strong>768px and above</strong> · inset 32px · <code style="${f.monoSm}">logo</code> slot ·
            capped at 1280px, then centered
          </p>
          <div style="border-radius: var(--radius-md); overflow: hidden;">
            <mms-footer copyright-text="© 2026 [Organization Name].">${O()}</mms-footer>
          </div>
        </div>
      </div>

      <hr style="${u.divider}" />

      <!-- Adjusting the container -->
      <h2 style="${f.h2}">Adjusting the container</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.content};">
        Two custom properties tune the container without declaring a margin. They inherit, so
        setting them on a page wrapper realigns the footer with everything else — the same two
        mms-header exposes.
      </p>
      <pre style="${u.pre}"><code>/* Wider footer than body */
mms-footer { --mms-footer-content-max-width: 1440px; }

/* Roomier inset, keeping a step of your own */
mms-footer { --mms-footer-inline-padding: 24px; }
@media (min-width: 1024px) {
  mms-footer { --mms-footer-inline-padding: 64px; }
}</code></pre>
      <p style="${f.caption} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        Setting <code style="${f.monoSm}">--mms-footer-inline-padding</code> once flattens the
        768px step by design — declare it inside your own media query to keep one.
      </p>

      <hr style="${u.divider}" />

      <!-- Responsive degradation -->
      <h2 style="${f.h2}">Responsive degradation</h2>
      <p style="${f.bodySm} ${u.muted} max-width: ${p}; margin-bottom: ${_.subsection};">
        Unlike mms-header, nothing here collapses behind a toggle — there is no bounded bar height
        forcing content to hide. The utility row is two independent flex groups,
        <code style="${f.monoSm}">logo</code>/<code style="${f.monoSm}">contact</code> and
        <code style="${f.monoSm}">social</code>/<code style="${f.monoSm}">language</code>, pushed to
        opposite ends when both fit. Once they don't, the trailing group wraps to its own line and
        left-aligns there rather than staying pinned to the right — real CSS wrap, not a
        measured/JS-driven collapse.
      </p>
      <div style="border-radius: var(--radius-md); overflow: hidden; width: 380px; max-width: 100%; margin-bottom: ${_.subsection};">
        <mms-footer copyright-text="© 2026 [Organization Name].">${O()}</mms-footer>
      </div>

      <hr style="${u.divider}" />

      <!-- Accessibility -->
      <h2 style="${f.h2}">Accessibility</h2>

      <h3 style="${f.h3}">WCAG 2.2 AA compliance</h3>
      ${v(l.footer.rows)}

      <h3 style="${f.h3}">Screen reader behavior</h3>
      <ul style="${f.bodySm} ${u.muted} margin: 0 0 ${_.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${_.label};"><strong>Landmark:</strong> The footer is announced as "contentinfo" via <code style="${f.monoSm}">role="contentinfo"</code></li>
        <li style="margin-bottom: ${_.label};"><strong>Slotted content:</strong> Every link, button, and icon in the footer is consumer-supplied — its accessible name and role come from that element, not from mms-footer</li>
        <li><strong>Empty sections:</strong> An unfilled slot contributes no row, wrapper, or divider to the accessibility tree</li>
      </ul>

      <h3 style="${f.h3}">Keyboard navigation</h3>
      <table style="${u.table}">
        <thead>
          <tr>
            <th style="${u.th} width: 140px;">Key</th>
            <th style="${u.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${u.td}"><kbd style="${u.kbd}">Tab</kbd></td>
            <td style="${u.td}">Move focus through slotted contact, social, language, and legal links in document order</td>
          </tr>
          <tr>
            <td style="${u.td}"><kbd style="${u.kbd}">Enter</kbd></td>
            <td style="${u.td}">Activate the focused link or control</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},F={name:`Playground`,tags:[`!dev`],args:{viewport:`1240`,container:`content`,copyrightText:`© 2026 [Organization Name].`,finePrintText:`[Organization Name] is administered in accordance with state and federal regulations.`,footerLinks:A,socialLinks:j,languageLabel:M,contactItems:N,theme:`maximus`,density:`default`},decorators:[(e,t)=>r`
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;">
          <div style="display: flex; flex-direction: column; width: ${C(t.args.viewport)}; margin-inline: auto;">
            ${e()}
          </div>
        </div>
      `],argTypes:{viewport:{name:`Viewport (simulated)`,control:`select`,options:[`400`,`768`,`1240`,`1440`,`fill`],description:`Not a component prop — a story control that constrains the preview width so responsive behavior can be seen without resizing the browser. The footer measures its own container, so the simulation is faithful rather than a mock.`,table:{category:`Demo Controls`}},copyrightText:{name:`Copyright text`,control:`text`,description:`Copyright line, flows inline with the fine-print text`,table:{category:`Content`}},finePrintText:{name:`Fine print text`,control:`text`,description:`Fallback fine-print content, used only when the fine-print slot is empty`,table:{category:`Content`}},footerLinks:{name:`Legal links`,control:`text`,description:'Comma-separated labels, slotted as `mms-link slot="links"`',table:{category:`Content`}},contactItems:{name:`Contact items`,control:`text`,description:'Comma-separated `Label:href` pairs, slotted as `mms-link slot="contact"`. Use a `tel:`/`mailto:` href for phone/email, same as any other link the consumer supplies.',table:{category:`Content`}},socialLinks:{name:`Social links`,control:`text`,description:'Comma-separated `Label:icon` pairs, slotted as an `<a slot="social">` wrapping `mms-icon`. Which platforms to include and what they link to is entirely up to the consumer.',table:{category:`Content`}},languageLabel:{name:`Language control label`,control:`text`,description:"Label for the selected English option in the `language` slot, demonstrated with `mms-select` (the common real-world pattern). Clear the field to omit the slot entirely — a link or button works too, whichever better matches how your app switches locale.",table:{category:`Content`}},container:{name:`Container`,control:`select`,options:[`content`,`full`],description:"Caps the footer row, or does not. `content` (default) limits it to `--layout-content-max-width` (1280px) and centers it. `full` removes the cap so the band spans edge-to-edge.",table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Padding density`,table:{category:`Global`}}},parameters:{layout:`fullscreen`,docs:{source:{transform:(e,t)=>{let n=t.args,r=[];n.container!==`content`&&r.push(`container="${n.container}"`),n.copyrightText&&r.push(`copyright-text="${n.copyrightText}"`),n.finePrintText&&r.push(`fine-print-text="${n.finePrintText}"`),n.density===`compact`&&r.push(`data-density="compact"`);let i=T(n.contactItems).map(({label:e,href:t})=>`  <mms-link slot="contact" href="${t}" label="${e}"></mms-link>`),a=E(n.socialLinks).map(({label:e,icon:t})=>`  <a slot="social" href="#" aria-label="${e}"><mms-icon name="${t??``}"></mms-icon></a>`),o=n.languageLabel?[`  <mms-select slot="language" size="sm" placeholder="Language" value="en"></mms-select>`]:[],s=w(n.footerLinks).map(e=>`  <mms-link slot="links" href="#" label="${e}"></mms-link>`);return`<mms-footer\n  ${r.join(`
  `)}\n>\n${[...i,...a,...o,...s].join(`
`)}\n</mms-footer>`},language:`html`}},controls:{sort:`none`}},render:e=>r`
    <mms-footer
      container=${e.container}
      copyright-text=${e.copyrightText||n}
      fine-print-text=${e.finePrintText||n}
      data-density=${e.density===`compact`?`compact`:n}
    >
      ${O(e.footerLinks,e.socialLinks,e.languageLabel,e.contactItems)}
    </mms-footer>
  `},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Footer</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Global site footer — brand mark, contact/social/language utilities, legal links, and fine
        print in a single structural shell. All content is consumer-supplied via slots; the
        component renders only the wrappers a slot's content actually needs — an empty slot
        contributes nothing, never an empty row.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm} margin: 0;">
          Layout and responsiveness follow <code style="\${t.monoSm}">mms-header</code>'s precedent: one
          responsive step at 768px, driven by the shared layout tokens and the footer's own
          <code style="\${t.monoSm}">container-type: inline-size</code> — not Marina's four-tier
          breakpoint scale. See <strong>The padding step</strong> and
          <strong>Responsive degradation</strong> below for the full detail.
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Every section is optional. A footer with only a copyright line and legal links is valid;
        so is one with every slot filled. Below 768px, the <code style="\${t.monoSm}">logo-compact</code>
        slot is shown instead of <code style="\${t.monoSm}">logo</code>, the same swap
        <code style="\${t.monoSm}">mms-header</code> makes.
      </p>

      <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: \${space.subsection};">
        <mms-footer copyright-text="© 2026 [Organization Name]." fine-print-text="[Organization Name] is administered in accordance with state and federal regulations.">
          \${sampleContent()}
        </mms-footer>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Slots -->
      <h2 style="\${t.h2}">Slots</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Every slot is independent and may be left empty. The utility row (logo through language)
        renders only if at least one of its slots has content; the links row renders only if the
        <code style="\${t.monoSm}">links</code> slot has content; the fine-print row renders only if
        <code style="\${t.monoSm}">copyright-text</code> is set, or <code style="\${t.monoSm}">fine-print-text</code>
        is set, or the <code style="\${t.monoSm}">fine-print</code> slot has content. <code style="\${t.monoSm}">contact</code>,
        <code style="\${t.monoSm}">social</code>, and <code style="\${t.monoSm}">links</code> content is configurable
        from the <strong>Playground</strong> story's controls, without editing this page's markup.
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
              <td style="\${doc.td}">Brand mark — image, inline SVG, or text lockup</td>
              <td style="\${doc.td}">Shown at 768px and above. Falls back to the theme's own mark.</td>
            </tr>
            <tr>
              <td style="\${doc.td}"><code style="\${t.monoSm}">logo-compact</code></td>
              <td style="\${doc.td}">A narrower mark</td>
              <td style="\${doc.td}">Shown below 768px. Falls back to the theme's compact mark, or its full one if no compact variant exists.</td>
            </tr>
            <tr>
              <td style="\${doc.td}"><code style="\${t.monoSm}">contact</code></td>
              <td style="\${doc.td}"><code style="\${t.monoSm}">mms-link</code> — phone/email</td>
              <td style="\${doc.td}">Grouped with <code style="\${t.monoSm}">logo</code>/<code style="\${t.monoSm}">logo-compact</code> at the row's leading edge</td>
            </tr>
            <tr>
              <td style="\${doc.td}"><code style="\${t.monoSm}">social</code></td>
              <td style="\${doc.td}"><code style="\${t.monoSm}">a</code> wrapping <code style="\${t.monoSm}">mms-icon</code></td>
              <td style="\${doc.td}">Grouped with <code style="\${t.monoSm}">language</code> at the row's trailing edge — the pair wraps and left-aligns together once it no longer fits beside <code style="\${t.monoSm}">logo</code>/<code style="\${t.monoSm}">contact</code></td>
            </tr>
            <tr>
              <td style="\${doc.td}"><code style="\${t.monoSm}">language</code></td>
              <td style="\${doc.td}">Locale switcher — <code style="\${t.monoSm}">mms-select</code> is the common pattern; a link or button works too</td>
              <td style="\${doc.td}">Unopinionated about control shape; renders last in the utility row</td>
            </tr>
            <tr>
              <td style="\${doc.td}"><code style="\${t.monoSm}">links</code></td>
              <td style="\${doc.td}"><code style="\${t.monoSm}">mms-link</code></td>
              <td style="\${doc.td}">Legal/utility links, its own standalone row</td>
            </tr>
            <tr>
              <td style="\${doc.td}"><code style="\${t.monoSm}">fine-print</code></td>
              <td style="\${doc.td}">Legal disclaimer text</td>
              <td style="\${doc.td}">Falls back to <code style="\${t.monoSm}">fine-print-text</code> when empty; flows in the same line as <code style="\${t.monoSm}">copyright-text</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre style="\${doc.pre}"><code>&lt;mms-footer copyright-text="© 2026 [Organization Name]."&gt;
  &lt;!-- omit logo/logo-compact entirely to use the active theme's own mark --&gt;

  &lt;mms-link slot="contact" href="tel:+18005551234" label="1-800-555-1234"&gt;&lt;/mms-link&gt;

  &lt;a slot="social" href="#" aria-label="Facebook"&gt;&lt;mms-icon name="facebook-logo"&gt;&lt;/mms-icon&gt;&lt;/a&gt;

  &lt;!-- options is an array property — set it from JS, not an HTML attribute --&gt;
  &lt;mms-select slot="language" id="language-select" size="sm" placeholder="Language" value="en"&gt;&lt;/mms-select&gt;
  &lt;script&gt;
    document.getElementById('language-select').options = [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Español' },
    ];
  &lt;/script&gt;

  &lt;mms-link slot="links" href="/privacy" label="Privacy Policy"&gt;&lt;/mms-link&gt;
  &lt;mms-link slot="links" href="/terms" label="Terms of Use"&gt;&lt;/mms-link&gt;

  &lt;span slot="fine-print"&gt;[Organization Name] is administered in accordance with state and federal regulations.&lt;/span&gt;
&lt;/mms-footer&gt;</code></pre>

      <hr style="\${doc.divider}" />

      <!-- Custom logo -->
      <h2 style="\${t.h2}">Custom logo</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The active theme supplies a built-in lockup — the demo above renders it with no
        <code style="\${t.monoSm}">logo</code>/<code style="\${t.monoSm}">logo-compact</code> content slotted at all. That's slot
        <em>fallback</em>, the same mechanism <code style="\${t.monoSm}">mms-header</code> uses — anything placed in those
        slots overrides it. Supply your own mark when the engagement's theme is not one the package ships a logo for.
      </p>

      <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: \${space.subsection};">
        <mms-footer copyright-text="© 2026 [Organization Name].">
          \${sampleLogo()} \${sampleLogo(true)}
          <mms-link slot="links" href="#" label="Privacy Policy" underline="none"></mms-link>
        </mms-footer>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Logo size -->
      <h2 style="\${t.h2}">Adjusting logo size</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The built-in logo's height is not a named size a consumer picks — each theme ships its own
        pixel-tuned default. To render it larger or smaller, override the height directly:
      </p>
      <pre style="\${doc.pre}"><code>mms-footer { --mms-footer-logo-height: 56px; }</code></pre>
      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">mms-header</code> has the matching
        <code style="\${t.monoSm}">--mms-header-logo-height</code>.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Container -->
      <h2 style="\${t.h2}">Container</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        <code style="\${t.monoSm}">container="content"</code> (default) caps the inner row at
        <code style="\${t.monoSm}">--layout-content-max-width</code> and centers it, matching page
        content above the footer. <code style="\${t.monoSm}">container="full"</code> releases the cap
        so the band's content spans edge-to-edge, held in only by the inline inset — the same
        distinction <code style="\${t.monoSm}">mms-header</code> draws.
      </p>

      <hr style="\${doc.divider}" />

      <!-- The padding step -->
      <h2 style="\${t.h2}">The padding step</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The layout system defines exactly one breakpoint — <code style="\${t.monoSm}">--layout-padding-step</code>
        at 768px — where the inline inset goes from 16px to 32px. The logo slot swaps at the same
        width. Everything else about the footer is content-driven, the same shape mms-header uses.
      </p>
      <div style="display: grid; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div>
          <p style="\${t.caption} margin: 0 0 \${space.label};">
            <strong>Below 768px</strong> · inset 16px · <code style="\${t.monoSm}">logo-compact</code> slot
          </p>
          <div style="border-radius: var(--radius-md); overflow: hidden; width: 480px; max-width: 100%;">
            <mms-footer copyright-text="© 2026 [Organization Name].">\${sampleContent()}</mms-footer>
          </div>
        </div>
        <div>
          <p style="\${t.caption} margin: 0 0 \${space.label};">
            <strong>768px and above</strong> · inset 32px · <code style="\${t.monoSm}">logo</code> slot ·
            capped at 1280px, then centered
          </p>
          <div style="border-radius: var(--radius-md); overflow: hidden;">
            <mms-footer copyright-text="© 2026 [Organization Name].">\${sampleContent()}</mms-footer>
          </div>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Adjusting the container -->
      <h2 style="\${t.h2}">Adjusting the container</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Two custom properties tune the container without declaring a margin. They inherit, so
        setting them on a page wrapper realigns the footer with everything else — the same two
        mms-header exposes.
      </p>
      <pre style="\${doc.pre}"><code>/* Wider footer than body */
mms-footer { --mms-footer-content-max-width: 1440px; }

/* Roomier inset, keeping a step of your own */
mms-footer { --mms-footer-inline-padding: 24px; }
@media (min-width: 1024px) {
  mms-footer { --mms-footer-inline-padding: 64px; }
}</code></pre>
      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Setting <code style="\${t.monoSm}">--mms-footer-inline-padding</code> once flattens the
        768px step by design — declare it inside your own media query to keep one.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Responsive degradation -->
      <h2 style="\${t.h2}">Responsive degradation</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Unlike mms-header, nothing here collapses behind a toggle — there is no bounded bar height
        forcing content to hide. The utility row is two independent flex groups,
        <code style="\${t.monoSm}">logo</code>/<code style="\${t.monoSm}">contact</code> and
        <code style="\${t.monoSm}">social</code>/<code style="\${t.monoSm}">language</code>, pushed to
        opposite ends when both fit. Once they don't, the trailing group wraps to its own line and
        left-aligns there rather than staying pinned to the right — real CSS wrap, not a
        measured/JS-driven collapse.
      </p>
      <div style="border-radius: var(--radius-md); overflow: hidden; width: 380px; max-width: 100%; margin-bottom: \${space.subsection};">
        <mms-footer copyright-text="© 2026 [Organization Name].">\${sampleContent()}</mms-footer>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['footer'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Landmark:</strong> The footer is announced as "contentinfo" via <code style="\${t.monoSm}">role="contentinfo"</code></li>
        <li style="margin-bottom: \${space.label};"><strong>Slotted content:</strong> Every link, button, and icon in the footer is consumer-supplied — its accessible name and role come from that element, not from mms-footer</li>
        <li><strong>Empty sections:</strong> An unfilled slot contributes no row, wrapper, or divider to the accessibility tree</li>
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
            <td style="\${doc.td}">Move focus through slotted contact, social, language, and legal links in document order</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd></td>
            <td style="\${doc.td}">Activate the focused link or control</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    viewport: '1240',
    container: 'content',
    copyrightText: '© 2026 [Organization Name].',
    finePrintText: '[Organization Name] is administered in accordance with state and federal regulations.',
    footerLinks: DEFAULT_LINKS,
    socialLinks: DEFAULT_SOCIAL,
    languageLabel: DEFAULT_LANGUAGE_LABEL,
    contactItems: DEFAULT_CONTACT,
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
        <div style="background: var(--color-surface-sunken); padding: var(--spacing-lg2) var(--spacing-lg2) 0; overflow-x: auto;">
          <div style="display: flex; flex-direction: column; width: \${w}; margin-inline: auto;">
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
      description: 'Not a component prop — a story control that constrains the preview width so responsive behavior can be seen without resizing the browser. The footer measures its own container, so the simulation is faithful rather than a mock.',
      table: {
        category: 'Demo Controls'
      }
    },
    copyrightText: {
      name: 'Copyright text',
      control: 'text',
      description: 'Copyright line, flows inline with the fine-print text',
      table: {
        category: 'Content'
      }
    },
    finePrintText: {
      name: 'Fine print text',
      control: 'text',
      description: 'Fallback fine-print content, used only when the fine-print slot is empty',
      table: {
        category: 'Content'
      }
    },
    footerLinks: {
      name: 'Legal links',
      control: 'text',
      description: 'Comma-separated labels, slotted as \`mms-link slot="links"\`',
      table: {
        category: 'Content'
      }
    },
    contactItems: {
      name: 'Contact items',
      control: 'text',
      description: 'Comma-separated \`Label:href\` pairs, slotted as \`mms-link slot="contact"\`. Use a \`tel:\`/\`mailto:\` href for phone/email, same as any other link the consumer supplies.',
      table: {
        category: 'Content'
      }
    },
    socialLinks: {
      name: 'Social links',
      control: 'text',
      description: 'Comma-separated \`Label:icon\` pairs, slotted as an \`<a slot="social">\` wrapping \`mms-icon\`. Which platforms to include and what they link to is entirely up to the consumer.',
      table: {
        category: 'Content'
      }
    },
    languageLabel: {
      name: 'Language control label',
      control: 'text',
      description: 'Label for the selected English option in the \`language\` slot, demonstrated with \`mms-select\` (the common real-world pattern). Clear the field to omit the slot entirely — a link or button works too, whichever better matches how your app switches locale.',
      table: {
        category: 'Content'
      }
    },
    container: {
      name: 'Container',
      control: 'select',
      options: ['content', 'full'],
      description: 'Caps the footer row, or does not. \`content\` (default) limits it to \`--layout-content-max-width\` (1280px) and centers it. \`full\` removes the cap so the band spans edge-to-edge.',
      table: {
        category: 'Visual'
      }
    },
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
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
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: {
            container: string;
            copyrightText: string;
            finePrintText: string;
            footerLinks: string;
            socialLinks: string;
            languageLabel: string;
            contactItems: string;
            density: string;
          };
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.container !== 'content') attrs.push(\`container="\${a.container}"\`);
          if (a.copyrightText) attrs.push(\`copyright-text="\${a.copyrightText}"\`);
          if (a.finePrintText) attrs.push(\`fine-print-text="\${a.finePrintText}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          const contact = parseContactSpec(a.contactItems).map(({
            label,
            href
          }) => \`  <mms-link slot="contact" href="\${href}" label="\${label}"></mms-link>\`);
          const social = parseSocialSpec(a.socialLinks).map(({
            label,
            icon
          }) => \`  <a slot="social" href="#" aria-label="\${label}"><mms-icon name="\${icon ?? ''}"></mms-icon></a>\`);
          const language = a.languageLabel ? [\`  <mms-select slot="language" size="sm" placeholder="Language" value="en"></mms-select>\`] : [];
          const links = parseCommaSeparated(a.footerLinks).map(label => \`  <mms-link slot="links" href="#" label="\${label}"></mms-link>\`);
          return \`<mms-footer\\n  \${attrs.join('\\n  ')}\\n>\\n\${[...contact, ...social, ...language, ...links].join('\\n')}\\n</mms-footer>\`;
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
    copyrightText: string;
    finePrintText: string;
    footerLinks: string;
    socialLinks: string;
    languageLabel: string;
    contactItems: string;
    density: string;
  }) => html\`
    <mms-footer
      container=\${args.container}
      copyright-text=\${args.copyrightText || nothing}
      fine-print-text=\${args.finePrintText || nothing}
      data-density=\${args.density === 'compact' ? 'compact' : nothing}
    >
      \${sampleContent(args.footerLinks, args.socialLinks, args.languageLabel, args.contactItems)}
    </mms-footer>
  \`
}`,...F.parameters?.docs?.source}}},I=[`Overview`,`PlaygroundStory`]}));L();export{P as Overview,F as PlaygroundStory,I as __namedExportsOrder,k as default,L as n,S as t};