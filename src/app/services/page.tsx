import type { Metadata } from "next";
import Link from "next/link";
import {
	HomeIcon,
	WrenchScrewdriverIcon,
	SparklesIcon,
	CheckCircleIcon,
	Square2StackIcon,
	TruckIcon,
	BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
	title: "Services - 219Clean | Professional Cleaning Services",
	description:
		"Comprehensive cleaning services including gutter and roof cleaning, roof washing, pressure and soft washing, window washing, yard cleanups, and paver sealing. Professional service with personal attention.",
};

const services = [
	{
		id: "gutter-roof-cleaning",
		name: "Gutter and Roof Cleaning",
		description:
			"Complete gutter and roof cleaning services that remove dirt, algae, moss, and debris while protecting your home's integrity and drainage systems.",
		icon: HomeIcon,
		features: [
			"Soft wash technique to prevent damage",
			"Complete gutter system cleaning",
			"Eco-friendly biodegradable solutions",
			"Extends roof lifespan by years",
			"Prevents water damage",
			"Before and after documentation",
			"No damage guarantee",
		],
		process: [
			"Property inspection and assessment",
			"Protective covering of landscaping",
			"Debris removal from gutters",
			"Application of cleaning solution",
			"Gentle soft wash cleaning",
			"Downspout clearing and testing",
			"Final rinse and cleanup",
		],
	},
	{
		id: "roof-washing",
		name: "Roof Washing",
		description:
			"Specialized roof washing services using gentle, effective methods to safely clean and restore your roof without causing damage.",
		icon: WrenchScrewdriverIcon,
		features: [
			"Safe, gentle cleaning methods",
			"Algae and moss removal",
			"Stain elimination",
			"Improved curb appeal",
			"Extended roof life",
			"Professional equipment",
			"No damage guarantee",
		],
		process: [
			"Roof condition assessment",
			"Protective measures for landscaping",
			"Pre-treatment of problem areas",
			"Careful washing application",
			"Thorough rinsing",
			"Final inspection",
		],
	},
	{
		id: "pressure-soft-washing",
		name: "Pressure and Soft Washing",
		description:
			"Professional pressure and soft washing services for driveways, sidewalks, siding, decks, and various exterior surfaces.",
		icon: SparklesIcon,
		features: [
			"Multiple surface expertise",
			"Pressure and soft wash options",
			"Stain and grime removal",
			"Surface restoration",
			"Protective treatments available",
			"Environmentally conscious methods",
			"Professional equipment",
		],
		process: [
			"Surface assessment and preparation",
			"Selection of appropriate washing method",
			"Pre-treatment of stained areas",
			"Washing with optimal pressure settings",
			"Post-treatment if needed",
			"Final inspection and cleanup",
		],
	},
	{
		id: "window-washing",
		name: "Window Washing",
		description:
			"Professional window cleaning services for crystal clear windows that enhance your home's appearance and let in maximum natural light.",
		icon: BuildingOfficeIcon,
		features: [
			"Interior and exterior cleaning",
			"Streak-free finish",
			"Screen cleaning included",
			"Frame and sill cleaning",
			"Professional squeegee technique",
			"Eco-friendly cleaning solutions",
			"Satisfaction guaranteed",
		],
		process: [
			"Window assessment and preparation",
			"Screen removal and cleaning",
			"Frame and sill cleaning",
			"Professional window washing",
			"Screen reinstallation",
			"Final quality inspection",
		],
	},
	{
		id: "yard-cleanups",
		name: "Spring and Fall Yard Clean Ups",
		description:
			"Comprehensive seasonal yard maintenance services to keep your property looking its best throughout the year.",
		icon: TruckIcon,
		features: [
			"Debris and leaf removal",
			"Seasonal property preparation",
			"Gutter clearing of organic matter",
			"Walkway and driveway cleaning",
			"Property maintenance assessment",
			"Proper disposal of materials",
			"Preparation for next season",
		],
		process: [
			"Property assessment and planning",
			"Debris collection and removal",
			"Leaf and organic matter cleanup",
			"Walkway and surface cleaning",
			"Gutter maintenance check",
			"Final property inspection",
		],
	},
	{
		id: "paver-sealing",
		name: "Paver Sealing",
		description:
			"Professional paver sealing services to protect and enhance your patios, walkways, and driveways while preventing weed growth.",
		icon: Square2StackIcon,
		features: [
			"Surface protection from elements",
			"Enhanced color and appearance",
			"Weed and grass prevention",
			"Stain resistance improvement",
			"Extended paver lifespan",
			"Professional-grade sealers",
			"Long-lasting results",
		],
		process: [
			"Paver condition assessment",
			"Thorough cleaning and preparation",
			"Crack and damage repair",
			"Application of sealing product",
			"Even coverage verification",
			"Curing time management",
			"Final quality inspection",
		],
	},
];

