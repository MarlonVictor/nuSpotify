<script setup>
import IconPlay from '@/components/Icons/IconPlay.vue'
import IconVerified from '@/components/Icons/IconVerified.vue'

defineProps({
  scrollY: { type: Number, default: 0 },
  headerMinify: { type: Boolean, required: true },
})
</script>

<template>
  <div class="min-h-96 flex items-end relative rounded-t-lg overflow-hidden group">
    <div
      class="flex flex-col px-6 w-full z-20 relative transition"
      :class="{ 'opacity-0': headerMinify }"
    >
      <div class="flex items-center gap-2">
        <IconVerified class="text-[#4bb3ff] size-6" />
        <span class="text-sm text-white">Artista verificado</span>
      </div>
      <span class="line-clamp-3 text-white font-extrabold text-[5.25rem]"> Muse </span>
    </div>

    <img
      class="h-96 w-full absolute object-cover scale-105 transition-all z-10"
      :class="{ '!scale-100 brightness-50': scrollY > 0, 'opacity-0': scrollY > 260 }"
      src="https://i.scdn.co/image/ab676186000010169e292b87a6e3a0900e871692"
    />
  </div>

  <span class="bg-[rgb(224,56,40)] h-96 block absolute top-52 left-0 right-0"></span>
  <span
    class="bg-[linear-gradient(0deg,rgba(31,31,31,1)10%,rgba(31,31,31,0.85)68%,rgba(31,31,31,0.6)100%)] h-96 block absolute top-52 left-0 right-0"
  ></span>

  <div
    class="flex items-center gap-4 relative z-10 p-4 transition"
    :class="{ 'opacity-0': headerMinify }"
  >
    <button
      class="grid place-items-center size-12 bg-primary-500 rounded-full cursor-pointer shadow-play hover:bg-primary-400 hover:scale-105 transition-all"
    >
      <IconPlay class="size-6" />
    </button>

    <button
      class="h-8 px-4 flex items-center border border-neutral-600 rounded-full text-white/80 text-sm font-bold hover:border-white/80 hover:scale-105 transition-all cursor-pointer text-nowrap"
    >
      Saiba mais
    </button>
  </div>

  <!-- <ArtistHeaderCompact :class="{ hidden: !headerMinify }" /> -->
</template>
