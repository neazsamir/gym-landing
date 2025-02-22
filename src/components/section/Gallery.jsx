import { SectionHeading } from '../ui/SectionHeading'
import { BtnFilled } from '../ui/BtnFilled'
export const Gallery = () => {
	return (
		<section id="gallery" className="mt-32 mx-auto max-w-7xl px-4 bg-[url(shape.png)] bg-cover bg-center bg-no-repeat">
		<SectionHeading head="OUR" highlight="GALLERY" subHead="Explore the vibrant atmosphere of our gym through our gallery. From state-of-the-art equipment to group classes, get a glimpse of the energy and passion that fuels every workout." />
		<div className="flex justify-center gap-3 flex-wrap items-center mt-20">
		<img src="gallery1.png" alt="gallery 1" />
		<img src="gallery2.png" alt="gallery 2" />
		<img src="gallery3.png" alt="gallery 3" />
		</div>
		<div className="w-fit mx-auto mt-14"><BtnFilled text="SEE MORE PHOTOS" className="rounded-full bg-primary px-10" /></div>
		</section>
	)
}