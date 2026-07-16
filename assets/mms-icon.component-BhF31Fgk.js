const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./icon-svgs-D9_QYXhA.js","./preload-helper-BdFrVu1K.js"])))=>i.map(i=>d[i]);
import{i as e,n as t,t as n}from"./preload-helper-BdFrVu1K.js";import{a as r,c as i,d as a,i as o,l as s,n as c,o as l,s as u,t as d,u as f}from"./iframe-BmVhdvF8.js";var p,m=e((()=>{p=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})}}));function h(e){return(t,n)=>typeof n==`object`?_(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var g,_,v=e((()=>{s(),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:i},_=(e=g,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)}}));function y(e){return h({...e,state:!0,attribute:!1})}var b=e((()=>{v()})),x=e((()=>{})),S=e((()=>{})),C=e((()=>{})),w=e((()=>{})),T=e((()=>{})),E=e((()=>{})),D=e((()=>{m(),v(),b(),x(),S(),C(),w(),T(),E()})),O,k=e((()=>{d(),O=a`
  :focus-visible {
    outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`,a`
  :focus-visible {
    outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color);
    outline-offset: var(--focus-ring-inset-offset);
  }
`})),A,j,M,N=e((()=>{A={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},j=e=>(...t)=>({_$litDirective$:e,values:t}),M=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})),P,F=e((()=>{u(),N(),P=class extends M{constructor(e){if(super(e),this.it=o,e.type!==A.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===o||e==null)return this._t=void 0,this.it=e;if(e===r)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}},P.directiveName=`unsafeHTML`,P.resultType=1,j(P)})),I,L,R=e((()=>{N(),F(),I=class extends P{},I.directiveName=`unsafeSVG`,I.resultType=2,L=j(I)})),z=e((()=>{R()}));function B(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var V=e((()=>{}));function H(){return W||=n(()=>import(`./icon-svgs-D9_QYXhA.js`).then(e=>{U=e.default||e}),__vite__mapDeps([0,1]),import.meta.url).catch(e=>{console.warn(`mms-icon: failed to load SVG registry`,e)}),W}var U,W,G,K=e((()=>{d(),D(),z(),k(),V(),t(),U={},W=null,G=class extends c{constructor(...e){super(...e),this.name=`question`,this.size=`lg`,this.weight=`regular`,this.label=``,this.badge=``,this._svgsLoaded=!1}static{this.styles=[O,a`
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
        right: -3px;
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
    `]}get badgeType(){return this.badge?this.badge===`dot`?`dot`:`count`:null}get badgeText(){let e=parseInt(this.badge,10);return isNaN(e)?this.badge:e>99?`99+`:String(e)}render(){this._svgsLoaded||H().then(()=>{this._svgsLoaded=!0});let e=U[this.name],t=this.badgeType;if(!e)return l`<svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      ><rect x="32" y="32" width="192" height="192" fill="none" stroke="currentColor" stroke-width="16" rx="8"/></svg>`;let n=e[this.weight]??e.regular,r=!this.label;return l`
      <svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        ?aria-hidden=${r}
        role=${r?`presentation`:`img`}
        aria-label=${r?``:this.label}
      >${L(n)}</svg>
      ${t?l`<span class="badge ${t}" aria-hidden="true">${t===`count`?this.badgeText:o}</span>`:o}
    `}},B([h({type:String})],G.prototype,`name`,void 0),B([h({type:String})],G.prototype,`size`,void 0),B([h({type:String})],G.prototype,`weight`,void 0),B([h({type:String})],G.prototype,`label`,void 0),B([h({type:String})],G.prototype,`badge`,void 0),B([y()],G.prototype,`_svgsLoaded`,void 0),G=B([p(`mms-icon`)],G)}));export{k as a,h as c,O as i,m as l,B as n,D as o,V as r,v as s,K as t,p as u};