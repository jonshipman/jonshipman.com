/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/routes/(app)/(inner)/projects/1/**/*.{html,js,svelte,ts}',
		'!./src/routes/(app)/(inner)/projects/1/tailwind.config.js'
	],
	theme: {
		extend: {
			keyframes: {
				out: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				in: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			animation: {
				out: 'out 400ms ease-in-out forwards',
				in: 'in 400ms ease-in-out forwards'
			},
			aspectRatio: {
				'2/1': '2 / 1',
				'4/3': '4 / 3'
			},
			fontFamily: {
				sans: ['"Lexend"', 'sans-serif']
			},
			spacing: {
				76: '19rem',
				84: '21rem',
				112: '28rem',
				128: '32rem',
				144: '36rem',
				160: '40rem',
				192: '48rem'
			},
			maxWidth: {
				'8xl': '88rem',
				'screen-3xl': '160rem'
			},
			colors: {
				blue: {
					50: '#f2f8fd',
					100: '#e4effa',
					200: '#c2def5',
					300: '#8dc4ec',
					400: '#4fa5e1',
					500: '#298ace',
					600: '#1c75bc',
					DEFAULT: '#1c75bc',
					700: '#16578e',
					800: '#164a76',
					900: '#183f62',
					950: '#102841'
				},
				orange: {
					50: '#fef7ee',
					100: '#fdedd7',
					200: '#fad7ae',
					300: '#f6b97b',
					400: '#f19246',
					500: '#ed7422',
					DEFAULT: '#ed7422',
					600: '#de5b18',
					700: '#b84416',
					800: '#933719',
					900: '#762f18',
					950: '#40160a'
				},
				green: {
					50: '#effaf4',
					100: '#d8f3e2',
					200: '#b4e6ca',
					300: '#83d2aa',
					400: '#50b787',
					500: '#2d9c6b',
					600: '#1e7d55',
					700: '#186446',
					800: '#155039',
					DEFAULT: '#144734',
					900: '#144734',
					950: '#09251b'
				}
			},
			letterSpacing: {
				wideaholic: '0.35rem'
			},
			dropShadow: {
				DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.25)',
				'2xl': '10px 10px 25px rgba(0, 0, 0, 0.20)'
			},
			lineHeight: {
				11: '2.75rem',
				12: '3rem',
				13: '3.25rem',
				14: '3.5rem',
				15: '3.75rem',
				16: '4rem',
				17: '4.25rem'
			}
		}
	},
	plugins: []
};
