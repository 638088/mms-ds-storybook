import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-B0BZwaT1.js";import{E as s,S as c,T as l,b as u,g as d,n as f,r as p,w as m}from"./mms-icon.component-DFVI3nJi.js";import{c as h}from"./iframe-0m-KJlLB.js";import{n as g,t as _}from"./print.css-DylLNsDy.js";import{n as v,t as y}from"./localize-DGaV1nF3.js";import{t as b}from"./mms-card.component-Ae9XIj4r.js";import{n as x,r as S}from"./theme-constraints-BnNpJNRe.js";import{n as C,r as w}from"./wcag-coverage-DNhlI7v1.js";import{t as T}from"./mms-inline-alert.component-BWndcKtJ.js";import{a as E,c as D,i as O,l as k,n as A,o as j,r as M,u as N}from"./doc-styles-BoEZknkJ.js";import{a as P,n as F}from"./a11y-outcome-o7pti1Vx.js";import{i as I,n as L,t as R}from"./ref-BS6EG0nL.js";var z,B=e((()=>{o(),s(),g(),d(),v(),p(),z=class extends i{constructor(...e){super(...e),this.localize=new y(this),this.active=!1,this.size=`lg`,this.speed=`normal`,this.scrim=`dark`,this.colorScheme=`onyx`,this.labelTexts=``,this.labelInterval=8,this._currentLabel=``,this._liveMessage=``,this._labelIndex=0}static{this.styles=[l,_,r`
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
      /* Fixed -dark/-light pair, same two tokens mms-hero-image reads — never
         the adaptive --color-overlay-scrim, whose dark-mode override
         (rgba(77,77,77,0.7)) would otherwise resolve here whenever the forced
         data-mode below is "dark". */
      --_scrim-bg: var(--mms-page-spinner-scrim, var(--color-overlay-scrim-dark));
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
  `]}connectedCallback(){super.connectedCallback(),this._syncForcedMode(),this._observeAmbientTheme()}disconnectedCallback(){super.disconnectedCallback(),this._stopRotation(),this._clearCompletionTimer(),this._themeObserver?.disconnect()}_syncForcedMode(){let e=(this.parentElement?.closest(`[data-theme]`))?.getAttribute(`data-theme`);e&&(this.setAttribute(`data-theme`,e),this.setAttribute(`data-mode`,this.scrim===`dark`?`dark`:`light`))}_observeAmbientTheme(){let e=this.parentElement?.closest(`[data-theme]`);e&&(this._themeObserver=new MutationObserver(()=>this._syncForcedMode()),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`data-theme`]}))}willUpdate(e){super.willUpdate(e),e.has(`scrim`)&&this._syncForcedMode(),(e.has(`active`)||e.has(`labelTexts`)||e.has(`labelInterval`))&&this._manageRotation(),e.has(`active`)&&(this.active?(this._clearCompletionTimer(),this._liveMessage=this._displayLabel):e.get(`active`)===!0&&(this._liveMessage=this.completeText??this.localize.term(`loadingComplete`),this._completionClearTimer=setTimeout(()=>{this._liveMessage=``},1e3)))}get _labels(){return this.labelTexts?this.labelTexts.split(`|`).map(e=>e.trim()).filter(Boolean):[]}get _displayLabel(){return this._labels.length>0&&this._currentLabel?this._currentLabel:this.labelText??this.localize.term(`loading`)}_manageRotation(){this._stopRotation();let e=this._labels;this.active&&e.length>1?(this._labelIndex=0,this._currentLabel=e[0],this._rotationTimer=setInterval(()=>{this._labelIndex=(this._labelIndex+1)%e.length,this._currentLabel=e[this._labelIndex],this.active&&(this._liveMessage=this._currentLabel)},this.labelInterval*1e3)):e.length===1?this._currentLabel=e[0]:this._currentLabel=``}_stopRotation(){this._rotationTimer&&=(clearInterval(this._rotationTimer),void 0)}_clearCompletionTimer(){this._completionClearTimer&&=(clearTimeout(this._completionClearTimer),void 0)}_renderSpinner(){let e=this.size!==`sm`,t=e?96:56,n=t/2,r=n*.8,i=(n+r)/2,o=n-r,s=t/2,c=t/2,l=e?4.8:2.8,u=Math.PI/180*45,d=s+i*Math.sin(u),f=c-i*Math.cos(u),p=s-i*Math.sin(u),m=c-i*Math.cos(u),h=`M ${d},${f} A ${i},${i} 0 1,1 ${p},${m}`,g=`mms-page-spinner-arc-fade-${this.size}`;return a`
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
    `}},f([c({type:Boolean,reflect:!0})],z.prototype,`active`,void 0),f([c({type:String,reflect:!0})],z.prototype,`size`,void 0),f([c({type:String,reflect:!0})],z.prototype,`speed`,void 0),f([c({type:String,reflect:!0})],z.prototype,`scrim`,void 0),f([c({type:String,reflect:!0,attribute:`color-scheme`})],z.prototype,`colorScheme`,void 0),f([c({type:String,attribute:`label-text`})],z.prototype,`labelText`,void 0),f([c({type:String,attribute:`label-texts`})],z.prototype,`labelTexts`,void 0),f([c({type:Number,attribute:`label-interval`})],z.prototype,`labelInterval`,void 0),f([c({type:String,attribute:`complete-text`})],z.prototype,`completeText`,void 0),f([u()],z.prototype,`_currentLabel`,void 0),f([u()],z.prototype,`_liveMessage`,void 0),z=f([m(`mms-page-spinner`)],z)})),V=t({Overview:()=>Y,PlaygroundStory:()=>Z,__namedExportsOrder:()=>Q,default:()=>U});function H(e,t=2500){e.value&&(e.value.active=!0,setTimeout(()=>{e.value&&(e.value.active=!1)},t))}var U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{o(),R(),B(),T(),h(),b(),C(),F(),D(),S(),U={title:`Status Display/Page Spinner`,tags:[`!autodocs`]},W=`320px`,G=e=>a`
  <div style="position: relative; height: ${W}; overflow: hidden; transform: translateZ(0); border-radius: var(--radius-md); background: var(--color-surface-sunken); margin-bottom: ${k.subsection};">
    ${e}
  </div>
