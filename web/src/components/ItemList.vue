<script setup>
import SingleItem from './SingleItem.vue'

const { title, link } = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  itens: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div>
    <header class="relative flex items-end justify-between z-10 pb-1 px-3 h-12">
      <h1 class="hover:underline text-white text-2xl font-bold cursor-pointer">
        {{ title }}
      </h1>

      <a :href="link" class="hover:underline text-neutral-400 text-sm font-bold cursor-pointer">
        Mostrar tudo
      </a>
    </header>

    <ul class="flex relative z-10">
      <SingleItem
        v-for="(item, index) in itens"
        :key="index"
        :cover="item.cover"
        :title="item.title"
        :subtitle="item.subtitle"
      />
    </ul>
  </div>
</template>
