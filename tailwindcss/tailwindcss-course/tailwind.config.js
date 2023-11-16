/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		spacing: {
			1: "80px",
			2: "12px",
			3: "16px",
			4: "24px",
			5: "32px",
			6: "48px",
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				vuejs: {
					100: "#1bdb11",
					700: "#dbb611",
				},
			},
		},
	},
	plugins: [],
};
