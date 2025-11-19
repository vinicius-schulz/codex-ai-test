/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#A3C4F3',
          300: '#8BB5F0',
          400: '#73A6ED',
          500: '#5B97EA',
          600: '#4388E7',
          700: '#2B79E4',
          800: '#136AE1',
          900: '#0F5BC4',
        },
        secondary: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#B9E4C9',
          300: '#A5D9B5',
          400: '#91CEA1',
          500: '#7DC38D',
          600: '#69B879',
          700: '#55AD65',
          800: '#41A251',
          900: '#2D973D',
        },
        background: '#F9FAFB',
        surface: '#FFFFFF',
        text: {
          primary: '#4A4A4A',
          secondary: '#9B9B9B',
          muted: '#6B7280',
        },
        border: {
          light: '#E5E7EB',
          medium: '#D1D5DB',
          focus: '#A3C4F3',
        },
        error: {
          100: '#FEF2F2',
          200: '#F7B7A3',
          300: '#F5A690',
          500: '#F1846A',
        },
        success: {
          100: '#F0FDF4',
          200: '#B9E4C9',
          500: '#10B981',
        },
        warning: {
          100: '#FFFBEB',
          200: '#FDE68A',
          500: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        hover: '0 4px 8px rgba(0, 0, 0, 0.1)',
        focus: '0 0 0 3px rgba(163, 196, 243, 0.3)',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
        20: '80px',
        24: '96px',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        loading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        loading: 'loading 1.5s infinite',
      },
      borderRadius: {
        soft: '8px',
      },
    },
  },
  plugins: [],
};
