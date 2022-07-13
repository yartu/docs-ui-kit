<template>
  <usage>
    <template #title>Chip</template>
    <template #component>
      
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-collapsible-panel title="Collapsible Panel"{{
      "\n"
    }}&nbsp;&gt;&lt;/y-collapsible-panel&gt;
  </copy-to-clip-board>
</template>

<script setup>
import { ref } from "vue";

const close = ref(false);

function openPanel() {
  if (close.value == false) close.value = true;
  else close.value = false;
}
</script>
