<template>
  <usage>
    <template #title>Chip</template>
    <template #component>
      <y-chip
        :close="close"
        :rounded="rounded"
        :dense="dense"
        :outline="outline"
        >Sample Chip</y-chip
      >
    </template>
    <template #bottomProps>
      <y-checkbox
        @change="setClose"
        inputValue="close"
        label="Close"
        class="gap-2"
      ></y-checkbox>
      <y-checkbox
        @change="dense == false ? (dense = true) : (dense = false)"
        inputValue="dense"
        label="Dense"
        class="gap-2"
      ></y-checkbox>

      <y-checkbox
        @change="rounded == false ? (rounded = true) : (rounded = false)"
        inputValue="rounded"
        label="Rounded"
        class="gap-2"
      ></y-checkbox>
      <y-checkbox
        @change="outline == false ? (outline = true) : (outline = false)"
        inputValue="outline"
        label="Outline"
        class="gap-2"
      ></y-checkbox>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-chip{{ close ? ' close @close=""' : "" }}{{ dense ? " dense" : ""
    }}{{ outline ? " outline" : "" }}{{ rounded ? " rounded" : "" }}&gt;
    {{ "\n  " }}Sample Chip{{ "\n " }}&lt;/y-chip&gt;
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
          <td>close</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>dense</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>rounded</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>outline</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>backroundColor</td>
          <td>string</td>
          <td>'none'</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
const close = ref(false),
  dense = ref(false),
  rounded = ref(false),
  outline = ref(false);

function setClose() {
  close.value = !close.value;
}
</script>
