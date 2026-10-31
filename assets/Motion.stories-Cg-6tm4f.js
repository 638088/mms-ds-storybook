import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{t as r}from"./mms-card.component-Ae9XIj4r.js";import{a as i,c as a,d as o,i as s,n as c,o as l,r as u,u as d}from"./doc-styles-DkvR_Qyb.js";var f,p,m,h,g,_,v,y;e((()=>{n(),r(),a(),f={title:`Foundations/Motion`},p=[{token:`--motion-duration-instant`,value:`0ms`,label:`Instant`,usage:`Explicit no-animation override; reduced-motion fallback targets`},{token:`--motion-duration-fast`,value:`100ms`,label:`Fast`,usage:`Micro-interactions: checkbox fill, radio select, toggle thumb, focus ring`},{token:`--motion-duration-base`,value:`200ms`,label:`Base`,usage:`Standard state changes: hover background, button press, input border, link`},{token:`--motion-duration-moderate`,value:`300ms`,label:`Moderate`,usage:`Component transitions: dropdown open, tooltip, tab panel, accordion expand`},{token:`--motion-duration-slow`,value:`500ms`,label:`Slow`,usage:`Larger surface movements: modal enter/exit, drawer slide, toast appear`},{token:`--motion-duration-loop`,value:`1500ms`,label:`Loop`,usage:`Continuous ambient loops that never resolve — indeterminate loading-bar sweep`},{token:`--motion-duration-loop-fast`,value:`1000ms`,label:`Loop (fast)`,usage:`Faster loop tier for contexts where the default loop reads as sluggish — page-spinner speed="fast"`}],m=[{token:`--motion-easing-standard`,value:`cubic-bezier(0.2, 0, 0, 1)`,label:`Standard`,usage:`Repositioning within the page — element moves but stays on screen`},{token:`--motion-easing-enter`,value:`cubic-bezier(0, 0, 0.2, 1)`,label:`Enter`,usage:`Elements appearing — dropdown open, modal fade-in, tooltip show`},{token:`--motion-easing-exit`,value:`cubic-bezier(0.4, 0, 1, 1)`,label:`Exit`,usage:`Elements disappearing — dropdown close, modal fade-out, toast dismiss`},{token:`--motion-easing-linear`,value:`linear`,label:`Linear`,usage:`Opacity and color transitions — linear feels even on perceptible fades`},{token:`--motion-easing-loop`,value:`cubic-bezier(0.4, 0, 0.6, 1)`,label:`Loop`,usage:`Continuous ambient loops — symmetric, so the wrap point has no visible jerk`}],h=`
  @keyframes mms-slide {
    0%   { transform: translateX(0); }
    50%  { transform: translateX(120px); }
    100% { transform: translateX(0); }
  }
  .dur-track {
    position: relative;
    width: 146px; height: 14px;
  }
  .dur-track::before {
    content: '';
    position: absolute;
    top: 6px; left: 0; right: 0;
    height: 2px;
    background: rgba(59,91,219,0.12);
    border-radius: 1px;
  }
  .dur-dot {
    position: absolute;
    left: 0; top: 0;
    width: 14px; height: 14px; border-radius: 50%;
    background: #3b5bdb;
    transition-property: left;
    transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
  }
  .dur-row:hover .dur-dot { left: 132px; }
  .ease-dot {
    width: 14px; height: 14px; border-radius: 50%;
    background: #3b5bdb;
    animation: mms-slide 1.4s infinite;
  }
`,g=({token:e,value:n,label:r,usage:a})=>t`
  <div class="dur-row" style="display: flex; align-items: center; gap: ${d.content}; padding: var(--spacing-md1) 0; border-bottom: var(--border-width-xs) solid var(--color-border-subtle); cursor: default;">
    <div style="width: 160px; flex-shrink: 0; display: flex; align-items: center;">
      <div class="dur-track">
        <div class="dur-dot" style="transition-duration: ${n};"></div>
      </div>
    </div>
    <div style="flex: 1; min-width: 0;">
      <div style="${o.monoSm} display: block; margin-bottom: var(--spacing-xs2);">${e}</div>
      <div style="${o.caption} ${i.muted}">${a}</div>
    </div>
    <div style="text-align: right; flex-shrink: 0; min-width: 80px;">
      <div style="${o.mono} font-weight: 700; display: block; margin-bottom: var(--spacing-xs2);">${n}</div>
      <div style="${o.caption} ${i.muted}">${r}</div>
    </div>
  </div>
`,_=({token:e,value:n,label:r,usage:a})=>t`
  <div style="display: flex; align-items: center; gap: ${d.content}; padding: var(--spacing-md1) 0; border-bottom: var(--border-width-xs) solid var(--color-border-subtle);">
    <div style="width: 160px; flex-shrink: 0; display: flex; align-items: center; overflow: hidden;">
      <div class="ease-dot" style="animation-timing-function: ${n};"></div>
    </div>
    <div style="flex: 1; min-width: 0;">
      <div style="${o.monoSm} display: block; margin-bottom: var(--spacing-xs2);">${e}</div>
      <div style="${o.caption} ${i.muted}">${a}</div>
    </div>
    <div style="text-align: right; flex-shrink: 0; min-width: 200px;">
      <div style="${o.monoSm} font-weight: 700; display: block; margin-bottom: var(--spacing-xs2); word-break: break-all;">${n}</div>
      <div style="${o.caption} ${i.muted}">${r}</div>
    </div>
  </div>
`,v={name:`Motion Scale`,render:()=>t`
    <style>${h}</style>
    <div data-theme=${u} data-mode=${l()} style=${c}>

      <h1 style="${o.h1}">Motion</h1>
      <p style="${o.body} ${i.muted} max-width: ${s}; margin-bottom: ${d.content};">Duration and easing tokens for transitions and animations. Values are derived from Carbon (IBM) and Material Design 3, adapted for government UI readability. All motion must respect <code>prefers-reduced-motion</code>.</p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content" style="${o.caption}">
          <p style="margin: 0;"><strong>Section 508 / ADA Title II:</strong> Every component that uses motion must include a <code style="${o.monoSm}">prefers-reduced-motion: reduce</code> override setting all transition durations to <code style="${o.monoSm}">--motion-duration-instant</code>. Use the token, not CSS <code style="${o.monoSm}">none</code> — this preserves layout reflow without visual animation.</p>
        </div>
      </mms-card>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Reduced motion</h2>
      <p style="${o.body} ${i.muted} margin-bottom: ${d.content};">When <code style="${o.monoSm}">prefers-reduced-motion: reduce</code> is set, all transition durations must resolve to <code style="${o.monoSm}">--motion-duration-instant</code> (0ms). Use the token — not CSS <code style="${o.monoSm}">none</code> — so layout reflow still occurs without visual animation.</p>
      <div style="margin-bottom: ${d.subsection};">
        <div style="display: flex; align-items: center; gap: ${d.content}; padding: var(--spacing-md1) 0; border-bottom: var(--border-width-xs) solid var(--color-border-subtle);">
          <div style="width: 160px; flex-shrink: 0; display: flex; align-items: center;">
            <div style="position: relative; width: 146px; height: 14px;">
              <div style="position: absolute; top: 6px; left: 0; right: 0; height: 2px; background: rgba(59,91,219,0.12); border-radius: 1px;"></div>
              <div style="position: absolute; left: 0; top: 0; width: 14px; height: 14px; border-radius: 50%; background: #3b5bdb; opacity: 0.3;"></div>
            </div>
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="${o.monoSm} display: block; margin-bottom: var(--spacing-xs2);">prefers-reduced-motion: reduce</div>
            <div style="${o.caption} ${i.muted}">Browser media query — override all transition-duration to var(--motion-duration-instant)</div>
          </div>
          <div style="text-align: right; flex-shrink: 0; min-width: 80px;">
            <div style="${o.mono} font-weight: 700; display: block; margin-bottom: var(--spacing-xs2);">0ms</div>
            <div style="${o.caption} ${i.muted}">No motion</div>
          </div>
        </div>
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Duration</h2>
      <p style="${o.body} ${i.muted} margin-bottom: ${d.content};">How long the transition takes. Hover each row to trigger the transition at its actual token speed — 100ms snaps, 500ms glides.</p>
      <div style="margin-bottom: ${d.subsection};">
        ${p.map(g)}
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Easing</h2>
      <p style="${o.body} ${i.muted} margin-bottom: ${d.content};">The velocity curve of the transition. All dots below use the same 1.4s duration — the difference in feel comes entirely from the easing function.</p>
      <div style="margin-bottom: ${d.subsection};">
        ${m.map(_)}
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Reference CSS</h2>
      <pre style="${i.pre} margin: 0;">:root {
  /* Duration */
  --motion-duration-instant:  0ms;
  --motion-duration-fast:     100ms;
  --motion-duration-base:     200ms;
  --motion-duration-moderate: 300ms;
  --motion-duration-slow:     500ms;

  /* Easing */
  --motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-easing-enter:    cubic-bezier(0, 0, 0.2, 1);
  --motion-easing-exit:     cubic-bezier(0.4, 0, 1, 1);
  --motion-easing-linear:   linear;
}

/* Section 508 / ADA Title II — required on every animated component */
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: var(--motion-duration-instant) !important; }
}</pre>

    </div>
  `},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Motion Scale',
  render: () => html\`
    <style>\${DEMO_STYLE}</style>
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Motion</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">Duration and easing tokens for transitions and animations. Values are derived from Carbon (IBM) and Material Design 3, adapted for government UI readability. All motion must respect <code>prefers-reduced-motion</code>.</p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content" style="\${t.caption}">
          <p style="margin: 0;"><strong>Section 508 / ADA Title II:</strong> Every component that uses motion must include a <code style="\${t.monoSm}">prefers-reduced-motion: reduce</code> override setting all transition durations to <code style="\${t.monoSm}">--motion-duration-instant</code>. Use the token, not CSS <code style="\${t.monoSm}">none</code> — this preserves layout reflow without visual animation.</p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Reduced motion</h2>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.content};">When <code style="\${t.monoSm}">prefers-reduced-motion: reduce</code> is set, all transition durations must resolve to <code style="\${t.monoSm}">--motion-duration-instant</code> (0ms). Use the token — not CSS <code style="\${t.monoSm}">none</code> — so layout reflow still occurs without visual animation.</p>
      <div style="margin-bottom: \${space.subsection};">
        <div style="display: flex; align-items: center; gap: \${space.content}; padding: var(--spacing-md1) 0; border-bottom: var(--border-width-xs) solid var(--color-border-subtle);">
          <div style="width: 160px; flex-shrink: 0; display: flex; align-items: center;">
            <div style="position: relative; width: 146px; height: 14px;">
              <div style="position: absolute; top: 6px; left: 0; right: 0; height: 2px; background: rgba(59,91,219,0.12); border-radius: 1px;"></div>
              <div style="position: absolute; left: 0; top: 0; width: 14px; height: 14px; border-radius: 50%; background: #3b5bdb; opacity: 0.3;"></div>
            </div>
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="\${t.monoSm} display: block; margin-bottom: var(--spacing-xs2);">prefers-reduced-motion: reduce</div>
            <div style="\${t.caption} \${doc.muted}">Browser media query — override all transition-duration to var(--motion-duration-instant)</div>
          </div>
          <div style="text-align: right; flex-shrink: 0; min-width: 80px;">
            <div style="\${t.mono} font-weight: 700; display: block; margin-bottom: var(--spacing-xs2);">0ms</div>
            <div style="\${t.caption} \${doc.muted}">No motion</div>
          </div>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Duration</h2>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.content};">How long the transition takes. Hover each row to trigger the transition at its actual token speed — 100ms snaps, 500ms glides.</p>
      <div style="margin-bottom: \${space.subsection};">
        \${durationTokens.map(durationRow)}
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Easing</h2>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.content};">The velocity curve of the transition. All dots below use the same 1.4s duration — the difference in feel comes entirely from the easing function.</p>
      <div style="margin-bottom: \${space.subsection};">
        \${easingTokens.map(easingRow)}
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Reference CSS</h2>
      <pre style="\${doc.pre} margin: 0;">:root {
  /* Duration */
  --motion-duration-instant:  0ms;
  --motion-duration-fast:     100ms;
  --motion-duration-base:     200ms;
  --motion-duration-moderate: 300ms;
  --motion-duration-slow:     500ms;

  /* Easing */
  --motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-easing-enter:    cubic-bezier(0, 0, 0.2, 1);
  --motion-easing-exit:     cubic-bezier(0.4, 0, 1, 1);
  --motion-easing-linear:   linear;
}

/* Section 508 / ADA Title II — required on every animated component */
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: var(--motion-duration-instant) !important; }
}</pre>

    </div>
  \`
}`,...v.parameters?.docs?.source}}},y=[`MotionScale`]}))();export{v as MotionScale,y as __namedExportsOrder,f as default};