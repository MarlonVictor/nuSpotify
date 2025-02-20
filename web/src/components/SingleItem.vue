<script setup>
import IconPlay from '@/components/Icons/IconPlay.vue'

const { cover, title, subtitle } = defineProps({
  cover: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
})
</script>

<template>
  <li
    class="flex flex-col gap-2 p-3 rounded-lg cursor-pointer hover:bg-white/5 transition-colors group"
  >
    <div class="relative">
      <img :src="cover" class="rounded-lg size-40" />

      <button
        data-testid="play-button"
        :aria-label="`Tocar ${title || subtitle}`"
        class="absolute grid place-items-center bottom-2 right-2 z-10 size-12 bg-primary-500 rounded-full cursor-pointer shadow-play translate-y-2 opacity-0 hover:bg-primary-400 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms]"
      >
        <IconPlay class="size-6" />
      </button>
    </div>

    <div class="flex flex-col gap-1 items-start">
      <a href="#" class="text-white font-semibold line-clamp-2 w-40 hover:underline">
        {{ title }}
      </a>

      <a href="#" class="text-neutral-400 font-medium line-clamp-2 text-sm w-40 hover:underline">
        {{ subtitle }}
      </a>
    </div>
  </li>
</template>
