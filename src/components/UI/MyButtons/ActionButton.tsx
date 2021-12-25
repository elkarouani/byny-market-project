interface ActionButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  extraClass?: string;
}

export default function ActionButton(props: ActionButtonProps) {
  return (
    <button
      className={"action-button " + (props.extraClass || "")}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label || "click"}
    </button>
  );
}