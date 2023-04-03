import{_ as l,a6 as _,r as n,o as p,c as y,a as e,w as o,d as m,F as f,e as a,t}from"./app.c45221f8.js";import d from"./YartuButton.e339b9c1.js";const g=a("Yartu Notify"),h=a(" Show Toast "),b=a(" <template >"+t(`
  `)+' <buttonclass="bg-blue-500 rounded p-2 text-white hover:bg-blue-400 hover:shadow-2"'+t(`
  `)+' @click="showToast()" >'+t(`
   `)+" Show Toast "+t(`
  `)+" </button >"+t(`
`)+" </template>"+t(`
`)+" "+t(`
`)+"<script setup>"+t(`
`)+" import { useYartuNotify }"+t(`
`)+" const yartuNotify = useYartuNotify();"+t(`
`)+" const showtoast= () =>{ "+t(`
  `)+"yartuNotify.toast({ title: 'title', massage: 'massage', });};"+t(`
 `)+"<script > "),w={__name:"yartu-notify-usage",setup(N){const r=_(),u=()=>{r.snackbar({type:"danger",title:"Something went be wrong :/",closable:!0})};return(v,s)=>{const i=n("usage"),c=n("copy-to-clip-board");return p(),y(f,null,[e(i,null,{title:o(()=>[g]),component:o(()=>[m("div",null,[e(d,{primary:"",onClick:s[0]||(s[0]=x=>u())},{default:o(()=>[h]),_:1})])]),_:1}),e(c,null,{default:o(()=>[b]),_:1})],64)}}};var Y=l(w,[["__file","yartu-notify-usage.vue"]]);export{Y as default};
