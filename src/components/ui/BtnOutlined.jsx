export const BtnOutlined = ({text, className}) => {
  return (
    <a href="#" className={`${className} relative inline-block text-3xl font-bebas text-primary border border-solid border-primary z-[1] transition-colors duration-500 ease-in before:content-[''] before:absolute before:w-0 before:h-full before:bg-primary before:z-[-1] before:top-0 before:left-0 before:transition-all before:duration-500 before:ease-in hover:before:w-full overflow-hidden`}>
      {text}
    </a>
  );
}