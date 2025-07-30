import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Hero() {
	return (
		<div className="relative isolate px-6 pt-14 lg:px-8">
			<div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Professional Roof & Gutter Cleaning{" "}
						<span className="text-primary-600">Services</span>
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
						Founded by Christian Nicholson, 219Clean serves the community with
						dedication, integrity, and unparalleled attention to detail.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href="/contact"
							className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
						>
							Get Free Estimate
							<ChevronRightIcon
								className="ml-2 h-5 w-5 inline"
								aria-hidden="true"
							/>
						</Link>
						<Link
							href="/services"
							className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
						>
							Learn more <span aria-hidden="true">→</span>
						</Link>
					</div>

					{/* Simplified statistics */}
					<div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-lg mx-auto">
						<div className="text-center">
							<div className="text-3xl font-bold text-primary-600">5+</div>
							<div className="text-sm text-gray-600">Years Experience</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-accent-600">100%</div>
							<div className="text-sm text-gray-600">
								Satisfaction Guaranteed
							</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-primary-600">24hr</div>
							<div className="text-sm text-gray-600">Response Time</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
