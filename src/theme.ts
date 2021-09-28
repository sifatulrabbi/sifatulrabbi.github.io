const theme = {
    palette: {
        background: 'hsl(212, 100%, 2%)',
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
    hoverAnim: `position: relative;
        transition: transform .3s ease-out;

        &:hover {
            transform: scaleY(1.5);
        }

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            background-color: hsl(212, 100%, 2%);
            height: 0;
            width: 100%;
            transition: height 0.2s ease-out;
        }

        &:hover::before {
            height: 3px;
    }`,
};

export type ITheme = typeof theme;
export default theme;
