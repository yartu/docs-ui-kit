<template>
  <usage>
    <template #title>Icon</template>
    <template #component>
      <div class="flex gap-3">
        <y-icon class=" text-4xl text-BLUE" name="yi yi-home"></y-icon>
        <y-icon class=" text-4xl text-BLUE" name="yi yi-drive"></y-icon>
        <y-icon class=" text-4xl text-BLUE" name="yi yi-folder"></y-icon>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-icon class=" text-4xl text-BLUE" name="yi yi-home"&gt;&lt;/y-icon&gt;{{'\n'}}
    &lt;y-icon class=" text-4xl text-BLUE" name="yi yi-drive"&gt;&lt;/y-icon&gt;{{'\n'}}
    &lt;y-icon class=" text-4xl text-BLUE" name="yi yi-folder"&gt;&lt;/y-icon&gt;{{'\n'}}
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
          <td>name</td>
          <td>String</td>
          <td>null</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>
