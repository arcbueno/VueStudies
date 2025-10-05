import type { GeolocationData, WeatherData } from '@/types'

export class WeatherRepository {
  private apiKey: string
  private baseUrl: string
  private geolocationUrl: string

  constructor() {
    this.apiKey = import.meta.env.VITE_WEATHER_API_KEY
    this.baseUrl = 'https://api.open-meteo.com/v1'
    this.geolocationUrl = 'https://geocoding-api.open-meteo.com/v1'
  }

  async getCurrentWeather(city: string): Promise<WeatherData> {
    const geolocation = await this.getGeolocation(city)
    const response = await fetch(
      `${this.baseUrl}/forecast?latitude=${geolocation.latitude}&longitude=${geolocation.longitude}&daily=weather_code,sunrise,sunset,temperature_2m_min,temperature_2m_max,apparent_temperature_max,uv_index_max,rain_sum,temperature_2m_mean,apparent_temperature_mean&hourly=weather_code,rain,visibility,uv_index,temperature_2m&current=temperature_2m,precipitation,rain,weather_code,relative_humidity_2m,apparent_temperature&timezone=America%2FSao_Paulo`,
    )
    if (!response.ok) {
      throw new Error('Failed to fetch current weather data')
    }
    const data = await response.json()
    return data as Promise<WeatherData>
  }

  async getGeolocation(city: string): Promise<GeolocationData> {
    const response = await fetch(
      `${this.geolocationUrl}/search?name=${city}&count=1&language=en&format=json`,
    )
    if (!response.ok) {
      throw new Error('Failed to fetch geolocation data')
    }
    const data = await response.json()
    return data.results[0] as Promise<GeolocationData>
  }
}
