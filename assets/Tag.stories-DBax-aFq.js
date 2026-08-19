import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{f as s,m as c,n as l,o as u,t as d}from"./decorate-BdwtT8fT.js";import{t as f}from"./mms-icon.component-B0xp-9Qj.js";import{n as p,t as m}from"./theme-constraints-HoH5pJ5P.js";import{a as h,o as g,r as _,t as v}from"./a11y-outcome-DcpqwzN2.js";var y,b=e((()=>{o(),u(),f(),l(),y=class extends i{constructor(...e){super(...e),this.tagStyle=`stroke`,this.colorScheme=`primary`,this.label=``,this.leftIcon=``,this.rightIcon=``}static{this.styles=r`
    /* data-density is intentionally not implemented here — mms-tag is a static,
       non-interactive label with no touch-target constraint, unlike mms-button's
       compact override. See .claude/contracts/global-props.md. */

    /* Color Scheme mapping — only consumed by tag-style="fill" below. Unlike
       mms-button, no hover/pressed step (10/11) is needed since mms-tag is
       non-interactive, so no Tier 2/3 fallback chain is required either —
       step 9 (the solid fill) exists on every tier. */
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-xs2);
      padding: 4px var(--spacing-sm2);
      border-radius: var(--radius-full);
      box-sizing: border-box;
      font-family: var(--type-body-sm-family);
      font-size: var(--type-body-sm-size);
      font-weight: var(--type-body-sm-weight);
      line-height: var(--type-body-sm-line-height);

      --_solid: var(--color-primary-9);
      --_on-solid: var(--color-text-on-primary);
    }

    :host([color-scheme='secondary']) {
      --_solid: var(--color-secondary-9);
      --_on-solid: var(--color-text-on-secondary);
    }

    :host([color-scheme='accent']) {
      --_solid: var(--color-accent-9);
      --_on-solid: var(--color-text-on-accent);
    }

    :host([color-scheme='onyx']) {
      --_solid: var(--color-onyx-9);
      --_on-solid: var(--color-text-on-onyx);
    }

    /* Stroke style (default) — neutral regardless of colorScheme */
    :host,
    :host([tag-style='stroke']) {
      background: transparent;
      border: var(--border-width-xs) solid var(--color-border-default);
      color: var(--color-text-default);
    }

    /* Fill style */
    :host([tag-style='fill']) {
      background: var(--_solid);
      border: var(--border-width-xs) solid transparent;
      color: var(--_on-solid);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: inherit;
    }

    /* Scale icon visual to 14x14 (matches label font-size) while keeping the 16px hitbox */
    .icon mms-icon {
      transform: scale(0.875);
    }

    .label {
      white-space: nowrap;
    }
  `}render(){return a`
      ${this.leftIcon?a`<span class="icon"><mms-icon name=${this.leftIcon} size="sm" weight="regular"></mms-icon></span>`:n}
      <span class="label">${this.label}</span>
      ${this.rightIcon?a`<span class="icon"><mms-icon name=${this.rightIcon} size="sm" weight="regular"></mms-icon></span>`:n}
    `}},d([s({type:String,reflect:!0,attribute:`tag-style`})],y.prototype,`tagStyle`,void 0),d([s({type:String,reflect:!0,attribute:`color-scheme`})],y.prototype,`colorScheme`,void 0),d([s({type:String})],y.prototype,`label`,void 0),d([s({type:String,attribute:`left-icon`})],y.prototype,`leftIcon`,void 0),d([s({type:String,attribute:`right-icon`})],y.prototype,`rightIcon`,void 0),y=d([c(`mms-tag`)],y)})),x=t({Overview:()=>D,PlaygroundStory:()=>O,__namedExportsOrder:()=>k,default:()=>C}),S,C,w,T,E,D,O,k,A=e((()=>{o(),b(),p(),h(),v(),S=`.arrow-left.arrow-right.arrow-up.arrow-down.arrow-clockwise.arrow-square-out.caret-left.caret-right.caret-up.caret-down.plus.minus.x.check.pencil.trash.copy.upload.download.export.floppy-disk.printer.paperclip.play.pause.stop.magnifying-glass.funnel.gear.envelope.phone.share-network.user.sign-in.sign-out.lock.lock-open.eye.eye-slash.calendar.shopping-cart.heart.star.question.info.flag`.split(`.`),C={title:`Content Display/Tag`,tags:[`!autodocs`]},w={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},T=`680px`,E=`960px`,D={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${E}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${w.h1}">Tag</h1>
      <p style="${w.body} opacity: 0.85; max-width: ${T}; margin-bottom: 2rem;">
        A compact, non-interactive label representing a property, category, or piece of metadata.
        Renders as a pill with an optional left/right icon. Use <code style="${w.monoSm}">mms-status-tag</code>
        instead when the label communicates a semantic status (success, error, caution, informational).
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${w.h2}">Basic usage</h2>
      <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem;">
        <mms-tag label="Label"></mms-tag>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${w.h2}">Tag style</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        <code style="${w.monoSm}">tag-style</code> accepts <code style="${w.monoSm}">stroke</code> (outlined, default)
        or <code style="${w.monoSm}">fill</code> (solid).
      </p>
      <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem;">
        <mms-tag label="Stroke" tag-style="stroke"></mms-tag>
        <mms-tag label="Fill" tag-style="fill"></mms-tag>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${w.h2}">Color scheme</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        <code style="${w.monoSm}">color-scheme</code> applies only when <code style="${w.monoSm}">tag-style="fill"</code>.
        Options: <code style="${w.monoSm}">primary</code> (default), <code style="${w.monoSm}">secondary</code>,
        <code style="${w.monoSm}">accent</code>, or <code style="${w.monoSm}">onyx</code>.
      </p>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
        <mms-tag label="Primary" tag-style="fill" color-scheme="primary"></mms-tag>
        <mms-tag label="Secondary" tag-style="fill" color-scheme="secondary"></mms-tag>
        <mms-tag label="Onyx" tag-style="fill" color-scheme="onyx"></mms-tag>
      </div>

      <div style="background: rgba(234, 179, 8, 0.08); border-left: 3px solid #EAB308; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${w.bodySm} margin: 0;">
          <strong>Tier availability.</strong> Fill tags require <strong>Tier 1</strong> or <strong>Tier 2</strong> palettes
          (text contrast guaranteed). <strong>Tier 3</strong> (decorative-only) palettes are blocked because the label text
          would lack sufficient contrast against the fill background.
        </p>
        <ul style="${w.bodySm} margin: 0.75rem 0 0; padding-left: 1.25rem; opacity: 0.85;">
          <li><strong>Maximus:</strong> primary, secondary, onyx ✓ &nbsp;|&nbsp; accent ✗ (Tier 3)</li>
          <li><strong>VA.gov:</strong> primary, accent, onyx ✓ &nbsp;|&nbsp; secondary ✗ (Tier 3)</li>
          <li><strong>USS-OH-DVS:</strong> primary, secondary, accent, onyx ✓</li>
        </ul>
        <p style="${w.caption} margin: 0.75rem 0 0; opacity: 0.7;">
          See <em>Foundations → Color Framework → Color Tiering</em> for the full tier classification.
        </p>
      </div>

      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 2rem;">
        Stroke style ignores <code style="${w.monoSm}">color-scheme</code> entirely — it always renders with neutral border/text colors.
        <br /><br />
        <strong>No "error" option:</strong> For semantic status (success, error, caution, informational), use
        <code style="${w.monoSm}">mms-status-tag</code> with its <code style="${w.monoSm}">alert-type</code> property instead.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${w.h2}">Icons</h2>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 1.5rem;">
        <code style="${w.monoSm}">left-icon</code> / <code style="${w.monoSm}">right-icon</code> accept any icon
        name from the Phosphor registry.
      </p>
      <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem;">
        <mms-tag label="Flag" left-icon="flag"></mms-tag>
        <mms-tag label="More info" right-icon="info"></mms-tag>
        <mms-tag label="Both" left-icon="flag" right-icon="info" tag-style="fill"></mms-tag>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${w.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${w.bodySm} margin: 0;">
          <strong>Not interactive.</strong> mms-tag renders static text content — it is not a button, link,
          or form control, has no focus/hover state, and requires no keyboard model beyond that of surrounding
          content. Icons are always decorative (<code style="${w.monoSm}">aria-hidden</code>); the label text
          itself carries the accessible content.
        </p>
      </div>

      <h3 style="${w.h3}">WCAG 2.2 AA Compliance</h3>
      ${_(g.tag.rows)}

      <h3 style="${w.h3}">Screen Reader Behavior</h3>
      <ul style="${w.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Reading order:</strong> Announced as part of normal document flow — the label text is read; left/right icons are decorative and not announced separately.</li>
        <li><strong>No focus stop:</strong> mms-tag is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="${w.h3}">Keyboard Navigation</h3>
      <p style="${w.bodySm} opacity: 0.85; max-width: ${T}; margin-bottom: 2rem;">
        None. mms-tag is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},O={name:`Playground`,tags:[`!dev`],args:{label:`Label`,tagStyle:`stroke`,colorScheme:`primary`,leftIcon:``,rightIcon:``,theme:`maximus`,density:`default`},argTypes:{label:{name:`Label`,control:`text`,description:`Tag label text`,table:{category:`Content`}},tagStyle:{name:`Tag style`,control:`select`,options:[`stroke`,`fill`],description:`Visual style: stroke (outlined, default) or fill (solid)`,table:{category:`Visual`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Color palette for tag-style="fill" only (stroke stays neutral). "onyx" is structural (works on all themes). Brand colors (primary/secondary/accent) availability depends on theme. No "error" option — that's a semantic status meaning, not a brand/structural color; use mms-status-tag's alert-type for semantic status instead.`,table:{category:`Visual`}},leftIcon:{name:`Left icon`,control:`select`,options:S,description:`Curated list of common tag icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.`,table:{category:`Visual`}},rightIcon:{name:`Right icon`,control:`select`,options:S,description:`Curated list of common tag icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.`,table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`uss-oh-dvs`,`default`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-tag has no compact-specific styling since it's a static, non-interactive label with no touch-target constraint`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.tagStyle&&n.tagStyle!==`stroke`&&r.push(`tag-style="${n.tagStyle}"`),n.tagStyle===`fill`&&n.colorScheme&&n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.leftIcon&&r.push(`left-icon="${n.leftIcon}"`),n.rightIcon&&r.push(`right-icon="${n.rightIcon}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-tag\n  ${r.join(`
  `)}\n></mms-tag>`},language:`html`}},controls:{sort:`none`}},render:e=>e.tagStyle===`fill`&&m(e.theme,e.colorScheme)===3?a`
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
            <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.theme}</code> theme +
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">${e.colorScheme}</code> colorScheme
            <p style="margin: 0.75rem 0 0; opacity: 0.85;">
              <strong>Tier 3 (Decorative):</strong> Lacks text contrast. Decorative backgrounds only — not safe for a fill tag's label text.
            </p>
            <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
              See <em>Color Framework → Color Tiering</em> for details.
            </p>
          </div>
        `:a`
      <mms-tag
        label=${e.label}
        tag-style=${e.tagStyle}
        color-scheme=${e.colorScheme}
        left-icon=${e.leftIcon}
        right-icon=${e.rightIcon}
        data-density=${e.density===`compact`?`compact`:n}
      ></mms-tag>
    `},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Tag</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A compact, non-interactive label representing a property, category, or piece of metadata.
        Renders as a pill with an optional left/right icon. Use <code style="\${t.monoSm}">mms-status-tag</code>
        instead when the label communicates a semantic status (success, error, caution, informational).
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem;">
        <mms-tag label="Label"></mms-tag>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Tag style</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">tag-style</code> accepts <code style="\${t.monoSm}">stroke</code> (outlined, default)
        or <code style="\${t.monoSm}">fill</code> (solid).
      </p>
      <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem;">
        <mms-tag label="Stroke" tag-style="stroke"></mms-tag>
        <mms-tag label="Fill" tag-style="fill"></mms-tag>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Color scheme</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">color-scheme</code> applies only when <code style="\${t.monoSm}">tag-style="fill"</code>.
        Options: <code style="\${t.monoSm}">primary</code> (default), <code style="\${t.monoSm}">secondary</code>,
        <code style="\${t.monoSm}">accent</code>, or <code style="\${t.monoSm}">onyx</code>.
      </p>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
        <mms-tag label="Primary" tag-style="fill" color-scheme="primary"></mms-tag>
        <mms-tag label="Secondary" tag-style="fill" color-scheme="secondary"></mms-tag>
        <mms-tag label="Onyx" tag-style="fill" color-scheme="onyx"></mms-tag>
      </div>

      <div style="background: rgba(234, 179, 8, 0.08); border-left: 3px solid #EAB308; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Tier availability.</strong> Fill tags require <strong>Tier 1</strong> or <strong>Tier 2</strong> palettes
          (text contrast guaranteed). <strong>Tier 3</strong> (decorative-only) palettes are blocked because the label text
          would lack sufficient contrast against the fill background.
        </p>
        <ul style="\${t.bodySm} margin: 0.75rem 0 0; padding-left: 1.25rem; opacity: 0.85;">
          <li><strong>Maximus:</strong> primary, secondary, onyx ✓ &nbsp;|&nbsp; accent ✗ (Tier 3)</li>
          <li><strong>VA.gov:</strong> primary, accent, onyx ✓ &nbsp;|&nbsp; secondary ✗ (Tier 3)</li>
          <li><strong>USS-OH-DVS:</strong> primary, secondary, accent, onyx ✓</li>
        </ul>
        <p style="\${t.caption} margin: 0.75rem 0 0; opacity: 0.7;">
          See <em>Foundations → Color Framework → Color Tiering</em> for the full tier classification.
        </p>
      </div>

      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        Stroke style ignores <code style="\${t.monoSm}">color-scheme</code> entirely — it always renders with neutral border/text colors.
        <br /><br />
        <strong>No "error" option:</strong> For semantic status (success, error, caution, informational), use
        <code style="\${t.monoSm}">mms-status-tag</code> with its <code style="\${t.monoSm}">alert-type</code> property instead.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Icons</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">left-icon</code> / <code style="\${t.monoSm}">right-icon</code> accept any icon
        name from the Phosphor registry.
      </p>
      <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem;">
        <mms-tag label="Flag" left-icon="flag"></mms-tag>
        <mms-tag label="More info" right-icon="info"></mms-tag>
        <mms-tag label="Both" left-icon="flag" right-icon="info" tag-style="fill"></mms-tag>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Not interactive.</strong> mms-tag renders static text content — it is not a button, link,
          or form control, has no focus/hover state, and requires no keyboard model beyond that of surrounding
          content. Icons are always decorative (<code style="\${t.monoSm}">aria-hidden</code>); the label text
          itself carries the accessible content.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['tag'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Reading order:</strong> Announced as part of normal document flow — the label text is read; left/right icons are decorative and not announced separately.</li>
        <li><strong>No focus stop:</strong> mms-tag is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard Navigation</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        None. mms-tag is not focusable and has no keyboard interaction model.
      </p>

    </div>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    label: 'Label',
    tagStyle: 'stroke',
    colorScheme: 'primary',
    leftIcon: '',
    rightIcon: '',
    theme: 'maximus',
    density: 'default'
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Tag label text',
      table: {
        category: 'Content'
      }
    },
    tagStyle: {
      name: 'Tag style',
      control: 'select',
      options: ['stroke', 'fill'],
      description: 'Visual style: stroke (outlined, default) or fill (solid)',
      table: {
        category: 'Visual'
      }
    },
    colorScheme: {
      name: 'Color Scheme',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'onyx'],
      description: 'Color palette for tag-style="fill" only (stroke stays neutral). "onyx" is structural (works on all themes). Brand colors (primary/secondary/accent) availability depends on theme. No "error" option — that\\'s a semantic status meaning, not a brand/structural color; use mms-status-tag\\'s alert-type for semantic status instead.',
      table: {
        category: 'Visual'
      }
    },
    leftIcon: {
      name: 'Left icon',
      control: 'select',
      options: iconOptions,
      description: 'Curated list of common tag icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.',
      table: {
        category: 'Visual'
      }
    },
    rightIcon: {
      name: 'Right icon',
      control: 'select',
      options: iconOptions,
      description: 'Curated list of common tag icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.',
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
      description: 'Accepted as a global attribute passthrough — mms-tag has no compact-specific styling since it\\'s a static, non-interactive label with no touch-target constraint',
      table: {
        category: 'Global Props'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.label) attrs.push(\`label="\${a.label}"\`);
          if (a.tagStyle && a.tagStyle !== 'stroke') attrs.push(\`tag-style="\${a.tagStyle}"\`);
          if (a.tagStyle === 'fill' && a.colorScheme && a.colorScheme !== 'primary') attrs.push(\`color-scheme="\${a.colorScheme}"\`);
          if (a.leftIcon) attrs.push(\`left-icon="\${a.leftIcon}"\`);
          if (a.rightIcon) attrs.push(\`right-icon="\${a.rightIcon}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-tag\\n  \${attrs.join('\\n  ')}\\n></mms-tag>\`;
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
    tagStyle: string;
    colorScheme: string;
    leftIcon: string;
    rightIcon: string;
    theme: string;
    density: string;
  }) => {
    // Fill style renders label text on the solid color-scheme background — validate
    // contrast is guaranteed. Unlike mms-button, Tier 2 (no hover) is fine here since
    // mms-tag is non-interactive; only Tier 3 (decorative-only, no text-contrast
    // guarantee) is blocked. Stroke style ignores colorScheme entirely, so it's exempt.
    if (args.tagStyle === 'fill') {
      const tier = getPaletteTier(args.theme as Theme, args.colorScheme as ColorScheme);
      if (tier === 3) {
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
            <strong style="display: block; margin-bottom: 0.5rem;">Invalid combination</strong>
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.theme}</code> theme +
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px;">\${args.colorScheme}</code> colorScheme
            <p style="margin: 0.75rem 0 0; opacity: 0.85;">
              <strong>Tier 3 (Decorative):</strong> Lacks text contrast. Decorative backgrounds only — not safe for a fill tag's label text.
            </p>
            <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7;">
              See <em>Color Framework → Color Tiering</em> for details.
            </p>
          </div>
        \`;
      }
    }
    return html\`
      <mms-tag
        label=\${args.label}
        tag-style=\${args.tagStyle}
        color-scheme=\${args.colorScheme}
        left-icon=\${args.leftIcon}
        right-icon=\${args.rightIcon}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
      ></mms-tag>
    \`;
  }
}`,...O.parameters?.docs?.source}}},k=[`Overview`,`PlaygroundStory`]}));A();export{D as Overview,O as PlaygroundStory,k as __namedExportsOrder,C as default,A as n,x as t};