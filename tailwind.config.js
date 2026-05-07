/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A0F1A',
        'navy-mid': '#0D1520',
        'navy-card': '#111927',
        accent: '#5BC8E8',
        'accent-dim': 'rgba(91,200,232,0.12)',
        'text-secondary': '#6B7A90',
        'text-muted': '#A0B4C8',
        'light-bg': '#F7F8FA',
        'light-card': '#FFFFFF',
        'light-border': 'rgba(10,15,26,0.08)',
        'light-text': '#0A0F1A',
        'light-secondary': '#5A6478',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem,8vw,7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.8rem,6vw,5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.2rem,4.5vw,4rem)', { lineHeight: '1.0', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem,3vw,2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.4rem,2.5vw,2rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'label': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.14em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '-0.005em' }],
        'body-md': ['1rem', { lineHeight: '1.65', letterSpacing: '-0.003em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      },
      animation: {
        ticker: 'ticker 40s linear infinite',
        float: 'float 8s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2.2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'line-grow': 'lineGrow 1.5s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceSlow: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 20px rgba(91,200,232,0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(91,200,232,0.5)' },
        },
        lineGrow: {
          from: { width: '0%', opacity: '0' },
          to: { width: '100%', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
