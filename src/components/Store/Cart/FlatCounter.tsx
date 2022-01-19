import MinusIcon from "@/components/Icons/MinusIcon";
import PlusIcon from "@/components/Icons/PlusIcon";

interface FlatCounterProps {
  countValue: number;
  onMinusClick?: () => void;
  onPlusClick?: () => void;
}

export default function FlatCounter(props: FlatCounterProps) {
  return (
    <div className="pr-1 py-2 flex flex-col items-center border-r">
      <span 
        className="text-[#4A90E2] font-medium"
        onClick={props.onMinusClick}
      >
        <MinusIcon />
      </span>
      <span className="mb-2 mt-3 text-[#161B33] text-opacity-75">{props.countValue}</span>
      <span 
        className="text-[#4A90E2] font-medium"
        onClick={props.onPlusClick}
      >
        <PlusIcon />
      </span>
    </div>
  )
}