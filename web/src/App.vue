<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import MusicDetail from './components/MusicDetail.vue'
</script>

<template>
  <main class="flex flex-col min-h-screen bg-black">
    <HeaderComponent />

    <div class="flex flex-1 px-2">
      <RouterView />

      <MusicDetail />
    </div>
  </main>
</template>

<style scoped></style>
