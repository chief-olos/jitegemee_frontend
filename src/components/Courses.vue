<script setup>
import {ref} from 'vue'
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
</script>

<template>
   <v-container>
   </v-container>
    <v-row>

    
        <v-col md="4" v-for="course in courses">
             <v-card color = "blue">
        <v-card-item>
          <v-card-title>{{course.name}}</v-card-title>

          <v-card-subtitle>{{course.school}}</v-card-subtitle>
        </v-card-item>

        <v-card-text>
         {{course.description}}
        </v-card-text>

         <v-card-text>
         {{course.intake}}
        </v-card-text>
      </v-card>

        </v-col>
</v-row>
</template>