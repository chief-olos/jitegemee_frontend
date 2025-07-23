<script setup>
import { ref } from 'vue'
import { defineModel } from 'vue'

const companyName = ref('Jitegemee University')
const establishedYear = ref(2025)
const mission = ref('To build intuitive, scalable web applications that connect students with the most competent and skillful teachers.')

</script>

<template>
  <h1>About Us</h1>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mb-4" elevation="2">
          <v-card-title>{{ companyName }}</v-card-title>
          <v-card-text>{{ mission }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    

    <v-row>
      <v-col v-for="member in team" :key="member.name" cols="12" md="4">
        <v-card elevation="1">
          <v-card-title>{{ member.name }}</v-card-title>
          <v-card-subtitle>{{ member.role }}</v-card-subtitle>
          <v-card-text>{{ member.bio }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
