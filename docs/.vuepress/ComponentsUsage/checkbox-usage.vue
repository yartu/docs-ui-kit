<template>
  <usage>
    <template #title>Checkbox</template>
    <template #component>
      <yartuCheckboxVue
        :indeterminate="boxType == 'indeterminate' ? true : false"
        :error="boxType == 'error' ? true : false"
        :primary="boxType == 'primary' ? true : false"
        inputValue="checkConfirm"
        label="Check it!"
        id="checkbox"
        :disabled="disabled"
        :bg="bg"
        :checked="checked"
        outline-color="#e6e6e6"
        class="gap-2"
        :size="sizeVal == '100' ? 'lg' : 'md'"
      ></yartuCheckboxVue>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-checkbox
          @change="setDisabled"
          inputValue="disabled"
          label="Disabled"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setChecked"
          inputValue="checked"
          label="Checked"
          class="gap-2"
        ></y-checkbox>

        <y-checkbox
          @change="setBg"
          inputValue="bg"
          label="Backround"
          class="gap-2"
        ></y-checkbox>

        <div class="flex flex-col gap-2">
          <p class="font-semibold">Box Size</p>
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
      </div>
    </template>
    <template #bottomProps>
      <div class="flex w-1/2 flex-col gap-3">
        <p class="font-semibold">Box Types</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            v-model="boxType"
            inputValue="primary"
            label="Primary"
            checked
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="boxType"
            inputValue="error"
            label="Error"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="boxType"
            inputValue="indeterminate"
            label="Indedterminate"
          ></y-radio>
        </div>
      </div>
      <!-- <div class="flex w-1/2 flex-col gap-3">
        <p class="font-semibold">Check Color</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            checked
            v-model="color"
            inputValue="BLUE"
            label="Blue"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="color"
            inputValue="RED"
            label="Red"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="color"
            inputValue="#124424"
            label="Green"
          ></y-radio>
        </div>
      </div> -->
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-checkbox{{ "\n" }} id="checkbox" inputValue="checkConfirm"{{
      "\n"
    }}
    label="Check it!"{{ "\n" }} class="gap-2" {{ disabled ? "\n disabled" : ""
    }}{{ checked ? "\n checked" : "" }}{{ bg ? "\n bg" : "" }}&nbsp;&gt;Check
    it!&lt;/y-checkbox&gt;
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
          <td>bg</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>label</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>id</td>
          <td>String</td>
          <td>null</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>md</td>
        </tr>
        <tr>
          <td>modelValue</td>
          <td>{}</td>
          <td></td>
        </tr>
        <tr>
          <td>inputValue</td>
          <td>String</td>
          <td>required !</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>outlineColor</td>
          <td>String</td>
          <td>""</td>
        </tr>
        <tr>
          <td>error</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>primary</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>indeterminate</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>color</td>
          <td>string</td>
          <td>""</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import yartuCheckboxVue from "./yartuCheckbox.vue";

const disabled = ref(false),
  checked = ref(false),
  bg = ref(false),
  indeterminate = ref(false),
  sizeVal = ref(0),
  boxType = ref(""),
  color = ref("blue");

function setDisabled() {
  if (disabled.value == false) disabled.value = true;
  else disabled.value = false;
}
function setChecked() {
  if (checked.value == false) checked.value = true;
  else checked.value = false;
}
function setBg() {
  if (bg.value == false) bg.value = true;
  else bg.value = false;
}
function setIndeterminate() {
  if (indeterminate.value == false) indeterminate.value = true;
  else indeterminate.value = false;
}
</script>
