/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		/**	screens: {
			sm: "380px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},*/
		spacing: {
			1: "8px",
			2: "120px",
			3: "16px",
			4: "24px",
			5: "32px",
			6: "48px",
		},
		extend: {
			fontSize: {
				base: "20px",
			},
			colors: {
				vuejs: {
					100: "#4b0ea5",
					400: "#34af78",
				},
			},
		},
	},
	plugins: [],
};
