import { getWeatherInfo } from "@/utils/weatherCodes"

interface Props {
  time: string;
  temp: number;
  code: number;
}

export default function TodayForecastItems({ time, temp, code }: Props) {
    const { Icon } = getWeatherInfo(code)
    return (
      <div className="flex flex-col gap-y-2 border border-gray-600/50 rounded-lg py-5 px-3 items-center">
        <div>{new Date(time).getHours()}:00</div>
        {/* <Icon size={40} className="text-gray-100" /> */}
        <div className="text-xl text-gray-100">
          {Math.round(temp)}°
        </div>
      </div>
    )
}