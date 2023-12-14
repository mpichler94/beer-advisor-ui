<script setup lang="ts">
import { ref } from 'vue'
import UserService from '@/scripts/UserService'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const service = new UserService()

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Beer',
    route: '/beer'
  },

  {
    label: 'User',
    style: 'flex-end',
    items: [
      {
        // TODO: only show if not logged in
        label: 'Login',
        route: '/login'
      },
      {
        // TODO: only show if not logged in
        label: 'Register',
        route: '/signup'
      },
      {
        label: 'Logout',
        command: () => {
          service.logout()
        },
        visible: () => authStore.user != ''
      }
    ]
  }
])
</script>

<template>
  <header>
    <MenuBar :model="items">
      <template #start>
        <img alt="Beer Logo" class="logo" src="./assets/logo.png" width="125" height="125" />
      </template>
      <template #item="{ item, props, hasSubmenu }">
        <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </RouterLink>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
          <PvAvatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
          />
        </div>
      </template>
    </MenuBar>
  </header>

  <main>
    <RouterView />
    <PvToast />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>