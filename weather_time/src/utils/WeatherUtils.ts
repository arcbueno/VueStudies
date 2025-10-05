import type { WmoRule } from "@/types";

import wmoRules from './wmo_rules.json';

export class WeatherUtils {
  static getWeatherIcon(props: { time: string, weatherCode: string }): string | undefined {
    const wmoData = JSON.parse(JSON.stringify(wmoRules)) as Record<string, WmoRule>;
    if (new Date(props.time).getHours() >= 18 || new Date(props.time).getHours() < 6) {
      return (wmoData[props.weatherCode] as WmoRule).night.image;
    } else {
      return (wmoData[props.weatherCode] as WmoRule).day.image;
    }
  }
  static getWeatherDescription(props: { time: string, weatherCode: string }): string | undefined {
    const wmoData = JSON.parse(JSON.stringify(wmoRules)) as Record<string, WmoRule>;
    if (new Date(props.time).getHours() >= 18 || new Date(props.time).getHours() < 6) {
      return (wmoData[props.weatherCode] as WmoRule).night.description;
    } else {
      return (wmoData[props.weatherCode] as WmoRule).day.description;
    }
  }
}
