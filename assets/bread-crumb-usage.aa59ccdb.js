import{_ as p,I as c,r as l,o as v,c as x,a as r,w as a,d as t,K as f,$ as g,e as n,t as h,F as y,b as z}from"./app.c45221f8.js";const C=n("Bread Crumb"),V={class:"w-auto"},N={class:"flex flex-col gap-2"},P=t("p",{class:"font-semibold"},"Crumb Size",-1),S={class:"flex flex-col"},w={class:"slidecontainer"},B=z('<div class="flex flex-col mt-7 gap-1"><p class="font-semibold text-xl">Component Props</p><table><thead><tr><th>Prop Name</th><th>Type</th><th>Required</th></tr></thead><tbody><tr><td>crumbs</td><td>Array</td><td>true</td></tr><tr><td>size</td><td>String</td><td>fasle</td></tr></tbody></table></div>',1),T={__name:"bread-crumb-usage",setup(k){const u=c(["Home","Products","Phones"]),e=c("60");function i(d){console.log(d)}return(d,s)=>{const m=l("y-breadcrumb"),_=l("usage"),b=l("copy-to-clip-board");return v(),x(y,null,[r(_,null,{title:a(()=>[C]),component:a(()=>[t("div",V,[r(m,{size:e.value==0?"xs":e.value==25?"sm":e.value==50?"md":e.value==75?"lg":e.value==100?"xl":"",crumbs:u.value,onSelected:s[0]||(s[0]=o=>i(o))},null,8,["size","crumbs"])])]),rightProps:a(()=>[t("div",N,[P,t("div",S,[t("div",w,[f(t("input",{type:"range",min:"0",max:"100",step:"25","onUpdate:modelValue":s[1]||(s[1]=o=>e.value=o),class:"slider",id:"myRange"},null,512),[[g,e.value]])])])])]),_:1}),r(b,null,{default:a(()=>[n(' <y-breadcrumb crumbs="crumbs" '+h(e.value=="0"?'size="xs"':e.value=="25"?'size="sm"':e.value=="50"?'size="md"':e.value=="75"?'size="lg"':'size="xl"')+" ></y-breadcrumb> ",1)]),_:1}),B],64)}}};var F=p(T,[["__file","bread-crumb-usage.vue"]]);export{F as default};
