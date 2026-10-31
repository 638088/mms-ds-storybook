import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{t as r}from"./mms-icon.component-DFVI3nJi.js";import{c as i,n as a,t as o}from"./iframe-0m-KJlLB.js";import{t as s}from"./mms-card.component-Ae9XIj4r.js";import{t as c}from"./mms-inline-alert.component-BWndcKtJ.js";import{a as l,c as u,i as d,l as f,n as p,o as m,r as h,u as g}from"./doc-styles-BoEZknkJ.js";import{n as _,o as v}from"./a11y-outcome-o7pti1Vx.js";import{t as y}from"./mms-select.component-CO4YBVrq.js";import{t as b}from"./mms-text-field.component-DPUzfOvQ.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;e((()=>{n(),i(),s(),r(),c(),y(),b(),u(),a(),_(),x=`font-family: var(--type-body-sm-family); font-size: var(--type-body-sm-size); line-height: var(--type-body-sm-line-height);`,S={title:`Foundations/Colors/Color Framework`},C=`${l.divider} margin-top: ${f.subsection};`,w=`text-align: center; color: var(--color-utility-success-emphasis);`,T=`text-align: center; color: var(--color-utility-error-emphasis);`,E={name:`Overview`,render:()=>t`
    <div data-theme=${h} data-mode=${m()} style=${p}>
      <h1 style="${g.h1}">Color Framework</h1>
      <p style="${g.body} ${l.muted} max-width: ${d};">
        The 12-step scale is a purpose-driven color system. Instead of picking arbitrary shades, each step number maps to a specific UI role. This makes component styling predictable and consistent.
      </p>

      <hr style="${C}" />

      <h2 style="${g.h2}">Step purposes — light mode (reference)</h2>
      <p style="${g.bodySm} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">
        Below is <strong>Radix Blue</strong> as a reference example — this is not our brand palette. It demonstrates how the 12-step structure maps to UI purposes.
      </p>
      <div style="background: #ffffff; padding: var(--spacing-lg1); border-radius: var(--radius-md); border: var(--border-width-xs) solid var(--color-border-default); margin-bottom: ${f.subsection};">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: ${f.label};">
          <div style="height: 40px; background: #fbfdff; border-radius: 4px; border: 1px solid rgba(128,128,128,0.15);"></div>
          <div style="height: 40px; background: #f4faff; border-radius: 4px; border: 1px solid rgba(128,128,128,0.15);"></div>
          <div style="height: 40px; background: #e6f4fe; border-radius: 4px;"></div>
          <div style="height: 40px; background: #d5efff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #c2e5ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #acd8fc; border-radius: 4px;"></div>
          <div style="height: 40px; background: #8ec8f6; border-radius: 4px;"></div>
          <div style="height: 40px; background: #5eb1ef; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0090ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0588f0; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0d74ce; border-radius: 4px;"></div>
          <div style="height: 40px; background: #113264; border-radius: 4px;"></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="text-align: center; ${g.monoSm} color: #1a1a1a; opacity: 0.6;">${e}</div>
          `)}
        </div>
      </div>

      <h3 style="${g.h3}">Per-step reference</h3>
      <table style="${l.table} margin-bottom: ${f.subsection};">
        <thead>
          <tr>
            <th style="${l.th} width: 60px;">Step</th>
            <th style="${l.th}">Purpose</th>
            <th style="${l.th}">Example Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td} ${g.monoSm}">1</td>
            <td style="${l.td}">Page</td>
            <td style="${l.td} ${l.muted}">Body background, main canvas</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">2</td>
            <td style="${l.td}">Surface</td>
            <td style="${l.td} ${l.muted}">Cards, sidebars, panels, table rows</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">3</td>
            <td style="${l.td}">Element</td>
            <td style="${l.td} ${l.muted}">Ghost button, dropdown item, list item default</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">4</td>
            <td style="${l.td}">Element hovered</td>
            <td style="${l.td} ${l.muted}">Hover state on interactive elements</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">5</td>
            <td style="${l.td}">Element pressed</td>
            <td style="${l.td} ${l.muted}">Active/pressed state, selected item</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">6</td>
            <td style="${l.td}">Separator</td>
            <td style="${l.td} ${l.muted}">Dividers, card borders, subtle accent lines</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">7</td>
            <td style="${l.td}">Border</td>
            <td style="${l.td} ${l.muted}">Input borders, button outlines</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">8</td>
            <td style="${l.td}">Border hovered</td>
            <td style="${l.td} ${l.muted}">Hover borders, emphasized outlines</td>
          </tr>
          <tr style="background: var(--color-surface-default);">
            <td style="${l.td} ${g.monoSm} font-weight: 600;">9</td>
            <td style="${l.td} font-weight: 600;">Solid (anchor)</td>
            <td style="${l.td} ${l.muted}">Primary buttons, badges, filled elements</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">10</td>
            <td style="${l.td}">Solid hovered</td>
            <td style="${l.td} ${l.muted}">Hover state on solid fills</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">11</td>
            <td style="${l.td}">Text muted</td>
            <td style="${l.td} ${l.muted}">Placeholder, secondary labels, captions</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">12</td>
            <td style="${l.td}">Text</td>
            <td style="${l.td} ${l.muted}">Body text, headings, high-contrast labels</td>
          </tr>
        </tbody>
      </table>

      <hr style="${C}" />

      <h2 style="${g.h2}">Step purposes — dark mode (reference)</h2>
      <p style="${g.bodySm} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">
        Dark mode uses a <strong>separate palette</strong>, not inverted colors. Below is <strong>Radix Blue Dark</strong> as a reference example — this is not our brand palette. Notice step 9 is still blue, just tuned for dark backgrounds.
      </p>
      <div style="background: #0d1520; padding: var(--spacing-lg1); border-radius: var(--radius-md); margin-bottom: ${f.subsection};">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: ${f.label};">
          <div style="height: 40px; background: #0d1520; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);"></div>
          <div style="height: 40px; background: #111927; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);"></div>
          <div style="height: 40px; background: #0d2847; border-radius: 4px;"></div>
          <div style="height: 40px; background: #003362; border-radius: 4px;"></div>
          <div style="height: 40px; background: #004074; border-radius: 4px;"></div>
          <div style="height: 40px; background: #104d87; border-radius: 4px;"></div>
          <div style="height: 40px; background: #205d9e; border-radius: 4px;"></div>
          <div style="height: 40px; background: #2870bd; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0090ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #3b9eff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #70b8ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #c2e6ff; border-radius: 4px;"></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
            <div style="text-align: center; ${g.monoSm} color: #ffffff; opacity: 0.6;">${e}</div>
          `)}
        </div>
      </div>
      <p style="${g.body} ${l.muted} max-width: ${d};">
        The <strong>step purposes remain identical</strong> in dark mode — only the palette values change. Step 1 is still page, step 9 is still solid. This means component code stays the same across modes.
      </p>

      <hr style="${C}" />

      <h2 style="${g.h2}">Usage patterns</h2>

      <h3 style="${g.h3}">Elements (list items, dropdowns, ghost buttons)</h3>
      <pre style="${l.pre} margin-bottom: ${f.subsection};">
.list-item {
  background: var(--color-neutral-3);      /* element */
}
.list-item:hover {
  background: var(--color-neutral-4);      /* element hovered */
}
.list-item[aria-selected="true"] {
  background: var(--color-primary-5);      /* element pressed */
}</pre>

      <h3 style="${g.h3}">Solids (buttons, badges)</h3>
      <pre style="${l.pre} margin-bottom: ${f.subsection};">
.button-primary {
  background: var(--color-primary-9);      /* solid */
  color: var(--color-text-on-primary);     /* white text */
}
.button-primary:hover {
  background: var(--color-primary-10);     /* solid hovered */
}</pre>

      <h3 style="${g.h3}">Borders (separators, inputs, cards)</h3>
      <pre style="${l.pre} margin-bottom: ${f.subsection};">
.divider {
  border-top: 1px solid var(--color-neutral-6); /* separator */
}
.card {
  border: 1px solid var(--color-neutral-6);     /* separator */
}
.input {
  border: 1px solid var(--color-neutral-7);     /* border */
}
.input:hover {
  border: 1px solid var(--color-neutral-8);     /* border hovered */
}
.input:focus {
  outline: 2px solid var(--focus-ring-color);   /* focus ring — utility, NOT border */
}</pre>

      <h3 style="${g.h3}">Text</h3>
      <pre style="${l.pre}">
