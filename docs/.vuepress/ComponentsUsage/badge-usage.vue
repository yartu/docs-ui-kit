<template>
  <usage>
    <template #title>Badge</template>
    <template #component
      ><y-badge
        :size="sizeVal == '20' ? 'base' : 'sm'"
        :border="border"
        :ping="ping"
        :bottom="bottom"
        :left="left"
        :visible="visible"
        :color="color"
        :bgColor="bgColor"
        :borderColor="borderColor"
        value="+1"
        ><y-avatar label="UK"></y-avatar></y-badge
    ></template>
    <template #bottomProps>
      <div class="flex w-1/3 flex-col gap-3">
        <p class="font-semibold">Color</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            v-model="color"
            inputValue="#ffffff"
            label="Default"
            checked
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="color"
            inputValue="#cccccc"
            label="clr1"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="color"
            inputValue="#eeeeee"
            label="clr2"
          ></y-radio>
        </div>
      </div>
      <div class="flex w-1/3 flex-col gap-3">
        <p class="font-semibold">Bg Color</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            checked
            v-model="bgColor"
            inputValue="#49ab5e"
            label="Default"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="bgColor"
            inputValue="#bbbbbb"
            label="clr3"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="bgColor"
            inputValue="#aaaaaa"
            label="clr4"
          ></y-radio>
        </div>
      </div>
      <div class="flex w-1/3 flex-col gap-3">
        <p class="font-semibold">Border Color</p>
        <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            checked
            v-model="borderColor"
            inputValue="#e5ebf5ff"
            label="Default"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="borderColor"
            inputValue="#000000"
            label="clr5"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="borderColor"
            inputValue="#dddddd"
            label="clr6"
          ></y-radio>
        </div>
      </div>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-checkbox
          @change="setBorder"
          inputValue="border"
          label="Border"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setBottom"
          inputValue="bottom"
          label="Bottom"
          class="gap-2"
        ></y-checkbox>

        <y-checkbox
          @change="setLeft"
          inputValue="left"
          label="Left"
          class="gap-2"
        ></y-checkbox>

        <y-checkbox
          @change="setPing"
          inputValue="ping"
          label="Ping"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setVisible"
          inputValue="visible"
          label="Visible"
          class="gap-2"
        ></y-checkbox>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Button Size</p>
        <div class="flex flex-col">
          <div class="slidecontainer">
            <input
              type="range"
              min="10"
              max="20"
              step="10"
              v-model="sizeVal"
              class="slider"
              id="myRange"
            />
          </div>
        </div>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-badge value="+1"{{
      color == "#ffffff" ? "" : '\n color="' + color + '"'
    }}{{ bgColor == "#49ab5e" ? "" : '\n bgColor="' + bgColor + '"'
    }}{{ border ? "\n border" : ""
    }}{{
      borderColor == "#e5ebf5ff" || border == false
        ? ""
        : '\n borderColor="' + borderColor + '"'
    }}{{ bottom ? "\n bottom" : "" }}{{ left ? "\n left" : ""
    }}{{ ping ? "\n ping" : "" }}{{ visible ? "" : "\n visible"
    }}{{ sizeVal == "10" ? '\n size="sm"' : "" }}&nbsp;&gt;Sample
    Badge&lt;/y-badge&gt;
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
          <td>size</td>
          <td>String</td>
          <td>'base'</td>
        </tr>
        <tr>
          <td>value</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>border</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>'#ffffff'</td>
        </tr>
        <tr>
          <td>bgColor</td>
          <td>String</td>
          <td>'#49ab5e'</td>
        </tr>
        <tr>
          <td>borderColor</td>
          <td>String</td>
          <td>'#e5ebf5ff'</td>
        </tr>
        <tr>
          <td>ping</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>left</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>bottom</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>relative</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const border = ref(false),
  bottom = ref(false),
  left = ref(false),
  ping = ref(false),
  color = ref("#ffffff"),
  visible = ref(true);

const sizeVal = ref("20");
const bgColor = ref("#49ab5e");
const borderColor = ref("#e5ebf5ff");

function setBorder() {
  if (border.value == false) border.value = true;
  else border.value = false;
}
function setBottom() {
  if (bottom.value == false) bottom.value = true;
  else bottom.value = false;
}

function setPing() {
  if (ping.value == false) ping.value = true;
  else ping.value = false;
}
function setVisible() {
  if (visible.value == false) visible.value = true;
  else visible.value = false;
}
function setLeft() {
  if (left.value == false) left.value = true;
  else left.value = false;
}
</script>
