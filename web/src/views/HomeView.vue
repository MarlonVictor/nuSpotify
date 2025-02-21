<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ItemList from '@/components/ItemList.vue'

const data = [
  {
    title: 'Artistas populares',
    link: '#',
    itens: [
      {
        cover: 'https://i.scdn.co/image/ab6761610000517429af2ffb6f4ddd6324f878bc',
        title: 'Korn',
        subtitle: 'Artista',
      },
    ],
  },
  {
    title: 'Músicas populares',
    link: '#',
    itens: [
      {
        cover: 'https://upload.wikimedia.org/wikipedia/pt/3/3a/Follow_the_Leader_-_Korn.png',
        title: 'Freak On a Leash',
        subtitle: 'Follow The Leader',
      },
      {
        cover: 'https://upload.wikimedia.org/wikipedia/pt/3/3a/Follow_the_Leader_-_Korn.png',
        title: 'Got the Life',
        subtitle: 'Follow The Leader',
      },
      {
        cover: 'https://upload.wikimedia.org/wikipedia/pt/f/f4/KornIssuesArt.jpeg',
        title: 'Falling Away from Me',
        subtitle: 'Issues',
      },
    ],
  },
]
</script>

<template>
  <main class="flex flex-col min-h-screen bg-black">
    <HeaderComponent />

    <div class="flex flex-1 px-2">
      <section
        class="relative flex-1 p-4 bg-neutral-900 rounded-lg overflow-hidden flex flex-col gap-6"
      >
        <span class="bg-[rgb(224,56,40)] h-80 block absolute top-0 left-0 right-0"></span>
        <span
          class="bg-[linear-gradient(0deg,rgba(31,31,31,1)10%,rgba(31,31,31,0.85)68%,rgba(31,31,31,0.6)100%)] h-80 block absolute top-0 left-0 right-0"
        ></span>

        <ItemList
          v-for="(item, index) in data"
          :key="index"
          :title="item.title"
          :link="item.link"
          :itens="item.itens"
        />
      </section>
    </div>
  </main>
</template>
