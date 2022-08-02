<template>
  <usage>
    <template #title>Radio Button</template>
    <template #component>
      <div class="flex flex-col gap-2">
        <y-radio
          checked
          label="Choose one"
          id="option-1"
          class="gap-1"
          v-model="choice"
          inputValue="choice1"
          :color="color"
          :bgColor="bgColor"
          :borderColor="borderColor"
        ></y-radio>
        <y-radio
          label="Choose two"
          class="gap-1"
          id="option-2"
          v-model="choice"
          inputValue="choice2"
          :color="color"
          :bgColor="bgColor"
          :borderColor="borderColor"
        ></y-radio>
      </div>
    </template>
  </usage>

  <copy-to-clip-board>
    &lt;y-radio id="option-1" label="Choose one" class="gap-1"
    v-model="choice1"&gt;&lt;/y-radio&gt;{{ "\n" }} &lt;y-radio id="option-2" label="Choose
    one" class="gap-1" v-model="choice2"&gt;&lt;/y-radio&gt;{{ "\n" }}
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
          <td>This prop is required !</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const bgColor = ref("#ffffff"),
  color = ref("#ffffff"),
  borderColor = ref("#e5ebf5ff");

const choice = ref(null);

</script>
