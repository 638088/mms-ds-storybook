import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-CBo78ikN.js";import{n as r,t as i}from"./package-Chn7-NLK.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{n(),i(),a=`960px`,o=r.version,s=`https://artifactory.mars.pcf-maximus.com/artifactory/api/npm/mms-ds-platform/`,c=e=>`background: linear-gradient(135deg, ${e}14, ${e}05); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid ${e}26;`,l=e=>`width: 32px; height: 32px; background: ${e}; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem; flex: none;`,u=`display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;`,d=`margin: 0; font-size: 1.25rem; font-weight: 700;`,f=`background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8125rem; margin: 0 0 1rem; border: 1px solid rgba(128,128,128,0.2);`,p=`font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;`,m=`background: rgba(128,128,128,0.15); padding: 2px 6px; border-radius: 4px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace; font-size: 0.9em;`,h=`padding: 0.75rem; border: 1px solid rgba(128,128,128,0.2);`,g=`text-align: left; ${h}`,_=`${h} font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace; font-size: 0.75rem;`,v=`border: none; border-top: 1px solid rgba(128,128,128,0.2); margin: 0 0 2rem;`,y={title:`Developer Guide/Installation`},b={name:`Installation`,render:()=>t`
    <div
      style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: ${a}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;"
    >
      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Installation</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">
        One install, one import, a working component on screen — on macOS, Windows, or Linux.
      </p>

      <hr style=${v} />

      <!-- ═══════════════════════════════════════════════════════════════════
           WHAT YOU NEED
           ═══════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">What you need</h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style=${g}>Dependency</th>
            <th style=${g}>Who installs it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style=${h}><strong>Node.js 20+</strong> and <strong>npm 10+</strong></td>
            <td style=${h}>
              You. This is the only thing you install by hand.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=${h}><code style=${m}>lit</code></td>
            <td style=${h}>
              <strong>npm, automatically.</strong> It is a peer dependency and npm 7+ installs it
              for you. Do not run <code style=${m}>npm install lit</code>.
            </td>
          </tr>
          <tr>
            <td style=${h}>
              <code style=${m}>react</code>, <code style=${m}>react-dom</code>,
              <code style=${m}>@lit/react</code>
            </td>
            <td style=${h}>
              You — <strong>only if you use the React entry point.</strong> Plain HTML and Lit
              consumers never install these.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=${h}>Anything else</td>
            <td style=${h}>
              Nothing. The package has <strong>zero runtime dependencies</strong>.
            </td>
          </tr>
        </tbody>
      </table>

      <div
        style="background: #dcfce7; border-left: 4px solid #22c55e; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #166534; margin-bottom: 1rem;"
      >
        <strong>You never need JFrog credentials.</strong> No auth token, no login, no
        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">.npmrc</code>
        entry in your home folder. Read access is anonymous. If a tool asks you for a JFrog
        username or password, that is a symptom of a different problem — see
        <strong>Troubleshooting</strong> at the bottom of this page.
      </div>

      <div
        style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #991b1b; margin-bottom: 2rem;"
      >
        <strong>Connect to the Maximus VPN first.</strong> The registry is internal-only and is
        not reachable from the public internet.
      </div>

      <hr style=${v} />

      <!-- ═══════════════════════════════════════════════════════════════════
           STEP 1 — REGISTRY
           ═══════════════════════════════════════════════════════════════════ -->
      <div style=${c(`#10b981`)}>
        <div style=${u}>
          <div style=${l(`#10b981`)}>1</div>
          <h2 style=${d}>Point npm at the Maximus registry</h2>
        </div>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          Run this once, from your project folder. It is the same command on macOS, Windows
          PowerShell, Windows cmd.exe, Git Bash, and Linux.
        </p>

        <pre style=${f}><code style=${p}><span style="color: #569cd6;">npm</span> config set <span style="color: #ce9178;">"@mms:registry=${s}"</span> --location=project</code></pre>

        <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; margin-bottom: 1rem;">
          <strong>Copy this exactly as written — nothing in it is a placeholder.</strong>
          The URL is the real registry address, and
          <code style=${m}>--location=project</code> is a literal npm flag, not a name to
          replace. It tells npm to write the setting into
          <em>this folder</em> rather than onto your machine, so the setting travels with the
          project instead of living in your personal
          <code style=${m}>~/.npmrc</code>.
        </div>

        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 1rem;">
          <strong>Keep the double quotes.</strong> They are required on Windows PowerShell.
          Without them PowerShell reads <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">@mms:registry</code>
          as a variable reference, finds nothing, and deletes the argument before npm ever sees
          it. npm then receives <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">npm config set =https://…</code>
          and fails with <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">&#96;&#96; is not a valid npm option</code>,
          writing no <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">.npmrc</code> at all.
          The quotes are harmless on macOS, Linux, cmd.exe, and Git Bash.
        </div>

        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.85;">
          This writes a small file named <code style=${m}>.npmrc</code> into your project
          folder containing one line:
        </p>

        <pre style=${f}><code style=${p}>@mms:registry=${s}</code></pre>

        <p style="margin: 0; font-size: 0.875rem; opacity: 0.85;">
          It tells npm that anything starting with <code style=${m}>@mms</code> comes from the
          Maximus registry, and everything else still comes from the public npm registry.
          <strong>Commit this file</strong> — your teammates and your build server need it too.
        </p>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════
           STEP 2 — INSTALL
           ═══════════════════════════════════════════════════════════════════ -->
      <div style=${c(`#3b82f6`)}>
        <div style=${u}>
          <div style=${l(`#3b82f6`)}>2</div>
          <h2 style=${d}>Install the package</h2>
        </div>

        <pre style=${f}><code style=${p}><span style="color: #569cd6;">npm</span> install @mms/design-system</code></pre>

        <p style="margin: 0; font-size: 0.875rem; opacity: 0.85;">
          That is the whole install. <code style=${m}>lit</code> arrives automatically as a
          peer dependency — you do not install it separately.
        </p>
      </div>

      <hr style=${v} />

      <!-- ═══════════════════════════════════════════════════════════════════
           STEP 3 — FORK
           ═══════════════════════════════════════════════════════════════════ -->
      <!-- Same numbered badge as steps 1 and 2, but no card around it: 1 and 2
           are commands to run, this one is a choice to make. Dropping the badge
           entirely would break the count a reader is following down the page. -->
      <div style=${u}>
        <div style=${l(`#8b5cf6`)}>3</div>
        <h2 style=${d}>Pick your path</h2>
      </div>
      <p style="margin: 0 0 1.5rem; font-size: 0.9375rem;">
        Each path is self-contained. Read the one that matches what you are doing and ignore
        the other.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style=${g}>If you are…</th>
            <th style=${g}>Go to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style=${h}>
              <strong>Prototyping.</strong> Putting a real page together quickly — on your own or
              alongside an AI assistant — to show an idea, pressure-test a flow, or start a
              build. Your project has no bundler and does not need one: no Vite, no Webpack, no
              <code style=${m}>npm run build</code> step between editing a file and seeing it
              in the browser.
            </td>
            <td style=${h}><strong>Path A — Prototype</strong></td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=${h}>
              <strong>Building a digital property.</strong> The design work is done — you have
              wireframes or a prototype, and you are implementing the real thing that goes live
              to the public. It already has a bundler (Vite, Webpack, Next.js or similar), a test
              suite, and a deployment.
            </td>
            <td style=${h}><strong>Path B — Production</strong></td>
          </tr>
        </tbody>
      </table>

      <!-- ═══════════════════════════════════════════════════════════════════
           PATH A
           ═══════════════════════════════════════════════════════════════════ -->
      <div style=${c(`#a855f7`)}>
        <div style=${u}>
          <div style=${l(`#a855f7`)}>A</div>
          <h2 style=${d}>Path A — Prototype</h2>
        </div>

        <div
          style="background: rgba(0,0,0,0.03); border-left: 3px solid rgba(128,128,128,0.35); padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; margin-bottom: 1rem; font-size: 0.8125rem; opacity: 0.9;"
        >
          <strong>Working with an AI assistant? None of this has to be typed by hand.</strong>
          An assistant with terminal access can run the commands below itself, and edit the page
          for you afterwards — <em>"switch this to the va-gov theme"</em> or <em>"add a form with
          name, email and a submit button"</em> is enough. The package ships
          <code style=${m}>custom-elements.json</code>, a machine-readable manifest of every
          component, prop, event and slot, so an assistant writes correct markup without
          guessing.
        </div>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          One command writes a starter HTML file, serves it on
          <code style=${m}>localhost</code>, and opens it. Nothing to create by hand, no
          bundler, no import map, no theme setup.
        </p>

        <pre style=${f}><code style=${p}><span style="color: #569cd6;">npx</span> mms-ds start</code></pre>

        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.85;">
          From an empty folder, that is three commands in total:
        </p>

        <pre style=${f}><code style=${p}><span style="color: #569cd6;">npm</span> config set <span style="color: #ce9178;">"@mms:registry=${s}"</span> --location=project
<span style="color: #569cd6;">npm</span> install @mms/design-system
<span style="color: #569cd6;">npx</span> mms-ds start</code></pre>


        <div
          style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;"
        >
          <div
            style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;"
          >
            The command does exactly three things
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem; font-size: 0.875rem;">
          <tbody>
            <tr>
              <td style=${h}><strong>Creates</strong></td>
              <td style=${h}>
                An <code style=${m}>index.html</code> in your current folder, already pointed
                at the standalone bundle, with a few components on it. If you already have one,
                it is left alone.
              </td>
            </tr>
            <tr style="background: rgba(128,128,128,0.03);">
              <td style=${h}><strong>Serves</strong></td>
              <td style=${h}>
                That folder over <code style=${m}>http://localhost</code>. A browser refuses
                to run module scripts opened straight off
                <code style=${m}>file://</code>, so double-clicking the file would not work.
                Port 8080 by default, or the next free one.
              </td>
            </tr>
            <tr>
              <td style=${h}><strong>Opens</strong></td>
              <td style=${h}>Your default browser at that address.</td>
            </tr>
          </tbody>
        </table>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          From then on the loop is: edit <code style=${m}>index.html</code> in your editor,
          save, refresh the browser.
        </p>

        <div
          style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;"
        >
          <div
            style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;"
          >
            Options
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem; font-size: 0.875rem;">
          <tbody>
            <tr>
              <td style=${h}><code style=${m}>--theme &lt;name&gt;</code></td>
              <td style=${h}>
                Start the page on a brand other than Maximus — see <strong>Themes</strong> for
                the current list, or run <code style=${m}>npx mms-ds --help</code> to see what
                your installed copy ships.
              </td>
            </tr>
            <tr style="background: rgba(128,128,128,0.03);">
              <td style=${h}><code style=${m}>--port &lt;number&gt;</code></td>
              <td style=${h}>
                Serve on a specific port instead of 8080. Useful when 8080 is already taken by
                something you want to keep running.
              </td>
            </tr>
            <tr>
              <td style=${h}><code style=${m}>--no-open</code></td>
              <td style=${h}>
                Serve without launching a browser — the URL is printed for you to open yourself.
              </td>
            </tr>
            <tr style="background: rgba(128,128,128,0.03);">
              <td style=${h}><code style=${m}>mms-ds init</code></td>
              <td style=${h}>
                Write the <code style=${m}>index.html</code> and stop, without starting a
                server. Use this when you already have one you would rather serve it with.
              </td>
            </tr>
          </tbody>
        </table>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          The generated file is an ordinary HTML page you own, and its whole structure is one
          script tag plus markup. Abridged below — the real file also carries a title, a
          comment explaining the theme attributes, a little page styling, and a couple more
          demo components:
        </p>

        <pre style=${f}><code style=${p}><span style="color: #808080;">&lt;!</span><span style="color: #569cd6;">DOCTYPE</span> <span style="color: #9cdcfe;">html</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">html</span> <span style="color: #9cdcfe;">lang</span>=<span style="color: #ce9178;">"en"</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span>
  <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">head</span><span style="color: #808080;">&gt;</span>
    <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">script</span> <span style="color: #9cdcfe;">type</span>=<span style="color: #ce9178;">"module"</span> <span style="color: #9cdcfe;">src</span>=<span style="color: #ce9178;">"./node_modules/@mms/design-system/dist/standalone.js"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">script</span><span style="color: #808080;">&gt;</span>
  <span style="color: #808080;">&lt;/</span><span style="color: #4ec9b0;">head</span><span style="color: #808080;">&gt;</span>
  <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">body</span><span style="color: #808080;">&gt;</span>
    <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span> <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span> <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Primary"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>
    <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-text-field</span> <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Full name"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-text-field</span><span style="color: #808080;">&gt;</span>
  <span style="color: #808080;">&lt;/</span><span style="color: #4ec9b0;">body</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;/</span><span style="color: #4ec9b0;">html</span><span style="color: #808080;">&gt;</span></code></pre>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          That single script tag carries Lit, every component, the icons, and all tokens and
          themes. The page starts on the Maximus brand. To start on a client brand instead,
          name it when you run the command:
        </p>

        <pre style=${f}><code style=${p}><span style="color: #569cd6;">npx</span> mms-ds start --theme va-gov</code></pre>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          Or switch at any point afterwards by changing
          <code style=${m}>data-theme</code> on the <code style=${m}>&lt;html&gt;</code>
          element. Every theme is already inside the file, so there is nothing further to
          install and no rebuild:
        </p>

        <pre style=${f}><code style=${p}><span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">html</span> <span style="color: #9cdcfe;">lang</span>=<span style="color: #ce9178;">"en"</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"va-gov"</span><span style="color: #808080;">&gt;</span></code></pre>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          See <strong>Themes</strong> for the full list and what each one is for.
        </p>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          Dark mode needs nothing else. With no <code style=${m}>data-mode</code> set, the
          page follows the user's OS or browser setting automatically. Add
          <code style=${m}>data-mode="light"</code> or
          <code style=${m}>data-mode="dark"</code> only if you want to pin it.
        </p>

        <div
          style="background: #f3e8ff; border-left: 4px solid #a855f7; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #581c87;"
        >
          <strong>Where the prototype goes next.</strong> What you build here is real code, not a
          mockup — a frontend team can pick it up and keep going. What does not carry over is the
          standalone file: it contains every component whether the page uses it or not, so it
          cannot be tree-shaken. Moving to Path B swaps that one script tag for per-component
          imports. The markup, the components and the theme all stay as they are.
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════
           PATH B
           ═══════════════════════════════════════════════════════════════════ -->
      <div style=${c(`#f59e0b`)}>
        <div style=${u}>
          <div style=${l(`#f59e0b`)}>B</div>
          <h2 style=${d}>Path B — Production</h2>
        </div>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          Import each component by its own path. Your bundler then ships only what you actually
          used.
        </p>

        <div
          style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;"
        >
          <div
            style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;"
          >
            📁 your app entry point — main.ts, index.tsx, App.tsx
          </div>
        </div>

        <pre style=${f}><code style=${p}><span style="color: #6a9955;">// 1. Structural tokens — spacing, typography, radius, elevation</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;

<span style="color: #6a9955;">// 2. One brand theme (plus its -dark variant if you support dark mode)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus-dark'</span>;

<span style="color: #6a9955;">// 3. Only the components you use</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-button'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-text-field'</span>;</code></pre>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          Then activate the theme on your root element. Without
          <code style=${m}>data-theme</code> no brand token resolves and components render
          unstyled:
        </p>

        <pre style=${f}><code style=${p}><span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">html</span> <span style="color: #9cdcfe;">lang</span>=<span style="color: #ce9178;">"en"</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span></code></pre>

        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.85;">
          Or set it from JavaScript. Dark mode follows the browser on its own &mdash; set
          <code style=${m}>data-mode</code> only to pin it and opt out of that:
        </p>

        <pre style=${f}><code style=${p}>document.documentElement.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'data-theme'</span>, <span style="color: #ce9178;">'maximus'</span>);
document.documentElement.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'data-mode'</span>, <span style="color: #ce9178;">'dark'</span>);</code></pre>

        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.85;">
          <strong>Using React?</strong> Install the three React peers. Every component ships a
          typed React binding — props are typed, and events arrive as
          <code style=${m}>on*</code> props with a typed
          <code style=${m}>detail</code> payload:
        </p>

        <pre style=${f}><code style=${p}><span style="color: #569cd6;">npm</span> install react react-dom @lit/react</code></pre>

        <pre style=${f}><code style=${p}><span style="color: #6a9955;">// Per-component — import only what you use</span>
