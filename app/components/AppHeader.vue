<script setup lang="ts">
import { getULinkProps } from '#ui/utils'
const route = useRoute()

const links = computed(() => [{
  label: 'Home',
  to: '/',
  icon: 'i-heroicons-home-modern',
  active: (route.path === '/')
}, {
  label: 'About',
  to: '/about',
  icon: 'i-heroicons-academic-cap',
  active: (route.path.startsWith('/about'))
}])

const config = computed(() => ({
  navlink: {
    active: 'text-primary',
    inactive: 'hover:text-primary',
  }
}))

const props = defineProps({
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined
  },
  ui: {
    type: Object as PropType<Partial<typeof config.value>>,
    default: () => ({})
  }
})

const { ui, attrs } = useUI('appheader', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>

<template>
    <header class="flex justify-between items-center my-2">
      <div class="flex gap-x-2 items-center">
        <NuxtImg src="/logo2.png" alt="Weather Forecast" width="32" height="32" class="animate-bounce" />
        <span class="text-2xl font-bold">Ventus Live</span>
      </div>
      <!-- <div role="navigation">
        <ul class="flex gap-x-4 my-4">
            <li v-for="(link, index) of links" :key="index" class="relative">
              <ULink
                  v-bind="getULinkProps(link)"
                  :active-class="ui.navlink.active"
                   :inactive-class="ui.navlink.inactive"
                   @click="link.click"
                >
                {{ link.label }}
              </ULink>
            </li>
        </ul>
      </div> -->
      <div class="flex items-center">
        <TemperatureDisplay />

        <div class="w-px h-6 bg-gray-200 dark:bg-gray-400 mx-4" />


        <ZColorModeButton
          light-icon="i-solar:sun-line-duotone"
          dark-icon="i-solar:moon-stars-line-duotone"
        />

        <UButton
          color="white"
          variant="ghost"
          trailing-icon="i-simple-icons:x"
          class=""
          to="https://x.com/kregenrek"
          target="_blank"
        />
        <UButton
          color="white"
          variant="ghost"
          trailing-icon="i-simple-icons:github"
          class=""
          to="https://github.com/regenrek/weather-forecast-nuxt3"
          target="_blank"
        />
      </div>
    </header>
</template>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(3);
  }
  50% {
    transform: translateY(-3px);
  }
}

.animate-bounce {
  animation: bounce 3s infinite;
}
</style>