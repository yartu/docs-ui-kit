<template>
  <usage>
    <template #title>Checkbox</template>
    <template #component>
      <y-checkbox
        inputValue="checkConfirm"
        label="Check it!"
        id="checkbox"
        :disabled="disabled"
        :bg="bg"
        :checked="checked"
        class="gap-2"
      ></y-checkbox>
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
          label="Background"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-checkbox{{ "\n" }} id="checkbox" inputValue="checkConfirm"{{ "\n" }} label="Check
    it!"{{ "\n" }} class="gap-2" {{ disabled ? "\n disabled" : ""
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
          <td>''</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>inputValue</td>
          <td>String</td>
          <td>This prop is required !</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const disabled = ref(false),
  checked = ref(false),
  bg = ref(false);

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
</script>
