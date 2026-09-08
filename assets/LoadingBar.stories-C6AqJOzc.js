import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,t as d}from"./decorate-Bygya6Tu.js";import{t as f}from"./mms-icon.component-BJPQucU2.js";import{a as p,o as m,r as h,t as g}from"./a11y-outcome-DdXFaPju.js";var _,v,y=e((()=>{o(),u(),f(),l(),_={fromAttribute:e=>e!==`false`,toAttribute:e=>e?null:`false`},v=class extends i{constructor(...e){super(...e),this.label=``,this.showLabel=!0,this.size=`md`,this.progress=0,this.state=`loading`,this.valuePlacement=`label-row`,this.colorScheme=`primary`,this.helperText=``,this.errorText=``}static{this.styles=r`
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
      left: 0;
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
  `}get clampedProgress(){return Math.min(100,Math.max(0,this.progress))}get effectiveState(){return this.state===`loading`&&this.clampedProgress===100?`success`:this.state}get valueText(){let e=this.effectiveState;return e===`indeterminate`||e===`error`?``:e===`success`?`Complete`:`${Math.round(this.clampedProgress)}%`}render(){let e=this.effectiveState,t=e===`indeterminate`,r=e===`error`,i=e===`success`,o=this.valueText,s=this.valuePlacement===`inline`,c=r||i?100:this.clampedProgress,l=a`
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
    `}},d([c({type:String})],v.prototype,`label`,void 0),d([c({reflect:!0,attribute:`show-label`,converter:_})],v.prototype,`showLabel`,void 0),d([c({type:String,reflect:!0})],v.prototype,`size`,void 0),d([c({type:Number,reflect:!0})],v.prototype,`progress`,void 0),d([c({type:String,reflect:!0})],v.prototype,`state`,void 0),d([c({type:String,reflect:!0,attribute:`value-placement`})],v.prototype,`valuePlacement`,void 0),d([c({type:String,reflect:!0,attribute:`color-scheme`})],v.prototype,`colorScheme`,void 0),d([c({type:String,reflect:!0,attribute:`helper-text`})],v.prototype,`helperText`,void 0),d([c({type:String,reflect:!0,attribute:`error-text`})],v.prototype,`errorText`,void 0),v=d([s(`mms-loading-bar`)],v)})),b=t({Overview:()=>T,PlaygroundStory:()=>E,__namedExportsOrder:()=>D,default:()=>x}),x,S,C,w,T,E,D,O=e((()=>{o(),y(),p(),g(),x={title:`Status Display/Loading Bar`,tags:[`!autodocs`]},S={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},C=`680px`,w=`960px`,T={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${w}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${S.h1}">Loading Bar</h1>
      <p style="${S.body} opacity: 0.85; max-width: ${C}; margin-bottom: 2rem;">
        Shows the status of work the machine is doing — uploading a file, saving a form, syncing records,
        loading a page's data. It covers the whole run: filling toward a known percentage, sweeping when
        there's no way to know how long it will take, and settling into success or an error once it's done.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0; max-width: ${C};">
        <p style="${S.bodySm} margin: 0 0 0.75rem;">
          <strong>Loading Bar or Progress Bar?</strong> It comes down to what moves the number.
        </p>
        <ul style="${S.bodySm} margin: 0 0 0.75rem; padding-left: 1.25rem;">
          <li style="margin-bottom: 0.35rem;">
            <strong>The machine is working.</strong> Uploading a file, saving a form, syncing records,
            fetching a page's data. The bar moves on its own while the user waits. Use
            <code style="${S.monoSm}">mms-loading-bar</code>.
          </li>
          <li>
            <strong>The user is working.</strong> Question 6 of 10 in a questionnaire, step 3 of 5 in an
            application. The bar moves when the user does something. Use
            <code style="${S.monoSm}">mms-progress-bar</code>.
          </li>
        </ul>
        <p style="${S.bodySm} margin: 0;">
          That's also why only Loading Bar has an indeterminate mode and success/error states: a machine
          job can take an unknown amount of time, can fail, and often finishes when nobody is looking, so
          it has to report the outcome. Someone filling out a questionnaire always knows where they are.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${S.h2}">Basic usage</h2>
      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-loading-bar label="Syncing records" progress="45" helper-text="2 MB of 4 MB"></mms-loading-bar>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${S.h2}">State</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        <code style="${S.monoSm}">state</code> drives both the fill color and what is reported to
        assistive technology. <code style="${S.monoSm}">loading</code> (default) fills the track to
        <code style="${S.monoSm}">progress</code>. <code style="${S.monoSm}">indeterminate</code> sweeps
        and reports no value at all. <code style="${S.monoSm}">success</code> and
        <code style="${S.monoSm}">error</code> are terminal — both fill the track regardless of
        <code style="${S.monoSm}">progress</code>, because what they report is the outcome, not how
        far the process got. A partial bar in either state reads as still running.
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">loading (default)</p>
          <mms-loading-bar label="Syncing" progress="60"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">indeterminate</p>
          <mms-loading-bar label="Syncing" state="indeterminate"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">success</p>
          <mms-loading-bar label="Syncing" state="success" progress="100"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">error</p>
          <mms-loading-bar
            label="Syncing"
            state="error"
            progress="60"
            error-text="Connection lost. Retry to resume."
          ></mms-loading-bar>
        </div>
      </div>

      <div style="background: rgba(128,128,128,0.06); border-left: 3px solid rgba(128,128,128,0.4); padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0; max-width: ${C};">
        <p style="${S.bodySm} margin: 0;">
          A bar left at <code style="${S.monoSm}">state="loading"</code> that reaches
          <code style="${S.monoSm}">progress="100"</code> renders as success and reads "Complete" — a
          finished process is a successful one, so consumers streaming a percentage don't have to
          special-case the last tick. Setting <code style="${S.monoSm}">state</code> explicitly always wins.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${S.h2}">Size</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        <code style="${S.monoSm}">size</code> sets track thickness: <code style="${S.monoSm}">sm</code>
        (8px), <code style="${S.monoSm}">md</code> (12px, default), or <code style="${S.monoSm}">lg</code>
        (16px) — the same three rungs as <code style="${S.monoSm}">mms-progress-bar</code>.
      </p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">sm</p>
          <mms-loading-bar label="Loading" size="sm" progress="55"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">md (default)</p>
          <mms-loading-bar label="Loading" size="md" progress="55"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">lg</p>
          <mms-loading-bar label="Loading" size="lg" progress="55"></mms-loading-bar>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${S.h2}">Helper and error text</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        <code style="${S.monoSm}">helper-text</code> carries secondary detail under the track and is
        hidden when empty. It is <em>not</em> suppressed in the error state — it still describes what was
        being attempted. <code style="${S.monoSm}">error-text</code> renders below it with a warning icon,
        only when <code style="${S.monoSm}">state="error"</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-loading-bar
          label="Uploading evidence"
          state="error"
          progress="72"
          helper-text="2.9 MB of 4 MB"
          error-text="Upload failed. Check your connection and try again."
        ></mms-loading-bar>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${S.h2}">Driving it from a live process</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        Every prop is reactive. Assign to it and the bar re-renders in place — no remount, no flicker,
        no need to replace the element. A typical upload wiring:
      </p>
      <pre style="${S.monoSm} background: rgba(128,128,128,0.06); border: 1px solid rgba(128,128,128,0.2); border-radius: 6px; padding: 0.75rem; margin: 0 0 1.5rem; overflow-x: auto;"><code>const bar = document.querySelector('mms-loading-bar');

bar.label = 'Uploading evidence';
bar.helperText = 'Starting…';        // set it now, not on the first tick — see below

xhr.upload.onprogress = (e) =&gt; {
  bar.progress = (e.loaded / e.total) * 100;
  bar.helperText = \`\${fmt(e.loaded)} of \${fmt(e.total)}\`;
};

xhr.onload  = () =&gt; { bar.state = 'success'; bar.helperText = 'Saved'; };
xhr.onerror = () =&gt; { bar.state = 'error'; bar.errorText = 'Upload failed. Try again.'; };</code></pre>

      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1rem;">
        Three behaviors worth knowing before you wire it up:
      </p>
      <ul style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin: 0 0 1.5rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          <code style="${S.monoSm}">progress</code> reaching 100 while
          <code style="${S.monoSm}">state</code> is still <code style="${S.monoSm}">loading</code> renders
          as success on its own — you do not have to set both. A finished process is a successful one.
        </li>
        <li style="margin-bottom: 0.5rem;">
          <code style="${S.monoSm}">success</code> and <code style="${S.monoSm}">error</code> fill the
          track regardless of <code style="${S.monoSm}">progress</code>, so you can flip to a terminal
          state mid-upload without first winding the number to 100.
        </li>
        <li>
          <code style="${S.monoSm}">helper-text</code> and <code style="${S.monoSm}">error-text</code>
          hide when empty. Setting either back to <code style="${S.monoSm}">''</code> removes that line
          again — useful for clearing stale detail on retry.
        </li>
      </ul>

      <div style="background: rgba(245, 158, 11, 0.08); border-left: 3px solid #F59E0B; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0; max-width: ${C};">
        <p style="${S.bodySm} margin: 0;">
          <strong>Set helper text before the first tick, not on it.</strong> The supporting block only
          renders when there is something in it, so a bar that starts with an empty
          <code style="${S.monoSm}">helper-text</code> gets taller the moment you set one — 25px at the
          default size — pushing everything below it down the page after the user has already seen the
          layout settle. If a helper string is coming, put a placeholder in the initial render. Once the
          line exists, every subsequent update is height-stable.
        </p>
      </div>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; max-width: ${C}; border-radius: 0 6px 6px 0;">
        <p style="${S.bodySm} margin: 0 0 0.75rem;">
          <strong>Screen readers hear the value, not the helper text.</strong> The track is
          <code style="${S.monoSm}">role="progressbar"</code> — assistive technology watches that role's
          value and announces changes on its own, so <code style="${S.monoSm}">bar.progress = 50</code>
          is heard without you doing anything. Helper text is ordinary text: not a live region, not wired
          to <code style="${S.monoSm}">aria-describedby</code>, so changing it announces nothing.
        </p>
        <p style="${S.bodySm} margin: 0;">
          That is fine when helper text restates the value — <em>"2 MB of 4 MB"</em> alongside
          <em>"50%"</em> costs a screen reader user nothing. It is not fine when helper text is the only
          place something appears, like <em>"Retrying — attempt 2 of 3"</em>. For detail that must be
          heard, use <code style="${S.monoSm}">error-text</code> (its row carries
          <code style="${S.monoSm}">role="alert"</code> and is announced) or own the announcement in your
          application's live region.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${S.h2}">Hidden label</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        <code style="${S.monoSm}">show-label</code> hides the visible label row (and the value text with
        it) — the label is still exposed to assistive technology, now via
        <code style="${S.monoSm}">aria-label</code> instead of <code style="${S.monoSm}">aria-labelledby</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-loading-bar label="Background sync" show-label="false" state="indeterminate"></mms-loading-bar>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${S.h2}">Value placement</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        <code style="${S.monoSm}">value-placement</code> moves the value text. <code style="${S.monoSm}">label-row</code>
        (default) right-aligns it against the label above the track; <code style="${S.monoSm}">inline</code>
        sets it beside the track, which reads better in a narrow column. Same two options as
        <code style="${S.monoSm}">mms-progress-bar</code>. Indeterminate and error report no value, so both
        render the track alone in either mode.
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">label-row (default)</p>
          <mms-loading-bar label="Syncing" progress="45"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">inline</p>
          <mms-loading-bar label="Syncing" progress="45" value-placement="inline"></mms-loading-bar>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${S.h2}">Color scheme</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        <code style="${S.monoSm}">color-scheme</code> sets the fill while the process is
        <strong>in flight</strong> — <code style="${S.monoSm}">primary</code> (default),
        <code style="${S.monoSm}">secondary</code>, <code style="${S.monoSm}">accent</code>, or
        <code style="${S.monoSm}">onyx</code>, the same four solid step-9 fills as
        <code style="${S.monoSm}">mms-progress-bar</code>.
      </p>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-bottom: 1.5rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">primary</p>
          <mms-loading-bar label="Syncing" progress="60"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">secondary</p>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="secondary"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">accent</p>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="accent"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">onyx</p>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="onyx"></mms-loading-bar>
        </div>
      </div>

      <div style="background: rgba(128,128,128,0.06); border-left: 3px solid rgba(128,128,128,0.4); padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0; max-width: ${C};">
        <p style="${S.bodySm} margin: 0;">
          <strong>The terminal states always override it.</strong> A resolved process reports what
          happened, not what brand it belongs to — <code style="${S.monoSm}">success</code> is always green
          and <code style="${S.monoSm}">error</code> always red, whatever
          <code style="${S.monoSm}">color-scheme</code> is set to. That includes the auto-promoted case:
          <code style="${S.monoSm}">state="loading"</code> at <code style="${S.monoSm}">progress="100"</code>
          turns green along with reading "Complete." This is the one behavioral difference from
          <code style="${S.monoSm}">mms-progress-bar</code>'s otherwise identical
          <code style="${S.monoSm}">color-scheme</code>, and it exists because Progress Bar has no terminal
          states to conflict with.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">accent · loading</p>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="accent"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">accent · loading @ 100</p>
          <mms-loading-bar label="Syncing" progress="100" color-scheme="accent"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${S.h3}">accent · error</p>
          <mms-loading-bar label="Syncing" state="error" progress="60" color-scheme="accent"></mms-loading-bar>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${S.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${S.bodySm} margin: 0;">
          <strong>Not interactive.</strong> mms-loading-bar has no <code style="${S.monoSm}">tabindex</code>,
          no <code style="${S.monoSm}">:hover</code>/<code style="${S.monoSm}">:focus-visible</code> state,
          and no keyboard model — it is a live status display, not a control.
        </p>
      </div>

      <div style="background: rgba(168, 85, 247, 0.08); border-left: 3px solid #A855F7; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${S.bodySm} margin: 0;">
          <strong>Reduced motion keeps the indicator visible.</strong> Under
          <code style="${S.monoSm}">prefers-reduced-motion: reduce</code> the indeterminate sweep stops and
          the bar fills the track instead of disappearing. Simply cancelling the animation would park the
          30%-wide bar off the left edge — an invisible loading indicator for exactly the users who opted
          out of motion. A full static bar is also honest: an indeterminate bar was never communicating a
          quantity.
        </p>
      </div>

      <h3 style="${S.h3}">WCAG 2.2 AA Compliance</h3>
      ${h(m[`loading-bar`].rows)}

      <h3 style="${S.h3}">Screen Reader Behavior</h3>
      <ul style="${S.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Role:</strong> Exposed as <code style="${S.monoSm}">role="progressbar"</code> with <code style="${S.monoSm}">aria-valuemin</code>/<code style="${S.monoSm}">aria-valuemax</code> always present.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Indeterminate:</strong> <code style="${S.monoSm}">aria-valuenow</code> is <em>omitted entirely</em> — the ARIA-spec signal for "progress is indeterminate." It is not set to 0, and not set to the string "undefined." <code style="${S.monoSm}">aria-busy="true"</code> is set alongside it.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Value text:</strong> <code style="${S.monoSm}">aria-valuetext</code> mirrors the visible value exactly — a percentage while loading, "Complete" on success. It is absent for indeterminate and error, which report no quantity.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> The error row carries <code style="${S.monoSm}">role="alert"</code>, so the message is announced the moment the process fails — the user was not doing the work and may not have been watching, so they have to be told.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Accessible name:</strong> <code style="${S.monoSm}">aria-labelledby</code> points at the visible label when shown; falls back to <code style="${S.monoSm}">aria-label</code> carrying the same text when the label row is hidden — the accessible name is never lost.</li>
        <li><strong>No focus stop:</strong> mms-loading-bar is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="${S.h3}">Keyboard Navigation</h3>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 2rem;">
        None. mms-loading-bar is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},E={name:`Playground`,tags:[`!dev`],args:{label:`Syncing records`,showLabel:!0,state:`loading`,progress:45,size:`md`,valuePlacement:`label-row`,colorScheme:`primary`,helperText:`2 MB of 4 MB`,errorText:`Connection lost. Retry to resume.`,theme:`maximus`,density:`default`},decorators:[e=>a`
      <div
        style="
          display: flex;
          justify-content: center;
          padding: 1.5rem 2rem;
        "
      >
        <div style="max-width: 360px; width: 100%;">${e()}</div>
      </div>
    `],argTypes:{label:{name:`Label`,control:`text`,description:`Label text describing the process`,table:{category:`Content`}},showLabel:{name:`Show Label`,control:`boolean`,description:`Show/hide the visible label row — still exposed to AT via aria-label when hidden`,table:{category:`Content`}},progress:{name:`Progress`,control:{type:`range`,min:0,max:100,step:1},description:`Progress value, 0–100 (clamped). Ignored when state is indeterminate; the terminal states (success, error) fill the track regardless`,table:{category:`Content`}},helperText:{name:`Helper Text`,control:`text`,description:`Secondary detail under the track. Hidden when empty; not suppressed by the error state`,table:{category:`Content`}},errorText:{name:`Error Text`,control:`text`,description:`Error message with warning icon — rendered only when state is error`,table:{category:`Content`}},state:{name:`State`,control:`select`,options:[`loading`,`indeterminate`,`success`,`error`],description:`loading (default) | indeterminate | success | error. loading at progress 100 renders as success`,table:{category:`Visual`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Track thickness: sm (8px) | md (12px, default) | lg (16px)`,table:{category:`Visual`}},valuePlacement:{name:`Value Placement`,control:`select`,options:[`label-row`,`inline`],description:`Where the value renders: label-row (above the track, default) | inline (beside the track). Indeterminate and error have no value to place`,table:{category:`Visual`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`In-flight fill color. Applies only while loading or indeterminate — success and error always override it with their semantic green/red`,table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`uss-oh-dvs`,`default`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-loading-bar has no compact-specific styling since it has no interactive touch-target dimension`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.showLabel||r.push(`show-label="false"`),n.state!==`loading`&&r.push(`state="${n.state}"`),n.state!==`indeterminate`&&n.state!==`error`&&r.push(`progress="${n.progress}"`),n.size!==`md`&&r.push(`size="${n.size}"`),n.valuePlacement!==`label-row`&&r.push(`value-placement="${n.valuePlacement}"`),n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.helperText&&r.push(`helper-text="${n.helperText}"`),n.state===`error`&&n.errorText&&r.push(`error-text="${n.errorText}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-loading-bar\n  ${r.join(`
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
  `},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Loading Bar</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Shows the status of work the machine is doing — uploading a file, saving a form, syncing records,
        loading a page's data. It covers the whole run: filling toward a known percentage, sweeping when
        there's no way to know how long it will take, and settling into success or an error once it's done.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0; max-width: \${PROSE_MAX};">
        <p style="\${t.bodySm} margin: 0 0 0.75rem;">
          <strong>Loading Bar or Progress Bar?</strong> It comes down to what moves the number.
        </p>
        <ul style="\${t.bodySm} margin: 0 0 0.75rem; padding-left: 1.25rem;">
          <li style="margin-bottom: 0.35rem;">
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

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-loading-bar label="Syncing records" progress="45" helper-text="2 MB of 4 MB"></mms-loading-bar>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">State</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">state</code> drives both the fill color and what is reported to
        assistive technology. <code style="\${t.monoSm}">loading</code> (default) fills the track to
        <code style="\${t.monoSm}">progress</code>. <code style="\${t.monoSm}">indeterminate</code> sweeps
        and reports no value at all. <code style="\${t.monoSm}">success</code> and
        <code style="\${t.monoSm}">error</code> are terminal — both fill the track regardless of
        <code style="\${t.monoSm}">progress</code>, because what they report is the outcome, not how
        far the process got. A partial bar in either state reads as still running.
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">loading (default)</p>
          <mms-loading-bar label="Syncing" progress="60"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">indeterminate</p>
          <mms-loading-bar label="Syncing" state="indeterminate"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">success</p>
          <mms-loading-bar label="Syncing" state="success" progress="100"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">error</p>
          <mms-loading-bar
            label="Syncing"
            state="error"
            progress="60"
            error-text="Connection lost. Retry to resume."
          ></mms-loading-bar>
        </div>
      </div>

      <div style="background: rgba(128,128,128,0.06); border-left: 3px solid rgba(128,128,128,0.4); padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0; max-width: \${PROSE_MAX};">
        <p style="\${t.bodySm} margin: 0;">
          A bar left at <code style="\${t.monoSm}">state="loading"</code> that reaches
          <code style="\${t.monoSm}">progress="100"</code> renders as success and reads "Complete" — a
          finished process is a successful one, so consumers streaming a percentage don't have to
          special-case the last tick. Setting <code style="\${t.monoSm}">state</code> explicitly always wins.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">size</code> sets track thickness: <code style="\${t.monoSm}">sm</code>
        (8px), <code style="\${t.monoSm}">md</code> (12px, default), or <code style="\${t.monoSm}">lg</code>
        (16px) — the same three rungs as <code style="\${t.monoSm}">mms-progress-bar</code>.
      </p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">sm</p>
          <mms-loading-bar label="Loading" size="sm" progress="55"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">md (default)</p>
          <mms-loading-bar label="Loading" size="md" progress="55"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">lg</p>
          <mms-loading-bar label="Loading" size="lg" progress="55"></mms-loading-bar>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Helper and error text</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">helper-text</code> carries secondary detail under the track and is
        hidden when empty. It is <em>not</em> suppressed in the error state — it still describes what was
        being attempted. <code style="\${t.monoSm}">error-text</code> renders below it with a warning icon,
        only when <code style="\${t.monoSm}">state="error"</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-loading-bar
          label="Uploading evidence"
          state="error"
          progress="72"
          helper-text="2.9 MB of 4 MB"
          error-text="Upload failed. Check your connection and try again."
        ></mms-loading-bar>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Driving it from a live process</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Every prop is reactive. Assign to it and the bar re-renders in place — no remount, no flicker,
        no need to replace the element. A typical upload wiring:
      </p>
      <pre style="\${t.monoSm} background: rgba(128,128,128,0.06); border: 1px solid rgba(128,128,128,0.2); border-radius: 6px; padding: 0.75rem; margin: 0 0 1.5rem; overflow-x: auto;"><code>const bar = document.querySelector('mms-loading-bar');

bar.label = 'Uploading evidence';
bar.helperText = 'Starting…';        // set it now, not on the first tick — see below

xhr.upload.onprogress = (e) =&gt; {
  bar.progress = (e.loaded / e.total) * 100;
  bar.helperText = \\\`\\\${fmt(e.loaded)} of \\\${fmt(e.total)}\\\`;
};

xhr.onload  = () =&gt; { bar.state = 'success'; bar.helperText = 'Saved'; };
xhr.onerror = () =&gt; { bar.state = 'error'; bar.errorText = 'Upload failed. Try again.'; };</code></pre>

      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1rem;">
        Three behaviors worth knowing before you wire it up:
      </p>
      <ul style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin: 0 0 1.5rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">
          <code style="\${t.monoSm}">progress</code> reaching 100 while
          <code style="\${t.monoSm}">state</code> is still <code style="\${t.monoSm}">loading</code> renders
          as success on its own — you do not have to set both. A finished process is a successful one.
        </li>
        <li style="margin-bottom: 0.5rem;">
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

      <div style="background: rgba(245, 158, 11, 0.08); border-left: 3px solid #F59E0B; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0; max-width: \${PROSE_MAX};">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Set helper text before the first tick, not on it.</strong> The supporting block only
          renders when there is something in it, so a bar that starts with an empty
          <code style="\${t.monoSm}">helper-text</code> gets taller the moment you set one — 25px at the
          default size — pushing everything below it down the page after the user has already seen the
          layout settle. If a helper string is coming, put a placeholder in the initial render. Once the
          line exists, every subsequent update is height-stable.
        </p>
      </div>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; max-width: \${PROSE_MAX}; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0 0 0.75rem;">
          <strong>Screen readers hear the value, not the helper text.</strong> The track is
          <code style="\${t.monoSm}">role="progressbar"</code> — assistive technology watches that role's
          value and announces changes on its own, so <code style="\${t.monoSm}">bar.progress = 50</code>
          is heard without you doing anything. Helper text is ordinary text: not a live region, not wired
          to <code style="\${t.monoSm}">aria-describedby</code>, so changing it announces nothing.
        </p>
        <p style="\${t.bodySm} margin: 0;">
          That is fine when helper text restates the value — <em>"2 MB of 4 MB"</em> alongside
          <em>"50%"</em> costs a screen reader user nothing. It is not fine when helper text is the only
          place something appears, like <em>"Retrying — attempt 2 of 3"</em>. For detail that must be
          heard, use <code style="\${t.monoSm}">error-text</code> (its row carries
          <code style="\${t.monoSm}">role="alert"</code> and is announced) or own the announcement in your
          application's live region.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Hidden label</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">show-label</code> hides the visible label row (and the value text with
        it) — the label is still exposed to assistive technology, now via
        <code style="\${t.monoSm}">aria-label</code> instead of <code style="\${t.monoSm}">aria-labelledby</code>.
      </p>
      <div style="max-width: 360px; margin-bottom: 2rem;">
        <mms-loading-bar label="Background sync" show-label="false" state="indeterminate"></mms-loading-bar>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Value placement</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">value-placement</code> moves the value text. <code style="\${t.monoSm}">label-row</code>
        (default) right-aligns it against the label above the track; <code style="\${t.monoSm}">inline</code>
        sets it beside the track, which reads better in a narrow column. Same two options as
        <code style="\${t.monoSm}">mms-progress-bar</code>. Indeterminate and error report no value, so both
        render the track alone in either mode.
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">label-row (default)</p>
          <mms-loading-bar label="Syncing" progress="45"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">inline</p>
          <mms-loading-bar label="Syncing" progress="45" value-placement="inline"></mms-loading-bar>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Color scheme</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">color-scheme</code> sets the fill while the process is
        <strong>in flight</strong> — <code style="\${t.monoSm}">primary</code> (default),
        <code style="\${t.monoSm}">secondary</code>, <code style="\${t.monoSm}">accent</code>, or
        <code style="\${t.monoSm}">onyx</code>, the same four solid step-9 fills as
        <code style="\${t.monoSm}">mms-progress-bar</code>.
      </p>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-bottom: 1.5rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">primary</p>
          <mms-loading-bar label="Syncing" progress="60"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">secondary</p>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="secondary"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">accent</p>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="accent"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">onyx</p>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="onyx"></mms-loading-bar>
        </div>
      </div>

      <div style="background: rgba(128,128,128,0.06); border-left: 3px solid rgba(128,128,128,0.4); padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0; max-width: \${PROSE_MAX};">
        <p style="\${t.bodySm} margin: 0;">
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

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">accent · loading</p>
          <mms-loading-bar label="Syncing" progress="60" color-scheme="accent"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">accent · loading @ 100</p>
          <mms-loading-bar label="Syncing" progress="100" color-scheme="accent"></mms-loading-bar>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">accent · error</p>
          <mms-loading-bar label="Syncing" state="error" progress="60" color-scheme="accent"></mms-loading-bar>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Not interactive.</strong> mms-loading-bar has no <code style="\${t.monoSm}">tabindex</code>,
          no <code style="\${t.monoSm}">:hover</code>/<code style="\${t.monoSm}">:focus-visible</code> state,
          and no keyboard model — it is a live status display, not a control.
        </p>
      </div>

      <div style="background: rgba(168, 85, 247, 0.08); border-left: 3px solid #A855F7; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Reduced motion keeps the indicator visible.</strong> Under
          <code style="\${t.monoSm}">prefers-reduced-motion: reduce</code> the indeterminate sweep stops and
          the bar fills the track instead of disappearing. Simply cancelling the animation would park the
          30%-wide bar off the left edge — an invisible loading indicator for exactly the users who opted
          out of motion. A full static bar is also honest: an indeterminate bar was never communicating a
          quantity.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['loading-bar'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Role:</strong> Exposed as <code style="\${t.monoSm}">role="progressbar"</code> with <code style="\${t.monoSm}">aria-valuemin</code>/<code style="\${t.monoSm}">aria-valuemax</code> always present.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Indeterminate:</strong> <code style="\${t.monoSm}">aria-valuenow</code> is <em>omitted entirely</em> — the ARIA-spec signal for "progress is indeterminate." It is not set to 0, and not set to the string "undefined." <code style="\${t.monoSm}">aria-busy="true"</code> is set alongside it.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Value text:</strong> <code style="\${t.monoSm}">aria-valuetext</code> mirrors the visible value exactly — a percentage while loading, "Complete" on success. It is absent for indeterminate and error, which report no quantity.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Error:</strong> The error row carries <code style="\${t.monoSm}">role="alert"</code>, so the message is announced the moment the process fails — the user was not doing the work and may not have been watching, so they have to be told.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Accessible name:</strong> <code style="\${t.monoSm}">aria-labelledby</code> points at the visible label when shown; falls back to <code style="\${t.monoSm}">aria-label</code> carrying the same text when the label row is hidden — the accessible name is never lost.</li>
        <li><strong>No focus stop:</strong> mms-loading-bar is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard Navigation</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        None. mms-loading-bar is not focusable and has no keyboard interaction model.
      </p>

    </div>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Overview`,`PlaygroundStory`]}));O();export{T as Overview,E as PlaygroundStory,D as __namedExportsOrder,x as default,O as n,b as t};