import{a as g,r as i,j as r}from"./index-D1PeRTMW.js";import{i as u,A as d}from"./api-BpUZQTM2.js";import{c as x,g as P,m as F,C as D,o as V}from"./index-BFH4bXUD.js";const y=["wrap","nowrap","wrap-reverse"],j=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],C=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],I=(e,s)=>{const a={};return y.forEach(t=>{a[`${e}-wrap-${t}`]=s.wrap===t}),a},L=(e,s)=>{const a={};return C.forEach(t=>{a[`${e}-align-${t}`]=s.align===t}),a[`${e}-align-stretch`]=!s.align&&!!s.vertical,a},W=(e,s)=>{const a={};return j.forEach(t=>{a[`${e}-justify-${t}`]=s.justify===t}),a};function R(e,s){return x(Object.assign(Object.assign(Object.assign({},I(e,s)),L(e,s)),W(e,s)))}const z=e=>{const{componentCls:s}=e;return{[s]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},J=e=>{const{componentCls:s}=e;return{[s]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},M=e=>{const{componentCls:s}=e,a={};return y.forEach(t=>{a[`${s}-wrap-${t}`]={flexWrap:t}}),a},T=e=>{const{componentCls:s}=e,a={};return C.forEach(t=>{a[`${s}-align-${t}`]={alignItems:t}}),a},_=e=>{const{componentCls:s}=e,a={};return j.forEach(t=>{a[`${s}-justify-${t}`]={justifyContent:t}}),a},H=()=>({}),X=P("Flex",e=>{const{paddingXS:s,padding:a,paddingLG:t}=e,n=F(e,{flexGapSM:s,flexGap:a,flexGapLG:t});return[z(n),J(n),M(n),T(n),_(n)]},H,{resetStyle:!1});var k=function(e,s){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)s.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const q=g.forwardRef((e,s)=>{const{prefixCls:a,rootClassName:t,className:n,style:h,flex:m,gap:c,children:b,vertical:f=!1,component:S="div"}=e,v=k(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:l,direction:w,getPrefixCls:$}=g.useContext(D),o=$("flex",a),[O,E,N]=X(o),G=f??(l==null?void 0:l.vertical),A=x(n,t,l==null?void 0:l.className,o,E,N,R(o,e),{[`${o}-rtl`]:w==="rtl",[`${o}-gap-${c}`]:u(c),[`${o}-vertical`]:G}),p=Object.assign(Object.assign({},l==null?void 0:l.style),h);return m&&(p.flex=m),c&&!u(c)&&(p.gap=c),O(g.createElement(S,Object.assign({ref:s,className:A,style:p},V(v,["justify","wrap","align"])),b))}),B=q,Q=({albumId:e})=>{const[s,a]=i.useState([]),t=i.useCallback(async()=>{const n=await d.getPhotos(e);a(n)},[e]);return i.useEffect(()=>{t()},[t]),r.jsx("div",{className:"album-container",children:s.map(n=>r.jsx("div",{className:"photo-container",children:r.jsx("img",{src:n.url,className:"photo-img"})}))})},U=()=>{const[e,s]=i.useState([]),a=async()=>{const t=await d.getAlbums();s(t)};return i.useEffect(()=>{a()},[]),r.jsx(B,{wrap:"wrap",gap:"middle",justify:"center",children:e.map(t=>r.jsx(Q,{albumId:t.id}))})},ee=()=>r.jsxs("div",{className:"page-wrapper",children:[r.jsx("h1",{children:"Albums"}),r.jsx(U,{})]});export{ee as default};
