import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        secondary: '#F5F5F5',
        accent: '#FF6B6B',
        success: '#51CF66',
        warning: '#FFA500',
        danger: '#FF0000',
        dark: {
          primary: '#0F0F0F',
          secondary: '#1A1A1A',
          tertiary: '#2D2D2D',
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#F8F9FA',
          tertiary: '#E9ECEF',
        },
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      boxShadow: {
        'sm-dark': '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
        'md-dark': '0 4px 6px 0 rgba(0, 0, 0, 0.15)',
        'lg-dark': '0 10px 15px 0 rgba(0, 0, 0, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
      },
      backdropBlur: {
        'xl': '20px',
      },
    },
  },
  plugins: [],
};

export default config;
