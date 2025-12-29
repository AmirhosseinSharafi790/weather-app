import { GeoLocation, WeatherResponse } from "@/types/Weather";


export async function searchCity(
  city: string
): Promise<GeoLocation[]> {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=en&format=json`
  )

  if (!res.ok) throw new Error("Failed to fetch city")

  const data = await res.json()
  return data.results || []
}

/* گرفتن اطلاعات هوا */
export async function getWeather(
  latitude: number,
  longitude: number
): Promise<WeatherResponse> {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation_probability,weather_code,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,wind_speed_10m_max&timezone=auto&forecast_days=7`,
    {
      next: { revalidate: 600 },
    }
  )

  if (!res.ok) throw new Error("Weather fetch failed")

  return res.json()
}
