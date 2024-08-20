import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      offwhite: '#f3f0f1',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',
      
      red500: '#B7410E',
      red300: '#CD5700',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  },
  media: {
    sm: '(max-width: 500px)',
    md: '(max-width: 768px)',
    container: '(max-width: 1180px)',
    notebook: '(max-width: 1366px)',
  },
})