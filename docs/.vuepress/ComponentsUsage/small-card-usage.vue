<template>
  <usage>
    <template #title>Small Card</template>
    <template #component>
      <y-small-card> 
        <template #img><img src="/images/logos/logo.png" alt="yartuLogo"></template>
        <template #content>YARTU</template>
        <template #btn><y-button primary>View</y-button></template>
      </y-small-card>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-small-card&gt;
    {{'\n  '}}&lt;template #img&gt;{{'\n   '}}&lt;img src="..."&gt;{{'\n  '}}&lt;/template&gt;
    {{'\n  '}}&lt;template #content&gt;YARTU&lt;/template&gt;
    {{'\n  '}}&lt;template #btn&gt;{{'\n   '}}&lt;y-button primary&gt;View&lt;/y-button&gt;{{'\n  '}}&lt;/template&gt;
    {{'\n '}}&lt;/y-small-card&gt;
  </copy-to-clip-board>
</template>

<script setup>
import { ref } from "vue";

</script>
