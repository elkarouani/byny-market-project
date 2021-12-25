interface ActionButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
}

export default function ActionButton(props: ActionButtonProps) {
  return (
    <button
      className="action-button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label || "click"}
    </button>
  );
}