import { getWeatherInfo } from "@/utils/weatherCodes"

interface Props {
  city: string;
  current: {
    temperature_2m: number;
    weather_code: number;
  };
  country: string;
}

export default function GeneralWeather({ city, current, country }: Props) {
    const { Icon } = getWeatherInfo(current.weather_code)
    
    return(
      <div className="text-gray-300 p-2 flex items-center justify-between">
        <div className="flex flex-col gap-y-6">
          <div className="text-5xl">{city}</div>
          <div className="text-4xl">{country}</div>
          <div className="text-3xl">
            {Math.round(current.temperature_2m)}°
          </div>
        </div>
        <Icon size={90} className="text-orange-400" />
      </div>
    )
}