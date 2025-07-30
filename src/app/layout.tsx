import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "219Clean - Professional Roof & Gutter Cleaning Services",
	description:
		"Founded by Christian Nicholson, 219Clean provides top-notch roof and gutter cleaning services with dedication, integrity, and unparalleled attention to detail.",
	keywords:
		"roof cleaning, gutter cleaning, house cleaning, pressure washing, Christian Nicholson, 219Clean",
	authors: [{ name: "Christian Nicholson" }],
	openGraph: {
		title: "219Clean - Professional Roof & Gutter Cleaning Services",
		description:
			"Professional cleaning services with personalized attention and competitive pricing.",
		type: "website",
		locale: "en_US",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="scroll-smooth"
		>
			<body className="antialiased">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
