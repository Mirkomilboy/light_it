module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans'],
        'bebas-neue': ['Bebas Neue'],
        'londrina-shadow': ['Londrina Shadow'],
      },
      backgroundColor: {
        'lilac': '#D8E3F5',
        'lilac-100': '#FCFDFE',
        'lilac-200': '#F8FAFD',
        'lilac-300': '#F4F7FC',
        'lilac-400': '#F0F4FB',
        'lilac-600': '#E8EEF9',
        'lilac-1000': '#D8E3F5',
        'purple': '#773DBD',
        'purple-900': '#8650C4',
        'purple-800': '#9564CB',
        'main-light': '#D6D9DC',
        'main': '#202E3D',
        'card': '#374351',
        'brand-gray-800': '#4E5865',
        'text-hover': '#1f2d3d'
      },
      fontSize: {
        '15': '15px',
        '110': '110px',
        '7.5xl': '82px',
      },
      textColor: {
        'lilac': '#FCFDFE',
        'lilacSecondary': '#D8E3F5',
        'lilac-500': '#ECF1FA',
        'custom-gray-900': '#374351',
        'custom-gray-1000': '#202E3D',
      },
      maxWidth: {
        '8xl': '84rem',
      },
      spacing: {
        '100': '28rem',
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
