<template>
  <usage>
    <template #title>Simple Table</template>
    <template #component>
      <div class="w-1/2">
        <y-simple-table>
          <template #thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </template>
          <template #tbody>
            <tr>
              <td>ariaDesc</td>
              <td>String</td>
              <td>''</td>
            </tr>
          </template>
        </y-simple-table>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-simple-table&gt;
    {{ "\n  " }}&lt;template #thead&gt; {{ "\n   " }}&lt;tr&gt;
    {{ "\n    " }}&lt;th&gt;Name&lt;/th&gt;
    {{ "\n    " }}&lt;th&gt;Type&lt;/th&gt;
    {{ "\n    " }}&lt;th&gt;Default&lt;/th&gt; {{ "\n   " }}&lt;/tr&gt;
    {{ "\n  " }}&lt;/template&gt; {{ "\n  " }}&lt;template #thead&gt;
    {{ "\n   " }}&lt;tr&gt; {{ "\n    " }}&lt;td&gt;ariaDesc&lt;/td&gt;
    {{ "\n    " }}&lt;td&gt;String&lt;/td&gt;
    {{ "\n    " }}&lt;td&gt;''&lt;/td&gt; {{ "\n   " }}&lt;/tr&gt;
    {{ "\n  " }}&lt;/template&gt; {{ "\n " }}&lt;/y-simple-table&gt;
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
          <td>ariaDesc</td>
          <td>String</td>
          <td>''</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>
