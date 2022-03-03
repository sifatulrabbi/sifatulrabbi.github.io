export const theme = {
  palette: {
    main: 'hsl(190, 100%, 56%)',
    dark: 'hsl(212, 50%, 7%)',
    light: 'hsl(212, 100%, 100%)',
    grayish: 'hsl(212, 25%, 70%)',
    transDark: 'hsla(212, 100%, 9%, 90%)',
    transparent: 'hsla(190, 100%, 56%, 25%)',
  },

  typography: {
    fontFamily: {
      primary: "'Epilogue', Helvetica, sans-serif",
      secondary: "'Space Mono', monospace",
    },

    fontSize: {
      h1: 'clamp(3rem, 4.5vw, 5.2rem)',
      h2: 'clamp(2.6rem. 4, 3.5)',
      h3: '2rem',
      h4: '1.4rem',
      body1: '16px',
      body2: '.9rem',
      caption: '.8rem',
    },
  },

  breakpoint: '900px',
  borderRadius: '3px',

  overlay: function () {
    return `position: relative; 
    &::before { content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; 
    background-color: ${this.palette.main};
    opacity: 0.5;
    border-radius: ${this.borderRadius};
    transition: ${this.transition('opacity')}; } 
    &:hover::before {   opacity: 0; }`;
  },

  transition: function (prop: string = 'all', long?: true) {
    return `${prop} ${long ? '.8s' : '350ms'} cubic-bezier(0.4, 0, 0.2, 1) 0ms`;
  },

  padding: function () {
    return `
    padding-right: 1.5rem;
    padding-left: 1.5rem;

    @media screen and (min-width: ${this.breakpoint}) {
      padding-right: 18vw;
      padding-left: 18vw;
    }
    `;
  },

  shadow: [
    `rgba(0, 0, 0, 0.4) 0px 0px 10px 0px`,
    `rgba(0, 0, 0, 0.4) 0px 0px 10px 0px, rgba(0, 0, 0, 0.2) 0px 8px 20px 0px;`,
  ],
};

export default theme;
