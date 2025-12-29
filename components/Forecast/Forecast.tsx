import { useTranslation } from "react-i18next";
import ForecastItems from "./ForecastItems";

interface Props {
  daily: any;
}

export default function Forecast({ daily }: Props) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-2">
      <div>{t("7_DayForecast")}</div>

      {daily.time.map((day: string, index: number) => (
        <ForecastItems
          key={day}
          day={day}
          min={daily.temperature_2m_min[index]}
          max={daily.temperature_2m_max[index]}
          code={daily.weather_code[index]}
        />
      ))}
    </div>
  );
}
