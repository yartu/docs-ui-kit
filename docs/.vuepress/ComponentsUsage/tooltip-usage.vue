<template>
  <usage>
    <template #title>Tooltip</template>
    <template #component>
      <y-tooltip top right>
        <y-button primary>Open Tooltip</y-button>
        <template #tooltip>Hello from Tooltip!</template>
      </y-tooltip>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-tooltip top right&gt;
      {{'\n  '}} &lt;y-button primary&gt;Open Tooltip&lt;/y-button&gt;
      {{'\n   '}}&lt;template #tooltip&gt;Hello from Tooltip!&lt;/template&gt;
      {{'\n '}}&lt;/y-tooltip&gt;
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
          <td>mode</td>
          <td>String</td>
          <td>'hover'</td>
        </tr>
        <tr>
          <td>top</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>bottom</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>left</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>right</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>center</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

function getModal() {
  if (showModal.value == false) showModal.value = true;
  else showModal.value = false;
}
</script>
