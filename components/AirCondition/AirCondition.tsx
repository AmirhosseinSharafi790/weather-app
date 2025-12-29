import { useTranslation } from "react-i18next";
import AirConditionItems from "./AirConditionItems";

interface Props {
  current: any;
}

export default function AirCondition({ current }: Props) {
    const { t } = useTranslation()
    return(
        <div className="bg-gray-700 px-6 mt-3 text-gray-400 rounded-lg py-2.5">
          <div className="mb-2">{t("AirCondition")}</div>
          <div className="flex gap-2 justify-between">
            <AirConditionItems label={t("RealFeel")} value={`${current.apparent_temperature}°`} />
            <AirConditionItems label={t("Wind")} value={`${current.wind_speed_10m} km/h`} />
            <AirConditionItems label={t("Humidity")} value={`${current.relative_humidity_2m}%`} />
            <AirConditionItems label={t("Rain")} value={`${current.precipitation} mm`} />
          </div>
        </div>
    )
}