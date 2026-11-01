import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-B0BZwaT1.js";import{E as s,S as c,T as l,g as u,n as d,r as f,t as p,w as m}from"./mms-icon.component-DFVI3nJi.js";import{t as h}from"./mms-card.component-Ae9XIj4r.js";import{n as g,r as _}from"./wcag-coverage-DNhlI7v1.js";import{t as v}from"./mms-inline-alert.component-Yg3wQ3bY.js";import{a as y,c as b,d as x,i as S,n as C,o as w,r as T,u as E}from"./doc-styles-DkvR_Qyb.js";import{a as D,n as O}from"./a11y-outcome-Chf8PZL1.js";var k,A,j=e((()=>{o(),s(),u(),p(),f(),k={fromAttribute:e=>e!==`false`,toAttribute:e=>e?null:`false`},A=class extends i{constructor(...e){super(...e),this.label=``,this.showLabel=!0,this.size=`md`,this.progress=0,this.state=`loading`,this.valuePlacement=`label-row`,this.colorScheme=`primary`,this.helperText=``,this.errorText=``}static{this.styles=[l,r`
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
      /* Pill, not Marina's rectangle — matches mms-progress-bar. Two bars
         stacked in the same view reading as different shapes is the kind of
         incoherence the sibling check exists to catch. */
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

    /* The terminal outcomes override colorScheme unconditionally — a resolved
       process reports what happened, not what brand it belongs to. These are
       classes rather than :host([state=...]) rules because 'state' is the
       reflected attribute and 'effectiveState' is not: a bar left at
       state="loading" on progress 100 is promoted to success in JS only, so an
       attribute selector would render it in the in-flight fill while the label
       already read "Complete". */
    .bar.is-success {
      background: var(--color-utility-success-emphasis);
    }

    .bar.is-error {
      background: var(--color-utility-error-emphasis);
    }

    /* Indeterminate: a 30%-wide bar sweeping the full track. Animating
       transform rather than Marina's 'left' keeps the sweep on the compositor
       — this runs continuously, so a layout-thrashing property is a real cost
       on the lower-powered hardware these sites are used on. */
    .bar.indeterminate {
      width: 30%;
      animation: mms-loading-bar-sweep var(--motion-duration-loop) var(--motion-easing-loop) infinite;
    }

    @keyframes mms-loading-bar-sweep {
      /* -100% of the bar's own width = fully off the left edge.
         333.33% = the bar's left edge at 100% of the track (30% × 3.333). */
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(333.33%);
      }
    }

    /* Right-to-left: the bar starts at the right edge, so the sweep runs the other way. */
    :host(:dir(rtl)) .bar.indeterminate {
      animation-name: mms-loading-bar-sweep-rtl;
    }

    @keyframes mms-loading-bar-sweep-rtl {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-333.33%);
      }
    }

    .support {
      display: flex;
      flex-direction: column;
      /* Supporting text sits on the form-control rhythm — 4px, matching
         mms-text-field and its siblings, where the same helper/error pair
         lives (their whole host column is --spacing-xs2). The host column here
         keeps --spacing-sm1 so the label -> track relationship still matches
         mms-progress-bar; the negative top margin cancels that 8px down to the
         same 4px for this block only. Same offset technique as .bar-row. */
      gap: var(--spacing-xs2);
      margin-top: calc(var(--spacing-xs2) - var(--spacing-sm1));
    }

    .helper-text,
    .error-text {
      font-size: var(--type-body-sm-size);
      line-height: var(--type-body-sm-line-height);
      font-weight: var(--type-body-sm-weight);
    }

    .helper-text {
      color: var(--color-text-muted);
    }

    .error-row {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-xs2);
      color: var(--color-utility-error-emphasis);
    }

    .error-icon {
      flex-shrink: 0;
      /* Center the icon on the *first line* of the error text, not on the row's
         top edge. The body-sm line-box is taller than the 16px glyph, so
         flex-start alone hangs the icon above the text's optical center. Kept as
         flex-start + this offset rather than align-items: center because a
         wrapped two-line message would otherwise float the icon to the middle of
         the whole block. */
      margin-top: calc(
        (var(--type-body-sm-line-height) * var(--type-body-sm-size) - var(--icon-size-sm, 16px)) / 2
      );
    }

    .bar-row {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm2);
      /* Vertically centering track against the taller text line-box grows this
         row upward past the track's own height — pulling it back up by that
         same excess keeps the label-to-track gap flush with label-row mode
         while leaving track/text centered relative to each other untouched.
         Same calc as mms-progress-bar. */
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

    @media (prefers-reduced-motion: reduce) {
      .bar {
        transition-duration: var(--motion-duration-instant);
      }

      /* Marina kills the animation with 'animation: none', which parks the
         30%-wide bar at its 0% keyframe — translated fully off the left edge.
         The loading indicator becomes invisible for exactly the users who
         opted out of motion. Filling the track instead keeps a visible busy
         indicator with no movement: honest, since an indeterminate bar was
         never communicating a quantity. */
      .bar.indeterminate {
        animation: none;
        width: 100%;
        transform: none;
      }
    }
  `]}get clampedProgress(){return Math.min(100,Math.max(0,this.progress))}get effectiveState(){return this.state===`loading`&&this.clampedProgress===100?`success`:this.state}get valueText(){let e=this.effectiveState;return e===`indeterminate`||e===`error`?``:e===`success`?`Complete`:`${Math.round(this.clampedProgress)}%`}render(){let e=this.effectiveState,t=e===`indeterminate`,r=e===`error`,i=e===`success`,o=this.valueText,s=this.valuePlacement===`inline`,c=r||i?100:this.clampedProgress,l=a`
      <div
        class="track-container"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${t?n:c}
        aria-valuetext=${o||n}
        aria-busy=${t?`true`:n}
        aria-labelledby=${this.showLabel&&this.label?`label`:n}
        aria-label=${!this.showLabel&&this.label?this.label:n}
      >
        <div
          class="bar ${t?`indeterminate`:``} ${i?`is-success`:``} ${r?`is-error`:``}"
          style=${t?n:`width: ${c}%`}
        ></div>
      </div>
    `,u=!!this.helperText,d=r&&!!this.errorText,f=u||d?a`
            <div class="support">
              ${u?a`<span class="helper-text">${this.helperText}</span>`:n}
              ${d?a`
                    <div class="error-row" role="alert">
                      <mms-icon class="error-icon" name="warning-circle" size="sm"></mms-icon>
                      <span class="error-text">${this.errorText}</span>
                    </div>
                  `:n}
            </div>
          `:n;return s&&o?a`
        ${this.showLabel&&this.label?a`<div class="label-row"><span class="label" id="label">${this.label}</span></div>`:n}
        <div class="bar-row">
          ${l}
          <span class="value-inline">${o}</span>
        </div>
        ${f}
      `:a`
      ${this.showLabel&&(this.label||o)?a`
            <div class="label-row">
              <span class="label" id="label">${this.label}</span>
              ${o?a`<span class="value">${o}</span>`:n}
            </div>
          `:n}
      ${l} ${f}
    `}},d([c({type:String})],A.prototype,`label`,void 0),d([c({reflect:!0,attribute:`show-label`,converter:k})],A.prototype,`showLabel`,void 0),d([c({type:String,reflect:!0})],A.prototype,`size`,void 0),d([c({type:Number,reflect:!0})],A.prototype,`progress`,void 0),d([c({type:String,reflect:!0})],A.prototype,`state`,void 0),d([c({type:String,reflect:!0,attribute:`value-placement`})],A.prototype,`valuePlacement`,void 0),d([c({type:String,reflect:!0,attribute:`color-scheme`})],A.prototype,`colorScheme`,void 0),d([c({type:String,reflect:!0,attribute:`helper-text`})],A.prototype,`helperText`,void 0),d([c({type:String,reflect:!0,attribute:`error-text`})],A.prototype,`errorText`,void 0),A=d([m(`mms-loading-bar`)],A)})),M=t({Overview:()=>P,PlaygroundStory:()=>F,__namedExportsOrder:()=>I,default:()=>N}),N,P,F,I,L=e((()=>{o(),j(),h(),v(),g(),O(),b(),N={title:`Status Display/Loading Bar`,tags:[`!autodocs`]},P={name:`Overview`,render:()=>a`
    <div data-theme=${T} data-mode=${w()} style=${C}>

      <h1 style="${x.h1}">Loading Bar</h1>
      <p style="${x.body} ${y.muted} max-width: ${S}; margin-bottom: ${E.subsection};">
        Shows the status of work the machine is doing — uploading a file, saving a form, syncing records,
        loading a page's data. It covers the whole run: filling toward a known percentage, sweeping when
        there's no way to know how long it will take, and settling into success or an error once it's done.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${E.subsection};">
        <div slot="body-content">
        <p style="${x.bodySm} margin-bottom: ${E.content};">
          <strong>Loading Bar or Progress Bar?</strong> It comes down to what moves the number.
        </p>
        <ul style="${x.bodySm} margin: 0 0 ${E.content}; padding-left: var(--spacing-md2);">
          <li style="margin-bottom: ${E.label};">
            <strong>The machine is working.</strong> Uploading a file, saving a form, syncing records,
            fetching a page's data. The bar moves on its own while the user waits. Use
            <code style="${x.monoSm}">mms-loading-bar</code>.
          </li>
          <li>
            <strong>The user is working.</strong> Question 6 of 10 in a questionnaire, step 3 of 5 in an
            application. The bar moves when the user does something. Use
            <code style="${x.monoSm}">mms-progress-bar</code>.
          </li>
        </ul>
        <p style="${x.bodySm} margin: 0;">
          That's also why only Loading Bar has an indeterminate mode and success/error states: a machine
          job can take an unknown amount of time, can fail, and often finishes when nobody is looking, so
          it has to report the outcome. Someone filling out a questionnaire always knows where they are.
        </p>
        </div>
      </mms-card>

      <hr style="${y.divider}" />

      <h2 style="${x.h2}">Basic usage</h2>
      <div style="max-width: 360px; margin-bottom: ${E.subsection};">
        <mms-loading-bar label="Syncing records" progress="45" helper-text="2 MB of 4 MB"></mms-loading-bar>
      </div>

      <hr style="${y.divider}" />

      <h2 style="${x.h2}">State</h2>
      <p style="${x.bodySm} ${y.muted} max-width: ${S}; margin-bottom: ${E.subsection};">
        <code style="${x.monoSm}">state</code> drives both the fill color and what is reported to
        assistive technology. <code style="${x.monoSm}">loading</code> (default) fills the track to
        <code style="${x.monoSm}">progress</code>. <code style="${x.monoSm}">indeterminate</code> sweeps
        and reports no value at all. <code style="${x.monoSm}">success</code> and
        <code style="${x.monoSm}">error</code> are terminal — both fill the track regardless of
        <code style="${x.monoSm}">progress</code>, because what they report is the outcome, not how
        far the process got. A partial bar in either state reads as still running.
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: ${E.content}; margin-bottom: ${E.subsection};">
        <div style="${y.panel}">
          <h3 style="${x.h3}">loading (default)</h3>
          <mms-loading-bar label="Syncing" progress="60"></mms-loading-bar>
        </div>
        <div style="${y.panel}">
          <h3 style="${x.h3}">indeterminate</h3>
          <mms-loading-bar label="Syncing" state="indeterminate"></mms-loading-bar>
        </div>
        <div style="${y.panel}">
          <h3 style="${x.h3}">success</h3>
          <mms-loading-bar label="Syncing" state="success" progress="100"></mms-loading-bar>
        </div>
        <div style="${y.panel}">
          <h3 style="${x.h3}">error</h3>
          <mms-loading-bar
            label="Syncing"
            state="error"
            progress="60"
            error-text="Connection lost. Retry to resume."
          ></mms-loading-bar>
        </div>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${E.subsection};">
        <div slot="body-content">
        <p style="${x.bodySm}">
          A bar left at <code style="${x.monoSm}">state="loading"</code> that reaches
          <code style="${x.monoSm}">progress="100"</code> renders as success and reads "Complete" — a
          finished process is a successful one, so consumers streaming a percentage don't have to
          special-case the last tick. Setting <code style="${x.monoSm}">state</code> explicitly always wins.
        </p>
        </div>
      </mms-card>

      <hr style="${y.divider}" />

      <h2 style="${x.h2}">Size</h2>
      <p style="${x.bodySm} ${y.muted} max-width: ${S}; margin-bottom: ${E.subsection};">
        <code style="${x.monoSm}">size</code> sets track thickness: <code style="${x.monoSm}">sm</code>
        (8px), <code style="${x.monoSm}">md</code> (12px, default), or <code style="${x.monoSm}">lg</code>
        (16px) — the same three rungs as <code style="${x.monoSm}">mms-progress-bar</code>.
      </p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: ${E.content}; margin-bottom: ${E.subsection};">
        <div style="${y.panel}">
          <h3 style="${x.h3}">sm</h3>
          <mms-loading-bar label="Loading" size="sm" progress="55"></mms-loading-bar>
        </div>
        <div style="${y.panel}">
          <h3 style="${x.h3}">md (default)</h3>
          <mms-loading-bar label="Loading" size="md" progress="55"></mms-loading-bar>
        </div>
        <div style="${y.panel}">
          <h3 style="${x.h3}">lg</h3>
          <mms-loading-bar label="Loading" size="lg" progress="55"></mms-loading-bar>
        </div>
      </div>

      <hr style="${y.divider}" />

      <h2 style="${x.h2}">Helper and error text</h2>
      <p style="${x.bodySm} ${y.muted} max-width: ${S}; margin-bottom: ${E.subsection};">
        <code style="${x.monoSm}">helper-text</code> carries secondary detail under the track and is
        hidden when empty. It is <em>not</em> suppressed in the error state — it still describes what was
        being attempted. <code style="${x.monoSm}">error-text</code> renders below it with a warning icon,
        only when <code style="${x.monoSm}">state="error"</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: ${E.subsection};">
        <mms-loading-bar
          label="Uploading evidence"
          state="error"
          progress="72"
          helper-text="2.9 MB of 4 MB"
          error-text="Upload failed. Check your connection and try again."
        ></mms-loading-bar>
      </div>

      <hr style="${y.divider}" />

      <h2 style="${x.h2}">Driving it from a live process</h2>
      <p style="${x.bodySm} ${y.muted} max-width: ${S}; margin-bottom: ${E.content};">
        Every prop is reactive. Assign to it and the bar re-renders in place — no remount, no flicker,
        no need to replace the element. A typical upload wiring:
      </p>
      <pre style="${y.pre}"><code>const bar = document.querySelector('mms-loading-bar');

