import{i as e}from"./preload-helper-xPQekRTU.js";import{K as t,V as n}from"./iframe-Cy4I9pO6.js";var r,i,a;e((()=>{n(),r={title:`Introduction/Architecture`},i={name:`Architecture`,render:()=>t`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 860px; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Platform Architecture</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">Web component core · headless token model · multi-platform distribution</p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <h2 style="margin: 0 0 1rem; font-size: 1.25rem;">Architecture</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style="text-align: left; padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Capability</th>
            <th style="text-align: left; padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Approach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-weight: 600;">Lit Web Components</td>
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Framework-agnostic core. One implementation reaches React, Salesforce, AEM, Drupal, and ServiceNow.</td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-weight: 600;">Headless Token Model</td>
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Structural tokens fixed. Each engagement gets a standalone brand sheet — not overrides.</td>
          </tr>
          <tr>
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-weight: 600;">WCAG Compliant</td>
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Section 508 for federal engagements; ADA Title II for state engagements. Enforced structurally via token contracts.</td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-weight: 600;">Multi-Platform Distribution</td>
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">@mms/components-react, @mms/aem-clientlib, @mms/drupal-module, @mms/headless-css</td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <h2 style="margin: 0 0 0.5rem; font-size: 1.25rem;">Token Architecture</h2>
      <p style="margin: 0 0 1.25rem; font-size: 0.875rem; opacity: 0.85;">Two layers with a strict separation of concerns. Layer 1 is fixed across all engagements. Layer 2 is a standalone sheet authored per client — not overrides on top of Layer 1.</p>

      <div style="display: flex; gap: 0; margin-bottom: 1.25rem; border-radius: 8px; overflow: hidden; border: 1px solid rgba(128,128,128,0.2);">

        <div style="background: #f0fdf4; padding: 14px 18px; flex: 1.2;">
          <div style="font-size: 12px; font-weight: 700; color: #1a1a2e; margin-bottom: 6px;">Layer 1 — Structural + Defaults</div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Maximus-owned · complete working system</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 4px; margin-bottom: 4px;">Layout &amp; Motion</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• spacing scale</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• radius scale</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• breakpoints</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• grid system</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• elevation scale</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• motion (duration, easing)</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 10px; margin-bottom: 4px;">Neutral Colors</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• black / white</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• grayscale</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• surface colors</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 10px; margin-bottom: 4px;">Utility Colors</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• success</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• error</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• warning</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• focus ring</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 10px; margin-bottom: 4px;">Default Type System</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• type scale structure</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• default font family</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• font weight scale</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 10px; margin-bottom: 4px;">Default Color Theme</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• primary + secondary + tertiary (with scales)</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• renderable without any brand sheet applied</div>

          <div style="font-size: 12px; color: #6b7280; margin-top: 10px; font-style: italic; line-height: 1.5;">All color tokens — neutral, utility, and default theme — must meet WCAG 2.1 AA contrast requirements in their intended usage contexts. Values TBD.</div>
        </div>

        <div style="background: #eff6ff; padding: 14px 18px; flex: 1;">
          <div style="font-size: 12px; font-weight: 700; color: #1a1a2e; margin-bottom: 6px;">Layer 2 — Brand token sheets</div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Client-owned · standalone sheet per engagement</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 4px; margin-bottom: 4px;">Color</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• color.brand.primary (with scale)</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• color.brand.secondary (with scale)</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• color.brand.tertiary (with scale)</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 10px; margin-bottom: 4px;">Typography</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• font.family.base</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• font.family.heading</div>

          <div style="font-size: 12px; color: #6b7280; margin-top: 8px; font-style: italic; line-height: 1.5;">Font families change per engagement — the type system structure (headline-1, headline-2, body-sm, body-rg, body-lg) stays fixed in Layer 1. A client swap changes the face; the hierarchy stays intact.</div>
        </div>

        <div style="background: #fafafa; padding: 14px 18px; flex: 0.8;">
          <div style="font-size: 12px; font-weight: 700; color: #1a1a2e; margin-bottom: 6px;">Theme packages</div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">One per engagement</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">@mms/tokens-structural</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">@mms/theme-default</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">@mms/theme-virginia</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">@mms/theme-federal</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">...</div>
        </div>

      </div>

      <div style="border-left: 4px solid #7c3aed; background: #f5f3ff; border-radius: 0 6px 6px 0; padding: 12px 16px; margin-bottom: 2rem; font-size: 0.875rem; color: #3b0764; line-height: 1.65;">
        <strong>Accessibility enforcement via token contracts.</strong> All color pairings (text on surface, text on primary, etc.) must meet WCAG 2.1 AA contrast requirements: 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold). Utility colors (error, success, warning) and focus ring are structural tokens — they cannot be themed away by any client engagement.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <h2 style="margin: 0 0 1rem; font-size: 1.25rem;">Multi-Framework Distribution</h2>

      <div style="background: #f8f9fc; border-radius: 12px; padding: 28px 24px 20px; margin-bottom: 2rem; border: 1px solid #e5e7eb;">

        <div style="text-align: center; margin-bottom: 14px;">
          <span style="font-size: 14px; font-weight: 700; color: #1a1a2e;">How the DS Platform reaches every delivery target</span>
        </div>

        <div style="display: flex; gap: 16px; justify-content: center; margin-bottom: 20px; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 5px;"><div style="width: 12px; height: 12px; background: #fff7ed; border: 2px solid #f59e0b; border-radius: 3px;"></div><span style="font-size: 12px; color: #6b7280;">Inputs</span></div>
          <div style="display: flex; align-items: center; gap: 5px;"><div style="width: 12px; height: 12px; background: #f5f3ff; border: 2px solid #7c3aed; border-radius: 3px;"></div><span style="font-size: 12px; color: #6b7280;">DS foundation</span></div>
          <div style="display: flex; align-items: center; gap: 5px;"><div style="width: 12px; height: 12px; background: #eff6ff; border: 2px solid #3b82f6; border-radius: 3px;"></div><span style="font-size: 12px; color: #6b7280;">DS repos</span></div>
          <div style="display: flex; align-items: center; gap: 5px;"><div style="width: 12px; height: 12px; background: #f0fdf4; border: 2px solid #22c55e; border-radius: 3px;"></div><span style="font-size: 12px; color: #6b7280;">Delivery teams</span></div>
        </div>

        <div style="display: flex; align-items: stretch; gap: 0;">

          <div style="display: flex; flex-direction: column; gap: 6px; min-width: 110px; justify-content: center;">
            <div style="background: #fff7ed; border: 2px solid #f59e0b; border-radius: 8px; padding: 10px 14px;">
              <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 1px;">Client brand guide</div>
              <div style="font-size: 12px; color: #6b7280;">Per-engagement identity</div>
            </div>
            <div style="background: #fff7ed; border: 2px solid #f59e0b; border-radius: 8px; padding: 10px 14px;">
              <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 1px;">Team input</div>
              <div style="font-size: 12px; color: #6b7280;">UX feedback</div>
            </div>
            <div style="background: #fff7ed; border: 2px solid #f59e0b; border-radius: 8px; padding: 10px 14px;">
              <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 1px;">Tech guide</div>
              <div style="font-size: 12px; color: #6b7280;">Tech feedback</div>
            </div>
          </div>

          <div style="color: #9ca3af; font-size: 16px; display: flex; align-items: center; justify-content: center; padding: 0 6px; flex-shrink: 0;">→</div>

          <div style="flex: 1.4; display: flex; flex-direction: column;">
            <div style="border: 3px solid #7c3aed; border-radius: 10px; padding: 18px 14px 14px; position: relative; background: #faf5ff; display: flex; flex-direction: column; margin-bottom: 0;">
              <div style="position: absolute; top: -12px; left: 16px; background: #7c3aed; color: #fff; font-size: 12px; font-weight: 700; padding: 2px 10px; border-radius: 10px; letter-spacing: 0.5px;">DS PLATFORM</div>
              <div style="background: #ede9fe; border: 1.5px solid #c4b5fd; border-radius: 8px; padding: 8px 6px; margin-top: 10px; display: flex; flex-direction: column; gap: 4px;">
                <div style="background: #f5f3ff; border: 1.5px solid #c4b5fd; border-radius: 6px; padding: 6px 8px;">
                  <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 1px;">Structural tokens</div>
                  <div style="font-size: 12px; color: #6b7280;">Shared foundation: spacing, radius, motion, a11y</div>
                </div>
                <div style="background: #f5f3ff; border: 1.5px solid #c4b5fd; border-radius: 6px; padding: 6px 8px;">
                  <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 1px;">Brand tokens</div>
                  <div style="font-size: 12px; color: #6b7280;">Standalone sheets, one per engagement</div>
                </div>
                <div style="background: #f5f3ff; border: 1.5px solid #c4b5fd; border-radius: 6px; padding: 6px 8px;">
                  <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 1px;">Theme packages</div>
                  <div style="font-size: 12px; color: #6b7280;">Assembled bundles per engagement</div>
                </div>
              </div>
              <div style="text-align: center; font-size: 14px; color: #9ca3af; line-height: 18px; margin: 6px 0;">↓</div>
              <div style="background: #ede9fe; border: 2px solid #7c3aed; border-radius: 8px; padding: 10px 14px;">
                <div style="font-size: 13px; font-weight: 700; color: #5b21b6;">Framework-agnostic Web Components</div>
                <div style="font-size: 12px; color: #7c3aed; margin-top: 2px;">Built on the token system · source of truth for all distribution</div>
              </div>
            </div>
            <div style="text-align: center; font-size: 14px; color: #9ca3af; line-height: 18px; margin: 6px 0;">↓</div>
            <div style="border: 1.5px solid #e5e7eb; border-radius: 8px; padding: 8px 6px; background: #f9fafb;">
              <div style="font-size: 12px; font-weight: 700; color: #6b7280; margin-bottom: 6px;">Published surfaces</div>
              <div style="display: flex; gap: 6px;">
                <div style="background: #fff; border: 1.5px solid #e5e7eb; border-radius: 6px; padding: 6px 8px; flex: 1;">
                  <div style="font-size: 12px; font-weight: 600; color: #374151;">DS Docs</div>
                  <div style="font-size: 12px; color: #6b7280;">Storybook</div>
                </div>
                <div style="background: #fff; border: 1.5px solid #e5e7eb; border-radius: 6px; padding: 6px 8px; flex: 1;">
                  <div style="font-size: 12px; font-weight: 600; color: #374151;">Figma Library</div>
                  <div style="font-size: 12px; color: #6b7280;">Design kit</div>
                </div>
              </div>
            </div>
          </div>

          <div style="color: #9ca3af; font-size: 16px; display: flex; align-items: center; justify-content: center; padding: 0 6px; flex-shrink: 0;">→</div>

          <div style="display: flex; flex-direction: column; gap: 4px; min-width: 130px; justify-content: center;">
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">React UI Lib</div><div style="font-size: 12px; color: #6b7280;">Dev kit</div></div>
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">Salesforce</div><div style="font-size: 12px; color: #6b7280;">TBD</div></div>
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">ServiceNow</div><div style="font-size: 12px; color: #6b7280;">Widget integration</div></div>
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">AEM Clientlib</div><div style="font-size: 12px; color: #6b7280;">Author kit</div></div>
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">Drupal Module</div><div style="font-size: 12px; color: #6b7280;">Theme integration</div></div>
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">Headless CSS</div><div style="font-size: 12px; color: #6b7280;">Stylesheet + icons</div></div>
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">iOS / Android</div><div style="font-size: 12px; color: #6b7280;">Tokens only (TBD)</div></div>
          </div>

          <div style="color: #9ca3af; font-size: 16px; display: flex; align-items: center; justify-content: center; padding: 0 6px; flex-shrink: 0;">→</div>

          <div style="display: flex; flex-direction: column; gap: 6px; min-width: 130px; justify-content: center;">
            <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 10px 14px;"><div style="font-size: 12px; font-weight: 600; color: #166534;">DXHub</div><div style="font-size: 12px; color: #6b7280;">Enrollment sites</div></div>
            <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 10px 14px;"><div style="font-size: 12px; font-weight: 600; color: #166534;">Enterprise apps</div><div style="font-size: 12px; color: #6b7280;">Salesforce, ServiceNow</div></div>
            <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 10px 14px;"><div style="font-size: 12px; font-weight: 600; color: #166534;">Public web</div><div style="font-size: 12px; color: #6b7280;">AEM, Drupal sites</div></div>
            <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 10px 14px;"><div style="font-size: 12px; font-weight: 600; color: #166534;">Mobile apps</div><div style="font-size: 12px; color: #6b7280;">Tokens only (Obj-C)</div></div>
          </div>

        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <h2 style="margin: 0 0 1rem; font-size: 1.25rem;">Distribution Packages</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style="text-align: left; padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Package</th>
            <th style="text-align: left; padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Consumer</th>
            <th style="text-align: left; padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Integration model</th>
            <th style="text-align: left; padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/components-react</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">DXHub and React apps</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Generated React binding — typed props, React events, ref forwarding. Web component layer invisible to consumers.</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="background: #fef3c7; color: #92400e; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">In Progress</span></td></tr>
          <tr style="background: rgba(128,128,128,0.03);"><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/salesforce</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Salesforce</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">—</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="color: #b0b8c1; font-size: 0.75rem; font-weight: 400;">To Be Determined</span></td></tr>
          <tr><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/aem-clientlib</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Adobe Experience Manager</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Web components registered as custom elements in AEM page templates via a client library package.</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="background: rgba(128,128,128,0.1); color: inherit; opacity: 0.7; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Future State</span></td></tr>
          <tr style="background: rgba(128,128,128,0.03);"><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/drupal-module</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Drupal</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Web components consumed via Drupal module with CSS custom property theming.</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="background: rgba(128,128,128,0.1); color: inherit; opacity: 0.7; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Future State</span></td></tr>
          <tr><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/headless-css</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Any platform without web component support</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Stylesheet and icon set only — token-backed CSS classes for platforms that cannot consume web components.</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="background: rgba(128,128,128,0.1); color: inherit; opacity: 0.7; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Future State</span></td></tr>
          <tr style="background: rgba(128,128,128,0.03);"><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/tokens-structural</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">All web platforms</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">CSS custom properties — the shared structural foundation for spacing, radius, motion, and accessibility.</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="background: #fef3c7; color: #92400e; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">In Progress</span></td></tr>
          <tr><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/ios</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">iOS</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">—</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="color: #b0b8c1; font-size: 0.75rem; font-weight: 400;">To Be Determined</span></td></tr>
          <tr style="background: rgba(128,128,128,0.03);"><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/android</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Android</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">—</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="color: #b0b8c1; font-size: 0.75rem; font-weight: 400;">To Be Determined</span></td></tr>
          <tr><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/theme-default</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Dev / demo fallback</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Brand token sheet — default visual identity for development and demos before a client engagement theme is applied.</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="background: #fef3c7; color: #92400e; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">In Progress</span></td></tr>
        </tbody>
      </table>

    </div>
  `},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Architecture',
  render: () => html\`
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 860px; padding: 2rem; line-height: 1.6; color: inherit;">

      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Platform Architecture</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">Web component core · headless token model · multi-platform distribution</p>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <h2 style="margin: 0 0 1rem; font-size: 1.25rem;">Architecture</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style="text-align: left; padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Capability</th>
            <th style="text-align: left; padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Approach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-weight: 600;">Lit Web Components</td>
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Framework-agnostic core. One implementation reaches React, Salesforce, AEM, Drupal, and ServiceNow.</td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-weight: 600;">Headless Token Model</td>
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Structural tokens fixed. Each engagement gets a standalone brand sheet — not overrides.</td>
          </tr>
          <tr>
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-weight: 600;">WCAG Compliant</td>
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Section 508 for federal engagements; ADA Title II for state engagements. Enforced structurally via token contracts.</td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-weight: 600;">Multi-Platform Distribution</td>
            <td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">@mms/components-react, @mms/aem-clientlib, @mms/drupal-module, @mms/headless-css</td>
          </tr>
        </tbody>
      </table>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <h2 style="margin: 0 0 0.5rem; font-size: 1.25rem;">Token Architecture</h2>
      <p style="margin: 0 0 1.25rem; font-size: 0.875rem; opacity: 0.85;">Two layers with a strict separation of concerns. Layer 1 is fixed across all engagements. Layer 2 is a standalone sheet authored per client — not overrides on top of Layer 1.</p>

      <div style="display: flex; gap: 0; margin-bottom: 1.25rem; border-radius: 8px; overflow: hidden; border: 1px solid rgba(128,128,128,0.2);">

        <div style="background: #f0fdf4; padding: 14px 18px; flex: 1.2;">
          <div style="font-size: 12px; font-weight: 700; color: #1a1a2e; margin-bottom: 6px;">Layer 1 — Structural + Defaults</div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Maximus-owned · complete working system</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 4px; margin-bottom: 4px;">Layout &amp; Motion</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• spacing scale</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• radius scale</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• breakpoints</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• grid system</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• elevation scale</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• motion (duration, easing)</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 10px; margin-bottom: 4px;">Neutral Colors</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• black / white</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• grayscale</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• surface colors</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 10px; margin-bottom: 4px;">Utility Colors</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• success</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• error</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• warning</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• focus ring</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 10px; margin-bottom: 4px;">Default Type System</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• type scale structure</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• default font family</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• font weight scale</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 10px; margin-bottom: 4px;">Default Color Theme</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• primary + secondary + tertiary (with scales)</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• renderable without any brand sheet applied</div>

          <div style="font-size: 12px; color: #6b7280; margin-top: 10px; font-style: italic; line-height: 1.5;">All color tokens — neutral, utility, and default theme — must meet WCAG 2.1 AA contrast requirements in their intended usage contexts. Values TBD.</div>
        </div>

        <div style="background: #eff6ff; padding: 14px 18px; flex: 1;">
          <div style="font-size: 12px; font-weight: 700; color: #1a1a2e; margin-bottom: 6px;">Layer 2 — Brand token sheets</div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">Client-owned · standalone sheet per engagement</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 4px; margin-bottom: 4px;">Color</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• color.brand.primary (with scale)</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• color.brand.secondary (with scale)</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• color.brand.tertiary (with scale)</div>

          <div style="font-size: 12px; font-weight: 600; color: #1a1a2e; margin-top: 10px; margin-bottom: 4px;">Typography</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• font.family.base</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">• font.family.heading</div>

          <div style="font-size: 12px; color: #6b7280; margin-top: 8px; font-style: italic; line-height: 1.5;">Font families change per engagement — the type system structure (headline-1, headline-2, body-sm, body-rg, body-lg) stays fixed in Layer 1. A client swap changes the face; the hierarchy stays intact.</div>
        </div>

        <div style="background: #fafafa; padding: 14px 18px; flex: 0.8;">
          <div style="font-size: 12px; font-weight: 700; color: #1a1a2e; margin-bottom: 6px;">Theme packages</div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">One per engagement</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">@mms/tokens-structural</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">@mms/theme-default</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">@mms/theme-virginia</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">@mms/theme-federal</div>
          <div style="font-size: 12px; font-family: monospace; color: #374151; margin-bottom: 2px;">...</div>
        </div>

      </div>

      <div style="border-left: 4px solid #7c3aed; background: #f5f3ff; border-radius: 0 6px 6px 0; padding: 12px 16px; margin-bottom: 2rem; font-size: 0.875rem; color: #3b0764; line-height: 1.65;">
        <strong>Accessibility enforcement via token contracts.</strong> All color pairings (text on surface, text on primary, etc.) must meet WCAG 2.1 AA contrast requirements: 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold). Utility colors (error, success, warning) and focus ring are structural tokens — they cannot be themed away by any client engagement.
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <h2 style="margin: 0 0 1rem; font-size: 1.25rem;">Multi-Framework Distribution</h2>

      <div style="background: #f8f9fc; border-radius: 12px; padding: 28px 24px 20px; margin-bottom: 2rem; border: 1px solid #e5e7eb;">

        <div style="text-align: center; margin-bottom: 14px;">
          <span style="font-size: 14px; font-weight: 700; color: #1a1a2e;">How the DS Platform reaches every delivery target</span>
        </div>

        <div style="display: flex; gap: 16px; justify-content: center; margin-bottom: 20px; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 5px;"><div style="width: 12px; height: 12px; background: #fff7ed; border: 2px solid #f59e0b; border-radius: 3px;"></div><span style="font-size: 12px; color: #6b7280;">Inputs</span></div>
          <div style="display: flex; align-items: center; gap: 5px;"><div style="width: 12px; height: 12px; background: #f5f3ff; border: 2px solid #7c3aed; border-radius: 3px;"></div><span style="font-size: 12px; color: #6b7280;">DS foundation</span></div>
          <div style="display: flex; align-items: center; gap: 5px;"><div style="width: 12px; height: 12px; background: #eff6ff; border: 2px solid #3b82f6; border-radius: 3px;"></div><span style="font-size: 12px; color: #6b7280;">DS repos</span></div>
          <div style="display: flex; align-items: center; gap: 5px;"><div style="width: 12px; height: 12px; background: #f0fdf4; border: 2px solid #22c55e; border-radius: 3px;"></div><span style="font-size: 12px; color: #6b7280;">Delivery teams</span></div>
        </div>

        <div style="display: flex; align-items: stretch; gap: 0;">

          <div style="display: flex; flex-direction: column; gap: 6px; min-width: 110px; justify-content: center;">
            <div style="background: #fff7ed; border: 2px solid #f59e0b; border-radius: 8px; padding: 10px 14px;">
              <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 1px;">Client brand guide</div>
              <div style="font-size: 12px; color: #6b7280;">Per-engagement identity</div>
            </div>
            <div style="background: #fff7ed; border: 2px solid #f59e0b; border-radius: 8px; padding: 10px 14px;">
              <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 1px;">Team input</div>
              <div style="font-size: 12px; color: #6b7280;">UX feedback</div>
            </div>
            <div style="background: #fff7ed; border: 2px solid #f59e0b; border-radius: 8px; padding: 10px 14px;">
              <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 1px;">Tech guide</div>
              <div style="font-size: 12px; color: #6b7280;">Tech feedback</div>
            </div>
          </div>

          <div style="color: #9ca3af; font-size: 16px; display: flex; align-items: center; justify-content: center; padding: 0 6px; flex-shrink: 0;">→</div>

          <div style="flex: 1.4; display: flex; flex-direction: column;">
            <div style="border: 3px solid #7c3aed; border-radius: 10px; padding: 18px 14px 14px; position: relative; background: #faf5ff; display: flex; flex-direction: column; margin-bottom: 0;">
              <div style="position: absolute; top: -12px; left: 16px; background: #7c3aed; color: #fff; font-size: 12px; font-weight: 700; padding: 2px 10px; border-radius: 10px; letter-spacing: 0.5px;">DS PLATFORM</div>
              <div style="background: #ede9fe; border: 1.5px solid #c4b5fd; border-radius: 8px; padding: 8px 6px; margin-top: 10px; display: flex; flex-direction: column; gap: 4px;">
                <div style="background: #f5f3ff; border: 1.5px solid #c4b5fd; border-radius: 6px; padding: 6px 8px;">
                  <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 1px;">Structural tokens</div>
                  <div style="font-size: 12px; color: #6b7280;">Shared foundation: spacing, radius, motion, a11y</div>
                </div>
                <div style="background: #f5f3ff; border: 1.5px solid #c4b5fd; border-radius: 6px; padding: 6px 8px;">
                  <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 1px;">Brand tokens</div>
                  <div style="font-size: 12px; color: #6b7280;">Standalone sheets, one per engagement</div>
                </div>
                <div style="background: #f5f3ff; border: 1.5px solid #c4b5fd; border-radius: 6px; padding: 6px 8px;">
                  <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 1px;">Theme packages</div>
                  <div style="font-size: 12px; color: #6b7280;">Assembled bundles per engagement</div>
                </div>
              </div>
              <div style="text-align: center; font-size: 14px; color: #9ca3af; line-height: 18px; margin: 6px 0;">↓</div>
              <div style="background: #ede9fe; border: 2px solid #7c3aed; border-radius: 8px; padding: 10px 14px;">
                <div style="font-size: 13px; font-weight: 700; color: #5b21b6;">Framework-agnostic Web Components</div>
                <div style="font-size: 12px; color: #7c3aed; margin-top: 2px;">Built on the token system · source of truth for all distribution</div>
              </div>
            </div>
            <div style="text-align: center; font-size: 14px; color: #9ca3af; line-height: 18px; margin: 6px 0;">↓</div>
            <div style="border: 1.5px solid #e5e7eb; border-radius: 8px; padding: 8px 6px; background: #f9fafb;">
              <div style="font-size: 12px; font-weight: 700; color: #6b7280; margin-bottom: 6px;">Published surfaces</div>
              <div style="display: flex; gap: 6px;">
                <div style="background: #fff; border: 1.5px solid #e5e7eb; border-radius: 6px; padding: 6px 8px; flex: 1;">
                  <div style="font-size: 12px; font-weight: 600; color: #374151;">DS Docs</div>
                  <div style="font-size: 12px; color: #6b7280;">Storybook</div>
                </div>
                <div style="background: #fff; border: 1.5px solid #e5e7eb; border-radius: 6px; padding: 6px 8px; flex: 1;">
                  <div style="font-size: 12px; font-weight: 600; color: #374151;">Figma Library</div>
                  <div style="font-size: 12px; color: #6b7280;">Design kit</div>
                </div>
              </div>
            </div>
          </div>

          <div style="color: #9ca3af; font-size: 16px; display: flex; align-items: center; justify-content: center; padding: 0 6px; flex-shrink: 0;">→</div>

          <div style="display: flex; flex-direction: column; gap: 4px; min-width: 130px; justify-content: center;">
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">React UI Lib</div><div style="font-size: 12px; color: #6b7280;">Dev kit</div></div>
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">Salesforce</div><div style="font-size: 12px; color: #6b7280;">TBD</div></div>
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">ServiceNow</div><div style="font-size: 12px; color: #6b7280;">Widget integration</div></div>
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">AEM Clientlib</div><div style="font-size: 12px; color: #6b7280;">Author kit</div></div>
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">Drupal Module</div><div style="font-size: 12px; color: #6b7280;">Theme integration</div></div>
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">Headless CSS</div><div style="font-size: 12px; color: #6b7280;">Stylesheet + icons</div></div>
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 6px; padding: 5px 10px;"><div style="font-size: 12px; font-weight: 600; color: #1e40af;">iOS / Android</div><div style="font-size: 12px; color: #6b7280;">Tokens only (TBD)</div></div>
          </div>

          <div style="color: #9ca3af; font-size: 16px; display: flex; align-items: center; justify-content: center; padding: 0 6px; flex-shrink: 0;">→</div>

          <div style="display: flex; flex-direction: column; gap: 6px; min-width: 130px; justify-content: center;">
            <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 10px 14px;"><div style="font-size: 12px; font-weight: 600; color: #166534;">DXHub</div><div style="font-size: 12px; color: #6b7280;">Enrollment sites</div></div>
            <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 10px 14px;"><div style="font-size: 12px; font-weight: 600; color: #166534;">Enterprise apps</div><div style="font-size: 12px; color: #6b7280;">Salesforce, ServiceNow</div></div>
            <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 10px 14px;"><div style="font-size: 12px; font-weight: 600; color: #166534;">Public web</div><div style="font-size: 12px; color: #6b7280;">AEM, Drupal sites</div></div>
            <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 10px 14px;"><div style="font-size: 12px; font-weight: 600; color: #166534;">Mobile apps</div><div style="font-size: 12px; color: #6b7280;">Tokens only (Obj-C)</div></div>
          </div>

        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;" />

      <h2 style="margin: 0 0 1rem; font-size: 1.25rem;">Distribution Packages</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style="text-align: left; padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Package</th>
            <th style="text-align: left; padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Consumer</th>
            <th style="text-align: left; padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Integration model</th>
            <th style="text-align: left; padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/components-react</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">DXHub and React apps</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Generated React binding — typed props, React events, ref forwarding. Web component layer invisible to consumers.</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="background: #fef3c7; color: #92400e; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">In Progress</span></td></tr>
          <tr style="background: rgba(128,128,128,0.03);"><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/salesforce</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Salesforce</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">—</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="color: #b0b8c1; font-size: 0.75rem; font-weight: 400;">To Be Determined</span></td></tr>
          <tr><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/aem-clientlib</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Adobe Experience Manager</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Web components registered as custom elements in AEM page templates via a client library package.</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="background: rgba(128,128,128,0.1); color: inherit; opacity: 0.7; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Future State</span></td></tr>
          <tr style="background: rgba(128,128,128,0.03);"><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/drupal-module</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Drupal</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Web components consumed via Drupal module with CSS custom property theming.</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="background: rgba(128,128,128,0.1); color: inherit; opacity: 0.7; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Future State</span></td></tr>
          <tr><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/headless-css</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Any platform without web component support</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Stylesheet and icon set only — token-backed CSS classes for platforms that cannot consume web components.</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="background: rgba(128,128,128,0.1); color: inherit; opacity: 0.7; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Future State</span></td></tr>
          <tr style="background: rgba(128,128,128,0.03);"><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/tokens-structural</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">All web platforms</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">CSS custom properties — the shared structural foundation for spacing, radius, motion, and accessibility.</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="background: #fef3c7; color: #92400e; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">In Progress</span></td></tr>
          <tr><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/ios</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">iOS</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">—</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="color: #b0b8c1; font-size: 0.75rem; font-weight: 400;">To Be Determined</span></td></tr>
          <tr style="background: rgba(128,128,128,0.03);"><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/android</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Android</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">—</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="color: #b0b8c1; font-size: 0.75rem; font-weight: 400;">To Be Determined</span></td></tr>
          <tr><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2); font-family: monospace; font-size: 0.8rem;">@mms/theme-default</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Dev / demo fallback</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);">Brand token sheet — default visual identity for development and demos before a client engagement theme is applied.</td><td style="padding: 0.625rem 0.75rem; border: 1px solid rgba(128,128,128,0.2);"><span style="background: #fef3c7; color: #92400e; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">In Progress</span></td></tr>
        </tbody>
      </table>

    </div>
  \`
}`,...i.parameters?.docs?.source}}},a=[`Architecture`]}))();export{i as Architecture,a as __namedExportsOrder,r as default};