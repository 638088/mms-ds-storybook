import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{t as r}from"./mms-card.component-Ae9XIj4r.js";import{a as i,c as a,d as o,i as s,n as c,o as l,r as u,u as d}from"./doc-styles-DkvR_Qyb.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{n(),r(),a(),f={title:`Foundations/Layout`},p=[{token:`--layout-content-max-width`,value:`1280px`,purpose:`Maximum width of the centered content container. Content stops growing here regardless of viewport width.`},{token:`--layout-inline-padding-compact`,value:`16px`,purpose:`Horizontal padding inside the content container when the viewport is below the padding step.`},{token:`--layout-inline-padding-default`,value:`32px`,purpose:`Horizontal padding inside the content container at the padding step and above.`},{token:`--layout-padding-step`,value:`768px`,purpose:`Viewport width at which padding-inline transitions from compact (16px) to default (32px).`},{token:`--layout-gap-tight`,value:`8px`,purpose:`Gap between tightly grouped horizontal items — chips, icon + label pairs, inline form controls. Aliases --spacing-sm1.`},{token:`--layout-gap-default`,value:`16px`,purpose:`Default gap between siblings in a row or column — list items, form fields, nav items. Aliases --spacing-md1.`},{token:`--layout-gap-loose`,value:`24px`,purpose:`Looser gap for cards, larger composite groups, and content blocks that need more breathing room. Aliases --spacing-lg1.`},{token:`--layout-gap-comfortable`,value:`32px`,purpose:`Comfortable gap commonly used between major composite blocks and card-grid items. Aliases --spacing-lg2.`}],m=[{label:`Below the padding step`,state:`Container fills the viewport · padding-inline = 16px`,viewport:375},{label:`At the padding step (768px)`,state:`padding-inline steps up to 32px · container still fills the viewport`,viewport:768},{label:`Below the container cap`,state:`Container continues to fill the viewport · padding-inline = 32px`,viewport:1024},{label:`At the container cap (1280px)`,state:`Container reaches max-width · no leftover space yet`,viewport:1280},{label:`Above the container cap`,state:`Container is capped and centered · leftover viewport space each side`,viewport:1920}],h=1280,g=16,_=24,v=768,y=e=>{let t=e<v?g:_,n=Math.min(e,h),r=n-t*2,i=Math.max(0,(e-n)/2);return i===0?[{w:t,kind:`padding`},{w:r,kind:`content`},{w:t,kind:`padding`}]:[{w:i,kind:`empty`},{w:t,kind:`padding`},{w:r,kind:`content`},{w:t,kind:`padding`},{w:i,kind:`empty`}]},b=e=>{let t=e<v?g:_,n=Math.min(e,h),r=n-t*2,i=Math.max(0,(e-n)/2);return i===0?`viewport ${e}px · container ${n}px · padding ${t}px each side · content ${r}px`:`viewport ${e}px · container ${n}px · padding ${t}px each side · content ${r}px · leftover ${i}px each side`},x=1920,S=780,C=e=>e===`empty`?`rgba(0,0,0,0.06)`:e===`padding`?`rgba(90,120,200,0.3)`:`rgba(90,120,200,0.75)`,w=e=>{let n=S/x,r=Math.round(e.viewport*n),a=y(e.viewport);return t`
    <div style="padding: var(--spacing-md1) 0; border-bottom: var(--border-width-xs) solid var(--color-border-subtle);">
      <div style="margin-bottom: ${d.label};">
        <div style="${o.bodySm} font-weight: 700;">${e.label}</div>
        <div style="${o.caption} ${i.muted} margin-top: var(--spacing-xs2);">${e.state}</div>
        <div style="${o.monoSm} ${i.muted} margin-top: var(--spacing-xs2);">${b(e.viewport)}</div>
      </div>
      <div role="img" aria-label="Layout diagram — ${e.label}. ${b(e.viewport)}" style="display: flex; height: 28px; width: ${r}px; border: var(--border-width-xs) solid var(--color-border-default); border-radius: 2px; overflow: hidden;">
        ${a.map(n=>t`
          <div title="${n.kind} · ${n.w}px" style="width: ${n.w/e.viewport*100}%; background: ${C(n.kind)}; border-right: 1px solid rgba(255,255,255,0.4);"></div>
        `)}
      </div>
    </div>
  `},T=[{token:`--layout-gap-tight`,value:8,use:`Chips · icon + label pairs · inline form controls`},{token:`--layout-gap-default`,value:16,use:`List items · form fields · nav items`},{token:`--layout-gap-loose`,value:24,use:`Cards · larger composite groups`},{token:`--layout-gap-comfortable`,value:32,use:`Major composite blocks · card-grid items`}],E=96,D=28,O=e=>t`
  <div style="padding: var(--spacing-md1) 0; border-bottom: var(--border-width-xs) solid var(--color-border-subtle);">
    <div style="margin-bottom: ${d.label};">
      <div style="${o.bodySm} font-weight: 700;">${e.token}</div>
      <div style="${o.monoSm} ${i.muted} margin-top: var(--spacing-xs2);">${e.value}px · ${e.use}</div>
    </div>
    <div role="img" aria-label="Gap diagram — ${e.token} ${e.value}px" style="display: flex; gap: ${e.value}px; align-items: center;">
      <div style="width: ${E}px; height: ${D}px; background: rgba(90,120,200,0.75); border-radius: 2px; flex-shrink: 0;"></div>
      <div style="width: ${E}px; height: ${D}px; background: rgba(90,120,200,0.75); border-radius: 2px; flex-shrink: 0;"></div>
      <div style="width: ${E}px; height: ${D}px; background: rgba(90,120,200,0.75); border-radius: 2px; flex-shrink: 0;"></div>
    </div>
  </div>
