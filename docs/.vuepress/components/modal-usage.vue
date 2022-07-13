<template>
  <usage>
    <template #title>Modal</template>
    <template #component>
      <y-button primary @click="toggleModal()" size="lg">Open Modal</y-button>
      <y-modal v-if="openModal"  @close="toggleModal()">
        <div class=" p-6 w-full ">
            Some content here
        </div> 
      </y-modal></template>
  </usage>
  <copy-to-clip-board>
    &lt;y-modal v-if="openModal"&gt;{{
    '\n  '}}&lt;div class="p-6 w-full"&gt;{{'\n   '}}
    Some content here{{'\n  '}}&lt;/div&gt;{{'\n'}}
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

const openModal = ref(false);

function toggleModal() {
  if (openModal.value == false) openModal.value = true;
  else openModal.value = false;
}
</script>
