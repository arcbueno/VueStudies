<script setup lang="ts">
import { ref } from 'vue'
import { WeatherRepository } from './repositories/repository'
import 'primeicons/primeicons.css'
import type { WeatherData } from './types'
import HeaderPage from './components/HeaderPage.vue'
import CurrentWeather from './components/CurrentWeather.vue'
import DailyWeather from './components/DailyWeather.vue'

const repository = new WeatherRepository()

const weather = ref<WeatherData | null>(null)
const cityName = ref('')

const fetchWeather = async (city: string) => {
  const data = await repository.getCurrentWeather(city)
  console.log(data)
  cityName.value = city
  weather.value = data
}

fetchWeather('Recife');
</script>

<template>
  <div class="page">
    <HeaderPage :city="cityName" :fetchWeather="fetchWeather" />
    <div class="divider"></div>
    <transition-group name="weather" tag="div">
      <div v-if="weather">
        <CurrentWeather :currentData="weather.current" :cityName="cityName" />
        <div style="margin-bottom: 2rem;"></div>
        <DailyWeather :dailyData="weather.daily" :cityName="cityName" />
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </transition-group>
  </div>
</template>

<style>
#app {
  margin: 0;
  padding: 0;
}

.page {
  width: 100vw;
  flex-wrap: wrap;
  text-align: center;
  flex-direction: column;
}


.weather-enter-active,
.weather-leave-active {
  transition: all 0.5s ease;
}

.weather-enter-from,
.weather-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
</style>
