<template>
  <usage>
    <template #title>Textarea</template>
    <template #component>
      <y-text-area
        :id="1"
        v-model="text"
        title="Text Area"
        :placeholder="placeholder == true ? 'Type here..' : ''"
        :disabled="disable"
        :readonly="readOnly"
        :helper="helper"
        ><template #helper v-if="helper">Write something</template></y-text-area
      >
    </template>
    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-checkbox
          @change="disable == true ? (disable = false) : (disable = true)"
          inputValue="disable"
          label="Disabled"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="readOnly == false ? (readOnly = true) : (readOnly = false)"
          inputValue="readOnly"
          label="Readonly"
          class="gap-2"
        ></y-checkbox>

        <y-checkbox
          @change="
            placeholder == true ? (placeholder = false) : (placeholder = true)
          "
          inputValue="placeholder"
          label="Placeholder"
          class="gap-2"
        ></y-checkbox>

        <y-checkbox
          @change="helper == true ? (helper = false) : (helper = true)"
          inputValue="helper"
          label="Helper"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-text-area
    {{ "\n " }}:id="1" {{ "\n " }}v-model="text"
    {{ placeholder == true ? '\n placeholder="Type here.. " ' : "" }}
    {{ readOnly == true ? "\n readonly " : "" }}
    {{ disable == true ? "\n disabled " : "" }}title="Text Area"&gt;
    {{ "\n  " }} &lt;template #helper&gt;
    {{ helper == true ? "Write Something" : "" }} &lt;/template&gt;
    {{ "\n " }}&lt;/y-text-area&gt;
  </copy-to-clip-board>

  <div class="flex flex-col mt-7 gap-1">
    <p class="font-semibold text-xl">Component Props</p>
    <table>
      <thead>
        <tr>
          <th>Prop Name</th>
          <th>Type</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>String,Number</td>
          <td>true</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>true</td>
        </tr>
        <tr>
          <td>name</td>
          <td>String</td>
          <td>false</td>
        </tr>
        <tr>
          <td>wrap</td>
          <td>String</td>
          <td>false</td>
        </tr>
        <tr>
          <td>rows</td>
          <td>Number</td>
          <td>false</td>
        </tr>
        <tr>
          <td>cols</td>
          <td>Number</td>
          <td>false</td>
        </tr>
        <tr>
          <td>maxlength</td>
          <td>Number</td>
          <td>false</td>
        </tr>
        <tr>
          <td>minlength</td>
          <td>Number</td>
          <td>false</td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>spellcheck</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>showLenght</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>required</td>
          <td>Number</td>
          <td>false</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String</td>
          <td>false</td>
        </tr>
        <tr>
          <td>helperMessage</td>
          <td>String</td>
          <td>false</td>
        </tr>
        <tr>
          <td>resize</td>
          <td>String</td>
          <td>'both'</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref(""),
  placeholder = ref(false),
  disable = ref(false),
  readOnly = ref(false),
  helper = ref(false);
</script>
