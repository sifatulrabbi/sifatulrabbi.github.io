import 'styled-components';
import type { ITheme } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            main: string;
            dark: string;
            light: string;
            shadow: string;
        };
        shadow: () => string[];
        bordrRadius: string;
        typography: {
            fontSize: {
                h1: string;
                h2: string;
                h3: string;
                body: string;
            };
            fontFamily: {
                heading: string;
                body: string;
            };
        };
        breakpoint: string;
        lineHeight: string;
    }
}
