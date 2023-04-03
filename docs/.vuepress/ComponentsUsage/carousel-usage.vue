<template>
  <usage>
    <template #title>Carousel</template>
    <template #component>
      <div class="w-full h-full relative flex justify-center items-center">
        <y-carousel class="absolute" :items="carouselItems">
          <!-- carousel item slot -->
          <template #carousel-item="{ item }">
            <div class="p-8 text-center">{{ item }}</div>
          </template>

          <!-- previous button slot -->
          <template #prev-btn> </template>

          <!-- next button slot -->
          <template #next-btn> </template>
        </y-carousel>
      </div>
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-carousel :items="items" &gt;{{ "\n  " }} &lt;template
    #carousel-item="{item}"{{ "\n   " }} &lt;div &gt; &#123;&#123; item
    &#125;&#125; &lt;/div&gt;{{ "\n  " }} &lt;/template &gt;{{
      "\n   "
    }}&lt;template #prev-btn"/&gt;{{ "\n  " }} &lt;template #next-btn /&gt;
    {{ "\n" }}
    &lt;/y-carousel&gt;
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
          <td>items</td>
          <td>Object</td>
          <td>{ }</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const carouselItems = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
];
</script>
