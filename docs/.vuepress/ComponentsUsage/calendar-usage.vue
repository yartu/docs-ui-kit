<template>
  <usage>
    <template #title>Calendar</template>
    <template #component> <y-calendar></y-calendar> </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-card&gt;{{ "\n  " }} &lt;div class="flex flex-col gap-1 p-3"&gt;{{
      "\n   "
    }}
    &lt;p class="font-semibold text-lg"&gt;Some Title&lt;/p&gt;{{
      "\n   "
    }}
    &lt;p class=" text-sm"&gt;Lorem ipsum dolor...&lt;/p&gt;{{
      "\n   "
    }}
    &lt;y-button primary>View&lt;/y-button&gt;{{ "\n  " }} &lt;/div&gt;{{
      "\n"
    }}
    &lt;/y-card&gt;
  </copy-to-clip-board>
</template>

<script setup>
import { ref } from "vue";

const itemOptions = ref([
  { text: "Seçenek 1", value: "option1" },
  { text: "Seçenek 2", value: "option2" },
  { text: "Seçenek 3", value: "option3" },
]);
const selectedItem = ref();
const showSelected = () => {
  if (this.selectedItem) {
    alert(`Seçilen öğe: ${this.selectedItem}`);
  } else {
    alert("Lütfen bir öğe seçin.");
  }
};
</script>
