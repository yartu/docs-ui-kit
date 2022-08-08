<template>
  <usage>
    <template #title>Chip</template>
    <template #component>
      <y-chip :close="close">Sample Chip</y-chip>
    </template>
    <template #bottomProps>
      <y-checkbox
          @change="setClose"
          inputValue="close"
          label="Close"
          class="gap-2"
        ></y-checkbox>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-chip{{close ? ' close @close=""':''}}&gt;
      {{'\n  '}}Sample Chip{{'\n '}}&lt;/y-chip&gt;
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
          <td>close</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
const close= ref(false);

function setClose() {
  close.value = !close.value;
}
</script>
