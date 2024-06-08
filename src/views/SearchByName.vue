<template>
  <div class="p-8 pb-0 bg-gray-100 min-h-screen">
    <div class="max-w-2xl mx-auto">
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-300 w-full p-3 mb-5 focus:outline-none focus:border-blue-500"
        placeholder="Search for Meals"
        @input="searchMeal"
      />
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
      <div v-for="meal in meals" :key="meal.idMeal" class="bg-white shadow rounded-xl overflow-hidden transform hover:scale-105 transition-transform">
        <router-link :to="`/meal/:${meal.idIngredient}`">
            <img :src="meal.strMealThumb" alt="Meal Thumbnail" class="w-full h-48 object-cover rounded-md">
        </router-link>
        <div class="p-4">
          <h3 class="font-semibold text-lg mb-2">{{ meal.strMeal }}</h3>
          <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid soluta eos totam eligendi, ipsum dolorem!</p>
          <div class="flex justify-start items-center ">
            <a :href="meal.strYoutube" target="_blank" class="text-blue-500 hover: bg-blue-100 py-1 px-3 rounded-lg transition-colors duration-300 hover:bg-blue-200 mr-2">Youtube</a>
            <router-link :to="`/`" class="text-blue-500 hover: bg-blue-100 py-1 px-3 rounded-lg transition-colors duration-300 hover: bg-blue-200">View</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store/index';
import {useRoute} from 'vue-router'

const router = useRoute()
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

const searchMeal = () => {
  store.dispatch('searchMeals', keyword.value);
};

onMounted(()=>{
    keyword.value = router.params.name || '';
    if(keyword.value){
      searchMeal()
    }
})
</script>
