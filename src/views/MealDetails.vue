<template>
  <div>
    {{detail}}
  </div> 
</template>

<script setup>
import {computed, onMounted, ref,defineProps  } from 'vue'
import { useRoute } from 'vue-router'
import { serviceGet } from '../serviceApi'
import store from '../store/index'
const router = useRoute()
const detail = computed(() => store.state.getDetails);


onMounted(() => {
  const id = router.params.idMeal
  if (id) {
    store.dispatch('getDetailss', id)
  }
})





</script>

