<template>
  <usage>
    <template #title>Tree</template>
    <template #component>
      <y-tree
        :items="treeData"
        :selected="selectedNode"
        :simple="simple"
        :expanded="expanded"
        @onSelect="handleSelect"
        v-model="selectedNodeId"
      >
        <template #prefix>
          <y-icon name="yi yi-folder"></y-icon>
        </template>
      </y-tree>
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-checkbox
          @change="simple == true ? (simple = false) : (simple = true)"
          inputValue="simple"
          label="Simple"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="expanded == false ? (expanded = true) : (expanded = false)"
          inputValue="expanded"
          label="Expanded"
          class="gap-2"
        ></y-checkbox>

        <p class="font-bold pt-4">Selected Item Id = {{ selectedNode }}</p>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-tree {{ "\n   " }}:items="treeData"{{
      "\n  "
    }}
    :selected="selectedNode"{{ "\n  " }} :simple="simple"{{
      "\n  "
    }}
    :expanded="expanded"{{ "\n  " }} @onSelect="handleSelect"{{
      "\n  "
    }}
    v-model="selectedNodeId"&gt;{{ "\n  " }} &lt;template #prefix&gt;{{
      "\n   "
    }}
    &lt;span &gt;📁&lt;/span&gt;{{ "\n  " }} &lt;/template&gt;{{ "\n" }}
    &lt;/y-tree&gt;
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
          <td>'Required!'</td>
        </tr>
        <tr>
          <td>simple</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>itemKey</td>
          <td>undefined</td>
          <td></td>
        </tr>
        <tr>
          <td>folderKey</td>
          <td>undefined</td>
          <td></td>
        </tr>
        <tr>
          <td>selected</td>
          <td>Object</td>
          <td></td>
        </tr>
        <tr>
          <td>expanded</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const expanded = ref(false),
  simple = ref(false);

const treeData = [
  {
    id: 1,
    name: "Folder 1",
    isFolder: true,
    children: [
      {
        id: 2,
        name: "File 1",
        isFolder: false,
      },
      {
        id: 3,
        name: "File 2",
        isFolder: false,
      },
    ],
  },
  {
    id: 4,
    name: "Folder 2",
    isFolder: true,
    children: [
      {
        id: 5,
        name: "Folder 3",
        isFolder: true,
        children: [
          {
            id: 6,
            name: "File 3",
            isFolder: false,
          },
        ],
      },
    ],
  },
];

const selectedNode = ref(null);
const selectedNodeId = ref(null);

const handleSelect = (node) => {
  selectedNode.value = node;
  selectedNodeId.value = node.id;
};
</script>
