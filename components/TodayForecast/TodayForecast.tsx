import { useTranslation } from "react-i18next";
import TodayForecastItems from "./TodayForecastItems";

interface Props {
  hourly: any;
}

export default function TodayForecast({ hourly }: Props) {
    const { t } = useTranslation()
    const now = new Date()
    const currentHour = now.toLocaleString("en-CA", {
      timeZone: "Asia/Tehran",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
    }).replace(", ", "T");
    const startIndex = hourly.time.findIndex((time: string) =>
      time.startsWith(currentHour)
    )

  const next24Hours = startIndex !== -1 ? hourly.time.slice(startIndex, startIndex + 24) : []
  
    return(
      <div className="bg-gray-700 px-6 text-gray-400 rounded-lg py-2.5">
        <div className="mb-2">{t("TodayForecast")}</div>

        <div className="flex gap-x-2 overflow-x-auto">
          {next24Hours.map((time: string, index: number) => (
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