<template>
  <usage>
    <template #title>Accordion</template>
    <template #component
      ><y-accordion collapse class="accordion" title="Sample" :icon="icon" :hr="hr"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
        tellus purus. Ut bibendum laoreet urna. Donec nec efficitur nisi.
        Curabitur feugiat lacinia lacus, non fermentum nunc fringilla vitae.
      </y-accordion></template
    >
    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-checkbox
          @change="setHRTrue"
          inputValue="hr"
          checked
          label="HR"
          class="gap-2"
        ></y-checkbox>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Icon</p>
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2">
            <y-radio v-model="icon" inputValue=""></y-radio>
            <p class="text-base">None</p>
          </div>
          <div class="flex items-center gap-2">
            <y-radio
              checked
              v-model="icon"
              inputValue="yi yi-arrow-right"
            ></y-radio>
            <i class="yi yi-arrow-right"></i>
          </div>
          <div class="flex items-center gap-2">
            <y-radio v-model="icon" inputValue="yi yi-arrow-down"></y-radio>
            <i class="yi yi-arrow-down"></i>
          </div>
        </div>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-accordion collapse title="Sample"{{ icon == "" ? "" : '\n icon="' + icon + '"'
    }}{{ hr ? "\n hr" : "" }}&gt;Lorem ipsum dolo...&lt;/y-accordion&gt;
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
          <td>title</td>
          <td>String</td>
          <td>'Accordion'</td>
        </tr>
        <tr>
          <td>prefix</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>hr</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>collapse</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hr = ref(true);
const icon = ref("yi yi-arrow-right");

function setHRTrue() {
  if (hr.value == false) hr.value = true;
  else hr.value = false;
}
</script>

<style>
.accordion {
  width: 75% !important;
}
</style>
