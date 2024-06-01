<template>
   <div class="flex flex-col p-8 justify-center">
    <input type="text" class="rounded border-2 border-gray-200 w-full " placeholder="Search for Meals" >

    <div class="flex justify-center gap-1 mt-2">
        <router-link v-for="letter of letters.split('')" :key="letter" :to="`/search/${letter}`">
            {{letter}}
        </router-link>
    </div>
    
   </div>
</template>

<script setup>
import {onMounted,ref} from 'vue'
import {serviceGet} from '../serviceApi'

const letters = "ACDEFGHIJK"
const ingredients = ref([])

onMounted(async()=>{
    ingredients.value = await serviceGet('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
})

</script> 

