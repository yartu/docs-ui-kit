<template>
  <usage>
    <template #title>Textarea</template>
    <template #component>
      <y-text-area
       :id="1" 
       v-model="text" 
       title="Text Area"
       ><template #helper>Write something</template></y-text-area>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-text-area
       {{'\n '}}:id="1" 
       {{'\n '}}v-model="text" 
       {{'\n '}}title="Text Area"&gt;
      {{'\n  '}} &lt;template #helper&gt;Write something&lt;/template&gt;
      {{'\n '}}&lt;/y-text-area&gt;
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
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text=ref("");

</script>
