import { SectionHeading } from '../ui/SectionHeading'
import { FaCheckCircle } from "react-icons/fa";
import { BtnFilled } from '../ui/BtnFilled'
export const Pricing = () => {
	return (
		<section id="pricing" className="mt-32 max-w-7xl mx-auto px-5">
		<SectionHeading head="MEMBERSHIP" highlight="PRICING" subHead="Unlock Your Potential at Gym Center! Choose the perfect membership that suits your fitness goals and lifestyle." />
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 gap-y-10 mt-28">
		<div className="p-6 sm:max-w-[360px] mx-auto bg-black border border-solid border-primary">
		<h1 className="text-4xl font-bebas text-primary">FLEXFIT</h1>
		<p className="text-sm font-open-sans mt-[-4px]">REGULAR</p>
		  <div className="mt-16 flex items-center gap-3">
		  <h1 className="font-extrabold font-bebas text-5xl">30$</h1>
		  <h2 className="text-3xl font-bebas">/MONTH</h2>
	  	</div>
	  	<ul className="mt-10 flex flex-col gap-3">
	  	<li className="flex items-center gap-3 font-poppins">
	  	<FaCheckCircle className="text-[#E1E1E1] text-2xl" />
	  	24/7 Gym access
	  	</li>
	  	<li className="flex items-center gap-3 font-poppins">
	  	<FaCheckCircle className="text-[#E1E1E1] text-2xl" />
	  	Priority booking for all classes
	  	</li>
	  	<li className="flex items-center gap-3 font-poppins">
	  	<FaCheckCircle className="text-[#E1E1E1] text-2xl" />
	  	Premium mobile app features
	  	</li>
	  	<li className="flex items-center gap-3 font-poppins">
	  	<FaCheckCircle className="text-[#E1E1E1] text-2xl" />
	  	Free monthly consultation
	  	</li>
	  	</ul>
	  	<div className="w-fit mx-auto mt-10">
	  		<BtnFilled text="CHOOSE PLAN" className="text-start rounded-full bg-primary" />
	  	</div>
	  </div>
		<div className="p-6 sm:max-w-[360px] mx-auto bg-primary border border-solid border-primary text-black lg:-translate-y-10 overflow-hidden">
		<h1 className="text-4xl font-bebas">POWERPRO</h1>
		<p className="text-sm font-open-sans mt-[-4px]">BEST</p>
		  <div className="mt-16 flex items-center gap-3">
		  <h1 className="font-extrabold font-bebas text-5xl">50$</h1>
		  <h2 className="text-3xl font-bebas">/MONTH</h2>
	  	</div>
	  	<ul className="mt-10 flex flex-col gap-3">
	  	<li className="flex items-center gap-3 font-poppins">
	  	<FaCheckCircle className="text-2xl" />
	  	24/7 Gym access
	  	</li>
	  	<li className="flex items-center gap-3 font-poppins">
	  	<FaCheckCircle className="text-2xl" />
	  	Priority booking for all classes
	  	</li>
	  	<li className="flex items-center gap-3 font-poppins">
	  	<FaCheckCircle className="text-2xl" />
	  	Premium mobile app features
	  	</li>
	  	<li className="flex items-center gap-3 font-poppins">
	  	<FaCheckCircle className="text-2xl" />
	  	Free monthly consultation
	  	</li>
	  	</ul>
	  	<div className="w-fit mx-auto mt-10">
	  		<BtnFilled text="CHOOSE PLAN" className="text-start rounded-full bg-black text-white hover:text-black hover:bg-white" />
	  	</div>
	  	<div className="bg-[#D9D9D9] py-6 text-center absolute hidden lg:block lg:top-0 lg:right-[-80px] rotate-[40deg] w-[250px] text-[12px]">
	  	BEST OFFER
		 </div>
	  </div>
		<div className="p-6 sm:max-w-[360px] mx-auto bg-black border border-solid border-primary">
		<h1 className="text-4xl font-bebas text-primary">FLEXFIT</h1>
		<p className="text-sm font-open-sans mt-[-4px]">REGULAR</p>
		  <div className="mt-16 flex items-center gap-3">
		  <h1 className="font-extrabold font-bebas text-5xl">95$</h1>
		  <h2 className="text-3xl font-bebas">/MONTH</h2>
	  	</div>
	  	<ul className="mt-10 flex flex-col gap-3">
	  	<li className="flex items-center gap-3 font-poppins">
	  	<FaCheckCircle className="text-[#E1E1E1] text-2xl" />
	  	24/7 Gym access
	  	</li>
	  	<li className="flex items-center gap-3 font-poppins">
	  	<FaCheckCircle className="text-[#E1E1E1] text-2xl" />
	  	Priority booking for all classes
	  	</li>
	  	<li className="flex items-center gap-3 font-poppins">
	  	<FaCheckCircle className="text-[#E1E1E1] text-2xl" />
	  	Premium mobile app features
	  	</li>
	  	<li className="flex items-center gap-3 font-poppins">
	  	<FaCheckCircle className="text-[#E1E1E1] text-2xl" />
	  	Free monthly consultation
	  	</li>
	  	</ul>
	  	<div className="w-fit mx-auto mt-10">
	  		<BtnFilled text="CHOOSE PLAN" className="text-start rounded-full bg-primary" />
	  	</div>
	  </div>
		</div>
		</section>
	)
}