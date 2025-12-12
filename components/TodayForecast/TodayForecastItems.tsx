import { Sun } from "lucide-react";

export default function TodayForecastItems() {
    return(
        <div className="flex flex-col gap-y-4 border border-gray-600/50 rounded-lg py-5 m-auto px-3 items-center justify-center">
            <div>6:00 PM</div>
            <div>
                <Sun color="#f3f4f6" size={40} />
            </div>
            <div className="w-full text-2xl text-gray-100 flex-1 text-center">
                31°
            </div>
        </div>
    )
}