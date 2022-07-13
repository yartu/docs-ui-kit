<template>

  <usage>
    <template #title>Avatar</template>
    <template #component>
      <y-avatar
        :size="
          sizeVal == '10'
            ? 'xs'
            : sizeVal == '20'
            ? 'sm'
            : sizeVal == '30'
            ? 'md'
            : sizeVal == '40'
            ? 'lg'
            : sizeVal == '50'
            ? 'xl'
            : sizeVal == '60'
            ? '2xl'
            : sizeVal == '70'
            ? '3xl'
            : '4xl'
        "
        :label="label"
        image="/docs-ui-kit/images/avatar.jpeg"
        :shape="shape"
        :border="border"
      ></y-avatar>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Button Shape</p>
        <div class="flex flex-col gap-1">
          <y-radio
            checked
            v-model="buttonShape"
            inputValue=""
            label="Circle"
          ></y-radio>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Button Size</p>
        <div class="flex flex-col">
          <div class="slidecontainer">
            <input
              type="range"
              min="10"
              max="80"
              step="10"
              v-model="sizeVal"
              class="slider"
              id="myRange"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <y-checkbox
          @change="setBorder"
          inputValue="border"
          label="Border"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>

  <copy-to-clip-board>
    &lt;y-avatar {{ buttonShape
    }}{{
      sizeVal == "10"
        ? '\n size="xs"'
        : sizeVal == "20"
        ? '\n size="sm"'
        : sizeVal == "40"
        ? '\n size="lg"'
        : sizeVal == "50"
        ? '\n size="xl"'
        : sizeVal == "60"
        ? '\n size="2xl"'
        : sizeVal == "70"
        ? '\n size="3xl"'
        : sizeVal == "80"
        ? '\n size="4xl"'
        : ""
    }}{{'\n'}} image="/images/avatar.jpeg"{{ border ? "\n border" : "" }}&gt;{{
      label == null ? "" : '\nlabel="' + label + '"'
    }}&lt;/y-avatar&gt;
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
          <td>null</td>
        </tr>
        <tr>
          <td>image</td>
          <td>String</td>
          <td>null</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>'md'</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>String</td>
          <td>'circle'</td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>'blue'</td>
        </tr>
        <tr>
          <td>border</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const border = ref(false),
  label = ref(null),
  image = ref(null);

const sizeVal = ref("30");
const buttonShape = ref("circle");

function setBorder() {
  if (border.value == false) border.value = true;
  else border.value = false;
}
</script>

<style>
.usage-main-frame {
  background-color: #0000002e;
}
</style>
