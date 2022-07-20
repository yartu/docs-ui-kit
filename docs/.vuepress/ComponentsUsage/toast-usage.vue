<template>
  <usage>
    <template #title>Toast</template>
    <template #component>
      <div class="relative">
        <y-button secondary @click="openToast">Open Toast</y-button>
        <y-toast v-if="toast" :bottom="bottom" :left="left"
          >Toast Sample</y-toast
        >
      </div>
    </template>
    <template #bottomProps>
      <div class="w-full flex justify-evenly items-center">
        <y-checkbox
          @change="setBottom"
          inputValue="bottom"
          label="Bottom"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setLeft"
          inputValue="left"
          label="Left"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-toast{{ bottom ? "\n bottom" : ""
    }}{{ left ? "\n left" : "" }}&gt;Toast Sample&lt;/y-toast&gt;
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
          <td>type</td>
          <td>String</td>
          <td>'succes'</td>
        </tr>
        <tr>
          <td>bg</td>
          <td>String</td>
          <td>'#49ab5eff'</td>
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
          <td>maxToasts</td>
          <td>Number, Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>Number, Boolean</td>
          <td>3000</td>
        </tr>
        <tr>
          <td>dismissible</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>queue</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>pauseOnHover</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>onClose</td>
          <td>Function</td>
          <td>() => {}</td>
        </tr>
        <tr>
          <td>onClick</td>
          <td>Function</td>
          <td>() => {}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const toast = ref(false),
  bottom = ref(false),
  left = ref(false);

function openToast() {
  if (toast.value == false) toast.value = true;
  else toast.value = false;
}

function setBottom() {
  if (bottom.value == false) bottom.value = true;
  else bottom.value = false;
}

function setLeft() {
  if (left.value == false) left.value = true;
  else left.value = false;
}
</script>
