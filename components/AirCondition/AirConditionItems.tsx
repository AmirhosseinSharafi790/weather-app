interface Props {
  label: string;
  value: string;
}

export default function AirConditionItems({ label, value }: Props) {
    return(
        <div className="flex flex-col gap-y-3 w-1/4 border border-gray-600/50 rounded-lg py-3 px-3 items-center">
          <div className="text-gray-400">{label}</div>
          <div className="text-3xl text-gray-100">{value}</div>
        </div>
    )
}