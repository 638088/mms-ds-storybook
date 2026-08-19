import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-CBo78ikN.js";var r,i,a,o;e((()=>{n(),r=`960px`,i={title:`Developer Guide/Installation`},a={name:`Installation`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${r}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Installation</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">Get the Maximus Design System installed in your project</p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           PREREQUISITES
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(239, 68, 68, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(239, 68, 68, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #ef4444; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">!</div>
          <h2 style="margin: 0; font-size: 1.25rem; font-weight: 700;">Before you start</h2>
        </div>
        
        <p style="margin: 0 0 1rem; font-size: 0.875rem;"><strong>1. Connect to Maximus VPN</strong> — JFrog Artifactory is internal-only and not accessible from public internet.</p>

        <p style="margin: 0 0 0.5rem; font-size: 0.875rem;"><strong>2. Clear any old @mms registry config</strong> — Run this command to remove stale entries:</p>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;"># Check for existing @mms config (if no output, you're clean)</span>
<span style="color: #569cd6;">grep</span> <span style="color: #ce9178;">"@mms"</span> ~/.npmrc

<span style="color: #6a9955;"># If any lines appear, remove them:</span>
<span style="color: #569cd6;">sed</span> -i <span style="color: #ce9178;">''</span> <span style="color: #ce9178;">'/@mms/d'</span> ~/.npmrc</code></pre>

        <div style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #991b1b;">
          <strong>⚠️ No auth token required.</strong> The registry allows anonymous read access. If npm prompts for credentials, an old token in <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">~/.npmrc</code> is causing the issue.
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           STEP 1: INSTALL
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(16, 185, 129, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #10b981; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">1</div>
          <h2 style="margin: 0; font-size: 1.25rem; font-weight: 700;">Install the package</h2>
        </div>
        
        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">Run this command from your project root. The <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">--registry</code> flag points npm to the Maximus JFrog Artifactory.</p>

        <div style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;">💻 Terminal</div>
        </div>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #569cd6;">npm</span> install @mms/design-system <span style="color: #ce9178;">\\</span>
  --registry=https://artifactory.mars.pcf-maximus.com/artifactory/api/npm/mms-ds-platform/</code></pre>

        <p style="margin: 0; font-size: 0.8125rem; opacity: 0.7;"><strong>Yarn users:</strong> <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">yarn add @mms/design-system --registry=...</code></p>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           STEP 2: PEER DEPENDENCY
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(59, 130, 246, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #3b82f6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">2</div>
          <h2 style="margin: 0; font-size: 1.25rem; font-weight: 700;">Install Lit (if not present)</h2>
        </div>
        
        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">Lit is a <strong>peer dependency</strong>. If your project doesn't already have it, install it:</p>

        <div style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;">💻 Terminal</div>
        </div>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #569cd6;">npm</span> install lit</code></pre>

        <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #1e3a8a;">
          <strong>💡 Why peer dependency?</strong> If multiple packages bundle their own Lit version, custom elements get registered multiple times, causing runtime errors. A single shared Lit instance prevents this.
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           STEP 3: IMPORT CSS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(168, 85, 247, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(168, 85, 247, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #a855f7; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">3</div>
          <h2 style="margin: 0; font-size: 1.25rem; font-weight: 700;">Import tokens & theme</h2>
        </div>
        
        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">Add these to your application's entry point (e.g., <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">main.ts</code>, <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">index.tsx</code>, <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">App.tsx</code>):</p>

        <div style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;">📁 main.ts or App.tsx</div>
        </div>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// Required: Structural tokens (spacing, typography, radius, etc.)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;

<span style="color: #6a9955;">// Required: Brand theme — choose ONE per project</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;

<span style="color: #6a9955;">// Optional: Dark mode support (import alongside light theme)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus-dark'</span>;</code></pre>

        <p style="margin: 0; font-size: 0.8125rem; opacity: 0.7;"><strong>Static HTML:</strong> Use <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">&lt;link rel="stylesheet" href="node_modules/@mms/design-system/dist/..."&gt;</code></p>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           STEP 4: ACTIVATE THEME
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(245, 158, 11, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(245, 158, 11, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #f59e0b; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">4</div>
          <h2 style="margin: 0; font-size: 1.25rem; font-weight: 700;">Activate the theme</h2>
        </div>
        
        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">Themes are activated via the <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">data-theme</code> attribute. Set it on your HTML root element:</p>

        <div style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;">📁 index.html</div>
        </div>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #808080;">&lt;!</span><span style="color: #569cd6;">DOCTYPE</span> <span style="color: #9cdcfe;">html</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">html</span> <span style="color: #9cdcfe;">lang</span>=<span style="color: #ce9178;">"en"</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span>
  <span style="color: #6a9955;">&lt;!-- ... --&gt;</span>
<span style="color: #808080;">&lt;/</span><span style="color: #4ec9b0;">html</span><span style="color: #808080;">&gt;</span></code></pre>

        <p style="margin: 0 0 0.5rem; font-size: 0.875rem; opacity: 0.85;">Or set it programmatically in JavaScript/React:</p>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// Set in your app entry point (main.tsx, App.tsx, etc.)</span>
document.<span style="color: #dcdcaa;">documentElement</span>.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'data-theme'</span>, <span style="color: #ce9178;">'maximus'</span>);</code></pre>

        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e;">
          <strong>⚠️ Required:</strong> Without <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">data-theme</code>, components will render without brand colors (they'll use fallback values). Always set this attribute.
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           AVAILABLE THEMES
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Available themes</h2>
      
      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">Themes provide brand-specific colors and typography. Each client engagement gets its own theme — import only what your project requires. The design system is built to scale: new client themes can be added without modifying core components.</p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style="text-align: left; padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Theme</th>
            <th style="text-align: left; padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Import Path</th>
            <th style="text-align: left; padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8125rem;">default</td>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.75rem;">/themes/default</td>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Neutral grayscale — use for local dev or as a starting point for new themes</td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8125rem;">maximus</td>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.75rem;">/themes/maximus</td>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Maximus corporate brand — internal tools, employee-facing apps</td>
          </tr>
          <tr>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8125rem;">va-gov</td>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.75rem;">/themes/va-gov</td>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);">VA.gov USWDS-aligned — federal veteran services engagements</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(128,128,128,0.04); border-radius: 8px; padding: 1rem; margin-bottom: 2rem; border: 1px solid rgba(128,128,128,0.1);">
        <p style="margin: 0 0 0.5rem; font-size: 0.8125rem; font-weight: 600;">Dark mode support</p>
        <p style="margin: 0; font-size: 0.8125rem; opacity: 0.85;">Each theme has a <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">-dark</code> variant (e.g., <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">/themes/maximus-dark</code>). Import both light and dark, then toggle with <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">data-mode="dark"</code> on your root element.</p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           VERIFY INSTALLATION
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Verify installation</h2>
      
      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">Confirm the package is installed correctly:</p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;"># Check installed version</span>
<span style="color: #569cd6;">npm</span> list @mms/design-system

<span style="color: #6a9955;"># Expected output:</span>
<span style="color: #d4d4d4;">your-project@1.0.0</span>
<span style="color: #d4d4d4;">└── @mms/design-system@0.9.0</span></code></pre>

      <div style="background: #dcfce7; border-left: 4px solid #22c55e; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #166534;">
        <strong>✅ You're ready!</strong> Continue to <strong>HTML Usage</strong> or <strong>React Usage</strong> for framework-specific integration steps.
      </div>

    </div>
  `},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Installation',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Installation</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">Get the Maximus Design System installed in your project</p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           PREREQUISITES
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(239, 68, 68, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(239, 68, 68, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #ef4444; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">!</div>
          <h2 style="margin: 0; font-size: 1.25rem; font-weight: 700;">Before you start</h2>
        </div>
        
        <p style="margin: 0 0 1rem; font-size: 0.875rem;"><strong>1. Connect to Maximus VPN</strong> — JFrog Artifactory is internal-only and not accessible from public internet.</p>

        <p style="margin: 0 0 0.5rem; font-size: 0.875rem;"><strong>2. Clear any old @mms registry config</strong> — Run this command to remove stale entries:</p>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;"># Check for existing @mms config (if no output, you're clean)</span>
<span style="color: #569cd6;">grep</span> <span style="color: #ce9178;">"@mms"</span> ~/.npmrc

<span style="color: #6a9955;"># If any lines appear, remove them:</span>
<span style="color: #569cd6;">sed</span> -i <span style="color: #ce9178;">''</span> <span style="color: #ce9178;">'/@mms/d'</span> ~/.npmrc</code></pre>

        <div style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #991b1b;">
          <strong>⚠️ No auth token required.</strong> The registry allows anonymous read access. If npm prompts for credentials, an old token in <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">~/.npmrc</code> is causing the issue.
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           STEP 1: INSTALL
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(16, 185, 129, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #10b981; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">1</div>
          <h2 style="margin: 0; font-size: 1.25rem; font-weight: 700;">Install the package</h2>
        </div>
        
        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">Run this command from your project root. The <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">--registry</code> flag points npm to the Maximus JFrog Artifactory.</p>

        <div style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;">💻 Terminal</div>
        </div>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #569cd6;">npm</span> install @mms/design-system <span style="color: #ce9178;">\\\\</span>
  --registry=https://artifactory.mars.pcf-maximus.com/artifactory/api/npm/mms-ds-platform/</code></pre>

        <p style="margin: 0; font-size: 0.8125rem; opacity: 0.7;"><strong>Yarn users:</strong> <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">yarn add @mms/design-system --registry=...</code></p>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           STEP 2: PEER DEPENDENCY
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(59, 130, 246, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #3b82f6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">2</div>
          <h2 style="margin: 0; font-size: 1.25rem; font-weight: 700;">Install Lit (if not present)</h2>
        </div>
        
        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">Lit is a <strong>peer dependency</strong>. If your project doesn't already have it, install it:</p>

        <div style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;">💻 Terminal</div>
        </div>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #569cd6;">npm</span> install lit</code></pre>

        <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #1e3a8a;">
          <strong>💡 Why peer dependency?</strong> If multiple packages bundle their own Lit version, custom elements get registered multiple times, causing runtime errors. A single shared Lit instance prevents this.
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           STEP 3: IMPORT CSS
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(168, 85, 247, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(168, 85, 247, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #a855f7; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">3</div>
          <h2 style="margin: 0; font-size: 1.25rem; font-weight: 700;">Import tokens & theme</h2>
        </div>
        
        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">Add these to your application's entry point (e.g., <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">main.ts</code>, <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">index.tsx</code>, <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">App.tsx</code>):</p>

        <div style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;">📁 main.ts or App.tsx</div>
        </div>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// Required: Structural tokens (spacing, typography, radius, etc.)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;

<span style="color: #6a9955;">// Required: Brand theme — choose ONE per project</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;

<span style="color: #6a9955;">// Optional: Dark mode support (import alongside light theme)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus-dark'</span>;</code></pre>

        <p style="margin: 0; font-size: 0.8125rem; opacity: 0.7;"><strong>Static HTML:</strong> Use <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">&lt;link rel="stylesheet" href="node_modules/@mms/design-system/dist/..."&gt;</code></p>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           STEP 4: ACTIVATE THEME
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(245, 158, 11, 0.02)); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid rgba(245, 158, 11, 0.15);">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 32px; height: 32px; background: #f59e0b; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem;">4</div>
          <h2 style="margin: 0; font-size: 1.25rem; font-weight: 700;">Activate the theme</h2>
        </div>
        
        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">Themes are activated via the <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">data-theme</code> attribute. Set it on your HTML root element:</p>

        <div style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;">📁 index.html</div>
        </div>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #808080;">&lt;!</span><span style="color: #569cd6;">DOCTYPE</span> <span style="color: #9cdcfe;">html</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">html</span> <span style="color: #9cdcfe;">lang</span>=<span style="color: #ce9178;">"en"</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span>
  <span style="color: #6a9955;">&lt;!-- ... --&gt;</span>
<span style="color: #808080;">&lt;/</span><span style="color: #4ec9b0;">html</span><span style="color: #808080;">&gt;</span></code></pre>

        <p style="margin: 0 0 0.5rem; font-size: 0.875rem; opacity: 0.85;">Or set it programmatically in JavaScript/React:</p>

        <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;">// Set in your app entry point (main.tsx, App.tsx, etc.)</span>
document.<span style="color: #dcdcaa;">documentElement</span>.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'data-theme'</span>, <span style="color: #ce9178;">'maximus'</span>);</code></pre>

        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e;">
          <strong>⚠️ Required:</strong> Without <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">data-theme</code>, components will render without brand colors (they'll use fallback values). Always set this attribute.
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           AVAILABLE THEMES
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Available themes</h2>
      
      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">Themes provide brand-specific colors and typography. Each client engagement gets its own theme — import only what your project requires. The design system is built to scale: new client themes can be added without modifying core components.</p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style="text-align: left; padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Theme</th>
            <th style="text-align: left; padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Import Path</th>
            <th style="text-align: left; padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8125rem;">default</td>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.75rem;">/themes/default</td>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Neutral grayscale — use for local dev or as a starting point for new themes</td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8125rem;">maximus</td>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.75rem;">/themes/maximus</td>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Maximus corporate brand — internal tools, employee-facing apps</td>
          </tr>
          <tr>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8125rem;">va-gov</td>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.75rem;">/themes/va-gov</td>
            <td style="padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);">VA.gov USWDS-aligned — federal veteran services engagements</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(128,128,128,0.04); border-radius: 8px; padding: 1rem; margin-bottom: 2rem; border: 1px solid rgba(128,128,128,0.1);">
        <p style="margin: 0 0 0.5rem; font-size: 0.8125rem; font-weight: 600;">Dark mode support</p>
        <p style="margin: 0; font-size: 0.8125rem; opacity: 0.85;">Each theme has a <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">-dark</code> variant (e.g., <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">/themes/maximus-dark</code>). Import both light and dark, then toggle with <code style="background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px;">data-mode="dark"</code> on your root element.</p>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <!-- ═══════════════════════════════════════════════════════════════════════════════
           VERIFY INSTALLATION
           ═══════════════════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Verify installation</h2>
      
      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">Confirm the package is installed correctly:</p>

      <pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin-bottom: 1.5rem; border: 1px solid rgba(128,128,128,0.2);"><code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;"><span style="color: #6a9955;"># Check installed version</span>
<span style="color: #569cd6;">npm</span> list @mms/design-system

<span style="color: #6a9955;"># Expected output:</span>
<span style="color: #d4d4d4;">your-project@1.0.0</span>
<span style="color: #d4d4d4;">└── @mms/design-system@0.9.0</span></code></pre>

      <div style="background: #dcfce7; border-left: 4px solid #22c55e; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #166534;">
        <strong>✅ You're ready!</strong> Continue to <strong>HTML Usage</strong> or <strong>React Usage</strong> for framework-specific integration steps.
      </div>

    </div>
  \`
}`,...a.parameters?.docs?.source}}},o=[`Installation`]}))();export{a as Installation,o as __namedExportsOrder,i as default};