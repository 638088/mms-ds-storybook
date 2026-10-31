const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./icon-svgs-Bccdi0p1.js","./rolldown-runtime-DaJ6WEGw.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t,t as n}from"./preload-helper-si3HNj2m.js";import{c as r,d as i,f as a,i as o,m as s,n as c,o as l,p as u,s as d,t as f}from"./lit-B0BZwaT1.js";var p,m=e((()=>{f(),p=s`
  :host([hidden]) {
    display: none !important;
  }
`})),h,g=e((()=>{h=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})}}));function _(e){return(t,n)=>typeof n==`object`?y(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var v,y,b=e((()=>{a(),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:i},y=(e=v,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)}}));function x(e){return _({...e,state:!0,attribute:!1})}var S=e((()=>{b()})),C=e((()=>{})),w,T=e((()=>{w=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n)}));function E(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return w(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return w(n,r,{get(){return a(this)}})}}var D=e((()=>{T()})),O=e((()=>{})),k=e((()=>{})),A=e((()=>{})),j=e((()=>{})),M=e((()=>{g(),b(),S(),C(),D(),O(),k(),A(),j()})),N,P,F=e((()=>{f(),N=s`
  :focus-visible {
    outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`,P=s`
  :focus-visible {
    outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
    outline-offset: var(--focus-ring-inset-offset);
  }
`})),I,L,R,z=e((()=>{I={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},L=e=>(...t)=>({_$litDirective$:e,values:t}),R=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})),B,V,H=e((()=>{r(),z(),B=class extends R{constructor(e){if(super(e),this.it=o,e.type!==I.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===o||e==null)return this._t=void 0,this.it=e;if(e===l)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}},B.directiveName=`unsafeHTML`,B.resultType=1,V=L(B)})),U,W,G=e((()=>{z(),H(),U=class extends B{},U.directiveName=`unsafeSVG`,U.resultType=2,W=L(U)})),K=e((()=>{G()}));function q(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var J=e((()=>{}));function Y(){return Z||=n(()=>import(`./icon-svgs-Bccdi0p1.js`).then(e=>{X=e.default||e}),__vite__mapDeps([0,1]),import.meta.url).catch(e=>{console.warn(`mms-icon: failed to load SVG registry`,e)}),Z}var X,Z,Q,$=e((()=>{f(),m(),M(),K(),F(),J(),t(),X={},Z=null,Q=class extends c{constructor(...e){super(...e),this.name=`question`,this.size=`lg`,this.weight=`regular`,this.label=``,this.badge=``,this._svgsLoaded=!1}static{this.styles=[p,N,s`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: var(--icon-size-lg, 24px);
        height: var(--icon-size-lg, 24px);
        color: currentColor;
      }
      :host([size='sm']) { width: var(--icon-size-sm, 16px); height: var(--icon-size-sm, 16px); }
      :host([size='md']) { width: var(--icon-size-md, 20px); height: var(--icon-size-md, 20px); }
      :host([size='xl']) { width: var(--icon-size-xl, 32px); height: var(--icon-size-xl, 32px); }

      svg {
        display: block;
        width: 100%;
        height: 100%;
        fill: currentColor;
      }

      .badge {
        position: absolute;
        top: -3px;
        inset-inline-end: -3px;
        background: var(--color-utility-notification);
        border: 1px solid var(--color-utility-on-fill);
        border-radius: 9999px;
        pointer-events: none;
      }

      .badge.dot {
        width: 8px;
        height: 8px;
      }

      .badge.count {
        min-width: 14px;
        height: 14px;
        padding: 0 3px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 8px;
        font-weight: 700;
        line-height: 1;
        color: var(--color-utility-on-fill);
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }
    `]}get badgeType(){return this.badge?this.badge===`dot`?`dot`:`count`:null}get badgeText(){let e=parseInt(this.badge,10);return isNaN(e)?this.badge:e>99?`99+`:String(e)}render(){this._svgsLoaded||Y().then(()=>{this._svgsLoaded=!0});let e=X[this.name],t=this.badgeType;if(!e)return d`<svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      ><rect x="32" y="32" width="192" height="192" fill="none" stroke="currentColor" stroke-width="16" rx="8"/></svg>`;let n=e[this.weight]??e.regular,r=!this.label;return d`
      <svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        ?aria-hidden=${r}
        role=${r?`presentation`:`img`}
        aria-label=${r?``:this.label}
      >${W(n)}</svg>
      ${t?d`<span class="badge ${t}" aria-hidden="true">${t===`count`?this.badgeText:o}</span>`:o}
    `}},q([_({type:String})],Q.prototype,`name`,void 0),q([_({type:String})],Q.prototype,`size`,void 0),q([_({type:String})],Q.prototype,`weight`,void 0),q([_({type:String})],Q.prototype,`label`,void 0),q([_({type:String})],Q.prototype,`badge`,void 0),q([x()],Q.prototype,`_svgsLoaded`,void 0),Q=q([h(`mms-icon`)],Q)}));export{g as C,m as E,_ as S,p as T,E as _,G as a,x as b,V as c,z as d,I as f,M as g,F as h,K as i,L as l,P as m,q as n,W as o,N as p,J as r,H as s,$ as t,R as u,D as v,h as w,b as x,S as y};