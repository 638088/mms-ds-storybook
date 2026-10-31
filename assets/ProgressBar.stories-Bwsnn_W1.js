import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-B0BZwaT1.js";import{E as s,S as c,T as l,g as u,n as d,r as f,w as p}from"./mms-icon.component-DFVI3nJi.js";import{t as m}from"./mms-card.component-Ae9XIj4r.js";import{n as h,r as g}from"./wcag-coverage-DNhlI7v1.js";import{a as _,c as v,i as y,l as b,n as x,o as S,r as C,u as w}from"./doc-styles-BoEZknkJ.js";import{a as T,n as E}from"./a11y-outcome-o7pti1Vx.js";var D,O,k=e((()=>{o(),s(),u(),f(),D={fromAttribute:e=>e!==`false`,toAttribute:e=>e?null:`false`},O=class extends i{constructor(...e){super(...e),this.label=``,this.showLabel=!0,this.size=`md`,this.progress=0,this.valuePlacement=`label-row`,this.showCompleteText=!1,this.colorScheme=`primary`}static{this.styles=[l,r`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm1);
      width: 100%;
      font-family: var(--type-body-md-family);
      font-size: var(--type-body-md-size);
      line-height: var(--type-body-md-line-height);
      font-weight: var(--type-body-md-weight);
      color: var(--color-text-default);

      --_solid: var(--color-primary-9);
      /* Base matches the 'md' default, so the track is the right thickness even
         in the tick before 'size' reflects to an attribute. */
      --_track-height: 12px;
    }

    :host([size='sm']) {
      --_track-height: 8px;
    }

    :host([size='md']) {
      --_track-height: 12px;
    }

    :host([size='lg']) {
      --_track-height: 16px;
    }

    :host([color-scheme='secondary']) {
      --_solid: var(--color-secondary-9);
    }

    :host([color-scheme='accent']) {
      --_solid: var(--color-accent-9);
    }

    :host([color-scheme='onyx']) {
      --_solid: var(--color-onyx-9);
    }

    .label-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: var(--spacing-sm1);
    }

    .value {
      flex-shrink: 0;
    }

    .track-container {
      position: relative;
      width: 100%;
      overflow: hidden;
      border-radius: var(--radius-full);
      background: var(--color-surface-sunken);
      height: var(--_track-height);
    }

    .bar {
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      height: 100%;
      background: var(--_solid);
      border-radius: var(--radius-full);
      transition: width var(--motion-duration-moderate) var(--motion-easing-standard);
    }

    @media (prefers-reduced-motion: reduce) {
      .bar {
        transition-duration: var(--motion-duration-instant);
      }
    }

    .bar-row {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm2);
      /* Vertically centering track against the taller text line-box grows this
         row upward past the track's own height — pulling it back up by that
         same excess keeps the label-to-track gap flush with label-row mode
         while leaving track/text centered relative to each other untouched. */
      margin-top: calc((var(--_track-height) - (var(--type-body-md-line-height) * var(--type-body-md-size))) / 2);
    }

    .bar-row .track-container {
      flex: 1;
    }

    .value-inline {
      flex-shrink: 0;
      white-space: nowrap;
      position: relative;
      top: -1px;
    }
  `]}get clampedProgress(){return Math.min(100,Math.max(0,this.progress))}get valueText(){let e=this.clampedProgress;return this.showCompleteText?`${e}% complete`:`${e}%`}render(){let e=this.clampedProgress,t=this.valueText,r=this.valuePlacement===`inline`,i=a`
      <div
        class="track-container"
        role="progressbar"
        aria-valuenow=${e}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuetext=${t}
        aria-labelledby=${this.showLabel&&this.label?`label`:n}
        aria-label=${!this.showLabel&&this.label?this.label:n}
      >
        <div class="bar" style="width: ${e}%"></div>
      </div>
    `;return r?a`
        ${this.showLabel?a`<div class="label-row"><span class="label" id="label">${this.label}</span></div>`:n}
        <div class="bar-row">
          ${i}
          <span class="value-inline">${t}</span>
        </div>
      `:a`
      ${this.showLabel?a`
            <div class="label-row">
              <span class="label" id="label">${this.label}</span>
              <span class="value">${t}</span>
            </div>
          `:n}
      ${i}
    `}},d([c({type:String})],O.prototype,`label`,void 0),d([c({reflect:!0,attribute:`show-label`,converter:D})],O.prototype,`showLabel`,void 0),d([c({type:String,reflect:!0})],O.prototype,`size`,void 0),d([c({type:Number,reflect:!0})],O.prototype,`progress`,void 0),d([c({type:String,reflect:!0,attribute:`value-placement`})],O.prototype,`valuePlacement`,void 0),d([c({type:Boolean,reflect:!0,attribute:`show-complete-text`})],O.prototype,`showCompleteText`,void 0),d([c({type:String,reflect:!0,attribute:`color-scheme`})],O.prototype,`colorScheme`,void 0),O=d([p(`mms-progress-bar`)],O)})),A=t({Overview:()=>M,PlaygroundStory:()=>N,__namedExportsOrder:()=>P,default:()=>j}),j,M,N,P,F=e((()=>{o(),k(),m(),h(),E(),v(),j={title:`Status Display/Progress Bar`,tags:[`!autodocs`]},M={name:`Overview`,render:()=>a`
    <div data-theme=${C} data-mode=${S()} style=${x}>

      <h1 style="${w.h1}">Progress Bar</h1>
      <p style="${w.body} ${_.muted} max-width: ${y}; margin-bottom: ${b.subsection};">
        Tracks how far the user has gotten through something they are working through — question 6 of 10
        in a questionnaire, step 3 of 5 in an application. The value moves when the user does something,
        and it reports how much is done, not how much is left. For work the machine is doing on its own —
        an upload, a save, a background sync — use <code style="${w.monoSm}">mms-loading-bar</code>.
      </p>

      <hr style="${_.divider}" />

      <h2 style="${w.h2}">Basic usage</h2>
      <div style="max-width: 360px; margin-bottom: ${b.subsection};">
        <mms-progress-bar label="Application progress" progress="65"></mms-progress-bar>
      </div>

      <hr style="${_.divider}" />

      <h2 style="${w.h2}">Value placement</h2>
      <p style="${w.bodySm} ${_.muted} max-width: ${y}; margin-bottom: ${b.subsection};">
        <code style="${w.monoSm}">value-placement</code> controls where the percentage renders:
        <code style="${w.monoSm}">label-row</code> (default, above the track, opposite the label) or
        <code style="${w.monoSm}">inline</code> (next to the track, useful in tight vertical spaces).
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: ${b.content}; margin-bottom: ${b.subsection};">
        <div style="${_.panel}">
          <h3 style="${w.h3}">label-row (default)</h3>
          <mms-progress-bar label="Upload" value-placement="label-row" progress="40"></mms-progress-bar>
        </div>
        <div style="${_.panel}">
          <h3 style="${w.h3}">inline</h3>
          <mms-progress-bar label="Upload" value-placement="inline" progress="40"></mms-progress-bar>
        </div>
      </div>

      <hr style="${_.divider}" />

      <h2 style="${w.h2}">Size</h2>
      <p style="${w.bodySm} ${_.muted} max-width: ${y}; margin-bottom: ${b.subsection};">
        <code style="${w.monoSm}">size</code> sets track thickness: <code style="${w.monoSm}">sm</code>
        (8px), <code style="${w.monoSm}">md</code> (12px, default), or <code style="${w.monoSm}">lg</code> (16px).
      </p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: ${b.content}; margin-bottom: ${b.subsection};">
        <div style="${_.panel}">
          <h3 style="${w.h3}">sm</h3>
          <mms-progress-bar label="Progress" size="sm" progress="55"></mms-progress-bar>
        </div>
        <div style="${_.panel}">
          <h3 style="${w.h3}">md (default)</h3>
          <mms-progress-bar label="Progress" size="md" progress="55"></mms-progress-bar>
        </div>
        <div style="${_.panel}">
          <h3 style="${w.h3}">lg</h3>
          <mms-progress-bar label="Progress" size="lg" progress="55"></mms-progress-bar>
        </div>
      </div>

      <hr style="${_.divider}" />

      <h2 style="${w.h2}">Color scheme</h2>
      <p style="${w.bodySm} ${_.muted} max-width: ${y}; margin-bottom: ${b.subsection};">
        <code style="${w.monoSm}">color-scheme</code> sets the fill color: <code style="${w.monoSm}">primary</code>
        (default), <code style="${w.monoSm}">secondary</code>, <code style="${w.monoSm}">accent</code>, or
        <code style="${w.monoSm}">onyx</code>. Unlike <code style="${w.monoSm}">mms-tag</code>/
        <code style="${w.monoSm}">mms-button</code>, there is no Tier restriction and no "error" option —
        the fill never carries overlaid text, so every palette tier clears the 3:1 non-text UI contrast
        floor, and error has no solid step-9 token to fill with (see the component's
        <code style="${w.monoSm}">ProgressBarColorScheme</code> type doc).
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: ${b.content}; margin-bottom: ${b.subsection};">
        <div style="${_.panel}">
          <h3 style="${w.h3}">primary (default)</h3>
          <mms-progress-bar label="Progress" color-scheme="primary" progress="50"></mms-progress-bar>
        </div>
        <div style="${_.panel}">
          <h3 style="${w.h3}">secondary</h3>
          <mms-progress-bar label="Progress" color-scheme="secondary" progress="50"></mms-progress-bar>
        </div>
        <div style="${_.panel}">
          <h3 style="${w.h3}">accent</h3>
          <mms-progress-bar label="Progress" color-scheme="accent" progress="50"></mms-progress-bar>
        </div>
        <div style="${_.panel}">
          <h3 style="${w.h3}">onyx</h3>
          <mms-progress-bar label="Progress" color-scheme="onyx" progress="50"></mms-progress-bar>
        </div>
      </div>

      <hr style="${_.divider}" />

      <h2 style="${w.h2}">Complete text</h2>
      <p style="${w.bodySm} ${_.muted} max-width: ${y}; margin-bottom: ${b.subsection};">
        <code style="${w.monoSm}">show-complete-text</code> appends " complete" to the rendered value
        (e.g. "100% complete" instead of "100%") — both the visible text and
        <code style="${w.monoSm}">aria-valuetext</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: ${b.subsection};">
        <mms-progress-bar label="Setup" progress="100" show-complete-text></mms-progress-bar>
      </div>

      <hr style="${_.divider}" />

      <h2 style="${w.h2}">Hidden label</h2>
      <p style="${w.bodySm} ${_.muted} max-width: ${y}; margin-bottom: ${b.subsection};">
        <code style="${w.monoSm}">show-label</code> hides the visible label row (e.g. when a heading
        elsewhere on the page already describes the process) — the label is still exposed to assistive
        technology, now via <code style="${w.monoSm}">aria-label</code> instead of
        <code style="${w.monoSm}">aria-labelledby</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: ${b.subsection};">
        <mms-progress-bar label="Application progress" show-label="false" progress="30"></mms-progress-bar>
      </div>

      <hr style="${_.divider}" />

      <!-- Accessibility -->
      <h2 style="${w.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${b.content};">
        <div slot="body-content">
        <p style="${w.bodySm}">
          <strong>Not interactive.</strong> mms-progress-bar has no <code style="${w.monoSm}">tabindex</code>,
          no <code style="${w.monoSm}">:hover</code>/<code style="${w.monoSm}">:focus-visible</code> state, and
          no keyboard model — it is a live status display, not a control.
        </p>
        </div>
      </mms-card>

      <h3 style="${w.h3}">WCAG 2.2 AA compliance</h3>
      ${T(g[`progress-bar`].rows)}

      <h3 style="${w.h3}">Screen reader behavior</h3>
      <ul style="${w.bodySm} ${_.muted} margin: 0 0 ${b.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${b.label};"><strong>Role:</strong> Exposed as <code style="${w.monoSm}">role="progressbar"</code> with <code style="${w.monoSm}">aria-valuenow</code>/<code style="${w.monoSm}">aria-valuemin</code>/<code style="${w.monoSm}">aria-valuemax</code>, so AT can announce both the raw percentage and its position in the 0–100 range.</li>
        <li style="margin-bottom: ${b.label};"><strong>Value text:</strong> <code style="${w.monoSm}">aria-valuetext</code> mirrors the visible value text exactly, including the " complete" suffix when <code style="${w.monoSm}">show-complete-text</code> is set — AT announces "80% complete," not a bare number.</li>
        <li style="margin-bottom: ${b.label};"><strong>Accessible name:</strong> <code style="${w.monoSm}">aria-labelledby</code> points at the visible label when shown; falls back to <code style="${w.monoSm}">aria-label</code> carrying the same text when the label row is hidden — the accessible name is never lost.</li>
        <li><strong>No focus stop:</strong> mms-progress-bar is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="${w.h3}">Keyboard navigation</h3>
      <p style="${w.bodySm} ${_.muted} max-width: ${y}; margin-bottom: ${b.subsection};">
        None. mms-progress-bar is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},N={name:`Playground`,tags:[`!dev`],args:{label:`Application progress`,showLabel:!0,progress:65,size:`md`,valuePlacement:`label-row`,showCompleteText:!1,colorScheme:`primary`,theme:`maximus`,density:`default`},decorators:[e=>a`
      <div
        style="
          display: flex;
          justify-content: center;
          padding: 1.5rem 2rem;
        "
      >
        <div style="max-width: 360px; width: 100%;">${e()}</div>
      </div>
    `],argTypes:{label:{name:`Label`,control:`text`,description:`Label text describing the process`,table:{category:`Content`}},showLabel:{name:`Show Label`,control:`boolean`,description:`Show/hide the visible label row — still exposed to AT via aria-label when hidden`,table:{category:`Content`}},progress:{name:`Progress`,control:{type:`range`,min:0,max:100,step:1},description:`Progress value, 0–100 (clamped)`,table:{category:`Content`}},showCompleteText:{name:`Show Complete Text`,control:`boolean`,description:`Append " complete" to the value text (e.g. "80% complete")`,table:{category:`Content`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Track thickness: sm (8px) | md (12px, default) | lg (16px)`,table:{category:`Visual`}},valuePlacement:{name:`Value Placement`,control:`select`,options:[`label-row`,`inline`],description:`Where the percentage renders: label-row (default, above the track) | inline (next to the track)`,table:{category:`Visual`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Fill color — no Tier restriction, no "error" option (see Overview)`,table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-progress-bar has no compact-specific styling since it has no interactive touch-target dimension`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[`progress="${n.progress}"`];return n.label&&r.push(`label="${n.label}"`),n.showLabel||r.push(`show-label="false"`),n.size!==`md`&&r.push(`size="${n.size}"`),n.valuePlacement!==`label-row`&&r.push(`value-placement="${n.valuePlacement}"`),n.showCompleteText&&r.push(`show-complete-text`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-progress-bar\n  ${r.join(`
  `)}\n></mms-progress-bar>`},language:`html`}},controls:{sort:`none`}},render:e=>a`
    <mms-progress-bar
      label=${e.label}
      .showLabel=${e.showLabel}
      progress=${e.progress}
      size=${e.size}
      value-placement=${e.valuePlacement}
      ?show-complete-text=${e.showCompleteText}
      color-scheme=${e.colorScheme}
      data-density=${e.density===`compact`?`compact`:n}
    ></mms-progress-bar>
  `},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Progress Bar</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Tracks how far the user has gotten through something they are working through — question 6 of 10
        in a questionnaire, step 3 of 5 in an application. The value moves when the user does something,
        and it reports how much is done, not how much is left. For work the machine is doing on its own —
        an upload, a save, a background sync — use <code style="\${t.monoSm}">mms-loading-bar</code>.
      </p>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <div style="max-width: 360px; margin-bottom: \${space.subsection};">
        <mms-progress-bar label="Application progress" progress="65"></mms-progress-bar>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Value placement</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">value-placement</code> controls where the percentage renders:
        <code style="\${t.monoSm}">label-row</code> (default, above the track, opposite the label) or
        <code style="\${t.monoSm}">inline</code> (next to the track, useful in tight vertical spaces).
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">label-row (default)</h3>
          <mms-progress-bar label="Upload" value-placement="label-row" progress="40"></mms-progress-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">inline</h3>
          <mms-progress-bar label="Upload" value-placement="inline" progress="40"></mms-progress-bar>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">size</code> sets track thickness: <code style="\${t.monoSm}">sm</code>
        (8px), <code style="\${t.monoSm}">md</code> (12px, default), or <code style="\${t.monoSm}">lg</code> (16px).
      </p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">sm</h3>
          <mms-progress-bar label="Progress" size="sm" progress="55"></mms-progress-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">md (default)</h3>
          <mms-progress-bar label="Progress" size="md" progress="55"></mms-progress-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">lg</h3>
          <mms-progress-bar label="Progress" size="lg" progress="55"></mms-progress-bar>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Color scheme</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">color-scheme</code> sets the fill color: <code style="\${t.monoSm}">primary</code>
        (default), <code style="\${t.monoSm}">secondary</code>, <code style="\${t.monoSm}">accent</code>, or
        <code style="\${t.monoSm}">onyx</code>. Unlike <code style="\${t.monoSm}">mms-tag</code>/
        <code style="\${t.monoSm}">mms-button</code>, there is no Tier restriction and no "error" option —
        the fill never carries overlaid text, so every palette tier clears the 3:1 non-text UI contrast
        floor, and error has no solid step-9 token to fill with (see the component's
        <code style="\${t.monoSm}">ProgressBarColorScheme</code> type doc).
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">primary (default)</h3>
          <mms-progress-bar label="Progress" color-scheme="primary" progress="50"></mms-progress-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">secondary</h3>
          <mms-progress-bar label="Progress" color-scheme="secondary" progress="50"></mms-progress-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">accent</h3>
          <mms-progress-bar label="Progress" color-scheme="accent" progress="50"></mms-progress-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">onyx</h3>
          <mms-progress-bar label="Progress" color-scheme="onyx" progress="50"></mms-progress-bar>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Complete text</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">show-complete-text</code> appends " complete" to the rendered value
        (e.g. "100% complete" instead of "100%") — both the visible text and
        <code style="\${t.monoSm}">aria-valuetext</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: \${space.subsection};">
        <mms-progress-bar label="Setup" progress="100" show-complete-text></mms-progress-bar>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Hidden label</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">show-label</code> hides the visible label row (e.g. when a heading
        elsewhere on the page already describes the process) — the label is still exposed to assistive
        technology, now via <code style="\${t.monoSm}">aria-label</code> instead of
        <code style="\${t.monoSm}">aria-labelledby</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: \${space.subsection};">
        <mms-progress-bar label="Application progress" show-label="false" progress="30"></mms-progress-bar>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
        <p style="\${t.bodySm}">
          <strong>Not interactive.</strong> mms-progress-bar has no <code style="\${t.monoSm}">tabindex</code>,
          no <code style="\${t.monoSm}">:hover</code>/<code style="\${t.monoSm}">:focus-visible</code> state, and
          no keyboard model — it is a live status display, not a control.
        </p>
        </div>
      </mms-card>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['progress-bar'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Role:</strong> Exposed as <code style="\${t.monoSm}">role="progressbar"</code> with <code style="\${t.monoSm}">aria-valuenow</code>/<code style="\${t.monoSm}">aria-valuemin</code>/<code style="\${t.monoSm}">aria-valuemax</code>, so AT can announce both the raw percentage and its position in the 0–100 range.</li>
        <li style="margin-bottom: \${space.label};"><strong>Value text:</strong> <code style="\${t.monoSm}">aria-valuetext</code> mirrors the visible value text exactly, including the " complete" suffix when <code style="\${t.monoSm}">show-complete-text</code> is set — AT announces "80% complete," not a bare number.</li>
        <li style="margin-bottom: \${space.label};"><strong>Accessible name:</strong> <code style="\${t.monoSm}">aria-labelledby</code> points at the visible label when shown; falls back to <code style="\${t.monoSm}">aria-label</code> carrying the same text when the label row is hidden — the accessible name is never lost.</li>
        <li><strong>No focus stop:</strong> mms-progress-bar is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        None. mms-progress-bar is not focusable and has no keyboard interaction model.
      </p>

    </div>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    label: 'Application progress',
    showLabel: true,
    progress: 65,
    size: 'md',
    valuePlacement: 'label-row',
    showCompleteText: false,
    colorScheme: 'primary',
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => html\`
      <div
        style="
          display: flex;
          justify-content: center;
          padding: 1.5rem 2rem;
        "
      >
        <div style="max-width: 360px; width: 100%;">\${story()}</div>
      </div>
    \`],
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label text describing the process',
      table: {
        category: 'Content'
      }
    },
    showLabel: {
      name: 'Show Label',
      control: 'boolean',
      description: 'Show/hide the visible label row — still exposed to AT via aria-label when hidden',
      table: {
        category: 'Content'
      }
    },
    progress: {
      name: 'Progress',
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      description: 'Progress value, 0–100 (clamped)',
      table: {
        category: 'Content'
      }
    },
    showCompleteText: {
      name: 'Show Complete Text',
      control: 'boolean',
      description: 'Append " complete" to the value text (e.g. "80% complete")',
      table: {
        category: 'Content'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Track thickness: sm (8px) | md (12px, default) | lg (16px)',
      table: {
        category: 'Visual'
      }
    },
    valuePlacement: {
      name: 'Value Placement',
      control: 'select',
      options: ['label-row', 'inline'],
      description: 'Where the percentage renders: label-row (default, above the track) | inline (next to the track)',
      table: {
        category: 'Visual'
      }
    },
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Fill color — no Tier restriction, no "error" option (see Overview)',
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
        category: 'Global Props'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Accepted as a global attribute passthrough — mms-progress-bar has no compact-specific styling since it has no interactive touch-target dimension',
      table: {
        category: 'Global Props'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: {
            label: string;
            showLabel: boolean;
            progress: number;
            size: string;
            valuePlacement: string;
            showCompleteText: boolean;
            colorScheme: string;
            density: string;
          };
        }) => {
          const a = ctx.args;
          const attrs: string[] = [\`progress="\${a.progress}"\`];
          if (a.label) attrs.push(\`label="\${a.label}"\`);
          if (!a.showLabel) attrs.push('show-label="false"');
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.valuePlacement !== 'label-row') attrs.push(\`value-placement="\${a.valuePlacement}"\`);
          if (a.showCompleteText) attrs.push('show-complete-text');
          if (a.colorScheme !== 'primary') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-progress-bar\\n  \${attrs.join('\\n  ')}\\n></mms-progress-bar>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none'
    }
  },
  render: (args: {
    label: string;
    showLabel: boolean;
    progress: number;
    size: string;
    valuePlacement: string;
    showCompleteText: boolean;
    colorScheme: string;
    density: string;
  }) => html\`
    <mms-progress-bar
      label=\${args.label}
      .showLabel=\${args.showLabel}
      progress=\${args.progress}
      size=\${args.size}
      value-placement=\${args.valuePlacement}
      ?show-complete-text=\${args.showCompleteText}
      color-scheme=\${args.colorScheme}
      data-density=\${args.density === 'compact' ? 'compact' : nothing}
    ></mms-progress-bar>
  \`
}`,...N.parameters?.docs?.source}}},P=[`Overview`,`PlaygroundStory`]}));F();export{M as Overview,N as PlaygroundStory,P as __namedExportsOrder,j as default,F as n,A as t};