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
    <header>
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

    </header>
</template>