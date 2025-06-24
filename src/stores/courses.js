import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoursesStore = defineStore('courses', () => {
    const courses = ref([
    {
        name:"Computer Science",
        school:"School of Computing and Engineering",
        description:"Best course of IT enthusiasts",
        intake:"July 2025"
        
    },

       {
        name:"Medicine",
        school:"School of Medicine and Surgery",
        description:"Best for medical health enthusiasts",
        intake:"Today"
        
    },

       {
        name:"Data Science and Statistics",
        school:"Institute of Mathematics",
        description:"Make data make sense",
        intake:"Yesterday"
        
    },

       {
        name:"Applied Artificial Intelligence",
        school:"School of Information Technology and Innovation",
        description:"Focuses on practical applications of AI ",
        intake:"Yesterday"
        
    },

       {
        name:"Environmental Science and Sustainability",
        school:"Environmental Science and Sustainability",
        description:"Explores ecological principles",
        intake:"Yesterday"
        
    },

       {
        name:"Digital Marketing and Analytics",
        school:"Institute of Mathematics",
        description:"Make data make sense",
        intake:"Yesterday"
        
    },

       {
        name:"Data Science and Statistics",
        school:" School of Business and Communication",
        description:"Make data make sense",
        intake:"Yesterday"
        
    },
       {
        name:"Data Science and Statistics",
        school:"Institute of Mathematics",
        description:"Teaches modern marketing strategies,",
        intake:"Yesterday"
        
    },

       {
        name:"Digital Marketing and Analytics",
        school:"Institute of Mathematics",
        description:"Make data make sense",
        intake:"Yesterday"
        
    },

       {
        name:"Biomedical Engineering",
        school:"School of Health and Bio-Engineering",
        description:"",
        intake:"Yesterday"
        
    },
     
])
  

  return {courses  }
})
