import{i as e}from"./preload-helper-xPQekRTU.js";import{K as t,V as n}from"./iframe-DISs8Z3q.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{n(),r={title:`Foundations/Layout`},i={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},a=`680px`,o=`960px`,s=[{token:`--layout-content-max-width`,value:`1280px`,purpose:`Maximum width of the centered content container. Content stops growing here regardless of viewport width.`},{token:`--layout-inline-padding-compact`,value:`16px`,purpose:`Horizontal padding inside the content container when the viewport is below the padding step.`},{token:`--layout-inline-padding-default`,value:`24px`,purpose:`Horizontal padding inside the content container at the padding step and above.`},{token:`--layout-padding-step`,value:`768px`,purpose:`Viewport width at which padding-inline transitions from compact (16px) to default (24px).`},{token:`--layout-gap-tight`,value:`8px`,purpose:`Gap between tightly grouped horizontal items — chips, icon + label pairs, inline form controls. Aliases --spacing-sm1.`},{token:`--layout-gap-default`,value:`16px`,purpose:`Default gap between siblings in a row or column — list items, form fields, nav items. Aliases --spacing-md1.`},{token:`--layout-gap-loose`,value:`24px`,purpose:`Looser gap for cards, larger composite groups, and content blocks that need more breathing room. Aliases --spacing-lg1.`},{token:`--layout-gap-comfortable`,value:`32px`,purpose:`Comfortable gap commonly used between major composite blocks and card-grid items. Aliases --spacing-lg2.`}],c=[{label:`Below the padding step`,state:`Container fills the viewport · padding-inline = 16px`,viewport:375},{label:`At the padding step (768px)`,state:`padding-inline steps up to 24px · container still fills the viewport`,viewport:768},{label:`Below the container cap`,state:`Container continues to fill the viewport · padding-inline = 24px`,viewport:1024},{label:`At the container cap (1280px)`,state:`Container reaches max-width · no leftover space yet`,viewport:1280},{label:`Above the container cap`,state:`Container is capped and centered · leftover viewport space each side`,viewport:1920}],l=1280,u=16,d=24,f=768,p=e=>{let t=e<f?u:d,n=Math.min(e,l),r=n-t*2,i=Math.max(0,(e-n)/2);return i===0?[{w:t,kind:`padding`},{w:r,kind:`content`},{w:t,kind:`padding`}]:[{w:i,kind:`empty`},{w:t,kind:`padding`},{w:r,kind:`content`},{w:t,kind:`padding`},{w:i,kind:`empty`}]},m=e=>{let t=e<f?u:d,n=Math.min(e,l),r=n-t*2,i=Math.max(0,(e-n)/2);return i===0?`viewport ${e}px · container ${n}px · padding ${t}px each side · content ${r}px`:`viewport ${e}px · container ${n}px · padding ${t}px each side · content ${r}px · leftover ${i}px each side`},h=1920,g=780,_=e=>e===`empty`?`rgba(0,0,0,0.06)`:e===`padding`?`rgba(90,120,200,0.3)`:`rgba(90,120,200,0.75)`,v=e=>{let n=g/h,r=Math.round(e.viewport*n),a=p(e.viewport);return t`
    <div style="padding: 1rem 0; border-bottom: 1px solid rgba(128,128,128,0.15);">
      <div style="margin-bottom: 0.5rem;">
        <div style="${i.bodySm} font-weight: 700;">${e.label}</div>
        <div style="${i.caption} opacity: 0.7; margin-top: 0.25rem;">${e.state}</div>
        <div style="${i.monoSm} opacity: 0.65; margin-top: 0.35rem;">${m(e.viewport)}</div>
      </div>
      <div role="img" aria-label="Layout diagram — ${e.label}. ${m(e.viewport)}" style="display: flex; height: 28px; width: ${r}px; border: 1px solid rgba(128,128,128,0.25); border-radius: 2px; overflow: hidden;">
        ${a.map(n=>t`
          <div title="${n.kind} · ${n.w}px" style="width: ${n.w/e.viewport*100}%; background: ${_(n.kind)}; border-right: 1px solid rgba(255,255,255,0.4);"></div>
        `)}
      </div>
    </div>
  `},y=[{token:`--layout-gap-tight`,value:8,use:`Chips · icon + label pairs · inline form controls`},{token:`--layout-gap-default`,value:16,use:`List items · form fields · nav items`},{token:`--layout-gap-loose`,value:24,use:`Cards · larger composite groups`},{token:`--layout-gap-comfortable`,value:32,use:`Major composite blocks · card-grid items`}],b=96,x=28,S=e=>t`
  <div style="padding: 1rem 0; border-bottom: 1px solid rgba(128,128,128,0.15);">
    <div style="margin-bottom: 0.6rem;">
      <div style="${i.bodySm} font-weight: 700;">${e.token}</div>
      <div style="${i.monoSm} opacity: 0.65; margin-top: 0.25rem;">${e.value}px · ${e.use}</div>
    </div>
    <div role="img" aria-label="Gap diagram — ${e.token} ${e.value}px" style="display: flex; gap: ${e.value}px; align-items: center;">
      <div style="width: ${b}px; height: ${x}px; background: rgba(90,120,200,0.75); border-radius: 2px; flex-shrink: 0;"></div>
      <div style="width: ${b}px; height: ${x}px; background: rgba(90,120,200,0.75); border-radius: 2px; flex-shrink: 0;"></div>
      <div style="width: ${b}px; height: ${x}px; background: rgba(90,120,200,0.75); border-radius: 2px; flex-shrink: 0;"></div>
    </div>
  </div>
