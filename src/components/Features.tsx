import {
	ShieldCheckIcon,
	UserIcon,
	CurrencyDollarIcon,
	ClockIcon,
	CheckBadgeIcon,
	HeartIcon,
} from "@heroicons/react/24/outline";

const features = [
	{
		name: "Personal Service",
		description:
			"Christian personally handles every job, ensuring consistent quality and attention to detail.",
		icon: UserIcon,
	},
	{
		name: "Competitive Pricing",
		description:
			"Fair, transparent pricing with no hidden fees. Quality service at affordable rates.",
		icon: CurrencyDollarIcon,
	},
	{
		name: "Timely Completion",
		description:
			"Reliable scheduling and prompt completion of all cleaning projects.",
		icon: ClockIcon,
	},
	{
		name: "Fully Insured",
		description:
			"Complete insurance coverage for your peace of mind and property protection.",
		icon: ShieldCheckIcon,
	},

	{
		name: "Community Focused",
		description:
			"Proud to serve the Northwest Indiana community with integrity and care.",
		icon: HeartIcon,
	},
];

export default function Features() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-primary-600">
						Why Choose 219Clean
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Excellence in Every Detail
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Experience the difference of working with a dedicated professional
						who takes pride in delivering exceptional results for every client.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature, index) => (
							<div
								key={feature.name}
								className="relative pl-16"
							>
								<dt className="text-base font-semibold leading-7 text-gray-900">
									<div
										className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ${
											index % 2 === 0 ? "bg-primary-600" : "bg-accent-600"
										}`}
									>
										<feature.icon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base leading-7 text-gray-600">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
