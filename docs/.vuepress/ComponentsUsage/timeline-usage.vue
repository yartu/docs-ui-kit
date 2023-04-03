<template>
  <usage>
    <template #title>Timeline</template>
    <template #component
      ><div class="p-3 py-5">
        <y-timeline :align="align" :value="timelineData">
          <template #content-left="{ item }">
            <div class="p-1 text-right">
              <h3 class="font-bold">{{ item.date }}</h3>
              <p class="text-gray-500">{{ item.event }}</p>
            </div>
          </template>
          <template v-if="align !== 'right'" #content-right="{ item }">
            <div class="p-1 text-left">
              <h3 class="font-bold">{{ item.date }}</h3>
              <p class="text-gray-500">{{ item.event }}</p>
            </div>
          </template>
        </y-timeline>
      </div>
    </template>
    <template #bottomProps>
      <div class="w-full flex justify-evenly items-center">
        <y-radio
          v-model="align"
          inputValue="left"
          label="Left"
          class="gap-2"
        ></y-radio>
        <y-radio
          v-model="align"
          inputValue="right"
          label="Right"
          class="gap-2"
        ></y-radio>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-timeline{{
      align == "left" ? " align='left' \n" : " align='right' \n"
    }}
    :value="timelineData" &gt;&lt;/y-timeline&gt;
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
          <td>value</td>
          <td>Array</td>
          <td>required</td>
        </tr>
        <tr>
          <td>align</td>
          <td>String</td>
          <td>'left'</td>
        </tr>
        <tr>
          <td>layout</td>
          <td>String</td>
          <td>'vertical'</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const align = ref("left");
const timelineData = ref([
  {
    date: "March 2022",
    event: "Started working as a web developer at XYZ company",
  },
  {
    date: "January 2022",
    event: "Graduated from university with a degree in Computer Science",
  },
  {
    date: "June 2021",
    event: "Started learning Vue.js",
  },
  {
    date: "March 2021",
    event: "Started learning HTML, CSS, and JavaScript",
  },
  {
    date: "January 2021",
    event: "Made a New Year’s resolution to learn web development",
  },
]);

const imelineData = ref([
  "Started working as a web developer at XYZ company",
  "Graduated from university with a degree in Computer Science",
  "Started learning Vue.js",
  "Started learning HTML, CSS, and JavaScript",
  "Made a New Year’s resolution to learn web development",
]);
</script>
