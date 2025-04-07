<script setup>
import IconPlay from './Icons/IconPlay.vue'
</script>

<template>
  <div class="sticky top-0 left-0 right-0 px-4 flex items-center min-h-16">
    <span class="bg-amber-300 absolute inset-0 z-30"></span>

    <button
      class="grid place-items-center size-12 bg-primary-500 rounded-full cursor-pointer shadow-play hover:bg-primary-400 hover:scale-105 transition-all"
    >
      <IconPlay class="size-6" />
    </button>

    <span class="relative z-30 text-2xl font-bold text-white">Evanescence</span>
  </div>
</template>
