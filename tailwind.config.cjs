/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,tsx}", "./index.html"],
	theme: {
		fontSize:{
			'xs': 14,
			'sm': 16,
			'md': 18,
			'lg': 20,
			'xl': 24,
			'2xl': 32,
		},
		colors:{
			'transparent': 'transparent',
			'black': '#000000',
			'white':'#ffffff',
			gray:{
				900: '#121214',
				800: '#202024',
				700: '#7c7c8a',
				400: '#c4c4cc',
				100: '#e1e1e6',
			},
			cyan:{
				500: '#81d8f7',
				300: '#9be1fb',
			},
			red:{
				500: '#cc1919',
			},
			
		},
		extend: {
			fontFamily: {
				sans: "Inter, sans-serif",
			},
		},
	},
	plugins: [],
};
