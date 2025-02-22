import { SectionHeading } from '../ui/SectionHeading'
import { FaCircle } from "react-icons/fa";
export const MobileApp = () => {
	return (
		<section id="mobikeApp" className="mt-32 max-w-7xl px-4 mx-auto">
			<SectionHeading head={`MOBILE APP`} highlight="FOR WORKOUT" />
			<div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-20 gap-y-10 mt-10">
			<figure className="flex justify-center bg-[url(shape.png)] bg-cover bg-center bg-no-repeat">
			<img className="w-[70%] animate-up-down" src="mobile-app.png" alt="mobile app" />
			</figure>
			<ul className="flex items-start flex-col gap-8">
			<li className="font-open-sans flex gap-5 items-center">  <FaCircle className="text-primary" />24/7 Support from our trainers</li>
			<li className="font-open-sans flex gap-5 items-center">  <FaCircle className="text-primary" />Professional Approach</li>
			<li className="font-open-sans flex gap-5 items-center">  <FaCircle className="text-primary" />Scintific Proven Workout Plans</li>
			<li className="font-open-sans flex gap-5 items-center">  <FaCircle className="text-primary" />Personalised Workout Plans</li>
			<li className="font-open-sans flex gap-5 items-center">  <FaCircle className="text-primary" />IOS, Android App and Web Portal</li>
			<li className="font-open-sans flex gap-5 items-center">  <FaCircle className="text-primary" />Exercises Video Add ons</li>
			</ul>
			</div>
		</section>
	)
}