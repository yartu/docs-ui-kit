<template>
  <usage>
    <template #title>Data Table</template>
    <template #component>
      <y-data-table
        :items="items"
        :headers="headers"
        :selectable="selectable"
        :dataSearch="search"
        emptystateText
        :object="true"
      >
      </y-data-table>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-checkbox
          @change="search == false ? (search = true) : (search = false)"
          inputValue="search"
          checked
          label="Search"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="
            selectable == false ? (selectable = true) : (selectable = false)
          "
          inputValue="selectable"
          checked
          label="Selectable"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-data-table {{ search ? "dataSearch " : "" }}{{ "\n " }} :item="items"
    :headers="headers" {{ selectable ? "selectable" : "" }} &gt;{{ "\n" }}

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
          <td>items</td>
          <td>Array</td>
          <td>required!</td>
        </tr>
        <tr>
          <td>headers</td>
          <td>Array</td>
          <td>() => []</td>
        </tr>
        <tr>
          <td>selectable</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>boolean</td>
          <td>fasle</td>
        </tr>
        <tr>
          <td>object</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>inputValue</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>passive</td>
          <td>boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>dataSearch</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>filter</td>
          <td>Function</td>
          <td>''</td>
        </tr>
        <tr>
          <td>filterFields</td>
          <td>array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>emptyStateText</td>
          <td>String</td>
          <td>"...any items"</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const headers = ref([
  { text: "ID", value: "id" },
  { text: "Name", value: "name" },
  { text: "Age", value: "age" },
  { text: "Major", value: "major" },
]);
const items = ref([
  { id: 1, name: "John Doe", age: 21, major: "Computer Science" },
  { id: 2, name: "Jane Smith", age: 19, major: "English" },
  { id: 3, name: "Bob Johnson", age: 22, major: "History" },
  { id: 4, name: "Sarah Lee", age: 23, major: "Science" },
]);
const header = headers[0];
const active = ref(false),
  search = ref(true),
  selectable = ref(true),
  passive = ref(false);

function setActive() {
  if (active.value == false) {
    active.value = true;
  } else {
    active.value = false;
  }
  console.log(header.value);
}
</script>
