<template>
  <usage>
    <template #title>Combo Box</template>
    <template #component>
      <div class="w-full h-full">
        <div class="flex justify-center pt-5">
          <y-combobox
            v-model="search"
            :items="items"
            label="Search"
            :placeholder="placeholder"
            :dense="dense"
            :chip="chip"
            :closableChip="closableChip"
            :clearAfterSelect="clear"
            :closeAfterSelect="close"
            :disabled="disable"
          >
            <template #icon> <y-icon name="yi yi-arrow-up"></y-icon></template>
          </y-combobox>
        </div>
      </div>
    </template>

    <template #rightProps>
      <div class="flex flex-col gap-1">
        <p class="font-bold text-lg">Style</p>
        <y-checkbox
          @change="dense == false ? (dense = true) : (dense = false)"
          inputValue="dense"
          label="Dense"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="chip == false ? (chip = true) : (chip = false)"
          inputValue="chip"
          label="Chip"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="
            closableChip == false
              ? (closableChip = true)
              : (closableChip = false)
          "
          inputValue="closableChip"
          label="Closable Chip"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setPlaceholder"
          inputValue="placeholder"
          label="Placeholder"
          class="gap-2"
        ></y-checkbox>

        <p class="pt-3 font-bold text-lg">Actions</p>
        <y-checkbox
          @change="clear == false ? (clear = true) : (clear = false)"
          inputValue="clear"
          label="Clear on tap"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="close == false ? (close = true) : (close = false)"
          inputValue="close"
          label="Close on tap"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="disable == false ? (disable = true) : (disable = false)"
          inputValue="disable"
          label="Disable "
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-combobox items="items" {{ dense ? " dense" : ""
    }}{{ chip ? " chip" : "" }}{{ closableChip ? " closableChip" : "" }}{{ "\n"
    }}{{ placeholder ? "placeholder='Type Here'" : ""
    }}{{ clear ? " clearAfterSelect" : "" }}{{ close ? " closeAfterSelect" : ""
    }}{{ disable ? " disable" : "" }} &gt;
    {{ "\n   " }}&lt;p&gt;Loading&lt;/p&gt;{{ "\n " }}&lt;/y-loading&gt;
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
          <td>Array, Object, String, Number</td>
          <td>''</td>
        </tr>
        <tr>
          <td>itemKey</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>itemText</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>items</td>
          <td>Array</td>
          <td>Required!</td>
        </tr>
        <tr>
          <td>returnObject</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>top</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>left</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>multiple</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>dense</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>chip</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>closeableChip</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>clearAfterSelect</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>closeAfterSelect</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>label</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>Filter</td>
          <td>Function</td>
          <td>"()=>{}"</td>
        </tr>
        <tr>
          <td>hint</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>rules</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>suggest</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>

        <tr>
          <td>clearİnvalidSuggest</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>clearCache</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>clearCacheKey</td>
          <td>String</td>
          <td>''</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dropdown = ref(false),
  chip = ref(false),
  dense = ref(false),
  closableChip = ref(false),
  clear = ref(false),
  placeholder = ref(""),
  disable = ref(false),
  close = ref(false);

const text = ref("");
const inputFeedback = ref("default");
const items = ref(["GB", "MB", "KB"]);

function setPlaceholder() {
  if (placeholder.value == "") placeholder.value = "Type here";
  else placeholder.value = "";
}
</script>