<span style="color: #c586c0;">import</span> { MmsTextField } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-text-field'</span>;

<span style="color: #6a9955;">// Or from the barrel</span>
<span style="color: #c586c0;">import</span> { MmsButton, MmsSelect } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react'</span>;</code></pre>

        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.85;">
          Prefer the per-component path in production — it lets the bundler drop everything you
          did not import. No <code style=${m}>useRef</code> or
          <code style=${m}>addEventListener</code> is needed for these; props are camelCase, as
          in any React component.
        </p>

        <p style="margin: 0; font-size: 0.8125rem; opacity: 0.7;">
          See <strong>React Usage</strong> for props, events, and refs.
        </p>
      </div>

      <hr style=${v} />

      <!-- ═══════════════════════════════════════════════════════════════════
           ENTRY POINTS
           ═══════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Entry points</h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style=${g}>Import</th>
            <th style=${g}>Use it for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style=${_}>@mms/design-system/components/mms-button</td>
            <td style=${h}>Production. One component, tree-shaken.</td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=${_}>@mms/design-system/standalone</td>
            <td style=${h}>
              Prototyping. Everything in one self-contained file, no bundler needed.
            </td>
          </tr>
          <tr>
            <td style=${_}>@mms/design-system</td>
            <td style=${h}>
              Convenience. Registers every component — needs a bundler, and ships all of them.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=${_}>@mms/design-system/react/mms-*</td>
            <td style=${h}>
              React apps, production. One typed binding per component — typed props, typed
              <code style=${m}>on*</code> event handlers, tree-shakeable.
            </td>
          </tr>
          <tr>
            <td style=${_}>@mms/design-system/react</td>
            <td style=${h}>
              React apps, convenience. The same bindings for all components from one import.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=${_}>@mms/design-system/tokens.css</td>
            <td style=${h}>Any platform. Structural tokens as CSS custom properties.</td>
          </tr>
        </tbody>
      </table>

      <!-- ═══════════════════════════════════════════════════════════════════
           THEMES
           ═══════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Themes</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Each client engagement gets its own theme. Import the one you are shipping, and import
        its matching <code style=${m}>-dark</code> variant alongside it &mdash;
        <strong>both</strong>. With both present and no
        <code style=${m}>data-mode</code> set, the page follows the reader's OS via
        <code style=${m}>prefers-color-scheme</code>, no JavaScript involved. Setting
        <code style=${m}>data-mode="light"</code> or
        <code style=${m}>data-mode="dark"</code> pins it instead.
      </p>

      <p style="margin: 0 0 2rem; font-size: 0.9375rem;">
        The list of themes is not repeated here &mdash; see <strong>Themes</strong> in this guide
        for every brand that ships, its import path, live swatches, and what each palette is safe
        to be used for.
      </p>

      <hr style=${v} />

      <!-- ═══════════════════════════════════════════════════════════════════
           VERIFY
           ═══════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Verify your setup</h2>

      <pre style=${f}><code style=${p}><span style="color: #6a9955;"># Which registry will @mms resolve from?</span>
