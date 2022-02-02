import TrashIcon from "@/components/Icons/TrashIcon";
import FlatButton from "@/components/UI/MyButtons/FlatButton";
import FlatCounter from "./FlatCounter";

interface CartItemControlProps {
  counterValue: number;
  onMinusClick?: () => void;
  onPlusClick?: () => void;
  onRemoveClick?: () => void;
}

export default function CartItemControl(props: CartItemControlProps) {
  return (
    <div className="ml-4 flex space-x-1.5">
      <FlatCounter 
        countValue={props.counterValue}
        onMinusClick={props.onMinusClick}
        onPlusClick={props.onPlusClick} 
      />
      <FlatButton 
        themeColorClasses="text-error border-error"
        onClick={props.onRemoveClick}
      >
        <TrashIcon />
      </FlatButton>
    </div>
  )
}