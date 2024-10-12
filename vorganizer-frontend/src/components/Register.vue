<template>
  <v-container class="fill-height custom-container" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-4">
          <v-card-title class="headline">Regestrierung</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Benutzername"
                v-model="newUser.userName"
                required
              ></v-text-field>
              <v-text-field
                label="Passwort"
                v-model="newUser.password"
                type="password"
                required
              ></v-text-field>
              <v-text-field
                label="Email"
                v-model="newUser.mailAddress"
                required
              ></v-text-field>

              <v-row justify="center">
                <v-col cols="5" class="button-col">
                  <v-btn
                    block
                    color="primary"
                    @click="registerUser"
                  >
                    Account erstellen
                  </v-btn>
                </v-col>
                <v-col cols="5" class="button-col">
                  <v-btn
                    block
                    color="secondary"
                    outlined
                    @click="backToLogin"
                  >
                    Zurück zum Login
                  </v-btn>
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

import router from "@/components/router";
import {validateMailAddress} from "@/components/validation/ValidationRules";
import users from "@/components/Users.vue";

const newUser = {
  name: '',
  password: '',
  mailAddress: ''
}

//TODO here we can implement the mail validation function
const registerUser = () => {
  if (newUser.value.userName && newUser.value.password && newUser.value.mailAddress) {
    users.value.push({...newUser.value});
    newUser.value.userName = '';
    newUser.value.password = '';
    newUser.value.mailAddress = '';
    console.log(newUser.value);
    console.log(users.value);
  }
};

const backToLogin = () => {
  router.push('/')
}

</script>
<style scoped>
.custom-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20vh; /* Adjust this value to move the card further down */
}
</style>
