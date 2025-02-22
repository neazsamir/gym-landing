export const BtnFilled = ({text, className}) => {
	return <button className={`${className} max-w-[300px] w-full px-5 py-3 font-open-sans text-start text-black hover:bg-secondary transition duration-300 ease-in`}>{text}</button>
}