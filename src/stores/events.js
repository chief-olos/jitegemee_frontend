import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
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

  
  return {events}
})
