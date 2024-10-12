<template>
  <v-app-bar color="primary" dark>
    <v-app-bar-nav-icon @click="toggleDrawer" />
    <v-toolbar-title>

      My App
    </v-toolbar-title>
    <v-spacer />
    <v-btn v-for="item in items" :key="item.title" text @click="navigateTo(item.route)">
      {{ item.title }}
    </v-btn>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">

        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="action in userActions" :key="action.title" @click="action.handler">
          <v-list-item-title>{{ action.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const items = ref([
  { title: 'Home', route: '/' },
  { title: 'About', route: '/about' },
  { title: 'Contact', route: '/contact' },
])

const userActions = ref([
  { title: 'Profile', handler: () => router.push('/profile') },
  { title: 'Logout', handler: () => console.log('Logout') },
])

const toggleDrawer = () => {
  console.log('Drawer toggled')
}

const navigateTo = (route) => {
  router.push(route)
}
</script>

<style scoped>
.v-app-bar {
  position: fixed;
}
.v-toolbar-title {
  display: flex;
  align-items: center;
}
</style>
