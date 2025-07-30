import Link from "next/link";
import {
	HomeIcon,
	WrenchScrewdriverIcon,
	SparklesIcon,
	Square2StackIcon,
	TruckIcon,
	BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const services = [
	{
		name: "Gutter and Roof Cleaning",
		description:
			"Complete gutter and roof cleaning services to remove dirt, algae, moss, and debris. Protects your home and extends roof life.",
		icon: HomeIcon,
		features: [
			"Soft wash technique",
			"Eco-friendly solutions",
			"Full gutter system cleaning",
			"Before/after photos",
		],
	},
	{
		name: "Roof Washing",
		description:
			"Specialized roof washing services using gentle, effective methods to safely clean and restore your roof.",
		icon: WrenchScrewdriverIcon,
		features: [
			"Safe cleaning methods",
			"Algae and moss removal",
			"No damage guarantee",
			"Professional equipment",
		],
	},
	{
		name: "Pressure and Soft Washing",
		description:
			"Professional pressure and soft washing for driveways, sidewalks, siding, and various exterior surfaces.",
		icon: SparklesIcon,
		features: [
			"Multiple surface types",
			"Stain and grime removal",
			"Surface restoration",
			"Protective treatments",
		],
	},
	{
		name: "Window Washing",
		description:
			"Professional window cleaning services for crystal clear windows that enhance your home's appearance.",
		icon: BuildingOfficeIcon,
		features: [
			"Interior and exterior",
			"Streak-free finish",
			"Screen cleaning",
			"Frame cleaning",
		],
	},
	{
		name: "Spring and Fall Yard Clean Ups",
		description:
			"Comprehensive seasonal yard maintenance to keep your property looking its best year-round.",
		icon: TruckIcon,
		features: [
			"Debris removal",
			"Leaf cleanup",
			"Seasonal preparation",
			"Property maintenance",
		],
	},
	{
		name: "Paver Sealing",
		description:
			"Professional paver sealing services to protect and enhance your patios, walkways, and driveways.",
		icon: Square2StackIcon,
		features: [
			"Surface protection",
			"Enhanced appearance",
			"Weed prevention",
			"Long-lasting results",
		],
	},
];

export default function Services() {
	return (
		<div className="bg-gray-50 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-base font-semibold leading-7 text-primary-600">
						Our Services
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Professional Cleaning Solutions
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Comprehensive cleaning services designed to enhance and protect your
						property investment.
					</p>
				</div>

				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{services.map((service) => (
							<div
								key={service.name}
								className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
							>
								<dt>
									<div
										className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${
											services.indexOf(service) % 2 === 0
												? "bg-primary-600"
												: "bg-accent-600"
										}`}
									>
										<service.icon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</div>
									<p className="text-xl font-semibold leading-7 text-gray-900">
										{service.name}
									</p>
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">{service.description}</p>
									<ul className="mt-6 space-y-2">
										{service.features.map((feature) => (
											<li
												key={feature}
												className="flex items-center"
											>
												<div className="h-1.5 w-1.5 rounded-full bg-primary-600 mr-3" />
												<span className="text-sm text-gray-600">{feature}</span>
											</li>
										))}
									</ul>
								</dd>
							</div>
						))}
					</dl>
				</div>

				<div className="mt-16 text-center">
					<Link
						href="/services"
						className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
					>
						View All Services
					</Link>
				</div>
			</div>
		</div>
	);
}
