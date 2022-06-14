module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    colors: {
      white: '#fff',
      blue: '#1363df',
      black: '#000',
      gray: '#7f8487',
      extend: {},
    },
    borderWidth: {
      1: '1px',
      2: '2px',
    },
    variants: {
      extend: {},
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
