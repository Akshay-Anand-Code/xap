/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'meme-sky': '#8EE1FF',
                'meme-dark': '#18202E',
                'meme-yellow': '#FBBC05',
                'meme-blue-accent': '#6BB5FF',
            },
            fontFamily: {
                'pixel': ['"Press Start 2P"', 'cursive'],
                'retro': ['"VT323"', 'monospace'],
            },
        },
    },
    plugins: [],
}
