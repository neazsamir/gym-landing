import { SectionHeading } from '../ui/SectionHeading'
import { BtnFilled } from '../ui/BtnFilled'
export const Services = () => {
	return (
		<section id="services" className="mt-32 max-w-7xl mx-auto px-4">
			<SectionHeading head="OUR" highlight="SERVICES" subHead="Delivered By Highly Trained Fitness and Health Professionals" />
			<div className="relative z-[1]">
			<div className="flex flex-wrap gap-x-8 gap-y-12 justify-center items-center mt-10">
			<div className="rounded-t-[50px] overflow-hidden bg-[#242424] max-w-[360px] ">
				<img className="w-full " src="service1.jpg" alt="service 1" />
				<div className="px-4">
				<h2 className="text-2xl font-bebas my-4">Free Weights Training</h2>
				<p className="font-poppins">Experience the freedom of training with free weights! Our gym offers a wide range of free weight equipment, including dumbbells, barbells, and kettlebells.</p>
				<BtnFilled className="rounded-full my-5 bg-primary w-full hover:bg-secondary transition duration-300 ease-in" text="LEARN MORE" />
			 </div>
			</div>
			<div className="rounded-t-[50px] overflow-hidden bg-[#242424] max-w-[360px] ">
				<img className="w-full" src="service2.jpg" alt="service 2" />
				<div className="px-4">
				<h2 className="text-2xl font-bebas my-4">Group Fitness Classes</h2>
				<p className="font-poppins">Experience the freedom of training with free weights! Our gym offers a wide range of free weight equipment, including dumbbells, barbells, and kettlebells.</p>
				<BtnFilled className="rounded-full my-5 bg-primary w-full hover:bg-secondary transition duration-300 ease-in" text="LEARN MORE" />
			 </div>
			</div>
			<div className="rounded-t-[50px] overflow-hidden bg-[#242424] max-w-[360px] ">
				<img className="w-full" src="service3.jpg" alt="service 3" />
				<div className="px-4">
				<h2 className="text-2xl font-bebas my-4">PROFESSIONAL TRAINING</h2>
				<p className="font-poppins">Experience the freedom of training with free weights! Our gym offers a wide range of free weight equipment, including dumbbells, barbells, and kettlebells.</p>
				<BtnFilled className="rounded-full my-5 bg-primary w-full hover:bg-secondary transition duration-300 ease-in" text="LEARN MORE" />
			 </div>
			</div>
			</div>
			<img className="hidden md:block absolute sm:top-1/2 lg:top-auto lg:bottom-[-200px] left-1/2 -translate-x-1/2 md:-translate-y-1/2 lg:translate-y-0 z-[-1]" src="coin.png" alt="coin" />
			</div>
		</section>
	)
}