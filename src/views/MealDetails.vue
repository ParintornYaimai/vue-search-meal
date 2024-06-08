<template>
  <div>
    {{meal}}

  </div> 
</template>

<script setup>
import {computed, onMounted, ref,watch,defineProps  } from 'vue'
import { useRoute } from 'vue-router'
import { serviceGet } from '../serviceApi'
import store from '../store/index'
const router = useRoute()

const props = defineProps({
  meal: String
})
console.log('Received prop value:', props?.meal)







</script>

