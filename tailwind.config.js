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
        'lilac-300': '#F4F7FC',
        'lilac-400': '#F0F4FB',
        'purple': '#773DBD',
        'main': '#202E3D',
        'card': '#374351',
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
