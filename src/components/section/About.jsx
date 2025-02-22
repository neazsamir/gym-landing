import { SectionHeading } from '../ui/SectionHeading'
export const About = () => {
	return (
		<section id="about" className="mt-32 max-w-7xl mx-auto px-4">
		<SectionHeading head="WHY" highlight="CHOOSE US" subHead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius deleniti aliquid, optio quos, fugit ea, at temporibus est voluptatum sequi perspiciatis saepe hic incidunt" />
			<div className="grid justify-center items-center gap-5 grid-cols-1 md:grid-cols-2 mt-10">
			<div className="border border-solid border-primary px-6 py-14 lg:px-20 hover:translate-y-[-5px] transition-transform duration-300 ease-in">
			<h3 className="text-2xl font-bebas">01</h3>
			<h3 className="text-2xl font-bebas text-primary">Tailored Workouts for Every Level</h3>
			<p className="font-open-sans">No matter if you're just starting or a seasoned pro, our programs are designed to match your fitness level and push you further.</p>
			</div>
			<div className="border border-solid border-primary px-6 py-14 lg:px-20 hover:translate-y-[-5px] transition-transform duration-300 ease-in">
			<h3 className="text-2xl font-bebas">02</h3>
			<h3 className="text-2xl font-bebas text-primary">State-of-the-Art Equipment</h3>
			<p className="font-open-sans">No matter if you're just starting or a seasoned pro, our programs are designed to match your fitness level and push you further.</p>
			</div>
			<div className="border border-solid border-primary px-6 py-14 lg:px-20 hover:translate-y-[-5px] transition-transform duration-300 ease-in">
			<h3 className="text-2xl font-bebas">03</h3>
			<h3 className="text-2xl font-bebas text-primary">Expert Trainers & Support</h3>
			<p className="font-open-sans">No matter if you're just starting or a seasoned pro, our programs are designed to match your fitness level and push you further.</p>
			</div>
			<div className="border border-solid border-primary px-6 py-14 lg:px-20 hover:translate-y-[-5px] transition-transform duration-300 ease-in">
			<h3 className="text-2xl font-bebas">04</h3>
			<h3 className="text-2xl font-bebas text-primary">Flexible Membership Plans</h3>
			<p className="font-open-sans">No matter if you're just starting or a seasoned pro, our programs are designed to match your fitness level and push you further.</p>
			</div>
			</div>
		</section>
	)
}