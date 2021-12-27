import Service from "@/hooks/entities/Service";

interface ServiceCardProps {
	service: Service;
	onClick?: (slug: string) => void;
}

export default function ServiceCard(props: ServiceCardProps) {
	const { label, description, illustration } = props.service;

	return (
		<div className="text-dark-primary/70">
			<div className="px-2 flex flex-col items-center space-y-2">
				<div className="service-card__illustration">
					<img className="w-2/3" src={`/images/${illustration}`} alt={label} />
				</div>
				<h3 className="w-3/5 text-sm font-medium text-center">{label}</h3>
				<p className="hidden md:block">{description}</p>
			</div>
		</div>
	);
}