import{_ as B,I as r,r as d,o as g,c as y,a as t,w as a,d as b,e as c,t as e,F as C,b as S}from"./app.c45221f8.js";const V=c("Shaped Card"),P=c("Content Area"),N=c("Shape"),k=c("Title"),T={class:"flex flex-col gap-1"},w=S('<div class="flex flex-col mt-7 gap-1"><p class="font-semibold text-xl">Component Props</p><table><thead><tr><th>Prop Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>prefixBtn</td><td>Boolean</td><td>false</td></tr><tr><td>postfixBtn</td><td>Boolean</td><td>false</td></tr><tr><td>shape</td><td>Boolean</td><td>true</td></tr><tr><td>selected</td><td>Boolean</td><td>false</td></tr></tbody></table></div>',1),D={__name:"shaped-card-usage",setup(F){const s=r(!0),l=r(!1),n=r(!1),o=r(!1);function u(){s.value==!1?s.value=!0:s.value=!1}function i(){l.value==!1?l.value=!0:l.value=!1}function f(){n.value==!1?n.value=!0:n.value=!1}function _(){o.value==!1?o.value=!0:o.value=!1}return(q,A)=>{const h=d("y-button"),p=d("y-checkbox"),x=d("y-shaped-card"),v=d("usage"),m=d("copy-to-clip-board");return g(),y(C,null,[t(v,null,{title:a(()=>[V]),component:a(()=>[t(x,{prefixBtn:l.value,postfixBtn:n.value,shape:s.value,selected:o.value},{content:a(()=>[P]),prefixBtn:a(()=>[t(h,{tertiary:"",icon:"yi yi-delete",square:""})]),postfixBtn:a(()=>[t(p)]),shape:a(()=>[N]),text:a(()=>[k]),_:1},8,["prefixBtn","postfixBtn","shape","selected"])]),rightProps:a(()=>[b("div",T,[t(p,{onChange:u,inputValue:"shape",label:"Shape",class:"gap-2"}),t(p,{onChange:f,inputValue:"postfixBtn",label:"Postfix Button",class:"gap-2"}),t(p,{onChange:i,inputValue:"prefixBtn",label:"Prefix Button",class:"gap-2"}),t(p,{onChange:_,inputValue:"selected",label:"Selected",class:"gap-2"})])]),_:1}),t(m,null,{default:a(()=>[c(" <y-shaped-card"+e(s.value?"":`
 :shape="false"`)+e(o.value?`
 selected`:"")+e(n.value?`
 postfixBtn`:"")+e(l.value?`
 prefixBtn`:"")+"> "+e(`
  `)+"<template #content>"+e(`
   `)+"/.../"+e(`
  `)+"</template> "+e(n.value?`
  <template #postfixBtn>
   /.../
  </template>`:"")+" "+e(l.value?`
  <template #prefixBtn>
   /.../
  </template>`:"")+" "+e(s.value?`
   <template #shape>
   Shape
  </template>`:"")+" "+e(`
  `)+"<template #text>"+e(`
   `)+"Title"+e(`
  `)+"</template> "+e(`
 `)+"</y-shaped-card> ",1)]),_:1}),w],64)}}};var I=B(D,[["__file","shaped-card-usage.vue"]]);export{I as default};
