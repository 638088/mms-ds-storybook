import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{H as n,K as r,V as i,W as a,Z as o}from"./iframe-J4X5mQMa.js";import{c as s,f as c,m as l,n as u,o as d,r as f,s as p,t as m}from"./mms-icon.component-DHfZ8Yc6.js";var h,g=t((()=>{i(),s(),p(),m(),f(),h=class extends n{constructor(...e){super(...e),this.variant=`primary`,this.colorScheme=`primary`,this.size=`md`,this.roundness=`subtle`,this.state=`default`,this.disabled=!1,this.label=``,this.leftIcon=``,this.rightIcon=``,this._handleKeyDown=e=>{this.disabled||(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.click())}}static{this.styles=[d,o`
      /* ═══════════════════════════════════════════════════════════════════════
         HOST — Color Scheme Mapping
         Maps colorScheme attribute to internal CSS custom properties
         ═══════════════════════════════════════════════════════════════════════ */
      :host {
        display: inline-block;
        font-family: var(--type-ui-label-family);

        /* Default: primary color scheme */
        --_solid: var(--color-primary-9);
        --_solid-hover: var(--color-primary-10);
        --_solid-pressed: var(--color-primary-11);
        --_text: var(--color-primary-11);          /* Step 11 = 4.5:1 text contrast */
        --_text-hover: var(--color-primary-12);    /* Step 12 = darker hover feedback */
        --_stroke: var(--color-primary-9);         /* Step 9 = 3:1 UI component */
        --_stroke-hover: var(--color-primary-10);
        --_on-solid: var(--color-text-on-primary);
      }

      :host([color-scheme='secondary']) {
        --_solid: var(--color-secondary-9);
        --_solid-hover: var(--color-secondary-10);
        --_solid-pressed: var(--color-secondary-11);
        --_text: var(--color-secondary-11);
        --_text-hover: var(--color-secondary-12);
        --_stroke: var(--color-secondary-9);
        --_stroke-hover: var(--color-secondary-10);
        --_on-solid: var(--color-text-on-secondary);
      }

      :host([color-scheme='accent']) {
        --_solid: var(--color-accent-9);
        --_solid-hover: var(--color-accent-10);
        --_solid-pressed: var(--color-accent-11);
        --_text: var(--color-accent-11);
        --_text-hover: var(--color-accent-12);
        --_stroke: var(--color-accent-9);
        --_stroke-hover: var(--color-accent-10);
        --_on-solid: var(--color-text-on-accent);
      }

      :host([color-scheme='onyx']) {
        --_solid: var(--color-onyx-9);
        --_solid-hover: var(--color-onyx-10);
        --_solid-pressed: var(--color-onyx-11);
        --_text: var(--color-onyx-11);
        --_text-hover: var(--color-onyx-12);
        --_stroke: var(--color-onyx-9);
        --_stroke-hover: var(--color-onyx-10);
        --_on-solid: var(--color-text-on-onyx);
      }

      :host([disabled]) {
        cursor: not-allowed;
        pointer-events: none;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         BUTTON BASE
         ═══════════════════════════════════════════════════════════════════════ */
      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-sm1);
        border: none;
        cursor: pointer;
        transition:
          background-color var(--motion-duration-base) var(--motion-easing-standard),
          border-color var(--motion-duration-base) var(--motion-easing-standard),
          color var(--motion-duration-base) var(--motion-easing-standard);
        font-family: inherit;
        font-weight: var(--font-weight-medium);
        text-decoration: none;
        box-sizing: border-box;
      }

      .button:focus-visible {
        outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
        outline-offset: var(--focus-ring-offset);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         SIZE VARIANTS
         ═══════════════════════════════════════════════════════════════════════ */
      /* Small */
      :host([size='sm']) .button {
        padding: var(--spacing-xs2) var(--spacing-sm2);
        font-size: var(--type-ui-caption-size);
        line-height: var(--type-ui-caption-line-height);
        letter-spacing: var(--type-ui-caption-letter-spacing);
      }

      :host([size='sm']) .icon {
        width: var(--icon-size-sm);
        height: var(--icon-size-sm);
      }

      /* Medium (default) */
      :host([size='md']) .button,
      :host(:not([size])) .button {
        padding: var(--spacing-sm1) var(--spacing-md1);
        font-size: var(--type-ui-label-size);
        line-height: var(--type-ui-label-line-height);
        letter-spacing: var(--type-ui-label-letter-spacing);
      }

      :host([size='md']) .icon,
      :host(:not([size])) .icon {
        width: var(--icon-size-sm);
        height: var(--icon-size-sm);
      }

      /* Large */
      :host([size='lg']) .button {
        padding: var(--spacing-sm2) var(--spacing-lg1);
        font-size: var(--type-ui-label-lg-size);
        line-height: var(--type-ui-label-lg-line-height);
        letter-spacing: var(--type-ui-label-lg-letter-spacing);
      }

      :host([size='lg']) .icon {
        width: var(--icon-size-md);
        height: var(--icon-size-md);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         DENSITY VARIANTS
         Compact density reduces padding while maintaining touch target (≥44px)
         Ghost variant excluded — it has no padding by design
         ═══════════════════════════════════════════════════════════════════════ */
      :host([data-density='compact'][size='sm']:not([variant='ghost'])) .button {
        padding: var(--spacing-xs1) var(--spacing-sm1);
      }

      :host([data-density='compact'][size='md']:not([variant='ghost'])) .button,
      :host([data-density='compact']:not([size]):not([variant='ghost'])) .button {
        padding: var(--spacing-xs2) var(--spacing-sm2);
      }

      :host([data-density='compact'][size='lg']:not([variant='ghost'])) .button {
        padding: var(--spacing-sm1) var(--spacing-md1);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         ROUNDNESS VARIANTS
         ═══════════════════════════════════════════════════════════════════════ */
      :host([roundness='boxed']) .button {
        border-radius: var(--radius-none);
      }

      :host([roundness='subtle']) .button,
      :host(:not([roundness])) .button {
        border-radius: var(--radius-sm);
      }

      :host([roundness='rounded']) .button {
        border-radius: var(--radius-full);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         PRIMARY VARIANT (solid fill)
         ═══════════════════════════════════════════════════════════════════════ */
      :host([variant='primary']) .button,
      :host(:not([variant])) .button {
        background: var(--_solid);
        border: var(--border-width-xs) solid transparent;
        color: var(--_on-solid);
      }

      :host([variant='primary']) .icon,
      :host(:not([variant])) .icon {
        color: var(--_on-solid);
      }

      /* Primary: Hover */
      :host([variant='primary']:hover:not([disabled])) .button,
      :host(:not([variant]):hover:not([disabled])) .button,
      :host([variant='primary'][state='hover']) .button,
      :host(:not([variant])[state='hover']) .button {
        background: var(--_solid-hover);
        text-decoration: underline;
      }

      /* Primary: Focus */
      :host([variant='primary'][state='focus']) .button,
      :host(:not([variant])[state='focus']) .button {
        outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
        outline-offset: var(--focus-ring-offset);
      }

      /* Primary: Active */
      :host([variant='primary']:active:not([disabled])) .button,
      :host(:not([variant]):active:not([disabled])) .button,
      :host([variant='primary'][state='active']) .button,
      :host(:not([variant])[state='active']) .button {
        background: var(--_solid-pressed);
        text-decoration: underline;
      }

      /* Primary: Disabled */
      :host([variant='primary'][disabled]) .button,
      :host(:not([variant])[disabled]) .button {
        background: var(--color-disabled-solid);
        color: var(--color-disabled-text);
      }

      :host([variant='primary'][disabled]) .icon,
      :host(:not([variant])[disabled]) .icon {
        color: var(--color-disabled-text);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         SECONDARY VARIANT (outlined)
         Uses colorScheme for border + text color
         ═══════════════════════════════════════════════════════════════════════ */
      :host([variant='secondary']) .button {
        background: transparent;
        border: var(--border-width-xs) solid var(--_stroke);
        color: var(--_text);
      }

      :host([variant='secondary']) .icon {
        color: var(--_text);
      }

      /* Secondary: Hover */
      :host([variant='secondary']:hover:not([disabled])) .button,
      :host([variant='secondary'][state='hover']) .button {
        border-color: var(--_stroke-hover);
        color: var(--_text-hover);
        text-decoration: underline;
      }

      :host([variant='secondary']:hover:not([disabled])) .icon,
      :host([variant='secondary'][state='hover']) .icon {
        color: var(--_text-hover);
      }

      /* Secondary: Focus */
      :host([variant='secondary'][state='focus']) .button {
        outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
        outline-offset: var(--focus-ring-offset);
      }

      /* Secondary: Active */
      :host([variant='secondary']:active:not([disabled])) .button,
      :host([variant='secondary'][state='active']) .button {
        border-color: var(--_stroke-hover);
        color: var(--_text-hover);
        text-decoration: underline;
      }

      /* Secondary: Disabled */
      :host([variant='secondary'][disabled]) .button {
        background: transparent;
        border-color: var(--color-disabled-stroke);
        color: var(--color-disabled-text);
      }

      :host([variant='secondary'][disabled]) .icon {
        color: var(--color-disabled-text);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         GHOST VARIANT (text only)
         Uses colorScheme for text color
         ═══════════════════════════════════════════════════════════════════════ */
      :host([variant='ghost']) .button {
        background: transparent;
        border: none;
        padding: 0;
        color: var(--_text);
      }

      :host([variant='ghost']) .icon {
        color: var(--_text);
      }

      /* Ghost: Hover */
      :host([variant='ghost']:hover:not([disabled])) .button,
      :host([variant='ghost'][state='hover']) .button {
        color: var(--_text-hover);
        text-decoration: underline;
      }

      :host([variant='ghost']:hover:not([disabled])) .icon,
      :host([variant='ghost'][state='hover']) .icon {
        color: var(--_text-hover);
      }

      /* Ghost: Focus */
      :host([variant='ghost'][state='focus']) .button {
        outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
        outline-offset: var(--focus-ring-offset);
      }

      /* Ghost: Active */
      :host([variant='ghost']:active:not([disabled])) .button,
      :host([variant='ghost'][state='active']) .button {
        color: var(--_text-hover);
        text-decoration: underline;
      }

      /* Ghost: Disabled */
      :host([variant='ghost'][disabled]) .button {
        color: var(--color-disabled-text);
      }

      :host([variant='ghost'][disabled]) .icon {
        color: var(--color-disabled-text);
      }

      /* ═══════════════════════════════════════════════════════════════════════
         ICON STYLES
         ═══════════════════════════════════════════════════════════════════════ */
      .icon {
        display: inline-flex;
        flex-shrink: 0;
      }
    `]}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`button`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`0`),this.addEventListener(`keydown`,this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this._handleKeyDown)}updated(e){super.updated(e),e.has(`disabled`)&&(this.setAttribute(`tabindex`,this.disabled?`-1`:`0`),this.setAttribute(`aria-disabled`,String(this.disabled)))}render(){return r`
      <button
        class="button"
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled?`true`:`false`}
      >
        ${this.leftIcon?r`<mms-icon class="icon" name=${this.leftIcon} size="sm"></mms-icon>`:a}
        ${this.label?r`<span class="label">${this.label}</span>`:a}
        ${this.rightIcon?r`<mms-icon class="icon" name=${this.rightIcon} size="sm"></mms-icon>`:a}
      </button>
    `}},u([c({type:String,reflect:!0})],h.prototype,`variant`,void 0),u([c({type:String,reflect:!0,attribute:`color-scheme`})],h.prototype,`colorScheme`,void 0),u([c({type:String,reflect:!0})],h.prototype,`size`,void 0),u([c({type:String,reflect:!0})],h.prototype,`roundness`,void 0),u([c({type:String,reflect:!0})],h.prototype,`state`,void 0),u([c({type:Boolean,reflect:!0})],h.prototype,`disabled`,void 0),u([c({type:String})],h.prototype,`label`,void 0),u([c({type:String,attribute:`left-icon`})],h.prototype,`leftIcon`,void 0),u([c({type:String,attribute:`right-icon`})],h.prototype,`rightIcon`,void 0),h=u([l(`mms-button`)],h)}));function _(e,t){return(v[e]??[`onyx`]).includes(t)}var v,y=t((()=>{v={default:[`onyx`],maximus:[`primary`,`secondary`,`onyx`],"va-gov":[`primary`,`accent`,`onyx`]}})),b=e({Overview:()=>E,PlaygroundStory:()=>D,__namedExportsOrder:()=>O,default:()=>S}),x,S,C,w,T,E,D,O,k=t((()=>{i(),g(),y(),x=`.arrow-left.arrow-right.arrow-up.arrow-down.arrow-clockwise.arrow-square-out.caret-left.caret-right.caret-up.caret-down.plus.minus.x.check.pencil.trash.copy.upload.download.export.floppy-disk.printer.paperclip.play.pause.stop.magnifying-glass.funnel.gear.envelope.phone.share-network.user.sign-in.sign-out.lock.lock-open.eye.eye-slash.calendar.shopping-cart.heart.star.question.info`.split(`.`),S={title:`Actions/Button`,tags:[`!autodocs`]},C={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,mono:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.9375rem;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},w=`680px`,T=`960px`,E={name:`Overview`,render:()=>r`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${T}; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="${C.h1}">Button</h1>
      <p style="${C.body} opacity: 0.85; max-width: ${w}; margin-bottom: 2rem;">
        Buttons trigger actions. The MMS Design System provides a unified button component with three visual variants — <strong>primary</strong>, <strong>secondary</strong>, and <strong>ghost</strong> — each serving distinct interaction patterns.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Variants -->
      <h2 style="${C.h2}">Variants</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${C.h3}">Primary</p>
          <p style="${C.bodySm} opacity: 0.85; flex: 1;">
            High-emphasis actions. Use for the primary call-to-action on a page or form.
          </p>
          <div style="margin-top: 1rem;"><mms-button variant="primary" label="Submit"></mms-button></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${C.h3}">Secondary</p>
          <p style="${C.bodySm} opacity: 0.85; flex: 1;">
            Medium-emphasis actions. Use alongside primary buttons for secondary options.
          </p>
          <div style="margin-top: 1rem;"><mms-button variant="secondary" label="Cancel"></mms-button></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="${C.h3}">Ghost</p>
          <p style="${C.bodySm} opacity: 0.85; flex: 1;">
            Low-emphasis actions. Use for tertiary actions or inline links.
          </p>
          <div style="margin-top: 1rem;"><mms-button variant="ghost" label="Learn more"></mms-button></div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="${C.h2}">Color Schemes</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        The <code style="${C.monoSm}">color-scheme</code> prop controls which color palette the button uses. Four options are available:
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${C.h3}">Primary &amp; Secondary</p>
          <p style="${C.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Brand colors defined by the active theme. Use for most UI actions.
          </p>
          <div style="display: flex; gap: 0.75rem;">
            <mms-button variant="primary" color-scheme="primary" label="Primary" size="sm"></mms-button>
            <mms-button variant="primary" color-scheme="secondary" label="Secondary" size="sm"></mms-button>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="${C.h3}">Accent &amp; Onyx</p>
          <p style="${C.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            <strong>Accent</strong> is theme-specific highlight color. <strong>Onyx</strong> is structural black — always available.
          </p>
          <div style="display: flex; gap: 0.75rem;">
            <mms-button variant="primary" color-scheme="accent" label="Accent" size="sm"></mms-button>
            <mms-button variant="primary" color-scheme="onyx" label="Onyx" size="sm"></mms-button>
          </div>
        </div>
      </div>

      <p style="${C.caption} opacity: 0.65; margin-bottom: 2rem;">
        Theme determines which color schemes are available. Onyx is the only palette guaranteed across all themes. Colors that don't meet WCAG contrast requirements are classified as decorative (9 steps only, no hover/pressed states) and are out of scope for interactive components.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="${C.h2}">Sizes</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        Three sizes accommodate different contexts — compact UIs, standard forms, and prominent CTAs.
      </p>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
        <mms-button variant="primary" size="sm" label="Small"></mms-button>
        <mms-button variant="primary" size="md" label="Medium"></mms-button>
        <mms-button variant="primary" size="lg" label="Large"></mms-button>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Icons -->
      <h2 style="${C.h2}">With icons</h2>
      <p style="${C.bodySm} opacity: 0.85; max-width: ${w}; margin-bottom: 1.5rem;">
        Icons can be placed on the left, right, or both sides of the label to reinforce meaning.
      </p>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
        <mms-button variant="primary" label="Download" left-icon="download"></mms-button>
        <mms-button variant="secondary" label="Continue" right-icon="caret-right"></mms-button>
        <div style="margin-top: 5px;"><mms-button variant="ghost" label="Settings" left-icon="gear"></mms-button></div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="${C.h2}">Accessibility</h2>
      <ul style="${C.bodySm} opacity: 0.85; margin: 0 0 2rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">Uses native <code style="${C.monoSm}">&lt;button&gt;</code> element for full keyboard support</li>
        <li style="margin-bottom: 0.5rem;">Focus ring meets WCAG 2.2 minimum area requirements (2px offset)</li>
        <li style="margin-bottom: 0.5rem;">Disabled state uses <code style="${C.monoSm}">aria-disabled</code> to maintain focusability for screen readers</li>
        <li style="margin-bottom: 0.5rem;">Text contrast meets WCAG AA (4.5:1 against background)</li>
        <li style="margin-bottom: 0.5rem;">Non-text contrast (fill, stroke, icons) meets WCAG 1.4.11 (3:1 against background)</li>
      </ul>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="${C.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; ${C.monoSm}"><code>&lt;mms-button variant="primary" label="Submit"&gt;&lt;/mms-button&gt;
&lt;mms-button variant="secondary" label="Cancel"&gt;&lt;/mms-button&gt;
&lt;mms-button variant="ghost" label="Learn more"&gt;&lt;/mms-button&gt;</code></pre>

    </div>
  `},D={tags:[`!dev`],args:{variant:`primary`,size:`md`,roundness:`subtle`,state:`default`,disabled:!1,label:`Button`,leftIcon:``,rightIcon:``,colorScheme:`primary`,theme:`maximus`,density:`default`},decorators:[e=>r`
        <div
          style="
            min-height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          ${e()}
        </div>
      `],argTypes:{variant:{name:`Variant`,control:`select`,options:[`primary`,`secondary`,`ghost`],description:`Visual variant: primary (solid), secondary (outlined), ghost (text only)`,table:{category:`Component Props`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Color palette for the button. "onyx" is structural (works on all themes). Brand colors (primary/secondary/accent) availability depends on theme.`,table:{category:`Component Props`}},size:{name:`Size`,control:`select`,options:[`sm`,`md`,`lg`],description:`Button size`,table:{category:`Component Props`}},roundness:{name:`Roundness`,control:`select`,options:[`boxed`,`subtle`,`rounded`],description:`Corner radius: boxed (0), subtle (4px), rounded (pill)`,table:{category:`Component Props`}},state:{name:`State`,control:`select`,options:[`default`,`hover`,`focus`,`active`],description:`Preview state (Storybook only)`,table:{category:`Component Props`}},disabled:{name:`Disabled`,control:`boolean`,description:`Disabled state`,table:{category:`Component Props`}},label:{name:`Label`,control:`text`,description:`Button text`,table:{category:`Component Props`}},leftIcon:{name:`Left Icon`,control:`select`,options:x,description:`Curated list of common button icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.`,table:{category:`Component Props`}},rightIcon:{name:`Right Icon`,control:`select`,options:x,description:`Curated list of common button icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.`,table:{category:`Component Props`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`default`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Spacing density`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=n.colorScheme===`primary`?``:` color-scheme="${n.colorScheme}"`,i=n.leftIcon?` left-icon="${n.leftIcon}"`:``,a=n.rightIcon?` right-icon="${n.rightIcon}"`:``,o=n.disabled?` disabled`:``;return`<mms-button
  variant="${n.variant}"${r}
  size="${n.size}"
  roundness="${n.roundness}"
  label="${n.label}"${i}${a}${o}
></mms-button>`},language:`html`}}},render:e=>_(e.theme,e.colorScheme)?r`
      <mms-button
        variant=${e.variant}
        color-scheme=${e.colorScheme}
        size=${e.size}
        roundness=${e.roundness}
        state=${e.state}
        ?disabled=${e.disabled}
        label=${e.label}
        left-icon=${e.leftIcon||``}
        right-icon=${e.rightIcon||``}
        data-density=${e.density}
      ></mms-button>
    `:r`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 400px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            This color is decorative-only (no hover/pressed states). Select a different colorScheme for this theme.
          </p>
        </div>
      `},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; padding: 2rem; line-height: 1.6; color: inherit;">

      <!-- Header -->
      <h1 style="\${t.h1}">Button</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Buttons trigger actions. The MMS Design System provides a unified button component with three visual variants — <strong>primary</strong>, <strong>secondary</strong>, and <strong>ghost</strong> — each serving distinct interaction patterns.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Variants -->
      <h2 style="\${t.h2}">Variants</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Primary</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            High-emphasis actions. Use for the primary call-to-action on a page or form.
          </p>
          <div style="margin-top: 1rem;"><mms-button variant="primary" label="Submit"></mms-button></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Secondary</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Medium-emphasis actions. Use alongside primary buttons for secondary options.
          </p>
          <div style="margin-top: 1rem;"><mms-button variant="secondary" label="Cancel"></mms-button></div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; flex-direction: column;">
          <p style="\${t.h3}">Ghost</p>
          <p style="\${t.bodySm} opacity: 0.85; flex: 1;">
            Low-emphasis actions. Use for tertiary actions or inline links.
          </p>
          <div style="margin-top: 1rem;"><mms-button variant="ghost" label="Learn more"></mms-button></div>
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Color Schemes -->
      <h2 style="\${t.h2}">Color Schemes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        The <code style="\${t.monoSm}">color-scheme</code> prop controls which color palette the button uses. Four options are available:
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Primary &amp; Secondary</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            Brand colors defined by the active theme. Use for most UI actions.
          </p>
          <div style="display: flex; gap: 0.75rem;">
            <mms-button variant="primary" color-scheme="primary" label="Primary" size="sm"></mms-button>
            <mms-button variant="primary" color-scheme="secondary" label="Secondary" size="sm"></mms-button>
          </div>
        </div>
        <div style="padding: 1.25rem; background: rgba(128,128,128,0.05); border-radius: 8px;">
          <p style="\${t.h3}">Accent &amp; Onyx</p>
          <p style="\${t.bodySm} opacity: 0.85; margin-bottom: 1rem;">
            <strong>Accent</strong> is theme-specific highlight color. <strong>Onyx</strong> is structural black — always available.
          </p>
          <div style="display: flex; gap: 0.75rem;">
            <mms-button variant="primary" color-scheme="accent" label="Accent" size="sm"></mms-button>
            <mms-button variant="primary" color-scheme="onyx" label="Onyx" size="sm"></mms-button>
          </div>
        </div>
      </div>

      <p style="\${t.caption} opacity: 0.65; margin-bottom: 2rem;">
        Theme determines which color schemes are available. Onyx is the only palette guaranteed across all themes. Colors that don't meet WCAG contrast requirements are classified as decorative (9 steps only, no hover/pressed states) and are out of scope for interactive components.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Sizes -->
      <h2 style="\${t.h2}">Sizes</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Three sizes accommodate different contexts — compact UIs, standard forms, and prominent CTAs.
      </p>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
        <mms-button variant="primary" size="sm" label="Small"></mms-button>
        <mms-button variant="primary" size="md" label="Medium"></mms-button>
        <mms-button variant="primary" size="lg" label="Large"></mms-button>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Icons -->
      <h2 style="\${t.h2}">With icons</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        Icons can be placed on the left, right, or both sides of the label to reinforce meaning.
      </p>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
        <mms-button variant="primary" label="Download" left-icon="download"></mms-button>
        <mms-button variant="secondary" label="Continue" right-icon="caret-right"></mms-button>
        <div style="margin-top: 5px;"><mms-button variant="ghost" label="Settings" left-icon="gear"></mms-button></div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>
      <ul style="\${t.bodySm} opacity: 0.85; margin: 0 0 2rem; padding-left: 1.25rem;">
        <li style="margin-bottom: 0.5rem;">Uses native <code style="\${t.monoSm}">&lt;button&gt;</code> element for full keyboard support</li>
        <li style="margin-bottom: 0.5rem;">Focus ring meets WCAG 2.2 minimum area requirements (2px offset)</li>
        <li style="margin-bottom: 0.5rem;">Disabled state uses <code style="\${t.monoSm}">aria-disabled</code> to maintain focusability for screen readers</li>
        <li style="margin-bottom: 0.5rem;">Text contrast meets WCAG AA (4.5:1 against background)</li>
        <li style="margin-bottom: 0.5rem;">Non-text contrast (fill, stroke, icons) meets WCAG 1.4.11 (3:1 against background)</li>
      </ul>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <!-- Usage -->
      <h2 style="\${t.h2}">Usage</h2>
      <pre style="background: rgba(128,128,128,0.08); padding: 1rem; border-radius: 6px; overflow-x: auto; \${t.monoSm}"><code>&lt;mms-button variant="primary" label="Submit"&gt;&lt;/mms-button&gt;
&lt;mms-button variant="secondary" label="Cancel"&gt;&lt;/mms-button&gt;
&lt;mms-button variant="ghost" label="Learn more"&gt;&lt;/mms-button&gt;</code></pre>

    </div>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    variant: 'primary',
    size: 'md',
    roundness: 'subtle',
    state: 'default',
    disabled: false,
    label: 'Button',
    leftIcon: '',
    rightIcon: '',
    colorScheme: 'primary',
    theme: 'maximus',
    density: 'default'
  },
  decorators: [(story: () => unknown) => {
    // Layout only - theme/mode/background handled by global decorator
    return html\`
        <div
          style="
            min-height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 2rem;
          "
        >
          \${story()}
        </div>
      \`;
  }],
  argTypes: {
    // Component Props
    variant: {
      name: 'Variant',
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Visual variant: primary (solid), secondary (outlined), ghost (text only)',
      table: {
        category: 'Component Props'
      }
    },
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Color palette for the button. "onyx" is structural (works on all themes). Brand colors (primary/secondary/accent) availability depends on theme.',
      table: {
        category: 'Component Props'
      }
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        category: 'Component Props'
      }
    },
    roundness: {
      name: 'Roundness',
      control: 'select',
      options: ['boxed', 'subtle', 'rounded'],
      description: 'Corner radius: boxed (0), subtle (4px), rounded (pill)',
      table: {
        category: 'Component Props'
      }
    },
    state: {
      name: 'State',
      control: 'select',
      options: ['default', 'hover', 'focus', 'active'],
      description: 'Preview state (Storybook only)',
      table: {
        category: 'Component Props'
      }
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disabled state',
      table: {
        category: 'Component Props'
      }
    },
    label: {
      name: 'Label',
      control: 'text',
      description: 'Button text',
      table: {
        category: 'Component Props'
      }
    },
    leftIcon: {
      name: 'Left Icon',
      control: 'select',
      options: iconOptions,
      description: 'Curated list of common button icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.',
      table: {
        category: 'Component Props'
      }
    },
    rightIcon: {
      name: 'Right Icon',
      control: 'select',
      options: iconOptions,
      description: 'Curated list of common button icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.',
      table: {
        category: 'Component Props'
      }
    },
    // Global Props
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'va-gov', 'default'],
      description: 'Brand theme',
      table: {
        category: 'Global Props'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Spacing density',
      table: {
        category: 'Global Props'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string | boolean>;
        }) => {
          const a = ctx.args;
          const colorScheme = a.colorScheme !== 'primary' ? \` color-scheme="\${a.colorScheme}"\` : '';
          const leftIcon = a.leftIcon ? \` left-icon="\${a.leftIcon}"\` : '';
          const rightIcon = a.rightIcon ? \` right-icon="\${a.rightIcon}"\` : '';
          const disabled = a.disabled ? ' disabled' : '';
          return \`<mms-button
  variant="\${a.variant}"\${colorScheme}
  size="\${a.size}"
  roundness="\${a.roundness}"
  label="\${a.label}"\${leftIcon}\${rightIcon}\${disabled}
></mms-button>\`;
        },
        language: 'html'
      }
    }
  },
  render: (args: {
    variant: string;
    colorScheme: string;
    size: string;
    roundness: string;
    state: string;
    disabled: boolean;
    label: string;
    leftIcon: string;
    rightIcon: string;
    theme: string;
    density: string;
  }) => {
    // Validate colorScheme × theme combination using shared config
    const valid = isValidColorScheme(args.theme as Theme, args.colorScheme as ColorScheme);
    if (!valid) {
      return html\`
        <div style="
          padding: 1.5rem 2rem;
          background: #fef2f2;
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #991b1b;
          font-size: 0.875rem;
          line-height: 1.5;
          max-width: 400px;
        ">
          <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.theme}</code> theme +
          <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.colorScheme}</code> colorScheme
          <p style="margin: 0.75rem 0 0; opacity: 0.85;">
            This color is decorative-only (no hover/pressed states). Select a different colorScheme for this theme.
          </p>
        </div>
      \`;
    }
    return html\`
      <mms-button
        variant=\${args.variant}
        color-scheme=\${args.colorScheme}
        size=\${args.size}
        roundness=\${args.roundness}
        state=\${args.state}
        ?disabled=\${args.disabled}
        label=\${args.label}
        left-icon=\${args.leftIcon || ''}
        right-icon=\${args.rightIcon || ''}
        data-density=\${args.density}
      ></mms-button>
    \`;
  }
}`,...D.parameters?.docs?.source}}},O=[`Overview`,`PlaygroundStory`]}));k();export{E as Overview,D as PlaygroundStory,O as __namedExportsOrder,S as default,k as n,b as t};