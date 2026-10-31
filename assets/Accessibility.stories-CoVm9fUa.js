import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{c as r,s as i}from"./mms-icon.component-DFVI3nJi.js";import{t as a}from"./mms-card.component-Ae9XIj4r.js";import{n as o,t as s}from"./wcag-coverage-DNhlI7v1.js";import{t as c}from"./mms-inline-alert.component-BWndcKtJ.js";import{a as l,c as u,i as d,l as f,n as p,o as m,r as h,s as g,u as _}from"./doc-styles-BoEZknkJ.js";import{i as v,n as y}from"./a11y-outcome-o7pti1Vx.js";var b=e((()=>{i()}));function x(e){let t=new Map;for(let n of e)t.has(n.component)||t.set(n.component,[]),t.get(n.component).push(n);return t}function S(e){let t={};for(let n of e)t[n.result]=(t[n.result]??0)+1;let n=e.filter(e=>e.flaky).length,r=Object.entries(t).map(([e,t])=>`${t} ${e}`).join(`, `);return n>0?`${r} (⚠ ${n} FLAKY)`:r}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;e((()=>{n(),b(),a(),c(),y(),o(),u(),C={title:`Foundations/Accessibility`,excludeStories:[`CATEGORY_STATE_APPLICABILITY`]},w=`${l.divider} margin-top: ${f.subsection};`,T=`${_.body} ${l.muted} max-width: ${d}; margin: 0 0 ${f.content}; padding-left: var(--spacing-lg1);`,E=`margin-bottom: ${f.label};`,D=`font-family: var(--type-body-sm-family); font-size: var(--type-body-sm-size); line-height: var(--type-body-sm-line-height); letter-spacing: var(--type-body-sm-letter-spacing, normal); font-weight: var(--type-body-sm-weight);`,O=`.a11y-doc :not(pre) > code { ${g.code} }`,k=(e,n,i=`informational`)=>(n.match(/<code>/g)??[]).length<=1?t`
  <div style="margin-bottom: ${f.subsection};">
    <mms-inline-alert
      alert-type=${i}
      role="note"
      aria-live="off"
      .dismissible=${!1}
      summary="${e}:"
      message=${n.replace(/<[^>]+>/g,``)}
    ></mms-inline-alert>
  </div>
`:t`
  <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${f.subsection};">
    <div slot="body-content" style="${_.caption}">
      <p style="margin: 0;"><strong>${e}:</strong> ${r(n)}</p>
    </div>
  </mms-card>
`,A=[[`Default`,!0,!0,!0,!0,!0,!0,!0],[`Disabled`,!1,!0,!0,!1,!1,!1,!1],[`Readonly`,!0,!0,!0,!0,!1,!1,!1],[`Error`,!0,!0,!0,!0,!0,!1,!1],[`Required`,!1,!0,!1,!1,!1,!1,!1],[`Hover`,!0,!1,!1,!1,!1,!1,!1],[`Focus-visible`,!0,!1,!0,!1,!1,!1,!0],[`Dialog focus containment`,!1,!1,!0,!1,!1,!1,!1]],j=[{q:`What's this SC's Layer 1 class?`,note:`fixed per SC, forever — never a per-component judgment call`,branches:[[`Not-STP`,`PAGE-LEVEL`]],cont:`STP or Partial-STP — continue`},{q:`Is this SC applicable to this component/state?`,note:`mechanical trigger — same source-grep pattern for STP and Partial-STP`,branches:[[`No`,`N/A`]],cont:`Yes — continue`},{q:`Does the component expose the API/capability needed to test it?`,note:`a build gap, not a test-coverage gap — nothing exists yet to test`,branches:[[`No`,`BUILD GAP`]],cont:`Yes — continue`},{q:`Did the mechanical check pass?`,note:`uniform for STP and Partial-STP alike — a mechanical failure is a real failure regardless of classification`,branches:[[`No`,`FAIL`]],cont:`Yes — continue`},{q:`Is this SC Partial-STP?`,note:`the mechanical check already passed — this only decides whether a human still has to confirm the qualitative verdict`,branches:[[`No (STP)`,`PASS`],[`Yes`,`MANUAL`]]}],M=()=>t`
  <div style="${l.panel} display: flex; flex-direction: column; gap: 0; margin-bottom: ${f.subsection};">
    ${j.map((e,n)=>t`
        <div style="display: flex; gap: ${f.content}; ${n<j.length-1?`padding-bottom: ${f.content};`:``}">
          <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
            <div style="${_.caption} font-weight: 700; width: 2rem; height: 2rem; border-radius: 50%; background: var(--color-surface-raised); border: var(--border-width-xs) solid var(--color-border-default); display: flex; align-items: center; justify-content: center;">${n+1}</div>
            ${n<j.length-1?t`<div style="width: var(--border-width-sm); flex: 1; margin-top: var(--spacing-xs2); background: var(--color-border-subtle);"></div>`:``}
          </div>
          <div style="flex: 1; min-width: 0;">
            <p style="${_.body} font-weight: 600; margin: 0 0 var(--spacing-xs2);">${e.q}</p>
            ${e.note?t`<p style="${_.caption} ${l.muted} margin: 0 0 ${f.label};">${e.note}</p>`:t`<div style="height: ${f.label};"></div>`}
            <div style="display: flex; flex-direction: column; gap: ${f.label};">
              ${e.branches.map(([e,n])=>t`
                  <div style="display: flex; align-items: center; gap: ${f.label};">
                    <span style="${_.caption} ${l.muted} min-width: 130px;">↳ ${e}</span>
                    ${v(n)}
                  </div>
                `)}
              ${e.cont?t`<div style="${_.caption} ${l.muted} font-style: italic;">↳ ${e.cont} ↓</div>`:``}
            </div>
          </div>
        </div>
      `)}
  </div>
`,N={name:`Overview`,render:()=>t`
    <style>${O}</style>
    <div class="a11y-doc" data-theme=${h} data-mode=${m()} style=${p}>

      <h1 style="${_.h1}">Accessibility Testing Framework</h1>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.subsection};">Every mms component is validated against a mechanical coverage taxonomy — a fixed grid of category × state × cross-cutting-axis cells. Each cell resolves to exactly one of six fixed outcomes.</p>

      ${k(`Section 508 / ADA Title II`,`Maximus engagements are government-facing — federal engagements target Section 508, state engagements target ADA Title II. Both point to the same technical standard: WCAG. Compliance is enforced structurally, through this taxonomy and the token contracts in Foundations → Colors, not through one-off manual review.`,`informational`)}

      <hr style="${w}" />

      <h2 style="${_.h2}">Why mechanical, not manual</h2>
      <p style="${_.body} ${l.muted} max-width: ${d};">Manual a11y review does not scale across a multi-platform, multi-brand design system. A taxonomy that is derived mechanically from each component's own source (its declared properties, its CSS selectors, its ARIA role) means coverage requirements travel with the component automatically as it changes, rather than living in a checklist that quietly drifts out of date.</p>

      <hr style="${w}" />

      <h2 style="${_.h2}">STP resolution</h2>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">This is a VPAT-style model, and which outcomes are even reachable is gated by the SC's <strong>Layer 1 classification</strong> (see Coverage Taxonomy):</p>
      <ul style="${_.body} ${l.muted} max-width: ${d}; margin: 0 0 ${f.content}; padding-left: var(--spacing-lg1);">
        <li>a <strong>Not-STP</strong> SC is out of scope for component-level testing entirely — it resolves straight to PAGE-LEVEL and never enters the rest of this flow</li>
        <li>an <strong>STP</strong> SC can resolve to PASS, FAIL, BUILD GAP, or N/A</li>
        <li>a <strong>Partial-STP</strong> SC can resolve to FAIL, BUILD GAP, or N/A exactly like STP — a mechanical failure is a mechanical failure regardless of classification. The only place STP and Partial-STP diverge is what happens once the mechanical check <em>passes</em>: STP goes straight to PASS, Partial-STP goes to MANUAL — a contingent pass pending a human's confirmation of the qualitative verdict, never a contingent fail</li>
      </ul>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">No cell invents a seventh category, and no per-component judgment decides which of these applies outside this logic. The diagram below shows how a single SC walks through this logic to land on exactly one outcome:</p>

      ${M()}

      <h3 style="${_.h3}">Not-STP exits at step 1</h3>
      <p style="${_.body} ${l.muted} margin-bottom: ${f.content};">A Not-STP SC is resolved before the mechanical trigger ever runs.</p>
      <ul style="${T}">
        <li style="${E}"><strong>Why:</strong> the source-grep applicability check in step 2 only means something for STP and Partial-STP SCs, which genuinely vary by component and state.</li>
        <li style="${E}"><strong>What it covers:</strong> page-level requirements — page titles, consistent navigation, bypass blocks — that are the same for every component, always.</li>
        <li><strong>Result:</strong> resolved and out of scope at step 1, never evaluated against a per-component or per-state trigger it was never subject to.</li>
      </ul>

      <h3 style="${_.h3}">What "Partial-STP" means</h3>
      <p style="${_.body} ${l.muted} margin-bottom: ${f.content};">Mechanical on the trigger and on the failure case; human only on confirming a pass.</p>
      <ul style="${T}">
        <li style="${E}"><strong>Trigger:</strong> fully mechanical — the same mechanism and the same source-grep pattern as STP.</li>
        <li style="${E}"><strong>Pass/fail check:</strong> also mechanical, so a mechanical failure is a FAIL like any other.</li>
        <li><strong>What isn't mechanical:</strong> confirming the qualitative verdict. A human has to read it, which is why step 5 stops at MANUAL instead of guessing PASS.</li>
      </ul>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${f.content};">
        <div slot="body-content">
          <p style="${_.body} margin: 0 0 ${f.label};"><strong>Example: 1.1.1 Non-text Content</strong></p>
          <ul style="${_.body} margin: 0; padding-left: var(--spacing-lg1);">
            <li style="${E}"><strong>Mechanical:</strong> whether a non-decorative icon has an accessible name at all. Grep the render output for <code style="${_.mono}">aria-hidden</code> or a name string — steps 2–4 answer this definitively, and a missing name is a FAIL, full stop.</li>
            <li><strong>Human:</strong> whether a name that is present is actually <em>meaningful</em> ("close" vs. "x").</li>
          </ul>
        </div>
      </mms-card>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">Partial-STP is never excluded from the STP mechanism; it just can't self-certify a PASS.</p>

      <h3 style="${_.h3}">FAIL always ships with the fix</h3>
      <p style="${_.body} ${l.muted} margin-bottom: ${f.content};">A FAIL is never reported as a bare status.</p>
      <ul style="${T}">
        <li style="${E}"><strong>What it means:</strong> the test ran and didn't pass. For example, a border-color token that measures 2.1:1 against its background — axe can test contrast today.</li>
        <li style="${E}"><strong>What it carries:</strong> a diagnosis exactly as concrete as the failure, cited to a ticket — "border color must meet 3:1, swap token <code style="${_.mono}">X</code>."</li>
        <li><strong>What it never is:</strong> a plain red flag with no next step attached.</li>
      </ul>

      <h3 style="${_.h3}">BUILD GAP and FAIL never overlap</h3>
      <p style="${_.body} ${l.muted} margin-bottom: ${f.content};">They are mutually exclusive by construction, not by convention. Both require action; they answer different questions.</p>
      <ul style="${T}">
        <li style="${E}"><strong>Why they can't overlap:</strong> the capability check (step 3) resolves before pass/fail (step 4) is ever evaluated, so a cell can only reach FAIL after clearing the capability gate.</li>
        <li style="${E}"><strong>BUILD GAP</strong> is a gate <em>before</em> a test can run at all: the component hasn't shipped the surface a test needs yet — for example a missing <code>autocomplete</code> prop, so there is nothing to point a test at.</li>
        <li style="${E}"><strong>FAIL</strong> is what a completed test produces: the capability exists, the test ran, and it didn't pass.</li>
        <li><strong>Naming:</strong> BUILD GAP was originally "ACTION REQUIRED". It was renamed because FAIL requires action too — the old name implied FAIL didn't — and BUILD GAP names what this outcome actually is: a component-build gap.</li>
      </ul>

      <h3 style="${_.h3}">MANUAL is a contingent PASS</h3>
      <p style="${_.body} ${l.muted} margin-bottom: ${f.content};">Always a contingent pass, never a contingent fail.</p>
      <ul style="${T}">
        <li style="${E}"><strong>Before step 5:</strong> a Partial-STP SC has already cleared the same mechanical applicability, capability and pass/fail gates as an STP SC — the mechanical check passed.</li>
        <li style="${E}"><strong>What remains:</strong> a human confirms the qualitative verdict, recorded in a manual-review log per component and SC.</li>
        <li style="${E}"><strong>After review:</strong> the grid shows the attested result — for example "MANUAL — verified PASS, reviewed 2026-08-10" — so it stays clear that a human, not the audit script, produced it.</li>
        <li><strong>If the mechanical check had failed:</strong> the cell would already be FAIL at step 4 — a bigger problem than any manual review, and one that never reaches MANUAL.</li>
      </ul>

      <p style="${_.body} ${l.muted} max-width: ${d};">See <strong>Testing Methodology</strong> for how the grid is produced, and <strong>Coverage Taxonomy</strong> for the full three-layer reference — SC classification, category × state, and outcome.</p>

    </div>
  `},P={name:`Testing Methodology`,render:()=>t`
    <style>${O}</style>
    <div class="a11y-doc" data-theme=${h} data-mode=${m()} style=${p}>

      <h1 style="${_.h1}">Testing Methodology</h1>
      <p style="${_.body} ${l.muted} max-width: ${d};">The coverage grid is not hand-maintained. It is generated by correlating three independent sources of truth, so the requirements a component must satisfy are derived from what the component actually declares — not from a document someone forgot to update.</p>

      <hr style="${w}" />

      <h2 style="${_.h2}">Three inputs, one grid</h2>
      <div style="${l.frame} display: flex; gap: 0; margin-bottom: ${f.subsection};">
        <div style="padding: var(--spacing-md2); flex: 1;">
          <div style="${_.body} font-weight: 700; margin: 0 0 ${f.label};">1. Component source</div>
          <div style="${D} ${l.muted} margin: 0 0 ${f.label};">what states/variants exist</div>
          <div style="${D} margin: 0;">Declared <code>@property()</code> fields determine which states apply (e.g. a <code>disabled</code> property means the Disabled row is required). CSS selectors determine Hover/Focus-visible applicability. The component's own color/variant union determines how many times Color/Contrast multiplies.</div>
        </div>
        <div style="padding: var(--spacing-md2); flex: 1; border-inline-start: var(--border-width-xs) solid var(--color-border-subtle);">
          <div style="${_.body} font-weight: 700; margin: 0 0 ${f.label};">2. Test source</div>
          <div style="${D} ${l.muted} margin: 0 0 ${f.label};">what's tagged and generated</div>
          <div style="${D} margin: 0;"><code>describeA11yTarget(target, label, fn)</code> tags every describe block's title with <code>[a11y:&lt;target&gt;]</code>. <code>forEachColorAxis(variants, fn)</code> cross-multiplies every declared color variant against both color modes, generating titles like <code>primary / dark</code>.</div>
        </div>
        <div style="padding: var(--spacing-md2); flex: 1; border-inline-start: var(--border-width-xs) solid var(--color-border-subtle);">
          <div style="${_.body} font-weight: 700; margin: 0 0 ${f.label};">3. Real results</div>
          <div style="${D} ${l.muted} margin: 0 0 ${f.label};">what actually ran</div>
          <div style="${D} margin: 0;">Playwright's JSON reporter output (<code>test-results/playwright/results.json</code>) — real pass/fail/skip per test, correlated back to a cell by matching its <code>[a11y:&lt;target&gt;]</code> tag and generated variant/mode title.</div>
        </div>
      </div>

      <h2 style="${_.h2}">How a cell is verified</h2>
      <table style="${l.table} margin-bottom: ${f.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">Category</th>
            <th style="${l.th}">Verified by</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td}">Color/Contrast</td>
            <td style="${l.td} ${l.muted}">axe-core's <code>color-contrast</code> rule, run against the live rendered component; error states additionally assert a non-color indicator alongside color</td>
          </tr>
          <tr>
            <td style="${l.td}">Semantic/ARIA</td>
            <td style="${l.td} ${l.muted}">DOM-inspection assertions inside the state's own test block (role, name, live-region)</td>
          </tr>
          <tr>
            <td style="${l.td}">Keyboard/Operability</td>
            <td style="${l.td} ${l.muted}">keyboard simulation (Tab, Shift+Tab, Enter, Escape) plus focus assertions</td>
          </tr>
          <tr>
            <td style="${l.td}">Target Size/Touch Area</td>
            <td style="${l.td} ${l.muted}"><code>expectMinimumTargetSize</code> — rendered bounding-box measurement</td>
          </tr>
          <tr>
            <td style="${l.td}">Responsive/Reflow</td>
            <td style="${l.td} ${l.muted}">Playwright viewport-resize to 320px, 200% zoom, and WCAG text-spacing stylesheet injection — each asserting no content loss/horizontal scroll/clipping</td>
          </tr>
          <tr>
            <td style="${l.td}">Timing & Motion</td>
            <td style="${l.td} ${l.muted}">mechanical timer/<code>@keyframes</code> trigger detection + pause/extend-control assertion; actual flash-rate is MANUAL — frame-capture tooling not yet built</td>
          </tr>
          <tr>
            <td style="${l.td}">Predictability</td>
            <td style="${l.td} ${l.muted}">mechanical: a focus or input/change handler contains a navigation/submit/window-open side effect</td>
          </tr>
        </tbody>
      </table>

      <hr style="${w}" />

      <h2 style="${_.h2}">test.fixme() discipline</h2>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">A known, ticketed defect is marked <code>test.fixme()</code> in the test file, citing the ticket. The audit script treats a skipped/fixme'd test exactly like a failure — it never drops out of the grid and never counts as a pass. This is the mechanism that keeps a real defect from silently disappearing from coverage while a fix is pending.</p>

      <pre style="${l.pre} margin-bottom: ${f.subsection};">describeA11yTarget('hover', 'Hover state', () => {
  forEachColorAxis(['primary', 'secondary'], ({ variant, mode }) => {
    test(\`\${variant} / \${mode}\`, async ({ page }) => {
      // render component in this variant/mode, trigger :hover, run axe scan
    });
  });

  test.fixme('DS-147: primary/dark fails 1.4.3 text contrast', async () => {
    // cited defect — renders as FAIL, not skipped-invisible
  });
});</pre>

      <hr style="${w}" />

      <h2 style="${_.h2}">Running it</h2>
      <p style="${_.body} ${l.muted} max-width: ${d};"><code>scripts/audit-a11y-coverage.mjs</code> reads all three inputs and prints one grid per component, exiting non-zero if any required cell is FAIL or missing. Wired as <code>npm run audit:a11y-coverage</code> — runs in CI and is a required gate in <code>/test-component</code> before any <code>.a11y.ts</code> file is committed.</p>

    </div>
  `},F={name:`Coverage Taxonomy`,render:()=>t`
    <style>${O}</style>
    <div class="a11y-doc" data-theme=${h} data-mode=${m()} style=${p}>

      <h1 style="${_.h1}">Coverage Taxonomy</h1>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.subsection};">A fixed lens every component is tested through, in three layers — not a document that gets edited each time a new component is built. <strong>Layer 1</strong> classifies every WCAG 2.2 A/AA success criterion once, forever, by whether our framework can resolve it mechanically. <strong>Layer 2</strong> is the operational grid — category × state, derived per component by inspecting that component's own source. <strong>Layer 3</strong> is the six-outcome model every cell resolves to (see Overview). Only Layer 2's <em>instances</em> change as components ship; Layers 1 and 3 do not.</p>

      <h2 style="${_.h2}">Layer 1 — SC classification</h2>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">Every WCAG 2.2 A/AA success criterion, classified by whether our framework — source-grep for applicability, plus Playwright interaction/measurement or axe for the verdict — can resolve it without human judgment. This is a property of the SC itself, derived from what WCAG requires, not from which mms components happen to exist today.</p>
      <div style="${l.frame} display: flex; gap: 0; margin-bottom: ${f.content};">
        <div style="padding: var(--spacing-md1); flex: 1;">
          <div style="${_.body} font-weight: 700; margin-bottom: var(--spacing-xs2);">STP</div>
          <div style="${_.body}">Structurally Testable Programmatically — both applicability and pass/fail are mechanically determined, including via Playwright interaction/measurement or axe, not only static source grep.</div>
        </div>
        <div style="padding: var(--spacing-md1); flex: 1; border-inline-start: var(--border-width-xs) solid var(--color-border-subtle);">
          <div style="${_.body} font-weight: 700; margin-bottom: var(--spacing-xs2);">Partial-STP</div>
          <div style="${_.body}">Applicability triggers mechanically, but the verdict itself requires human judgment (visual/content quality) the framework cannot render.</div>
        </div>
        <div style="padding: var(--spacing-md1); flex: 1; border-inline-start: var(--border-width-xs) solid var(--color-border-subtle);">
          <div style="${_.body} font-weight: 700; margin-bottom: var(--spacing-xs2);">Not-STP</div>
          <div style="${_.body}">Neither applicability nor verdict is mechanical — owned by page template, content-authoring, or multi-page flow, never an individual component.</div>
        </div>
      </div>
      <table style="${l.table} margin-bottom: ${f.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">SC</th>
            <th style="${l.th}">Level</th>
            <th style="${l.th}">Class</th>
            <th style="${l.th}">Verified by / why</th>
          </tr>
        </thead>
        <tbody>
          ${[[`group`,`Perceivable`],[`1.1.1 Non-text Content`,`A`,`Partial-STP`,[`every non-decorative icon/img has aria-hidden or an accessible name`,`whether the name text is meaningful`]],[`1.2.1 Audio-only and Video-only`,`A`,`Partial-STP`,[`<audio>/<video> present`,`whether a complete text transcript (audio-only) or text/audio alternative (video-only) is provided`]],[`1.2.2 Captions (Prerecorded)`,`A`,`Partial-STP`,[`<video> present`,`whether captions are provided and accurate/synchronized to dialogue and sound`]],[`1.2.3 Audio Description or Media Alternative`,`A`,`Partial-STP`,[`<video> present`,`whether an audio-description track or full text alternative conveying visual-only information is provided`]],[`1.2.4 Captions (Live)`,`AA`,`Partial-STP`,[`live media stream present`,`whether real-time captions are provided and accurate`]],[`1.2.5 Audio Description (Prerecorded)`,`AA`,`Partial-STP`,[`<video> present`,`whether extended/standard audio description is provided for visual information not carried in the main audio track`]],[`1.3.1 Info and Relationships`,`A`,`STP`,`DOM-inspection assertion — existing Semantic/ARIA category`],[`1.3.2 Meaningful Sequence`,`A`,`STP`,`DOM order vs. CSS visual order, mechanically assertable`],[`1.3.3 Sensory Characteristics`,`A`,`Not-STP`,`content-authoring judgment — no structural signal to grep for`],[`1.3.4 Orientation`,`AA`,`Not-STP`,`page/viewport-level, never an individual component`],[`1.3.5 Identify Input Purpose`,`AA`,`STP`,`trigger: component renders a native text-entry element; BUILD GAP until an autocomplete passthrough prop exists, then mechanically verified`],[`1.4.1 Use of Color`,`A`,`STP`,`existing Color/Contrast sub-check`],[`1.4.2 Audio Control`,`A`,`Partial-STP`,[`autoplaying audio/video longer than 3 seconds`,`whether the exposed stop/pause/volume control is actually effective and independent of overall system volume`]],[`1.4.3 Contrast (Minimum)`,`AA`,`STP`,`axe's color-contrast rule`],[`1.4.4 Resize Text`,`AA`,`STP`,`Playwright zoom-to-200% + content-loss assertion`],[`1.4.5 Images of Text`,`AA`,`STP`,`mechanical: confirms no component renders text via canvas/image`],[`1.4.10 Reflow`,`AA`,`STP`,`Playwright viewport-to-320px + no-horizontal-scroll assertion`],[`1.4.11 Non-text Contrast`,`AA`,`STP`,`axe, existing`],[`1.4.12 Text Spacing`,`AA`,`STP`,`Playwright WCAG text-spacing stylesheet injection + no-clipping assertion`],[`1.4.13 Content on Hover or Focus`,`AA`,`STP`,`trigger: a :hover/:focus rule reveals content on a sibling element; verdict: Playwright hover-persistence + Escape-dismiss assertion`],[`group`,`Operable`],[`2.1.1 Keyboard`,`A`,`STP`,`existing`],[`2.1.2 No Keyboard Trap`,`A`,`STP`,`existing (dialog-focus-containment)`],[`2.1.4 Character Key Shortcuts`,`A`,`Not-STP`,`mechanically triggerable single-key-shortcut detection, applied whenever a component implements one`],[`2.2.1 Timing Adjustable`,`A`,`STP`,`trigger: a session/auto-advance/auto-dismiss timer construct; verdict: pause/extend control assertion`],[`2.2.2 Pause, Stop, Hide`,`A`,`STP`,`same trigger/component as 2.2.1`],[`2.3.1 Three Flashes`,`A`,`Partial-STP`,[`@keyframes/infinite animation present`,`actual flash rate assessed against the 3-flashes-per-second threshold (frame-capture tooling not yet built)`]],[`2.4.1 Bypass Blocks`,`A`,`Not-STP`,`page/nav-shell, never an individual component`],[`2.4.2 Page Titled`,`A`,`Not-STP`,`page-level`],[`2.4.3 Focus Order`,`A`,`STP`,`existing`],[`2.4.4 Link Purpose (In Context)`,`A`,`Partial-STP`,[`accessible name is non-empty and not a denylisted generic phrase`,`contextual clarity`]],[`2.4.5 Multiple Ways`,`AA`,`Not-STP`,`page-level`],[`2.4.6 Headings and Labels`,`AA`,`Partial-STP`,[`label/heading text non-empty (form labels fold into the existing label check)`,`descriptiveness — page headings are page-level`]],[`2.4.7 Focus Visible`,`AA`,`STP`,`existing`],[`2.4.11 Focus Not Obscured (Minimum)`,`AA`,`STP`,`Playwright bounding-box: focused element not fully covered by an overlapping sticky/fixed sibling`],[`2.5.1 Pointer Gestures`,`A`,`Not-STP`,`mechanically triggerable gesture-based-interaction detection, applied whenever a component implements one`],[`2.5.2 Pointer Cancellation`,`A`,`STP`,`mechanical: action fires on click/pointerup, not pointerdown/mousedown`],[`2.5.3 Label in Name`,`A`,`STP`,`existing Semantic/ARIA sub-check`],[`2.5.4 Motion Actuation`,`A`,`Not-STP`,`applies whenever a component implements device-motion-triggered functionality`],[`2.5.7 Dragging Movements`,`AA`,`Not-STP`,`mechanically triggerable drag-interaction detection, applied whenever a component implements one`],[`2.5.8 Target Size (Minimum)`,`AA`,`STP`,`existing`],[`group`,`Understandable`],[`3.1.1 Language of Page`,`A`,`Not-STP`,`<html lang>, page-level`],[`3.1.2 Language of Parts`,`AA`,`Partial-STP`,[`component passes through a lang attribute`,`whether a given usage needs it`]],[`3.2.1 On Focus`,`A`,`STP`,`mechanical: a focus handler contains a navigation/submit/window-open side effect`],[`3.2.2 On Input`,`A`,`STP`,`same, input/change handler`],[`3.2.3 Consistent Navigation`,`AA`,`Not-STP`,`page-level`],[`3.2.4 Consistent Identification`,`AA`,`Not-STP`,`inherently satisfied by a single shared component library — not tested per-component`],[`3.2.6 Consistent Help`,`A`,`Not-STP`,`page-level`],[`3.3.1 Error Identification`,`A`,`STP`,`folds into the existing error-state check`],[`3.3.2 Labels or Instructions`,`A`,`STP`,`existing`],[`3.3.3 Error Suggestion`,`AA`,`Not-STP`,`content-authoring judgment — the component renders whatever errorText string it's given`],[`3.3.4 Error Prevention (Legal, Financial, Data)`,`AA`,`Not-STP`,`page/flow-level`],[`3.3.7 Redundant Entry`,`A`,`Not-STP`,`page/flow-level`],[`3.3.8 Accessible Authentication (Minimum)`,`AA`,`Not-STP`,`page/flow-level — applies to auth flows, not individual field components`],[`group`,`Robust`],[`4.1.2 Name, Role, Value`,`A`,`STP`,`existing`],[`4.1.3 Status Messages`,`AA`,`STP`,`existing`]].map(e=>e[0]===`group`?t`
                <tr>
                  <td colspan="4" style="${l.td} font-weight: var(--font-weight-bold); background: var(--color-surface-sunken);">${e[1]}</td>
                </tr>
              `:t`
                <tr style="${e[2]===`Not-STP`?`background: var(--color-surface-default);`:``}">
                  <td style="${l.td} ${_.monoSm} white-space: nowrap;">${e[0]}</td>
                  <td style="${l.td} ${l.muted}">${e[1]}</td>
                  <td style="${l.td} white-space: nowrap;">${e[2]}</td>
                  <td style="${l.td} ${l.muted}">${Array.isArray(e[3])?t`<div style="margin-bottom: var(--spacing-xs2);"><span style="${l.muted}">STP-trigger:</span> ${e[3][0]}</div><div><span style="${l.muted}">Manual:</span> ${e[3][1]}</div>`:e[3]}</td>
                </tr>
              `)}
        </tbody>
      </table>

      <hr style="${w}" />

      <h2 style="${_.h2}">Layer 2 — category axis (kind of requirement)</h2>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">These categories are fixed and don't change per component. Responsive/Reflow and Timing & Motion have been part of this table from the start.</p>
      <table style="${l.table} margin-bottom: ${f.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">Category</th>
            <th style="${l.th}">WCAG SC</th>
            <th style="${l.th}">Verified by</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td}">Color/Contrast</td>
            <td style="${l.td} ${_.monoSm} ${l.muted}">1.4.1, 1.4.3, 1.4.11 — plus sub-check below</td>
            <td style="${l.td} ${l.muted}">axe color-contrast rule</td>
          </tr>
          <tr>
            <td style="${l.td}">Semantic/ARIA</td>
            <td style="${l.td} ${_.monoSm} ${l.muted}">1.3.1, 4.1.2 — plus sub-checks below</td>
            <td style="${l.td} ${l.muted}">DOM-inspection assertion inside the state cell</td>
          </tr>
          <tr>
            <td style="${l.td}">Keyboard/Operability</td>
            <td style="${l.td} ${_.monoSm} ${l.muted}">2.1.1, 2.4.3, 2.4.7 — plus sub-checks below</td>
            <td style="${l.td} ${l.muted}">keyboard/pointer simulation + focus/bounding-box assertions</td>
          </tr>
          <tr>
            <td style="${l.td}">Target Size/Touch Area</td>
            <td style="${l.td} ${_.monoSm} ${l.muted}">2.5.8, 2.5.5</td>
            <td style="${l.td} ${l.muted}">rendered bounding-box measurement</td>
          </tr>
          <tr>
            <td style="${l.td}">Responsive/Reflow</td>
            <td style="${l.td} ${_.monoSm} ${l.muted}">1.4.4, 1.4.10, 1.4.12</td>
            <td style="${l.td} ${l.muted}">Playwright viewport-resize/zoom/stylesheet-injection + overflow assertion</td>
          </tr>
          <tr>
            <td style="${l.td}">Timing & Motion</td>
            <td style="${l.td} ${_.monoSm} ${l.muted}">2.2.1, 2.2.2 (STP), 2.3.1 (Partial-STP)</td>
            <td style="${l.td} ${l.muted}">mechanical timer/animation-construct trigger + pause-control assertion; flash-rate itself is MANUAL</td>
          </tr>
          <tr>
            <td style="${l.td}">Predictability</td>
            <td style="${l.td} ${_.monoSm} ${l.muted}">3.2.1, 3.2.2</td>
            <td style="${l.td} ${l.muted}">mechanical: a focus or input/change handler contains a navigation/submit/window-open side effect</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${_.h3}">Color/contrast sub-checks</h3>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">Folds into the existing per-state assertion for the state that triggers it — not a new grid cell.</p>
      <ul style="${_.body} ${l.muted} max-width: ${d}; margin: 0 0 ${f.subsection}; padding-left: var(--spacing-lg1);">
        <li><strong>1.4.1 Use of Color</strong> — error state renders a non-color indicator alongside color. REQUIRED iff the component has an error/errorText property — rides the Error-state row.</li>
      </ul>

      <h3 style="${_.h3}">Semantic/ARIA sub-checks</h3>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">Each folds into the existing per-state assertion for the state that triggers it — not a new grid cell.</p>
      <ul style="${_.body} ${l.muted} max-width: ${d}; margin: 0 0 ${f.subsection}; padding-left: var(--spacing-lg1);">
        <li><strong>4.1.3 Status Messages</strong> — error row carries <code>role="alert"</code>; REQUIRED iff the component has an error/errorText property — rides the Error-state row.</li>
        <li><strong>2.5.3 Label in Name</strong> — accessible name must contain visible label text. REQUIRED iff the component has a label property and renders aria-label/aria-labelledby from it.</li>
        <li><strong>1.1.1 Non-text Content</strong> — REQUIRED iff the component renders an icon/img; asserts aria-hidden (decorative) or a real accessible name (meaningful).</li>
        <li><strong>1.3.2 Meaningful Sequence</strong> — REQUIRED iff the component's CSS reorders content visually (order, row-reverse/column-reverse); asserts DOM order still matches reading order.</li>
        <li><strong>2.4.4 Link Purpose (In Context)</strong> — REQUIRED iff the component renders an &lt;a&gt;/role="link"; asserts the accessible name is non-empty and not on a denylist of generic phrases.</li>
      </ul>

      <h3 style="${_.h3}">Keyboard/operability sub-checks</h3>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">Applicability keys off the component's declared ARIA role (WAI-ARIA APG pattern catalog), not off which describe blocks already exist. <code>role="dialog"</code> pulls in the full Dialog pattern, including 2.1.2 focus containment.</p>
      <ul style="${_.body} ${l.muted} max-width: ${d}; margin: 0; padding-left: var(--spacing-lg1);">
        <li><strong>1.4.13 Content on Hover or Focus</strong> — REQUIRED iff a :hover/:focus rule reveals content on a sibling element that isn't native browser chrome; asserts hover-persistence and Escape-dismiss.</li>
        <li><strong>2.4.11 Focus Not Obscured (Minimum)</strong> — REQUIRED iff the component (or its page context) has a sticky/fixed sibling that can overlap it.</li>
        <li><strong>2.5.2 Pointer Cancellation</strong> — REQUIRED iff the component has a click/activation handler; asserts it fires on click/pointerup, never pointerdown/mousedown.</li>
      </ul>

      <hr style="${w}" />

      <h2 style="${_.h2}">State axis</h2>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">What condition the component is put in. Applicability is derived mechanically by inspecting the component's own source — never asserted by hand.</p>
      <table style="${l.table} margin-bottom: ${f.subsection};">
        <thead>
          <tr>
            <th style="${l.th}">State</th>
            <th style="${l.th}">Required if</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td}">Default</td>
            <td style="${l.td} ${l.muted}">always</td>
          </tr>
          <tr>
            <td style="${l.td}">Disabled / Readonly / Error / Required</td>
            <td style="${l.td} ${l.muted}">matching <code>@property()</code> declared on the component</td>
          </tr>
          <tr>
            <td style="${l.td}">Hover</td>
            <td style="${l.td} ${l.muted}">a <code>:hover</code> selector exists in the component's own CSS</td>
          </tr>
          <tr>
            <td style="${l.td}">Focus-visible</td>
            <td style="${l.td} ${l.muted}">a <code>:focus-visible</code>/<code>:focus</code> selector exists, the component renders a natively focusable element, or a slotted child does</td>
          </tr>
          <tr>
            <td style="${l.td}">Dialog focus containment</td>
            <td style="${l.td} ${l.muted}">component declares <code>role="dialog"</code> — pulls in the full WAI-ARIA Dialog pattern (Tab/Shift+Tab cycling, no leak to background, Escape exit)</td>
          </tr>
        </tbody>
      </table>

      <hr style="${w}" />

      <h2 style="${_.h2}">Category × state applicability</h2>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">A fixed WCAG/spec fact, not a per-component judgment call. A <code>test.fixme()</code>'d cell still renders as a hard FAIL with its ticket citation — never invisible, never a pass. Cross-checked cell-by-cell against the real audit script's <code>CATEGORY_APPLICABILITY</code> by <code>Accessibility.applicability.test.ts</code> — this table cannot drift from the mechanical audit without failing that test.</p>
      <table style="${l.table} margin-bottom: ${f.content};">
        <thead>
          <tr>
            <th style="${l.th}">State</th>
            <th style="${l.th} text-align: center;">Color</th>
            <th style="${l.th} text-align: center;">ARIA</th>
            <th style="${l.th} text-align: center;">Keyboard</th>
            <th style="${l.th} text-align: center;">Target Size</th>
            <th style="${l.th} text-align: center;">Reflow*</th>
            <th style="${l.th} text-align: center;">Timing*</th>
            <th style="${l.th} text-align: center;">Predict.*</th>
          </tr>
        </thead>
        <tbody>
          ${A.map(([e,n,r,i,a,o,s,c])=>t`
              <tr>
                <td style="${l.td}">${e}</td>
                <td style="${l.td} text-align: center;">${n?`✅`:`—`}</td>
                <td style="${l.td} text-align: center;">${r?`✅`:`—`}</td>
                <td style="${l.td} text-align: center;">${i?`✅`:`—`}</td>
                <td style="${l.td} text-align: center;">${a?`✅`:`—`}</td>
                <td style="${l.td} text-align: center;">${o?`✅`:`—`}</td>
                <td style="${l.td} text-align: center;">${s?`✅`:`—`}</td>
                <td style="${l.td} text-align: center;">${c?`✅`:`—`}</td>
              </tr>
            `)}
        </tbody>
      </table>
      <p style="${_.caption} ${l.muted} max-width: ${d};">* Reflow only re-runs on Error (added error text/icon is the one state that can change layout); Timing & Motion is a component-level capability check, so Default only; Predictability covers On-Input (rides Default, wherever a change handler exists) and On-Focus (rides Focus-visible) — neither varies by any other state.</p>

      <hr style="${w}" />

      <h2 style="${_.h2}">Cross-cutting axes</h2>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">These multiply applicable states — they are not additional peer rows in the grid.</p>
      <table style="${l.table} margin-bottom: ${f.content};">
        <thead>
          <tr>
            <th style="${l.th}">Axis</th>
            <th style="${l.th}">Values</th>
            <th style="${l.th}">Multiplies against</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td}">Color mode</td>
            <td style="${l.td} ${l.muted}">light, dark</td>
            <td style="${l.td} ${l.muted}">Color/Contrast only — always both, no opt-out</td>
          </tr>
          <tr>
            <td style="${l.td}">Component variant</td>
            <td style="${l.td} ${l.muted}">every value of the component's own color-relevant property</td>
            <td style="${l.td} ${l.muted}">Color/Contrast (all variants) and Target Size (size-affecting variants only)</td>
          </tr>
          <tr>
            <td style="${l.td}">Density</td>
            <td style="${l.td} ${l.muted}">default, compact</td>
            <td style="${l.td} ${l.muted}">Target Size only, iff the component has a <code>[data-density]</code> selector</td>
          </tr>
        </tbody>
      </table>
      <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.content};">Responsive/Reflow, Timing & Motion, and Predictability are invariant to all three axes above — none of them branch on color mode, component variant, or density, so each is tested once (per its own applicable states) rather than multiplied.</p>

      ${k(`Brand palette is never a multiplier`,`For components with a brand-relevant color property (e.g. <code>colorScheme</code>, <code>linkColor</code>), tests run against exactly one canonical palette (Maximus-Primary) × both color modes — brand palette is a token-value swap, not a change to markup/ARIA/CSS structure, so portability to every other client brand sheet is guaranteed structurally instead, via the minimum-contrast contract every Layer 2 token sheet must satisfy (see Foundations → Colors). Components with no such property — Text Field, Select, Text Area — don't consume brand tokens at all: they render from Layer 1 structural/neutral tokens only, so brand palette isn't a variable to test in the first place. Only color mode affects their rendering.`,`informational`)}

      <hr style="${w}" />

      <h3 style="${_.h3}">Permanent — page/document-level, regardless of what gets built</h3>
      <table style="${l.table} margin-bottom: ${f.content};">
        <tbody>
          ${[`1.3.4 Orientation`,`2.4.1 Bypass Blocks, 2.4.2 Page Titled, 2.4.5 Multiple Ways`,`3.1.1 Language of Page`,`3.2.3 Consistent Navigation, 3.2.4 Consistent Identification, 3.2.6 Consistent Help`,`3.3.4 Error Prevention (Legal/Financial/Data), 3.3.7 Redundant Entry, 3.3.8 Accessible Authentication`].map(e=>t`
              <tr>
                <td style="${l.td} ${_.monoSm} ${l.muted}">${e}</td>
              </tr>
            `)}
        </tbody>
      </table>

      <p style="${_.body} ${l.muted} max-width: ${d};"><strong>Content-authoring judgment, not a structural signal at all</strong> (Not-STP, no mechanical trigger ever applies): 1.3.3 Sensory Characteristics, 2.4.6 Headings and Labels (page-level portion), 3.3.3 Error Suggestion.</p>

    </div>
  `},I=[`Color/Contrast`,`Semantic/ARIA`,`Keyboard/Operability`,`Target Size/Touch Area`,`Responsive/Reflow`,`Timing & Motion`,`Predictability`],L=e=>e.replace(/\//g,` / `),R=e=>{let n=[],r=new Set;for(let t of e)r.has(t.state)||(r.add(t.state),n.push(t.state));let i=I.filter(t=>e.some(e=>e.category===t)),a=new Map;for(let t of e)a.has(t.state)||a.set(t.state,new Map),a.get(t.state).set(t.category,t);return t`
    <table style="${l.table} table-layout: fixed;">
      <thead>
        <tr>
          <th style="${l.th} width: 90px;">State</th>
          ${i.map(e=>t`<th style="${l.th} overflow-wrap: break-word;">${L(e)}</th>`)}
        </tr>
      </thead>
      <tbody>
        ${n.map(e=>t`
            <tr>
              <td style="${l.td}">${e}</td>
              ${i.map(n=>{let r=a.get(e)?.get(n),i=r?.flaky?`${r.reason??``}${r.reason?` — `:``}⚠ recovered from a flaky run — confirm this isn't a genuine intermittent defect before trusting as stable`:r?.reason??``;return t`<td style="${l.td}" title="${i}">${r?v(r.result):``}${r?.flaky?` ⚠`:``}</td>`})}
            </tr>
          `)}
      </tbody>
    </table>
  `},z={name:`Live Coverage Grid`,render:()=>{let e=[...x(s).entries()].sort(([e],[t])=>e.localeCompare(t));return t`
      <style>
        /* Prevents the scrollbar-appearing-on-expand horizontal reflow (~15px) */
        html { scrollbar-gutter: stable; }
      </style>
      <div class="a11y-doc" data-theme=${h} data-mode=${m()} style=${p}>
        <style>${O}</style>

        <h1 style="${_.h1}">Live Coverage Grid</h1>
        <p style="${_.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.subsection};">Generated directly from <code>scripts/build-wcag-tables.mjs</code> — the same pipeline that feeds each built component's own "WCAG 2.2 AA Compliance" table. Expand a component to see its full state × category outcome grid; hover a cell for its FAIL/N/A/MANUAL/BUILD GAP reason.</p>

        ${e.map(([e,n])=>t`
            <details style="margin-bottom: ${f.content}; border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-sm); padding: var(--spacing-sm2) var(--spacing-md1);">
              <summary style="cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: var(--spacing-sm2);">
                <span style="${_.mono}">mms-${e}</span>
                <span style="${_.caption} ${l.muted} font-weight: 400;">${S(n)}</span>
              </summary>
              <div style="margin-top: ${f.content};">
                ${R(n)}
              </div>
            </details>
          `)}

      </div>
    `}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <style>\${CODE_STYLE}</style>
    <div class="a11y-doc" data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Accessibility Testing Framework</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">Every mms component is validated against a mechanical coverage taxonomy — a fixed grid of category × state × cross-cutting-axis cells. Each cell resolves to exactly one of six fixed outcomes.</p>

      \${callout('Section 508 / ADA Title II', 'Maximus engagements are government-facing — federal engagements target Section 508, state engagements target ADA Title II. Both point to the same technical standard: WCAG. Compliance is enforced structurally, through this taxonomy and the token contracts in Foundations → Colors, not through one-off manual review.', 'informational')}

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Why mechanical, not manual</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX};">Manual a11y review does not scale across a multi-platform, multi-brand design system. A taxonomy that is derived mechanically from each component's own source (its declared properties, its CSS selectors, its ARIA role) means coverage requirements travel with the component automatically as it changes, rather than living in a checklist that quietly drifts out of date.</p>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">STP resolution</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">This is a VPAT-style model, and which outcomes are even reachable is gated by the SC's <strong>Layer 1 classification</strong> (see Coverage Taxonomy):</p>
      <ul style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li>a <strong>Not-STP</strong> SC is out of scope for component-level testing entirely — it resolves straight to PAGE-LEVEL and never enters the rest of this flow</li>
        <li>an <strong>STP</strong> SC can resolve to PASS, FAIL, BUILD GAP, or N/A</li>
        <li>a <strong>Partial-STP</strong> SC can resolve to FAIL, BUILD GAP, or N/A exactly like STP — a mechanical failure is a mechanical failure regardless of classification. The only place STP and Partial-STP diverge is what happens once the mechanical check <em>passes</em>: STP goes straight to PASS, Partial-STP goes to MANUAL — a contingent pass pending a human's confirmation of the qualitative verdict, never a contingent fail</li>
      </ul>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">No cell invents a seventh category, and no per-component judgment decides which of these applies outside this logic. The diagram below shows how a single SC walks through this logic to land on exactly one outcome:</p>

      \${flowDiagram()}

      <h3 style="\${t.h3}">Not-STP exits at step 1</h3>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.content};">A Not-STP SC is resolved before the mechanical trigger ever runs.</p>
      <ul style="\${LIST}">
        <li style="\${LI}"><strong>Why:</strong> the source-grep applicability check in step 2 only means something for STP and Partial-STP SCs, which genuinely vary by component and state.</li>
        <li style="\${LI}"><strong>What it covers:</strong> page-level requirements — page titles, consistent navigation, bypass blocks — that are the same for every component, always.</li>
        <li><strong>Result:</strong> resolved and out of scope at step 1, never evaluated against a per-component or per-state trigger it was never subject to.</li>
      </ul>

      <h3 style="\${t.h3}">What "Partial-STP" means</h3>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.content};">Mechanical on the trigger and on the failure case; human only on confirming a pass.</p>
      <ul style="\${LIST}">
        <li style="\${LI}"><strong>Trigger:</strong> fully mechanical — the same mechanism and the same source-grep pattern as STP.</li>
        <li style="\${LI}"><strong>Pass/fail check:</strong> also mechanical, so a mechanical failure is a FAIL like any other.</li>
        <li><strong>What isn't mechanical:</strong> confirming the qualitative verdict. A human has to read it, which is why step 5 stops at MANUAL instead of guessing PASS.</li>
      </ul>
      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
          <p style="\${t.body} margin: 0 0 \${space.label};"><strong>Example: 1.1.1 Non-text Content</strong></p>
          <ul style="\${t.body} margin: 0; padding-left: var(--spacing-lg1);">
            <li style="\${LI}"><strong>Mechanical:</strong> whether a non-decorative icon has an accessible name at all. Grep the render output for <code style="\${t.mono}">aria-hidden</code> or a name string — steps 2–4 answer this definitively, and a missing name is a FAIL, full stop.</li>
            <li><strong>Human:</strong> whether a name that is present is actually <em>meaningful</em> ("close" vs. "x").</li>
          </ul>
        </div>
      </mms-card>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">Partial-STP is never excluded from the STP mechanism; it just can't self-certify a PASS.</p>

      <h3 style="\${t.h3}">FAIL always ships with the fix</h3>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.content};">A FAIL is never reported as a bare status.</p>
      <ul style="\${LIST}">
        <li style="\${LI}"><strong>What it means:</strong> the test ran and didn't pass. For example, a border-color token that measures 2.1:1 against its background — axe can test contrast today.</li>
        <li style="\${LI}"><strong>What it carries:</strong> a diagnosis exactly as concrete as the failure, cited to a ticket — "border color must meet 3:1, swap token <code style="\${t.mono}">X</code>."</li>
        <li><strong>What it never is:</strong> a plain red flag with no next step attached.</li>
      </ul>

      <h3 style="\${t.h3}">BUILD GAP and FAIL never overlap</h3>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.content};">They are mutually exclusive by construction, not by convention. Both require action; they answer different questions.</p>
      <ul style="\${LIST}">
        <li style="\${LI}"><strong>Why they can't overlap:</strong> the capability check (step 3) resolves before pass/fail (step 4) is ever evaluated, so a cell can only reach FAIL after clearing the capability gate.</li>
        <li style="\${LI}"><strong>BUILD GAP</strong> is a gate <em>before</em> a test can run at all: the component hasn't shipped the surface a test needs yet — for example a missing <code>autocomplete</code> prop, so there is nothing to point a test at.</li>
        <li style="\${LI}"><strong>FAIL</strong> is what a completed test produces: the capability exists, the test ran, and it didn't pass.</li>
        <li><strong>Naming:</strong> BUILD GAP was originally "ACTION REQUIRED". It was renamed because FAIL requires action too — the old name implied FAIL didn't — and BUILD GAP names what this outcome actually is: a component-build gap.</li>
      </ul>

      <h3 style="\${t.h3}">MANUAL is a contingent PASS</h3>
      <p style="\${t.body} \${doc.muted} margin-bottom: \${space.content};">Always a contingent pass, never a contingent fail.</p>
      <ul style="\${LIST}">
        <li style="\${LI}"><strong>Before step 5:</strong> a Partial-STP SC has already cleared the same mechanical applicability, capability and pass/fail gates as an STP SC — the mechanical check passed.</li>
        <li style="\${LI}"><strong>What remains:</strong> a human confirms the qualitative verdict, recorded in a manual-review log per component and SC.</li>
        <li style="\${LI}"><strong>After review:</strong> the grid shows the attested result — for example "MANUAL — verified PASS, reviewed 2026-08-10" — so it stays clear that a human, not the audit script, produced it.</li>
        <li><strong>If the mechanical check had failed:</strong> the cell would already be FAIL at step 4 — a bigger problem than any manual review, and one that never reaches MANUAL.</li>
      </ul>

      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX};">See <strong>Testing Methodology</strong> for how the grid is produced, and <strong>Coverage Taxonomy</strong> for the full three-layer reference — SC classification, category × state, and outcome.</p>

    </div>
  \`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Testing Methodology',
  render: () => html\`
    <style>\${CODE_STYLE}</style>
    <div class="a11y-doc" data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Testing Methodology</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX};">The coverage grid is not hand-maintained. It is generated by correlating three independent sources of truth, so the requirements a component must satisfy are derived from what the component actually declares — not from a document someone forgot to update.</p>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Three inputs, one grid</h2>
      <div style="\${doc.frame} display: flex; gap: 0; margin-bottom: \${space.subsection};">
        <div style="padding: var(--spacing-md2); flex: 1;">
          <div style="\${t.body} font-weight: 700; margin: 0 0 \${space.label};">1. Component source</div>
          <div style="\${BODY_SM} \${doc.muted} margin: 0 0 \${space.label};">what states/variants exist</div>
          <div style="\${BODY_SM} margin: 0;">Declared <code>@property()</code> fields determine which states apply (e.g. a <code>disabled</code> property means the Disabled row is required). CSS selectors determine Hover/Focus-visible applicability. The component's own color/variant union determines how many times Color/Contrast multiplies.</div>
        </div>
        <div style="padding: var(--spacing-md2); flex: 1; border-inline-start: var(--border-width-xs) solid var(--color-border-subtle);">
          <div style="\${t.body} font-weight: 700; margin: 0 0 \${space.label};">2. Test source</div>
          <div style="\${BODY_SM} \${doc.muted} margin: 0 0 \${space.label};">what's tagged and generated</div>
          <div style="\${BODY_SM} margin: 0;"><code>describeA11yTarget(target, label, fn)</code> tags every describe block's title with <code>[a11y:&lt;target&gt;]</code>. <code>forEachColorAxis(variants, fn)</code> cross-multiplies every declared color variant against both color modes, generating titles like <code>primary / dark</code>.</div>
        </div>
        <div style="padding: var(--spacing-md2); flex: 1; border-inline-start: var(--border-width-xs) solid var(--color-border-subtle);">
          <div style="\${t.body} font-weight: 700; margin: 0 0 \${space.label};">3. Real results</div>
          <div style="\${BODY_SM} \${doc.muted} margin: 0 0 \${space.label};">what actually ran</div>
          <div style="\${BODY_SM} margin: 0;">Playwright's JSON reporter output (<code>test-results/playwright/results.json</code>) — real pass/fail/skip per test, correlated back to a cell by matching its <code>[a11y:&lt;target&gt;]</code> tag and generated variant/mode title.</div>
        </div>
      </div>

      <h2 style="\${t.h2}">How a cell is verified</h2>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Category</th>
            <th style="\${doc.th}">Verified by</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}">Color/Contrast</td>
            <td style="\${doc.td} \${doc.muted}">axe-core's <code>color-contrast</code> rule, run against the live rendered component; error states additionally assert a non-color indicator alongside color</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Semantic/ARIA</td>
            <td style="\${doc.td} \${doc.muted}">DOM-inspection assertions inside the state's own test block (role, name, live-region)</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Keyboard/Operability</td>
            <td style="\${doc.td} \${doc.muted}">keyboard simulation (Tab, Shift+Tab, Enter, Escape) plus focus assertions</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Target Size/Touch Area</td>
            <td style="\${doc.td} \${doc.muted}"><code>expectMinimumTargetSize</code> — rendered bounding-box measurement</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Responsive/Reflow</td>
            <td style="\${doc.td} \${doc.muted}">Playwright viewport-resize to 320px, 200% zoom, and WCAG text-spacing stylesheet injection — each asserting no content loss/horizontal scroll/clipping</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Timing & Motion</td>
            <td style="\${doc.td} \${doc.muted}">mechanical timer/<code>@keyframes</code> trigger detection + pause/extend-control assertion; actual flash-rate is MANUAL — frame-capture tooling not yet built</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Predictability</td>
            <td style="\${doc.td} \${doc.muted}">mechanical: a focus or input/change handler contains a navigation/submit/window-open side effect</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">test.fixme() discipline</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">A known, ticketed defect is marked <code>test.fixme()</code> in the test file, citing the ticket. The audit script treats a skipped/fixme'd test exactly like a failure — it never drops out of the grid and never counts as a pass. This is the mechanism that keeps a real defect from silently disappearing from coverage while a fix is pending.</p>

      <pre style="\${doc.pre} margin-bottom: \${space.subsection};">describeA11yTarget('hover', 'Hover state', () => {
  forEachColorAxis(['primary', 'secondary'], ({ variant, mode }) => {
    test(\\\`\\\${variant} / \\\${mode}\\\`, async ({ page }) => {
      // render component in this variant/mode, trigger :hover, run axe scan
    });
  });

  test.fixme('DS-147: primary/dark fails 1.4.3 text contrast', async () => {
    // cited defect — renders as FAIL, not skipped-invisible
  });
});</pre>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Running it</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX};"><code>scripts/audit-a11y-coverage.mjs</code> reads all three inputs and prints one grid per component, exiting non-zero if any required cell is FAIL or missing. Wired as <code>npm run audit:a11y-coverage</code> — runs in CI and is a required gate in <code>/test-component</code> before any <code>.a11y.ts</code> file is committed.</p>

    </div>
  \`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Coverage Taxonomy',
  render: () => html\`
    <style>\${CODE_STYLE}</style>
    <div class="a11y-doc" data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Coverage Taxonomy</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">A fixed lens every component is tested through, in three layers — not a document that gets edited each time a new component is built. <strong>Layer 1</strong> classifies every WCAG 2.2 A/AA success criterion once, forever, by whether our framework can resolve it mechanically. <strong>Layer 2</strong> is the operational grid — category × state, derived per component by inspecting that component's own source. <strong>Layer 3</strong> is the six-outcome model every cell resolves to (see Overview). Only Layer 2's <em>instances</em> change as components ship; Layers 1 and 3 do not.</p>

      <h2 style="\${t.h2}">Layer 1 — SC classification</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">Every WCAG 2.2 A/AA success criterion, classified by whether our framework — source-grep for applicability, plus Playwright interaction/measurement or axe for the verdict — can resolve it without human judgment. This is a property of the SC itself, derived from what WCAG requires, not from which mms components happen to exist today.</p>
      <div style="\${doc.frame} display: flex; gap: 0; margin-bottom: \${space.content};">
        <div style="padding: var(--spacing-md1); flex: 1;">
          <div style="\${t.body} font-weight: 700; margin-bottom: var(--spacing-xs2);">STP</div>
          <div style="\${t.body}">Structurally Testable Programmatically — both applicability and pass/fail are mechanically determined, including via Playwright interaction/measurement or axe, not only static source grep.</div>
        </div>
        <div style="padding: var(--spacing-md1); flex: 1; border-inline-start: var(--border-width-xs) solid var(--color-border-subtle);">
          <div style="\${t.body} font-weight: 700; margin-bottom: var(--spacing-xs2);">Partial-STP</div>
          <div style="\${t.body}">Applicability triggers mechanically, but the verdict itself requires human judgment (visual/content quality) the framework cannot render.</div>
        </div>
        <div style="padding: var(--spacing-md1); flex: 1; border-inline-start: var(--border-width-xs) solid var(--color-border-subtle);">
          <div style="\${t.body} font-weight: 700; margin-bottom: var(--spacing-xs2);">Not-STP</div>
          <div style="\${t.body}">Neither applicability nor verdict is mechanical — owned by page template, content-authoring, or multi-page flow, never an individual component.</div>
        </div>
      </div>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">SC</th>
            <th style="\${doc.th}">Level</th>
            <th style="\${doc.th}">Class</th>
            <th style="\${doc.th}">Verified by / why</th>
          </tr>
        </thead>
        <tbody>
          \${[['group', 'Perceivable'], ['1.1.1 Non-text Content', 'A', 'Partial-STP', ['every non-decorative icon/img has aria-hidden or an accessible name', 'whether the name text is meaningful']], ['1.2.1 Audio-only and Video-only', 'A', 'Partial-STP', ['<audio>/<video> present', 'whether a complete text transcript (audio-only) or text/audio alternative (video-only) is provided']], ['1.2.2 Captions (Prerecorded)', 'A', 'Partial-STP', ['<video> present', 'whether captions are provided and accurate/synchronized to dialogue and sound']], ['1.2.3 Audio Description or Media Alternative', 'A', 'Partial-STP', ['<video> present', 'whether an audio-description track or full text alternative conveying visual-only information is provided']], ['1.2.4 Captions (Live)', 'AA', 'Partial-STP', ['live media stream present', 'whether real-time captions are provided and accurate']], ['1.2.5 Audio Description (Prerecorded)', 'AA', 'Partial-STP', ['<video> present', 'whether extended/standard audio description is provided for visual information not carried in the main audio track']], ['1.3.1 Info and Relationships', 'A', 'STP', 'DOM-inspection assertion — existing Semantic/ARIA category'], ['1.3.2 Meaningful Sequence', 'A', 'STP', 'DOM order vs. CSS visual order, mechanically assertable'], ['1.3.3 Sensory Characteristics', 'A', 'Not-STP', 'content-authoring judgment — no structural signal to grep for'], ['1.3.4 Orientation', 'AA', 'Not-STP', 'page/viewport-level, never an individual component'], ['1.3.5 Identify Input Purpose', 'AA', 'STP', 'trigger: component renders a native text-entry element; BUILD GAP until an autocomplete passthrough prop exists, then mechanically verified'], ['1.4.1 Use of Color', 'A', 'STP', 'existing Color/Contrast sub-check'], ['1.4.2 Audio Control', 'A', 'Partial-STP', ['autoplaying audio/video longer than 3 seconds', 'whether the exposed stop/pause/volume control is actually effective and independent of overall system volume']], ['1.4.3 Contrast (Minimum)', 'AA', 'STP', "axe's color-contrast rule"], ['1.4.4 Resize Text', 'AA', 'STP', 'Playwright zoom-to-200% + content-loss assertion'], ['1.4.5 Images of Text', 'AA', 'STP', 'mechanical: confirms no component renders text via canvas/image'], ['1.4.10 Reflow', 'AA', 'STP', 'Playwright viewport-to-320px + no-horizontal-scroll assertion'], ['1.4.11 Non-text Contrast', 'AA', 'STP', 'axe, existing'], ['1.4.12 Text Spacing', 'AA', 'STP', 'Playwright WCAG text-spacing stylesheet injection + no-clipping assertion'], ['1.4.13 Content on Hover or Focus', 'AA', 'STP', 'trigger: a :hover/:focus rule reveals content on a sibling element; verdict: Playwright hover-persistence + Escape-dismiss assertion'], ['group', 'Operable'], ['2.1.1 Keyboard', 'A', 'STP', 'existing'], ['2.1.2 No Keyboard Trap', 'A', 'STP', 'existing (dialog-focus-containment)'], ['2.1.4 Character Key Shortcuts', 'A', 'Not-STP', 'mechanically triggerable single-key-shortcut detection, applied whenever a component implements one'], ['2.2.1 Timing Adjustable', 'A', 'STP', "trigger: a session/auto-advance/auto-dismiss timer construct; verdict: pause/extend control assertion"], ['2.2.2 Pause, Stop, Hide', 'A', 'STP', 'same trigger/component as 2.2.1'], ['2.3.1 Three Flashes', 'A', 'Partial-STP', ['@keyframes/infinite animation present', 'actual flash rate assessed against the 3-flashes-per-second threshold (frame-capture tooling not yet built)']], ['2.4.1 Bypass Blocks', 'A', 'Not-STP', 'page/nav-shell, never an individual component'], ['2.4.2 Page Titled', 'A', 'Not-STP', 'page-level'], ['2.4.3 Focus Order', 'A', 'STP', 'existing'], ['2.4.4 Link Purpose (In Context)', 'A', 'Partial-STP', ['accessible name is non-empty and not a denylisted generic phrase', 'contextual clarity']], ['2.4.5 Multiple Ways', 'AA', 'Not-STP', 'page-level'], ['2.4.6 Headings and Labels', 'AA', 'Partial-STP', ['label/heading text non-empty (form labels fold into the existing label check)', 'descriptiveness — page headings are page-level']], ['2.4.7 Focus Visible', 'AA', 'STP', 'existing'], ['2.4.11 Focus Not Obscured (Minimum)', 'AA', 'STP', 'Playwright bounding-box: focused element not fully covered by an overlapping sticky/fixed sibling'], ['2.5.1 Pointer Gestures', 'A', 'Not-STP', 'mechanically triggerable gesture-based-interaction detection, applied whenever a component implements one'], ['2.5.2 Pointer Cancellation', 'A', 'STP', 'mechanical: action fires on click/pointerup, not pointerdown/mousedown'], ['2.5.3 Label in Name', 'A', 'STP', 'existing Semantic/ARIA sub-check'], ['2.5.4 Motion Actuation', 'A', 'Not-STP', 'applies whenever a component implements device-motion-triggered functionality'], ['2.5.7 Dragging Movements', 'AA', 'Not-STP', 'mechanically triggerable drag-interaction detection, applied whenever a component implements one'], ['2.5.8 Target Size (Minimum)', 'AA', 'STP', 'existing'], ['group', 'Understandable'], ['3.1.1 Language of Page', 'A', 'Not-STP', '<html lang>, page-level'], ['3.1.2 Language of Parts', 'AA', 'Partial-STP', ['component passes through a lang attribute', 'whether a given usage needs it']], ['3.2.1 On Focus', 'A', 'STP', 'mechanical: a focus handler contains a navigation/submit/window-open side effect'], ['3.2.2 On Input', 'A', 'STP', 'same, input/change handler'], ['3.2.3 Consistent Navigation', 'AA', 'Not-STP', 'page-level'], ['3.2.4 Consistent Identification', 'AA', 'Not-STP', 'inherently satisfied by a single shared component library — not tested per-component'], ['3.2.6 Consistent Help', 'A', 'Not-STP', 'page-level'], ['3.3.1 Error Identification', 'A', 'STP', 'folds into the existing error-state check'], ['3.3.2 Labels or Instructions', 'A', 'STP', 'existing'], ['3.3.3 Error Suggestion', 'AA', 'Not-STP', "content-authoring judgment — the component renders whatever errorText string it's given"], ['3.3.4 Error Prevention (Legal, Financial, Data)', 'AA', 'Not-STP', 'page/flow-level'], ['3.3.7 Redundant Entry', 'A', 'Not-STP', 'page/flow-level'], ['3.3.8 Accessible Authentication (Minimum)', 'AA', 'Not-STP', 'page/flow-level — applies to auth flows, not individual field components'], ['group', 'Robust'], ['4.1.2 Name, Role, Value', 'A', 'STP', 'existing'], ['4.1.3 Status Messages', 'AA', 'STP', 'existing']].map(row => row[0] === 'group' ? html\`
                <tr>
                  <td colspan="4" style="\${doc.td} font-weight: var(--font-weight-bold); background: var(--color-surface-sunken);">\${row[1]}</td>
                </tr>
              \` : html\`
                <tr style="\${row[2] === 'Not-STP' ? 'background: var(--color-surface-default);' : ''}">
                  <td style="\${doc.td} \${t.monoSm} white-space: nowrap;">\${row[0]}</td>
                  <td style="\${doc.td} \${doc.muted}">\${row[1]}</td>
                  <td style="\${doc.td} white-space: nowrap;">\${row[2]}</td>
                  <td style="\${doc.td} \${doc.muted}">\${Array.isArray(row[3]) ? html\`<div style="margin-bottom: var(--spacing-xs2);"><span style="\${doc.muted}">STP-trigger:</span> \${row[3][0]}</div><div><span style="\${doc.muted}">Manual:</span> \${row[3][1]}</div>\` : row[3]}</td>
                </tr>
              \`)}
        </tbody>
      </table>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Layer 2 — category axis (kind of requirement)</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">These categories are fixed and don't change per component. Responsive/Reflow and Timing & Motion have been part of this table from the start.</p>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">Category</th>
            <th style="\${doc.th}">WCAG SC</th>
            <th style="\${doc.th}">Verified by</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}">Color/Contrast</td>
            <td style="\${doc.td} \${t.monoSm} \${doc.muted}">1.4.1, 1.4.3, 1.4.11 — plus sub-check below</td>
            <td style="\${doc.td} \${doc.muted}">axe color-contrast rule</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Semantic/ARIA</td>
            <td style="\${doc.td} \${t.monoSm} \${doc.muted}">1.3.1, 4.1.2 — plus sub-checks below</td>
            <td style="\${doc.td} \${doc.muted}">DOM-inspection assertion inside the state cell</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Keyboard/Operability</td>
            <td style="\${doc.td} \${t.monoSm} \${doc.muted}">2.1.1, 2.4.3, 2.4.7 — plus sub-checks below</td>
            <td style="\${doc.td} \${doc.muted}">keyboard/pointer simulation + focus/bounding-box assertions</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Target Size/Touch Area</td>
            <td style="\${doc.td} \${t.monoSm} \${doc.muted}">2.5.8, 2.5.5</td>
            <td style="\${doc.td} \${doc.muted}">rendered bounding-box measurement</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Responsive/Reflow</td>
            <td style="\${doc.td} \${t.monoSm} \${doc.muted}">1.4.4, 1.4.10, 1.4.12</td>
            <td style="\${doc.td} \${doc.muted}">Playwright viewport-resize/zoom/stylesheet-injection + overflow assertion</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Timing & Motion</td>
            <td style="\${doc.td} \${t.monoSm} \${doc.muted}">2.2.1, 2.2.2 (STP), 2.3.1 (Partial-STP)</td>
            <td style="\${doc.td} \${doc.muted}">mechanical timer/animation-construct trigger + pause-control assertion; flash-rate itself is MANUAL</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Predictability</td>
            <td style="\${doc.td} \${t.monoSm} \${doc.muted}">3.2.1, 3.2.2</td>
            <td style="\${doc.td} \${doc.muted}">mechanical: a focus or input/change handler contains a navigation/submit/window-open side effect</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Color/contrast sub-checks</h3>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">Folds into the existing per-state assertion for the state that triggers it — not a new grid cell.</p>
      <ul style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0 0 \${space.subsection}; padding-left: var(--spacing-lg1);">
        <li><strong>1.4.1 Use of Color</strong> — error state renders a non-color indicator alongside color. REQUIRED iff the component has an error/errorText property — rides the Error-state row.</li>
      </ul>

      <h3 style="\${t.h3}">Semantic/ARIA sub-checks</h3>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">Each folds into the existing per-state assertion for the state that triggers it — not a new grid cell.</p>
      <ul style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0 0 \${space.subsection}; padding-left: var(--spacing-lg1);">
        <li><strong>4.1.3 Status Messages</strong> — error row carries <code>role="alert"</code>; REQUIRED iff the component has an error/errorText property — rides the Error-state row.</li>
        <li><strong>2.5.3 Label in Name</strong> — accessible name must contain visible label text. REQUIRED iff the component has a label property and renders aria-label/aria-labelledby from it.</li>
        <li><strong>1.1.1 Non-text Content</strong> — REQUIRED iff the component renders an icon/img; asserts aria-hidden (decorative) or a real accessible name (meaningful).</li>
        <li><strong>1.3.2 Meaningful Sequence</strong> — REQUIRED iff the component's CSS reorders content visually (order, row-reverse/column-reverse); asserts DOM order still matches reading order.</li>
        <li><strong>2.4.4 Link Purpose (In Context)</strong> — REQUIRED iff the component renders an &lt;a&gt;/role="link"; asserts the accessible name is non-empty and not on a denylist of generic phrases.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard/operability sub-checks</h3>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">Applicability keys off the component's declared ARIA role (WAI-ARIA APG pattern catalog), not off which describe blocks already exist. <code>role="dialog"</code> pulls in the full Dialog pattern, including 2.1.2 focus containment.</p>
      <ul style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0; padding-left: var(--spacing-lg1);">
        <li><strong>1.4.13 Content on Hover or Focus</strong> — REQUIRED iff a :hover/:focus rule reveals content on a sibling element that isn't native browser chrome; asserts hover-persistence and Escape-dismiss.</li>
        <li><strong>2.4.11 Focus Not Obscured (Minimum)</strong> — REQUIRED iff the component (or its page context) has a sticky/fixed sibling that can overlap it.</li>
        <li><strong>2.5.2 Pointer Cancellation</strong> — REQUIRED iff the component has a click/activation handler; asserts it fires on click/pointerup, never pointerdown/mousedown.</li>
      </ul>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">State axis</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">What condition the component is put in. Applicability is derived mechanically by inspecting the component's own source — never asserted by hand.</p>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th}">State</th>
            <th style="\${doc.th}">Required if</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}">Default</td>
            <td style="\${doc.td} \${doc.muted}">always</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Disabled / Readonly / Error / Required</td>
            <td style="\${doc.td} \${doc.muted}">matching <code>@property()</code> declared on the component</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Hover</td>
            <td style="\${doc.td} \${doc.muted}">a <code>:hover</code> selector exists in the component's own CSS</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Focus-visible</td>
            <td style="\${doc.td} \${doc.muted}">a <code>:focus-visible</code>/<code>:focus</code> selector exists, the component renders a natively focusable element, or a slotted child does</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Dialog focus containment</td>
            <td style="\${doc.td} \${doc.muted}">component declares <code>role="dialog"</code> — pulls in the full WAI-ARIA Dialog pattern (Tab/Shift+Tab cycling, no leak to background, Escape exit)</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Category × state applicability</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">A fixed WCAG/spec fact, not a per-component judgment call. A <code>test.fixme()</code>'d cell still renders as a hard FAIL with its ticket citation — never invisible, never a pass. Cross-checked cell-by-cell against the real audit script's <code>CATEGORY_APPLICABILITY</code> by <code>Accessibility.applicability.test.ts</code> — this table cannot drift from the mechanical audit without failing that test.</p>
      <table style="\${doc.table} margin-bottom: \${space.content};">
        <thead>
          <tr>
            <th style="\${doc.th}">State</th>
            <th style="\${doc.th} text-align: center;">Color</th>
            <th style="\${doc.th} text-align: center;">ARIA</th>
            <th style="\${doc.th} text-align: center;">Keyboard</th>
            <th style="\${doc.th} text-align: center;">Target Size</th>
            <th style="\${doc.th} text-align: center;">Reflow*</th>
            <th style="\${doc.th} text-align: center;">Timing*</th>
            <th style="\${doc.th} text-align: center;">Predict.*</th>
          </tr>
        </thead>
        <tbody>
          \${CATEGORY_STATE_APPLICABILITY.map(([state, color, aria, keyboard, size, reflow, timing, predict]) => html\`
              <tr>
                <td style="\${doc.td}">\${state}</td>
                <td style="\${doc.td} text-align: center;">\${color ? '✅' : '—'}</td>
                <td style="\${doc.td} text-align: center;">\${aria ? '✅' : '—'}</td>
                <td style="\${doc.td} text-align: center;">\${keyboard ? '✅' : '—'}</td>
                <td style="\${doc.td} text-align: center;">\${size ? '✅' : '—'}</td>
                <td style="\${doc.td} text-align: center;">\${reflow ? '✅' : '—'}</td>
                <td style="\${doc.td} text-align: center;">\${timing ? '✅' : '—'}</td>
                <td style="\${doc.td} text-align: center;">\${predict ? '✅' : '—'}</td>
              </tr>
            \`)}
        </tbody>
      </table>
      <p style="\${t.caption} \${doc.muted} max-width: \${PROSE_MAX};">* Reflow only re-runs on Error (added error text/icon is the one state that can change layout); Timing & Motion is a component-level capability check, so Default only; Predictability covers On-Input (rides Default, wherever a change handler exists) and On-Focus (rides Focus-visible) — neither varies by any other state.</p>

      <hr style="\${DIVIDER}" />

      <h2 style="\${t.h2}">Cross-cutting axes</h2>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">These multiply applicable states — they are not additional peer rows in the grid.</p>
      <table style="\${doc.table} margin-bottom: \${space.content};">
        <thead>
          <tr>
            <th style="\${doc.th}">Axis</th>
            <th style="\${doc.th}">Values</th>
            <th style="\${doc.th}">Multiplies against</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}">Color mode</td>
            <td style="\${doc.td} \${doc.muted}">light, dark</td>
            <td style="\${doc.td} \${doc.muted}">Color/Contrast only — always both, no opt-out</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Component variant</td>
            <td style="\${doc.td} \${doc.muted}">every value of the component's own color-relevant property</td>
            <td style="\${doc.td} \${doc.muted}">Color/Contrast (all variants) and Target Size (size-affecting variants only)</td>
          </tr>
          <tr>
            <td style="\${doc.td}">Density</td>
            <td style="\${doc.td} \${doc.muted}">default, compact</td>
            <td style="\${doc.td} \${doc.muted}">Target Size only, iff the component has a <code>[data-density]</code> selector</td>
          </tr>
        </tbody>
      </table>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">Responsive/Reflow, Timing & Motion, and Predictability are invariant to all three axes above — none of them branch on color mode, component variant, or density, so each is tested once (per its own applicable states) rather than multiplied.</p>

      \${callout('Brand palette is never a multiplier', 'For components with a brand-relevant color property (e.g. <code>colorScheme</code>, <code>linkColor</code>), tests run against exactly one canonical palette (Maximus-Primary) × both color modes — brand palette is a token-value swap, not a change to markup/ARIA/CSS structure, so portability to every other client brand sheet is guaranteed structurally instead, via the minimum-contrast contract every Layer 2 token sheet must satisfy (see Foundations → Colors). Components with no such property — Text Field, Select, Text Area — don\\'t consume brand tokens at all: they render from Layer 1 structural/neutral tokens only, so brand palette isn\\'t a variable to test in the first place. Only color mode affects their rendering.', 'informational')}

      <hr style="\${DIVIDER}" />

      <h3 style="\${t.h3}">Permanent — page/document-level, regardless of what gets built</h3>
      <table style="\${doc.table} margin-bottom: \${space.content};">
        <tbody>
          \${['1.3.4 Orientation', '2.4.1 Bypass Blocks, 2.4.2 Page Titled, 2.4.5 Multiple Ways', '3.1.1 Language of Page', '3.2.3 Consistent Navigation, 3.2.4 Consistent Identification, 3.2.6 Consistent Help', '3.3.4 Error Prevention (Legal/Financial/Data), 3.3.7 Redundant Entry, 3.3.8 Accessible Authentication'].map(sc => html\`
              <tr>
                <td style="\${doc.td} \${t.monoSm} \${doc.muted}">\${sc}</td>
              </tr>
            \`)}
        </tbody>
      </table>

      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX};"><strong>Content-authoring judgment, not a structural signal at all</strong> (Not-STP, no mechanical trigger ever applies): 1.3.3 Sensory Characteristics, 2.4.6 Headings and Labels (page-level portion), 3.3.3 Error Suggestion.</p>

    </div>
  \`
}`,...F.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Live Coverage Grid',
  render: () => {
    const byComponent = groupByComponent(fullGrid);
    const sortedEntries = [...byComponent.entries()].sort(([a], [b]) => a.localeCompare(b));
    return html\`
      <style>
        /* Prevents the scrollbar-appearing-on-expand horizontal reflow (~15px) */
        html { scrollbar-gutter: stable; }
      </style>
      <div class="a11y-doc" data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>
        <style>\${CODE_STYLE}</style>

        <h1 style="\${t.h1}">Live Coverage Grid</h1>
        <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">Generated directly from <code>scripts/build-wcag-tables.mjs</code> — the same pipeline that feeds each built component's own "WCAG 2.2 AA Compliance" table. Expand a component to see its full state × category outcome grid; hover a cell for its FAIL/N/A/MANUAL/BUILD GAP reason.</p>

        \${sortedEntries.map(([component, cells]) => html\`
            <details style="margin-bottom: \${space.content}; border: var(--border-width-xs) solid var(--color-border-default); border-radius: var(--radius-sm); padding: var(--spacing-sm2) var(--spacing-md1);">
              <summary style="cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: var(--spacing-sm2);">
                <span style="\${t.mono}">mms-\${component}</span>
                <span style="\${t.caption} \${doc.muted} font-weight: 400;">\${summaryBadge(cells)}</span>
              </summary>
              <div style="margin-top: \${space.content};">
                \${componentGridTable(cells)}
              </div>
            </details>
          \`)}

      </div>
    \`;
  }
}`,...z.parameters?.docs?.source}}},B=[`CATEGORY_STATE_APPLICABILITY`,`Overview`,`TestingMethodology`,`CoverageTaxonomy`,`LiveCoverageGrid`]}))();export{A as CATEGORY_STATE_APPLICABILITY,F as CoverageTaxonomy,z as LiveCoverageGrid,N as Overview,P as TestingMethodology,B as __namedExportsOrder,C as default};