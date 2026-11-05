import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{n as a,r as o,t as s}from"./iframe-CcinUa1O.js";import{t as c}from"./mms-card.component-Ae9XIj4r.js";import{n as l,r as u}from"./theme-constraints-BjFqvFCo.js";import{n as d,r as f}from"./wcag-coverage-DNhlI7v1.js";import{t as p}from"./mms-inline-alert.component-DL_QIcV8.js";import{a as m,c as h,d as g,i as _,n as v,o as y,r as b,u as x}from"./doc-styles-DkvR_Qyb.js";import{a as S,n as C}from"./a11y-outcome-B57XZvCQ.js";import{t as w}from"./mms-tag.component-DJAxUPFB.js";var T=t({Overview:()=>O,PlaygroundStory:()=>k,__namedExportsOrder:()=>A,default:()=>D}),E,D,O,k,A,j=e((()=>{i(),w(),c(),p(),u(),d(),C(),o(),h(),E=`.arrow-left.arrow-right.arrow-up.arrow-down.arrow-clockwise.arrow-square-out.caret-left.caret-right.caret-up.caret-down.plus.minus.x.check.pencil.trash.copy.upload.download.export.floppy-disk.printer.paperclip.play.pause.stop.magnifying-glass.funnel.gear.envelope.phone.share-network.user.sign-in.sign-out.lock.lock-open.eye.eye-slash.calendar.shopping-cart.heart.star.question.info.flag`.split(`.`),D={title:`Content Display/Tag`,tags:[`!autodocs`]},O={name:`Overview`,render:()=>r`
    <div data-theme=${b} data-mode=${y()} style=${v}>

      <h1 style="${g.h1}">Tag</h1>
      <p style="${g.body} ${m.muted} max-width: ${_}; margin-bottom: ${x.subsection};">
        A compact, non-interactive label representing a property, category, or piece of metadata.
        Renders as a pill with an optional left/right icon. Use <code style="${g.monoSm}">mms-status-tag</code>
        instead when the label communicates a semantic status (success, error, caution, informational).
      </p>

      <hr style="${m.divider}" />

      <h2 style="${g.h2}">Basic usage</h2>
      <div style="display: flex; gap: ${x.content}; margin-bottom: ${x.subsection};">
        <mms-tag label="Label"></mms-tag>
      </div>

      <hr style="${m.divider}" />

      <h2 style="${g.h2}">Tag style</h2>
      <p style="${g.bodySm} ${m.muted} max-width: ${_}; margin-bottom: ${x.subsection};">
        <code style="${g.monoSm}">tag-style</code> accepts <code style="${g.monoSm}">stroke</code> (outlined, default)
        or <code style="${g.monoSm}">fill</code> (solid).
      </p>
      <div style="display: flex; gap: ${x.content}; margin-bottom: ${x.subsection};">
        <mms-tag label="Stroke" tag-style="stroke"></mms-tag>
        <mms-tag label="Fill" tag-style="fill"></mms-tag>
      </div>

      <hr style="${m.divider}" />

      <h2 style="${g.h2}">Color scheme</h2>
      <p style="${g.bodySm} ${m.muted} max-width: ${_}; margin-bottom: ${x.subsection};">
        <code style="${g.monoSm}">color-scheme</code> applies only when <code style="${g.monoSm}">tag-style="fill"</code>.
        Options: <code style="${g.monoSm}">primary</code> (default), <code style="${g.monoSm}">secondary</code>,
        <code style="${g.monoSm}">accent</code>, or <code style="${g.monoSm}">onyx</code>.
      </p>
      <div style="display: flex; gap: ${x.content}; flex-wrap: wrap; margin-bottom: ${x.subsection};">
        <mms-tag label="Primary" tag-style="fill" color-scheme="primary"></mms-tag>
        <mms-tag label="Secondary" tag-style="fill" color-scheme="secondary"></mms-tag>
        <mms-tag label="Onyx" tag-style="fill" color-scheme="onyx"></mms-tag>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${x.content};">
        <div slot="body-content">
          <p style="${g.bodySm} margin: 0;">
            <strong>Tier availability.</strong> Fill tags require <strong>Tier 1</strong> or <strong>Tier 2</strong> palettes
            (text contrast guaranteed). <strong>Tier 3</strong> (decorative-only) palettes are blocked because the label text
            would lack sufficient contrast against the fill background.
          </p>
          <ul style="${g.bodySm} ${m.muted} margin: ${x.content} 0 0; padding-left: var(--spacing-md2);">
            ${a.map(e=>{let t=[`primary`,`secondary`,`accent`],i=[...t.filter(t=>l(e,t)<3),`onyx`],a=t.filter(t=>l(e,t)===3);return r`<li><strong>${s[e]}:</strong> ${i.join(`, `)} ✓${a.length?r` &nbsp;|&nbsp; ${a.map(e=>`${e} ✗ (Tier 3)`).join(`, `)}`:n}</li>`})}
          </ul>
          <p style="${g.caption} ${m.muted} margin: ${x.content} 0 0;">
            See <em>Foundations → Color Framework → Color Tiering</em> for the full tier classification.
          </p>
        </div>
      </mms-card>

      <p style="${g.bodySm} ${m.muted} max-width: ${_}; margin-bottom: ${x.subsection};">
        Stroke style ignores <code style="${g.monoSm}">color-scheme</code> entirely — it always renders with neutral border/text colors.
        <br /><br />
        <strong>No "error" option:</strong> For semantic status (success, error, caution, informational), use
        <code style="${g.monoSm}">mms-status-tag</code> with its <code style="${g.monoSm}">alert-type</code> property instead.
      </p>

      <hr style="${m.divider}" />

      <h2 style="${g.h2}">Icons</h2>
      <p style="${g.bodySm} ${m.muted} max-width: ${_}; margin-bottom: ${x.subsection};">
        <code style="${g.monoSm}">left-icon</code> / <code style="${g.monoSm}">right-icon</code> accept any icon
        name from the Phosphor registry.
      </p>
      <div style="display: flex; gap: ${x.content}; margin-bottom: ${x.subsection};">
        <mms-tag label="Flag" left-icon="flag"></mms-tag>
        <mms-tag label="More info" right-icon="info"></mms-tag>
        <mms-tag label="Both" left-icon="flag" right-icon="info" tag-style="fill"></mms-tag>
      </div>

      <hr style="${m.divider}" />

      <h2 style="${g.h2}">Accessibility</h2>

      <div style="margin-bottom: ${x.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Not interactive."
          message="mms-tag renders static text content — it is not a button, link, or form control, has no focus/hover state, and requires no keyboard model beyond that of surrounding content. Icons are always decorative (aria-hidden); the label text itself carries the accessible content."
        ></mms-inline-alert>
      </div>

      <h3 style="${g.h3}">WCAG 2.2 AA compliance</h3>
      ${S(f.tag.rows)}

      <h3 style="${g.h3}">Screen reader behavior</h3>
      <ul style="${g.bodySm} ${m.muted} margin: 0 0 ${x.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${x.label};"><strong>Reading order:</strong> Announced as part of normal document flow — the label text is read; left/right icons are decorative and not announced separately.</li>
        <li><strong>No focus stop:</strong> mms-tag is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="${g.h3}">Keyboard navigation</h3>
      <p style="${g.bodySm} ${m.muted} max-width: ${_}; margin-bottom: ${x.subsection};">
        None. mms-tag is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},k={name:`Playground`,tags:[`!dev`],args:{label:`Label`,tagStyle:`stroke`,colorScheme:`primary`,leftIcon:``,rightIcon:``,theme:`maximus`,density:`default`},argTypes:{label:{name:`Label`,control:`text`,description:`Tag label text`,table:{category:`Content`}},tagStyle:{name:`Tag style`,control:`select`,options:[`stroke`,`fill`],description:`Visual style: stroke (outlined, default) or fill (solid)`,table:{category:`Visual`}},colorScheme:{name:`Color Scheme`,control:`select`,options:[`primary`,`secondary`,`accent`,`onyx`],description:`Color palette for tag-style="fill" only (stroke stays neutral). "onyx" is structural (works on all themes). Brand colors (primary/secondary/accent) availability depends on theme. No "error" option — that's a semantic status meaning, not a brand/structural color; use mms-status-tag's alert-type for semantic status instead.`,table:{category:`Visual`}},leftIcon:{name:`Left icon`,control:`select`,options:E,description:`Curated list of common tag icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.`,table:{category:`Visual`}},rightIcon:{name:`Right icon`,control:`select`,options:E,description:`Curated list of common tag icons. In code, any icon from the full Phosphor registry (1,512 icons) can be used.`,table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:a,description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-tag has no compact-specific styling since it's a static, non-interactive label with no touch-target constraint`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.tagStyle&&n.tagStyle!==`stroke`&&r.push(`tag-style="${n.tagStyle}"`),n.tagStyle===`fill`&&n.colorScheme&&n.colorScheme!==`primary`&&r.push(`color-scheme="${n.colorScheme}"`),n.leftIcon&&r.push(`left-icon="${n.leftIcon}"`),n.rightIcon&&r.push(`right-icon="${n.rightIcon}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-tag\n  ${r.join(`
  `)}\n></mms-tag>`},language:`html`}},controls:{sort:`none`}},render:e=>e.tagStyle===`fill`&&l(e.theme,e.colorScheme)===3?r`
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
              <strong style="color: #991b1b !important;">Tier 3 (Decorative):</strong> Lacks text contrast. Decorative backgrounds only — not safe for a fill tag's label text.
            </p>
            <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7; color: #991b1b !important;">
              See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
            </p>
          </div>
        `:r`
      <mms-tag
        label=${e.label}
        tag-style=${e.tagStyle}
        color-scheme=${e.colorScheme}
        left-icon=${e.leftIcon}
        right-icon=${e.rightIcon}
        data-density=${e.density===`compact`?`compact`:n}
      ></mms-tag>
    `},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Tag</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A compact, non-interactive label representing a property, category, or piece of metadata.
        Renders as a pill with an optional left/right icon. Use <code style="\${t.monoSm}">mms-status-tag</code>
        instead when the label communicates a semantic status (success, error, caution, informational).
      </p>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Basic usage</h2>
      <div style="display: flex; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-tag label="Label"></mms-tag>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Tag style</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">tag-style</code> accepts <code style="\${t.monoSm}">stroke</code> (outlined, default)
        or <code style="\${t.monoSm}">fill</code> (solid).
      </p>
      <div style="display: flex; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-tag label="Stroke" tag-style="stroke"></mms-tag>
        <mms-tag label="Fill" tag-style="fill"></mms-tag>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Color scheme</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">color-scheme</code> applies only when <code style="\${t.monoSm}">tag-style="fill"</code>.
        Options: <code style="\${t.monoSm}">primary</code> (default), <code style="\${t.monoSm}">secondary</code>,
        <code style="\${t.monoSm}">accent</code>, or <code style="\${t.monoSm}">onyx</code>.
      </p>
      <div style="display: flex; gap: \${space.content}; flex-wrap: wrap; margin-bottom: \${space.subsection};">
        <mms-tag label="Primary" tag-style="fill" color-scheme="primary"></mms-tag>
        <mms-tag label="Secondary" tag-style="fill" color-scheme="secondary"></mms-tag>
        <mms-tag label="Onyx" tag-style="fill" color-scheme="onyx"></mms-tag>
      </div>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
          <p style="\${t.bodySm} margin: 0;">
            <strong>Tier availability.</strong> Fill tags require <strong>Tier 1</strong> or <strong>Tier 2</strong> palettes
            (text contrast guaranteed). <strong>Tier 3</strong> (decorative-only) palettes are blocked because the label text
            would lack sufficient contrast against the fill background.
          </p>
          <ul style="\${t.bodySm} \${doc.muted} margin: \${space.content} 0 0; padding-left: var(--spacing-md2);">
            \${BRAND_ORDER.map(brand => {
    const schemes: ColorScheme[] = ['primary', 'secondary', 'accent'];
    const allowed = [...schemes.filter(s => getPaletteTier(brand, s) < 3), 'onyx'];
    const blocked = schemes.filter(s => getPaletteTier(brand, s) === 3);
    return html\`<li><strong>\${BRAND_LABELS[brand]}:</strong> \${allowed.join(', ')} ✓\${blocked.length ? html\` &nbsp;|&nbsp; \${blocked.map(s => \`\${s} ✗ (Tier 3)\`).join(', ')}\` : nothing}</li>\`;
  })}
          </ul>
          <p style="\${t.caption} \${doc.muted} margin: \${space.content} 0 0;">
            See <em>Foundations → Color Framework → Color Tiering</em> for the full tier classification.
          </p>
        </div>
      </mms-card>

      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Stroke style ignores <code style="\${t.monoSm}">color-scheme</code> entirely — it always renders with neutral border/text colors.
        <br /><br />
        <strong>No "error" option:</strong> For semantic status (success, error, caution, informational), use
        <code style="\${t.monoSm}">mms-status-tag</code> with its <code style="\${t.monoSm}">alert-type</code> property instead.
      </p>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Icons</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">left-icon</code> / <code style="\${t.monoSm}">right-icon</code> accept any icon
        name from the Phosphor registry.
      </p>
      <div style="display: flex; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-tag label="Flag" left-icon="flag"></mms-tag>
        <mms-tag label="More info" right-icon="info"></mms-tag>
        <mms-tag label="Both" left-icon="flag" right-icon="info" tag-style="fill"></mms-tag>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="margin-bottom: \${space.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=\${false}
          summary="Not interactive."
          message="mms-tag renders static text content — it is not a button, link, or form control, has no focus/hover state, and requires no keyboard model beyond that of surrounding content. Icons are always decorative (aria-hidden); the label text itself carries the accessible content."
        ></mms-inline-alert>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['tag'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Reading order:</strong> Announced as part of normal document flow — the label text is read; left/right icons are decorative and not announced separately.</li>
        <li><strong>No focus stop:</strong> mms-tag is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        None. mms-tag is not focusable and has no keyboard interaction model.
      </p>

    </div>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
      options: BRAND_ORDER,
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
            <strong style="display: block; margin-bottom: 0.5rem; color: #991b1b !important;">Invalid combination</strong>
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.theme}</code> theme +
            <code style="background: #fee2e2; padding: 0.125rem 0.375rem; border-radius: 3px; color: #991b1b !important;">\${args.colorScheme}</code> colorScheme
            <p style="margin: 0.75rem 0 0; opacity: 0.85; color: #991b1b !important;">
              <strong style="color: #991b1b !important;">Tier 3 (Decorative):</strong> Lacks text contrast. Decorative backgrounds only — not safe for a fill tag's label text.
            </p>
            <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; opacity: 0.7; color: #991b1b !important;">
              See <em style="color: #991b1b !important;">Color Framework → Color Tiering</em> for details.
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
}`,...k.parameters?.docs?.source}}},A=[`Overview`,`PlaygroundStory`]}));j();export{O as Overview,k as PlaygroundStory,A as __namedExportsOrder,D as default,j as n,T as t};