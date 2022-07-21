<template>
  <usage>
    <template #title>Curtain Menu</template>
    <template #component
      ><div class=" w-full h-full">
        <div class="w-full h-full flex items-center justify-center">
            Some content here
        </div>
        <y-curtain-menu title="Sample Curtain Menu" height="60px" openHeight="180px"
          ><p>Some content here</p></y-curtain-menu
        >
      </div></template
    >
  </usage>

  <copy-to-clip-board>
    &lt;y-curtain-menu{{'\n'}} title="Sample Curtain Menu"{{'\n'}} height="60px"{{'\n'}} openHeight="180px"&nbsp;&gt;&lt;/y-curtain-menu&gt;
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
          <td>title</td>
          <td>String</td>
          <td>'Title'</td>
        </tr>
        <tr>
          <td>height</td>
          <td>String</td>
          <td>"175px"</td>
        </tr>
        <tr>
          <td>openHeight</td>
          <td>String</td>
          <td>'434px'</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>
