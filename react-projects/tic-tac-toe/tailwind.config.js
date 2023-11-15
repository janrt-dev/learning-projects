/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			spacing: {
				'minus_1' : '-1px'
			}
		},
	},
	plugins: [],
}

