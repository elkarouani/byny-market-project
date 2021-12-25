export default function SocialButton(props: any) {
    return (
        <button
            className="btn btn-primary"
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    );
}