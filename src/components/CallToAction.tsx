import Link from "next/link";

export default function CallToAction() {
	return (
		<div className="bg-primary-600">
			<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Ready to Transform Your Property?
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
						Get a free, no-obligation estimate today. Christian will personally
						assess your needs and provide a competitive quote for professional
						cleaning services.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href="/contact"
							className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-gray-50 transition-colors"
						>
							Get Free Estimate
						</Link>
						<Link
							href="tel:219-386-3231"
							className="text-base font-semibold leading-6 text-white hover:text-primary-100 transition-colors"
						>
							Call Now <span aria-hidden="true">→</span>
						</Link>
					</div>

					{/* Simplified highlights */}
					<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
						<div>
							<div className="text-2xl font-bold text-white">Free</div>
							<div className="text-primary-100">Estimates</div>
						</div>
						<div>
							<div className="text-2xl font-bold text-white">Fast</div>
							<div className="text-primary-100">Response</div>
						</div>
						<div>
							<div className="text-2xl font-bold text-white">100%</div>
							<div className="text-primary-100">Guaranteed</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
