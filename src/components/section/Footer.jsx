import { BtnFilled } from '../ui/BtnFilled'
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { CiLocationOn } from 'react-icons/ci'
import { BtnOutlined } from '../ui/BtnOutlined'
import { BsEnvelope } from "react-icons/bs";
import { MdOutlinePhone } from "react-icons/md";
export const Footer = () => {
	return (
		<section id="footer" className="mt-32 max-w-7xl mx-auto px-4">
		<footer>
		<div className="flex gap-32 flex-wrap sm:justify-center py-28 border-b border-b-2 border-blue-900">
		<div>
		<h4 className="font-open-sans text-2xl font-semibold text-primary">
		Services
		</h4>
		<ul className="flex flex-col gap-5 font-poppins mt-8">
		<li><a href="#">Performance</a></li>
		<li><a href="#">Evaluation</a></li>
		<li><a href="#">Location</a></li>
		<li><a href="#">Strength</a></li>
		<li><a href="#">Intensity</a></li>
		<li><a href="#">Recovery</a></li>
		</ul>
		</div>
		<div>
		<h4 className="font-open-sans text-2xl font-semibold text-primary">
		Company
		</h4>
		<ul className="flex flex-col gap-5 font-poppins mt-8">
		<li><a href="#">Service</a></li>
		<li><a href="#">Plan</a></li>
		<li><a href="#">Our team</a></li>
		<li><a href="#">Consultation</a></li>
		<li><a href="#">Blog</a></li>
		<li><a href="#">Contact us</a></li>
		</ul>
		</div>
		<form>
	<h4 className="font-open-sans text-2xl font-semibold text-primary">
		Join a newsletter
		</h4>
		 <div className="flex items-center gap-5 flex-wrap mt-8">
		 <input type="email" placeholder="YOUR EMAIL" required className="bg-gray-700 border border-solid border-primary placeholder:text-gray-400 p-4 outline-none w-full sm:w-max" />
		 <BtnFilled text="Subscribe" className="bg-primary py-4 px-6 text-center w-max rounded-2xl" />
		 </div>
			<ul className="flex items-center gap-5 mt-5 text-black text-4xl">
			<li> 
			<BtnOutlined text={<FaInstagram />} className="hover:text-black h-[60px] w-[60px] rounded-full flex items-center justify-center text-4xl" />
			</li>
			<li> 
			<BtnOutlined text={<FaTwitter />} className="hover:text-black h-[60px] w-[60px] rounded-full flex items-center justify-center text-4xl" />
			</li>
			<li> 
			<BtnOutlined text={<FaFacebook />} className="hover:text-black h-[60px] w-[60px] rounded-full flex items-center justify-center text-4xl" />
			</li>
			</ul>
		 </form>
		</div>
		<div className="flex items-center justify-between flex-wrap gap-5 py-10">
		<p>© GYM CENTER 2025</p>
		<div className="flex items-center gap-x-20 gap-y-10 flex-wrap">
		<p className="flex items-center gap-8"> <CiLocationOn className="text-3xl text-primary" /> New York </p>
		<p className="flex items-center gap-8"> <BsEnvelope className="text-3xl text-primary" /> info@gymcenter.com </p>
		<p className="flex items-center gap-8"> <MdOutlinePhone className="text-3xl text-primary" /> +1 23456789 </p>
		</div>
		</div>
		</footer>
		</section>
	)
}