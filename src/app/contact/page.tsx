import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import {
	PhoneIcon,
	EnvelopeIcon,
	MapPinIcon,
	ClockIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
	title: "Contact - 219Clean | Get Your Free Estimate Today",
	description:
		"Contact Christian Nicholson for professional roof and gutter cleaning services. Free estimates, fast response, and personalized service.",
};

const contactInfo = [
	{
		name: "Phone",
		description: "Call or text for immediate response",
		contact: "219-386-3231",
		href: "tel:219-386-3231",
		icon: PhoneIcon,
	},
	{
		name: "Email",
		description: "Send us a message anytime",
		contact: "christian219clean@gmail.com",
		href: "mailto:christian219clean@gmail.com",
		icon: EnvelopeIcon,
	},
	{
		name: "Service Area",
		description: "Proudly serving the region",
		contact: "Northwest Indiana",
		href: null,
		icon: MapPinIcon,
	},
	{
		name: "Response Time",
		description: "Fast, reliable communication",
		contact: "Within 24 hours",
		href: null,
		icon: ClockIcon,
	},
];

export default function Contact() {
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<div className="bg-primary-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Get Your Free Estimate
						</h1>
						<p className="mt-6 text-lg leading-8 text-primary-100">
							Ready to transform your property? Contact Christian directly for
							personalized service and a free, no-obligation estimate.
						</p>
					</div>
				</div>
			</div>

			{/* Contact Info Cards */}
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{contactInfo.map((item) => (
							<div
								key={item.name}
								className="text-center"
							>
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-600">
									<item.icon
										className="h-8 w-8 text-white"
										aria-hidden="true"
									/>
								</div>
								<h3 className="mt-6 text-lg font-semibold text-gray-900">
									{item.name}
								</h3>
								<p className="mt-2 text-sm text-gray-600">{item.description}</p>
								{item.href ? (
									<a
										href={item.href}
										className="mt-2 block text-base font-medium text-primary-600 hover:text-primary-700 transition-colors"
									>
										{item.contact}
									</a>
								) : (
									<p className="mt-2 text-base font-medium text-gray-900">
										{item.contact}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Contact Form Section */}
			<div className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
						<div className="max-w-xl lg:max-w-lg">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900">
								Request Your Free Estimate
							</h2>
							<p className="mt-4 text-lg leading-8 text-gray-600">
								Fill out the form below and Christian will get back to you
								within 24 hours with a detailed estimate for your cleaning
								needs.
							</p>
							<div className="mt-8 space-y-6">
								<div className="flex gap-x-4">
									<div className="flex-none">
										<div className="h-6 w-6 rounded-full bg-accent-500" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">
											Free Estimates
										</h3>
										<p className="text-gray-600">
											No obligation, detailed quotes for all services
										</p>
									</div>
								</div>
								<div className="flex gap-x-4">
									<div className="flex-none">
										<div className="h-6 w-6 rounded-full bg-accent-500" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">
											Fast Response
										</h3>
										<p className="text-gray-600">
											Christian responds personally within 24 hours
										</p>
									</div>
								</div>
								<div className="flex gap-x-4">
									<div className="flex-none">
										<div className="h-6 w-6 rounded-full bg-accent-500" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">
											Personal Service
										</h3>
										<p className="text-gray-600">
											Direct communication with the business owner
										</p>
									</div>
								</div>
							</div>
						</div>
						<ContactForm />
					</div>
				</div>
			</div>

			{/* Emergency Contact */}
			<div className="bg-primary-600 py-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white">
							Need Immediate Service?
						</h2>
						<p className="mt-6 text-lg leading-8 text-primary-100">
							For urgent cleaning needs or storm damage response, call Christian
							directly.
						</p>
						<div className="mt-10">
							<a
								href="tel:219-386-3231"
								className="rounded-md bg-white px-8 py-4 text-lg font-semibold text-primary-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Call Now: 219-386-3231
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