`,k=e=>t`
  <tr>
    <td style="${i.td} ${o.mono} white-space: nowrap;">${e.token}</td>
    <td style="${i.td} ${o.mono} ${i.muted} white-space: nowrap;">${e.value}</td>
    <td style="${i.td}">${e.purpose}</td>
  </tr>
`,A={name:`Layout System`,render:()=>t`
    <div data-theme=${u} data-mode=${l()} style=${c}>

      <h1 style="${o.h1}">Layout System</h1>
      <p style="${o.body} max-width: ${s}; ${i.muted} margin-bottom: ${d.content};">A centered max-width container with constant internal padding. Content lives inside the container; everything outside is leftover viewport space, not a designed margin. This is the layout shape AI assistants natively generate from prompts, and the shape human designers reproduce in Figma — eliminating drift between code and design.</p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content" role="note">
          <p style="${o.bodySm}"><strong>The rule:</strong> Content is bounded by a centered container of <code style="${o.monoSm}">max-width: 1280px</code> with <code style="${o.monoSm}">padding-inline</code> of 16px (below the padding step) or 32px (at and above the padding step). The container is centered with <code style="${o.monoSm}">margin-inline: auto</code>. There are no per-breakpoint margin tokens — the empty space at large viewports falls out of centering, not from any declared value.</p>
        </div>
      </mms-card>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Layout tokens</h2>
      <table style="${i.table} margin-bottom: ${d.subsection};">
        <thead>
          <tr>
            <th scope="col" style="${i.th}">Token</th>
            <th scope="col" style="${i.th}">Value</th>
            <th scope="col" style="${i.th}">Purpose</th>
          </tr>
        </thead>
        <tbody>
          ${p.map(k)}
        </tbody>
      </table>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">How the container behaves</h2>
      <p style="${o.bodySm} max-width: ${s}; ${i.muted} margin-bottom: ${d.content};">The container has three transition points defined by its own tokens: the padding step (at <code style="${o.monoSm}">--layout-padding-step</code>) and the content cap (at <code style="${o.monoSm}">--layout-content-max-width</code>). Each row below illustrates one state, drawn to-scale relative to the widest example.</p>
      <div style="${o.caption} ${i.muted} margin-bottom: ${d.content}; display: flex; flex-wrap: wrap; gap: ${d.content};">
        <span style="display: inline-flex; align-items: center; gap: ${d.label};"><span aria-hidden="true" style="display: inline-block; width: 0.9rem; height: 0.9rem; background: rgba(0,0,0,0.06); border: var(--border-width-xs) solid var(--color-border-default);"></span> leftover viewport space</span>
        <span style="display: inline-flex; align-items: center; gap: ${d.label};"><span aria-hidden="true" style="display: inline-block; width: 0.9rem; height: 0.9rem; background: rgba(90,120,200,0.3); border: var(--border-width-xs) solid var(--color-border-default);"></span> padding-inline</span>
        <span style="display: inline-flex; align-items: center; gap: ${d.label};"><span aria-hidden="true" style="display: inline-block; width: 0.9rem; height: 0.9rem; background: rgba(90,120,200,0.75); border: var(--border-width-xs) solid var(--color-border-default);"></span> content area</span>
      </div>
      <div style="${i.panel} margin-bottom: ${d.subsection};">
        ${m.map(w)}
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">How the gap tokens compare</h2>
      <p style="${o.bodySm} max-width: ${s}; ${i.muted} margin-bottom: ${d.content};">Gap tokens are applied via flex/grid <code style="${o.monoSm}">gap</code>. Each row below shows the gap drawn at its actual pixel size, so the difference between values is visually direct — not just a number in a table.</p>
      <div style="${i.panel} margin-bottom: ${d.subsection};">
        ${T.map(O)}
      </div>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Reference CSS</h2>
      <pre style="${i.pre} margin: 0 0 ${d.subsection};"><code>.layout-container {
  max-width: var(--layout-content-max-width); /* 1280px */
  margin-inline: auto;
  padding-inline: var(--layout-inline-padding-compact); /* 16px */
}

