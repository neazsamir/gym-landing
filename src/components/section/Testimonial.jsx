import { SectionHeading } from '../ui/SectionHeading'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export const Testimonial = () => {
	return (
		
		<section id="testimonial" className="mt-32 px-5 mx-auto max-w-7xl">
			<SectionHeading head="WHAT OUR MEMBERS" highlight="ARE SAYING" subHead="Discover how Gym Center has transformed the fitness journeys of our members. Real stories, real results – see why people love training with us!" />
			<div className="mt-32">
		  <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="max-w-[400px] md:max-w-full"
     >
     <SwiperSlide>
     <div className="flex justify-center items-center gap-5 flex-col md:flex-row border border-solid border-primary md:border-none p-5 md:p-0">
     <figure className="basis-[45%] hidden md:block">
     <img src="testimonial1.png" alt="testimonial 1" />
     </figure>
     <div className="basis-[55%]">
     <div className="flex items-center gap-4">
	     <FaStar className="text-3xl text-yellow-500" />
	     <FaStar className="text-3xl text-yellow-500" />
	     <FaStar className="text-3xl text-yellow-500" />
	     <FaStar className="text-3xl text-yellow-500" />
	     <FaStar className="text-3xl text-yellow-500" />
     </div>
     <p className="font-poppins my-10">Joining Gym Center has been the best decision I’ve made for my health and fitness! The trainers are incredibly supportive, and the atmosphere is so motivating. I’ve gained strength, confidence, and have met amazing people along the way. The group classes are fun, challenging, and always leave me feeling energized.</p>
     <p className="text-primary font-open-sans">Laura Colins</p>
     <p className="font-poppins">Member</p>
     </div>
     </div>
     </SwiperSlide>
     <SwiperSlide>
     <div className="flex justify-center items-center gap-5 flex-col md:flex-row border border-solid border-primary md:border-none p-5 md:p-0">
     <figure className="basis-[45%] hidden md:block">
     <img src="testimonial2.jpg" alt="testimonial 2" />
     </figure>
     <div className="basis-[55%]">
     <div className="flex items-center gap-4">
	     <FaStar className="text-3xl text-yellow-500" />
	     <FaStar className="text-3xl text-yellow-500" />
	     <FaStar className="text-3xl text-yellow-500" />
	     <FaStar className="text-3xl text-yellow-500" />
	     <FaStar className="text-3xl text-yellow-500" />
     </div>
     <p className="font-poppins my-10">Joining Gym Center has been the best decision I’ve made for my health and fitness! The trainers are incredibly supportive, and the atmosphere is so motivating. I’ve gained strength, confidence, and have met amazing people along the way. The group classes are fun, challenging, and always leave me feeling energized.</p>
     <p className="text-primary font-open-sans">Laura Colins</p>
     <p className="font-poppins">Member</p>
     </div>
     </div>
     </SwiperSlide>
     </Swiper>
			</div>
		</section>
	)
}