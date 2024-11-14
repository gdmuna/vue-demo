/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html', // 原生 HTML
        './src/**/*.{vue,js,ts,jsx,tsx}' // Vue
    ],
    theme: {
        extend: {}
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['winter']
    }
};
