import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-aQ4dERgF.js";var r,i,a,o,s;e((()=>{n(),r=`960px`,i={title:`Introduction/What's New`},a=(e,n,r)=>t`
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
`,o={name:`What's New`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${r}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 1.75rem; font-weight: 700;">What's new</h1>
      <p style="margin: 0 0 2.5rem; opacity: 0.85; font-size: 0.875rem;">Version history for the Maximus Design System Platform. Updated after every PR merge.</p>

      ${a(`v0.14.0 — Pre-release — 2026-07-22`,!0,[{heading:`Components`,items:[`mms-radio-group — Group wrapper for mms-radio elements with WAI-ARIA radio group pattern, arrow key navigation, single-selection behavior (DS-052)`]},{heading:`Testing`,items:[`Added dedicated a11y test suite with 14 Playwright + axe-core tests for radio-group`,`Extracted shared a11y utilities to tests/a11y-utils.ts for Playwright compatibility`]}])}

      ${a(`v0.13.1 — Pre-release — 2026-07-22`,!1,[{heading:`UX improvements`,items:[`Hide Storybook addon panel by default — uses Storybook 10 layoutCustomisations.showPanel() API (DS-124)`]},{heading:`Platform tooling`,items:[`Updated /publish-npm skill with VPN connectivity check and verification gates`]}])}

      ${a(`v0.13.0 — Pre-release — 2026-07-22`,!1,[{heading:`Components`,items:[`mms-radio — single-selection radio button, 4 color schemes, 3 sizes, 67 unit tests (DS-049)`,`mms-checkbox-group — group wrapper with tooltip shell, density support, 45 unit tests (DS-050)`,`mms-checkbox — pixel-perfect indicators, indeterminate state, 66 unit tests (DS-051)`]},{heading:`Accessibility`,items:[`WCAG 1.4.11 neutral-7 fix — form control borders now meet 3:1 contrast ratio`,`Accessibility documentation added to Radio, Checkbox, and CheckboxGroup Overviews`]},{heading:`Bug fixes`,items:[`Fixed sr-only buttons visible in dark mode args table section headers (DS-123)`,`Fixed tree-shaking of mms-icon-gallery in production build`]}])}

      ${a(`v0.12.3 — Pre-release — 2026-07-20`,!1,[{heading:`Platform tooling`,items:[`/publish-npm skill — full workflow for publishing to JFrog Artifactory (DS-121)`,`Fixed verify-bundle.mjs npm pack conflicts (temp directory isolation)`,`Fixed husky prepare script error during npm publish`,`DS-122 marked blocked — Copilot hooks bypassable by enterprise policy`]}])}

      ${a(`v0.12.2 — Pre-release — 2026-07-20`,!1,[{heading:`Platform tooling`,items:[`Workflow governance hooks — 9 of 13 hooks now hard-enforced via Husky + direnv (DS-122)`,`Copilot hooks blocked by enterprise policy — implemented alternative enforcement stack`,`Guards: commit-guard, protect-branches, tracker-status-guard, check-image-size, tracker-drift-check, post-commit-reminder, pr-create-guard, pr-merge-guard, violation-guard`]}])}

      ${a(`v0.12.1 — Pre-release — 2026-07-19`,!1,[{heading:`Bug fix`,items:[`Storybook sidebar — storySort order now matches (Coming soon) story title suffixes`]}])}

      ${a(`v0.12.0 — Pre-release — 2026-07-19`,!1,[{heading:`Components`,items:[`mms-link component — external link styling with arrow icon, accessibility-first design (DS-027)`,`icon-only mode for mms-button — compact icon buttons with WCAG 2.2 touch target sizing (DS-067)`]},{heading:`Storybook polish`,items:[`Page centering — all Foundations/Introduction/Developer Guide pages now centered with margin: 0 auto`,`(Coming soon) labels — 24 component placeholder stories marked in sidebar`,`(Draft) labels — 4 Developer Guide stories marked in sidebar`,`PAGE_MAX standardization — all doc pages use consistent 960px max-width`]},{heading:`Platform tooling`,items:[`Husky git hooks — deterministic pre-commit validation`,`.github/memory/ — parallel memory files for Copilot access`,`DS-119 theme intake planning — Virginia engagement preparation`]}])}

      ${a(`v0.11.0 — Pre-release — 2026-07-16`,!1,[{heading:`NPM distribution live (DS-117)`,items:[`First package published to JFrog Artifactory — @mms/design-system@0.10.0`,`Consumer installation path verified — npm install with registry flag`,`React wrappers (MmsButton, MmsIcon) using @lit/react — typed props, React events, ref forwarding`,`CSS exports fixed for ESM bundlers (Vite) — added import/default conditions`,`Developer Guide updated — theme activation (data-theme attribute) documented`]}])}

      ${a(`v0.10.0 — Pre-release — 2026-07-15`,!1,[{heading:`NPM package infrastructure (DS-089)`,items:[`CI/CD workflows — ci.yml (build/test), publish.yml (JFrog deploy), dependabot.yml`,`Build pipeline — esbuild bundling, TypeScript declarations, tree-shaking`,`Changelog automation — standard-version with conventional commits`,`Developer Guide — 4 Storybook stories (Overview, Installation, HTML/React usage)`,`DevOps handoff documentation for JFrog Artifactory registry setup`,`LICENSE — Maximus proprietary, internal use only`]}])}

      ${a(`v0.9.0 — Pre-release — 2026-07-14`,!1,[{heading:`First interactive component (DS-047)`,items:[`mms-button component — primary/secondary/ghost variants with full accessibility`,`43 unit tests (Vitest + jsdom + @open-wc/testing)`,`Theme constraints — decorative color blocking per theme (colors without hover/pressed states)`,`Onyx color palette — structural black available across all themes`,`colorScheme prop — primary/secondary/accent/onyx per theme support`]},{heading:`Color documentation`,items:[`Color Framework story — explains 3 color scenarios and classification criteria`,`Structural Colors story — documents neutral and utility palettes`,`Storybook ordering fix — Colors pages now render in correct order`]},{heading:`Testing infrastructure`,items:[`validate-tokens.mjs fix — no longer flags locally-defined CSS custom properties`,`.gitignore excludes test-results/ — industry best practice`,`Test helpers (src/tests/helpers.ts) — reusable Lit component test utilities`]}])}

      ${a(`v0.8.0 — Pre-release — 2026-07-09`,!1,[{heading:`Test infrastructure & governance (DS-083, DS-111)`,items:[`Vitest + Playwright test infrastructure — smoke tests, a11y audits, visual regression baseline`,`Dual-agent skill system — .github/agents/ (Copilot) + .claude/skills/ (Claude Code) in sync`,`Component contracts — CSS tokens, testing, Storybook, accessibility rules`,`Token validation scripts — validate-tokens.mjs, audit-hardcoded-values.mjs`,`Skill chain enforcement — mandatory after-completion prompts in workflow governance`]},{heading:`Documentation standards (DS-014, DS-015, DS-016, DS-102)`,items:[`Storybook standards contract — docs-only approach, single Default story`,`Accessibility audit workflow — 5-layer testing methodology`,`Token strategy guide — token-first porting from Marina`,`Global props strategy — ENV props, theme attributes, writingsystem`]}])}

      ${a(`v0.7.0 — Pre-release — 2026-07-09`,!1,[{heading:`Color token architecture (DS-108)`,items:[`Neutral primitives with light/dark variants — --neutral-light-* and --neutral-dark-* in :root`,`Theme files moved to tokens/themes/ — [data-theme] aliases to correct primitives per mode`,`Utility colors fixed — caution emphasis #936f38 (USWDS warning-darker, 4.59:1 AA)`,`Semantic typography tokens — 85 tokens (--type-heading-*, --type-body-*, --type-ui-*, --type-code-*)`]},{heading:`Semantic state tokens (DS-105)`,items:[`13 new semantic state tokens — action (solid/subtle hover/pressed), surface (hover/active, brand variants), input validation (error/success/caution)`,`State Styling documentation rewritten — 6-section structure (definition, scope, architecture, token reference, rationale, code examples)`,`Step-shifting pattern — 9→10→11 for solid, 3→4→5 for surface; exit-to-neutral for disabled`]},{heading:`Token scale additions (DS-103, DS-104)`,items:[`Border-width scale — 6 tokens (none/xs/sm/md/lg/xl: 0/1/2/3/4/6px)`,`Size tokens added — size-0 (0px) and size-lg-28 (28px) for ui-kit migration parity`]},{heading:`Platform tooling`,items:[`tracker-status-guard.sh hook — blocks unauthorized tracker status changes`,`Release dates added to all version history entries`]}])}

      ${a(`v0.6.0 — Pre-release — 2026-07-07`,!1,[{heading:`Style Dictionary token pipeline (DS-009)`,items:[`Style Dictionary config — compiles structural → semantic → theme layers`,`12-step OKLCH color scales for brand palettes (Maximus, VA.gov, Default)`,`Dark mode visibility tuning — L values [0.120, 0.195, 0.215, 0.230, 0.270...] with Hunt effect chroma boost`,`Size token scale — 18 tokens mirroring spacing with 44px WCAG touch target`,`Storybook Foundations alphabetized; Size story added`]},{heading:`Component authoring workflow (DS-013)`,items:[`build-component.prompt.md — 6-phase component authoring workflow`,`Plan-mode refinement for complex components`,`Agentic testing phase (Playwright MCP)`]},{heading:`Tracker additions`,items:[`DS-103–106 added (Phase 2 token refinement backlog)`]}])}

      ${a(`v0.5.1 — Pre-release — 2026-07-02`,!1,[{heading:`Copilot migration infrastructure (PR #19)`,items:[`copilot-instructions.md — full architectural context auto-loaded every Copilot session; synced with .claude/CLAUDE.md`,`16 prompt files — all commands and skills invocable via / in Copilot chat (commit, pr-create, pr-merge, tracker, token-definition, visual-validate, save-session, etc.)`,`Hooks — SessionStart (session bootstrap), UserPromptSubmit (context monitor), VS Code-compatible hook scripts`,`Playwright MCP — .vscode/mcp.json configured; browsers pre-cached`,`Session continuity — richer session-log format (9 fields), autonomous save triggers, most-recent-entry-only loading`]},{heading:`Tracker restructure`,items:[`Phases remapped: Phase 1 (done), Phase 2 (Workflows), Phase 3 (11 initial components), Phase 4 (16 full), Phase 5 (5 gov-specific), Ops (infrastructure)`,`31 mms-* component tickets — Marina source + mms CSS pattern, properly framed`,`Distribution pipeline (DS-003, DS-011, DS-012) moved to Ops — DevOps dependency`]}])}

      ${a(`v0.5.0 — Pre-release — 2026-07-01`,!1,[{heading:`Iconography system (DS-082, DS-084, DS-085)`,items:[`mms-icon web component — Lit-based icon renderer with size tokens (sm/md/lg/xl)`,`Phosphor icon registry — 7,371-line registry with all Phosphor icons, 6 weights`,`Icon gallery — interactive Storybook gallery with live search and copy-to-clipboard`,`Direction prop — rotate icons (up/right/down/left) for directional indicators`,`Badge prop — notification dot or count pill overlay`]},{heading:`Theme package scaffolding (DS-006)`,items:[`Self-hosted brand fonts — Avenir Next LT Pro (Maximus), Source Sans Pro + Roboto Mono (VA.gov)`,`Theme CSS files — src/themes/maximus/, va-gov/, system/`,`Theme JSON definitions — tokens/themes/maximus.json, va-gov.json, default.json`,`Storybook theme loader — storybook-themes.css with data-theme attribute switching`]},{heading:`Color system enhancements`,items:[`Dark mode palettes — 12-step dark scales for all brand colors (primary-dark-1 through primary-dark-12)`,`Brand color verification — Maximus colors corrected to match official brand guide (Pantone Violet #502E91)`,`Hexcode column — dynamic hex values in token reference tables, updates with theme selection`,`Anchor step indicator — ▲ arrow below step 9 in scale visualizations`,`Consolidated UtilityColors into Colors.stories.ts`]},{heading:`Additional`,items:[`Typography token definitions — tokens/structural/typography.json`,`OKLCH color scale generator — scripts/generate-color-scale.js`,`MDX Playground pattern — Iconography.Playground.mdx, Typography.Playground.mdx`]}])}

      ${a(`v0.4.0 — Pre-release — 2026-06-26`,!1,[{heading:`Token foundation — Phase 1 in progress`,items:[`Focus-ring tokens — 5 structural tokens (width/style/color/offset/inset-offset); focusRing + focusRingInset shared CSSResult exports; first shared style primitive in the system; Storybook story at Foundations/Focus Ring (DS-008b)`]},{heading:`Infrastructure`,items:[`GH Pages deploy setup — predeploy/deploy scripts, gh-pages package, patch-storybook.cjs for relative path fix; deploys to public mms-ds-storybook repo`,`/publish-storybook skill — documents the full GH Pages deploy workflow`]},{heading:`Platform tooling`,items:[`Commit workflow — /commit Gate 4 now auto-bumps ticket to pending-review before the review pause`,`/update-docs skill — now includes Welcome page version bump step`]}])}

      ${a(`v0.3.0 — Pre-release — 2026-06-22`,!1,[{heading:`Token foundation — Phase 1 in progress`,items:[`Radius tokens — 6-step scale: none/xs/sm/md/lg/full extracted from Marina; Storybook story at Foundations/Radius (DS-007a)`,`Elevation tokens — 5-step shadow scale: none/sm/md/lg/xl extracted from Marina; Storybook story at Foundations/Elevation (DS-007b)`,`Layout tokens — AI-native container shape: max-width (1280px), padding-inline (16/24px), gap scale (tight/default/loose/comfortable); two Storybook stories — Layout System + Designing in Figma (DS-008a)`,`Motion tokens — duration scale (instant/fast/base/moderate/slow) and easing curves (standard/enter/exit/linear) derived from Carbon (IBM) and Material Design 3; Section 508 / ADA Title II compliance callout; Storybook story at Foundations/Motion (DS-007c)`]},{heading:`Documentation`,items:[`Storybook typography normalization — all foundation stories aligned to Layout opacity scale (0.85 body / 0.75 headers / 0.65 secondary values); consistent t object and PROSE_MAX/PAGE_MAX across all Foundations and Introduction pages (DS-078)`]},{heading:`Platform tooling`,items:[`Tracker committed column — lifecycle: backlog → in-progress → pending-review → committed → done`,`Commit workflow Gate 7 — /commit auto-bumps ticket status to committed after every commit`,`Tracker header — done/total tasks (%) format`,`/local-tracker command — HTTP server on port 7000`]}])}

      ${a(`v0.2.0 — Pre-release — 2026-06-16`,!1,[{heading:`Token foundation — Phase 1 in progress`,items:[`Utility color primitives — success/error/caution/informational (DS-005b); USWDS caution values to meet WCAG AA; informational references neutral palette at semantic layer`]},{heading:`Bug fixes`,items:[`Storybook dark mode detection — Storybook 10 injects backgrounds via <style> tag; fixed with transitionend listener to read final color after 300ms CSS transition`]}])}

      ${a(`v0.1.0 — Pre-release — 2026-06-16`,!1,[{heading:`Platform tooling`,items:[`AI workflow layer — .claude/ directory, hooks, CLAUDE.md architectural intelligence`,`Task tracker — local tracker with /tracker command and HTML export`,`Git workflow skills — /commit, /pr-create, /pr-merge, /list-commits`,`Storybook 10 shell — Introduction pages (Welcome, Architecture, What's New), 36 placeholder stories across 8 categories`]},{heading:`Token foundation — Phase 1 in progress`,items:[`Spacing token scale — 19 tokens, Marina-based (xs1 through xxl4)`,`Neutral color primitives — 6 tokens following Marina structure (--color-neutral-black / 500 / 400 / 300 / 200 / white); 300 added as mirror pair for 400 in light/dark mode`]}])}

    </div>
  `},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "What's New",
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 1.75rem; font-weight: 700;">What's new</h1>
      <p style="margin: 0 0 2.5rem; opacity: 0.85; font-size: 0.875rem;">Version history for the Maximus Design System Platform. Updated after every PR merge.</p>

      \${entry('v0.14.0 — Pre-release — 2026-07-22', true, [{
    heading: 'Components',
    items: ['mms-radio-group — Group wrapper for mms-radio elements with WAI-ARIA radio group pattern, arrow key navigation, single-selection behavior (DS-052)']
  }, {
    heading: 'Testing',
    items: ['Added dedicated a11y test suite with 14 Playwright + axe-core tests for radio-group', 'Extracted shared a11y utilities to tests/a11y-utils.ts for Playwright compatibility']
  }])}

      \${entry('v0.13.1 — Pre-release — 2026-07-22', false, [{
    heading: 'UX improvements',
    items: ['Hide Storybook addon panel by default — uses Storybook 10 layoutCustomisations.showPanel() API (DS-124)']
  }, {
    heading: 'Platform tooling',
    items: ['Updated /publish-npm skill with VPN connectivity check and verification gates']
  }])}

      \${entry('v0.13.0 — Pre-release — 2026-07-22', false, [{
    heading: 'Components',
    items: ['mms-radio — single-selection radio button, 4 color schemes, 3 sizes, 67 unit tests (DS-049)', 'mms-checkbox-group — group wrapper with tooltip shell, density support, 45 unit tests (DS-050)', 'mms-checkbox — pixel-perfect indicators, indeterminate state, 66 unit tests (DS-051)']
  }, {
    heading: 'Accessibility',
    items: ['WCAG 1.4.11 neutral-7 fix — form control borders now meet 3:1 contrast ratio', 'Accessibility documentation added to Radio, Checkbox, and CheckboxGroup Overviews']
  }, {
    heading: 'Bug fixes',
    items: ['Fixed sr-only buttons visible in dark mode args table section headers (DS-123)', 'Fixed tree-shaking of mms-icon-gallery in production build']
  }])}

      \${entry('v0.12.3 — Pre-release — 2026-07-20', false, [{
    heading: 'Platform tooling',
    items: ['/publish-npm skill — full workflow for publishing to JFrog Artifactory (DS-121)', 'Fixed verify-bundle.mjs npm pack conflicts (temp directory isolation)', 'Fixed husky prepare script error during npm publish', 'DS-122 marked blocked — Copilot hooks bypassable by enterprise policy']
  }])}

      \${entry('v0.12.2 — Pre-release — 2026-07-20', false, [{
    heading: 'Platform tooling',
    items: ['Workflow governance hooks — 9 of 13 hooks now hard-enforced via Husky + direnv (DS-122)', 'Copilot hooks blocked by enterprise policy — implemented alternative enforcement stack', 'Guards: commit-guard, protect-branches, tracker-status-guard, check-image-size, tracker-drift-check, post-commit-reminder, pr-create-guard, pr-merge-guard, violation-guard']
  }])}

      \${entry('v0.12.1 — Pre-release — 2026-07-19', false, [{
    heading: 'Bug fix',
    items: ['Storybook sidebar — storySort order now matches (Coming soon) story title suffixes']
  }])}

      \${entry('v0.12.0 — Pre-release — 2026-07-19', false, [{
    heading: 'Components',
    items: ['mms-link component — external link styling with arrow icon, accessibility-first design (DS-027)', 'icon-only mode for mms-button — compact icon buttons with WCAG 2.2 touch target sizing (DS-067)']
  }, {
    heading: 'Storybook polish',
    items: ['Page centering — all Foundations/Introduction/Developer Guide pages now centered with margin: 0 auto', '(Coming soon) labels — 24 component placeholder stories marked in sidebar', '(Draft) labels — 4 Developer Guide stories marked in sidebar', 'PAGE_MAX standardization — all doc pages use consistent 960px max-width']
  }, {
    heading: 'Platform tooling',
    items: ['Husky git hooks — deterministic pre-commit validation', '.github/memory/ — parallel memory files for Copilot access', 'DS-119 theme intake planning — Virginia engagement preparation']
  }])}

      \${entry('v0.11.0 — Pre-release — 2026-07-16', false, [{
    heading: 'NPM distribution live (DS-117)',
    items: ['First package published to JFrog Artifactory — @mms/design-system@0.10.0', 'Consumer installation path verified — npm install with registry flag', 'React wrappers (MmsButton, MmsIcon) using @lit/react — typed props, React events, ref forwarding', 'CSS exports fixed for ESM bundlers (Vite) — added import/default conditions', 'Developer Guide updated — theme activation (data-theme attribute) documented']
  }])}

      \${entry('v0.10.0 — Pre-release — 2026-07-15', false, [{
    heading: 'NPM package infrastructure (DS-089)',
    items: ['CI/CD workflows — ci.yml (build/test), publish.yml (JFrog deploy), dependabot.yml', 'Build pipeline — esbuild bundling, TypeScript declarations, tree-shaking', 'Changelog automation — standard-version with conventional commits', 'Developer Guide — 4 Storybook stories (Overview, Installation, HTML/React usage)', 'DevOps handoff documentation for JFrog Artifactory registry setup', 'LICENSE — Maximus proprietary, internal use only']
  }])}

      \${entry('v0.9.0 — Pre-release — 2026-07-14', false, [{
    heading: 'First interactive component (DS-047)',
    items: ['mms-button component — primary/secondary/ghost variants with full accessibility', '43 unit tests (Vitest + jsdom + @open-wc/testing)', 'Theme constraints — decorative color blocking per theme (colors without hover/pressed states)', 'Onyx color palette — structural black available across all themes', 'colorScheme prop — primary/secondary/accent/onyx per theme support']
  }, {
    heading: 'Color documentation',
    items: ['Color Framework story — explains 3 color scenarios and classification criteria', 'Structural Colors story — documents neutral and utility palettes', 'Storybook ordering fix — Colors pages now render in correct order']
  }, {
    heading: 'Testing infrastructure',
    items: ['validate-tokens.mjs fix — no longer flags locally-defined CSS custom properties', '.gitignore excludes test-results/ — industry best practice', 'Test helpers (src/tests/helpers.ts) — reusable Lit component test utilities']
  }])}

      \${entry('v0.8.0 — Pre-release — 2026-07-09', false, [{
    heading: 'Test infrastructure & governance (DS-083, DS-111)',
    items: ['Vitest + Playwright test infrastructure — smoke tests, a11y audits, visual regression baseline', 'Dual-agent skill system — .github/agents/ (Copilot) + .claude/skills/ (Claude Code) in sync', 'Component contracts — CSS tokens, testing, Storybook, accessibility rules', 'Token validation scripts — validate-tokens.mjs, audit-hardcoded-values.mjs', 'Skill chain enforcement — mandatory after-completion prompts in workflow governance']
  }, {
    heading: 'Documentation standards (DS-014, DS-015, DS-016, DS-102)',
    items: ['Storybook standards contract — docs-only approach, single Default story', 'Accessibility audit workflow — 5-layer testing methodology', 'Token strategy guide — token-first porting from Marina', 'Global props strategy — ENV props, theme attributes, writingsystem']
  }])}

      \${entry('v0.7.0 — Pre-release — 2026-07-09', false, [{
    heading: 'Color token architecture (DS-108)',
    items: ['Neutral primitives with light/dark variants — --neutral-light-* and --neutral-dark-* in :root', 'Theme files moved to tokens/themes/ — [data-theme] aliases to correct primitives per mode', 'Utility colors fixed — caution emphasis #936f38 (USWDS warning-darker, 4.59:1 AA)', 'Semantic typography tokens — 85 tokens (--type-heading-*, --type-body-*, --type-ui-*, --type-code-*)']
  }, {
    heading: 'Semantic state tokens (DS-105)',
    items: ['13 new semantic state tokens — action (solid/subtle hover/pressed), surface (hover/active, brand variants), input validation (error/success/caution)', 'State Styling documentation rewritten — 6-section structure (definition, scope, architecture, token reference, rationale, code examples)', 'Step-shifting pattern — 9→10→11 for solid, 3→4→5 for surface; exit-to-neutral for disabled']
  }, {
    heading: 'Token scale additions (DS-103, DS-104)',
    items: ['Border-width scale — 6 tokens (none/xs/sm/md/lg/xl: 0/1/2/3/4/6px)', 'Size tokens added — size-0 (0px) and size-lg-28 (28px) for ui-kit migration parity']
  }, {
    heading: 'Platform tooling',
    items: ['tracker-status-guard.sh hook — blocks unauthorized tracker status changes', 'Release dates added to all version history entries']
  }])}

      \${entry('v0.6.0 — Pre-release — 2026-07-07', false, [{
    heading: 'Style Dictionary token pipeline (DS-009)',
    items: ['Style Dictionary config — compiles structural → semantic → theme layers', '12-step OKLCH color scales for brand palettes (Maximus, VA.gov, Default)', 'Dark mode visibility tuning — L values [0.120, 0.195, 0.215, 0.230, 0.270...] with Hunt effect chroma boost', 'Size token scale — 18 tokens mirroring spacing with 44px WCAG touch target', 'Storybook Foundations alphabetized; Size story added']
  }, {
    heading: 'Component authoring workflow (DS-013)',
    items: ['build-component.prompt.md — 6-phase component authoring workflow', 'Plan-mode refinement for complex components', 'Agentic testing phase (Playwright MCP)']
  }, {
    heading: 'Tracker additions',
    items: ['DS-103–106 added (Phase 2 token refinement backlog)']
  }])}

      \${entry('v0.5.1 — Pre-release — 2026-07-02', false, [{
    heading: 'Copilot migration infrastructure (PR #19)',
    items: ['copilot-instructions.md — full architectural context auto-loaded every Copilot session; synced with .claude/CLAUDE.md', '16 prompt files — all commands and skills invocable via / in Copilot chat (commit, pr-create, pr-merge, tracker, token-definition, visual-validate, save-session, etc.)', 'Hooks — SessionStart (session bootstrap), UserPromptSubmit (context monitor), VS Code-compatible hook scripts', 'Playwright MCP — .vscode/mcp.json configured; browsers pre-cached', 'Session continuity — richer session-log format (9 fields), autonomous save triggers, most-recent-entry-only loading']
  }, {
    heading: 'Tracker restructure',
    items: ['Phases remapped: Phase 1 (done), Phase 2 (Workflows), Phase 3 (11 initial components), Phase 4 (16 full), Phase 5 (5 gov-specific), Ops (infrastructure)', '31 mms-* component tickets — Marina source + mms CSS pattern, properly framed', 'Distribution pipeline (DS-003, DS-011, DS-012) moved to Ops — DevOps dependency']
  }])}

      \${entry('v0.5.0 — Pre-release — 2026-07-01', false, [{
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

      \${entry('v0.4.0 — Pre-release — 2026-06-26', false, [{
    heading: 'Token foundation — Phase 1 in progress',
    items: ['Focus-ring tokens — 5 structural tokens (width/style/color/offset/inset-offset); focusRing + focusRingInset shared CSSResult exports; first shared style primitive in the system; Storybook story at Foundations/Focus Ring (DS-008b)']
  }, {
    heading: 'Infrastructure',
    items: ['GH Pages deploy setup — predeploy/deploy scripts, gh-pages package, patch-storybook.cjs for relative path fix; deploys to public mms-ds-storybook repo', '/publish-storybook skill — documents the full GH Pages deploy workflow']
  }, {
    heading: 'Platform tooling',
    items: ['Commit workflow — /commit Gate 4 now auto-bumps ticket to pending-review before the review pause', '/update-docs skill — now includes Welcome page version bump step']
  }])}

      \${entry('v0.3.0 — Pre-release — 2026-06-22', false, [{
    heading: 'Token foundation — Phase 1 in progress',
    items: ['Radius tokens — 6-step scale: none/xs/sm/md/lg/full extracted from Marina; Storybook story at Foundations/Radius (DS-007a)', 'Elevation tokens — 5-step shadow scale: none/sm/md/lg/xl extracted from Marina; Storybook story at Foundations/Elevation (DS-007b)', 'Layout tokens — AI-native container shape: max-width (1280px), padding-inline (16/24px), gap scale (tight/default/loose/comfortable); two Storybook stories — Layout System + Designing in Figma (DS-008a)', 'Motion tokens — duration scale (instant/fast/base/moderate/slow) and easing curves (standard/enter/exit/linear) derived from Carbon (IBM) and Material Design 3; Section 508 / ADA Title II compliance callout; Storybook story at Foundations/Motion (DS-007c)']
  }, {
    heading: 'Documentation',
    items: ['Storybook typography normalization — all foundation stories aligned to Layout opacity scale (0.85 body / 0.75 headers / 0.65 secondary values); consistent t object and PROSE_MAX/PAGE_MAX across all Foundations and Introduction pages (DS-078)']
  }, {
    heading: 'Platform tooling',
    items: ['Tracker committed column — lifecycle: backlog → in-progress → pending-review → committed → done', 'Commit workflow Gate 7 — /commit auto-bumps ticket status to committed after every commit', 'Tracker header — done/total tasks (%) format', '/local-tracker command — HTTP server on port 7000']
  }])}

      \${entry('v0.2.0 — Pre-release — 2026-06-16', false, [{
    heading: 'Token foundation — Phase 1 in progress',
    items: ['Utility color primitives — success/error/caution/informational (DS-005b); USWDS caution values to meet WCAG AA; informational references neutral palette at semantic layer']
  }, {
    heading: 'Bug fixes',
    items: ['Storybook dark mode detection — Storybook 10 injects backgrounds via <style> tag; fixed with transitionend listener to read final color after 300ms CSS transition']
  }])}

      \${entry('v0.1.0 — Pre-release — 2026-06-16', false, [{
    heading: 'Platform tooling',
    items: ['AI workflow layer — .claude/ directory, hooks, CLAUDE.md architectural intelligence', 'Task tracker — local tracker with /tracker command and HTML export', 'Git workflow skills — /commit, /pr-create, /pr-merge, /list-commits', "Storybook 10 shell — Introduction pages (Welcome, Architecture, What's New), 36 placeholder stories across 8 categories"]
  }, {
    heading: 'Token foundation — Phase 1 in progress',
    items: ['Spacing token scale — 19 tokens, Marina-based (xs1 through xxl4)', 'Neutral color primitives — 6 tokens following Marina structure (--color-neutral-black / 500 / 400 / 300 / 200 / white); 300 added as mirror pair for 400 in light/dark mode']
  }])}

    </div>
  \`
}`,...o.parameters?.docs?.source}}},s=[`WhatsNew`]}))();export{o as WhatsNew,s as __namedExportsOrder,i as default};