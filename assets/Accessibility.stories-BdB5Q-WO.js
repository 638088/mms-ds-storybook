import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-aQ4dERgF.js";import{a as r,i,n as a,t as o}from"./a11y-outcome-Bve_D8DZ.js";function s(e){let t=new Map;for(let n of e)t.has(n.component)||t.set(n.component,[]),t.get(n.component).push(n);return t}function c(e){let t={};for(let n of e)t[n.result]=(t[n.result]??0)+1;let n=e.filter(e=>e.flaky).length,r=Object.entries(t).map(([e,t])=>`${t} ${e}`).join(`, `);return n>0?`${r} (⚠ ${n} FLAKY)`:r}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{n(),o(),r(),l={title:`Foundations/Accessibility`,excludeStories:[`CATEGORY_STATE_APPLICABILITY`]},u={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 1rem; line-height: 1.4; font-weight: 700; margin: 0 0 0.5rem;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},d=`680px`,f=`font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 960px; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;`,p=(e,n,r,i)=>t`
  <div style="margin-bottom: 1.5rem; padding: 0.875rem 1rem; background: ${n}; border-left: 3px solid ${e}; border-radius: 0 4px 4px 0;">
    <p style="${u.caption}"><strong>${r}:</strong> ${i}</p>
  </div>
`,m=[[`Default`,!0,!0,!0,!0,!0,!0,!0],[`Disabled`,!1,!0,!0,!1,!1,!1,!1],[`Readonly`,!0,!0,!0,!0,!1,!1,!1],[`Error`,!0,!0,!0,!0,!0,!1,!1],[`Required`,!1,!0,!1,!1,!1,!1,!1],[`Hover`,!0,!1,!1,!1,!1,!1,!1],[`Focus-visible`,!0,!1,!0,!1,!1,!1,!0],[`Dialog focus containment`,!1,!1,!0,!1,!1,!1,!1]],h=[{q:`What's this SC's Layer 1 class?`,note:`fixed per SC, forever — never a per-component judgment call`,branches:[[`Not-STP`,`PAGE-LEVEL`]],cont:`STP or Partial-STP — continue`},{q:`Is this SC applicable to this component/state?`,note:`mechanical trigger — same source-grep pattern for STP and Partial-STP`,branches:[[`No`,`N/A`]],cont:`Yes — continue`},{q:`Does the component expose the API/capability needed to test it?`,note:`a build gap, not a test-coverage gap — nothing exists yet to test`,branches:[[`No`,`BUILD GAP`]],cont:`Yes — continue`},{q:`Did the mechanical check pass?`,note:`uniform for STP and Partial-STP alike — a mechanical failure is a real failure regardless of classification`,branches:[[`No`,`FAIL`]],cont:`Yes — continue`},{q:`Is this SC Partial-STP?`,note:`the mechanical check already passed — this only decides whether a human still has to confirm the qualitative verdict`,branches:[[`No (STP)`,`PASS`],[`Yes`,`MANUAL`]]}],g=()=>t`
  <div style="display: flex; flex-direction: column; gap: 0; margin-bottom: 1.5rem; padding: 1.5rem 1.75rem; border: 1px solid rgba(128,128,128,0.15); border-radius: 8px; background: rgba(128,128,128,0.02);">
    ${h.map((e,n)=>t`
        <div style="display: flex; gap: 1rem; ${n<h.length-1?`padding-bottom: 1.4rem;`:``}">
          <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
            <div style="width: 1.5rem; height: 1.5rem; border-radius: 50%; background: rgba(128,128,128,0.16); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; opacity: 0.85;">${n+1}</div>
            ${n<h.length-1?t`<div style="width: 2px; flex: 1; margin-top: 4px; background: rgba(128,128,128,0.15);"></div>`:``}
          </div>
          <div style="flex: 1; min-width: 0;">
            <p style="${u.body} font-weight: 600; margin: 0 0 0.15rem;">${e.q}</p>
            ${e.note?t`<p style="${u.caption} opacity: 0.75; margin: 0 0 0.6rem;">${e.note}</p>`:t`<div style="height: 0.6rem;"></div>`}
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              ${e.branches.map(([e,n])=>t`
                  <div style="display: flex; align-items: center; gap: 0.6rem;">
                    <span style="${u.caption} opacity: 0.75; min-width: 130px;">↳ ${e}</span>
                    ${a(n)}
                  </div>
                `)}
              ${e.cont?t`<div style="${u.caption} opacity: 0.75; font-style: italic; margin-top: 0.1rem;">↳ ${e.cont} ↓</div>`:``}
            </div>
          </div>
        </div>
      `)}
  </div>
