/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Paleta tomada EXACTAMENTE del logo: cuero terracota + lettering dorado/champán.
        terra: '#9E4A33', // terracota del logo — fondo base
        terradeep: '#73331F', // terracota profundo — secciones y tarjetas oscuras, footer
        terrasoft: '#B05A41', // terracota claro — secciones/tarjetas alternas, hover
        gold: '#C49A5A', // dorado del logo — acentos / botones
        goldlight: '#E6C88E', // dorado champán del logo — títulos / acentos claros
        champagne: '#F3E6CB', // reflejo champán más claro del logo — texto principal
      },
      borderRadius: {
        '2xl': '1rem',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out both',
      },
    },
  },
  plugins: [],
}
