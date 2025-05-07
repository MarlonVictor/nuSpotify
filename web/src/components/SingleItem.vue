<script setup>
import IconPlay from '@/components/Icons/IconPlay.vue'

defineProps({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  artist: {
    type: String,
  },
  banner: {
    type: String,
  },
})
</script>

<template>
  <li>
    <a
      :href="id"
      class="flex flex-col gap-2 p-3 rounded-lg cursor-pointer hover:bg-white/5 transition-colors group"
    >
      <div class="relative">
        <img
          :src="image"
          class="rounded-full size-40 shrink-0 object-cover"
          :class="{ 'rounded-lg': artist }"
        />

        <button
          data-testid="play-button"
          :aria-label="`Tocar ${name || artist}`"
          class="absolute grid place-items-center bottom-2 right-2 z-10 size-12 bg-primary-500 rounded-full cursor-pointer shadow-play translate-y-2 opacity-0 hover:bg-primary-400 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms]"
        >
          <IconPlay class="size-6" />
        </button>
      </div>

      <div class="flex flex-col gap-0.5 items-start">
        <p class="text-white text-sm font-medium line-clamp-2 w-40 hover:underline">
          {{ name }}
        </p>

        <span
          class="text-neutral-400 font-medium line-clamp-2 text-sm w-40"
          :class="{ 'hover:underline': artist }"
        >
          {{ artist || 'Artista' }}
        </span>
      </div>
    </a>
  </li>
</template>
