<script setup>
import SingleItem from './SingleItem.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  itensArray: {
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

      <a :href="path" class="hover:underline text-neutral-400 text-sm font-bold cursor-pointer">
        Mostrar tudo
      </a>
    </header>

    <ul class="flex flex-wrap relative z-10">
      <SingleItem v-for="(item, index) in itensArray" :key="index" v-bind="item" />
    </ul>
  </div>
</template>
