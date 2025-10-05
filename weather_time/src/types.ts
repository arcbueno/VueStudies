export interface GeolocationData {
  latitude: number
  longitude: number
  name: string
}

export interface WmoRule {
  day: {
    description: string
    image: string
  }
  night: {
    description: string
    image: string
  }
}

// Weather Forecast API Types
export interface CurrentUnits {
  time: string
  interval: string
  temperature_2m: string
  precipitation: string
  rain: string
  weather_code: string
  relative_humidity_2m: string
  apparent_temperature: string
}

export interface CurrentWeather {
  time: string
  interval: number
  temperature_2m: number
  precipitation: number
  rain: number
  weather_code: number
  relative_humidity_2m: number
  apparent_temperature: number
}

export interface HourlyUnits {
  time: string
  temperature_2m: string
  weather_code: string
  rain: string
  visibility: string
  uv_index: string
}

export interface HourlyData {
  time: string[]
  temperature_2m: number[]
  weather_code: number[]
  rain: number[]
  visibility: number[]
  uv_index: number[]
}

export interface DailyUnits {
  time: string
  weather_code: string
  sunrise: string
  sunset: string
  temperature_2m_min: string
  temperature_2m_max: string
  apparent_temperature_max: string
  uv_index_max: string
  rain_sum: string
  temperature_2m_mean: string
  apparent_temperature_mean: string
}

export interface DailyData {
  time: string[]
  weather_code: number[]
  sunrise: string[]
  sunset: string[]
  temperature_2m_min: number[]
  temperature_2m_max: number[]
  apparent_temperature_max: number[]
  uv_index_max: number[]
  rain_sum: number[]
  temperature_2m_mean: number[]
  apparent_temperature_mean: number[]
}

export interface WeatherData {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_units: CurrentUnits
  current: CurrentWeather
  hourly_units: HourlyUnits
  hourly: HourlyData
  daily_units: DailyUnits
  daily: DailyData
}
