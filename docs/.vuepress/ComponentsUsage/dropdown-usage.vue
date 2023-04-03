<template>
  <usage>
    <template #title>Dropdown</template>
    <template #component>
      <y-dropdown class="absolute" :show="showDropdown" :left="left">
        <y-dropdown-item prefix="yi yi-home"> Home </y-dropdown-item>
        <y-dropdown-item prefix="yi yi-drive" postfix="yi yi-arrow-right">
          Products
          <y-inner-dropdown :left="left" class="">
            <y-dropdown-item class="" prefix="yi yi-palette"
              >Product
            </y-dropdown-item>
            <y-dropdown-item prefix="yi yi-print">Product </y-dropdown-item>
            <y-dropdown-item prefix="yi yi-clock">Product </y-dropdown-item>
          </y-inner-dropdown>
        </y-dropdown-item>
        <template #activator="{ open }">
          <YartuButton primary @click="open">Open Dropdown</YartuButton>
        </template>
      </y-dropdown>
    </template>
    <template #bottomProps>
      <div class="w-full flex justify-evenly items-center">
        <y-checkbox
          @change="setLeft"
          inputValue="left"
          label="Left"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
    <!-- <template #rightProps>
      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Open High</p>
          <div class="flex flex-col">
            <div class="slidecontainer">
              <input
                type="range"
                min="0"
                max="100"
                step="100"
                v-model="sizeVal"
                class="slider"
                id="myRange"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Height</p>
          <div class="flex flex-col">
            <div class="slidecontainer">
              <input
                type="range"
                min="100"
                max="400"
                step="1"
                v-model="sizeVal"
                class="slider"
                id="myRange"
              />
            </div>
          </div>
        </div>
      </div>
    </template> -->
  </usage>
  <copy-to-clip-board>
    &lt;y-dropdown {{ showDropdown ? ':show="true"' : ':show="false"' }}
    {{ left ? "left" : "" }}&gt;{{ "\n   " }} &lt;y-dropdown-item prefix="yi
    yi-home"&gt;Home&lt;/y-dropdown-item&gt;{{ "\n   " }} &lt;y-dropdown-item
    prefix="yi yi-drive" {{ "\n      " }} postfix="yi yi-arrow-right"&gt;
    Products{{ "\n      " }} &lt;y-inner-dropdown {{ left ? "left" : "" }}&gt;
    {{ "\n         " }}&lt;y-dropdown-item prefix="yi
    yi-palette"&gt;Product&lt;/y-dropdown-item&gt;
    {{ "\n         " }}&lt;y-dropdown-item prefix="yi
    yi-print"&gt;Product&lt;/y-dropdown-item&gt;
    {{ "\n         " }}&lt;y-dropdown-item prefix="yi
    yi-clock"&gt;Product&lt;/y-dropdown-item&gt;
    {{ "\n       " }}&lt;/y-inner-dropdown&gt;
    {{ "\n    " }}&lt;/y-dropdown-item&gt;{{ "\n" }}

    &lt;/y-dropdown&gt;
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
          <td>show</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>bg</td>
          <td>String</td>
          <td>'#ffffff'</td>
        </tr>
        <tr>
          <td>left</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>flex</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>block</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>top</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>ignoreClickOutside</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>classes</td>
          <td>Array , string</td>
          <td>' '</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import YartuButton from "./YartuButton.vue";

const showDropdown = ref(false),
  left = ref(false);

function openDropdown() {
  if (showDropdown.value == false) showDropdown.value = true;
  else showDropdown.value = false;
}

function setLeft() {
  if (left.value == false) left.value = true;
  else left.value = false;
}
</script>
