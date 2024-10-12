<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import * as api from './service/mockApi.js'

const currentUser = ref(null)
const page = ref('')
const errorMsg = ref('')


function register(e) {
  errorMsg.value = api.register({... e}) || ''
  console.log(errorMsg.value)
}


function login(e) {
  currentUser.value = api.login({... e})
}


</script>
