<template>
  <usage>
    <template #title>Note Card</template>
    <template #component>
      <y-note-card :disableBulkAction="disableBulkAction">
        <template #title>Note Card Sample</template>
        <template #content>This is a simple note card sample</template>
        <template #prefixBtn
          ><y-button
            v-if="prefixButton"
            square
            tertiary
            icon="yi yi-delete"
          ></y-button
        ></template>
        <template #postfixBtn
          ><y-button
            v-if="postfixButton"
            circle
            tertiary
            icon="yi yi-export"
          ></y-button
        ></template>
        <template #bulkAction><p>Some content here</p></template>
      </y-note-card>
    </template>
    <template #bottomProps>
      <div class="w-full flex justify-evenly items-center">
        <y-checkbox
          @change="setDisableBulkAction"
          inputValue="disableBulkAction"
          label="Disable Bulk Action"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="addPrefixButton"
          inputValue="prefixButton"
          label="Prefix Button"
          class="gap-2"
        ></y-checkbox>
        <y-checkbox
          @change="addPostfixButton"
          inputValue="postfixButton"
          label="Postfix Button"
          class="gap-2"
        ></y-checkbox>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-note-card{{ disableBulkAction ? " disableBulkAction" : "" }}&gt;
    {{ "\n   " }}&lt;template #title&gt;Note Card Sample&lt;/template&gt;
    {{ "\n   " }}&lt;template #content&gt;This is a simple note card
    sample&lt;/template&gt;
    {{
      prefixButton
        ? '\n   &lt;template #prefixBtn&gt;&lt;y-button v-if="prefixButton" square tertiary icon="yi yi-delete"&gt;&lt;/y-button&gt;&lt;/template&gt; '
        : ""
    }}
    {{
      postfixButton
        ? '\n   &lt;template #postfixBtn&gt;&lt;y-button v-if="postfixButton" circle tertiary icon="yi yi-export"&gt;&lt;/y-button&gt;&lt;/template&gt;'
        : ""
    }}
    {{
      disableBulkAction
        ? ""
        : "\n   &lt;template #bulkAction&gt;&lt;p&gt;Some content here&lt;/p&gt;&lt;/template&gt;"
    }}{{ "\n" }}
    &lt;/y-note-card&gt;
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
          <td>disableBulkAction</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        
      </tbody>
    </table>
  </div>
  
</template>

<script setup>
import { ref } from "vue";

const disableBulkAction = ref(false),
  prefixButton = ref(false),
  postfixButton = ref(false);

function setDisableBulkAction() {
  if (disableBulkAction.value == false) disableBulkAction.value = true;
  else disableBulkAction.value = false;
}

function addPrefixButton() {
  if (prefixButton.value == false) prefixButton.value = true;
  else prefixButton.value = false;
}

function addPostfixButton() {
  if (postfixButton.value == false) postfixButton.value = true;
  else postfixButton.value = false;
}
</script>
