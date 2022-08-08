<template>
<usage>
  <template #title>Avatar Group</template>
  <template #component>
    <y-avatar-group size="md" :max="4" >
      <y-avatar 
          size="md"
          image="/docs-ui-kit/images/avatar.jpeg"
        ></y-avatar>
        <y-avatar 
          size="md"
          image="/docs-ui-kit/images/john.jpeg"
        ></y-avatar>
        <y-avatar 
          size="md"
          label="CJ"
        ></y-avatar>
          <y-avatar size="md" label="AS"></y-avatar>
          
        
        </y-avatar-group>
  </template>

</usage>
  <copy-to-clip-board>
    
      &lt;y-avatar-group size="md"&gt;{{"\n  "}}
       &lt;y-avatar size="md" image="/images/avatar.jpeg"&gt;&lt;/y-avatar&gt;{{"\n  "}}
       &lt;y-avatar size="md" image="/images/john.jpeg"&gt;&lt;/y-avatar&gt;{{"\n  "}}
       &lt;y-avatar size="md" label="CJ"&gt;&lt;/y-avatar&gt;{{"\n  "}}
       &lt;y-avatar size="md" label="+1"&gt;&lt;/y-avatar&gt;{{"\n"}}
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
          <td>'red'</td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>

<script setup>

</script>
