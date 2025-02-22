export const SectionHeading = ({subHead, head, highlight}) => {
	return (
		<>
		<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-extrabold font-bebas">{head} <span className="text-primary">{highlight}</span></h1>
		<p className="text-center font-poppins my-5 max-w-2xl mx-auto">{subHead}</p>
		</>
	)
}