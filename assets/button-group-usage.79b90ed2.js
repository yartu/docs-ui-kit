import{_ as d,I as u,r as n,o as m,c as b,a,w as e,d as g,t,F as y,e as s}from"./app.c45221f8.js";const v=s("Button Group"),O={class:"subtitle-4 text-BLACK-2 truncate relative z-1"},f=s(" >"),x=s(" <y-button-group"+t(`
`)+' v-model="selected"'+t(`
`)+` :option-label="'name'"`+t(`
`)+` :data-key="'value'"`+t(`
`)+' :options="buttonOptions">'+t(`
  `)+' <template #option="{option}>'+t(`
   `)+' <span class="subtitle-4 text-BLACK-2 truncate relative z-1">'+t(`
      `)+"option.name"+t(`
    `)+"</span>"+t(`
  `)+" </template>"+t(`
`)+" </y-button-group> "),B={__name:"button-group-usage",setup(V){const i=u([{id:1,name:"Option 1",label:"Option 1",type:"primary"},{id:2,name:"Option 2",label:"Option 1",type:"secondary"},{id:3,name:"Option 3",label:"Option 1",type:"danger"}]),p=u();return(h,l)=>{const r=n("y-button-group"),c=n("usage"),_=n("copy-to-clip-board");return m(),b(y,null,[a(c,null,{title:e(()=>[v]),component:e(()=>[a(r,{modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=o=>p.value=o),"option-label":"name","data-key":"value",options:i.value},{option:e(({option:o})=>[g("span",O,t(o.name),1)]),_:1},8,["modelValue","options"]),f]),_:1}),a(_,null,{default:e(()=>[x]),_:1})],64)}}};var C=d(B,[["__file","button-group-usage.vue"]]);export{C as default};
