import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";

export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<Services />
			<About />
			<CallToAction />
		</>
	);
}
