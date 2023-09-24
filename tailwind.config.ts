import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			white: "#FFFFFF",
			gray: "#EBEBED",
			black: "#000000",
			primary: {
				DEFAULT: "#D87D4A",
				["50"]: "#FBAF85",
			},
			secondary: {
				DEFAULT: "#000000",
				["50"]: "#101010",
			},
			tertiary: {
				DEFAULT: "#FFFFFF",
				["50"]: "#FAFAFA",
				["100"]: "#F1F1F1",
			},
		},
		extend: {
			typography: {
				"headline-h1": {
					css: {
						fontSize: "56px",
						fontWeight: "700",
						lineHeight: "58px",
					},
				},
				"headline-h2": {
					css: {
						fontSize: "40px",
						fontWeight: "700",
						lineHeight: "44px",
					},
				},
				"headline-h3": {
					css: {
						fontSize: "32px",
						fontWeight: "700",
						lineHeight: "36px",
					},
				},
				"headline-h4": {
					css: {
						fontSize: "28px",
						fontWeight: "700",
						lineHeight: "normal",
					},
				},
				"headline-h5": {
					css: {
						fontSize: "24px",
						fontWeight: "700",
						lineHeight: "normal",
					},
				},
				"headline-h6": {
					css: {
						fontSize: "18px",
						fontWeight: "700",
						lineHeight: "normal",
					},
				},
				body: {
					css: {
						fontSize: "15px",
						fontWeight: "500",
						lineHeight: "normal",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
