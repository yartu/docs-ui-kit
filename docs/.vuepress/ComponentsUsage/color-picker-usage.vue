<template>
  <usage>
    <template #title>Color Picker</template>
    <template #component>
      <y-color-picker v-model="color"
      :showSwatches="showSwatches"
      :disabled="disabled"
      ></y-color-picker>
    </template>
    <template #bottomProps>
      <div class="w-full flex justify-evenly items-center">
        <y-checkbox
          @change="setDisabled"
          inputValue="disabled"
          label="Disabled"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setShowSwatches"
          inputValue="showSwatches"
          label="Show Swatches"
          class="gap-2"
        ></y-checkbox>
        <pre class="!p-0 flex items-center justify-center">
        <p>Color: {{ color == null ?'Choose a color':color }}</p>
        </pre
        >
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-color-picker v-model="color"{{ disabled ?'\n  disabled':''}}{{showSwatches?'':'\n  showSwatches'}}&gt;&lt;/y-color-picker&gt;
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
          <td>colors</td>
          <td>Object</td>
          <td>null</td>
        </tr>
        <tr>
          <td>showSwatches</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <p><span class="font-semibold">Note: </span>If you want to use your own color palette, create list like this<br>colorsPalette=['#ffffff','#000000',...] and give colors prop to this list. </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const color = ref(),showSwatches=ref(true),disabled=ref(false);


function setDisabled() {
  if (disabled.value == false) disabled.value = true;
  else disabled.value = false;
}
function setShowSwatches() {
  if (showSwatches.value == false) showSwatches.value = true;
  else showSwatches.value = false;
}
</script>
