<script setup>
import ItemList from '@/components/ItemList.vue'
import { songsArray } from '../assets/database/songs'
</script>

<template>
  <section class="flex-1 p-4 bg-neutral-900 rounded-lg flex flex-col gap-6 h-[calc(100vh-4.25rem)]">
    <ItemList title="As músicas mais populares" :itensArray="songsArray" />
  </section>
</template>
