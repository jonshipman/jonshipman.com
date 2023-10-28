const colors = require('tailwindcss/colors');

const GREEN = '#d3ffdd';
const OLIVE = '#a9ccb1';

export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'system-ui', 'sans-serif'],
			pixel: ['"Press Start 2P"', 'cursive']
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			green: GREEN,
			olive: OLIVE,
			purple: '#6e455d'
		},
		boxShadow: {
			sm: `0px 2px 0px 0px ${OLIVE}`,
			DEFAULT: `0px 3px 0px 0px ${OLIVE}`,
			md: `0px 6px 0px 0px ${OLIVE}`,
			lg: `0px 10px 0px 0px ${OLIVE}`,
			xl: `0px 20px 0px 0px ${OLIVE}`,
			'2xl': `0px 25px 0px 0px ${OLIVE}`,
			inner: `inset 0px 2px 0px 0px ${OLIVE}`,
			none: 'none'
		}
	},
	plugins: []
};
