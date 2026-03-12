// Generated with Claude Code assistance
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          soft: 'var(--primary-soft)',
          dark: 'var(--primary-dark)',
          bright: 'var(--primary-bright)',
        },
        background: {
          DEFAULT: 'var(--background)',
          card: 'var(--card)',
          soft: 'var(--background-soft)',
        },
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        success: {
          DEFAULT: 'var(--success)',
          soft: 'var(--success-soft)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          soft: 'var(--warning-soft)',
        },
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(31,41,51,0.06), 0 4px 12px rgba(31,41,51,0.04)',
        hover: '0 4px 20px rgba(95,168,164,0.18)',
      },
    },
  },
  plugins: [],
}
