import type {Config} from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './index.html',
    './src/App.vue',
    './src/components/**/*.{html,vue,jsx,tsx}',
    './src/views/**/*.{html,vue,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1c1c1c',
        foreground: '#e0e0e0',
        primary: {
          DEFAULT: '#4CAF50',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#7B1FA2',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#1E1E1E',
          foreground: '#a0a0a0',
        },
        accent: {
          DEFAULT: '#00C853',
          foreground: '#ffffff',
        },
        popover: {
          DEFAULT: '#1E1E1E',
          foreground: '#e0e0e0',
        },
        card: {
          DEFAULT: '#252525',
          foreground: '#e0e0e0',
        },
        border: '#2C2C2C',
        input: '#2C2C2C',
      },
      fontFamily: {
        sans: ['Ubuntu Sans', 'sans-serif'],
        mono: ['Ubuntu Sans Mono', 'monospace'],
      },
    },
  },
  plugins: [typography()],
} satisfies Config;

