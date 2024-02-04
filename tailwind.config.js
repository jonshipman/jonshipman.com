/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: { print: { raw: 'print' } },
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				pixel: ['"Press Start 2P"', 'cursive']
			},
			maxWidth: {
				'screen-2xl': '96rem',
				'screen-3xl': '128rem',
				'screen-4xl': '160rem',
				'screen-5xl': '192rem',
				'screen-6xl': '224rem',
				'screen-7xl': '256rem'
			}
		}
	},
	plugins: []
};

if (config?.theme?.extend)
	config.theme.extend.colors = {
		green: {
			DEFAULT: '#A9CCB1',
			50: '#F1F7F2',
			100: '#E9F2EB',
			200: '#D9E8DD',
			300: '#C9DFCE',
			400: '#B9D5C0',
			500: '#A9CCB1',
			600: '#86B791',
			700: '#63A271',
			800: '#4C8058',
			900: '#375D40',
			950: '#2D4C34'
		},
		purple: {
			DEFAULT: '#ABA9CC',
			50: '#F1F1F7',
			100: '#EAE9F2',
			200: '#DAD9E8',
			300: '#CAC9DF',
			400: '#BBB9D5',
			500: '#ABA9CC',
			600: '#8986B7',
			700: '#6763A2',
			800: '#504C80',
			900: '#3A375D',
			950: '#2F2D4C'
		},
		indigo: {
			DEFAULT: '#A9B1CC',
			50: '#F1F2F7',
			100: '#E9EBF2',
			200: '#D9DDE8',
			300: '#C9CEDF',
			400: '#B9C0D5',
			500: '#A9B1CC',
			600: '#8691B7',
			700: '#6371A2',
			800: '#4C5880',
			900: '#37405D',
			950: '#2D344C'
		},
		blue: {
			DEFAULT: '#A9CCB7',
			50: '#F3F7F1',
			100: '#EBF2E9',
			200: '#DAE8D9',
			300: '#C9DFCB',
			400: '#B9D5C0',
			500: '#A9CCB7',
			600: '#86B7A1',
			700: '#63A28F',
			800: '#4C8078',
			900: '#375D5D',
			950: '#2D4A4C'
		},
		red: {
			DEFAULT: '#CCB1A9',
			50: '#F7F2F1',
			100: '#F2EBE9',
			200: '#E8DCD9',
			300: '#DFCEC9',
			400: '#D5BFB9',
			500: '#CCB1A9',
			600: '#B79086',
			700: '#A27063',
			800: '#80584C',
			900: '#5D4037',
			950: '#4C342D'
		},
		yellow: {
			DEFAULT: '#CCC6A9',
			50: '#F7F6F1',
			100: '#F2F0E9',
			200: '#E8E6D9',
			300: '#DFDBC9',
			400: '#D5D0B9',
			500: '#CCC6A9',
			600: '#B7AE86',
			700: '#A29763',
			800: '#80774C',
			900: '#5D5637',
			950: '#4C462D'
		}
	};

export default config;
