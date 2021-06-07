module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F4EEF9',
          200: '#E7DAF3',
          300: '#DAC6ED',
          400: '#CCB1E6',
          500: '#BF9DDF',
          600: '#B18AD9',
          700: '#A377D2',
          800: '#9564CB',
          900: '#8650C4',
          1000: '#773DBD'
        },
        secondary: {
          100: '#FCFDFE',
          200: '#F8FAFD',
          300: '#F4F7FC',
          400: '#F0F4FB',
          500: '#ECF1FA',
          600: '#E8EEF9',
          700: '#E4EBF8',
          800: '#E0E9F7',
          900: '#DCE5F6',
          1000: '#D8E3F5'
        },
        black: {
          100: '#EDEEEF',
          200: '#D6D9DC',
          300: '#C0C3C8',
          400: '#A9AEB4',
          500: '#9298A0',
          600: '#7B838D',
          700: '#646E79',
          800: '#4E5865',
          900: '#374351',
          1000: '#202E3D'
        },
        red: {
          100: '#FDF2F3'
        },
        'light-blue': {
          1000: '#49AFE4'
        },
        dark: {
          100: '#3C4858',
          200: '#1F2D3D'
        },
        light: {
          600: '#D7E4FF'
        }
      },
      spacing: {
        4.5: '18px',
        15: '3.75rem',
        22: '88px',
        25: '6.25rem',
        7.5: '30px',
        100: '25rem'
      },
      fontFamily: {
        'primary': ['Open Sans', 'sans-serif'],
        'secondary': ['Bebas Neue', 'sans-serif'],
        // 'londrina-shadow': ['Londrina Shadow'],
      },
      maxWidth: {
        content: '33.75rem',
        illustration: '',
        base: '1158px',
        nav: '1327px'
      },
      height: {
        mobie: '567px',
        tablet: '768px',
        base: '138px'
      },
      fontSize: {
        '13': ['13px', '18px'],
        '15': ['15px', '20px'],
        '34': ['34px', '40px'],
        '38': ['38px', '28px'],
        '43': ['43px', '55px'],
        '50': ['50px', '60px'],
        '68': ['68px', '76px'],
        '82': ['82px', '94px'],
        '110': ['110px', '120px'],
      },
      boxShadow: {
        md: '0px 6.8125px 10.2188px -1.70312px rgba(31, 45, 61, 0.1), 0px 3.40625px 6.8125px -1.70312px rgba(31, 45, 61, 0.06);',
        'sombra': '0px 10px 20px rgba(215, 228, 255, 0.2)'
      },
      borderRadius: {
        'lgx': '10px',
        '2xll': '20px'
      },
      letterSpacing: {
        'tiny': '-0.01em',
        'small': '-.02em'
      },
      zIndex: {
        '-1': '-1',
        100: '100',
        1000: '1000'
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
