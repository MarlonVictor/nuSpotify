<script setup>
import { RouterLink } from 'vue-router'
import SingleItem from './SingleItem.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    default: '',
  },
  itensArray: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="overflow-auto">
    <header
      class="relative flex items-end justify-between z-10 p-3 pb-6"
      :class="{ '!pb-1 !pt-0 h-12': path }"
    >
      <RouterLink :to="path">
        <h1
          class="text-white text-2xl font-bold"
          :class="{ 'cursor-pointer hover:underline': path }"
        >
          {{ title }}
        </h1>
      </RouterLink>

      <RouterLink
        v-if="path"
        :to="path"
        class="hover:underline text-neutral-400 text-sm font-bold cursor-pointer"
      >
        Mostrar tudo
      </RouterLink>
    </header>

    <ul class="flex flex-wrap relative z-10">
      <SingleItem v-for="(item, index) in itensArray" :key="index" v-bind="item" />
    </ul>
  </div>
</template>
