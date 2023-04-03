<template>
  <usage>
    <template #title>Bottom Sheet</template>
    <template #component>
      <div class="flex justify-center items-center">
        <YartuButton
          primary
          @click="openBottomSheet"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Open Bottom Sheet
        </YartuButton>
        <y-bottom-sheet
          class="z-10"
          :show="open"
          bg="#ffffff"
          @ClickOutside="true"
        >
          <div class="p-4 z-10">
            <h2 class="text-2xl font-bold mb-2">Header</h2>
            <p class="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              @click="closeBottomSheet"
              class="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </y-bottom-sheet>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-bottom-sheet {{ "\n" }} :show="open"{{ "\n" }} bg="#ffffff"{{
      "\n"
    }}
    @ClickOutside="true" &gt; &lt;div class="p-4"&gt;{{ "\n  " }}&lt;h2
    class="text-xl2 font-bold md-2"&gt; Header &lt;h2&gt; {{ "\n " }} &lt;p
    class="text-lg"&gt;{{ "\n    " }}Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.{{ "\n " }} &lt;/p&gt;{{ "\n " }} &lt;button
    @click="closeBottomSheet" class="mt-4 bg-blue-500 text-white px-4 py-2
    rounded"&gt; {{ "\n    " }}Close {{ "\n  " }}&lt;/button&gt;
    {{ "\n " }}&lt;/y-bottom-sheet&gt;
  </copy-to-clip-board>
  <div class="flex flex-col mt-7 gap-1">
    <p class="font-semibold text-xl">Component Props</p>
    <table>
      <thead>
        <tr>
          <th>Prop Name</th>
          <th>Type</th>
          <th>Required</th>
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
          <td>#ffffff</td>
        </tr>
        <tr>
          <td>ignoreClickOutside</td>
          <td>Boolean</td>
          <td></td>
        </tr>
        <tr>
          <td>classes</td>
          <td>Array,String</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import YartuButton from "./YartuButton.vue";

const crumbs = ref(["Home", "Products", "Phones"]);
const sizeVal = ref("60");
const open = ref(false);

function onDateSelected(date) {
  console.log("Selected Date:", date.toLocaleDateString());
}
function openBottomSheet() {
  open.value = true;
}
function closeBottomSheet() {
  open.value = false;
}

const bottomSheet = ref(false);
function test(e) {
  bottomSheet.value = true;
  console.log(bottomSheet);
}
</script>
