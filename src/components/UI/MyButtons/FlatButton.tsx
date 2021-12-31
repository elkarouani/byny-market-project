interface FlatButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  themeColorClasses?: string;
}

export default function FlatButton(props: FlatButtonProps) {
  return (
    <button
      className={`
        py-4 px-1 border rounded-[10px]
        ${props.themeColorClasses || 'text-primarys border-primary'}
      `}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}