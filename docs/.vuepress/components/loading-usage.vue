<template>
  <usage>
    <template #title>Loading</template>
    <template #component>
      <div class="w-1/2">
        <y-loading :progress="progress" :indeterminate="indeterminate">
          <p>Loading</p>
        </y-loading>
      </div>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-checkbox
          @change="setIndeterminate"
          inputValue="indeterminate"
          label="Indeterminate"
          class="gap-2"
        ></y-checkbox>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Progress</p>
        <div class="flex flex-col">
          <div class="slidecontainer">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              v-model="progress"
              class="slider"
              id="myRange"
            />
          </div>
        </div>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-loading{{
      indeterminate ? " indeterminate" : ' progress="' + progress + '"'
    }}&gt;{{ "\n   " }}&lt;p&gt;Loading&lt;/p&gt;{{ "\n " }}&lt;/y-loading&gt;
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
          <td>progress</td>
          <td>Number</td>
          <td>30</td>
        </tr>
        <tr>
          <td>indeterminate</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const progress = ref(30),
  indeterminate = ref(false);

function setIndeterminate() {
  if (indeterminate.value == false) {
    indeterminate.value = true;
  } else {
    indeterminate.value = false;
  }
}
</script>
