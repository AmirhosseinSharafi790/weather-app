"use client";
import AirCondition from "@/components/AirCondition/AirCondition";
import Forecast from "@/components/Forecast/Forecast"
import GeneralWeather from "@/components/GeneralWeather/GeneralWeather"
import Header from "@/components/Header/Header"
import TodayForecast from "@/components/TodayForecast/TodayForecast";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 p-2 md:p-4">
      <Header />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-4/6 p-6">
          <GeneralWeather />
          <TodayForecast />
          <AirCondition />
        </div>
        <div className="w-full md:w-2/6 bg-gray-700 text-gray-300 p-6 rounded-lg shadow">
          <Forecast />
        </div>
      </div>
    </div>
  );
}
