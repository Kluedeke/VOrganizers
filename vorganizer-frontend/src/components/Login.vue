<template>
  <v-container class="fill-height custom-container" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-4">
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Benutzername"
                v-model="username"
                required
                placeholder="Benutzername/Email Adresse"
              ></v-text-field>
              <v-text-field
                label="Passwort"
                v-model="password"
                type="password"
                required
              ></v-text-field>
              <div>{{ errorMsg }}</div>
              <v-row justify="center">
                <v-col cols="5" class="button-col">
                  <v-btn block class="mr-4" color="primary" @click="login">Login</v-btn>
                </v-col>
                <v-col cols="5" class="button-col">
                  <v-btn block @click="goToRegister">Registrieren</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { ref, defineEmits } from 'vue'
import {useRouter} from "vue-router";

/*
const newUser = ref({
  username: '',
  password: '',
  mailAddress: ''
})

const users = []

const props = defineProps({
  errorMsg: String
})

 */



const username = ref('');
const password = ref('');

const  router = useRouter();



const login = async () => {
  try {
    const response = await fetch('http://localhost:5107/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      alert('Login successful!');
    } else {
      alert('Login failed: ' + data.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}


const goToRegister = () => {
  router.push('/register')
}

const loadMainPage = () => {
  router.push('/main')
}

</script>
<style scoped>
.fill-height {
  height: 100vh;
}

 .custom-container {
   display: flex;
   align-items: flex-start;
   justify-content: center;
   padding-top: 20vh; /* Adjust this value to move the card further down */
 }
</style>
