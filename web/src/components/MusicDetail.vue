<script setup>
import IconClose from './Icons/IconClose.vue'
</script>

<template>
  <aside class="flex flex-col bg-neutral-900 rounded-lg ml-2">
    <header class="flex items-center justify-between gap-2 p-4">
      <h2 class="text-white font-bold">One Step Closer</h2>

      <button
        class="rounded-full text-neutral-600 hover:text-white hover:bg-neutral-600 size-8 grid place-items-center transition-colors duration-500 cursor-pointer"
      >
        <IconClose class="size-4" />
      </button>
    </header>

    <div class="bg-neutral-800 m-4 rounded-lg overflow-hidden p-4">
      <!-- Abrir modal -->
      <div class="relative size-72 p-4 pt-5 rounded-t-lg overflow-hidden cursor-pointer">
        <h2 class="text-white font-bold relative z-10">Sobre o artista</h2>

        <img
          src="https://i.scdn.co/image/ab67616d00001e02656f8291d741ad247ef330fe"
          class="object-cover absolute inset-0 brightness-75"
        />
      </div>

      <div class="p-4 w-72">
        <div class="flex justify-between items-center gap-2">
          <a href="#" class="text-white font-bold hover:underline">Linkin Park</a>

          <button
            class="h-8 px-4 flex items-center border border-neutral-600 rounded-full text-white/80 text-sm font-bold hover:border-white/80 hover:scale-105 transition-all cursor-pointer text-nowrap"
          >
            Ver mais
          </button>
        </div>

        <p class="text-sm font-medium text-white/70 line-clamp-3 mt-3">
          One of the most influential, critically lauded, and controversial artists of the early
          21st century, American rapper and producer Kanye West has gone from hip-hop beatmaker to
          worldwide hitmaker with a wildly successful solo career that counted an unbroken string of
          chart-topping, multi-platinum albums and nearly two-dozen Grammy Awards.
        </p>
      </div>
    </div>
  </aside>
</template>
