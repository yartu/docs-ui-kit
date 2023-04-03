<template>
  <usage>
    <template #title>Yartu Notify</template>
    <template #component>
      <div>
        <YartuButton primary @click="showToas()"> Show Toast </YartuButton>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;template &gt;{{ "\n  " }} &lt;buttonclass="bg-blue-500 rounded p-2
    text-white hover:bg-blue-400 hover:shadow-2"{{
      "\n  "
    }}
    @click="showToast()" &gt;{{ "\n   " }} Show Toast {{ "\n  " }} &lt;/button
    &gt;{{ "\n" }} &lt;/template&gt;{{ "\n" }} {{ "\n" }}&lt;script setup&gt;{{
      "\n"
    }}
    import &#123; useYartuNotify &#125;{{ "\n" }} const yartuNotify =
    useYartuNotify();{{ "\n" }} const showtoast= () =>{
    {{ "\n  " }}yartuNotify.toast({ title: 'title', massage: 'massage', });};{{
      "\n "
    }}&lt;script &gt;
  </copy-to-clip-board>
</template>

<script setup>
import { useYartuNotify } from "@yartu/ui-kit";
import YartuButton from "./YartuButton.vue";

const yartuNotify = useYartuNotify();

const showToas = () => {
  yartuNotify.snackbar({
    type: "danger",
    title: "Something went be wrong :/",
    closable: true,
  });
};
</script>
