import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentLifeStore = defineStore('student_life',  {
    state: () => {
        const student_life = ref([
            {
                id: 1,
                title: "Beyond the Books:A journey through student life",
                image: "",
                description: "",
            },
            {
                id: 2,
                title: "",
                image: "",
                description: "",
            },
        
        ])

        return{
            student_life,
        }
    }, 
    actions:{
        
    }
})






