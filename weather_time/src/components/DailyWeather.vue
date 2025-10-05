<script lang="ts" setup>
import { defineProps } from 'vue';
import type { DailyData } from '@/types';

import { WeatherUtils } from '../utils/WeatherUtils';

defineProps<{
  dailyData: DailyData,
  cityName: string
}>()
</script>

<template>
  <h3>Daily Forecast</h3>
  <div class="daily-forecast">
    <div v-for="(date, index) in dailyData.time" :key="index" class="forecast-item">
      <strong>{{ new Date(date).toLocaleDateString() }}</strong>
      <div>
        <img
          :src="WeatherUtils.getWeatherIcon({ time: dailyData.time[index] || '', weatherCode: (dailyData.weather_code[index] || '0').toString() })" />
        <b>{{ WeatherUtils.getWeatherDescription({
          time: dailyData.time[index] || '', weatherCode: (dailyData.weather_code[index] || '0').toString()
        }) }}</b>
      </div>
      <div class="divider"></div>
      <p>Min Temp: {{ dailyData.temperature_2m_min[index] }}°C</p>
      <p>Max Temp: {{ dailyData.temperature_2m_max[index] }}°C</p>
      <p>Apparent Max Temp: {{ dailyData.apparent_temperature_max[index] }}°C</p>
      <p>UV Index Max: {{ dailyData.uv_index_max[index] }}</p>
      <p>Rain Sum: {{ dailyData.rain_sum[index] }} mm</p>
      <p>Weather Code: {{ dailyData.weather_code[index] }}</p>
      <p>Sunrise: {{ new Date(dailyData.sunrise[index] as string).toLocaleTimeString() }}</p>
      <p>Sunset: {{ new Date(dailyData.sunset[index] as string).toLocaleTimeString() }}</p>
    </div>
  </div>
</template>

<style scoped>
.divider {
  margin: 1rem 0;
  border-bottom: 1px solid #ccc;
}

.daily-forecast {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0rem 2rem;
  text-align: center;
  justify-content: center;
  flex-direction: row;
}

.forecast-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem;
  width: 12%;
  min-width: 150px;
}
</style>
