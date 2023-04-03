<template>
  <usage>
    <template #title>ListBox</template>
    <template #component>
      <y-listbox :multiple="multiple" :options="model" v-model="selected">
        <template #template="{ item, onClick }"
          ><button
            @click="onClick(item)"
            class="flex w-full items-center gap-3.5 p-4 border-b border-BORDER hover:bg-LIGHTBLUE-6 transition-all duration-200"
          >
            <y-icon name="yi yi-book text-2xl text-GREY-1"></y-icon>
            {{ item }}<y-icon name="yi yi-check ml-auto"></y-icon>
          </button>
        </template>
      </y-listbox>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-listbox{{ multiple ? " multiple" : "" }} :optins="options"
    v-model="selected" &gt;{{ "\n  " }}&lt;template
    #template="&#123;item,onClick &#125;"&gt;{{ "\n   " }} &lt;button
    @click="onClick(item)"&gt;{{ "\n    " }} &#123;item&#125;
    {{ "\n     " }}&lt;y-icon name="yi yi-check ml-auto" /&gt;
    {{ "\n    " }}&lt;button&gt;{{ "\n  " }} &lt;/template&gt;{{
      "\n "
    }}&lt;/y-listbox&gt;
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
          <td>itemKey</td>
          <td>String</td>
          <td>id</td>
        </tr>
        <tr>
          <td>multiple</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>options</td>
          <td>Array</td>
          <td>required</td>
        </tr>
        <tr>
          <td>modelValue</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const model = ref(["item 1", "item 2", "item 3", "item 4"]);
const progress = ref(30),
  selected = ref(),
  indeterminate = ref(false),
  multiple = ref(false);

function setIndeterminate() {
  if (indeterminate.value == false) {
    indeterminate.value = true;
  } else {
    indeterminate.value = false;
  }
}
</script>
