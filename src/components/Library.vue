<script setup>
    import {ref} from 'vue'

    import { useLibraryStore } from '../stores/library'
    const libraryStore = useLibraryStore() 
    const library= libraryStore.library 
</script>

<template>
    <h1> Library</h1>
    
    <v-container>
        <v-row>
            <v-col md="4" v-for = "item in library" :key="item">
                <v-card
                    class="mx-auto"
                    max-width="400"
                    color = "indigo"
                >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    :src="item.image"
                    cover
                    >
                    <v-card-title>{{ item.title }}</v-card-title>
                    </v-img>
                    
                    <v-card-text>
                    <div>{{item.description}}</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="white" text="View"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>