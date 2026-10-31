import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-B0BZwaT1.js";import{E as o,S as s,T as c,g as l,n as u,r as d,t as f,w as p}from"./mms-icon.component-DFVI3nJi.js";var m,h=e((()=>{a(),o(),l(),f(),d(),m=class extends r{constructor(...e){super(...e),this.tagStyle=`stroke`,this.colorScheme=`primary`,this.label=``,this.leftIcon=``,this.rightIcon=``}static{this.styles=[c,n`
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
  `]}render(){return i`
      ${this.leftIcon?i`<span class="icon"><mms-icon name=${this.leftIcon} size="sm" weight="regular"></mms-icon></span>`:t}
      <span class="label">${this.label}</span>
      ${this.rightIcon?i`<span class="icon"><mms-icon name=${this.rightIcon} size="sm" weight="regular"></mms-icon></span>`:t}
    `}},u([s({type:String,reflect:!0,attribute:`tag-style`})],m.prototype,`tagStyle`,void 0),u([s({type:String,reflect:!0,attribute:`color-scheme`})],m.prototype,`colorScheme`,void 0),u([s({type:String})],m.prototype,`label`,void 0),u([s({type:String,attribute:`left-icon`})],m.prototype,`leftIcon`,void 0),u([s({type:String,attribute:`right-icon`})],m.prototype,`rightIcon`,void 0),m=u([p(`mms-tag`)],m)}));export{h as t};