<template>
  <h1 class="text-4xl"><slot name="title"></slot></h1>

  <div class="flex border mb-7">
    <div class="flex flex-col justify-between items-center min-h-[300px]  " :class="hasSlot('rightProps') ? 'w-3/4' : 'w-full' ">
      <div class="h-full flex items-center justify-center w-full relative">
        <slot name="component"></slot>
      </div>
      <div
        v-if="hasSlot('bottomProps')"
        class="border-t flex justify-center gap-3 w-full px-8 py-3 bottom-props-area"
      >
        <slot name="bottomProps"></slot>
      </div>
    </div>

    <div v-if="hasSlot('rightProps')" class="flex flex-col p-4 w-1/4 gap-4 border-l">
      <slot name="rightProps"></slot>
    </div>
  </div>
</template>

<script>
export default {
  setup(props, { slots }) {
    const hasSlot = (name) => !!slots[name];
    return { hasSlot };
  },
};
</script>
