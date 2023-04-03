<template>
  <usage>
    <template #title>Mention</template>
    <template #component>
      <div>
        <y-mention
          v-model="mentionValue"
          :keys="suggestions"
          trigger="@"
          @selected="onMentionSelected"
        />
        <div v-if="mentionValue">You typed: {{ mentionValue }}</div>
      </div>
    </template>

    <template #rightProps>
      <div class="flex flex-col gap-1">
        <y-checkbox
          @change="multiple == false ? (multiple = true) : (multiple = false)"
          inputValue="multiple"
          label="Multiple"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-mention&gt;{{ "\n " }}&lt;/y-mention&gt;
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
          <td>itemKey</td>
          <td>String</td>
          <td>id</td>
        </tr>
        <tr>
          <td>multiple</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>options</td>
          <td>Array</td>
          <td>required</td>
        </tr>
        <tr>
          <td>modelValue</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const progress = ref(30),
  selected = ref(),
  indeterminate = ref(false),
  multiple = ref(false);

const handleSelected = (user) => {
  comment.value += ` @${user.name} `;
  console.log(comment.value);
};
const postComment = () => {
  console.log(comment.value);
  console.log("Yorum gönderildi:", comment.value);
  comment.value = "";
};
const mentionValue = ref("");
const suggestions = ref([
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Steve Smith" },
  { id: 4, name: "Mary Johnson" },
  { id: 5, name: "Bob Williams" },
]);

function onMentionSelected(selected) {
  console.log("Selected user: ", selected);
}
</script>
