<template>
  <usage>
    <template #title>Dropdown Drawer</template>
    <template #component>
      <div class=" w-3/4">
        <y-dropdown-drawer :active="active" toggleIcon="yi yi-arrow-right" prefix="yi yi-folder" title="Folders">
          <y-dropdown-drawer-item prefix="yi yi-folder " class="gap-1">
            Folder
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            prefix="yi yi-folder"
            class="gap-1"
            
            >Folder</y-dropdown-drawer-item
          >
        </y-dropdown-drawer>
      </div>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-1">
          <y-checkbox
            @change="setActive"
            inputValue="active"
            label="Active"
            class="gap-2"
          ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-dropdown-drawer {{active ? 'active ':''}}title="Folders"{{'\n'}} toggleIcon="yi yi-arrow-right" prefix="yi yi-folder"&gt;{{'\n   '}}
    &lt;y-dropdown-drawer-item class="gap-1" prefix="yi yi-folder"&gt;{{'\n      '}}Folder{{'\n    '}}&lt;/y-dropdown-drawer-item&gt;{{'\n   '}}
    &lt;y-dropdown-drawer-item class="gap-1" prefix="yi yi-folder" {{'\n      '}}  postfix="yi yi-arrow-right"&gt;{{'\n      '}}Folder{{'\n    '}}&lt;/y-dropdown-drawer-item&gt;{{'\n'}}
    
    &lt;/y-dropdown-drawer&gt;
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
          <td>title</td>
          <td>String</td>
          <td>'Title'</td>
        </tr>
        <tr>
          <td>active</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>prefix</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>toggleIcon</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>collapse</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(false);
function setActive() {
  if (active.value == false) {
    active.value = true;
  } else {
    active.value = false;
  }
}
</script>
