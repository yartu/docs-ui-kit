<template>
  <usage>
    <template #title>Pagination</template>
    <template #component>
      <y-pagination
        :total="total"
        :perPage="perPage"
        :pageRange="pageRange"
        :size="
          sizeVal == '100'
            ? 'md'
            : sizeVal == '0'
            ? 'xs'
            : sizeVal == '50'
            ? 'sm'
            : 'md'
        "
        :simple="simple"
      ></y-pagination>
    </template>
    <template #bottomProps>
      <div class="flex felx-col">
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-2 items-center justify-center">
            <p class="font-semibold">Per Page</p>
            <div class="flex flex-col">
              <div class="slidecontainer">
                <input
                  type="range"
                  min="2"
                  max="100"
                  step="1"
                  v-model="perPage"
                  class="slider"
                  id="perPage"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-semibold">Page Range</p>
            <div class="flex flex-col items-center justify-center">
              <div class="slidecontainer">
                <input
                  type="range"
                  min="2"
                  max="100"
                  step="1"
                  v-model="pageRange"
                  class="slider"
                  id="pageRange"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-semibold">Total</p>
            <div class="flex flex-col">
              <div class="slidecontainer">
                <input
                  type="range"
                  min="2"
                  max="100"
                  step="1"
                  v-model="total"
                  class="slider"
                  id="totalRange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <p class="font-semibold">Size</p>
        <div class="flex flex-col">
          <div class="slidecontainer">
            <input
              type="range"
              min="0"
              max="100"
              step="50"
              v-model="sizeVal"
              class="slider"
              id="myRange"
            />
          </div>
        </div>
        <y-checkbox
          @change="setSimple"
          inputValue="simple"
          label="Simple"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-pagination
    {{
      sizeVal == "0"
        ? ' size="xs"'
        : sizeVal == "50"
        ? ' size="sm"'
        : sizeVal == "100"
        ? ' size="md"'
        : ""
    }}{{ simple == true ? " simple" : "" }}{{ '\n :total="' + total + '"'
    }}{{ '\n :perPage="' + perPage + '"'
    }}{{ '\n :pageRange="' + pageRange + '"' }}&gt;{{
      "\n "
    }}&lt;/y-pagination&gt;
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
          <td>total</td>
          <td>Number</td>
          <td>10</td>
        </tr>
        <tr>
          <td>perPage</td>
          <td>Number</td>
          <td>2</td>
        </tr>
        <tr>
          <td>pageRange</td>
          <td>Number</td>
          <td>2</td>
        </tr>
        <tr>
          <td>simple</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const total = ref(20),
  perPage = ref(2),
  pageRange = ref(2),
  sizeVal = ref(""),
  simple = ref(false);

const setSimple = () => {
  if (simple.value == false) simple.value = true;
  else simple.value = false;
};
</script>
