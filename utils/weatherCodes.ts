import {
  Sun,
  CloudSun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudFog,
  CloudLightning,
} from "lucide-react";

export function getWeatherInfo(code: number) {
  if (code === 0) {
    return { textKey: "weather.sunny", Icon: Sun };
  }

  if ([1, 2].includes(code)) {
    return { textKey: "weather.partly_cloudy", Icon: CloudSun };
  }

  if (code === 3) {
    return { textKey: "weather.cloudy", Icon: Cloud };
  }

  if ([45, 48].includes(code)) {
    return { textKey: "weather.fog", Icon: CloudFog };
  }

  if (code >= 51 && code <= 57) {
    return { textKey: "weather.drizzle", Icon: CloudRain };
  }

  if (code >= 61 && code <= 67) {
    return { textKey: "weather.rainy", Icon: CloudRain };
  }

  if (code >= 71 && code <= 77) {
    return { textKey: "weather.snowy", Icon: CloudSnow };
  }

  if (code >= 80 && code <= 82) {
    return { textKey: "weather.showers", Icon: CloudRain };
  }

  if (code >= 95) {
    return { textKey: "weather.thunderstorm", Icon: CloudLightning };
  }

  return { textKey: "weather.unknown", Icon: Cloud };
}
