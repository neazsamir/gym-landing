import { SectionHeading } from '../ui/SectionHeading'
import { FaCircle } from "react-icons/fa";
export const Trainers = () => {
	return (
		<section id="trainers" className="mt-32 md:mt-64 max-w-7xl mx-auto px-4">
		<SectionHeading head="OUR PROFESSIONAL" highlight="TRAINERS" subHead="Whether you're looking to set up a home gym or enhance your current workout routine" />
		<div className="flex flex-wrap items-center justify-center gap-5">
		<div className="max-w-[360px]">
		<img src="trainer1.png" alt="trainer 1" />
		<ul className="mt-5">
		<li className="flex items-center gap-5 font-poppins"><FaCircle className="text-primary" />Personalized training
		</li>
		<li className="flex items-center gap-5 font-poppins"><FaCircle className="text-primary" />Nutrition and supplement advice
		</li>
		<li className="flex items-center gap-5 font-poppins"><FaCircle className="text-primary" />Group training in bootcamp style
		</li>
		</ul>
		</div>
		<div className="max-w-[360px]">
		<img src="trainer2.png" alt="trainer 2" />
		<ul className="mt-5">
		<li className="flex items-center gap-5 font-poppins"><FaCircle className="text-primary" />Personalized training
		</li>
		<li className="flex items-center gap-5 font-poppins"><FaCircle className="text-primary" />Nutrition and supplement advice
		</li>
		<li className="flex items-center gap-5 font-poppins"><FaCircle className="text-primary" />Group training in bootcamp style
		</li>
		</ul>
		</div>
		<div className="max-w-[360px]">
		<img src="trainer3.png" alt="trainer 3" />
		<ul className="mt-5">
		<li className="flex items-center gap-5 font-poppins"><FaCircle className="text-primary" />Personalized training
		</li>
		<li className="flex items-center gap-5 font-poppins"><FaCircle className="text-primary" />Nutrition and supplement advice
		</li>
		<li className="flex items-center gap-5 font-poppins"><FaCircle className="text-primary" />Group training in bootcamp style
		</li>
		</ul>
		</div>
		</div>
		</section>
	)
}