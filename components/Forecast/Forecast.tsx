import { useTranslation } from "react-i18next";
import ForecastItems from "./ForecastItems";

export default function Forecast() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-y-2 items-start justify-center">
      <div className="title">
        {t("7_DayForecast")}
      </div>
      <ForecastItems />
      <ForecastItems />
      <ForecastItems />
      <ForecastItems />
      <ForecastItems />
      <ForecastItems />
      <ForecastItems />
      <ForecastItems />
      <ForecastItems />
    </div>
  );
}
