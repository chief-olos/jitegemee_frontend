import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentLifeStore = defineStore('student_life',  {
    state: () => {
        const student_life = ref([
            {
                id: 1,
                title: "Beyond the Books: A Journey Through Student Life",
                image: "/images/student_life/student-life1.jpg",
                description: "Mary has been hitting the books constantly but has decided to change the game with community outreach",
            },
            {
                id: 2,
                title: "Study.chill.repeat. Life at its best",
                image: "/images/student_life/student-life2.jpg",
                description: "Creating a mantra to increase your output in class can be beneficial",
            },
            {
                id: 3,
                title: "Study.chill.repeat. Life at its best",
                image: "/images/student_life/student-life2.jpg",
                description: "Creating a mantra to increase your output in class can be beneficial",
            },
            {
                id: 4,
                title: "Study.chill.repeat. Life at its best",
                image: "/images/student_life/student-life2.jpg",
                description: "Creating a mantra to increase your output in class can be beneficial",
            },
            {
                id: 5,
                title: "Study.chill.repeat. Life at its best",
                image: "/images/student_life/student-life2.jpg",
                description: "Creating a mantra to increase your output in class can be beneficial",
            },
            {
                id: 6,
                title: "Study.chill.repeat. Life at its best",
                image: "/images/student_life/student-life2.jpg",
                description: "Creating a mantra to increase your output in class can be beneficial",
            },
            {
                id: 7,
                title: "Study.chill.repeat. Life at its best",
                image: "/images/student_life/student-life2.jpg",
                description: "Creating a mantra to increase your output in class can be beneficial",
            },
            {
                id: 8,
                title: "Study.chill.repeat. Life at its best",
                image: "/images/student_life/student-life2.jpg",
                description: "Creating a mantra to increase your output in class can be beneficial",
            },
            {
                id: 9,
                title: "Study.chill.repeat. Life at its best",
                image: "/images/student_life/student-life2.jpg",
                description: "Creating a mantra to increase your output in class can be beneficial",
            },
            {
                id: 10,
                title: "Study.chill.repeat. Life at its best",
                image: "/images/student_life/student-life2.jpg",
                description: "Creating a mantra to increase your output in class can be beneficial",
            },
        
        ])

        return{
            student_life,
        }
    }, 
    actions:{
        
    }
})