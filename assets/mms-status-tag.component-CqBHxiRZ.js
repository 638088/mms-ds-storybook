import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,n as r,s as i,t as a}from"./lit-B0BZwaT1.js";import{E as o,S as s,T as c,g as l,n as u,r as d,t as f,w as p}from"./mms-icon.component-DFVI3nJi.js";import{n as m,t as h}from"./normalize-alert-type-C-qeRm_W.js";var g,_,v,y=e((()=>{a(),o(),l(),h(),f(),d(),g={success:`check`,error:`x-circle`,caution:`warning`,informational:`info`},_=`success`,v=class extends r{constructor(...e){super(...e),this.alertType=`success`,this.leftIcon=!0,this.label=``}static{this.styles=[c,n`
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
  `]}willUpdate(e){if(!e.has(`alertType`))return;let t=m(this.alertType,_);t!==this.alertType&&(this.alertType=t)}render(){return i`
      ${this.leftIcon?i`<span class="icon"><mms-icon name=${g[this.alertType]} size="sm" weight="regular"></mms-icon></span>`:t}
      <span class="label">${this.label}</span>
    `}},u([s({type:String,reflect:!0,attribute:`alert-type`})],v.prototype,`alertType`,void 0),u([s({type:Boolean,attribute:`left-icon`})],v.prototype,`leftIcon`,void 0),u([s({type:String})],v.prototype,`label`,void 0),v=u([p(`mms-status-tag`)],v)}));export{y as t};