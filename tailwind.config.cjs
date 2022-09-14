/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			poppins: 'Poppins, sans-serif',
		},
		extend: {
			colors: {
				darkCharcoal: '#333333',
				lightCharcoal: '#555555',
				darkGray: '#999999',
				gray: '#e2e2e2',
				lightGray: '#dfdfdf',
				purple: '#58249c',
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
	],
};
