<template>
  <usage>
    <template #title>Date Time Picker</template>
    <template #component>
      <y-date-time-picker> </y-date-time-picker>
    </template>
    <template #rightProps> </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-date-time-picker &gt;{{ "\n" }}

    &lt;/y-date-time-picker&gt;
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
          <td>Object,String,Date</td>
          <td></td>
        </tr>
        <tr>
          <td>label</td>
          <td>String</td>
          <td>""</td>
        </tr>
        <tr>
          <td>placeHolder</td>
          <td>String</td>
          <td>""</td>
        </tr>
        <tr>
          <td>dense</td>
          <td>boolean</td>
          <td>fasle</td>
        </tr>
        <tr>
          <td>top</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>left</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>time</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>preset</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>firstDay</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>formatDate</td>
          <td>String</td>
          <td>YYYY-MM-DD</td>
        </tr>
        <tr>
          <td>formatTime</td>
          <td>String</td>
          <td>"HH:mm"</td>
        </tr>
        <tr>
          <td>eventDate</td>
          <td>Array</td>
          <td>()=>[]</td>
        </tr>
        <tr>
          <td>time24h</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>min</td>
          <td>Date,Object</td>
          <td>false</td>
        </tr>
        <tr>
          <td>max</td>
          <td>Date,Object</td>
          <td>false</td>
        </tr>
        <tr>
          <td>buttons</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>preset</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>
