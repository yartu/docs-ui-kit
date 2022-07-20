<template>
<usage>
  <template #title>Card</template>
  <template #component>
    <y-card>
      <div class="flex flex-col gap-1 p-3">
        <p class="font-semibold text-lg">Some Title</p>
        <p class=" text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet tellus purus. Ut bibendum laoreet urna. Donec nec efficitur nisi. Curabitur feugiat lacinia lacus, non fermentum nunc fringilla vitae.</p>
        <y-button primary>View</y-button>
      </div>
    </y-card>
  </template>

</usage>
   <copy-to-clip-board>
    &lt;y-card&gt;{{'\n  '}}
      &lt;div class="flex flex-col gap-1 p-3"&gt;{{'\n   '}}
        &lt;p class="font-semibold text-lg"&gt;Some Title&lt;/p&gt;{{'\n   '}}
        &lt;p class=" text-sm"&gt;Lorem ipsum dolor...&lt;/p&gt;{{'\n   '}}
        &lt;y-button primary>View&lt;/y-button&gt;{{'\n  '}}
      &lt;/div&gt;{{'\n'  }}
    &lt;/y-card&gt;
   </copy-to-clip-board>
</template>

<script setup>
import { ref } from "vue";

const disabled = ref(false),
  loading = ref(false),
  icon = ref(''),
  app = ref(false),
  active = ref(false),
  spinnerBg = ref("#f8fafd"),
  spinnerColor = ref("#3663f2");

const sizeVal = ref("75");
const buttonType = ref("primary");
const buttonShape = ref(null);

function setDisabled() {
  console.log("dsb");
  if (disabled.value == false) disabled.value = true;
  else disabled.value = false;
}
function setActive() {
  console.log("act");
  if (active.value == false) {
    active.value = true;
    app.value = true;
  } else {
    active.value = false;
    app.value=false;
  }
}
function setLoading() {
  console.log("act");
  if (loading.value == false) loading.value = true;
  else loading.value = false;
}
</script>
