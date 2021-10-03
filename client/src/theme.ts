import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    palette: {
        main: 'hsl(212, 100%, 47%)',
        dark: 'hsl(212, 100%, 10%)',
        light: 'hsl(212, 100%, 98%)',
        shadow: 'hsla(212, 100%, 47%, 0.2)',
    },
    shadow: function (): string[] {
        return [
            `${this.palette.shadow} 0px 5px 15px 0px`,
            `${this.palette.shadow} 0px 0px 25px 0px`,
        ];
    },
    bordrRadius: '10px',
    typography: {
        fontSize: {
            h1: 'clamp(4rem, 6vw, 9rem)',
            h2: 'clamp(2rem, 4vw, 4rem)',
            h3: 'clamp(1.2rem, 1vw, 2rem)',
            body: '16px',
        },
        fontFamily: {
            heading: `'Poppins', sans-serif`,
            body: `'Poppins', sans-serif`,
        },
    },
    breakpoint: '1200px',
    lineHeight: '1.5',
};

export default theme;
