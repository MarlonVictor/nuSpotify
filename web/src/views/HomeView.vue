<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import SingleItem from '@/components/SingleItem.vue'
</script>

<template>
  <main class="flex flex-col h-screen bg-black">
    <HeaderComponent />

    <div class="flex flex-1 px-2">
      <section
        class="relative flex-1 p-4 bg-neutral-900 rounded-lg overflow-hidden flex flex-col gap-6"
      >
        <span class="bg-[rgb(224,56,40)] h-80 block absolute top-0 left-0 right-0"></span>
        <span
          class="bg-[linear-gradient(0deg,rgba(31,31,31,1)10%,rgba(31,31,31,0.85)68%,rgba(31,31,31,0.6)100%)] h-80 block absolute top-0 left-0 right-0"
        ></span>

        <div>
          <header class="relative flex items-end justify-between z-10 pb-1 px-3 h-12">
            <h1 class="hover:underline text-white text-2xl font-bold cursor-pointer">
              Artistas populares
            </h1>

            <p class="hover:underline text-neutral-400 text-sm font-bold cursor-pointer">
              Mostrar tudo
            </p>
          </header>

          <ul class="flex relative z-10">
            <SingleItem
              cover="https://i.scdn.co/image/ab6761610000517429af2ffb6f4ddd6324f878bc"
              title="Korn"
              subtitle="Artista"
            />
          </ul>
        </div>

        <div>
          <header class="relative flex items-end justify-between z-10 pb-1 px-3 h-12">
            <h1 class="hover:underline text-white text-2xl font-bold cursor-pointer">
              Músicas populares
            </h1>

            <p class="hover:underline text-neutral-400 text-sm font-bold cursor-pointer">
              Mostrar tudo
            </p>
          </header>

          <ul class="flex relative z-10">
            <SingleItem
              cover="https://upload.wikimedia.org/wikipedia/pt/3/3a/Follow_the_Leader_-_Korn.png"
              title="Freak On a Leash"
              subtitle="Follow The Leader"
            />
            <SingleItem
              cover="https://upload.wikimedia.org/wikipedia/pt/3/3a/Follow_the_Leader_-_Korn.png"
              title="Got the Life"
              subtitle="Follow The Leader"
            />
            <SingleItem
              cover="https://upload.wikimedia.org/wikipedia/pt/f/f4/KornIssuesArt.jpeg"
              title="Falling Away from Me"
              subtitle="Issues"
            />
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>
