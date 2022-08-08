<template>
  <usage>
    <template #title>Chip Group</template>
    <template #component>
      <y-chip :close="close">Sample Chip</y-chip>
      <y-chip :close="close">Sample Chip</y-chip>
      <y-chip :close="close">Sample Chip</y-chip>
      <y-chip :close="close">Sample Chip</y-chip>
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

</script>
