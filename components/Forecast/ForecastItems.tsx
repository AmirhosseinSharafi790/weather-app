import { useTranslation } from "react-i18next"
import { getWeatherInfo } from "@/utils/weatherCodes"

interface Props {
  day: string;
  min: number;
  max: number;
  code: number;
}

export default function ForecastItems({ day, min, max, code }: Props) {
    const { t } = useTranslation("common");
    const { Icon, textKey } = getWeatherInfo(code);

    return(
      <div className="flex w-full border-b border-gray-500 py-3">
        <div className="flex-1 text-gray-500">
          {new Date(day).toLocaleDateString(undefined, {
            weekday: "long",
          })}
        </div>

        <div className="flex-1 flex items-center justify-center gap-2">
          <Icon size={20} className="text-orange-400" />
          {t(textKey)}
        </div>

        <div className="flex-1 text-end">
          {Math.round(min)}
          <span className="text-gray-500"> / {Math.round(max)}</span>
        </div>
      </div>
    )
}