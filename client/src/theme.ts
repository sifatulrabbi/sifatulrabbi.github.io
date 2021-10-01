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
            h1: 'clamp()',
            h2: 'clamp()',
            h3: 'clamp()',
            body: '16px',
        },
        fontFamily: {
            heading: `'Poppins', sans-serif`,
            body: `'Noto Sans', sans-serif`,
        },
    },
    breakpoint: '1200px',
    lineHeight: '1.5',
};

export default theme;
