<template>
  <usage>
    <template #title>Pagination</template>
    <template #component>
      <y-pagination
        :total="total"
        :perPage="perPage"
        :pageRange="pageRange"
      ></y-pagination>
    </template>
    <template #bottomProps>
      <div class="w-1/3 flex flex-col gap-2 items-center justify-center">
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
      <div class="w-1/3 flex flex-col gap-2 items-center justify-center">
        <div class="flex flex-col gap-2">
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
      </div>
      <div class="w-1/3 flex flex-col gap-2 items-center justify-center">
        <div class="flex flex-col gap-2">
        <p class="font-semibold">Page Range</p>
        <div class="flex flex-col">
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
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-pagination{{ '\n :total="'+total+'"'}}{{ '\n :perPage="'+perPage+'"'}}{{ '\n :pageRange="'+pageRange+'"'}}&gt;{{'\n '}}&lt;/y-pagination&gt;
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
        
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const total = ref(20),
  perPage = ref(2),
  pageRange = ref(2);


</script>
