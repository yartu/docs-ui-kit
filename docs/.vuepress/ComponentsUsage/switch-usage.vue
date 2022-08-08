<template>
  <usage>
    <template #title>Switch</template>
    <template #component>
      <y-switch
        inputValue="checked"
        v-model="checked"
        label="Sample Switch"
        :disabled="disabled"
        :checked="checked"
      >
        <i class="yi yi-check"></i>
      </y-switch>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-checkbox
          @change="setDisabled"
          inputValue="disabled"
          label="Disabled"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-switch inputValue="sampleSwitch"{{ "\n " }}label="Sample Switch"{{
      disabled ? "\n disabled":""
    }}{{ checked ? "\n checked":""  }}&gt;{{ "\n   " }}&lt;i class="yi
    yi-check"&gt;&lt;/i&gt;{{ "\n " }}&lt;y-switch&gt;
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
          <td>color</td>
          <td>String</td>
          <td>'#ffffff'</td>
        </tr>
        <tr>
          <td>bgColor</td>
          <td>String</td>
          <td>'#ffffff'</td>
        </tr>
        <tr>
          <td>borderColor</td>
          <td>String</td>
          <td>'#e5ebf5ff'</td>
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
          <td>This prop is required!</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const disabled = ref(false),
  checked = ref(false);


function setDisabled() {
  if (disabled.value == false) disabled.value = true;
  else disabled.value = false;
}
function setChecked() {
  if (checked.value == false) checked.value = true;
  else checked.value = false;
}
</script>
