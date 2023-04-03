import{_ as h,I as c,r as p,o as B,c as C,a,w as d,d as u,e as v,t as f,F as U,b as k}from"./app.c45221f8.js";const w=v("Tag"),T=v(" Check Out "),N={class:"flex flex-col gap-2"},P=u("p",{class:"font-semibold"},"Tag Type",-1),D={class:"flex flex-col gap-1"},O={class:"flex flex-col gap-2"},S=u("p",{class:"font-semibold"},"Tag Class",-1),A={class:"flex flex-col gap-1"},F={class:"w-full flex justify-evenly items-center"},I=k('<div class="flex flex-col mt-7 gap-1"><p class="font-semibold text-xl">Component Props</p><table><thead><tr><th>Prop Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>outline</td><td>Boolean</td><td>false</td></tr><tr><td>active</td><td>Boolean</td><td>false</td></tr><tr><td>close</td><td>Boolean</td><td>false</td></tr><tr><td>primary</td><td>Boolean</td><td>false</td></tr><tr><td>secondary</td><td>Boolean</td><td>false</td></tr><tr><td>tertiary</td><td>Boolean</td><td>false</td></tr><tr><td>danger</td><td>Boolean</td><td>false</td></tr><tr><td>success</td><td>Boolean</td><td>false</td></tr><tr><td>info</td><td>Boolean</td><td>false</td></tr><tr><td>warning</td><td>Boolean</td><td>false</td></tr></tbody></table></div>',1),j={__name:"tag-usage",setup(E){const n=c(!1),r=c(!1),i=c(!1),e=c("default"),s=c("primary");function g(){n.value==!1?n.value=!0:n.value=!1}function V(){r.value==!1?r.value=!0:r.value=!1}function y(){i.value==!1?i.value=!0:i.value=!1}return(W,t)=>{const _=p("y-tag"),o=p("y-radio"),m=p("y-checkbox"),x=p("usage"),b=p("copy-to-clip-board");return B(),C(U,null,[a(x,null,{title:d(()=>[w]),component:d(()=>[a(_,{outline:n.value,active:r.value,close:i.value,primary:s.value=="primary",secondary:s.value=="secondary",tertiary:s.value=="tertiary",danger:e.value=="danger",success:e.value=="success",info:e.value=="info",warning:e.value=="warning"},{default:d(()=>[T]),_:1},8,["outline","active","close","primary","secondary","tertiary","danger","success","info","warning"])]),rightProps:d(()=>[u("div",N,[P,u("div",D,[a(o,{class:"gap-2 text-sm",checked:"",modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),inputValue:"primary",label:"Primary"},null,8,["modelValue"]),a(o,{class:"gap-2 text-sm",modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value=l),inputValue:"secondary",label:"Secondary"},null,8,["modelValue"]),a(o,{class:"gap-2 text-sm",modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=l=>s.value=l),inputValue:"tertiary",label:"Tertiary"},null,8,["modelValue"])])]),u("div",O,[S,u("div",A,[a(o,{class:"gap-2 text-sm",checked:"",modelValue:e.value,"onUpdate:modelValue":t[3]||(t[3]=l=>e.value=l),inputValue:"default",label:"Default"},null,8,["modelValue"]),a(o,{class:"gap-2 text-sm",modelValue:e.value,"onUpdate:modelValue":t[4]||(t[4]=l=>e.value=l),inputValue:"info",label:"Info"},null,8,["modelValue"]),a(o,{class:"gap-2 text-sm",modelValue:e.value,"onUpdate:modelValue":t[5]||(t[5]=l=>e.value=l),inputValue:"success",label:"Success"},null,8,["modelValue"]),a(o,{class:"gap-2 text-sm",modelValue:e.value,"onUpdate:modelValue":t[6]||(t[6]=l=>e.value=l),inputValue:"warning",label:"Warning"},null,8,["modelValue"]),a(o,{class:"gap-2 text-sm",modelValue:e.value,"onUpdate:modelValue":t[7]||(t[7]=l=>e.value=l),inputValue:"danger",label:"Danger"},null,8,["modelValue"])])])]),bottomProps:d(()=>[u("div",F,[a(m,{onChange:V,inputValue:"active",label:"Active",class:"gap-2"}),a(m,{onChange:g,inputValue:"outline",label:"Outline",class:"gap-2"}),a(m,{onChange:y,inputValue:"close",label:"Close",class:"gap-2"})])]),_:1}),a(b,null,{default:d(()=>[v(" <y-tag "+f(s.value)+" "+f(e.value=="default"?"":e.value)+f(n.value?`
 outline`:"")+f(r.value?`
 active`:"")+f(i.value?`
 close`:"")+">Check Out</y-tag> ",1)]),_:1}),I],64)}}};var z=h(j,[["__file","tag-usage.vue"]]);export{z as default};
