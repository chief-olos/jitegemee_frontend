<script setup>
import {ref,onMounted} from 'vue'

import { useEventsStore } from '../stores/events'
const eventsStore = useEventsStore()  
const events= eventsStore.events
onMounted(() => {
    eventsStore.fetchEvents();
});
     
</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4"  v-for="event in events" :key="event">
   <v-card
    class="mx-auto"
    max-width="400"
    color ="indigo"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="event.image"
      cover
    >
      <v-card-title>{{ event.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ event.date }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{ event.location }}</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="blue" :text="event.category"></v-btn>

      <v-btn color="orange" text="Explore"></v-btn>
    </v-card-actions>
  </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>