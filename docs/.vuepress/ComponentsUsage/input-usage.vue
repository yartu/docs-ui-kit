<template>
  <usage>
    <template #title>Input</template>
    <template #component>
      <y-input
        label="Search"
        :dropdown="dropdown"
        dropdownTitle="Select"
        :dropdownItem="dropdwonItems"
        :action="action"
        v-model="text"
        dropdownIcon="yi yi-arrow-down"
        :iconRight="iconRight"
        :helper="helper"
        :warning="inputFeedback == 'warning' ? true : false"
        :error="inputFeedback == 'error' ? true : false"
        :info="inputFeedback == 'info' ? true : false"
      >
        <template #icon><i class="yi yi-search"></i></template>
        <template #helper>Search for anything</template>
      </y-input>
    </template>

    <template #rightProps>
      <div class="flex flex-col gap-1">
          <y-radio
            class="gap-2 text-sm"
            v-model="inputFeedback"
            inputValue="default"
            label="Default"
            checked
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="inputFeedback"
            inputValue="error"
            label="Error"
          ></y-radio>

          <y-radio
            class="gap-2 text-sm"
            v-model="inputFeedback"
            inputValue="warning"
            label="Warning"
          ></y-radio>
          
          <y-radio
            class="gap-2 text-sm"
            v-model="inputFeedback"
            inputValue="info"
            label="Info"
          ></y-radio>
      </div>
      <div class="flex flex-col gap-1">
          <y-checkbox
            @change="setDropdownActive"
            inputValue="dropdown"
            label="Dropdown"
            class="gap-2"
          ></y-checkbox>
          <y-checkbox
            @change="setAction"
            inputValue="action"
            label="Action"
            class="gap-2"
          ></y-checkbox>
       
          <y-checkbox
            @change="setIconRight"
            inputValue="iconRight"
            label="Icon Right"
            class="gap-2"
          ></y-checkbox>
       
          <y-checkbox
            @change="setHelper"
            inputValue="helper"
            label="Helper"
            class="gap-2"
          ></y-checkbox>
      </div>
    </template>
  </usage>
   <copy-to-clip-board>
    
      &lt;y-input v-model="text" label="Search"{{ inputFeedback == "default" ? "" : "\n "+inputFeedback}}{{ 
      dropdown ? "\n dropdown" : "" }}{{ 
      dropdown ? '\n dropdownIcon="yi yi-arrow-down"' : "" }}{{ 
      dropdown ? '\n :dropdownItems="dropDownItems"' : "" }}{{ 
      action ? "\n action" : ""}}{{ 
      iconRight ? "\n iconRight" : "" }}{{ 
      helper ? "\n helper" : "" }}&gt;{{
      action ? '\n    <template #icon><i class="yi yi-search"></i></template>' : ""}}{{helper ? '\n    <template #helper>Search for anything</template>':''}}{{'\n '}}&lt;/y-input&gt;
  
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
          <td>id</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>label</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>dropdown</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>dropdownIcon</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>dropdownTitle</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>dropdownItem</td>
          <td>Array</td>
          <td>null</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>iconRight</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>action</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>error</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>warning</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>info</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>helper</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dropdown = ref(false),
  action = ref(false),
  helper = ref(false),
  iconRight = ref(false);

const text = ref("");
const inputFeedback = ref("default");
const dropdwonItems = ref(["GB","MB","KB"]);

function setDropdownActive() {
  if (dropdown.value == false) dropdown.value = true;
  else dropdown.value = false;
}
function setAction() {
  if (action.value == false) action.value = true;
  else action.value = false;
}
function setHelper() {
  if (helper.value == false) helper.value = true;
  else helper.value = false;
}

function setIconRight() {
  if (iconRight.value == false) iconRight.value = true;
  else iconRight.value = false;
}
</script>
