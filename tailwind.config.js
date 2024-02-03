const colors = {
	green: {
		DEFAULT: '#d3ffdd',
		100: '#f6fff8',
		200: '#edfff1',
		300: '#e5ffeb',
		400: '#dcffe4',
		500: '#d3ffdd',
		600: '#a9ccb1',
		700: '#7f9985',
		800: '#546658',
		900: '#2a332c'
	},
	olive: {
		DEFAULT: '#a9ccb1',
		100: '#eef5ef',
		200: '#ddebe0',
		300: '#cbe0d0',
		400: '#bad6c1',
		500: '#a9ccb1',
		600: '#87a38e',
		700: '#657a6a',
		800: '#445247',
		900: '#222923'
	},
	purple: {
		DEFAULT: '#6e455d',
		100: '#e2dadf',
		200: '#c5b5be',
		300: '#a88f9e',
		400: '#8b6a7d',
		500: '#6e455d',
		600: '#58374a',
		700: '#422938',
		800: '#2c1c25',
		900: '#160e13'
	}
};

export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			screens: { print: { raw: 'print' } },
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				pixel: ['"Press Start 2P"', 'cursive']
			},
			colors
		}
	},
	plugins: []
};
