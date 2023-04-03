import{_ as B,I as r,r as u,o as i,c as S,a as e,w as t,q as p,m as b,d as V,e as f,t as s,F as N,b as H}from"./app.c45221f8.js";const P=f("Snackbar"),w=f("Open Snackbar"),D=f(" Hello from Snackbar! "),F={class:"flex flex-col gap-1"},L=f(" Hello from Snackbar! "),O=H('<div class="flex flex-col mt-7 gap-1"><p class="font-semibold text-xl">Component Props</p><table><thead><tr><th>Prop Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>bottom</td><td>Boolean</td><td>false</td></tr><tr><td>left</td><td>Boolean</td><td>false</td></tr><tr><td>right</td><td>Boolean</td><td>false</td></tr><tr><td>center</td><td>Boolean</td><td>false</td></tr></tbody></table></div>',1),R={__name:"snackbar-usage",setup(T){const c=r(!1),a=r(!0),l=r(!1),o=r(!0),n=r(!1);function h(){c.value==!1?c.value=!0:c.value=!1}function v(){a.value==!1?a.value=!0:a.value=!1}function m(){l.value==!1?l.value=!0:l.value=!1}function g(){n.value==!1?n.value=!0:n.value=!1}function k(){o.value==!1?o.value=!0:o.value=!1}return(q,E)=>{const y=u("y-button"),_=u("y-snackbar"),d=u("y-checkbox"),x=u("usage"),C=u("copy-to-clip-board");return i(),S(N,null,[e(x,null,{title:t(()=>[P]),component:t(()=>[e(y,{secondary:"",onClick:h},{default:t(()=>[w]),_:1}),c.value?(i(),p(_,{key:0,bottom:a.value,left:l.value,right:o.value,center:n.value},{default:t(()=>[D]),_:1},8,["bottom","left","right","center"])):b("",!0)]),rightProps:t(()=>[V("div",F,[e(d,{onChange:v,inputValue:"bottom",checked:"",label:"Bottom",class:"gap-2"}),e(d,{onChange:k,inputValue:"right",checked:"",label:"Right",class:"gap-2"}),e(d,{onChange:m,inputValue:"left",label:"Left",class:"gap-2"}),e(d,{onChange:g,inputValue:"center",label:"Center",class:"gap-2"})])]),_:1}),e(C,null,{default:t(()=>[f(" <y-snackbar"+s(a.value?`
 bottom`:"")+s(l.value?`
 left`:"")+s(o.value?`
 right`:"")+s(n.value?`
 center`:"")+">"+s(`
  `)+"Hello from Snackbar!"+s(`
 `)+"</y-snackbar> ",1),c.value?(i(),p(_,{key:0,bottom:a.value,left:l.value,right:o.value,center:n.value},{default:t(()=>[L]),_:1},8,["bottom","left","right","center"])):b("",!0)]),_:1}),O],64)}}};var U=B(R,[["__file","snackbar-usage.vue"]]);export{U as default};