@media (min-width: 768px) { /* --layout-padding-step */
  .layout-container {
    padding-inline: var(--layout-inline-padding-default); /* 32px */
  }
}</code></pre>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Why this shape</h2>
      <div style="max-width: ${s}; display: grid; gap: ${d.content};">
        <p style="${o.body} ${i.muted}"><strong>AI assistants generate this shape natively.</strong> When prompted to build a page layout, AI overwhelmingly writes <code style="${o.monoSm}">max-width</code> + <code style="${o.monoSm}">margin: 0 auto</code> + <code style="${o.monoSm}">padding-inline</code>. It rarely writes per-breakpoint margin values. Adopting AI's native shape as the design system contract — rather than fighting it — eliminates drift between AI-generated code and design-system-authored code.</p>
        <p style="${o.body} ${i.muted}"><strong>Human designers reproduce this shape in Figma the same way.</strong> One frame per viewport, with a centered 1280px content container and matching internal padding. The "margin" a designer sees at 1920px is not a designed value — it's the leftover space after centering, exactly as in code.</p>
        <p style="${o.body} ${i.muted}"><strong>The shape is the contract.</strong> Tokens encode the container max-width and padding values. Margins are derived, not declared. This makes design and code symmetric.</p>
        <p style="${o.bodySm} ${i.muted}">For the designer-side companion — canonical Figma frames, variable setup, and what replaces the 12-column grid in practice — see <strong>Designing in Figma</strong>.</p>
      </div>

    </div>
  `},j=[{move:`Two canonical frames at 375 and 1440`,gives:`Each frame is an Auto Layout with <code>padding-inline</code> bound to <code>layout/inline-padding/compact</code> (375) or <code>layout/inline-padding/default</code> (1440). Designer never types a padding value — picks from variables.`},{move:`Inner "content" frame inside each canonical frame`,gives:`Constrained to <code>min(parent − padding × 2, 1280)</code> via max-width. Mirrors the CSS contract exactly — designer feels the 1280px cap on the 1440 frame, fluid behavior on the 375 frame.`},{move:`Figma Variables matching the token names`,gives:`<code>content-max-width</code>, <code>inline-padding-compact</code>, <code>inline-padding-default</code>, <code>padding-step</code>, <code>gap-tight</code>, <code>gap-default</code>, <code>gap-loose</code>, <code>gap-comfortable</code>. Same names as code — no translation layer between design and engineering.`},{move:`Container as a Figma Component (with a content slot)`,gives:`Designer drags the Container component onto a frame instead of reconstructing the padding/max-width contract each time. Slot accepts any content.`},{move:`Named layout pattern components (Stack · Cluster · Sidebar · Switcher · CardGrid)`,gives:`Replaces "I'll draw 3 columns" with "I'll drop a CardGrid." Same vocabulary as code primitives. <strong>Backlogged as DS-079.</strong>`},{move:`Padding band overlay on canonical frames`,gives:`Colored rectangle indicator showing the active padding band on each frame — same visualization the Storybook to-scale demo uses. Designer sees the band, not just a guide line.`},{move:`Optional reading-measure guide (~65ch / ~540px)`,gives:`Toggleable horizontal ruler indicating where running prose stops being comfortable to read. Replaces "column width as prose anchor" — gives an explicit legibility line. <strong>Will be defined in DS-006.</strong>`}],M=e=>t`
  <tr>
    <td style="${i.td} font-weight: 700; width: 32%;">${e.move}</td>
    <td style="${i.td}">${e.gives}</td>
  </tr>
