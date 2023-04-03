<template>
  <usage>
    <template #title>Progress Ring</template>
    <template #component>
      <div class="w-full h-full flex flex-col justify-center items-center">
        <y-progress-ring
          :radius="radius"
          :progress="progress"
          :stroke="stroke"
          :ringColor="
            color == 'red' ? 'red' : color == 'green' ? 'green' : '#3663F2'
          "
        >
        </y-progress-ring>
      </div>
    </template>
    <template #rightProps>
      <div>
        <p class="font-bold text-lg">Color</p>
      </div>
      <div class="flex flex-col gap-1">
        <y-radio
          class="gap-2 text-sm"
          v-model="color"
          inputValue="blue"
          label="Blue"
          checked
        ></y-radio>
        <y-radio
          class="gap-2 text-sm"
          v-model="color"
          inputValue="red"
          label="Red"
        ></y-radio>
        <y-radio
          class="gap-2 text-sm"
          v-model="color"
          inputValue="green"
          label="Green"
        ></y-radio>
      </div>
    </template>
    <template #bottomProps>
      <div class="w-full flex items-center justify-evenly gap-2">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Radius</p>
          <div class="flex flex-col">
            <div class="slidecontainer">
              <input
                type="range"
                min="65"
                max="80"
                step="2"
                v-model="radius"
                class="slider"
                id="myRange"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Progress</p>
          <div class="flex flex-col">
            <div class="slidecontainer">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                v-model="progress"
                class="slider"
                id="myRange"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Stroke</p>
          <div class="flex flex-col">
            <div class="slidecontainer">
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                v-model="stroke"
                class="slider"
                id="myRange"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-progress-ring&gt;{{ "\n :radius=" + radius
    }}{{ "\n :progress=" + progress }}
    {{ "\n :stroke=" + stroke }}&lt;/y-progress-ring&gt;
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

const color = ref("Default");
</script>
