import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLibraryStore = defineStore('library',  {
    state: () => {
        const library = ref([
            {
                id: 1,
                title: "Computer Science:Learner's Book",
                image: "",
                description: "Modern Technology Computer Science:Learner's Book for comprehensive study",
            },
            {
                id: 2,
                title: "Mass Communication",
                image: "",
                description: "Essential Mass Communication",
            },
            {
                id: 3,
                title: "",
                image: "",
                description: "",
            },
            {
                id: 4,
                title: "",
                image: "",
                description: "",
            },
            {
                id: 5,
                title: "",
                image: "",
                description: "",
            },                                
        ])

        return{
            library,
        }
    }, 
    actions:{
        
    }
})
