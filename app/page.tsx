"use client";

import { useState } from "react";
import AirCondition from "@/components/AirCondition/AirCondition";
import Forecast from "@/components/Forecast/Forecast"
import Header from "@/components/Header/Header"
import GeneralWeather from "@/components/GeneralWeather/GeneralWeather"
import TodayForecast from "@/components/TodayForecast/TodayForecast"
import { useTranslation } from "react-i18next"

export default function Home() {
  const { t } = useTranslation()
  const [weatherData, setWeatherData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (city: string) => {
    if (city.trim().length < 2) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/weather?city=${city}`)
      if (!res.ok) {
        throw new Error(t("error"))
      }
      const data = await res.json()
      if (data?.error) {
        throw new Error(data.error)
      }
      setWeatherData(data)
    } catch (err: any) {
      setWeatherData(null)

      if (err.message === "CITY_NOT_FOUND") {
        setError(t("error"))
      } else {
        setError(t("ErrorOccurring"))
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-800 p-1 md:p-2">
      <Header onSearch={handleSearch} />
      {loading && (
        <div className="text-center text-gray-300 mt-4">{t("loading")}</div>
      )}
      {error && (
        <div className="text-center text-red-400 mt-4">{error}</div>
      )}
      {weatherData && !error && (
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-4/6 p-1.5">
            <GeneralWeather
              city={weatherData.city.name}
              country={weatherData.city.country}
              current={weatherData.weather.current}
            />

            <TodayForecast hourly={weatherData.weather.hourly} />

            <AirCondition current={weatherData.weather.current} />
          </div>

          <div className="w-full md:w-2/6 bg-gray-700 text-gray-300 p-6 rounded-lg shadow">
            <Forecast daily={weatherData.weather.daily} />
          </div>
        </div>
      )}
    </div>
  );
}
