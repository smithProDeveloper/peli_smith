/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class', // activa el modo oscuro con clase 'dark'
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: '#F9FAFB',       // Claro
                    dark: '#111827',          // Oscuro
                },
                surface: {
                    DEFAULT: '#E5E7EB',       // Tarjetas claras
                    dark: '#1F2937',          // Tarjetas oscuras
                },
                text: {
                    DEFAULT: '#111827',       // Texto oscuro
                    dark: '#F9FAFB',          // Texto claro
                    secondary: '#6B7280',     // Texto secundario claro
                    'secondary-dark': '#9CA3AF', // Texto secundario oscuro
                },
                border: {
                    DEFAULT: '#D1D5DB',
                    dark: '#374151',
                },
                primary: '#DB2777',          // Rosa vibrante tipo Netflix
                accent: '#3B82F6',           // Azul brillante
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
                sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

