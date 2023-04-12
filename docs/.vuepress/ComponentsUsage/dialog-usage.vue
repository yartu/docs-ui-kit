<template>
  <usage>
    <template #title>Dialog</template>
    <template #component>
      <div class="w-full h-full">
        <div class="flex justify-center items-center">
          <y-dialog
            title="Sample Dialog"
            subtitle="Some text here"
            :type="type"
            :actionButtons="actionButtons"
            :showCancelButton="cancelButton"
          >
          </y-dialog>
        </div>
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
        <y-checkbox
          @change="
            cancelButton == false
              ? (cancelButton = true)
              : (cancelButton = false)
          "
          checked
          inputValue="cancelButton"
          label="Cancel Button"
          class="gap-2"
        ></y-checkbox>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Icon</p>
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2">
            <y-radio checked v-model="type" inputValue="info"></y-radio>
            <p class="text-base">İnfo</p>
          </div>
          <div class="flex items-center gap-2">
            <y-radio v-model="type" inputValue="warning"></y-radio>
            <p class="text-base">Warning</p>
          </div>

          <div class="flex items-center gap-2">
            <y-radio v-model="type" inputValue="danger"></y-radio>
            <p class="text-base">Danger</p>
          </div>
          <div class="flex items-center gap-2">
            <y-radio v-model="type" inputValue="success"></y-radio>
            <p class="text-base">Success</p>
          </div>
        </div>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-dialog type={{
      type == "info"
        ? "info "
        : type == "danger"
        ? "danger"
        : type == "warning"
        ? "warning"
        : "success"
    }}{{ "\n " }} title="Sample Dialouge"{{ "\n " }} subtitle="Some text here"{{
      "\n "
    }}
    {{ cancelButton ? "showCancelButton" : "" }} &gt;{{ "\n" }}

    &lt;/y-data-table&gt;
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
          <td>''</td>
        </tr>
        <tr>
          <td>subtitle</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>maxwidth</td>
          <td>String</td>
          <td>'404px'</td>
        </tr>
        <tr>
          <td>minwidth</td>
          <td>String</td>
          <td>'404px'</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>form</td>
          <td>Object</td>
          <td>''</td>
        </tr>
        <tr>
          <td>cancelButton</td>
          <td>String</td>
          <td>'Cancel'</td>
        </tr>
        <tr>
          <td>closeableButton</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>actionButtons</td>
          <td>Array</td>
          <td>"() => []"</td>
        </tr>
        <tr>
          <td>showCancelButton</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>autoClose</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(false),
  icon = ref("yi yi-folder"),
  type = ref("info"),
  cancelButton = ref(true);
function setActive() {
  if (active.value == false) {
    active.value = true;
  } else {
    active.value = false;
  }
}
</script>
