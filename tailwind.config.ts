import type { Config } from 'tailwindcss';

import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["light"],
					"base-100": "#f2f2f2",
					"base-200": "#fafafa",
					"base-300": "#ffffff"
				},
				dark: {
					...require("daisyui/src/theming/themes")["dark"],
					"base-100": "#000000"
				}
			}
		]
	}
} as Config;