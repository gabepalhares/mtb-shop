import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: '0px',
    padding: '0px',
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
})