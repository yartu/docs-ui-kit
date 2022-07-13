<template>
  <usage>
    <template #title>Navigation Drawer</template>
    <template #component>
      <y-navigation-drawer
        :open="open"
        :rounded="rounded"
        :overlay="overlay"
        :topGap="topGap"
        :bottomGap="bottomGap"
        :bg="bg"
        @collapse="openNavigation"
        :absolute="position == 'absolute' ? true : false"
        width="110px"
        :bottom="bottom"
        :right="right"
        :fixed="position == 'fixed' ? true : false"
      >
        <y-navigation-drawer-item>Home</y-navigation-drawer-item>
        <y-navigation-drawer-item>Products</y-navigation-drawer-item>
        <y-navigation-drawer-item>Contact</y-navigation-drawer-item>
      </y-navigation-drawer>
      <div class="w-full h-full flex items-center justify-center">
        <y-button tertiary @click="openNavigation">Open Navigation</y-button>
      </div>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-radio
          v-model="position"
          checked
          inputValue="relative"
          label="Relative"
          class="gap-2"
        ></y-radio>
        <y-radio
          v-model="position"
          inputValue="fixed"
          label="Fixed"
          class="gap-2"
        ></y-radio>
        <y-radio
          v-model="position"
          inputValue="absolute"
          label="Absolute"
          class="gap-2"
        ></y-radio>
        <y-checkbox
          @change="setBottom"
          inputValue="bottom"
          label="Bottom"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setRight"
          inputValue="right"
          label="Right"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setOverlay"
          inputValue="overlay"
          label="Overlay"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setRounded"
          inputValue="rounded"
          label="Rounded"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setBg"
          inputValue="bg"
          label="Background"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setTopGap"
          inputValue="topGap"
          label="Top Gap"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="setBottomGap"
          inputValue="bottomGap"
          label="Bottom Gap"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-navigation-drawer
    {{ position == "relative" ? "" : position }}{{ open ? " open" : ""
    }}{{ rounded ? "\n rounded" : "" }}{{ overlay ? "\n overlay" : ""
    }}{{ bottom ? "\n bottom" : "" }}{{ right ? "\n right" : ""
    }}{{ bg == "#f8fafd" ? "" : '\n bg="#a6a6a6"'
    }}{{ topGap == "0px" ? "" : '\n topGap="20px"'
    }}{{ bottomGap == "0px" ? "" : '\n bottomGap="20px"'
    }}{{ "\n " }}width="110px"&nbsp;&gt;
    {{
      "\n     "
    }}&lt;y-navigation-drawer-item&gt;Home&lt;/y-navigation-drawer-item&gt;
    {{
      "\n     "
    }}&lt;y-navigation-drawer-item&gt;Products&lt;/y-navigation-drawer-item&gt;
    {{
      "\n     "
    }}&lt;y-navigation-drawer-item&gt;Contact&lt;/y-navigation-drawer-item&gt;
    {{ "\n " }}&lt;/y-navigation-drawer&gt;
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
          <td>absolute</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>width</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>bottom</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>right</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>fixed</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>open</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>overlay</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>rounded</td>
          <td>String,Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>bg</td>
          <td>String</td>
          <td>'#f8fafd'</td>
        </tr>
        <tr>
          <td>topGap</td>
          <td>String</td>
          <td>'0px'</td>
        </tr>
        <tr>
          <td>bottomGap</td>
          <td>String</td>
          <td>'0px'</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const overlay = ref(false),
  topGap = ref("0px"),
  bottomGap = ref("0px"),
  bg = ref("#f8fafd"),
  width = ref(""),
  bottom = ref(false),
  right = ref(false),
  rounded = ref(false),
  open = ref(false),
  position = ref("relative");

function openNavigation() {
  if (open.value == false) open.value = true;
  else open.value = false;
}

function setRight() {
  if (right.value == false) right.value = true;
  else right.value = false;
}

function setOverlay() {
  if (overlay.value == false) overlay.value = true;
  else overlay.value = false;
}
function setBottom() {
  if (bottom.value == false) bottom.value = true;
  else bottom.value = false;
}
function setRounded() {
  if (rounded.value == false) rounded.value = true;
  else rounded.value = false;
}
function setWidth() {
  if (width.value == "") width.value = "150px";
  else width.value = "";
}
function setBg() {
  if (bg.value == "#f8fafd") bg.value = "#a6a6a6";
  else bg.value = "#f8fafd";
}
function setTopGap() {
  if (topGap.value == "0px") topGap.value = "20px";
  else topGap.value = "0px";
}
function setBottomGap() {
  if (bottomGap.value == "0px") bottomGap.value = "20px";
  else bottomGap.value = "0px";
}
</script>
