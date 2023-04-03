<template>
  <usage>
    <template #title>Avatar Group</template>
    <template #component>
      <y-avatar-group
        :size="
          sizeVal == '100'
            ? 'xs'
            : sizeVal == '0'
            ? 'md'
            : sizeVal == '50'
            ? 'sm'
            : 'xs'
        "
        :max="4"
        :color="color"
      >
        <y-avatar size="md" image="/docs-ui-kit/images/avatar.jpeg"></y-avatar>
        <y-avatar size="md" image="/docs-ui-kit/images/john.jpeg"></y-avatar>
        <y-avatar size="md" label="CJ"></y-avatar>
        <y-avatar size="md" label="At"></y-avatar>
        <y-avatar size="md" label="FG"></y-avatar>
        <y-avatar size="md" label="AE"></y-avatar>
        <y-avatar size="md" label="YT"></y-avatar>
        <y-avatar size="md" label="KI"></y-avatar>
      </y-avatar-group>
    </template>

    <template #rightProps>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">Group Size</p>
        <div class="flex flex-col">
          <div class="slidecontainer">
            <input
              type="range"
              min="0"
              max="100"
              step="50"
              v-model="sizeVal"
              class="slider"
              id="myRange"
            />
          </div>
        </div>
      </div>
      <div class="flex w-1/3 flex-col gap-3">
        <p class="font-semibold">Color</p>
        <div class="flex gap-4">
          <y-radio
            class="gap-2 text-sm"
            v-model="color"
            inputValue="blue"
            label="Blue"
            checked
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="color"
            inputValue="red"
            label="Red"
          ></y-radio>
          <y-radio
            class="gap-2 text-sm"
            v-model="color"
            inputValue="green"
            label="Green"
          ></y-radio>
        </div>
      </div>
    </template>
    <template #bottomProps> </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-avatar-group
    {{
      sizeVal == "0"
        ? ' size="md"'
        : sizeVal == "50"
        ? ' size="sm"'
        : sizeVal == "100"
        ? ' size="xs"'
        : ""
    }}
    {{
      color == "red" ? "color='red'" : color == "green" ? "color='green'" : ""
    }}&gt;{{ "\n  " }} &lt;y-avatar size="md"
    image="/images/avatar.jpeg"&gt;&lt;/y-avatar&gt;{{ "\n  " }} &lt;y-avatar
    size="md" image="/images/john.jpeg"&gt;&lt;/y-avatar&gt;{{
      "\n  "
    }}
    &lt;y-avatar size="md" label="CJ"&gt;&lt;/y-avatar&gt;{{
      "\n  "
    }}
    &lt;y-avatar size="md" label="CJ"&gt;&lt;/y-avatar&gt;{{
      "\n  "
    }}
    &lt;y-avatar size="md" label="CJ"&gt;&lt;/y-avatar&gt;{{
      "\n  "
    }}
    &lt;y-avatar size="md" label="CJ"&gt;&lt;/y-avatar&gt;{{
      "\n  "
    }}
    &lt;y-avatar size="md" label="AR"&gt;&lt;/y-avatar&gt;{{ "\n" }}
    &lt;/y-avatar-group&gt;
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
          <td>'md'</td>
        </tr>
        <tr>
          <td>max</td>
          <td>number</td>
          <td>4</td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>'blue'</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const sizeVal = ref("100");
const color = ref("blue");

const colorPicker = () => {};
</script>
