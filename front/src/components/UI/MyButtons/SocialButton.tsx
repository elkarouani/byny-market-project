import GoogleIcon from "@/components/Icons/GoogleIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";
import TwitterIcon from "@/components/Icons/TwitterIcon";

interface SocialButtonProps {
	socialApp: string;
	onClick?: () => void;
	disabled?: boolean;
}

const SocialApps = (label: string) => {
	switch (label) {
		case "google":
			return <GoogleIcon />;
		case "twitter":
			return <TwitterIcon />;
		case "linkedin":
			return <LinkedinIcon />;
		default:
			return null;
	}
};

export default function SocialButton(props: SocialButtonProps) {
	return (
		<button
			className="social-button"
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{SocialApps(props.socialApp)}
		</button>
	);
}