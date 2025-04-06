<script setup>
import ItemList from '@/components/ItemList.vue'
import { artistArray } from '../assets/database/artists'
</script>

<template>
  <section class="flex-1 p-4 bg-neutral-900 rounded-lg flex flex-col gap-6 h-[calc(100vh-4.25rem)]">
    <ItemList title="Os artistas mais populares" :itensArray="artistArray" />
  </section>
</template>
