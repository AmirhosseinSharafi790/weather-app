import { Sun } from "lucide-react";

export default function ForecastItems() {
    return(
        <div className="days flex w-full border-b border-gray-500 py-3">
            <div className="day text-gray-500 flex-1 text-start">
                Today
            </div>
            <div className="flex-1 flex items-center justify-center gap-2">
            <Sun size={20} color="orange" />
            Sunny
            </div>
            <div className="min_max_weather flex-1 text-end">
            37<span className="text-gray-500">/42</span>
            </div>
        </div>
    )
}