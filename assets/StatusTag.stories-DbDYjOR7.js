import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-CBo78ikN.js";import{f as s,m as c,n as l,o as u,t as d}from"./decorate-BdwtT8fT.js";import{t as f}from"./mms-icon.component-B0xp-9Qj.js";import{a as p,o as m,r as h,t as g}from"./a11y-outcome-DcpqwzN2.js";var _,v,y=e((()=>{o(),u(),f(),l(),_={success:`check`,error:`x-circle`,caution:`warning`,informational:`info`},v=class extends i{constructor(...e){super(...e),this.alertType=`success`,this.leftIcon=!0,this.label=``}static{this.styles=r`
    /* data-density is intentionally not implemented here — mms-status-tag is a static,
       non-interactive label with no touch-target constraint, unlike mms-button's
       compact override. See .claude/contracts/global-props.md. */
    :host {
      --_stroke: var(--color-utility-informational-stroke-fixed);
      --_text: var(--color-text-on-muted);
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
      border: var(--border-width-xs) solid var(--_stroke);
      background: var(--color-utility-informational-muted-fixed);
      color: var(--_text);
    }

    :host([alert-type='success']) {
      --_stroke: var(--color-utility-success-stroke);
      --_text: var(--color-text-on-muted);
      background: var(--color-utility-success-muted);
    }

    :host([alert-type='error']) {
      --_stroke: var(--color-utility-error-stroke);
      --_text: var(--color-text-on-muted);
      background: var(--color-utility-error-muted);
    }

    :host([alert-type='caution']) {
      --_stroke: var(--color-utility-caution-stroke);
      --_text: var(--color-text-on-muted);
      background: var(--color-utility-caution-muted);
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
      ${this.leftIcon?a`<span class="icon"><mms-icon name=${_[this.alertType]} size="sm" weight="regular"></mms-icon></span>`:n}
      <span class="label">${this.label}</span>
    `}},d([s({type:String,reflect:!0,attribute:`alert-type`})],v.prototype,`alertType`,void 0),d([s({type:Boolean,attribute:`left-icon`})],v.prototype,`leftIcon`,void 0),d([s({type:String})],v.prototype,`label`,void 0),v=d([c(`mms-status-tag`)],v)})),b=t({Overview:()=>T,PlaygroundStory:()=>E,__namedExportsOrder:()=>D,default:()=>x}),x,S,C,w,T,E,D,O=e((()=>{o(),y(),p(),g(),x={title:`Status Display/Status Tag`,tags:[`!autodocs`]},S={h1:`font-size: 1.875rem; line-height: 1.25; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 0.5rem;`,h2:`font-size: 1.25rem; line-height: 1.35; font-weight: 700; margin: 0 0 0.75rem;`,h3:`font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; opacity: 0.65;`,body:`font-size: 1rem; line-height: 1.6; margin: 0;`,bodySm:`font-size: 0.9375rem; line-height: 1.55; margin: 0;`,caption:`font-size: 0.875rem; line-height: 1.5; margin: 0;`,monoSm:`font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 0.875rem;`},C=`680px`,w=`960px`,T={name:`Overview`,render:()=>a`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${w}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="${S.h1}">Status Tag</h1>
      <p style="${S.body} opacity: 0.85; max-width: ${C}; margin-bottom: 2rem;">
        A compact, non-interactive label communicating a semantic status: success, error, caution, or
        informational. Each type carries its own color treatment resolved through structural/utility tokens.
        Use <code style="${S.monoSm}">mms-tag</code> instead for a generic, non-semantic label.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${S.h2}">Alert types</h2>
      <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem; flex-wrap: wrap;">
        <mms-status-tag alert-type="success" label="Success"></mms-status-tag>
        <mms-status-tag alert-type="error" label="Error"></mms-status-tag>
        <mms-status-tag alert-type="caution" label="Caution"></mms-status-tag>
        <mms-status-tag alert-type="informational" label="Informational"></mms-status-tag>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${S.h2}">Icons</h2>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 1.5rem;">
        <code style="${S.monoSm}">left-icon</code> defaults to <code style="${S.monoSm}">true</code>, showing the
        fixed icon for the current <code style="${S.monoSm}">alert-type</code> (check / x-circle / warning / info).
        The icon is not overridable — the color/icon/text pairing per alert type is what makes status legible
        without relying on color alone. Set <code style="${S.monoSm}">left-icon</code> to
        <code style="${S.monoSm}">false</code> for dense contexts (e.g. a table cell) where the label text alone
        is sufficient.
      </p>
      <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem; flex-wrap: wrap;">
        <mms-status-tag alert-type="success" label="Default icon"></mms-status-tag>
        <mms-status-tag alert-type="success" label="No icon" .leftIcon=${!1}></mms-status-tag>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="${S.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="${S.bodySm} margin: 0;">
          <strong>Not interactive.</strong> mms-status-tag renders static text content — it is not a button,
          link, or form control, has no focus/hover state, and requires no keyboard model. Status is
          communicated redundantly through both color and the default icon + label text — never by color alone,
          satisfying WCAG 1.4.1.
        </p>
      </div>

      <h3 style="${S.h3}">WCAG 2.2 AA Compliance</h3>
      ${h(m[`status-tag`].rows)}

      <h3 style="${S.h3}">Screen Reader Behavior</h3>
      <ul style="${S.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Reading order:</strong> Announced as part of normal document flow — the label text is read; the left icon is decorative and not announced separately.</li>
        <li><strong>No focus stop:</strong> mms-status-tag is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="${S.h3}">Keyboard Navigation</h3>
      <p style="${S.bodySm} opacity: 0.85; max-width: ${C}; margin-bottom: 2rem;">
        None. mms-status-tag is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},E={name:`Playground`,tags:[`!dev`],args:{label:`Success`,alertType:`success`,leftIcon:!0,theme:`maximus`,density:`default`},argTypes:{label:{name:`Label`,control:`text`,description:`Tag label text`,table:{category:`Content`}},alertType:{name:`Alert type`,control:`select`,options:[`success`,`error`,`caution`,`informational`],description:`Semantic status type`,table:{category:`Visual`}},leftIcon:{name:`Left icon`,control:`boolean`,description:`Show the alert type's default icon (not overridable — see Overview)`,table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`va-gov`,`uss-oh-dvs`,`default`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-status-tag has no compact-specific styling since it's a static, non-interactive label with no touch-target constraint`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.alertType&&n.alertType!==`success`&&r.push(`alert-type="${n.alertType}"`),n.leftIcon||r.push(`left-icon="false"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-status-tag\n  ${r.join(`
  `)}\n></mms-status-tag>`},language:`html`}},controls:{sort:`none`}},render:e=>a`
    <mms-status-tag
      label=${e.label}
      alert-type=${e.alertType}
      .leftIcon=${e.leftIcon}
      data-density=${e.density===`compact`?`compact`:n}
    ></mms-status-tag>
  `},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="\${t.h1}">Status Tag</h1>
      <p style="\${t.body} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        A compact, non-interactive label communicating a semantic status: success, error, caution, or
        informational. Each type carries its own color treatment resolved through structural/utility tokens.
        Use <code style="\${t.monoSm}">mms-tag</code> instead for a generic, non-semantic label.
      </p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Alert types</h2>
      <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem; flex-wrap: wrap;">
        <mms-status-tag alert-type="success" label="Success"></mms-status-tag>
        <mms-status-tag alert-type="error" label="Error"></mms-status-tag>
        <mms-status-tag alert-type="caution" label="Caution"></mms-status-tag>
        <mms-status-tag alert-type="informational" label="Informational"></mms-status-tag>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Icons</h2>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 1.5rem;">
        <code style="\${t.monoSm}">left-icon</code> defaults to <code style="\${t.monoSm}">true</code>, showing the
        fixed icon for the current <code style="\${t.monoSm}">alert-type</code> (check / x-circle / warning / info).
        The icon is not overridable — the color/icon/text pairing per alert type is what makes status legible
        without relying on color alone. Set <code style="\${t.monoSm}">left-icon</code> to
        <code style="\${t.monoSm}">false</code> for dense contexts (e.g. a table cell) where the label text alone
        is sufficient.
      </p>
      <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem; flex-wrap: wrap;">
        <mms-status-tag alert-type="success" label="Default icon"></mms-status-tag>
        <mms-status-tag alert-type="success" label="No icon" .leftIcon=\${false}></mms-status-tag>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.15); margin: 0 0 2rem;" />

      <h2 style="\${t.h2}">Accessibility</h2>

      <div style="background: rgba(34, 197, 94, 0.08); border-left: 3px solid #22C55E; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 6px 6px 0;">
        <p style="\${t.bodySm} margin: 0;">
          <strong>Not interactive.</strong> mms-status-tag renders static text content — it is not a button,
          link, or form control, has no focus/hover state, and requires no keyboard model. Status is
          communicated redundantly through both color and the default icon + label text — never by color alone,
          satisfying WCAG 1.4.1.
        </p>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA Compliance</h3>
      \${renderWcagComplianceTable(wcagTables['status-tag'].rows)}

      <h3 style="\${t.h3}">Screen Reader Behavior</h3>
      <ul style="\${t.bodySm} margin: 0 0 1.5rem; padding-left: 1.5rem; opacity: 0.85;">
        <li style="margin-bottom: 0.5rem;"><strong>Reading order:</strong> Announced as part of normal document flow — the label text is read; the left icon is decorative and not announced separately.</li>
        <li><strong>No focus stop:</strong> mms-status-tag is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard Navigation</h3>
      <p style="\${t.bodySm} opacity: 0.85; max-width: \${PROSE_MAX}; margin-bottom: 2rem;">
        None. mms-status-tag is not focusable and has no keyboard interaction model.
      </p>

    </div>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    label: 'Success',
    alertType: 'success',
    leftIcon: true,
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
    alertType: {
      name: 'Alert type',
      control: 'select',
      options: ['success', 'error', 'caution', 'informational'],
      description: 'Semantic status type',
      table: {
        category: 'Visual'
      }
    },
    leftIcon: {
      name: 'Left icon',
      control: 'boolean',
      description: 'Show the alert type\\'s default icon (not overridable — see Overview)',
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
      description: 'Accepted as a global attribute passthrough — mms-status-tag has no compact-specific styling since it\\'s a static, non-interactive label with no touch-target constraint',
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
            alertType: string;
            leftIcon: boolean;
            density: string;
          };
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.label) attrs.push(\`label="\${a.label}"\`);
          if (a.alertType && a.alertType !== 'success') attrs.push(\`alert-type="\${a.alertType}"\`);
          if (!a.leftIcon) attrs.push('left-icon="false"');
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-status-tag\\n  \${attrs.join('\\n  ')}\\n></mms-status-tag>\`;
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
    alertType: string;
    leftIcon: boolean;
    density: string;
  }) => html\`
    <mms-status-tag
      label=\${args.label}
      alert-type=\${args.alertType}
      .leftIcon=\${args.leftIcon}
      data-density=\${args.density === 'compact' ? 'compact' : nothing}
    ></mms-status-tag>
  \`
}`,...E.parameters?.docs?.source}}},D=[`Overview`,`PlaygroundStory`]}));O();export{T as Overview,E as PlaygroundStory,D as __namedExportsOrder,x as default,O as n,b as t};