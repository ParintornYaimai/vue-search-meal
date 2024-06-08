<template>
  <div>
    <img :src="meal" alt="">
    {{meal}}
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import { useRoute } from 'vue-router'
import { serviceGet } from '../serviceApi'


const router = useRoute()
const meal = ref({})
const keyword = ref('')

const getDetail =()=>{
  store.dispatch('getDetail',keyword.value)
}

onMounted(()=>{
    
})

</script>

<style>

</style>