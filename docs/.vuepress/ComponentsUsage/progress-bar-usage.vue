<template>
  <usage>
    <template #title>Progress Bar</template>
    <template #component>
      <div class="w-2/3">
        <y-progress-bar
          :progress="progress"
          :height="height"
          :default="type == 'default' ? true : false"
          :success="type == 'success' ? true : false"
          :error="type == 'error' ? true : false"
          :cancel="type == 'cancel' ? true : false"
          :indeterminate="indeterminate == 'none' ? '' : indeterminate"
        ></y-progress-bar>
      </div>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Type</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            checked
            v-model="type"
            inputValue="default"
            label="Default"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="type"
            inputValue="success"
            label="Success"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="type"
            inputValue="error"
            label="Error"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="type"
            inputValue="cancel"
            label="Cancel"
          ></y-radio>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Indeterminate</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            checked
            v-model="indeterminate"
            inputValue="none"
            label="None"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="indeterminate"
            inputValue="rider"
            label="Rider"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="indeterminate"
            inputValue="move"
            label="Move"
          ></y-radio>
        </div>
      </div>
    </template>
    <template #bottomProps>
      <div class="w-full flex items-center justify-evenly">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Height</p>
          <div class="flex flex-col">
            <div class="slidecontainer">
              <input
                type="range"
                min="4"
                max="16"
                step="4"
                v-model="height"
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
      </div>
    </template>
  </usage>

  <copy-to-clip-board>
    &lt;y-progress-bar {{ type
    }}{{ indeterminate == "none" ? "" : '\n indeterminate="' + indeterminate + '"'
    }}{{indeterminate == "none" ?'\n progress="' + progress + '"' : ""
    }}{{'\n height="' + height + '"'
    }}&gt;{{ "\n " }}&lt;/y-progress-bar&gt;
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
          <td>indeterminate</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>progress</td>
          <td>Number</td>
          <td>30</td>
        </tr>
        <tr>
          <td>height</td>
          <td>Number</td>
          <td>4</td>
        </tr>
        <tr>
          <td>default</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>success</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>error</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>cancel</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const type = ref("default"),
  height = ref(4),
  progress = ref(30),
  indeterminate = ref("none");

function setIndeterminate() {
  if (indeterminate.value == false) {
    indeterminate.value = true;
  } else {
    indeterminate.value = false;
  }
}
</script>
