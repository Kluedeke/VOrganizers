<template>
    <v-data-table :items="getUsers()" :headers>
        <template v-slot:item.actions="{ item }" 
                v-if="currentUser.roles.includes('admin')">
            <v-icon @click="del(item)">mdi-delete</v-icon>
        </template>
    </v-data-table>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import {getUsers, deleteUser} from '../service/mockApi.js'

const headers = ref([
    {title:'Benutzername', value: 'username'}, 
    {title: 'Rollen', value: 'roles'},
    {title: 'Aktionen', value: 'actions'}
])

const props = defineProps(['currentUser'])

function del(user) {
    deleteUser(user)
}
</script>