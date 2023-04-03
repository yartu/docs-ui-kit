<template>
  <div class="bg-white rounded-xl">
    <div class="p-6">
      <div class="flex flex-row justify-between">
        <p class="font-bold text-lg pb-4">Sample Modal</p>
      </div>
    </div>
    <div class="bg-[#EFF4FA] flex justify-end p-3 mt-2">
      <div class="mr-2 px-1">
        <y-button @click="close()" size="md">
          <span class="px-2">Close</span>
        </y-button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["closeYartuModal"]);

const close = () => {
  emit("closeYartuModal");
};
</script>
