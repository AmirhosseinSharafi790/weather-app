import { Sun } from "lucide-react";

export default function AirConditionItems() {
    return(
        <div className="flex flex-col shadow gap-y-3 w-1/4 border border-gray-600/50 rounded-lg py-3 m-auto px-3 items-center justify-center">
            <div className="flex items-center text-gray-400 justify-between gap-x-3">
                <Sun/> Real Feel
            </div>
            <div className="w-full text-3xl text-gray-100 flex-1 text-center">
                31°
            </div>
        </div>
    )
}