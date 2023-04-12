<template>
  <usage>
    <template #title>Input</template>
    <template #component>
      <y-input
        :dense="dense"
        :prefix="prefix"
        :placeholder="placeholder == true ? 'Type here' : ''"
        :disabled="disabled"
        :disabledText="
          disabled == true && disabledText == true ? 'Disabled' : ''
        "
        :suffix="suffix"
        label="Search"
        :dropdownItem="dropdwonItems"
        :action="action"
        v-model="text"
        :helper="helper"
        :warning="inputFeedback == 'warning' ? true : false"
        :error="inputFeedback == 'error' ? true : false"
        :info="inputFeedback == 'info' ? true : false"
      >
        <template #helper>Search for anything</template>
        <template #dropdown="{ open }"
          ><button @click="open" v-if="dropdown">
            <y-icon name="yi yi-arrow-down" class="pr-1"></y-icon></button
        ></template>
        <template #suffix> <p class="pr-1">Kg</p> </template>
        <template #prefix>
          <p class="pr-1"><y-icon class="pl-1" name="yi yi-search"></y-icon></p>
        </template>
      </y-input>
    </template>

    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-checkbox
          @change="setDropdownActive"
          inputValue="dropdown"
          label="Dropdown"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setAction"
          inputValue="action"
          label="Action"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setDense"
          inputValue="dense"
          label="Dense"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setHelper"
          inputValue="helper"
          label="Helper"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setPrefix"
          inputValue="prefix"
          label="Prefix"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setSuffix"
          inputValue="suffix"
          label="Suffix"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setPlaceholder"
          inputValue="placeholder"
          label="Placeholder"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setDisabled"
          inputValue="disabled"
          label="Disabled"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          :disabled="disabled == false ? true : false"
          @change="setDisabledText"
          inputValue="disabledText"
          label="Disabled Text"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
    <template #bottomProps>
      <div class="flex w-1/2 flex-col gap-3">
        <p class="font-semibold">Input Types</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            v-model="inputFeedback"
            inputValue="default"
            label="Default"
            checked
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="inputFeedback"
            inputValue="error"
            label="Error"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="inputFeedback"
            inputValue="warning"
            label="Warning"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="inputFeedback"
            inputValue="info"
            label="Info"
          ></y-radio>
        </div>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-input v-model="text" label="Search"{{
      inputFeedback == "default" ? "" : "\n " + inputFeedback
    }}{{ dropdown ? "\n dropdown" : "" }}{{ disabled ? "\n disabled" : ""
    }}{{ placeholder ? "\n placeholder='Type here'" : ""
    }}{{ disabledText ? "\n disabledText='Disabled'" : ""
    }}{{ dense ? "\n dense" : ""
    }}{{ dropdown ? '\n :dropdownItems="dropDownItems"' : ""
    }}{{ action ? "\n action" : "" }}{{ prefix ? "\n prefix" : ""
    }}{{ helper ? "\n :helper='helper'" : "" }} {{ "\n " }}&gt;{{
      helper == true
        ? "&lt;template #helper  &gt;Search for anything &lt;template&gt;"
        : ""
    }}
    {{
      dropdown == true
        ? "&lt;template #dropdown='&#123; open &#125;  '&gt;\n   &lt;button @click='open' v-if=dropdown &gt; \n     &lt;y-icon name=yi yi-arroq-down &gt; &lt;y-icon&gt;\n   &lt;button&gt;&lt;template&gt; \n"
        : ""
    }}
    {{
      suffix == true
        ? "&lt;template #suffix&gt;\n   &lt;p&gt; Kg &lt;p&gt; \n &lt;template&gt;\n"
        : ""
    }}
    {{
      prefix == true
        ? "&lt;template #prefix&gt;\n   &lt;y-icon&gt; name='yi yi-search' &lt;y-icon&gt; \n &lt;template&gt;\n"
        : ""
    }}
    &lt;/y-input&gt;
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
          <td>String, Number, Object</td>
          <td></td>
        </tr>
        <tr>
          <td>id</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>dense</td>
          <td>Boolean</td>
          <td>'false'</td>
        </tr>
        <tr>
          <td>dropdownModel</td>
          <td>Boolean</td>
          <td>'false'</td>
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
          <td>type</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>dropdown</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>dropdownIcon</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>dropdownTitle</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>dropdownItem</td>
          <td>Array</td>
          <td>null</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabledText</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>iconRight</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>action</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>rounded</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>error</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>warning</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>info</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>helper</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>prefix</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>inputClasses</td>
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
  action = ref(false),
  helper = ref(false),
  disabled = ref(false),
  prefix = ref(false),
  suffix = ref(false),
  placeholder = ref(""),
  dense = ref(false),
  disabledText = ref(false);

const text = ref("");
const inputFeedback = ref("default");
const dropdwonItems = ref(["GB", "MB", "KB"]);

function setDropdownActive() {
  if (dropdown.value == false) dropdown.value = true;
  else dropdown.value = false;
}
function setAction() {
  if (action.value == false) action.value = true;
  else action.value = false;
}
function setDense() {
  if (dense.value == false) dense.value = true;
  else dense.value = false;
}
function setHelper() {
  if (helper.value == false) helper.value = true;
  else helper.value = false;
}

function setDisabled() {
  if (disabled.value == false) disabled.value = true;
  else disabled.value = false;
}

function setPrefix() {
  if (prefix.value == false) prefix.value = true;
  else prefix.value = false;
}
function setSuffix() {
  if (suffix.value == false) suffix.value = true;
  else suffix.value = false;
}
function setPlaceholder() {
  if (placeholder.value == false) placeholder.value = true;
  else placeholder.value = false;
}
function setDisabledText() {
  if (disabledText.value == false) disabledText.value = true;
  else disabledText.value = false;
}
</script>
