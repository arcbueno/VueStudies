<script lang="ts" setup>
import { defineProps, ref } from 'vue';

const cityName = ref('');

const props = defineProps<{
  city: string
  fetchWeather: (city: string) => Promise<void>
}>()

cityName.value = props.city;
</script>

<template>
  <div class="header">
    <span class="material-symbols-outlined" style="font-size: 128px;">
      filter_drama
    </span>
    <div>
      <p>Check the current weather in your city!</p>
      <form @submit.prevent="props.fetchWeather(cityName)">
        <input type="text" name="city" placeholder="Enter city name" required v-model="cityName" />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.header {
  line-height: 1.5;
  place-items: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
</style>
