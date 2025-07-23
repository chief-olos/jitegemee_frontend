import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from './../services/api'
import axios from 'axios';

export const useCoursesStore = defineStore('courses',  {
    state: () => {
        const courses = ref([    ]) //updated by pinia
        // this is the course that the user has selected to apply for
        const selectedCourse = ref(0)

        return{
            courses,
            selectedCourse
        }
    }, 
    actions:{
        updateSelectedCourse (payload) { //payload is the same as courseId
            this.selectedCourse = payload
        },
        async fetchCourses() {
            const response = await api.get('getAllCourses')
            this.courses = response.data
        }

    },
    persist: true,
})
