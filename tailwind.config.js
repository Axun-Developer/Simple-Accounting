/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                "noto-sans-tc": "Noto-Sans-TC",
                "noto-serif-tc": "Noto-Serif-TC",
            },
            colors: {
                "primary": "#2C2C2C",
                "primary-dark": "#1E1E1E",
                "primary-darker": "#333333",
            }
        },
    },
    plugins: [],
};