`,_={name:`Overview`,render:()=>t`
    <div style="${f}">

      <h1 style="${u.h1}">Accessibility Testing Framework</h1>
      <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 1.5rem;">Every mms component is validated against a mechanical coverage taxonomy — a fixed grid of category × state × cross-cutting-axis cells. Each cell resolves to exactly one of six fixed outcomes.</p>

      ${p(`#f59e0b`,`rgba(251,191,36,0.1)`,`Section 508 / ADA Title II`,`Maximus engagements are government-facing — federal engagements target Section 508, state engagements target ADA Title II. Both point to the same technical standard: WCAG. Compliance is enforced structurally, through this taxonomy and the token contracts in Foundations → Colors, not through one-off manual review.`)}

      <h2 style="${u.h2}">Why mechanical, not manual</h2>
      <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 1rem;">Manual a11y review does not scale across a multi-platform, multi-brand design system. A taxonomy that is derived mechanically from each component's own source (its declared properties, its CSS selectors, its ARIA role) means coverage requirements travel with the component automatically as it changes, rather than living in a checklist that quietly drifts out of date.</p>

      <h2 style="${u.h2}">STP Resolution</h2>
      <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 0.75rem;">This is a VPAT-style model, and which outcomes are even reachable is gated by the SC's <strong>Layer 1 classification</strong> (see Coverage Taxonomy):</p>
      <ul style="${u.body} opacity: 0.85; max-width: ${d}; margin: 0 0 0.75rem; padding-left: 1.25rem; line-height: 1.7;">
        <li>a <strong>Not-STP</strong> SC is out of scope for component-level testing entirely — it resolves straight to PAGE-LEVEL and never enters the rest of this flow</li>
        <li>an <strong>STP</strong> SC can resolve to PASS, FAIL, BUILD GAP, or N/A</li>
        <li>a <strong>Partial-STP</strong> SC can resolve to FAIL, BUILD GAP, or N/A exactly like STP — a mechanical failure is a mechanical failure regardless of classification. The only place STP and Partial-STP diverge is what happens once the mechanical check <em>passes</em>: STP goes straight to PASS, Partial-STP goes to MANUAL — a contingent pass pending a human's confirmation of the qualitative verdict, never a contingent fail</li>
      </ul>
      <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 1.25rem;">No cell invents a seventh category, and no per-component judgment decides which of these applies outside this logic. The diagram below shows how a single SC walks through this logic to land on exactly one outcome:</p>

      ${g()}

      <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 1rem;"><strong>Not-STP exits before the mechanical trigger ever runs.</strong> The source-grep applicability check in step 2 only means something for STP/Partial-STP SCs, which genuinely vary by component and state. A Not-STP SC (page titles, consistent navigation, bypass blocks) is page-level by definition, for every component, always — so it's resolved and out of scope at step 1, not evaluated against a per-component/state trigger it was never subject to.</p>

      <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 1rem;"><strong>What "Partial-STP" actually means:</strong> the applicability trigger is fully mechanical — identical mechanism to STP, same source-grep pattern — and so is the pass/fail check itself. Take <strong>1.1.1 Non-text Content</strong>: whether a non-decorative icon has an accessible name at all is mechanical (grep the render output for <code>aria-hidden</code> or a name string — steps 2–4 answer this definitively, and a missing name is a FAIL, full stop). What's not mechanical is whether a name that IS present is actually <em>meaningful</em> ("close" vs. "x") — a human has to read it, which is why step 5 stops at MANUAL rather than guessing PASS on its own. That's the literal sense in which it's "partial": mechanical on the trigger and on the failure case, human only on confirming the pass case — never excluded from the STP mechanism, just unable to self-certify a PASS.</p>

      <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 1rem;"><strong>FAIL is never a bare status — it always ships with the specific fix.</strong> A border-color token that measures 2.1:1 against its background is a FAIL: axe can test contrast today, the test ran, it failed, and the remediation is exactly as concrete as the failure — "border color must meet 3:1, swap token <code>X</code>," cited to a ticket. Every FAIL carries that same kind of diagnosis; it is never reported as a plain red flag with no next step attached.</p>

      <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 1rem;"><strong>BUILD GAP and FAIL are mutually exclusive by construction</strong>, not by convention — the capability check (step 3) resolves before pass/fail (step 4) is ever evaluated, so a cell can only reach FAIL after clearing the capability gate. The two outcomes exist because they answer different questions, not because one requires action and the other doesn't — both do. BUILD GAP is a gate <em>before</em> a test can run at all: the component hasn't shipped the surface a test needs yet (a missing <code>autocomplete</code> prop — nothing to point a test at). FAIL is what a completed test produces: the capability exists, the test ran, and it didn't pass. ("ACTION REQUIRED" was the original name for this outcome; it's renamed to BUILD GAP because FAIL requires action too — the old name implied FAIL didn't, and BUILD GAP names what this outcome actually is: a component-build gap.)</p>

      <p style="${u.body} opacity: 0.85; max-width: ${d};"><strong>MANUAL is always a contingent PASS, never a contingent FAIL.</strong> By the time a Partial-STP SC reaches step 5, it has already cleared the same mechanical applicability, capability, and pass/fail gates as an STP SC — the mechanical check passed. What remains is a human confirming the qualitative verdict, recorded in a manual-review log per component/SC; once reviewed, the grid shows the attested result (e.g. "MANUAL — verified PASS, reviewed 2026-08-10") rather than losing the fact that a human, not the audit script, produced it. If the mechanical check had failed instead, the cell would already be FAIL at step 4 — a bigger problem than any manual review, and one that never reaches the MANUAL branch at all.</p>

      <p style="${u.body} opacity: 0.85; max-width: ${d};">See <strong>Testing Methodology</strong> for how the grid is produced, and <strong>Coverage Taxonomy</strong> for the full three-layer reference — SC classification, category × state, and outcome.</p>

    </div>
  `},v={name:`Testing Methodology`,render:()=>t`
    <div style="${f}">

      <h1 style="${u.h1}">Testing Methodology</h1>
      <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 1.5rem;">The coverage grid is not hand-maintained. It is generated by correlating three independent sources of truth, so the requirements a component must satisfy are derived from what the component actually declares — not from a document someone forgot to update.</p>

      <h2 style="${u.h2}">Three inputs, one grid</h2>
      <div style="display: flex; gap: 0; margin-bottom: 2rem; border-radius: 8px; overflow: hidden; border: 1px solid rgba(128,128,128,0.2);">
        <div style="background: #f5f3ff; padding: 14px 18px; flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: #1a1a2e; margin-bottom: 6px;">1. Component source</div>
          <div style="font-size: 0.875rem; color: #6b7280; margin-bottom: 8px;">what states/variants exist</div>
          <div style="font-size: 0.875rem; color: #374151; line-height: 1.6;">Declared <code>@property()</code> fields determine which states apply (e.g. a <code>disabled</code> property means the Disabled row is required). CSS selectors determine Hover/Focus-visible applicability. The component's own color/variant union determines how many times Color/Contrast multiplies.</div>
        </div>
        <div style="background: #eff6ff; padding: 14px 18px; flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: #1a1a2e; margin-bottom: 6px;">2. Test source</div>
          <div style="font-size: 0.875rem; color: #6b7280; margin-bottom: 8px;">what's tagged and generated</div>
          <div style="font-size: 0.875rem; color: #374151; line-height: 1.6;"><code>describeA11yTarget(target, label, fn)</code> tags every describe block's title with <code>[a11y:&lt;target&gt;]</code>. <code>forEachColorAxis(variants, fn)</code> cross-multiplies every declared color variant against both color modes, generating titles like <code>primary / dark</code>.</div>
        </div>
        <div style="background: #f0fdf4; padding: 14px 18px; flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: #1a1a2e; margin-bottom: 6px;">3. Real results</div>
          <div style="font-size: 0.875rem; color: #6b7280; margin-bottom: 8px;">what actually ran</div>
          <div style="font-size: 0.875rem; color: #374151; line-height: 1.6;">Playwright's JSON reporter output (<code>test-results/playwright/results.json</code>) — real pass/fail/skip per test, correlated back to a cell by matching its <code>[a11y:&lt;target&gt;]</code> tag and generated variant/mode title.</div>
        </div>
      </div>

      <h2 style="${u.h2}">How a cell is verified</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">Category</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">Verified by</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Color/Contrast</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">axe-core's <code>color-contrast</code> rule, run against the live rendered component; error states additionally assert a non-color indicator alongside color</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Semantic/ARIA</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">DOM-inspection assertions inside the state's own test block (role, name, live-region)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Keyboard/Operability</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">keyboard simulation (Tab, Shift+Tab, Enter, Escape) plus focus assertions</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Target Size/Touch Area</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;"><code>expectMinimumTargetSize</code> — rendered bounding-box measurement</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Responsive/Reflow</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">Playwright viewport-resize to 320px, 200% zoom, and WCAG text-spacing stylesheet injection — each asserting no content loss/horizontal scroll/clipping</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Timing & Motion</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">mechanical timer/<code>@keyframes</code> trigger detection + pause/extend-control assertion; actual flash-rate is MANUAL — frame-capture tooling not yet built</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Predictability</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">mechanical: a focus or input/change handler contains a navigation/submit/window-open side effect</td>
          </tr>
        </tbody>
      </table>

      <h2 style="${u.h2}">test.fixme() discipline</h2>
      <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 1rem;">A known, ticketed defect is marked <code>test.fixme()</code> in the test file, citing the ticket. The audit script treats a skipped/fixme'd test exactly like a failure — it never drops out of the grid and never counts as a pass. This is the mechanism that keeps a real defect from silently disappearing from coverage while a fix is pending.</p>

      <pre style="margin: 0 0 2rem; padding: 1rem 1.25rem; background: rgba(128,128,128,0.06); border-radius: 6px; ${u.monoSm} line-height: 1.75; overflow-x: auto;">describeA11yTarget('hover', 'Hover state', () => {
  forEachColorAxis(['primary', 'secondary'], ({ variant, mode }) => {
    test(\`\${variant} / \${mode}\`, async ({ page }) => {
      // render component in this variant/mode, trigger :hover, run axe scan
    });
  });

  test.fixme('DS-147: primary/dark fails 1.4.3 text contrast', async () => {
    // cited defect — renders as FAIL, not skipped-invisible
  });
});</pre>

      <h2 style="${u.h2}">Running it</h2>
      <p style="${u.body} opacity: 0.65; max-width: ${d}; margin-bottom: 0.75rem;"><code>scripts/audit-a11y-coverage.mjs</code> reads all three inputs and prints one grid per component, exiting non-zero if any required cell is FAIL or missing. Wired as <code>npm run audit:a11y-coverage</code> — runs in CI and is a required gate in <code>/test-component</code> before any <code>.a11y.ts</code> file is committed.</p>

    </div>
  `},y={name:`Coverage Taxonomy`,render:()=>t`
    <div style="${f}">

      <h1 style="${u.h1}">Coverage Taxonomy</h1>
      <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 1.5rem;">A fixed lens every component is tested through, in three layers — not a document that gets edited each time a new component is built. <strong>Layer 1</strong> classifies every WCAG 2.2 A/AA success criterion once, forever, by whether our framework can resolve it mechanically. <strong>Layer 2</strong> is the operational grid — category × state, derived per component by inspecting that component's own source. <strong>Layer 3</strong> is the six-outcome model every cell resolves to (see Overview). Only Layer 2's <em>instances</em> change as components ship; Layers 1 and 3 do not.</p>

      <h2 style="${u.h2}">Layer 1 — SC Classification</h2>
      <p style="${u.body} opacity: 0.65; max-width: ${d}; margin-bottom: 1rem;">Every WCAG 2.2 A/AA success criterion, classified by whether our framework — source-grep for applicability, plus Playwright interaction/measurement or axe for the verdict — can resolve it without human judgment. This is a property of the SC itself, derived from what WCAG requires, not from which mms components happen to exist today.</p>
      <div style="display: flex; gap: 0; margin-bottom: 1.5rem; border-radius: 8px; overflow: hidden; border: 1px solid rgba(128,128,128,0.2);">
        <div style="background: #f0fdf4; padding: 12px 16px; flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: #166534; margin-bottom: 4px;">STP</div>
          <div style="font-size: 0.875rem; color: #374151; line-height: 1.55;">Structurally Testable Programmatically — both applicability and pass/fail are mechanically determined, including via Playwright interaction/measurement or axe, not only static source grep.</div>
        </div>
        <div style="background: #fff7ed; padding: 12px 16px; flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: #9a3412; margin-bottom: 4px;">Partial-STP</div>
          <div style="font-size: 0.875rem; color: #374151; line-height: 1.55;">Applicability triggers mechanically, but the verdict itself requires human judgment (visual/content quality) the framework cannot render.</div>
        </div>
        <div style="background: #f9fafb; padding: 12px 16px; flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: #374151; margin-bottom: 4px;">Not-STP</div>
          <div style="font-size: 0.875rem; color: #374151; line-height: 1.55;">Neither applicability nor verdict is mechanical — owned by page template, content-authoring, or multi-page flow, never an individual component.</div>
        </div>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">SC</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">Level</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">Class</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">Verified by / why</th>
          </tr>
        </thead>
        <tbody>
          ${[[`group`,`Perceivable`],[`1.1.1 Non-text Content`,`A`,`Partial-STP`,[`every non-decorative icon/img has aria-hidden or an accessible name`,`whether the name text is meaningful`]],[`1.2.1 Audio-only and Video-only`,`A`,`Partial-STP`,[`<audio>/<video> present`,`whether a complete text transcript (audio-only) or text/audio alternative (video-only) is provided`]],[`1.2.2 Captions (Prerecorded)`,`A`,`Partial-STP`,[`<video> present`,`whether captions are provided and accurate/synchronized to dialogue and sound`]],[`1.2.3 Audio Description or Media Alternative`,`A`,`Partial-STP`,[`<video> present`,`whether an audio-description track or full text alternative conveying visual-only information is provided`]],[`1.2.4 Captions (Live)`,`AA`,`Partial-STP`,[`live media stream present`,`whether real-time captions are provided and accurate`]],[`1.2.5 Audio Description (Prerecorded)`,`AA`,`Partial-STP`,[`<video> present`,`whether extended/standard audio description is provided for visual information not carried in the main audio track`]],[`1.3.1 Info and Relationships`,`A`,`STP`,`DOM-inspection assertion — existing Semantic/ARIA category`],[`1.3.2 Meaningful Sequence`,`A`,`STP`,`DOM order vs. CSS visual order, mechanically assertable`],[`1.3.3 Sensory Characteristics`,`A`,`Not-STP`,`content-authoring judgment — no structural signal to grep for`],[`1.3.4 Orientation`,`AA`,`Not-STP`,`page/viewport-level, never an individual component`],[`1.3.5 Identify Input Purpose`,`AA`,`STP`,`trigger: component renders a native text-entry element; BUILD GAP until an autocomplete passthrough prop exists, then mechanically verified`],[`1.4.1 Use of Color`,`A`,`STP`,`existing Color/Contrast sub-check`],[`1.4.2 Audio Control`,`A`,`Partial-STP`,[`autoplaying audio/video longer than 3 seconds`,`whether the exposed stop/pause/volume control is actually effective and independent of overall system volume`]],[`1.4.3 Contrast (Minimum)`,`AA`,`STP`,`axe's color-contrast rule`],[`1.4.4 Resize Text`,`AA`,`STP`,`Playwright zoom-to-200% + content-loss assertion`],[`1.4.5 Images of Text`,`AA`,`STP`,`mechanical: confirms no component renders text via canvas/image`],[`1.4.10 Reflow`,`AA`,`STP`,`Playwright viewport-to-320px + no-horizontal-scroll assertion`],[`1.4.11 Non-text Contrast`,`AA`,`STP`,`axe, existing`],[`1.4.12 Text Spacing`,`AA`,`STP`,`Playwright WCAG text-spacing stylesheet injection + no-clipping assertion`],[`1.4.13 Content on Hover or Focus`,`AA`,`STP`,`trigger: a :hover/:focus rule reveals content on a sibling element; verdict: Playwright hover-persistence + Escape-dismiss assertion`],[`group`,`Operable`],[`2.1.1 Keyboard`,`A`,`STP`,`existing`],[`2.1.2 No Keyboard Trap`,`A`,`STP`,`existing (dialog-focus-containment)`],[`2.1.4 Character Key Shortcuts`,`A`,`Not-STP`,`mechanically triggerable single-key-shortcut detection, applied whenever a component implements one`],[`2.2.1 Timing Adjustable`,`A`,`STP`,`trigger: a session/auto-advance/auto-dismiss timer construct; verdict: pause/extend control assertion`],[`2.2.2 Pause, Stop, Hide`,`A`,`STP`,`same trigger/component as 2.2.1`],[`2.3.1 Three Flashes`,`A`,`Partial-STP`,[`@keyframes/infinite animation present`,`actual flash rate assessed against the 3-flashes-per-second threshold (frame-capture tooling not yet built)`]],[`2.4.1 Bypass Blocks`,`A`,`Not-STP`,`page/nav-shell, never an individual component`],[`2.4.2 Page Titled`,`A`,`Not-STP`,`page-level`],[`2.4.3 Focus Order`,`A`,`STP`,`existing`],[`2.4.4 Link Purpose (In Context)`,`A`,`Partial-STP`,[`accessible name is non-empty and not a denylisted generic phrase`,`contextual clarity`]],[`2.4.5 Multiple Ways`,`AA`,`Not-STP`,`page-level`],[`2.4.6 Headings and Labels`,`AA`,`Partial-STP`,[`label/heading text non-empty (form labels fold into the existing label check)`,`descriptiveness — page headings are page-level`]],[`2.4.7 Focus Visible`,`AA`,`STP`,`existing`],[`2.4.11 Focus Not Obscured (Minimum)`,`AA`,`STP`,`Playwright bounding-box: focused element not fully covered by an overlapping sticky/fixed sibling`],[`2.5.1 Pointer Gestures`,`A`,`Not-STP`,`mechanically triggerable gesture-based-interaction detection, applied whenever a component implements one`],[`2.5.2 Pointer Cancellation`,`A`,`STP`,`mechanical: action fires on click/pointerup, not pointerdown/mousedown`],[`2.5.3 Label in Name`,`A`,`STP`,`existing Semantic/ARIA sub-check`],[`2.5.4 Motion Actuation`,`A`,`Not-STP`,`applies whenever a component implements device-motion-triggered functionality`],[`2.5.7 Dragging Movements`,`AA`,`Not-STP`,`mechanically triggerable drag-interaction detection, applied whenever a component implements one`],[`2.5.8 Target Size (Minimum)`,`AA`,`STP`,`existing`],[`group`,`Understandable`],[`3.1.1 Language of Page`,`A`,`Not-STP`,`<html lang>, page-level`],[`3.1.2 Language of Parts`,`AA`,`Partial-STP`,[`component passes through a lang attribute`,`whether a given usage needs it`]],[`3.2.1 On Focus`,`A`,`STP`,`mechanical: a focus handler contains a navigation/submit/window-open side effect`],[`3.2.2 On Input`,`A`,`STP`,`same, input/change handler`],[`3.2.3 Consistent Navigation`,`AA`,`Not-STP`,`page-level`],[`3.2.4 Consistent Identification`,`AA`,`Not-STP`,`inherently satisfied by a single shared component library — not tested per-component`],[`3.2.6 Consistent Help`,`A`,`Not-STP`,`page-level`],[`3.3.1 Error Identification`,`A`,`STP`,`folds into the existing error-state check`],[`3.3.2 Labels or Instructions`,`A`,`STP`,`existing`],[`3.3.3 Error Suggestion`,`AA`,`Not-STP`,`content-authoring judgment — the component renders whatever errorText string it's given`],[`3.3.4 Error Prevention (Legal, Financial, Data)`,`AA`,`Not-STP`,`page/flow-level`],[`3.3.7 Redundant Entry`,`A`,`Not-STP`,`page/flow-level`],[`3.3.8 Accessible Authentication (Minimum)`,`AA`,`Not-STP`,`page/flow-level — applies to auth flows, not individual field components`],[`group`,`Robust`],[`4.1.2 Name, Role, Value`,`A`,`STP`,`existing`],[`4.1.3 Status Messages`,`AA`,`STP`,`existing`]].map(e=>e[0]===`group`?t`
                <tr>
                  <td colspan="4" style="padding: 0.65rem 0.75rem 0.25rem; ${u.caption} font-weight: 700; opacity: 0.6;">${e[1]}</td>
                </tr>
              `:t`
                <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); ${e[2]===`Not-STP`?`background: rgba(128,128,128,0.035);`:``}">
                  <td style="padding: 0.4rem 0.75rem; ${u.monoSm} opacity: ${e[2]===`Not-STP`?`0.75`:`0.85`}; white-space: nowrap; vertical-align: top;">${e[0]}</td>
                  <td style="padding: 0.4rem 0.75rem; ${u.caption} opacity: 0.65; vertical-align: top;">${e[1]}</td>
                  <td style="padding: 0.4rem 0.75rem; ${u.caption} opacity: ${e[2]===`Not-STP`?`0.75`:`1`}; vertical-align: top; white-space: nowrap;">${e[2]}</td>
                  <td style="padding: 0.4rem 0.75rem; ${u.caption} opacity: 0.75; vertical-align: top;">${Array.isArray(e[3])?t`<div style="margin-bottom: 0.25rem;"><span style="opacity: 0.65;">STP-trigger:</span> ${e[3][0]}</div><div><span style="opacity: 0.65;">Manual:</span> ${e[3][1]}</div>`:e[3]}</td>
                </tr>
              `)}
        </tbody>
      </table>

      <h2 style="${u.h2}">Layer 2 — Category axis (kind of requirement)</h2>
      <p style="${u.body} opacity: 0.65; max-width: ${d}; margin-bottom: 1rem;">These categories are fixed and don't change per component. Responsive/Reflow and Timing & Motion have been part of this table from the start.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">Category</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">WCAG SC</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">Verified by</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Color/Contrast</td>
            <td style="padding: 0.5rem 0.75rem; ${u.monoSm} opacity: 0.75;">1.4.1, 1.4.3, 1.4.11 — plus sub-check below</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">axe color-contrast rule</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Semantic/ARIA</td>
            <td style="padding: 0.5rem 0.75rem; ${u.monoSm} opacity: 0.75;">1.3.1, 4.1.2 — plus sub-checks below</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">DOM-inspection assertion inside the state cell</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Keyboard/Operability</td>
            <td style="padding: 0.5rem 0.75rem; ${u.monoSm} opacity: 0.75;">2.1.1, 2.4.3, 2.4.7 — plus sub-checks below</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">keyboard/pointer simulation + focus/bounding-box assertions</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Target Size/Touch Area</td>
            <td style="padding: 0.5rem 0.75rem; ${u.monoSm} opacity: 0.75;">2.5.8, 2.5.5</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">rendered bounding-box measurement</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Responsive/Reflow</td>
            <td style="padding: 0.5rem 0.75rem; ${u.monoSm} opacity: 0.75;">1.4.4, 1.4.10, 1.4.12</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">Playwright viewport-resize/zoom/stylesheet-injection + overflow assertion</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Timing & Motion</td>
            <td style="padding: 0.5rem 0.75rem; ${u.monoSm} opacity: 0.75;">2.2.1, 2.2.2 (STP), 2.3.1 (Partial-STP)</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">mechanical timer/animation-construct trigger + pause-control assertion; flash-rate itself is MANUAL</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Predictability</td>
            <td style="padding: 0.5rem 0.75rem; ${u.monoSm} opacity: 0.75;">3.2.1, 3.2.2</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">mechanical: a focus or input/change handler contains a navigation/submit/window-open side effect</td>
          </tr>
        </tbody>
      </table>

      <h3 style="${u.h3}">Color/Contrast sub-checks</h3>
      <p style="${u.body} opacity: 0.65; max-width: ${d}; margin-bottom: 0.5rem;">Folds into the existing per-state assertion for the state that triggers it — not a new grid cell.</p>
      <ul style="${u.caption} opacity: 0.8; max-width: ${d}; margin: 0 0 1.5rem; padding-left: 1.25rem; line-height: 1.7;">
        <li><strong>1.4.1 Use of Color</strong> — error state renders a non-color indicator alongside color. REQUIRED iff the component has an error/errorText property — rides the Error-state row.</li>
      </ul>

      <h3 style="${u.h3}">Semantic/ARIA sub-checks</h3>
      <p style="${u.body} opacity: 0.65; max-width: ${d}; margin-bottom: 0.5rem;">Each folds into the existing per-state assertion for the state that triggers it — not a new grid cell.</p>
      <ul style="${u.caption} opacity: 0.8; max-width: ${d}; margin: 0 0 1.5rem; padding-left: 1.25rem; line-height: 1.7;">
        <li><strong>4.1.3 Status Messages</strong> — error row carries <code>role="alert"</code>; REQUIRED iff the component has an error/errorText property — rides the Error-state row.</li>
        <li><strong>2.5.3 Label in Name</strong> — accessible name must contain visible label text. REQUIRED iff the component has a label property and renders aria-label/aria-labelledby from it.</li>
        <li><strong>1.1.1 Non-text Content</strong> — REQUIRED iff the component renders an icon/img; asserts aria-hidden (decorative) or a real accessible name (meaningful).</li>
        <li><strong>1.3.2 Meaningful Sequence</strong> — REQUIRED iff the component's CSS reorders content visually (order, row-reverse/column-reverse); asserts DOM order still matches reading order.</li>
        <li><strong>2.4.4 Link Purpose (In Context)</strong> — REQUIRED iff the component renders an &lt;a&gt;/role="link"; asserts the accessible name is non-empty and not on a denylist of generic phrases.</li>
      </ul>

      <h3 style="${u.h3}">Keyboard/Operability sub-checks</h3>
      <p style="${u.body} opacity: 0.65; max-width: ${d}; margin-bottom: 0.5rem;">Applicability keys off the component's declared ARIA role (WAI-ARIA APG pattern catalog), not off which describe blocks already exist. <code>role="dialog"</code> pulls in the full Dialog pattern, including 2.1.2 focus containment.</p>
      <ul style="${u.caption} opacity: 0.8; max-width: ${d}; margin: 0 0 1.5rem; padding-left: 1.25rem; line-height: 1.7;">
        <li><strong>1.4.13 Content on Hover or Focus</strong> — REQUIRED iff a :hover/:focus rule reveals content on a sibling element that isn't native browser chrome; asserts hover-persistence and Escape-dismiss.</li>
        <li><strong>2.4.11 Focus Not Obscured (Minimum)</strong> — REQUIRED iff the component (or its page context) has a sticky/fixed sibling that can overlap it.</li>
        <li><strong>2.5.2 Pointer Cancellation</strong> — REQUIRED iff the component has a click/activation handler; asserts it fires on click/pointerup, never pointerdown/mousedown.</li>
      </ul>

      <h2 style="${u.h2}">State axis</h2>
      <p style="${u.body} opacity: 0.65; max-width: ${d}; margin-bottom: 1rem;">What condition the component is put in. Applicability is derived mechanically by inspecting the component's own source — never asserted by hand.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">State</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">Required if</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Default</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">always</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Disabled / Readonly / Error / Required</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">matching <code>@property()</code> declared on the component</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Hover</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">a <code>:hover</code> selector exists in the component's own CSS</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Focus-visible</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">a <code>:focus-visible</code>/<code>:focus</code> selector exists, the component renders a natively focusable element, or a slotted child does</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Dialog focus containment</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">component declares <code>role="dialog"</code> — pulls in the full WAI-ARIA Dialog pattern (Tab/Shift+Tab cycling, no leak to background, Escape exit)</td>
          </tr>
        </tbody>
      </table>

      <h2 style="${u.h2}">Category × state applicability</h2>
      <p style="${u.body} opacity: 0.65; max-width: ${d}; margin-bottom: 1rem;">A fixed WCAG/spec fact, not a per-component judgment call. A <code>test.fixme()</code>'d cell still renders as a hard FAIL with its ticket citation — never invisible, never a pass. Cross-checked cell-by-cell against the real audit script's <code>CATEGORY_APPLICABILITY</code> by <code>Accessibility.applicability.test.ts</code> — this table cannot drift from the mechanical audit without failing that test.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">State</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; ${u.caption} opacity: 0.75; font-weight: 600;">Color</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; ${u.caption} opacity: 0.75; font-weight: 600;">ARIA</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; ${u.caption} opacity: 0.75; font-weight: 600;">Keyboard</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; ${u.caption} opacity: 0.75; font-weight: 600;">Target Size</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; ${u.caption} opacity: 0.75; font-weight: 600;">Reflow*</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; ${u.caption} opacity: 0.75; font-weight: 600;">Timing*</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; ${u.caption} opacity: 0.75; font-weight: 600;">Predict.*</th>
          </tr>
        </thead>
        <tbody>
          ${m.map(([e,n,r,i,a,o,s,c])=>t`
              <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
                <td style="padding: 0.5rem 0.75rem; ${u.caption}">${e}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">${n?`✅`:`—`}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">${r?`✅`:`—`}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">${i?`✅`:`—`}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">${a?`✅`:`—`}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">${o?`✅`:`—`}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">${s?`✅`:`—`}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">${c?`✅`:`—`}</td>
              </tr>
            `)}
        </tbody>
      </table>
      <p style="${u.caption} opacity: 0.6; max-width: ${d}; margin: -1.25rem 0 2rem;">* Reflow only re-runs on Error (added error text/icon is the one state that can change layout); Timing & Motion is a component-level capability check, so Default only; Predictability covers On-Input (rides Default, wherever a change handler exists) and On-Focus (rides Focus-visible) — neither varies by any other state.</p>

      <h2 style="${u.h2}">Cross-cutting axes</h2>
      <p style="${u.body} opacity: 0.65; max-width: ${d}; margin-bottom: 1rem;">These multiply applicable states — they are not additional peer rows in the grid.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">Axis</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">Values</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; ${u.caption} opacity: 0.75; font-weight: 600;">Multiplies against</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Color mode</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">light, dark</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">Color/Contrast only — always both, no opt-out</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Component variant</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">every value of the component's own color-relevant property</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">Color/Contrast (all variants) and Target Size (size-affecting variants only)</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem; ${u.caption}">Density</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">default, compact</td>
            <td style="padding: 0.5rem 0.75rem; ${u.caption} opacity: 0.75;">Target Size only, iff the component has a <code>[data-density]</code> selector</td>
          </tr>
        </tbody>
      </table>
      <p style="${u.caption} opacity: 0.65; max-width: ${d}; margin-bottom: 2rem;">Responsive/Reflow, Timing & Motion, and Predictability are invariant to all three axes above — none of them branch on color mode, component variant, or density, so each is tested once (per its own applicable states) rather than multiplied.</p>

      ${p(`#7c3aed`,`#f5f3ff`,`Brand palette is never a multiplier`,`For components with a brand-relevant color property (e.g. <code>colorScheme</code>, <code>linkColor</code>), tests run against exactly one canonical palette (Maximus-Primary) × both color modes — brand palette is a token-value swap, not a change to markup/ARIA/CSS structure, so portability to every other client brand sheet is guaranteed structurally instead, via the minimum-contrast contract every Layer 2 token sheet must satisfy (see Foundations → Colors). Components with no such property — Text Field, Select, Text Area — don't consume brand tokens at all: they render from Layer 1 structural/neutral tokens only, so brand palette isn't a variable to test in the first place. Only color mode affects their rendering.`)}

      <h3 style="${u.h3}">Permanent — page/document-level, regardless of what gets built</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
        <tbody>
          ${[`1.3.4 Orientation`,`2.4.1 Bypass Blocks, 2.4.2 Page Titled, 2.4.5 Multiple Ways`,`3.1.1 Language of Page`,`3.2.3 Consistent Navigation, 3.2.4 Consistent Identification, 3.2.6 Consistent Help`,`3.3.4 Error Prevention (Legal/Financial/Data), 3.3.7 Redundant Entry, 3.3.8 Accessible Authentication`].map(e=>t`
              <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
                <td style="padding: 0.4rem 0.75rem; ${u.monoSm} opacity: 0.75;">${e}</td>
              </tr>
            `)}
        </tbody>
      </table>

      <p style="${u.body} opacity: 0.65; max-width: ${d};"><strong>Content-authoring judgment, not a structural signal at all</strong> (Not-STP, no mechanical trigger ever applies): 1.3.3 Sensory Characteristics, 2.4.6 Headings and Labels (page-level portion), 3.3.3 Error Suggestion.</p>

    </div>
  `},b=[`Color/Contrast`,`Semantic/ARIA`,`Keyboard/Operability`,`Target Size/Touch Area`,`Responsive/Reflow`,`Timing & Motion`,`Predictability`],x=e=>e.replace(/\//g,` / `),S=e=>{let n=[],r=new Set;for(let t of e)r.has(t.state)||(r.add(t.state),n.push(t.state));let i=b.filter(t=>e.some(e=>e.category===t)),o=new Map;for(let t of e)o.has(t.state)||o.set(t.state,new Map),o.get(t.state).set(t.category,t);return t`
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 0.875rem;">
      <thead>
        <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
          <th style="width: 90px; padding: 0.5rem 0.75rem; text-align: left; font-size: 0.75rem; opacity: 0.75; font-weight: 600;">State</th>
          ${i.map(e=>t`<th style="padding: 0.5rem 0.75rem; text-align: left; font-size: 0.75rem; opacity: 0.75; font-weight: 600; overflow-wrap: break-word;">${x(e)}</th>`)}
        </tr>
      </thead>
      <tbody>
        ${n.map(e=>t`
            <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
              <td style="padding: 0.5rem 0.75rem; ${u.caption}">${e}</td>
              ${i.map(n=>{let r=o.get(e)?.get(n);return t`<td style="padding: 0.5rem 0.75rem;" title="${r?.flaky?`${r.reason??``}${r.reason?` — `:``}⚠ recovered from a flaky run — confirm this isn't a genuine intermittent defect before trusting as stable`:r?.reason??``}">${r?a(r.result):``}${r?.flaky?` ⚠`:``}</td>`})}
            </tr>
          `)}
      </tbody>
    </table>
  `},C={name:`Live Coverage Grid`,render:()=>{let e=[...s(i).entries()].sort(([e],[t])=>e.localeCompare(t));return t`
      <style>
        /* Prevents the scrollbar-appearing-on-expand horizontal reflow (~15px) */
        html { scrollbar-gutter: stable; }
      </style>
      <div style="${f}">

        <h1 style="${u.h1}">Live Coverage Grid</h1>
        <p style="${u.body} opacity: 0.85; max-width: ${d}; margin-bottom: 1.5rem;">Generated directly from <code>scripts/build-wcag-tables.mjs</code> — the same pipeline that feeds each built component's own "WCAG 2.2 AA Compliance" table. Expand a component to see its full state × category outcome grid; hover a cell for its FAIL/N/A/MANUAL/BUILD GAP reason.</p>

        ${e.map(([e,n])=>t`
            <details style="margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2); border-radius: 6px; padding: 0.75rem 1rem;">
              <summary style="cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 0.75rem;">
                <span style="${u.mono}">mms-${e}</span>
                <span style="${u.caption} opacity: 0.65; font-weight: 400;">${c(n)}</span>
              </summary>
              <div style="margin-top: 0.75rem;">
                ${S(n)}
              </div>
            </details>
          `)}

      </div>
    `}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="\${PAGE_STYLE}">

      <h1 style="\${t.h1}">Accessibility Testing Framework</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">Every mms component is validated against a mechanical coverage taxonomy — a fixed grid of category × state × cross-cutting-axis cells. Each cell resolves to exactly one of six fixed outcomes.</p>

      \${callout('#f59e0b', 'rgba(251,191,36,0.1)', 'Section 508 / ADA Title II', 'Maximus engagements are government-facing — federal engagements target Section 508, state engagements target ADA Title II. Both point to the same technical standard: WCAG. Compliance is enforced structurally, through this taxonomy and the token contracts in Foundations → Colors, not through one-off manual review.')}

      <h2 style="\${t.h2}">Why mechanical, not manual</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">Manual a11y review does not scale across a multi-platform, multi-brand design system. A taxonomy that is derived mechanically from each component's own source (its declared properties, its CSS selectors, its ARIA role) means coverage requirements travel with the component automatically as it changes, rather than living in a checklist that quietly drifts out of date.</p>

      <h2 style="\${t.h2}">STP Resolution</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 0.75rem;">This is a VPAT-style model, and which outcomes are even reachable is gated by the SC's <strong>Layer 1 classification</strong> (see Coverage Taxonomy):</p>
      <ul style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin: 0 0 0.75rem; padding-left: 1.25rem; line-height: 1.7;">
        <li>a <strong>Not-STP</strong> SC is out of scope for component-level testing entirely — it resolves straight to PAGE-LEVEL and never enters the rest of this flow</li>
        <li>an <strong>STP</strong> SC can resolve to PASS, FAIL, BUILD GAP, or N/A</li>
        <li>a <strong>Partial-STP</strong> SC can resolve to FAIL, BUILD GAP, or N/A exactly like STP — a mechanical failure is a mechanical failure regardless of classification. The only place STP and Partial-STP diverge is what happens once the mechanical check <em>passes</em>: STP goes straight to PASS, Partial-STP goes to MANUAL — a contingent pass pending a human's confirmation of the qualitative verdict, never a contingent fail</li>
      </ul>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.25rem;">No cell invents a seventh category, and no per-component judgment decides which of these applies outside this logic. The diagram below shows how a single SC walks through this logic to land on exactly one outcome:</p>

      \${flowDiagram()}

      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;"><strong>Not-STP exits before the mechanical trigger ever runs.</strong> The source-grep applicability check in step 2 only means something for STP/Partial-STP SCs, which genuinely vary by component and state. A Not-STP SC (page titles, consistent navigation, bypass blocks) is page-level by definition, for every component, always — so it's resolved and out of scope at step 1, not evaluated against a per-component/state trigger it was never subject to.</p>

      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;"><strong>What "Partial-STP" actually means:</strong> the applicability trigger is fully mechanical — identical mechanism to STP, same source-grep pattern — and so is the pass/fail check itself. Take <strong>1.1.1 Non-text Content</strong>: whether a non-decorative icon has an accessible name at all is mechanical (grep the render output for <code>aria-hidden</code> or a name string — steps 2–4 answer this definitively, and a missing name is a FAIL, full stop). What's not mechanical is whether a name that IS present is actually <em>meaningful</em> ("close" vs. "x") — a human has to read it, which is why step 5 stops at MANUAL rather than guessing PASS on its own. That's the literal sense in which it's "partial": mechanical on the trigger and on the failure case, human only on confirming the pass case — never excluded from the STP mechanism, just unable to self-certify a PASS.</p>

      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;"><strong>FAIL is never a bare status — it always ships with the specific fix.</strong> A border-color token that measures 2.1:1 against its background is a FAIL: axe can test contrast today, the test ran, it failed, and the remediation is exactly as concrete as the failure — "border color must meet 3:1, swap token <code>X</code>," cited to a ticket. Every FAIL carries that same kind of diagnosis; it is never reported as a plain red flag with no next step attached.</p>

      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;"><strong>BUILD GAP and FAIL are mutually exclusive by construction</strong>, not by convention — the capability check (step 3) resolves before pass/fail (step 4) is ever evaluated, so a cell can only reach FAIL after clearing the capability gate. The two outcomes exist because they answer different questions, not because one requires action and the other doesn't — both do. BUILD GAP is a gate <em>before</em> a test can run at all: the component hasn't shipped the surface a test needs yet (a missing <code>autocomplete</code> prop — nothing to point a test at). FAIL is what a completed test produces: the capability exists, the test ran, and it didn't pass. ("ACTION REQUIRED" was the original name for this outcome; it's renamed to BUILD GAP because FAIL requires action too — the old name implied FAIL didn't, and BUILD GAP names what this outcome actually is: a component-build gap.)</p>

      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX};"><strong>MANUAL is always a contingent PASS, never a contingent FAIL.</strong> By the time a Partial-STP SC reaches step 5, it has already cleared the same mechanical applicability, capability, and pass/fail gates as an STP SC — the mechanical check passed. What remains is a human confirming the qualitative verdict, recorded in a manual-review log per component/SC; once reviewed, the grid shows the attested result (e.g. "MANUAL — verified PASS, reviewed 2026-08-10") rather than losing the fact that a human, not the audit script, produced it. If the mechanical check had failed instead, the cell would already be FAIL at step 4 — a bigger problem than any manual review, and one that never reaches the MANUAL branch at all.</p>

      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX};">See <strong>Testing Methodology</strong> for how the grid is produced, and <strong>Coverage Taxonomy</strong> for the full three-layer reference — SC classification, category × state, and outcome.</p>

    </div>
  \`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Testing Methodology',
  render: () => html\`
    <div style="\${PAGE_STYLE}">

      <h1 style="\${t.h1}">Testing Methodology</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">The coverage grid is not hand-maintained. It is generated by correlating three independent sources of truth, so the requirements a component must satisfy are derived from what the component actually declares — not from a document someone forgot to update.</p>

      <h2 style="\${t.h2}">Three inputs, one grid</h2>
      <div style="display: flex; gap: 0; margin-bottom: 2rem; border-radius: 8px; overflow: hidden; border: 1px solid rgba(128,128,128,0.2);">
        <div style="background: #f5f3ff; padding: 14px 18px; flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: #1a1a2e; margin-bottom: 6px;">1. Component source</div>
          <div style="font-size: 0.875rem; color: #6b7280; margin-bottom: 8px;">what states/variants exist</div>
          <div style="font-size: 0.875rem; color: #374151; line-height: 1.6;">Declared <code>@property()</code> fields determine which states apply (e.g. a <code>disabled</code> property means the Disabled row is required). CSS selectors determine Hover/Focus-visible applicability. The component's own color/variant union determines how many times Color/Contrast multiplies.</div>
        </div>
        <div style="background: #eff6ff; padding: 14px 18px; flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: #1a1a2e; margin-bottom: 6px;">2. Test source</div>
          <div style="font-size: 0.875rem; color: #6b7280; margin-bottom: 8px;">what's tagged and generated</div>
          <div style="font-size: 0.875rem; color: #374151; line-height: 1.6;"><code>describeA11yTarget(target, label, fn)</code> tags every describe block's title with <code>[a11y:&lt;target&gt;]</code>. <code>forEachColorAxis(variants, fn)</code> cross-multiplies every declared color variant against both color modes, generating titles like <code>primary / dark</code>.</div>
        </div>
        <div style="background: #f0fdf4; padding: 14px 18px; flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: #1a1a2e; margin-bottom: 6px;">3. Real results</div>
          <div style="font-size: 0.875rem; color: #6b7280; margin-bottom: 8px;">what actually ran</div>
          <div style="font-size: 0.875rem; color: #374151; line-height: 1.6;">Playwright's JSON reporter output (<code>test-results/playwright/results.json</code>) — real pass/fail/skip per test, correlated back to a cell by matching its <code>[a11y:&lt;target&gt;]</code> tag and generated variant/mode title.</div>
        </div>
      </div>

      <h2 style="\${t.h2}">How a cell is verified</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Category</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Verified by</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Color/Contrast</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">axe-core's <code>color-contrast</code> rule, run against the live rendered component; error states additionally assert a non-color indicator alongside color</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Semantic/ARIA</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">DOM-inspection assertions inside the state's own test block (role, name, live-region)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Keyboard/Operability</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">keyboard simulation (Tab, Shift+Tab, Enter, Escape) plus focus assertions</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Target Size/Touch Area</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;"><code>expectMinimumTargetSize</code> — rendered bounding-box measurement</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Responsive/Reflow</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">Playwright viewport-resize to 320px, 200% zoom, and WCAG text-spacing stylesheet injection — each asserting no content loss/horizontal scroll/clipping</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Timing & Motion</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">mechanical timer/<code>@keyframes</code> trigger detection + pause/extend-control assertion; actual flash-rate is MANUAL — frame-capture tooling not yet built</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Predictability</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">mechanical: a focus or input/change handler contains a navigation/submit/window-open side effect</td>
          </tr>
        </tbody>
      </table>

      <h2 style="\${t.h2}">test.fixme() discipline</h2>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">A known, ticketed defect is marked <code>test.fixme()</code> in the test file, citing the ticket. The audit script treats a skipped/fixme'd test exactly like a failure — it never drops out of the grid and never counts as a pass. This is the mechanism that keeps a real defect from silently disappearing from coverage while a fix is pending.</p>

      <pre style="margin: 0 0 2rem; padding: 1rem 1.25rem; background: rgba(128,128,128,0.06); border-radius: 6px; \${t.monoSm} line-height: 1.75; overflow-x: auto;">describeA11yTarget('hover', 'Hover state', () => {
  forEachColorAxis(['primary', 'secondary'], ({ variant, mode }) => {
    test(\\\`\\\${variant} / \\\${mode}\\\`, async ({ page }) => {
      // render component in this variant/mode, trigger :hover, run axe scan
    });
  });

  test.fixme('DS-147: primary/dark fails 1.4.3 text contrast', async () => {
    // cited defect — renders as FAIL, not skipped-invisible
  });
});</pre>

      <h2 style="\${t.h2}">Running it</h2>
      <p style="\${t.body} opacity: 0.65; max-width: \${PROSE_MAX}; margin-bottom: 0.75rem;"><code>scripts/audit-a11y-coverage.mjs</code> reads all three inputs and prints one grid per component, exiting non-zero if any required cell is FAIL or missing. Wired as <code>npm run audit:a11y-coverage</code> — runs in CI and is a required gate in <code>/test-component</code> before any <code>.a11y.ts</code> file is committed.</p>

    </div>
  \`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Coverage Taxonomy',
  render: () => html\`
    <div style="\${PAGE_STYLE}">

      <h1 style="\${t.h1}">Coverage Taxonomy</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">A fixed lens every component is tested through, in three layers — not a document that gets edited each time a new component is built. <strong>Layer 1</strong> classifies every WCAG 2.2 A/AA success criterion once, forever, by whether our framework can resolve it mechanically. <strong>Layer 2</strong> is the operational grid — category × state, derived per component by inspecting that component's own source. <strong>Layer 3</strong> is the six-outcome model every cell resolves to (see Overview). Only Layer 2's <em>instances</em> change as components ship; Layers 1 and 3 do not.</p>

      <h2 style="\${t.h2}">Layer 1 — SC Classification</h2>
      <p style="\${t.body} opacity: 0.65; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">Every WCAG 2.2 A/AA success criterion, classified by whether our framework — source-grep for applicability, plus Playwright interaction/measurement or axe for the verdict — can resolve it without human judgment. This is a property of the SC itself, derived from what WCAG requires, not from which mms components happen to exist today.</p>
      <div style="display: flex; gap: 0; margin-bottom: 1.5rem; border-radius: 8px; overflow: hidden; border: 1px solid rgba(128,128,128,0.2);">
        <div style="background: #f0fdf4; padding: 12px 16px; flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: #166534; margin-bottom: 4px;">STP</div>
          <div style="font-size: 0.875rem; color: #374151; line-height: 1.55;">Structurally Testable Programmatically — both applicability and pass/fail are mechanically determined, including via Playwright interaction/measurement or axe, not only static source grep.</div>
        </div>
        <div style="background: #fff7ed; padding: 12px 16px; flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: #9a3412; margin-bottom: 4px;">Partial-STP</div>
          <div style="font-size: 0.875rem; color: #374151; line-height: 1.55;">Applicability triggers mechanically, but the verdict itself requires human judgment (visual/content quality) the framework cannot render.</div>
        </div>
        <div style="background: #f9fafb; padding: 12px 16px; flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: #374151; margin-bottom: 4px;">Not-STP</div>
          <div style="font-size: 0.875rem; color: #374151; line-height: 1.55;">Neither applicability nor verdict is mechanical — owned by page template, content-authoring, or multi-page flow, never an individual component.</div>
        </div>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">SC</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Level</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Class</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Verified by / why</th>
          </tr>
        </thead>
        <tbody>
          \${[['group', 'Perceivable'], ['1.1.1 Non-text Content', 'A', 'Partial-STP', ['every non-decorative icon/img has aria-hidden or an accessible name', 'whether the name text is meaningful']], ['1.2.1 Audio-only and Video-only', 'A', 'Partial-STP', ['<audio>/<video> present', 'whether a complete text transcript (audio-only) or text/audio alternative (video-only) is provided']], ['1.2.2 Captions (Prerecorded)', 'A', 'Partial-STP', ['<video> present', 'whether captions are provided and accurate/synchronized to dialogue and sound']], ['1.2.3 Audio Description or Media Alternative', 'A', 'Partial-STP', ['<video> present', 'whether an audio-description track or full text alternative conveying visual-only information is provided']], ['1.2.4 Captions (Live)', 'AA', 'Partial-STP', ['live media stream present', 'whether real-time captions are provided and accurate']], ['1.2.5 Audio Description (Prerecorded)', 'AA', 'Partial-STP', ['<video> present', 'whether extended/standard audio description is provided for visual information not carried in the main audio track']], ['1.3.1 Info and Relationships', 'A', 'STP', 'DOM-inspection assertion — existing Semantic/ARIA category'], ['1.3.2 Meaningful Sequence', 'A', 'STP', 'DOM order vs. CSS visual order, mechanically assertable'], ['1.3.3 Sensory Characteristics', 'A', 'Not-STP', 'content-authoring judgment — no structural signal to grep for'], ['1.3.4 Orientation', 'AA', 'Not-STP', 'page/viewport-level, never an individual component'], ['1.3.5 Identify Input Purpose', 'AA', 'STP', 'trigger: component renders a native text-entry element; BUILD GAP until an autocomplete passthrough prop exists, then mechanically verified'], ['1.4.1 Use of Color', 'A', 'STP', 'existing Color/Contrast sub-check'], ['1.4.2 Audio Control', 'A', 'Partial-STP', ['autoplaying audio/video longer than 3 seconds', 'whether the exposed stop/pause/volume control is actually effective and independent of overall system volume']], ['1.4.3 Contrast (Minimum)', 'AA', 'STP', "axe's color-contrast rule"], ['1.4.4 Resize Text', 'AA', 'STP', 'Playwright zoom-to-200% + content-loss assertion'], ['1.4.5 Images of Text', 'AA', 'STP', 'mechanical: confirms no component renders text via canvas/image'], ['1.4.10 Reflow', 'AA', 'STP', 'Playwright viewport-to-320px + no-horizontal-scroll assertion'], ['1.4.11 Non-text Contrast', 'AA', 'STP', 'axe, existing'], ['1.4.12 Text Spacing', 'AA', 'STP', 'Playwright WCAG text-spacing stylesheet injection + no-clipping assertion'], ['1.4.13 Content on Hover or Focus', 'AA', 'STP', 'trigger: a :hover/:focus rule reveals content on a sibling element; verdict: Playwright hover-persistence + Escape-dismiss assertion'], ['group', 'Operable'], ['2.1.1 Keyboard', 'A', 'STP', 'existing'], ['2.1.2 No Keyboard Trap', 'A', 'STP', 'existing (dialog-focus-containment)'], ['2.1.4 Character Key Shortcuts', 'A', 'Not-STP', 'mechanically triggerable single-key-shortcut detection, applied whenever a component implements one'], ['2.2.1 Timing Adjustable', 'A', 'STP', "trigger: a session/auto-advance/auto-dismiss timer construct; verdict: pause/extend control assertion"], ['2.2.2 Pause, Stop, Hide', 'A', 'STP', 'same trigger/component as 2.2.1'], ['2.3.1 Three Flashes', 'A', 'Partial-STP', ['@keyframes/infinite animation present', 'actual flash rate assessed against the 3-flashes-per-second threshold (frame-capture tooling not yet built)']], ['2.4.1 Bypass Blocks', 'A', 'Not-STP', 'page/nav-shell, never an individual component'], ['2.4.2 Page Titled', 'A', 'Not-STP', 'page-level'], ['2.4.3 Focus Order', 'A', 'STP', 'existing'], ['2.4.4 Link Purpose (In Context)', 'A', 'Partial-STP', ['accessible name is non-empty and not a denylisted generic phrase', 'contextual clarity']], ['2.4.5 Multiple Ways', 'AA', 'Not-STP', 'page-level'], ['2.4.6 Headings and Labels', 'AA', 'Partial-STP', ['label/heading text non-empty (form labels fold into the existing label check)', 'descriptiveness — page headings are page-level']], ['2.4.7 Focus Visible', 'AA', 'STP', 'existing'], ['2.4.11 Focus Not Obscured (Minimum)', 'AA', 'STP', 'Playwright bounding-box: focused element not fully covered by an overlapping sticky/fixed sibling'], ['2.5.1 Pointer Gestures', 'A', 'Not-STP', 'mechanically triggerable gesture-based-interaction detection, applied whenever a component implements one'], ['2.5.2 Pointer Cancellation', 'A', 'STP', 'mechanical: action fires on click/pointerup, not pointerdown/mousedown'], ['2.5.3 Label in Name', 'A', 'STP', 'existing Semantic/ARIA sub-check'], ['2.5.4 Motion Actuation', 'A', 'Not-STP', 'applies whenever a component implements device-motion-triggered functionality'], ['2.5.7 Dragging Movements', 'AA', 'Not-STP', 'mechanically triggerable drag-interaction detection, applied whenever a component implements one'], ['2.5.8 Target Size (Minimum)', 'AA', 'STP', 'existing'], ['group', 'Understandable'], ['3.1.1 Language of Page', 'A', 'Not-STP', '<html lang>, page-level'], ['3.1.2 Language of Parts', 'AA', 'Partial-STP', ['component passes through a lang attribute', 'whether a given usage needs it']], ['3.2.1 On Focus', 'A', 'STP', 'mechanical: a focus handler contains a navigation/submit/window-open side effect'], ['3.2.2 On Input', 'A', 'STP', 'same, input/change handler'], ['3.2.3 Consistent Navigation', 'AA', 'Not-STP', 'page-level'], ['3.2.4 Consistent Identification', 'AA', 'Not-STP', 'inherently satisfied by a single shared component library — not tested per-component'], ['3.2.6 Consistent Help', 'A', 'Not-STP', 'page-level'], ['3.3.1 Error Identification', 'A', 'STP', 'folds into the existing error-state check'], ['3.3.2 Labels or Instructions', 'A', 'STP', 'existing'], ['3.3.3 Error Suggestion', 'AA', 'Not-STP', "content-authoring judgment — the component renders whatever errorText string it's given"], ['3.3.4 Error Prevention (Legal, Financial, Data)', 'AA', 'Not-STP', 'page/flow-level'], ['3.3.7 Redundant Entry', 'A', 'Not-STP', 'page/flow-level'], ['3.3.8 Accessible Authentication (Minimum)', 'AA', 'Not-STP', 'page/flow-level — applies to auth flows, not individual field components'], ['group', 'Robust'], ['4.1.2 Name, Role, Value', 'A', 'STP', 'existing'], ['4.1.3 Status Messages', 'AA', 'STP', 'existing']].map(row => row[0] === 'group' ? html\`
                <tr>
                  <td colspan="4" style="padding: 0.65rem 0.75rem 0.25rem; \${t.caption} font-weight: 700; opacity: 0.6;">\${row[1]}</td>
                </tr>
              \` : html\`
                <tr style="border-bottom: 1px solid rgba(128,128,128,0.12); \${row[2] === 'Not-STP' ? 'background: rgba(128,128,128,0.035);' : ''}">
                  <td style="padding: 0.4rem 0.75rem; \${t.monoSm} opacity: \${row[2] === 'Not-STP' ? '0.75' : '0.85'}; white-space: nowrap; vertical-align: top;">\${row[0]}</td>
                  <td style="padding: 0.4rem 0.75rem; \${t.caption} opacity: 0.65; vertical-align: top;">\${row[1]}</td>
                  <td style="padding: 0.4rem 0.75rem; \${t.caption} opacity: \${row[2] === 'Not-STP' ? '0.75' : '1'}; vertical-align: top; white-space: nowrap;">\${row[2]}</td>
                  <td style="padding: 0.4rem 0.75rem; \${t.caption} opacity: 0.75; vertical-align: top;">\${Array.isArray(row[3]) ? html\`<div style="margin-bottom: 0.25rem;"><span style="opacity: 0.65;">STP-trigger:</span> \${row[3][0]}</div><div><span style="opacity: 0.65;">Manual:</span> \${row[3][1]}</div>\` : row[3]}</td>
                </tr>
              \`)}
        </tbody>
      </table>

      <h2 style="\${t.h2}">Layer 2 — Category axis (kind of requirement)</h2>
      <p style="\${t.body} opacity: 0.65; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">These categories are fixed and don't change per component. Responsive/Reflow and Timing & Motion have been part of this table from the start.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Category</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">WCAG SC</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Verified by</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Color/Contrast</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} opacity: 0.75;">1.4.1, 1.4.3, 1.4.11 — plus sub-check below</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">axe color-contrast rule</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Semantic/ARIA</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} opacity: 0.75;">1.3.1, 4.1.2 — plus sub-checks below</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">DOM-inspection assertion inside the state cell</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Keyboard/Operability</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} opacity: 0.75;">2.1.1, 2.4.3, 2.4.7 — plus sub-checks below</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">keyboard/pointer simulation + focus/bounding-box assertions</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Target Size/Touch Area</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} opacity: 0.75;">2.5.8, 2.5.5</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">rendered bounding-box measurement</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Responsive/Reflow</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} opacity: 0.75;">1.4.4, 1.4.10, 1.4.12</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">Playwright viewport-resize/zoom/stylesheet-injection + overflow assertion</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Timing & Motion</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} opacity: 0.75;">2.2.1, 2.2.2 (STP), 2.3.1 (Partial-STP)</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">mechanical timer/animation-construct trigger + pause-control assertion; flash-rate itself is MANUAL</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Predictability</td>
            <td style="padding: 0.5rem 0.75rem; \${t.monoSm} opacity: 0.75;">3.2.1, 3.2.2</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">mechanical: a focus or input/change handler contains a navigation/submit/window-open side effect</td>
          </tr>
        </tbody>
      </table>

      <h3 style="\${t.h3}">Color/Contrast sub-checks</h3>
      <p style="\${t.body} opacity: 0.65; max-width: \${PROSE_MAX}; margin-bottom: 0.5rem;">Folds into the existing per-state assertion for the state that triggers it — not a new grid cell.</p>
      <ul style="\${t.caption} opacity: 0.8; max-width: \${PROSE_MAX}; margin: 0 0 1.5rem; padding-left: 1.25rem; line-height: 1.7;">
        <li><strong>1.4.1 Use of Color</strong> — error state renders a non-color indicator alongside color. REQUIRED iff the component has an error/errorText property — rides the Error-state row.</li>
      </ul>

      <h3 style="\${t.h3}">Semantic/ARIA sub-checks</h3>
      <p style="\${t.body} opacity: 0.65; max-width: \${PROSE_MAX}; margin-bottom: 0.5rem;">Each folds into the existing per-state assertion for the state that triggers it — not a new grid cell.</p>
      <ul style="\${t.caption} opacity: 0.8; max-width: \${PROSE_MAX}; margin: 0 0 1.5rem; padding-left: 1.25rem; line-height: 1.7;">
        <li><strong>4.1.3 Status Messages</strong> — error row carries <code>role="alert"</code>; REQUIRED iff the component has an error/errorText property — rides the Error-state row.</li>
        <li><strong>2.5.3 Label in Name</strong> — accessible name must contain visible label text. REQUIRED iff the component has a label property and renders aria-label/aria-labelledby from it.</li>
        <li><strong>1.1.1 Non-text Content</strong> — REQUIRED iff the component renders an icon/img; asserts aria-hidden (decorative) or a real accessible name (meaningful).</li>
        <li><strong>1.3.2 Meaningful Sequence</strong> — REQUIRED iff the component's CSS reorders content visually (order, row-reverse/column-reverse); asserts DOM order still matches reading order.</li>
        <li><strong>2.4.4 Link Purpose (In Context)</strong> — REQUIRED iff the component renders an &lt;a&gt;/role="link"; asserts the accessible name is non-empty and not on a denylist of generic phrases.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard/Operability sub-checks</h3>
      <p style="\${t.body} opacity: 0.65; max-width: \${PROSE_MAX}; margin-bottom: 0.5rem;">Applicability keys off the component's declared ARIA role (WAI-ARIA APG pattern catalog), not off which describe blocks already exist. <code>role="dialog"</code> pulls in the full Dialog pattern, including 2.1.2 focus containment.</p>
      <ul style="\${t.caption} opacity: 0.8; max-width: \${PROSE_MAX}; margin: 0 0 1.5rem; padding-left: 1.25rem; line-height: 1.7;">
        <li><strong>1.4.13 Content on Hover or Focus</strong> — REQUIRED iff a :hover/:focus rule reveals content on a sibling element that isn't native browser chrome; asserts hover-persistence and Escape-dismiss.</li>
        <li><strong>2.4.11 Focus Not Obscured (Minimum)</strong> — REQUIRED iff the component (or its page context) has a sticky/fixed sibling that can overlap it.</li>
        <li><strong>2.5.2 Pointer Cancellation</strong> — REQUIRED iff the component has a click/activation handler; asserts it fires on click/pointerup, never pointerdown/mousedown.</li>
      </ul>

      <h2 style="\${t.h2}">State axis</h2>
      <p style="\${t.body} opacity: 0.65; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">What condition the component is put in. Applicability is derived mechanically by inspecting the component's own source — never asserted by hand.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">State</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Required if</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Default</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">always</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Disabled / Readonly / Error / Required</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">matching <code>@property()</code> declared on the component</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Hover</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">a <code>:hover</code> selector exists in the component's own CSS</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Focus-visible</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">a <code>:focus-visible</code>/<code>:focus</code> selector exists, the component renders a natively focusable element, or a slotted child does</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Dialog focus containment</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">component declares <code>role="dialog"</code> — pulls in the full WAI-ARIA Dialog pattern (Tab/Shift+Tab cycling, no leak to background, Escape exit)</td>
          </tr>
        </tbody>
      </table>

      <h2 style="\${t.h2}">Category × state applicability</h2>
      <p style="\${t.body} opacity: 0.65; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">A fixed WCAG/spec fact, not a per-component judgment call. A <code>test.fixme()</code>'d cell still renders as a hard FAIL with its ticket citation — never invisible, never a pass. Cross-checked cell-by-cell against the real audit script's <code>CATEGORY_APPLICABILITY</code> by <code>Accessibility.applicability.test.ts</code> — this table cannot drift from the mechanical audit without failing that test.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">State</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; \${t.caption} opacity: 0.75; font-weight: 600;">Color</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; \${t.caption} opacity: 0.75; font-weight: 600;">ARIA</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; \${t.caption} opacity: 0.75; font-weight: 600;">Keyboard</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; \${t.caption} opacity: 0.75; font-weight: 600;">Target Size</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; \${t.caption} opacity: 0.75; font-weight: 600;">Reflow*</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; \${t.caption} opacity: 0.75; font-weight: 600;">Timing*</th>
            <th style="padding: 0.5rem 0.75rem; text-align: center; \${t.caption} opacity: 0.75; font-weight: 600;">Predict.*</th>
          </tr>
        </thead>
        <tbody>
          \${CATEGORY_STATE_APPLICABILITY.map(([state, color, aria, keyboard, size, reflow, timing, predict]) => html\`
              <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
                <td style="padding: 0.5rem 0.75rem; \${t.caption}">\${state}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">\${color ? '✅' : '—'}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">\${aria ? '✅' : '—'}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">\${keyboard ? '✅' : '—'}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">\${size ? '✅' : '—'}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">\${reflow ? '✅' : '—'}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">\${timing ? '✅' : '—'}</td>
                <td style="padding: 0.5rem 0.75rem; text-align: center;">\${predict ? '✅' : '—'}</td>
              </tr>
            \`)}
        </tbody>
      </table>
      <p style="\${t.caption} opacity: 0.6; max-width: \${PROSE_MAX}; margin: -1.25rem 0 2rem;">* Reflow only re-runs on Error (added error text/icon is the one state that can change layout); Timing & Motion is a component-level capability check, so Default only; Predictability covers On-Input (rides Default, wherever a change handler exists) and On-Focus (rides Focus-visible) — neither varies by any other state.</p>

      <h2 style="\${t.h2}">Cross-cutting axes</h2>
      <p style="\${t.body} opacity: 0.65; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">These multiply applicable states — they are not additional peer rows in the grid.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06); border-bottom: 2px solid rgba(128,128,128,0.15);">
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Axis</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Values</th>
            <th style="padding: 0.5rem 0.75rem; text-align: left; \${t.caption} opacity: 0.75; font-weight: 600;">Multiplies against</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Color mode</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">light, dark</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">Color/Contrast only — always both, no opt-out</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Component variant</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">every value of the component's own color-relevant property</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">Color/Contrast (all variants) and Target Size (size-affecting variants only)</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem 0.75rem; \${t.caption}">Density</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">default, compact</td>
            <td style="padding: 0.5rem 0.75rem; \${t.caption} opacity: 0.75;">Target Size only, iff the component has a <code>[data-density]</code> selector</td>
          </tr>
        </tbody>
      </table>
      <p style="\${t.caption} opacity: 0.65; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">Responsive/Reflow, Timing & Motion, and Predictability are invariant to all three axes above — none of them branch on color mode, component variant, or density, so each is tested once (per its own applicable states) rather than multiplied.</p>

      \${callout('#7c3aed', '#f5f3ff', 'Brand palette is never a multiplier', 'For components with a brand-relevant color property (e.g. <code>colorScheme</code>, <code>linkColor</code>), tests run against exactly one canonical palette (Maximus-Primary) × both color modes — brand palette is a token-value swap, not a change to markup/ARIA/CSS structure, so portability to every other client brand sheet is guaranteed structurally instead, via the minimum-contrast contract every Layer 2 token sheet must satisfy (see Foundations → Colors). Components with no such property — Text Field, Select, Text Area — don\\'t consume brand tokens at all: they render from Layer 1 structural/neutral tokens only, so brand palette isn\\'t a variable to test in the first place. Only color mode affects their rendering.')}

      <h3 style="\${t.h3}">Permanent — page/document-level, regardless of what gets built</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
        <tbody>
          \${['1.3.4 Orientation', '2.4.1 Bypass Blocks, 2.4.2 Page Titled, 2.4.5 Multiple Ways', '3.1.1 Language of Page', '3.2.3 Consistent Navigation, 3.2.4 Consistent Identification, 3.2.6 Consistent Help', '3.3.4 Error Prevention (Legal/Financial/Data), 3.3.7 Redundant Entry, 3.3.8 Accessible Authentication'].map(sc => html\`
              <tr style="border-bottom: 1px solid rgba(128,128,128,0.12);">
                <td style="padding: 0.4rem 0.75rem; \${t.monoSm} opacity: 0.75;">\${sc}</td>
              </tr>
            \`)}
        </tbody>
      </table>

      <p style="\${t.body} opacity: 0.65; max-width: \${PROSE_MAX};"><strong>Content-authoring judgment, not a structural signal at all</strong> (Not-STP, no mechanical trigger ever applies): 1.3.3 Sensory Characteristics, 2.4.6 Headings and Labels (page-level portion), 3.3.3 Error Suggestion.</p>

    </div>
  \`
}`,...y.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Live Coverage Grid',
  render: () => {
    const byComponent = groupByComponent(fullGrid);
    const sortedEntries = [...byComponent.entries()].sort(([a], [b]) => a.localeCompare(b));
    return html\`
      <style>
        /* Prevents the scrollbar-appearing-on-expand horizontal reflow (~15px) */
        html { scrollbar-gutter: stable; }
      </style>
      <div style="\${PAGE_STYLE}">

        <h1 style="\${t.h1}">Live Coverage Grid</h1>
        <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">Generated directly from <code>scripts/build-wcag-tables.mjs</code> — the same pipeline that feeds each built component's own "WCAG 2.2 AA Compliance" table. Expand a component to see its full state × category outcome grid; hover a cell for its FAIL/N/A/MANUAL/BUILD GAP reason.</p>

        \${sortedEntries.map(([component, cells]) => html\`
            <details style="margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2); border-radius: 6px; padding: 0.75rem 1rem;">
              <summary style="cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 0.75rem;">
                <span style="\${t.mono}">mms-\${component}</span>
                <span style="\${t.caption} opacity: 0.65; font-weight: 400;">\${summaryBadge(cells)}</span>
              </summary>
              <div style="margin-top: 0.75rem;">
                \${componentGridTable(cells)}
              </div>
            </details>
          \`)}

      </div>
    \`;
  }
}`,...C.parameters?.docs?.source}}},w=[`CATEGORY_STATE_APPLICABILITY`,`Overview`,`TestingMethodology`,`CoverageTaxonomy`,`LiveCoverageGrid`]}))();export{m as CATEGORY_STATE_APPLICABILITY,y as CoverageTaxonomy,C as LiveCoverageGrid,_ as Overview,v as TestingMethodology,w as __namedExportsOrder,l as default};