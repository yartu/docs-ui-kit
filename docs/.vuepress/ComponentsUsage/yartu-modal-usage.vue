<template>
  <usage>
    <template #title>Yartu Modal</template>
    <template #component>
      <YartuButton primary @click="openModal = true" size="lg"
        >Open Modal</YartuButton
      >

      <y-modal
        :modelValue="openModal"
        @update:modalValue="openModal = $event"
        @closed="openModal = false"
      >
        <div class="w-44 h-44 flex flex-col justify-center items-center">
          <span class="font-bold text-blue-800">Sample Modal</span>
        </div>
      </y-modal>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;template &gt;{{ "\n  " }} &lt;button class="bg-blue-500 rounded p-2
    text-white hover:bg-blue-400 hover:shadow-2"{{
      "\n  "
    }}
    @click="openModal()" &gt;{{ "\n   " }} Open Modal {{ "\n  " }} &lt;/button
    &gt;{{ "\n" }} &lt;/template&gt;{{ "\n" }} {{ "\n" }}&lt;script setup&gt;{{
      "\n"
    }}
    import &#123; useYartuModal &#125;{{ "\n" }}import &#123; SampleModal
    &#125;{{ "\n" }} const yartuModal = useYartuModal();{{ "\n" }} const
    openModal= () =>{ {{ "\n  " }}yartuModal.open(SampleModal, { max-width:
    '32.5rem', min-width: '32.5rem', });};{{ "\n " }}&lt;script &gt;
  </copy-to-clip-board>
  <p>
    Usage: You should add '&lt;yartu-modal&gt;&lt;/yartu-modal&gt;' to your
    project App.vue for open yartu modal!
  </p>
</template>

<script setup>
import { useYartuModal } from "@yartu/ui-kit";
import LoremModal from "../ComponentsUsage/modal.vue";
import { ref, defineComponent } from "vue";
import YartuButton from "../ComponentsUsage/YartuButton.vue";

const yartuModal = useYartuModal();
const openModal = ref(false);
// const openModal = () => {
//   // yartuModal.open(LoremModal, {
//   //   component: {},
//   //   modal: {
//   //     "max-width": "32.5rem",
//   //     "min-width": "32.5rem",
//   //   },
//   //   emits: {},
//   // });
//   openModal.value = true;
// };
</script>

<style>
[type="button"],
[type="reset"],
[type="submit"] {
  background-color: initial !important;
}
</style>
