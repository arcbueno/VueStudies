<script setup lang="ts">
import type { CurrentWeather } from '@/types';
import { defineProps } from 'vue';
import { WeatherUtils } from '../utils/WeatherUtils';
defineProps<{
  currentData: CurrentWeather,
  cityName: string
}>()



</script>

<template>
  <h2>Current Weather in {{ cityName }}</h2>
  <div>
    <img
      :src="WeatherUtils.getWeatherIcon({ time: currentData.time, weatherCode: currentData.weather_code.toString() })" />
    <b>{{ WeatherUtils.getWeatherDescription({
      time: currentData.time, weatherCode:
        currentData.weather_code.toString()
    }) }}</b>
  </div>
  <div class="current-weather">
    <div>
      <div class="item">
        <span class="material-symbols-outlined" style="font-size: 24px;">
          filter_drama
        </span>
        Temperature: {{ currentData.temperature_2m }}°C
      </div>
      <div class="item">
        <span class="material-symbols-outlined" style="font-size: 24px;">
          device_thermostat
        </span>
        Apparent Temperature: {{ currentData.apparent_temperature }}°C
      </div>
    </div>
    <div>
      <div class="item">
        <span class="material-symbols-outlined" style="font-size: 24px;">
          rainy
        </span>
        Precipitation: {{ currentData.precipitation }}mm
      </div>
      <div class="item">
        <span class="material-symbols-outlined" style="font-size: 24px;">
          rainy_light
        </span>
        Rain: {{ currentData.rain }}mm
      </div>
    </div>
    <div class="item">
      <span class="material-symbols-outlined" style="font-size: 24px;">
        {{ currentData.relative_humidity_2m > 70 ? 'humidity_high' : (currentData.relative_humidity_2m > 40 ?
          'humidity_mid' : 'humidity_low') }}
      </span>
      Relative Humidity: {{ currentData.relative_humidity_2m }}%
    </div>
  </div>
</template>

<style scoped>
.current-weather {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.item {
  font-size: 1rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
</style>
