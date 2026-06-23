/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0D0F1A',
        void: '#05060D',
        landeer: {
          purple: '#7B3DFF',
          magenta: '#A855FF',
          blue: '#3B82FF',
          cyan: '#00D4FF',
          text: '#B8BCCB',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 60px rgba(0, 212, 255, 0.18), 0 0 90px rgba(123, 61, 255, 0.12)',
        card: '0 24px 80px rgba(0, 0, 0, 0.32)',
      },
      backgroundImage: {
        'landeer-gradient': 'linear-gradient(135deg, #A855FF 0%, #3B82FF 52%, #00D4FF 100%)',
        'panel-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.025) 100%)',
      },
    },
  },
  plugins: [],
};
