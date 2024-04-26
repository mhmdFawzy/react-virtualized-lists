const { join } = require('path')

module.exports = {
  content: [join(__dirname, 'src/**/*.{ts,tsx,html}')],
  theme: {
    extend: {
      colors: {
        primary: '#1B73E8',
      },
    },
  },
  plugins: [],
}
