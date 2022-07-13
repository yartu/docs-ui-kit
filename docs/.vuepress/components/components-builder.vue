<template>
  <div class="flex border rounded-md mt-10">
    <div class="flex flex-col justify-between items-center h-80 w-2/3 border-r">
      <div class="h-full flex items-center justify-center">
        <y-button
          ref="exampleButton"
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
          >{{
            buttonShape == "circle" || buttonShape == "square" ? "" : "Sample"
          }}</y-button
        >
      </div>
      <div class="border-t h-12 flex justify-center gap-3 w-full">
        <div class="flex items-center gap-2">
          <y-checkbox @click="setDisabled" inputValue="disabled"></y-checkbox
          ><label class="text-base" for="deneme">Disabled</label>
        </div>
        <div class="flex items-center gap-2">
          <y-checkbox @click="setLoading" inputValue="loading"></y-checkbox
          ><label class="text-base" for="deneme">Loading</label>
        </div>
        <div class="flex items-center gap-2">
          <y-checkbox @click="setActive" inputValue="active"></y-checkbox
          ><label class="text-base" for="deneme">Active</label>
        </div>
      </div>
    </div>
    <div class="flex flex-col p-4 w-1/3 overflow-scroll">
      <p>Button Types</p>
      <ul class="ml-2">
        <li>
          <div class="flex items-center gap-2">
            <y-radio
              v-model="buttonType"
              inputValue="primary"
              label="Primary"
              checked
            ></y-radio>
          </div>
          <div class="flex items-center gap-2">
            <y-radio
              v-model="buttonType"
              inputValue="secondary"
              label="Secondary"
            ></y-radio>
          </div>
          <div class="flex items-center gap-2">
            <y-radio
              v-model="buttonType"
              inputValue="tertiary"
              label="Tertiary"
            ></y-radio>
          </div>
        </li>
      </ul>
      <p>Button Shape</p>
      <ul class="ml-2">
        <li>
          <div class="flex items-center gap-2">
            <y-radio
              checked
              v-model="buttonShape"
              inputValue=""
              label="Default"
            ></y-radio>
          </div>
        </li>
        <li>
          <div class="flex items-center gap-2">
            <y-radio
              v-model="buttonShape"
              inputValue="square"
              label="Square"
            ></y-radio>
          </div>
        </li>
        <li>
          <div class="flex items-center gap-2">
            <y-radio
              v-model="buttonShape"
              inputValue="circle"
              label="Circle"
            ></y-radio>
          </div>
        </li>
      </ul>
      <p>Button Size</p>
      <ul class="ml-2">
        <li>
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
        </li>
      </ul>
      <p>Icon</p>
      <ul class="ml-2">
        <li>
          <div class="flex items-center gap-2">
            <y-radio checked v-model="icon" inputValue=""></y-radio>
            <p class="text-base">None</p>
          </div>
        </li>
        <li>
          <div class="flex items-center gap-2">
            <y-radio v-model="icon" inputValue="yi notification"></y-radio>
            <i class="yi notification"></i>
          </div>
        </li>
        <li>
          <div class="flex items-center gap-2">
            <y-radio v-model="icon" inputValue="yi check"></y-radio>
            <i class="yi check"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <br />
  <div class="border">
    <pre>
        <p>&lt;y-button<br>{{buttonType}}{{buttonShape==null ? "": "\n"+buttonShape}}{{icon=='' ? "": '\nicon="'+icon+'"'}}{{sizeVal == '25' ? '\nsize="xs"':(sizeVal=='50' ? '\nsize="sm"': sizeVal=='100' ? '\nsize="lg"':'')}}{{disabled ? '\ndisabled':''}}{{active ? '\nactive\napp':''}}{{loading ? '\nloading':''}}<br>&gt;{{buttonShape == "circle" || buttonShape == "square" ? "" : "Sample"}}&lt;y-button&gt;</p>
      </pre>
    <pre>
       {{ properties }}
      </pre
    >
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
  spinnerColor = ref("#3663f2"),
  exampleButton = ref(null),
  properties = ref("");

const sizeVal = ref("75");
const buttonType = ref("primary");
const buttonShape = ref(null);

onMounted(() => {
  const a = exampleButton._rawValue.$.propsOptions[0];
  let props_json = {};
  let build_json = {
    checkbox: [],
    string: [],
  };

  for (let property in a) {
    props_json[property] = {};
    for (let inner_props in a[property]) {
      if (!["0", "1", "type"].includes(inner_props)) {
        props_json[property][inner_props] = a[property][inner_props];
      }
      if (["type"].includes(inner_props)) {
        props_json[property][inner_props] = a[property][inner_props]["name"];
      }
    }
  }
  let i = 0;
  for (let property_name in props_json) {
    if (props_json[property_name]["type"] == "String") {
        let temp = {};
        temp[Object.keys(props_json)[i]] = props_json[property_name];
        build_json["string"].push(temp);
    }
    if (props_json[property_name]["type"] == "Boolean") {
      let temp = {};
      temp[Object.keys(props_json)[i]] = props_json[property_name];
      build_json["checkbox"].push(temp);
    }
    i++;
  }
  console.log("props_json:::::::>>>>", props_json);
  console.log("build_json:::::::>>>>", build_json);
  properties.value = props_json;
});

function setDisabled() {
  console.log("dsb");
  if (disabled.value == false) disabled.value = true;
  else disabled.value = false;
}
function setActive() {
  console.log("act");
  if (active.value == false) {
    active.value = true;
    app.value = true;
  } else {
    active.value = false;
    app.value = false;
  }
}
function setLoading() {
  console.log("act");
  if (loading.value == false) loading.value = true;
  else loading.value = false;
}
</script>
