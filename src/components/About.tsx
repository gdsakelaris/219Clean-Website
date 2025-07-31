import Link from "next/link";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function About() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-4xl px-6 lg:px-8">
				<div className="text-center">
					<p className="text-base font-semibold leading-7 text-primary-600">
						About 219Clean
					</p>
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Founded by Christian Nicholson
					</h1>
					<p className="mt-6 text-xl leading-8 text-gray-700 max-w-3xl mx-auto">
						At 219Clean, we understand that your home is more than just a
						building; it&apos;s a reflection of you.
					</p>
				</div>

				<div className="mt-16 max-w-3xl mx-auto">
					<div className="text-base leading-7 text-gray-700">
						<p className="text-center text-lg">
							Christian, the heart and soul of 219Clean, brings his experience
							and passion for perfection to every project. As a one-man team, he
							ensures that each job is handled with the utmost care and
							personalized attention.
						</p>
						<ul
							role="list"
							className="mt-12 space-y-8 text-gray-600"
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
									Proudly serving the Northwest Indiana community with integrity
									and dedication.
								</span>
							</li>
						</ul>
						<p className="mt-12 text-center text-lg">
							Feel free to reach out to Christian directly with any questions or
							to schedule a free estimate. Thank you for considering 219Clean
							for your roof and gutter cleaning needs.
						</p>
						<div className="mt-12 text-center">
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
	);
}
