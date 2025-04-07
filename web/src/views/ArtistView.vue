<script setup>
import ArtistHeader from '@/components/ArtistHeader.vue'
import { ref } from 'vue'

const scrollY = ref(0)
const headerMinify = ref(false)
const scrollContainer = ref(null)

function onScroll() {
  const position = scrollContainer.value.scrollTop
  scrollY.value = position

  if (position > 260) headerMinify.value = true
  else headerMinify.value = false
}
</script>

<template>
  <section
    ref="scrollContainer"
    @scroll="onScroll"
    class="flex-1 bg-neutral-900 rounded-lg flex flex-col h-[calc(100vh-4.25rem)] overflow-auto relative"
  >
    <ArtistHeader :scroll-y="scrollY" :header-minify="headerMinify" />

    <div class="z-10 px-4">
      <div class="pb-14">
        <h1 class="text-white text-2xl font-bold mb-4">Populares</h1>
      </div>

      <p class="text-white/70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae architecto ipsa.
        Facere ratione perferendis quos quibusdam saepe nostrum expedita porro unde explicabo et
        ipsa vero fuga sit illo sed consequatur sint, corporis cupiditate harum molestiae recusandae
        tempore eveniet, tenetur dolorem. Excepturi ullam quae itaque nostrum dolorem? Asperiores
        labore error explicabo, commodi expedita delectus, corporis magnam assumenda facere quas
        provident quae velit. Ratione optio cumque assumenda, tenetur commodi excepturi libero dolor
        dolorem tempore exercitationem obcaecati laborum praesentium nisi eligendi sunt consequuntur
        numquam unde ab voluptatem illum natus delectus. Quae praesentium eaque neque ratione dolore
        nihil cupiditate quasi cumque itaque, pariatur, culpa iure perspiciatis! Ipsam labore harum
        quia impedit dolorem voluptatum ducimus architecto aut reiciendis ullam dignissimos itaque
        unde dolore voluptatibus aliquam, vero laboriosam ea autem cupiditate nam, est maxime rerum
        explicabo. Tenetur obcaecati repellat veritatis atque ut odio architecto! Quae distinctio
        quisquam eveniet debitis in, fugit optio aliquam odio quo sequi ratione praesentium delectus
        doloribus cum! Asperiores nisi vel dolorem, illo at odit ipsa molestias, sit necessitatibus
        suscipit sequi expedita incidunt quisquam illum, veritatis explicabo dolorum cumque nemo
        voluptates. Vitae officia necessitatibus quae, consequuntur delectus vel incidunt ut et. Ea,
        aut laboriosam. Explicabo, eius quas deleniti deserunt eum sint suscipit.
      </p>
      <p class="text-white/70 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae architecto ipsa.
        Facere ratione perferendis quos quibusdam saepe nostrum expedita porro unde explicabo et
        ipsa vero fuga sit illo sed consequatur sint, corporis cupiditate harum molestiae recusandae
        tempore eveniet, tenetur dolorem. Excepturi ullam quae itaque nostrum dolorem? Asperiores
        labore error explicabo, commodi expedita delectus, corporis magnam assumenda facere quas
        provident quae velit. Ratione optio cumque assumenda, tenetur commodi excepturi libero dolor
        dolorem tempore exercitationem obcaecati laborum praesentium nisi eligendi sunt consequuntur
        numquam unde ab voluptatem illum natus delectus. Quae praesentium eaque neque ratione dolore
        nihil cupiditate quasi cumque itaque, pariatur, culpa iure perspiciatis! Ipsam labore harum
        quia impedit dolorem voluptatum ducimus architecto aut reiciendis ullam dignissimos itaque
        unde dolore voluptatibus aliquam, vero laboriosam ea autem cupiditate nam, est maxime rerum
        explicabo. Tenetur obcaecati repellat veritatis atque ut odio architecto! Quae distinctio
        quisquam eveniet debitis in, fugit optio aliquam odio quo sequi ratione praesentium delectus
        doloribus cum! Asperiores nisi vel dolorem, illo at odit ipsa molestias, sit necessitatibus
        suscipit sequi expedita incidunt quisquam illum, veritatis explicabo dolorum cumque nemo
        voluptates. Vitae officia necessitatibus quae, consequuntur delectus vel incidunt ut et. Ea,
        aut laboriosam. Explicabo, eius quas deleniti deserunt eum sint suscipit.
      </p>
      <p class="text-white/70 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae architecto ipsa.
        Facere ratione perferendis quos quibusdam saepe nostrum expedita porro unde explicabo et
        ipsa vero fuga sit illo sed consequatur sint, corporis cupiditate harum molestiae recusandae
        tempore eveniet, tenetur dolorem. Excepturi ullam quae itaque nostrum dolorem? Asperiores
        labore error explicabo, commodi expedita delectus, corporis magnam assumenda facere quas
        provident quae velit. Ratione optio cumque assumenda, tenetur commodi excepturi libero dolor
        dolorem tempore exercitationem obcaecati laborum praesentium nisi eligendi sunt consequuntur
        numquam unde ab voluptatem illum natus delectus. Quae praesentium eaque neque ratione dolore
        nihil cupiditate quasi cumque itaque, pariatur, culpa iure perspiciatis! Ipsam labore harum
        quia impedit dolorem voluptatum ducimus architecto aut reiciendis ullam dignissimos itaque
        unde dolore voluptatibus aliquam, vero laboriosam ea autem cupiditate nam, est maxime rerum
        explicabo. Tenetur obcaecati repellat veritatis atque ut odio architecto! Quae distinctio
        quisquam eveniet debitis in, fugit optio aliquam odio quo sequi ratione praesentium delectus
        doloribus cum! Asperiores nisi vel dolorem, illo at odit ipsa molestias, sit necessitatibus
        suscipit sequi expedita incidunt quisquam illum, veritatis explicabo dolorum cumque nemo
        voluptates. Vitae officia necessitatibus quae, consequuntur delectus vel incidunt ut et. Ea,
        aut laboriosam. Explicabo, eius quas deleniti deserunt eum sint suscipit.
      </p>
      <p class="text-white/70 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae architecto ipsa.
        Facere ratione perferendis quos quibusdam saepe nostrum expedita porro unde explicabo et
        ipsa vero fuga sit illo sed consequatur sint, corporis cupiditate harum molestiae recusandae
        tempore eveniet, tenetur dolorem. Excepturi ullam quae itaque nostrum dolorem? Asperiores
        labore error explicabo, commodi expedita delectus, corporis magnam assumenda facere quas
        provident quae velit. Ratione optio cumque assumenda, tenetur commodi excepturi libero dolor
        dolorem tempore exercitationem obcaecati laborum praesentium nisi eligendi sunt consequuntur
        numquam unde ab voluptatem illum natus delectus. Quae praesentium eaque neque ratione dolore
        nihil cupiditate quasi cumque itaque, pariatur, culpa iure perspiciatis! Ipsam labore harum
        quia impedit dolorem voluptatum ducimus architecto aut reiciendis ullam dignissimos itaque
        unde dolore voluptatibus aliquam, vero laboriosam ea autem cupiditate nam, est maxime rerum
        explicabo. Tenetur obcaecati repellat veritatis atque ut odio architecto! Quae distinctio
        quisquam eveniet debitis in, fugit optio aliquam odio quo sequi ratione praesentium delectus
        doloribus cum! Asperiores nisi vel dolorem, illo at odit ipsa molestias, sit necessitatibus
        suscipit sequi expedita incidunt quisquam illum, veritatis explicabo dolorum cumque nemo
        voluptates. Vitae officia necessitatibus quae, consequuntur delectus vel incidunt ut et. Ea,
        aut laboriosam. Explicabo, eius quas deleniti deserunt eum sint suscipit.
      </p>
    </div>
  </section>
</template>
