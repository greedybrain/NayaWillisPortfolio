import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#394B71",
                secondary: "#FE625C",
                tertiary: "#fffbf3ff",
            },
            boxShadow: {
                "neo-xs": "2px 2px 0 0 #000000",
                "neo-sm": "4px 4px 0 0 #000000",
                "neo-md": "5px 5px 0 0 #000000",
                "neo-lg": "6px 6px 0 0 #000000",
                "neo-xl": "7px 7px 0 0 #000000",
            },
        },
    },
    plugins: [],
};
export default config;
