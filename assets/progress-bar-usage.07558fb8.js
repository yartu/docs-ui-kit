import{_ as y,I as u,r as i,o as B,c as U,a as o,w as p,d as e,K as v,$ as f,e as _,t as d,F as N,b as k}from"./app.c45221f8.js";const P=_("Progress Bar"),T={class:"w-2/3"},w={class:"flex flex-col gap-2"},C=e("p",{class:"font-semibold"},"Type",-1),D={class:"flex flex-col gap-1"},R={class:"flex flex-col gap-2"},S=e("p",{class:"font-semibold"},"Indeterminate",-1),E={class:"flex flex-col gap-1"},F={class:"w-full flex items-center justify-evenly"},I={class:"flex flex-col gap-2"},M=e("p",{class:"font-semibold"},"Height",-1),j={class:"flex flex-col"},H={class:"slidecontainer"},K={class:"flex flex-col gap-2"},$=e("p",{class:"font-semibold"},"Progress",-1),q={class:"flex flex-col"},z={class:"slidecontainer"},A=["disabled"],G=k('<div class="flex flex-col mt-7 gap-1"><p class="font-semibold text-xl">Component Props</p><table><thead><tr><th>Prop Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>indeterminate</td><td>String</td><td>&#39;&#39;</td></tr><tr><td>progress</td><td>Number</td><td>30</td></tr><tr><td>height</td><td>Number</td><td>4</td></tr><tr><td>default</td><td>Boolean</td><td>false</td></tr><tr><td>success</td><td>Boolean</td><td>false</td></tr><tr><td>error</td><td>Boolean</td><td>false</td></tr><tr><td>cancel</td><td>Boolean</td><td>false</td></tr></tbody></table></div>',1),J={__name:"progress-bar-usage",setup(L){const s=u("default"),c=u(4),m=u(30),a=u("none"),r=u(!1);function g(){r.value==!1?r.value=!0:r.value=!1}return(O,t)=>{const x=i("y-progress-bar"),n=i("y-radio"),b=i("y-checkbox"),h=i("usage"),V=i("copy-to-clip-board");return B(),U(N,null,[o(h,null,{title:p(()=>[P]),component:p(()=>[e("div",T,[o(x,{transparent:r.value,progress:m.value,height:c.value,default:s.value=="default",success:s.value=="success",error:s.value=="error",cancel:s.value=="cancel",indeterminate:a.value=="none"?"":a.value},null,8,["transparent","progress","height","default","success","error","cancel","indeterminate"])])]),rightProps:p(()=>[e("div",w,[C,e("div",D,[o(n,{class:"gap-2 text-sm",checked:"",modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),inputValue:"default",label:"Default"},null,8,["modelValue"]),o(n,{class:"gap-2 text-sm",modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value=l),inputValue:"error",label:"Error"},null,8,["modelValue"]),o(n,{class:"gap-2 text-sm",modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=l=>s.value=l),inputValue:"cancel",label:"Cancel"},null,8,["modelValue"])])]),e("div",R,[S,e("div",E,[o(n,{class:"gap-2 text-sm",checked:"",modelValue:a.value,"onUpdate:modelValue":t[3]||(t[3]=l=>a.value=l),inputValue:"none",label:"None"},null,8,["modelValue"]),o(n,{class:"gap-2 text-sm",modelValue:a.value,"onUpdate:modelValue":t[4]||(t[4]=l=>a.value=l),inputValue:"rider",label:"Rider"},null,8,["modelValue"]),o(n,{class:"gap-2 text-sm",modelValue:a.value,"onUpdate:modelValue":t[5]||(t[5]=l=>a.value=l),inputValue:"move",label:"Move"},null,8,["modelValue"])]),o(b,{onChange:g,inputValue:"transparent",label:"Transparent",class:"gap-2 pt-6"})])]),bottomProps:p(()=>[e("div",F,[e("div",I,[M,e("div",j,[e("div",H,[v(e("input",{type:"range",min:"4",max:"16",step:"4","onUpdate:modelValue":t[6]||(t[6]=l=>c.value=l),class:"slider",id:"myRange"},null,512),[[f,c.value]])])])]),e("div",K,[$,e("div",q,[e("div",z,[v(e("input",{disabled:a.value!="none",type:"range",min:"0",max:"100",step:"1","onUpdate:modelValue":t[7]||(t[7]=l=>m.value=l),class:"slider",id:"myRange"},null,8,A),[[f,m.value]])])])])])]),_:1}),o(V,null,{default:p(()=>[_(" <y-progress-bar "+d(s.value)+d(r.value==!1?"":`
 transparent`)+d(a.value=="none"?"":`
 indeterminate="`+a.value+'"')+d(a.value=="none"?`
 progress="`+m.value+'"':"")+d(`
 height="`+c.value+'"')+">"+d(`
 `)+"</y-progress-bar> ",1)]),_:1}),G],64)}}};var W=y(J,[["__file","progress-bar-usage.vue"]]);export{W as default};
