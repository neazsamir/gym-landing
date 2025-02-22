import { SectionHeading } from '../ui/SectionHeading'
export const Contact = () => {
	return (
		<section id="contact" className="mt-32 mx-auto max-w-7xl px-4">
		<div className="flex items-center justify-center gap-5 flex-col md:flex-row">
		<figure className="w-fit max-w-xl hidden lg:block">
		<img src="athletic2.png" alt="athletic 1" className="w-[90%]" />
		</figure>
		<div className="basis-1/2">
		<form>
		<SectionHeading head="UNLOCK YOUR FULL" highlight="POTENTIAL TODAY!" />
			<div className="flex items-center gap-5 flex-col md:flex-row">
			<input type="text" placeholder="YOUR NAME" required className="bg-transparent border border-solid border-gray-400 placeholder:text-gray-400 p-4 outline-none basis-1/2 w-full" />
			<input type="number" placeholder="YOUR PHONE" required className="bg-transparent border border-solid border-gray-400 placeholder:text-gray-400 p-4 outline-none basis-1/2 w-full" />
			</div>
			<input type="email" placeholder="YOUR EMAIL" required className="bg-transparent border border-solid border-gray-400 placeholder:text-gray-400 p-4 outline-none w-full mt-5" />
			<button type="submit" className="text-start  w-[200px] px-4 py-3 bg-primary text-black font-open-sans mt-5 hover:bg-secondary transition duration-300 ease-in">
			JOIN US
			</button>
		</form>
		</div>
		</div>
		</section>
	)
}