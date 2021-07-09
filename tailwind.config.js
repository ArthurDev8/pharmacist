module.exports = {
  purge: {
    mode: "layers",
    content: ['./public/**/*.html', 'src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'xl-lg': { 'max': '1185px' },
      'lg': { 'max': '1023px' },
      'lg-md': { 'max': '991px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
      'sm550': { 'max': '550px' },
      'sm-': { 'max': '500px' },
      'sm440': { 'max': '440px' },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
