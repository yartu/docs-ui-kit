<template>
  <usage>
    <template #title>Button</template>
    <template #component>
      <y-button
        :disabled="disabled"
        :square="buttonShape == 'square' ? true : false"
        :circle="buttonShape == 'circle' ? true : false"
        :loading="loading"
        :icon="icon"
        :size="
          sizeVal == '75'
            ? 'md'
            : sizeVal == '25'
            ? 'xs'
            : sizeVal == '50'
            ? 'sm'
            : 'lg'
        "
        :active="active"
        :app="app"
        :spinnerBg="spinnerBg"
        :spinnerColor="spinnerColor"
        :primary="buttonType == 'primary' ? true : false"
        :secondary="buttonType == 'secondary' ? true : false"
        :tertiary="buttonType == 'tertiary' ? true : false"
      >
        {{ buttonShape == "circle" || buttonShape == "square" ? "" : "Sample" }}
      </y-button>
    </template>
    <template #bottomProps>
      <div class="flex w-1/2 flex-col gap-3">
        <p class="font-semibold">Button Types</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            v-model="buttonType"
            inputValue="primary"
            label="Primary"
            checked
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="buttonType"
            inputValue="secondary"
            label="Secondary"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="buttonType"
            inputValue="tertiary"
            label="Tertiary"
          ></y-radio>
        </div>
      </div>
      <div class="flex w-1/2 flex-col gap-3">
        <p class="font-semibold">Button Shape</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            checked
            v-model="buttonShape"
            inputValue="default"
            label="Default"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="buttonShape"
            inputValue="square"
            label="Square"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="buttonShape"
            inputValue="circle"
            label="Circle"
          ></y-radio>
        </div>
      </div>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-checkbox
          @change="setDisabled"
          inputValue="disabled"
          label="Disabled"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setLoading"
          inputValue="loading"
          label="Loading"
          class="gap-2"
        ></y-checkbox>

        <y-checkbox
          @change="setActive"
          inputValue="active"
          label="Active"
          class="gap-2"
        ></y-checkbox>

        <y-checkbox
          @change="setApp"
          inputValue="app"
          label="App"
          class="gap-2"
        ></y-checkbox>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Button Size</p>
        <div class="flex flex-col">
          <div class="slidecontainer">
            <input
              type="range"
              min="25"
              max="100"
              step="25"
              v-model="sizeVal"
              class="slider"
              id="myRange"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Icon</p>
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2">
            <y-radio checked v-model="icon" inputValue=""></y-radio>
            <p class="text-base">None</p>
          </div>
          <div class="flex items-center gap-2">
            <y-radio v-model="icon" inputValue="yi yi-notification"></y-radio>
            <i class="yi yi-notification"></i>
          </div>
          <div class="flex items-center gap-2">
            <y-radio v-model="icon" inputValue="yi yi-check"></y-radio>
            <i class="yi yi-check"></i>
          </div>
        </div>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-button {{ buttonType
    }}{{ buttonShape == "default" ? "" : " " + buttonShape
    }}{{ icon == "" ? "" : '\n icon="' + icon + '"'
    }}{{
      sizeVal == "25"
        ? '\n size="xs"'
        : sizeVal == "50"
        ? '\n size="sm"'
        : sizeVal == "100"
        ? '\n size="lg"'
        : ""
    }}{{ disabled ? "\n disabled" : "" }}{{ active ? "\n active" : ""
    }}{{ app ? "\n app" : "" }}{{ loading ? "\n loading" : "" }}&gt;{{
      buttonShape == "circle" || buttonShape == "square" ? "" : "Sample"
    }}&lt;/y-button&gt;
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
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>square</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>circle</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>primary</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>secondary</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>tertiary</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>'md'</td>
        </tr>
        <tr>
          <td>app</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>active</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>spinnerBg</td>
          <td>String</td>
          <td>'#f8fafd'</td>
        </tr>
        <tr>
          <td>spinnerColor</td>
          <td>String</td>
          <td>'#3663f2'</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const disabled = ref(false),
  loading = ref(false),
  icon = ref(""),
  app = ref(false),
  active = ref(false),
  spinnerBg = ref("#f8fafd"),
  spinnerColor = ref("#3663f2");

const sizeVal = ref("75");
const buttonType = ref("primary");
const buttonShape = ref("default");

function setDisabled() {
  if (disabled.value == false) disabled.value = true;
  else disabled.value = false;
}
function setActive() {
  if (active.value == false) active.value = true;
  else active.value = false;
}
function setApp() {
  if (app.value == false) {
    app.value = true;
  } else {
    app.value = false;
  }
}
function setLoading() {
  if (loading.value == false) loading.value = true;
  else loading.value = false;
}
</script>
