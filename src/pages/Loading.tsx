import LoadingIcon from "@/components/Icons/LoadingIcon";

export default function Loading() {
	return (
		<div className="w-full h-full text-primary absolute flex items-center justify-center">
			<LoadingIcon />
		</div>
	);
}