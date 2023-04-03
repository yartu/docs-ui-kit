import{_ as i,r as s,o as d,c as p,a as o,w as e,d as a,t,F as u,e as c,b as h}from"./app.c45221f8.js";const b=c("Carousel"),f={class:"w-full h-full relative flex justify-center items-center"},x={class:"p-8 text-center"},v=c(' <y-carousel :items="items" >'+t(`
  `)+' <template #carousel-item="{item}"'+t(`
   `)+" <div > {{ item }} </div>"+t(`
  `)+" </template >"+t(`
   `)+'<template #prev-btn"/>'+t(`
  `)+" <template #next-btn /> "+t(`
`)+" </y-carousel> "),y=h('<div class="flex flex-col mt-7 gap-1"><p class="font-semibold text-xl">Component Props</p><table><thead><tr><th>Prop Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>items</td><td>Object</td><td>{ }</td></tr></tbody></table></div>',1),I={__name:"carousel-usage",setup(g){const l=["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6","Item 7","Item 8"];return(N,C)=>{const n=s("y-carousel"),r=s("usage"),m=s("copy-to-clip-board");return d(),p(u,null,[o(r,null,{title:e(()=>[b]),component:e(()=>[a("div",f,[o(n,{class:"absolute",items:l},{"carousel-item":e(({item:_})=>[a("div",x,t(_),1)]),"prev-btn":e(()=>[]),"next-btn":e(()=>[]),_:1})])]),_:1}),o(m,null,{default:e(()=>[v]),_:1}),y],64)}}};var w=i(I,[["__file","carousel-usage.vue"]]);export{w as default};
