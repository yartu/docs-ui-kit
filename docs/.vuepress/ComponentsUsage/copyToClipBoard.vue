<template>
  <div class="border rounded-lg">
    <pre class="!p-4 !m-0 relative">
        <y-button class="absolute top-4 right-4" square secondary icon="yi yi-copy" @click="copyComponentToClipboard()"></y-button>
        <p ref="code_section"><slot></slot></p>
      </pre>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useClipboard } from "@vueuse/core";

const code_section = ref(null);
const source = ref(null);

onMounted(() => {
  source.value = code_section.value.innerText;
});

const { text, copy, copied, isSupported } = useClipboard({ source });

function copyComponentToClipboard() {
  source.value = code_section.value.innerText;
  copy();
}
</script>
