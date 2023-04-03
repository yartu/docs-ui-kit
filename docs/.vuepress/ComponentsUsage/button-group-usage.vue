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
