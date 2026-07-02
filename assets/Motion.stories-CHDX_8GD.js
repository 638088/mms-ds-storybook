import{i as e}from"./preload-helper-xPQekRTU.js";import{K as t,V as n}from"./iframe-CF8vETii.js";var r,i,a,o,s,c,l,u,d,f,p;e((()=>{n(),r={title:`Foundations/Motion`},i={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},a=`680px`,o=`960px`,s=[{token:`--motion-duration-instant`,value:`0ms`,label:`Instant`,usage:`Explicit no-animation override; reduced-motion fallback targets`},{token:`--motion-duration-fast`,value:`100ms`,label:`Fast`,usage:`Micro-interactions: checkbox fill, radio select, toggle thumb, focus ring`},{token:`--motion-duration-base`,value:`200ms`,label:`Base`,usage:`Standard state changes: hover background, button press, input border, link`},{token:`--motion-duration-moderate`,value:`300ms`,label:`Moderate`,usage:`Component transitions: dropdown open, tooltip, tab panel, accordion expand`},{token:`--motion-duration-slow`,value:`500ms`,label:`Slow`,usage:`Larger surface movements: modal enter/exit, drawer slide, toast appear`}],c=[{token:`--motion-easing-standard`,value:`cubic-bezier(0.2, 0, 0, 1)`,label:`Standard`,usage:`Repositioning within the page — element moves but stays on screen`},{token:`--motion-easing-enter`,value:`cubic-bezier(0, 0, 0.2, 1)`,label:`Enter`,usage:`Elements appearing — dropdown open, modal fade-in, tooltip show`},{token:`--motion-easing-exit`,value:`cubic-bezier(0.4, 0, 1, 1)`,label:`Exit`,usage:`Elements disappearing — dropdown close, modal fade-out, toast dismiss`},{token:`--motion-easing-linear`,value:`linear`,label:`Linear`,usage:`Opacity and color transitions — linear feels even on perceptible fades`}],l=`
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
`,u=({token:e,value:n,label:r,usage:a})=>t`
  <div class="dur-row" style="display: flex; align-items: center; gap: 1.5rem; padding: 1rem 0; border-bottom: 1px solid rgba(128,128,128,0.12); cursor: default;">
    <div style="width: 160px; flex-shrink: 0; display: flex; align-items: center;">
      <div class="dur-track">
        <div class="dur-dot" style="transition-duration: ${n};"></div>
      </div>
    </div>
    <div style="flex: 1; min-width: 0;">
      <div style="${i.monoSm} display: block; margin-bottom: 0.25rem;">${e}</div>
      <div style="${i.caption} opacity: 0.65;">${a}</div>
    </div>
    <div style="text-align: right; flex-shrink: 0; min-width: 80px;">
      <div style="${i.mono} font-weight: 700; display: block; margin-bottom: 0.15rem;">${n}</div>
      <div style="${i.caption} opacity: 0.65;">${r}</div>
    </div>
  </div>
`,d=({token:e,value:n,label:r,usage:a})=>t`
  <div style="display: flex; align-items: center; gap: 1.5rem; padding: 1rem 0; border-bottom: 1px solid rgba(128,128,128,0.12);">
    <div style="width: 160px; flex-shrink: 0; display: flex; align-items: center; overflow: hidden;">
      <div class="ease-dot" style="animation-timing-function: ${n};"></div>
    </div>
    <div style="flex: 1; min-width: 0;">
      <div style="${i.monoSm} display: block; margin-bottom: 0.25rem;">${e}</div>
      <div style="${i.caption} opacity: 0.65;">${a}</div>
    </div>
    <div style="text-align: right; flex-shrink: 0; min-width: 200px;">
      <div style="${i.monoSm} font-weight: 700; display: block; margin-bottom: 0.15rem; word-break: break-all;">${n}</div>
      <div style="${i.caption} opacity: 0.65;">${r}</div>
    </div>
  </div>
`,f={name:`Motion Scale`,render:()=>t`
    <style>${l}</style>
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${i.h1}">Motion</h1>
      <p style="${i.body} opacity: 0.85; max-width: ${a}; margin-bottom: 1.5rem;">Duration and easing tokens for transitions and animations. Values are derived from Carbon (IBM) and Material Design 3, adapted for government UI readability. All motion must respect <code>prefers-reduced-motion</code>.</p>

      <div style="margin-bottom: 2rem; padding: 0.875rem 1rem; background: rgba(251,191,36,0.1); border-left: 3px solid #f59e0b; border-radius: 0 4px 4px 0;">
        <p style="${i.caption}"><strong>Section 508 / ADA Title II:</strong> Every component that uses motion must include a <code>prefers-reduced-motion: reduce</code> override setting all transition durations to <code>--motion-duration-instant</code>. Use the token, not CSS <code>none</code> — this preserves layout reflow without visual animation.</p>
      </div>

      <h2 style="${i.h2}">Reduced Motion</h2>
      <p style="${i.body} opacity: 0.65; margin-bottom: 1rem;">When <code>prefers-reduced-motion: reduce</code> is set, all transition durations must resolve to <code>--motion-duration-instant</code> (0ms). Use the token — not CSS <code>none</code> — so layout reflow still occurs without visual animation.</p>
      <div style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; gap: 1.5rem; padding: 1rem 0; border-bottom: 1px solid rgba(128,128,128,0.12);">
          <div style="width: 160px; flex-shrink: 0; display: flex; align-items: center;">
            <div style="position: relative; width: 146px; height: 14px;">
              <div style="position: absolute; top: 6px; left: 0; right: 0; height: 2px; background: rgba(59,91,219,0.12); border-radius: 1px;"></div>
              <div style="position: absolute; left: 0; top: 0; width: 14px; height: 14px; border-radius: 50%; background: #3b5bdb; opacity: 0.3;"></div>
            </div>
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="${i.monoSm} display: block; margin-bottom: 0.25rem;">prefers-reduced-motion: reduce</div>
            <div style="${i.caption} opacity: 0.65;">Browser media query — override all transition-duration to var(--motion-duration-instant)</div>
          </div>
          <div style="text-align: right; flex-shrink: 0; min-width: 80px;">
            <div style="${i.mono} font-weight: 700; display: block; margin-bottom: 0.15rem;">0ms</div>
            <div style="${i.caption} opacity: 0.65;">No motion</div>
          </div>
        </div>
      </div>

      <h2 style="${i.h2}">Duration</h2>
      <p style="${i.body} opacity: 0.65; margin-bottom: 1rem;">How long the transition takes. Hover each row to trigger the transition at its actual token speed — 100ms snaps, 500ms glides.</p>
      <div style="margin-bottom: 2.5rem;">
        ${s.map(u)}
      </div>

      <h2 style="${i.h2}">Easing</h2>
      <p style="${i.body} opacity: 0.65; margin-bottom: 1rem;">The velocity curve of the transition. All dots below use the same 1.4s duration — the difference in feel comes entirely from the easing function.</p>
      <div style="margin-bottom: 2.5rem;">
        ${c.map(d)}
      </div>

      <h2 style="${i.h2}">Reference CSS</h2>
      <pre style="margin: 0; padding: 1rem 1.25rem; background: rgba(128,128,128,0.06); border-radius: 6px; ${i.monoSm} line-height: 1.75; overflow-x: auto;">:root {
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
  `},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Motion Scale',
  render: () => html\`
    <style>\${DEMO_STYLE}</style>
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Motion</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">Duration and easing tokens for transitions and animations. Values are derived from Carbon (IBM) and Material Design 3, adapted for government UI readability. All motion must respect <code>prefers-reduced-motion</code>.</p>

      <div style="margin-bottom: 2rem; padding: 0.875rem 1rem; background: rgba(251,191,36,0.1); border-left: 3px solid #f59e0b; border-radius: 0 4px 4px 0;">
        <p style="\${t.caption}"><strong>Section 508 / ADA Title II:</strong> Every component that uses motion must include a <code>prefers-reduced-motion: reduce</code> override setting all transition durations to <code>--motion-duration-instant</code>. Use the token, not CSS <code>none</code> — this preserves layout reflow without visual animation.</p>
      </div>

      <h2 style="\${t.h2}">Reduced Motion</h2>
      <p style="\${t.body} opacity: 0.65; margin-bottom: 1rem;">When <code>prefers-reduced-motion: reduce</code> is set, all transition durations must resolve to <code>--motion-duration-instant</code> (0ms). Use the token — not CSS <code>none</code> — so layout reflow still occurs without visual animation.</p>
      <div style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; gap: 1.5rem; padding: 1rem 0; border-bottom: 1px solid rgba(128,128,128,0.12);">
          <div style="width: 160px; flex-shrink: 0; display: flex; align-items: center;">
            <div style="position: relative; width: 146px; height: 14px;">
              <div style="position: absolute; top: 6px; left: 0; right: 0; height: 2px; background: rgba(59,91,219,0.12); border-radius: 1px;"></div>
              <div style="position: absolute; left: 0; top: 0; width: 14px; height: 14px; border-radius: 50%; background: #3b5bdb; opacity: 0.3;"></div>
            </div>
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="\${t.monoSm} display: block; margin-bottom: 0.25rem;">prefers-reduced-motion: reduce</div>
            <div style="\${t.caption} opacity: 0.65;">Browser media query — override all transition-duration to var(--motion-duration-instant)</div>
          </div>
          <div style="text-align: right; flex-shrink: 0; min-width: 80px;">
            <div style="\${t.mono} font-weight: 700; display: block; margin-bottom: 0.15rem;">0ms</div>
            <div style="\${t.caption} opacity: 0.65;">No motion</div>
          </div>
        </div>
      </div>

      <h2 style="\${t.h2}">Duration</h2>
      <p style="\${t.body} opacity: 0.65; margin-bottom: 1rem;">How long the transition takes. Hover each row to trigger the transition at its actual token speed — 100ms snaps, 500ms glides.</p>
      <div style="margin-bottom: 2.5rem;">
        \${durationTokens.map(durationRow)}
      </div>

      <h2 style="\${t.h2}">Easing</h2>
      <p style="\${t.body} opacity: 0.65; margin-bottom: 1rem;">The velocity curve of the transition. All dots below use the same 1.4s duration — the difference in feel comes entirely from the easing function.</p>
      <div style="margin-bottom: 2.5rem;">
        \${easingTokens.map(easingRow)}
      </div>

      <h2 style="\${t.h2}">Reference CSS</h2>
      <pre style="margin: 0; padding: 1rem 1.25rem; background: rgba(128,128,128,0.06); border-radius: 6px; \${t.monoSm} line-height: 1.75; overflow-x: auto;">:root {
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
}`,...f.parameters?.docs?.source}}},p=[`MotionScale`]}))();export{f as MotionScale,p as __namedExportsOrder,r as default};