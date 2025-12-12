import { useTranslation } from "react-i18next";
import TodayForecastItems from "./TodayForecastItems";

export default function TodayForecast() {
    const { t } = useTranslation()
    return(
        <div className="bg-gray-700 px-6 text-gray-400 rounded-lg py-2.5">
            <div className="mb-2">{t("TodayForecast")}</div>
            <div className="flex gap-x-2 items-start justify-between">
                <TodayForecastItems />
                <TodayForecastItems />
                <TodayForecastItems />
                <TodayForecastItems />
                <TodayForecastItems />
                <TodayForecastItems />
                <TodayForecastItems />
                <TodayForecastItems />
            </div>
        </div>
    )
}