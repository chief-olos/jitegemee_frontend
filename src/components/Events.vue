<script setup>
import {ref} from 'vue'
     const events =ref([
        {
            name:"Community Outreach at Northern Kenya",
            image:"../../images/community.jpg",
            date:"July 6th 2025",
            location:"Johnston International",
            category:"Community Outreach"
        },
                {
            name:"InterClub Sport Competition ",
            image:"../../images/clubs.avif",
            date:"30th July 2025",
            location:"Sports Complex",
            category:"Clubs"
        },
        {
            name:"ICT Club Visit to Namibia",
            image:"../../images/ICT.jpg",
            date:"12th September",
            location:"Namibia",
            category:"Clubs"
        },
                {
            name:"Software Development Bootcamp",
            image:"../../images/bootcamp.jpg",
            date:"4th August 2025",
            location:"ilab@Africa",
            category:"Technology"
        },
     ])

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