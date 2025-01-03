/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{php,js}',
        './build/**/*.{php,js}',
    ],
    theme: {
        extend: {
            spacing: {
                '13': '3.25rem',
                '15': '3.75rem',
                '128': '32rem',
                '144': '36rem',
            },

            colors: {
                black: "#000000",
                white: "#fff",
                calico: {
                    0: "#FBF7F3",
                    100: "#F7F0E6",
                    200: "#F0E0CD",
                    300: "#E8D1B4",
                    400: "#E1C19B",
                    500: "#D9B282",
                    600: "#AE8E68",
                    700: "#826B4E",
                    800: "#574734",
                    900: "#2B241A",
                },
                coarseWool: {
                    0: "#E8E9E9",
                    100: "#D1D2D4",
                    200: "#A3A6A8",
                    300: "#76797D",
                    400: "#484D51",
                    500: "#1A2026",
                    600: "#151A1E",
                    700: "#0f1115",
                    800: "#0A0D0F",
                    900: "#050608",
                },

            },
            fontFamily: {
                "josefin-sans": ["Josefin Sans", "sans-serif"],
                "mulish": ["Mulish", "sans-serif"],
                "sorts-mill-goudy": ["Sorts Mill Goudy", "serif"],
                "barlow-condensed": ["Barlow Condensed", "sans-serif"],
                "icon-awesome": ["Font Awesome 5 Free"],
            },
            fontSize: {
                'display-1': ['91px', { fontFamily: 'barlow-condensed', lineHeight: '1.2', tracking: '-1.5px' }],
                'display-2': ['81px', { fontFamily: 'barlow-condensed', lineHeight: '1.2', tracking: '-1.5px' }],
                'title-1': ['58px', { fontFamily: 'barlow-condensed', lineHeight: '1.2' }],
                'title-2': ['48px', { fontFamily: 'barlow-condensed', lineHeight: '1.2' }],
                'title-3': ['38px', { fontFamily: 'barlow-condensed', lineHeight: '1.2' }],
                'title-4': ['28px', { fontFamily: 'barlow-condensed', lineHeight: '1.4' }],
                'title-5': ['22px', { fontFamily: 'barlow-condensed', lineHeight: '1.4' }],
                'title-6': ['18px', { fontFamily: 'barlow-condensed', lineHeight: '1.4', letterSpacing: '-0.5px' }],
                'subtitle-1': ['20px', { fontFamily: 'mulish', lineHeight: '1.4', letterSpacing: '1.5px' }],
                'subtitle-2': ['18px', { fontFamily: 'mulish', lineHeight: '1.4', letterSpacing: '1px' }],
                'lead': ['21px', { fontFamily: 'josefin-sans', lineHeight: '1.6', letterSpacing: '0.5px' }],
                'body': ['18px', { fontFamily: 'josefin-sans', lineHeight: '1.6', letterSpacing: '0.25px' }],
                'button': ['18px', { fontFamily: 'josefin-sans', lineHeight: '1.6', letterSpacing: '0.5px' }],
                'caption': ['15px', { fontFamily: 'josefin-sans', lineHeight: '1.6', letterSpacing: '0.5px' }],
                'overline': ['13px', { fontFamily: 'mulish', lineHeight: '1.6', textTransform: 'uppercase', letterSpacing: '1.5px' }],
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
}

