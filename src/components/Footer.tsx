import Link from "next/link";
import {
	PhoneIcon,
	EnvelopeIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline";

const navigation = {
	main: [
		{ name: "Home", href: "/" },
		{ name: "Services", href: "/services" },
		{ name: "Reviews", href: "/reviews" },
		{ name: "Contact", href: "/contact" },
	],
	services: [
		{ name: "Roof Cleaning", href: "/services#roof-cleaning" },
		{ name: "Gutter Cleaning", href: "/services#gutter-cleaning" },
		{ name: "Pressure Washing", href: "/services#pressure-washing" },
		{ name: "Free Estimates", href: "/contact" },
	],
};

export default function Footer() {
	return (
		<footer
			className="bg-gray-900"
			aria-labelledby="footer-heading"
		>
			<h2
				id="footer-heading"
				className="sr-only"
			>
				Footer
			</h2>
			<div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-8">
						<div>
							<span className="text-3xl font-bold text-white">219Clean</span>
							<p className="mt-4 text-sm leading-6 text-gray-200">
								Founded by Christian Nicholson, 219Clean serves the community
								with dedication, integrity, and unparalleled attention to
								detail. Professional roof and gutter cleaning services with a
								personal touch.
							</p>
						</div>
						<div className="space-y-3">
							<div className="flex items-center space-x-3 text-gray-200">
								<PhoneIcon className="h-5 w-5" />
								<span className="text-sm">219-386-3231</span>
							</div>
							<div className="flex items-center space-x-3 text-gray-200">
								<EnvelopeIcon className="h-5 w-5" />
								<span className="text-sm">christian219clean@gmail.com</span>
							</div>
							<div className="flex items-center space-x-3 text-gray-200">
								<MapPinIcon className="h-5 w-5" />
								<span className="text-sm">Northwest Indiana</span>
							</div>
						</div>
					</div>
					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold leading-6 text-white">
									Navigation
								</h3>
								<ul
									role="list"
									className="mt-6 space-y-4"
								>
									{navigation.main.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className="text-sm leading-6 text-gray-200 hover:text-white transition-colors"
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold leading-6 text-white">
									Services
								</h3>
								<ul
									role="list"
									className="mt-6 space-y-4"
								>
									{navigation.services.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className="text-sm leading-6 text-gray-200 hover:text-white transition-colors"
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
						<p className="text-xs leading-5 text-gray-300">
							&copy; {new Date().getFullYear()} 219Clean. All rights reserved.
						</p>
						<p className="mt-4 text-xs leading-5 text-gray-300 sm:mt-0">
							Serving Northwest Indiana with pride and professionalism.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
