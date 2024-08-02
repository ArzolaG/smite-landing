/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald Variable", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                prata: ["Prata", "serif"],
            },
            colors: {
                "white-opacity-10": "rgba(255,255,255,0.1)",
                primary: "rgba(235, 218, 156)",
            },
        },
    },
    plugins: [],
};
