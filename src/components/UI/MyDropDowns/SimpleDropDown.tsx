import DropDownArrowIcon from "@/components/Icons/DropDownArrowIcon";
import { useState } from "react";

interface SimpleDropDownProps {
	label?: string;
	items: string[];
}

export default function SimpleDropDown(props: SimpleDropDownProps) {
	const [isOpen, setIsOpen] = useState(false);
	
	const handleClick = () => {
		if(!isOpen) return setIsOpen(true);

		const dropDownContentDiv = document.querySelector(".simple-dropdown__content");

		dropDownContentDiv?.classList.replace("animate-fade-in", "animate-fade-out");
		setTimeout(() => {
			dropDownContentDiv?.classList.replace("animate-fade-out", "animate-fade-in");
			setIsOpen(false);
		}, 500);
	};

	return (
		<div className="flex flex-col">
			<div className="simple-dropdown__trigger" onClick={handleClick}>
				<span className="text-dark-primary font-medium selection:bg-none">{props.label || "drop"}</span>
				<DropDownArrowIcon />
			</div>
			{
				isOpen &&
				<div 
					className="simple-dropdown__content animate-fade-in"
				>
					{props.items.map((item, index) => (
						<span
							key={index}
							className="simple-dropdown__content--item"
						>
							{item}
						</span>
					))}
				</div>
			}
		</div>
	);
}