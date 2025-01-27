// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// };

// tailwind.config.cjs
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// ...
		// make sure it's pointing to the ROOT node_module
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', // tus archivos
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [nextui(), require('daisyui')],
};
