<script setup>
import IconHide from './Icons/IconHide.vue'
</script>

<template>
  <aside class="flex flex-col bg-neutral-900 rounded-lg ml-2 group">
    <div>
      <header class="flex items-center p-4 relative overflow-hidden">
        <button
          class="text-neutral-400 hover:text-white transition-all cursor-pointer absolute -left-2 opacity-0 group-hover:translate-x-6 group-hover:opacity-100 delay-150"
        >
          <IconHide class="size-4" />
        </button>

        <h2 class="text-white font-bold group-hover:translate-x-6 transition-all delay-100">
          One Step Closer
        </h2>
      </header>

      <div class="flex flex-col gap-4 p-4 pt-0">
        <img
          src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
          class="object-cover size-72 rounded-lg"
        />

        <div class="">
          <h1 class="text-white text-nowrap text-2xl font-bold">Congratulations</h1>
          <a href="" class="text-white/70 hover:underline">Henrique & Juliano</a>
        </div>
      </div>
    </div>

    <div class="bg-neutral-800 m-4 rounded-lg overflow-hidden p-4">
      <!-- Abrir modal -->
      <div class="relative w-64 h-40 p-4 pt-5 rounded-t-lg overflow-hidden cursor-pointer">
        <h2 class="text-white font-bold relative z-10">Sobre o artista</h2>

        <img
          src="https://i.scdn.co/image/ab67616d00001e02656f8291d741ad247ef330fe"
          class="object-cover absolute inset-0 brightness-75 bg-center size-full"
        />
      </div>

      <div class="p-4 w-64">
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
