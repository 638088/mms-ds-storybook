import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,t as d}from"./decorate-Bygya6Tu.js";import{a as f,o as p,r as m,t as h}from"./a11y-outcome-DdXFaPju.js";var g,_,v=e((()=>{o(),u(),l(),g={fromAttribute:e=>e!==`false`,toAttribute:e=>e?null:`false`},_=class extends i{constructor(...e){super(...e),this.label=``,this.showLabel=!0,this.size=`md`,this.progress=0,this.valuePlacement=`label-row`,this.showCompleteText=!1,this.colorScheme=`primary`}static{this.styles=r`
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
      left: 0;
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
  `}get clampedProgress(){return Math.min(100,Math.max(0,this.progress))}get valueText(){let e=this.clampedProgress;return this.showCompleteText?`${e}% complete`:`${e}%`}render(){let e=this.clampedProgress,t=this.valueText,r=this.valuePlacement===`inline`,i=a`
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
    `}},d([c({type:String})],_.prototype,`label`,void 0),d([c({reflect:!0,attribute:`show-label`,converter:g})],_.prototype,`showLabel`,void 0),d([c({type:String,reflect:!0})],_.prototype,`size`,void 0),d([c({type:Number,reflect:!0})],_.prototype,`progress`,void 0),d([c({type:String,reflect:!0,attribute:`value-placement`})],_.prototype,`valuePlacement`,void 0),d([c({type:Boolean,reflect:!0,attribute:`show-complete-text`})],_.prototype,`showCompleteText`,void 0),d([c({type:String,reflect:!0,attribute:`color-scheme`})],_.prototype,`colorScheme`,void 0),_=d([s(`mms-progress-bar`)],_)})),y=t({Overview:()=>w,PlaygroundStory:()=>T,__namedExportsOrder:()=>E,default:()=>b}),b,x,S,C,w,T,E,D=e((()=>{o(),v(),f(),h(),b={title:`Status Display/Progress Bar`,tags:[`!autodocs`]},x={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},S=`680px`,C=`960px`,w={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${C}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${x.h1}">Progress Bar</h1>
      <p style="${x.body} opacity: 0.85; max-width: ${S}; margin-bottom: 2rem;">
        Tracks how far the user has gotten through something they are working through — question 6 of 10
        in a questionnaire, step 3 of 5 in an application. The value moves when the user does something,
        and it reports how much is done, not how much is left. For work the machine is doing on its own —
        an upload, a save, a background sync — use <code style="${x.monoSm}">mms-loading-bar</code>.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${x.h2}">Basic usage</h2>
      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-progress-bar label="Application progress" progress="65"></mms-progress-bar>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${x.h2}">Value placement</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        <code style="${x.monoSm}">value-placement</code> controls where the percentage renders:
        <code style="${x.monoSm}">label-row</code> (default, above the track, opposite the label) or
        <code style="${x.monoSm}">inline</code> (next to the track, useful in tight vertical spaces).
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${x.h3}">label-row (default)</p>
          <mms-progress-bar label="Upload" value-placement="label-row" progress="40"></mms-progress-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${x.h3}">inline</p>
          <mms-progress-bar label="Upload" value-placement="inline" progress="40"></mms-progress-bar>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${x.h2}">Size</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        <code style="${x.monoSm}">size</code> sets track thickness: <code style="${x.monoSm}">sm</code>
        (8px), <code style="${x.monoSm}">md</code> (12px, default), or <code style="${x.monoSm}">lg</code> (16px).
      </p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${x.h3}">sm</p>
          <mms-progress-bar label="Progress" size="sm" progress="55"></mms-progress-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${x.h3}">md (default)</p>
          <mms-progress-bar label="Progress" size="md" progress="55"></mms-progress-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${x.h3}">lg</p>
          <mms-progress-bar label="Progress" size="lg" progress="55"></mms-progress-bar>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${x.h2}">Color scheme</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        <code style="${x.monoSm}">color-scheme</code> sets the fill color: <code style="${x.monoSm}">primary</code>
        (default), <code style="${x.monoSm}">secondary</code>, <code style="${x.monoSm}">accent</code>, or
        <code style="${x.monoSm}">onyx</code>. Unlike <code style="${x.monoSm}">mms-tag</code>/
        <code style="${x.monoSm}">mms-button</code>, there is no Tier restriction and no "error" option —
        the fill never carries overlaid text, so every palette tier clears the 3:1 non-text UI contrast
        floor, and error has no solid step-9 token to fill with (see the component's
        <code style="${x.monoSm}">ProgressBarColorScheme</code> type doc).
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${x.h3}">primary (default)</p>
          <mms-progress-bar label="Progress" color-scheme="primary" progress="50"></mms-progress-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${x.h3}">secondary</p>
          <mms-progress-bar label="Progress" color-scheme="secondary" progress="50"></mms-progress-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${x.h3}">accent</p>
          <mms-progress-bar label="Progress" color-scheme="accent" progress="50"></mms-progress-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${x.h3}">onyx</p>
          <mms-progress-bar label="Progress" color-scheme="onyx" progress="50"></mms-progress-bar>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${x.h2}">Complete text</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        <code style="${x.monoSm}">show-complete-text</code> appends " complete" to the rendered value
        (e.g. "100% complete" instead of "100%") — both the visible text and
        <code style="${x.monoSm}">aria-valuetext</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-progress-bar label="Setup" progress="100" show-complete-text></mms-progress-bar>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${x.h2}">Hidden label</h2>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 1.5rem;">
        <code style="${x.monoSm}">show-label</code> hides the visible label row (e.g. when a heading
        elsewhere on the page already describes the process) — the label is still exposed to assistive
        technology, now via <code style="${x.monoSm}">aria-label</code> instead of
        <code style="${x.monoSm}">aria-labelledby</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: 1.5rem;">
        <mms-progress-bar label="Application progress" show-label="false" progress="30"></mms-progress-bar>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${x.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${x.bodySm} margin: 0;">
          <strong>Not interactive.</strong> mms-progress-bar has no <code style="${x.monoSm}">tabindex</code>,
          no <code style="${x.monoSm}">:hover</code>/<code style="${x.monoSm}">:focus-visible</code> state, and
          no keyboard model — it is a live status display, not a control.
        </p>
      </div>

      <h3 style="${x.h3}">WCAG 2.2 AA Compliance</h3>
      ${m(p[`progress-bar`].rows)}

      <h3 style="${x.h3}">Screen Reader Behavior</h3>
      <ul style="${x.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Role:</strong> Exposed as <code style="${x.monoSm}">role="progressbar"</code> with <code style="${x.monoSm}">aria-valuenow</code>/<code style="${x.monoSm}">aria-valuemin</code>/<code style="${x.monoSm}">aria-valuemax</code>, so AT can announce both the raw percentage and its position in the 0–100 range.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Value text:</strong> <code style="${x.monoSm}">aria-valuetext</code> mirrors the visible value text exactly, including the " complete" suffix when <code style="${x.monoSm}">show-complete-text</code> is set — AT announces "80% complete," not a bare number.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Accessible name:</strong> <code style="${x.monoSm}">aria-labelledby</code> points at the visible label when shown; falls back to <code style="${x.monoSm}">aria-label</code> carrying the same text when the label row is hidden — the accessible name is never lost.</li>
        <li><strong>No focus stop:</strong> mms-progress-bar is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="${x.h3}">Keyboard Navigation</h3>
      <p style="${x.bodySm} opacity: 0.85; max-width: ${S}; margin-bottom: 2rem;">
        None. mms-progress-bar is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},T={name:`Playground`,tags:[`!dev`],args:{label:`Application progress`,showLabel:!0,progress:65,size:`md`,valuePlacement:`label-row`,showCompleteText:!1,colorScheme:`primary`,theme:`maximus`,density:`default`},decorators:[e=>a`
      <div
        style="
          display: flex;
          justify-content: center;
          padding: 1.5rem 2rem;
        "
      >
        <div style="max-width: 360px; width: 100%;">${e()}</div>
      </div>
    `],argTypes:{label:{name:`Label`,control:`text`,description:`Label text describing the process`,table:{category:`Content`}},showLabel:{name:`Show Label`,control:`boolean`,description:`Show/hide the visible label row — still exposed to AT via aria-label when hidden`,table:{category:`Content`}},progress:{name:`Progress`,control:{type:`range`,min:0,max:100,step:1},description:`Progress value, 0–100 (clamped)`,table:{category:`Content`}},showCompleteText:{name:`Show Complete Text`,control:`boolean`,description:`Append " complete" to the value text (e.g. "80% complete")`,table:{category:`Content`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Track thickness: sm (8px) | md (12px, default) | lg (16px)`,table:{category:`Visual`}},valuePlacement:{name:`Value Placement`,control:`select`,options:[`label-row`,`inline`],description:`Where the percentage renders: label-row (default, above the track) | inline (next to the track)`,table:{category:`Visual`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Fill color — no Tier restriction, no "error" option (see Overview)`,table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`uss-oh-dvs`,`default`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-progress-bar has no compact-specific styling since it has no interactive touch-target dimension`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[`progress="${n.progress}"`];return n.label&&r.push(`label="${n.label}"`),n.showLabel||r.push(`show-label="false"`),n.size!==`md`&&r.push(`size="${n.size}"`),n.valuePlacement!==`label-row`&&r.push(`value-placement="${n.valuePlacement}"`),n.showCompleteText&&r.push(`show-complete-text`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-progress-bar\n  ${r.join(`
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
  `},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Progress Bar</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Tracks how far the user has gotten through something they are working through — question 6 of 10
        in a questionnaire, step 3 of 5 in an application. The value moves when the user does something,
        and it reports how much is done, not how much is left. For work the machine is doing on its own —
        an upload, a save, a background sync — use <code style="\${t.monoSm}">mms-loading-bar</code>.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-progress-bar label="Application progress" progress="65"></mms-progress-bar>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Value placement</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">value-placement</code> controls where the percentage renders:
        <code style="\${t.monoSm}">label-row</code> (default, above the track, opposite the label) or
        <code style="\${t.monoSm}">inline</code> (next to the track, useful in tight vertical spaces).
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">label-row (default)</p>
          <mms-progress-bar label="Upload" value-placement="label-row" progress="40"></mms-progress-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">inline</p>
          <mms-progress-bar label="Upload" value-placement="inline" progress="40"></mms-progress-bar>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">size</code> sets track thickness: <code style="\${t.monoSm}">sm</code>
        (8px), <code style="\${t.monoSm}">md</code> (12px, default), or <code style="\${t.monoSm}">lg</code> (16px).
      </p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">sm</p>
          <mms-progress-bar label="Progress" size="sm" progress="55"></mms-progress-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">md (default)</p>
          <mms-progress-bar label="Progress" size="md" progress="55"></mms-progress-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">lg</p>
          <mms-progress-bar label="Progress" size="lg" progress="55"></mms-progress-bar>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Color scheme</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">color-scheme</code> sets the fill color: <code style="\${t.monoSm}">primary</code>
        (default), <code style="\${t.monoSm}">secondary</code>, <code style="\${t.monoSm}">accent</code>, or
        <code style="\${t.monoSm}">onyx</code>. Unlike <code style="\${t.monoSm}">mms-tag</code>/
        <code style="\${t.monoSm}">mms-button</code>, there is no Tier restriction and no "error" option —
        the fill never carries overlaid text, so every palette tier clears the 3:1 non-text UI contrast
        floor, and error has no solid step-9 token to fill with (see the component's
        <code style="\${t.monoSm}">ProgressBarColorScheme</code> type doc).
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">primary (default)</p>
          <mms-progress-bar label="Progress" color-scheme="primary" progress="50"></mms-progress-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">secondary</p>
          <mms-progress-bar label="Progress" color-scheme="secondary" progress="50"></mms-progress-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">accent</p>
          <mms-progress-bar label="Progress" color-scheme="accent" progress="50"></mms-progress-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">onyx</p>
          <mms-progress-bar label="Progress" color-scheme="onyx" progress="50"></mms-progress-bar>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Complete text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">show-complete-text</code> appends " complete" to the rendered value
        (e.g. "100% complete" instead of "100%") — both the visible text and
        <code style="\${t.monoSm}">aria-valuetext</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-progress-bar label="Setup" progress="100" show-complete-text></mms-progress-bar>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Hidden label</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">show-label</code> hides the visible label row (e.g. when a heading
        elsewhere on the page already describes the process) — the label is still exposed to assistive
        technology, now via <code style="\${t.monoSm}">aria-label</code> instead of
        <code style="\${t.monoSm}">aria-labelledby</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: 1.5rem;">
        <mms-progress-bar label="Application progress" show-label="false" progress="30"></mms-progress-bar>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Not interactive.</strong> mms-progress-bar has no <code style="\${t.monoSm}">tabindex</code>,
          no <code style="\${t.monoSm}">:hover</code>/<code style="\${t.monoSm}">:focus-visible</code> state, and
          no keyboard model — it is a live status display, not a control.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['progress-bar'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Role:</strong> Exposed as <code style="\${t.monoSm}">role="progressbar"</code> with <code style="\${t.monoSm}">aria-valuenow</code>/<code style="\${t.monoSm}">aria-valuemin</code>/<code style="\${t.monoSm}">aria-valuemax</code>, so AT can announce both the raw percentage and its position in the 0–100 range.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Value text:</strong> <code style="\${t.monoSm}">aria-valuetext</code> mirrors the visible value text exactly, including the " complete" suffix when <code style="\${t.monoSm}">show-complete-text</code> is set — AT announces "80% complete," not a bare number.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Accessible name:</strong> <code style="\${t.monoSm}">aria-labelledby</code> points at the visible label when shown; falls back to <code style="\${t.monoSm}">aria-label</code> carrying the same text when the label row is hidden — the accessible name is never lost.</li>
        <li><strong>No focus stop:</strong> mms-progress-bar is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard Navigation</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        None. mms-progress-bar is not focusable and has no keyboard interaction model.
      </p>

    </div>
  \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
      options: ['maximus', 'va-gov', 'uss-oh-dvs', 'default'],
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
}`,...T.parameters?.docs?.source}}},E=[`Overview`,`PlaygroundStory`]}));D();export{w as Overview,T as PlaygroundStory,E as __namedExportsOrder,b as default,D as n,y as t};