const pricing = [
	{
		service: "Gutter and Roof Cleaning",
		description: "Comprehensive cleaning packages",
		features: ["Free estimate", "Detailed quote", "No hidden fees"],
	},
	{
		service: "Roof Washing",
		description: "Professional roof restoration",
		features: ["Free estimate", "Safe methods", "Quality guarantee"],
	},
	{
		service: "Pressure and Soft Washing",
		description: "Surface-specific pricing",
		features: ["Free estimate", "Multiple surfaces", "Volume discounts"],
	},
	{
		service: "Window Washing",
		description: "Clear view guarantee",
		features: ["Free estimate", "Interior/exterior", "Streak-free results"],
	},
	{
		service: "Yard Clean Ups",
		description: "Seasonal maintenance packages",
		features: ["Free estimate", "Debris removal", "Property preparation"],
	},
	{
		service: "Paver Sealing",
		description: "Protection and enhancement",
		features: [
			"Free estimate",
			"Long-lasting results",
			"Professional products",
		],
	},
];

export default function Services() {
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<div className="bg-primary-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Our Services
						</h1>
						<p className="mt-6 text-lg leading-8 text-primary-100">
							Professional cleaning services with personal attention and
							guaranteed results. Every job is handled by Christian personally.
						</p>
					</div>
				</div>
			</div>

			{/* Services Detail */}
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="space-y-32">
						{services.map((service, index) => (
							<div
								key={service.id}
								id={service.id}
								className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center"
							>
								<div className={index % 2 === 1 ? "lg:order-2" : ""}>
									<div className="mb-8">
										<service.icon
											className={`h-12 w-12 ${
												index % 2 === 0 ? "text-primary-600" : "text-accent-600"
											}`}
										/>
									</div>
									<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
										{service.name}
									</h2>
									<p className="mt-6 text-lg leading-8 text-gray-600">
										{service.description}
									</p>
									<div className="mt-8">
										<h3 className="text-lg font-semibold text-gray-900 mb-4">
											What's Included:
										</h3>
										<ul className="space-y-3">
											{service.features.map((feature) => (
												<li
													key={feature}
													className="flex items-start"
												>
													<CheckCircleIcon className="h-6 w-6 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
													<span className="text-gray-700">{feature}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
								<div
									className={`mt-12 lg:mt-0 ${
										index % 2 === 1 ? "lg:order-1" : ""
									}`}
								>
									<div className="bg-gray-50 rounded-2xl p-8">
										<h3 className="text-xl font-semibold text-gray-900 mb-6">
											Our Process:
										</h3>
										<ol className="space-y-4">
											{service.process.map((step, stepIndex) => (
												<li
													key={stepIndex}
													className="flex items-start"
												>
													<div className="flex-shrink-0 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
														{stepIndex + 1}
													</div>
													<span className="text-gray-700">{step}</span>
												</li>
											))}
										</ol>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Pricing Section */}
			<div className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Transparent Pricing
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Fair, competitive pricing with no hidden fees. Every estimate is
							free and detailed.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-3">
						{pricing.map((item) => (
							<div
								key={item.service}
								className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200"
							>
								<h3 className="text-xl font-semibold text-gray-900">
									{item.service}
								</h3>
								<p className="mt-4 text-gray-600">{item.description}</p>
								<ul className="mt-8 space-y-3">
									{item.features.map((feature) => (
										<li
											key={feature}
											className="flex items-center"
										>
											<CheckCircleIcon className="h-5 w-5 text-accent-500 mr-3" />
											<span className="text-sm text-gray-600">{feature}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="mt-16 text-center">
						<Link
							href="/contact"
							className="btn-primary text-lg"
						>
							Get Your Free Estimate
						</Link>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-primary-600 py-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white">
							Ready to Get Started?
						</h2>
						<p className="mt-6 text-lg leading-8 text-primary-100">
							Contact Christian today for a free, no-obligation estimate on any
							of our services.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								href="/contact"
								className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Contact Us
							</Link>
							<Link
								href="tel:219-386-3231"
								className="text-base font-semibold leading-6 text-white hover:text-primary-100 transition-colors"
							>
								Call Now <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
