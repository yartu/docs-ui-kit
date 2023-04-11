<template>
  <usage>
    <template #title>Tooltip</template>
    <template #component>
      <y-tooltip
        :top="vertical == 'top' ? true : false"
        :right="horizontal == 'right' ? true : false"
        :left="horizontal == 'left' ? true : false"
        :bottom="vertical == 'bottom' ? true : false"
        :center="horizontal == 'center' ? true : false"
      >
        <YartuButton primary>Open Tooltip</YartuButton>
        <template #tooltip>Hello from Tooltip!</template>
      </y-tooltip>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Horizontal</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            :checked="true"
            v-model="horizontal"
            inputValue="right"
            label="Right "
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="horizontal"
            inputValue="left"
            label="Left"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="horizontal"
            inputValue="center"
            label="Center"
          ></y-radio>

          <p class="font-semibold">Vertical</p>
          <y-radio
            :checked="true"
            class="gap-2 text-sm"
            v-model="vertical"
            inputValue="bottom"
            label="Bottom"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="vertical"
            inputValue="top"
            label="Top"
          ></y-radio>
        </div>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-tooltip{{
      vertical == "bottom"
        ? " bottom"
        : "" + vertical == "top"
        ? " top"
        : "" + right == true
        ? "right"
        : "" + left == true
        ? " left"
        : "" + center == true
        ? " center "
        : ""
    }}
    {{
      horizontal == "right"
        ? " right"
        : "" + horizontal == "left"
        ? " left"
        : "" + horizontal == "center"
        ? " center "
        : ""
    }}&gt; {{ "\n  " }} &lt;y-button primary&gt;Open Tooltip&lt;/y-button&gt;
    {{ "\n   " }}&lt;template #tooltip&gt;Hello from Tooltip!&lt;/template&gt;
    {{ "\n " }}&lt;/y-tooltip&gt;
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
          <td>mode</td>
          <td>String</td>
          <td>'hover'</td>
        </tr>
        <tr>
          <td>top</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>bottom</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>left</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>right</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>center</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import YartuButton from "../ComponentsUsage/YartuButton.vue";
const center = ref(false),
  bottom = ref(false),
  top = ref(false),
  left = ref(false),
  right = ref(false);

const vertical = ref("bottom");
const horizontal = ref("right");

function setprop(prop) {
  if (prop.value == false) prop.value = true;
  else prop.value = false;
}
</script>
