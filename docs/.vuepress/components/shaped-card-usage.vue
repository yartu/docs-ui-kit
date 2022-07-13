<template>
  <usage>
    <template #title>Shaped Card</template>
    <template #component>
      <y-shaped-card
      :prefixBtn="prefixBtn"
      :postfixBtn="postfixBtn"
      :shape="shape"
      >
      <template #content>Content Area</template>
      <template #prefixBtn><y-button tertiary icon="yi yi-delete" square></y-button></template>
      <template #postfixBtn><y-checkbox></y-checkbox></template>
      <template #shape>Shape</template>
      <template #text>Title</template>
      </y-shaped-card>
      </template>
      <template #rightProps>
        <div class="flex flex-col gap-1">
          <y-checkbox
            @change="setShape"
            inputValue="shape"
            label="Shape"
            class="gap-2"
          ></y-checkbox>
          <y-checkbox
            @change="setPostfixBtn"
            inputValue="postfixBtn"
            label="Postfix Button"
            class="gap-2"
          ></y-checkbox>
          <y-checkbox
            @change="setPrefixBtn"
            inputValue="prefixBtn"
            label="Prefix Button"
            class="gap-2"
          ></y-checkbox>
      </div>
      </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-shaped-card{{
    shape ?'':'\n :shape="false"'}}{{
    postfixBtn ?'\n postfixBtn':''}}{{
    prefixBtn ?'\n prefixBtn':''}}&gt;
      {{'\n  '}}&lt;template #content&gt;{{'\n   '}}/.../{{'\n  '}}&lt;/template&gt;
     {{postfixBtn ?'\n  &lt;template #postfixBtn&gt;\n   /.../\n  &lt;/template&gt;':''}} 
     {{prefixBtn ?'\n  &lt;template #prefixBtn&gt;\n   /.../\n  &lt;/template&gt;':''}} 
     {{shape ?'\n   &lt;template #shape&gt;\n   Shape\n  &lt;/template&gt;':''}}
      {{'\n  '}}&lt;template #text&gt;{{'\n   '}}Title{{'\n  '}}&lt;/template&gt;
      
     {{'\n '}}&lt;/y-shaped-card&gt;
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
          <td>prefixBtn</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>postfixBtn</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const shape = ref(true),
  prefixBtn = ref(false),
  postfixBtn = ref(false);


function setShape() {
  if (shape.value == false) shape.value = true;
  else shape.value = false;
}
function setPrefixBtn() {
  if (prefixBtn.value == false) prefixBtn.value = true;
  else prefixBtn.value = false;
}
function setPostfixBtn() {
  if (postfixBtn.value == false) postfixBtn.value = true;
  else postfixBtn.value = false;
}

</script>
