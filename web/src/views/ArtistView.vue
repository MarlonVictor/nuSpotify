<script setup>
import ArtistHeader from '@/components/ArtistHeader.vue'
import ArtistHeaderCompact from '@/components/ArtistHeaderCompact.vue'
import { ref } from 'vue'

const scrollY = ref(0)
const headerMinify = ref(false)
const scrollContainer = ref(null)

function onScroll() {
  const position = scrollContainer.value.scrollTop
  scrollY.value = position

  if (position > 360) headerMinify.value = true
  else headerMinify.value = false
}
</script>

<template>
  <section
    ref="scrollContainer"
    @scroll="onScroll"
    class="flex-1 bg-neutral-900 rounded-lg flex flex-col h-[calc(100vh-4.25rem)] overflow-auto relative"
  >

  <ArtistHeaderCompact :class="{ 'opacity-100 pointer-events-auto': headerMinify }" />
  <ArtistHeader :scroll-y="scrollY" />

    <div class="z-10 px-4">
      <h1 class="text-white text-2xl font-bold mb-4">Populares</h1>

      <p class="text-white/70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae architecto ipsa.
        Facere ratione perferendis quos quibusdam saepe nostrum expedita porro unde explicabo et
        ipsa vero fuga sit illo sed consequatur sint.
      </p>
    </div>
  </section>
</template>
