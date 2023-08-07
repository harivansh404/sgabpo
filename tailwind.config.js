/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-green": "var(--primary-green)",
                "secondary-green": "var(--secondary-green)",
                'green7': "var(--green7)",
                'cyan4': "var(--cyan4)",
                'yellow3': "var(--yellow3)",
            },
        },
    },
    plugins: [],
};
