const theme = {
    palette: {
        background: 'hsl(212, 100%, 1%)',
        font: {
            primary: 'hsl(212, 100%, 100%)',
            secondary: 'hsl(212, 10%, 60%)',
        },
        primary: 'hsl(212, 100%, 47%)',
    },
    fontFamily: {
        heading: `'Fira Sans', sans-serif`,
        body: `'Merriweather', sans-serif`,
    },
    fontSize: {
        body: '16px',
        h1: 'clamp(4.5rem, 12vw, 16rem)',
        h2: 'clamp(3.5rem, 8vw, 10rem)',
        h3: 'clamp(1.5rem, 5vw, 2rem)',
    },
    lineHeight: {
        body: '1.5',
        heading: '1.1',
    },
    hoverAnim: `position: relative;
        transition: transform .3s ease-out;

        &:hover {
            transform: scaleY(1.3);
        }

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            background-color: hsl(212, 100%, 2%);
            height: 0;
            width: 100%;
            transform: translateY(-50%);
            transition: height 0.2s ease-out;
        }

        &:hover::before {
            height: 3px;
    }`,
};

export type ITheme = typeof theme;
export default theme;
