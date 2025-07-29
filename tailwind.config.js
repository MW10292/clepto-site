module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep expertise without intimidation
        primary: {
          DEFAULT: "#1a365d", // blue-900
          50: "#ebf8ff", // blue-50
          100: "#bee3f8", // blue-100
          200: "#90cdf4", // blue-200
          300: "#63b3ed", // blue-300
          400: "#4299e1", // blue-400
          500: "#3182ce", // blue-500
          600: "#2b77cb", // blue-600
          700: "#2c5282", // blue-700
          800: "#2a4365", // blue-800
          900: "#1a365d", // blue-900
        },
        // Secondary Colors - Warm energy for key actions
        secondary: {
          DEFAULT: "#ed8936", // orange-400
          50: "#fffaf0", // orange-50
          100: "#feebc8", // orange-100
          200: "#fbd38d", // orange-200
          300: "#f6ad55", // orange-300
          400: "#ed8936", // orange-400
          500: "#dd6b20", // orange-500
          600: "#c05621", // orange-600
          700: "#9c4221", // orange-700
          800: "#7b341e", // orange-800
          900: "#652b19", // orange-900
        },
        // Accent Colors - Subtle guidance and links
        accent: {
          DEFAULT: "#4299e1", // blue-400
          50: "#ebf8ff", // blue-50
          100: "#bee3f8", // blue-100
          200: "#90cdf4", // blue-200
          300: "#63b3ed", // blue-300
          400: "#4299e1", // blue-400
          500: "#3182ce", // blue-500
        },
        // Background and Surface
        background: "#f7fafc", // gray-50
        surface: "#edf2f7", // gray-100
        // Text Colors
        text: {
          primary: "#2d3748", // gray-700
          secondary: "#4a5568", // gray-600
          muted: "#718096", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          500: "#48bb78", // green-500
          600: "#38a169", // green-600
        },
        warning: {
          DEFAULT: "#d69e2e", // yellow-600
          50: "#fffff0", // yellow-50
          100: "#fefcbf", // yellow-100
          500: "#ecc94b", // yellow-500
          600: "#d69e2e", // yellow-600
        },
        error: {
          DEFAULT: "#e53e3e", // red-500
          50: "#fed7d7", // red-100
          100: "#feb2b2", // red-200
          500: "#e53e3e", // red-500
          600: "#c53030", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // gray-200
          light: "#f1f5f9", // gray-100
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        serif: ['Source Serif Pro', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'consultative': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
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
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}