bar.label = 'Uploading evidence';
bar.helperText = 'Starting…';        // set it now, not on the first tick — see below

xhr.upload.onprogress = (e) =&gt; {
  bar.progress = (e.loaded / e.total) * 100;
  bar.helperText = \`\${fmt(e.loaded)} of \${fmt(e.total)}\`;
};

xhr.onload  = () =&gt; { bar.state = 'success'; bar.helperText = 'Saved'; };
xhr.onerror = () =&gt; { bar.state = 'error'; bar.errorText = 'Upload failed. Try again.'; };</code></pre>

      <p style="${x.bodySm} ${y.muted} max-width: ${S}; margin-bottom: ${E.content};">
        Three behaviors worth knowing before you wire it up:
      </p>
      <ul style="${x.bodySm} ${y.muted} max-width: ${S}; margin: 0 0 ${E.content}; padding-left: var(--spacing-md2);">
        <li style="margin-bottom: ${E.label};">
          <code style="${x.monoSm}">progress</code> reaching 100 while
          <code style="${x.monoSm}">state</code> is still <code style="${x.monoSm}">loading</code> renders
          as success on its own — you do not have to set both. A finished process is a successful one.
        </li>
        <li style="margin-bottom: ${E.label};">
          <code style="${x.monoSm}">success</code> and <code style="${x.monoSm}">error</code> fill the
          track regardless of <code style="${x.monoSm}">progress</code>, so you can flip to a terminal
          state mid-upload without first winding the number to 100.
        </li>
        <li>
          <code style="${x.monoSm}">helper-text</code> and <code style="${x.monoSm}">error-text</code>
          hide when empty. Setting either back to <code style="${x.monoSm}">''</code> removes that line
          again — useful for clearing stale detail on retry.
        </li>
      </ul>

      <div style="margin-bottom: ${E.content};">
        <mms-inline-alert
          alert-type="caution"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Set helper text before the first tick, not on it."
          message="The supporting block only renders when there is something in it, so a bar that starts with an empty helper-text gets taller the moment you set one — 25px at the default size — pushing everything below it down the page after the user has already seen the layout settle. If a helper string is coming, put a placeholder in the initial render. Once the line exists, every subsequent update is height-stable."
        ></mms-inline-alert>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${E.subsection};">
        <div slot="body-content">
        <p style="${x.bodySm} margin-bottom: ${E.content};">
          <strong>Screen readers hear the value, not the helper text.</strong> The track is
          <code style="${x.monoSm}">role="progressbar"</code> — assistive technology watches that role's
          value and announces changes on its own, so <code style="${x.monoSm}">bar.progress = 50</code>
          is heard without you doing anything. Helper text is ordinary text: not a live region, not wired
          to <code style="${x.monoSm}">aria-describedby</code>, so changing it announces nothing.
        </p>
        <p style="${x.bodySm}">
          That is fine when helper text restates the value — <em>"2 MB of 4 MB"</em> alongside
          <em>"50%"</em> costs a screen reader user nothing. It is not fine when helper text is the only
          place something appears, like <em>"Retrying — attempt 2 of 3"</em>. For detail that must be
          heard, use <code style="${x.monoSm}">error-text</code> (its row carries
          <code style="${x.monoSm}">role="alert"</code> and is announced) or own the announcement in your
          application's live region.
        </p>
        </div>
      </mms-card>

      <hr style="${y.divider}" />

      <h2 style="${x.h2}">Hidden label</h2>
      <p style="${x.bodySm} ${y.muted} max-width: ${S}; margin-bottom: ${E.subsection};">
        <code style="${x.monoSm}">show-label</code> hides the visible label row (and the value text with
        it) — the label is still exposed to assistive technology, now via
        <code style="${x.monoSm}">aria-label</code> instead of <code style="${x.monoSm}">aria-labelledby</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: ${E.subsection};">
        <mms-loading-bar label="Background sync" show-label="false" state="indeterminate"></mms-loading-bar>
      </div>

      <hr style="${y.divider}" />

      <h2 style="${x.h2}">Value placement</h2>
      <p style="${x.bodySm} ${y.muted} max-width: ${S}; margin-bottom: ${E.subsection};">
        <code style="${x.monoSm}">value-placement</code> moves the value text. <code style="${x.monoSm}">label-row</code>
        (default) right-aligns it against the label above the track; <code style="${x.monoSm}">inline</code>
        sets it beside the track, which reads better in a narrow column. Same two options as
        <code style="${x.monoSm}">mms-progress-bar</code>. Indeterminate and error report no value, so both
        render the track alone in either mode.
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: ${E.content}; margin-bottom: ${E.subsection};">
        <div style="${y.panel}">
          <h3 style="${x.h3}">label-row (default)</h3>
          <mms-loading-bar label="Syncing" progress="45"></mms-loading-bar>
        </div>
        <div style="${y.panel}">
          <h3 style="${x.h3}">inline</h3>
          <mms-loading-bar label="Syncing" progress="45" value-placement="inline"></mms-loading-bar>
        </div>
      </div>

      <hr style="${y.divider}" />

      <h2 style="${x.h2}">Color scheme</h2>
      <p style="${x.bodySm} ${y.muted} max-width: ${S}; margin-bottom: ${E.subsection};">
        <code style="${x.monoSm}">color-scheme</code> sets the fill while the process is
        <strong>in flight</strong> — <code style="${x.monoSm}">primary</code> (default),
        <code style="${x.monoSm}">secondary</code>, <code style="${x.monoSm}">accent</code>, or
        <code style="${x.monoSm}">onyx</code>, the same four solid step-9 fills as
        <code style="${x.monoSm}">mms-progress-bar</code>.
      </p>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: ${E.content}; margin-bottom: ${E.subsection};">
        <div style="${y.panel}">
          <h3 style="${x.h3}">primary</h3>
          <mms-loading-bar label="Syncing" progress="60"></mms-loading-bar>
        </div>
        <div style="${y.panel}">
          <h3 style="${x.h3}">secondary</h3>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="secondary"></mms-loading-bar>
        </div>
        <div style="${y.panel}">
          <h3 style="${x.h3}">accent</h3>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="accent"></mms-loading-bar>
        </div>
        <div style="${y.panel}">
          <h3 style="${x.h3}">onyx</h3>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="onyx"></mms-loading-bar>
        </div>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${E.subsection};">
        <div slot="body-content">
        <p style="${x.bodySm}">
          <strong>The terminal states always override it.</strong> A resolved process reports what
          happened, not what brand it belongs to — <code style="${x.monoSm}">success</code> is always green
          and <code style="${x.monoSm}">error</code> always red, whatever
          <code style="${x.monoSm}">color-scheme</code> is set to. That includes the auto-promoted case:
          <code style="${x.monoSm}">state="loading"</code> at <code style="${x.monoSm}">progress="100"</code>
          turns green along with reading "Complete." This is the one behavioral difference from
          <code style="${x.monoSm}">mms-progress-bar</code>'s otherwise identical
          <code style="${x.monoSm}">color-scheme</code>, and it exists because Progress Bar has no terminal
          states to conflict with.
        </p>
        </div>
      </mms-card>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: ${E.content}; margin-bottom: ${E.subsection};">
        <div style="${y.panel}">
          <h3 style="${x.h3}">accent · loading</h3>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="accent"></mms-loading-bar>
        </div>
        <div style="${y.panel}">
          <h3 style="${x.h3}">accent · loading @ 100</h3>
          <mms-loading-bar label="Syncing" progress="100" color-scheme="accent"></mms-loading-bar>
        </div>
        <div style="${y.panel}">
          <h3 style="${x.h3}">accent · error</h3>
          <mms-loading-bar label="Syncing" state="error" progress="60" color-scheme="accent"></mms-loading-bar>
        </div>
      </div>

      <hr style="${y.divider}" />

      <!-- Accessibility -->
      <h2 style="${x.h2}">Accessibility</h2>

      <ul style="${x.bodySm} ${y.muted} padding-left: var(--spacing-lg1); margin: 0 0 ${E.subsection};">
        <li style="margin-bottom: ${E.label};">
          <strong>Not interactive:</strong> mms-loading-bar has no <code style="${x.monoSm}">tabindex</code>,
          no <code style="${x.monoSm}">:hover</code>/<code style="${x.monoSm}">:focus-visible</code> state,
          and no keyboard model — it is a live status display, not a control.
        </li>
        <li>
          <strong>Reduced motion keeps the indicator visible:</strong> Under
          <code style="${x.monoSm}">prefers-reduced-motion: reduce</code> the indeterminate sweep stops and
          the bar fills the track instead of disappearing. Simply canceling the animation would park the
          30%-wide bar off the left edge — an invisible loading indicator for exactly the users who opted
          out of motion. A full static bar is also honest: an indeterminate bar was never communicating a
          quantity.
        </li>
      </ul>

      <h3 style="${x.h3}">WCAG 2.2 AA compliance</h3>
      ${D(_[`loading-bar`].rows)}

      <h3 style="${x.h3}">Screen reader behavior</h3>
      <ul style="${x.bodySm} ${y.muted} margin: 0 0 ${E.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${E.label};"><strong>Role:</strong> Exposed as <code style="${x.monoSm}">role="progressbar"</code> with <code style="${x.monoSm}">aria-valuemin</code>/<code style="${x.monoSm}">aria-valuemax</code> always present.</li>
        <li style="margin-bottom: ${E.label};"><strong>Indeterminate:</strong> <code style="${x.monoSm}">aria-valuenow</code> is <em>omitted entirely</em> — the ARIA-spec signal for "progress is indeterminate." It is not set to 0, and not set to the string "undefined." <code style="${x.monoSm}">aria-busy="true"</code> is set alongside it.</li>
        <li style="margin-bottom: ${E.label};"><strong>Value text:</strong> <code style="${x.monoSm}">aria-valuetext</code> mirrors the visible value exactly — a percentage while loading, "Complete" on success. It is absent for indeterminate and error, which report no quantity.</li>
        <li style="margin-bottom: ${E.label};"><strong>Error:</strong> The error row carries <code style="${x.monoSm}">role="alert"</code>, so the message is announced the moment the process fails — the user was not doing the work and may not have been watching, so they have to be told.</li>
        <li style="margin-bottom: ${E.label};"><strong>Accessible name:</strong> <code style="${x.monoSm}">aria-labelledby</code> points at the visible label when shown; falls back to <code style="${x.monoSm}">aria-label</code> carrying the same text when the label row is hidden — the accessible name is never lost.</li>
        <li><strong>No focus stop:</strong> mms-loading-bar is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="${x.h3}">Keyboard navigation</h3>
      <p style="${x.bodySm} ${y.muted} max-width: ${S}; margin-bottom: ${E.subsection};">
        None. mms-loading-bar is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},F={name:`Playground`,tags:[`!dev`],args:{label:`Syncing records`,showLabel:!0,state:`loading`,progress:45,size:`md`,valuePlacement:`label-row`,colorScheme:`primary`,helperText:`2 MB of 4 MB`,errorText:`Connection lost. Retry to resume.`,theme:`maximus`,density:`default`},decorators:[e=>a`
      <div
        style="
          display: flex;
          justify-content: center;
          padding: 1.5rem 2rem;
        "
      >
        <div style="max-width: 360px; width: 100%;">${e()}</div>
      </div>
    `],argTypes:{label:{name:`Label`,control:`text`,description:`Label text describing the process`,table:{category:`Content`}},showLabel:{name:`Show Label`,control:`boolean`,description:`Show/hide the visible label row — still exposed to AT via aria-label when hidden`,table:{category:`Content`}},progress:{name:`Progress`,control:{type:`range`,min:0,max:100,step:1},description:`Progress value, 0–100 (clamped). Ignored when state is indeterminate; the terminal states (success, error) fill the track regardless`,table:{category:`Content`}},helperText:{name:`Helper Text`,control:`text`,description:`Secondary detail under the track. Hidden when empty; not suppressed by the error state`,table:{category:`Content`}},errorText:{name:`Error Text`,control:`text`,description:`Error message with warning icon — rendered only when state is error`,table:{category:`Content`}},state:{name:`State`,control:`select`,options:[`loading`,`indeterminate`,`success`,`error`],description:`loading (default) | indeterminate | success | error. loading at progress 100 renders as success`,table:{category:`Visual`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Track thickness: sm (8px) | md (12px, default) | lg (16px)`,table:{category:`Visual`}},valuePlacement:{name:`Value Placement`,control:`select`,options:[`label-row`,`inline`],description:`Where the value renders: label-row (above the track, default) | inline (beside the track). Indeterminate and error have no value to place`,table:{category:`Visual`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`In-flight fill color. Applies only while loading or indeterminate — success and error always override it with their semantic green/red`,table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-loading-bar has no compact-specific styling since it has no interactive touch-target dimension`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.showLabel||r.push(`show-label="false"`),n.state!==`loading`&&r.push(`state="${n.state}"`),n.state!==`indeterminate`&&n.state!==`error`&&r.push(`progress="${n.progress}"`),n.size!==`md`&&r.push(`size="${n.size}"`),n.valuePlacement!==`label-row`&&r.push(`value-placement="${n.valuePlacement}"`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.state===`error`&&n.errorText&&r.push(`error-text="${n.errorText}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-loading-bar\n  ${r.join(`
  `)}\n></mms-loading-bar>`},language:`html`}},controls:{sort:`none`}},render:e=>a`
    <mms-loading-bar
      label=${e.label}
      .showLabel=${e.showLabel}
      state=${e.state}
      progress=${e.progress}
      size=${e.size}
      value-placement=${e.valuePlacement}
      color-scheme=${e.colorScheme}
      helper-text=${e.helperText}
      error-text=${e.errorText}
      data-density=${e.density===`compact`?`compact`:n}
    ></mms-loading-bar>
  `},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Loading Bar</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Shows the status of work the machine is doing — uploading a file, saving a form, syncing records,
        loading a page's data. It covers the whole run: filling toward a known percentage, sweeping when
        there's no way to know how long it will take, and settling into success or an error once it's done.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm} margin-bottom: \${space.content};">
          <strong>Loading Bar or Progress Bar?</strong> It comes down to what moves the number.
        </p>
        <ul style="\${t.bodySm} margin: 0 0 \${space.content}; padding-left: var(--spacing-md2);">
          <li style="margin-bottom: \${space.label};">
            <strong>The machine is working.</strong> Uploading a file, saving a form, syncing records,
            fetching a page's data. The bar moves on its own while the user waits. Use
            <code style="\${t.monoSm}">mms-loading-bar</code>.
          </li>
          <li>
            <strong>The user is working.</strong> Question 6 of 10 in a questionnaire, step 3 of 5 in an
            application. The bar moves when the user does something. Use
            <code style="\${t.monoSm}">mms-progress-bar</code>.
          </li>
        </ul>
        <p style="\${t.bodySm} margin: 0;">
          That's also why only Loading Bar has an indeterminate mode and success/error states: a machine
          job can take an unknown amount of time, can fail, and often finishes when nobody is looking, so
          it has to report the outcome. Someone filling out a questionnaire always knows where they are.
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <div style="max-width: 360px; margin-bottom: \${space.subsection};">
        <mms-loading-bar label="Syncing records" progress="45" helper-text="2 MB of 4 MB"></mms-loading-bar>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">State</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">state</code> drives both the fill color and what is reported to
        assistive technology. <code style="\${t.monoSm}">loading</code> (default) fills the track to
        <code style="\${t.monoSm}">progress</code>. <code style="\${t.monoSm}">indeterminate</code> sweeps
        and reports no value at all. <code style="\${t.monoSm}">success</code> and
        <code style="\${t.monoSm}">error</code> are terminal — both fill the track regardless of
        <code style="\${t.monoSm}">progress</code>, because what they report is the outcome, not how
        far the process got. A partial bar in either state reads as still running.
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">loading (default)</h3>
          <mms-loading-bar label="Syncing" progress="60"></mms-loading-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">indeterminate</h3>
          <mms-loading-bar label="Syncing" state="indeterminate"></mms-loading-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">success</h3>
          <mms-loading-bar label="Syncing" state="success" progress="100"></mms-loading-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">error</h3>
          <mms-loading-bar
            label="Syncing"
            state="error"
            progress="60"
            error-text="Connection lost. Retry to resume."
          ></mms-loading-bar>
        </div>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm}">
          A bar left at <code style="\${t.monoSm}">state="loading"</code> that reaches
          <code style="\${t.monoSm}">progress="100"</code> renders as success and reads "Complete" — a
          finished process is a successful one, so consumers streaming a percentage don't have to
          special-case the last tick. Setting <code style="\${t.monoSm}">state</code> explicitly always wins.
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">size</code> sets track thickness: <code style="\${t.monoSm}">sm</code>
        (8px), <code style="\${t.monoSm}">md</code> (12px, default), or <code style="\${t.monoSm}">lg</code>
        (16px) — the same three rungs as <code style="\${t.monoSm}">mms-progress-bar</code>.
      </p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">sm</h3>
          <mms-loading-bar label="Loading" size="sm" progress="55"></mms-loading-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">md (default)</h3>
          <mms-loading-bar label="Loading" size="md" progress="55"></mms-loading-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">lg</h3>
          <mms-loading-bar label="Loading" size="lg" progress="55"></mms-loading-bar>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Helper and error text</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">helper-text</code> carries secondary detail under the track and is
        hidden when empty. It is <em>not</em> suppressed in the error state — it still describes what was
        being attempted. <code style="\${t.monoSm}">error-text</code> renders below it with a warning icon,
        only when <code style="\${t.monoSm}">state="error"</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: \${space.subsection};">
        <mms-loading-bar
          label="Uploading evidence"
          state="error"
          progress="72"
          helper-text="2.9 MB of 4 MB"
          error-text="Upload failed. Check your connection and try again."
        ></mms-loading-bar>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Driving it from a live process</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Every prop is reactive. Assign to it and the bar re-renders in place — no remount, no flicker,
        no need to replace the element. A typical upload wiring:
      </p>
      <pre style="\${doc.pre}"><code>const bar = document.querySelector('mms-loading-bar');

