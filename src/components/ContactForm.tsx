"use client";

import { useState } from "react";

interface FormData {
	name: string;
	email: string;
	phone: string;
	address: string;
	service: string;
	message: string;
}

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		address: "",
		service: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (error) {
			setError(null);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		try {
			// Send email using our API route
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					phone: formData.phone,
					address: formData.address,
					service: formData.service,
					message: formData.message,
				}),
			});

			if (response.ok) {
				setIsSubmitted(true);
				setFormData({
					name: "",
					email: "",
					phone: "",
					address: "",
					service: "",
					message: "",
				});
			} else {
				const errorData = await response.json();
				throw new Error(errorData.error || "Failed to send email");
			}
		} catch (error) {
			console.error("Form submission error:", error);
			setError(
				"Failed to send your request. Please try again or contact us directly at christian219clean@gmail.com"
			);
		}

		setIsSubmitting(false);
	};

	if (isSubmitted) {
		return (
			<div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
				<div className="text-center">
					<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-500">
						<svg
							className="h-8 w-8 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<h3 className="mt-6 text-lg font-semibold text-gray-900">
						Thank You!
					</h3>
					<p className="mt-2 text-gray-600">
						Your estimate request has been sent. Christian will contact you
						soon.
					</p>
					<button
						onClick={() => {
							setIsSubmitted(false);
							setError(null);
						}}
						className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
					>
						Send Another Request
					</button>
				</div>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200"
		>
			{error && (
				<div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200">
					<div className="flex">
						<div className="flex-shrink-0">
							<svg
								className="h-5 w-5 text-red-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div className="ml-3">
							<p className="text-sm text-red-800">{error}</p>
						</div>
					</div>
				</div>
			)}
			<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				<div className="sm:col-span-2">
					<label
						htmlFor="name"
						className="block text-sm font-semibold leading-6 text-gray-900"
					>
						Full Name *
					</label>
					<div className="mt-2.5">
						<input
							type="text"
							name="name"
							id="name"
							required
							value={formData.name}
							onChange={handleChange}
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-semibold leading-6 text-gray-900"
					>
						Email *
					</label>
					<div className="mt-2.5">
						<input
							type="email"
							name="email"
							id="email"
							required
							value={formData.email}
							onChange={handleChange}
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor="phone"
						className="block text-sm font-semibold leading-6 text-gray-900"
					>
						Phone Number
					</label>
					<div className="mt-2.5">
						<input
							type="tel"
							name="phone"
							id="phone"
							value={formData.phone}
							onChange={handleChange}
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div className="sm:col-span-2">
					<label
						htmlFor="address"
						className="block text-sm font-semibold leading-6 text-gray-900"
					>
						Home Address *
					</label>
					<div className="mt-2.5">
						<input
							type="text"
							name="address"
							id="address"
							required
							value={formData.address}
							onChange={handleChange}
							placeholder="Street address, City, State, ZIP"
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div className="sm:col-span-2">
					<label
						htmlFor="service"
						className="block text-sm font-semibold leading-6 text-gray-900"
					>
						Service Needed *
					</label>
					<div className="mt-2.5">
						<select
							name="service"
							id="service"
							required
							value={formData.service}
							onChange={handleChange}
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
						>
							<option value="">Select a service</option>
							<option value="gutter-roof-cleaning">
								Gutter and Roof Cleaning
							</option>
							<option value="roof-washing">Roof Washing</option>
							<option value="pressure-soft-washing">
								Pressure and Soft Washing
							</option>
							<option value="window-washing">Window Washing</option>
							<option value="yard-cleanups">
								Spring and Fall Yard Clean Ups
							</option>
							<option value="paver-sealing">Paver Sealing</option>
							<option value="multiple">Multiple Services</option>
							<option value="other">Other</option>
						</select>
					</div>
				</div>
				<div className="sm:col-span-2">
					<label
						htmlFor="message"
						className="block text-sm font-semibold leading-6 text-gray-900"
					>
						Project Details
					</label>
					<div className="mt-2.5">
						<textarea
							name="message"
							id="message"
							rows={4}
							value={formData.message}
							onChange={handleChange}
							placeholder="Please describe your cleaning needs, property details, timeline, or any specific concerns..."
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
			</div>
			<div className="mt-10">
				<button
					type="submit"
					disabled={isSubmitting}
					className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
				>
					{isSubmitting ? "Sending..." : "Request Free Estimate"}
				</button>
			</div>
			<p className="mt-4 text-xs text-gray-500">
				* Required fields. We respect your privacy and will never share your
				information.
			</p>
		</form>
	);
}
