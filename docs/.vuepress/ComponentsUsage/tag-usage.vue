<template>
  <usage>
    <template #title>Tag</template>
    <template #component>
      <y-tag
        :outline="outline"
        :active="active"
        :close="close"
        :primary="tagType == 'primary' ? true : false"
        :secondary="tagType == 'secondary' ? true : false"
        :tertiary="tagType == 'tertiary' ? true : false"
        :danger="tagClass == 'danger' ? true : false"
        :success="tagClass == 'success' ? true : false"
        :info="tagClass == 'info' ? true : false"
        :warning="tagClass == 'warning' ? true : false"
      >
        Check Out
      </y-tag>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Tag Type</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            checked
            v-model="tagType"
            inputValue="primary"
            label="Primary"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="tagType"
            inputValue="secondary"
            label="Secondary"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="tagType"
            inputValue="tertiary"
            label="Tertiary"
          ></y-radio>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Tag Class</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            checked
            v-model="tagClass"
            inputValue="default"
            label="Default"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="tagClass"
            inputValue="info"
            label="Info"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="tagClass"
            inputValue="success"
            label="Success"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="tagClass"
            inputValue="warning"
            label="Warning"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="tagClass"
            inputValue="danger"
            label="Danger"
          ></y-radio>
        </div>
      </div>
    </template>
    <template #bottomProps>
      <div class="w-full flex justify-evenly items-center">
        <y-checkbox
          @change="setActive"
          inputValue="active"
          label="Active"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setOutline"
          inputValue="outline"
          label="Outline"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setClose"
          inputValue="close"
          label="Close"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-tag
    {{ tagType }} {{ tagClass == "default" ? "" : tagClass
    }}{{ outline ? "\n outline" : "" }}{{ active ? "\n active" : ""
    }}{{ close ? "\n close" : "" }}&gt;Check Out&lt;/y-tag&gt;
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
          <td>outline</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>active</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>close</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>primary</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>secondary</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>tertiary</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>danger</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>success</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>info</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>warning</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const outline = ref(false),
  active = ref(false),
  close = ref(false);

const tagClass = ref("default");
const tagType = ref("primary");

function setOutline() {
  if (outline.value == false) outline.value = true;
  else outline.value = false;
}
function setActive() {
  if (active.value == false) active.value = true;
  else active.value = false;
}
function setClose() {
  if (close.value == false) close.value = true;
  else close.value = false;
}
</script>
