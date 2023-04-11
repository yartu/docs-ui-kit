<template>
  <usage>
    <template #title>Button Group</template>
    <template #component>
      <y-button-group
        v-model="selected"
        :option-label="'name'"
        :data-key="'value'"
        :options="buttonOptions"
      >
        <template #option="{ option }">
          <span class="subtitle-4 text-BLACK-2 truncate relative z-1">{{
            option.name
          }}</span>
        </template>
      </y-button-group>
      ></template
    >
  </usage>
  <copy-to-clip-board>
    &lt;y-button-group{{ "\n" }} v-model="selected"{{
      "\n"
    }}
    :option-label="'name'"{{ "\n" }} :data-key="'value'"{{
      "\n"
    }}
    :options="buttonOptions"&gt;{{ "\n  " }} &lt;template
    #option="&#123;option&#125;&gt;{{ "\n   " }} &lt;span class="subtitle-4
    text-BLACK-2 truncate relative z-1"&gt;{{ "\n      " }}option.name{{
      "\n    "
    }}&lt;/span&gt;{{ "\n  " }} &lt;/template&gt;{{ "\n" }}
    &lt;/y-button-group&gt;
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
          <td>modelValue</td>
          <td>model</td>
          <td>requierd!</td>
        </tr>
        <tr>
          <td>optionLabel</td>
          <td>options[label:]</td>
          <td>required!</td>
        </tr>
        <tr>
          <td>options</td>
          <td>Object</td>
          <td>requred!</td>
        </tr>
        <tr>
          <td>datakey</td>
          <td>options[key:]</td>
          <td>required!</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const buttonOptions = ref([
  { id: 1, name: "Option 1", label: "Option 1", type: "primary" },
  { id: 2, name: "Option 2", label: "Option 1", type: "secondary" },
  { id: 3, name: "Option 3", label: "Option 1", type: "danger" },
]);
const selected = ref();
</script>
