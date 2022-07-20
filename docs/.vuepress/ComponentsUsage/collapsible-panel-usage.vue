<template>
  <usage>
    <template #title>Collapsible Panel</template>
    <template #component>
      <y-button secondary @click="openPanel">Open Panel</y-button>
      <y-collapsible-panel
        :close="close"
        :collapse="collapse"
        title="Collapsible Panel"
      >
        <template #content>
          <div class="p-3">
            <p class=" font-semibold text-xl">Some content here</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet tellus purus. Ut bibendum laoreet urna. Donec nec efficitur nisi. Curabitur feugiat lacinia lacus, non fermentum nunc fringilla vitae.</p>
          </div>
        </template>
      </y-collapsible-panel>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-collapsible-panel title="Collapsible Panel"{{
      "\n"
    }}&nbsp;&gt;&lt;/y-collapsible-panel&gt;
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
          <td>collapse</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>close</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>'Collapsible panel'</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const close = ref(false);

function openPanel() {
  if (close.value == false) close.value = true;
  else close.value = false;
}
</script>