.body {
  color: var(--color-neutral-12);          /* text */
}
.caption {
  color: var(--color-neutral-11);          /* text muted */
}
.link {
  color: var(--color-primary-11);          /* text muted (brand) */
}</pre>

      <hr style="${C}" />

      <h2 style="${g.h2}">Why this model?</h2>
      <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">
        Traditional color scales (like Tailwind's 50-900) require developers to guess which shade fits each use case. "Should hover be 600 or 700?" becomes tribal knowledge.
      </p>
      <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">
        With the 12-step model: <strong>Step 4 is always hover. Step 9 is always the solid fill. Step 12 is always high-contrast text.</strong> The step number defines the purpose, not just the lightness.
      </p>

      <div style="margin-top: ${f.subsection};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Note:"
          message="Focus rings use our structural utility token (--focus-ring-color), NOT step 8. This ensures consistent accessibility regardless of brand theme."
        ></mms-inline-alert>
      </div>
    </div>
  `},D={name:`Color Generator`,render:()=>t`
    <div data-theme=${h} data-mode=${m()} style=${p}>
      <h1 style="${g.h1}">Color Generator</h1>
      <p style="${g.body} ${l.muted} max-width: ${d};">
        When onboarding a new brand, we programmatically generate accessible 12-step palettes from a single anchor color. The generator uses OKLCH color space and validates WCAG contrast requirements.
      </p>

      <hr style="${C}" />

      <h2 style="${g.h2}">Accessibility by design</h2>
      <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">
        The 12-step system isn't just about visual organization — it's engineered to guarantee WCAG contrast ratios. Radix designed specific <strong>step pairings</strong> that always meet accessibility thresholds.
      </p>

      <h3 style="${g.h3}">Contrast pairing guarantees</h3>
      <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">
        These pairings are pre-validated to meet WCAG AA requirements:
      </p>
      <table style="${l.table} margin-bottom: ${f.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">Pairing</th>
            <th style="${l.th}">Min Ratio</th>
            <th style="${l.th}">WCAG Level</th>
            <th style="${l.th}">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td} ${g.monoSm}">Step 9 + <code>-9-on</code></td>
            <td style="${l.td}">4.5:1</td>
            <td style="${l.td}">AA Normal</td>
            <td style="${l.td} ${l.muted}">Primary button text (auto-calculated)</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">Step 11 on Step 1</td>
            <td style="${l.td}">4.5:1</td>
            <td style="${l.td}">AA Normal</td>
            <td style="${l.td} ${l.muted}">Secondary text on app bg</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">Step 12 on Step 1–2</td>
            <td style="${l.td}">7:1</td>
            <td style="${l.td}">AAA Normal</td>
            <td style="${l.td} ${l.muted}">Primary text on surfaces</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">Step 9 on Step 1–2</td>
            <td style="${l.td}">3:1</td>
            <td style="${l.td}">AA Large/UI</td>
            <td style="${l.td} ${l.muted}">UI component boundaries</td>
          </tr>
        </tbody>
      </table>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block;">
        <div slot="body-content">
          <p style="${g.bodySm}">
            <strong>Why this matters:</strong> You don't check contrast manually. The generator outputs <code style="${g.mono}">-9-on</code> and <code style="${g.mono}">-10-on</code> tokens that auto-select white (<code style="${g.mono}">#ffffff</code>) or dark (<code style="${g.mono}">#060606</code>) text based on which provides better contrast. Components reference per-color tokens like <code style="${g.mono}">--color-text-on-primary</code>, <code style="${g.mono}">--color-text-on-secondary</code>, <code style="${g.mono}">--color-text-on-accent</code>, and <code style="${g.mono}">--color-text-on-onyx</code> — each swapping appropriately for theme and mode.
          </p>
        </div>
      </mms-card>

      <hr style="${C}" />

      <h2 style="${g.h2}">Why OKLCH?</h2>
      <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">
        Traditional color spaces (HSL, RGB) have a critical flaw: adjusting lightness causes <strong>hue shifts</strong>. A blue darkened in HSL drifts toward purple. This breaks the visual consistency of a color scale.
      </p>
      <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">
        <strong>OKLCH</strong> (Oklab Lightness-Chroma-Hue) provides perceptually uniform lightness. Changing L doesn't shift the hue — a blue stays blue across all 12 steps. This is essential for generating accessible scales where each step must maintain predictable contrast relationships.
      </p>

      <h3 style="${g.h3}">OKLCH components</h3>
      <table style="${l.table} margin-bottom: ${f.subsection};">
        <tbody>
          <tr>
            <td style="${l.td} ${g.monoSm} font-weight: 600; width: 80px;">L</td>
            <td style="${l.td}">Lightness (0–1)</td>
            <td style="${l.td} ${l.muted}">Perceptually uniform — 0.5 looks "half bright"</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm} font-weight: 600;">C</td>
            <td style="${l.td}">Chroma (0–0.4+)</td>
            <td style="${l.td} ${l.muted}">Color intensity — 0 is grayscale</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm} font-weight: 600;">H</td>
            <td style="${l.td}">Hue (0–360°)</td>
            <td style="${l.td} ${l.muted}">Color angle — preserved across the scale</td>
          </tr>
        </tbody>
      </table>

      <hr style="${C}" />

      <h2 style="${g.h2}">Three-tier compliance model</h2>
      <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">
        The generator validates each anchor color against WCAG contrast requirements and applies one of three scenarios:
      </p>

      <table style="${l.table} margin-bottom: ${f.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">Scenario</th>
            <th style="${l.th}">Contrast</th>
            <th style="${l.th}">Behavior</th>
            <th style="${l.th}">Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td} ${g.monoSm}">1 — Full</td>
            <td style="${l.td}">≥ 4.5:1</td>
            <td style="${l.td}">Anchor passes — full scale generated</td>
            <td style="${l.td} ${g.monoSm}">--color-{name}-1 … 12</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">2 — Adjusted</td>
            <td style="${l.td}">4.0 – 4.5:1</td>
            <td style="${l.td}">Minor adjustment applied, then full scale</td>
            <td style="${l.td} ${g.monoSm}">--color-{name}-1 … 12</td>
          </tr>
          <tr>
            <td style="${l.td} ${g.monoSm}">3 — Decorative</td>
            <td style="${l.td}">< 4.0:1</td>
            <td style="${l.td}">Decorative use only — no solid fills or text</td>
            <td style="${l.td} ${g.monoSm}">--color-{name}-decorative-1 … 9</td>
          </tr>
        </tbody>
      </table>

      <p style="${g.body} ${l.muted} max-width: ${d};">
        See the <strong>Color Generator Tool</strong> to interactively explore how different anchor colors produce palettes under each scenario.
      </p>
    </div>
  `},O=e=>{let t=e.replace(`#`,``);return{r:parseInt(t.substring(0,2),16)/255,g:parseInt(t.substring(2,4),16)/255,b:parseInt(t.substring(4,6),16)/255}},k=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,A=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,j=e=>{let t=k(e.r),n=k(e.g),r=k(e.b),i=Math.cbrt(.4122214708*t+.5363325363*n+.0514459929*r),a=Math.cbrt(.2119034982*t+.6806995451*n+.1073969566*r),o=Math.cbrt(.0883024619*t+.2817188376*n+.6299787005*r);return{L:.2104542553*i+.793617785*a-.0040720468*o,a:1.9779984951*i-2.428592205*a+.4505937099*o,b:.0259040371*i+.7827717662*a-.808675766*o}},M=e=>{let t=e.L+.3963377774*e.a+.2158037573*e.b,n=e.L-.1055613458*e.a-.0638541728*e.b,r=e.L-.0894841775*e.a-1.291485548*e.b,i=t*t*t,a=n*n*n,o=r*r*r;return{r:A(4.0767416621*i-3.3077115913*a+.2309699292*o),g:A(-1.2684380046*i+2.6097574011*a-.3413193965*o),b:A(-.0041960863*i-.7034186147*a+1.707614701*o)}},N=e=>{let t=Math.sqrt(e.a*e.a+e.b*e.b),n=Math.atan2(e.b,e.a)*(180/Math.PI);return n<0&&(n+=360),{L:e.L,C:t,H:n}},P=e=>{let t=e.H*(Math.PI/180);return{L:e.L,a:e.C*Math.cos(t),b:e.C*Math.sin(t)}},F=e=>{let t=e=>Math.max(0,Math.min(1,e)),n=e=>Math.round(t(e)*255).toString(16).padStart(2,`0`);return`#${n(e.r)}${n(e.g)}${n(e.b)}`},I=e=>N(j(O(e))),L=e=>F(M(P(e))),R=e=>.2126*k(e.r)+.7152*k(e.g)+.0722*k(e.b),z=(e,t)=>{let n=R(O(e)),r=R(O(t));return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)},B=[.985,.965,.94,.915,.885,.82,.75,.68,null,null,.45,.3],V=[.12,.195,.215,.23,.27,.3,.37,.44,null,null,.75,.9],H=[.08,.12,.2,.28,.36,.45,.55,.7,1,.95,.75,.6],U=[2.2,1.5,1.45,1.4,1.28,1.25,1.15,1.06,1,1,1,1],W=[`Page`,`Surface`,`Element`,`Element hovered`,`Element pressed`,`Separator`,`Border`,`Border hovered`,`Solid (anchor)`,`Solid hovered`,`Text muted`,`Text`],G=(e,t,n)=>{let r=`#ffffff`,i=z(e,r),a,o=e,s=null;if(i>=4.5)a=1;else if(i>=4){a=2;let t=I(e);for(let e=t.L;e>=.15;e-=.005){let n=L({L:e,C:t.C,H:t.H});if(z(n,r)>=4.5){o=n,s=z(n,r);break}}}else a=3;let c=I(o),l=t?V:B,u=a===3?9:12,d=a===3?`-decorative`:``,f=[];for(let e=0;e<u;e++){let r=e+1,i,a,o=c.H;if(r===9)i=t?Math.max(.45,Math.min(.65,c.L)):c.L,a=c.C;else if(r===10){let e=t?Math.max(.45,Math.min(.65,c.L)):c.L;i=t?Math.min(.75,e+.08):Math.max(.25,e-.08),a=c.C*.95}else{i=l[e];let n=t?H[e]*U[e]:H[e];a=c.C*n}a=Math.max(0,Math.min(.4,a)),f.push({step:r,hex:L({L:i,C:a,H:o}),name:W[e],token:`--color-${n}${d}-${r}`})}return{steps:f,scenario:a,ratio:i,anchorHex:o,adjustedRatio:s,suffix:d}},K={name:`Color Generator Tool`,render:()=>{let e=`generator-${Math.random().toString(36).slice(2,9)}`;return setTimeout(()=>{let t=document.getElementById(e);if(!t)return;let n=t.querySelector(`#hex-input`),r=t.querySelector(`#name-input`),i=t.querySelector(`#result-area`),a=t.querySelector(`#light-scale-area`),o=t.querySelector(`#dark-scale-area`),s=t.querySelector(`#css-output`),c=t.querySelector(`#copy-btn`),l=(e,t)=>{let n=`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(65px, 1fr)); gap: 6px;">`,r=t?`rgba(255,255,255,0.7)`:`inherit`;return e.steps.forEach(e=>{let i=t?e.step>=11?`#1a1a1a`:`#fff`:e.step>=9?`#fff`:`#1a1a1a`,a=!t&&e.step<=2?` border: 1px solid rgba(128,128,128,0.2);`:t&&e.step<=3?` border: 1px solid rgba(255,255,255,0.15);`:``;n+=`<div style="text-align: center;"><div style="height: 40px; border-radius: 5px; background: ${e.hex}; display: flex; align-items: center; justify-content: center; ${x} font-weight: 700; color: ${i};${a}">${e.step}</div><div style="${x} margin-top: 3px; color: ${r};">${e.name}</div></div>`}),n+=`</div>`,n},u=()=>{let e=n?.value||`#0066CC`,t=r?.value||`brand`;if(!/^#[0-9A-Fa-f]{6}$/.test(e)){i&&(i.innerHTML=`<span style="color: #EF4444;">Invalid hex format. Use #RRGGBB.</span>`);return}let c=G(e,!1,t),u=G(e,!0,t),[d,f,p]={1:[`✓ Full Scale`,`rgba(34, 197, 94, 0.15)`,`#16A34A`],2:[`⚠ Adjusted`,`rgba(251, 191, 36, 0.15)`,`#D97706`],3:[`✗ Decorative Only`,`rgba(239, 68, 68, 0.15)`,`#DC2626`]}[c.scenario],m=e=>`<span style="display: inline-block; width: 24px; height: 24px; border-radius: 4px; background: ${e}; vertical-align: middle; border: 1px solid rgba(128,128,128,0.2);"></span>`,h=`<div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 6px; background: ${f}; color: ${p}; font-weight: 600; margin-bottom: 0.75rem;">${d}</div>`;c.scenario===2?(h+=`<div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.75rem;">`,h+=`<div style="text-align: center;">${m(e)}<div style="${x} margin-top: 0.25rem; opacity: 0.6;">Input</div><div style="${x} font-family: var(--type-code-inline-family);">${e}</div><div style="${x} opacity: 0.6;">${c.ratio.toFixed(2)}:1</div></div>`,h+=`<div style="font-size: 1.25rem; opacity: 0.4;">→</div>`,h+=`<div style="text-align: center;">${m(c.anchorHex)}<div style="${x} margin-top: 0.25rem; opacity: 0.6;">Adjusted</div><div style="${x} font-family: var(--type-code-inline-family);">${c.anchorHex}</div><div style="${x} opacity: 0.6;">${c.adjustedRatio?.toFixed(2)}:1</div></div>`,h+=`</div>`):h+=`<div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem;">${m(e)}<span style="${x}"><span style="font-family: var(--type-code-inline-family);">${e}</span> — Contrast with white: ${c.ratio.toFixed(2)}:1</span></div>`,i&&(i.innerHTML=h),a&&(a.innerHTML=l(c,!1)),o&&(o.innerHTML=l(u,!0));let g=c.steps.map(e=>`${e.token}: ${e.hex};`).join(`
