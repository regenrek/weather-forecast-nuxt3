<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogImage: '/social_card.png',
  twitterImage: '/social_card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="w-full">
  <div class="mx-auto px-4 w-full">
  <AppHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  <AppFooter />
  </div>
</div>
  <UNotifications />
</template>