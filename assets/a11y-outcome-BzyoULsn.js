import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{s as t,t as n}from"./lit-B0BZwaT1.js";import{t as r}from"./mms-inline-alert.component-Byp5LNfw.js";import{a as i,c as a,u as o}from"./doc-styles-DkvR_Qyb.js";var s,c,l,u,d,f,p,m,h,g,_,v,y=e((()=>{n(),r(),a(),s={"N/A":[`#eff6ff`,`#1e40af`],"PAGE-LEVEL":[`#f5f3ff`,`#5b21b6`],MANUAL:[`#f9fafb`,`#374151`],"BUILD GAP":[`#fff7ed`,`#9a3412`],FAIL:[`#fef2f2`,`#991b1b`],PASS:[`#f0fdf4`,`#166534`]},c=`display: inline-block; padding: 3px 10px; border-radius: 4px; font-size: 11px; font-weight: 700; white-space: nowrap;`,l=(e,n)=>{let[r,i]=s[n]??s[`N/A`];return t`<span style="${c} background: ${r}; color: ${i};">${e}</span>`},u=e=>{let[n,r]=s[e]??s[`N/A`];return t`<span style="${c} background: ${n}; color: ${r};">${e}</span>`},d={1:`PASS`,2:`N/A`,3:`BUILD GAP`},f=e=>{let[t,n]=s[d[e]];return{label:`TIER ${e}`,bg:t,color:n}},p=c,m=e=>{let{label:n,bg:r,color:i}=f(e);return t`<span style="${c} background: ${r}; color: ${i};">${n}</span>`},h=()=>t`<span style="background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 3px; font-size: 12px; font-weight: 600;">2.2</span>`,g=e=>{let n=e.filter(e=>e.result===`MANUAL`);if(n.length===0)return``;let r=n.map(e=>e.sc).join(`, `);return t`
    <div style="margin: 0 0 ${o.content};">
      <mms-inline-alert
        alert-type="caution"
        .dismissible=${!1}
        summary="${n.length} criteria require manual review:"
        message="${r} — see Implementation column below."
      ></mms-inline-alert>
    </div>
  `},_=()=>t`
  <div style="margin: 0 0 ${o.content};">
    <mms-inline-alert
      alert-type="informational"
      .dismissible=${!1}
      message="Only Success Criteria applicable to this component's role and content type are listed above — omitted SCs were evaluated and found not applicable, not overlooked."
    ></mms-inline-alert>
  </div>
`,v=e=>t`
  ${g(e)}
  <table style="${i.table} margin-bottom: ${o.content};">
    <thead>
      <tr>
        <th style="${i.th}">Criterion</th>
        <th style="${i.th}">Requirement</th>
        <th style="${i.th}">Result</th>
        <th style="${i.th}">Implementation</th>
      </tr>
    </thead>
    <tbody>
      ${e.map(e=>t`
          <tr>
            <td style="${i.td}">
              <strong>${e.sc}</strong> ${e.name}
              ${e.isNew22?h():``}
            </td>
            <td style="${i.td}">${e.requirement}</td>
            <td style="${i.td}">${u(e.result)}</td>
            <td style="${i.td}">${e.implementation}</td>
          </tr>
        `)}
    </tbody>
  </table>
  ${_()}
`}));export{v as a,u as i,y as n,m as o,l as r,f as s,p as t};