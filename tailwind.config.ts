import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        dteal: {
          50: '#f0fdfc',
          100: '#ccfbf6',
          200: '#99f6ec',
          300: '#5eeadb',
          400: '#2dd4c2',
          500: '#14b8a6',
          600: '#0d9485',
          700: '#0f766b',
          800: '#115e56',
          900: '#134e48',
          950: '#042f2a',
        }
      }
    }
  }
}
