<template>
  <usage>
    <template #title>Snackbar</template>
    <template #component>
      <y-button secondary @click="openSnackbar">Open Snackbar</y-button>
      <y-snackbar
        v-if="isSnackbarOpen"
        :bottom="bottom"
        :left="left"
        :right="right"
        :center="center"
      >
        Hello from Snackbar!
      </y-snackbar>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-checkbox
          @change="setBottom"
          inputValue="bottom"
          checked
          label="Bottom"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setRight"
          inputValue="right"
          checked
          label="Right"
          class="gap-2"
        ></y-checkbox>

        <y-checkbox
          @change="setLeft"
          inputValue="left"
          label="Left"
          class="gap-2"
        ></y-checkbox>

        <y-checkbox
          @change="setCenter"
          inputValue="center"
          label="Center"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-snackbar{{ bottom ? "\n bottom" : "" }}{{ left ? "\n left" : ""
    }}{{ right ? "\n right" : "" }}{{ center ? "\n center" : "" }}&gt;{{
      "\n  "
    }}Hello from Snackbar!{{ "\n " }}&lt;/y-snackbar&gt;

    <y-snackbar
      v-if="isSnackbarOpen"
      :bottom="bottom"
      :left="left"
      :right="right"
      :center="center"
    >
      Hello from Snackbar!
    </y-snackbar>
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

const isSnackbarOpen = ref(false),
  bottom = ref(true),
  left = ref(false),
  right = ref(true),
  center = ref(false);

function openSnackbar() {
  if (isSnackbarOpen.value == false) isSnackbarOpen.value = true;
  else isSnackbarOpen.value = false;
}

function setBottom() {
  if (bottom.value == false) bottom.value = true;
  else bottom.value = false;
}

function setLeft() {
  if (left.value == false) left.value = true;
  else left.value = false;
}

function setCenter() {
  if (center.value == false) center.value = true;
  else center.value = false;
}

function setRight() {
  if (right.value == false) right.value = true;
  else right.value = false;
}
</script>
