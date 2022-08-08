<template>
  <usage>
    <template #title>Progress Ring</template>
    <template #component>
      <y-progress-ring>
      </y-progress-ring>
    </template>
  </usage>
  <copy-to-clip-board>
    
      &lt;y-progress-ring&gt;&lt;/y-progress-ring&gt;
  
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
          <td>radius</td>
          <td>Number</td>
          <td>80</td>
        </tr>
        <tr>
          <td>progress</td>
          <td>Number</td>
          <td>52</td>
        </tr>
        <tr>
          <td>stroke</td>
          <td>Number</td>
          <td>12</td>
        </tr>
        <tr>
          <td>ringBgColor</td>
          <td>String</td>
          <td>'#DBE4FF'</td>
        </tr>
        <tr>
          <td>ringColor</td>
          <td>String</td>
          <td>'#3663F2'</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>'750MB'</td>
        </tr>
        <tr>
          <td>subtitle</td>
          <td>String</td>
          <td>'of 1 GB used'</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const radius = ref(80),
  progress = ref(30),
  stroke = ref(12),
  ringBgColor = ref("#DBE4FF"),
  ringColor = ref("#3663F2"),
  title = ref("750MB"),
  subtitle = ref("of 1 GB used");

</script>
