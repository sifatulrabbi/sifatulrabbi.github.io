export const theme = {
  palette: {
    main: 'hsl(190, 100%, 56%)',
    dark: 'hsl(212, 100%, 9%)',
    light: 'hsl(212, 100%, 93%)',
    grayish: 'hsl(212, 25%, 55%)',
    transDark: 'hsla(212, 100%, 9%, 85%)',
    transparent: 'hsla(190, 100%, 56%, 25%)',
  },
  typography: {
    fontFamily: {
      primary: `'Epilogue', Helvetica, sans-serif`,
      secondary: `'jetBrains Mono', monospace`,
    },
    fontSize: {
      h1: 'clamp(2.6rem, 4.5vw, 5rem)',
      h2: '2rem',
      h3: '1.7rem',
      body1: '1rem',
      body2: '.9rem',
      caption: '.8rem',
    },
  },
  breakpoint: '900px',
  borderRadius: '5px',
  transition: function (prop: string = 'all') {
    return `${prop} 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`;
  },
  padding: function () {
    return `
    padding: 1.5rem;
    @media screen and (min-width: ${this.breakpoint}) {
      padding: 1.5rem 18vw;
    }
    `;
  },
  shadow: [
    `rgba(0, 0, 0, 0.4) 0px 0px 10px 0px`,
    `rgba(0, 0, 0, 0.4) 0px 0px 10px 0px, rgba(0, 0, 0, 0.2) 0px 8px 20px 0px;`,
  ],
};

export default theme;
