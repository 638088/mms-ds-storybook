import{i as e}from"./preload-helper-xPQekRTU.js";import{K as t,V as n}from"./iframe-Cy4I9pO6.js";var r,i,a,o;e((()=>{n(),r={title:`Introduction/What's New`},i=(e,n,r)=>t`
  <div style="margin-bottom: 2.5rem; padding-bottom: 2.5rem; border-bottom: 1px solid rgba(128,128,128,0.15);">
    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
      <h2 style="margin: 0; font-size: 1.125rem; font-weight: 700; color: inherit;">${e}</h2>
      ${n?t`<span style="background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; font-size: 0.7rem; font-weight: 600; padding: 0.15rem 0.6rem; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.05em;">Current</span>`:``}
    </div>
    ${r.map(e=>t`
      <h3 style="margin: 1rem 0 0.4rem; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; opacity: 0.65;">${e.heading}</h3>
      <ul style="margin: 0; padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.3rem;">
        ${e.items.map(e=>t`<li style="font-size: 0.875rem; color: inherit; line-height: 1.5;">${e}</li>`)}
      </ul>
    `)}
  </div>
`,a={name:`What's New`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 760px; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 1.75rem; font-weight: 700;">What's New</h1>
      <p style="margin: 0 0 2.5rem; opacity: 0.85; font-size: 0.875rem;">Version history for the Maximus Design System Platform. Updated after every PR merge.</p>

      ${i(`v0.5.1 — Pre-release`,!0,[{heading:`Copilot migration infrastructure (PR #19)`,items:[`copilot-instructions.md — full architectural context auto-loaded every Copilot session; synced with .claude/CLAUDE.md`,`16 prompt files — all commands and skills invocable via / in Copilot chat (commit, pr-create, pr-merge, tracker, token-definition, visual-validate, save-session, etc.)`,`Hooks — SessionStart (session bootstrap), UserPromptSubmit (context monitor), VS Code-compatible hook scripts`,`Playwright MCP — .vscode/mcp.json configured; browsers pre-cached`,`Session continuity — richer session-log format (9 fields), autonomous save triggers, most-recent-entry-only loading`]},{heading:`Tracker restructure`,items:[`Phases remapped: Phase 1 (done), Phase 2 (Workflows), Phase 3 (11 initial components), Phase 4 (16 full), Phase 5 (5 gov-specific), Ops (infrastructure)`,`31 mms-* component tickets — Marina source + mms CSS pattern, properly framed`,`Distribution pipeline (DS-003, DS-011, DS-012) moved to Ops — DevOps dependency`]}])}

      ${i(`v0.5.0 — Pre-release`,!1,[{heading:`Iconography system (DS-082, DS-084, DS-085)`,items:[`mms-icon web component — Lit-based icon renderer with size tokens (sm/md/lg/xl)`,`Phosphor icon registry — 7,371-line registry with all Phosphor icons, 6 weights`,`Icon gallery — interactive Storybook gallery with live search and copy-to-clipboard`,`Direction prop — rotate icons (up/right/down/left) for directional indicators`,`Badge prop — notification dot or count pill overlay`]},{heading:`Theme package scaffolding (DS-006)`,items:[`Self-hosted brand fonts — Avenir Next LT Pro (Maximus), Source Sans Pro + Roboto Mono (VA.gov)`,`Theme CSS files — src/themes/maximus/, va-gov/, system/`,`Theme JSON definitions — tokens/themes/maximus.json, va-gov.json, default.json`,`Storybook theme loader — storybook-themes.css with data-theme attribute switching`]},{heading:`Color system enhancements`,items:[`Dark mode palettes — 12-step dark scales for all brand colors (primary-dark-1 through primary-dark-12)`,`Brand color verification — Maximus colors corrected to match official brand guide (Pantone Violet #502E91)`,`Hexcode column — dynamic hex values in token reference tables, updates with theme selection`,`Anchor step indicator — ▲ arrow below step 9 in scale visualizations`,`Consolidated UtilityColors into Colors.stories.ts`]},{heading:`Additional`,items:[`Typography token definitions — tokens/structural/typography.json`,`OKLCH color scale generator — scripts/generate-color-scale.js`,`MDX Playground pattern — Iconography.Playground.mdx, Typography.Playground.mdx`]}])}

      ${i(`v0.4.0 — Pre-release`,!1,[{heading:`Token foundation — Phase 1 in progress`,items:[`Focus-ring tokens — 5 structural tokens (width/style/color/offset/inset-offset); focusRing + focusRingInset shared CSSResult exports; first shared style primitive in the system; Storybook story at Foundations/Focus Ring (DS-008b)`]},{heading:`Infrastructure`,items:[`GH Pages deploy setup — predeploy/deploy scripts, gh-pages package, patch-storybook.cjs for relative path fix; deploys to public mms-ds-storybook repo`,`/publish-storybook skill — documents the full GH Pages deploy workflow`]},{heading:`Platform tooling`,items:[`Commit workflow — /commit Gate 4 now auto-bumps ticket to pending-review before the review pause`,`/update-docs skill — now includes Welcome page version bump step`]}])}

      ${i(`v0.3.0 — Pre-release`,!1,[{heading:`Token foundation — Phase 1 in progress`,items:[`Radius tokens — 6-step scale: none/xs/sm/md/lg/full extracted from Marina; Storybook story at Foundations/Radius (DS-007a)`,`Elevation tokens — 5-step shadow scale: none/sm/md/lg/xl extracted from Marina; Storybook story at Foundations/Elevation (DS-007b)`,`Layout tokens — AI-native container shape: max-width (1280px), padding-inline (16/24px), gap scale (tight/default/loose/comfortable); two Storybook stories — Layout System + Designing in Figma (DS-008a)`,`Motion tokens — duration scale (instant/fast/base/moderate/slow) and easing curves (standard/enter/exit/linear) derived from Carbon (IBM) and Material Design 3; Section 508 / ADA Title II compliance callout; Storybook story at Foundations/Motion (DS-007c)`]},{heading:`Documentation`,items:[`Storybook typography normalization — all foundation stories aligned to Layout opacity scale (0.85 body / 0.75 headers / 0.65 secondary values); consistent t object and PROSE_MAX/PAGE_MAX across all Foundations and Introduction pages (DS-078)`]},{heading:`Platform tooling`,items:[`Tracker committed column — lifecycle: backlog → in-progress → pending-review → committed → done`,`Commit workflow Gate 7 — /commit auto-bumps ticket status to committed after every commit`,`Tracker header — done/total tasks (%) format`,`/local-tracker command — HTTP server on port 7000`]}])}

      ${i(`v0.2.0 — Pre-release`,!1,[{heading:`Token foundation — Phase 1 in progress`,items:[`Utility color primitives — success/error/caution/informational (DS-005b); USWDS caution values to meet WCAG AA; informational references neutral palette at semantic layer`]},{heading:`Bug fixes`,items:[`Storybook dark mode detection — Storybook 10 injects backgrounds via <style> tag; fixed with transitionend listener to read final color after 300ms CSS transition`]}])}

      ${i(`v0.1.0 — Pre-release`,!1,[{heading:`Platform tooling`,items:[`AI workflow layer — .claude/ directory, hooks, CLAUDE.md architectural intelligence`,`Task tracker — local tracker with /tracker command and HTML export`,`Git workflow skills — /commit, /pr-create, /pr-merge, /list-commits`,`Storybook 10 shell — Introduction pages (Welcome, Architecture, What's New), 36 placeholder stories across 8 categories`]},{heading:`Token foundation — Phase 1 in progress`,items:[`Spacing token scale — 19 tokens, Marina-based (xs1 through xxl4)`,`Neutral color primitives — 6 tokens following Marina structure (--color-neutral-black / 500 / 400 / 300 / 200 / white); 300 added as mirror pair for 400 in light/dark mode`]}])}

    </div>
  `},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "What's New",
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 760px; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 1.75rem; font-weight: 700;">What's New</h1>
      <p style="margin: 0 0 2.5rem; opacity: 0.85; font-size: 0.875rem;">Version history for the Maximus Design System Platform. Updated after every PR merge.</p>

      \${entry('v0.5.1 — Pre-release', true, [{
    heading: 'Copilot migration infrastructure (PR #19)',
    items: ['copilot-instructions.md — full architectural context auto-loaded every Copilot session; synced with .claude/CLAUDE.md', '16 prompt files — all commands and skills invocable via / in Copilot chat (commit, pr-create, pr-merge, tracker, token-definition, visual-validate, save-session, etc.)', 'Hooks — SessionStart (session bootstrap), UserPromptSubmit (context monitor), VS Code-compatible hook scripts', 'Playwright MCP — .vscode/mcp.json configured; browsers pre-cached', 'Session continuity — richer session-log format (9 fields), autonomous save triggers, most-recent-entry-only loading']
  }, {
    heading: 'Tracker restructure',
    items: ['Phases remapped: Phase 1 (done), Phase 2 (Workflows), Phase 3 (11 initial components), Phase 4 (16 full), Phase 5 (5 gov-specific), Ops (infrastructure)', '31 mms-* component tickets — Marina source + mms CSS pattern, properly framed', 'Distribution pipeline (DS-003, DS-011, DS-012) moved to Ops — DevOps dependency']
  }])}

      \${entry('v0.5.0 — Pre-release', false, [{
    heading: 'Iconography system (DS-082, DS-084, DS-085)',
    items: ['mms-icon web component — Lit-based icon renderer with size tokens (sm/md/lg/xl)', 'Phosphor icon registry — 7,371-line registry with all Phosphor icons, 6 weights', 'Icon gallery — interactive Storybook gallery with live search and copy-to-clipboard', 'Direction prop — rotate icons (up/right/down/left) for directional indicators', 'Badge prop — notification dot or count pill overlay']
  }, {
    heading: 'Theme package scaffolding (DS-006)',
    items: ['Self-hosted brand fonts — Avenir Next LT Pro (Maximus), Source Sans Pro + Roboto Mono (VA.gov)', 'Theme CSS files — src/themes/maximus/, va-gov/, system/', 'Theme JSON definitions — tokens/themes/maximus.json, va-gov.json, default.json', 'Storybook theme loader — storybook-themes.css with data-theme attribute switching']
  }, {
    heading: 'Color system enhancements',
    items: ['Dark mode palettes — 12-step dark scales for all brand colors (primary-dark-1 through primary-dark-12)', 'Brand color verification — Maximus colors corrected to match official brand guide (Pantone Violet #502E91)', 'Hexcode column — dynamic hex values in token reference tables, updates with theme selection', 'Anchor step indicator — ▲ arrow below step 9 in scale visualizations', 'Consolidated UtilityColors into Colors.stories.ts']
  }, {
    heading: 'Additional',
    items: ['Typography token definitions — tokens/structural/typography.json', 'OKLCH color scale generator — scripts/generate-color-scale.js', 'MDX Playground pattern — Iconography.Playground.mdx, Typography.Playground.mdx']
  }])}

      \${entry('v0.4.0 — Pre-release', false, [{
    heading: 'Token foundation — Phase 1 in progress',
    items: ['Focus-ring tokens — 5 structural tokens (width/style/color/offset/inset-offset); focusRing + focusRingInset shared CSSResult exports; first shared style primitive in the system; Storybook story at Foundations/Focus Ring (DS-008b)']
  }, {
    heading: 'Infrastructure',
    items: ['GH Pages deploy setup — predeploy/deploy scripts, gh-pages package, patch-storybook.cjs for relative path fix; deploys to public mms-ds-storybook repo', '/publish-storybook skill — documents the full GH Pages deploy workflow']
  }, {
    heading: 'Platform tooling',
    items: ['Commit workflow — /commit Gate 4 now auto-bumps ticket to pending-review before the review pause', '/update-docs skill — now includes Welcome page version bump step']
  }])}

      \${entry('v0.3.0 — Pre-release', false, [{
    heading: 'Token foundation — Phase 1 in progress',
    items: ['Radius tokens — 6-step scale: none/xs/sm/md/lg/full extracted from Marina; Storybook story at Foundations/Radius (DS-007a)', 'Elevation tokens — 5-step shadow scale: none/sm/md/lg/xl extracted from Marina; Storybook story at Foundations/Elevation (DS-007b)', 'Layout tokens — AI-native container shape: max-width (1280px), padding-inline (16/24px), gap scale (tight/default/loose/comfortable); two Storybook stories — Layout System + Designing in Figma (DS-008a)', 'Motion tokens — duration scale (instant/fast/base/moderate/slow) and easing curves (standard/enter/exit/linear) derived from Carbon (IBM) and Material Design 3; Section 508 / ADA Title II compliance callout; Storybook story at Foundations/Motion (DS-007c)']
  }, {
    heading: 'Documentation',
    items: ['Storybook typography normalization — all foundation stories aligned to Layout opacity scale (0.85 body / 0.75 headers / 0.65 secondary values); consistent t object and PROSE_MAX/PAGE_MAX across all Foundations and Introduction pages (DS-078)']
  }, {
    heading: 'Platform tooling',
    items: ['Tracker committed column — lifecycle: backlog → in-progress → pending-review → committed → done', 'Commit workflow Gate 7 — /commit auto-bumps ticket status to committed after every commit', 'Tracker header — done/total tasks (%) format', '/local-tracker command — HTTP server on port 7000']
  }])}

      \${entry('v0.2.0 — Pre-release', false, [{
    heading: 'Token foundation — Phase 1 in progress',
    items: ['Utility color primitives — success/error/caution/informational (DS-005b); USWDS caution values to meet WCAG AA; informational references neutral palette at semantic layer']
  }, {
    heading: 'Bug fixes',
    items: ['Storybook dark mode detection — Storybook 10 injects backgrounds via <style> tag; fixed with transitionend listener to read final color after 300ms CSS transition']
  }])}

      \${entry('v0.1.0 — Pre-release', false, [{
    heading: 'Platform tooling',
    items: ['AI workflow layer — .claude/ directory, hooks, CLAUDE.md architectural intelligence', 'Task tracker — local tracker with /tracker command and HTML export', 'Git workflow skills — /commit, /pr-create, /pr-merge, /list-commits', "Storybook 10 shell — Introduction pages (Welcome, Architecture, What's New), 36 placeholder stories across 8 categories"]
  }, {
    heading: 'Token foundation — Phase 1 in progress',
    items: ['Spacing token scale — 19 tokens, Marina-based (xs1 through xxl4)', 'Neutral color primitives — 6 tokens following Marina structure (--color-neutral-black / 500 / 400 / 300 / 200 / white); 300 added as mirror pair for 400 in light/dark mode']
  }])}

    </div>
  \`
}`,...a.parameters?.docs?.source}}},o=[`WhatsNew`]}))();export{a as WhatsNew,o as __namedExportsOrder,r as default};