bar.label = 'Uploading evidence';
bar.helperText = 'Starting…';        // set it now, not on the first tick — see below

xhr.upload.onprogress = (e) =&gt; {
  bar.progress = (e.loaded / e.total) * 100;
  bar.helperText = \\\`\\\${fmt(e.loaded)} of \\\${fmt(e.total)}\\\`;
};

xhr.onload  = () =&gt; { bar.state = 'success'; bar.helperText = 'Saved'; };
xhr.onerror = () =&gt; { bar.state = 'error'; bar.errorText = 'Upload failed. Try again.'; };</code></pre>

      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Three behaviors worth knowing before you wire it up:
      </p>
      <ul style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin: 0 0 \${space.content}; padding-left: var(--spacing-md2);">
        <li style="margin-bottom: \${space.label};">
          <code style="\${t.monoSm}">progress</code> reaching 100 while
          <code style="\${t.monoSm}">state</code> is still <code style="\${t.monoSm}">loading</code> renders
          as success on its own — you do not have to set both. A finished process is a successful one.
        </li>
        <li style="margin-bottom: \${space.label};">
          <code style="\${t.monoSm}">success</code> and <code style="\${t.monoSm}">error</code> fill the
          track regardless of <code style="\${t.monoSm}">progress</code>, so you can flip to a terminal
          state mid-upload without first winding the number to 100.
        </li>
        <li>
          <code style="\${t.monoSm}">helper-text</code> and <code style="\${t.monoSm}">error-text</code>
          hide when empty. Setting either back to <code style="\${t.monoSm}">''</code> removes that line
          again — useful for clearing stale detail on retry.
        </li>
      </ul>

      <div style="margin-bottom: \${space.content};">
        <mms-inline-alert
          alert-type="caution"
          role="note"
          aria-live="off"
          .dismissible=\${false}
          summary="Set helper text before the first tick, not on it."
          message="The supporting block only renders when there is something in it, so a bar that starts with an empty helper-text gets taller the moment you set one — 25px at the default size — pushing everything below it down the page after the user has already seen the layout settle. If a helper string is coming, put a placeholder in the initial render. Once the line exists, every subsequent update is height-stable."
        ></mms-inline-alert>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm} margin-bottom: \${space.content};">
          <strong>Screen readers hear the value, not the helper text.</strong> The track is
          <code style="\${t.monoSm}">role="progressbar"</code> — assistive technology watches that role's
          value and announces changes on its own, so <code style="\${t.monoSm}">bar.progress = 50</code>
          is heard without you doing anything. Helper text is ordinary text: not a live region, not wired
          to <code style="\${t.monoSm}">aria-describedby</code>, so changing it announces nothing.
        </p>
        <p style="\${t.bodySm}">
          That is fine when helper text restates the value — <em>"2 MB of 4 MB"</em> alongside
          <em>"50%"</em> costs a screen reader user nothing. It is not fine when helper text is the only
          place something appears, like <em>"Retrying — attempt 2 of 3"</em>. For detail that must be
          heard, use <code style="\${t.monoSm}">error-text</code> (its row carries
          <code style="\${t.monoSm}">role="alert"</code> and is announced) or own the announcement in your
          application's live region.
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Hidden label</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">show-label</code> hides the visible label row (and the value text with
        it) — the label is still exposed to assistive technology, now via
        <code style="\${t.monoSm}">aria-label</code> instead of <code style="\${t.monoSm}">aria-labelledby</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: \${space.subsection};">
        <mms-loading-bar label="Background sync" show-label="false" state="indeterminate"></mms-loading-bar>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Value placement</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">value-placement</code> moves the value text. <code style="\${t.monoSm}">label-row</code>
        (default) right-aligns it against the label above the track; <code style="\${t.monoSm}">inline</code>
        sets it beside the track, which reads better in a narrow column. Same two options as
        <code style="\${t.monoSm}">mms-progress-bar</code>. Indeterminate and error report no value, so both
        render the track alone in either mode.
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">label-row (default)</h3>
          <mms-loading-bar label="Syncing" progress="45"></mms-loading-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">inline</h3>
          <mms-loading-bar label="Syncing" progress="45" value-placement="inline"></mms-loading-bar>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Color scheme</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">color-scheme</code> sets the fill while the process is
        <strong>in flight</strong> — <code style="\${t.monoSm}">primary</code> (default),
        <code style="\${t.monoSm}">secondary</code>, <code style="\${t.monoSm}">accent</code>, or
        <code style="\${t.monoSm}">onyx</code>, the same four solid step-9 fills as
        <code style="\${t.monoSm}">mms-progress-bar</code>.
      </p>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">primary</h3>
          <mms-loading-bar label="Syncing" progress="60"></mms-loading-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">secondary</h3>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="secondary"></mms-loading-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">accent</h3>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="accent"></mms-loading-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">onyx</h3>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="onyx"></mms-loading-bar>
        </div>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm}">
          <strong>The terminal states always override it.</strong> A resolved process reports what
          happened, not what brand it belongs to — <code style="\${t.monoSm}">success</code> is always green
          and <code style="\${t.monoSm}">error</code> always red, whatever
          <code style="\${t.monoSm}">color-scheme</code> is set to. That includes the auto-promoted case:
          <code style="\${t.monoSm}">state="loading"</code> at <code style="\${t.monoSm}">progress="100"</code>
          turns green along with reading "Complete." This is the one behavioral difference from
          <code style="\${t.monoSm}">mms-progress-bar</code>'s otherwise identical
          <code style="\${t.monoSm}">color-scheme</code>, and it exists because Progress Bar has no terminal
          states to conflict with.
        </p>
        </div>
      </mms-card>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: \${space.content}; margin-bottom: \${space.subsection};">
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">accent · loading</h3>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="accent"></mms-loading-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">accent · loading @ 100</h3>
          <mms-loading-bar label="Syncing" progress="100" color-scheme="accent"></mms-loading-bar>
        </div>
        <div style="\${doc.panel}">
          <h3 style="\${t.h3}">accent · error</h3>
          <mms-loading-bar label="Syncing" state="error" progress="60" color-scheme="accent"></mms-loading-bar>
        </div>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <ul style="\${t.bodySm} \${doc.muted} padding-left: var(--spacing-lg1); margin: 0 0 \${space.subsection};">
        <li style="margin-bottom: \${space.label};">
          <strong>Not interactive:</strong> mms-loading-bar has no <code style="\${t.monoSm}">tabindex</code>,
          no <code style="\${t.monoSm}">:hover</code>/<code style="\${t.monoSm}">:focus-visible</code> state,
          and no keyboard model — it is a live status display, not a control.
        </li>
        <li>
          <strong>Reduced motion keeps the indicator visible:</strong> Under
          <code style="\${t.monoSm}">prefers-reduced-motion: reduce</code> the indeterminate sweep stops and
          the bar fills the track instead of disappearing. Simply canceling the animation would park the
          30%-wide bar off the left edge — an invisible loading indicator for exactly the users who opted
          out of motion. A full static bar is also honest: an indeterminate bar was never communicating a
          quantity.
        </li>
      </ul>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['loading-bar'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Role:</strong> Exposed as <code style="\${t.monoSm}">role="progressbar"</code> with <code style="\${t.monoSm}">aria-valuemin</code>/<code style="\${t.monoSm}">aria-valuemax</code> always present.</li>
        <li style="margin-bottom: \${space.label};"><strong>Indeterminate:</strong> <code style="\${t.monoSm}">aria-valuenow</code> is <em>omitted entirely</em> — the ARIA-spec signal for "progress is indeterminate." It is not set to 0, and not set to the string "undefined." <code style="\${t.monoSm}">aria-busy="true"</code> is set alongside it.</li>
        <li style="margin-bottom: \${space.label};"><strong>Value text:</strong> <code style="\${t.monoSm}">aria-valuetext</code> mirrors the visible value exactly — a percentage while loading, "Complete" on success. It is absent for indeterminate and error, which report no quantity.</li>
        <li style="margin-bottom: \${space.label};"><strong>Error:</strong> The error row carries <code style="\${t.monoSm}">role="alert"</code>, so the message is announced the moment the process fails — the user was not doing the work and may not have been watching, so they have to be told.</li>
        <li style="margin-bottom: \${space.label};"><strong>Accessible name:</strong> <code style="\${t.monoSm}">aria-labelledby</code> points at the visible label when shown; falls back to <code style="\${t.monoSm}">aria-label</code> carrying the same text when the label row is hidden — the accessible name is never lost.</li>
        <li><strong>No focus stop:</strong> mms-loading-bar is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        None. mms-loading-bar is not focusable and has no keyboard interaction model.
      </p>

    </div>
  \`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    label: 'Syncing records',
    showLabel: true,
    state: 'loading',
    progress: 45,
    size: 'md',
    valuePlacement: 'label-row',
    colorScheme: 'primary',
    helperText: '2 MB of 4 MB',
    errorText: 'Connection lost. Retry to resume.',
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
      description: 'Progress value, 0–100 (clamped). Ignored when state is indeterminate; the terminal states (success, error) fill the track regardless',
      table: {
        category: 'Content'
      }
    },
    helperText: {
      name: 'Helper Text',
      control: 'text',
      description: 'Secondary detail under the track. Hidden when empty; not suppressed by the error state',
      table: {
        category: 'Content'
      }
    },
    errorText: {
      name: 'Error Text',
      control: 'text',
      description: 'Error message with warning icon — rendered only when state is error',
      table: {
        category: 'Content'
      }
    },
    state: {
      name: 'State',
      control: 'select',
      options: ['loading', 'indeterminate', 'success', 'error'],
      description: 'loading (default) | indeterminate | success | error. loading at progress 100 renders as success',
      table: {
        category: 'Visual'
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
      description: 'Where the value renders: label-row (above the track, default) | inline (beside the track). Indeterminate and error have no value to place',
      table: {
        category: 'Visual'
      }
    },
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'In-flight fill color. Applies only while loading or indeterminate — success and error always override it with their semantic green/red',
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
      description: 'Accepted as a global attribute passthrough — mms-loading-bar has no compact-specific styling since it has no interactive touch-target dimension',
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
            state: string;
            progress: number;
            size: string;
            valuePlacement: string;
            colorScheme: string;
            helperText: string;
            errorText: string;
            density: string;
          };
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.label) attrs.push(\`label="\${a.label}"\`);
          if (!a.showLabel) attrs.push('show-label="false"');
          if (a.state !== 'loading') attrs.push(\`state="\${a.state}"\`);
          if (a.state !== 'indeterminate' && a.state !== 'error') attrs.push(\`progress="\${a.progress}"\`);
          if (a.size !== 'md') attrs.push(\`size="\${a.size}"\`);
          if (a.valuePlacement !== 'label-row') attrs.push(\`value-placement="\${a.valuePlacement}"\`);
          if (a.colorScheme !== 'primary') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.helperText) attrs.push(\`helper-text="\${a.helperText}"\`);
          if (a.state === 'error' && a.errorText) attrs.push(\`error-text="\${a.errorText}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-loading-bar\\n  \${attrs.join('\\n  ')}\\n></mms-loading-bar>\`;
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
    state: string;
    progress: number;
    size: string;
    valuePlacement: string;
    colorScheme: string;
    helperText: string;
    errorText: string;
    density: string;
  }) => html\`
    <mms-loading-bar
      label=\${args.label}
      .showLabel=\${args.showLabel}
      state=\${args.state}
      progress=\${args.progress}
      size=\${args.size}
      value-placement=\${args.valuePlacement}
      color-scheme=\${args.colorScheme}
      helper-text=\${args.helperText}
      error-text=\${args.errorText}
      data-density=\${args.density === 'compact' ? 'compact' : nothing}
    ></mms-loading-bar>
  \`
}`,...F.parameters?.docs?.source}}},I=[`Overview`,`PlaygroundStory`]}));L();export{P as Overview,F as PlaygroundStory,I as __namedExportsOrder,N as default,L as n,M as t};