`,K=L(),q=L(),J=L(),Y={name:`Overview`,render:()=>a`
    <div data-theme=${M} data-mode=${j()} style=${A}>

      <h1 style="${N.h1}">Page Spinner</h1>
      <p style="${N.body} ${E.muted} max-width: ${O}; margin-bottom: ${k.subsection};">
        A full-page, blocking loading overlay — a scrim over the entire viewport with a centered
        spinner and label. Used during page-level loading states: a navigation transition, an
        initial data fetch, anything where the whole page is not yet usable. Not interactive; has
        no keyboard model.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${k.subsection};">
        <div slot="body-content">
        <p style="${N.bodySm}">
          <strong>Page Spinner or Loading Bar?</strong> Page Spinner blocks the whole page — nothing
          underneath it is usable while it is shown, and it carries no percentage. Use
          <code style="${N.monoSm}">mms-loading-bar</code> instead when the rest of the page stays
          usable and the process reports (or can report) a percentage — a file upload, a save, a
          background sync.
        </p>
        </div>
      </mms-card>

      <hr style="${E.divider}" />

      <h2 style="${N.h2}">Basic usage</h2>
      <p style="${N.bodySm} ${E.muted} max-width: ${O}; margin-bottom: ${k.subsection};">
        Toggle <code style="${N.monoSm}">active</code> to show or hide the overlay. There is no
        close button or user-driven dismissal — the consumer controls visibility entirely, tied to
        whatever is actually loading.
      </p>
      ${G(a`
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
          <mms-button variant="secondary" label="Show for 2.5s" @click=${()=>H(K)}></mms-button>
        </div>
        <mms-page-spinner ${I(K)} label-text="Loading records..."></mms-page-spinner>
      `)}

      <hr style="${E.divider}" />

      <h2 style="${N.h2}">Size</h2>
      <p style="${N.bodySm} ${E.muted} max-width: ${O}; margin-bottom: ${k.subsection};">
        <code style="${N.monoSm}">size</code> sets the spinner wrapper to <code style="${N.monoSm}">lg</code>
        (96px, default) or <code style="${N.monoSm}">sm</code> (56px) — Marina's own two sizes for
        this component, reconciled to mms's <code style="${N.monoSm}">sm</code>/<code style="${N.monoSm}">lg</code>
        naming rather than its <code style="${N.monoSm}">large</code>/<code style="${N.monoSm}">small</code>.
      </p>
      ${G(a`
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
          <mms-button variant="secondary" label="Show small for 2.5s" @click=${()=>H(q)}></mms-button>
        </div>
        <mms-page-spinner ${I(q)} size="sm" label-text="Loading..."></mms-page-spinner>
      `)}

      <hr style="${E.divider}" />

      <h2 style="${N.h2}">Rotating labels</h2>
      <p style="${N.bodySm} ${E.muted} max-width: ${O}; margin-bottom: ${k.subsection};">
        For long-running operations, <code style="${N.monoSm}">label-texts</code> (pipe-separated)
        cycles through a set of messages every <code style="${N.monoSm}">label-interval</code>
        seconds (default 8) — <em>"Loading..."</em> → <em>"Almost there..."</em> →
        <em>"Hang tight..."</em> — instead of one static line sitting unchanged for a long wait.
        Each new message is also announced live as it rotates in.
      </p>
      ${G(a`
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
          <mms-button variant="secondary" label="Show rotating for 6s" @click=${()=>H(J,6e3)}></mms-button>
        </div>
        <mms-page-spinner
          ${I(J)}
          label-texts="Loading records...|Almost there...|Hang tight..."
          label-interval="2"
        ></mms-page-spinner>
      `)}

      <hr style="${E.divider}" />

      <!-- Accessibility -->
      <h2 style="${N.h2}">Accessibility</h2>

      <div style="margin-bottom: ${k.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Not interactive, and deliberately not focus-trapped."
          message="mms-page-spinner has no close affordance and nothing focusable inside it. WAI-ARIA APG has no dedicated pattern for a loading spinner at all; Carbon Design System states plainly that a loading indicator &quot;has no keyboard accessibility considerations since it is intentionally not operable or navigable.&quot; The scrim's stacking order already blocks pointer interaction with the page underneath — this component does not reach outside itself to make background content inert, matching that industry precedent rather than inventing modal-style lockdown for a non-modal role."
        ></mms-inline-alert>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${k.content};">
        <div slot="body-content">
        <p style="${N.bodySm}">
          <strong>Announces both start and completion.</strong> The label is exposed through an
          <code style="${N.monoSm}">aria-live="assertive"</code> region — assertive, not the more
          common polite <code style="${N.monoSm}">role="status"</code> default, because this blocks
          the whole page and the user needs to know immediately (Carbon's guidance). When
          <code style="${N.monoSm}">active</code> goes back to false, <code style="${N.monoSm}">complete-text</code>
          ("Loading complete" by default) is announced through the same region before clearing —
          closing a gap neither Marina's <code style="${N.monoSm}">ds-page-spinner</code> nor dxhub's
          own <code style="${N.monoSm}">LoadingFullScreen</code> address today.
        </p>
        </div>
      </mms-card>

      <h3 style="${N.h3}">WCAG 2.2 AA compliance</h3>
      ${P(w[`page-spinner`].rows)}

      <h3 style="${N.h3}">Screen reader behavior</h3>
      <ul style="${N.bodySm} ${E.muted} margin: 0 0 ${k.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${k.label};"><strong>On show:</strong> The label text is announced immediately via <code style="${N.monoSm}">aria-live="assertive"</code>.</li>
        <li style="margin-bottom: ${k.label};"><strong>Rotating labels:</strong> Each new message is announced as it rotates in, not just the first one.</li>
        <li style="margin-bottom: ${k.label};"><strong>On hide:</strong> <code style="${N.monoSm}">complete-text</code> is announced once, then the live region clears.</li>
        <li><strong>No focus stop:</strong> Not a tab stop — skipped entirely during keyboard navigation, by design (see Accessibility notes above).</li>
      </ul>

      <h3 style="${N.h3}">Keyboard navigation</h3>
      <p style="${N.bodySm} ${E.muted} max-width: ${O}; margin-bottom: ${k.subsection};">
        None. mms-page-spinner is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},X=L(),Z={name:`Playground`,tags:[`!dev`],args:{active:!0,size:`lg`,speed:`normal`,scrim:`dark`,colorScheme:`onyx`,labelText:`Loading records...`,labelTexts:`Loading records...|Almost there...|Hang tight, this can take a moment...`,labelInterval:3,completeText:`Loading complete`,theme:`maximus`,density:`default`},argTypes:{active:{name:`Active`,control:`boolean`,description:`Whether the overlay is visible`,table:{category:`Content`}},size:{name:`Size`,control:`select`,options:[`sm`,`lg`],description:`Spinner wrapper size: sm (56px) | lg (96px, default)`,table:{category:`Visual`}},speed:{name:`Speed`,control:`select`,options:[`normal`,`fast`],description:`Spin rotation speed: normal (1500ms, default) | fast (1000ms)`,table:{category:`Visual`}},scrim:{name:`Scrim`,control:`select`,options:[`dark`,`light`],description:`Overlay background: dark (default, black 70% overlay) | light (white 80% overlay). Pick based on what's behind the overlay, independent of page theme/mode — same reasoning as mms-hero-image's scrim prop. Content color is set separately by Color Scheme below.`,table:{category:`Visual`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Spinner color only (the label always stays on the fixed onyx text color). onyx (default) is theme-invariant and always valid. primary/secondary/accent are valid at Tier 1 or Tier 2 — Tier 3 for the selected Theme renders an explanatory card instead of the component.`,table:{category:`Visual`}},labelText:{name:`Label Text`,control:`text`,description:`Loading label, shown and announced. Ignored while a label-texts rotation is active.`,table:{category:`Content`}},labelTexts:{name:`Label Texts`,control:`text`,description:`Rotating messages, separated by "|" — any number of entries (e.g. "Loading...|Almost there...|Hang tight..." rotates through 3). Clear this field to see the static labelText instead.`,table:{category:`Content`}},labelInterval:{name:`Label Interval`,control:{type:`number`,min:1,max:30,step:1},description:`How long each label stays on screen before switching to the next one, in seconds. Only applies when label-texts has 2+ entries — ignored otherwise.`,table:{category:`Content`}},completeText:{name:`Complete Text`,control:`text`,description:`Message announced via the live region when active transitions to false`,table:{category:`Content`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-page-spinner has no compact-specific styling since it's a fixed-size overlay, not an interactive touch-target component`,table:{category:`Global`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.active&&r.push(`active`),n.size!==`lg`&&r.push(`size="${n.size}"`),n.speed!==`normal`&&r.push(`speed="${n.speed}"`),n.scrim!==`dark`&&r.push(`scrim="${n.scrim}"`),n.colorScheme!==`onyx`&&r.push(`color-scheme="${n.colorScheme}"`),n.labelText&&!n.labelTexts&&r.push(`label-text="${n.labelText}"`),n.labelTexts&&r.push(`label-texts="${n.labelTexts}"`),n.labelTexts&&n.labelInterval!==8&&r.push(`label-interval="${n.labelInterval}"`),n.completeText!==`Loading complete`&&r.push(`complete-text="${n.completeText}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-page-spinner\n  ${r.join(`
  `)}\n></mms-page-spinner>`},language:`html`}},controls:{sort:`none`}},render:e=>x(e.theme,e.colorScheme)===3?a`
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
      `:G(a`
      <mms-page-spinner
        ${I(X)}
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
    `)},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Page Spinner</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A full-page, blocking loading overlay — a scrim over the entire viewport with a centered
        spinner and label. Used during page-level loading states: a navigation transition, an
        initial data fetch, anything where the whole page is not yet usable. Not interactive; has
        no keyboard model.
      </p>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.subsection};">
        <div slot="body-content">
        <p style="\${t.bodySm}">
          <strong>Page Spinner or Loading Bar?</strong> Page Spinner blocks the whole page — nothing
          underneath it is usable while it is shown, and it carries no percentage. Use
          <code style="\${t.monoSm}">mms-loading-bar</code> instead when the rest of the page stays
          usable and the process reports (or can report) a percentage — a file upload, a save, a
          background sync.
        </p>
        </div>
      </mms-card>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
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

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Size</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
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

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Rotating labels</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
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

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="margin-bottom: \${space.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=\${false}
          summary="Not interactive, and deliberately not focus-trapped."
          message="mms-page-spinner has no close affordance and nothing focusable inside it. WAI-ARIA APG has no dedicated pattern for a loading spinner at all; Carbon Design System states plainly that a loading indicator &quot;has no keyboard accessibility considerations since it is intentionally not operable or navigable.&quot; The scrim's stacking order already blocks pointer interaction with the page underneath — this component does not reach outside itself to make background content inert, matching that industry precedent rather than inventing modal-style lockdown for a non-modal role."
        ></mms-inline-alert>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
        <p style="\${t.bodySm}">
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
      </mms-card>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['page-spinner'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>On show:</strong> The label text is announced immediately via <code style="\${t.monoSm}">aria-live="assertive"</code>.</li>
        <li style="margin-bottom: \${space.label};"><strong>Rotating labels:</strong> Each new message is announced as it rotates in, not just the first one.</li>
        <li style="margin-bottom: \${space.label};"><strong>On hide:</strong> <code style="\${t.monoSm}">complete-text</code> is announced once, then the live region clears.</li>
        <li><strong>No focus stop:</strong> Not a tab stop — skipped entirely during keyboard navigation, by design (see Accessibility notes above).</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        None. mms-page-spinner is not focusable and has no keyboard interaction model.
      </p>

    </div>
  \`
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Overview`,`PlaygroundStory`]}));$();export{Y as Overview,Z as PlaygroundStory,Q as __namedExportsOrder,U as default,$ as n,V as t};