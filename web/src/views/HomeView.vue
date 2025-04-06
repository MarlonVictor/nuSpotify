<script setup>
import ItemList from '@/components/ItemList.vue'

import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'
</script>

<template>
  <section
    class="relative flex-1 p-4 bg-neutral-900 rounded-lg overflow-hidden flex flex-col gap-6"
  >
    <span class="bg-[rgb(224,56,40)] h-80 block absolute top-0 left-0 right-0"></span>
    <span
      class="bg-[linear-gradient(0deg,rgba(31,31,31,1)10%,rgba(31,31,31,0.85)68%,rgba(31,31,31,0.6)100%)] h-80 block absolute top-0 left-0 right-0"
    ></span>

    <ItemList title="Músicas populares" path="/songs" :itensArray="songsArray.slice(0, 4)" />

    <ItemList title="Artistas populares" path="/artists" :itensArray="artistArray.slice(0, 4)" />
  </section>
</template>
