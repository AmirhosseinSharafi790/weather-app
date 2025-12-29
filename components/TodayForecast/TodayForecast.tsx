import { useTranslation } from "react-i18next";
import TodayForecastItems from "./TodayForecastItems";

interface Props {
  hourly: any;
}

export default function TodayForecast({ hourly }: Props) {
    const { t } = useTranslation()
    return(
      <div className="bg-gray-700 px-6 text-gray-400 rounded-lg py-2.5">
        <div className="mb-2">{t("TodayForecast")}</div>

        <div className="flex gap-x-2 overflow-x-auto">
          {hourly.time.map((time: string, index: number) => (
            <TodayForecastItems
              key={time}
              time={time}
              temp={hourly.temperature_2m[index]}
              code={hourly.weather_code[index]}
            />
          ))}
        </div>
      </div>
    )
}