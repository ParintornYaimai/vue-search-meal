<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="`/home`" class=" inline-flex items-center h-full px-5">
        Home
      </router-link>
      <div class="mr-2 flex items-center gap-1">
        <router-link :to="`/by-name`" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
          Search Meals
        </router-link >
        <router-link :to="`/by-letter/${letter}`" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
          Meals By Latter
        </router-link>
        <router-link :to="`/by-ingredient/${ingredient}`" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
          Meals By Ingredients
        </router-link>
      </div>
    </header>
</template>

<script>

</script>

<style>

</style>