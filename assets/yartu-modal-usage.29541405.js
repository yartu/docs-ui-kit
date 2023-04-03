import{_,a5 as i,I as c,r as s,o as y,c as f,a as l,w as o,F as v,e as u,d as r,t as e}from"./app.c45221f8.js";import M from"./YartuButton.e339b9c1.js";const g=u("Yartu Modal"),b=u("Open Modal"),x=r("div",{class:"w-44 h-44 flex flex-col justify-center items-center"},[r("span",{class:"font-bold text-blue-800"},"Sample Modal")],-1),h=u(" <template >"+e(`
  `)+' <button class="bg-blue-500 rounded p-2 text-white hover:bg-blue-400 hover:shadow-2"'+e(`
  `)+' @click="openModal()" >'+e(`
   `)+" Open Modal "+e(`
  `)+" </button >"+e(`
`)+" </template>"+e(`
`)+" "+e(`
`)+"<script setup>"+e(`
`)+" import { useYartuModal }"+e(`
`)+"import { SampleModal }"+e(`
`)+" const yartuModal = useYartuModal();"+e(`
`)+" const openModal= () =>{ "+e(`
  `)+"yartuModal.open(SampleModal, { max-width: '32.5rem', min-width: '32.5rem', });};"+e(`
 `)+"<script > "),w=r("p",null," Usage: You should add '<yartu-modal></yartu-modal>' to your project App.vue for open yartu modal! ",-1),V={__name:"yartu-modal-usage",setup(Y){i();const a=c(!1);return(k,t)=>{const d=s("y-modal"),p=s("usage"),m=s("copy-to-clip-board");return y(),f(v,null,[l(p,null,{title:o(()=>[g]),component:o(()=>[l(M,{primary:"",onClick:t[0]||(t[0]=n=>a.value=!0),size:"lg"},{default:o(()=>[b]),_:1}),l(d,{modelValue:a.value,"onUpdate:modalValue":t[1]||(t[1]=n=>a.value=n),onClosed:t[2]||(t[2]=n=>a.value=!1)},{default:o(()=>[x]),_:1},8,["modelValue"])]),_:1}),l(m,null,{default:o(()=>[h]),_:1}),w],64)}}};var S=_(V,[["__file","yartu-modal-usage.vue"]]);export{S as default};
