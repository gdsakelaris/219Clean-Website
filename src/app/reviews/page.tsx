import type { Metadata } from "next";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Reviews - 219Clean | Customer Testimonials",
	description:
		"Read what our customers say about 219Clean's professional roof and gutter cleaning services. Real reviews from satisfied Northwest Indiana homeowners.",
};

const reviews = [
	{
		name: "Wenonah Wukich",
		location: "Porter",
		rating: 5,
		text: "Christian came and power washed my garage right before my family from out of town came to visit. I am so thankful for him, he did excellent work!",
		service: "Pressure Washing",
	},
	{
		name: "Diane Betterton",
		location: "Chesterton",
		rating: 5,
		text: "We couldn't have been more pleased with Christian's job cleaning our gutters. They were packed with debris and when he was done, they were clean as new, as was the yard all around the house. He took care of our job very quickly and was reasonably priced. Highly recommend 219clean. A+ job!",
		service: "Gutter Cleaning",
	},
	{
		name: "Gabriel Magana",
		location: "Valparaiso",
		rating: 5,
		text: "Had them install permanent outdoor lighting onto my house. My lighting turned out beautifully and without any issues. Wish I could post a video of my lighting results. Great and fair pricing and would most definitely use them again for any other outdoor projects I may have in the future.",
		service: "Outdoor Lighting Installation",
	},
	{
		name: "Meagan Starkey",
		location: "Chesterton",
		rating: 5,
		text: "I highly recommend using Christian. He was prompt, professional, polite, and reasonably priced. Purchased a home this year that had some moss buildup on the roof and some gutter build up and he got everything clean and looking brand new. Pictures of his work were also included when he was finished. I plan on using Christian again in the future and would recommend him to anyone.",
		service: "Roof & Gutter Cleaning",
	},
	{
		name: "Tasha Osafo",
		location: "Chesterton",
		rating: 5,
		text: "219Clean power washed my entire two story home. They did a great job removing the green mold. Christian was very responsive and the services were priced fairly. I would highly recommend his company.",
		service: "Pressure Washing",
	},
	{
		name: "Araceli Magana",
		location: "Valparaiso",
		rating: 5,
		text: "219Clean came and did a full gutter cleaning and roof cleaning as well. Also, mowed my lawn and is very detailed!",
		service: "Multiple Services",
	},
];

const stats = [
	{ name: "Average Rating", value: "5.0★" },
	{ name: "Repeat Customers", value: "95%" },
	{ name: "Customer Satisfaction", value: "100%" },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Reviews() {
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<div className="bg-primary-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Customer Reviews
						</h1>
						<p className="mt-6 text-lg leading-8 text-primary-100">
							Read what our satisfied customers have to say about
							219Clean&apos;s professional cleaning services and
							Christian&apos;s personal approach to excellence.
						</p>
					</div>
				</div>
			</div>

			{/* Stats Section */}
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
						{stats.map((stat) => (
							<div
								key={stat.name}
								className="mx-auto flex max-w-xs flex-col gap-y-4"
							>
								<dt className="text-base leading-7 text-gray-600">
									{stat.name}
								</dt>
								<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>

			{/* Reviews Grid */}
			<div className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							What Our Customers Say
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Real reviews from real customers throughout Northwest Indiana.
						</p>
					</div>

					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
						{reviews.map((review, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200"
							>
								<div className="flex items-center gap-x-4">
									<div>
										<h3 className="font-semibold text-gray-900">
											{review.name}
										</h3>
										<p className="text-sm text-gray-600">{review.location}</p>
									</div>
									<div className="ml-auto">
										<div className="flex items-center">
											{[0, 1, 2, 3, 4].map((rating) => (
												<StarIcon
													key={rating}
													className={classNames(
														review.rating > rating
															? "text-yellow-400"
															: "text-gray-200",
														"h-5 w-5 flex-shrink-0"
													)}
													aria-hidden="true"
												/>
											))}
										</div>
									</div>
								</div>

								<blockquote className="mt-6 text-gray-700">
									<p>&ldquo;{review.text}&rdquo;</p>
								</blockquote>

								<div className="mt-6 text-sm text-gray-500">
									<span className="font-medium">{review.service}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-primary-600 py-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white">
							Join Our Satisfied Customers
						</h2>
						<p className="mt-6 text-lg leading-8 text-primary-100">
							Experience the 219Clean difference for yourself. Get a free
							estimate today and see why our customers consistently rate us 5
							stars.
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
					</div>
				</div>
			</div>
		</div>
	);
}
