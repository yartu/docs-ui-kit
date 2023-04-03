import p from"./YartuButton.e339b9c1.js";import{_,I as s,r as d,o as f,c as h,a,w as e,d as o,F as b,e as l,t,b as g}from"./app.c45221f8.js";const x=l("Bottom Sheet"),y={class:"flex justify-center items-center"},v=l(" Open Bottom Sheet "),B=o("h2",{class:"text-2xl font-bold mb-2"},"Header",-1),C=o("p",{class:"text-lg"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1),S=l(" <y-bottom-sheet "+t(`
`)+' :show="open"'+t(`
`)+' bg="#ffffff"'+t(`
`)+' @ClickOutside="true" > <div class="p-4">'+t(`
  `)+'<h2 class="text-xl2 font-bold md-2"> Header <h2> '+t(`
 `)+' <p class="text-lg">'+t(`
    `)+"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+t(`
 `)+" </p>"+t(`
 `)+' <button @click="closeBottomSheet" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded"> '+t(`
    `)+"Close "+t(`
  `)+"</button> "+t(`
 `)+"</y-bottom-sheet> "),w=g('<div class="flex flex-col mt-7 gap-1"><p class="font-semibold text-xl">Component Props</p><table><thead><tr><th>Prop Name</th><th>Type</th><th>Required</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td>false</td></tr><tr><td>bg</td><td>String</td><td>#ffffff</td></tr><tr><td>ignoreClickOutside</td><td>Boolean</td><td></td></tr><tr><td>classes</td><td>Array,String</td><td></td></tr></tbody></table></div>',1),k={__name:"bottom-sheet-usage",setup(N){s(["Home","Products","Phones"]),s("60");const n=s(!1);function c(){n.value=!0}function r(){n.value=!1}return s(!1),(O,P)=>{const i=d("y-bottom-sheet"),u=d("usage"),m=d("copy-to-clip-board");return f(),h(b,null,[a(u,null,{title:e(()=>[x]),component:e(()=>[o("div",y,[a(p,{primary:"",onClick:c,class:"bg-blue-500 text-white px-4 py-2 rounded"},{default:e(()=>[v]),_:1}),a(i,{class:"z-10",show:n.value,bg:"#ffffff",onClickOutside:V=>!0},{default:e(()=>[o("div",{class:"p-4 z-10"},[B,C,o("button",{onClick:r,class:"mt-4 bg-blue-500 text-white px-4 py-2 rounded"}," Close ")])]),_:1},8,["show"])])]),_:1}),a(m,null,{default:e(()=>[S]),_:1}),w],64)}}};var z=_(k,[["__file","bottom-sheet-usage.vue"]]);export{z as default};
