import{_ as m,I as r,o as B,c as v,a,w as t,F as y,b as g,r as l,d as b,e as p,t as e}from"./app.b446640f.js";const C=p("Shaped Card"),P=p("Content Area"),S=p("Shape"),V=p("Title"),N={class:"flex flex-col gap-1"},k=g('<div class="flex flex-col mt-7 gap-1"><p class="font-semibold text-xl">Component Props</p><table><thead><tr><th>Prop Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>prefixBtn</td><td>Boolean</td><td>false</td></tr><tr><td>postfixBtn</td><td>Boolean</td><td>false</td></tr><tr><td>shape</td><td>Boolean</td><td>true</td></tr></tbody></table></div>',1),T={__name:"shaped-card-usage",setup(w){const n=r(!0),s=r(!1),o=r(!1);function d(){n.value==!1?n.value=!0:n.value=!1}function i(){s.value==!1?s.value=!0:s.value=!1}function u(){o.value==!1?o.value=!0:o.value=!1}return(D,F)=>{const f=l("y-button"),c=l("y-checkbox"),_=l("y-shaped-card"),h=l("usage"),x=l("copy-to-clip-board");return B(),v(y,null,[a(h,null,{title:t(()=>[C]),component:t(()=>[a(_,{prefixBtn:s.value,postfixBtn:o.value,shape:n.value},{content:t(()=>[P]),prefixBtn:t(()=>[a(f,{tertiary:"",icon:"yi yi-delete",square:""})]),postfixBtn:t(()=>[a(c)]),shape:t(()=>[S]),text:t(()=>[V]),_:1},8,["prefixBtn","postfixBtn","shape"])]),rightProps:t(()=>[b("div",N,[a(c,{onChange:d,inputValue:"shape",label:"Shape",class:"gap-2"}),a(c,{onChange:u,inputValue:"postfixBtn",label:"Postfix Button",class:"gap-2"}),a(c,{onChange:i,inputValue:"prefixBtn",label:"Prefix Button",class:"gap-2"})])]),_:1}),a(x,null,{default:t(()=>[p(" <y-shaped-card"+e(n.value?"":`
 :shape="false"`)+e(o.value?`
 postfixBtn`:"")+e(s.value?`
 prefixBtn`:"")+"> "+e(`
  `)+"<template #content>"+e(`
   `)+"/.../"+e(`
  `)+"</template> "+e(o.value?`
  <template #postfixBtn>
   /.../
  </template>`:"")+" "+e(s.value?`
  <template #prefixBtn>
   /.../
  </template>`:"")+" "+e(n.value?`
   <template #shape>
   Shape
  </template>`:"")+" "+e(`
  `)+"<template #text>"+e(`
   `)+"Title"+e(`
  `)+"</template> "+e(`
 `)+"</y-shaped-card> ",1)]),_:1}),k],64)}}};var A=m(T,[["__file","shaped-card-usage.vue"]]);export{A as default};
