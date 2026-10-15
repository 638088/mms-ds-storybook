import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{m as t,n,s as r,t as i}from"./lit-CBo78ikN.js";import{d as a,l as o,n as s,r as c,t as l}from"./decorate-Bygya6Tu.js";import{r as u,t as d}from"./focus.css-BrGuLyxh.js";var f,p=e((()=>{i(),c(),u(),s(),f=class extends n{constructor(...e){super(...e),this.target=`main-content`,this.label=`Skip to main content`,this.local=!1}static{this.shadowRootOptions={...n.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[d,t`
      :host {
        /* No box of its own — the only rendered content is the fixed-position
           anchor below, which is removed from normal flow regardless of the
           host's display value. display: contents keeps this element from
           ever participating in a consumer's layout (flex/grid gaps, etc.). */
        display: contents;
      }

      /* Clipped rather than offset off-screen: an offset (e.g. a negative
         top) only leaves the viewport when nothing else pushes it back in —
         clipping to 1x1px hides it everywhere while keeping it focusable and
         in the tab order. Mirrors the technique mms-header used inline
         before this component existed to compose. */
      .skip-link {
        position: fixed;
        top: var(--spacing-sm1);
        left: var(--spacing-md1);
        width: 1px;
        height: 1px;
        /* Collapsed state must stay a true 1x1px box with zero footprint —
           padding lives on :focus below instead of here. position: fixed
           would hide a padded collapsed box from any ancestor's layout
           regardless, but mms-header's "local" mode (position: absolute,
           relative to its own box) would expose that padding as real
           scrollHeight overflow at 200% zoom (WCAG 1.4.4) — caught by
           header.a11y.ts even though nothing is visibly clipped, since
           clip-path only hides paint, not layout footprint. */
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
        z-index: 200;
        background: var(--color-surface-raised);
        color: var(--color-text-default);
        border-radius: var(--radius-xs);
        text-decoration: none;
        font-family: var(--font-family-body);
        font-size: var(--type-body-md-size);
      }

      .skip-link:focus {
        width: auto;
        height: auto;
        overflow: visible;
        clip-path: none;
        padding: var(--spacing-sm1) var(--spacing-md1);
      }

      /* local mode: anchor below the composing parent's own box (e.g.
         mms-header's bottom edge) instead of the viewport corner, so the
         revealed link doesn't land on top of that parent's own content at
         the same fixed coordinates. margin-top is focus-only, same reason
         as :focus's own padding above — applied to the collapsed 1x1px box
         it would push past the parent's edge and reproduce the identical
         200%-zoom scrollHeight overflow this file was just fixed for. */
      :host([local]) .skip-link {
        position: absolute;
        top: 100%;
        left: 0;
      }

      :host([local]) .skip-link:focus {
        margin-top: var(--spacing-xs2);
      }
    `]}render(){return r`<a class="skip-link" href="#${this.target}">${this.label}</a>`}},l([o({type:String})],f.prototype,`target`,void 0),l([o({type:String})],f.prototype,`label`,void 0),l([o({type:Boolean,reflect:!0})],f.prototype,`local`,void 0),f=l([a(`mms-skip-link`)],f)}));export{p as t};