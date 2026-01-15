/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#FF4500', // Orange Red (Vibrant)
                    hover: '#E03E00',   // Darker Orange Red
                },
                secondary: {
                    DEFAULT: '#050505', // Slightly Lighter Black (Less Intense)
                    light: '#1a1a1a',   // Lighter Soft Black
                },
                accent: {
                    DEFAULT: '#FF6B00', // Pure Orange
                },
                dark: {
                    DEFAULT: '#F8FAFC', // Slate 50
                    card: '#FFFFFF',    // White
                    'card-hover': '#F1F5F9', // Slate 100
                },
                text: {
                    main: '#0F172A', // Slate 900
                    muted: '#64748B', // Slate 500
                    light: '#FFFFFF', // White text
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            fontSize: {
                '7xl': ['4.5rem', { lineHeight: '1' }],
                '8xl': ['6rem', { lineHeight: '1' }],
            },
            boxShadow: {
                'glow': '0 0 20px rgba(255, 102, 0, 0.3)', // Orange glow
                'card': '0 4px 6px -1px rgba(0, 51, 102, 0.1), 0 2px 4px -1px rgba(0, 51, 102, 0.06)', // Blue shadow
                'nav': '0 4px 20px -5px rgba(0, 51, 102, 0.2)', // Blue nav shadow
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                }
            }
        },
    },
    plugins: [],
}
