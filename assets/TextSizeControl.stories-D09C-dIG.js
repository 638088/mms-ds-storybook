import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-B0BZwaT1.js";import{E as s,S as c,T as l,b as u,g as ee,h as d,n as f,p,r as m,t as te,w as ne}from"./mms-icon.component-DFVI3nJi.js";import{n as re,t as h}from"./validate-color-scheme-CB3dwOoW.js";import{n as g,r as _}from"./iframe-CcinUa1O.js";import{n as v,t as y}from"./localize-DGaV1nF3.js";import{i as b,n as ie,r as ae}from"./theme-constraints-BjFqvFCo.js";import{n as x,r as S}from"./wcag-coverage-DNhlI7v1.js";import{t as C}from"./mms-inline-alert.component-DL_QIcV8.js";import{a as w,c as T,d as E,i as D,n as O,o as k,r as A,u as j}from"./doc-styles-DkvR_Qyb.js";import{a as M,n as N}from"./a11y-outcome-B57XZvCQ.js";import{i as P,n as F,t as I}from"./ref-BV5aMvco.js";import{t as L}from"./mms-toast.component-C3YE848g.js";var R,z=e((()=>{o(),s(),ee(),d(),h(),te(),L(),v(),m(),R=class extends i{constructor(...e){super(...e),this.localize=new y(this),this.level=0,this.maxLevel=2,this.size=`md`,this.colorScheme=`onyx`,this.autoApply=!1,this.autoPersist=!1,this.persistKey=`mms-text-size-level`,this.autoToast=!1,this.increaseLimitMessage=`Already at the largest text size.`,this.decreaseLimitMessage=`Already at the smallest text size.`,this._announce=``}connectedCallback(){if(super.connectedCallback(),this.autoPersist)try{let e=Number(localStorage.getItem(this.persistKey));Number.isInteger(e)&&e>=0&&e<=this.maxLevel&&(this.level=e)}catch{}this.autoApply&&this._applyZoom()}firstUpdated(){re(this,this.colorScheme,`mms-text-size-control`)}_applyZoom(){let e=1+this.level/Math.max(this.maxLevel,1)*1;document.documentElement.style.zoom=`${e*100}%`}_showLimitToast(e){document.querySelectorAll(`mms-toast[data-mms-text-size-control-auto-toast]`).forEach(e=>e.remove());let t=document.createElement(`mms-toast`);t.setAttribute(`data-mms-text-size-control-auto-toast`,``),t.setAttribute(`alert-type`,`informational`),t.setAttribute(`message`,e),t.setAttribute(`auto-dismiss`,``),t.setAttribute(`auto-dismiss-duration`,`4000`),t.closeIcon=!1,t.addEventListener(`dismiss`,()=>t.remove()),document.body.appendChild(t)}_commit(e){let t=this.level===0,n=this.level===this.maxLevel;if(e===`decrease`&&t){this._announce=`${this.label??this.localize.term(`changeTextSize`)}: already at the smallest size`,this.autoToast&&this._showLimitToast(this.decreaseLimitMessage),this.dispatchEvent(new CustomEvent(`text-size-limit`,{detail:{direction:e,level:this.level,maxLevel:this.maxLevel},bubbles:!0,composed:!0}));return}if(e===`increase`&&n){this._announce=`${this.label??this.localize.term(`changeTextSize`)}: already at the largest size`,this.autoToast&&this._showLimitToast(this.increaseLimitMessage),this.dispatchEvent(new CustomEvent(`text-size-limit`,{detail:{direction:e,level:this.level,maxLevel:this.maxLevel},bubbles:!0,composed:!0}));return}if(this.level=e===`increase`?this.level+1:this.level-1,this._announce=`${this.label??this.localize.term(`changeTextSize`)}: level ${this.level+1} of ${this.maxLevel+1}`,this.autoApply&&this._applyZoom(),this.autoPersist)try{localStorage.setItem(this.persistKey,String(this.level))}catch{}this.dispatchEvent(new CustomEvent(`text-size-change`,{detail:{level:this.level,maxLevel:this.maxLevel,direction:e},bubbles:!0,composed:!0}))}render(){return a`
      <div class="wrapper" role="group" aria-label=${this.label??this.localize.term(`changeTextSize`)}>
        <button
          class="icon-button"
          type="button"
          aria-label=${this.decreaseLabel??this.localize.term(`decreaseTextSize`)}
          @click=${()=>this._commit(`decrease`)}
        >
          <mms-icon name="minus" size="sm"></mms-icon>
        </button>

        <span class="label" aria-hidden="true">${this.label??this.localize.term(`changeTextSize`)}</span>

        <button
          class="icon-button"
          type="button"
          aria-label=${this.increaseLabel??this.localize.term(`increaseTextSize`)}
          @click=${()=>this._commit(`increase`)}
        >
          <mms-icon name="plus" size="sm"></mms-icon>
        </button>

        <span class="visually-hidden" aria-live="polite">${this._announce}</span>
      </div>
    `}static{this.styles=[l,p,r`
      /* Color cascade mirrors mms-button's colorScheme resolution exactly
         (same --_text/--_text-hover chain, same per-scheme fallback steps).
         Default onyx — structural, theme-invariant, matches DXHub's
         unbranded "quiet button" treatment. */
      :host {
        display: inline-block;
        --_text: var(--color-primary-11, var(--color-primary-9));
        --_text-hover: var(--color-primary-12, var(--color-primary-11, var(--color-primary-9)));
      }

      :host([color-scheme='secondary']) {
        --_text: var(--color-secondary-11, var(--color-secondary-9));
        --_text-hover: var(--color-secondary-12, var(--color-secondary-11, var(--color-secondary-9)));
      }

      :host([color-scheme='accent']) {
        --_text: var(--color-accent-11, var(--color-accent-9));
        --_text-hover: var(--color-accent-12, var(--color-accent-11, var(--color-accent-9)));
      }

      :host([color-scheme='onyx']) {
        --_text: var(--color-onyx-11, var(--color-onyx-9));
        --_text-hover: var(--color-onyx-12, var(--color-onyx-11, var(--color-onyx-9)));
      }

      .wrapper {
        display: inline-flex;
        align-items: center;
        gap: 0;
      }

      .label {
        color: var(--color-text-default);
        font-weight: var(--font-weight-medium);
      }

      :host([size='sm']) .label {
        font-family: var(--type-ui-label-sm-family);
        font-size: var(--type-ui-label-sm-size);
        line-height: var(--type-ui-label-sm-line-height);
        letter-spacing: var(--type-ui-label-sm-letter-spacing);
      }

      :host([size='md']) .label,
      :host(:not([size])) .label {
        font-family: var(--type-ui-label-md-family);
        font-size: var(--type-ui-label-md-size);
        line-height: var(--type-ui-label-md-line-height);
        letter-spacing: var(--type-ui-label-md-letter-spacing);
      }

      :host([size='lg']) .label {
        font-family: var(--type-ui-label-lg-family);
        font-size: var(--type-ui-label-lg-size);
        line-height: var(--type-ui-label-lg-line-height);
        letter-spacing: var(--type-ui-label-lg-letter-spacing);
      }

      /* Icon-only ghost-button recipe, copied from mms-button's icon-only
         ghost sizing exactly (--spacing-xs2/sm1/sm2 by size, 24px floor for
         WCAG 2.2 SC 2.5.8, 44px bump on coarse pointers for SC 2.5.5 AAA). */
      .icon-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;
        min-width: 24px;
        min-height: 24px;
        background: transparent;
        border: none;
        border-radius: var(--radius-sm);
        padding: var(--spacing-sm1);
        color: var(--_text);
        cursor: pointer;
        transition: color var(--motion-duration-base) var(--motion-easing-standard);
      }

      :host([size='sm']) .icon-button {
        padding: var(--spacing-xs2);
      }

      :host([size='lg']) .icon-button {
        padding: var(--spacing-sm2);
      }

      @media (pointer: coarse) {
        .icon-button {
          min-width: 44px;
          min-height: 44px;
        }
      }

      /* Matches mms-button's ghost hover exactly — color shift only, no fill.
         Keeps this icon-only control out of the same hover-fill-contrast
         problem the menu-button revision hit (no neutral step between the
         resting background and the border clears 3:1 at a decorative-wash
         weight). Text/icon-level color change is a 1.4.3 concern instead,
         already verified ≥13:1 here. */
      .icon-button:hover {
        color: var(--_text-hover);
      }

      .icon-button:focus-visible {
        outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
        outline-offset: var(--focus-ring-offset);
      }

      @media (prefers-reduced-motion: reduce) {
        .icon-button {
          transition-duration: var(--motion-duration-instant);
        }
      }

      .visually-hidden {
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
    `]}},f([c({type:String})],R.prototype,`label`,void 0),f([c({type:String,attribute:`increase-label`})],R.prototype,`increaseLabel`,void 0),f([c({type:String,attribute:`decrease-label`})],R.prototype,`decreaseLabel`,void 0),f([c({type:Number,reflect:!0})],R.prototype,`level`,void 0),f([c({type:Number,attribute:`max-level`})],R.prototype,`maxLevel`,void 0),f([c({type:String,reflect:!0})],R.prototype,`size`,void 0),f([c({type:String,reflect:!0,attribute:`color-scheme`})],R.prototype,`colorScheme`,void 0),f([c({type:Boolean,reflect:!0,attribute:`auto-apply`})],R.prototype,`autoApply`,void 0),f([c({type:Boolean,reflect:!0,attribute:`auto-persist`})],R.prototype,`autoPersist`,void 0),f([c({type:String,attribute:`persist-key`})],R.prototype,`persistKey`,void 0),f([c({type:Boolean,reflect:!0,attribute:`auto-toast`})],R.prototype,`autoToast`,void 0),f([c({type:String,attribute:`increase-limit-message`})],R.prototype,`increaseLimitMessage`,void 0),f([c({type:String,attribute:`decrease-limit-message`})],R.prototype,`decreaseLimitMessage`,void 0),f([u()],R.prototype,`_announce`,void 0),R=f([ne(`mms-text-size-control`)],R)})),B=t({CustomSetup:()=>Z,Overview:()=>Y,PlaygroundStory:()=>X,__namedExportsOrder:()=>Q,default:()=>V}),V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{o(),_(),I(),z(),L(),C(),ae(),x(),N(),T(),V={title:`Actions/Text Size Control`,tags:[`!autodocs`]},H=null,U=null,W=null,G=!1,K=()=>{let e=H?.contentDocument;!H||!e||(H.style.height=`0px`,H.style.height=`${e.documentElement.scrollHeight+8}px`)},q=()=>{if(!H)return;let e=document.body.getAttribute(`data-mode`)===`dark`?`dark`:`light`;H.src=`./iframe.html?id=actions-text-size-control--playground-story&viewMode=story&globals=backgrounds.value:${e}`},J=e=>{H=e??null,H&&(H.addEventListener(`load`,()=>{K(),requestAnimationFrame(()=>requestAnimationFrame(K));let e=H?.contentDocument?.getElementById(`storybook-root`);e&&(U?.disconnect(),U=new ResizeObserver(K),U.observe(e)),W&&clearInterval(W),W=setInterval(K,400)}),q(),G||(G=!0,new MutationObserver(q).observe(document.body,{attributes:!0,attributeFilter:[`data-mode`]})))},Y={name:`Overview`,render:()=>a`
    <div data-theme=${A} data-mode=${k()} style=${O}>

      <!-- Header -->
      <h1 style="${E.h1}">Text Size Control</h1>
      <p style="${E.body} ${w.muted} max-width: ${D}; margin-bottom: ${j.subsection};">
        Two buttons that let a user make a page's text bigger or smaller, a few steps at a time.
        Net-new, government-specific — no ui-kit/Marina equivalent.
      </p>

      <div style="margin-bottom: ${j.content};">
        <mms-inline-alert
          alert-type="caution"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Not recommended for new projects."
          message="Using the browser or device's own text-size settings (Ctrl/Cmd +/- on desktop, text-size settings on mobile) is the better long-term choice. This component exists for sites that specifically need their own in-page control. It's modeled on a control already used on 16+ DXHub state sites, so teams migrating from DXHub don't lose that feature."
        ></mms-inline-alert>
      </div>

      <div style="margin-bottom: ${j.subsection};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="A note on DXHub's own version."
          message="DXHub's original control has a known, unfixed bug where some page content doesn't resize cleanly at larger steps (ticket DAC-143). This component's auto-apply option (see Props below) avoids that specific problem — noted here for context, not as a claim that it fixes DXHub's own code."
        ></mms-inline-alert>
      </div>

      <hr style="${w.divider}" />

      <!-- Try it -->
      <h2 style="${E.h2}">Try it</h2>
      <div style="${w.frame} margin-bottom: ${j.subsection};">
        <iframe
          ${P(J)}
          style="width: 100%; min-height: 240px; border: 0; display: block;"
          title="mms-text-size-control Playground — interactive demo"
        ></iframe>
      </div>

      <hr style="${w.divider}" />

      <!-- Props -->
      <h2 style="${E.h2}">Props</h2>
      <table style="${w.table} margin-bottom: ${j.content};">
        <thead>
          <tr>
            <th style="${w.th}">Prop</th>
            <th style="${w.th}">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${w.td}"><code style="${E.monoSm}">label</code></td>
            <td style="${w.td}">Visible label between the two buttons; also the accessible name for the group. Default "Change text size".</td>
          </tr>
          <tr>
            <td style="${w.td}"><code style="${E.monoSm}">increase-label</code> / <code style="${E.monoSm}">decrease-label</code></td>
            <td style="${w.td}">Accessible names (aria-label) for the icon-only +/- buttons — translatable, not hardcoded.</td>
          </tr>
          <tr>
            <td style="${w.td}"><code style="${E.monoSm}">level</code> / <code style="${E.monoSm}">max-level</code></td>
            <td style="${w.td}">
              The current step (starting at 0) and the highest step allowed. Default 0 / 2 —
              three steps total. Three steps is enough to cover <strong>WCAG 1.4.4 Resize Text</strong>'s
              200% requirement if each step maps to roughly 100%/150%/200%. You can raise
              <code style="${E.monoSm}">max-level</code> for more steps, but more than 3 hasn't been tested.
            </td>
          </tr>
          <tr>
            <td style="${w.td}"><code style="${E.monoSm}">auto-apply</code> / <code style="${E.monoSm}">auto-persist</code> / <code style="${E.monoSm}">auto-toast</code></td>
            <td style="${w.td}">
              Three optional switches, all off by default. <code style="${E.monoSm}">auto-apply</code>
              makes the text actually resize on the page. <code style="${E.monoSm}">auto-persist</code>
              remembers the user's chosen size for next time. <code style="${E.monoSm}">auto-toast</code>
              shows its own toast when the user hits the smallest/largest size. Want to build any
              of this yourself instead? See the <strong>Custom Setup</strong> tab.
            </td>
          </tr>
        </tbody>
      </table>

      <p style="${E.bodySm} ${w.muted} max-width: ${D}; margin-bottom: ${j.content};">
        By default, this component only tracks the step number and announces when it changes —
        it doesn't resize anything, remember anything, or show any message on its own. Turn on
        <code style="${E.monoSm}">auto-apply</code>/<code style="${E.monoSm}">auto-persist</code>/<code style="${E.monoSm}">auto-toast</code>
        and it does all three itself:
      </p>
      <pre style="${w.pre} margin-bottom: ${j.subsection};"><code>&lt;mms-text-size-control
  auto-apply
  auto-persist
  auto-toast
  persist-key="my-app-text-size"
&gt;&lt;/mms-text-size-control&gt;</code></pre>

      <hr style="${w.divider}" />

      <!-- Accessibility -->
      <h2 style="${E.h2}">Accessibility</h2>

      <h3 style="${E.h3}">WCAG 2.2 AA compliance</h3>
      ${S[`text-size-control`]?M(S[`text-size-control`].rows):n}

      <h3 style="${E.h3}">Screen reader behavior</h3>
      <ul style="${E.bodySm} ${w.muted} margin: 0 0 ${j.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${j.label};"><strong>Group:</strong> The two buttons and label are wrapped in a labeled group (<code style="${E.monoSm}">role="group"</code>), so screen readers announce them as a related set</li>
        <li style="margin-bottom: ${j.label};"><strong>Buttons:</strong> Each announces as a plain button with its own accessible name — never disabled; at a limit, the button stays focusable and clickable and announces the limit instead of changing the level (disabling the currently-focused control silently drops focus to <code style="${E.monoSm}">&lt;body&gt;</code> with no refocus target, confirmed live — this avoids that)</li>
        <li><strong>On change:</strong> A polite live region announces the new step, since the visual size change alone isn't otherwise surfaced to screen reader users</li>
      </ul>

      <h3 style="${E.h3}">Keyboard navigation</h3>
      <table style="${w.table} margin-bottom: ${j.subsection};">
        <thead>
          <tr>
            <th style="${w.th} width: 160px;">Key</th>
            <th style="${w.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${w.td}"><kbd style="${w.kbd}">Tab</kbd> / <kbd style="${w.kbd}">Shift+Tab</kbd></td>
            <td style="${w.td}">Moves focus between the decrease and increase buttons — standard tab order, no custom key handling</td>
          </tr>
          <tr>
            <td style="${w.td}"><kbd style="${w.kbd}">Enter</kbd> / <kbd style="${w.kbd}">Space</kbd></td>
            <td style="${w.td}">Activates the focused button</td>
          </tr>
        </tbody>
      </table>

      <hr style="${w.divider}" />

      <!-- Usage -->
      <h2 style="${E.h2}">Usage</h2>
      <pre style="${w.pre}"><code>&lt;mms-text-size-control
  level="0"
  max-level="2"
  @text-size-change=${`$`}{(e) => applyTextSize(e.detail.level)}
&gt;&lt;/mms-text-size-control&gt;</code></pre>

    </div>
  `},X={name:`Playground`,tags:[`!dev`],args:{label:`Change text size`,increaseLabel:`Increase text size`,decreaseLabel:`Decrease text size`,level:0,maxLevel:2,size:`md`,colorScheme:`onyx`,autoApply:!1,autoPersist:!1,autoToast:!1,theme:`maximus`,density:`default`},decorators:[e=>a`
      <div style="font-family: var(--font-family-body); padding: var(--spacing-xs1) var(--spacing-md1); margin-top: 0;">
        <div
          style="
            min-height: 160px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: var(--spacing-lg1);
          "
        >
          ${e()}
        </div>
      </div>
    `],argTypes:{label:{name:`Label`,control:`text`,description:`Visible, non-interactive label between the two buttons; also the accessible name for the group`,table:{category:`Component Props`}},increaseLabel:{name:`Increase label`,control:`text`,description:`Accessible name (aria-label) for the increase button — icon-only, no visible text`,table:{category:`Component Props`}},decreaseLabel:{name:`Decrease label`,control:`text`,description:`Accessible name (aria-label) for the decrease button — icon-only, no visible text`,table:{category:`Component Props`}},level:{name:`Level`,control:{type:`number`,min:0,max:2,step:1},description:`Current step (controlled)`,table:{category:`Component Props`}},maxLevel:{name:`Max level`,control:{type:`number`,min:1,max:5,step:1},description:`Highest step index. No technical ceiling, but 2 (three total levels) is the supported default — enough to satisfy WCAG 1.4.4's 200% target if the host maps levels to ~100/150/200%. Past 3 levels is unverified.`,table:{category:`Component Props`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Trigger text/padding scale — mirrors mms-button's size prop`,table:{category:`Component Props`}},colorScheme:{name:`Color scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Trigger color palette — mirrors mms-button's colorScheme prop. Default onyx (structural, theme-invariant)`,table:{category:`Component Props`}},autoApply:{name:`Auto apply`,control:`boolean`,description:`Opt-in: makes the text actually bigger/smaller on the page when clicked, by itself. Off by default — normally the host has to do this (see the Custom Setup tab).`,table:{category:`Opt-in Behavior`}},autoPersist:{name:`Auto persist`,control:`boolean`,description:`Opt-in: remembers the chosen level so it's still applied next time the page loads. Does not by itself make text bigger/smaller — pair with Auto apply for that. Off by default — normally the host owns this (see the Custom Setup tab).`,table:{category:`Opt-in Behavior`}},autoToast:{name:`Auto toast`,control:`boolean`,description:`Opt-in: shows its own toast when a button is clicked at the smallest/largest size. Off by default — normally the host shows its own feedback, same as the manual toast below (see the Custom Setup tab).`,table:{category:`Opt-in Behavior`}},theme:{name:`Theme`,control:`select`,options:g,description:`Brand theme (affects typography and surface tokens)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-text-size-control has no compact-specific styling yet`,table:{category:`Global`}}},render:e=>{let t=b(e.theme,e.colorScheme),r=ie(e.theme,e.colorScheme);if(!t){let t=r===2?`Tier 2 (Text + Surface)`:`Tier 3 (Decorative)`,n=r===2?`Lacks step 10 (hover state). Use for branded text or badges, not interactive triggers.`:`Lacks text contrast and hover states. Decorative backgrounds only.`;return a`
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
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">${e.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
            <strong style="color: #991b1b !important;">${t}:</strong> ${n}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7; color: #991b1b !important;">
            See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      `}e.autoApply||(document.documentElement.style.zoom=``);let i=F(),o=F(),s=F(),c=(t,n)=>{if(!e.autoApply){let e=1+t/Math.max(n,1)*.5;i.value&&(i.value.style.fontSize=`${e}rem`)}o.value&&(o.value.textContent=`Level ${t+1} of ${n+1}`)},l=t=>{if(e.autoToast)return;let n=s.value;if(!n)return;n.querySelectorAll(`mms-toast`).forEach(e=>e.remove());let r=document.createElement(`mms-toast`);r.setAttribute(`alert-type`,`informational`),r.setAttribute(`message`,t.direction===`increase`?`Already at the largest text size.`:`Already at the smallest text size.`),r.setAttribute(`auto-dismiss`,``),r.setAttribute(`auto-dismiss-duration`,`4000`),r.setAttribute(`left-icon`,``),r.closeIcon=!1,r.addEventListener(`dismiss`,()=>r.remove()),n.appendChild(r)};return queueMicrotask(()=>c(e.level,e.maxLevel)),a`
    <div class="playground-demo">
      ${e.autoApply?a`
        <p style="${E.caption} opacity: 0.75; text-align: center; margin: 0 0 var(--spacing-sm1);">
          Auto apply is on — the whole demo below zooms together, not just the sample paragraph.
        </p>
      `:n}
      <div style="display: flex; justify-content: center;">
        <mms-text-size-control
          label=${e.label}
          increase-label=${e.increaseLabel}
          decrease-label=${e.decreaseLabel}
          level=${e.level}
          max-level=${e.maxLevel}
          size=${e.size}
          color-scheme=${e.colorScheme}
          ?auto-apply=${e.autoApply}
          ?auto-persist=${e.autoPersist}
          ?auto-toast=${e.autoToast}
          persist-key="mms-text-size-control-playground-demo"
          data-density=${e.density===`compact`?`compact`:n}
          @text-size-change=${e=>{c(e.detail.level,e.detail.maxLevel)}}
          @text-size-limit=${e=>l(e.detail)}
        ></mms-text-size-control>
      </div>

      <div ${P(s)}></div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: var(--spacing-md1) 0;" />

      <p ${P(i)} class="sample-text" style="margin: 0 0 var(--spacing-md1); font-size: 1rem;">
        This sample paragraph grows and shrinks as you change the text size — exactly what a
        consuming app wires up from the <code style="font-family: var(--type-code-inline-family); font-size: 0.875em;">text-size-change</code> event (the component itself
        changes nothing on its own).
      </p>
      <p ${P(o)} class="sample-readout" style="${E.caption} opacity: 0.7; margin: var(--spacing-md1) 0 0;"></p>
    </div>
  `}},Z={name:`Custom Setup`,render:()=>a`
    <div data-theme=${A} data-mode=${k()} style=${O}>

      <h1 style="${E.h1}">Custom Setup</h1>
      <p style="${E.body} ${w.muted} max-width: ${D}; margin-bottom: ${j.subsection};">
        The <code style="${E.monoSm}">auto-apply</code>/<code style="${E.monoSm}">auto-persist</code>/<code style="${E.monoSm}">auto-toast</code>
        switches (see the <strong>Overview</strong> tab) cover most cases with zero wiring. This
        page is for when they don't - a different place to save the choice than
        <code style="${E.monoSm}">localStorage</code>, or something other than a toast when the
        user hits the limit.
      </p>

      <hr style="${w.divider}" />

      <h2 style="${E.h2}">Want to do it yourself instead?</h2>
      <p style="${E.bodySm} ${w.muted} max-width: ${D}; margin-bottom: ${j.content};">
        The component always fires <code style="${E.monoSm}">text-size-change</code> and
        <code style="${E.monoSm}">text-size-limit</code>, whether or not the switches are on, so
        you can listen for them either way:
      </p>
      <pre style="${w.pre} margin-bottom: ${j.subsection};"><code>&lt;mms-text-size-control
  level=${`$`}{currentLevel}
  max-level="2"
  @text-size-change=${`$`}{handleTextSizeChange}
  @text-size-limit=${`$`}{handleTextSizeLimit}
&gt;&lt;/mms-text-size-control&gt;</code></pre>

      <h3 style="${E.h3}">Remembering the choice yourself</h3>
      <p style="${E.bodySm} ${w.muted} max-width: ${D}; margin-bottom: ${j.content};">
        Read back whatever you saved last time and pass it in as
        <code style="${E.monoSm}">level</code> when the page loads, then apply the same scaling
        so it's correct right away.
      </p>
      <pre style="${w.pre} margin-bottom: ${j.subsection};"><code>let currentLevel = Number(localStorage.getItem('text-size-level') ?? 0);
applyScale(currentLevel); // run once on load

function handleTextSizeChange(e) {
  currentLevel = e.detail.level;
  localStorage.setItem('text-size-level', String(currentLevel));
  applyScale(currentLevel);
}</code></pre>

      <h3 style="${E.h3}">Showing your own message</h3>
      <p style="${E.bodySm} ${w.muted} max-width: ${D}; margin-bottom: ${j.content};">
        <code style="${E.monoSm}">text-size-limit</code> fires when someone clicks a button but is
        already at the smallest/largest size - nothing changes, so it's a separate signal from
        <code style="${E.monoSm}">text-size-change</code>. Screen reader users get an announcement
        either way, with or without this.
      </p>
      <pre style="${w.pre} margin-bottom: ${j.subsection};"><code>function handleTextSizeLimit(e) {
  const { direction } = e.detail; // 'increase' | 'decrease'
  const toast = document.createElement('mms-toast');
  toast.message = direction === 'increase'
    ? 'Already at the largest text size.'
    : 'Already at the smallest text size.';
  toast.autoDismiss = true;
  document.body.appendChild(toast);
}</code></pre>

      <hr style="${w.divider}" />

      <p style="${E.bodySm} ${w.muted} max-width: ${D};">
        See the <strong>Playground</strong> tab for a fully working example - open its source in
        Storybook's addon panel to see the real code.
      </p>

    </div>
  `},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Text Size Control</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Two buttons that let a user make a page's text bigger or smaller, a few steps at a time.
        Net-new, government-specific — no ui-kit/Marina equivalent.
      </p>

      <div style="margin-bottom: \${space.content};">
        <mms-inline-alert
          alert-type="caution"
          role="note"
          aria-live="off"
          .dismissible=\${false}
          summary="Not recommended for new projects."
          message="Using the browser or device's own text-size settings (Ctrl/Cmd +/- on desktop, text-size settings on mobile) is the better long-term choice. This component exists for sites that specifically need their own in-page control. It's modeled on a control already used on 16+ DXHub state sites, so teams migrating from DXHub don't lose that feature."
        ></mms-inline-alert>
      </div>

      <div style="margin-bottom: \${space.subsection};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=\${false}
          summary="A note on DXHub's own version."
          message="DXHub's original control has a known, unfixed bug where some page content doesn't resize cleanly at larger steps (ticket DAC-143). This component's auto-apply option (see Props below) avoids that specific problem — noted here for context, not as a claim that it fixes DXHub's own code."
        ></mms-inline-alert>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Try it -->
      <h2 style="\${t.h2}">Try it</h2>
      <div style="\${doc.frame} margin-bottom: \${space.subsection};">
        <iframe
          \${ref(handleOverviewIframeRef)}
          style="width: 100%; min-height: 240px; border: 0; display: block;"
          title="mms-text-size-control Playground — interactive demo"
        ></iframe>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Props -->
      <h2 style="\${t.h2}">Props</h2>
      <table style="\${doc.table} margin-bottom: \${space.content};">
        <thead>
          <tr>
            <th style="\${doc.th}">Prop</th>
            <th style="\${doc.th}">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">label</code></td>
            <td style="\${doc.td}">Visible label between the two buttons; also the accessible name for the group. Default "Change text size".</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">increase-label</code> / <code style="\${t.monoSm}">decrease-label</code></td>
            <td style="\${doc.td}">Accessible names (aria-label) for the icon-only +/- buttons — translatable, not hardcoded.</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">level</code> / <code style="\${t.monoSm}">max-level</code></td>
            <td style="\${doc.td}">
              The current step (starting at 0) and the highest step allowed. Default 0 / 2 —
              three steps total. Three steps is enough to cover <strong>WCAG 1.4.4 Resize Text</strong>'s
              200% requirement if each step maps to roughly 100%/150%/200%. You can raise
              <code style="\${t.monoSm}">max-level</code> for more steps, but more than 3 hasn't been tested.
            </td>
          </tr>
          <tr>
            <td style="\${doc.td}"><code style="\${t.monoSm}">auto-apply</code> / <code style="\${t.monoSm}">auto-persist</code> / <code style="\${t.monoSm}">auto-toast</code></td>
            <td style="\${doc.td}">
              Three optional switches, all off by default. <code style="\${t.monoSm}">auto-apply</code>
              makes the text actually resize on the page. <code style="\${t.monoSm}">auto-persist</code>
              remembers the user's chosen size for next time. <code style="\${t.monoSm}">auto-toast</code>
              shows its own toast when the user hits the smallest/largest size. Want to build any
              of this yourself instead? See the <strong>Custom Setup</strong> tab.
            </td>
          </tr>
        </tbody>
      </table>

      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        By default, this component only tracks the step number and announces when it changes —
        it doesn't resize anything, remember anything, or show any message on its own. Turn on
        <code style="\${t.monoSm}">auto-apply</code>/<code style="\${t.monoSm}">auto-persist</code>/<code style="\${t.monoSm}">auto-toast</code>
        and it does all three itself:
      </p>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};"><code>&lt;mms-text-size-control
  auto-apply
  auto-persist
  auto-toast
  persist-key="my-app-text-size"
&gt;&lt;/mms-text-size-control&gt;</code></pre>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${wcagTables['text-size-control'] ? renderWcagComplianceTable(wcagTables['text-size-control'].rows) : nothing}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Group:</strong> The two buttons and label are wrapped in a labeled group (<code style="\${t.monoSm}">role="group"</code>), so screen readers announce them as a related set</li>
        <li style="margin-bottom: \${space.label};"><strong>Buttons:</strong> Each announces as a plain button with its own accessible name — never disabled; at a limit, the button stays focusable and clickable and announces the limit instead of changing the level (disabling the currently-focused control silently drops focus to <code style="\${t.monoSm}">&lt;body&gt;</code> with no refocus target, confirmed live — this avoids that)</li>
        <li><strong>On change:</strong> A polite live region announces the new step, since the visual size change alone isn't otherwise surfaced to screen reader users</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <table style="\${doc.table} margin-bottom: \${space.subsection};">
        <thead>
          <tr>
            <th style="\${doc.th} width: 160px;">Key</th>
            <th style="\${doc.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Tab</kbd> / <kbd style="\${doc.kbd}">Shift+Tab</kbd></td>
            <td style="\${doc.td}">Moves focus between the decrease and increase buttons — standard tab order, no custom key handling</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd> / <kbd style="\${doc.kbd}">Space</kbd></td>
            <td style="\${doc.td}">Activates the focused button</td>
          </tr>
        </tbody>
      </table>

      <hr style="\${doc.divider}" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="\${doc.pre}"><code>&lt;mms-text-size-control
  level="0"
  max-level="2"
  @text-size-change=\${'$'}{(e) => applyTextSize(e.detail.level)}
&gt;&lt;/mms-text-size-control&gt;</code></pre>

    </div>
  \`
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    label: 'Change text size',
    increaseLabel: 'Increase text size',
    decreaseLabel: 'Decrease text size',
    level: 0,
    maxLevel: 2,
    size: 'md',
    colorScheme: 'onyx',
    autoApply: false,
    autoPersist: false,
    autoToast: false,
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => html\`
      <div style="font-family: var(--font-family-body); padding: var(--spacing-xs1) var(--spacing-md1); margin-top: 0;">
        <div
          style="
            min-height: 160px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: var(--spacing-lg1);
          "
        >
          \${story()}
        </div>
      </div>
    \`],
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Visible, non-interactive label between the two buttons; also the accessible name for the group',
      table: {
        category: 'Component Props'
      }
    },
    increaseLabel: {
      name: 'Increase label',
      control: 'text',
      description: 'Accessible name (aria-label) for the increase button — icon-only, no visible text',
      table: {
        category: 'Component Props'
      }
    },
    decreaseLabel: {
      name: 'Decrease label',
      control: 'text',
      description: 'Accessible name (aria-label) for the decrease button — icon-only, no visible text',
      table: {
        category: 'Component Props'
      }
    },
    level: {
      name: 'Level',
      control: {
        type: 'number',
        min: 0,
        max: 2,
        step: 1
      },
      description: 'Current step (controlled)',
      table: {
        category: 'Component Props'
      }
    },
    maxLevel: {
      name: 'Max level',
      control: {
        type: 'number',
        min: 1,
        max: 5,
        step: 1
      },
      description: 'Highest step index. No technical ceiling, but 2 (three total levels) is the supported default — enough to satisfy WCAG 1.4.4\\'s 200% target if the host maps levels to ~100/150/200%. Past 3 levels is unverified.',
      table: {
        category: 'Component Props'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Trigger text/padding scale — mirrors mms-button\\'s size prop',
      table: {
        category: 'Component Props'
      }
    },
    colorScheme: {
      name: 'Color scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Trigger color palette — mirrors mms-button\\'s colorScheme prop. Default onyx (structural, theme-invariant)',
      table: {
        category: 'Component Props'
      }
    },
    autoApply: {
      name: 'Auto apply',
      control: 'boolean',
      description: 'Opt-in: makes the text actually bigger/smaller on the page when clicked, by itself. Off by default — normally the host has to do this (see the Custom Setup tab).',
      table: {
        category: 'Opt-in Behavior'
      }
    },
    autoPersist: {
      name: 'Auto persist',
      control: 'boolean',
      description: 'Opt-in: remembers the chosen level so it\\'s still applied next time the page loads. Does not by itself make text bigger/smaller — pair with Auto apply for that. Off by default — normally the host owns this (see the Custom Setup tab).',
      table: {
        category: 'Opt-in Behavior'
      }
    },
    autoToast: {
      name: 'Auto toast',
      control: 'boolean',
      description: 'Opt-in: shows its own toast when a button is clicked at the smallest/largest size. Off by default — normally the host shows its own feedback, same as the manual toast below (see the Custom Setup tab).',
      table: {
        category: 'Opt-in Behavior'
      }
    },
    theme: {
      name: 'Theme',
      control: 'select',
      options: BRAND_ORDER,
      description: 'Brand theme (affects typography and surface tokens)',
      table: {
        category: 'Global'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Accepted as a global attribute passthrough — mms-text-size-control has no compact-specific styling yet',
      table: {
        category: 'Global'
      }
    }
  },
  render: (args: {
    label: string;
    increaseLabel: string;
    decreaseLabel: string;
    level: number;
    maxLevel: number;
    size: string;
    colorScheme: string;
    autoApply: boolean;
    autoPersist: boolean;
    autoToast: boolean;
    density: string;
    theme: string;
  }) => {
    // Validate colorScheme × theme combination using shared config — same guard mms-toggle/mms-button use.
    const valid = isValidColorScheme(args.theme as Theme, args.colorScheme as ColorScheme);
    const tier = getPaletteTier(args.theme as Theme, args.colorScheme as ColorScheme);
    if (!valid) {
      const tierLabel = tier === 2 ? 'Tier 2 (Text + Surface)' : 'Tier 3 (Decorative)';
      const tierReason = tier === 2 ? 'Lacks step 10 (hover state). Use for branded text or badges, not interactive triggers.' : 'Lacks text contrast and hover states. Decorative backgrounds only.';
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
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
            <strong style="color: #991b1b !important;">\${tierLabel}:</strong> \${tierReason}
          </p>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7; color: #991b1b !important;">
            See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
          </p>
        </div>
      \`;
    }

    // Demo-only cleanup: the component itself never un-zooms when auto-apply
    // turns off (out of scope for it to track that) — reset here so toggling
    // the Playground control off doesn't leave a stale zoom on the canvas.
    if (!args.autoApply) {
      document.documentElement.style.zoom = '';
    }
    const sampleRef = createRef<HTMLElement>();
    const readoutRef = createRef<HTMLElement>();
    const toastContainerRef = createRef<HTMLElement>();
    const applyTextSize = (level: number, maxLevel: number) => {
      // When autoApply is on, the component already zooms the whole demo
      // itself (CSS zoom on document.documentElement) — scaling the sample
      // text again here on top of that would double-apply. Leave it alone
      // and let the native zoom carry it, same as everything else on the page.
      if (!args.autoApply) {
        const scale = 1 + level / Math.max(maxLevel, 1) * 0.5; // 1rem → 1.5rem across the range
        if (sampleRef.value) sampleRef.value.style.fontSize = \`\${scale}rem\`;
      }
      if (readoutRef.value) readoutRef.value.textContent = \`Level \${level + 1} of \${maxLevel + 1}\`;
    };
    // Host owns the toast entirely — the component only fires text-size-limit,
    // it never renders feedback itself (see its own JSDoc on that event).
    const showLimitToast = (detail: TextSizeLimitDetail) => {
      // When autoToast is on, the component already shows its own toast —
      // showing this one too would duplicate it.
      if (args.autoToast) return;
      const container = toastContainerRef.value;
      if (!container) return;
      container.querySelectorAll('mms-toast').forEach(el => el.remove());
      const toast = document.createElement('mms-toast');
      toast.setAttribute('alert-type', 'informational');
      toast.setAttribute('message', detail.direction === 'increase' ? 'Already at the largest text size.' : 'Already at the smallest text size.');
      toast.setAttribute('auto-dismiss', ''); // 4s, not mms-toast's 8s default — short, no-action message
      toast.setAttribute('auto-dismiss-duration', '4000');
      toast.setAttribute('left-icon', '');
      (toast as unknown as {
        closeIcon: boolean;
      }).closeIcon = false;
      toast.addEventListener('dismiss', () => toast.remove());
      container.appendChild(toast);
    };
    // Initialize once the refs are attached, matching args.level on first render.
    queueMicrotask(() => applyTextSize(args.level, args.maxLevel));
    return html\`
    <div class="playground-demo">
      \${args.autoApply ? html\`
        <p style="\${t.caption} opacity: 0.75; text-align: center; margin: 0 0 var(--spacing-sm1);">
          Auto apply is on — the whole demo below zooms together, not just the sample paragraph.
        </p>
      \` : nothing}
      <div style="display: flex; justify-content: center;">
        <mms-text-size-control
          label=\${args.label}
          increase-label=\${args.increaseLabel}
          decrease-label=\${args.decreaseLabel}
          level=\${args.level}
          max-level=\${args.maxLevel}
          size=\${args.size}
          color-scheme=\${args.colorScheme}
          ?auto-apply=\${args.autoApply}
          ?auto-persist=\${args.autoPersist}
          ?auto-toast=\${args.autoToast}
          persist-key="mms-text-size-control-playground-demo"
          data-density=\${args.density === 'compact' ? 'compact' : nothing}
          @text-size-change=\${(e: CustomEvent<TextSizeChangeDetail>) => {
      applyTextSize(e.detail.level, e.detail.maxLevel);
    }}
          @text-size-limit=\${(e: CustomEvent<TextSizeLimitDetail>) => showLimitToast(e.detail)}
        ></mms-text-size-control>
      </div>

      <div \${ref(toastContainerRef)}></div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: var(--spacing-md1) 0;" />

      <p \${ref(sampleRef)} class="sample-text" style="margin: 0 0 var(--spacing-md1); font-size: 1rem;">
        This sample paragraph grows and shrinks as you change the text size — exactly what a
        consuming app wires up from the <code style="font-family: var(--type-code-inline-family); font-size: 0.875em;">text-size-change</code> event (the component itself
        changes nothing on its own).
      </p>
      <p \${ref(readoutRef)} class="sample-readout" style="\${t.caption} opacity: 0.7; margin: var(--spacing-md1) 0 0;"></p>
    </div>
  \`;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Custom Setup',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Custom Setup</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The <code style="\${t.monoSm}">auto-apply</code>/<code style="\${t.monoSm}">auto-persist</code>/<code style="\${t.monoSm}">auto-toast</code>
        switches (see the <strong>Overview</strong> tab) cover most cases with zero wiring. This
        page is for when they don't - a different place to save the choice than
        <code style="\${t.monoSm}">localStorage</code>, or something other than a toast when the
        user hits the limit.
      </p>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Want to do it yourself instead?</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        The component always fires <code style="\${t.monoSm}">text-size-change</code> and
        <code style="\${t.monoSm}">text-size-limit</code>, whether or not the switches are on, so
        you can listen for them either way:
      </p>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};"><code>&lt;mms-text-size-control
  level=\${'$'}{currentLevel}
  max-level="2"
  @text-size-change=\${'$'}{handleTextSizeChange}
  @text-size-limit=\${'$'}{handleTextSizeLimit}
&gt;&lt;/mms-text-size-control&gt;</code></pre>

      <h3 style="\${t.h3}">Remembering the choice yourself</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        Read back whatever you saved last time and pass it in as
        <code style="\${t.monoSm}">level</code> when the page loads, then apply the same scaling
        so it's correct right away.
      </p>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};"><code>let currentLevel = Number(localStorage.getItem('text-size-level') ?? 0);
applyScale(currentLevel); // run once on load

function handleTextSizeChange(e) {
  currentLevel = e.detail.level;
  localStorage.setItem('text-size-level', String(currentLevel));
  applyScale(currentLevel);
}</code></pre>

      <h3 style="\${t.h3}">Showing your own message</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.content};">
        <code style="\${t.monoSm}">text-size-limit</code> fires when someone clicks a button but is
        already at the smallest/largest size - nothing changes, so it's a separate signal from
        <code style="\${t.monoSm}">text-size-change</code>. Screen reader users get an announcement
        either way, with or without this.
      </p>
      <pre style="\${doc.pre} margin-bottom: \${space.subsection};"><code>function handleTextSizeLimit(e) {
  const { direction } = e.detail; // 'increase' | 'decrease'
  const toast = document.createElement('mms-toast');
  toast.message = direction === 'increase'
    ? 'Already at the largest text size.'
    : 'Already at the smallest text size.';
  toast.autoDismiss = true;
  document.body.appendChild(toast);
}</code></pre>

      <hr style="\${doc.divider}" />

      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX};">
        See the <strong>Playground</strong> tab for a fully working example - open its source in
        Storybook's addon panel to see the real code.
      </p>

    </div>
  \`
}`,...Z.parameters?.docs?.source}}},Q=[`Overview`,`PlaygroundStory`,`CustomSetup`]}));$();export{Z as CustomSetup,Y as Overview,X as PlaygroundStory,Q as __namedExportsOrder,V as default,$ as n,B as t};