<span style="color: #569cd6;">npm</span> config get <span style="color: #ce9178;">"@mms:registry"</span>

<span style="color: #6a9955;"># Which version did you get, and did lit come with it?</span>
<span style="color: #569cd6;">npm</span> list @mms/design-system lit</code></pre>

      <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
        The first should print the Artifactory URL from Step 1. The second prints a tree like
        this:
      </p>

      <pre style=${f}><code style=${p}>my-project@1.0.0
└─┬ @mms/design-system@${o}
  └── lit@3.3.3</code></pre>

      <p style="margin: 0 0 2rem; font-size: 0.875rem; opacity: 0.85;">
        <code style=${m}>lit</code> appears underneath — npm installed it for you as a peer,
        which is why you never asked for it.
      </p>

      <hr style=${v} />

      <!-- ═══════════════════════════════════════════════════════════════════
           TROUBLESHOOTING
           ═══════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Troubleshooting</h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style=${g}>What you see</th>
            <th style=${g}>What it means, and the fix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style=${h}>
              <code style=${m}>&#96;&#96; is not a valid npm option</code> during Step 1
            </td>
            <td style=${h}>
              You are on PowerShell and the double quotes were lost when copying. PowerShell
              consumed <code style=${m}>@mms:registry</code> as a variable name and removed it,
              leaving npm with a bare <code style=${m}>=https://…</code>. No
              <code style=${m}>.npmrc</code> was written. Re-run Step 1 with the quotes exactly
              as shown.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=${h}>
              npm asks for a <strong>username, password, or auth token</strong>
            </td>
            <td style=${h}>
              You do not need credentials — something is sending npm to the wrong place, or an
              old token is stored on your machine. Run
              <code style=${m}>npm config get "@mms:registry"</code>. If it is not the URL from
              Step 1, clear the stale machine-level entry with
              <code style=${m}>npm config delete "@mms:registry" --location=user</code> and redo
              Step 1.
            </td>
          </tr>
          <tr>
            <td style=${h}><code style=${m}>404 Not Found — @mms/design-system</code></td>
            <td style=${h}>
              Almost always one of two things: you are not on the VPN, or Step 1 has not run in
              this folder. Check the VPN first, then
              <code style=${m}>npm config get "@mms:registry"</code>.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=${h}>Components appear on the page but look unstyled</td>
            <td style=${h}>
              No <code style=${m}>data-theme</code> on the
              <code style=${m}>&lt;html&gt;</code> element, so no brand token resolves. Path A
              sets this for you; Path B needs you to set it.
            </td>
          </tr>
          <tr>
            <td style=${h}>
              <code style=${m}>Failed to resolve module specifier "lit"</code>
            </td>
            <td style=${h}>
              A plain <code style=${m}>&lt;script&gt;</code> tag pointed at a component file
              instead of the standalone file. Browsers cannot resolve bare module names without
              an import map. Use the Path A script tag.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=${h}>
              <code style=${m}>ERR_MODULE_NOT_FOUND</code> or a blank page after a build
            </td>
            <td style=${h}>
              Your <code style=${m}>.npmrc</code> was not committed, so the build server
              resolved <code style=${m}>@mms</code> from the public registry. Commit the file
              created in Step 1.
            </td>
          </tr>
          <tr>
            <td style=${h}>
              Step 1 printed nothing and no <code style=${m}>.npmrc</code> appeared in this
              folder
            </td>
            <td style=${h}>
              It succeeded, just not where you were looking.
              <code style=${m}>--location=project</code> walks up to the nearest ancestor
              <code style=${m}>package.json</code> and writes
              <code style=${m}>.npmrc</code> next to <em>that</em> — so inside a sub-folder of
              an existing project, the file lands at the project root. It exits
              <code style=${m}>0</code> and says nothing either way. Confirm with
              <code style=${m}>npm config get "@mms:registry"</code>, and commit the file
              wherever it actually landed.
            </td>
          </tr>
        </tbody>
      </table>

      <div
        style="background: rgba(128,128,128,0.04); border-radius: 8px; padding: 1rem; margin-bottom: 2rem; border: 1px solid rgba(128,128,128,0.1);"
      >
        <p style="margin: 0 0 0.5rem; font-size: 0.8125rem; font-weight: 600;">
          A note on <code style=${m}>.npmrc</code> precedence
        </p>
        <p style="margin: 0; font-size: 0.8125rem; opacity: 0.85;">
          A <code style=${m}>@mms:registry</code> line beats the
          <code style=${m}>--registry</code> command-line flag. That is why this guide
          configures the scope once rather than passing a flag on every install — the flag
          cannot override a stale entry, but Step 1 replaces it.
        </p>
      </div>

      <div
        style="background: #dcfce7; border-left: 4px solid #22c55e; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #166534;"
      >
        <strong>You are ready.</strong> Continue to <strong>HTML Usage</strong> or
        <strong>React Usage</strong> for component-level detail.
      </div>
    </div>
  `},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Installation',
  render: () => html\`
    <div
      style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: \${PAGE_MAX}; margin: 0 auto; padding: 2rem; line-height: 1.6; color: inherit;"
    >
      <h1 style="margin: 0 0 0.25rem; font-size: 2rem; font-weight: 700;">Installation</h1>
      <p style="margin: 0 0 2rem; opacity: 0.85;">
        One install, one import, a working component on screen — on macOS, Windows, or Linux.
      </p>

      <hr style=\${RULE} />

      <!-- ═══════════════════════════════════════════════════════════════════
           WHAT YOU NEED
           ═══════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">What you need</h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style=\${TH}>Dependency</th>
            <th style=\${TH}>Who installs it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style=\${TD}><strong>Node.js 20+</strong> and <strong>npm 10+</strong></td>
            <td style=\${TD}>
              You. This is the only thing you install by hand.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=\${TD}><code style=\${KBD}>lit</code></td>
            <td style=\${TD}>
              <strong>npm, automatically.</strong> It is a peer dependency and npm 7+ installs it
              for you. Do not run <code style=\${KBD}>npm install lit</code>.
            </td>
          </tr>
          <tr>
            <td style=\${TD}>
              <code style=\${KBD}>react</code>, <code style=\${KBD}>react-dom</code>,
              <code style=\${KBD}>@lit/react</code>
            </td>
            <td style=\${TD}>
              You — <strong>only if you use the React entry point.</strong> Plain HTML and Lit
              consumers never install these.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=\${TD}>Anything else</td>
            <td style=\${TD}>
              Nothing. The package has <strong>zero runtime dependencies</strong>.
            </td>
          </tr>
        </tbody>
      </table>

      <div
        style="background: #dcfce7; border-left: 4px solid #22c55e; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #166534; margin-bottom: 1rem;"
      >
        <strong>You never need JFrog credentials.</strong> No auth token, no login, no
        <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">.npmrc</code>
        entry in your home folder. Read access is anonymous. If a tool asks you for a JFrog
        username or password, that is a symptom of a different problem — see
        <strong>Troubleshooting</strong> at the bottom of this page.
      </div>

      <div
        style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #991b1b; margin-bottom: 2rem;"
      >
        <strong>Connect to the Maximus VPN first.</strong> The registry is internal-only and is
        not reachable from the public internet.
      </div>

      <hr style=\${RULE} />

      <!-- ═══════════════════════════════════════════════════════════════════
           STEP 1 — REGISTRY
           ═══════════════════════════════════════════════════════════════════ -->
      <div style=\${CARD('#10b981')}>
        <div style=\${HEAD}>
          <div style=\${BADGE('#10b981')}>1</div>
          <h2 style=\${H2}>Point npm at the Maximus registry</h2>
        </div>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          Run this once, from your project folder. It is the same command on macOS, Windows
          PowerShell, Windows cmd.exe, Git Bash, and Linux.
        </p>

        <pre style=\${PRE}><code style=\${CODE}><span style="color: #569cd6;">npm</span> config set <span style="color: #ce9178;">"@mms:registry=\${REGISTRY}"</span> --location=project</code></pre>

        <div style="background: rgba(16,185,129,0.1); border-left: 4px solid #10b981; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; margin-bottom: 1rem;">
          <strong>Copy this exactly as written — nothing in it is a placeholder.</strong>
          The URL is the real registry address, and
          <code style=\${KBD}>--location=project</code> is a literal npm flag, not a name to
          replace. It tells npm to write the setting into
          <em>this folder</em> rather than onto your machine, so the setting travels with the
          project instead of living in your personal
          <code style=\${KBD}>~/.npmrc</code>.
        </div>

        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #92400e; margin-bottom: 1rem;">
          <strong>Keep the double quotes.</strong> They are required on Windows PowerShell.
          Without them PowerShell reads <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">@mms:registry</code>
          as a variable reference, finds nothing, and deletes the argument before npm ever sees
          it. npm then receives <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">npm config set =https://…</code>
          and fails with <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">&#96;&#96; is not a valid npm option</code>,
          writing no <code style="background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px;">.npmrc</code> at all.
          The quotes are harmless on macOS, Linux, cmd.exe, and Git Bash.
        </div>

        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.85;">
          This writes a small file named <code style=\${KBD}>.npmrc</code> into your project
          folder containing one line:
        </p>

        <pre style=\${PRE}><code style=\${CODE}>@mms:registry=\${REGISTRY}</code></pre>

        <p style="margin: 0; font-size: 0.875rem; opacity: 0.85;">
          It tells npm that anything starting with <code style=\${KBD}>@mms</code> comes from the
          Maximus registry, and everything else still comes from the public npm registry.
          <strong>Commit this file</strong> — your teammates and your build server need it too.
        </p>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════
           STEP 2 — INSTALL
           ═══════════════════════════════════════════════════════════════════ -->
      <div style=\${CARD('#3b82f6')}>
        <div style=\${HEAD}>
          <div style=\${BADGE('#3b82f6')}>2</div>
          <h2 style=\${H2}>Install the package</h2>
        </div>

        <pre style=\${PRE}><code style=\${CODE}><span style="color: #569cd6;">npm</span> install @mms/design-system</code></pre>

        <p style="margin: 0; font-size: 0.875rem; opacity: 0.85;">
          That is the whole install. <code style=\${KBD}>lit</code> arrives automatically as a
          peer dependency — you do not install it separately.
        </p>
      </div>

      <hr style=\${RULE} />

      <!-- ═══════════════════════════════════════════════════════════════════
           STEP 3 — FORK
           ═══════════════════════════════════════════════════════════════════ -->
      <!-- Same numbered badge as steps 1 and 2, but no card around it: 1 and 2
           are commands to run, this one is a choice to make. Dropping the badge
           entirely would break the count a reader is following down the page. -->
      <div style=\${HEAD}>
        <div style=\${BADGE('#8b5cf6')}>3</div>
        <h2 style=\${H2}>Pick your path</h2>
      </div>
      <p style="margin: 0 0 1.5rem; font-size: 0.9375rem;">
        Each path is self-contained. Read the one that matches what you are doing and ignore
        the other.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style=\${TH}>If you are…</th>
            <th style=\${TH}>Go to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style=\${TD}>
              <strong>Prototyping.</strong> Putting a real page together quickly — on your own or
              alongside an AI assistant — to show an idea, pressure-test a flow, or start a
              build. Your project has no bundler and does not need one: no Vite, no Webpack, no
              <code style=\${KBD}>npm run build</code> step between editing a file and seeing it
              in the browser.
            </td>
            <td style=\${TD}><strong>Path A — Prototype</strong></td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=\${TD}>
              <strong>Building a digital property.</strong> The design work is done — you have
              wireframes or a prototype, and you are implementing the real thing that goes live
              to the public. It already has a bundler (Vite, Webpack, Next.js or similar), a test
              suite, and a deployment.
            </td>
            <td style=\${TD}><strong>Path B — Production</strong></td>
          </tr>
        </tbody>
      </table>

      <!-- ═══════════════════════════════════════════════════════════════════
           PATH A
           ═══════════════════════════════════════════════════════════════════ -->
      <div style=\${CARD('#a855f7')}>
        <div style=\${HEAD}>
          <div style=\${BADGE('#a855f7')}>A</div>
          <h2 style=\${H2}>Path A — Prototype</h2>
        </div>

        <div
          style="background: rgba(0,0,0,0.03); border-left: 3px solid rgba(128,128,128,0.35); padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; margin-bottom: 1rem; font-size: 0.8125rem; opacity: 0.9;"
        >
          <strong>Working with an AI assistant? None of this has to be typed by hand.</strong>
          An assistant with terminal access can run the commands below itself, and edit the page
          for you afterwards — <em>"switch this to the va-gov theme"</em> or <em>"add a form with
          name, email and a submit button"</em> is enough. The package ships
          <code style=\${KBD}>custom-elements.json</code>, a machine-readable manifest of every
          component, prop, event and slot, so an assistant writes correct markup without
          guessing.
        </div>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          One command writes a starter HTML file, serves it on
          <code style=\${KBD}>localhost</code>, and opens it. Nothing to create by hand, no
          bundler, no import map, no theme setup.
        </p>

        <pre style=\${PRE}><code style=\${CODE}><span style="color: #569cd6;">npx</span> mms-ds start</code></pre>

        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.85;">
          From an empty folder, that is three commands in total:
        </p>

        <pre style=\${PRE}><code style=\${CODE}><span style="color: #569cd6;">npm</span> config set <span style="color: #ce9178;">"@mms:registry=\${REGISTRY}"</span> --location=project
<span style="color: #569cd6;">npm</span> install @mms/design-system
<span style="color: #569cd6;">npx</span> mms-ds start</code></pre>


        <div
          style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;"
        >
          <div
            style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;"
          >
            The command does exactly three things
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem; font-size: 0.875rem;">
          <tbody>
            <tr>
              <td style=\${TD}><strong>Creates</strong></td>
              <td style=\${TD}>
                An <code style=\${KBD}>index.html</code> in your current folder, already pointed
                at the standalone bundle, with a few components on it. If you already have one,
                it is left alone.
              </td>
            </tr>
            <tr style="background: rgba(128,128,128,0.03);">
              <td style=\${TD}><strong>Serves</strong></td>
              <td style=\${TD}>
                That folder over <code style=\${KBD}>http://localhost</code>. A browser refuses
                to run module scripts opened straight off
                <code style=\${KBD}>file://</code>, so double-clicking the file would not work.
                Port 8080 by default, or the next free one.
              </td>
            </tr>
            <tr>
              <td style=\${TD}><strong>Opens</strong></td>
              <td style=\${TD}>Your default browser at that address.</td>
            </tr>
          </tbody>
        </table>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          From then on the loop is: edit <code style=\${KBD}>index.html</code> in your editor,
          save, refresh the browser.
        </p>

        <div
          style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;"
        >
          <div
            style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;"
          >
            Options
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem; font-size: 0.875rem;">
          <tbody>
            <tr>
              <td style=\${TD}><code style=\${KBD}>--theme &lt;name&gt;</code></td>
              <td style=\${TD}>
                Start the page on a brand other than Maximus — see <strong>Themes</strong> for
                the current list, or run <code style=\${KBD}>npx mms-ds --help</code> to see what
                your installed copy ships.
              </td>
            </tr>
            <tr style="background: rgba(128,128,128,0.03);">
              <td style=\${TD}><code style=\${KBD}>--port &lt;number&gt;</code></td>
              <td style=\${TD}>
                Serve on a specific port instead of 8080. Useful when 8080 is already taken by
                something you want to keep running.
              </td>
            </tr>
            <tr>
              <td style=\${TD}><code style=\${KBD}>--no-open</code></td>
              <td style=\${TD}>
                Serve without launching a browser — the URL is printed for you to open yourself.
              </td>
            </tr>
            <tr style="background: rgba(128,128,128,0.03);">
              <td style=\${TD}><code style=\${KBD}>mms-ds init</code></td>
              <td style=\${TD}>
                Write the <code style=\${KBD}>index.html</code> and stop, without starting a
                server. Use this when you already have one you would rather serve it with.
              </td>
            </tr>
          </tbody>
        </table>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          The generated file is an ordinary HTML page you own, and its whole structure is one
          script tag plus markup. Abridged below — the real file also carries a title, a
          comment explaining the theme attributes, a little page styling, and a couple more
          demo components:
        </p>

        <pre style=\${PRE}><code style=\${CODE}><span style="color: #808080;">&lt;!</span><span style="color: #569cd6;">DOCTYPE</span> <span style="color: #9cdcfe;">html</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">html</span> <span style="color: #9cdcfe;">lang</span>=<span style="color: #ce9178;">"en"</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span>
  <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">head</span><span style="color: #808080;">&gt;</span>
    <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">script</span> <span style="color: #9cdcfe;">type</span>=<span style="color: #ce9178;">"module"</span> <span style="color: #9cdcfe;">src</span>=<span style="color: #ce9178;">"./node_modules/@mms/design-system/dist/standalone.js"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">script</span><span style="color: #808080;">&gt;</span>
  <span style="color: #808080;">&lt;/</span><span style="color: #4ec9b0;">head</span><span style="color: #808080;">&gt;</span>
  <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">body</span><span style="color: #808080;">&gt;</span>
    <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-button</span> <span style="color: #9cdcfe;">variant</span>=<span style="color: #ce9178;">"primary"</span> <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Primary"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-button</span><span style="color: #808080;">&gt;</span>
    <span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">mms-text-field</span> <span style="color: #9cdcfe;">label</span>=<span style="color: #ce9178;">"Full name"</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #4ec9b0;">mms-text-field</span><span style="color: #808080;">&gt;</span>
  <span style="color: #808080;">&lt;/</span><span style="color: #4ec9b0;">body</span><span style="color: #808080;">&gt;</span>
<span style="color: #808080;">&lt;/</span><span style="color: #4ec9b0;">html</span><span style="color: #808080;">&gt;</span></code></pre>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          That single script tag carries Lit, every component, the icons, and all tokens and
          themes. The page starts on the Maximus brand. To start on a client brand instead,
          name it when you run the command:
        </p>

        <pre style=\${PRE}><code style=\${CODE}><span style="color: #569cd6;">npx</span> mms-ds start --theme va-gov</code></pre>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          Or switch at any point afterwards by changing
          <code style=\${KBD}>data-theme</code> on the <code style=\${KBD}>&lt;html&gt;</code>
          element. Every theme is already inside the file, so there is nothing further to
          install and no rebuild:
        </p>

        <pre style=\${PRE}><code style=\${CODE}><span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">html</span> <span style="color: #9cdcfe;">lang</span>=<span style="color: #ce9178;">"en"</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"va-gov"</span><span style="color: #808080;">&gt;</span></code></pre>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          See <strong>Themes</strong> for the full list and what each one is for.
        </p>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          Dark mode needs nothing else. With no <code style=\${KBD}>data-mode</code> set, the
          page follows the user's OS or browser setting automatically. Add
          <code style=\${KBD}>data-mode="light"</code> or
          <code style=\${KBD}>data-mode="dark"</code> only if you want to pin it.
        </p>

        <div
          style="background: #f3e8ff; border-left: 4px solid #a855f7; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #581c87;"
        >
          <strong>Where the prototype goes next.</strong> What you build here is real code, not a
          mockup — a frontend team can pick it up and keep going. What does not carry over is the
          standalone file: it contains every component whether the page uses it or not, so it
          cannot be tree-shaken. Moving to Path B swaps that one script tag for per-component
          imports. The markup, the components and the theme all stay as they are.
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════
           PATH B
           ═══════════════════════════════════════════════════════════════════ -->
      <div style=\${CARD('#f59e0b')}>
        <div style=\${HEAD}>
          <div style=\${BADGE('#f59e0b')}>B</div>
          <h2 style=\${H2}>Path B — Production</h2>
        </div>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          Import each component by its own path. Your bundler then ships only what you actually
          used.
        </p>

        <div
          style="background: rgba(0,0,0,0.03); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem;"
        >
          <div
            style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6;"
          >
            📁 your app entry point — main.ts, index.tsx, App.tsx
          </div>
        </div>

        <pre style=\${PRE}><code style=\${CODE}><span style="color: #6a9955;">// 1. Structural tokens — spacing, typography, radius, elevation</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/tokens.css'</span>;

<span style="color: #6a9955;">// 2. One brand theme (plus its -dark variant if you support dark mode)</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/themes/maximus-dark'</span>;

<span style="color: #6a9955;">// 3. Only the components you use</span>
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-button'</span>;
<span style="color: #c586c0;">import</span> <span style="color: #ce9178;">'@mms/design-system/components/mms-text-field'</span>;</code></pre>

        <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
          Then activate the theme on your root element. Without
          <code style=\${KBD}>data-theme</code> no brand token resolves and components render
          unstyled:
        </p>

        <pre style=\${PRE}><code style=\${CODE}><span style="color: #808080;">&lt;</span><span style="color: #4ec9b0;">html</span> <span style="color: #9cdcfe;">lang</span>=<span style="color: #ce9178;">"en"</span> <span style="color: #9cdcfe;">data-theme</span>=<span style="color: #ce9178;">"maximus"</span><span style="color: #808080;">&gt;</span></code></pre>

        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.85;">
          Or set it from JavaScript. Dark mode follows the browser on its own &mdash; set
          <code style=\${KBD}>data-mode</code> only to pin it and opt out of that:
        </p>

        <pre style=\${PRE}><code style=\${CODE}>document.documentElement.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'data-theme'</span>, <span style="color: #ce9178;">'maximus'</span>);
document.documentElement.<span style="color: #dcdcaa;">setAttribute</span>(<span style="color: #ce9178;">'data-mode'</span>, <span style="color: #ce9178;">'dark'</span>);</code></pre>

        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.85;">
          <strong>Using React?</strong> Install the three React peers. Every component ships a
          typed React binding — props are typed, and events arrive as
          <code style=\${KBD}>on*</code> props with a typed
          <code style=\${KBD}>detail</code> payload:
        </p>

        <pre style=\${PRE}><code style=\${CODE}><span style="color: #569cd6;">npm</span> install react react-dom @lit/react</code></pre>

        <pre style=\${PRE}><code style=\${CODE}><span style="color: #6a9955;">// Per-component — import only what you use</span>
<span style="color: #c586c0;">import</span> { MmsTextField } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react/mms-text-field'</span>;

<span style="color: #6a9955;">// Or from the barrel</span>
<span style="color: #c586c0;">import</span> { MmsButton, MmsSelect } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@mms/design-system/react'</span>;</code></pre>

        <p style="margin: 0 0 0.75rem; font-size: 0.875rem; opacity: 0.85;">
          Prefer the per-component path in production — it lets the bundler drop everything you
          did not import. No <code style=\${KBD}>useRef</code> or
          <code style=\${KBD}>addEventListener</code> is needed for these; props are camelCase, as
          in any React component.
        </p>

        <p style="margin: 0; font-size: 0.8125rem; opacity: 0.7;">
          See <strong>React Usage</strong> for props, events, and refs.
        </p>
      </div>

      <hr style=\${RULE} />

      <!-- ═══════════════════════════════════════════════════════════════════
           ENTRY POINTS
           ═══════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Entry points</h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style=\${TH}>Import</th>
            <th style=\${TH}>Use it for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style=\${MONO_TD}>@mms/design-system/components/mms-button</td>
            <td style=\${TD}>Production. One component, tree-shaken.</td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=\${MONO_TD}>@mms/design-system/standalone</td>
            <td style=\${TD}>
              Prototyping. Everything in one self-contained file, no bundler needed.
            </td>
          </tr>
          <tr>
            <td style=\${MONO_TD}>@mms/design-system</td>
            <td style=\${TD}>
              Convenience. Registers every component — needs a bundler, and ships all of them.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=\${MONO_TD}>@mms/design-system/react/mms-*</td>
            <td style=\${TD}>
              React apps, production. One typed binding per component — typed props, typed
              <code style=\${KBD}>on*</code> event handlers, tree-shakeable.
            </td>
          </tr>
          <tr>
            <td style=\${MONO_TD}>@mms/design-system/react</td>
            <td style=\${TD}>
              React apps, convenience. The same bindings for all components from one import.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=\${MONO_TD}>@mms/design-system/tokens.css</td>
            <td style=\${TD}>Any platform. Structural tokens as CSS custom properties.</td>
          </tr>
        </tbody>
      </table>

      <!-- ═══════════════════════════════════════════════════════════════════
           THEMES
           ═══════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Themes</h2>

      <p style="margin: 0 0 1rem; font-size: 0.9375rem;">
        Each client engagement gets its own theme. Import the one you are shipping, and import
        its matching <code style=\${KBD}>-dark</code> variant alongside it &mdash;
        <strong>both</strong>. With both present and no
        <code style=\${KBD}>data-mode</code> set, the page follows the reader's OS via
        <code style=\${KBD}>prefers-color-scheme</code>, no JavaScript involved. Setting
        <code style=\${KBD}>data-mode="light"</code> or
        <code style=\${KBD}>data-mode="dark"</code> pins it instead.
      </p>

      <p style="margin: 0 0 2rem; font-size: 0.9375rem;">
        The list of themes is not repeated here &mdash; see <strong>Themes</strong> in this guide
        for every brand that ships, its import path, live swatches, and what each palette is safe
        to be used for.
      </p>

      <hr style=\${RULE} />

      <!-- ═══════════════════════════════════════════════════════════════════
           VERIFY
           ═══════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Verify your setup</h2>

      <pre style=\${PRE}><code style=\${CODE}><span style="color: #6a9955;"># Which registry will @mms resolve from?</span>
<span style="color: #569cd6;">npm</span> config get <span style="color: #ce9178;">"@mms:registry"</span>

<span style="color: #6a9955;"># Which version did you get, and did lit come with it?</span>
<span style="color: #569cd6;">npm</span> list @mms/design-system lit</code></pre>

      <p style="margin: 0 0 1rem; font-size: 0.875rem; opacity: 0.85;">
        The first should print the Artifactory URL from Step 1. The second prints a tree like
        this:
      </p>

      <pre style=\${PRE}><code style=\${CODE}>my-project@1.0.0
└─┬ @mms/design-system@\${VERSION}
  └── lit@3.3.3</code></pre>

      <p style="margin: 0 0 2rem; font-size: 0.875rem; opacity: 0.85;">
        <code style=\${KBD}>lit</code> appears underneath — npm installed it for you as a peer,
        which is why you never asked for it.
      </p>

      <hr style=\${RULE} />

      <!-- ═══════════════════════════════════════════════════════════════════
           TROUBLESHOOTING
           ═══════════════════════════════════════════════════════════════════ -->
      <h2 style="margin: 0 0 1rem; font-size: 1.5rem; font-weight: 700;">Troubleshooting</h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <thead>
          <tr style="background: rgba(128,128,128,0.06);">
            <th style=\${TH}>What you see</th>
            <th style=\${TH}>What it means, and the fix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style=\${TD}>
              <code style=\${KBD}>&#96;&#96; is not a valid npm option</code> during Step 1
            </td>
            <td style=\${TD}>
              You are on PowerShell and the double quotes were lost when copying. PowerShell
              consumed <code style=\${KBD}>@mms:registry</code> as a variable name and removed it,
              leaving npm with a bare <code style=\${KBD}>=https://…</code>. No
              <code style=\${KBD}>.npmrc</code> was written. Re-run Step 1 with the quotes exactly
              as shown.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=\${TD}>
              npm asks for a <strong>username, password, or auth token</strong>
            </td>
            <td style=\${TD}>
              You do not need credentials — something is sending npm to the wrong place, or an
              old token is stored on your machine. Run
              <code style=\${KBD}>npm config get "@mms:registry"</code>. If it is not the URL from
              Step 1, clear the stale machine-level entry with
              <code style=\${KBD}>npm config delete "@mms:registry" --location=user</code> and redo
              Step 1.
            </td>
          </tr>
          <tr>
            <td style=\${TD}><code style=\${KBD}>404 Not Found — @mms/design-system</code></td>
            <td style=\${TD}>
              Almost always one of two things: you are not on the VPN, or Step 1 has not run in
              this folder. Check the VPN first, then
              <code style=\${KBD}>npm config get "@mms:registry"</code>.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=\${TD}>Components appear on the page but look unstyled</td>
            <td style=\${TD}>
              No <code style=\${KBD}>data-theme</code> on the
              <code style=\${KBD}>&lt;html&gt;</code> element, so no brand token resolves. Path A
              sets this for you; Path B needs you to set it.
            </td>
          </tr>
          <tr>
            <td style=\${TD}>
              <code style=\${KBD}>Failed to resolve module specifier "lit"</code>
            </td>
            <td style=\${TD}>
              A plain <code style=\${KBD}>&lt;script&gt;</code> tag pointed at a component file
              instead of the standalone file. Browsers cannot resolve bare module names without
              an import map. Use the Path A script tag.
            </td>
          </tr>
          <tr style="background: rgba(128,128,128,0.03);">
            <td style=\${TD}>
              <code style=\${KBD}>ERR_MODULE_NOT_FOUND</code> or a blank page after a build
            </td>
            <td style=\${TD}>
              Your <code style=\${KBD}>.npmrc</code> was not committed, so the build server
              resolved <code style=\${KBD}>@mms</code> from the public registry. Commit the file
              created in Step 1.
            </td>
          </tr>
          <tr>
            <td style=\${TD}>
              Step 1 printed nothing and no <code style=\${KBD}>.npmrc</code> appeared in this
              folder
            </td>
            <td style=\${TD}>
              It succeeded, just not where you were looking.
              <code style=\${KBD}>--location=project</code> walks up to the nearest ancestor
              <code style=\${KBD}>package.json</code> and writes
              <code style=\${KBD}>.npmrc</code> next to <em>that</em> — so inside a sub-folder of
              an existing project, the file lands at the project root. It exits
              <code style=\${KBD}>0</code> and says nothing either way. Confirm with
              <code style=\${KBD}>npm config get "@mms:registry"</code>, and commit the file
              wherever it actually landed.
            </td>
          </tr>
        </tbody>
      </table>

      <div
        style="background: rgba(128,128,128,0.04); border-radius: 8px; padding: 1rem; margin-bottom: 2rem; border: 1px solid rgba(128,128,128,0.1);"
      >
        <p style="margin: 0 0 0.5rem; font-size: 0.8125rem; font-weight: 600;">
          A note on <code style=\${KBD}>.npmrc</code> precedence
        </p>
        <p style="margin: 0; font-size: 0.8125rem; opacity: 0.85;">
          A <code style=\${KBD}>@mms:registry</code> line beats the
          <code style=\${KBD}>--registry</code> command-line flag. That is why this guide
          configures the scope once rather than passing a flag on every install — the flag
          cannot override a stale entry, but Step 1 replaces it.
        </p>
      </div>

      <div
        style="background: #dcfce7; border-left: 4px solid #22c55e; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; font-size: 0.8125rem; color: #166534;"
      >
        <strong>You are ready.</strong> Continue to <strong>HTML Usage</strong> or
        <strong>React Usage</strong> for component-level detail.
      </div>
    </div>
  \`
}`,...b.parameters?.docs?.source}}},x=[`Installation`]}))();export{b as Installation,x as __namedExportsOrder,y as default};