import { useTranslation } from "react-i18next";
import AirConditionItems from "./AirConditionItems";

export default function AirCondition() {
    const { t } = useTranslation()
    return(
        <div className="bg-gray-700 px-6 mt-3 text-gray-400 rounded-lg py-2.5">
            <div className="mb-2">{t("AirCondition")}</div>
            <div className="flex gap-x-2 w-full flex-1 items-start justify-between">
                <AirConditionItems />
                <AirConditionItems />
                <AirConditionItems />
                <AirConditionItems />
                <AirConditionItems />
            </div>
        </div>
    )
}