import { Header } from './components/section/Header'
import { Home } from './components/section/Home'
import { About } from './components/section/About'
import { MobileApp } from './components/section/MobileApp'
import { Services } from './components/section/Services'
import { Trainers } from './components/section/Trainers'
import { Pricing } from './components/section/Pricing'
import { Gallery } from './components/section/Gallery'
import { Testimonial } from './components/section/Testimonial'
import { Contact } from './components/section/Contact'
import { Footer } from './components/section/Footer'
export const App = () => {
	return (
		<div className="text-white">
		<Header />
		<Home />
		<About />
		<MobileApp />
		<Services />
		<Trainers />
		<Pricing />
		<Gallery />
		<Testimonial />
		<Contact />
		<Footer />
		</div>
	)
}