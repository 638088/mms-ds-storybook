import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{d as s,l as c,n as l,r as u,s as d,t as f}from"./decorate-Bygya6Tu.js";import{n as p}from"./iframe-DSDTSjSG.js";import{n as m,r as h}from"./theme-constraints-BnNpJNRe.js";import{a as g,o as _,r as v,t as y}from"./a11y-outcome-cKjMdYHr.js";import{i as b,n as x,t as S}from"./ref-C_BvYGxp.js";var C,w=e((()=>{o(),u(),l(),C=class extends i{constructor(...e){super(...e),this.active=!1,this.size=`lg`,this.speed=`normal`,this.scrim=`dark`,this.colorScheme=`onyx`,this.labelText=`Loading...`,this.labelTexts=``,this.labelInterval=8,this.completeText=`Loading complete`,this._currentLabel=``,this._liveMessage=``,this._labelIndex=0}static{this.styles=r`
    :host {
      display: contents;
    }

    .overlay {
      position: fixed;
      inset: 0;
      z-index: 1200;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--_scrim-bg);
    }

    :host {
      /* --neutral-light-12 (#1a1a1a) is the exact color --color-overlay-scrim's
         base value uses (rgba(26,26,26,0.7)) — read directly, not through the
         semantic alias, because that alias is NOT mode-invariant (its dark-mode
         override lightens to rgba(77,77,77,0.7)). Forcing data-mode for
         colorScheme's sake (below) would drag this along with it otherwise,
         composite poorly against real page content, and reopen the exact
         contrast failure this scrim pairing exists to prevent. */
      --_scrim-bg: var(--mms-page-spinner-scrim, color-mix(in srgb, var(--neutral-light-12) 70%, transparent));
      --_scrim-text: var(--color-onyx-11);
      --_spinner-color: var(--color-onyx-11);
    }

    :host([scrim='light']) {
      --_scrim-bg: var(--mms-page-spinner-scrim, var(--color-overlay-scrim-light));
    }

    :host([color-scheme='primary']) {
      --_spinner-color: var(--color-primary-11);
    }

    :host([color-scheme='secondary']) {
      --_spinner-color: var(--color-secondary-11);
    }

    :host([color-scheme='accent']) {
      --_spinner-color: var(--color-accent-11);
    }

    .spinner-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-sm1);
    }

    .spinner-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--_spinner-size);
      height: var(--_spinner-size);
    }

    :host([size='lg']) .spinner-wrapper {
      --_spinner-size: var(--size-xxl3);
    }

    :host([size='sm']) .spinner-wrapper {
      --_spinner-size: var(--size-xl3);
    }

    .spinner-svg {
      width: 100%;
      height: 100%;
      color: var(--_spinner-color);
      animation: spin var(--motion-duration-loop) var(--motion-easing-loop) infinite;
    }

    :host([speed='fast']) .spinner-svg {
      animation-duration: var(--motion-duration-loop-fast);
    }

    .spinner-arc {
      fill: none;
      stroke-linecap: butt;
    }

    .spinner-dot {
      fill: var(--_spinner-color);
    }

    .label {
      font-family: var(--type-body-md-family);
      font-size: var(--type-body-md-size);
      line-height: var(--type-body-md-line-height);
      font-weight: var(--type-body-md-weight);
      color: var(--_scrim-text);
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner-svg {
        animation: none;
      }
    }
  `}connectedCallback(){super.connectedCallback(),this._syncForcedMode(),this._observeAmbientTheme()}disconnectedCallback(){super.disconnectedCallback(),this._stopRotation(),this._clearCompletionTimer(),this._themeObserver?.disconnect()}_syncForcedMode(){let e=(this.parentElement?.closest(`[data-theme]`))?.getAttribute(`data-theme`);e&&(this.setAttribute(`data-theme`,e),this.setAttribute(`data-mode`,this.scrim===`dark`?`dark`:`light`))}_observeAmbientTheme(){let e=this.parentElement?.closest(`[data-theme]`);e&&(this._themeObserver=new MutationObserver(()=>this._syncForcedMode()),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`data-theme`]}))}willUpdate(e){super.willUpdate(e),e.has(`scrim`)&&this._syncForcedMode(),(e.has(`active`)||e.has(`labelTexts`)||e.has(`labelInterval`))&&this._manageRotation(),e.has(`active`)&&(this.active?(this._clearCompletionTimer(),this._liveMessage=this._displayLabel):e.get(`active`)===!0&&(this._liveMessage=this.completeText,this._completionClearTimer=setTimeout(()=>{this._liveMessage=``},1e3)))}get _labels(){return this.labelTexts?this.labelTexts.split(`|`).map(e=>e.trim()).filter(Boolean):[]}get _displayLabel(){return this._labels.length>0&&this._currentLabel?this._currentLabel:this.labelText}_manageRotation(){this._stopRotation();let e=this._labels;this.active&&e.length>1?(this._labelIndex=0,this._currentLabel=e[0],this._rotationTimer=setInterval(()=>{this._labelIndex=(this._labelIndex+1)%e.length,this._currentLabel=e[this._labelIndex],this.active&&(this._liveMessage=this._currentLabel)},this.labelInterval*1e3)):e.length===1?this._currentLabel=e[0]:this._currentLabel=``}_stopRotation(){this._rotationTimer&&=(clearInterval(this._rotationTimer),void 0)}_clearCompletionTimer(){this._completionClearTimer&&=(clearTimeout(this._completionClearTimer),void 0)}_renderSpinner(){let e=this.size!==`sm`,t=e?96:56,n=t/2,r=n*.8,i=(n+r)/2,o=n-r,s=t/2,c=t/2,l=e?4.8:2.8,u=Math.PI/180*45,d=s+i*Math.sin(u),f=c-i*Math.cos(u),p=s-i*Math.sin(u),m=c-i*Math.cos(u),h=`M ${d},${f} A ${i},${i} 0 1,1 ${p},${m}`,g=`mms-page-spinner-arc-fade-${this.size}`;return a`
      <svg class="spinner-svg" viewBox="0 0 ${t} ${t}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id=${g} gradientUnits="userSpaceOnUse" x1=${d} y1=${c} x2=${p} y2=${c}>
            <stop offset="0%" stop-color="currentColor" stop-opacity="0" />
            <stop offset="100%" stop-color="currentColor" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path class="spinner-arc" d=${h} stroke="url(#${g})" stroke-width=${o} />
        <circle class="spinner-dot" cx=${p} cy=${m} r=${l} />
      </svg>
    `}render(){return a`
      ${this.active?a`
            <div class="overlay">
              <div class="spinner-content">
                <div class="spinner-wrapper">${this._renderSpinner()}</div>
                <span class="label" aria-hidden="true">${this._displayLabel}</span>
              </div>
            </div>
          `:n}
      <div class="sr-only" role="status" aria-live="assertive">${this._liveMessage||n}</div>
    `}},f([c({type:Boolean,reflect:!0})],C.prototype,`active`,void 0),f([c({type:String,reflect:!0})],C.prototype,`size`,void 0),f([c({type:String,reflect:!0})],C.prototype,`speed`,void 0),f([c({type:String,reflect:!0})],C.prototype,`scrim`,void 0),f([c({type:String,reflect:!0,attribute:`color-scheme`})],C.prototype,`colorScheme`,void 0),f([c({type:String,attribute:`label-text`})],C.prototype,`labelText`,void 0),f([c({type:String,attribute:`label-texts`})],C.prototype,`labelTexts`,void 0),f([c({type:Number,attribute:`label-interval`})],C.prototype,`labelInterval`,void 0),f([c({type:String,attribute:`complete-text`})],C.prototype,`completeText`,void 0),f([d()],C.prototype,`_currentLabel`,void 0),f([d()],C.prototype,`_liveMessage`,void 0),C=f([s(`mms-page-spinner`)],C)})),T=t({Overview:()=>I,PlaygroundStory:()=>R,__namedExportsOrder:()=>z,default:()=>D});function E(e,t=2500){e.value&&(e.value.active=!0,setTimeout(()=>{e.value&&(e.value.active=!1)},t))}var D,O,k,A,j,M,N,P,F,I,L,R,z,B=e((()=>{o(),S(),w(),p(),g(),y(),h(),D={title:`Status Display/Page Spinner`,tags:[`!autodocs`]},O={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},k=`680px`,A=`960px`,j=`320px`,M=e=>a`
  <div style="position: relative; height: ${j}; overflow: hidden; transform: translateZ(0); border-radius: 8px; background: rgba(128,128,128,0.08);">
    ${e}
  </div>
`,N=x(),P=x(),F=x(),I={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${A}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${O.h1}">Page Spinner</h1>
      <p style="${O.body} opacity: 0.85; max-width: ${k}; margin-bottom: 2rem;">
        A full-page, blocking loading overlay — a scrim over the entire viewport with a centered
        spinner and label. Used during page-level loading states: a navigation transition, an
        initial data fetch, anything where the whole page is not yet usable. Not interactive; has
        no keyboard model.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0; max-width: ${k};">
        <p style="${O.bodySm} margin: 0;">
          <strong>Page Spinner or Loading Bar?</strong> Page Spinner blocks the whole page — nothing
          underneath it is usable while it is shown, and it carries no percentage. Use
          <code style="${O.monoSm}">mms-loading-bar</code> instead when the rest of the page stays
          usable and the process reports (or can report) a percentage — a file upload, a save, a
          background sync.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${O.h2}">Basic usage</h2>
      <p style="${O.bodySm} opacity: 0.85; max-width: ${k}; margin-bottom: 1.5rem;">
        Toggle <code style="${O.monoSm}">active</code> to show or hide the overlay. There is no
        close button or user-driven dismissal — the consumer controls visibility entirely, tied to
        whatever is actually loading.
      </p>
      ${M(a`
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
          <mms-button variant="secondary" label="Show for 2.5s" @click=${()=>E(N)}></mms-button>
        </div>
        <mms-page-spinner ${b(N)} label-text="Loading records..."></mms-page-spinner>
      `)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${O.h2}">Size</h2>
      <p style="${O.bodySm} opacity: 0.85; max-width: ${k}; margin-bottom: 1.5rem;">
        <code style="${O.monoSm}">size</code> sets the spinner wrapper to <code style="${O.monoSm}">lg</code>
        (96px, default) or <code style="${O.monoSm}">sm</code> (56px) — Marina's own two sizes for
        this component, reconciled to mms's <code style="${O.monoSm}">sm</code>/<code style="${O.monoSm}">lg</code>
        naming rather than its <code style="${O.monoSm}">large</code>/<code style="${O.monoSm}">small</code>.
      </p>
      ${M(a`
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
          <mms-button variant="secondary" label="Show small for 2.5s" @click=${()=>E(P)}></mms-button>
        </div>
        <mms-page-spinner ${b(P)} size="sm" label-text="Loading..."></mms-page-spinner>
      `)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${O.h2}">Rotating labels</h2>
      <p style="${O.bodySm} opacity: 0.85; max-width: ${k}; margin-bottom: 1.5rem;">
        For long-running operations, <code style="${O.monoSm}">label-texts</code> (pipe-separated)
        cycles through a set of messages every <code style="${O.monoSm}">label-interval</code>
        seconds (default 8) — <em>"Loading..."</em> → <em>"Almost there..."</em> →
        <em>"Hang tight..."</em> — instead of one static line sitting unchanged for a long wait.
        Each new message is also announced live as it rotates in.
      </p>
      ${M(a`
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
          <mms-button variant="secondary" label="Show rotating for 6s" @click=${()=>E(F,6e3)}></mms-button>
        </div>
        <mms-page-spinner
          ${b(F)}
          label-texts="Loading records...|Almost there...|Hang tight..."
          label-interval="2"
        ></mms-page-spinner>
      `)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${O.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${O.bodySm} margin: 0;">
          <strong>Not interactive, and deliberately not focus-trapped.</strong> mms-page-spinner has
          no close affordance and nothing focusable inside it. WAI-ARIA APG has no dedicated pattern
          for a loading spinner at all; Carbon Design System states plainly that a loading indicator
          "has no keyboard accessibility considerations since it is intentionally not operable or
          navigable." The scrim's stacking order already blocks pointer interaction with the page
          underneath — this component does not reach outside itself to make background content
          <code style="${O.monoSm}">inert</code>, matching that industry precedent rather than
          inventing modal-style lockdown for a non-modal role.
        </p>
      </div>

      <div style="background: rgba(168, 85, 247, 0.08); border-left: 3px solid #A855F7; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${O.bodySm} margin: 0;">
          <strong>Announces both start and completion.</strong> The label is exposed through an
          <code style="${O.monoSm}">aria-live="assertive"</code> region — assertive, not the more
          common polite <code style="${O.monoSm}">role="status"</code> default, because this blocks
          the whole page and the user needs to know immediately (Carbon's guidance). When
          <code style="${O.monoSm}">active</code> goes back to false, <code style="${O.monoSm}">complete-text</code>
          ("Loading complete" by default) is announced through the same region before clearing —
          closing a gap neither Marina's <code style="${O.monoSm}">ds-page-spinner</code> nor dxhub's
          own <code style="${O.monoSm}">LoadingFullScreen</code> address today.
        </p>
      </div>

      <h3 style="${O.h3}">WCAG 2.2 AA Compliance</h3>
      ${v(_[`page-spinner`].rows)}

      <h3 style="${O.h3}">Screen Reader Behavior</h3>
      <ul style="${O.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>On show:</strong> The label text is announced immediately via <code style="${O.monoSm}">aria-live="assertive"</code>.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Rotating labels:</strong> Each new message is announced as it rotates in, not just the first one.</li>
        <li style="margin-bottom: 0.5rem;"><strong>On hide:</strong> <code style="${O.monoSm}">complete-text</code> is announced once, then the live region clears.</li>
        <li><strong>No focus stop:</strong> Not a tab stop — skipped entirely during keyboard navigation, by design (see Accessibility notes above).</li>
      </ul>

      <h3 style="${O.h3}">Keyboard Navigation</h3>
      <p style="${O.bodySm} opacity: 0.85; max-width: ${k}; margin-bottom: 2rem;">
        None. mms-page-spinner is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},L=x(),R={name:`Playground`,tags:[`!dev`],args:{active:!0,size:`lg`,speed:`normal`,scrim:`dark`,colorScheme:`onyx`,labelText:`Loading records...`,labelTexts:`Loading records...|Almost there...|Hang tight, this can take a moment...`,labelInterval:3,completeText:`Loading complete`,theme:`maximus`,density:`default`},argTypes:{active:{name:`Active`,control:`boolean`,description:`Whether the overlay is visible`,table:{category:`Content`}},size:{name:`Size`,control:`select`,options:[`sm`,`lg`],description:`Spinner wrapper size: sm (56px) | lg (96px, default)`,table:{category:`Visual`}},speed:{name:`Speed`,control:`select`,options:[`normal`,`fast`],description:`Spin rotation speed: normal (1500ms, default) | fast (1000ms)`,table:{category:`Visual`}},scrim:{name:`Scrim`,control:`select`,options:[`dark`,`light`],description:`Overlay background: dark (default, black 70% overlay) | light (white 80% overlay). Pick based on what's behind the overlay, independent of page theme/mode — same reasoning as mms-hero-image's scrim prop. Content color is set separately by Color Scheme below.`,table:{category:`Visual`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Spinner color only (the label always stays on the fixed onyx text color). onyx (default) is theme-invariant and always valid. primary/secondary/accent are valid at Tier 1 or Tier 2 — Tier 3 for the selected Theme renders an explanatory card instead of the component.`,table:{category:`Visual`}},labelText:{name:`Label Text`,control:`text`,description:`Loading label, shown and announced. Ignored while a label-texts rotation is active.`,table:{category:`Content`}},labelTexts:{name:`Label Texts`,control:`text`,description:`Rotating messages, separated by "|" — any number of entries (e.g. "Loading...|Almost there...|Hang tight..." rotates through 3). Clear this field to see the static labelText instead.`,table:{category:`Content`}},labelInterval:{name:`Label Interval`,control:{type:`number`,min:1,max:30,step:1},description:`How long each label stays on screen before switching to the next one, in seconds. Only applies when label-texts has 2+ entries — ignored otherwise.`,table:{category:`Content`}},completeText:{name:`Complete Text`,control:`text`,description:`Message announced via the live region when active transitions to false`,table:{category:`Content`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-page-spinner has no compact-specific styling since it's a fixed-size overlay, not an interactive touch-target component`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.active&&r.push(`active`),n.size!==`lg`&&r.push(`size="${n.size}"`),n.speed!==`normal`&&r.push(`speed="${n.speed}"`),n.scrim!==`dark`&&r.push(`scrim="${n.scrim}"`),n.colorScheme!==`onyx`&&r.push(`color-scheme="${n.colorScheme}"`),n.labelText&&!n.labelTexts&&r.push(`label-text="${n.labelText}"`),n.labelTexts&&r.push(`label-texts="${n.labelTexts}"`),n.labelTexts&&n.labelInterval!==8&&r.push(`label-interval="${n.labelInterval}"`),n.completeText!==`Loading complete`&&r.push(`complete-text="${n.completeText}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-page-spinner\n  ${r.join(`
  `)}\n></mms-page-spinner>`},language:`html`}},controls:{sort:`none`}},render:e=>m(e.theme,e.colorScheme)===3?a`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 440px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem; color: #991b1b !important;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.colorScheme}</code> color scheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
            ${`Tier 3 (Decorative) has no step-11 defined at all — there is no color to fall back to for the spinner graphic, only to block.`}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7; color: #991b1b !important;">
            See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      `:M(a`
      <mms-page-spinner
        ${b(L)}
        ?active=${e.active}
        size=${e.size}
        speed=${e.speed}
        scrim=${e.scrim}
        color-scheme=${e.colorScheme}
        label-text=${e.labelText}
        label-texts=${e.labelTexts}
        label-interval=${e.labelInterval}
        complete-text=${e.completeText}
        data-density=${e.density===`compact`?`compact`:n}
      ></mms-page-spinner>
    `)},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Page Spinner</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A full-page, blocking loading overlay — a scrim over the entire viewport with a centered
        spinner and label. Used during page-level loading states: a navigation transition, an
        initial data fetch, anything where the whole page is not yet usable. Not interactive; has
        no keyboard model.
      </p>

      <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3B82F6; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 6px 6px 0; max-width: \${PROSE_MAX};">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Page Spinner or Loading Bar?</strong> Page Spinner blocks the whole page — nothing
          underneath it is usable while it is shown, and it carries no percentage. Use
          <code style="\${t.monoSm}">mms-loading-bar</code> instead when the rest of the page stays
          usable and the process reports (or can report) a percentage — a file upload, a save, a
          background sync.
        </p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Toggle <code style="\${t.monoSm}">active</code> to show or hide the overlay. There is no
        close button or user-driven dismissal — the consumer controls visibility entirely, tied to
        whatever is actually loading.
      </p>
      \${demoFrame(html\`
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
          <mms-button variant="secondary" label="Show for 2.5s" @click=\${() => showSpinner(basicRef)}></mms-button>
        </div>
        <mms-page-spinner \${ref(basicRef)} label-text="Loading records..."></mms-page-spinner>
      \`)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">size</code> sets the spinner wrapper to <code style="\${t.monoSm}">lg</code>
        (96px, default) or <code style="\${t.monoSm}">sm</code> (56px) — Marina's own two sizes for
        this component, reconciled to mms's <code style="\${t.monoSm}">sm</code>/<code style="\${t.monoSm}">lg</code>
        naming rather than its <code style="\${t.monoSm}">large</code>/<code style="\${t.monoSm}">small</code>.
      </p>
      \${demoFrame(html\`
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
          <mms-button variant="secondary" label="Show small for 2.5s" @click=\${() => showSpinner(sizeSmRef)}></mms-button>
        </div>
        <mms-page-spinner \${ref(sizeSmRef)} size="sm" label-text="Loading..."></mms-page-spinner>
      \`)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Rotating labels</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        For long-running operations, <code style="\${t.monoSm}">label-texts</code> (pipe-separated)
        cycles through a set of messages every <code style="\${t.monoSm}">label-interval</code>
        seconds (default 8) — <em>"Loading..."</em> → <em>"Almost there..."</em> →
        <em>"Hang tight..."</em> — instead of one static line sitting unchanged for a long wait.
        Each new message is also announced live as it rotates in.
      </p>
      \${demoFrame(html\`
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
          <mms-button variant="secondary" label="Show rotating for 6s" @click=\${() => showSpinner(rotatingRef, 6000)}></mms-button>
        </div>
        <mms-page-spinner
          \${ref(rotatingRef)}
          label-texts="Loading records...|Almost there...|Hang tight..."
          label-interval="2"
        ></mms-page-spinner>
      \`)}

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Not interactive, and deliberately not focus-trapped.</strong> mms-page-spinner has
          no close affordance and nothing focusable inside it. WAI-ARIA APG has no dedicated pattern
          for a loading spinner at all; Carbon Design System states plainly that a loading indicator
          "has no keyboard accessibility considerations since it is intentionally not operable or
          navigable." The scrim's stacking order already blocks pointer interaction with the page
          underneath — this component does not reach outside itself to make background content
          <code style="\${t.monoSm}">inert</code>, matching that industry precedent rather than
          inventing modal-style lockdown for a non-modal role.
        </p>
      </div>

      <div style="background: rgba(168, 85, 247, 0.08); border-left: 3px solid #A855F7; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Announces both start and completion.</strong> The label is exposed through an
          <code style="\${t.monoSm}">aria-live="assertive"</code> region — assertive, not the more
          common polite <code style="\${t.monoSm}">role="status"</code> default, because this blocks
          the whole page and the user needs to know immediately (Carbon's guidance). When
          <code style="\${t.monoSm}">active</code> goes back to false, <code style="\${t.monoSm}">complete-text</code>
          ("Loading complete" by default) is announced through the same region before clearing —
          closing a gap neither Marina's <code style="\${t.monoSm}">ds-page-spinner</code> nor dxhub's
          own <code style="\${t.monoSm}">LoadingFullScreen</code> address today.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['page-spinner'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>On show:</strong> The label text is announced immediately via <code style="\${t.monoSm}">aria-live="assertive"</code>.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Rotating labels:</strong> Each new message is announced as it rotates in, not just the first one.</li>
        <li style="margin-bottom: 0.5rem;"><strong>On hide:</strong> <code style="\${t.monoSm}">complete-text</code> is announced once, then the live region clears.</li>
        <li><strong>No focus stop:</strong> Not a tab stop — skipped entirely during keyboard navigation, by design (see Accessibility notes above).</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard Navigation</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        None. mms-page-spinner is not focusable and has no keyboard interaction model.
      </p>

    </div>
  \`
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    active: true,
    size: 'lg',
    speed: 'normal',
    scrim: 'dark',
    colorScheme: 'onyx',
    labelText: 'Loading records...',
    labelTexts: 'Loading records...|Almost there...|Hang tight, this can take a moment...',
    labelInterval: 3,
    completeText: 'Loading complete',
    theme: 'maximus',
    density: 'default'
  },
  argTypes: {
    active: {
      name: 'Active',
      control: 'boolean',
      description: 'Whether the overlay is visible',
      table: {
        category: 'Content'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'lg'],
      description: 'Spinner wrapper size: sm (56px) | lg (96px, default)',
      table: {
        category: 'Visual'
      }
    },
    speed: {
      name: 'Speed',
      control: 'select',
      options: ['normal', 'fast'],
      description: 'Spin rotation speed: normal (1500ms, default) | fast (1000ms)',
      table: {
        category: 'Visual'
      }
    },
    scrim: {
      name: 'Scrim',
      control: 'select',
      options: ['dark', 'light'],
      description: 'Overlay background: dark (default, black 70% overlay) | light (white 80% overlay). Pick based on what\\'s behind the overlay, independent of page theme/mode — same reasoning as mms-hero-image\\'s scrim prop. Content color is set separately by Color Scheme below.',
      table: {
        category: 'Visual'
      }
    },
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Spinner color only (the label always stays on the fixed onyx text color). onyx (default) is theme-invariant and always valid. primary/secondary/accent are valid at Tier 1 or Tier 2 — Tier 3 for the selected Theme renders an explanatory card instead of the component.',
      table: {
        category: 'Visual'
      }
    },
    labelText: {
      name: 'Label Text',
      control: 'text',
      description: 'Loading label, shown and announced. Ignored while a label-texts rotation is active.',
      table: {
        category: 'Content'
      }
    },
    labelTexts: {
      name: 'Label Texts',
      control: 'text',
      description: 'Rotating messages, separated by "|" — any number of entries (e.g. "Loading...|Almost there...|Hang tight..." rotates through 3). Clear this field to see the static labelText instead.',
      table: {
        category: 'Content'
      }
    },
    labelInterval: {
      name: 'Label Interval',
      control: {
        type: 'number',
        min: 1,
        max: 30,
        step: 1
      },
      description: 'How long each label stays on screen before switching to the next one, in seconds. Only applies when label-texts has 2+ entries — ignored otherwise.',
      table: {
        category: 'Content'
      }
    },
    completeText: {
      name: 'Complete Text',
      control: 'text',
      description: 'Message announced via the live region when active transitions to false',
      table: {
        category: 'Content'
      }
    },
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
      description: 'Brand theme',
      table: {
        category: 'Global'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Accepted as a global attribute passthrough — mms-page-spinner has no compact-specific styling since it\\'s a fixed-size overlay, not an interactive touch-target component',
      table: {
        category: 'Global'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: {
            active: boolean;
            size: string;
            speed: string;
            scrim: string;
            colorScheme: string;
            labelText: string;
            labelTexts: string;
            labelInterval: number;
            completeText: string;
            density: string;
          };
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.active) attrs.push('active');
          if (a.size !== 'lg') attrs.push(\`size="\${a.size}"\`);
          if (a.speed !== 'normal') attrs.push(\`speed="\${a.speed}"\`);
          if (a.scrim !== 'dark') attrs.push(\`scrim="\${a.scrim}"\`);
          if (a.colorScheme !== 'onyx') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.labelText && !a.labelTexts) attrs.push(\`label-text="\${a.labelText}"\`);
          if (a.labelTexts) attrs.push(\`label-texts="\${a.labelTexts}"\`);
          if (a.labelTexts && a.labelInterval !== 8) attrs.push(\`label-interval="\${a.labelInterval}"\`);
          if (a.completeText !== 'Loading complete') attrs.push(\`complete-text="\${a.completeText}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-page-spinner\\n  \${attrs.join('\\n  ')}\\n></mms-page-spinner>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none'
    }
  },
  render: (args: {
    active: boolean;
    size: string;
    speed: string;
    scrim: string;
    colorScheme: string;
    labelText: string;
    labelTexts: string;
    labelInterval: number;
    completeText: string;
    density: string;
    theme: string;
  }) => {
    // Page-spinner-specific validity check: Tier 1 OR Tier 2 are both fine —
    // unlike mms-checkbox/mms-button's shared isValidColorScheme() (Tier 1
    // only), which gates on step 10 (hover state). Page-spinner is
    // non-interactive and never needs step 10; the only thing that actually
    // matters here is step 11 (the spinner's color source), which Tier 2 has
    // same as Tier 1 — only Tier 3 lacks it.
    const tier = getPaletteTier(args.theme as Theme, args.colorScheme as ColorScheme);
    const valid = tier !== 3;
    if (!valid) {
      const tierReason = 'Tier 3 (Decorative) has no step-11 defined at all — there is no color to fall back to for the spinner graphic, only to block.';
      return html\`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 440px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem; color: #991b1b !important;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.colorScheme}</code> color scheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
            \${tierReason}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7; color: #991b1b !important;">
            See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      \`;
    }
    return demoFrame(html\`
      <mms-page-spinner
        \${ref(playgroundRef)}
        ?active=\${args.active}
        size=\${args.size}
        speed=\${args.speed}
        scrim=\${args.scrim}
        color-scheme=\${args.colorScheme}
        label-text=\${args.labelText}
        label-texts=\${args.labelTexts}
        label-interval=\${args.labelInterval}
        complete-text=\${args.completeText}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
      ></mms-page-spinner>
    \`);
  }
}`,...R.parameters?.docs?.source}}},z=[`Overview`,`PlaygroundStory`]}));B();export{I as Overview,R as PlaygroundStory,z as __namedExportsOrder,D as default,B as n,T as t};