`,N={name:`Designing in Figma`,render:()=>t`
    <div data-theme=${u} data-mode=${l()} style=${c}>

      <h1 style="${o.h1}">Designing in Figma</h1>
      <p style="${o.body} max-width: ${s}; ${i.muted} margin-bottom: ${d.content};">The Layout System defines the contract — a centered max-width container with internal padding. This page guides designers translating that contract into Figma practice. Without a 12-column grid, the discipline shifts: <strong>constrain by container, compose by Auto Layout + Variables, name patterns instead of drawing them.</strong></p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content" role="note">
          <p style="${o.bodySm}"><strong>The rule:</strong> Figma is downstream of code. Token names in code are the source of truth; Figma Variables mirror them. When a designer picks a padding or gap value, they pick from a variable — not by typing a number. Same names, same values, both sides.</p>
        </div>
      </mms-card>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Figma frame strategy</h2>
      <p style="${o.bodySm} max-width: ${s}; ${i.muted} margin-bottom: ${d.content};">The container has three regimes. Two frames are usually enough to capture the model — the intermediate regime is structurally the same as the desktop regime, just at a narrower viewport.</p>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${d.subsection};">
        <div slot="body-content">
          <ul style="${o.bodySm} margin: 0 0 ${d.content}; padding-left: var(--spacing-md2);">
            <li style="margin-bottom: ${d.label};"><strong>375px (mobile)</strong> — represents the 0–767 regime. Container fills the viewport, 16px padding each side.</li>
            <li><strong>1440px (desktop)</strong> — represents the 1280+ regime. Container is locked at 1280, centered, with 24px padding each side and leftover viewport space.</li>
          </ul>
          <p style="${o.bodySm} ${i.muted}">The intermediate regime (768–1279) is structurally a fluid container with 24px padding — components flow within it. Add a third frame at <strong>768 or 1024</strong> only when a specific component's responsive behavior shifts in that range (e.g., a card grid moves from 2 columns to 3).</p>
        </div>
      </mms-card>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">What replaces the column grid</h2>
      <p style="${o.bodySm} max-width: ${s}; ${i.muted} margin-bottom: ${d.content};">The 12-column grid was an <em>organizing principle</em> — it told the designer where things could go. Without columns, the principle shifts to three moves:</p>
      <ul style="${o.bodySm} max-width: ${s}; margin: 0 0 ${d.content}; padding-left: var(--spacing-md2); display: grid; gap: ${d.label};">
        <li><strong>Constrain by container.</strong> The 1280px max-width and padding values are the only horizontal constraints. Everything else is content arranged inside the container.</li>
        <li><strong>Compose by Auto Layout + Variables.</strong> Every container, every gap, every padding becomes an Auto Layout property bound to a variable. This mirrors flex / grid + <code style="${o.monoSm}">gap</code> in code exactly.</li>
        <li><strong>Name patterns instead of drawing them.</strong> Stack, Cluster, Sidebar, Switcher, CardGrid are layout primitives — Figma components a designer drags onto a frame. Not freehand layouts.</li>
      </ul>
      <p style="${o.bodySm} max-width: ${s}; ${i.muted} margin-bottom: ${d.subsection};">A junior designer doesn't memorize which value goes where; they pick from variable names that match the token names. This is also future-proofing — as Figma's own AI tools mature, they'll pick from these variables. Naming them identically to code tokens means design-AI output and code-AI output land on the same values.</p>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">Figma setup kit</h2>
      <p style="${o.bodySm} max-width: ${s}; ${i.muted} margin-bottom: ${d.content};">Concrete setup moves and what each one gives the design practice.</p>
      <table style="${i.table} margin-bottom: ${d.subsection};">
        <thead>
          <tr>
            <th scope="col" style="${i.th}">Move</th>
            <th scope="col" style="${i.th}">What it gives you</th>
          </tr>
        </thead>
        <tbody>
          ${j.map(M)}
        </tbody>
      </table>

      <hr style="${i.divider}" />

      <h2 style="${o.h2}">The handoff promise</h2>
      <div style="max-width: ${s}; display: grid; gap: ${d.content};">
        <p style="${o.body} ${i.muted}"><strong>The container shape is symmetric across design and code.</strong> A designer placing content inside the 1280px inner frame in Figma is doing the same thing as a developer writing <code style="${o.monoSm}">&lt;div class="layout-container"&gt;</code>. No translation step. No "designer values" vs "engineering values."</p>
        <p style="${o.body} ${i.muted}"><strong>Drift becomes structurally impossible</strong> when the variable names, values, and structural moves match the code tokens one-to-one. The Figma file isn't a separate artifact — it's a view onto the same contract.</p>
      </div>

    </div>
  `},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Layout System',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Layout System</h1>
      <p style="\${t.body} max-width: \${PROSE_MAX}; \${doc.muted} margin-bottom: \${space.content};">A centered max-width container with constant internal padding. Content lives inside the container; everything outside is leftover viewport space, not a designed margin. This is the layout shape AI assistants natively generate from prompts, and the shape human designers reproduce in Figma — eliminating drift between code and design.</p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content" role="note">
          <p style="\${t.bodySm}"><strong>The rule:</strong> Content is bounded by a centered container of <code style="\${t.monoSm}">max-width: 1280px</code> with <code style="\${t.monoSm}">padding-inline</code> of 16px (below the padding step) or 32px (at and above the padding step). The container is centered with <code style="\${t.monoSm}">margin-inline: auto</code>. There are no per-breakpoint margin tokens — the empty space at large viewports falls out of centering, not from any declared value.</p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Layout tokens</h2>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th scope="col" style="\${doc.th}">Token</th>
            <th scope="col" style="\${doc.th}">Value</th>
            <th scope="col" style="\${doc.th}">Purpose</th>
          </tr>
        </thead>
        <tbody>
          \${layoutTokens.map(tokenRow)}
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">How the container behaves</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; \${doc.muted} margin-bottom: \${space.content};">The container has three transition points defined by its own tokens: the padding step (at <code style="\${t.monoSm}">--layout-padding-step</code>) and the content cap (at <code style="\${t.monoSm}">--layout-content-max-width</code>). Each row below illustrates one state, drawn to-scale relative to the widest example.</p>
      <div style="\${t.caption} \${doc.muted} margin-bottom: \${space.content}; display: flex; flex-wrap: wrap; gap: \${space.content};">
        <span style="display: inline-flex; align-items: center; gap: \${space.label};"><span aria-hidden="true" style="display: inline-block; width: 0.9rem; height: 0.9rem; background: rgba(0,0,0,0.06); border: var(--border-width-xs) solid var(--color-border-default);"></span> leftover viewport space</span>
        <span style="display: inline-flex; align-items: center; gap: \${space.label};"><span aria-hidden="true" style="display: inline-block; width: 0.9rem; height: 0.9rem; background: rgba(90,120,200,0.3); border: var(--border-width-xs) solid var(--color-border-default);"></span> padding-inline</span>
        <span style="display: inline-flex; align-items: center; gap: \${space.label};"><span aria-hidden="true" style="display: inline-block; width: 0.9rem; height: 0.9rem; background: rgba(90,120,200,0.75); border: var(--border-width-xs) solid var(--color-border-default);"></span> content area</span>
      </div>
      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        \${viewportStates.map(renderStateRow)}
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">How the gap tokens compare</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; \${doc.muted} margin-bottom: \${space.content};">Gap tokens are applied via flex/grid <code style="\${t.monoSm}">gap</code>. Each row below shows the gap drawn at its actual pixel size, so the difference between values is visually direct — not just a number in a table.</p>
      <div style="\${doc.panel} margin-bottom: \${space.subsection};">
        \${gapTokens.map(renderGapRow)}
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Reference CSS</h2>
      <pre style="\${doc.pre} margin: 0 0 \${space.subsection};"><code>.layout-container {
  max-width: var(--layout-content-max-width); /* 1280px */
  margin-inline: auto;
  padding-inline: var(--layout-inline-padding-compact); /* 16px */
}

@media (min-width: 768px) { /* --layout-padding-step */
  .layout-container {
    padding-inline: var(--layout-inline-padding-default); /* 32px */
  }
}</code></pre>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Why this shape</h2>
      <div style="max-width: \${PROSE_MAX}; display: grid; gap: \${space.content};">
        <p style="\${t.body} \${doc.muted}"><strong>AI assistants generate this shape natively.</strong> When prompted to build a page layout, AI overwhelmingly writes <code style="\${t.monoSm}">max-width</code> + <code style="\${t.monoSm}">margin: 0 auto</code> + <code style="\${t.monoSm}">padding-inline</code>. It rarely writes per-breakpoint margin values. Adopting AI's native shape as the design system contract — rather than fighting it — eliminates drift between AI-generated code and design-system-authored code.</p>
        <p style="\${t.body} \${doc.muted}"><strong>Human designers reproduce this shape in Figma the same way.</strong> One frame per viewport, with a centered 1280px content container and matching internal padding. The "margin" a designer sees at 1920px is not a designed value — it's the leftover space after centering, exactly as in code.</p>
        <p style="\${t.body} \${doc.muted}"><strong>The shape is the contract.</strong> Tokens encode the container max-width and padding values. Margins are derived, not declared. This makes design and code symmetric.</p>
        <p style="\${t.bodySm} \${doc.muted}">For the designer-side companion — canonical Figma frames, variable setup, and what replaces the 12-column grid in practice — see <strong>Designing in Figma</strong>.</p>
      </div>

    </div>
  \`
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Designing in Figma',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Designing in Figma</h1>
      <p style="\${t.body} max-width: \${PROSE_MAX}; \${doc.muted} margin-bottom: \${space.content};">The Layout System defines the contract — a centered max-width container with internal padding. This page guides designers translating that contract into Figma practice. Without a 12-column grid, the discipline shifts: <strong>constrain by container, compose by Auto Layout + Variables, name patterns instead of drawing them.</strong></p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content" role="note">
          <p style="\${t.bodySm}"><strong>The rule:</strong> Figma is downstream of code. Token names in code are the source of truth; Figma Variables mirror them. When a designer picks a padding or gap value, they pick from a variable — not by typing a number. Same names, same values, both sides.</p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Figma frame strategy</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; \${doc.muted} margin-bottom: \${space.content};">The container has three regimes. Two frames are usually enough to capture the model — the intermediate regime is structurally the same as the desktop regime, just at a narrower viewport.</p>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
          <ul style="\${t.bodySm} margin: 0 0 \${space.content}; padding-left: var(--spacing-md2);">
            <li style="margin-bottom: \${space.label};"><strong>375px (mobile)</strong> — represents the 0–767 regime. Container fills the viewport, 16px padding each side.</li>
            <li><strong>1440px (desktop)</strong> — represents the 1280+ regime. Container is locked at 1280, centered, with 24px padding each side and leftover viewport space.</li>
          </ul>
          <p style="\${t.bodySm} \${doc.muted}">The intermediate regime (768–1279) is structurally a fluid container with 24px padding — components flow within it. Add a third frame at <strong>768 or 1024</strong> only when a specific component's responsive behavior shifts in that range (e.g., a card grid moves from 2 columns to 3).</p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">What replaces the column grid</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; \${doc.muted} margin-bottom: \${space.content};">The 12-column grid was an <em>organizing principle</em> — it told the designer where things could go. Without columns, the principle shifts to three moves:</p>
      <ul style="\${t.bodySm} max-width: \${PROSE_MAX}; margin: 0 0 \${space.content}; padding-left: var(--spacing-md2); display: grid; gap: \${space.label};">
        <li><strong>Constrain by container.</strong> The 1280px max-width and padding values are the only horizontal constraints. Everything else is content arranged inside the container.</li>
        <li><strong>Compose by Auto Layout + Variables.</strong> Every container, every gap, every padding becomes an Auto Layout property bound to a variable. This mirrors flex / grid + <code style="\${t.monoSm}">gap</code> in code exactly.</li>
        <li><strong>Name patterns instead of drawing them.</strong> Stack, Cluster, Sidebar, Switcher, CardGrid are layout primitives — Figma components a designer drags onto a frame. Not freehand layouts.</li>
      </ul>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; \${doc.muted} margin-bottom: \${space.subsection};">A junior designer doesn't memorize which value goes where; they pick from variable names that match the token names. This is also future-proofing — as Figma's own AI tools mature, they'll pick from these variables. Naming them identically to code tokens means design-AI output and code-AI output land on the same values.</p>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Figma setup kit</h2>
      <p style="\${t.bodySm} max-width: \${PROSE_MAX}; \${doc.muted} margin-bottom: \${space.content};">Concrete setup moves and what each one gives the design practice.</p>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th scope="col" style="\${doc.th}">Move</th>
            <th scope="col" style="\${doc.th}">What it gives you</th>
          </tr>
        </thead>
        <tbody>
          \${figmaKit.map(renderKitRow)}
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">The handoff promise</h2>
      <div style="max-width: \${PROSE_MAX}; display: grid; gap: \${space.content};">
        <p style="\${t.body} \${doc.muted}"><strong>The container shape is symmetric across design and code.</strong> A designer placing content inside the 1280px inner frame in Figma is doing the same thing as a developer writing <code style="\${t.monoSm}">&lt;div class="layout-container"&gt;</code>. No translation step. No "designer values" vs "engineering values."</p>
        <p style="\${t.body} \${doc.muted}"><strong>Drift becomes structurally impossible</strong> when the variable names, values, and structural moves match the code tokens one-to-one. The Figma file isn't a separate artifact — it's a view onto the same contract.</p>
      </div>

    </div>
  \`
}`,...N.parameters?.docs?.source}}},P=[`GridSystem`,`DesigningInFigma`]}))();export{N as DesigningInFigma,A as GridSystem,P as __namedExportsOrder,f as default};