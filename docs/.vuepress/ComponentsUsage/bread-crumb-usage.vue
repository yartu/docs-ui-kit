<template>
  <usage>
    <template #title>Bread Crumb</template>
    <template #component>
      <div class="w-auto">
        <y-breadcrumb
          :size="
            sizeVal == 0
              ? 'xs'
              : sizeVal == 25
              ? 'sm'
              : sizeVal == 50
              ? 'md'
              : sizeVal == 75
              ? 'lg'
              : sizeVal == 100
              ? 'xl'
              : ''
          "
          :crumbs="crumbs"
          @selected="test($event)"
        ></y-breadcrumb>
      </div>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Crumb Size</p>
        <div class="flex flex-col">
          <div class="slidecontainer">
            <input
              type="range"
              min="0"
              max="100"
              step="25"
              v-model="sizeVal"
              class="slider"
              id="myRange"
            />
          </div>
        </div>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-breadcrumb crumbs="crumbs"
    {{
      sizeVal == "0"
        ? 'size="xs"'
        : sizeVal == "25"
        ? 'size="sm"'
        : sizeVal == "50"
        ? 'size="md"'
        : sizeVal == "75"
        ? 'size="lg"'
        : 'size="xl"'
    }}
    &gt;&lt;/y-breadcrumb&gt;
  </copy-to-clip-board>
  <div class="flex flex-col mt-7 gap-1">
    <p class="font-semibold text-xl">Component Props</p>
    <table>
      <thead>
        <tr>
          <th>Prop Name</th>
          <th>Type</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>crumbs</td>
          <td>Array</td>
          <td>true</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>'md'</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const crumbs = ref(["Home", "Products", "Phones"]);
const sizeVal = ref("60");
function test(e) {
  console.log(e);
}
</script>
