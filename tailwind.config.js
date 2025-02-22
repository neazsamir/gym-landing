/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    	colors: {
    		primary: '#FFC300',
    		secondary: '#FFD341',
    	},
    	fontFamily: {
    		bebas: ["Bebas Neue", "sans-serif"],
    		poppins: ["Poppins", "sans-serif"],
    		'open-sans': ["Open sans", "sans-serif"]
    	},
    	keyframes: {
    		upDown: {
    			'0%, 100%': {
    				transform: "translateY(0)",
    			},
    			'50%': {
    				transform: "translateY(-10px)",
    			}
    		}
    	},
    	animation: {
    		"up-down": "upDown 2s ease-in-out infinite",
    	},
    },
  },
  plugins: [],
};