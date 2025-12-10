import { Sun } from "lucide-react";

export default function GeneralWeather() {
    return(
        <div className="text-gray-300 p-2 flex items-center justify-between">
            <div className="flex flex-col items-start gap-y-8">
                <div className="city text-7xl">Tehran</div>
                <div className="temperature text-6xl flex items-center">
                    31°
                </div>
            </div>
            <div className="flex items-end">
                <Sun size={120} color="orange" />
            </div>
        </div>
    )
}