<template>
<usage>
  <template #title>Bread Crumb</template>
  <template #component>
    <div class=" w-auto">
         <y-breadcrumb :crumbs="crumbs" @selected="test($event)"></y-breadcrumb>
      </div>
   </template>

</usage>
   <copy-to-clip-board>
      
      &lt;y-breadcrumb crumbs="crumbs"&gt;&lt;/y-breadcrumb&gt;
  
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
          <td>crumbs</td>
          <td>Array</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
  </div>
   
</template>

<script setup>
import { ref } from "vue";

const crumbs= ref(['Home','Products','Phones']);

function test(e) {
  console.log(e);
}
</script>
