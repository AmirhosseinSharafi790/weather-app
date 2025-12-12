import { Sun } from "lucide-react";

export default function GeneralWeather() {
    return(
        <div className="text-gray-300 p-2 flex items-center justify-between">
            <div className="flex flex-col items-start gap-y-6">
                <div className="city text-5xl">Tehran</div>
                <div className="temperature text-4xl flex items-center">
                    31°
                </div>
            </div>
            <div className="flex items-end">
                <Sun size={90} color="orange" />
            </div>
        </div>
    )
}