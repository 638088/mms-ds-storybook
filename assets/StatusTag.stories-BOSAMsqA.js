import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,m as r,n as i,s as a,t as o}from"./lit-B0BZwaT1.js";import{E as s,S as c,T as l,g as u,n as d,r as f,t as p,w as m}from"./mms-icon.component-DFVI3nJi.js";import{n as h,r as g}from"./iframe-CcinUa1O.js";import{n as _,r as v}from"./wcag-coverage-DNhlI7v1.js";import{n as y,r as b,t as x}from"./mms-inline-alert.component-DL_QIcV8.js";import{a as S,c as C,d as w,i as T,n as E,o as D,r as O,u as k}from"./doc-styles-DkvR_Qyb.js";import{a as A,n as j}from"./a11y-outcome-B57XZvCQ.js";var M,N,P,F=e((()=>{o(),s(),u(),y(),p(),f(),M={success:`check`,error:`x-circle`,caution:`warning`,informational:`info`},N=`success`,P=class extends i{constructor(...e){super(...e),this.alertType=`success`,this.leftIcon=!0,this.label=``}static{this.styles=[l,r`
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
  `]}willUpdate(e){if(!e.has(`alertType`))return;let t=b(this.alertType,N);t!==this.alertType&&(this.alertType=t)}render(){return a`
      ${this.leftIcon?a`<span class="icon"><mms-icon name=${M[this.alertType]} size="sm" weight="regular"></mms-icon></span>`:n}
      <span class="label">${this.label}</span>
    `}},d([c({type:String,reflect:!0,attribute:`alert-type`})],P.prototype,`alertType`,void 0),d([c({type:Boolean,attribute:`left-icon`})],P.prototype,`leftIcon`,void 0),d([c({type:String})],P.prototype,`label`,void 0),P=d([m(`mms-status-tag`)],P)})),I=t({Overview:()=>R,PlaygroundStory:()=>z,__namedExportsOrder:()=>B,default:()=>L}),L,R,z,B,V=e((()=>{o(),g(),F(),x(),_(),j(),C(),L={title:`Status Display/Status Tag`,tags:[`!autodocs`]},R={name:`Overview`,render:()=>a`
    <div data-theme=${O} data-mode=${D()} style=${E}>

      <h1 style="${w.h1}">Status Tag</h1>
      <p style="${w.body} ${S.muted} max-width: ${T}; margin-bottom: ${k.subsection};">
        A compact, non-interactive label communicating a semantic status: success, error, caution, or
        informational. Each type carries its own color treatment resolved through structural/utility tokens.
        Use <code style="${w.monoSm}">mms-tag</code> instead for a generic, non-semantic label.
      </p>

      <hr style="${S.divider}" />

      <h2 style="${w.h2}">Alert types</h2>
      <div style="display: flex; gap: ${k.content}; margin-bottom: ${k.subsection}; flex-wrap: wrap;">
        <mms-status-tag alert-type="success" label="Success"></mms-status-tag>
        <mms-status-tag alert-type="error" label="Error"></mms-status-tag>
        <mms-status-tag alert-type="caution" label="Caution"></mms-status-tag>
        <mms-status-tag alert-type="informational" label="Informational"></mms-status-tag>
      </div>

      <hr style="${S.divider}" />

      <h2 style="${w.h2}">Icons</h2>
      <p style="${w.bodySm} ${S.muted} max-width: ${T}; margin-bottom: ${k.subsection};">
        <code style="${w.monoSm}">left-icon</code> defaults to <code style="${w.monoSm}">true</code>, showing the
        fixed icon for the current <code style="${w.monoSm}">alert-type</code> (check / x-circle / warning / info).
        The icon is not overridable — the color/icon/text pairing per alert type is what makes status legible
        without relying on color alone. Set <code style="${w.monoSm}">left-icon</code> to
        <code style="${w.monoSm}">false</code> for dense contexts (e.g. a table cell) where the label text alone
        is sufficient.
      </p>
      <div style="display: flex; gap: ${k.content}; margin-bottom: ${k.subsection}; flex-wrap: wrap;">
        <mms-status-tag alert-type="success" label="Default icon"></mms-status-tag>
        <mms-status-tag alert-type="success" label="No icon" .leftIcon=${!1}></mms-status-tag>
      </div>

      <hr style="${S.divider}" />

      <h2 style="${w.h2}">Accessibility</h2>

      <div style="margin-bottom: ${k.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Not interactive."
          message="mms-status-tag renders static text content — it is not a button, link, or form control, has no focus/hover state, and requires no keyboard model. Status is communicated redundantly through both color and the default icon + label text — never by color alone, satisfying WCAG 1.4.1."
        ></mms-inline-alert>
      </div>

      <h3 style="${w.h3}">WCAG 2.2 AA compliance</h3>
      ${A(v[`status-tag`].rows)}

      <h3 style="${w.h3}">Screen reader behavior</h3>
      <ul style="${w.bodySm} ${S.muted} margin: 0 0 ${k.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${k.label};"><strong>Reading order:</strong> Announced as part of normal document flow — the label text is read; the left icon is decorative and not announced separately.</li>
        <li><strong>No focus stop:</strong> mms-status-tag is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="${w.h3}">Keyboard navigation</h3>
      <p style="${w.bodySm} ${S.muted} max-width: ${T}; margin-bottom: ${k.subsection};">
        None. mms-status-tag is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},z={name:`Playground`,tags:[`!dev`],args:{label:`Success`,alertType:`success`,leftIcon:!0,theme:`maximus`,density:`default`},argTypes:{label:{name:`Label`,control:`text`,description:`Tag label text`,table:{category:`Content`}},alertType:{name:`Alert type`,control:`select`,options:[`success`,`error`,`caution`,`informational`],description:`Semantic status type`,table:{category:`Visual`}},leftIcon:{name:`Left icon`,control:`boolean`,description:`Show the alert type's default icon (not overridable — see Overview)`,table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:h,description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-status-tag has no compact-specific styling since it's a static, non-interactive label with no touch-target constraint`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.alertType&&n.alertType!==`success`&&r.push(`alert-type="${n.alertType}"`),n.leftIcon||r.push(`left-icon="false"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-status-tag\n  ${r.join(`
  `)}\n></mms-status-tag>`},language:`html`}},controls:{sort:`none`}},render:e=>a`
    <mms-status-tag
      label=${e.label}
      alert-type=${e.alertType}
      .leftIcon=${e.leftIcon}
      data-density=${e.density===`compact`?`compact`:n}
    ></mms-status-tag>
  `},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <h1 style="\${t.h1}">Status Tag</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A compact, non-interactive label communicating a semantic status: success, error, caution, or
        informational. Each type carries its own color treatment resolved through structural/utility tokens.
        Use <code style="\${t.monoSm}">mms-tag</code> instead for a generic, non-semantic label.
      </p>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Alert types</h2>
      <div style="display: flex; gap: \${space.content}; margin-bottom: \${space.subsection}; flex-wrap: wrap;">
        <mms-status-tag alert-type="success" label="Success"></mms-status-tag>
        <mms-status-tag alert-type="error" label="Error"></mms-status-tag>
        <mms-status-tag alert-type="caution" label="Caution"></mms-status-tag>
        <mms-status-tag alert-type="informational" label="Informational"></mms-status-tag>
      </div>

      <hr style="\${doc.divider}" />

      <h2 style="\${t.h2}">Icons</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        <code style="\${t.monoSm}">left-icon</code> defaults to <code style="\${t.monoSm}">true</code>, showing the
        fixed icon for the current <code style="\${t.monoSm}">alert-type</code> (check / x-circle / warning / info).
        The icon is not overridable — the color/icon/text pairing per alert type is what makes status legible
        without relying on color alone. Set <code style="\${t.monoSm}">left-icon</code> to
        <code style="\${t.monoSm}">false</code> for dense contexts (e.g. a table cell) where the label text alone
        is sufficient.
      </p>
      <div style="display: flex; gap: \${space.content}; margin-bottom: \${space.subsection}; flex-wrap: wrap;">
        <mms-status-tag alert-type="success" label="Default icon"></mms-status-tag>
        <mms-status-tag alert-type="success" label="No icon" .leftIcon=\${false}></mms-status-tag>
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
          message="mms-status-tag renders static text content — it is not a button, link, or form control, has no focus/hover state, and requires no keyboard model. Status is communicated redundantly through both color and the default icon + label text — never by color alone, satisfying WCAG 1.4.1."
        ></mms-inline-alert>
      </div>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['status-tag'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} \${doc.muted} margin: 0 0 \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>Reading order:</strong> Announced as part of normal document flow — the label text is read; the left icon is decorative and not announced separately.</li>
        <li><strong>No focus stop:</strong> mms-status-tag is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        None. mms-status-tag is not focusable and has no keyboard interaction model.
      </p>

    </div>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B=[`Overview`,`PlaygroundStory`]}));V();export{R as Overview,z as PlaygroundStory,B as __namedExportsOrder,L as default,V as n,I as t};