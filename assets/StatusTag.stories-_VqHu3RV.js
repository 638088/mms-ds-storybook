import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{n as a,r as o}from"./wcag-coverage-DNhlI7v1.js";import{t as s}from"./mms-inline-alert.component-BWndcKtJ.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,u as h}from"./doc-styles-BoEZknkJ.js";import{a as g,n as _}from"./a11y-outcome-o7pti1Vx.js";import{t as v}from"./mms-status-tag.component-CqBHxiRZ.js";var y=t({Overview:()=>x,PlaygroundStory:()=>S,__namedExportsOrder:()=>C,default:()=>b}),b,x,S,C,w=e((()=>{i(),v(),s(),a(),_(),l(),b={title:`Status Display/Status Tag`,tags:[`!autodocs`]},x={name:`Overview`,render:()=>r`
    <div data-theme=${m} data-mode=${p()} style=${f}>

      <h1 style="${h.h1}">Status Tag</h1>
      <p style="${h.body} ${c.muted} max-width: ${u}; margin-bottom: ${d.subsection};">
        A compact, non-interactive label communicating a semantic status: success, error, caution, or
        informational. Each type carries its own color treatment resolved through structural/utility tokens.
        Use <code style="${h.monoSm}">mms-tag</code> instead for a generic, non-semantic label.
      </p>

      <hr style="${c.divider}" />

      <h2 style="${h.h2}">Alert types</h2>
      <div style="display: flex; gap: ${d.content}; margin-bottom: ${d.subsection}; flex-wrap: wrap;">
        <mms-status-tag alert-type="success" label="Success"></mms-status-tag>
        <mms-status-tag alert-type="error" label="Error"></mms-status-tag>
        <mms-status-tag alert-type="caution" label="Caution"></mms-status-tag>
        <mms-status-tag alert-type="informational" label="Informational"></mms-status-tag>
      </div>

      <hr style="${c.divider}" />

      <h2 style="${h.h2}">Icons</h2>
      <p style="${h.bodySm} ${c.muted} max-width: ${u}; margin-bottom: ${d.subsection};">
        <code style="${h.monoSm}">left-icon</code> defaults to <code style="${h.monoSm}">true</code>, showing the
        fixed icon for the current <code style="${h.monoSm}">alert-type</code> (check / x-circle / warning / info).
        The icon is not overridable — the color/icon/text pairing per alert type is what makes status legible
        without relying on color alone. Set <code style="${h.monoSm}">left-icon</code> to
        <code style="${h.monoSm}">false</code> for dense contexts (e.g. a table cell) where the label text alone
        is sufficient.
      </p>
      <div style="display: flex; gap: ${d.content}; margin-bottom: ${d.subsection}; flex-wrap: wrap;">
        <mms-status-tag alert-type="success" label="Default icon"></mms-status-tag>
        <mms-status-tag alert-type="success" label="No icon" .leftIcon=${!1}></mms-status-tag>
      </div>

      <hr style="${c.divider}" />

      <h2 style="${h.h2}">Accessibility</h2>

      <div style="margin-bottom: ${d.content};">
        <mms-inline-alert
          alert-type="informational"
          role="note"
          aria-live="off"
          .dismissible=${!1}
          summary="Not interactive."
          message="mms-status-tag renders static text content — it is not a button, link, or form control, has no focus/hover state, and requires no keyboard model. Status is communicated redundantly through both color and the default icon + label text — never by color alone, satisfying WCAG 1.4.1."
        ></mms-inline-alert>
      </div>

      <h3 style="${h.h3}">WCAG 2.2 AA compliance</h3>
      ${g(o[`status-tag`].rows)}

      <h3 style="${h.h3}">Screen reader behavior</h3>
      <ul style="${h.bodySm} ${c.muted} margin: 0 0 ${d.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${d.label};"><strong>Reading order:</strong> Announced as part of normal document flow — the label text is read; the left icon is decorative and not announced separately.</li>
        <li><strong>No focus stop:</strong> mms-status-tag is not a tab stop — it is skipped entirely during keyboard navigation.</li>
      </ul>

      <h3 style="${h.h3}">Keyboard navigation</h3>
      <p style="${h.bodySm} ${c.muted} max-width: ${u}; margin-bottom: ${d.subsection};">
        None. mms-status-tag is not focusable and has no keyboard interaction model.
      </p>

    </div>
  `},S={name:`Playground`,tags:[`!dev`],args:{label:`Success`,alertType:`success`,leftIcon:!0,theme:`maximus`,density:`default`},argTypes:{label:{name:`Label`,control:`text`,description:`Tag label text`,table:{category:`Content`}},alertType:{name:`Alert type`,control:`select`,options:[`success`,`error`,`caution`,`informational`],description:`Semantic status type`,table:{category:`Visual`}},leftIcon:{name:`Left icon`,control:`boolean`,description:`Show the alert type's default icon (not overridable — see Overview)`,table:{category:`Visual`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme`,table:{category:`Global Props`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-status-tag has no compact-specific styling since it's a static, non-interactive label with no touch-target constraint`,table:{category:`Global Props`}}},parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.label&&r.push(`label="${n.label}"`),n.alertType&&n.alertType!==`success`&&r.push(`alert-type="${n.alertType}"`),n.leftIcon||r.push(`left-icon="false"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-status-tag\n  ${r.join(`
  `)}\n></mms-status-tag>`},language:`html`}},controls:{sort:`none`}},render:e=>r`
    <mms-status-tag
      label=${e.label}
      alert-type=${e.alertType}
      .leftIcon=${e.leftIcon}
      data-density=${e.density===`compact`?`compact`:n}
    ></mms-status-tag>
  `},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Overview`,`PlaygroundStory`]}));w();export{x as Overview,S as PlaygroundStory,C as __namedExportsOrder,b as default,w as n,y as t};