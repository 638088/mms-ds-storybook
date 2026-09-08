const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./icon-svgs-Bccdi0p1.js","./rolldown-runtime-DaJ6WEGw.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t,t as n}from"./preload-helper-si3HNj2m.js";import{c as r,i,m as a,n as o,o as s,s as c,t as l}from"./lit-CBo78ikN.js";import{d as u,l as d,n as f,r as p,s as m,t as h}from"./decorate-Bygya6Tu.js";import{r as g,t as _}from"./focus.css-BrGuLyxh.js";var v,y,b,x=e((()=>{v={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},y=e=>(...t)=>({_$litDirective$:e,values:t}),b=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})),S,C=e((()=>{r(),x(),S=class extends b{constructor(e){if(super(e),this.it=i,e.type!==v.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===i||e==null)return this._t=void 0,this.it=e;if(e===s)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}},S.directiveName=`unsafeHTML`,S.resultType=1,y(S)})),w,T,E=e((()=>{x(),C(),w=class extends S{},w.directiveName=`unsafeSVG`,w.resultType=2,T=y(w)})),D=e((()=>{E()}));function O(){return A||=n(()=>import(`./icon-svgs-Bccdi0p1.js`).then(e=>{k=e.default||e}),__vite__mapDeps([0,1]),import.meta.url).catch(e=>{console.warn(`mms-icon: failed to load SVG registry`,e)}),A}var k,A,j,M=e((()=>{l(),p(),D(),g(),f(),t(),k={},A=null,j=class extends o{constructor(...e){super(...e),this.name=`question`,this.size=`lg`,this.weight=`regular`,this.label=``,this.badge=``,this._svgsLoaded=!1}static{this.styles=[_,a`
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
    `]}get badgeType(){return this.badge?this.badge===`dot`?`dot`:`count`:null}get badgeText(){let e=parseInt(this.badge,10);return isNaN(e)?this.badge:e>99?`99+`:String(e)}render(){this._svgsLoaded||O().then(()=>{this._svgsLoaded=!0});let e=k[this.name],t=this.badgeType;if(!e)return c`<svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      ><rect x="32" y="32" width="192" height="192" fill="none" stroke="currentColor" stroke-width="16" rx="8"/></svg>`;let n=e[this.weight]??e.regular,r=!this.label;return c`
      <svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        ?aria-hidden=${r}
        role=${r?`presentation`:`img`}
        aria-label=${r?``:this.label}
      >${T(n)}</svg>
      ${t?c`<span class="badge ${t}" aria-hidden="true">${t===`count`?this.badgeText:i}</span>`:i}
    `}},h([d({type:String})],j.prototype,`name`,void 0),h([d({type:String})],j.prototype,`size`,void 0),h([d({type:String})],j.prototype,`weight`,void 0),h([d({type:String})],j.prototype,`label`,void 0),h([d({type:String})],j.prototype,`badge`,void 0),h([m()],j.prototype,`_svgsLoaded`,void 0),j=h([u(`mms-icon`)],j)}));export{y as a,v as c,T as i,D as n,b as o,E as r,x as s,M as t};