const theme = {
    palette: {
        background: 'hsl(212, 100%, 3%)',
        font: {
            primary: 'hsl(212, 100%, 100%)',
            secondary: 'hsl(212, 10%, 60%)',
        },
        primary: 'hsl(212, 100%, 47%)',
    },
    fontFamily: {
        heading: `'Custom', sans-serif`,
        body: `'Open Sans', sans-serif`,
    },
    fontSize: {
        body: '16px',
        h1: 'clamp(3.4rem, 8vw, 8rem)',
        h2: 'clamp(2.2rem, 8vw, 7rem)',
        caption: '1.1rem',
    },
    lineHeight: {
        body: '1.5',
        heading: '1',
    },
    breakPoint: '1200px',
    responsive: (styles: string) => {
        return `@media screen and (main-width: 1200px) {
            ${styles}
        }`;
    },
    padding: () => {
        return `
            padding-right:2rem;
            padding-left:2rem;

            @media screen and (min-width: 1200px) {
                padding-right: 10vw;
                padding-left: 10vw;
            }
        `;
    },
};

export type ITheme = typeof theme;
export default theme;
