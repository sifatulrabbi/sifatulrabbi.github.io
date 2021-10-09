export const theme = {
  palette: {
    main: 'hsl(190, 100%, 56%)',
    dark: 'hsl(212, 100%, 9%)',
    light: 'hsl(212, 100%, 93%)',
    grayish: 'hsl(212, 25%, 55%)',
  },
  typograhy: {
    fontFamily: {
      primay: `'Epilogue', Helvetica, sans-serif`,
      secondary: `'jetBrains Mono', monospace`,
    },
    fontSize: {
      h1: 'clamp()',
      h2: '1.5rem',
      h3: '1.2rem',
      body1: 'clamp(18px, 2vw, 20px)',
      body2: '.9rem',
      captioin: '.8rem',
    },
  },
  breakpoint: '900px',
  borderRadius: '5px',
  padding: function () {
    return `
    padding: 1.5rem;
    @media screen and (min-width: ${this.breakpoint}) {
      padding: 1.5 20vw;
    }
    `;
  },
  shadow: (function () {
    return `
      rgba(0,0,0,0.2) 0px 0px 20px 0px
    `;
  })(),
};

export default theme;
