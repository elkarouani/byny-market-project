interface DropDownArrowIconProps {
	direction?: "up" | "down";
}

export default function DropDownArrowIcon(props: DropDownArrowIconProps) {
	return (
		<svg
			className={`
				transition-transform duration-500 ease-in-out transform
				${props.direction === "up" ? "rotate-180" : ""}
			`}
			width="20" 
			height="20" 
			viewBox="0 0 20 20" 
			fill="none" 
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M15 8L10.97 14L7 8H15Z" fill="currentColor" />
		</svg>
	);
}