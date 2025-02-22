import {BtnOutlined} from '../ui/BtnOutlined'
export const Home = () => {
	return (
		<section className="bg-[url(hero-bg.jpeg)] bg-cover bg-no-repeat bg-center py-28 relative" id="home">
		<div className="max-w-7xl mx-auto px-4">
		<h1 className="font-extrabold font-poppins text-7xl md:block mb-10 hidden md:text-end typo-stroke" style={{WebkitTextStroke: '2px white', color: 'transparent',}}>GYM CENTER</h1>
		<div className="hero-content">
		<h1 className="font-bebas text-5xl font-extrabold md:text-8xl sm:text-7xl">UNLOCK YOUR<br /> <span className="text-primary">INNER STRENGTH</span></h1>
		<p className="font-poppins max-w-xl mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem hic, ab quos, minima doloribus rem laborum. Itaque, quod veritatis quisquam quos dolorum</p>
			<BtnOutlined text="LEVEL UP NOW" className="px-5 py-2 rounded my-5 hover:text-white" />
		<div className="flex items-center gap-5 max-w-[400px]">
		<div>
			<h2 className="text-primary font-bebas text-3xl text-center">
			05+
			</h2>
			<p className="font-poppins text-[8px] text-center">Years of experience</p>
		</div>
		<div className="border-x border-white border-solid w-[120px]">
			<h2 className="text-primary font-bebas text-3xl text-center">
			1000+
			</h2>
			<p className="font-poppins text-[8px] text-center">Members join</p>
		</div>
		<div>
			<h2 className="text-primary font-bebas text-3xl text-center">
			1000+
			</h2>
			<p className="font-poppins text-[8px] text-center">Happy members</p>
		</div>
		</div>
		</div>
		</div>
		<img className="absolute bottom-[-150px] right-0 h-[300px] hidden sm:block animate-up-down" src="dumble.png" alt="dumble" />
		</section>
	)
}