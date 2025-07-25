import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from './../services/api'
import axios from 'axios';

export const useLibraryStore = defineStore('library',  {
    state: () => {
        const library = ref([    ])

        return{
            library,
        }
    }, 
    actions:{
        async fetchLibrary() {
            const response = await api.get('getAllLibraryItems')
            this.library = response.data
        }
        
    },
})