`,C=e=>t`
  <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
    <td style="padding: 0.85rem 0.85rem 0.85rem 0; ${i.mono} white-space: nowrap; color: inherit; vertical-align: top;">${e.token}</td>
    <td style="padding: 0.85rem; ${i.mono} opacity: 0.75; white-space: nowrap; vertical-align: top;">${e.value}</td>
    <td style="padding: 0.85rem 0 0.85rem 0.85rem; ${i.bodySm} vertical-align: top;">${e.purpose}</td>
  </tr>
`,w={name:`Layout System`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; color: inherit;">

      <h1 style="${i.h1}">Layout System</h1>
      <p style="${i.body} max-width: ${a}; opacity: 0.85; margin-bottom: 1.75rem;">A centered max-width container with constant internal padding. Content lives inside the container; everything outside is leftover viewport space, not a designed margin. This is the layout shape AI assistants natively generate from prompts, and the shape human designers reproduce in Figma — eliminating drift between code and design.</p>

      <div role="note" style="padding: 1rem 1.25rem; background: rgba(90,120,200,0.08); border-left: 3px solid rgba(90,120,200,0.5); border-radius: 4px; margin-bottom: 2.5rem; max-width: ${a};">
        <p style="${i.bodySm}"><strong>The rule:</strong> Content is bounded by a centered container of <code style="${i.monoSm}">max-width: 1280px</code> with <code style="${i.monoSm}">padding-inline</code> of 16px (below the padding step) or 24px (at and above the padding step). The container is centered with <code style="${i.monoSm}">margin-inline: auto</code>. There are no per-breakpoint margin tokens — the empty space at large viewports falls out of centering, not from any declared value.</p>
      </div>

      <h2 style="${i.h2}">Layout tokens</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2.5rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th scope="col" style="${i.caption} padding: 0.6rem 0.85rem 0.6rem 0; text-align: left; opacity: 0.75; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Token</th>
            <th scope="col" style="${i.caption} padding: 0.6rem 0.85rem; text-align: left; opacity: 0.75; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Value</th>
            <th scope="col" style="${i.caption} padding: 0.6rem 0 0.6rem 0.85rem; text-align: left; opacity: 0.75; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Purpose</th>
          </tr>
        </thead>
        <tbody>
          ${s.map(C)}
        </tbody>
      </table>

      <h2 style="${i.h2}">How the container behaves</h2>
      <p style="${i.bodySm} max-width: ${a}; opacity: 0.85; margin-bottom: 1rem;">The container has three transition points defined by its own tokens: the padding step (at <code style="${i.monoSm}">--layout-padding-step</code>) and the content cap (at <code style="${i.monoSm}">--layout-content-max-width</code>). Each row below illustrates one state, drawn to-scale relative to the widest example.</p>
      <div style="${i.caption} opacity: 0.8; margin-bottom: 1rem; display: flex; flex-wrap: wrap; gap: 1.25rem;">
        <span style="display: inline-flex; align-items: center; gap: 0.4rem;"><span aria-hidden="true" style="display: inline-block; width: 0.9rem; height: 0.9rem; background: rgba(0,0,0,0.06); border: 1px solid rgba(128,128,128,0.25);"></span> leftover viewport space</span>
        <span style="display: inline-flex; align-items: center; gap: 0.4rem;"><span aria-hidden="true" style="display: inline-block; width: 0.9rem; height: 0.9rem; background: rgba(90,120,200,0.3); border: 1px solid rgba(128,128,128,0.25);"></span> padding-inline</span>
        <span style="display: inline-flex; align-items: center; gap: 0.4rem;"><span aria-hidden="true" style="display: inline-block; width: 0.9rem; height: 0.9rem; background: rgba(90,120,200,0.75); border: 1px solid rgba(128,128,128,0.25);"></span> content area</span>
      </div>
      <div style="padding: 1.25rem 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 1.5rem;">
        ${c.map(v)}
      </div>

      <h2 style="${i.h2}">How the gap tokens compare</h2>
      <p style="${i.bodySm} max-width: ${a}; opacity: 0.85; margin-bottom: 1rem;">Gap tokens are applied via flex/grid <code style="${i.monoSm}">gap</code>. Each row below shows the gap drawn at its actual pixel size, so the difference between values is visually direct — not just a number in a table.</p>
      <div style="padding: 1.25rem 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 2.5rem;">
        ${y.map(S)}
      </div>

      <h2 style="${i.h2}">Reference CSS</h2>
      <pre style="margin: 0 0 2.5rem; padding: 1rem 1.25rem; background: rgba(128,128,128,0.06); border-radius: 6px; ${i.monoSm} line-height: 1.65; overflow-x: auto;"><code>.layout-container {
  max-width: var(--layout-content-max-width); /* 1280px */
  margin-inline: auto;
  padding-inline: var(--layout-inline-padding-compact); /* 16px */
}

@media (min-width: 768px) { /* --layout-padding-step */
  .layout-container {
    padding-inline: var(--layout-inline-padding-default); /* 24px */
  }
}</code></pre>

      <h2 style="${i.h2}">Why this shape</h2>
      <div style="max-width: ${a}; display: grid; gap: 0.85rem;">
        <p style="${i.body} opacity: 0.85;"><strong>AI assistants generate this shape natively.</strong> When prompted to build a page layout, AI overwhelmingly writes <code style="${i.monoSm}">max-width</code> + <code style="${i.monoSm}">margin: 0 auto</code> + <code style="${i.monoSm}">padding-inline</code>. It rarely writes per-breakpoint margin values. Adopting AI's native shape as the design system contract — rather than fighting it — eliminates drift between AI-generated code and design-system-authored code.</p>
        <p style="${i.body} opacity: 0.85;"><strong>Human designers reproduce this shape in Figma the same way.</strong> One frame per viewport, with a centered 1280px content container and matching internal padding. The "margin" a designer sees at 1920px is not a designed value — it's the leftover space after centering, exactly as in code.</p>
        <p style="${i.body} opacity: 0.85;"><strong>The shape is the contract.</strong> Tokens encode the container max-width and padding values. Margins are derived, not declared. This makes design and code symmetric.</p>
        <p style="${i.bodySm} opacity: 0.75; margin-top: 0.5rem;">For the designer-side companion — canonical Figma frames, variable setup, and what replaces the 12-column grid in practice — see <strong>Designing in Figma</strong>.</p>
      </div>

    </div>
  `},T=[{move:`Two canonical frames at 375 and 1440`,gives:`Each frame is an Auto Layout with <code>padding-inline</code> bound to <code>layout/inline-padding/compact</code> (375) or <code>layout/inline-padding/default</code> (1440). Designer never types a padding value — picks from variables.`},{move:`Inner "content" frame inside each canonical frame`,gives:`Constrained to <code>min(parent − padding × 2, 1280)</code> via max-width. Mirrors the CSS contract exactly — designer feels the 1280px cap on the 1440 frame, fluid behavior on the 375 frame.`},{move:`Figma Variables matching the token names`,gives:`<code>content-max-width</code>, <code>inline-padding-compact</code>, <code>inline-padding-default</code>, <code>padding-step</code>, <code>gap-tight</code>, <code>gap-default</code>, <code>gap-loose</code>, <code>gap-comfortable</code>. Same names as code — no translation layer between design and engineering.`},{move:`Container as a Figma Component (with a content slot)`,gives:`Designer drags the Container component onto a frame instead of reconstructing the padding/max-width contract each time. Slot accepts any content.`},{move:`Named layout pattern components (Stack · Cluster · Sidebar · Switcher · CardGrid)`,gives:`Replaces "I'll draw 3 columns" with "I'll drop a CardGrid." Same vocabulary as code primitives. <strong>Backlogged as DS-079.</strong>`},{move:`Padding band overlay on canonical frames`,gives:`Colored rectangle indicator showing the active padding band on each frame — same visualization the Storybook to-scale demo uses. Designer sees the band, not just a guide line.`},{move:`Optional reading-measure guide (~65ch / ~540px)`,gives:`Toggleable horizontal ruler indicating where running prose stops being comfortable to read. Replaces "column width as prose anchor" — gives an explicit legibility line. <strong>Will be defined in DS-006.</strong>`}],E=e=>t`
  <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
    <td style="padding: 0.85rem 0.85rem 0.85rem 0; ${i.bodySm} font-weight: 700; vertical-align: top; width: 32%;">${e.move}</td>
    <td style="padding: 0.85rem 0 0.85rem 0.85rem; ${i.bodySm} vertical-align: top;">${e.gives}</td>
  </tr>
`,D={name:`Designing in Figma`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${o}; padding: 2rem; color: inherit;">

      <h1 style="${i.h1}">Designing in Figma</h1>
      <p style="${i.body} max-width: ${a}; opacity: 0.85; margin-bottom: 1.75rem;">The Layout System defines the contract — a centered max-width container with internal padding. This page guides designers translating that contract into Figma practice. Without a 12-column grid, the discipline shifts: <strong>constrain by container, compose by Auto Layout + Variables, name patterns instead of drawing them.</strong></p>

      <div role="note" style="padding: 1rem 1.25rem; background: rgba(90,120,200,0.08); border-left: 3px solid rgba(90,120,200,0.5); border-radius: 4px; margin-bottom: 2.5rem; max-width: ${a};">
        <p style="${i.bodySm}"><strong>The rule:</strong> Figma is downstream of code. Token names in code are the source of truth; Figma Variables mirror them. When a designer picks a padding or gap value, they pick from a variable — not by typing a number. Same names, same values, both sides.</p>
      </div>

      <h2 style="${i.h2}">Figma frame strategy</h2>
      <p style="${i.bodySm} max-width: ${a}; opacity: 0.85; margin-bottom: 1rem;">The container has three regimes. Two frames are usually enough to capture the model — the intermediate regime is structurally the same as the desktop regime, just at a narrower viewport.</p>
      <aside role="note" aria-label="Figma frame strategy" style="padding: 1rem 1.25rem; background: rgba(120,180,120,0.08); border-left: 3px solid rgba(80,160,90,0.55); border-radius: 4px; margin-bottom: 2.5rem; max-width: ${a};">
        <ul style="${i.bodySm} margin: 0 0 0.6rem; padding-left: 1.25rem;">
          <li style="margin-bottom: 0.4rem;"><strong>375px (mobile)</strong> — represents the 0–767 regime. Container fills the viewport, 16px padding each side.</li>
          <li><strong>1440px (desktop)</strong> — represents the 1280+ regime. Container is locked at 1280, centered, with 24px padding each side and leftover viewport space.</li>
        </ul>
        <p style="${i.bodySm} opacity: 0.85;">The intermediate regime (768–1279) is structurally a fluid container with 24px padding — components flow within it. Add a third frame at <strong>768 or 1024</strong> only when a specific component's responsive behavior shifts in that range (e.g., a card grid moves from 2 columns to 3).</p>
      </aside>

      <h2 style="${i.h2}">What replaces the column grid</h2>
      <p style="${i.bodySm} max-width: ${a}; opacity: 0.85; margin-bottom: 1rem;">The 12-column grid was an <em>organizing principle</em> — it told the designer where things could go. Without columns, the principle shifts to three moves:</p>
      <ul style="${i.bodySm} max-width: ${a}; margin: 0 0 1.5rem; padding-left: 1.25rem; display: grid; gap: 0.5rem;">
        <li><strong>Constrain by container.</strong> The 1280px max-width and padding values are the only horizontal constraints. Everything else is content arranged inside the container.</li>
        <li><strong>Compose by Auto Layout + Variables.</strong> Every container, every gap, every padding becomes an Auto Layout property bound to a variable. This mirrors flex / grid + <code style="${i.monoSm}">gap</code> in code exactly.</li>
        <li><strong>Name patterns instead of drawing them.</strong> Stack, Cluster, Sidebar, Switcher, CardGrid are layout primitives — Figma components a designer drags onto a frame. Not freehand layouts.</li>
      </ul>
      <p style="${i.bodySm} max-width: ${a}; opacity: 0.85; margin-bottom: 2.5rem;">A junior designer doesn't memorize which value goes where; they pick from variable names that match the token names. This is also future-proofing — as Figma's own AI tools mature, they'll pick from these variables. Naming them identically to code tokens means design-AI output and code-AI output land on the same values.</p>

      <h2 style="${i.h2}">Figma setup kit</h2>
      <p style="${i.bodySm} max-width: ${a}; opacity: 0.85; margin-bottom: 1rem;">Concrete setup moves and what each one gives the design practice.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2.5rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th scope="col" style="${i.caption} padding: 0.6rem 0.85rem 0.6rem 0; text-align: left; opacity: 0.75; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Move</th>
            <th scope="col" style="${i.caption} padding: 0.6rem 0 0.6rem 0.85rem; text-align: left; opacity: 0.75; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">What it gives you</th>
          </tr>
        </thead>
        <tbody>
          ${T.map(E)}
        </tbody>
      </table>

      <h2 style="${i.h2}">The handoff promise</h2>
      <div style="max-width: ${a}; display: grid; gap: 0.85rem;">
        <p style="${i.body} opacity: 0.85;"><strong>The container shape is symmetric across design and code.</strong> A designer placing content inside the 1280px inner frame in Figma is doing the same thing as a developer writing <code style="${i.monoSm}">&lt;div class="layout-container"&gt;</code>. No translation step. No "designer values" vs "engineering values."</p>
        <p style="${i.body} opacity: 0.85;"><strong>Drift becomes structurally impossible</strong> when the variable names, values, and structural moves match the code tokens one-to-one. The Figma file isn't a separate artifact — it's a view onto the same contract.</p>
        <p style="${i.bodySm} opacity: 0.75;">This page is the design-practice companion to <strong>Layout System</strong>. Pattern components (Stack, Cluster, Sidebar, Switcher, CardGrid) are scoped in <strong>DS-079</strong>. Section vertical rhythm is scoped in <strong>DS-080</strong>.</p>
      </div>

    </div>
  `},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Layout System',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; color: inherit;">

      <h1 style="\${t.h1}">Layout System</h1>
      <p style="\${t.body} max-width: \${PROSE_MAX}; opacity: 0.85; margin-bottom: 1.75rem;">A centered max-width container with constant internal padding. Content lives inside the container; everything outside is leftover viewport space, not a designed margin. This is the layout shape AI assistants natively generate from prompts, and the shape human designers reproduce in Figma — eliminating drift between code and design.</p>

      <div role="note" style="padding: 1rem 1.25rem; background: rgba(90,120,200,0.08); border-left: 3px solid rgba(90,120,200,0.5); border-radius: 4px; margin-bottom: 2.5rem; max-width: \${PROSE_MAX};">
        <p style="\${t.bodySm}"><strong>The rule:</strong> Content is bounded by a centered container of <code style="\${t.monoSm}">max-width: 1280px</code> with <code style="\${t.monoSm}">padding-inline</code> of 16px (below the padding step) or 24px (at and above the padding step). The container is centered with <code style="\${t.monoSm}">margin-inline: auto</code>. There are no per-breakpoint margin tokens — the empty space at large viewports falls out of centering, not from any declared value.</p>
      </div>

      <h2 style="\${t.h2}">Layout tokens</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2.5rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th scope="col" style="\${t.caption} padding: 0.6rem 0.85rem 0.6rem 0; text-align: left; opacity: 0.75; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Token</th>
            <th scope="col" style="\${t.caption} padding: 0.6rem 0.85rem; text-align: left; opacity: 0.75; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Value</th>
            <th scope="col" style="\${t.caption} padding: 0.6rem 0 0.6rem 0.85rem; text-align: left; opacity: 0.75; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Purpose</th>
          </tr>
        </thead>
        <tbody>
          \${layoutTokens.map(tokenRow)}
        </tbody>
      </table>

      <h2 style="\${t.h2}">How the container behaves</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; opacity: 0.85; margin-bottom: 1rem;">The container has three transition points defined by its own tokens: the padding step (at <code style="\${t.monoSm}">--layout-padding-step</code>) and the content cap (at <code style="\${t.monoSm}">--layout-content-max-width</code>). Each row below illustrates one state, drawn to-scale relative to the widest example.</p>
      <div style="\${t.caption} opacity: 0.8; margin-bottom: 1rem; display: flex; flex-wrap: wrap; gap: 1.25rem;">
        <span style="display: inline-flex; align-items: center; gap: 0.4rem;"><span aria-hidden="true" style="display: inline-block; width: 0.9rem; height: 0.9rem; background: rgba(0,0,0,0.06); border: 1px solid rgba(128,128,128,0.25);"></span> leftover viewport space</span>
        <span style="display: inline-flex; align-items: center; gap: 0.4rem;"><span aria-hidden="true" style="display: inline-block; width: 0.9rem; height: 0.9rem; background: rgba(90,120,200,0.3); border: 1px solid rgba(128,128,128,0.25);"></span> padding-inline</span>
        <span style="display: inline-flex; align-items: center; gap: 0.4rem;"><span aria-hidden="true" style="display: inline-block; width: 0.9rem; height: 0.9rem; background: rgba(90,120,200,0.75); border: 1px solid rgba(128,128,128,0.25);"></span> content area</span>
      </div>
      <div style="padding: 1.25rem 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 1.5rem;">
        \${viewportStates.map(renderStateRow)}
      </div>

      <h2 style="\${t.h2}">How the gap tokens compare</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; opacity: 0.85; margin-bottom: 1rem;">Gap tokens are applied via flex/grid <code style="\${t.monoSm}">gap</code>. Each row below shows the gap drawn at its actual pixel size, so the difference between values is visually direct — not just a number in a table.</p>
      <div style="padding: 1.25rem 1.5rem; background: rgba(128,128,128,0.04); border-radius: 8px; margin-bottom: 2.5rem;">
        \${gapTokens.map(renderGapRow)}
      </div>

      <h2 style="\${t.h2}">Reference CSS</h2>
      <pre style="margin: 0 0 2.5rem; padding: 1rem 1.25rem; background: rgba(128,128,128,0.06); border-radius: 6px; \${t.monoSm} line-height: 1.65; overflow-x: auto;"><code>.layout-container {
  max-width: var(--layout-content-max-width); /* 1280px */
  margin-inline: auto;
  padding-inline: var(--layout-inline-padding-compact); /* 16px */
}

@media (min-width: 768px) { /* --layout-padding-step */
  .layout-container {
    padding-inline: var(--layout-inline-padding-default); /* 24px */
  }
}</code></pre>

      <h2 style="\${t.h2}">Why this shape</h2>
      <div style="max-width: \${PROSE_MAX}; display: grid; gap: 0.85rem;">
        <p style="\${t.body} opacity: 0.85;"><strong>AI assistants generate this shape natively.</strong> When prompted to build a page layout, AI overwhelmingly writes <code style="\${t.monoSm}">max-width</code> + <code style="\${t.monoSm}">margin: 0 auto</code> + <code style="\${t.monoSm}">padding-inline</code>. It rarely writes per-breakpoint margin values. Adopting AI's native shape as the design system contract — rather than fighting it — eliminates drift between AI-generated code and design-system-authored code.</p>
        <p style="\${t.body} opacity: 0.85;"><strong>Human designers reproduce this shape in Figma the same way.</strong> One frame per viewport, with a centered 1280px content container and matching internal padding. The "margin" a designer sees at 1920px is not a designed value — it's the leftover space after centering, exactly as in code.</p>
        <p style="\${t.body} opacity: 0.85;"><strong>The shape is the contract.</strong> Tokens encode the container max-width and padding values. Margins are derived, not declared. This makes design and code symmetric.</p>
        <p style="\${t.bodySm} opacity: 0.75; margin-top: 0.5rem;">For the designer-side companion — canonical Figma frames, variable setup, and what replaces the 12-column grid in practice — see <strong>Designing in Figma</strong>.</p>
      </div>

    </div>
  \`
}`,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Designing in Figma',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; color: inherit;">

      <h1 style="\${t.h1}">Designing in Figma</h1>
      <p style="\${t.body} max-width: \${PROSE_MAX}; opacity: 0.85; margin-bottom: 1.75rem;">The Layout System defines the contract — a centered max-width container with internal padding. This page guides designers translating that contract into Figma practice. Without a 12-column grid, the discipline shifts: <strong>constrain by container, compose by Auto Layout + Variables, name patterns instead of drawing them.</strong></p>

      <div role="note" style="padding: 1rem 1.25rem; background: rgba(90,120,200,0.08); border-left: 3px solid rgba(90,120,200,0.5); border-radius: 4px; margin-bottom: 2.5rem; max-width: \${PROSE_MAX};">
        <p style="\${t.bodySm}"><strong>The rule:</strong> Figma is downstream of code. Token names in code are the source of truth; Figma Variables mirror them. When a designer picks a padding or gap value, they pick from a variable — not by typing a number. Same names, same values, both sides.</p>
      </div>

      <h2 style="\${t.h2}">Figma frame strategy</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; opacity: 0.85; margin-bottom: 1rem;">The container has three regimes. Two frames are usually enough to capture the model — the intermediate regime is structurally the same as the desktop regime, just at a narrower viewport.</p>
      <aside role="note" aria-label="Figma frame strategy" style="padding: 1rem 1.25rem; background: rgba(120,180,120,0.08); border-left: 3px solid rgba(80,160,90,0.55); border-radius: 4px; margin-bottom: 2.5rem; max-width: \${PROSE_MAX};">
        <ul style="\${t.bodySm} margin: 0 0 0.6rem; padding-left: 1.25rem;">
          <li style="margin-bottom: 0.4rem;"><strong>375px (mobile)</strong> — represents the 0–767 regime. Container fills the viewport, 16px padding each side.</li>
          <li><strong>1440px (desktop)</strong> — represents the 1280+ regime. Container is locked at 1280, centered, with 24px padding each side and leftover viewport space.</li>
        </ul>
        <p style="\${t.bodySm} opacity: 0.85;">The intermediate regime (768–1279) is structurally a fluid container with 24px padding — components flow within it. Add a third frame at <strong>768 or 1024</strong> only when a specific component's responsive behavior shifts in that range (e.g., a card grid moves from 2 columns to 3).</p>
      </aside>

      <h2 style="\${t.h2}">What replaces the column grid</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; opacity: 0.85; margin-bottom: 1rem;">The 12-column grid was an <em>organizing principle</em> — it told the designer where things could go. Without columns, the principle shifts to three moves:</p>
      <ul style="\${t.bodySm} max-width: \${PROSE_MAX}; margin: 0 0 1.5rem; padding-left: 1.25rem; display: grid; gap: 0.5rem;">
        <li><strong>Constrain by container.</strong> The 1280px max-width and padding values are the only horizontal constraints. Everything else is content arranged inside the container.</li>
        <li><strong>Compose by Auto Layout + Variables.</strong> Every container, every gap, every padding becomes an Auto Layout property bound to a variable. This mirrors flex / grid + <code style="\${t.monoSm}">gap</code> in code exactly.</li>
        <li><strong>Name patterns instead of drawing them.</strong> Stack, Cluster, Sidebar, Switcher, CardGrid are layout primitives — Figma components a designer drags onto a frame. Not freehand layouts.</li>
      </ul>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; opacity: 0.85; margin-bottom: 2.5rem;">A junior designer doesn't memorize which value goes where; they pick from variable names that match the token names. This is also future-proofing — as Figma's own AI tools mature, they'll pick from these variables. Naming them identically to code tokens means design-AI output and code-AI output land on the same values.</p>

      <h2 style="\${t.h2}">Figma setup kit</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; opacity: 0.85; margin-bottom: 1rem;">Concrete setup moves and what each one gives the design practice.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2.5rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(128,128,128,0.2);">
            <th scope="col" style="\${t.caption} padding: 0.6rem 0.85rem 0.6rem 0; text-align: left; opacity: 0.75; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Move</th>
            <th scope="col" style="\${t.caption} padding: 0.6rem 0 0.6rem 0.85rem; text-align: left; opacity: 0.75; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">What it gives you</th>
          </tr>
        </thead>
        <tbody>
          \${figmaKit.map(renderKitRow)}
        </tbody>
      </table>

      <h2 style="\${t.h2}">The handoff promise</h2>
      <div style="max-width: \${PROSE_MAX}; display: grid; gap: 0.85rem;">
        <p style="\${t.body} opacity: 0.85;"><strong>The container shape is symmetric across design and code.</strong> A designer placing content inside the 1280px inner frame in Figma is doing the same thing as a developer writing <code style="\${t.monoSm}">&lt;div class="layout-container"&gt;</code>. No translation step. No "designer values" vs "engineering values."</p>
        <p style="\${t.body} opacity: 0.85;"><strong>Drift becomes structurally impossible</strong> when the variable names, values, and structural moves match the code tokens one-to-one. The Figma file isn't a separate artifact — it's a view onto the same contract.</p>
        <p style="\${t.bodySm} opacity: 0.75;">This page is the design-practice companion to <strong>Layout System</strong>. Pattern components (Stack, Cluster, Sidebar, Switcher, CardGrid) are scoped in <strong>DS-079</strong>. Section vertical rhythm is scoped in <strong>DS-080</strong>.</p>
      </div>

    </div>
  \`
}`,...D.parameters?.docs?.source}}},O=[`GridSystem`,`DesigningInFigma`]}))();export{D as DesigningInFigma,w as GridSystem,O as __namedExportsOrder,r as default};