`),_=u.steps.map(e=>`${e.token.replace(t,t+`-dark`)}: ${e.hex};`).join(`
`);s&&(s.textContent=`/* Light Mode */\n${g}\n\n/* Dark Mode */\n${_}`)};n?.addEventListener(`input`,u),r?.addEventListener(`change`,u),c?.addEventListener(`click`,async()=>{let e=s?.textContent??``;try{await navigator.clipboard.writeText(e)}catch{if(s){let e=document.createRange();e.selectNodeContents(s);let t=window.getSelection();t?.removeAllRanges(),t?.addRange(e),document.execCommand(`copy`)}}c&&c.setAttribute(`label`,`Copied!`),setTimeout(()=>{c&&c.setAttribute(`label`,`Copy CSS`)},1500)}),u()},0),t`
      <div id="${e}" data-theme=${h} data-mode=${m()} style=${p}>
        <h1 style="${g.h1}">Color Generator Tool</h1>
        <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.subsection};">
          Enter an anchor color to preview an accessible 12-step palette. The tool validates WCAG contrast and applies the appropriate scenario.
        </p>

        <div style="margin-bottom: ${f.subsection};">
          <mms-inline-alert
            alert-type="caution"
            role="note"
            aria-live="off"
            .dismissible=${!1}
            summary="Demo tool:"
            message="This generator is for exploration and simulation. Official brand themes are authored and published by the DS team as @mms/theme-[client] packages."
          ></mms-inline-alert>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: ${f.content}; margin-bottom: ${f.subsection}; align-items: flex-start;">
          <mms-text-field
            id="hex-input"
            label="Anchor color"
            value="#0066CC"
            style="width: 160px;"
          ></mms-text-field>
          <mms-select
            id="name-input"
            label="Token name"
            style="width: 160px;"
            .value=${`primary`}
            .options=${[{value:`primary`,label:`primary`},{value:`secondary`,label:`secondary`},{value:`accent`,label:`accent`}]}
          ></mms-select>
        </div>

        <div id="result-area" style="margin-bottom: ${f.subsection};"></div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: ${f.subsection}; margin-bottom: ${f.subsection};">
          <div>
            <h3 style="${g.h3}">Light mode</h3>
            <div id="light-scale-area" style="background: #ffffff; padding: var(--spacing-md1); border-radius: var(--radius-md); border: var(--border-width-xs) solid var(--color-border-subtle);"></div>
          </div>
          <div>
            <h3 style="${g.h3}">Dark mode</h3>
            <div id="dark-scale-area" style="background: #111111; padding: var(--spacing-md1); border-radius: var(--radius-md);"></div>
          </div>
        </div>

        <h3 style="${g.h3}">CSS output</h3>
        <div>
          <pre id="css-output" data-hl="off" style="${l.pre} height: 320px; margin: 0 0 ${f.content}; box-sizing: border-box; overflow: auto;"></pre>
          <mms-button id="copy-btn" variant="secondary" size="sm" label="Copy CSS"></mms-button>
        </div>
      </div>
    `}},q={name:`Color Tiering`,render:()=>t`
    <div data-theme=${h} data-mode=${m()} style=${p}>
      <h1 style="${g.h1}">Color tiering</h1>
      <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.subsection};">
        Not all brand colors can be used for all purposes. WCAG accessibility requirements constrain what each palette can safely do.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${f.subsection};">
        <div slot="body-content">
          <h3 style="${g.h3}">Why some palettes show fewer steps</h3>
          <p style="${g.bodySm} ${l.muted}">
            When viewing Brand Colors, you'll notice some palettes show all 12 steps while others show only 3 or 5. This is intentional — the tier classification system ensures we never use a color for a purpose it cannot safely support.
          </p>
        </div>
      </mms-card>

      <hr style="${C}" />

      <h2 style="${g.h2}">The three tiers</h2>
      
      <div style="display: flex; flex-direction: column; gap: ${f.content}; margin-bottom: ${f.subsection};">
        <!-- Tier 1 -->
        <div style="${l.panel}">
          <div style="display: flex; align-items: center; gap: ${f.content}; margin-bottom: ${f.content};">
            ${v(1)}
            <strong style="${g.body}">Full scale (all 12 steps)</strong>
          </div>
          <p style="${g.bodySm} ${l.muted} margin-bottom: ${f.content};">
            The anchor color (step 9) achieves <strong>4.5:1+ contrast</strong> against white, qualifying for WCAG AA text contrast. The full scale can be generated because there's enough contrast headroom.
          </p>
          <div style="display: flex; gap: 4px; margin-bottom: ${f.label};">
            ${[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t`
              <div style="width: 32px; height: 24px; background: ${e<=3?`hsl(260, 60%, ${100-e*3}%)`:e<=6?`hsl(260, 50%, ${90-e*6}%)`:e<=8?`hsl(260, 40%, ${85-e*6}%)`:`hsl(260, 60%, ${70-e*5}%)`}; border-radius: 3px;${e<=2?` border: 1px solid rgba(0,0,0,0.1);`:``}"></div>
            `)}
          </div>
          <p style="${g.caption} ${l.muted}">
            <strong>Supports:</strong> Buttons, inputs, links, badges, tabs, cards, borders, text — all interactive components
          </p>
        </div>

        <!-- Tier 2 -->
        <div style="${l.panel}">
          <div style="display: flex; align-items: center; gap: ${f.content}; margin-bottom: ${f.content};">
            ${v(2)}
            <strong style="${g.body}">Text + surface (steps 1, 2, 9, 11, 12)</strong>
          </div>
          <p style="${g.bodySm} ${l.muted} margin-bottom: ${f.content};">
            The anchor satisfies 4.5:1 text contrast, but <strong>visual gap constraints</strong> prevent generating the full border/element range (steps 3–8). The palette can still provide branded text and tinted surfaces.
          </p>
          <div style="display: flex; gap: 4px; margin-bottom: ${f.label};">
            ${[1,2,null,null,null,null,null,null,9,null,11,12].map((e,n)=>t`
              <div style="width: 32px; height: 24px; ${e?`background: hsl(170, 50%, ${e<=2?97-e*2:60-e*4}%);`:`background: transparent; border: 1px dashed rgba(128,128,128,0.2);`} border-radius: 3px;${e&&e<=2?` border: 1px solid rgba(0,0,0,0.1);`:``}"></div>
            `)}
          </div>
          <p style="${g.caption} ${l.muted}">
            <strong>Supports:</strong> Branded text, tinted backgrounds (cards, sections), solid badges
          </p>
        </div>

        <!-- Tier 3 -->
        <div style="${l.panel}">
          <div style="display: flex; align-items: center; gap: ${f.content}; margin-bottom: ${f.content};">
            ${v(3)}
            <strong style="${g.body}">Decorative only (steps 1, 2, 9)</strong>
          </div>
          <p style="${g.bodySm} ${l.muted} margin-bottom: ${f.content};">
            The anchor color is too light (< 4.5:1 contrast against white) to carry text. The palette is limited to <strong>decorative use only</strong> — tinted backgrounds and visual fills that don't require text contrast.
          </p>
          <div style="display: flex; gap: 4px; margin-bottom: ${f.label};">
            ${[1,2,null,null,null,null,null,null,9,null,null,null].map((e,n)=>t`
              <div style="width: 32px; height: 24px; ${e?`background: hsl(100, 45%, ${e<=2?97-e*2:65}%);`:`background: transparent; border: 1px dashed rgba(128,128,128,0.2);`} border-radius: 3px;${e&&e<=2?` border: 1px solid rgba(0,0,0,0.1);`:``}"></div>
            `)}
          </div>
          <p style="${g.caption} ${l.muted}">
            <strong>Supports:</strong> Tinted section backgrounds, decorative fills, visual accents (no text)
          </p>
        </div>
      </div>

      <hr style="${C}" />

      <h2 style="${g.h2}">WCAG constraints</h2>
      <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">
        The tier classification is determined by testing the anchor color (step 9) against WCAG success criteria:
      </p>
      
      <table style="${l.table} margin-bottom: ${f.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">Requirement</th>
            <th style="${l.th}">WCAG SC</th>
            <th style="${l.th}">Ratio</th>
            <th style="${l.th}">Required for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td}">Text contrast</td>
            <td style="${l.td} ${g.monoSm}">1.4.3</td>
            <td style="${l.td} ${g.monoSm}">4.5:1</td>
            <td style="${l.td}">Tier 1, Tier 2</td>
          </tr>
          <tr>
            <td style="${l.td}">UI component contrast</td>
            <td style="${l.td} ${g.monoSm}">1.4.11</td>
            <td style="${l.td} ${g.monoSm}">3:1</td>
            <td style="${l.td}">Tier 1 only (borders, fills)</td>
          </tr>
          <tr>
            <td style="${l.td}">Visual gap (luminance)</td>
            <td style="${l.td} ${g.monoSm}">—</td>
            <td style="${l.td} ${g.monoSm}">≥0.03/step</td>
            <td style="${l.td}">Tier 1 only (scale generation)</td>
          </tr>
        </tbody>
      </table>

      <hr style="${C}" />

      <h2 style="${g.h2}">Current theme classifications</h2>
      <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">
        Each brand palette has been classified based on its anchor color's accessibility characteristics:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: ${f.content}; margin-bottom: ${f.subsection};">
        <!-- Maximus -->
        <div style="${l.panel}">
          <h3 style="${g.h3}">${o.maximus}</h3>
          <div style="display: flex; flex-direction: column; gap: ${f.content};">
            <div style="display: flex; align-items: center; gap: ${f.label};">
              ${v(1)}
              <span style="${g.bodySm}">Primary</span>
              <span style="${g.caption} ${l.muted} margin-left: auto;">9.81:1</span>
            </div>
            <div style="display: flex; align-items: center; gap: ${f.label};">
              ${v(1)}
              <span style="${g.bodySm}">Secondary</span>
              <span style="${g.caption} ${l.muted} margin-left: auto;">6.90:1</span>
            </div>
            <div style="display: flex; align-items: center; gap: ${f.label};">
              ${v(3)}
              <span style="${g.bodySm}">Accent</span>
              <span style="${g.caption} ${l.muted} margin-left: auto;">2.23:1</span>
            </div>
          </div>
        </div>

        <!-- VA.gov -->
        <div style="${l.panel}">
          <h3 style="${g.h3}">${o.ves}</h3>
          <div style="display: flex; flex-direction: column; gap: ${f.content};">
            <div style="display: flex; align-items: center; gap: ${f.label};">
              ${v(1)}
              <span style="${g.bodySm}">Primary</span>
              <span style="${g.caption} ${l.muted} margin-left: auto;">5.15:1</span>
            </div>
            <div style="display: flex; align-items: center; gap: ${f.label};">
              ${v(3)}
              <span style="${g.bodySm}">Secondary</span>
              <span style="${g.caption} ${l.muted} margin-left: auto;">3.28:1</span>
            </div>
            <div style="display: flex; align-items: center; gap: ${f.label};">
              ${v(2)}
              <span style="${g.bodySm}">Accent</span>
              <span style="${g.caption} ${l.muted} margin-left: auto;">4.54:1</span>
            </div>
          </div>
        </div>
      </div>

      <hr style="${C}" />

      <h2 style="${g.h2}">Safe usage patterns</h2>
      <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">
        When building UI, choose colors based on the component's accessibility requirements:
      </p>

      <table style="${l.table} margin-bottom: ${f.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">Component Type</th>
            <th style="${l.th} text-align: center;">Tier 1</th>
            <th style="${l.th} text-align: center;">Tier 2</th>
            <th style="${l.th} text-align: center;">Tier 3</th>
          </tr>
        </thead>
        <tbody>
          ${[[`Solid buttons`,!0,!0,!1],[`Input borders`,!0,!1,!1],[`Interactive hover states`,!0,!1,!1],[`Branded text`,!0,!0,!1],[`Tinted section backgrounds`,!0,!0,!0],[`Decorative fills / icons`,!0,!0,!0]].map(([e,...n])=>t`
            <tr>
              <td style="${l.td}">${e}</td>
              ${n.map(e=>t`
                <td style="${l.td} ${e?w:T}"><mms-icon name=${e?`check`:`x`} size="md" label=${e?`Supported`:`Not supported`}></mms-icon></td>
              `)}
            </tr>
          `)}
        </tbody>
      </table>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${f.subsection};">
        <div slot="body-content">
          <h3 style="${g.h3}">Developer guidance</h3>
          <p style="${g.caption} ${l.muted}">
            When a design calls for a palette color, check its tier first. If the tier doesn't support the intended use (e.g., using a Tier 3 color for button text), flag it as an accessibility issue. The palette boundaries protect the end user.
          </p>
        </div>
      </mms-card>

      <hr style="${C}" />

      <h2 style="${g.h2}">Related documentation</h2>
      <ul style="${g.body} max-width: ${d}; margin: 0; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${f.label};"><strong>Brand colors</strong> — View the actual palettes with tier-based visibility</li>
        <li style="margin-bottom: ${f.label};"><strong>Color generator</strong> — How palettes are generated and classified</li>
        <li style="margin-bottom: ${f.label};"><code style="${g.monoSm}">docs/color-palette-generation.md</code> — Full technical specification</li>
      </ul>
    </div>
  `},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Color Framework</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX};">
        The 12-step scale is a purpose-driven color system. Instead of picking arbitrary shades, each step number maps to a specific UI role. This makes component styling predictable and consistent.
      </p>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Step purposes — light mode (reference)</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Below is <strong>Radix Blue</strong> as a reference example — this is not our brand palette. It demonstrates how the 12-step structure maps to UI purposes.
      </p>
      <div style="background: #ffffff; padding: var(--spacing-lg1); border-radius: var(--radius-md); border: var(--border-width-xs) solid var(--color-border-default); margin-bottom: \${space.subsection};">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: \${space.label};">
          <div style="height: 40px; background: #fbfdff; border-radius: 4px; border: 1px solid rgba(128,128,128,0.15);"></div>
          <div style="height: 40px; background: #f4faff; border-radius: 4px; border: 1px solid rgba(128,128,128,0.15);"></div>
          <div style="height: 40px; background: #e6f4fe; border-radius: 4px;"></div>
          <div style="height: 40px; background: #d5efff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #c2e5ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #acd8fc; border-radius: 4px;"></div>
          <div style="height: 40px; background: #8ec8f6; border-radius: 4px;"></div>
          <div style="height: 40px; background: #5eb1ef; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0090ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0588f0; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0d74ce; border-radius: 4px;"></div>
          <div style="height: 40px; background: #113264; border-radius: 4px;"></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="text-align: center; \${t.monoSm} color: #1a1a1a; opacity: 0.6;">\${step}</div>
          \`)}
        </div>
      </div>

      <h3 style="\${t.h3}">Per-step reference</h3>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th} width: 60px;">Step</th>
            <th style="\${doc.th}">Purpose</th>
            <th style="\${doc.th}">Example Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">1</td>
            <td style="\${doc.td}">Page</td>
            <td style="\${doc.td} \${doc.muted}">Body background, main canvas</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">2</td>
            <td style="\${doc.td}">Surface</td>
            <td style="\${doc.td} \${doc.muted}">Cards, sidebars, panels, table rows</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">3</td>
            <td style="\${doc.td}">Element</td>
            <td style="\${doc.td} \${doc.muted}">Ghost button, dropdown item, list item default</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">4</td>
            <td style="\${doc.td}">Element hovered</td>
            <td style="\${doc.td} \${doc.muted}">Hover state on interactive elements</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">5</td>
            <td style="\${doc.td}">Element pressed</td>
            <td style="\${doc.td} \${doc.muted}">Active/pressed state, selected item</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">6</td>
            <td style="\${doc.td}">Separator</td>
            <td style="\${doc.td} \${doc.muted}">Dividers, card borders, subtle accent lines</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">7</td>
            <td style="\${doc.td}">Border</td>
            <td style="\${doc.td} \${doc.muted}">Input borders, button outlines</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">8</td>
            <td style="\${doc.td}">Border hovered</td>
            <td style="\${doc.td} \${doc.muted}">Hover borders, emphasized outlines</td>
          </tr>
          <tr style="background: var(--color-surface-default);">
            <td style="\${doc.td} \${t.monoSm} font-weight: 600;">9</td>
            <td style="\${doc.td} font-weight: 600;">Solid (anchor)</td>
            <td style="\${doc.td} \${doc.muted}">Primary buttons, badges, filled elements</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">10</td>
            <td style="\${doc.td}">Solid hovered</td>
            <td style="\${doc.td} \${doc.muted}">Hover state on solid fills</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">11</td>
            <td style="\${doc.td}">Text muted</td>
            <td style="\${doc.td} \${doc.muted}">Placeholder, secondary labels, captions</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">12</td>
            <td style="\${doc.td}">Text</td>
            <td style="\${doc.td} \${doc.muted}">Body text, headings, high-contrast labels</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Step purposes — dark mode (reference)</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Dark mode uses a <strong>separate palette</strong>, not inverted colors. Below is <strong>Radix Blue Dark</strong> as a reference example — this is not our brand palette. Notice step 9 is still blue, just tuned for dark backgrounds.
      </p>
      <div style="background: #0d1520; padding: var(--spacing-lg1); border-radius: var(--radius-md); margin-bottom: \${space.subsection};">
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px; margin-bottom: \${space.label};">
          <div style="height: 40px; background: #0d1520; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);"></div>
          <div style="height: 40px; background: #111927; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);"></div>
          <div style="height: 40px; background: #0d2847; border-radius: 4px;"></div>
          <div style="height: 40px; background: #003362; border-radius: 4px;"></div>
          <div style="height: 40px; background: #004074; border-radius: 4px;"></div>
          <div style="height: 40px; background: #104d87; border-radius: 4px;"></div>
          <div style="height: 40px; background: #205d9e; border-radius: 4px;"></div>
          <div style="height: 40px; background: #2870bd; border-radius: 4px;"></div>
          <div style="height: 40px; background: #0090ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #3b9eff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #70b8ff; border-radius: 4px;"></div>
          <div style="height: 40px; background: #c2e6ff; border-radius: 4px;"></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;">
          \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
            <div style="text-align: center; \${t.monoSm} color: #ffffff; opacity: 0.6;">\${step}</div>
          \`)}
        </div>
      </div>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX};">
        The <strong>step purposes remain identical</strong> in dark mode — only the palette values change. Step 1 is still page, step 9 is still solid. This means component code stays the same across modes.
      </p>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Usage patterns</h2>

      <h3 style="\${t.h3}">Elements (list items, dropdowns, ghost buttons)</h3>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};">
.list-item {
  background: var(--color-neutral-3);      /* element */
}
.list-item:hover {
  background: var(--color-neutral-4);      /* element hovered */
}
.list-item[aria-selected="true"] {
  background: var(--color-primary-5);      /* element pressed */
}</pre>

      <h3 style="\${t.h3}">Solids (buttons, badges)</h3>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};">
.button-primary {
  background: var(--color-primary-9);      /* solid */
  color: var(--color-text-on-primary);     /* white text */
}
.button-primary:hover {
  background: var(--color-primary-10);     /* solid hovered */
}</pre>

      <h3 style="\${t.h3}">Borders (separators, inputs, cards)</h3>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};">
.divider {
  border-top: 1px solid var(--color-neutral-6); /* separator */
}
.card {
  border: 1px solid var(--color-neutral-6);     /* separator */
}
.input {
  border: 1px solid var(--color-neutral-7);     /* border */
}
.input:hover {
  border: 1px solid var(--color-neutral-8);     /* border hovered */
}
.input:focus {
  outline: 2px solid var(--focus-ring-color);   /* focus ring — utility, NOT border */
}</pre>

      <h3 style="\${t.h3}">Text</h3>
      <pre style="\${doc.pre}">
.body {
  color: var(--color-neutral-12);          /* text */
}
.caption {
  color: var(--color-neutral-11);          /* text muted */
}
.link {
  color: var(--color-primary-11);          /* text muted (brand) */
}</pre>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Why this model?</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Traditional color scales (like Tailwind's 50-900) require developers to guess which shade fits each use case. "Should hover be 600 or 700?" becomes tribal knowledge.
      </p>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        With the 12-step model: <strong>Step 4 is always hover. Step 9 is always the solid fill. Step 12 is always high-contrast text.</strong> The step number defines the purpose, not just the lightness.
      </p>

      <div style="margin-top: \${space.subsection};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=\${false}
          summary="Note:"
          message="Focus rings use our structural utility token (--focus-ring-color), NOT step 8. This ensures consistent accessibility regardless of brand theme."
        ></mms-inline-alert>
      </div>
    </div>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Color Generator',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Color Generator</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX};">
        When onboarding a new brand, we programmatically generate accessible 12-step palettes from a single anchor color. The generator uses OKLCH color space and validates WCAG contrast requirements.
      </p>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Accessibility by design</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The 12-step system isn't just about visual organization — it's engineered to guarantee WCAG contrast ratios. Radix designed specific <strong>step pairings</strong> that always meet accessibility thresholds.
      </p>

      <h3 style="\${t.h3}">Contrast pairing guarantees</h3>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        These pairings are pre-validated to meet WCAG AA requirements:
      </p>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Pairing</th>
            <th style="\${doc.th}">Min Ratio</th>
            <th style="\${doc.th}">WCAG Level</th>
            <th style="\${doc.th}">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">Step 9 + <code>-9-on</code></td>
            <td style="\${doc.td}">4.5:1</td>
            <td style="\${doc.td}">AA Normal</td>
            <td style="\${doc.td} \${doc.muted}">Primary button text (auto-calculated)</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">Step 11 on Step 1</td>
            <td style="\${doc.td}">4.5:1</td>
            <td style="\${doc.td}">AA Normal</td>
            <td style="\${doc.td} \${doc.muted}">Secondary text on app bg</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">Step 12 on Step 1–2</td>
            <td style="\${doc.td}">7:1</td>
            <td style="\${doc.td}">AAA Normal</td>
            <td style="\${doc.td} \${doc.muted}">Primary text on surfaces</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">Step 9 on Step 1–2</td>
            <td style="\${doc.td}">3:1</td>
            <td style="\${doc.td}">AA Large/UI</td>
            <td style="\${doc.td} \${doc.muted}">UI component boundaries</td>
          </tr>
        </tbody>
      </table>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block;">
        <div slot="body-content">
          <p style="\${t.bodySm}">
            <strong>Why this matters:</strong> You don't check contrast manually. The generator outputs <code style="\${t.mono}">-9-on</code> and <code style="\${t.mono}">-10-on</code> tokens that auto-select white (<code style="\${t.mono}">#ffffff</code>) or dark (<code style="\${t.mono}">#060606</code>) text based on which provides better contrast. Components reference per-color tokens like <code style="\${t.mono}">--color-text-on-primary</code>, <code style="\${t.mono}">--color-text-on-secondary</code>, <code style="\${t.mono}">--color-text-on-accent</code>, and <code style="\${t.mono}">--color-text-on-onyx</code> — each swapping appropriately for theme and mode.
          </p>
        </div>
      </mms-card>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Why OKLCH?</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Traditional color spaces (HSL, RGB) have a critical flaw: adjusting lightness causes <strong>hue shifts</strong>. A blue darkened in HSL drifts toward purple. This breaks the visual consistency of a color scale.
      </p>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        <strong>OKLCH</strong> (Oklab Lightness-Chroma-Hue) provides perceptually uniform lightness. Changing L doesn't shift the hue — a blue stays blue across all 12 steps. This is essential for generating accessible scales where each step must maintain predictable contrast relationships.
      </p>

      <h3 style="\${t.h3}">OKLCH components</h3>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <tbody>
          <tr>
            <td style="\${doc.td} \${t.monoSm} font-weight: 600; width: 80px;">L</td>
            <td style="\${doc.td}">Lightness (0–1)</td>
            <td style="\${doc.td} \${doc.muted}">Perceptually uniform — 0.5 looks "half bright"</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm} font-weight: 600;">C</td>
            <td style="\${doc.td}">Chroma (0–0.4+)</td>
            <td style="\${doc.td} \${doc.muted}">Color intensity — 0 is grayscale</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm} font-weight: 600;">H</td>
            <td style="\${doc.td}">Hue (0–360°)</td>
            <td style="\${doc.td} \${doc.muted}">Color angle — preserved across the scale</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Three-tier compliance model</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The generator validates each anchor color against WCAG contrast requirements and applies one of three scenarios:
      </p>

      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Scenario</th>
            <th style="\${doc.th}">Contrast</th>
            <th style="\${doc.th}">Behavior</th>
            <th style="\${doc.th}">Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">1 — Full</td>
            <td style="\${doc.td}">≥ 4.5:1</td>
            <td style="\${doc.td}">Anchor passes — full scale generated</td>
            <td style="\${doc.td} \${t.monoSm}">--color-{name}-1 … 12</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">2 — Adjusted</td>
            <td style="\${doc.td}">4.0 – 4.5:1</td>
            <td style="\${doc.td}">Minor adjustment applied, then full scale</td>
            <td style="\${doc.td} \${t.monoSm}">--color-{name}-1 … 12</td>
          </tr>
          <tr>
            <td style="\${doc.td} \${t.monoSm}">3 — Decorative</td>
            <td style="\${doc.td}">< 4.0:1</td>
            <td style="\${doc.td}">Decorative use only — no solid fills or text</td>
            <td style="\${doc.td} \${t.monoSm}">--color-{name}-decorative-1 … 9</td>
          </tr>
        </tbody>
      </table>

      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX};">
        See the <strong>Color Generator Tool</strong> to interactively explore how different anchor colors produce palettes under each scenario.
      </p>
    </div>
  \`
}`,...D.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Color Generator Tool',
  render: () => {
    const containerId = \`generator-\${Math.random().toString(36).slice(2, 9)}\`;
    const initGenerator = () => {
      const container = document.getElementById(containerId);
      if (!container) return;
      const hexInput = container.querySelector<HTMLElement & {
        value: string;
      }>('#hex-input');
      const nameInput = container.querySelector<HTMLElement & {
        value: string;
      }>('#name-input');
      const resultArea = container.querySelector('#result-area');
      const lightScaleArea = container.querySelector('#light-scale-area');
      const darkScaleArea = container.querySelector('#dark-scale-area');
      const cssArea = container.querySelector<HTMLElement>('#css-output');
      const copyBtn = container.querySelector('#copy-btn');
      const renderScale = (result: ReturnType<typeof generateScale>, isDark: boolean) => {
        let html = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(65px, 1fr)); gap: 6px;">';
        const labelColor = isDark ? 'rgba(255,255,255,0.7)' : 'inherit';
        result.steps.forEach(s => {
          const textColor = isDark ? s.step >= 11 ? '#1a1a1a' : '#fff' : s.step >= 9 ? '#fff' : '#1a1a1a';
          const border = !isDark && s.step <= 2 ? ' border: 1px solid rgba(128,128,128,0.2);' : isDark && s.step <= 3 ? ' border: 1px solid rgba(255,255,255,0.15);' : '';
          html += \`<div style="text-align: center;"><div style="height: 40px; border-radius: 5px; background: \${s.hex}; display: flex; align-items: center; justify-content: center; \${SM} font-weight: 700; color: \${textColor};\${border}">\${s.step}</div><div style="\${SM} margin-top: 3px; color: \${labelColor};">\${s.name}</div></div>\`;
        });
        html += '</div>';
        return html;
      };
      const update = () => {
        const hex = hexInput?.value || '#0066CC';
        const name = nameInput?.value || 'brand';
        if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) {
          if (resultArea) resultArea.innerHTML = '<span style="color: #EF4444;">Invalid hex format. Use #RRGGBB.</span>';
          return;
        }
        const lightResult = generateScale(hex, false, name);
        const darkResult = generateScale(hex, true, name);
        const scenarioLabels = {
          1: ['✓ Full Scale', 'rgba(34, 197, 94, 0.15)', '#16A34A'],
          2: ['⚠ Adjusted', 'rgba(251, 191, 36, 0.15)', '#D97706'],
          3: ['✗ Decorative Only', 'rgba(239, 68, 68, 0.15)', '#DC2626']
        };
        const [label, bg, color] = scenarioLabels[lightResult.scenario];
        const swatch = (c: string) => \`<span style="display: inline-block; width: 24px; height: 24px; border-radius: 4px; background: \${c}; vertical-align: middle; border: 1px solid rgba(128,128,128,0.2);"></span>\`;
        let info = \`<div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 6px; background: \${bg}; color: \${color}; font-weight: 600; margin-bottom: 0.75rem;">\${label}</div>\`;
        if (lightResult.scenario === 2) {
          info += \`<div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.75rem;">\`;
          info += \`<div style="text-align: center;">\${swatch(hex)}<div style="\${SM} margin-top: 0.25rem; opacity: 0.6;">Input</div><div style="\${SM} font-family: var(--type-code-inline-family);">\${hex}</div><div style="\${SM} opacity: 0.6;">\${lightResult.ratio.toFixed(2)}:1</div></div>\`;
          info += \`<div style="font-size: 1.25rem; opacity: 0.4;">→</div>\`;
          info += \`<div style="text-align: center;">\${swatch(lightResult.anchorHex)}<div style="\${SM} margin-top: 0.25rem; opacity: 0.6;">Adjusted</div><div style="\${SM} font-family: var(--type-code-inline-family);">\${lightResult.anchorHex}</div><div style="\${SM} opacity: 0.6;">\${lightResult.adjustedRatio?.toFixed(2)}:1</div></div>\`;
          info += \`</div>\`;
        } else {
          info += \`<div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem;">\${swatch(hex)}<span style="\${SM}"><span style="font-family: var(--type-code-inline-family);">\${hex}</span> — Contrast with white: \${lightResult.ratio.toFixed(2)}:1</span></div>\`;
        }
        if (resultArea) resultArea.innerHTML = info;
        if (lightScaleArea) lightScaleArea.innerHTML = renderScale(lightResult, false);
        if (darkScaleArea) darkScaleArea.innerHTML = renderScale(darkResult, true);
        const lightCss = lightResult.steps.map(s => \`\${s.token}: \${s.hex};\`).join('\\n');
        const darkCss = darkResult.steps.map(s => \`\${s.token.replace(name, name + '-dark')}: \${s.hex};\`).join('\\n');
        if (cssArea) cssArea.textContent = \`/* Light Mode */\\n\${lightCss}\\n\\n/* Dark Mode */\\n\${darkCss}\`;
      };
      hexInput?.addEventListener('input', update);
      nameInput?.addEventListener('change', update);
      copyBtn?.addEventListener('click', async () => {
        const text = cssArea?.textContent ?? '';
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          // Clipboard API unavailable (e.g. an insecure origin): select the text and use the legacy copy.
          if (cssArea) {
            const range = document.createRange();
            range.selectNodeContents(cssArea);
            const selection = window.getSelection();
            selection?.removeAllRanges();
            selection?.addRange(range);
            document.execCommand('copy');
          }
        }
        if (copyBtn) copyBtn.setAttribute('label', 'Copied!');
        setTimeout(() => {
          if (copyBtn) copyBtn.setAttribute('label', 'Copy CSS');
        }, 1500);
      });
      update();
    };
    setTimeout(initGenerator, 0);
    return html\`
      <div id="\${containerId}" data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
        <h1 style="\${t.h1}">Color Generator Tool</h1>
        <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
          Enter an anchor color to preview an accessible 12-step palette. The tool validates WCAG contrast and applies the appropriate scenario.
        </p>

        <div style="margin-bottom: \${space.subsection};">
          <mms-inline-alert
            alert-type="caution"
            role="note"
            aria-live="off"
            .dismissible=\${false}
            summary="Demo tool:"
            message="This generator is for exploration and simulation. Official brand themes are authored and published by the DS team as @mms/theme-[client] packages."
          ></mms-inline-alert>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: \${space.content}; margin-bottom: \${space.subsection}; align-items: flex-start;">
          <mms-text-field
            id="hex-input"
            label="Anchor color"
            value="#0066CC"
            style="width: 160px;"
          ></mms-text-field>
          <mms-select
            id="name-input"
            label="Token name"
            style="width: 160px;"
            .value=\${'primary'}
            .options=\${[{
      value: 'primary',
      label: 'primary'
    }, {
      value: 'secondary',
      label: 'secondary'
    }, {
      value: 'accent',
      label: 'accent'
    }]}
          ></mms-select>
        </div>

        <div id="result-area" style="margin-bottom: \${space.subsection};"></div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: \${space.subsection}; margin-bottom: \${space.subsection};">
          <div>
            <h3 style="\${t.h3}">Light mode</h3>
            <div id="light-scale-area" style="background: #ffffff; padding: var(--spacing-md1); border-radius: var(--radius-md); border: var(--border-width-xs) solid var(--color-border-subtle);"></div>
          </div>
          <div>
            <h3 style="\${t.h3}">Dark mode</h3>
            <div id="dark-scale-area" style="background: #111111; padding: var(--spacing-md1); border-radius: var(--radius-md);"></div>
          </div>
        </div>

        <h3 style="\${t.h3}">CSS output</h3>
        <div>
          <pre id="css-output" data-hl="off" style="\${doc.pre} height: 320px; margin: 0 0 \${space.content}; box-sizing: border-box; overflow: auto;"></pre>
          <mms-button id="copy-btn" variant="secondary" size="sm" label="Copy CSS"></mms-button>
        </div>
      </div>
    \`;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Color Tiering',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
      <h1 style="\${t.h1}">Color tiering</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Not all brand colors can be used for all purposes. WCAG accessibility requirements constrain what each palette can safely do.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <h3 style="\${t.h3}">Why some palettes show fewer steps</h3>
          <p style="\${t.bodySm} \${doc.muted}">
            When viewing Brand Colors, you'll notice some palettes show all 12 steps while others show only 3 or 5. This is intentional — the tier classification system ensures we never use a color for a purpose it cannot safely support.
          </p>
        </div>
      </mms-card>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">The three tiers</h2>
      
      <div style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <!-- Tier 1 -->
        <div style="\${doc.panel}">
          <div style="display: flex; align-items: center; gap: \${space.content}; margin-bottom: \${space.content};">
            \${tierChip(1)}
            <strong style="\${t.body}">Full scale (all 12 steps)</strong>
          </div>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            The anchor color (step 9) achieves <strong>4.5:1+ contrast</strong> against white, qualifying for WCAG AA text contrast. The full scale can be generated because there's enough contrast headroom.
          </p>
          <div style="display: flex; gap: 4px; margin-bottom: \${space.label};">
            \${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step => html\`
              <div style="width: 32px; height: 24px; background: \${step <= 3 ? \`hsl(260, 60%, \${100 - step * 3}%)\` : step <= 6 ? \`hsl(260, 50%, \${90 - step * 6}%)\` : step <= 8 ? \`hsl(260, 40%, \${85 - step * 6}%)\` : \`hsl(260, 60%, \${70 - step * 5}%)\`}; border-radius: 3px;\${step <= 2 ? ' border: 1px solid rgba(0,0,0,0.1);' : ''}"></div>
            \`)}
          </div>
          <p style="\${t.caption} \${doc.muted}">
            <strong>Supports:</strong> Buttons, inputs, links, badges, tabs, cards, borders, text — all interactive components
          </p>
        </div>

        <!-- Tier 2 -->
        <div style="\${doc.panel}">
          <div style="display: flex; align-items: center; gap: \${space.content}; margin-bottom: \${space.content};">
            \${tierChip(2)}
            <strong style="\${t.body}">Text + surface (steps 1, 2, 9, 11, 12)</strong>
          </div>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            The anchor satisfies 4.5:1 text contrast, but <strong>visual gap constraints</strong> prevent generating the full border/element range (steps 3–8). The palette can still provide branded text and tinted surfaces.
          </p>
          <div style="display: flex; gap: 4px; margin-bottom: \${space.label};">
            \${[1, 2, null, null, null, null, null, null, 9, null, 11, 12].map((step, idx) => html\`
              <div style="width: 32px; height: 24px; \${step ? \`background: hsl(170, 50%, \${step <= 2 ? 97 - step * 2 : 60 - step * 4}%);\` : 'background: transparent; border: 1px dashed rgba(128,128,128,0.2);'} border-radius: 3px;\${step && step <= 2 ? ' border: 1px solid rgba(0,0,0,0.1);' : ''}"></div>
            \`)}
          </div>
          <p style="\${t.caption} \${doc.muted}">
            <strong>Supports:</strong> Branded text, tinted backgrounds (cards, sections), solid badges
          </p>
        </div>

        <!-- Tier 3 -->
        <div style="\${doc.panel}">
          <div style="display: flex; align-items: center; gap: \${space.content}; margin-bottom: \${space.content};">
            \${tierChip(3)}
            <strong style="\${t.body}">Decorative only (steps 1, 2, 9)</strong>
          </div>
          <p style="\${t.bodySm} \${doc.muted} margin-bottom: \${space.content};">
            The anchor color is too light (< 4.5:1 contrast against white) to carry text. The palette is limited to <strong>decorative use only</strong> — tinted backgrounds and visual fills that don't require text contrast.
          </p>
          <div style="display: flex; gap: 4px; margin-bottom: \${space.label};">
            \${[1, 2, null, null, null, null, null, null, 9, null, null, null].map((step, idx) => html\`
              <div style="width: 32px; height: 24px; \${step ? \`background: hsl(100, 45%, \${step <= 2 ? 97 - step * 2 : 65}%);\` : 'background: transparent; border: 1px dashed rgba(128,128,128,0.2);'} border-radius: 3px;\${step && step <= 2 ? ' border: 1px solid rgba(0,0,0,0.1);' : ''}"></div>
            \`)}
          </div>
          <p style="\${t.caption} \${doc.muted}">
            <strong>Supports:</strong> Tinted section backgrounds, decorative fills, visual accents (no text)
          </p>
        </div>
      </div>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">WCAG constraints</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The tier classification is determined by testing the anchor color (step 9) against WCAG success criteria:
      </p>
      
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Requirement</th>
            <th style="\${doc.th}">WCAG SC</th>
            <th style="\${doc.th}">Ratio</th>
            <th style="\${doc.th}">Required for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}">Text contrast</td>
            <td style="\${doc.td} \${t.monoSm}">1.4.3</td>
            <td style="\${doc.td} \${t.monoSm}">4.5:1</td>
            <td style="\${doc.td}">Tier 1, Tier 2</td>
          </tr>
          <tr>
            <td style="\${doc.td}">UI component contrast</td>
            <td style="\${doc.td} \${t.monoSm}">1.4.11</td>
            <td style="\${doc.td} \${t.monoSm}">3:1</td>
            <td style="\${doc.td}">Tier 1 only (borders, fills)</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Visual gap (luminance)</td>
            <td style="\${doc.td} \${t.monoSm}">—</td>
            <td style="\${doc.td} \${t.monoSm}">≥0.03/step</td>
            <td style="\${doc.td}">Tier 1 only (scale generation)</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Current theme classifications</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Each brand palette has been classified based on its anchor color's accessibility characteristics:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <!-- Maximus -->
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">\${BRAND_LABELS.maximus}</h3>
          <div style="display: flex; flex-direction: column; gap: \${space.content};">
            <div style="display: flex; align-items: center; gap: \${space.label};">
              \${tierChip(1)}
              <span style="\${t.bodySm}">Primary</span>
              <span style="\${t.caption} \${doc.muted} margin-left: auto;">9.81:1</span>
            </div>
            <div style="display: flex; align-items: center; gap: \${space.label};">
              \${tierChip(1)}
              <span style="\${t.bodySm}">Secondary</span>
              <span style="\${t.caption} \${doc.muted} margin-left: auto;">6.90:1</span>
            </div>
            <div style="display: flex; align-items: center; gap: \${space.label};">
              \${tierChip(3)}
              <span style="\${t.bodySm}">Accent</span>
              <span style="\${t.caption} \${doc.muted} margin-left: auto;">2.23:1</span>
            </div>
          </div>
        </div>

        <!-- VA.gov -->
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">\${BRAND_LABELS.ves}</h3>
          <div style="display: flex; flex-direction: column; gap: \${space.content};">
            <div style="display: flex; align-items: center; gap: \${space.label};">
              \${tierChip(1)}
              <span style="\${t.bodySm}">Primary</span>
              <span style="\${t.caption} \${doc.muted} margin-left: auto;">5.15:1</span>
            </div>
            <div style="display: flex; align-items: center; gap: \${space.label};">
              \${tierChip(3)}
              <span style="\${t.bodySm}">Secondary</span>
              <span style="\${t.caption} \${doc.muted} margin-left: auto;">3.28:1</span>
            </div>
            <div style="display: flex; align-items: center; gap: \${space.label};">
              \${tierChip(2)}
              <span style="\${t.bodySm}">Accent</span>
              <span style="\${t.caption} \${doc.muted} margin-left: auto;">4.54:1</span>
            </div>
          </div>
        </div>
      </div>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Safe usage patterns</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        When building UI, choose colors based on the component's accessibility requirements:
      </p>

      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Component Type</th>
            <th style="\${doc.th} text-align: center;">Tier 1</th>
            <th style="\${doc.th} text-align: center;">Tier 2</th>
            <th style="\${doc.th} text-align: center;">Tier 3</th>
          </tr>
        </thead>
        <tbody>
          \${[['Solid buttons', true, true, false], ['Input borders', true, false, false], ['Interactive hover states', true, false, false], ['Branded text', true, true, false], ['Tinted section backgrounds', true, true, true], ['Decorative fills / icons', true, true, true]].map(([label, ...tiers]) => html\`
            <tr>
              <td style="\${doc.td}">\${label}</td>
              \${(tiers as boolean[]).map(ok => html\`
                <td style="\${doc.td} \${ok ? OK : NO}"><mms-icon name=\${ok ? 'check' : 'x'} size="md" label=\${ok ? 'Supported' : 'Not supported'}></mms-icon></td>
              \`)}
            </tr>
          \`)}
        </tbody>
      </table>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <h3 style="\${t.h3}">Developer guidance</h3>
          <p style="\${t.caption} \${doc.muted}">
            When a design calls for a palette color, check its tier first. If the tier doesn't support the intended use (e.g., using a Tier 3 color for button text), flag it as an accessibility issue. The palette boundaries protect the end user.
          </p>
        </div>
      </mms-card>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Related documentation</h2>
      <ul style="\${t.body} max-width: \${PROSE_MAX}; margin: 0; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Brand colors</strong> — View the actual palettes with tier-based visibility</li>
        <li style="margin-bottom: \${space.label};"><strong>Color generator</strong> — How palettes are generated and classified</li>
        <li style="margin-bottom: \${space.label};"><code style="\${t.monoSm}">docs/color-palette-generation.md</code> — Full technical specification</li>
      </ul>
    </div>
  \`
}`,...q.parameters?.docs?.source}}},J=[`Overview`,`ColorGenerator`,`ColorGeneratorTool`,`ColorTiering`]}))();export{D as ColorGenerator,K as ColorGeneratorTool,q as ColorTiering,E as Overview,J as __namedExportsOrder,S as default};