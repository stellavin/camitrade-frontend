import{u as v,r as h,j as e,R as b}from"./index-3139f6c3.js";import{s as y,a as F,F as w}from"./Footer-ffda50c7.js";import{B as k}from"./Breadcrumbs-caa4fb0b.js";import{C as D}from"./CanonicalHeaders-660706f9.js";const N=({country:o,service:t,flag:u,onClick:p,showDetails:c})=>e.jsx("div",{className:`service-option ${c?"active":""}`,onClick:p,children:e.jsx("div",{className:"service-header",children:e.jsxs("h2",{className:"service-name",children:[o," ",t]})})}),E=({handleSetName:o})=>{var x,S,C;const t=y.CorporateServices,u=v(),c=new URLSearchParams(u.search).get("id"),[n,j]=h.useState(0),l=c,i=(a,r)=>{j(a===n?0:a)};h.useEffect(()=>{o(c),j(0)},[c]);const d=window.innerWidth<=768,f=(x=t[l])==null?void 0:x.map((a,r)=>e.jsxs("option",{value:r,children:[a.Country," ",a.Service]},r));return e.jsx("section",{className:"why-choose-us-sec te-pt-70 te-pb-50 te-md-pt-60 te-md-pb-50 te-sm-pt-40 te-sm-pb-20",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"service-container",children:[d&&e.jsx("div",{className:"mobile-service-select",children:e.jsxs("select",{value:n,onChange:a=>i(Number(a.target.value),t[l][Number(a.target.value)]),children:[e.jsx("option",{value:0,children:"Select a service"}),f]})}),!d&&e.jsx("div",{className:"service-list",children:e.jsx("div",{className:"service-card",children:(S=t[l])==null?void 0:S.map((a,r)=>{var g;return e.jsx("div",{children:a.Service==="Free Zone Company Solutions"?e.jsxs("div",{children:[e.jsx("h2",{className:"FreeZone",children:"Free Zone Company Solutions"}),(g=a==null?void 0:a.Content)==null?void 0:g.map((s,m)=>e.jsx(N,{country:s==null?void 0:s.Country,service:s==null?void 0:s.Service,flag:s==null?void 0:s.Flag,onClick:()=>i(m),showDetails:n===m},m))]}):e.jsx(N,{country:a==null?void 0:a.Country,service:a==null?void 0:a.Service,flag:a==null?void 0:a.Flag,onClick:()=>i(r),showDetails:n===r},r)},r)})})}),e.jsx("div",{className:`service-details ${d?"mobile":""}`,children:n!==null&&e.jsx("div",{children:e.jsx(b.Fragment,{children:(C=t[l][n])==null?void 0:C.Content})})})]})})})},O=()=>{const[o,t]=h.useState("Licensing Services");return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:`We Offer ${o.replace(/_/g," ")}`,description:`Camitrade Fiduciaries Offers ${o.replace(/_/g," ")} Services Globally | Mauritius | Seychelles | South Africa | Dubai| UAE | Cook Islands | Curacao`}),e.jsx(F,{}),e.jsx(k,{pageTitle:o.replace(/_/g," ")}),e.jsx(E,{handleSetName:t}),e.jsx(w,{})]})};export{O as default};