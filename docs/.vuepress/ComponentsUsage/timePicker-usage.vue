<template>
  <usage>
    <template #title>Time Picker</template>
    <template #component><y-time-picker> </y-time-picker> </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-time-picker{{ bottom ? "\n bottom" : ""
    }}{{ left ? "\n left" : "" }}&gt;&lt;/y-time-picker&gt;
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
          <td>modelValue</td>
          <td>Object,Date,String</td>
          <td></td>
        </tr>
        <tr>
          <td>label</td>
          <td>String</td>
          <td>false</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>dense</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>outline</td>
          <td>Boolean</td>
          <td>()=>true</td>
        </tr>
        <tr>
          <td>formatTime</td>
          <td>String</td>
          <td>HH.mm</td>
        </tr>
        <tr>
          <td>inline</td>
          <td>Boolean</td>
          <td>() => false</td>
        </tr>
        <tr>
          <td>time24h</td>
          <td>Boolean</td>
          <td>() => true</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
</script>
