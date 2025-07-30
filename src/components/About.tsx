import Link from "next/link";
import { CheckIcon } from "@heroicons/react/20/solid";

const values = [
	"Dedicated personal service",
	"Unparalleled attention to detail",
	"Commitment to exceeding expectations",
	"Competitive and transparent pricing",
	"Timely project completion",
	"Community-focused approach",
];

export default function About() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="lg:max-w-lg">
								<p className="text-base font-semibold leading-7 text-primary-600">
									About 219Clean
								</p>
								<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									Founded by Christian Nicholson
								</h1>
								<p className="mt-6 text-xl leading-8 text-gray-700">
									At 219Clean, we understand that your home is more than just a
									building; it's a reflection of you.
								</p>
							</div>
						</div>
					</div>
					<div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
						<div className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]">
							<div className="bg-primary-600 px-6 py-4">
								<p className="text-white font-semibold">Christian Nicholson</p>
								<p className="text-primary-100 text-sm">Founder & Owner</p>
							</div>
							<div className="px-6 py-8 text-gray-300">
								<p className="mb-4">
									"Whether it's a routine cleaning or a more complex
									restoration, I approach every task with the same level of
									professionalism and enthusiasm."
								</p>
								<p className="mb-4">
									"My goal is to provide you with a service that enhances the
									beauty and functionality of your home, all while offering
									competitive pricing and timely completion."
								</p>
								<p className="text-primary-400 font-medium">
									- Christian Nicholson, 219Clean Founder
								</p>
							</div>
						</div>
					</div>
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
								<p>
									Christian, the heart and soul of 219Clean, brings his
									experience and passion for perfection to every project. As a
									one-man team, he ensures that each job is handled with the
									utmost care and personalized attention.
								</p>
								<ul
									role="list"
									className="mt-8 space-y-8 text-gray-600"
								>
									<li className="flex gap-x-3">
										<CheckIcon
											className="mt-1 h-5 w-5 flex-none text-primary-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">
												Personal Touch.
											</strong>{" "}
											Every job is personally handled by Christian, ensuring
											consistent quality and attention to detail.
										</span>
									</li>
									<li className="flex gap-x-3">
										<CheckIcon
											className="mt-1 h-5 w-5 flex-none text-accent-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">
												Community Focused.
											</strong>{" "}
											Proudly serving the Northwest Indiana community with
											integrity and dedication.
										</span>
									</li>
									<li className="flex gap-x-3">
										<CheckIcon
											className="mt-1 h-5 w-5 flex-none text-primary-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">
												Quality Guaranteed.
											</strong>{" "}
											100% satisfaction guarantee on all services with
											competitive pricing.
										</span>
									</li>
								</ul>
								<p className="mt-8">
									Feel free to reach out to Christian directly with any
									questions or to schedule a free estimate. Thank you for
									considering 219Clean for your roof and gutter cleaning needs.
								</p>
								<div className="mt-10">
									<Link
										href="/contact"
										className="btn-primary"
									>
										Contact 219Clean Today
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
