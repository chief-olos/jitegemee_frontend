<script setup>
import {ref,onMounted} from 'vue'
import { useCoursesStore } from '../stores/courses'
import { useRouter } from 'vue-router'

const router = useRouter()
const coursesStore = useCoursesStore() //making the courses accessible
const courses= coursesStore.courses


onMounted(() => {
    coursesStore.fetchCourses(); //fetching the courses from the API
});

function apply(courseId){
        coursesStore.updateSelectedCourse(courseId) // keep track of the course selected
        router.push('/apply')
}

</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for="course in courses">
                <v-card color = "indigo-lighten-2">
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
                <v-card-actions>
                    <v-btn color = "primary" @click="apply(course.id)"> Apply </v-btn>
                </v-card-actions>
            </v-card>
            
            </v-col>
        </v-row>
    </v-container>
</template>