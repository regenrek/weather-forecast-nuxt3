import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      boxShadow: {
        'mj-inset-light': 'inset 0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.1)',
        '2xl-light': '0 25px 15px -8px rgb(0 0 0 / 0.1)',
        'btn': 'rgba(50, 50, 93, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
        'card': 'rgba(50, 50, 105, 0.07) 0px 2px 10px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
        'card-gray': '0px 2px 4px 0px rgba(255, 255, 255, 0.5) inset, 0px 2px 20px 0px rgba(0, 0, 0, 0.01)'
      },
      colors: {
        'cod-gray': {
          400: '#aaa',
          300: '#454545',
          200: '#1d1d1d',
          100: '#101010',
          50: '#0b0b0b'
        },
        'wildsand': {
          50: '#f6f6f6',
          100: '#efefef',
          200: '#dcdcdc',
          300: '#bdbdbd',
          400: '#989898',
          500: '#7c7c7c',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3d3d3d',
          950: '#292929'
        }
      }
    }
  }
}
