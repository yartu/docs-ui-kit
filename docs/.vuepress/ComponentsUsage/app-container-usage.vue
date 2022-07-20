<template>
  <h1 class="text-4xl">App Container</h1>



      
   
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
