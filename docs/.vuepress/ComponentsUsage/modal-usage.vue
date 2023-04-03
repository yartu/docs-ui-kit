<template>
  <usage>
    <template #title>Modal</template>
    <template #component>
      <YartuButton primary @click="openModal = true" size="lg"
        >Open Modal</YartuButton
      >
      <y-modal
        :modelValue="openModal"
        @update:modalValue="openModal = $event"
        @closed="openModal = false"
      >
        <div class="w-44 h-44 flex flex-col justify-center items-center">
          <span class="font-bold text-blue-800">Sample Modal</span>
        </div>
      </y-modal></template
    >
  </usage>
  <copy-to-clip-board>
    &lt;y-modal v-if="openModal"&gt;{{ "\n  " }}&lt;div class="p-6 w-full"&gt;{{
      "\n   "
    }}
    content {{ "\n  " }}&lt;/div&gt;{{ "\n" }}
    &lt;/y-modal&gt;
  </copy-to-clip-board>

  <div class="flex flex-col mt-7 gap-1">
    <p class="font-semibold text-xl">Component Props</p>
    <table>
      <thead>
        <tr>
          <th>Prop Name</th>
          <th>Type</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>width</td>
          <td>String</td>
          <td>'404px'</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import YartuButton from "./YartuButton.vue";
const openModal = ref(false);

// function toggleModal() {
//   if (openModal.value == false) openModal.value = true;
//   else openModal.value = false;
// }
</script>
