import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{i as n,s as r,t as i}from"./lit-B0BZwaT1.js";import{t as a}from"./mms-card.component-Ae9XIj4r.js";import{n as o,r as s}from"./wcag-coverage-DNhlI7v1.js";import{t as c}from"./mms-inline-alert.component-BWndcKtJ.js";import{a as l,c as u,i as d,l as f,n as p,o as m,r as h,u as g}from"./doc-styles-BoEZknkJ.js";import{a as _,n as v}from"./a11y-outcome-o7pti1Vx.js";var y=t({Overview:()=>x,PlaygroundStory:()=>S,__namedExportsOrder:()=>C,default:()=>b}),b,x,S,C,w=e((()=>{i(),c(),a(),o(),v(),u(),b={title:`Feedback/Inline Alert`,tags:[`!autodocs`]},x={name:`Overview`,render:()=>r`
    <div data-theme=${h} data-mode=${m()} style=${p}>

      <!-- Header -->
      <h1 style="${g.h1}">Inline Alert</h1>
      <p style="${g.body} ${l.muted} max-width: ${d}; margin-bottom: ${f.subsection};">
        A contextual message associated with a section, form field, or item on a page — unlike
        <code style="${g.monoSm}">mms-alert-banner</code>'s page-level placement, inline alert is meant to be
        embedded directly alongside the content it refers to. Announced assertively to assistive technology via
        <code style="${g.monoSm}">role="alert"</code>.
      </p>

      <hr style="${l.divider}" />

      <!-- Basic Usage -->
      <h2 style="${g.h2}">Basic usage</h2>
      <p style="${g.bodySm} ${l.muted} max-width: ${d}; margin-bottom: ${f.subsection};">
        Defaults to the <code style="${g.monoSm}">informational</code> type with a close button and no text-link action.
      </p>

      <div style="margin-bottom: ${f.subsection};">
        <mms-inline-alert
          summary="Heads up:"
          message="This field will be validated when you submit the form."
        ></mms-inline-alert>
      </div>

      <hr style="${l.divider}" />

      <!-- Alert Types -->
      <h2 style="${g.h2}">Alert types</h2>
      <p style="${g.bodySm} ${l.muted} max-width: ${d}; margin-bottom: ${f.subsection};">
        Four semantic types: <code style="${g.monoSm}">informational</code> (default),
        <code style="${g.monoSm}">success</code>, <code style="${g.monoSm}">caution</code>, and
        <code style="${g.monoSm}">error</code>. Each pairs a distinct icon with its own accent color.
      </p>

      <div style="display: flex; flex-direction: column; gap: ${f.content}; margin-bottom: ${f.subsection};">
        <mms-inline-alert
          alert-type="informational"
          summary="Informational:"
          message="A newer version of this document is available."
        ></mms-inline-alert>
        <mms-inline-alert
          alert-type="success"
          summary="Success:"
          message="This field was verified successfully."
        ></mms-inline-alert>
        <mms-inline-alert
          alert-type="caution"
          summary="Caution:"
          message="This value could not be automatically confirmed."
        ></mms-inline-alert>
        <mms-inline-alert
          alert-type="error"
          summary="Error:"
          message="This field is required."
        ></mms-inline-alert>
      </div>

      <hr style="${l.divider}" />

      <!-- With action -->
      <h2 style="${g.h2}">With a text-link action</h2>
      <p style="${g.bodySm} ${l.muted} max-width: ${d}; margin-bottom: ${f.subsection};">
        Setting <code style="${g.monoSm}">action</code> to <code style="${g.monoSm}">true</code> renders a text
        link below the message — off by default, unlike <code style="${g.monoSm}">mms-alert-banner</code>.
      </p>

      <div style="margin-bottom: ${f.subsection};">
        <mms-inline-alert
          alert-type="error"
          message="We couldn't verify your address."
          action
          action-text="Edit address"
          action-href="#"
        ></mms-inline-alert>
      </div>

      <hr style="${l.divider}" />

      <!-- Without dismiss -->
      <h2 style="${g.h2}">Without a close button</h2>
      <p style="${g.bodySm} ${l.muted} max-width: ${d}; margin-bottom: ${f.subsection};">
        Setting <code style="${g.monoSm}">dismissible</code> to <code style="${g.monoSm}">false</code> hides the
        close button — for a message that should persist for the lifetime of its context (e.g. a field-level
        validation error).
      </p>

      <div style="margin-bottom: ${f.subsection};">
        <mms-inline-alert
          alert-type="error"
          message="Password must be at least 8 characters."
          .dismissible=${!1}
        ></mms-inline-alert>
      </div>

      <hr style="${l.divider}" />

      <!-- Dismissal -->
      <h2 style="${g.h2}">Dismissal</h2>
      <p style="${g.bodySm} ${l.muted} max-width: ${d}; margin-bottom: ${f.subsection};">
        The close button fires a <code style="${g.monoSm}">dismiss</code> event — the host page owns removal from
        the DOM (e.g. <code style="${g.monoSm}">@dismiss=\${() => el.remove()}</code>); the component does not
        remove itself, and has no auto-dismiss timer.
      </p>

      <div style="margin-bottom: ${f.subsection};">
        <mms-inline-alert
          alert-type="caution"
          message="Dismiss this alert with the close button — it fires a 'dismiss' event."
        ></mms-inline-alert>
      </div>

      <hr style="${l.divider}" />

      <!-- Accessibility -->
      <h2 style="${g.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: ${f.content};">
        <div slot="body-content">
        <p style="${g.bodySm}">
          <strong>Why <code style="${g.monoSm}">role="alert"</code>, not <code style="${g.monoSm}">role="status"</code>?</strong>
          Inline Alert is scoped to a specific section, field, or item — its message is directly relevant to
          whatever the user is doing right there (e.g. a validation error on the field they just left).
          <code style="${g.monoSm}">role="alert"</code>'s implicit <code style="${g.monoSm}">aria-live="polite"</code>
          announces it promptly in that immediate context, matching that framing. Use
          <code style="${g.monoSm}">mms-alert-banner</code> instead for page-level status that isn't tied to a
          specific piece of content.
        </p>
        </div>
      </mms-card>

      <h3 style="${g.h3}">WCAG 2.2 AA compliance</h3>
      ${_(s[`inline-alert`].rows)}

      <h3 style="${g.h3}">Screen reader behavior</h3>
      <ul style="${g.bodySm} margin-bottom: ${f.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: ${f.label};"><strong>On render:</strong> Announces via <code style="${g.monoSm}">role="alert"</code> — summary, message, and action link text are read as content</li>
        <li style="margin-bottom: ${f.label};"><strong>Alert icon:</strong> Announced via its <code style="${g.monoSm}">aria-label</code> (e.g. "error alert"), not left silent as decorative</li>
        <li style="margin-bottom: ${f.label};"><strong>Text link:</strong> Announced as a link with its label; focusable independently of the alert container</li>
        <li><strong>Close button:</strong> Announced as "Dismiss alert, button"</li>
      </ul>

      <h3 style="${g.h3}">Keyboard navigation</h3>
      <table style="${l.table}">
        <thead>
          <tr>
            <th style="${l.th} width: 140px;">Key</th>
            <th style="${l.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="${l.td}"><kbd style="${l.kbd}">Tab</kbd></td>
            <td style="${l.td}">Move focus to the text-link action, then the close button (in DOM order)</td>
          </tr>
          <tr>
            <td style="${l.td}"><kbd style="${l.kbd}">Enter</kbd> / <kbd style="${l.kbd}">Space</kbd></td>
            <td style="${l.td}">Activates the focused text link or close button</td>
          </tr>
        </tbody>
      </table>

    </div>
  `},S={name:`Playground`,tags:[`!dev`],args:{alertType:`informational`,dismissible:!0,action:!1,summary:`Heads up:`,message:`Additional information goes here.`,actionText:`Text link`,actionHref:`#`,theme:`maximus`,density:`default`},argTypes:{alertType:{name:`Alert type`,control:`select`,options:[`informational`,`error`,`success`,`caution`],description:`Semantic type — pairs an alert icon and accent color`,table:{category:`Visual`}},dismissible:{name:`Dismissible`,control:`boolean`,description:`Whether to render the close button`,table:{category:`Visual`}},action:{name:`Show action`,control:`boolean`,description:`Whether to render the text-link action`,table:{category:`Visual`}},summary:{name:`Summary`,control:`text`,description:`Bold lead-in text rendered before the message. Leave empty to omit.`,table:{category:`Content`}},message:{name:`Message`,control:`text`,description:`Regular message text`,table:{category:`Content`}},actionText:{name:`Action text`,control:`text`,description:`Text-link label`,table:{category:`Content`}},actionHref:{name:`Action href`,control:`text`,description:`Text-link URL`,table:{category:`Content`}},theme:{name:`Theme`,control:`select`,options:[`maximus`,`dow`,`ves`,`uss-oh-dvs`],description:`Brand theme (affects typography and link color)`,table:{category:`Global`}},density:{name:`Density`,control:`select`,options:[`default`,`compact`],description:`Accepted as a global attribute passthrough — mms-inline-alert has no compact-specific styling yet`,table:{category:`Global`}}},decorators:[e=>r`
        <div style="padding: 1.5rem 2rem;">
          ${e()}
        </div>
      `],parameters:{docs:{source:{transform:(e,t)=>{let n=t.args,r=[];return n.alertType&&n.alertType!==`informational`&&r.push(`alert-type="${n.alertType}"`),n.dismissible===!1&&r.push(".dismissible=${false}"),n.action&&r.push(`action`),n.summary&&r.push(`summary="${n.summary}"`),n.message&&r.push(`message="${n.message}"`),n.action&&n.actionText&&r.push(`action-text="${n.actionText}"`),n.action&&n.actionHref&&r.push(`action-href="${n.actionHref}"`),n.density===`compact`&&r.push(`data-density="compact"`),`<mms-inline-alert\n  ${r.join(`
  `)}\n></mms-inline-alert>`},language:`html`}},controls:{sort:`none`}},render:e=>r`
      <mms-inline-alert
        alert-type=${e.alertType}
        ?dismissible=${e.dismissible}
        ?action=${e.action}
        summary=${e.summary||n}
        message=${e.message}
        action-text=${e.actionText||n}
        action-href=${e.actionHref||n}
        data-density=${e.density===`compact`?`compact`:n}
      ></mms-inline-alert>
    `},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => html\`
    <div data-theme=\${DOC_THEME} data-mode=\${docMode()} style=\${DOC_ROOT}>

      <!-- Header -->
      <h1 style="\${t.h1}">Inline Alert</h1>
      <p style="\${t.body} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        A contextual message associated with a section, form field, or item on a page — unlike
        <code style="\${t.monoSm}">mms-alert-banner</code>'s page-level placement, inline alert is meant to be
        embedded directly alongside the content it refers to. Announced assertively to assistive technology via
        <code style="\${t.monoSm}">role="alert"</code>.
      </p>

      <hr style="\${doc.divider}" />

      <!-- Basic Usage -->
      <h2 style="\${t.h2}">Basic usage</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Defaults to the <code style="\${t.monoSm}">informational</code> type with a close button and no text-link action.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-inline-alert
          summary="Heads up:"
          message="This field will be validated when you submit the form."
        ></mms-inline-alert>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Alert Types -->
      <h2 style="\${t.h2}">Alert types</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Four semantic types: <code style="\${t.monoSm}">informational</code> (default),
        <code style="\${t.monoSm}">success</code>, <code style="\${t.monoSm}">caution</code>, and
        <code style="\${t.monoSm}">error</code>. Each pairs a distinct icon with its own accent color.
      </p>

      <div style="display: flex; flex-direction: column; gap: \${space.content}; margin-bottom: \${space.subsection};">
        <mms-inline-alert
          alert-type="informational"
          summary="Informational:"
          message="A newer version of this document is available."
        ></mms-inline-alert>
        <mms-inline-alert
          alert-type="success"
          summary="Success:"
          message="This field was verified successfully."
        ></mms-inline-alert>
        <mms-inline-alert
          alert-type="caution"
          summary="Caution:"
          message="This value could not be automatically confirmed."
        ></mms-inline-alert>
        <mms-inline-alert
          alert-type="error"
          summary="Error:"
          message="This field is required."
        ></mms-inline-alert>
      </div>

      <hr style="\${doc.divider}" />

      <!-- With action -->
      <h2 style="\${t.h2}">With a text-link action</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Setting <code style="\${t.monoSm}">action</code> to <code style="\${t.monoSm}">true</code> renders a text
        link below the message — off by default, unlike <code style="\${t.monoSm}">mms-alert-banner</code>.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-inline-alert
          alert-type="error"
          message="We couldn't verify your address."
          action
          action-text="Edit address"
          action-href="#"
        ></mms-inline-alert>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Without dismiss -->
      <h2 style="\${t.h2}">Without a close button</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        Setting <code style="\${t.monoSm}">dismissible</code> to <code style="\${t.monoSm}">false</code> hides the
        close button — for a message that should persist for the lifetime of its context (e.g. a field-level
        validation error).
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-inline-alert
          alert-type="error"
          message="Password must be at least 8 characters."
          .dismissible=\${false}
        ></mms-inline-alert>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Dismissal -->
      <h2 style="\${t.h2}">Dismissal</h2>
      <p style="\${t.bodySm} \${doc.muted} max-width: \${PROSE_MAX}; margin-bottom: \${space.subsection};">
        The close button fires a <code style="\${t.monoSm}">dismiss</code> event — the host page owns removal from
        the DOM (e.g. <code style="\${t.monoSm}">@dismiss=\\\${() => el.remove()}</code>); the component does not
        remove itself, and has no auto-dismiss timer.
      </p>

      <div style="margin-bottom: \${space.subsection};">
        <mms-inline-alert
          alert-type="caution"
          message="Dismiss this alert with the close button — it fires a 'dismiss' event."
        ></mms-inline-alert>
      </div>

      <hr style="\${doc.divider}" />

      <!-- Accessibility -->
      <h2 style="\${t.h2}">Accessibility</h2>

      <mms-card variant="outlined" surface="tint" roundness="subtle" style="display: block; margin-bottom: \${space.content};">
        <div slot="body-content">
        <p style="\${t.bodySm}">
          <strong>Why <code style="\${t.monoSm}">role="alert"</code>, not <code style="\${t.monoSm}">role="status"</code>?</strong>
          Inline Alert is scoped to a specific section, field, or item — its message is directly relevant to
          whatever the user is doing right there (e.g. a validation error on the field they just left).
          <code style="\${t.monoSm}">role="alert"</code>'s implicit <code style="\${t.monoSm}">aria-live="polite"</code>
          announces it promptly in that immediate context, matching that framing. Use
          <code style="\${t.monoSm}">mms-alert-banner</code> instead for page-level status that isn't tied to a
          specific piece of content.
        </p>
        </div>
      </mms-card>

      <h3 style="\${t.h3}">WCAG 2.2 AA compliance</h3>
      \${renderWcagComplianceTable(wcagTables['inline-alert'].rows)}

      <h3 style="\${t.h3}">Screen reader behavior</h3>
      <ul style="\${t.bodySm} margin-bottom: \${space.content}; padding-left: var(--spacing-lg1);">
        <li style="margin-bottom: \${space.label};"><strong>On render:</strong> Announces via <code style="\${t.monoSm}">role="alert"</code> — summary, message, and action link text are read as content</li>
        <li style="margin-bottom: \${space.label};"><strong>Alert icon:</strong> Announced via its <code style="\${t.monoSm}">aria-label</code> (e.g. "error alert"), not left silent as decorative</li>
        <li style="margin-bottom: \${space.label};"><strong>Text link:</strong> Announced as a link with its label; focusable independently of the alert container</li>
        <li><strong>Close button:</strong> Announced as "Dismiss alert, button"</li>
      </ul>

      <h3 style="\${t.h3}">Keyboard navigation</h3>
      <table style="\${doc.table}">
        <thead>
          <tr>
            <th style="\${doc.th} width: 140px;">Key</th>
            <th style="\${doc.th}">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Tab</kbd></td>
            <td style="\${doc.td}">Move focus to the text-link action, then the close button (in DOM order)</td>
          </tr>
          <tr>
            <td style="\${doc.td}"><kbd style="\${doc.kbd}">Enter</kbd> / <kbd style="\${doc.kbd}">Space</kbd></td>
            <td style="\${doc.td}">Activates the focused text link or close button</td>
          </tr>
        </tbody>
      </table>

    </div>
  \`
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!dev'],
  args: {
    alertType: 'informational' as InlineAlertType,
    dismissible: true,
    action: false,
    summary: 'Heads up:',
    message: 'Additional information goes here.',
    actionText: 'Text link',
    actionHref: '#',
    theme: 'maximus',
    density: 'default'
  },
  argTypes: {
    // ── Visual ────────────────────────────────────────────────
    alertType: {
      name: 'Alert type',
      control: 'select',
      options: ['informational', 'error', 'success', 'caution'],
      description: 'Semantic type — pairs an alert icon and accent color',
      table: {
        category: 'Visual'
      }
    },
    dismissible: {
      name: 'Dismissible',
      control: 'boolean',
      description: 'Whether to render the close button',
      table: {
        category: 'Visual'
      }
    },
    action: {
      name: 'Show action',
      control: 'boolean',
      description: 'Whether to render the text-link action',
      table: {
        category: 'Visual'
      }
    },
    // ── Content ───────────────────────────────────────────────
    summary: {
      name: 'Summary',
      control: 'text',
      description: 'Bold lead-in text rendered before the message. Leave empty to omit.',
      table: {
        category: 'Content'
      }
    },
    message: {
      name: 'Message',
      control: 'text',
      description: 'Regular message text',
      table: {
        category: 'Content'
      }
    },
    actionText: {
      name: 'Action text',
      control: 'text',
      description: 'Text-link label',
      table: {
        category: 'Content'
      }
    },
    actionHref: {
      name: 'Action href',
      control: 'text',
      description: 'Text-link URL',
      table: {
        category: 'Content'
      }
    },
    // ── Global ────────────────────────────────────────────────
    theme: {
      name: 'Theme',
      control: 'select',
      options: ['maximus', 'dow', 'ves', 'uss-oh-dvs'],
      description: 'Brand theme (affects typography and link color)',
      table: {
        category: 'Global'
      }
    },
    density: {
      name: 'Density',
      control: 'select',
      options: ['default', 'compact'],
      description: 'Accepted as a global attribute passthrough — mms-inline-alert has no compact-specific styling yet',
      table: {
        category: 'Global'
      }
    }
  },
  decorators: [(story: () => unknown) => {
    return html\`
        <div style="padding: 1.5rem 2rem;">
          \${story()}
        </div>
      \`;
  }],
  parameters: {
    docs: {
      source: {
        transform: (_src: string, ctx: {
          args: Record<string, string | boolean | number>;
        }) => {
          const a = ctx.args;
          const attrs: string[] = [];
          if (a.alertType && a.alertType !== 'informational') attrs.push(\`alert-type="\${a.alertType}"\`);
          if (a.dismissible === false) attrs.push('.dismissible=\${false}');
          if (a.action) attrs.push('action');
          if (a.summary) attrs.push(\`summary="\${a.summary}"\`);
          if (a.message) attrs.push(\`message="\${a.message}"\`);
          if (a.action && a.actionText) attrs.push(\`action-text="\${a.actionText}"\`);
          if (a.action && a.actionHref) attrs.push(\`action-href="\${a.actionHref}"\`);
          if (a.density === 'compact') attrs.push('data-density="compact"');
          return \`<mms-inline-alert\\n  \${attrs.join('\\n  ')}\\n></mms-inline-alert>\`;
        },
        language: 'html'
      }
    },
    controls: {
      sort: 'none' // Preserve argTypes definition order
    }
  },
  render: (args: {
    alertType: InlineAlertType;
    dismissible: boolean;
    action: boolean;
    summary: string;
    message: string;
    actionText: string;
    actionHref: string;
    theme: string;
    density: string;
  }) => {
    return html\`
      <mms-inline-alert
        alert-type=\${args.alertType}
        ?dismissible=\${args.dismissible}
        ?action=\${args.action}
        summary=\${args.summary || nothing}
        message=\${args.message}
        action-text=\${args.actionText || nothing}
        action-href=\${args.actionHref || nothing}
        data-density=\${args.density === 'compact' ? 'compact' : nothing}
      ></mms-inline-alert>
    \`;
  }
}`,...S.parameters?.docs?.source}}},C=[`Overview`,`PlaygroundStory`]}));w();export{x as Overview,S as PlaygroundStory,C as __namedExportsOrder,b as default,w as n,y as t};